import pathify from 'vuex-pathify'

export const plugins = [pathify.plugin]

export const state = () => ({
  array: [{ name: 'a', age: '16', position: 'none' }]
})
export const mutations = {
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
