<template>
  <div>
    <content-card>
      <img
        slot="icon"
        class="icon"
        src="~/assets/svg/190530_2週間以上ステータスを変更していない案件.svg"
      />
      <div slot="header">
        2週間以上ステータスを変更していない案件
      </div>
      <contact-log-notification slot="content" />
    </content-card>
  </div>
</template>

<script>
import ContentCard from '~/components/home-page/content-card'
import ContactLogNotification from '~/components/home-page/contact-logs-notification'
export default {
  components: {
    ContentCard,
    ContactLogNotification
  }
}
</script>
