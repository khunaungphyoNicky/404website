<template>
    <div  class=" flex flex-col items-center">
        <div class="box mt-14 flex justify-center items-center gap-10 p-4 shadow-xl shadow-gray-200 rounded-2xl bg-white">
                <div class="image w-[60%]">
                    <img class=" rounded-xl w-full" src="../assets/screen.jpg" alt="">
                </div>
                <div class="info w-[40%] text-center">
                    <h1 class=" font-bold text-[17px] opacity-80">Choose Your VPN Plan<span class=" font-bold text-sm opacity-80"></span> 🔓</h1>
                        <p class="project-content w-full font-medium text-[17px] opacity-60 mt-4">Our VPN service offers both free and premium plans. The free plan provides secure and anonymous internet access with a limited number of fast servers for basic browsing and streaming needs. Upgrade to the premium plan for access to a wider range of high-speed servers, enhanced security, and unlimited bandwidth. Connect easily to different server locations to protect your online privacy and bypass geo-restrictions. Message us on Messenger or Telegram to learn more and upgrade.</p>
                    <div class="language flex justify-center gap-3 my-5">
                        <div class=" py-3 px-4 bg-white font-bold rounded-md shadow-md shadow-slate-200">Thailand</div>
                        <div class=" py-3 px-4 bg-white font-bold rounded-md shadow-md shadow-slate-200">Singapore</div>
                    </div>
        
                    <div class="demo flex justify-center gap-12 mt-3">
                        <a href="https://www.facebook.com/profile.php?id=100092328172044">
                            <div class="flex items-center gap-1 hover:text-[#147EFB] duration-200 ease-in-out opacity-80 cursor-pointer"> 
                            <h1 class=" font-semibold text-[17px]">Facebook</h1> 
                            <i class="fa-brands fa-facebook text-2xl"></i>
                        </div>
                        </a>
                        <a href="https://t.me/official404vpn">
                            <div class="flex items-center gap-1 hover:text-[#147EFB] duration-200 ease-in-out opacity-80 cursor-pointer"> 
                            <h1 class=" font-semibold text-[17px]">Telegram</h1> 
                            <i class="fa-brands fa-telegram text-2xl"></i>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'BoxPage'
    }
</script>

