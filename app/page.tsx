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
          <div className="flex items-center justify-between h-12 md:h-16">
            {/* Logo/Brand */}
            <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/images/GSC_logo_no_text.png" alt="Gabriele Somatic Coach" className="h-10 md:h-12 w-auto rounded-full" />
              <span className="hidden sm:inline font-serif text-lg text-[#2D3748]">Gabriele Somatic Coach</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-[#4A5568] hover:text-[#C97857] transition-colors font-medium">
                About
              </a>
              <a href="#collaboration" className="text-[#4A5568] hover:text-[#C97857] transition-colors font-medium">
                Your Coaching Journey
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
                  Book Free Discovery Call
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
                Your Coaching Journey
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
                  Book Free Discovery Call
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
                I'm Gabriele, a Trained Somatica® Coach. I help women who were taught to be 'good' in religious spaces, at work, or in relationships, to reconnect to their bodies, desire, and pleasure. I've walked this path. I'll guide you through it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button
                  size="lg"
                  className="bg-[#F9F7F4] text-[#C97857] hover:bg-white hover:shadow-xl transition-all rounded-lg font-medium text-base shadow-lg"
                  asChild
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
          {/* Title Section */}
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-sm uppercase tracking-wider text-[#C97857] font-medium mb-3">About</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#2D3748] mb-6">From the Mind Back to the Body</h2>
          </div>

          {/* Row 1: Image + First 4 Paragraphs */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* About Image - Large */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C97857]/10 to-[#7A9B7A]/10 rounded-2xl blur-3xl transform scale-95"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100">
                  <img src="/images/about.png" alt="Trained Somatica® Coach" className="w-full h-auto" />
                </div>
              </div>

              {/* First 4 Paragraphs */}
              <div className="space-y-4 text-[#4A5568] leading-relaxed">
                <p>
                  I'm <strong>Gabriele</strong>, a Trained Somatica® Coach helping women who want to reconnect to their bodies, desire, and pleasure.
                </p>
                <p>
                  I grew up in religious spaces where it wasn't safe to explore pleasure. Later, I spent years in academia, which kept me entirely in my head. I was disconnected from my body and what I actually wanted.
                </p>
                <p>
                  Although I learned to connect with others through movement as a tango teacher and dancer, I realized I needed deeper tools to transform how I related to my body.
                </p>
                <p>
                  Something opened in me when I moved to Berlin in my early 30s. I started exploring more, but still I kept falling into the same patterns: trying to prove myself worthy, taking care of others, ignoring my own needs. After burning out in a bad relationship, I finally paused and asked what I actually needed to change.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Paragraph 5 + Remaining Content Full Width */}
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4 text-[#4A5568] leading-relaxed">
              <p>
                That's when I found Somatica®. The training transformed me: not just as a coach, but as a person. I learned to trust my body, stop performing, and give myself the permission to experience sides of me that always wanted to breathe. Now I guide women through that same journey.
              </p>

              <p className="pt-4">Now, based in Berlin, I work with women who want to:</p>
              <ul className="space-y-2 ml-5 list-disc">
                <li>Enjoying pleasure and desire without guilt or shame</li>
                <li>Feeling fully alive and present in your body</li>
                <li>Trusting your sensations and what feels good to you</li>
                <li>Expressing what you want with clarity and confidence</li>
              </ul>

              <p className="pt-4">
                This work is grounded, curious, and deeply human. It's not about rejecting who you were—it's about reclaiming what was always there.
              </p>

              <div className="pt-6 space-y-2">
                <div className="flex items-center gap-2 text-[#2D3748]">
                  <CheckCircle2 className="w-5 h-5 text-[#7A9B7A]" />
                  <span className="font-medium">Trained Somatica® Coach</span>
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

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Shield className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I was taught to ignore my body, desires, and needs</h3>
              <p className="text-[#4A5568] leading-relaxed">Old messages don't have to control how I experience pleasure anymore.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Brain className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I'm stuck in my head all day (even during intimacy)</h3>
              <p className="text-[#4A5568] leading-relaxed">I'm tired of analyzing everything. I want to feel my desire, not just think about it.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Heart className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I want to enjoy pleasure without guilt</h3>
              <p className="text-[#4A5568] leading-relaxed">I'm ready for desire to feel natural, not like something I need permission for.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Sparkles className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I want to stop performing and start feeling alive</h3>
              <p className="text-[#4A5568] leading-relaxed">Years of conditioning created distance. I'm ready to reconnect to my body's wisdom and reclaim what I was taught to suppress.</p>
            </Card>
          </div>
        </div>
      </section>

{/* Your Coaching Journey Section */}
<section
  id="collaboration"
  className="py-20 bg-gradient-to-br from-[#F9F7F4] to-[#FDFCFB]"
>
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <p className="text-sm uppercase tracking-wider text-[#C97857] font-medium mb-3">
        Services
      </p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#2D3748] mb-4">
        Your Coaching Journey
      </h2>
      <p className="text-[#4A5568] text-lg">
        This work is about you. We'll find what fits your life, your pace, your needs.
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
          pressure, just a friendly conversation.
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
            Book Free Discovery Call
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
                "I didn't realize how much my upbringing had locked me down. Whole parts of myself were just switched off. Gabriele didn't judge. We gently rewired how I relate to pleasure. It's been profound."
              </p>
              <p className="text-[#2D3748] font-medium">— E., 36</p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-[#F9F7F4] to-white border-l-4 border-[#C97857] shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-[#4A5568] italic leading-relaxed mb-4">
                "Honestly, I was skeptical. I'm a scientist, very logic-driven. But being in my body with Gabriele felt like learning a completely new language. Now I'm actually present during intimacy instead of narrating it to myself."
              </p>
              <p className="text-[#2D3748] font-medium">— R., 41</p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-[#F9F7F4] to-white border-l-4 border-[#C97857] shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-[#4A5568] italic leading-relaxed mb-4">
                "I came completely shut down: years of saying yes when I meant no, pretending to be fine when I wasn't. Working with Gabriele, something shifted. I can feel again, want things. That's way bigger than sex."
              </p>
              <p className="text-[#2D3748] font-medium">— M., 35</p>
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
              no judgment—just a friendly conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-[#C97857] hover:bg-[#F9F7F4] hover:shadow-2xl transition-all text-lg px-8 shadow-xl"
                asChild
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
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-8">
            <div className="flex items-start gap-4">
              <img src="/images/GSC_logo_no_text.png" alt="Gabriele Somatic Coach" className="h-12 w-auto flex-shrink-0 rounded-full" />
              <div>
                <h3 className="font-semibold text-white mb-2">Gabriele Somatic Coach</h3>
                <p className="text-sm">Working on site in Berlin and online with clients worldwide</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:hello@gabrielesomatics.com" className="hover:text-white transition-colors">
                    hello@gabrielesomatics.com
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
