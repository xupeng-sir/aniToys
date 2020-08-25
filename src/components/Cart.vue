<template>
    <section>
        <myheader></myheader>
        <div class="cart">
            <div class="cartbox" :style="{height:innerHeight+'px'}">
                <h1>我的购物车</h1>
                <div class="cartinfo">
                    <span>
                        <input class="autologin" type="checkbox" id="auto" @change="selectAll" v-model="allcb">
                        <label for="auto">全选</label>
                    </span>
                    <span>商品信息</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>金额</span>
                    <span>操作</span>
                </div>
                <div v-for="(item,i) of list" :key="i">
                    <div class="container">
                        <div class="input">
                            <input class="caicai" style="width:20px;height:20px;" type="checkbox" v-model="item.cb" @change="changeItem" :data-lid="item.lid" :data-pic="item.pic" :data-title="item.title" :data-price="item.price" :data-count="item.count">
                        </div>
                        <div class="tinyImg">
                            <img :src="'http://www.xp521.xyz:4200'+item.pic">
                        </div>
                        <div class="title">
                            <h4>{{item.title}}</h4>
                            <div>
                                <span>现货</span>
                            </div>
                        </div>
                        <div class="size">
                            <span>规格: 现货</span>
                        </div>
                        <div class="price">
                            ¥{{item.price}}
                        </div>
                        <div class="btn">
                            <button @click="btn1" class="btn1" value="-" :data-lid="item.lid">-</button>
                            <span>{{item.count}}</span>
                            <button @click="btn2" class="btn2" value="+" :data-lid="item.lid">+</button>
                        </div>
                        <div class="total">
                            <b>合计:¥{{item.price*item.count}}</b>
                        </div>
                        <div class="delete">
                            <button @click="del" :data-lid="item.lid">删除</button>
                        </div>
                    </div>
                </div>
                <div class="boxbottom">
                    <div class="bottominput">
                        <input class="autologin" type="checkbox" id="auto" @change="selectAll" v-model="allcb">
                        <label for="auto">全选</label>
                    </div>
                    <div class="delAll">
                        <span @click="delItem">删除选中商品</span>
                    </div>
                    <div class="clear">
                        <span @click="clear">清空购物车</span>
                    </div>
                    <div class="allTotal">
                        <span>总计(不含运费):</span>
                        <span>{{total}}元</span>
                    </div>
                    <div class="balance">
                        <button @click="balance">去结算</button>
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
    computed:{
        total(){
            var sum = 0;
            for(var item of this.list){
                sum+=item.price*item.count;
            }
            return sum;
        }
    },
    data(){
        return {
            list:[],
            num:"1",
            innerHeight:800,
            allcb:false,
        }
    },
    created(){
        this.loadMore();
    },
    methods:{
        balance(){
            var span=event.target.parentNode.children[0];
            var n=span.innerHTML;
            if(n=="去结算"){
                if(confirm("确认支付")){
                    var str = "";
                    for(var item of this.list){
                        if(item.cb){
                            str+=item.lid+",";
                        }
                    }
                    if(str.length==0){
                        alert("请选择要支付的商品");
                        return;
                    }
                    str = str.substring(0,str.length-1);
                    console.log(str);
                    var url = "delm";
                    var obj = {lids:str};
                    this.axios.get(url,{params:obj}).then(res=>{
                        if(res.data.code==-2){
                            alert("请登录");
                        }else if(res.data.code==-1){
                            alert("购买失败");
                        }else{
                            alert("购买成功");
                            this.loadMore();
                        }
                    })
                }
            }
        },
        //清空购物车
        clear(){
            var span=event.target.parentNode.children[0];
            var n=span.innerHTML;
            if(n=="清空购物车"){
                if(confirm("是否清空购物车")){
                    var str = "";
                    for(var item of this.list){
                        if(item.cb){
                            str+=item.lid+",";
                        }
                    }
                    if(str.length==0){
                        alert("购物车为空");
                        return;
                    }
                    str = str.substring(0,str.length-1);
                    // console.log(str);
                    var url = "delall";
                    var obj = {lids:str};
                    this.axios.get(url,{params:obj}).then(res=>{
                        if(res.data.code==-2){
                            alert("请登录");
                        }else if(res.data.code==-1){
                            alert("结算失败");
                        }else{
                            alert("已结算");
                            this.loadMore();
                        }
                    })
                }
            }
        },
        //删除选中商品
        delItem(){
            var span=event.target.parentNode.children[0];
            var n=span.innerHTML;
            if(n=="删除选中商品"){
                if(confirm("是否删除当前选中商品")){
                    var str = "";
                    for(var item of this.list){
                        if(item.cb){
                            str+=item.lid+",";
                        }
                    }
                    if(str.length==0){
                        alert("请选择要删除的商品");
                        return;
                    }
                    str = str.substring(0,str.length-1);
                    console.log(str);
                    var url = "delm";
                    var obj = {lids:str};
                    this.axios.get(url,{params:obj}).then(res=>{
                        if(res.data.code==-2){
                            alert("请登录");
                        }else if(res.data.code==-1){
                            alert("删除失败");
                        }else{
                            alert("删除成功");
                            this.loadMore();
                        }
                    })
                }
            }
        },
        changeItem(){
            var sum=0;
            for(var item of this.list){
                if(item.cb){
                    sum++;
                }
            }
            if(sum==this.list.length){
                this.allcb=true;
            }else{
                this.allcb=false;
            }
        },
        //全选
        selectAll(e){
            var cb = e.target.checked;
            // console.log(cb);
            for(var item of this.list){
                item.cb = cb;
            }
        },
        //删除单个
        del(e){
            var btn=event.target.parentNode.children[0];
            var n=btn.innerHTML;
            if(n=="删除"){
                if(confirm("是否删除当前商品")){
                    var lid = e.target.dataset.lid;
                    var url = "del";
                    var obj = {lid:lid};
                    this.axios.get(url,{params:obj}).then(res=>{
                        //如果服务器返回成功 成功条件code>0
                        if(res.data.code > 0){
                            alert("删除成功");
                            this.loadMore();       //加载最新列表
                            }    
                        }
                    )
                }
            }
        },
        btn1(event){
            var span=event.target.parentNode.children[1];
            var n=parseInt(span.innerHTML);
            if(n>1){
                var lid = event.target.dataset.lid;
                var url = "reducecart";
                var obj = {lid};
                this.axios.get(url,{params:obj}).then(res=>{
                    this.loadMore();
                })
            }
        },
        btn2(event){
            var lid = event.target.dataset.lid;
            var url = "addcart";
            var obj = {lid};
            this.axios.get(url,{params:obj}).then(res=>{
                this.loadMore();
            })
        },
        loadMore(){
            var url = "findcart";
            this.axios.get(url).then(res=>{
                var rows = res.data.data;
                this.list = rows;

            })
        }
    },
}
</script>
<style scoped>
    /*删除商品，商品总数*/
    .boxbottom{
        height:66px;
        background-color:#fff;
        position:relative;
    }
    .bottominput{
        position:absolute;
        top:15%;
        left:0.1%;
    }
    .bottominput label{
        cursor: pointer;
    }
    .delAll{
        position:absolute;
        left:14%;
        top:30%;
        cursor: pointer;
    }
    .delAll:hover{
        color: #FF7B39;
    }
    .clear{
        position:absolute;
        left:25%;
        top:30%;
        cursor: pointer;
    }
    .clear:hover{
        color: #FF7B39;
    }
    .allTotal{
        position:absolute;
        left:62%;
        top:30%;
    }
    .allTotal span:first-child{
        margin-right: 40px;
    }
    .allTotal span:last-child{
        color:#f00;
        font-size: 22px;
    }
    .balance{
        position: absolute;
        left:84%;
        top:15%;
    }
    .balance button{
        width:170px;height: 46px;
        outline: none;
        border: none;
        background-color:#FF7B39;
        color:#fff;
        font-size:18px;
        font-weight: bold;
        border-radius:3px;
        cursor: pointer;
    }
    /*商品信息*/
    .cart{
        width:100%;
        background-color:#F5F5F5;
    }
    .cartbox{
        width:1180px;height:448px;
        margin:0 auto;
    }
    .cartbox h1{
        height:60px;
        font-size: 16px;
        line-height: 60px;
        padding-top: 20px;
    }
    .cartinfo{
        width:1180px;height:42px;
        background-color: #fff;
        line-height: 42px;
        font-size: 14px;
    }
    .autologin{
        width:19px;height:19px;
        margin:10px 12px 0 10px;

    }
    .cartinfo span:nth-child(1){
        display: inline-block;
        width: 160px;
    }
    .cartinfo span:nth-child(1) label{
        cursor: pointer;
    }
    .cartinfo span:nth-child(2){
        display: inline-block;
        width: 476px;
        text-align:center;
    }
    .cartinfo span:nth-child(3){
        display: inline-block;
        width: 110px;
    }
    .cartinfo span:nth-child(4){
        display: inline-block;
        width: 162px;
    }
    .cartinfo span:nth-child(5){
        display: inline-block;
        width: 110px;
    }
    /*购物车图表*/
    .container{
        height:125px;
        background:#fff;
        margin:15px 0 15px 0;
        padding-top:25px;
        position:relative;
    }
    .input{
        display: inline-block;
        position:relative;
        margin-left:10px;
        margin-right:30px;
    }
    .input input{
        padding-bottom:50px;
        position: absolute;
        top:-60px;
        /* background:none; */
    }
    .tinyImg{
        width:100px;height:100px;
        display: inline-block;
        margin-right:25px;
    }
    .tinyImg img{
        width:100px;height:100px;
        border:1px solid #ccc;
    }
    .title{
        width:256px;height:50px;
        display: inline-block;
        position: absolute;
        top:15%;
    }
    .title h4{
        width:226px;height:80px;
        font-size:14px;
        margin:0;
    }
    .title h4:hover{
        color:#FF7B39;
    }
    .title div{
        width:46px;height:18px;
        background:#4bccad;
        font-size:12px;
        color:#fff;
        text-align:center;
        border-radius:3px;
        padding-top:3px;
    }
    .size{
        display:inline-block;
        width:210px;height:39px;
        font-size:14px;
        color:#aaa;
        position: absolute;
        left:40%;
        top:46%;
    }
    .price{
        position: absolute;
        display: inline-block;
        left:53%;
        top:46%;
        font-size:14px;
        color:#FF7B39;
        font-weight: bold;
    }
    .btn{
        position:absolute;
        display:inline-block;
        left:61%;
        top:36%;
        text-align: center;
    }
    .btn span{
        display: inline-block;
        width:30px;height:24px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        position: absolute;
        top:27%;
        line-height: 24px;
    }
    .btn input{
        width:50px;height:22px;
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
        border-left:0;
        border-right:0;
        text-align:center;
        outline-style:none;
    }
    .btn1{
        width:25px;height:26px;
        background-color: #fff;
        border-top:1px solid #ccc;
        border-left:1px solid #ccc;
        border-bottom:1px solid #ccc;
        border-right:0;
        margin-top:10px;
        outline-style:none;
    }
    .btn2{
        width:25px;height:26px;
        background-color: #fff;
        border-top:1px solid #ccc;
        border-right:1px solid #ccc;
        border-bottom:1px solid #ccc;
        border-left:0;
        margin-top:10px;
        outline-style:none;
        margin-left:30px;
    }
    .total{
        position: absolute;
        display: inline-block;
        left:75.5%;
        top:46%; 
        font-size:14px;
        font-weight: bold;
        color:#FF7B39;
    }
    .delete{
        position:absolute;
        display: inline-block;
        left:86%;
        top:44%;
        font-size: 14px;
    }
    .delete button{
        background: #fff;
        outline:none;
        border:none;
        cursor:pointer;
    }
</style>