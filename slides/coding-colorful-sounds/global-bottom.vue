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
  <div w-full h-full z-2 relative style="z-index: -2;"
    :style="{ backgroundColor: formatter?.bg_color || 'hsla(160,70%,40%,1)' }">
    <span z-1 absolute pointer-events-none rounded-full op85 dark:op50 :class="transitionClass" :style="{
      backgroundColor: '#FCF200',
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      transform: 'translate(-50%, -50%)',
      filter: `blur(${0}px)`,
    }" @transitionend="updateClass" />
    <!-- <span z-1 absolute pointer-events-none rounded-full op75 dark:op50 :class="transitionClass" :style="{
      backgroundColor: 'hsl(0,50%,50%)',
      top: `${10}%`,
      left: `${30}%`,
      width: `${size / 3}px`,
      height: `${size / 3}px`,
      transform: 'translate(-50%, -50%)',
      filter: `blur(${0}px)`,
    }" @transitionend="updateClass" /> -->

  </div>
</template>
