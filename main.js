import './style.css'
import 'alpinejs'

document.querySelector('#app').innerHTML = `
  <div class="container m-auto bg-white max-w-7xl	">
    <div x-data="{ menuOpen: false }">
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

    <main>
      <div class="sm:pb-20 pt-14 pb-16 bg-gray-900 overflow-hidden isolate relative">
        <img src="./img/Banner.jpg" class="object-cover w-full h-full -z-10 inset-0 absolute" alt="">
        <div class="lg:px-8 px-6 max-w-7xl mx-auto">
          <div class="lg:py-56 sm:py-48 max-w-2xl mx-auto">
            <div class="sm:justify-center sm:flex sm:mb-8 hidden">
              <div class="ring-1 text-gray-400 leading-6 text-sm py-1 px-3 rounded-full	relative ring-color-w">
                Announcing our next round of funding.
                <a href="#" class="text-white font-semibold decoration-inherit">
                  <span class="inset-0 absolute"></span>
                  Read more
                  <span>→</span>
                </a>
              </div>
            </div>
            <div class="text-center relative max-w-xl mx-auto">
              <h1 class="text-6xl text-white tracking-tight font-bold ">Deploy to the cloud with confidence</h1>
              <p class="leading-8 text-gray-300 text-lg mt-6">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
              <div class="gap-x-6 justify-center items-center flex mt-10">
                <a href="#" class="bbn text-white font-semibold text-sm py-2.5 px-3.5 bg-indigo-500 rounded-md decoration-inherit hover:bg-indigo-400">Get started</a>
                <a href="#" class="text-white leading-6 font-semibold text-sm decoration-inherit">Live demo <span>→</span></a>
              </div>
            </div>
          </div>
          <div class="lg:grid-cols-5 lg:max-w-none lg:mx-0 sm:gap-x-10 sm:grid-cols-6 sm:max-w-xl gap-y-10 gap-x-8 items-center grid-cols-4 max-w-lg grid mx-auto relative">
            <img class="lg:col-span-1 object-contain w-full col-span-2 max-h-12" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" width="158" height="48">
            <img class="lg:col-span-1 object-contain w-full col-span-2 max-h-12" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" width="158" height="48">
            <img class="lg:col-span-1 object-contain w-full col-span-2 max-h-12" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" width="158" height="48">
            <img class="lg:col-span-1 object-contain w-full col-span-2 max-h-12 sm:col-start-2" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" width="158" height="48">
            <img class="lg:col-span-1 object-contain w-full col-span-2 max-h-12 sm:col-start-auto col-start-2" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" width="158" height="48">
          </div>
        </div>
      </div>
    </main>
  </div>
`

setupCounter(document.querySelector('#counter'))
