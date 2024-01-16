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

      <div class="sm:mt-56 mt-32">
          <div class="lg:px-8 px-6 max-w-7xl mx-auto">
            <div class="sm:text-center max-w-2xl mx-auto">
              <h2 class="text-indigo-600 leading-7 font-semibold text-base">Everything you need</h2>
              <p class="sm:text-4xl text-gray-900 tracking-tight font-bold text-3xl mt-2">No server? No problem.</p>
              <p class="text-gray-600 leading-8 text-lg mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.</p>
            </div>
          </div>
          <div class="pt-16 overflow-hidden relative">
            <div class="lg:px-8 px-6 max-w-7xl mx-auto">
              <img src="https://tailwindui.com/img/component-images/project-app-screenshot.png" alt="App screenshot" class="ring-color-g bbj ring-1 rounded-xl	jm" width="2432" height="1442">
              <div class="relative">
                <div class="bg-gradient-to-t from-white avi bottom-0 -inset-x-20 absolute"></div>
              </div>
            </div>
          </div>
          <div class="lg:px-8 px-6 max-w-7xl mx-auto mt-16 sm:mt-20 md:mt-24">
            <div class="lg:gap-y-16 lg:gap-x-8 lg:grid-cols-3 lg:max-w-none lg:mx-0 sm:grid-cols-2 text-gray-600 leading-7 text-base gap-y-10 gap-x-6 grid-cols-1 max-w-2xl grid mx-auto">
              <div class="relative pl-9">
                <dt class="text-gray-900 inline font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="text-indigo-600	w-5 h-5 top-1 left-1 absolute">
                    <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd"></path>
                  </svg>
                  Push to deploy.
                </dt>
                <dd class="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</dd>
              </div>
              <div class="relative pl-9">
                <dt class="text-gray-900 inline font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="text-indigo-600	w-5 h-5 top-1 left-1 absolute">
                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd"></path>
                  </svg>
                  SSL certificates.
                </dt>
                <dd class="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
              </div>
              <div class="relative pl-9">
                <dt class="text-gray-900 inline font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="text-indigo-600	w-5 h-5 top-1 left-1 absolute">
                    <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd"></path>
                  </svg>
                  Simple queues.
                </dt>
                <dd class="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.</dd>
              </div>
              <div class="relative pl-9">
                <dt class="text-gray-900 inline font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="text-indigo-600	w-5 h-5 top-1 left-1 absolute">
                    <path fill-rule="evenodd" d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z" clip-rule="evenodd"></path>
                  </svg>
                  Advanced security.
                </dt>
                <dd class="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</dd>
              </div>
              <div class="relative pl-9">
                <dt class="text-gray-900 inline font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="text-indigo-600	w-5 h-5 top-1 left-1 absolute">
                    <path fill-rule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                  </svg>
                  Powerful API.
                </dt>
                <dd class="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
              </div>
              <div class="relative pl-9">
                <dt class="text-gray-900 inline font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="text-indigo-600	w-5 h-5 top-1 left-1 absolute">
                    <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z"></path>
                    <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd"></path>
                  </svg>
                  Database backups.
                </dt>
                <dd class="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.</dd>
              </div>
            </div>
          </div>
        </div>

      <div class="xl:pb-0 sm:pb-24 sm:mt-56 pb-20 bg-gray-900 mt-32 z-10 relative">
        <div class=" overflow-hidden inset-0 absolute">
          <div class="blur-3xl filter trans	absolute top-50 left-50">
            <div class="opacity-25 bg-gradient-to-r to-purple-600 from-pink-500 " style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);     aspect-ratio: 1097/1023;     width: 68.5625rem;"></div>
          </div>
        </div>
        <div class="xl:items-stretch xl:flex-row lg:px-8 sm:gap-y-8 px-6 gap-y-10 gap-x-8 items-center flex-col max-w-7xl flex mx-auto">
          <div class="xl:flex-none xl:w-96 xl:-mb-8 max-w-2xl w-full -mt-8">
            <div class="as xl:mx-0 md:-mx-8 h-full relative">
              <img class="object-cover bg-gray-800 rounded-2xl w-full h-full inset-0 absolute bbj	" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">
            </div>
          </div>
          <div class="xl:py-24 xl:px-16 xl:flex-1 xl:max-w-none max-w-2xl w-full ">
            <figure class="sm:pt-12 pt-6 isolate relative">
              <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" class="h-32 top-0 left-0 absolute" style="stroke: rgb(255 255 255 / 0.2); z-index: -10">
                <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"></path>
                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86"></use>
              </svg>
              <blockquote class="sm:leading-9 sm:text-2xl text-white leading-8 font-semibold text-xl ">
                <p>Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.</p>
              </blockquote>
              <figcaption class="text-base mt-8">
                <div class="text-white font-semibold">Judith Black</div>
                <div class="text-gray-400 mt-1">CEO of Tuple</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      

    </main>
  </div>
`

setupCounter(document.querySelector('#counter'))
