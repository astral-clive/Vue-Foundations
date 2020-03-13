Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

var vm = new Vue({
  el: '#App',

})

