<template>
    <div>
        <div class="nav-bar">
            <div class="logo-container">
                <img class="logo" src="../assets/img_duck_health/DuckHealth_PNG.png" alt="logo">
            </div>
            <div class="nav-wrapper">
                <NavButton v-for="button in buttons" v-bind:key="button.id" v-bind:label="button.label" v-bind:href="button.tag"></NavButton>
            </div>
        </div>

<!-- INICIO breno7k -->
        <section id="inicio" class="banner">
            <div class="banner-left">
                <h1 class="banner-title">Duck Health</h1>
            
                <p class="banner-text">
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Nulla 
                    lacinia euismod imperdiet. 
                    Pellentesque vel ultricies ante. 
                    lacinia euismod imperdiet. ultricies ante.
                </p>
                
                <button class="banner-button">
                    <figure class="laudos-button"><svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7109 11.3281H6.46094C5.81375 11.3281 5.28906 11.8528 5.28906 12.5C5.28906 13.1472 5.81375 13.6719 6.46094 13.6719H12.7109C13.3581 13.6719 13.8828 13.1472 13.8828 12.5C13.8828 11.8528 13.3581 11.3281 12.7109 11.3281Z" fill="white"/>
                        <path d="M12.7109 17.5781H6.46094C5.81375 17.5781 5.28906 18.1028 5.28906 18.75C5.28906 19.3972 5.81375 19.9219 6.46094 19.9219H12.7109C13.3581 19.9219 13.8828 19.3972 13.8828 18.75C13.8828 18.1028 13.3581 17.5781 12.7109 17.5781Z" fill="white"/>
                        <path d="M12.7109 23.8281H6.46094C5.81375 23.8281 5.28906 24.3528 5.28906 25C5.28906 25.6472 5.81375 26.1719 6.46094 26.1719H12.7109C13.3581 26.1719 13.8828 25.6472 13.8828 25C13.8828 24.3528 13.3581 23.8281 12.7109 23.8281Z" fill="white"/>
                        <path d="M29.5078 21.4788V10.7797C29.5078 9.23516 28.9123 7.77805 27.8309 6.67602L23.076 1.75891C23.0737 1.75656 23.0714 1.75414 23.0691 1.7518C21.9744 0.638516 20.451 0 18.8898 0H3.80469C1.86617 0 0.289062 1.57711 0.289062 3.51562V33.9062C0.289062 35.8448 1.86617 37.4219 3.80469 37.4219H21.9166C23.5866 39.0182 25.8487 40 28.3359 40C33.5053 40 37.7109 35.8295 37.7109 30.7031C37.7109 25.9703 34.1262 22.0524 29.5078 21.4788ZM2.63281 33.9062V3.51562C2.63281 2.86945 3.15852 2.34375 3.80469 2.34375H18.8898C19.8253 2.34375 20.7381 2.72586 21.395 3.39203L26.149 8.30836C26.1512 8.3107 26.1535 8.31305 26.1557 8.31531C26.8059 8.9768 27.1641 9.85195 27.1641 10.7798V21.4799C22.5889 22.0579 19.0391 25.9738 19.0391 30.7032C19.0391 32.2839 19.4361 33.7735 20.1349 35.0782H3.80469C3.15852 35.0781 2.63281 34.5524 2.63281 33.9062ZM28.3359 37.6562C24.502 37.6562 21.3828 34.5371 21.3828 30.7031C21.3828 26.8691 24.502 23.75 28.3359 23.75C32.213 23.75 35.3672 26.8691 35.3672 30.7031C35.3672 34.5371 32.213 37.6562 28.3359 37.6562Z" fill="white"/>
                        <path d="M31.039 27.9279C30.5419 27.5138 29.803 27.5809 29.3886 28.078L27.4107 30.4515L26.962 29.5541C26.6726 28.9752 25.9687 28.7405 25.3897 29.0301C24.8108 29.3195 24.5762 30.0234 24.8657 30.6023L26.1157 33.1023C26.2926 33.456 26.6359 33.6966 27.0287 33.7423C27.074 33.7474 27.119 33.7501 27.164 33.7501C27.5094 33.7501 27.8401 33.5973 28.0641 33.3284L31.1891 29.5784C31.6034 29.0811 31.5362 28.3422 31.039 27.9279Z" fill="white"/>
                        <path d="M18.9609 13.6719H20.2109C20.8581 13.6719 21.3828 13.1472 21.3828 12.5C21.3828 11.8528 20.8581 11.3281 20.2109 11.3281H18.9609C18.3137 11.3281 17.7891 11.8528 17.7891 12.5C17.7891 13.1472 18.3137 13.6719 18.9609 13.6719Z" fill="white"/>
                        <path d="M21.3828 18.75C21.3828 18.1028 20.8581 17.5781 20.2109 17.5781H18.9609C18.3137 17.5781 17.7891 18.1028 17.7891 18.75C17.7891 19.3972 18.3137 19.9219 18.9609 19.9219H20.2109C20.8581 19.9219 21.3828 19.3972 21.3828 18.75Z" fill="white"/>
                        </svg></figure>
                    <p class="b-text">Acessar Laudos</p>
                </button>
            </div>
        
            <figure class="circle-vector">
                <svg width="502" height="502" viewBox="0 0 502 502" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M396.114 251.492C396.114 331.32 331.144 396.034 251 396.034C170.856 396.034 105.887 331.32 105.887 251.492V250.508C105.887 170.68 170.856 105.966 251 105.966C331.144 105.966 396.114 170.68 396.114 250.508V251.492Z" fill="#BCF1F8"/>
                    <path opacity="0.5" d="M501 251.983C501 389.511 389.071 501 251 501C112.929 501 1 389.511 1 251.983V250.017C1 112.489 112.929 1 251 1C389.071 1 501 112.489 501 250.017V251.983Z" stroke="#878D92"/>
                    <path d="M417.091 251.492C417.091 342.86 342.729 416.929 251 416.929C159.271 416.929 84.9092 342.86 84.9092 251.492V250.508C84.9092 159.14 159.271 85.0708 251 85.0708C342.729 85.0708 417.091 159.14 417.091 250.508V251.492Z" stroke="#878D92"/>
                </svg>
            </figure>
            <img class="bg-banner" src="../assets/img_duck_health/bg-banner.svg" alt="banner"/>
        </section>
