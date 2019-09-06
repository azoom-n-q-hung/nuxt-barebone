import { make } from 'vuex-pathify'

const state = () => ({
  staff: {}
})
const mutations = {
  ...make.mutations(state)
}
const getters = {
  ...make.getters(state),
  getTotalItemCount: (_) => {
    try {
      let count = 0
      const needUpdatingContact =
        _.staff.summary.contactLogs.needUpdatingContact
      for (const key in needUpdatingContact) {
        count += needUpdatingContact[key]
      }
      return count
    } catch (err) {
      return 0
    }
  },
  getNeedUpdatingContact: (_) => {
    try {
      return _.staff.summary.contactLogs.needUpdatingContact
    } catch (err) {
      return {}
    }
  }
}
const actions = {
  ...make.actions(state),
  getContactLogSummary(context) {
    // To get the summary from API /staffs/:staffsId/contact-log-summaries
    // Some action here
    const res = {
      summary: {
        contactLogs: {
          needUpdatingContact: {
            receptionist: 1,
            heard: 5,
            sendAvailableMail: 0,
            sendAvailableMailDirectMng: 0,
            sendAvailableMailLeopalace: 0,
            sendFollowUpMail: 0,
            toContact: 0,
            prospects: 0,
            contractAdjustment: 0,
            reversing: 0,
            sendFollowMail: 0
          }
        }
      }
    }
    context.commit('SET_STAFF', res)
  }
}
export { state, mutations, actions, getters }
