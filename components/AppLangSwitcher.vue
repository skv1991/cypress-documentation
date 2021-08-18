<script>

export default {
    name: 'AppLangSwitcher',
    data: () => {return {
        isMenuOpen: false,
    }},
    computed: {
        availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        }
    }
}
</script>

<template>
    <div>
        <div class="relative inline-block text-left">
            <div>
                <button
                    id="language-menu-button"
                    :title="$t('ui.language')"
                    type="button"
                    class="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-2xl font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2"
                    aria-expanded="true"
                    aria-haspopup="true" @click="toggleMenu">
                    <Icon :name="['fas', 'language']" color="inherit" class-name="text-2xl" />
                </button>
            </div>

            <div
                class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"
                :class="isMenuOpen ? 'block' : 'hidden'"
            >
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity cursor-pointer"
                        aria-hidden="true"
                        :class="isMenuOpen ? 'opacity-100' : 'opacity-0'"
                        @click="toggleMenu"
                    ></div>

                    <!-- This element is to trick the browser into centering the modal contents. -->
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div
                        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        :class="isMenuOpen ? 'opacity-100 translate-y-0 sm:scale-100' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'"
                        >
                        <div class="bg-gray-50 px-1 py-1 sm:px-1">
                            <button type="button"
                                class="mt-1 w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-auto sm:w-auto sm:text-sm"
                                @click="toggleMenu">
                                <Icon :name="['fas', 'times']" color="inherit" />
                            </button>
                        </div>
                        <div class="bg-white">
                            <div class="sm:flex sm:items-start">
                                <div v-for="locale in availableLocales"
                                :key="locale.code"
                                        class="text-center flex w-full">
                                    <a
                                        href="#"
                                        class="text-gray-700 block px-4 py-2 text-base sm:text-sm block w-full hover:bg-gray-700 hover:text-white"
                                        tabindex="-1"
                                        @click.prevent.stop="$i18n.setLocale(locale.code)" @click="toggleMenu">{{ locale.name }}</a>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>