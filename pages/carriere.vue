<template>
  <article ref="pageContent" class="page-content">
    <header>
      <div class="container">
        <h1 class="title">libère ton potentiel</h1>
      </div>
    </header>
    <section id="edito" class="section-py pb-0">
      <div class="container">
        <div class="row career-list">
          <div class="col-md-5">
            <h2>passion</h2>
            <p>
              si toi aussi tu craques ton slip devant les awwwards ou behance et
              que tu aimes apprendre afin de pouvoir faire toujours mieux, t'es
              au bon endroit. Chez nous pas de notion de travail, nous œuvrons à
              surprendre nos clients. La participation à la mise sur orbite du
              client est jouissif, tu verras.
            </p>
          </div>
          <div class="col-md-5 offset-md-2">
            <h2>pas de hiérarchie</h2>
            <p>
              nous sommes tous petits face à lunivers. Chez nous, pas de secrets
              de polichinelle, tu seras considéré comme un membre de l'équipe au
              même titre que toutes les personnes qui la compose.
            </p>
          </div>
          <div class="col-md-5">
            <h2>vie de famille</h2>
            <p>
              elle fait partie à part entière de l'équilibre et du bien être
              d'une personne. Donc l'expression "au finish" n'existe pas chez
              nous. Par expérience, nous savons que le travail "forcé" en soirée
              fait bien plus de dégâts que du bien.
            </p>
          </div>
          <div class="col-md-5 offset-md-2">
            <h2>confiance</h2>
            <p>
              chez nous, tu seras considéré comme un collaborateur à part
              entière, il va donc de soi que nous n'allons pas te fliquer. Tu
              sera responsabilité sur des missions dans les temps impartis. Seul
              la qualité et le respect de ces missions importent.
            </p>
          </div>
          <div class="col-md-5">
            <h2>travail nomade</h2>
            <p>
              nous avons la chance de faire un boulot où le lieu a peu
              d'importance. Inutile donc de passer son temps dans les trajets,
              on peut bosser ici et maintenant.
            </p>
          </div>
          <div class="col-md-5 offset-md-2">
            <h2>dialogue</h2>
            <p>
              naturellement rien toujours rose, nous affrontons les obstacles
              ensemble en privilégiant le dialogue. Si quelque chose te
              chiffonne, ne le garde pas pour toi, on en parle et on trouve des
              solutions. Pareil dans l'autre sens, tu sauras exactement comment
              nous te voyons avec tes qualités et tes faiblesses.
            </p>
          </div>
        </div>

        <button
          type="button"
          class="btn btn-light btn-block btn-md-inline-block btn-lg"
          @click.prevent="contactToggle($event)"
        >
          Postuler
        </button>
      </div>
    </section>
  </article>
</template>

<script>
import { mapMutations } from 'vuex'
import global from '~/mixins/global.js'
export default {
  name: 'Carriere',
  mixins: [global],
  methods: {
    ...mapMutations('navigation', [
      'ToggleContactVisibility',
      'changeTypeFormUrl',
    ]), // https://stackoverflow.com/questions/60335163/how-to-correctly-use-nuxt-vue-mapmutations
    contactToggle(event) {
      this.changeTypeFormUrl(
        'https://form.typeform.com/to/cY1PSEvQ?typeform-medium=embed-snippet'
      )
      this.ToggleContactVisibility()
    },
  },
  head() {
    return {
      title: 'Carrière',
    }
  },
}
</script>

<style lang="scss">
.career-list {
  & > div {
    margin-bottom: 7vh;

    &:nth-of-type(even) {
      @include mq($from: large) {
        transform: translateY(-10vh);
      }
    }
  }
}
</style>
