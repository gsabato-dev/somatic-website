import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, CheckCircle2, Heart, Brain, Shield, Compass, Sparkles, Users } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C97857] via-[#C97857] to-[#B8633E]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white z-10">
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-6 text-balance drop-shadow-lg">
                Reclaim Your Sexual Confidence
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90 drop-shadow-md">
                Feeling disconnected from your desire? Trapped by shame? Afraid to ask for what you want? You don't have
                to stay stuck. Through embodied, trauma‑informed coaching, you can reclaim your pleasure, confidence,
                and authentic freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button
                  size="lg"
                  className="bg-[#F9F7F4] text-[#C97857] hover:bg-white hover:shadow-xl transition-all rounded-lg font-medium text-base shadow-lg"
                  asChild
                >
                  <a href="#booking">Book Free Discovery Call</a>
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:text-white/90 hover:bg-white/10 font-medium"
                  asChild
                >
                  <a href="#journey" className="flex items-center gap-2">
                    How it works
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Image - Floor Pose */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7A9B7A]/20 to-transparent rounded-2xl blur-2xl transform scale-105"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img src="/images/image-20-2817-29.png" alt="Coach in welcoming pose" className="w-full h-auto" />
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
                <img src="/images/image-20-2812-29.png" alt="Certified Somatica Coach" className="w-full h-auto" />
              </div>
            </div>

            {/* About Text */}
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-wider text-[#C97857] font-medium mb-3">About</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#2D3748] mb-6">Certified Somatica Coach</h2>
              <div className="space-y-4 text-[#4A5568] leading-relaxed">
                <p>
                  I'm <strong>[YOUR NAME]</strong>, a Certified Somatica sex and relationship coach specializing in
                  helping individuals reclaim authentic sexual confidence and pleasure.
                </p>
                <p>The people I work with are often:</p>
                <ul className="space-y-2 ml-5 list-disc">
                  <li>Disconnected from their own desire</li>
                  <li>Trapped by shame or fear</li>
                  <li>Unsure how to ask for what they want</li>
                  <li>Longing to feel alive and at home in their body again</li>
                </ul>
                <p>
                  Through embodied, trauma‑informed practices, I help you move from disconnection and shame to genuine
                  freedom, pleasure, and confidence. This work is deeply human—rooted in presence, consent, and
                  curiosity.
                </p>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-[#2D3748]">
                    <CheckCircle2 className="w-5 h-5 text-[#7A9B7A]" />
                    <span className="font-medium">Certified Somatica Coach</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2D3748]">
                    <CheckCircle2 className="w-5 h-5 text-[#7A9B7A]" />
                    <span className="font-medium">Trauma‑informed, consent‑based approach</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2D3748]">
                    <CheckCircle2 className="w-5 h-5 text-[#7A9B7A]" />
                    <span className="font-medium">Working online with clients worldwide</span>
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
              <Heart className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I don't know what I want sexually</h3>
              <p className="text-[#4A5568] leading-relaxed">It's hard to feel desire, let alone express it.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Brain className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I feel disconnected from my body</h3>
              <p className="text-[#4A5568] leading-relaxed">During intimacy I'm in my head, not in my sensations.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Shield className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I'm afraid to ask for what I want</h3>
              <p className="text-[#4A5568] leading-relaxed">I worry I'll be rejected, judged, or too much.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Compass className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">Shame stops me from enjoying pleasure</h3>
              <p className="text-[#4A5568] leading-relaxed">Old messages and conditioning still run the show.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Users className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I feel numb or disinterested in sex</h3>
              <p className="text-[#4A5568] leading-relaxed">
                Something inside feels switched off, and I miss feeling alive.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-white/80 border-[#E8DCC8] hover:border-[#C97857] hover:shadow-xl transition-all shadow-md">
              <Sparkles className="w-8 h-8 text-[#C97857] mb-4 drop-shadow-sm" />
              <h3 className="font-semibold text-[#2D3748] mb-2 text-lg">I want to feel confident and alive again</h3>
              <p className="text-[#4A5568] leading-relaxed">I know there's more possible for me than this.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works / Journey Section */}
      <section
        id="journey"
        className="py-20 relative bg-white overflow-hidden"
        style={{
          backgroundImage: `url('/images/image-20-2813-29.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D3748]/85 via-[#2D3748]/80 to-[#2D3748]/85"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#C97857] font-medium mb-3">Process</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-white">Your Journey With Me</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Journey Steps */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C97857] to-[#B8633E] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    1
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg flex-1">
                  <h3 className="text-xl font-semibold text-[#2D3748] mb-2">Free Discovery Call</h3>
                  <p className="text-[#4A5568] leading-relaxed">
                    A 30‑minute call where we explore what's happening for you, what you'd like to change, and whether
                    we're a good fit. No pressure, no judgment.
                  </p>
                </div>
              </div>

              {/* Connector */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 flex justify-center">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-[#C97857] to-[#E8DCC8]"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C97857] to-[#B8633E] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    2
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg flex-1">
                  <h3 className="text-xl font-semibold text-[#2D3748] mb-2">Experience Somatic Coaching</h3>
                  <p className="text-[#4A5568] leading-relaxed">
                    In one or two sessions, you get a felt sense of the work—slowing down, noticing your body, and
                    beginning to shift patterns around shame, fear, or numbness.
                  </p>
                </div>
              </div>

              {/* Connector */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 flex justify-center">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-[#C97857] to-[#E8DCC8]"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C97857] to-[#B8633E] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    3
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg flex-1">
                  <h3 className="text-xl font-semibold text-[#2D3748] mb-2">Deep Transformation Work</h3>
                  <p className="text-[#4A5568] leading-relaxed">
                    We create a coaching arc tailored to you. Together we process old stories, experiment with new ways
                    of being, and build embodied confidence in your desire.
                  </p>
                </div>
              </div>

              {/* Connector */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 flex justify-center">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-[#C97857] to-[#E8DCC8]"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C97857] to-[#B8633E] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    4
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg flex-1">
                  <h3 className="text-xl font-semibold text-[#2D3748] mb-2">Integration & Support</h3>
                  <p className="text-[#4A5568] leading-relaxed">
                    You bring this into real life—dating, relationships, solo exploration. We can continue with ongoing
                    support at the pace that fits you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Together Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9F7F4] to-[#FDFCFB]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-[#C97857] font-medium mb-3">Collaboration</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#2D3748] mb-4">How We Work Together</h2>
            <p className="text-[#4A5568] text-lg">
              Investment varies based on your location and what you need. We'll decide together in a free discovery
              call.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-white via-white to-[#F9F7F4]/50 border-[#E8DCC8] hover:shadow-2xl transition-shadow shadow-lg">
              <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">Free Discovery Call</h3>
              <p className="text-[#4A5568] leading-relaxed mb-6">
                Thirty minutes to talk openly about what's going on, what you're longing for, and what kind of support
                would feel right. We'll also talk about how I work and you can ask anything—there's no obligation to
                continue.
              </p>
              <Button
                className="w-full bg-gradient-to-r from-[#C97857] to-[#B8633E] hover:shadow-lg text-white transition-all shadow-md"
                asChild
              >
                <a href="#booking">Schedule Discovery Call</a>
              </Button>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white via-white to-[#F9F7F4]/50 border-[#E8DCC8] hover:shadow-2xl transition-shadow shadow-lg">
              <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">Personalized Coaching Packages</h3>
              <p className="text-[#4A5568] leading-relaxed mb-6">
                After the call, we co‑create a plan that fits you. That might look like a few intro sessions, a deeper
                multi‑session journey, or ongoing monthly support.
                <br />
                <br />
                Because clients work with me from different parts of the world (EU, US, Asia, LATAM), investment is
                tailored to your location and situation. We'll talk transparently about this in the discovery call so it
                feels fair and doable.
              </p>
              <Button
                className="w-full bg-gradient-to-r from-[#C97857] to-[#B8633E] hover:shadow-lg text-white transition-all shadow-md"
                asChild
              >
                <a href="#booking">Talk About Options</a>
              </Button>
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
              no judgment—just an honest conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-[#C97857] hover:bg-[#F9F7F4] hover:shadow-2xl transition-all text-lg px-8 shadow-xl"
              >
                Book Free Discovery Call
              </Button>
              <Link
                href="mailto:hello@yourname.de"
                className="text-white hover:text-white/80 underline underline-offset-4"
              >
                Prefer to write first? Email me.
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3748] text-[#E8DCC8] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-2">[YOUR NAME]</h3>
              <p className="text-sm">Certified Somatica Coach</p>
              <p className="text-sm">Working online with clients worldwide</p>
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
                  <a href="#journey" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-white transition-colors">
                    Book a Call
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:hello@yourname.de" className="hover:text-white transition-colors">
                    hello@yourname.de
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
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
              © 2025 [Your Name]. All rights reserved. |{" "}
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
