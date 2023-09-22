---
themeConfig:
  primary: '#5d8392'
layout: cover
highlighter: shiki
css: unocss
transition: fade-out
blur: 0
favicon: https://chromatone.center/media/logo/click-logo.svg
growX: 20
growY: 40
growBlur: 0.0001
---
<div flex>
<img w-60 src="/aux.svg"/>
<img absolute mt-28 ml-10 w-40 src="/logo.svg" />
<div  mt-20>
<h1 flex="~ col" gap-2>
<div text-xl font-normal>Live coding meetup #2</div>

<div font-bold text-7xl>Chromatone</div>
<div flex="~ gap3" text-5xl mt-2 items-center>Coding Colorful Sounds</div>
</h1>

<div uppercase text-lg tracking-widest>
Denis Starov
</div>
</div>

</div>

<div  abs-br mx-10 my-14 flex="~ col" text-xl text-right>
  <div>Cleverse office, Bangkok, Thailand</div>
  <div text-lg opacity-50>22 Sep. 2023</div>
</div>

---
layout: intro
growX: 75
growY: 36
style: 'padding-left: 6rem;'
growBlur: 3
---

<h10 text-60px font-bold> Denis Starov</h10>

<div leading-10 opacity-90 text-2xl mt-2>
Engineer, designer and philosopher<br>
Passionate open-source web-developer<br>
Studying and composing music for 10 years<br>
Author and developer of the Chromatone system<br>
<br>
</div>

<div my-10 text-2xl w-min flex="~ gap-1" items-center justify-center>

  <ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/davay42" target="_blank" class="border-none! ">davay42</a></div>
  <ri-twitter-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/davay42" target="_blank" class="border-none! ">davay42</a></div>
  <la-telegram op50 ma text-xl ml4/>
  <div><a href="https://t.me/starov" target="_blank" class="border-none! ">starov</a></div>
  
</div>

<img src="https://avatars.githubusercontent.com/u/6184449?v=4" rounded-full w-45 abs-tr mt-30 mr-40/>

<div flex="~ gap2">

</div>

<!--

-->

---
layout: center
growX: 50
growY: 35
growSize: 0.2
growDot: 3
---

<img mx-auto w-60 src="/logo.svg" />

<div text-center font-bold text-60px> Chromatone</div>
<div text-center text-32px>Visual Music Language</div>

<!--
Let's start by talking about Developer Experience. These years we have heard about Developer Experience more and more often. Frameworks have put a lot of effort into improving Developer Experience, to make our work more efficient and productive, and of course, a better experience. Here I'd like to divide the big concept into different parts and see what we have done to really make a difference from a framework's perspective.
-->

---
growX: 50
growY: 10
layout: center
growDot: 0.1
growOut: true
growSize: 1.2
growBlur: 1
growSteps: 24
---
<div flex text-3xl flex-col gap-4 items-center text-center>
<v-clicks>
<div> Colorful notes</div>
<div> Geometrical rhythms</div>
<div> Audio-visual feedback systems</div>
<div> New ways to communicate music </div>
<div> Open-source online research hub</div>
</v-clicks>
</div>
---
growX: 50
growY: 19.5
growSize: 0.8
---

<img mx-auto mt-7 w-20 src="/logo.svg" />
<div text-4xl mt-6 text-center> chromatone.center</div>

<div flex="~" justify-evenly items-center h-60>
<v-clicks>

<div flex="~ col" items-center gap-2>
<div text-4xl font-bold>Theory</div>
<div text-base op80>Music theory materials</div>
</div>

<div flex="~ col" items-center gap-2>
<div text-4xl font-bold>Practice</div>
<div text-base op80>Interactive web-apps</div>
</div>

<div flex="~ col" items-center gap-2>
<div text-4xl font-bold>Academy</div>
<div text-base op80>Projects and events</div>
</div>

<div flex="~ col" items-center gap-2>
<div text-4xl font-bold>Shop</div>
<div text-base op80>Stickers and memos</div>
</div>

