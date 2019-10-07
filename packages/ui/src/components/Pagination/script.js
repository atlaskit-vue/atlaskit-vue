export default {
  name: 'AvPagination',
  props: {
    pages: {
      type: Array,
      required: true,
    },
    selectedIndex: {
      type: Number,
    },
  },
}
