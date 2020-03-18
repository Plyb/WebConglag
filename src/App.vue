<template>
  <div id="app">
    <h1 :title="langName">{{ this.$root.$data.langName }}</h1>
    <router-view/>
    <button v-on:click="generateNewLang">Generate a New Language!</button>
  </div>
</template>

<script>
import router from "./router"

let generatePhonology = function(data) {
      data.consonants = generateConsonants();
};

let generateConsonants = function() {
  let ipaConsonants = [
    [{unvoiced: 'p', voiced: 'b'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: 't', voiced: 'd'},{unvoiced: '', voiced: ''},{unvoiced: 'ʈ', voiced: 'ɖ'},{unvoiced: 'c', voiced: 'ɟ'},{unvoiced: 'k', voiced: 'g'},{unvoiced: 'q', voiced: 'ɢ'},{unvoiced: '', voiced: ''},{unvoiced: 'ʔ', voiced: ''}],
    [{unvoiced: '', voiced: 'm'},{unvoiced: '', voiced: 'ɱ'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: 'n'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: 'ɳ'},{unvoiced: '', voiced: 'ɲ'},{unvoiced: '', voiced: 'ŋ'},{unvoiced: '', voiced: 'ɴ'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''}],
    [{unvoiced: '', voiced: 'ʙ'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: 'r'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: 'ʀ'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''}],
    [{unvoiced: '', voiced: ''},{unvoiced: '', voiced: 'ⱱ'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: 'ɾ'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: 'ɽ'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''}],
    [{unvoiced: 'ɸ', voiced: 'β'},{unvoiced: 'f', voiced: 'v'},{unvoiced: 'θ', voiced: 'ð'},{unvoiced: 's', voiced: 'z'},{unvoiced: 'ʃ', voiced: 'ʒ'},{unvoiced: 'ʂ', voiced: 'ʐ'},{unvoiced: 'ç', voiced: 'ʝ'},{unvoiced: 'x', voiced: 'ɣ'},{unvoiced: 'χ', voiced: 'ʁ'},{unvoiced: 'ħ', voiced: 'ʕ'},{unvoiced: 'h', voiced: 'ɦ'}],
    [{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: 'ɬ', voiced: 'ɮ'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''}],
    [{unvoiced: '', voiced: ''},{unvoiced: '', voiced: 'ʋ'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: 'ɹ'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: 'ɻ'},{unvoiced: '', voiced: 'j'},{unvoiced: '', voiced: 'ɰ'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''}],
    [{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: 'l'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: 'ɭ'},{unvoiced: '', voiced: 'ʎ'},{unvoiced: '', voiced: 'ʟ'},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''},{unvoiced: '', voiced: ''}]
  ]

  let consonants = [];

  //generate a random amount of consonants
  let numConsonants = 21;
  let cutoff = Math.random()
  while (cutoff < 0.5) {
    if (cutoff < 0.25) {
      numConsonants--;
    }
    else {
      numConsonants++;
    }
    cutoff = Math.random();
  }

  //generate the "starting point"
  let place = Math.floor(Math.random() * 11);
  let manner = Math.floor(Math.random() * 8);
  let voiced = Math.random() < 0.5 ? true : false;

  for (let i = 0; i < numConsonants; i++) {
    let validConsonant = false;
    while (!validConsonant) {
      let symbol = voiced ? ipaConsonants[manner][place].voiced : ipaConsonants[manner][place].unvoiced;
      let consonant = {
        symbol: symbol,
        manner: manner,
        place: place,
        voiced: voiced
      };
      if (consonant.symbol !== '' && !consonants.includes(consonant)) {
        consonants.push(consonant);
        validConsonant = true;
      }
      place = Math.floor(Math.random() * 11);
      manner = Math.floor(Math.random() * 8);
      voiced = Math.random() < 0.5 ? true : false;
    }
  }

  return consonants;
};

