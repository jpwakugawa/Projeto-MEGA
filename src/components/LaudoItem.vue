<template>
    <div class="yellow-section">
        <div id="text">
            <span class="blue">{{ laudo.nome }}</span>
            <span class="gray">{{ laudo.medico }}</span>
        </div>
        <div id="right-side">
            <div class="icons">
                <div class="icon">
                    <img id="download" src="../assets/download1.svg" v-on:click="download()" class="icon-img">
                </div>
                <div class="icon">
                    <img id="trash" src="../assets/delete.svg" v-on:click="deletar()" class="icon-img">
                </div>
            </div>
            <span class="gray-date">{{ laudo.data }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        laudo: Object
    },
    methods: {
        async download () {
            try {
                let {data} = await this.$http.get(`http://localhost:3000/download-laudo?filehash=${this.laudo.filehash}`, { responseType: 'blob' });
                //console.log(data);
                const link = document.createElement('a')
                link.href = URL.createObjectURL(data)
                link.download = this.laudo.filename
                link.click()
                URL.revokeObjectURL(link.href)
            } catch (error) {
                console.log(error)
            } finally {
                console.log("funfou")
            }
        },
        async deletar () {
            //deletar laudo
            try {
                let info = {
                    id: this.laudo.id
                }
                await this.$http.post('http://localhost:3000/delete-laudo', info);
                this.$emit('atualiza');
            } catch (error) {
                console.log(error)
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
        padding: 14px 22px;
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

    .icons {
        display: flex;
        flex-direction: row;
    }

    .icon {
        width: 35px;
        height: 35px;
        background-color: #2E4A7D;
        border-radius: 50%;
        margin: 5px;
        padding: 7.5px;
        box-sizing: border-box;
    }

    .icon:active {
        background-color: #1A3361;
    }

    .icon-img {
        width: 20px;
        height: 20px;
    }
</style>