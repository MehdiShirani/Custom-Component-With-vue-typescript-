<template>
    <div class="container max-w-[95%] mx-auto">

        <Head>
            <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
                rel="stylesheet" type="text/css" />
        </Head>
        <div class="navbar bg-base-100 mb-10">
            <div class="flex-1">
                <nuxt-link :to="{ name: 'index' }" class="btn btn-ghost normal-case text-xl">Home</nuxt-link>
                <nuxt-link :to="{ name: 'scrollnav' }" class="btn btn-ghost normal-case text-xl">Scroll Nav</nuxt-link>
                <nuxt-link :to="{ name: 'slider' }" class="btn btn-ghost normal-case text-xl">Slider</nuxt-link>
            </div>
        </div>
        <nuxt-page></nuxt-page>
    </div>
</template>