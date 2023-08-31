import { fireEvent, render, screen } from '@testing-library/svelte';
import Input from './Input.svelte';

describe('input', () => {
	it('should mount', () => {
		render(Input, { 'data-testid': 'input' });
		const input = screen.getByTestId('input');
		expect(input).toBeInTheDocument();
	});

	// it('should type the right value', async () => {
	// 	const { debug } = render(Input, { type: 'number', 'data-testid': 'input' });
	// 	const input = screen.getByTestId('input');
	// 	await fireEvent.change(input, { target: { value: 'Hello !' } });
	// 	// get the input value
	// 	debug();
	// 	expect(input).toHaveValue('Hello !');
	// });
});
