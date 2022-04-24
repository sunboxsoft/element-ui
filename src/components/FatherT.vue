<template>
  <section class="FatherT">
    父{{ num }}
    <!-- <child-t v-model="num"></child-t> -->
    <el-button type="primary" @click="changeComponent('ChildU')">ChildU</el-button>
    <el-button type="primary" @click="changeComponent('ChildI')">ChildI</el-button>
    <el-button type="primary" @click="getNameC()">获取值</el-button>
        <fieldset>
            <legend>{{getComputedName}}</legend>
            <keep-alive>
               <component :is="componentName"  @handleChild="handleFather" :ref="componentName"></component>
            </keep-alive>
        </fieldset>

  </section>
</template>

<script>
import ChildI from './ChildI.vue';
import ChildT from "./ChildT.vue";
import ChildU from "./ChildU.vue";
export default {
  name: "FatherT",
  data() {
    return {
      num: 10,
      componentName: "ChildU",
    };
  },
  components: { ChildT, ChildU, ChildI },
  watch: {},
  mounted() {
      console.log(this.$refs[this.componentName],'HHHHHHHHHHHHHHHH')
  },
  computed:{
      getComputedName(){
          console.log(this.$refs[this.componentName],'VVVVVVVVVVVVVVVVVVVVVV')
          return this.num
          //return this.$refs[this.componentName]
      }
  },
  methods: {
    changeComponent(v) {
      this.componentName = v;
    },
    getNameC(){
        console.log(this.$refs[this.componentName]["nameC"])
        this.$refs[this.componentName].open()
    },
    handleFather(v){
        alert(v)
    }
  },
};
</script>

<style>
</style>
