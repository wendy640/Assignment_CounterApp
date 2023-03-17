<template>
  <nav>
    <router-link to="/counter">Counter</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: rgba(255, 251, 240, 1);
}

nav a {
  font-weight: bold;
  color: #333333;

}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
