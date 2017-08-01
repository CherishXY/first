<template>
  <div id="app">
    <header class="navbar navbar-default navbar-fixed-top navbar-inverse">
        <div class="header-main">
            <ul>
                <li><a href="/king">四大天王</a></li>
                <li><a href="/lunbo">轮播欣赏</a></li>
                <li><a href="/article">优美短文</a></li>
            </ul>
        </div>
    </header>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app'
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
a:hover{
    text-decoration: none;
    color: none;
}
header{
    width: 100%;
    height: 100px;
    .header-main{
        width: 1200px;
        height: 100px;
        margin: 0 auto;
        ul{
            width: 300px;
            height: 100px;
            display: flex;
            li{
                width: 100px;
                height: 100px;
               a{
                   display: block;
                   width: 100px;
                   height: 100px;
                   text-align: center;
                   line-height: 100px;
                   color: #ccc;
                   font-size: 16px;
               }
            }
        }
    }
}
</style>
