<template>
    <div class="login-bg">
        <img class="bg-top" src="../assets/img_duck_health/bg-top.png" alt="">
        <img class="bg-bottom" src="../assets/img_duck_health/bg-bottom.png" alt="">
        <div class="logo-wrapper">
            <div class="logo-cont">
                <img class="logo-img" src="../assets/img_duck_health/DuckHealth_PNG.png" alt="logo">
            </div>
            <div class="title">
                <div class="title-duck">Duck</div>
                <div class="title-health">Health</div>
            </div>
        </div>
        <div class="login">
            <h1 class="login-title">Bem-vindo</h1>
            <h2 class="login-subtitle">Acesse seus <span class="yellow">laudos</span> agora!</h2>
            <input class="login-input" type="text" placeholder="Escreva aqui seu CPF">
            <input class="login-input" type="password" placeholder="Escreva aqui a senha">
            <button class="login-button">Entrar</button>
            <img class="lock-icon" src="../assets/img_duck_health/lock.svg" alt="lock"><span class="forgot-psw">Esqueceu sua senha?</span> <span class="forgot-link">Clique aqui!</span>
        </div>
    </div>
</template>

<style>

    .login-bg {
        position: relative;
        background-color: #ebf2f5;
        min-height: 100vh;
        width: 100%;
        top: 0;
        padding: 180px 0 0 0;
        box-sizing: border-box;
    }

    .login {
        height: 500px;
        width: 500px;
        margin: 0 auto 0;
        border-radius: 8px;
        padding: 30px 50px;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        background-image: linear-gradient(to bottom, #5172ff, #02c0cc);
    }

    .login-title {
        text-align: center;
        line-height: 67px;
        margin: 0 0 -7px 0;
        font-size: 36px;
        font-weight: 800;
        color: white;
    }

    .login-subtitle {
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        margin: 0 0 40px;
        color: white;
    }

    .logo-wrapper {
        position: absolute;
        top: 25px;
        left: 43px;
    }

    .logo-cont {
        height: 55px;
        width: 55px;
        background-color: #2E4A7D;
        border-radius: 8px;
        display: inline-block;
    }

    .logo-img {
        height: 55px;
        width: 55px;
    }

    .title {
        margin: 0 0 0 22px;
        display: inline-block;
        height: 55px;
        vertical-align: top;
        text-align: left;
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 25px;
    }

    .title-duck {
        vertical-align: top;
        color: #FFD666;
    }

    .title-health {
        vertical-align: top;
        color: #00DDF9;
    }

    .yellow {
        color: #ffd666;
    }

    .login-input {
        height: 50px;
        width: 400px;
        border: #3C5D95 1px solid;
        border-radius: 8px;
        margin: 12px 0;
        font-size: 18px;
        font-family: 'Nunito', sans-serif;
        color:#000000;
        font-weight: 600;
        padding: 0 0 0 15px;
        box-sizing: border-box;
    }

    .login-input::placeholder {
        font-size: 18px;
        font-family: 'Nunito', sans-serif;
        color:#00000080;
        font-weight: 600;
    }

    .login-button {
        height: 60px;
        width: 400px;
        border-radius: 8px;
        margin: 21px 0 18px 0;
        border: none;
        box-sizing: border-box;
        background-color: #FFD666;
        font-weight: 700;
        font-size: 30px;
        font-family: 'Nunito', sans-serif;
        color: #2E4A7D;
        transition: background-color .3s ease;
    }

    .login-button:hover {
        background-color: #D1AA3F;
    }

    .lock-icon {
        height: 28px;
        width: 30px;
        vertical-align: text-bottom;
    }

    .forgot-psw {
        display: inline-block;
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        height: 28px;
        line-height: 28px;
        color: #ffffff;
        margin: 0;
    }

    .forgot-link {
        display: inline-block;
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        height: 28px;
        line-height: 28px;
        color: #FFD666;
        margin: 0;
        text-decoration: underline;
        cursor: pointer;
    }

    .bg-top {
        position: absolute;
        top: 0;
        right: 0;
    }

    .bg-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
    }

</style>