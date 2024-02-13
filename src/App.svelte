<script>
    import ColorPicker from "./components/ColorPicker.svelte";
    import Funny from "./Funny.svelte";
    let customName = "James";
    let name = "Navid";
    let disabled = false;

    let fontSize = 30;

    setTimeout(() => {
        name = "Navid Dezashibi";
    }, 1000);
</script>

<Funny {name} wait={4000} />
<Funny name={customName} favoriteColorBegin="green" favoriteColorEnd="red" />

<h1 style="font-size: {fontSize}px">Hello Again {name}!</h1>

<input type="text" bind:value={name} />

<button {disabled}>Click Me</button>

<input type="range" bind:value={fontSize} min="10" max="50" />
<span>{fontSize}</span>

<hr />

<ColorPicker />

<style>
    h1 {
        color: red;
    }
</style>
