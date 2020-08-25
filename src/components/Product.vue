<template>
    <section>
        <myheader></myheader>
        <div class="product">
            <div class="allpro">
                <a href="javascript:;">全部商品</a>
            </div>
            <div class="navpro">
                <div class="navtop">
                    <b>类型:</b>
                    <a href="">全部</a>
                    <a href="">现货</a>
                    <a href="">预定</a>
                    <a href="">
                        <input type="checkbox" id="auto">
                        <label for="auto">仅显示预售中商品</label>
                    </a>
                </div>
                <div class="navmiddle">
                    <b>品牌:</b>
                    <a href="javascript:;">全部</a>
                    <a href="javascript:;">Good Smile Company</a>
                    <a href="javascript:;">Good Smile Racing</a>
                    <a href="javascript:;">Max Factory</a>
                    <a href="javascript:;">Orange Rouge</a>
                    <a href="javascript:;">GOOD SMILE ARTS上海</a>
                    <a href="javascript:;">HiME ENTERTAINMENT</a>
                    <a href="javascript:;">alphamax</a>
                    <a href="javascript:;">ANIPLEX</a>
                    <a href="javascript:;">AQUAMARINE</a>
                    <a href="javascript:;">Avex Picture</a>
                    <a href="javascript:;">ACTOYS</a>
                    <a href="javascript:;">amiami</a>
                    <a href="javascript:;">ALTER</a>
                    <a href="javascript:;">Aforce</a>
                    <a href="javascript:;">APEX</a>
                    <a href="javascript:;">BANPRESTO</a>
                    <a href="javascript:;">CAPCOM</a>
                    <a href="javascript:;">Di molto bene</a>
                    <a href="javascript:;">DRAGON Toy</a>
                    <a href="javascript:;">DIAMOND SELECT TOYSLLC</a>
                    <a href="javascript:;">FineΦClover</a>
                    <a href="javascript:;">FREEing</a>
                    <a href="javascript:;">FuRyu</a>
                    <a href="javascript:;">FLARE</a>
                    <a href="javascript:;">Hobby JAPAN</a>
                    <a href="javascript:;">Hobbymax</a>
                    <a href="javascript:;">HobbymaxJapan</a>
                    <a href="javascript:;">HOBBY STOCK</a>
                    <a href="javascript:;">KADOKAWA</a>
                    <a href="javascript:;">knead</a>
                    <a href="javascript:;">Medicos</a>
                    <a href="javascript:;">MegaHouse</a>
                    <a href="javascript:;">Myethos</a>
                    <a href="javascript:;">MEDICOM TOY</a>
                    <a href="javascript:;">ORCATOYS</a>
                    <a href="javascript:;">Phat!</a>
                    <a href="javascript:;">PLM</a>
                    <a href="javascript:;">Proovy</a>
                    <a href="javascript:;">QuesQ</a>
                    <a href="javascript:;">REVOLVE</a>
                    <a href="javascript:;">Square-Enix</a>
                    <a href="javascript:;">Sol International</a>
                    <a href="javascript:;">TOMY TEC</a>
                    <a href="javascript:;">TAITO</a>
                    <a href="javascript:;">Union-Creative</a>
                    <a href="javascript:;">VERTEX</a>
                    <a href="javascript:;">WING</a>
                    <a href="javascript:;">初霞文化</a>
                    <a href="javascript:;">千值练</a>
                    <a href="javascript:;">寿屋</a>
                    <a href="javascript:;">天岸创奇文化创意</a>
                    <a href="javascript:;">万代</a>
                    <a href="javascript:;">其它品牌</a>
                </div>
                <div class="navbottom">
                    <b>排序:</b>
                    <button class="btn1">默认</button>
                    <button class="btn2">人气商品</button>
                    <button class="btn3">价格</button>
                    <button class="btn4">最新商品</button>
                </div>
            </div>
            <div class="listlist">
                <div class="list" v-for="(item,i) of list" :key="i">
                    <a href="javascript:;">
                        <div class="listborder" @click="toDetail(item.lid)">
                            <div class="listimg">
                                <img @click="toDetail(item.lid)" :src="'http://www.xp521.xyz:4200'+item.pic">
                            </div>
                            <div class="desc">
                                <h3>{{item.title}}</h3>
                                <b>¥{{item.price}}</b>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="page">
                <!-- <ul>
                    <li>
                        <a class="prev" href="javascript:;" @click="prev()">上一页</a>
                    </li>
                    <li>
                        <a class="one" href="javascript:;">1</a>
                    </li>
                    <li>
                        <a class="two" href="javascript:;">2</a>
                    </li>
                    <li>
                        <a class="three" href="javascript:;">3</a>
                    </li>
                    <li>
                        <a class="next" href="javascript:;" @click="next()">下一页</a>
                    </li>
                </ul> -->
                <el-pagination @next-click="next" @prev-click="prev" background :page-sizes="[1,2,3]" layout="prev, pager, next" :total="30"></el-pagination>
            </div>
        </div>
        <myfooter></myfooter>
    </section>
