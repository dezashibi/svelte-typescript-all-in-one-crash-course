<script lang="ts">
    import { Layer, Rect, Stage } from ".";
    let showCavas = true;

    let x: number = 20;
</script>

<h1>Konva Example</h1>

<input type="checkbox" bind:checked={showCavas} />
<input type="range" bind:value={x} min={0} max={300} />

{#if showCavas}
    <Stage width={300} height={400}>
        <Layer draggable>
            <Rect {x} y={20} fill="blue" width={200} height={100} />
            <Rect x={50} y={50} fill="purple" width={100} height={100} />
        </Layer>
        <Layer {x}>
            <Rect
                x={100}
                y={80}
                fill="green"
                width={100}
                height={100}
                stroke="black"
                strokeWidth={4}
            />
        </Layer>
    </Stage>
{/if}
