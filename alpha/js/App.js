var posts = [
  { id: 1, title: 'Bakeries in Copenhagen', content: 'This is the content' },
  { id: 2, title: 'Apples in Santa Monica', content: 'This is the content' },
  { id: 3, title: 'Museums in Florence', content: 'This is the content' },
];

Vue.component('blog-post', {
  props: ['title', 'content'],
  template: '<div class="blog-post"><h3>{{ title }}</h3><div v-html="content">{{ content }}</div></div>'
})

var vm = new Vue({
  el: '#App',
  data: {
    posts: posts
  }
})

