import './index.scss'

import AvContainer from './components/Container'
import AvRow from './components/Row'
import AvColumn from './components/Column'
import AvButton from './components/Button'
import AvIcon from './components/Icon'
import AvBlanket from './components/Blanket'
import AvBanner from './components/Banner'
import AvBreadcrumbs from './components/Breadcrumbs'
import AvBreadcrumbsItem from './components/BreadcrumbsItem'

const components = [
  AvContainer,
  AvRow,
  AvColumn,
  AvButton,
  AvIcon,
  AvBlanket,
  AvBanner,
  AvBreadcrumbs,
  AvBreadcrumbsItem,
]

const Atlaskit = {
  install(Vue, options = {}) {
    ;(options.components || components).forEach(component => {
      Vue.component(component.name, component)
    })
  },
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Atlaskit)
}

export {
  AvContainer,
  AvRow,
  AvColumn,
  AvButton,
  AvIcon,
  AvBlanket,
  AvBanner,
  AvBreadcrumbs,
  AvBreadcrumbsItem,
  Atlaskit,
}

export default Atlaskit
