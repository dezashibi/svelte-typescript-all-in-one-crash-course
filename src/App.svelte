<script>
    import Funny from "./Funny.svelte";
    let customName = "James";
</script>

<Funny wait={4000} />
<Funny name={customName} favoriteColorBegin="green" favoriteColorEnd="red" />

<h1>Hello Again!</h1>

<style>
    h1 {
        color: red;
    }
</style>