</v-clicks>
</div>

---
growX: 10
growY: 10
---

# Theory

<v-clicks>

- 10 modules
- \>100 articles
- Basic knowledge
- Tightly packed

</v-clicks>

<iframe v-click rounded-xl m-8 src="https://chromatone.center/theory/"
  onload="this.style.visibility = 'visible';"
  scale-90 origin-top-right absolute right-0 top-0 bottom-0 w="75%" h="100%"
/>

---
growX: 10
growY: 80
---

# Practice

<v-clicks>

- \>50 apps
- MIDI
- Synthesis
- Analysis
- Visualization

</v-clicks>

<iframe v-click rounded-xl m-4 src="https://chromatone.center/practice/"
  onload="this.style.visibility = 'visible';"
  scale-90 origin-top-right absolute right-0 top-0 bottom-0 w="75%" h="100%"
/>

---
growX: 90
growY: 10
growSteps: 12
growSize: 0.7
growBlur: 0.5
---

# Academy

<v-clicks>

- Projects
- Events
- Partners
- Tutors
- Students

</v-clicks>

<iframe v-click rounded-xl m-4 src="https://academy.chromatone.center/"
  onload="this.style.visibility = 'visible';"
  scale-90 origin-top-right absolute right-0 top-0 bottom-0 w="75%" h="105%"
/>

<!-- ## Where is Chromatone now

Chromatone is an international music education platform for everyone to gain knowledge and new pleasant experience. The knowledge is stored in the articles and apps, but it's compressed and dryed out to be light and compact. But there's so much to dive in! And that's where guidance may be incredibly helpful.

We're building from the ground up, educating ourselves and the ones who want to participate in the early development. While Chromatone is developed for more than 4 years it's still a long way to have it finished. It becomes more of a process of distilling and transfering knowledge and joy.

Chromatone as the music itself is totally international and doesn't rely on any language (except JavaScript 😇). Our goal is to create an international community of teachers, learners and practitioners of our visual music approach. It has already recommended itself in music theory educational video production and the time has come for it expand worldwide. Project by project.

## Where are we going

First step is to establish the convenient way for tutors to meet their students. Then educators will start creating their own content with all the tools available. In any language and for any age and any level of prior musical knowledge.

Second step is for all the educated people to gather together and play some amazing live music. Once you're in, you know it's a whole experience bringing deep joy of being in sync with each other! For that we hold meetups and other events. It's our testing ground for new music collaboration formats.

Third step is to make such musical gatherings a part of the new post-scarcity culture worldwide. Chromatone makes music much easier for visual people to learn and practice, so it enables significantly more musicians in any given place. So there's always someone to jam with! 🤩 And everyone should be able to meet other musicians and improvise together for a couple of hours at least once a month. 👏 -->

---
growX: 68
growY: 50
---

# Shop

<v-clicks>

- Stickers
- Memos
- Printable designs

</v-clicks>

<iframe v-click rounded-xl m-4 src="https://shop.chromatone.center/"
  onload="this.style.visibility = 'visible';"
  scale-90 origin-top-right absolute right-0 top-0 bottom-0 w="75%" h="105%"
/>

---
layout: center
growX: 50
growY: 0
class: [text-center]
---
<div text-4xl mb-4>Now let's see</div>

<v-clicks>

<div text-6xl font-bold> How is it built</div>

</v-clicks>
<!--
So, by having the context of Nuxt, let's take one step forward -
-->

---
growBlur: 0.000001
growSteps: 12
growSize: 2
growX: 50
growY: 50
growOut: true
growDot: 0.1
layout: center
---
# Tech stack

<div grid grid-cols-4 p-4 gap-4>
<v-clicks>

<div p-4 flex items-center justify-center><img w-30 src="/vitepress.svg" /></div>
<div p-4 flex items-center justify-center><img w-30 src="/vue.svg" /> </div>
<div p-4 flex items-center justify-center><img w-30 p-4 src="/vueuse.svg" /> </div>
<div p-4 flex items-center justify-center><img w-30 src="/unocss.svg" /> </div>

