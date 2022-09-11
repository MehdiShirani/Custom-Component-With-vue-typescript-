<template>
    <div :class="{
        'bg-gray-100':isOpen && !noStyle,
        'py-3 px-3.5 t-row justify-between cursor-pointer rounded-lg transition-all bg-gray-100 lg:hover:bg-gray-200':
        !noStyle
    }" @click="toggle" v-bind="$attrs">
        <slot name="title" :is-open="isOpen" />
        <div class="mr-3" v-if="withTitleIcon">{{ isOpen ? "-" : "+" }}</div>
    </div>
    <div ref="target" class="px-1.5 h-0 overflow-y-hidden">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { useDebounceFn, useEventListener } from "@vueuse/core";

const props = defineProps({
    noStyle: {
        type: Boolean,
        default: false
    },
    withTitleIcon: {
        type: Boolean,
        default: true,
    },
})
const target = ref<HTMLElement | null>(null)
const progress = ref(0)
const isOpen = computed(() => unref(progress) !== 0)

let animation: any;

const setAnimation = () => {
    animation = gsap.to(unref(target), {
        height: 'auto',
        overflow: "hidden",
        paused: true,
        duration: 0.3,
        onUpdate() {
            progress.value = animation.progress();
        },
    })
}
onMounted(() => {
    setAnimation();
});

const toggle = () => {
    if (animation.progress() === 0) {
        animation?.play();
    } else {
        animation?.reverse();
    }
};
const debouncedFn = useDebounceFn(() => {
    animation.progress(0).invalidate();
}, 500);
useEventListener("resize", debouncedFn);
</script>