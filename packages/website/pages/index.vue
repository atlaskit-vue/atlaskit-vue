<template>
  <av-container>
    <av-row>
      <av-col>
        <h1>Col 1</h1>
        <av-icon name="user" />
        <av-icon name="bell" />
        <av-icon name="search" />
      </av-col>
      <av-col>
        <h1>Col 2</h1>
        <av-icon name="user" />
        <av-icon name="bell" />
        <av-icon name="search" />
      </av-col>
      <av-col>
        <h1>Button</h1>
        <av-button mode="light">Button</av-button>
        <av-button mode="dark">Button</av-button>
        <av-button mode="light" appearance="primary">Button</av-button>
        <av-button mode="dark" appearance="primary">Button</av-button>
        <av-button mode="light" appearance="warning">Button</av-button>
        <av-button mode="dark" appearance="warning">Button</av-button>
        <av-button mode="light" appearance="danger">Button</av-button>
        <av-button mode="dark" appearance="danger">Button</av-button>
        <av-button mode="light" appearance="link">Button</av-button>
        <av-button mode="dark" appearance="link">Button</av-button>
        <av-button mode="light" appearance="subtle">Button</av-button>
        <av-button mode="dark" appearance="subtle">Button</av-button>
        <av-button mode="light" appearance="subtle-link">Button</av-button>
        <av-button mode="dark" appearance="subtle-link">Button</av-button>
      </av-col>
    </av-row>
    <av-row>
      <av-col>
        <blanket />
      </av-col>
    </av-row>
    <av-row>
      <av-col>
        <av-banner appearance="announcement">
          This is a announcement banner
        </av-banner>
        <av-banner appearance="warning">
          This is a warning banner
        </av-banner>
        <av-banner appearance="error">
          This is a error banner
        </av-banner>
      </av-col>
    </av-row>
    <av-row>
      <av-col>
        <breadcrumbs />
      </av-col>
    </av-row>
  </av-container>
</template>

<script>
import Blanket from '../examples/Blanket'
import Breadcrumbs from '../examples/Breadcrumbs'

export default {
  components: {
    Blanket,
    Breadcrumbs,
  },
  head: {
    title: 'Home',
  },
}
</script>
