import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './';

describe("button component", () => {
	it('renders the button component', () => {
		const { baseElement } = render(<Button color='primary'>Button Component</Button>);

		expect(baseElement).toBeInTheDocument();
	});
});
