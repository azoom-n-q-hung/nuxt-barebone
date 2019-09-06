<template>
  <div>
    <content-card>
      <div slot="header">2週間以上ステータスを変更していない案件</div>
      <div slot="content">
        <contact-log-notification />
      </div>
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
