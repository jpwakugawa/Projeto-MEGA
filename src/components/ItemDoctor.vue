<template>
	<div class="item-doctor">
		<div class="left-bar"/>
		<p class="nome-paciente">{{nome}}</p>
		<p class="CPFPaciente">{{cpf | cpf}}</p>
		<button class ="botao editar" v-on:click="$emit('edit-doctor', medico)">
		<img src="../assets/Editar.svg" class="offset">
		</button>
		<button class ="botao excluir" v-on:click="$emit('delete', medico.id)">
		<img src="../assets/Excluir.svg">
		</button>
	</div>
</template>

<script>

export default {
	props: {
		nome: String,
		cpf: String,
		id: Number,
		especialidade: String
	},
	computed: {
		medico: function () {
			return {
				id: this.id,
				nome: this.nome,
				cpf: this.cpf,
				especialidade: this.especialidade
			}
		}
	},
	filters: {
		cpf: function (value) {
			var newCpf = value.slice(0,3) + "." + value.slice(3,6) + "." + value.slice(6,9) + "-" + value.slice(9,11);
			return newCpf;
		}
	}
}
</script>

<style scoped>

.offset {
	margin: 5px 0 0 5px;
}

.nome-paciente {
	font-family: Nunito;
	font-style: normal;
	font-weight: bold;
	font-size: 22px;
	line-height: 30px;
	color: #2E4A7D;
	position: absolute;
	top: 15px;
	left: 32px;
}

.left-bar {
	background-color: #2E4A7D;
	width: 10px;
	height: 81px;
	position: absolute;
	top: 0;
	left: 0;
}

.CPFPaciente {
	position: absolute;
	font-family: Nunito;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	top: 41px;
	left: 32px;
	color: rgba(46, 74, 125, 0.6);
}
.item-doctor {
	overflow: hidden;
	position: relative;
	margin-top:20px;
	margin-left:34.95px;
	width: 536.87px;
	height: 81px;
	border-radius: 8px;
	background: linear-gradient(180deg, #FFD666 0.01%, rgba(255, 214, 102, 0.5) 100%);
}

.excluir {
	position: absolute;
	margin: 0;
	top: 22px;
	right: 32px;
	background: #2E4A7D;
	border-radius: 20px;
}

.editar {
	position: absolute;
	margin: 0;
	top: 22px;
	right: 105px;
	background: #2E4A7D;
	border-radius: 20px;
}

#EditarPaciente {
	margin-top:10px;
	margin-left:3.95px;
	margin-bottom:7px;
}

</style>
