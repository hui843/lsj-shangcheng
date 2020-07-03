<template>
<!--    首页商品展示-->
        <router-link :to="{path:'/detail',query:{goodId:shop.Id}}" class="aa">
            <div class="shoplist">
                <img :src="shop.img_list_url">
                <h5>{{shop.title}}</h5>
                    <div class="c-2">
                        <span class="price">￥{{shop.price}}</span>
                        <span v-html="shop.mack" class="mack"></span>
                    </div>
            </div>
        </router-link>
</template>

<script>
    export default {
        name: "shoping",
        props:['shop'],
    }
</script>

<style scoped>
    .shoplist{
        width: 220px;
        height: 330px;
        /*border: 1px solid red;*/
        margin: 5px;
    }
    .shoplist img{
        width: 220px;
        height: 220px;
    }
    .shoplist h5{
        color: black;
    }
    .aa{
        text-decoration: none;
    }
    .c-2{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .price{
        color: black;
    }

</style>
