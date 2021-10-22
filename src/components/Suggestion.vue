<template>
    <div class="suggestion" v-on:click="$emit('chosen', medico.nome)">
        {{ medico.nome }}
    </div>
</template>

<script>
export default {
    props: {
        medico: Object
    }
}
</script>

<style scoped>
    .suggestion {
        width: 393px;
        height: 25px;
        border: 1px black solid;
        border-width: 0 1px 1px 1px;
        box-sizing: border-box;
        padding: 0 0 0 4px;
    }

    .suggestion:hover {
        background-color: lightgray;
    }

    .suggestion:first-child {
        border-width: 1px;
    }
</style>