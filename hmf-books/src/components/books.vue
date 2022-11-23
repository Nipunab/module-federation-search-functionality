<template>
  <div class="books-container">
    <h2 v-text="author"></h2>
    <div v-for="book in books" :key="book.id">
      <h3 v-text="book.title"></h3>
      <p v-text="book.description"></p>
      <img :src="book.image" alt="book image" />
      <button class="buy" type="button" @click="onClick(book)">Buy Now</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class books extends Vue {
    @Prop()
    public author: string;
    @Prop()
    public books: [];

    public onClick(book: any) {
      this.$emit('buy', book);
    }
  }
</script>

<style scoped lang="scss">
  .books-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 800px;
    border: 1px solid #ccc;
    padding: 1rem;
  }
  .buy {
    background-color: #4caf50;
    display: block;
  }
</style>