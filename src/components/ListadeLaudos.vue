<template>
    <div id="lista-laudos">
        <div id="up-section">
            <figure id="patient">
                <img src="../assets/patient.png" alt="Patient">
            </figure>
            <p>Laudos de Elliot Alderson</p>
        </div>

        <div class="blue-line"/>

        <LaudoItem/>
        <LaudoItem/>
        <LaudoItem/>
        <LaudoItem/>

    </div>
</template>

<script>
import LaudoItem from '../components/LaudoItem.vue'

export default {
    components: {
        LaudoItem
    }
}
</script>

<style scoped>

    #lista-laudos {
        position: absolute;
        top: 211px;
        left: 214px;
        width: 520px;
        height: 520px;
        padding: 20px 30px;
        border-radius: 8px;
        background-color: white;
        box-sizing: border-box;
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
        margin: 0 15px 13px 0;
    }

    #up-section p {
        display: flex;
        align-items: center;
        font-weight: bold;  
        font-size: 24px;
        line-height: 33px;
    }

    .blue-line {
        width: 458px;
        height: 1px;
        margin: 0 auto;
        background-color: #2E4A7D80;
    }

</style>