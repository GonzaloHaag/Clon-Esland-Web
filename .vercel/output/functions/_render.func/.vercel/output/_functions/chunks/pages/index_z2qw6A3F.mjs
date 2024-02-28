/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderSlot, f as renderComponent } from '../astro_NgMtA4Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_DyqYUfpX.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$5 = createAstro();
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Video;
  return renderTemplate`${maybeRenderHead()}<div class="relative h-dvh w-full max-w-[100vw] md:aspect-video md:h-[80vh] xl:h-full"> <div class="absolute inset-0 h-full justify-center z-10 m-auto flex flex-col items-center w-full"> <section class="absolute z-10 flex justify-center items-center gap-8 flex-col"> <h1 class="flex items-center gap-5 text-4xl md:text-6xl lg:gap-20 lg:text-8xl animate-fade-up"> <span>E</span> <span>S</span> <span>L</span> <img src="/logo.png" class="h-9 w-auto md:h-[3.75rem] lg:h-24 scale-150" aria-label="A"> <span>N</span> <span>D</span> </h1> <p class="subtitle text-xl lg:text-2xl text-center text-wrap px-4 animate-fade-up">
PREMIOS A LA COMUNIDAD HISPANOHABLANTE DE STREAMING
</p> <a href="https://premiosesland.koobin.com/" target="_blank" class="text-blue-950 animate-fade-up bg-white font-semibold w-fit px-8 py-2 rounded-full cursor-pointer hover:bg-blue-950 hover:text-white transition-all duration-200">
COMPRÁ TU ENTRADA
</a> </section> <video autoplay loop muted src="/360_LOGO.webm" class="h-full w-full object-cover object-top animate-ease-in-out animate-duration-200" style="clip-path:polygon(0 0, 100% 0, 100% 85%,50% 100%,50% 100%,0% 85%)"></video> </div> <video class="absolute -bottom-48 -z-40 blur-3xl animate-ease-in-out animate-duration-200" autoplay loop muted src="/360_LOGO.webm"></video> </div>`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/Video.astro", void 0);

const $$Astro$4 = createAstro();
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${maybeRenderHead()}<section class="section-animate-scroll max-w-3xl mx-auto flex flex-col gap-y-5 items-center text-start justify-center my-24 p-8 md:p-0" data-astro-cid-u43ozx4m> <img class="w-10" src="/logo.png" alt="logo esland" data-astro-cid-u43ozx4m> <h2 class="text-balance text-3xl md:text-5xl font-semibold text-center" data-astro-cid-u43ozx4m>
Bienvenidos/as a los Premios ESLAND
</h2> <p class="text-xl text-balance" data-astro-cid-u43ozx4m>
El cine tiene los Oscars, la música tiene los Grammy y <strong data-astro-cid-u43ozx4m>el streaming tiene los ESLAND</strong>. Los premios que celebran la creatividad y el talento de los mejores
        creadores de contenido de <strong data-astro-cid-u43ozx4m>la comunidad hispanohablante.</strong> </p> <p class="text-xl text-balance" data-astro-cid-u43ozx4m>
España, Latinoamérica y Andorra unidas por creadores, creadoras y sus
        comunidades, para recordar y revivir <strong data-astro-cid-u43ozx4m>algunos de los mejores momentos del año.</strong> </p> <p class="text-xl text-balance" data-astro-cid-u43ozx4m>
