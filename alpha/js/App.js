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
    <button v-on:click="$emit(\'enlarge-text\')">Enlarge text</button>\
  </div>'
})

var vm = new Vue({
  el: '#App',
  data: {
    posts: posts,
    postFontSize: 1
  }
})


// example of tab structure

Vue.component("tab-home", {
  template: "<div>Home component</div>"
});
Vue.component("tab-posts", {
  template: "<div>Posts component</div>"
});
Vue.component("tab-archive", {
  template: "<div>Archive component</div>"
});

new Vue({
  el: "#dynamic-component-demo",
  data: {
    currentTab: "Home",
    tabs: ["Home", "Posts", "Archive"]
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  }
});

