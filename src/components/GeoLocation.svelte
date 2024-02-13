<script lang="ts">
    import { onDestroy } from "svelte";
    import store from "../stores/GeoLocation.Store";
    const unsubscribe = store.subscribe((info) => {
        console.log(info);
    });

    console.log(unsubscribe);

    onDestroy(() => {
        unsubscribe();
        console.log("unsubscribed!");
    });
</script>

{#if !$store.working && !$store.errorMessage}
    <h2>Gathering information</h2>
{:else if $store.errorMessage}
    <h2>Not picking up location: {$store.errorMessage}</h2>
{:else}
    <h2>{$store.lat}, {$store.lng}</h2>
{/if}
