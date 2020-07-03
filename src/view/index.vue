<template>
<!--    首页内容-->
    <div>
<!--         一级菜单-->
        <menuOne></menuOne>
<!--        轮播图-->
        <lbt></lbt>
<!--        首页商品展示-->
        <div class="ss">
            <shop v-for="s in datas" :shop="s" :key="s"></shop>
        </div>
    </div>

</template>

<script>
    import menuOne from '../components/menuOne'
    import lbt from '../components/lbt'
    import shop from '../components/shoping'
    export default {
        name: "index",
        components:{
            shop,
            lbt,
            menuOne
        },
        data() {
            return {
                datas: [],
                details:[],
            }
        },
        created() {
            this.http.get('/api/goodList')
                .then(res=>{
                    this.datas = res.data;
                })
                .catch(err=>{
                    console.log(err)
                })
        }

    }
</script>

<style scoped>
    .a {
        width: 70%;
        height: 25px;
        display: flex;
        /*border: 1px solid blue;*/
        justify-content: space-between;
        margin: 5px auto;
    }

    .o-3 {
        /*border: 1px solid red;*/
        border-radius: 50%;
        width: 60px;
        text-align: center;
        transition: 0.5s;
    }

    .o-3:hover {
        color: white;
        background-color: blueviolet;
    }
    .ss{
        margin: 0 auto;
        width: 80%;
        /*border: 1px solid black;*/
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
