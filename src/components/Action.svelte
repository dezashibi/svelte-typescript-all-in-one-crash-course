<script lang="ts">
    let show = false;

    interface ExampleActionParams {
        color: string; // Assuming color is a string like '#fff' or 'red'
        name: string; // The name associated with the action
    }

    function exampleAction(
        node: HTMLDivElement,
        { color, name }: ExampleActionParams,
    ) {
        console.log(node, name);

        const contextFunc = (e: Event) => {
            e.preventDefault();
            alert("right click");
        };

        node.addEventListener("contextmenu", contextFunc);

        node.style.backgroundColor = color;

        return {
            // preventing memory leak and cleanup
            destroy() {
                console.log("killed");
                node.removeEventListener("contextmenu", contextFunc);
            },
        };
    }
</script>

<input type="checkbox" bind:checked={show} />

{#if show}
    <div use:exampleAction={{ color: "red", name: "box" }} />
{/if}

<style>
    div {
        width: 300px;
        height: 300px;
        border: solid black 1px;
    }
</style>
