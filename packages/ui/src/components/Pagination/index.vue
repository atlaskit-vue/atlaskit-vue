<template>
  <div class="av-pagination">
    <av-button
      v-for="(page, index) in pages"
      :key="`${page.label}-${index}`"
      appearance="subtle">
      {{ page.label }}
    </av-button>
  </div>
</template>

<script src="./script.js" />
<style src="./index.scss" lang="scss">
