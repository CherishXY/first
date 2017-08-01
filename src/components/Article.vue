<template lang="html">
     <div id="Article">
         <div class="part">
             <div class="nav">
                 <ul>
                     <li v-for="(value,i) in title"@click="getIndex(i)">{{value}}</li>
                 </ul>
             </div>
             <div class="box" v-for="(a,i) in data" v-show="index === i">
                 <div class="title">
                     <h3>{{a.title}}</h3>
                 </div>
                 <div class="content">
                     {{a.content}}
                 </div>
             </div>
         </div>
     </div>
</template>

<script>
export default {
    name:'article',
    data(){
        return {
            data:[],
            index:0,
            title:['放下','醉五月','秋天的记忆','春暖花开,心自安然']
        }
    },
    methods:{
            getData(){
                axios.get('http://www.lichun.com/user/artic')
                .then(function(res){
                    this.data = res.data.tract;
                    console.log(this.data);
                }.bind(this))
            },
            getIndex(i){
                this.index = i
            }
    },
    created(){
        this.getData(1)
    }
}
</script>

<style lang="less">
html{
    box-sizing: border-box;
}
*{
    box-sizing: inherit;
}
body,p,li,img,li,ul{
    padding: 0;
    margin: 0;
}
li{
    list-style: none;
}
#Article{
    width: 100%;
    height: auto;
    margin-top: 100px;
    .part{
        width: 500px;
        height: 400px;
        margin: 0 auto;
        margin-top: 20px;
        .nav{
            width: 500px;
            height: 50px;
            ul{
                width: 500px;
                height: 100px;
                display: flex;
                li{
                    width: 25%;
                    height: 50px;
                    border: 1px solid #ccc;
                    text-align: center;
                    line-height: 50px;
                    cursor: pointer;
                }
            }
        }
        .box{
            width: 500px;
            height: 300px;
            background-color: #ccc;
            color: #999;
            .title{
                width: 200px;
                height: 50px;
                margin: 0 auto;
                text-align: center;
            }
            .content{
                width: 500px;
                height: 150px;
                font-size: 20px;
            }
        }
    }
}
</style>
