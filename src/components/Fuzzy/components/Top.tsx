// import type { TemplateConfiguration } from '../types'
import type { ComputedRef } from 'vue'
import { ConfigProvide } from '../types'

interface tabItem {
  label?: string
  value?: string
  onClick?: () => void
}

export default defineComponent({
  setup() {
    const config = inject(ConfigProvide)
    const activeIndex = ref(0)
    const selfTabList: ComputedRef<Array<tabItem>> = computed(() => {
      if (config?.tabList) {
        return config.tabList.map((tab, tabIndex) => {
          const _tab = { ...tab, onClick: () => {} }
          _tab.onClick = () => activeIndex.value = tabIndex
          return _tab
        })
      }
      return []
    })

    return {
      selfTabList,
      activeIndex,
      ...config,
    }
  },
  render() {
    let renderTitle = null
    if (this?.title) {
      // 带有图片的title
      if (typeof this.title === 'object') {
        renderTitle = <>
          <img src={this.title.icon} class="w-4 h-5 mr-2" />
          <h2>{this.title.text}</h2>
        </>
      }
      // 普通文本
      else {
        renderTitle = <>
          <div class="w-1 h-4 rounded-sm bg-primary-100 mr-2"></div>
          <h2>{this.title}</h2>
        </>
      }
    }

    else if (this.tabList && this.tabList.length > 0) {
      renderTitle = this.selfTabList.map((tab, tabIndex) => {
        return <div
          key={tab.value}
          onClick={tab.onClick}
          class={[this.activeIndex === tabIndex ? 'bg-primary-100 text-white' : 'bg-gray-300 text-gray-700',
            'py-2', 'px-9',
            'rounded-t-lg', 'flex', 'items-center', 'mr-3', ' shadow-primary-50'].join(' ')}
        >{tab.label}</div>
      })
    }

    return <div class="py-4 px-6 h-14">
      <div class=" overflow-hidden relative">
        <div class="w-full h-full flex items-center flex-wrap box-border">
          { renderTitle }
        </div>
        <div class="w-full h-px bg-indigo-100 absolute bottom-0 left-0"></div>
      </div>
    </div>
  },
})
