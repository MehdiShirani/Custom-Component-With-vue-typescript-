<template>
    <div class="mt-10">
        <section class="my-3 lg:mt-0 lg:mx-10">
            <app-slider :items="items">
                <template #item="{ item }">
                    <div class="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img :src="item.img" alt="Shoes" /></figure>
                        <div class="card-body">
                            <!-- <h2 class="card-title">Shoes!</h2> -->
                            <p>{{ item.label }}</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">
                                    خرید
                                </button>
                            </div>
                        </div>
                    </div>
                </template>
            </app-slider>
        </section>
    </div>
</template>


<script setup lang="ts">
import img1 from '~/assets/img/1.jpg'
import img2 from '~/assets/img/2.jpg'
import img3 from '~/assets/img/3.jpg'
import img4 from '~/assets/img/4.jpg'
import img5 from '~/assets/img/5.jpg'

const items = [
    { id: "1", label: "سیستم عامل Windows 10 21H2  ", img: img1 },
    { id: "2", label: "کوله پشتی لپ تاپ رانیک پرایم مدل RP15 Stylish ", img: img2 },
    { id: "3", label: "هندزفری بلوتوثی انکر مدل Soundcore R100", img: img3 },
    { id: "4", label: "هدست مخصوص بازی پرووان مدل PHG3845", img: img4 },
    { id: "5", label: " دو سیم کارت ظرفیت 64 گیگابایت ", img: img5 },
];
</script>