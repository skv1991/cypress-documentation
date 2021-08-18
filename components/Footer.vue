<script>
import Icon from './global/Icon'

export default {
  components: {
    Icon,
  },
}
</script>
<template>
  <footer class="bg-white clear-both">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav
        class="-mx-5 -my-2 flex flex-wrap justify-center"
        :aria-label="$t('ui.footer.aria_label')"
      >
        <div class="px-5 py-2">
          <a
            href="https://www.cypress.io/about"
            class="text-base text-gray-500 hover:text-gray-900"
          >
            {{ $t('ui.footer.about') }}
          </a>
        </div>

        <div class="px-5 py-2">
          <a
            href="https://discord.gg/cMjUZg7"
            class="text-base text-gray-500 hover:text-gray-900"
          >
            {{ $t('ui.footer.discord') }}
          </a>
        </div>

        <div class="px-5 py-2">
          <a
            href="https://github.com/cypress-io/cypress/discussions"
            class="text-base text-gray-500 hover:text-gray-900"
          >
            {{ $t('ui.footer.discussions') }}
          </a>
        </div>

        <div class="px-5 py-2">
          <a
            href="https://on.cypress.io/changelog"
            class="text-base text-gray-500 hover:text-gray-900"
          >
            {{ $t('ui.footer.сhangelog') }}
          </a>
        </div>

        <div class="px-5 py-2">
          <a
            href="https://on.cypress.io/roadmap"
            class="text-base text-gray-500 hover:text-gray-900"
          >
            {{ $t('ui.footer.roadmap') }}
          </a>
        </div>

        <div class="px-5 py-2">
          <a
            href="https://www.cypress.io/jobs"
            class="text-base text-gray-500 hover:text-gray-900"
          >
            {{ $t('ui.footer.jobs') }}
          </a>
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <a
          href="https://github.com/cypress-io/cypress"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ $t('ui.footer.github') }}</span>
          <Icon :name="['fab', 'github']" color="inherit" />
        </a>

        <a
          href="https://www.youtube.com/channel/UC-EOsTo2l2x39e4JmSaWNRQ"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ $t('ui.footer.youtube') }}</span>
          <Icon :name="['fab', 'youtube']" color="inherit" />
        </a>

        <a
          href="https://twitter.com/Cypress_io"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ $t('ui.footer.twitter') }}</span>
          <Icon :name="['fab', 'twitter']" color="inherit" />
        </a>
      </div>
      <p class="mt-8 text-center text-base text-gray-500">
        &copy; 2021 Cypress.io. {{ $t('ui.footer.all_rights_reserved') }}.
      </p>
    </div>
  </footer>
</template>
