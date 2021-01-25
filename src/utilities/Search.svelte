<script>
  //   import { createEventDispatcher } from "svelte";

  //   const dispatch = createEventDispatcher();
</script>

<form class="form">
  <div class="form__field">
    <!-- <label for="Search" class="form__field-label">Search</label> -->
    <input
      type="text"
      class="form__field-input"
      placeholder="Search"
      on:keyup
    />
  </div>
</form>

<style>
  .form__field-input {
    padding: 1rem;
    padding-bottom: 5px;
    padding-left: 0;
    border: none;
    border-bottom: 2px solid rgb(243, 243, 243);
    outline: none;
    background: transparent;
    transition: 0.3s;
  }

  .form__field-input:focus,
  .form__field-input:active {
    outline: none;
    border-bottom: 2px solid #4d799f;
  }

  .form__field-input::placeholder {
    color: #acacac;
  }
</style>
