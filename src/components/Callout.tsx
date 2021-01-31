import styled from 'styled-components';
import tw from 'twin.macro';

export default function Callout() {
	return (
		<Text>
			Call <h1>Hi</h1>
		</Text>
	);
}

type TextProps = {};
const Text = styled.div<TextProps>`
	${tw` text-9xl dark:text-white`}
`;
