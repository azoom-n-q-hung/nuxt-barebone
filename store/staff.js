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
      return Object.values(
        _.staff.summary.contactLogs.needUpdatingContact
      ).reduce((count, value) => {
        if (Number.isFinite(value)) return (count += value)
      })
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
            sendAvailableMail: 1,
            sendAvailableMailDirectMng: 1,
            sendAvailableMailLeopalace: 2,
            sendFollowUpMail: 3,
            toContact: 4,
            prospects: 5,
            contractAdjustment: 6,
            reversing: 7,
            sendFollowMail: 8
          }
        }
      }
    }
    context.commit('SET_STAFF', res)
  }
}
export { state, mutations, actions, getters }
