<template>
    <header id="header">
        <div id="d-top">
            <nav id="anilogo">
                <a href="javascript:;" @click="toIndex()"><img src="../img/header/anitoys.png" alt=""></a>
                <a href="javascript:;">旧版补款入口</a>
                <a href="javascript:;">优惠券</a>
            </nav>
            <div id="top-box" style="position:relative">
                <a @click="toCart()" href="javascript:;"><img src="../img/header/shopcart.png" alt="">购物车</a>
                <a href="javascript:;" @click="order">我的订单</a>
                <a href="javascript:;">我的aniToys</a>
                <a href="javascript:;"><img src="../img/header/kefu.png" alt="">联系客服</a>
                <a href="javascript:;">站内信</a>
                <a href="javascript:;" style="position:absolute;top:20%;">
                    <ul style="list-style:none;padding-left:0;">
                        <li>关注我们
                            <ul style="list-style:none;">
                                <li>
                                    <img class="vx" src="../img/vx.jpg">
                                </li>
                            </ul>
                        </li>
                    </ul>
                </a>
                <a href="javascript:;" style="margin-left:60px;"><img src="../img/header/phone.png">手机版</a>
                <span v-if="isLogin==true">
                    <a href="javascript:;" @click="login">登录</a>
                    <a href="javascript:;" @click="reg">注册</a>
                </span>
                <span v-else><a href="javascript:;" @click="loginout">退出</a></span>
            </div>
        </div>
        <div id="search">
            <div id="searchword">
                <input type="text" placeholder="搜索关键字"><button></button>
            </div>
        </div>
        <div class="topbar">
            <div class="barcontent">
                <ul @click="toProduct">
                    <li><img src="../img/topbar/topbar1.png" alt=""><p>新品预售</p></li>
                    <li><img src="../img/topbar/topbar2.png" alt=""><p>现货</p></li>
                    <li><img src="../img/topbar/topbar3.png" alt=""><p>手办</p>
                        <ul>
                            <li>粘土人</li>
                            <li>可动小比例</li>
                            <li>等比例手办</li>
                            <li>盒蛋/扭蛋/食玩</li>
                            <li>景品</li>
                        </ul>
                    </li>
                    <li><img src="../img/topbar/topbar4.png" alt=""><p>模型/玩具</p>
                        <ul>
                            <li>普通模型</li>
                            <li>拼装模型</li>
                            <li>软胶模型</li>
                            <li>汽车模型</li>
                            <li>模型配件</li>
                            <li>玩具</li>
                        </ul>
                    </li>
                    <li><img src="../img/topbar/topbar5.png" alt=""><p>软周边</p>
                        <ul>
                            <li>徽章</li>
                            <li>挂件</li>
                            <li>玩偶</li>
                            <li>钥匙圈</li>
                            <li>鼠标垫/桌垫</li>
                            <li>海报/挂画</li>
                            <li>手机配件</li>
                        </ul>
                    </li>
                    <li><img src="../img/topbar/topbar6.png" alt=""><p>文具办公</p>
                        <ul>
                            <li>书签</li>
                            <li>胶带</li>
                            <li>贴纸</li>
                            <li>笔记本</li>
                            <li>文件夹</li>
                            <li>明信片</li>
                            <li>书写工具</li>
                        </ul>
                    </li>
                    <li><img src="../img/topbar/topbar7.png" alt=""><p>日用家居</p>
                        <ul id="cartshop">
                            <li>围巾/毛巾</li>
                            <li>镜子</li>
                            <li>抱枕靠垫</li>
                            <li>床单毛毯</li>
                            <li>餐饮器具</li>
                            <li>整理收纳</li>
                        </ul>
                    </li>
                    <li><img src="../img/topbar/topbar8.png" alt=""><p>箱包服饰</p>
                        <ul>
                            <li>服装</li>
                            <li>零钱包</li>
                            <li>手提包</li>
                            <li>双肩包</li>
                            <li>旅行箱</li>
                        </ul>
                    </li>
                    <li><img src="../img/topbar/topbar9.png" alt=""><p>演出票务</p>
                        <ul>
                            <li>演唱会</li>
                            <li>见面会</li>
                            <li>展览会</li>
                        </ul>
                    </li>
                    <li><img src="../img/topbar/topbar10.png" alt=""><p>演出周边</p>
                        <ul>
                            <li>荧光棒</li>
                            <li>服装</li>
                            <li>徽章/挂件/钥匙圈</li>
                            <li>写真</li>
                            <li>手帕/毛巾</li>
                            <li>零钱包/手提包</li>
                            <li>其它周边</li>
                        </ul>
                    </li>
                    <li><img src="../img/topbar/topbar11.png" alt=""><p>其他</p>
                        <ul>
                            <li>售后补件</li>
                            <li>费用</li>
                        </ul>
                    </li>
                    <li><img src="../img/topbar/topbar12.png" alt=""><p>热门品牌</p>
                        <ul>
                            <li>Good Smile</li>
                            <li>Max Factory</li>
                            <li>Orange Rouge</li>
                            <li>Actoys</li>
                            <li>Hobbymax</li>
                            <li>MegaHouse</li>
                            <li>Myethos</li>
                            <li>Square-Enix</li>
                            <li>Union-Creative</li>
                            <li>三枪</li>
                        </ul>
                    </li>
                </ul>
            </div> 
        </div>
    </header>
</template>
<script>
// import Index from "./Index.vue"
// import store from '../../../assets/apis/store'
export default {
    data(){
        return {
            isLogin:false,
        }
    },
    methods:{
        toProduct(){
            this.$router.push("/Product");
        },
        order(){
            this.$router.push("/Order");
        },
        login(){
            this.$router.push("/Login");
            this.isLogin=true;
        },
        loginout(){
            var url="loginout";
            this.axios.get(url).then(res=>{
                if(res.data.code==1){
                    // console.log(res.data.code);
                    alert("已退出登录");
                    this.isLogin=true;
                }
            })
        },
        reg(){
            this.$router.push("/Reg");
        },
        toIndex(){
            this.$router.push("/Index");
        },
        toCart(){
            this.$router.push("/Cart");
        },
    },
}
</script>
<style scoped>
    #top-box a:nth-child(6) ul li:hover ul li img{
        visibility: visible;width:120px;
        z-index: 999;
    }
    .vx{
        visibility: hidden;
    }
    #header{
        width:100%;
        background-color:#fff;
    }
    #d-top{
        width:1180px;height: 46px;
        margin:0 auto;
        position: relative;
    }
    #anilogo{
        float: left;
        position: absolute;
        left:35px;
        line-height: 46px;
    }
    #anilogo img{
        width:100px;height:30px;
        margin-top:8px;
        margin-right:7px;
        margin-left:-30px;
    }
    #anilogo a{
        font-size:12px;
        display: block;
        float: left;
        text-decoration: none;
        color:#000;
        left:20px;
        margin-right:20px;
    }
    #anilogo a:hover{
        color:#F38317;
    }
    #top-box{
        position: absolute;
        left:585px;
    }
    #top-box img{
        width:14px;
        margin-right:4px;
        margin-top:15px;
    }
    #top-box a{
        text-decoration:none;
        font-size:12px;
        color:#000;
        margin-right:15px;
    }
    #top-box a:hover{
        color:#F38317;
    }
    /******************** */
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

    .topbar{
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
    }
</style>