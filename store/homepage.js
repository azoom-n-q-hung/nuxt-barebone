import pathify from 'vuex-pathify'

export const plugins = [pathify.plugin]

const state = () => ({
  array: [{ name: 'a', age: '16', position: 'none' }]
})
const mutations = {
  add(state, { name, age, position }) {
    state.array.push({
      name,
      age,
      position
    })
  },
  remove(state, person) {
    state.array.splice(state.array.indexOf(person), 1)
  }
}
export { state, mutations }
