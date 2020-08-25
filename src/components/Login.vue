<template>
    <section>
    <div class="login">
        <div class="login-box">
            <div @click="toIndex()" class="bgimg"></div>
            <div class="login-log">
                <table>
                    <tr>
                        <td>
                            <h1>会员登录</h1>
                        </td>
                        <td align="right">
                            <a href="javascript:;" @click="reg()">免费注册</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input style="margin-top:25px;" v-model="uname" autocomplete="off" type="text" id="uname" placeholder="用户名/邮箱地址/已验证手机号">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input autocomplete="off" v-model="upwd" type="password" id="upwd" placeholder="填写密码">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input autocomplete="off" type="text" id="pass" placeholder="验证码">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input style="width:18px;background-color:#000;cursor:pointer;vertical-align:middle" class="autologin" type="checkbox" id="auto">
                            <label for="auto">下次自动登录</label>
                        </td>
                        <td align="right">
                            <a href="">忘记密码?</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button @click="login()">登录</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <myfooter></myfooter>
    </section>
</template>
<script>
import MyFooter from './MyFooter';
import store from '../assets/apis/store'
export default {
    components:{
        "myfooter":MyFooter,
    },
    data(){
        return {
            uname:"",//双向绑定
            upwd:"",//用户名密码
        }
    },
    methods:{
        toIndex(){
            this.$router.push("/Index");
        },
        reg(){
            this.$router.push("/Reg");
        },
        login(){
            // console.log(1);
            //功能:完成用户登录
            //1.创建正则表达式3~12
            var reg = /^[a-zA-Z0-9]{3,12}$/;
            //2.获取用户名和密码
            var u = this.uname;
            var p = this.upwd;
            if(!reg.test(u)){
                alert("用户名格式不正确");
                return;
            }
            if(!reg.test(p)){
                alert("密码格式不正确");
                return;
            }
            var url = "login";
            var obj = {uname:u,upwd:p};
            this.axios.get(url,{params:obj})
            .then(res=>{
                if(res.data.code==-1){
                    alert("用户名或密码错误");
                }else{
                    this.$router.push("/Index");
                    alert("登录成功");
                }
            })
        },
    },
}
</script>
<style scoped>
    .login{
        width:100%;
        background-color:#fff;
    }
    .login-box{
        width:1180px;height:500px;
        margin:0 auto;
        padding:200px 0 200px 0px;
    }
    .login .login-box .bgimg{
        width:700px;height:500px;
        background-image: url("../img/login/login-img.jpg");
        background-repeat: no-repeat;
        background-size: 72%;
        background-position: center;
        float: left;
        cursor: pointer;
    }
    .login-log{
        width:370px;height:100px;
        float: right;
    }
    .login-log table{
        width:100%;
        margin-left:-85px;
        margin-top: 30px;
    }
    a{
        text-decoration: none;
        font-size: 14px;
        color:#888888;
    }
    a:hover{
        color:#F38317;
    }
    h1{
        font-size:28px;
    }
    #uname,#upwd,#pass{
        width:370px;height:40px;
        outline:0;
        padding-left:15px;
        border-radius:3px;
        box-sizing: border-box;
    }
    #upwd{
        margin-top:10px;
    }
    #pass{
        margin-top:10px;
        background-image: url("/public/img/login/rand.jpg");
        background-repeat: no-repeat;
        background-position: 97%;
        background-size:25%;
    }
    .login-log table input{
        width:21px;height:21px;
        border: 1px solid #D9DDE0;
        margin-bottom:1px;
        font-size:13px;
    }
    table input:nth-child(4){
        margin-top:0px;
    }
    table input:focus{
        box-shadow: 0 0 3px rgb(148, 145, 145);
    }
    .autologin:focus{
        background:#FF6600;
        color:#fff;
    }
    .login-log table label{
        font-size:14px;
    }
    .login-log table button{
        width:370px;height:40px;
        border-radius:4px;
        background-color:#FF6600;
        outline:0;
        border:0;
        font-size:16px;
        color:#fff;
        margin-top:15px;
    }
</style>