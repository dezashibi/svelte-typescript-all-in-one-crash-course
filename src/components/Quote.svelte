<script lang="ts">
    async function getQuote() {
        const url = "https://zenquotes.io/api/random";
        const response = await fetch(url); // Await the response of the fetch call
        const [quoteInfo] = await response.json(); // Await the resolution of the .json() method
        return quoteInfo;
    }

    let promiseQuote = getQuote();

    function refreshQuote() {
        promiseQuote = getQuote();
    }
</script>

{#await promiseQuote}
    <h2>Loading Quote...</h2>
{:then quoteInfo}
    <h2>{quoteInfo.q}</h2>
    <h3>{quoteInfo.a}</h3>
{:catch error}
    <h3>Error: {error.message}</h3>
{/await}

<button on:click={refreshQuote}>Refresh Quote</button>
