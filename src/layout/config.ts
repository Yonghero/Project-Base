import type { TemplateConfiguration } from '~/components/Fuzzy/types'

const config: TemplateConfiguration = {
  api: '/v1/user',
  // title: {
  //   text: '这是标题',
  //   icon: new URL('../assets/logo.png', import.meta.url).href,
  // },
  tabList: [{ label: 'tb1', value: '1' }, { label: 'tb2', value: '1' }],
  templates: [
    {
      label: '姓名',
      value: 'name',
      require: true,
      visible: {
        query: true,
        table: true,
        create: true,
        update: true,
      },
    },
    {
      label: '年龄',
      value: 'age',
      require: true,
      visible: {
        query: true,
        table: true,
        create: true,
        update: true,
      },
    },
    {
      label: '爱好',
      value: 'hobby',
      items: [{ label: '打篮球', value: 'bk' }, { label: '打篮球', value: 'bk' }, { label: '打篮球', value: 'bk' }],
      require: true,
      visible: {
        query: true,
        table: true,
        create: true,
        update: true,
      },
    },
  ],
}

export default config
