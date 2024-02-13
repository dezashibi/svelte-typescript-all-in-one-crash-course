<script lang="ts">
    import { onDestroy } from "svelte";
    import countStore from "../stores/Count.Store";
    const unsub = countStore.subscribe((n) => {
        console.log(n, "count store");
    });

    setTimeout(() => {
        countStore.update((n) => {
            return n + 300;
        });
    }, 2000);

    onDestroy(() => {
        unsub();
    });
</script>

<h1>{$countStore}</h1>
