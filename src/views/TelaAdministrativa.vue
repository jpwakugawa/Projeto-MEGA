<template>
	<div>
		<BarraLateral/>
		<div class="containers">
			<ContainerPacientes/>
			<ContainerMedicos/>
		</div>
	</div>
</template>

<script>
import BarraLateral from '../components/BarraLateral'
import ContainerPacientes from '../components/ListaPacientes'
import ContainerMedicos from '../components/ListaMedicos'

export default {
	name: 'TelaAdministrativa',
	components: {
		ContainerPacientes,
		BarraLateral,
		ContainerMedicos
		}
}
</script>

<style>
body{
	margin:0
}
#Fundo{
	Width: 1440px;
	Height: 860px;
	border-radius: 8px;
	background-color: #E5E5E5;
}
.containers {
	padding: 64px 0 0 0;
}
</style>
