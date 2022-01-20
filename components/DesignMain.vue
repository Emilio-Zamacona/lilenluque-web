<template>
  <section class="design --flex-col --fixed-on-top">
    <h1>DISEÑO</h1>
    <h3>
      Te ofrezco diferentes propuestas basadas en las necesidades de tu emprendimiento o empresa.
      La idea es trabajar sobre la IDENTIDAD de tu marca, para que sea única y personal. Podemos revisar lo que ya está hecho o empezar de cero con todo el contenido.
      Para ello ofrezco que trabajaremos la estrategia de branding que refleje los objetivos y valores de tu marca, mediante la identidad visual.
      Se puede incluir desde la creación de logo, nombre, elección de la paleta de color hasta el aspecto comunicacional, o sea, la organización y revisión de contenidos.
    </h3>
    <div class="--flex">
      <div class="design__articles --flex-col --flex-align-start">
        <DesignItem v-for="article in articles" :key="article.title" class="design__articles__article" :article="article" />
      </div>

      <div class="--flex-col">
        <transition name="appearLeft" mode="out-in">
          <div :key="chosenArticle" class="design__info">
            <h2 v-for="line in currentContent" :key="line">
              {{ line }}
            </h2>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      articles: [
        { title: 'Branding', content: ['Abarca todos los aspectos que conforman tu marca, destacándola dentro del ámbito laboral digital.La voz o sea el tinte a la hora de comunicar. La identidad visual, el nombre, logo, colores. Los valores, misión y visión que se transmiten. Es la descripción completa de tus productos o servicios y su personalidad…', 'Si tu marca fuera humana ¿Cómo sería?', 'seria,', 'alegre,', 'juguetona,', 'estructurada…', 'Las variedades son infinitas y todas son válidas si sabemos cómo y por qué elegirlas. '] },
        { title: 'Identidad visual', content: ['Es el conjunto de elementos visuales que hacen a tu marca y le dan vida. El logo, la tipografía, la paleta de colores, las imágenes y fotografías. La identidad en conjunto con el diseño y la organización permiten potenciar, jerarquizar y dar profesionalismo a tus redes, uno de los espacios más notorios es el Feed de Instagram.'] },
        { title: 'Nombre y logo', content: ['Es un elemento impactante, sencillo y cargado de personalidad que vuelve única e identificable como unidad a tu línea de productos o servicios. Si aún no tenés un logo definido te ofrezco el diseño del mismo, con adaptaciones para utilizarlo en diferentes formatos. También podemos pensar juntos un nombre que se adecue a tus productos o servicios.'] },
        { title: 'Tipografía', content: ['Es la elección de las tipografías, tipo de letra, que utilizaremos. Cada elemento contará con una coherencia y armonía en el conjunto. En este caso elegiremos tipografías claras que vayan con la personalidad de tu marca y que se vuelvan parte de tu identidad.'] },
        { title: 'Paleta de color', content: ['Es importante trabajar con una paleta de color específica que de cuenta de la personalidad de tu marca. Es parte de la identidad, también unifica y acompaña las características de tus productos o servicios para generar una armonía y coherencia visual completa. Sobre todo a la hora de trabajar en redes como Instagram donde el perfil se ve como un conjunto. O generar etiquetas, packaging y '] },
        { title: 'Organización', content: ['Finalmente todos estos elementos deben estar organizados de forma adecuada para que tengan el impacto necesario en las redes. Esta organización dependerá del diseño y también de las necesidades y pretensiones de cada cliente. Mi prioridad es la organización en todos los aspectos, por eso además de lo visual revisamos el contenido, busco ideas para ofrecer servicios que ayuden a la fidelización de los clientes y la forma de comunicarlo para generar una experiencia de marca completa. Por ejemplo, si tu rubro es la venta de cosméticos, pueden ser tips del cuidado de la piel. O si vendes alimentos, puede ser una receta casera con los mismos.'] }

      ]
    }
  },
  computed: {
    chosenArticle () {
      return this.$store.state.design.chosenArticle
    },
    currentContent () {
      let content = ''
      this.articles.forEach((element) => {
        if (element.title === this.chosenArticle) {
          content = element.content
        }
      })
      return content
    }
  }

}
</script>

<style lang="scss" scoped>
.design{
  background: rgb(255, 182, 48);
  &__articles{
    align-items: flex-start;
    width: 100%;
    &__article{
    }
  }
  &__info{
  background: $color4;
  text-align: center;
  border-radius: 10px;
  }
}
</style>
