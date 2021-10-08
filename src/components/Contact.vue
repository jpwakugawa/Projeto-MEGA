<template>
    <div class="contatos-wrapper"><img v-bind:src="icon" class="contatos-icon"><span class="contatos-label">{{ text }}</span></div>
</template>

<script>
export default {
    props: {
        text: String,
        icon: String
    }    
}
</script>

<style>

</style>