<template>
    <div id="lista-laudos">
        <div id="up-section">
            <figure id="patient">
                <img src="../assets/patient.png" alt="Patient">
            </figure>
            <p>Laudos de Elliot Alderson</p>
        </div>

        <hr>

        <ItemListLaudo/>
        <ItemListLaudo/>
        <ItemListLaudo/>
        <ItemListLaudo/>

    </div>
</template>

<script>
import ItemListLaudo from "./ItemListLaudo.vue"

export default {
    components: {
        ItemListLaudo
    }    
}
</script>

<style scoped>

    #lista-laudos {
        position: absolute;
        top: 25%;
        left: 15%;
        width: 520px;
        height: 520px;
        border-radius: 8px;
        background: white;
    }

    img {
        width: 100%;
        height: 100%;
    }

    hr {
        width: 458px;
        border: 1px solid rgba(46, 74, 125, 0.5);
    }


    #up-section {
        display: flex;
        flex-direction: row;
    }

    #up-section p {
        display: flex;
        align-items: center;
        font-weight: bold;  
        font-size: 24px;
        line-height: 33px;
    }

    #patient {
        width: 70px;
        height: 70px;
        border: 2px solid #2E4A7D;
        border-radius: 50%;
        overflow: hidden;
    }

</style>