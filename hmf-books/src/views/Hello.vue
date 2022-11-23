<template>
  <div>
    <Books :author="'J.R.R. Tolkien'" :books="books" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Books from '../components/books.vue';
  @Component({
    name: 'HelloView',
    components: {
      Books,
    },
  })
  export default class HelloViewComponent extends Vue {
    books = [
      {
        id: '1',
        title: 'The Hobbit',
        description:
          "The Hobbit is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.",
        image: 'https://via.placeholder.com/150',
      },

      {
        id: '2',
        title: 'The Lord of the Rings',
        description:
          "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
        image: 'https://via.placeholder.com/150',
      },
      {
        id: '3',
        title: 'The Silmarillion',
        description:
          "The Silmarillion is a collection of tales set in the world of Arda, written by J. R. R. Tolkien. It is the first published book-length history of Middle-earth, and is considered by many to be the first draft of The Lord of the Rings. The Silmarillion was published in 1977, after Tolkien's death, by his son Christopher, who edited the work for publication.",
        image: 'https://via.placeholder.com/150',
      },
    ];
  }
</script>

<style></style>