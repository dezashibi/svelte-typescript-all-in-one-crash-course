<script lang="ts">
    export let colorName: string;
    export let colorValue: number;

    let id = colorName.toLowerCase();
</script>

<label for={id}>{colorName} ({colorValue})</label>
<input type="range" {id} bind:value={colorValue} min="0" max="255" />

<style>
    input {
        width: 100%;
    }
</style>
