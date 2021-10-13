<template>
		<div class = "Laudo">
			<div id="FundoLaudo">
				<div id="CorpoLaudo">
					<div id="CabecalhoLaudo">
						<div id="TipoLaudo">Laudo do Eletrocardiograma</div>
						<div id="Linha"></div>
						<img id="IconeLaudo" src="../assets/IconeLaudo.svg">
					</div>
				<div id="MeioLaudo">
					<div class = "NomeMedico">Dr.Hans Chucrute</div>
					<div class = "TipoMedico">Médico Cardiologista</div>
				</div>
			</div>
			<button id = "BotaoBaixarLaudo">
			<img id ="DownloadLaudo" src="../assets/download1.svg">
			<p id="TXTDownloadLaudo">Baixar Laudo</p>
			</button>
		<div id="FimLaudo">
			<img id="Calendario" src="../assets/Calendar.svg">
			<div id="Divider"></div>
			<div class = "HorarioExame">24/03/2021 - 09:30 </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i');

#TXTDownloadLaudo{

font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 22px;
text-align: center;
text-decoration-line: underline;
color:#FFFF;
}
#DownloadLaudo{
	margin-top:0px;
	margin-left:19.21px;
	float:left;
}

#BotaoBaixarLaudo{
	width: 190px;
	height: 36px;
	border-radius: 5px;
	margin-left:312px;
	margin-top:13px;
	background: #12AFCB;
	border:none;
}
#Divider{
	height:22px;
	width: 1px;
	background-color: #2E4A7D;
	margin-left:61px;
	margin-top:-26px;
}
.HorarioExame{
	margin-left:25px;
	margin-top:-20px;
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 21px;
	text-align: center;
	color: #2E4A7D;
}
#Calendario{
	margin-top:6px;
	margin-left:31px;
}
.TipoMedico{
	margin-top:7px;
	margin-left:33px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
display: flex;
align-items: center;

color: rgba(46, 74, 125, 0.75);
}

.Laudo{
	display:flex;
	flex-direction: row;
}
.NomeMedico{
	margin-top:53.88px;
	margin-left:31px;
	font-family: Nunito;
	font-style: normal;
	font-weight: bold;
	font-size: 22px;
	line-height: 30px;
	display: flex;
	align-items: center;

	color: #2E4A7D;
}
#IconeLaudo{
	margin-top:-35.8px;
	margin-left:31px;
}
#Linha{
height: 2.5px;
width: 475px;
background-color: #FFFF;
}
#TipoLaudo{
	width: 296px;
	height: 36px;
	margin-top: 14px;
	font-family: Nunito;
	font-style: normal;
	font-weight: 800;
	font-size: 20px;
	line-height: 27px;
	color: #2E4A7D;
	margin-left:163px;
}
#FimLaudo{
	margin-top:-49px;
	margin-left:27px;
	width: 272px;
	height: 35px;
	background: rgba(255, 214, 102, 0.5);
	border-radius: 0px 0px 8px 8px;
}
#FundoLaudo{
	width: 530px;
	height: 320px;
	background-color: rgb(255, 255, 255);
	border: 1px solid #D3E2E5;
	border-radius: 16px;
}
#CorpoLaudo{
	position: relative;
	display:flex;
	margin-top:26px;
	margin-left:27px;
	width: 475px;
	height: 218px;
	border-radius: 8px 8px 8px 0px;
	background: linear-gradient(180deg, #FFD666 0%, rgba(255, 214, 102, 0.5) 100%);
}
#CabecalhoLaudo{
	width: 475px;
	height: 52px;
}
#MeioLaudo{
	margin-top:53.88px;
	margin-left:-475px;
	width: 475px;
	height: 152.88px;
}

#BotaoBaixarLaudo:active{
	background: #0c879d;
}
</style>
