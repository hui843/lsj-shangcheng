<template>
<!--    相似商品-->
    <router-link :to="{path:'/detail',query:{goodId:xs.Id}}" class="sp">
        <ul class="shopList">
            <ul class="shoplist">
                <li><img :src="xs.img_list_url"></li>
                <li class="title">{{xs.title}}
                    <p>
                        <span class="price">￥{{xs.price}}</span>
                        <span v-html="xs.mack" class="mack"></span>
                    </p>
                </li>
            </ul>
        </ul>
    </router-link>
</template>

<script>
    export default {
        name: "xs",
        props:['xs']
    }
</script>

<style scoped>
    .shoplist{
        width: 220px;
        height: 220px;
        float: left;
        padding: 5px;
    }
    li{
        list-style: none;
    }
    li>img{
        width: 160px;
        height: 160px;
    }
    .mack{
        float: right;
        margin-right: 20px;
    }
    .price{
        color: red;
        font-weight: bolder;
    }
    .title{
        color: black;
        font-weight: bolder;
    }
    .sp{
        text-decoration: none;
    }
</style>
