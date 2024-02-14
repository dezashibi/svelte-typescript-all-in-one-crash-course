<script lang="ts">
    import { onMount } from "svelte";
    import longpress from "../libs/actions/longpress";

    import "tippy.js/dist/tippy.css";
    import tippy from "tippy.js";
    import tippyAction from "../libs/actions/tippyAction";

    let showButton = true;
    let durations = 1000;

    let button: HTMLButtonElement;

    onMount(() => {
        tippy(".tooltip");

        tippy(button, {
            content: "another button",
        });
    });
</script>

<label>
    <input type="range" bind:value={durations} max={4000} min={100} />
    {durations}ms
</label>

<label><input type="checkbox" bind:checked={showButton} /> Toggle</label>

{#if showButton}
    <button
        class="tooltip"
        data-tippy-content="longpress button"
        use:longpress={{ durations }}
        on:longpress={() => {
            alert("pressed");
        }}
    >
        Hello
    </button>

    <button bind:this={button}>Another button</button>

    <button use:tippyAction={{ content: "custom action tippy" }}>
        Actioned tippy
    </button>
{/if}

<style></style>
