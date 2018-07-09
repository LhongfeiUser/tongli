<template>
  <div class="home">
    <ul class="row">
      <li class="col-md-2" @click="choice(2)">
        <img src="../assets/images/icon_01.png">
        <span>故障诊断系列</span>
      </li>
      <li class="col-md-2" @click="choice(2)">
        <img src="../assets/images/icon_02.png">
        <span>智能监测系列</span>
      </li>
      <li class="col-md-2" @click="choice(2)">
        <img src="../assets/images/icon_03.png">
        <span>安全检测系列</span>
      </li>
      <li class="col-md-2" @click="choice(2)">
        <img src="../assets/images/icon_04.png">
        <span>实用设备系列</span>
      </li>
    </ul>
    <div class="product_modal flex-column">
      <div class="product_title">
        <img src="../assets/images/tc_01.png" class="img-fluid" style="width:20%">
        <div class="more">MORE+</div>
      </div>
      <div class="row">
        <div class="col-md-3" @click="choice(2)">
          <figure>
            <img src="../assets/images/HGLZ-1FB.png" class="img-fluid">
            <figcaption>
              <strong>&nbsp;&nbsp; 货车滚动轴承故障诊断仪（列检型）,</strong>
              与配套的HGDZ-1B货车滚动轴承电动转轮器，专用于列检作业场进行现场快速轴承故障诊断
            </figcaption>
          </figure>
        </div>
        <div class="col-md-3" @click="choice(2)">
          <figure>
            <img src="../assets/images/HGZZ-1CS.jpg" class="img-fluid">
            <figcaption>
              <strong>&nbsp;&nbsp; 货车滚动轴承诊断仪（站修型）,</strong>
              用于站修作业场诊断轴承故障， FPGA与计算机技术融为一体。不受结构与旋转动态振动噪声的影响，可以获取一系列的由轴承故障处产生的瞬时能量脉冲，传感器特殊的材料还能够有效隔离电磁干扰
            </figcaption>
          </figure>
        </div>
        <div class="col-md-3" @click="choice(2)">
          <figure>
            <img src="../assets/images/HGDX-X-II.jpg" class="img-fluid">
            <figcaption>
              <strong>&nbsp;&nbsp; 货车段修型滚动轴承检测装置,</strong>
              货车车轴在不分解轴承时实施轴承故障诊断，转轮系统具有自动对位，固定轮对,转动轮对等功能，机械装置结构简单、紧凑、功率小、节能、可靠性高、方便使用和维护
            </figcaption>
          </figure>
        </div>
        <div class="col-md-3" @click="choice(2)">
          <figure>
            <img src="../assets/images/TADS_1.jpg" class="img-fluid" >
            <figcaption>
              <strong>&nbsp;&nbsp; 铁路车辆滚动轴承轨旁声学诊断系统（TADS),</strong>
              能自动识别通过的动车组（兼顾客车）轴箱轴承、货车滚动轴承的滚子、内圈和外圈的裂纹、剥离、磨损等故障。针对货车、动车组、客车运行中的滚动轴承进行早期故障诊断，及时进行处理，防止发生滚动轴承故障引起的行车事故。
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <div class="modal_box justify-content-between">
      <div class="intro_modal flex-column"  @click="choice(1)">
        <div class="product_title">
          <img src="../assets/images/tc_027.png" class="img-fluid">
          <div class="more">MORE+</div>
        </div>
        <div class="flex-column">
          <img src="../assets/images/inort.jpg" width="100%" class="img-fluid">
          <div class="intro_content">
            &nbsp;&nbsp; 北京同力创新科技发展有限公司是北京市高新技术企业，主要从事铁路安全相关科研项目研究与实施，铁路安全装备、设备研发及生产。公司设立在清华大学科技园区财智国际大厦A座16楼，研发部设立在清华大学李兆基科技大楼A座7楼，与清华大学合作长达15年。主要合作单位有北京铁路局、清华大学、铁道科学研究院、中科院力学所、电子工业集团第三研究所、航天集团502所等单位。公司成立于2005年，前身为唐山创新力通电子科技有限公司（成立于2002年），另投资有唐山同力兴路科技有限公司、北京同力兴路科技有限公司、北京中兴人和科技有限公司。
            技术研发团队由24人组成，其中教授2人，研究员2人，高工5人，博士3人，工程师10人，高级技师2人
          </div>
        </div>
      </div>
      <div class="news_modal flex-column">
        <div class="product_title">
          <img src="../assets/images/tc_03.png" class="img-fluid">
          <div class="more">MORE+</div>
        </div>
        <div>
          <img src="" alt="">
          <div>
            <h3 class="text-center" style="color:#007bff;margin-top:160px;">暂无数据，敬请期待!</h3>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Hub from '../assets/event';
  export default {
    name: '',
    data() {
      return {}
    },
    methods:{
      choice(index,selector){
       this.$emit('num',index);
        Hub.$emit('change',selector)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home{
    ul{
      display: flex;
      justify-content: space-around;
      margin:60px;
      li{
        height:100px;
        padding-top:45px;
        border:1px solid #6599ff;
        border-radius:20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        padding-bottom:5px;
        cursor: pointer;
        span{
          color:#666666;
          font-size:14px;
        }
        img{
          position: absolute;
          width:50%;
          height:auto;
          top:-25%;
          left:25%;
        }
      }
    }
    .product_modal{
      .row{
        figure{
          font-size:14px;
          color:#676767;
          img{
            width:100%;
            height:200px;
            border:1px solid #ccc;
          }
          figcaption{
            text-align: justify;
            line-height: 20px;
            margin-top:15px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:3;  //这里是在第二行有省略号
            overflow: hidden;
          }
        }
      }
    }
    .modal_box{
      display: flex;
      margin-top:20px;
      .intro_modal,.news_modal{
        width:48%;
        border:1px solid #ccc;
        padding:10px;
      }
      .intro_modal{
        .intro_content{
          text-align: justify;
          margin-top:15px;
          font-size:14px;
          line-height: 20px;
          color:#676767;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp:6;  //这里是在第几行有省略号
          overflow: hidden;
        }
      }
    }
    .product_title{
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      img{
        width:40%;
      }
      .more{
        padding:5px 10px;
        background-color: #666;
        color:#fff;
        cursor:pointer;
        font-size: 12px;
      }
    }
  }
</style>
