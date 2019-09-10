<template>
  <div class="contact-logs-notification">
    <div class="title">
      <span class="highlight number">{{ totalItemCount }}</span>
      <span class="highlight">件</span>
      <span class="text">の案件があります。</span>
      <button class="mdc-button confirmbtn" @click="handleClick">
        全て確認
      </button>
    </div>
    <div class="mdc-layout-grid">
      <div class="inner">
        <contact-logs-info-card
          v-for="(label, key, index) in contactStatuses"
          :key="index"
          :item="{ key, label }"
          class="contact-logs-info-card cell -span3desktop"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { get, call } from 'vuex-pathify'
import ContactLogsInfoCard from '~/components/home-page/contact-logs-info-card'
export default {
  components: {
    ContactLogsInfoCard
  },
  data() {
    return {
      contactStatuses: {
        receptionist: '受付',
        heard: 'ヒアリング済',
        sendAvailableMail: '空室有メール送信',
        sendAvailableMailDirectMng: '空室有メール送信（直営）',
        sendAvailableMailLeopalace: '空室有メール送信（レオパ）',
        sendFollowUpMail: '追客メール送信',
        toContact: '連絡つかず受付',
        prospects: '見込み',
        contractAdjustment: '契約調整',
        reversing: '逆引き中',
        sendFollowMail: 'フォローメール送信'
      }
    }
  },
  computed: {
    totalItemCount: get('staff/getTotalItemCount')
  },
  mounted() {
    this.getDataStore()
  },
  methods: {
    handleClick() {
      console.log('899999999 You clicked 全て確認', this.totalItemCount)
    },
    getDataStore: call('staff/getContactLogSummary')
  }
}
</script>
