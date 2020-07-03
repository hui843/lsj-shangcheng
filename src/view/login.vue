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
                <el-button type="success" style="width: 100%" @click="login()">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import vueElevent from '../Vueevent'
    export default {
        name: "login",
        data(){
            return{
                userName:'',
                password:'',
                cokie:'',
                token:''
            }
        },
        methods:{
            login(){
                this.http.get('/api/login',{
                    params:{
                        userName:this.userName,
                        password:this.password
                    }
                })
                    .then(res=>{
                        this.cokie = res.data.code;
                        this.token = res.data.token;
                        if(this.cokie===1){
                            this.$message({
                                message:'登录成功',
                                type:'success'
                            });
                            setTimeout(()=>{
                                vueElevent.$emit('to-index',this.token)
                                this.$router.push({path:'/'})
                            },3000)
                        }else {
                            this.$message({
                                message:'用户名或密码错误',
                                type:'error'
                            })
                        }
                    })
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
