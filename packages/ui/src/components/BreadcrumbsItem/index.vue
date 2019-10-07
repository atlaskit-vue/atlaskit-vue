<template>
  <div class="av-breadcrumbs-item">
    <av-button
      appearance="subtle-link"
      spacing="none"
    >
      {{ text }}
    </av-button>
    <div v-if="hasSeparator" class="seperator">/</div>
  </div>
</template>

<script src="./script.js" />
<style src="./index.scss" lang="scss">
