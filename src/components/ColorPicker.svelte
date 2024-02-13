<script lang="ts">
    import Slider from "./Slider.svelte";

    let redColor = 100;
    let greenColor = 0;
    let blueColor = 0;
</script>

<div class="row">
    <dir class="column">
        <h1>Color Picker</h1>
    </dir>
</div>

<div class="row">
    <div class="column">
        <form>
            <Slider colorName="Red" bind:colorValue={redColor} />
            <Slider colorName="Green" bind:colorValue={greenColor} />
            <Slider colorName="Blue" bind:colorValue={blueColor} />
        </form>
    </div>
    <div class="column">
        <h3>rgb({redColor}, {greenColor}, {blueColor})</h3>
        <div
            id="color"
            style="background-color: rgb({redColor}, {greenColor}, {blueColor});"
        ></div>
    </div>
</div>

<style>
    #color {
        height: 150px;
        max-width: 150px;
        border: dashed 3px;
    }
</style>
