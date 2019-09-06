<template>
  <div class="contact-logs-notification">
    <div class="draw-div">
      <span class="highlight _font26px">{{ getTotalItemCount }}</span>
      <span class="highlight">件</span>の案件があります。
      <button
        @click="handleClick"
        class="mdc-button mdc-card__action mdc-card__action--button button"
      >
        全て確認
      </button>
    </div>
    <div class="array-flex">
      <div v-for="(item, index) in langs" :key="index" class="item">
        <div class="item-child" @click="handleClickItem(item)">
          <div>{{ item.label }}</div>
          <div>
            <span class="number-highlight">{{
              dataNeedUpdatingContact[item.key]
            }}</span>
            <span>{{ text }}</span>
          </div>
        </div>
        <span class="item-tool-tip">hoverした時</span>
      </div>
    </div>
  </div>
</template>
<script>
import { get, call } from 'vuex-pathify'
export default {
  data() {
    return {
      text: '件',
      langs: [
        {
          label: '受付',
          key: 'receptionist'
        },
        {
          label: 'ヒアリング済',
          key: 'heard'
        },
        {
          label: '空室有メール送信',
          key: 'sendAvailableMail'
        },
        {
          label: '空室有メール送信（直営）',
          key: 'sendAvailableMailDirectMng'
        },
        {
          label: '空室有メール送信（レオパ）',
          key: 'sendAvailableMailLeopalace'
        },
        {
          label: '追客メール送信',
          key: 'sendFollowUpMail'
        },
        {
          label: '連絡つかず受付',
          key: 'toContact'
        },
        {
          label: '見込み',
          key: 'prospects'
        },
        {
          label: '契約調整',
          key: 'contractAdjustment'
        },
        {
          label: '逆引き中',
          key: 'reversing'
        },
        {
          label: 'フォローメール送信',
          key: 'sendFollowMail'
        }
      ]
    }
  },
  created() {
    this.getDataStore()
  },
  methods: {
    handleClick() {
      console.log('899999999 You clicked 全て確認')
    },
    handleClickItem(item) {
      console.log(
        '922222222 You clicked',
        item.label,
        item.key,
        this.dataNeedUpdatingContact[item.key]
      )
    },
    getDataStore: call('staff/getContactLogSummary')
  },
  computed: {
    dataNeedUpdatingContact: get('staff/getNeedUpdatingContact'),
    getTotalItemCount: get('staff/getTotalItemCount')
  }
}
</script>
