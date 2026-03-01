<template>
    <section id="faq" :dir="locale === 'ar' ? 'rtl' : 'ltr'" class="py-20 lg:py-28 bg-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-14">
                <p class="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">{{ t('faq.title') }}</p>
                <h2 class="text-4xl lg:text-5xl font-black text-gray-900 mb-4">{{ t('faq.subtitle') }}</h2>
                <div class="w-12 h-1 bg-blue-600 rounded-full mx-auto"></div>
            </div>

            <!-- Accordion Items -->
            <div class="flex flex-col gap-3">
                <div v-for="(item, idx) in items" :key="idx"
                    class="border border-gray-100 rounded-2xl overflow-hidden hover:border-blue-100 transition-colors duration-200"
                    :class="openIdx === idx ? 'border-blue-200 shadow-sm' : ''">
                    <!-- Question -->
                    <button @click="toggle(idx)"
                        class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-blue-50/50 transition-colors duration-200"
                        :class="locale === 'ar' ? 'flex-row-reverse text-right' : ''">
                        <span class="font-semibold text-gray-900 text-base leading-snug">{{ t(item.q) }}</span>
                        <span
                            class="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300"
                            :class="openIdx === idx ? 'bg-blue-600 text-white rotate-45' : 'bg-gray-100 text-gray-500'">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                    d="M12 4v16m8-8H4" />
                            </svg>
                        </span>
                    </button>

                    <!-- Answer -->
                    <div class="overflow-hidden transition-all duration-300 ease-in-out"
                        :style="openIdx === idx ? `max-height: ${answerHeights[idx] || 500}px` : 'max-height: 0px'">
                        <div :ref="el => setRef(el, idx)" class="px-6 pb-6 pt-0">
                            <p class="text-gray-500 text-sm leading-relaxed"
                                :class="locale === 'ar' ? 'text-right' : ''">
                                {{ t(item.a) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const openIdx = ref(0)
const answerHeights = ref({})
const answerRefs = ref({})

const items = [
    { q: 'faq.q1', a: 'faq.a1' },
    { q: 'faq.q2', a: 'faq.a2' },
    { q: 'faq.q3', a: 'faq.a3' },
]

function toggle(idx) {
    openIdx.value = openIdx.value === idx ? null : idx
}

function setRef(el, idx) {
    if (el) {
        answerRefs.value[idx] = el
        answerHeights.value[idx] = el.scrollHeight
    }
}

onMounted(() => {
    Object.entries(answerRefs.value).forEach(([idx, el]) => {
        if (el) answerHeights.value[idx] = el.scrollHeight
    })
})
</script>
