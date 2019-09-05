import { make } from 'vuex-pathify'

const state = () => ({
  name: ''
})
const mutations = make.mutations(state)
export { state, mutations }
