<template lang="html">
  <div id="King">
      <div class="box">
          <div class="person" v-for="a in data">
              <div class="message">
                  <ul>
                      <li>姓名:{{a.name}}</li>
                      <li>别名:{{a.other}}</li>
                      <li>身高:{{a.height}}</li>
                      <li>代表作:{{a.opus}}</li>
                  </ul>
              </div>
              <div class="experience">
                  巅峰时刻:{{a.experience}}
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'king',
    data(){
        return {
            data:[],
        }
    },
    methods:{
        getData(){
            axios.get('http://www.lichun.com/user/fourking')
            .then(function(res){
                this.data = res.data.result;
                console.log(this.data);
                // this.data =
            }.bind(this))
            .catch(function(err){
                console.log(err);
            })
        }
    },
    created(){
          this.getData()
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
body,p,ol,ul,li,p{
    padding: 0;
    margin: 0;
}
li{
    list-style: none;
}
#King{
    width: 100%;
    height: auto;
    margin-top: 100px;
    .box{
        width: 1200px;
        height: auto;
        margin: 0 auto;
        display: flex;
        .person{
            width: 300px;
            height: auto;
            margin-left: 5px;
            .message{
                width: 300px;
                height: auto;
                ul>li{
                    width: 300px;
                    height: 50px;
                    text-align: center;
                    line-height: 50px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                }
            }
            .experience{
                width: 300px;
                height: 300px;
                font-size: 18px;
                background-color: #6cc6e7;
            }
        }
    }
}
</style>
