<template>
  <section class="gallery --flex">
    <div class="gallery__watercolor">
      <div
        v-for="pic in gallery"
        :key="pic.name"
        class="gallery__watercolor__frame --flex"
        :class="[pic.full ? '--full':'']"
        @mouseenter="hoverShow(pic)"
        @mouseleave="hoverShow(pic)"
        @click="fullView(pic.name)"
      >
        <img class="gallery__watercolor__frame__img" :src="require('../assets/img/gallery/'+pic.name)" :alt="pic">
        <transition-group name="fade">
          <div v-if="pic.hover" :key="pic.name" class="gallery__watercolor__frame__description --flex">
            <p>
              {{ pic.description }}
            </p>
          </div>
        </transition-group>
      </div>
      <transition name="fade">
        <div v-if="fullPic!=''" class="--fullPic" @click="fullView('')">
          <img class="--fullPic__img" :src="require('../assets/img/gallery/'+full)" alt="">
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    gallery: {
      type: Object,
      default: () => { return { pic: '' } }
    }
  },
  data () {
    return {
      fullPic: ''
    }
  },
  computed: {
    full () {
      return this.fullPic
    }
  },
  methods: {
    hoverShow (element) {
      element.hover = !element.hover
    },
    fullView (name) {
      this.fullPic = name
    }
  }
}
</script>

<style lang="scss" scoped>
.--fullPic{
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.424);
  display: grid;
  place-items: center;
  &__img{
    position:sticky;
    width: 90vh;
    height: 90vh;
    border: 5px $color1 solid;
  }
}

.gallery{
  &__watercolor{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    &__frame{
      width: 400px;
      height: 400px;
      position: relative;
      transition: .5s;
      &__img{
        width: 100%;
        height: 100%;
        border: 5px solid $color1;
      }
      &__description{
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
        color: $color1;
        align-self: center;
        text-align: center;
        background: rgba(0, 0, 0, 0.507);
      }
    }

  }
}

</style>
