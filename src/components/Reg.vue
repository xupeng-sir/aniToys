<template>
    <section>
    <div class="login">
        <div class="login-box">
            <div class="bgimg" @click="toIndex()">
                <a href=""></a>
            </div>
            <div class="login-log">
                <table>
                    <tr>
                        <td>
                            <h1>会员注册</h1>
                        </td>
                        <td align="right">
                            <a href="javascript:;" @click="Login()">已注册，去登录</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input autocomplete="off" :data-uname="uname" v-model="uname" type="text" id="uname" placeholder="用户名/邮箱地址/已验证手机号" style="margin-top:25px;">
                            <span style="font-size:12px;color:#888888;margin-left:15px;">3~12位用户名</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input autocomplete="off" :data-upwd="upwd" v-model="upwd" type="password" id="upwd" placeholder="填写密码">
                            <span style="font-size:12px;color:#888888;margin-left:15px;">6~18位大小写字母、数字</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input autocomplete="off" :data-upwd="upwd" v-model="cpwd" type="password" id="cpwd" placeholder="再次填写密码">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input type="text" id="pass" placeholder="验证码">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input style="width:18px;background-color:#000;cursor:pointer;vertical-align:middle" class="autologin" type="checkbox" id="auto">
                            <label for="auto">我已阅读并同意</label>
                            <a @click="agreement()" href="javascript:;" style="color:#000;font-weight:bold;">《会员注册协议》</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button @click="reg()">立即注册</button>
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
import { Popup } from 'mint-ui';

export default {
    components:{
        "myfooter":MyFooter,
    },
    data(){
        return {
            uname:"",
            upwd:"",
            cpwd:"",
        }
    },
    methods:{
        agreement() {
            this.$alert(`anitoys用户注册协议:本协议是您与anitoys网站（简称"本站"，网址：www.anitoys.com）所有者（以下简称为"anitoys"）之间就anitoys网站服务等相关事宜所订立的契约，请您仔细阅读本注册协议，您点击"同意并继续"按钮后，本协议即构成对双方有约束力的法律文件。第1条 本站服务条款的确认和接纳1.1本站的各项电子服务的所有权和运作权归anitoys所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。1.2用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。1.3如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本站。1.4anitoys保留在中华人民共和国大陆地区法施行之法律允许的范围内独自决定拒绝服务、关闭用户账户、清除或编辑内容或取消订单的权利。第2条本站服务2.1anitoys通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。2.2用户必须自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。2.3 anitoys有权不断更改和改进服务，包括增加、删除某项服务，或暂停、彻底停止某项服务2.4用户在anitoys网站参与商品评价、晒单、网站活动等方式可以获得积分和优惠券。积分和优惠券都具有特定的使用规则和有效期，逾期将被清零，anitoys不对逾期清零的积分和优惠券负责。对于恶意购买和不正当手段获得的积分和优惠券，anitoys有权作出独立判断并采取包含但不限于冻结用户账户或清空积分、优惠券等措施。您点击本协议下方的"同意并继续"按钮即视为您完全接受本协议，在点击之前请您再次确认已知悉并完全理解本协议的全部内容。`, '注册协议');
        },
        toIndex(){
            this.$router.push("/Index");
        },
        Login(){
            this.$router.push("/Login");
        },
        reg(){
            var reg = /^[a-zA-Z0-9]{3,12}$/;
            var regUpwd = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{6,18}$/;
            var uname = this.uname;
            var upwd = this.upwd;
            var cpwd = this.cpwd;
            if(!reg.test(uname)){
                alert("用户名格式不正确");
                return;
            }
            if(!regUpwd.test(upwd)){
                alert("密码格式不正确");
                return;
            }
            if(upwd!=cpwd){
                alert("两次密码不一致");
                return;
            }
            //7.发送ajax请求
            var url = "reg";
            var obj = {uname,upwd};
            this.axios.get(url,{params:obj})
            .then(res=>{
                if(res.data.code==-2){
                    alert("用户名已存在");
                }else{
                    alert("注册成功!");
                    return;
                    this.$router.push("/Index");
                }
            })
        }
    }
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
    #uname,#upwd,#cpwd,#pass{
        width:370px;height:40px;
        outline:0;
        padding-left:15px;
        border-radius:3px;
        box-sizing: border-box;
    }
    #upwd{
        margin-top:10px;
    }
    #cpwd{
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
        cursor: pointer;
    }
</style>