<template>
  <div class="container">
    <Header title="于俊康 - 半工半读申请报告" />
    <Nav />
    
    <div class="content-section">
      <!-- 模块1：家庭情况 -->
      <div class="module">
        <div class="module-title">一、个人情况</div>
        <div class="module-content">
          <p>我今年24岁，从小由爷爷奶奶抚养长大，家庭的特殊境况让我早早体会到生活的不易。我的父亲早年摔伤了腿，丧失了部分劳动能力；姑姑从九岁开始患上脑血栓导致半身不遂，常年卧床。家中还有个弟弟，由于家庭经济情况放弃了读大学，目前在工厂当学徒。现如今爷爷奶奶七十多岁了，本应安享晚年了，还在为这个家操劳。爷爷因在工地干活右手被压断了三根手指，身体上受了这么大的疼痛，这个七十岁的“小老头”却没有跟我提及过，是过年回家的时候看他一直戴着手套，我才知道这件事情。他总是对我说“农村的孩子，只有好好读书才有出路”。</p>
          <p>幸运的是，国家助学贷款的政策为我打开了求学的大门，专科就读于海南软件职业技术学院时，学校每年为我发放助学金。我心存感激，在大一的时候就担任了学校国旗队的一名护旗手，在校两年，担任了两年的国旗护旗手；积极参加各种志愿者活动，在校两年，连续两年获得海南省优秀志愿者称誉；还被评为"优秀班干部"、"三好学生"等；在校工作室，代表学校去参加省赛，曾获得由工业和信息化部工业文化发展中心主办的比赛中获得<span class="award-link" @click="showPythonModal">Python科目全国一等奖</span>和<span class="award-link" @click="showCLanguageModal">C语言科目全国二等奖</span>。成绩优异学校为我发放奖学金和国家励志奖学金（所有证书均有保留）。老师们更是倾囊相授，教给我实打实的专业技术 —— 正是这份知遇之恩，让我从一个自卑的农村孩子，成长为能靠专业技能立足的职场人。</p>
          <p>大三出去实习，第一份工作就找到了专业对口的工作——前端开发工程师。在工作期间参加专升本考上了“海南师范大学”，其实，我是纠结了很长一段时间，一边是工作（已经负责活动板块的前端小组长了），一边是学业，最终在爷爷的持续催促下选择了学业。但是到了学校，发现我已经不能对目前的家庭情况熟视无睹了，家庭需要我这一份收入。然后我在网上疯狂的找可以线上办公的工作，找工作的这段时间，我基本上天天失眠，终于功夫不负有心人。</p>
          <p>目前，我在上海飞冰科技有限公司担任"一点点"的技术支持工作（偏前端），上个月到手9000+，工作内容与我的专业高度对口<span class="small-text-link" @click="showContractModal">点击查看流水和合同</span>。目前要对部分项目重构引入"AI"，需要线下坐班，这对于我是一次机会，我很珍惜。这份工作让我能够将所学知识应用于实践，同时也为我的家庭提供了稳定的经济来源。前段时间，我用发的薪资为家里人缴纳了城乡基本医保，终于能靠自己的能力，为这个操劳半生的家撑起一把小小的 “保护伞”。我相信，通过半工半读的方式，我能够在保证学业的同时，继续在专业领域深耕，实现学业与职业的双重发展。</p>
          <p>当然，我可以先给这两年书读完再去实现我的人生价值。但是，就算我能等，我爷爷奶奶等不起了呀。我一直觉得，学校培养我们，不只是教知识，更是教我们要有担当，现在我有能力了，我必须扛起这份责任。倘若我不能给爷爷奶奶改善晚年的生活，那我觉得，我也不该存在这个世界上了。</p>
        </div>
      </div>


      <!-- 模块2：政策支持 -->
      <div class="module">
        <div class="module-title">二、政策支持</div>
        <div class="module-content">
          <p>依据<a href="https://hudong.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/P020211208551013106022.pdf?f_link_type=f_linkinlinenote&flow_extra=eyJpbmxpbmVfZGlzcGxheV9wb3NpdGlvbiI6MCwiZG9jX3Bvc2l0aW9uIjowLCJkb2NfaWQiOiIyMzVkNGM5OGJlYTY1NjI2LTMzNmJhODZmN2NlNzQzZGQifQ%3D%3D" target="_blank" class="policy-link">《普通高等学校学生管理规定》</a>（教育部令第 41 号）第六条、第四十五条，学生享有参加社会实践、勤工助学的权利，学校应鼓励并支持此类实践与学业结合的安排；同时，半工半读模式也契合 "教育与生产劳动相结合" 的教育传统，能够帮助我将理论知识与职场实践深度融合，在提升专业技能与就业竞争力的同时，兼顾家庭责任。</p>
          <p>我注意到<span class="policy-link-clickable" @click="showPolicyModal">《海南软件职业技术学院学生课程考核及成绩管理规定》</span>中明确提到："对经学校批准允许半工半读的学生，每学期需要回校参加全部的课程考核，具体考核时间由教学单位通知到本人"。对此我已做好充分准备：我会严格遵守学校的考核要求，提前协调工作时间，确保按时回校完成所有课程考核；同时也会定期向辅导员和科任老师汇报学习进度。</p>
          <p>我的申请既符合国家高等教育的政策导向，也完全遵守学校的管理规定，能够在兼顾家庭责任的同时，实现学业与实践能力的双重提升，恳请学校批准。</p>
        </div>
      </div>

      <!-- 模块3：学业保障 -->
      <div class="module">
        <div class="module-title">三、学业保障</div>
        <div class="module-content">
          <p>为确保半工半读期间学业不受影响，我承诺：</p>
          <ul>
            <li>保证不挂科，按时完成所有课程学习和作业要求；</li>
            <li>定期向学校汇报学习和工作情况，主动接受学校监督和指导；</li>
            <li>积极配合学校相关流程和管理规定，如有特殊情况及时沟通。</li>
          </ul>
          <p>我将以严谨的态度对待学业，以负责任的态度对待工作，努力实现学业与工作的平衡发展。</p>
        </div>
      </div>

      <!-- 模块4：责任声明 -->
      <div class="module">
        <div class="module-title">四、责任声明</div>
        <div class="module-content">
          <div class="responsibility-section">
            <div class="responsibility-title">校外工作意外责任</div>
            <p>本人申请半工半读期间，发生的人身伤害、财产损失等意外，均由本人及用人单位按照劳动法规、保险条款处理，与就读学校无涉，学校无需承担任何法律及经济责任。</p>
          </div>
          <div class="responsibility-section">
            <div class="responsibility-title">校内学业相关责任</div>
            <p>本人承诺严格遵守学校的课程考核规定及校园管理条例，若因个人原因导致的学业问题，均由本人自行承担责任。</p>
          </div>
        </div>
      </div>
    </div>

    <Footer />

    <!-- 政策规定弹窗 -->
    <TranscriptModal
      v-model:visible="policyModalVisible"
      course-name="海南软件职业技术学院学生课程考核及成绩管理规定"
      :transcript-image="zcImage"
    />

    <!-- 流水和合同弹窗 -->
    <TranscriptModal
      v-model:visible="contractModalVisible"
      course-name="工资流水和合同"
      :transcript-image="xinziImage"
    />

    <!-- Python证书弹窗 -->
    <TranscriptModal
      v-model:visible="pythonModalVisible"
      course-name="Python科目全国一等奖证书"
      :transcript-image="pythonImage"
      :is-certificate="true"
    />

    <!-- C语言证书弹窗 -->
    <TranscriptModal
      v-model:visible="cLanguageModalVisible"
      course-name="C语言科目全国二等奖证书"
      :transcript-image="cLanguageImage"
      :is-certificate="true"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import TranscriptModal from '../components/TranscriptModal.vue'
