import pathify from 'vuex-pathify'

export const plugins = [pathify.plugin]

const state = () => ({
  staff: {}
})
const mutations = {
  getContactLogSummary() {
    // do some action to get data
    const dataFromAPI = {
      summary: {
        contactLogs: {
          needUpdatingContact: {
            receptionist: 1,
            heard: 0,
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
    state.staff = dataFromAPI
  },
  getTotalItemCount() {
    let count = 0
    for (const key in state.staff.summary.contactLogs.needUpdatingContact) {
      count += state.staff.summary.contactLogs.needUpdatingContact[key]
    }
    return count
  }
}
const actions = {
  getContactLogSummary(context) {
    // To get the summary from API /staffs/:staffsId/contact-log-summaries
    // Some action here
    context.commit('getContactLogSummary')
  }
}
export { state, mutations, actions }
