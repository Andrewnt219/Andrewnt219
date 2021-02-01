import { PrismaClient } from '@prisma/client';

export class Db {
	private static client: PrismaClient = new PrismaClient();

	public static handleService<T>(main: () => Promise<T>) {
		return main()
			.catch((error) => {
				console.log(error);
			})
			.finally(async () => {
				await Db.client.$disconnect();
			});
	}

	public static get() {
		return this.client;
	}
}
