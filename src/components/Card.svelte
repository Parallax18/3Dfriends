<script>
  //   export let id;
  export let img;
  export let name;
  export let username;
  export let email;
  export let isFilter;
</script>

<div class="robo__outter" {isFilter}>
  <div class="robo">
    <img src={img} alt="" />
    <div class="robo__info">
      <p class="robo__info-name" id="name">{name}</p>
      <p class="robo__info-username" id="user-name">{username}</p>
      <p class="robo__info-email" id="email">{email}</p>
    </div>
  </div>
</div>

<style>
  img {
    width: 100%;
  }

  /* Cards */
  .robo__outter {
    padding: 0 0.3rem;
    background: #4d799f;
    box-shadow: 7px 7px 14px #ebebeb, -7px -7px 14px #ffffff;
    margin: 20px;
    color: #101a2b;
    transition: 0.3s;
    /* max-width: 350px; */
  }

  .robo__outter:hover {
    transform: scale(1.1);
  }

  .robo {
    display: flex;
    align-items: center;
    background: #fff;
    height: 100%;
    padding: 0 1rem;
    border: 1px solid rgb(237, 237, 237);
  }

  .robo img {
    display: block;
    width: 150px;
  }

  .robo__info {
    padding: 0.5rem 0.5rem 0rem 0;
    border-bottom: 2px solid #4d799f;
  }

  .robo__info p {
    padding-bottom: 0.5rem;
  }

  .robo__info-name {
    color: #194063;
    font-weight: bold;
    font-size: 16px;
  }

  .robo__info-username,
  .robo__info-email {
    color: #85878a;
  }

  /* Media */
  @media (max-width: 490px) {
    .robo {
      flex-direction: column;
    }

    .robo__outter {
      max-width: 350px;
      height: 100%;
    }

    .robo {
      padding: 1rem 1rem;
    }
  }
</style>
