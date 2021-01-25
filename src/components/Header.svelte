<script>
  import Search from "../utilities/search.svelte";
</script>

<header>
  <div>
    <h3>3D.Friends</h3>
  </div>
  <Search on:keyup />
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
  }

  h3 {
    color: #194063;
    font-weight: normal;
  }

  /* Media */
  @media (max-width: 490px) {
    header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0rem;
    }

    h3 {
      margin-bottom: 2rem;
    }
  }
</style>
