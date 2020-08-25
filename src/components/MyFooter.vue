<template>
    <footer id="footer">
        <div id="botimg">
            <div class="divimg">
                <div><a href="javascript:;"><img src="../img/botimg/bottomimg.png" alt=""></a></div>
            </div>
        </div>
        <div class="footerbottom">
            <div class="footerbox">
                <div class="left">
                    <h4>新手帮助</h4>
                    <a href="javascript:;">现货购买流程</a>
                    <a href="javascript:;">预售商品购买流程</a>
                    <a href="javascript:;">补款流程</a>
                    <a href="javascript:;">常见问题</a>
                </div>
                <div class="center">
                    <h4>积分优惠券</h4>
                    <a href="javascript:;">优惠券使用教程与规则</a>
                    <a href="javascript:;">积分规则</a>
                    <a href="javascript:;">关于预存款充值</a>
                </div>
                <div class="right">
                    <h4>关于我们</h4>
                    <a href="javascript:;">公司简介</a>
                    <a href="javascript:;">联系我们</a>
                    <a href="javascript:;">网站更新详情</a>
                    <a href="javascript:;">法律声明</a>
                    <a href="javascript:;">关于172酱与他的小伙伴</a>
                </div>
            </div>
        </div>
        <div class="below">
            <p>&copy;阿尼托 上海索罗游信息技术有限公司 anitoys.com 版权所有沪ICP备11047967号-18</p>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #footer{
        width:100%;
        background-color:#f5f5f5;
        padding-top:20px;
        margin-bottom:0;
    }
    /***底部图****/
    #botimg{
        width:100%;
    }
    .divimg{
        width:1180px;height:160px;
        margin:0 auto;

    }
    .divimg img{
        margin-top:6px;
        padding-top:20px;
    }
    /****左中右****/
    .footerbottom{
        background-color:#24262C;
    }
    .footerbox{
        width:1240px;height:262px;
        margin:0 auto;
        position: relative;
    }
    .left{
        width:96px;height:200px;
        margin-top:50px;
        color:#fff;
        float: left;
        position: absolute;
        left:3%;
    }
    .left a{
        text-decoration: none;
        display: block;
        margin-top:12px;
        font-size: 12px;
        color:#929396;
    }
    .center{
        width:120px;height:176px;
        margin-top:50px;
        color:#fff;
        float: left;
        position: absolute;
        left:44%;
    }
    .center a{
        text-decoration: none;
        display: block;
        margin-top:12px;
        font-size: 12px;
        color:#929396;
    }
    .right{
        width:128px;height:228px;
        margin-top:50px;
        color:#fff;
        float: left;
        position: absolute;
        left:88%;
    }
    .right a{
        text-decoration: none;
        display: block;
        margin-top:12px;
        font-size: 12px;
        color:#929396;
    }
    /********版权********/
    .below{
        height:40px;
        background-color:#16181D;
        text-align: center;
        line-height: 40px;
        padding-top:1px;
        font-size:12px;
        color:#5C5E61;
        padding-bottom:0;
        padding-bottom:12px;
    }
</style>