import { DataService } from './data-service';

export class PostDataService {
	public static increaseViews(postId: string): Promise<number | void> {
		async function main() {
			const post = await DataService.getDb().post.findFirst({
				where: { id: postId },
			});

			if (post) {
				await DataService.getDb().post.update({
					where: { id: post.id },
					data: { views: ++post.views },
				});
			}

			return post?.views ?? 0;
		}

		return DataService.handleService(main);
	}
}
