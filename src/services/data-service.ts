import { PrismaClient } from '@prisma/client';

export class DataService {
	private static db: PrismaClient = new PrismaClient();

	public static handleService<T>(main: () => Promise<T>) {
		return main()
			.catch((error) => {
				console.log(error);
			})
			.finally(async () => {
				await DataService.db.$disconnect();
			});
	}

	public static getDb() {
		return this.db;
	}
}
