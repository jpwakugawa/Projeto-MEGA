<template>
    <div id="lista-laudos" v-on:mouseenter="loadLaudos()">
        <div id="up-section">
            <figure id="patient">
                <img src="../assets/patient.png" alt="Patient">
            </figure>
            <p>Laudos de {{ nome }}</p>
        </div>

        <div class="blue-line"/>

        <LaudoItem v-for="laudo in laudos" v-bind:key="laudo.id" v-bind:laudo="laudo" v-on:atualiza="loadLaudos()"/>

    </div>
</template>

<script>
import LaudoItem from '../components/LaudoItem.vue'

export default {
    created: function () {
        if (this.$session.exists() && this.$session.get('access-level') == 'admin') {
            this.loadInfo();
            this.loadLaudos();
        }
    },
    data () {
        return {
            nome: '',
            laudos: []
        }
    },
    components: {
        LaudoItem
    },
    methods: {
        async loadInfo () {
            try {
                if (this.$route.params.id) {
                    var {data} = await this.$http.get(`http://localhost:3000/paciente-nome?id=${this.$route.params.id}`);
                    this.nome = data[0].nome;
                }
                //console.log(data);
            } catch (error) {
                console.log(error);
            }
        },
        async loadLaudos () {
            try {
                const {data} = await this.$http.get(`http://localhost:3000/lista-laudos?idpaciente=${this.$route.params.id}`);
                this.laudos = data;
                this.$forceUpdate();
                //console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>

    #lista-laudos {
        position: absolute;
        top: 211px;
        left: 214px;
        width: 520px;
        height: 520px;
        padding: 20px 30px;
        border-radius: 8px;
        background-color: white;
        box-sizing: border-box;
        overflow-y: auto;
    }

    img {
        width: 100%;
        height: 100%;
    }

    #up-section {
        display: flex;
        flex-direction: row;
    }

    #patient {
        width: 70px;
        height: 70px;
        border: 2px solid #2E4A7D;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 15px 13px 0;
    }

    #up-section p {
        display: flex;
        align-items: center;
        font-weight: bold;  
        font-size: 24px;
        line-height: 33px;
    }

    .blue-line {
        width: 458px;
        height: 1px;
        margin: 0 auto;
        background-color: #2E4A7D80;
    }

</style>