</template>
<script>
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
// import {getProduct} from '../../../assets/apis/index.js'
export default {
    components:{
        "myheader":MyHeader,
        "myfooter":MyFooter,
    },
    data(){
        return {
            list:[],
            pno:0,
            // item:{href:""},
        }
    },
    methods:{
        toDetail(lid){
            this.$router.push(`/detail/${lid}`);
            console.log("传送kk"+lid);
        },
        next(){
            var url = "product";
            this.pno++;
            var obj = {pno:this.pno};
            this.axios.get(url,{params:obj}).then(res=>{
                var rows = res.data.data;
                this.list = rows;
                // console.log(this.list);
            })
        },
        prev(){
            var url = "product";
            this.pno--;
            var obj = {pno:this.pno};
            this.axios.get(url,{params:obj}).then(res=>{
                var rows = res.data.data;
                this.list = rows;
            })
        },
        load(){
            getDetailsByLid(this.lid).then(data=>{
                // console.log(data);
                this.title=data.title;
        })
    }
    },
    created(){
        this.next();
        // this.prev();
        // getProduct().then(data=>{
        //     console.log(data);
        //     this.item=data;
        // })
    },
    // watch:{
    //     lid(){
    //         this.next();
    //     }
    // }
}
</script>
<style scoped>
    .product{
        width:100%;
        background-color:#F5F5F5;
    }
    .allpro{
        width:1200px;height:54px;
        margin:0 auto;
        line-height: 54px;
    }
    .allpro a{
        text-decoration:none;
        color:#999999;
        font-size:12px;
        font-weight:bold;
    }
    .navpro{
        width:1200px;height:340px;
        margin:0 auto;
    }
    .navtop{
        width:1200px;height:49px;
        line-height: 49px;
        background-color:#fff;
        /* border:1px solid #F3F3F3; */
    }
    .navtop b{
        font-size:12px;
        color:#AAA;
        padding-left:15px;
        margin-right:40px;
    }
    .navtop a{
        text-decoration:none;
        font-size:14px;
        color:#000;
        margin-right:25px;
    }
    .navtop a:hover{
        color:#FF752F;
    }
    .navmiddle{
        width:1200px;height: 185px;
        background-color:#fff;
        font-size:14px;
        margin-top:10px;
        padding-top:20px;
    }
    .navmiddle b{
        font-size:14px;
        color:#AAA;
        padding-left:15px;
        margin-right:30px;
    }
    .navmiddle a{
        display: inline-block;
        height:34px;
        text-decoration:none;
        color:#000;
        padding:0 10px;
    }
    .navmiddle a:hover{
        color:#FF752F;
    }
    .navbottom{
        width:1200px;height:48px;
        background-color: #fff;
        margin-top:10px;
        position: relative;
    }
    .navbottom b{
        line-height: 48px;
        font-size:14px;
        color:#AAA;
        padding-left:15px;
        margin-right:30px;
    }
    button{
        height: 32px;
        margin-right:10px;
        border:0;
        border-radius: 4px;
        font-size: 14px;
        background: #F4F4F4;
        border:1px solid #DBDBDB;
        cursor: pointer;
    }
    button:hover{
        color:#FF752F;
    }
    .btn1{
        width:56px;
        background:#FF752F;
        color:#fff;
    }
    .btn2{
        width:84px;
    }
    .btn3{
        width:56px;
    }
    .btn4{
        width:84px;
    }
    /*************商品列表样式*************** */
    /*list  listimg  desc*/
    .listlist{
        width:1200px;height:2396px;
        margin:0 auto;
    }
    .listborder{
        margin: 0;
    }
    /* .listimg:hover{
        border-top:1px solid #FF752F;
        border-left:1px solid #FF752F;
        border-right:1px solid #FF752F;
    } */
    .list a{
        float: left;
    }
    .listimg{
        /* display: inline-block; */
        /* float: left; */
        width:280px;height:280px;
        margin-right:18px;
        background:#fff;
        border-bottom:1px solid #F2F2F2;
        text-align: center;
    }
    .listimg img{
        display: inline-block;
        width:260px;height:260px;
        padding-top:10px;
    }
    .desc{
        display: inline-block;
        width:280px;height:85px;
        background: #fff;
        margin-bottom:20px;
    }
    .desc h3{
        width:240px;height:40px;
        font-size:14px;
        font-weight: normal;
        color:#000;
        margin:0 0 9px;
        padding:10px 0 0 20px;
    }
    .desc b{
        width:240px;height:26px;
        font-size:14px;
        color:#FF752F;
        padding:0 0 0 20px;
    }
    /* 页码 */
    .page{
        width:1200px;height: 96px;
        margin:0 auto;
        text-align: center;
    }
    /* ul{
        display: flex;
        margin:0;
    }
    li{
        list-style: none;
        
        padding-top:30px;
    }
    li > a{
        display: inline-block;
        height:36px;
        text-decoration:none;
        border:1px solid #EEEEEE;
        color:#000;
        font-size:14px;
        background:#fff;
        line-height: 36px;
        text-align:center;
        margin-right:10px;
    }
    li a:hover{
        color:#FF752F;
    }
    .prev{
        width:60px;
        margin-left:450px;
    }
    .one{
        width:40px;
    }
    .two{
        width:40px;
    }
    .three{
        width:40px;
    }
    .next{
        width:60px;
    } */
</style>