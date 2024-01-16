import './style.css'
import 'alpinejs'

document.querySelector('#app').innerHTML = `
  <div class="container m-auto bg-white max-w-7xl	" x-data="{ menuOpen: false }">
    <header class="z-50 top-0 inset-x-0	absolute max-w-7xl m-auto">
      <nav class="lg:px-8 p-6 justify-between items-center flex ">
        <div class="lg:flex-1 flex">
          <a href="#" class="p-1.5 -m-1.5 decoration-inherit">
            <span class="t">Company</span>
            <img class="w-auto h-8 " src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="">
          </a>
        </div>
        <div class="lg:hidden flex">
          <button @click="menuOpen = !menuOpen" type="button" class="text-gray-400 p-2.5 inline-flex rounded-md	items-center justify-center	-m-2.5">
            <span x-show="menu" class="t">Company</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
          </button>
        </div>
        <div class="lg:gap-x-12 lg:flex hidden" x-data="{ navs: ['Product','Features','Marketplace','Company']}" x-init="() => { navs = [...new Set(navs)]; }">
          <template x-for="nav in navs" :key="nav">
            <a href="#" x-text="nav" class="text-white leading-6 text-sm decoration-inherit font-semibold"></a>
          </template>
        </div>
        <div class="lg:justify-end lg:flex-1 lg:flex hidden">
          <a href="#" class="text-white font-semibold leading-6 text-sm decoration-inherit">Log in<span aria-hidden="true">→</span></a>
        </div>
      </nav>
      <div style="position: fixed;top: 1px;left: 1px;width: 1px;height: 0px;padding: 0px;margin: -1px;overflow: hidden;clip: rect(0px, 0px, 0px, 0px);white-space: nowrap;border-width: 0px;display: none;"></div>
    </header>

    <div>
      <div x-show="menuOpen" @click.away="menuOpen = false" class="fixed inset-0 z-50"></div>
      <div x-show="menuOpen" class="z-50 cit fixed sm:ring-1 sm:max-w-sm py-6 px-6 text-white overflow-y-auto	w-full z-50 right-0 inset-y-0 bg-white">
        <div class="justify-between items-center flex">
          <a href="#" class="p-1.5 -m-1.5 decoration-inherit">
            <span class="t">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="">
          </a>
          <button @click="menuOpen = false" type="button" class="text-gray-700 p-2.5 rounded-md -m-2.5">
            <span class="t">Close menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="flow-root mt-6">
          <div class="-my-6 acc ack">
            <div class="py-6 abs" x-data="{ navs: ['Product', 'Features', 'Marketplace', 'Company'] }">
              <template x-for="nav in navs" :key="nav">
                <a href="#" x-text="nav" class="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3"></a>
              </template>
            </div>
            <div class="py-6">
              <a href="#" class="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
