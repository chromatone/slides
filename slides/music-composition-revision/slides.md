---
themeConfig:
  primary: '#555'
layout: cover
highlighter: shiki
css: unocss
transition: fade-out
blur: 0
favicon: https://chromatone.center/media/logo/click-logo.svg
---

# Music Composition Revision

---

<h1 flex="~ col">
<div font-bold text-7xl>Chromatone</div>
<div flex="~ gap3" text-5xl mt-2 items-center>Visual Music Language</div>
</h1>

<div uppercase text-sm tracking-widest>
Denis Starov
</div>

<div abs-br mx-10 my-12 flex="~ col" text-sm text-right>
  <div>Cleverse office, Bangkok, Thailand</div>
  <div text-sm opacity-50>22 Sep. 2023</div>
</div>

---
layout: iframe-right
url: https://chromatone.center
class: my-cool-content-on-the-left
---

---
layout: intro
growX: 80
growY: 90
style: 'padding-left: 8rem;'
---

# Denis Starov

<div class="leading-10 opacity-80">
Passionate open-source web-developer<br>
Studying and composing music for 7 years<br>
Author and developer of the Chromatone system<br>
<br>
</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/davay42" target="_blank" class="border-none! font-300">davay42</a></div>
  <div i-ri-twitter-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/davay42" target="_blank" class="border-none! font-300">davay42</a></div>
  <div i-la-telegram op50 ma text-xl ml4/>
  <div><a href="https://t.me/starov" target="_blank" class="border-none! font-300">starov</a></div>
</div>

<img src="https://avatars.githubusercontent.com/u/6184449?v=4" rounded-full w-45 abs-tr mt-30 mr-60/>

<div flex="~ gap2">

</div>

<!--

-->

---
layout: center
growX: 50
growY: 120
growSize: 1.5
---

# Chromatone
## Visual Music Language

<!--
Let's start by talking about Developer Experience. These years we have heard about Developer Experience more and more often. Frameworks have put a lot of effort into improving Developer Experience, to make our work more efficient and productive, and of course, a better experience. Here I'd like to divide the big concept into different parts and see what we have done to really make a difference from a framework's perspective.
-->

---
growX: 50
growY: 0
---

# Chromatone.center

<div flex="~" justify-evenly items-center h-90>
<v-clicks>

<div flex="~ col" items-center gap-2>
<div text-4xl>Theory</div>
<div text-base op50>Music theory course</div>
</div>

<div flex="~ col" items-center gap-2>
<div text-4xl>Practice</div>
<div text-base op50>Interactive web-apps</div>
</div>

<div flex="~ col" items-center gap-2>
<div text-4xl>Academy</div>
<div text-base op50>Projects and events</div>
</div>

<div flex="~ col" items-center gap-2>
<div text-4xl>Shop</div>
<div text-base op50>Stickers and memos</div>
</div>

</v-clicks>
</div>

<!--
The first thing I am going to pick is "Responsiveness".

In Nuxt 3, we switched our default bundler to Vite, the tool well-known for its instant hot module replacement, or so call HMR. It allows you to see the change from your code to the app in nearly no time, and creates a great workflow and feedback loop.

On the server-side rendering, we use `vite-node`, the same engine that powers Vitest, to do the HMR on the server-side.

And finally, we introduced Nitro along with Nuxt 3, apart from many awesome features it provides, it also offers hot reload for server APIs on dev time. Remember the time you need to restart your node process every time you change to your backend API? It's no longer the case with Nitro!

Combining all these tools, we are able to make your app reactive for any changes you make, no matter whether it's client code, ssr, or server-side APIs.
-->

---

# Theory

<v-clicks>

- 11 modules
- \>100 articles
- Basic knowledge
- Tightly packed

</v-clicks>

---
growX: 80
growY: 80
---

# Practice

<v-clicks>

- \>50 apps
- MIDI
- Audio
- Animations
- UI

</v-clicks>

---
growX: 0
growY: 90
---

# Academy

<iframe v-click src="https://chromatone.center/academy/"
  onload="this.style.visibility = 'visible';"
  scale-90 origin-top-right absolute right-0 top-0 bottom-0 w="75%" h="110%"
  style="mix-blend-mode: lighten;filter:contrast(1.15);visibility:hidden;"
/>

<v-clicks>

- Projects

- Events

</v-clicks>

---
growX: 0
growY: 50
---

# Shop <span v-click> is updated!</span>

<v-clicks>

- Stickers

- Memos

- Printable digital goods

</v-clicks>

---
layout: center
growX: 20
growY: 0
---

## And now the main part

<v-clicks>

## Tech stack

</v-clicks>
<!--
So, by having the context of Nuxt, let's take one step forward -
-->

---

# What will we do today

<div text-2xl>
<v-clicks>

- Vitepress
- Vue 3
- VueUse
- MIDI.js
- Tone.js
- Elementary.js

</v-clicks>
</div>

<!--

-->

---
layout: center
class: text-center
growX: 50
growY: 50
growSize: 0.4
---

<h1>Demo time!</h1>

<!--
Let's go demo time!
-->

---
layout: center
class: text-center
growX: 50
growY: 0
---

# One more thing

---
layout: iframe
url: https://chromatone.center
scale: 0.5
growFollow: false
---

---
layout: center
class: text-center
growX: 10
growY: 90
---

# Open Source

<Repo name="chromatone/chromatone.center" />

---
layout: center
class: text-center
growX: 50
growY: -20
---

<pre text-3xl gap-4 flex font-mono class="select-none!">
<span text-gray:50>pnpm</span>
<span text-green>i</span>
<span text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500>use-chromatone</span>
</pre>

---
layout: intro
class: text-center pb-5
growX: 50
growY: 120
---

# Thank You

Slides on [chromatone.center](https://chromatone.center)

<!--
That's all for my talk. The slides can be found on my website. Thank you!
-->

<script setup></script>
