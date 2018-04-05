
'use strict';
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/theme/default.css';
import 'vue-material/dist/vue-material.min.css';
import TodoList from './components/TodoList';

Vue.config.productionTip = false;

Vue.use(VueMaterial);

new Vue({
  components: {
    TodoList
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'thé vert',
          progress: 2
        },
        {
          id: 2,
          title: 'thé à la menthe',
          progress: 2
        }, 
        {
          id: 3,
          title: 'thé aux fruits rouges ',
          progress: 100
        },
         {
          id: 4,
          title: 'thé Bio',
          progress: 100
        },
         {
          id: 5,
          title: 'thé chaï',
          progress: 100
        },
         {
          id: 6,
          title: 'thé Matcha',
          progress: 100
        },  
      ]
    };
  },
  methods: {
    onChangeTask(item) {
      this.todos = this.todos.map((task) => task.id === item.id ? item : task);
    }
  }
}).$mount('#app');