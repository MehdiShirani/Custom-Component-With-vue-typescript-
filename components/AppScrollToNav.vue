<template>
  <app-slider
    :items="items"
    item-container-class="flex-shrink-0"
    :end="activeItemIndex"
    :arrows="false"
  >
    <template #item="{ item, index }">
      <div
        role="button"
        :class="{
          'text-primary divide-y-2 divide-red-400': index === activeItemIndex,
        }"
        @click="scrollToID(item.id)"
      >
        {{ item.label }}
      </div>
    </template>
  </app-slider>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const props = withDefaults(
  defineProps<{ items: { id: string; label: string }[]; offset?: number }>(),
  { offset: 140 }
);

const route = useRoute();
const router = useRouter();

onMounted(() => {
  gsap.registerPlugin(ScrollToPlugin);
  if (route.hash) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: route.hash, offsetY: props.offset },
    });
  }
});
let scrollTo: any;
const scrollToID = (id: string) => {
  router.replace({ hash: "#" + id });
  scrollTo = gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#" + id, offsetY: props.offset, autoKill: true },
  });
};
const { y } = useWindowScroll();
watch(y, () => {
  for (let i = props.items.length - 1; i >= 0; i--) {
    const item = props.items[i];
    const el = document.getElementById(item.id);
    if (el && el?.getBoundingClientRect().top <= props.offset + 2) {
      router.replace({ hash: "#" + item.id });
      return;
    }
    if (i == 0) {
      router.replace({ hash: "" });
    }
  }
});

const activeItemIndex = computed(() => {
  return props.items.findIndex((item) => "#" + item.id === route.hash);
});
</script>
