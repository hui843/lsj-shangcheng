<template>
<!--    导航部分-->
    <div id="app">
        <div class="one">
            <div class="one-1">
                <div>
                    <img src="./assets/img/01.png" alt="">
                </div>
                <div class="o-1">
                    <el-input v-model="input" placeholder="请输入想要的商品"></el-input>
                    <el-button  icon="el-icon-search" @click="tiao()">搜索</el-button>
                </div>
            </div>
            <div class="o-2">
                <div :class="aa"><a href="/">首页</a></div>
                <div :class="bb" v-if="lo"><div @click="login1()">登录</div></div>
                <div class="t" v-if="lo1"><a href="">购物车</a></div>
                <div :class="cc" v-if="re"><div @click="regist1()">注册</div></div>
                <div class="t" v-if="re1" @click="tui_login()"><a href="">退出登录</a></div>
            </div>
        </div>
        <div>
            <router-view :key="$route.fullPath" />
        </div>
    </div>
</template>

<script>
    import vueElevent from './Vueevent'
    export default {
        name: 'App',
        data(){
            return{
                input:'',
                lo:true,
                re:true,
                lo1:false,
                re1:false,
                aa:'t on',
                bb:'t',
                cc:'t',
                token:''
            }
        },
        components: {
        },
        mounted(){
            //兄弟传值接收登录传递过来的值进行判断
            vueElevent.$on('to-index',e=>{
                this.token = e;
                console.log(this.token);
                if(this.token!==''){
                    this.lo = false;
                    this.re = false;
                    this.lo1 = true;
                    this.re1 = true;
                }
            })
        },
        methods: {
            //登录
            login1(){
              this.$router.push({path:'/login'})
                if(this.$route.path==='/login'){
                    this.aa = 't';
                    this.bb = 't on';
                    this.cc = 't'
                }
            },
            //注册
            regist1(){
                this.$router.push({path:'/regist'})
                if(this.$route.path==='/regist'){
                    this.aa = 't';
                    this.bb = 't';
                    this.cc = 't on'
                }
            },
            //模糊查询，查询接口
            tiao() {
                this.$router.push({path: '/menulist?good=' + this.input})
            },
            //退出登录
            tui_login(){
                this.token = ''

            }
        },
    }
</script>

<style>
    #app {
        width: 100%;
    }
    .one{
        width: 100%;
        height: 180px;
        border-bottom: 1px solid black;
        box-shadow: 0 2px 0 lightgrey;
    }
    .one-1{
        width: 70%;
        height: 100px;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
    .one-1 img{
        margin-top: 40px;
        /*margin-left: -20px;*/
        height: 60px;
        width: 150px;
    }
    .o-1{
        margin-top: 40px;
        width: 350px;
        height: 40px;
        display: flex;
        /*border: 1px solid red;*/
    }
    .o-2{
        margin: auto;
        height: 50px;
        width: 70%;
        display: flex;
    }
    .t{
        width: 75px;
        height: 35px;
        text-align: center;
        margin: 20px;
        font-size: 18px;
    }
    .on{
        border-bottom: 3px solid blueviolet;
    }
    .t a{
        text-decoration: none;
        color: black;
    }
    .t a:hover{
        color: blueviolet;
    }
    .t div:hover{
        color: blueviolet;
    }
    .t:hover{
        border-bottom: 3px solid blueviolet;
    }
</style>
