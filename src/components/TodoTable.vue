<template>
  <div>

    <md-table md-card>
      <md-table-row>
        <md-table-head>Thé</md-table-head>
        <md-table-head>Etat du stock</md-table-head>
        <md-table-head></md-table-head>
      </md-table-row>

      <md-table-row v-for="item in list" :key="item.id">
        <md-table-cell>{{item.title}}</md-table-cell>
        <md-table-cell v-bind:class="{ nostock: item.progress <= 0 }">{{item.progress}}</md-table-cell>
        <md-table-cell v-if="item.progress > 0"><md-button v-on:click="()=>onClickItem(item) ">Prendre</md-button></md-table-cell>
        <md-table-cell v-else><md-button v-on:click="()=>onClickItem(item)" disabled>Prendre</md-button></md-table-cell>
        <div id="example-2">
  
  
</div>
      </md-table-row>

    </md-table>
  </div>
</template>
<script>
  export default {
    name: 'todo-table',
    props: {
      list: {
        type: Array,
        required: true
      }
    },
    methods: {
      onClickItem(item) {
        const newitem={...item}
        newitem.progress -= 1 

        console.log("todo-table",newitem,item) 
        this.$emit('edit', newitem);

      },

      onAlert() {
        this.$emit('alert', 'toto');
      }
    }
  };
</script>
<style>
.nostock{
  color:red;
  }

body{
background-color:#ccccff;
font-family: 'Poor Story', cursive;

}  

</style>
