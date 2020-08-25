<template>
<section>
    <div id="alll">
        <!-- 轮播图层 -->
        <div id="bannerbox">
            <div id="bannerwidth">
                <div id="demo" class="carousel" :style="{width:610+'px'}" @mouseenter="stop" @mouseleave="start">
                    <!-- 1.轮播图片 -->
                    <div class="carousel-inner" :class="ulClass" :style="ulStyle">
                        <div @click="toProduct" v-for="(img,i) of imgs" :key="i" class="carousel-item" :style="{width:610+'px'}">
                            <router-link :to="img.to">
                                <img :src="img.src" :style="{width:610+'px'}">
                            </router-link>
                            <router-link :to="img.to"></router-link>
                        </div>
                    </div>
                    <!-- 2.左右箭头 -->
                    <a href="javascript:;" @click="move(-1)" class="carousel-control-next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                    <a href="javascript:;" @click="move(1)" class="carousel-control-prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <!-- 3.轮播指示符 -->
                    <ul class="carousel-indicators">
                        <li v-for="(img,idx) of imgs" :key="idx" :class="idx==i?'active':''" @click="moveTo(idx)"></li>
                    </ul>
                </div>
                <div class="appdown">
                    <a href="javascript:;"><img src="../img/carousel/appclient.jpg" alt=""></a>
                </div>
                <div class="figma">
                    <a href="javascript:;"><img src="../img/carousel/rightb.jpg" alt=""></a>
                </div>
            </div>
        </div>
        <!-- 最新情报层 -->
        <div class="message">
            <div class="info">
                <h4>最新情报层</h4>
                <a href="javascript:;">aniToys 12月4日 补款汇总</a>
                <a href="javascript:;">aniToys 12月3日 补款汇总</a>
                <a href="javascript:;">aniToys 11月28日 补款汇总</a>
                <a href="javascript:;">aniToys 11月27日 补款汇总</a>
                <a href="javascript:;">查看更多</a>
            </div>
        </div>
        <!-- 优惠券 COUPONS层 -->
        <div class="coupons">
            <div class="couponsfloor">
                <div class="couponstitle">
                    <h2>优惠券</h2>
                    <p>COUPONS</p>
                    <a href="javascript:;">查看更多</a>
                </div>
                <div class="couponsbox" v-for="(item,i) of list" :key="i">
                    <div class="couponsswitch">
                        <a href="javascript:;" @click="toProduct" :title="item.title">
                            <img :src="'http://www.xp521.xyz:4200'+item.pic">
                            <h4>￥{{item.price}}</h4>
                            <h3>{{item.title}}</h3>
                            <p>{{item.storename}}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 1F 鬼灭之刃系列 -->
        <div class="f1">
            <div class="floor1">
                <div class="floor1title">
                    <h2>鬼灭之刃系列</h2>
                    <a href="javascript:;">查看更多</a>
                </div>
                <div class="floor1img" v-for="(gh,i) of ghost" :key="i">
                    <a href="javascript:;" @click="toProduct" :title="gh.title">
                        <img :src="'http://www.xp521.xyz:4200'+gh.pic">
                        <div class="floorprice" style="height:33px;">
                            <div class="titleh2">
                                <h2>{{gh.title}}</h2>
                            </div>
                            <div class="floorprice1" style="height:33px;">
                                <h2>{{gh.title}}</h2>
                                <b>￥:{{gh.price.toFixed(2)}}</b>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- Fate系列 -->
        <div class="f2">
            <div class="floor2">
                <div class="floor2title">
                    <h2>Fate系列</h2>
                        <a href="javascript:;">查看更多</a>
                    </div>
                <div class="floor2img" v-for="(ft,i) of fate" :key="i">
                    <a href="javascript:;" @click="toProduct" :title="ft.title">
                        <img :src="'http://www.xp521.xyz:4200'+ft.pic">
                        <div class="floor2price" style="height:33px;">
                            <div class="title2h2">
                                <h2>{{ft.title}}</h2>
                            </div>
                            <div class="floor2price2">
                                <h2>{{ft.title}}</h2>
                                <b>￥:{{ft.price.toFixed(2)}}</b>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- 景品 -->
        <div class="f3">
            <div class="floor3">
                <div class="floor3title">
                    <h2>景品</h2><a href="javascript:;">查看更多</a>
                </div>
                <div class="first3" v-for="(sg,i) of sega" :key="i">
                    <a href="javascript:;" @click="toProduct" :title="sg.title">
                        <img :src="'http://www.xp521.xyz:4200'+sg.pic">
                        <div class="floor3price">
                            <div class="title3h2">
                                <h2>{{sg.title}}</h2>
                            </div>
                            <div class="floor3price3">
                                <h2>{{sg.title}}</h2>
                                <b>￥:{{sg.price.toFixed(2)}}</b>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- LINK -->
        <div class="link">
            <div class="linkenter">
                <div class="linktitle"><h2>LINK</h2></div>
                <div class="linkdetails">
                    <div class="linkleft">
                        <a href="javascript:;"><img src="../img/LINK/lefttop.png"></a>
                        <a href="javascript:;"><img src="../img/LINK/leftbottom.png"></a>
                    </div>
                    <a href="javascript:;"><img class="linkimg2" src="../img/LINK/3.png"></a>
                    <a href="javascript:;" class="linkimg3">
                        <h3>WF2019夏</h3>
                        <p>Wonder Festival 2019 Summer</p>
                    </a>
                    <a href="javascript:;" class="linkimg4">
                        <h3>新作模型展示</h3>
                        <p>为玩家介绍WHL4U 30新作模型</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>
