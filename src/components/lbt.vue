<template>
    <div class="lbt">
        <el-carousel indicator-position="outside" id="lbt-div">
            <el-carousel-item v-for="item in imgs" :key="item.index" id="lbt-tp">
                <img :src="item.tu" alt="" >
            </el-carousel-item>
        </el-carousel>
    </div>

</template>

<script>
    export default {
        name: "lbt",
        data(){
            return{
                imgs:[
                    {index:0,tu:require("../assets/img/02.jpg")},
                    {index:1,tu:require("../assets/img/03.jpg")},
                    {index:2,tu:require("../assets/img/04.jpg")},
                    {index:3,tu:require("../assets/img/05.jpg")},
                    {index:4,tu:require("../assets/img/06.jpg")},
                ]
            }
        }
    }
</script>

<style scoped>
    .lbt{
        width: 70%;
        height: 400px;
        margin: 5px auto;
        /*border: 1px solid red;*/
    }
    #lbt-div{
        height: 400px;
        /*border: 1px solid blue;*/
    }
    #lbt-tp{
        width: 100%;
        height: 400px;
        border-radius: 20px;
        /*border: 1px solid yellow;*/
    }
    #lbt-tp img{
        width: 100%;
        height: 100%;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    #lbt-div :nth-child(1) :nth-child(1) :nth-child(1){
        margin-top: 50px;
        font-size:40px;
        background: darkmagenta;
        opacity: .6;
        border-radius: 50%;
    }#lbt-div :nth-child(1) :nth-child(2) :nth-child(1){
         margin-top: 50px;
         font-size:40px;
         background: darkmagenta;
         opacity: .6;
         border-radius: 50%;
     }
</style>
