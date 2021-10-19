  <template>
  <div id="app">
    <DuckLogo/>

    <Navbar/>

    <ListadeLaudos/>

    <CarregarLaudo/>

    <div id="blue-retangle"></div>

  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import ListadeLaudos from "./components/ListadeLaudos.vue"
import CarregarLaudo from "./components/CarregarLaudo.vue"
import DuckLogo from "./components/DuckLogo.vue"

export default {
  name: 'App',
  components: {
    Navbar,
    ListadeLaudos,
    CarregarLaudo,
    DuckLogo
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

  #app {
    font-family: Nunito;
    font-style: normal;
    color:  #2E4A7D;
    background: #D3E2E5;
    width: 1440px;
    height: 860px;
  }

  #blue-retangle {
    width: 112px;
    height: 100px;
    position: absolute;
    left: 2%;
    right: 5%;
    bottom: 0%;
    background: #15C3D6;
    border-radius: 0px 8px 8px 0px;
  }

</style>
