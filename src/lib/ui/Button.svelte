<script lang="ts">
	export let disabled = false;
	export let href: string | undefined = undefined;
	export let loading: boolean = false;
	export let label: string = '';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	type={href ? undefined : 'button'}
	role={href ? 'link' : 'button'}
	{href}
	{disabled}
	on:click
	on:change
	on:keydown
	on:keyup
	on:touchstart
	on:touchend
	on:touchcancel
	on:mouseenter
	on:mouseleave
	{...$$restProps}
	class="button"
>
	{#if loading}
		Loading...
	{:else}
		<slot>
			{#if label}
				{label}
			{/if}
		</slot>
	{/if}
</svelte:element>

<style>
	.button {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 16px;
		background: var(--color-theme-1);
		color: white;
	}
	.button:focus,
	.button:hover {
		background: var(--color-theme-2);
		outline: none;
	}
</style>
