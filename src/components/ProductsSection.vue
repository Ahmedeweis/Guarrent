<template>
    <section :dir="locale === 'ar' ? 'rtl' : 'ltr'" class="py-20 lg:py-28 bg-light-blue-bg overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <p class="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Platforms</p>
                <h2 class="text-4xl lg:text-5xl font-black text-gray-900 mb-4">{{ t('portfolio.title') }}</h2>
                <p class="text-gray-500 text-lg max-w-2xl mx-auto">{{ t('portfolio.tagline') }}</p>
            </div>

            <!-- Product Cards -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <div v-for="product in products" :key="product.key"
                    class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-card-hover border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-6"
                    :class="locale === 'ar' ? 'text-right' : 'text-left'">
                    <!-- Icon -->
                    <div class="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        :style="`background: ${product.color}15`">
                        <component :is="product.icon" class="w-7 h-7" :style="`color:${product.color}`" />
                    </div>

                    <!-- Content -->
                    <div class="flex-1 flex flex-col gap-3">
                        <h3 class="text-xl font-bold text-gray-900">{{ t(`products.${product.key}.title`) }}</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">{{ t(`products.${product.key}.desc`) }}</p>
                    </div>

                    <!-- Link -->
                    <a href="#"
                        class="inline-flex items-center gap-2 text-sm font-semibold border rounded-full px-5 py-2.5 transition-all duration-200 w-fit"
                        :style="`color:${product.color}; border-color:${product.color}40`"
                        :class="locale === 'ar' ? 'flex-row-reverse' : ''"
                        @mouseover="($event.target.closest('a').style.background = product.color, $event.target.closest('a').style.color = '#fff')"
                        @mouseleave="($event.target.closest('a').style.background = '', $event.target.closest('a').style.color = product.color)">
                        {{ t(`products.${product.key}.link`) }}
                        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { defineComponent, h } from 'vue'
const { t, locale } = useI18n()

const mi = (d) => defineComponent({ render: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d })]) })

const products = [
    { key: 'jadara', color: '#3B82F6', icon: mi('M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222') },
    { key: 'webian', color: '#10B981', icon: mi('M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9') },
    { key: 'jazeel', color: '#8B5CF6', icon: mi('M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z') },
]
</script>
