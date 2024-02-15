<script lang="ts">
    import { Layer, Rect, Stage } from ".";
    let showCavas = true;

    let x: number = 20;

    let rect1: any, rect2: any;
</script>

<h1>Konva Example</h1>

<input type="checkbox" bind:checked={showCavas} />
<input type="range" bind:value={x} min={0} max={300} />

<button
    on:click={() => {
        console.log(rect1.rect.getAttrs());
        console.log(rect2.rect.getStage());
        console.log(rect2.rect.getStage());

        rect2.rect.x(100);
    }}
>
    Get Info
</button>

{#if showCavas}
    <Stage width={300} height={400}>
        <Layer
            draggable
            on:dragmove={(e) => {
                console.log(e);
            }}
            on:click={(_e) => {
                alert("clicked");
            }}
        >
            <Rect
                bind:this={rect1}
                {x}
                y={20}
                fill="blue"
                width={200}
                height={100}
                on:click={() => {
                    alert("blue clicked");
                }}
            />
            <Rect
                bind:this={rect2}
                x={50}
                y={50}
                fill="purple"
                width={100}
                height={100}
            />
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
