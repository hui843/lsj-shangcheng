<template>
<!--    一级菜单分类-->
    <div class="menu">
        <div v-for="e in ones" :key="e" class="me">
            <router-link :to="{path:'/menulist',query:{good:e}}" class="m-1">{{e}}</router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "menuOne",
        data(){
            return{
                ones:[]
            }
        },
        mounted() {
            this.http.get('/api/getTypeone')
                .then(res=>{
                    this.ones = res.data;
                    console.log(this.ones)
                })
        }
    }
</script>

<style scoped>
    .menu{
        margin: 5px auto;
        width: 70%;
        display: flex;
        justify-content: space-between;
        /*text-decoration: none;*/
    }
    .me{
        width: 120px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        /*border: 1px solid black;*/
    }
    .me:hover{
        background-color: darkmagenta;
        border-radius: 30px;
    }
    .me:hover .m-1{
        color: white;
    }
    .m-1{
        text-decoration: none;
        list-style: none;
        font-size: 20px;
        color: black;
    }
</style>