<div p-2 flex items-center justify-center><img w-40 src="/webmidijs.svg" /> </div>
<div p-2 flex items-center justify-center><img w-24 src="/tone.png" /> </div>
<div p-2 flex items-center justify-center><img w-36 src="/elementary.svg" /> </div>
<div p-2 flex items-center justify-center><img w-36 src="/directus.svg" /> </div>

</v-clicks>
</div>
<!--

-->

---
layout: center
growX: 50
growY: 0
class: [text-center]
---

<logos-github-icon mb-4 text-8xl/>

<h1 v-click>Open source</h1>

<h2 v-click mb-4> MIT licence</h2>

<a v-click text-2xl  target="_blank" href="https://github.com/chromatone/chromatone.center">
github.com/chromatone/chromatone.center
</a>
<!--
Let's go demo time!
-->

---
layout: center
class: [text-center]
growX: 50
growY: 0
---

<logos-npm mb-4 text-8xl />

<h1 v-click>Import and use</h1>

<h2 v-click mb-4>NPM package available</h2>
<a v-click text-2xl  target="_blank" href="https://www.npmjs.com/package/use-chromatone">
npmjs.com/package/use-chromatone
</a>

---
layout: center
class: text-center
growX: 50
growY: -20
---

<pre bg-dark-300 p-8 rounded-xl text-3xl gap-4 flex font-mono class="select-none!">
<span text-gray:50>pnpm</span>
<span text-green>i</span>
<span text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500>use-chromatone</span>
</pre>

<a text-2xl target="_blank" href="https://chromatone.center/support/docs/modules.html"> Documentation </a>

---
growX: 50
growY: 19.5
growSize: 0.8
growBlur: 4
class: [text-center]
---

<img mx-auto mt-7 w-20 src="/logo.svg" />
<div text-4xl mt-6 text-center font-bold> Get involved!</div>

<div flex="~" justify-evenly items-start mt-20>
<v-clicks>

<div flex="~ col" items-center gap-2>
<logos-instagram-icon text-2xl/>
<div text-2xl font-bold>Follow and share</div>
<div text-base op80>Follow and mention us</div>
<a target="_blank" href="https://instagram.com/chromatone.center">@chromatone.center</a>
</div>

<div flex="~ col" items-center gap-2>
<logos-reddit-icon text-2xl/>
<div text-2xl font-bold>Discuss</div>
<div text-base op80>Participate in our subreddit</div>
<a target="_blank" href="https://www.reddit.com/r/chromatone/">r/chromatone.center</a>
</div>

<div flex="~ col" items-center gap-2>
<bxs-donate-heart text-2xl />
<div text-2xl font-bold>Donate</div>
<div text-base op80>Become a GitHub sponsor</div>
<a target="_blank" href="https://github.com/sponsors/chromatone">sponsors/chromatone</a>
</div>

<div flex="~ col" items-center gap-2>
<logos-github-icon text-2xl/>
<div text-2xl font-bold>Contribute</div>
<div text-base op80>Fix bugs, add features</div>
<a target="_blank" href="https://github.com/chromatone">github/chromatone</a>
</div>

</v-clicks>
</div>

---
layout: intro
class: text-center pb-5
growX: 50
growY: 120
---

# Now let's chat
### Tell me your interests about the stack

Slides at [slides.chromatone.center](https://slides.chromatone.center/coding-colorful-sounds/)

<!--
That's all for my talk. The slides can be found on my website. Thank you!
-->

---
growX: 50
growY: 50
layout: center
class: [text-center]
---
<div flex flex-col gap-8>
<h1>Coding colorful sounds</h1>
<a v-click text-2xl href="https://github.com/chromatone/chromatone.center">github.com/chromatone/chromatone.center</a>

</div>
<script setup></script>
