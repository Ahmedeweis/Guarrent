<template>
  <div class="relative min-h-screen">
    <!-- Fixed Header -->
    <Header />

    <!-- Page Sections -->
    <main>
      <HeroSection />
      <StatsBar />
      <features />
      <AboutSection />
      <Gallery />
      <WhyChooseUsSection />
      <!-- <ServicesSection /> -->
      <GlobalCoverageSection />
      <Seewhopepople />
      <fact />
      <!-- <ProductsSection /> -->
      <!-- <CTABannerSection /> -->
      <PricingSection />
      <security />
      <HiringCTASection />
      <FAQSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import StatsBar from '@/components/StatsBar.vue'
import features from '@/components/features.vue'
import AboutSection from '@/components/AboutSection.vue'
import Gallery from '@/components/Gallery.vue'
import WhyChooseUsSection from '@/components/WhyChooseUsSection.vue'
// import ServicesSection from '@/components/ServicesSection.vue'
import GlobalCoverageSection from '@/components/GlobalCoverageSection.vue'
import Seewhopepople from '@/components/Seewhopepople.vue'
import fact from '@/components/fact.vue'
// import ProductsSection from '@/components/ProductsSection.vue'
// import CTABannerSection from '@/components/CTABannerSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import security from '@/components/security.vue'
import HiringCTASection from '@/components/HiringCTASection.vue'
import FAQSection from '@/components/FAQSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>