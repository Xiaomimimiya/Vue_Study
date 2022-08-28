<template>
  <div class="tabbar">
    <!-- 传过来的是数组 因此 要遍历数组 -->
    <template v-for="(item, index) in names" :key="index">
      <div
        class="tab-item"
        :class="{ active: index === currentIndex }"
        @click="btnClick(index)"
      >
        <!-- 把item传递给Slot  -->
        <slot :item="item">
          <span>{{ item }}</span>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      defaule: () => [],
    },
  },

  data() {
    return {
      currentIndex: 0,
    };
  },

  emits: ["showItem"],

  methods: {
    btnClick(index) {
      this.currentIndex = index;
      this.$emit("showItem", index);
    },
  },
};
</script>

<style scoped>
.tabbar {
  width: 300px;
  display: flex;

  text-align: center;
  box-sizing: border-box;

  margin: 0 auto;
}

.tab-item {
  flex: 1;
}

.active {
  border-bottom: 3px solid red;
  color: red;
}
</style>