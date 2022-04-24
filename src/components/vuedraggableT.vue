<template>
  <div>
    <draggable
      v-model="myArray"
      group="people"
      @start="drag = true"
      @end="drag = false"
    >
      <transition-group>
        <div v-for="element in myArray" :key="element.id">
          {{ element.name }}
        </div>
      </transition-group>
    </draggable>
    {{ myArray }}
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "vuedraggableT",
  data() {
    return {
      myArray: [
        { id: 10, name: "www.itxst.com" },
        { id: 20, name: "www.baidu.com" },
        { id: 30, name: "www.taobao.com" },
        { id: 40, name: "www.yahoo.com" },
      ],
    };
  },
  components: {
    draggable,
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style>
</style>
