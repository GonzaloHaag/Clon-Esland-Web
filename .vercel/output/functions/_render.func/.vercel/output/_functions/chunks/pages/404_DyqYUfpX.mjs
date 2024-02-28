/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_NgMtA4Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$5 = createAstro();
const $$HeaderMobile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeaderMobile;
  const { pathname } = Astro2.url;
  return renderTemplate`${maybeRenderHead()}<header id="header-nav-mobile" class="fixed w-full flex items-center justify-between md:hidden py-4 px-4 z-50"> <a href="/"> <img class="w-12" src="/logo.png" alt="logo esland"> </a> <svg id="open-nav" class="w-12 h-12 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"></path> </svg> <nav id="nav-mobile" class="fixed w-full min-h-screen inset-0 bg-black/90 flex flex-col justify-center items-center -translate-y-full opacity-0 invisible transition-all duration-200"> <svg id="close-nav" class="w-12 h-12 text-white absolute right-4 top-4 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6m0 12L6 6"></path> </svg> <ul class="flex flex-col text-center gap-y-10"> <li> <a href="/info"${addAttribute(`nav-link ${pathname === "/info" ? "underline underline-offset-4" : ""}`, "class")}>INFO</a> </li> <li> <a href="/archivo"${addAttribute(`nav-link ${pathname === "/archivo" ? "underline underline-offset-4" : ""}`, "class")}>ARCHIVO</a> </li> <li> <a href="/finalistas"${addAttribute(`nav-link ${pathname === "/finalistas" ? "underline underline-offset-4" : ""}`, "class")}>FINALISTAS</a> </li> </ul> <a href="/esland-fortnite" class="my-button-shadow w-fit px-12 py-2 border border-solid border-white rounded-full mt-10">
ISLA ESLAND
</a> </nav> </header> `;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/HeaderMobile.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  console.log(pathname);
  return renderTemplate`${maybeRenderHead()}<header id="header-nav-desktop" class="fixed w-full hidden md:block top-0 py-4 z-50 px-8 2xl:px-0"> <div class="max-w-7xl mx-auto flex items-center justify-between gap-16"> <a href="/"> <img src="/logo.png" alt="logo esland" class="w-10"> </a> <nav class=""> <ul class="flex items-center gap-x-14 text-xl font-semibold"> <a href="/info"${addAttribute(`hover:underline ${pathname === "/info" ? "text-orange-500 underline underline-offset-4" : ""}`, "class")}>INFO</a> <a href="/archivo"${addAttribute(`hover:underline ${pathname === "/archivo" ? "text-orange-500 underline underline-offset-4" : ""}`, "class")}>ARCHIVO</a> <a href="/finalistas"${addAttribute(`hover:underline ${pathname === "/finalistas" ? "text-orange-500 underline underline-offset-4" : ""}`, "class")}>FINALISTAS</a> </ul> </nav> <a href="/esland-fortnite" class="my-button-shadow w-fit px-4 py-2 border border-solid border-white rounded-full">
ISLA ESLAND
</a> </div> </header> ${renderComponent($$result, "HeaderMobile", $$HeaderMobile, {})}`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900"> <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"> <div class="md:flex md:justify-between"> <div class="mb-6 md:mb-0 flex flex-col items-center justify-center gap-y-5 md:gap-y-0"> <a href="/" class="flex items-center"> <img src="/logo.png" class="w-12 -mt-12 md:w-20 md:-mt-44" alt="Esland logo"> </a> <div class="flex items-center gap-x-5"> <a> <svg class="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm14 6H9l.2 2H17l-.6 6.6-4.2 1.4-4.3-1.4-.3-3h2l.2 1.4 2.4.8 2.3-.7.3-3H7.4L7 6h10.4L17 8Z"></path> </svg> </a> <a href="https://www.linkedin.com/in/gonzalo-haag/" target="_blank" class="hover:scale-105 transition-all duration-300"> <svg class="w-8 h-8 md:w-12 md:h-12 text-white hover:text-sky-500 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"></path> <path d="M7.2 8.8H4v10.7h3.2V8.8Z"></path> </svg> </a> <a> <svg class="w-8 h-8 md:w-12 md:h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M11.8 5.7A4.8 4.8 0 0 0 7 10a3.4 3.4 0 0 1 2.7-1.7c1.7 0 3 2 3.8 2.6a5.7 5.7 0 0 0 5.4 1c2-.7 2.9-3 3.1-4-1 1.4-2.4 2.2-4.3 1.2-1.2-.6-2.1-3.4-6-3.3Zm-5 6.3A4.8 4.8 0 0 0 2 16.2a3.4 3.4 0 0 1 2.7-1.7c1.7 0 3 2 3.8 2.6a5.7 5.7 0 0 0 5.4.9c2-.7 3-2.9 3.1-4-1 1.4-2.4 2.3-4.2 1.3-1.3-.7-2.2-3.4-6-3.3Z"></path> </svg> </a> </div> </div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"> <div> <h2 class="mb-6 text-sm font-semibold uppercase text-white">WEB MAP</h2> <ul class=" text-gray-400 font-medium flex flex-col gap-y-5"> <li> <a href="/" class="hover:underline">Home</a> </li> <li> <a href="/info" class="hover:underline">Info</a> </li> <li> <a href="/archivo" class="hover:underline">Archivo</a> </li> <li> <a href="/finalistas" class="hover:underline">Finalistas</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold uppercase text-white">Sigueme</h2> <ul class=" text-gray-400 font-medium"> <li class="mb-4"> <a href="https://github.com/GonzaloHaag" target="_blank" class="hover:underline ">Github</a> </li> <li> <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Legal</h2> <ul class=" text-gray-400 font-medium"> <li class="mb-4"> <a href="https://premiosesland.com/aviso-legal" target="_blank" class="hover:underline">Aviso legal</a> </li> </ul> </div> </div> </div> <hr class="my-6  sm:mx-auto border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"> <span class="text-sm sm:text-center text-gray-400">© 2024 Gonzalo Haag. All Rights Reserved.
</span> </div> </div> </footer>`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon-esland.ico">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})}  ${renderSlot($$result, $$slots["default"])}  ${renderComponent($$result, "Footer", $$Footer, {})}  </body></html>`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Not found", "description": "Page not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]"> <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1> <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
Página no encontrada
</div> <button class="mt-5"> <a class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"> <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span> </a><a href="/" class="relative block px-8 py-3 bg-[#1A2238] border border-current">
Ir a inicio
</a> </button> </main> ` })}`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/404.astro", void 0);

const $$file = "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
