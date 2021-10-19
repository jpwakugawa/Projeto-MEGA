<template>
    <div class="prompt-out" v-on:click="$emit('close')">
        <div class="prompt" v-on:click.stop>
            <figure class="warning"></figure> <span class="warning-text">Quer realmente excluir este {{ tipo }}?</span>
            <button class="prompt-button sim" v-on:click="confirm()">Sim</button>
            <button class="prompt-button nao" v-on:click="$emit('close')">Não</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        tipo: String
    },
    methods: {
        confirm () {
            this.$emit('deleteUser', this.id);
            this.$emit('close');
        }
    }
}
</script>

<style>
    .prompt {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 95px;
        width: 298px;
        background-color: #EBF2F5;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 10px 0 0 16px;
    }

    .prompt-out {
        position: absolute;
        z-index: 2;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .warning {
        height: 20px;
        width: 25px;
        background-image: url('../assets/warning.svg');
        float: left;
    }

    .warning-text {
        margin: 0 0 0 3px;
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        color: #3C5D95;
    }

    .prompt-button {
        display: block;
        height: 27px;
        width: 60px;
        background: #2E4A7D;
        border: none;
        border-radius: 8px;
        position: absolute;
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
        color: white;
    }

    .prompt-button:active {
        background: #1b3361;
    }

    .sim {
        bottom: 10px;
        right: 95px;
    }

    .nao {
        bottom: 10px;
        right: 25px;
    }
</style>