<!-- FIM breno7k -->

<!-- INICIO joaovareiro-->
        <div id="sobre" class = "AboutUs">
            <div class="imagem-doutor-wrapper">
                <img class="imagem-doutor" src="../assets/img_duck_health/doctor.jpg" alt="doutor fazendo exame">
            </div>
            <div id="TextoSobreNos">
                <p class="about-title">Sobre nós</p>
                <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,
                sapien id suscipit suscipit, urna ex sodales ante, nec convallis nibh nisi a
                nibh. Aenean rutrum dui id dui varius, et consequat risus congue. Pellentesque
                maximus eu arcu a maximus. Cras ac diam pharetra, tincidunt nunc ac, mattis dolor.
                Donec ullamcorper arcu et vestibulum tincidunt. Mauris finibus lacus vitae accumsan euismod.
                Nullam ut eros sit amet sapien malesuada iaculis condimentum scelerisque elit. Maecenas non
                ipsum nec massa rutrum viverra. Nulla facilisi.</p>
            </div>
            <!--Eu não consegui usar o svg, então eu converti a foto pra PNG já que responsividade não é prioridade-->
            <div id=Circulo><img id="circulo" src="../assets/img_duck_health/circle-pattern.svg" alt="circulo"></div>
        </div>
<!-- FIM joaovareiro -->

<!-- INICIO jpwakugawa -->
        <div id="exames">
            <h1>Exames</h1>
            
            <div class="section" id="section-1">
                <img src="../assets/img_duck_health/doctor.jpg" alt="doctor">
                <div class="comment-box">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, </p>
                </div>
            </div>
            
            <div class="section" id="section-2">
                <img src="../assets/img_duck_health/doctors.jpg" alt="doctors">
                <div class="comment-box">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, </p>
                </div>
            </div>

            <div class="section" id="section-3">
                <img src="../assets/img_duck_health/doctors2.jpg" alt="doctors2">
                <div class="comment-box">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, </p>
                </div>
            </div>

            <div class="section" id="section-4">
                <img src="../assets/img_duck_health/doctors2.jpg" alt="doctors2">
                <div class="comment-box">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, </p>
                </div>
            </div>

            <div class="section" id="section-5">
                <img src="../assets/img_duck_health/doctor.jpg" alt="doctor">
                <div class="comment-box">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, </p>
                </div>
            </div>
        </div>
<!-- FIM jpwakugawa -->

