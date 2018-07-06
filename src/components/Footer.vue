<template>
    <div class="footer">
      <div class="box">
        <!--<h5>联系我们:</h5>-->
        <span>公司总部地址：北京市海淀区中关村东路 18 号财智国际大厦 A 座1601室</span>
        <span>研发中心地址：北京清华大学李兆基大楼 A 座744-3室</span>
        <span>联系电话：010-51829163 &nbsp;&nbsp; 010-62796470  &nbsp;&nbsp; 邮箱：bjtlcx@126.com   &nbsp;&nbsp; 邮编：100084</span>
        <!--<span>邮箱：bjtlcx@126.com  &nbsp; 传真：010-62796470-808</span>-->
      </div>
      <div class="line"></div>
      <span>©Copyright 2013 by lenosensor All rights reserved. 京ICP备0880 1990号</span>
      <!--<span>北京同力创新科技发展有限公司</span>-->
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
.footer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:200px;
  background-color: #181b20;
  color:#fff;
  font-size:12px;
  span{
    line-height: 30px;
  }
  .box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size:14px;
  }
  .line{
    width:100%;
    height:1px;
    background-color: #666;
    margin:20px 0 10px;
  }
}
</style>
