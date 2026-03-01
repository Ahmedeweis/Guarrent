<template>
    <!-- Header sits ON the hero gradient, so bg is transparent by default,
       becomes white/blurred on scroll -->
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm'
        : 'bg-transparent'">
        <div class="max-w-[1200px] mx-auto px-6 lg:px-10">
            <div class="flex items-center justify-between h-[68px]">

                <!-- ── Logo ── -->
                <RouterLink to="/" class="flex items-center gap-2.5 flex-shrink-0 group">
                    <!-- Circle icon -->
                    <div
                        class="w-9 h-9 rounded-full bg-[#1C56DB] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                        <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <!-- Brand name -->
                    <span class="text-[15px] font-black tracking-[0.12em] text-gray-900 uppercase">
                        GUARRENT
                    </span>
                </RouterLink>

                <!-- ── Desktop Nav ── -->
                <nav class="hidden md:flex items-center gap-1">
                    <a v-for="link in navLinks" :key="link.href" :href="link.href"
                        class="px-4 py-2 text-[13.5px] font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150 rounded-lg hover:bg-black/5">
                        {{ link.label }}
                    </a>
                </nav>

                <!-- ── Right: Contact CTA + Hamburger ── -->
                <div class="flex items-center gap-3">
                    <!-- Contact button (desktop) -->
                    <a href="#contact"
                        class="hidden md:inline-flex items-center gap-2 bg-[#1C56DB] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#1547C0] active:scale-95 transition-all duration-200 shadow-md">
                        Contact
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>

                    <!-- Hamburger (mobile) -->
                    <button @click="menuOpen = !menuOpen"
                        class="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] rounded-lg hover:bg-black/5 transition-colors">
                        <span class="block w-5 h-[2px] bg-gray-700 transition-all duration-300 origin-center"
                            :class="menuOpen ? 'rotate-45 translate-y-[7px]' : ''" />
                        <span class="block w-5 h-[2px] bg-gray-700 transition-all duration-300"
                            :class="menuOpen ? 'opacity-0' : ''" />
                        <span class="block w-5 h-[2px] bg-gray-700 transition-all duration-300 origin-center"
                            :class="menuOpen ? '-rotate-45 -translate-y-[7px]' : ''" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile drawer -->
        <Transition name="drop">
            <div v-if="menuOpen" class="md:hidden bg-white border-t border-gray-100 shadow-lg">
                <div class="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-1">
                    <a v-for="link in navLinks" :key="`m-${link.href}`" :href="link.href" @click="menuOpen = false"
                        class="px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50">
                        {{ link.label }}
                    </a>
                    <a href="#contact" @click="menuOpen = false"
                        class="mt-2 flex items-center justify-center gap-2 bg-[#1C56DB] text-white text-sm font-semibold py-3 rounded-xl">
                        Contact <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </Transition>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
    { label: 'Home', href: '/#' },
    { label: 'About Us', href: '/#about' },
    { label: 'Impact', href: '/#impact' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'FAQ', href: '/#faq' },
]

function onScroll() { scrolled.value = window.scrollY > 20 }
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll() })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.drop-enter-active,
.drop-leave-active {
    transition: all .2s ease;
}

.drop-enter-from,
.drop-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}
</style>
