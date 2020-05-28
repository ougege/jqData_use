
const SelectArea = () => import('./src/selectArea')
/* istanbul ignore next */
SelectArea.install = function install(Vue) {
  Vue.component(SelectArea.name, SelectArea)
}

export default SelectArea

