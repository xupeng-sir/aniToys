<template>
    <section>
        <myheader></myheader>
        <div class="detail" v-for="(item,o) of list" :key="o">
            <div class="breadcrumb">
                <a href="javascript:;">首页 ></a>
                <a href="javascript:;">手办 ></a>
                <a href="javascript:;">{{item.title}}</a>
            </div>
            <div class="show">
                <div class="vertical">
                    <div class="prev" @click="moveTop">
                        <img src="../img/detail/prev.jpg" alt="">
                    </div>
                    <!-- 小图 -->
                    <div class="fewimg" @mouseover="change">
                        <li style="list-style:none;" class="leftimg" v-for="(pi,i) of pics" :key="i">
                            <img :style="{'margin-top':-times*100+'px'}" :src="'http://www.xp521.xyz:4200'+pi.pic" :data-i="i">
                        </li>
                    </div>
                    <div class="next" @click="moveBottom">
                        <img src="../img/detail/next.jpg">
                    </div>
                    <!-- 中图 -->
                    <div class="center">
                        <img style="height:748px;" :src="'http://www.xp521.xyz:4200'+pics[i].pic">
                    </div>
                    <!-- 小方块 -->
                    <div id="mask" class="position-absolute" :class="{'d-none':hide}" :style="mStyle"></div>
                    <div id="super-mask" @mouseover="toggle(false)" @mouseout="toggle(true)" @mousemove="move" class="position-absolute"></div>
                    <!-- 大图 -->
                    <!-- <div class="centerhidden position-absolute" :class="{'d-none':hide}" :style="{'background-image':`url(http://127.0.0.1:4000${pics[i].pic})`,'background-repeat':'no-repeat','background-position':`${-0.5*parseFloat(mStyle.left)}px ${-0.5*parseFloat(mStyle.top)}px`}">
                    </div> -->
                </div>
                <div class="rightdesc">
                    <h1>{{item.title}}</h1>
                    <p>{{item.subtitle}}</p>
                    <div class="goods">
                        <span>现货</span>
                    </div>
                    <div class="info">
                        <div class="status">
                            <p>状态</p>
                            <span>售卖中</span>
                        </div>
                        <div class="price">
                            <p>价格</p>
                            <span>{{item.price}}元</span>
                            <div class="line"></div>
                        </div>
                        <div class="size">
                            <p>规格</p>
                            <a href="javascript:;">预售</a>
                        </div>
                        <div class="num">
                            <p>数量</p>
                            <button @click="btn1()" class="btn1">-</button>
                            <input type="text" v-model="num">
                            <button @click="btn2()" class="btn2">+</button>
                        </div>
                    </div>
                    <div class="buya">
                        <a href="javascript:;" @click="addcart" :data-lid="item.lid" :data-pic="item.pic" :data-title="item.title" :data-price="item.price" :data-num="num">加入购物车</a>
                        <a href="javascript:;" @click="order()" :data-lid="item.lid" :data-pic="item.pic" :data-title="item.title" :data-price="item.price" :data-num="num">立即购买</a>
                    </div>
                    <div class="collect">
                        <a href="javascript:;">收藏</a>
                        <a href="javascript:;">咨询</a>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="store">
                    <div class="seller">
                        <b>卖家:</b>
                        <h4><a href="javascript:;">172Store</a></h4>
                    </div>
                    <div class="kefu">
                        <b>客服:</b>
                        <a href="javascript:;"></a>
                    </div>
                </div>
                <div class="search">
                    <h4>店内搜索</h4>
                    <form>
                        <input type="search" placeholder="关键字">
                        <button></button>
                    </form>
                </div>
                <div class="classify">
                    <h4>相关分类</h4>
                    <div class="medicos">
                        <h5>Medicos</h5>
                        <a href="javascript:;">超像可动</a>
                        <a href="javascript:;">超像Art Collection</a>
                        <a href="javascript:;">超像挂件</a>
                    </div>
                    <div class="megahouse">
                        <h5>MegaHouse</h5>
                        <a href="javascript:;">Actibuilder系列</a>
                        <a href="javascriot:;">CFC系列</a>
                        <a href="javascriot:;">CHARACTION系列</a>
                        <a href="javascriot:;">CRAB PUZZLE系列</a>
                        <a href="javascriot:;">DESKTOP ARMY系列</a>
                        <a href="javascriot:;">DESK TOP ASTOREA系列</a>
                        <a href="javascriot:;">GALS系列</a>
                        <a href="javascriot:;">G.E.M.系列</a>
                        <a href="javascriot:;">GGG系列</a>
                        <a href="javascriot:;">Lucrea系列</a>
                        <a href="javascriot:;">P.O.P系列</a>
                        <a href="javascriot:;">Q版系列</a>
                        <a href="javascriot:;">RAHD系列</a>
                        <a href="javascriot:;">Ultimate Article系列</a>
                        <a href="javascriot:;">Variable Action系列</a>
                        <a href="javascriot:;">茶友系列</a>
                        <a href="javascriot:;">其他系列</a>
                    </div>
                    <div class="square">
                    <h5>SQUARE-ENIX</h5>
                    <a href="javascript:;">BRING ARTS系列</a>
                    <a href="javascript:;">PLAY ARTS改系列</a>
                </div>
                <div>
                    <h5>三枪</h5>
                    <a href="javascript:;">斯坦·李</a>
                    <a href="javascript:;">兔斯基</a>
                    <a href="javascript:;">海贼王</a>
                    <a href="javascript:;">罗小黑</a>
                </div>
                <div>
                    <h5>热门品牌</h5>
                        <a href="javascript:;">172客户服务</a>
                        <a href="javascript:;">ACTOYS</a>
                        <a href="javascript:;">Aforce</a>
                        <a href="javascript:;">alphamax</a>
                        <a href="javascript:;">ALTER</a>
                        <a href="javascript:;">AMAKUNI</a>
                        <a href="javascript:;">amiami</a>
                        <a href="javascript:;">AOSHIMA</a>
                        <a href="javascript:;">APEX</a>
                        <a href="javascript:;">ARCADIA</a>
                        <a href="javascript:;">BANPRESTO</a>
                        <a href="javascript:;">Bell fine</a>
                        <a href="javascript:;">Bell House</a>
                        <a href="javascript:;">BROCCOLI</a>
                        <a href="javascript:;">CAPCOM</a>
                        <a href="javascript:;">Chara-ani</a>
                        <a href="javascript:;">COSPA</a>
                        <a href="javascript:;">DAIKI</a>
                        <a href="javascript:;">DIAMOND SELECT TOYS LLC</a>
                        <a href="javascript:;">Di molto bene</a>
                        <a href="javascript:;">DRAGON Toy</a>
                        <a href="javascript:;">EIKOH</a>
                        <a href="javascript:;">EVOLUTION TOYS</a>
                        <a href="javascript:;">FLAME TOYS</a>
                        <a href="javascript:;">FLARE</a>
                        <a href="javascript:;">FOTS JAPAN</a>
                        <a href="javascript:;">Funny Knights</a>
                        <a href="javascript:;">FuRyu</a>
                        <a href="javascript:;">GECCO</a>
                        <a href="javascript:;">GENCO</a>
                        <a href="javascript:;">GENCO&knead</a>
                        <a href="javascript:;">Gray Parka Service</a>
                        <a href="javascript:;">Hobby JAPAN</a>
                        <a href="javascript:;">hobby max</a>
                        <a href="javascript:;">HobbymaxJapan</a>
                        <a href="javascript:;">Kenelephant</a>
                        <a href="javascript:;">KNEAD</a>
                        <a href="javascript:;">Lechery</a>
                        <a href="javascript:;">Licorne</a>
                        <a href="javascript:;">MEDI COM TOY</a>
                        <a href="javascript:;">MEZCO TOYZ</a>
                        <a href="javascript:;">MiHoYo</a>
                        <a href="javascript:;">Myethos</a>
                        <a href="javascript:;">NewLine</a>
                        <a href="javascript:;">ORCATOYS</a>
                        <a href="javascript:;">Orchid Seed</a>
                        <a href="javascript:;">OUR TREASURE</a>
                        <a href="javascript:;">PLUM</a>
                        <a href="javascript:;">plusone</a>
                        <a href="javascript:;">Proovy</a>
                        <a href="javascript:;">PULCHRA</a>
                        <a href="javascript:;">Q-six</a>
                        <a href="javascript:;">QuesQ</a>
                        <a href="javascript:;">REVOLVE</a>
                        <a href="javascript:;">SEGA</a>
                        <a href="javascript:;">SK JAPAN</a>
                        <a href="javascript:;">Sol International</a>
                        <a href="javascript:;">STRONGER</a>
                        <a href="javascript:;">Surfers Paradise</a>
                        <a href="javascript:;">TAKARA TOMY ARTS</a>
                        <a href="javascript:;">TAITO</a>
                        <a href="javascript:;">TOKYO OTAKU MODE</a>
                        <a href="javascript:;">Union-Creative</a>
                        <a href="javascript:;">VERTEX</a>
                        <a href="javascript:;">wanderer</a>
                        <a href="javascript:;">WAVE</a>
                        <a href="javascript:;">宫川武</a>
                        <a href="javascript:;">寿屋</a>
                        <a href="javascript:;">千值练</a>
                        <a href="javascript:;">天岸创奇文化创意</a>
                        <a href="javascript:;">旭翼文化</a>
                        <a href="javascript:;">HIYA</a>
                        <a href="javascript:;">海豚文化</a>
                        <a href="javascript:;">万代南梦宫</a>
                        <a href="javascript:;">DC漫画</a>
                        <a href="javascript:;">Re-ment</a>
                        <a href="javascript:;">海洋堂</a>
                        <a href="javascript:;">万代</a>
                        <a href="javascript:;">Blitzway</a>
                    </div>
                    <div class="little">
                        <a href="javascript:;">
                            <div class="littledesc">
                                <img class="img1" :src="'http://www.xp521.xyz:4200'+pics[0].pic">
                                <h3>{{item.title}}</h3>
                                <b>¥{{item.price}}</b>
                            </div>
                        </a>
                    </div>
                    <div class="size2">
                        <h3>规格参数</h3>
                    </div>
                    <div class="specification">
                        <div>
                            <b>品牌:</b>
                            <span>{{item.brand}}</span>
                        </div>
                        <div>
                            <b>上架日期:</b>
                            <span>{{item.shelf_time}}</span>
                        </div>
                        <div>
                            <b>发售日期:</b>
                            <span>{{item.sold_time}}</span>
                        </div>
                        <div>
                            <b>角色名:</b>
                            <span>{{item.role_name}}</span>
                        </div>
                        <div>
                            <b>作品名:</b>
                            <span>{{item.works_name}}</span>
                        </div>
                        <div>
                            <b>原型制作:</b>
                            <span>{{item.make}}</span>
                        </div>
                        <div>
                            <b>制作协力:</b>
                            <span>{{item.make_group}}</span>
                        </div>
                        <div>
                            <b>彩色涂装:</b>
                            <span>{{item.color}}</span>
                        </div>
                        <div>
                            <b>商品说明:</b>
                            <span>{{item.explain}}</span>
                        </div>
                        <div>
                            <b>生产商:</b>
                            <span>{{item.producer}}</span>
                        </div>
                        <div>
                            <b>销售商:</b>
                            <span>{{item.dealer}}</span>
                        </div>
                        <div>
                            <b>版权:</b>
                            <span>{{item.copy}}</span>
                        </div>
                    </div>
                    <div class="particulars">
                        <h3>商品详情</h3>
                    </div>
                    <div class="detailImg">
                        <h2><span>商品详情:</span></h2>
                        <img class="img1" :src="'http://www.xp521.xyz:4200'+pics[0].pic">
                        <h2><span>物流与售后:</span></h2>
                        <img class="img2" src="../img/detail/describe.jpg">
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
// import {getDetailsByLid} from "../assets/apis/details.js"
export default {
    // props:["lid"],
    components:{
        "myheader":MyHeader,
        "myfooter":MyFooter,
    },
    data(){
        return {
            list:[],
            pics:[{pic:""}],
            times:0,//移动次数
            // mImg:"",
            i:0,
            hide:true,
            mStyle:{
              left:"106px",top:"0px"
            },
            num:"1",
        }
    },
    created(){
        this.toDetail();
        this.toDetailPic();
    },
    methods:{
        order(lid){
            this.$router.push(`/confirm/${lid}`);
            console.log("confirm"+event.target.dataset.lid)
        },
        addcart(event){
            var lid = event.target.dataset.lid;
            // console.log(lid);
            var pic = event.target.dataset.pic;
            var title = event.target.dataset.title;
            var price = event.target.dataset.price;
            var count = event.target.dataset.num;
            console.log(lid+"-"+pic+"-"+title+"-"+price+"-"+count);
            var url = "addcart";
            var obj = {lid,pic,title,price,count};
            this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code==-2){
                    this.$toast("请登录!");
                    this.$router.push("/Login");
                }else{
                    this.$toast("添加成功")
                }
            })
        },
        btn1(){
            if(this.num>1){
                this.num--;
            }
        },
        btn2(){
            this.num++;
        },
        move(e){
            var left=e.offsetX+20;
            var top=e.offsetY-80;
            if(left<110){left=110;}else if(left>572){left=572}
            if(top<0){ top=0;}else if(top>572){top=572}
            this.mStyle={
            left:left+"px",
            top:top+"px"
            }
        },
        change(e){
            if(e.target.nodeName=="IMG"){
                this.i=e.target.getAttribute("data-i");
                // console.log(this.i);
            }
        },
        toggle(hide){
            this.hide=hide;
        },
        moveTop(){
            this.times++;
            this.times>this.pics.length-1&&
            (this.times=this.pics.length-1)
        },
        moveBottom(){
            this.times--;
            this.times<0&&(this.times=0)
        },
        toDetail(){
            var lid = this.$route.params.lid;
            console.log("详情:"+lid);
            var url = "look";
            var obj = {lid:lid};
            this.axios.get(url,{params:obj}).then(res=>{
                var rows = res.data.data;
                this.list = rows;
                this.i=0;
            })
        },
        toDetailPic(){
            var lid = this.$route.params.lid;
            console.log("图片:"+lid);
            var url = "lookpic";
            var obj = {lid:lid};
            this.axios.get(url,{params:obj}).then(res=>{
                var rows2 = res.data.data;
                this.pics = rows2;
                this.i=0;
                // console.log(this.pics);
            })
        },
    },
}
</script>
<style scoped>
    .position-absolute{
        position: absolute !important;
        left:110px;
    }
    .detail{
        width:100%;
        background:#F5F5F5;
    }
    .breadcrumb{
        width:1180px;height:54px;
        margin:0 auto;
        line-height: 54px;
    }
    .breadcrumb a{
        text-decoration:none;
        font-size:12px;
        color:#000;
    }
    .breadcrumb a:first-child{
        font-weight: bold;
    }
    .breadcrumb a:last-child{
        color:#999999;
        cursor: default;
    }
    /*展示*/
    .show{
        width: 1180px;height:748px;
        margin:0 auto;
        position: relative;overflow: hidden;
    }
    .vertical{
        /* display: inline-block; */
        width:104px;
        text-align: center;
    }
    .hidden{
        overflow: hidden;
    }
    .prev{
        position: absolute;
        width:110px;height:30px;
        background:rgba(12, 12, 12, 0.2);
        z-index: 999;
        cursor: pointer;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
    }
    .prev:hover{
        background:rgba(12, 12, 12, 0.7);
        transition: all .2s linear;
    }
    .next:hover{
        background:rgba(12, 12, 12, 0.7);
        transition: all .2s linear;
    }
    .next{
        position: absolute;
        width:110px;height:30px;
        background:rgba(12, 12, 12, 0.2);
        z-index: 999;
        top:718px;
        cursor: pointer;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
    }
    .prev img{
        width:30px;
    }
    .next img{
        width:30px;
    }
    .leftimg{
        /* display: inline-block; */
        height:100px;
        margin-top:7px;
        cursor: pointer;
    }
    .leftimg img{
        width:90px;height:100px;
        position: absolute;
        left:0;
        margin-right:10px;
        padding-left:9px;
        padding-right:7px;
        background:#fff;
        transition: margin-top .2s linear;
    }
    .leftimg img:hover{
        border:2px solid #000;
    }
    .center{
        width:640px;height:748px;
        position: absolute;
        top:0;
        left:110px;
        text-align: center;
        background-color: #fff;
    }
    
    /*放大图样式*/
    .centerhidden{
        width:640px;height:748px;
        position: absolute;
        top:0;
        left:680px;
        /* opacity: 0; */
        z-index: 999;
        text-align: center;
        background-color: #fff;
        overflow: hidden;
    }
    .centerhidden img{
        width:640px;height:800px;
    }
    .leftimg:hover .centerhidden{
        opacity: 1;
    }
    /* 小方块 */
    #mask{
        width:176px; height:176px;
        background-color:#ffa;
        opacity:.5;
    }
    #super-mask{
        width:640px; height:748px;
        position: absolute;
        top:0;
        left:110px;
    }
    /*原图样式 */
    .center img{
        width:500px;height:550px !important;
        padding-top:125px;
    }
    /**放大图样式*/
    .centerhidden img{
        width:100%;height:100% !important;
        padding-top:125px;
    }
    .show ul{
        list-style: none;
        position: absolute;
        left:848px;
    }
    .rightdesc{
        width: 430px;height:748px;
        position: absolute;
        top:0;
        right:0px;
        background:#fff;
    }
    .rightdesc h1{
        width:370px;height:60px;
        font-size: 20px;
        margin:0;
        padding-top:15px;
        padding-left: 30px;
    }
    .rightdesc p{
        font-size:14px;
        color:#aaa;
        margin:0;
        padding-left: 30px;
    }
    .goods{
        display: inline-block;
        width:46px;height:20px;
        font-size: 12px;
        background:#4ACCAD;
        text-align: center;
        line-height: 20px;
        border-radius: 2px;
        color:#fff;
        margin-top:20px;
        margin-left: 30px;
    }
    .info p{
        display: inline-block;
        margin-right:45px;
        margin-bottom:30px;
    }
    .status{
        margin-top:30px;
    }
    .status span{
        font-size:12px;
    }
    .price span{
        font-size:16px;
        font-weight: bold;
        color:#999;
    }
    .line{
        width:370px;
        border-bottom:1px dashed #ccc;
        margin-left:30px;
    }
    .info .size{
        width:360px;
        margin-top:30px;
    }
    .size a{
        text-decoration:none;
        display: inline-block;
        width:40px;height:20px;
        color:#FF7B39;
        font-size:14px;
        font-weight: bold;
        border:2px solid #FF7B39;
        text-align:center;
        padding:5px;
        border-radius:3px;
    }
    .btn1{
        width:25px;height:26px;
        background-color: #fff;
        border-top:1px solid #ccc;
        border-left:1px solid #ccc;
        border-bottom:1px solid #ccc;
        border-right:0;
        margin-top:10px;
    }
    .btn2{
        width:25px;height:26px;
        background-color: #fff;
        border-top:1px solid #ccc;
        border-right:1px solid #ccc;
        border-bottom:1px solid #ccc;
        border-left:0;
        margin-top:10px;
    }
    .num input{
        width:50px;height:22px;
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
        border-left:0;
        border-right:0;
        text-align:center;
    }
    .buya a:first-child{
        text-decoration: none;
        display: inline-block;
        width:170px;height:46px;
        background:#FF7B39;
        text-align: center;
        line-height: 46px;
        font-weight: bold;
        color:#fff;
        border-radius: 3px;
        margin:20px 15px 0 0;
        margin-left: 30px;
    }
    .buya a:last-child{
        text-decoration: none;
        display: inline-block;
        width:170px;height:46px;
        background:#FFB249;
        text-align: center;
        line-height: 46px;
        font-weight: bold;
        color:#fff;
        border-radius: 3px;
    }
    .collect{
        width:370px;
        margin-top:190px;
        border-top:1px dashed #ccc;
        margin-left: 30px;
    }
    .collect a{
        display: inline-block;
        text-decoration: none;
        width:46px;height:58px;
        color:grey;
        font-size:14px;
        text-align: center;
        line-height: 120px;
        margin-right: 20px;
    }
    .collect a:first-child{
        background-image: url(../img/detail/collect.jpg);
        background-size:70%;
        background-repeat: no-repeat;
        background-position: 50%;
    }
    .collect a:last-child{
        background-image: url(../img/detail/zixun.jpg);
        background-size:70%;
        background-repeat: no-repeat;
        background-position: 50%;
    }
    /**商品描述，卖家**/
    .container{
        width:1180px;height:4200px;
        margin:30px auto 0;
        position: relative;
    }
    .store{
        width:210px;height:102px;
        background-color:#fff;
    }
    .seller{
        width:190px;height:40px;
        padding:10px 0 10px 10px;
    }
    .seller b{
        font-size:14px;
        color:#aaa;
    }
    .seller h4{
        width:140px;height:20px;
        margin: 0;
        float: right;
    }
    .seller h4 a{
        text-decoration:none;
        font-size:14px;
        color:#000;
    }
    .kefu{
        width:190px;height:42px;
        margin-right: 0;
    }
    .kefu b{
        font-size:14px;
        color:#aaa;
        padding-left:10px;
        padding-right:20px;
    }
    .kefu a{
        display: inline-block;
        text-decoration:none;
        width:55px;height:22px;
        background:#FFB249;
        background-image: url(../img/detail/qq.jpg);
        background-repeat: no-repeat;
        background-size:35%;
        background-position:20%;
        font-size:14px;
        color:#fff;
        border-radius:3px;
    }
    .kefu a::after{
        content:"QQ";
        padding-left:25px;
    }
    .search{
        width:210px;height:86px;
        background:#fff;
    }
    .search h4{
        width:190px;height:30px;
        margin:10px 0 0 0;
        padding:10px 0 0 10px;
    }
    .search form{
        position: relative;
    }
    .search input{
        width:190px;height:36px;
        margin-left:10px;
        padding-left:10px;
        border:0;
        background:#F0F2F3;
        border-radius: 5px;
        outline: none;
    }
    .search button{
        position: absolute;
        width:36px;height:36px;
        left:78%;
        background-image: url(../img/detail/search.jpg);
        background-repeat: no-repeat;
        background-size:45%;
        background-position: center;
        border:0;
        outline: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
    }
    .classify{
        width:210px;height:3230px;
        background:#fff;
        margin-top:10px;
    }
    .classify a{
        display: inline-block;
        width:190px;height:26px;
        text-decoration:none;
        font-size:14px;
        color:#aaa;
        padding-left:10px;
    }
    .classify a:hover{
        color:#FF7B39;
    }
    .classify h4{
        margin:0;
        padding: 10px 0 20px 10px;
    }
    .classify h5{
        margin:0;
        padding: 10px 0 15px 10px;
    }
    .medicos{
        margin-bottom:15px;
    }
    .little{
        width:210px;height:296px;
        background:#fff;
        margin-top:10px;
    }
    .littledesc img{
        width:180px;height:180px;
        padding:15px 5px;
    }
    .littledesc h3{
        margin:0;
        font-size:14px;
        color:#000;
        margin-bottom:5px;
        padding-left:5px;
    }
    .littledesc b{
        color:#FF7B39;
        padding-left:5px;
    }
    .size2{
        position: absolute;
        width:960px;height: 60px;
        top:0%;
        left:18.7%;
        background: #fff;
        margin-top:0;
        background-image: url(../img/detail/kuang.jpg);
        background-repeat: no-repeat;
        background-position: 3%;
    }
    .size2 h3{
        margin: 0;
        font-size: 16px;
        line-height: 60px;
        padding-left:60px;
    }
    .specification{
        position: absolute;
        width:930px;height:170px;
        top:1%;
        left:18.7%;
        background: #fff;
        padding-left:30px;
        padding-top:15px;
    }
    .specification div{
        display: inline-block;
        width:270px;height:40px;
    }
    .specification b{
        font-size:14px;
        font-weight: normal;
        color:#aaa;
    }
    .specification span{
        font-size:14px;
        padding-left:15px;
    }
    .particulars{
        position: absolute;
        width:960px;height: 60px;
        top:252px;
        left:18.7%;
        background: #fff;
        margin-top:0;
        background-image: url(../img/detail/kuang.jpg);
        background-repeat: no-repeat;
        background-position: 3%;
    }
    .particulars h3{
        margin: 0;
        font-size: 16px;
        line-height: 60px;
        padding-left:60px;
    }
    .detailImg{
        position: absolute;
        width:930px;height:3900px;
        left:18.7%;
        background: #fff;
        top:310px;
        padding-left: 30px;
    }
    .detailImg h2{
        font-size:21px;
        font-weight: normal;
        color:#FF7B39;
        margin:0;
        padding:10px 0 10px 0;
    }
    .detailImg .img1{
        width:700px;
    }
    .detailImg .img2{
        width:900px;
    }
</style>