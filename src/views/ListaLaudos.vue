<template>
<div>
	<BarraLateral/>
	<TopoListas v-on:busca="buscaLaudos($event)"/>
	<div class="Conteudo">
		<Laudo v-for="laudo in laudos" v-bind:key="laudo.id" v-bind:laudo="laudo"/>
	</div>
</div>
</template>

<script>
import BarraLateral from '../components/BarraLateral'
import Laudo from '../components/Laudo'
import TopoListas from '../components/TopoListas'
export default {
	name: 'ListaLaudos',
	data () {
		return {
			laudos: []
		}
	},
	components: {
		Laudo,
		BarraLateral,
		TopoListas,
	},
	created: function () {
		if (!this.$session.exists()) {
			this.$router.push('/login');
		} else {
			this.loadLaudos();
		}
	},
	methods: {
		async loadLaudos () {
            try {
                const {data} = await this.$http.get(`http://localhost:3000/lista-laudos-paciente?idpaciente=${this.$session.get('user-id')}`);
                this.laudos = data;
                //console.log(data);
            } catch (error) {
                console.log(error);
            }
        },
		async buscaLaudos (str) {
			if (str.length > 0) {
				try {
					const {data} = await this.$http.get(`http://localhost:3000/busca-laudos-paciente?idpaciente=${this.$session.get('user-id')}&str=${str}`);
					this.laudos = data;
					//console.log(data);
				} catch (error) {
					console.log(error);
				}
			} else {
				this.loadLaudos();
			}
        }
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
