import type { Ref } from 'vue'
import type { FuzzyBaseModel, TemplateConfiguration } from '../types'

interface tabItem {
  label?: string
  value?: string
  onClick?: () => void
}

class BarModel implements FuzzyBaseModel<tabItem> {
  config!: TemplateConfiguration
  data: Ref<tabItem[]> = ref([])
  activeIndex: Ref<number> = ref(0)

  constructor(config: TemplateConfiguration) {
    this.config = config
    this.mapDataAccordConfig()
  }

  /**
   * 根据配置文件更新顶部栏的初始配置
   * @param config
   * @returns
   */
  mapDataAccordConfig() {
    if (this.config.tabList) {
      this.data.value = this.config.tabList.map((tab, tabIndex) => {
        const _tab = { ...tab, onClick: () => {} }
        _tab.onClick = () => {
          this.activeIndex.value = tabIndex
        }
        return _tab
      })
    }
  }

  handleEvent() {
  }

  render() {
    let renderTitle = null

    if (!this.config.tabList && this.config.title) {
      // 带有图片的title
      if (typeof this.config.title === 'object') {
        renderTitle = <>
          <img src={this.config.title.icon} class="w-4 h-5 mr-2" />
          <h2>{this.config.title.text}</h2>
        </>
      }
      // 普通文本
      else {
        renderTitle = <>
          <div class="w-1 h-4 rounded-sm bg-primary-100 mr-2"></div>
          <h2>{this.config.title}</h2>
        </>
      }
    }
    // 切换按钮
    else if (this.config.tabList && this.config.tabList.length > 0) {
      renderTitle = this.data.value.map((tab, tabIndex) => {
        return <div
          key={tab.value}
          onClick={tab.onClick}
          class={[
            this.activeIndex.value === tabIndex ? 'bg-primary-100 text-white' : 'bg-gray-300 text-gray-700',
            'py-3', 'px-9',
            'rounded-t-lg', 'flex', 'items-center', 'mr-3', ' shadow-primary-50',
          ].join(' ')}
        >{tab.label}</div>
      })
    }
    // 按钮切换

    return <div class="py-4 px-6 h-14">
      <div class=" overflow-hidden relative">
        <div class="w-full h-full flex items-center flex-wrap box-border">
          { renderTitle }
        </div>
        <div class="w-full h-px bg-indigo-100 absolute bottom-0 left-0"></div>
      </div>
    </div>
  }
}

export {
  BarModel,
}
