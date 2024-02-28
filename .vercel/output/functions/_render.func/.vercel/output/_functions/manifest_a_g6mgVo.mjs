import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_NgMtA4Zz.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CoQoBa7H.js"}],"styles":[{"type":"external","src":"/_astro/archivo.BKTJ-wB7.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CEp1gz8F.js"}],"styles":[{"type":"external","src":"/_astro/archivo.BKTJ-wB7.css"},{"type":"external","src":"/_astro/archivo.CJDxP8pk.css"}],"routeData":{"route":"/archivo","isIndex":false,"type":"page","pattern":"^\\/archivo\\/?$","segments":[[{"content":"archivo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/archivo.astro","pathname":"/archivo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CoQoBa7H.js"}],"styles":[{"type":"external","src":"/_astro/archivo.BKTJ-wB7.css"}],"routeData":{"route":"/esland-fortnite","isIndex":false,"type":"page","pattern":"^\\/esland-fortnite\\/?$","segments":[[{"content":"esland-fortnite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/esland-fortnite.astro","pathname":"/esland-fortnite","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CoQoBa7H.js"}],"styles":[{"type":"external","src":"/_astro/archivo.BKTJ-wB7.css"}],"routeData":{"route":"/finalistas","isIndex":false,"type":"page","pattern":"^\\/finalistas\\/?$","segments":[[{"content":"finalistas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finalistas.astro","pathname":"/finalistas","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CoQoBa7H.js"}],"styles":[{"type":"external","src":"/_astro/archivo.BKTJ-wB7.css"}],"routeData":{"route":"/info","isIndex":false,"type":"page","pattern":"^\\/info\\/?$","segments":[[{"content":"info","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/info.astro","pathname":"/info","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJlgZlCR.js"}],"styles":[{"type":"external","src":"/_astro/archivo.BKTJ-wB7.css"},{"type":"inline","content":".section-animate-scroll[data-astro-cid-u43ozx4m]{view-timeline:--reveal;view-timeline-axis:block;animation-name:revealing;animation-timeline:--reveal;animation-range:entry 25% cover 30%;animation-fill-mode:both}@keyframes revealing{0%{opacity:0;scale:25%}to{opacity:1;scale:100%}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/archivo.astro",{"propagation":"none","containsHead":true}],["C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/esland-fortnite.astro",{"propagation":"none","containsHead":true}],["C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/finalistas.astro",{"propagation":"none","containsHead":true}],["C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/pages/info.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/esland-fortnite.astro":"chunks/pages/esland-fortnite_CM5PI_PZ.mjs","/src/pages/finalistas.astro":"chunks/pages/finalistas_DiTdyvf7.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_C_ZCb14U.mjs","/src/pages/index.astro":"chunks/pages/index_z2qw6A3F.mjs","/src/pages/info.astro":"chunks/pages/info_Bb5T7cgX.mjs","\u0000@astrojs-manifest":"manifest_a_g6mgVo.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CsmQt8uS.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_DhxOuEVN.mjs","\u0000@astro-page:src/pages/archivo@_@astro":"chunks/archivo_BtMDMcbO.mjs","\u0000@astro-page:src/pages/esland-fortnite@_@astro":"chunks/esland-fortnite_DYBJic8s.mjs","\u0000@astro-page:src/pages/finalistas@_@astro":"chunks/finalistas_CQdOyvlt.mjs","\u0000@astro-page:src/pages/info@_@astro":"chunks/info_jw9CgCzC.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_EiOzLUog.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DJlgZlCR.js","C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/Palmares.tsx":"_astro/Palmares.iaA1drH3.js","@astrojs/preact/client.js":"_astro/client.GnSr7zGc.js","C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/src/components/CounterUp":"_astro/CounterUp.Dn7fpQew.js","C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.DHNbq75B.js","/astro/hoisted.js?q=2":"_astro/hoisted.CoQoBa7H.js","/astro/hoisted.js?q=1":"_astro/hoisted.CEp1gz8F.js","C:/Users/LaloH/Documents/DesarrolloWeb-FrontEnd/PAGINAS WEB - ASTRO - PAGINAS ESTATICAS/clon-esland-web/node_modules/photoswipe/dist/photoswipe.esm.js":"_astro/photoswipe.esm.C0FT-EY-.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/onest-latin-wght-normal.DJzCSW5i.woff2","/_astro/onest-cyrillic-wght-normal.CiQTuMoU.woff2","/_astro/onest-latin-ext-wght-normal.0BME-IPC.woff2","/_astro/archivo.BKTJ-wB7.css","/_astro/archivo.CJDxP8pk.css","/360_LOGO.mp4","/360_LOGO.webm","/archivo-hero.webp","/bg-2-esland-fortnite.webp","/bg-esland-fortnite.webp","/bg-finalistas.webp","/bg-vota.webp","/favicon-esland.ico","/fondos-de-pantalla.webp","/grefgd.webp","/info-hero.webp","/info-img1.webp","/info-img4.webp","/laptop.webp","/logo-home.svg","/logo-y-trofeo.webp","/logo.png","/mountain.webp","/nota-de-prensa.webp","/archivo/auronplay.jpg","/archivo/balloon.jpg","/archivo/caster.jpg","/archivo/cristini.jpg","/archivo/elmariana.jpg","/archivo/elxokas.jpg","/archivo/fernanfloo.jpg","/archivo/ibai-cancion.jpg","/archivo/ibai.jpg","/archivo/jagger.jpg","/archivo/kidi-irl.jpg","/archivo/la-velada-del-año.jpg","/archivo/legoland.jpg","/archivo/mixwell.jpg","/archivo/papigavi.jpg","/archivo/roleplayer.jpg","/archivo/tortillaland.jpg","/archivo/wildproject.jpg","/gallery/img-1.webp","/gallery/img-10.webp","/gallery/img-11.webp","/gallery/img-12.webp","/gallery/img-13.webp","/gallery/img-14.webp","/gallery/img-15.webp","/gallery/img-16.webp","/gallery/img-17.webp","/gallery/img-18.webp","/gallery/img-19.webp","/gallery/img-2.webp","/gallery/img-20.webp","/gallery/img-21.webp","/gallery/img-22.webp","/gallery/img-23.webp","/gallery/img-24.webp","/gallery/img-25.webp","/gallery/img-26.webp","/gallery/img-27.webp","/gallery/img-28.webp","/gallery/img-29.webp","/gallery/img-3.webp","/gallery/img-30.webp","/gallery/img-31.webp","/gallery/img-32.webp","/gallery/img-33.webp","/gallery/img-34.webp","/gallery/img-35.webp","/gallery/img-36.webp","/gallery/img-37.webp","/gallery/img-38.webp","/gallery/img-39.webp","/gallery/img-4.webp","/gallery/img-40.webp","/gallery/img-41.webp","/gallery/img-42.webp","/gallery/img-43.webp","/gallery/img-44.webp","/gallery/img-45.webp","/gallery/img-46.webp","/gallery/img-47.webp","/gallery/img-48.webp","/gallery/img-49.webp","/gallery/img-5.webp","/gallery/img-50.webp","/gallery/img-51.webp","/gallery/img-52.webp","/gallery/img-53.webp","/gallery/img-54.webp","/gallery/img-55.webp","/gallery/img-56.webp","/gallery/img-57.webp","/gallery/img-58.webp","/gallery/img-59.webp","/gallery/img-6.webp","/gallery/img-60.webp","/gallery/img-61.webp","/gallery/img-62.webp","/gallery/img-63.webp","/gallery/img-64.webp","/gallery/img-65.webp","/gallery/img-66.webp","/gallery/img-67.webp","/gallery/img-68.webp","/gallery/img-69.webp","/gallery/img-7.webp","/gallery/img-70.webp","/gallery/img-71.webp","/gallery/img-72.webp","/gallery/img-73.webp","/gallery/img-8.webp","/gallery/img-9.webp","/_astro/archivo.BQexH46A.css","/_astro/client.GnSr7zGc.js","/_astro/CounterUp.Dn7fpQew.js","/_astro/hoisted.CEp1gz8F.js","/_astro/hoisted.CoQoBa7H.js","/_astro/hoisted.DJlgZlCR.js","/_astro/hooks.module.MoT5228-.js","/_astro/jsxRuntime.module.DffJabvY.js","/_astro/Palmares.iaA1drH3.js","/_astro/photoswipe.esm.C0FT-EY-.js","/_astro/preact.module.5IcniKGG.js","/_astro/preload-helper.D7itGvJr.js","/_astro/signals.module.DHNbq75B.js","/gallery/thumbnails/img-1.webp","/gallery/thumbnails/img-10.webp","/gallery/thumbnails/img-11.webp","/gallery/thumbnails/img-12.webp","/gallery/thumbnails/img-13.webp","/gallery/thumbnails/img-14.webp","/gallery/thumbnails/img-15.webp","/gallery/thumbnails/img-16.webp","/gallery/thumbnails/img-17.webp","/gallery/thumbnails/img-18.webp","/gallery/thumbnails/img-19.webp","/gallery/thumbnails/img-2.webp","/gallery/thumbnails/img-20.webp","/gallery/thumbnails/img-21.webp","/gallery/thumbnails/img-22.webp","/gallery/thumbnails/img-23.webp","/gallery/thumbnails/img-24.webp","/gallery/thumbnails/img-25.webp","/gallery/thumbnails/img-26.webp","/gallery/thumbnails/img-27.webp","/gallery/thumbnails/img-28.webp","/gallery/thumbnails/img-29.webp","/gallery/thumbnails/img-3.webp","/gallery/thumbnails/img-30.webp","/gallery/thumbnails/img-31.webp","/gallery/thumbnails/img-32.webp","/gallery/thumbnails/img-33.webp","/gallery/thumbnails/img-34.webp","/gallery/thumbnails/img-35.webp","/gallery/thumbnails/img-36.webp","/gallery/thumbnails/img-37.webp","/gallery/thumbnails/img-38.webp","/gallery/thumbnails/img-39.webp","/gallery/thumbnails/img-4.webp","/gallery/thumbnails/img-40.webp","/gallery/thumbnails/img-41.webp","/gallery/thumbnails/img-42.webp","/gallery/thumbnails/img-43.webp","/gallery/thumbnails/img-44.webp","/gallery/thumbnails/img-45.webp","/gallery/thumbnails/img-46.webp","/gallery/thumbnails/img-47.webp","/gallery/thumbnails/img-48.webp","/gallery/thumbnails/img-49.webp","/gallery/thumbnails/img-5.webp","/gallery/thumbnails/img-50.webp","/gallery/thumbnails/img-51.webp","/gallery/thumbnails/img-52.webp","/gallery/thumbnails/img-53.webp","/gallery/thumbnails/img-54.webp","/gallery/thumbnails/img-55.webp","/gallery/thumbnails/img-56.webp","/gallery/thumbnails/img-57.webp","/gallery/thumbnails/img-58.webp","/gallery/thumbnails/img-59.webp","/gallery/thumbnails/img-6.webp","/gallery/thumbnails/img-60.webp","/gallery/thumbnails/img-61.webp","/gallery/thumbnails/img-62.webp","/gallery/thumbnails/img-63.webp","/gallery/thumbnails/img-64.webp","/gallery/thumbnails/img-65.webp","/gallery/thumbnails/img-66.webp","/gallery/thumbnails/img-67.webp","/gallery/thumbnails/img-68.webp","/gallery/thumbnails/img-69.webp","/gallery/thumbnails/img-7.webp","/gallery/thumbnails/img-70.webp","/gallery/thumbnails/img-71.webp","/gallery/thumbnails/img-72.webp","/gallery/thumbnails/img-73.webp","/gallery/thumbnails/img-8.webp","/gallery/thumbnails/img-9.webp"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
