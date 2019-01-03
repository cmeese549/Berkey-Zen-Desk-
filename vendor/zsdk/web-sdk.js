/*!
 * Copyright Zendesk, Inc.
 * 
 * By downloading or accessing this software, You agree to the Zendesk Terms of Service (https://www.zendesk.com/company/terms) and Application Developer and API License Agreement (https://www.zendesk.com/company/application-developer-and-api-license-agreement) and acknowledge that such terms govern Your use of and access to the software.
 * 
 */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.zChat = t() : e.zChat = t();
    }(window, function() {
    return function(e) {
    function t(i) {
    if (n[i]) return n[i].exports;
    var r = n[i] = {
    i: i,
    l: !1,
    exports: {}
    };
    e[i].call(r.exports, r, r.exports, t);
    r.l = !0;
    return r.exports;
    }
    var n = {};
    t.m = e;
    t.c = n;
    t.d = function(e, n, i) {
    t.o(e, n) || Object.defineProperty(e, n, {
    enumerable: !0,
    get: i
    });
    };
    t.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
    });
    Object.defineProperty(e, "__esModule", {
    value: !0
    });
    };
    t.t = function(e, n) {
    1 & n && (e = t(e));
    if (8 & n) return e;
    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    t.r(i);
    Object.defineProperty(i, "default", {
    enumerable: !0,
    value: e
    });
    if (2 & n && "string" != typeof e) for (var r in e) t.d(i, r, function(t) {
    return e[t];
    }.bind(null, r));
    return i;
    };
    t.n = function(e) {
    var n = e && e.__esModule ? function() {
    return e.default;
    } : function() {
    return e;
    };
    t.d(n, "a", n);
    return n;
    };
    t.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
    };
    t.p = "../../bin/";
    return t(t.s = 52);
    }([ function(e, t) {
    function n(e, t) {
    if ("function" == typeof e && e.prototype && !e.__jx__no_fqname) {
    e.prototype.__jx__fqname_chain = (e.prototype.__jx__fqname_chain || "") + " " + t;
    e.prototype.__jx__fqname = t;
    }
    }
    e.exports = n;
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t) {
    var n = {}, i = {}, r = function(t) {
    return !e.nodeType && e != window && e != document || ("FORM" != e.tagName || "submit" != t) && (!h.isCustomEvents && (h.isFF && h.isFF < 9 ? !document.createEvent("event")[t.toUpperCase()] : void 0 === e["on" + t]));
    }, o = function(t, i, o) {
    if (!t && "function" != typeof i) throw "bad arguments to on / addEventListener";
    if (!(t in n)) {
    n[t] = [];
    r(t) || s(t);
    }
    n[t].push(i);
    return e;
    }, s = function(t) {
    if (!(t in i)) {
    i[t] = function(i) {
    i && (i.stopPropagation || f(i));
    var r, o = n[t], s = o.length, a = !0;
    o._active = !0;
    for (r = 0; r < s; r++) try {
    if (!o[r]) continue;
    !1 === o[r].call(e, h.isCustomEvents && i instanceof h.CustomEvent ? i.detail : i) && (a = !1);
    } catch (e) {
    d.fire("error", e);
    }
    o._active = !1;
    if (o._dirty) {
    for (r = 0; r < s; r++) if (!o[r]) {
    r == s - 1 ? o.pop() : o[r--] = o.pop();
    s--;
    }
    o._dirty = !1;
    }
    if (!1 === a) {
    if (i) {
    i.preventDefault();
    i.returnValue = !1;
    }
    return !1;
    }
    };
    e.attachEvent ? e.attachEvent("on" + t, i[t]) : e.addEventListener && e.addEventListener(t, i[t], !1);
    }
    }, a = function(t) {
    var r = i[t];
    if (r) {
    e.attachEvent ? e.detachEvent("on" + t, r) : e.addEventListener && e.removeEventListener(t, r, !1);
    delete i[t];
    delete n[t];
    }
    }, c = function(t, r) {
    var o = n[t];
    if (o) {
    for (var s = 0, c = o.length; s < c; s++) if (o[s] === r) {
    1 == o.length ? i[t] ? a(t) : delete n[t] : o._active ? (o[s] = null, o._dirty = !0) : s == c - 1 ? o.pop() : o[s] = o.pop();
    break;
    }
    return e;
    }
    }, u = function() {
    if (n && i) {
    for (var e in i) i.hasOwnProperty(e) && a(e);
    n = i = null;
    }
    }, l = function(t, i) {
    if (!h.isCustomEvents || r(t)) {
    var o = n[t], s = !0;
    if (o && o.length) {
    o._active = !0;
    var a, c, u;
    for (a = 0, c = o.length; a < c; a++) try {
    if (!o[a]) continue;
    u = o[a].call(e, i);
    !1 === u && (s = !1);
    } catch (e) {
    d.fire("error", e);
    }
    o._active = !1;
    if (o._dirty) {
    for (a = 0; a < c; a++) if (!o[a]) {
    a == c - 1 ? o.pop() : o[a--] = o.pop();
    c--;
    }
    o._dirty = !1;
    }
    }
    return s;
    }
    return e.dispatchEvent(new h.CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: i
    }));
    }, f = function(e) {
    e.preventDefault = f.preventDefault;
    e.stopPropagation = f.stopPropagation;
    e.target = e.srcElement;
    };
    f.preventDefault = function() {
    this.returnValue = !1;
    };
    f.stopPropagation = function() {
    this.cancelBubble = !0;
    };
    var p = {
    fire: l,
    on: o,
    un: c,
    unextendEvents: u
    };
    if (t) return p;
    for (var m in p) p.hasOwnProperty(m) && (e[m] = p[m]);
    h.bugs.leaksMemory && h.bugs.leaksMemory(function() {
    for (var t in p) p.hasOwnProperty(t) && (e[t] = null);
    });
    return e;
    }
    function r(e) {
    a(0, e);
    }
    function o(e) {
    a(1, e);
    }
    function s(e) {
    a(2, e);
    }
    function a(e, t) {
    e <= f ? t() : p[e].push(t);
    }
    function c(e) {
    for (;f < e; ) {
    f++;
    for (var t = 0; t < p[f].length; t++) p[f][t]();
    p[f] = null;
    }
    }
    function u() {
    f > 0 || (document.body && document.body.firstChild ? c(1) : window.setTimeout(u, 200));
    }
    function l() {
    c(2);
    }
    var h = n(3), d = {
    extend: t,
    body: t(document.body, !0),
    window: t(window, !0),
    document: t(document, !0),
    runAfterScriptReady: r,
    runAfterFirstChildReady: o,
    runAfterDomReady: s
    };
    d.extend(d);
    var f = 0, p = [ [], [], [], [] ];
    u();
    !function() {
    var e;
    if (h.isSafari) e = window.setInterval(function() {
    if (/loaded|complete/i.test(document.readyState)) {
    window.clearInterval(e);
    l();
    }
    }, 20); else if (document.addEventListener) /loaded|complete/i.test(document.readyState) ? l() : document.addEventListener("DOMContentLoaded", l, !1); else if (h.isIE) {
    window.attachEvent("onload", l);
    var t = document.createElement("document:ready");
    e = window.setInterval(function() {
    if (/loaded|complete/i.test(document.readyState)) {
    t = null;
    window.clearInterval(e);
    l();
    } else {
    try {
    t.doScroll("left");
    } catch (e) {
    return;
    }
    t = null;
    window.clearInterval(e);
    l();
    }
    }, 200);
    }
    }();
    e.exports = d;
    i(d, "jx_core_Events");
    return d;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    var t = function(e) {
    return function(e, t) {
    return t ? null == e : void 0 === e;
    };
    }();
    e.exports = t;
    i(t, "jx_core_globals_isUndefined");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    var t = (n(10), n(26)), r = (n(6), n(2)), o = function() {
    function e(e) {
    return e.replace(/^http:/, N ? "https:" : "http:");
    }
    function n() {
    if (void 0 !== window.innerHeight) return window.innerHeight;
    if (document.documentElement) return document.documentElement.offsetHeight;
    var e = document.getElementsByTagName("body");
    return e.length ? e[0].clientHeight : 0;
    }
    function i() {
    if (void 0 !== window.innerWidth) return window.innerWidth;
    if (document.documentElement) return document.documentElement.offsetWidth;
    var e = document.getElementsByTagName("body");
    return e.length ? e[0].clientWidth : 0;
    }
    function o() {
    if (!r(s)) return s;
    var e = document.createElement("div"), t = document.createElement("div"), n = e.style, i = t.style;
    n.overflow = "auto";
    n.width = n.height = "100px";
    n.position = "absolute";
    n.top = "-1000px";
    i.width = "100%";
    i.height = "200px";
    e.appendChild(t);
    document.body.appendChild(e);
    s = e.offsetWidth - e.clientWidth;
    document.body.removeChild(e);
    return s;
    }
    var s, a, c = navigator, u = c.userAgent.toLowerCase(), l = +(/trident.*rv:? *([0-9]+)/.exec(u) || [])[1] || !1, h = function() {
    for (var e = 3, t = document.createElement("div"), n = t.getElementsByTagName("i"); t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->", 
    n[0]; ) ;
    return e > 4 ? e : document.documentMode;
    }(), d = 8 === h, f = 7 === h, p = 6 === h, m = !!window.opera && "[object Opera]" === Object.prototype.toString.call(window.opera), _ = u.indexOf("edge") > -1, g = "Google Inc." === c.vendor, v = "Apple Computer, Inc." === c.vendor, y = !_ && !h && !m && (g || v || /webkit|khtml/.test(u)), w = +/\d+/.exec(/firefox\/\d+/i.exec(c.userAgent) || ""), b = -1 !== u.indexOf("iphone"), $ = -1 !== u.indexOf("ipod"), E = -1 !== u.indexOf("ipad"), x = b || E || $, k = -1 !== u.indexOf("android"), T = -1 !== u.indexOf("wp7"), O = x || k || T, A = h && "msie" || w && "firefox" || m && "opera" || g && "chrome" || v && "safari", S = "CSS1Compat" === document.compatMode, L = !S, D = h && L && document.documentElement && !!document.documentElement.style.setExpression, R = document.documentMode || h, C = -1 !== u.indexOf("windows") || -1 !== u.indexOf("win32"), I = -1 !== u.indexOf("macintosh") || -1 !== u.indexOf("mac os x"), N = "https:" === document.location.protocol, P = c.language || c.browserLanguage || c.userLanguage || c.systemLanguage, M = {
    noBoxSizing: R <= 7,
    ie: {
    cssBottomRight: p,
    cssFixed: p || D,
    buggyCSS: p || D
    }
    }, U = "textContent" in document.createElement("div"), V = !1, j = null;
    try {
    if (window.CustomEvent && /\[native code\]|\[object CustomEventConstructor\]/.test(window.CustomEvent.toString())) {
    new window.CustomEvent("testevent", {
    bubbles: !1,
    cancelable: !0,
    detail: !0
    });
    V = !0;
    j = window.CustomEvent;
    }
    } catch (e) {}
    switch (A) {
    case "msie":
    case "firefox":
    case "chrome":
    a = +/\d+/.exec(new RegExp(A + "[ /]\\d+").exec(u) || "");
    break;
    
    default:
    a = +/\d+/.exec(/version[ \/]\d+/.exec(u) || "");
    }
    var z = !1;
    try {
    var F = {
    get passive() {
    z = !0;
    }
    }, q = function() {};
    window.addEventListener("test", q, F);
    window.removeEventListener("test", q, F);
    } catch (e) {
    z = !1;
    }
    if (p) {
    var K = [];
    M.leaksMemory = function(e) {
    t.isFunction(e);
    K.push(e);
    };
    var H = function() {
    for (var e = 0; e < K.length; e++) K[e]();
    };
    M.leaksMemory.remove = function(e) {
    for (var t = K.length - 1; t >= 0; t--) e == K[t] && K.splice(t, 1);
    };
    window.attachEvent("onunload", H);
    }
    var G = "Shockwave Flash", B = "ShockwaveFlash.ShockwaveFlash", W = "application/x-shockwave-flash", Y = "application/x-java-vm";
    return {
    browser: A,
    version: a,
    isStrict: S,
    isQuirks: L,
    isOpera: m,
    isSafari: v,
    isWebKit: y,
    isChrome: g,
    isAndroid: k,
    isIPhone: b,
    isIPod: $,
    isIPad: E,
    isIOS: x,
    isWP7: T,
    isMobile: O,
    isNewIE: l,
    isEdge: _,
    isIE: h,
    isIE6: p,
    isIE7: f,
    isIE8: d,
    isFF: w,
    isCustomEvents: V,
    CustomEvent: j,
    engineIE: R,
    bugs: M,
    isWindows: C,
    isMac: I,
    isSecure: N,
    secureURL: e,
    hasFlash: function() {
    var e, t = c.plugins && c.plugins[G];
    if (t) {
    e = c.mimeTypes && c.mimeTypes[W];
    return e && !e.enabledPlugin ? null : t.description;
    }
    if (window.ActiveXObject) try {
    t = new window.ActiveXObject(B);
    t.AllowScriptAccess = "always";
    return t.GetVariable("$version");
    } catch (e) {}
    }(),
    hasJava: function() {
    var e = c.mimeTypes;
    return h ? !T && ("javaEnabled" in c && c.javaEnabled()) : e && (e = e[Y]) && (e = e.enabledPlugin) ? e.name : void 0;
    }(),
    language: P,
    getScrollbarSize: o,
    getWindowClientHeight: n,
    getWindowClientWidth: i,
    isTextContent: U,
    hasPassiveListeners: z
    };
    }();
    e.exports = o;
    i(o, "jx_core_Browser");
    return o;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t() {
    if (window.$zopim && window.$zopim.s) return window.$zopim.s.src;
    for (var e, t = document.getElementsByTagName("script"), n = /.*zopim.(com|net|org)\//, i = 0, r = t.length; i < r; i++) {
    e = t[i].src || "";
    if (n.test(e)) return e;
    }
    return "";
    }
    function r(e) {
    e && !p.test(e) && (e = null);
    var t = "id." + (l.brandDomain || "zopim.com");
    return "https://" + (e || t) + "/authenticated/web/jwt";
    }
    var o = n(2), s = n(5), a = n(3), c = n(23), u = n(15), l = function() {
    for (var e = t(), n = [ /\/?[?]/, /\/livechat\// ], i = [], r = 0; r < n.length; r++) {
    i = e.split(n[r]);
    if (i.length) break;
    }
    var o = i[1], s = i[0], a = /^(https?:)?\/\/[^\/]+/.exec(s), c = s.replace(/^(https?:)?\/\//i, "").split("/")[0], u = c.replace(/(.+\.)(?=.+\..+)/, ""), l = i[0].split("/");
    l = l.pop() == c ? i[0] : l.join("/");
    a = a && "zopim.com" !== c ? a[0] : "https://v2.zopim.com";
    return {
    accountKey: o,
    brandDomain: u,
    baseURL: l,
    rootURL: a
    };
    }(), h = "https://v2.zopim.com/widget", d = h + "/images", f = c.map([ ".zopim.com", ".zopim.org", ".zdch.at" ], u.escape), p = new RegExp("^[a-z][a-z0-9_-]*(\\.[a-z][a-z0-9_-]*)*(" + f.join("|") + ")(:\\d+)?$", "i");
    o(s.baseURL, !0) && (s.baseURL = a.secureURL(l.baseURL));
    var m = {
    ASSETS_URL: h,
    IMAGES_URL: d,
    SOUNDS_URL: "https://v2.zopim.com/widget/sounds",
    FONTS_URL: "https://v2.zopim.com/widget/fonts",
    ASSETS_LEGACY: document.location.protocol + "//cdn.zopim.com/assets",
    BRANDING_URL: "https://www.zopim.com",
    AVATARS: {
    CONCIERGE: d + "/avatar_simple_agent.png",
    AGENT: d + "/avatar_simple_agent.png",
    VISITOR: d + "/avatar_simple_visitor.png",
    DEFAULT: d + "/avatar_simple_visitor.png"
    },
    ACCOUNT_KEY: l.accountKey,
    BRAND_DOMAIN: l.brandDomain,
    COUNTRY_CODE: function() {
    var e = '<!--# echo var="http_cf_ipcountry" default="geo" -->'.toUpperCase();
    "<" == e.charAt(0) && (e = "geo");
    return e;
    }(),
    AUTH_URL: "https://www.zopim.com/auth/$NAME/$KEY-$MID",
    AUTH_LOGOUT_URL: "https://www.zopim.com/auth/logout/$KEY-$MID",
    AUTH_SERVER_URL: r(),
    IS_POPOUT: window.$zopim_popout,
    POPOUT_WINDOW_PREFIX: "zlivechatpopout_",
    POPOUT_URL: l.rootURL + "/widget/livechat.html",
    CALLBACK_FILE_UPLOAD_PATH: "/client/widget/upload",
    FILE_UPLOAD_PATH: "/client/widget/uploads",
    FILE_UPLOAD_MAX: 20971520,
    RESEND_MSG_TIMEOUT: 5e3,
    FILE_REPLACE_SOURCE: /^(\s*https?\:\/\/v2(?:assets|uploads)\.zopim\.)com(\/)/i,
    FILE_REPLACE_RESULT: "$1io$2",
    CHAT_LOG_REMEMBER_COUNT: 10,
    getAuthServerURL: r
    };
    e.exports = m;
    i(m, "meshim_widget_Config");
    return m;
    }();
    }, function(e, t) {
    var n = {
    build_number: "20181206.071076",
    git_commit: "d63f56e821d67f575742987ac047d583f269080c",
    release_tag: "1.6.0"
    };
    e.exports = n;
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    return "function" == typeof e;
    }
    e.exports = t;
    i(t, "jx_core_globals_isFunction");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t) {
    for (var n, i = document.createElement("div"), r = 0, o = P.length; r < o; r++) if (void 0 !== i.style[P[r]]) {
    n = t[r];
    break;
    }
    return n ? e ? function(e, t, i) {
    e.autobind(t, n, i);
    } : function(e, t, i) {
    M && e.autounbind(t, n, i);
    } : function() {};
    }
    function r(e, t) {
    for (var n = {}, i = 0, r = t.length; i < r; i++) {
    var o = t[i];
    o in e && (n[o] = e[o]);
    }
    return n;
    }
    function o() {
    for (var e, t, n = arguments.length, i = 1, r = arguments[0] || {}; i < n; i++) if (null != (e = arguments[i])) for (t in e) e.hasOwnProperty(t) && r !== e[t] && (r[t] = e[t]);
    return r;
    }
    function s(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) if (t[n] && t[n].constructor && t[n].constructor === Object) {
    e[n] = e[n] || {};
    s(e[n], t[n]);
    } else e[n] = t[n];
    return e;
    }
    function a(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
    if (!(n in e)) continue;
    t[n] && t[n].constructor && t[n].constructor === Object ? a(e[n], t[n]) : delete e[n];
    }
    return e;
    }
    function c() {
    if (void 0 === A) try {
    A = u();
    } catch (e) {}
    return A;
    }
    function u() {
    if (!window.getComputedStyle) return !1;
    var e = document.createElement("div"), t = "border-box";
    document.body.appendChild(e);
    e.style.height = "10px";
    e.style.padding = "5px";
    e.style.boxSizing = t;
    e.style.webkitBoxSizing = t;
    e.style.mozBoxSizing = t;
    var n = parseInt(window.getComputedStyle(e).height, 10);
    document.body.removeChild(e);
    return 10 != n;
    }
    function l(e) {
    var t = e.getComputedStyle();
    if ("auto" == t.height) return e.getHeight();
    var n = parseInt(t.height, 10) || 0;
    V.computedHeightBoxSizingBug() && (n += (parseInt(t.paddingTop, 10) || 0) + (parseInt(t.paddingBottom, 10) || 0) + (parseInt(t.borderTopWidth, 10) || 0) + (parseInt(t.borderBottomWidth, 10) || 0));
    return n + "px";
    }
    function h(e) {
    function t() {
    this.addClass("hover");
    }
    function n() {
    this.removeClass("hover");
    }
    if (S.bugs.noBoxSizing) {
    e.on("mouseover", t);
    e.on("mouseout", n);
    }
    }
    function d(e, t) {
    for (var n, i = t.split("."); i.length; ) {
    n = i.shift();
    L(e[n], !0) && (e[n] = {});
    e = e[n];
    }
    return e;
    }
    function f(e, t) {
    if (0 === t.indexOf(e.path)) {
    for (var n, i = e.path.split(".").length, r = t.split(".").slice(i), o = e.update; r.length; ) {
    n = r.shift();
    if (!(n in o)) return;
    o = o[n];
    }
    return o;
    }
    }
    function p(e, t, n) {
    e = e.split(".");
    var i = e.pop();
    if (i) {
    for (var r = 0, o = e.length; r < o; r++) {
    e[r] in n || (n[e[r]] = {});
    n = n[e[r]];
    }
    n[i] = t;
    }
    }
    function m(e) {
    for (var t = e.split("."), n = "." + t.splice(t.length - 2, 2).join("."); t.length; ) {
    var i = {
    domain: n,
    path: "/"
    };
    R.set("zte2095", "1", i);
    if ("1" == R.get("zte2095")) {
    R.remove("zte2095", i);
    break;
    }
    n = "." + t.pop() + n;
    }
    return n;
    }
    function _(e) {
    return z.test(e);
    }
    function g(e) {
    return j.test(e);
    }
    function v(e) {
    if (e && "object" == typeof e) {
    var t = [];
    for (var n in e) e.hasOwnProperty(n) && t.push(n);
    return t;
    }
    }
    function y(e) {
    if (window.Image) try {
    var t = new window.Image();
    t.onload = t.onerror = function() {
    e(!(1 != this.width || 1 != this.height));
    };
    t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    } catch (t) {
    e();
    } else e();
    }
    function w(e, t) {
    e = parseInt(e, 10);
    isNaN(e) && (e = 0);
    var n = e < 0;
    e = Math.abs(e).toString().split("");
    for (var i = Math.max(t - e.length, 0); i--; ) e.unshift("0");
    n && e.unshift("-");
    return e.join("");
    }
    function b(e, t) {
    function n(e, t, n) {
    return n.replace("<hours>", e).replace("<minutes>", t);
    }
    var i = D("<hours>:<minutes>"), r = D("<hours>:<minutes> am"), o = D("<hours>:<minutes> pm"), s = "24" === t ? 24 : 12, a = function(e, t) {
    return e - Math[e > 0 ? "floor" : "ceil"](e / t) * t;
    }(Math[e > 0 ? "floor" : "ceil"](e / 60), s), c = V.pad(Math.abs(e) % 60, 2);
    if (24 === s) return n(V.pad(a, 2), c, i);
    var u = 0 === a ? 12 : a;
    return Math.abs(e / 60) % 24 < 12 ? n(u, c, r) : n(u, c, o);
    }
    function $(e) {
    return e && e.replace(C.FILE_REPLACE_SOURCE, C.FILE_REPLACE_RESULT);
    }
    function E(e, t) {
    t = parseInt(t, 10);
    if (!t) return e.getValue();
    var n = e.getKeys(), i = n.length, r = {};
    if (i <= t) return e.getValue() || r;
    for (var o = 0; o < i; o++) n[o] = parseInt(n[o], 10);
    n = n.sort().slice(-t);
    var s, a = e.getValue();
    if (!a) return r;
    for (o = 0, i = n.length; o < i; o++) {
    s = n[o];
    r[s] = a[s];
    }
    return r;
    }
    function x(e, t) {
    var n;
    if (e.leaf && e.parentNode) {
    n = {};
    n[e.name] = t;
    e.parentNode.write(n);
    } else e.write(t);
    }
    function k() {
    if (S.isNewIE) try {
    "body" !== document.activeElement.nodeName.toLowerCase() && document.activeElement.focus();
    } catch (e) {}
    }
    function T() {
    window.console && window.console.warn && window.console.warn("The Zopim widget embed code is invalid. Please email chat@zendesk.com with your account key: " + C.ACCOUNT_KEY);
    }
    function O(e, t, n) {
    return C.AUTH_URL.replace("$NAME", e).replace("$KEY", t).replace("$MID", n);
    }
    var A, S = n(3), L = n(2), D = n(14), R = n(20), C = n(4), I = "-webkit- -moz- -o- -ms- ".split(" "), N = "webkit Moz O ms ".split(" "), P = [ "transition", "MozTransition", "OTransition", "WebkitTransition" ], M = [ "transitionend", "transitionend", "otransitionend", "webkitTransitionEnd" ], U = [ "animationend", "animationend", "oanimationend", "webkitAnimationEnd" ], V = {
    contains: function() {
    var e = document.documentElement;
    return e.compareDocumentPosition ? function(e, t) {
    e = e.dom || e;
    t = t.dom || t;
    return !!(16 & e.compareDocumentPosition(t));
    } : e.contains ? function(e, t) {
    e = e.dom || e;
    t = t.dom || t;
    var n = 9 === e.nodeType ? e.documentElement : e, i = t.parentNode;
    return e === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i));
    } : function(e, t) {
    e = e.dom || e;
    t = t.dom || t;
    for (;t = t.parentNode; ) if (t === e) return !0;
    return !1;
    };
    }(),
    onTransitionEnd: t(!0, M),
    unTransitionEnd: t(!1, M),
    onAnimationEnd: t(!0, U),
    unAnimationEnd: t(!1, U),
    css_prefixes: I,
    cssom_prefixes: N,
    isStyleSupported: function() {
    function e(e) {
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + N.join(t + " ") + t).split(" "), r = 0; r < i.length; r++) if (void 0 !== n[i[r]]) return !0;
    return !1;
    }
    var t = document.createElement("div"), n = t.style;
    return e;
    }(),
    pick: r,
    shallowExtend: o,
    fullyExtend: s,
    fullyDelete: a,
    computedHeightBoxSizingBug: c,
    getComputedHeight: l,
    hoverFix: h,
    getEffectiveTLD: m,
    descendsObj: d,
    insertObj: p,
    getValueByReference: f,
    isDefaultName: g,
    getKeys: v,
    supportsDataURI: y,
    isIE: function() {
    return S.isIE || /Trident\//.test(window.navigator.userAgent);
    }(),
    pad: w,
    formatMinutesAsHours: b,
    replaceFileHostname: $,
    getLastLogEntries: E,
    writeNode: x,
    isAgentNick: _,
    refocusActiveElement: k,
    warnBadEmbed: T,
    getAuthLoginUrl: O
    }, j = /^Visitor [0-9]{3,}$/, z = /^agent:[0-9]+/i;
    e.exports = V;
    i(V, "meshim_widget_utils_Utils");
    return V;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    return "[object Array]" == Object.prototype.toString.call(e);
    }
    e.exports = t;
    i(t, "jx_core_globals_isArray");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t) {
    if (!o(e)) throw new TypeError("FunctionUtils.bind - what is trying to be bound is not callable");
    if (o(e.bind) && !("prototype" in e.bind)) return e.bind.apply(e, a.call(arguments, 1));
    var n = a.call(arguments, 2), i = function() {}, r = function() {
    return e.apply(this instanceof i && t ? this : t, n.concat(a.call(arguments)));
    };
    i.prototype = r.prototype;
    r.prototype = new i();
    return r;
    }
    function r(e) {
    var t;
    return function() {
    if (!t) {
    t = !0;
    return e.apply(this, a.call(arguments));
    }
    };
    }
    var o = n(6), s = {
    bind: t,
    once: r
    }, a = Array.prototype.slice;
    e.exports = s;
    i(s, "jx_core_FunctionUtils");
    return s;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    "use strict";
    if (null == this) throw new TypeError();
    var t = Object(this), n = t.length >>> 0;
    if (0 === n) return -1;
    var i = 0;
    if (arguments.length > 0) {
    i = Number(arguments[1]);
    i != i ? i = 0 : 0 != i && i != 1 / 0 && i != -1 / 0 && (i = (i > 0 || -1) * Math.floor(Math.abs(i)));
    }
    if (i >= n) return -1;
    for (var r = i >= 0 ? i : Math.max(n - Math.abs(i), 0); r < n; r++) if (r in t && t[r] === e) return r;
    return -1;
    }
    function n(e, t, n) {
    return r.call(t, e, n);
    }
    var r = Array.prototype.indexOf;
    "function" == typeof r && /\[native code\]/.test(r.toString()) || (r = t);
    e.exports = n;
    i(n, "jx_core_globals_indexOf");
    return n;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    if (!(this instanceof t)) {
    c || t._initSingleton(window);
    return c;
    }
    if (e) return t.parseQuery(e);
    this.store = {};
    }
    function r(e, t, n) {
    if (void 0 === t && void 0 === n) return e;
    void 0 === t && (t = "string");
    if (!(t in a)) throw "invalid type requested";
    return void 0 === e ? void 0 !== n ? n : a[t] : "boolean" === t ? s.test(e) : "integer" === t ? !0 === e ? 1 : parseInt(e, 10) : "float" === t ? !0 === e ? 1 : parseFloat(e) : e;
    }
    var o = n(8), s = /^(1|on|true)$/i, a = {
    boolean: !1,
    integer: 0,
    float: 0,
    string: ""
    }, c = null;
    t._initSingleton = function(e) {
    c = new t(e.location.search);
    };
    t.buildQuery = function(e) {
    var t, n, i, r, s, a, c = [], u = [];
    for (s in e) e.hasOwnProperty(s) && c.push(s);
    c.sort();
    for (t = 0, i = c.length; t < i; t++) {
    s = c[t];
    a = e[s];
    s = window.encodeURIComponent(s);
    if (o(a)) if (1 !== a.length || !0 !== a[0]) for (n = 0, r = a.length; n < r; n++) u.push(s + "=" + window.encodeURIComponent(a[n] + "")); else u.push(s); else u.push(s + "=" + window.encodeURIComponent(a + ""));
    }
    return u.join("&");
    };
    t.parseQuery = function(e) {
    var n, i, r = new t();
    e = e.replace(/^\?|\/+$/g, "");
    var o, s, a = e.split("&");
    for (n = 0, i = a.length; n < i; n++) {
    var c = a[n];
    if (c.length) {
    var u = c.indexOf("=");
    if (u <= -1) {
    o = c;
    s = !0;
    } else {
    o = c.slice(0, u);
    s = window.decodeURIComponent(c.slice(u + 1));
    }
    r.add(window.decodeURIComponent(o), s);
    }
    }
    return r;
    };
    t.getHash = function(e, n) {
    var i = n || window.location.hash;
    return t.parseQuery(i.replace(/^#/, "")).get(e);
    };
    var u = t.prototype;
    u.add = function(e, t) {
    this.has(e) ? this.store[e].push(t) : this.store[e] = [ t ];
    };
    u.has = function(e) {
    return this.store.hasOwnProperty(e);
    };
    u.getLast = function(e, t, n) {
    return this.has(e) ? this.getAt(e, this.store[e].length - 1, t, n) : r(void 0, t, n);
    };
    u.getFirst = function(e, t, n) {
    return this.getAt(e, 0, t, n);
    };
    u.getAt = function(e, t, n, i) {
    return r(this.has(e) ? this.store[e][t] : void 0, n, i);
    };
    u.getRaw = function(e) {
    return this.has(e) ? this.store[e].concat() : [];
    };
    u.get = u.getLast;
    u.toString = function() {
    return t.buildQuery(this.store);
    };
    e.exports = t;
    i(t, "meshim_common_QueryString");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    return '"' + e.replace(h, r) + '"';
    }
    function r(e) {
    return d[e] || "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
    }
    function o(e) {
    switch (typeof e) {
    case "string":
    return t(e);
    
    case "number":
    return isFinite(e) ? e.toString() : "null";
    
    case "boolean":
    return String(e);
    
    case "object":
    if (!e) return "null";
    var n, i, r = [];
    if (u(e)) {
    for (n = 0, i = e.length; n < i; n++) r[n] = o(e[n]) || "null";
    return "[" + r.join(",") + "]";
    }
    var s, a, c = [];
    for (s in e) e.hasOwnProperty(s) && c.push(s);
    c.sort();
    for (n = 0, i = c.length; n < i; n++) {
    s = c[n];
    a = o(e[s]);
    a && r.push(t(s) + ":" + a);
    }
    if (r.length) return "{" + r.join(",") + "}";
    }
    }
    function s(e, t, n) {
    return t ? m[t] : String.fromCharCode(parseInt(n, 16));
    }
    function a(e) {
    var t, n, i, r, o, a = e.match(f), c = a.length, u = a[0];
    "{" == u ? (t = {}, o = 1) : "[" == u ? (t = [], o = 1) : (t = [], o = 0, n = !0);
    var l = [ t ];
    for (c = a.length; o < c; ++o) {
    u = a[o];
    switch (u.charCodeAt(0)) {
    case 91:
    r = l[0];
    l.unshift(r[i || r.length] = []);
    i = void 0;
    break;
    
    case 93:
    l.shift();
    break;
    
    case 123:
    r = l[0];
    l.unshift(r[i || r.length] = {});
    i = void 0;
    break;
    
    case 125:
    l.shift();
    break;
    
    case 102:
    r = l[0];
    r[i || r.length] = !1;
    i = void 0;
    break;
    
    case 110:
    r = l[0];
    r[i || r.length] = null;
    i = void 0;
    break;
    
    case 116:
    r = l[0];
    r[i || r.length] = !0;
    i = void 0;
    break;
    
    case 34:
    u = u.substring(1, u.length - 1);
    -1 !== u.indexOf(g) && (u = u.replace(p, s));
    r = l[0];
    if (void 0 == i) {
    if (!(r instanceof Array)) {
    i = u || _;
    break;
    }
    i = r.length;
    }
    r[i] = u;
    i = void 0;
    break;
    
    default:
    r = l[0];
    r[i || r.length] = +u;
    i = void 0;
    }
    }
    if (n) {
    if (1 == l.length) return t[0];
    } else if (!l.length) return t;
    throw "error";
    }
    var c = n(2), u = n(8), l = (n(10), !c(window) && window.JSON || {
    parse: a,
    stringify: o
    }), h = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, d = {
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    "\\": "\\\\",
    '"': '\\"'
    }, f = new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))', "g"), p = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"), m = {
    '"': '"',
    "/": "/",
    "\\": "\\",
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "\t"
    }, _ = new String(""), g = "\\";
    e.exports = l;
    i(l, "jx_data_JSON");
    return l;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    var t, n, i = o.extend(this);
    try {
    t = new window.ActiveXObject("htmlfile");
    t.open();
    t.write("<script>document.win = window</script>");
    t.close();
    n = t.win;
    } catch (e) {}
    if (!n) {
    var r = this.iframe = document.createElement("iframe"), a = r.style;
    i.allowTransparency = "true";
    i.frameBorder = "0";
    a.backgroundColor = "transparent";
    a.position = "absolute";
    a.width = a.height = "1px";
    a.left = a.top = "-9999px";
    a.border = 0;
    document.body.appendChild(r);
    try {
    n = r.contentWindow;
    t = n.document;
    t.open();
    t.close();
    } catch (e) {
    i.fire("error");
    i.destroy();
    return;
    }
    }
    i.doc = t;
    i.win = n;
    i.$Loader = {
    cleanup: function() {
    s(function() {
    i.$Loader.payload ? i.fire("success", i.$Loader.payload) : i.fire("error");
    i.$Loader.payload = null;
    e || i.destroy();
    });
    }
    };
    i.reusable = e;
    }
    function r(e) {
    return e && e.replace(a, function(e) {
    return "&#" + e.charCodeAt(0) + ";";
    });
    }
    var o = n(1), s = n(21);
    t.prototype.setScope = function(e) {
    this.scope = e;
    };
    var a = /[&<>"']/g;
    t.prototype.load = function(e) {
    if (/^(?:https?:)?\/\//i.test(e)) {
    e = r(e);
    try {
    this.doc.open();
    this.win.$Loader = this.$Loader;
    this.win.$Loader.scope = this.scope || {};
    this.doc.write('<html><head><script src="' + e + '"></script><script>document.addEventListener && document.addEventListener("DOMContentLoaded", function() {try { $Loader.cleanup() } catch(e) {}})</script></head><body></body></html>');
    this.doc.close();
    } catch (e) {
    this.$Loader.cleanup();
    }
    } else this.$Loader.cleanup();
    };
    t.prototype.destroy = function() {
    try {
    this.iframe && document.body.removeChild(this.iframe);
    this.doc = this.win = this.iframe = this.win.$Loader = null;
    } catch (e) {}
    };
    e.exports = t;
    i(t, "jx_io_DataIFrame");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t) {
    if (isNaN(e)) {
    var n = new r();
    n.add("_", e);
    return n;
    }
    -1 == e && (e = v.length);
    var i = v[e];
    i || (v[e] = i = new r());
    if ("string" == typeof t) i.add("_", t); else for (var o in t) t.hasOwnProperty(o) && i.add(o, t[o]);
    return i;
    }
    function r() {
    function e(e, t) {
    u[e] = t;
    }
    function t(e) {
    o(e, h);
    }
    function n(e) {
    l.push(e);
    }
    function i() {
    return s();
    }
    function s(e) {
    return u[e || y] || u._;
    }
    function a(e) {
    var t, n = s(e);
    for (t = 0; t < l.length; t++) l[t](n);
    }
    function c(e, t) {
    var n, i = new r();
    v[u._] = i;
    for (var o in u) if (u.hasOwnProperty(o)) {
    n = u[o];
    if ("string" != typeof n) continue;
    n = n[e].apply(n, t);
    i.add(o, n);
    }
    return i;
    }
    for (var u = {}, l = [], h = {
    add: e,
    bind: t,
    onTranslate: n,
    toJSON: i,
    toString: s,
    update: a
    }, d = [ "concat", "replace", "toLowerCase", "toUpperCase" ], f = 0; f < d.length; f++) h[d[f]] = function(e) {
    return function() {
    return c(e, arguments);
    };
    }(d[f]);
    return h;
    }
    function o(e, t) {
    for (var n = 0; n < w.length; n++) if (w[n] == e) {
    b[n] = t;
    return;
    }
    w.push(e);
    b.push(t);
    }
    function s(e) {
    for (var t = 0; t < w.length; t++) if (w[t] == e) {
    w.splice(t, 1);
    b.splice(t, 1);
    return;
    }
    }
    function a(e) {
    e = e.split(/-|_/).slice(0, 2);
    var t = e[0] = e[0].toLowerCase();
    e[1] && (e[1] = e[1].toUpperCase());
    e = e.join("_");
    return m.languages ? e in m.languages ? e : t in m.languages ? t : null : null;
    }
    function c(e) {
    var n, i, r, o, s, c;
    e = a(e);
    if (e) {
    s = m.languages[e];
    if (s) {
    c = _[m.languages[e]];
    if (c) {
    t.language = y = e;
    g.ensureLoaded(c, function(t) {
    t && u(e);
    if (e == y) {
    for (n = 0, i = v.length; n < i; n++) v[n].update instanceof Function && v[n].update(e);
    for (n = 0, i = w.length; n < i; n++) {
    r = w[n];
    o = b[n].toString();
    if (E) r.textContent = o; else if ("string" == typeof r.innerText) r.innerText = o; else if ("string" == typeof r.nodeValue) try {
    r.data = o;
    } catch (e) {}
    }
    $._active = !0;
    i = $.length;
    for (n = 0; n < i; n++) try {
    $[n] && $[n](e);
    } catch (e) {}
    $._active = !1;
    if ($._dirty) {
    for (n = 0; n < i; n++) if (!$[n]) {
    n == i - 1 ? $.pop() : $[n--] = $.pop();
    i--;
    }
    $._dirty = !1;
    }
    }
    });
    }
    }
    }
    }
    function u(e) {
    var t, n = _[m.languages[e]];
    for (t = 0; t < n.length; t++) 0 !== n[t] && v[t].add(e, n[t]);
    }
    function l(e) {
    $.push(e);
    }
    function h(e) {
    for (var t = 0, n = $.length; t < n; t++) if ($[t] == e) {
    $._active ? ($[t] = null, $._dirty = !0) : t == n - 1 ? $.pop() : $[t] = $.pop();
    break;
    }
    }
    function d() {
    return !(-1 == y.search(x));
    }
    function f(e) {
    return d() ? e.replace(/left/, "%left%").replace(/right/, "left").replace(/%left%/, "right").replace(/ltr/, "%ltr%").replace(/rtl/, "ltr").replace(/%ltr%/, "rtl") : e;
    }
    var p = n(3), m = n(5), _ = n(22), g = n(46), v = [], y = "_", w = [], b = [], $ = [], E = p.isTextContent, x = /^ar|^fa|^he|^ku|^ur/, k = m.strings;
    if (k) for (var T = 0; T < k.length; T++) t(T, k[T]);
    t.bind = o;
    t.flip = f;
    t.onLanguage = l;
    t.unLanguage = h;
    t.update = c;
    t.unbind = s;
    t.rtl = d;
    t.findClosestLanguage = a;
    e.exports = t;
    i(t, "jx_core__");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    var t = "[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+([a-z0-9][a-z0-9-]*[a-z0-9])", n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)", r = {
    email: new RegExp("^" + t + "$", "i"),
    ip_token: new RegExp("^" + n + "$"),
    ip: new RegExp("^(?:" + n + "\\.){3}" + n + "$"),
    tld: /^(AERO|ARPA|ASIA|A[CDEFGILMNOQRSTUWXZ]|BIZ|B[ABDEFGHIJMNORSTVWYZ]|CAT|COM|COOP|C[ACDFGHIKLMNORUVXYZ]|D[EJKMOZ]|EDU|E[CEGRSTU]|F[IJKMOR]|GOV|G[ABDEFGHILMNPQRSTUWY]|H[KMNRTU]|INFO|INT|I[DELMNOQRST]|JOBS|J[EMOP]|K[EGHIMNPRWYZ]|L[ABCIKRSTUVY]||MIL|MOBI|MUSEUM|M[ACDEGHKLMNOPQRSTUVWXYZ]|NAME|NET|N[ACEFGILOPRUZ]|ORG|OM|PRO|P[AEFGHKLMNRSTWY]|QA|R[EOSUW]|S[ABCDEGHIJKLMNORTUVYZ]|TEL|TRAVEL|T[CDFGHJKLMNOPRTVWZ]|U[AGKSYZ]|V[ACEGINU]|W[FS]|XN|Y[ET]|Z[AMW])$/i,
    search: {
    email: new RegExp(t, "ig"),
    email_lws: new RegExp("(^|\\s+)" + t, "ig"),
    hurl: /(^|\s+)(?:(?:https?|ftps?):\/\/)(?:\S+)/gi,
    url: /(^|\s+)(?:[\w-]+\.)+(\w{2,})(?::[0-9]+)?(?:\/\S*)?/g,
    phone_number: /(?:^|\s+)(?:(?:\+?\d{1,3}|\(\d{1,3}\))([-.\s])?)?\d{3,10}(?:([-.\s])\d{3,10})?/gi
    },
    escape: function(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    };
    e.exports = r;
    i(r, "meshim_common_Regex");
    return r;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    return "string" == typeof e;
    }
    e.exports = t;
    i(t, "jx_core_globals_isString");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    p = e;
    }
    function r(e) {
    x = e ? y.getAuthServerURL(e) : y.AUTH_SERVER_URL;
    }
    function o(e) {
    d = e;
    }
    function s() {
    return d;
    }
    function a(e) {
    if (f) {
    +new Date() - f.issued_at >= f.expires_in - 6e4 ? w.authenticate(function(t) {
    if (t) {
    p && p.$("visitor").$("auth_status$string").update("failed");
    e(t, null);
    } else e(null, f.id_token);
    }) : e(null, f.id_token);
    } else e(null, null);
    }
    function c() {
    d = void 0;
    f = void 0;
    p && p.$("visitor").$("authenticated$bool").update(!1);
    }
    function u() {
    return !!f;
    }
    function l(e) {
    d && d(_.once(function(t) {
    t && m(t) ? w.exchangeToken({
    account_key: y.ACCOUNT_KEY,
    auth_url: x,
    site_jwt: t,
    state: f && f.state ? f.state : null
    }, function(t, n) {
    f = n;
    p && p.$("visitor").$("authenticated$bool").update(!t);
    e(t);
    }) : e({
    reason: "invalid jwt in callback"
    });
    }));
    }
    function h(e, t) {
    var n = new g();
    n.on("success", function(e) {
    "object" != typeof e && t && t({
    reason: b
    });
    e.success ? t && t(void 0, {
    issued_at: +new Date(),
    id_token: e.id_token,
    expires_in: 1e3 * e.expires_in,
    state: e.state
    }) : t && t({
    reason: E,
    details: e.details
    });
    });
    n.on("error", function() {
    t && t({
    reason: $
    });
    });
    var i = {
    account_key: e.account_key,
    token: e.site_jwt,
    format: "dataiframe"
    };
    e.state && (i.state = e.state);
    n.load(e.auth_url + "?" + v.buildQuery(i));
    }
    var d, f, p, m = n(16), _ = n(9), g = n(13), v = n(11), y = n(4), w = {
    authenticate: l,
    isAuthenticated: u,
    getSiteJWTFunc: s,
    retrieveIDToken: a,
    clearIdentity: c,
    setOverrideHost: r,
    setSiteJWTFunc: o,
    setDataNode: t,
    exchangeToken: h
    }, b = "format error", $ = "network/security error", E = "jwt verification error", x = y.AUTH_SERVER_URL;
    e.exports = w;
    i(w, "meshim_widget_controllers_IdentityController");
    return w;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    k = $.ACCOUNT_KEY;
    _ = (e || window).location.hostname;
    g = /\b(?:\d{1,3}\.){3}\d{1,3}/.test(_) ? _ : E.getEffectiveTLD(_);
    }
    function r() {
    if ($.IS_POPOUT) return b.get(A) || y().get("mid");
    var e = h();
    return e || (b.get(O) || "");
    }
    function o(e) {
    b.set(O, e, {
    path: "/",
    ttl: 365,
    domain: g
    });
    }
    function s() {
    b.remove(O, {
    path: "/",
    domain: g
    });
    }
    function a() {
    var e = d();
    if ("boolean" == typeof e) return e;
    var t = b.get(S);
    t = parseInt(t, 10);
    return 0 !== t && (1 === t || void 0);
    }
    function c() {
    b.remove(S, {
    path: "/",
    domain: g
    });
    }
    function u(e) {
    e = v(e);
    e = e ? 1 : 0;
    b.set(S, e, {
    path: "/",
    ttl: 365,
    domain: g
    });
    }
    function l() {
    s();
    w.remove(T);
    }
    function h() {
    var e = b.getJSONCookie("__zlcid");
    b.remove("__zlcid", {
    path: "/"
    });
    if (e.mID) return e.mID;
    var t = f("__zlcstore");
    b.remove("__zlcstore", {
    path: "/",
    domain: g
    });
    return t && t.mID ? t.mID : void 0;
    }
    function d() {
    var e, t = f("__zlcprivacy");
    if ("boolean" == typeof t) {
    e = t;
    u(t);
    }
    return e;
    }
    function f(e) {
    return b.getJSONCookie(e)[k];
    }
    function p(e, t) {
    var n = w.get(T) || {};
    n[k] || (n[k] = {});
    var i = n[k];
    i[e] = t;
    i.timestamp = +new Date();
    w.set(T, n);
    }
    function m(e) {
    var t = w.get(T) || {};
    if (!t[k]) return {};
    var n = t[k];
    return n.timestamp ? +new Date() - n.timestamp > x ? {} : n[e] : n[e] || {};
    }
    var _, g, v = n(42), y = n(11), w = n(41), b = n(20), $ = n(4), E = n(7), x = 48e4, k = $.ACCOUNT_KEY, T = "__zlcstore", O = "__zlcmid", A = "__zlcpomid", S = "__zlcprivacy", L = {
    init: t,
    DOM: {
    saveVariable: p,
    getVariable: m
    },
    Cookie: b,
    clearAll: l,
    setIdentity: o,
    getIdentity: r,
    clearIdentity: s,
    clearAllowCookieLaw: c,
    getAllowCookieLaw: a,
    setAllowCookieLaw: u
    };
    e.exports = L;
    i(L, "meshim_widget_controllers_StorageController");
    return L;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t() {
    var e = this;
    this.arr = [];
    this.validate = y.bind(this.validate, this);
    $.concat([ "validateAndThrow", "validateAndLog" ]).forEach(function(t) {
    e.validate[t] = e[t].bind(e);
    });
    return this.validate;
    }
    function r(e) {
    return function(t) {
    if (0 === e.length) return !1;
    for (var n = 0, i = e.length; n < i; n++) {
    if (!(0, e[n])(t)) return !1;
    }
    return new g('Expect "' + t + '" to fulfill at least one condition', t);
    };
    }
    function o(e) {
    return function(t) {
    if (t !== e) return new g('expect "' + t + '" to equal "' + e + '"', t);
    };
    }
    function s(e, t) {
    return function(n) {
    if ("object" != typeof n || !n) return new g('Expect "' + n + '" to be an object', n);
    if (t && t.requiredKeys) for (var i = 0, r = t.requiredKeys.length; i < r; i++) {
    var o = t.requiredKeys[i];
    if (!(o in n)) {
    var s = new g('Expect key "' + o + '" to be defined', n);
    return s.unshiftPath(o);
    }
    }
    for (var a in n) if (n.hasOwnProperty(a)) {
    var c, u = n[a], l = e[a];
    if (l) c = l(u); else {
    if (t && !t.whitelistedKeysOnly) continue;
    c = new g('The key "' + a + '" is not whitelisted', n);
    }
    if (c) return c.unshiftPath(a);
    }
    };
    }
    function a(e) {
    return function(t) {
    if (typeof t !== e) return new g('Expect "' + t + '" to have type "' + e + '"', t);
    };
    }
    function c() {
    return function(e) {
    if (!e) return new g('Expect "' + e + '" to be truthty', e);
    };
    }
    function u(e) {
    return function(t) {
    e.lastIndex = 0;
    if (!e.test(t)) return new g('Expect "' + t + '" to match predefined format', t);
    };
    }
    function l(e) {
    return function(t) {
    if (t.length < e) return new g('Expect the length of "' + t + '" to be at least ' + e, t);
    };
    }
    function h(e) {
    return function(t) {
    if (t.length > e) return new g('Expect the length of "' + t + '" to be at most ' + e, t);
    };
    }
    function d() {
    return function(e) {
    if (!v(e)) return new g('Expect "' + e + '" to be an Array', e);
    };
    }
    function f(e) {
    return function(t) {
    var n;
    if (!v(t)) return new g('Expect "' + t + '" to be an Array', t);
    for (var i = 0, r = t.length; i < r; i++) {
    n = e(t[i]);
    if (n) return n.unshiftPath(i);
    }
    };
    }
    function p(e, t) {
    return function(n) {
    if (!e(n)) return new g('Expect "' + n + '" to ' + t, n);
    };
    }
    function m(e) {
    return e;
    }
    function _(e) {
    var t = window.console;
    t.error ? t.error(e) : t.log && t.log(e);
    }
    function g(e, t) {
    this.message = e;
    this.actual = t;
    this.paths = void 0;
    this.unshiftPath = function(e) {
    this.paths || (this.paths = []);
    this.paths.unshift(e);
    return this;
    };
    }
    var v = n(8), y = n(9), w = window.Error, b = {
    any: r,
    equal: o,
    obj: s,
    type: a,
    ok: c,
    chain: m,
    regex: u,
    minLength: l,
    maxLength: h,
    array: d,
    each: f,
    predicate: p
    }, $ = Object.keys(b), E = t.prototype;
    $.forEach(function(e) {
    var n = b[e];
    t[e] = E[e] = function() {
    if (!(this instanceof t)) {
    var i = new t();
    return i[e].apply(i, arguments);
    }
    var r = n.apply(null, arguments);
    this.arr.push(r);
    return this.validate;
    };
    });
    E.validate = function(e) {
    for (var t, n, i = 0, r = this.arr.length; i < r; i++) {
    t = this.arr[i];
    n = t(e);
    if (n) return n;
    }
    };
    E.validateAndThrow = function(e, t) {
    var n = this.validate(e);
    t = t ? t + " - " : "";
    if (n) throw new w(t + n.message);
    };
    E.validateAndLog = function(e, t) {
    var n = this.validate(e);
    t = t ? t + " - " : "";
    if (n) {
    _(new w(t + n.message));
    return n;
    }
    };
    e.exports = t;
    g.prototype = Object.create(w.prototype);
    g.prototype.name = "ValidationError";
    i(t, "meshim_widget_utils_Validator");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    return "string" == typeof e && "" != e;
    }
    function r() {
    var e, t, n, i, r = document.cookie, o = {};
    if (!r || "string" != typeof r) return {};
    r = r.split(/;\s/);
    for (e = r.length; e--; ) try {
    t = r[e].match(/^([^=]+)(=(.*))?$/);
    if (!t) continue;
    n = f(t[1]);
    i = f(t[3] || "");
    o[n] = i;
    } catch (e) {}
    return o;
    }
    function o(e) {
    return t(e) ? r()[e] || null : null;
    }
    function s(e) {
    var t = o(e), n = {};
    try {
    n = l.parse(t);
    } catch (e) {}
    return n && "object" == typeof n ? n : {};
    }
    function a(e, t, n) {
    n = n || {};
    var i = d(e) + "=" + d(t);
    if ("ttl" in n) {
    var r = new Date(), o = 24 * n.ttl * 60 * 60 * 1e3;
    r.setTime(r.getTime() + o);
    i += "; expires=" + r.toGMTString();
    }
    "path" in n && (i += "; path=" + n.path);
    "domain" in n && (i += "; domain=" + n.domain);
    n.secure && (i += "; secure");
    document.cookie = i;
    }
    function c(e, t, n) {
    "object" != typeof t && (t = {});
    a(e, l.stringify(t), n);
    }
    function u(e, t) {
    t = t || {};
    t.ttl = -1;
    a(e, "", t);
    }
    var l = n(12), h = {
    set: a,
    get: o,
    getJSONCookie: s,
    setJSONCookie: c,
    remove: u
    }, d = window.encodeURIComponent, f = window.decodeURIComponent;
    e.exports = h;
    i(h, "meshim_common_Cookie");
    return h;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t, n) {
    s.ok("function" == typeof e, "1st argument to nextTick must be a function");
    if (n) for (var i = u.length; i-- > 0; ) if (u[i][0] === e && u[i][1] === t) return;
    u.push([ e, t ]);
    o || (o = setTimeout(r, 0));
    }
    function r() {
    var e = +new Date() + c, t = u;
    u = [];
    o && (o = clearTimeout(o));
    for (var n = 0, i = t.length; n < i; n++) {
    try {
    t[n][0].apply(t[n][1]);
    } catch (e) {
    a.fire("error", e);
    }
    if (+new Date() > e) {
    if (n < i - 1) {
    t.splice(0, n + 1);
    if (u.length) u = t.concat(u); else {
    u = t;
    o = setTimeout(r, 0);
    }
    }
    break;
    }
    }
    }
    var o, s = n(26), a = n(1), c = 100, u = [];
    t.tick = r;
    e.exports = t;
    i(t, "jx_core_globals_nextTick");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(5), r = {};
    r.$Data = i;
    e.exports = r;
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t) {
    return t ? s(e, t) : r(e);
    }
    function r(e) {
    for (var t, n, i = e.length; i > 1; ) {
    t = Math.floor(i-- * Math.random());
    n = e[t];
    e[t] = e[i];
    e[i] = n;
    }
    return e;
    }
    function o(e, t) {
    if (!e || e.length <= 0) return -1;
    if (!t) return Math.floor(Math.random() * e.length);
    t = a(e, t);
    var n, i = 0;
    for (n = t.length; n--; ) i += t[n];
    var r = Math.random() * i, o = 0, s = t.length;
    for (n = 0; n < s - 1; n++) {
    o += t[n];
    if (r <= o) return n;
    }
    return n;
    }
    function s(e, t) {
    var n, i, r, o, s, c = e.concat();
    t = a(e, t);
    e.length = 0;
    s = 0;
    for (n = t.length; n--; ) s += t[n];
    r = Math.random() * s;
    o = 0;
    n = 0;
    for (;c.length; ) {
    o += t[n];
    if (r <= o) {
    s -= t[n];
    i = c.splice(n, 1)[0];
    t.splice(n, 1);
    e.push(i);
    r = Math.random() * s;
    o = 0;
    n = 0;
    } else n++;
    }
    return e;
    }
    function a(e, t) {
    if (u(t)) {
    if (t.length === e.length) return t.concat();
    throw new window.Error("Invalid weights array: length does not match");
    }
    if (l(t)) return c(e, t);
    throw new window.Error("Invalid weights supplied");
    }
    function c(e, t, n) {
    var i, r, o;
    if (!u(e)) throw new TypeError(" arr is not an array");
    var s = Object(e), a = s.length >>> 0;
    if (!l(t)) throw new TypeError(t + " is not a function");
    arguments.length > 2 && (i = n);
    r = new Array(a);
    o = 0;
    for (;o < a; ) {
    var c, h;
    if (o in s) {
    c = s[o];
    h = t.call(i, c, o, s);
    r[o] = h;
    }
    o++;
    }
    return r;
    }
    var u = n(8), l = n(6), h = {
    shuffle: t,
    random_index: o,
    map: c
    };
    e.exports = h;
    i(h, "meshim_common_ArrayUtils");
    return h;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    var t = function(e, t) {
    return e === t || e && t && "object" == typeof e && "object" == typeof t && n(e, t);
    }, n = function(e, n) {
    var i;
    for (i in e) if (!t(e[i], n[i])) return !1;
    for (i in n) if (!t(e[i], n[i])) return !1;
    return !0;
    }, r = function(e) {
    if ("object" != typeof e || !e) return e;
    var t = {};
    for (var n in e) e.hasOwnProperty(n) && (t[n] = r(e[n]));
    return t;
    }, o = function(e) {
    if (e) for (var t = 1, n = arguments.length; t < n; t++) {
    var i = arguments[t];
    if (i) for (var r in i) i.hasOwnProperty(r) && (e[r] = i[r]);
    }
    return e;
    }, s = {
    equal: t,
    clone: r,
    extend: o
    };
    e.exports = s;
    i(s, "jx_core_ObjectUtil");
    return s;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    return "number" == typeof e;
    }
    e.exports = t;
    i(t, "jx_core_globals_isNumber");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t) {
    e || o.log(t);
    }
    var r = n(6), o = {
    ok: t,
    isFunction: function(e, n) {
    t(r(e), n);
    }
    };
    o.log = function() {};
    e.exports = o;
    i(o, "jx_core_Assert");
    return o;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t) {
    c = e.$("connection");
    u = t.$("tmp");
    h = c.$("status$string");
    d = c.$("socket_status$string");
    f = c.$("disconnection_status$string");
    p = c.$("socket_resume_timestamp$int");
    m = c.$("socket_open_timestamp$int");
    _ = c.$("client_reattached_timestamp$int");
    g = e.$("livechat").$("account").$("status$string");
    v = e.$("visitor").$("auth_status$string");
    c.bindValue(o);
    }
    function n() {
    c && c.unbindValue(o);
    }
    function r() {
    n();
    l = clearTimeout(l);
    c = u = null;
    h = d = f = p = m = _ = g = v = null;
    }
    function o(e) {
    e && "resume" == e.socket_status$string && (l = setTimeout(o, 1e3));
    var t = s();
    t && u.update({
    friendly_connection_status$string: t
    });
    }
    function s() {
    var e = +new Date(), t = h.getValue(), n = d.getValue(), i = f.getValue(), r = p.getValue(), o = m.getValue(), s = _.getValue();
    if ((n || t || i) && "disconnecting" !== i) {
    if ("break" == n) {
    if (y.indexOf(t) > -1) return "closed";
    if ("disconnected" === i) return "closed";
    }
    return (null === n || "reconnect" == n || "resume" == n && e - r >= 1e3) && "reattached" === t && o <= s ? "connected" : "connecting";
    }
    }
    function a() {
    var e = h.getValue(), t = g.getValue(), n = f.getValue(), i = v.getValue();
    return "banned" === t ? "banned" : "disconnected" === n ? "failed" === i ? "authentication_failed" : "logged_out" : "idle_disconnect" === e ? "idle_disconnect" : "error" === e || "shutdown" === e ? "server_error" : "unknown";
    }
    var c, u, l, h, d, f, p, m, _, g, v, y = [ "idle_disconnect", "shutdown", "error" ], w = {
    init: t,
    reset: r,
    destroy: n,
    getConnectionClosedReason: a
    };
    e.exports = w;
    i(w, "meshim_widget_controllers_webSDKAPI_ConnectionStatusMonitor");
    return w;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t) {
    t = t || window;
    s = e.$("livechat").$("profile");
    var n = {
    window: a.extend(t, !0),
    document: a.extend(t.document, !0)
    };
    n.document.on("mousemove", r);
    n.window.on("click", r);
    n.window.on("scroll", r);
    n.window.on("keypress", r);
    o();
    }
    function r() {
    u++;
    }
    function o() {
    u && s.write({
    active$int: +new Date()
    });
    u = 0;
    window.setTimeout(o, l);
    }
    var s, a = n(1), c = {
    init: t
    }, u = 1, l = 2e4;
    e.exports = c;
    i(c, "meshim_widget_controllers_Tracker");
    return c;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    var t = n(14), r = {
    livechat: {
    timestamp$int: +new Date(),
    settings: {
    file_sending: {
    enabled$bool: !0
    },
    behavior: {
    do_not_display$bool: !1
    },
    theme: {
    name$string: "simple",
    message_type$string: "bubble_avatar",
    colors: {
    placeholder$string: "_"
    },
    chat_button: {
    position$string: "br",
    position_mobile$string: "br"
    },
    chat_window: {
    position$string: "br",
    size$string: "medium",
    profile_card: {
    display_avatar$bool: !0,
    display_rating$bool: !0,
    display_title_name$bool: !0
    },
    use_banner$bool: !0,
    title_bar: {
    hide_minimize$bool: !1,
    hide_popout$bool: !1
    }
    },
    branding: {
    type$string: "icon_font_zopim"
    }
    },
    greetings: {
    online$string: t("Chat With Us"),
    offline$string: t("Leave a Message")
    },
    banner: {
    enabled$bool: !0,
    layout$string: "image_right",
    text$string: t("Chat with us"),
    image_path$string: "",
    image_data$string: ""
    },
    chat_button: {
    hide_when_offline$bool: !1
    },
    chat_window: {
    mobile_mode$string: "popout",
    title_bar: {
    title$string: t("support"),
    status_messages: {
    online$string: t("We're online."),
    away$string: t("We're away."),
    offline$string: t("We're offline.")
    }
    }
    },
    login: {
    allowed_types: {
    email$bool: !0,
    facebook$bool: !0,
    twitter$bool: !1,
    google$bool: !0
    },
    phone_display$bool: !1,
    restrict_profile$bool: !1
    },
    concierge: {
    display_name$string: t("Live Support"),
    title$string: t("Ask us anything"),
    avatar_path$string: "",
    avatar_data$string: "",
    greeting: {
    enabled$bool: !1,
    message$string: t("Hi, welcome to our website!")
    }
    },
    branding: {
    hide_branding$bool: !1,
    hide_favicon$bool: !1,
    custom_favicon_path$string: ""
    },
    language: {
    language$string: "--"
    },
    cookie_law: {
    enabled$bool: !1
    },
    sound: {
    disabled$bool: !1
    },
    popout: {
    enabled$bool: !0
    },
    rating: {
    enabled$bool: !0
    },
    end_chat_menu: {
    enabled$bool: !0,
    message$string: ""
    },
    emoticons: {
    enabled$bool: !1
    },
    bubble: {
    enabled$bool: !0,
    title$string: t("Questions?"),
    text$string: t("Click here to chat with us")
    },
    forms: {
    pre_chat_form: {
    required$bool: !1,
    profile_required$bool: !1,
    message$string: "",
    form: {
    0: {
    name$string: "name",
    required$bool: 0
    },
    1: {
    name$string: "email",
    required$bool: 0
    },
    2: {
    label$string: t("Choose a Department"),
    name$string: "department",
    required$bool: 0,
    type$string: "department"
    },
    3: {
    label$string: t("Message"),
    name$string: "message",
    required$bool: 0,
    type$string: "textarea"
    },
    4: {
    label$string: t("Phone"),
    name$string: "phone",
    required$bool: 0,
    type$string: "text",
    hidden$bool: !0
    }
    }
    },
    offline_form: {
    message$string: t("Sorry, we aren't online at the moment. Leave a message and we'll get back to you."),
    message_disabled$string: t("Sorry, we aren't online at the moment."),
    post_submit_message$string: t("Thanks for the message! We'll get back to you as soon as we can."),
    profile_required$bool: !0,
    form: {
    0: {
    name$string: "name",
    required$bool: 1
    },
    1: {
    name$string: "email",
    required$bool: 1
    },
    2: {
    label$string: t("Message"),
    name$string: "message",
    required$bool: 1,
    type$string: "textarea"
    },
    3: {
    label$string: t("Phone"),
    name$string: "phone",
    required$bool: 0,
    type$string: "text",
    hidden$bool: !0
    }
    }
    },
    post_chat_form: {
    header$string: t("Nice chatting with you!"),
    message$string: t("How would you rate the chat experience you just had?"),
    comments_enabled$bool: !0,
    comments_messages: {
    good: {
    message$string: t("Thanks for the good rating! Would you like to leave a comment?"),
    placeholder$string: t("What did you like about this chat?")
    },
    bad: {
    message$string: t("Sorry that we disappointed you. We'd appreciate it if you could tell us how to improve."),
    placeholder$string: t("What did you dislike about this chat?")
    }
    }
    },
    card_form: {}
    }
    }
    }
    };
    e.exports = r;
    i(r, "meshim_widget_controllers_DefaultDataNode");
    return r;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    var t = n(14), r = n(10), o = n(2), s = t("File size too large. Maximum limit is <size>."), a = t("The file you are trying to send is not supported."), c = t("File sending is temporarily disabled. Please try again later."), u = t("<size> bytes"), l = t("<size> KB"), h = t("<size> MB"), d = {};
    d.ERR_SIZE = "TOO_LARGE";
    d.ERR_FORMAT = "ILLEGAL_TYPE";
    d.ERR_DISABLED = "FILE_UPLOADS_TEMPORARILY_DISABLED";
    var f = /^(x-|vnd\.)/i, p = [ "png", "jpg", "jpeg", "gif", "txt", "pdf" ], m = {}, _ = t("Failed to send. Please try again.");
    m[d.ERR_SIZE] = s;
    m[d.ERR_FORMAT] = a;
    m[d.ERR_DISABLED] = c;
    d.prettySize = function() {
    var e = [ u, l, h ], t = [ 0, 1, 2 ];
    return function(n, i) {
    n = Math.max(parseInt(n, 10) || 0, 0);
    i = i || {};
    for (var r, o = i.base2 ? 1024 : 1e3, s = e.length; s--; ) {
    r = Math.pow(o, s);
    if (n >= r) return e[s].replace("<size>", (n / r).toFixed(t[s]));
    }
    };
    }();
    d.prettyType = function(e, t, n) {
    n = n || window.Infinity;
    var i = e.split("/")[1];
    i = i && i.replace(f, "");
    if (i && i.length < n) return i.toLowerCase();
    i = t.split(".").pop();
    return (i || "").toLowerCase();
    };
    d.isValidType = function(e, t) {
    if (e) {
    t = t || p;
    var n = e.substr(e.lastIndexOf(".") + 1).toLowerCase();
    return -1 !== r(n, t);
    }
    };
    d.prettyError = function(e, t) {
    var n = e in m ? m[e] : _;
    o(t) || (n = n.replace("<size>", d.prettySize(t || 5e6)));
    return n;
    };
    d.blobToFile = function(e, t, n) {
    e.lastModifiedDate = new Date();
    e.name = t;
    return new window.File([ e ], t, {
    type: n
    });
    };
    d.getExtension = function(e) {
    var t = e.lastIndexOf(".");
    return -1 === t ? null : e.substr(t + 1).toLowerCase();
    };
    e.exports = d;
    i(d, "meshim_common_FileUtil");
    return d;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t) {
    h = e;
    d = t;
    h.$("livechat").$("channel").$("department_id$int").on("value", function(e) {
    e && (f = e);
    });
    }
    function r(e, t, n) {
    var i = parseInt(t, 10) || parseInt(d.getServerTime().toFixed(0), 10), r = i + "", o = h.$("livechat").$("profile"), s = f, a = (e.msg || "") + "";
    "department" in e && (s = e.department);
    h.$("livechat").$("channel").$("log").$(r).write({
    timestamp$int: i,
    type$string: "chat.msg",
    msg$string: a,
    nick$string: o.$("nick$string").getValue() || "",
    display_name$string: o.$("display_name$string").getValue() || "",
    department_id$int: s,
    unverified$bool: !0,
    __client$bool: !0
    }, n);
    }
    function o(e, t) {
    var n = parseInt(t, 10) || parseInt(d.getServerTime().toFixed(0), 10), i = n + "";
    h.$("livechat").$("channel").$("log").$(i).write({
    timestamp$int: n,
    nick$string: h.$("livechat").$("profile").$("nick$string").getValue() || "",
    display_name$string: h.$("livechat").$("profile").$("display_name$string").getValue() || "",
    type$string: "chat.file.upload",
    file_name$string: e.file_name || "",
    file_type$string: e.file_type || "",
    file_size$int: e.file_size || 0,
    unverified$bool: !0,
    __client$bool: !0
    });
    return n;
    }
    function s(e, t) {
    function n(e) {
    if ("ok" !== e.raw.__status) return t(new window.Error(l(e.raw.error)));
    if (!e.raw.data || "chat.file" !== e.raw.data.type) return t(new window.Error("INTERNAL_ERROR"));
    t(null, w.pick(e.raw.data, [ "mime_type", "name", "size", "url", "metadata" ]));
    }
    var i = E._validateAndPrepareData([ e ]);
    t = _.once(t);
    if (p(i)) m(function() {
    t(new window.Error(i));
    }); else {
    var r = d.registerCallback(n), o = "https://" + i.host + g.CALLBACK_FILE_UPLOAD_PATH, s = {
    ts: parseInt(d.getServerTime().toFixed(0), 10),
    __messageID: r
    }, a = {
    "X-Zopim-MID": i.mid,
    "X-Zopim-UID": i.uid
    }, c = {
    error: function() {
    t(new window.Error("CONN_ERROR"));
    },
    load: function() {
    if (200 !== this.status) {
    var e;
    try {
    e = JSON.parse(this.responseText);
    } catch (e) {}
    t(e && e.error ? new window.Error(l(e.error)) : new window.Error("INTERNAL_ERROR"));
    }
    }
    };
    E._uploadFiles(i.form_data, o, s, a, c);
    }
    }
    function a(e, t) {
    var n = E._validateAndPrepareData(e);
    if (p(n)) return n;
    var i = o({
    file_name: n.name,
    file_type: n.type,
    file_size: n.size
    }, t), r = "https://" + n.host + g.FILE_UPLOAD_PATH, s = {
    ts: i
    }, a = {
    "X-Zopim-MID": n.mid,
    "X-Zopim-UID": n.uid
    };
    E._uploadFiles(n.form_data, r, s, a);
    }
    function c(e) {
    if (!window.FormData) return "NOT_SUPPORTED";
    var t = h.$("livechat"), n = t.$("settings").$("file_sending"), i = t.$("settings").$("package"), r = n.$("enabled$bool").getValue(), o = (n.$("allowed_extensions$string").getValue() || "").trim().replace(/\s*,\s*/g, ",").split(","), s = i.$("color_customization_enabled$int").getValue() || i.$("widget_customization_enabled$int").getValue(), a = t.$("profile").$("mid$string").getValue(), c = t.$("profile").$("uid$string").getValue(), u = d.getHost(), l = new window.FormData(), f = [], p = [], m = 0;
    if (!u) return "CONN_ERROR";
    if (!s) return "INVALID_PLAN";
    if (!r) return "NOT_ALLOWED";
    for (var _ = 0, y = e.length; _ < y; _++) {
    if (!v.isValidType(e[_].name, o)) return "INVALID_EXTENSION";
    f.push(e[_].name);
    p.push(e[_].type);
    m += e[_].size || 0;
    l.append("file_" + e[_].name, e[_]);
    }
    return m > g.FILE_UPLOAD_MAX ? "EXCEED_SIZE_LIMIT" : {
    form_data: l,
    name: f.join(", "),
    type: p.join(", "),
    size: m,
    host: u,
    mid: a,
    uid: c
    };
    }
    function u(e, t, n, i, r) {
    var o = new window.XMLHttpRequest(), s = t + (Object.keys(n).length ? "?" + y.buildQuery(n) : "");
    if (o.upload) {
    o.open("POST", s, !0);
    for (var a in i) i.hasOwnProperty(a) && o.setRequestHeader(a, i[a]);
    for (var c in r) r.hasOwnProperty(c) && o.addEventListener(c, r[c]);
    o.send(e);
    }
    }
    function l(e) {
    return $[e] || "UNKNOWN_ERROR";
    }
    var h, d, f, p = n(16), m = n(21), _ = n(9), g = n(4), v = n(30), y = n(11), w = n(7), b = {
    NOT_SUPPORTED: "NOT_SUPPORTED",
    NOT_ALLOWED: "NOT_ALLOWED",
    CONN_ERROR: "CONN_ERROR",
    INVALID_EXTENSION: "INVALID_EXTENSION",
    INVALID_PLAN: "INVALID_PLAN",
    EXCEED_SIZE_LIMIT: "EXCEED_SIZE_LIMIT",
    INTERNAL_ERROR: "INTERNAL_ERROR",
    UNKNOWN_ERROR: "UNKNOWN_ERROR"
    }, $ = {
    TOO_LARGE: "EXCEED_SIZE_LIMIT",
    ILLEGAL_TYPE: "INVALID_EXTENSION",
    NO_SESSION: "INTERNAL_ERROR",
    UNEXPECTED_ERROR: "INTERNAL_ERROR",
    UNABLE_TO_GET_SETTINGS: "INTERNAL_ERROR",
    S3_UPLOAD_ERROR: "INTERNAL_ERROR",
    NO_GATES: "INTERNAL_ERROR",
    FILE_UPLOADS_DISABLED: "NOT_ALLOWED",
    FILE_UPLOADS_TEMPORARILY_DISABLED: "INVALID_PLAN"
    }, E = {
    FILE_SENDING_ERRORS: b,
    init: t,
    sendChatMsg: r,
    sendFiles: a,
    sendFileWithCallback: s,
    _validateAndPrepareData: c,
    _uploadFiles: u
    };
    e.exports = E;
    i(E, "meshim_widget_controllers_ChatUtils");
    return E;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    var t = {};
    t.SECOND = 1e3;
    t.MINUTE = 60 * t.SECOND;
    t.HOUR = 60 * t.MINUTE;
    t.DAY = 24 * t.HOUR;
    t.WEEK = 7 * t.DAY;
    e.exports = t;
    i(t, "meshim_common_Time");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t, n, i, r, o, c, u) {
    this.CLUSTERS = e.CLUSTERS;
    this.WEIGHTS = e.WEIGHTS;
    this.NEAR_MAP = e.NEAR_MAP;
    this.FALLBACKS = e.FALLBACKS;
    this.geo_code = n || "geo";
    this.default_domain = t;
    this.supported_domains = (u || []).concat(this.default_domain);
    var l = s.map(this.supported_domains, a.escape);
    this.supported_proxy_re = new RegExp("^[a-z][a-z0-9_-]*(\\.[a-z][a-z0-9_-]*)*(" + l.join("|") + ")(:\\d+)?$", "i");
    this.cluster_hosts = [];
    this.host_list = [];
    this.host_index = 0;
    this.last_connected_host = r && this.getValidatedHost(r);
    this.override_proxy = i && this.getValidatedHost(i);
    this.num_primary_hosts = o || 0;
    this.num_fallback_hosts = c || 0;
    this.init();
    }
    var r = n(25), o = n(10), s = n(23), a = n(15), c = /^([a-z][a-z0-9_-]*)(:\d+)?$/i, u = t.prototype;
    u.init = function() {
    var e = this.geo_code && this.geo_code in this.NEAR_MAP ? this.NEAR_MAP[this.geo_code] : this.NEAR_MAP.DEFAULT;
    if (!e) throw "Error: no cluster code found for " + this.geo_code;
    if (e in this.CLUSTERS) this._growClusterHosts(e, this.num_primary_hosts); else if (!this.override_proxy && !this.last_connected_host) throw "Error: " + e + " has no cluster definition";
    if (e in this.FALLBACKS) for (var t = this.FALLBACKS[e], n = 0, i = t.length; n < i; n++) {
    var r = t[n];
    r in this.CLUSTERS && this._growClusterHosts(r, this.num_fallback_hosts);
    }
    this._makeHostList();
    };
    u._verifyHostInGeoConfig = function(e) {
    var t = this;
    return Object.keys(t.CLUSTERS).some(function(n) {
    return t.CLUSTERS[n].some(function(n) {
    return e === t.getValidatedHost(n);
    });
    });
    };
    u._growClusterHosts = function(e, t) {
    var n = this.CLUSTERS[e], i = this.getWeights(e);
    s.shuffle(n, i);
    t && (n = n.slice(0, t));
    this.cluster_hosts = this.cluster_hosts.concat(n);
    };
    u.getWeights = function(e) {
    if (!(e in this.CLUSTERS)) return [];
    var t, n = this.CLUSTERS[e], i = n.length, o = new Array(i);
    if (this.WEIGHTS && this.WEIGHTS[e]) {
    var s = this.WEIGHTS[e];
    for (t = i; t--; ) {
    var a = n[t];
    o[t] = r(s[a]) ? s[a] : 1;
    }
    } else for (t = i; t--; ) o[t] = 1;
    return o;
    };
    u.getValidatedHost = function(e, t) {
    if (e) {
    if (!t && c.test(e)) return this._expandSimpleHost(e);
    if (this.supported_proxy_re.test(e)) return e;
    }
    return !1;
    };
    u._expandSimpleHost = function(e) {
    return e.replace(c, "$1" + this.default_domain + "$2");
    };
    u._makeHostList = function() {
    var e = this, t = s.map(this.cluster_hosts, function(t) {
    return e._expandSimpleHost(t);
    }), n = [];
    this.override_proxy && n.push(this.override_proxy);
    this.last_connected_host && this.last_connected_host !== this.override_proxy && this._verifyHostInGeoConfig(this.last_connected_host) && n.push(this.last_connected_host);
    t = t.filter(function(e) {
    return -1 === o(e, n);
    });
    this.host_list = n.concat(t);
    this.host_index = 0;
    };
    u.getHostList = function() {
    return this.host_list;
    };
    u.getNextHost = function() {
    return this.host_index >= this.host_list.length ? "" : this.host_list[this.host_index++];
    };
    u.hasNext = function() {
    return this.host_index < this.host_list.length;
    };
    u.rewind = function() {
    this.host_index = 0;
    };
    u.pushHostToLast = function(e) {
    var t, n = this.getValidatedHost(e), i = o(n, this.host_list);
    if (-1 !== i) {
    t = this.host_list.splice(i, 1);
    this.host_list = this.host_list.concat(t);
    }
    };
    e.exports = t;
    i(t, "meshim_common_GeoAccess");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    window.__$__GEO = e;
    }
    function r(e, t) {
    this.clusters_config = e;
    this.setGeoCode("geo" === a ? c : a);
    try {
    if (t.length <= 0) throw "SSI cluster definition not found";
    if ("<" == t.charAt(0)) throw "SSI not processed";
    this.clusters_config = JSON.parse(t);
    } catch (e) {}
    }
    var o = n(33), s = n(24), a = '<!--# echo var="http_cf_ipcountry" default="geo" -->'.toUpperCase(), c = '<!--# echo var="geoip_country_code" default="geo" -->'.toUpperCase(), u = [ ".zopim.net", ".zopim.org", ".zdch.at" ];
    "<" == a.charAt(0) && (a = "geo");
    "<" == c.charAt(0) && (c = "geo");
    r.SUPPORTED_DOMAINS = u;
    var l = r.prototype;
    l.getGeoCode = function() {
    return this.countryCode;
    };
    l.setGeoCode = function(e) {
    if (e && "--" !== e) {
    this.countryCode = e;
    t(e);
    }
    };
    l.updateClustersConfig = function(e) {
    try {
    s.extend(this.clusters_config, JSON.parse(e));
    } catch (e) {
    window.console && window.console.log("Unable to process update");
    }
    };
    l.getGeoAccess = function(e, t, n, i, r, s) {
    return new o(this.clusters_config, r || ".zopim.com", this.countryCode, e, t, n, i, s || u);
    };
    e.exports = r;
    i(r, "meshim_common_GeoAccessFactory");
    return r;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    var t = {
    CLUSTERS: {
    US: [ "us08", "us10", "us12", "us14", "us16", "us18", "us20", "us22", "us24", "us26", "us28", "us30", "us32", "us34", "us36", "us38", "us40", "us42", "us44", "us46" ],
    DE: [ "de04", "de06", "de08", "de10", "de12", "ie02", "ie04", "ie06", "ie08", "ie10", "ie12", "ie14", "ie16", "de14", "de16", "de18", "de20", "ie18", "ie20", "ie22", "ie24", "de22", "de24", "de26", "de28" ],
    SG: [ "sg06", "sg08", "sg10", "sg12", "sg14", "sg16", "sg18", "sg20" ],
    JP: [ "jp02", "jp04", "jp06", "jp08" ],
    AU: [ "au02", "au04" ],
    BR: [ "br02", "br04", "br06", "br08", "br10", "br12" ]
    },
    FALLBACKS: {
    US: [ "DE" ],
    DE: [ "US" ],
    SG: [ "US" ],
    JP: [ "US" ],
    AU: [ "SG", "US" ],
    BR: [ "US" ]
    },
    NEAR_MAP: {
    AL: "DE",
    AD: "DE",
    AM: "DE",
    AT: "DE",
    BY: "DE",
    BE: "DE",
    BA: "DE",
    BG: "DE",
    CH: "DE",
    CY: "DE",
    CZ: "DE",
    DE: "DE",
    DK: "DE",
    EE: "DE",
    ES: "DE",
    EU: "DE",
    FO: "DE",
    FI: "DE",
    FR: "DE",
    GB: "DE",
    GE: "DE",
    GI: "DE",
    GR: "DE",
    HU: "DE",
    HR: "DE",
    IE: "DE",
    IM: "DE",
    IS: "DE",
    IT: "DE",
    LT: "DE",
    LU: "DE",
    LV: "DE",
    MC: "DE",
    MK: "DE",
    MT: "DE",
    NO: "DE",
    NL: "DE",
    PK: "DE",
    PO: "DE",
    PT: "DE",
    RO: "DE",
    SA: "DE",
    SE: "DE",
    SI: "DE",
    SK: "DE",
    SM: "DE",
    TR: "DE",
    UA: "DE",
    VA: "DE",
    ZA: "DE",
    NG: "DE",
    MA: "DE",
    AP: "SG",
    BD: "SG",
    BN: "SG",
    CN: "SG",
    ID: "SG",
    IN: "SG",
    LA: "SG",
    KH: "SG",
    LK: "SG",
    MM: "SG",
    MY: "SG",
    SG: "SG",
    TH: "SG",
    VN: "SG",
    AU: "AU",
    NZ: "AU",
    HK: "JP",
    KR: "JP",
    JP: "JP",
    PH: "US",
    RU: "JP",
    TW: "JP",
    AR: "BR",
    BO: "BR",
    BR: "BR",
    CL: "BR",
    PE: "BR",
    PY: "BR",
    UY: "BR",
    DEFAULT: "US"
    }
    };
    e.exports = t;
    i(t, "meshim_config_geo_WidgetMediatorsAccessDefinition");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    var t = this, n = this.longpoll = new s(!0), i = this.sender = new s(!0);
    n.on("success", function(e) {
    t.process_data(e);
    });
    n.on("error", function() {
    t.abort("longpoll error");
    });
    i.on("success", function() {
    t.ondrain && t.ondrain();
    });
    i.on("error", function() {
    t.abort("sender error");
    });
    this.url = "https://" + e;
    r.window.on("unload", this.unload = function() {
    t.abort("unload");
    });
    this.longpoll.load(this.url + [ "c", +new Date() ].join("/"));
    }
    var r = n(1), o = t;
    t.protocol = "xdds";
    var s = n(13);
    t.prototype.process_data = function(e) {
    if (e && !this._abort) {
    !this.ts && this.onopen && this.onopen();
    this.ts = +new Date();
    this.onmessage && this.onmessage(e, this.ts);
    this.longpoll && this.longpoll.load(this.url + [ "p", +new Date() ].join("/"));
    }
    };
    t.prototype.send = function(e) {
    if (this._abort) return !1;
    var t = this.url + [ "d", +new Date(), window.encodeURIComponent(e) ].join("/");
    this.sender && this.sender.load(t);
    return !1;
    };
    t.prototype.abort = function(e) {
    if (!this._abort) {
    this._abort = !0;
    a("XDDS - abort: " + e);
    r.window.un("unload", this.unload);
    this.longpoll.destroy();
    this.sender.destroy();
    this.longpoll = this.sender = this.unload = null;
    this.onclose && this.onclose(e);
    window.CollectGarbage && window.CollectGarbage();
    }
    };
    var a = function() {};
    e.exports = o;
    i(o, "jx_io_socket_XDomainDynScript");
    return o;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    var t = new n("wss://" + e + [ "c", +new Date() ].join("/")), i = this;
    t.onclose = function(e) {
    i.onclose && i.onclose(e);
    };
    t.onerror = function(e) {
    i.onerror && i.onerror(e);
    };
    t.onmessage = function(e) {
    i.onmessage && i.onmessage(e.data, +new Date());
    };
    t.onopen = function(e) {
    i.onopen && i.onopen(e);
    };
    this.ws = t;
    }
    var n = window.WebSocket || window.MozWebSocket, r = n ? t : null;
    t.prototype.abort = function() {
    if (!this._aborted) {
    this._aborted = !0;
    var e = this.ws;
    e.readyState == n.CONNECTING ? e.onopen = function() {
    e.close();
    } : e.close();
    }
    };
    t.prototype.send = function(e) {
    this.ws.send(e);
    return !0;
    };
    t.protocol = "ws";
    e.exports = r;
    i(r, "jx_io_socket_WebSocket");
    return r;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    function t(e) {
    !c && o.onopen && o.onopen();
    c = +new Date();
    e.origin == i && ("event-stream" == e.data ? s.onload = null : o.onmessage && o.onmessage(e.data, c));
    }
    var n, i, o = this, s = this.iframe = r("iframe");
    this.url = "https://" + e;
    s.src = this.src = n = this.url + [ "c", +new Date() ].join("/");
    i = n.match(/https?:\/\/[^\/]+/)[0];
    s.onload = function(e) {
    o.abort(e);
    };
    document.body.insertBefore(s, document.body.firstChild);
    a("SPM connecting to: " + this.url);
    window.addEventListener("message", t, !1);
    this.remove_listeners = function() {
    window.removeEventListener("message", t, !1);
    };
    var c;
    }
    function r(e) {
    var t = document.createElement(e), n = t.style;
    n.position = "absolute";
    n.width = n.height = 0;
    n.overflow = "hidden";
    return t;
    }
    var o = n(3), s = window.postMessage ? !o.isAndroid && t : null;
    t.protocol = "spm";
    t.prototype.send = function(e) {
    this.iframe.contentWindow.postMessage(e, this.src);
    return !0;
    };
    t.prototype.abort = function(e) {
    if (!this._abort) {
    this._abort = !0;
    a(e);
    this.iframe && document.body.removeChild(this.iframe);
    this.onclose && this.onclose(e);
    this.remove_listeners();
    this.iframe = this.remove_listeners = null;
    }
    };
    var a = function() {};
    e.exports = s;
    i(s, "jx_io_socket_StreamingPostMessage");
    return s;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    function t(e) {
    c("extracting data");
    !n && s.onopen && s.onopen();
    n = e;
    u += i.responseText.substr(l);
    l = i.responseText.length;
    u = u.split("\n\n");
    for (var t = 0; t < u.length - 1; t++) s.onmessage && s.onmessage(u[t], n);
    u = u[u.length - 1];
    (l > 1048576 && !u.length || l > 4194304) && s.abort();
    }
    var n, i = this.xhr = new o(), s = this, u = "", l = 0;
    this.url = a + e;
    i.open("GET", this.url + [ "c", +new Date() ].join("/"), !0);
    i.onerror = function(e) {
    s.abort(e);
    };
    if (r.isIE) {
    i.onprogress = function() {
    t(+new Date());
    };
    i.onload = function() {
    s.abort("close");
    };
    } else i.onreadystatechange = function() {
    switch (i.readyState) {
    case 3:
    t(+new Date());
    break;
    
    case 4:
    s.abort("close");
    }
    };
    c("CXHR connecting to: " + this.url);
    i.send();
    }
    var r = n(3), o = r.isIE ? window.XDomainRequest : !r.isOpera && !r.isAndroid && window.XMLHttpRequest, s = o ? t : null, a = r.isIE ? "//" : "https://";
    t.protocol = "cxhr";
    t.prototype.send = function(e) {
    function t() {
    c.abort("send failed");
    }
    function n() {
    c.xhr_sender = null;
    clearTimeout(i);
    c.ondrain && c.ondrain();
    }
    var i, s = this.url + [ "d", +new Date() ].join("/"), a = new o(), c = this;
    a.open("POST", s, !0);
    a.send(e);
    if (r.isIE) {
    a.onerror = t;
    a.onload = n;
    } else a.onreadystatechange = function() {
    if (4 == a.readyState) {
    200 != a.status && t();
    n();
    }
    };
    i = setTimeout(t, 5e3);
    this.xhr_sender = a;
    return !1;
    };
    t.prototype.abort = function(e) {
    if (!this._abort) {
    this._abort = !0;
    c(e);
    this.xhr && this.xhr.abort();
    this.xhr_sender && this.xhr_sender.abort();
    this.onclose && this.onclose(e);
    this.onerror = this.onload = this.onprogress = this.onreadystatechange = this.xhr = this.xhr_sender = null;
    }
    };
    var c = function() {};
    e.exports = s;
    i(s, "jx_io_socket_ChunkedXHR");
    return s;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, n, i, r) {
    this.options = r = r || {};
    for (var o in g) g.hasOwnProperty(o) && (o in r || (r[o] = g[o]));
    if (!m && !r.PREFERRED_PROVIDER) throw "No available transports";
    u.extend(this);
    this.provider = r.PREFERRED_PROVIDER || m;
    this.id = i || t.generateID();
    this.host = e;
    this.ns = n;
    this.path = "/" + [ "s", this.ns, this.provider.protocol, this.id ].join("/");
    this.url = this.host + this.path + "/";
    this.status = "connecting";
    this.connected = !1;
    this.quality = 0;
    this.rtt = r.INITIAL_RTT;
    this.clock_skew = 0;
    this.connect_attempts = 0;
    this.connections = 0;
    this.disconnects = 0;
    this.sent_bytes = 0;
    this.recv_bytes = 0;
    this.sent_messages = 0;
    this.recv_messages = 0;
    this.sent_frames = 0;
    this.recv_frames = 0;
    this.lost_frames = 0;
    this.ooo_frames = 0;
    this.remote_seq = 0;
    this.local_seq = 0;
    this.timeout_server = 0;
    this.timeout_response_soft = 0;
    this.timeout_response_hard = 0;
    this.bytes_at_connect = -1;
    this.time_last_alive = -1;
    this.time_last_open = -1;
    this.starttime = Date.now();
    this.uptime = 0;
    this.connected_time = new a();
    this.idle_time = new a();
    this.last_frame_time = 0;
    this.raw_clock_skew = 0;
    this.smooth_skewed_transit_time_in = 0;
    this.remote_smooth_skewed_transit_time_out = 0;
    this.cur_conn_recv_messages = 0;
    this.drained = !0;
    this.buffer = [];
    this.glitch_timer = this.reconnect_timer = null;
    this.reconnect_delay = r.RECONNECT_DELAY_MS * (.2 * Math.random() + .8);
    this.keep_alive_interval = 15e3;
    this.data_packet_queue = new c(this);
    this.connect();
    var s = this;
    this.onoffline = function() {
    t.prototype.onoffline.call(s);
    };
    this.ononline = function() {
    t.prototype.ononline.call(s);
    };
    u.window.on("offline", this.onoffline);
    u.window.on("online", this.ononline);
    }
    function r() {
    var e = w, t = new Date(), n = t.getUTCFullYear() - 2e3, i = t.getUTCMonth() + 1, r = t.getUTCDate(), o = t.getUTCHours(), s = t.getUTCMinutes(), a = t.getUTCSeconds(), c = t.getUTCMilliseconds();
    return e[n] + e[i] + e[r] + e[o] + e[s] + e[a] + e[c >> 6] + e[63 & c];
    }
    function o(e) {
    for (var t = "", n = w; e-- > 0; ) t += n.charAt(Math.floor(Math.random() * n.length));
    return t;
    }
    function s(e, t, n) {
    return Math.min(n, Math.max(t, e));
    }
    function a() {
    this.count = 0;
    this.sum = 0;
    this.sq_sum = 0;
    this.mean = 0;
    this.stddev = 0;
    }
    function c(e) {
    this.socket = e;
    this.queue = [];
    this.curFrame = null;
    this.curIdx = 0;
    this.last_work_finished_time = 0;
    this.work_timer = null;
    this.processing = !1;
    }
    var u = n(1), l = n(12), h = n(39), d = n(38), f = n(37), p = n(36), m = f || h || d || p, _ = p, g = {
    INITIAL_RTT: 1e3,
    RECONNECT_DELAY_MS: 3e4,
    FAST_RECONNECT_MS: 100,
    FLUSH_DELAY_MS: 75,
    MAX_BLOCKING_TIME_MS: 40,
    MAX_NO_WORK_TIME_MS: 15,
    PREFERRED_PROVIDER: void 0
    };
    t.providers = {};
    [ h, d, f, p ].forEach(function(e) {
    e && (t.providers[e.protocol] = e);
    });
    t.available = function() {
    return !!m;
    };
    t.generateID = function() {
    return o(16);
    };
    t.prototype.connect = function(e) {
    this.debug("connect(" + (e && "glitch" || "") + ")");
    if (!this.reconnect_timer) {
    var t = this, n = this.options, i = !this.connections || !this.cur_conn_recv_messages;
    !n.PREFERRED_PROVIDER && i && (this.provider = 1 & this.connect_attempts ? _ : m);
    this.response_timer = clearTimeout(this.response_timer);
    this.timeout_timer = clearTimeout(this.timeout_timer);
    if (this.socket) {
    this.socket.onclose = this.socket.ondrain = this.socket.onerror = this.socket.onmessage = this.socket.onopen = null;
    this.socket.abort("connect");
    this.socket = null;
    }
    this.connected = !1;
    this.cur_conn_recv_messages = 0;
    if (e) {
    this.reconnect_delay = n.RECONNECT_DELAY_MS * (.2 * Math.random() + .9);
    this.glitch_timer = setTimeout(function() {
    t.quality = 0;
    t.glitch_timer = setTimeout(function() {
    t.status = "reconnecting";
    t.fire_break();
    }, s(3 * t.rtt, 1e3, 5e3));
    }, s(3 * this.rtt, 1e3, 5e3));
    }
    this.debug("reconnect_delay: " + this.reconnect_delay);
    clearTimeout(this.reconnect_timer);
    this.reconnect_timer = setTimeout(function() {
    t.reconnect_timer = null;
    t.reconnect_delay = Math.min(1.4 * t.reconnect_delay + 1e3, 6e4);
    t.reconnect_delay *= .2 * Math.random() + .9;
    t.connect();
    }, this.reconnect_delay);
    this.path = "/" + [ "s", this.ns, this.provider.protocol, this.id ].join("/");
    this.url = this.host + this.path + "/";
    this.debug("connecting: " + this.url);
    this.socket = new this.provider(this.url);
    this.transport = this.provider.protocol;
    this.connect_attempts++;
    this.socket.onopen = function() {
    t.status = "connected";
    t.glitch_timer = clearTimeout(t.glitch_timer);
    t.reconnect_timer = clearTimeout(t.reconnect_timer);
    t.connections++;
    t.drained = !0;
    t.connected = !0;
    t.time_last_open = t.time_last_alive = Date.now();
    t.uptime >= 0 && (t.uptime -= t.time_last_open);
    1 == t.connections ? t.fire("open") : t.fire_resume();
    t.flush();
    t.keep_alive();
    t.debug("connected");
    -1 == t.bytes_at_connect && setTimeout(function() {
    t.bytes_at_connect = t.recv_bytes;
    }, 50);
    };
    this.socket.onmessage = function(e, n) {
    t.onmessage(e, n);
    };
    this.socket.onclose = function(e) {
    t._onclose(e);
    };
    this.socket.ondrain = function(e) {
    t._ondrain(e);
    };
    this.socket.onerror = function(e) {
    t._onerror(e);
    };
    }
    };
    t.prototype.reconnect = function() {
    this.reconnect_timer = clearTimeout(this.reconnect_timer);
    this.broken_reason = "FORCED_RECONNECT";
    this.connect();
    };
    t.prototype.send = function(e, t) {
    if ("disconnected" != this.status) {
    "null" == this.buffer[0] && (this.buffer = []);
    this.buffer.push(l.stringify(e));
    this.schedule_flush();
    t && this.response_timeout();
    }
    };
    t.prototype.close = function(e) {
    this.debug("close()");
    this.flush_scheduled = clearTimeout(this.flush_scheduled);
    this.keep_alive_timer = clearTimeout(this.keep_alive_timer);
    this.reconnect_timer = clearTimeout(this.reconnect_timer);
    this.response_timer = clearTimeout(this.response_timer);
    this.timeout_timer = clearTimeout(this.timeout_timer);
    this.broken_reason || (this.broken_reason = "CLOSE");
    this.fire_break();
    this.status = e ? "reconnecting" : "disconnected";
    this.connected = !1;
    this.quality = 0;
    if (this.socket) {
    this.socket.onclose = this.socket.ondrain = this.socket.onerror = this.socket.onmessage = this.socket.onopen = null;
    this.socket.abort("close");
    this.socket = null;
    if (!e) {
    u.window.un("offline", this.onoffline);
    u.window.un("online", this.ononline);
    }
    }
    };
    t.prototype.hibernate = function() {};
    t.prototype.onoffline = function() {
    this.broken_reason = "OFFLINE";
    this.debug("onoffline");
    this.close(!0);
    };
    t.prototype.ononline = function() {
    this.debug("ononline");
    if ("disconnected" != this.status && !this.connected) {
    this.reconnect_timer = clearTimeout(this.reconnect_timer);
    this.connect();
    }
    };
    t.prototype.schedule_flush = function() {
    if ("disconnected" != this.status && !this.flush_scheduled && this.drained && this.connected) {
    var e = this, t = this.options;
    this.flush_scheduled = setTimeout(function() {
    e.flush();
    }, t.FLUSH_DELAY_MS);
    }
    };
    t.prototype.flush = function() {
    if ("disconnected" != this.status && this.buffer.length && this.drained && this.connected) {
    var e = this.buffer;
    this.sent_messages += e.length;
    this.sent_frames++;
    e = this.generate_frame(e.join("\n"));
    this.drained = this.socket.send(e);
    this.sent_bytes += e.length;
    this.flush_scheduled = clearTimeout(this.flush_scheduled);
    this.buffer = [];
    this.keep_alive();
    this.time_last_alive = Date.now();
    }
    };
    t.prototype.keep_alive = function() {
    if ("disconnected" != this.status) {
    clearTimeout(this.keep_alive_timer);
    var e = this;
    this.keep_alive_timer = setTimeout(function() {
    e.debug("pong!");
    e.send(null);
    }, this.keep_alive_interval);
    }
    };
    t.prototype.response_timeout = function() {
    if (!this.response_timer) {
    var e = this, t = s(4 * this.rtt + this.options.FLUSH_DELAY_MS, 2e3, 2e4);
    this.response_timer = setTimeout(function() {
    e.timeout_response_soft++;
    e.debug("response timeout, " + t + "ms");
    e.fire_break("SOFT_RESPONSE_TIMEOUT");
    e.response_timer = setTimeout(function() {
    e.timeout_response_hard++;
    e.debug("response timeout - reconnecting");
    e.broken_reason = "HARD_RESPONSE_TIMEOUT";
    e.connect(!0);
    }, 2 * t);
    }, t);
    }
    };
    t.prototype.reset_server_timeout = function() {
    clearTimeout(this.timeout_timer);
    var e = this, t = 4 * this.keep_alive_interval + s(4 * e.rtt, 2e3, 2e4);
    this.timeout_timer = setTimeout(function() {
    e.timeout_server++;
    e.debug("server " + t + "ms timeout, reconnecting");
    e.broken_reason = "SERVER_TIMEOUT";
    e.connect(!0);
    }, t);
    };
    t.prototype.fire_break = function(e) {
    this.broken || this.fire("break", e || this.broken_reason);
    this.broken = !0;
    this.broken_reason = "";
    this.uptime < 0 && (this.uptime += Date.now());
    };
    t.prototype.fire_resume = function() {
    this.broken_reason = "";
    this.broken && this.fire("resume");
    this.broken = !1;
    this.uptime >= 0 && (this.uptime -= Date.now());
    };
    t.prototype.onmessage = function(e, t) {
    this.recv_bytes += e.length;
    e = e.split("\n");
    if (e.length < 6) this.debug("Bad data: " + e.join("\n")); else {
    var n = Date.now(), i = +e[0], r = +e[1], o = +e[2], s = (e[3], e[4]);
    this.calculate_clocks(t || Date.now(), i, r);
    this.reset_server_timeout();
    switch (s) {
    case "a":
    this.broken_reason = "ABORT";
    this.close();
    break;
    
    case "d":
    this.response_timer = clearTimeout(this.response_timer);
    this.fire_resume();
    this.check_sequence(o);
    this.data_packet_queue.queueFrame(e, 5, n);
    break;
    
    case "e":
    this.debug("server: Are you still there?");
    this.send(null);
    this.flush();
    break;
    
    case "n":
    this.remote_seq = o;
    this.keep_alive_interval = +e[5] || 15e3;
    this.debug("keep_alive is " + this.keep_alive_interval + "ms");
    this.connections > 1 && this.fire("reopen");
    break;
    
    case "p":
    this.debug("ping!");
    }
    }
    };
    t.prototype._onclose = function() {
    var e = this, t = this.options;
    0 == this.connections && 0 == this.disconnects && this.fire("close");
    this.debug("_onclose");
    this.disconnects++;
    this.broken_reason = "HANGUP";
    if (this.connected) this.reconnect_timer = setTimeout(function() {
    e.reconnect_timer = null;
    e.connect(!0);
    }, t.FAST_RECONNECT_MS); else if (!this.connections && 1 == this.connect_attempts) {
    clearTimeout(this.reconnect_timer);
    this.reconnect_timer = setTimeout(function() {
    e.reconnect_timer = null;
    e.connect();
    }, 0);
    }
    this.connected = !1;
    clearTimeout(this.keep_alive_timer);
    this.time_last_alive > 0 && this.idle_time.add(Date.now() - this.time_last_alive);
    this.time_last_open > 0 && this.connected_time.add(Date.now() - this.time_last_open);
    this.time_last_alive = this.time_last_open = -1;
    this.uptime < 0 && (this.uptime += Date.now());
    };
    t.prototype._ondrain = function() {
    this.drained = !0;
    this.flush();
    };
    t.prototype._onerror = function(e) {
    this.debug("_error");
    this.fire("error", e);
    };
    t.prototype.generate_frame = function(e, t) {
    return [ Date.now(), this.smooth_skewed_transit_time_in, ++this.local_seq, this.remote_seq, t || "d", e ].join("\n");
    };
    var v = Math.pow(50, .1), y = Math.pow(1e3, .1) - v;
    t.prototype.calculate_clocks = function(e, t, n) {
    var i = e - t, r = Math.max(0, e - this.last_frame_time), o = 1 / (r / 45e3 + 1);
    this.smooth_skewed_transit_time_in ? this.smooth_skewed_transit_time_in = o * this.smooth_skewed_transit_time_in + (1 - o) * i : this.smooth_skewed_transit_time_in = i;
    this.remote_smooth_skewed_transit_time_out = n;
    if (this.smooth_skewed_transit_time_in && this.remote_smooth_skewed_transit_time_out) {
    this.rtt = this.smooth_skewed_transit_time_in + this.remote_smooth_skewed_transit_time_out;
    this.quality = ~~(100 * (1 - (Math.pow(this.rtt, .1) - v) / y));
    this.quality = Math.min(100, Math.max(0, this.quality));
    this.raw_clock_skew = i - this.rtt / 2;
    this.clock_skew ? this.clock_skew = .9 * this.clock_skew + .1 * this.raw_clock_skew : this.clock_skew = this.raw_clock_skew;
    }
    this.time_last_alive = this.last_frame_time = e;
    };
    t.prototype.check_sequence = function(e) {
    if (this.remote_seq + 1 == e) this.remote_seq = e; else if (this.remote_seq < e) {
    var t = e - this.remote_seq + 1;
    this.lost_frames += t;
    this.fire("lost", t);
    this.remote_seq = e;
    } else {
    this.ooo_frames++;
    this.fire("out_of_order");
    }
    };
    m && (t.prototype.transport = m.protocol);
    t.prototype.debug = function() {};
    var w = "+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    t.genDate = r;
    t.genID = o;
    a.prototype.add = function(e) {
    this.count++;
    this.sum += e;
    this.sq_sum += e * e;
    this.mean = this.sum / this.count;
    this.stddev = Math.sqrt(this.sq_sum / this.count - this.mean * this.mean);
    };
    var b = c.prototype;
    b.queueFrame = function(e, t, n) {
    this.queue.push({
    msgs: e,
    start_idx: t,
    receive_time: n
    });
    this.process();
    };
    b.process = function() {
    var e = Date.now() - this.last_work_finished_time;
    if (!(this.processing && e < this.socket.options.MAX_NO_WORK_TIME_MS)) {
    this.work_timer = window.clearTimeout(this.work_timer);
    this.processing = !0;
    this.work();
    }
    };
    b.work = function() {
    for (var e, t, n, i = Date.now() + this.socket.options.MAX_BLOCKING_TIME_MS, r = !1, o = this.socket.recv_frames, s = this, a = 0; a < this.queue.length; a++) {
    e = this.queue[a];
    if (!("start_time" in e)) {
    e.start_time = Date.now();
    e.ticks = 0;
    e.idx = e.start_idx;
    }
    e.ticks++;
    t = e.msgs;
    n = t.length;
    for (;e.idx < n; ) {
    var c, u = Date.now();
    if (u > i) {
    r = !0;
    break;
    }
    this.socket.dispatch_delay = u - e.receive_time;
    try {
    c = l.parse(t[e.idx]);
    e.idx++;
    } catch (n) {
    this.socket.debug("Invalid json message: " + t[e.idx]);
    continue;
    }
    this.socket.fire("message", c);
    this.socket.recv_messages++;
    this.socket.cur_conn_recv_messages++;
    }
    e.idx >= n && this.socket.recv_frames++;
    if (r) break;
    }
    this.queue.splice(0, this.socket.recv_frames - o);
    this.queue.length ? this.work_timer = window.setTimeout(function() {
    s.work();
    }, 0) : this.processing = !1;
    this.last_work_finished_time = Date.now();
    };
    e.exports = t;
    i(t, "jx_io_Socket");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    return function() {
    try {
    var t = Array.prototype.slice.call(arguments, 0);
    t.unshift(o);
    h.appendChild(o);
    o.addBehavior("#default#userData");
    o.load(l);
    var n = e.apply(a, t);
    h.removeChild(o);
    return n;
    } catch (e) {}
    };
    }
    function r(e) {
    return e.replace(f, "___");
    }
    var o, s = n(12), a = {}, c = window, u = c.document, l = "localStorage";
    a.disabled = !1;
    a.set = function() {};
    a.get = function() {};
    a.remove = function() {};
    a.clear = function() {};
    a.transact = function(e, t, n) {
    var i = a.get(e);
    if (null == n) {
    n = t;
    t = null;
    }
    void 0 === i && (i = t || {});
    n(i);
    a.set(e, i);
    };
    a.getAll = function() {};
    a.serialize = function(e) {
    return s.stringify(e);
    };
    a.deserialize = function(e) {
    if ("string" == typeof e) try {
    return s.parse(e);
    } catch (t) {
    return e || void 0;
    }
    };
    if (function() {
    try {
    return l in c && c[l];
    } catch (e) {
    return !1;
    }
    }()) {
    o = c[l];
    a.set = function(e, t) {
    if (void 0 === t) return a.remove(e);
    o.setItem(e, a.serialize(t));
    return t;
    };
    a.get = function(e) {
    return a.deserialize(o.getItem(e));
    };
    a.remove = function(e) {
    o.removeItem(e);
    };
    a.clear = function() {
    o.clear();
    };
    a.getAll = function() {
    for (var e = {}, t = 0; t < o.length; ++t) {
    var n = o.key(t);
    e[n] = a.get(n);
    }
    return e;
    };
    } else if (u.documentElement.addBehavior) {
    var h, d;
    try {
    d = new window.ActiveXObject("htmlfile");
    d.open();
    d.write('<script>document.w=window</script><iframe src="/favicon.ico"></frame>');
    d.close();
    h = d.w.frames[0].document;
    o = h.createElement("div");
    } catch (e) {
    o = u.createElement("div");
    h = u.body;
    }
    var f = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
    a.set = t(function(e, t, n) {
    t = r(t);
    if (void 0 === n) return a.remove(t);
    e.setAttribute(t, a.serialize(n));
    e.save(l);
    return n;
    });
    a.get = t(function(e, t) {
    t = r(t);
    return a.deserialize(e.getAttribute(t));
    });
    a.remove = t(function(e, t) {
    t = r(t);
    e.removeAttribute(t);
    e.save(l);
    });
    a.clear = t(function(e) {
    var t = e.XMLDocument.documentElement.attributes;
    e.load(l);
    for (var n, i = 0; n = t[i]; i++) e.removeAttribute(n.name);
    e.save(l);
    });
    a.getAll = t(function(e) {
    for (var t, n = e.XMLDocument.documentElement.attributes, i = {}, o = 0; t = n[o]; ++o) {
    var s = r(t.name);
    i[t.name] = a.deserialize(e.getAttribute(s));
    }
    return i;
    });
    }
    try {
    a.set("__storejs__", "__storejs__");
    "__storejs__" != a.get("__storejs__") && (a.disabled = !0);
    a.remove("__storejs__");
    } catch (e) {
    a.disabled = !0;
    }
    a.enabled = !a.disabled;
    var p = a;
    e.exports = p;
    i(p, "meshim_common_DOMStorage");
    return p;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    return !!e && "false" != e;
    }
    e.exports = t;
    i(t, "jx_core_globals_parseBoolean");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    function t() {
    if ("prerender" != document.visibilityState) {
    document.removeEventListener("visibilitychange", t);
    Pe.connect();
    }
    }
    oe = e.isCookieDenied;
    se = e.overrideProxy;
    ae = e.source;
    ce = e.lastHost;
    ue = e.source_ver;
    H = e.activity_window || window;
    G = H.document;
    B = e.root;
    Z = B.$("tmp").$("api_settings");
    J = B.$("tmp").$("server_settings");
    Q = B.$("livechat").$("settings").$("cached$bool");
    W = B.$("connection");
    ee = W.$("server_retired$bool");
    ne = W.$("server_ready$bool");
    ne.bindValue(a);
    ee.bindValue(s);
    X = B.$("livechat").$("ui").$("mockup$bool").getValue();
    if (X) W.$("status$string").update("reattached"); else {
    B.$("livechat").$("profile").bindValue(o);
    W.$("status$string").bindValue(r);
    W.$("socket_status$string").bindValue(S);
    B.bindWrite(P);
    W.$("reconnect$bool").bindValue(_);
    if (window.__z_sdk) q = !0; else {
    q = !1;
    "visibilityState" in document && "prerender" == document.visibilityState ? document.addEventListener("visibilitychange", t) : Pe.connect();
    }
    }
    }
    function r(e) {
    Se = "reattached" == e;
    if (Se) {
    W.update({
    client_reattached_timestamp$int: +new Date()
    });
    P();
    }
    Se && !1 === q && L();
    if ("idle_disconnect" == e || "shutdown" == e || "error" == e) {
    var t = B.$("livechat").$("account").$("status$string").getValue(), n = B.$("connection").$("backoff"), i = n.$("active$int").getValue() || 0, r = n.$("max_seconds$int").getValue();
    "invalid_account_key" == t ? ve.warnBadEmbed() : "widget_v2" == ae && "shutdown" == e && i && r && p(r);
    d();
    }
    S();
    }
    function o(e) {
    e && (oe() || me.IS_POPOUT || e.mid$string && _e.setIdentity(e.mid$string));
    }
    function s(e) {
    te = !0 === e;
    }
    function a(e) {
    ie = !1 !== e;
    if (ie) {
    Re = !1;
    c();
    }
    }
    function c() {
    for (var e = 0, t = De.length; e < t; e++) {
    var n = De[e];
    he(n) && n();
    }
    De = [];
    }
    function u(e) {
    if (!ie || te) {
    W.update({
    server_ready$bool: !1
    });
    De.push(e);
    if (!Re) {
    Re = !0;
    Y.reconnect();
    }
    } else e();
    }
    function l(e) {
    Y && Y.send(e);
    }
    function h(e) {
    for (var t = -1, n = 0; n < Oe.length; n++) if (Oe[n].socket == e) {
    t = n;
    break;
    }
    if (-1 !== t) {
    var i = Oe[t].expiryTimer;
    e.close();
    clearTimeout(i);
    }
    }
    function d(e) {
    Y && h(Y);
    K = !e;
    Y = null;
    Ae = "";
    }
    function f() {
    window.clearTimeout(Pe.reconnectTimer);
    d(!0);
    Pe.connect();
    }
    function p(e) {
    window.clearTimeout(Pe.reconnectTimer);
    Pe.reconnectTimer = window.setTimeout(function() {
    Pe.reconnect();
    }, 1e3 * e);
    }
    function m() {
    W.update({
    status$string: "idle_disconnect"
    });
    }
    function _(e) {
    e && f();
    }
    function g(e) {
    var t = le || new ye(e, "W", null, Ee);
    t.on("open", function() {
    b(e, t);
    });
    return t;
    }
    function v() {
    var e = y();
    try {
    re = Te.getGeoAccess(se, e, 3, 2);
    } catch (e) {
    window.console && window.console.log("Unable to compute host list");
    return;
    }
    w(xe);
    }
    function y() {
    return ce || W.$("server$string").getValue() || "";
    }
    function w(e) {
    function t() {
    clearTimeout(r);
    i.un("close", t);
    w(e);
    }
    if (!Y && !K) {
    var n = re.getNextHost();
    if (n) {
    Ce++;
    var i = g(n);
    Oe.push({
    socket: i,
    expiryTimer: setTimeout(function() {
    i != Y && i.close();
    }, ke)
    });
    if (re.hasNext()) {
    var r = setTimeout(t, e);
    i.on("close", t);
    }
    }
    }
    }
    function b(e, t) {
    if (!X) if (Y) h(t); else {
    W.update({
    socket_open_timestamp$int: +new Date(),
    socket_status$string: null,
    disconnection_status$string: null
    });
    Ae = e;
    Y = t;
    Y.on("break", E);
    Y.on("message", $);
    Y.on("reopen", k);
    Y.on("resume", x);
    Y.on("error", function() {
    var e = this.connect_attempts, t = this.recv_messages;
    if (e > 3 && 0 == t) {
    d(!0);
    w(xe);
    }
    });
    O();
    }
    }
    function $(e) {
    if (e) {
    if (e.raw && e.raw.__messageID in Ne) {
    var t = Ne[e.raw.__messageID];
    delete Ne[e.raw.__messageID];
    t(e);
    }
    var n = B;
    if ("update" in e) {
    var i = ve.getValueByReference(e, "livechat.account");
    if (i) {
    J.$("account").update(i);
    ve.fullyExtend(i, Z.getValue("account"));
    }
    var r = ve.getValueByReference(e, "livechat.settings");
    if (r) {
    J.$("settings").update(r);
    ve.fullyExtend(r, Z.getValue("settings"));
    }
    var o = ve.getValueByReference(e, "livechat.profile.mid$string");
    if (o && o !== _e.getIdentity()) {
    B.$("livechat").$("channel").update(null);
    B.$("livechat").$("profile").update(null);
    B.$("livechat").$("ui").$("chat_button").$("unread_count$int").update(0);
    }
    e.path && (n = n.descend(e.path));
    n.update(e.update);
    Pe.fire("message", e);
    }
    }
    }
    function E() {
    W.update({
    socket_status$string: "break"
    });
    }
    function x() {
    W.update({
    socket_resume_timestamp$int: +new Date(),
    socket_status$string: "resume"
    });
    }
    function k() {
    W.update({
    socket_open_timestamp$int: +new Date(),
    socket_status$string: "reconnect"
    });
    Se = !1;
    O();
    }
    function T() {
    var e = _e.getIdentity(), t = oe(), n = B.$("livechat").$("ui").getValue("mobile$bool") ? "mobile" : "desktop", i = B.$("livechat").$("settings").$("theme").getValue("name$string"), r = {
    __type: "register",
    accountKey: me.ACCOUNT_KEY,
    mID: e,
    ua: H.navigator.userAgent,
    dt: n,
    theme: i,
    cookie_law: t,
    rev: de.git_commit,
    source: ae,
    source_ver: ue
    };
    if (B.$("livechat").$("ui").$("popout$bool").getValue()) r.popout = !0; else {
    r.title = G.title;
    r.url = H.location.href;
    r.ref = H.document.referrer;
    }
    var o = Pe._register;
    if (o) for (var s in o) o.hasOwnProperty(s) && (r[s] = o[s]);
    return r;
    }
    function O() {
    if (me.ACCOUNT_KEY) {
    Y || Pe.connect();
    var e = T();
    ge.retrieveIDToken(function(t, n) {
    if (t) z(); else {
    if (n) {
    delete e.mID;
    e.idt = n;
    }
    l(e);
    }
    });
    }
    }
    function A() {
    return !!Q.getValue();
    }
    function S() {
    var e = W.getValue("status$string"), t = W.getValue("socket_status$string");
    window.clearTimeout(D.timer);
    if ("error" != e) if ("break" == t) if ("idle_disconnect" == e) W.update({
    message$string: "idle_disconnect"
    }); else {
    W.update({
    message$string: "reconnecting"
    });
    D.timer = window.setTimeout(D, 6e4);
    } else if (null === t && "registered" == e) W.update({
    message$string: "resuming"
    }); else if (fe(e) && fe(t)) {
    var n = A() ? "fast_init" : "first_init";
    W.update({
    message$string: n
    });
    } else W.update({
    message$string: null
    }); else D.timer = window.setTimeout(D, 5e3);
    }
    function L() {
    Y && B.$("livechat").$("profile").write({
    disconnect_timeout$int: U(Y.rtt)
    });
    }
    function D() {
    W.update({
    message$string: "disconnected"
    });
    }
    function R() {
    var e = Y;
    return e ? {
    connect_attempts: e.connect_attempts,
    connections: e.connections,
    disconnects: e.disconnects,
    timeout_server: e.timeout_server,
    timeout_response_soft: e.timeout_response_soft,
    timeout_response_hard: e.timeout_response_hard,
    sent_bytes: e.sent_bytes,
    recv_bytes: e.recv_bytes,
    sent_messages: e.sent_messages,
    recv_messages: e.recv_messages,
    sent_frames: e.sent_frames,
    recv_frames: e.recv_frames,
    lost_frames: e.lost_frames,
    ooo_frames: e.ooo_frames,
    bytes_at_connect: e.bytes_at_connect,
    rtt: e.rtt,
    clock_skew: e.clock_skew,
    reconnect_delay: e.reconnect_delay,
    quality: e.quality,
    host: e.host,
    status: e.status,
    zone: window.__$__GEO,
    last_frame_time: e.last_frame_time,
    local_time: +new Date()
    } : {
    status: "not connected"
    };
    }
    function C() {
    return Ae;
    }
    function I() {
    return +new Date() - (Y ? Y.clock_skew : 0);
    }
    function N(e) {
    Ie += 1;
    Ne[Ie] = e;
    return Ie;
    }
    function P(e) {
    if (e) {
    var t = {};
    t.path = e.path;
    t.value = e.value;
    he(e.func) && (t.__messageID = N(e.func));
    Le.push(t);
    }
    if (Y && Se) for (;Le.length; ) Y.send(Le.shift());
    }
    function M(e) {
    return e ? J.getValue(e) : J.getValue();
    }
    function U(e) {
    var t, n, i = 10 * $e.SECOND, r = 1 * $e.SECOND, o = 120 * $e.SECOND, s = 20 * $e.SECOND;
    e = Math.round(e) || 0;
    e = Math.max(r, Math.min(e, i));
    t = (e - r) / (i - r);
    n = s + function(e) {
    return e;
    }(t) * (o - s);
    return Math.floor(n / 1e3);
    }
    function V(e) {
    le = e;
    }
    function j() {
    F();
    }
    function z() {
    W.update({
    disconnection_status$string: "disconnecting"
    });
    d();
    Oe.forEach(function(e) {
    h(e.socket);
    e.socket.fire("close");
    });
    D.timer = clearTimeout(D.timer);
    W.update({
    disconnection_status$string: "disconnected"
    });
    }
    function F() {
    ne.unbindValue(a);
    ee.unbindValue(s);
    B.$("livechat").$("profile").unbindValue(o);
    W.$("status$string").unbindValue(r);
    W.$("socket_status$string").unbindValue(S);
    W.$("reconnect$bool").unbindValue(_);
    z();
    Oe = [], Ae = "", Se = !1, Le = [], De = [], Re = !1, Ce = 0, Ie = 0, Ne = {}, q = K = B = W = Y = X = Z = J = Q = ee = te = ne = ie = re = oe = se = ae = ce = ue = le = null;
    }
    var q, K, H, G, B, W, Y, X, Z, J, Q, ee, te, ne, ie, re, oe, se, ae, ce, ue, le, he = n(6), de = n(5), fe = n(2), pe = n(1), me = n(4), _e = n(18), ge = n(17), ve = n(7), ye = n(40), we = n(35), be = n(34), $e = n(32), Ee = {
    FLUSH_DELAY_MS: 0,
    RECONNECT_DELAY_MS: 1e4
    }, xe = 3e3, ke = 6e4, Te = new be(we, !1), Oe = [], Ae = "", Se = !1, Le = [], De = [], Re = !1, Ce = 0, Ie = 0, Ne = {}, Pe = pe.extend({
    init: t,
    send: l,
    connect: v,
    reconnect: f,
    clientDisconnect: z,
    destroy: F,
    disconnect: m,
    getConnectionStats: R,
    getHost: C,
    getServerTime: I,
    getServerSettings: M,
    reconnectIfServerRetired: u,
    registerCallback: N,
    getDCTimeoutValue: U,
    setSocket: V,
    reset: j
    });
    e.exports = Pe;
    i(Pe, "meshim_widget_controllers_ConnectionController");
    return Pe;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    var t = e.type, n = c[t];
    if (!n) return t ? new Error(t + " type is not supported. Please upgrade the Web SDK version.") : new Error('Structured message object should contain "type" property');
    var i = n(e);
    if (i) {
    var r = i.paths && "type" === i.paths.pop(), o = r && i.actual ? i.actual + " type is not supported. Please upgrade the Web SDK version." : i.message;
    return new Error(o);
    }
    }
    var r = n(19), o = {
    QUICK_REPLIES: "QUICK_REPLIES",
    BUTTON_TEMPLATE: "BUTTON_TEMPLATE",
    PANEL_TEMPLATE: "PANEL_TEMPLATE"
    }, s = {
    QUICK_REPLY_ACTION: "QUICK_REPLY_ACTION",
    LINK_ACTION: "LINK_ACTION"
    }, a = r.obj({
    text: r.type("string"),
    action: r.obj({
    type: r.any([ r.equal(s.QUICK_REPLY_ACTION), r.equal(s.LINK_ACTION) ]),
    value: r.type("string")
    }, {
    requiredKeys: [ "type", "value" ],
    whitelistedKeysOnly: !0
    })
    }, {
    requiredKeys: [ "text", "action" ],
    whitelistedKeysOnly: !0
    }), c = {
    QUICK_REPLIES: r.obj({
    type: r.equal(o.QUICK_REPLIES),
    msg: r.type("string"),
    quick_replies: r.each(r.obj({
    text: r.type("string"),
    action: r.obj({
    type: r.equal(s.QUICK_REPLY_ACTION),
    value: r.type("string")
    }, {
    requiredKeys: [ "type", "value" ],
    whitelistedKeysOnly: !0
    })
    }, {
    requiredKeys: [ "text", "action" ],
    whitelistedKeysOnly: !0
    }))
    }, {
    requiredKeys: [ "type", "msg", "quick_replies" ],
    whitelistedKeysOnly: !0
    }),
    BUTTON_TEMPLATE: r.obj({
    type: r.equal(o.BUTTON_TEMPLATE),
    msg: r.type("string"),
    buttons: r.each(a)
    }, {
    requiredKeys: [ "type", "msg", "buttons" ],
    whitelistedKeysOnly: !0
    }),
    PANEL_TEMPLATE: r.obj({
    type: r.equal(o.PANEL_TEMPLATE),
    panel: r.obj({
    heading: r.type("string"),
    paragraph: r.type("string"),
    image_url: r.type("string"),
    action: r.obj({
    type: r.equal(s.LINK_ACTION),
    value: r.type("string")
    }, {
    requiredKeys: [ "type", "value" ],
    whitelistedKeysOnly: !0
    })
    }, {
    requiredKeys: [ "heading" ],
    whitelistedKeysOnly: !0
    }),
    buttons: r.each(a)
    }, {
    requiredKeys: [ "type", "panel" ],
    whitelistedKeysOnly: !0
    })
    }, u = {
    validate: t,
    STRUCTURED_MSG_VALIDATOR: c,
    STRUCTURED_MSG_TYPE: o
    };
    e.exports = u;
    i(u, "meshim_widget_utils_StructuredMessageValidator");
    return u;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t, n) {
    var i = this;
    r.extend(i);
    var s = new o();
    t = t || {};
    s.setScope(t);
    s.on("success", n);
    s.on("error", function(e) {
    i.onError(e);
    });
    s.load(e);
    }
    var r = n(1), o = n(13);
    t.prototype.onError = function(e) {};
    e.exports = t;
    i(t, "jx_io_ScriptLoader");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t) {
    var n = a[e];
    n.module_function = new Function("$Modules", t.toString().replace(h, "$1"));
    n.ready();
    }
    function r(e) {
    var t, n, i, r;
    for (t = l.length - 1; t >= 0; t--) {
    i = l[t];
    r = i.dependencies;
    for (n = r.length - 1; n >= 0; n--) if (r[n] == e) {
    r.splice(n, 1);
    break;
    }
    i.ready();
    }
    }
    function o() {
    var e = Array.prototype.slice.call(arguments), t = e.shift();
    this.fqname = t;
    this.name = t.split(".").pop();
    this.callbacks = [];
    this.dependencies = e;
    l.push(this);
    }
    function s(e) {
    e();
    }
    var a = n(22), c = n(5), u = n(45), l = [], h = /^function *\( *\) *{ *([\s\S]*) *}$/;
    o.ensureLoaded = function(e, t) {
    e instanceof o ? e.ensureLoaded(t) : t();
    };
    o.prototype.ensureLoaded = function(e) {
    this.ifLoaded(e);
    this.load();
    };
    o.prototype.ifLoaded = function(e) {
    this.callbacks.push(e);
    };
    o.prototype.load = function() {
    function e(e) {
    t(e[0], e[1]);
    }
    var n, i, r = this.getDependencies();
    for (n = 0; n < r.length; n++) {
    i = r[n];
    i.loader || (i.loader = new u(c.baseURL + "/lib/" + c.build_number + "/" + i.fqname + ".js", a, e));
    }
    };
    o.prototype.getDependencies = function() {
    var e, t = this.dependencies, n = [ this ];
    for (e = 0; e < t.length; e++) {
    var i = a[t[e]];
    n = n.concat(i.getDependencies());
    }
    return n;
    };
    o.prototype.ready = function() {
    if (!this.dependencies.length && this.module_function) {
    for (e = l.length - 1; e >= 0; e--) if (l[e] == this) {
    l.splice(e, 1);
    break;
    }
    this.module_function(a);
    var e, t = a[this.fqname];
    t.ifLoaded = t.ensureLoaded = s;
    for (e = 0; e < this.callbacks.length; e++) this.callbacks[e](t);
    r(this.fqname);
    delete this.callbacks;
    delete this.fqname;
    delete this.name;
    delete this.dependencies;
    delete this.loader;
    }
    };
    a.Module = o;
    e.exports = o;
    i(o, "jx_core_Module");
    return o;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    return window[e];
    }
    var n = {
    getVariable: t
    };
    e.exports = n;
    i(n, "meshim_widget_utils_BrowserGlobals");
    return n;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t() {
    var e = r.getVariable("navigator"), t = e.userAgent || "", n = e.vendor || "", i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i, o = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = t || n || window.opera;
    return i.test(s) || o.test(s.substr(0, 4));
    }
    var r = n(47);
    e.exports = t;
    i(t, "meshim_widget_utils_isMobileBrowser");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t) {
    function n() {
    a = !a;
    e.apply(r, i);
    }
    var i, r, o, s, a = !0;
    return function() {
    i = Array.prototype.slice.call(arguments);
    r = this;
    if (a) {
    s = setTimeout(function() {
    a = !0;
    }, t);
    return n();
    }
    s && clearTimeout(s);
    o && clearTimeout(o);
    o = setTimeout(n, t);
    };
    }
    function r(e, t) {
    function n() {
    e.apply(r, i);
    }
    var i, r, o;
    return function() {
    o && clearTimeout(o);
    i = Array.prototype.slice.call(arguments);
    r = this;
    o = setTimeout(n, t);
    };
    }
    function o(e, t) {
    function n() {
    s = +new Date();
    o = null;
    e.apply(r, i);
    }
    var i, r, o, s = 0;
    return function() {
    i = Array.prototype.slice.call(arguments);
    r = this;
    if (!o) {
    var e = +new Date() - s;
    e >= t ? n() : o = setTimeout(n, t - e);
    }
    };
    }
    function s(e, t) {
    function n() {
    s = +new Date();
    i = r.length > 1 ? setTimeout(n, t) : null;
    e.apply(o.shift(), r.shift());
    }
    var i, r = [], o = [], s = 0;
    return function() {
    r.push(Array.prototype.slice.call(arguments));
    o.push(this);
    if (!i) {
    var e = +new Date() - s;
    e >= t ? n() : i = setTimeout(n, t - e);
    }
    };
    }
    var a = (n(9), {
    debounceExceptFirst: t,
    debounce: r,
    throttle: o,
    queue: s
    });
    e.exports = a;
    i(a, "meshim_common_AsyncUtils");
    return a;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e, t) {
    this.name = e;
    this.leaf = /\$[a-z]+$/.test(e);
    this.parentNode = t;
    if (!this.leaf) {
    this.deleted = !1;
    this.childNodes = {};
    this.keys = {};
    }
    }
    function n(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
    }
    function r(e) {
    for (var t = "", n = 0; n < e.length; n++) /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(e[n]) ? t += "." + e[n] : t += "[" + JSON.stringify(e[n]) + "]";
    return t.substr(1);
    }
    t.prototype.fqname = function() {
    return r(this.path());
    };
    t.prototype.path = function() {
    for (var e = this, t = [ this.name ]; e = e.parentNode; ) t.unshift(e.name);
    return t;
    };
    t.prototype._getOrCreateChildNode = function(e) {
    var i;
    if (n(this.childNodes, e)) i = this.childNodes[e]; else {
    i = new t(e, this);
    this.childNodes[e] = i;
    this.deleted && i.undeleteParents();
    }
    return i;
    };
    t.prototype.descend = function(e) {
    var t, n, i = this;
    "string" == typeof e && (e = e.split("."));
    for (t = 0, n = e.length; t < n; t++) i = i._getOrCreateChildNode(e[t]);
    return i;
    };
    t.prototype.$$ = t.prototype.descend;
    t.prototype.$ = function(e, t, n, i, r, o, s, a, c) {
    var u = this._getOrCreateChildNode(e);
    return t ? u.$(t, n, i, r, o, s, a, c) : u;
    };
    t.prototype.update = function(e, t) {
    var n, i, r, o, s;
    null != e && this.undeleteParents();
    if (this.leaf) {
    if (this.value !== e) {
    this.value = e;
    o = !0;
    this.notifyListeners(e, t);
    }
    } else if (null == e) {
    if (!this.deleted) {
    o = null;
    this.deleted = !0;
    for (n in this.childNodes) this.childNodes.hasOwnProperty(n) && this.childNodes[n].update(null, !0);
    this.notifyListeners(o, t);
    }
    } else {
    if (this.deleted) {
    this.deleted = !1;
    o = e;
    for (n in e) e.hasOwnProperty(n) && this.$(n).update(e[n], !0);
    } else for (n in e) if (e.hasOwnProperty(n)) {
    r = this.$(n);
    i = e[n];
    if (r.leaf) {
    if (r.update(i, !0)) {
    o || (o = {});
    o[n] = i;
    }
    } else if (void 0 !== (s = r.update(i, !0))) {
    o || (o = {});
    o[n] = s;
    }
    }
    o && this.notifyListeners(o, t);
    }
    return o;
    };
    t.prototype.replace = function(e, t) {
    var i, r, o, s, a;
    null != e && this.undeleteParents();
    if (this.leaf) {
    if (this.value !== e) {
    this.value = e;
    s = !0;
    this.notifyListeners(e, t);
    }
    } else if (null == e) {
    if (!this.deleted) {
    s = null;
    this.deleted = !0;
    for (i in this.childNodes) this.childNodes.hasOwnProperty(i) && this.childNodes[i].replace(null, !0);
    this.notifyListeners(s, t);
    }
    } else {
    if (this.deleted) {
    this.deleted = !1;
    s = e;
    for (i in e) e.hasOwnProperty(i) && this.$(i).replace(e[i], !0);
    } else {
    for (i in this.childNodes) if (this.childNodes.hasOwnProperty(i)) {
    if (n(e, i)) continue;
    o = this.childNodes[i];
    if (o.leaf) {
    if (o.replace(null, !0)) {
    s || (s = {});
    s[i] = null;
    }
    } else if (void 0 !== (a = o.replace(null, !0))) {
    s || (s = {});
    s[i] = null;
    }
    }
    for (i in e) if (e.hasOwnProperty(i)) {
    o = this.$(i);
    r = e[i];
    if (o.leaf) {
    if (o.replace(r, !0)) {
    s || (s = {});
    s[i] = r;
    }
    } else if (void 0 !== (a = o.replace(r, !0))) {
    s || (s = {});
    s[i] = a;
    }
    }
    }
    s && this.notifyListeners(s, t);
    }
    return s;
    };
    t.prototype.undeleteParents = function() {
    for (var e = this.parentNode; e && e.deleted; ) {
    e.deleted = !1;
    e = e.parentNode;
    }
    };
    t.prototype.write = function(e, t, n) {
    if ("function" == typeof t) {
    n = t;
    t = !1;
    }
    var i = {
    path: this.path(),
    value: e
    };
    "function" == typeof n && (i.func = n);
    this.update(e, t || !1);
    for (var r = this; r.parentNode; ) r = r.parentNode;
    r.notifyWriteListeners(i);
    };
    t.prototype.bindWrite = function(e) {
    this.getWriteListeners().push(e);
    };
    t.prototype.getValueListeners = function() {
    this.listeners_value || (this.listeners_value = []);
    return this.listeners_value;
    };
    t.prototype.getWriteListeners = function() {
    this.listeners_write || (this.listeners_write = []);
    return this.listeners_write;
    };
    t.prototype.getKeysListeners = function() {
    this.listeners_keys || (this.listeners_keys = []);
    return this.listeners_keys;
    };
    t.prototype.bindValue = function(e) {
    var t = this.getValueListeners();
    t.push(e);
    try {
    e.call(this, this.getValue());
    } catch (e) {}
    };
    t.prototype.bindKeys = function(e) {
    if (!this.leaf) {
    var t = this.getKeysListeners();
    t.push(e);
    try {
    e.call(this, this.getKeys(), []);
    } catch (e) {}
    }
    };
    t.prototype.unbindValue = function(e) {
    for (var t = this.getValueListeners(), n = 0; n < t.length; n++) if (t[n] == e) {
    t.splice(n, 1);
    return;
    }
    };
    t.prototype.unbindKeys = function(e) {
    if (!this.leaf) for (var t = this.getKeysListeners(), n = 0; n < t.length; n++) if (t[n] == e) {
    t.splice(n, 1);
    return;
    }
    };
    t.prototype.on = function(e, t) {
    switch (e) {
    case "value":
    this.bindValue(t);
    break;
    
    case "keys":
    this.bindKeys(t);
    }
    };
    t.prototype.un = function(e, t) {
    switch (e) {
    case "value":
    this.unbindValue(t);
    break;
    
    case "keys":
    this.unbindKeys(t);
    }
    };
    t.prototype.notifyListeners = function(e, t) {
    var i, r, o, s;
    if (!this.leaf) if (e) {
    for (i in e) if (e.hasOwnProperty(i)) if (null != e[i]) {
    if (!n(this.keys, i)) {
    this.keys[i] = 1;
    r || (r = []);
    r.push(i);
    }
    } else if (n(this.keys, i)) {
    delete this.keys[i];
    o || (o = []);
    o.push(i);
    }
    } else for (i in this.keys) if (this.keys.hasOwnProperty(i)) {
    delete this.keys[i];
    o || (o = []);
    o.push(i);
    }
    if (this.listeners_value) {
    s = this.getValueListeners().concat();
    for (var a = 0, c = s.length; a < c; a++) try {
    s[a](e);
    } catch (e) {}
    }
    if (!this.leaf) {
    if (this.listeners_keys && (r || o)) {
    s = this.getKeysListeners().concat();
    for (a = 0, c = s.length; a < c; a++) try {
    s[a](r || [], o || []);
    } catch (e) {}
    }
    if (!t && this.parentNode) {
    var u = {};
    u[this.name] = e;
    this.parentNode.notifyListeners(u, t);
    }
    }
    };
    t.prototype.notifyWriteListeners = function(e) {
    if (this.listeners_write) for (var t = this.getWriteListeners().concat(), n = 0; n < t.length; n++) try {
    t[n].call(this, e);
    } catch (e) {}
    };
    t.prototype.getValue = function(e) {
    if (e) return this.descend(e).getValue();
    if (this.leaf) return this.value;
    if (this.deleted) return null;
    var t, n, i = {};
    for (var r in this.childNodes) if (this.childNodes.hasOwnProperty(r) && null != (n = this.childNodes[r].getValue())) {
    i[r] = n;
    t = !0;
    }
    return t ? i : null;
    };
    t.prototype.hasKey = function(e) {
    return n(this.keys, e);
    };
    t.prototype.getKeys = function() {
    if (this.leaf) return null;
    var e = [];
    for (var t in this.keys) this.keys.hasOwnProperty(t) && e.push(t);
    return e;
    };
    t.prototype.gc = function() {
    if (this.leaf) throw new TypeError("Leaf nodes cannot be collected");
    var e = !0;
    for (var t in this.childNodes) if (this.childNodes.hasOwnProperty(t)) {
    var n = this.childNodes[t];
    e = n.leaf ? !(n.listeners_value && n.listeners_value.length) && null == n.value && (delete this.keys[t], 
    delete this.childNodes[t]) && e : n.gc() && (delete this.keys[t], delete this.childNodes[t]) && e;
    }
    return e && this.deleted && !(this.listeners_keys && this.listeners_keys.length) && !(this.listeners_value && this.listeners_value.length);
    };
    t.DataNode = t;
    e.exports = t;
    i(t, "jx_data_DataNode");
    return t;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    function t(e) {
    if (!ue([ nt ], [ e ], "logout")) if (Fe.isAuthenticated()) {
    ve.destroy();
    s();
    Fe.clearIdentity();
    qe.clearIdentity();
    We = !1;
    e && setTimeout(function() {
    e(null);
    });
    } else ce(new Error("This API is only applicable for authenticated visitors"), "logout");
    }
    function r(e) {
    be && Ye.un("data", be);
    be = function(e) {
    Be.fire(e.type, e.detail);
    };
    Ye.on("data", be);
    if (We) ce(new Error("Zendesk Chat Web SDK has already been initialized. Please ensure that zChat.init() is only called once in your code"), "init"); else if (xe.isIE <= 10) ce(new Error("The current browser you are on is not supported by the Web SDK. Please refer to the documentation to learn about the system requirements for Zendesk Chat."), "init"); else {
    var t = Je.obj({
    account_key: Je.type("string").ok(),
    suppress_console_error: Je.type("boolean"),
    override_auth_server_host: Je.type("string").ok(),
    override_proxy: Je.type("string").ok(),
    authentication: Je.obj({
    jwt_fn: Je.type("function").ok()
    }, {
    requiredKeys: [ "jwt_fn" ]
    }),
    activity_window: Je.obj({
    document: Je.type("object").ok()
    }, {
    requiredKeys: [ "document" ]
    })
    }, {
    requiredKeys: [ "account_key" ]
    });
    if (!ue([ t ], [ e ], "init")) {
    var n = new Re("root"), i = new Re("root"), r = {
    livechat: {
    settings: De.clone(ze.livechat.settings)
    }
    };
    n.update(r);
    i.update(r);
    Pe() && n.$("livechat").$("ui").$("mobile$bool").update(!0);
    Ne.ACCOUNT_KEY = e.account_key;
    if (e.authentication) {
    Fe.setOverrideHost(e.override_auth_server_host);
    Fe.setSiteJWTFunc(e.authentication.jwt_fn);
    Fe.setDataNode(n);
    Fe.authenticate(function(t) {
    t ? ce(new Error("Failed to verify token: " + t.reason + (t.details ? ": " + t.details : "")), "init", {
    reason: t.reason,
    details: t.details
    }) : o(e, Ve, n, i);
    });
    } else o(e, Ve, n, i);
    }
    }
    }
    function o(e, t, n, i) {
    ve = t;
    ye = n;
    we = i;
    He.init(ye, we);
    Q();
    $e = function(e) {
    (e.path ? we.descend(e.path) : we).update(e.update);
    };
    ve.on("message", $e);
    Ee = e.suppress_console_error || !1;
    qe.init(e.activity_window);
    ve.init({
    root: ye,
    overrideProxy: e.override_proxy,
    isCookieDenied: function() {
    return !1;
    },
    source: Xe,
    lastHost: qe.DOM.getVariable("web_sdk_last_host"),
    source_ver: ke.release_tag,
    activity_window: e.activity_window
    });
    ye.$("connection").$("server$string").bindValue(function(e) {
    e && qe.DOM.saveVariable("web_sdk_last_host", e);
    });
    je.init(ye, ve);
    Ke.init(ye, e.activity_window);
    We = !0;
    }
    function s() {
    Ye.un("data", be);
    He.destroy();
    ve.un("message", $e);
    be = null;
    $e = null;
    Ee = void 0;
    }
    function a() {
    ve.reconnect();
    }
    function c() {
    return Ye;
    }
    function u() {
    return ut(we.$("livechat").$("profile").getValue());
    }
    function l(e, t) {
    if (!ue([ Je.obj({
    display_name: Je.any([ Je.equal(""), Je.type("string").regex(tt).maxLength(255) ]),
    email: Je.any([ Je.equal(""), Je.type("string").regex(Ce.email) ]),
    phone: Je.any([ Je.equal(""), Je.type("string").regex(Qe).maxLength(25) ])
    }), nt ], [ e, t ], "setVisitorInfo")) {
    var n = {};
    t = t || Ze;
    "display_name" in e && (n.display_name$string = e.display_name);
    "email" in e && (n.email$string = e.email);
    "phone" in e && (n.phone$string = e.phone);
    ye.$("livechat").$("profile").write(n, de(t));
    }
    }
    function h(e, t) {
    if (!ue([ Je.type("string").regex(tt), nt ], [ e, t ], "sendChatMsg")) {
    t = t || Ze;
    je.sendChatMsg({
    msg: e.trim()
    }, null, de(t));
    }
    }
    function d(e, t) {
    ue([ Je.chain(le), nt ], [ e, t ], "sendFile") || f(e, t);
    }
    function f(e, t) {
    t = t || Ze;
    Ve.reconnectIfServerRetired(function() {
    je.sendFileWithCallback(e, t);
    });
    }
    function p(e) {
    if (!ue([ Je.type("number") ], [ e ], "getDepartment")) return m(e);
    }
    function m(e) {
    var t = we.$("livechat").$("departments").$(e).getValue();
    if (t) return lt(t, e);
    }
    function _() {
    return ie(we.$("livechat").$("departments").getValue(), lt);
    }
    function g() {
    var e = we.$("livechat").$("profile").$("department_id$int"), t = e.getValue();
    return Oe(t) ? t : void 0;
    }
    function v(e, t) {
    if (!ue([ Je.type("number").chain(he), nt ], [ e, t ], "setVisitorDefaultDepartment")) {
    t = t || Ze;
    ye.$("livechat").$("profile").write({
    department_id$int: e
    }, de(t));
    }
    }
    function y(e) {
    if (!ue([ nt ], [ e ], "clearVisitorDefaultDepartment")) {
    e = e || Ze;
    ye.$("livechat").$("profile").write({
    department_id$int: null
    }, de(e));
    }
    }
    function w(e, t) {
    $("added$string", e, "addTag", t);
    }
    function b(e, t) {
    $("removed$string", e, "removeTag", t);
    }
    function $(e, t, n, i) {
    if (!ue([ Je.type("string").regex(tt).chain(it), nt ], [ t, i ], n)) {
    i = i || Ze;
    var r = {};
    r[e] = t.trim();
    ye.$("livechat").$("channel").$("tags").write(r, de(i));
    }
    }
    function E(e, t) {
    k("added$string", e, "addTags", t);
    }
    function x(e, t) {
    k("removed$string", e, "removeTags", t);
    }
    function k(e, t, n, i) {
    if (!ue([ Je.each(Je.type("string").regex(tt).chain(it)).minLength(1), nt ], [ t, i ], n)) {
    i = i || Ze;
    for (var r = 0, o = t.length; r < o; r++) t[r] = t[r].trim();
    var s = {};
    s[e] = t.join(",");
    ye.$("livechat").$("channel").$("tags").write(s, de(i));
    }
    }
    function T(e, t) {
    if (!ue([ Je.obj({
    title: Je.type("string").regex(tt),
    url: Je.type("string").regex(et)
    }, {
    requiredKeys: [ "title", "url" ]
    }), nt ], [ e, t ], "sendVisitorPath")) {
    t = t || Ze;
    ye.$("livechat").$("session").$("page_path").write({
    url$string: e.url,
    title$string: e.title
    }, de(t));
    }
    }
    function O() {
    var e = we.$("livechat").$("channel").$("rating$string").getValue(), t = we.$("livechat").$("channel").$("comment$string").getValue(), n = {};
    Ae(e) || (n.rating = e);
    Ae(t) || (n.comment = t);
    return n;
    }
    function A(e, t) {
    if (!ue([ Je.any([ Je.equal(null), Je.equal("good"), Je.equal("bad") ]), nt ], [ e, t ], "sendChatRating")) {
    t = t || Ze;
    ye.$("livechat").$("channel").write({
    rating$string: e
    }, de(t));
    }
    }
    function S(e, t) {
    if (!ue([ Je.type("string"), nt ], [ e, t ], "sendChatComment")) {
    t = t || Ze;
    ye.$("livechat").$("channel").write({
    comment$string: e
    }, de(t));
    }
    }
    function L(e) {
    var t = ye.$("livechat").$("channel");
    if (!ue([ nt ], [ e ], "endChat")) {
    e = e || Ze;
    t.write({
    chatting$bool: !1
    }, de(e));
    }
    }
    function D() {
    return we.$("livechat").$("channel").$("chatting$bool").getValue() || !1;
    }
    function R() {
    return ie(we.$("livechat").$("agents").getValue(), ht);
    }
    function C(e) {
    return ht(we.$("livechat").$("agents").$(e).getValue(), e);
    }
    function I() {
    var e = we.$("livechat"), t = e.$("settings"), n = t.$("operating_hours");
    if (t.hasKey("operating_hours")) {
    var i = n.$("type$string").getValue(), r = {
    enabled: n.$("enabled$bool").getValue(),
    type: i,
    timezone: t.$("timezone$string").getValue() || "UTC"
    };
    "account" == i ? r.account_schedule = fe(n.$("schedule").getValue() || {}) : "department" == i && (r.department_schedule = pe(n.$("schedules").getValue(), e.$("departments").getKeys()));
    return r;
    }
    }
    function N(e, t) {
    if (!ue([ Je.obj({
    name: Je.type("string").regex(tt).maxLength(255),
    email: Je.type("string").regex(Ce.email),
    message: Je.type("string").regex(tt),
    phone: Je.type("string").regex(Qe).maxLength(25)
    }, {
    requiredKeys: [ "name", "email", "message" ]
    }), nt ], [ e, t ], "sendOfflineMsg")) {
    t = t || Ze;
    var n = {
    name: {
    name$string: "name",
    value$string: e.name
    },
    email: {
    name$string: "email",
    value$string: e.email
    },
    message: {
    name$string: "message",
    value$string: e.message
    }
    };
    "phone" in e && (n.phone = {
    name$string: "phone",
    value$string: e.phone
    });
    "department" in e && (n.department = {
    name$string: "department_id",
    value$string: e.department
    });
    ye.$("livechat").$("settings").$("forms").$("offline_form").$("form_submitted").write(n, de(t));
    }
    }
    function P(e) {
    var t = ye.$("livechat").$("channel").$("typing"), n = t.$("typing$bool").getValue(), i = Je.type("boolean");
    n !== e && (ue([ i ], [ e ], "sendTyping") || t.write({
    typing$bool: e
    }));
    }
    function M(e, t) {
    var n = Je.type("string").regex(Ce.email), i = !!we.$("livechat").$("channel").$("log").getKeys().length;
    if (!ue([ n, nt ], [ e, t ], "sendEmailTranscript")) {
    t = t || Ze;
    we.$("livechat").$("channel").$("chatting$bool").getValue() || !1 ? ye.$("livechat").$("channel").write({
    email_transcript$string: e
    }, de(t)) : Fe.isAuthenticated() || i ? ye.$("livechat").$("channel").write({
    email_last_transcript$string: e
    }, de(t)) : ce(new Error("There were no past chat to send a transcript of"), "sendEmailTranscript");
    }
    }
    function U(e, t) {
    return {
    id: parseInt(t, 10)
    };
    }
    function V(e) {
    return e.hasOwnProperty("typing$bool") ? {
    type: "typing"
    } : null;
    }
    function j(e) {
    var t = e.hasOwnProperty("typing$bool"), n = {
    type: "typing",
    nick: "agent:trigger"
    };
    return t ? n : null;
    }
    function z(e) {
    return e.hasOwnProperty("timestamp$int") ? {
    type: "last_read"
    } : null;
    }
    function F(e) {
    return 0 === e.indexOf("visitor:") ? "visitor" : e;
    }
    function q(e) {
    if (!e.type$string) return null;
    if (!e.nick$string) return null;
    var t = {
    nick: F(e.nick$string),
    type: e.type$string
    }, n = e.msg$string;
    e.first$bool && (t.first = e.first$bool);
    switch (e.type$string) {
    case "chat.msg":
    if ("attachment" in e) {
    if (!0 === e.unverified$bool) return null;
    var i, r = e.attachment, o = {
    mime_type: r.mime_type$string,
    name: r.name$string,
    size: r.size$int,
    url: r.url$string
    };
    if ("metadata" in r) {
    i = r.metadata;
    o.metadata = {
    width: i.width$int,
    height: i.height$int
    };
    }
    "deleted$bool" in r && (o.deleted = r.deleted$bool);
    return De.extend(t, {
    type: "chat.file",
    display_name: e.display_name$string,
    attachment: o
    });
    }
    if ("structured_msg" in e) {
    var s = ae(e.structured_msg);
    [ "items", "buttons", "quick_replies" ].forEach(function(e) {
    s[e] && (s[e] = ie(s[e], function(e) {
    return e;
    }));
    });
    var a = Ue.validate(s);
    a ? ce(a, 'Unsupported structured message in "chat.msg" event') : t.structured_msg = s;
    }
    ;
    return De.extend(t, {
    display_name: e.display_name$string,
    msg: n,
    options: e.options$string ? e.options$string.split("/") : []
    });
    
    case "chat.rating":
    return De.extend(t, {
    display_name: e.display_name$string,
    new_rating: e.new_rating$string,
    rating: e.rating$string
    });
    
    case "chat.comment":
    return De.extend(t, {
    display_name: e.display_name$string,
    comment: e.comment$string,
    new_comment: e.new_comment$string
    });
    
    case "chat.memberjoin":
    case "chat.memberleave":
    case "chat.request.rating":
    return De.extend(t, {
    display_name: e.display_name$string
    });
    
    case "chat.event":
    var c, u = /Please wait while our agents attend to you. There are currently (\d+) visitor\(s\) waiting to be served\./;
    return "agent:system" === e.nick$string && (c = u.exec(n)) ? {
    type: "chat.wait_queue",
    nick: "system.queue",
    wait_queue: parseInt(c[1], 10)
    } : null;
    
    case "chat.join":
    var l = e.history;
    if (l && l[0]) {
    var h = De.extend({}, l[0]), d = h.timestamp$int;
    h.type$string = h.__type$string;
    h.display_name$string = h.name$string;
    d *= 1e3;
    h.timestamp$int = d;
    return q(h);
    }
    return null;
    
    case "chat.file.update":
    default:
    return null;
    }
    }
    function K() {
    var e, t, n, i = [ "type$string", "timestamp$int" ], r = we.$("livechat").$("channel").$("log").getValue(), o = [];
    for (var s in r) if (r.hasOwnProperty(s)) {
    if (r[s].type$string) e = r[s]; else {
    e = ye.$("livechat").$("channel").$("log").$(s).getValue();
    if ("chat.msg" === e.type$string && (!0 === e.unverified$bool || !0 === e.failed$bool)) continue;
    }
    var a = q(e);
    if (null === a) continue;
    for (var c = 0; c < i.length; c++) {
    t = i[c];
    n = se(t);
    n in a || (a[n] = e[t]);
    }
    o.push(a);
    }
    return o;
    }
    function H() {
    if (!we) return "closed";
    var e = we.$("tmp").$("friendly_connection_status$string").getValue();
    return at(e)[0];
    }
    function G() {
    var e = we.$("livechat").$("account").$("status$string").getValue();
    return ct(e)[0];
    }
    function B() {
    return we.$("livechat").$("channel").$("queue_position$int").getValue() || 0;
    }
    function W(e) {
    if (!ue([ nt ], [ e ], "fetchChatHistory")) if (Fe.isAuthenticated()) {
    var t = we.$("livechat").$("history"), n = ye.$("livechat").$("history"), i = n.$("in_progress$bool").getValue(), r = t.$("has_more$bool").getValue(), o = t.$("cursor$string").getValue();
    if (i) ce(new Error("Previous fetching of history is still in progress"), "fetchChatHistory"); else if (!1 !== r) {
    e = e || Ze;
    n.$("in_progress$bool").update(!0);
    n.write({
    cursor$string: o || ""
    }, de(e));
    } else ce(new Error("No more history to load"), "fetchChatHistory");
    } else ce(new Error("This API is not available for unauthenticated visitors"), "fetchChatHistory");
    }
    function Y() {
    D() && ye.$("livechat").$("ui").$("chat").write({
    read_ts$int: +new Date()
    });
    }
    function X(e, t, n) {
    return function(i, r) {
    if (null === i) return {};
    for (var o = {}, s = 0, a = e.length; s < a; s++) {
    var c = e[s];
    c in i && (o[se(c)] = i[c]);
    }
    Se(t) && Object.keys(o).length && (o[t] = r);
    if (Le(n)) {
    var u = n(i, r);
    return null === u ? {} : De.extend(o, u);
    }
    return o;
    };
    }
    function Z(e, t, n) {
    we.descend(t).bindValue(function(t) {
    n(t).forEach(function(t) {
    J(e, t);
    });
    });
    }
    function J(e, t) {
    if (t) {
    if (t instanceof Error) {
    if (!t.message) return;
    } else if ("object" == typeof t && !Object.keys(t).length) return;
    Ye.fire("data", {
    type: e,
    detail: t
    });
    }
    }
    function Q() {
    Z("connection_update", "tmp.friendly_connection_status$string", at);
    Z("account_status", "livechat.account.status$string", te(st));
    Z("visitor_update", "livechat.profile", re([ "email$string", "phone$string", "display_name$string" ], u));
    Z("department_update", "livechat.departments", oe([ "name$string", "status$string" ], m));
    Z("agent_update", "livechat.agents", oe([ "avatar_path$string", "display_name$string", "title$string" ], C));
    Z("chat", "livechat.channel.log", ne(pt));
    Z("chat", "livechat.agents", ne(dt));
    Z("chat", "livechat.triggers.agents", ne(ft));
    Z("chat", "livechat.channel.queue_position$int", ee);
    Z("history", "livechat.history.log", ne(pt));
    }
    function ee(e) {
    return [ "number" != typeof e ? null : {
    type: "chat.queue_position",
    nick: "system.queue",
    queue_position: e
    } ];
    }
    function te(e) {
    return function(t) {
    return void 0 === t ? [ null ] : [ e[t] || null ];
    };
    }
    function ne(e) {
    return function(t) {
    return ie(t, e);
    };
    }
    function ie(e, t) {
    var n = [];
    for (var i in e) e.hasOwnProperty(i) && n.push(t(e[i], i));
    return n;
    }
    function re(e, t) {
    return function(n) {
    return e.some(function(e) {
    return n && e in n;
    }) ? [ t() ] : [ null ];
    };
    }
    function oe(e, t) {
    return function(n) {
    var i = [];
    for (var r in n) if (n.hasOwnProperty(r)) {
    var o = n[r], s = e.some(function(e) {
    return o && e in o;
    });
    s && i.push(t(r));
    }
    return i;
    };
    }
    function se(e) {
    return e.split("$")[0];
    }
    function ae(e) {
    if (!e || "object" != typeof e) return e;
    var t = {};
    for (var n in e) if (e.hasOwnProperty(n)) {
    var i = se(n), r = ae(e[n]);
    t[i] = r;
    }
    return t;
    }
    function ce(e, t, n) {
    var i = t ? t + ": " : "";
    e = new Error("Zendesk Chat Web SDK: Error: " + i + e.message);
    e.context = t;
    e.extra = n;
    Ee || window.console && window.console.error && console.error(e.message);
    J("error", e);
    }
    function ue(e, t, n) {
    for (var i = 0; i < e.length; i++) {
    var r = e[i], o = r(t[i]);
    if (o) {
    ce(o, n);
    return !0;
    }
    }
    return !1;
    }
    function le(e) {
    if ("[object File]" !== Object.prototype.toString.call(e)) return new Error("Expect a File object");
    }
    function he(e) {
    if (!p(e)) return new Error("Expect a valid department id");
    }
    function de(e) {
    return function(t) {
    var n = t.raw, i = "ok" === n.__status ? null : new window.Error("Failed");
    for (var r in n) n.hasOwnProperty(r) && 0 === r.indexOf("__") && delete n[r];
    e(i, n);
    };
    }
    function fe(e) {
    for (var t, n, i = {}, r = 0; r < 7; r++) {
    var o = e[r] || {};
    if (o.enabled$bool) {
    t = [];
    n = o.periods;
    for (var s in n) n.hasOwnProperty(s) && t.push({
    start: n[s].start$int,
    end: n[s].end$int
    });
    i[r] = ge(t);
    } else i[r] = [];
    }
    return i;
    }
    function pe(e, t) {
    var n, i = {}, r = _e(e), o = me(e, t);
    t.forEach(function(e) {
    var t = o[e];
    i[e] = {};
    for (n = 0; n < 7; n++) i[e][n] = [];
    t.forEach(function(t) {
    for (var n in r[t]) r[t].hasOwnProperty(n) && Array.prototype.push.apply(i[e][n], r[t][n]);
    });
    for (n = 0; n < 7; n++) {
    var s = i[e][n];
    s.length > 1 && (i[e][n] = ge(s));
    }
    });
    return i;
    }
    function me(e, t) {
    var n, i = {};
    t.forEach(function(e) {
    i[e] = [];
    });
    for (var r in e) if (e.hasOwnProperty(r)) {
    n = e[r];
    for (var o in n.departments) if (n.departments.hasOwnProperty(o)) {
    if (!n.departments[o]) continue;
    var s = se(o);
    if (!i[s]) continue;
    i[s].push(r);
    }
    }
    return i;
    }
    function _e(e) {
    var t, n, i = {};
    for (var r in e) if (e.hasOwnProperty(r)) {
    n = e[r];
    if (n.hasOwnProperty("deleted_ts$int")) continue;
    if (!n.departments) continue;
    if (!n.enabled$bool) continue;
    t = {};
    for (var o = 0; o < 7; o++) {
    var s = n[o], a = [];
    if (s.enabled$bool && s.periods) {
    var c = s.periods;
    for (var u in c) c.hasOwnProperty(u) && a.push({
    start: c[u].start$int,
    end: c[u].end$int
    });
    a.length && (t[o] = a);
    }
    }
    Object.keys(t).length && (i[r] = t);
    }
    return i;
    }
    function ge(e) {
    if (e.length <= 1) return e;
    var t = [];
    e.forEach(function(e) {
    t[e.start] = void 0 !== t[e.start] ? t[e.start] + 1 : 1;
    t[e.end] = void 0 !== t[e.end] ? t[e.end] - 1 : -1;
    });
    return function(e) {
    var t, n = [], i = 0;
    e.forEach(function(e, r) {
    e > 0 && !t && (t = r);
    if (e) {
    i += e;
    if (0 === i) {
    n.push({
    start: t,
    end: r
    });
    t = void 0;
    }
    }
    });
    return n;
    }(t);
    }
    var ve, ye, we, be, $e, Ee, xe = n(3), ke = n(5), Te = n(1), Oe = n(25), Ae = n(2), Se = n(16), Le = n(6), De = n(24), Re = n(50), Ce = n(15), Ie = n(49), Ne = n(4), Pe = n(48), Me = (n(7), 
    n(19)), Ue = n(44), Ve = n(43), je = n(31), ze = n(29), Fe = n(17), qe = n(18), Ke = n(28), He = n(27), Ge = {
    init: r,
    reconnect: a,
    getFirehose: c,
    setVisitorInfo: l,
    getVisitorInfo: u,
    setVisitorDefaultDepartment: v,
    getVisitorDefaultDepartment: g,
    getAllDepartments: _,
    getDepartment: p,
    clearVisitorDefaultDepartment: y,
    addTag: w,
    removeTag: b,
    addTags: E,
    removeTags: x,
    sendChatMsg: h,
    sendFile: d,
    sendVisitorPath: T,
    sendChatComment: S,
    sendChatRating: A,
    getChatInfo: O,
    endChat: L,
    isChatting: D,
    getServingAgentsInfo: R,
    sendOfflineMsg: N,
    sendTyping: Ie.debounceExceptFirst(P, 300),
    sendEmailTranscript: M,
    getChatLog: K,
    getConnectionStatus: H,
    getAccountStatus: G,
    getOperatingHours: I,
    getQueuePosition: B,
    fetchChatHistory: W,
    logout: t,
    EMAIL_REGEX: Ce.email
    }, Be = Te.extend(Ge), We = !1, Ye = Te.extend({}), Xe = "web_sdk", Ze = function() {}, Je = Me, Qe = /[0-9]+/, et = /^(https?|ftps?):\/\//i, tt = /\S/, nt = Je.any([ Je.equal(void 0), Je.type("function") ]), it = Je.predicate(function(e) {
    return -1 === e.indexOf(",");
    }, "not contain any comma character"), rt = [ "email$string", "phone$string", "display_name$string" ], ot = {
    connected: "connected",
    connecting: "connecting",
    closed: "closed"
    }, st = {
    online: "online",
    offline: "offline",
    away: "away",
    invalid_account_key: null,
    banned: null
    }, at = te(ot), ct = te(st), ut = X(rt), lt = X([ "name$string", "status$string" ], "id", U), ht = X([ "avatar_path$string", "display_name$string", "title$string" ], "nick"), dt = X([ "typing$bool" ], "nick", V), ft = X([ "typing$bool" ], "display_name", j), pt = X([ "timestamp$int" ], null, q), mt = (X([ "timestamp$int" ], "nick", z), 
    X([ "banner", "behavior", "branding", "bubble", "chat_button", "chat_window", "concierge", "file_sending", "forms", "greetings", "language", "login", "rating", "sound", "theme", "timezone$string" ]), 
    Ie.throttle(Y, 2e3), [ "on", "un", "fire", "unextendEvents", "init", "getFirehose", "getConnectionStatus" ]);
    for (var _t in Be) Be.hasOwnProperty(_t) && -1 === mt.indexOf(_t) && (Be[_t] = function(e, t) {
    return function() {
    if (!1 !== We) return t.apply(null, arguments);
    ce(new Error("Web SDK is not initialized yet. Please ensure that you call zChat.init() and wait for the connection to be established before calling this method"), e);
    };
    }(_t, Be[_t]));
    e.exports = Be;
    i(Be, "meshim_widget_controllers_WebSDKAPI");
    return Be;
    }();
    }, function(e, t, n) {
    var i = n(0);
    e.exports = function() {
    var t = n(51), r = t;
    e.exports = r;
    i(r, "web_sdk");
    return r;
    }();
    } ]);
    });
    //# sourceMappingURL=web_sdk.map