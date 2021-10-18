<template>
    <div id="lista-laudos">
        <div id="up-section">
            <figure id="patient">
                <img src="../assets/patient.png" alt="Patient">
            </figure>
            <p>Laudos de Elliot Alderson</p>
        </div>

        <hr>

        <div class="yellow-section">
            <div id="text">
                <span class="blue">Eletrocardiograma</span>
                <span class="gray">Dr.Hans Chucrute</span>
            </div>
            <div id="right-side">
                <div id="icons">
                    <figure id="download"></figure>
                    <figure id="trash"></figure>
                </div>
                <span class="gray-date">11/03/2020</span>
            </div>
        </div>

        <div class="yellow-section">
            <div id="text">
                <span class="blue">Eletrocardiograma</span>
                <span class="gray">Dr.Hans Chucrute</span>
            </div>
            <div id="right-side">
                <div id="icons">
                    <figure id="download"></figure>
                    <figure id="trash"></figure>
                </div>
                <span class="gray-date">11/03/2020</span>
            </div>
        </div>

        <div class="yellow-section">
            <div id="text">
                <span class="blue">Eletrocardiograma</span>
                <span class="gray">Dr.Hans Chucrute</span>
            </div>
            <div id="right-side">
                <div id="icons">
                    <figure id="download"></figure>
                    <figure id="trash"></figure>
                </div>
                <span class="gray-date">11/03/2020</span>
            </div>
        </div>

        <div class="yellow-section">
            <div id="text">
                <span class="blue">Eletrocardiograma</span>
                <span class="gray">Dr.Hans Chucrute</span>
            </div>
            <div id="right-side">
                <div id="icons">
                    <figure id="download"></figure>
                    <figure id="trash"></figure>
                </div>
                <span class="gray-date">11/03/2020</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    #lista-laudos {
        position: absolute;
        top: 25%;
        width: 520px;
        height: 520px;
        border-radius: 8px;
    }

    img {
        width: 100%;
        height: 100%;
    }

    #up-section {
        display: flex;
        flex-direction: row;
    }

    #patient {
        width: 70px;
        height: 70px;
        border: 2px solid #2E4A7D;
        border-radius: 50%;
        overflow: hidden;
    }

    #up-section p {
        display: flex;
        align-items: center;
        font-weight: bold;  
        font-size: 24px;
        line-height: 33px;
    }

    hr {
        width: 458px;
        border: 1px solid rgba(46, 74, 125, 0.5);
    }

    .yellow-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 30px;
        margin-bottom: 20px;
        width: 460px;
        height: 76px;
        background-image: linear-gradient(rgb(255, 214, 102),rgb(255, 214, 102, 0.5));
        border-radius: 8px;
    }

    #text {
        display: flex;
        flex-direction: column;
        margin: 10px;
    }

    .blue {
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
    }

    .gray {
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        color: rgba(46, 74, 125, 0.5);
    }

    .gray-date {
        font-size: 16px;
        line-height: 22px;
        color: rgba(46, 74, 125, 0.5);
    }

    #right-side {
        left: 0%;
        margin: 5px;
    }

    #icons {
        display: flex;
        flex-direction: row;
    }

    #icons figure {
        width: 35px;
        height: 35px;
        background: rgba(46, 74, 125, 1);
        border-radius: 50%;
        margin: 5px;
    }

</style>