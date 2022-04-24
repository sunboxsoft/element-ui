<template>
  <section class="ChildU">
    ChildU <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button @click="handleChild()" round>圆角按钮</el-button>
  </section>
</template>

<script>
export default {
  name: "ChildU",
  data() {
    return {
      input: "",
      nameC:'nameCU'
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
