<template>
<!--    商品详情页-->
        <div class="yu">
            <div class="jun">
                <div>
                    <el-button @click="fanhui()" icon="el-icon-arrow-left">返回</el-button>
                </div>
                <div>
<!--                    商品详情-->
                    <slist
                            v-for="list in details"
                            :key="list"
                            :shop="list"
                    ></slist>
                </div>
            </div>
        </div>

</template>

<script>
    import slist from '../components/detaList'
    export default {
        name: "detail",
        components:{
            slist,
        },
        data(){
            return{
                details:[]
            }
        },
        mounted(){
          this.http.get('/api/detail?goodId='+this.$route.query.goodId)
              .then(res=>{
                  this.details = res.data;
                  console.log(res.data)
              })
        },
        methods:{
            fanhui(){
                this.$router.push({path:'/'})
            }
        }
    }
</script>

<style scoped>
    .yu{
        width: 50%;
        margin: 10px auto;
    }
</style>
