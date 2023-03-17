<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/counter">Counter</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}

nav {
  padding: 30px;
  background-color: rgba(255, 251, 240, 1);
   text-align: center;
}

nav a {
  font-weight: bold;
  color: #333333;
text-decoration: none;
font-size: 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
