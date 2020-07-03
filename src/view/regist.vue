<template>
    <div class="q">
        <div class="nice">
            <div class="n-1">
                <el-input placeholder="用户名" v-model="userName"></el-input>
            </div>
            <div class="n-1">
                <el-input placeholder="密码" show-password v-model="password"></el-input>
            </div>
            <div class="n-1">
                <p style="color: red;text-align: center">{{tishi}}</p>
            </div>
            <div class="n-1">
                <el-button type="success" style="width: 100%" @click="regist()">注册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "regist",
        data(){
            return{
                userName:'',
                password:'',
                cokie:'',
                tishi:''
            }
        },
        methods:{
            regist(){
                if(this.userName.length<=6){
                    this.tishi = '用户名长度不能小于6位'
                }else if(this.password.length<=6){
                    this.tishi = '密码长度不能小于6位'
                }else {
                    this.http.get('/api/register',{
                        params:{
                            userName:this.userName,
                            password:this.password
                        }
                    })
                        .then(res=>{
                            this.cokie = res.data.code
                        });
                    if(this.cokie===1){
                        this.$message({
                            message:'注册成功，正在为您跳转登录页面',
                            type:'success'
                        });
                        setTimeout(()=>{
                            this.$router.push({path:'/login'})
                        },3000)
                    }else {
                        this.$message({
                            message:"用户名已被占用",
                            type:"error"
                        })
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .q{
        width: 100%;
    }
    .nice{
        width: 25%;
        height: 200px;
        margin: 50px auto;
        /*border: 1px solid red;*/
    }
    .n-1{
        width: 100%;
        height: 50px;
        margin: 20px auto;
    }
</style>
