<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
//import axios from 'axios';
import PokemonService from '@/Services/PokemonService.js'

const pokemons = ref(null);

onMounted(() => {
  PokemonService.getPokemon()
    .then((response) => {
      pokemons.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <div class="pokemon-list">
    <ProductCard
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </div>
</template>

<style scoped>
.pokemon-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}


</style>

