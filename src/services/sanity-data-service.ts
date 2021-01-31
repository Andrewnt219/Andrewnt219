import { SanityClient } from '@sanity/client';
import { AssertionError } from 'assert';

export class SanityDataService {
	public static client: SanityClient | null = null;

	private static async setup() {
		try {
			SanityDataService.client = (await import('@lib/sanity')).sanityClient;
		} catch (error) {
			console.error('Fail to import sanity client');
		}
	}

	private static async getClient() {
		if (!SanityDataService.client) {
			await SanityDataService.setup();
		}

		return SanityDataService.client;
	}

	private static assertIsSanityClient(
		client: any
	): asserts client is SanityClient {
		if (client === null || client?.fetch === undefined) {
			throw new AssertionError({ message: 'Client is null!' });
		}
	}

	public static async getPosts() {
		const client = await SanityDataService.getClient();

		SanityDataService.assertIsSanityClient(client);

		return client.fetch<
			{
				title: string;
				slug: {
					current: string;
				};
				content: string;
				_createdAt: string;
				_id: string;
			}[]
		>(`*[_type=='page'] 
		{...}`);
	}
}
