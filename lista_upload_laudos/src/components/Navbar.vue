<template>

    <section id="navbar">
        <div class="pesquisa-area">
            <figure id="search">
                <img src="../assets/search.svg" alt="Lupa">
            </figure>
            <input type="text" placeholder="Search..." id="pesquisa">
        </div>
        <figure id="dr-img">
            <img src="../assets/woman.png" alt="Woman">
        </figure>
        <p class="dr-name">Olá, <span id="med1">  {{nome}}</span><br> <span id="med2">Médico</span> </p>
        <div id="line"></div>
</section>

</template>

<script>
export default {
    
}
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
    
    #navbar{
        display: flex;
        position: absolute;
        padding: 0%;
        margin: 0%;
        width: 1119px;
        height: 80px;
    }

    img{
        width: 100%;
        height: 100%;
    }
    
    .pesquisa-area{
        display: flex;
        position: relative;
        align-self: center;
        background: #F5F5F5;
        margin: 0%;
        width: 496px;
        height: 46px;
        border: 1px solid #D3E2E5;
        border-radius: 8px;
    }

    .dr-name{
        position: absolute;
        margin: 0px 20px 0px 0px;
        right: 72px;
        top:25px;
        font-weight: 800;
        font-size: 16px;
        line-height: 22px;
    }

    #search{
        position: absolute;
        align-self: center;
        margin: 3%;
    }

    #pesquisa{
        position: absolute;
        align-self: center;
        left: 58px;
        margin: 0%;
        border: none;
        width: 415px;
        height: 30px;
        background: #FFFFFF;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.5);
    }

    #dr-img{
        position: absolute;
        height: 65px;
        width: 65px;
        margin: 0%;
        top: 0px;
        right: 0px;
        border: 2px solid #2E4A7D;
        border-radius: 50%;
        overflow: hidden;
    }

    #med1{
        color:  #2E4A7D;
    }

    #med2{
        position: absolute;
        color: rgba(46, 74, 125, 0.5);
        font-weight: 800;
        font-size: 14px;
        line-height: 19px;
    }

    #line{
        position: absolute;
        height: 1;
        left: 0%;
        right: 0.27%;
        top: 100%;
        bottom: 0%;
        border: 1px solid #000000;
    }

</style>