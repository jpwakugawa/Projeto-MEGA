<template>
    <div>

    </div>
</template>

<script>
export default {
    created: function () {
        if (this.$session.exists()) {
            this.$session.destroy();
            this.$router.push('/landing');
        } else {
            this.$router.push('/landing');
        }
    }
}
</script>