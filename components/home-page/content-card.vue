<template>
  <div>
    <div v-for="(item, index) in array" :key="index" class="item">
      <div class="item-child">
        <span>{{ item.name }}</span>
        <span class="_float-right">{{ item.age }}</span>
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
