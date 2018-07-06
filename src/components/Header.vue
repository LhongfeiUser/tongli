<template>
  <div id="header">
   <div class="title justify-content-center align-items-center">
     <div>
       <img src="../assets/images/logo.png" alt="" width="200" height="60">
     </div>
     <h2 class="text-center">北京同力创新科技发展有限公司</h2>
   </div>
    <nav class="navbar navbar-expand-lg navbar-light text-center bg-primary justify-content-center">
      <a class="nav-item nav-link" @click="choice(0)">首页</a>
      <a class="nav-item nav-link" @click="choice(1)">公司简介</a>
      <a class="nav-item nav-link" @click="choice(2)">产品介绍</a>
      <a class="nav-item nav-link" @click="choice(3)">技术支持</a>
      <a class="nav-item nav-link" @click="choice(4)">新闻动态</a>
      <a class="nav-item nav-link" @click="choice(5)">联系我们</a>
    </nav>
    <div class="banner_box">
      <img src="../assets/images/banner.jpg" class="img-fluid">
      <div class="banner_title">
        <h4 style="font-weight: bold; color:#2d7ccb;">
          监测与智能诊断综合解决方案
        </h4>
        <!--<img src="../assets/images/qinghua.png" class="img-fluid">-->
        <span>
          专业研发铁路安全检测 <br>
          及诊断装备 <br>
        </span>
        <span>清华大学技术团队</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
      }
    },
    methods:{
      choice(index){
        this.$emit('num',index)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navbar-light .navbar-brand {
    color: rgba(255, 255, 255, 1);
  }
  .navbar-light .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 1);
  }
  .nav-link {
    display: block;
    padding: 0.5rem 2rem;
  }
  #header{
    .title{
      display: flex;
      margin:10px auto;
      h2{
        color:#2d7ccb;
        font-style: italic;
        font-weight: bold;
      }
    }
    nav{
      a{
        color:#fff;
        cursor: pointer;
      }
      a:hover{
        color:#000;
      }
    }
    .banner_box{
      position: relative;
      .banner_title{
        width:27%;
        position:absolute;
        top:35%;
        right:7%;
        span{
          font-size:18px;
          text-align: left;
          font-weight: bold;
          line-height: 40px;
          color: #2d7ccb;
        }
      }
    }

  }
</style>
