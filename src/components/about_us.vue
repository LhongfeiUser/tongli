<template>
    <div class="about_us">
       <div>
         <h3>联系我们:</h3>
         <p>
           公司总部地址：北京市海淀区中关村东路 18 号财智国际大厦 A 座 1601 <br>
           室研发中心地址：北京清华大学李兆基科技大楼 A 座 744-3 室 <br>
           邮编：100084<br>
           邮箱：bjtlcx@126.com<br>
           联系电话：010-51829863 010-62796470<br>
           路电：021-29863手机：13501268835  15210675172<br>
           传真：010-62796470-808<br>
           公司网址：http://www.bjtlcx.cn
         </p>
       </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .about_us{
    width:100%;
    height:600px;
    background: url("../assets/images/_bg.jpg")no-repeat;
    background-size:100% 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    div{
      padding-top:50px;
      font-weight: 400;
      h3{
        color:mediumvioletred;
        font-weight: bold;
      }
      p{
        background-color: #007bff;
        line-height: 40px;
        color:#fff;
        font-size:20px;
        opacity: .5;
        padding-left:30px;
      }
    }
  }
</style>
