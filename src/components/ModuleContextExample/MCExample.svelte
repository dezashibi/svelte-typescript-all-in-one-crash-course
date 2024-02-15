<script lang="ts">
    import Button, { getTotalButtons } from "./Button.svelte";

    let showButton = false;

    let totalButtons = 0;
</script>

<h1>Module Context Example</h1>

<input type="checkbox" bind:checked={showButton} />

<br />

<Button>Button</Button>
<Button>Button</Button>
{#if showButton}
    <Button>Button</Button>
{/if}

<button
    on:click={() => {
        totalButtons = getTotalButtons();
    }}>Update buttons count</button
>
{totalButtons}
