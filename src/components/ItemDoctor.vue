<template>
	<div class="item-doctor">
		<p id="NomePaciente">Elliot Alderson</p>
		<p id="CPFPaciente">999.999.999-99</p>
		<button class ="botao editar">
		<img id="EditarPaciente" src="../assets/Editar.svg">
		</button>
		<button class ="botao excluir">
		<img id = "Excluir Paciente" src="../assets/Excluir.svg">
		</button>
	</div>
</template>

<script>
export default {

}
</script>

<style>

#NomePaciente{
margin-top:-12px;
margin-left:32px;
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 30px;
display: flex;
align-items: center;

color: #2E4A7D;
}

#CPFPaciente{
margin-top:30px;
margin-left:-152px;
margin-right:234px;

font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 22px;
display: flex;
align-items: center;

color: rgba(46, 74, 125, 0.6);
}
.item-doctor{
	position: relative;
	display:flex;
	margin-top:73px;
	margin-left:34.95px;
	width: 536.87px;
	height: 81px;
	border-radius: 8px;
	background: linear-gradient(180deg, #FFD666 0.01%, rgba(255, 214, 102, 0.5) 100%);
}

.excluir{
position: absolute;
margin-top:22px;
margin-right:31.82px;
margin-bottom:14px;
margin-left:460.05px;

background: #2E4A7D;
border-radius: 20px;
}

.editar{
position: absolute;
margin-top:22px;
margin-right:104.82px;
margin-bottom:14px;
margin-left:387.05px;

background: #2E4A7D;
border-radius: 20px;
}

#EditarPaciente{
	margin-top:10px;
	margin-left:3.95px;
	margin-bottom:7px;
}

</style>
