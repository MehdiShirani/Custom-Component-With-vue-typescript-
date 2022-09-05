<template>
    <div>

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
        <footer class="footer p-10 bg-neutral text-neutral-content mt-[30rem]">
            <div>
                <span class="footer-title">Services</span>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </div>
        </footer>
    </div>
</template>