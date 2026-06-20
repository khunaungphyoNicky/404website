<template>
  <footer class="bg-brand-900 text-white">
    <div class="section-container px-6 py-12">
      <div class="footer-inner flex justify-between items-start gap-8">
        <div>
          <div class="flex items-center gap-2.5 mb-3">
            <div class="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
              <i class="fa-solid fa-shield-halved text-white text-xs"></i>
            </div>
            <span class="font-bold text-lg">Boost VPN</span>
          </div>
          <p class="text-slate-400 text-sm font-body max-w-xs">
            Fast, secure, and private VPN for everyday browsing.
          </p>
        </div>

        <div class="flex gap-12">
          <div>
            <h4 class="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-3">Navigate</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#home" class="text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#servers" class="text-slate-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#about" class="text-slate-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" class="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-3">Connect</h4>
            <div class="flex gap-4">
              <a
                href="https://web.facebook.com/profile.php?id=61574606755793"
                target="_blank"
                class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors"
              >
                <i class="fa-brands fa-facebook text-lg"></i>
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61574606755793"
                target="_blank"
                class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors"
              >
                <i class="fa-brands fa-telegram text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 mt-10 pt-6 text-center text-sm text-slate-500">
        Copyright &copy; 2026 Boost VPN. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CopyRight',
}
</script>
