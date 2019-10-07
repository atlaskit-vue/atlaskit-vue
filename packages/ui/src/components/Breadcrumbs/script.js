export default {
  name: 'AvBreadcrumbs',
  props: {
    maxItems: {
      type: Number,
      default: 8,
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
    itemsBeforeCollapse: {
      type: Number,
      default: 1,
    },
    itemsAfterCollapse: {
      type: Number,
      default: 1,
    },
  },
}
