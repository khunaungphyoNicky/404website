<template>
    <div class="py-[110px] flex items-center bg-white contact-page">
        <div class="max-w-[950px] flex mx-auto w-full contact-main">
            <div class="contact">
                <div class="contact-title">
                    <h1 class="text-[#147EFB] font-bold text-lg uppercase">contact</h1>
                    <h1 class=" font-bold text-2xl mt-2 opacity-80">Reach out to our team for support or inquiries. 👇</h1>
                </div>
                <div class="contact-info my-10 flex gap-10">
                    <div class="location flex gap-6 items-center">
                        <div class="p-5 rounded-full border border-gray-200"><i
                                class="fa-solid fa-map-location-dot text-[#147EFB] text-3xl opacity-80"></i></div>
                        <div class="address">
                            <h1 class="font-bold text-lg opacity-80">Location</h1>
                            <p class="contact-box">Bangkok, Thailand</p>
                        </div>
                    </div>
                    <div class="location flex gap-6 items-center ">
                        <div class="p-5 rounded-full border border-gray-200"><i
                                class="fa-solid fa-envelope text-[#147EFB] text-3xl opacity-80"></i></div>
                        <div class="address">
                            <h1 class="font-bold text-lg opacity-80">Mail</h1>
                            <p class="contact-box">fone3057@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactPage'
}
</script>

