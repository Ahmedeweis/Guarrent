<template>
    <section :dir="locale === 'ar' ? 'rtl' : 'ltr'" class="py-20 lg:py-32 bg-dark-navy overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">

                <!-- Left: Stacked Image Cards -->
                <div class="relative h-[480px] lg:h-[540px] flex items-center justify-center">
                    <!-- Background glow -->
                    <div class="absolute inset-0 bg-blue-600/5 rounded-3xl blur-2xl"></div>

                    <!-- Card 1 - Main large card -->
                    <div
                        class="absolute top-0 left-0 right-8 lg:right-16 h-56 rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
                        <div
                            class="w-full h-full bg-gradient-to-br from-blue-900/80 to-mid-navy flex items-center justify-center">
                            <!-- Camera icon placeholder -->
                            <svg class="w-16 h-16 text-blue-400/50" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                    d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                            </svg>
                            <span class="absolute bottom-3 left-4 text-white/60 text-sm font-medium">Security
                                Surveillance</span>
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-dark-navy/60 to-transparent"></div>
                    </div>

                    <!-- Card 2 - Mid card -->
                    <div
                        class="absolute top-44 left-8 right-4 lg:left-16 lg:right-0 h-52 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                        <div
                            class="w-full h-full bg-gradient-to-br from-indigo-900/80 to-blue-900/60 flex items-center justify-center">
                            <svg class="w-14 h-14 text-indigo-400/50" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span class="absolute bottom-3 left-4 text-white/60 text-sm font-medium">Professional
                                Team</span>
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-dark-navy/60 to-transparent"></div>
                    </div>

                    <!-- Card 3 - Bottom small card -->
                    <div
                        class="absolute bottom-0 left-0 right-12 lg:right-24 h-44 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                        <div
                            class="w-full h-full bg-gradient-to-br from-slate-800/80 to-mid-navy flex items-center justify-center">
                            <svg class="w-12 h-12 text-slate-400/50" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span class="absolute bottom-3 left-4 text-white/60 text-sm font-medium">Control
                                Center</span>
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-dark-navy/60 to-transparent"></div>
                    </div>
                </div>

                <!-- Right: Service Cards -->
                <div :class="locale === 'ar' ? 'text-right' : 'text-left'">
                    <!-- Label -->
                    <div class="inline-flex items-center gap-2 mb-4">
                        <span class="w-8 h-0.5 bg-blue-500"></span>
                        <span class="text-blue-400 text-sm font-semibold uppercase tracking-widest">Our Services</span>
                    </div>

                    <h2 class="text-4xl lg:text-5xl font-black text-white leading-tight mb-10">
                        {{ t('mission.title') }} &amp; {{ t('vision.title') }}
                    </h2>

                    <!-- Service Info Cards -->
                    <div class="flex flex-col gap-4">
                        <div v-for="service in services" :key="service.key"
                            class="flex items-start gap-4 p-4 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-blue-600/5 transition-all duration-300 group"
                            :class="locale === 'ar' ? 'flex-row-reverse text-right' : ''">
                            <div class="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-blue-500/40 transition-all duration-200"
                                :style="`background: ${service.color}20`">
                                <component :is="service.icon" class="w-5 h-5" :style="`color: ${service.color}`" />
                            </div>
                            <div>
                                <h3 class="text-white font-bold text-base mb-1">{{ t(`${service.key}.title`) }}</h3>
                                <p class="text-gray-400 text-sm leading-relaxed line-clamp-2">{{
                                    t(`${service.key}.description`) }}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { defineComponent, h } from 'vue'

const { t, locale } = useI18n()

const makeIcon = (d) => defineComponent({ render: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d })]) })

const services = [
    { key: 'mission', color: '#3B82F6', icon: makeIcon('M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z') },
    { key: 'vision', color: '#10B981', icon: makeIcon('M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z') },
    { key: 'strategy', color: '#F59E0B', icon: makeIcon('M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z') },
    { key: 'tech', color: '#8B5CF6', icon: makeIcon('M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z') },
    { key: 'admin', color: '#EC4899', icon: makeIcon('M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4') },
]
</script>
