<script>
    export let name = "Navid";
    export let favoriteColorBegin = "red";
    export let favoriteColorEnd = "blue";

    export let wait = 3000;

    setTimeout(function () {
        favoriteColorBegin = favoriteColorEnd;
    }, wait);
</script>

<h1>
    Hello Svelte Developer,
    <span style="color: {favoriteColorBegin}">{name}</span> 👏
</h1>
