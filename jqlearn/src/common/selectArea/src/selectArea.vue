<template>
    <div class="iyanyi-select-area clearfix">
      <!-- 已选择结果 -->
      <div class="select-result">
        <div class="select-area-title select-padding">已选择( {{selectResult.length}}/12 )</div>
        <div class="select-result-value select-padding clearfix">
          <span class="select-result-value-item" :title="sr.title" v-for="(sr, sri) in selectResult" :key="sri" @click="removeSelectNode(sr)">{{sr.title}} <i class="el-icon-close"></i></span>
        </div>
      </div>
      <!-- 地区选择 -->
      <div class="select-options">
        <div class="select-area-title select-padding">地区选择</div>
        <!-- 热门区域 -->
        <div class="hot-area select-padding clearfix">
          <div class="hot-label">热门区域:</div>
          <ul class="hot-value-list">
            <li class="hot-value-item" v-for="(hotArea, hai) in hotAreas" :key="hai" @click="selectAreaNode(hotArea)" :class="{checked:hotArea.checked}" @mouseover="provinceCitysShow = false">{{hotArea.title}}</li>
          </ul>
        </div>
        <!-- 热门城市 -->
        <div class="hot-city select-padding clearfix">
          <span class="hot-label">热门城市:</span>
          <ul class="hot-value-list">
            <li class="hot-value-item" v-for="(hotCity, hci) in hotCitys" :key="hci" @click="selectAreaNode(hotCity)" :class="{checked:hotCity.checked}" @mouseover="provinceCitysShow = false">{{hotCity.CityCnName}}</li>
          </ul>
        </div>
        <!-- 所有地区 -->
        <div class="all-area select-padding">
          <ul class="all-area-list clearfix" v-for="(allArea, index) in allAreas" :key="index">
            <li class="all-area-item" @click="selectAreaNode(allArea)" :class="{checked:allArea.checked}" @mouseover="provinceCitysShow = false">{{allArea.title}}:</li>
            <li class="all-area-item" v-for="(proItem, index) in allArea.items" :key="index" @click="selectAreaNode(proItem,$event)" :class="{checked:proItem.checked}" @mouseover="showCitys(proItem.ProvinceCode,$event)">
              {{proItem.ProvinceCnName}}
              <!-- <div class="inner-province-citys" v-show="showInnerCity && proItem.cityShow" :style="'margin-left:-' + (cityShowLeft - 12) + 'px;'">
                <ul class="all-area-list-city clearfix">
                  <li class="all-area-item-city" v-for="(cityItem, cii) in searchCitys" :key="cii" :class="{checked:cityItem.checked}">{{cityItem.CityCnName}}</li>
                </ul>
              </div> -->
            </li>
          </ul>
          <!-- 城市 -->
          <div class="province-citys" ref="provinceCitys" v-show="provinceCitysShow">
            <div class="arrow-icon" :style="'left:' + (cityShowLeft-12) + 'px;'"></div>
            <ul class="all-area-list clearfix">
              <li class="all-area-item" v-for="(cityItem, cii) in searchCitys" :key="cii" @click="selectAreaNode(cityItem)" :class="{checked:cityItem.checked}">{{cityItem.CityCnName}}</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 操作 -->
      <div class="select-area-btn"><el-button @click="submitResult" type="primary">确 认</el-button><el-button @click="cancel">取 消</el-button></div>
    </div>
