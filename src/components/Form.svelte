<script lang="ts">
    let name = "Navid";
    let age = 25;

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function onSubmit() {
        dispatch("form-submit", { name, age });
    }
</script>

<form on:submit|preventDefault={onSubmit}>
    <label for="name">Name</label>
    <input type="text" id="name" bind:value={name} />

    <label for="age">Age</label>
    <input type="number" id="age" bind:value={age} />

    <button type="submit">Submit</button>
</form>
