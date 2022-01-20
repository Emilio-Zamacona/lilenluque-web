<template>
  <section class="contact --flex --fixed-on-top">
    <div class="contact__img --contact"></div>
    <div class="contact__form-container --flex-col">
      <h1 class="contact__form-container__title">
        Contacto
      </h1>
      <form action="" class="contact__form-container__form --flex-col">
        <div class="contact__form-container__form__field">
          <label for="name">Nombre</label>
          <input id="name" required="required" type="text" @focus="subLine">
        </div>
        <div class="contact__form-container__form__field">
          <label for="email">Email</label>
          <input id="email" required="required" type="email" name="email" @focus="subLine">
        </div>
        <div class="contact__form-container__form__field">
          <label for="msg">Mensaje</label>
          <textarea
            id="msg"
            minlength="10"
            name="msg"
            cols="20"
            rows="10"
            required="required"
            @focus="subLine"
          ></textarea>
        </div>
        <div class="contact__form-container__form__field contact__form-container__form__field--flex-end">
          <button type="submit" value="Check">
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    subLine (e) {
      const fields = document.getElementsByClassName('contact__form-container__form__field')
      for (let i = 0; i < fields.length; i++) {
        const element = fields[i]
        element.classList.remove('--focused-line')
      }
      e.target.parentElement.classList.add('--focused-line')
    }
  }

}
</script>

<style lang="scss" scoped>

.--focused-line{
  &::after{
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width:100%;
    height: 5px;
    background: $color5;
    animation: slideLeft .5s ease;

  }
}

.contact{
  color:$color5;
  background: #e6e47b;
  letter-spacing: 5px;
  &__img{
    background-image: url(../assets/img/contacto.svg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: auto;
    width: 300px;
    height: 300px;
  }
  &__form-container{
    &__title{
      font-size: 2rem;
    }
    &__form{
      gap: 1rem;
      &__field{
        display: flex;
        flex-direction: column;
        position: relative;
        &--flex-end{
          align-items: center;
        }
        input{
          height: 30px;
        }
        input, textarea{
          width: 320px;
          resize: none;
          transition: .5s;
          background:$color6;
          border: none;
          &:focus{
            background: lighten($color5,60%);
            outline: none;
            position: relative;
          }
        }
        button{
          width: 100px;
          height: 40px;
          border: none;
          background: $color5;
          color: $color1;
          letter-spacing: 2px;
        }
      }
    }
  }
  &__social{
    position: absolute;
    bottom: 0;
    left: 0;
    a{
      width: 60px;
      height: 60px;
      background-position: left center;
      background-repeat: no-repeat;
      background-size: auto;
    }
  }
}
@keyframes slideLeft {
  0%{
    transform: scaleX(0);
  }
  100%{
    transform: scaleX(1);
  }
}
</style>
