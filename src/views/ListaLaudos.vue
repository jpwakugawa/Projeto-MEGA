<template>
<div>
	<BarraLateral/>
	<TopoListas/>
	<div class="Conteudo">
	<Laudo class="Laudo"/>
	<Laudo class="Laudo"/>
	<Laudo class="Laudo"/>
	<Laudo class="Laudo"/>
	</div>
</div>
</template>

<script>
import BarraLateral from '../components/BarraLateral'
import Laudo from '../components/Laudo'
import TopoListas from '../components/TopoListas'
export default {
name: 'ListaLaudos',
	components: {
		Laudo,
		BarraLateral,
		TopoListas,
		}
}

</script>

<style>
body{
	margin:0
}

.Conteudo{
	display:grid;
	grid-template-columns: 632px 600px;
}

</style>
