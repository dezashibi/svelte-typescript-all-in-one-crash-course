<script lang="ts">
    import { onDestroy } from "svelte";
    import countCustomStore from "../stores/Custom.Store";
    const unsub = countCustomStore.subscribe((n) => {
        console.log(n, "count custom store");
    });

    onDestroy(() => {
        unsub();
    });
</script>

<h1>{$countCustomStore}</h1>

<button on:click={countCustomStore.addOne}>+</button>
<button on:click={countCustomStore.subOne}>-</button>
