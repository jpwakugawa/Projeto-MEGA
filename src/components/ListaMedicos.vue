<template>
	<div id="ContainerMedicos">
		<div id="cabecalho">
			<img id ="icone" src="../assets/doctor.png">
			<p id = "txt">Lista de Médicos</p>
				<button class ="botao adicionar" v-on:click="cadastraMedico = true">
					<img id ="icone-adicionar" src="../assets/IconeAdicionar.svg" alt="Icone Adicionar">
				</button>
		</div>
		<div id="linha"></div>
		<div id="conteudo">
			<ItemDoctor class="ItemDoctor"></ItemDoctor>
		</div>
		<transition name="modal">
			<CadastrarMedico v-if="cadastraMedico" v-on:close="cadastraMedico = false"/>
		</transition>
	</div>
</template>

<script>
import ItemDoctor from '@/components/ItemDoctor.vue'
import CadastrarMedico from '../components/CadastrarMedico.vue'

export default {
	name: 'ListaMedicos',
	data () {
		return {
			cadastraMedico: false
		}
	},
	components:{
		ItemDoctor,
		CadastrarMedico
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

.adicionar{
	margin-top:53px;
}

.modal-enter-active, .modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}

.ItemDoctor{
	position:absolute;
}

.botao{
width:45px;
height:45px;
margin-top:19px;
background: #2E4A7D;
border-radius: 20px;
border:none;
}
.botao:active{
	background: #243d6b;
}

#conteudo{
	width: 602px;
	height: 570px;
}

#linha{
	width: 536.87px;
	height: 1px;
	background-color: #2E4A7D;
	margin-top: 0px;
	margin-right: 31.07px;
	margin-left:34.95px;
}

#txt{
	margin-top: 48px;
	margin-right:63.34px;
	width: 281.53px;
	height: 63.01px;
	font-family: Nunito;
	font-style: normal;
	font-weight: bold;
	font-size: 32px;
}
#icone{
	margin-top: 25.28px;
	margin-left: 44.73px;
	margin-right: 20.23px;
	border-radius: 50%;
	border:solid;
	border-color: #2E4A7D;
	width: 97.08px;
	height: 100px;
}
#ContainerMedicos{
	align-items: flex-start;
	justify-content: flex-start;
	display: flex;
	flex-direction: column;
	Width :602.89px;
	Height:720px;
	margin-top: 0;
	margin-right: 687.11px;
	margin-bottom: 76px;
	margin-left: 776px;
	background-color: rgb(255, 255, 255);
	border-radius: 8px;
}
#cabecalho{
	display: flex;
	Width :602.89px;
	Height:148px;
}


</style>
