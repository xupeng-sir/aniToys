<template>
    <div class="container">
        <div class="box">
            <table border="1px solid #09314A">
                <tr>
                    <td style="width:30px;">
                        <input type="checkbox">
                    </td>
                    <td>#</td>
                    <td style="width:300px;">邮箱地址</td>
                    <td style="width:300px;">手机号码</td>
                    <td style="width:300px;">联系人姓名</td>
                    <td style="width:300px;">单位名称</td>
                    <td style="width:300px;">备注信息</td>
                    <td style="width:250px;">操作</td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>1</td>
                    <td>351732544@qq.com</td>
                    <td>18980774731</td>
                    <td>张宇路</td>
                    <td></td>
                    <td></td>
                    <td>
                        <button>编辑</button>
                        <button>删除</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>2</td>
                    <td>869085262@qq.com</td>
                    <td>18757358802</td>
                    <td>钟</td>
                    <td></td>
                    <td></td>
                    <td>
                        <button>编辑</button>
                        <button>删除</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>3</td>
                    <td>79979599@qq.com</td>
                    <td>18981279656</td>
                    <td>td</td>
                    <td></td>
                    <td></td>
                    <td>
                        <button>编辑</button>
                        <button @click="del()">删除</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>4</td>
                    <td>416158460@qq.com</td>
                    <td>18011472186</td>
                    <td>yhy</td>
                    <td></td>
                    <td></td>
                    <td>
                        <button>编辑</button>
                        <button>删除</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>5</td>
                    <td>904389631</td>
                    <td>18608137191</td>
                    <td>贺翔宇</td>
                    <td></td>
                    <td></td>
                    <td>
                        <button>编辑</button>
                        <button>删除</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        del(){
            var table=document.querySelector(".box>table");
            table.onclick=function(e){
                if(e.target.innerHTML=="删除"){
                    var tr=e.target.parentNode.parentNode;
                    if(confirm(`是否继续删除吗？`)){
                        table.deleteRow(tr.rowIndex);
                    }
                }
            }
        }
    }
}
</script>
<style scoped>
    *{
        margin:0;padding:0;
    }
    .container{
        width:100%;
    }
    .box{
        width:1500px;
        margin:0 auto;
        background-color: #122B41;
    }
    .box table{
        color:#fff;
    }
    .box table:first-child{
        text-align: center;
    }
    .box table button{
        outline: 0;
        border: 0;
        color:#fff;
        background-color: #122B41;
        margin-left:10px;
    }
</style>