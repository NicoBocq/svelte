<script lang="ts">
	import type { InputType } from './types';
	export let value: any = undefined;
	export let type: InputType = 'text';
</script>

<input
	{...$$restProps}
	bind:value
	on:blur
	on:change
	on:click
	on:contextmenu
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
	{...{ type }}
	class="input"
/>

<style>
	input {
		padding: 0.5rem 1rem;
		border: 1px solid var(--color-grey-light);
		border-radius: 16px;
		background: transparent;
		color: var(--color-theme-1);
	}
	input:focus,
	input:hover {
		border: 1px solid var(--color-theme-2);
		outline: none;
	}
	input:placeholder {
		color: var(--color-grey-light);
	}
</style>
