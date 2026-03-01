<template>
    <section :dir="locale === 'ar' ? 'rtl' : 'ltr'" class="py-20 lg:py-28 bg-hero-gradient relative overflow-hidden">
        <!-- Background blobs -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
            <div class="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">

                <!-- Left: Text -->
                <div :class="locale === 'ar' ? 'text-right' : 'text-left'">
                    <p class="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">Ready to start?</p>
                    <h2 class="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                        {{ t('hero.cta') }}
                    </h2>
                    <p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                        {{ t('hero.description') }}
                    </p>
                    <div class="flex flex-wrap gap-4" :class="locale === 'ar' ? 'flex-row-reverse' : ''">
                        <a href="#contact"
                            class="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-full hover:bg-blue-50 active:scale-95 transition-all duration-200 shadow-lg">
                            {{ t('hero.cta') }}
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#about"
                            class="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200">
                            {{ t('about.cta') }}
                        </a>
                    </div>
                </div>

                <!-- Right: Phone mockup (decorative) -->
                <div class="hidden lg:flex justify-end items-center">
                    <div class="relative">
                        <!-- Glow -->
                        <div class="absolute inset-0 bg-blue-500/30 rounded-3xl blur-2xl scale-110"></div>
                        <div
                            class="relative bg-dark-navy/80 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-2xl min-w-[280px]">
                            <!-- Mock UI Card -->
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                                    <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-white font-bold text-sm">Guarrent Platform</p>
                                    <p class="text-gray-400 text-xs">Live Dashboard</p>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div v-for="i in 3" :key="i"
                                    class="flex items-center justify-between p-2.5 bg-white/5 rounded-xl">
                                    <div class="flex items-center gap-2">
                                        <div class="w-2 h-2 rounded-full"
                                            :class="['bg-green-400', 'bg-blue-400', 'bg-yellow-400'][i - 1]"></div>
                                        <div class="h-2 rounded" :class="['w-24', 'w-20', 'w-28'][i - 1]"
                                            style="background:rgba(255,255,255,0.15)"></div>
                                    </div>
                                    <div class="text-xs text-gray-400">{{ ['Active', 'Patrol', 'Standby'][i - 1] }}</div>
                                </div>
                            </div>
                            <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                                <span class="text-gray-400 text-xs">Guards Online</span>
                                <span class="text-green-400 font-bold text-sm">12 / 12</span>
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
const { t, locale } = useI18n()
</script>
