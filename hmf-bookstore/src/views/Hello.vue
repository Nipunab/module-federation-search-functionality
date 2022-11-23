<template>
  <div>
    <div class="book-store">
      <h1>Bookstore</h1>
      <h2>Please select an author</h2>
      <select v-model="selectedAuthor" @change="onSelected">
        <option disabled value="">Select</option>
        <option v-for="item in authors" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
      <hr />
    </div>

    <author-books
      v-if="author"
      :author="author.name"
      :books="author.books"
      @buy="onBuy"></author-books>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import authorBooks from '../data/authorBooks';

  @Component({
    name: 'HelloView',
    components: {
      //Load remote module
      'author-books': () => import('hmf_books/books'), // container name/module name
    },
  })
  export default class HelloViewComponent extends Vue {
    public selectedAuthor = 0;
    public authors = authorBooks;
    public author: {} | null = null;

    public onSelected() {
      this.author = this.authors.find(
        (item) => item.id === this.selectedAuthor
      );
    }

    public onBuy(book: any) {
      alert(`You bought ${book.title} by module federation`);
    }
  }
</script>

<style lang="scss" scoped>
  .book-store {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > h1 {
      font-size: 3rem;
    }
    > select {
      width: 100%;
      max-width: 500px;
    }
  }
</style>
