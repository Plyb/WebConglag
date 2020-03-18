<template>
    <div id="dictionary">
        <Navbar/>
        <div id="masonry">
          <p class="masonry-brick" v-for="(word, index) in dictionary" :key="index"><strong>{{ word.englishWord + ": " }}</strong>{{ word.newWord }}</p>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Dictionary',
  components: {
    Navbar
  },
  computed: {
    dictionary: function() {
      return this.$root.$data.dictionary;
    }
  }
}
</script>

<style scoped>
#dictionary {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#masonry { 
  display: flex;
  flex-flow: column wrap;
  max-height: 5100px;
  margin-left: -8px; /* Adjustment for the gutter */
  width: 80%;
  margin-bottom: 1em;
}

.masonry-brick {
  margin: 0 8px 8px 0; /* Some gutter */
  text-align: left;
}
</style>