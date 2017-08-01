<template lang="html">
    <div id="Lunbo">
        <div class="box" >
            <div class="imgs" ref='Imgs' style="marginLeft:-100%">
                <img :src="data[3]" >
                <img :src="a" v-for="a in data">
                <img :src="data[0]" >
            </div>
        </div>
        <div class="btn">
            <input type="button" class="prev" value="上一张" @click='prev'>
            <input type="button" class="next" value="下一张" @click='next'>
        </div>
    </div>
</template>

<script>
export default {
    name:'lunbo',
    data(){
        return {
              data:[],
              start: -100
        }
    },
    methods:{
         getimg(){
             axios.get('http://www.lichun.com/user/img')
             .then(function(res){
                 this.data = res.data.img;
                 console.log(this.data);
             }.bind(this))
             .catch(function(err){
                 console.log(err);
             })
         },
         next(){
             let imgS = this.$refs.Imgs;
             let add = 0;
             let t = setInterval(()=>{
                 if (add>=100) {
                     clearInterval(t);
                     this.start -= add
                     add = 0;
                     return false;
                 }                 
                 if (this.start<-400) {
                     this.start = -100;
                     imgS.style.marginLeft =this.start+'%';
                 }
                 add++;
                 imgS.style.marginLeft = -add+this.start+'%';
             },10)
         },
         prev(){
             let imgS = this.$refs.Imgs;
             let add = 0;
             let t = setInterval(()=>{
                 if (add>=100) {
                     clearInterval(t);
                     this.start+=add;
                     add=0;
                     return false;
                 }
                 console.log(this.start);
                 if (this.start>-100) {
                     this.start = -400;
                     imgS.style.marginLeft =this.start+'%';
                 }
                 add++;
                 imgS.style.marginLeft = add+this.start+'%';
             },10)
         }
    },
    created(){
           this.getimg()
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
#Lunbo{
    width: 100%;
    height: auto;
    margin-top: 100px;
    .box{
        width: 100%;
        height: auto;
        overflow: hidden;
        .imgs{
            width: 600%;
            height: 371.02px;
            position: relative;
            display: flex;
            img{
                width: 100/6%;
                height: 371.02px;
            }
        }
    }
    .btn{
        width: 100%;
        height: auto;
        margin: 10px auto;
        text-align: center;
    }
}
</style>
