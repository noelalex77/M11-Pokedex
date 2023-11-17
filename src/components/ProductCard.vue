
<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink :to="{name: 'pokemon-details', params: {id:pokemon.id}}">
  <div class="product-card">
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.imageUrl" alt="Pokemon Image" />
  </div>
</RouterLink>
</template>

<style scoped>

.pokemon-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}
.product-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.product-card img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}

.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