<!-- INICIO breno7k-->
        <div class="address">
            <div class="address-text">
                <h2 class="address-title">Endereço</h2>
                <div class="address-wrapper"><img src="..\assets\predio.svg" class="address-icon"><span class="address-label">Rua dos Doidões, Bairro Muito Doido, N° 127</span></div>
                <div class="address-wrapper"><img src="..\assets\AC.svg" class="address-icon"><span class="address-label">Ambiente climatizado, para o seu conforto ao atende-lo!</span></div>
                <div class="address-wrapper"><img src="..\assets\bola.svg" class="address-icon"><span class="address-label">Sala com brinquedos e passa-tempo para as crianças!</span></div>
            </div>
            <figure class="map"></figure>
            <figure class="circle-address">
                <svg width="502" height="502" viewBox="0 0 502 502" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M396.114 251.492C396.114 331.32 331.144 396.034 251 396.034C170.856 396.034 105.887 331.32 105.887 251.492V250.508C105.887 170.68 170.856 105.966 251 105.966C331.144 105.966 396.114 170.68 396.114 250.508V251.492Z" fill="#BCF1F8"/>
                <path opacity="0.5" d="M501 251.983C501 389.511 389.071 501 251 501C112.929 501 1 389.511 1 251.983V250.017C1 112.489 112.929 1 251 1C389.071 1 501 112.489 501 250.017V251.983Z" stroke="#878D92"/>
                <path d="M417.091 251.492C417.091 342.86 342.729 416.929 251 416.929C159.271 416.929 84.9092 342.86 84.9092 251.492V250.508C84.9092 159.14 159.271 85.0708 251 85.0708C342.729 85.0708 417.091 159.14 417.091 250.508V251.492Z" stroke="#878D92"/>
                </svg>
                <p class="address-p"></p>
            </figure>
        </div>

<!-- FIM breno7k -->

        <div id="contato" class="duvidas">
            <div class="wrapper">
                <div class="duvidas-form">
                    <input type="text" class="field" placeholder="Nome"><input type="text" class="field" placeholder="Email">
                    <textarea type="text" class="field wide-field" placeholder="Como podemos ajudar? Envie sua dúvida"></textarea>
                    <button class="duvidas-send">Enviar Mensagem</button>
                </div>
            </div><div class="wrapper">
                <div class="contatos">
                    <h2 class="contatos-title">Contatos</h2>
                    <Contact v-for="contact in contacts" v-bind:key="contact.id" v-bind:text="contact.text" v-bind:icon="contact.icon"></Contact>
                </div>
            </div>
        </div>
        <div class="rodape">
            <img class="logo-rodape" src="../assets/img_duck_health/DuckHealth_PNG.png"><h1 class="title-rodape">Duck Health</h1>
        </div>
    </div>
</template>

<script>
import NavButton from '@/components/NavButton.vue'
import Contact from '@/components/Contact.vue'
import phone from '@/assets/img_duck_health/phone.svg'
import instagram from '@/assets/img_duck_health/instagram.svg'
import facebook from '@/assets/img_duck_health/facebook.svg'
import linkedin from '@/assets/img_duck_health/linkedin.svg'