function generateDictionary(data) {
  let commonEnglishWords = ["a","able","about","absolute","accept","account","achieve","across","act","active","actual","add","address","admit","advertise","affect","afford","after","afternoon","again","against","age","agent","ago","agree","air","all","allow","almost","along","already","alright","also","although","always","america","amount","and","another","answer","any","apart","apparent","appear","apply","appoint","approach","appropriate","area","argue","arm","around","arrange","art","as","ask","associate","assume","at","attend","authority","available","aware","away","awful","baby","back","bad","bag","balance","ball","bank","bar","base","basis","be","bear","beat","beauty","because","become","bed","before","begin","behind","believe","benefit","best","bet","between","big","bill","birth","bit","black","bloke","blood","blow","blue","board","boat","body","book","both","bother","bottle","bottom","box","boy","break","brief","brilliant","bring","britain","brother","budget","build","bus","business","busy","but","buy","by","cake","call","can","car","card","care","carry","case","cat","catch","cause","cent","centre","certain","chair","chairman","chance","change","chap","character","charge","cheap","check","child","choice","choose","Christ","Christmas","church","city","claim","class","clean","clear","client","clock","close","closes","clothe","club","coffee","cold","colleague","collect","college","colour","come","comment","commit","committee","common","community","company","compare","complete","compute","concern","condition","confer","consider","consult","contact","continue","contract","control","converse","cook","copy","corner","correct","cost","could","council","count","country","county","couple","course","court","cover","create","cross","cup","current","cut","dad","danger","date","day","dead","deal","dear","debate","decide","decision","deep","definite","degree","department","depend","describe","design","detail","develop","die","difference","difficult","dinner","direct","discuss","district","divide","do","doctor","document","dog","door","double","doubt","down","draw","dress","drink","drive","drop","dry","due","during","each","early","east","easy","eat","economy","educate","effect","egg","eight","either","elect","electric","eleven","else","employ","encourage","end","engine","english","enjoy","enough","enter","environment","equal","especial","europe","even","evening","ever","every","evidence","exact","example","except","excuse","exercise","exist","expect","expense","experience","explain","express","extra","eye","face","fact","fair","fall","family","far","farm","fast","father","favour","feed","feel","few","field","fight","figure","file","fill","film","final","finance","find","fine","finish","fire","first","fish","fit","five","flat","floor","fly","follow","food","foot","for","force","forget","form","fortune","forward","four","france","free","friday","friend","from","front","full","fun","function","fund","further","future","game","garden","gas","general","germany","get","girl","give","glass","go","god","good","goodbye","govern","grand","grant","great","green","ground","group","grow","guess","guy","hair","half","hall","hand","hang","happen","happy","hard","hate","have","he","head","health","hear","heart","heat","heavy","hell","help","here","high","history","hit","hold","holiday","home","honest","hope","horse","hospital","hot","hour","house","how","however","hullo","hundred","husband","idea","identify","if","imagine","important","improve","in","include","income","increase","indeed","individual","industry","inform","inside","instead","insure","interest","into","introduce","invest","involve","issue","it","item","jesus","job","join","judge","jump","just","keep","key","kid","kill","kind","king","kitchen","knock","know","labour","lad","lady","land","language","large","last","late","laugh","law","lay","lead","learn","leave","left","leg","less","let","letter","level","lie","life","light","like","likely","limit","line","link","list","listen","little","live","load","local","lock","london","long","look","lord","lose","lot","love","low","luck","lunch","machine","main","major","make","man","manage","many","mark","market","marry","match","matter","may","maybe","mean","meaning","measure","meet","member","mention","middle","might","mile","milk","million","mind","minister","minus","minute","miss","mister","moment","monday","money","month","more","morning","most","mother","motion","move","mrs","much","music","must","name","nation","nature","near","necessary","need","never","new","news","next","nice","night","nine","no","non","none","normal","north","not","note","notice","now","number","obvious","occasion","odd","of","off","offer","office","often","okay","old","on","once","one","only","open","operate","opportunity","oppose","or","order","organize","original","other","otherwise","ought","out","over","own","pack","page","paint","pair","paper","paragraph","pardon","parent","park","part","particular","party","pass","past","pay","pence","pension","people","per","percent","perfect","perhaps","period","person","photograph","pick","picture","piece","place","plan","play","please","plus","point","police","policy","politic","poor","position","positive","possible","post","pound","power","practise","prepare","present","press","pressure","presume","pretty","previous","price","print","private","probable","problem","proceed","process","produce","product","programme","project","proper","propose","protect","provide","public","pull","purpose","push","put","quality","quarter","question","quick","quid","quiet","quite","radio","rail","raise","range","rate","rather","read","ready","real","realise","really","reason","receive","recent","reckon","recognize","recommend","record","red","reduce","refer","regard","region","relation","remember","report","represent","require","research","resource","respect","responsible","rest","result","return","rid","right","ring","rise","road","role","roll","room","round","rule","run","safe","sale","same","saturday","save","say","scheme","school","science","score","scotland","seat","second","secretary","section","secure","see","seem","self","sell","send","sense","separate","serious","serve","service","set","settle","seven","sex","shall","share","she","sheet","shoe","shoot","shop","short","should","show","shut","sick","side","sign","similar","simple","since","sing","single","sir","sister","sit","site","situate","six","size","sleep","slight","slow","small","smoke","so","social","society","some","son","soon","sorry","sort","sound","south","space","speak","special","specific","speed","spell","spend","square","staff","stage","stairs","stand","standard","start","state","station","stay","step","stick","still","stop","story","straight","strategy","street","strike","strong","structure","student","study","stuff","stupid","subject","succeed","such","sudden","suggest","suit","summer","sun","sunday","supply","support","suppose","sure","surprise","switch","system","table","take","talk","tape","tax","tea","teach","team","telephone","television","tell","ten","tend","term","terrible","test","than","thank","the","then","there","therefore","they","thing","think","thirteen","thirty","this","thou","though","thousand","three","through","throw","thursday","tie","time","to","today","together","tomorrow","tonight","too","top","total","touch","toward","town","trade","traffic","train","transport","travel","treat","tree","trouble","true","trust","try","tuesday","turn","twelve","twenty","two","type","under","understand","union","unit","unite","university","unless","until","up","upon","use","usual","value","various","very","video","view","village","visit","vote","wage","wait","walk","wall","want","war","warm","wash","waste","watch","water","way","we","wear","wednesday","wee","week","weigh","welcome","well","west","what","when","where","whether","which","while","white","who","whole","why","wide","wife","will","win","wind","window","wish","with","within","without","woman","wonder","wood","word","work","world","worry","worse","worth","would","write","wrong","year","yes","yesterday","yet","you","young"];

  data.dictionary = [];
  for (let i = 0; i < commonEnglishWords.length; i++) {
    data.dictionary.push(generateWord(commonEnglishWords[i], data.consonants));
  }
};

