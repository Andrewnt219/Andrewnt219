if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,i)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return r;default:return e(a)}})).then(e=>{const a=i(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/05d954cf.65c42472689d77461984.js",revision:"4ad832b061ef2c88a584b2c592f8397c"},{url:"/_next/static/chunks/1bfc9850.5e2f8b2b24f62e66149e.js",revision:"79c8e2f4c80738844b45a92e0c224607"},{url:"/_next/static/chunks/252f366e.fed53e64a3bc119843d3.js",revision:"37247c64c87f940337dc970fa956c755"},{url:"/_next/static/chunks/2b580c1342bb76dc64f4bdb25e5c007751e1fdb2.1e19b3f8ddc46c4f759a.js",revision:"34a7e8cffbcf3ff691d6485dfdb00a43"},{url:"/_next/static/chunks/3ef630e34cd10ba68f9d468ac363ff81c534e1e9.4760e177b2452e733661.js",revision:"a6073b0c13f24c86f92b27d0e419bff2"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.fd1d9f1ecffcc32a2f51.js",revision:"1af8bf2eb2027e39f7e8b3a2c819c5b2"},{url:"/_next/static/chunks/framework.de5b927bb3a122da5a2a.js",revision:"59bb0a3271ddef6462ff12a22cebcf20"},{url:"/_next/static/chunks/main-b0940a068bcc1cb7868d.js",revision:"c4880f81f4e8b34d72a6c2344725dba6"},{url:"/_next/static/chunks/pages/_app-82a3694d685b20e9920b.js",revision:"cd2ed8c4db90987d0dcaf03388779f12"},{url:"/_next/static/chunks/pages/_error-f44acfa8f05336dd5793.js",revision:"4dff8efaaddaf4c958acbed6020a0491"},{url:"/_next/static/chunks/pages/about-39e8eef89e14811df48d.js",revision:"3b2d4ddb1e414ae529531ca168010190"},{url:"/_next/static/chunks/pages/index-8aa7523f22fa364f4b81.js",revision:"1f53ba97ddc0b45c03356cc6b8a18403"},{url:"/_next/static/chunks/pages/projects-eb9cda9803afb0df0b3b.js",revision:"4dbcebfb37c809d8019707f5fa6af71d"},{url:"/_next/static/chunks/pages/projects/%5Bname%5D-a287ca4da90f587c8de6.js",revision:"bc2c6265e6054fd65368165cd392c739"},{url:"/_next/static/chunks/pages/projects/project-name-3bc1d22daae8b87a2961.js",revision:"12e96d809a01ea7df23ee27682b8a0f0"},{url:"/_next/static/chunks/polyfills-4ec52b626dfcb48a3cc1.js",revision:"2bc9d4278d85526a4ca2e695d23a1ad4"},{url:"/_next/static/chunks/webpack-488dc228921f1fdbc0e7.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/fd03bf1560f99ce9c9ac.css",revision:"74a86e2d241d05d49f844ac1a9591e30"},{url:"/_next/static/f6yDlewRy6A6aqm80rpiw/_buildManifest.js",revision:"e174db967710088de4a794ae5de9f4d7"},{url:"/_next/static/f6yDlewRy6A6aqm80rpiw/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/images/carousel-1-320-c176667b89624ba2afecbef6c6849209.webp",revision:"75bd5bbac603651193c70e0f96ec9203"},{url:"/_next/static/images/carousel-1-640-13371d3000b2c0fd90d8b6f53def4254.webp",revision:"aca30f9bb0e6d42e63335558ba0bd6bb"},{url:"/_next/static/images/carousel-1-960-cd41f1958f5e45eed2f9e32e42ceccf9.webp",revision:"c4ce975aea73d975f6922e28045153ae"},{url:"/_next/static/images/carousel-1-994-4f6c2b06287ba6a6012dc545d2b48c64.webp",revision:"cf3b16b1794065f5ba078cdfce26e55c"},{url:"/_next/static/images/carousel-2-1200-bb9093501106ba3da8d22e075e4adcfc.webp",revision:"eefa1e2effb0586bacc3ff9bbd3d8e4b"},{url:"/_next/static/images/carousel-2-1800-826f3b5609d828439aa481071a503f60.webp",revision:"529839e42e7b654c4380d0fd7630cb0e"},{url:"/_next/static/images/carousel-2-2400-28e3345842dfabd8f19e746d3a84c839.webp",revision:"fdecba39c3d133ddf3fe28b253cfe695"},{url:"/_next/static/images/carousel-2-320-02b11783e5ea8b6ad121c1c9f8fa6d46.webp",revision:"dfa3f349042958a9ab5b29f80a4e2d4f"},{url:"/_next/static/images/carousel-2-640-a8852d5bc7270f14bea516c2f1530b24.webp",revision:"3d76d7da3b26c1535fd58a0f91011b4c"},{url:"/_next/static/images/carousel-2-960-5db8c383e9dfce789c2a589760379c33.webp",revision:"078793af7dd3eeb9d93dac29047bcb6a"},{url:"/_next/static/images/carousel-3-1200-186dafacca2dbd8fa1b1d8f9eaebae27.webp",revision:"83bd2d6734b246f9e65e0721d71b61f7"},{url:"/_next/static/images/carousel-3-1280-9e771ab0483d246b5e3e0ed13dd4b318.webp",revision:"e84ba9b65de9967c6bc98ac7f00e7a43"},{url:"/_next/static/images/carousel-3-320-a6d1b4d305fc2b1739b7bc0f615caf8a.webp",revision:"1b93d21390f8f31b544bbac62673fc1b"},{url:"/_next/static/images/carousel-3-640-2c177bbae0f85da6fdb5d9877494d277.webp",revision:"68e5a4eca36ba756143518841e316f46"},{url:"/_next/static/images/carousel-3-960-dc1b7d81dd96e70e8c5eb649307adeac.webp",revision:"fc69415f8f6f1fc73981a5c11a7539cb"},{url:"/_next/static/images/carousel-4-1200-0535670e48b36dd044a085c6c2cd1049.webp",revision:"b8e01dbc8423c065e7bfcdb2aa288c00"},{url:"/_next/static/images/carousel-4-1218-bac4fad2d5aea9256c7c2506b9fc8f0c.webp",revision:"53d9eeba7fd9640d6ec8a236782ba04e"},{url:"/_next/static/images/carousel-4-320-950e7a1ad38c9fc7faa5acc46a4c45e2.webp",revision:"3d70caea36feab6c7cb9e2cb77999648"},{url:"/_next/static/images/carousel-4-640-e034e494577d34f24a619c09a8fe3e1e.webp",revision:"c5919c2ffea54ea4d14c6a1a8cdea338"},{url:"/_next/static/images/carousel-4-960-99452ca5c39ebc036c62ed3b8fd572bb.webp",revision:"9f2743491f182ab51393d5c18c68f8be"},{url:"/_next/static/images/carousel-5-1200-477a12ad37a0e68ff6099aaec27272fd.webp",revision:"9b929b7fa3762749b02d14e72b27a935"},{url:"/_next/static/images/carousel-5-1712-38587da0a9a15ef87610add782ef09a6.webp",revision:"ba2c694c87eb0c1515f8a62c0bb07926"},{url:"/_next/static/images/carousel-5-320-9f5316c6959b4cde40d3c5256aa1111d.webp",revision:"9786a22d4ac0150748f3fc848078c5c1"},{url:"/_next/static/images/carousel-5-640-c6fa721b9e1f1cc88517bb199ae08992.webp",revision:"35e22b42c7bd0fceaed1b9350f96913d"},{url:"/_next/static/images/carousel-5-960-526c2915cbd3473aa3fe7a763592b2f6.webp",revision:"3b3033859f83b8d26151bdb3f71c877c"},{url:"/_next/static/images/carousel-6-1200-0538b376de89b4b591eee4110fe2ade2.webp",revision:"95059aab607819ca1ec694c0ae35169b"},{url:"/_next/static/images/carousel-6-1800-2ea539160f70f62408a4235f00158e2f.webp",revision:"a8699759a60ca80fb5e8eae90abb9433"},{url:"/_next/static/images/carousel-6-2371-91e7d5993460a0145880670bc50c59b5.webp",revision:"f38a015cee2a49f06af2e10b47b38835"},{url:"/_next/static/images/carousel-6-320-f4a097807f426eed98a378f7c9943fbd.webp",revision:"f9207b881f582f41bb58c4326c2d73db"},{url:"/_next/static/images/carousel-6-640-b7a1b59b3144e6c4254bfd198f00db37.webp",revision:"56680eeac94eb516ba60a89ee4c8ac73"},{url:"/_next/static/images/carousel-6-960-9e307a353fa205a7ff4cc26f88ab51cf.webp",revision:"15aa69d337b14057caa996709dca0b61"},{url:"/_next/static/images/carousel-7-1200-8748c71986c3aa1361f3c07fa81f5fc7.webp",revision:"16c2a27c91de41b3dbc2a69602407860"},{url:"/_next/static/images/carousel-7-1800-02894c0b58d5fddb0071b2e67a17201c.webp",revision:"551c1b8d480deda355c169704dbe325b"},{url:"/_next/static/images/carousel-7-2400-171513fb47c49b5a56207001ade09cc9.webp",revision:"433235f4b1d3aa2039deafb939922ef5"},{url:"/_next/static/images/carousel-7-320-040b82787e25507b2956b17cbadff6a4.webp",revision:"a3b83e60a6ce3fbece5d5e05ef465ccf"},{url:"/_next/static/images/carousel-7-640-6c563f6400cb5dbc8b4a36bd6b9ed98f.webp",revision:"b858beb240bb1ae8bb7a38a9f40b671f"},{url:"/_next/static/images/carousel-7-960-5cc04d54e854cd36261ad0d8006fb099.webp",revision:"9c70d99b18596164dc9b2867f4a342bd"},{url:"/android-chrome-192x192.png",revision:"ce644a4b18950a3dcb30585a187bb2fe"},{url:"/android-chrome-512x512.png",revision:"1f45bcaac2375d17f13a87b7759c47db"},{url:"/apple-touch-icon.png",revision:"bdf80a442213041ca48e1c1e74ead6f8"},{url:"/browserconfig.xml",revision:"0f181289d3870795841c7b87e64ef043"},{url:"/favicon-16x16.png",revision:"155e747089b6fd36ed1f408192726305"},{url:"/favicon-32x32.png",revision:"22ac2c5898c20aa00b4da878ef57b941"},{url:"/favicon.ico",revision:"531aad0f7512963340bfb5677b488850"},{url:"/fonts/montserrat-v14-latin-300.eot",revision:"07f07c400674ac6bb098cdfa1e010388"},{url:"/fonts/montserrat-v14-latin-300.svg",revision:"37e5a6ab8868e40ed278bf2c618df8a7"},{url:"/fonts/montserrat-v14-latin-300.ttf",revision:"64c4fc09e36d7b7fd39dbf78290240b3"},{url:"/fonts/montserrat-v14-latin-300.woff",revision:"8dc95fab9cf98d02ca8d76e97d3dff60"},{url:"/fonts/montserrat-v14-latin-300.woff2",revision:"7c3daf12b706645b5d3710f863a4da04"},{url:"/fonts/montserrat-v14-latin-700.eot",revision:"affb7169c35c766a60129b857ca1713e"},{url:"/fonts/montserrat-v14-latin-700.svg",revision:"f9c153756ccbb300635344c250f4520d"},{url:"/fonts/montserrat-v14-latin-700.ttf",revision:"7432889d57c68a13a4984a756d923a07"},{url:"/fonts/montserrat-v14-latin-700.woff",revision:"80f10bd382f0df1cd650fec59f3c9394"},{url:"/fonts/montserrat-v14-latin-700.woff2",revision:"39d93cf678c740f9f6b2b1cfde34bee3"},{url:"/fonts/montserrat-v14-latin-900.eot",revision:"052575c67f998b5c000924204c404cbd"},{url:"/fonts/montserrat-v14-latin-900.svg",revision:"a58176a7458bdb52ef7827b782e69b88"},{url:"/fonts/montserrat-v14-latin-900.ttf",revision:"c2640c21891450340d225c504e9f74c0"},{url:"/fonts/montserrat-v14-latin-900.woff",revision:"26d42c9428780e545a540bbb50c84bce"},{url:"/fonts/montserrat-v14-latin-900.woff2",revision:"58cd789700850375b834e8b6776002eb"},{url:"/fonts/montserrat-v14-latin-regular.eot",revision:"5cc74ef8a4c422084726eb9dd1163b82"},{url:"/fonts/montserrat-v14-latin-regular.svg",revision:"f3fef7e587e6c436df1d7985b2a90ada"},{url:"/fonts/montserrat-v14-latin-regular.ttf",revision:"6a9e85ac9247f5848db957b873c62e0c"},{url:"/fonts/montserrat-v14-latin-regular.woff",revision:"8102c4838f9e3d08dad644290a9cb701"},{url:"/fonts/montserrat-v14-latin-regular.woff2",revision:"bc3aa95dca08f5fee5291e34959c27bc"},{url:"/fonts/raleway-v17-latin-700.woff",revision:"f7099854b1367c866413ed6501a44db4"},{url:"/fonts/raleway-v17-latin-700.woff2",revision:"50190ce3293df1494483a3d75e526cbc"},{url:"/fonts/raleway-v17-latin-italic.woff",revision:"641594c699246f132341ae18d7c9d149"},{url:"/fonts/raleway-v17-latin-italic.woff2",revision:"678114468cbb833bf557e5355dae955d"},{url:"/fonts/raleway-v17-latin-regular.woff",revision:"9e5200baf0d789b223bf9100e0c788fa"},{url:"/fonts/raleway-v17-latin-regular.woff2",revision:"bbd0d88b3160ebc0ec3e831fbc6d78f4"},{url:"/images/carousel/carousel-1.webp",revision:"4e595bbcf5c130a2acb46465ab9e3591"},{url:"/images/carousel/carousel-2.webp",revision:"fa85e2437ac50b5684c16527bb35fd31"},{url:"/images/carousel/carousel-3.webp",revision:"4f591dd0b6ed708df9cef3ff78dd3344"},{url:"/images/carousel/carousel-4.webp",revision:"d4386e27f75589423c9de40ae6ccb517"},{url:"/images/carousel/carousel-5.webp",revision:"05568a7d7a0021a8f1343e45f379602d"},{url:"/images/carousel/carousel-6.webp",revision:"d4a57ab262aa9c84254841729110f85d"},{url:"/images/carousel/carousel-7.webp",revision:"ad0e184fb3955b746eabe821b2b634a3"},{url:"/imgs/stars.webp",revision:"3b130d452fedc56d3f65f10e3e13ef3d"},{url:"/imgs/twinkling.webp",revision:"2d4fdfc5d9a0a0e5cca5adfefea894c0"},{url:"/manifest.json",revision:"b256e4d48b6cb9f31d2bad5990a347a0"},{url:"/maskable_icon.png",revision:"e458a071018678b7da64d797bc875330"},{url:"/mstile-144x144.png",revision:"90789d50ab93a7512d4c75bf8141e5d4"},{url:"/mstile-150x150.png",revision:"833daeb332c47da146ec6fe0b91afcd6"},{url:"/mstile-310x150.png",revision:"c8f524970334b3e1964d8d8e053a92cc"},{url:"/mstile-310x310.png",revision:"1323334a93510a6fecb32ea41ec9d5a9"},{url:"/mstile-70x70.png",revision:"eff0fb454190e606bcfcc6556f9a0518"},{url:"/safari-pinned-tab.svg",revision:"2281aeeeb24a8ca1d0d3023295b4282e"},{url:"/site.webmanifest",revision:"438f48fc8606e68a8995dbacfa270b9e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
