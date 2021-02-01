import React, {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useState,
} from 'react';

type Theme = 'dark' | 'light' | null;
type ThemeProviderProps = {
	children: ReactNode;
};

const ThemeContext = createContext<Theme | undefined>(undefined);
const ThemeUpdaterContext = createContext<
	Dispatch<SetStateAction<Theme>> | undefined
>(undefined);

// TODO when user switch prefer from dark to light, still stuck at dark
function ThemeProvider({ children }: ThemeProviderProps): React.ReactElement {
	const [theme, setTheme] = useState<Theme>(null);

	useEffect(() => {
		if (document.documentElement.classList.contains('dark')) {
			setTheme('dark');
		}
	}, []);

	useEffect(() => {
		if (theme === null) {
			localStorage.removeItem('theme');
		} else {
			localStorage.theme = theme;
		}

		if (localStorage.theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={theme}>
			<ThemeUpdaterContext.Provider value={setTheme}>
				{children}
			</ThemeUpdaterContext.Provider>
		</ThemeContext.Provider>
	);
}

function useTheme() {
	const theme = React.useContext(ThemeContext);

	if (theme === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return theme;
}

function useThemeUpdater() {
	const setTheme = React.useContext(ThemeUpdaterContext);

	if (setTheme === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return setTheme;
}

export { ThemeProvider, useTheme, useThemeUpdater };
