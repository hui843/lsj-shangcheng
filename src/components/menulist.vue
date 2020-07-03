<template>
    <div>
<!--        一级菜单点进来的页面-->
        <menu-one></menu-one>
        <div class="mear">
            <div v-if="ins">暂无此物品信息</div>
            <div v-for="li in lists" :key="li" class="me-1">
                <router-link :to="{path:'/detail',query:{goodId:li.Id}}">
                    <img :src="li.img_list_url" alt="">
                    <h5>{{li.title}}</h5>
                    <span class="price">￥{{li.price}}</span>
                    <span v-html="li.mack" class="mack"></span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import menuOne from './menuOne'
    export default {
        name: "menulist",
        components:{
            menuOne
        },
        data(){
            return{
                lists:[],
                ins:''
            }
        },
        mounted() {
            this.http.get('/api/search?word=' + this.$route.query.good)
                .then(res => {
                    if(res.data!==[]){
                        this.lists = res.data;
                        console.log(this.lists);
                        this.ins = false
                    }else {
                        this.ins = true
                    }

                });
        }
    }
</script>

<style scoped>
    .mear{
        width: 80%;
        /*border: 1px solid red;*/
        margin: 20px auto;
        display: flex;
        flex-wrap: wrap;
        padding: 0;
    }
    .me-1{
        width: 220px;
        height: 300px;
        margin: 10px;
        padding: 0;
        /*border: 1px solid black;*/
    }
    .me-1 img{
        width: 220px;
        height: 200px;
    }
    .me-1 a{
        text-decoration: none;
        color: black;
    }
    .price{
        float: left;
    }
    .mack{
        float: right;
    }
</style>
