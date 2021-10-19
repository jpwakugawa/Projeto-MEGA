<template>
  <div id="app">
    <BarraLateral/>
    <Navbar/>
    <ListadeLaudos/>
    <CarregarLaudo/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import ListadeLaudos from "../components/ListadeLaudos.vue"
import CarregarLaudo from "../components/CarregarLaudo.vue"
import BarraLateral from '../components/BarraLateral.vue'

export default {
  name: 'App',
  components: {
    BarraLateral,
    Navbar,
    ListadeLaudos,
    CarregarLaudo
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

  #app {
    font-family: Nunito;
    font-style: normal;
    color:  #2E4A7D;
  }

</style>
