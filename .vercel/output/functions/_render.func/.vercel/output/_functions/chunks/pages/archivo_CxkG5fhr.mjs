/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderSlot, f as renderComponent } from '../astro_NgMtA4Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_DyqYUfpX.mjs';
/* empty css                            */
import { useState, useCallback, useEffect } from 'preact/hooks';
import { jsx, jsxs } from 'preact/jsx-runtime';

const $$Astro$3 = createAstro();
const $$HeroContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroContainer;
  const { bgImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-center bg-cover bg-no-repeat h-[90vh] w-full max-w-[100vw]"${addAttribute(`clip-path:polygon(0 0, 100% 0, 100% 85%,50% 100%,50% 100%,0% 85%);background-image:url('${bgImage}')`, "style")}> <div class="absolute inset-0 m-auto w-full h-full flex justify-center flex-col items-center px-4 md:px-0">  ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/HeroContainer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Galeria;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-12" id="my-gallery"> ${Array.from({ length: 12 }).map((v, i) => (
    //me creo un array de 9 elementos para llamar las imagenes dinamicamente, el i arranca en 0, por lo tanto es i + 1
    renderTemplate`<a${addAttribute(`/gallery/img-${i + 1}.webp`, "href")} data-pswp-width="1152" data-pswp-height="767" target="_blank"> <img loading="lazy" class="rounded-xl hover:shadow-xl hover:shadow-blue-800/80 transition-shadow duration-300"${addAttribute(`/gallery/thumbnails/img-${i + 1}.webp`, "src")} alt=""> </a>`
  ))} </div> `;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/Galeria.astro", void 0);

const useProgressiveNumber = (initialValue, duration = 2e3, decimals = 0, delay = 50) => {
  const [target, setTarget] = useState(initialValue);
  const [current, setCurrent] = useState(initialValue);
  const [step, setStep] = useState(0);
  const setValue = useCallback((value2) => {
    setCurrent((prevCurrent) => {
      const nextTarget = typeof value2 === "function" ? value2(target) : value2;
      const diff = Math.abs(prevCurrent - nextTarget);
      const steps = Math.max(duration / delay, 1);
      const nextStep = diff / steps;
      setStep(nextStep);
      setTarget(nextTarget);
      return prevCurrent + (prevCurrent < nextTarget ? nextStep : -nextStep);
    });
  }, [delay, duration, target]);
  useEffect(() => {
    const interval = setInterval(() => setCurrent((prevCurrent) => {
      if (Math.abs(target - prevCurrent) < step) {
        clearInterval(interval);
        return target;
      }
      return prevCurrent + (prevCurrent < target ? step : -step);
    }), delay);
    return () => clearInterval(interval);
  }, [delay, step, target]);
  const value = Number(current.toFixed(decimals));
  return [value, setValue];
};

const CounterUp = ({
  initial,
  final,
  duration,
  decimals
}) => {
  const [count, setCount] = useProgressiveNumber(initial, duration, decimals);
  useEffect(() => {
    setCount(final);
  }, []);
  return jsx("span", {
    children: count
  });
};

const $$Astro$1 = createAstro();
const $$NumerosArchivo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NumerosArchivo;
  return renderTemplate`${maybeRenderHead()}<section class="my-24 max-w-7xl mx-auto"> <h2 class="text-4xl lg:text-6xl text-balance font-bold text-center">Los ESLAND en números</h2> <div class="grid grid-cols-1 lg:grid-cols-3 gap-24 mt-16"> <div class="flex flex-col text-center justify-center items-center">  <span class="text-6xl lg:text-8xl font-bold tabular-nums tracking-tighter">${renderComponent($$result, "CounterUp", CounterUp, { "client:visible": true, "initial": 0, "final": 227, "client:component-hydration": "visible", "client:component-path": "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/CounterUp", "client:component-export": "CounterUp" })}</span> <span class="text-lg opacity-75 uppercase">Noticias en prensa</span> </div> <div class="flex flex-col text-center justify-center items-center"> <span class="text-6xl lg:text-8xl font-bold tabular-nums tracking-tighter">${renderComponent($$result, "CounterUp", CounterUp, { "client:visible": true, "initial": 0, "final": 69.9, "decimals": 1, "client:component-hydration": "visible", "client:component-path": "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/CounterUp", "client:component-export": "CounterUp" })}M</span> <span class="lg:text-lg opacity-75 uppercase">De visualizaciones</span> </div> <div class="flex flex-col text-center justify-center items-center"> <span class="text-6xl lg:text-8xl font-bold tabular-nums tracking-tighter"> ${renderComponent($$result, "CounterUp", CounterUp, { "client:visible": true, "initial": 0, "final": 3.2, "decimals": 1, "client:component-hydration": "visible", "client:component-path": "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/CounterUp", "client:component-export": "CounterUp" })}
M€</span> <span class="text-lg opacity-75 uppercase">En medios ganados</span> </div> </div> </section>`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/NumerosArchivo.astro", void 0);

const arraySpanLiPalmares = [{
  id: 1,
  category: "Streamer del año",
  ganador: "Ibai"
}, {
  id: 2,
  category: "Serie de contenido del año",
  ganador: "Tortillaland"
}, {
  id: 3,
  category: "Streamer revelación del año",
  ganador: "elXokas"
}, {
  id: 4,
  category: "Evento del año",
  ganador: "La velada del año"
}, {
  id: 5,
  category: "Mejor trayectoria",
  ganador: "Fernanfloo"
}, {
  id: 6,
  category: "Talk show del año",
  ganador: "The Wild Project"
}, {
  id: 7,
  category: "Canción del año",
  ganador: "El cuarteto de Ibai"
}, {
  id: 8,
  category: "Jägger del año",
  ganador: "Jägger boxeador"
}, {
  id: 9,
  category: "Streamer IRL del año",
  ganador: "Kidi"
}, {
  id: 10,
  category: "Caster del año",
  ganador: "Kaquka"
}, {
  id: 11,
  category: "Reportero/a de esports del año",
  ganador: "Cristinini"
}, {
  id: 12,
  category: "Jugador/a de esports del año",
  ganador: "Mixwell"
}, {
  id: 13,
  category: "Roleplayer del año",
  ganador: "AgenteMaxo"
}, {
  id: 14,
  category: "Baile del año",
  ganador: "Papi Gavi"
}];
const cardsArchivo = [{
  id: 1,
  imagen: "/archivo/ibai.jpg",
  nombre: "Ibai",
  comunidad: "41.05",
  streamers: "75.6",
  votosTotales: "58.33"
}, {
  id: 2,
  imagen: "/archivo/tortillaland.jpg",
  nombre: "tortillaland",
  comunidad: "39.92",
  streamers: "27.7",
  votosTotales: "33.81"
}, {
  id: 3,
  imagen: "/archivo/elxokas.jpg",
  nombre: "ELXOKAS",
  comunidad: "27.74",
  streamers: "54",
  votosTotales: "40.87"
}, {
  id: 4,
  imagen: "/archivo/la-velada-del-año.jpg",
  nombre: "LA VELADA DEL AÑO",
  comunidad: "48.78",
  streamers: "72.9",
  votosTotales: "60.84"
}, {
  id: 5,
  imagen: "/archivo/fernanfloo.jpg",
  nombre: "FERNANFLOO",
  comunidad: "60.25",
  streamers: "18.9",
  votosTotales: "39.58"
}, {
  id: 6,
  imagen: "/archivo/wildproject.jpg",
  nombre: "THE WILD PROJECT",
  comunidad: "43.81",
  streamers: "45.9",
  votosTotales: "44.86"
}, {
  id: 7,
  imagen: "/archivo/ibai-cancion.jpg",
  nombre: "EL CUARTETO DE IBAI",
  comunidad: "54.6 ",
  streamers: "40.5",
  votosTotales: "47.55"
}, {
  id: 8,
  imagen: "/archivo/jagger.jpg",
  nombre: "JÄGGER BOXEADOR",
  comunidad: "36.09",
  streamers: "51.3",
  votosTotales: "43.7"
}, {
  id: 9,
  imagen: "/archivo/kidi-irl.jpg",
  nombre: "KIDI",
  comunidad: "20.81",
  streamers: "67.5",
  votosTotales: "44.15"
}, {
  id: 10,
  imagen: "/archivo/caster.jpg",
  nombre: "KAQUKA",
  comunidad: "40.48",
  streamers: "27",
  votosTotales: "33.74"
}, {
  id: 11,
  imagen: "/archivo/cristini.jpg",
  nombre: "CRISTININI",
  comunidad: "66.01",
  streamers: "35.1",
  votosTotales: "50.56"
}, {
  id: 12,
  imagen: "/archivo/mixwell.jpg",
  nombre: "MIXWELL",
  comunidad: "32.92",
  streamers: "37.8",
  votosTotales: "35.36"
}, {
  id: 13,
  imagen: "/archivo/roleplayer.jpg",
  nombre: "AGENTEMAXO",
  comunidad: "23.14",
  streamers: "40.5",
  votosTotales: "31.82"
}, {
  id: 14,
  imagen: "/archivo/papigavi.jpg",
  nombre: "PAPI GAVI",
  comunidad: "45.96",
  streamers: "35.1",
  votosTotales: "40.53"
}];
const Palmares = () => {
  const [liSelected, setLiSelected] = useState(1);
  return jsxs("div", {
    className: "flex flex-col md:flex-row justify-between w-full max-w-7xl mx-auto gap-5 py-40",
    children: [jsxs("ul", {
      className: "flex flex-col w-full text-sm md:text-base",
      children: [jsxs("li", {
        className: "flex items-center justify-between p-2 bg-black",
        children: [jsx("span", {
          children: "Categoría"
        }), jsx("span", {
          children: "Ganadores"
        })]
      }), arraySpanLiPalmares.map((element, i) => jsxs("li", {
        onClick: () => setLiSelected(element.id),
        className: `li-palmares ${liSelected === element.id ? "selected" : ""}  ${i % 2 === 0 ? "bg-blue-950" : "bg-black"} cursor-pointer flex flex-col`,
        children: [jsxs("div", {
          className: "flex items-center justify-between p-2",
          children: [jsx("span", {
            children: element.category
          }), jsx("span", {
            children: element.ganador
          })]
        }), liSelected === element.id && cardsArchivo.map((card) => liSelected === card.id && jsxs("div", {
          className: "flex w-full p-2 md:hidden",
          children: [jsx("img", {
            src: card.imagen,
            className: "w-28 h-auto",
            loading: "lazy"
          }), jsxs("div", {
            className: "flex flex-col text-center justify-center w-full gap-y-2 shadow-none",
            children: [jsx("p", {
              className: "uppercase font-semibold",
              children: card.nombre
            }), jsxs("span", {
              children: ["COMUNIDAD: ", card.comunidad, " %"]
            }), jsxs("span", {
              children: ["STREAMERS: ", card.streamers, " %"]
            }), jsxs("p", {
              className: "font-bold",
              children: ["TOTAL: ", card.votosTotales, " %"]
            })]
          })]
        }))]
      }))]
    }), jsx("div", {
      className: "w-full items-center justify-center hidden md:flex",
      children: (
        //si setLiSelected es igual a el id del objeto de CardsArchivo, quiere decir que debo renderizar ese ganador porque tienen el mismo numero
        cardsArchivo.map((card) => liSelected === card.id && jsxs("div", {
          className: "bg-sky-500 flex flex-col relative shadow-2xl shadow-sky-600 animate-fade-left animate-duration-500",
          children: [jsx("span", {
            class: "absolute bg-white text-2xl w-fit p-5 rounded-lg text-blue-950 font-bold top-[65%] left-[40%] z-10",
            children: "1°"
          }), jsx("img", {
            src: card.imagen,
            alt: card.nombre,
            className: "mix-blend-luminosity",
            loading: "lazy"
          }), jsxs("div", {
            className: "p-5 flex flex-col text-start",
            children: [jsx("p", {
              className: "uppercase font-semibold text-lg mt-5",
              children: card.nombre
            }), jsxs("span", {
              className: "text-lg font-semibold text-blue-950",
              children: ["COMUNIDAD: ", card.comunidad, " %"]
            }), jsxs("span", {
              className: "text-lg font-semibold text-blue-950",
              children: ["STREAMERS: ", card.streamers, " %"]
            }), jsxs("p", {
              className: "text-2xl font-bold",
              children: ["TOTAL: ", card.votosTotales, " %"]
            })]
          })]
        }, card.id))
      )
    })]
  });
};

const $$Astro = createAstro();
const $$Archivo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Archivo;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Archivo - Esland web", "description": "Description p\xE1gina archivo - esland web" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroContainer", $$HeroContainer, { "bgImage": "archivo-hero.webp" }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<h1 class="text-3xl md:text-5xl font-semibold animate-fade-up text-center text-balance">
EDICIONES ANTERIORES
</h1> <a target="_blank" href="https://www.youtube.com/watch?v=1YmpPrqKP-g&ab_channel=TheGrefg" class="my-button-shadow px-8 py-2 border border-solid border-white rounded-full mt-20 animate-fade-up">
REVIVE LA ÚLTIMA GALA
</a> ` })} <main class="my-40"> <section class="flex flex-col gap-y-5 p-4 2xl:p-0"> <h2 class="text-4xl font-semibold text-center">PALMARÉS</h2> ${renderComponent($$result2, "Palmares", Palmares, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/Palmares.tsx", "client:component-export": "Palmares" })} <h2 class="text-4xl font-semibold text-center">GALERÍA</h2> <p class="text-balance text-xl text-center">Algunos de los mejores momentos de la gala que pasarán a la historia.</p> ${renderComponent($$result2, "Galeria", $$Galeria, {})} ${renderComponent($$result2, "NumerosArchivo", $$NumerosArchivo, {})} </section> </main> ` })}`;
}, "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/archivo.astro", void 0);

const $$file = "C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/archivo.astro";
const $$url = "/archivo";

const archivo = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archivo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$HeroContainer as $, archivo as a };
