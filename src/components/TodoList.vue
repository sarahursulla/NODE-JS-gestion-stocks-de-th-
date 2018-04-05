<template>
  <div>
    <md-field>
      <label>Rechercher</label>
      <md-input v-model="search"></md-input>
    </md-field>

    <todo-table :list="todos"
                v-on:edit="onEditTask"
                v-on:alert="onAlert"></todo-table>


    <todo-edit v-if="currentTask"
               :task="currentTask"
               @close="onClose"
               @submit="onSubmitTask"></todo-edit>
  </div>

</template>
<script>
  import Vue from 'vue';
  import TodoEdit from './TodoEdit';
  import TodoTable from './TodoTable';

  export default {
    name: 'todo-list',

    props: {
      list: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },

    components: {
      TodoTable,
      TodoEdit
    },

    data() {
      return {
        search: '',
        currentTask: null
      };
    },

    computed: {
      todos: function () {
        return this.list
          .filter((item) => item.title.indexOf(this.search) !== -1)
          .map((item) => Vue.util.extend({}, item));
      }
    },

    methods: {

      onEditTask(item) {
        console.log("Todo-List",item)
        this.$emit('change', item);
      },

      onClose() {
        this.currentTask = null;
      },

      onSubmitTask(item) {
        this.currentTask = null;
        
      },
      onAlert(msg) {
        alert(msg);
      }
    }
  };
</script>

