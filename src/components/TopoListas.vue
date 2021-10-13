<template>
	<div class = "TopoListas">
		<div class="BarraPesquisaInteira">
			<img class="IconeLupa" src="../assets/search2.svg">
			<div class="Search">
				<input type="text" class="field" placeholder="Laudo, Médico, Data">
				<div class="Linha"></div>
			</div>
		</div>
		<div class="ContainerPaciente">
			<div class ="SaudacaoPaciente">Olá, Elliot Alderson</div>
			<img class="IconePaciente" src="../assets/patient.png">
		</div>
	</div>

</template>

<script>
export default {

}
</script>

<style>
.TopoListas{
	width: 1116px;
	height:101px;
	background-color:#EBF2F5;
	display:flex;
	justify-content: space-between;
	margin-left:211px;
}
.SaudacaoPaciente{
width: 162px;
height: 23px;
margin-top:41px;
font-family: Nunito;
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 22px;
display: flex;
align-items: center;

color: #000000;
}
.ContainerPaciente{
	display:flex;
	width:227px;
	height:65px;
	margin-left: 368px;
}


.IconePaciente{
	width: 65px;
	height: 65px;
	border-radius: 50%;
	border: 2px solid #2E4A7D;
	margin-top:20px;
}

.Linha{
	width:1116px;
	height: 2px;
	background-color: rgba(46, 74, 125, 0.25);
	margin-top :29px;
	margin-left:-64px;
}

.BarraPesquisaInteira{
	width: 521px;
	height: 55px;
	margin-top:27px;
	background: #F5F5F5;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	}

.IconeLupa{
	margin-top:16px;
	margin-left:23px;
}

.Search{
	margin-left:64px;
	margin-top:-31px;
	width: 417px;
	height: 30px;
	background: #FFFFFF;
	border-radius: 8px;
}
    .field {
        display: inline-block;
        width: 417px;
				height: 30px;
        margin: 0 0 0 20px;
        border: none;
        border-radius: 8px;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        line-height: 22px;
        padding: 10px;
        font-size: 16px;
    }
</style>
