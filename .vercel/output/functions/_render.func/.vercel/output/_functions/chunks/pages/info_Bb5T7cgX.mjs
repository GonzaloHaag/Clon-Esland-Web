/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_NgMtA4Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeroContainer } from './archivo_CxkG5fhr.mjs';
import { $ as $$Layout } from './404_DyqYUfpX.mjs';

const $$Astro = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Info - Esland Web", "description": "description p\xE1gina info - esland web" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroContainer", $$HeroContainer, { "bgImage": "/info-hero.webp" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl md:text-5xl font-semibold animate-fade-up text-center text-balance">
LOS PREMIOS ESLAND
</h1> ` })} <main> <section class="pt-40 pb-24"> <div class="p-4 xl:p-0 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-10"> <div class="flex flex-col gap-y-2 h-full justify-between"> <p class="text-4xl font-semibold text-balance">
Un reconocimiento único para creadores, creadoras y
                        comunidades que buscan su lugar en el mundo del
                        entretenimiento en directo.
</p> <p class="text-balance text-lg">
Los Premios ESLAND son una iniciativa privada promovida
                        por el célebre streamer TheGrefg y buscan apoyar y
                        reconocer la creación de contenido en el ámbito
                        hispanohablante.
</p> <p class="text-balance text-lg">
ESLAND es el acrónimo de ESPAÑA, LATINOAMÉRICA Y
                        ANDORRA, tres localizaciones geográficas que comparten
                        el idioma que las une más allá de cualquier frontera, ya
                        sea física o virtual.
</p> </div> <div> <img src="/info-img1.webp" alt="info-img" class="w-full h-full object-cover object-center"> </div> </div> </section> <section class="bg-blue-950 py-32"> <div class="p-4 xl:p-0 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-10"> <div><img class="" src="/info-img4.webp" alt="info-2"></div> <div class="flex flex-col gap-y-5"> <p class="text-4xl font-semibold text-balance">
EL PREMIO A LA CREACIÓN
</p> <p class="text-balance text-lg">
El trofeo que se entrega a los ganadores y ganadoras en
                        la ceremonia es una <strong>representación de la letra “A” dividida en tres
                            fragmentos</strong> y ensambladas a modo de artilugio futurista sobre el que
                        se construye la narrativa del evento.
</p> <p class="text-balance text-lg">
Un artefacto de origen desconocido que dota de
<strong>herramientas y habilidades para la creación.</strong> Una
                        metáfora sobre la emancipación del talento gracias a la
                        tecnología y la irrupción de los creadores de contenido
                        en el mundo del entretenimiento.
</p> </div> </div> </section> <section class="py-24 flex flex-col gap-y-10 mb-24 px-4 lg:px-0"> <h4 class="text-3xl font-semibold text-center">KIT DE PRENSA</h4> <div class="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-20"> <div class="flex flex-col text-center gap-y-2"> <p class="text-xl font-semibold">LOGOTIPO Y TROFEO</p> <img src="/logo-y-trofeo.webp" alt="LOGO Y TROFEO" class="img-shadow transition-all ease-in-out duration-200 object-center object-cover"> </div> <div class="flex flex-col text-center gap-y-2"> <p class="text-xl font-semibold">LOGOTIPO Y TROFEO</p> <img src="/fondos-de-pantalla.webp" alt="LOGO Y TROFEO" class="img-shadow transition-all ease-in-out duration-200 object-center object-cover"> </div> <div class="flex flex-col text-center gap-y-2"> <p class="text-xl font-semibold">LOGOTIPO Y TROFEO</p> <img src="/nota-de-prensa.webp" alt="LOGO Y TROFEO" class="img-shadow transition-all ease-in-out duration-200 object-center object-cover"> </div> </div> </section> </main> ` })}`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/info.astro", void 0);

const $$file = "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/info.astro";
const $$url = "/info";

export { $$Info as default, $$file as file, $$url as url };
