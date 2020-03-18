<template>
    <div id='phonology'>
        <Navbar/>
        <table id="consonants">
            <tr>
                <th>*</th>
                <th>Bilabial</th>
                <th>Labiodental</th>
                <th>Dental</th>
                <th>Alveolar</th>
                <th>Postalveolar</th>
                <th>Retroflex</th>
                <th>Palatal</th>
                <th>Velar</th>
                <th>Uvular</th>
                <th>Pharyngeal</th>
                <th>Glottal</th>
            </tr>
            <tr v-for="(row, manner) in consonants" :key="manner">
                <th>{{ manners[manner]}}</th>
                <td v-for="(cell, place) in row" :key="place">
                    {{ cell }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'Phonology',
    components: {
        Navbar
    },
    data() {
        return {
            manners: ["Plosive", "Nasal", "Trill", "Tap or Flap", "Fricative", "Lateral fricative", "Approximant", "Lateral approximant"]
        }
    },
    computed: {
        consonants: function() {
            let table = Array(8).fill({});
            for (let i = 0; i < 8; i++) {
                table[i] = new Array(11).fill(" - ")
            }
            let consonants = this.$root.$data.consonants;

            for (let i = 0; i < consonants.length; i++) {
                if (!consonants[i].voiced) {
                    table[consonants[i].manner][consonants[i].place] = consonants[i].symbol + table[consonants[i].manner][consonants[i].place].substr(1);
                }
                else {
                    table[consonants[i].manner][consonants[i].place] = table[consonants[i].manner][consonants[i].place].substr(0,2) + consonants[i].symbol;
                }
            }
            return table;
        }
    }
}
</script>

<style scoped>
    #phonology {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    table {
        margin-right: 8em;
        margin-bottom: 1em;
        margin-top: 2em;
    }

    td {
        border-style: solid;
        border-width: 1px;
        margin: 0;
    }
    
    th {
        margin: 0;
        text-align: right;
    }
</style>