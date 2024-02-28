/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_NgMtA4Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_DyqYUfpX.mjs';

const $$Astro = createAstro();
const $$Finalistas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Finalistas;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Finalistas - Esland Web", "description": "description p\xE1gina finalistas - Esland web" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative bg-center bg-cover bg-no-repeat h-[90vh] w-full max-w-[100vw] mb-24"${addAttribute(`clip-path:polygon(0 0, 100% 0, 100% 85%,50% 100%,50% 100%,0% 85%);background-image:url('/bg-finalistas.webp')`, "style")}> <div class="absolute inset-0 w-full h-full flex justify-center flex-col gap-y-10 items-start  p-4 2xl:p-0 max-w-7xl mx-auto"> <h1 class="text-3xl md:text-5xl font-semibold animate-fade-up text-balance">
FINALISTAS DE LA 3ª EDICIÓN DE LOS PREMIOS ESLAND
</h1> <p class="text-xl text-balance animate-fade-up">El periodo de votaciones ha finalizado. Descubre a los creadores más votados de este año por la comunidad hispanohablante del contenido en directo.</p> <a target="_blank" href="https://premiosesland.com/finalistas?show=finalistas" class="my-button-shadow border border-solid border-white py-2 px-8 w-fit rounded-full animate-fade-up">
VER FINALISTAS
</a> </div> </div> ` })}`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/finalistas.astro", void 0);

const $$file = "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/finalistas.astro";
const $$url = "/finalistas";

export { $$Finalistas as default, $$file as file, $$url as url };
