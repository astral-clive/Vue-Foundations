var posts = [
  { id: 1, title: 'Bakeries in Copenhagen' },
  { id: 2, title: 'Apples in Santa Monica' },
  { id: 3, title: 'Museums in Florence' },
];

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

var vm = new Vue({
  el: '#App',
  data: {
    posts: posts
  }
})

