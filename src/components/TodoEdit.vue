<template>
  <div>
    <md-dialog :md-active.sync="show" @md-closed="onClose">
      <md-dialog-title>Edition: {{currentTask.title}}</md-dialog-title>

      <div class="md-dialog-content">
        <md-field>
          <label>Titre</label>
          <md-input v-model="currentTask.title"></md-input>
        </md-field>

        <md-field>
          <label>Progression ({{currentTask.progress}} %)</label>
          <md-input v-model.number="currentTask.progress" min="0" max="100" type="range"></md-input>
        </md-field>
      </div>


      <md-dialog-actions>
        <md-button class="md-primary" @click="onClose">Close</md-button>
        <md-button class="md-primary" @click="onSubmit">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  export default {
    name: 'todo-edit',
    props: {
      task: {
        type: Object
      }
    },

    data() {
      return {
        show: !!this.task,
        currentTask: Object.assign({}, this.task)
      };
    },

    methods: {
      onClose() {
        this.$emit('close');
        this.currentTask = {};
      },

      onSubmit() {
        this.$emit('submit', this.currentTask);
        this.currentTask = {};
      }
    }


  };
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
    color: #990033;
  }

</style>