</template>
<script>
import {optionsNoAPI} from '../../options'
import {areaInfoUtil} from '../../areaInfo/AreaInfoUtil'
import {utilFn} from '../../util'
export default {
  name: 'IyanyiSelectArea',
  props: {
    areaOptions:{
      type: Object,
      default:() =>{
        return {}
      }
    },
    defaultValue: {
      type: Array,
      default:() =>{
        return []
      }
    }
  },
  data() {
    return {
      returnResult: [],                       // 输出结果
      selectResult: [],                       // 搜索结果
      reSelectResult: [],                     // 初始搜索结果
      hotAreas: [],                           // 热门区域
      hotCitys: [],                           // 热门城市
      allAreas: [],                           // 所有区域
      searchCitys: [],                        // 省对应城市
      provinceCitysShow: false,                // 城市选择显示
      showInnerCity: false,
      cityShowLeft: 0
    }
  },
  destoryed() {
      document.removeEventListener('mouseup', this.clickOutSide)
      this.$refs.provinceCitys.removeEventListener('mouseleave', this.clickOutSideCity)
  },
  mounted() {
    document.addEventListener('mouseup', this.clickOutSide)
    this.$refs.provinceCitys.addEventListener('mouseleave', this.clickOutSideCity)
    this.init()
  },
  watch:{
    defaultValue(v) {
      this.init()
    }
  },
  methods: {
    // 初始化
    init() {
      if(this.defaultValue) {
        this.selectResult = utilFn.cloneObj(this.defaultValue)
      }
      this.checkResult()
    },
    clickOutSide (e) {
      if (this.provinceCitysShow && !this.$refs.provinceCitys.contains(e.target)) {
        this.provinceCitysShow = false
      }
      // this.provinceCitysShow = false
    },
    clickOutSideCity (e) {
      if (this.provinceCitysShow) {
        this.provinceCitysShow = false
      }
      // this.provinceCitysShow = false
    },
    // 选择地址
    selectAreaNode(item, ev) {
      let selectItem = {
        title: '',
        code: '',
        value: ''
      }
      this.showInnerCity = false
      if(item.code) {  // 判断是否是热门区域 或 大区 
        selectItem.title = item.title
        selectItem.code = item.code
        selectItem.value = item.items
      } else if (item.CityCode) {  // 判断是否是热门城市
        selectItem.title = item.CityCnName
        selectItem.code = item.CityCode
        selectItem.value = item
      } else { // 如果是大区的省份则选中并搜索
        selectItem.title = item.ProvinceCnName
        selectItem.code = 'province-' + item.ProvinceCode
        let citys = this.showCitys(item.ProvinceCode, ev)
        item.citys = citys
        this.showInnerCity = true
        selectItem.value = item
      }
      
      // 判断是否已经存在
      let isDouble = this.selectResult.filter(r =>r.code === selectItem.code)
      if (isDouble.length > 0) {  // 已经存在，则删除
        let newSelectResult = this.selectResult.filter(r =>r.code !== selectItem.code)
        this.selectResult = newSelectResult
      } else { // 不存在，则添加
        if(this.selectResult.length < 12) {
          this.selectResult.push(selectItem)
        }
      }

      this.checkResult()

    },
    showCitys(code, ev) {
      let citys = areaInfoUtil.GetCitiesInProvinceCN(code)
      // 城市渲染
      this.searchCitys = utilFn.cloneObj(citys)
      this.reSelectResult = utilFn.cloneObj(citys)
      // 位置
      if (citys && citys.length > 0) {
        this.provinceCitysShow = true
      } else {
        this.provinceCitysShow = false
      }
      let parentPositionNode = ev.target.parentNode.parentNode
      let positionXY = this.getAbsolute(parentPositionNode,ev.target)
      this.$refs.provinceCitys.style.top = (positionXY.top + 30) + 'px'
      this.$refs.provinceCitys.style.left =  '15px'
      this.cityShowLeft = positionXY.left
      this.checkResult()
      return citys
    },
    // 获取元素在文档流中的绝对坐标
    getAbsolute(reference, target) {
      var result = {
        left: -target.clientLeft,
        top: -target.clientTop
      }
      var node = target
      while(node != reference && node != document){
        result.left = result.left + node.offsetLeft + node.clientLeft
        result.top = result.top + node.offsetTop + node.clientTop
        node = node.parentNode
      }
      if(isNaN(reference.scrollLeft)){
        result.right = document.documentElement.scrollWidth - result.left
        result.bottom = document.documentElement.scrollHeight - result.top
      }else {
        result.right = reference.scrollWidth - result.left
        result.bottom = reference.scrollHeight - result.top
      }
      return result
    },
    // 移出
    removeSelectNode(sr) {
      let newSelectResult = this.selectResult.filter(r =>r.code !== sr.code)
      this.selectResult = newSelectResult
      this.checkResult()
    },
    // 判断所有的checked
    checkResult() {
      let hotAreas = utilFn.cloneObj(optionsNoAPI.AreasBlock)
      let hotCitys = utilFn.cloneObj(optionsNoAPI.HotCity)
      let allAreas = utilFn.cloneObj(optionsNoAPI.Areas)
      let citys = utilFn.cloneObj(this.reSelectResult)
      this.selectResult.forEach(sr => {
        let item = sr.value
        if(sr.code.indexOf('areas') >=0) {
          // 判断是否是热门区域 或 大区
          hotAreas.forEach(ha => {
            if(ha.code === sr.code) ha.checked = true
          })
          allAreas.forEach(aa => {
            if(aa.code === sr.code) aa.checked = true
          })
        } else if (item.CityCode) {
          // 热门城市
          hotCitys.forEach(hc => {
            if (hc.CityCode === item.CityCode) hc.checked = true
          })
          // 搜索城市
          citys.forEach(c => {
            if (c.CityCode === item.CityCode) c.checked = true
          })
        } else {
          // 省份
          allAreas.forEach(aa => {
            aa.items.forEach(i => {
              i.cityShow = false
              if (i.ProvinceCode === item.ProvinceCode){
                i.cityShow = true
                i.checked = true
              }
            })
          })
        }
      })
      this.hotAreas = hotAreas
      this.hotCitys = hotCitys
      this.allAreas = allAreas
      this.searchCitys = citys
    },
    // 最终结果
    submitResult() {
      // console.log(this.selectResult)
      this.returnResult = this.selectResult
      this.$emit('reCitySelectResult',this.returnResult)
    },
    // 取消
    cancel() {
      this.$emit('cancelCitySelectResult',{})
    }
  }
}
</script>
<style>
</style>
