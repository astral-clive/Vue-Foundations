var posts = [
  { id: 1, title: 'Bakeries in Copenhagen', content: 'This is the content' },
  { id: 2, title: 'Apples in Santa Monica', content: 'This is the content' },
  { id: 3, title: 'Museums in Florence', content: 'This is the content' },
];

Vue.component('blog-post', {
  props: ['post'],
  template: '<div class="blog-post">\
  <h3>{{ post.title }}</h3>\
  <div v-html="post.content"></div>\
  </div>'
})

var vm = new Vue({
  el: '#App',
  data: {
    posts: posts
  }
})

