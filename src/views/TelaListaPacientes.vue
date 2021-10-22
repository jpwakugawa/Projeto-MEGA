<template>
    <div class="lista-paciente">
        <BarraLateral/>
        <section class="navbar-paciente">
            <p class="filtrar-text">Filtrar por:</p>
            <button class="botao-filtrar" v-on:click="alternate()">
                <p id="filtro"> {{ botao }} </p>
                <img id="check" src="../assets/check.svg" alt="check">
            </button>
            <p class="buscar-text">Buscar por:</p>
            <div class="pesquisa-area">
                <figure id="search">
                    <img src="../assets/search.svg" alt="Lupa">
                </figure>
                <input v-model="input" type="text" placeholder="Fulano da Silva" id="pesquisa" v-on:input="buscar()">
            </div>
            <img id="dr-img" src="../assets/doctor.png">
            <p class="dr-name">Olá, <span id="med1">  {{ $session.get('user-name') }}</span><br> <span id="med2">Médico</span> </p>
            <div id="line"></div>
        </section>
        <div class="area-wrapper">
            <div class="pacientes-area">
                <Paciente class="item" v-for="paciente in pacientes" v-bind:key="paciente.id" v-bind:paciente="paciente"/>
            </div>
        </div>
    </div>
</template>

<script>
import Paciente from '../components/Paciente.vue'
import BarraLateral from '../components/BarraLateral.vue'

export default {
    name: 'ListaPacientes',
    created: function () {
		if (!this.$session.exists() || this.$session.get('access-level') == 'paciente') {
			this.$router.push('/login');
        } else {
            this.listaPacientes();
        }
    },
    components: {
        Paciente,
        BarraLateral
    },
    data() {
        return {
            pacientes: [],
            input: '',
            botao: 'Todos os Pacientes',
            todos: true
        }
    },
    methods: {
        alternate () {
            if (this.todos) {
                this.botao = 'Meus Pacientes';
                this.todos = false;
            } else {
                this.botao = 'Todos os Pacientes';
                this.todos = true;
            }
            this.listaPacientes();
        },
        async listaPacientes () {
			try {
                if (this.todos) {
                    const {data} = await this.$http.get('http://localhost:3000/pacientes');
                    this.pacientes = data;
                } else {
                    const {data} = await this.$http.get(`http://localhost:3000/meus-pacientes?medico=${this.$session.get('user-name')}`);
                    this.pacientes = data;
                }
			} catch (error) {
				console.error(error);
			} finally {
				//console.log(this.pacientes);
			}
		},
        async buscar () {
            if (this.input.length > 0) {
                try {
                    let str = this.input.toLowerCase();
                    if (this.todos) {
                        const {data} = await this.$http.get(`http://localhost:3000/pacientes-busca?nome=${str}`);
                        this.pacientes = data;
                    } else {
                        const {data} = await this.$http.get(`http://localhost:3000/meus-pacientes-busca?nome=${str}&medico=${this.$session.get('user-name')}`);
                        this.pacientes = data;
                    }
                } catch (error) {
                    console.error(error);
                } finally {
                    //console.log(this.pacientes);
                }
            }
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

    .lista-paciente{
        position: relative;
        width: 1440px;
        height: 860px;
        background: #EBF2F5;
    }
    .navbar-paciente{
        position: absolute;
        padding: 0%;
        margin: 0%;
        border: none;
        width: 1119px;
        height: 80px;
        left: 214px;
        top: 23px;
        background:   #EBF2F5;;
    }
    .item:nth-child(3n) {
        margin: 0;
    }
    .item:nth-last-child(-n+3) {
        margin-bottom: 0;
    }
    .BarraLateral{
        width: 112px;
        height: 860px;
        margin: 0%;
        background-color: #15C3D6;
        background-size: 112px 860px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    #LogoDuckHealth{
        margin-top: -810px;
        margin-right: 1358px;
        margin-bottom: 808.5px;
        margin-left: 32px;
        background-color: #2E4A7D;
        border-radius: 10px;
        max-width: 53px;
        max-height: 53px;
    }
    #logout{
        position: relative;
        Top: 3px;
        Left: 3px;
    }
    .BotaoLogout{       
        margin-top: 764px;
        margin-right: 1357px;
        margin-bottom: 41px;
        margin-left: 28px;
        background:#12AFCB;
        border-radius: 16px;
        border: none;
        width: 55px;
        height: 55px;
    }
    .BotaoLogout:active{
        background: #0c879d;
    }
    .botao-filtrar{
        position: relative;
        width: 119px;
        height: 45px;
        border: none;
        background: linear-gradient(180deg, #2E4A7D 0%, #2E4A7D 100%);
        border-radius: 20px;
        float: left;
    }
    #check{
        position: absolute;
        top: 9px;
        right: 87px;
    }
    #filtro{
        position: absolute;
        left: 44px;
        top: 4px;
        margin: 0%;

        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        line-height: 19px;
        text-align: left;
        color: #FFFFFF;
        }
    .pesquisa-area{
        position: relative;
        margin: 0%;
        width: 496px;
        height: 46px;
        left: 138px;

        background: #F5F5F5;
        border: 1px solid #D3E2E5;
        border-radius: 8px;
    }
    #search{
        position: absolute;
        top: 11px;
        left: 17px;
        margin: 0%;
    }
    #pesquisa{
        position: absolute;
        left: 58px;
        top:7px;
        margin: 0%;
        border: none;
        width: 415px;
        height: 30px;
        background: #FFFFFF;
        border-radius: 8px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.5);
        padding-left: 13px;
    }
    #dr-img{
        position: absolute;
        height: 65px;
        width: 65px;
        margin: 0%;
        top: 0px;
        right: 0px;
        border: 2px solid #2E4A7D;
        background-image: url("../assets/doctor.png");
        border-radius: 50%;
    }
    .dr-name{
        position: absolute;
        margin: 0px 20px 0px 0px;
        right: 72px;
        top:25px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 22px;
        color: #000000;
    }
    #med1{
        color:  #2E4A7D;
    }
    #med2{
        position: absolute;
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        line-height: 19px;
        color: rgba(46, 74, 125, 0.5);
    }
    #line{
        position: absolute;
        height: 1;
        left: 0%;
        right: 0.27%;
        top: 100%;
        bottom: 0%;
        border: 1px solid #000000;
    }
    .filtrar-text{
        bottom: 59px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.5);
    }
    .buscar-text{
        position: absolute;
        left: 138px;
        bottom: 59px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.5);
    }
    .pacientes-area{
        position: relative;
        width: 1114px;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;   
    }

    .area-wrapper {
        position: relative;
        top: 153px;
        left: 106px;
        min-height: 707px;
        width: 1114px;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>