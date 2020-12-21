<template>
  <div data-scroll-section>
    <div class="container">
      <div class="content-with-caption">
        <p class="content-caption inview" data-scroll data-scroll-speed="1">
          <span>étoiles</span>
        </p>
        <ul class="client-list">
          <li v-for="client in clients" :key="client.name">
            <div class="list-item">
              <img :src="client.logo" :alt="client.name" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    clients() {
      return this.$store.state.clients.list
    },
  },
}
</script>

<style lang="scss">
.client-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    flex: 0 0 auto;
    width: 20%;

    &::after {
      content: '';
      display: block;
      padding-bottom: 70%;
    }

    .list-item {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      svg,
      img {
        width: 100%;
        max-width: 70%;
        height: auto;
        max-height: 70%;
        opacity: 0.5;
      }
    }
  }
}
</style>
