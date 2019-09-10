<template>
  <div class="contact-logs-info-card" @click="handleClickItem(item)">
    <div>{{ item.label }}</div>
    <div class="amount">
      <span class="number">{{ needUpdatingContact[item.key] }}</span>
      件
    </div>
  </div>
</template>
<script>
import { get } from 'vuex-pathify'
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    needUpdatingContact: get('staff/getNeedUpdatingContact')
  },
  methods: {
    handleClickItem(item) {
      console.log(
        '922222222 You clicked',
        item.label,
        item.key,
        this.needUpdatingContact[item.key]
      )
    }
  }
}
</script>
