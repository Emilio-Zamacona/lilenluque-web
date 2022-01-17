<template>
  <section class="about">
    <h2 class="about__title">
      BIO
    </h2>
    <div class="about__body">
      <div class="about__body__container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore exercitationem hic reiciendis officia, repellat maiores cum, nobis asperiores aliquid molestiae iure illo aut vel eos itaque culpa mollitia eaque maxime facere repellendus quas quasi eveniet doloribus veritatis. Eum esse voluptas animi amet deleniti distinctio quae molestiae, labore culpa cum officia.
        </p>
      </div>
      <div class="about__body__container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo eaque rem? Ex quam deleniti ullam nesciunt, animi consequuntur sunt et facere autem voluptatum enim optio vel aperiam, quis velit ipsum, quasi dolorum recusandae rerum eaque? Expedita temporibus voluptates commodi dolore amet rerum earum totam iste ipsam quos, eligendi unde?</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about{
  height: 100vh;
  width: 100vw;
  background: $color4;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
       color: $color1;
  &::before{
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: url(../assets/img/fondo.jpg)  ;
    filter: hue-rotate(155deg) saturate(2);
    opacity: .3;
  }
  &__title{
    font-size: 2rem;
  }
  &__body{
    display: flex;
    justify-content: center;
    align-items: center;
    &__container{
      padding: 2rem;
      line-height: 2.5rem;
      font-size: 1rem;
      z-index: 2;
    }
  }

}
</style>
