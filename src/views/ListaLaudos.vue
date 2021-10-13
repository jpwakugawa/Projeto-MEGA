<template>
<div>
	<BarraLateral/>
	<TopoListas/>
	<div class="Conteudo">
	<Laudo class="Laudo A"/>
	<Laudo class="Laudo B"/>
	<Laudo class="Laudo C"/>
	<Laudo class="Laudo D"/>
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

.A{
	margin-left:99px;
	margin-top:39.99px;
}

.B{
	margin-left:56px;
	margin-top:39.99px;
}

.C{
	margin-left:99px;
	margin-top:39.99px;
}

.D{
	margin-left:56px;
	margin-top:39.99px;
}
</style>
