<template>
    <div class="py-[150px] flex items-center justify-center bg-white about-page">
        <div class="max-w-[950px] flex gap-14 about w-full">
            <div class="about-image w-[410px] h-[363px] relative">
                <img class=" rounded-xl w-full h-full"
                    src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt="">
                <div class=" work absolute bottom-[-25px] right-[-25px] p-16 rounded-full bg-white border border-gray-200">
                    <img class=" w-12"
                        src="https://www.stefantopalovic.com/static/media/working-emoji.c5325f52b5be329995a5.png" alt="">
                </div>
            </div>
            <div class="about-details w-[490px] min-h-[356px]">
                <h1 class=" text-[#147EFB] font-bold text-lg">ABOUT</h1>
                <h1 class=" font-bold text-[27px] mt-2 opacity-80">Reliable VPN Security 📍</h1>
                <p class=" font-normal text-[17px] opacity-70 mt-4 about-content">As a versatile VPN, we offer both free and premium plans designed to meet your browsing needs. Our free plan provides essential features, including unlimited bandwidth and access to a selection of global servers, ensuring basic online security. The premium plan unlocks advanced options like high-speed servers, enhanced encryption, and 24/7 priority support, delivering a superior experience. Whether you opt for our free or premium service, you can trust our VPN to protect your privacy, keep your data secure, and provide a smooth, uninterrupted connection.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
}
</script>