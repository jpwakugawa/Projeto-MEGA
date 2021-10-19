<template>
	<div class="container-pacientes">
		<div id="cabecalho">
			<img id ="icone" src="../assets/patient.png">
			<p id = "txt">Lista de Pacientes</p>
				<button class ="botao adicionar" v-on:click="cadastraPaciente = true">
					<img id ="icone-adicionar" src="../assets/IconeAdicionar.svg" alt="Icone Adicionar">
				</button>
		</div>
		<div class="linha"/>
		<div id="conteudo">
			<transition-group name="list">
				<ItemPatient v-for="paciente in pacientes" v-bind:key="paciente.id" v-bind:id="paciente.id" v-bind:nome="paciente.nome" v-bind:cpf="paciente.cpf" v-on:edit-patient="editarPaciente($event)" v-on:delete="deletar($event)"/>
			</transition-group>
		</div>
		<transition name="modal">
			<CadastrarPaciente v-if="cadastraPaciente" v-on:close="cadastraPaciente = false" v-on:atualiza="listaPacientes()"/>
		</transition>
		<transition name="modal">
			<EditarPaciente v-if="editaPaciente" v-bind:id="pacienteEditado.id" v-bind:nome="pacienteEditado.nome" v-bind:cpf="pacienteEditado.cpf" v-on:close="editaPaciente = false" v-on:atualiza="listaPacientes()"/>
		</transition>
		<transition name="modal">
			<DeletePrompt v-if="deleteP" v-bind:id="deleteId" v-on:close="deleteP = false" v-bind:tipo="'paciente'" v-on:deleteUser="deletarUser($event)"/>
		</transition>
	</div>
</template>

<script>
import ItemPatient from '@/components/ItemPatient.vue'
import CadastrarPaciente from '../components/CadastrarPaciente.vue'
import EditarPaciente from '../components/EditarPaciente.vue'
import DeletePrompt from '../components/DeletePrompt.vue'

export default {
	name: 'ListaPacientes',
	created: function () {
		this.listaPacientes();
	},
	data () {
		return {
			cadastraPaciente: false,
			editaPaciente: false,
			deleteP: false,
			deleteId: 0,
			pacientes: [],
			pacienteEditado: {}
		}
	},
	methods: {
		editarPaciente (paciente) {
			this.editaPaciente = true;
			this.pacienteEditado = paciente;
		},
		deletar (id) {
			this.deleteId = id;
			this.deleteP = true;
		},
		async deletarUser (id) {
			try {
				const user = {
					userid: id
				}
				const {data} = await this.$http.post('http://localhost:3000/delete', user);
				console.log(data);
			} catch (error) {
				console.error(error);
			} finally {
				//deletou com sucesso
				this.listaPacientes();
			}
		},
		async listaPacientes () {
			try {
				const {data} = await this.$http.get('http://localhost:3000/pacientes');
				this.pacientes = data;
			} catch (error) {
				console.error(error);
			} finally {
				//console.log(this.pacientes);
			}
		}
	},
	components:{
		ItemPatient,
		CadastrarPaciente,
		EditarPaciente,
		DeletePrompt
	}
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

.modal-enter-active, .modal-leave-active {
	transition: opacity 0.3s ease;
}

.modal-enter, .modal-leave-to {
	opacity: 0;
}

.list-move {
	transition: transform 0.3s;
}

.list-enter-active, .list-leave-active {
	transition: all .3s ease;
}

.list-enter, .list-leave-to {
	transform: translateY(-60px);
	opacity: 0;
}

.botao {
	width:45px;
	height:45px;
	background: #2E4A7D;
	border-radius: 20px;
	border:none;
}

.adicionar {
	margin-top: 60px;
}
.botao:active {
	background: #243d6b;
}

#conteudo {
	width: 602px;
	height: 549px;
	padding-top: 53px;
	overflow-y: auto;
	box-sizing: border-box;
}

.linha {
	width: 537px;
	height: 1px;
	background-color: #2E4A7D;
	margin-top: 22px;
	margin-right: 31.07px;
	margin-left:34.95px;
}


#txt {
	margin-top: 48px;
	margin-right:63.34px;
	width: 281.53px;
	height: 63.01px;
	font-family: Nunito;
	font-style: normal;
	font-weight: bold;
	font-size: 32px;
	color: #2E4A7D;
}
#icone {
	margin-top: 25.28px;
	margin-left: 44.73px;
	margin-right: 20.23px;
	border-radius: 50%;
	border:solid;
	border-color: #2E4A7D;
	width: 97.08px;
	height: 100px;
}
.container-pacientes {
	float: left;
	width: 603px;
	height: 720px;
	margin-top: 0;
	margin-right: 23px;
	margin-bottom: 76px;
	margin-left: 38px;
	background-color: rgb(255, 255, 255);
	border-radius: 8px;
}
#cabecalho {
	display: flex;
	width :603px;
	height:148px;
}

</style>
