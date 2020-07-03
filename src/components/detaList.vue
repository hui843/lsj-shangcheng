<template>
<!--    商品详情页页面-->
    <div>
        <div class="home">
            <div>
                <div>
                    <pic-zoom :url="shop.img_list_url" :space="3"></pic-zoom>
                </div>
                <div>
                    <img :src="shop.img_list_url" alt="" style="width: 100px;height: 100px;border: 2px solid mediumvioletred">
                </div>
                <div>
                    <b>相似商品推荐</b>
                </div>
            </div>
            <div style="margin-top: 50px">
                <h2>{{shop.title}}</h2>
                <span style="margin-top: 20px">{{shop.supplier}}</span>
                <div style="margin-top: 20px">
                    <span style="color: red">￥{{shop.price}}</span>
                    <div style="margin-top: 20px">
                        <el-rate
                                v-model="value"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                        </el-rate>
                    </div>
                    <div style="margin-top: 20px">
                        <el-button type="danger" @click="en" plain>添加购物车</el-button>
                    </div>
                </div>
            </div>
        </div>
        <hr style="width: 120%">
<!--        相似商品-->
        <div class="xsd">
            <xs
                    v-for="x in xs"
                    :key="x"
                    :xs="x"
            ></xs>
        </div>
    </div>

</template>

<script>
    import xs from './xs'
    import PicZoom from 'vue-piczoom'
    export default {
        name: "detaList",
        components:{
            xs,
            PicZoom
        },
        props:['shop'],
        data(){
            return{
                value:3.7,
                xs:[]
            }
        },
        mounted() {
            this.http.get('/api/search?word='+this.shop.type_one)
                .then(res=>{
                    this.xs = res.data;
                    console.log(this.xs)
                })
        },
        methods:{
            en(){
                this.$message({
                    message:"添加成功",
                    type:'success'
                })
            }
        }
    }
</script>

<style scoped>
    .home{
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }
    .xsd{
        width: 200%;
        margin-left: -300px;
    }
</style>
