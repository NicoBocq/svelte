import { render, screen, fireEvent } from '@testing-library/svelte';
import Button from './Button.svelte';

describe('button', () => {
	it('should mount', () => {
		render(Button, { 'data-testid': 'button' });
		const button = screen.getByTestId('button');
		expect(button).toBeInTheDocument();
	});

	it('should have label', () => {
		render(Button, { label: 'new button' });
		expect(screen.getAllByText('new button')).toBeTruthy();
	});

	it('should emit click event', async () => {
		const { component, getByTestId } = render(Button, {
			props: { 'data-testid': 'button' }
		});
		const button = getByTestId('button');
		const mock = vi.fn();
		component.$on('click', mock);
		await fireEvent.click(button);
		expect(mock).toHaveBeenCalled();
	});
});
