<template>
  <section class="about --flex-col --fixed-on-top">
    <h2 class="about__title">
      BIO
    </h2>
    <div class="about__body">
      <div class="about__body__container --flex-end">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore exercitationem hic reiciendis officia, repellat maiores cum, nobis asperiores aliquid molestiae iure illo aut vel eos itaque culpa mollitia eaque maxime facere repellendus quas quasi eveniet doloribus veritatis. Eum esse voluptas animi amet deleniti distinctio quae molestiae, labore culpa cum officia.
        </p>
        <div class="--horizontal-line"></div>
        <button class="--button-send" @click="momentaryClass($event, '--button-clicked',1000)">
          Visitar Galería
        </button>
      </div>
      <div class="--vertical-line"></div>
      <div class="about__body__container">
        <img class="about__body__container__pic" :src="'https://classbento.com/images/class/watercolour-painting-ocean-waters-portrait-big.jpg?1616386608'" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.--flex-end{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}
.--horizontal-line{
  background: $color5;
  height: 1px;
  width: 100%;
  margin-block: 2rem;
}
.--vertical-line{
  background: $color5;
  height: 550px;
  width: 1px;
  margin-inline: 2rem;
}
.about{
  background: $color1;
  color: $color5;
  &::before{
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: url(../assets/img/fondo.jpg)  ;
    filter: hue-rotate(155deg) saturate(2);
    opacity: .3;
    z-index: -1;
  }
  &__title{
    font-size: 2rem;
    font-family: 'Against', serif;
  }
  &__body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 960px;
/*     border: 1px solid $color5; */
    background: #f7cd8282;
    &__container{
      padding: 2rem;
      line-height: 2.5rem;
      font-size: 1rem;
      font-weight: 600;
      width: 400px;
      z-index: 99;
      &__pic{
        border: 1px solid $color5;
      }

    }
  }

}
</style>
