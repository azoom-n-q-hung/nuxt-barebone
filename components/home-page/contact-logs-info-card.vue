<template>
  <div class="contact-logs-info-card" @click="handleClickItem(item)">
    <div>{{ item.label }}</div>
    <div>
      <span class="-number">{{ dataNeedUpdatingContact[item.key] }}</span>
      件
    </div>
  </div>
</template>
<script>
import { get } from 'vuex-pathify'
export default {
  props: {
    item: {
      default: () => {},
      type: Object
    }
  },
  methods: {
    handleClickItem(item) {
      console.log(
        '922222222 You clicked',
        item.label,
        item.key,
        this.dataNeedUpdatingContact[item.key]
      )
    }
  },
  computed: {
    dataNeedUpdatingContact: get('staff/getNeedUpdatingContact')
  }
}
</script>
