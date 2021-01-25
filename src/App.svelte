<script>
  import Header from "./components/Header.svelte";
  import CardGrid from "./components/CardGrid.svelte";
  import { friendsStore } from "./data/friends-store";

  function filter(e) {
    let filterValue = e.target.value.toUpperCase();
    friendsStore.filter(filterValue);
    // console.log(filterValue);
  }
</script>

<main class="container">
  <Header on:keyup={filter} />
  <CardGrid friends={$friendsStore} />
</main>

<style>
  .container {
    margin: 0 5rem;
  }

  /* Media */
  @media (max-width: 490px) {
    .container {
      margin: 0 1rem;
    }
  }
</style>
