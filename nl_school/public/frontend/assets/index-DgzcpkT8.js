const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Home-QzDwJUpV.js",
      "assets/Dialog-BcXWFjV6.js",
      "assets/Timetable-C9DGBVoB.js",
      "assets/Timetable-BG5gbuaf.css",
    ]),
) => i.map((i) => d[i]);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Oa(t) {
  const e = Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const Ce = {},
  gr = [],
  qt = () => {},
  Bm = () => !1,
  wo = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  ja = (t) => t.startsWith("onUpdate:"),
  rt = Object.assign,
  Pa = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  },
  Hm = Object.prototype.hasOwnProperty,
  be = (t, e) => Hm.call(t, e),
  ae = Array.isArray,
  yr = (t) => vo(t) === "[object Map]",
  lf = (t) => vo(t) === "[object Set]",
  ce = (t) => typeof t == "function",
  Le = (t) => typeof t == "string",
  fn = (t) => typeof t == "symbol",
  Re = (t) => t !== null && typeof t == "object",
  af = (t) => (Re(t) || ce(t)) && ce(t.then) && ce(t.catch),
  cf = Object.prototype.toString,
  vo = (t) => cf.call(t),
  $m = (t) => vo(t).slice(8, -1),
  uf = (t) => vo(t) === "[object Object]",
  Ia = (t) =>
    Le(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  Yr = Oa(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  xo = (t) => {
    const e = Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  },
  Fm = /-(\w)/g,
  Tt = xo((t) => t.replace(Fm, (e, n) => (n ? n.toUpperCase() : ""))),
  Vm = /\B([A-Z])/g,
  or = xo((t) => t.replace(Vm, "-$1").toLowerCase()),
  ko = xo((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  Vo = xo((t) => (t ? `on${ko(t)}` : "")),
  Tn = (t, e) => !Object.is(t, e),
  Wo = (t, ...e) => {
    for (let n = 0; n < t.length; n++) t[n](...e);
  },
  df = (t, e, n, r = !1) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  Wm = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  };
let Uc;
const _o = () =>
  Uc ||
  (Uc =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function So(t) {
  if (ae(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        s = Le(r) ? Jm(r) : So(r);
      if (s) for (const i in s) e[i] = s[i];
    }
    return e;
  } else if (Le(t) || Re(t)) return t;
}
const Um = /;(?![^(]*\))/g,
  Km = /:([^]+)/,
  qm = /\/\*[^]*?\*\//g;
function Jm(t) {
  const e = {};
  return (
    t
      .replace(qm, "")
      .split(Um)
      .forEach((n) => {
        if (n) {
          const r = n.split(Km);
          r.length > 1 && (e[r[0].trim()] = r[1].trim());
        }
      }),
    e
  );
}
function Ar(t) {
  let e = "";
  if (Le(t)) e = t;
  else if (ae(t))
    for (let n = 0; n < t.length; n++) {
      const r = Ar(t[n]);
      r && (e += r + " ");
    }
  else if (Re(t)) for (const n in t) t[n] && (e += n + " ");
  return e.trim();
}
function Ek(t) {
  if (!t) return null;
  let { class: e, style: n } = t;
  return e && !Le(e) && (t.class = Ar(e)), n && (t.style = So(n)), t;
}
const Gm =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Qm = Oa(Gm);
function ff(t) {
  return !!t || t === "";
}
const hf = (t) => !!(t && t.__v_isRef === !0),
  Tl = (t) =>
    Le(t)
      ? t
      : t == null
        ? ""
        : ae(t) || (Re(t) && (t.toString === cf || !ce(t.toString)))
          ? hf(t)
            ? Tl(t.value)
            : JSON.stringify(t, pf, 2)
          : String(t),
  pf = (t, e) =>
    hf(e)
      ? pf(t, e.value)
      : yr(e)
        ? {
            [`Map(${e.size})`]: [...e.entries()].reduce(
              (n, [r, s], i) => ((n[Uo(r, i) + " =>"] = s), n),
              {},
            ),
          }
        : lf(e)
          ? { [`Set(${e.size})`]: [...e.values()].map((n) => Uo(n)) }
          : fn(e)
            ? Uo(e)
            : Re(e) && !ae(e) && !uf(e)
              ? String(e)
              : e,
  Uo = (t, e = "") => {
    var n;
    return fn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let yt;
class Ym {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = yt),
      !e && yt && (this.index = (yt.scopes || (yt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, n;
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].pause();
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, n;
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].resume();
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const n = yt;
      try {
        return (yt = this), e();
      } finally {
        yt = n;
      }
    }
  }
  on() {
    yt = this;
  }
  off() {
    yt = this.parent;
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Xm() {
  return yt;
}
let Se;
const Ko = new WeakSet();
class mf {
  constructor(e) {
    (this.fn = e),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      yt && yt.active && yt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Ko.has(this) && (Ko.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || yf(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Kc(this), bf(this);
    const e = Se,
      n = Pt;
    (Se = this), (Pt = !0);
    try {
      return this.fn();
    } finally {
      wf(this), (Se = e), (Pt = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) za(e);
      (this.deps = this.depsTail = void 0),
        Kc(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Ko.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    Rl(this) && this.run();
  }
  get dirty() {
    return Rl(this);
  }
}
let gf = 0,
  Xr,
  Zr;
function yf(t, e = !1) {
  if (((t.flags |= 8), e)) {
    (t.next = Zr), (Zr = t);
    return;
  }
  (t.next = Xr), (Xr = t);
}
function La() {
  gf++;
}
function Na() {
  if (--gf > 0) return;
  if (Zr) {
    let e = Zr;
    for (Zr = void 0; e; ) {
      const n = e.next;
      (e.next = void 0), (e.flags &= -9), (e = n);
    }
  }
  let t;
  for (; Xr; ) {
    let e = Xr;
    for (Xr = void 0; e; ) {
      const n = e.next;
      if (((e.next = void 0), (e.flags &= -9), e.flags & 1))
        try {
          e.trigger();
        } catch (r) {
          t || (t = r);
        }
      e = n;
    }
  }
  if (t) throw t;
}
function bf(t) {
  for (let e = t.deps; e; e = e.nextDep)
    (e.version = -1),
      (e.prevActiveLink = e.dep.activeLink),
      (e.dep.activeLink = e);
}
function wf(t) {
  let e,
    n = t.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), za(r), Zm(r)) : (e = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (t.deps = e), (t.depsTail = n);
}
function Rl(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (
      e.dep.version !== e.version ||
      (e.dep.computed && (vf(e.dep.computed) || e.dep.version !== e.version))
    )
      return !0;
  return !!t._dirty;
}
function vf(t) {
  if (
    (t.flags & 4 && !(t.flags & 16)) ||
    ((t.flags &= -17), t.globalVersion === ms)
  )
    return;
  t.globalVersion = ms;
  const e = t.dep;
  if (((t.flags |= 2), e.version > 0 && !t.isSSR && t.deps && !Rl(t))) {
    t.flags &= -3;
    return;
  }
  const n = Se,
    r = Pt;
  (Se = t), (Pt = !0);
  try {
    bf(t);
    const s = t.fn(t._value);
    (e.version === 0 || Tn(s, t._value)) && ((t._value = s), e.version++);
  } catch (s) {
    throw (e.version++, s);
  } finally {
    (Se = n), (Pt = r), wf(t), (t.flags &= -3);
  }
}
function za(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: s } = t;
  if (
    (r && ((r.nextSub = s), (t.prevSub = void 0)),
    s && ((s.prevSub = r), (t.nextSub = void 0)),
    n.subs === t && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) za(i, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function Zm(t) {
  const { prevDep: e, nextDep: n } = t;
  e && ((e.nextDep = n), (t.prevDep = void 0)),
    n && ((n.prevDep = e), (t.nextDep = void 0));
}
let Pt = !0;
const xf = [];
function Ln() {
  xf.push(Pt), (Pt = !1);
}
function Nn() {
  const t = xf.pop();
  Pt = t === void 0 ? !0 : t;
}
function Kc(t) {
  const { cleanup: e } = t;
  if (((t.cleanup = void 0), e)) {
    const n = Se;
    Se = void 0;
    try {
      e();
    } finally {
      Se = n;
    }
  }
}
let ms = 0;
class e1 {
  constructor(e, n) {
    (this.sub = e),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Da {
  constructor(e) {
    (this.computed = e),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(e) {
    if (!Se || !Pt || Se === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Se)
      (n = this.activeLink = new e1(Se, this)),
        Se.deps
          ? ((n.prevDep = Se.depsTail),
            (Se.depsTail.nextDep = n),
            (Se.depsTail = n))
          : (Se.deps = Se.depsTail = n),
        kf(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = Se.depsTail),
        (n.nextDep = void 0),
        (Se.depsTail.nextDep = n),
        (Se.depsTail = n),
        Se.deps === n && (Se.deps = r);
    }
    return n;
  }
  trigger(e) {
    this.version++, ms++, this.notify(e);
  }
  notify(e) {
    La();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Na();
    }
  }
}
function kf(t) {
  if ((t.dep.sc++, t.sub.flags & 4)) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep) kf(r);
    }
    const n = t.dep.subs;
    n !== t && ((t.prevSub = n), n && (n.nextSub = t)), (t.dep.subs = t);
  }
}
const Ol = new WeakMap(),
  Gn = Symbol(""),
  jl = Symbol(""),
  gs = Symbol("");
function Xe(t, e, n) {
  if (Pt && Se) {
    let r = Ol.get(t);
    r || Ol.set(t, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new Da())), (s.map = r), (s.key = n)), s.track();
  }
}
function cn(t, e, n, r, s, i) {
  const o = Ol.get(t);
  if (!o) {
    ms++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if ((La(), e === "clear")) o.forEach(l);
  else {
    const a = ae(t),
      c = a && Ia(n);
    if (a && n === "length") {
      const u = Number(r);
      o.forEach((d, h) => {
        (h === "length" || h === gs || (!fn(h) && h >= u)) && l(d);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(gs)), e)
      ) {
        case "add":
          a ? c && l(o.get("length")) : (l(o.get(Gn)), yr(t) && l(o.get(jl)));
          break;
        case "delete":
          a || (l(o.get(Gn)), yr(t) && l(o.get(jl)));
          break;
        case "set":
          yr(t) && l(o.get(Gn));
          break;
      }
  }
  Na();
}
function cr(t) {
  const e = ye(t);
  return e === t ? e : (Xe(e, "iterate", gs), Mt(t) ? e : e.map(Ze));
}
function Co(t) {
  return Xe((t = ye(t)), "iterate", gs), t;
}
const t1 = {
  __proto__: null,
  [Symbol.iterator]() {
    return qo(this, Symbol.iterator, Ze);
  },
  concat(...t) {
    return cr(this).concat(...t.map((e) => (ae(e) ? cr(e) : e)));
  },
  entries() {
    return qo(this, "entries", (t) => ((t[1] = Ze(t[1])), t));
  },
  every(t, e) {
    return tn(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return tn(this, "filter", t, e, (n) => n.map(Ze), arguments);
  },
  find(t, e) {
    return tn(this, "find", t, e, Ze, arguments);
  },
  findIndex(t, e) {
    return tn(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return tn(this, "findLast", t, e, Ze, arguments);
  },
  findLastIndex(t, e) {
    return tn(this, "findLastIndex", t, e, void 0, arguments);
  },
  forEach(t, e) {
    return tn(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Jo(this, "includes", t);
  },
  indexOf(...t) {
    return Jo(this, "indexOf", t);
  },
  join(t) {
    return cr(this).join(t);
  },
  lastIndexOf(...t) {
    return Jo(this, "lastIndexOf", t);
  },
  map(t, e) {
    return tn(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Hr(this, "pop");
  },
  push(...t) {
    return Hr(this, "push", t);
  },
  reduce(t, ...e) {
    return qc(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return qc(this, "reduceRight", t, e);
  },
  shift() {
    return Hr(this, "shift");
  },
  some(t, e) {
    return tn(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Hr(this, "splice", t);
  },
  toReversed() {
    return cr(this).toReversed();
  },
  toSorted(t) {
    return cr(this).toSorted(t);
  },
  toSpliced(...t) {
    return cr(this).toSpliced(...t);
  },
  unshift(...t) {
    return Hr(this, "unshift", t);
  },
  values() {
    return qo(this, "values", Ze);
  },
};
function qo(t, e, n) {
  const r = Co(t),
    s = r[e]();
  return (
    r !== t &&
      !Mt(t) &&
      ((s._next = s.next),
      (s.next = () => {
        const i = s._next();
        return i.value && (i.value = n(i.value)), i;
      })),
    s
  );
}
const n1 = Array.prototype;
function tn(t, e, n, r, s, i) {
  const o = Co(t),
    l = o !== t && !Mt(t),
    a = o[e];
  if (a !== n1[e]) {
    const d = a.apply(t, i);
    return l ? Ze(d) : d;
  }
  let c = n;
  o !== t &&
    (l
      ? (c = function (d, h) {
          return n.call(this, Ze(d), h, t);
        })
      : n.length > 2 &&
        (c = function (d, h) {
          return n.call(this, d, h, t);
        }));
  const u = a.call(o, c, r);
  return l && s ? s(u) : u;
}
function qc(t, e, n, r) {
  const s = Co(t);
  let i = n;
  return (
    s !== t &&
      (Mt(t)
        ? n.length > 3 &&
          (i = function (o, l, a) {
            return n.call(this, o, l, a, t);
          })
        : (i = function (o, l, a) {
            return n.call(this, o, Ze(l), a, t);
          })),
    s[e](i, ...r)
  );
}
function Jo(t, e, n) {
  const r = ye(t);
  Xe(r, "iterate", gs);
  const s = r[e](...n);
  return (s === -1 || s === !1) && $a(n[0])
    ? ((n[0] = ye(n[0])), r[e](...n))
    : s;
}
function Hr(t, e, n = []) {
  Ln(), La();
  const r = ye(t)[e].apply(t, n);
  return Na(), Nn(), r;
}
const r1 = Oa("__proto__,__v_isRef,__isVue"),
  _f = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(fn),
  );
function s1(t) {
  fn(t) || (t = String(t));
  const e = ye(this);
  return Xe(e, "has", t), e.hasOwnProperty(t);
}
class Sf {
  constructor(e = !1, n = !1) {
    (this._isReadonly = e), (this._isShallow = n);
  }
  get(e, n, r) {
    if (n === "__v_skip") return e.__v_skip;
    const s = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return r === (s ? (i ? p1 : Mf) : i ? Af : Ef).get(e) ||
        Object.getPrototypeOf(e) === Object.getPrototypeOf(r)
        ? e
        : void 0;
    const o = ae(e);
    if (!s) {
      let a;
      if (o && (a = t1[n])) return a;
      if (n === "hasOwnProperty") return s1;
    }
    const l = Reflect.get(e, n, nt(e) ? e : r);
    return (fn(n) ? _f.has(n) : r1(n)) || (s || Xe(e, "get", n), i)
      ? l
      : nt(l)
        ? o && Ia(n)
          ? l
          : l.value
        : Re(l)
          ? s
            ? Rf(l)
            : Zt(l)
          : l;
  }
}
class Cf extends Sf {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, s) {
    let i = e[n];
    if (!this._isShallow) {
      const a = nr(i);
      if (
        (!Mt(r) && !nr(r) && ((i = ye(i)), (r = ye(r))),
        !ae(e) && nt(i) && !nt(r))
      )
        return a ? !1 : ((i.value = r), !0);
    }
    const o = ae(e) && Ia(n) ? Number(n) < e.length : be(e, n),
      l = Reflect.set(e, n, r, nt(e) ? e : s);
    return (
      e === ye(s) && (o ? Tn(r, i) && cn(e, "set", n, r) : cn(e, "add", n, r)),
      l
    );
  }
  deleteProperty(e, n) {
    const r = be(e, n);
    e[n];
    const s = Reflect.deleteProperty(e, n);
    return s && r && cn(e, "delete", n, void 0), s;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!fn(n) || !_f.has(n)) && Xe(e, "has", n), r;
  }
  ownKeys(e) {
    return Xe(e, "iterate", ae(e) ? "length" : Gn), Reflect.ownKeys(e);
  }
}
class i1 extends Sf {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return !0;
  }
  deleteProperty(e, n) {
    return !0;
  }
}
const o1 = new Cf(),
  l1 = new i1(),
  a1 = new Cf(!0);
const Pl = (t) => t,
  Bs = (t) => Reflect.getPrototypeOf(t);
function c1(t, e, n) {
  return function (...r) {
    const s = this.__v_raw,
      i = ye(s),
      o = yr(i),
      l = t === "entries" || (t === Symbol.iterator && o),
      a = t === "keys" && o,
      c = s[t](...r),
      u = n ? Pl : e ? Il : Ze;
    return (
      !e && Xe(i, "iterate", a ? jl : Gn),
      {
        next() {
          const { value: d, done: h } = c.next();
          return h
            ? { value: d, done: h }
            : { value: l ? [u(d[0]), u(d[1])] : u(d), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Hs(t) {
  return function (...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function u1(t, e) {
  const n = {
    get(s) {
      const i = this.__v_raw,
        o = ye(i),
        l = ye(s);
      t || (Tn(s, l) && Xe(o, "get", s), Xe(o, "get", l));
      const { has: a } = Bs(o),
        c = e ? Pl : t ? Il : Ze;
      if (a.call(o, s)) return c(i.get(s));
      if (a.call(o, l)) return c(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !t && Xe(ye(s), "iterate", Gn), Reflect.get(s, "size", s);
    },
    has(s) {
      const i = this.__v_raw,
        o = ye(i),
        l = ye(s);
      return (
        t || (Tn(s, l) && Xe(o, "has", s), Xe(o, "has", l)),
        s === l ? i.has(s) : i.has(s) || i.has(l)
      );
    },
    forEach(s, i) {
      const o = this,
        l = o.__v_raw,
        a = ye(l),
        c = e ? Pl : t ? Il : Ze;
      return (
        !t && Xe(a, "iterate", Gn),
        l.forEach((u, d) => s.call(i, c(u), c(d), o))
      );
    },
  };
  return (
    rt(
      n,
      t
        ? {
            add: Hs("add"),
            set: Hs("set"),
            delete: Hs("delete"),
            clear: Hs("clear"),
          }
        : {
            add(s) {
              !e && !Mt(s) && !nr(s) && (s = ye(s));
              const i = ye(this);
              return (
                Bs(i).has.call(i, s) || (i.add(s), cn(i, "add", s, s)), this
              );
            },
            set(s, i) {
              !e && !Mt(i) && !nr(i) && (i = ye(i));
              const o = ye(this),
                { has: l, get: a } = Bs(o);
              let c = l.call(o, s);
              c || ((s = ye(s)), (c = l.call(o, s)));
              const u = a.call(o, s);
              return (
                o.set(s, i),
                c ? Tn(i, u) && cn(o, "set", s, i) : cn(o, "add", s, i),
                this
              );
            },
            delete(s) {
              const i = ye(this),
                { has: o, get: l } = Bs(i);
              let a = o.call(i, s);
              a || ((s = ye(s)), (a = o.call(i, s))), l && l.call(i, s);
              const c = i.delete(s);
              return a && cn(i, "delete", s, void 0), c;
            },
            clear() {
              const s = ye(this),
                i = s.size !== 0,
                o = s.clear();
              return i && cn(s, "clear", void 0, void 0), o;
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      n[s] = c1(s, t, e);
    }),
    n
  );
}
function Ba(t, e) {
  const n = u1(t, e);
  return (r, s, i) =>
    s === "__v_isReactive"
      ? !t
      : s === "__v_isReadonly"
        ? t
        : s === "__v_raw"
          ? r
          : Reflect.get(be(n, s) && s in r ? n : r, s, i);
}
const d1 = { get: Ba(!1, !1) },
  f1 = { get: Ba(!1, !0) },
  h1 = { get: Ba(!0, !1) };
const Ef = new WeakMap(),
  Af = new WeakMap(),
  Mf = new WeakMap(),
  p1 = new WeakMap();
function m1(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function g1(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : m1($m(t));
}
function Zt(t) {
  return nr(t) ? t : Ha(t, !1, o1, d1, Ef);
}
function Tf(t) {
  return Ha(t, !1, a1, f1, Af);
}
function Rf(t) {
  return Ha(t, !0, l1, h1, Mf);
}
function Ha(t, e, n, r, s) {
  if (!Re(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const i = s.get(t);
  if (i) return i;
  const o = g1(t);
  if (o === 0) return t;
  const l = new Proxy(t, o === 2 ? r : n);
  return s.set(t, l), l;
}
function br(t) {
  return nr(t) ? br(t.__v_raw) : !!(t && t.__v_isReactive);
}
function nr(t) {
  return !!(t && t.__v_isReadonly);
}
function Mt(t) {
  return !!(t && t.__v_isShallow);
}
function $a(t) {
  return t ? !!t.__v_raw : !1;
}
function ye(t) {
  const e = t && t.__v_raw;
  return e ? ye(e) : t;
}
function y1(t) {
  return (
    !be(t, "__v_skip") && Object.isExtensible(t) && df(t, "__v_skip", !0), t
  );
}
const Ze = (t) => (Re(t) ? Zt(t) : t),
  Il = (t) => (Re(t) ? Rf(t) : t);
function nt(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function Of(t) {
  return jf(t, !1);
}
function b1(t) {
  return jf(t, !0);
}
function jf(t, e) {
  return nt(t) ? t : new w1(t, e);
}
class w1 {
  constructor(e, n) {
    (this.dep = new Da()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? e : ye(e)),
      (this._value = n ? e : Ze(e)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue,
      r = this.__v_isShallow || Mt(e) || nr(e);
    (e = r ? e : ye(e)),
      Tn(e, n) &&
        ((this._rawValue = e),
        (this._value = r ? e : Ze(e)),
        this.dep.trigger());
  }
}
function wr(t) {
  return nt(t) ? t.value : t;
}
const v1 = {
  get: (t, e, n) => (e === "__v_raw" ? t : wr(Reflect.get(t, e, n))),
  set: (t, e, n, r) => {
    const s = t[e];
    return nt(s) && !nt(n) ? ((s.value = n), !0) : Reflect.set(t, e, n, r);
  },
};
function Pf(t) {
  return br(t) ? t : new Proxy(t, v1);
}
class x1 {
  constructor(e, n, r) {
    (this.fn = e),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Da(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = ms - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Se !== this))
      return yf(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return vf(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function k1(t, e, n = !1) {
  let r, s;
  return ce(t) ? (r = t) : ((r = t.get), (s = t.set)), new x1(r, s, n);
}
const $s = {},
  Ci = new WeakMap();
let Wn;
function _1(t, e = !1, n = Wn) {
  if (n) {
    let r = Ci.get(n);
    r || Ci.set(n, (r = [])), r.push(t);
  }
}
function S1(t, e, n = Ce) {
  const {
      immediate: r,
      deep: s,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: a,
    } = n,
    c = (f) => (s ? f : Mt(f) || s === !1 || s === 0 ? _n(f, 1) : _n(f));
  let u,
    d,
    h,
    p,
    y = !1,
    b = !1;
  if (
    (nt(t)
      ? ((d = () => t.value), (y = Mt(t)))
      : br(t)
        ? ((d = () => c(t)), (y = !0))
        : ae(t)
          ? ((b = !0),
            (y = t.some((f) => br(f) || Mt(f))),
            (d = () =>
              t.map((f) => {
                if (nt(f)) return f.value;
                if (br(f)) return c(f);
                if (ce(f)) return a ? a(f, 2) : f();
              })))
          : ce(t)
            ? e
              ? (d = a ? () => a(t, 2) : t)
              : (d = () => {
                  if (h) {
                    Ln();
                    try {
                      h();
                    } finally {
                      Nn();
                    }
                  }
                  const f = Wn;
                  Wn = u;
                  try {
                    return a ? a(t, 3, [p]) : t(p);
                  } finally {
                    Wn = f;
                  }
                })
            : (d = qt),
    e && s)
  ) {
    const f = d,
      g = s === !0 ? 1 / 0 : s;
    d = () => _n(f(), g);
  }
  const x = Xm(),
    v = () => {
      u.stop(), x && x.active && Pa(x.effects, u);
    };
  if (i && e) {
    const f = e;
    e = (...g) => {
      f(...g), v();
    };
  }
  let E = b ? new Array(t.length).fill($s) : $s;
  const R = (f) => {
    if (!(!(u.flags & 1) || (!u.dirty && !f)))
      if (e) {
        const g = u.run();
        if (s || y || (b ? g.some((m, w) => Tn(m, E[w])) : Tn(g, E))) {
          h && h();
          const m = Wn;
          Wn = u;
          try {
            const w = [g, E === $s ? void 0 : b && E[0] === $s ? [] : E, p];
            a ? a(e, 3, w) : e(...w), (E = g);
          } finally {
            Wn = m;
          }
        }
      } else u.run();
  };
  return (
    l && l(R),
    (u = new mf(d)),
    (u.scheduler = o ? () => o(R, !1) : R),
    (p = (f) => _1(f, !1, u)),
    (h = u.onStop =
      () => {
        const f = Ci.get(u);
        if (f) {
          if (a) a(f, 4);
          else for (const g of f) g();
          Ci.delete(u);
        }
      }),
    e ? (r ? R(!0) : (E = u.run())) : o ? o(R.bind(null, !0), !0) : u.run(),
    (v.pause = u.pause.bind(u)),
    (v.resume = u.resume.bind(u)),
    (v.stop = v),
    v
  );
}
function _n(t, e = 1 / 0, n) {
  if (e <= 0 || !Re(t) || t.__v_skip || ((n = n || new Set()), n.has(t)))
    return t;
  if ((n.add(t), e--, nt(t))) _n(t.value, e, n);
  else if (ae(t)) for (let r = 0; r < t.length; r++) _n(t[r], e, n);
  else if (lf(t) || yr(t))
    t.forEach((r) => {
      _n(r, e, n);
    });
  else if (uf(t)) {
    for (const r in t) _n(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && _n(t[r], e, n);
  }
  return t;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ps(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (s) {
    Eo(s, e, n);
  }
}
function Gt(t, e, n, r) {
  if (ce(t)) {
    const s = Ps(t, e, n, r);
    return (
      s &&
        af(s) &&
        s.catch((i) => {
          Eo(i, e, n);
        }),
      s
    );
  }
  if (ae(t)) {
    const s = [];
    for (let i = 0; i < t.length; i++) s.push(Gt(t[i], e, n, r));
    return s;
  }
}
function Eo(t, e, n, r = !0) {
  const s = e ? e.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (e && e.appContext.config) || Ce;
  if (e) {
    let l = e.parent;
    const a = e.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](t, a, c) === !1) return;
      }
      l = l.parent;
    }
    if (i) {
      Ln(), Ps(i, null, 10, [t, a, c]), Nn();
      return;
    }
  }
  C1(t, n, s, r, o);
}
function C1(t, e, n, r = !0, s = !1) {
  if (s) throw t;
  console.error(t);
}
const ut = [];
let $t = -1;
const vr = [];
let gn = null,
  dr = 0;
const If = Promise.resolve();
let Ei = null;
function Lf(t) {
  const e = Ei || If;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function E1(t) {
  let e = $t + 1,
    n = ut.length;
  for (; e < n; ) {
    const r = (e + n) >>> 1,
      s = ut[r],
      i = ys(s);
    i < t || (i === t && s.flags & 2) ? (e = r + 1) : (n = r);
  }
  return e;
}
function Fa(t) {
  if (!(t.flags & 1)) {
    const e = ys(t),
      n = ut[ut.length - 1];
    !n || (!(t.flags & 2) && e >= ys(n)) ? ut.push(t) : ut.splice(E1(e), 0, t),
      (t.flags |= 1),
      Nf();
  }
}
function Nf() {
  Ei || (Ei = If.then(Df));
}
function A1(t) {
  ae(t)
    ? vr.push(...t)
    : gn && t.id === -1
      ? gn.splice(dr + 1, 0, t)
      : t.flags & 1 || (vr.push(t), (t.flags |= 1)),
    Nf();
}
function Jc(t, e, n = $t + 1) {
  for (; n < ut.length; n++) {
    const r = ut[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid) continue;
      ut.splice(n, 1),
        n--,
        r.flags & 4 && (r.flags &= -2),
        r(),
        r.flags & 4 || (r.flags &= -2);
    }
  }
}
function zf(t) {
  if (vr.length) {
    const e = [...new Set(vr)].sort((n, r) => ys(n) - ys(r));
    if (((vr.length = 0), gn)) {
      gn.push(...e);
      return;
    }
    for (gn = e, dr = 0; dr < gn.length; dr++) {
      const n = gn[dr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (gn = null), (dr = 0);
  }
}
const ys = (t) => (t.id == null ? (t.flags & 2 ? -1 : 1 / 0) : t.id);
function Df(t) {
  try {
    for ($t = 0; $t < ut.length; $t++) {
      const e = ut[$t];
      e &&
        !(e.flags & 8) &&
        (e.flags & 4 && (e.flags &= -2),
        Ps(e, e.i, e.i ? 15 : 14),
        e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; $t < ut.length; $t++) {
      const e = ut[$t];
      e && (e.flags &= -2);
    }
    ($t = -1),
      (ut.length = 0),
      zf(),
      (Ei = null),
      (ut.length || vr.length) && Df();
  }
}
let tt = null,
  Bf = null;
function Ai(t) {
  const e = tt;
  return (tt = t), (Bf = (t && t.type.__scopeId) || null), e;
}
function M1(t, e = tt, n) {
  if (!e || t._n) return t;
  const r = (...s) => {
    r._d && lu(-1);
    const i = Ai(e);
    let o;
    try {
      o = t(...s);
    } finally {
      Ai(i), r._d && lu(1);
    }
    return o;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function $n(t, e, n, r) {
  const s = t.dirs,
    i = e && e.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[r];
    a && (Ln(), Gt(a, n, 8, [t.el, l, t, e]), Nn());
  }
}
const Hf = Symbol("_vte"),
  T1 = (t) => t.__isTeleport,
  es = (t) => t && (t.disabled || t.disabled === ""),
  Gc = (t) => t && (t.defer || t.defer === ""),
  Qc = (t) => typeof SVGElement < "u" && t instanceof SVGElement,
  Yc = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement,
  Ll = (t, e) => {
    const n = t && t.to;
    return Le(n) ? (e ? e(n) : null) : n;
  },
  $f = {
    name: "Teleport",
    __isTeleport: !0,
    process(t, e, n, r, s, i, o, l, a, c) {
      const {
          mc: u,
          pc: d,
          pbc: h,
          o: { insert: p, querySelector: y, createText: b, createComment: x },
        } = c,
        v = es(e.props);
      let { shapeFlag: E, children: R, dynamicChildren: f } = e;
      if (t == null) {
        const g = (e.el = b("")),
          m = (e.anchor = b(""));
        p(g, n, r), p(m, n, r);
        const w = (M, _) => {
            E & 16 &&
              (s && s.isCE && (s.ce._teleportTarget = M),
              u(R, M, _, s, i, o, l, a));
          },
          S = () => {
            const M = (e.target = Ll(e.props, y)),
              _ = Ff(M, e, b, p);
            M &&
              (o !== "svg" && Qc(M)
                ? (o = "svg")
                : o !== "mathml" && Yc(M) && (o = "mathml"),
              v || (w(M, _), ii(e, !1)));
          };
        v && (w(n, m), ii(e, !0)),
          Gc(e.props)
            ? lt(() => {
                S(), (e.el.__isMounted = !0);
              }, i)
            : S();
      } else {
        if (Gc(e.props) && !t.el.__isMounted) {
          lt(() => {
            $f.process(t, e, n, r, s, i, o, l, a, c), delete t.el.__isMounted;
          }, i);
          return;
        }
        (e.el = t.el), (e.targetStart = t.targetStart);
        const g = (e.anchor = t.anchor),
          m = (e.target = t.target),
          w = (e.targetAnchor = t.targetAnchor),
          S = es(t.props),
          M = S ? n : m,
          _ = S ? g : w;
        if (
          (o === "svg" || Qc(m)
            ? (o = "svg")
            : (o === "mathml" || Yc(m)) && (o = "mathml"),
          f
            ? (h(t.dynamicChildren, f, M, s, i, o, l), Ua(t, e, !0))
            : a || d(t, e, M, _, s, i, o, l, !1),
          v)
        )
          S
            ? e.props &&
              t.props &&
              e.props.to !== t.props.to &&
              (e.props.to = t.props.to)
            : Fs(e, n, g, c, 1);
        else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
          const T = (e.target = Ll(e.props, y));
          T && Fs(e, T, null, c, 0);
        } else S && Fs(e, m, w, c, 1);
        ii(e, v);
      }
    },
    remove(t, e, n, { um: r, o: { remove: s } }, i) {
      const {
        shapeFlag: o,
        children: l,
        anchor: a,
        targetStart: c,
        targetAnchor: u,
        target: d,
        props: h,
      } = t;
      if ((d && (s(c), s(u)), i && s(a), o & 16)) {
        const p = i || !es(h);
        for (let y = 0; y < l.length; y++) {
          const b = l[y];
          r(b, e, n, p, !!b.dynamicChildren);
        }
      }
    },
    move: Fs,
    hydrate: R1,
  };
function Fs(t, e, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(t.targetAnchor, e, n);
  const { el: o, anchor: l, shapeFlag: a, children: c, props: u } = t,
    d = i === 2;
  if ((d && r(o, e, n), (!d || es(u)) && a & 16))
    for (let h = 0; h < c.length; h++) s(c[h], e, n, 2);
  d && r(l, e, n);
}
function R1(
  t,
  e,
  n,
  r,
  s,
  i,
  {
    o: {
      nextSibling: o,
      parentNode: l,
      querySelector: a,
      insert: c,
      createText: u,
    },
  },
  d,
) {
  const h = (e.target = Ll(e.props, a));
  if (h) {
    const p = es(e.props),
      y = h._lpa || h.firstChild;
    if (e.shapeFlag & 16)
      if (p)
        (e.anchor = d(o(t), e, l(t), n, r, s, i)),
          (e.targetStart = y),
          (e.targetAnchor = y && o(y));
      else {
        e.anchor = o(t);
        let b = y;
        for (; b; ) {
          if (b && b.nodeType === 8) {
            if (b.data === "teleport start anchor") e.targetStart = b;
            else if (b.data === "teleport anchor") {
              (e.targetAnchor = b),
                (h._lpa = e.targetAnchor && o(e.targetAnchor));
              break;
            }
          }
          b = o(b);
        }
        e.targetAnchor || Ff(h, e, u, c), d(y && o(y), e, h, n, r, s, i);
      }
    ii(e, p);
  }
  return e.anchor && o(e.anchor);
}
const Ak = $f;
function ii(t, e) {
  const n = t.ctx;
  if (n && n.ut) {
    let r, s;
    for (
      e
        ? ((r = t.el), (s = t.anchor))
        : ((r = t.targetStart), (s = t.targetAnchor));
      r && r !== s;

    )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid),
        (r = r.nextSibling);
    n.ut();
  }
}
function Ff(t, e, n, r) {
  const s = (e.targetStart = n("")),
    i = (e.targetAnchor = n(""));
  return (s[Hf] = i), t && (r(s, t), r(i, t)), i;
}
function Va(t, e) {
  t.shapeFlag & 6 && t.component
    ? ((t.transition = e), Va(t.component.subTree, e))
    : t.shapeFlag & 128
      ? ((t.ssContent.transition = e.clone(t.ssContent)),
        (t.ssFallback.transition = e.clone(t.ssFallback)))
      : (t.transition = e);
}
/*! #__NO_SIDE_EFFECTS__ */ function Vf(t, e) {
  return ce(t) ? rt({ name: t.name }, e, { setup: t }) : t;
}
function Mk() {
  const t = Eg();
  return t
    ? (t.appContext.config.idPrefix || "v") + "-" + t.ids[0] + t.ids[1]++
    : "";
}
function Wf(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Mi(t, e, n, r, s = !1) {
  if (ae(t)) {
    t.forEach((y, b) => Mi(y, e && (ae(e) ? e[b] : e), n, r, s));
    return;
  }
  if (xr(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      Mi(t, e, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Ga(r.component) : r.el,
    o = s ? null : i,
    { i: l, r: a } = t,
    c = e && e.r,
    u = l.refs === Ce ? (l.refs = {}) : l.refs,
    d = l.setupState,
    h = ye(d),
    p = d === Ce ? () => !1 : (y) => be(h, y);
  if (
    (c != null &&
      c !== a &&
      (Le(c)
        ? ((u[c] = null), p(c) && (d[c] = null))
        : nt(c) && (c.value = null)),
    ce(a))
  )
    Ps(a, l, 12, [o, u]);
  else {
    const y = Le(a),
      b = nt(a);
    if (y || b) {
      const x = () => {
        if (t.f) {
          const v = y ? (p(a) ? d[a] : u[a]) : a.value;
          s
            ? ae(v) && Pa(v, i)
            : ae(v)
              ? v.includes(i) || v.push(i)
              : y
                ? ((u[a] = [i]), p(a) && (d[a] = u[a]))
                : ((a.value = [i]), t.k && (u[t.k] = a.value));
        } else
          y
            ? ((u[a] = o), p(a) && (d[a] = o))
            : b && ((a.value = o), t.k && (u[t.k] = o));
      };
      o ? ((x.id = -1), lt(x, n)) : x();
    }
  }
}
_o().requestIdleCallback;
_o().cancelIdleCallback;
const xr = (t) => !!t.type.__asyncLoader,
  Uf = (t) => t.type.__isKeepAlive;
function O1(t, e) {
  Kf(t, "a", e);
}
function j1(t, e) {
  Kf(t, "da", e);
}
function Kf(t, e, n = Ge) {
  const r =
    t.__wdc ||
    (t.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return t();
    });
  if ((Ao(e, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Uf(s.parent.vnode) && P1(r, e, n, s), (s = s.parent);
  }
}
function P1(t, e, n, r) {
  const s = Ao(e, t, r, !0);
  qf(() => {
    Pa(r[e], s);
  }, n);
}
function Ao(t, e, n = Ge, r = !1) {
  if (n) {
    const s = n[t] || (n[t] = []),
      i =
        e.__weh ||
        (e.__weh = (...o) => {
          Ln();
          const l = Is(n),
            a = Gt(e, n, t, o);
          return l(), Nn(), a;
        });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const hn =
    (t) =>
    (e, n = Ge) => {
      (!vs || t === "sp") && Ao(t, (...r) => e(...r), n);
    },
  I1 = hn("bm"),
  L1 = hn("m"),
  N1 = hn("bu"),
  z1 = hn("u"),
  D1 = hn("bum"),
  qf = hn("um"),
  B1 = hn("sp"),
  H1 = hn("rtg"),
  $1 = hn("rtc");
function F1(t, e = Ge) {
  Ao("ec", t, e);
}
const V1 = "components";
function Nl(t, e) {
  return U1(V1, t, !0, e) || t;
}
const W1 = Symbol.for("v-ndc");
function U1(t, e, n = !0, r = !1) {
  const s = tt || Ge;
  if (s) {
    const i = s.type;
    {
      const l = Og(i, !1);
      if (l && (l === e || l === Tt(e) || l === ko(Tt(e)))) return i;
    }
    const o = Xc(s[t] || i[t], e) || Xc(s.appContext[t], e);
    return !o && r ? i : o;
  }
}
function Xc(t, e) {
  return t && (t[e] || t[Tt(e)] || t[ko(Tt(e))]);
}
function Tk(t, e, n, r) {
  let s;
  const i = n,
    o = ae(t);
  if (o || Le(t)) {
    const l = o && br(t);
    let a = !1;
    l && ((a = !Mt(t)), (t = Co(t))), (s = new Array(t.length));
    for (let c = 0, u = t.length; c < u; c++)
      s[c] = e(a ? Ze(t[c]) : t[c], c, void 0, i);
  } else if (typeof t == "number") {
    s = new Array(t);
    for (let l = 0; l < t; l++) s[l] = e(l + 1, l, void 0, i);
  } else if (Re(t))
    if (t[Symbol.iterator]) s = Array.from(t, (l, a) => e(l, a, void 0, i));
    else {
      const l = Object.keys(t);
      s = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const u = l[a];
        s[a] = e(t[u], u, a, i);
      }
    }
  else s = [];
  return s;
}
function Vs(t, e, n = {}, r, s) {
  if (tt.ce || (tt.parent && xr(tt.parent) && tt.parent.ce))
    return (
      e !== "default" && (n.name = e),
      at(),
      Kn(et, null, [dt("slot", n, r && r())], 64)
    );
  let i = t[e];
  i && i._c && (i._d = !1), at();
  const o = i && Jf(i(n)),
    l = n.key || (o && o.key),
    a = Kn(
      et,
      { key: (l && !fn(l) ? l : `_${e}`) + (!o && r ? "_fb" : "") },
      o || (r ? r() : []),
      o && t._ === 1 ? 64 : -2,
    );
  return (
    a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    a
  );
}
function Jf(t) {
  return t.some((e) =>
    ws(e) ? !(e.type === jn || (e.type === et && !Jf(e.children))) : !0,
  )
    ? t
    : null;
}
const zl = (t) => (t ? (hh(t) ? Ga(t) : zl(t.parent)) : null),
  ts = rt(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => zl(t.parent),
    $root: (t) => zl(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Qf(t),
    $forceUpdate: (t) =>
      t.f ||
      (t.f = () => {
        Fa(t.update);
      }),
    $nextTick: (t) => t.n || (t.n = Lf.bind(t.proxy)),
    $watch: (t) => fg.bind(t),
  }),
  Go = (t, e) => t !== Ce && !t.__isScriptSetup && be(t, e),
  K1 = {
    get({ _: t }, e) {
      if (e === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: i,
        accessCache: o,
        type: l,
        appContext: a,
      } = t;
      let c;
      if (e[0] !== "$") {
        const p = o[e];
        if (p !== void 0)
          switch (p) {
            case 1:
              return r[e];
            case 2:
              return s[e];
            case 4:
              return n[e];
            case 3:
              return i[e];
          }
        else {
          if (Go(r, e)) return (o[e] = 1), r[e];
          if (s !== Ce && be(s, e)) return (o[e] = 2), s[e];
          if ((c = t.propsOptions[0]) && be(c, e)) return (o[e] = 3), i[e];
          if (n !== Ce && be(n, e)) return (o[e] = 4), n[e];
          Dl && (o[e] = 0);
        }
      }
      const u = ts[e];
      let d, h;
      if (u) return e === "$attrs" && Xe(t.attrs, "get", ""), u(t);
      if ((d = l.__cssModules) && (d = d[e])) return d;
      if (n !== Ce && be(n, e)) return (o[e] = 4), n[e];
      if (((h = a.config.globalProperties), be(h, e))) return h[e];
    },
    set({ _: t }, e, n) {
      const { data: r, setupState: s, ctx: i } = t;
      return Go(s, e)
        ? ((s[e] = n), !0)
        : r !== Ce && be(r, e)
          ? ((r[e] = n), !0)
          : be(t.props, e) || (e[0] === "$" && e.slice(1) in t)
            ? !1
            : ((i[e] = n), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: i,
        },
      },
      o,
    ) {
      let l;
      return (
        !!n[o] ||
        (t !== Ce && be(t, o)) ||
        Go(e, o) ||
        ((l = i[0]) && be(l, o)) ||
        be(r, o) ||
        be(ts, o) ||
        be(s.config.globalProperties, o)
      );
    },
    defineProperty(t, e, n) {
      return (
        n.get != null
          ? (t._.accessCache[e] = 0)
          : be(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
      );
    },
  };
function Zc(t) {
  return ae(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
}
let Dl = !0;
function q1(t) {
  const e = Qf(t),
    n = t.proxy,
    r = t.ctx;
  (Dl = !1), e.beforeCreate && eu(e.beforeCreate, t, "bc");
  const {
    data: s,
    computed: i,
    methods: o,
    watch: l,
    provide: a,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: h,
    beforeUpdate: p,
    updated: y,
    activated: b,
    deactivated: x,
    beforeDestroy: v,
    beforeUnmount: E,
    destroyed: R,
    unmounted: f,
    render: g,
    renderTracked: m,
    renderTriggered: w,
    errorCaptured: S,
    serverPrefetch: M,
    expose: _,
    inheritAttrs: T,
    components: F,
    directives: N,
    filters: I,
  } = e;
  if ((c && J1(c, r, null), o))
    for (const j in o) {
      const B = o[j];
      ce(B) && (r[j] = B.bind(n));
    }
  if (s) {
    const j = s.call(n, n);
    Re(j) && (t.data = Zt(j));
  }
  if (((Dl = !0), i))
    for (const j in i) {
      const B = i[j],
        U = ce(B) ? B.bind(n, n) : ce(B.get) ? B.get.bind(n, n) : qt,
        ie = !ce(B) && ce(B.set) ? B.set.bind(n) : qt,
        G = Ot({ get: U, set: ie });
      Object.defineProperty(r, j, {
        enumerable: !0,
        configurable: !0,
        get: () => G.value,
        set: (de) => (G.value = de),
      });
    }
  if (l) for (const j in l) Gf(l[j], r, n, j);
  if (a) {
    const j = ce(a) ? a.call(n) : a;
    Reflect.ownKeys(j).forEach((B) => {
      oi(B, j[B]);
    });
  }
  u && eu(u, t, "c");
  function k(j, B) {
    ae(B) ? B.forEach((U) => j(U.bind(n))) : B && j(B.bind(n));
  }
  if (
    (k(I1, d),
    k(L1, h),
    k(N1, p),
    k(z1, y),
    k(O1, b),
    k(j1, x),
    k(F1, S),
    k($1, m),
    k(H1, w),
    k(D1, E),
    k(qf, f),
    k(B1, M),
    ae(_))
  )
    if (_.length) {
      const j = t.exposed || (t.exposed = {});
      _.forEach((B) => {
        Object.defineProperty(j, B, {
          get: () => n[B],
          set: (U) => (n[B] = U),
        });
      });
    } else t.exposed || (t.exposed = {});
  g && t.render === qt && (t.render = g),
    T != null && (t.inheritAttrs = T),
    F && (t.components = F),
    N && (t.directives = N),
    M && Wf(t);
}
function J1(t, e, n = qt) {
  ae(t) && (t = Bl(t));
  for (const r in t) {
    const s = t[r];
    let i;
    Re(s)
      ? "default" in s
        ? (i = un(s.from || r, s.default, !0))
        : (i = un(s.from || r))
      : (i = un(s)),
      nt(i)
        ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (e[r] = i);
  }
}
function eu(t, e, n) {
  Gt(ae(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function Gf(t, e, n, r) {
  let s = r.includes(".") ? ah(n, r) : () => n[r];
  if (Le(t)) {
    const i = e[t];
    ce(i) && _r(s, i);
  } else if (ce(t)) _r(s, t.bind(n));
  else if (Re(t))
    if (ae(t)) t.forEach((i) => Gf(i, e, n, r));
    else {
      const i = ce(t.handler) ? t.handler.bind(n) : e[t.handler];
      ce(i) && _r(s, i, t);
    }
}
function Qf(t) {
  const e = t.type,
    { mixins: n, extends: r } = e,
    {
      mixins: s,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = t.appContext,
    l = i.get(e);
  let a;
  return (
    l
      ? (a = l)
      : !s.length && !n && !r
        ? (a = e)
        : ((a = {}),
          s.length && s.forEach((c) => Ti(a, c, o, !0)),
          Ti(a, e, o)),
    Re(e) && i.set(e, a),
    a
  );
}
function Ti(t, e, n, r = !1) {
  const { mixins: s, extends: i } = e;
  i && Ti(t, i, n, !0), s && s.forEach((o) => Ti(t, o, n, !0));
  for (const o in e)
    if (!(r && o === "expose")) {
      const l = G1[o] || (n && n[o]);
      t[o] = l ? l(t[o], e[o]) : e[o];
    }
  return t;
}
const G1 = {
  data: tu,
  props: nu,
  emits: nu,
  methods: Kr,
  computed: Kr,
  beforeCreate: ot,
  created: ot,
  beforeMount: ot,
  mounted: ot,
  beforeUpdate: ot,
  updated: ot,
  beforeDestroy: ot,
  beforeUnmount: ot,
  destroyed: ot,
  unmounted: ot,
  activated: ot,
  deactivated: ot,
  errorCaptured: ot,
  serverPrefetch: ot,
  components: Kr,
  directives: Kr,
  watch: Y1,
  provide: tu,
  inject: Q1,
};
function tu(t, e) {
  return e
    ? t
      ? function () {
          return rt(
            ce(t) ? t.call(this, this) : t,
            ce(e) ? e.call(this, this) : e,
          );
        }
      : e
    : t;
}
function Q1(t, e) {
  return Kr(Bl(t), Bl(e));
}
function Bl(t) {
  if (ae(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function ot(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Kr(t, e) {
  return t ? rt(Object.create(null), t, e) : e;
}
function nu(t, e) {
  return t
    ? ae(t) && ae(e)
      ? [...new Set([...t, ...e])]
      : rt(Object.create(null), Zc(t), Zc(e ?? {}))
    : e;
}
function Y1(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = rt(Object.create(null), t);
  for (const r in e) n[r] = ot(t[r], e[r]);
  return n;
}
function Yf() {
  return {
    app: null,
    config: {
      isNativeTag: Bm,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let X1 = 0;
function Z1(t, e) {
  return function (r, s = null) {
    ce(r) || (r = rt({}, r)), s != null && !Re(s) && (s = null);
    const i = Yf(),
      o = new WeakSet(),
      l = [];
    let a = !1;
    const c = (i.app = {
      _uid: X1++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Pg,
      get config() {
        return i.config;
      },
      set config(u) {},
      use(u, ...d) {
        return (
          o.has(u) ||
            (u && ce(u.install)
              ? (o.add(u), u.install(c, ...d))
              : ce(u) && (o.add(u), u(c, ...d))),
          c
        );
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), c;
      },
      component(u, d) {
        return d ? ((i.components[u] = d), c) : i.components[u];
      },
      directive(u, d) {
        return d ? ((i.directives[u] = d), c) : i.directives[u];
      },
      mount(u, d, h) {
        if (!a) {
          const p = c._ceVNode || dt(r, s);
          return (
            (p.appContext = i),
            h === !0 ? (h = "svg") : h === !1 && (h = void 0),
            t(p, u, h),
            (a = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            Ga(p.component)
          );
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a &&
          (Gt(l, c._instance, 16),
          t(null, c._container),
          delete c._container.__vue_app__);
      },
      provide(u, d) {
        return (i.provides[u] = d), c;
      },
      runWithContext(u) {
        const d = kr;
        kr = c;
        try {
          return u();
        } finally {
          kr = d;
        }
      },
    });
    return c;
  };
}
let kr = null;
function oi(t, e) {
  if (Ge) {
    let n = Ge.provides;
    const r = Ge.parent && Ge.parent.provides;
    r === n && (n = Ge.provides = Object.create(r)), (n[t] = e);
  }
}
function un(t, e, n = !1) {
  const r = Ge || tt;
  if (r || kr) {
    const s = kr
      ? kr._context.provides
      : r
        ? r.parent == null
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0;
    if (s && t in s) return s[t];
    if (arguments.length > 1) return n && ce(e) ? e.call(r && r.proxy) : e;
  }
}
const Xf = {},
  Zf = () => Object.create(Xf),
  eh = (t) => Object.getPrototypeOf(t) === Xf;
function eg(t, e, n, r = !1) {
  const s = {},
    i = Zf();
  (t.propsDefaults = Object.create(null)), th(t, e, s, i);
  for (const o in t.propsOptions[0]) o in s || (s[o] = void 0);
  n ? (t.props = r ? s : Tf(s)) : t.type.props ? (t.props = s) : (t.props = i),
    (t.attrs = i);
}
function tg(t, e, n, r) {
  const {
      props: s,
      attrs: i,
      vnode: { patchFlag: o },
    } = t,
    l = ye(s),
    [a] = t.propsOptions;
  let c = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let h = u[d];
        if (Mo(t.emitsOptions, h)) continue;
        const p = e[h];
        if (a)
          if (be(i, h)) p !== i[h] && ((i[h] = p), (c = !0));
          else {
            const y = Tt(h);
            s[y] = Hl(a, l, y, p, t, !1);
          }
        else p !== i[h] && ((i[h] = p), (c = !0));
      }
    }
  } else {
    th(t, e, s, i) && (c = !0);
    let u;
    for (const d in l)
      (!e || (!be(e, d) && ((u = or(d)) === d || !be(e, u)))) &&
        (a
          ? n &&
            (n[d] !== void 0 || n[u] !== void 0) &&
            (s[d] = Hl(a, l, d, void 0, t, !0))
          : delete s[d]);
    if (i !== l)
      for (const d in i) (!e || !be(e, d)) && (delete i[d], (c = !0));
  }
  c && cn(t.attrs, "set", "");
}
function th(t, e, n, r) {
  const [s, i] = t.propsOptions;
  let o = !1,
    l;
  if (e)
    for (let a in e) {
      if (Yr(a)) continue;
      const c = e[a];
      let u;
      s && be(s, (u = Tt(a)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((l || (l = {}))[u] = c)
        : Mo(t.emitsOptions, a) ||
          ((!(a in r) || c !== r[a]) && ((r[a] = c), (o = !0)));
    }
  if (i) {
    const a = ye(n),
      c = l || Ce;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = Hl(s, a, d, c[d], t, !be(c, d));
    }
  }
  return o;
}
function Hl(t, e, n, r, s, i) {
  const o = t[n];
  if (o != null) {
    const l = be(o, "default");
    if (l && r === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && ce(a)) {
        const { propsDefaults: c } = s;
        if (n in c) r = c[n];
        else {
          const u = Is(s);
          (r = c[n] = a.call(null, e)), u();
        }
      } else r = a;
      s.ce && s.ce._setProp(n, r);
    }
    o[0] &&
      (i && !l ? (r = !1) : o[1] && (r === "" || r === or(n)) && (r = !0));
  }
  return r;
}
const ng = new WeakMap();
function nh(t, e, n = !1) {
  const r = n ? ng : e.propsCache,
    s = r.get(t);
  if (s) return s;
  const i = t.props,
    o = {},
    l = [];
  let a = !1;
  if (!ce(t)) {
    const u = (d) => {
      a = !0;
      const [h, p] = nh(d, e, !0);
      rt(o, h), p && l.push(...p);
    };
    !n && e.mixins.length && e.mixins.forEach(u),
      t.extends && u(t.extends),
      t.mixins && t.mixins.forEach(u);
  }
  if (!i && !a) return Re(t) && r.set(t, gr), gr;
  if (ae(i))
    for (let u = 0; u < i.length; u++) {
      const d = Tt(i[u]);
      ru(d) && (o[d] = Ce);
    }
  else if (i)
    for (const u in i) {
      const d = Tt(u);
      if (ru(d)) {
        const h = i[u],
          p = (o[d] = ae(h) || ce(h) ? { type: h } : rt({}, h)),
          y = p.type;
        let b = !1,
          x = !0;
        if (ae(y))
          for (let v = 0; v < y.length; ++v) {
            const E = y[v],
              R = ce(E) && E.name;
            if (R === "Boolean") {
              b = !0;
              break;
            } else R === "String" && (x = !1);
          }
        else b = ce(y) && y.name === "Boolean";
        (p[0] = b), (p[1] = x), (b || be(p, "default")) && l.push(d);
      }
    }
  const c = [o, l];
  return Re(t) && r.set(t, c), c;
}
function ru(t) {
  return t[0] !== "$" && !Yr(t);
}
const rh = (t) => t[0] === "_" || t === "$stable",
  Wa = (t) => (ae(t) ? t.map(Ut) : [Ut(t)]),
  rg = (t, e, n) => {
    if (e._n) return e;
    const r = M1((...s) => Wa(e(...s)), n);
    return (r._c = !1), r;
  },
  sh = (t, e, n) => {
    const r = t._ctx;
    for (const s in t) {
      if (rh(s)) continue;
      const i = t[s];
      if (ce(i)) e[s] = rg(s, i, r);
      else if (i != null) {
        const o = Wa(i);
        e[s] = () => o;
      }
    }
  },
  ih = (t, e) => {
    const n = Wa(e);
    t.slots.default = () => n;
  },
  oh = (t, e, n) => {
    for (const r in e) (n || r !== "_") && (t[r] = e[r]);
  },
  sg = (t, e, n) => {
    const r = (t.slots = Zf());
    if (t.vnode.shapeFlag & 32) {
      const s = e._;
      s ? (oh(r, e, n), n && df(r, "_", s, !0)) : sh(e, r);
    } else e && ih(t, e);
  },
  ig = (t, e, n) => {
    const { vnode: r, slots: s } = t;
    let i = !0,
      o = Ce;
    if (r.shapeFlag & 32) {
      const l = e._;
      l
        ? n && l === 1
          ? (i = !1)
          : oh(s, e, n)
        : ((i = !e.$stable), sh(e, s)),
        (o = e);
    } else e && (ih(t, e), (o = { default: 1 }));
    if (i) for (const l in s) !rh(l) && o[l] == null && delete s[l];
  },
  lt = wg;
function og(t) {
  return lg(t);
}
function lg(t, e) {
  const n = _o();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: a,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: h,
      setScopeId: p = qt,
      insertStaticContent: y,
    } = t,
    b = (
      C,
      A,
      O,
      L = null,
      $ = null,
      D = null,
      X = void 0,
      Q = null,
      q = !!A.dynamicChildren,
    ) => {
      if (C === A) return;
      C && !$r(C, A) && ((L = P(C)), de(C, $, D, !0), (C = null)),
        A.patchFlag === -2 && ((q = !1), (A.dynamicChildren = null));
      const { type: W, ref: se, shapeFlag: Z } = A;
      switch (W) {
        case To:
          x(C, A, O, L);
          break;
        case jn:
          v(C, A, O, L);
          break;
        case Yo:
          C == null && E(A, O, L, X);
          break;
        case et:
          F(C, A, O, L, $, D, X, Q, q);
          break;
        default:
          Z & 1
            ? g(C, A, O, L, $, D, X, Q, q)
            : Z & 6
              ? N(C, A, O, L, $, D, X, Q, q)
              : (Z & 64 || Z & 128) && W.process(C, A, O, L, $, D, X, Q, q, ee);
      }
      se != null && $ && Mi(se, C && C.ref, D, A || C, !A);
    },
    x = (C, A, O, L) => {
      if (C == null) r((A.el = l(A.children)), O, L);
      else {
        const $ = (A.el = C.el);
        A.children !== C.children && c($, A.children);
      }
    },
    v = (C, A, O, L) => {
      C == null ? r((A.el = a(A.children || "")), O, L) : (A.el = C.el);
    },
    E = (C, A, O, L) => {
      [C.el, C.anchor] = y(C.children, A, O, L, C.el, C.anchor);
    },
    R = ({ el: C, anchor: A }, O, L) => {
      let $;
      for (; C && C !== A; ) ($ = h(C)), r(C, O, L), (C = $);
      r(A, O, L);
    },
    f = ({ el: C, anchor: A }) => {
      let O;
      for (; C && C !== A; ) (O = h(C)), s(C), (C = O);
      s(A);
    },
    g = (C, A, O, L, $, D, X, Q, q) => {
      A.type === "svg" ? (X = "svg") : A.type === "math" && (X = "mathml"),
        C == null ? m(A, O, L, $, D, X, Q, q) : M(C, A, $, D, X, Q, q);
    },
    m = (C, A, O, L, $, D, X, Q) => {
      let q, W;
      const { props: se, shapeFlag: Z, transition: te, dirs: le } = C;
      if (
        ((q = C.el = o(C.type, D, se && se.is, se)),
        Z & 8
          ? u(q, C.children)
          : Z & 16 && S(C.children, q, null, L, $, Qo(C, D), X, Q),
        le && $n(C, null, L, "created"),
        w(q, C, C.scopeId, X, L),
        se)
      ) {
        for (const _e in se)
          _e !== "value" && !Yr(_e) && i(q, _e, null, se[_e], D, L);
        "value" in se && i(q, "value", null, se.value, D),
          (W = se.onVnodeBeforeMount) && Ht(W, L, C);
      }
      le && $n(C, null, L, "beforeMount");
      const he = ag($, te);
      he && te.beforeEnter(q),
        r(q, A, O),
        ((W = se && se.onVnodeMounted) || he || le) &&
          lt(() => {
            W && Ht(W, L, C),
              he && te.enter(q),
              le && $n(C, null, L, "mounted");
          }, $);
    },
    w = (C, A, O, L, $) => {
      if ((O && p(C, O), L)) for (let D = 0; D < L.length; D++) p(C, L[D]);
      if ($) {
        let D = $.subTree;
        if (
          A === D ||
          (uh(D.type) && (D.ssContent === A || D.ssFallback === A))
        ) {
          const X = $.vnode;
          w(C, X, X.scopeId, X.slotScopeIds, $.parent);
        }
      }
    },
    S = (C, A, O, L, $, D, X, Q, q = 0) => {
      for (let W = q; W < C.length; W++) {
        const se = (C[W] = Q ? bn(C[W]) : Ut(C[W]));
        b(null, se, A, O, L, $, D, X, Q);
      }
    },
    M = (C, A, O, L, $, D, X) => {
      const Q = (A.el = C.el);
      let { patchFlag: q, dynamicChildren: W, dirs: se } = A;
      q |= C.patchFlag & 16;
      const Z = C.props || Ce,
        te = A.props || Ce;
      let le;
      if (
        (O && Fn(O, !1),
        (le = te.onVnodeBeforeUpdate) && Ht(le, O, A, C),
        se && $n(A, C, O, "beforeUpdate"),
        O && Fn(O, !0),
        ((Z.innerHTML && te.innerHTML == null) ||
          (Z.textContent && te.textContent == null)) &&
          u(Q, ""),
        W
          ? _(C.dynamicChildren, W, Q, O, L, Qo(A, $), D)
          : X || B(C, A, Q, null, O, L, Qo(A, $), D, !1),
        q > 0)
      ) {
        if (q & 16) T(Q, Z, te, O, $);
        else if (
          (q & 2 && Z.class !== te.class && i(Q, "class", null, te.class, $),
          q & 4 && i(Q, "style", Z.style, te.style, $),
          q & 8)
        ) {
          const he = A.dynamicProps;
          for (let _e = 0; _e < he.length; _e++) {
            const we = he[_e],
              mt = Z[we],
              ht = te[we];
            (ht !== mt || we === "value") && i(Q, we, mt, ht, $, O);
          }
        }
        q & 1 && C.children !== A.children && u(Q, A.children);
      } else !X && W == null && T(Q, Z, te, O, $);
      ((le = te.onVnodeUpdated) || se) &&
        lt(() => {
          le && Ht(le, O, A, C), se && $n(A, C, O, "updated");
        }, L);
    },
    _ = (C, A, O, L, $, D, X) => {
      for (let Q = 0; Q < A.length; Q++) {
        const q = C[Q],
          W = A[Q],
          se =
            q.el && (q.type === et || !$r(q, W) || q.shapeFlag & 70)
              ? d(q.el)
              : O;
        b(q, W, se, null, L, $, D, X, !0);
      }
    },
    T = (C, A, O, L, $) => {
      if (A !== O) {
        if (A !== Ce)
          for (const D in A) !Yr(D) && !(D in O) && i(C, D, A[D], null, $, L);
        for (const D in O) {
          if (Yr(D)) continue;
          const X = O[D],
            Q = A[D];
          X !== Q && D !== "value" && i(C, D, Q, X, $, L);
        }
        "value" in O && i(C, "value", A.value, O.value, $);
      }
    },
    F = (C, A, O, L, $, D, X, Q, q) => {
      const W = (A.el = C ? C.el : l("")),
        se = (A.anchor = C ? C.anchor : l(""));
      let { patchFlag: Z, dynamicChildren: te, slotScopeIds: le } = A;
      le && (Q = Q ? Q.concat(le) : le),
        C == null
          ? (r(W, O, L), r(se, O, L), S(A.children || [], O, se, $, D, X, Q, q))
          : Z > 0 && Z & 64 && te && C.dynamicChildren
            ? (_(C.dynamicChildren, te, O, $, D, X, Q),
              (A.key != null || ($ && A === $.subTree)) && Ua(C, A, !0))
            : B(C, A, O, se, $, D, X, Q, q);
    },
    N = (C, A, O, L, $, D, X, Q, q) => {
      (A.slotScopeIds = Q),
        C == null
          ? A.shapeFlag & 512
            ? $.ctx.activate(A, O, L, X, q)
            : I(A, O, L, $, D, X, q)
          : z(C, A, q);
    },
    I = (C, A, O, L, $, D, X) => {
      const Q = (C.component = Cg(C, L, $));
      if ((Uf(C) && (Q.ctx.renderer = ee), Ag(Q, !1, X), Q.asyncDep)) {
        if (($ && $.registerDep(Q, k, X), !C.el)) {
          const q = (Q.subTree = dt(jn));
          v(null, q, A, O);
        }
      } else k(Q, C, A, O, $, D, X);
    },
    z = (C, A, O) => {
      const L = (A.component = C.component);
      if (yg(C, A, O))
        if (L.asyncDep && !L.asyncResolved) {
          j(L, A, O);
          return;
        } else (L.next = A), L.update();
      else (A.el = C.el), (L.vnode = A);
    },
    k = (C, A, O, L, $, D, X) => {
      const Q = () => {
        if (C.isMounted) {
          let { next: Z, bu: te, u: le, parent: he, vnode: _e } = C;
          {
            const Dt = lh(C);
            if (Dt) {
              Z && ((Z.el = _e.el), j(C, Z, X)),
                Dt.asyncDep.then(() => {
                  C.isUnmounted || Q();
                });
              return;
            }
          }
          let we = Z,
            mt;
          Fn(C, !1),
            Z ? ((Z.el = _e.el), j(C, Z, X)) : (Z = _e),
            te && Wo(te),
            (mt = Z.props && Z.props.onVnodeBeforeUpdate) && Ht(mt, he, Z, _e),
            Fn(C, !0);
          const ht = iu(C),
            zt = C.subTree;
          (C.subTree = ht),
            b(zt, ht, d(zt.el), P(zt), C, $, D),
            (Z.el = ht.el),
            we === null && bg(C, ht.el),
            le && lt(le, $),
            (mt = Z.props && Z.props.onVnodeUpdated) &&
              lt(() => Ht(mt, he, Z, _e), $);
        } else {
          let Z;
          const { el: te, props: le } = A,
            { bm: he, m: _e, parent: we, root: mt, type: ht } = C,
            zt = xr(A);
          Fn(C, !1),
            he && Wo(he),
            !zt && (Z = le && le.onVnodeBeforeMount) && Ht(Z, we, A),
            Fn(C, !0);
          {
            mt.ce && mt.ce._injectChildStyle(ht);
            const Dt = (C.subTree = iu(C));
            b(null, Dt, O, L, C, $, D), (A.el = Dt.el);
          }
          if ((_e && lt(_e, $), !zt && (Z = le && le.onVnodeMounted))) {
            const Dt = A;
            lt(() => Ht(Z, we, Dt), $);
          }
          (A.shapeFlag & 256 ||
            (we && xr(we.vnode) && we.vnode.shapeFlag & 256)) &&
            C.a &&
            lt(C.a, $),
            (C.isMounted = !0),
            (A = O = L = null);
        }
      };
      C.scope.on();
      const q = (C.effect = new mf(Q));
      C.scope.off();
      const W = (C.update = q.run.bind(q)),
        se = (C.job = q.runIfDirty.bind(q));
      (se.i = C), (se.id = C.uid), (q.scheduler = () => Fa(se)), Fn(C, !0), W();
    },
    j = (C, A, O) => {
      A.component = C;
      const L = C.vnode.props;
      (C.vnode = A),
        (C.next = null),
        tg(C, A.props, L, O),
        ig(C, A.children, O),
        Ln(),
        Jc(C),
        Nn();
    },
    B = (C, A, O, L, $, D, X, Q, q = !1) => {
      const W = C && C.children,
        se = C ? C.shapeFlag : 0,
        Z = A.children,
        { patchFlag: te, shapeFlag: le } = A;
      if (te > 0) {
        if (te & 128) {
          ie(W, Z, O, L, $, D, X, Q, q);
          return;
        } else if (te & 256) {
          U(W, Z, O, L, $, D, X, Q, q);
          return;
        }
      }
      le & 8
        ? (se & 16 && ve(W, $, D), Z !== W && u(O, Z))
        : se & 16
          ? le & 16
            ? ie(W, Z, O, L, $, D, X, Q, q)
            : ve(W, $, D, !0)
          : (se & 8 && u(O, ""), le & 16 && S(Z, O, L, $, D, X, Q, q));
    },
    U = (C, A, O, L, $, D, X, Q, q) => {
      (C = C || gr), (A = A || gr);
      const W = C.length,
        se = A.length,
        Z = Math.min(W, se);
      let te;
      for (te = 0; te < Z; te++) {
        const le = (A[te] = q ? bn(A[te]) : Ut(A[te]));
        b(C[te], le, O, null, $, D, X, Q, q);
      }
      W > se ? ve(C, $, D, !0, !1, Z) : S(A, O, L, $, D, X, Q, q, Z);
    },
    ie = (C, A, O, L, $, D, X, Q, q) => {
      let W = 0;
      const se = A.length;
      let Z = C.length - 1,
        te = se - 1;
      for (; W <= Z && W <= te; ) {
        const le = C[W],
          he = (A[W] = q ? bn(A[W]) : Ut(A[W]));
        if ($r(le, he)) b(le, he, O, null, $, D, X, Q, q);
        else break;
        W++;
      }
      for (; W <= Z && W <= te; ) {
        const le = C[Z],
          he = (A[te] = q ? bn(A[te]) : Ut(A[te]));
        if ($r(le, he)) b(le, he, O, null, $, D, X, Q, q);
        else break;
        Z--, te--;
      }
      if (W > Z) {
        if (W <= te) {
          const le = te + 1,
            he = le < se ? A[le].el : L;
          for (; W <= te; )
            b(null, (A[W] = q ? bn(A[W]) : Ut(A[W])), O, he, $, D, X, Q, q),
              W++;
        }
      } else if (W > te) for (; W <= Z; ) de(C[W], $, D, !0), W++;
      else {
        const le = W,
          he = W,
          _e = new Map();
        for (W = he; W <= te; W++) {
          const gt = (A[W] = q ? bn(A[W]) : Ut(A[W]));
          gt.key != null && _e.set(gt.key, W);
        }
        let we,
          mt = 0;
        const ht = te - he + 1;
        let zt = !1,
          Dt = 0;
        const Br = new Array(ht);
        for (W = 0; W < ht; W++) Br[W] = 0;
        for (W = le; W <= Z; W++) {
          const gt = C[W];
          if (mt >= ht) {
            de(gt, $, D, !0);
            continue;
          }
          let Bt;
          if (gt.key != null) Bt = _e.get(gt.key);
          else
            for (we = he; we <= te; we++)
              if (Br[we - he] === 0 && $r(gt, A[we])) {
                Bt = we;
                break;
              }
          Bt === void 0
            ? de(gt, $, D, !0)
            : ((Br[Bt - he] = W + 1),
              Bt >= Dt ? (Dt = Bt) : (zt = !0),
              b(gt, A[Bt], O, null, $, D, X, Q, q),
              mt++);
        }
        const Vc = zt ? cg(Br) : gr;
        for (we = Vc.length - 1, W = ht - 1; W >= 0; W--) {
          const gt = he + W,
            Bt = A[gt],
            Wc = gt + 1 < se ? A[gt + 1].el : L;
          Br[W] === 0
            ? b(null, Bt, O, Wc, $, D, X, Q, q)
            : zt && (we < 0 || W !== Vc[we] ? G(Bt, O, Wc, 2) : we--);
        }
      }
    },
    G = (C, A, O, L, $ = null) => {
      const { el: D, type: X, transition: Q, children: q, shapeFlag: W } = C;
      if (W & 6) {
        G(C.component.subTree, A, O, L);
        return;
      }
      if (W & 128) {
        C.suspense.move(A, O, L);
        return;
      }
      if (W & 64) {
        X.move(C, A, O, ee);
        return;
      }
      if (X === et) {
        r(D, A, O);
        for (let Z = 0; Z < q.length; Z++) G(q[Z], A, O, L);
        r(C.anchor, A, O);
        return;
      }
      if (X === Yo) {
        R(C, A, O);
        return;
      }
      if (L !== 2 && W & 1 && Q)
        if (L === 0) Q.beforeEnter(D), r(D, A, O), lt(() => Q.enter(D), $);
        else {
          const { leave: Z, delayLeave: te, afterLeave: le } = Q,
            he = () => r(D, A, O),
            _e = () => {
              Z(D, () => {
                he(), le && le();
              });
            };
          te ? te(D, he, _e) : _e();
        }
      else r(D, A, O);
    },
    de = (C, A, O, L = !1, $ = !1) => {
      const {
        type: D,
        props: X,
        ref: Q,
        children: q,
        dynamicChildren: W,
        shapeFlag: se,
        patchFlag: Z,
        dirs: te,
        cacheIndex: le,
      } = C;
      if (
        (Z === -2 && ($ = !1),
        Q != null && Mi(Q, null, O, C, !0),
        le != null && (A.renderCache[le] = void 0),
        se & 256)
      ) {
        A.ctx.deactivate(C);
        return;
      }
      const he = se & 1 && te,
        _e = !xr(C);
      let we;
      if ((_e && (we = X && X.onVnodeBeforeUnmount) && Ht(we, A, C), se & 6))
        Ae(C.component, O, L);
      else {
        if (se & 128) {
          C.suspense.unmount(O, L);
          return;
        }
        he && $n(C, null, A, "beforeUnmount"),
          se & 64
            ? C.type.remove(C, A, O, ee, L)
            : W && !W.hasOnce && (D !== et || (Z > 0 && Z & 64))
              ? ve(W, A, O, !1, !0)
              : ((D === et && Z & 384) || (!$ && se & 16)) && ve(q, A, O),
          L && pe(C);
      }
      ((_e && (we = X && X.onVnodeUnmounted)) || he) &&
        lt(() => {
          we && Ht(we, A, C), he && $n(C, null, A, "unmounted");
        }, O);
    },
    pe = (C) => {
      const { type: A, el: O, anchor: L, transition: $ } = C;
      if (A === et) {
        ke(O, L);
        return;
      }
      if (A === Yo) {
        f(C);
        return;
      }
      const D = () => {
        s(O), $ && !$.persisted && $.afterLeave && $.afterLeave();
      };
      if (C.shapeFlag & 1 && $ && !$.persisted) {
        const { leave: X, delayLeave: Q } = $,
          q = () => X(O, D);
        Q ? Q(C.el, D, q) : q();
      } else D();
    },
    ke = (C, A) => {
      let O;
      for (; C !== A; ) (O = h(C)), s(C), (C = O);
      s(A);
    },
    Ae = (C, A, O) => {
      const { bum: L, scope: $, job: D, subTree: X, um: Q, m: q, a: W } = C;
      su(q),
        su(W),
        L && Wo(L),
        $.stop(),
        D && ((D.flags |= 8), de(X, C, A, O)),
        Q && lt(Q, A),
        lt(() => {
          C.isUnmounted = !0;
        }, A),
        A &&
          A.pendingBranch &&
          !A.isUnmounted &&
          C.asyncDep &&
          !C.asyncResolved &&
          C.suspenseId === A.pendingId &&
          (A.deps--, A.deps === 0 && A.resolve());
    },
    ve = (C, A, O, L = !1, $ = !1, D = 0) => {
      for (let X = D; X < C.length; X++) de(C[X], A, O, L, $);
    },
    P = (C) => {
      if (C.shapeFlag & 6) return P(C.component.subTree);
      if (C.shapeFlag & 128) return C.suspense.next();
      const A = h(C.anchor || C.el),
        O = A && A[Hf];
      return O ? h(O) : A;
    };
  let K = !1;
  const Y = (C, A, O) => {
      C == null
        ? A._vnode && de(A._vnode, null, null, !0)
        : b(A._vnode || null, C, A, null, null, null, O),
        (A._vnode = C),
        K || ((K = !0), Jc(), zf(), (K = !1));
    },
    ee = { p: b, um: de, m: G, r: pe, mt: I, mc: S, pc: B, pbc: _, n: P, o: t };
  return { render: Y, hydrate: void 0, createApp: Z1(Y) };
}
function Qo({ type: t, props: e }, n) {
  return (n === "svg" && t === "foreignObject") ||
    (n === "mathml" &&
      t === "annotation-xml" &&
      e &&
      e.encoding &&
      e.encoding.includes("html"))
    ? void 0
    : n;
}
function Fn({ effect: t, job: e }, n) {
  n ? ((t.flags |= 32), (e.flags |= 4)) : ((t.flags &= -33), (e.flags &= -5));
}
function ag(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
}
function Ua(t, e, n = !1) {
  const r = t.children,
    s = e.children;
  if (ae(r) && ae(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[i] = bn(s[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && Ua(o, l)),
        l.type === To && (l.el = o.el);
    }
}
function cg(t) {
  const e = t.slice(),
    n = [0];
  let r, s, i, o, l;
  const a = t.length;
  for (r = 0; r < a; r++) {
    const c = t[r];
    if (c !== 0) {
      if (((s = n[n.length - 1]), t[s] < c)) {
        (e[r] = s), n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), t[n[l]] < c ? (i = l + 1) : (o = l);
      c < t[n[i]] && (i > 0 && (e[r] = n[i - 1]), (n[i] = r));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = e[o]);
  return n;
}
function lh(t) {
  const e = t.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : lh(e);
}
function su(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
}
const ug = Symbol.for("v-scx"),
  dg = () => un(ug);
function Rk(t, e) {
  return Ka(t, null, e);
}
function _r(t, e, n) {
  return Ka(t, e, n);
}
function Ka(t, e, n = Ce) {
  const { immediate: r, deep: s, flush: i, once: o } = n,
    l = rt({}, n),
    a = (e && r) || (!e && i !== "post");
  let c;
  if (vs) {
    if (i === "sync") {
      const p = dg();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!a) {
      const p = () => {};
      return (p.stop = qt), (p.resume = qt), (p.pause = qt), p;
    }
  }
  const u = Ge;
  l.call = (p, y, b) => Gt(p, u, y, b);
  let d = !1;
  i === "post"
    ? (l.scheduler = (p) => {
        lt(p, u && u.suspense);
      })
    : i !== "sync" &&
      ((d = !0),
      (l.scheduler = (p, y) => {
        y ? p() : Fa(p);
      })),
    (l.augmentJob = (p) => {
      e && (p.flags |= 4),
        d && ((p.flags |= 2), u && ((p.id = u.uid), (p.i = u)));
    });
  const h = S1(t, e, l);
  return vs && (c ? c.push(h) : a && h()), h;
}
function fg(t, e, n) {
  const r = this.proxy,
    s = Le(t) ? (t.includes(".") ? ah(r, t) : () => r[t]) : t.bind(r, r);
  let i;
  ce(e) ? (i = e) : ((i = e.handler), (n = e));
  const o = Is(this),
    l = Ka(s, i.bind(r), n);
  return o(), l;
}
function ah(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
const hg = (t, e) =>
  e === "modelValue" || e === "model-value"
    ? t.modelModifiers
    : t[`${e}Modifiers`] || t[`${Tt(e)}Modifiers`] || t[`${or(e)}Modifiers`];
function pg(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || Ce;
  let s = n;
  const i = e.startsWith("update:"),
    o = i && hg(r, e.slice(7));
  o &&
    (o.trim && (s = n.map((u) => (Le(u) ? u.trim() : u))),
    o.number && (s = n.map(Wm)));
  let l,
    a = r[(l = Vo(e))] || r[(l = Vo(Tt(e)))];
  !a && i && (a = r[(l = Vo(or(e)))]), a && Gt(a, t, 6, s);
  const c = r[l + "Once"];
  if (c) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[l]) return;
    (t.emitted[l] = !0), Gt(c, t, 6, s);
  }
}
function ch(t, e, n = !1) {
  const r = e.emitsCache,
    s = r.get(t);
  if (s !== void 0) return s;
  const i = t.emits;
  let o = {},
    l = !1;
  if (!ce(t)) {
    const a = (c) => {
      const u = ch(c, e, !0);
      u && ((l = !0), rt(o, u));
    };
    !n && e.mixins.length && e.mixins.forEach(a),
      t.extends && a(t.extends),
      t.mixins && t.mixins.forEach(a);
  }
  return !i && !l
    ? (Re(t) && r.set(t, null), null)
    : (ae(i) ? i.forEach((a) => (o[a] = null)) : rt(o, i),
      Re(t) && r.set(t, o),
      o);
}
function Mo(t, e) {
  return !t || !wo(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      be(t, e[0].toLowerCase() + e.slice(1)) || be(t, or(e)) || be(t, e));
}
function iu(t) {
  const {
      type: e,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: a,
      render: c,
      renderCache: u,
      props: d,
      data: h,
      setupState: p,
      ctx: y,
      inheritAttrs: b,
    } = t,
    x = Ai(t);
  let v, E;
  try {
    if (n.shapeFlag & 4) {
      const f = s || r,
        g = f;
      (v = Ut(c.call(g, f, u, d, p, h, y))), (E = l);
    } else {
      const f = e;
      (v = Ut(
        f.length > 1 ? f(d, { attrs: l, slots: o, emit: a }) : f(d, null),
      )),
        (E = e.props ? l : mg(l));
    }
  } catch (f) {
    (ns.length = 0), Eo(f, t, 1), (v = dt(jn));
  }
  let R = v;
  if (E && b !== !1) {
    const f = Object.keys(E),
      { shapeFlag: g } = R;
    f.length &&
      g & 7 &&
      (i && f.some(ja) && (E = gg(E, i)), (R = Mr(R, E, !1, !0)));
  }
  return (
    n.dirs &&
      ((R = Mr(R, null, !1, !0)),
      (R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Va(R, n.transition),
    (v = R),
    Ai(x),
    v
  );
}
const mg = (t) => {
    let e;
    for (const n in t)
      (n === "class" || n === "style" || wo(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  },
  gg = (t, e) => {
    const n = {};
    for (const r in t) (!ja(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
    return n;
  };
function yg(t, e, n) {
  const { props: r, children: s, component: i } = t,
    { props: o, children: l, patchFlag: a } = e,
    c = i.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? ou(r, o, c) : !!o;
    if (a & 8) {
      const u = e.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const h = u[d];
        if (o[h] !== r[h] && !Mo(c, h)) return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === o
        ? !1
        : r
          ? o
            ? ou(r, o, c)
            : !0
          : !!o;
  return !1;
}
function ou(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (e[i] !== t[i] && !Mo(n, i)) return !0;
  }
  return !1;
}
function bg({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const r = e.subTree;
    if ((r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t))
      ((t = e.vnode).el = n), (e = e.parent);
    else break;
  }
}
const uh = (t) => t.__isSuspense;
function wg(t, e) {
  e && e.pendingBranch
    ? ae(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : A1(t);
}
const et = Symbol.for("v-fgt"),
  To = Symbol.for("v-txt"),
  jn = Symbol.for("v-cmt"),
  Yo = Symbol.for("v-stc"),
  ns = [];
let vt = null;
function at(t = !1) {
  ns.push((vt = t ? null : []));
}
function vg() {
  ns.pop(), (vt = ns[ns.length - 1] || null);
}
let bs = 1;
function lu(t, e = !1) {
  (bs += t), t < 0 && vt && e && (vt.hasOnce = !0);
}
function dh(t) {
  return (
    (t.dynamicChildren = bs > 0 ? vt || gr : null),
    vg(),
    bs > 0 && vt && vt.push(t),
    t
  );
}
function yn(t, e, n, r, s, i) {
  return dh(Ri(t, e, n, r, s, i, !0));
}
function Kn(t, e, n, r, s) {
  return dh(dt(t, e, n, r, s, !0));
}
function ws(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function $r(t, e) {
  return t.type === e.type && t.key === e.key;
}
const fh = ({ key: t }) => t ?? null,
  li = ({ ref: t, ref_key: e, ref_for: n }) => (
    typeof t == "number" && (t = "" + t),
    t != null
      ? Le(t) || nt(t) || ce(t)
        ? { i: tt, r: t, k: e, f: !!n }
        : t
      : null
  );
function Ri(
  t,
  e = null,
  n = null,
  r = 0,
  s = null,
  i = t === et ? 0 : 1,
  o = !1,
  l = !1,
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && fh(e),
    ref: e && li(e),
    scopeId: Bf,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: tt,
  };
  return (
    l
      ? (qa(a, n), i & 128 && t.normalize(a))
      : n && (a.shapeFlag |= Le(n) ? 8 : 16),
    bs > 0 &&
      !o &&
      vt &&
      (a.patchFlag > 0 || i & 6) &&
      a.patchFlag !== 32 &&
      vt.push(a),
    a
  );
}
const dt = xg;
function xg(t, e = null, n = null, r = 0, s = null, i = !1) {
  if (((!t || t === W1) && (t = jn), ws(t))) {
    const l = Mr(t, e, !0);
    return (
      n && qa(l, n),
      bs > 0 &&
        !i &&
        vt &&
        (l.shapeFlag & 6 ? (vt[vt.indexOf(t)] = l) : vt.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((jg(t) && (t = t.__vccOpts), e)) {
    e = kg(e);
    let { class: l, style: a } = e;
    l && !Le(l) && (e.class = Ar(l)),
      Re(a) && ($a(a) && !ae(a) && (a = rt({}, a)), (e.style = So(a)));
  }
  const o = Le(t) ? 1 : uh(t) ? 128 : T1(t) ? 64 : Re(t) ? 4 : ce(t) ? 2 : 0;
  return Ri(t, e, n, r, s, o, i, !0);
}
function kg(t) {
  return t ? ($a(t) || eh(t) ? rt({}, t) : t) : null;
}
function Mr(t, e, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: a } = t,
    c = e ? Ja(s || {}, e) : s,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t.type,
      props: c,
      key: c && fh(c),
      ref:
        e && e.ref
          ? n && i
            ? ae(i)
              ? i.concat(li(e))
              : [i, li(e)]
            : li(e)
          : i,
      scopeId: t.scopeId,
      slotScopeIds: t.slotScopeIds,
      children: l,
      target: t.target,
      targetStart: t.targetStart,
      targetAnchor: t.targetAnchor,
      staticCount: t.staticCount,
      shapeFlag: t.shapeFlag,
      patchFlag: e && t.type !== et ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: t.dynamicProps,
      dynamicChildren: t.dynamicChildren,
      appContext: t.appContext,
      dirs: t.dirs,
      transition: a,
      component: t.component,
      suspense: t.suspense,
      ssContent: t.ssContent && Mr(t.ssContent),
      ssFallback: t.ssFallback && Mr(t.ssFallback),
      el: t.el,
      anchor: t.anchor,
      ctx: t.ctx,
      ce: t.ce,
    };
  return a && r && Va(u, a.clone(u)), u;
}
function $l(t = " ", e = 0) {
  return dt(To, null, t, e);
}
function Fr(t = "", e = !1) {
  return e ? (at(), Kn(jn, null, t)) : dt(jn, null, t);
}
function Ut(t) {
  return t == null || typeof t == "boolean"
    ? dt(jn)
    : ae(t)
      ? dt(et, null, t.slice())
      : ws(t)
        ? bn(t)
        : dt(To, null, String(t));
}
function bn(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : Mr(t);
}
function qa(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null) e = null;
  else if (ae(e)) n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), qa(t, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = e._;
      !s && !eh(e)
        ? (e._ctx = tt)
        : s === 3 &&
          tt &&
          (tt.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    ce(e)
      ? ((e = { default: e, _ctx: tt }), (n = 32))
      : ((e = String(e)), r & 64 ? ((n = 16), (e = [$l(e)])) : (n = 8));
  (t.children = e), (t.shapeFlag |= n);
}
function Ja(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const s in r)
      if (s === "class")
        e.class !== r.class && (e.class = Ar([e.class, r.class]));
      else if (s === "style") e.style = So([e.style, r.style]);
      else if (wo(s)) {
        const i = e[s],
          o = r[s];
        o &&
          i !== o &&
          !(ae(i) && i.includes(o)) &&
          (e[s] = i ? [].concat(i, o) : o);
      } else s !== "" && (e[s] = r[s]);
  }
  return e;
}
function Ht(t, e, n, r = null) {
  Gt(t, e, 7, [n, r]);
}
const _g = Yf();
let Sg = 0;
function Cg(t, e, n) {
  const r = t.type,
    s = (e ? e.appContext : t.appContext) || _g,
    i = {
      uid: Sg++,
      vnode: t,
      type: r,
      parent: e,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Ym(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(s.provides),
      ids: e ? e.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: nh(r, s),
      emitsOptions: ch(r, s),
      emit: null,
      emitted: null,
      propsDefaults: Ce,
      inheritAttrs: r.inheritAttrs,
      ctx: Ce,
      data: Ce,
      props: Ce,
      attrs: Ce,
      slots: Ce,
      refs: Ce,
      setupState: Ce,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = e ? e.root : i),
    (i.emit = pg.bind(null, i)),
    t.ce && t.ce(i),
    i
  );
}
let Ge = null;
const Eg = () => Ge || tt;
let Oi, Fl;
{
  const t = _o(),
    e = (n, r) => {
      let s;
      return (
        (s = t[n]) || (s = t[n] = []),
        s.push(r),
        (i) => {
          s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
        }
      );
    };
  (Oi = e("__VUE_INSTANCE_SETTERS__", (n) => (Ge = n))),
    (Fl = e("__VUE_SSR_SETTERS__", (n) => (vs = n)));
}
const Is = (t) => {
    const e = Ge;
    return (
      Oi(t),
      t.scope.on(),
      () => {
        t.scope.off(), Oi(e);
      }
    );
  },
  au = () => {
    Ge && Ge.scope.off(), Oi(null);
  };
function hh(t) {
  return t.vnode.shapeFlag & 4;
}
let vs = !1;
function Ag(t, e = !1, n = !1) {
  e && Fl(e);
  const { props: r, children: s } = t.vnode,
    i = hh(t);
  eg(t, r, i, e), sg(t, s, n);
  const o = i ? Mg(t, e) : void 0;
  return e && Fl(!1), o;
}
function Mg(t, e) {
  const n = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, K1));
  const { setup: r } = n;
  if (r) {
    Ln();
    const s = (t.setupContext = r.length > 1 ? Rg(t) : null),
      i = Is(t),
      o = Ps(r, t, 0, [t.props, s]),
      l = af(o);
    if ((Nn(), i(), (l || t.sp) && !xr(t) && Wf(t), l)) {
      if ((o.then(au, au), e))
        return o
          .then((a) => {
            cu(t, a);
          })
          .catch((a) => {
            Eo(a, t, 0);
          });
      t.asyncDep = o;
    } else cu(t, o);
  } else ph(t);
}
function cu(t, e, n) {
  ce(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : Re(e) && (t.setupState = Pf(e)),
    ph(t);
}
function ph(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || qt);
  {
    const s = Is(t);
    Ln();
    try {
      q1(t);
    } finally {
      Nn(), s();
    }
  }
}
const Tg = {
  get(t, e) {
    return Xe(t, "get", ""), t[e];
  },
};
function Rg(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, Tg),
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function Ga(t) {
  return t.exposed
    ? t.exposeProxy ||
        (t.exposeProxy = new Proxy(Pf(y1(t.exposed)), {
          get(e, n) {
            if (n in e) return e[n];
            if (n in ts) return ts[n](t);
          },
          has(e, n) {
            return n in e || n in ts;
          },
        }))
    : t.proxy;
}
function Og(t, e = !0) {
  return ce(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function jg(t) {
  return ce(t) && "__vccOpts" in t;
}
const Ot = (t, e) => k1(t, e, vs);
function Qa(t, e, n) {
  const r = arguments.length;
  return r === 2
    ? Re(e) && !ae(e)
      ? ws(e)
        ? dt(t, null, [e])
        : dt(t, e)
      : dt(t, null, e)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && ws(n) && (n = [n]),
      dt(t, e, n));
}
const Pg = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Vl;
const uu = typeof window < "u" && window.trustedTypes;
if (uu)
  try {
    Vl = uu.createPolicy("vue", { createHTML: (t) => t });
  } catch {}
const mh = Vl ? (t) => Vl.createHTML(t) : (t) => t,
  Ig = "http://www.w3.org/2000/svg",
  Lg = "http://www.w3.org/1998/Math/MathML",
  an = typeof document < "u" ? document : null,
  du = an && an.createElement("template"),
  Ng = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, r) => {
      const s =
        e === "svg"
          ? an.createElementNS(Ig, t)
          : e === "mathml"
            ? an.createElementNS(Lg, t)
            : n
              ? an.createElement(t, { is: n })
              : an.createElement(t);
      return (
        t === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (t) => an.createTextNode(t),
    createComment: (t) => an.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => an.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, n, r, s, i) {
      const o = n ? n.previousSibling : e.lastChild;
      if (s && (s === i || s.nextSibling))
        for (
          ;
          e.insertBefore(s.cloneNode(!0), n),
            !(s === i || !(s = s.nextSibling));

        );
      else {
        du.innerHTML = mh(
          r === "svg"
            ? `<svg>${t}</svg>`
            : r === "mathml"
              ? `<math>${t}</math>`
              : t,
        );
        const l = du.content;
        if (r === "svg" || r === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        e.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild,
      ];
    },
  },
  zg = Symbol("_vtc");
function Dg(t, e, n) {
  const r = t[zg];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : n
        ? t.setAttribute("class", e)
        : (t.className = e);
}
const fu = Symbol("_vod"),
  Bg = Symbol("_vsh"),
  Hg = Symbol(""),
  $g = /(^|;)\s*display\s*:/;
function Fg(t, e, n) {
  const r = t.style,
    s = Le(n);
  let i = !1;
  if (n && !s) {
    if (e)
      if (Le(e))
        for (const o of e.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && ai(r, l, "");
        }
      else for (const o in e) n[o] == null && ai(r, o, "");
    for (const o in n) o === "display" && (i = !0), ai(r, o, n[o]);
  } else if (s) {
    if (e !== n) {
      const o = r[Hg];
      o && (n += ";" + o), (r.cssText = n), (i = $g.test(n));
    }
  } else e && t.removeAttribute("style");
  fu in t && ((t[fu] = i ? r.display : ""), t[Bg] && (r.display = "none"));
}
const hu = /\s*!important$/;
function ai(t, e, n) {
  if (ae(n)) n.forEach((r) => ai(t, e, r));
  else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
  else {
    const r = Vg(t, e);
    hu.test(n)
      ? t.setProperty(or(r), n.replace(hu, ""), "important")
      : (t[r] = n);
  }
}
const pu = ["Webkit", "Moz", "ms"],
  Xo = {};
function Vg(t, e) {
  const n = Xo[e];
  if (n) return n;
  let r = Tt(e);
  if (r !== "filter" && r in t) return (Xo[e] = r);
  r = ko(r);
  for (let s = 0; s < pu.length; s++) {
    const i = pu[s] + r;
    if (i in t) return (Xo[e] = i);
  }
  return e;
}
const mu = "http://www.w3.org/1999/xlink";
function gu(t, e, n, r, s, i = Qm(e)) {
  r && e.startsWith("xlink:")
    ? n == null
      ? t.removeAttributeNS(mu, e.slice(6, e.length))
      : t.setAttributeNS(mu, e, n)
    : n == null || (i && !ff(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, i ? "" : fn(n) ? String(n) : n);
}
function yu(t, e, n, r, s) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? mh(n) : n);
    return;
  }
  const i = t.tagName;
  if (e === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? t.getAttribute("value") || "" : t.value,
      a = n == null ? (t.type === "checkbox" ? "on" : "") : String(n);
    (l !== a || !("_value" in t)) && (t.value = a),
      n == null && t.removeAttribute(e),
      (t._value = n);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof t[e];
    l === "boolean"
      ? (n = ff(n))
      : n == null && l === "string"
        ? ((n = ""), (o = !0))
        : l === "number" && ((n = 0), (o = !0));
  }
  try {
    t[e] = n;
  } catch {}
  o && t.removeAttribute(s || e);
}
function Wg(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function Ug(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const bu = Symbol("_vei");
function Kg(t, e, n, r, s = null) {
  const i = t[bu] || (t[bu] = {}),
    o = i[e];
  if (r && o) o.value = r;
  else {
    const [l, a] = qg(e);
    if (r) {
      const c = (i[e] = Qg(r, s));
      Wg(t, l, c, a);
    } else o && (Ug(t, l, o, a), (i[e] = void 0));
  }
}
const wu = /(?:Once|Passive|Capture)$/;
function qg(t) {
  let e;
  if (wu.test(t)) {
    e = {};
    let r;
    for (; (r = t.match(wu)); )
      (t = t.slice(0, t.length - r[0].length)), (e[r[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : or(t.slice(2)), e];
}
let Zo = 0;
const Jg = Promise.resolve(),
  Gg = () => Zo || (Jg.then(() => (Zo = 0)), (Zo = Date.now()));
function Qg(t, e) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Gt(Yg(r, n.value), e, 5, [r]);
  };
  return (n.value = t), (n.attached = Gg()), n;
}
function Yg(t, e) {
  if (ae(e)) {
    const n = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0);
      }),
      e.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return e;
}
const vu = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    t.charCodeAt(2) > 96 &&
    t.charCodeAt(2) < 123,
  Xg = (t, e, n, r, s, i) => {
    const o = s === "svg";
    e === "class"
      ? Dg(t, r, o)
      : e === "style"
        ? Fg(t, n, r)
        : wo(e)
          ? ja(e) || Kg(t, e, n, r, i)
          : (
                e[0] === "."
                  ? ((e = e.slice(1)), !0)
                  : e[0] === "^"
                    ? ((e = e.slice(1)), !1)
                    : Zg(t, e, r, o)
              )
            ? (yu(t, e, r),
              !t.tagName.includes("-") &&
                (e === "value" || e === "checked" || e === "selected") &&
                gu(t, e, r, o, i, e !== "value"))
            : t._isVueCE && (/[A-Z]/.test(e) || !Le(r))
              ? yu(t, Tt(e), r, i, e)
              : (e === "true-value"
                  ? (t._trueValue = r)
                  : e === "false-value" && (t._falseValue = r),
                gu(t, e, r, o));
  };
function Zg(t, e, n, r) {
  if (r)
    return !!(
      e === "innerHTML" ||
      e === "textContent" ||
      (e in t && vu(e) && ce(n))
    );
  if (
    e === "spellcheck" ||
    e === "draggable" ||
    e === "translate" ||
    e === "form" ||
    (e === "list" && t.tagName === "INPUT") ||
    (e === "type" && t.tagName === "TEXTAREA")
  )
    return !1;
  if (e === "width" || e === "height") {
    const s = t.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return vu(e) && Le(n) ? !1 : e in t;
}
const e0 = rt({ patchProp: Xg }, Ng);
let xu;
function t0() {
  return xu || (xu = og(e0));
}
const n0 = (...t) => {
  const e = t0().createApp(...t),
    { mount: n } = e;
  return (
    (e.mount = (r) => {
      const s = s0(r);
      if (!s) return;
      const i = e._component;
      !ce(i) && !i.render && !i.template && (i.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = "");
      const o = n(s, !1, r0(s));
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        o
      );
    }),
    e
  );
};
function r0(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function s0(t) {
  return Le(t) ? document.querySelector(t) : t;
}
const i0 = "modulepreload",
  o0 = function (t) {
    return "/assets/nl_school/frontend/" + t;
  },
  ku = {},
  _u = function (e, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        l = o?.nonce || o?.getAttribute("nonce");
      s = Promise.allSettled(
        n.map((a) => {
          if (((a = o0(a)), a in ku)) return;
          ku[a] = !0;
          const c = a.endsWith(".css"),
            u = c ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${a}"]${u}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = c ? "stylesheet" : i0),
            c || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = a),
            l && d.setAttribute("nonce", l),
            document.head.appendChild(d),
            c)
          )
            return new Promise((h, p) => {
              d.addEventListener("load", h),
                d.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${a}`)),
                );
            });
        }),
      );
    }
    function i(o) {
      const l = new Event("vite:preloadError", { cancelable: !0 });
      if (((l.payload = o), window.dispatchEvent(l), !l.defaultPrevented))
        throw o;
    }
    return s.then((o) => {
      for (const l of o || []) l.status === "rejected" && i(l.reason);
      return e().catch(i);
    });
  };
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const fr = typeof document < "u";
function gh(t) {
  return (
    typeof t == "object" ||
    "displayName" in t ||
    "props" in t ||
    "__vccOpts" in t
  );
}
function l0(t) {
  return (
    t.__esModule ||
    t[Symbol.toStringTag] === "Module" ||
    (t.default && gh(t.default))
  );
}
const ge = Object.assign;
function el(t, e) {
  const n = {};
  for (const r in e) {
    const s = e[r];
    n[r] = It(s) ? s.map(t) : t(s);
  }
  return n;
}
const rs = () => {},
  It = Array.isArray,
  yh = /#/g,
  a0 = /&/g,
  c0 = /\//g,
  u0 = /=/g,
  d0 = /\?/g,
  bh = /\+/g,
  f0 = /%5B/g,
  h0 = /%5D/g,
  wh = /%5E/g,
  p0 = /%60/g,
  vh = /%7B/g,
  m0 = /%7C/g,
  xh = /%7D/g,
  g0 = /%20/g;
function Ya(t) {
  return encodeURI("" + t)
    .replace(m0, "|")
    .replace(f0, "[")
    .replace(h0, "]");
}
function y0(t) {
  return Ya(t).replace(vh, "{").replace(xh, "}").replace(wh, "^");
}
function Wl(t) {
  return Ya(t)
    .replace(bh, "%2B")
    .replace(g0, "+")
    .replace(yh, "%23")
    .replace(a0, "%26")
    .replace(p0, "`")
    .replace(vh, "{")
    .replace(xh, "}")
    .replace(wh, "^");
}
function b0(t) {
  return Wl(t).replace(u0, "%3D");
}
function w0(t) {
  return Ya(t).replace(yh, "%23").replace(d0, "%3F");
}
function v0(t) {
  return t == null ? "" : w0(t).replace(c0, "%2F");
}
function xs(t) {
  try {
    return decodeURIComponent("" + t);
  } catch {}
  return "" + t;
}
const x0 = /\/$/,
  k0 = (t) => t.replace(x0, "");
function tl(t, e, n = "/") {
  let r,
    s = {},
    i = "",
    o = "";
  const l = e.indexOf("#");
  let a = e.indexOf("?");
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((r = e.slice(0, a)),
      (i = e.slice(a + 1, l > -1 ? l : e.length)),
      (s = t(i))),
    l > -1 && ((r = r || e.slice(0, l)), (o = e.slice(l, e.length))),
    (r = E0(r ?? e, n)),
    { fullPath: r + (i && "?") + i + o, path: r, query: s, hash: xs(o) }
  );
}
function _0(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "");
}
function Su(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase())
    ? t
    : t.slice(e.length) || "/";
}
function S0(t, e, n) {
  const r = e.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Tr(e.matched[r], n.matched[s]) &&
    kh(e.params, n.params) &&
    t(e.query) === t(n.query) &&
    e.hash === n.hash
  );
}
function Tr(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function kh(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const n in t) if (!C0(t[n], e[n])) return !1;
  return !0;
}
function C0(t, e) {
  return It(t) ? Cu(t, e) : It(e) ? Cu(e, t) : t === e;
}
function Cu(t, e) {
  return It(e)
    ? t.length === e.length && t.every((n, r) => n === e[r])
    : t.length === 1 && t[0] === e;
}
function E0(t, e) {
  if (t.startsWith("/")) return t;
  if (!t) return e;
  const n = e.split("/"),
    r = t.split("/"),
    s = r[r.length - 1];
  (s === ".." || s === ".") && r.push("");
  let i = n.length - 1,
    o,
    l;
  for (o = 0; o < r.length; o++)
    if (((l = r[o]), l !== "."))
      if (l === "..") i > 1 && i--;
      else break;
  return n.slice(0, i).join("/") + "/" + r.slice(o).join("/");
}
const pn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var ks;
(function (t) {
  (t.pop = "pop"), (t.push = "push");
})(ks || (ks = {}));
var ss;
(function (t) {
  (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
})(ss || (ss = {}));
function A0(t) {
  if (!t)
    if (fr) {
      const e = document.querySelector("base");
      (t = (e && e.getAttribute("href")) || "/"),
        (t = t.replace(/^\w+:\/\/[^\/]+/, ""));
    } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), k0(t);
}
const M0 = /^[^#]+#/;
function T0(t, e) {
  return t.replace(M0, "#") + e;
}
function R0(t, e) {
  const n = document.documentElement.getBoundingClientRect(),
    r = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: r.left - n.left - (e.left || 0),
    top: r.top - n.top - (e.top || 0),
  };
}
const Ro = () => ({ left: window.scrollX, top: window.scrollY });
function O0(t) {
  let e;
  if ("el" in t) {
    const n = t.el,
      r = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    e = R0(s, t);
  } else e = t;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.scrollX,
        e.top != null ? e.top : window.scrollY,
      );
}
function Eu(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const Ul = new Map();
function j0(t, e) {
  Ul.set(t, e);
}
function P0(t) {
  const e = Ul.get(t);
  return Ul.delete(t), e;
}
let I0 = () => location.protocol + "//" + location.host;
function _h(t, e) {
  const { pathname: n, search: r, hash: s } = e,
    i = t.indexOf("#");
  if (i > -1) {
    let l = s.includes(t.slice(i)) ? t.slice(i).length : 1,
      a = s.slice(l);
    return a[0] !== "/" && (a = "/" + a), Su(a, "");
  }
  return Su(n, t) + r + s;
}
function L0(t, e, n, r) {
  let s = [],
    i = [],
    o = null;
  const l = ({ state: h }) => {
    const p = _h(t, location),
      y = n.value,
      b = e.value;
    let x = 0;
    if (h) {
      if (((n.value = p), (e.value = h), o && o === y)) {
        o = null;
        return;
      }
      x = b ? h.position - b.position : 0;
    } else r(p);
    s.forEach((v) => {
      v(n.value, y, {
        delta: x,
        type: ks.pop,
        direction: x ? (x > 0 ? ss.forward : ss.back) : ss.unknown,
      });
    });
  };
  function a() {
    o = n.value;
  }
  function c(h) {
    s.push(h);
    const p = () => {
      const y = s.indexOf(h);
      y > -1 && s.splice(y, 1);
    };
    return i.push(p), p;
  }
  function u() {
    const { history: h } = window;
    h.state && h.replaceState(ge({}, h.state, { scroll: Ro() }), "");
  }
  function d() {
    for (const h of i) h();
    (i = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", u, { passive: !0 }),
    { pauseListeners: a, listen: c, destroy: d }
  );
}
function Au(t, e, n, r = !1, s = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Ro() : null,
  };
}
function N0(t) {
  const { history: e, location: n } = window,
    r = { value: _h(t, n) },
    s = { value: e.state };
  s.value ||
    i(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function i(a, c, u) {
    const d = t.indexOf("#"),
      h =
        d > -1
          ? (n.host && document.querySelector("base") ? t : t.slice(d)) + a
          : I0() + t + a;
    try {
      e[u ? "replaceState" : "pushState"](c, "", h), (s.value = c);
    } catch (p) {
      console.error(p), n[u ? "replace" : "assign"](h);
    }
  }
  function o(a, c) {
    const u = ge({}, e.state, Au(s.value.back, a, s.value.forward, !0), c, {
      position: s.value.position,
    });
    i(a, u, !0), (r.value = a);
  }
  function l(a, c) {
    const u = ge({}, s.value, e.state, { forward: a, scroll: Ro() });
    i(u.current, u, !0);
    const d = ge({}, Au(r.value, a, null), { position: u.position + 1 }, c);
    i(a, d, !1), (r.value = a);
  }
  return { location: r, state: s, push: l, replace: o };
}
function z0(t) {
  t = A0(t);
  const e = N0(t),
    n = L0(t, e.state, e.location, e.replace);
  function r(i, o = !0) {
    o || n.pauseListeners(), history.go(i);
  }
  const s = ge(
    { location: "", base: t, go: r, createHref: T0.bind(null, t) },
    e,
    n,
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => e.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => e.state.value,
    }),
    s
  );
}
function D0(t) {
  return typeof t == "string" || (t && typeof t == "object");
}
function Sh(t) {
  return typeof t == "string" || typeof t == "symbol";
}
const Ch = Symbol("");
var Mu;
(function (t) {
  (t[(t.aborted = 4)] = "aborted"),
    (t[(t.cancelled = 8)] = "cancelled"),
    (t[(t.duplicated = 16)] = "duplicated");
})(Mu || (Mu = {}));
function Rr(t, e) {
  return ge(new Error(), { type: t, [Ch]: !0 }, e);
}
function nn(t, e) {
  return t instanceof Error && Ch in t && (e == null || !!(t.type & e));
}
const Tu = "[^/]+?",
  B0 = { sensitive: !1, strict: !1, start: !0, end: !0 },
  H0 = /[.+*?^${}()[\]/\\]/g;
function $0(t, e) {
  const n = ge({}, B0, e),
    r = [];
  let s = n.start ? "^" : "";
  const i = [];
  for (const c of t) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (s += "/");
    for (let d = 0; d < c.length; d++) {
      const h = c[d];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        d || (s += "/"), (s += h.value.replace(H0, "\\$&")), (p += 40);
      else if (h.type === 1) {
        const { value: y, repeatable: b, optional: x, regexp: v } = h;
        i.push({ name: y, repeatable: b, optional: x });
        const E = v || Tu;
        if (E !== Tu) {
          p += 10;
          try {
            new RegExp(`(${E})`);
          } catch (f) {
            throw new Error(
              `Invalid custom RegExp for param "${y}" (${E}): ` + f.message,
            );
          }
        }
        let R = b ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
        d || (R = x && c.length < 2 ? `(?:/${R})` : "/" + R),
          x && (R += "?"),
          (s += R),
          (p += 20),
          x && (p += -8),
          b && (p += -20),
          E === ".*" && (p += -50);
      }
      u.push(p);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"),
    n.end ? (s += "$") : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
  const o = new RegExp(s, n.sensitive ? "" : "i");
  function l(c) {
    const u = c.match(o),
      d = {};
    if (!u) return null;
    for (let h = 1; h < u.length; h++) {
      const p = u[h] || "",
        y = i[h - 1];
      d[y.name] = p && y.repeatable ? p.split("/") : p;
    }
    return d;
  }
  function a(c) {
    let u = "",
      d = !1;
    for (const h of t) {
      (!d || !u.endsWith("/")) && (u += "/"), (d = !1);
      for (const p of h)
        if (p.type === 0) u += p.value;
        else if (p.type === 1) {
          const { value: y, repeatable: b, optional: x } = p,
            v = y in c ? c[y] : "";
          if (It(v) && !b)
            throw new Error(
              `Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const E = It(v) ? v.join("/") : v;
          if (!E)
            if (x)
              h.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${y}"`);
          u += E;
        }
    }
    return u || "/";
  }
  return { re: o, score: r, keys: i, parse: l, stringify: a };
}
function F0(t, e) {
  let n = 0;
  for (; n < t.length && n < e.length; ) {
    const r = e[n] - t[n];
    if (r) return r;
    n++;
  }
  return t.length < e.length
    ? t.length === 1 && t[0] === 80
      ? -1
      : 1
    : t.length > e.length
      ? e.length === 1 && e[0] === 80
        ? 1
        : -1
      : 0;
}
function Eh(t, e) {
  let n = 0;
  const r = t.score,
    s = e.score;
  for (; n < r.length && n < s.length; ) {
    const i = F0(r[n], s[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Ru(r)) return 1;
    if (Ru(s)) return -1;
  }
  return s.length - r.length;
}
function Ru(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const V0 = { type: 0, value: "" },
  W0 = /[a-zA-Z0-9_]/;
function U0(t) {
  if (!t) return [[]];
  if (t === "/") return [[V0]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function e(p) {
    throw new Error(`ERR (${n})/"${c}": ${p}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let i;
  function o() {
    i && s.push(i), (i = []);
  }
  let l = 0,
    a,
    c = "",
    u = "";
  function d() {
    c &&
      (n === 0
        ? i.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
          ? (i.length > 1 &&
              (a === "*" || a === "+") &&
              e(
                `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`,
              ),
            i.push({
              type: 1,
              value: c,
              regexp: u,
              repeatable: a === "*" || a === "+",
              optional: a === "*" || a === "?",
            }))
          : e("Invalid state to consume buffer"),
      (c = ""));
  }
  function h() {
    c += a;
  }
  for (; l < t.length; ) {
    if (((a = t[l++]), a === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (c && d(), o()) : a === ":" ? (d(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = r);
        break;
      case 1:
        a === "("
          ? (n = 2)
          : W0.test(a)
            ? h()
            : (d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case 2:
        a === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + a)
            : (n = 3)
          : (u += a);
        break;
      case 3:
        d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--, (u = "");
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return n === 2 && e(`Unfinished custom RegExp for param "${c}"`), d(), o(), s;
}
function K0(t, e, n) {
  const r = $0(U0(t.path), n),
    s = ge(r, { record: t, parent: e, children: [], alias: [] });
  return e && !s.record.aliasOf == !e.record.aliasOf && e.children.push(s), s;
}
function q0(t, e) {
  const n = [],
    r = new Map();
  e = Iu({ strict: !1, end: !0, sensitive: !1 }, e);
  function s(d) {
    return r.get(d);
  }
  function i(d, h, p) {
    const y = !p,
      b = ju(d);
    b.aliasOf = p && p.record;
    const x = Iu(e, d),
      v = [b];
    if ("alias" in d) {
      const f = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const g of f)
        v.push(
          ju(
            ge({}, b, {
              components: p ? p.record.components : b.components,
              path: g,
              aliasOf: p ? p.record : b,
            }),
          ),
        );
    }
    let E, R;
    for (const f of v) {
      const { path: g } = f;
      if (h && g[0] !== "/") {
        const m = h.record.path,
          w = m[m.length - 1] === "/" ? "" : "/";
        f.path = h.record.path + (g && w + g);
      }
      if (
        ((E = K0(f, h, x)),
        p
          ? p.alias.push(E)
          : ((R = R || E),
            R !== E && R.alias.push(E),
            y && d.name && !Pu(E) && o(d.name)),
        Ah(E) && a(E),
        b.children)
      ) {
        const m = b.children;
        for (let w = 0; w < m.length; w++) i(m[w], E, p && p.children[w]);
      }
      p = p || E;
    }
    return R
      ? () => {
          o(R);
        }
      : rs;
  }
  function o(d) {
    if (Sh(d)) {
      const h = r.get(d);
      h &&
        (r.delete(d),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(o),
        h.alias.forEach(o));
    } else {
      const h = n.indexOf(d);
      h > -1 &&
        (n.splice(h, 1),
        d.record.name && r.delete(d.record.name),
        d.children.forEach(o),
        d.alias.forEach(o));
    }
  }
  function l() {
    return n;
  }
  function a(d) {
    const h = Q0(d, n);
    n.splice(h, 0, d), d.record.name && !Pu(d) && r.set(d.record.name, d);
  }
  function c(d, h) {
    let p,
      y = {},
      b,
      x;
    if ("name" in d && d.name) {
      if (((p = r.get(d.name)), !p)) throw Rr(1, { location: d });
      (x = p.record.name),
        (y = ge(
          Ou(
            h.params,
            p.keys
              .filter((R) => !R.optional)
              .concat(p.parent ? p.parent.keys.filter((R) => R.optional) : [])
              .map((R) => R.name),
          ),
          d.params &&
            Ou(
              d.params,
              p.keys.map((R) => R.name),
            ),
        )),
        (b = p.stringify(y));
    } else if (d.path != null)
      (b = d.path),
        (p = n.find((R) => R.re.test(b))),
        p && ((y = p.parse(b)), (x = p.record.name));
    else {
      if (((p = h.name ? r.get(h.name) : n.find((R) => R.re.test(h.path))), !p))
        throw Rr(1, { location: d, currentLocation: h });
      (x = p.record.name),
        (y = ge({}, h.params, d.params)),
        (b = p.stringify(y));
    }
    const v = [];
    let E = p;
    for (; E; ) v.unshift(E.record), (E = E.parent);
    return { name: x, path: b, params: y, matched: v, meta: G0(v) };
  }
  t.forEach((d) => i(d));
  function u() {
    (n.length = 0), r.clear();
  }
  return {
    addRoute: i,
    resolve: c,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: l,
    getRecordMatcher: s,
  };
}
function Ou(t, e) {
  const n = {};
  for (const r of e) r in t && (n[r] = t[r]);
  return n;
}
function ju(t) {
  const e = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: J0(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in t
        ? t.components || null
        : t.component && { default: t.component },
  };
  return Object.defineProperty(e, "mods", { value: {} }), e;
}
function J0(t) {
  const e = {},
    n = t.props || !1;
  if ("component" in t) e.default = n;
  else for (const r in t.components) e[r] = typeof n == "object" ? n[r] : n;
  return e;
}
function Pu(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function G0(t) {
  return t.reduce((e, n) => ge(e, n.meta), {});
}
function Iu(t, e) {
  const n = {};
  for (const r in t) n[r] = r in e ? e[r] : t[r];
  return n;
}
function Q0(t, e) {
  let n = 0,
    r = e.length;
  for (; n !== r; ) {
    const i = (n + r) >> 1;
    Eh(t, e[i]) < 0 ? (r = i) : (n = i + 1);
  }
  const s = Y0(t);
  return s && (r = e.lastIndexOf(s, r - 1)), r;
}
function Y0(t) {
  let e = t;
  for (; (e = e.parent); ) if (Ah(e) && Eh(t, e) === 0) return e;
}
function Ah({ record: t }) {
  return !!(
    t.name ||
    (t.components && Object.keys(t.components).length) ||
    t.redirect
  );
}
function X0(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const r = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let s = 0; s < r.length; ++s) {
    const i = r[s].replace(bh, " "),
      o = i.indexOf("="),
      l = xs(o < 0 ? i : i.slice(0, o)),
      a = o < 0 ? null : xs(i.slice(o + 1));
    if (l in e) {
      let c = e[l];
      It(c) || (c = e[l] = [c]), c.push(a);
    } else e[l] = a;
  }
  return e;
}
function Lu(t) {
  let e = "";
  for (let n in t) {
    const r = t[n];
    if (((n = b0(n)), r == null)) {
      r !== void 0 && (e += (e.length ? "&" : "") + n);
      continue;
    }
    (It(r) ? r.map((i) => i && Wl(i)) : [r && Wl(r)]).forEach((i) => {
      i !== void 0 &&
        ((e += (e.length ? "&" : "") + n), i != null && (e += "=" + i));
    });
  }
  return e;
}
function Z0(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 &&
      (e[n] = It(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
          ? r
          : "" + r);
  }
  return e;
}
const ey = Symbol(""),
  Nu = Symbol(""),
  Xa = Symbol(""),
  Mh = Symbol(""),
  Kl = Symbol("");
function Vr() {
  let t = [];
  function e(r) {
    return (
      t.push(r),
      () => {
        const s = t.indexOf(r);
        s > -1 && t.splice(s, 1);
      }
    );
  }
  function n() {
    t = [];
  }
  return { add: e, list: () => t.slice(), reset: n };
}
function wn(t, e, n, r, s, i = (o) => o()) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((l, a) => {
      const c = (h) => {
          h === !1
            ? a(Rr(4, { from: n, to: e }))
            : h instanceof Error
              ? a(h)
              : D0(h)
                ? a(Rr(2, { from: e, to: h }))
                : (o &&
                    r.enterCallbacks[s] === o &&
                    typeof h == "function" &&
                    o.push(h),
                  l());
        },
        u = i(() => t.call(r && r.instances[s], e, n, c));
      let d = Promise.resolve(u);
      t.length < 3 && (d = d.then(c)), d.catch((h) => a(h));
    });
}
function nl(t, e, n, r, s = (i) => i()) {
  const i = [];
  for (const o of t)
    for (const l in o.components) {
      let a = o.components[l];
      if (!(e !== "beforeRouteEnter" && !o.instances[l]))
        if (gh(a)) {
          const u = (a.__vccOpts || a)[e];
          u && i.push(wn(u, n, r, o, l, s));
        } else {
          let c = a();
          i.push(() =>
            c.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${l}" at "${o.path}"`,
                );
              const d = l0(u) ? u.default : u;
              (o.mods[l] = u), (o.components[l] = d);
              const p = (d.__vccOpts || d)[e];
              return p && wn(p, n, r, o, l, s)();
            }),
          );
        }
    }
  return i;
}
function zu(t) {
  const e = un(Xa),
    n = un(Mh),
    r = Ot(() => {
      const a = wr(t.to);
      return e.resolve(a);
    }),
    s = Ot(() => {
      const { matched: a } = r.value,
        { length: c } = a,
        u = a[c - 1],
        d = n.matched;
      if (!u || !d.length) return -1;
      const h = d.findIndex(Tr.bind(null, u));
      if (h > -1) return h;
      const p = Du(a[c - 2]);
      return c > 1 && Du(u) === p && d[d.length - 1].path !== p
        ? d.findIndex(Tr.bind(null, a[c - 2]))
        : h;
    }),
    i = Ot(() => s.value > -1 && iy(n.params, r.value.params)),
    o = Ot(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        kh(n.params, r.value.params),
    );
  function l(a = {}) {
    if (sy(a)) {
      const c = e[wr(t.replace) ? "replace" : "push"](wr(t.to)).catch(rs);
      return (
        t.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => c),
        c
      );
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: Ot(() => r.value.href),
    isActive: i,
    isExactActive: o,
    navigate: l,
  };
}
function ty(t) {
  return t.length === 1 ? t[0] : t;
}
const ny = Vf({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: zu,
    setup(t, { slots: e }) {
      const n = Zt(zu(t)),
        { options: r } = un(Xa),
        s = Ot(() => ({
          [Bu(t.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Bu(
            t.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }));
      return () => {
        const i = e.default && ty(e.default(n));
        return t.custom
          ? i
          : Qa(
              "a",
              {
                "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              i,
            );
      };
    },
  }),
  ry = ny;
function sy(t) {
  if (
    !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
    !t.defaultPrevented &&
    !(t.button !== void 0 && t.button !== 0)
  ) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return;
    }
    return t.preventDefault && t.preventDefault(), !0;
  }
}
function iy(t, e) {
  for (const n in e) {
    const r = e[n],
      s = t[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!It(s) || s.length !== r.length || r.some((i, o) => i !== s[o]))
      return !1;
  }
  return !0;
}
function Du(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
}
const Bu = (t, e, n) => t ?? e ?? n,
  oy = Vf({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(t, { attrs: e, slots: n }) {
      const r = un(Kl),
        s = Ot(() => t.route || r.value),
        i = un(Nu, 0),
        o = Ot(() => {
          let c = wr(i);
          const { matched: u } = s.value;
          let d;
          for (; (d = u[c]) && !d.components; ) c++;
          return c;
        }),
        l = Ot(() => s.value.matched[o.value]);
      oi(
        Nu,
        Ot(() => o.value + 1),
      ),
        oi(ey, l),
        oi(Kl, s);
      const a = Of();
      return (
        _r(
          () => [a.value, l.value, t.name],
          ([c, u, d], [h, p, y]) => {
            u &&
              ((u.instances[d] = c),
              p &&
                p !== u &&
                c &&
                c === h &&
                (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards),
                u.updateGuards.size || (u.updateGuards = p.updateGuards))),
              c &&
                u &&
                (!p || !Tr(u, p) || !h) &&
                (u.enterCallbacks[d] || []).forEach((b) => b(c));
          },
          { flush: "post" },
        ),
        () => {
          const c = s.value,
            u = t.name,
            d = l.value,
            h = d && d.components[u];
          if (!h) return Hu(n.default, { Component: h, route: c });
          const p = d.props[u],
            y = p
              ? p === !0
                ? c.params
                : typeof p == "function"
                  ? p(c)
                  : p
              : null,
            x = Qa(
              h,
              ge({}, y, e, {
                onVnodeUnmounted: (v) => {
                  v.component.isUnmounted && (d.instances[u] = null);
                },
                ref: a,
              }),
            );
          return Hu(n.default, { Component: x, route: c }) || x;
        }
      );
    },
  });
function Hu(t, e) {
  if (!t) return null;
  const n = t(e);
  return n.length === 1 ? n[0] : n;
}
const ly = oy;
function ay(t) {
  const e = q0(t.routes, t),
    n = t.parseQuery || X0,
    r = t.stringifyQuery || Lu,
    s = t.history,
    i = Vr(),
    o = Vr(),
    l = Vr(),
    a = b1(pn);
  let c = pn;
  fr &&
    t.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = el.bind(null, (P) => "" + P),
    d = el.bind(null, v0),
    h = el.bind(null, xs);
  function p(P, K) {
    let Y, ee;
    return (
      Sh(P) ? ((Y = e.getRecordMatcher(P)), (ee = K)) : (ee = P),
      e.addRoute(ee, Y)
    );
  }
  function y(P) {
    const K = e.getRecordMatcher(P);
    K && e.removeRoute(K);
  }
  function b() {
    return e.getRoutes().map((P) => P.record);
  }
  function x(P) {
    return !!e.getRecordMatcher(P);
  }
  function v(P, K) {
    if (((K = ge({}, K || a.value)), typeof P == "string")) {
      const O = tl(n, P, K.path),
        L = e.resolve({ path: O.path }, K),
        $ = s.createHref(O.fullPath);
      return ge(O, L, {
        params: h(L.params),
        hash: xs(O.hash),
        redirectedFrom: void 0,
        href: $,
      });
    }
    let Y;
    if (P.path != null) Y = ge({}, P, { path: tl(n, P.path, K.path).path });
    else {
      const O = ge({}, P.params);
      for (const L in O) O[L] == null && delete O[L];
      (Y = ge({}, P, { params: d(O) })), (K.params = d(K.params));
    }
    const ee = e.resolve(Y, K),
      me = P.hash || "";
    ee.params = u(h(ee.params));
    const C = _0(r, ge({}, P, { hash: y0(me), path: ee.path })),
      A = s.createHref(C);
    return ge(
      { fullPath: C, hash: me, query: r === Lu ? Z0(P.query) : P.query || {} },
      ee,
      { redirectedFrom: void 0, href: A },
    );
  }
  function E(P) {
    return typeof P == "string" ? tl(n, P, a.value.path) : ge({}, P);
  }
  function R(P, K) {
    if (c !== P) return Rr(8, { from: K, to: P });
  }
  function f(P) {
    return w(P);
  }
  function g(P) {
    return f(ge(E(P), { replace: !0 }));
  }
  function m(P) {
    const K = P.matched[P.matched.length - 1];
    if (K && K.redirect) {
      const { redirect: Y } = K;
      let ee = typeof Y == "function" ? Y(P) : Y;
      return (
        typeof ee == "string" &&
          ((ee =
            ee.includes("?") || ee.includes("#") ? (ee = E(ee)) : { path: ee }),
          (ee.params = {})),
        ge(
          {
            query: P.query,
            hash: P.hash,
            params: ee.path != null ? {} : P.params,
          },
          ee,
        )
      );
    }
  }
  function w(P, K) {
    const Y = (c = v(P)),
      ee = a.value,
      me = P.state,
      C = P.force,
      A = P.replace === !0,
      O = m(Y);
    if (O)
      return w(
        ge(E(O), {
          state: typeof O == "object" ? ge({}, me, O.state) : me,
          force: C,
          replace: A,
        }),
        K || Y,
      );
    const L = Y;
    L.redirectedFrom = K;
    let $;
    return (
      !C &&
        S0(r, ee, Y) &&
        (($ = Rr(16, { to: L, from: ee })), G(ee, ee, !0, !1)),
      ($ ? Promise.resolve($) : _(L, ee))
        .catch((D) => (nn(D) ? (nn(D, 2) ? D : ie(D)) : B(D, L, ee)))
        .then((D) => {
          if (D) {
            if (nn(D, 2))
              return w(
                ge({ replace: A }, E(D.to), {
                  state: typeof D.to == "object" ? ge({}, me, D.to.state) : me,
                  force: C,
                }),
                K || L,
              );
          } else D = F(L, ee, !0, A, me);
          return T(L, ee, D), D;
        })
    );
  }
  function S(P, K) {
    const Y = R(P, K);
    return Y ? Promise.reject(Y) : Promise.resolve();
  }
  function M(P) {
    const K = ke.values().next().value;
    return K && typeof K.runWithContext == "function"
      ? K.runWithContext(P)
      : P();
  }
  function _(P, K) {
    let Y;
    const [ee, me, C] = cy(P, K);
    Y = nl(ee.reverse(), "beforeRouteLeave", P, K);
    for (const O of ee)
      O.leaveGuards.forEach((L) => {
        Y.push(wn(L, P, K));
      });
    const A = S.bind(null, P, K);
    return (
      Y.push(A),
      ve(Y)
        .then(() => {
          Y = [];
          for (const O of i.list()) Y.push(wn(O, P, K));
          return Y.push(A), ve(Y);
        })
        .then(() => {
          Y = nl(me, "beforeRouteUpdate", P, K);
          for (const O of me)
            O.updateGuards.forEach((L) => {
              Y.push(wn(L, P, K));
            });
          return Y.push(A), ve(Y);
        })
        .then(() => {
          Y = [];
          for (const O of C)
            if (O.beforeEnter)
              if (It(O.beforeEnter))
                for (const L of O.beforeEnter) Y.push(wn(L, P, K));
              else Y.push(wn(O.beforeEnter, P, K));
          return Y.push(A), ve(Y);
        })
        .then(
          () => (
            P.matched.forEach((O) => (O.enterCallbacks = {})),
            (Y = nl(C, "beforeRouteEnter", P, K, M)),
            Y.push(A),
            ve(Y)
          ),
        )
        .then(() => {
          Y = [];
          for (const O of o.list()) Y.push(wn(O, P, K));
          return Y.push(A), ve(Y);
        })
        .catch((O) => (nn(O, 8) ? O : Promise.reject(O)))
    );
  }
  function T(P, K, Y) {
    l.list().forEach((ee) => M(() => ee(P, K, Y)));
  }
  function F(P, K, Y, ee, me) {
    const C = R(P, K);
    if (C) return C;
    const A = K === pn,
      O = fr ? history.state : {};
    Y &&
      (ee || A
        ? s.replace(P.fullPath, ge({ scroll: A && O && O.scroll }, me))
        : s.push(P.fullPath, me)),
      (a.value = P),
      G(P, K, Y, A),
      ie();
  }
  let N;
  function I() {
    N ||
      (N = s.listen((P, K, Y) => {
        if (!Ae.listening) return;
        const ee = v(P),
          me = m(ee);
        if (me) {
          w(ge(me, { replace: !0, force: !0 }), ee).catch(rs);
          return;
        }
        c = ee;
        const C = a.value;
        fr && j0(Eu(C.fullPath, Y.delta), Ro()),
          _(ee, C)
            .catch((A) =>
              nn(A, 12)
                ? A
                : nn(A, 2)
                  ? (w(ge(E(A.to), { force: !0 }), ee)
                      .then((O) => {
                        nn(O, 20) &&
                          !Y.delta &&
                          Y.type === ks.pop &&
                          s.go(-1, !1);
                      })
                      .catch(rs),
                    Promise.reject())
                  : (Y.delta && s.go(-Y.delta, !1), B(A, ee, C)),
            )
            .then((A) => {
              (A = A || F(ee, C, !1)),
                A &&
                  (Y.delta && !nn(A, 8)
                    ? s.go(-Y.delta, !1)
                    : Y.type === ks.pop && nn(A, 20) && s.go(-1, !1)),
                T(ee, C, A);
            })
            .catch(rs);
      }));
  }
  let z = Vr(),
    k = Vr(),
    j;
  function B(P, K, Y) {
    ie(P);
    const ee = k.list();
    return (
      ee.length ? ee.forEach((me) => me(P, K, Y)) : console.error(P),
      Promise.reject(P)
    );
  }
  function U() {
    return j && a.value !== pn
      ? Promise.resolve()
      : new Promise((P, K) => {
          z.add([P, K]);
        });
  }
  function ie(P) {
    return (
      j ||
        ((j = !P),
        I(),
        z.list().forEach(([K, Y]) => (P ? Y(P) : K())),
        z.reset()),
      P
    );
  }
  function G(P, K, Y, ee) {
    const { scrollBehavior: me } = t;
    if (!fr || !me) return Promise.resolve();
    const C =
      (!Y && P0(Eu(P.fullPath, 0))) ||
      ((ee || !Y) && history.state && history.state.scroll) ||
      null;
    return Lf()
      .then(() => me(P, K, C))
      .then((A) => A && O0(A))
      .catch((A) => B(A, P, K));
  }
  const de = (P) => s.go(P);
  let pe;
  const ke = new Set(),
    Ae = {
      currentRoute: a,
      listening: !0,
      addRoute: p,
      removeRoute: y,
      clearRoutes: e.clearRoutes,
      hasRoute: x,
      getRoutes: b,
      resolve: v,
      options: t,
      push: f,
      replace: g,
      go: de,
      back: () => de(-1),
      forward: () => de(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: k.add,
      isReady: U,
      install(P) {
        const K = this;
        P.component("RouterLink", ry),
          P.component("RouterView", ly),
          (P.config.globalProperties.$router = K),
          Object.defineProperty(P.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => wr(a),
          }),
          fr &&
            !pe &&
            a.value === pn &&
            ((pe = !0), f(s.location).catch((me) => {}));
        const Y = {};
        for (const me in pn)
          Object.defineProperty(Y, me, {
            get: () => a.value[me],
            enumerable: !0,
          });
        P.provide(Xa, K), P.provide(Mh, Tf(Y)), P.provide(Kl, a);
        const ee = P.unmount;
        ke.add(P),
          (P.unmount = function () {
            ke.delete(P),
              ke.size < 1 &&
                ((c = pn),
                N && N(),
                (N = null),
                (a.value = pn),
                (pe = !1),
                (j = !1)),
              ee();
          });
      },
    };
  function ve(P) {
    return P.reduce((K, Y) => K.then(() => M(Y)), Promise.resolve());
  }
  return Ae;
}
function cy(t, e) {
  const n = [],
    r = [],
    s = [],
    i = Math.max(e.matched.length, t.matched.length);
  for (let o = 0; o < i; o++) {
    const l = e.matched[o];
    l && (t.matched.find((c) => Tr(c, l)) ? r.push(l) : n.push(l));
    const a = t.matched[o];
    a && (e.matched.find((c) => Tr(c, a)) || s.push(a));
  }
  return [n, r, s];
}
const uy = [
  {
    path: "/",
    name: "Home",
    component: () =>
      _u(() => import("./Home-QzDwJUpV.js"), __vite__mapDeps([0, 1])),
  },
  {
    path: "/timetable",
    name: "Timetable",
    component: () =>
      _u(() => import("./Timetable-C9DGBVoB.js"), __vite__mapDeps([2, 1, 3])),
  },
];
let dy = ay({ history: z0("/nl_school"), routes: uy });
const Za = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r, s] of e) n[r] = s;
    return n;
  },
  fy = {};
function hy(t, e) {
  const n = Nl("router-view");
  return at(), yn("div", null, [dt(n)]);
}
const py = Za(fy, [["render", hy]]);
function my(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var ci = { exports: {} },
  gy = ci.exports,
  $u;
function yy() {
  return (
    $u ||
      (($u = 1),
      (function (t, e) {
        (function (r, s) {
          t.exports = s();
        })(typeof self < "u" ? self : gy, function () {
          return (function (n) {
            var r = {};
            function s(i) {
              if (r[i]) return r[i].exports;
              var o = (r[i] = { i, l: !1, exports: {} });
              return (
                n[i].call(o.exports, o, o.exports, s), (o.l = !0), o.exports
              );
            }
            return (
              (s.m = n),
              (s.c = r),
              (s.d = function (i, o, l) {
                s.o(i, o) ||
                  Object.defineProperty(i, o, {
                    configurable: !1,
                    enumerable: !0,
                    get: l,
                  });
              }),
              (s.r = function (i) {
                Object.defineProperty(i, "__esModule", { value: !0 });
              }),
              (s.n = function (i) {
                var o =
                  i && i.__esModule
                    ? function () {
                        return i.default;
                      }
                    : function () {
                        return i;
                      };
                return s.d(o, "a", o), o;
              }),
              (s.o = function (i, o) {
                return Object.prototype.hasOwnProperty.call(i, o);
              }),
              (s.p = ""),
              s((s.s = 0))
            );
          })({
            "./dist/icons.json": function (n) {
              n.exports = {
                activity:
                  '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
                airplay:
                  '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
                "alert-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-octagon":
                  '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-triangle":
                  '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                "align-center":
                  '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
                "align-justify":
                  '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
                "align-left":
                  '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
                "align-right":
                  '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
                anchor:
                  '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
                aperture:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
                archive:
                  '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
                "arrow-down-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
                "arrow-down-left":
                  '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
                "arrow-down-right":
                  '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
                "arrow-down":
                  '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
                "arrow-left-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
                "arrow-left":
                  '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
                "arrow-right-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
                "arrow-right":
                  '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
                "arrow-up-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
                "arrow-up-left":
                  '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
                "arrow-up-right":
                  '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
                "arrow-up":
                  '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
                "at-sign":
                  '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
                award:
                  '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
                "bar-chart-2":
                  '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
                "bar-chart":
                  '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
                "battery-charging":
                  '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
                battery:
                  '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
                "bell-off":
                  '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
                bluetooth:
                  '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
                bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
                "book-open":
                  '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                bookmark:
                  '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
                box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                briefcase:
                  '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
                calendar:
                  '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                "camera-off":
                  '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
                camera:
                  '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
                cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
                "check-circle":
                  '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                "check-square":
                  '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
                check: '<polyline points="20 6 9 17 4 12"></polyline>',
                "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
                "chevron-left":
                  '<polyline points="15 18 9 12 15 6"></polyline>',
                "chevron-right":
                  '<polyline points="9 18 15 12 9 6"></polyline>',
                "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
                "chevrons-down":
                  '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
                "chevrons-left":
                  '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
                "chevrons-right":
                  '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
                "chevrons-up":
                  '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
                chrome:
                  '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
                circle: '<circle cx="12" cy="12" r="10"></circle>',
                clipboard:
                  '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                clock:
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                "cloud-drizzle":
                  '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-lightning":
                  '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
                "cloud-off":
                  '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "cloud-rain":
                  '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-snow":
                  '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
                cloud:
                  '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
                code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
                codepen:
                  '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
                codesandbox:
                  '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                coffee:
                  '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
                columns:
                  '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
                command:
                  '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
                compass:
                  '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
                copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
                "corner-down-left":
                  '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
                "corner-down-right":
                  '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
                "corner-left-down":
                  '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
                "corner-left-up":
                  '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
                "corner-right-down":
                  '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
                "corner-right-up":
                  '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
                "corner-up-left":
                  '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
                "corner-up-right":
                  '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
                cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
                "credit-card":
                  '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
                crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
                crosshair:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
                database:
                  '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
                delete:
                  '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
                disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
                "divide-circle":
                  '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
                "divide-square":
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
                divide:
                  '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
                "dollar-sign":
                  '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
                "download-cloud":
                  '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
                download:
                  '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
                dribbble:
                  '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
                droplet:
                  '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
                "edit-2":
                  '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
                "edit-3":
                  '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
                edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
                "external-link":
                  '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
                "eye-off":
                  '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
                facebook:
                  '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
                "fast-forward":
                  '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
                feather:
                  '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
                figma:
                  '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
                "file-minus":
                  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-plus":
                  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-text":
                  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
                film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
                filter:
                  '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
                flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
                "folder-minus":
                  '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
                "folder-plus":
                  '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
                folder:
                  '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
                framer:
                  '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
                frown:
                  '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
                "git-branch":
                  '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
                "git-commit":
                  '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
                "git-merge":
                  '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
                "git-pull-request":
                  '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
                github:
                  '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                gitlab:
                  '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                globe:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
                grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
                "hard-drive":
                  '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
                hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
                headphones:
                  '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
                heart:
                  '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                "help-circle":
                  '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                hexagon:
                  '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
                home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                image:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
                inbox:
                  '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
                info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
                instagram:
                  '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
                italic:
                  '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
                key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
                layers:
                  '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                layout:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
                "life-buoy":
                  '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
                "link-2":
                  '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
                link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
                linkedin:
                  '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
                list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
                loader:
                  '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
                lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
                "log-in":
                  '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
                "log-out":
                  '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
                mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
                "map-pin":
                  '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
                map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
                "maximize-2":
                  '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                maximize:
                  '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
                meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
                "message-circle":
                  '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
                "message-square":
                  '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
                "mic-off":
                  '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                "minimize-2":
                  '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                minimize:
                  '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
                "minus-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
                "minus-square":
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
                minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
                monitor:
                  '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
                moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                "more-horizontal":
                  '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
                "more-vertical":
                  '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
                "mouse-pointer":
                  '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
                move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
                music:
                  '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
                "navigation-2":
                  '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
                navigation:
                  '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
                octagon:
                  '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
                package:
                  '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                paperclip:
                  '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
                "pause-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
                pause:
                  '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
                "pen-tool":
                  '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
                percent:
                  '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
                "phone-call":
                  '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-forwarded":
                  '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-incoming":
                  '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-missed":
                  '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-off":
                  '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
                "phone-outgoing":
                  '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                phone:
                  '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "pie-chart":
                  '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
                "play-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
                play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
                "plus-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                "plus-square":
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
                pocket:
                  '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
                power:
                  '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
                printer:
                  '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
                radio:
                  '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
                "refresh-ccw":
                  '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
                "refresh-cw":
                  '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
                repeat:
                  '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
                rewind:
                  '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
                "rotate-ccw":
                  '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
                "rotate-cw":
                  '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
                rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
                save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
                scissors:
                  '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
                search:
                  '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
                send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
                server:
                  '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
                settings:
                  '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                "share-2":
                  '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
                share:
                  '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
                "shield-off":
                  '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                shield:
                  '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
                "shopping-bag":
                  '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
                "shopping-cart":
                  '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                shuffle:
                  '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
                sidebar:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
                "skip-back":
                  '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
                "skip-forward":
                  '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
                slack:
                  '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
                slash:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
                sliders:
                  '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
                smartphone:
                  '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                smile:
                  '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                speaker:
                  '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
                square:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
                star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                "stop-circle":
                  '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
                sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                sunrise:
                  '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
                sunset:
                  '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
                table:
                  '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',
                tablet:
                  '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
                target:
                  '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                terminal:
                  '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
                thermometer:
                  '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                "thumbs-down":
                  '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
                "thumbs-up":
                  '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
                "toggle-left":
                  '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
                "toggle-right":
                  '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
                tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
                "trash-2":
                  '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
                trash:
                  '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
                trello:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
                "trending-down":
                  '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
                "trending-up":
                  '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
                triangle:
                  '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
                truck:
                  '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
                tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
                twitch:
                  '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
                twitter:
                  '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
                umbrella:
                  '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
                underline:
                  '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
                unlock:
                  '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
                "upload-cloud":
                  '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
                upload:
                  '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
                "user-check":
                  '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
                "user-minus":
                  '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-plus":
                  '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-x":
                  '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
                user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                users:
                  '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                "video-off":
                  '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                video:
                  '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
                voicemail:
                  '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
                "volume-1":
                  '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-2":
                  '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-x":
                  '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
                volume:
                  '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
                watch:
                  '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
                "wifi-off":
                  '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
                "x-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-octagon":
                  '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-square":
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
                x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
                youtube:
                  '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
                "zap-off":
                  '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
                zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
                "zoom-in":
                  '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                "zoom-out":
                  '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
              };
            },
            "./node_modules/classnames/dedupe.js": function (n, r, s) {
              var i, o;
              /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (function () {
                var l = (function () {
                  function a() {}
                  a.prototype = Object.create(null);
                  function c(v, E) {
                    for (var R = E.length, f = 0; f < R; ++f) b(v, E[f]);
                  }
                  var u = {}.hasOwnProperty;
                  function d(v, E) {
                    v[E] = !0;
                  }
                  function h(v, E) {
                    for (var R in E) u.call(E, R) && (v[R] = !!E[R]);
                  }
                  var p = /\s+/;
                  function y(v, E) {
                    for (var R = E.split(p), f = R.length, g = 0; g < f; ++g)
                      v[R[g]] = !0;
                  }
                  function b(v, E) {
                    if (E) {
                      var R = typeof E;
                      R === "string"
                        ? y(v, E)
                        : Array.isArray(E)
                          ? c(v, E)
                          : R === "object"
                            ? h(v, E)
                            : R === "number" && d(v, E);
                    }
                  }
                  function x() {
                    for (
                      var v = arguments.length, E = Array(v), R = 0;
                      R < v;
                      R++
                    )
                      E[R] = arguments[R];
                    var f = new a();
                    c(f, E);
                    var g = [];
                    for (var m in f) f[m] && g.push(m);
                    return g.join(" ");
                  }
                  return x;
                })();
                typeof n < "u" && n.exports
                  ? (n.exports = l)
                  : ((i = []),
                    (o = function () {
                      return l;
                    }.apply(r, i)),
                    o !== void 0 && (n.exports = o));
              })();
            },
            "./node_modules/core-js/es/array/from.js": function (n, r, s) {
              s("./node_modules/core-js/modules/es.string.iterator.js"),
                s("./node_modules/core-js/modules/es.array.from.js");
              var i = s("./node_modules/core-js/internals/path.js");
              n.exports = i.Array.from;
            },
            "./node_modules/core-js/internals/a-function.js": function (n, r) {
              n.exports = function (s) {
                if (typeof s != "function")
                  throw TypeError(String(s) + " is not a function");
                return s;
              };
            },
            "./node_modules/core-js/internals/an-object.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/is-object.js");
              n.exports = function (o) {
                if (!i(o)) throw TypeError(String(o) + " is not an object");
                return o;
              };
            },
            "./node_modules/core-js/internals/array-from.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/bind-context.js"),
                o = s("./node_modules/core-js/internals/to-object.js"),
                l = s(
                  "./node_modules/core-js/internals/call-with-safe-iteration-closing.js",
                ),
                a = s(
                  "./node_modules/core-js/internals/is-array-iterator-method.js",
                ),
                c = s("./node_modules/core-js/internals/to-length.js"),
                u = s("./node_modules/core-js/internals/create-property.js"),
                d = s(
                  "./node_modules/core-js/internals/get-iterator-method.js",
                );
              n.exports = function (p) {
                var y = o(p),
                  b = typeof this == "function" ? this : Array,
                  x = arguments.length,
                  v = x > 1 ? arguments[1] : void 0,
                  E = v !== void 0,
                  R = 0,
                  f = d(y),
                  g,
                  m,
                  w,
                  S;
                if (
                  (E && (v = i(v, x > 2 ? arguments[2] : void 0, 2)),
                  f != null && !(b == Array && a(f)))
                )
                  for (S = f.call(y), m = new b(); !(w = S.next()).done; R++)
                    u(m, R, E ? l(S, v, [w.value, R], !0) : w.value);
                else
                  for (g = c(y.length), m = new b(g); g > R; R++)
                    u(m, R, E ? v(y[R], R) : y[R]);
                return (m.length = R), m;
              };
            },
            "./node_modules/core-js/internals/array-includes.js": function (
              n,
              r,
              s,
            ) {
              var i = s(
                  "./node_modules/core-js/internals/to-indexed-object.js",
                ),
                o = s("./node_modules/core-js/internals/to-length.js"),
                l = s("./node_modules/core-js/internals/to-absolute-index.js");
              n.exports = function (a) {
                return function (c, u, d) {
                  var h = i(c),
                    p = o(h.length),
                    y = l(d, p),
                    b;
                  if (a && u != u) {
                    for (; p > y; ) if (((b = h[y++]), b != b)) return !0;
                  } else
                    for (; p > y; y++)
                      if ((a || y in h) && h[y] === u) return a || y || 0;
                  return !a && -1;
                };
              };
            },
            "./node_modules/core-js/internals/bind-context.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/a-function.js");
              n.exports = function (o, l, a) {
                if ((i(o), l === void 0)) return o;
                switch (a) {
                  case 0:
                    return function () {
                      return o.call(l);
                    };
                  case 1:
                    return function (c) {
                      return o.call(l, c);
                    };
                  case 2:
                    return function (c, u) {
                      return o.call(l, c, u);
                    };
                  case 3:
                    return function (c, u, d) {
                      return o.call(l, c, u, d);
                    };
                }
                return function () {
                  return o.apply(l, arguments);
                };
              };
            },
            "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
              function (n, r, s) {
                var i = s("./node_modules/core-js/internals/an-object.js");
                n.exports = function (o, l, a, c) {
                  try {
                    return c ? l(i(a)[0], a[1]) : l(a);
                  } catch (d) {
                    var u = o.return;
                    throw (u !== void 0 && i(u.call(o)), d);
                  }
                };
              },
            "./node_modules/core-js/internals/check-correctness-of-iteration.js":
              function (n, r, s) {
                var i = s(
                    "./node_modules/core-js/internals/well-known-symbol.js",
                  ),
                  o = i("iterator"),
                  l = !1;
                try {
                  var a = 0,
                    c = {
                      next: function () {
                        return { done: !!a++ };
                      },
                      return: function () {
                        l = !0;
                      },
                    };
                  (c[o] = function () {
                    return this;
                  }),
                    Array.from(c, function () {
                      throw 2;
                    });
                } catch {}
                n.exports = function (u, d) {
                  if (!d && !l) return !1;
                  var h = !1;
                  try {
                    var p = {};
                    (p[o] = function () {
                      return {
                        next: function () {
                          return { done: (h = !0) };
                        },
                      };
                    }),
                      u(p);
                  } catch {}
                  return h;
                };
              },
            "./node_modules/core-js/internals/classof-raw.js": function (n, r) {
              var s = {}.toString;
              n.exports = function (i) {
                return s.call(i).slice(8, -1);
              };
            },
            "./node_modules/core-js/internals/classof.js": function (n, r, s) {
              var i = s("./node_modules/core-js/internals/classof-raw.js"),
                o = s("./node_modules/core-js/internals/well-known-symbol.js"),
                l = o("toStringTag"),
                a =
                  i(
                    (function () {
                      return arguments;
                    })(),
                  ) == "Arguments",
                c = function (u, d) {
                  try {
                    return u[d];
                  } catch {}
                };
              n.exports = function (u) {
                var d, h, p;
                return u === void 0
                  ? "Undefined"
                  : u === null
                    ? "Null"
                    : typeof (h = c((d = Object(u)), l)) == "string"
                      ? h
                      : a
                        ? i(d)
                        : (p = i(d)) == "Object" &&
                            typeof d.callee == "function"
                          ? "Arguments"
                          : p;
              };
            },
            "./node_modules/core-js/internals/copy-constructor-properties.js":
              function (n, r, s) {
                var i = s("./node_modules/core-js/internals/has.js"),
                  o = s("./node_modules/core-js/internals/own-keys.js"),
                  l = s(
                    "./node_modules/core-js/internals/object-get-own-property-descriptor.js",
                  ),
                  a = s(
                    "./node_modules/core-js/internals/object-define-property.js",
                  );
                n.exports = function (c, u) {
                  for (
                    var d = o(u), h = a.f, p = l.f, y = 0;
                    y < d.length;
                    y++
                  ) {
                    var b = d[y];
                    i(c, b) || h(c, b, p(u, b));
                  }
                };
              },
            "./node_modules/core-js/internals/correct-prototype-getter.js":
              function (n, r, s) {
                var i = s("./node_modules/core-js/internals/fails.js");
                n.exports = !i(function () {
                  function o() {}
                  return (
                    (o.prototype.constructor = null),
                    Object.getPrototypeOf(new o()) !== o.prototype
                  );
                });
              },
            "./node_modules/core-js/internals/create-iterator-constructor.js":
              function (n, r, s) {
                var i = s(
                    "./node_modules/core-js/internals/iterators-core.js",
                  ).IteratorPrototype,
                  o = s("./node_modules/core-js/internals/object-create.js"),
                  l = s(
                    "./node_modules/core-js/internals/create-property-descriptor.js",
                  ),
                  a = s(
                    "./node_modules/core-js/internals/set-to-string-tag.js",
                  ),
                  c = s("./node_modules/core-js/internals/iterators.js"),
                  u = function () {
                    return this;
                  };
                n.exports = function (d, h, p) {
                  var y = h + " Iterator";
                  return (
                    (d.prototype = o(i, { next: l(1, p) })),
                    a(d, y, !1, !0),
                    (c[y] = u),
                    d
                  );
                };
              },
            "./node_modules/core-js/internals/create-property-descriptor.js":
              function (n, r) {
                n.exports = function (s, i) {
                  return {
                    enumerable: !(s & 1),
                    configurable: !(s & 2),
                    writable: !(s & 4),
                    value: i,
                  };
                };
              },
            "./node_modules/core-js/internals/create-property.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/to-primitive.js"),
                o = s(
                  "./node_modules/core-js/internals/object-define-property.js",
                ),
                l = s(
                  "./node_modules/core-js/internals/create-property-descriptor.js",
                );
              n.exports = function (a, c, u) {
                var d = i(c);
                d in a ? o.f(a, d, l(0, u)) : (a[d] = u);
              };
            },
            "./node_modules/core-js/internals/define-iterator.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/export.js"),
                o = s(
                  "./node_modules/core-js/internals/create-iterator-constructor.js",
                ),
                l = s(
                  "./node_modules/core-js/internals/object-get-prototype-of.js",
                ),
                a = s(
                  "./node_modules/core-js/internals/object-set-prototype-of.js",
                ),
                c = s("./node_modules/core-js/internals/set-to-string-tag.js"),
                u = s("./node_modules/core-js/internals/hide.js"),
                d = s("./node_modules/core-js/internals/redefine.js"),
                h = s("./node_modules/core-js/internals/well-known-symbol.js"),
                p = s("./node_modules/core-js/internals/is-pure.js"),
                y = s("./node_modules/core-js/internals/iterators.js"),
                b = s("./node_modules/core-js/internals/iterators-core.js"),
                x = b.IteratorPrototype,
                v = b.BUGGY_SAFARI_ITERATORS,
                E = h("iterator"),
                R = "keys",
                f = "values",
                g = "entries",
                m = function () {
                  return this;
                };
              n.exports = function (w, S, M, _, T, F, N) {
                o(M, S, _);
                var I = function (ke) {
                    if (ke === T && U) return U;
                    if (!v && ke in j) return j[ke];
                    switch (ke) {
                      case R:
                        return function () {
                          return new M(this, ke);
                        };
                      case f:
                        return function () {
                          return new M(this, ke);
                        };
                      case g:
                        return function () {
                          return new M(this, ke);
                        };
                    }
                    return function () {
                      return new M(this);
                    };
                  },
                  z = S + " Iterator",
                  k = !1,
                  j = w.prototype,
                  B = j[E] || j["@@iterator"] || (T && j[T]),
                  U = (!v && B) || I(T),
                  ie = (S == "Array" && j.entries) || B,
                  G,
                  de,
                  pe;
                if (
                  (ie &&
                    ((G = l(ie.call(new w()))),
                    x !== Object.prototype &&
                      G.next &&
                      (!p &&
                        l(G) !== x &&
                        (a ? a(G, x) : typeof G[E] != "function" && u(G, E, m)),
                      c(G, z, !0, !0),
                      p && (y[z] = m))),
                  T == f &&
                    B &&
                    B.name !== f &&
                    ((k = !0),
                    (U = function () {
                      return B.call(this);
                    })),
                  (!p || N) && j[E] !== U && u(j, E, U),
                  (y[S] = U),
                  T)
                )
                  if (
                    ((de = { values: I(f), keys: F ? U : I(R), entries: I(g) }),
                    N)
                  )
                    for (pe in de) (v || k || !(pe in j)) && d(j, pe, de[pe]);
                  else i({ target: S, proto: !0, forced: v || k }, de);
                return de;
              };
            },
            "./node_modules/core-js/internals/descriptors.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/fails.js");
              n.exports = !i(function () {
                return (
                  Object.defineProperty({}, "a", {
                    get: function () {
                      return 7;
                    },
                  }).a != 7
                );
              });
            },
            "./node_modules/core-js/internals/document-create-element.js":
              function (n, r, s) {
                var i = s("./node_modules/core-js/internals/global.js"),
                  o = s("./node_modules/core-js/internals/is-object.js"),
                  l = i.document,
                  a = o(l) && o(l.createElement);
                n.exports = function (c) {
                  return a ? l.createElement(c) : {};
                };
              },
            "./node_modules/core-js/internals/enum-bug-keys.js": function (
              n,
              r,
            ) {
              n.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf",
              ];
            },
            "./node_modules/core-js/internals/export.js": function (n, r, s) {
              var i = s("./node_modules/core-js/internals/global.js"),
                o = s(
                  "./node_modules/core-js/internals/object-get-own-property-descriptor.js",
                ).f,
                l = s("./node_modules/core-js/internals/hide.js"),
                a = s("./node_modules/core-js/internals/redefine.js"),
                c = s("./node_modules/core-js/internals/set-global.js"),
                u = s(
                  "./node_modules/core-js/internals/copy-constructor-properties.js",
                ),
                d = s("./node_modules/core-js/internals/is-forced.js");
              n.exports = function (h, p) {
                var y = h.target,
                  b = h.global,
                  x = h.stat,
                  v,
                  E,
                  R,
                  f,
                  g,
                  m;
                if (
                  (b
                    ? (E = i)
                    : x
                      ? (E = i[y] || c(y, {}))
                      : (E = (i[y] || {}).prototype),
                  E)
                )
                  for (R in p) {
                    if (
                      ((g = p[R]),
                      h.noTargetGet
                        ? ((m = o(E, R)), (f = m && m.value))
                        : (f = E[R]),
                      (v = d(b ? R : y + (x ? "." : "#") + R, h.forced)),
                      !v && f !== void 0)
                    ) {
                      if (typeof g == typeof f) continue;
                      u(g, f);
                    }
                    (h.sham || (f && f.sham)) && l(g, "sham", !0),
                      a(E, R, g, h);
                  }
              };
            },
            "./node_modules/core-js/internals/fails.js": function (n, r) {
              n.exports = function (s) {
                try {
                  return !!s();
                } catch {
                  return !0;
                }
              };
            },
            "./node_modules/core-js/internals/function-to-string.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/shared.js");
              n.exports = i("native-function-to-string", Function.toString);
            },
            "./node_modules/core-js/internals/get-iterator-method.js":
              function (n, r, s) {
                var i = s("./node_modules/core-js/internals/classof.js"),
                  o = s("./node_modules/core-js/internals/iterators.js"),
                  l = s(
                    "./node_modules/core-js/internals/well-known-symbol.js",
                  ),
                  a = l("iterator");
                n.exports = function (c) {
                  if (c != null) return c[a] || c["@@iterator"] || o[i(c)];
                };
              },
            "./node_modules/core-js/internals/global.js": function (n, r, s) {
              (function (i) {
                var o = "object",
                  l = function (a) {
                    return a && a.Math == Math && a;
                  };
                n.exports =
                  l(typeof globalThis == o && globalThis) ||
                  l(typeof window == o && window) ||
                  l(typeof self == o && self) ||
                  l(typeof i == o && i) ||
                  Function("return this")();
              }).call(this, s("./node_modules/webpack/buildin/global.js"));
            },
            "./node_modules/core-js/internals/has.js": function (n, r) {
              var s = {}.hasOwnProperty;
              n.exports = function (i, o) {
                return s.call(i, o);
              };
            },
            "./node_modules/core-js/internals/hidden-keys.js": function (n, r) {
              n.exports = {};
            },
            "./node_modules/core-js/internals/hide.js": function (n, r, s) {
              var i = s("./node_modules/core-js/internals/descriptors.js"),
                o = s(
                  "./node_modules/core-js/internals/object-define-property.js",
                ),
                l = s(
                  "./node_modules/core-js/internals/create-property-descriptor.js",
                );
              n.exports = i
                ? function (a, c, u) {
                    return o.f(a, c, l(1, u));
                  }
                : function (a, c, u) {
                    return (a[c] = u), a;
                  };
            },
            "./node_modules/core-js/internals/html.js": function (n, r, s) {
              var i = s("./node_modules/core-js/internals/global.js"),
                o = i.document;
              n.exports = o && o.documentElement;
            },
            "./node_modules/core-js/internals/ie8-dom-define.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/descriptors.js"),
                o = s("./node_modules/core-js/internals/fails.js"),
                l = s(
                  "./node_modules/core-js/internals/document-create-element.js",
                );
              n.exports =
                !i &&
                !o(function () {
                  return (
                    Object.defineProperty(l("div"), "a", {
                      get: function () {
                        return 7;
                      },
                    }).a != 7
                  );
                });
            },
            "./node_modules/core-js/internals/indexed-object.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/fails.js"),
                o = s("./node_modules/core-js/internals/classof-raw.js"),
                l = "".split;
              n.exports = i(function () {
                return !Object("z").propertyIsEnumerable(0);
              })
                ? function (a) {
                    return o(a) == "String" ? l.call(a, "") : Object(a);
                  }
                : Object;
            },
            "./node_modules/core-js/internals/internal-state.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/native-weak-map.js"),
                o = s("./node_modules/core-js/internals/global.js"),
                l = s("./node_modules/core-js/internals/is-object.js"),
                a = s("./node_modules/core-js/internals/hide.js"),
                c = s("./node_modules/core-js/internals/has.js"),
                u = s("./node_modules/core-js/internals/shared-key.js"),
                d = s("./node_modules/core-js/internals/hidden-keys.js"),
                h = o.WeakMap,
                p,
                y,
                b,
                x = function (w) {
                  return b(w) ? y(w) : p(w, {});
                },
                v = function (w) {
                  return function (S) {
                    var M;
                    if (!l(S) || (M = y(S)).type !== w)
                      throw TypeError(
                        "Incompatible receiver, " + w + " required",
                      );
                    return M;
                  };
                };
              if (i) {
                var E = new h(),
                  R = E.get,
                  f = E.has,
                  g = E.set;
                (p = function (w, S) {
                  return g.call(E, w, S), S;
                }),
                  (y = function (w) {
                    return R.call(E, w) || {};
                  }),
                  (b = function (w) {
                    return f.call(E, w);
                  });
              } else {
                var m = u("state");
                (d[m] = !0),
                  (p = function (w, S) {
                    return a(w, m, S), S;
                  }),
                  (y = function (w) {
                    return c(w, m) ? w[m] : {};
                  }),
                  (b = function (w) {
                    return c(w, m);
                  });
              }
              n.exports = { set: p, get: y, has: b, enforce: x, getterFor: v };
            },
            "./node_modules/core-js/internals/is-array-iterator-method.js":
              function (n, r, s) {
                var i = s(
                    "./node_modules/core-js/internals/well-known-symbol.js",
                  ),
                  o = s("./node_modules/core-js/internals/iterators.js"),
                  l = i("iterator"),
                  a = Array.prototype;
                n.exports = function (c) {
                  return c !== void 0 && (o.Array === c || a[l] === c);
                };
              },
            "./node_modules/core-js/internals/is-forced.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/fails.js"),
                o = /#|\.prototype\./,
                l = function (h, p) {
                  var y = c[a(h)];
                  return y == d
                    ? !0
                    : y == u
                      ? !1
                      : typeof p == "function"
                        ? i(p)
                        : !!p;
                },
                a = (l.normalize = function (h) {
                  return String(h).replace(o, ".").toLowerCase();
                }),
                c = (l.data = {}),
                u = (l.NATIVE = "N"),
                d = (l.POLYFILL = "P");
              n.exports = l;
            },
            "./node_modules/core-js/internals/is-object.js": function (n, r) {
              n.exports = function (s) {
                return typeof s == "object"
                  ? s !== null
                  : typeof s == "function";
              };
            },
            "./node_modules/core-js/internals/is-pure.js": function (n, r) {
              n.exports = !1;
            },
            "./node_modules/core-js/internals/iterators-core.js": function (
              n,
              r,
              s,
            ) {
              var i = s(
                  "./node_modules/core-js/internals/object-get-prototype-of.js",
                ),
                o = s("./node_modules/core-js/internals/hide.js"),
                l = s("./node_modules/core-js/internals/has.js"),
                a = s("./node_modules/core-js/internals/well-known-symbol.js"),
                c = s("./node_modules/core-js/internals/is-pure.js"),
                u = a("iterator"),
                d = !1,
                h = function () {
                  return this;
                },
                p,
                y,
                b;
              [].keys &&
                ((b = [].keys()),
                "next" in b
                  ? ((y = i(i(b))), y !== Object.prototype && (p = y))
                  : (d = !0)),
                p == null && (p = {}),
                !c && !l(p, u) && o(p, u, h),
                (n.exports = {
                  IteratorPrototype: p,
                  BUGGY_SAFARI_ITERATORS: d,
                });
            },
            "./node_modules/core-js/internals/iterators.js": function (n, r) {
              n.exports = {};
            },
            "./node_modules/core-js/internals/native-symbol.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/fails.js");
              n.exports =
                !!Object.getOwnPropertySymbols &&
                !i(function () {
                  return !String(Symbol());
                });
            },
            "./node_modules/core-js/internals/native-weak-map.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/global.js"),
                o = s("./node_modules/core-js/internals/function-to-string.js"),
                l = i.WeakMap;
              n.exports =
                typeof l == "function" && /native code/.test(o.call(l));
            },
            "./node_modules/core-js/internals/object-create.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/an-object.js"),
                o = s(
                  "./node_modules/core-js/internals/object-define-properties.js",
                ),
                l = s("./node_modules/core-js/internals/enum-bug-keys.js"),
                a = s("./node_modules/core-js/internals/hidden-keys.js"),
                c = s("./node_modules/core-js/internals/html.js"),
                u = s(
                  "./node_modules/core-js/internals/document-create-element.js",
                ),
                d = s("./node_modules/core-js/internals/shared-key.js"),
                h = d("IE_PROTO"),
                p = "prototype",
                y = function () {},
                b = function () {
                  var x = u("iframe"),
                    v = l.length,
                    E = "<",
                    R = "script",
                    f = ">",
                    g = "java" + R + ":",
                    m;
                  for (
                    x.style.display = "none",
                      c.appendChild(x),
                      x.src = String(g),
                      m = x.contentWindow.document,
                      m.open(),
                      m.write(
                        E + R + f + "document.F=Object" + E + "/" + R + f,
                      ),
                      m.close(),
                      b = m.F;
                    v--;

                  )
                    delete b[p][l[v]];
                  return b();
                };
              (n.exports =
                Object.create ||
                function (v, E) {
                  var R;
                  return (
                    v !== null
                      ? ((y[p] = i(v)),
                        (R = new y()),
                        (y[p] = null),
                        (R[h] = v))
                      : (R = b()),
                    E === void 0 ? R : o(R, E)
                  );
                }),
                (a[h] = !0);
            },
            "./node_modules/core-js/internals/object-define-properties.js":
              function (n, r, s) {
                var i = s("./node_modules/core-js/internals/descriptors.js"),
                  o = s(
                    "./node_modules/core-js/internals/object-define-property.js",
                  ),
                  l = s("./node_modules/core-js/internals/an-object.js"),
                  a = s("./node_modules/core-js/internals/object-keys.js");
                n.exports = i
                  ? Object.defineProperties
                  : function (u, d) {
                      l(u);
                      for (var h = a(d), p = h.length, y = 0, b; p > y; )
                        o.f(u, (b = h[y++]), d[b]);
                      return u;
                    };
              },
            "./node_modules/core-js/internals/object-define-property.js":
              function (n, r, s) {
                var i = s("./node_modules/core-js/internals/descriptors.js"),
                  o = s("./node_modules/core-js/internals/ie8-dom-define.js"),
                  l = s("./node_modules/core-js/internals/an-object.js"),
                  a = s("./node_modules/core-js/internals/to-primitive.js"),
                  c = Object.defineProperty;
                r.f = i
                  ? c
                  : function (d, h, p) {
                      if ((l(d), (h = a(h, !0)), l(p), o))
                        try {
                          return c(d, h, p);
                        } catch {}
                      if ("get" in p || "set" in p)
                        throw TypeError("Accessors not supported");
                      return "value" in p && (d[h] = p.value), d;
                    };
              },
            "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
              function (n, r, s) {
                var i = s("./node_modules/core-js/internals/descriptors.js"),
                  o = s(
                    "./node_modules/core-js/internals/object-property-is-enumerable.js",
                  ),
                  l = s(
                    "./node_modules/core-js/internals/create-property-descriptor.js",
                  ),
                  a = s(
                    "./node_modules/core-js/internals/to-indexed-object.js",
                  ),
                  c = s("./node_modules/core-js/internals/to-primitive.js"),
                  u = s("./node_modules/core-js/internals/has.js"),
                  d = s("./node_modules/core-js/internals/ie8-dom-define.js"),
                  h = Object.getOwnPropertyDescriptor;
                r.f = i
                  ? h
                  : function (y, b) {
                      if (((y = a(y)), (b = c(b, !0)), d))
                        try {
                          return h(y, b);
                        } catch {}
                      if (u(y, b)) return l(!o.f.call(y, b), y[b]);
                    };
              },
            "./node_modules/core-js/internals/object-get-own-property-names.js":
              function (n, r, s) {
                var i = s(
                    "./node_modules/core-js/internals/object-keys-internal.js",
                  ),
                  o = s("./node_modules/core-js/internals/enum-bug-keys.js"),
                  l = o.concat("length", "prototype");
                r.f =
                  Object.getOwnPropertyNames ||
                  function (c) {
                    return i(c, l);
                  };
              },
            "./node_modules/core-js/internals/object-get-own-property-symbols.js":
              function (n, r) {
                r.f = Object.getOwnPropertySymbols;
              },
            "./node_modules/core-js/internals/object-get-prototype-of.js":
              function (n, r, s) {
                var i = s("./node_modules/core-js/internals/has.js"),
                  o = s("./node_modules/core-js/internals/to-object.js"),
                  l = s("./node_modules/core-js/internals/shared-key.js"),
                  a = s(
                    "./node_modules/core-js/internals/correct-prototype-getter.js",
                  ),
                  c = l("IE_PROTO"),
                  u = Object.prototype;
                n.exports = a
                  ? Object.getPrototypeOf
                  : function (d) {
                      return (
                        (d = o(d)),
                        i(d, c)
                          ? d[c]
                          : typeof d.constructor == "function" &&
                              d instanceof d.constructor
                            ? d.constructor.prototype
                            : d instanceof Object
                              ? u
                              : null
                      );
                    };
              },
            "./node_modules/core-js/internals/object-keys-internal.js":
              function (n, r, s) {
                var i = s("./node_modules/core-js/internals/has.js"),
                  o = s(
                    "./node_modules/core-js/internals/to-indexed-object.js",
                  ),
                  l = s("./node_modules/core-js/internals/array-includes.js"),
                  a = s("./node_modules/core-js/internals/hidden-keys.js"),
                  c = l(!1);
                n.exports = function (u, d) {
                  var h = o(u),
                    p = 0,
                    y = [],
                    b;
                  for (b in h) !i(a, b) && i(h, b) && y.push(b);
                  for (; d.length > p; )
                    i(h, (b = d[p++])) && (~c(y, b) || y.push(b));
                  return y;
                };
              },
            "./node_modules/core-js/internals/object-keys.js": function (
              n,
              r,
              s,
            ) {
              var i = s(
                  "./node_modules/core-js/internals/object-keys-internal.js",
                ),
                o = s("./node_modules/core-js/internals/enum-bug-keys.js");
              n.exports =
                Object.keys ||
                function (a) {
                  return i(a, o);
                };
            },
            "./node_modules/core-js/internals/object-property-is-enumerable.js":
              function (n, r, s) {
                var i = {}.propertyIsEnumerable,
                  o = Object.getOwnPropertyDescriptor,
                  l = o && !i.call({ 1: 2 }, 1);
                r.f = l
                  ? function (c) {
                      var u = o(this, c);
                      return !!u && u.enumerable;
                    }
                  : i;
              },
            "./node_modules/core-js/internals/object-set-prototype-of.js":
              function (n, r, s) {
                var i = s(
                  "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js",
                );
                n.exports =
                  Object.setPrototypeOf ||
                  ("__proto__" in {}
                    ? (function () {
                        var o = !1,
                          l = {},
                          a;
                        try {
                          (a = Object.getOwnPropertyDescriptor(
                            Object.prototype,
                            "__proto__",
                          ).set),
                            a.call(l, []),
                            (o = l instanceof Array);
                        } catch {}
                        return function (u, d) {
                          return (
                            i(u, d), o ? a.call(u, d) : (u.__proto__ = d), u
                          );
                        };
                      })()
                    : void 0);
              },
            "./node_modules/core-js/internals/own-keys.js": function (n, r, s) {
              var i = s("./node_modules/core-js/internals/global.js"),
                o = s(
                  "./node_modules/core-js/internals/object-get-own-property-names.js",
                ),
                l = s(
                  "./node_modules/core-js/internals/object-get-own-property-symbols.js",
                ),
                a = s("./node_modules/core-js/internals/an-object.js"),
                c = i.Reflect;
              n.exports =
                (c && c.ownKeys) ||
                function (d) {
                  var h = o.f(a(d)),
                    p = l.f;
                  return p ? h.concat(p(d)) : h;
                };
            },
            "./node_modules/core-js/internals/path.js": function (n, r, s) {
              n.exports = s("./node_modules/core-js/internals/global.js");
            },
            "./node_modules/core-js/internals/redefine.js": function (n, r, s) {
              var i = s("./node_modules/core-js/internals/global.js"),
                o = s("./node_modules/core-js/internals/shared.js"),
                l = s("./node_modules/core-js/internals/hide.js"),
                a = s("./node_modules/core-js/internals/has.js"),
                c = s("./node_modules/core-js/internals/set-global.js"),
                u = s("./node_modules/core-js/internals/function-to-string.js"),
                d = s("./node_modules/core-js/internals/internal-state.js"),
                h = d.get,
                p = d.enforce,
                y = String(u).split("toString");
              o("inspectSource", function (b) {
                return u.call(b);
              }),
                (n.exports = function (b, x, v, E) {
                  var R = E ? !!E.unsafe : !1,
                    f = E ? !!E.enumerable : !1,
                    g = E ? !!E.noTargetGet : !1;
                  if (
                    (typeof v == "function" &&
                      (typeof x == "string" && !a(v, "name") && l(v, "name", x),
                      (p(v).source = y.join(typeof x == "string" ? x : ""))),
                    b === i)
                  ) {
                    f ? (b[x] = v) : c(x, v);
                    return;
                  } else R ? !g && b[x] && (f = !0) : delete b[x];
                  f ? (b[x] = v) : l(b, x, v);
                })(Function.prototype, "toString", function () {
                  return (
                    (typeof this == "function" && h(this).source) ||
                    u.call(this)
                  );
                });
            },
            "./node_modules/core-js/internals/require-object-coercible.js":
              function (n, r) {
                n.exports = function (s) {
                  if (s == null) throw TypeError("Can't call method on " + s);
                  return s;
                };
              },
            "./node_modules/core-js/internals/set-global.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/global.js"),
                o = s("./node_modules/core-js/internals/hide.js");
              n.exports = function (l, a) {
                try {
                  o(i, l, a);
                } catch {
                  i[l] = a;
                }
                return a;
              };
            },
            "./node_modules/core-js/internals/set-to-string-tag.js": function (
              n,
              r,
              s,
            ) {
              var i = s(
                  "./node_modules/core-js/internals/object-define-property.js",
                ).f,
                o = s("./node_modules/core-js/internals/has.js"),
                l = s("./node_modules/core-js/internals/well-known-symbol.js"),
                a = l("toStringTag");
              n.exports = function (c, u, d) {
                c &&
                  !o((c = d ? c : c.prototype), a) &&
                  i(c, a, { configurable: !0, value: u });
              };
            },
            "./node_modules/core-js/internals/shared-key.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/shared.js"),
                o = s("./node_modules/core-js/internals/uid.js"),
                l = i("keys");
              n.exports = function (a) {
                return l[a] || (l[a] = o(a));
              };
            },
            "./node_modules/core-js/internals/shared.js": function (n, r, s) {
              var i = s("./node_modules/core-js/internals/global.js"),
                o = s("./node_modules/core-js/internals/set-global.js"),
                l = s("./node_modules/core-js/internals/is-pure.js"),
                a = "__core-js_shared__",
                c = i[a] || o(a, {});
              (n.exports = function (u, d) {
                return c[u] || (c[u] = d !== void 0 ? d : {});
              })("versions", []).push({
                version: "3.1.3",
                mode: l ? "pure" : "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
              });
            },
            "./node_modules/core-js/internals/string-at.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/to-integer.js"),
                o = s(
                  "./node_modules/core-js/internals/require-object-coercible.js",
                );
              n.exports = function (l, a, c) {
                var u = String(o(l)),
                  d = i(a),
                  h = u.length,
                  p,
                  y;
                return d < 0 || d >= h
                  ? c
                    ? ""
                    : void 0
                  : ((p = u.charCodeAt(d)),
                    p < 55296 ||
                    p > 56319 ||
                    d + 1 === h ||
                    (y = u.charCodeAt(d + 1)) < 56320 ||
                    y > 57343
                      ? c
                        ? u.charAt(d)
                        : p
                      : c
                        ? u.slice(d, d + 2)
                        : ((p - 55296) << 10) + (y - 56320) + 65536);
              };
            },
            "./node_modules/core-js/internals/to-absolute-index.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/to-integer.js"),
                o = Math.max,
                l = Math.min;
              n.exports = function (a, c) {
                var u = i(a);
                return u < 0 ? o(u + c, 0) : l(u, c);
              };
            },
            "./node_modules/core-js/internals/to-indexed-object.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/indexed-object.js"),
                o = s(
                  "./node_modules/core-js/internals/require-object-coercible.js",
                );
              n.exports = function (l) {
                return i(o(l));
              };
            },
            "./node_modules/core-js/internals/to-integer.js": function (n, r) {
              var s = Math.ceil,
                i = Math.floor;
              n.exports = function (o) {
                return isNaN((o = +o)) ? 0 : (o > 0 ? i : s)(o);
              };
            },
            "./node_modules/core-js/internals/to-length.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/to-integer.js"),
                o = Math.min;
              n.exports = function (l) {
                return l > 0 ? o(i(l), 9007199254740991) : 0;
              };
            },
            "./node_modules/core-js/internals/to-object.js": function (
              n,
              r,
              s,
            ) {
              var i = s(
                "./node_modules/core-js/internals/require-object-coercible.js",
              );
              n.exports = function (o) {
                return Object(i(o));
              };
            },
            "./node_modules/core-js/internals/to-primitive.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/is-object.js");
              n.exports = function (o, l) {
                if (!i(o)) return o;
                var a, c;
                if (
                  (l &&
                    typeof (a = o.toString) == "function" &&
                    !i((c = a.call(o)))) ||
                  (typeof (a = o.valueOf) == "function" &&
                    !i((c = a.call(o)))) ||
                  (!l &&
                    typeof (a = o.toString) == "function" &&
                    !i((c = a.call(o))))
                )
                  return c;
                throw TypeError("Can't convert object to primitive value");
              };
            },
            "./node_modules/core-js/internals/uid.js": function (n, r) {
              var s = 0,
                i = Math.random();
              n.exports = function (o) {
                return "Symbol(".concat(
                  o === void 0 ? "" : o,
                  ")_",
                  (++s + i).toString(36),
                );
              };
            },
            "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
              function (n, r, s) {
                var i = s("./node_modules/core-js/internals/is-object.js"),
                  o = s("./node_modules/core-js/internals/an-object.js");
                n.exports = function (l, a) {
                  if ((o(l), !i(a) && a !== null))
                    throw TypeError(
                      "Can't set " + String(a) + " as a prototype",
                    );
                };
              },
            "./node_modules/core-js/internals/well-known-symbol.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/global.js"),
                o = s("./node_modules/core-js/internals/shared.js"),
                l = s("./node_modules/core-js/internals/uid.js"),
                a = s("./node_modules/core-js/internals/native-symbol.js"),
                c = i.Symbol,
                u = o("wks");
              n.exports = function (d) {
                return (
                  u[d] || (u[d] = (a && c[d]) || (a ? c : l)("Symbol." + d))
                );
              };
            },
            "./node_modules/core-js/modules/es.array.from.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/export.js"),
                o = s("./node_modules/core-js/internals/array-from.js"),
                l = s(
                  "./node_modules/core-js/internals/check-correctness-of-iteration.js",
                ),
                a = !l(function (c) {
                  Array.from(c);
                });
              i({ target: "Array", stat: !0, forced: a }, { from: o });
            },
            "./node_modules/core-js/modules/es.string.iterator.js": function (
              n,
              r,
              s,
            ) {
              var i = s("./node_modules/core-js/internals/string-at.js"),
                o = s("./node_modules/core-js/internals/internal-state.js"),
                l = s("./node_modules/core-js/internals/define-iterator.js"),
                a = "String Iterator",
                c = o.set,
                u = o.getterFor(a);
              l(
                String,
                "String",
                function (d) {
                  c(this, { type: a, string: String(d), index: 0 });
                },
                function () {
                  var h = u(this),
                    p = h.string,
                    y = h.index,
                    b;
                  return y >= p.length
                    ? { value: void 0, done: !0 }
                    : ((b = i(p, y, !0)),
                      (h.index += b.length),
                      { value: b, done: !1 });
                },
              );
            },
            "./node_modules/webpack/buildin/global.js": function (n, r) {
              var s;
              s = (function () {
                return this;
              })();
              try {
                s = s || Function("return this")() || (0, eval)("this");
              } catch {
                typeof window == "object" && (s = window);
              }
              n.exports = s;
            },
            "./src/default-attrs.json": function (n) {
              n.exports = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              };
            },
            "./src/icon.js": function (n, r, s) {
              Object.defineProperty(r, "__esModule", { value: !0 });
              var i =
                  Object.assign ||
                  function (b) {
                    for (var x = 1; x < arguments.length; x++) {
                      var v = arguments[x];
                      for (var E in v)
                        Object.prototype.hasOwnProperty.call(v, E) &&
                          (b[E] = v[E]);
                    }
                    return b;
                  },
                o = (function () {
                  function b(x, v) {
                    for (var E = 0; E < v.length; E++) {
                      var R = v[E];
                      (R.enumerable = R.enumerable || !1),
                        (R.configurable = !0),
                        "value" in R && (R.writable = !0),
                        Object.defineProperty(x, R.key, R);
                    }
                  }
                  return function (x, v, E) {
                    return v && b(x.prototype, v), E && b(x, E), x;
                  };
                })(),
                l = s("./node_modules/classnames/dedupe.js"),
                a = d(l),
                c = s("./src/default-attrs.json"),
                u = d(c);
              function d(b) {
                return b && b.__esModule ? b : { default: b };
              }
              function h(b, x) {
                if (!(b instanceof x))
                  throw new TypeError("Cannot call a class as a function");
              }
              var p = (function () {
                function b(x, v) {
                  var E =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : [];
                  h(this, b),
                    (this.name = x),
                    (this.contents = v),
                    (this.tags = E),
                    (this.attrs = i({}, u.default, {
                      class: "feather feather-" + x,
                    }));
                }
                return (
                  o(b, [
                    {
                      key: "toSvg",
                      value: function () {
                        var v =
                            arguments.length > 0 && arguments[0] !== void 0
                              ? arguments[0]
                              : {},
                          E = i({}, this.attrs, v, {
                            class: (0, a.default)(this.attrs.class, v.class),
                          });
                        return "<svg " + y(E) + ">" + this.contents + "</svg>";
                      },
                    },
                    {
                      key: "toString",
                      value: function () {
                        return this.contents;
                      },
                    },
                  ]),
                  b
                );
              })();
              function y(b) {
                return Object.keys(b)
                  .map(function (x) {
                    return x + '="' + b[x] + '"';
                  })
                  .join(" ");
              }
              r.default = p;
            },
            "./src/icons.js": function (n, r, s) {
              Object.defineProperty(r, "__esModule", { value: !0 });
              var i = s("./src/icon.js"),
                o = d(i),
                l = s("./dist/icons.json"),
                a = d(l),
                c = s("./src/tags.json"),
                u = d(c);
              function d(h) {
                return h && h.__esModule ? h : { default: h };
              }
              r.default = Object.keys(a.default)
                .map(function (h) {
                  return new o.default(h, a.default[h], u.default[h]);
                })
                .reduce(function (h, p) {
                  return (h[p.name] = p), h;
                }, {});
            },
            "./src/index.js": function (n, r, s) {
              var i = s("./src/icons.js"),
                o = d(i),
                l = s("./src/to-svg.js"),
                a = d(l),
                c = s("./src/replace.js"),
                u = d(c);
              function d(h) {
                return h && h.__esModule ? h : { default: h };
              }
              n.exports = {
                icons: o.default,
                toSvg: a.default,
                replace: u.default,
              };
            },
            "./src/replace.js": function (n, r, s) {
              Object.defineProperty(r, "__esModule", { value: !0 });
              var i =
                  Object.assign ||
                  function (y) {
                    for (var b = 1; b < arguments.length; b++) {
                      var x = arguments[b];
                      for (var v in x)
                        Object.prototype.hasOwnProperty.call(x, v) &&
                          (y[v] = x[v]);
                    }
                    return y;
                  },
                o = s("./node_modules/classnames/dedupe.js"),
                l = u(o),
                a = s("./src/icons.js"),
                c = u(a);
              function u(y) {
                return y && y.__esModule ? y : { default: y };
              }
              function d() {
                var y =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
                if (typeof document > "u")
                  throw new Error(
                    "`feather.replace()` only works in a browser environment.",
                  );
                var b = document.querySelectorAll("[data-feather]");
                Array.from(b).forEach(function (x) {
                  return h(x, y);
                });
              }
              function h(y) {
                var b =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  x = p(y),
                  v = x["data-feather"];
                if ((delete x["data-feather"], c.default[v] === void 0)) {
                  console.warn("feather: '" + v + "' is not a valid icon");
                  return;
                }
                var E = c.default[v].toSvg(
                    i({}, b, x, { class: (0, l.default)(b.class, x.class) }),
                  ),
                  R = new DOMParser().parseFromString(E, "image/svg+xml"),
                  f = R.querySelector("svg");
                y.parentNode.replaceChild(f, y);
              }
              function p(y) {
                return Array.from(y.attributes).reduce(function (b, x) {
                  return (b[x.name] = x.value), b;
                }, {});
              }
              r.default = d;
            },
            "./src/tags.json": function (n) {
              n.exports = {
                activity: ["pulse", "health", "action", "motion"],
                airplay: ["stream", "cast", "mirroring"],
                "alert-circle": ["warning", "alert", "danger"],
                "alert-octagon": ["warning", "alert", "danger"],
                "alert-triangle": ["warning", "alert", "danger"],
                "align-center": ["text alignment", "center"],
                "align-justify": ["text alignment", "justified"],
                "align-left": ["text alignment", "left"],
                "align-right": ["text alignment", "right"],
                anchor: [],
                archive: ["index", "box"],
                "at-sign": ["mention", "at", "email", "message"],
                award: ["achievement", "badge"],
                aperture: ["camera", "photo"],
                "bar-chart": ["statistics", "diagram", "graph"],
                "bar-chart-2": ["statistics", "diagram", "graph"],
                battery: ["power", "electricity"],
                "battery-charging": ["power", "electricity"],
                bell: ["alarm", "notification", "sound"],
                "bell-off": ["alarm", "notification", "silent"],
                bluetooth: ["wireless"],
                "book-open": ["read", "library"],
                book: ["read", "dictionary", "booklet", "magazine", "library"],
                bookmark: ["read", "clip", "marker", "tag"],
                box: ["cube"],
                briefcase: ["work", "bag", "baggage", "folder"],
                calendar: ["date"],
                camera: ["photo"],
                cast: ["chromecast", "airplay"],
                "chevron-down": ["expand"],
                "chevron-up": ["collapse"],
                circle: ["off", "zero", "record"],
                clipboard: ["copy"],
                clock: ["time", "watch", "alarm"],
                "cloud-drizzle": ["weather", "shower"],
                "cloud-lightning": ["weather", "bolt"],
                "cloud-rain": ["weather"],
                "cloud-snow": ["weather", "blizzard"],
                cloud: ["weather"],
                codepen: ["logo"],
                codesandbox: ["logo"],
                code: ["source", "programming"],
                coffee: [
                  "drink",
                  "cup",
                  "mug",
                  "tea",
                  "cafe",
                  "hot",
                  "beverage",
                ],
                columns: ["layout"],
                command: ["keyboard", "cmd", "terminal", "prompt"],
                compass: ["navigation", "safari", "travel", "direction"],
                copy: ["clone", "duplicate"],
                "corner-down-left": ["arrow", "return"],
                "corner-down-right": ["arrow"],
                "corner-left-down": ["arrow"],
                "corner-left-up": ["arrow"],
                "corner-right-down": ["arrow"],
                "corner-right-up": ["arrow"],
                "corner-up-left": ["arrow"],
                "corner-up-right": ["arrow"],
                cpu: ["processor", "technology"],
                "credit-card": ["purchase", "payment", "cc"],
                crop: ["photo", "image"],
                crosshair: ["aim", "target"],
                database: ["storage", "memory"],
                delete: ["remove"],
                disc: ["album", "cd", "dvd", "music"],
                "dollar-sign": ["currency", "money", "payment"],
                droplet: ["water"],
                edit: ["pencil", "change"],
                "edit-2": ["pencil", "change"],
                "edit-3": ["pencil", "change"],
                eye: ["view", "watch"],
                "eye-off": ["view", "watch", "hide", "hidden"],
                "external-link": ["outbound"],
                facebook: ["logo", "social"],
                "fast-forward": ["music"],
                figma: ["logo", "design", "tool"],
                "file-minus": ["delete", "remove", "erase"],
                "file-plus": ["add", "create", "new"],
                "file-text": ["data", "txt", "pdf"],
                film: ["movie", "video"],
                filter: ["funnel", "hopper"],
                flag: ["report"],
                "folder-minus": ["directory"],
                "folder-plus": ["directory"],
                folder: ["directory"],
                framer: ["logo", "design", "tool"],
                frown: ["emoji", "face", "bad", "sad", "emotion"],
                gift: ["present", "box", "birthday", "party"],
                "git-branch": ["code", "version control"],
                "git-commit": ["code", "version control"],
                "git-merge": ["code", "version control"],
                "git-pull-request": ["code", "version control"],
                github: ["logo", "version control"],
                gitlab: ["logo", "version control"],
                globe: ["world", "browser", "language", "translate"],
                "hard-drive": ["computer", "server", "memory", "data"],
                hash: ["hashtag", "number", "pound"],
                headphones: ["music", "audio", "sound"],
                heart: ["like", "love", "emotion"],
                "help-circle": ["question mark"],
                hexagon: ["shape", "node.js", "logo"],
                home: ["house", "living"],
                image: ["picture"],
                inbox: ["email"],
                instagram: ["logo", "camera"],
                key: ["password", "login", "authentication", "secure"],
                layers: ["stack"],
                layout: ["window", "webpage"],
                "life-buoy": ["help", "life ring", "support"],
                link: ["chain", "url"],
                "link-2": ["chain", "url"],
                linkedin: ["logo", "social media"],
                list: ["options"],
                lock: ["security", "password", "secure"],
                "log-in": ["sign in", "arrow", "enter"],
                "log-out": ["sign out", "arrow", "exit"],
                mail: ["email", "message"],
                "map-pin": ["location", "navigation", "travel", "marker"],
                map: ["location", "navigation", "travel"],
                maximize: ["fullscreen"],
                "maximize-2": ["fullscreen", "arrows", "expand"],
                meh: ["emoji", "face", "neutral", "emotion"],
                menu: ["bars", "navigation", "hamburger"],
                "message-circle": ["comment", "chat"],
                "message-square": ["comment", "chat"],
                "mic-off": ["record", "sound", "mute"],
                mic: ["record", "sound", "listen"],
                minimize: ["exit fullscreen", "close"],
                "minimize-2": ["exit fullscreen", "arrows", "close"],
                minus: ["subtract"],
                monitor: ["tv", "screen", "display"],
                moon: ["dark", "night"],
                "more-horizontal": ["ellipsis"],
                "more-vertical": ["ellipsis"],
                "mouse-pointer": ["arrow", "cursor"],
                move: ["arrows"],
                music: ["note"],
                navigation: ["location", "travel"],
                "navigation-2": ["location", "travel"],
                octagon: ["stop"],
                package: ["box", "container"],
                paperclip: ["attachment"],
                pause: ["music", "stop"],
                "pause-circle": ["music", "audio", "stop"],
                "pen-tool": ["vector", "drawing"],
                percent: ["discount"],
                "phone-call": ["ring"],
                "phone-forwarded": ["call"],
                "phone-incoming": ["call"],
                "phone-missed": ["call"],
                "phone-off": ["call", "mute"],
                "phone-outgoing": ["call"],
                phone: ["call"],
                play: ["music", "start"],
                "pie-chart": ["statistics", "diagram"],
                "play-circle": ["music", "start"],
                plus: ["add", "new"],
                "plus-circle": ["add", "new"],
                "plus-square": ["add", "new"],
                pocket: ["logo", "save"],
                power: ["on", "off"],
                printer: ["fax", "office", "device"],
                radio: ["signal"],
                "refresh-cw": ["synchronise", "arrows"],
                "refresh-ccw": ["arrows"],
                repeat: ["loop", "arrows"],
                rewind: ["music"],
                "rotate-ccw": ["arrow"],
                "rotate-cw": ["arrow"],
                rss: ["feed", "subscribe"],
                save: ["floppy disk"],
                scissors: ["cut"],
                search: ["find", "magnifier", "magnifying glass"],
                send: [
                  "message",
                  "mail",
                  "email",
                  "paper airplane",
                  "paper aeroplane",
                ],
                settings: ["cog", "edit", "gear", "preferences"],
                "share-2": ["network", "connections"],
                shield: ["security", "secure"],
                "shield-off": ["security", "insecure"],
                "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
                "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
                shuffle: ["music"],
                "skip-back": ["music"],
                "skip-forward": ["music"],
                slack: ["logo"],
                slash: ["ban", "no"],
                sliders: ["settings", "controls"],
                smartphone: ["cellphone", "device"],
                smile: ["emoji", "face", "happy", "good", "emotion"],
                speaker: ["audio", "music"],
                star: ["bookmark", "favorite", "like"],
                "stop-circle": ["media", "music"],
                sun: ["brightness", "weather", "light"],
                sunrise: ["weather", "time", "morning", "day"],
                sunset: ["weather", "time", "evening", "night"],
                tablet: ["device"],
                tag: ["label"],
                target: ["logo", "bullseye"],
                terminal: ["code", "command line", "prompt"],
                thermometer: [
                  "temperature",
                  "celsius",
                  "fahrenheit",
                  "weather",
                ],
                "thumbs-down": ["dislike", "bad", "emotion"],
                "thumbs-up": ["like", "good", "emotion"],
                "toggle-left": ["on", "off", "switch"],
                "toggle-right": ["on", "off", "switch"],
                tool: ["settings", "spanner"],
                trash: ["garbage", "delete", "remove", "bin"],
                "trash-2": ["garbage", "delete", "remove", "bin"],
                triangle: ["delta"],
                truck: ["delivery", "van", "shipping", "transport", "lorry"],
                tv: ["television", "stream"],
                twitch: ["logo"],
                twitter: ["logo", "social"],
                type: ["text"],
                umbrella: ["rain", "weather"],
                unlock: ["security"],
                "user-check": ["followed", "subscribed"],
                "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
                "user-plus": ["new", "add", "create", "follow", "subscribe"],
                "user-x": [
                  "delete",
                  "remove",
                  "unfollow",
                  "unsubscribe",
                  "unavailable",
                ],
                user: ["person", "account"],
                users: ["group"],
                "video-off": ["camera", "movie", "film"],
                video: ["camera", "movie", "film"],
                voicemail: ["phone"],
                volume: ["music", "sound", "mute"],
                "volume-1": ["music", "sound"],
                "volume-2": ["music", "sound"],
                "volume-x": ["music", "sound", "mute"],
                watch: ["clock", "time"],
                "wifi-off": ["disabled"],
                wifi: ["connection", "signal", "wireless"],
                wind: ["weather", "air"],
                "x-circle": [
                  "cancel",
                  "close",
                  "delete",
                  "remove",
                  "times",
                  "clear",
                ],
                "x-octagon": [
                  "delete",
                  "stop",
                  "alert",
                  "warning",
                  "times",
                  "clear",
                ],
                "x-square": [
                  "cancel",
                  "close",
                  "delete",
                  "remove",
                  "times",
                  "clear",
                ],
                x: ["cancel", "close", "delete", "remove", "times", "clear"],
                youtube: ["logo", "video", "play"],
                "zap-off": ["flash", "camera", "lightning"],
                zap: ["flash", "camera", "lightning"],
                "zoom-in": ["magnifying glass"],
                "zoom-out": ["magnifying glass"],
              };
            },
            "./src/to-svg.js": function (n, r, s) {
              Object.defineProperty(r, "__esModule", { value: !0 });
              var i = s("./src/icons.js"),
                o = l(i);
              function l(c) {
                return c && c.__esModule ? c : { default: c };
              }
              function a(c) {
                var u =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
                if (
                  (console.warn(
                    "feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.",
                  ),
                  !c)
                )
                  throw new Error(
                    "The required `key` (icon name) parameter is missing.",
                  );
                if (!o.default[c])
                  throw new Error(
                    "No icon matching '" +
                      c +
                      "'. See the complete list of icons at https://feathericons.com",
                  );
                return o.default[c].toSvg(u);
              }
              r.default = a;
            },
            0: function (n, r, s) {
              s("./node_modules/core-js/es/array/from.js"),
                (n.exports = s("./src/index.js"));
            },
          });
        });
      })(ci)),
    ci.exports
  );
}
var by = yy();
const ql = my(by),
  Fu = Object.keys(ql.icons),
  wy = {
    props: {
      name: {
        type: String,
        required: !0,
        validator(t) {
          const e = Fu.includes(t);
          return (
            e ||
              (console.groupCollapsed(
                "[frappe-ui] name property for feather-icon must be one of ",
              ),
              console.dir(Fu),
              console.groupEnd()),
            e
          );
        },
      },
      color: { type: String, default: null },
      strokeWidth: { type: Number, default: 1.5 },
    },
    render() {
      let t = ql.icons[this.name];
      return (
        t || (t = ql.icons.circle),
        Qa(
          "svg",
          Ja(
            t.attrs,
            {
              fill: "none",
              stroke: "currentColor",
              color: this.color,
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": this.strokeWidth,
              width: null,
              height: null,
              class: [t.attrs.class, "shrink-0"],
              innerHTML: t.contents,
            },
            this.$attrs,
          ),
        )
      );
    },
  },
  vy = { name: "LoadingIndicator" },
  xy = {
    class: "max-w-xs animate-spin",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
  };
function ky(t, e, n, r, s, i) {
  return (
    at(),
    yn(
      "svg",
      xy,
      e[0] ||
        (e[0] = [
          Ri(
            "circle",
            {
              class: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              "stroke-width": "4",
            },
            null,
            -1,
          ),
          Ri(
            "path",
            {
              class: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
            },
            null,
            -1,
          ),
        ]),
    )
  );
}
const _y = Za(vy, [["render", ky]]),
  Sy = [
    "primary",
    "secondary",
    "danger",
    "success",
    "warning",
    "white",
    "minimal",
  ],
  Cy = {
    name: "Button",
    components: { FeatherIcon: wy, LoadingIndicator: _y },
    props: {
      label: { type: String, default: null },
      appearance: {
        type: String,
        default: "secondary",
        validator: (t) => Sy.includes(t),
      },
      disabled: { type: Boolean, default: !1 },
      active: { type: Boolean, default: !1 },
      iconLeft: { type: String, default: null },
      iconRight: { type: String, default: null },
      icon: { type: String, default: null },
      loading: { type: Boolean, default: !1 },
      loadingText: { type: String, default: null },
      route: {},
      link: { type: String, default: null },
    },
    computed: {
      buttonClasses() {
        let t = {
          primary:
            "bg-blue-500 hover:bg-blue-600 border-transparent text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
          secondary:
            "bg-gray-100 hover:bg-gray-200 border-transparent text-gray-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",
          danger:
            "bg-red-500 hover:bg-red-400 border-transparent text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500",
          success:
            "bg-green-500 hover:bg-green-400 border-transparent text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500",
          warning:
            "bg-yellow-500 hover:bg-yellow-400 border-transparent text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500",
          white:
            "bg-white text-gray-900 border-gray-200 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400",
          minimal: `active:bg-gray-200 border-transparent focus:bg-gray-200 text-gray-900 ${this.active ? "bg-gray-200" : "bg-transparent hover:bg-gray-200"}`,
        };
        return [
          "inline-flex items-center justify-center text-base leading-5 rounded-md border transition-colors focus:outline-none",
          this.isIconButton ? "p-1.5" : "px-3 py-1",
          this.isDisabled
            ? "opacity-50 cursor-not-allowed pointer-events-none"
            : "",
          t[this.appearance],
        ];
      },
      isDisabled() {
        return this.disabled || this.loading;
      },
      ariaLabel() {
        return this.isIconButton ? this.label : null;
      },
      isIconButton() {
        return this.icon || this.$slots.icon;
      },
    },
    methods: {
      handleClick() {
        this.route &&
          this.$router &&
          this.route &&
          this.$router.push(this.route),
          this.link && window.open(this.link, "_blank");
      },
    },
  },
  Ey = ["disabled", "aria-label"];
function Ay(t, e, n, r, s, i) {
  const o = Nl("LoadingIndicator"),
    l = Nl("FeatherIcon");
  return (
    at(),
    yn(
      "button",
      Ja(t.$attrs, {
        class: i.buttonClasses,
        onClick:
          e[0] || (e[0] = (...a) => i.handleClick && i.handleClick(...a)),
        disabled: i.isDisabled,
        "aria-label": i.ariaLabel,
      }),
      [
        n.loading
          ? (at(),
            Kn(
              o,
              {
                key: 0,
                class: Ar([
                  "h-3 w-3",
                  {
                    "mr-2 -ml-1": !i.isIconButton,
                    "m-0.5": i.isIconButton,
                    "text-white": n.appearance == "primary",
                    "text-gray-600": n.appearance == "secondary",
                    "text-red-200": n.appearance == "danger",
                    "text-green-200": n.appearance == "success",
                    "text-yellow-200": n.appearance == "warning",
                  },
                ]),
              },
              null,
              8,
              ["class"],
            ))
          : n.iconLeft || t.$slots["icon-left"]
            ? (at(),
              yn(
                et,
                { key: 1 },
                [
                  n.iconLeft
                    ? (at(),
                      Kn(
                        l,
                        {
                          key: 0,
                          name: n.iconLeft,
                          class: "mr-1.5 h-4 w-4",
                          "aria-hidden": "true",
                        },
                        null,
                        8,
                        ["name"],
                      ))
                    : t.$slots["icon-left"]
                      ? Vs(t.$slots, "icon-left", { key: 1 })
                      : Fr("", !0),
                ],
                64,
              ))
            : Fr("", !0),
        n.loading && n.loadingText
          ? (at(), yn(et, { key: 2 }, [$l(Tl(n.loadingText), 1)], 64))
          : i.isIconButton && !n.loading
            ? (at(),
              yn(
                et,
                { key: 3 },
                [
                  n.icon
                    ? (at(),
                      Kn(
                        l,
                        {
                          key: 0,
                          name: n.icon,
                          class: "h-4 w-4",
                          "aria-label": n.label,
                        },
                        null,
                        8,
                        ["name", "aria-label"],
                      ))
                    : t.$slots.icon
                      ? Vs(t.$slots, "icon", { key: 1 })
                      : Fr("", !0),
                ],
                64,
              ))
            : (at(),
              yn(
                "span",
                { key: 4, class: Ar(i.isIconButton ? "sr-only" : "") },
                [Vs(t.$slots, "default", {}, () => [$l(Tl(n.label), 1)])],
                2,
              )),
        n.iconRight || t.$slots["icon-right"]
          ? (at(),
            yn(
              et,
              { key: 5 },
              [
                n.iconRight
                  ? (at(),
                    Kn(
                      l,
                      {
                        key: 0,
                        name: n.iconRight,
                        class: "ml-2 h-4 w-4",
                        "aria-hidden": "true",
                      },
                      null,
                      8,
                      ["name"],
                    ))
                  : t.$slots["icon-right"]
                    ? Vs(t.$slots, "icon-right", { key: 1 })
                    : Fr("", !0),
              ],
              64,
            ))
          : Fr("", !0),
      ],
      16,
      Ey,
    )
  );
}
const My = Za(Cy, [["render", Ay]]);
function qe(t) {
  this.content = t;
}
qe.prototype = {
  constructor: qe,
  find: function (t) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === t) return e;
    return -1;
  },
  get: function (t) {
    var e = this.find(t);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  update: function (t, e, n) {
    var r = n && n != t ? this.remove(n) : this,
      s = r.find(t),
      i = r.content.slice();
    return (
      s == -1 ? i.push(n || t, e) : ((i[s + 1] = e), n && (i[s] = n)), new qe(i)
    );
  },
  remove: function (t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new qe(n);
  },
  addToStart: function (t, e) {
    return new qe([t, e].concat(this.remove(t).content));
  },
  addToEnd: function (t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new qe(n);
  },
  addBefore: function (t, e, n) {
    var r = this.remove(e),
      s = r.content.slice(),
      i = r.find(t);
    return s.splice(i == -1 ? s.length : i, 0, e, n), new qe(s);
  },
  forEach: function (t) {
    for (var e = 0; e < this.content.length; e += 2)
      t(this.content[e], this.content[e + 1]);
  },
  prepend: function (t) {
    return (
      (t = qe.from(t)),
      t.size ? new qe(t.content.concat(this.subtract(t).content)) : this
    );
  },
  append: function (t) {
    return (
      (t = qe.from(t)),
      t.size ? new qe(this.subtract(t).content.concat(t.content)) : this
    );
  },
  subtract: function (t) {
    var e = this;
    t = qe.from(t);
    for (var n = 0; n < t.content.length; n += 2) e = e.remove(t.content[n]);
    return e;
  },
  toObject: function () {
    var t = {};
    return (
      this.forEach(function (e, n) {
        t[e] = n;
      }),
      t
    );
  },
  get size() {
    return this.content.length >> 1;
  },
};
qe.from = function (t) {
  if (t instanceof qe) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new qe(e);
};
function Th(t, e, n) {
  for (let r = 0; ; r++) {
    if (r == t.childCount || r == e.childCount)
      return t.childCount == e.childCount ? null : n;
    let s = t.child(r),
      i = e.child(r);
    if (s == i) {
      n += s.nodeSize;
      continue;
    }
    if (!s.sameMarkup(i)) return n;
    if (s.isText && s.text != i.text) {
      for (let o = 0; s.text[o] == i.text[o]; o++) n++;
      return n;
    }
    if (s.content.size || i.content.size) {
      let o = Th(s.content, i.content, n + 1);
      if (o != null) return o;
    }
    n += s.nodeSize;
  }
}
function Rh(t, e, n, r) {
  for (let s = t.childCount, i = e.childCount; ; ) {
    if (s == 0 || i == 0) return s == i ? null : { a: n, b: r };
    let o = t.child(--s),
      l = e.child(--i),
      a = o.nodeSize;
    if (o == l) {
      (n -= a), (r -= a);
      continue;
    }
    if (!o.sameMarkup(l)) return { a: n, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0,
        u = Math.min(o.text.length, l.text.length);
      for (
        ;
        c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1];

      )
        c++, n--, r--;
      return { a: n, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = Rh(o.content, l.content, n - 1, r - 1);
      if (c) return c;
    }
    (n -= a), (r -= a);
  }
}
class H {
  constructor(e, n) {
    if (((this.content = e), (this.size = n || 0), n == null))
      for (let r = 0; r < e.length; r++) this.size += e[r].nodeSize;
  }
  nodesBetween(e, n, r, s = 0, i) {
    for (let o = 0, l = 0; l < n; o++) {
      let a = this.content[o],
        c = l + a.nodeSize;
      if (c > e && r(a, s + l, i || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(
          Math.max(0, e - u),
          Math.min(a.content.size, n - u),
          r,
          s + u,
        );
      }
      l = c;
    }
  }
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  textBetween(e, n, r, s) {
    let i = "",
      o = !0;
    return (
      this.nodesBetween(
        e,
        n,
        (l, a) => {
          let c = l.isText
            ? l.text.slice(Math.max(e, a) - a, n - a)
            : l.isLeaf
              ? s
                ? typeof s == "function"
                  ? s(l)
                  : s
                : l.type.spec.leafText
                  ? l.type.spec.leafText(l)
                  : ""
              : "";
          l.isBlock &&
            ((l.isLeaf && c) || l.isTextblock) &&
            r &&
            (o ? (o = !1) : (i += r)),
            (i += c);
        },
        0,
      ),
      i
    );
  }
  append(e) {
    if (!e.size) return this;
    if (!this.size) return e;
    let n = this.lastChild,
      r = e.firstChild,
      s = this.content.slice(),
      i = 0;
    for (
      n.isText &&
      n.sameMarkup(r) &&
      ((s[s.length - 1] = n.withText(n.text + r.text)), (i = 1));
      i < e.content.length;
      i++
    )
      s.push(e.content[i]);
    return new H(s, this.size + e.size);
  }
  cut(e, n = this.size) {
    if (e == 0 && n == this.size) return this;
    let r = [],
      s = 0;
    if (n > e)
      for (let i = 0, o = 0; o < n; i++) {
        let l = this.content[i],
          a = o + l.nodeSize;
        a > e &&
          ((o < e || a > n) &&
            (l.isText
              ? (l = l.cut(Math.max(0, e - o), Math.min(l.text.length, n - o)))
              : (l = l.cut(
                  Math.max(0, e - o - 1),
                  Math.min(l.content.size, n - o - 1),
                ))),
          r.push(l),
          (s += l.nodeSize)),
          (o = a);
      }
    return new H(r, s);
  }
  cutByIndex(e, n) {
    return e == n
      ? H.empty
      : e == 0 && n == this.content.length
        ? this
        : new H(this.content.slice(e, n));
  }
  replaceChild(e, n) {
    let r = this.content[e];
    if (r == n) return this;
    let s = this.content.slice(),
      i = this.size + n.nodeSize - r.nodeSize;
    return (s[e] = n), new H(s, i);
  }
  addToStart(e) {
    return new H([e].concat(this.content), this.size + e.nodeSize);
  }
  addToEnd(e) {
    return new H(this.content.concat(e), this.size + e.nodeSize);
  }
  eq(e) {
    if (this.content.length != e.content.length) return !1;
    for (let n = 0; n < this.content.length; n++)
      if (!this.content[n].eq(e.content[n])) return !1;
    return !0;
  }
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  get childCount() {
    return this.content.length;
  }
  child(e) {
    let n = this.content[e];
    if (!n) throw new RangeError("Index " + e + " out of range for " + this);
    return n;
  }
  maybeChild(e) {
    return this.content[e] || null;
  }
  forEach(e) {
    for (let n = 0, r = 0; n < this.content.length; n++) {
      let s = this.content[n];
      e(s, r, n), (r += s.nodeSize);
    }
  }
  findDiffStart(e, n = 0) {
    return Th(this, e, n);
  }
  findDiffEnd(e, n = this.size, r = e.size) {
    return Rh(this, e, n, r);
  }
  findIndex(e, n = -1) {
    if (e == 0) return Ws(0, e);
    if (e == this.size) return Ws(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, s = 0; ; r++) {
      let i = this.child(r),
        o = s + i.nodeSize;
      if (o >= e) return o == e || n > 0 ? Ws(r + 1, o) : Ws(r, s);
      s = o;
    }
  }
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  toStringInner() {
    return this.content.join(", ");
  }
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  static fromJSON(e, n) {
    if (!n) return H.empty;
    if (!Array.isArray(n))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new H(n.map(e.nodeFromJSON));
  }
  static fromArray(e) {
    if (!e.length) return H.empty;
    let n,
      r = 0;
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      (r += i.nodeSize),
        s && i.isText && e[s - 1].sameMarkup(i)
          ? (n || (n = e.slice(0, s)),
            (n[n.length - 1] = i.withText(n[n.length - 1].text + i.text)))
          : n && n.push(i);
    }
    return new H(n || e, r);
  }
  static from(e) {
    if (!e) return H.empty;
    if (e instanceof H) return e;
    if (Array.isArray(e)) return this.fromArray(e);
    if (e.attrs) return new H([e], e.nodeSize);
    throw new RangeError(
      "Can not convert " +
        e +
        " to a Fragment" +
        (e.nodesBetween
          ? " (looks like multiple versions of prosemirror-model were loaded)"
          : ""),
    );
  }
}
H.empty = new H([], 0);
const rl = { index: 0, offset: 0 };
function Ws(t, e) {
  return (rl.index = t), (rl.offset = e), rl;
}
function ji(t, e) {
  if (t === e) return !0;
  if (!(t && typeof t == "object") || !(e && typeof e == "object")) return !1;
  let n = Array.isArray(t);
  if (Array.isArray(e) != n) return !1;
  if (n) {
    if (t.length != e.length) return !1;
    for (let r = 0; r < t.length; r++) if (!ji(t[r], e[r])) return !1;
  } else {
    for (let r in t) if (!(r in e) || !ji(t[r], e[r])) return !1;
    for (let r in e) if (!(r in t)) return !1;
  }
  return !0;
}
let Te = class Jl {
  constructor(e, n) {
    (this.type = e), (this.attrs = n);
  }
  addToSet(e) {
    let n,
      r = !1;
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      if (this.eq(i)) return e;
      if (this.type.excludes(i.type)) n || (n = e.slice(0, s));
      else {
        if (i.type.excludes(this.type)) return e;
        !r &&
          i.type.rank > this.type.rank &&
          (n || (n = e.slice(0, s)), n.push(this), (r = !0)),
          n && n.push(i);
      }
    }
    return n || (n = e.slice()), r || n.push(this), n;
  }
  removeFromSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n])) return e.slice(0, n).concat(e.slice(n + 1));
    return e;
  }
  isInSet(e) {
    for (let n = 0; n < e.length; n++) if (this.eq(e[n])) return !0;
    return !1;
  }
  eq(e) {
    return this == e || (this.type == e.type && ji(this.attrs, e.attrs));
  }
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  static fromJSON(e, n) {
    if (!n) throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[n.type];
    if (!r)
      throw new RangeError(`There is no mark type ${n.type} in this schema`);
    let s = r.create(n.attrs);
    return r.checkAttrs(s.attrs), s;
  }
  static sameSet(e, n) {
    if (e == n) return !0;
    if (e.length != n.length) return !1;
    for (let r = 0; r < e.length; r++) if (!e[r].eq(n[r])) return !1;
    return !0;
  }
  static setFrom(e) {
    if (!e || (Array.isArray(e) && e.length == 0)) return Jl.none;
    if (e instanceof Jl) return [e];
    let n = e.slice();
    return n.sort((r, s) => r.type.rank - s.type.rank), n;
  }
};
Te.none = [];
class Pi extends Error {}
class J {
  constructor(e, n, r) {
    (this.content = e), (this.openStart = n), (this.openEnd = r);
  }
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  insertAt(e, n) {
    let r = jh(this.content, e + this.openStart, n);
    return r && new J(r, this.openStart, this.openEnd);
  }
  removeBetween(e, n) {
    return new J(
      Oh(this.content, e + this.openStart, n + this.openStart),
      this.openStart,
      this.openEnd,
    );
  }
  eq(e) {
    return (
      this.content.eq(e.content) &&
      this.openStart == e.openStart &&
      this.openEnd == e.openEnd
    );
  }
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  toJSON() {
    if (!this.content.size) return null;
    let e = { content: this.content.toJSON() };
    return (
      this.openStart > 0 && (e.openStart = this.openStart),
      this.openEnd > 0 && (e.openEnd = this.openEnd),
      e
    );
  }
  static fromJSON(e, n) {
    if (!n) return J.empty;
    let r = n.openStart || 0,
      s = n.openEnd || 0;
    if (typeof r != "number" || typeof s != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new J(H.fromJSON(e, n.content), r, s);
  }
  static maxOpen(e, n = !0) {
    let r = 0,
      s = 0;
    for (
      let i = e.firstChild;
      i && !i.isLeaf && (n || !i.type.spec.isolating);
      i = i.firstChild
    )
      r++;
    for (
      let i = e.lastChild;
      i && !i.isLeaf && (n || !i.type.spec.isolating);
      i = i.lastChild
    )
      s++;
    return new J(e, r, s);
  }
}
J.empty = new J(H.empty, 0, 0);
function Oh(t, e, n) {
  let { index: r, offset: s } = t.findIndex(e),
    i = t.maybeChild(r),
    { index: o, offset: l } = t.findIndex(n);
  if (s == e || i.isText) {
    if (l != n && !t.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != o) throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, i.copy(Oh(i.content, e - s - 1, n - s - 1)));
}
function jh(t, e, n, r) {
  let { index: s, offset: i } = t.findIndex(e),
    o = t.maybeChild(s);
  if (i == e || o.isText) return t.cut(0, e).append(n).append(t.cut(e));
  let l = jh(o.content, e - i - 1, n);
  return l && t.replaceChild(s, o.copy(l));
}
function Ty(t, e, n) {
  if (n.openStart > t.depth)
    throw new Pi("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new Pi("Inconsistent open depths");
  return Ph(t, e, n, 0);
}
function Ph(t, e, n, r) {
  let s = t.index(r),
    i = t.node(r);
  if (s == e.index(r) && r < t.depth - n.openStart) {
    let o = Ph(t, e, n, r + 1);
    return i.copy(i.content.replaceChild(s, o));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let o = t.parent,
        l = o.content;
      return Yn(
        o,
        l
          .cut(0, t.parentOffset)
          .append(n.content)
          .append(l.cut(e.parentOffset)),
      );
    } else {
      let { start: o, end: l } = Ry(n, t);
      return Yn(i, Lh(t, o, l, e, r));
    }
  else return Yn(i, Ii(t, e, r));
}
function Ih(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new Pi("Cannot join " + e.type.name + " onto " + t.type.name);
}
function Gl(t, e, n) {
  let r = t.node(n);
  return Ih(r, e.node(n)), r;
}
function Qn(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n])
    ? (e[n] = t.withText(e[n].text + t.text))
    : e.push(t);
}
function is(t, e, n, r) {
  let s = (e || t).node(n),
    i = 0,
    o = e ? e.index(n) : s.childCount;
  t &&
    ((i = t.index(n)),
    t.depth > n ? i++ : t.textOffset && (Qn(t.nodeAfter, r), i++));
  for (let l = i; l < o; l++) Qn(s.child(l), r);
  e && e.depth == n && e.textOffset && Qn(e.nodeBefore, r);
}
function Yn(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function Lh(t, e, n, r, s) {
  let i = t.depth > s && Gl(t, e, s + 1),
    o = r.depth > s && Gl(n, r, s + 1),
    l = [];
  return (
    is(null, t, s, l),
    i && o && e.index(s) == n.index(s)
      ? (Ih(i, o), Qn(Yn(i, Lh(t, e, n, r, s + 1)), l))
      : (i && Qn(Yn(i, Ii(t, e, s + 1)), l),
        is(e, n, s, l),
        o && Qn(Yn(o, Ii(n, r, s + 1)), l)),
    is(r, null, s, l),
    new H(l)
  );
}
function Ii(t, e, n) {
  let r = [];
  if ((is(null, t, n, r), t.depth > n)) {
    let s = Gl(t, e, n + 1);
    Qn(Yn(s, Ii(t, e, n + 1)), r);
  }
  return is(e, null, n, r), new H(r);
}
function Ry(t, e) {
  let n = e.depth - t.openStart,
    s = e.node(n).copy(t.content);
  for (let i = n - 1; i >= 0; i--) s = e.node(i).copy(H.from(s));
  return {
    start: s.resolveNoCache(t.openStart + n),
    end: s.resolveNoCache(s.content.size - t.openEnd - n),
  };
}
class _s {
  constructor(e, n, r) {
    (this.pos = e),
      (this.path = n),
      (this.parentOffset = r),
      (this.depth = n.length / 3 - 1);
  }
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  get parent() {
    return this.node(this.depth);
  }
  get doc() {
    return this.node(0);
  }
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  indexAfter(e) {
    return (
      (e = this.resolveDepth(e)),
      this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1)
    );
  }
  start(e) {
    return (e = this.resolveDepth(e)), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  end(e) {
    return (
      (e = this.resolveDepth(e)), this.start(e) + this.node(e).content.size
    );
  }
  before(e) {
    if (((e = this.resolveDepth(e)), !e))
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  after(e) {
    if (((e = this.resolveDepth(e)), !e))
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1
      ? this.pos
      : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  get nodeAfter() {
    let e = this.parent,
      n = this.index(this.depth);
    if (n == e.childCount) return null;
    let r = this.pos - this.path[this.path.length - 1],
      s = e.child(n);
    return r ? e.child(n).cut(r) : s;
  }
  get nodeBefore() {
    let e = this.index(this.depth),
      n = this.pos - this.path[this.path.length - 1];
    return n
      ? this.parent.child(e).cut(0, n)
      : e == 0
        ? null
        : this.parent.child(e - 1);
  }
  posAtIndex(e, n) {
    n = this.resolveDepth(n);
    let r = this.path[n * 3],
      s = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
    for (let i = 0; i < e; i++) s += r.child(i).nodeSize;
    return s;
  }
  marks() {
    let e = this.parent,
      n = this.index();
    if (e.content.size == 0) return Te.none;
    if (this.textOffset) return e.child(n).marks;
    let r = e.maybeChild(n - 1),
      s = e.maybeChild(n);
    if (!r) {
      let l = r;
      (r = s), (s = l);
    }
    let i = r.marks;
    for (var o = 0; o < i.length; o++)
      i[o].type.spec.inclusive === !1 &&
        (!s || !i[o].isInSet(s.marks)) &&
        (i = i[o--].removeFromSet(i));
    return i;
  }
  marksAcross(e) {
    let n = this.parent.maybeChild(this.index());
    if (!n || !n.isInline) return null;
    let r = n.marks,
      s = e.parent.maybeChild(e.index());
    for (var i = 0; i < r.length; i++)
      r[i].type.spec.inclusive === !1 &&
        (!s || !r[i].isInSet(s.marks)) &&
        (r = r[i--].removeFromSet(r));
    return r;
  }
  sharedDepth(e) {
    for (let n = this.depth; n > 0; n--)
      if (this.start(n) <= e && this.end(n) >= e) return n;
    return 0;
  }
  blockRange(e = this, n) {
    if (e.pos < this.pos) return e.blockRange(this);
    for (
      let r =
        this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0);
      r >= 0;
      r--
    )
      if (e.pos <= this.end(r) && (!n || n(this.node(r))))
        return new Li(this, e, r);
    return null;
  }
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  toString() {
    let e = "";
    for (let n = 1; n <= this.depth; n++)
      e += (e ? "/" : "") + this.node(n).type.name + "_" + this.index(n - 1);
    return e + ":" + this.parentOffset;
  }
  static resolve(e, n) {
    if (!(n >= 0 && n <= e.content.size))
      throw new RangeError("Position " + n + " out of range");
    let r = [],
      s = 0,
      i = n;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(i),
        c = i - a;
      if ((r.push(o, l, s + a), !c || ((o = o.child(l)), o.isText))) break;
      (i = c - 1), (s += a + 1);
    }
    return new _s(n, r, i);
  }
  static resolveCached(e, n) {
    let r = Vu.get(e);
    if (r)
      for (let i = 0; i < r.elts.length; i++) {
        let o = r.elts[i];
        if (o.pos == n) return o;
      }
    else Vu.set(e, (r = new Oy()));
    let s = (r.elts[r.i] = _s.resolve(e, n));
    return (r.i = (r.i + 1) % jy), s;
  }
}
class Oy {
  constructor() {
    (this.elts = []), (this.i = 0);
  }
}
const jy = 12,
  Vu = new WeakMap();
class Li {
  constructor(e, n, r) {
    (this.$from = e), (this.$to = n), (this.depth = r);
  }
  get start() {
    return this.$from.before(this.depth + 1);
  }
  get end() {
    return this.$to.after(this.depth + 1);
  }
  get parent() {
    return this.$from.node(this.depth);
  }
  get startIndex() {
    return this.$from.index(this.depth);
  }
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const Py = Object.create(null);
let Xn = class Ql {
  constructor(e, n, r, s = Te.none) {
    (this.type = e),
      (this.attrs = n),
      (this.marks = s),
      (this.content = r || H.empty);
  }
  get children() {
    return this.content.content;
  }
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  get childCount() {
    return this.content.childCount;
  }
  child(e) {
    return this.content.child(e);
  }
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  forEach(e) {
    this.content.forEach(e);
  }
  nodesBetween(e, n, r, s = 0) {
    this.content.nodesBetween(e, n, r, s, this);
  }
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  get textContent() {
    return this.isLeaf && this.type.spec.leafText
      ? this.type.spec.leafText(this)
      : this.textBetween(0, this.content.size, "");
  }
  textBetween(e, n, r, s) {
    return this.content.textBetween(e, n, r, s);
  }
  get firstChild() {
    return this.content.firstChild;
  }
  get lastChild() {
    return this.content.lastChild;
  }
  eq(e) {
    return this == e || (this.sameMarkup(e) && this.content.eq(e.content));
  }
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  hasMarkup(e, n, r) {
    return (
      this.type == e &&
      ji(this.attrs, n || e.defaultAttrs || Py) &&
      Te.sameSet(this.marks, r || Te.none)
    );
  }
  copy(e = null) {
    return e == this.content
      ? this
      : new Ql(this.type, this.attrs, e, this.marks);
  }
  mark(e) {
    return e == this.marks
      ? this
      : new Ql(this.type, this.attrs, this.content, e);
  }
  cut(e, n = this.content.size) {
    return e == 0 && n == this.content.size
      ? this
      : this.copy(this.content.cut(e, n));
  }
  slice(e, n = this.content.size, r = !1) {
    if (e == n) return J.empty;
    let s = this.resolve(e),
      i = this.resolve(n),
      o = r ? 0 : s.sharedDepth(n),
      l = s.start(o),
      c = s.node(o).content.cut(s.pos - l, i.pos - l);
    return new J(c, s.depth - o, i.depth - o);
  }
  replace(e, n, r) {
    return Ty(this.resolve(e), this.resolve(n), r);
  }
  nodeAt(e) {
    for (let n = this; ; ) {
      let { index: r, offset: s } = n.content.findIndex(e);
      if (((n = n.maybeChild(r)), !n)) return null;
      if (s == e || n.isText) return n;
      e -= s + 1;
    }
  }
  childAfter(e) {
    let { index: n, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(n), index: n, offset: r };
  }
  childBefore(e) {
    if (e == 0) return { node: null, index: 0, offset: 0 };
    let { index: n, offset: r } = this.content.findIndex(e);
    if (r < e) return { node: this.content.child(n), index: n, offset: r };
    let s = this.content.child(n - 1);
    return { node: s, index: n - 1, offset: r - s.nodeSize };
  }
  resolve(e) {
    return _s.resolveCached(this, e);
  }
  resolveNoCache(e) {
    return _s.resolve(this, e);
  }
  rangeHasMark(e, n, r) {
    let s = !1;
    return (
      n > e &&
        this.nodesBetween(e, n, (i) => (r.isInSet(i.marks) && (s = !0), !s)),
      s
    );
  }
  get isBlock() {
    return this.type.isBlock;
  }
  get isTextblock() {
    return this.type.isTextblock;
  }
  get inlineContent() {
    return this.type.inlineContent;
  }
  get isInline() {
    return this.type.isInline;
  }
  get isText() {
    return this.type.isText;
  }
  get isLeaf() {
    return this.type.isLeaf;
  }
  get isAtom() {
    return this.type.isAtom;
  }
  toString() {
    if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return (
      this.content.size && (e += "(" + this.content.toStringInner() + ")"),
      Nh(this.marks, e)
    );
  }
  contentMatchAt(e) {
    let n = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!n)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return n;
  }
  canReplace(e, n, r = H.empty, s = 0, i = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, s, i),
      l = o && o.matchFragment(this.content, n);
    if (!l || !l.validEnd) return !1;
    for (let a = s; a < i; a++)
      if (!this.type.allowsMarks(r.child(a).marks)) return !1;
    return !0;
  }
  canReplaceWith(e, n, r, s) {
    if (s && !this.type.allowsMarks(s)) return !1;
    let i = this.contentMatchAt(e).matchType(r),
      o = i && i.matchFragment(this.content, n);
    return o ? o.validEnd : !1;
  }
  canAppend(e) {
    return e.content.size
      ? this.canReplace(this.childCount, this.childCount, e.content)
      : this.type.compatibleContent(e.type);
  }
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = Te.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), (e = r.addToSet(e));
    }
    if (!Te.sameSet(e, this.marks))
      throw new RangeError(
        `Invalid collection of marks for node ${this.type.name}: ${this.marks.map((n) => n.type.name)}`,
      );
    this.content.forEach((n) => n.check());
  }
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return (
      this.content.size && (e.content = this.content.toJSON()),
      this.marks.length && (e.marks = this.marks.map((n) => n.toJSON())),
      e
    );
  }
  static fromJSON(e, n) {
    if (!n) throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (n.marks) {
      if (!Array.isArray(n.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = n.marks.map(e.markFromJSON);
    }
    if (n.type == "text") {
      if (typeof n.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(n.text, r);
    }
    let s = H.fromJSON(e, n.content),
      i = e.nodeType(n.type).create(n.attrs, s, r);
    return i.type.checkAttrs(i.attrs), i;
  }
};
Xn.prototype.text = void 0;
class Ni extends Xn {
  constructor(e, n, r, s) {
    if ((super(e, n, null, s), !r))
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString
      ? this.type.spec.toDebugString(this)
      : Nh(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, n) {
    return this.text.slice(e, n);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Ni(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Ni(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, n = this.text.length) {
    return e == 0 && n == this.text.length
      ? this
      : this.withText(this.text.slice(e, n));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return (e.text = this.text), e;
  }
}
function Nh(t, e) {
  for (let n = t.length - 1; n >= 0; n--) e = t[n].type.name + "(" + e + ")";
  return e;
}
class rr {
  constructor(e) {
    (this.validEnd = e), (this.next = []), (this.wrapCache = []);
  }
  static parse(e, n) {
    let r = new Iy(e, n);
    if (r.next == null) return rr.empty;
    let s = zh(r);
    r.next && r.err("Unexpected trailing text");
    let i = $y(Hy(s));
    return Fy(i, r), i;
  }
  matchType(e) {
    for (let n = 0; n < this.next.length; n++)
      if (this.next[n].type == e) return this.next[n].next;
    return null;
  }
  matchFragment(e, n = 0, r = e.childCount) {
    let s = this;
    for (let i = n; s && i < r; i++) s = s.matchType(e.child(i).type);
    return s;
  }
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: n } = this.next[e];
      if (!(n.isText || n.hasRequiredAttrs())) return n;
    }
    return null;
  }
  compatible(e) {
    for (let n = 0; n < this.next.length; n++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[n].type == e.next[r].type) return !0;
    return !1;
  }
  fillBefore(e, n = !1, r = 0) {
    let s = [this];
    function i(o, l) {
      let a = o.matchFragment(e, r);
      if (a && (!n || a.validEnd))
        return H.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: u, next: d } = o.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && s.indexOf(d) == -1) {
          s.push(d);
          let h = i(d, l.concat(u));
          if (h) return h;
        }
      }
      return null;
    }
    return i(this, []);
  }
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e) return this.wrapCache[r + 1];
    let n = this.computeWrapping(e);
    return this.wrapCache.push(e, n), n;
  }
  computeWrapping(e) {
    let n = Object.create(null),
      r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let s = r.shift(),
        i = s.match;
      if (i.matchType(e)) {
        let o = [];
        for (let l = s; l.type; l = l.via) o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < i.next.length; o++) {
        let { type: l, next: a } = i.next[o];
        !l.isLeaf &&
          !l.hasRequiredAttrs() &&
          !(l.name in n) &&
          (!s.type || a.validEnd) &&
          (r.push({ match: l.contentMatch, type: l, via: s }),
          (n[l.name] = !0));
      }
    }
    return null;
  }
  get edgeCount() {
    return this.next.length;
  }
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  toString() {
    let e = [];
    function n(r) {
      e.push(r);
      for (let s = 0; s < r.next.length; s++)
        e.indexOf(r.next[s].next) == -1 && n(r.next[s].next);
    }
    return (
      n(this),
      e.map((r, s) => {
        let i = s + (r.validEnd ? "*" : " ") + " ";
        for (let o = 0; o < r.next.length; o++)
          i +=
            (o ? ", " : "") +
            r.next[o].type.name +
            "->" +
            e.indexOf(r.next[o].next);
        return i;
      }).join(`
`)
    );
  }
}
rr.empty = new rr(!0);
class Iy {
  constructor(e, n) {
    (this.string = e),
      (this.nodeTypes = n),
      (this.inline = null),
      (this.pos = 0),
      (this.tokens = e.split(/\s*(?=\b|\W|$)/)),
      this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(),
      this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function zh(t) {
  let e = [];
  do e.push(Ly(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Ly(t) {
  let e = [];
  do e.push(Ny(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function Ny(t) {
  let e = By(t);
  for (;;)
    if (t.eat("+")) e = { type: "plus", expr: e };
    else if (t.eat("*")) e = { type: "star", expr: e };
    else if (t.eat("?")) e = { type: "opt", expr: e };
    else if (t.eat("{")) e = zy(t, e);
    else break;
  return e;
}
function Wu(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function zy(t, e) {
  let n = Wu(t),
    r = n;
  return (
    t.eat(",") && (t.next != "}" ? (r = Wu(t)) : (r = -1)),
    t.eat("}") || t.err("Unclosed braced range"),
    { type: "range", min: n, max: r, expr: e }
  );
}
function Dy(t, e) {
  let n = t.nodeTypes,
    r = n[e];
  if (r) return [r];
  let s = [];
  for (let i in n) {
    let o = n[i];
    o.isInGroup(e) && s.push(o);
  }
  return s.length == 0 && t.err("No node type or group '" + e + "' found"), s;
}
function By(t) {
  if (t.eat("(")) {
    let e = zh(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next)) t.err("Unexpected token '" + t.next + "'");
  else {
    let e = Dy(t, t.next).map(
      (n) => (
        t.inline == null
          ? (t.inline = n.isInline)
          : t.inline != n.isInline && t.err("Mixing inline and block content"),
        { type: "name", value: n }
      ),
    );
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Hy(t) {
  let e = [[]];
  return s(i(t, 0), n()), e;
  function n() {
    return e.push([]) - 1;
  }
  function r(o, l, a) {
    let c = { term: a, to: l };
    return e[o].push(c), c;
  }
  function s(o, l) {
    o.forEach((a) => (a.to = l));
  }
  function i(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(i(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = i(o.exprs[a], l);
        if (a == o.exprs.length - 1) return c;
        s(c, (l = n()));
      }
    else if (o.type == "star") {
      let a = n();
      return r(l, a), s(i(o.expr, a), a), [r(a)];
    } else if (o.type == "plus") {
      let a = n();
      return s(i(o.expr, l), a), s(i(o.expr, a), a), [r(a)];
    } else {
      if (o.type == "opt") return [r(l)].concat(i(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let u = n();
          s(i(o.expr, a), u), (a = u);
        }
        if (o.max == -1) s(i(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let u = n();
            r(a, u), s(i(o.expr, a), u), (a = u);
          }
        return [r(a)];
      } else {
        if (o.type == "name") return [r(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Dh(t, e) {
  return e - t;
}
function Uu(t, e) {
  let n = [];
  return r(e), n.sort(Dh);
  function r(s) {
    let i = t[s];
    if (i.length == 1 && !i[0].term) return r(i[0].to);
    n.push(s);
    for (let o = 0; o < i.length; o++) {
      let { term: l, to: a } = i[o];
      !l && n.indexOf(a) == -1 && r(a);
    }
  }
}
function $y(t) {
  let e = Object.create(null);
  return n(Uu(t, 0));
  function n(r) {
    let s = [];
    r.forEach((o) => {
      t[o].forEach(({ term: l, to: a }) => {
        if (!l) return;
        let c;
        for (let u = 0; u < s.length; u++) s[u][0] == l && (c = s[u][1]);
        Uu(t, a).forEach((u) => {
          c || s.push([l, (c = [])]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let i = (e[r.join(",")] = new rr(r.indexOf(t.length - 1) > -1));
    for (let o = 0; o < s.length; o++) {
      let l = s[o][1].sort(Dh);
      i.next.push({ type: s[o][0], next: e[l.join(",")] || n(l) });
    }
    return i;
  }
}
function Fy(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let s = r[n],
      i = !s.validEnd,
      o = [];
    for (let l = 0; l < s.next.length; l++) {
      let { type: a, next: c } = s.next[l];
      o.push(a.name),
        i && !(a.isText || a.hasRequiredAttrs()) && (i = !1),
        r.indexOf(c) == -1 && r.push(c);
    }
    i &&
      e.err(
        "Only non-generatable nodes (" +
          o.join(", ") +
          ") in a required position (see https://prosemirror.net/docs/guide/#generatable)",
      );
  }
}
function Bh(t) {
  let e = Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault) return null;
    e[n] = r.default;
  }
  return e;
}
function Hh(t, e) {
  let n = Object.create(null);
  for (let r in t) {
    let s = e && e[r];
    if (s === void 0) {
      let i = t[r];
      if (i.hasDefault) s = i.default;
      else throw new RangeError("No value supplied for attribute " + r);
    }
    n[r] = s;
  }
  return n;
}
function $h(t, e, n, r) {
  for (let s in e)
    if (!(s in t))
      throw new RangeError(`Unsupported attribute ${s} for ${n} of type ${s}`);
  for (let s in t) {
    let i = t[s];
    i.validate && i.validate(e[s]);
  }
}
function Fh(t, e) {
  let n = Object.create(null);
  if (e) for (let r in e) n[r] = new Wy(t, r, e[r]);
  return n;
}
let Ku = class Vh {
  constructor(e, n, r) {
    (this.name = e),
      (this.schema = n),
      (this.spec = r),
      (this.markSet = null),
      (this.groups = r.group ? r.group.split(" ") : []),
      (this.attrs = Fh(e, r.attrs)),
      (this.defaultAttrs = Bh(this.attrs)),
      (this.contentMatch = null),
      (this.inlineContent = null),
      (this.isBlock = !(r.inline || e == "text")),
      (this.isText = e == "text");
  }
  get isInline() {
    return !this.isBlock;
  }
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  get isLeaf() {
    return this.contentMatch == rr.empty;
  }
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  hasRequiredAttrs() {
    for (let e in this.attrs) if (this.attrs[e].isRequired) return !0;
    return !1;
  }
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Hh(this.attrs, e);
  }
  create(e = null, n, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Xn(this, this.computeAttrs(e), H.from(n), Te.setFrom(r));
  }
  createChecked(e = null, n, r) {
    return (
      (n = H.from(n)),
      this.checkContent(n),
      new Xn(this, this.computeAttrs(e), n, Te.setFrom(r))
    );
  }
  createAndFill(e = null, n, r) {
    if (((e = this.computeAttrs(e)), (n = H.from(n)), n.size)) {
      let o = this.contentMatch.fillBefore(n);
      if (!o) return null;
      n = o.append(n);
    }
    let s = this.contentMatch.matchFragment(n),
      i = s && s.fillBefore(H.empty, !0);
    return i ? new Xn(this, e, n.append(i), Te.setFrom(r)) : null;
  }
  validContent(e) {
    let n = this.contentMatch.matchFragment(e);
    if (!n || !n.validEnd) return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks)) return !1;
    return !0;
  }
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(
        `Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`,
      );
  }
  checkAttrs(e) {
    $h(this.attrs, e, "node", this.name);
  }
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  allowsMarks(e) {
    if (this.markSet == null) return !0;
    for (let n = 0; n < e.length; n++)
      if (!this.allowsMarkType(e[n].type)) return !1;
    return !0;
  }
  allowedMarks(e) {
    if (this.markSet == null) return e;
    let n;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type)
        ? n && n.push(e[r])
        : n || (n = e.slice(0, r));
    return n ? (n.length ? n : Te.none) : e;
  }
  static compile(e, n) {
    let r = Object.create(null);
    e.forEach((i, o) => (r[i] = new Vh(i, n, o)));
    let s = n.spec.topNode || "doc";
    if (!r[s])
      throw new RangeError("Schema is missing its top node type ('" + s + "')");
    if (!r.text) throw new RangeError("Every schema needs a 'text' type");
    for (let i in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function Vy(t, e, n) {
  let r = n.split("|");
  return (s) => {
    let i = s === null ? "null" : typeof s;
    if (r.indexOf(i) < 0)
      throw new RangeError(
        `Expected value of type ${r} for attribute ${e} on type ${t}, got ${i}`,
      );
  };
}
class Wy {
  constructor(e, n, r) {
    (this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default")),
      (this.default = r.default),
      (this.validate =
        typeof r.validate == "string" ? Vy(e, n, r.validate) : r.validate);
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Oo {
  constructor(e, n, r, s) {
    (this.name = e),
      (this.rank = n),
      (this.schema = r),
      (this.spec = s),
      (this.attrs = Fh(e, s.attrs)),
      (this.excluded = null);
    let i = Bh(this.attrs);
    this.instance = i ? new Te(this, i) : null;
  }
  create(e = null) {
    return !e && this.instance
      ? this.instance
      : new Te(this, Hh(this.attrs, e));
  }
  static compile(e, n) {
    let r = Object.create(null),
      s = 0;
    return e.forEach((i, o) => (r[i] = new Oo(i, s++, n, o))), r;
  }
  removeFromSet(e) {
    for (var n = 0; n < e.length; n++)
      e[n].type == this && ((e = e.slice(0, n).concat(e.slice(n + 1))), n--);
    return e;
  }
  isInSet(e) {
    for (let n = 0; n < e.length; n++) if (e[n].type == this) return e[n];
  }
  checkAttrs(e) {
    $h(this.attrs, e, "mark", this.name);
  }
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Uy {
  constructor(e) {
    (this.linebreakReplacement = null), (this.cached = Object.create(null));
    let n = (this.spec = {});
    for (let s in e) n[s] = e[s];
    (n.nodes = qe.from(e.nodes)),
      (n.marks = qe.from(e.marks || {})),
      (this.nodes = Ku.compile(this.spec.nodes, this)),
      (this.marks = Oo.compile(this.spec.marks, this));
    let r = Object.create(null);
    for (let s in this.nodes) {
      if (s in this.marks)
        throw new RangeError(s + " can not be both a node and a mark");
      let i = this.nodes[s],
        o = i.spec.content || "",
        l = i.spec.marks;
      if (
        ((i.contentMatch = r[o] || (r[o] = rr.parse(o, this.nodes))),
        (i.inlineContent = i.contentMatch.inlineContent),
        i.spec.linebreakReplacement)
      ) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!i.isInline || !i.isLeaf)
          throw new RangeError(
            "Linebreak replacement nodes must be inline leaf nodes",
          );
        this.linebreakReplacement = i;
      }
      i.markSet =
        l == "_"
          ? null
          : l
            ? qu(this, l.split(" "))
            : l == "" || !i.inlineContent
              ? []
              : null;
    }
    for (let s in this.marks) {
      let i = this.marks[s],
        o = i.spec.excludes;
      i.excluded = o == null ? [i] : o == "" ? [] : qu(this, o.split(" "));
    }
    (this.nodeFromJSON = this.nodeFromJSON.bind(this)),
      (this.markFromJSON = this.markFromJSON.bind(this)),
      (this.topNodeType = this.nodes[this.spec.topNode || "doc"]),
      (this.cached.wrappings = Object.create(null));
  }
  node(e, n = null, r, s) {
    if (typeof e == "string") e = this.nodeType(e);
    else if (e instanceof Ku) {
      if (e.schema != this)
        throw new RangeError(
          "Node type from different schema used (" + e.name + ")",
        );
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(n, r, s);
  }
  text(e, n) {
    let r = this.nodes.text;
    return new Ni(r, r.defaultAttrs, e, Te.setFrom(n));
  }
  mark(e, n) {
    return typeof e == "string" && (e = this.marks[e]), e.create(n);
  }
  nodeFromJSON(e) {
    return Xn.fromJSON(this, e);
  }
  markFromJSON(e) {
    return Te.fromJSON(this, e);
  }
  nodeType(e) {
    let n = this.nodes[e];
    if (!n) throw new RangeError("Unknown node type: " + e);
    return n;
  }
}
function qu(t, e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r],
      i = t.marks[s],
      o = i;
    if (i) n.push(i);
    else
      for (let l in t.marks) {
        let a = t.marks[l];
        (s == "_" ||
          (a.spec.group && a.spec.group.split(" ").indexOf(s) > -1)) &&
          n.push((o = a));
      }
    if (!o) throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return n;
}
function Ky(t) {
  return t.tag != null;
}
function qy(t) {
  return t.style != null;
}
let ui = class Yl {
  constructor(e, n) {
    (this.schema = e), (this.rules = n), (this.tags = []), (this.styles = []);
    let r = (this.matchedStyles = []);
    n.forEach((s) => {
      if (Ky(s)) this.tags.push(s);
      else if (qy(s)) {
        let i = /[^=]*/.exec(s.style)[0];
        r.indexOf(i) < 0 && r.push(i), this.styles.push(s);
      }
    }),
      (this.normalizeLists = !this.tags.some((s) => {
        if (!/^(ul|ol)\b/.test(s.tag) || !s.node) return !1;
        let i = e.nodes[s.node];
        return i.contentMatch.matchType(i);
      }));
  }
  parse(e, n = {}) {
    let r = new Gu(this, n, !1);
    return r.addAll(e, Te.none, n.from, n.to), r.finish();
  }
  parseSlice(e, n = {}) {
    let r = new Gu(this, n, !0);
    return r.addAll(e, Te.none, n.from, n.to), J.maxOpen(r.finish());
  }
  matchTag(e, n, r) {
    for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
      let i = this.tags[s];
      if (
        Qy(e, i.tag) &&
        (i.namespace === void 0 || e.namespaceURI == i.namespace) &&
        (!i.context || n.matchesContext(i.context))
      ) {
        if (i.getAttrs) {
          let o = i.getAttrs(e);
          if (o === !1) continue;
          i.attrs = o || void 0;
        }
        return i;
      }
    }
  }
  matchStyle(e, n, r, s) {
    for (
      let i = s ? this.styles.indexOf(s) + 1 : 0;
      i < this.styles.length;
      i++
    ) {
      let o = this.styles[i],
        l = o.style;
      if (
        !(
          l.indexOf(e) != 0 ||
          (o.context && !r.matchesContext(o.context)) ||
          (l.length > e.length &&
            (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != n))
        )
      ) {
        if (o.getAttrs) {
          let a = o.getAttrs(n);
          if (a === !1) continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  static schemaRules(e) {
    let n = [];
    function r(s) {
      let i = s.priority == null ? 50 : s.priority,
        o = 0;
      for (; o < n.length; o++) {
        let l = n[o];
        if ((l.priority == null ? 50 : l.priority) < i) break;
      }
      n.splice(o, 0, s);
    }
    for (let s in e.marks) {
      let i = e.marks[s].spec.parseDOM;
      i &&
        i.forEach((o) => {
          r((o = Qu(o))), o.mark || o.ignore || o.clearMark || (o.mark = s);
        });
    }
    for (let s in e.nodes) {
      let i = e.nodes[s].spec.parseDOM;
      i &&
        i.forEach((o) => {
          r((o = Qu(o))), o.node || o.ignore || o.mark || (o.node = s);
        });
    }
    return n;
  }
  static fromSchema(e) {
    return (
      e.cached.domParser || (e.cached.domParser = new Yl(e, Yl.schemaRules(e)))
    );
  }
};
const Wh = {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    canvas: !0,
    dd: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    figcaption: !0,
    figure: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    li: !0,
    noscript: !0,
    ol: !0,
    output: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    tfoot: !0,
    ul: !0,
  },
  Jy = { head: !0, noscript: !0, object: !0, script: !0, style: !0, title: !0 },
  Uh = { ol: !0, ul: !0 },
  Ss = 1,
  Xl = 2,
  di = 4;
function Ju(t, e, n) {
  return e != null
    ? (e ? Ss : 0) | (e === "full" ? Xl : 0)
    : t && t.whitespace == "pre"
      ? Ss | Xl
      : n & -5;
}
class Us {
  constructor(e, n, r, s, i, o) {
    (this.type = e),
      (this.attrs = n),
      (this.marks = r),
      (this.solid = s),
      (this.options = o),
      (this.content = []),
      (this.activeMarks = Te.none),
      (this.match = i || (o & di ? null : e.contentMatch));
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type) return [];
      let n = this.type.contentMatch.fillBefore(H.from(e));
      if (n) this.match = this.type.contentMatch.matchFragment(n);
      else {
        let r = this.type.contentMatch,
          s;
        return (s = r.findWrapping(e.type)) ? ((this.match = r), s) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Ss)) {
      let r = this.content[this.content.length - 1],
        s;
      if (r && r.isText && (s = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let i = r;
        r.text.length == s[0].length
          ? this.content.pop()
          : (this.content[this.content.length - 1] = i.withText(
              i.text.slice(0, i.text.length - s[0].length),
            ));
      }
    }
    let n = H.from(this.content);
    return (
      !e && this.match && (n = n.append(this.match.fillBefore(H.empty, !0))),
      this.type ? this.type.create(this.attrs, n, this.marks) : n
    );
  }
  inlineContext(e) {
    return this.type
      ? this.type.inlineContent
      : this.content.length
        ? this.content[0].isInline
        : e.parentNode &&
          !Wh.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Gu {
  constructor(e, n, r) {
    (this.parser = e),
      (this.options = n),
      (this.isOpen = r),
      (this.open = 0),
      (this.localPreserveWS = !1);
    let s = n.topNode,
      i,
      o = Ju(null, n.preserveWhitespace, 0) | (r ? di : 0);
    s
      ? (i = new Us(
          s.type,
          s.attrs,
          Te.none,
          !0,
          n.topMatch || s.type.contentMatch,
          o,
        ))
      : r
        ? (i = new Us(null, null, Te.none, !0, null, o))
        : (i = new Us(e.schema.topNodeType, null, Te.none, !0, null, o)),
      (this.nodes = [i]),
      (this.find = n.findPositions),
      (this.needsBlock = !1);
  }
  get top() {
    return this.nodes[this.open];
  }
  addDOM(e, n) {
    e.nodeType == 3
      ? this.addTextNode(e, n)
      : e.nodeType == 1 && this.addElement(e, n);
  }
  addTextNode(e, n) {
    let r = e.nodeValue,
      s = this.top,
      i =
        s.options & Xl ? "full" : this.localPreserveWS || (s.options & Ss) > 0;
    if (i === "full" || s.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (i)
        i !== "full"
          ? (r = r.replace(/\r?\n|\r/g, " "))
          : (r = r.replace(
              /\r\n?/g,
              `
`,
            ));
      else if (
        ((r = r.replace(/[ \t\r\n\u000c]+/g, " ")),
        /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1)
      ) {
        let o = s.content[s.content.length - 1],
          l = e.previousSibling;
        (!o ||
          (l && l.nodeName == "BR") ||
          (o.isText && /[ \t\r\n\u000c]$/.test(o.text))) &&
          (r = r.slice(1));
      }
      r && this.insertNode(this.parser.schema.text(r), n), this.findInText(e);
    } else this.findInside(e);
  }
  addElement(e, n, r) {
    let s = this.localPreserveWS,
      i = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) &&
      (this.localPreserveWS = !0);
    let o = e.nodeName.toLowerCase(),
      l;
    Uh.hasOwnProperty(o) && this.parser.normalizeLists && Gy(e);
    let a =
      (this.options.ruleFromNode && this.options.ruleFromNode(e)) ||
      (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : Jy.hasOwnProperty(o))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent
        ? (this.open = Math.max(0, this.open - 1))
        : a && a.skip.nodeType && (e = a.skip);
      let c,
        u = this.needsBlock;
      if (Wh.hasOwnProperty(o))
        i.content.length &&
          i.content[0].isInline &&
          this.open &&
          (this.open--, (i = this.top)),
          (c = !0),
          i.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, n);
        break e;
      }
      let d = a && a.skip ? n : this.readStyles(e, n);
      d && this.addAll(e, d), c && this.sync(i), (this.needsBlock = u);
    } else {
      let c = this.readStyles(e, n);
      c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
    }
    this.localPreserveWS = s;
  }
  leafFallback(e, n) {
    e.nodeName == "BR" &&
      this.top.type &&
      this.top.type.inlineContent &&
      this.addTextNode(
        e.ownerDocument.createTextNode(`
`),
        n,
      );
  }
  ignoreFallback(e, n) {
    e.nodeName == "BR" &&
      (!this.top.type || !this.top.type.inlineContent) &&
      this.findPlace(this.parser.schema.text("-"), n);
  }
  readStyles(e, n) {
    let r = e.style;
    if (r && r.length)
      for (let s = 0; s < this.parser.matchedStyles.length; s++) {
        let i = this.parser.matchedStyles[s],
          o = r.getPropertyValue(i);
        if (o)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(i, o, this, l);
            if (!a) break;
            if (a.ignore) return null;
            if (
              (a.clearMark
                ? (n = n.filter((c) => !a.clearMark(c)))
                : (n = n.concat(
                    this.parser.schema.marks[a.mark].create(a.attrs),
                  )),
              a.consuming === !1)
            )
              l = a;
            else break;
          }
      }
    return n;
  }
  addElementByRule(e, n, r, s) {
    let i, o;
    if (n.node)
      if (((o = this.parser.schema.nodes[n.node]), o.isLeaf))
        this.insertNode(o.create(n.attrs), r) || this.leafFallback(e, r);
      else {
        let a = this.enter(o, n.attrs || null, r, n.preserveWhitespace);
        a && ((i = !0), (r = a));
      }
    else {
      let a = this.parser.schema.marks[n.mark];
      r = r.concat(a.create(n.attrs));
    }
    let l = this.top;
    if (o && o.isLeaf) this.findInside(e);
    else if (s) this.addElement(e, r, s);
    else if (n.getContent)
      this.findInside(e),
        n
          .getContent(e, this.parser.schema)
          .forEach((a) => this.insertNode(a, r));
    else {
      let a = e;
      typeof n.contentElement == "string"
        ? (a = e.querySelector(n.contentElement))
        : typeof n.contentElement == "function"
          ? (a = n.contentElement(e))
          : n.contentElement && (a = n.contentElement),
        this.findAround(e, a, !0),
        this.addAll(a, r),
        this.findAround(e, a, !1);
    }
    i && this.sync(l) && this.open--;
  }
  addAll(e, n, r, s) {
    let i = r || 0;
    for (
      let o = r ? e.childNodes[r] : e.firstChild,
        l = s == null ? null : e.childNodes[s];
      o != l;
      o = o.nextSibling, ++i
    )
      this.findAtPoint(e, i), this.addDOM(o, n);
    this.findAtPoint(e, i);
  }
  findPlace(e, n) {
    let r, s;
    for (let i = this.open; i >= 0; i--) {
      let o = this.nodes[i],
        l = o.findWrapping(e);
      if (
        (l && (!r || r.length > l.length) && ((r = l), (s = o), !l.length)) ||
        o.solid
      )
        break;
    }
    if (!r) return null;
    this.sync(s);
    for (let i = 0; i < r.length; i++) n = this.enterInner(r[i], null, n, !1);
    return n;
  }
  insertNode(e, n) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let s = this.textblockFromContext();
      s && (n = this.enterInner(s, null, n));
    }
    let r = this.findPlace(e, n);
    if (r) {
      this.closeExtra();
      let s = this.top;
      s.match && (s.match = s.match.matchType(e.type));
      let i = Te.none;
      for (let o of r.concat(e.marks))
        (s.type ? s.type.allowsMarkType(o.type) : Yu(o.type, e.type)) &&
          (i = o.addToSet(i));
      return s.content.push(e.mark(i)), !0;
    }
    return !1;
  }
  enter(e, n, r, s) {
    let i = this.findPlace(e.create(n), r);
    return i && (i = this.enterInner(e, n, r, !0, s)), i;
  }
  enterInner(e, n, r, s = !1, i) {
    this.closeExtra();
    let o = this.top;
    o.match = o.match && o.match.matchType(e);
    let l = Ju(e, i, o.options);
    o.options & di && o.content.length == 0 && (l |= di);
    let a = Te.none;
    return (
      (r = r.filter((c) =>
        (o.type ? o.type.allowsMarkType(c.type) : Yu(c.type, e))
          ? ((a = c.addToSet(a)), !1)
          : !0,
      )),
      this.nodes.push(new Us(e, n, a, s, null, l)),
      this.open++,
      r
    );
  }
  closeExtra(e = !1) {
    let n = this.nodes.length - 1;
    if (n > this.open) {
      for (; n > this.open; n--)
        this.nodes[n - 1].content.push(this.nodes[n].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return (
      (this.open = 0),
      this.closeExtra(this.isOpen),
      this.nodes[0].finish(!!(this.isOpen || this.options.topOpen))
    );
  }
  sync(e) {
    for (let n = this.open; n >= 0; n--) {
      if (this.nodes[n] == e) return (this.open = n), !0;
      this.localPreserveWS && (this.nodes[n].options |= Ss);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let n = this.open; n >= 0; n--) {
      let r = this.nodes[n].content;
      for (let s = r.length - 1; s >= 0; s--) e += r[s].nodeSize;
      n && e++;
    }
    return e;
  }
  findAtPoint(e, n) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e &&
          this.find[r].offset == n &&
          (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].pos == null &&
          e.nodeType == 1 &&
          e.contains(this.find[n].node) &&
          (this.find[n].pos = this.currentPos);
  }
  findAround(e, n, r) {
    if (e != n && this.find)
      for (let s = 0; s < this.find.length; s++)
        this.find[s].pos == null &&
          e.nodeType == 1 &&
          e.contains(this.find[s].node) &&
          n.compareDocumentPosition(this.find[s].node) & (r ? 2 : 4) &&
          (this.find[s].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e &&
          (this.find[n].pos =
            this.currentPos - (e.nodeValue.length - this.find[n].offset));
  }
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let n = e.split("/"),
      r = this.options.context,
      s = !this.isOpen && (!r || r.parent.type == this.nodes[0].type),
      i = -(r ? r.depth + 1 : 0) + (s ? 0 : 1),
      o = (l, a) => {
        for (; l >= 0; l--) {
          let c = n[l];
          if (c == "") {
            if (l == n.length - 1 || l == 0) continue;
            for (; a >= i; a--) if (o(l - 1, a)) return !0;
            return !1;
          } else {
            let u =
              a > 0 || (a == 0 && s)
                ? this.nodes[a].type
                : r && a >= i
                  ? r.node(a - i).type
                  : null;
            if (!u || (u.name != c && !u.isInGroup(c))) return !1;
            a--;
          }
        }
        return !0;
      };
    return o(n.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let n = e.depth; n >= 0; n--) {
        let r = e.node(n).contentMatchAt(e.indexAfter(n)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs) return r;
      }
    for (let n in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[n];
      if (r.isTextblock && r.defaultAttrs) return r;
    }
  }
}
function Gy(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && Uh.hasOwnProperty(r) && n
      ? (n.appendChild(e), (e = n))
      : r == "li"
        ? (n = e)
        : r && (n = null);
  }
}
function Qy(t, e) {
  return (
    t.matches ||
    t.msMatchesSelector ||
    t.webkitMatchesSelector ||
    t.mozMatchesSelector
  ).call(t, e);
}
function Qu(t) {
  let e = {};
  for (let n in t) e[n] = t[n];
  return e;
}
function Yu(t, e) {
  let n = e.schema.nodes;
  for (let r in n) {
    let s = n[r];
    if (!s.allowsMarkType(t)) continue;
    let i = [],
      o = (l) => {
        i.push(l);
        for (let a = 0; a < l.edgeCount; a++) {
          let { type: c, next: u } = l.edge(a);
          if (c == e || (i.indexOf(u) < 0 && o(u))) return !0;
        }
      };
    if (o(s.contentMatch)) return !0;
  }
}
class jo {
  constructor(e, n) {
    (this.nodes = e), (this.marks = n);
  }
  serializeFragment(e, n = {}, r) {
    r || (r = sl(n).createDocumentFragment());
    let s = r,
      i = [];
    return (
      e.forEach((o) => {
        if (i.length || o.marks.length) {
          let l = 0,
            a = 0;
          for (; l < i.length && a < o.marks.length; ) {
            let c = o.marks[a];
            if (!this.marks[c.type.name]) {
              a++;
              continue;
            }
            if (!c.eq(i[l][0]) || c.type.spec.spanning === !1) break;
            l++, a++;
          }
          for (; l < i.length; ) s = i.pop()[1];
          for (; a < o.marks.length; ) {
            let c = o.marks[a++],
              u = this.serializeMark(c, o.isInline, n);
            u &&
              (i.push([c, s]),
              s.appendChild(u.dom),
              (s = u.contentDOM || u.dom));
          }
        }
        s.appendChild(this.serializeNodeInner(o, n));
      }),
      r
    );
  }
  serializeNodeInner(e, n) {
    let { dom: r, contentDOM: s } = fi(
      sl(n),
      this.nodes[e.type.name](e),
      null,
      e.attrs,
    );
    if (s) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, n, s);
    }
    return r;
  }
  serializeNode(e, n = {}) {
    let r = this.serializeNodeInner(e, n);
    for (let s = e.marks.length - 1; s >= 0; s--) {
      let i = this.serializeMark(e.marks[s], e.isInline, n);
      i && ((i.contentDOM || i.dom).appendChild(r), (r = i.dom));
    }
    return r;
  }
  serializeMark(e, n, r = {}) {
    let s = this.marks[e.type.name];
    return s && fi(sl(r), s(e, n), null, e.attrs);
  }
  static renderSpec(e, n, r = null, s) {
    return fi(e, n, r, s);
  }
  static fromSchema(e) {
    return (
      e.cached.domSerializer ||
      (e.cached.domSerializer = new jo(
        this.nodesFromSchema(e),
        this.marksFromSchema(e),
      ))
    );
  }
  static nodesFromSchema(e) {
    let n = Xu(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  static marksFromSchema(e) {
    return Xu(e.marks);
  }
}
function Xu(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function sl(t) {
  return t.document || window.document;
}
const Zu = new WeakMap();
function Yy(t) {
  let e = Zu.get(t);
  return e === void 0 && Zu.set(t, (e = Xy(t))), e;
}
function Xy(t) {
  let e = null;
  function n(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string") e || (e = []), e.push(r);
        else for (let s = 0; s < r.length; s++) n(r[s]);
      else for (let s in r) n(r[s]);
  }
  return n(t), e;
}
function fi(t, e, n, r) {
  if (typeof e == "string") return { dom: t.createTextNode(e) };
  if (e.nodeType != null) return { dom: e };
  if (e.dom && e.dom.nodeType != null) return e;
  let s = e[0],
    i;
  if (typeof s != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (i = Yy(r)) && i.indexOf(e) > -1)
    throw new RangeError(
      "Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.",
    );
  let o = s.indexOf(" ");
  o > 0 && ((n = s.slice(0, o)), (s = s.slice(o + 1)));
  let l,
    a = n ? t.createElementNS(n, s) : t.createElement(s),
    c = e[1],
    u = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    u = 2;
    for (let d in c)
      if (c[d] != null) {
        let h = d.indexOf(" ");
        h > 0
          ? a.setAttributeNS(d.slice(0, h), d.slice(h + 1), c[d])
          : a.setAttribute(d, c[d]);
      }
  }
  for (let d = u; d < e.length; d++) {
    let h = e[d];
    if (h === 0) {
      if (d < e.length - 1 || d > u)
        throw new RangeError(
          "Content hole must be the only child of its parent node",
        );
      return { dom: a, contentDOM: a };
    } else {
      let { dom: p, contentDOM: y } = fi(t, h, n, r);
      if ((a.appendChild(p), y)) {
        if (l) throw new RangeError("Multiple content holes");
        l = y;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const Kh = 65535,
  qh = Math.pow(2, 16);
function Zy(t, e) {
  return t + e * qh;
}
function ed(t) {
  return t & Kh;
}
function e2(t) {
  return (t - (t & Kh)) / qh;
}
const Jh = 1,
  Gh = 2,
  hi = 4,
  Qh = 8;
class Zl {
  constructor(e, n, r) {
    (this.pos = e), (this.delInfo = n), (this.recover = r);
  }
  get deleted() {
    return (this.delInfo & Qh) > 0;
  }
  get deletedBefore() {
    return (this.delInfo & (Jh | hi)) > 0;
  }
  get deletedAfter() {
    return (this.delInfo & (Gh | hi)) > 0;
  }
  get deletedAcross() {
    return (this.delInfo & hi) > 0;
  }
}
class bt {
  constructor(e, n = !1) {
    if (((this.ranges = e), (this.inverted = n), !e.length && bt.empty))
      return bt.empty;
  }
  recover(e) {
    let n = 0,
      r = ed(e);
    if (!this.inverted)
      for (let s = 0; s < r; s++)
        n += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
    return this.ranges[r * 3] + n + e2(e);
  }
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  map(e, n = 1) {
    return this._map(e, n, !0);
  }
  _map(e, n, r) {
    let s = 0,
      i = this.inverted ? 2 : 1,
      o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? s : 0);
      if (a > e) break;
      let c = this.ranges[l + i],
        u = this.ranges[l + o],
        d = a + c;
      if (e <= d) {
        let h = c ? (e == a ? -1 : e == d ? 1 : n) : n,
          p = a + s + (h < 0 ? 0 : u);
        if (r) return p;
        let y = e == (n < 0 ? a : d) ? null : Zy(l / 3, e - a),
          b = e == a ? Gh : e == d ? Jh : hi;
        return (n < 0 ? e != a : e != d) && (b |= Qh), new Zl(p, b, y);
      }
      s += u - c;
    }
    return r ? e + s : new Zl(e + s, 0, null);
  }
  touches(e, n) {
    let r = 0,
      s = ed(n),
      i = this.inverted ? 2 : 1,
      o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e) break;
      let c = this.ranges[l + i],
        u = a + c;
      if (e <= u && l == s * 3) return !0;
      r += this.ranges[l + o] - c;
    }
    return !1;
  }
  forEach(e) {
    let n = this.inverted ? 2 : 1,
      r = this.inverted ? 1 : 2;
    for (let s = 0, i = 0; s < this.ranges.length; s += 3) {
      let o = this.ranges[s],
        l = o - (this.inverted ? i : 0),
        a = o + (this.inverted ? 0 : i),
        c = this.ranges[s + n],
        u = this.ranges[s + r];
      e(l, l + c, a, a + u), (i += u - c);
    }
  }
  invert() {
    return new bt(this.ranges, !this.inverted);
  }
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  static offset(e) {
    return e == 0 ? bt.empty : new bt(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
bt.empty = new bt([]);
class Cs {
  constructor(e, n, r = 0, s = e ? e.length : 0) {
    (this.mirror = n),
      (this.from = r),
      (this.to = s),
      (this._maps = e || []),
      (this.ownData = !(e || n));
  }
  get maps() {
    return this._maps;
  }
  slice(e = 0, n = this.maps.length) {
    return new Cs(this._maps, this.mirror, e, n);
  }
  appendMap(e, n) {
    this.ownData ||
      ((this._maps = this._maps.slice()),
      (this.mirror = this.mirror && this.mirror.slice()),
      (this.ownData = !0)),
      (this.to = this._maps.push(e)),
      n != null && this.setMirror(this._maps.length - 1, n);
  }
  appendMapping(e) {
    for (let n = 0, r = this._maps.length; n < e._maps.length; n++) {
      let s = e.getMirror(n);
      this.appendMap(e._maps[n], s != null && s < n ? r + s : void 0);
    }
  }
  getMirror(e) {
    if (this.mirror) {
      for (let n = 0; n < this.mirror.length; n++)
        if (this.mirror[n] == e) return this.mirror[n + (n % 2 ? -1 : 1)];
    }
  }
  setMirror(e, n) {
    this.mirror || (this.mirror = []), this.mirror.push(e, n);
  }
  appendMappingInverted(e) {
    for (
      let n = e.maps.length - 1, r = this._maps.length + e._maps.length;
      n >= 0;
      n--
    ) {
      let s = e.getMirror(n);
      this.appendMap(
        e._maps[n].invert(),
        s != null && s > n ? r - s - 1 : void 0,
      );
    }
  }
  invert() {
    let e = new Cs();
    return e.appendMappingInverted(this), e;
  }
  map(e, n = 1) {
    if (this.mirror) return this._map(e, n, !0);
    for (let r = this.from; r < this.to; r++) e = this._maps[r].map(e, n);
    return e;
  }
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  _map(e, n, r) {
    let s = 0;
    for (let i = this.from; i < this.to; i++) {
      let o = this._maps[i],
        l = o.mapResult(e, n);
      if (l.recover != null) {
        let a = this.getMirror(i);
        if (a != null && a > i && a < this.to) {
          (i = a), (e = this._maps[a].recover(l.recover));
          continue;
        }
      }
      (s |= l.delInfo), (e = l.pos);
    }
    return r ? e : new Zl(e, s, null);
  }
}
const il = Object.create(null);
class it {
  getMap() {
    return bt.empty;
  }
  merge(e) {
    return null;
  }
  static fromJSON(e, n) {
    if (!n || !n.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = il[n.stepType];
    if (!r) throw new RangeError(`No step type ${n.stepType} defined`);
    return r.fromJSON(e, n);
  }
  static jsonID(e, n) {
    if (e in il) throw new RangeError("Duplicate use of step JSON ID " + e);
    return (il[e] = n), (n.prototype.jsonID = e), n;
  }
}
class De {
  constructor(e, n) {
    (this.doc = e), (this.failed = n);
  }
  static ok(e) {
    return new De(e, null);
  }
  static fail(e) {
    return new De(null, e);
  }
  static fromReplace(e, n, r, s) {
    try {
      return De.ok(e.replace(n, r, s));
    } catch (i) {
      if (i instanceof Pi) return De.fail(i.message);
      throw i;
    }
  }
}
function ec(t, e, n) {
  let r = [];
  for (let s = 0; s < t.childCount; s++) {
    let i = t.child(s);
    i.content.size && (i = i.copy(ec(i.content, e, i))),
      i.isInline && (i = e(i, n, s)),
      r.push(i);
  }
  return H.fromArray(r);
}
class En extends it {
  constructor(e, n, r) {
    super(), (this.from = e), (this.to = n), (this.mark = r);
  }
  apply(e) {
    let n = e.slice(this.from, this.to),
      r = e.resolve(this.from),
      s = r.node(r.sharedDepth(this.to)),
      i = new J(
        ec(
          n.content,
          (o, l) =>
            !o.isAtom || !l.type.allowsMarkType(this.mark.type)
              ? o
              : o.mark(this.mark.addToSet(o.marks)),
          s,
        ),
        n.openStart,
        n.openEnd,
      );
    return De.fromReplace(e, this.from, this.to, i);
  }
  invert() {
    return new Kt(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1),
      r = e.mapResult(this.to, -1);
    return (n.deleted && r.deleted) || n.pos >= r.pos
      ? null
      : new En(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof En &&
      e.mark.eq(this.mark) &&
      this.from <= e.to &&
      this.to >= e.from
      ? new En(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark)
      : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to,
    };
  }
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new En(n.from, n.to, e.markFromJSON(n.mark));
  }
}
it.jsonID("addMark", En);
class Kt extends it {
  constructor(e, n, r) {
    super(), (this.from = e), (this.to = n), (this.mark = r);
  }
  apply(e) {
    let n = e.slice(this.from, this.to),
      r = new J(
        ec(n.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e),
        n.openStart,
        n.openEnd,
      );
    return De.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new En(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1),
      r = e.mapResult(this.to, -1);
    return (n.deleted && r.deleted) || n.pos >= r.pos
      ? null
      : new Kt(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Kt &&
      e.mark.eq(this.mark) &&
      this.from <= e.to &&
      this.to >= e.from
      ? new Kt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark)
      : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to,
    };
  }
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Kt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
it.jsonID("removeMark", Kt);
class An extends it {
  constructor(e, n) {
    super(), (this.pos = e), (this.mark = n);
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n) return De.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return De.fromReplace(
      e,
      this.pos,
      this.pos + 1,
      new J(H.from(r), 0, n.isLeaf ? 0 : 1),
    );
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let s = 0; s < n.marks.length; s++)
          if (!n.marks[s].isInSet(r)) return new An(this.pos, n.marks[s]);
        return new An(this.pos, this.mark);
      }
    }
    return new Or(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new An(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new An(n.pos, e.markFromJSON(n.mark));
  }
}
it.jsonID("addNodeMark", An);
class Or extends it {
  constructor(e, n) {
    super(), (this.pos = e), (this.mark = n);
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n) return De.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return De.fromReplace(
      e,
      this.pos,
      this.pos + 1,
      new J(H.from(r), 0, n.isLeaf ? 0 : 1),
    );
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks)
      ? this
      : new An(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Or(n.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: "removeNodeMark",
      pos: this.pos,
      mark: this.mark.toJSON(),
    };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new Or(n.pos, e.markFromJSON(n.mark));
  }
}
it.jsonID("removeNodeMark", Or);
class We extends it {
  constructor(e, n, r, s = !1) {
    super(),
      (this.from = e),
      (this.to = n),
      (this.slice = r),
      (this.structure = s);
  }
  apply(e) {
    return this.structure && ea(e, this.from, this.to)
      ? De.fail("Structure replace would overwrite content")
      : De.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new bt([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new We(
      this.from,
      this.from + this.slice.size,
      e.slice(this.from, this.to),
    );
  }
  map(e) {
    let n = e.mapResult(this.from, 1),
      r = e.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross
      ? null
      : new We(n.pos, Math.max(n.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof We) || e.structure || this.structure) return null;
    if (
      this.from + this.slice.size == e.from &&
      !this.slice.openEnd &&
      !e.slice.openStart
    ) {
      let n =
        this.slice.size + e.slice.size == 0
          ? J.empty
          : new J(
              this.slice.content.append(e.slice.content),
              this.slice.openStart,
              e.slice.openEnd,
            );
      return new We(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n =
        this.slice.size + e.slice.size == 0
          ? J.empty
          : new J(
              e.slice.content.append(this.slice.content),
              e.slice.openStart,
              this.slice.openEnd,
            );
      return new We(e.from, this.to, n, this.structure);
    } else return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return (
      this.slice.size && (e.slice = this.slice.toJSON()),
      this.structure && (e.structure = !0),
      e
    );
  }
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new We(n.from, n.to, J.fromJSON(e, n.slice), !!n.structure);
  }
}
it.jsonID("replace", We);
class Ue extends it {
  constructor(e, n, r, s, i, o, l = !1) {
    super(),
      (this.from = e),
      (this.to = n),
      (this.gapFrom = r),
      (this.gapTo = s),
      (this.slice = i),
      (this.insert = o),
      (this.structure = l);
  }
  apply(e) {
    if (
      this.structure &&
      (ea(e, this.from, this.gapFrom) || ea(e, this.gapTo, this.to))
    )
      return De.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd) return De.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r
      ? De.fromReplace(e, this.from, this.to, r)
      : De.fail("Content does not fit in gap");
  }
  getMap() {
    return new bt([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert,
    ]);
  }
  invert(e) {
    let n = this.gapTo - this.gapFrom;
    return new Ue(
      this.from,
      this.from + this.slice.size + n,
      this.from + this.insert,
      this.from + this.insert + n,
      e
        .slice(this.from, this.to)
        .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
      this.gapFrom - this.from,
      this.structure,
    );
  }
  map(e) {
    let n = e.mapResult(this.from, 1),
      r = e.mapResult(this.to, -1),
      s = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1),
      i = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return (n.deletedAcross && r.deletedAcross) || s < n.pos || i > r.pos
      ? null
      : new Ue(n.pos, r.pos, s, i, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert,
    };
    return (
      this.slice.size && (e.slice = this.slice.toJSON()),
      this.structure && (e.structure = !0),
      e
    );
  }
  static fromJSON(e, n) {
    if (
      typeof n.from != "number" ||
      typeof n.to != "number" ||
      typeof n.gapFrom != "number" ||
      typeof n.gapTo != "number" ||
      typeof n.insert != "number"
    )
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new Ue(
      n.from,
      n.to,
      n.gapFrom,
      n.gapTo,
      J.fromJSON(e, n.slice),
      n.insert,
      !!n.structure,
    );
  }
}
it.jsonID("replaceAround", Ue);
function ea(t, e, n) {
  let r = t.resolve(e),
    s = n - e,
    i = r.depth;
  for (; s > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount; ) i--, s--;
  if (s > 0) {
    let o = r.node(i).maybeChild(r.indexAfter(i));
    for (; s > 0; ) {
      if (!o || o.isLeaf) return !0;
      (o = o.firstChild), s--;
    }
  }
  return !1;
}
function t2(t, e, n, r) {
  let s = [],
    i = [],
    o,
    l;
  t.doc.nodesBetween(e, n, (a, c, u) => {
    if (!a.isInline) return;
    let d = a.marks;
    if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
      let h = Math.max(c, e),
        p = Math.min(c + a.nodeSize, n),
        y = r.addToSet(d);
      for (let b = 0; b < d.length; b++)
        d[b].isInSet(y) ||
          (o && o.to == h && o.mark.eq(d[b])
            ? (o.to = p)
            : s.push((o = new Kt(h, p, d[b]))));
      l && l.to == h ? (l.to = p) : i.push((l = new En(h, p, r)));
    }
  }),
    s.forEach((a) => t.step(a)),
    i.forEach((a) => t.step(a));
}
function n2(t, e, n, r) {
  let s = [],
    i = 0;
  t.doc.nodesBetween(e, n, (o, l) => {
    if (!o.isInline) return;
    i++;
    let a = null;
    if (r instanceof Oo) {
      let c = o.marks,
        u;
      for (; (u = r.isInSet(c)); )
        (a || (a = [])).push(u), (c = u.removeFromSet(c));
    } else r ? r.isInSet(o.marks) && (a = [r]) : (a = o.marks);
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, n);
      for (let u = 0; u < a.length; u++) {
        let d = a[u],
          h;
        for (let p = 0; p < s.length; p++) {
          let y = s[p];
          y.step == i - 1 && d.eq(s[p].style) && (h = y);
        }
        h
          ? ((h.to = c), (h.step = i))
          : s.push({ style: d, from: Math.max(l, e), to: c, step: i });
      }
    }
  }),
    s.forEach((o) => t.step(new Kt(o.from, o.to, o.style)));
}
function tc(t, e, n, r = n.contentMatch, s = !0) {
  let i = t.doc.nodeAt(e),
    o = [],
    l = e + 1;
  for (let a = 0; a < i.childCount; a++) {
    let c = i.child(a),
      u = l + c.nodeSize,
      d = r.matchType(c.type);
    if (!d) o.push(new We(l, u, J.empty));
    else {
      r = d;
      for (let h = 0; h < c.marks.length; h++)
        n.allowsMarkType(c.marks[h].type) || t.step(new Kt(l, u, c.marks[h]));
      if (s && c.isText && n.whitespace != "pre") {
        let h,
          p = /\r?\n|\r/g,
          y;
        for (; (h = p.exec(c.text)); )
          y ||
            (y = new J(
              H.from(n.schema.text(" ", n.allowedMarks(c.marks))),
              0,
              0,
            )),
            o.push(new We(l + h.index, l + h.index + h[0].length, y));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(H.empty, !0);
    t.replace(l, l, new J(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--) t.step(o[a]);
}
function r2(t, e, n) {
  return (
    (e == 0 || t.canReplace(e, t.childCount)) &&
    (n == t.childCount || t.canReplace(0, n))
  );
}
function Lr(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth; ; --r) {
    let s = t.$from.node(r),
      i = t.$from.index(r),
      o = t.$to.indexAfter(r);
    if (r < t.depth && s.canReplace(i, o, n)) return r;
    if (r == 0 || s.type.spec.isolating || !r2(s, i, o)) break;
  }
  return null;
}
function s2(t, e, n) {
  let { $from: r, $to: s, depth: i } = e,
    o = r.before(i + 1),
    l = s.after(i + 1),
    a = o,
    c = l,
    u = H.empty,
    d = 0;
  for (let y = i, b = !1; y > n; y--)
    b || r.index(y) > 0
      ? ((b = !0), (u = H.from(r.node(y).copy(u))), d++)
      : a--;
  let h = H.empty,
    p = 0;
  for (let y = i, b = !1; y > n; y--)
    b || s.after(y + 1) < s.end(y)
      ? ((b = !0), (h = H.from(s.node(y).copy(h))), p++)
      : c++;
  t.step(new Ue(a, c, o, l, new J(u.append(h), d, p), u.size - d, !0));
}
function nc(t, e, n = null, r = t) {
  let s = i2(t, e),
    i = s && o2(r, e);
  return i ? s.map(td).concat({ type: e, attrs: n }).concat(i.map(td)) : null;
}
function td(t) {
  return { type: t, attrs: null };
}
function i2(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t,
    i = n.contentMatchAt(r).findWrapping(e);
  if (!i) return null;
  let o = i.length ? i[0] : e;
  return n.canReplaceWith(r, s, o) ? i : null;
}
function o2(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t,
    i = n.child(r),
    o = e.contentMatch.findWrapping(i.type);
  if (!o) return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < s; c++) a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function l2(t, e, n) {
  let r = H.empty;
  for (let o = n.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = n[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError(
          "Wrapper type given to Transform.wrap does not form valid content of its parent wrapper",
        );
    }
    r = H.from(n[o].type.create(n[o].attrs, r));
  }
  let s = e.start,
    i = e.end;
  t.step(new Ue(s, i, s, i, new J(r, 0, 0), n.length, !0));
}
function a2(t, e, n, r, s) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let i = t.steps.length;
  t.doc.nodesBetween(e, n, (o, l) => {
    let a = typeof s == "function" ? s(o) : s;
    if (
      o.isTextblock &&
      !o.hasMarkup(r, a) &&
      c2(t.doc, t.mapping.slice(i).map(l), r)
    ) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let p = r.whitespace == "pre",
          y = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        p && !y ? (c = !1) : !p && y && (c = !0);
      }
      c === !1 && Xh(t, o, l, i),
        tc(t, t.mapping.slice(i).map(l, 1), r, void 0, c === null);
      let u = t.mapping.slice(i),
        d = u.map(l, 1),
        h = u.map(l + o.nodeSize, 1);
      return (
        t.step(
          new Ue(
            d,
            h,
            d + 1,
            h - 1,
            new J(H.from(r.create(a, null, o.marks)), 0, 0),
            1,
            !0,
          ),
        ),
        c === !0 && Yh(t, o, l, i),
        !1
      );
    }
  });
}
function Yh(t, e, n, r) {
  e.forEach((s, i) => {
    if (s.isText) {
      let o,
        l = /\r?\n|\r/g;
      for (; (o = l.exec(s.text)); ) {
        let a = t.mapping.slice(r).map(n + 1 + i + o.index);
        t.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function Xh(t, e, n, r) {
  e.forEach((s, i) => {
    if (s.type == s.type.schema.linebreakReplacement) {
      let o = t.mapping.slice(r).map(n + 1 + i);
      t.replaceWith(
        o,
        o + 1,
        e.type.schema.text(`
`),
      );
    }
  });
}
function c2(t, e, n) {
  let r = t.resolve(e),
    s = r.index();
  return r.parent.canReplaceWith(s, s + 1, n);
}
function u2(t, e, n, r, s) {
  let i = t.doc.nodeAt(e);
  if (!i) throw new RangeError("No node at given position");
  n || (n = i.type);
  let o = n.create(r, null, s || i.marks);
  if (i.isLeaf) return t.replaceWith(e, e + i.nodeSize, o);
  if (!n.validContent(i.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(
    new Ue(
      e,
      e + i.nodeSize,
      e + 1,
      e + i.nodeSize - 1,
      new J(H.from(o), 0, 0),
      1,
      !0,
    ),
  );
}
function dn(t, e, n = 1, r) {
  let s = t.resolve(e),
    i = s.depth - n,
    o = (r && r[r.length - 1]) || s.parent;
  if (
    i < 0 ||
    s.parent.type.spec.isolating ||
    !s.parent.canReplace(s.index(), s.parent.childCount) ||
    !o.type.validContent(
      s.parent.content.cutByIndex(s.index(), s.parent.childCount),
    )
  )
    return !1;
  for (let c = s.depth - 1, u = n - 2; c > i; c--, u--) {
    let d = s.node(c),
      h = s.index(c);
    if (d.type.spec.isolating) return !1;
    let p = d.content.cutByIndex(h, d.childCount),
      y = r && r[u + 1];
    y && (p = p.replaceChild(0, y.type.create(y.attrs)));
    let b = (r && r[u]) || d;
    if (!d.canReplace(h + 1, d.childCount) || !b.type.validContent(p))
      return !1;
  }
  let l = s.indexAfter(i),
    a = r && r[0];
  return s.node(i).canReplaceWith(l, l, a ? a.type : s.node(i + 1).type);
}
function d2(t, e, n = 1, r) {
  let s = t.doc.resolve(e),
    i = H.empty,
    o = H.empty;
  for (let l = s.depth, a = s.depth - n, c = n - 1; l > a; l--, c--) {
    i = H.from(s.node(l).copy(i));
    let u = r && r[c];
    o = H.from(u ? u.type.create(u.attrs, o) : s.node(l).copy(o));
  }
  t.step(new We(e, e, new J(i.append(o), n, n), !0));
}
function zn(t, e) {
  let n = t.resolve(e),
    r = n.index();
  return Zh(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function f2(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount),
    { linebreakReplacement: r } = t.type.schema;
  for (let s = 0; s < e.childCount; s++) {
    let i = e.child(s),
      o = i.type == r ? t.type.schema.nodes.text : i.type;
    if (((n = n.matchType(o)), !n || !t.type.allowsMarks(i.marks))) return !1;
  }
  return n.validEnd;
}
function Zh(t, e) {
  return !!(t && e && !t.isLeaf && f2(t, e));
}
function Po(t, e, n = -1) {
  let r = t.resolve(e);
  for (let s = r.depth; ; s--) {
    let i,
      o,
      l = r.index(s);
    if (
      (s == r.depth
        ? ((i = r.nodeBefore), (o = r.nodeAfter))
        : n > 0
          ? ((i = r.node(s + 1)), l++, (o = r.node(s).maybeChild(l)))
          : ((i = r.node(s).maybeChild(l - 1)), (o = r.node(s + 1))),
      i && !i.isTextblock && Zh(i, o) && r.node(s).canReplace(l, l + 1))
    )
      return e;
    if (s == 0) break;
    e = n < 0 ? r.before(s) : r.after(s);
  }
}
function h2(t, e, n) {
  let r = null,
    { linebreakReplacement: s } = t.doc.type.schema,
    i = t.doc.resolve(e - n),
    o = i.node().type;
  if (s && o.inlineContent) {
    let u = o.whitespace == "pre",
      d = !!o.contentMatch.matchType(s);
    u && !d ? (r = !1) : !u && d && (r = !0);
  }
  let l = t.steps.length;
  if (r === !1) {
    let u = t.doc.resolve(e + n);
    Xh(t, u.node(), u.before(), l);
  }
  o.inlineContent &&
    tc(t, e + n - 1, o, i.node().contentMatchAt(i.index()), r == null);
  let a = t.mapping.slice(l),
    c = a.map(e - n);
  if ((t.step(new We(c, a.map(e + n, -1), J.empty, !0)), r === !0)) {
    let u = t.doc.resolve(c);
    Yh(t, u.node(), u.before(), t.steps.length);
  }
  return t;
}
function p2(t, e, n) {
  let r = t.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), n)) return e;
  if (r.parentOffset == 0)
    for (let s = r.depth - 1; s >= 0; s--) {
      let i = r.index(s);
      if (r.node(s).canReplaceWith(i, i, n)) return r.before(s + 1);
      if (i > 0) return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let s = r.depth - 1; s >= 0; s--) {
      let i = r.indexAfter(s);
      if (r.node(s).canReplaceWith(i, i, n)) return r.after(s + 1);
      if (i < r.node(s).childCount) return null;
    }
  return null;
}
function ep(t, e, n) {
  let r = t.resolve(e);
  if (!n.content.size) return e;
  let s = n.content;
  for (let i = 0; i < n.openStart; i++) s = s.firstChild.content;
  for (let i = 1; i <= (n.openStart == 0 && n.size ? 2 : 1); i++)
    for (let o = r.depth; o >= 0; o--) {
      let l =
          o == r.depth
            ? 0
            : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2
              ? -1
              : 1,
        a = r.index(o) + (l > 0 ? 1 : 0),
        c = r.node(o),
        u = !1;
      if (i == 1) u = c.canReplace(a, a, s);
      else {
        let d = c.contentMatchAt(a).findWrapping(s.firstChild.type);
        u = d && c.canReplaceWith(a, a, d[0]);
      }
      if (u) return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  return null;
}
function Io(t, e, n = e, r = J.empty) {
  if (e == n && !r.size) return null;
  let s = t.resolve(e),
    i = t.resolve(n);
  return tp(s, i, r) ? new We(e, n, r) : new m2(s, i, r).fit();
}
function tp(t, e, n) {
  return (
    !n.openStart &&
    !n.openEnd &&
    t.start() == e.start() &&
    t.parent.canReplace(t.index(), e.index(), n.content)
  );
}
class m2 {
  constructor(e, n, r) {
    (this.$from = e),
      (this.$to = n),
      (this.unplaced = r),
      (this.frontier = []),
      (this.placed = H.empty);
    for (let s = 0; s <= e.depth; s++) {
      let i = e.node(s);
      this.frontier.push({
        type: i.type,
        match: i.contentMatchAt(e.indexAfter(s)),
      });
    }
    for (let s = e.depth; s > 0; s--)
      this.placed = H.from(e.node(s).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(),
      n = this.placed.size - this.depth - this.$from.depth,
      r = this.$from,
      s = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!s) return null;
    let i = this.placed,
      o = r.depth,
      l = s.depth;
    for (; o && l && i.childCount == 1; ) (i = i.firstChild.content), o--, l--;
    let a = new J(i, o, l);
    return e > -1
      ? new Ue(r.pos, e, this.$to.pos, this.$to.end(), a, n)
      : a.size || r.pos != this.$to.pos
        ? new We(r.pos, s.pos, a)
        : null;
  }
  findFittable() {
    let e = this.unplaced.openStart;
    for (
      let n = this.unplaced.content, r = 0, s = this.unplaced.openEnd;
      r < e;
      r++
    ) {
      let i = n.firstChild;
      if ((n.childCount > 1 && (s = 0), i.type.spec.isolating && s <= r)) {
        e = r;
        break;
      }
      n = i.content;
    }
    for (let n = 1; n <= 2; n++)
      for (let r = n == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let s,
          i = null;
        r
          ? ((i = ol(this.unplaced.content, r - 1).firstChild), (s = i.content))
          : (s = this.unplaced.content);
        let o = s.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l],
            u,
            d = null;
          if (
            n == 1 &&
            (o
              ? c.matchType(o.type) || (d = c.fillBefore(H.from(o), !1))
              : i && a.compatibleContent(i.type))
          )
            return { sliceDepth: r, frontierDepth: l, parent: i, inject: d };
          if (n == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: i, wrap: u };
          if (i && c.matchType(i.type)) break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced,
      s = ol(e, n);
    return !s.childCount || s.firstChild.isLeaf
      ? !1
      : ((this.unplaced = new J(
          e,
          n + 1,
          Math.max(r, s.size + n >= e.size - r ? n + 1 : 0),
        )),
        !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced,
      s = ol(e, n);
    if (s.childCount <= 1 && n > 0) {
      let i = e.size - n <= n + s.size;
      this.unplaced = new J(qr(e, n - 1, 1), n - 1, i ? n - 1 : r);
    } else this.unplaced = new J(qr(e, n, 1), n, r);
  }
  placeNodes({
    sliceDepth: e,
    frontierDepth: n,
    parent: r,
    inject: s,
    wrap: i,
  }) {
    for (; this.depth > n; ) this.closeFrontierNode();
    if (i) for (let b = 0; b < i.length; b++) this.openFrontierNode(i[b]);
    let o = this.unplaced,
      l = r ? r.content : o.content,
      a = o.openStart - e,
      c = 0,
      u = [],
      { match: d, type: h } = this.frontier[n];
    if (s) {
      for (let b = 0; b < s.childCount; b++) u.push(s.child(b));
      d = d.matchFragment(s);
    }
    let p = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let b = l.child(c),
        x = d.matchType(b.type);
      if (!x) break;
      c++,
        (c > 1 || a == 0 || b.content.size) &&
          ((d = x),
          u.push(
            np(
              b.mark(h.allowedMarks(b.marks)),
              c == 1 ? a : 0,
              c == l.childCount ? p : -1,
            ),
          ));
    }
    let y = c == l.childCount;
    y || (p = -1),
      (this.placed = Jr(this.placed, n, H.from(u))),
      (this.frontier[n].match = d),
      y &&
        p < 0 &&
        r &&
        r.type == this.frontier[this.depth].type &&
        this.frontier.length > 1 &&
        this.closeFrontierNode();
    for (let b = 0, x = l; b < p; b++) {
      let v = x.lastChild;
      this.frontier.push({
        type: v.type,
        match: v.contentMatchAt(v.childCount),
      }),
        (x = v.content);
    }
    this.unplaced = y
      ? e == 0
        ? J.empty
        : new J(qr(o.content, e - 1, 1), e - 1, p < 0 ? o.openEnd : e - 1)
      : new J(qr(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock) return -1;
    let e = this.frontier[this.depth],
      n;
    if (
      !e.type.isTextblock ||
      !ll(this.$to, this.$to.depth, e.type, e.match, !1) ||
      (this.$to.depth == this.depth &&
        (n = this.findCloseLevel(this.$to)) &&
        n.depth == this.depth)
    )
      return -1;
    let { depth: r } = this.$to,
      s = this.$to.after(r);
    for (; r > 1 && s == this.$to.end(--r); ) ++s;
    return s;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: s } = this.frontier[n],
        i = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)),
        o = ll(e, n, s, r, i);
      if (o) {
        for (let l = n - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l],
            u = ll(e, l, c, a, !0);
          if (!u || u.childCount) continue e;
        }
        return {
          depth: n,
          fit: o,
          move: i ? e.doc.resolve(e.after(n + 1)) : e,
        };
      }
    }
  }
  close(e) {
    let n = this.findCloseLevel(e);
    if (!n) return null;
    for (; this.depth > n.depth; ) this.closeFrontierNode();
    n.fit.childCount && (this.placed = Jr(this.placed, n.depth, n.fit)),
      (e = n.move);
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let s = e.node(r),
        i = s.type.contentMatch.fillBefore(s.content, !0, e.index(r));
      this.openFrontierNode(s.type, s.attrs, i);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let s = this.frontier[this.depth];
    (s.match = s.match.matchType(e)),
      (this.placed = Jr(this.placed, this.depth, H.from(e.create(n, r)))),
      this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(H.empty, !0);
    n.childCount && (this.placed = Jr(this.placed, this.frontier.length, n));
  }
}
function qr(t, e, n) {
  return e == 0
    ? t.cutByIndex(n, t.childCount)
    : t.replaceChild(0, t.firstChild.copy(qr(t.firstChild.content, e - 1, n)));
}
function Jr(t, e, n) {
  return e == 0
    ? t.append(n)
    : t.replaceChild(
        t.childCount - 1,
        t.lastChild.copy(Jr(t.lastChild.content, e - 1, n)),
      );
}
function ol(t, e) {
  for (let n = 0; n < e; n++) t = t.firstChild.content;
  return t;
}
function np(t, e, n) {
  if (e <= 0) return t;
  let r = t.content;
  return (
    e > 1 &&
      (r = r.replaceChild(
        0,
        np(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0),
      )),
    e > 0 &&
      ((r = t.type.contentMatch.fillBefore(r).append(r)),
      n <= 0 &&
        (r = r.append(
          t.type.contentMatch.matchFragment(r).fillBefore(H.empty, !0),
        ))),
    t.copy(r)
  );
}
function ll(t, e, n, r, s) {
  let i = t.node(e),
    o = s ? t.indexAfter(e) : t.index(e);
  if (o == i.childCount && !n.compatibleContent(i.type)) return null;
  let l = r.fillBefore(i.content, !0, o);
  return l && !g2(n, i.content, o) ? l : null;
}
function g2(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks)) return !0;
  return !1;
}
function y2(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function b2(t, e, n, r) {
  if (!r.size) return t.deleteRange(e, n);
  let s = t.doc.resolve(e),
    i = t.doc.resolve(n);
  if (tp(s, i, r)) return t.step(new We(e, n, r));
  let o = sp(s, t.doc.resolve(n));
  o[o.length - 1] == 0 && o.pop();
  let l = -(s.depth + 1);
  o.unshift(l);
  for (let h = s.depth, p = s.pos - 1; h > 0; h--, p--) {
    let y = s.node(h).type.spec;
    if (y.defining || y.definingAsContext || y.isolating) break;
    o.indexOf(h) > -1 ? (l = h) : s.before(h) == p && o.splice(1, 0, -h);
  }
  let a = o.indexOf(l),
    c = [],
    u = r.openStart;
  for (let h = r.content, p = 0; ; p++) {
    let y = h.firstChild;
    if ((c.push(y), p == r.openStart)) break;
    h = y.content;
  }
  for (let h = u - 1; h >= 0; h--) {
    let p = c[h],
      y = y2(p.type);
    if (y && !p.sameMarkup(s.node(Math.abs(l) - 1))) u = h;
    else if (y || !p.type.isTextblock) break;
  }
  for (let h = r.openStart; h >= 0; h--) {
    let p = (h + u + 1) % (r.openStart + 1),
      y = c[p];
    if (y)
      for (let b = 0; b < o.length; b++) {
        let x = o[(b + a) % o.length],
          v = !0;
        x < 0 && ((v = !1), (x = -x));
        let E = s.node(x - 1),
          R = s.index(x - 1);
        if (E.canReplaceWith(R, R, y.type, y.marks))
          return t.replace(
            s.before(x),
            v ? i.after(x) : n,
            new J(rp(r.content, 0, r.openStart, p), p, r.openEnd),
          );
      }
  }
  let d = t.steps.length;
  for (
    let h = o.length - 1;
    h >= 0 && (t.replace(e, n, r), !(t.steps.length > d));
    h--
  ) {
    let p = o[h];
    p < 0 || ((e = s.before(p)), (n = i.after(p)));
  }
}
function rp(t, e, n, r, s) {
  if (e < n) {
    let i = t.firstChild;
    t = t.replaceChild(0, i.copy(rp(i.content, e + 1, n, r, i)));
  }
  if (e > r) {
    let i = s.contentMatchAt(0),
      o = i.fillBefore(t).append(t);
    t = o.append(i.matchFragment(o).fillBefore(H.empty, !0));
  }
  return t;
}
function w2(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let s = p2(t.doc, e, r.type);
    s != null && (e = n = s);
  }
  t.replaceRange(e, n, new J(H.from(r), 0, 0));
}
function v2(t, e, n) {
  let r = t.doc.resolve(e),
    s = t.doc.resolve(n),
    i = sp(r, s);
  for (let o = 0; o < i.length; o++) {
    let l = i[o],
      a = o == i.length - 1;
    if ((a && l == 0) || r.node(l).type.contentMatch.validEnd)
      return t.delete(r.start(l), s.end(l));
    if (
      l > 0 &&
      (a || r.node(l - 1).canReplace(r.index(l - 1), s.indexAfter(l - 1)))
    )
      return t.delete(r.before(l), s.after(l));
  }
  for (let o = 1; o <= r.depth && o <= s.depth; o++)
    if (
      e - r.start(o) == r.depth - o &&
      n > r.end(o) &&
      s.end(o) - n != s.depth - o &&
      r.start(o - 1) == s.start(o - 1) &&
      r.node(o - 1).canReplace(r.index(o - 1), s.index(o - 1))
    )
      return t.delete(r.before(o), n);
  t.delete(e, n);
}
function sp(t, e) {
  let n = [],
    r = Math.min(t.depth, e.depth);
  for (let s = r; s >= 0; s--) {
    let i = t.start(s);
    if (
      i < t.pos - (t.depth - s) ||
      e.end(s) > e.pos + (e.depth - s) ||
      t.node(s).type.spec.isolating ||
      e.node(s).type.spec.isolating
    )
      break;
    (i == e.start(s) ||
      (s == t.depth &&
        s == e.depth &&
        t.parent.inlineContent &&
        e.parent.inlineContent &&
        s &&
        e.start(s - 1) == i - 1)) &&
      n.push(s);
  }
  return n;
}
class Sr extends it {
  constructor(e, n, r) {
    super(), (this.pos = e), (this.attr = n), (this.value = r);
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n) return De.fail("No node at attribute step's position");
    let r = Object.create(null);
    for (let i in n.attrs) r[i] = n.attrs[i];
    r[this.attr] = this.value;
    let s = n.type.create(r, null, n.marks);
    return De.fromReplace(
      e,
      this.pos,
      this.pos + 1,
      new J(H.from(s), 0, n.isLeaf ? 0 : 1),
    );
  }
  getMap() {
    return bt.empty;
  }
  invert(e) {
    return new Sr(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Sr(n.pos, this.attr, this.value);
  }
  toJSON() {
    return {
      stepType: "attr",
      pos: this.pos,
      attr: this.attr,
      value: this.value,
    };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new Sr(n.pos, n.attr, n.value);
  }
}
it.jsonID("attr", Sr);
class Es extends it {
  constructor(e, n) {
    super(), (this.attr = e), (this.value = n);
  }
  apply(e) {
    let n = Object.create(null);
    for (let s in e.attrs) n[s] = e.attrs[s];
    n[this.attr] = this.value;
    let r = e.type.create(n, e.content, e.marks);
    return De.ok(r);
  }
  getMap() {
    return bt.empty;
  }
  invert(e) {
    return new Es(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new Es(n.attr, n.value);
  }
}
it.jsonID("docAttr", Es);
let jr = class extends Error {};
jr = function t(e) {
  let n = Error.call(this, e);
  return (n.__proto__ = t.prototype), n;
};
jr.prototype = Object.create(Error.prototype);
jr.prototype.constructor = jr;
jr.prototype.name = "TransformError";
class ip {
  constructor(e) {
    (this.doc = e),
      (this.steps = []),
      (this.docs = []),
      (this.mapping = new Cs());
  }
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  step(e) {
    let n = this.maybeStep(e);
    if (n.failed) throw new jr(n.failed);
    return this;
  }
  maybeStep(e) {
    let n = e.apply(this.doc);
    return n.failed || this.addStep(e, n.doc), n;
  }
  get docChanged() {
    return this.steps.length > 0;
  }
  addStep(e, n) {
    this.docs.push(this.doc),
      this.steps.push(e),
      this.mapping.appendMap(e.getMap()),
      (this.doc = n);
  }
  replace(e, n = e, r = J.empty) {
    let s = Io(this.doc, e, n, r);
    return s && this.step(s), this;
  }
  replaceWith(e, n, r) {
    return this.replace(e, n, new J(H.from(r), 0, 0));
  }
  delete(e, n) {
    return this.replace(e, n, J.empty);
  }
  insert(e, n) {
    return this.replaceWith(e, e, n);
  }
  replaceRange(e, n, r) {
    return b2(this, e, n, r), this;
  }
  replaceRangeWith(e, n, r) {
    return w2(this, e, n, r), this;
  }
  deleteRange(e, n) {
    return v2(this, e, n), this;
  }
  lift(e, n) {
    return s2(this, e, n), this;
  }
  join(e, n = 1) {
    return h2(this, e, n), this;
  }
  wrap(e, n) {
    return l2(this, e, n), this;
  }
  setBlockType(e, n = e, r, s = null) {
    return a2(this, e, n, r, s), this;
  }
  setNodeMarkup(e, n, r = null, s) {
    return u2(this, e, n, r, s), this;
  }
  setNodeAttribute(e, n, r) {
    return this.step(new Sr(e, n, r)), this;
  }
  setDocAttribute(e, n) {
    return this.step(new Es(e, n)), this;
  }
  addNodeMark(e, n) {
    return this.step(new An(e, n)), this;
  }
  removeNodeMark(e, n) {
    if (!(n instanceof Te)) {
      let r = this.doc.nodeAt(e);
      if (!r) throw new RangeError("No node at position " + e);
      if (((n = n.isInSet(r.marks)), !n)) return this;
    }
    return this.step(new Or(e, n)), this;
  }
  split(e, n = 1, r) {
    return d2(this, e, n, r), this;
  }
  addMark(e, n, r) {
    return t2(this, e, n, r), this;
  }
  removeMark(e, n, r) {
    return n2(this, e, n, r), this;
  }
  clearIncompatible(e, n, r) {
    return tc(this, e, n, r), this;
  }
}
const al = Object.create(null);
class oe {
  constructor(e, n, r) {
    (this.$anchor = e),
      (this.$head = n),
      (this.ranges = r || [new op(e.min(n), e.max(n))]);
  }
  get anchor() {
    return this.$anchor.pos;
  }
  get head() {
    return this.$head.pos;
  }
  get from() {
    return this.$from.pos;
  }
  get to() {
    return this.$to.pos;
  }
  get $from() {
    return this.ranges[0].$from;
  }
  get $to() {
    return this.ranges[0].$to;
  }
  get empty() {
    let e = this.ranges;
    for (let n = 0; n < e.length; n++)
      if (e[n].$from.pos != e[n].$to.pos) return !1;
    return !0;
  }
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  replace(e, n = J.empty) {
    let r = n.content.lastChild,
      s = null;
    for (let l = 0; l < n.openEnd; l++) (s = r), (r = r.lastChild);
    let i = e.steps.length,
      o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l],
        u = e.mapping.slice(i);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? J.empty : n),
        l == 0 && sd(e, i, (r ? r.isInline : s && s.isTextblock) ? -1 : 1);
    }
  }
  replaceWith(e, n) {
    let r = e.steps.length,
      s = this.ranges;
    for (let i = 0; i < s.length; i++) {
      let { $from: o, $to: l } = s[i],
        a = e.mapping.slice(r),
        c = a.map(o.pos),
        u = a.map(l.pos);
      i
        ? e.deleteRange(c, u)
        : (e.replaceRangeWith(c, u, n), sd(e, r, n.isInline ? -1 : 1));
    }
  }
  static findFrom(e, n, r = !1) {
    let s = e.parent.inlineContent
      ? new re(e)
      : hr(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (s) return s;
    for (let i = e.depth - 1; i >= 0; i--) {
      let o =
        n < 0
          ? hr(e.node(0), e.node(i), e.before(i + 1), e.index(i), n, r)
          : hr(e.node(0), e.node(i), e.after(i + 1), e.index(i) + 1, n, r);
      if (o) return o;
    }
    return null;
  }
  static near(e, n = 1) {
    return this.findFrom(e, n) || this.findFrom(e, -n) || new xt(e.node(0));
  }
  static atStart(e) {
    return hr(e, e, 0, 0, 1) || new xt(e);
  }
  static atEnd(e) {
    return hr(e, e, e.content.size, e.childCount, -1) || new xt(e);
  }
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = al[n.type];
    if (!r) throw new RangeError(`No selection type ${n.type} defined`);
    return r.fromJSON(e, n);
  }
  static jsonID(e, n) {
    if (e in al)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return (al[e] = n), (n.prototype.jsonID = e), n;
  }
  getBookmark() {
    return re.between(this.$anchor, this.$head).getBookmark();
  }
}
oe.prototype.visible = !0;
class op {
  constructor(e, n) {
    (this.$from = e), (this.$to = n);
  }
}
let nd = !1;
function rd(t) {
  !nd &&
    !t.parent.inlineContent &&
    ((nd = !0),
    console.warn(
      "TextSelection endpoint not pointing into a node with inline content (" +
        t.parent.type.name +
        ")",
    ));
}
class re extends oe {
  constructor(e, n = e) {
    rd(e), rd(n), super(e, n);
  }
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    if (!r.parent.inlineContent) return oe.near(r);
    let s = e.resolve(n.map(this.anchor));
    return new re(s.parent.inlineContent ? s : r, r);
  }
  replace(e, n = J.empty) {
    if ((super.replace(e, n), n == J.empty)) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof re && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Lo(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  static fromJSON(e, n) {
    if (typeof n.anchor != "number" || typeof n.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new re(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    let s = e.resolve(n);
    return new this(s, r == n ? s : e.resolve(r));
  }
  static between(e, n, r) {
    let s = e.pos - n.pos;
    if (((!r || s) && (r = s >= 0 ? 1 : -1), !n.parent.inlineContent)) {
      let i = oe.findFrom(n, r, !0) || oe.findFrom(n, -r, !0);
      if (i) n = i.$head;
      else return oe.near(n, r);
    }
    return (
      e.parent.inlineContent ||
        (s == 0
          ? (e = n)
          : ((e = (oe.findFrom(e, -r, !0) || oe.findFrom(e, r, !0)).$anchor),
            e.pos < n.pos != s < 0 && (e = n))),
      new re(e, n)
    );
  }
}
oe.jsonID("text", re);
class Lo {
  constructor(e, n) {
    (this.anchor = e), (this.head = n);
  }
  map(e) {
    return new Lo(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return re.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class ne extends oe {
  constructor(e) {
    let n = e.nodeAfter,
      r = e.node(0).resolve(e.pos + n.nodeSize);
    super(e, r), (this.node = n);
  }
  map(e, n) {
    let { deleted: r, pos: s } = n.mapResult(this.anchor),
      i = e.resolve(s);
    return r ? oe.near(i) : new ne(i);
  }
  content() {
    return new J(H.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof ne && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new rc(this.anchor);
  }
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new ne(e.resolve(n.anchor));
  }
  static create(e, n) {
    return new ne(e.resolve(n));
  }
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
ne.prototype.visible = !1;
oe.jsonID("node", ne);
class rc {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new Lo(r, r) : new rc(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor),
      r = n.nodeAfter;
    return r && ne.isSelectable(r) ? new ne(n) : oe.near(n);
  }
}
class xt extends oe {
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = J.empty) {
    if (n == J.empty) {
      e.delete(0, e.doc.content.size);
      let r = oe.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else super.replace(e, n);
  }
  toJSON() {
    return { type: "all" };
  }
  static fromJSON(e) {
    return new xt(e);
  }
  map(e) {
    return new xt(e);
  }
  eq(e) {
    return e instanceof xt;
  }
  getBookmark() {
    return x2;
  }
}
oe.jsonID("all", xt);
const x2 = {
  map() {
    return this;
  },
  resolve(t) {
    return new xt(t);
  },
};
function hr(t, e, n, r, s, i = !1) {
  if (e.inlineContent) return re.create(t, n);
  for (let o = r - (s > 0 ? 0 : 1); s > 0 ? o < e.childCount : o >= 0; o += s) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!i && ne.isSelectable(l))
        return ne.create(t, n - (s < 0 ? l.nodeSize : 0));
    } else {
      let a = hr(t, l, n + s, s < 0 ? l.childCount : 0, s, i);
      if (a) return a;
    }
    n += l.nodeSize * s;
  }
  return null;
}
function sd(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e) return;
  let s = t.steps[r];
  if (!(s instanceof We || s instanceof Ue)) return;
  let i = t.mapping.maps[r],
    o;
  i.forEach((l, a, c, u) => {
    o == null && (o = u);
  }),
    t.setSelection(oe.near(t.doc.resolve(o), n));
}
function id(t, e) {
  return !e || !t ? t : t.bind(e);
}
class Ks {
  constructor(e, n, r) {
    (this.name = e), (this.init = id(n.init, r)), (this.apply = id(n.apply, r));
  }
}
new Ks("doc", {
  init(t) {
    return t.doc || t.schema.topNodeType.createAndFill();
  },
  apply(t) {
    return t.doc;
  },
}),
  new Ks("selection", {
    init(t, e) {
      return t.selection || oe.atStart(e.doc);
    },
    apply(t) {
      return t.selection;
    },
  }),
  new Ks("storedMarks", {
    init(t) {
      return t.storedMarks || null;
    },
    apply(t, e, n, r) {
      return r.selection.$cursor ? t.storedMarks : null;
    },
  }),
  new Ks("scrollToSelection", {
    init() {
      return 0;
    },
    apply(t, e) {
      return t.scrolledIntoView ? e + 1 : e;
    },
  });
function lp(t, e, n) {
  for (let r in t) {
    let s = t[r];
    s instanceof Function
      ? (s = s.bind(e))
      : r == "handleDOMEvents" && (s = lp(s, e, {})),
      (n[r] = s);
  }
  return n;
}
class Fe {
  constructor(e) {
    (this.spec = e),
      (this.props = {}),
      e.props && lp(e.props, this, this.props),
      (this.key = e.key ? e.key.key : ap("plugin"));
  }
  getState(e) {
    return e[this.key];
  }
}
const cl = Object.create(null);
function ap(t) {
  return t in cl ? t + "$" + ++cl[t] : ((cl[t] = 0), t + "$");
}
class Ve {
  constructor(e = "key") {
    this.key = ap(e);
  }
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  getState(e) {
    return e[this.key];
  }
}
const lr = function (t) {
    for (var e = 0; ; e++) if (((t = t.previousSibling), !t)) return e;
  },
  cp = function (t, e, n, r) {
    return n && (od(t, e, n, r, -1) || od(t, e, n, r, 1));
  },
  k2 = /^(img|br|input|textarea|hr)$/i;
function od(t, e, n, r, s) {
  for (;;) {
    if (t == n && e == r) return !0;
    if (e == (s < 0 ? 0 : zi(t))) {
      let i = t.parentNode;
      if (
        !i ||
        i.nodeType != 1 ||
        sc(t) ||
        k2.test(t.nodeName) ||
        t.contentEditable == "false"
      )
        return !1;
      (e = lr(t) + (s < 0 ? 0 : 1)), (t = i);
    } else if (t.nodeType == 1) {
      if (
        ((t = t.childNodes[e + (s < 0 ? -1 : 0)]), t.contentEditable == "false")
      )
        return !1;
      e = s < 0 ? zi(t) : 0;
    } else return !1;
  }
}
function zi(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function _2(t, e, n) {
  for (let r = e == 0, s = e == zi(t); r || s; ) {
    if (t == n) return !0;
    let i = lr(t);
    if (((t = t.parentNode), !t)) return !1;
    (r = r && i == 0), (s = s && i == zi(t));
  }
}
function sc(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode);
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const up = function (t) {
  return (
    t.focusNode && cp(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset)
  );
};
function dp(t, e) {
  let n = document.createEvent("Event");
  return (
    n.initEvent("keydown", !0, !0), (n.keyCode = t), (n.key = n.code = e), n
  );
}
const Qt = typeof navigator < "u" ? navigator : null,
  ld = typeof document < "u" ? document : null,
  Dn = (Qt && Qt.userAgent) || "",
  ta = /Edge\/(\d+)/.exec(Dn),
  fp = /MSIE \d/.exec(Dn),
  na = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Dn),
  Ls = !!(fp || na || ta),
  hp = fp ? document.documentMode : na ? +na[1] : ta ? +ta[1] : 0,
  No = !Ls && /gecko\/(\d+)/i.test(Dn);
No && +(/Firefox\/(\d+)/.exec(Dn) || [0, 0])[1];
const ra = !Ls && /Chrome\/(\d+)/.exec(Dn),
  Bn = !!ra,
  pp = ra ? +ra[1] : 0,
  ar = !Ls && !!Qt && /Apple Computer/.test(Qt.vendor),
  ic = ar && (/Mobile\/\w+/.test(Dn) || (!!Qt && Qt.maxTouchPoints > 2)),
  Ct = ic || (Qt ? /Mac/.test(Qt.platform) : !1),
  S2 = Qt ? /Win/.test(Qt.platform) : !1,
  Ns = /Android \d/.test(Dn),
  oc = !!ld && "webkitFontSmoothing" in ld.documentElement.style,
  C2 = oc
    ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
    : 0;
function E2(t, e = null) {
  let n = t.domSelectionRange(),
    r = t.state.doc;
  if (!n.focusNode) return null;
  let s = t.docView.nearestDesc(n.focusNode),
    i = s && s.size == 0,
    o = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (o < 0) return null;
  let l = r.resolve(o),
    a,
    c;
  if (up(n)) {
    for (a = o; s && !s.node; ) s = s.parent;
    let d = s.node;
    if (
      s &&
      d.isAtom &&
      ne.isSelectable(d) &&
      s.parent &&
      !(d.isInline && _2(n.focusNode, n.focusOffset, s.dom))
    ) {
      let h = s.posBefore;
      c = new ne(o == h ? l : r.resolve(h));
    }
  } else {
    if (
      n instanceof t.dom.ownerDocument.defaultView.Selection &&
      n.rangeCount > 1
    ) {
      let d = o,
        h = o;
      for (let p = 0; p < n.rangeCount; p++) {
        let y = n.getRangeAt(p);
        (d = Math.min(
          d,
          t.docView.posFromDOM(y.startContainer, y.startOffset, 1),
        )),
          (h = Math.max(
            h,
            t.docView.posFromDOM(y.endContainer, y.endOffset, -1),
          ));
      }
      if (d < 0) return null;
      ([a, o] = h == t.state.selection.anchor ? [h, d] : [d, h]),
        (l = r.resolve(o));
    } else a = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (a < 0) return null;
  }
  let u = r.resolve(a);
  if (!c) {
    let d = e == "pointer" || (t.state.selection.head < l.pos && !i) ? 1 : -1;
    c = gp(t, u, l, d);
  }
  return c;
}
function mp(t) {
  return t.editable
    ? t.hasFocus()
    : R2(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function lc(t, e = !1) {
  let n = t.state.selection;
  if ((T2(t, n), !!mp(t))) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && Bn) {
      let r = t.domSelectionRange(),
        s = t.domObserver.currentSelection;
      if (
        r.anchorNode &&
        s.anchorNode &&
        cp(r.anchorNode, r.anchorOffset, s.anchorNode, s.anchorOffset)
      ) {
        (t.input.mouseDown.delayedSelectionSync = !0),
          t.domObserver.setCurSelection();
        return;
      }
    }
    if ((t.domObserver.disconnectSelection(), t.cursorWrapper)) M2(t);
    else {
      let { anchor: r, head: s } = n,
        i,
        o;
      ad &&
        !(n instanceof re) &&
        (n.$from.parent.inlineContent || (i = cd(t, n.from)),
        !n.empty && !n.$from.parent.inlineContent && (o = cd(t, n.to))),
        t.docView.setSelection(r, s, t, e),
        ad && (i && ud(i), o && ud(o)),
        n.visible
          ? t.dom.classList.remove("ProseMirror-hideselection")
          : (t.dom.classList.add("ProseMirror-hideselection"),
            "onselectionchange" in document && A2(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const ad = ar || (Bn && pp < 63);
function cd(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0),
    s = r < n.childNodes.length ? n.childNodes[r] : null,
    i = r ? n.childNodes[r - 1] : null;
  if (ar && s && s.contentEditable == "false") return ul(s);
  if (
    (!s || s.contentEditable == "false") &&
    (!i || i.contentEditable == "false")
  ) {
    if (s) return ul(s);
    if (i) return ul(i);
  }
}
function ul(t) {
  return (
    (t.contentEditable = "true"),
    ar && t.draggable && ((t.draggable = !1), (t.wasDraggable = !0)),
    t
  );
}
function ud(t) {
  (t.contentEditable = "false"),
    t.wasDraggable && ((t.draggable = !0), (t.wasDraggable = null));
}
function A2(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(),
    r = n.anchorNode,
    s = n.anchorOffset;
  e.addEventListener(
    "selectionchange",
    (t.input.hideSelectionGuard = () => {
      (n.anchorNode != r || n.anchorOffset != s) &&
        (e.removeEventListener("selectionchange", t.input.hideSelectionGuard),
        setTimeout(() => {
          (!mp(t) || t.state.selection.visible) &&
            t.dom.classList.remove("ProseMirror-hideselection");
        }, 20));
    }),
  );
}
function M2(t) {
  let e = t.domSelection(),
    n = document.createRange();
  if (!e) return;
  let r = t.cursorWrapper.dom,
    s = r.nodeName == "IMG";
  s ? n.setStart(r.parentNode, lr(r) + 1) : n.setStart(r, 0),
    n.collapse(!0),
    e.removeAllRanges(),
    e.addRange(n),
    !s &&
      !t.state.selection.visible &&
      Ls &&
      hp <= 11 &&
      ((r.disabled = !0), (r.disabled = !1));
}
function T2(t, e) {
  if (e instanceof ne) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc &&
      (dd(t), n && n.selectNode(), (t.lastSelectedViewDesc = n));
  } else dd(t);
}
function dd(t) {
  t.lastSelectedViewDesc &&
    (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(),
    (t.lastSelectedViewDesc = void 0));
}
function gp(t, e, n, r) {
  return (
    t.someProp("createSelectionBetween", (s) => s(t, e, n)) ||
    re.between(e, n, r)
  );
}
function R2(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode) return !1;
  try {
    return (
      t.dom.contains(
        e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode,
      ) &&
      (t.editable ||
        t.dom.contains(
          e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode,
        ))
    );
  } catch {
    return !1;
  }
}
function sa(t, e) {
  let { $anchor: n, $head: r } = t.selection,
    s = e > 0 ? n.max(r) : n.min(r),
    i = s.parent.inlineContent
      ? s.depth
        ? t.doc.resolve(e > 0 ? s.after() : s.before())
        : null
      : s;
  return i && oe.findFrom(i, e);
}
function vn(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function fd(t, e, n) {
  let r = t.state.selection;
  if (r instanceof re)
    if (n.indexOf("s") > -1) {
      let { $head: s } = r,
        i = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
      if (!i || i.isText || !i.isLeaf) return !1;
      let o = t.state.doc.resolve(s.pos + i.nodeSize * (e < 0 ? -1 : 1));
      return vn(t, new re(r.$anchor, o));
    } else if (r.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let s = sa(t.state, e);
        return s && s instanceof ne ? vn(t, s) : !1;
      } else if (!(Ct && n.indexOf("m") > -1)) {
        let s = r.$head,
          i = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter,
          o;
        if (!i || i.isText) return !1;
        let l = e < 0 ? s.pos - i.nodeSize : s.pos;
        return i.isAtom || ((o = t.docView.descAt(l)) && !o.contentDOM)
          ? ne.isSelectable(i)
            ? vn(t, new ne(e < 0 ? t.state.doc.resolve(s.pos - i.nodeSize) : s))
            : oc
              ? vn(t, new re(t.state.doc.resolve(e < 0 ? l : l + i.nodeSize)))
              : !1
          : !1;
      }
    } else return !1;
  else {
    if (r instanceof ne && r.node.isInline)
      return vn(t, new re(e > 0 ? r.$to : r.$from));
    {
      let s = sa(t.state, e);
      return s ? vn(t, s) : !1;
    }
  }
}
function Di(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function ls(t, e) {
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function ur(t, e) {
  return e < 0 ? O2(t) : j2(t);
}
function O2(t) {
  let e = t.domSelectionRange(),
    n = e.focusNode,
    r = e.focusOffset;
  if (!n) return;
  let s,
    i,
    o = !1;
  for (
    No && n.nodeType == 1 && r < Di(n) && ls(n.childNodes[r], -1) && (o = !0);
    ;

  )
    if (r > 0) {
      if (n.nodeType != 1) break;
      {
        let l = n.childNodes[r - 1];
        if (ls(l, -1)) (s = n), (i = --r);
        else if (l.nodeType == 3) (n = l), (r = n.nodeValue.length);
        else break;
      }
    } else {
      if (yp(n)) break;
      {
        let l = n.previousSibling;
        for (; l && ls(l, -1); )
          (s = n.parentNode), (i = lr(l)), (l = l.previousSibling);
        if (l) (n = l), (r = Di(n));
        else {
          if (((n = n.parentNode), n == t.dom)) break;
          r = 0;
        }
      }
    }
  o ? ia(t, n, r) : s && ia(t, s, i);
}
function j2(t) {
  let e = t.domSelectionRange(),
    n = e.focusNode,
    r = e.focusOffset;
  if (!n) return;
  let s = Di(n),
    i,
    o;
  for (;;)
    if (r < s) {
      if (n.nodeType != 1) break;
      let l = n.childNodes[r];
      if (ls(l, 1)) (i = n), (o = ++r);
      else break;
    } else {
      if (yp(n)) break;
      {
        let l = n.nextSibling;
        for (; l && ls(l, 1); )
          (i = l.parentNode), (o = lr(l) + 1), (l = l.nextSibling);
        if (l) (n = l), (r = 0), (s = Di(n));
        else {
          if (((n = n.parentNode), n == t.dom)) break;
          r = s = 0;
        }
      }
    }
  i && ia(t, i, o);
}
function yp(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function P2(t, e) {
  for (; t && e == t.childNodes.length && !sc(t); )
    (e = lr(t) + 1), (t = t.parentNode);
  for (; t && e < t.childNodes.length; ) {
    let n = t.childNodes[e];
    if (n.nodeType == 3) return n;
    if (n.nodeType == 1 && n.contentEditable == "false") break;
    (t = n), (e = 0);
  }
}
function I2(t, e) {
  for (; t && !e && !sc(t); ) (e = lr(t)), (t = t.parentNode);
  for (; t && e; ) {
    let n = t.childNodes[e - 1];
    if (n.nodeType == 3) return n;
    if (n.nodeType == 1 && n.contentEditable == "false") break;
    (t = n), (e = t.childNodes.length);
  }
}
function ia(t, e, n) {
  if (e.nodeType != 3) {
    let i, o;
    (o = P2(e, n))
      ? ((e = o), (n = 0))
      : (i = I2(e, n)) && ((e = i), (n = i.nodeValue.length));
  }
  let r = t.domSelection();
  if (!r) return;
  if (up(r)) {
    let i = document.createRange();
    i.setEnd(e, n), i.setStart(e, n), r.removeAllRanges(), r.addRange(i);
  } else r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: s } = t;
  setTimeout(() => {
    t.state == s && lc(t);
  }, 50);
}
function hd(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(Bn || S2) && n.parent.inlineContent) {
    let s = t.coordsAtPos(e);
    if (e > n.start()) {
      let i = t.coordsAtPos(e - 1),
        o = (i.top + i.bottom) / 2;
      if (o > s.top && o < s.bottom && Math.abs(i.left - s.left) > 1)
        return i.left < s.left ? "ltr" : "rtl";
    }
    if (e < n.end()) {
      let i = t.coordsAtPos(e + 1),
        o = (i.top + i.bottom) / 2;
      if (o > s.top && o < s.bottom && Math.abs(i.left - s.left) > 1)
        return i.left > s.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(t.dom).direction == "rtl" ? "rtl" : "ltr";
}
function pd(t, e, n) {
  let r = t.state.selection;
  if (
    (r instanceof re && !r.empty) ||
    n.indexOf("s") > -1 ||
    (Ct && n.indexOf("m") > -1)
  )
    return !1;
  let { $from: s, $to: i } = r;
  if (!s.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = sa(t.state, e);
    if (o && o instanceof ne) return vn(t, o);
  }
  if (!s.parent.inlineContent) {
    let o = e < 0 ? s : i,
      l = r instanceof xt ? oe.near(o, e) : oe.findFrom(o, e);
    return l ? vn(t, l) : !1;
  }
  return !1;
}
function md(t, e) {
  if (!(t.state.selection instanceof re)) return !0;
  let { $head: n, $anchor: r, empty: s } = t.state.selection;
  if (!n.sameParent(r)) return !0;
  if (!s) return !1;
  if (t.endOfTextblock(e > 0 ? "forward" : "backward")) return !0;
  let i = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
  if (i && !i.isText) {
    let o = t.state.tr;
    return (
      e < 0
        ? o.delete(n.pos - i.nodeSize, n.pos)
        : o.delete(n.pos, n.pos + i.nodeSize),
      t.dispatch(o),
      !0
    );
  }
  return !1;
}
function gd(t, e, n) {
  t.domObserver.stop(), (e.contentEditable = n), t.domObserver.start();
}
function L2(t) {
  if (!ar || t.state.selection.$head.parentOffset > 0) return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (
    e &&
    e.nodeType == 1 &&
    n == 0 &&
    e.firstChild &&
    e.firstChild.contentEditable == "false"
  ) {
    let r = e.firstChild;
    gd(t, r, "true"), setTimeout(() => gd(t, r, "false"), 20);
  }
  return !1;
}
function N2(t) {
  let e = "";
  return (
    t.ctrlKey && (e += "c"),
    t.metaKey && (e += "m"),
    t.altKey && (e += "a"),
    t.shiftKey && (e += "s"),
    e
  );
}
function z2(t, e) {
  let n = e.keyCode,
    r = N2(e);
  if (n == 8 || (Ct && n == 72 && r == "c")) return md(t, -1) || ur(t, -1);
  if ((n == 46 && !e.shiftKey) || (Ct && n == 68 && r == "c"))
    return md(t, 1) || ur(t, 1);
  if (n == 13 || n == 27) return !0;
  if (n == 37 || (Ct && n == 66 && r == "c")) {
    let s = n == 37 ? (hd(t, t.state.selection.from) == "ltr" ? -1 : 1) : -1;
    return fd(t, s, r) || ur(t, s);
  } else if (n == 39 || (Ct && n == 70 && r == "c")) {
    let s = n == 39 ? (hd(t, t.state.selection.from) == "ltr" ? 1 : -1) : 1;
    return fd(t, s, r) || ur(t, s);
  } else {
    if (n == 38 || (Ct && n == 80 && r == "c"))
      return pd(t, -1, r) || ur(t, -1);
    if (n == 40 || (Ct && n == 78 && r == "c"))
      return L2(t) || pd(t, 1, r) || ur(t, 1);
    if (r == (Ct ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function bp(t, e) {
  t.someProp("transformCopied", (p) => {
    e = p(e, t);
  });
  let n = [],
    { content: r, openStart: s, openEnd: i } = e;
  for (
    ;
    s > 1 && i > 1 && r.childCount == 1 && r.firstChild.childCount == 1;

  ) {
    s--, i--;
    let p = r.firstChild;
    n.push(p.type.name, p.attrs != p.type.defaultAttrs ? p.attrs : null),
      (r = p.content);
  }
  let o = t.someProp("clipboardSerializer") || jo.fromSchema(t.state.schema),
    l = Sp(),
    a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
  let c = a.firstChild,
    u,
    d = 0;
  for (; c && c.nodeType == 1 && (u = _p[c.nodeName.toLowerCase()]); ) {
    for (let p = u.length - 1; p >= 0; p--) {
      let y = l.createElement(u[p]);
      for (; a.firstChild; ) y.appendChild(a.firstChild);
      a.appendChild(y), d++;
    }
    c = a.firstChild;
  }
  c &&
    c.nodeType == 1 &&
    c.setAttribute(
      "data-pm-slice",
      `${s} ${i}${d ? ` -${d}` : ""} ${JSON.stringify(n)}`,
    );
  let h =
    t.someProp("clipboardTextSerializer", (p) => p(e, t)) ||
    e.content.textBetween(
      0,
      e.content.size,
      `

`,
    );
  return { dom: a, text: h, slice: e };
}
function wp(t, e, n, r, s) {
  let i = s.parent.type.spec.code,
    o,
    l;
  if (!n && !e) return null;
  let a = e && (r || i || !n);
  if (a) {
    if (
      (t.someProp("transformPastedText", (h) => {
        e = h(e, i || r, t);
      }),
      i)
    )
      return e
        ? new J(
            H.from(
              t.state.schema.text(
                e.replace(
                  /\r\n?/g,
                  `
`,
                ),
              ),
            ),
            0,
            0,
          )
        : J.empty;
    let d = t.someProp("clipboardTextParser", (h) => h(e, s, r, t));
    if (d) l = d;
    else {
      let h = s.marks(),
        { schema: p } = t.state,
        y = jo.fromSchema(p);
      (o = document.createElement("div")),
        e.split(/(?:\r\n?|\n)+/).forEach((b) => {
          let x = o.appendChild(document.createElement("p"));
          b && x.appendChild(y.serializeNode(p.text(b, h)));
        });
    }
  } else
    t.someProp("transformPastedHTML", (d) => {
      n = d(n, t);
    }),
      (o = $2(n)),
      oc && F2(o);
  let c = o && o.querySelector("[data-pm-slice]"),
    u =
      c &&
      /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
        c.getAttribute("data-pm-slice") || "",
      );
  if (u && u[3])
    for (let d = +u[3]; d > 0; d--) {
      let h = o.firstChild;
      for (; h && h.nodeType != 1; ) h = h.nextSibling;
      if (!h) break;
      o = h;
    }
  if (
    (l ||
      (l = (
        t.someProp("clipboardParser") ||
        t.someProp("domParser") ||
        ui.fromSchema(t.state.schema)
      ).parseSlice(o, {
        preserveWhitespace: !!(a || u),
        context: s,
        ruleFromNode(h) {
          return h.nodeName == "BR" &&
            !h.nextSibling &&
            h.parentNode &&
            !D2.test(h.parentNode.nodeName)
            ? { ignore: !0 }
            : null;
        },
      })),
    u)
  )
    l = V2(yd(l, +u[1], +u[2]), u[4]);
  else if (((l = J.maxOpen(B2(l.content, s), !0)), l.openStart || l.openEnd)) {
    let d = 0,
      h = 0;
    for (
      let p = l.content.firstChild;
      d < l.openStart && !p.type.spec.isolating;
      d++, p = p.firstChild
    );
    for (
      let p = l.content.lastChild;
      h < l.openEnd && !p.type.spec.isolating;
      h++, p = p.lastChild
    );
    l = yd(l, d, h);
  }
  return (
    t.someProp("transformPasted", (d) => {
      l = d(l, t);
    }),
    l
  );
}
const D2 =
  /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function B2(t, e) {
  if (t.childCount < 2) return t;
  for (let n = e.depth; n >= 0; n--) {
    let s = e.node(n).contentMatchAt(e.index(n)),
      i,
      o = [];
    if (
      (t.forEach((l) => {
        if (!o) return;
        let a = s.findWrapping(l.type),
          c;
        if (!a) return (o = null);
        if ((c = o.length && i.length && xp(a, i, l, o[o.length - 1], 0)))
          o[o.length - 1] = c;
        else {
          o.length && (o[o.length - 1] = kp(o[o.length - 1], i.length));
          let u = vp(l, a);
          o.push(u), (s = s.matchType(u.type)), (i = a);
        }
      }),
      o)
    )
      return H.from(o);
  }
  return t;
}
function vp(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--) t = e[r].create(null, H.from(t));
  return t;
}
function xp(t, e, n, r, s) {
  if (s < t.length && s < e.length && t[s] == e[s]) {
    let i = xp(t, e, n, r.lastChild, s + 1);
    if (i) return r.copy(r.content.replaceChild(r.childCount - 1, i));
    if (
      r
        .contentMatchAt(r.childCount)
        .matchType(s == t.length - 1 ? n.type : t[s + 1])
    )
      return r.copy(r.content.append(H.from(vp(n, t, s + 1))));
  }
}
function kp(t, e) {
  if (e == 0) return t;
  let n = t.content.replaceChild(t.childCount - 1, kp(t.lastChild, e - 1)),
    r = t.contentMatchAt(t.childCount).fillBefore(H.empty, !0);
  return t.copy(n.append(r));
}
function oa(t, e, n, r, s, i) {
  let o = e < 0 ? t.firstChild : t.lastChild,
    l = o.content;
  return (
    t.childCount > 1 && (i = 0),
    s < r - 1 && (l = oa(l, e, n, r, s + 1, i)),
    s >= n &&
      (l =
        e < 0
          ? o
              .contentMatchAt(0)
              .fillBefore(l, i <= s)
              .append(l)
          : l.append(o.contentMatchAt(o.childCount).fillBefore(H.empty, !0))),
    t.replaceChild(e < 0 ? 0 : t.childCount - 1, o.copy(l))
  );
}
function yd(t, e, n) {
  return (
    e < t.openStart &&
      (t = new J(
        oa(t.content, -1, e, t.openStart, 0, t.openEnd),
        e,
        t.openEnd,
      )),
    n < t.openEnd &&
      (t = new J(oa(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)),
    t
  );
}
const _p = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"],
};
let bd = null;
function Sp() {
  return bd || (bd = document.implementation.createHTMLDocument("title"));
}
let dl = null;
function H2(t) {
  let e = window.trustedTypes;
  return e
    ? (dl ||
        (dl = e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })),
      dl.createHTML(t))
    : t;
}
function $2(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = Sp().createElement("div"),
    r = /<([a-z][^>\s]+)/i.exec(t),
    s;
  if (
    ((s = r && _p[r[1].toLowerCase()]) &&
      (t =
        s.map((i) => "<" + i + ">").join("") +
        t +
        s
          .map((i) => "</" + i + ">")
          .reverse()
          .join("")),
    (n.innerHTML = H2(t)),
    s)
  )
    for (let i = 0; i < s.length; i++) n = n.querySelector(s[i]) || n;
  return n;
}
function F2(t) {
  let e = t.querySelectorAll(
    Bn ? "span:not([class]):not([style])" : "span.Apple-converted-space",
  );
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 &&
      r.textContent == " " &&
      r.parentNode &&
      r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function V2(t, e) {
  if (!t.size) return t;
  let n = t.content.firstChild.type.schema,
    r;
  try {
    r = JSON.parse(e);
  } catch {
    return t;
  }
  let { content: s, openStart: i, openEnd: o } = t;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = n.nodes[r[l]];
    if (!a || a.hasRequiredAttrs()) break;
    (s = H.from(a.create(r[l + 1], s))), i++, o++;
  }
  return new J(s, i, o);
}
const Lt = {},
  kt = {};
function Mn(t, e) {
  (t.input.lastSelectionOrigin = e), (t.input.lastSelectionTime = Date.now());
}
kt.keydown = (t, e) => {
  let n = e;
  if (
    ((t.input.shiftKey = n.keyCode == 16 || n.shiftKey),
    !Ep(t, n) &&
      ((t.input.lastKeyCode = n.keyCode),
      (t.input.lastKeyCodeTime = Date.now()),
      !(Ns && Bn && n.keyCode == 13)))
  )
    if (
      (n.keyCode != 229 && t.domObserver.forceFlush(),
      ic && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey)
    ) {
      let r = Date.now();
      (t.input.lastIOSEnter = r),
        (t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
          t.input.lastIOSEnter == r &&
            (t.someProp("handleKeyDown", (s) => s(t, dp(13, "Enter"))),
            (t.input.lastIOSEnter = 0));
        }, 200));
    } else
      t.someProp("handleKeyDown", (r) => r(t, n)) || z2(t, n)
        ? n.preventDefault()
        : Mn(t, "key");
};
kt.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
kt.keypress = (t, e) => {
  let n = e;
  if (Ep(t, n) || !n.charCode || (n.ctrlKey && !n.altKey) || (Ct && n.metaKey))
    return;
  if (t.someProp("handleKeyPress", (s) => s(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof re) || !r.$from.sameParent(r.$to)) {
    let s = String.fromCharCode(n.charCode);
    !/[\r\n]/.test(s) &&
      !t.someProp("handleTextInput", (i) => i(t, r.$from.pos, r.$to.pos, s)) &&
      t.dispatch(t.state.tr.insertText(s).scrollIntoView()),
      n.preventDefault();
  }
};
function zo(t) {
  return { left: t.clientX, top: t.clientY };
}
function W2(t, e) {
  let n = e.x - t.clientX,
    r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function ac(t, e, n, r, s) {
  if (r == -1) return !1;
  let i = t.state.doc.resolve(r);
  for (let o = i.depth + 1; o > 0; o--)
    if (
      t.someProp(e, (l) =>
        o > i.depth
          ? l(t, n, i.nodeAfter, i.before(o), s, !0)
          : l(t, n, i.node(o), i.before(o), s, !1),
      )
    )
      return !0;
  return !1;
}
function Cr(t, e, n) {
  if ((t.focused || t.focus(), t.state.selection.eq(e))) return;
  let r = t.state.tr.setSelection(e);
  r.setMeta("pointer", !0), t.dispatch(r);
}
function U2(t, e) {
  if (e == -1) return !1;
  let n = t.state.doc.resolve(e),
    r = n.nodeAfter;
  return r && r.isAtom && ne.isSelectable(r) ? (Cr(t, new ne(n)), !0) : !1;
}
function K2(t, e) {
  if (e == -1) return !1;
  let n = t.state.selection,
    r,
    s;
  n instanceof ne && (r = n.node);
  let i = t.state.doc.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let l = o > i.depth ? i.nodeAfter : i.node(o);
    if (ne.isSelectable(l)) {
      r &&
      n.$from.depth > 0 &&
      o >= n.$from.depth &&
      i.before(n.$from.depth + 1) == n.$from.pos
        ? (s = i.before(n.$from.depth))
        : (s = i.before(o));
      break;
    }
  }
  return s != null ? (Cr(t, ne.create(t.state.doc, s)), !0) : !1;
}
function q2(t, e, n, r, s) {
  return (
    ac(t, "handleClickOn", e, n, r) ||
    t.someProp("handleClick", (i) => i(t, e, r)) ||
    (s ? K2(t, n) : U2(t, n))
  );
}
function J2(t, e, n, r) {
  return (
    ac(t, "handleDoubleClickOn", e, n, r) ||
    t.someProp("handleDoubleClick", (s) => s(t, e, r))
  );
}
function G2(t, e, n, r) {
  return (
    ac(t, "handleTripleClickOn", e, n, r) ||
    t.someProp("handleTripleClick", (s) => s(t, e, r)) ||
    Q2(t, n, r)
  );
}
function Q2(t, e, n) {
  if (n.button != 0) return !1;
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? (Cr(t, re.create(r, 0, r.content.size)), !0) : !1;
  let s = r.resolve(e);
  for (let i = s.depth + 1; i > 0; i--) {
    let o = i > s.depth ? s.nodeAfter : s.node(i),
      l = s.before(i);
    if (o.inlineContent) Cr(t, re.create(r, l + 1, l + 1 + o.content.size));
    else if (ne.isSelectable(o)) Cr(t, ne.create(r, l));
    else continue;
    return !0;
  }
}
function cc(t) {
  return Bi(t);
}
const Cp = Ct ? "metaKey" : "ctrlKey";
Lt.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = cc(t),
    s = Date.now(),
    i = "singleClick";
  s - t.input.lastClick.time < 500 &&
    W2(n, t.input.lastClick) &&
    !n[Cp] &&
    (t.input.lastClick.type == "singleClick"
      ? (i = "doubleClick")
      : t.input.lastClick.type == "doubleClick" && (i = "tripleClick")),
    (t.input.lastClick = { time: s, x: n.clientX, y: n.clientY, type: i });
  let o = t.posAtCoords(zo(n));
  o &&
    (i == "singleClick"
      ? (t.input.mouseDown && t.input.mouseDown.done(),
        (t.input.mouseDown = new Y2(t, o, n, !!r)))
      : (i == "doubleClick" ? J2 : G2)(t, o.pos, o.inside, n)
        ? n.preventDefault()
        : Mn(t, "pointer"));
};
class Y2 {
  constructor(e, n, r, s) {
    (this.view = e),
      (this.pos = n),
      (this.event = r),
      (this.flushed = s),
      (this.delayedSelectionSync = !1),
      (this.mightDrag = null),
      (this.startDoc = e.state.doc),
      (this.selectNode = !!r[Cp]),
      (this.allowDefault = r.shiftKey);
    let i, o;
    if (n.inside > -1) (i = e.state.doc.nodeAt(n.inside)), (o = n.inside);
    else {
      let u = e.state.doc.resolve(n.pos);
      (i = u.parent), (o = u.depth ? u.before() : 0);
    }
    const l = s ? null : r.target,
      a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.dom.nodeType == 1 ? a.dom : null;
    let { selection: c } = e.state;
    ((r.button == 0 &&
      i.type.spec.draggable &&
      i.type.spec.selectable !== !1) ||
      (c instanceof ne && c.from <= o && c.to > o)) &&
      (this.mightDrag = {
        node: i,
        pos: o,
        addAttr: !!(this.target && !this.target.draggable),
        setUneditable: !!(
          this.target &&
          No &&
          !this.target.hasAttribute("contentEditable")
        ),
      }),
      this.target &&
        this.mightDrag &&
        (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
        (this.view.domObserver.stop(),
        this.mightDrag.addAttr && (this.target.draggable = !0),
        this.mightDrag.setUneditable &&
          setTimeout(() => {
            this.view.input.mouseDown == this &&
              this.target.setAttribute("contentEditable", "false");
          }, 20),
        this.view.domObserver.start()),
      e.root.addEventListener("mouseup", (this.up = this.up.bind(this))),
      e.root.addEventListener("mousemove", (this.move = this.move.bind(this))),
      Mn(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up),
      this.view.root.removeEventListener("mousemove", this.move),
      this.mightDrag &&
        this.target &&
        (this.view.domObserver.stop(),
        this.mightDrag.addAttr && this.target.removeAttribute("draggable"),
        this.mightDrag.setUneditable &&
          this.target.removeAttribute("contentEditable"),
        this.view.domObserver.start()),
      this.delayedSelectionSync && setTimeout(() => lc(this.view)),
      (this.view.input.mouseDown = null);
  }
  up(e) {
    if ((this.done(), !this.view.dom.contains(e.target))) return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(zo(e))),
      this.updateAllowDefault(e),
      this.allowDefault || !n
        ? Mn(this.view, "pointer")
        : q2(this.view, n.pos, n.inside, e, this.selectNode)
          ? e.preventDefault()
          : e.button == 0 &&
              (this.flushed ||
                (ar && this.mightDrag && !this.mightDrag.node.isAtom) ||
                (Bn &&
                  !this.view.state.selection.visible &&
                  Math.min(
                    Math.abs(n.pos - this.view.state.selection.from),
                    Math.abs(n.pos - this.view.state.selection.to),
                  ) <= 2))
            ? (Cr(this.view, oe.near(this.view.state.doc.resolve(n.pos))),
              e.preventDefault())
            : Mn(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e),
      Mn(this.view, "pointer"),
      e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault &&
      (Math.abs(this.event.x - e.clientX) > 4 ||
        Math.abs(this.event.y - e.clientY) > 4) &&
      (this.allowDefault = !0);
  }
}
Lt.touchstart = (t) => {
  (t.input.lastTouch = Date.now()), cc(t), Mn(t, "pointer");
};
Lt.touchmove = (t) => {
  (t.input.lastTouch = Date.now()), Mn(t, "pointer");
};
Lt.contextmenu = (t) => cc(t);
function Ep(t, e) {
  return t.composing
    ? !0
    : ar && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500
      ? ((t.input.compositionEndedAt = -2e8), !0)
      : !1;
}
const X2 = Ns ? 5e3 : -1;
kt.compositionstart = kt.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t,
      n = e.selection.$to;
    if (
      e.selection instanceof re &&
      (e.storedMarks ||
        (!n.textOffset &&
          n.parentOffset &&
          n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
    )
      (t.markCursor = t.state.storedMarks || n.marks()),
        Bi(t, !0),
        (t.markCursor = null);
    else if (
      (Bi(t, !e.selection.empty),
      No &&
        e.selection.empty &&
        n.parentOffset &&
        !n.textOffset &&
        n.nodeBefore.marks.length)
    ) {
      let r = t.domSelectionRange();
      for (
        let s = r.focusNode, i = r.focusOffset;
        s && s.nodeType == 1 && i != 0;

      ) {
        let o = i < 0 ? s.lastChild : s.childNodes[i - 1];
        if (!o) break;
        if (o.nodeType == 3) {
          let l = t.domSelection();
          l && l.collapse(o, o.nodeValue.length);
          break;
        } else (s = o), (i = -1);
      }
    }
    t.input.composing = !0;
  }
  Ap(t, X2);
};
kt.compositionend = (t, e) => {
  t.composing &&
    ((t.input.composing = !1),
    (t.input.compositionEndedAt = e.timeStamp),
    (t.input.compositionPendingChanges = t.domObserver.pendingRecords().length
      ? t.input.compositionID
      : 0),
    (t.input.compositionNode = null),
    t.input.compositionPendingChanges &&
      Promise.resolve().then(() => t.domObserver.flush()),
    t.input.compositionID++,
    Ap(t, 20));
};
function Ap(t, e) {
  clearTimeout(t.input.composingTimeout),
    e > -1 && (t.input.composingTimeout = setTimeout(() => Bi(t), e));
}
function Z2(t) {
  for (
    t.composing &&
    ((t.input.composing = !1), (t.input.compositionEndedAt = eb()));
    t.input.compositionNodes.length > 0;

  )
    t.input.compositionNodes.pop().markParentsDirty();
}
function eb() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function Bi(t, e = !1) {
  if (!(Ns && t.domObserver.flushingSoon >= 0)) {
    if (
      (t.domObserver.forceFlush(), Z2(t), e || (t.docView && t.docView.dirty))
    ) {
      let n = E2(t);
      return (
        n && !n.eq(t.state.selection)
          ? t.dispatch(t.state.tr.setSelection(n))
          : (t.markCursor || e) && !t.state.selection.empty
            ? t.dispatch(t.state.tr.deleteSelection())
            : t.updateState(t.state),
        !0
      );
    }
    return !1;
  }
}
function tb(t, e) {
  if (!t.dom.parentNode) return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e),
    (n.style.cssText = "position: fixed; left: -10000px; top: 10px");
  let r = getSelection(),
    s = document.createRange();
  s.selectNodeContents(e),
    t.dom.blur(),
    r.removeAllRanges(),
    r.addRange(s),
    setTimeout(() => {
      n.parentNode && n.parentNode.removeChild(n), t.focus();
    }, 50);
}
const As = (Ls && hp < 15) || (ic && C2 < 604);
Lt.copy = kt.cut = (t, e) => {
  let n = e,
    r = t.state.selection,
    s = n.type == "cut";
  if (r.empty) return;
  let i = As ? null : n.clipboardData,
    o = r.content(),
    { dom: l, text: a } = bp(t, o);
  i
    ? (n.preventDefault(),
      i.clearData(),
      i.setData("text/html", l.innerHTML),
      i.setData("text/plain", a))
    : tb(t, l),
    s &&
      t.dispatch(
        t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"),
      );
};
function nb(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1
    ? t.content.firstChild
    : null;
}
function rb(t, e) {
  if (!t.dom.parentNode) return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code,
    r = t.dom.parentNode.appendChild(
      document.createElement(n ? "textarea" : "div"),
    );
  n || (r.contentEditable = "true"),
    (r.style.cssText = "position: fixed; left: -10000px; top: 10px"),
    r.focus();
  let s = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(),
      r.parentNode && r.parentNode.removeChild(r),
      n ? la(t, r.value, null, s, e) : la(t, r.textContent, r.innerHTML, s, e);
  }, 50);
}
function la(t, e, n, r, s) {
  let i = wp(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, s, i || J.empty))) return !0;
  if (!i) return !1;
  let o = nb(i),
    l = o
      ? t.state.tr.replaceSelectionWith(o, r)
      : t.state.tr.replaceSelection(i);
  return (
    t.dispatch(
      l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste"),
    ),
    !0
  );
}
function Mp(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e) return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
kt.paste = (t, e) => {
  let n = e;
  if (t.composing && !Ns) return;
  let r = As ? null : n.clipboardData,
    s = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && la(t, Mp(r), r.getData("text/html"), s, n)
    ? n.preventDefault()
    : rb(t, n);
};
class sb {
  constructor(e, n, r) {
    (this.slice = e), (this.move = n), (this.node = r);
  }
}
const Tp = Ct ? "altKey" : "ctrlKey";
Lt.dragstart = (t, e) => {
  let n = e,
    r = t.input.mouseDown;
  if ((r && r.done(), !n.dataTransfer)) return;
  let s = t.state.selection,
    i = s.empty ? null : t.posAtCoords(zo(n)),
    o;
  if (!(i && i.pos >= s.from && i.pos <= (s instanceof ne ? s.to - 1 : s.to))) {
    if (r && r.mightDrag) o = ne.create(t.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let d = t.docView.nearestDesc(n.target, !0);
      d &&
        d.node.type.spec.draggable &&
        d != t.docView &&
        (o = ne.create(t.state.doc, d.posBefore));
    }
  }
  let l = (o || t.state.selection).content(),
    { dom: a, text: c, slice: u } = bp(t, l);
  (!n.dataTransfer.files.length || !Bn || pp > 120) &&
    n.dataTransfer.clearData(),
    n.dataTransfer.setData(As ? "Text" : "text/html", a.innerHTML),
    (n.dataTransfer.effectAllowed = "copyMove"),
    As || n.dataTransfer.setData("text/plain", c),
    (t.dragging = new sb(u, !n[Tp], o));
};
Lt.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
kt.dragover = kt.dragenter = (t, e) => e.preventDefault();
kt.drop = (t, e) => {
  let n = e,
    r = t.dragging;
  if (((t.dragging = null), !n.dataTransfer)) return;
  let s = t.posAtCoords(zo(n));
  if (!s) return;
  let i = t.state.doc.resolve(s.pos),
    o = r && r.slice;
  o
    ? t.someProp("transformPasted", (y) => {
        o = y(o, t);
      })
    : (o = wp(
        t,
        Mp(n.dataTransfer),
        As ? null : n.dataTransfer.getData("text/html"),
        !1,
        i,
      ));
  let l = !!(r && !n[Tp]);
  if (t.someProp("handleDrop", (y) => y(t, n, o || J.empty, l))) {
    n.preventDefault();
    return;
  }
  if (!o) return;
  n.preventDefault();
  let a = o ? ep(t.state.doc, i.pos, o) : i.pos;
  a == null && (a = i.pos);
  let c = t.state.tr;
  if (l) {
    let { node: y } = r;
    y ? y.replace(c) : c.deleteSelection();
  }
  let u = c.mapping.map(a),
    d = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1,
    h = c.doc;
  if (
    (d
      ? c.replaceRangeWith(u, u, o.content.firstChild)
      : c.replaceRange(u, u, o),
    c.doc.eq(h))
  )
    return;
  let p = c.doc.resolve(u);
  if (
    d &&
    ne.isSelectable(o.content.firstChild) &&
    p.nodeAfter &&
    p.nodeAfter.sameMarkup(o.content.firstChild)
  )
    c.setSelection(new ne(p));
  else {
    let y = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((b, x, v, E) => (y = E)),
      c.setSelection(gp(t, p, c.doc.resolve(y)));
  }
  t.focus(), t.dispatch(c.setMeta("uiEvent", "drop"));
};
Lt.focus = (t) => {
  (t.input.lastFocus = Date.now()),
    t.focused ||
      (t.domObserver.stop(),
      t.dom.classList.add("ProseMirror-focused"),
      t.domObserver.start(),
      (t.focused = !0),
      setTimeout(() => {
        t.docView &&
          t.hasFocus() &&
          !t.domObserver.currentSelection.eq(t.domSelectionRange()) &&
          lc(t);
      }, 20));
};
Lt.blur = (t, e) => {
  let n = e;
  t.focused &&
    (t.domObserver.stop(),
    t.dom.classList.remove("ProseMirror-focused"),
    t.domObserver.start(),
    n.relatedTarget &&
      t.dom.contains(n.relatedTarget) &&
      t.domObserver.currentSelection.clear(),
    (t.focused = !1));
};
Lt.beforeinput = (t, e) => {
  if (Bn && Ns && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (
        t.input.domChangeCount != r ||
        (t.dom.blur(),
        t.focus(),
        t.someProp("handleKeyDown", (i) => i(t, dp(8, "Backspace"))))
      )
        return;
      let { $cursor: s } = t.state.selection;
      s &&
        s.pos > 0 &&
        t.dispatch(t.state.tr.delete(s.pos - 1, s.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in kt) Lt[t] = kt[t];
function Ms(t, e) {
  if (t == e) return !0;
  for (let n in t) if (t[n] !== e[n]) return !1;
  for (let n in e) if (!(n in t)) return !1;
  return !0;
}
class Hi {
  constructor(e, n) {
    (this.toDOM = e), (this.spec = n || Zn), (this.side = this.spec.side || 0);
  }
  map(e, n, r, s) {
    let { pos: i, deleted: o } = e.mapResult(
      n.from + s,
      this.side < 0 ? -1 : 1,
    );
    return o ? null : new ft(i - r, i - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return (
      this == e ||
      (e instanceof Hi &&
        ((this.spec.key && this.spec.key == e.spec.key) ||
          (this.toDOM == e.toDOM && Ms(this.spec, e.spec))))
    );
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Rn {
  constructor(e, n) {
    (this.attrs = e), (this.spec = n || Zn);
  }
  map(e, n, r, s) {
    let i = e.map(n.from + s, this.spec.inclusiveStart ? -1 : 1) - r,
      o = e.map(n.to + s, this.spec.inclusiveEnd ? 1 : -1) - r;
    return i >= o ? null : new ft(i, o, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return (
      this == e ||
      (e instanceof Rn && Ms(this.attrs, e.attrs) && Ms(this.spec, e.spec))
    );
  }
  static is(e) {
    return e.type instanceof Rn;
  }
  destroy() {}
}
class uc {
  constructor(e, n) {
    (this.attrs = e), (this.spec = n || Zn);
  }
  map(e, n, r, s) {
    let i = e.mapResult(n.from + s, 1);
    if (i.deleted) return null;
    let o = e.mapResult(n.to + s, -1);
    return o.deleted || o.pos <= i.pos
      ? null
      : new ft(i.pos - r, o.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: s } = e.content.findIndex(n.from),
      i;
    return s == n.from && !(i = e.child(r)).isText && s + i.nodeSize == n.to;
  }
  eq(e) {
    return (
      this == e ||
      (e instanceof uc && Ms(this.attrs, e.attrs) && Ms(this.spec, e.spec))
    );
  }
  destroy() {}
}
class ft {
  constructor(e, n, r) {
    (this.from = e), (this.to = n), (this.type = r);
  }
  copy(e, n) {
    return new ft(e, n, this.type);
  }
  eq(e, n = 0) {
    return (
      this.type.eq(e.type) && this.from + n == e.from && this.to + n == e.to
    );
  }
  map(e, n, r) {
    return this.type.map(e, this, n, r);
  }
  static widget(e, n, r) {
    return new ft(e, e, new Hi(n, r));
  }
  static inline(e, n, r, s) {
    return new ft(e, n, new Rn(r, s));
  }
  static node(e, n, r, s) {
    return new ft(e, n, new uc(r, s));
  }
  get spec() {
    return this.type.spec;
  }
  get inline() {
    return this.type instanceof Rn;
  }
  get widget() {
    return this.type instanceof Hi;
  }
}
const pr = [],
  Zn = {};
class Oe {
  constructor(e, n) {
    (this.local = e.length ? e : pr), (this.children = n.length ? n : pr);
  }
  static create(e, n) {
    return n.length ? $i(n, e, 0, Zn) : ct;
  }
  find(e, n, r) {
    let s = [];
    return this.findInner(e ?? 0, n ?? 1e9, s, 0, r), s;
  }
  findInner(e, n, r, s, i) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= n &&
        l.to >= e &&
        (!i || i(l.spec)) &&
        r.push(l.copy(l.from + s, l.to + s));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < n && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, n - l, r, s + l, i);
      }
  }
  map(e, n, r) {
    return this == ct || e.maps.length == 0
      ? this
      : this.mapInner(e, n, 0, 0, r || Zn);
  }
  mapInner(e, n, r, s, i) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, s);
      a && a.type.valid(n, a)
        ? (o || (o = [])).push(a)
        : i.onRemove && i.onRemove(this.local[l].spec);
    }
    return this.children.length
      ? ib(this.children, o || [], e, n, r, s, i)
      : o
        ? new Oe(o.sort(er), pr)
        : ct;
  }
  add(e, n) {
    return n.length
      ? this == ct
        ? Oe.create(e, n)
        : this.addInner(e, n, 0)
      : this;
  }
  addInner(e, n, r) {
    let s,
      i = 0;
    e.forEach((l, a) => {
      let c = a + r,
        u;
      if ((u = Op(n, l, c))) {
        for (s || (s = this.children.slice()); i < s.length && s[i] < a; )
          i += 3;
        s[i] == a
          ? (s[i + 2] = s[i + 2].addInner(l, u, c + 1))
          : s.splice(i, 0, a, a + l.nodeSize, $i(u, l, c + 1, Zn)),
          (i += 3);
      }
    });
    let o = Rp(i ? jp(n) : n, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new Oe(
      o.length ? this.local.concat(o).sort(er) : this.local,
      s || this.children,
    );
  }
  remove(e) {
    return e.length == 0 || this == ct ? this : this.removeInner(e, 0);
  }
  removeInner(e, n) {
    let r = this.children,
      s = this.local;
    for (let i = 0; i < r.length; i += 3) {
      let o,
        l = r[i] + n,
        a = r[i + 1] + n;
      for (let u = 0, d; u < e.length; u++)
        (d = e[u]) &&
          d.from > l &&
          d.to < a &&
          ((e[u] = null), (o || (o = [])).push(d));
      if (!o) continue;
      r == this.children && (r = this.children.slice());
      let c = r[i + 2].removeInner(o, l + 1);
      c != ct ? (r[i + 2] = c) : (r.splice(i, 3), (i -= 3));
    }
    if (s.length) {
      for (let i = 0, o; i < e.length; i++)
        if ((o = e[i]))
          for (let l = 0; l < s.length; l++)
            s[l].eq(o, n) &&
              (s == this.local && (s = this.local.slice()), s.splice(l--, 1));
    }
    return r == this.children && s == this.local
      ? this
      : s.length || r.length
        ? new Oe(s, r)
        : ct;
  }
  forChild(e, n) {
    if (this == ct) return this;
    if (n.isLeaf) return Oe.empty;
    let r, s;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let i = e + 1,
      o = i + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > i && a.type instanceof Rn) {
        let c = Math.max(i, a.from) - i,
          u = Math.min(o, a.to) - i;
        c < u && (s || (s = [])).push(a.copy(c, u));
      }
    }
    if (s) {
      let l = new Oe(s.sort(er), pr);
      return r ? new Un([l, r]) : l;
    }
    return r || ct;
  }
  eq(e) {
    if (this == e) return !0;
    if (
      !(e instanceof Oe) ||
      this.local.length != e.local.length ||
      this.children.length != e.children.length
    )
      return !1;
    for (let n = 0; n < this.local.length; n++)
      if (!this.local[n].eq(e.local[n])) return !1;
    for (let n = 0; n < this.children.length; n += 3)
      if (
        this.children[n] != e.children[n] ||
        this.children[n + 1] != e.children[n + 1] ||
        !this.children[n + 2].eq(e.children[n + 2])
      )
        return !1;
    return !0;
  }
  locals(e) {
    return dc(this.localsInner(e));
  }
  localsInner(e) {
    if (this == ct) return pr;
    if (e.inlineContent || !this.local.some(Rn.is)) return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Rn || n.push(this.local[r]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
Oe.empty = new Oe([], []);
Oe.removeOverlap = dc;
const ct = Oe.empty;
class Un {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((s) => s.map(e, n, Zn));
    return Un.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf) return Oe.empty;
    let r = [];
    for (let s = 0; s < this.members.length; s++) {
      let i = this.members[s].forChild(e, n);
      i != ct && (i instanceof Un ? (r = r.concat(i.members)) : r.push(i));
    }
    return Un.from(r);
  }
  eq(e) {
    if (!(e instanceof Un) || e.members.length != this.members.length)
      return !1;
    for (let n = 0; n < this.members.length; n++)
      if (!this.members[n].eq(e.members[n])) return !1;
    return !0;
  }
  locals(e) {
    let n,
      r = !0;
    for (let s = 0; s < this.members.length; s++) {
      let i = this.members[s].localsInner(e);
      if (i.length)
        if (!n) n = i;
        else {
          r && ((n = n.slice()), (r = !1));
          for (let o = 0; o < i.length; o++) n.push(i[o]);
        }
    }
    return n ? dc(r ? n : n.sort(er)) : pr;
  }
  static from(e) {
    switch (e.length) {
      case 0:
        return ct;
      case 1:
        return e[0];
      default:
        return new Un(
          e.every((n) => n instanceof Oe)
            ? e
            : e.reduce((n, r) => n.concat(r instanceof Oe ? r : r.members), []),
        );
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++) this.members[n].forEachSet(e);
  }
}
function ib(t, e, n, r, s, i, o) {
  let l = t.slice();
  for (let c = 0, u = i; c < n.maps.length; c++) {
    let d = 0;
    n.maps[c].forEach((h, p, y, b) => {
      let x = b - y - (p - h);
      for (let v = 0; v < l.length; v += 3) {
        let E = l[v + 1];
        if (E < 0 || h > E + u - d) continue;
        let R = l[v] + u - d;
        p >= R
          ? (l[v + 1] = h <= R ? -2 : -1)
          : h >= u && x && ((l[v] += x), (l[v + 1] += x));
      }
      d += x;
    }),
      (u = n.maps[c].map(u, -1));
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        (a = !0), (l[c + 1] = -1);
        continue;
      }
      let u = n.map(t[c] + i),
        d = u - s;
      if (d < 0 || d >= r.content.size) {
        a = !0;
        continue;
      }
      let h = n.map(t[c + 1] + i, -1),
        p = h - s,
        { index: y, offset: b } = r.content.findIndex(d),
        x = r.maybeChild(y);
      if (x && b == d && b + x.nodeSize == p) {
        let v = l[c + 2].mapInner(n, x, u + 1, t[c] + i + 1, o);
        v != ct
          ? ((l[c] = d), (l[c + 1] = p), (l[c + 2] = v))
          : ((l[c + 1] = -2), (a = !0));
      } else a = !0;
    }
  if (a) {
    let c = ob(l, t, e, n, s, i, o),
      u = $i(c, r, 0, o);
    e = u.local;
    for (let d = 0; d < l.length; d += 3)
      l[d + 1] < 0 && (l.splice(d, 3), (d -= 3));
    for (let d = 0, h = 0; d < u.children.length; d += 3) {
      let p = u.children[d];
      for (; h < l.length && l[h] < p; ) h += 3;
      l.splice(h, 0, u.children[d], u.children[d + 1], u.children[d + 2]);
    }
  }
  return new Oe(e.sort(er), l);
}
function Rp(t, e) {
  if (!e || !t.length) return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let s = t[r];
    n.push(new ft(s.from + e, s.to + e, s.type));
  }
  return n;
}
function ob(t, e, n, r, s, i, o) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let d = a.local[u].map(r, s, c);
      d ? n.push(d) : o.onRemove && o.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < t.length; a += 3)
    t[a + 1] == -1 && l(t[a + 2], e[a] + i + 1);
  return n;
}
function Op(t, e, n) {
  if (e.isLeaf) return null;
  let r = n + e.nodeSize,
    s = null;
  for (let i = 0, o; i < t.length; i++)
    (o = t[i]) &&
      o.from > n &&
      o.to < r &&
      ((s || (s = [])).push(o), (t[i] = null));
  return s;
}
function jp(t) {
  let e = [];
  for (let n = 0; n < t.length; n++) t[n] != null && e.push(t[n]);
  return e;
}
function $i(t, e, n, r) {
  let s = [],
    i = !1;
  e.forEach((l, a) => {
    let c = Op(t, l, a + n);
    if (c) {
      i = !0;
      let u = $i(c, l, n + a + 1, r);
      u != ct && s.push(a, a + l.nodeSize, u);
    }
  });
  let o = Rp(i ? jp(t) : t, -n).sort(er);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) ||
      (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || s.length ? new Oe(o, s) : ct;
}
function er(t, e) {
  return t.from - e.from || t.to - e.to;
}
function dc(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let s = n + 1; s < e.length; s++) {
        let i = e[s];
        if (i.from == r.from) {
          i.to != r.to &&
            (e == t && (e = t.slice()),
            (e[s] = i.copy(i.from, r.to)),
            wd(e, s + 1, i.copy(r.to, i.to)));
          continue;
        } else {
          i.from < r.to &&
            (e == t && (e = t.slice()),
            (e[n] = r.copy(r.from, i.from)),
            wd(e, s, r.copy(i.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function wd(t, e, n) {
  for (; e < t.length && er(n, t[e]) > 0; ) e++;
  t.splice(e, 0, n);
}
var Pn = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
  },
  Fi = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"',
  },
  lb = typeof navigator < "u" && /Mac/.test(navigator.platform),
  ab =
    typeof navigator < "u" &&
    /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Je = 0; Je < 10; Je++) Pn[48 + Je] = Pn[96 + Je] = String(Je);
for (var Je = 1; Je <= 24; Je++) Pn[Je + 111] = "F" + Je;
for (var Je = 65; Je <= 90; Je++)
  (Pn[Je] = String.fromCharCode(Je + 32)), (Fi[Je] = String.fromCharCode(Je));
for (var fl in Pn) Fi.hasOwnProperty(fl) || (Fi[fl] = Pn[fl]);
function cb(t) {
  var e =
      (lb && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey) ||
      (ab && t.shiftKey && t.key && t.key.length == 1) ||
      t.key == "Unidentified",
    n =
      (!e && t.key) ||
      (t.shiftKey ? Fi : Pn)[t.keyCode] ||
      t.key ||
      "Unidentified";
  return (
    n == "Esc" && (n = "Escape"),
    n == "Del" && (n = "Delete"),
    n == "Left" && (n = "ArrowLeft"),
    n == "Up" && (n = "ArrowUp"),
    n == "Right" && (n = "ArrowRight"),
    n == "Down" && (n = "ArrowDown"),
    n
  );
}
const ub =
  typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function db(t) {
  let e = t.split(/-(?!$)/),
    n = e[e.length - 1];
  n == "Space" && (n = " ");
  let r, s, i, o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a)) o = !0;
    else if (/^a(lt)?$/i.test(a)) r = !0;
    else if (/^(c|ctrl|control)$/i.test(a)) s = !0;
    else if (/^s(hift)?$/i.test(a)) i = !0;
    else if (/^mod$/i.test(a)) ub ? (o = !0) : (s = !0);
    else throw new Error("Unrecognized modifier name: " + a);
  }
  return (
    r && (n = "Alt-" + n),
    s && (n = "Ctrl-" + n),
    o && (n = "Meta-" + n),
    i && (n = "Shift-" + n),
    n
  );
}
function fb(t) {
  let e = Object.create(null);
  for (let n in t) e[db(n)] = t[n];
  return e;
}
function hl(t, e, n = !0) {
  return (
    e.altKey && (t = "Alt-" + t),
    e.ctrlKey && (t = "Ctrl-" + t),
    e.metaKey && (t = "Meta-" + t),
    n && e.shiftKey && (t = "Shift-" + t),
    t
  );
}
function Pp(t) {
  let e = fb(t);
  return function (n, r) {
    let s = cb(r),
      i,
      o = e[hl(s, r)];
    if (o && o(n.state, n.dispatch, n)) return !0;
    if (s.length == 1 && s != " ") {
      if (r.shiftKey) {
        let l = e[hl(s, r, !1)];
        if (l && l(n.state, n.dispatch, n)) return !0;
      }
      if (
        (r.shiftKey || r.altKey || r.metaKey || s.charCodeAt(0) > 127) &&
        (i = Pn[r.keyCode]) &&
        i != s
      ) {
        let l = e[hl(i, r)];
        if (l && l(n.state, n.dispatch, n)) return !0;
      }
    }
    return !1;
  };
}
const fc = (t, e) =>
  t.selection.empty
    ? !1
    : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function Ip(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0)
    ? null
    : n;
}
const Lp = (t, e, n) => {
    let r = Ip(t, n);
    if (!r) return !1;
    let s = hc(r);
    if (!s) {
      let o = r.blockRange(),
        l = o && Lr(o);
      return l == null ? !1 : (e && e(t.tr.lift(o, l).scrollIntoView()), !0);
    }
    let i = s.nodeBefore;
    if (Wp(t, s, e, -1)) return !0;
    if (r.parent.content.size == 0 && (Pr(i, "end") || ne.isSelectable(i)))
      for (let o = r.depth; ; o--) {
        let l = Io(t.doc, r.before(o), r.after(o), J.empty);
        if (l && l.slice.size < l.to - l.from) {
          if (e) {
            let a = t.tr.step(l);
            a.setSelection(
              Pr(i, "end")
                ? oe.findFrom(a.doc.resolve(a.mapping.map(s.pos, -1)), -1)
                : ne.create(a.doc, s.pos - i.nodeSize),
            ),
              e(a.scrollIntoView());
          }
          return !0;
        }
        if (o == 1 || r.node(o - 1).childCount > 1) break;
      }
    return i.isAtom && s.depth == r.depth - 1
      ? (e && e(t.tr.delete(s.pos - i.nodeSize, s.pos).scrollIntoView()), !0)
      : !1;
  },
  hb = (t, e, n) => {
    let r = Ip(t, n);
    if (!r) return !1;
    let s = hc(r);
    return s ? Np(t, s, e) : !1;
  },
  pb = (t, e, n) => {
    let r = Dp(t, n);
    if (!r) return !1;
    let s = pc(r);
    return s ? Np(t, s, e) : !1;
  };
function Np(t, e, n) {
  let r = e.nodeBefore,
    s = r,
    i = e.pos - 1;
  for (; !s.isTextblock; i--) {
    if (s.type.spec.isolating) return !1;
    let u = s.lastChild;
    if (!u) return !1;
    s = u;
  }
  let o = e.nodeAfter,
    l = o,
    a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating) return !1;
    let u = l.firstChild;
    if (!u) return !1;
    l = u;
  }
  let c = Io(t.doc, i, a, J.empty);
  if (!c || c.from != i || (c instanceof We && c.slice.size >= a - i))
    return !1;
  if (n) {
    let u = t.tr.step(c);
    u.setSelection(re.create(u.doc, i)), n(u.scrollIntoView());
  }
  return !0;
}
function Pr(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock) return !0;
    if (n && r.childCount != 1) return !1;
  }
  return !1;
}
const zp = (t, e, n) => {
  let { $head: r, empty: s } = t.selection,
    i = r;
  if (!s) return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0) return !1;
    i = hc(r);
  }
  let o = i && i.nodeBefore;
  return !o || !ne.isSelectable(o)
    ? !1
    : (e &&
        e(
          t.tr
            .setSelection(ne.create(t.doc, i.pos - o.nodeSize))
            .scrollIntoView(),
        ),
      !0);
};
function hc(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0) return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating) break;
    }
  return null;
}
function Dp(t, e) {
  let { $cursor: n } = t.selection;
  return !n ||
    (e
      ? !e.endOfTextblock("forward", t)
      : n.parentOffset < n.parent.content.size)
    ? null
    : n;
}
const Bp = (t, e, n) => {
    let r = Dp(t, n);
    if (!r) return !1;
    let s = pc(r);
    if (!s) return !1;
    let i = s.nodeAfter;
    if (Wp(t, s, e, 1)) return !0;
    if (r.parent.content.size == 0 && (Pr(i, "start") || ne.isSelectable(i))) {
      let o = Io(t.doc, r.before(), r.after(), J.empty);
      if (o && o.slice.size < o.to - o.from) {
        if (e) {
          let l = t.tr.step(o);
          l.setSelection(
            Pr(i, "start")
              ? oe.findFrom(l.doc.resolve(l.mapping.map(s.pos)), 1)
              : ne.create(l.doc, l.mapping.map(s.pos)),
          ),
            e(l.scrollIntoView());
        }
        return !0;
      }
    }
    return i.isAtom && s.depth == r.depth - 1
      ? (e && e(t.tr.delete(s.pos, s.pos + i.nodeSize).scrollIntoView()), !0)
      : !1;
  },
  Hp = (t, e, n) => {
    let { $head: r, empty: s } = t.selection,
      i = r;
    if (!s) return !1;
    if (r.parent.isTextblock) {
      if (
        n
          ? !n.endOfTextblock("forward", t)
          : r.parentOffset < r.parent.content.size
      )
        return !1;
      i = pc(r);
    }
    let o = i && i.nodeAfter;
    return !o || !ne.isSelectable(o)
      ? !1
      : (e && e(t.tr.setSelection(ne.create(t.doc, i.pos)).scrollIntoView()),
        !0);
  };
function pc(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      let n = t.node(e);
      if (t.index(e) + 1 < n.childCount) return t.doc.resolve(t.after(e + 1));
      if (n.type.spec.isolating) break;
    }
  return null;
}
const mb = (t, e) => {
    let n = t.selection,
      r = n instanceof ne,
      s;
    if (r) {
      if (n.node.isTextblock || !zn(t.doc, n.from)) return !1;
      s = n.from;
    } else if (((s = Po(t.doc, n.from, -1)), s == null)) return !1;
    if (e) {
      let i = t.tr.join(s);
      r &&
        i.setSelection(
          ne.create(i.doc, s - t.doc.resolve(s).nodeBefore.nodeSize),
        ),
        e(i.scrollIntoView());
    }
    return !0;
  },
  gb = (t, e) => {
    let n = t.selection,
      r;
    if (n instanceof ne) {
      if (n.node.isTextblock || !zn(t.doc, n.to)) return !1;
      r = n.to;
    } else if (((r = Po(t.doc, n.to, 1)), r == null)) return !1;
    return e && e(t.tr.join(r).scrollIntoView()), !0;
  },
  yb = (t, e) => {
    let { $from: n, $to: r } = t.selection,
      s = n.blockRange(r),
      i = s && Lr(s);
    return i == null ? !1 : (e && e(t.tr.lift(s, i).scrollIntoView()), !0);
  },
  $p = (t, e) => {
    let { $head: n, $anchor: r } = t.selection;
    return !n.parent.type.spec.code || !n.sameParent(r)
      ? !1
      : (e &&
          e(
            t.tr
              .insertText(
                `
`,
              )
              .scrollIntoView(),
          ),
        !0);
  };
function mc(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs()) return n;
  }
  return null;
}
const bb = (t, e) => {
    let { $head: n, $anchor: r } = t.selection;
    if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
    let s = n.node(-1),
      i = n.indexAfter(-1),
      o = mc(s.contentMatchAt(i));
    if (!o || !s.canReplaceWith(i, i, o)) return !1;
    if (e) {
      let l = n.after(),
        a = t.tr.replaceWith(l, l, o.createAndFill());
      a.setSelection(oe.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
    }
    return !0;
  },
  Fp = (t, e) => {
    let n = t.selection,
      { $from: r, $to: s } = n;
    if (n instanceof xt || r.parent.inlineContent || s.parent.inlineContent)
      return !1;
    let i = mc(s.parent.contentMatchAt(s.indexAfter()));
    if (!i || !i.isTextblock) return !1;
    if (e) {
      let o = (!r.parentOffset && s.index() < s.parent.childCount ? r : s).pos,
        l = t.tr.insert(o, i.createAndFill());
      l.setSelection(re.create(l.doc, o + 1)), e(l.scrollIntoView());
    }
    return !0;
  },
  Vp = (t, e) => {
    let { $cursor: n } = t.selection;
    if (!n || n.parent.content.size) return !1;
    if (n.depth > 1 && n.after() != n.end(-1)) {
      let i = n.before();
      if (dn(t.doc, i)) return e && e(t.tr.split(i).scrollIntoView()), !0;
    }
    let r = n.blockRange(),
      s = r && Lr(r);
    return s == null ? !1 : (e && e(t.tr.lift(r, s).scrollIntoView()), !0);
  };
function wb(t) {
  return (e, n) => {
    let { $from: r, $to: s } = e.selection;
    if (e.selection instanceof ne && e.selection.node.isBlock)
      return !r.parentOffset || !dn(e.doc, r.pos)
        ? !1
        : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth) return !1;
    let i = [],
      o,
      l,
      a = !1,
      c = !1;
    for (let p = r.depth; ; p--)
      if (r.node(p).isBlock) {
        (a = r.end(p) == r.pos + (r.depth - p)),
          (c = r.start(p) == r.pos - (r.depth - p)),
          (l = mc(r.node(p - 1).contentMatchAt(r.indexAfter(p - 1)))),
          i.unshift(a && l ? { type: l } : null),
          (o = p);
        break;
      } else {
        if (p == 1) return !1;
        i.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof re || e.selection instanceof xt) &&
      u.deleteSelection();
    let d = u.mapping.map(r.pos),
      h = dn(u.doc, d, i.length, i);
    if (
      (h || ((i[0] = l ? { type: l } : null), (h = dn(u.doc, d, i.length, i))),
      u.split(d, i.length, i),
      !a && c && r.node(o).type != l)
    ) {
      let p = u.mapping.map(r.before(o)),
        y = u.doc.resolve(p);
      l &&
        r.node(o - 1).canReplaceWith(y.index(), y.index() + 1, l) &&
        u.setNodeMarkup(u.mapping.map(r.before(o)), l);
    }
    return n && n(u.scrollIntoView()), !0;
  };
}
const vb = wb(),
  xb = (t, e) => {
    let { $from: n, to: r } = t.selection,
      s,
      i = n.sharedDepth(r);
    return i == 0
      ? !1
      : ((s = n.before(i)), e && e(t.tr.setSelection(ne.create(t.doc, s))), !0);
  };
function kb(t, e, n) {
  let r = e.nodeBefore,
    s = e.nodeAfter,
    i = e.index();
  return !r || !s || !r.type.compatibleContent(s.type)
    ? !1
    : !r.content.size && e.parent.canReplace(i - 1, i)
      ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0)
      : !e.parent.canReplace(i, i + 1) || !(s.isTextblock || zn(t.doc, e.pos))
        ? !1
        : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function Wp(t, e, n, r) {
  let s = e.nodeBefore,
    i = e.nodeAfter,
    o,
    l,
    a = s.type.spec.isolating || i.type.spec.isolating;
  if (!a && kb(t, e, n)) return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (
    c &&
    (o = (l = s.contentMatchAt(s.childCount)).findWrapping(i.type)) &&
    l.matchType(o[0] || i.type).validEnd
  ) {
    if (n) {
      let p = e.pos + i.nodeSize,
        y = H.empty;
      for (let v = o.length - 1; v >= 0; v--) y = H.from(o[v].create(null, y));
      y = H.from(s.copy(y));
      let b = t.tr.step(
          new Ue(e.pos - 1, p, e.pos, p, new J(y, 1, 0), o.length, !0),
        ),
        x = b.doc.resolve(p + 2 * o.length);
      x.nodeAfter &&
        x.nodeAfter.type == s.type &&
        zn(b.doc, x.pos) &&
        b.join(x.pos),
        n(b.scrollIntoView());
    }
    return !0;
  }
  let u = i.type.spec.isolating || (r > 0 && a) ? null : oe.findFrom(e, 1),
    d = u && u.$from.blockRange(u.$to),
    h = d && Lr(d);
  if (h != null && h >= e.depth)
    return n && n(t.tr.lift(d, h).scrollIntoView()), !0;
  if (c && Pr(i, "start", !0) && Pr(s, "end")) {
    let p = s,
      y = [];
    for (; y.push(p), !p.isTextblock; ) p = p.lastChild;
    let b = i,
      x = 1;
    for (; !b.isTextblock; b = b.firstChild) x++;
    if (p.canReplace(p.childCount, p.childCount, b.content)) {
      if (n) {
        let v = H.empty;
        for (let R = y.length - 1; R >= 0; R--) v = H.from(y[R].copy(v));
        let E = t.tr.step(
          new Ue(
            e.pos - y.length,
            e.pos + i.nodeSize,
            e.pos + x,
            e.pos + i.nodeSize - x,
            new J(v, y.length, 0),
            0,
            !0,
          ),
        );
        n(E.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Up(t) {
  return function (e, n) {
    let r = e.selection,
      s = t < 0 ? r.$from : r.$to,
      i = s.depth;
    for (; s.node(i).isInline; ) {
      if (!i) return !1;
      i--;
    }
    return s.node(i).isTextblock
      ? (n &&
          n(e.tr.setSelection(re.create(e.doc, t < 0 ? s.start(i) : s.end(i)))),
        !0)
      : !1;
  };
}
const _b = Up(-1),
  Sb = Up(1);
function Cb(t, e = null) {
  return function (n, r) {
    let { $from: s, $to: i } = n.selection,
      o = s.blockRange(i),
      l = o && nc(o, t, e);
    return l ? (r && r(n.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function vd(t, e = null) {
  return function (n, r) {
    let s = !1;
    for (let i = 0; i < n.selection.ranges.length && !s; i++) {
      let {
        $from: { pos: o },
        $to: { pos: l },
      } = n.selection.ranges[i];
      n.doc.nodesBetween(o, l, (a, c) => {
        if (s) return !1;
        if (!(!a.isTextblock || a.hasMarkup(t, e)))
          if (a.type == t) s = !0;
          else {
            let u = n.doc.resolve(c),
              d = u.index();
            s = u.parent.canReplaceWith(d, d + 1, t);
          }
      });
    }
    if (!s) return !1;
    if (r) {
      let i = n.tr;
      for (let o = 0; o < n.selection.ranges.length; o++) {
        let {
          $from: { pos: l },
          $to: { pos: a },
        } = n.selection.ranges[o];
        i.setBlockType(l, a, t, e);
      }
      r(i.scrollIntoView());
    }
    return !0;
  };
}
function gc(...t) {
  return function (e, n, r) {
    for (let s = 0; s < t.length; s++) if (t[s](e, n, r)) return !0;
    return !1;
  };
}
gc(fc, Lp, zp);
gc(fc, Bp, Hp);
gc($p, Fp, Vp, vb);
typeof navigator < "u"
  ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
  : typeof os < "u" && os.platform && os.platform() == "darwin";
function Eb(t, e = null) {
  return function (n, r) {
    let { $from: s, $to: i } = n.selection,
      o = s.blockRange(i);
    if (!o) return !1;
    let l = r ? n.tr : null;
    return Ab(l, o, t, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function Ab(t, e, n, r = null) {
  let s = !1,
    i = e,
    o = e.$from.doc;
  if (
    e.depth >= 2 &&
    e.$from.node(e.depth - 1).type.compatibleContent(n) &&
    e.startIndex == 0
  ) {
    if (e.$from.index(e.depth - 1) == 0) return !1;
    let a = o.resolve(e.start - 2);
    (i = new Li(a, a, e.depth)),
      e.endIndex < e.parent.childCount &&
        (e = new Li(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)),
      (s = !0);
  }
  let l = nc(i, n, r, e);
  return l ? (t && Mb(t, e, l, s, n), !0) : !1;
}
function Mb(t, e, n, r, s) {
  let i = H.empty;
  for (let u = n.length - 1; u >= 0; u--)
    i = H.from(n[u].type.create(n[u].attrs, i));
  t.step(
    new Ue(
      e.start - (r ? 2 : 0),
      e.end,
      e.start,
      e.end,
      new J(i, 0, 0),
      n.length,
      !0,
    ),
  );
  let o = 0;
  for (let u = 0; u < n.length; u++) n[u].type == s && (o = u + 1);
  let l = n.length - o,
    a = e.start + n.length - (r ? 2 : 0),
    c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, h = !0; u < d; u++, h = !1)
    !h && dn(t.doc, a, l) && (t.split(a, l), (a += 2 * l)),
      (a += c.child(u).nodeSize);
  return t;
}
function Tb(t) {
  return function (e, n) {
    let { $from: r, $to: s } = e.selection,
      i = r.blockRange(s, (o) => o.childCount > 0 && o.firstChild.type == t);
    return i
      ? n
        ? r.node(i.depth - 1).type == t
          ? Rb(e, n, t, i)
          : Ob(e, n, i)
        : !0
      : !1;
  };
}
function Rb(t, e, n, r) {
  let s = t.tr,
    i = r.end,
    o = r.$to.end(r.depth);
  i < o &&
    (s.step(
      new Ue(
        i - 1,
        o,
        i,
        o,
        new J(H.from(n.create(null, r.parent.copy())), 1, 0),
        1,
        !0,
      ),
    ),
    (r = new Li(s.doc.resolve(r.$from.pos), s.doc.resolve(o), r.depth)));
  const l = Lr(r);
  if (l == null) return !1;
  s.lift(r, l);
  let a = s.doc.resolve(s.mapping.map(i, -1) - 1);
  return (
    zn(s.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && s.join(a.pos),
    e(s.scrollIntoView()),
    !0
  );
}
function Ob(t, e, n) {
  let r = t.tr,
    s = n.parent;
  for (let p = n.end, y = n.endIndex - 1, b = n.startIndex; y > b; y--)
    (p -= s.child(y).nodeSize), r.delete(p - 1, p + 1);
  let i = r.doc.resolve(n.start),
    o = i.nodeAfter;
  if (r.mapping.map(n.end) != n.start + i.nodeAfter.nodeSize) return !1;
  let l = n.startIndex == 0,
    a = n.endIndex == s.childCount,
    c = i.node(-1),
    u = i.index(-1);
  if (
    !c.canReplace(
      u + (l ? 0 : 1),
      u + 1,
      o.content.append(a ? H.empty : H.from(s)),
    )
  )
    return !1;
  let d = i.pos,
    h = d + o.nodeSize;
  return (
    r.step(
      new Ue(
        d - (l ? 1 : 0),
        h + (a ? 1 : 0),
        d + 1,
        h - 1,
        new J(
          (l ? H.empty : H.from(s.copy(H.empty))).append(
            a ? H.empty : H.from(s.copy(H.empty)),
          ),
          l ? 0 : 1,
          a ? 0 : 1,
        ),
        l ? 0 : 1,
      ),
    ),
    e(r.scrollIntoView()),
    !0
  );
}
function jb(t) {
  return function (e, n) {
    let { $from: r, $to: s } = e.selection,
      i = r.blockRange(s, (c) => c.childCount > 0 && c.firstChild.type == t);
    if (!i) return !1;
    let o = i.startIndex;
    if (o == 0) return !1;
    let l = i.parent,
      a = l.child(o - 1);
    if (a.type != t) return !1;
    if (n) {
      let c = a.lastChild && a.lastChild.type == l.type,
        u = H.from(c ? t.create() : null),
        d = new J(
          H.from(t.create(null, H.from(l.type.create(null, u)))),
          c ? 3 : 1,
          0,
        ),
        h = i.start,
        p = i.end;
      n(e.tr.step(new Ue(h - (c ? 3 : 1), p, h, p, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Kp(t) {
  const { state: e, transaction: n } = t;
  let { selection: r } = n,
    { doc: s } = n,
    { storedMarks: i } = n;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return i;
    },
    get selection() {
      return r;
    },
    get doc() {
      return s;
    },
    get tr() {
      return (r = n.selection), (s = n.doc), (i = n.storedMarks), n;
    },
  };
}
class Pb {
  constructor(e) {
    (this.editor = e.editor),
      (this.rawCommands = this.editor.extensionManager.commands),
      (this.customState = e.state);
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: n, state: r } = this,
      { view: s } = n,
      { tr: i } = r,
      o = this.buildProps(i);
    return Object.fromEntries(
      Object.entries(e).map(([l, a]) => [
        l,
        (...u) => {
          const d = a(...u)(o);
          return (
            !i.getMeta("preventDispatch") &&
              !this.hasCustomState &&
              s.dispatch(i),
            d
          );
        },
      ]),
    );
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, n = !0) {
    const { rawCommands: r, editor: s, state: i } = this,
      { view: o } = s,
      l = [],
      a = !!e,
      c = e || i.tr,
      u = () => (
        !a &&
          n &&
          !c.getMeta("preventDispatch") &&
          !this.hasCustomState &&
          o.dispatch(c),
        l.every((h) => h === !0)
      ),
      d = {
        ...Object.fromEntries(
          Object.entries(r).map(([h, p]) => [
            h,
            (...b) => {
              const x = this.buildProps(c, n),
                v = p(...b)(x);
              return l.push(v), d;
            },
          ]),
        ),
        run: u,
      };
    return d;
  }
  createCan(e) {
    const { rawCommands: n, state: r } = this,
      s = !1,
      i = e || r.tr,
      o = this.buildProps(i, s);
    return {
      ...Object.fromEntries(
        Object.entries(n).map(([a, c]) => [
          a,
          (...u) => c(...u)({ ...o, dispatch: void 0 }),
        ]),
      ),
      chain: () => this.createChain(i, s),
    };
  }
  buildProps(e, n = !0) {
    const { rawCommands: r, editor: s, state: i } = this,
      { view: o } = s,
      l = {
        tr: e,
        editor: s,
        view: o,
        state: Kp({ state: i, transaction: e }),
        dispatch: n ? () => {} : void 0,
        chain: () => this.createChain(e, n),
        can: () => this.createCan(e),
        get commands() {
          return Object.fromEntries(
            Object.entries(r).map(([a, c]) => [a, (...u) => c(...u)(l)]),
          );
        },
      };
    return l;
  }
}
function Qe(t, e, n) {
  return t.config[e] === void 0 && t.parent
    ? Qe(t.parent, e, n)
    : typeof t.config[e] == "function"
      ? t.config[e].bind({ ...n, parent: t.parent ? Qe(t.parent, e, n) : null })
      : t.config[e];
}
function Ib(t) {
  const e = t.filter((s) => s.type === "extension"),
    n = t.filter((s) => s.type === "node"),
    r = t.filter((s) => s.type === "mark");
  return { baseExtensions: e, nodeExtensions: n, markExtensions: r };
}
function Ye(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(
        `There is no node type named '${t}'. Maybe you forgot to add the extension?`,
      );
    return e.nodes[t];
  }
  return t;
}
function xe(...t) {
  return t
    .filter((e) => !!e)
    .reduce((e, n) => {
      const r = { ...e };
      return (
        Object.entries(n).forEach(([s, i]) => {
          if (!r[s]) {
            r[s] = i;
            return;
          }
          if (s === "class") {
            const l = i ? String(i).split(" ") : [],
              a = r[s] ? r[s].split(" ") : [],
              c = l.filter((u) => !a.includes(u));
            r[s] = [...a, ...c].join(" ");
          } else if (s === "style") {
            const l = i
                ? i
                    .split(";")
                    .map((u) => u.trim())
                    .filter(Boolean)
                : [],
              a = r[s]
                ? r[s]
                    .split(";")
                    .map((u) => u.trim())
                    .filter(Boolean)
                : [],
              c = new Map();
            a.forEach((u) => {
              const [d, h] = u.split(":").map((p) => p.trim());
              c.set(d, h);
            }),
              l.forEach((u) => {
                const [d, h] = u.split(":").map((p) => p.trim());
                c.set(d, h);
              }),
              (r[s] = Array.from(c.entries())
                .map(([u, d]) => `${u}: ${d}`)
                .join("; "));
          } else r[s] = i;
        }),
        r
      );
    }, {});
}
function Lb(t) {
  return typeof t == "function";
}
function Be(t, e = void 0, ...n) {
  return Lb(t) ? (e ? t.bind(e)(...n) : t(...n)) : t;
}
function Nb(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
class zs {
  constructor(e) {
    (this.find = e.find), (this.handler = e.handler);
  }
}
function zb(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function qs(t) {
  return zb(t) !== "Object"
    ? !1
    : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function Do(t, e) {
  const n = { ...t };
  return (
    qs(t) &&
      qs(e) &&
      Object.keys(e).forEach((r) => {
        qs(e[r]) && qs(t[r]) ? (n[r] = Do(t[r], e[r])) : (n[r] = e[r]);
      }),
    n
  );
}
class Yt {
  constructor(e = {}) {
    (this.type = "mark"),
      (this.name = "mark"),
      (this.parent = null),
      (this.child = null),
      (this.config = { name: this.name, defaultOptions: {} }),
      (this.config = { ...this.config, ...e }),
      (this.name = this.config.name),
      e.defaultOptions &&
        Object.keys(e.defaultOptions).length > 0 &&
        console.warn(
          `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`,
        ),
      (this.options = this.config.defaultOptions),
      this.config.addOptions &&
        (this.options = Be(Qe(this, "addOptions", { name: this.name }))),
      (this.storage =
        Be(
          Qe(this, "addStorage", { name: this.name, options: this.options }),
        ) || {});
  }
  static create(e = {}) {
    return new Yt(e);
  }
  configure(e = {}) {
    const n = this.extend({
      ...this.config,
      addOptions: () => Do(this.options, e),
    });
    return (n.name = this.name), (n.parent = this.parent), n;
  }
  extend(e = {}) {
    const n = new Yt(e);
    return (
      (n.parent = this),
      (this.child = n),
      (n.name = e.name ? e.name : n.parent.name),
      e.defaultOptions &&
        Object.keys(e.defaultOptions).length > 0 &&
        console.warn(
          `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`,
        ),
      (n.options = Be(Qe(n, "addOptions", { name: n.name }))),
      (n.storage = Be(
        Qe(n, "addStorage", { name: n.name, options: n.options }),
      )),
      n
    );
  }
  static handleExit({ editor: e, mark: n }) {
    const { tr: r } = e.state,
      s = e.state.selection.$from;
    if (s.pos === s.end()) {
      const o = s.marks();
      if (!!!o.find((c) => c?.type.name === n.name)) return !1;
      const a = o.find((c) => c?.type.name === n.name);
      return (
        a && r.removeStoredMark(a),
        r.insertText(" ", s.pos),
        e.view.dispatch(r),
        !0
      );
    }
    return !1;
  }
}
class Db {
  constructor(e) {
    (this.find = e.find), (this.handler = e.handler);
  }
}
class $e {
  constructor(e = {}) {
    (this.type = "extension"),
      (this.name = "extension"),
      (this.parent = null),
      (this.child = null),
      (this.config = { name: this.name, defaultOptions: {} }),
      (this.config = { ...this.config, ...e }),
      (this.name = this.config.name),
      e.defaultOptions &&
        Object.keys(e.defaultOptions).length > 0 &&
        console.warn(
          `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`,
        ),
      (this.options = this.config.defaultOptions),
      this.config.addOptions &&
        (this.options = Be(Qe(this, "addOptions", { name: this.name }))),
      (this.storage =
        Be(
          Qe(this, "addStorage", { name: this.name, options: this.options }),
        ) || {});
  }
  static create(e = {}) {
    return new $e(e);
  }
  configure(e = {}) {
    const n = this.extend({
      ...this.config,
      addOptions: () => Do(this.options, e),
    });
    return (n.name = this.name), (n.parent = this.parent), n;
  }
  extend(e = {}) {
    const n = new $e({ ...this.config, ...e });
    return (
      (n.parent = this),
      (this.child = n),
      (n.name = e.name ? e.name : n.parent.name),
      e.defaultOptions &&
        Object.keys(e.defaultOptions).length > 0 &&
        console.warn(
          `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`,
        ),
      (n.options = Be(Qe(n, "addOptions", { name: n.name }))),
      (n.storage = Be(
        Qe(n, "addStorage", { name: n.name, options: n.options }),
      )),
      n
    );
  }
}
function Bb(t, e, n) {
  const { from: r, to: s } = e,
    {
      blockSeparator: i = `

`,
      textSerializers: o = {},
    } = n || {};
  let l = "";
  return (
    t.nodesBetween(r, s, (a, c, u, d) => {
      var h;
      a.isBlock && c > r && (l += i);
      const p = o?.[a.type.name];
      if (p)
        return (
          u && (l += p({ node: a, pos: c, parent: u, index: d, range: e })), !1
        );
      a.isText &&
        (l +=
          (h = a?.text) === null || h === void 0
            ? void 0
            : h.slice(Math.max(r, c) - c, s - c));
    }),
    l
  );
}
function Hb(t) {
  return Object.fromEntries(
    Object.entries(t.nodes)
      .filter(([, e]) => e.spec.toText)
      .map(([e, n]) => [e, n.spec.toText]),
  );
}
$e.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return { blockSeparator: void 0 };
  },
  addProseMirrorPlugins() {
    return [
      new Fe({
        key: new Ve("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this,
              { state: e, schema: n } = t,
              { doc: r, selection: s } = e,
              { ranges: i } = s,
              o = Math.min(...i.map((u) => u.$from.pos)),
              l = Math.max(...i.map((u) => u.$to.pos)),
              a = Hb(n);
            return Bb(
              r,
              { from: o, to: l },
              {
                ...(this.options.blockSeparator !== void 0
                  ? { blockSeparator: this.options.blockSeparator }
                  : {}),
                textSerializers: a,
              },
            );
          },
        },
      }),
    ];
  },
});
const $b =
    () =>
    ({ editor: t, view: e }) => (
      requestAnimationFrame(() => {
        var n;
        t.isDestroyed ||
          (e.dom.blur(),
          (n = window?.getSelection()) === null ||
            n === void 0 ||
            n.removeAllRanges());
      }),
      !0
    ),
  Fb =
    (t = !1) =>
    ({ commands: e }) =>
      e.setContent("", t),
  Vb =
    () =>
    ({ state: t, tr: e, dispatch: n }) => {
      const { selection: r } = e,
        { ranges: s } = r;
      return (
        n &&
          s.forEach(({ $from: i, $to: o }) => {
            t.doc.nodesBetween(i.pos, o.pos, (l, a) => {
              if (l.type.isText) return;
              const { doc: c, mapping: u } = e,
                d = c.resolve(u.map(a)),
                h = c.resolve(u.map(a + l.nodeSize)),
                p = d.blockRange(h);
              if (!p) return;
              const y = Lr(p);
              if (l.type.isTextblock) {
                const { defaultType: b } = d.parent.contentMatchAt(d.index());
                e.setNodeMarkup(p.start, b);
              }
              (y || y === 0) && e.lift(p, y);
            });
          }),
        !0
      );
    },
  Wb = (t) => (e) => t(e),
  Ub =
    () =>
    ({ state: t, dispatch: e }) =>
      Fp(t, e),
  Kb =
    (t, e) =>
    ({ editor: n, tr: r }) => {
      const { state: s } = n,
        i = s.doc.slice(t.from, t.to);
      r.deleteRange(t.from, t.to);
      const o = r.mapping.map(e);
      return (
        r.insert(o, i.content), r.setSelection(new re(r.doc.resolve(o - 1))), !0
      );
    },
  qb =
    () =>
    ({ tr: t, dispatch: e }) => {
      const { selection: n } = t,
        r = n.$anchor.node();
      if (r.content.size > 0) return !1;
      const s = t.selection.$anchor;
      for (let i = s.depth; i > 0; i -= 1)
        if (s.node(i).type === r.type) {
          if (e) {
            const l = s.before(i),
              a = s.after(i);
            t.delete(l, a).scrollIntoView();
          }
          return !0;
        }
      return !1;
    },
  Jb =
    (t) =>
    ({ tr: e, state: n, dispatch: r }) => {
      const s = Ye(t, n.schema),
        i = e.selection.$anchor;
      for (let o = i.depth; o > 0; o -= 1)
        if (i.node(o).type === s) {
          if (r) {
            const a = i.before(o),
              c = i.after(o);
            e.delete(a, c).scrollIntoView();
          }
          return !0;
        }
      return !1;
    },
  Gb =
    (t) =>
    ({ tr: e, dispatch: n }) => {
      const { from: r, to: s } = t;
      return n && e.delete(r, s), !0;
    },
  Qb =
    () =>
    ({ state: t, dispatch: e }) =>
      fc(t, e),
  Yb =
    () =>
    ({ commands: t }) =>
      t.keyboardShortcut("Enter"),
  Xb =
    () =>
    ({ state: t, dispatch: e }) =>
      bb(t, e);
function Vi(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length
    ? r.every((s) =>
        n.strict ? e[s] === t[s] : Nb(e[s]) ? e[s].test(t[s]) : e[s] === t[s],
      )
    : !0;
}
function qp(t, e, n = {}) {
  return t.find(
    (r) =>
      r.type === e &&
      Vi(Object.fromEntries(Object.keys(n).map((s) => [s, r.attrs[s]])), n),
  );
}
function xd(t, e, n = {}) {
  return !!qp(t, e, n);
}
function yc(t, e, n) {
  var r;
  if (!t || !e) return;
  let s = t.parent.childAfter(t.parentOffset);
  if (
    ((!s.node || !s.node.marks.some((u) => u.type === e)) &&
      (s = t.parent.childBefore(t.parentOffset)),
    !s.node ||
      !s.node.marks.some((u) => u.type === e) ||
      ((n =
        n ||
        ((r = s.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs)),
      !qp([...s.node.marks], e, n)))
  )
    return;
  let o = s.index,
    l = t.start() + s.offset,
    a = o + 1,
    c = l + s.node.nodeSize;
  for (; o > 0 && xd([...t.parent.child(o - 1).marks], e, n); )
    (o -= 1), (l -= t.parent.child(o).nodeSize);
  for (; a < t.parent.childCount && xd([...t.parent.child(a).marks], e, n); )
    (c += t.parent.child(a).nodeSize), (a += 1);
  return { from: l, to: c };
}
function Hn(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(
        `There is no mark type named '${t}'. Maybe you forgot to add the extension?`,
      );
    return e.marks[t];
  }
  return t;
}
const Zb =
    (t, e = {}) =>
    ({ tr: n, state: r, dispatch: s }) => {
      const i = Hn(t, r.schema),
        { doc: o, selection: l } = n,
        { $from: a, from: c, to: u } = l;
      if (s) {
        const d = yc(a, i, e);
        if (d && d.from <= c && d.to >= u) {
          const h = re.create(o, d.from, d.to);
          n.setSelection(h);
        }
      }
      return !0;
    },
  e3 = (t) => (e) => {
    const n = typeof t == "function" ? t(e) : t;
    for (let r = 0; r < n.length; r += 1) if (n[r](e)) return !0;
    return !1;
  };
function Jp(t) {
  return t instanceof re;
}
function qn(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function t3(t, e = null) {
  if (!e) return null;
  const n = oe.atStart(t),
    r = oe.atEnd(t);
  if (e === "start" || e === !0) return n;
  if (e === "end") return r;
  const s = n.from,
    i = r.to;
  return e === "all"
    ? re.create(t, qn(0, s, i), qn(t.content.size, s, i))
    : re.create(t, qn(e, s, i), qn(e, s, i));
}
function n3() {
  return (
    navigator.platform === "Android" || /android/i.test(navigator.userAgent)
  );
}
function bc() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}
const r3 =
    (t = null, e = {}) =>
    ({ editor: n, view: r, tr: s, dispatch: i }) => {
      e = { scrollIntoView: !0, ...e };
      const o = () => {
        (bc() || n3()) && r.dom.focus(),
          requestAnimationFrame(() => {
            n.isDestroyed ||
              (r.focus(), e?.scrollIntoView && n.commands.scrollIntoView());
          });
      };
      if ((r.hasFocus() && t === null) || t === !1) return !0;
      if (i && t === null && !Jp(n.state.selection)) return o(), !0;
      const l = t3(s.doc, t) || n.state.selection,
        a = n.state.selection.eq(l);
      return (
        i &&
          (a || s.setSelection(l),
          a && s.storedMarks && s.setStoredMarks(s.storedMarks),
          o()),
        !0
      );
    },
  s3 = (t, e) => (n) => t.every((r, s) => e(r, { ...n, index: s })),
  i3 =
    (t, e) =>
    ({ tr: n, commands: r }) =>
      r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e),
  Gp = (t) => {
    const e = t.childNodes;
    for (let n = e.length - 1; n >= 0; n -= 1) {
      const r = e[n];
      r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue)
        ? t.removeChild(r)
        : r.nodeType === 1 && Gp(r);
    }
    return t;
  };
function Js(t) {
  const e = `<body>${t}</body>`,
    n = new window.DOMParser().parseFromString(e, "text/html").body;
  return Gp(n);
}
function Wi(t, e, n) {
  if (t instanceof Xn || t instanceof H) return t;
  n = { slice: !0, parseOptions: {}, ...n };
  const r = typeof t == "object" && t !== null,
    s = typeof t == "string";
  if (r)
    try {
      if (Array.isArray(t) && t.length > 0)
        return H.fromArray(t.map((l) => e.nodeFromJSON(l)));
      const o = e.nodeFromJSON(t);
      return n.errorOnInvalidContent && o.check(), o;
    } catch (i) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: i });
      return (
        console.warn(
          "[tiptap warn]: Invalid content.",
          "Passed value:",
          t,
          "Error:",
          i,
        ),
        Wi("", e, n)
      );
    }
  if (s) {
    if (n.errorOnInvalidContent) {
      let o = !1,
        l = "";
      const a = new Uy({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (
                  (o = !0), (l = typeof c == "string" ? c : c.outerHTML), null
                ),
              },
            ],
          },
        }),
      });
      if (
        (n.slice
          ? ui.fromSchema(a).parseSlice(Js(t), n.parseOptions)
          : ui.fromSchema(a).parse(Js(t), n.parseOptions),
        n.errorOnInvalidContent && o)
      )
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`),
        });
    }
    const i = ui.fromSchema(e);
    return n.slice
      ? i.parseSlice(Js(t), n.parseOptions).content
      : i.parse(Js(t), n.parseOptions);
  }
  return Wi("", e, n);
}
function o3(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e) return;
  const s = t.steps[r];
  if (!(s instanceof We || s instanceof Ue)) return;
  const i = t.mapping.maps[r];
  let o = 0;
  i.forEach((l, a, c, u) => {
    o === 0 && (o = u);
  }),
    t.setSelection(oe.near(t.doc.resolve(o), n));
}
const l3 = (t) => !("type" in t),
  a3 =
    (t, e, n) =>
    ({ tr: r, dispatch: s, editor: i }) => {
      var o;
      if (s) {
        n = {
          parseOptions: i.options.parseOptions,
          updateSelection: !0,
          applyInputRules: !1,
          applyPasteRules: !1,
          ...n,
        };
        let l;
        try {
          l = Wi(e, i.schema, {
            parseOptions: { preserveWhitespace: "full", ...n.parseOptions },
            errorOnInvalidContent:
              (o = n.errorOnInvalidContent) !== null && o !== void 0
                ? o
                : i.options.enableContentCheck,
          });
        } catch (y) {
          return (
            i.emit("contentError", {
              editor: i,
              error: y,
              disableCollaboration: () => {
                i.storage.collaboration &&
                  (i.storage.collaboration.isDisabled = !0);
              },
            }),
            !1
          );
        }
        let { from: a, to: c } =
            typeof t == "number"
              ? { from: t, to: t }
              : { from: t.from, to: t.to },
          u = !0,
          d = !0;
        if (
          ((l3(l) ? l : [l]).forEach((y) => {
            y.check(),
              (u = u ? y.isText && y.marks.length === 0 : !1),
              (d = d ? y.isBlock : !1);
          }),
          a === c && d)
        ) {
          const { parent: y } = r.doc.resolve(a);
          y.isTextblock &&
            !y.type.spec.code &&
            !y.childCount &&
            ((a -= 1), (c += 1));
        }
        let p;
        if (u) {
          if (Array.isArray(e)) p = e.map((y) => y.text || "").join("");
          else if (e instanceof H) {
            let y = "";
            e.forEach((b) => {
              b.text && (y += b.text);
            }),
              (p = y);
          } else typeof e == "object" && e && e.text ? (p = e.text) : (p = e);
          r.insertText(p, a, c);
        } else (p = l), r.replaceWith(a, c, p);
        n.updateSelection && o3(r, r.steps.length - 1, -1),
          n.applyInputRules &&
            r.setMeta("applyInputRules", { from: a, text: p }),
          n.applyPasteRules &&
            r.setMeta("applyPasteRules", { from: a, text: p });
      }
      return !0;
    },
  c3 =
    () =>
    ({ state: t, dispatch: e }) =>
      mb(t, e),
  u3 =
    () =>
    ({ state: t, dispatch: e }) =>
      gb(t, e),
  d3 =
    () =>
    ({ state: t, dispatch: e }) =>
      Lp(t, e),
  f3 =
    () =>
    ({ state: t, dispatch: e }) =>
      Bp(t, e),
  h3 =
    () =>
    ({ state: t, dispatch: e, tr: n }) => {
      try {
        const r = Po(t.doc, t.selection.$from.pos, -1);
        return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
      } catch {
        return !1;
      }
    },
  p3 =
    () =>
    ({ state: t, dispatch: e, tr: n }) => {
      try {
        const r = Po(t.doc, t.selection.$from.pos, 1);
        return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
      } catch {
        return !1;
      }
    },
  m3 =
    () =>
    ({ state: t, dispatch: e }) =>
      hb(t, e),
  g3 =
    () =>
    ({ state: t, dispatch: e }) =>
      pb(t, e);
function Qp() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function y3(t) {
  const e = t.split(/-(?!$)/);
  let n = e[e.length - 1];
  n === "Space" && (n = " ");
  let r, s, i, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a)) o = !0;
    else if (/^a(lt)?$/i.test(a)) r = !0;
    else if (/^(c|ctrl|control)$/i.test(a)) s = !0;
    else if (/^s(hift)?$/i.test(a)) i = !0;
    else if (/^mod$/i.test(a)) bc() || Qp() ? (o = !0) : (s = !0);
    else throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return (
    r && (n = `Alt-${n}`),
    s && (n = `Ctrl-${n}`),
    o && (n = `Meta-${n}`),
    i && (n = `Shift-${n}`),
    n
  );
}
const b3 =
  (t) =>
  ({ editor: e, view: n, tr: r, dispatch: s }) => {
    const i = y3(t).split(/-(?!$)/),
      o = i.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)),
      l = new KeyboardEvent("keydown", {
        key: o === "Space" ? " " : o,
        altKey: i.includes("Alt"),
        ctrlKey: i.includes("Ctrl"),
        metaKey: i.includes("Meta"),
        shiftKey: i.includes("Shift"),
        bubbles: !0,
        cancelable: !0,
      }),
      a = e.captureTransaction(() => {
        n.someProp("handleKeyDown", (c) => c(n, l));
      });
    return (
      a?.steps.forEach((c) => {
        const u = c.map(r.mapping);
        u && s && r.maybeStep(u);
      }),
      !0
    );
  };
function wc(t, e, n = {}) {
  const { from: r, to: s, empty: i } = t.selection,
    o = e ? Ye(e, t.schema) : null,
    l = [];
  t.doc.nodesBetween(r, s, (d, h) => {
    if (d.isText) return;
    const p = Math.max(r, h),
      y = Math.min(s, h + d.nodeSize);
    l.push({ node: d, from: p, to: y });
  });
  const a = s - r,
    c = l
      .filter((d) => (o ? o.name === d.node.type.name : !0))
      .filter((d) => Vi(d.node.attrs, n, { strict: !1 }));
  return i ? !!c.length : c.reduce((d, h) => d + h.to - h.from, 0) >= a;
}
const w3 =
    (t, e = {}) =>
    ({ state: n, dispatch: r }) => {
      const s = Ye(t, n.schema);
      return wc(n, s, e) ? yb(n, r) : !1;
    },
  v3 =
    () =>
    ({ state: t, dispatch: e }) =>
      Vp(t, e),
  x3 =
    (t) =>
    ({ state: e, dispatch: n }) => {
      const r = Ye(t, e.schema);
      return Tb(r)(e, n);
    },
  k3 =
    () =>
    ({ state: t, dispatch: e }) =>
      $p(t, e);
function vc(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function kd(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce(
    (r, s) => (n.includes(s) || (r[s] = t[s]), r),
    {},
  );
}
const _3 =
    (t, e) =>
    ({ tr: n, state: r, dispatch: s }) => {
      let i = null,
        o = null;
      const l = vc(typeof t == "string" ? t : t.name, r.schema);
      return l
        ? (l === "node" && (i = Ye(t, r.schema)),
          l === "mark" && (o = Hn(t, r.schema)),
          s &&
            n.selection.ranges.forEach((a) => {
              r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, u) => {
                i && i === c.type && n.setNodeMarkup(u, void 0, kd(c.attrs, e)),
                  o &&
                    c.marks.length &&
                    c.marks.forEach((d) => {
                      o === d.type &&
                        n.addMark(u, u + c.nodeSize, o.create(kd(d.attrs, e)));
                    });
              });
            }),
          !0)
        : !1;
    },
  S3 =
    () =>
    ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0),
  C3 =
    () =>
    ({ tr: t, dispatch: e }) => {
      if (e) {
        const n = new xt(t.doc);
        t.setSelection(n);
      }
      return !0;
    },
  E3 =
    () =>
    ({ state: t, dispatch: e }) =>
      zp(t, e),
  A3 =
    () =>
    ({ state: t, dispatch: e }) =>
      Hp(t, e),
  M3 =
    () =>
    ({ state: t, dispatch: e }) =>
      xb(t, e),
  T3 =
    () =>
    ({ state: t, dispatch: e }) =>
      Sb(t, e),
  R3 =
    () =>
    ({ state: t, dispatch: e }) =>
      _b(t, e);
function O3(t, e, n = {}, r = {}) {
  return Wi(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent,
  });
}
const j3 =
  (t, e = !1, n = {}, r = {}) =>
  ({ editor: s, tr: i, dispatch: o, commands: l }) => {
    var a, c;
    const { doc: u } = i;
    if (n.preserveWhitespace !== "full") {
      const d = O3(t, s.schema, n, {
        errorOnInvalidContent:
          (a = r.errorOnInvalidContent) !== null && a !== void 0
            ? a
            : s.options.enableContentCheck,
      });
      return (
        o && i.replaceWith(0, u.content.size, d).setMeta("preventUpdate", !e),
        !0
      );
    }
    return (
      o && i.setMeta("preventUpdate", !e),
      l.insertContentAt({ from: 0, to: u.content.size }, t, {
        parseOptions: n,
        errorOnInvalidContent:
          (c = r.errorOnInvalidContent) !== null && c !== void 0
            ? c
            : s.options.enableContentCheck,
      })
    );
  };
function Yp(t, e) {
  const n = Hn(e, t.schema),
    { from: r, to: s, empty: i } = t.selection,
    o = [];
  i
    ? (t.storedMarks && o.push(...t.storedMarks),
      o.push(...t.selection.$head.marks()))
    : t.doc.nodesBetween(r, s, (a) => {
        o.push(...a.marks);
      });
  const l = o.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function P3(t, e) {
  const n = new ip(t);
  return (
    e.forEach((r) => {
      r.steps.forEach((s) => {
        n.step(s);
      });
    }),
    n
  );
}
function I3(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs()) return n;
  }
  return null;
}
function L3(t, e, n) {
  const r = [];
  return (
    t.nodesBetween(e.from, e.to, (s, i) => {
      n(s) && r.push({ node: s, pos: i });
    }),
    r
  );
}
function Xp(t, e) {
  for (let n = t.depth; n > 0; n -= 1) {
    const r = t.node(n);
    if (e(r))
      return {
        pos: n > 0 ? t.before(n) : 0,
        start: t.start(n),
        depth: n,
        node: r,
      };
  }
}
function xc(t) {
  return (e) => Xp(e.$from, t);
}
function N3(t, e) {
  const n = Ye(e, t.schema),
    { from: r, to: s } = t.selection,
    i = [];
  t.doc.nodesBetween(r, s, (l) => {
    i.push(l);
  });
  const o = i.reverse().find((l) => l.type.name === n.name);
  return o ? { ...o.attrs } : {};
}
function z3(t, e) {
  const n = vc(typeof e == "string" ? e : e.name, t.schema);
  return n === "node" ? N3(t, e) : n === "mark" ? Yp(t, e) : {};
}
function D3(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const s = e(r);
    return Object.prototype.hasOwnProperty.call(n, s) ? !1 : (n[s] = !0);
  });
}
function B3(t) {
  const e = D3(t);
  return e.length === 1
    ? e
    : e.filter(
        (n, r) =>
          !e
            .filter((i, o) => o !== r)
            .some(
              (i) =>
                n.oldRange.from >= i.oldRange.from &&
                n.oldRange.to <= i.oldRange.to &&
                n.newRange.from >= i.newRange.from &&
                n.newRange.to <= i.newRange.to,
            ),
      );
}
function H3(t) {
  const { mapping: e, steps: n } = t,
    r = [];
  return (
    e.maps.forEach((s, i) => {
      const o = [];
      if (s.ranges.length)
        s.forEach((l, a) => {
          o.push({ from: l, to: a });
        });
      else {
        const { from: l, to: a } = n[i];
        if (l === void 0 || a === void 0) return;
        o.push({ from: l, to: a });
      }
      o.forEach(({ from: l, to: a }) => {
        const c = e.slice(i).map(l, -1),
          u = e.slice(i).map(a),
          d = e.invert().map(c, -1),
          h = e.invert().map(u);
        r.push({ oldRange: { from: d, to: h }, newRange: { from: c, to: u } });
      });
    }),
    B3(r)
  );
}
function kc(t, e, n) {
  const r = [];
  return (
    t === e
      ? n
          .resolve(t)
          .marks()
          .forEach((s) => {
            const i = n.resolve(t),
              o = yc(i, s.type);
            o && r.push({ mark: s, ...o });
          })
      : n.nodesBetween(t, e, (s, i) => {
          !s ||
            s?.nodeSize === void 0 ||
            r.push(
              ...s.marks.map((o) => ({ from: i, to: i + s.nodeSize, mark: o })),
            );
        }),
    r
  );
}
function pi(t, e, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([r]) => {
      const s = t.find((i) => i.type === e && i.name === r);
      return s ? s.attribute.keepOnSplit : !1;
    }),
  );
}
function $3(t, e, n = {}) {
  const { empty: r, ranges: s } = t.selection,
    i = e ? Hn(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks())
      .filter((d) => (i ? i.name === d.type.name : !0))
      .find((d) => Vi(d.attrs, n, { strict: !1 }));
  let o = 0;
  const l = [];
  if (
    (s.forEach(({ $from: d, $to: h }) => {
      const p = d.pos,
        y = h.pos;
      t.doc.nodesBetween(p, y, (b, x) => {
        if (!b.isText && !b.marks.length) return;
        const v = Math.max(p, x),
          E = Math.min(y, x + b.nodeSize),
          R = E - v;
        (o += R), l.push(...b.marks.map((f) => ({ mark: f, from: v, to: E })));
      });
    }),
    o === 0)
  )
    return !1;
  const a = l
      .filter((d) => (i ? i.name === d.mark.type.name : !0))
      .filter((d) => Vi(d.mark.attrs, n, { strict: !1 }))
      .reduce((d, h) => d + h.to - h.from, 0),
    c = l
      .filter((d) => (i ? d.mark.type !== i && d.mark.type.excludes(i) : !0))
      .reduce((d, h) => d + h.to - h.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function _d(t, e) {
  const { nodeExtensions: n } = Ib(e),
    r = n.find((o) => o.name === t);
  if (!r) return !1;
  const s = { name: r.name, options: r.options, storage: r.storage },
    i = Be(Qe(r, "group", s));
  return typeof i != "string" ? !1 : i.split(" ").includes("list");
}
function _c(t, { checkChildren: e = !0, ignoreWhitespace: n = !1 } = {}) {
  var r;
  if (n) {
    if (t.type.name === "hardBreak") return !0;
    if (t.isText)
      return /^\s*$/m.test((r = t.text) !== null && r !== void 0 ? r : "");
  }
  if (t.isText) return !t.text;
  if (t.isAtom || t.isLeaf) return !1;
  if (t.content.childCount === 0) return !0;
  if (e) {
    let s = !0;
    return (
      t.content.forEach((i) => {
        s !== !1 &&
          (_c(i, { ignoreWhitespace: n, checkChildren: e }) || (s = !1));
      }),
      s
    );
  }
  return !1;
}
function F3(t) {
  return t instanceof ne;
}
function V3(t, e, n) {
  var r;
  const { selection: s } = e;
  let i = null;
  if ((Jp(s) && (i = s.$cursor), i)) {
    const l = (r = t.storedMarks) !== null && r !== void 0 ? r : i.marks();
    return !!n.isInSet(l) || !l.some((a) => a.type.excludes(n));
  }
  const { ranges: o } = s;
  return o.some(({ $from: l, $to: a }) => {
    let c =
      l.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(n) : !1;
    return (
      t.doc.nodesBetween(l.pos, a.pos, (u, d, h) => {
        if (c) return !1;
        if (u.isInline) {
          const p = !h || h.type.allowsMarkType(n),
            y =
              !!n.isInSet(u.marks) || !u.marks.some((b) => b.type.excludes(n));
          c = p && y;
        }
        return !c;
      }),
      c
    );
  });
}
const W3 =
    (t, e = {}) =>
    ({ tr: n, state: r, dispatch: s }) => {
      const { selection: i } = n,
        { empty: o, ranges: l } = i,
        a = Hn(t, r.schema);
      if (s)
        if (o) {
          const c = Yp(r, a);
          n.addStoredMark(a.create({ ...c, ...e }));
        } else
          l.forEach((c) => {
            const u = c.$from.pos,
              d = c.$to.pos;
            r.doc.nodesBetween(u, d, (h, p) => {
              const y = Math.max(p, u),
                b = Math.min(p + h.nodeSize, d);
              h.marks.find((v) => v.type === a)
                ? h.marks.forEach((v) => {
                    a === v.type &&
                      n.addMark(y, b, a.create({ ...v.attrs, ...e }));
                  })
                : n.addMark(y, b, a.create(e));
            });
          });
      return V3(r, n, a);
    },
  U3 =
    (t, e) =>
    ({ tr: n }) => (n.setMeta(t, e), !0),
  K3 =
    (t, e = {}) =>
    ({ state: n, dispatch: r, chain: s }) => {
      const i = Ye(t, n.schema);
      let o;
      return (
        n.selection.$anchor.sameParent(n.selection.$head) &&
          (o = n.selection.$anchor.parent.attrs),
        i.isTextblock
          ? s()
              .command(({ commands: l }) =>
                vd(i, { ...o, ...e })(n) ? !0 : l.clearNodes(),
              )
              .command(({ state: l }) => vd(i, { ...o, ...e })(l, r))
              .run()
          : (console.warn(
              '[tiptap warn]: Currently "setNode()" only supports text block nodes.',
            ),
            !1)
      );
    },
  q3 =
    (t) =>
    ({ tr: e, dispatch: n }) => {
      if (n) {
        const { doc: r } = e,
          s = qn(t, 0, r.content.size),
          i = ne.create(r, s);
        e.setSelection(i);
      }
      return !0;
    },
  J3 =
    (t) =>
    ({ tr: e, dispatch: n }) => {
      if (n) {
        const { doc: r } = e,
          { from: s, to: i } = typeof t == "number" ? { from: t, to: t } : t,
          o = re.atStart(r).from,
          l = re.atEnd(r).to,
          a = qn(s, o, l),
          c = qn(i, o, l),
          u = re.create(r, a, c);
        e.setSelection(u);
      }
      return !0;
    },
  G3 =
    (t) =>
    ({ state: e, dispatch: n }) => {
      const r = Ye(t, e.schema);
      return jb(r)(e, n);
    };
function Sd(t, e) {
  const n =
    t.storedMarks ||
    (t.selection.$to.parentOffset && t.selection.$from.marks());
  if (n) {
    const r = n.filter((s) => e?.includes(s.type.name));
    t.tr.ensureMarks(r);
  }
}
const Q3 =
    ({ keepMarks: t = !0 } = {}) =>
    ({ tr: e, state: n, dispatch: r, editor: s }) => {
      const { selection: i, doc: o } = e,
        { $from: l, $to: a } = i,
        c = s.extensionManager.attributes,
        u = pi(c, l.node().type.name, l.node().attrs);
      if (i instanceof ne && i.node.isBlock)
        return !l.parentOffset || !dn(o, l.pos)
          ? !1
          : (r &&
              (t && Sd(n, s.extensionManager.splittableMarks),
              e.split(l.pos).scrollIntoView()),
            !0);
      if (!l.parent.isBlock) return !1;
      const d = a.parentOffset === a.parent.content.size,
        h =
          l.depth === 0
            ? void 0
            : I3(l.node(-1).contentMatchAt(l.indexAfter(-1)));
      let p = d && h ? [{ type: h, attrs: u }] : void 0,
        y = dn(e.doc, e.mapping.map(l.pos), 1, p);
      if (
        (!p &&
          !y &&
          dn(e.doc, e.mapping.map(l.pos), 1, h ? [{ type: h }] : void 0) &&
          ((y = !0), (p = h ? [{ type: h, attrs: u }] : void 0)),
        r)
      ) {
        if (
          y &&
          (i instanceof re && e.deleteSelection(),
          e.split(e.mapping.map(l.pos), 1, p),
          h && !d && !l.parentOffset && l.parent.type !== h)
        ) {
          const b = e.mapping.map(l.before()),
            x = e.doc.resolve(b);
          l.node(-1).canReplaceWith(x.index(), x.index() + 1, h) &&
            e.setNodeMarkup(e.mapping.map(l.before()), h);
        }
        t && Sd(n, s.extensionManager.splittableMarks), e.scrollIntoView();
      }
      return y;
    },
  Y3 =
    (t, e = {}) =>
    ({ tr: n, state: r, dispatch: s, editor: i }) => {
      var o;
      const l = Ye(t, r.schema),
        { $from: a, $to: c } = r.selection,
        u = r.selection.node;
      if ((u && u.isBlock) || a.depth < 2 || !a.sameParent(c)) return !1;
      const d = a.node(-1);
      if (d.type !== l) return !1;
      const h = i.extensionManager.attributes;
      if (
        a.parent.content.size === 0 &&
        a.node(-1).childCount === a.indexAfter(-1)
      ) {
        if (
          a.depth === 2 ||
          a.node(-3).type !== l ||
          a.index(-2) !== a.node(-2).childCount - 1
        )
          return !1;
        if (s) {
          let v = H.empty;
          const E = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
          for (let S = a.depth - E; S >= a.depth - 3; S -= 1)
            v = H.from(a.node(S).copy(v));
          const R =
              a.indexAfter(-1) < a.node(-2).childCount
                ? 1
                : a.indexAfter(-2) < a.node(-3).childCount
                  ? 2
                  : 3,
            f = { ...pi(h, a.node().type.name, a.node().attrs), ...e },
            g =
              ((o = l.contentMatch.defaultType) === null || o === void 0
                ? void 0
                : o.createAndFill(f)) || void 0;
          v = v.append(H.from(l.createAndFill(null, g) || void 0));
          const m = a.before(a.depth - (E - 1));
          n.replace(m, a.after(-R), new J(v, 4 - E, 0));
          let w = -1;
          n.doc.nodesBetween(m, n.doc.content.size, (S, M) => {
            if (w > -1) return !1;
            S.isTextblock && S.content.size === 0 && (w = M + 1);
          }),
            w > -1 && n.setSelection(re.near(n.doc.resolve(w))),
            n.scrollIntoView();
        }
        return !0;
      }
      const p = c.pos === a.end() ? d.contentMatchAt(0).defaultType : null,
        y = { ...pi(h, d.type.name, d.attrs), ...e },
        b = { ...pi(h, a.node().type.name, a.node().attrs), ...e };
      n.delete(a.pos, c.pos);
      const x = p
        ? [
            { type: l, attrs: y },
            { type: p, attrs: b },
          ]
        : [{ type: l, attrs: y }];
      if (!dn(n.doc, a.pos, 2)) return !1;
      if (s) {
        const { selection: v, storedMarks: E } = r,
          { splittableMarks: R } = i.extensionManager,
          f = E || (v.$to.parentOffset && v.$from.marks());
        if ((n.split(a.pos, 2, x).scrollIntoView(), !f || !s)) return !0;
        const g = f.filter((m) => R.includes(m.type.name));
        n.ensureMarks(g);
      }
      return !0;
    },
  pl = (t, e) => {
    const n = xc((o) => o.type === e)(t.selection);
    if (!n) return !0;
    const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
    if (r === void 0) return !0;
    const s = t.doc.nodeAt(r);
    return n.node.type === s?.type && zn(t.doc, n.pos) && t.join(n.pos), !0;
  },
  ml = (t, e) => {
    const n = xc((o) => o.type === e)(t.selection);
    if (!n) return !0;
    const r = t.doc.resolve(n.start).after(n.depth);
    if (r === void 0) return !0;
    const s = t.doc.nodeAt(r);
    return n.node.type === s?.type && zn(t.doc, r) && t.join(r), !0;
  },
  X3 =
    (t, e, n, r = {}) =>
    ({
      editor: s,
      tr: i,
      state: o,
      dispatch: l,
      chain: a,
      commands: c,
      can: u,
    }) => {
      const { extensions: d, splittableMarks: h } = s.extensionManager,
        p = Ye(t, o.schema),
        y = Ye(e, o.schema),
        { selection: b, storedMarks: x } = o,
        { $from: v, $to: E } = b,
        R = v.blockRange(E),
        f = x || (b.$to.parentOffset && b.$from.marks());
      if (!R) return !1;
      const g = xc((m) => _d(m.type.name, d))(b);
      if (R.depth >= 1 && g && R.depth - g.depth <= 1) {
        if (g.node.type === p) return c.liftListItem(y);
        if (_d(g.node.type.name, d) && p.validContent(g.node.content) && l)
          return a()
            .command(() => (i.setNodeMarkup(g.pos, p), !0))
            .command(() => pl(i, p))
            .command(() => ml(i, p))
            .run();
      }
      return !n || !f || !l
        ? a()
            .command(() => (u().wrapInList(p, r) ? !0 : c.clearNodes()))
            .wrapInList(p, r)
            .command(() => pl(i, p))
            .command(() => ml(i, p))
            .run()
        : a()
            .command(() => {
              const m = u().wrapInList(p, r),
                w = f.filter((S) => h.includes(S.type.name));
              return i.ensureMarks(w), m ? !0 : c.clearNodes();
            })
            .wrapInList(p, r)
            .command(() => pl(i, p))
            .command(() => ml(i, p))
            .run();
    },
  Z3 =
    (t, e = {}, n = {}) =>
    ({ state: r, commands: s }) => {
      const { extendEmptyMarkRange: i = !1 } = n,
        o = Hn(t, r.schema);
      return $3(r, o, e)
        ? s.unsetMark(o, { extendEmptyMarkRange: i })
        : s.setMark(o, e);
    },
  ew =
    (t, e, n = {}) =>
    ({ state: r, commands: s }) => {
      const i = Ye(t, r.schema),
        o = Ye(e, r.schema),
        l = wc(r, i, n);
      let a;
      return (
        r.selection.$anchor.sameParent(r.selection.$head) &&
          (a = r.selection.$anchor.parent.attrs),
        l ? s.setNode(o, a) : s.setNode(i, { ...a, ...n })
      );
    },
  tw =
    (t, e = {}) =>
    ({ state: n, commands: r }) => {
      const s = Ye(t, n.schema);
      return wc(n, s, e) ? r.lift(s) : r.wrapIn(s, e);
    },
  nw =
    () =>
    ({ state: t, dispatch: e }) => {
      const n = t.plugins;
      for (let r = 0; r < n.length; r += 1) {
        const s = n[r];
        let i;
        if (s.spec.isInputRules && (i = s.getState(t))) {
          if (e) {
            const o = t.tr,
              l = i.transform;
            for (let a = l.steps.length - 1; a >= 0; a -= 1)
              o.step(l.steps[a].invert(l.docs[a]));
            if (i.text) {
              const a = o.doc.resolve(i.from).marks();
              o.replaceWith(i.from, i.to, t.schema.text(i.text, a));
            } else o.delete(i.from, i.to);
          }
          return !0;
        }
      }
      return !1;
    },
  rw =
    () =>
    ({ tr: t, dispatch: e }) => {
      const { selection: n } = t,
        { empty: r, ranges: s } = n;
      return (
        r ||
          (e &&
            s.forEach((i) => {
              t.removeMark(i.$from.pos, i.$to.pos);
            })),
        !0
      );
    },
  sw =
    (t, e = {}) =>
    ({ tr: n, state: r, dispatch: s }) => {
      var i;
      const { extendEmptyMarkRange: o = !1 } = e,
        { selection: l } = n,
        a = Hn(t, r.schema),
        { $from: c, empty: u, ranges: d } = l;
      if (!s) return !0;
      if (u && o) {
        let { from: h, to: p } = l;
        const y =
            (i = c.marks().find((x) => x.type === a)) === null || i === void 0
              ? void 0
              : i.attrs,
          b = yc(c, a, y);
        b && ((h = b.from), (p = b.to)), n.removeMark(h, p, a);
      } else
        d.forEach((h) => {
          n.removeMark(h.$from.pos, h.$to.pos, a);
        });
      return n.removeStoredMark(a), !0;
    },
  iw =
    (t, e = {}) =>
    ({ tr: n, state: r, dispatch: s }) => {
      let i = null,
        o = null;
      const l = vc(typeof t == "string" ? t : t.name, r.schema);
      return l
        ? (l === "node" && (i = Ye(t, r.schema)),
          l === "mark" && (o = Hn(t, r.schema)),
          s &&
            n.selection.ranges.forEach((a) => {
              const c = a.$from.pos,
                u = a.$to.pos;
              let d, h, p, y;
              n.selection.empty
                ? r.doc.nodesBetween(c, u, (b, x) => {
                    i &&
                      i === b.type &&
                      ((p = Math.max(x, c)),
                      (y = Math.min(x + b.nodeSize, u)),
                      (d = x),
                      (h = b));
                  })
                : r.doc.nodesBetween(c, u, (b, x) => {
                    x < c &&
                      i &&
                      i === b.type &&
                      ((p = Math.max(x, c)),
                      (y = Math.min(x + b.nodeSize, u)),
                      (d = x),
                      (h = b)),
                      x >= c &&
                        x <= u &&
                        (i &&
                          i === b.type &&
                          n.setNodeMarkup(x, void 0, { ...b.attrs, ...e }),
                        o &&
                          b.marks.length &&
                          b.marks.forEach((v) => {
                            if (o === v.type) {
                              const E = Math.max(x, c),
                                R = Math.min(x + b.nodeSize, u);
                              n.addMark(E, R, o.create({ ...v.attrs, ...e }));
                            }
                          }));
                  }),
                h &&
                  (d !== void 0 &&
                    n.setNodeMarkup(d, void 0, { ...h.attrs, ...e }),
                  o &&
                    h.marks.length &&
                    h.marks.forEach((b) => {
                      o === b.type &&
                        n.addMark(p, y, o.create({ ...b.attrs, ...e }));
                    }));
            }),
          !0)
        : !1;
    },
  ow =
    (t, e = {}) =>
    ({ state: n, dispatch: r }) => {
      const s = Ye(t, n.schema);
      return Cb(s, e)(n, r);
    },
  lw =
    (t, e = {}) =>
    ({ state: n, dispatch: r }) => {
      const s = Ye(t, n.schema);
      return Eb(s, e)(n, r);
    };
var aw = Object.freeze({
  __proto__: null,
  blur: $b,
  clearContent: Fb,
  clearNodes: Vb,
  command: Wb,
  createParagraphNear: Ub,
  cut: Kb,
  deleteCurrentNode: qb,
  deleteNode: Jb,
  deleteRange: Gb,
  deleteSelection: Qb,
  enter: Yb,
  exitCode: Xb,
  extendMarkRange: Zb,
  first: e3,
  focus: r3,
  forEach: s3,
  insertContent: i3,
  insertContentAt: a3,
  joinBackward: d3,
  joinDown: u3,
  joinForward: f3,
  joinItemBackward: h3,
  joinItemForward: p3,
  joinTextblockBackward: m3,
  joinTextblockForward: g3,
  joinUp: c3,
  keyboardShortcut: b3,
  lift: w3,
  liftEmptyBlock: v3,
  liftListItem: x3,
  newlineInCode: k3,
  resetAttributes: _3,
  scrollIntoView: S3,
  selectAll: C3,
  selectNodeBackward: E3,
  selectNodeForward: A3,
  selectParentNode: M3,
  selectTextblockEnd: T3,
  selectTextblockStart: R3,
  setContent: j3,
  setMark: W3,
  setMeta: U3,
  setNode: K3,
  setNodeSelection: q3,
  setTextSelection: J3,
  sinkListItem: G3,
  splitBlock: Q3,
  splitListItem: Y3,
  toggleList: X3,
  toggleMark: Z3,
  toggleNode: ew,
  toggleWrap: tw,
  undoInputRule: nw,
  unsetAllMarks: rw,
  unsetMark: sw,
  updateAttributes: iw,
  wrapIn: ow,
  wrapInList: lw,
});
$e.create({
  name: "commands",
  addCommands() {
    return { ...aw };
  },
});
$e.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new Fe({
        key: new Ve("tiptapDrop"),
        props: {
          handleDrop: (t, e, n, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: n,
              moved: r,
            });
          },
        },
      }),
    ];
  },
});
$e.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Fe({
        key: new Ve("editable"),
        props: { editable: () => this.editor.options.editable },
      }),
    ];
  },
});
$e.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new Fe({
        key: new Ve("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, n) => {
              t.isFocused = !0;
              const r = t.state.tr
                .setMeta("focus", { event: n })
                .setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, n) => {
              t.isFocused = !1;
              const r = t.state.tr
                .setMeta("blur", { event: n })
                .setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
          },
        },
      }),
    ];
  },
});
$e.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () =>
        this.editor.commands.first(({ commands: o }) => [
          () => o.undoInputRule(),
          () =>
            o.command(({ tr: l }) => {
              const { selection: a, doc: c } = l,
                { empty: u, $anchor: d } = a,
                { pos: h, parent: p } = d,
                y = d.parent.isTextblock && h > 0 ? l.doc.resolve(h - 1) : d,
                b = y.parent.type.spec.isolating,
                x = d.pos - d.parentOffset,
                v =
                  b && y.parent.childCount === 1
                    ? x === d.pos
                    : oe.atStart(c).from === h;
              return !u ||
                !p.type.isTextblock ||
                p.textContent.length ||
                !v ||
                (v && d.parent.type.name === "paragraph")
                ? !1
                : o.clearNodes();
            }),
          () => o.deleteSelection(),
          () => o.joinBackward(),
          () => o.selectNodeBackward(),
        ]),
      e = () =>
        this.editor.commands.first(({ commands: o }) => [
          () => o.deleteSelection(),
          () => o.deleteCurrentNode(),
          () => o.joinForward(),
          () => o.selectNodeForward(),
        ]),
      r = {
        Enter: () =>
          this.editor.commands.first(({ commands: o }) => [
            () => o.newlineInCode(),
            () => o.createParagraphNear(),
            () => o.liftEmptyBlock(),
            () => o.splitBlock(),
          ]),
        "Mod-Enter": () => this.editor.commands.exitCode(),
        Backspace: t,
        "Mod-Backspace": t,
        "Shift-Backspace": t,
        Delete: e,
        "Mod-Delete": e,
        "Mod-a": () => this.editor.commands.selectAll(),
      },
      s = { ...r },
      i = {
        ...r,
        "Ctrl-h": t,
        "Alt-Backspace": t,
        "Ctrl-d": e,
        "Ctrl-Alt-Backspace": e,
        "Alt-Delete": e,
        "Alt-d": e,
        "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
        "Ctrl-e": () => this.editor.commands.selectTextblockEnd(),
      };
    return bc() || Qp() ? i : s;
  },
  addProseMirrorPlugins() {
    return [
      new Fe({
        key: new Ve("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (t.some((b) => b.getMeta("composition"))) return;
          const r = t.some((b) => b.docChanged) && !e.doc.eq(n.doc),
            s = t.some((b) => b.getMeta("preventClearDocument"));
          if (!r || s) return;
          const { empty: i, from: o, to: l } = e.selection,
            a = oe.atStart(e.doc).from,
            c = oe.atEnd(e.doc).to;
          if (i || !(o === a && l === c) || !_c(n.doc)) return;
          const h = n.tr,
            p = Kp({ state: n, transaction: h }),
            { commands: y } = new Pb({ editor: this.editor, state: p });
          if ((y.clearNodes(), !!h.steps.length)) return h;
        },
      }),
    ];
  },
});
$e.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new Fe({
        key: new Ve("tiptapPaste"),
        props: {
          handlePaste: (t, e, n) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: n,
            });
          },
        },
      }),
    ];
  },
});
$e.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Fe({
        key: new Ve("tabindex"),
        props: {
          attributes: () => (this.editor.isEditable ? { tabindex: "0" } : {}),
        },
      }),
    ];
  },
});
function sr(t) {
  return new zs({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const s = Be(t.getAttributes, void 0, r);
      if (s === !1 || s === null) return null;
      const { tr: i } = e,
        o = r[r.length - 1],
        l = r[0];
      if (o) {
        const a = l.search(/\S/),
          c = n.from + l.indexOf(o),
          u = c + o.length;
        if (
          kc(n.from, n.to, e.doc)
            .filter((p) =>
              p.mark.type.excluded.find(
                (b) => b === t.type && b !== p.mark.type,
              ),
            )
            .filter((p) => p.to > c).length
        )
          return null;
        u < n.to && i.delete(u, n.to), c > n.from && i.delete(n.from + a, c);
        const h = n.from + a + o.length;
        i.addMark(n.from + a, h, t.type.create(s || {})),
          i.removeStoredMark(t.type);
      }
    },
  });
}
function Zp(t) {
  return new zs({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const s = Be(t.getAttributes, void 0, r) || {},
        { tr: i } = e,
        o = n.from;
      let l = n.to;
      const a = t.type.create(s);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let u = o + c;
        u > l ? (u = l) : (l = u + r[1].length);
        const d = r[0][r[0].length - 1];
        i.insertText(d, o + r[0].length - 1), i.replaceWith(u, l, a);
      } else if (r[0]) {
        const c = t.type.isInline ? o : o - 1;
        i.insert(c, t.type.create(s)).delete(
          i.mapping.map(o),
          i.mapping.map(l),
        );
      }
      i.scrollIntoView();
    },
  });
}
function aa(t) {
  return new zs({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const s = e.doc.resolve(n.from),
        i = Be(t.getAttributes, void 0, r) || {};
      if (!s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), t.type))
        return null;
      e.tr.delete(n.from, n.to).setBlockType(n.from, n.from, t.type, i);
    },
  });
}
function Ne(t) {
  return new zs({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      let s = t.replace,
        i = n.from;
      const o = n.to;
      if (r[1]) {
        const l = r[0].lastIndexOf(r[1]);
        (s += r[0].slice(l + r[1].length)), (i += l);
        const a = i - o;
        a > 0 && ((s = r[0].slice(l - a, l) + s), (i = o));
      }
      e.tr.insertText(s, i, o);
    },
  });
}
function Ts(t) {
  return new zs({
    find: t.find,
    handler: ({ state: e, range: n, match: r, chain: s }) => {
      const i = Be(t.getAttributes, void 0, r) || {},
        o = e.tr.delete(n.from, n.to),
        a = o.doc.resolve(n.from).blockRange(),
        c = a && nc(a, t.type, i);
      if (!c) return null;
      if ((o.wrap(a, c), t.keepMarks && t.editor)) {
        const { selection: d, storedMarks: h } = e,
          { splittableMarks: p } = t.editor.extensionManager,
          y = h || (d.$to.parentOffset && d.$from.marks());
        if (y) {
          const b = y.filter((x) => p.includes(x.type.name));
          o.ensureMarks(b);
        }
      }
      if (t.keepAttributes) {
        const d =
          t.type.name === "bulletList" || t.type.name === "orderedList"
            ? "listItem"
            : "taskList";
        s().updateAttributes(d, i).run();
      }
      const u = o.doc.resolve(n.from - 1).nodeBefore;
      u &&
        u.type === t.type &&
        zn(o.doc, n.from - 1) &&
        (!t.joinPredicate || t.joinPredicate(r, u)) &&
        o.join(n.from - 1);
    },
  });
}
class ze {
  constructor(e = {}) {
    (this.type = "node"),
      (this.name = "node"),
      (this.parent = null),
      (this.child = null),
      (this.config = { name: this.name, defaultOptions: {} }),
      (this.config = { ...this.config, ...e }),
      (this.name = this.config.name),
      e.defaultOptions &&
        Object.keys(e.defaultOptions).length > 0 &&
        console.warn(
          `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`,
        ),
      (this.options = this.config.defaultOptions),
      this.config.addOptions &&
        (this.options = Be(Qe(this, "addOptions", { name: this.name }))),
      (this.storage =
        Be(
          Qe(this, "addStorage", { name: this.name, options: this.options }),
        ) || {});
  }
  static create(e = {}) {
    return new ze(e);
  }
  configure(e = {}) {
    const n = this.extend({
      ...this.config,
      addOptions: () => Do(this.options, e),
    });
    return (n.name = this.name), (n.parent = this.parent), n;
  }
  extend(e = {}) {
    const n = new ze(e);
    return (
      (n.parent = this),
      (this.child = n),
      (n.name = e.name ? e.name : n.parent.name),
      e.defaultOptions &&
        Object.keys(e.defaultOptions).length > 0 &&
        console.warn(
          `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`,
        ),
      (n.options = Be(Qe(n, "addOptions", { name: n.name }))),
      (n.storage = Be(
        Qe(n, "addStorage", { name: n.name, options: n.options }),
      )),
      n
    );
  }
}
function In(t) {
  return new Db({
    find: t.find,
    handler: ({ state: e, range: n, match: r, pasteEvent: s }) => {
      const i = Be(t.getAttributes, void 0, r, s);
      if (i === !1 || i === null) return null;
      const { tr: o } = e,
        l = r[r.length - 1],
        a = r[0];
      let c = n.to;
      if (l) {
        const u = a.search(/\S/),
          d = n.from + a.indexOf(l),
          h = d + l.length;
        if (
          kc(n.from, n.to, e.doc)
            .filter((y) =>
              y.mark.type.excluded.find(
                (x) => x === t.type && x !== y.mark.type,
              ),
            )
            .filter((y) => y.to > d).length
        )
          return null;
        h < n.to && o.delete(h, n.to),
          d > n.from && o.delete(n.from + u, d),
          (c = n.from + u + l.length),
          o.addMark(n.from + u, c, t.type.create(i || {})),
          o.removeStoredMark(t.type);
      }
    },
  });
}
function cw(t) {
  return t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
const uw = /^\s*>\s$/,
  dw = ze.create({
    name: "blockquote",
    addOptions() {
      return { HTMLAttributes: {} };
    },
    content: "block+",
    group: "block",
    defining: !0,
    parseHTML() {
      return [{ tag: "blockquote" }];
    },
    renderHTML({ HTMLAttributes: t }) {
      return ["blockquote", xe(this.options.HTMLAttributes, t), 0];
    },
    addCommands() {
      return {
        setBlockquote:
          () =>
          ({ commands: t }) =>
            t.wrapIn(this.name),
        toggleBlockquote:
          () =>
          ({ commands: t }) =>
            t.toggleWrap(this.name),
        unsetBlockquote:
          () =>
          ({ commands: t }) =>
            t.lift(this.name),
      };
    },
    addKeyboardShortcuts() {
      return { "Mod-Shift-b": () => this.editor.commands.toggleBlockquote() };
    },
    addInputRules() {
      return [Ts({ find: uw, type: this.type })];
    },
  }),
  fw = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/,
  hw = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g,
  pw = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/,
  mw = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g,
  gw = Yt.create({
    name: "bold",
    addOptions() {
      return { HTMLAttributes: {} };
    },
    parseHTML() {
      return [
        { tag: "strong" },
        { tag: "b", getAttrs: (t) => t.style.fontWeight !== "normal" && null },
        {
          style: "font-weight=400",
          clearMark: (t) => t.type.name === this.name,
        },
        {
          style: "font-weight",
          getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null,
        },
      ];
    },
    renderHTML({ HTMLAttributes: t }) {
      return ["strong", xe(this.options.HTMLAttributes, t), 0];
    },
    addCommands() {
      return {
        setBold:
          () =>
          ({ commands: t }) =>
            t.setMark(this.name),
        toggleBold:
          () =>
          ({ commands: t }) =>
            t.toggleMark(this.name),
        unsetBold:
          () =>
          ({ commands: t }) =>
            t.unsetMark(this.name),
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-b": () => this.editor.commands.toggleBold(),
        "Mod-B": () => this.editor.commands.toggleBold(),
      };
    },
    addInputRules() {
      return [
        sr({ find: fw, type: this.type }),
        sr({ find: pw, type: this.type }),
      ];
    },
    addPasteRules() {
      return [
        In({ find: hw, type: this.type }),
        In({ find: mw, type: this.type }),
      ];
    },
  }),
  yw = "listItem",
  Cd = "textStyle",
  Ed = /^\s*([-+*])\s$/,
  bw = ze.create({
    name: "bulletList",
    addOptions() {
      return {
        itemTypeName: "listItem",
        HTMLAttributes: {},
        keepMarks: !1,
        keepAttributes: !1,
      };
    },
    group: "block list",
    content() {
      return `${this.options.itemTypeName}+`;
    },
    parseHTML() {
      return [{ tag: "ul" }];
    },
    renderHTML({ HTMLAttributes: t }) {
      return ["ul", xe(this.options.HTMLAttributes, t), 0];
    },
    addCommands() {
      return {
        toggleBulletList:
          () =>
          ({ commands: t, chain: e }) =>
            this.options.keepAttributes
              ? e()
                  .toggleList(
                    this.name,
                    this.options.itemTypeName,
                    this.options.keepMarks,
                  )
                  .updateAttributes(yw, this.editor.getAttributes(Cd))
                  .run()
              : t.toggleList(
                  this.name,
                  this.options.itemTypeName,
                  this.options.keepMarks,
                ),
      };
    },
    addKeyboardShortcuts() {
      return { "Mod-Shift-8": () => this.editor.commands.toggleBulletList() };
    },
    addInputRules() {
      let t = Ts({ find: Ed, type: this.type });
      return (
        (this.options.keepMarks || this.options.keepAttributes) &&
          (t = Ts({
            find: Ed,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: () => this.editor.getAttributes(Cd),
            editor: this.editor,
          })),
        [t]
      );
    },
  }),
  ww = /(^|[^`])`([^`]+)`(?!`)/,
  vw = /(^|[^`])`([^`]+)`(?!`)/g,
  xw = Yt.create({
    name: "code",
    addOptions() {
      return { HTMLAttributes: {} };
    },
    excludes: "_",
    code: !0,
    exitable: !0,
    parseHTML() {
      return [{ tag: "code" }];
    },
    renderHTML({ HTMLAttributes: t }) {
      return ["code", xe(this.options.HTMLAttributes, t), 0];
    },
    addCommands() {
      return {
        setCode:
          () =>
          ({ commands: t }) =>
            t.setMark(this.name),
        toggleCode:
          () =>
          ({ commands: t }) =>
            t.toggleMark(this.name),
        unsetCode:
          () =>
          ({ commands: t }) =>
            t.unsetMark(this.name),
      };
    },
    addKeyboardShortcuts() {
      return { "Mod-e": () => this.editor.commands.toggleCode() };
    },
    addInputRules() {
      return [sr({ find: ww, type: this.type })];
    },
    addPasteRules() {
      return [In({ find: vw, type: this.type })];
    },
  }),
  kw = /^```([a-z]+)?[\s\n]$/,
  _w = /^~~~([a-z]+)?[\s\n]$/,
  Sw = ze.create({
    name: "codeBlock",
    addOptions() {
      return {
        languageClassPrefix: "language-",
        exitOnTripleEnter: !0,
        exitOnArrowDown: !0,
        defaultLanguage: null,
        HTMLAttributes: {},
      };
    },
    content: "text*",
    marks: "",
    group: "block",
    code: !0,
    defining: !0,
    addAttributes() {
      return {
        language: {
          default: this.options.defaultLanguage,
          parseHTML: (t) => {
            var e;
            const { languageClassPrefix: n } = this.options,
              i = [
                ...(((e = t.firstElementChild) === null || e === void 0
                  ? void 0
                  : e.classList) || []),
              ]
                .filter((o) => o.startsWith(n))
                .map((o) => o.replace(n, ""))[0];
            return i || null;
          },
          rendered: !1,
        },
      };
    },
    parseHTML() {
      return [{ tag: "pre", preserveWhitespace: "full" }];
    },
    renderHTML({ node: t, HTMLAttributes: e }) {
      return [
        "pre",
        xe(this.options.HTMLAttributes, e),
        [
          "code",
          {
            class: t.attrs.language
              ? this.options.languageClassPrefix + t.attrs.language
              : null,
          },
          0,
        ],
      ];
    },
    addCommands() {
      return {
        setCodeBlock:
          (t) =>
          ({ commands: e }) =>
            e.setNode(this.name, t),
        toggleCodeBlock:
          (t) =>
          ({ commands: e }) =>
            e.toggleNode(this.name, "paragraph", t),
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
        Backspace: () => {
          const { empty: t, $anchor: e } = this.editor.state.selection,
            n = e.pos === 1;
          return !t || e.parent.type.name !== this.name
            ? !1
            : n || !e.parent.textContent.length
              ? this.editor.commands.clearNodes()
              : !1;
        },
        Enter: ({ editor: t }) => {
          if (!this.options.exitOnTripleEnter) return !1;
          const { state: e } = t,
            { selection: n } = e,
            { $from: r, empty: s } = n;
          if (!s || r.parent.type !== this.type) return !1;
          const i = r.parentOffset === r.parent.nodeSize - 2,
            o = r.parent.textContent.endsWith(`

`);
          return !i || !o
            ? !1
            : t
                .chain()
                .command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0))
                .exitCode()
                .run();
        },
        ArrowDown: ({ editor: t }) => {
          if (!this.options.exitOnArrowDown) return !1;
          const { state: e } = t,
            { selection: n, doc: r } = e,
            { $from: s, empty: i } = n;
          if (
            !i ||
            s.parent.type !== this.type ||
            !(s.parentOffset === s.parent.nodeSize - 2)
          )
            return !1;
          const l = s.after();
          return l === void 0
            ? !1
            : r.nodeAt(l)
              ? t.commands.command(
                  ({ tr: c }) => (c.setSelection(oe.near(r.resolve(l))), !0),
                )
              : t.commands.exitCode();
        },
      };
    },
    addInputRules() {
      return [
        aa({
          find: kw,
          type: this.type,
          getAttributes: (t) => ({ language: t[1] }),
        }),
        aa({
          find: _w,
          type: this.type,
          getAttributes: (t) => ({ language: t[1] }),
        }),
      ];
    },
    addProseMirrorPlugins() {
      return [
        new Fe({
          key: new Ve("codeBlockVSCodeHandler"),
          props: {
            handlePaste: (t, e) => {
              if (!e.clipboardData || this.editor.isActive(this.type.name))
                return !1;
              const n = e.clipboardData.getData("text/plain"),
                r = e.clipboardData.getData("vscode-editor-data"),
                s = r ? JSON.parse(r) : void 0,
                i = s?.mode;
              if (!n || !i) return !1;
              const { tr: o, schema: l } = t.state,
                a = l.text(
                  n.replace(
                    /\r\n?/g,
                    `
`,
                  ),
                );
              return (
                o.replaceSelectionWith(this.type.create({ language: i }, a)),
                o.selection.$from.parent.type !== this.type &&
                  o.setSelection(
                    re.near(o.doc.resolve(Math.max(0, o.selection.from - 2))),
                  ),
                o.setMeta("paste", !0),
                t.dispatch(o),
                !0
              );
            },
          },
        }),
      ];
    },
  }),
  Cw = ze.create({ name: "doc", topNode: !0, content: "block+" });
function Ew(t = {}) {
  return new Fe({
    view(e) {
      return new Aw(e, t);
    },
  });
}
class Aw {
  constructor(e, n) {
    var r;
    (this.editorView = e),
      (this.cursorPos = null),
      (this.element = null),
      (this.timeout = -1),
      (this.width = (r = n.width) !== null && r !== void 0 ? r : 1),
      (this.color = n.color === !1 ? void 0 : n.color || "black"),
      (this.class = n.class),
      (this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((s) => {
        let i = (o) => {
          this[s](o);
        };
        return e.dom.addEventListener(s, i), { name: s, handler: i };
      }));
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: n }) =>
      this.editorView.dom.removeEventListener(e, n),
    );
  }
  update(e, n) {
    this.cursorPos != null &&
      n.doc != e.state.doc &&
      (this.cursorPos > e.state.doc.content.size
        ? this.setCursor(null)
        : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos &&
      ((this.cursorPos = e),
      e == null
        ? (this.element.parentNode.removeChild(this.element),
          (this.element = null))
        : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos),
      n = !e.parent.inlineContent,
      r;
    if (n) {
      let l = e.nodeBefore,
        a = e.nodeAfter;
      if (l || a) {
        let c = this.editorView.nodeDOM(this.cursorPos - (l ? l.nodeSize : 0));
        if (c) {
          let u = c.getBoundingClientRect(),
            d = l ? u.bottom : u.top;
          l &&
            a &&
            (d =
              (d +
                this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect()
                  .top) /
              2),
            (r = {
              left: u.left,
              right: u.right,
              top: d - this.width / 2,
              bottom: d + this.width / 2,
            });
        }
      }
    }
    if (!r) {
      let l = this.editorView.coordsAtPos(this.cursorPos);
      r = {
        left: l.left - this.width / 2,
        right: l.left + this.width / 2,
        top: l.top,
        bottom: l.bottom,
      };
    }
    let s = this.editorView.dom.offsetParent;
    this.element ||
      ((this.element = s.appendChild(document.createElement("div"))),
      this.class && (this.element.className = this.class),
      (this.element.style.cssText =
        "position: absolute; z-index: 50; pointer-events: none;"),
      this.color && (this.element.style.backgroundColor = this.color)),
      this.element.classList.toggle("prosemirror-dropcursor-block", n),
      this.element.classList.toggle("prosemirror-dropcursor-inline", !n);
    let i, o;
    if (!s || (s == document.body && getComputedStyle(s).position == "static"))
      (i = -pageXOffset), (o = -pageYOffset);
    else {
      let l = s.getBoundingClientRect();
      (i = l.left - s.scrollLeft), (o = l.top - s.scrollTop);
    }
    (this.element.style.left = r.left - i + "px"),
      (this.element.style.top = r.top - o + "px"),
      (this.element.style.width = r.right - r.left + "px"),
      (this.element.style.height = r.bottom - r.top + "px");
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout),
      (this.timeout = setTimeout(() => this.setCursor(null), e));
  }
  dragover(e) {
    if (!this.editorView.editable) return;
    let n = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }),
      r = n && n.inside >= 0 && this.editorView.state.doc.nodeAt(n.inside),
      s = r && r.type.spec.disableDropCursor,
      i = typeof s == "function" ? s(this.editorView, n, e) : s;
    if (n && !i) {
      let o = n.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = ep(
          this.editorView.state.doc,
          o,
          this.editorView.dragging.slice,
        );
        l != null && (o = l);
      }
      this.setCursor(o), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    (e.target == this.editorView.dom ||
      !this.editorView.dom.contains(e.relatedTarget)) &&
      this.setCursor(null);
  }
}
const Mw = $e.create({
  name: "dropCursor",
  addOptions() {
    return { color: "currentColor", width: 1, class: void 0 };
  },
  addProseMirrorPlugins() {
    return [Ew(this.options)];
  },
});
class Pe extends oe {
  constructor(e) {
    super(e, e);
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    return Pe.valid(r) ? new Pe(r) : oe.near(r);
  }
  content() {
    return J.empty;
  }
  eq(e) {
    return e instanceof Pe && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new Pe(e.resolve(n.pos));
  }
  getBookmark() {
    return new Sc(this.anchor);
  }
  static valid(e) {
    let n = e.parent;
    if (n.isTextblock || !Tw(e) || !Rw(e)) return !1;
    let r = n.type.spec.allowGapCursor;
    if (r != null) return r;
    let s = n.contentMatchAt(e.index()).defaultType;
    return s && s.isTextblock;
  }
  static findGapCursorFrom(e, n, r = !1) {
    e: for (;;) {
      if (!r && Pe.valid(e)) return e;
      let s = e.pos,
        i = null;
      for (let o = e.depth; ; o--) {
        let l = e.node(o);
        if (n > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
          i = l.child(n > 0 ? e.indexAfter(o) : e.index(o) - 1);
          break;
        } else if (o == 0) return null;
        s += n;
        let a = e.doc.resolve(s);
        if (Pe.valid(a)) return a;
      }
      for (;;) {
        let o = n > 0 ? i.firstChild : i.lastChild;
        if (!o) {
          if (i.isAtom && !i.isText && !ne.isSelectable(i)) {
            (e = e.doc.resolve(s + i.nodeSize * n)), (r = !1);
            continue e;
          }
          break;
        }
        (i = o), (s += n);
        let l = e.doc.resolve(s);
        if (Pe.valid(l)) return l;
      }
      return null;
    }
  }
}
Pe.prototype.visible = !1;
Pe.findFrom = Pe.findGapCursorFrom;
oe.jsonID("gapcursor", Pe);
class Sc {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new Sc(e.map(this.pos));
  }
  resolve(e) {
    let n = e.resolve(this.pos);
    return Pe.valid(n) ? new Pe(n) : oe.near(n);
  }
}
function Tw(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.index(e),
      r = t.node(e);
    if (n == 0) {
      if (r.type.spec.isolating) return !0;
      continue;
    }
    for (let s = r.child(n - 1); ; s = s.lastChild) {
      if (
        (s.childCount == 0 && !s.inlineContent) ||
        s.isAtom ||
        s.type.spec.isolating
      )
        return !0;
      if (s.inlineContent) return !1;
    }
  }
  return !0;
}
function Rw(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.indexAfter(e),
      r = t.node(e);
    if (n == r.childCount) {
      if (r.type.spec.isolating) return !0;
      continue;
    }
    for (let s = r.child(n); ; s = s.firstChild) {
      if (
        (s.childCount == 0 && !s.inlineContent) ||
        s.isAtom ||
        s.type.spec.isolating
      )
        return !0;
      if (s.inlineContent) return !1;
    }
  }
  return !0;
}
function Ow() {
  return new Fe({
    props: {
      decorations: Lw,
      createSelectionBetween(t, e, n) {
        return e.pos == n.pos && Pe.valid(n) ? new Pe(n) : null;
      },
      handleClick: Pw,
      handleKeyDown: jw,
      handleDOMEvents: { beforeinput: Iw },
    },
  });
}
const jw = Pp({
  ArrowLeft: Gs("horiz", -1),
  ArrowRight: Gs("horiz", 1),
  ArrowUp: Gs("vert", -1),
  ArrowDown: Gs("vert", 1),
});
function Gs(t, e) {
  const n = t == "vert" ? (e > 0 ? "down" : "up") : e > 0 ? "right" : "left";
  return function (r, s, i) {
    let o = r.selection,
      l = e > 0 ? o.$to : o.$from,
      a = o.empty;
    if (o instanceof re) {
      if (!i.endOfTextblock(n) || l.depth == 0) return !1;
      (a = !1), (l = r.doc.resolve(e > 0 ? l.after() : l.before()));
    }
    let c = Pe.findGapCursorFrom(l, e, a);
    return c ? (s && s(r.tr.setSelection(new Pe(c))), !0) : !1;
  };
}
function Pw(t, e, n) {
  if (!t || !t.editable) return !1;
  let r = t.state.doc.resolve(e);
  if (!Pe.valid(r)) return !1;
  let s = t.posAtCoords({ left: n.clientX, top: n.clientY });
  return s && s.inside > -1 && ne.isSelectable(t.state.doc.nodeAt(s.inside))
    ? !1
    : (t.dispatch(t.state.tr.setSelection(new Pe(r))), !0);
}
function Iw(t, e) {
  if (
    e.inputType != "insertCompositionText" ||
    !(t.state.selection instanceof Pe)
  )
    return !1;
  let { $from: n } = t.state.selection,
    r = n.parent
      .contentMatchAt(n.index())
      .findWrapping(t.state.schema.nodes.text);
  if (!r) return !1;
  let s = H.empty;
  for (let o = r.length - 1; o >= 0; o--)
    s = H.from(r[o].createAndFill(null, s));
  let i = t.state.tr.replace(n.pos, n.pos, new J(s, 0, 0));
  return i.setSelection(re.near(i.doc.resolve(n.pos + 1))), t.dispatch(i), !1;
}
function Lw(t) {
  if (!(t.selection instanceof Pe)) return null;
  let e = document.createElement("div");
  return (
    (e.className = "ProseMirror-gapcursor"),
    Oe.create(t.doc, [ft.widget(t.selection.head, e, { key: "gapcursor" })])
  );
}
const Nw = $e.create({
    name: "gapCursor",
    addProseMirrorPlugins() {
      return [Ow()];
    },
    extendNodeSchema(t) {
      var e;
      const n = { name: t.name, options: t.options, storage: t.storage };
      return {
        allowGapCursor:
          (e = Be(Qe(t, "allowGapCursor", n))) !== null && e !== void 0
            ? e
            : null,
      };
    },
  }),
  zw = ze.create({
    name: "hardBreak",
    addOptions() {
      return { keepMarks: !0, HTMLAttributes: {} };
    },
    inline: !0,
    group: "inline",
    selectable: !1,
    linebreakReplacement: !0,
    parseHTML() {
      return [{ tag: "br" }];
    },
    renderHTML({ HTMLAttributes: t }) {
      return ["br", xe(this.options.HTMLAttributes, t)];
    },
    renderText() {
      return `
`;
    },
    addCommands() {
      return {
        setHardBreak:
          () =>
          ({ commands: t, chain: e, state: n, editor: r }) =>
            t.first([
              () => t.exitCode(),
              () =>
                t.command(() => {
                  const { selection: s, storedMarks: i } = n;
                  if (s.$from.parent.type.spec.isolating) return !1;
                  const { keepMarks: o } = this.options,
                    { splittableMarks: l } = r.extensionManager,
                    a = i || (s.$to.parentOffset && s.$from.marks());
                  return e()
                    .insertContent({ type: this.name })
                    .command(({ tr: c, dispatch: u }) => {
                      if (u && a && o) {
                        const d = a.filter((h) => l.includes(h.type.name));
                        c.ensureMarks(d);
                      }
                      return !0;
                    })
                    .run();
                }),
            ]),
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-Enter": () => this.editor.commands.setHardBreak(),
        "Shift-Enter": () => this.editor.commands.setHardBreak(),
      };
    },
  }),
  Dw = ze.create({
    name: "heading",
    addOptions() {
      return { levels: [1, 2, 3, 4, 5, 6], HTMLAttributes: {} };
    },
    content: "inline*",
    group: "block",
    defining: !0,
    addAttributes() {
      return { level: { default: 1, rendered: !1 } };
    },
    parseHTML() {
      return this.options.levels.map((t) => ({
        tag: `h${t}`,
        attrs: { level: t },
      }));
    },
    renderHTML({ node: t, HTMLAttributes: e }) {
      return [
        `h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`,
        xe(this.options.HTMLAttributes, e),
        0,
      ];
    },
    addCommands() {
      return {
        setHeading:
          (t) =>
          ({ commands: e }) =>
            this.options.levels.includes(t.level)
              ? e.setNode(this.name, t)
              : !1,
        toggleHeading:
          (t) =>
          ({ commands: e }) =>
            this.options.levels.includes(t.level)
              ? e.toggleNode(this.name, "paragraph", t)
              : !1,
      };
    },
    addKeyboardShortcuts() {
      return this.options.levels.reduce(
        (t, e) => ({
          ...t,
          [`Mod-Alt-${e}`]: () =>
            this.editor.commands.toggleHeading({ level: e }),
        }),
        {},
      );
    },
    addInputRules() {
      return this.options.levels.map((t) =>
        aa({
          find: new RegExp(
            `^(#{${Math.min(...this.options.levels)},${t}})\\s$`,
          ),
          type: this.type,
          getAttributes: { level: t },
        }),
      );
    },
  });
var Ui = 200,
  Ke = function () {};
Ke.prototype.append = function (e) {
  return e.length
    ? ((e = Ke.from(e)),
      (!this.length && e) ||
        (e.length < Ui && this.leafAppend(e)) ||
        (this.length < Ui && e.leafPrepend(this)) ||
        this.appendInner(e))
    : this;
};
Ke.prototype.prepend = function (e) {
  return e.length ? Ke.from(e).append(this) : this;
};
Ke.prototype.appendInner = function (e) {
  return new Bw(this, e);
};
Ke.prototype.slice = function (e, n) {
  return (
    e === void 0 && (e = 0),
    n === void 0 && (n = this.length),
    e >= n
      ? Ke.empty
      : this.sliceInner(Math.max(0, e), Math.min(this.length, n))
  );
};
Ke.prototype.get = function (e) {
  if (!(e < 0 || e >= this.length)) return this.getInner(e);
};
Ke.prototype.forEach = function (e, n, r) {
  n === void 0 && (n = 0),
    r === void 0 && (r = this.length),
    n <= r
      ? this.forEachInner(e, n, r, 0)
      : this.forEachInvertedInner(e, n, r, 0);
};
Ke.prototype.map = function (e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length);
  var s = [];
  return (
    this.forEach(
      function (i, o) {
        return s.push(e(i, o));
      },
      n,
      r,
    ),
    s
  );
};
Ke.from = function (e) {
  return e instanceof Ke ? e : e && e.length ? new em(e) : Ke.empty;
};
var em = (function (t) {
  function e(r) {
    t.call(this), (this.values = r);
  }
  t && (e.__proto__ = t),
    (e.prototype = Object.create(t && t.prototype)),
    (e.prototype.constructor = e);
  var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return (
    (e.prototype.flatten = function () {
      return this.values;
    }),
    (e.prototype.sliceInner = function (s, i) {
      return s == 0 && i == this.length ? this : new e(this.values.slice(s, i));
    }),
    (e.prototype.getInner = function (s) {
      return this.values[s];
    }),
    (e.prototype.forEachInner = function (s, i, o, l) {
      for (var a = i; a < o; a++)
        if (s(this.values[a], l + a) === !1) return !1;
    }),
    (e.prototype.forEachInvertedInner = function (s, i, o, l) {
      for (var a = i - 1; a >= o; a--)
        if (s(this.values[a], l + a) === !1) return !1;
    }),
    (e.prototype.leafAppend = function (s) {
      if (this.length + s.length <= Ui)
        return new e(this.values.concat(s.flatten()));
    }),
    (e.prototype.leafPrepend = function (s) {
      if (this.length + s.length <= Ui)
        return new e(s.flatten().concat(this.values));
    }),
    (n.length.get = function () {
      return this.values.length;
    }),
    (n.depth.get = function () {
      return 0;
    }),
    Object.defineProperties(e.prototype, n),
    e
  );
})(Ke);
Ke.empty = new em([]);
var Bw = (function (t) {
  function e(n, r) {
    t.call(this),
      (this.left = n),
      (this.right = r),
      (this.length = n.length + r.length),
      (this.depth = Math.max(n.depth, r.depth) + 1);
  }
  return (
    t && (e.__proto__ = t),
    (e.prototype = Object.create(t && t.prototype)),
    (e.prototype.constructor = e),
    (e.prototype.flatten = function () {
      return this.left.flatten().concat(this.right.flatten());
    }),
    (e.prototype.getInner = function (r) {
      return r < this.left.length
        ? this.left.get(r)
        : this.right.get(r - this.left.length);
    }),
    (e.prototype.forEachInner = function (r, s, i, o) {
      var l = this.left.length;
      if (
        (s < l && this.left.forEachInner(r, s, Math.min(i, l), o) === !1) ||
        (i > l &&
          this.right.forEachInner(
            r,
            Math.max(s - l, 0),
            Math.min(this.length, i) - l,
            o + l,
          ) === !1)
      )
        return !1;
    }),
    (e.prototype.forEachInvertedInner = function (r, s, i, o) {
      var l = this.left.length;
      if (
        (s > l &&
          this.right.forEachInvertedInner(
            r,
            s - l,
            Math.max(i, l) - l,
            o + l,
          ) === !1) ||
        (i < l &&
          this.left.forEachInvertedInner(r, Math.min(s, l), i, o) === !1)
      )
        return !1;
    }),
    (e.prototype.sliceInner = function (r, s) {
      if (r == 0 && s == this.length) return this;
      var i = this.left.length;
      return s <= i
        ? this.left.slice(r, s)
        : r >= i
          ? this.right.slice(r - i, s - i)
          : this.left.slice(r, i).append(this.right.slice(0, s - i));
    }),
    (e.prototype.leafAppend = function (r) {
      var s = this.right.leafAppend(r);
      if (s) return new e(this.left, s);
    }),
    (e.prototype.leafPrepend = function (r) {
      var s = this.left.leafPrepend(r);
      if (s) return new e(s, this.right);
    }),
    (e.prototype.appendInner = function (r) {
      return this.left.depth >= Math.max(this.right.depth, r.depth) + 1
        ? new e(this.left, new e(this.right, r))
        : new e(this, r);
    }),
    e
  );
})(Ke);
const Hw = 500;
class jt {
  constructor(e, n) {
    (this.items = e), (this.eventCount = n);
  }
  popEvent(e, n) {
    if (this.eventCount == 0) return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let s, i;
    n && ((s = this.remapping(r, this.items.length)), (i = s.maps.length));
    let o = e.tr,
      l,
      a,
      c = [],
      u = [];
    return (
      this.items.forEach(
        (d, h) => {
          if (!d.step) {
            s || ((s = this.remapping(r, h + 1)), (i = s.maps.length)),
              i--,
              u.push(d);
            return;
          }
          if (s) {
            u.push(new Ft(d.map));
            let p = d.step.map(s.slice(i)),
              y;
            p &&
              o.maybeStep(p).doc &&
              ((y = o.mapping.maps[o.mapping.maps.length - 1]),
              c.push(new Ft(y, void 0, void 0, c.length + u.length))),
              i--,
              y && s.appendMap(y, i);
          } else o.maybeStep(d.step);
          if (d.selection)
            return (
              (l = s ? d.selection.map(s.slice(i)) : d.selection),
              (a = new jt(
                this.items.slice(0, r).append(u.reverse().concat(c)),
                this.eventCount - 1,
              )),
              !1
            );
        },
        this.items.length,
        0,
      ),
      { remaining: a, transform: o, selection: l }
    );
  }
  addTransform(e, n, r, s) {
    let i = [],
      o = this.eventCount,
      l = this.items,
      a = !s && l.length ? l.get(l.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let d = e.steps[u].invert(e.docs[u]),
        h = new Ft(e.mapping.maps[u], d, n),
        p;
      (p = a && a.merge(h)) &&
        ((h = p), u ? i.pop() : (l = l.slice(0, l.length - 1))),
        i.push(h),
        n && (o++, (n = void 0)),
        s || (a = h);
    }
    let c = o - r.depth;
    return c > Fw && ((l = $w(l, c)), (o -= c)), new jt(l.append(i), o);
  }
  remapping(e, n) {
    let r = new Cs();
    return (
      this.items.forEach(
        (s, i) => {
          let o =
            s.mirrorOffset != null && i - s.mirrorOffset >= e
              ? r.maps.length - s.mirrorOffset
              : void 0;
          r.appendMap(s.map, o);
        },
        e,
        n,
      ),
      r
    );
  }
  addMaps(e) {
    return this.eventCount == 0
      ? this
      : new jt(this.items.append(e.map((n) => new Ft(n))), this.eventCount);
  }
  rebased(e, n) {
    if (!this.eventCount) return this;
    let r = [],
      s = Math.max(0, this.items.length - n),
      i = e.mapping,
      o = e.steps.length,
      l = this.eventCount;
    this.items.forEach((h) => {
      h.selection && l--;
    }, s);
    let a = n;
    this.items.forEach((h) => {
      let p = i.getMirror(--a);
      if (p == null) return;
      o = Math.min(o, p);
      let y = i.maps[p];
      if (h.step) {
        let b = e.steps[p].invert(e.docs[p]),
          x = h.selection && h.selection.map(i.slice(a + 1, p));
        x && l++, r.push(new Ft(y, b, x));
      } else r.push(new Ft(y));
    }, s);
    let c = [];
    for (let h = n; h < o; h++) c.push(new Ft(i.maps[h]));
    let u = this.items.slice(0, s).append(c).append(r),
      d = new jt(u, l);
    return (
      d.emptyItemCount() > Hw && (d = d.compress(this.items.length - r.length)),
      d
    );
  }
  emptyItemCount() {
    let e = 0;
    return (
      this.items.forEach((n) => {
        n.step || e++;
      }),
      e
    );
  }
  compress(e = this.items.length) {
    let n = this.remapping(0, e),
      r = n.maps.length,
      s = [],
      i = 0;
    return (
      this.items.forEach(
        (o, l) => {
          if (l >= e) s.push(o), o.selection && i++;
          else if (o.step) {
            let a = o.step.map(n.slice(r)),
              c = a && a.getMap();
            if ((r--, c && n.appendMap(c, r), a)) {
              let u = o.selection && o.selection.map(n.slice(r));
              u && i++;
              let d = new Ft(c.invert(), a, u),
                h,
                p = s.length - 1;
              (h = s.length && s[p].merge(d)) ? (s[p] = h) : s.push(d);
            }
          } else o.map && r--;
        },
        this.items.length,
        0,
      ),
      new jt(Ke.from(s.reverse()), i)
    );
  }
}
jt.empty = new jt(Ke.empty, 0);
function $w(t, e) {
  let n;
  return (
    t.forEach((r, s) => {
      if (r.selection && e-- == 0) return (n = s), !1;
    }),
    t.slice(n)
  );
}
class Ft {
  constructor(e, n, r, s) {
    (this.map = e),
      (this.step = n),
      (this.selection = r),
      (this.mirrorOffset = s);
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let n = e.step.merge(this.step);
      if (n) return new Ft(n.getMap().invert(), n, this.selection);
    }
  }
}
class xn {
  constructor(e, n, r, s, i) {
    (this.done = e),
      (this.undone = n),
      (this.prevRanges = r),
      (this.prevTime = s),
      (this.prevComposition = i);
  }
}
const Fw = 20;
function Vw(t, e, n, r) {
  let s = n.getMeta(tr),
    i;
  if (s) return s.historyState;
  n.getMeta(Kw) && (t = new xn(t.done, t.undone, null, 0, -1));
  let o = n.getMeta("appendedTransaction");
  if (n.steps.length == 0) return t;
  if (o && o.getMeta(tr))
    return o.getMeta(tr).redo
      ? new xn(
          t.done.addTransform(n, void 0, r, mi(e)),
          t.undone,
          Ad(n.mapping.maps),
          t.prevTime,
          t.prevComposition,
        )
      : new xn(
          t.done,
          t.undone.addTransform(n, void 0, r, mi(e)),
          null,
          t.prevTime,
          t.prevComposition,
        );
  if (
    n.getMeta("addToHistory") !== !1 &&
    !(o && o.getMeta("addToHistory") === !1)
  ) {
    let l = n.getMeta("composition"),
      a =
        t.prevTime == 0 ||
        (!o &&
          t.prevComposition != l &&
          (t.prevTime < (n.time || 0) - r.newGroupDelay ||
            !Ww(n, t.prevRanges))),
      c = o ? gl(t.prevRanges, n.mapping) : Ad(n.mapping.maps);
    return new xn(
      t.done.addTransform(n, a ? e.selection.getBookmark() : void 0, r, mi(e)),
      jt.empty,
      c,
      n.time,
      l ?? t.prevComposition,
    );
  } else
    return (i = n.getMeta("rebased"))
      ? new xn(
          t.done.rebased(n, i),
          t.undone.rebased(n, i),
          gl(t.prevRanges, n.mapping),
          t.prevTime,
          t.prevComposition,
        )
      : new xn(
          t.done.addMaps(n.mapping.maps),
          t.undone.addMaps(n.mapping.maps),
          gl(t.prevRanges, n.mapping),
          t.prevTime,
          t.prevComposition,
        );
}
function Ww(t, e) {
  if (!e) return !1;
  if (!t.docChanged) return !0;
  let n = !1;
  return (
    t.mapping.maps[0].forEach((r, s) => {
      for (let i = 0; i < e.length; i += 2)
        r <= e[i + 1] && s >= e[i] && (n = !0);
    }),
    n
  );
}
function Ad(t) {
  let e = [];
  for (let n = t.length - 1; n >= 0 && e.length == 0; n--)
    t[n].forEach((r, s, i, o) => e.push(i, o));
  return e;
}
function gl(t, e) {
  if (!t) return null;
  let n = [];
  for (let r = 0; r < t.length; r += 2) {
    let s = e.map(t[r], 1),
      i = e.map(t[r + 1], -1);
    s <= i && n.push(s, i);
  }
  return n;
}
function Uw(t, e, n) {
  let r = mi(e),
    s = tr.get(e).spec.config,
    i = (n ? t.undone : t.done).popEvent(e, r);
  if (!i) return null;
  let o = i.selection.resolve(i.transform.doc),
    l = (n ? t.done : t.undone).addTransform(
      i.transform,
      e.selection.getBookmark(),
      s,
      r,
    ),
    a = new xn(n ? l : i.remaining, n ? i.remaining : l, null, 0, -1);
  return i.transform.setSelection(o).setMeta(tr, { redo: n, historyState: a });
}
let yl = !1,
  Md = null;
function mi(t) {
  let e = t.plugins;
  if (Md != e) {
    (yl = !1), (Md = e);
    for (let n = 0; n < e.length; n++)
      if (e[n].spec.historyPreserveItems) {
        yl = !0;
        break;
      }
  }
  return yl;
}
const tr = new Ve("history"),
  Kw = new Ve("closeHistory");
function qw(t = {}) {
  return (
    (t = { depth: t.depth || 100, newGroupDelay: t.newGroupDelay || 500 }),
    new Fe({
      key: tr,
      state: {
        init() {
          return new xn(jt.empty, jt.empty, null, 0, -1);
        },
        apply(e, n, r) {
          return Vw(n, r, e, t);
        },
      },
      config: t,
      props: {
        handleDOMEvents: {
          beforeinput(e, n) {
            let r = n.inputType,
              s = r == "historyUndo" ? nm : r == "historyRedo" ? rm : null;
            return s ? (n.preventDefault(), s(e.state, e.dispatch)) : !1;
          },
        },
      },
    })
  );
}
function tm(t, e) {
  return (n, r) => {
    let s = tr.getState(n);
    if (!s || (t ? s.undone : s.done).eventCount == 0) return !1;
    if (r) {
      let i = Uw(s, n, t);
      i && r(e ? i.scrollIntoView() : i);
    }
    return !0;
  };
}
const nm = tm(!1, !0),
  rm = tm(!0, !0),
  Jw = $e.create({
    name: "history",
    addOptions() {
      return { depth: 100, newGroupDelay: 500 };
    },
    addCommands() {
      return {
        undo:
          () =>
          ({ state: t, dispatch: e }) =>
            nm(t, e),
        redo:
          () =>
          ({ state: t, dispatch: e }) =>
            rm(t, e),
      };
    },
    addProseMirrorPlugins() {
      return [qw(this.options)];
    },
    addKeyboardShortcuts() {
      return {
        "Mod-z": () => this.editor.commands.undo(),
        "Shift-Mod-z": () => this.editor.commands.redo(),
        "Mod-y": () => this.editor.commands.redo(),
        "Mod-я": () => this.editor.commands.undo(),
        "Shift-Mod-я": () => this.editor.commands.redo(),
      };
    },
  }),
  Gw = ze.create({
    name: "horizontalRule",
    addOptions() {
      return { HTMLAttributes: {} };
    },
    group: "block",
    parseHTML() {
      return [{ tag: "hr" }];
    },
    renderHTML({ HTMLAttributes: t }) {
      return ["hr", xe(this.options.HTMLAttributes, t)];
    },
    addCommands() {
      return {
        setHorizontalRule:
          () =>
          ({ chain: t, state: e }) => {
            const { selection: n } = e,
              { $from: r, $to: s } = n,
              i = t();
            return (
              r.parentOffset === 0
                ? i.insertContentAt(
                    { from: Math.max(r.pos - 1, 0), to: s.pos },
                    { type: this.name },
                  )
                : F3(n)
                  ? i.insertContentAt(s.pos, { type: this.name })
                  : i.insertContent({ type: this.name }),
              i
                .command(({ tr: o, dispatch: l }) => {
                  var a;
                  if (l) {
                    const { $to: c } = o.selection,
                      u = c.end();
                    if (c.nodeAfter)
                      c.nodeAfter.isTextblock
                        ? o.setSelection(re.create(o.doc, c.pos + 1))
                        : c.nodeAfter.isBlock
                          ? o.setSelection(ne.create(o.doc, c.pos))
                          : o.setSelection(re.create(o.doc, c.pos));
                    else {
                      const d =
                        (a = c.parent.type.contentMatch.defaultType) === null ||
                        a === void 0
                          ? void 0
                          : a.create();
                      d &&
                        (o.insert(u, d),
                        o.setSelection(re.create(o.doc, u + 1)));
                    }
                    o.scrollIntoView();
                  }
                  return !0;
                })
                .run()
            );
          },
      };
    },
    addInputRules() {
      return [Zp({ find: /^(?:---|—-|___\s|\*\*\*\s)$/, type: this.type })];
    },
  }),
  Qw = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/,
  Yw = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g,
  Xw = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/,
  Zw = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g,
  ev = Yt.create({
    name: "italic",
    addOptions() {
      return { HTMLAttributes: {} };
    },
    parseHTML() {
      return [
        { tag: "em" },
        { tag: "i", getAttrs: (t) => t.style.fontStyle !== "normal" && null },
        {
          style: "font-style=normal",
          clearMark: (t) => t.type.name === this.name,
        },
        { style: "font-style=italic" },
      ];
    },
    renderHTML({ HTMLAttributes: t }) {
      return ["em", xe(this.options.HTMLAttributes, t), 0];
    },
    addCommands() {
      return {
        setItalic:
          () =>
          ({ commands: t }) =>
            t.setMark(this.name),
        toggleItalic:
          () =>
          ({ commands: t }) =>
            t.toggleMark(this.name),
        unsetItalic:
          () =>
          ({ commands: t }) =>
            t.unsetMark(this.name),
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-i": () => this.editor.commands.toggleItalic(),
        "Mod-I": () => this.editor.commands.toggleItalic(),
      };
    },
    addInputRules() {
      return [
        sr({ find: Qw, type: this.type }),
        sr({ find: Xw, type: this.type }),
      ];
    },
    addPasteRules() {
      return [
        In({ find: Yw, type: this.type }),
        In({ find: Zw, type: this.type }),
      ];
    },
  }),
  tv = ze.create({
    name: "listItem",
    addOptions() {
      return {
        HTMLAttributes: {},
        bulletListTypeName: "bulletList",
        orderedListTypeName: "orderedList",
      };
    },
    content: "paragraph block*",
    defining: !0,
    parseHTML() {
      return [{ tag: "li" }];
    },
    renderHTML({ HTMLAttributes: t }) {
      return ["li", xe(this.options.HTMLAttributes, t), 0];
    },
    addKeyboardShortcuts() {
      return {
        Enter: () => this.editor.commands.splitListItem(this.name),
        Tab: () => this.editor.commands.sinkListItem(this.name),
        "Shift-Tab": () => this.editor.commands.liftListItem(this.name),
      };
    },
  }),
  nv = "listItem",
  Td = "textStyle",
  Rd = /^(\d+)\.\s$/,
  rv = ze.create({
    name: "orderedList",
    addOptions() {
      return {
        itemTypeName: "listItem",
        HTMLAttributes: {},
        keepMarks: !1,
        keepAttributes: !1,
      };
    },
    group: "block list",
    content() {
      return `${this.options.itemTypeName}+`;
    },
    addAttributes() {
      return {
        start: {
          default: 1,
          parseHTML: (t) =>
            t.hasAttribute("start")
              ? parseInt(t.getAttribute("start") || "", 10)
              : 1,
        },
        type: { default: void 0, parseHTML: (t) => t.getAttribute("type") },
      };
    },
    parseHTML() {
      return [{ tag: "ol" }];
    },
    renderHTML({ HTMLAttributes: t }) {
      const { start: e, ...n } = t;
      return e === 1
        ? ["ol", xe(this.options.HTMLAttributes, n), 0]
        : ["ol", xe(this.options.HTMLAttributes, t), 0];
    },
    addCommands() {
      return {
        toggleOrderedList:
          () =>
          ({ commands: t, chain: e }) =>
            this.options.keepAttributes
              ? e()
                  .toggleList(
                    this.name,
                    this.options.itemTypeName,
                    this.options.keepMarks,
                  )
                  .updateAttributes(nv, this.editor.getAttributes(Td))
                  .run()
              : t.toggleList(
                  this.name,
                  this.options.itemTypeName,
                  this.options.keepMarks,
                ),
      };
    },
    addKeyboardShortcuts() {
      return { "Mod-Shift-7": () => this.editor.commands.toggleOrderedList() };
    },
    addInputRules() {
      let t = Ts({
        find: Rd,
        type: this.type,
        getAttributes: (e) => ({ start: +e[1] }),
        joinPredicate: (e, n) => n.childCount + n.attrs.start === +e[1],
      });
      return (
        (this.options.keepMarks || this.options.keepAttributes) &&
          (t = Ts({
            find: Rd,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: (e) => ({
              start: +e[1],
              ...this.editor.getAttributes(Td),
            }),
            joinPredicate: (e, n) => n.childCount + n.attrs.start === +e[1],
            editor: this.editor,
          })),
        [t]
      );
    },
  }),
  sv = ze.create({
    name: "paragraph",
    priority: 1e3,
    addOptions() {
      return { HTMLAttributes: {} };
    },
    group: "block",
    content: "inline*",
    parseHTML() {
      return [{ tag: "p" }];
    },
    renderHTML({ HTMLAttributes: t }) {
      return ["p", xe(this.options.HTMLAttributes, t), 0];
    },
    addCommands() {
      return {
        setParagraph:
          () =>
          ({ commands: t }) =>
            t.setNode(this.name),
      };
    },
    addKeyboardShortcuts() {
      return { "Mod-Alt-0": () => this.editor.commands.setParagraph() };
    },
  }),
  iv = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/,
  ov = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g,
  lv = Yt.create({
    name: "strike",
    addOptions() {
      return { HTMLAttributes: {} };
    },
    parseHTML() {
      return [
        { tag: "s" },
        { tag: "del" },
        { tag: "strike" },
        {
          style: "text-decoration",
          consuming: !1,
          getAttrs: (t) => (t.includes("line-through") ? {} : !1),
        },
      ];
    },
    renderHTML({ HTMLAttributes: t }) {
      return ["s", xe(this.options.HTMLAttributes, t), 0];
    },
    addCommands() {
      return {
        setStrike:
          () =>
          ({ commands: t }) =>
            t.setMark(this.name),
        toggleStrike:
          () =>
          ({ commands: t }) =>
            t.toggleMark(this.name),
        unsetStrike:
          () =>
          ({ commands: t }) =>
            t.unsetMark(this.name),
      };
    },
    addKeyboardShortcuts() {
      return { "Mod-Shift-s": () => this.editor.commands.toggleStrike() };
    },
    addInputRules() {
      return [sr({ find: iv, type: this.type })];
    },
    addPasteRules() {
      return [In({ find: ov, type: this.type })];
    },
  }),
  av = ze.create({ name: "text", group: "inline" });
$e.create({
  name: "starterKit",
  addExtensions() {
    var t, e, n, r, s, i, o, l, a, c, u, d, h, p, y, b, x, v;
    const E = [];
    return (
      this.options.bold !== !1 &&
        E.push(
          gw.configure(
            (t = this.options) === null || t === void 0 ? void 0 : t.bold,
          ),
        ),
      this.options.blockquote !== !1 &&
        E.push(
          dw.configure(
            (e = this.options) === null || e === void 0 ? void 0 : e.blockquote,
          ),
        ),
      this.options.bulletList !== !1 &&
        E.push(
          bw.configure(
            (n = this.options) === null || n === void 0 ? void 0 : n.bulletList,
          ),
        ),
      this.options.code !== !1 &&
        E.push(
          xw.configure(
            (r = this.options) === null || r === void 0 ? void 0 : r.code,
          ),
        ),
      this.options.codeBlock !== !1 &&
        E.push(
          Sw.configure(
            (s = this.options) === null || s === void 0 ? void 0 : s.codeBlock,
          ),
        ),
      this.options.document !== !1 &&
        E.push(
          Cw.configure(
            (i = this.options) === null || i === void 0 ? void 0 : i.document,
          ),
        ),
      this.options.dropcursor !== !1 &&
        E.push(
          Mw.configure(
            (o = this.options) === null || o === void 0 ? void 0 : o.dropcursor,
          ),
        ),
      this.options.gapcursor !== !1 &&
        E.push(
          Nw.configure(
            (l = this.options) === null || l === void 0 ? void 0 : l.gapcursor,
          ),
        ),
      this.options.hardBreak !== !1 &&
        E.push(
          zw.configure(
            (a = this.options) === null || a === void 0 ? void 0 : a.hardBreak,
          ),
        ),
      this.options.heading !== !1 &&
        E.push(
          Dw.configure(
            (c = this.options) === null || c === void 0 ? void 0 : c.heading,
          ),
        ),
      this.options.history !== !1 &&
        E.push(
          Jw.configure(
            (u = this.options) === null || u === void 0 ? void 0 : u.history,
          ),
        ),
      this.options.horizontalRule !== !1 &&
        E.push(
          Gw.configure(
            (d = this.options) === null || d === void 0
              ? void 0
              : d.horizontalRule,
          ),
        ),
      this.options.italic !== !1 &&
        E.push(
          ev.configure(
            (h = this.options) === null || h === void 0 ? void 0 : h.italic,
          ),
        ),
      this.options.listItem !== !1 &&
        E.push(
          tv.configure(
            (p = this.options) === null || p === void 0 ? void 0 : p.listItem,
          ),
        ),
      this.options.orderedList !== !1 &&
        E.push(
          rv.configure(
            (y = this.options) === null || y === void 0
              ? void 0
              : y.orderedList,
          ),
        ),
      this.options.paragraph !== !1 &&
        E.push(
          sv.configure(
            (b = this.options) === null || b === void 0 ? void 0 : b.paragraph,
          ),
        ),
      this.options.strike !== !1 &&
        E.push(
          lv.configure(
            (x = this.options) === null || x === void 0 ? void 0 : x.strike,
          ),
        ),
      this.options.text !== !1 &&
        E.push(
          av.configure(
            (v = this.options) === null || v === void 0 ? void 0 : v.text,
          ),
        ),
      E
    );
  },
});
$e.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1,
    };
  },
  addProseMirrorPlugins() {
    return [
      new Fe({
        key: new Ve("placeholder"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const n =
                this.editor.isEditable || !this.options.showOnlyWhenEditable,
              { anchor: r } = e,
              s = [];
            if (!n) return null;
            const i = this.editor.isEmpty;
            return (
              t.descendants((o, l) => {
                const a = r >= l && r <= l + o.nodeSize,
                  c = !o.isLeaf && _c(o);
                if ((a || !this.options.showOnlyCurrent) && c) {
                  const u = [this.options.emptyNodeClass];
                  i && u.push(this.options.emptyEditorClass);
                  const d = ft.node(l, l + o.nodeSize, {
                    class: u.join(" "),
                    "data-placeholder":
                      typeof this.options.placeholder == "function"
                        ? this.options.placeholder({
                            editor: this.editor,
                            node: o,
                            pos: l,
                            hasAnchor: a,
                          })
                        : this.options.placeholder,
                  });
                  s.push(d);
                }
                return this.options.includeChildren;
              }),
              Oe.create(t, s)
            );
          },
        },
      }),
    ];
  },
});
$e.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null,
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (t) => {
              const e = t.style.textAlign;
              return this.options.alignments.includes(e)
                ? e
                : this.options.defaultAlignment;
            },
            renderHTML: (t) =>
              t.textAlign ? { style: `text-align: ${t.textAlign}` } : {},
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setTextAlign:
        (t) =>
        ({ commands: e }) =>
          this.options.alignments.includes(t)
            ? this.options.types
                .map((n) => e.updateAttributes(n, { textAlign: t }))
                .every((n) => n)
            : !1,
      unsetTextAlign:
        () =>
        ({ commands: t }) =>
          this.options.types
            .map((e) => t.resetAttributes(e, "textAlign"))
            .every((e) => e),
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify"),
    };
  },
});
var ca, ua;
if (typeof WeakMap < "u") {
  let t = new WeakMap();
  (ca = (e) => t.get(e)), (ua = (e, n) => (t.set(e, n), n));
} else {
  const t = [];
  let n = 0;
  (ca = (r) => {
    for (let s = 0; s < t.length; s += 2) if (t[s] == r) return t[s + 1];
  }),
    (ua = (r, s) => (n == 10 && (n = 0), (t[n++] = r), (t[n++] = s)));
}
var Ie = class {
  constructor(t, e, n, r) {
    (this.width = t), (this.height = e), (this.map = n), (this.problems = r);
  }
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const n = this.map[e];
      if (n != t) continue;
      const r = e % this.width,
        s = (e / this.width) | 0;
      let i = r + 1,
        o = s + 1;
      for (let l = 1; i < this.width && this.map[e + l] == n; l++) i++;
      for (let l = 1; o < this.height && this.map[e + this.width * l] == n; l++)
        o++;
      return { left: r, top: s, right: i, bottom: o };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  colCount(t) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == t) return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  nextCell(t, e, n) {
    const { left: r, right: s, top: i, bottom: o } = this.findCell(t);
    return e == "horiz"
      ? (n < 0 ? r == 0 : s == this.width)
        ? null
        : this.map[i * this.width + (n < 0 ? r - 1 : s)]
      : (n < 0 ? i == 0 : o == this.height)
        ? null
        : this.map[r + this.width * (n < 0 ? i - 1 : o)];
  }
  rectBetween(t, e) {
    const { left: n, right: r, top: s, bottom: i } = this.findCell(t),
      { left: o, right: l, top: a, bottom: c } = this.findCell(e);
    return {
      left: Math.min(n, o),
      top: Math.min(s, a),
      right: Math.max(r, l),
      bottom: Math.max(i, c),
    };
  }
  cellsInRect(t) {
    const e = [],
      n = {};
    for (let r = t.top; r < t.bottom; r++)
      for (let s = t.left; s < t.right; s++) {
        const i = r * this.width + s,
          o = this.map[i];
        n[o] ||
          ((n[o] = !0),
          !(
            (s == t.left && s && this.map[i - 1] == o) ||
            (r == t.top && r && this.map[i - this.width] == o)
          ) && e.push(o));
      }
    return e;
  }
  positionAt(t, e, n) {
    for (let r = 0, s = 0; ; r++) {
      const i = s + n.child(r).nodeSize;
      if (r == t) {
        let o = e + t * this.width;
        const l = (t + 1) * this.width;
        for (; o < l && this.map[o] < s; ) o++;
        return o == l ? i - 1 : this.map[o];
      }
      s = i;
    }
  }
  static get(t) {
    return ca(t) || ua(t, cv(t));
  }
};
function cv(t) {
  if (t.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + t.type.name);
  const e = uv(t),
    n = t.childCount,
    r = [];
  let s = 0,
    i = null;
  const o = [];
  for (let c = 0, u = e * n; c < u; c++) r[c] = 0;
  for (let c = 0, u = 0; c < n; c++) {
    const d = t.child(c);
    u++;
    for (let y = 0; ; y++) {
      for (; s < r.length && r[s] != 0; ) s++;
      if (y == d.childCount) break;
      const b = d.child(y),
        { colspan: x, rowspan: v, colwidth: E } = b.attrs;
      for (let R = 0; R < v; R++) {
        if (R + c >= n) {
          (i || (i = [])).push({ type: "overlong_rowspan", pos: u, n: v - R });
          break;
        }
        const f = s + R * e;
        for (let g = 0; g < x; g++) {
          r[f + g] == 0
            ? (r[f + g] = u)
            : (i || (i = [])).push({
                type: "collision",
                row: c,
                pos: u,
                n: x - g,
              });
          const m = E && E[g];
          if (m) {
            const w = ((f + g) % e) * 2,
              S = o[w];
            S == null || (S != m && o[w + 1] == 1)
              ? ((o[w] = m), (o[w + 1] = 1))
              : S == m && o[w + 1]++;
          }
        }
      }
      (s += x), (u += b.nodeSize);
    }
    const h = (c + 1) * e;
    let p = 0;
    for (; s < h; ) r[s++] == 0 && p++;
    p && (i || (i = [])).push({ type: "missing", row: c, n: p }), u++;
  }
  (e === 0 || n === 0) && (i || (i = [])).push({ type: "zero_sized" });
  const l = new Ie(e, n, r, i);
  let a = !1;
  for (let c = 0; !a && c < o.length; c += 2)
    o[c] != null && o[c + 1] < n && (a = !0);
  return a && dv(l, o, t), l;
}
function uv(t) {
  let e = -1,
    n = !1;
  for (let r = 0; r < t.childCount; r++) {
    const s = t.child(r);
    let i = 0;
    if (n)
      for (let o = 0; o < r; o++) {
        const l = t.child(o);
        for (let a = 0; a < l.childCount; a++) {
          const c = l.child(a);
          o + c.attrs.rowspan > r && (i += c.attrs.colspan);
        }
      }
    for (let o = 0; o < s.childCount; o++) {
      const l = s.child(o);
      (i += l.attrs.colspan), l.attrs.rowspan > 1 && (n = !0);
    }
    e == -1 ? (e = i) : e != i && (e = Math.max(e, i));
  }
  return e;
}
function dv(t, e, n) {
  t.problems || (t.problems = []);
  const r = {};
  for (let s = 0; s < t.map.length; s++) {
    const i = t.map[s];
    if (r[i]) continue;
    r[i] = !0;
    const o = n.nodeAt(i);
    if (!o) throw new RangeError(`No cell with offset ${i} found`);
    let l = null;
    const a = o.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const u = (s + c) % t.width,
        d = e[u * 2];
      d != null &&
        (!a.colwidth || a.colwidth[c] != d) &&
        ((l || (l = fv(a)))[c] = d);
    }
    l && t.problems.unshift({ type: "colwidth mismatch", pos: i, colwidth: l });
  }
}
function fv(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function st(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (const n in t.nodes) {
      const r = t.nodes[n],
        s = r.spec.tableRole;
      s && (e[s] = r);
    }
  }
  return e;
}
var Sn = new Ve("selectingCells");
function Nr(t) {
  for (let e = t.depth - 1; e > 0; e--)
    if (t.node(e).type.spec.tableRole == "row")
      return t.node(0).resolve(t.before(e + 1));
  return null;
}
function hv(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function Nt(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--)
    if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Bo(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const n = Nr(e.$head) || pv(e.$head);
  if (n) return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function pv(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n - e.nodeSize);
  }
}
function da(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function mv(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function Cc(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function sm(t, e, n) {
  const r = t.node(-1),
    s = Ie.get(r),
    i = t.start(-1),
    o = s.nextCell(t.pos - i, e, n);
  return o == null ? null : t.node(0).resolve(i + o);
}
function ir(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan - n };
  return (
    r.colwidth &&
      ((r.colwidth = r.colwidth.slice()),
      r.colwidth.splice(e, n),
      r.colwidth.some((s) => s > 0) || (r.colwidth = null)),
    r
  );
}
function im(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan + n };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let s = 0; s < n; s++) r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function gv(t, e, n) {
  const r = st(e.type.schema).header_cell;
  for (let s = 0; s < t.height; s++)
    if (e.nodeAt(t.map[n + s * t.width]).type != r) return !1;
  return !0;
}
var Ee = class on extends oe {
  constructor(e, n = e) {
    const r = e.node(-1),
      s = Ie.get(r),
      i = e.start(-1),
      o = s.rectBetween(e.pos - i, n.pos - i),
      l = e.node(0),
      a = s.cellsInRect(o).filter((u) => u != n.pos - i);
    a.unshift(n.pos - i);
    const c = a.map((u) => {
      const d = r.nodeAt(u);
      if (!d) throw RangeError(`No cell with offset ${u} found`);
      const h = i + u + 1;
      return new op(l.resolve(h), l.resolve(h + d.content.size));
    });
    super(c[0].$from, c[0].$to, c),
      (this.$anchorCell = e),
      (this.$headCell = n);
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)),
      s = e.resolve(n.map(this.$headCell.pos));
    if (da(r) && da(s) && Cc(r, s)) {
      const i = this.$anchorCell.node(-1) != r.node(-1);
      return i && this.isRowSelection()
        ? on.rowSelection(r, s)
        : i && this.isColSelection()
          ? on.colSelection(r, s)
          : new on(r, s);
    }
    return re.between(r, s);
  }
  content() {
    const e = this.$anchorCell.node(-1),
      n = Ie.get(e),
      r = this.$anchorCell.start(-1),
      s = n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r),
      i = {},
      o = [];
    for (let a = s.top; a < s.bottom; a++) {
      const c = [];
      for (let u = a * n.width + s.left, d = s.left; d < s.right; d++, u++) {
        const h = n.map[u];
        if (i[h]) continue;
        i[h] = !0;
        const p = n.findCell(h);
        let y = e.nodeAt(h);
        if (!y) throw RangeError(`No cell with offset ${h} found`);
        const b = s.left - p.left,
          x = p.right - s.right;
        if (b > 0 || x > 0) {
          let v = y.attrs;
          if (
            (b > 0 && (v = ir(v, 0, b)),
            x > 0 && (v = ir(v, v.colspan - x, x)),
            p.left < s.left)
          ) {
            if (((y = y.type.createAndFill(v)), !y))
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(v)}`,
              );
          } else y = y.type.create(v, y.content);
        }
        if (p.top < s.top || p.bottom > s.bottom) {
          const v = {
            ...y.attrs,
            rowspan: Math.min(p.bottom, s.bottom) - Math.max(p.top, s.top),
          };
          p.top < s.top
            ? (y = y.type.createAndFill(v))
            : (y = y.type.create(v, y.content));
        }
        c.push(y);
      }
      o.push(e.child(a).copy(H.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : o;
    return new J(H.from(l), 1, 1);
  }
  replace(e, n = J.empty) {
    const r = e.steps.length,
      s = this.ranges;
    for (let o = 0; o < s.length; o++) {
      const { $from: l, $to: a } = s[o],
        c = e.mapping.slice(r);
      e.replace(c.map(l.pos), c.map(a.pos), o ? J.empty : n);
    }
    const i = oe.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
    i && e.setSelection(i);
  }
  replaceWith(e, n) {
    this.replace(e, new J(H.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1),
      r = Ie.get(n),
      s = this.$anchorCell.start(-1),
      i = r.cellsInRect(
        r.rectBetween(this.$anchorCell.pos - s, this.$headCell.pos - s),
      );
    for (let o = 0; o < i.length; o++) e(n.nodeAt(i[o]), s + i[o]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1),
      n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan,
      s = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, s) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, n = e) {
    const r = e.node(-1),
      s = Ie.get(r),
      i = e.start(-1),
      o = s.findCell(e.pos - i),
      l = s.findCell(n.pos - i),
      a = e.node(0);
    return (
      o.top <= l.top
        ? (o.top > 0 && (e = a.resolve(i + s.map[o.left])),
          l.bottom < s.height &&
            (n = a.resolve(i + s.map[s.width * (s.height - 1) + l.right - 1])))
        : (l.top > 0 && (n = a.resolve(i + s.map[l.left])),
          o.bottom < s.height &&
            (e = a.resolve(i + s.map[s.width * (s.height - 1) + o.right - 1]))),
      new on(e, n)
    );
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1),
      n = Ie.get(e),
      r = this.$anchorCell.start(-1),
      s = n.colCount(this.$anchorCell.pos - r),
      i = n.colCount(this.$headCell.pos - r);
    if (Math.min(s, i) > 0) return !1;
    const o = s + this.$anchorCell.nodeAfter.attrs.colspan,
      l = i + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(o, l) == n.width;
  }
  eq(e) {
    return (
      e instanceof on &&
      e.$anchorCell.pos == this.$anchorCell.pos &&
      e.$headCell.pos == this.$headCell.pos
    );
  }
  static rowSelection(e, n = e) {
    const r = e.node(-1),
      s = Ie.get(r),
      i = e.start(-1),
      o = s.findCell(e.pos - i),
      l = s.findCell(n.pos - i),
      a = e.node(0);
    return (
      o.left <= l.left
        ? (o.left > 0 && (e = a.resolve(i + s.map[o.top * s.width])),
          l.right < s.width &&
            (n = a.resolve(i + s.map[s.width * (l.top + 1) - 1])))
        : (l.left > 0 && (n = a.resolve(i + s.map[l.top * s.width])),
          o.right < s.width &&
            (e = a.resolve(i + s.map[s.width * (o.top + 1) - 1]))),
      new on(e, n)
    );
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos,
    };
  }
  static fromJSON(e, n) {
    return new on(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new on(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new yv(this.$anchorCell.pos, this.$headCell.pos);
  }
};
Ee.prototype.visible = !1;
oe.jsonID("cell", Ee);
var yv = class om {
  constructor(e, n) {
    (this.anchor = e), (this.head = n);
  }
  map(e) {
    return new om(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor),
      r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" &&
      r.parent.type.spec.tableRole == "row" &&
      n.index() < n.parent.childCount &&
      r.index() < r.parent.childCount &&
      Cc(n, r)
      ? new Ee(n, r)
      : oe.near(r, 1);
  }
};
function bv(t) {
  if (!(t.selection instanceof Ee)) return null;
  const e = [];
  return (
    t.selection.forEachCell((n, r) => {
      e.push(ft.node(r, r + n.nodeSize, { class: "selectedCell" }));
    }),
    Oe.create(t.doc, e)
  );
}
function wv({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos,
    r = e.pos,
    s = t.depth;
  for (; s >= 0 && !(t.after(s + 1) < t.end(s)); s--, n++);
  for (let i = e.depth; i >= 0 && !(e.before(i + 1) > e.start(i)); i--, r--);
  return n == r && /row|table/.test(t.node(s).type.spec.tableRole);
}
function vv({ $from: t, $to: e }) {
  let n, r;
  for (let s = t.depth; s > 0; s--) {
    const i = t.node(s);
    if (
      i.type.spec.tableRole === "cell" ||
      i.type.spec.tableRole === "header_cell"
    ) {
      n = i;
      break;
    }
  }
  for (let s = e.depth; s > 0; s--) {
    const i = e.node(s);
    if (
      i.type.spec.tableRole === "cell" ||
      i.type.spec.tableRole === "header_cell"
    ) {
      r = i;
      break;
    }
  }
  return n !== r && e.parentOffset === 0;
}
function xv(t, e, n) {
  const r = (e || t).selection,
    s = (e || t).doc;
  let i, o;
  if (r instanceof ne && (o = r.node.type.spec.tableRole)) {
    if (o == "cell" || o == "header_cell") i = Ee.create(s, r.from);
    else if (o == "row") {
      const l = s.resolve(r.from + 1);
      i = Ee.rowSelection(l, l);
    } else if (!n) {
      const l = Ie.get(r.node),
        a = r.from + 1,
        c = a + l.map[l.width * l.height - 1];
      i = Ee.create(s, a + 1, c);
    }
  } else
    r instanceof re && wv(r)
      ? (i = re.create(s, r.from))
      : r instanceof re &&
        vv(r) &&
        (i = re.create(s, r.$from.start(), r.$from.end()));
  return i && (e || (e = t.tr)).setSelection(i), e;
}
var kv = new Ve("fix-tables");
function lm(t, e, n, r) {
  const s = t.childCount,
    i = e.childCount;
  e: for (let o = 0, l = 0; o < i; o++) {
    const a = e.child(o);
    for (let c = l, u = Math.min(s, o + 3); c < u; c++)
      if (t.child(c) == a) {
        (l = c + 1), (n += a.nodeSize);
        continue e;
      }
    r(a, n),
      l < s && t.child(l).sameMarkup(a)
        ? lm(t.child(l), a, n + 1, r)
        : a.nodesBetween(0, a.content.size, r, n + 1),
      (n += a.nodeSize);
  }
}
function am(t, e) {
  let n;
  const r = (s, i) => {
    s.type.spec.tableRole == "table" && (n = _v(t, s, i, n));
  };
  return e ? e.doc != t.doc && lm(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function _v(t, e, n, r) {
  const s = Ie.get(e);
  if (!s.problems) return r;
  r || (r = t.tr);
  const i = [];
  for (let a = 0; a < s.height; a++) i.push(0);
  for (let a = 0; a < s.problems.length; a++) {
    const c = s.problems[a];
    if (c.type == "collision") {
      const u = e.nodeAt(c.pos);
      if (!u) continue;
      const d = u.attrs;
      for (let h = 0; h < d.rowspan; h++) i[c.row + h] += c.n;
      r.setNodeMarkup(
        r.mapping.map(n + 1 + c.pos),
        null,
        ir(d, d.colspan - c.n, c.n),
      );
    } else if (c.type == "missing") i[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const u = e.nodeAt(c.pos);
      if (!u) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, {
        ...u.attrs,
        rowspan: u.attrs.rowspan - c.n,
      });
    } else if (c.type == "colwidth mismatch") {
      const u = e.nodeAt(c.pos);
      if (!u) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, {
        ...u.attrs,
        colwidth: c.colwidth,
      });
    } else if (c.type == "zero_sized") {
      const u = r.mapping.map(n);
      r.delete(u, u + e.nodeSize);
    }
  }
  let o, l;
  for (let a = 0; a < i.length; a++) i[a] && (o == null && (o = a), (l = a));
  for (let a = 0, c = n + 1; a < s.height; a++) {
    const u = e.child(a),
      d = c + u.nodeSize,
      h = i[a];
    if (h > 0) {
      let p = "cell";
      u.firstChild && (p = u.firstChild.type.spec.tableRole);
      const y = [];
      for (let x = 0; x < h; x++) {
        const v = st(t.schema)[p].createAndFill();
        v && y.push(v);
      }
      const b = (a == 0 || o == a - 1) && l == a ? c + 1 : d - 1;
      r.insert(r.mapping.map(b), y);
    }
    c = d;
  }
  return r.setMeta(kv, { fixTables: !0 });
}
function en(t) {
  const e = t.selection,
    n = Bo(t),
    r = n.node(-1),
    s = n.start(-1),
    i = Ie.get(r);
  return {
    ...(e instanceof Ee
      ? i.rectBetween(e.$anchorCell.pos - s, e.$headCell.pos - s)
      : i.findCell(n.pos - s)),
    tableStart: s,
    map: i,
    table: r,
  };
}
function cm(t, { map: e, tableStart: n, table: r }, s) {
  let i = s > 0 ? -1 : 0;
  gv(e, r, s + i) && (i = s == 0 || s == e.width ? null : 0);
  for (let o = 0; o < e.height; o++) {
    const l = o * e.width + s;
    if (s > 0 && s < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l],
        c = r.nodeAt(a);
      t.setNodeMarkup(
        t.mapping.map(n + a),
        null,
        im(c.attrs, s - e.colCount(a)),
      ),
        (o += c.attrs.rowspan - 1);
    } else {
      const a =
          i == null ? st(r.type.schema).cell : r.nodeAt(e.map[l + i]).type,
        c = e.positionAt(o, s, r);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function Sv(t, e) {
  if (!Nt(t)) return !1;
  if (e) {
    const n = en(t);
    e(cm(t.tr, n, n.left));
  }
  return !0;
}
function Cv(t, e) {
  if (!Nt(t)) return !1;
  if (e) {
    const n = en(t);
    e(cm(t.tr, n, n.right));
  }
  return !0;
}
function Ev(t, { map: e, table: n, tableStart: r }, s) {
  const i = t.mapping.maps.length;
  for (let o = 0; o < e.height; ) {
    const l = o * e.width + s,
      a = e.map[l],
      c = n.nodeAt(a),
      u = c.attrs;
    if ((s > 0 && e.map[l - 1] == a) || (s < e.width - 1 && e.map[l + 1] == a))
      t.setNodeMarkup(
        t.mapping.slice(i).map(r + a),
        null,
        ir(u, s - e.colCount(a)),
      );
    else {
      const d = t.mapping.slice(i).map(r + a);
      t.delete(d, d + c.nodeSize);
    }
    o += u.rowspan;
  }
}
function Av(t, e) {
  if (!Nt(t)) return !1;
  if (e) {
    const n = en(t),
      r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let s = n.right - 1; Ev(r, n, s), s != n.left; s--) {
      const i = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!i) throw RangeError("No table found");
      (n.table = i), (n.map = Ie.get(i));
    }
    e(r);
  }
  return !0;
}
function Mv(t, e, n) {
  var r;
  const s = st(e.type.schema).header_cell;
  for (let i = 0; i < t.width; i++)
    if (((r = e.nodeAt(t.map[i + n * t.width])) == null ? void 0 : r.type) != s)
      return !1;
  return !0;
}
function um(t, { map: e, tableStart: n, table: r }, s) {
  var i;
  let o = n;
  for (let c = 0; c < s; c++) o += r.child(c).nodeSize;
  const l = [];
  let a = s > 0 ? -1 : 0;
  Mv(e, r, s + a) && (a = s == 0 || s == e.height ? null : 0);
  for (let c = 0, u = e.width * s; c < e.width; c++, u++)
    if (s > 0 && s < e.height && e.map[u] == e.map[u - e.width]) {
      const d = e.map[u],
        h = r.nodeAt(d).attrs;
      t.setNodeMarkup(n + d, null, { ...h, rowspan: h.rowspan + 1 }),
        (c += h.colspan - 1);
    } else {
      const d =
          a == null
            ? st(r.type.schema).cell
            : (i = r.nodeAt(e.map[u + a * e.width])) == null
              ? void 0
              : i.type,
        h = d?.createAndFill();
      h && l.push(h);
    }
  return t.insert(o, st(r.type.schema).row.create(null, l)), t;
}
function Tv(t, e) {
  if (!Nt(t)) return !1;
  if (e) {
    const n = en(t);
    e(um(t.tr, n, n.top));
  }
  return !0;
}
function Rv(t, e) {
  if (!Nt(t)) return !1;
  if (e) {
    const n = en(t);
    e(um(t.tr, n, n.bottom));
  }
  return !0;
}
function Ov(t, { map: e, table: n, tableStart: r }, s) {
  let i = 0;
  for (let c = 0; c < s; c++) i += n.child(c).nodeSize;
  const o = i + n.child(s).nodeSize,
    l = t.mapping.maps.length;
  t.delete(i + r, o + r);
  const a = new Set();
  for (let c = 0, u = s * e.width; c < e.width; c++, u++) {
    const d = e.map[u];
    if (!a.has(d)) {
      if ((a.add(d), s > 0 && d == e.map[u - e.width])) {
        const h = n.nodeAt(d).attrs;
        t.setNodeMarkup(t.mapping.slice(l).map(d + r), null, {
          ...h,
          rowspan: h.rowspan - 1,
        }),
          (c += h.colspan - 1);
      } else if (s < e.height && d == e.map[u + e.width]) {
        const h = n.nodeAt(d),
          p = h.attrs,
          y = h.type.create({ ...p, rowspan: h.attrs.rowspan - 1 }, h.content),
          b = e.positionAt(s + 1, c, n);
        t.insert(t.mapping.slice(l).map(r + b), y), (c += p.colspan - 1);
      }
    }
  }
}
function jv(t, e) {
  if (!Nt(t)) return !1;
  if (e) {
    const n = en(t),
      r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let s = n.bottom - 1; Ov(r, n, s), s != n.top; s--) {
      const i = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!i) throw RangeError("No table found");
      (n.table = i), (n.map = Ie.get(n.table));
    }
    e(r);
  }
  return !0;
}
function Od(t) {
  const e = t.content;
  return (
    e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0
  );
}
function Pv({ width: t, height: e, map: n }, r) {
  let s = r.top * t + r.left,
    i = s,
    o = (r.bottom - 1) * t + r.left,
    l = s + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if ((r.left > 0 && n[i] == n[i - 1]) || (r.right < t && n[l] == n[l + 1]))
      return !0;
    (i += t), (l += t);
  }
  for (let a = r.left; a < r.right; a++) {
    if ((r.top > 0 && n[s] == n[s - t]) || (r.bottom < e && n[o] == n[o + t]))
      return !0;
    s++, o++;
  }
  return !1;
}
function jd(t, e) {
  const n = t.selection;
  if (!(n instanceof Ee) || n.$anchorCell.pos == n.$headCell.pos) return !1;
  const r = en(t),
    { map: s } = r;
  if (Pv(s, r)) return !1;
  if (e) {
    const i = t.tr,
      o = {};
    let l = H.empty,
      a,
      c;
    for (let u = r.top; u < r.bottom; u++)
      for (let d = r.left; d < r.right; d++) {
        const h = s.map[u * s.width + d],
          p = r.table.nodeAt(h);
        if (!(o[h] || !p))
          if (((o[h] = !0), a == null)) (a = h), (c = p);
          else {
            Od(p) || (l = l.append(p.content));
            const y = i.mapping.map(h + r.tableStart);
            i.delete(y, y + p.nodeSize);
          }
      }
    if (a == null || c == null) return !0;
    if (
      (i.setNodeMarkup(a + r.tableStart, null, {
        ...im(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
        rowspan: r.bottom - r.top,
      }),
      l.size)
    ) {
      const u = a + 1 + c.content.size,
        d = Od(c) ? a + 1 : u;
      i.replaceWith(d + r.tableStart, u + r.tableStart, l);
    }
    i.setSelection(new Ee(i.doc.resolve(a + r.tableStart))), e(i);
  }
  return !0;
}
function Pd(t, e) {
  const n = st(t.schema);
  return Iv(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function Iv(t) {
  return (e, n) => {
    var r;
    const s = e.selection;
    let i, o;
    if (s instanceof Ee) {
      if (s.$anchorCell.pos != s.$headCell.pos) return !1;
      (i = s.$anchorCell.nodeAfter), (o = s.$anchorCell.pos);
    } else {
      if (((i = hv(s.$from)), !i)) return !1;
      o = (r = Nr(s.$from)) == null ? void 0 : r.pos;
    }
    if (
      i == null ||
      o == null ||
      (i.attrs.colspan == 1 && i.attrs.rowspan == 1)
    )
      return !1;
    if (n) {
      let l = i.attrs;
      const a = [],
        c = l.colwidth;
      l.rowspan > 1 && (l = { ...l, rowspan: 1 }),
        l.colspan > 1 && (l = { ...l, colspan: 1 });
      const u = en(e),
        d = e.tr;
      for (let p = 0; p < u.right - u.left; p++)
        a.push(c ? { ...l, colwidth: c && c[p] ? [c[p]] : null } : l);
      let h;
      for (let p = u.top; p < u.bottom; p++) {
        let y = u.map.positionAt(p, u.left, u.table);
        p == u.top && (y += i.nodeSize);
        for (let b = u.left, x = 0; b < u.right; b++, x++)
          (b == u.left && p == u.top) ||
            d.insert(
              (h = d.mapping.map(y + u.tableStart, 1)),
              t({ node: i, row: p, col: b }).createAndFill(a[x]),
            );
      }
      d.setNodeMarkup(o, t({ node: i, row: u.top, col: u.left }), a[0]),
        s instanceof Ee &&
          d.setSelection(
            new Ee(
              d.doc.resolve(s.$anchorCell.pos),
              h ? d.doc.resolve(h) : void 0,
            ),
          ),
        n(d);
    }
    return !0;
  };
}
function Lv(t, e) {
  return function (n, r) {
    if (!Nt(n)) return !1;
    const s = Bo(n);
    if (s.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const i = n.tr;
      n.selection instanceof Ee
        ? n.selection.forEachCell((o, l) => {
            o.attrs[t] !== e &&
              i.setNodeMarkup(l, null, { ...o.attrs, [t]: e });
          })
        : i.setNodeMarkup(s.pos, null, { ...s.nodeAfter.attrs, [t]: e }),
        r(i);
    }
    return !0;
  };
}
function Nv(t) {
  return function (e, n) {
    if (!Nt(e)) return !1;
    if (n) {
      const r = st(e.schema),
        s = en(e),
        i = e.tr,
        o = s.map.cellsInRect(
          t == "column"
            ? { left: s.left, top: 0, right: s.right, bottom: s.map.height }
            : t == "row"
              ? { left: 0, top: s.top, right: s.map.width, bottom: s.bottom }
              : s,
        ),
        l = o.map((a) => s.table.nodeAt(a));
      for (let a = 0; a < o.length; a++)
        l[a].type == r.header_cell &&
          i.setNodeMarkup(s.tableStart + o[a], r.cell, l[a].attrs);
      if (i.steps.length == 0)
        for (let a = 0; a < o.length; a++)
          i.setNodeMarkup(s.tableStart + o[a], r.header_cell, l[a].attrs);
      n(i);
    }
    return !0;
  };
}
function Id(t, e, n) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1,
  });
  for (let s = 0; s < r.length; s++) {
    const i = e.table.nodeAt(r[s]);
    if (i && i.type !== n.header_cell) return !1;
  }
  return !0;
}
function Rs(t, e) {
  return (
    (e = e || { useDeprecatedLogic: !1 }),
    e.useDeprecatedLogic
      ? Nv(t)
      : function (n, r) {
          if (!Nt(n)) return !1;
          if (r) {
            const s = st(n.schema),
              i = en(n),
              o = n.tr,
              l = Id("row", i, s),
              a = Id("column", i, s),
              u = (t === "column" ? l : t === "row" ? a : !1) ? 1 : 0,
              d =
                t == "column"
                  ? { left: 0, top: u, right: 1, bottom: i.map.height }
                  : t == "row"
                    ? { left: u, top: 0, right: i.map.width, bottom: 1 }
                    : i,
              h =
                t == "column"
                  ? a
                    ? s.cell
                    : s.header_cell
                  : t == "row"
                    ? l
                      ? s.cell
                      : s.header_cell
                    : s.cell;
            i.map.cellsInRect(d).forEach((p) => {
              const y = p + i.tableStart,
                b = o.doc.nodeAt(y);
              b && o.setNodeMarkup(y, h, b.attrs);
            }),
              r(o);
          }
          return !0;
        }
  );
}
Rs("row", { useDeprecatedLogic: !0 });
Rs("column", { useDeprecatedLogic: !0 });
var zv = Rs("cell", { useDeprecatedLogic: !0 });
function Dv(t, e) {
  if (e < 0) {
    const n = t.nodeBefore;
    if (n) return t.pos - n.nodeSize;
    for (let r = t.index(-1) - 1, s = t.before(); r >= 0; r--) {
      const i = t.node(-1).child(r),
        o = i.lastChild;
      if (o) return s - 1 - o.nodeSize;
      s -= i.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1)
      return t.pos + t.nodeAfter.nodeSize;
    const n = t.node(-1);
    for (let r = t.indexAfter(-1), s = t.after(); r < n.childCount; r++) {
      const i = n.child(r);
      if (i.childCount) return s + 1;
      s += i.nodeSize;
    }
  }
  return null;
}
function Ld(t) {
  return function (e, n) {
    if (!Nt(e)) return !1;
    const r = Dv(Bo(e), t);
    if (r == null) return !1;
    if (n) {
      const s = e.doc.resolve(r);
      n(e.tr.setSelection(re.between(s, mv(s))).scrollIntoView());
    }
    return !0;
  };
}
function Bv(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--)
    if (n.node(r).type.spec.tableRole == "table")
      return e && e(t.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
  return !1;
}
function Qs(t, e) {
  const n = t.selection;
  if (!(n instanceof Ee)) return !1;
  if (e) {
    const r = t.tr,
      s = st(t.schema).cell.createAndFill().content;
    n.forEachCell((i, o) => {
      i.content.eq(s) ||
        r.replace(
          r.mapping.map(o + 1),
          r.mapping.map(o + i.nodeSize - 1),
          new J(s, 0, 0),
        );
    }),
      r.docChanged && e(r);
  }
  return !0;
}
function Hv(t) {
  if (!t.size) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (
    ;
    e.childCount == 1 &&
    ((n > 0 && r > 0) || e.child(0).type.spec.tableRole == "table");

  )
    n--, r--, (e = e.child(0).content);
  const s = e.child(0),
    i = s.type.spec.tableRole,
    o = s.type.schema,
    l = [];
  if (i == "row")
    for (let a = 0; a < e.childCount; a++) {
      let c = e.child(a).content;
      const u = a ? 0 : Math.max(0, n - 1),
        d = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (u || d) && (c = fa(st(o).row, new J(c, u, d)).content), l.push(c);
    }
  else if (i == "cell" || i == "header_cell")
    l.push(n || r ? fa(st(o).row, new J(e, n, r)).content : e);
  else return null;
  return $v(o, l);
}
function $v(t, e) {
  const n = [];
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    for (let o = i.childCount - 1; o >= 0; o--) {
      const { rowspan: l, colspan: a } = i.child(o).attrs;
      for (let c = s; c < s + l; c++) n[c] = (n[c] || 0) + a;
    }
  }
  let r = 0;
  for (let s = 0; s < n.length; s++) r = Math.max(r, n[s]);
  for (let s = 0; s < n.length; s++)
    if ((s >= e.length && e.push(H.empty), n[s] < r)) {
      const i = st(t).cell.createAndFill(),
        o = [];
      for (let l = n[s]; l < r; l++) o.push(i);
      e[s] = e[s].append(H.from(o));
    }
  return { height: e.length, width: r, rows: e };
}
function fa(t, e) {
  const n = t.createAndFill();
  return new ip(n).replace(0, n.content.size, e).doc;
}
function Fv({ width: t, height: e, rows: n }, r, s) {
  if (t != r) {
    const i = [],
      o = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l],
        c = [];
      for (let u = i[l] || 0, d = 0; u < r; d++) {
        let h = a.child(d % a.childCount);
        u + h.attrs.colspan > r &&
          (h = h.type.createChecked(
            ir(h.attrs, h.attrs.colspan, u + h.attrs.colspan - r),
            h.content,
          )),
          c.push(h),
          (u += h.attrs.colspan);
        for (let p = 1; p < h.attrs.rowspan; p++)
          i[l + p] = (i[l + p] || 0) + h.attrs.colspan;
      }
      o.push(H.from(c));
    }
    (n = o), (t = r);
  }
  if (e != s) {
    const i = [];
    for (let o = 0, l = 0; o < s; o++, l++) {
      const a = [],
        c = n[l % e];
      for (let u = 0; u < c.childCount; u++) {
        let d = c.child(u);
        o + d.attrs.rowspan > s &&
          (d = d.type.create(
            { ...d.attrs, rowspan: Math.max(1, s - d.attrs.rowspan) },
            d.content,
          )),
          a.push(d);
      }
      i.push(H.from(a));
    }
    (n = i), (e = s);
  }
  return { width: t, height: e, rows: n };
}
function Vv(t, e, n, r, s, i, o) {
  const l = t.doc.type.schema,
    a = st(l);
  let c, u;
  if (s > e.width)
    for (let d = 0, h = 0; d < e.height; d++) {
      const p = n.child(d);
      h += p.nodeSize;
      const y = [];
      let b;
      p.lastChild == null || p.lastChild.type == a.cell
        ? (b = c || (c = a.cell.createAndFill()))
        : (b = u || (u = a.header_cell.createAndFill()));
      for (let x = e.width; x < s; x++) y.push(b);
      t.insert(t.mapping.slice(o).map(h - 1 + r), y);
    }
  if (i > e.height) {
    const d = [];
    for (
      let y = 0, b = (e.height - 1) * e.width;
      y < Math.max(e.width, s);
      y++
    ) {
      const x =
        y >= e.width ? !1 : n.nodeAt(e.map[b + y]).type == a.header_cell;
      d.push(
        x
          ? u || (u = a.header_cell.createAndFill())
          : c || (c = a.cell.createAndFill()),
      );
    }
    const h = a.row.create(null, H.from(d)),
      p = [];
    for (let y = e.height; y < i; y++) p.push(h);
    t.insert(t.mapping.slice(o).map(r + n.nodeSize - 2), p);
  }
  return !!(c || u);
}
function Nd(t, e, n, r, s, i, o, l) {
  if (o == 0 || o == e.height) return !1;
  let a = !1;
  for (let c = s; c < i; c++) {
    const u = o * e.width + c,
      d = e.map[u];
    if (e.map[u - e.width] == d) {
      a = !0;
      const h = n.nodeAt(d),
        { top: p, left: y } = e.findCell(d);
      t.setNodeMarkup(t.mapping.slice(l).map(d + r), null, {
        ...h.attrs,
        rowspan: o - p,
      }),
        t.insert(
          t.mapping.slice(l).map(e.positionAt(o, y, n)),
          h.type.createAndFill({
            ...h.attrs,
            rowspan: p + h.attrs.rowspan - o,
          }),
        ),
        (c += h.attrs.colspan - 1);
    }
  }
  return a;
}
function zd(t, e, n, r, s, i, o, l) {
  if (o == 0 || o == e.width) return !1;
  let a = !1;
  for (let c = s; c < i; c++) {
    const u = c * e.width + o,
      d = e.map[u];
    if (e.map[u - 1] == d) {
      a = !0;
      const h = n.nodeAt(d),
        p = e.colCount(d),
        y = t.mapping.slice(l).map(d + r);
      t.setNodeMarkup(y, null, ir(h.attrs, o - p, h.attrs.colspan - (o - p))),
        t.insert(y + h.nodeSize, h.type.createAndFill(ir(h.attrs, 0, o - p))),
        (c += h.attrs.rowspan - 1);
    }
  }
  return a;
}
function Dd(t, e, n, r, s) {
  let i = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!i) throw new Error("No table found");
  let o = Ie.get(i);
  const { top: l, left: a } = r,
    c = a + s.width,
    u = l + s.height,
    d = t.tr;
  let h = 0;
  function p() {
    if (((i = n ? d.doc.nodeAt(n - 1) : d.doc), !i))
      throw new Error("No table found");
    (o = Ie.get(i)), (h = d.mapping.maps.length);
  }
  Vv(d, o, i, n, c, u, h) && p(),
    Nd(d, o, i, n, a, c, l, h) && p(),
    Nd(d, o, i, n, a, c, u, h) && p(),
    zd(d, o, i, n, l, u, a, h) && p(),
    zd(d, o, i, n, l, u, c, h) && p();
  for (let y = l; y < u; y++) {
    const b = o.positionAt(y, a, i),
      x = o.positionAt(y, c, i);
    d.replace(
      d.mapping.slice(h).map(b + n),
      d.mapping.slice(h).map(x + n),
      new J(s.rows[y - l], 0, 0),
    );
  }
  p(),
    d.setSelection(
      new Ee(
        d.doc.resolve(n + o.positionAt(l, a, i)),
        d.doc.resolve(n + o.positionAt(u - 1, c - 1, i)),
      ),
    ),
    e(d);
}
var Wv = Pp({
  ArrowLeft: Ys("horiz", -1),
  ArrowRight: Ys("horiz", 1),
  ArrowUp: Ys("vert", -1),
  ArrowDown: Ys("vert", 1),
  "Shift-ArrowLeft": Xs("horiz", -1),
  "Shift-ArrowRight": Xs("horiz", 1),
  "Shift-ArrowUp": Xs("vert", -1),
  "Shift-ArrowDown": Xs("vert", 1),
  Backspace: Qs,
  "Mod-Backspace": Qs,
  Delete: Qs,
  "Mod-Delete": Qs,
});
function gi(t, e, n) {
  return n.eq(t.selection)
    ? !1
    : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function Ys(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const i = n.selection;
    if (i instanceof Ee) return gi(n, r, oe.near(i.$headCell, e));
    if (t != "horiz" && !i.empty) return !1;
    const o = dm(s, t, e);
    if (o == null) return !1;
    if (t == "horiz") return gi(n, r, oe.near(n.doc.resolve(i.head + e), e));
    {
      const l = n.doc.resolve(o),
        a = sm(l, t, e);
      let c;
      return (
        a
          ? (c = oe.near(a, 1))
          : e < 0
            ? (c = oe.near(n.doc.resolve(l.before(-1)), -1))
            : (c = oe.near(n.doc.resolve(l.after(-1)), 1)),
        gi(n, r, c)
      );
    }
  };
}
function Xs(t, e) {
  return (n, r, s) => {
    if (!s) return !1;
    const i = n.selection;
    let o;
    if (i instanceof Ee) o = i;
    else {
      const a = dm(s, t, e);
      if (a == null) return !1;
      o = new Ee(n.doc.resolve(a));
    }
    const l = sm(o.$headCell, t, e);
    return l ? gi(n, r, new Ee(o.$anchorCell, l)) : !1;
  };
}
function Uv(t, e) {
  const n = t.state.doc,
    r = Nr(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new Ee(r))), !0) : !1;
}
function Kv(t, e, n) {
  if (!Nt(t.state)) return !1;
  let r = Hv(n);
  const s = t.state.selection;
  if (s instanceof Ee) {
    r ||
      (r = {
        width: 1,
        height: 1,
        rows: [H.from(fa(st(t.state.schema).cell, n))],
      });
    const i = s.$anchorCell.node(-1),
      o = s.$anchorCell.start(-1),
      l = Ie.get(i).rectBetween(s.$anchorCell.pos - o, s.$headCell.pos - o);
    return (
      (r = Fv(r, l.right - l.left, l.bottom - l.top)),
      Dd(t.state, t.dispatch, o, l, r),
      !0
    );
  } else if (r) {
    const i = Bo(t.state),
      o = i.start(-1);
    return (
      Dd(t.state, t.dispatch, o, Ie.get(i.node(-1)).findCell(i.pos - o), r), !0
    );
  } else return !1;
}
function qv(t, e) {
  var n;
  if (e.ctrlKey || e.metaKey) return;
  const r = Bd(t, e.target);
  let s;
  if (e.shiftKey && t.state.selection instanceof Ee)
    i(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (
    e.shiftKey &&
    r &&
    (s = Nr(t.state.selection.$anchor)) != null &&
    ((n = bl(t, e)) == null ? void 0 : n.pos) != s.pos
  )
    i(s, e), e.preventDefault();
  else if (!r) return;
  function i(a, c) {
    let u = bl(t, c);
    const d = Sn.getState(t.state) == null;
    if (!u || !Cc(a, u))
      if (d) u = a;
      else return;
    const h = new Ee(a, u);
    if (d || !t.state.selection.eq(h)) {
      const p = t.state.tr.setSelection(h);
      d && p.setMeta(Sn, a.pos), t.dispatch(p);
    }
  }
  function o() {
    t.root.removeEventListener("mouseup", o),
      t.root.removeEventListener("dragstart", o),
      t.root.removeEventListener("mousemove", l),
      Sn.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(Sn, -1));
  }
  function l(a) {
    const c = a,
      u = Sn.getState(t.state);
    let d;
    if (u != null) d = t.state.doc.resolve(u);
    else if (Bd(t, c.target) != r && ((d = bl(t, e)), !d)) return o();
    d && i(d, c);
  }
  t.root.addEventListener("mouseup", o),
    t.root.addEventListener("dragstart", o),
    t.root.addEventListener("mousemove", l);
}
function dm(t, e, n) {
  if (!(t.state.selection instanceof re)) return null;
  const { $head: r } = t.state.selection;
  for (let s = r.depth - 1; s >= 0; s--) {
    const i = r.node(s);
    if ((n < 0 ? r.index(s) : r.indexAfter(s)) != (n < 0 ? 0 : i.childCount))
      return null;
    if (
      i.type.spec.tableRole == "cell" ||
      i.type.spec.tableRole == "header_cell"
    ) {
      const l = r.before(s),
        a = e == "vert" ? (n > 0 ? "down" : "up") : n > 0 ? "right" : "left";
      return t.endOfTextblock(a) ? l : null;
    }
  }
  return null;
}
function Bd(t, e) {
  for (; e && e != t.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH") return e;
  return null;
}
function bl(t, e) {
  const n = t.posAtCoords({ left: e.clientX, top: e.clientY });
  return n && n ? Nr(t.state.doc.resolve(n.pos)) : null;
}
var Jv = class {
  constructor(e, n) {
    (this.node = e),
      (this.defaultCellMinWidth = n),
      (this.dom = document.createElement("div")),
      (this.dom.className = "tableWrapper"),
      (this.table = this.dom.appendChild(document.createElement("table"))),
      this.table.style.setProperty("--default-cell-min-width", `${n}px`),
      (this.colgroup = this.table.appendChild(
        document.createElement("colgroup"),
      )),
      ha(e, this.colgroup, this.table, n),
      (this.contentDOM = this.table.appendChild(
        document.createElement("tbody"),
      ));
  }
  update(e) {
    return e.type != this.node.type
      ? !1
      : ((this.node = e),
        ha(e, this.colgroup, this.table, this.defaultCellMinWidth),
        !0);
  }
  ignoreMutation(e) {
    return (
      e.type == "attributes" &&
      (e.target == this.table || this.colgroup.contains(e.target))
    );
  }
};
function ha(t, e, n, r, s, i) {
  var o;
  let l = 0,
    a = !0,
    c = e.firstChild;
  const u = t.firstChild;
  if (u) {
    for (let d = 0, h = 0; d < u.childCount; d++) {
      const { colspan: p, colwidth: y } = u.child(d).attrs;
      for (let b = 0; b < p; b++, h++) {
        const x = s == h ? i : y && y[b],
          v = x ? x + "px" : "";
        if (((l += x || r), x || (a = !1), c))
          c.style.width != v && (c.style.width = v), (c = c.nextSibling);
        else {
          const E = document.createElement("col");
          (E.style.width = v), e.appendChild(E);
        }
      }
    }
    for (; c; ) {
      const d = c.nextSibling;
      (o = c.parentNode) == null || o.removeChild(c), (c = d);
    }
    a
      ? ((n.style.width = l + "px"), (n.style.minWidth = ""))
      : ((n.style.width = ""), (n.style.minWidth = l + "px"));
  }
}
var wt = new Ve("tableColumnResizing");
function Gv({
  handleWidth: t = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: n = 100,
  View: r = Jv,
  lastColumnResizable: s = !0,
} = {}) {
  const i = new Fe({
    key: wt,
    state: {
      init(o, l) {
        var a, c;
        const u =
            (c = (a = i.spec) == null ? void 0 : a.props) == null
              ? void 0
              : c.nodeViews,
          d = st(l.schema).table.name;
        return r && u && (u[d] = (h, p) => new r(h, n, p)), new Qv(-1, !1);
      },
      apply(o, l) {
        return l.apply(o);
      },
    },
    props: {
      attributes: (o) => {
        const l = wt.getState(o);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (o, l) => {
          Yv(o, l, t, s);
        },
        mouseleave: (o) => {
          Xv(o);
        },
        mousedown: (o, l) => {
          Zv(o, l, e, n);
        },
      },
      decorations: (o) => {
        const l = wt.getState(o);
        if (l && l.activeHandle > -1) return s8(o, l.activeHandle);
      },
      nodeViews: {},
    },
  });
  return i;
}
var Qv = class yi {
  constructor(e, n) {
    (this.activeHandle = e), (this.dragging = n);
  }
  apply(e) {
    const n = this,
      r = e.getMeta(wt);
    if (r && r.setHandle != null) return new yi(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new yi(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let s = e.mapping.map(n.activeHandle, -1);
      return da(e.doc.resolve(s)) || (s = -1), new yi(s, n.dragging);
    }
    return n;
  }
};
function Yv(t, e, n, r) {
  if (!t.editable) return;
  const s = wt.getState(t.state);
  if (s && !s.dragging) {
    const i = t8(e.target);
    let o = -1;
    if (i) {
      const { left: l, right: a } = i.getBoundingClientRect();
      e.clientX - l <= n
        ? (o = Hd(t, e, "left", n))
        : a - e.clientX <= n && (o = Hd(t, e, "right", n));
    }
    if (o != s.activeHandle) {
      if (!r && o !== -1) {
        const l = t.state.doc.resolve(o),
          a = l.node(-1),
          c = Ie.get(a),
          u = l.start(-1);
        if (
          c.colCount(l.pos - u) + l.nodeAfter.attrs.colspan - 1 ==
          c.width - 1
        )
          return;
      }
      fm(t, o);
    }
  }
}
function Xv(t) {
  if (!t.editable) return;
  const e = wt.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && fm(t, -1);
}
function Zv(t, e, n, r) {
  var s;
  if (!t.editable) return !1;
  const i = (s = t.dom.ownerDocument.defaultView) != null ? s : window,
    o = wt.getState(t.state);
  if (!o || o.activeHandle == -1 || o.dragging) return !1;
  const l = t.state.doc.nodeAt(o.activeHandle),
    a = e8(t, o.activeHandle, l.attrs);
  t.dispatch(
    t.state.tr.setMeta(wt, {
      setDragging: { startX: e.clientX, startWidth: a },
    }),
  );
  function c(d) {
    i.removeEventListener("mouseup", c), i.removeEventListener("mousemove", u);
    const h = wt.getState(t.state);
    h?.dragging &&
      (n8(t, h.activeHandle, $d(h.dragging, d, n)),
      t.dispatch(t.state.tr.setMeta(wt, { setDragging: null })));
  }
  function u(d) {
    if (!d.which) return c(d);
    const h = wt.getState(t.state);
    if (h && h.dragging) {
      const p = $d(h.dragging, d, n);
      Fd(t, h.activeHandle, p, r);
    }
  }
  return (
    Fd(t, o.activeHandle, a, r),
    i.addEventListener("mouseup", c),
    i.addEventListener("mousemove", u),
    e.preventDefault(),
    !0
  );
}
function e8(t, e, { colspan: n, colwidth: r }) {
  const s = r && r[r.length - 1];
  if (s) return s;
  const i = t.domAtPos(e);
  let l = i.node.childNodes[i.offset].offsetWidth,
    a = n;
  if (r) for (let c = 0; c < n; c++) r[c] && ((l -= r[c]), a--);
  return l / a;
}
function t8(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; )
    t =
      t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function Hd(t, e, n, r) {
  const s = n == "right" ? -r : r,
    i = t.posAtCoords({ left: e.clientX + s, top: e.clientY });
  if (!i) return -1;
  const { pos: o } = i,
    l = Nr(t.state.doc.resolve(o));
  if (!l) return -1;
  if (n == "right") return l.pos;
  const a = Ie.get(l.node(-1)),
    c = l.start(-1),
    u = a.map.indexOf(l.pos - c);
  return u % a.width == 0 ? -1 : c + a.map[u - 1];
}
function $d(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function fm(t, e) {
  t.dispatch(t.state.tr.setMeta(wt, { setHandle: e }));
}
function n8(t, e, n) {
  const r = t.state.doc.resolve(e),
    s = r.node(-1),
    i = Ie.get(s),
    o = r.start(-1),
    l = i.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1,
    a = t.state.tr;
  for (let c = 0; c < i.height; c++) {
    const u = c * i.width + l;
    if (c && i.map[u] == i.map[u - i.width]) continue;
    const d = i.map[u],
      h = s.nodeAt(d).attrs,
      p = h.colspan == 1 ? 0 : l - i.colCount(d);
    if (h.colwidth && h.colwidth[p] == n) continue;
    const y = h.colwidth ? h.colwidth.slice() : r8(h.colspan);
    (y[p] = n), a.setNodeMarkup(o + d, null, { ...h, colwidth: y });
  }
  a.docChanged && t.dispatch(a);
}
function Fd(t, e, n, r) {
  const s = t.state.doc.resolve(e),
    i = s.node(-1),
    o = s.start(-1),
    l = Ie.get(i).colCount(s.pos - o) + s.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(s.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; ) a = a.parentNode;
  a && ha(i, a.firstChild, a, r, l, n);
}
function r8(t) {
  return Array(t).fill(0);
}
function s8(t, e) {
  var n;
  const r = [],
    s = t.doc.resolve(e),
    i = s.node(-1);
  if (!i) return Oe.empty;
  const o = Ie.get(i),
    l = s.start(-1),
    a = o.colCount(s.pos - l) + s.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < o.height; c++) {
    const u = a + c * o.width;
    if (
      (a == o.width - 1 || o.map[u] != o.map[u + 1]) &&
      (c == 0 || o.map[u] != o.map[u - o.width])
    ) {
      const d = o.map[u],
        h = l + d + i.nodeAt(d).nodeSize - 1,
        p = document.createElement("div");
      (p.className = "column-resize-handle"),
        (n = wt.getState(t)) != null &&
          n.dragging &&
          r.push(
            ft.node(l + d, l + d + i.nodeAt(d).nodeSize, {
              class: "column-resize-dragging",
            }),
          ),
        r.push(ft.widget(h, p));
    }
  }
  return Oe.create(t.doc, r);
}
function i8({ allowTableNodeSelection: t = !1 } = {}) {
  return new Fe({
    key: Sn,
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(Sn);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: s, pos: i } = e.mapping.mapResult(n);
        return s ? null : i;
      },
    },
    props: {
      decorations: bv,
      handleDOMEvents: { mousedown: qv },
      createSelectionBetween(e) {
        return Sn.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Uv,
      handleKeyDown: Wv,
      handlePaste: Kv,
    },
    appendTransaction(e, n, r) {
      return xv(r, am(r, n), t);
    },
  });
}
function pa(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function Vd(t, e, n, r, s, i) {
  var o;
  let l = 0,
    a = !0,
    c = e.firstChild;
  const u = t.firstChild;
  if (u !== null)
    for (let d = 0, h = 0; d < u.childCount; d += 1) {
      const { colspan: p, colwidth: y } = u.child(d).attrs;
      for (let b = 0; b < p; b += 1, h += 1) {
        const x = s === h ? i : y && y[b],
          v = x ? `${x}px` : "";
        if (((l += x || r), x || (a = !1), c)) {
          if (c.style.width !== v) {
            const [E, R] = pa(r, x);
            c.style.setProperty(E, R);
          }
          c = c.nextSibling;
        } else {
          const E = document.createElement("col"),
            [R, f] = pa(r, x);
          E.style.setProperty(R, f), e.appendChild(E);
        }
      }
    }
  for (; c; ) {
    const d = c.nextSibling;
    (o = c.parentNode) === null || o === void 0 || o.removeChild(c), (c = d);
  }
  a
    ? ((n.style.width = `${l}px`), (n.style.minWidth = ""))
    : ((n.style.width = ""), (n.style.minWidth = `${l}px`));
}
class o8 {
  constructor(e, n) {
    (this.node = e),
      (this.cellMinWidth = n),
      (this.dom = document.createElement("div")),
      (this.dom.className = "tableWrapper"),
      (this.table = this.dom.appendChild(document.createElement("table"))),
      (this.colgroup = this.table.appendChild(
        document.createElement("colgroup"),
      )),
      Vd(e, this.colgroup, this.table, n),
      (this.contentDOM = this.table.appendChild(
        document.createElement("tbody"),
      ));
  }
  update(e) {
    return e.type !== this.node.type
      ? !1
      : ((this.node = e),
        Vd(e, this.colgroup, this.table, this.cellMinWidth),
        !0);
  }
  ignoreMutation(e) {
    return (
      e.type === "attributes" &&
      (e.target === this.table || this.colgroup.contains(e.target))
    );
  }
}
function l8(t, e, n, r) {
  let s = 0,
    i = !0;
  const o = [],
    l = t.firstChild;
  if (!l) return {};
  for (let d = 0, h = 0; d < l.childCount; d += 1) {
    const { colspan: p, colwidth: y } = l.child(d).attrs;
    for (let b = 0; b < p; b += 1, h += 1) {
      const x = n === h ? r : y && y[b];
      (s += x || e), x || (i = !1);
      const [v, E] = pa(e, x);
      o.push(["col", { style: `${v}: ${E}` }]);
    }
  }
  const a = i ? `${s}px` : "",
    c = i ? "" : `${s}px`;
  return { colgroup: ["colgroup", {}, ...o], tableWidth: a, tableMinWidth: c };
}
function Wd(t, e) {
  return t.createAndFill();
}
function a8(t) {
  if (t.cached.tableNodeTypes) return t.cached.tableNodeTypes;
  const e = {};
  return (
    Object.keys(t.nodes).forEach((n) => {
      const r = t.nodes[n];
      r.spec.tableRole && (e[r.spec.tableRole] = r);
    }),
    (t.cached.tableNodeTypes = e),
    e
  );
}
function c8(t, e, n, r, s) {
  const i = a8(t),
    o = [],
    l = [];
  for (let c = 0; c < n; c += 1) {
    const u = Wd(i.cell);
    if ((u && l.push(u), r)) {
      const d = Wd(i.header_cell);
      d && o.push(d);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(i.row.createChecked(null, r && c === 0 ? o : l));
  return i.table.createChecked(null, a);
}
function u8(t) {
  return t instanceof Ee;
}
const Zs = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!u8(e)) return !1;
  let n = 0;
  const r = Xp(e.ranges[0].$from, (i) => i.type.name === "table");
  return (
    r?.node.descendants((i) => {
      if (i.type.name === "table") return !1;
      ["tableCell", "tableHeader"].includes(i.type.name) && (n += 1);
    }),
    n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1
  );
};
ze.create({
  name: "table",
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      View: o8,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    const {
      colgroup: n,
      tableWidth: r,
      tableMinWidth: s,
    } = l8(t, this.options.cellMinWidth);
    return [
      "table",
      xe(this.options.HTMLAttributes, e, {
        style: r ? `width: ${r}` : `min-width: ${s}`,
      }),
      n,
      ["tbody", 0],
    ];
  },
  addCommands() {
    return {
      insertTable:
        ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) =>
        ({ tr: r, dispatch: s, editor: i }) => {
          const o = c8(i.schema, t, e, n);
          if (s) {
            const l = r.selection.from + 1;
            r.replaceSelectionWith(o)
              .scrollIntoView()
              .setSelection(re.near(r.doc.resolve(l)));
          }
          return !0;
        },
      addColumnBefore:
        () =>
        ({ state: t, dispatch: e }) =>
          Sv(t, e),
      addColumnAfter:
        () =>
        ({ state: t, dispatch: e }) =>
          Cv(t, e),
      deleteColumn:
        () =>
        ({ state: t, dispatch: e }) =>
          Av(t, e),
      addRowBefore:
        () =>
        ({ state: t, dispatch: e }) =>
          Tv(t, e),
      addRowAfter:
        () =>
        ({ state: t, dispatch: e }) =>
          Rv(t, e),
      deleteRow:
        () =>
        ({ state: t, dispatch: e }) =>
          jv(t, e),
      deleteTable:
        () =>
        ({ state: t, dispatch: e }) =>
          Bv(t, e),
      mergeCells:
        () =>
        ({ state: t, dispatch: e }) =>
          jd(t, e),
      splitCell:
        () =>
        ({ state: t, dispatch: e }) =>
          Pd(t, e),
      toggleHeaderColumn:
        () =>
        ({ state: t, dispatch: e }) =>
          Rs("column")(t, e),
      toggleHeaderRow:
        () =>
        ({ state: t, dispatch: e }) =>
          Rs("row")(t, e),
      toggleHeaderCell:
        () =>
        ({ state: t, dispatch: e }) =>
          zv(t, e),
      mergeOrSplit:
        () =>
        ({ state: t, dispatch: e }) =>
          jd(t, e) ? !0 : Pd(t, e),
      setCellAttribute:
        (t, e) =>
        ({ state: n, dispatch: r }) =>
          Lv(t, e)(n, r),
      goToNextCell:
        () =>
        ({ state: t, dispatch: e }) =>
          Ld(1)(t, e),
      goToPreviousCell:
        () =>
        ({ state: t, dispatch: e }) =>
          Ld(-1)(t, e),
      fixTables:
        () =>
        ({ state: t, dispatch: e }) => (e && am(t), !0),
      setCellSelection:
        (t) =>
        ({ tr: e, dispatch: n }) => {
          if (n) {
            const r = Ee.create(e.doc, t.anchorCell, t.headCell);
            e.setSelection(r);
          }
          return !0;
        },
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () =>
        this.editor.commands.goToNextCell()
          ? !0
          : this.editor.can().addRowAfter()
            ? this.editor.chain().addRowAfter().goToNextCell().run()
            : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: Zs,
      "Mod-Backspace": Zs,
      Delete: Zs,
      "Mod-Delete": Zs,
    };
  },
  addProseMirrorPlugins() {
    return [
      ...(this.options.resizable && this.editor.isEditable
        ? [
            Gv({
              handleWidth: this.options.handleWidth,
              cellMinWidth: this.options.cellMinWidth,
              defaultCellMinWidth: this.options.cellMinWidth,
              View: this.options.View,
              lastColumnResizable: this.options.lastColumnResizable,
            }),
          ]
        : []),
      i8({ allowTableNodeSelection: this.options.allowTableNodeSelection }),
    ];
  },
  extendNodeSchema(t) {
    const e = { name: t.name, options: t.options, storage: t.storage };
    return { tableRole: Be(Qe(t, "tableRole", e)) };
  },
});
ze.create({
  name: "tableCell",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: { default: 1 },
      rowspan: { default: 1 },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        },
      },
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "td" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["td", xe(this.options.HTMLAttributes, t), 0];
  },
});
ze.create({
  name: "tableHeader",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: { default: 1 },
      rowspan: { default: 1 },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        },
      },
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "th" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["th", xe(this.options.HTMLAttributes, t), 0];
  },
});
ze.create({
  name: "tableRow",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [{ tag: "tr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["tr", xe(this.options.HTMLAttributes, t), 0];
  },
});
const Ud = (t) =>
    new Promise((e) => {
      let n = new FileReader();
      (n.onloadend = () => {
        e(n.result);
      }),
        n.readAsDataURL(t);
    }),
  d8 = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;
ze.create({
  name: "image",
  addOptions() {
    return { inline: !1, HTMLAttributes: {} };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: { default: null },
      alt: { default: null },
      title: { default: null },
    };
  },
  parseHTML() {
    return [{ tag: "img[src]" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", xe(this.options.HTMLAttributes, t)];
  },
  addCommands() {
    return {
      setImage:
        (t) =>
        ({ commands: e }) =>
          e.insertContent({ type: this.name, attrs: t }),
    };
  },
  addInputRules() {
    return [
      Zp({
        find: d8,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        },
      }),
    ];
  },
  addProseMirrorPlugins() {
    return [f8()];
  },
});
const f8 = () =>
  new Fe({
    props: {
      handlePaste(t, e, n) {
        const r = Array.from(e.clipboardData?.items || []),
          { schema: s } = t.state;
        return (
          r.forEach((i) => {
            const o = i.getAsFile();
            o &&
              i.type.indexOf("image") === 0 &&
              (e.preventDefault(),
              Ud(o).then((l) => {
                const a = s.nodes.image.create({ src: l }),
                  c = t.state.tr.replaceSelectionWith(a);
                t.dispatch(c);
              }));
          }),
          !1
        );
      },
      handleDOMEvents: {
        drop: (t, e) => {
          if (
            !(
              e.dataTransfer &&
              e.dataTransfer.files &&
              e.dataTransfer.files.length
            )
          )
            return !1;
          const r = Array.from(e.dataTransfer?.files ?? []).filter((o) =>
            /image/i.test(o.type),
          );
          if (r.length === 0) return !1;
          e.preventDefault();
          const { schema: s } = t.state,
            i = t.posAtCoords({ left: e.clientX, top: e.clientY });
          return i
            ? (r.forEach(async (o) => {
                Ud(o).then((l) => {
                  const a = s.nodes.image.create({ src: l }),
                    c = t.state.tr.insert(i.pos, a);
                  t.dispatch(c);
                });
              }),
              !0)
            : !1;
        },
      },
    },
  });
ze.create({
  name: "video",
  group: "block",
  selectable: !0,
  draggable: !0,
  atom: !0,
  addAttributes() {
    return { src: { default: null } };
  },
  parseHTML() {
    return [{ tag: "video" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["video", xe(t)];
  },
  addNodeView() {
    return ({ editor: t, node: e }) => {
      const n = document.createElement("div");
      n.className =
        "relative aspect-w-16 aspect-h-9" +
        (t.isEditable ? " cursor-pointer" : "");
      const r = document.createElement("video");
      if (
        (t.isEditable && (r.className = "pointer-events-none"),
        (r.src = e.attrs.src),
        !t.isEditable)
      )
        r.setAttribute("controls", "");
      else {
        let s = document.createElement("div");
        (s.className =
          "absolute top-0 right-0 text-xs m-2 bg-gray-800 text-white px-2 py-1 rounded-md"),
          (s.innerHTML = "Video"),
          n.append(s);
      }
      return n.append(r), { dom: n };
    };
  },
});
const h8 =
    "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2",
  p8 =
    "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2",
  Ir = (t, e) => {
    for (const n in e) t[n] = e[n];
    return t;
  },
  ma = "numeric",
  ga = "ascii",
  ya = "alpha",
  as = "asciinumeric",
  Gr = "alphanumeric",
  ba = "domain",
  hm = "emoji",
  m8 = "scheme",
  g8 = "slashscheme",
  wl = "whitespace";
function y8(t, e) {
  return t in e || (e[t] = []), e[t];
}
function Jn(t, e, n) {
  e[ma] && ((e[as] = !0), (e[Gr] = !0)),
    e[ga] && ((e[as] = !0), (e[ya] = !0)),
    e[as] && (e[Gr] = !0),
    e[ya] && (e[Gr] = !0),
    e[Gr] && (e[ba] = !0),
    e[hm] && (e[ba] = !0);
  for (const r in e) {
    const s = y8(r, n);
    s.indexOf(t) < 0 && s.push(t);
  }
}
function b8(t, e) {
  const n = {};
  for (const r in e) e[r].indexOf(t) >= 0 && (n[r] = !0);
  return n;
}
function pt(t = null) {
  (this.j = {}), (this.jr = []), (this.jd = null), (this.t = t);
}
pt.groups = {};
pt.prototype = {
  accepts() {
    return !!this.t;
  },
  go(t) {
    const e = this,
      n = e.j[t];
    if (n) return n;
    for (let r = 0; r < e.jr.length; r++) {
      const s = e.jr[r][0],
        i = e.jr[r][1];
      if (i && s.test(t)) return i;
    }
    return e.jd;
  },
  has(t, e = !1) {
    return e ? t in this.j : !!this.go(t);
  },
  ta(t, e, n, r) {
    for (let s = 0; s < t.length; s++) this.tt(t[s], e, n, r);
  },
  tr(t, e, n, r) {
    r = r || pt.groups;
    let s;
    return (
      e && e.j ? (s = e) : ((s = new pt(e)), n && r && Jn(e, n, r)),
      this.jr.push([t, s]),
      s
    );
  },
  ts(t, e, n, r) {
    let s = this;
    const i = t.length;
    if (!i) return s;
    for (let o = 0; o < i - 1; o++) s = s.tt(t[o]);
    return s.tt(t[i - 1], e, n, r);
  },
  tt(t, e, n, r) {
    r = r || pt.groups;
    const s = this;
    if (e && e.j) return (s.j[t] = e), e;
    const i = e;
    let o,
      l = s.go(t);
    if (
      (l
        ? ((o = new pt()),
          Ir(o.j, l.j),
          o.jr.push.apply(o.jr, l.jr),
          (o.jd = l.jd),
          (o.t = l.t))
        : (o = new pt()),
      i)
    ) {
      if (r)
        if (o.t && typeof o.t == "string") {
          const a = Ir(b8(o.t, r), n);
          Jn(i, a, r);
        } else n && Jn(i, n, r);
      o.t = i;
    }
    return (s.j[t] = o), o;
  },
};
const ue = (t, e, n, r, s) => t.ta(e, n, r, s),
  je = (t, e, n, r, s) => t.tr(e, n, r, s),
  Kd = (t, e, n, r, s) => t.ts(e, n, r, s),
  V = (t, e, n, r, s) => t.tt(e, n, r, s),
  ln = "WORD",
  wa = "UWORD",
  pm = "ASCIINUMERICAL",
  mm = "ALPHANUMERICAL",
  Os = "LOCALHOST",
  va = "TLD",
  xa = "UTLD",
  bi = "SCHEME",
  mr = "SLASH_SCHEME",
  Ec = "NUM",
  ka = "WS",
  Ac = "NL",
  cs = "OPENBRACE",
  us = "CLOSEBRACE",
  Ki = "OPENBRACKET",
  qi = "CLOSEBRACKET",
  Ji = "OPENPAREN",
  Gi = "CLOSEPAREN",
  Qi = "OPENANGLEBRACKET",
  Yi = "CLOSEANGLEBRACKET",
  Xi = "FULLWIDTHLEFTPAREN",
  Zi = "FULLWIDTHRIGHTPAREN",
  eo = "LEFTCORNERBRACKET",
  to = "RIGHTCORNERBRACKET",
  no = "LEFTWHITECORNERBRACKET",
  ro = "RIGHTWHITECORNERBRACKET",
  so = "FULLWIDTHLESSTHAN",
  io = "FULLWIDTHGREATERTHAN",
  oo = "AMPERSAND",
  Mc = "APOSTROPHE",
  lo = "ASTERISK",
  kn = "AT",
  ao = "BACKSLASH",
  co = "BACKTICK",
  uo = "CARET",
  Cn = "COLON",
  Tc = "COMMA",
  fo = "DOLLAR",
  Vt = "DOT",
  ho = "EQUALS",
  Rc = "EXCLAMATION",
  St = "HYPHEN",
  ds = "PERCENT",
  po = "PIPE",
  mo = "PLUS",
  go = "POUND",
  fs = "QUERY",
  Oc = "QUOTE",
  gm = "FULLWIDTHMIDDLEDOT",
  jc = "SEMI",
  Wt = "SLASH",
  hs = "TILDE",
  yo = "UNDERSCORE",
  ym = "EMOJI",
  bo = "SYM";
var bm = Object.freeze({
  __proto__: null,
  WORD: ln,
  UWORD: wa,
  ASCIINUMERICAL: pm,
  ALPHANUMERICAL: mm,
  LOCALHOST: Os,
  TLD: va,
  UTLD: xa,
  SCHEME: bi,
  SLASH_SCHEME: mr,
  NUM: Ec,
  WS: ka,
  NL: Ac,
  OPENBRACE: cs,
  CLOSEBRACE: us,
  OPENBRACKET: Ki,
  CLOSEBRACKET: qi,
  OPENPAREN: Ji,
  CLOSEPAREN: Gi,
  OPENANGLEBRACKET: Qi,
  CLOSEANGLEBRACKET: Yi,
  FULLWIDTHLEFTPAREN: Xi,
  FULLWIDTHRIGHTPAREN: Zi,
  LEFTCORNERBRACKET: eo,
  RIGHTCORNERBRACKET: to,
  LEFTWHITECORNERBRACKET: no,
  RIGHTWHITECORNERBRACKET: ro,
  FULLWIDTHLESSTHAN: so,
  FULLWIDTHGREATERTHAN: io,
  AMPERSAND: oo,
  APOSTROPHE: Mc,
  ASTERISK: lo,
  AT: kn,
  BACKSLASH: ao,
  BACKTICK: co,
  CARET: uo,
  COLON: Cn,
  COMMA: Tc,
  DOLLAR: fo,
  DOT: Vt,
  EQUALS: ho,
  EXCLAMATION: Rc,
  HYPHEN: St,
  PERCENT: ds,
  PIPE: po,
  PLUS: mo,
  POUND: go,
  QUERY: fs,
  QUOTE: Oc,
  FULLWIDTHMIDDLEDOT: gm,
  SEMI: jc,
  SLASH: Wt,
  TILDE: hs,
  UNDERSCORE: yo,
  EMOJI: ym,
  SYM: bo,
});
const rn = /[a-z]/,
  Wr = /\p{L}/u,
  vl = /\p{Emoji}/u,
  sn = /\d/,
  xl = /\s/,
  qd = "\r",
  kl = `
`,
  w8 = "️",
  v8 = "‍",
  _l = "￼";
let ei = null,
  ti = null;
function x8(t = []) {
  const e = {};
  pt.groups = e;
  const n = new pt();
  ei == null && (ei = Jd(h8)),
    ti == null && (ti = Jd(p8)),
    V(n, "'", Mc),
    V(n, "{", cs),
    V(n, "}", us),
    V(n, "[", Ki),
    V(n, "]", qi),
    V(n, "(", Ji),
    V(n, ")", Gi),
    V(n, "<", Qi),
    V(n, ">", Yi),
    V(n, "（", Xi),
    V(n, "）", Zi),
    V(n, "「", eo),
    V(n, "」", to),
    V(n, "『", no),
    V(n, "』", ro),
    V(n, "＜", so),
    V(n, "＞", io),
    V(n, "&", oo),
    V(n, "*", lo),
    V(n, "@", kn),
    V(n, "`", co),
    V(n, "^", uo),
    V(n, ":", Cn),
    V(n, ",", Tc),
    V(n, "$", fo),
    V(n, ".", Vt),
    V(n, "=", ho),
    V(n, "!", Rc),
    V(n, "-", St),
    V(n, "%", ds),
    V(n, "|", po),
    V(n, "+", mo),
    V(n, "#", go),
    V(n, "?", fs),
    V(n, '"', Oc),
    V(n, "/", Wt),
    V(n, ";", jc),
    V(n, "~", hs),
    V(n, "_", yo),
    V(n, "\\", ao),
    V(n, "・", gm);
  const r = je(n, sn, Ec, { [ma]: !0 });
  je(r, sn, r);
  const s = je(r, rn, pm, { [as]: !0 }),
    i = je(r, Wr, mm, { [Gr]: !0 }),
    o = je(n, rn, ln, { [ga]: !0 });
  je(o, sn, s), je(o, rn, o), je(s, sn, s), je(s, rn, s);
  const l = je(n, Wr, wa, { [ya]: !0 });
  je(l, rn), je(l, sn, i), je(l, Wr, l), je(i, sn, i), je(i, rn), je(i, Wr, i);
  const a = V(n, kl, Ac, { [wl]: !0 }),
    c = V(n, qd, ka, { [wl]: !0 }),
    u = je(n, xl, ka, { [wl]: !0 });
  V(n, _l, u),
    V(c, kl, a),
    V(c, _l, u),
    je(c, xl, u),
    V(u, qd),
    V(u, kl),
    je(u, xl, u),
    V(u, _l, u);
  const d = je(n, vl, ym, { [hm]: !0 });
  V(d, "#"), je(d, vl, d), V(d, w8, d);
  const h = V(d, v8);
  V(h, "#"), je(h, vl, d);
  const p = [
      [rn, o],
      [sn, s],
    ],
    y = [
      [rn, null],
      [Wr, l],
      [sn, i],
    ];
  for (let b = 0; b < ei.length; b++) mn(n, ei[b], va, ln, p);
  for (let b = 0; b < ti.length; b++) mn(n, ti[b], xa, wa, y);
  Jn(va, { tld: !0, ascii: !0 }, e),
    Jn(xa, { utld: !0, alpha: !0 }, e),
    mn(n, "file", bi, ln, p),
    mn(n, "mailto", bi, ln, p),
    mn(n, "http", mr, ln, p),
    mn(n, "https", mr, ln, p),
    mn(n, "ftp", mr, ln, p),
    mn(n, "ftps", mr, ln, p),
    Jn(bi, { scheme: !0, ascii: !0 }, e),
    Jn(mr, { slashscheme: !0, ascii: !0 }, e),
    (t = t.sort((b, x) => (b[0] > x[0] ? 1 : -1)));
  for (let b = 0; b < t.length; b++) {
    const x = t[b][0],
      E = t[b][1] ? { [m8]: !0 } : { [g8]: !0 };
    x.indexOf("-") >= 0
      ? (E[ba] = !0)
      : rn.test(x)
        ? sn.test(x)
          ? (E[as] = !0)
          : (E[ga] = !0)
        : (E[ma] = !0),
      Kd(n, x, x, E);
  }
  return (
    Kd(n, "localhost", Os, { ascii: !0 }),
    (n.jd = new pt(bo)),
    { start: n, tokens: Ir({ groups: e }, bm) }
  );
}
function wm(t, e) {
  const n = k8(e.replace(/[A-Z]/g, (l) => l.toLowerCase())),
    r = n.length,
    s = [];
  let i = 0,
    o = 0;
  for (; o < r; ) {
    let l = t,
      a = null,
      c = 0,
      u = null,
      d = -1,
      h = -1;
    for (; o < r && (a = l.go(n[o])); )
      (l = a),
        l.accepts()
          ? ((d = 0), (h = 0), (u = l))
          : d >= 0 && ((d += n[o].length), h++),
        (c += n[o].length),
        (i += n[o].length),
        o++;
    (i -= d),
      (o -= h),
      (c -= d),
      s.push({ t: u.t, v: e.slice(i - c, i), s: i - c, e: i });
  }
  return s;
}
function k8(t) {
  const e = [],
    n = t.length;
  let r = 0;
  for (; r < n; ) {
    let s = t.charCodeAt(r),
      i,
      o =
        s < 55296 ||
        s > 56319 ||
        r + 1 === n ||
        (i = t.charCodeAt(r + 1)) < 56320 ||
        i > 57343
          ? t[r]
          : t.slice(r, r + 2);
    e.push(o), (r += o.length);
  }
  return e;
}
function mn(t, e, n, r, s) {
  let i;
  const o = e.length;
  for (let l = 0; l < o - 1; l++) {
    const a = e[l];
    t.j[a] ? (i = t.j[a]) : ((i = new pt(r)), (i.jr = s.slice()), (t.j[a] = i)),
      (t = i);
  }
  return (i = new pt(n)), (i.jr = s.slice()), (t.j[e[o - 1]] = i), i;
}
function Jd(t) {
  const e = [],
    n = [];
  let r = 0,
    s = "0123456789";
  for (; r < t.length; ) {
    let i = 0;
    for (; s.indexOf(t[r + i]) >= 0; ) i++;
    if (i > 0) {
      e.push(n.join(""));
      for (let o = parseInt(t.substring(r, r + i), 10); o > 0; o--) n.pop();
      r += i;
    } else n.push(t[r]), r++;
  }
  return e;
}
const js = {
  defaultProtocol: "http",
  events: null,
  format: Gd,
  formatHref: Gd,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null,
};
function Pc(t, e = null) {
  let n = Ir({}, js);
  t && (n = Ir(n, t instanceof Pc ? t.o : t));
  const r = n.ignoreTags,
    s = [];
  for (let i = 0; i < r.length; i++) s.push(r[i].toUpperCase());
  (this.o = n), e && (this.defaultRender = e), (this.ignoreTags = s);
}
Pc.prototype = {
  o: js,
  ignoreTags: [],
  defaultRender(t) {
    return t;
  },
  check(t) {
    return this.get("validate", t.toString(), t);
  },
  get(t, e, n) {
    const r = e != null;
    let s = this.o[t];
    return (
      s &&
      (typeof s == "object"
        ? ((s = n.t in s ? s[n.t] : js[t]),
          typeof s == "function" && r && (s = s(e, n)))
        : typeof s == "function" && r && (s = s(e, n.t, n)),
      s)
    );
  },
  getObj(t, e, n) {
    let r = this.o[t];
    return typeof r == "function" && e != null && (r = r(e, n.t, n)), r;
  },
  render(t) {
    const e = t.render(this);
    return (this.get("render", null, t) || this.defaultRender)(e, t.t, t);
  },
};
function Gd(t) {
  return t;
}
function vm(t, e) {
  (this.t = "token"), (this.v = t), (this.tk = e);
}
vm.prototype = {
  isLink: !1,
  toString() {
    return this.v;
  },
  toHref(t) {
    return this.toString();
  },
  toFormattedString(t) {
    const e = this.toString(),
      n = t.get("truncate", e, this),
      r = t.get("format", e, this);
    return n && r.length > n ? r.substring(0, n) + "…" : r;
  },
  toFormattedHref(t) {
    return t.get("formatHref", this.toHref(t.get("defaultProtocol")), this);
  },
  startIndex() {
    return this.tk[0].s;
  },
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  toObject(t = js.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(t),
      start: this.startIndex(),
      end: this.endIndex(),
    };
  },
  toFormattedObject(t) {
    return {
      type: this.t,
      value: this.toFormattedString(t),
      isLink: this.isLink,
      href: this.toFormattedHref(t),
      start: this.startIndex(),
      end: this.endIndex(),
    };
  },
  validate(t) {
    return t.get("validate", this.toString(), this);
  },
  render(t) {
    const e = this,
      n = this.toHref(t.get("defaultProtocol")),
      r = t.get("formatHref", n, this),
      s = t.get("tagName", n, e),
      i = this.toFormattedString(t),
      o = {},
      l = t.get("className", n, e),
      a = t.get("target", n, e),
      c = t.get("rel", n, e),
      u = t.getObj("attributes", n, e),
      d = t.getObj("events", n, e);
    return (
      (o.href = r),
      l && (o.class = l),
      a && (o.target = a),
      c && (o.rel = c),
      u && Ir(o, u),
      { tagName: s, attributes: o, content: i, eventListeners: d }
    );
  },
};
function Ho(t, e) {
  class n extends vm {
    constructor(s, i) {
      super(s, i), (this.t = t);
    }
  }
  for (const r in e) n.prototype[r] = e[r];
  return (n.t = t), n;
}
const Qd = Ho("email", {
    isLink: !0,
    toHref() {
      return "mailto:" + this.toString();
    },
  }),
  Yd = Ho("text"),
  _8 = Ho("nl"),
  ni = Ho("url", {
    isLink: !0,
    toHref(t = js.defaultProtocol) {
      return this.hasProtocol() ? this.v : `${t}://${this.v}`;
    },
    hasProtocol() {
      const t = this.tk;
      return t.length >= 2 && t[0].t !== Os && t[1].t === Cn;
    },
  }),
  _t = (t) => new pt(t);
function S8({ groups: t }) {
  const e = t.domain.concat([
      oo,
      lo,
      kn,
      ao,
      co,
      uo,
      fo,
      ho,
      St,
      Ec,
      ds,
      po,
      mo,
      go,
      Wt,
      bo,
      hs,
      yo,
    ]),
    n = [
      Cn,
      Tc,
      Vt,
      Rc,
      ds,
      fs,
      Oc,
      jc,
      Qi,
      Yi,
      cs,
      us,
      qi,
      Ki,
      Ji,
      Gi,
      Xi,
      Zi,
      eo,
      to,
      no,
      ro,
      so,
      io,
    ],
    r = [
      oo,
      Mc,
      lo,
      ao,
      co,
      uo,
      fo,
      ho,
      St,
      cs,
      us,
      ds,
      po,
      mo,
      go,
      fs,
      Wt,
      bo,
      hs,
      yo,
    ],
    s = _t(),
    i = V(s, hs);
  ue(i, r, i), ue(i, t.domain, i);
  const o = _t(),
    l = _t(),
    a = _t();
  ue(s, t.domain, o),
    ue(s, t.scheme, l),
    ue(s, t.slashscheme, a),
    ue(o, r, i),
    ue(o, t.domain, o);
  const c = V(o, kn);
  V(i, kn, c), V(l, kn, c), V(a, kn, c);
  const u = V(i, Vt);
  ue(u, r, i), ue(u, t.domain, i);
  const d = _t();
  ue(c, t.domain, d), ue(d, t.domain, d);
  const h = V(d, Vt);
  ue(h, t.domain, d);
  const p = _t(Qd);
  ue(h, t.tld, p), ue(h, t.utld, p), V(c, Os, p);
  const y = V(d, St);
  V(y, St, y), ue(y, t.domain, d), ue(p, t.domain, d), V(p, Vt, h), V(p, St, y);
  const b = V(p, Cn);
  ue(b, t.numeric, Qd);
  const x = V(o, St),
    v = V(o, Vt);
  V(x, St, x), ue(x, t.domain, o), ue(v, r, i), ue(v, t.domain, o);
  const E = _t(ni);
  ue(v, t.tld, E),
    ue(v, t.utld, E),
    ue(E, t.domain, o),
    ue(E, r, i),
    V(E, Vt, v),
    V(E, St, x),
    V(E, kn, c);
  const R = V(E, Cn),
    f = _t(ni);
  ue(R, t.numeric, f);
  const g = _t(ni),
    m = _t();
  ue(g, e, g), ue(g, n, m), ue(m, e, g), ue(m, n, m), V(E, Wt, g), V(f, Wt, g);
  const w = V(l, Cn),
    S = V(a, Cn),
    M = V(S, Wt),
    _ = V(M, Wt);
  ue(l, t.domain, o),
    V(l, Vt, v),
    V(l, St, x),
    ue(a, t.domain, o),
    V(a, Vt, v),
    V(a, St, x),
    ue(w, t.domain, g),
    V(w, Wt, g),
    V(w, fs, g),
    ue(_, t.domain, g),
    ue(_, e, g),
    V(_, Wt, g);
  const T = [
    [cs, us],
    [Ki, qi],
    [Ji, Gi],
    [Qi, Yi],
    [Xi, Zi],
    [eo, to],
    [no, ro],
    [so, io],
  ];
  for (let F = 0; F < T.length; F++) {
    const [N, I] = T[F],
      z = V(g, N);
    V(m, N, z), V(z, I, g);
    const k = _t(ni);
    ue(z, e, k);
    const j = _t();
    ue(z, n),
      ue(k, e, k),
      ue(k, n, j),
      ue(j, e, k),
      ue(j, n, j),
      V(k, I, g),
      V(j, I, g);
  }
  return V(s, Os, E), V(s, Ac, _8), { start: s, tokens: bm };
}
function C8(t, e, n) {
  let r = n.length,
    s = 0,
    i = [],
    o = [];
  for (; s < r; ) {
    let l = t,
      a = null,
      c = null,
      u = 0,
      d = null,
      h = -1;
    for (; s < r && !(a = l.go(n[s].t)); ) o.push(n[s++]);
    for (; s < r && (c = a || l.go(n[s].t)); )
      (a = null),
        (l = c),
        l.accepts() ? ((h = 0), (d = l)) : h >= 0 && h++,
        s++,
        u++;
    if (h < 0) (s -= u), s < r && (o.push(n[s]), s++);
    else {
      o.length > 0 && (i.push(Sl(Yd, e, o)), (o = [])), (s -= h), (u -= h);
      const p = d.t,
        y = n.slice(s - u, s);
      i.push(Sl(p, e, y));
    }
  }
  return o.length > 0 && i.push(Sl(Yd, e, o)), i;
}
function Sl(t, e, n) {
  const r = n[0].s,
    s = n[n.length - 1].e,
    i = e.slice(r, s);
  return new t(i, n);
}
const E8 = (typeof console < "u" && console && console.warn) || (() => {}),
  A8 =
    "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.",
  Me = {
    scanner: null,
    parser: null,
    tokenQueue: [],
    pluginQueue: [],
    customSchemes: [],
    initialized: !1,
  };
function M8() {
  return (
    (pt.groups = {}),
    (Me.scanner = null),
    (Me.parser = null),
    (Me.tokenQueue = []),
    (Me.pluginQueue = []),
    (Me.customSchemes = []),
    (Me.initialized = !1),
    Me
  );
}
function Xd(t, e = !1) {
  if (
    (Me.initialized &&
      E8(
        `linkifyjs: already initialized - will not register custom scheme "${t}" ${A8}`,
      ),
    !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t))
  )
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  Me.customSchemes.push([t, e]);
}
function T8() {
  Me.scanner = x8(Me.customSchemes);
  for (let t = 0; t < Me.tokenQueue.length; t++)
    Me.tokenQueue[t][1]({ scanner: Me.scanner });
  Me.parser = S8(Me.scanner.tokens);
  for (let t = 0; t < Me.pluginQueue.length; t++)
    Me.pluginQueue[t][1]({ scanner: Me.scanner, parser: Me.parser });
  return (Me.initialized = !0), Me;
}
function Ic(t) {
  return (
    Me.initialized || T8(), C8(Me.parser.start, t, wm(Me.scanner.start, t))
  );
}
Ic.scan = wm;
function xm(t, e = null, n = null) {
  if (e && typeof e == "object") {
    if (n) throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    (n = e), (e = null);
  }
  const r = new Pc(n),
    s = Ic(t),
    i = [];
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    l.isLink &&
      (!e || l.t === e) &&
      r.check(l) &&
      i.push(l.toFormattedObject(r));
  }
  return i;
}
function R8(t) {
  return t.length === 1
    ? t[0].isLink
    : t.length === 3 && t[1].isLink
      ? ["()", "[]"].includes(t[0].value + t[2].value)
      : !1;
}
function O8(t) {
  return new Fe({
    key: new Ve("autolink"),
    appendTransaction: (e, n, r) => {
      const s = e.some((c) => c.docChanged) && !n.doc.eq(r.doc),
        i = e.some((c) => c.getMeta("preventAutolink"));
      if (!s || i) return;
      const { tr: o } = r,
        l = P3(n.doc, [...e]);
      if (
        (H3(l).forEach(({ newRange: c }) => {
          const u = L3(r.doc, c, (p) => p.isTextblock);
          let d, h;
          if (
            (u.length > 1
              ? ((d = u[0]),
                (h = r.doc.textBetween(
                  d.pos,
                  d.pos + d.node.nodeSize,
                  void 0,
                  " ",
                )))
              : u.length &&
                r.doc.textBetween(c.from, c.to, " ", " ").endsWith(" ") &&
                ((d = u[0]), (h = r.doc.textBetween(d.pos, c.to, void 0, " "))),
            d && h)
          ) {
            const p = h.split(" ").filter((v) => v !== "");
            if (p.length <= 0) return !1;
            const y = p[p.length - 1],
              b = d.pos + h.lastIndexOf(y);
            if (!y) return !1;
            const x = Ic(y).map((v) => v.toObject(t.defaultProtocol));
            if (!R8(x)) return !1;
            x.filter((v) => v.isLink)
              .map((v) => ({ ...v, from: b + v.start + 1, to: b + v.end + 1 }))
              .filter((v) =>
                r.schema.marks.code
                  ? !r.doc.rangeHasMark(v.from, v.to, r.schema.marks.code)
                  : !0,
              )
              .filter((v) => t.validate(v.value))
              .filter((v) => t.shouldAutoLink(v.value))
              .forEach((v) => {
                kc(v.from, v.to, r.doc).some((E) => E.mark.type === t.type) ||
                  o.addMark(v.from, v.to, t.type.create({ href: v.href }));
              });
          }
        }),
        !!o.steps.length)
      )
        return o;
    },
  });
}
function j8(t) {
  return new Fe({
    key: new Ve("handleClickLink"),
    props: {
      handleClick: (e, n, r) => {
        var s, i;
        if (r.button !== 0 || !e.editable) return !1;
        let o = r.target;
        const l = [];
        for (; o.nodeName !== "DIV"; ) l.push(o), (o = o.parentNode);
        if (!l.find((h) => h.nodeName === "A")) return !1;
        const a = z3(e.state, t.type.name),
          c = r.target,
          u = (s = c?.href) !== null && s !== void 0 ? s : a.href,
          d = (i = c?.target) !== null && i !== void 0 ? i : a.target;
        return c && u ? (window.open(u, d), !0) : !1;
      },
    },
  });
}
function P8(t) {
  return new Fe({
    key: new Ve("handlePasteLink"),
    props: {
      handlePaste: (e, n, r) => {
        const { state: s } = e,
          { selection: i } = s,
          { empty: o } = i;
        if (o) return !1;
        let l = "";
        r.content.forEach((c) => {
          l += c.textContent;
        });
        const a = xm(l, { defaultProtocol: t.defaultProtocol }).find(
          (c) => c.isLink && c.value === l,
        );
        return !l || !a
          ? !1
          : t.editor.commands.setMark(t.type, { href: a.href });
      },
    },
  });
}
const I8 = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g;
function Vn(t, e) {
  const n = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp",
  ];
  return (
    e &&
      e.forEach((r) => {
        const s = typeof r == "string" ? r : r.scheme;
        s && n.push(s);
      }),
    !t ||
      t
        .replace(I8, "")
        .match(
          new RegExp(
            `^(?:(?:${n.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
            "i",
          ),
        )
  );
}
Yt.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate &&
      !this.options.shouldAutoLink &&
      ((this.options.shouldAutoLink = this.options.validate),
      console.warn(
        "The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.",
      )),
      this.options.protocols.forEach((t) => {
        if (typeof t == "string") {
          Xd(t);
          return;
        }
        Xd(t.scheme, t.optionalSlashes);
      });
  },
  onDestroy() {
    M8();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null,
      },
      isAllowedUri: (t, e) => !!Vn(t, e.protocols),
      validate: (t) => !!t,
      shouldAutoLink: (t) => !!t,
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(t) {
          return t.getAttribute("href");
        },
      },
      target: { default: this.options.HTMLAttributes.target },
      rel: { default: this.options.HTMLAttributes.rel },
      class: { default: this.options.HTMLAttributes.class },
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (t) => {
          const e = t.getAttribute("href");
          return !e ||
            !this.options.isAllowedUri(e, {
              defaultValidate: (n) => !!Vn(n, this.options.protocols),
              protocols: this.options.protocols,
              defaultProtocol: this.options.defaultProtocol,
            })
            ? !1
            : null;
        },
      },
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return this.options.isAllowedUri(t.href, {
      defaultValidate: (e) => !!Vn(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol,
    })
      ? ["a", xe(this.options.HTMLAttributes, t), 0]
      : ["a", xe(this.options.HTMLAttributes, { ...t, href: "" }), 0];
  },
  addCommands() {
    return {
      setLink:
        (t) =>
        ({ chain: e }) => {
          const { href: n } = t;
          return this.options.isAllowedUri(n, {
            defaultValidate: (r) => !!Vn(r, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol,
          })
            ? e().setMark(this.name, t).setMeta("preventAutolink", !0).run()
            : !1;
        },
      toggleLink:
        (t) =>
        ({ chain: e }) => {
          const { href: n } = t;
          return this.options.isAllowedUri(n, {
            defaultValidate: (r) => !!Vn(r, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol,
          })
            ? e()
                .toggleMark(this.name, t, { extendEmptyMarkRange: !0 })
                .setMeta("preventAutolink", !0)
                .run()
            : !1;
        },
      unsetLink:
        () =>
        ({ chain: t }) =>
          t()
            .unsetMark(this.name, { extendEmptyMarkRange: !0 })
            .setMeta("preventAutolink", !0)
            .run(),
    };
  },
  addPasteRules() {
    return [
      In({
        find: (t) => {
          const e = [];
          if (t) {
            const { protocols: n, defaultProtocol: r } = this.options,
              s = xm(t).filter(
                (i) =>
                  i.isLink &&
                  this.options.isAllowedUri(i.value, {
                    defaultValidate: (o) => !!Vn(o, n),
                    protocols: n,
                    defaultProtocol: r,
                  }),
              );
            s.length &&
              s.forEach((i) =>
                e.push({
                  text: i.value,
                  data: { href: i.href },
                  index: i.start,
                }),
              );
          }
          return e;
        },
        type: this.type,
        getAttributes: (t) => {
          var e;
          return {
            href: (e = t.data) === null || e === void 0 ? void 0 : e.href,
          };
        },
      }),
    ];
  },
  addProseMirrorPlugins() {
    const t = [],
      { protocols: e, defaultProtocol: n } = this.options;
    return (
      this.options.autolink &&
        t.push(
          O8({
            type: this.type,
            defaultProtocol: this.options.defaultProtocol,
            validate: (r) =>
              this.options.isAllowedUri(r, {
                defaultValidate: (s) => !!Vn(s, e),
                protocols: e,
                defaultProtocol: n,
              }),
            shouldAutoLink: this.options.shouldAutoLink,
          }),
        ),
      this.options.openOnClick === !0 && t.push(j8({ type: this.type })),
      this.options.linkOnPaste &&
        t.push(
          P8({
            editor: this.editor,
            defaultProtocol: this.options.defaultProtocol,
            type: this.type,
          }),
        ),
      t
    );
  },
});
const L8 = (t) => Ne({ find: /--$/, replace: t ?? "—" }),
  N8 = (t) => Ne({ find: /\.\.\.$/, replace: t ?? "…" }),
  z8 = (t) =>
    Ne({ find: /(?:^|[\s{[(<'"\u2018\u201C])(")$/, replace: t ?? "“" }),
  D8 = (t) => Ne({ find: /"$/, replace: t ?? "”" }),
  B8 = (t) =>
    Ne({ find: /(?:^|[\s{[(<'"\u2018\u201C])(')$/, replace: t ?? "‘" }),
  H8 = (t) => Ne({ find: /'$/, replace: t ?? "’" }),
  $8 = (t) => Ne({ find: /<-$/, replace: t ?? "←" }),
  F8 = (t) => Ne({ find: /->$/, replace: t ?? "→" }),
  V8 = (t) => Ne({ find: /\(c\)$/, replace: t ?? "©" }),
  W8 = (t) => Ne({ find: /\(tm\)$/, replace: t ?? "™" }),
  U8 = (t) => Ne({ find: /\(sm\)$/, replace: t ?? "℠" }),
  K8 = (t) => Ne({ find: /\(r\)$/, replace: t ?? "®" }),
  q8 = (t) => Ne({ find: /(?:^|\s)(1\/2)\s$/, replace: t ?? "½" }),
  J8 = (t) => Ne({ find: /\+\/-$/, replace: t ?? "±" }),
  G8 = (t) => Ne({ find: /!=$/, replace: t ?? "≠" }),
  Q8 = (t) => Ne({ find: /<<$/, replace: t ?? "«" }),
  Y8 = (t) => Ne({ find: />>$/, replace: t ?? "»" }),
  X8 = (t) => Ne({ find: /\d+\s?([*x])\s?\d+$/, replace: t ?? "×" }),
  Z8 = (t) => Ne({ find: /\^2$/, replace: t ?? "²" }),
  ex = (t) => Ne({ find: /\^3$/, replace: t ?? "³" }),
  tx = (t) => Ne({ find: /(?:^|\s)(1\/4)\s$/, replace: t ?? "¼" }),
  nx = (t) => Ne({ find: /(?:^|\s)(3\/4)\s$/, replace: t ?? "¾" });
$e.create({
  name: "typography",
  addOptions() {
    return {
      closeDoubleQuote: "”",
      closeSingleQuote: "’",
      copyright: "©",
      ellipsis: "…",
      emDash: "—",
      laquo: "«",
      leftArrow: "←",
      multiplication: "×",
      notEqual: "≠",
      oneHalf: "½",
      oneQuarter: "¼",
      openDoubleQuote: "“",
      openSingleQuote: "‘",
      plusMinus: "±",
      raquo: "»",
      registeredTrademark: "®",
      rightArrow: "→",
      servicemark: "℠",
      superscriptThree: "³",
      superscriptTwo: "²",
      threeQuarters: "¾",
      trademark: "™",
    };
  },
  addInputRules() {
    const t = [];
    return (
      this.options.emDash !== !1 && t.push(L8(this.options.emDash)),
      this.options.ellipsis !== !1 && t.push(N8(this.options.ellipsis)),
      this.options.openDoubleQuote !== !1 &&
        t.push(z8(this.options.openDoubleQuote)),
      this.options.closeDoubleQuote !== !1 &&
        t.push(D8(this.options.closeDoubleQuote)),
      this.options.openSingleQuote !== !1 &&
        t.push(B8(this.options.openSingleQuote)),
      this.options.closeSingleQuote !== !1 &&
        t.push(H8(this.options.closeSingleQuote)),
      this.options.leftArrow !== !1 && t.push($8(this.options.leftArrow)),
      this.options.rightArrow !== !1 && t.push(F8(this.options.rightArrow)),
      this.options.copyright !== !1 && t.push(V8(this.options.copyright)),
      this.options.trademark !== !1 && t.push(W8(this.options.trademark)),
      this.options.servicemark !== !1 && t.push(U8(this.options.servicemark)),
      this.options.registeredTrademark !== !1 &&
        t.push(K8(this.options.registeredTrademark)),
      this.options.oneHalf !== !1 && t.push(q8(this.options.oneHalf)),
      this.options.plusMinus !== !1 && t.push(J8(this.options.plusMinus)),
      this.options.notEqual !== !1 && t.push(G8(this.options.notEqual)),
      this.options.laquo !== !1 && t.push(Q8(this.options.laquo)),
      this.options.raquo !== !1 && t.push(Y8(this.options.raquo)),
      this.options.multiplication !== !1 &&
        t.push(X8(this.options.multiplication)),
      this.options.superscriptTwo !== !1 &&
        t.push(Z8(this.options.superscriptTwo)),
      this.options.superscriptThree !== !1 &&
        t.push(ex(this.options.superscriptThree)),
      this.options.oneQuarter !== !1 && t.push(tx(this.options.oneQuarter)),
      this.options.threeQuarters !== !1 &&
        t.push(nx(this.options.threeQuarters)),
      t
    );
  },
});
const rx = (t) => {
  if (!t.children.length) return;
  const e = t.querySelectorAll("span");
  e &&
    e.forEach((n) => {
      var r, s;
      const i = n.getAttribute("style"),
        o =
          (s =
            (r = n.parentElement) === null || r === void 0
              ? void 0
              : r.closest("span")) === null || s === void 0
            ? void 0
            : s.getAttribute("style");
      n.setAttribute("style", `${o};${i}`);
    });
};
Yt.create({
  name: "textStyle",
  priority: 101,
  addOptions() {
    return { HTMLAttributes: {}, mergeNestedSpanStyles: !1 };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (t) =>
          t.hasAttribute("style")
            ? (this.options.mergeNestedSpanStyles && rx(t), {})
            : !1,
      },
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["span", xe(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle:
        () =>
        ({ tr: t }) => {
          const { selection: e } = t;
          return (
            t.doc.nodesBetween(e.from, e.to, (n, r) => {
              if (n.isTextblock) return !0;
              n.marks
                .filter((s) => s.type === this.type)
                .some((s) => Object.values(s.attrs).some((i) => !!i)) ||
                t.removeMark(r, r + n.nodeSize, this.type);
            }),
            !0
          );
        },
    };
  },
});
const sx = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/,
  ix = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g;
Yt.create({
  name: "highlight",
  addOptions() {
    return { multicolor: !1, HTMLAttributes: {} };
  },
  addAttributes() {
    return this.options.multicolor
      ? {
          color: {
            default: null,
            parseHTML: (t) =>
              t.getAttribute("data-color") || t.style.backgroundColor,
            renderHTML: (t) =>
              t.color
                ? {
                    "data-color": t.color,
                    style: `background-color: ${t.color}; color: inherit`,
                  }
                : {},
          },
        }
      : {};
  },
  parseHTML() {
    return [{ tag: "mark" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["mark", xe(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setHighlight:
        (t) =>
        ({ commands: e }) =>
          e.setMark(this.name, t),
      toggleHighlight:
        (t) =>
        ({ commands: e }) =>
          e.toggleMark(this.name, t),
      unsetHighlight:
        () =>
        ({ commands: t }) =>
          t.unsetMark(this.name),
    };
  },
  addKeyboardShortcuts() {
    return { "Mod-Shift-h": () => this.editor.commands.toggleHighlight() };
  },
  addInputRules() {
    return [sr({ find: sx, type: this.type })];
  },
  addPasteRules() {
    return [In({ find: ix, type: this.type })];
  },
});
$e.create({
  name: "color",
  addOptions() {
    return { types: ["textStyle"] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: (t) => {
              var e;
              return (e = t.style.color) === null || e === void 0
                ? void 0
                : e.replace(/['"]+/g, "");
            },
            renderHTML: (t) => (t.color ? { style: `color: ${t.color}` } : {}),
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setColor:
        (t) =>
        ({ chain: e }) =>
          e().setMark("textStyle", { color: t }).run(),
      unsetColor:
        () =>
        ({ chain: t }) =>
          t()
            .setMark("textStyle", { color: null })
            .removeEmptyTextStyle()
            .run(),
    };
  },
});
function ox(t) {
  var e;
  const {
      char: n,
      allowSpaces: r,
      allowToIncludeChar: s,
      allowedPrefixes: i,
      startOfLine: o,
      $position: l,
    } = t,
    a = r && !s,
    c = cw(n),
    u = new RegExp(`\\s${c}$`),
    d = o ? "^" : "",
    h = s ? "" : c,
    p = a
      ? new RegExp(`${d}${c}.*?(?=\\s${h}|$)`, "gm")
      : new RegExp(`${d}(?:^)?${c}[^\\s${h}]*`, "gm"),
    y =
      ((e = l.nodeBefore) === null || e === void 0 ? void 0 : e.isText) &&
      l.nodeBefore.text;
  if (!y) return null;
  const b = l.pos - y.length,
    x = Array.from(y.matchAll(p)).pop();
  if (!x || x.input === void 0 || x.index === void 0) return null;
  const v = x.input.slice(Math.max(0, x.index - 1), x.index),
    E = new RegExp(`^[${i?.join("")}\0]?$`).test(v);
  if (i !== null && !E) return null;
  const R = b + x.index;
  let f = R + x[0].length;
  return (
    a && u.test(y.slice(f - 1, f + 1)) && ((x[0] += " "), (f += 1)),
    R < l.pos && f >= l.pos
      ? { range: { from: R, to: f }, query: x[0].slice(n.length), text: x[0] }
      : null
  );
}
const lx = new Ve("suggestion");
function ax({
  pluginKey: t = lx,
  editor: e,
  char: n = "@",
  allowSpaces: r = !1,
  allowToIncludeChar: s = !1,
  allowedPrefixes: i = [" "],
  startOfLine: o = !1,
  decorationTag: l = "span",
  decorationClass: a = "suggestion",
  command: c = () => null,
  items: u = () => [],
  render: d = () => ({}),
  allow: h = () => !0,
  findSuggestionMatch: p = ox,
}) {
  let y;
  const b = d?.(),
    x = new Fe({
      key: t,
      view() {
        return {
          update: async (v, E) => {
            var R, f, g, m, w, S, M;
            const _ =
                (R = this.key) === null || R === void 0
                  ? void 0
                  : R.getState(E),
              T =
                (f = this.key) === null || f === void 0
                  ? void 0
                  : f.getState(v.state),
              F = _.active && T.active && _.range.from !== T.range.from,
              N = !_.active && T.active,
              I = _.active && !T.active,
              z = !N && !I && _.query !== T.query,
              k = N || (F && z),
              j = z || F,
              B = I || (F && z);
            if (!k && !j && !B) return;
            const U = B && !k ? _ : T,
              ie = v.dom.querySelector(
                `[data-decoration-id="${U.decorationId}"]`,
              );
            (y = {
              editor: e,
              range: U.range,
              query: U.query,
              text: U.text,
              items: [],
              command: (G) => c({ editor: e, range: U.range, props: G }),
              decorationNode: ie,
              clientRect: ie
                ? () => {
                    var G;
                    const { decorationId: de } =
                        (G = this.key) === null || G === void 0
                          ? void 0
                          : G.getState(e.state),
                      pe = v.dom.querySelector(`[data-decoration-id="${de}"]`);
                    return pe?.getBoundingClientRect() || null;
                  }
                : null,
            }),
              k &&
                ((g = b?.onBeforeStart) === null ||
                  g === void 0 ||
                  g.call(b, y)),
              j &&
                ((m = b?.onBeforeUpdate) === null ||
                  m === void 0 ||
                  m.call(b, y)),
              (j || k) && (y.items = await u({ editor: e, query: U.query })),
              B && ((w = b?.onExit) === null || w === void 0 || w.call(b, y)),
              j && ((S = b?.onUpdate) === null || S === void 0 || S.call(b, y)),
              k && ((M = b?.onStart) === null || M === void 0 || M.call(b, y));
          },
          destroy: () => {
            var v;
            y && ((v = b?.onExit) === null || v === void 0 || v.call(b, y));
          },
        };
      },
      state: {
        init() {
          return {
            active: !1,
            range: { from: 0, to: 0 },
            query: null,
            text: null,
            composing: !1,
          };
        },
        apply(v, E, R, f) {
          const { isEditable: g } = e,
            { composing: m } = e.view,
            { selection: w } = v,
            { empty: S, from: M } = w,
            _ = { ...E };
          if (((_.composing = m), g && (S || e.view.composing))) {
            (M < E.range.from || M > E.range.to) &&
              !m &&
              !E.composing &&
              (_.active = !1);
            const T = p({
                char: n,
                allowSpaces: r,
                allowToIncludeChar: s,
                allowedPrefixes: i,
                startOfLine: o,
                $position: w.$from,
              }),
              F = `id_${Math.floor(Math.random() * 4294967295)}`;
            T && h({ editor: e, state: f, range: T.range, isActive: E.active })
              ? ((_.active = !0),
                (_.decorationId = E.decorationId ? E.decorationId : F),
                (_.range = T.range),
                (_.query = T.query),
                (_.text = T.text))
              : (_.active = !1);
          } else _.active = !1;
          return (
            _.active ||
              ((_.decorationId = null),
              (_.range = { from: 0, to: 0 }),
              (_.query = null),
              (_.text = null)),
            _
          );
        },
      },
      props: {
        handleKeyDown(v, E) {
          var R;
          const { active: f, range: g } = x.getState(v.state);
          return (
            (f &&
              ((R = b?.onKeyDown) === null || R === void 0
                ? void 0
                : R.call(b, { view: v, event: E, range: g }))) ||
            !1
          );
        },
        decorations(v) {
          const { active: E, range: R, decorationId: f } = x.getState(v);
          return E
            ? Oe.create(v.doc, [
                ft.inline(R.from, R.to, {
                  nodeName: l,
                  class: a,
                  "data-decoration-id": f,
                }),
              ])
            : null;
        },
      },
    });
  return x;
}
const cx = new Ve("mention");
ze.create({
  name: "mention",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {},
      renderText({ options: t, node: e }) {
        var n;
        return `${t.suggestion.char}${(n = e.attrs.label) !== null && n !== void 0 ? n : e.attrs.id}`;
      },
      deleteTriggerWithBackspace: !1,
      renderHTML({ options: t, node: e }) {
        var n;
        return [
          "span",
          xe(this.HTMLAttributes, t.HTMLAttributes),
          `${t.suggestion.char}${(n = e.attrs.label) !== null && n !== void 0 ? n : e.attrs.id}`,
        ];
      },
      suggestion: {
        char: "@",
        pluginKey: cx,
        command: ({ editor: t, range: e, props: n }) => {
          var r, s, i;
          const o = t.view.state.selection.$to.nodeAfter;
          ((r = o?.text) === null || r === void 0
            ? void 0
            : r.startsWith(" ")) && (e.to += 1),
            t
              .chain()
              .focus()
              .insertContentAt(e, [
                { type: this.name, attrs: n },
                { type: "text", text: " " },
              ])
              .run(),
            (i =
              (s = t.view.dom.ownerDocument.defaultView) === null ||
              s === void 0
                ? void 0
                : s.getSelection()) === null ||
              i === void 0 ||
              i.collapseToEnd();
        },
        allow: ({ state: t, range: e }) => {
          const n = t.doc.resolve(e.from),
            r = t.schema.nodes[this.name];
          return !!n.parent.type.contentMatch.matchType(r);
        },
      },
    };
  },
  group: "inline",
  inline: !0,
  selectable: !1,
  atom: !0,
  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: (t) => t.getAttribute("data-id"),
        renderHTML: (t) => (t.id ? { "data-id": t.id } : {}),
      },
      label: {
        default: null,
        parseHTML: (t) => t.getAttribute("data-label"),
        renderHTML: (t) => (t.label ? { "data-label": t.label } : {}),
      },
    };
  },
  parseHTML() {
    return [{ tag: `span[data-type="${this.name}"]` }];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    if (this.options.renderLabel !== void 0)
      return (
        console.warn(
          "renderLabel is deprecated use renderText and renderHTML instead",
        ),
        [
          "span",
          xe({ "data-type": this.name }, this.options.HTMLAttributes, e),
          this.options.renderLabel({ options: this.options, node: t }),
        ]
      );
    const n = { ...this.options };
    n.HTMLAttributes = xe(
      { "data-type": this.name },
      this.options.HTMLAttributes,
      e,
    );
    const r = this.options.renderHTML({ options: n, node: t });
    return typeof r == "string"
      ? [
          "span",
          xe({ "data-type": this.name }, this.options.HTMLAttributes, e),
          r,
        ]
      : r;
  },
  renderText({ node: t }) {
    return this.options.renderLabel !== void 0
      ? (console.warn(
          "renderLabel is deprecated use renderText and renderHTML instead",
        ),
        this.options.renderLabel({ options: this.options, node: t }))
      : this.options.renderText({ options: this.options, node: t });
  },
  addKeyboardShortcuts() {
    return {
      Backspace: () =>
        this.editor.commands.command(({ tr: t, state: e }) => {
          let n = !1;
          const { selection: r } = e,
            { empty: s, anchor: i } = r;
          return s
            ? (e.doc.nodesBetween(i - 1, i, (o, l) => {
                if (o.type.name === this.name)
                  return (
                    (n = !0),
                    t.insertText(
                      this.options.deleteTriggerWithBackspace
                        ? ""
                        : this.options.suggestion.char || "",
                      l,
                      l + o.nodeSize,
                    ),
                    !1
                  );
              }),
              n)
            : !1;
        }),
    };
  },
  addProseMirrorPlugins() {
    return [ax({ editor: this.editor, ...this.options.suggestion })];
  },
});
var wi = { exports: {} },
  ux = wi.exports,
  Zd;
function dx() {
  return (
    Zd ||
      ((Zd = 1),
      (function (t) {
        (function () {
          function e(f) {
            var g = {
              omitExtraWLInCodeBlocks: {
                defaultValue: !1,
                describe:
                  "Omit the default extra whiteline added to code blocks",
                type: "boolean",
              },
              noHeaderId: {
                defaultValue: !1,
                describe: "Turn on/off generated header id",
                type: "boolean",
              },
              prefixHeaderId: {
                defaultValue: !1,
                describe:
                  "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
                type: "string",
              },
              rawPrefixHeaderId: {
                defaultValue: !1,
                describe:
                  'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
                type: "boolean",
              },
              ghCompatibleHeaderId: {
                defaultValue: !1,
                describe:
                  "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
                type: "boolean",
              },
              rawHeaderId: {
                defaultValue: !1,
                describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
                type: "boolean",
              },
              headerLevelStart: {
                defaultValue: !1,
                describe: "The header blocks level start",
                type: "integer",
              },
              parseImgDimensions: {
                defaultValue: !1,
                describe: "Turn on/off image dimension parsing",
                type: "boolean",
              },
              simplifiedAutoLink: {
                defaultValue: !1,
                describe: "Turn on/off GFM autolink style",
                type: "boolean",
              },
              excludeTrailingPunctuationFromURLs: {
                defaultValue: !1,
                describe:
                  "Excludes trailing punctuation from links generated with autoLinking",
                type: "boolean",
              },
              literalMidWordUnderscores: {
                defaultValue: !1,
                describe: "Parse midword underscores as literal underscores",
                type: "boolean",
              },
              literalMidWordAsterisks: {
                defaultValue: !1,
                describe: "Parse midword asterisks as literal asterisks",
                type: "boolean",
              },
              strikethrough: {
                defaultValue: !1,
                describe: "Turn on/off strikethrough support",
                type: "boolean",
              },
              tables: {
                defaultValue: !1,
                describe: "Turn on/off tables support",
                type: "boolean",
              },
              tablesHeaderId: {
                defaultValue: !1,
                describe: "Add an id to table headers",
                type: "boolean",
              },
              ghCodeBlocks: {
                defaultValue: !0,
                describe: "Turn on/off GFM fenced code blocks support",
                type: "boolean",
              },
              tasklists: {
                defaultValue: !1,
                describe: "Turn on/off GFM tasklist support",
                type: "boolean",
              },
              smoothLivePreview: {
                defaultValue: !1,
                describe:
                  "Prevents weird effects in live previews due to incomplete input",
                type: "boolean",
              },
              smartIndentationFix: {
                defaultValue: !1,
                describe: "Tries to smartly fix indentation in es6 strings",
                type: "boolean",
              },
              disableForced4SpacesIndentedSublists: {
                defaultValue: !1,
                describe:
                  "Disables the requirement of indenting nested sublists by 4 spaces",
                type: "boolean",
              },
              simpleLineBreaks: {
                defaultValue: !1,
                describe: "Parses simple line breaks as <br> (GFM Style)",
                type: "boolean",
              },
              requireSpaceBeforeHeadingText: {
                defaultValue: !1,
                describe:
                  "Makes adding a space between `#` and the header text mandatory (GFM Style)",
                type: "boolean",
              },
              ghMentions: {
                defaultValue: !1,
                describe: "Enables github @mentions",
                type: "boolean",
              },
              ghMentionsLink: {
                defaultValue: "https://github.com/{u}",
                describe:
                  "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
                type: "string",
              },
              encodeEmails: {
                defaultValue: !0,
                describe:
                  "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
                type: "boolean",
              },
              openLinksInNewWindow: {
                defaultValue: !1,
                describe: "Open all links in new windows",
                type: "boolean",
              },
              backslashEscapesHTMLTags: {
                defaultValue: !1,
                describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
                type: "boolean",
              },
              emoji: {
                defaultValue: !1,
                describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
                type: "boolean",
              },
              underline: {
                defaultValue: !1,
                describe:
                  "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
                type: "boolean",
              },
              ellipsis: {
                defaultValue: !0,
                describe:
                  "Replaces three dots with the ellipsis unicode character",
                type: "boolean",
              },
              completeHTMLDocument: {
                defaultValue: !1,
                describe:
                  "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
                type: "boolean",
              },
              metadata: {
                defaultValue: !1,
                describe:
                  "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
                type: "boolean",
              },
              splitAdjacentBlockquotes: {
                defaultValue: !1,
                describe: "Split adjacent blockquote blocks",
                type: "boolean",
              },
            };
            if (f === !1) return JSON.parse(JSON.stringify(g));
            var m = {};
            for (var w in g) g.hasOwnProperty(w) && (m[w] = g[w].defaultValue);
            return m;
          }
          function n() {
            var f = e(!0),
              g = {};
            for (var m in f) f.hasOwnProperty(m) && (g[m] = !0);
            return g;
          }
          var r = {},
            s = {},
            i = {},
            o = e(!0),
            l = "vanilla",
            a = {
              github: {
                omitExtraWLInCodeBlocks: !0,
                simplifiedAutoLink: !0,
                excludeTrailingPunctuationFromURLs: !0,
                literalMidWordUnderscores: !0,
                strikethrough: !0,
                tables: !0,
                tablesHeaderId: !0,
                ghCodeBlocks: !0,
                tasklists: !0,
                disableForced4SpacesIndentedSublists: !0,
                simpleLineBreaks: !0,
                requireSpaceBeforeHeadingText: !0,
                ghCompatibleHeaderId: !0,
                ghMentions: !0,
                backslashEscapesHTMLTags: !0,
                emoji: !0,
                splitAdjacentBlockquotes: !0,
              },
              original: { noHeaderId: !0, ghCodeBlocks: !1 },
              ghost: {
                omitExtraWLInCodeBlocks: !0,
                parseImgDimensions: !0,
                simplifiedAutoLink: !0,
                excludeTrailingPunctuationFromURLs: !0,
                literalMidWordUnderscores: !0,
                strikethrough: !0,
                tables: !0,
                tablesHeaderId: !0,
                ghCodeBlocks: !0,
                tasklists: !0,
                smoothLivePreview: !0,
                simpleLineBreaks: !0,
                requireSpaceBeforeHeadingText: !0,
                ghMentions: !1,
                encodeEmails: !0,
              },
              vanilla: e(!0),
              allOn: n(),
            };
          (r.helper = {}),
            (r.extensions = {}),
            (r.setOption = function (f, g) {
              return (o[f] = g), this;
            }),
            (r.getOption = function (f) {
              return o[f];
            }),
            (r.getOptions = function () {
              return o;
            }),
            (r.resetOptions = function () {
              o = e(!0);
            }),
            (r.setFlavor = function (f) {
              if (!a.hasOwnProperty(f))
                throw Error(f + " flavor was not found");
              r.resetOptions();
              var g = a[f];
              l = f;
              for (var m in g) g.hasOwnProperty(m) && (o[m] = g[m]);
            }),
            (r.getFlavor = function () {
              return l;
            }),
            (r.getFlavorOptions = function (f) {
              if (a.hasOwnProperty(f)) return a[f];
            }),
            (r.getDefaultOptions = function (f) {
              return e(f);
            }),
            (r.subParser = function (f, g) {
              if (r.helper.isString(f))
                if (typeof g < "u") s[f] = g;
                else {
                  if (s.hasOwnProperty(f)) return s[f];
                  throw Error("SubParser named " + f + " not registered!");
                }
            }),
            (r.extension = function (f, g) {
              if (!r.helper.isString(f))
                throw Error("Extension 'name' must be a string");
              if (((f = r.helper.stdExtName(f)), r.helper.isUndefined(g))) {
                if (!i.hasOwnProperty(f))
                  throw Error("Extension named " + f + " is not registered!");
                return i[f];
              } else {
                typeof g == "function" && (g = g()),
                  r.helper.isArray(g) || (g = [g]);
                var m = c(g, f);
                if (m.valid) i[f] = g;
                else throw Error(m.error);
              }
            }),
            (r.getAllExtensions = function () {
              return i;
            }),
            (r.removeExtension = function (f) {
              delete i[f];
            }),
            (r.resetExtensions = function () {
              i = {};
            });
          function c(f, g) {
            var m = g
                ? "Error in " + g + " extension->"
                : "Error in unnamed extension",
              w = { valid: !0, error: "" };
            r.helper.isArray(f) || (f = [f]);
            for (var S = 0; S < f.length; ++S) {
              var M = m + " sub-extension " + S + ": ",
                _ = f[S];
              if (typeof _ != "object")
                return (
                  (w.valid = !1),
                  (w.error =
                    M + "must be an object, but " + typeof _ + " given"),
                  w
                );
              if (!r.helper.isString(_.type))
                return (
                  (w.valid = !1),
                  (w.error =
                    M +
                    'property "type" must be a string, but ' +
                    typeof _.type +
                    " given"),
                  w
                );
              var T = (_.type = _.type.toLowerCase());
              if (
                (T === "language" && (T = _.type = "lang"),
                T === "html" && (T = _.type = "output"),
                T !== "lang" && T !== "output" && T !== "listener")
              )
                return (
                  (w.valid = !1),
                  (w.error =
                    M +
                    "type " +
                    T +
                    ' is not recognized. Valid values: "lang/language", "output/html" or "listener"'),
                  w
                );
              if (T === "listener") {
                if (r.helper.isUndefined(_.listeners))
                  return (
                    (w.valid = !1),
                    (w.error =
                      M +
                      '. Extensions of type "listener" must have a property called "listeners"'),
                    w
                  );
              } else if (
                r.helper.isUndefined(_.filter) &&
                r.helper.isUndefined(_.regex)
              )
                return (
                  (w.valid = !1),
                  (w.error =
                    M +
                    T +
                    ' extensions must define either a "regex" property or a "filter" method'),
                  w
                );
              if (_.listeners) {
                if (typeof _.listeners != "object")
                  return (
                    (w.valid = !1),
                    (w.error =
                      M +
                      '"listeners" property must be an object but ' +
                      typeof _.listeners +
                      " given"),
                    w
                  );
                for (var F in _.listeners)
                  if (
                    _.listeners.hasOwnProperty(F) &&
                    typeof _.listeners[F] != "function"
                  )
                    return (
                      (w.valid = !1),
                      (w.error =
                        M +
                        '"listeners" property must be an hash of [event name]: [callback]. listeners.' +
                        F +
                        " must be a function but " +
                        typeof _.listeners[F] +
                        " given"),
                      w
                    );
              }
              if (_.filter) {
                if (typeof _.filter != "function")
                  return (
                    (w.valid = !1),
                    (w.error =
                      M +
                      '"filter" must be a function, but ' +
                      typeof _.filter +
                      " given"),
                    w
                  );
              } else if (_.regex) {
                if (
                  (r.helper.isString(_.regex) &&
                    (_.regex = new RegExp(_.regex, "g")),
                  !(_.regex instanceof RegExp))
                )
                  return (
                    (w.valid = !1),
                    (w.error =
                      M +
                      '"regex" property must either be a string or a RegExp object, but ' +
                      typeof _.regex +
                      " given"),
                    w
                  );
                if (r.helper.isUndefined(_.replace))
                  return (
                    (w.valid = !1),
                    (w.error =
                      M +
                      '"regex" extensions must implement a replace string or function'),
                    w
                  );
              }
            }
            return w;
          }
          (r.validateExtension = function (f) {
            var g = c(f, null);
            return g.valid ? !0 : (console.warn(g.error), !1);
          }),
            r.hasOwnProperty("helper") || (r.helper = {}),
            (r.helper.isString = function (f) {
              return typeof f == "string" || f instanceof String;
            }),
            (r.helper.isFunction = function (f) {
              var g = {};
              return f && g.toString.call(f) === "[object Function]";
            }),
            (r.helper.isArray = function (f) {
              return Array.isArray(f);
            }),
            (r.helper.isUndefined = function (f) {
              return typeof f > "u";
            }),
            (r.helper.forEach = function (f, g) {
              if (r.helper.isUndefined(f))
                throw new Error("obj param is required");
              if (r.helper.isUndefined(g))
                throw new Error("callback param is required");
              if (!r.helper.isFunction(g))
                throw new Error("callback param must be a function/closure");
              if (typeof f.forEach == "function") f.forEach(g);
              else if (r.helper.isArray(f))
                for (var m = 0; m < f.length; m++) g(f[m], m, f);
              else if (typeof f == "object")
                for (var w in f) f.hasOwnProperty(w) && g(f[w], w, f);
              else
                throw new Error(
                  "obj does not seem to be an array or an iterable object",
                );
            }),
            (r.helper.stdExtName = function (f) {
              return f
                .replace(/[_?*+\/\\.^-]/g, "")
                .replace(/\s/g, "")
                .toLowerCase();
            });
          function u(f, g) {
            var m = g.charCodeAt(0);
            return "¨E" + m + "E";
          }
          (r.helper.escapeCharactersCallback = u),
            (r.helper.escapeCharacters = function (f, g, m) {
              var w = "([" + g.replace(/([\[\]\\])/g, "\\$1") + "])";
              m && (w = "\\\\" + w);
              var S = new RegExp(w, "g");
              return (f = f.replace(S, u)), f;
            }),
            (r.helper.unescapeHTMLEntities = function (f) {
              return f
                .replace(/&quot;/g, '"')
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&amp;/g, "&");
            });
          var d = function (f, g, m, w) {
            var S = w || "",
              M = S.indexOf("g") > -1,
              _ = new RegExp(g + "|" + m, "g" + S.replace(/g/g, "")),
              T = new RegExp(g, S.replace(/g/g, "")),
              F = [],
              N,
              I,
              z,
              k,
              j;
            do
              for (N = 0; (z = _.exec(f)); )
                if (T.test(z[0]))
                  N++ || ((I = _.lastIndex), (k = I - z[0].length));
                else if (N && !--N) {
                  j = z.index + z[0].length;
                  var B = {
                    left: { start: k, end: I },
                    match: { start: I, end: z.index },
                    right: { start: z.index, end: j },
                    wholeMatch: { start: k, end: j },
                  };
                  if ((F.push(B), !M)) return F;
                }
            while (N && (_.lastIndex = I));
            return F;
          };
          (r.helper.matchRecursiveRegExp = function (f, g, m, w) {
            for (var S = d(f, g, m, w), M = [], _ = 0; _ < S.length; ++_)
              M.push([
                f.slice(S[_].wholeMatch.start, S[_].wholeMatch.end),
                f.slice(S[_].match.start, S[_].match.end),
                f.slice(S[_].left.start, S[_].left.end),
                f.slice(S[_].right.start, S[_].right.end),
              ]);
            return M;
          }),
            (r.helper.replaceRecursiveRegExp = function (f, g, m, w, S) {
              if (!r.helper.isFunction(g)) {
                var M = g;
                g = function () {
                  return M;
                };
              }
              var _ = d(f, m, w, S),
                T = f,
                F = _.length;
              if (F > 0) {
                var N = [];
                _[0].wholeMatch.start !== 0 &&
                  N.push(f.slice(0, _[0].wholeMatch.start));
                for (var I = 0; I < F; ++I)
                  N.push(
                    g(
                      f.slice(_[I].wholeMatch.start, _[I].wholeMatch.end),
                      f.slice(_[I].match.start, _[I].match.end),
                      f.slice(_[I].left.start, _[I].left.end),
                      f.slice(_[I].right.start, _[I].right.end),
                    ),
                  ),
                    I < F - 1 &&
                      N.push(
                        f.slice(_[I].wholeMatch.end, _[I + 1].wholeMatch.start),
                      );
                _[F - 1].wholeMatch.end < f.length &&
                  N.push(f.slice(_[F - 1].wholeMatch.end)),
                  (T = N.join(""));
              }
              return T;
            }),
            (r.helper.regexIndexOf = function (f, g, m) {
              if (!r.helper.isString(f))
                throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
              if (!(g instanceof RegExp))
                throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
              var w = f.substring(m || 0).search(g);
              return w >= 0 ? w + (m || 0) : w;
            }),
            (r.helper.splitAtIndex = function (f, g) {
              if (!r.helper.isString(f))
                throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
              return [f.substring(0, g), f.substring(g)];
            }),
            (r.helper.encodeEmailAddress = function (f) {
              var g = [
                function (m) {
                  return "&#" + m.charCodeAt(0) + ";";
                },
                function (m) {
                  return "&#x" + m.charCodeAt(0).toString(16) + ";";
                },
                function (m) {
                  return m;
                },
              ];
              return (
                (f = f.replace(/./g, function (m) {
                  if (m === "@") m = g[Math.floor(Math.random() * 2)](m);
                  else {
                    var w = Math.random();
                    m = w > 0.9 ? g[2](m) : w > 0.45 ? g[1](m) : g[0](m);
                  }
                  return m;
                })),
                f
              );
            }),
            (r.helper.padEnd = function (g, m, w) {
              return (
                (m = m >> 0),
                (w = String(w || " ")),
                g.length > m
                  ? String(g)
                  : ((m = m - g.length),
                    m > w.length && (w += w.repeat(m / w.length)),
                    String(g) + w.slice(0, m))
              );
            }),
            typeof console > "u" &&
              (console = {
                warn: function (f) {
                  alert(f);
                },
                log: function (f) {
                  alert(f);
                },
                error: function (f) {
                  throw f;
                },
              }),
            (r.helper.regexes = { asteriskDashAndColon: /([*_:~])/g }),
            (r.helper.emojis = {
              "+1": "👍",
              "-1": "👎",
              100: "💯",
              1234: "🔢",
              "1st_place_medal": "🥇",
              "2nd_place_medal": "🥈",
              "3rd_place_medal": "🥉",
              "8ball": "🎱",
              a: "🅰️",
              ab: "🆎",
              abc: "🔤",
              abcd: "🔡",
              accept: "🉑",
              aerial_tramway: "🚡",
              airplane: "✈️",
              alarm_clock: "⏰",
              alembic: "⚗️",
              alien: "👽",
              ambulance: "🚑",
              amphora: "🏺",
              anchor: "⚓️",
              angel: "👼",
              anger: "💢",
              angry: "😠",
              anguished: "😧",
              ant: "🐜",
              apple: "🍎",
              aquarius: "♒️",
              aries: "♈️",
              arrow_backward: "◀️",
              arrow_double_down: "⏬",
              arrow_double_up: "⏫",
              arrow_down: "⬇️",
              arrow_down_small: "🔽",
              arrow_forward: "▶️",
              arrow_heading_down: "⤵️",
              arrow_heading_up: "⤴️",
              arrow_left: "⬅️",
              arrow_lower_left: "↙️",
              arrow_lower_right: "↘️",
              arrow_right: "➡️",
              arrow_right_hook: "↪️",
              arrow_up: "⬆️",
              arrow_up_down: "↕️",
              arrow_up_small: "🔼",
              arrow_upper_left: "↖️",
              arrow_upper_right: "↗️",
              arrows_clockwise: "🔃",
              arrows_counterclockwise: "🔄",
              art: "🎨",
              articulated_lorry: "🚛",
              artificial_satellite: "🛰",
              astonished: "😲",
              athletic_shoe: "👟",
              atm: "🏧",
              atom_symbol: "⚛️",
              avocado: "🥑",
              b: "🅱️",
              baby: "👶",
              baby_bottle: "🍼",
              baby_chick: "🐤",
              baby_symbol: "🚼",
              back: "🔙",
              bacon: "🥓",
              badminton: "🏸",
              baggage_claim: "🛄",
              baguette_bread: "🥖",
              balance_scale: "⚖️",
              balloon: "🎈",
              ballot_box: "🗳",
              ballot_box_with_check: "☑️",
              bamboo: "🎍",
              banana: "🍌",
              bangbang: "‼️",
              bank: "🏦",
              bar_chart: "📊",
              barber: "💈",
              baseball: "⚾️",
              basketball: "🏀",
              basketball_man: "⛹️",
              basketball_woman: "⛹️&zwj;♀️",
              bat: "🦇",
              bath: "🛀",
              bathtub: "🛁",
              battery: "🔋",
              beach_umbrella: "🏖",
              bear: "🐻",
              bed: "🛏",
              bee: "🐝",
              beer: "🍺",
              beers: "🍻",
              beetle: "🐞",
              beginner: "🔰",
              bell: "🔔",
              bellhop_bell: "🛎",
              bento: "🍱",
              biking_man: "🚴",
              bike: "🚲",
              biking_woman: "🚴&zwj;♀️",
              bikini: "👙",
              biohazard: "☣️",
              bird: "🐦",
              birthday: "🎂",
              black_circle: "⚫️",
              black_flag: "🏴",
              black_heart: "🖤",
              black_joker: "🃏",
              black_large_square: "⬛️",
              black_medium_small_square: "◾️",
              black_medium_square: "◼️",
              black_nib: "✒️",
              black_small_square: "▪️",
              black_square_button: "🔲",
              blonde_man: "👱",
              blonde_woman: "👱&zwj;♀️",
              blossom: "🌼",
              blowfish: "🐡",
              blue_book: "📘",
              blue_car: "🚙",
              blue_heart: "💙",
              blush: "😊",
              boar: "🐗",
              boat: "⛵️",
              bomb: "💣",
              book: "📖",
              bookmark: "🔖",
              bookmark_tabs: "📑",
              books: "📚",
              boom: "💥",
              boot: "👢",
              bouquet: "💐",
              bowing_man: "🙇",
              bow_and_arrow: "🏹",
              bowing_woman: "🙇&zwj;♀️",
              bowling: "🎳",
              boxing_glove: "🥊",
              boy: "👦",
              bread: "🍞",
              bride_with_veil: "👰",
              bridge_at_night: "🌉",
              briefcase: "💼",
              broken_heart: "💔",
              bug: "🐛",
              building_construction: "🏗",
              bulb: "💡",
              bullettrain_front: "🚅",
              bullettrain_side: "🚄",
              burrito: "🌯",
              bus: "🚌",
              business_suit_levitating: "🕴",
              busstop: "🚏",
              bust_in_silhouette: "👤",
              busts_in_silhouette: "👥",
              butterfly: "🦋",
              cactus: "🌵",
              cake: "🍰",
              calendar: "📆",
              call_me_hand: "🤙",
              calling: "📲",
              camel: "🐫",
              camera: "📷",
              camera_flash: "📸",
              camping: "🏕",
              cancer: "♋️",
              candle: "🕯",
              candy: "🍬",
              canoe: "🛶",
              capital_abcd: "🔠",
              capricorn: "♑️",
              car: "🚗",
              card_file_box: "🗃",
              card_index: "📇",
              card_index_dividers: "🗂",
              carousel_horse: "🎠",
              carrot: "🥕",
              cat: "🐱",
              cat2: "🐈",
              cd: "💿",
              chains: "⛓",
              champagne: "🍾",
              chart: "💹",
              chart_with_downwards_trend: "📉",
              chart_with_upwards_trend: "📈",
              checkered_flag: "🏁",
              cheese: "🧀",
              cherries: "🍒",
              cherry_blossom: "🌸",
              chestnut: "🌰",
              chicken: "🐔",
              children_crossing: "🚸",
              chipmunk: "🐿",
              chocolate_bar: "🍫",
              christmas_tree: "🎄",
              church: "⛪️",
              cinema: "🎦",
              circus_tent: "🎪",
              city_sunrise: "🌇",
              city_sunset: "🌆",
              cityscape: "🏙",
              cl: "🆑",
              clamp: "🗜",
              clap: "👏",
              clapper: "🎬",
              classical_building: "🏛",
              clinking_glasses: "🥂",
              clipboard: "📋",
              clock1: "🕐",
              clock10: "🕙",
              clock1030: "🕥",
              clock11: "🕚",
              clock1130: "🕦",
              clock12: "🕛",
              clock1230: "🕧",
              clock130: "🕜",
              clock2: "🕑",
              clock230: "🕝",
              clock3: "🕒",
              clock330: "🕞",
              clock4: "🕓",
              clock430: "🕟",
              clock5: "🕔",
              clock530: "🕠",
              clock6: "🕕",
              clock630: "🕡",
              clock7: "🕖",
              clock730: "🕢",
              clock8: "🕗",
              clock830: "🕣",
              clock9: "🕘",
              clock930: "🕤",
              closed_book: "📕",
              closed_lock_with_key: "🔐",
              closed_umbrella: "🌂",
              cloud: "☁️",
              cloud_with_lightning: "🌩",
              cloud_with_lightning_and_rain: "⛈",
              cloud_with_rain: "🌧",
              cloud_with_snow: "🌨",
              clown_face: "🤡",
              clubs: "♣️",
              cocktail: "🍸",
              coffee: "☕️",
              coffin: "⚰️",
              cold_sweat: "😰",
              comet: "☄️",
              computer: "💻",
              computer_mouse: "🖱",
              confetti_ball: "🎊",
              confounded: "😖",
              confused: "😕",
              congratulations: "㊗️",
              construction: "🚧",
              construction_worker_man: "👷",
              construction_worker_woman: "👷&zwj;♀️",
              control_knobs: "🎛",
              convenience_store: "🏪",
              cookie: "🍪",
              cool: "🆒",
              policeman: "👮",
              copyright: "©️",
              corn: "🌽",
              couch_and_lamp: "🛋",
              couple: "👫",
              couple_with_heart_woman_man: "💑",
              couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
              couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
              couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
              couplekiss_man_woman: "💏",
              couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
              cow: "🐮",
              cow2: "🐄",
              cowboy_hat_face: "🤠",
              crab: "🦀",
              crayon: "🖍",
              credit_card: "💳",
              crescent_moon: "🌙",
              cricket: "🏏",
              crocodile: "🐊",
              croissant: "🥐",
              crossed_fingers: "🤞",
              crossed_flags: "🎌",
              crossed_swords: "⚔️",
              crown: "👑",
              cry: "😢",
              crying_cat_face: "😿",
              crystal_ball: "🔮",
              cucumber: "🥒",
              cupid: "💘",
              curly_loop: "➰",
              currency_exchange: "💱",
              curry: "🍛",
              custard: "🍮",
              customs: "🛃",
              cyclone: "🌀",
              dagger: "🗡",
              dancer: "💃",
              dancing_women: "👯",
              dancing_men: "👯&zwj;♂️",
              dango: "🍡",
              dark_sunglasses: "🕶",
              dart: "🎯",
              dash: "💨",
              date: "📅",
              deciduous_tree: "🌳",
              deer: "🦌",
              department_store: "🏬",
              derelict_house: "🏚",
              desert: "🏜",
              desert_island: "🏝",
              desktop_computer: "🖥",
              male_detective: "🕵️",
              diamond_shape_with_a_dot_inside: "💠",
              diamonds: "♦️",
              disappointed: "😞",
              disappointed_relieved: "😥",
              dizzy: "💫",
              dizzy_face: "😵",
              do_not_litter: "🚯",
              dog: "🐶",
              dog2: "🐕",
              dollar: "💵",
              dolls: "🎎",
              dolphin: "🐬",
              door: "🚪",
              doughnut: "🍩",
              dove: "🕊",
              dragon: "🐉",
              dragon_face: "🐲",
              dress: "👗",
              dromedary_camel: "🐪",
              drooling_face: "🤤",
              droplet: "💧",
              drum: "🥁",
              duck: "🦆",
              dvd: "📀",
              "e-mail": "📧",
              eagle: "🦅",
              ear: "👂",
              ear_of_rice: "🌾",
              earth_africa: "🌍",
              earth_americas: "🌎",
              earth_asia: "🌏",
              egg: "🥚",
              eggplant: "🍆",
              eight_pointed_black_star: "✴️",
              eight_spoked_asterisk: "✳️",
              electric_plug: "🔌",
              elephant: "🐘",
              email: "✉️",
              end: "🔚",
              envelope_with_arrow: "📩",
              euro: "💶",
              european_castle: "🏰",
              european_post_office: "🏤",
              evergreen_tree: "🌲",
              exclamation: "❗️",
              expressionless: "😑",
              eye: "👁",
              eye_speech_bubble: "👁&zwj;🗨",
              eyeglasses: "👓",
              eyes: "👀",
              face_with_head_bandage: "🤕",
              face_with_thermometer: "🤒",
              fist_oncoming: "👊",
              factory: "🏭",
              fallen_leaf: "🍂",
              family_man_woman_boy: "👪",
              family_man_boy: "👨&zwj;👦",
              family_man_boy_boy: "👨&zwj;👦&zwj;👦",
              family_man_girl: "👨&zwj;👧",
              family_man_girl_boy: "👨&zwj;👧&zwj;👦",
              family_man_girl_girl: "👨&zwj;👧&zwj;👧",
              family_man_man_boy: "👨&zwj;👨&zwj;👦",
              family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
              family_man_man_girl: "👨&zwj;👨&zwj;👧",
              family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
              family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
              family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
              family_man_woman_girl: "👨&zwj;👩&zwj;👧",
              family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
              family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
              family_woman_boy: "👩&zwj;👦",
              family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
              family_woman_girl: "👩&zwj;👧",
              family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
              family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
              family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
              family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
              family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
              family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
              family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
              fast_forward: "⏩",
              fax: "📠",
              fearful: "😨",
              feet: "🐾",
              female_detective: "🕵️&zwj;♀️",
              ferris_wheel: "🎡",
              ferry: "⛴",
              field_hockey: "🏑",
              file_cabinet: "🗄",
              file_folder: "📁",
              film_projector: "📽",
              film_strip: "🎞",
              fire: "🔥",
              fire_engine: "🚒",
              fireworks: "🎆",
              first_quarter_moon: "🌓",
              first_quarter_moon_with_face: "🌛",
              fish: "🐟",
              fish_cake: "🍥",
              fishing_pole_and_fish: "🎣",
              fist_raised: "✊",
              fist_left: "🤛",
              fist_right: "🤜",
              flags: "🎏",
              flashlight: "🔦",
              fleur_de_lis: "⚜️",
              flight_arrival: "🛬",
              flight_departure: "🛫",
              floppy_disk: "💾",
              flower_playing_cards: "🎴",
              flushed: "😳",
              fog: "🌫",
              foggy: "🌁",
              football: "🏈",
              footprints: "👣",
              fork_and_knife: "🍴",
              fountain: "⛲️",
              fountain_pen: "🖋",
              four_leaf_clover: "🍀",
              fox_face: "🦊",
              framed_picture: "🖼",
              free: "🆓",
              fried_egg: "🍳",
              fried_shrimp: "🍤",
              fries: "🍟",
              frog: "🐸",
              frowning: "😦",
              frowning_face: "☹️",
              frowning_man: "🙍&zwj;♂️",
              frowning_woman: "🙍",
              middle_finger: "🖕",
              fuelpump: "⛽️",
              full_moon: "🌕",
              full_moon_with_face: "🌝",
              funeral_urn: "⚱️",
              game_die: "🎲",
              gear: "⚙️",
              gem: "💎",
              gemini: "♊️",
              ghost: "👻",
              gift: "🎁",
              gift_heart: "💝",
              girl: "👧",
              globe_with_meridians: "🌐",
              goal_net: "🥅",
              goat: "🐐",
              golf: "⛳️",
              golfing_man: "🏌️",
              golfing_woman: "🏌️&zwj;♀️",
              gorilla: "🦍",
              grapes: "🍇",
              green_apple: "🍏",
              green_book: "📗",
              green_heart: "💚",
              green_salad: "🥗",
              grey_exclamation: "❕",
              grey_question: "❔",
              grimacing: "😬",
              grin: "😁",
              grinning: "😀",
              guardsman: "💂",
              guardswoman: "💂&zwj;♀️",
              guitar: "🎸",
              gun: "🔫",
              haircut_woman: "💇",
              haircut_man: "💇&zwj;♂️",
              hamburger: "🍔",
              hammer: "🔨",
              hammer_and_pick: "⚒",
              hammer_and_wrench: "🛠",
              hamster: "🐹",
              hand: "✋",
              handbag: "👜",
              handshake: "🤝",
              hankey: "💩",
              hatched_chick: "🐥",
              hatching_chick: "🐣",
              headphones: "🎧",
              hear_no_evil: "🙉",
              heart: "❤️",
              heart_decoration: "💟",
              heart_eyes: "😍",
              heart_eyes_cat: "😻",
              heartbeat: "💓",
              heartpulse: "💗",
              hearts: "♥️",
              heavy_check_mark: "✔️",
              heavy_division_sign: "➗",
              heavy_dollar_sign: "💲",
              heavy_heart_exclamation: "❣️",
              heavy_minus_sign: "➖",
              heavy_multiplication_x: "✖️",
              heavy_plus_sign: "➕",
              helicopter: "🚁",
              herb: "🌿",
              hibiscus: "🌺",
              high_brightness: "🔆",
              high_heel: "👠",
              hocho: "🔪",
              hole: "🕳",
              honey_pot: "🍯",
              horse: "🐴",
              horse_racing: "🏇",
              hospital: "🏥",
              hot_pepper: "🌶",
              hotdog: "🌭",
              hotel: "🏨",
              hotsprings: "♨️",
              hourglass: "⌛️",
              hourglass_flowing_sand: "⏳",
              house: "🏠",
              house_with_garden: "🏡",
              houses: "🏘",
              hugs: "🤗",
              hushed: "😯",
              ice_cream: "🍨",
              ice_hockey: "🏒",
              ice_skate: "⛸",
              icecream: "🍦",
              id: "🆔",
              ideograph_advantage: "🉐",
              imp: "👿",
              inbox_tray: "📥",
              incoming_envelope: "📨",
              tipping_hand_woman: "💁",
              information_source: "ℹ️",
              innocent: "😇",
              interrobang: "⁉️",
              iphone: "📱",
              izakaya_lantern: "🏮",
              jack_o_lantern: "🎃",
              japan: "🗾",
              japanese_castle: "🏯",
              japanese_goblin: "👺",
              japanese_ogre: "👹",
              jeans: "👖",
              joy: "😂",
              joy_cat: "😹",
              joystick: "🕹",
              kaaba: "🕋",
              key: "🔑",
              keyboard: "⌨️",
              keycap_ten: "🔟",
              kick_scooter: "🛴",
              kimono: "👘",
              kiss: "💋",
              kissing: "😗",
              kissing_cat: "😽",
              kissing_closed_eyes: "😚",
              kissing_heart: "😘",
              kissing_smiling_eyes: "😙",
              kiwi_fruit: "🥝",
              koala: "🐨",
              koko: "🈁",
              label: "🏷",
              large_blue_circle: "🔵",
              large_blue_diamond: "🔷",
              large_orange_diamond: "🔶",
              last_quarter_moon: "🌗",
              last_quarter_moon_with_face: "🌜",
              latin_cross: "✝️",
              laughing: "😆",
              leaves: "🍃",
              ledger: "📒",
              left_luggage: "🛅",
              left_right_arrow: "↔️",
              leftwards_arrow_with_hook: "↩️",
              lemon: "🍋",
              leo: "♌️",
              leopard: "🐆",
              level_slider: "🎚",
              libra: "♎️",
              light_rail: "🚈",
              link: "🔗",
              lion: "🦁",
              lips: "👄",
              lipstick: "💄",
              lizard: "🦎",
              lock: "🔒",
              lock_with_ink_pen: "🔏",
              lollipop: "🍭",
              loop: "➿",
              loud_sound: "🔊",
              loudspeaker: "📢",
              love_hotel: "🏩",
              love_letter: "💌",
              low_brightness: "🔅",
              lying_face: "🤥",
              m: "Ⓜ️",
              mag: "🔍",
              mag_right: "🔎",
              mahjong: "🀄️",
              mailbox: "📫",
              mailbox_closed: "📪",
              mailbox_with_mail: "📬",
              mailbox_with_no_mail: "📭",
              man: "👨",
              man_artist: "👨&zwj;🎨",
              man_astronaut: "👨&zwj;🚀",
              man_cartwheeling: "🤸&zwj;♂️",
              man_cook: "👨&zwj;🍳",
              man_dancing: "🕺",
              man_facepalming: "🤦&zwj;♂️",
              man_factory_worker: "👨&zwj;🏭",
              man_farmer: "👨&zwj;🌾",
              man_firefighter: "👨&zwj;🚒",
              man_health_worker: "👨&zwj;⚕️",
              man_in_tuxedo: "🤵",
              man_judge: "👨&zwj;⚖️",
              man_juggling: "🤹&zwj;♂️",
              man_mechanic: "👨&zwj;🔧",
              man_office_worker: "👨&zwj;💼",
              man_pilot: "👨&zwj;✈️",
              man_playing_handball: "🤾&zwj;♂️",
              man_playing_water_polo: "🤽&zwj;♂️",
              man_scientist: "👨&zwj;🔬",
              man_shrugging: "🤷&zwj;♂️",
              man_singer: "👨&zwj;🎤",
              man_student: "👨&zwj;🎓",
              man_teacher: "👨&zwj;🏫",
              man_technologist: "👨&zwj;💻",
              man_with_gua_pi_mao: "👲",
              man_with_turban: "👳",
              tangerine: "🍊",
              mans_shoe: "👞",
              mantelpiece_clock: "🕰",
              maple_leaf: "🍁",
              martial_arts_uniform: "🥋",
              mask: "😷",
              massage_woman: "💆",
              massage_man: "💆&zwj;♂️",
              meat_on_bone: "🍖",
              medal_military: "🎖",
              medal_sports: "🏅",
              mega: "📣",
              melon: "🍈",
              memo: "📝",
              men_wrestling: "🤼&zwj;♂️",
              menorah: "🕎",
              mens: "🚹",
              metal: "🤘",
              metro: "🚇",
              microphone: "🎤",
              microscope: "🔬",
              milk_glass: "🥛",
              milky_way: "🌌",
              minibus: "🚐",
              minidisc: "💽",
              mobile_phone_off: "📴",
              money_mouth_face: "🤑",
              money_with_wings: "💸",
              moneybag: "💰",
              monkey: "🐒",
              monkey_face: "🐵",
              monorail: "🚝",
              moon: "🌔",
              mortar_board: "🎓",
              mosque: "🕌",
              motor_boat: "🛥",
              motor_scooter: "🛵",
              motorcycle: "🏍",
              motorway: "🛣",
              mount_fuji: "🗻",
              mountain: "⛰",
              mountain_biking_man: "🚵",
              mountain_biking_woman: "🚵&zwj;♀️",
              mountain_cableway: "🚠",
              mountain_railway: "🚞",
              mountain_snow: "🏔",
              mouse: "🐭",
              mouse2: "🐁",
              movie_camera: "🎥",
              moyai: "🗿",
              mrs_claus: "🤶",
              muscle: "💪",
              mushroom: "🍄",
              musical_keyboard: "🎹",
              musical_note: "🎵",
              musical_score: "🎼",
              mute: "🔇",
              nail_care: "💅",
              name_badge: "📛",
              national_park: "🏞",
              nauseated_face: "🤢",
              necktie: "👔",
              negative_squared_cross_mark: "❎",
              nerd_face: "🤓",
              neutral_face: "😐",
              new: "🆕",
              new_moon: "🌑",
              new_moon_with_face: "🌚",
              newspaper: "📰",
              newspaper_roll: "🗞",
              next_track_button: "⏭",
              ng: "🆖",
              no_good_man: "🙅&zwj;♂️",
              no_good_woman: "🙅",
              night_with_stars: "🌃",
              no_bell: "🔕",
              no_bicycles: "🚳",
              no_entry: "⛔️",
              no_entry_sign: "🚫",
              no_mobile_phones: "📵",
              no_mouth: "😶",
              no_pedestrians: "🚷",
              no_smoking: "🚭",
              "non-potable_water": "🚱",
              nose: "👃",
              notebook: "📓",
              notebook_with_decorative_cover: "📔",
              notes: "🎶",
              nut_and_bolt: "🔩",
              o: "⭕️",
              o2: "🅾️",
              ocean: "🌊",
              octopus: "🐙",
              oden: "🍢",
              office: "🏢",
              oil_drum: "🛢",
              ok: "🆗",
              ok_hand: "👌",
              ok_man: "🙆&zwj;♂️",
              ok_woman: "🙆",
              old_key: "🗝",
              older_man: "👴",
              older_woman: "👵",
              om: "🕉",
              on: "🔛",
              oncoming_automobile: "🚘",
              oncoming_bus: "🚍",
              oncoming_police_car: "🚔",
              oncoming_taxi: "🚖",
              open_file_folder: "📂",
              open_hands: "👐",
              open_mouth: "😮",
              open_umbrella: "☂️",
              ophiuchus: "⛎",
              orange_book: "📙",
              orthodox_cross: "☦️",
              outbox_tray: "📤",
              owl: "🦉",
              ox: "🐂",
              package: "📦",
              page_facing_up: "📄",
              page_with_curl: "📃",
              pager: "📟",
              paintbrush: "🖌",
              palm_tree: "🌴",
              pancakes: "🥞",
              panda_face: "🐼",
              paperclip: "📎",
              paperclips: "🖇",
              parasol_on_ground: "⛱",
              parking: "🅿️",
              part_alternation_mark: "〽️",
              partly_sunny: "⛅️",
              passenger_ship: "🛳",
              passport_control: "🛂",
              pause_button: "⏸",
              peace_symbol: "☮️",
              peach: "🍑",
              peanuts: "🥜",
              pear: "🍐",
              pen: "🖊",
              pencil2: "✏️",
              penguin: "🐧",
              pensive: "😔",
              performing_arts: "🎭",
              persevere: "😣",
              person_fencing: "🤺",
              pouting_woman: "🙎",
              phone: "☎️",
              pick: "⛏",
              pig: "🐷",
              pig2: "🐖",
              pig_nose: "🐽",
              pill: "💊",
              pineapple: "🍍",
              ping_pong: "🏓",
              pisces: "♓️",
              pizza: "🍕",
              place_of_worship: "🛐",
              plate_with_cutlery: "🍽",
              play_or_pause_button: "⏯",
              point_down: "👇",
              point_left: "👈",
              point_right: "👉",
              point_up: "☝️",
              point_up_2: "👆",
              police_car: "🚓",
              policewoman: "👮&zwj;♀️",
              poodle: "🐩",
              popcorn: "🍿",
              post_office: "🏣",
              postal_horn: "📯",
              postbox: "📮",
              potable_water: "🚰",
              potato: "🥔",
              pouch: "👝",
              poultry_leg: "🍗",
              pound: "💷",
              rage: "😡",
              pouting_cat: "😾",
              pouting_man: "🙎&zwj;♂️",
              pray: "🙏",
              prayer_beads: "📿",
              pregnant_woman: "🤰",
              previous_track_button: "⏮",
              prince: "🤴",
              princess: "👸",
              printer: "🖨",
              purple_heart: "💜",
              purse: "👛",
              pushpin: "📌",
              put_litter_in_its_place: "🚮",
              question: "❓",
              rabbit: "🐰",
              rabbit2: "🐇",
              racehorse: "🐎",
              racing_car: "🏎",
              radio: "📻",
              radio_button: "🔘",
              radioactive: "☢️",
              railway_car: "🚃",
              railway_track: "🛤",
              rainbow: "🌈",
              rainbow_flag: "🏳️&zwj;🌈",
              raised_back_of_hand: "🤚",
              raised_hand_with_fingers_splayed: "🖐",
              raised_hands: "🙌",
              raising_hand_woman: "🙋",
              raising_hand_man: "🙋&zwj;♂️",
              ram: "🐏",
              ramen: "🍜",
              rat: "🐀",
              record_button: "⏺",
              recycle: "♻️",
              red_circle: "🔴",
              registered: "®️",
              relaxed: "☺️",
              relieved: "😌",
              reminder_ribbon: "🎗",
              repeat: "🔁",
              repeat_one: "🔂",
              rescue_worker_helmet: "⛑",
              restroom: "🚻",
              revolving_hearts: "💞",
              rewind: "⏪",
              rhinoceros: "🦏",
              ribbon: "🎀",
              rice: "🍚",
              rice_ball: "🍙",
              rice_cracker: "🍘",
              rice_scene: "🎑",
              right_anger_bubble: "🗯",
              ring: "💍",
              robot: "🤖",
              rocket: "🚀",
              rofl: "🤣",
              roll_eyes: "🙄",
              roller_coaster: "🎢",
              rooster: "🐓",
              rose: "🌹",
              rosette: "🏵",
              rotating_light: "🚨",
              round_pushpin: "📍",
              rowing_man: "🚣",
              rowing_woman: "🚣&zwj;♀️",
              rugby_football: "🏉",
              running_man: "🏃",
              running_shirt_with_sash: "🎽",
              running_woman: "🏃&zwj;♀️",
              sa: "🈂️",
              sagittarius: "♐️",
              sake: "🍶",
              sandal: "👡",
              santa: "🎅",
              satellite: "📡",
              saxophone: "🎷",
              school: "🏫",
              school_satchel: "🎒",
              scissors: "✂️",
              scorpion: "🦂",
              scorpius: "♏️",
              scream: "😱",
              scream_cat: "🙀",
              scroll: "📜",
              seat: "💺",
              secret: "㊙️",
              see_no_evil: "🙈",
              seedling: "🌱",
              selfie: "🤳",
              shallow_pan_of_food: "🥘",
              shamrock: "☘️",
              shark: "🦈",
              shaved_ice: "🍧",
              sheep: "🐑",
              shell: "🐚",
              shield: "🛡",
              shinto_shrine: "⛩",
              ship: "🚢",
              shirt: "👕",
              shopping: "🛍",
              shopping_cart: "🛒",
              shower: "🚿",
              shrimp: "🦐",
              signal_strength: "📶",
              six_pointed_star: "🔯",
              ski: "🎿",
              skier: "⛷",
              skull: "💀",
              skull_and_crossbones: "☠️",
              sleeping: "😴",
              sleeping_bed: "🛌",
              sleepy: "😪",
              slightly_frowning_face: "🙁",
              slightly_smiling_face: "🙂",
              slot_machine: "🎰",
              small_airplane: "🛩",
              small_blue_diamond: "🔹",
              small_orange_diamond: "🔸",
              small_red_triangle: "🔺",
              small_red_triangle_down: "🔻",
              smile: "😄",
              smile_cat: "😸",
              smiley: "😃",
              smiley_cat: "😺",
              smiling_imp: "😈",
              smirk: "😏",
              smirk_cat: "😼",
              smoking: "🚬",
              snail: "🐌",
              snake: "🐍",
              sneezing_face: "🤧",
              snowboarder: "🏂",
              snowflake: "❄️",
              snowman: "⛄️",
              snowman_with_snow: "☃️",
              sob: "😭",
              soccer: "⚽️",
              soon: "🔜",
              sos: "🆘",
              sound: "🔉",
              space_invader: "👾",
              spades: "♠️",
              spaghetti: "🍝",
              sparkle: "❇️",
              sparkler: "🎇",
              sparkles: "✨",
              sparkling_heart: "💖",
              speak_no_evil: "🙊",
              speaker: "🔈",
              speaking_head: "🗣",
              speech_balloon: "💬",
              speedboat: "🚤",
              spider: "🕷",
              spider_web: "🕸",
              spiral_calendar: "🗓",
              spiral_notepad: "🗒",
              spoon: "🥄",
              squid: "🦑",
              stadium: "🏟",
              star: "⭐️",
              star2: "🌟",
              star_and_crescent: "☪️",
              star_of_david: "✡️",
              stars: "🌠",
              station: "🚉",
              statue_of_liberty: "🗽",
              steam_locomotive: "🚂",
              stew: "🍲",
              stop_button: "⏹",
              stop_sign: "🛑",
              stopwatch: "⏱",
              straight_ruler: "📏",
              strawberry: "🍓",
              stuck_out_tongue: "😛",
              stuck_out_tongue_closed_eyes: "😝",
              stuck_out_tongue_winking_eye: "😜",
              studio_microphone: "🎙",
              stuffed_flatbread: "🥙",
              sun_behind_large_cloud: "🌥",
              sun_behind_rain_cloud: "🌦",
              sun_behind_small_cloud: "🌤",
              sun_with_face: "🌞",
              sunflower: "🌻",
              sunglasses: "😎",
              sunny: "☀️",
              sunrise: "🌅",
              sunrise_over_mountains: "🌄",
              surfing_man: "🏄",
              surfing_woman: "🏄&zwj;♀️",
              sushi: "🍣",
              suspension_railway: "🚟",
              sweat: "😓",
              sweat_drops: "💦",
              sweat_smile: "😅",
              sweet_potato: "🍠",
              swimming_man: "🏊",
              swimming_woman: "🏊&zwj;♀️",
              symbols: "🔣",
              synagogue: "🕍",
              syringe: "💉",
              taco: "🌮",
              tada: "🎉",
              tanabata_tree: "🎋",
              taurus: "♉️",
              taxi: "🚕",
              tea: "🍵",
              telephone_receiver: "📞",
              telescope: "🔭",
              tennis: "🎾",
              tent: "⛺️",
              thermometer: "🌡",
              thinking: "🤔",
              thought_balloon: "💭",
              ticket: "🎫",
              tickets: "🎟",
              tiger: "🐯",
              tiger2: "🐅",
              timer_clock: "⏲",
              tipping_hand_man: "💁&zwj;♂️",
              tired_face: "😫",
              tm: "™️",
              toilet: "🚽",
              tokyo_tower: "🗼",
              tomato: "🍅",
              tongue: "👅",
              top: "🔝",
              tophat: "🎩",
              tornado: "🌪",
              trackball: "🖲",
              tractor: "🚜",
              traffic_light: "🚥",
              train: "🚋",
              train2: "🚆",
              tram: "🚊",
              triangular_flag_on_post: "🚩",
              triangular_ruler: "📐",
              trident: "🔱",
              triumph: "😤",
              trolleybus: "🚎",
              trophy: "🏆",
              tropical_drink: "🍹",
              tropical_fish: "🐠",
              truck: "🚚",
              trumpet: "🎺",
              tulip: "🌷",
              tumbler_glass: "🥃",
              turkey: "🦃",
              turtle: "🐢",
              tv: "📺",
              twisted_rightwards_arrows: "🔀",
              two_hearts: "💕",
              two_men_holding_hands: "👬",
              two_women_holding_hands: "👭",
              u5272: "🈹",
              u5408: "🈴",
              u55b6: "🈺",
              u6307: "🈯️",
              u6708: "🈷️",
              u6709: "🈶",
              u6e80: "🈵",
              u7121: "🈚️",
              u7533: "🈸",
              u7981: "🈲",
              u7a7a: "🈳",
              umbrella: "☔️",
              unamused: "😒",
              underage: "🔞",
              unicorn: "🦄",
              unlock: "🔓",
              up: "🆙",
              upside_down_face: "🙃",
              v: "✌️",
              vertical_traffic_light: "🚦",
              vhs: "📼",
              vibration_mode: "📳",
              video_camera: "📹",
              video_game: "🎮",
              violin: "🎻",
              virgo: "♍️",
              volcano: "🌋",
              volleyball: "🏐",
              vs: "🆚",
              vulcan_salute: "🖖",
              walking_man: "🚶",
              walking_woman: "🚶&zwj;♀️",
              waning_crescent_moon: "🌘",
              waning_gibbous_moon: "🌖",
              warning: "⚠️",
              wastebasket: "🗑",
              watch: "⌚️",
              water_buffalo: "🐃",
              watermelon: "🍉",
              wave: "👋",
              wavy_dash: "〰️",
              waxing_crescent_moon: "🌒",
              wc: "🚾",
              weary: "😩",
              wedding: "💒",
              weight_lifting_man: "🏋️",
              weight_lifting_woman: "🏋️&zwj;♀️",
              whale: "🐳",
              whale2: "🐋",
              wheel_of_dharma: "☸️",
              wheelchair: "♿️",
              white_check_mark: "✅",
              white_circle: "⚪️",
              white_flag: "🏳️",
              white_flower: "💮",
              white_large_square: "⬜️",
              white_medium_small_square: "◽️",
              white_medium_square: "◻️",
              white_small_square: "▫️",
              white_square_button: "🔳",
              wilted_flower: "🥀",
              wind_chime: "🎐",
              wind_face: "🌬",
              wine_glass: "🍷",
              wink: "😉",
              wolf: "🐺",
              woman: "👩",
              woman_artist: "👩&zwj;🎨",
              woman_astronaut: "👩&zwj;🚀",
              woman_cartwheeling: "🤸&zwj;♀️",
              woman_cook: "👩&zwj;🍳",
              woman_facepalming: "🤦&zwj;♀️",
              woman_factory_worker: "👩&zwj;🏭",
              woman_farmer: "👩&zwj;🌾",
              woman_firefighter: "👩&zwj;🚒",
              woman_health_worker: "👩&zwj;⚕️",
              woman_judge: "👩&zwj;⚖️",
              woman_juggling: "🤹&zwj;♀️",
              woman_mechanic: "👩&zwj;🔧",
              woman_office_worker: "👩&zwj;💼",
              woman_pilot: "👩&zwj;✈️",
              woman_playing_handball: "🤾&zwj;♀️",
              woman_playing_water_polo: "🤽&zwj;♀️",
              woman_scientist: "👩&zwj;🔬",
              woman_shrugging: "🤷&zwj;♀️",
              woman_singer: "👩&zwj;🎤",
              woman_student: "👩&zwj;🎓",
              woman_teacher: "👩&zwj;🏫",
              woman_technologist: "👩&zwj;💻",
              woman_with_turban: "👳&zwj;♀️",
              womans_clothes: "👚",
              womans_hat: "👒",
              women_wrestling: "🤼&zwj;♀️",
              womens: "🚺",
              world_map: "🗺",
              worried: "😟",
              wrench: "🔧",
              writing_hand: "✍️",
              x: "❌",
              yellow_heart: "💛",
              yen: "💴",
              yin_yang: "☯️",
              yum: "😋",
              zap: "⚡️",
              zipper_mouth_face: "🤐",
              zzz: "💤",
              octocat:
                '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
              showdown: `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`,
            }),
            (r.Converter = function (f) {
              var g = {},
                m = [],
                w = [],
                S = {},
                M = l,
                _ = { parsed: {}, raw: "", format: "" };
              T();
              function T() {
                f = f || {};
                for (var k in o) o.hasOwnProperty(k) && (g[k] = o[k]);
                if (typeof f == "object")
                  for (var j in f) f.hasOwnProperty(j) && (g[j] = f[j]);
                else
                  throw Error(
                    "Converter expects the passed parameter to be an object, but " +
                      typeof f +
                      " was passed instead.",
                  );
                g.extensions && r.helper.forEach(g.extensions, F);
              }
              function F(k, j) {
                if (((j = j || null), r.helper.isString(k)))
                  if (
                    ((k = r.helper.stdExtName(k)), (j = k), r.extensions[k])
                  ) {
                    console.warn(
                      "DEPRECATION WARNING: " +
                        k +
                        " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!",
                    ),
                      N(r.extensions[k], k);
                    return;
                  } else if (!r.helper.isUndefined(i[k])) k = i[k];
                  else
                    throw Error(
                      'Extension "' +
                        k +
                        '" could not be loaded. It was either not found or is not a valid extension.',
                    );
                typeof k == "function" && (k = k()),
                  r.helper.isArray(k) || (k = [k]);
                var B = c(k, j);
                if (!B.valid) throw Error(B.error);
                for (var U = 0; U < k.length; ++U) {
                  switch (k[U].type) {
                    case "lang":
                      m.push(k[U]);
                      break;
                    case "output":
                      w.push(k[U]);
                      break;
                  }
                  if (k[U].hasOwnProperty("listeners"))
                    for (var ie in k[U].listeners)
                      k[U].listeners.hasOwnProperty(ie) &&
                        I(ie, k[U].listeners[ie]);
                }
              }
              function N(k, j) {
                typeof k == "function" && (k = k(new r.Converter())),
                  r.helper.isArray(k) || (k = [k]);
                var B = c(k, j);
                if (!B.valid) throw Error(B.error);
                for (var U = 0; U < k.length; ++U)
                  switch (k[U].type) {
                    case "lang":
                      m.push(k[U]);
                      break;
                    case "output":
                      w.push(k[U]);
                      break;
                    default:
                      throw Error(
                        "Extension loader error: Type unrecognized!!!",
                      );
                  }
              }
              function I(k, j) {
                if (!r.helper.isString(k))
                  throw Error(
                    "Invalid argument in converter.listen() method: name must be a string, but " +
                      typeof k +
                      " given",
                  );
                if (typeof j != "function")
                  throw Error(
                    "Invalid argument in converter.listen() method: callback must be a function, but " +
                      typeof j +
                      " given",
                  );
                S.hasOwnProperty(k) || (S[k] = []), S[k].push(j);
              }
              function z(k) {
                var j = k.match(/^\s*/)[0].length,
                  B = new RegExp("^\\s{0," + j + "}", "gm");
                return k.replace(B, "");
              }
              (this._dispatch = function (j, B, U, ie) {
                if (S.hasOwnProperty(j))
                  for (var G = 0; G < S[j].length; ++G) {
                    var de = S[j][G](j, B, this, U, ie);
                    de && typeof de < "u" && (B = de);
                  }
                return B;
              }),
                (this.listen = function (k, j) {
                  return I(k, j), this;
                }),
                (this.makeHtml = function (k) {
                  if (!k) return k;
                  var j = {
                    gHtmlBlocks: [],
                    gHtmlMdBlocks: [],
                    gHtmlSpans: [],
                    gUrls: {},
                    gTitles: {},
                    gDimensions: {},
                    gListLevel: 0,
                    hashLinkCounts: {},
                    langExtensions: m,
                    outputModifiers: w,
                    converter: this,
                    ghCodeBlocks: [],
                    metadata: { parsed: {}, raw: "", format: "" },
                  };
                  return (
                    (k = k.replace(/¨/g, "¨T")),
                    (k = k.replace(/\$/g, "¨D")),
                    (k = k.replace(
                      /\r\n/g,
                      `
`,
                    )),
                    (k = k.replace(
                      /\r/g,
                      `
`,
                    )),
                    (k = k.replace(/\u00A0/g, "&nbsp;")),
                    g.smartIndentationFix && (k = z(k)),
                    (k =
                      `

` +
                      k +
                      `

`),
                    (k = r.subParser("detab")(k, g, j)),
                    (k = k.replace(/^[ \t]+$/gm, "")),
                    r.helper.forEach(m, function (B) {
                      k = r.subParser("runExtension")(B, k, g, j);
                    }),
                    (k = r.subParser("metadata")(k, g, j)),
                    (k = r.subParser("hashPreCodeTags")(k, g, j)),
                    (k = r.subParser("githubCodeBlocks")(k, g, j)),
                    (k = r.subParser("hashHTMLBlocks")(k, g, j)),
                    (k = r.subParser("hashCodeTags")(k, g, j)),
                    (k = r.subParser("stripLinkDefinitions")(k, g, j)),
                    (k = r.subParser("blockGamut")(k, g, j)),
                    (k = r.subParser("unhashHTMLSpans")(k, g, j)),
                    (k = r.subParser("unescapeSpecialChars")(k, g, j)),
                    (k = k.replace(/¨D/g, "$$")),
                    (k = k.replace(/¨T/g, "¨")),
                    (k = r.subParser("completeHTMLDocument")(k, g, j)),
                    r.helper.forEach(w, function (B) {
                      k = r.subParser("runExtension")(B, k, g, j);
                    }),
                    (_ = j.metadata),
                    k
                  );
                }),
                (this.makeMarkdown = this.makeMd =
                  function (k, j) {
                    if (
                      ((k = k.replace(
                        /\r\n/g,
                        `
`,
                      )),
                      (k = k.replace(
                        /\r/g,
                        `
`,
                      )),
                      (k = k.replace(/>[ \t]+</, ">¨NBSP;<")),
                      !j)
                    )
                      if (window && window.document) j = window.document;
                      else
                        throw new Error(
                          "HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM",
                        );
                    var B = j.createElement("div");
                    B.innerHTML = k;
                    var U = { preList: ke(B) };
                    pe(B);
                    for (
                      var ie = B.childNodes, G = "", de = 0;
                      de < ie.length;
                      de++
                    )
                      G += r.subParser("makeMarkdown.node")(ie[de], U);
                    function pe(Ae) {
                      for (var ve = 0; ve < Ae.childNodes.length; ++ve) {
                        var P = Ae.childNodes[ve];
                        P.nodeType === 3
                          ? !/\S/.test(P.nodeValue) &&
                            !/^[ ]+$/.test(P.nodeValue)
                            ? (Ae.removeChild(P), --ve)
                            : ((P.nodeValue = P.nodeValue
                                .split(
                                  `
`,
                                )
                                .join(" ")),
                              (P.nodeValue = P.nodeValue.replace(
                                /(\s)+/g,
                                "$1",
                              )))
                          : P.nodeType === 1 && pe(P);
                      }
                    }
                    function ke(Ae) {
                      for (
                        var ve = Ae.querySelectorAll("pre"), P = [], K = 0;
                        K < ve.length;
                        ++K
                      )
                        if (
                          ve[K].childElementCount === 1 &&
                          ve[K].firstChild.tagName.toLowerCase() === "code"
                        ) {
                          var Y = ve[K].firstChild.innerHTML.trim(),
                            ee =
                              ve[K].firstChild.getAttribute("data-language") ||
                              "";
                          if (ee === "")
                            for (
                              var me = ve[K].firstChild.className.split(" "),
                                C = 0;
                              C < me.length;
                              ++C
                            ) {
                              var A = me[C].match(/^language-(.+)$/);
                              if (A !== null) {
                                ee = A[1];
                                break;
                              }
                            }
                          (Y = r.helper.unescapeHTMLEntities(Y)),
                            P.push(Y),
                            (ve[K].outerHTML =
                              '<precode language="' +
                              ee +
                              '" precodenum="' +
                              K.toString() +
                              '"></precode>');
                        } else
                          P.push(ve[K].innerHTML),
                            (ve[K].innerHTML = ""),
                            ve[K].setAttribute("prenum", K.toString());
                      return P;
                    }
                    return G;
                  }),
                (this.setOption = function (k, j) {
                  g[k] = j;
                }),
                (this.getOption = function (k) {
                  return g[k];
                }),
                (this.getOptions = function () {
                  return g;
                }),
                (this.addExtension = function (k, j) {
                  (j = j || null), F(k, j);
                }),
                (this.useExtension = function (k) {
                  F(k);
                }),
                (this.setFlavor = function (k) {
                  if (!a.hasOwnProperty(k))
                    throw Error(k + " flavor was not found");
                  var j = a[k];
                  M = k;
                  for (var B in j) j.hasOwnProperty(B) && (g[B] = j[B]);
                }),
                (this.getFlavor = function () {
                  return M;
                }),
                (this.removeExtension = function (k) {
                  r.helper.isArray(k) || (k = [k]);
                  for (var j = 0; j < k.length; ++j) {
                    for (var B = k[j], U = 0; U < m.length; ++U)
                      m[U] === B && m.splice(U, 1);
                    for (var ie = 0; ie < w.length; ++ie)
                      w[ie] === B && w.splice(ie, 1);
                  }
                }),
                (this.getAllExtensions = function () {
                  return { language: m, output: w };
                }),
                (this.getMetadata = function (k) {
                  return k ? _.raw : _.parsed;
                }),
                (this.getMetadataFormat = function () {
                  return _.format;
                }),
                (this._setMetadataPair = function (k, j) {
                  _.parsed[k] = j;
                }),
                (this._setMetadataFormat = function (k) {
                  _.format = k;
                }),
                (this._setMetadataRaw = function (k) {
                  _.raw = k;
                });
            }),
            r.subParser("anchors", function (f, g, m) {
              f = m.converter._dispatch("anchors.before", f, g, m);
              var w = function (S, M, _, T, F, N, I) {
                if (
                  (r.helper.isUndefined(I) && (I = ""),
                  (_ = _.toLowerCase()),
                  S.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
                )
                  T = "";
                else if (!T)
                  if (
                    (_ || (_ = M.toLowerCase().replace(/ ?\n/g, " ")),
                    (T = "#" + _),
                    !r.helper.isUndefined(m.gUrls[_]))
                  )
                    (T = m.gUrls[_]),
                      r.helper.isUndefined(m.gTitles[_]) || (I = m.gTitles[_]);
                  else return S;
                T = T.replace(
                  r.helper.regexes.asteriskDashAndColon,
                  r.helper.escapeCharactersCallback,
                );
                var z = '<a href="' + T + '"';
                return (
                  I !== "" &&
                    I !== null &&
                    ((I = I.replace(/"/g, "&quot;")),
                    (I = I.replace(
                      r.helper.regexes.asteriskDashAndColon,
                      r.helper.escapeCharactersCallback,
                    )),
                    (z += ' title="' + I + '"')),
                  g.openLinksInNewWindow &&
                    !/^#/.test(T) &&
                    (z += ' rel="noopener noreferrer" target="¨E95Eblank"'),
                  (z += ">" + M + "</a>"),
                  z
                );
              };
              return (
                (f = f.replace(
                  /\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,
                  w,
                )),
                (f = f.replace(
                  /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
                  w,
                )),
                (f = f.replace(
                  /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
                  w,
                )),
                (f = f.replace(/\[([^\[\]]+)]()()()()()/g, w)),
                g.ghMentions &&
                  (f = f.replace(
                    /(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim,
                    function (S, M, _, T, F) {
                      if (_ === "\\") return M + T;
                      if (!r.helper.isString(g.ghMentionsLink))
                        throw new Error(
                          "ghMentionsLink option must be a string",
                        );
                      var N = g.ghMentionsLink.replace(/\{u}/g, F),
                        I = "";
                      return (
                        g.openLinksInNewWindow &&
                          (I =
                            ' rel="noopener noreferrer" target="¨E95Eblank"'),
                        M + '<a href="' + N + '"' + I + ">" + T + "</a>"
                      );
                    },
                  )),
                (f = m.converter._dispatch("anchors.after", f, g, m)),
                f
              );
            });
          var h =
              /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
            p =
              /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
            y = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
            b =
              /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
            x = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
            v = function (f) {
              return function (g, m, w, S, M, _, T) {
                w = w.replace(
                  r.helper.regexes.asteriskDashAndColon,
                  r.helper.escapeCharactersCallback,
                );
                var F = w,
                  N = "",
                  I = "",
                  z = m || "",
                  k = T || "";
                return (
                  /^www\./i.test(w) &&
                    (w = w.replace(/^www\./i, "http://www.")),
                  f.excludeTrailingPunctuationFromURLs && _ && (N = _),
                  f.openLinksInNewWindow &&
                    (I = ' rel="noopener noreferrer" target="¨E95Eblank"'),
                  z + '<a href="' + w + '"' + I + ">" + F + "</a>" + N + k
                );
              };
            },
            E = function (f, g) {
              return function (m, w, S) {
                var M = "mailto:";
                return (
                  (w = w || ""),
                  (S = r.subParser("unescapeSpecialChars")(S, f, g)),
                  f.encodeEmails
                    ? ((M = r.helper.encodeEmailAddress(M + S)),
                      (S = r.helper.encodeEmailAddress(S)))
                    : (M = M + S),
                  w + '<a href="' + M + '">' + S + "</a>"
                );
              };
            };
          r.subParser("autoLinks", function (f, g, m) {
            return (
              (f = m.converter._dispatch("autoLinks.before", f, g, m)),
              (f = f.replace(y, v(g))),
              (f = f.replace(x, E(g, m))),
              (f = m.converter._dispatch("autoLinks.after", f, g, m)),
              f
            );
          }),
            r.subParser("simplifiedAutoLinks", function (f, g, m) {
              return (
                g.simplifiedAutoLink &&
                  ((f = m.converter._dispatch(
                    "simplifiedAutoLinks.before",
                    f,
                    g,
                    m,
                  )),
                  g.excludeTrailingPunctuationFromURLs
                    ? (f = f.replace(p, v(g)))
                    : (f = f.replace(h, v(g))),
                  (f = f.replace(b, E(g, m))),
                  (f = m.converter._dispatch(
                    "simplifiedAutoLinks.after",
                    f,
                    g,
                    m,
                  ))),
                f
              );
            }),
            r.subParser("blockGamut", function (f, g, m) {
              return (
                (f = m.converter._dispatch("blockGamut.before", f, g, m)),
                (f = r.subParser("blockQuotes")(f, g, m)),
                (f = r.subParser("headers")(f, g, m)),
                (f = r.subParser("horizontalRule")(f, g, m)),
                (f = r.subParser("lists")(f, g, m)),
                (f = r.subParser("codeBlocks")(f, g, m)),
                (f = r.subParser("tables")(f, g, m)),
                (f = r.subParser("hashHTMLBlocks")(f, g, m)),
                (f = r.subParser("paragraphs")(f, g, m)),
                (f = m.converter._dispatch("blockGamut.after", f, g, m)),
                f
              );
            }),
            r.subParser("blockQuotes", function (f, g, m) {
              (f = m.converter._dispatch("blockQuotes.before", f, g, m)),
                (f =
                  f +
                  `

`);
              var w = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
              return (
                g.splitAdjacentBlockquotes &&
                  (w = /^ {0,3}>[\s\S]*?(?:\n\n)/gm),
                (f = f.replace(w, function (S) {
                  return (
                    (S = S.replace(/^[ \t]*>[ \t]?/gm, "")),
                    (S = S.replace(/¨0/g, "")),
                    (S = S.replace(/^[ \t]+$/gm, "")),
                    (S = r.subParser("githubCodeBlocks")(S, g, m)),
                    (S = r.subParser("blockGamut")(S, g, m)),
                    (S = S.replace(/(^|\n)/g, "$1  ")),
                    (S = S.replace(
                      /(\s*<pre>[^\r]+?<\/pre>)/gm,
                      function (M, _) {
                        var T = _;
                        return (
                          (T = T.replace(/^  /gm, "¨0")),
                          (T = T.replace(/¨0/g, "")),
                          T
                        );
                      },
                    )),
                    r.subParser("hashBlock")(
                      `<blockquote>
` +
                        S +
                        `
</blockquote>`,
                      g,
                      m,
                    )
                  );
                })),
                (f = m.converter._dispatch("blockQuotes.after", f, g, m)),
                f
              );
            }),
            r.subParser("codeBlocks", function (f, g, m) {
              (f = m.converter._dispatch("codeBlocks.before", f, g, m)),
                (f += "¨0");
              var w =
                /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
              return (
                (f = f.replace(w, function (S, M, _) {
                  var T = M,
                    F = _,
                    N = `
`;
                  return (
                    (T = r.subParser("outdent")(T, g, m)),
                    (T = r.subParser("encodeCode")(T, g, m)),
                    (T = r.subParser("detab")(T, g, m)),
                    (T = T.replace(/^\n+/g, "")),
                    (T = T.replace(/\n+$/g, "")),
                    g.omitExtraWLInCodeBlocks && (N = ""),
                    (T = "<pre><code>" + T + N + "</code></pre>"),
                    r.subParser("hashBlock")(T, g, m) + F
                  );
                })),
                (f = f.replace(/¨0/, "")),
                (f = m.converter._dispatch("codeBlocks.after", f, g, m)),
                f
              );
            }),
            r.subParser("codeSpans", function (f, g, m) {
              return (
                (f = m.converter._dispatch("codeSpans.before", f, g, m)),
                typeof f > "u" && (f = ""),
                (f = f.replace(
                  /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
                  function (w, S, M, _) {
                    var T = _;
                    return (
                      (T = T.replace(/^([ \t]*)/g, "")),
                      (T = T.replace(/[ \t]*$/g, "")),
                      (T = r.subParser("encodeCode")(T, g, m)),
                      (T = S + "<code>" + T + "</code>"),
                      (T = r.subParser("hashHTMLSpans")(T, g, m)),
                      T
                    );
                  },
                )),
                (f = m.converter._dispatch("codeSpans.after", f, g, m)),
                f
              );
            }),
            r.subParser("completeHTMLDocument", function (f, g, m) {
              if (!g.completeHTMLDocument) return f;
              f = m.converter._dispatch("completeHTMLDocument.before", f, g, m);
              var w = "html",
                S = `<!DOCTYPE HTML>
`,
                M = "",
                _ = `<meta charset="utf-8">
`,
                T = "",
                F = "";
              typeof m.metadata.parsed.doctype < "u" &&
                ((S =
                  "<!DOCTYPE " +
                  m.metadata.parsed.doctype +
                  `>
`),
                (w = m.metadata.parsed.doctype.toString().toLowerCase()),
                (w === "html" || w === "html5") &&
                  (_ = '<meta charset="utf-8">'));
              for (var N in m.metadata.parsed)
                if (m.metadata.parsed.hasOwnProperty(N))
                  switch (N.toLowerCase()) {
                    case "doctype":
                      break;
                    case "title":
                      M =
                        "<title>" +
                        m.metadata.parsed.title +
                        `</title>
`;
                      break;
                    case "charset":
                      w === "html" || w === "html5"
                        ? (_ =
                            '<meta charset="' +
                            m.metadata.parsed.charset +
                            `">
`)
                        : (_ =
                            '<meta name="charset" content="' +
                            m.metadata.parsed.charset +
                            `">
`);
                      break;
                    case "language":
                    case "lang":
                      (T = ' lang="' + m.metadata.parsed[N] + '"'),
                        (F +=
                          '<meta name="' +
                          N +
                          '" content="' +
                          m.metadata.parsed[N] +
                          `">
`);
                      break;
                    default:
                      F +=
                        '<meta name="' +
                        N +
                        '" content="' +
                        m.metadata.parsed[N] +
                        `">
`;
                  }
              return (
                (f =
                  S +
                  "<html" +
                  T +
                  `>
<head>
` +
                  M +
                  _ +
                  F +
                  `</head>
<body>
` +
                  f.trim() +
                  `
</body>
</html>`),
                (f = m.converter._dispatch(
                  "completeHTMLDocument.after",
                  f,
                  g,
                  m,
                )),
                f
              );
            }),
            r.subParser("detab", function (f, g, m) {
              return (
                (f = m.converter._dispatch("detab.before", f, g, m)),
                (f = f.replace(/\t(?=\t)/g, "    ")),
                (f = f.replace(/\t/g, "¨A¨B")),
                (f = f.replace(/¨B(.+?)¨A/g, function (w, S) {
                  for (var M = S, _ = 4 - (M.length % 4), T = 0; T < _; T++)
                    M += " ";
                  return M;
                })),
                (f = f.replace(/¨A/g, "    ")),
                (f = f.replace(/¨B/g, "")),
                (f = m.converter._dispatch("detab.after", f, g, m)),
                f
              );
            }),
            r.subParser("ellipsis", function (f, g, m) {
              return (
                g.ellipsis &&
                  ((f = m.converter._dispatch("ellipsis.before", f, g, m)),
                  (f = f.replace(/\.\.\./g, "…")),
                  (f = m.converter._dispatch("ellipsis.after", f, g, m))),
                f
              );
            }),
            r.subParser("emoji", function (f, g, m) {
              if (!g.emoji) return f;
              f = m.converter._dispatch("emoji.before", f, g, m);
              var w = /:([\S]+?):/g;
              return (
                (f = f.replace(w, function (S, M) {
                  return r.helper.emojis.hasOwnProperty(M)
                    ? r.helper.emojis[M]
                    : S;
                })),
                (f = m.converter._dispatch("emoji.after", f, g, m)),
                f
              );
            }),
            r.subParser("encodeAmpsAndAngles", function (f, g, m) {
              return (
                (f = m.converter._dispatch(
                  "encodeAmpsAndAngles.before",
                  f,
                  g,
                  m,
                )),
                (f = f.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")),
                (f = f.replace(/<(?![a-z\/?$!])/gi, "&lt;")),
                (f = f.replace(/</g, "&lt;")),
                (f = f.replace(/>/g, "&gt;")),
                (f = m.converter._dispatch(
                  "encodeAmpsAndAngles.after",
                  f,
                  g,
                  m,
                )),
                f
              );
            }),
            r.subParser("encodeBackslashEscapes", function (f, g, m) {
              return (
                (f = m.converter._dispatch(
                  "encodeBackslashEscapes.before",
                  f,
                  g,
                  m,
                )),
                (f = f.replace(/\\(\\)/g, r.helper.escapeCharactersCallback)),
                (f = f.replace(
                  /\\([`*_{}\[\]()>#+.!~=|:-])/g,
                  r.helper.escapeCharactersCallback,
                )),
                (f = m.converter._dispatch(
                  "encodeBackslashEscapes.after",
                  f,
                  g,
                  m,
                )),
                f
              );
            }),
            r.subParser("encodeCode", function (f, g, m) {
              return (
                (f = m.converter._dispatch("encodeCode.before", f, g, m)),
                (f = f
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(
                    /([*_{}\[\]\\=~-])/g,
                    r.helper.escapeCharactersCallback,
                  )),
                (f = m.converter._dispatch("encodeCode.after", f, g, m)),
                f
              );
            }),
            r.subParser(
              "escapeSpecialCharsWithinTagAttributes",
              function (f, g, m) {
                f = m.converter._dispatch(
                  "escapeSpecialCharsWithinTagAttributes.before",
                  f,
                  g,
                  m,
                );
                var w = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
                  S = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
                return (
                  (f = f.replace(w, function (M) {
                    return M.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(
                      /([\\`*_~=|])/g,
                      r.helper.escapeCharactersCallback,
                    );
                  })),
                  (f = f.replace(S, function (M) {
                    return M.replace(
                      /([\\`*_~=|])/g,
                      r.helper.escapeCharactersCallback,
                    );
                  })),
                  (f = m.converter._dispatch(
                    "escapeSpecialCharsWithinTagAttributes.after",
                    f,
                    g,
                    m,
                  )),
                  f
                );
              },
            ),
            r.subParser("githubCodeBlocks", function (f, g, m) {
              return g.ghCodeBlocks
                ? ((f = m.converter._dispatch(
                    "githubCodeBlocks.before",
                    f,
                    g,
                    m,
                  )),
                  (f += "¨0"),
                  (f = f.replace(
                    /(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,
                    function (w, S, M, _) {
                      var T = g.omitExtraWLInCodeBlocks
                        ? ""
                        : `
`;
                      return (
                        (_ = r.subParser("encodeCode")(_, g, m)),
                        (_ = r.subParser("detab")(_, g, m)),
                        (_ = _.replace(/^\n+/g, "")),
                        (_ = _.replace(/\n+$/g, "")),
                        (_ =
                          "<pre><code" +
                          (M ? ' class="' + M + " language-" + M + '"' : "") +
                          ">" +
                          _ +
                          T +
                          "</code></pre>"),
                        (_ = r.subParser("hashBlock")(_, g, m)),
                        `

¨G` +
                          (m.ghCodeBlocks.push({ text: w, codeblock: _ }) - 1) +
                          `G

`
                      );
                    },
                  )),
                  (f = f.replace(/¨0/, "")),
                  m.converter._dispatch("githubCodeBlocks.after", f, g, m))
                : f;
            }),
            r.subParser("hashBlock", function (f, g, m) {
              return (
                (f = m.converter._dispatch("hashBlock.before", f, g, m)),
                (f = f.replace(/(^\n+|\n+$)/g, "")),
                (f =
                  `

¨K` +
                  (m.gHtmlBlocks.push(f) - 1) +
                  `K

`),
                (f = m.converter._dispatch("hashBlock.after", f, g, m)),
                f
              );
            }),
            r.subParser("hashCodeTags", function (f, g, m) {
              f = m.converter._dispatch("hashCodeTags.before", f, g, m);
              var w = function (S, M, _, T) {
                var F = _ + r.subParser("encodeCode")(M, g, m) + T;
                return "¨C" + (m.gHtmlSpans.push(F) - 1) + "C";
              };
              return (
                (f = r.helper.replaceRecursiveRegExp(
                  f,
                  w,
                  "<code\\b[^>]*>",
                  "</code>",
                  "gim",
                )),
                (f = m.converter._dispatch("hashCodeTags.after", f, g, m)),
                f
              );
            }),
            r.subParser("hashElement", function (f, g, m) {
              return function (w, S) {
                var M = S;
                return (
                  (M = M.replace(
                    /\n\n/g,
                    `
`,
                  )),
                  (M = M.replace(/^\n/, "")),
                  (M = M.replace(/\n+$/g, "")),
                  (M =
                    `

¨K` +
                    (m.gHtmlBlocks.push(M) - 1) +
                    `K

`),
                  M
                );
              };
            }),
            r.subParser("hashHTMLBlocks", function (f, g, m) {
              f = m.converter._dispatch("hashHTMLBlocks.before", f, g, m);
              var w = [
                  "pre",
                  "div",
                  "h1",
                  "h2",
                  "h3",
                  "h4",
                  "h5",
                  "h6",
                  "blockquote",
                  "table",
                  "dl",
                  "ol",
                  "ul",
                  "script",
                  "noscript",
                  "form",
                  "fieldset",
                  "iframe",
                  "math",
                  "style",
                  "section",
                  "header",
                  "footer",
                  "nav",
                  "article",
                  "aside",
                  "address",
                  "audio",
                  "canvas",
                  "figure",
                  "hgroup",
                  "output",
                  "video",
                  "p",
                ],
                S = function (k, j, B, U) {
                  var ie = k;
                  return (
                    B.search(/\bmarkdown\b/) !== -1 &&
                      (ie = B + m.converter.makeHtml(j) + U),
                    `

¨K` +
                      (m.gHtmlBlocks.push(ie) - 1) +
                      `K

`
                  );
                };
              g.backslashEscapesHTMLTags &&
                (f = f.replace(/\\<(\/?[^>]+?)>/g, function (k, j) {
                  return "&lt;" + j + "&gt;";
                }));
              for (var M = 0; M < w.length; ++M)
                for (
                  var _,
                    T = new RegExp("^ {0,3}(<" + w[M] + "\\b[^>]*>)", "im"),
                    F = "<" + w[M] + "\\b[^>]*>",
                    N = "</" + w[M] + ">";
                  (_ = r.helper.regexIndexOf(f, T)) !== -1;

                ) {
                  var I = r.helper.splitAtIndex(f, _),
                    z = r.helper.replaceRecursiveRegExp(I[1], S, F, N, "im");
                  if (z === I[1]) break;
                  f = I[0].concat(z);
                }
              return (
                (f = f.replace(
                  /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
                  r.subParser("hashElement")(f, g, m),
                )),
                (f = r.helper.replaceRecursiveRegExp(
                  f,
                  function (k) {
                    return (
                      `

¨K` +
                      (m.gHtmlBlocks.push(k) - 1) +
                      `K

`
                    );
                  },
                  "^ {0,3}<!--",
                  "-->",
                  "gm",
                )),
                (f = f.replace(
                  /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
                  r.subParser("hashElement")(f, g, m),
                )),
                (f = m.converter._dispatch("hashHTMLBlocks.after", f, g, m)),
                f
              );
            }),
            r.subParser("hashHTMLSpans", function (f, g, m) {
              f = m.converter._dispatch("hashHTMLSpans.before", f, g, m);
              function w(S) {
                return "¨C" + (m.gHtmlSpans.push(S) - 1) + "C";
              }
              return (
                (f = f.replace(/<[^>]+?\/>/gi, function (S) {
                  return w(S);
                })),
                (f = f.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (S) {
                  return w(S);
                })),
                (f = f.replace(
                  /<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,
                  function (S) {
                    return w(S);
                  },
                )),
                (f = f.replace(/<[^>]+?>/gi, function (S) {
                  return w(S);
                })),
                (f = m.converter._dispatch("hashHTMLSpans.after", f, g, m)),
                f
              );
            }),
            r.subParser("unhashHTMLSpans", function (f, g, m) {
              f = m.converter._dispatch("unhashHTMLSpans.before", f, g, m);
              for (var w = 0; w < m.gHtmlSpans.length; ++w) {
                for (var S = m.gHtmlSpans[w], M = 0; /¨C(\d+)C/.test(S); ) {
                  var _ = RegExp.$1;
                  if (
                    ((S = S.replace("¨C" + _ + "C", m.gHtmlSpans[_])), M === 10)
                  ) {
                    console.error("maximum nesting of 10 spans reached!!!");
                    break;
                  }
                  ++M;
                }
                f = f.replace("¨C" + w + "C", S);
              }
              return (
                (f = m.converter._dispatch("unhashHTMLSpans.after", f, g, m)), f
              );
            }),
            r.subParser("hashPreCodeTags", function (f, g, m) {
              f = m.converter._dispatch("hashPreCodeTags.before", f, g, m);
              var w = function (S, M, _, T) {
                var F = _ + r.subParser("encodeCode")(M, g, m) + T;
                return (
                  `

¨G` +
                  (m.ghCodeBlocks.push({ text: S, codeblock: F }) - 1) +
                  `G

`
                );
              };
              return (
                (f = r.helper.replaceRecursiveRegExp(
                  f,
                  w,
                  "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>",
                  "^ {0,3}</code>\\s*</pre>",
                  "gim",
                )),
                (f = m.converter._dispatch("hashPreCodeTags.after", f, g, m)),
                f
              );
            }),
            r.subParser("headers", function (f, g, m) {
              f = m.converter._dispatch("headers.before", f, g, m);
              var w = isNaN(parseInt(g.headerLevelStart))
                  ? 1
                  : parseInt(g.headerLevelStart),
                S = g.smoothLivePreview
                  ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm
                  : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
                M = g.smoothLivePreview
                  ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm
                  : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
              (f = f.replace(S, function (F, N) {
                var I = r.subParser("spanGamut")(N, g, m),
                  z = g.noHeaderId ? "" : ' id="' + T(N) + '"',
                  k = w,
                  j = "<h" + k + z + ">" + I + "</h" + k + ">";
                return r.subParser("hashBlock")(j, g, m);
              })),
                (f = f.replace(M, function (F, N) {
                  var I = r.subParser("spanGamut")(N, g, m),
                    z = g.noHeaderId ? "" : ' id="' + T(N) + '"',
                    k = w + 1,
                    j = "<h" + k + z + ">" + I + "</h" + k + ">";
                  return r.subParser("hashBlock")(j, g, m);
                }));
              var _ = g.requireSpaceBeforeHeadingText
                ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm
                : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
              f = f.replace(_, function (F, N, I) {
                var z = I;
                g.customizedHeaderId &&
                  (z = I.replace(/\s?\{([^{]+?)}\s*$/, ""));
                var k = r.subParser("spanGamut")(z, g, m),
                  j = g.noHeaderId ? "" : ' id="' + T(I) + '"',
                  B = w - 1 + N.length,
                  U = "<h" + B + j + ">" + k + "</h" + B + ">";
                return r.subParser("hashBlock")(U, g, m);
              });
              function T(F) {
                var N, I;
                if (g.customizedHeaderId) {
                  var z = F.match(/\{([^{]+?)}\s*$/);
                  z && z[1] && (F = z[1]);
                }
                return (
                  (N = F),
                  r.helper.isString(g.prefixHeaderId)
                    ? (I = g.prefixHeaderId)
                    : g.prefixHeaderId === !0
                      ? (I = "section-")
                      : (I = ""),
                  g.rawPrefixHeaderId || (N = I + N),
                  g.ghCompatibleHeaderId
                    ? (N = N.replace(/ /g, "-")
                        .replace(/&amp;/g, "")
                        .replace(/¨T/g, "")
                        .replace(/¨D/g, "")
                        .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "")
                        .toLowerCase())
                    : g.rawHeaderId
                      ? (N = N.replace(/ /g, "-")
                          .replace(/&amp;/g, "&")
                          .replace(/¨T/g, "¨")
                          .replace(/¨D/g, "$")
                          .replace(/["']/g, "-")
                          .toLowerCase())
                      : (N = N.replace(/[^\w]/g, "").toLowerCase()),
                  g.rawPrefixHeaderId && (N = I + N),
                  m.hashLinkCounts[N]
                    ? (N = N + "-" + m.hashLinkCounts[N]++)
                    : (m.hashLinkCounts[N] = 1),
                  N
                );
              }
              return (f = m.converter._dispatch("headers.after", f, g, m)), f;
            }),
            r.subParser("horizontalRule", function (f, g, m) {
              f = m.converter._dispatch("horizontalRule.before", f, g, m);
              var w = r.subParser("hashBlock")("<hr />", g, m);
              return (
                (f = f.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, w)),
                (f = f.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, w)),
                (f = f.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, w)),
                (f = m.converter._dispatch("horizontalRule.after", f, g, m)),
                f
              );
            }),
            r.subParser("images", function (f, g, m) {
              f = m.converter._dispatch("images.before", f, g, m);
              var w =
                  /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
                S =
                  /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
                M =
                  /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
                _ = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
                T = /!\[([^\[\]]+)]()()()()()/g;
              function F(I, z, k, j, B, U, ie, G) {
                return (j = j.replace(/\s/g, "")), N(I, z, k, j, B, U, ie, G);
              }
              function N(I, z, k, j, B, U, ie, G) {
                var de = m.gUrls,
                  pe = m.gTitles,
                  ke = m.gDimensions;
                if (
                  ((k = k.toLowerCase()),
                  G || (G = ""),
                  I.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
                )
                  j = "";
                else if (j === "" || j === null)
                  if (
                    ((k === "" || k === null) &&
                      (k = z.toLowerCase().replace(/ ?\n/g, " ")),
                    (j = "#" + k),
                    !r.helper.isUndefined(de[k]))
                  )
                    (j = de[k]),
                      r.helper.isUndefined(pe[k]) || (G = pe[k]),
                      r.helper.isUndefined(ke[k]) ||
                        ((B = ke[k].width), (U = ke[k].height));
                  else return I;
                (z = z
                  .replace(/"/g, "&quot;")
                  .replace(
                    r.helper.regexes.asteriskDashAndColon,
                    r.helper.escapeCharactersCallback,
                  )),
                  (j = j.replace(
                    r.helper.regexes.asteriskDashAndColon,
                    r.helper.escapeCharactersCallback,
                  ));
                var Ae = '<img src="' + j + '" alt="' + z + '"';
                return (
                  G &&
                    r.helper.isString(G) &&
                    ((G = G.replace(/"/g, "&quot;").replace(
                      r.helper.regexes.asteriskDashAndColon,
                      r.helper.escapeCharactersCallback,
                    )),
                    (Ae += ' title="' + G + '"')),
                  B &&
                    U &&
                    ((B = B === "*" ? "auto" : B),
                    (U = U === "*" ? "auto" : U),
                    (Ae += ' width="' + B + '"'),
                    (Ae += ' height="' + U + '"')),
                  (Ae += " />"),
                  Ae
                );
              }
              return (
                (f = f.replace(_, N)),
                (f = f.replace(M, F)),
                (f = f.replace(S, N)),
                (f = f.replace(w, N)),
                (f = f.replace(T, N)),
                (f = m.converter._dispatch("images.after", f, g, m)),
                f
              );
            }),
            r.subParser("italicsAndBold", function (f, g, m) {
              f = m.converter._dispatch("italicsAndBold.before", f, g, m);
              function w(S, M, _) {
                return M + S + _;
              }
              return (
                g.literalMidWordUnderscores
                  ? ((f = f.replace(/\b___(\S[\s\S]*?)___\b/g, function (S, M) {
                      return w(M, "<strong><em>", "</em></strong>");
                    })),
                    (f = f.replace(/\b__(\S[\s\S]*?)__\b/g, function (S, M) {
                      return w(M, "<strong>", "</strong>");
                    })),
                    (f = f.replace(/\b_(\S[\s\S]*?)_\b/g, function (S, M) {
                      return w(M, "<em>", "</em>");
                    })))
                  : ((f = f.replace(/___(\S[\s\S]*?)___/g, function (S, M) {
                      return /\S$/.test(M)
                        ? w(M, "<strong><em>", "</em></strong>")
                        : S;
                    })),
                    (f = f.replace(/__(\S[\s\S]*?)__/g, function (S, M) {
                      return /\S$/.test(M) ? w(M, "<strong>", "</strong>") : S;
                    })),
                    (f = f.replace(/_([^\s_][\s\S]*?)_/g, function (S, M) {
                      return /\S$/.test(M) ? w(M, "<em>", "</em>") : S;
                    }))),
                g.literalMidWordAsterisks
                  ? ((f = f.replace(
                      /([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,
                      function (S, M, _) {
                        return w(_, M + "<strong><em>", "</em></strong>");
                      },
                    )),
                    (f = f.replace(
                      /([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,
                      function (S, M, _) {
                        return w(_, M + "<strong>", "</strong>");
                      },
                    )),
                    (f = f.replace(
                      /([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,
                      function (S, M, _) {
                        return w(_, M + "<em>", "</em>");
                      },
                    )))
                  : ((f = f.replace(
                      /\*\*\*(\S[\s\S]*?)\*\*\*/g,
                      function (S, M) {
                        return /\S$/.test(M)
                          ? w(M, "<strong><em>", "</em></strong>")
                          : S;
                      },
                    )),
                    (f = f.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (S, M) {
                      return /\S$/.test(M) ? w(M, "<strong>", "</strong>") : S;
                    })),
                    (f = f.replace(/\*([^\s*][\s\S]*?)\*/g, function (S, M) {
                      return /\S$/.test(M) ? w(M, "<em>", "</em>") : S;
                    }))),
                (f = m.converter._dispatch("italicsAndBold.after", f, g, m)),
                f
              );
            }),
            r.subParser("lists", function (f, g, m) {
              function w(_, T) {
                m.gListLevel++,
                  (_ = _.replace(
                    /\n{2,}$/,
                    `
`,
                  )),
                  (_ += "¨0");
                var F =
                    /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
                  N = /\n[ \t]*\n(?!¨0)/.test(_);
                return (
                  g.disableForced4SpacesIndentedSublists &&
                    (F =
                      /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),
                  (_ = _.replace(F, function (I, z, k, j, B, U, ie) {
                    ie = ie && ie.trim() !== "";
                    var G = r.subParser("outdent")(B, g, m),
                      de = "";
                    return (
                      U &&
                        g.tasklists &&
                        ((de =
                          ' class="task-list-item" style="list-style-type: none;"'),
                        (G = G.replace(/^[ \t]*\[(x|X| )?]/m, function () {
                          var pe =
                            '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                          return ie && (pe += " checked"), (pe += ">"), pe;
                        }))),
                      (G = G.replace(
                        /^([-*+]|\d\.)[ \t]+[\S\n ]*/g,
                        function (pe) {
                          return "¨A" + pe;
                        },
                      )),
                      z || G.search(/\n{2,}/) > -1
                        ? ((G = r.subParser("githubCodeBlocks")(G, g, m)),
                          (G = r.subParser("blockGamut")(G, g, m)))
                        : ((G = r.subParser("lists")(G, g, m)),
                          (G = G.replace(/\n$/, "")),
                          (G = r.subParser("hashHTMLBlocks")(G, g, m)),
                          (G = G.replace(
                            /\n\n+/g,
                            `

`,
                          )),
                          N
                            ? (G = r.subParser("paragraphs")(G, g, m))
                            : (G = r.subParser("spanGamut")(G, g, m))),
                      (G = G.replace("¨A", "")),
                      (G =
                        "<li" +
                        de +
                        ">" +
                        G +
                        `</li>
`),
                      G
                    );
                  })),
                  (_ = _.replace(/¨0/g, "")),
                  m.gListLevel--,
                  T && (_ = _.replace(/\s+$/, "")),
                  _
                );
              }
              function S(_, T) {
                if (T === "ol") {
                  var F = _.match(/^ *(\d+)\./);
                  if (F && F[1] !== "1") return ' start="' + F[1] + '"';
                }
                return "";
              }
              function M(_, T, F) {
                var N = g.disableForced4SpacesIndentedSublists
                    ? /^ ?\d+\.[ \t]/gm
                    : /^ {0,3}\d+\.[ \t]/gm,
                  I = g.disableForced4SpacesIndentedSublists
                    ? /^ ?[*+-][ \t]/gm
                    : /^ {0,3}[*+-][ \t]/gm,
                  z = T === "ul" ? N : I,
                  k = "";
                if (_.search(z) !== -1)
                  (function B(U) {
                    var ie = U.search(z),
                      G = S(_, T);
                    ie !== -1
                      ? ((k +=
                          `

<` +
                          T +
                          G +
                          `>
` +
                          w(U.slice(0, ie), !!F) +
                          "</" +
                          T +
                          `>
`),
                        (T = T === "ul" ? "ol" : "ul"),
                        (z = T === "ul" ? N : I),
                        B(U.slice(ie)))
                      : (k +=
                          `

<` +
                          T +
                          G +
                          `>
` +
                          w(U, !!F) +
                          "</" +
                          T +
                          `>
`);
                  })(_);
                else {
                  var j = S(_, T);
                  k =
                    `

<` +
                    T +
                    j +
                    `>
` +
                    w(_, !!F) +
                    "</" +
                    T +
                    `>
`;
                }
                return k;
              }
              return (
                (f = m.converter._dispatch("lists.before", f, g, m)),
                (f += "¨0"),
                m.gListLevel
                  ? (f = f.replace(
                      /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                      function (_, T, F) {
                        var N = F.search(/[*+-]/g) > -1 ? "ul" : "ol";
                        return M(T, N, !0);
                      },
                    ))
                  : (f = f.replace(
                      /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                      function (_, T, F, N) {
                        var I = N.search(/[*+-]/g) > -1 ? "ul" : "ol";
                        return M(F, I, !1);
                      },
                    )),
                (f = f.replace(/¨0/, "")),
                (f = m.converter._dispatch("lists.after", f, g, m)),
                f
              );
            }),
            r.subParser("metadata", function (f, g, m) {
              if (!g.metadata) return f;
              f = m.converter._dispatch("metadata.before", f, g, m);
              function w(S) {
                (m.metadata.raw = S),
                  (S = S.replace(/&/g, "&amp;").replace(/"/g, "&quot;")),
                  (S = S.replace(/\n {4}/g, " ")),
                  S.replace(/^([\S ]+): +([\s\S]+?)$/gm, function (M, _, T) {
                    return (m.metadata.parsed[_] = T), "";
                  });
              }
              return (
                (f = f.replace(
                  /^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,
                  function (S, M, _) {
                    return w(_), "¨M";
                  },
                )),
                (f = f.replace(
                  /^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,
                  function (S, M, _) {
                    return M && (m.metadata.format = M), w(_), "¨M";
                  },
                )),
                (f = f.replace(/¨M/g, "")),
                (f = m.converter._dispatch("metadata.after", f, g, m)),
                f
              );
            }),
            r.subParser("outdent", function (f, g, m) {
              return (
                (f = m.converter._dispatch("outdent.before", f, g, m)),
                (f = f.replace(/^(\t|[ ]{1,4})/gm, "¨0")),
                (f = f.replace(/¨0/g, "")),
                (f = m.converter._dispatch("outdent.after", f, g, m)),
                f
              );
            }),
            r.subParser("paragraphs", function (f, g, m) {
              (f = m.converter._dispatch("paragraphs.before", f, g, m)),
                (f = f.replace(/^\n+/g, "")),
                (f = f.replace(/\n+$/g, ""));
              for (
                var w = f.split(/\n{2,}/g), S = [], M = w.length, _ = 0;
                _ < M;
                _++
              ) {
                var T = w[_];
                T.search(/¨(K|G)(\d+)\1/g) >= 0
                  ? S.push(T)
                  : T.search(/\S/) >= 0 &&
                    ((T = r.subParser("spanGamut")(T, g, m)),
                    (T = T.replace(/^([ \t]*)/g, "<p>")),
                    (T += "</p>"),
                    S.push(T));
              }
              for (M = S.length, _ = 0; _ < M; _++) {
                for (var F = "", N = S[_], I = !1; /¨(K|G)(\d+)\1/.test(N); ) {
                  var z = RegExp.$1,
                    k = RegExp.$2;
                  z === "K"
                    ? (F = m.gHtmlBlocks[k])
                    : I
                      ? (F = r.subParser("encodeCode")(
                          m.ghCodeBlocks[k].text,
                          g,
                          m,
                        ))
                      : (F = m.ghCodeBlocks[k].codeblock),
                    (F = F.replace(/\$/g, "$$$$")),
                    (N = N.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, F)),
                    /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(N) && (I = !0);
                }
                S[_] = N;
              }
              return (
                (f = S.join(`
`)),
                (f = f.replace(/^\n+/g, "")),
                (f = f.replace(/\n+$/g, "")),
                m.converter._dispatch("paragraphs.after", f, g, m)
              );
            }),
            r.subParser("runExtension", function (f, g, m, w) {
              if (f.filter) g = f.filter(g, w.converter, m);
              else if (f.regex) {
                var S = f.regex;
                S instanceof RegExp || (S = new RegExp(S, "g")),
                  (g = g.replace(S, f.replace));
              }
              return g;
            }),
            r.subParser("spanGamut", function (f, g, m) {
              return (
                (f = m.converter._dispatch("spanGamut.before", f, g, m)),
                (f = r.subParser("codeSpans")(f, g, m)),
                (f = r.subParser("escapeSpecialCharsWithinTagAttributes")(
                  f,
                  g,
                  m,
                )),
                (f = r.subParser("encodeBackslashEscapes")(f, g, m)),
                (f = r.subParser("images")(f, g, m)),
                (f = r.subParser("anchors")(f, g, m)),
                (f = r.subParser("autoLinks")(f, g, m)),
                (f = r.subParser("simplifiedAutoLinks")(f, g, m)),
                (f = r.subParser("emoji")(f, g, m)),
                (f = r.subParser("underline")(f, g, m)),
                (f = r.subParser("italicsAndBold")(f, g, m)),
                (f = r.subParser("strikethrough")(f, g, m)),
                (f = r.subParser("ellipsis")(f, g, m)),
                (f = r.subParser("hashHTMLSpans")(f, g, m)),
                (f = r.subParser("encodeAmpsAndAngles")(f, g, m)),
                g.simpleLineBreaks
                  ? /\n\n¨K/.test(f) ||
                    (f = f.replace(
                      /\n+/g,
                      `<br />
`,
                    ))
                  : (f = f.replace(
                      /  +\n/g,
                      `<br />
`,
                    )),
                (f = m.converter._dispatch("spanGamut.after", f, g, m)),
                f
              );
            }),
            r.subParser("strikethrough", function (f, g, m) {
              function w(S) {
                return (
                  g.simplifiedAutoLink &&
                    (S = r.subParser("simplifiedAutoLinks")(S, g, m)),
                  "<del>" + S + "</del>"
                );
              }
              return (
                g.strikethrough &&
                  ((f = m.converter._dispatch("strikethrough.before", f, g, m)),
                  (f = f.replace(
                    /(?:~){2}([\s\S]+?)(?:~){2}/g,
                    function (S, M) {
                      return w(M);
                    },
                  )),
                  (f = m.converter._dispatch("strikethrough.after", f, g, m))),
                f
              );
            }),
            r.subParser("stripLinkDefinitions", function (f, g, m) {
              var w =
                  /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
                S =
                  /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
              f += "¨0";
              var M = function (_, T, F, N, I, z, k) {
                return (
                  (T = T.toLowerCase()),
                  f.toLowerCase().split(T).length - 1 < 2
                    ? _
                    : (F.match(/^data:.+?\/.+?;base64,/)
                        ? (m.gUrls[T] = F.replace(/\s/g, ""))
                        : (m.gUrls[T] = r.subParser("encodeAmpsAndAngles")(
                            F,
                            g,
                            m,
                          )),
                      z
                        ? z + k
                        : (k && (m.gTitles[T] = k.replace(/"|'/g, "&quot;")),
                          g.parseImgDimensions &&
                            N &&
                            I &&
                            (m.gDimensions[T] = { width: N, height: I }),
                          ""))
                );
              };
              return (
                (f = f.replace(S, M)),
                (f = f.replace(w, M)),
                (f = f.replace(/¨0/, "")),
                f
              );
            }),
            r.subParser("tables", function (f, g, m) {
              if (!g.tables) return f;
              var w =
                  /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
                S =
                  /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
              function M(I) {
                return /^:[ \t]*--*$/.test(I)
                  ? ' style="text-align:left;"'
                  : /^--*[ \t]*:[ \t]*$/.test(I)
                    ? ' style="text-align:right;"'
                    : /^:[ \t]*--*[ \t]*:$/.test(I)
                      ? ' style="text-align:center;"'
                      : "";
              }
              function _(I, z) {
                var k = "";
                return (
                  (I = I.trim()),
                  (g.tablesHeaderId || g.tableHeaderId) &&
                    (k = ' id="' + I.replace(/ /g, "_").toLowerCase() + '"'),
                  (I = r.subParser("spanGamut")(I, g, m)),
                  "<th" +
                    k +
                    z +
                    ">" +
                    I +
                    `</th>
`
                );
              }
              function T(I, z) {
                var k = r.subParser("spanGamut")(I, g, m);
                return (
                  "<td" +
                  z +
                  ">" +
                  k +
                  `</td>
`
                );
              }
              function F(I, z) {
                for (
                  var k = `<table>
<thead>
<tr>
`,
                    j = I.length,
                    B = 0;
                  B < j;
                  ++B
                )
                  k += I[B];
                for (
                  k += `</tr>
</thead>
<tbody>
`,
                    B = 0;
                  B < z.length;
                  ++B
                ) {
                  k += `<tr>
`;
                  for (var U = 0; U < j; ++U) k += z[B][U];
                  k += `</tr>
`;
                }
                return (
                  (k += `</tbody>
</table>
`),
                  k
                );
              }
              function N(I) {
                var z,
                  k = I.split(`
`);
                for (z = 0; z < k.length; ++z)
                  /^ {0,3}\|/.test(k[z]) &&
                    (k[z] = k[z].replace(/^ {0,3}\|/, "")),
                    /\|[ \t]*$/.test(k[z]) &&
                      (k[z] = k[z].replace(/\|[ \t]*$/, "")),
                    (k[z] = r.subParser("codeSpans")(k[z], g, m));
                var j = k[0].split("|").map(function (Ae) {
                    return Ae.trim();
                  }),
                  B = k[1].split("|").map(function (Ae) {
                    return Ae.trim();
                  }),
                  U = [],
                  ie = [],
                  G = [],
                  de = [];
                for (k.shift(), k.shift(), z = 0; z < k.length; ++z)
                  k[z].trim() !== "" &&
                    U.push(
                      k[z].split("|").map(function (Ae) {
                        return Ae.trim();
                      }),
                    );
                if (j.length < B.length) return I;
                for (z = 0; z < B.length; ++z) G.push(M(B[z]));
                for (z = 0; z < j.length; ++z)
                  r.helper.isUndefined(G[z]) && (G[z] = ""),
                    ie.push(_(j[z], G[z]));
                for (z = 0; z < U.length; ++z) {
                  for (var pe = [], ke = 0; ke < ie.length; ++ke)
                    r.helper.isUndefined(U[z][ke]), pe.push(T(U[z][ke], G[ke]));
                  de.push(pe);
                }
                return F(ie, de);
              }
              return (
                (f = m.converter._dispatch("tables.before", f, g, m)),
                (f = f.replace(/\\(\|)/g, r.helper.escapeCharactersCallback)),
                (f = f.replace(w, N)),
                (f = f.replace(S, N)),
                (f = m.converter._dispatch("tables.after", f, g, m)),
                f
              );
            }),
            r.subParser("underline", function (f, g, m) {
              return (
                g.underline &&
                  ((f = m.converter._dispatch("underline.before", f, g, m)),
                  g.literalMidWordUnderscores
                    ? ((f = f.replace(
                        /\b___(\S[\s\S]*?)___\b/g,
                        function (w, S) {
                          return "<u>" + S + "</u>";
                        },
                      )),
                      (f = f.replace(/\b__(\S[\s\S]*?)__\b/g, function (w, S) {
                        return "<u>" + S + "</u>";
                      })))
                    : ((f = f.replace(/___(\S[\s\S]*?)___/g, function (w, S) {
                        return /\S$/.test(S) ? "<u>" + S + "</u>" : w;
                      })),
                      (f = f.replace(/__(\S[\s\S]*?)__/g, function (w, S) {
                        return /\S$/.test(S) ? "<u>" + S + "</u>" : w;
                      }))),
                  (f = f.replace(/(_)/g, r.helper.escapeCharactersCallback)),
                  (f = m.converter._dispatch("underline.after", f, g, m))),
                f
              );
            }),
            r.subParser("unescapeSpecialChars", function (f, g, m) {
              return (
                (f = m.converter._dispatch(
                  "unescapeSpecialChars.before",
                  f,
                  g,
                  m,
                )),
                (f = f.replace(/¨E(\d+)E/g, function (w, S) {
                  var M = parseInt(S);
                  return String.fromCharCode(M);
                })),
                (f = m.converter._dispatch(
                  "unescapeSpecialChars.after",
                  f,
                  g,
                  m,
                )),
                f
              );
            }),
            r.subParser("makeMarkdown.blockquote", function (f, g) {
              var m = "";
              if (f.hasChildNodes())
                for (var w = f.childNodes, S = w.length, M = 0; M < S; ++M) {
                  var _ = r.subParser("makeMarkdown.node")(w[M], g);
                  _ !== "" && (m += _);
                }
              return (
                (m = m.trim()),
                (m =
                  "> " +
                  m.split(`
`).join(`
> `)),
                m
              );
            }),
            r.subParser("makeMarkdown.codeBlock", function (f, g) {
              var m = f.getAttribute("language"),
                w = f.getAttribute("precodenum");
              return (
                "```" +
                m +
                `
` +
                g.preList[w] +
                "\n```"
              );
            }),
            r.subParser("makeMarkdown.codeSpan", function (f) {
              return "`" + f.innerHTML + "`";
            }),
            r.subParser("makeMarkdown.emphasis", function (f, g) {
              var m = "";
              if (f.hasChildNodes()) {
                m += "*";
                for (var w = f.childNodes, S = w.length, M = 0; M < S; ++M)
                  m += r.subParser("makeMarkdown.node")(w[M], g);
                m += "*";
              }
              return m;
            }),
            r.subParser("makeMarkdown.header", function (f, g, m) {
              var w = new Array(m + 1).join("#"),
                S = "";
              if (f.hasChildNodes()) {
                S = w + " ";
                for (var M = f.childNodes, _ = M.length, T = 0; T < _; ++T)
                  S += r.subParser("makeMarkdown.node")(M[T], g);
              }
              return S;
            }),
            r.subParser("makeMarkdown.hr", function () {
              return "---";
            }),
            r.subParser("makeMarkdown.image", function (f) {
              var g = "";
              return (
                f.hasAttribute("src") &&
                  ((g += "![" + f.getAttribute("alt") + "]("),
                  (g += "<" + f.getAttribute("src") + ">"),
                  f.hasAttribute("width") &&
                    f.hasAttribute("height") &&
                    (g +=
                      " =" +
                      f.getAttribute("width") +
                      "x" +
                      f.getAttribute("height")),
                  f.hasAttribute("title") &&
                    (g += ' "' + f.getAttribute("title") + '"'),
                  (g += ")")),
                g
              );
            }),
            r.subParser("makeMarkdown.links", function (f, g) {
              var m = "";
              if (f.hasChildNodes() && f.hasAttribute("href")) {
                var w = f.childNodes,
                  S = w.length;
                m = "[";
                for (var M = 0; M < S; ++M)
                  m += r.subParser("makeMarkdown.node")(w[M], g);
                (m += "]("),
                  (m += "<" + f.getAttribute("href") + ">"),
                  f.hasAttribute("title") &&
                    (m += ' "' + f.getAttribute("title") + '"'),
                  (m += ")");
              }
              return m;
            }),
            r.subParser("makeMarkdown.list", function (f, g, m) {
              var w = "";
              if (!f.hasChildNodes()) return "";
              for (
                var S = f.childNodes,
                  M = S.length,
                  _ = f.getAttribute("start") || 1,
                  T = 0;
                T < M;
                ++T
              )
                if (
                  !(
                    typeof S[T].tagName > "u" ||
                    S[T].tagName.toLowerCase() !== "li"
                  )
                ) {
                  var F = "";
                  m === "ol" ? (F = _.toString() + ". ") : (F = "- "),
                    (w += F + r.subParser("makeMarkdown.listItem")(S[T], g)),
                    ++_;
                }
              return (
                (w += `
<!-- -->
`),
                w.trim()
              );
            }),
            r.subParser("makeMarkdown.listItem", function (f, g) {
              for (
                var m = "", w = f.childNodes, S = w.length, M = 0;
                M < S;
                ++M
              )
                m += r.subParser("makeMarkdown.node")(w[M], g);
              return (
                /\n$/.test(m)
                  ? (m = m
                      .split(
                        `
`,
                      )
                      .join(
                        `
    `,
                      )
                      .replace(/^ {4}$/gm, "")
                      .replace(
                        /\n\n+/g,
                        `

`,
                      ))
                  : (m += `
`),
                m
              );
            }),
            r.subParser("makeMarkdown.node", function (f, g, m) {
              m = m || !1;
              var w = "";
              if (f.nodeType === 3)
                return r.subParser("makeMarkdown.txt")(f, g);
              if (f.nodeType === 8)
                return (
                  "<!--" +
                  f.data +
                  `-->

`
                );
              if (f.nodeType !== 1) return "";
              var S = f.tagName.toLowerCase();
              switch (S) {
                case "h1":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.header")(f, g, 1) +
                      `

`);
                  break;
                case "h2":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.header")(f, g, 2) +
                      `

`);
                  break;
                case "h3":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.header")(f, g, 3) +
                      `

`);
                  break;
                case "h4":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.header")(f, g, 4) +
                      `

`);
                  break;
                case "h5":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.header")(f, g, 5) +
                      `

`);
                  break;
                case "h6":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.header")(f, g, 6) +
                      `

`);
                  break;
                case "p":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.paragraph")(f, g) +
                      `

`);
                  break;
                case "blockquote":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.blockquote")(f, g) +
                      `

`);
                  break;
                case "hr":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.hr")(f, g) +
                      `

`);
                  break;
                case "ol":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.list")(f, g, "ol") +
                      `

`);
                  break;
                case "ul":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.list")(f, g, "ul") +
                      `

`);
                  break;
                case "precode":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.codeBlock")(f, g) +
                      `

`);
                  break;
                case "pre":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.pre")(f, g) +
                      `

`);
                  break;
                case "table":
                  m ||
                    (w =
                      r.subParser("makeMarkdown.table")(f, g) +
                      `

`);
                  break;
                case "code":
                  w = r.subParser("makeMarkdown.codeSpan")(f, g);
                  break;
                case "em":
                case "i":
                  w = r.subParser("makeMarkdown.emphasis")(f, g);
                  break;
                case "strong":
                case "b":
                  w = r.subParser("makeMarkdown.strong")(f, g);
                  break;
                case "del":
                  w = r.subParser("makeMarkdown.strikethrough")(f, g);
                  break;
                case "a":
                  w = r.subParser("makeMarkdown.links")(f, g);
                  break;
                case "img":
                  w = r.subParser("makeMarkdown.image")(f, g);
                  break;
                default:
                  w =
                    f.outerHTML +
                    `

`;
              }
              return w;
            }),
            r.subParser("makeMarkdown.paragraph", function (f, g) {
              var m = "";
              if (f.hasChildNodes())
                for (var w = f.childNodes, S = w.length, M = 0; M < S; ++M)
                  m += r.subParser("makeMarkdown.node")(w[M], g);
              return (m = m.trim()), m;
            }),
            r.subParser("makeMarkdown.pre", function (f, g) {
              var m = f.getAttribute("prenum");
              return "<pre>" + g.preList[m] + "</pre>";
            }),
            r.subParser("makeMarkdown.strikethrough", function (f, g) {
              var m = "";
              if (f.hasChildNodes()) {
                m += "~~";
                for (var w = f.childNodes, S = w.length, M = 0; M < S; ++M)
                  m += r.subParser("makeMarkdown.node")(w[M], g);
                m += "~~";
              }
              return m;
            }),
            r.subParser("makeMarkdown.strong", function (f, g) {
              var m = "";
              if (f.hasChildNodes()) {
                m += "**";
                for (var w = f.childNodes, S = w.length, M = 0; M < S; ++M)
                  m += r.subParser("makeMarkdown.node")(w[M], g);
                m += "**";
              }
              return m;
            }),
            r.subParser("makeMarkdown.table", function (f, g) {
              var m = "",
                w = [[], []],
                S = f.querySelectorAll("thead>tr>th"),
                M = f.querySelectorAll("tbody>tr"),
                _,
                T;
              for (_ = 0; _ < S.length; ++_) {
                var F = r.subParser("makeMarkdown.tableCell")(S[_], g),
                  N = "---";
                if (S[_].hasAttribute("style")) {
                  var I = S[_].getAttribute("style")
                    .toLowerCase()
                    .replace(/\s/g, "");
                  switch (I) {
                    case "text-align:left;":
                      N = ":---";
                      break;
                    case "text-align:right;":
                      N = "---:";
                      break;
                    case "text-align:center;":
                      N = ":---:";
                      break;
                  }
                }
                (w[0][_] = F.trim()), (w[1][_] = N);
              }
              for (_ = 0; _ < M.length; ++_) {
                var z = w.push([]) - 1,
                  k = M[_].getElementsByTagName("td");
                for (T = 0; T < S.length; ++T) {
                  var j = " ";
                  typeof k[T] < "u" &&
                    (j = r.subParser("makeMarkdown.tableCell")(k[T], g)),
                    w[z].push(j);
                }
              }
              var B = 3;
              for (_ = 0; _ < w.length; ++_)
                for (T = 0; T < w[_].length; ++T) {
                  var U = w[_][T].length;
                  U > B && (B = U);
                }
              for (_ = 0; _ < w.length; ++_) {
                for (T = 0; T < w[_].length; ++T)
                  _ === 1
                    ? w[_][T].slice(-1) === ":"
                      ? (w[_][T] =
                          r.helper.padEnd(w[_][T].slice(-1), B - 1, "-") + ":")
                      : (w[_][T] = r.helper.padEnd(w[_][T], B, "-"))
                    : (w[_][T] = r.helper.padEnd(w[_][T], B));
                m +=
                  "| " +
                  w[_].join(" | ") +
                  ` |
`;
              }
              return m.trim();
            }),
            r.subParser("makeMarkdown.tableCell", function (f, g) {
              var m = "";
              if (!f.hasChildNodes()) return "";
              for (var w = f.childNodes, S = w.length, M = 0; M < S; ++M)
                m += r.subParser("makeMarkdown.node")(w[M], g, !0);
              return m.trim();
            }),
            r.subParser("makeMarkdown.txt", function (f) {
              var g = f.nodeValue;
              return (
                (g = g.replace(/ +/g, " ")),
                (g = g.replace(/¨NBSP;/g, " ")),
                (g = r.helper.unescapeHTMLEntities(g)),
                (g = g.replace(/([*_~|`])/g, "\\$1")),
                (g = g.replace(/^(\s*)>/g, "\\$1>")),
                (g = g.replace(/^#/gm, "\\#")),
                (g = g.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3")),
                (g = g.replace(/^( {0,3}\d+)\./gm, "$1\\.")),
                (g = g.replace(/^( {0,3})([+-])/gm, "$1\\$2")),
                (g = g.replace(/]([\s]*)\(/g, "\\]$1\\(")),
                (g = g.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:")),
                g
              );
            });
          var R = this;
          t.exports ? (t.exports = r) : (R.showdown = r);
        }).call(ux);
      })(wi)),
    wi.exports
  );
}
dx();
Of([]);
async function fx(t, e, n = {}) {
  e || (e = {});
  let r = Object.assign(
    {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      "X-Frappe-Site-Name": window.location.hostname,
    },
    n.headers || {},
  );
  window.csrf_token &&
    window.csrf_token !== "{{ csrf_token }}" &&
    (r["X-Frappe-CSRF-Token"] = window.csrf_token);
  let s = t.startsWith("/") ? t : `/api/method/${t}`;
  const i = await fetch(s, {
    method: "POST",
    headers: r,
    body: JSON.stringify(e),
  });
  if (i.ok) {
    const o = await i.json();
    if (o.docs || t === "login") return o;
    if (o.exc)
      try {
        console.groupCollapsed(t),
          console.log(`method: ${t}`),
          console.log("params:", e);
        let l = JSON.parse(o.exc);
        for (let a of l) console.log(a);
        console.groupEnd();
      } catch (l) {
        console.warn("Error printing debug messages", l);
      }
    return o.message;
  } else {
    let o = await i.text(),
      l,
      a;
    try {
      l = JSON.parse(o);
    } catch {}
    let c = [[t, l.exc_type, l._error_message].filter(Boolean).join(" ")];
    if (l.exc) {
      a = l.exc;
      try {
        (a = JSON.parse(a)[0]), console.log(a);
      } catch {}
    }
    let u = new Error(
      c.join(`
`),
    );
    throw (
      ((u.exc_type = l.exc_type),
      (u.exc = a),
      (u.status = i.status),
      (u.messages = l._server_messages ? JSON.parse(l._server_messages) : []),
      (u.messages = u.messages.concat(l.message)),
      (u.messages = u.messages.map((d) => {
        try {
          return JSON.parse(d).message;
        } catch {
          return d;
        }
      })),
      (u.messages = u.messages.filter(Boolean)),
      u.messages.length ||
        (u.messages = l._error_message
          ? [l._error_message]
          : ["Internal Server Error"]),
      n.onError && n.onError({ response: i, status: i.status, error: u }),
      u)
    );
  }
}
function hx(t, e, n) {
  var r;
  return function () {
    var s = this,
      i = arguments,
      o = function () {
        (r = null), t.apply(s, i);
      };
    clearTimeout(r), (r = setTimeout(o, e));
  };
}
function Lc(t) {
  return new Promise((e, n) => {
    (t.oncomplete = t.onsuccess = () => e(t.result)),
      (t.onabort = t.onerror = () => n(t.error));
  });
}
function px(t, e) {
  const n = indexedDB.open(t);
  n.onupgradeneeded = () => n.result.createObjectStore(e);
  const r = Lc(n);
  return (s, i) => r.then((o) => i(o.transaction(e, s).objectStore(e)));
}
let Cl;
function km() {
  return Cl || (Cl = px("keyval-store", "keyval")), Cl;
}
function mx(t, e = km()) {
  return e("readonly", (n) => Lc(n.get(t)));
}
function gx(t, e, n = km()) {
  return n("readwrite", (r) => (r.put(e, t), Lc(r.transaction)));
}
function Nc(t, e) {
  return typeof indexedDB > "u"
    ? Promise.resolve(null)
    : t
      ? gx(t, JSON.stringify(e))
      : Promise.resolve();
}
function zc(t) {
  return typeof indexedDB > "u"
    ? Promise.resolve(null)
    : mx(t).then((e) => e && JSON.parse(e));
}
let _m = {};
function yx(t, e) {
  _m[t] = e;
}
function bx(t) {
  return _m[t] || null;
}
let vi = {};
function Et(t, e) {
  let n = null;
  if (t.cache) {
    n = zr(t.cache);
    let d = vi[n];
    if (d) return d.auto && d.reload(), d;
  }
  typeof t == "string" && (t = { url: t, auto: !0 });
  let r = t.debounce ? hx(i, t.debounce) : i,
    s = Zt({
      method: t.method,
      url: t.url,
      data: t.initialData || null,
      previousData: null,
      loading: !1,
      fetched: !1,
      error: null,
      promise: null,
      auto: t.auto,
      params: null,
      fetch: r,
      reload: r,
      submit: r,
      reset: l,
      update: o,
      setData: c,
    });
  async function i(d, h = {}) {
    let p = t.resourceFetcher || bx("resourceFetcher") || Cm;
    d instanceof Event && (d = null),
      (d = d || s.params),
      t.makeParams && (d = t.makeParams.call(e, d)),
      (s.params = d),
      (s.previousData = s.data ? JSON.parse(JSON.stringify(s.data)) : null),
      (s.loading = !0),
      (s.error = null),
      t.onFetch && t.onFetch.call(e, s.params);
    let y = [t.beforeSubmit, h.beforeSubmit];
    for (let R of y) R && R.call(e, s.params);
    let b = h.validate || t.validate,
      x = [t.onError, h.onError],
      v = [t.onSuccess, h.onSuccess],
      E = [t.onData, h.onData];
    if (b) {
      let R;
      try {
        if (((R = await b.call(e, s.params)), R && typeof R == "string")) {
          let f = new Error(R);
          a(f, x);
          return;
        }
      } catch (f) {
        a(f, x);
        return;
      }
    }
    try {
      s.promise = p({ ...t, params: d || t.params });
      let R = await s.promise;
      Nc(n, R), (s.data = u(R)), (s.fetched = !0);
      for (let f of v) f && f.call(e, R);
      for (let f of E) f && f.call(e, R);
    } catch (R) {
      a(R, x);
    }
    return (s.loading = !1), s.data;
  }
  function o({ method: d, url: h, params: p, auto: y }) {
    d && d !== t.method && (s.method = d),
      h && h !== t.url && (s.url = h),
      p && p !== t.params && (s.params = p),
      y !== void 0 && y !== s.auto && (s.auto = y);
  }
  function l() {
    (s.data = t.initialData || null),
      (s.previousData = null),
      (s.loading = !1),
      (s.fetched = !1),
      (s.error = null),
      (s.params = null),
      (s.auto = t.auto);
  }
  function a(d, h) {
    (s.loading = !1),
      s.previousData && (s.data = s.previousData),
      (s.error = d);
    for (let p of h) p && p.call(e, d);
    throw d;
  }
  function c(d) {
    typeof d == "function" && (d = d.call(e, s.data)), (s.data = u(d));
  }
  function u(d) {
    if (t.transform) {
      let h = t.transform.call(e, d);
      if (h != null) return h;
    }
    return d;
  }
  return (
    n &&
      !vi[n] &&
      ((vi[n] = s),
      zc(n).then((d) => {
        (s.loading || !s.fetched) && d && (c(d), t.onData?.call(e, d));
      })),
    t.auto && s.fetch(),
    s
  );
}
function zr(t) {
  return t ? (typeof t == "string" && (t = [t]), JSON.stringify(t)) : null;
}
function wx(t) {
  return (t = zr(t)), vi[t] || null;
}
let _a = Zt({}),
  Er = {};
function vx(t, e) {
  if (!t.doctype) throw new Error("List resource requires doctype");
  let n = zr(t.cache);
  if (n) {
    let u = _a[n];
    if (u) return u.auto && u.reload(), u;
  }
  let r = Zt({
    doctype: t.doctype,
    fields: t.fields,
    filters: t.filters,
    orderBy: t.orderBy,
    start: t.start || 0,
    pageLength: t.pageLength || 20,
    groupBy: t.groupBy,
    parent: t.parent,
    debug: t.debug || 0,
    originalData: null,
    data: null,
    previous: a,
    hasPreviousPage: !1,
    next: c,
    hasNextPage: !0,
    auto: t.auto,
    list: Et(
      {
        url: t.url || "frappe.client.get_list",
        makeParams() {
          return {
            doctype: r.doctype,
            fields: r.fields,
            filters: r.filters,
            order_by: r.orderBy,
            start: r.start,
            limit: r.pageLength,
            limit_start: r.start,
            limit_page_length: r.pageLength,
            group_by: r.groupBy,
            parent: r.parent,
            debug: r.debug,
          };
        },
        onSuccess(u) {
          (r.hasPreviousPage = !!r.start),
            u.length < r.pageLength && (r.hasNextPage = !1);
          let d;
          !r.start || r.start == 0
            ? (d = u)
            : r.start > 0 && (d = r.originalData.concat(u)),
            Nc(n, d),
            l(d),
            t.onSuccess?.call(e, r.data);
        },
        onError: t.onError,
      },
      e,
    ),
    fetchOne: Et(
      {
        url: "frappe.client.get_list",
        makeParams(u) {
          return {
            doctype: r.doctype,
            fields: r.fields || "*",
            filters: { name: u },
          };
        },
        onSuccess(u) {
          if (u.length > 0 && r.originalData) {
            let d = u[0];
            ps(r.doctype, d);
          }
          t.fetchOne?.onSuccess?.call(e, r.data);
        },
        onError: t.fetchOne?.onError,
      },
      e,
    ),
    insert: Et(
      {
        url: "frappe.client.insert",
        makeParams(u) {
          return { doc: { doctype: r.doctype, ...u } };
        },
        onSuccess(u) {
          r.list.fetch(), t.insert?.onSuccess?.call(e, u);
        },
        onError: t.insert?.onError,
      },
      e,
    ),
    setValue: Et(
      {
        url: "frappe.client.set_value",
        makeParams(u) {
          let { name: d, ...h } = u;
          return { doctype: r.doctype, name: d, fieldname: h };
        },
        onSuccess(u) {
          ps(r.doctype, u), t.setValue?.onSuccess?.call(e, u);
        },
        onError: t.setValue?.onError,
      },
      e,
    ),
    delete: Et(
      {
        url: "frappe.client.delete",
        makeParams(u) {
          return { doctype: r.doctype, name: u };
        },
        onSuccess(u) {
          r.list.fetch(), t.delete?.onSuccess?.call(e, u);
        },
        onError: t.delete?.onError,
      },
      e,
    ),
    runDocMethod: Et(
      {
        url: "run_doc_method",
        makeParams({ method: u, name: d, ...h }) {
          return { dt: r.doctype, dn: d, method: u, args: JSON.stringify(h) };
        },
        onSuccess(u) {
          if (u.docs) for (let d of u.docs) ps(d.doctype, d);
          t.runDocMethod?.onSuccess?.call(e, u);
        },
        onError: t.runDocMethod?.onError,
      },
      e,
    ),
    update: s,
    reload: o,
    setData: l,
    transform: i,
  });
  function s(u) {
    (r.doctype = u.doctype),
      (r.fields = u.fields),
      (r.filters = u.filters),
      (r.orderBy = u.orderBy),
      (r.start = u.start),
      (r.pageLength = u.pageLength),
      (r.groupBy = u.groupBy),
      (r.parent = u.parent),
      (r.debug = u.debug);
  }
  function i(u) {
    if (t.transform) {
      let d = t.transform.call(e, u);
      if (d != null) return d;
    }
    return u;
  }
  function o() {
    let u = r.start,
      d = r.pageLength;
    return (
      r.start > 0 && ((r.start = 0), (r.pageLength = r.originalData.length)),
      r.list.fetch().finally(() => {
        (r.start = u), (r.pageLength = d);
      })
    );
  }
  function l(u) {
    (r.originalData = u),
      typeof u == "function" && (u = u.call(e, r.data)),
      (r.data = i(u));
  }
  function a() {
    (r.start = r.start - r.pageLength), r.list.fetch();
  }
  function c() {
    (r.start = r.start + r.pageLength), r.list.fetch();
  }
  return (
    t.realtime &&
      e.$socket &&
      e.$socket.on("list_update", (u) => {
        u.doctype === r.doctype &&
          r.originalData?.find((d) => d.name === u.name) &&
          r.fetchOne.submit(u.name);
      }),
    n &&
      ((_a[n] = r),
      zc(n).then((u) => {
        (r.list.loading || !r.list.fetched) && u && l(u);
      })),
    t.auto && r.list.fetch(),
    (Er[r.doctype] = Er[r.doctype] || []),
    Er[r.doctype].push(r),
    r
  );
}
function xx(t) {
  return (t = zr(t)), _a[t] || null;
}
function ps(t, e) {
  if (!e.name) return;
  let n = Er[t] || [];
  for (let r of n)
    if (r.originalData) {
      for (let s of r.originalData)
        if (s.name && s.name == e.name) {
          let i = JSON.stringify(s);
          for (let o in s) o in e && (s[o] = e[o]);
          s._previousData = i;
        }
      r.data = r.transform(r.originalData);
    }
}
function kx(t, e) {
  let n = Er[t] || [];
  for (let r of n)
    r.originalData &&
      ((r.originalData = r.originalData.filter((s) => s.name.toString() !== e)),
      (r.data = r.transform(r.originalData)));
}
function _x(t, e) {
  let n = Er[t] || [];
  for (let r of n)
    if (r.originalData) {
      for (let s of r.originalData)
        if (s.name && s.name == e.name) {
          let i = JSON.parse(s._previousData);
          for (let o in s) s[o] = i[o];
          delete s._previousData;
        }
      r.data = r.transform(r.originalData);
    }
}
let Sa = Zt({});
function Sm(t, e) {
  if (!(t.doctype && t.name)) return;
  let n = zr([t.doctype, t.name]),
    r = Sa[n];
  if (r) return r.auto && r.reload(), r;
  let s = {
      url: "frappe.client.set_value",
      makeParams(c) {
        return { doctype: i.doctype, name: i.name, fieldname: c };
      },
      beforeSubmit(c) {
        (i.previousDoc = JSON.stringify(i.doc)),
          Object.assign(i.doc, c.fieldname || {}),
          ps(i.doctype, i.doc);
      },
      onSuccess(c) {
        (i.doc = a(c)), t.setValue?.onSuccess?.call(e, c);
      },
      onError(c) {
        (i.doc = JSON.parse(i.previousDoc)),
          t.setValue?.onError?.call(e, c),
          _x(i.doctype, i.doc);
      },
    },
    i = Zt({
      doctype: t.doctype,
      name: t.name,
      doc: null,
      auto: t.auto || !0,
      get: Et(
        {
          url: "frappe.client.get",
          makeParams() {
            return { doctype: i.doctype, name: i.name };
          },
          onSuccess(c) {
            Nc(n, c), (i.doc = a(c)), t.onSuccess?.call(e, i.doc);
          },
          onError: t.onError,
        },
        e,
      ),
      setValue: Et(s, e),
      setValueDebounced: Et({ ...s, debounce: t.debounce || 500 }, e),
      delete: Et(
        {
          url: "frappe.client.delete",
          makeParams() {
            return { doctype: i.doctype, name: i.name };
          },
          onSuccess() {
            (i.doc = null), t.delete?.onSuccess?.call(e), kx(i.doctype, i.name);
          },
          onError: t.delete?.onError,
        },
        e,
      ),
      reload: o,
      setDoc: l,
    });
  for (let c in t.whitelistedMethods) {
    let u = t.whitelistedMethods[c];
    typeof u == "string" && (u = { method: u });
    let { method: d, onSuccess: h, ...p } = u;
    i[c] = Et(
      {
        url: "run_doc_method",
        makeParams(y) {
          return { dt: i.doctype, dn: i.name, method: d, args: y };
        },
        onSuccess(y) {
          if (y.docs) {
            for (let b of y.docs)
              if (
                b.doctype === i.doctype &&
                b.name.toString() === i.name.toString()
              ) {
                (i.doc = a(b)), ps(i.doctype, i.doc);
                break;
              }
          }
          h?.call(e, y.message);
        },
        ...p,
      },
      e,
    );
  }
  function o() {
    return i.get.fetch();
  }
  function l(c) {
    typeof c == "function" && (c = c.call(e, i.doc)), (i.doc = a(c));
  }
  function a(c) {
    if (t.transform) {
      let u = t.transform.call(e, c);
      if (typeof u == "object") return u;
    }
    return c;
  }
  return (
    t.realtime &&
      e.$socket &&
      e.$socket.on("list_update", (c) => {
        c.doctype == i.doctype && c.name == i.name && i.get.fetch();
      }),
    (Sa[n] = i),
    zc(n).then((c) => {
      (i.get.loading || !i.get.fetched) && c && (i.doc = a(c));
    }),
    i.auto && i.get.fetch(),
    i
  );
}
function Sx(t, e) {
  let n = zr([t, e]);
  return Sa[n] || null;
}
let Cx = (t) => ({
  created() {
    if (this.$options.resources) {
      this._resources = Zt({});
      for (let e in this.$options.resources) {
        let n = this.$options.resources[e];
        if (typeof n == "function")
          _r(
            () => {
              try {
                return n.call(this);
              } catch (r) {
                return (
                  console.warn(
                    `Failed to get resource options

`,
                    r,
                  ),
                  null
                );
              }
            },
            (r, s) => {
              if (!(!r || !(!s || JSON.stringify(r) !== JSON.stringify(s))))
                if (r.type === "document") {
                  let o = Sm(r, this);
                  this._resources[e] = o;
                } else {
                  let o = this._resources[e];
                  o
                    ? (o.update(r), o.auto && o.reload())
                    : ((o = ef(r, this)), (this._resources[e] = o));
                }
            },
            { immediate: !0 },
          );
        else {
          let r = ef(n, this);
          this._resources[e] = r;
        }
      }
    }
  },
  methods: {
    $getResource(e) {
      return wx(e);
    },
    $getDocumentResource(e, n) {
      return Sx(e, n);
    },
    $getDoc(e, n) {
      let r = this.$getDocumentResource(e, n);
      return r ? r.doc : null;
    },
    $getListResource(e) {
      return xx(e);
    },
    $refetchResource(e) {
      let n = this.$getResource(e);
      n && n.fetch();
    },
  },
  computed: {
    $resources() {
      return this._resources;
    },
  },
});
function ef(t, e) {
  return t.type === "document"
    ? Sm(t, e)
    : t.type === "list"
      ? vx(t, e)
      : Et(t, e);
}
const Ex = {
  install(t, e) {
    let n = Cx();
    t.mixin(n);
  },
};
function Cm(t) {
  let e = Object.assign({}, t);
  if (!e.url) throw new Error("[request] options.url is required");
  e.transformRequest && (e = e.transformRequest(t)),
    e.responseType || (e.responseType = "json"),
    e.method || (e.method = "GET");
  let n = e.url,
    r;
  if (e.params)
    if (e.method === "GET") {
      let s = new URLSearchParams();
      for (let i in e.params) s.append(i, e.params[i]);
      n = e.url + "?" + s.toString();
    } else r = JSON.stringify(e.params);
  return fetch(n, {
    method: e.method || "GET",
    headers: e.headers,
    body: r,
  }).then((s) => {
    if (e.transformResponse) return e.transformResponse(s, e);
    if (s.status >= 200 && s.status < 300)
      return e.responseType === "json" ? s.json() : s;
    {
      let i = new Error(s.statusText);
      throw ((i.response = s), i);
    }
  });
}
function Ax(t) {
  return Cm({
    ...t,
    transformRequest: (e = {}) => {
      if (!e.url) throw new Error("[frappeRequest] options.url is required");
      let n = Object.assign(
        {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf-8",
          "X-Frappe-Site-Name": window.location.hostname,
        },
        e.headers || {},
      );
      return (
        window.csrf_token &&
          window.csrf_token !== "{{ csrf_token }}" &&
          (n["X-Frappe-CSRF-Token"] = window.csrf_token),
        !e.url.startsWith("/") &&
          !e.url.startsWith("http") &&
          (e.url = "/api/method/" + e.url),
        { ...e, method: e.method || "POST", headers: n }
      );
    },
    transformResponse: async (e, n) => {
      let r = n.url;
      if (e.ok) {
        const s = await e.json();
        if (s.docs || r === "login") return s;
        if (s.exc)
          try {
            console.groupCollapsed(r), console.log(n);
            let i = JSON.parse(s.exc);
            for (let o of i) console.log(o);
            console.groupEnd();
          } catch (i) {
            console.warn("Error printing debug messages", i);
          }
        return s.message;
      } else {
        let s = await e.text(),
          i,
          o;
        try {
          i = JSON.parse(s);
        } catch {}
        let l = [
          [n.url, i.exc_type, i._error_message].filter(Boolean).join(" "),
        ];
        if (i.exc) {
          o = i.exc;
          try {
            (o = JSON.parse(o)[0]), console.log(o);
          } catch {}
        }
        let a = new Error(
          l.join(`
`),
        );
        throw (
          ((a.exc_type = i.exc_type),
          (a.exc = o),
          (a.status = s.status),
          (a.messages = i._server_messages
            ? JSON.parse(i._server_messages)
            : []),
          (a.messages = a.messages.concat(i.message)),
          (a.messages = a.messages.map((c) => {
            try {
              return JSON.parse(c).message;
            } catch {
              return c;
            }
          })),
          (a.messages = a.messages.filter(Boolean)),
          a.messages.length ||
            (a.messages = i._error_message
              ? [i._error_message]
              : ["Internal Server Error"]),
          n.onError && n.onError({ response: s, status: s.status, error: a }),
          a)
        );
      }
    },
  });
}
const Xt = Object.create(null);
Xt.open = "0";
Xt.close = "1";
Xt.ping = "2";
Xt.pong = "3";
Xt.message = "4";
Xt.upgrade = "5";
Xt.noop = "6";
const xi = Object.create(null);
Object.keys(Xt).forEach((t) => {
  xi[Xt[t]] = t;
});
const Ca = { type: "error", data: "parser error" },
  Em =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  Am = typeof ArrayBuffer == "function",
  Mm = (t) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(t)
      : t && t.buffer instanceof ArrayBuffer,
  Dc = ({ type: t, data: e }, n, r) =>
    Em && e instanceof Blob
      ? n
        ? r(e)
        : tf(e, r)
      : Am && (e instanceof ArrayBuffer || Mm(e))
        ? n
          ? r(e)
          : tf(new Blob([e]), r)
        : r(Xt[t] + (e || "")),
  tf = (t, e) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(",")[1];
        e("b" + (r || ""));
      }),
      n.readAsDataURL(t)
    );
  };
function nf(t) {
  return t instanceof Uint8Array
    ? t
    : t instanceof ArrayBuffer
      ? new Uint8Array(t)
      : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let El;
function Mx(t, e) {
  if (Em && t.data instanceof Blob)
    return t.data.arrayBuffer().then(nf).then(e);
  if (Am && (t.data instanceof ArrayBuffer || Mm(t.data))) return e(nf(t.data));
  Dc(t, !1, (n) => {
    El || (El = new TextEncoder()), e(El.encode(n));
  });
}
const rf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Qr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < rf.length; t++) Qr[rf.charCodeAt(t)] = t;
const Tx = (t) => {
    let e = t.length * 0.75,
      n = t.length,
      r,
      s = 0,
      i,
      o,
      l,
      a;
    t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
    const c = new ArrayBuffer(e),
      u = new Uint8Array(c);
    for (r = 0; r < n; r += 4)
      (i = Qr[t.charCodeAt(r)]),
        (o = Qr[t.charCodeAt(r + 1)]),
        (l = Qr[t.charCodeAt(r + 2)]),
        (a = Qr[t.charCodeAt(r + 3)]),
        (u[s++] = (i << 2) | (o >> 4)),
        (u[s++] = ((o & 15) << 4) | (l >> 2)),
        (u[s++] = ((l & 3) << 6) | (a & 63));
    return c;
  },
  Rx = typeof ArrayBuffer == "function",
  Bc = (t, e) => {
    if (typeof t != "string") return { type: "message", data: Tm(t, e) };
    const n = t.charAt(0);
    return n === "b"
      ? { type: "message", data: Ox(t.substring(1), e) }
      : xi[n]
        ? t.length > 1
          ? { type: xi[n], data: t.substring(1) }
          : { type: xi[n] }
        : Ca;
  },
  Ox = (t, e) => {
    if (Rx) {
      const n = Tx(t);
      return Tm(n, e);
    } else return { base64: !0, data: t };
  },
  Tm = (t, e) => {
    switch (e) {
      case "blob":
        return t instanceof Blob ? t : new Blob([t]);
      case "arraybuffer":
      default:
        return t instanceof ArrayBuffer ? t : t.buffer;
    }
  },
  Rm = "",
  jx = (t, e) => {
    const n = t.length,
      r = new Array(n);
    let s = 0;
    t.forEach((i, o) => {
      Dc(i, !1, (l) => {
        (r[o] = l), ++s === n && e(r.join(Rm));
      });
    });
  },
  Px = (t, e) => {
    const n = t.split(Rm),
      r = [];
    for (let s = 0; s < n.length; s++) {
      const i = Bc(n[s], e);
      if ((r.push(i), i.type === "error")) break;
    }
    return r;
  };
function Ix() {
  return new TransformStream({
    transform(t, e) {
      Mx(t, (n) => {
        const r = n.length;
        let s;
        if (r < 126)
          (s = new Uint8Array(1)), new DataView(s.buffer).setUint8(0, r);
        else if (r < 65536) {
          s = new Uint8Array(3);
          const i = new DataView(s.buffer);
          i.setUint8(0, 126), i.setUint16(1, r);
        } else {
          s = new Uint8Array(9);
          const i = new DataView(s.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(r));
        }
        t.data && typeof t.data != "string" && (s[0] |= 128),
          e.enqueue(s),
          e.enqueue(n);
      });
    },
  });
}
let Al;
function ri(t) {
  return t.reduce((e, n) => e + n.length, 0);
}
function si(t, e) {
  if (t[0].length === e) return t.shift();
  const n = new Uint8Array(e);
  let r = 0;
  for (let s = 0; s < e; s++)
    (n[s] = t[0][r++]), r === t[0].length && (t.shift(), (r = 0));
  return t.length && r < t[0].length && (t[0] = t[0].slice(r)), n;
}
function Lx(t, e) {
  Al || (Al = new TextDecoder());
  const n = [];
  let r = 0,
    s = -1,
    i = !1;
  return new TransformStream({
    transform(o, l) {
      for (n.push(o); ; ) {
        if (r === 0) {
          if (ri(n) < 1) break;
          const a = si(n, 1);
          (i = (a[0] & 128) === 128),
            (s = a[0] & 127),
            s < 126 ? (r = 3) : s === 126 ? (r = 1) : (r = 2);
        } else if (r === 1) {
          if (ri(n) < 2) break;
          const a = si(n, 2);
          (s = new DataView(a.buffer, a.byteOffset, a.length).getUint16(0)),
            (r = 3);
        } else if (r === 2) {
          if (ri(n) < 8) break;
          const a = si(n, 8),
            c = new DataView(a.buffer, a.byteOffset, a.length),
            u = c.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            l.enqueue(Ca);
            break;
          }
          (s = u * Math.pow(2, 32) + c.getUint32(4)), (r = 3);
        } else {
          if (ri(n) < s) break;
          const a = si(n, s);
          l.enqueue(Bc(i ? a : Al.decode(a), e)), (r = 0);
        }
        if (s === 0 || s > t) {
          l.enqueue(Ca);
          break;
        }
      }
    },
  });
}
const Om = 4;
function He(t) {
  if (t) return Nx(t);
}
function Nx(t) {
  for (var e in He.prototype) t[e] = He.prototype[e];
  return t;
}
He.prototype.on = He.prototype.addEventListener = function (t, e) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
    this
  );
};
He.prototype.once = function (t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return (n.fn = e), this.on(t, n), this;
};
He.prototype.off =
  He.prototype.removeListener =
  He.prototype.removeAllListeners =
  He.prototype.removeEventListener =
    function (t, e) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var n = this._callbacks["$" + t];
      if (!n) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + t], this;
      for (var r, s = 0; s < n.length; s++)
        if (((r = n[s]), r === e || r.fn === e)) {
          n.splice(s, 1);
          break;
        }
      return n.length === 0 && delete this._callbacks["$" + t], this;
    };
He.prototype.emit = function (t) {
  this._callbacks = this._callbacks || {};
  for (
    var e = new Array(arguments.length - 1),
      n = this._callbacks["$" + t],
      r = 1;
    r < arguments.length;
    r++
  )
    e[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, s = n.length; r < s; ++r) n[r].apply(this, e);
  }
  return this;
};
He.prototype.emitReserved = He.prototype.emit;
He.prototype.listeners = function (t) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + t] || []
  );
};
He.prototype.hasListeners = function (t) {
  return !!this.listeners(t).length;
};
const $o =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (e) => Promise.resolve().then(e)
      : (e, n) => n(e, 0),
  At =
    typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : Function("return this")(),
  zx = "arraybuffer";
function jm(t, ...e) {
  return e.reduce((n, r) => (t.hasOwnProperty(r) && (n[r] = t[r]), n), {});
}
const Dx = At.setTimeout,
  Bx = At.clearTimeout;
function Fo(t, e) {
  e.useNativeTimers
    ? ((t.setTimeoutFn = Dx.bind(At)), (t.clearTimeoutFn = Bx.bind(At)))
    : ((t.setTimeoutFn = At.setTimeout.bind(At)),
      (t.clearTimeoutFn = At.clearTimeout.bind(At)));
}
const Hx = 1.33;
function $x(t) {
  return typeof t == "string"
    ? Fx(t)
    : Math.ceil((t.byteLength || t.size) * Hx);
}
function Fx(t) {
  let e = 0,
    n = 0;
  for (let r = 0, s = t.length; r < s; r++)
    (e = t.charCodeAt(r)),
      e < 128
        ? (n += 1)
        : e < 2048
          ? (n += 2)
          : e < 55296 || e >= 57344
            ? (n += 3)
            : (r++, (n += 4));
  return n;
}
function Pm() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function Vx(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) &&
      (e.length && (e += "&"),
      (e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n])));
  return e;
}
function Wx(t) {
  let e = {},
    n = t.split("&");
  for (let r = 0, s = n.length; r < s; r++) {
    let i = n[r].split("=");
    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return e;
}
class Ux extends Error {
  constructor(e, n, r) {
    super(e),
      (this.description = n),
      (this.context = r),
      (this.type = "TransportError");
  }
}
class Hc extends He {
  constructor(e) {
    super(),
      (this.writable = !1),
      Fo(this, e),
      (this.opts = e),
      (this.query = e.query),
      (this.socket = e.socket),
      (this.supportsBinary = !e.forceBase64);
  }
  onError(e, n, r) {
    return super.emitReserved("error", new Ux(e, n, r)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(e) {
    const n = Bc(e, this.socket.binaryType);
    this.onPacket(n);
  }
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  onClose(e) {
    (this.readyState = "closed"), super.emitReserved("close", e);
  }
  pause(e) {}
  createUri(e, n = {}) {
    return (
      e +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(n)
    );
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(e) {
    const n = Vx(e);
    return n.length ? "?" + n : "";
  }
}
class Kx extends Hc {
  constructor() {
    super(...arguments), (this._polling = !1);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(e) {
    this.readyState = "pausing";
    const n = () => {
      (this.readyState = "paused"), e();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || n();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || n();
          }));
    } else n();
  }
  _poll() {
    (this._polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(e) {
    const n = (r) => {
      if (
        (this.readyState === "opening" && r.type === "open" && this.onOpen(),
        r.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(r);
    };
    Px(e, this.socket.binaryType).forEach(n),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll());
  }
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  write(e) {
    (this.writable = !1),
      jx(e, (n) => {
        this.doWrite(n, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const e = this.opts.secure ? "https" : "http",
      n = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (n[this.opts.timestampParam] = Pm()),
      !this.supportsBinary && !n.sid && (n.b64 = 1),
      this.createUri(e, n)
    );
  }
}
let Im = !1;
try {
  Im = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const qx = Im;
function Jx() {}
class Gx extends Kx {
  constructor(e) {
    if ((super(e), typeof location < "u")) {
      const n = location.protocol === "https:";
      let r = location.port;
      r || (r = n ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && e.hostname !== location.hostname) ||
          r !== e.port);
    }
  }
  doWrite(e, n) {
    const r = this.request({ method: "POST", data: e });
    r.on("success", n),
      r.on("error", (s, i) => {
        this.onError("xhr post error", s, i);
      });
  }
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)),
      e.on("error", (n, r) => {
        this.onError("xhr poll error", n, r);
      }),
      (this.pollXhr = e);
  }
}
class Jt extends He {
  constructor(e, n, r) {
    super(),
      (this.createRequest = e),
      Fo(this, r),
      (this._opts = r),
      (this._method = r.method || "GET"),
      (this._uri = n),
      (this._data = r.data !== void 0 ? r.data : null),
      this._create();
  }
  _create() {
    var e;
    const n = jm(
      this._opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref",
    );
    n.xdomain = !!this._opts.xd;
    const r = (this._xhr = this.createRequest(n));
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let s in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(s) &&
              r.setRequestHeader(s, this._opts.extraHeaders[s]);
        }
      } catch {}
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {}
      (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(r),
        "withCredentials" in r &&
          (r.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout),
        (r.onreadystatechange = () => {
          var s;
          r.readyState === 3 &&
            ((s = this._opts.cookieJar) === null ||
              s === void 0 ||
              s.parseCookies(r.getResponseHeader("set-cookie"))),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof r.status == "number" ? r.status : 0);
                  }, 0));
        }),
        r.send(this._data);
    } catch (s) {
      this.setTimeoutFn(() => {
        this._onError(s);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this._index = Jt.requestsCount++), (Jt.requests[this._index] = this));
  }
  _onError(e) {
    this.emitReserved("error", e, this._xhr), this._cleanup(!0);
  }
  _cleanup(e) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = Jx), e))
        try {
          this._xhr.abort();
        } catch {}
      typeof document < "u" && delete Jt.requests[this._index],
        (this._xhr = null);
    }
  }
  _onLoad() {
    const e = this._xhr.responseText;
    e !== null &&
      (this.emitReserved("data", e),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
}
Jt.requestsCount = 0;
Jt.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", sf);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in At ? "pagehide" : "unload";
    addEventListener(t, sf, !1);
  }
}
function sf() {
  for (let t in Jt.requests)
    Jt.requests.hasOwnProperty(t) && Jt.requests[t].abort();
}
const Qx = (function () {
  const t = Lm({ xdomain: !1 });
  return t && t.responseType !== null;
})();
class Yx extends Gx {
  constructor(e) {
    super(e);
    const n = e && e.forceBase64;
    this.supportsBinary = Qx && !n;
  }
  request(e = {}) {
    return (
      Object.assign(e, { xd: this.xd }, this.opts), new Jt(Lm, this.uri(), e)
    );
  }
}
function Lm(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || qx)) return new XMLHttpRequest();
  } catch {}
  if (!e)
    try {
      return new At[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
const Nm =
  typeof navigator < "u" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class Xx extends Hc {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(),
      n = this.opts.protocols,
      r = Nm
        ? {}
        : jm(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity",
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, n, r);
    } catch (s) {
      return this.emitReserved("error", s);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (e) =>
        this.onClose({
          description: "websocket connection closed",
          context: e,
        })),
      (this.ws.onmessage = (e) => this.onData(e.data)),
      (this.ws.onerror = (e) => this.onError("websocket error", e));
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = n === e.length - 1;
      Dc(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {}
        s &&
          $o(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" &&
      ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
  }
  uri() {
    const e = this.opts.secure ? "wss" : "ws",
      n = this.query || {};
    return (
      this.opts.timestampRequests && (n[this.opts.timestampParam] = Pm()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(e, n)
    );
  }
}
const Ml = At.WebSocket || At.MozWebSocket;
class Zx extends Xx {
  createSocket(e, n, r) {
    return Nm ? new Ml(e, n, r) : n ? new Ml(e, n) : new Ml(e);
  }
  doWrite(e, n) {
    this.ws.send(n);
  }
}
class ek extends Hc {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name],
      );
    } catch (e) {
      return this.emitReserved("error", e);
    }
    this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((e) => {
        this.onError("webtransport error", e);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((e) => {
          const n = Lx(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = e.readable.pipeThrough(n).getReader(),
            s = Ix();
          s.readable.pipeTo(e.writable),
            (this._writer = s.writable.getWriter());
          const i = () => {
            r.read()
              .then(({ done: l, value: a }) => {
                l || (this.onPacket(a), i());
              })
              .catch((l) => {});
          };
          i();
          const o = { type: "open" };
          this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(o).then(() => this.onOpen());
        });
      });
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = n === e.length - 1;
      this._writer.write(r).then(() => {
        s &&
          $o(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this._transport) === null || e === void 0 || e.close();
  }
}
const tk = { websocket: Zx, webtransport: ek, polling: Yx },
  nk =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  rk = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function Ea(t) {
  if (t.length > 8e3) throw "URI too long";
  const e = t,
    n = t.indexOf("["),
    r = t.indexOf("]");
  n != -1 &&
    r != -1 &&
    (t =
      t.substring(0, n) +
      t.substring(n, r).replace(/:/g, ";") +
      t.substring(r, t.length));
  let s = nk.exec(t || ""),
    i = {},
    o = 14;
  for (; o--; ) i[rk[o]] = s[o] || "";
  return (
    n != -1 &&
      r != -1 &&
      ((i.source = e),
      (i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":")),
      (i.authority = i.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (i.ipv6uri = !0)),
    (i.pathNames = sk(i, i.path)),
    (i.queryKey = ik(i, i.query)),
    i
  );
}
function sk(t, e) {
  const n = /\/{2,9}/g,
    r = e.replace(n, "/").split("/");
  return (
    (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1),
    e.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function ik(t, e) {
  const n = {};
  return (
    e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, s, i) {
      s && (n[s] = i);
    }),
    n
  );
}
const Aa =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  ki = [];
Aa &&
  addEventListener(
    "offline",
    () => {
      ki.forEach((t) => t());
    },
    !1,
  );
class On extends He {
  constructor(e, n) {
    if (
      (super(),
      (this.binaryType = zx),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      e && typeof e == "object" && ((n = e), (e = null)),
      e)
    ) {
      const r = Ea(e);
      (n.hostname = r.host),
        (n.secure = r.protocol === "https" || r.protocol === "wss"),
        (n.port = r.port),
        r.query && (n.query = r.query);
    } else n.host && (n.hostname = Ea(n.host).host);
    Fo(this, n),
      (this.secure =
        n.secure != null
          ? n.secure
          : typeof location < "u" && location.protocol === "https:"),
      n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
      (this.hostname =
        n.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        n.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
            ? "443"
            : "80")),
      (this.transports = []),
      (this._transportsByName = {}),
      n.transports.forEach((r) => {
        const s = r.prototype.name;
        this.transports.push(s), (this._transportsByName[s] = r);
      }),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        n,
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = Wx(this.opts.query)),
      Aa &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            "beforeunload",
            this._beforeunloadEventListener,
            !1,
          )),
        this.hostname !== "localhost" &&
          ((this._offlineEventListener = () => {
            this._onClose("transport close", {
              description: "network connection lost",
            });
          }),
          ki.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(e) {
    const n = Object.assign({}, this.opts.query);
    (n.EIO = Om), (n.transport = e), this.id && (n.sid = this.id);
    const r = Object.assign(
      {},
      this.opts,
      {
        query: n,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[e],
    );
    return new this._transportsByName[e](r);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const e =
      this.opts.rememberUpgrade &&
      On.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const n = this.createTransport(e);
    n.open(), this.setTransport(n);
  }
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = e),
      e
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (n) => this._onClose("transport close", n));
  }
  onOpen() {
    (this.readyState = "open"),
      (On.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush();
  }
  _onPacket(e) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout();
          break;
        case "error":
          const n = new Error("server error");
          (n.code = e.data), this._onError(n);
          break;
        case "message":
          this.emitReserved("data", e.data),
            this.emitReserved("message", e.data);
          break;
      }
  }
  onHandshake(e) {
    this.emitReserved("handshake", e),
      (this.id = e.sid),
      (this.transport.query.sid = e.sid),
      (this._pingInterval = e.pingInterval),
      (this._pingTimeout = e.pingTimeout),
      (this._maxPayload = e.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const e = this._pingInterval + this._pingTimeout;
    (this._pingTimeoutTime = Date.now() + e),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, e)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const e = this._getWritablePackets();
      this.transport.send(e),
        (this._prevBufferLen = e.length),
        this.emitReserved("flush");
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const s = this.writeBuffer[r].data;
      if ((s && (n += $x(s)), r > 0 && n > this._maxPayload))
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const e = Date.now() > this._pingTimeoutTime;
    return (
      e &&
        ((this._pingTimeoutTime = 0),
        $o(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      e
    );
  }
  write(e, n, r) {
    return this._sendPacket("message", e, n, r), this;
  }
  send(e, n, r) {
    return this._sendPacket("message", e, n, r), this;
  }
  _sendPacket(e, n, r, s) {
    if (
      (typeof n == "function" && ((s = n), (n = void 0)),
      typeof r == "function" && ((s = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (r = r || {}), (r.compress = r.compress !== !1);
    const i = { type: e, data: n, options: r };
    this.emitReserved("packetCreate", i),
      this.writeBuffer.push(i),
      s && this.once("flush", s),
      this.flush();
  }
  close() {
    const e = () => {
        this._onClose("forced close"), this.transport.close();
      },
      n = () => {
        this.off("upgrade", n), this.off("upgradeError", n), e();
      },
      r = () => {
        this.once("upgrade", n), this.once("upgradeError", n);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : e();
            })
          : this.upgrading
            ? r()
            : e()),
      this
    );
  }
  _onError(e) {
    if (
      ((On.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return this.transports.shift(), this._open();
    this.emitReserved("error", e), this._onClose("transport error", e);
  }
  _onClose(e, n) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        Aa &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1,
            ),
          this._offlineEventListener))
      ) {
        const r = ki.indexOf(this._offlineEventListener);
        r !== -1 && ki.splice(r, 1);
      }
      (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", e, n),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
On.protocol = Om;
class ok extends On {
  constructor() {
    super(...arguments), (this._upgrades = []);
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let e = 0; e < this._upgrades.length; e++)
        this._probe(this._upgrades[e]);
  }
  _probe(e) {
    let n = this.createTransport(e),
      r = !1;
    On.priorWebsocketSuccess = !1;
    const s = () => {
      r ||
        (n.send([{ type: "ping", data: "probe" }]),
        n.once("packet", (d) => {
          if (!r)
            if (d.type === "pong" && d.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", n), !n)
              )
                return;
              (On.priorWebsocketSuccess = n.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (u(),
                      this.setTransport(n),
                      n.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const h = new Error("probe error");
              (h.transport = n.name), this.emitReserved("upgradeError", h);
            }
        }));
    };
    function i() {
      r || ((r = !0), u(), n.close(), (n = null));
    }
    const o = (d) => {
      const h = new Error("probe error: " + d);
      (h.transport = n.name), i(), this.emitReserved("upgradeError", h);
    };
    function l() {
      o("transport closed");
    }
    function a() {
      o("socket closed");
    }
    function c(d) {
      n && d.name !== n.name && i();
    }
    const u = () => {
      n.removeListener("open", s),
        n.removeListener("error", o),
        n.removeListener("close", l),
        this.off("close", a),
        this.off("upgrading", c);
    };
    n.once("open", s),
      n.once("error", o),
      n.once("close", l),
      this.once("close", a),
      this.once("upgrading", c),
      this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport"
        ? this.setTimeoutFn(() => {
            r || n.open();
          }, 200)
        : n.open();
  }
  onHandshake(e) {
    (this._upgrades = this._filterUpgrades(e.upgrades)), super.onHandshake(e);
  }
  _filterUpgrades(e) {
    const n = [];
    for (let r = 0; r < e.length; r++)
      ~this.transports.indexOf(e[r]) && n.push(e[r]);
    return n;
  }
}
let lk = class extends ok {
  constructor(e, n = {}) {
    const r = typeof e == "object" ? e : n;
    (!r.transports || (r.transports && typeof r.transports[0] == "string")) &&
      (r.transports = (r.transports || ["polling", "websocket", "webtransport"])
        .map((s) => tk[s])
        .filter((s) => !!s)),
      super(e, r);
  }
};
function ak(t, e = "", n) {
  let r = t;
  (n = n || (typeof location < "u" && location)),
    t == null && (t = n.protocol + "//" + n.host),
    typeof t == "string" &&
      (t.charAt(0) === "/" &&
        (t.charAt(1) === "/" ? (t = n.protocol + t) : (t = n.host + t)),
      /^(https?|wss?):\/\//.test(t) ||
        (typeof n < "u" ? (t = n.protocol + "//" + t) : (t = "https://" + t)),
      (r = Ea(t))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/");
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + i + ":" + r.port + e),
    (r.href =
      r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const ck = typeof ArrayBuffer == "function",
  uk = (t) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(t)
      : t.buffer instanceof ArrayBuffer,
  zm = Object.prototype.toString,
  dk =
    typeof Blob == "function" ||
    (typeof Blob < "u" && zm.call(Blob) === "[object BlobConstructor]"),
  fk =
    typeof File == "function" ||
    (typeof File < "u" && zm.call(File) === "[object FileConstructor]");
function $c(t) {
  return (
    (ck && (t instanceof ArrayBuffer || uk(t))) ||
    (dk && t instanceof Blob) ||
    (fk && t instanceof File)
  );
}
function _i(t, e) {
  if (!t || typeof t != "object") return !1;
  if (Array.isArray(t)) {
    for (let n = 0, r = t.length; n < r; n++) if (_i(t[n])) return !0;
    return !1;
  }
  if ($c(t)) return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return _i(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && _i(t[n])) return !0;
  return !1;
}
function hk(t) {
  const e = [],
    n = t.data,
    r = t;
  return (
    (r.data = Ma(n, e)), (r.attachments = e.length), { packet: r, buffers: e }
  );
}
function Ma(t, e) {
  if (!t) return t;
  if ($c(t)) {
    const n = { _placeholder: !0, num: e.length };
    return e.push(t), n;
  } else if (Array.isArray(t)) {
    const n = new Array(t.length);
    for (let r = 0; r < t.length; r++) n[r] = Ma(t[r], e);
    return n;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const n = {};
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = Ma(t[r], e));
    return n;
  }
  return t;
}
function pk(t, e) {
  return (t.data = Ta(t.data, e)), delete t.attachments, t;
}
function Ta(t, e) {
  if (!t) return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let n = 0; n < t.length; n++) t[n] = Ta(t[n], e);
  else if (typeof t == "object")
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (t[n] = Ta(t[n], e));
  return t;
}
const mk = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  gk = 5;
var fe;
(function (t) {
  (t[(t.CONNECT = 0)] = "CONNECT"),
    (t[(t.DISCONNECT = 1)] = "DISCONNECT"),
    (t[(t.EVENT = 2)] = "EVENT"),
    (t[(t.ACK = 3)] = "ACK"),
    (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (t[(t.BINARY_ACK = 6)] = "BINARY_ACK");
})(fe || (fe = {}));
class yk {
  constructor(e) {
    this.replacer = e;
  }
  encode(e) {
    return (e.type === fe.EVENT || e.type === fe.ACK) && _i(e)
      ? this.encodeAsBinary({
          type: e.type === fe.EVENT ? fe.BINARY_EVENT : fe.BINARY_ACK,
          nsp: e.nsp,
          data: e.data,
          id: e.id,
        })
      : [this.encodeAsString(e)];
  }
  encodeAsString(e) {
    let n = "" + e.type;
    return (
      (e.type === fe.BINARY_EVENT || e.type === fe.BINARY_ACK) &&
        (n += e.attachments + "-"),
      e.nsp && e.nsp !== "/" && (n += e.nsp + ","),
      e.id != null && (n += e.id),
      e.data != null && (n += JSON.stringify(e.data, this.replacer)),
      n
    );
  }
  encodeAsBinary(e) {
    const n = hk(e),
      r = this.encodeAsString(n.packet),
      s = n.buffers;
    return s.unshift(r), s;
  }
}
function of(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class Fc extends He {
  constructor(e) {
    super(), (this.reviver = e);
  }
  add(e) {
    let n;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(e);
      const r = n.type === fe.BINARY_EVENT;
      r || n.type === fe.BINARY_ACK
        ? ((n.type = r ? fe.EVENT : fe.ACK),
          (this.reconstructor = new bk(n)),
          n.attachments === 0 && super.emitReserved("decoded", n))
        : super.emitReserved("decoded", n);
    } else if ($c(e) || e.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(e)),
          n && ((this.reconstructor = null), super.emitReserved("decoded", n));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + e);
  }
  decodeString(e) {
    let n = 0;
    const r = { type: Number(e.charAt(0)) };
    if (fe[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === fe.BINARY_EVENT || r.type === fe.BINARY_ACK) {
      const i = n + 1;
      for (; e.charAt(++n) !== "-" && n != e.length; );
      const o = e.substring(i, n);
      if (o != Number(o) || e.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(o);
    }
    if (e.charAt(n + 1) === "/") {
      const i = n + 1;
      for (; ++n && !(e.charAt(n) === "," || n === e.length); );
      r.nsp = e.substring(i, n);
    } else r.nsp = "/";
    const s = e.charAt(n + 1);
    if (s !== "" && Number(s) == s) {
      const i = n + 1;
      for (; ++n; ) {
        const o = e.charAt(n);
        if (o == null || Number(o) != o) {
          --n;
          break;
        }
        if (n === e.length) break;
      }
      r.id = Number(e.substring(i, n + 1));
    }
    if (e.charAt(++n)) {
      const i = this.tryParse(e.substr(n));
      if (Fc.isPayloadValid(r.type, i)) r.data = i;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, n) {
    switch (e) {
      case fe.CONNECT:
        return of(n);
      case fe.DISCONNECT:
        return n === void 0;
      case fe.CONNECT_ERROR:
        return typeof n == "string" || of(n);
      case fe.EVENT:
      case fe.BINARY_EVENT:
        return (
          Array.isArray(n) &&
          (typeof n[0] == "number" ||
            (typeof n[0] == "string" && mk.indexOf(n[0]) === -1))
        );
      case fe.ACK:
      case fe.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class bk {
  constructor(e) {
    (this.packet = e), (this.buffers = []), (this.reconPack = e);
  }
  takeBinaryData(e) {
    if (
      (this.buffers.push(e), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = pk(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const wk = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: Fc,
      Encoder: yk,
      get PacketType() {
        return fe;
      },
      protocol: gk,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function Rt(t, e, n) {
  return (
    t.on(e, n),
    function () {
      t.off(e, n);
    }
  );
}
const vk = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Dm extends He {
  constructor(e, n, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = e),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const e = this.io;
    this.subs = [
      Rt(e, "open", this.onopen.bind(this)),
      Rt(e, "packet", this.onpacket.bind(this)),
      Rt(e, "error", this.onerror.bind(this)),
      Rt(e, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  emit(e, ...n) {
    var r, s, i;
    if (vk.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (
      (n.unshift(e),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(n), this;
    const o = { type: fe.EVENT, data: n };
    if (
      ((o.options = {}),
      (o.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == "function")
    ) {
      const u = this.ids++,
        d = n.pop();
      this._registerAckCallback(u, d), (o.id = u);
    }
    const l =
        (s =
          (r = this.io.engine) === null || r === void 0
            ? void 0
            : r.transport) === null || s === void 0
          ? void 0
          : s.writable,
      a =
        this.connected &&
        !(
          !((i = this.io.engine) === null || i === void 0) &&
          i._hasPingExpired()
        );
    return (
      (this.flags.volatile && !l) ||
        (a
          ? (this.notifyOutgoingListeners(o), this.packet(o))
          : this.sendBuffer.push(o)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(e, n) {
    var r;
    const s =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout;
    if (s === void 0) {
      this.acks[e] = n;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
        delete this.acks[e];
        for (let l = 0; l < this.sendBuffer.length; l++)
          this.sendBuffer[l].id === e && this.sendBuffer.splice(l, 1);
        n.call(this, new Error("operation has timed out"));
      }, s),
      o = (...l) => {
        this.io.clearTimeoutFn(i), n.apply(this, l);
      };
    (o.withError = !0), (this.acks[e] = o);
  }
  emitWithAck(e, ...n) {
    return new Promise((r, s) => {
      const i = (o, l) => (o ? s(o) : r(l));
      (i.withError = !0), n.push(i), this.emit(e, ...n);
    });
  }
  _addToQueue(e) {
    let n;
    typeof e[e.length - 1] == "function" && (n = e.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    e.push((s, ...i) =>
      r !== this._queue[0]
        ? void 0
        : (s !== null
            ? r.tryCount > this._opts.retries &&
              (this._queue.shift(), n && n(s))
            : (this._queue.shift(), n && n(null, ...i)),
          (r.pending = !1),
          this._drainQueue()),
    ),
      this._queue.push(r),
      this._drainQueue();
  }
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const n = this._queue[0];
    (n.pending && !e) ||
      ((n.pending = !0),
      n.tryCount++,
      (this.flags = n.flags),
      this.emit.apply(this, n.args));
  }
  packet(e) {
    (e.nsp = this.nsp), this.io._packet(e);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((e) => {
          this._sendConnectPacket(e);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(e) {
    this.packet({
      type: fe.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e)
        : e,
    });
  }
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  onclose(e, n) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", e, n),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((e) => {
      if (!this.sendBuffer.some((r) => String(r.id) === e)) {
        const r = this.acks[e];
        delete this.acks[e],
          r.withError &&
            r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case fe.CONNECT:
          e.data && e.data.sid
            ? this.onconnect(e.data.sid, e.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)",
                ),
              );
          break;
        case fe.EVENT:
        case fe.BINARY_EVENT:
          this.onevent(e);
          break;
        case fe.ACK:
        case fe.BINARY_ACK:
          this.onack(e);
          break;
        case fe.DISCONNECT:
          this.ondisconnect();
          break;
        case fe.CONNECT_ERROR:
          this.destroy();
          const r = new Error(e.data.message);
          (r.data = e.data.data), this.emitReserved("connect_error", r);
          break;
      }
  }
  onevent(e) {
    const n = e.data || [];
    e.id != null && n.push(this.ack(e.id)),
      this.connected
        ? this.emitEvent(n)
        : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n) r.apply(this, e);
    }
    super.emit.apply(this, e),
      this._pid &&
        e.length &&
        typeof e[e.length - 1] == "string" &&
        (this._lastOffset = e[e.length - 1]);
  }
  ack(e) {
    const n = this;
    let r = !1;
    return function (...s) {
      r || ((r = !0), n.packet({ type: fe.ACK, id: e, data: s }));
    };
  }
  onack(e) {
    const n = this.acks[e.id];
    typeof n == "function" &&
      (delete this.acks[e.id],
      n.withError && e.data.unshift(null),
      n.apply(this, e.data));
  }
  onconnect(e, n) {
    (this.id = e),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((e) => {
        this.notifyOutgoingListeners(e), this.packet(e);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((e) => e()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: fe.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(e) {
    return (this.flags.compress = e), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(e) {
    return (this.flags.timeout = e), this;
  }
  onAny(e) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(e),
      this
    );
  }
  prependAny(e) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(e),
      this
    );
  }
  offAny(e) {
    if (!this._anyListeners) return this;
    if (e) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (e === n[r]) return n.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(e) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(e),
      this
    );
  }
  prependAnyOutgoing(e) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(e),
      this
    );
  }
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners) return this;
    if (e) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (e === n[r]) return n.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n) r.apply(this, e.data);
    }
  }
}
function Dr(t) {
  (t = t || {}),
    (this.ms = t.min || 100),
    (this.max = t.max || 1e4),
    (this.factor = t.factor || 2),
    (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
    (this.attempts = 0);
}
Dr.prototype.duration = function () {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(),
      n = Math.floor(e * this.jitter * t);
    t = (Math.floor(e * 10) & 1) == 0 ? t - n : t + n;
  }
  return Math.min(t, this.max) | 0;
};
Dr.prototype.reset = function () {
  this.attempts = 0;
};
Dr.prototype.setMin = function (t) {
  this.ms = t;
};
Dr.prototype.setMax = function (t) {
  this.max = t;
};
Dr.prototype.setJitter = function (t) {
  this.jitter = t;
};
class Ra extends He {
  constructor(e, n) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      e && typeof e == "object" && ((n = e), (e = void 0)),
      (n = n || {}),
      (n.path = n.path || "/socket.io"),
      (this.opts = n),
      Fo(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5,
      ),
      (this.backoff = new Dr({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = "closed"),
      (this.uri = e);
    const s = n.parser || wk;
    (this.encoder = new s.Encoder()),
      (this.decoder = new s.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length
      ? ((this._reconnection = !!e), e || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = e), this);
  }
  reconnectionDelay(e) {
    var n;
    return e === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = e),
        (n = this.backoff) === null || n === void 0 || n.setMin(e),
        this);
  }
  randomizationFactor(e) {
    var n;
    return e === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = e),
        (n = this.backoff) === null || n === void 0 || n.setJitter(e),
        this);
  }
  reconnectionDelayMax(e) {
    var n;
    return e === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = e),
        (n = this.backoff) === null || n === void 0 || n.setMax(e),
        this);
  }
  timeout(e) {
    return arguments.length ? ((this._timeout = e), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(e) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new lk(this.uri, this.opts);
    const n = this.engine,
      r = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const s = Rt(n, "open", function () {
        r.onopen(), e && e();
      }),
      i = (l) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", l),
          e ? e(l) : this.maybeReconnectOnOpen();
      },
      o = Rt(n, "error", i);
    if (this._timeout !== !1) {
      const l = this._timeout,
        a = this.setTimeoutFn(() => {
          s(), i(new Error("timeout")), n.close();
        }, l);
      this.opts.autoUnref && a.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(a);
        });
    }
    return this.subs.push(s), this.subs.push(o), this;
  }
  connect(e) {
    return this.open(e);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const e = this.engine;
    this.subs.push(
      Rt(e, "ping", this.onping.bind(this)),
      Rt(e, "data", this.ondata.bind(this)),
      Rt(e, "error", this.onerror.bind(this)),
      Rt(e, "close", this.onclose.bind(this)),
      Rt(this.decoder, "decoded", this.ondecoded.bind(this)),
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  ondecoded(e) {
    $o(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  onerror(e) {
    this.emitReserved("error", e);
  }
  socket(e, n) {
    let r = this.nsps[e];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new Dm(this, e, n)), (this.nsps[e] = r)),
      r
    );
  }
  _destroy(e) {
    const n = Object.keys(this.nsps);
    for (const r of n) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(e) {
    const n = this.encoder.encode(e);
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], e.options);
  }
  cleanup() {
    this.subs.forEach((e) => e()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close");
  }
  disconnect() {
    return this._close();
  }
  onclose(e, n) {
    var r;
    this.cleanup(),
      (r = this.engine) === null || r === void 0 || r.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", e, n),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        e.skipReconnect ||
          (this.emitReserved("reconnect_attempt", e.backoff.attempts),
          !e.skipReconnect &&
            e.open((s) => {
              s
                ? ((e._reconnecting = !1),
                  e.reconnect(),
                  this.emitReserved("reconnect_error", s))
                : e.onreconnect();
            }));
      }, n);
      this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r);
        });
    }
  }
  onreconnect() {
    const e = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", e);
  }
}
const Ur = {};
function Si(t, e) {
  typeof t == "object" && ((e = t), (t = void 0)), (e = e || {});
  const n = ak(t, e.path || "/socket.io"),
    r = n.source,
    s = n.id,
    i = n.path,
    o = Ur[s] && i in Ur[s].nsps,
    l = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let a;
  return (
    l ? (a = new Ra(r, e)) : (Ur[s] || (Ur[s] = new Ra(r, e)), (a = Ur[s])),
    n.query && !e.query && (e.query = n.queryKey),
    a.socket(n.path, e)
  );
}
Object.assign(Si, { Manager: Ra, Socket: Dm, io: Si, connect: Si });
function xk(t = {}) {
  let e = window.location.hostname,
    n = t.port || 9e3,
    r = window.location.port ? `:${n}` : "",
    i = `${r ? "http" : "https"}://${e}${r}`;
  return Si(i, { withCredentials: !0 });
}
const kk = {
  install(t) {
    t.mixin(_k());
  },
};
function _k() {
  let t = document.querySelector('link[rel="icon"]'),
    e = t.href;
  return {
    created() {
      this.$options.pageMeta &&
        _r(
          () => {
            try {
              return this.$options.pageMeta.call(this);
            } catch {
              return `${this.$options.name}${this.$options.__file || ""}`, null;
            }
          },
          (n) => {
            if (n)
              if ((n.title && (document.title = n.title), n.emoji)) {
                let r = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${n.emoji}</text></svg>`;
                t.href = r;
              } else n.icon ? (t.href = n.icon) : (t.href = e);
          },
          { immediate: !0, deep: !0 },
        );
    },
  };
}
let Sk = { resources: !0, call: !0, socketio: !0 };
const Ck = {
  install(t, e = {}) {
    if (
      ((e = Object.assign({}, Sk, e)),
      e.resources && t.use(Ex, e.resources),
      e.call)
    ) {
      let n = typeof e.call == "function" ? e.call : fx;
      t.config.globalProperties.$call = n;
    }
    e.socketio && (t.config.globalProperties.$socket = xk(e.socketio));
  },
};
let Ds = n0(py);
yx("resourceFetcher", Ax);
Ds.use(dy);
Ds.use(Ck);
Ds.use(kk);
Ds.component("Button", My);
Ds.mount("#app");
export {
  wy as A,
  My as B,
  Kn as C,
  Vs as D,
  Ek as E,
  et as F,
  kg as G,
  Tk as H,
  Ja as I,
  Ak as T,
  Za as _,
  dt as a,
  Ri as b,
  yn as c,
  Fr as d,
  $l as e,
  Rk as f,
  Ot as g,
  Of as h,
  un as i,
  Mr as j,
  Qa as k,
  Vf as l,
  L1 as m,
  qf as n,
  at as o,
  oi as p,
  _r as q,
  Nl as r,
  b1 as s,
  Tl as t,
  Mk as u,
  Zt as v,
  M1 as w,
  Eg as x,
  Lf as y,
  Ar as z,
};
