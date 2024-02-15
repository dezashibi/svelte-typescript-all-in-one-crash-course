<script lang="ts">
    import Konva from "konva";
    import { createEventDispatcher, getContext, onDestroy } from "svelte";
    import { layerKey } from ".";

    // export let x: number = undefined;
    // export let y: number = undefined;
    // export let height: number = undefined;
    // export let width: number = undefined;
    // export let fill: string = undefined;
    // export let stroke: string = undefined;
    // export let strokeWidth: number = undefined;

    const layer = getContext(layerKey);

    // anyhow $$props is not a good idea

    const rect = new Konva.Rect($$props);

    const dispatch = createEventDispatcher();
    rect.on("mousedown click", (e) => {
        dispatch(e.type, e);
    });

    layer.add(rect);

    $: rect.setAttrs($$props);

    onDestroy(() => {
        rect.destroy();
    });
</script>
