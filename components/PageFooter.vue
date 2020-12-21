<template>
  <footer class="page-footer" data-scroll-section>
    <div class="container">
      <div class="row align-items-center inview" data-scroll>
        <div class="col-md-4 offset-md-1 mb-4 mb-md-0">
          <h2>Houston nous avons la solution à votre problème.</h2>
        </div>
        <div class="col-md-4 offset-md-2">
          <a href="#" class="btn btn-primary">Etablir le contact</a>
          <p>
            <small>Contact imminent.... Je répète, contact imminent!</small>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.page-footer {
  padding-top: 15vh;
  .container {
    overflow: hidden;
  }
  .row {
    padding-top: 10vh;
    padding-bottom: 10vh;
    background: #fff;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    color: #000;
    transform: translateY(100%);
    @include transitionPrefixMultiple(0.4s, all);
    &.is-inview {
      transform: translateY(0);
    }

    a,
    h2 {
      color: #000;
    }

    h2 {
      margin: 0;
    }
  }

  address {
    margin: 0;
  }

  .copyright {
    border-top: solid 1px rgba(#fff, 0.1);
    text-align: center;
    padding: 2rem 15px;
    font-size: 0.9rem;
    margin: 0 15px 0 15px;

    @include mq($from: xlarge) {
      margin: 0 2rem 0 2rem;
    }
  }
}
</style>
