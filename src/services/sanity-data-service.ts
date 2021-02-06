import { SanityClient } from '@sanity/client';

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

	public static async getPosts() {
		const client = await SanityDataService.getClient();

		if (!client) {
			throw new Error('Sanity client is not set up!');
		}

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
		>(`*[_type=='post'] 
		{...}`);
	}
}
