<template>
  <section class="ChildT">
     <el-button @click="AddMinus(-1)">-</el-button> <input type="text" @input="inputChange" :value="value" /> <el-button @click="AddMinus(1)">+</el-button>
  </section>
</template>

<script>
export default {
  name: "ChildT",

  props: ["value"],
  data() {
    return {};
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    inputChange(e) {
      this.$emit("input", e.target.value-0);
    },
    AddMinus(step){
      this.$emit("input", this.value+step);
    }
  },
};
</script>

<style>
</style>
