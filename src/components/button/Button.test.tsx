import { render } from '@testing-library/react';
import Button from './Button';

describe("button component", () => {
	it('renders the button component', () => {
		const ButtonComponent = render(<Button color='primary'>Button Component</Button>);

		expect(ButtonComponent);
	});
});
