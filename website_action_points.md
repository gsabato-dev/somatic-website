 # gabrielesomatics.com — Implementation Changes

## Instructions for Claude Code

This project uses TSX. Apply the following changes to the relevant TSX source files. Do not modify anything not explicitly listed below. After each change, confirm what was modified.

---

## Change 1 — Hero: Replace closing line

Find this exact text:

```
I've walked this path. I'll guide you through it.
```

Replace with:

```
I know what it takes to make this shift, and I'll guide you through it.
```

---

## Change 2 — About: Add tango bridge, hyperlink, and video placeholder

Find this exact text:

```
Now I guide women through that same journey.
```

Replace with:

```tsx
For over 20 years as a{" "}
<a href="https://gabrieletango.com" className="text-[#C97857] underline hover:text-[#B8633E] transition-colors">
  tango dancer and teacher
</a>
, I worked closely with women navigating their own relationship to movement, sensation, and desire. I saw, again and again, how deeply conditioning; not lack of ability, was holding them back. That's what brought me to Somatica: tools that could reach those blocks where they actually live. Now I guide women through that same journey.

{/* VIDEO PLACEHOLDER: Replace this block with the actual video embed when ready */}
{/* Video concept: Gabriele dancing and teaching tango, with voiceover about */}
{/* what he learned about bodies, desire, and attunement. Target length: 60 to 90 seconds. */}
<div className="mt-8 border border-dashed border-[#C97857] rounded-xl p-12 bg-[#F9F7F4] text-center">
  <p className="text-sm text-gray-400 italic">
    [VIDEO PLACEHOLDER: Gabriele dancing and teaching tango, with voiceover. To be added.]
  </p>
</div>
```

---

## Change 3 — About: Fix broken bullet grammar

Find this exact list:

```
Enjoying pleasure and desire without guilt or shame
Feeling fully alive and present in your body
Trusting your sensations and what feels good to you
Expressing what you want with clarity and confidence
```

Replace each item with:

```
Enjoy pleasure and desire without guilt or shame
Feel fully alive and present in your body
Trust your sensations and what feels good to you
Express what you want with clarity and confidence
```

---

## Change 4 — About: Fix vague Berlin sentence

Find this exact text:

```
Something opened in me when I moved to Berlin in my early 30s.
```

Replace with:

```
Berlin was the first place I felt permission to be curious about who I actually was.
```

---

## Change 5 — Testimonials: New layout with video placeholder and two cards

Replace the entire current testimonials section with the following:

```tsx
{/* Testimonials Section */}
<section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#2D3748] text-center mb-4">
      Real Transformations
    </h2>
    <p className="text-center text-[#4A5568] text-sm mb-10">
      Stories shared with consent. Names and identifying details have been changed to protect privacy.
    </p>

    <div className="flex flex-col md:flex-row gap-8 items-start">

      {/* VIDEO PLACEHOLDER: Replace this block with the actual video element when the file is ready */}
      {/* The video is vertical format, portrait orientation (9:16) */}
      <div className="flex-shrink-0 w-full md:w-[320px] min-h-[560px] bg-[#F0EBE3] rounded-xl border border-[#E8DCC8] flex items-center justify-center">
        <p className="text-sm text-gray-400 italic text-center px-8">
          [VIDEO TESTIMONIAL PLACEHOLDER: vertical format. Upload file when ready.]
        </p>
      </div>

      {/* Two text testimonial cards */}
      <div className="flex flex-col gap-6 flex-1">

        <div className="bg-[#F9F7F4] border-l-4 border-[#C97857] p-8 rounded-r-xl shadow-md">
          <p className="text-[#4A5568] italic leading-relaxed mb-4">
            "Honestly, I was skeptical. I am a scientist, very logic-driven. But being in my body with Gabriele felt like learning a completely new language. Now I am actually present during intimacy instead of narrating it to myself."
          </p>
          <p className="text-[#2D3748] font-semibold">R., 41</p>
        </div>

        <div className="bg-[#F9F7F4] border-l-4 border-[#C97857] p-8 rounded-r-xl shadow-md">
          <p className="text-[#4A5568] italic leading-relaxed mb-4">
            "I came completely shut down: years of saying yes when I meant no, pretending to be fine when I was not. Working with Gabriele, something shifted. I can feel again, want things. That is way bigger than sex."
          </p>
          <p className="text-[#2D3748] font-semibold">M., 35</p>
        </div>

      </div>
    </div>
  </div>
</section>
```

---

## Do Not Touch

- Navigation, logo, and all booking links
- Pain points section ("Is this you?")
- Coaching journey and packages section
- Footer
- Color palette and fonts
- Hero image
- Final CTA section

---

## Action Items for a Later Sprint (do not implement now)

- **About video placeholder:** Add a video placeholder block in the About section after the tango bridge paragraph (after "Now I guide women through that same journey."). Use a dashed border, beige background div with a centered italic placeholder text. Video concept: Gabriele dancing and teaching tango, with voiceover about what he learned about bodies, desire, and attunement. Target length: 60 to 90 seconds.
- **About video:** Record Gabriele dancing and teaching tango with a voiceover about what tango taught him about bodies, desire, and attunement. Target length: 60 to 90 seconds. Upload and replace the placeholder once added.
- **Video testimonial:** Upload the vertical video file from the friend. Replace the placeholder in Change 5 (Testimonials section).
- **Credential check:** Confirm whether "Trained" or "Certified" is the correct Somatica designation, and make it consistent everywhere on the site.