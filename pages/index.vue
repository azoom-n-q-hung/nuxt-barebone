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
    <aside
      id="my-mdc-dialog"
      class="mdc-dialog"
      role="alertdialog"
      aria-labelledby="-label"
      aria-describedby="-description"
    >
      <div class="surface">
        <header class="header">
          <h2 id="-label" class="header__title">
            Use Google's location service?
          </h2>
        </header>
        <section id="-description" class="body">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </section>
        <footer class="footer">
          <button type="button" class="mdc-button button -cancel">
            Decline
          </button>
          <button type="button" class="mdc-button button -accept">
            Accept
          </button>
        </footer>
      </div>
      <div class="backdrop"></div>
    </aside>
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
