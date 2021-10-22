<template>
    <div class="paciente" v-on:click="openLaudos()">
        <img src="../assets/cubos.png" alt="imagem de cubos">
        <img src="../assets/patient.png" class="paciente-img">
        <p class="paciente-nome">{{ paciente.nome }}</p>
        <p class="cpf">{{paciente.cpf | cpf}}</p>
    </div>        
</template>

<script>
export default {
    name: 'paciente',
    data() {
        return {
        }
    },
    props: {
        paciente: Object
    },
	filters: {
		cpf: function (value) {
			var newCpf = value.slice(0,3) + "." + value.slice(3,6) + "." + value.slice(6,9) + "-" + value.slice(9,11);
			return newCpf;
		}
	},
    methods: {
        openLaudos () {
            if (this.$session.get('access-level') == 'medico') {
                this.$router.push(`/upload-laudos/${this.paciente.id}`);
            } else if (this.$session.get('access-level') == 'admin') {
                this.$router.push(`/upload-laudos-admin/${this.paciente.id}`);
            }
        }
    }
}
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

    /*Card de paciente*/
    .paciente {
        position: relative;
        height: 300px;
        width: 300px;
        margin: 0px 107px 55px 0px;
        border-radius: 20px;
        background: #FFFFFF;
        border-radius: 20px;
        cursor: pointer;
    }
    /*imagem amarela no card*/
    .cubos {
        position: absolute;
        bottom: 188px;
        right: 0%;
        left: 0%;
        border: 2px solid #FFFFFF;
        
        border-radius: 20px 20px 0px 0px;
    }
    /*imagem do paciente*/
    .paciente-img{
        position: absolute;
        height: 100px;
        width: 100px;
        left: 100px;
        right: 100px;
        bottom: 114px;
        margin:0%;
        border-radius: 50px;
        border: 4px solid #FFFFFF;
        background-image: url('../assets/patient.png');
    }
    /*nome do paciente*/
    .paciente-nome{
        position: absolute;
        width: 150px;
        left: 75px;
        margin: 0%;
        bottom: 25%;

        font-family: 'Nunito', sans-serif;;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        align-items: center;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        color: #2E4A7D;
    }
    .cpf{
        position: absolute;
        left: 22.33%;
        right: 22.69%;
        top: 78.14%;
        bottom: 13.89%;
        margin: 0%;

        font-family: 'Nunito', sans-serif;;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        align-items: center;
        text-align: center;

        color: rgba(46, 74, 125, 0.5);
    }
</style>