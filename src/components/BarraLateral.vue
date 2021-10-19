<template>
<div class="tela-admin">
	<div class="BarraLateral">
		<img id="LogoDuckHealth" alt="Logo Duck Health" src="../assets/LogoDuck.png">
		<button class="BotaoLogout">
			<img id="logout" alt="Voltar" src="../assets/logout.svg">
		</button>
	</div>
</div>

</template>

<script>
export default {
}
</script>

<style scoped>
.tela-admin {
	float: left;
	height: 100vh;
	width: 112px;
	position: relative;
}

.BarraLateral{
	max-width: 112px;
	height: 100vh;
	width: 112px;
	position: fixed;
	top: 0;
	background-color: #15C3D6;
	background-size: 112px 860px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
}
#LogoDuckHealth{
	position: absolute;
	top: 37px;
	left: 29px;
	background-color: #2E4A7D;
	border-radius: 10px;
	max-width: 53px;
	max-height: 53px;
}
.BotaoLogout{
	position: absolute;
	bottom: 41px;
	right: 29px;
	background:#12AFCB;
	border-radius: 8px;
	border: none;
	width: 55px;
	height: 55px;
}
.BotaoLogout:active{
	background: #0c879d;
}

</style>
