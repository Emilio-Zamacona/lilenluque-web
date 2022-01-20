export const state = () => ({
  navChosen: '',
  design: {
    chosenArticle: ''
  }
})

export const mutations = {
  nav (state, text) {
    state.navChosen = text
  },
  changeDesignArticle (state, text) {
    state.design.chosenArticle = text
  }
}
