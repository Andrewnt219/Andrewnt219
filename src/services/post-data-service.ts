import { PrismaClient } from '@prisma/client';

export class PostDataService {
	private static db: PrismaClient = new PrismaClient();

	private static handleService<T>(main: () => Promise<T>) {
		return main()
			.catch((error) => {
				console.log(error);
			})
			.finally(async () => {
				await PostDataService.db.$disconnect();
			});
	}

	public static increaseViews(postId: string): Promise<number | void> {
		async function main() {
			const post = await PostDataService.db.post.findFirst({
				where: { id: postId },
			});

			if (post) {
				await PostDataService.db.post.update({
					where: { id: post.id },
					data: { views: ++post.views },
				});
			}

			return post?.views ?? 0;
		}

		return this.handleService(main);
	}
}