import zcImage from '../assets/images/zc.jpg'
import xinziImage from '../assets/images/xinzi.jpg'
import pythonImage from '../assets/images/python.jpg'
import cLanguageImage from '../assets/images/c.png'

const policyModalVisible = ref(false)
const contractModalVisible = ref(false)
const pythonModalVisible = ref(false)
const cLanguageModalVisible = ref(false)

const showPolicyModal = () => {
  policyModalVisible.value = true
}

const showContractModal = () => {
  contractModalVisible.value = true
}

const showPythonModal = () => {
  pythonModalVisible.value = true
}

const showCLanguageModal = () => {
  cLanguageModalVisible.value = true
}
</script>

<style scoped>
.policy-link {
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.policy-link:hover {
  color: #0052a3;
  text-decoration: underline;
}

.policy-link-clickable {
  color: #0066cc;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}

.policy-link-clickable:hover {
  color: #0052a3;
  text-decoration: underline;
}

.small-text-link {
  font-size: 12px;
  color: #0066cc;
  cursor: pointer;
  margin-left: 5px;
  transition: all 0.3s;
}

.small-text-link:hover {
  color: #0052a3;
  text-decoration: underline;
}

.award-link {
  color: #0066cc;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}

.award-link:hover {
  color: #0052a3;
  text-decoration: underline;
}

.responsibility-section {
  margin-bottom: 25px;
}

.responsibility-section:last-child {
  margin-bottom: 0;
}

.responsibility-title {
  font-size: 18px;
  color: #0066cc;
  font-weight: bold;
  margin-bottom: 12px;
}

.responsibility-section p {
  margin: 0;
  line-height: 1.8;
}
</style>

