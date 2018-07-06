<template>
  <div class="home">
    <ul class="row">
      <li class="col-md-2">
        <img src="../assets/images/icon_01.png">
        <span>铁路车辆滚动轴承轨边声学诊断系统</span>
      </li>
      <li class="col-md-2">
        <img src="../assets/images/icon_02.png">
        <span>铁路货车滚动轴承故障诊断设备</span>
      </li>
      <li class="col-md-2">
        <img src="../assets/images/icon_03.png">
        <span>铁路专用测量设备</span>
      </li>
      <li class="col-md-2">
        <img src="../assets/images/icon_04.png">
        <span>铁路专用工具及装置</span>
      </li>
    </ul>
    <div class="product_modal flex-column">
      <div class="product_title">
        <img src="../assets/images/tc_01.png" class="img-fluid" style="width:20%">
        <div class="more">MORE+</div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img src="../assets/images/TADS_1.jpg" class="img-fluid">
            <figcaption>
              <strong>&nbsp;&nbsp; 生命科学制药检测系统</strong>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </figcaption>
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img src="../assets/images/TADS_1.jpg" class="img-fluid">
            <figcaption>
              <strong>&nbsp;&nbsp; 生命科学制药检测系统</strong>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </figcaption>
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img src="../assets/images/TADS_1.jpg" class="img-fluid">
            <figcaption>
              <strong>&nbsp;&nbsp; 生命科学制药检测系统</strong>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </figcaption>
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img src="../assets/images/TADS_1.jpg" class="img-fluid" >
            <figcaption>
              <strong>&nbsp;&nbsp; 生命科学制药检测系统</strong>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
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
            <h3></h3>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {}
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
            height:100%;
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
