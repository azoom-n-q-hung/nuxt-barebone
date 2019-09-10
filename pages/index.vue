<template>
  <div>
    <content-card>
      <img
        slot="icon"
        class="icon"
        src="~/assets/svg/190530_2週間以上ステータスを変更していない案件.svg"
      />
      <div slot="title">
        2週間以上ステータスを変更していない案件
      </div>
      <contact-log-notification slot="content" />
    </content-card>
  </div>
</template>

<script>
import contentCard from '~/components/home-page/content-card'
import contactLogNotification from '~/components/home-page/contact-logs-notification'
export default {
  components: {
    contentCard,
    contactLogNotification
  }
}
</script>
