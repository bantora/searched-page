import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from './';

describe("card component", () => {
	it('renders the card component', () => {
		const { baseElement } = render(<Card title='Title'>Content</Card>);

		expect(baseElement).toBeInTheDocument();
	});
});
