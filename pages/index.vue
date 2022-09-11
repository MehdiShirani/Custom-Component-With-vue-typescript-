<script setup lang="ts">
import { ref } from 'vue'
import { ButtonVariantEnum, ToastEnum } from '~/types'

const modal = ref(false)
const title = ref("")


const { showToast } = useToast();
const showMessage = () => {
    showToast({ message: "با موفقیت انجام شد.", type: ToastEnum.success });
};
</script>

<template>

    <div class="bg-base-200">
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
        <div class="max-w-2xl mx-auto space-y-4">
            <div class="flex gap-8">
                <app-button :variant="ButtonVariantEnum.error" @click="modal = true" class="btn-outline">
                    Open Modal
                </app-button>
                <app-button :variant="ButtonVariantEnum.warning" @click="showMessage">
                    Show Toast
                </app-button>
            </div>
            <app-collapse>
                <template #title>افزایش قیمت بیت کویین</template>
                <h2 class="leading-relaxed">وقتی قیمت بیت کوین افزایش میابد، انگیزه استخراج برای استخراج کنندگان افزایش
                    میابد. به طور کلی بیشتر
                    شدن استخراج کنندگان به معنی افزایش هش ریت شبکه است که به معنای افزایش سختی شبکه و در نتیجه سهم کمتر
                    هر ماینر در آن دوره است. اما این معمولا در طی یک دوره زمانی اتفاق می افتد. برنامه ریزی و ساخت فارم
                    های استخراج ماه ها به طول می انجامد و مستلزم سرمایه گذاری اولیه بالایی است. به این معنی که هش ریت
                    جدید به تدریج و با تاخیر زمانی آنلاین میشود.</h2>
            </app-collapse>
            <app-text-input label="عنوان" name="title" v-model="title" placeholder="عنوان را وارد نمایید" />
        </div>
        <!--#endregion Hero -->
        <app-modal v-model="modal">
            <template #title>
                ویرایش کاربران
            </template>
            <hr class="my-6">
            <div class="grid grid-cols-4">
                <div class="col-span-2">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">مبلغ را وارد نمایید</span>
                        </label>
                        <label class="input-group">
                            <input type="text" placeholder="0.01"
                                class="input input-bordered !hover:outline-none focus:outline-0" />
                            <span>BTC</span>
                        </label>
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">مبلغ را وارد نمایید</span>
                        </label>
                        <label class="input-group">
                            <input type="text" placeholder="0.01"
                                class="input input-bordered !hover:outline-none focus:outline-0" />
                            <span>ریال</span>
                        </label>
                    </div>
                </div>
            </div>
        </app-modal>
    </div>
</template>