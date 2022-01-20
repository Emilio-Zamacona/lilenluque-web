<template>
  <div class="article">
    <h1 class="article__title" @click="changeArticle(article.title)">
      {{ article.title+" &#8250;" }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => { return { article: '' } }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    changeArticle (text) {
      this.$store.commit('changeDesignArticle', text)
      console.log(this.$store.state.design.chosenArticle)
    }
  }

}
</script>

<style lang="scss" scoped>
.article{

  &__title{
    cursor: pointer;
  }
  &__content{
    position: absolute;
    top: 40%;
    left: 25%;
    width: 320px;
    height: 320px;
  }
}
</style>
