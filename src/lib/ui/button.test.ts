import { describe, it, expect } from 'vitest';
import Button from './Button.svelte';

describe('button', () => {
  it('should have label', () => {
    const button = new Button({
      target: document.body,
      
    expect(button.label).toBe('Click me');
  }
  );
});