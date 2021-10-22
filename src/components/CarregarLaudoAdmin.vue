<template>
    <div id="carregar-laudo">
        <p>Carregar Novo Laudo</p>
        <hr>
        <div id="area-upload">
            <img src="../assets/upload.png" alt="upload" id="download-pic" v-on:click="download()">
            <span class="download-subtitle">Arraste aqui<br>
            ou</span>
            <label for="laudo" class="blue-bar">
                {{ mensagem }}
            </label>
            <input id="laudo" type="file" class="inv" v-on:change="handleFile($event)">
        </div>
        <div class="formulario-envio">
            <span>Nome do Laudo</span>
            <input type="text" class="one" v-model="nome">
            <span>Nome do Médico</span>
            <input type="text" class="three" v-model="medico" v-on:input="buscar()">
            <div class="suggestion-container" v-if="suggest">
                <Suggestion v-for="doctor in medicos" v-bind:key="doctor.id" v-bind:medico="doctor" v-on:chosen="chosen($event)"/>
            </div>

            <span>Data</span>
        </div>
        <div class="row-form">
            <div class="formulario-envio small-form">
                <input v-model="data" type="text" class="two">
            </div>
            <button v-on:click="submitFile()" class="blue-button">
                Enviar Laudo
            </button>
        </div>
    </div>
</template>

<script>
import Suggestion from '../components/Suggestion.vue'

export default {
    data () {
        return {
            mensagem: 'Escolha um arquivo',
            nome: '',
            medico: '',
            idpaciente: this.$route.params.id,
            data: '',
            laudo: {},
            medicos: [],
            suggest: true
        }
    },
    methods: {
        handleFile (file) {
            this.mensagem = file.target.files[0].name;
            this.laudo = file.target.files[0];
        },
        async submitFile () {
            let formData = new FormData();
            formData.append('file', this.laudo);
            formData.append('nome', this.nome);
            formData.append('medico', this.medico);
            formData.append('idpaciente', this.idpaciente);
            formData.append('data', this.data);
            try {
                this.$http.post('http://localhost:3000/upload-laudo', formData, { headers: {'Content-Type': 'multipart/form-data'} });
            } catch (error) {
                console.log(error);
            }
        },
        async buscar () {
            if (!this.suggest) {
                this.suggest = true;
            }
            if (this.medico.length > 0) {
                let str = this.medico.toLowerCase();
                try {
                    const {data} = await this.$http.get(`http://localhost:3000/medicos-busca?nome=${str}`);
                    this.medicos = data;
                } catch (error) {
                    console.log(error)
                }
            } else {
                this.medicos = [];
            }
        },
        chosen (event) {
            this.suggest = false;
            this.medico = event;
        }
    },
    components: {
        Suggestion
    }
}
</script>

<style scoped>

    #carregar-laudo {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 211px;
        left: 813px;
        width: 520px;
        height: 520px;
        border-radius: 8px;
        background-color: white;
    }

    #area-upload {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #F1F1F1;
        padding: 13px;
        width: 442px;
        height: 174px;
        border: 1px dashed #2E4A7D;
        box-sizing: border-box;
    }

    .formulario-envio {
        display: flex;
        flex-flow: column;
        position: relative;
        width: 442px;
        height: 143px;
        padding: 4px 0 0 23px;
        margin-top: 10px; 
        background: #F1F1F1;
        border-radius: 8px 8px 8px 0px;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        box-sizing: border-box;
    }

    .inv {
        display: none;
    }

    .suggestion-container {
        width: 393px;
        position: absolute;
        top: 114px;
        background-color: white;
        z-index: 3;
    }

    .row-form {
        display: flex;
        flex-direction: row;
    }

    .small-form {
        margin: 0;
        height: 54px;
        width: 167px;
        padding: 7px 22px;
        border-radius: 0px 0px 8px 8px;
    }

    #download-pic {
        width: 55px;
        height: 55px;
    }

    hr {
        width: 458px;
        border: 1px solid rgba(46, 74, 125, 0.5);
        margin-bottom: 32px;
    }
    
    p {
        display: flex;
        justify-content: center;
        margin-top: 8%;
        font-weight: bold;  
        font-size: 24px;
        line-height: 33px;
        margin: 35px 64px 22px;
    }

    .download-subtitle {
        margin-top: 10px;
        line-height: 22px;
        white-space: pre;
        text-align: center;
    }

    input {
        background: #FFFFFF;
        border: 1px solid #2E4A7D;
        box-sizing: border-box;
        border-radius: 5px;
    }

    .blue-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row;
        flex-direction: row;
        width: 196px;
        height: 34px;
        border-radius: 8px;
        color: white;
        background-color: #2E4A7D;
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        border: none;
    }

    .blue-bar:active {
        background-color: #172d57;
    }

    .blue-button {
        text-align: center;
        line-height: 34px;
        width: 260px;
        height: 42px;
        border-radius: 8px;
        color: white;
        background: rgba(46, 74, 125, 1);
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        border: none;
        float: left;
        margin: 14px 0 0 15px;
    }

    .blue-button:active {
        background-color: #172d57;
    }

    .one {
        width: 393px;
        height: 33px;
        display: block;
    }

    .two {
        width: 123px;
        height: 33px;
    }

    .three {
        width: 393px;
        height: 33px;
        display: block;
        margin: 6px 0;
    }

    #formulario-envio .blue-bar {
        position: absolute;
        width: 260px;
        height: 42px;
        bottom: 16%;
        left: 40%;
    }

    input {
        font-family: 'Nunito', sans-serif;
        padding-left: 4px;
    }

</style>