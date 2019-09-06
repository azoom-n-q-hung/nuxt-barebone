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
          <span class="highlight _font26px">{{ getTotalItemCount }}</span>
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
import { get, call } from 'vuex-pathify'
import ContentCard from '~/components/home-page/content-card.vue'
export default {
  components: {
    ContentCard
  },
  data() {
    return {
      id: 0,
      array: [
        {
          name: '空室有メール送信（レオパ）',
          age: 24,
          position: 'fresher',
          des: '件'
        },
        {
          name: 'ヒアリング済',
          age: 24,
          position: 'fresher',
          des: '件'
        },
        {
          name: '受付',
          age: 26,
          position: 'junior',
          des: '件'
        },
        {
          name: '空室有メール送信（レオパ）',
          age: 24,
          position: 'fresher',
          des: '件'
        },
        {
          name: 'ヒアリング済',
          age: 24,
          position: 'fresher',
          des: '件'
        },
        {
          name: '受付',
          age: 26,
          position: 'junior',
          des: '件'
        },
        {
          name: '空室有メール送信（レオパ）',
          age: 24,
          position: 'fresher',
          des: '件'
        },
        {
          name: 'ヒアリング済',
          age: 24,
          position: 'fresher',
          des: '件'
        },
        {
          name: '受付',
          age: 26,
          position: 'junior',
          des: '件'
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
    getTotalItemCount: get('staff/getTotalItemCount'),
    homepageArray: get('homepage/array'),
    testPath: get('testPath/name'),
    getContactLogSummary: get('staff/staff')
  },
  methods: {
    getDataStore: call('staff/getContactLogSummary'),
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
