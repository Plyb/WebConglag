<template>
    <div id="nav">
      <router-link class="router-link" to="/phonology">Phonology</router-link>
      <router-link class="router-link" to="/dictionary">Dictionary</router-link>
      <router-link class="router-link" to="/translator">Translator</router-link>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  font-weight: bold;
}

#nav a:hover {
  background-color: #DDD;
}

.router-link {
  margin-right: 1.5em;
  margin-left: 1.5em;
  text-decoration: none;
  padding: 1em;
  background-color: #EEE;
  border-radius: 3px;
}
</style>
