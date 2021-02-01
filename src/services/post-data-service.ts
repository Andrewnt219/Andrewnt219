import { Post } from '@prisma/client';
import { Db } from './db';

export class PostDataService {
	public static insertPost(postId: string): Promise<Post | void> {
		async function main() {
			const post = await Db.get().post.create({
				data: { id: postId },
			});

			return post;
		}

		return Db.handleService(main);
	}
	public static increaseViews(postId: string): Promise<number | void> {
		async function main() {
			const post = await Db.get().post.upsert({
				where: { id: postId },
				update: { views: { increment: 1 } },
				create: { id: postId },
			});

			return post.views;
		}

		return Db.handleService(main);
	}
}
