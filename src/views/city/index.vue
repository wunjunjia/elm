<template>
  <div class="city-container">
    <elm-header to="/address">
      <div class="search-container">
        <router-link to="/city/search">
          <p class="placeholder">
            <span class="icon">
              <elm-icon
                name="search"
                color="#999"
                :font-size="36"
              />
            </span>输入城市名或首字母查询</p>
        </router-link>
      </div>
    </elm-header>
    <div class="scroll-wrapper">
      <scroll-view ref="scroll">
        <!-- 当前定位城市 -->
        <h1 class="title">当前定位城市</h1>
        <p
          class="content"
          @click.stop="locate(currentCity)"
        >{{ currentCity }}</p>
        <!-- 热门城市 -->
        <h1 class="title">热门城市</h1>
        <ul class="hot-city-list">
          <li
            v-for="{ id, name } in hotCity"
            :key="id"
            class="hot-city-item"
            @click.stop="locate(name)"
          >{{ name }}</li>
        </ul>
        <!-- 城市分组 -->
        <div
          v-for="{ letter, cities } in groupCity"
          :key="letter"
        >
          <h1
            ref="letters"
            class="title"
          >{{ letter }}</h1>
          <list
            :data-source="cities"
            @locate="locate"
          />
        </div>
        <elm-loading v-show="loading" />
      </scroll-view>
    </div>
    <letter-nav
      v-if="letters.length"
      :letters="letters"
      @transform="transform"
    />
    <transition name="drawer-left">
      <router-view :group-city="groupCity" />
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import cache from '@/cache'
import { AmapKey, transition } from '@/config'
import transitionMixin from '@/mixins/transition'
import cityMixin from './mixin'
import { UPDATE_TRANSITION } from '@/store/modules/global/mutation-types'
import ElmHeader from '@/components/header/index.vue'
import ScrollView from '@/components/scrollView/index.vue'
import LetterNav from '@/components/letterNav/index.vue'
import List from './list.vue'

export default {
  name: 'City',
  title: '饿了么城市',
  meta: {
    keyword: 'elm, city',
    description: '这里可以选择您的城市信息，请选择正确的城市哦',
  },
  components: {
    ElmHeader,
    ScrollView,
    LetterNav,
    List,
  },
  mixins: [cityMixin, transitionMixin],
  beforeRouteLeave(to, from, next) {
    this[UPDATE_TRANSITION](transition.slideRight)
    next()
  },
  data() {
    return {
      currentCity: '',
      hotCity: [],
      groupCity: [],
      loading: false,
    }
  },
  computed: {
    letters() {
      return this.groupCity.map(group => group.letter)
    },
    ...mapState('global', {
      location: state => state.location,
    }),
  },
  mounted() {
    if (this.location.initial) {
      this.currentCity = this.location.city
      this.saveData(this.location)
    } else this.getCurrentCity()
    const city = cache.get('city')
    if (city) {
      const { hotCity, groupCity } = city
      this.hotCity = hotCity
      this.groupCity = groupCity
      this.reset()
      return
    }
    this.getData()
      .then(() => {
        cache.set('city', {
          hotCity: this.hotCity,
          groupCity: this.groupCity,
        }, {
          maxAge: 1000 * 60,
          deep: false,
        })
        this.reset()
      })
  },
  methods: {
    reset() {
      if (this.$refs.scroll) this.$refs.scroll.reset()
    },
    getData() {
      this.loading = true
      return axios.get('/api/city/list')
        .then(({ data }) => {
          if (data.code !== 0) {
            this.$notify({ type: 'danger', message: '获取数据失败' })
            return
          }
          this.hotCity = data.data.hot_city.map(city => ({ id: city.city_id, name: city.city_name }))
          this.groupCity = data.data.city_nav.map(group => ({
            letter: group.idx,
            cities: group.cities.map(city => ({ id: city.city_id, name: city.city_name })),
          }))
          this.groupCity.sort((a, b) => a.letter < b.letter ? -1 : 1)
        })
        .finally(() => {
          this.loading = false
        })
    },
    transform(index) {
      this.$refs.scroll.scrollToElement(this.$refs.letters[index])
    },
    getCurrentCity() {
      return axios.get('https://restapi.amap.com/v3/ip', {
        params: {
          key: AmapKey,
        },
      }).then(({ data }) => {
        if (data.status !== '1') throw new Error()
        this.currentCity = data.city
        const [longitude, latitude] = data.rectangle.split(';')[0].split(',')
        this.saveData({
          city: data.city,
          adcode: data.adcode,
          longitude,
          latitude,
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
  .city-container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-top: px2rem($headerHeight);
  }

  ::v-deep .search-container {
    box-sizing: border-box;
    overflow: hidden;
    flex: 1;
    height: px2rem(60);
    margin-right: px2rem(20);
    background-color: #fff;
    border-radius: px2rem(48);
  }

  .placeholder {
    position: relative;
    padding: 0 px2rem(60);
    color: #999;
    font-size: px2rem(28);
    line-height: px2rem(60);

    .icon {
      position: absolute;
      top: 50%;
      left: px2rem(16);
      transform: translateY(-50%);
    }
  }

  .scroll-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .title {
    @include border-bottom-1px();
    box-sizing: border-box;
    width: 100%;
    height: px2rem(72);
    padding-left: px2rem(30);
    color: $secondaryTextColor;
    font-size: px2rem(28);
    font-weight: 400;
    line-height: px2rem(72);
    background-color: #f1f1f1;
  }

  .content {
    box-sizing: border-box;
    width: 100%;
    height: px2rem(84);
    padding-left: px2rem(30);
    color: $themeColor;
    font-size: px2rem(28);
    line-height: px2rem(84);
  }

  .hot-city-list {
    display: flex;
    flex-wrap: wrap;

    .hot-city-item {
      box-sizing: border-box;
      width: 25%;
      height: px2rem(84);
      border-right: 1px solid $hairlineColor;
      border-bottom: 1px solid $hairlineColor;
      color: $primaryTextColor;
      font-size: px2rem(28);
      line-height: px2rem(84);
      text-align: center;
    }

    .hot-city-item:nth-child(4n) {
      border-right-width: 0;
    }
  }
</style>
