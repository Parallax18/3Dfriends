<script>
  import Card from "./Card.svelte";

  export let friends;
</script>

<main class="robo-grid">
  {#each friends as card}
    {#if card.isFilter}
      <Card
        img={card.img}
        name={card.name}
        username={card.username}
        email={card.email}
        isFilter={card.isFilter}
      />
    {/if}
  {/each}
</main>

<style>
  .robo-grid {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
