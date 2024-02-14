<script lang="ts">
    export let top: number;
    export let left: number;

    let moving = false;

    function startMove() {
        moving = true;
    }

    function stopMove() {
        moving = false;
    }

    function move(e: MouseEvent) {
        if (moving) {
            left += e.movementX;
            top += e.movementY;
        }
    }
</script>

<svelte:window on:mouseup={stopMove} on:mousemove={move} />

<div
    on:mousedown={startMove}
    on:mouseup={stopMove}
    tabindex="0"
    role="button"
    style="left: {left}px; top: {top}px;"
    class="draggable"
    aria-label="Draggable area"
>
    <slot />
</div>

<style>
    .draggable {
        user-select: none;
        position: absolute;
        border: solid gray 1px;
        cursor: move;
    }
</style>
