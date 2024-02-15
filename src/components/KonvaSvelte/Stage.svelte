<script lang="ts">
    import Konva from "konva";
    import { onDestroy, onMount, setContext } from "svelte";
    import { stageKey } from ".";
    import type { Stage as KonvaStage } from "konva/lib/Stage";

    // export let width: number;
    // export let height: number;

    let container: HTMLDivElement;

    let stage: KonvaStage;

    $: if (stage) stage.setAttrs($$props);

    setContext(stageKey, {
        getStage: (): KonvaStage => stage,
    });

    onMount(() => {
        stage = new Konva.Stage({
            container,
            ...$$props,
        });
    });

    onDestroy(() => {
        if (stage) stage.destroy();
    });
</script>

<div bind:this={container}>
    {#if stage}
        <slot />
    {/if}
</div>
