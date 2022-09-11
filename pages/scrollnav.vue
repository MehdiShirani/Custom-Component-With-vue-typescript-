<template>
    <div class="max-w-6xl mx-auto">
        <div class="flex flex-col space-y-10 justify-center items-center">
            <div class="sticky w-full top-0 bg-white py-2 z-10 my-10">
                <app-scroll-to-nav :items="CourseTabs"></app-scroll-to-nav>
            </div>
            <template v-for="item in CourseTabs" :key="`course-item-${item.id}`">
                <div class="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg sm:col-span-4 lg:col-span-5">
                    <img :id="item.id" :src="item.img" :alt="item.id" class="object-cover object-center" />
                </div>
            </template>
        </div>
        <div class="flex justify-center items-center h-screen font-medium text-lg">Footer</div>
    </div>
</template>


<script setup lang="ts">
import img1 from '~/assets/img/1-scroll.jpg'
import img2 from '~/assets/img/2-scroll.jpg'
import img3 from '~/assets/img/3-scroll.jpg'
import img4 from '~/assets/img/4-scroll.jpg'
const CourseTabs = [
    { id: "watch", label: "ساعت هوشمند", img: img1 },
    { id: "digital", label: "دیجیتال", img: img2 },
    { id: "mobile", label: "موبایل", img: img3 },
    { id: "laptop", label: "لپتاپ", img: img4 },
];
</script>