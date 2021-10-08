<template>
<div class="tela-admin">
	<div class="BarraLateral">
		<button class="BotaoLogout">
			<img id="logout" alt="Voltar" src="../assets/logout.svg">
		</button>
		<img id="LogoDuckHealth" alt="Logo Duck Health" src="../assets/LogoDuck.png">
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
	height: 860px;
	width: 112px;
	overflow: hidden;
}

.BarraLateral{
	max-width: 112px;
	height: 860px;
	background-color: #15C3D6;
	background-size: 112px 860px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
}
#LogoDuckHealth{
	margin-top: -810px;
	margin-right: 1358px;
	margin-bottom: 808.5px;
	margin-left: 32px;
	background-color: #2E4A7D;
	border-radius: 10px;
	max-width: 53px;
	max-height: 53px;
}
.BotaoLogout{
	margin-top: 764px;
	margin-right: 1357px;
	margin-bottom: 41px;
	margin-left: 28px;
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
