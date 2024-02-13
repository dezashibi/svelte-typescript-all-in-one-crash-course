<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    onMount(() => {
        console.log("mounted");

        return () => {
            console.log("also killed!");
        };
    });

    onDestroy(() => {
        console.log("killed");
    });
</script>

<h2>Showing</h2>
