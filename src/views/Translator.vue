<template>
    <div id='translator'>
        <Navbar/>
        <form>
          <h4>Enter English Text (No Punctuation):</h4>
          <textarea v-model="english"></textarea>
        </form>
        <h4>Translation:</h4>
        <div id="translation">{{ translation }}</div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Translator',
  components: {
    Navbar
  },
  data() {
    return {
      english: ""
    }
  },
  computed: {
    dictionary: function() {
      return this.$root.$data.dictionary;
    },
    translation: function() {
      let engArray = this.english.split(" ");

      let translation = "";
      for (let i = 0; i < engArray.length; i++) {
        let dictionaryIndex = this.dictionary.findIndex(function(element) {
          return element.englishWord == engArray[i].toLowerCase();
        });

        if (dictionaryIndex > -1) {
          translation = translation.concat(this.dictionary[dictionaryIndex].newWord);
        }
        else {
          translation = translation.concat(engArray[i]);
        }
        translation = translation.concat(" ");
      }

      return translation;
    }
  }
}
</script>

<style scoped>
#translator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  margin-top: 1em;
}

textarea {
  resize: none;
  width: 550px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1em;
  height: 8em;
}

h4 {
  margin-bottom: 0.5em;
  padding-bottom: 0;
}

br {
  height: 0;
}

#translation {
  height: 8em;;
  width: 75em;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(169, 169, 169);
  width: 550px;
  margin-bottom: 1em;
  text-align: left;
  overflow: auto;
  padding: 2px;
}
</style>