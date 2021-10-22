<template>
	<div class="container-medicos">
		<div id="cabecalho">
			<img id ="icone" src="../assets/doctor.png">
			<p id = "txt">Lista de Médicos</p>
				<button class ="botao adicionar" v-on:click="cadastraMedico = true">
					<img id ="icone-adicionar" src="../assets/IconeAdicionar.svg" alt="Icone Adicionar">
				</button>
		</div>
		<div class="linha"></div>
		<div id="conteudo">
			<transition-group name="list">
				<ItemDoctor v-for="medico in medicos" v-bind:key="medico.id" v-bind:id="medico.id" v-bind:nome="medico.nome" v-bind:cpf="medico.cpf" v-bind:especialidade="medico.especialidade" v-on:edit-doctor="editarMedico($event)" v-on:delete="deletar($event)"/>
			</transition-group>
		</div>
		<transition name="modal">
			<CadastrarMedico v-if="cadastraMedico" v-on:close="cadastraMedico = false" v-on:atualiza="listaMedicos()"/>
		</transition>
		<transition name="modal">
			<EditarMedico v-if="editaMedico" v-bind:id="medicoEditado.id" v-bind:nome="medicoEditado.nome" v-bind:cpf="medicoEditado.cpf" v-bind:especialidade="medicoEditado.especialidade" v-on:close="editaMedico = false" v-on:atualiza="listaMedicos()"/>
		</transition>
		<transition name="modal">
			<DeletePrompt v-if="deleteP" v-bind:id="deleteId" v-on:close="deleteP = false" v-bind:tipo="'médico'" v-on:deleteUser="deletarUser($event)"/>
		</transition>
	</div>
</template>

<script>
import ItemDoctor from '@/components/ItemDoctor.vue'
import CadastrarMedico from '../components/CadastrarMedico.vue'
import EditarMedico from '../components/EditarMedico.vue'
import DeletePrompt from '../components/DeletePrompt.vue'

export default {
	name: 'ListaMedicos',
	created: function () {
		if (this.$session.exists())
			this.listaMedicos();
	},
	data () {
		return {
			cadastraMedico: false,
			editaMedico: false,
			deleteP: false,
			deleteId: 0,
			medicos: [],
			medicoEditado: {}
		}
	},
	methods: {
		editarMedico (medico) {
			this.editaMedico = true;
			this.medicoEditado = medico;
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
				await this.$http.post('http://localhost:3000/delete', user);
				//console.log(data);
			} catch (error) {
				console.error(error);
			} finally {
				//deletou com sucesso
				this.listaMedicos();
			}
		},
		async listaMedicos () {
			try {
				const {data} = await this.$http.get('http://localhost:3000/medicos');
				this.medicos = data;
			} catch (error) {
				console.error(error);
			} finally {
				//console.log(this.medicos);
			}
		}
	},
	components:{
		ItemDoctor,
		CadastrarMedico,
		EditarMedico,
		DeletePrompt
	}
}
</script>

<style>
	.container-medicos {
		float: left;
		width :602.89px;
		height:720px;
		margin-top: 0;
		margin-right: 23px;
		margin-bottom: 76px;
		margin-left: 38px;
		background-color: rgb(255, 255, 255);
		border-radius: 8px;
	}
</style>