function generateWord(engWord, consonants) {
  let vowels = ["a", "e", "i", "o", "u"];
  //choose a random word length somewhere around the english word's length
  let wordLength = engWord.length;
  while (Math.random() < 0.5) {
    if (Math.random() < 0.25) {
      wordLength++
    }
    else if (wordLength < 1) {
      wordLength--;
    }
  }

  let onsetLength = Math.ceil(Math.random() * 3);
  let codaLength = Math.ceil(Math.random() * 3);

  let word = "";
  var syllable = "";
  while (word.length + syllable.length <= wordLength) {
    syllable = vowels[Math.floor(Math.random() * vowels.length)];

    let onset = [];
    let coda = [];
    while (Math.random() < 0.9 && onset.length < onsetLength && coda.length < codaLength) {
      if (Math.random() < 0.5) {
        onset.push(consonants[Math.floor(Math.random() * consonants.length)]);
      }
      else {
        coda.push(consonants[Math.floor(Math.random() * consonants.length)]);
      }
    }

    onset.sort((a, b) => {
      return b.manner - a.manner;
    });
    coda.sort((a, b) => {
      return a.manner - b.manner;
    });
    
    for (let i = 0; i < onset.length; i++) {
      syllable = onset[i].symbol + syllable;
    }
    for (let i = 0; i < coda.length; i++) {
      syllable = syllable.concat(coda[i].symbol);
    }

    word = word.concat(syllable);
  }

  return {
    englishWord: engWord, 
    newWord: word
  };
}

export default {
  name: 'App',
  data() {
    return { 
      langName: this.$root.$data.langName
    }
  },
  methods: {
    generateNewLang: function() {
      generatePhonology(this.$root.$data);
      generateDictionary(this.$root.$data);
      this.$root.$data.langName = generateWord("english", this.$root.$data.consonants).newWord;
      if (this.$route.name != "Phonology") { 
        router.push({ name: "Phonology" });
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  text-transform: capitalize;
}
</style>
