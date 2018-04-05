<template>
  <div class="about">
    <h1>Your Cup of tea</h1>
    <SimpleButton>Gestion des stocks de thé</SimpleButton>
  
    <div>
	  <ul>
		  <li>thé à la menthe<button v-on:click="counter += 10">Etat du stock</button><button v-on:click="counter += 10">10</button></li><br>

		  <li>thé aux fruits<button v-on:click="counter += 15">Etat du stock</button><button v-on:click="counter += 15">15</button></li><br>

		  <li>thé vert<button v-on:click="counter += 12">Etat du stock</button><button v-on:click="counter += 12">12</button></li><br>

		  <li>thé chaï<button v-on:click="counter += 11">Etat du stock</button><button v-on:click="counter += 11">11</button></li><br>

		  <li>thé chaï<button v-on:click="counter += 14">Etat du stock</button><button v-on:click="counter += 14">14</button></li>


	  </ul>
  	</div>
  </div>



</template>

<script>
// @ is an alias to /src
import SimpleButton from '@/components/SimpleButton.vue';

export default {
  name: 'about',
  components: {
    SimpleButton,
  },
};
</script>


