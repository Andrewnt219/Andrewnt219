import 'twin.macro';
export default function Home() {
	const darkmode = () => (localStorage.theme = 'dark');
	const lightmode = () => (localStorage.theme = 'light');

	return (
		<section tw="bg-white dark:bg-black text-black dark:text-white ">
			<h1 tw="text-8xl">Hello Andrew</h1>

			<button tw="mr-4" onClick={darkmode}>
				Dark
			</button>

			<button onClick={lightmode}>Light</button>
		</section>
	);
}
