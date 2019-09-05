<template>
  <div class="homepage">
    <div class="mdc-card content-card">
      <div class="mdc-card__media mdc-card__media--square -header">
        <div class="mdc-card__media-content">
          2週間以上ステータスを変更していない案件
        </div>
      </div>
      <!-- ... content ... -->
      <div class="mdc-card__actions content">
        <div class="mdc-card__action-buttons">
          <span class="highlight _font26px">30</span>
          <span class="highlight">件</span>の案件があります。
          <button
            class="mdc-button mdc-card__action mdc-card__action--button button"
          >
            全て確認
          </button>
        </div>
        <!-- <div v-for="(item, index) in array" :key="index" class="item">
            <div class="item-child">
              <span>{{ item.name }}</span>
              <span class="_float-right">{{ item.age }}</span>
            </div>
            <span class="item-tool-tip">xxxxxxxxxx</span>
          </div> -->
        <content-card
          :array="array"
          class="mdc-card__action-icons"
        ></content-card>
      </div>
    </div>
  </div>
</template>
<script>
import { get } from 'vuex-pathify'
import ContentCard from '~/components/home-page/content-card.vue'
export default {
  components: {
    ContentCard
  },
  data() {
    return {
      id: 0,
      array: [
        { name: 'Hung', age: 24, position: 'fresher' },
        {
          name: 'Thuat',
          age: 24,
          position: 'fresher'
        },
        {
          name: 'Duy',
          age: 26,
          position: 'junior'
        },
        { name: 'Hung', age: 24, position: 'fresher' },
        {
          name: 'Thuat',
          age: 24,
          position: 'fresher'
        },
        {
          name: 'Duy',
          age: 26,
          position: 'junior'
        },
        { name: 'Hung', age: 24, position: 'fresher' },
        {
          name: 'Thuat',
          age: 24,
          position: 'fresher'
        },
        {
          name: 'Duy',
          age: 26,
          position: 'junior'
        }
      ],
      person: {
        name: '',
        age: '',
        position: ''
      },
      name: ''
    }
  },
  created() {
    this.getDataStore()
  },
  computed: {
    homepageArray: get('homepage/array'),
    testPath: get('testPath/name')
  },
  methods: {
    getDataStore() {
      const data = this.$store.commit('staff/getContactLogSummary', this.$store)
      console.log('8999999999', data)
    },
    something() {
      console.log('xxxxxxxxxxxxx')
    },
    addPerson() {
      console.log('4999999', this.person)
      this.$store.commit('homepage/add', this.person)
    },
    addName() {
      this.$store.set('testPath/name', this.name)
    }
  }
}
</script>
