<template>
    <div class="yellow-section">
        <div id="text">
            <span class="blue">Eletrocardiograma</span>
            <span class="gray">Dr.Hans Chucrute</span>
        </div>
        <div id="right-side">
            <div id="icons">
                <figure id="download" v-on:click="download()"></figure>
                <figure id="trash"></figure>
            </div>
            <span class="gray-date">11/03/2020</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        async download () {
            try {
                let {data} = await this.$http.get(`http://localhost:3000/download-laudo?filename=${'50026cee3a0b77655fa5287bcf54c44c'}`, { responseType: 'blob' });
                console.log(data);
                const link = document.createElement('a')
                link.href = URL.createObjectURL(data)
                link.download = 'laudo.png'
                link.click()
                URL.revokeObjectURL(link.href)
            } catch (error) {
                console.log(error)
            } finally {
                console.log("funfou")
            }
        }
    }
}
</script>

<style scoped>
.yellow-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 20px;
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