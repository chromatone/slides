<script setup lang="ts">
/**
 * Properties:
 * - growSize: number
 * - growX: number - percent
 * - growY: number - percent
 * - growFollow: boolean - follow mouse, false to completely disable
 */
// @ts-expect-error missing types
import { currentRoute } from '@slidev/client/logic/nav.ts'
import { onKeyDown, useEventListener, useIdle, useMouse, whenever } from '@vueuse/core'
import { computed, onMounted, ref, watchEffect } from 'vue'

const { x, y } = useMouse()
const { idle } = useIdle(2000)
const pressed = ref(false)
const scaleFactor = computed(() => pressed.value ? 0.4 : 1)
const formatter = computed(() => (currentRoute.value.meta?.slide as any)?.frontmatter || {})

const container = ref<HTMLDivElement>()

onMounted(() => {
  container.value = document.querySelector('#slide-container')
})

useEventListener('click', (e) => {
  if (formatter.value.growFollow != null)
    return
  const path = e.composedPath() as HTMLElement[]
  if (!path.find(el => el.id === 'slide-container'))
    return
  const el = path.find(el => ['A', 'BUTTON', 'IMG', 'VIDEO'].includes(el.tagName?.toUpperCase()))
  if (!el)
    pressed.value = true
})
whenever(idle, () => {
  pressed.value = false
})
onKeyDown('Escape', () => {
  pressed.value = false
})

const mouseX = computed(() => {
  if (!container.value)
    return 0
  return ((x.value - container.value.offsetLeft) / container.value.clientWidth) * 100
})

const mouseY = computed(() => {
  if (!container.value)
    return 0
  return ((y.value - container.value.offsetTop) / container.value.clientHeight) * 100
})

const size = computed(() => 520 * +(formatter.value.growSize || 1) * scaleFactor.value)
const blur = computed(() => 10 * +(formatter.value.growSize || 1) * scaleFactor.value)
const followMouse = computed(() => formatter.value.growFollow || pressed.value)
const left = computed(() => (followMouse.value ? mouseX.value : formatter.value.growX ?? '80'))
const top = computed(() => (followMouse.value ? mouseY.value : formatter.value.growY ?? '30'))

function lerp(min, max, i) {
  return min + i * (max - min);
}

const circles = computed(() => Array(formatter.value.growSteps || 6).fill(true).map((el, i) => {
  const t = lerp(0, 1, i / (formatter.value.growSteps || 6));
  return {
    backgroundColor: `hsl(${(i * 60 + 30) / (formatter.value.growSteps || 6)}, 100%, 60%)`,
    top: `${lerp(formatter.value?.growY || 0, mouseY.value, t)}%`,
    left: `${lerp(formatter.value?.growX || 0, mouseX.value, t)}%`,
    width: `${100 + i * 100}px`,
    height: `${100 + i * 100}px`,
    zIndex: 100 - i,
    filter: `blur(${i * 4}px)`
  };
}));


const transitionClass = ref('')
function updateClass() {
  transitionClass.value = followMouse.value ? '' : 'transition-all duration-600 ease-in-out'
}

watchEffect(() => {
  if (!followMouse.value)
    updateClass()
})

</script>

<template>
  <div flex w-full h-full z-2 relative style="z-index: -2;"
    :style="{ backgroundColor: formatter?.bg_color || 'hsla(160,70%,40%,1)' }">

    <span w-20 h-20 absolute pointer-events-none rounded-full op85 dark:op90 v-for="(circle, c) in circles" :key="c"
      @transitionend="updateClass" :style="{ ...circle, transform: 'translate(-50%, -50%)', }"></span>

    <!-- <span z-1 absolute pointer-events-none rounded-full op85 dark:op90 :style="{
      backgroundColor: '#FCF200',
      top: `${mouseY}%`,
      left: `${mouseX}%`,
      width: `${size}px`,
      height: `${size}px`,
      transform: 'translate(-50%, -50%)',
      filter: `blur(${0}px)`,
    }" />

    <span z-1 transition-all duration-600 ease-in-out absolute pointer-events-none rounded-full op75 dark:op50 :style="{
      backgroundColor: 'hsl(0,50%,50%)',
      top: `${top}%`,
      left: `${left}%`,
      width: `${size / 3}px`,
      height: `${size / 3}px`,
      transform: 'translate(-50%, -50%)',
      filter: `blur(${0}px)`,
    }" /> -->

  </div>
</template>
