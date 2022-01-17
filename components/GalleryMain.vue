<template>
  <section class="gallery --flex">
    <div class="gallery__watercolor --flex">
      <div v-for="pic in gallery.waterColor" :key="pic.name" class="gallery__watercolor__frame --flex" @mouseenter="hoverShow(pic)" @mouseleave="hoverShow(pic)">
        <img class="gallery__watercolor__frame__img" :src="require('../assets/img/gallery/'+pic.name)" :alt="pic">
        <transition name="fade">
          <div v-if="pic.hover" class="gallery__watercolor__frame__description --flex">
            <p>{{ pic.description }}</p>
          </div>
          <transition />
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      gallery: {
        waterColor: [
          { name: '01.png', description: 'Almendras', hover: false },
          { name: '02.png', description: 'Manzanas', hover: false },
          { name: '03.png', description: 'Globos', hover: false },
          { name: '04.png', description: 'Bananas', hover: false },
          { name: '05.png', description: 'Bolas de Pool', hover: false },
          { name: '06.png', description: 'Bolas de Pool de lejos', hover: false },
          { name: '07.png', description: 'Edificio', hover: false },
          { name: '08.png', description: 'J Q K', hover: false },
          { name: '09.png', description: 'Naipes', hover: false },
          { name: '10.png', description: 'Zanahorizontales', hover: false },
          { name: '11.png', description: 'Stack', hover: false },
          { name: '12.png', description: 'Monedas', hover: false },
          { name: '13.png', description: 'Cómodo', hover: false }
        ],
        feed: [
          '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24png', '25.png', '26.png'
        ],
        logo: [
          '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png', '34.png', '35.png', '36.png', '37.png', '38.png', '39.png'
        ]
      }
    }
  },
  methods: {
    hoverShow (element) {
      element.hover = !element.hover
    }
  }

}
</script>

<style lang="scss" scoped>
.gallery{
  &__watercolor{
    gap: 1rem;
    &__frame{
      width: 400px;
      height: 400px;
      background: $color4;
      position: relative;
      &__img{
        width: 95%;
        height: 95%;
        border: 5px solid $color1;
      }
      &__description{
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 95%;
        height: 95%;
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
