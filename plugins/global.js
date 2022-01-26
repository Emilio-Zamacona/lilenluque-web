import Vue from 'vue'

Vue.prototype.momentaryClass = (event, className, duration) => {
  const element = event.target

  element.classList.add(className)
  setTimeout(() => {
    element.classList.remove(className)
  }, duration)
}
