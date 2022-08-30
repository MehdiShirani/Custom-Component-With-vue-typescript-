<script setup lang="ts">
import { watch, ref, toRef } from 'vue'

//Props | emit
const props = defineProps({
    modelValue: {
        type: [Number, Boolean],
        default: false
    },
    title: {
        type: String,
        default: ''
    },
    eager: {
        type: Boolean,
        default: false
    }
})
const emits = defineEmits(['update:modelValue'])

//Composabel 
useFixBody(toRef(props, 'modelValue'))

const checkboxModel = ref(!!props.modelValue)
watch(() => props.modelValue, (value) => {
    checkboxModel.value = !!value
})

//Method
const closeModal = () => {
    emits("update:modelValue", false)
}
</script>


<template>
    <input v-model="checkboxModel" type="checkbox" class="modal-toggle">
    <div class="modal" @click="closeModal">
        <div v-if="eager || modelValue" class="modal-box relative overflow-hidden w-11/12 max-w-2xl" @click.stop="">
            <section class="flex items-center justify-between">
                <slot name="title">
                    <span class="font-bold">{{  title  }}</span>
                </slot>
                <span class="cursor-pointer text-xl select-none text-gray-500" @click="closeModal">&#x2715</span>
            </section>
            <div class="overflow-y-auto max-h-[85vh] lg:max-h-[80vh] scrollbar-thin">
                <slot />
            </div>
        </div>
    </div>
</template>