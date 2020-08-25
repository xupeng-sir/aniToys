<template>
    <section>
        <myheader></myheader>
        <div class="confirm">
            <div class="all">
                <div class="top">
                    <h1>确认订单</h1>
                    <a href="javascript:;">返回修改购物车</a>
                </div>
                <div class="info">
                    <div class="infoh4">
                        <h4>收货信息</h4>
                    </div>
                    <div class="input">
                        <input autocomplete="off" :data-uname="uname" v-model="uname" type="text" id="uname" placeholder="请输入收货地址">
                        <input autocomplete="off" :data-uname="name" v-model="name" type="text" id="uname" placeholder="收货人姓名">
                        <input autocomplete="off" :data-uname="phone" v-model="phone" type="text" id="uname" placeholder="收货人电话">
                    </div>
                    <div class="queren">
                        <h4>确认商品清单</h4>
                    </div>
                    <div class="querenbox">
                        <div class="peisong">
                            <h5>配送类型</h5>
                            <h6>⊙普通快递包邮</h6>
                        </div>
                        <div class="boxinfo">
                            <div class="container" v-for="(item,i) of list" :key="i">
                                <div class="tinyImg">
                                    <img src=''>
                                </div>
                                <div class="title">
                                    <h4>{{item.title}}</h4>
                                    <div>
                                        <span>种类:现货</span>
                                    </div>
                                </div>
                                <div class="price">
                                    ¥价格
                                </div>
                                <div class="btn">
                                    <span>数量</span>
                                </div>
                            </div>
                            <div class="total">
                                <b>合计:¥总价</b>
                            </div>
                        </div>
                    </div>
                    <div class="tijiao">
                        <button>提交订单</button>
                    </div>
                </div>
            </div>
        </div>
        <myfooter></myfooter>
    </section>
</template>
<script>
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
export default {
    components:{
        "myheader":MyHeader,
        "myfooter":MyFooter,
    },
    data(){
        return {
            list:[],
            uname:"",
            name:"",
            phone:"",
        }
    },
    methods:{
        toConfirm(){
            var lid = this.$route.params.lid;
            console.log("确认页:"+lid);
            var url = "lookconfirm";
            var obj = {lid:lid};
            this.axios.get(url,{params:obj}).then(res=>{
                var rows = res.data.data;
                this.list = rows;
            })
        }
    },
    created(){
        this.toConfirm();
    }
}
</script>
<style scoped>
    .confirm{
        background-color: rgb(246, 244, 244);
        height: 700px;
    }
    .all{
        width:1180px;
        margin:0 auto;
    }
    .top{
        height:60px;
        position: relative;
        line-height: 60px;
    }
    .top h1{
        margin: 0;
        position: absolute;
        font-size:16px;
    }
    .top a{
        text-decoration:none;
        position: absolute;
        font-size:12px;
        color:#000;
        left:92%;
    }
    .info{
        background-color: #fff;
        height: 700px;
    }
    .infoh4{
        width: 1120px;height:40px;
        margin: 0 auto;
        line-height: 40px;
        font-size:14px;
    }
    .input{
        width: 1120px;height:50px;
        margin: 0 auto;
        line-height: 40px;
    }
    .infoh4{
        border-bottom: 1px solid #ccc;
    }
    .infoh4 h4{
        margin: 0;
    }
    .info input{
        text-align: center;
    }
    .info .input input:nth-child(1){
        width: 350px;
    }
    .info .input input:nth-child(2){
        width:150px;
        margin-left:20px;
    }
    .info input:nth-child(3){
        margin-left:20px;
    }
    .queren{
        width: 1120px;height:40px;
        margin: 0 auto;
        line-height: 40px;
        font-size:14px;
    }
    .querenbox{
        width: 1120px;height:315px;
        margin: 0 auto;
        background-color: rgb(246, 244, 244);
        position: relative;
    }
    .peisong{
        position: absolute;
        width: 220px;height: 110px;
    }
    .peisong h5{
        margin: 80px 0 0 30px;
    }
    .peisong h6{
        margin: 30px 0 0 30px;
    }
    .boxinfo{
        position: absolute;
        left:19.5%;
        background-color: #FDF5E7;
        height: 315px;
    }
    .container{
        width: 900px;height:90px;
        position: relative;
    }
    .tinyImg img{
        position: absolute;
        width: 70px;height:70px;
        top:90%;left:3%;
    }
    .title{
        position: absolute;
        width:400px;height:40px;
        top:100%;
        left:18%;
    }
    .title h4{
        margin: 0;
    }
    .btn{
        position: absolute;
        top:100%;
        left:80%;
    }
    .price{
        position: absolute;
        top:100%;
        left:60%;
    }
    .total{
        padding-top:160px;
        padding-left:700px;
        color:#FF7B39;
    }
    .tijiao{
        width:1120px;height:140px;
        background-color: rgb(246, 244, 244);
        margin: 20px auto;
        position: relative;
    }
    .tijiao button{
        position: absolute;
        width: 170px;height:46px;
        border: none;
        background-color: #FF7B39;
        color:#fff;
        font-weight: bold;
        border-radius:3px;
        top:49%;
        left:80%;
    }
</style>