import { useThemeUpdater } from '@src/contexts/ThemeContext';
import 'twin.macro';
export default function Home() {
	const setTheme = useThemeUpdater();

	return (
		<section tw="bg-white  text-black dark:(bg-black text-white)">
			<h1 tw="text-8xl">Hello Andrew</h1>
			<button tw="mr-4" onClick={() => setTheme('dark')}>
				Dark
			</button>

			<button tw="mr-4" onClick={() => setTheme('light')}>
				Light
			</button>
			<button onClick={() => setTheme(null)}>Clear</button>
		</section>
	);
}
