<template>
  <section id="projets" class="section-py" data-scroll-section>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="content-with-caption">
            <p class="content-caption inview" data-scroll data-scroll-speed="1">
              <span>Dernières étoiles</span>
            </p>
            <ul v-if="projets" class="project-list">
              <ProjectListItem
                v-for="projet in projets"
                :key="projet.name"
                :projet="projet"
              />
            </ul>
            <nuxt-link class="btn btn-primary" to="/projets">Projets</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    projets() {
      return this.$store.state.projets.list
    },
  },
}
</script>

<style lang="scss">
.project-list {
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    font-size: 90px;
    line-height: 1;
    margin: 2rem 0;

    &::before {
      margin-top: 0;
    }
    &::after {
      margin-bottom: 0;
    }
  }
  a {
    color: #fff;
    text-transform: lowercase;
    font-weight: 200;
  }
}
</style>
