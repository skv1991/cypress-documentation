<script>
import AppHeader from '../components/AppHeader'
import Footer from '../components/Footer'
import { algolia } from '../content/settings.json'
import { TITLE_SEPARATOR } from '../content/constants'

export default {
  components: {
    AppHeader,
    Footer,
  },
  data() {
    return {
      algoliaSettings: algolia,
    }
  },
  head() {
    return {
      title: this.$i18n.t('pages.error.title', {separator: TITLE_SEPARATOR}),
    }
  },
}
</script>

<template>
  <div class="w-full">
    <AppHeader
      :mobile-menu-items="[]"
      section="guides"
      :algolia-settings="algoliaSettings"
    />
    <main class="">
      <div class="main-content-article-wrapper">
        <article class="main-content-article hide-scroll">
          <h1 class="main-content-title text-center">{{ $t('pages.error.page_404_heading') }}</h1>
          <div class="nuxt-content">
            <div class="mb-8">
              <p class="text-center" v-html="$t('pages.error.cant_find_page')"></p>
            </div>
            <div class="mb-8 flex flex justify-around items-center">
              <ul>
                <li class="list-none">
                  <Icon name="angle-right" class="mr-2"></Icon
                  ><a :href="localePath('/guides/core-concepts/introduction-to-cypress')"
                    >{{ $t('pages.guides.introduction_to_cypress.from_error_page') }}</a
                  >
                </li>
                <li class="list-none">
                  <Icon name="angle-right" class="mr-2"></Icon
                  ><a :href="localePath('/api/table-of-contents')">{{ $t('pages.api.docs.from_error_page') }}</a>
                </li>
                <li class="list-none">
                  <Icon name="angle-right" class="mr-2"></Icon
                  ><a :href="localePath('/examples/examples/tutorials')">{{ $t('pages.examples.tutorials.from_error_page') }}</a>
                </li>
                <li class="list-none">
                  <Icon name="angle-right" class="mr-2"></Icon
                  ><a href="https://www.cypress.io/dashboard/"
                    >{{ $t('pages.error.cypress_dashboard') }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="mb-8">
              <p class="italic text-center">
                {{ $t('pages.error.try_our_search') }}
                <Icon name="search"></Icon>
              </p>
            </div>
          </div>
          <Footer />
        </article>
      </div>
    </main>
  </div>
</template>
