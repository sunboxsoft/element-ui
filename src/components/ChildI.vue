<template>
  <section class="ChildI">
    ChildI <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="handleChild()" round>主要按钮</el-button>
  </section>
</template>

<script>
export default {
  name: "ChildI",
  data() {
    return {
      input: "",
      nameC: "nameCI",
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
      open(){
          console.log(this.nameC+'method')
      },
      handleChild(){
          this.$emit('handleChild',this.nameC+'emit')
      }
  },
};
</script>

<style>
</style>
