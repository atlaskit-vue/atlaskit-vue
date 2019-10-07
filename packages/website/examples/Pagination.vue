<template>
  <div>
    <av-pagination :pages="pages"></av-pagination>
  </div>
</template>

<script>
export default  {
  data() {
    return {
      pages: [{
        href: '/',
        label: '1',
      },
      {
        href: '/about',
        label: '2',
      },
      {
        href: '/contact',
        label: '3',
      }]
    }
  }
}
</script>