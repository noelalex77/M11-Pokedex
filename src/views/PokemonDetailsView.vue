
<script setup>
import { ref, onMounted } from 'vue';
import PokemonService from '@/Services/PokemonService.js';

const pokemonDetails = ref(null);

const props = defineProps({
    id: {required: true}
})

onMounted(() => {
  PokemonService.getPokemonID(props.id) // Adjust method name here
    .then((response) => {
      pokemonDetails.value = response.data;
    })
    .catch((error) => {
      console.error('Error fetching Pokemon details:', error);
    });
});
</script>

<template>
    <div v-if="pokemonDetails" class="pokemon-details">
      <h1>{{ pokemonDetails.name }}</h1>
      <div class="detail-row">
        <span>Type 1:</span> <span>{{ pokemonDetails.type1 }}</span>
      </div>
      <div class="detail-row">
        <span>Type 2:</span> <span>{{ pokemonDetails.type2 }}</span>
      </div>
      <div class="detail-row">
        <span>Japanese Name:</span> <span>{{ pokemonDetails.japanesename }}</span>
      </div>
      <div class="detail-row">
        <span>Evolution:</span> <span>{{ pokemonDetails.evolution }}</span>
      </div>
      
    </div>
  </template>
  
  <style scoped>
  .pokemon-details {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .detail-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  span {
    font-weight: bold;
  }
  
  </style>
