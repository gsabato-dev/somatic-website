'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, CheckCircle2, Heart, Brain, Shield, Compass, Sparkles, Users, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8DCC8] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Brand */}
            <a href="#" className="font-serif text-xl md:text-2xl text-[#2D3748] hover:text-[#C97857] transition-colors">
              Gabriele Somatic Coach
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-[#4A5568] hover:text-[#C97857] transition-colors font-medium">
                About
              </a>
              <a href="#collaboration" className="text-[#4A5568] hover:text-[#C97857] transition-colors font-medium">
                How We Work
              </a>
              <Button
                className="bg-gradient-to-r from-[#C97857] to-[#B8633E] hover:shadow-lg text-white transition-all shadow-md"
                asChild
              >
                <a
                  href="https://cal.com/gabriele-somatic-coach/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Free Consultation
                </a>
              </Button>
            </nav>

            {/* Mobile Hamburger Menu Button */}
            <button
              className="md:hidden p-2 text-[#2D3748] hover:text-[#C97857] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8DCC8] bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href="#about"
                className="text-[#4A5568] hover:text-[#C97857] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#collaboration"
                className="text-[#4A5568] hover:text-[#C97857] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How We Work
              </a>
              <Button
                className="bg-gradient-to-r from-[#C97857] to-[#B8633E] hover:shadow-lg text-white transition-all shadow-md w-full"
                asChild
              >
                <a
                  href="https://cal.com/gabriele-somatic-coach/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule Free Consultation
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C97857] via-[#C97857] to-[#B8633E]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="container mx-auto pl-4 pr-0 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Text Content */}
            <div className="text-white z-10 lg:col-span-5 pr-4">
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-6 text-balance drop-shadow-lg">
                Pleasure Is Your Birthright. Reclaim It.
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90 drop-shadow-md">
                For women stuck in their head: disconnected from desire, sensation, and their body. I've walked the path from religious conditioning and intellectual spaces back to embodied aliveness. I'll guide you there too.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button
                  size="lg"
                  className="bg-[#F9F7F4] text-[#C97857] hover:bg-white hover:shadow-xl transition-all rounded-lg font-medium text-base shadow-lg"
                  asChild
                >
                  <a href="#booking">Book Free Discovery Call</a>
                </Button>
              </div>
            </div>

            {/* Hero Image - Floor Pose */}
            <div className="relative lg:col-span-7">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7A9B7A]/20 to-transparent rounded-2xl blur-2xl transform scale-105"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img src="/images/woman_in_the_grass.jpg" alt="Coach in welcoming pose" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Image - Seated */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C97857]/10 to-[#7A9B7A]/10 rounded-2xl blur-3xl transform scale-95"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100">
                <img src="/images/about.png" alt="Certified Somatica Coach" className="w-full h-auto" />
              </div>
            </div>

            {/* About Text */}
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-wider text-[#C97857] font-medium mb-3">About</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#2D3748] mb-6">From the Mind Back to the Body</h2>
              <div className="space-y-4 text-[#4A5568] leading-relaxed">
                <p>
                  I'm <strong>Gabriele</strong>, a Trained Somatica Coach and tango dancer working with women who are ready to reclaim their sensual aliveness.
                </p>
                <p>
                  I grew up in religious spaces where pleasure and desire weren't safe to explore. Later, I spent years in academia: brilliant, rigorous work that kept me entirely in my head. I was good at thinking, analyzing, performing. But I was completely disconnected from my body, my sensations, my wants.
                </p>
                <p>
                  Studying Tango I started to trust my body, to be present in sensation and connection, to feel instead of think: it was the doorway back to myself. That embodied practice eventually led me to Somatica, where I discovered how to guide others through the same journey: from conditioning and disconnection back to aliveness.
                </p>
                <p>Now, based in Berlin, I work with women who recognize this pattern in their own lives:</p>
                <ul className="space-y-2 ml-5 list-disc">
                  <li>Deconstructing religious conditioning around pleasure, desire, and the body</li>
                  <li>Moving from being "in your head" to feeling fully alive in your body</li>
                  <li>Learning to trust sensation without guilt, fear, or overthinking</li>
                  <li>Building confidence to name what you want and express it clearly</li>
                </ul>
                <p>
                  This work is grounded, curious, and deeply human. It's not about rejecting where you came from or what you've learned: it's about coming home to what was always yours.
                </p>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-[#2D3748]">
                    <CheckCircle2 className="w-5 h-5 text-[#7A9B7A]" />
                    <span className="font-medium">Trained Somatica Coach</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2D3748]">
                    <CheckCircle2 className="w-5 h-5 text-[#7A9B7A]" />
                    <span className="font-medium">Tango dancer & teacher</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2D3748]">
                    <CheckCircle2 className="w-5 h-5 text-[#7A9B7A]" />
                    <span className="font-medium">Trauma‑informed, consent‑based approach</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2D3748]">
                    <CheckCircle2 className="w-5 h-5 text-[#7A9B7A]" />
                    <span className="font-medium">Working onsite in Berlin and online with clients worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9F7F4] to-[#FDFCFB]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-[#C97857] font-medium mb-3">Is this you?</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#2D3748] mb-4">I Hear This Every Day</h2>
            <p className="text-[#4A5568] text-lg">
              Most of my clients arrive with similar stories. You're not broken, and you're not alone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Shield className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I was taught my body and desires were shameful</h3>
              <p className="text-[#4A5568] leading-relaxed">Old religious messages still control how I feel about pleasure.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Brain className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I'm stuck in my head during intimacy</h3>
              <p className="text-[#4A5568] leading-relaxed">I analyze everything instead of feeling what's happening in my body.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Heart className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I don't know how to enjoy pleasure without guilt</h3>
              <p className="text-[#4A5568] leading-relaxed">Even when I want something, shame shows up and shuts me down.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Compass className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I've intellectualized everything, including desire</h3>
              <p className="text-[#4A5568] leading-relaxed">I can think about what I want, but I can't actually feel it.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Users className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I feel disconnected from my sensual self</h3>
              <p className="text-[#4A5568] leading-relaxed">Years of conditioning left me numb to my own body's wisdom.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Sparkles className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I want to stop performing and start feeling alive</h3>
              <p className="text-[#4A5568] leading-relaxed">I'm ready to reclaim what I was taught to suppress.</p>
            </Card>
          </div>
        </div>
      </section>

{/* How We Work Together Section */}
<section
  id="collaboration"
  className="py-20 bg-gradient-to-br from-[#F9F7F4] to-[#FDFCFB]"
>
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <p className="text-sm uppercase tracking-wider text-[#C97857] font-medium mb-3">
        Collaboration
      </p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#2D3748] mb-4">
        How We Work Together
      </h2>
      <p className="text-[#4A5568] text-lg">
        This work is personal, not transactional. We'll find what fits you best.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto justify-center items-stretch">
      {/* Card 1 */}
      <Card className="p-10 bg-gradient-to-br from-white via-white to-[#F9F7F4]/50 border-[#E8DCC8] hover:shadow-2xl transition-shadow shadow-lg">
        <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">
          Free 30-Minute Discovery Call
        </h3>
        <p className="text-[#4A5568] leading-relaxed mb-6">
          We'll explore what's happening for you, what you're longing for, and
          whether we're a good fit. You can ask me anything about the work. No
          pressure, just an honest conversation.
        </p>
        
        <Button
          className="w-full bg-gradient-to-r from-[#C97857] to-[#B8633E] hover:shadow-lg text-white transition-all shadow-md"
          asChild
        >
          <a
            href="https://cal.com/gabriele-somatic-coach/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Your Call
          </a>
        </Button>        
      </Card>

      {/* Card 2 */}
      <Card className="p-10 bg-gradient-to-br from-white via-white to-[#F9F7F4]/50 border-[#E8DCC8] hover:shadow-2xl transition-shadow shadow-lg">
        <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">
          Personalised packages
        </h3>
        <p className="text-[#4A5568] leading-relaxed mb-6">
          We'll co-create an approach that fits you: single sessions, 5 or
          10-session journeys. I offer sliding scale pricing
          based on your location and situation. We'll figure it out together in
          the discovery call.
        </p>
      </Card>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F9F7F4]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#2D3748] mb-4">Real Transformations</h2>
            <p className="text-[#4A5568] text-sm">
              Names and details changed for privacy, stories shared with consent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-[#F9F7F4] to-white border-l-4 border-[#C97857] shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-[#4A5568] italic leading-relaxed mb-4">
                "I went from feeling numb and checked‑out during sex to actually feeling present and excited in my body.
                I finally know what I want and I'm not ashamed of it anymore."
              </p>
              <p className="text-[#2D3748] font-medium">— A., 34</p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-[#F9F7F4] to-white border-l-4 border-[#C97857] shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-[#4A5568] italic leading-relaxed mb-4">
                "I used to panic around intimacy. Working together slowly unwound that fear. Now I can talk about my
                desires without freezing or shutting down."
              </p>
              <p className="text-[#2D3748] font-medium">— M., 39</p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-[#F9F7F4] to-white border-l-4 border-[#C97857] shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-[#4A5568] italic leading-relaxed mb-4">
                "This work didn't just change my sex life, it changed how I relate to myself. I feel more grounded, more
                honest, and much more alive."
              </p>
              <p className="text-[#2D3748] font-medium">— S., 29</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="booking"
        className="relative py-24 bg-gradient-to-br from-[#C97857] via-[#C97857] to-[#B8633E] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#7A9B7A]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8633E]/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] mb-6 drop-shadow-lg">
              Ready to Reclaim Your Pleasure?
            </h2>
            <p className="text-xl leading-relaxed mb-8 text-white/90 drop-shadow-md">
              One free discovery call can change the way you relate to your body, desire, and intimacy. No obligation,
              no judgment: just an honest conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-[#C97857] hover:bg-[#F9F7F4] hover:shadow-2xl transition-all text-lg px-8 shadow-xl"
              >
                <a
                  href="https://cal.com/gabriele-somatic-coach/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Discovery Call
                </a>
              </Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3748] text-[#E8DCC8] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-2">Gabriele</h3>
              <p className="text-sm">Trained Somatica@ Coach</p>
              <p className="text-sm">Working on site in Berlin and online with clients worldwide</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#collaboration" className="hover:text-white transition-colors">
                    How We Work Together
                  </a>
                </li>
                
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:gabriele.somatic.coach@gmail.com" className="hover:text-white transition-colors">
                    gabriele.somatic.coach@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#4A5568] pt-6 text-sm text-center">
            <p>
              © 2025 Gabriele. All rights reserved. |{" "}
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>{" "}
              &{" "}
              <a href="#" className="hover:text-white transition-colors">
                Imprint
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