<script>
import MyHeader from "./MyHeader";
import MyFooter from "./MyHeader";
export default {
    components:{
        "myheader":MyHeader,
        "myfooter":MyFooter,
    },
    data(){
        return {
            //在初始时,设置默认宽度为当前窗口的宽度
            innerWidth:610,
            ulClass:{ hasTrans:true },
            i:0,
            i1:0,
            imgs:[
                {src:require("../img/carousel/carousel1.jpg"),
                to:"javascript:;"},
                {src:require("../img/carousel/carousel2.jpg"),
                to:"javascript:;"},
                {src:require("../img/carousel/carousel3.jpg"),
                to:"javascript:;"},
                {src:require("../img/carousel/carousel4.jpg"),
                to:"javascript:;"},
                {src:require("../img/carousel/carousel5.jpg"),
                to:"javascript:;"},
                {src:require("../img/carousel/carousel6.jpg"),
                to:"javascript:;"},
                {src:require("../img/carousel/carousel7.jpg"),
                to:"javascript:;"},
                {src:require("../img/carousel/carousel8.jpg"),
                to:"javascript:;"},
                {src:require("../img/carousel/carousel9.jpg"),
                to:"javascript:;"},
            ],
            canClick:true,
            timer:null,
            list:[],
        }
    },
    created(){
        window.addEventListener("resize",()=>{
            this.innerWidth=610;
        })
        this.start();
        this.coupons();
        this.ghost();
        this.fate();
        this.sega();
    },
    methods:{
        toProduct(){
            this.$router.push("/Product");
        },
        coupons(){
            var url = "coupons";
            this.axios.get(url).then(res=>{
                this.list = res.data.data;
            })
        },
        ghost(){
            var url = "ghost";
            this.axios.get(url).then(res =>{
                this.ghost = res.data.data;
            })
        },
        fate(){
            var url = "fate";
            this.axios.get(url).then(res=>{
                this.fate = res.data.data;
            })
        },
        sega(){
            var url = "sega";
            this.axios.get(url).then(res=>{
                this.sega = res.data.data;
            })
        },
        //轮播图
        stop(){
            clearInterval(this.timer);
        },
        start(){
            this.timer=setInterval(()=>{
                this.move(1);
            },3000)
        },
        move(i){
            if(this.canClick){
                this.canClick=false;
                if(i==-1&&this.i==0){
                    this.ulClass.hasTrans=false;
                    setTimeout(()=>{
                        this.i=this.imgs.length;
                        setTimeout(()=>{
                            this.ulClass.hasTrans=true;
                            this.i+=i;
                            setTimeout(()=>{
                                this.canClick=true;
                            },200)
                        },50)
                    },50)
                }else if(i==1&&this.i==this.imgs.length-1){
                    this.i+=i;
                    setTimeout(()=>{
                        this.ulClass.hasTrans=false;
                        setTimeout(()=>{
                            this.i=0;
                            setTimeout(()=>{
                                this.ulClass.hasTrans=true;
                                setTimeout(()=>{
                                    this.canClick=true;
                                })
                            },50)
                        },50)
                    },200)
                }else{
                    this.i+=i;
                    setTimeout(()=>{
                        this.canClick=true;
                    },300)
                }
            }
        },
        moveTo(i){
            if(this.canClick){
                this.i=i;
                this.canClick=false;
                setTimeout(()=>{
                    this.canClick=true;
                },300)
            }
        },
        //楼层图

    },
    computed:{
        ulStyle(){
            var width=this.innerWidth*(this.imgs.length+1)+"px";
            var marginLeft=-this.i*this.innerWidth+"px";
            return {width,marginLeft}
        }
    }
}
</script>
<style scoped>

    .first3 a{
        position: relative;
    }
    .floor3price3{
        position: absolute;
        width: 100%;
        opacity: 0;
        text-align: center;
        transition: all .8 linear;
        color:#fff;
        top:81%;
    }
    .floor3price3 b{
        display: inline-block;
        width: 100%;
        background-color: rgba(80, 76, 76, 0.5);
    }
    .floor3price:hover .floor3price3{
        opacity: 1;
    }
    .floor3price:hover .floor3price3 h2{
        background-color: rgba(80, 76, 76, 0.5);
    }
    .floor3price:hover .title3h2{
        opacity: 0;
    }
    /*******************Fate阴影******************************/
    .floor2img a{
        position: relative;
    }
    .floor2price2{
        position: absolute;
        width: 100%;
        opacity: 0;
        text-align: center;
        transition: all .8 linear;
        color:#fff;
        top:81%;
    }
    .floor2price2 b{
        display: inline-block;
        width: 100%;
        background-color: rgba(80, 76, 76, 0.5);
    }
    .floor2price:hover .floor2price2{
        opacity: 1;
    }
    .floor2price:hover .floor2price2 h2{
        background-color: rgba(80, 76, 76, 0.5);
    }
    .floor2price:hover .title2h2{
        opacity: 0;
    }
    /*******************鬼灭价格阴影******************************/
    .floor1img a{
        position: relative;
    }
    .floorprice1{
        position: absolute;
        width: 100%;
        opacity: 0;
        text-align: center;
        transition: all .8 linear;
        color:#fff;
        top:81%;
    }
    .floorprice1 b{
        display: inline-block;
        width: 100%;
        background-color: rgba(80, 76, 76, 0.5);
    }
    .floorprice:hover .floorprice1{
        opacity: 1;
    }
    .floorprice:hover .floorprice1 h2{
        background-color: rgba(80, 76, 76, 0.5);
    }
    .floorprice:hover .titleh2{
        opacity: 0;
    }
    /***********************************************/


    #bannerwidth1{
        height:263px;
        background: #fff;
    }
    #alll{
        background:#f5f5f5;
    }
    #search{
        background-image: url(../img/topimage/home-banner.jpg);
    }
    #search #searchword{
        width:1180px;height:180px;
        margin:0 auto;
        position: relative;
    }
    #search #searchword input{
        position: absolute;
        border-bottom-left-radius:5px;
        border-top-left-radius:5px;
        border:3px solid #F38317;
        left:725px;top:80px;
        width:380px;height:38px;
        padding-left:15px;
        outline:none;
    }
    #search #searchword button{
        width:46px;height:46px;
        border-bottom-right-radius:5px;
        border-top-right-radius:5px;
        border:3px solid #F38317;
        position: absolute;
        left:1124px;top:80px;
        background-image:url(../img/topbar/search.png);
        background-repeat:no-repeat;
        background-color:#F38317;
        background-size:25px;
        cursor: pointer;
        background-position:center;
        outline:none;
    }
    /****************导航*******************/
    /* .topbar{
        width:100%;
        background-color:#fff;
    }
    .topbar .barcontent{
        width:1180px;height:90px;
        margin:0 auto;
    }
    .topbar .barcontent ul li{
        float: left;
        list-style: none;
        text-align:center;
        position: relative;
        margin-right:20px;
        padding-left:8px;
        padding-right:16px;
        margin-top:20px;
        cursor: pointer;
    }
    .topbar .barcontent ul li p:hover{
        color:#FF7130;
    }
    .topbar .barcontent ul li ul{
        background-color:#fff;
        margin-left:-20px;
        cursor: pointer;
        position: absolute;
        left:0;
        visibility: hidden;
        transition: all .5 linear;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .topbar .barcontent ul li ul li{
        display: block;
        width:90px;
        text-align: left;
        font-size: 14px;
        padding-left:0px;
        padding-top:5px;
        margin-left:-25px;
    }
    .topbar .barcontent ul li ul li:last-child{
        padding-bottom:20px;
    }
    .topbar .barcontent ul li:hover ul{
        background-color:#fff;
        z-index: 999;
        visibility: visible;
    }
    .topbar .barcontent ul li ul li:hover{
        color:#FF7130;
    }
    .topbar .barcontent ul li img{
        width:25px;
    }
    .topbar .barcontent ul li p{
        margin-top:3px;
        font-size: 14px;
    } */
    /**轮播图层 */
    #main #switch{
        width:1200px;
        margin:0 auto;
    }
    #main #switch #banner ul{
        list-style: none;
        padding-left: 0;
    }
    #bannerbox{
        width:100%;
        background:#F5F5F5;
        margin-top:20px;
    }
    #bannerwidth{
        width:1200px;height:360px;
        margin:0 auto;
        position: relative;
    }
    /******右边图片******* */
    .appdown a{
        position:absolute;
        top:0%;
        left:54%;
    }
    .figma a{
        position:absolute;
        top:0%;
        left:76.5%;
    }
    .carousel{
        /* margin-top:60px; */
        overflow:hidden;
        position: relative;
    }
    .carousel-indicators{
        list-style: none;
        position: absolute;
        left:30%;
        top:85%;
    }
    .carousel-indicators li{
        width:10px;height:10px;
        background-color:#ccc;
        border-radius:50%;
        margin-left:6px;
        margin-right:6px;
        float: left;
        top:60px;
    }
    .carousel-indicators>li:hover, .carousel-indicators>li.active{
        background:green;
        transform:scale(1.3)
    }
     
    /*重写左右箭头的样式*/
    .carousel-control-next{
        width:35px;height:35px;
        background-image: url(../img/carousel/left.png);
        background-repeat: no-repeat;
        background-size:80%;
        top:45%;
        position: absolute;
        left:1%;
    }
    .carousel-control-prev{
        width:35px;height:35px;
        background-image: url(../img/carousel/right.png);
        background-repeat: no-repeat;
        background-size:80%;
        top:45%;
        position: absolute;
        left:94%;
    }
    .carousel-inner{
        height:340px;
        position:relative;
    }
    .carousel:after{
        content:"";
        display:block;
        clear:both;
    }
    .carousel>.carousel-inner.hasTrans{
        transition:all .2s linear;
    }
    .carousel>.carousel-inner>.carousel-item{
        display:block;
        float:left;
        position: relative;
    }
    /*********最新情报层************/
    .message{
        width:100%;
        margin-top:-30px;
        background:#F5F5F5;
    }
    .info{
        width:1160px;height:41px;
        margin:0 auto;
        background-color:#fff;
        padding-left:50px;
        line-height: 41px;
        margin-top:30px;
    }
    .info h4{
        font-size: 14px;
        color:#FF7130;
        float: left;
        margin-top:0;
    }
    .info a{
        float: left;
        font-size: 12px;
        margin-left:40px;
        text-decoration: none;
        color:#838487;
    }
    .info a:last-child{
        color:#FF7130;
        float:right;
        margin-right:25px;
    }
    .info a::before{
        content:"";
        height:14px;
        margin-top:15px;
        margin-right:35px;
        border-left:1px solid #EFEFEF;
    }
    .info a:hover{
        color:#FF7130;
    }
    /*********优惠券COUPONS层*************/
    .coupons{
        width:1180px;height:363px;
        margin:0 auto;
        background:#F5F5F5;
    }
    .couponsbox{
        margin:0 auto;
    }
    .couponstitle{
        position: relative;
        margin-left:-10px;
        padding-bottom:50px;
        margin-top:35px;
    }
    .couponstitle h2{
        position: absolute;
        margin-top:5px;
    }
    .couponstitle p{
        position: absolute;
        font-size:16px;
        margin-top:10px;
        color:#FF7130;
        left:7%;
    }
    .couponstitle a{
        text-decoration: none;
        font-size:14px;
        float:right;
        color:#FF7130;
        /* margin-right:20px; */
    }
    .couponsbox{
        height:0px;
        margin-left:-10px;
        background-color:#fff;
    }
    .couponsswitch{
        padding-top:21px;
        text-align: center;
    }
    .couponsbox a{
        width:188px;height:200px;
        background-color:#EFEEED;
        text-decoration:none;
        border-radius:7px;
        color:#000;
        padding-top:21px;
        position:relative;
        border-right: 2px solid #fff;
    }
    .couponsbox a{
        float: left;
    }
    .couponsbox a:nth-child(2n){
        background-color:#F6F6F6;
    }
    .couponsbox a::before{
        content:"";
        position:absolute;
        width:16px;height:16px;
        background-color:#fff;
        border-radius:50%;
        margin-top:140px;
        left:96%;
        z-index:999;
    }
    .couponsswitch a img{
        width:70px;
        border-radius:50%;
    }
    .couponsswitch a h4{
        font-size:35px;
        font-weight: bolder;
        color:#FF752F;
        margin:0;
    }
    .couponsswitch a h3{
        font-size:14px;
    }
    .couponsswitch a p{
        width:150px;
        font-size:14px;
        margin-top:15px;
        margin-left:20px;
        color:#838487;
    }
    /***************1f 鬼灭之刃*****************/
    .f1{
        width:100%;
        background-color:#fff;
    }
    .floor1{
        width:1190px;height:388px;
        margin:0 auto;
        position: relative;
    }
    .floor1title{
        padding-top:30px;
        padding-bottom:30px;
        
    }
    .floor1title h2{
        display:inline;
        padding-top:30px;
    }
    .floor1title a{
        display: inline;
        text-decoration:none;
        font-size:14px;
        color:#F46523;
    }
    .floor1title a{
        float: right;
    }
    .floor1img a{
        text-decoration:none;
        color:#000;
        float: left;
        margin-right:10px;
        border:1px solid #D9D9D9;
    }
    .floor1img a img{
        width:226px;height:226px;
        border-bottom:1px solid #D9D9D9;
    }
    .floor1img a h2{
        font-size:16px;
        text-align: center;
        margin:0;
        line-height: 33px;
    }
    


    /****************Fate系列*******************/
    .f2{
        width:100%;
        /* background-color:#fff; */
    }
    .floor2{
        width:1190px;height:1000px;
        margin:0 auto;
    }
    .floor2title{
        padding-top:30px;
        padding-bottom:30px;
    }
    .floor2title h2{
        display:inline;
        padding-top:30px;
    }
    .floor2title a{
        display: inline;
        text-decoration:none;
        font-size:14px;
        color:#F46523;
    }
    .floor2title a{
        float: right;
    }
    .floor2img a{
        text-decoration:none;
        color:#000;
        float: left;
        margin-right:10px;
        border:1px solid #D9D9D9;
        margin-bottom:10px;
    }
    .floor2img a img{
        width:226px;height:226px;
        border-bottom:1px solid #D9D9D9;
    }
    .floor2img a h2{
        /* height:35px; */
        font-size:16px;
        text-align: center;
        margin:0;
        line-height: 33px;
    }

    /***************景品*******************/
    .f3{
        width:100%;
        background-color:#fff;
    }
    .floor3{
        width:1190px;height:1000px;
        margin:0 auto;
    }
    .floor3title{
        padding-top:30px;
        padding-bottom:30px;
    }
    .floor3title h2{
        display:inline;
        padding-top:30px;
    }
    .floor3title a{
        display: inline;
        text-decoration:none;
        font-size:14px;
        color:#F46523;
    }
    .floor3title a{
        float: right;
    }
    .first3 a{
        text-decoration:none;
        color:#000;
        float: left;
        margin-right:10px;
        border:1px solid #D9D9D9;
        margin-bottom:10px;
    }
    .first3 a img{
        width:226px;height:226px;
        border-bottom:1px solid #D9D9D9;
    }
    .first3 a h2{
        height:35px;
        font-size:16px;
        text-align: center;
        line-height: 35px;
        margin: 0;
    }

    /*********LINK************/
    .link{
        width:100%;
    }
    .link .linkenter{
        width:1180px;height:330px;
        margin:0 auto;
    }
    .linktitle{
        padding-top:30px;
        padding-bottom:30px;
    }
    .linkdetails{
        height:230px;
        position: relative;
    }
    .linkdetails .linkleft{
        width:430px;height:230px;
        margin-top:-20px;
        position: absolute;
    }
    .linkdetails .linkleft a img{
        width:430px;
        padding-top:5px;
    }
    .linkdetails a .linkimg2{
        width:240px;height:230px;
        margin-top:-15px;
        position: absolute;
        left:440px;
    }
    .linkimg3{
        display: block;
        width:240px;height:230px;
        background-image: url(../img/LINK/4.png);
        background-size:100%;
        margin-top:-15px;
        position:absolute;
        left:690px;
    }
    .linkimg3{
        text-decoration:none;
        text-align: right;
    }
    .linkimg3 h3{
        font-size:26px;
        color:#000;
        padding-top:50px;
        padding-right:20px;
    }
    .linkimg3 p{
        font-size:12px;
        color:#000;
        padding-top:10px;
        padding-right:20px;
    }
    .linkimg4{
        display: block;
        width:240px;height:230px;
        background-image: url(../img/LINK/5.png);
        background-size:100%;
        margin-top:-15px;
        position:absolute;
        left:940px;
    }
    .linkimg4{
        text-decoration:none;
        text-align: right;
    }
    .linkimg4 h3{
        font-size:26px;
        color:#000;
        padding-top:50px;
        padding-right:20px;
    }
    .linkimg4 p{
        font-size:12px;
        color:#000;
        padding-top:10px;
        padding-right:20px;
    }
</style>