<template>
    <div class="intro">
      <img src="../assets/images/tl_bj.jpg" class="img-fluid">
     <div class="intro_content">
       <h2 class="justify-content-center">公司简介</h2>
       <div>
         <h4>公司概况</h4>
         <p>
          北京同力创新科技发展有限公司是北京市高新技术企业，主要从事铁路安全相关科研项目研究与实施，铁路安全装备、设备研发及生产。公司设立在清华大学科技园区财智国际大厦A座16楼，研发部设立在清华大学李兆基科技大楼A座7楼，与清华大学合作长达15年。主要合作单位有北京铁路局、清华大学、铁道科学研究院、中科院力学所、电子工业集团第三研究所、航天集团502所等单位。公司成立于2005年，前身为唐山创新力通电子科技有限公司（成立于2002年），另投资有唐山同力兴路科技有限公司、北京同力兴路科技有限公司、北京中兴人和科技有限公司。<br>
          技术研发团队由24人组成，其中教授2人，研究员2人，高工5人，博士3人，工程师10人，高级技师2人。
         </p>
         <h4>发展历程</h4>
         <p>Development</p>
         <p>2002年 公司前身唐山创新力通电子科技公司在唐山高新技术开发区成立 </p>
         <p>2003年 入驻清华大学，与清华大学机械工程系、精仪系、机械厂合作建立《清华大学铁道安全装备研究心》《列检型及站修型滚动轴承故障诊断仪》获铁道部运输局技术评审并全路推广</p>
         <p>2004年 参加北京铁路局全社会公开招标《列车脱轨自动报警装置》，以总分第一中标与铁道科学研究院、清华大学、北京铁路局丰台车辆段联合研发《列车脱轨自动报警装置》</p>
         <p>2005年 公司迁至北京，更名为北京同力创新科技发展有限公司</p>
         <p>2006年《列车脱轨自动报警装置》项目获得铁道部技术评审，获得发明专利。</p>
         <p>2007年 获得《高新技术企业证书》</p>
         <p>2009年《电动转轮器》通过铁道部运输局技术评审</p>
         <p>2010年《站台限界测量仪》通过北京铁路局技术评审《轮对电子标签》、《动车更换玻璃装置》获得北京铁路局科研立项</p>
         <p>2011年《货车段修型滚动轴承检测装置》通过北京铁路局技术评审</p>
         <p>2012年《铁路货车滚动轴承密封罩压装测控装置》、《铁路动车检修手持机》获得北京铁路局科研立项</p>
         <p>2014年《货车检修质量检查仪》、《货车轮轴内螺纹检测装置》通过北京铁路局技术评审《(TADS)铁路车辆滚动轴承轨边声学诊断系统》通过北京铁路局技术评审；《动车组传动与走行部件声学监测系统》、《动车组高级修不分解轴承检测设备》与铁道科学研究院机辆所、中科院力学所、电子工业集团第三研究所、航天科技集团五〇二所、北京铁路局科研所建立合作关系；《动车组便携式轴承故障诊断仪》获得北京铁路局科研立项。</p>
         <p>2015年《高铁声屏障在线监测系统》、《机车滚动轴承检测装置》获得北京铁路局科研立项</p>
         <p>2016年 公司获《质量管理体系认证》证书；参加铁总组织《（TADS）动车组滚动轴承轨旁声学诊断系统》统型联合研发《煤矿设备现场声学监测系统》</p>
         <p>2017年 研发《无线采集监测仪》</p>
       </div>
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
  .intro{
    position: relative;
    text-align: justify;
    padding:10px 50px;

   img{
     opacity: .4;
     width:100%;
     height:100%;
     position: absolute;
     top:0;
     left:0;
   }
   .intro_content{
     display: flex;
     flex-direction: column;
     align-items: center;
     h2,h4{
       font-weight: bold;
     }
     p{
       font-size:18px;
       color:#000;
       line-height: 20px;
       font-weight: 400;
       text-indent: 50px;
     }
   }
  }
</style>
