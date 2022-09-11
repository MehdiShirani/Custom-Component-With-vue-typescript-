<template>
    <div class="flex flex-col space-y-3 justify-center items-center">
        <div class="sticky top-0 bg-white py-4 z-10">
            <app-scroll-to-nav :items="CourseTabs"></app-scroll-to-nav>
        </div>
        <template v-for="item in CourseTabs" :key="`course-item-${item.id}`">
            <div class="h-96 w-full flex flex-col items-center justify-center my-96 bg-green-200 p-8">
                <h2 :id="item.id" class="font-bold text-4xl">{{ item.label }}</h2>
            </div>
        </template>
    </div>
</template>


<script setup lang="ts">
const CourseTabs = [
    { id: "where-to-start", label: "از کجا شروع کنم؟" },
    { id: "register-verification", label: "نحوه ثبت‌نام و احراز هویت" },
    { id: "sell-buy", label: "خرید و فروش ارز دیجیتال" },
    { id: "withdraw-deposit", label: "واریز و برداشت ارز دیجیتال در کیف پول" },
    { id: "referral-marketing", label: "طرح دعوت از دوستان در گرندبیتکس" },
];
</script>