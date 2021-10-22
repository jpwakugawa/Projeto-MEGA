<template>
    <div>

    </div>
</template>

<script>
export default {
    created: function () {
        if (this.$session.exists()) {
            this.$session.destroy();
            console.log('Deslogado');
            this.$router.push('/landing');
        } else {
            console.log('Já está deslogado');
            this.$router.push('/landing');
        }
    }
}
</script>