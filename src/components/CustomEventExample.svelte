<script lang="ts">
    import longpress from "../libs/actions/longpress";

    let showButton = true;
    let durations = 1000;
</script>

<label>
    <input type="range" bind:value={durations} max={4000} min={100} />
    {durations}ms
</label>

<label><input type="checkbox" bind:checked={showButton} /> Toggle</label>

{#if showButton}
    <button
        use:longpress={{ durations }}
        on:longpress={() => {
            alert("pressed");
        }}>Hello</button
    >
{/if}

<style></style>
