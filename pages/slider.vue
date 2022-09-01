<template>
    <div>
        <!--#region Hero -->
        <div class="hero">
            <div class="hero-content text-center">
                <div class="max-w-md space-x-4">
                    <h1 class="text-5xl font-bold">Hi</h1>
                    <p class="py-6 text-xl font-medium">
                        All Component With Typescript
                    </p>
                </div>
            </div>

        </div>
        <div class="flex flex-col space-y-3 justify-center items-center">
            <div class="sticky top-0 bg-white py-4 z-10">
                <app-scroll-to-nav :items="CourseTabs"></app-scroll-to-nav>
            </div>
            <template v-for="item in CourseTabs" :key="`course-item-${item.id}`">
                <div class="h-96 w-full flex flex-col items-center justify-center my-96 bg-green-200 p-8">
                    <h2 :id="item.id">{{ item.label }}</h2>
                    <img :src="item.img" alt="ok" width="250" height="400">
                </div>
            </template>
        </div>
    </div>
</template>


<script setup lang="ts">
import img1 from '~/assets/img/1.jpg'
import img2 from '~/assets/img/2.jpg'
import img3 from '~/assets/img/3.jpg'
import img4 from '~/assets/img/4.jpg'


const CourseTabs = [
    { id: "where-to-start", label: "از کجا شروع کنم؟", img: img1 },
    { id: "register-verification", label: "نحوه ثبت‌نام و احراز هویت", img: img2 },
    { id: "sell-buy", label: "خرید و فروش ارز دیجیتال", img: img3 },
    { id: "withdraw-deposit", label: "واریز و برداشت ارز دیجیتال در کیف پول", img: img4 },
    { id: "referral-marketing", label: "طرح دعوت از دوستان در گرندبیتکس", img: img1 },
];
</script>