<template>
        <div class="modal" v-on:click="$emit('close')">
            <div class="main" v-on:click.stop>
                <figure class="main-img"> </figure>

                <div>
                    <h1 class="title-med">Editar<span class="pink"> Paciente</span></h1>

                    <div class="cadastro-input" v-bind:class="{red: nomeErr}">
                        <figure class="input-icon">
                                <img src="..\assets\name-i.svg" alt="ícone">
                        </figure>
                        <input v-model="nomeM" type="text" class="input-field" placeholder="Nome Completo">
                    </div>

                    <div class="cadastro-input" v-bind:class="{red: cpfErr}">
                        <figure class="input-icon">
                            <img src="..\assets\cpf-i.svg" alt="">
                        </figure>
                        <input v-model="cpfM" type="text" class="input-field" placeholder="CPF">
                    </div>

                    <div class="cadastro-input" v-bind:class="{red: senhaErr}">
                        <figure class="input-icon">
                            <img src="..\assets\key-i.svg" alt="ícone de uma chave">
                        </figure>
                        <input v-model="senha" type="password" class="input-field" placeholder="Nova senha">
                    </div>

                    <div class="cadastro-input" v-bind:class="{red: senhaErr}">
                        <figure class="input-icon">
                            <img src="..\assets\key-i.svg" alt="ícone de uma chave">
                        </figure>
                        <input v-model="senhaR" type="password" class="input-field" placeholder="Confirmar nova senha">
                    </div>

                    <input v-on:click="editar()" type="button" name="enviar-cadastro"  class="cadastro-button" value="Salvar">
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "editpaciente",
	data () {
		return {
            nomeM: this.nome,
            cpfM: this.cpf,
            senha: '',
            senhaR: '',
            nomeErr: false,
            cpfErr: false,
            senhaErr: false
		}
	},
    props: {
        nome: String,
        cpf: String,
        id: Number
    },
    methods: {
        async editar () {
            this.nomeM.length < 6 ? this.nomeErr = true : this.nomeErr = false
            this.cpfM.length < 11 ? this.cpfErr = true : this.cpfErr = false
            if (this.senha != this.senhaR || this.senha.length < 1)
                this.senhaErr = true;
            else
                this.senhaErr = false;
            if (this.nomeErr || this.cpfErr || this.senhaErr) {
                console.log("falha na entrada");
            } else {
                try {
                    const paciente = {
                        id: this.id,
                        nome: this.nomeM,
                        cpf: this.cpfM,
                        senha: this.senha
                    }
                    const {data} = await this.$http.post('http://localhost:3000/edita-paciente', paciente);
                    this.response = data;
                } catch (error) {
                    console.log(error);
                } finally {
                    //mensagem de registro com sucesso
                    this.$emit('atualiza');
                    this.$emit('close');
                }
            }
        }
    }
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

.pink {
    white-space: pre;
    color: #ff738a;
}

.red {
    border-color: red!important;
}

.main {
    display: flex;
    align-items:flex-start;
    height: 500px;
    width: 795px;
    left: 0px;
    top: 0px;
    border-radius: 8px;
    margin: 200px auto;
    background-color: white;
}

.modal {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
}

/*imagem principal*/
.main-img{
    overflow: hidden;
    height: 500px;
    width: 388px;
    margin: 0%;
    border-radius: 8px;

    background: url(../assets/doctor-patient.png);

    
}
/*título da página*/
.title-med{
    margin: 50px auto auto 40.78px;
    Width : 320px;
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 49px;
    align-items: center;

    color: #2E4A7D;
}
/*campo de entrada dos dados de cadastro*/
.input-field {
    font-family: 'Nunito', sans-serif;
    display: flex;
    background: transparent;
    border: none;
    width: 100%;
}
::placeholder{
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
}
/*containers de dados*/
.cadastro-input{
    font-family: 'Nunito';
    font-weight: 600;
    font-size: 16px;
    display: flex;
    height: 40px;
    width: 298.125px;
    left: 461.0999755859375px;
    top: 18px;
    border-radius: 8px;
    margin: 16px auto 0 44px;
    background: #F5F5F5;
    border: 1px solid #2E4A7D;
    box-sizing: border-box;
}
/*ícone dentro das caixas de input*/
.input-icon{
    display: inline-block;
    padding: 0px;
    margin: 8px 15.9px 12px 9.94px;
    align-content: center;
    align-items: center;
}
/*botão de cadastro*/
.cadastro-button{
    height: 51px;
    width: 298px;
    border-radius: 16px;
    margin: 31px auto 45px 44px;

    border: none;
    border-radius: 16px;
    background: #2E4A7D;

    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    align-items: center;
    text-align:center;
    color: #FFFFFF;
}

.cadastro-button:active {
    background: #172e57;
}
</style>