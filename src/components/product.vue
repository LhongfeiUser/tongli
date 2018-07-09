<template>
  <div class="product">
    <h2 class="text-center" style="color:coral">产品介绍</h2>
    <div id="catalogue" style="display: flex;flex-direction: column">
      <!--<h3>目录</h3>-->
      <a href="javascript:void(0)" @click="goAnchor('#fault')">&nbsp;&nbsp;&nbsp;&nbsp; 一、故障诊断系列</a>
      <a href="javascript:void(0)" @click="goAnchor('#intelligent')">&nbsp;&nbsp;&nbsp;&nbsp; 二、智能监测系列</a>
      <a href="javascript:void(0)" @click="goAnchor('#security')">&nbsp;&nbsp;&nbsp;&nbsp; 三、安全检测系列</a>
      <a href="javascript:void(0)" @click="goAnchor('#utility')">&nbsp;&nbsp;&nbsp;&nbsp; 四、实用设备系列</a>
    </div>
    <div id="fault" class="product_content">
      <h4>一、故障诊断系列</h4>
      <ul>
        <li>
          <h6>CRH-1动车组高级修轮对轴承检测装置</h6>
          <div>
            <img src="../assets/images/CRH-1.jpg" class="img-fluid">
            <img src="../assets/images/crh-1.png" class="img-fluid">
          </div>
        </li>
        <li>
          <h6>HGLZ-1F/B货车滚动轴承故障诊断仪（列检型）</h6>
          <div>
            <img src="../assets/images/HGLZ-1FB.png" class="img-fluid">
            <img src="../assets/images/hglz_1fb.png" class="img-fluid">
          </div>
        </li>
        <li>
          <h6>HGZZ-1C/S货车滚动轴承诊断仪（站修型）</h6>
          <div>
            <img src="../assets/images/HGZZ-1CS.jpg" class="img-fluid">
            <img src="../assets/images/hgzz_1cs.png" class="img-fluid">
          </div>
        </li>
        <li>
          <h6>HGDZ-X-Ⅱ 货车段修型滚动轴承检测装置</h6>
          <div>
            <img src="../assets/images/HGDX-X-II.jpg" class="img-fluid">
            <img src="../assets/images/hgdz_x_ii.png" class="img-fluid">
          </div>
        </li>
      </ul>
    </div>
    <div id="intelligent" class="product_content">
      <h4>二、智能监测系列</h4>
      <ul>
        <li>
          <h6>铁路车辆滚动轴承轨旁声学诊断系统（TADS）</h6>
          <div>
            <img src="../assets/images/TADS.png" class="img-fluid">
            <img src="../assets/images/tads_.png" class="img-fluid">
          </div>
        </li>
        <li>
          <h6>高铁金属插板式声屏障检测及在线监测</h6>
          <div>
            <img src="../assets/images/shengping.png" class="img-fluid">
            <img src="../assets/images/shengping_.png" class="img-fluid">
          </div>
        </li>
        <li>
          <h6>TL-M301无线采集监测仪</h6>
          <div>
            <img src="../assets/images/TL-M301.png" class="img-fluid" style="width:20%; ">
            <img src="../assets/images/tl_m301.png" class="img-fluid">
          </div>
        </li>
      </ul>
    </div>
    <div id="security" class="product_content">
      <h4>三、安全检测系列</h4>
      <ul>
        <li>
          <h6>SZXC-1D站台限界测量仪</h6>
          <div>
            <img src="../assets/images/SZXC-1D.jpg" class="img-fluid">
            <img src="../assets/images/szxc_1d.png" class="img-fluid">
          </div>
        </li>
        <li>
          <h6>THZ-1 货车检修质量检查仪</h6>
          <div>
            <img src="../assets/images/THZ-1.jpg" class="img-fluid">
            <img src="../assets/images/thz_1.png" class="img-fluid">
          </div>
        </li>
      </ul>
    </div>
    <div id="utility" class="product_content">
      <h4>四、实用设备系列</h4>
      <ul>
        <li>
          <h6>WMY-1 轴承密封罩压装测控装置</h6>
          <div>
            <img src="../assets/images/WMY-1.jpg" class="img-fluid">
            <img src="../assets/images/wym_1.png" class="img-fluid">
          </div>
        </li>
        <li>
          <h6>HLNC -1轮轴轴端螺栓孔内螺纹测量装置</h6>
          <div>
            <img src="../assets/images/HLNC-1.jpg" class="img-fluid">
            <img src="../assets/images/hlnc_1.png" class="img-fluid">
          </div>
        </li>
      </ul>
    </div>
    <a class="return_top" href="javascript:void(0)" @click="goAnchor('#catalogue')">目录</a>
  </div>
</template>

<script>
  import Hub from '../assets/event';
  export default {
    name: '',
    data() {
      return {}
    },
    created(){
      Hub.$on('change',(data)=>{
        console.log(data);
      });
    },
    methods:{
      goAnchor(selector) {
        let anchor = this.$el.querySelector(selector);
        $('html,body').animate({scrollTop:anchor.offsetTop},500);
        // document.documentElement.scrollTop = anchor.offsetTop;
        // console.log(anchor.offsetTop);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .product {
    a{
      text-decoration: none;
    }
    #catalogue{
      margin-bottom:20px;
      a{
        font-size:20px;
        margin:10px 0;
        background-color:#343a40;
        padding:5px;
        color:#fff;
      }
    }
    .return_top{
      position: fixed;
      right: 50px;
      bottom:150px;
      background: #666;
      color:#fff;
      border-radius: 50%;
      width:60px;
      height:60px;
      line-height: 60px;
      text-align: center;
      font-size:20px;
    }
    .product_content {
      h4 {
        width: 25%;
        background-color: #007bff;
        color: #ffc107;
        padding: 10px;
        text-align: center;
      }
      ul {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        li {
          width: 100%;
          padding: 15px 5px 25px;
          margin: 20px 0;
          border: 1px solid #ccc;
          h6 {
            background-color: darkblue;
            color: #fff;
            padding: 10px;
            margin-bottom: 30px;
          }
          div {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            img {
              width: 40%;
              height: 300px;
            }
            img:first-child {
              width: 35%;
            }
          }
        }
      }
    }
  }
</style>
