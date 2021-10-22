<template>
  <div id="app">
    <div id="nav" v-if="admin">
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |-->
      <router-link to="/landing">Landing</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/administrativa">Tela Administrativa</router-link> |
      <router-link to="/lista-pacientes">Lista Pacientes</router-link> |
      <router-link to="/lista-laudos">Lista Laudos</router-link> |
      <router-link to="/upload-laudos/28">Upload Laudos</router-link> |
      <router-link to="/logout">Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  created: function () {
    if (this.$session.exists()) {
      if (this.$session.get('access-level') == 'admin') {
        this.admin = true;
      }
    } else {
      if (this.$route.path != '/login') {
        this.$router.push('/login');
      }
    }
  },
  data () {
    return {
      admin: false
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  z-index: 3;
  opacity: 0;
}

#nav:hover {
  opacity: 1;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