export default {
    name: 'LandingPage',
    components: {
        NavButton,
        Contact
    },
    data () {
        return {
            buttons: [
                {id: 1, label: 'Inicio', tag: '#inicio'},
                {id: 2, label: 'Sobre', tag: '#sobre'},
                {id: 3, label: 'Exames', tag: '#exames'},
                {id: 4, label: 'Contato', tag: '#contato'}
            ],
            contacts: [
                {id: 1, text: '(67)0000-0000 ou (67)0000-0000', icon: phone},
                {id: 2, text: '@Duck_Health', icon: instagram},
                {id: 3, text: 'Duck Health', icon: facebook},
                {id: 4, text: 'Duck Health', icon: linkedin}
            ]
        }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
    
    body {
        font-family: 'Nunito', sans-serif;
        background-color: #EBF2F5;
        overflow-x: hidden;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    /* breno7k */

    .banner-title {
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 64px;
        margin-bottom: 44px;
        line-height: 87px;
        text-align: center;
        color: #FFD666;
    }

    .banner {
        position: relative;
        overflow: hidden;
        height: 672px;
        width: 100%;
        background: #15C3D6;
        box-sizing: border-box;
        border-radius: 0px 0px 0px 150px;
    }

    .banner-left {
        width: 40%;
        padding: 92px 0 0 150px;
        box-sizing: border-box;
        float: left;
    }

    .banner-text {
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: bold;
        height: 247px;
        width: 370px;
        margin: 0 auto 44px;
        font-size: 24px;
        line-height: 33px;
        text-align: justify;
        color: white;
    }

    .banner-button {
        display: block;
        box-sizing: border-box;
        height: 70px;
        width: 328px;
        border-radius: 20px;
        background: #2E4A7D;
        border-radius: 20px;
        padding: 15px 25px 15px 38px;
        border: none;
        white-space: nowrap;
        cursor: pointer;
        margin: 0 auto;;
    }

    .laudos-button {
        display: block;
        height: 40px;
        width: 38px;
        float: left;
    }

    .b-text {
        display: block;
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 40px;
        color: #FFFFFF;
        background-color: transparent;
    }

    .circle-vector {
        border-radius: 0px;
        position: absolute;
        right: -12.69%;
        bottom: 358px;
        border: none;
    }

    .bg-banner {
        /*62%*/
        position: absolute;
        right: -60px;
        top: -30px;
        float: right;
        width: 943px;
        height: 740px;
    }

    .address{
        height: 350px;
        width: 100%;
        position: relative;
        border-radius: 0px;
        bottom: 0%;
        background: #EBF2F5;
        overflow: hidden;
        box-sizing: border-box;
        padding: 20px 0 0 102px;
    }

    .address-icon {
        display: block;
        float: left;
        height: 35px;
        width: 35px;
        background-color: transparent;
        color: white;
        margin: 0 20px 0 0;
    }

    .address-text {
        width: 435px;
        position: relative;
        z-index: 1;
    }

    .address-title {
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        margin: 0 0 25px 0;
        font-weight: 800;
        font-size: 48px;
        line-height: 65px;
        color: #2E4A7D;
    }

    .address-label {
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 25px;
        color: rgba(46, 74, 125, 0.8);
    }

    .address-wrapper {
        height: 35px;
        margin: 10px auto 25px;
    }

    .map{
        height: 237px;
        position: absolute;
        top: 41px;
        right: 68px;
        width: 630px;
        background: url('../assets/map.svg');
        background-repeat: no-repeat;
        border-radius: 8px;
    }

    .circle-address{
            position: absolute;
            height: 500px;
            width: 500px;
            top: -230px;
            left: -209px;
            border: none;
            transform: matrix(1, 0, 0, -1, 0, 0);
        }

    /* joaovareiro */

    .AboutUs{
        overflow: hidden;
        position: relative;
        max-width: 1440px;
        margin: 0 auto;
    }

    #Circulo{
        position: absolute;
        width: 500px;
        height: 500px;
        top: -168px;
        left: 433px;
        z-index: 0;
        transform: matrix(1, 0, 0, -1, 0, 0);
    }

    .about-title{
        width: 507px;
        height: 76px;
        display: block;
        z-index:1;
        font-family: 'Nunito' ,sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 65px;
        text-align: center;
        color: #2E4A7D;
    }

    #TextoSobreNos {
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        height: 441px;
        width: 507px;
        padding: 166px 81px 95px 0;
        padding: 0;
        margin: 128px 0 0 0;
        font-family: 'Nunito' ,sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 27px;
        align-items: center;
        text-align: justify;
        color: rgba(46, 74, 125, 0.8);
        float: left;
    }

    .about-text {
        display: block;
        width: 507px;
        margin: 0 auto;
    }

    .imagem-doutor-wrapper {
        position: relative;
        z-index: 1;
        height: 500px;
        width: 600px;
        padding: 82px 170px 82px 83px;
        z-index: 3;
        border-radius: 8px;
        float: left;
    }

    .imagem-doutor {
        height: 500px;
    }

    #RetanguloCinza{
        position: relative;
        height: 664px;
        width: 1440px;
        background: #EBF2F5;
        border-radius: 0px;
    }

    /* jpwakugawa */

    #exames {
        position: relative;
        background-color: #FFD666;
        width: auto;
        height: 700px;
        color: #2E4A7D;
        font-family: Nunito;
        font-weight: bold;
        padding: 30px 57px;
        border-radius: 0px 222px 0px 220px;
    }

    #exames h1 {
        font-weight: 800;
        size: 38px;
        height: 57px;
        width: 209px;
        text-align: center;
    }

    #exames img {
        width: 10em;
        height: 10em;
        border: 2.5px solid #2E4A7D;
        border-radius: 50%;
        object-fit: cover;
    }

    #exames .section {
        max-width: 20rem;
        max-height: 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #exames .comment-box {
        max-width: 234px;
        max-height: 148px;
        text-align: center;
        font-weight: 800;
    }

    #exames #section-1 {
        position: absolute;
        top: 25%;
    }

    #exames #section-2 {
        position: absolute;
        left: 40%;
        top: 20%;
    }

    #exames #section-3 {
        position: absolute;
        right: 10%;
        top: 25%;
    }

    #exames #section-4 {
        position: absolute;
        top: 60%;
        left: 20%;
    }

    #exames #section-5 {
        position: absolute;
        top: 60%;
        right: 25%;
    }

    /* marcoshasm */

    * {
        padding: 0;
        margin: 0;
    }


    #app {
        width: 100%;
    }

    .logo-container {
        display: inline-block;
        margin: 14px 0 14px 130px;
        background-color: #2E4A7D;
        height: 90px;
        width: 90px;
        border-radius: 8px;
    }

    .logo {
        height: 90px;
        width: 90px;
    }

    .nav-bar {
        background-color: #15C3D6;
        height: 118px;
    }

    .nav-wrapper {
        float: right;
        margin-right: 100px;
    }

    .nav-button {
        display: inline-block;
        background-color: transparent;
        font-family: 'Nunito', sans-serif;
        border: none;
        font-size: 28px;
        line-height: 38px;
        padding: 40px 15px;
        color: white;
        font-weight: 700;
        text-decoration: none;
        transition: background-color .3s ease;
    }

    .nav-button:hover {
        background-color: #12AFCB;
    }

    .duvidas {
        height: 350px;
    }

    .duvidas-form {
        box-sizing: border-box;
        height: 350px;
        width: 720px;
        padding: 10px;
        margin: 0 auto;
    }

    .wrapper {
        line-height: 20px;
        height: 20px;
        width: 50%;
        float: left;
    }

    .field {
        display: inline-block;
        height: 52px;
        width: 340px;
        margin: 0 0 0 20px;
        border: none;
        border-radius: 8px;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        line-height: 52px;
        padding: 10px;
        font-size: 20px;
    }

    .field:first-child {
        margin: 0;
    }

    .field::placeholder {
        color: #909090;
    }

    .wide-field {
        height: 164px;
        width: 700px;
        margin: 15px 0 20px;
        vertical-align: top;
        line-height: 52px;
        padding: 0 10px 10px 10px;
        resize: none;
    }

    .duvidas-send {
        height: 52px;
        width: 700px;
        font-weight: 800;
        font-family: 'Nunito', sans-serif;
        background-color: #2E4A7D;
        border-radius: 8px;
        border: none;
        font-size: 20px;
        color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: background-color .3s ease;
    }

    .duvidas-send:hover {
        background-color: #203a69;
    }

    .duvidas-send:active {
        background-color: #182c52;
    }

    .contatos {
        box-sizing: border-box;
        height: 350px;
        width: 720px;
        padding: 10px;
        margin: 0 auto;
    }

    .contatos-title {
        font-family: 'Nunito', sans-serif;
        line-height: 66px;
        text-align: center;
        display: inline-block;
        font-size: 48px;
        width: 700px;
        color: #2E4A7D;
        font-weight: 800;
        margin: 0 0 20px 0;
    }

    .contatos-wrapper {
        height: 35px;
        width: 70%;
        margin: 10px auto 10px;
    }

    .contatos-icon {
        display: block;
        float: left;
        height: 35px;
        width: 35px;
        background-color: transparent;
        color: white;
        margin: 0 20px 0 0;
    }

    .contatos-label {
        font-family: 'Nunito', sans-serif;
        display: block;
        height: 35px;
        font-size: 24px;
        font-weight: 800;
        color: #2E4A7D;
        line-height: 35px;
    }

    .rodape {
        box-sizing: border-box;
        height: 182px;
        background-color: #12AFCB;
        border-radius: 0px 80px 0px 0px;
        padding: 11px 0 11px 0;
    }

    .logo-rodape {
        display: block;
        height: 160px;
        width: 160px;
        float: left;
        margin: 0 0 0 50px;
    }

    .title-rodape {
        font-family: 'Nunito', sans-serif;
        font-size: 40px;
        font-weight: 800;
        color: white;
        line-height: 160px;
    }
</style>