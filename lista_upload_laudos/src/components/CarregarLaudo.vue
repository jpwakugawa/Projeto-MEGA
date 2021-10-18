<template>
    <div id="carregar-laudo">
        <p>Carregar Novo Laudo</p>
        <hr>
        <div id="area-upload">
            <figure id="download-pic"></figure>
            <span>Arraste aqui</span><br>
            <span>ou</span>
            <div class="blue-bar">
                Escolha um arquivo
            </div>
        </div>
        <div id="formulario-envio">
            <span>Nome do Laudo</span>
            <input type="text" class="one">

            <span>Data</span>
            <input type="text" class="two">

            <div class="blue-bar">
                Enviar Laudo
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    #carregar-laudo {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 27%;
        left: 50%;
        width: 520px;
        height: 520px;
        border-radius: 8px;
    }

    #area-upload {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #F1F1F1;
        width: 442px;
        height: 174px;
        border: 3px dashed;
    }

    #formulario-envio {
        display: flex;
        flex-direction: column;
        width: 442px;
        height: 139px;
        margin-top: 10px; 
        background: #F1F1F1;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
    }

    #download-pic {
        background: black;
        width: 55px;
        height: 55px;
    }

    hr {
        width: 458px;
        border: 1px solid rgba(46, 74, 125, 0.5);
    }
    
    p {
        display: flex;
        justify-content: center;
        margin-top: 8%;
        font-weight: bold;  
        font-size: 24px;
        line-height: 33px;
    }

    span {
        margin-top: 10px;
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
        width: 196px;
        height: 34px;
        border-radius: 8px;
        color: white;
        background: rgba(46, 74, 125, 1);
    }

    .one {
        width: 393px;
        height: 33px;
    }

    .two {
        width: 123px;
        height: 33px;
    }

    #formulario-envio .blue-bar {
        position: absolute;
        width: 260px;
        height: 42px;
        bottom: 16%;
        left: 40%;
    }

</style>