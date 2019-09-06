<template>
  <div>
    <div v-for="(item, index) in array" :key="index" class="item">
      <div class="item-child">
        <div>{{ item.name }}</div>
        <div>
          <span class="number-highlight">{{ item.age }}</span>
          <span>{{ item.des }}</span>
        </div>
      </div>
      <span class="item-tool-tip">xxxxxxxxxx</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    array: {
      type: Array,
      default: null
    }
  }
}
</script>