Tras dos galas celebradas, una en el Palau de la Música Catalana de
        Barcelona, y otra en el Auditorio Nacional de la Ciudad de México, solo
        queda esperar a <strong data-astro-cid-u43ozx4m>la tercera edición en Andorra.</strong> </p> </section> `;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/Intro.astro", void 0);

const $$Astro$3 = createAstro();
const $$BentoItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BentoItem;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`${Astro2.props.class} relative rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10 overflow-hidden group`, "class")}>  <div class="absolute bottom-0 top-0 z-10 h-full w-full
    bg-gradient-to-b from-transparent from-40% via-[#151836]/50 to-[#151836]/80"></div> ${renderSlot($$result, $$slots["image"])}  <div class="relative z-20 flex h-full select-none flex-col justify-end gap-1 p-4 text-lg md:p-6"> <h2 class="mb-4 text-balance text-3xl font-semibold uppercase text-white"> ${title} </h2> ${subtitle && //lo dibujo solo si viene
  renderTemplate`<h3 class="-mt-4 mb-4 text-3xl font-semibold text-sky-200/80"> ${subtitle} </h3>`} ${renderSlot($$result, $$slots["content"])}  </div> </article>`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/BentoItem.astro", void 0);

const $$Astro$2 = createAstro();
const $$BentoGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BentoGrid;
  return renderTemplate`${maybeRenderHead()}<section class="grid grid-cols-12 p-8 md:p-12 lg:p-20 max-w-7xl mx-auto gap-4 auto-rows-[30rem]"> ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-full", "title": "ANDORRA: EL C\xC9NIT DE LOS PREMIOS ESLAND" }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl text-base md:text-lg">
Una nueva edición <strong>cargada de novedades</strong> y contenido,
            que empezará varias semanas antes de la ansiada gala. <strong>Directos especiales, colaboraciones, conciertos y mucho más</strong> en lo que será una auténtica fiesta dedicada a la creación de contenido.
</p>`, "image": ($$result2) => renderTemplate`<div class="absolute -z-10 inset-0 w-full h-full bg-blue-950 bg-center bg-cover bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110 bg-[url('/mountain.webp')]"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-full md:col-span-6", "title": "LA ALFOMBRA BLANCA Y LA GALA", "subtitle": "16 de febrero de 2024" }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl text-base md:text-lg"> <strong>Uno de los días más esperados del año</strong> en la comunidad
            hispanohablante, con dos grandes hitos concentrados en un mismo directo.
            Una alfombra por la que pasarán los mejores streamers del año, luciendo
            sus mejores galas, momentos antes de saber si son los premiados.
</p>`, "image": ($$result2) => renderTemplate`<div class="absolute -z-10 inset-0 w-full h-full bg-blue-950 bg-center bg-cover bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110 bg-[url('/grefgd.webp')]"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-full md:col-span-6", "title": "DISFRUTA DEL REDDIT DE LA COMUNIDAD" }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl text-base md:text-lg">
Este año, el reddit no formará parte de las votaciones de los
            premios, pero sí que <strong>formará parte de la comunidad.</strong> El subreddit
            oficial de los Premios ESLAND está abierto para ti, para que
            compartas tus clips, tus opiniones y para que <strong>interactúes con toda
            la comunidad</strong> del streaming hispanohablante.
</p>`, "image": ($$result2) => renderTemplate`<div class="absolute -z-10 inset-0 w-full h-full bg-blue-950 bg-center bg-cover bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110 bg-[url('/laptop.webp')]"></div>` })} </section>`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/BentoGrid.astro", void 0);

const $$Astro$1 = createAstro();
const $$PreFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PreFooter;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto w-full max-w-[1400px] p-6 sm:p-20 mb-24"> <h3 class="mx-auto mb-10 text-balance text-center text-xl font-semibold uppercase tracking-wide md:text-4xl">
ESLAND TERCERA EDICIÓN
</h3> ${renderComponent($$result, "lite-youtube", "lite-youtube", { "class": "rounded-xl shadow-2xl shadow-white/10 w-full min-h-[400px] md:min-h-[800px]", "videoid": "nYPVr2IYTtk", "videotitle": "ESLAND TERCERA EDICI\xD3N" })} </section> `;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/PreFooter.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Esland Web - 2024", "description": "Description esland web - home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Video", $$Video, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Intro", $$Intro, {})} ${renderComponent($$result2, "BentoGrid", $$BentoGrid, {})} ${renderComponent($$result2, "PreFooter", $$PreFooter, {})} </main> ` })}`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
