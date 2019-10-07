export default {
  name: 'AvBreadcrumbsItem',
  props: {
    hasSeparator: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '#',
    },
    text: {
      type: String,
      required: true,
    },
    truncationWidth: {
      type: Number,
      default: 0,
    },
  },
}
