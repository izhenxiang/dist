import { i as ji } from "./3.js";
import "./0.js";
import { D as ki } from "./$-.js";
import { g as Ii } from "./o.js";
import { s as $r, o as Di, k as Ai, a as Ri, m as Ci, d as zi, _ as Fi } from "./c.js";
import "./_.js";
import "./$.js";
var Gr = { exports: {} };
(
	function (z, L) {
		(function (A) {
			z.exports = A();
		})(function () {
			var A = {};
			Object.defineProperty(A, "__esModule", { value: !0 }), A.default = void 0, A.default =
				function (e) {
					return !(!e || !e.Window) && (e instanceof e.Window);
				};
			var _ = {};
			Object.defineProperty(_, "__esModule", { value: !0 }), _.init = q, _.getWindow =
				function (e) {
					return (0, A.default)(e) ? e : (e.ownerDocument || e).defaultView || B.window;
				}, _.window = _.realWindow = void 0;
			var Y = void 0;
			_.realWindow = Y;
			var B = void 0;
			function q(e) {
				_.realWindow = Y = e;
				var t = e.document.createTextNode("");
				t.ownerDocument !== e.document &&
					typeof e.wrap == "function" &&
					e.wrap(t) === t &&
					(e = e.wrap(e)), _.window = B = e;
			}
			_.window = B, typeof window < "u" && window && q(window);
			var v = {};
			function K(e) {
				return (
					K =
						typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (
							t,
						) {
							return typeof t;
						} : function (t) {
							return t &&
								typeof Symbol == "function" &&
								t.constructor === Symbol &&
								t !== Symbol.prototype ? "symbol" : typeof t;
						}
				)(e);
			}
			Object.defineProperty(v, "__esModule", { value: !0 }), v.default = void 0;
			var $ = function (e) {
				return !!e && K(e) === "object";
			},
				oe = function (e) {
					return typeof e == "function";
				},
				ye = {
					window: function (e) {
						return e === _.window || (0, A.default)(e);
					},
					docFrag: function (e) {
						return $(e) && e.nodeType === 11;
					},
					object: $,
					func: oe,
					number: function (e) {
						return typeof e == "number";
					},
					bool: function (e) {
						return typeof e == "boolean";
					},
					string: function (e) {
						return typeof e == "string";
					},
					element: function (e) {
						if (!e || K(e) !== "object") {
							return !1;
						}
						var t = _.getWindow(e) || _.window;
						return /object|function/.test(K(t.Element)) ? e instanceof t.Element : e.nodeType === 1 && typeof e.nodeName == "string";
					},
					plainObject: function (e) {
						return $(e) &&
						!!e.constructor &&
						/function Object\b/.test(e.constructor.toString());
					},
					array: function (e) {
						return $(e) && e.length !== void 0 && oe(e.splice);
					},
				};
			v.default = ye;
			var me = {};
			function ie(e) {
				var t = e.interaction;
				if (t.prepared.name === "drag") {
					var n = t.prepared.axis;
					n === "x" ? (
						t.coords.cur.page.y = t.coords.start.page.y, t.coords.cur.client.y =
							t.coords.start.client.y, t.coords.velocity.client.y = 0, t.coords.velocity.page.y =
							0
					) : n === "y" && (
						t.coords.cur.page.x = t.coords.start.page.x, t.coords.cur.client.x =
							t.coords.start.client.x, t.coords.velocity.client.x = 0, t.coords.velocity.page.x =
							0
					);
				}
			}
			function Re(e) {
				var t = e.iEvent, n = e.interaction;
				if (n.prepared.name === "drag") {
					var r = n.prepared.axis;
					if (r === "x" || r === "y") {
						var o = r === "x" ? "y" : "x";
						t.page[o] = n.coords.start.page[o], t.client[o] =
							n.coords.start.client[o], t.delta[o] = 0;
					}
				}
			}
			Object.defineProperty(me, "__esModule", { value: !0 }), me.default =
				void 0;
			var Ce = {
				id: "actions/drag",
				install: function (e) {
					var t = e.actions, n = e.Interactable, r = e.defaults;
					n.prototype.draggable = Ce.draggable, t.map.drag = Ce, t.methodDict.drag =
						"draggable", r.actions.drag = Ce.defaults;
				},
				listeners: {
					"interactions:before-action-move": ie,
					"interactions:action-resume": ie,
					"interactions:action-move": Re,
					"auto-start:check": function (e) {
						var t = e.interaction,
							n = e.interactable,
							r = e.buttons,
							o = n.options.drag;
						if (
							o &&
							o.enabled &&
							(
								!t.pointerIsDown ||
									!/mouse|pointer/.test(t.pointerType) ||
									(r & n.options.drag.mouseButtons) != 0
							)
						) {
							return (
								e.action =
									{
										name: "drag",
										axis: o.lockAxis === "start" ? o.startAxis : o.lockAxis,
									}, !1
							);
						}
					},
				},
				draggable: function (e) {
					return v.default.object(e)
						? (
							this.options.drag.enabled = e.enabled !== !1, this.setPerAction(
								"drag",
								e,
							), this.setOnEvents("drag", e), /^(xy|x|y|start)$/.test(
								e.lockAxis,
							) && (this.options.drag.lockAxis = e.lockAxis), /^(xy|x|y)$/.test(
								e.startAxis,
							) && (this.options.drag.startAxis = e.startAxis), this
						)
						: v.default.bool(e)
							? (this.options.drag.enabled = e, this)
							: this.options.drag;
				},
				beforeMove: ie,
				move: Re,
				defaults: { startAxis: "xy", lockAxis: "xy" },
				getCursor: function () {
					return "move";
				},
			},
				$e = Ce;
			me.default = $e;
			var F = {};
			Object.defineProperty(F, "__esModule", { value: !0 }), F.default = void 0;
			var U = {
				init: function (e) {
					var t = e;
					U.document = t.document, U.DocumentFragment = t.DocumentFragment || ae, U.SVGElement =
						t.SVGElement || ae, U.SVGSVGElement = t.SVGSVGElement || ae, U.SVGElementInstance =
						t.SVGElementInstance || ae, U.Element = t.Element || ae, U.HTMLElement =
						t.HTMLElement || U.Element, U.Event = t.Event, U.Touch =
						t.Touch || ae, U.PointerEvent = t.PointerEvent || t.MSPointerEvent;
				},
				document: null,
				DocumentFragment: null,
				SVGElement: null,
				SVGSVGElement: null,
				SVGElementInstance: null,
				Element: null,
				HTMLElement: null,
				Event: null,
				Touch: null,
				PointerEvent: null,
			};
			function ae() {}
			var Kr = U;
			F.default = Kr;
			var Z = {};
			Object.defineProperty(Z, "__esModule", { value: !0 }), Z.default = void 0;
			var te = {
				init: function (e) {
					var t = F.default.Element, n = e.navigator || {};
					te.supportsTouch =
						("ontouchstart" in e) || (
							v.default.func(e.DocumentTouch) && (
								F.default.document instanceof e.DocumentTouch
							)
						), te.supportsPointerEvent =
						n.pointerEnabled !== !1 && !!F.default.PointerEvent, te.isIOS =
						/iP(hone|od|ad)/.test(n.platform), te.isIOS7 =
						/iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), te.isIe9 =
						/MSIE 9/.test(n.userAgent), te.isOperaMobile =
						n.appName === "Opera" &&
							te.supportsTouch &&
							/Presto/.test(n.userAgent), te.prefixedMatchesSelector =
						"matches" in t.prototype
							? "matches"
							: "webkitMatchesSelector" in t.prototype
								? "webkitMatchesSelector"
								: "mozMatchesSelector" in t.prototype
									? "mozMatchesSelector"
									: "oMatchesSelector" in t.prototype
										? "oMatchesSelector"
										: "msMatchesSelector", te.pEventTypes =
						te.supportsPointerEvent
							? F.default.PointerEvent === e.MSPointerEvent
								? {
									up: "MSPointerUp",
									down: "MSPointerDown",
									over: "mouseover",
									out: "mouseout",
									move: "MSPointerMove",
									cancel: "MSPointerCancel",
								}
								: {
									up: "pointerup",
									down: "pointerdown",
									over: "pointerover",
									out: "pointerout",
									move: "pointermove",
									cancel: "pointercancel",
								}
							: null, te.wheelEvent =
						F.default.document && ("onmousewheel" in F.default.document) ? "mousewheel" : "wheel";
				},
				supportsTouch: null,
				supportsPointerEvent: null,
				isIOS7: null,
				isIOS: null,
				isIe9: null,
				isOperaMobile: null,
				prefixedMatchesSelector: null,
				pEventTypes: null,
				wheelEvent: null,
			},
				Zr = te;
			Z.default = Zr;
			var P = {};
			function ct(e) {
				var t = e.parentNode;
				if (v.default.docFrag(t)) {
					for (; (t = t.host) && v.default.docFrag(t); );
					return t;
				}
				return t;
			}
			function ft(e, t) {
				return (
					_.window !== _.realWindow && (t = t.replace(/\/deep\//g, " ")), e[Z.default.prefixedMatchesSelector](
						t,
					)
				);
			}
			Object.defineProperty(P, "__esModule", { value: !0 }), P.nodeContains =
				function (e, t) {
					if (e.contains) {
						return e.contains(t);
					}
					for (; t; ) {
						if (t === e) {
							return !0;
						}
						t = t.parentNode;
					}
					return !1;
				}, P.closest =
				function (e, t) {
					for (; v.default.element(e); ) {
						if (ft(e, t)) {
							return e;
						}
						e = ct(e);
					}
					return null;
				}, P.parentNode = ct, P.matchesSelector = ft, P.indexOfDeepestElement =
				function (e) {
					for (var t, n = [], r = 0; r < e.length; r++) {
						var o = e[r], i = e[t];
						if (o && r !== t) {
							if (i) {
								var s = Vt(o), a = Vt(i);
								if (s !== o.ownerDocument) {
									if (a !== o.ownerDocument) {
										if (s !== a) {
											n = n.length ? n : En(i);
											var l = void 0;
											if (
												(i instanceof F.default.HTMLElement) &&
												(o instanceof F.default.SVGElement) &&
												!(o instanceof F.default.SVGSVGElement)
											) {
												if (o === a) {
													continue;
												}
												l = o.ownerSVGElement;
											} else {
												l = o;
											}
											for (
												var u = En(l, i.ownerDocument), c = 0;
												u[c] && u[c] === n[c];
											) c++;
											var f = [u[c - 1], u[c], n[c]];
											if (f[0]) {
												for (var p = f[0].lastChild; p; ) {
													if (p === f[1]) {
														t = r, n = u;
														break;
													}
													if (p === f[2]) {
														break;
													}
													p = p.previousSibling;
												}
											}
										} else {
											h = o, d = i, (
												parseInt(_.getWindow(h).getComputedStyle(h).zIndex, 10) || 0
											) >= (
												parseInt(_.getWindow(d).getComputedStyle(d).zIndex, 10) || 0
											) && (t = r);
										}
									} else {
										t = r;
									}
								}
							} else {
								t = r;
							}
						}
					}
					var h, d;
					return t;
				}, P.matchesUpTo =
				function (e, t, n) {
					for (; v.default.element(e); ) {
						if (ft(e, t)) {
							return !0;
						}
						if ((e = ct(e)) === n) {
							return ft(e, t);
						}
					}
					return !1;
				}, P.getActualElement =
				function (e) {
					return e.correspondingUseElement || e;
				}, P.getScrollXY = Sn, P.getElementClientRect = Tn, P.getElementRect =
				function (e) {
					var t = Tn(e);
					if (!Z.default.isIOS7 && t) {
						var n = Sn(_.getWindow(e));
						t.left += n.x, t.right += n.x, t.top += n.y, t.bottom += n.y;
					}
					return t;
				}, P.getPath =
				function (e) {
					for (var t = []; e; ) t.push(e), e = ct(e);
					return t;
				}, P.trySelector =
				function (e) {
					return !!v.default.string(e) && (
						F.default.document.querySelector(e), !0
					);
				};
			var Vt = function (e) {
				return e.parentNode || e.host;
			};
			function En(e, t) {
				for (
					var n, r = [], o = e;
					(n = Vt(o)) && o !== t && n !== o.ownerDocument;
				) r.unshift(o), o = n;
				return r;
			}
			function Sn(e) {
				return {
					x: (e = e || _.window).scrollX || e.document.documentElement.scrollLeft,
					y: e.scrollY || e.document.documentElement.scrollTop,
				};
			}
			function Tn(e) {
				var t = e instanceof F.default.SVGElement ? e.getBoundingClientRect() : e.getClientRects()[0];
				return t && {
					left: t.left,
					right: t.right,
					top: t.top,
					bottom: t.bottom,
					width: t.width || t.right - t.left,
					height: t.height || t.bottom - t.top,
				};
			}
			var w = {};
			Object.defineProperty(w, "__esModule", { value: !0 }), w.default =
				function (e, t) {
					for (var n in t) e[n] = t[n];
					return e;
				};
			var R = {};
			function Nt(e, t) {
				(t == null || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function Mn(e, t, n) {
				return e === "parent"
					? (0, P.parentNode)(n)
					: e === "self"
						? t.getRect(n)
						: (0, P.closest)(n, e);
			}
			Object.defineProperty(R, "__esModule", { value: !0 }), R.getStringOptionResult =
				Mn, R.resolveRectLike =
				function (e, t, n, r) {
					var o, i = e;
					return (
						v.default.string(i) ? i = Mn(i, t, n) : v.default.func(i) && (
							i =
								i.apply(
									void 0,
									function (s) {
										if (Array.isArray(s)) {
											return Nt(s);
										}
									}(o = r) ||
										function (s) {
											if (typeof Symbol < "u" && (Symbol.iterator in Object(s))) {
												return Array.from(s);
											}
										}(o) ||
										function (s, a) {
											if (s) {
												if (typeof s == "string") {
													return Nt(s, a);
												}
												var l = Object.prototype.toString.call(s).slice(8, -1);
												return (
													l === "Object" &&
														s.constructor &&
														(l = s.constructor.name), l === "Map" || l === "Set"
														? Array.from(s)
														: l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
															l,
														)
															? Nt(s, a)
															: void 0
												);
											}
										}(o) ||
										function () {
											throw new TypeError(
												`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`,
											);
										}(),
								)
						), v.default.element(i) && (i = (0, P.getElementRect)(i)), i
					);
				}, R.rectToXY =
				function (e) {
					return e && { x: "x" in e ? e.x : e.left, y: "y" in e ? e.y : e.top };
				}, R.xywhToTlbr =
				function (e) {
					return (
						!e ||
							(("left" in e) && ("top" in e)) ||
							(
								(e = (0, w.default)({}, e)).left = e.x || 0, e.top = e.y || 0, e.right =
									e.right || e.left + e.width, e.bottom =
									e.bottom || e.top + e.height
							), e
					);
				}, R.tlbrToXywh =
				function (e) {
					return (
						!e ||
							(("x" in e) && ("y" in e)) ||
							(
								(e = (0, w.default)({}, e)).x = e.left || 0, e.y = e.top || 0, e.width =
									e.width || (e.right || 0) - e.x, e.height =
									e.height || (e.bottom || 0) - e.y
							), e
					);
				}, R.addEdges =
				function (e, t, n) {
					e.left && (t.left += n.x), e.right && (t.right += n.x), e.top && (
						t.top += n.y
					), e.bottom && (t.bottom += n.y), t.width = t.right - t.left, t.height =
						t.bottom - t.top;
				};
			var Ee = {};
			Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.default =
				function (e, t, n) {
					var r = e.options[n],
						o = (r && r.origin) || e.options.origin,
						i = (0, R.resolveRectLike)(o, e, t, [e && t]);
					return (0, R.rectToXY)(i) || { x: 0, y: 0 };
				};
			var ze = {};
			function jn(e) {
				return e.trim().split(/ +/);
			}
			Object.defineProperty(ze, "__esModule", { value: !0 }), ze.default =
				function e(t, n, r) {
					if (
						r = r || {}, v.default.string(t) &&
							t.search(" ") !== -1 &&
							(t = jn(t)), v.default.array(t)
					) {
						return t.reduce(
							function (l, u) {
								return (0, w.default)(l, e(u, n, r));
							},
							r,
						);
					}
					if (v.default.object(t) && (n = t, t = ""), v.default.func(n)) {
						r[t] = r[t] || [], r[t].push(n);
					} else if (v.default.array(n)) {
						for (var o = 0; o < n.length; o++) {
							var i;
							i = n[o], e(t, i, r);
						}
					} else if (v.default.object(n)) {
						for (var s in n) {
							var a = jn(s)
								.map(function (l) {
									return "".concat(t).concat(l);
								});
							e(a, n[s], r);
						}
					}
					return r;
				};
			var be = {};
			Object.defineProperty(be, "__esModule", { value: !0 }), be.default =
				void 0, be.default =
				function (e, t) {
					return Math.sqrt((e * e) + (t * t));
				};
			var Ge = {};
			function qt(e, t) {
				for (var n in t) {
					var r = qt.prefixedPropREs, o = !1;
					for (var i in r) if (n.indexOf(i) === 0 && r[i].test(n)) {
						o = !0;
						break;
					}
					o || typeof t[n] == "function" || (e[n] = t[n]);
				}
				return e;
			}
			Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.default =
				void 0, qt.prefixedPropREs =
				{
					webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,
					moz: /(Pressure)$/,
				};
			var Jr = qt;
			Ge.default = Jr;
			var x = {};
			function $t(e) {
				return (e instanceof F.default.Event) || (e instanceof F.default.Touch);
			}
			function He(e, t, n) {
				return (
					e = e || "page", (n = n || {}).x = t[e + "X"], n.y = t[e + "Y"], n
				);
			}
			function kn(e, t) {
				return (
					t = t || { x: 0, y: 0 }, Z.default.isOperaMobile && $t(e) ? (
						He("screen", e, t), t.x += window.scrollX, t.y += window.scrollY
					) : He("page", e, t), t
				);
			}
			function In(e, t) {
				return (
					t = t || {}, Z.default.isOperaMobile && $t(e) ? He("screen", e, t) : He(
						"client",
						e,
						t,
					), t
				);
			}
			function dt(e) {
				var t = [];
				return (
					v.default.array(e)
						? (t[0] = e[0], t[1] = e[1])
						: e.type === "touchend"
							? e.touches.length === 1
								? (t[0] = e.touches[0], t[1] = e.changedTouches[0])
								: e.touches.length === 0 && (
									t[0] = e.changedTouches[0], t[1] = e.changedTouches[1]
								)
							: (t[0] = e.touches[0], t[1] = e.touches[1]), t
				);
			}
			function Dn(e) {
				for (
					var t = {
						pageX: 0,
						pageY: 0,
						clientX: 0,
						clientY: 0,
						screenX: 0,
						screenY: 0,
					},
						n = 0;
					n < e.length;
					n++
				) {
					var r = e[n];
					for (var o in t) t[o] += r[o];
				}
				for (var i in t) t[i] /= e.length;
				return t;
			}
			Object.defineProperty(x, "__esModule", { value: !0 }), x.copyCoords =
				function (e, t) {
					e.page = e.page || {}, e.page.x = t.page.x, e.page.y = t.page.y, e.client =
						e.client || {}, e.client.x = t.client.x, e.client.y = t.client.y, e.timeStamp =
						t.timeStamp;
				}, x.setCoordDeltas =
				function (e, t, n) {
					e.page.x = n.page.x - t.page.x, e.page.y = n.page.y - t.page.y, e.client.x =
						n.client.x - t.client.x, e.client.y = n.client.y - t.client.y, e.timeStamp =
						n.timeStamp - t.timeStamp;
				}, x.setCoordVelocity =
				function (e, t) {
					var n = Math.max(t.timeStamp / 1e3, .001);
					e.page.x = t.page.x / n, e.page.y = t.page.y / n, e.client.x =
						t.client.x / n, e.client.y = t.client.y / n, e.timeStamp = n;
				}, x.setZeroCoords =
				function (e) {
					e.page.x = 0, e.page.y = 0, e.client.x = 0, e.client.y = 0;
				}, x.isNativePointer = $t, x.getXY = He, x.getPageXY = kn, x.getClientXY =
				In, x.getPointerId =
				function (e) {
					return v.default.number(e.pointerId) ? e.pointerId : e.identifier;
				}, x.setCoords =
				function (e, t, n) {
					var r = t.length > 1 ? Dn(t) : t[0];
					kn(r, e.page), In(r, e.client), e.timeStamp = n;
				}, x.getTouchPair = dt, x.pointerAverage = Dn, x.touchBBox =
				function (e) {
					if (!e.length) {
						return null;
					}
					var t = dt(e),
						n = Math.min(t[0].pageX, t[1].pageX),
						r = Math.min(t[0].pageY, t[1].pageY),
						o = Math.max(t[0].pageX, t[1].pageX),
						i = Math.max(t[0].pageY, t[1].pageY);
					return {
						x: n,
						y: r,
						left: n,
						top: r,
						right: o,
						bottom: i,
						width: o - n,
						height: i - r,
					};
				}, x.touchDistance =
				function (e, t) {
					var n = t + "X",
						r = t + "Y",
						o = dt(e),
						i = o[0][n] - o[1][n],
						s = o[0][r] - o[1][r];
					return (0, be.default)(i, s);
				}, x.touchAngle =
				function (e, t) {
					var n = t + "X",
						r = t + "Y",
						o = dt(e),
						i = o[1][n] - o[0][n],
						s = o[1][r] - o[0][r];
					return 180 * Math.atan2(s, i) / Math.PI;
				}, x.getPointerType =
				function (e) {
					return v.default.string(e.pointerType)
						? e.pointerType
						: v.default.number(e.pointerType)
							? [void 0, void 0, "touch", "pen", "mouse"][e.pointerType]
							: /touch/.test(e.type || "") || (e instanceof F.default.Touch)
								? "touch"
								: "mouse";
				}, x.getEventTargets =
				function (e) {
					var t = v.default.func(e.composedPath) ? e.composedPath() : e.path;
					return [
						P.getActualElement(t ? t[0] : e.target),
						P.getActualElement(e.currentTarget),
					];
				}, x.newCoords =
				function () {
					return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
				}, x.coordsToEvent =
				function (e) {
					return {
						coords: e,
						get page() {
							return this.coords.page;
						},
						get client() {
							return this.coords.client;
						},
						get timeStamp() {
							return this.coords.timeStamp;
						},
						get pageX() {
							return this.coords.page.x;
						},
						get pageY() {
							return this.coords.page.y;
						},
						get clientX() {
							return this.coords.client.x;
						},
						get clientY() {
							return this.coords.client.y;
						},
						get pointerId() {
							return this.coords.pointerId;
						},
						get target() {
							return this.coords.target;
						},
						get type() {
							return this.coords.type;
						},
						get pointerType() {
							return this.coords.pointerType;
						},
						get buttons() {
							return this.coords.buttons;
						},
						preventDefault: function () {},
					};
				}, Object.defineProperty(
				x,
				"pointerExtend",
				{
					enumerable: !0,
					get: function () {
						return Ge.default;
					},
				},
			);
			var Fe = {};
			function Qr(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function xe(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.BaseEvent =
				void 0;
			var An = function () {
				function e(r) {
					(
						function (o, i) {
							if (!(o instanceof i)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), xe(this, "type", void 0), xe(this, "target", void 0), xe(
						this,
						"currentTarget",
						void 0,
					), xe(this, "interactable", void 0), xe(this, "_interaction", void 0), xe(
						this,
						"timeStamp",
						void 0,
					), xe(this, "immediatePropagationStopped", !1), xe(
						this,
						"propagationStopped",
						!1,
					), this._interaction = r;
				}
				var t, n;
				return (
					t = e, (
						n =
							[
								{ key: "preventDefault", value: function () {} },
								{
									key: "stopPropagation",
									value: function () {
										this.propagationStopped = !0;
									},
								},
								{
									key: "stopImmediatePropagation",
									value: function () {
										this.immediatePropagationStopped =
											this.propagationStopped = !0;
									},
								},
							]
					) && Qr(t.prototype, n), e
				);
			}();
			Fe.BaseEvent = An, Object.defineProperty(
				An.prototype,
				"interaction",
				{
					get: function () {
						return this._interaction._proxy;
					},
					set: function () {},
				},
			);
			var D = {};
			Object.defineProperty(D, "__esModule", { value: !0 }), D.find =
				D.findIndex = D.from = D.merge = D.remove = D.contains = void 0, D.contains =
				function (e, t) {
					return e.indexOf(t) !== -1;
				}, D.remove =
				function (e, t) {
					return e.splice(e.indexOf(t), 1);
				};
			var Rn = function (e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					e.push(r);
				}
				return e;
			};
			D.merge = Rn, D.from =
				function (e) {
					return Rn([], e);
				};
			var Cn = function (e, t) {
				for (var n = 0; n < e.length; n++) if (t(e[n], n, e)) {
					return n;
				}
				return -1;
			};
			D.findIndex = Cn, D.find =
				function (e, t) {
					return e[Cn(e, t)];
				};
			var ce = {};
			function zn(e) {
				return (
					zn =
						typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (
							t,
						) {
							return typeof t;
						} : function (t) {
							return t &&
								typeof Symbol == "function" &&
								t.constructor === Symbol &&
								t !== Symbol.prototype ? "symbol" : typeof t;
						}
				)(e);
			}
			function eo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function Fn(e, t) {
				return (
					Fn =
						Object.setPrototypeOf || function (n, r) {
							return (n.__proto__ = r, n);
						}
				)(e, t);
			}
			function to(e, t) {
				return !t || (zn(t) !== "object" && typeof t != "function") ? fe(e) : t;
			}
			function fe(e) {
				if (e === void 0) {
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called",
					);
				}
				return e;
			}
			function Gt(e) {
				return (
					Gt =
						Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
						}
				)(e);
			}
			function we(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(ce, "__esModule", { value: !0 }), ce.DropEvent =
				void 0;
			var no = function (e) {
				(
					function (a, l) {
						if (typeof l != "function" && l !== null) {
							throw new TypeError(
								"Super expression must either be null or a function",
							);
						}
						a.prototype =
							Object.create(
								l && l.prototype,
								{ constructor: { value: a, writable: !0, configurable: !0 } },
							), l && Fn(a, l);
					}
				)(s, e);
				var t,
					n,
					r,
					o,
					i = (
						r = s, o =
							function () {
								if (
									typeof Reflect > "u" ||
									!Reflect.construct ||
									Reflect.construct.sham
								) {
									return !1;
								}
								if (typeof Proxy == "function") {
									return !0;
								}
								try {
									return (
										Boolean.prototype.valueOf.call(
											Reflect.construct(Boolean, [], function () {}),
										), !0
									);
								} catch {
									return !1;
								}
							}(), function () {
							var a, l = Gt(r);
							if (o) {
								var u = Gt(this).constructor;
								a = Reflect.construct(l, arguments, u);
							} else {
								a = l.apply(this, arguments);
							}
							return to(this, a);
						}
					);
				function s(a, l, u) {
					var c;
					(
						function (d, g) {
							if (!(d instanceof g)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, s), we(fe(c = i.call(this, l._interaction)), "target", void 0), we(
						fe(c),
						"dropzone",
						void 0,
					), we(fe(c), "dragEvent", void 0), we(fe(c), "relatedTarget", void 0), we(
						fe(c),
						"draggable",
						void 0,
					), we(fe(c), "timeStamp", void 0), we(fe(c), "propagationStopped", !1), we(
						fe(c),
						"immediatePropagationStopped",
						!1,
					);
					var f = u === "dragleave" ? a.prev : a.cur,
						p = f.element,
						h = f.dropzone;
					return (
						c.type = u, c.target = p, c.currentTarget = p, c.dropzone = h, c.dragEvent =
							l, c.relatedTarget = l.target, c.draggable = l.interactable, c.timeStamp =
							l.timeStamp, c
					);
				}
				return (
					t = s, (
						n =
							[
								{
									key: "reject",
									value: function () {
										var a = this, l = this._interaction.dropState;
										if (
											this.type === "dropactivate" || (
												this.dropzone &&
													l.cur.dropzone === this.dropzone &&
													l.cur.element === this.target
											)
										) {
											if (
												l.prev.dropzone = this.dropzone, l.prev.element =
													this.target, l.rejected = !0, l.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate"
											) {
												var u = l.activeDrops,
													c = D.findIndex(
														u,
														function (p) {
															var h = p.dropzone, d = p.element;
															return h === a.dropzone && d === a.target;
														},
													);
												l.activeDrops.splice(c, 1);
												var f = new s(l, this.dragEvent, "dropdeactivate");
												f.dropzone = this.dropzone, f.target = this.target, this.dropzone.fire(
													f,
												);
											} else {
												this.dropzone.fire(
													new s(l, this.dragEvent, "dragleave"),
												);
											}
										}
									},
								},
								{ key: "preventDefault", value: function () {} },
								{
									key: "stopPropagation",
									value: function () {
										this.propagationStopped = !0;
									},
								},
								{
									key: "stopImmediatePropagation",
									value: function () {
										this.immediatePropagationStopped =
											this.propagationStopped = !0;
									},
								},
							]
					) && eo(t.prototype, n), s
				);
			}(Fe.BaseEvent);
			ce.DropEvent = no;
			var pt = {};
			function Xn(e, t) {
				for (var n = 0; n < e.slice().length; n++) {
					var r = e.slice()[n], o = r.dropzone, i = r.element;
					t.dropzone = o, t.target = i, o.fire(t), t.propagationStopped =
						t.immediatePropagationStopped = !1;
				}
			}
			function Ht(e, t) {
				for (
					var n = function (i, s) {
						for (var a = i.interactables, l = [], u = 0; u < a.list.length; u++) {
							var c = a.list[u];
							if (c.options.drop.enabled) {
								var f = c.options.drop.accept;
								if (
									!(
										(v.default.element(f) && f !== s) ||
											(v.default.string(f) && !P.matchesSelector(s, f)) ||
											(
												v.default.func(f) && !f({
													dropzone: c,
													draggableElement: s,
												})
											)
									)
								) {
									for (
										var p = v.default.string(c.target)
											? c._context.querySelectorAll(c.target)
											: v.default.array(c.target)
												? c.target
												: [c.target],
											h = 0;
										h < p.length;
										h++
									) {
										var d = p[h];
										d !== s && l.push({
											dropzone: c,
											element: d,
											rect: c.getRect(d),
										});
									}
								}
							}
						}
						return l;
					}(e, t),
						r = 0;
					r < n.length;
					r++
				) {
					var o = n[r];
					o.rect = o.dropzone.getRect(o.element);
				}
				return n;
			}
			function Yn(e, t, n) {
				for (
					var r = e.dropState, o = e.interactable, i = e.element, s = [], a = 0;
					a < r.activeDrops.length;
					a++
				) {
					var l = r.activeDrops[a], u = l.dropzone, c = l.element, f = l.rect;
					s.push(u.dropCheck(t, n, o, i, c, f) ? c : null);
				}
				var p = P.indexOfDeepestElement(s);
				return r.activeDrops[p] || null;
			}
			function Kt(e, t, n) {
				var r = e.dropState,
					o = {
						enter: null,
						leave: null,
						activate: null,
						deactivate: null,
						move: null,
						drop: null,
					};
				return (
					n.type === "dragstart" && (
						o.activate = new ce.DropEvent(r, n, "dropactivate"), o.activate.target =
							null, o.activate.dropzone = null
					), n.type === "dragend" && (
						o.deactivate = new ce.DropEvent(r, n, "dropdeactivate"), o.deactivate.target =
							null, o.deactivate.dropzone = null
					), r.rejected || (
						r.cur.element !== r.prev.element && (
							r.prev.dropzone && (
								o.leave = new ce.DropEvent(r, n, "dragleave"), n.dragLeave =
									o.leave.target = r.prev.element, n.prevDropzone =
									o.leave.dropzone = r.prev.dropzone
							), r.cur.dropzone && (
								o.enter = new ce.DropEvent(r, n, "dragenter"), n.dragEnter =
									r.cur.element, n.dropzone = r.cur.dropzone
							)
						), n.type === "dragend" &&
							r.cur.dropzone &&
							(
								o.drop = new ce.DropEvent(r, n, "drop"), n.dropzone =
									r.cur.dropzone, n.relatedTarget = r.cur.element
							), n.type === "dragmove" &&
							r.cur.dropzone &&
							(
								o.move = new ce.DropEvent(r, n, "dropmove"), o.move.dragmove = n, n.dropzone =
									r.cur.dropzone
							)
					), o
				);
			}
			function Zt(e, t) {
				var n = e.dropState, r = n.activeDrops, o = n.cur, i = n.prev;
				t.leave && i.dropzone.fire(t.leave), t.enter && o.dropzone.fire(t.enter), t.move && o.dropzone.fire(
					t.move,
				), t.drop && o.dropzone.fire(t.drop), t.deactivate && Xn(
					r,
					t.deactivate,
				), n.prev.dropzone = o.dropzone, n.prev.element = o.element;
			}
			function Bn(e, t) {
				var n = e.interaction, r = e.iEvent, o = e.event;
				if (r.type === "dragmove" || r.type === "dragend") {
					var i = n.dropState;
					t.dynamicDrop && (i.activeDrops = Ht(t, n.element));
					var s = r, a = Yn(n, s, o);
					i.rejected =
						i.rejected &&
							!!a &&
							a.dropzone === i.cur.dropzone &&
							a.element === i.cur.element, i.cur.dropzone = a && a.dropzone, i.cur.element =
						a && a.element, i.events = Kt(n, 0, s);
				}
			}
			Object.defineProperty(pt, "__esModule", { value: !0 }), pt.default =
				void 0;
			var Wn = {
				id: "actions/drop",
				install: function (e) {
					var t = e.actions,
						n = e.interactStatic,
						r = e.Interactable,
						o = e.defaults;
					e.usePlugin(me.default), r.prototype.dropzone =
						function (i) {
							return function (s, a) {
								if (v.default.object(a)) {
									if (s.options.drop.enabled = a.enabled !== !1, a.listeners) {
										var l = (0, ze.default)(a.listeners),
											u = Object
												.keys(l)
												.reduce(
													function (c, f) {
														return (
															c[/^(enter|leave)/.test(f)
																? "drag".concat(f)
																: /^(activate|deactivate|move)/.test(f)
																	? "drop".concat(f)
																	: f] = l[f], c
														);
													},
													{},
												);
										s.off(s.options.drop.listeners), s.on(u), s.options.drop.listeners =
											u;
									}
									return (
										v.default.func(a.ondrop) && s.on("drop", a.ondrop), v.default.func(
											a.ondropactivate,
										) && s.on("dropactivate", a.ondropactivate), v.default.func(
											a.ondropdeactivate,
										) && s.on("dropdeactivate", a.ondropdeactivate), v.default.func(
											a.ondragenter,
										) && s.on("dragenter", a.ondragenter), v.default.func(
											a.ondragleave,
										) && s.on("dragleave", a.ondragleave), v.default.func(
											a.ondropmove,
										) && s.on("dropmove", a.ondropmove), /^(pointer|center)$/.test(
											a.overlap,
										) ? s.options.drop.overlap = a.overlap : v.default.number(
											a.overlap,
										) && (
											s.options.drop.overlap =
												Math.max(Math.min(1, a.overlap), 0)
										), ("accept" in a) && (s.options.drop.accept = a.accept), (
											"checker" in a
										) && (s.options.drop.checker = a.checker), s
									);
								}
								return v.default.bool(a) ? (s.options.drop.enabled = a, s) : s.options.drop;
							}(this, i);
						}, r.prototype.dropCheck =
						function (i, s, a, l, u, c) {
							return function (f, p, h, d, g, m, y) {
								var b = !1;
								if (!(y = y || f.getRect(m))) {
									return !!f.options.drop.checker && f.options.drop.checker(
										p,
										h,
										b,
										f,
										m,
										d,
										g,
									);
								}
								var O = f.options.drop.overlap;
								if (O === "pointer") {
									var S = (0, Ee.default)(d, g, "drag"), M = x.getPageXY(p);
									M.x += S.x, M.y += S.y;
									var C = M.x > y.left && M.x < y.right,
										T = M.y > y.top && M.y < y.bottom;
									b = C && T;
								}
								var I = d.getRect(g);
								if (I && O === "center") {
									var re = I.left + (I.width / 2), ge = I.top + (I.height / 2);
									b =
										re >= y.left &&
											re <= y.right &&
											ge >= y.top &&
											ge <= y.bottom;
								}
								return (
									I &&
										v.default.number(O) &&
										(
											b =
												(
													Math.max(
														0,
														Math.min(y.right, I.right) - Math.max(
															y.left,
															I.left,
														),
													) * Math.max(
														0,
														Math.min(y.bottom, I.bottom) - Math.max(
															y.top,
															I.top,
														),
													) / (I.width * I.height)
												) >= O
										), f.options.drop.checker && (
										b = f.options.drop.checker(p, h, b, f, m, d, g)
									), b
								);
							}(this, i, s, a, l, u, c);
						}, n.dynamicDrop =
						function (i) {
							return v.default.bool(i) ? (e.dynamicDrop = i, n) : e.dynamicDrop;
						}, (0, w.default)(
						t.phaselessTypes,
						{
							dragenter: !0,
							dragleave: !0,
							dropactivate: !0,
							dropdeactivate: !0,
							dropmove: !0,
							drop: !0,
						},
					), t.methodDict.drop = "dropzone", e.dynamicDrop = !1, o.actions.drop =
						Wn.defaults;
				},
				listeners: {
					"interactions:before-action-start": function (e) {
						var t = e.interaction;
						t.prepared.name === "drag" && (
							t.dropState =
								{
									cur: { dropzone: null, element: null },
									prev: { dropzone: null, element: null },
									rejected: null,
									events: null,
									activeDrops: [],
								}
						);
					},
					"interactions:after-action-start": function (e, t) {
						var n = e.interaction, r = (e.event, e.iEvent);
						if (n.prepared.name === "drag") {
							var o = n.dropState;
							o.activeDrops = null, o.events = null, o.activeDrops =
								Ht(t, n.element), o.events = Kt(n, 0, r), o.events.activate && (
								Xn(o.activeDrops, o.events.activate), t.fire(
									"actions/drop:start",
									{ interaction: n, dragEvent: r },
								)
							);
						}
					},
					"interactions:action-move": Bn,
					"interactions:after-action-move": function (e, t) {
						var n = e.interaction, r = e.iEvent;
						n.prepared.name === "drag" && (
							Zt(n, n.dropState.events), t.fire(
								"actions/drop:move",
								{ interaction: n, dragEvent: r },
							), n.dropState.events = {}
						);
					},
					"interactions:action-end": function (e, t) {
						if (e.interaction.prepared.name === "drag") {
							var n = e.interaction, r = e.iEvent;
							Bn(e, t), Zt(n, n.dropState.events), t.fire(
								"actions/drop:end",
								{ interaction: n, dragEvent: r },
							);
						}
					},
					"interactions:stop": function (e) {
						var t = e.interaction;
						if (t.prepared.name === "drag") {
							var n = t.dropState;
							n && (
								n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element =
									null, n.prev.dropzone = null, n.prev.element = null, n.rejected =
									!1
							);
						}
					},
				},
				getActiveDrops: Ht,
				getDrop: Yn,
				getDropEvents: Kt,
				fireDropEvents: Zt,
				defaults: { enabled: !1, accept: null, overlap: "pointer" },
			},
				ro = Wn;
			pt.default = ro;
			var vt = {};
			function Jt(e) {
				var t = e.interaction, n = e.iEvent, r = e.phase;
				if (t.prepared.name === "gesture") {
					var o = t.pointers.map(function (u) {
						return u.pointer;
					}),
						i = r === "start",
						s = r === "end",
						a = t.interactable.options.deltaSource;
					if (n.touches = [o[0], o[1]], i) {
						n.distance = x.touchDistance(o, a), n.box = x.touchBBox(o), n.scale =
							1, n.ds = 0, n.angle = x.touchAngle(o, a), n.da = 0, t.gesture.startDistance =
							n.distance, t.gesture.startAngle = n.angle;
					} else if (s) {
						var l = t.prevEvent;
						n.distance = l.distance, n.box = l.box, n.scale = l.scale, n.ds = 0, n.angle =
							l.angle, n.da = 0;
					} else {
						n.distance = x.touchDistance(o, a), n.box = x.touchBBox(o), n.scale =
							n.distance / t.gesture.startDistance, n.angle = x.touchAngle(o, a), n.ds =
							n.scale - t.gesture.scale, n.da = n.angle - t.gesture.angle;
					}
					t.gesture.distance = n.distance, t.gesture.angle = n.angle, v.default.number(
						n.scale,
					) &&
						n.scale !== (1 / 0) &&
						!isNaN(n.scale) &&
						(t.gesture.scale = n.scale);
				}
			}
			Object.defineProperty(vt, "__esModule", { value: !0 }), vt.default =
				void 0;
			var Qt = {
				id: "actions/gesture",
				before: ["actions/drag", "actions/resize"],
				install: function (e) {
					var t = e.actions, n = e.Interactable, r = e.defaults;
					n.prototype.gesturable =
						function (o) {
							return v.default.object(o)
								? (
									this.options.gesture.enabled = o.enabled !== !1, this.setPerAction(
										"gesture",
										o,
									), this.setOnEvents("gesture", o), this
								)
								: v.default.bool(o)
									? (this.options.gesture.enabled = o, this)
									: this.options.gesture;
						}, t.map.gesture = Qt, t.methodDict.gesture = "gesturable", r.actions.gesture =
						Qt.defaults;
				},
				listeners: {
					"interactions:action-start": Jt,
					"interactions:action-move": Jt,
					"interactions:action-end": Jt,
					"interactions:new": function (e) {
						e.interaction.gesture =
							{
								angle: 0,
								distance: 0,
								scale: 1,
								startAngle: 0,
								startDistance: 0,
							};
					},
					"auto-start:check": function (e) {
						if (!(e.interaction.pointers.length < 2)) {
							var t = e.interactable.options.gesture;
							if (t && t.enabled) {
								return (e.action = { name: "gesture" }, !1);
							}
						}
					},
				},
				defaults: {},
				getCursor: function () {
					return "";
				},
			},
				oo = Qt;
			vt.default = oo;
			var ht = {};
			function io(e, t, n, r, o, i, s) {
				if (!t) {
					return !1;
				}
				if (t === !0) {
					var a = v.default.number(i.width) ? i.width : i.right - i.left,
						l = v.default.number(i.height) ? i.height : i.bottom - i.top;
					if (
						s =
							Math.min(s, Math.abs((e === "left" || e === "right" ? a : l) / 2)), a < 0 && (
							e === "left" ? e = "right" : e === "right" && (e = "left")
						), l < 0 && (
							e === "top" ? e = "bottom" : e === "bottom" && (e = "top")
						), e === "left"
					) {
						return n.x < ((a >= 0 ? i.left : i.right) + s);
					}
					if (e === "top") {
						return n.y < ((l >= 0 ? i.top : i.bottom) + s);
					}
					if (e === "right") {
						return n.x > ((a >= 0 ? i.right : i.left) - s);
					}
					if (e === "bottom") {
						return n.y > ((l >= 0 ? i.bottom : i.top) - s);
					}
				}
				return !!v.default.element(r) && (
					v.default.element(t) ? t === r : P.matchesUpTo(r, t, o)
				);
			}
			function Ln(e) {
				var t = e.iEvent, n = e.interaction;
				if (n.prepared.name === "resize" && n.resizeAxes) {
					var r = t;
					n.interactable.options.resize.square ? (
						n.resizeAxes === "y" ? r.delta.x = r.delta.y : r.delta.y = r.delta.x, r.axes =
							"xy"
					) : (
						r.axes = n.resizeAxes, n.resizeAxes === "x" ? r.delta.y = 0 : n.resizeAxes === "y" && (
							r.delta.x = 0
						)
					);
				}
			}
			Object.defineProperty(ht, "__esModule", { value: !0 }), ht.default =
				void 0;
			var de = {
				id: "actions/resize",
				before: ["actions/drag"],
				install: function (e) {
					var t = e.actions, n = e.browser, r = e.Interactable, o = e.defaults;
					de.cursors =
						function (i) {
							return i.isIe9 ? {
								x: "e-resize",
								y: "s-resize",
								xy: "se-resize",
								top: "n-resize",
								left: "w-resize",
								bottom: "s-resize",
								right: "e-resize",
								topleft: "se-resize",
								bottomright: "se-resize",
								topright: "ne-resize",
								bottomleft: "ne-resize",
							} : {
								x: "ew-resize",
								y: "ns-resize",
								xy: "nwse-resize",
								top: "ns-resize",
								left: "ew-resize",
								bottom: "ns-resize",
								right: "ew-resize",
								topleft: "nwse-resize",
								bottomright: "nwse-resize",
								topright: "nesw-resize",
								bottomleft: "nesw-resize",
							};
						}(n), de.defaultMargin =
						n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable =
						function (i) {
							return function (s, a, l) {
								return v.default.object(a)
									? (
										s.options.resize.enabled = a.enabled !== !1, s.setPerAction(
											"resize",
											a,
										), s.setOnEvents("resize", a), v.default.string(a.axis) && /^x$|^y$|^xy$/.test(
											a.axis,
										) ? s.options.resize.axis = a.axis : a.axis === null && (
											s.options.resize.axis = l.defaults.actions.resize.axis
										), v.default.bool(a.preserveAspectRatio) ? s.options.resize.preserveAspectRatio =
											a.preserveAspectRatio : v.default.bool(a.square) && (
											s.options.resize.square = a.square
										), s
									)
									: v.default.bool(a)
										? (s.options.resize.enabled = a, s)
										: s.options.resize;
							}(this, i, e);
						}, t.map.resize = de, t.methodDict.resize = "resizable", o.actions.resize =
						de.defaults;
				},
				listeners: {
					"interactions:new": function (e) {
						e.interaction.resizeAxes = "xy";
					},
					"interactions:action-start": function (e) {
						(function (t) {
							var n = t.iEvent, r = t.interaction;
							if (r.prepared.name === "resize" && r.prepared.edges) {
								var o = n, i = r.rect;
								r._rects =
									{
										start: (0, w.default)({}, i),
										corrected: (0, w.default)({}, i),
										previous: (0, w.default)({}, i),
										delta: {
											left: 0,
											right: 0,
											width: 0,
											top: 0,
											bottom: 0,
											height: 0,
										},
									}, o.edges = r.prepared.edges, o.rect = r._rects.corrected, o.deltaRect =
									r._rects.delta;
							}
						})(e), Ln(e);
					},
					"interactions:action-move": function (e) {
						(function (t) {
							var n = t.iEvent, r = t.interaction;
							if (r.prepared.name === "resize" && r.prepared.edges) {
								var o = n,
									i = r.interactable.options.resize.invert,
									s = i === "reposition" || i === "negate",
									a = r.rect,
									l = r._rects,
									u = l.start,
									c = l.corrected,
									f = l.delta,
									p = l.previous;
								if ((0, w.default)(p, c), s) {
									if ((0, w.default)(c, a), i === "reposition") {
										if (c.top > c.bottom) {
											var h = c.top;
											c.top = c.bottom, c.bottom = h;
										}
										if (c.left > c.right) {
											var d = c.left;
											c.left = c.right, c.right = d;
										}
									}
								} else {
									c.top = Math.min(a.top, u.bottom), c.bottom =
										Math.max(a.bottom, u.top), c.left =
										Math.min(a.left, u.right), c.right =
										Math.max(a.right, u.left);
								}
								for (
									var g
									in
									c.width = c.right - c.left, c.height = c.bottom - c.top, c
								) f[g] = c[g] - p[g];
								o.edges = r.prepared.edges, o.rect = c, o.deltaRect = f;
							}
						})(e), Ln(e);
					},
					"interactions:action-end": function (e) {
						var t = e.iEvent, n = e.interaction;
						if (n.prepared.name === "resize" && n.prepared.edges) {
							var r = t;
							r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect =
								n._rects.delta;
						}
					},
					"auto-start:check": function (e) {
						var t = e.interaction,
							n = e.interactable,
							r = e.element,
							o = e.rect,
							i = e.buttons;
						if (o) {
							var s = (0, w.default)({}, t.coords.cur.page),
								a = n.options.resize;
							if (
								a &&
								a.enabled &&
								(
									!t.pointerIsDown ||
										!/mouse|pointer/.test(t.pointerType) ||
										(i & a.mouseButtons) != 0
								)
							) {
								if (v.default.object(a.edges)) {
									var l = { left: !1, right: !1, top: !1, bottom: !1 };
									for (var u in l) l[u] =
										io(
											u,
											a.edges[u],
											s,
											t._latestPointer.eventTarget,
											r,
											o,
											a.margin || de.defaultMargin,
										);
									l.left = l.left && !l.right, l.top = l.top && !l.bottom, (
										l.left || l.right || l.top || l.bottom
									) && (e.action = { name: "resize", edges: l });
								} else {
									var c = a.axis !== "y" && s.x > (o.right - de.defaultMargin),
										f = a.axis !== "x" && s.y > (o.bottom - de.defaultMargin);
									(c || f) && (
										e.action =
											{ name: "resize", axes: (c ? "x" : "") + (f ? "y" : "") }
									);
								}
								return !e.action && void 0;
							}
						}
					},
				},
				defaults: {
					square: !1,
					preserveAspectRatio: !1,
					axis: "xy",
					margin: NaN,
					edges: null,
					invert: "none",
				},
				cursors: null,
				getCursor: function (e) {
					var t = e.edges, n = e.axis, r = e.name, o = de.cursors, i = null;
					if (n) {
						i = o[r + n];
					} else if (t) {
						for (
							var s = "", a = ["top", "bottom", "left", "right"], l = 0;
							l < a.length;
							l++
						) {
							var u = a[l];
							t[u] && (s += u);
						}
						i = o[s];
					}
					return i;
				},
				defaultMargin: null,
			},
				ao = de;
			ht.default = ao;
			var gt = {};
			Object.defineProperty(gt, "__esModule", { value: !0 }), gt.default =
				void 0;
			var so = {
				id: "actions",
				install: function (e) {
					e.usePlugin(vt.default), e.usePlugin(ht.default), e.usePlugin(
						me.default,
					), e.usePlugin(pt.default);
				},
			};
			gt.default = so;
			var se = {};
			Object.defineProperty(se, "__esModule", { value: !0 }), se.default =
				void 0;
			var pe,
				Se,
				Un = 0,
				lo = {
					request: function (e) {
						return pe(e);
					},
					cancel: function (e) {
						return Se(e);
					},
					init: function (e) {
						if (pe = e.requestAnimationFrame, Se = e.cancelAnimationFrame, !pe) {
							for (
								var t = ["ms", "moz", "webkit", "o"], n = 0;
								n < t.length;
								n++
							) {
								var r = t[n];
								pe = e["".concat(r, "RequestAnimationFrame")], Se =
									e["".concat(r, "CancelAnimationFrame")] || e["".concat(
										r,
										"CancelRequestAnimationFrame",
									)];
							}
						}
						pe = pe && pe.bind(e), Se = Se && Se.bind(e), pe || (
							pe =
								function (o) {
									var i = Date.now(),
										s = Math.max(0, 16 - (i - Un)),
										a = e.setTimeout(
											function () {
												o(i + s);
											},
											s,
										);
									return (Un = i + s, a);
								}, Se =
								function (o) {
									return clearTimeout(o);
								}
						);
					},
				};
			se.default = lo;
			var _e = {};
			Object.defineProperty(_e, "__esModule", { value: !0 }), _e.getContainer =
				yt, _e.getScroll = Ke, _e.getScrollSize =
				function (e) {
					return (
						v.default.window(e) && (e = window.document.body), {
							x: e.scrollWidth,
							y: e.scrollHeight,
						}
					);
				}, _e.getScrollSizeDelta =
				function (e, t) {
					var n = e.interaction,
						r = e.element,
						o = n && n.interactable.options[n.prepared.name].autoScroll;
					if (!o || !o.enabled) {
						return (t(), { x: 0, y: 0 });
					}
					var i = yt(o.container, n.interactable, r), s = Ke(i);
					t();
					var a = Ke(i);
					return { x: a.x - s.x, y: a.y - s.y };
				}, _e.default = void 0;
			var E = {
				defaults: { enabled: !1, margin: 60, container: null, speed: 300 },
				now: Date.now,
				interaction: null,
				i: 0,
				x: 0,
				y: 0,
				isScrolling: !1,
				prevTime: 0,
				margin: 0,
				speed: 0,
				start: function (e) {
					E.isScrolling = !0, se.default.cancel(E.i), e.autoScroll = E, E.interaction =
						e, E.prevTime = E.now(), E.i = se.default.request(E.scroll);
				},
				stop: function () {
					E.isScrolling = !1, E.interaction && (E.interaction.autoScroll = null), se.default.cancel(
						E.i,
					);
				},
				scroll: function () {
					var e = E.interaction,
						t = e.interactable,
						n = e.element,
						r = e.prepared.name,
						o = t.options[r].autoScroll,
						i = yt(o.container, t, n),
						s = E.now(),
						a = (s - E.prevTime) / 1e3,
						l = o.speed * a;
					if (l >= 1) {
						var u = { x: E.x * l, y: E.y * l };
						if (u.x || u.y) {
							var c = Ke(i);
							v.default.window(i) ? i.scrollBy(u.x, u.y) : i && (
								i.scrollLeft += u.x, i.scrollTop += u.y
							);
							var f = Ke(i), p = { x: f.x - c.x, y: f.y - c.y };
							(p.x || p.y) && t.fire({
								type: "autoscroll",
								target: n,
								interactable: t,
								delta: p,
								interaction: e,
								container: i,
							});
						}
						E.prevTime = s;
					}
					E.isScrolling && (
						se.default.cancel(E.i), E.i = se.default.request(E.scroll)
					);
				},
				check: function (e, t) {
					var n;
					return (n = e.options[t].autoScroll) == null ? void 0 : n.enabled;
				},
				onInteractionMove: function (e) {
					var t = e.interaction, n = e.pointer;
					if (t.interacting() && E.check(t.interactable, t.prepared.name)) {
						if (t.simulation) {
							E.x = E.y = 0;
						} else {
							var r,
								o,
								i,
								s,
								a = t.interactable,
								l = t.element,
								u = t.prepared.name,
								c = a.options[u].autoScroll,
								f = yt(c.container, a, l);
							if (v.default.window(f)) {
								s = n.clientX < E.margin, r = n.clientY < E.margin, o =
									n.clientX > (f.innerWidth - E.margin), i =
									n.clientY > (f.innerHeight - E.margin);
							} else {
								var p = P.getElementClientRect(f);
								s = n.clientX < (p.left + E.margin), r =
									n.clientY < (p.top + E.margin), o =
									n.clientX > (p.right - E.margin), i =
									n.clientY > (p.bottom - E.margin);
							}
							E.x =
								o
									? 1
									: s
										? -1
										: 0, E.y =
								i
									? 1
									: r
										? -1
										: 0, E.isScrolling || (
								E.margin = c.margin, E.speed = c.speed, E.start(t)
							);
						}
					}
				},
			};
			function yt(e, t, n) {
				return (v.default.string(e) ? (0, R.getStringOptionResult)(e, t, n) : e) || (
					0, _.getWindow
				)(n);
			}
			function Ke(e) {
				return (
					v.default.window(e) && (e = window.document.body), {
						x: e.scrollLeft,
						y: e.scrollTop,
					}
				);
			}
			var uo = {
				id: "auto-scroll",
				install: function (e) {
					var t = e.defaults, n = e.actions;
					e.autoScroll = E, E.now =
						function () {
							return e.now();
						}, n.phaselessTypes.autoscroll = !0, t.perAction.autoScroll =
						E.defaults;
				},
				listeners: {
					"interactions:new": function (e) {
						e.interaction.autoScroll = null;
					},
					"interactions:destroy": function (e) {
						e.interaction.autoScroll = null, E.stop(), E.interaction && (
							E.interaction = null
						);
					},
					"interactions:stop": E.stop,
					"interactions:action-move": function (e) {
						return E.onInteractionMove(e);
					},
				},
			};
			_e.default = uo;
			var ee = {};
			Object.defineProperty(ee, "__esModule", { value: !0 }), ee.warnOnce =
				function (e, t) {
					var n = !1;
					return function () {
						return (
							n || (_.window.console.warn(t), n = !0), e.apply(this, arguments)
						);
					};
				}, ee.copyAction =
				function (e, t) {
					return (e.name = t.name, e.axis = t.axis, e.edges = t.edges, e);
				}, ee.sign = void 0, ee.sign =
				function (e) {
					return e >= 0 ? 1 : -1;
				};
			var mt = {};
			function co(e) {
				return v.default.bool(e)
					? (this.options.styleCursor = e, this)
					: e === null
						? (delete this.options.styleCursor, this)
						: this.options.styleCursor;
			}
			function fo(e) {
				return v.default.func(e)
					? (this.options.actionChecker = e, this)
					: e === null
						? (delete this.options.actionChecker, this)
						: this.options.actionChecker;
			}
			Object.defineProperty(mt, "__esModule", { value: !0 }), mt.default =
				void 0;
			var po = {
				id: "auto-start/interactableMethods",
				install: function (e) {
					var t = e.Interactable;
					t.prototype.getAction =
						function (n, r, o, i) {
							var s = function (a, l, u, c, f) {
								var p = a.getRect(c),
									h = {
										action: null,
										interactable: a,
										interaction: u,
										element: c,
										rect: p,
										buttons: l.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[l.button],
									};
								return (f.fire("auto-start:check", h), h.action);
							}(this, r, o, i, e);
							return this.options.actionChecker ? this.options.actionChecker(
								n,
								r,
								s,
								this,
								i,
								o,
							) : s;
						}, t.prototype.ignoreFrom =
						(0, ee.warnOnce)(
							function (n) {
								return this._backCompatOption("ignoreFrom", n);
							},
							"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue}).",
						), t.prototype.allowFrom =
						(0, ee.warnOnce)(
							function (n) {
								return this._backCompatOption("allowFrom", n);
							},
							"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue}).",
						), t.prototype.actionChecker = fo, t.prototype.styleCursor = co;
				},
			};
			mt.default = po;
			var Xe = {};
			function Vn(e, t, n, r, o) {
				return t.testIgnoreAllow(t.options[e.name], n, r) &&
					t.options[e.name].enabled &&
					bt(t, n, e, o) ? e : null;
			}
			function vo(e, t, n, r, o, i, s) {
				for (var a = 0, l = r.length; a < l; a++) {
					var u = r[a], c = o[a], f = u.getAction(t, n, e, c);
					if (f) {
						var p = Vn(f, u, c, i, s);
						if (p) {
							return { action: p, interactable: u, element: c };
						}
					}
				}
				return { action: null, interactable: null, element: null };
			}
			function Nn(e, t, n, r, o) {
				var i = [], s = [], a = r;
				function l(c) {
					i.push(c), s.push(a);
				}
				for (; v.default.element(a); ) {
					i = [], s = [], o.interactables.forEachMatch(a, l);
					var u = vo(e, t, n, i, s, r, o);
					if (u.action && !u.interactable.options[u.action.name].manualStart) {
						return u;
					}
					a = P.parentNode(a);
				}
				return { action: null, interactable: null, element: null };
			}
			function qn(e, t, n) {
				var r = t.action, o = t.interactable, i = t.element;
				r = r || { name: null }, e.interactable = o, e.element = i, (
					0, ee.copyAction
				)(e.prepared, r), e.rect = o && r.name ? o.getRect(i) : null, Gn(e, n), n.fire(
					"autoStart:prepared",
					{ interaction: e },
				);
			}
			function bt(e, t, n, r) {
				var o = e.options,
					i = o[n.name].max,
					s = o[n.name].maxPerElement,
					a = r.autoStart.maxInteractions,
					l = 0,
					u = 0,
					c = 0;
				if (!(i && s && a)) {
					return !1;
				}
				for (var f = 0; f < r.interactions.list.length; f++) {
					var p = r.interactions.list[f], h = p.prepared.name;
					if (
						p.interacting() && (
							++l >= a || (
								p.interactable === e && (
									(u += h === n.name ? 1 : 0) >= i || (
										p.element === t && (c++, h === n.name && c >= s)
									)
								)
							)
						)
					) {
						return !1;
					}
				}
				return a > 0;
			}
			function $n(e, t) {
				return v.default.number(e) ? (t.autoStart.maxInteractions = e, this) : t.autoStart.maxInteractions;
			}
			function en(e, t, n) {
				var r = n.autoStart.cursorElement;
				r && r !== e && (r.style.cursor = ""), e.ownerDocument.documentElement.style.cursor =
					t, e.style.cursor = t, n.autoStart.cursorElement = t ? e : null;
			}
			function Gn(e, t) {
				var n = e.interactable, r = e.element, o = e.prepared;
				if (e.pointerType === "mouse" && n && n.options.styleCursor) {
					var i = "";
					if (o.name) {
						var s = n.options[o.name].cursorChecker;
						i =
							v.default.func(s) ? s(o, n, r, e._interacting) : t.actions.map[o.name].getCursor(
								o,
							);
					}
					en(e.element, i || "", t);
				} else {
					t.autoStart.cursorElement && en(t.autoStart.cursorElement, "", t);
				}
			}
			Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.default =
				void 0;
			var ho = {
				id: "auto-start/base",
				before: ["actions"],
				install: function (e) {
					var t = e.interactStatic, n = e.defaults;
					e.usePlugin(mt.default), n.base.actionChecker = null, n.base.styleCursor =
						!0, (0, w.default)(
						n.perAction,
						{
							manualStart: !1,
							max: 1 / 0,
							maxPerElement: 1,
							allowFrom: null,
							ignoreFrom: null,
							mouseButtons: 1,
						},
					), t.maxInteractions =
						function (r) {
							return $n(r, e);
						}, e.autoStart =
						{
							maxInteractions: 1 / 0,
							withinInteractionLimit: bt,
							cursorElement: null,
						};
				},
				listeners: {
					"interactions:down": function (e, t) {
						var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget;
						n.interacting() || qn(n, Nn(n, r, o, i, t), t);
					},
					"interactions:move": function (e, t) {
						(
							function (n, r) {
								var o = n.interaction,
									i = n.pointer,
									s = n.event,
									a = n.eventTarget;
								o.pointerType !== "mouse" ||
									o.pointerIsDown ||
									o.interacting() ||
									qn(o, Nn(o, i, s, a, r), r);
							}
						)(e, t), function (n, r) {
							var o = n.interaction;
							if (
								o.pointerIsDown &&
								!o.interacting() &&
								o.pointerWasMoved &&
								o.prepared.name
							) {
								r.fire("autoStart:before-start", n);
								var i = o.interactable, s = o.prepared.name;
								s &&
									i &&
									(
										i.options[s].manualStart || !bt(i, o.element, o.prepared, r) ? o.stop() : (
											o.start(o.prepared, i, o.element), Gn(o, r)
										)
									);
							}
						}(e, t);
					},
					"interactions:stop": function (e, t) {
						var n = e.interaction, r = n.interactable;
						r && r.options.styleCursor && en(n.element, "", t);
					},
				},
				maxInteractions: $n,
				withinInteractionLimit: bt,
				validateAction: Vn,
			};
			Xe.default = ho;
			var xt = {};
			Object.defineProperty(xt, "__esModule", { value: !0 }), xt.default =
				void 0;
			var go = {
				id: "auto-start/dragAxis",
				listeners: {
					"autoStart:before-start": function (e, t) {
						var n = e.interaction, r = e.eventTarget, o = e.dx, i = e.dy;
						if (n.prepared.name === "drag") {
							var s = Math.abs(o),
								a = Math.abs(i),
								l = n.interactable.options.drag,
								u = l.startAxis,
								c = s > a
									? "x"
									: s < a
										? "y"
										: "xy";
							if (
								n.prepared.axis = l.lockAxis === "start" ? c[0] : l.lockAxis, c !== "xy" &&
									u !== "xy" &&
									u !== c
							) {
								n.prepared.name = null;
								for (
									var f = r,
										p = function (d) {
											if (d !== n.interactable) {
												var g = n.interactable.options.drag;
												if (!g.manualStart && d.testIgnoreAllow(g, f, r)) {
													var m = d.getAction(n.downPointer, n.downEvent, n, f);
													if (
														m &&
														m.name === "drag" &&
														function (y, b) {
															if (!b) {
																return !1;
															}
															var O = b.options.drag.startAxis;
															return y === "xy" || O === "xy" || O === y;
														}(c, d) &&
														Xe.default.validateAction(m, d, f, r, t)
													) {
														return d;
													}
												}
											}
										};
									v.default.element(f);
								) {
									var h = t.interactables.forEachMatch(f, p);
									if (h) {
										n.prepared.name = "drag", n.interactable = h, n.element = f;
										break;
									}
									f = (0, P.parentNode)(f);
								}
							}
						}
					},
				},
			};
			xt.default = go;
			var wt = {};
			function tn(e) {
				var t = e.prepared && e.prepared.name;
				if (!t) {
					return null;
				}
				var n = e.interactable.options;
				return n[t].hold || n[t].delay;
			}
			Object.defineProperty(wt, "__esModule", { value: !0 }), wt.default =
				void 0;
			var yo = {
				id: "auto-start/hold",
				install: function (e) {
					var t = e.defaults;
					e.usePlugin(Xe.default), t.perAction.hold = 0, t.perAction.delay = 0;
				},
				listeners: {
					"interactions:new": function (e) {
						e.interaction.autoStartHoldTimer = null;
					},
					"autoStart:prepared": function (e) {
						var t = e.interaction, n = tn(t);
						n > 0 && (
							t.autoStartHoldTimer =
								setTimeout(
									function () {
										t.start(t.prepared, t.interactable, t.element);
									},
									n,
								)
						);
					},
					"interactions:move": function (e) {
						var t = e.interaction, n = e.duplicate;
						t.autoStartHoldTimer &&
							t.pointerWasMoved &&
							!n &&
							(clearTimeout(t.autoStartHoldTimer), t.autoStartHoldTimer = null);
					},
					"autoStart:before-start": function (e) {
						var t = e.interaction;
						tn(t) > 0 && (t.prepared.name = null);
					},
				},
				getHoldDuration: tn,
			};
			wt.default = yo;
			var _t = {};
			Object.defineProperty(_t, "__esModule", { value: !0 }), _t.default =
				void 0;
			var mo = {
				id: "auto-start",
				install: function (e) {
					e.usePlugin(Xe.default), e.usePlugin(wt.default), e.usePlugin(
						xt.default,
					);
				},
			};
			_t.default = mo;
			var Ye = {};
			function bo(e) {
				return /^(always|never|auto)$/.test(e)
					? (this.options.preventDefault = e, this)
					: v.default.bool(e)
						? (this.options.preventDefault = e ? "always" : "never", this)
						: this.options.preventDefault;
			}
			function xo(e) {
				var t = e.interaction, n = e.event;
				t.interactable && t.interactable.checkAndPreventDefault(n);
			}
			function Hn(e) {
				var t = e.Interactable;
				t.prototype.preventDefault = bo, t.prototype.checkAndPreventDefault =
					function (n) {
						return function (r, o, i) {
							var s = r.options.preventDefault;
							if (s !== "never") {
								if (s !== "always") {
									if (
										o.events.supportsPassive && /^touch(start|move)$/.test(
											i.type,
										)
									) {
										var a = (0, _.getWindow)(i.target).document,
											l = o.getDocOptions(a);
										if (!l || !l.events || l.events.passive !== !1) {
											return;
										}
									}
									/^(mouse|pointer|touch)*(down|start)/i.test(i.type) ||
										(
											v.default.element(i.target) && (0, P.matchesSelector)(
												i.target,
												"input,select,textarea,[contenteditable=true],[contenteditable=true] *",
											)
										) ||
										i.preventDefault();
								} else {
									i.preventDefault();
								}
							}
						}(this, e, n);
					}, e.interactions.docEvents.push({
					type: "dragstart",
					listener: function (n) {
						for (var r = 0; r < e.interactions.list.length; r++) {
							var o = e.interactions.list[r];
							if (
								o.element && (
									o.element === n.target || (0, P.nodeContains)(
										o.element,
										n.target,
									)
								)
							) {
								return void o.interactable.checkAndPreventDefault(n);
							}
						}
					},
				});
			}
			Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.install = Hn, Ye.default =
				void 0;
			var wo = {
				id: "core/interactablePreventDefault",
				install: Hn,
				listeners: ["down", "move", "up", "cancel"].reduce(
					function (e, t) {
						return (e["interactions:".concat(t)] = xo, e);
					},
					{},
				),
			};
			Ye.default = wo;
			var nn = {};
			Object.defineProperty(nn, "__esModule", { value: !0 }), nn.default =
				void 0, nn.default = {};
			var Ze, rn = {};
			Object.defineProperty(rn, "__esModule", { value: !0 }), rn.default =
				void 0, function (e) {
				e.touchAction = "touchAction", e.boxSizing = "boxSizing", e.noListeners =
					"noListeners";
			}(Ze || (Ze = {})), Ze.touchAction, Ze.boxSizing, Ze.noListeners;
			var _o = { id: "dev-tools", install: function () {} };
			rn.default = _o;
			var Te = {};
			Object.defineProperty(Te, "__esModule", { value: !0 }), Te.default =
				function e(t) {
					var n = {};
					for (var r in t) {
						var o = t[r];
						v.default.plainObject(o)
							? n[r] = e(o)
							: v.default.array(o)
								? n[r] = D.from(o)
								: n[r] = o;
					}
					return n;
				};
			var Me = {};
			function Kn(e, t) {
				return function (n) {
					if (Array.isArray(n)) {
						return n;
					}
				}(e) ||
				function (n, r) {
					if (typeof Symbol < "u" && (Symbol.iterator in Object(n))) {
						var o = [], i = !0, s = !1, a = void 0;
						try {
							for (
								var l, u = n[Symbol.iterator]();
								!(i = (l = u.next()).done) && (
									o.push(l.value), !r || o.length !== r
								);
								i = !0
							);
						} catch (c) {
							s = !0, a = c;
						} finally {
							try {
								i || u.return == null || u.return();
							} finally {
								if (s) {
									throw a;
								}
							}
						}
						return o;
					}
				}(e, t) ||
				function (n, r) {
					if (n) {
						if (typeof n == "string") {
							return Zn(n, r);
						}
						var o = Object.prototype.toString.call(n).slice(8, -1);
						return (
							o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set"
								? Array.from(n)
								: o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
									o,
								)
									? Zn(n, r)
									: void 0
						);
					}
				}(e, t) ||
				function () {
					throw new TypeError(
						`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`,
					);
				}();
			}
			function Zn(e, t) {
				(t == null || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function Po(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function je(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(Me, "__esModule", { value: !0 }), Me.getRectOffset =
				Jn, Me.default = void 0;
			var Oo = function () {
				function e(r) {
					(
						function (o, i) {
							if (!(o instanceof i)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), je(this, "states", []), je(
						this,
						"startOffset",
						{ left: 0, right: 0, top: 0, bottom: 0 },
					), je(this, "startDelta", void 0), je(this, "result", void 0), je(
						this,
						"endResult",
						void 0,
					), je(this, "edges", void 0), je(this, "interaction", void 0), this.interaction =
						r, this.result = Pt();
				}
				var t, n;
				return (
					t = e, (
						n =
							[
								{
									key: "start",
									value: function (r, o) {
										var i = r.phase,
											s = this.interaction,
											a = function (u) {
												var c = u.interactable.options[u.prepared.name],
													f = c.modifiers;
												return f && f.length ? f : [
													"snap",
													"snapSize",
													"snapEdges",
													"restrict",
													"restrictEdges",
													"restrictSize",
												]
													.map(function (p) {
														var h = c[p];
														return h &&
														h.enabled &&
														{ options: h, methods: h._methods };
													})
													.filter(function (p) {
														return !!p;
													});
											}(s);
										this.prepareStates(a), this.edges =
											(0, w.default)({}, s.edges), this.startOffset =
											Jn(s.rect, o), this.startDelta = { x: 0, y: 0 };
										var l = this.fillArg({ phase: i, pageCoords: o, preEnd: !1 });
										return (
											this.result = Pt(), this.startAll(l), this.result =
												this.setAll(l)
										);
									},
								},
								{
									key: "fillArg",
									value: function (r) {
										var o = this.interaction;
										return (
											r.interaction = o, r.interactable = o.interactable, r.element =
												o.element, r.rect = r.rect || o.rect, r.edges =
												this.edges, r.startOffset = this.startOffset, r
										);
									},
								},
								{
									key: "startAll",
									value: function (r) {
										for (var o = 0; o < this.states.length; o++) {
											var i = this.states[o];
											i.methods.start && (r.state = i, i.methods.start(r));
										}
									},
								},
								{
									key: "setAll",
									value: function (r) {
										var o = r.phase,
											i = r.preEnd,
											s = r.skipModifiers,
											a = r.rect;
										r.coords = (0, w.default)({}, r.pageCoords), r.rect =
											(0, w.default)({}, a);
										for (
											var l = s ? this.states.slice(s) : this.states,
												u = Pt(r.coords, r.rect),
												c = 0;
											c < l.length;
											c++
										) {
											var f,
												p = l[c],
												h = p.options,
												d = (0, w.default)({}, r.coords),
												g = null;
											(f = p.methods) != null &&
												f.set &&
												this.shouldDo(h, i, o) &&
												(
													r.state = p, g = p.methods.set(r), R.addEdges(
														this.interaction.edges,
														r.rect,
														{ x: r.coords.x - d.x, y: r.coords.y - d.y },
													)
												), u.eventProps.push(g);
										}
										u.delta.x = r.coords.x - r.pageCoords.x, u.delta.y =
											r.coords.y - r.pageCoords.y, u.rectDelta.left =
											r.rect.left - a.left, u.rectDelta.right =
											r.rect.right - a.right, u.rectDelta.top =
											r.rect.top - a.top, u.rectDelta.bottom =
											r.rect.bottom - a.bottom;
										var m = this.result.coords, y = this.result.rect;
										if (m && y) {
											var b =
												u.rect.left !== y.left ||
												u.rect.right !== y.right ||
												u.rect.top !== y.top ||
												u.rect.bottom !== y.bottom;
											u.changed = b || m.x !== u.coords.x || m.y !== u.coords.y;
										}
										return u;
									},
								},
								{
									key: "applyToInteraction",
									value: function (r) {
										var o = this.interaction,
											i = r.phase,
											s = o.coords.cur,
											a = o.coords.start,
											l = this.result,
											u = this.startDelta,
											c = l.delta;
										i === "start" && (0, w.default)(this.startDelta, l.delta);
										for (var f = 0; f < [[a, u], [s, c]].length; f++) {
											var p = Kn([[a, u], [s, c]][f], 2), h = p[0], d = p[1];
											h.page.x += d.x, h.page.y += d.y, h.client.x += d.x, h.client.y +=
												d.y;
										}
										var g = this.result.rectDelta, m = r.rect || o.rect;
										m.left += g.left, m.right += g.right, m.top += g.top, m.bottom +=
											g.bottom, m.width = m.right - m.left, m.height =
											m.bottom - m.top;
									},
								},
								{
									key: "setAndApply",
									value: function (r) {
										var o = this.interaction,
											i = r.phase,
											s = r.preEnd,
											a = r.skipModifiers,
											l = this.setAll(
												this.fillArg({
													preEnd: s,
													phase: i,
													pageCoords: r.modifiedCoords || o.coords.cur.page,
												}),
											);
										if (
											this.result = l, !l.changed &&
												(!a || a < this.states.length) &&
												o.interacting()
										) {
											return !1;
										}
										if (r.modifiedCoords) {
											var u = o.coords.cur.page,
												c = {
													x: r.modifiedCoords.x - u.x,
													y: r.modifiedCoords.y - u.y,
												};
											l.coords.x += c.x, l.coords.y += c.y, l.delta.x += c.x, l.delta.y +=
												c.y;
										}
										this.applyToInteraction(r);
									},
								},
								{
									key: "beforeEnd",
									value: function (r) {
										var o = r.interaction, i = r.event, s = this.states;
										if (s && s.length) {
											for (var a = !1, l = 0; l < s.length; l++) {
												var u = s[l];
												r.state = u;
												var c = u.options,
													f = u.methods,
													p = f.beforeEnd && f.beforeEnd(r);
												if (p) {
													return (this.endResult = p, !1);
												}
												a = a || (!a && this.shouldDo(c, !0, r.phase, !0));
											}
											a && o.move({ event: i, preEnd: !0 });
										}
									},
								},
								{
									key: "stop",
									value: function (r) {
										var o = r.interaction;
										if (this.states && this.states.length) {
											var i = (0, w.default)(
												{
													states: this.states,
													interactable: o.interactable,
													element: o.element,
													rect: null,
												},
												r,
											);
											this.fillArg(i);
											for (var s = 0; s < this.states.length; s++) {
												var a = this.states[s];
												i.state = a, a.methods.stop && a.methods.stop(i);
											}
											this.states = null, this.endResult = null;
										}
									},
								},
								{
									key: "prepareStates",
									value: function (r) {
										this.states = [];
										for (var o = 0; o < r.length; o++) {
											var i = r[o], s = i.options, a = i.methods, l = i.name;
											this.states.push({
												options: s,
												methods: a,
												index: o,
												name: l,
											});
										}
										return this.states;
									},
								},
								{
									key: "restoreInteractionCoords",
									value: function (r) {
										var o = r.interaction,
											i = o.coords,
											s = o.rect,
											a = o.modification;
										if (a.result) {
											for (
												var l = a.startDelta,
													u = a.result,
													c = u.delta,
													f = u.rectDelta,
													p = [[i.start, l], [i.cur, c]],
													h = 0;
												h < p.length;
												h++
											) {
												var d = Kn(p[h], 2), g = d[0], m = d[1];
												g.page.x -= m.x, g.page.y -= m.y, g.client.x -= m.x, g.client.y -=
													m.y;
											}
											s.left -= f.left, s.right -= f.right, s.top -= f.top, s.bottom -=
												f.bottom;
										}
									},
								},
								{
									key: "shouldDo",
									value: function (r, o, i, s) {
										return !(
											!r ||
												r.enabled === !1 ||
												(s && !r.endOnly) ||
												(r.endOnly && !o) ||
												(i === "start" && !r.setStart)
										);
									},
								},
								{
									key: "copyFrom",
									value: function (r) {
										this.startOffset = r.startOffset, this.startDelta =
											r.startDelta, this.edges = r.edges, this.states =
											r.states.map(function (o) {
												return (0, Te.default)(o);
											}), this.result =
											Pt(
												(0, w.default)({}, r.result.coords),
												(0, w.default)({}, r.result.rect),
											);
									},
								},
								{
									key: "destroy",
									value: function () {
										for (var r in this) this[r] = null;
									},
								},
							]
					) && Po(t.prototype, n), e
				);
			}();
			function Pt(e, t) {
				return {
					rect: t,
					coords: e,
					delta: { x: 0, y: 0 },
					rectDelta: { left: 0, right: 0, top: 0, bottom: 0 },
					eventProps: [],
					changed: !0,
				};
			}
			function Jn(e, t) {
				return e ? {
					left: t.x - e.left,
					top: t.y - e.top,
					right: e.right - t.x,
					bottom: e.bottom - t.y,
				} : { left: 0, top: 0, right: 0, bottom: 0 };
			}
			Me.default = Oo;
			var V = {};
			function Ot(e) {
				var t = e.iEvent, n = e.interaction.modification.result;
				n && (t.modifiers = n.eventProps);
			}
			Object.defineProperty(V, "__esModule", { value: !0 }), V.makeModifier =
				function (e, t) {
					var n = e.defaults,
						r = {
							start: e.start,
							set: e.set,
							beforeEnd: e.beforeEnd,
							stop: e.stop,
						},
						o = function (i) {
							var s = i || {};
							for (var a in s.enabled = s.enabled !== !1, n) (a in s) || (
								s[a] = n[a]
							);
							var l = {
								options: s,
								methods: r,
								name: t,
								enable: function () {
									return (s.enabled = !0, l);
								},
								disable: function () {
									return (s.enabled = !1, l);
								},
							};
							return l;
						};
					return (
						t && typeof t == "string" && (o._defaults = n, o._methods = r), o
					);
				}, V.addEventModifiers = Ot, V.default = void 0;
			var Eo = {
				id: "modifiers/base",
				before: ["actions"],
				install: function (e) {
					e.defaults.perAction.modifiers = [];
				},
				listeners: {
					"interactions:new": function (e) {
						var t = e.interaction;
						t.modification = new Me.default(t);
					},
					"interactions:before-action-start": function (e) {
						var t = e.interaction.modification;
						t.start(e, e.interaction.coords.start.page), e.interaction.edges =
							t.edges, t.applyToInteraction(e);
					},
					"interactions:before-action-move": function (e) {
						return e.interaction.modification.setAndApply(e);
					},
					"interactions:before-action-end": function (e) {
						return e.interaction.modification.beforeEnd(e);
					},
					"interactions:action-start": Ot,
					"interactions:action-move": Ot,
					"interactions:action-end": Ot,
					"interactions:after-action-start": function (e) {
						return e.interaction.modification.restoreInteractionCoords(e);
					},
					"interactions:after-action-move": function (e) {
						return e.interaction.modification.restoreInteractionCoords(e);
					},
					"interactions:stop": function (e) {
						return e.interaction.modification.stop(e);
					},
				},
			};
			V.default = Eo;
			var Je = {};
			Object.defineProperty(Je, "__esModule", { value: !0 }), Je.defaults =
				void 0, Je.defaults =
				{
					base: { preventDefault: "auto", deltaSource: "page" },
					perAction: { enabled: !1, origin: { x: 0, y: 0 } },
					actions: {},
				};
			var Qe = {};
			function Qn(e) {
				return (
					Qn =
						typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (
							t,
						) {
							return typeof t;
						} : function (t) {
							return t &&
								typeof Symbol == "function" &&
								t.constructor === Symbol &&
								t !== Symbol.prototype ? "symbol" : typeof t;
						}
				)(e);
			}
			function So(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function er(e, t) {
				return (
					er =
						Object.setPrototypeOf || function (n, r) {
							return (n.__proto__ = r, n);
						}
				)(e, t);
			}
			function To(e, t) {
				return !t || (Qn(t) !== "object" && typeof t != "function") ? j(e) : t;
			}
			function j(e) {
				if (e === void 0) {
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called",
					);
				}
				return e;
			}
			function on(e) {
				return (
					on =
						Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
						}
				)(e);
			}
			function k(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.InteractEvent =
				void 0;
			var tr = function (e) {
				(
					function (a, l) {
						if (typeof l != "function" && l !== null) {
							throw new TypeError(
								"Super expression must either be null or a function",
							);
						}
						a.prototype =
							Object.create(
								l && l.prototype,
								{ constructor: { value: a, writable: !0, configurable: !0 } },
							), l && er(a, l);
					}
				)(s, e);
				var t,
					n,
					r,
					o,
					i = (
						r = s, o =
							function () {
								if (
									typeof Reflect > "u" ||
									!Reflect.construct ||
									Reflect.construct.sham
								) {
									return !1;
								}
								if (typeof Proxy == "function") {
									return !0;
								}
								try {
									return (
										Boolean.prototype.valueOf.call(
											Reflect.construct(Boolean, [], function () {}),
										), !0
									);
								} catch {
									return !1;
								}
							}(), function () {
							var a, l = on(r);
							if (o) {
								var u = on(this).constructor;
								a = Reflect.construct(l, arguments, u);
							} else {
								a = l.apply(this, arguments);
							}
							return To(this, a);
						}
					);
				function s(a, l, u, c, f, p, h) {
					var d;
					(
						function (C, T) {
							if (!(C instanceof T)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, s), k(j(d = i.call(this, a)), "target", void 0), k(
						j(d),
						"currentTarget",
						void 0,
					), k(j(d), "relatedTarget", null), k(j(d), "screenX", void 0), k(
						j(d),
						"screenY",
						void 0,
					), k(j(d), "button", void 0), k(j(d), "buttons", void 0), k(
						j(d),
						"ctrlKey",
						void 0,
					), k(j(d), "shiftKey", void 0), k(j(d), "altKey", void 0), k(
						j(d),
						"metaKey",
						void 0,
					), k(j(d), "page", void 0), k(j(d), "client", void 0), k(
						j(d),
						"delta",
						void 0,
					), k(j(d), "rect", void 0), k(j(d), "x0", void 0), k(
						j(d),
						"y0",
						void 0,
					), k(j(d), "t0", void 0), k(j(d), "dt", void 0), k(
						j(d),
						"duration",
						void 0,
					), k(j(d), "clientX0", void 0), k(j(d), "clientY0", void 0), k(
						j(d),
						"velocity",
						void 0,
					), k(j(d), "speed", void 0), k(j(d), "swipe", void 0), k(
						j(d),
						"timeStamp",
						void 0,
					), k(j(d), "axes", void 0), k(j(d), "preEnd", void 0), f =
						f || a.element;
					var g = a.interactable,
						m = ((g && g.options) || Je.defaults).deltaSource,
						y = (0, Ee.default)(g, f, u),
						b = c === "start",
						O = c === "end",
						S = b ? j(d) : a.prevEvent,
						M = b
							? a.coords.start
							: O
								? {
									page: S.page,
									client: S.client,
									timeStamp: a.coords.cur.timeStamp,
								}
								: a.coords.cur;
					return (
						d.page = (0, w.default)({}, M.page), d.client =
							(0, w.default)({}, M.client), d.rect = (0, w.default)({}, a.rect), d.timeStamp =
							M.timeStamp, O || (
							d.page.x -= y.x, d.page.y -= y.y, d.client.x -= y.x, d.client.y -=
								y.y
						), d.ctrlKey = l.ctrlKey, d.altKey = l.altKey, d.shiftKey =
							l.shiftKey, d.metaKey = l.metaKey, d.button = l.button, d.buttons =
							l.buttons, d.target = f, d.currentTarget = f, d.preEnd = p, d.type =
							h || u + (c || ""), d.interactable = g, d.t0 =
							b ? a.pointers[a.pointers.length - 1].downTime : S.t0, d.x0 =
							a.coords.start.page.x - y.x, d.y0 = a.coords.start.page.y - y.y, d.clientX0 =
							a.coords.start.client.x - y.x, d.clientY0 =
							a.coords.start.client.y - y.y, d.delta =
							b || O ? { x: 0, y: 0 } : {
								x: d[m].x - S[m].x,
								y: d[m].y - S[m].y,
							}, d.dt = a.coords.delta.timeStamp, d.duration =
							d.timeStamp - d.t0, d.velocity =
							(0, w.default)({}, a.coords.velocity[m]), d.speed =
							(0, be.default)(d.velocity.x, d.velocity.y), d.swipe =
							O || c === "inertiastart" ? d.getSwipe() : null, d
					);
				}
				return (
					t = s, (
						n =
							[
								{
									key: "getSwipe",
									value: function () {
										var a = this._interaction;
										if (
											a.prevEvent.speed < 600 || (
												this.timeStamp - a.prevEvent.timeStamp
											) > 150
										) {
											return null;
										}
										var l = 180 * Math.atan2(
											a.prevEvent.velocityY,
											a.prevEvent.velocityX,
										) / Math.PI;
										l < 0 && (l += 360);
										var u = 112.5 <= l && l < 247.5, c = 202.5 <= l && l < 337.5;
										return {
											up: c,
											down: !c && 22.5 <= l && l < 157.5,
											left: u,
											right: !u && (292.5 <= l || l < 67.5),
											angle: l,
											speed: a.prevEvent.speed,
											velocity: {
												x: a.prevEvent.velocityX,
												y: a.prevEvent.velocityY,
											},
										};
									},
								},
								{ key: "preventDefault", value: function () {} },
								{
									key: "stopImmediatePropagation",
									value: function () {
										this.immediatePropagationStopped =
											this.propagationStopped = !0;
									},
								},
								{
									key: "stopPropagation",
									value: function () {
										this.propagationStopped = !0;
									},
								},
							]
					) && So(t.prototype, n), s
				);
			}(Fe.BaseEvent);
			Qe.InteractEvent = tr, Object.defineProperties(
				tr.prototype,
				{
					pageX: {
						get: function () {
							return this.page.x;
						},
						set: function (e) {
							this.page.x = e;
						},
					},
					pageY: {
						get: function () {
							return this.page.y;
						},
						set: function (e) {
							this.page.y = e;
						},
					},
					clientX: {
						get: function () {
							return this.client.x;
						},
						set: function (e) {
							this.client.x = e;
						},
					},
					clientY: {
						get: function () {
							return this.client.y;
						},
						set: function (e) {
							this.client.y = e;
						},
					},
					dx: {
						get: function () {
							return this.delta.x;
						},
						set: function (e) {
							this.delta.x = e;
						},
					},
					dy: {
						get: function () {
							return this.delta.y;
						},
						set: function (e) {
							this.delta.y = e;
						},
					},
					velocityX: {
						get: function () {
							return this.velocity.x;
						},
						set: function (e) {
							this.velocity.x = e;
						},
					},
					velocityY: {
						get: function () {
							return this.velocity.y;
						},
						set: function (e) {
							this.velocity.y = e;
						},
					},
				},
			);
			var et = {};
			function tt(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(et, "__esModule", { value: !0 }), et.PointerInfo =
				void 0, et.PointerInfo =
				function e(t, n, r, o, i) {
					(
						function (s, a) {
							if (!(s instanceof a)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), tt(this, "id", void 0), tt(this, "pointer", void 0), tt(
						this,
						"event",
						void 0,
					), tt(this, "downTime", void 0), tt(this, "downTarget", void 0), this.id =
						t, this.pointer = n, this.event = r, this.downTime = o, this.downTarget =
						i;
				};
			var Et, St, J = {};
			function Mo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function X(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(J, "__esModule", { value: !0 }), Object.defineProperty(
				J,
				"PointerInfo",
				{
					enumerable: !0,
					get: function () {
						return et.PointerInfo;
					},
				},
			), J.default = J.Interaction = J._ProxyMethods = J._ProxyValues = void 0, J._ProxyValues =
				Et, function (e) {
				e.interactable = "", e.element = "", e.prepared = "", e.pointerIsDown =
					"", e.pointerWasMoved = "", e._proxy = "";
			}(Et || (J._ProxyValues = Et = {})), J._ProxyMethods = St, function (e) {
				e.start = "", e.move = "", e.end = "", e.stop = "", e.interacting = "";
			}(St || (J._ProxyMethods = St = {}));
			var jo = 0,
				nr = function () {
					function e(r) {
						var o = this, i = r.pointerType, s = r.scopeFire;
						(
							function (p, h) {
								if (!(p instanceof h)) {
									throw new TypeError("Cannot call a class as a function");
								}
							}
						)(this, e), X(this, "interactable", null), X(this, "element", null), X(
							this,
							"rect",
							void 0,
						), X(this, "_rects", void 0), X(this, "edges", void 0), X(
							this,
							"_scopeFire",
							void 0,
						), X(this, "prepared", { name: null, axis: null, edges: null }), X(
							this,
							"pointerType",
							void 0,
						), X(this, "pointers", []), X(this, "downEvent", null), X(
							this,
							"downPointer",
							{},
						), X(
							this,
							"_latestPointer",
							{ pointer: null, event: null, eventTarget: null },
						), X(this, "prevEvent", null), X(this, "pointerIsDown", !1), X(
							this,
							"pointerWasMoved",
							!1,
						), X(this, "_interacting", !1), X(this, "_ending", !1), X(
							this,
							"_stopped",
							!0,
						), X(this, "_proxy", null), X(this, "simulation", null), X(
							this,
							"doMove",
							(0, ee.warnOnce)(
								function (p) {
									this.move(p);
								},
								"The interaction.doMove() method has been renamed to interaction.move()",
							),
						), X(
							this,
							"coords",
							{
								start: x.newCoords(),
								prev: x.newCoords(),
								cur: x.newCoords(),
								delta: x.newCoords(),
								velocity: x.newCoords(),
							},
						), X(this, "_id", jo++), this._scopeFire = s, this.pointerType = i;
						var a = this;
						this._proxy = {};
						var l = function (p) {
							Object.defineProperty(
								o._proxy,
								p,
								{
									get: function () {
										return a[p];
									},
								},
							);
						};
						for (var u in Et) l(u);
						var c = function (p) {
							Object.defineProperty(
								o._proxy,
								p,
								{
									value: function () {
										return a[p].apply(a, arguments);
									},
								},
							);
						};
						for (var f in St) c(f);
						this._scopeFire("interactions:new", { interaction: this });
					}
					var t, n;
					return (
						t = e, (
							n =
								[
									{
										key: "pointerMoveTolerance",
										get: function () {
											return 1;
										},
									},
									{
										key: "pointerDown",
										value: function (r, o, i) {
											var s = this.updatePointer(r, o, i, !0),
												a = this.pointers[s];
											this._scopeFire(
												"interactions:down",
												{
													pointer: r,
													event: o,
													eventTarget: i,
													pointerIndex: s,
													pointerInfo: a,
													type: "down",
													interaction: this,
												},
											);
										},
									},
									{
										key: "start",
										value: function (r, o, i) {
											return !(
												this.interacting() ||
													!this.pointerIsDown ||
													this.pointers.length < (r.name === "gesture" ? 2 : 1) ||
													!o.options[r.name].enabled
											) && (
												(0, ee.copyAction)(this.prepared, r), this.interactable =
													o, this.element = i, this.rect = o.getRect(i), this.edges =
													this.prepared.edges ? (0, w.default)(
														{},
														this.prepared.edges,
													) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped =
													!1, this._interacting =
													this._doPhase({
														interaction: this,
														event: this.downEvent,
														phase: "start",
													}) && !this._stopped, this._interacting
											);
										},
									},
									{
										key: "pointerMove",
										value: function (r, o, i) {
											this.simulation ||
												(this.modification && this.modification.endResult) ||
												this.updatePointer(r, o, i, !1);
											var s,
												a,
												l =
													this.coords.cur.page.x === this.coords.prev.page.x &&
													this.coords.cur.page.y === this.coords.prev.page.y &&
													this.coords.cur.client.x === this.coords.prev.client.x &&
													this.coords.cur.client.y === this.coords.prev.client.y;
											this.pointerIsDown &&
												!this.pointerWasMoved &&
												(
													s =
														this.coords.cur.client.x - this.coords.start.client.x, a =
														this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved =
														(0, be.default)(s, a) > this.pointerMoveTolerance
												);
											var u = this.getPointerIndex(r),
												c = {
													pointer: r,
													pointerIndex: u,
													pointerInfo: this.pointers[u],
													event: o,
													type: "move",
													eventTarget: i,
													dx: s,
													dy: a,
													duplicate: l,
													interaction: this,
												};
											l || x.setCoordVelocity(
												this.coords.velocity,
												this.coords.delta,
											), this._scopeFire("interactions:move", c), l ||
												this.simulation ||
												(
													this.interacting() && (c.type = null, this.move(c)), this.pointerWasMoved && x.copyCoords(
														this.coords.prev,
														this.coords.cur,
													)
												);
										},
									},
									{
										key: "move",
										value: function (r) {
											(r && r.event) || x.setZeroCoords(this.coords.delta), (
												r =
													(0, w.default)(
														{
															pointer: this._latestPointer.pointer,
															event: this._latestPointer.event,
															eventTarget: this._latestPointer.eventTarget,
															interaction: this,
														},
														r || {},
													)
											).phase = "move", this._doPhase(r);
										},
									},
									{
										key: "pointerUp",
										value: function (r, o, i, s) {
											var a = this.getPointerIndex(r);
											a === -1 && (a = this.updatePointer(r, o, i, !1));
											var l = /cancel$/i.test(o.type) ? "cancel" : "up";
											this._scopeFire(
												"interactions:".concat(l),
												{
													pointer: r,
													pointerIndex: a,
													pointerInfo: this.pointers[a],
													event: o,
													eventTarget: i,
													type: l,
													curEventTarget: s,
													interaction: this,
												},
											), this.simulation || this.end(o), this.removePointer(
												r,
												o,
											);
										},
									},
									{
										key: "documentBlur",
										value: function (r) {
											this.end(r), this._scopeFire(
												"interactions:blur",
												{ event: r, type: "blur", interaction: this },
											);
										},
									},
									{
										key: "end",
										value: function (r) {
											var o;
											this._ending = !0, r = r || this._latestPointer.event, this.interacting() && (
												o =
													this._doPhase({
														event: r,
														interaction: this,
														phase: "end",
													})
											), this._ending = !1, o === !0 && this.stop();
										},
									},
									{
										key: "currentAction",
										value: function () {
											return this._interacting ? this.prepared.name : null;
										},
									},
									{
										key: "interacting",
										value: function () {
											return this._interacting;
										},
									},
									{
										key: "stop",
										value: function () {
											this._scopeFire(
												"interactions:stop",
												{ interaction: this },
											), this.interactable = this.element = null, this._interacting =
												!1, this._stopped = !0, this.prepared.name =
												this.prevEvent = null;
										},
									},
									{
										key: "getPointerIndex",
										value: function (r) {
											var o = x.getPointerId(r);
											return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : D.findIndex(
												this.pointers,
												function (i) {
													return i.id === o;
												},
											);
										},
									},
									{
										key: "getPointerInfo",
										value: function (r) {
											return this.pointers[this.getPointerIndex(r)];
										},
									},
									{
										key: "updatePointer",
										value: function (r, o, i, s) {
											var a = x.getPointerId(r),
												l = this.getPointerIndex(r),
												u = this.pointers[l];
											return (
												s = s !== !1 && (s || /(down|start)$/i.test(o.type)), u ? u.pointer =
													r : (
													u = new et.PointerInfo(a, r, o, null, null), l =
														this.pointers.length, this.pointers.push(u)
												), x.setCoords(
													this.coords.cur,
													this.pointers.map(function (c) {
														return c.pointer;
													}),
													this._now(),
												), x.setCoordDeltas(
													this.coords.delta,
													this.coords.prev,
													this.coords.cur,
												), s && (
													this.pointerIsDown = !0, u.downTime =
														this.coords.cur.timeStamp, u.downTarget = i, x.pointerExtend(
														this.downPointer,
														r,
													), this.interacting() || (
														x.copyCoords(this.coords.start, this.coords.cur), x.copyCoords(
															this.coords.prev,
															this.coords.cur,
														), this.downEvent = o, this.pointerWasMoved = !1
													)
												), this._updateLatestPointer(r, o, i), this._scopeFire(
													"interactions:update-pointer",
													{
														pointer: r,
														event: o,
														eventTarget: i,
														down: s,
														pointerInfo: u,
														pointerIndex: l,
														interaction: this,
													},
												), l
											);
										},
									},
									{
										key: "removePointer",
										value: function (r, o) {
											var i = this.getPointerIndex(r);
											if (i !== -1) {
												var s = this.pointers[i];
												this._scopeFire(
													"interactions:remove-pointer",
													{
														pointer: r,
														event: o,
														eventTarget: null,
														pointerIndex: i,
														pointerInfo: s,
														interaction: this,
													},
												), this.pointers.splice(i, 1), this.pointerIsDown = !1;
											}
										},
									},
									{
										key: "_updateLatestPointer",
										value: function (r, o, i) {
											this._latestPointer.pointer = r, this._latestPointer.event =
												o, this._latestPointer.eventTarget = i;
										},
									},
									{
										key: "destroy",
										value: function () {
											this._latestPointer.pointer = null, this._latestPointer.event =
												null, this._latestPointer.eventTarget = null;
										},
									},
									{
										key: "_createPreparedEvent",
										value: function (r, o, i, s) {
											return new Qe.InteractEvent(
												this,
												r,
												this.prepared.name,
												o,
												this.element,
												i,
												s,
											);
										},
									},
									{
										key: "_fireEvent",
										value: function (r) {
											this.interactable.fire(r), (
												!this.prevEvent || r.timeStamp >= this.prevEvent.timeStamp
											) && (this.prevEvent = r);
										},
									},
									{
										key: "_doPhase",
										value: function (r) {
											var o = r.event,
												i = r.phase,
												s = r.preEnd,
												a = r.type,
												l = this.rect;
											if (
												l &&
													i === "move" &&
													(
														R.addEdges(
															this.edges,
															l,
															this.coords.delta[this.interactable.options.deltaSource],
														), l.width = l.right - l.left, l.height =
															l.bottom - l.top
													), this._scopeFire(
													"interactions:before-action-".concat(i),
													r,
												) === !1
											) {
												return !1;
											}
											var u = r.iEvent = this._createPreparedEvent(o, i, s, a);
											return (
												this._scopeFire("interactions:action-".concat(i), r), i === "start" && (
													this.prevEvent = u
												), this._fireEvent(u), this._scopeFire(
													"interactions:after-action-".concat(i),
													r,
												), !0
											);
										},
									},
									{
										key: "_now",
										value: function () {
											return Date.now();
										},
									},
								]
						) && Mo(t.prototype, n), e
					);
				}();
			J.Interaction = nr;
			var ko = nr;
			J.default = ko;
			var ke = {};
			function rr(e) {
				e.pointerIsDown && (
					sn(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y =
						0
				);
			}
			function or(e) {
				an(e.interaction);
			}
			function an(e) {
				if (
					!function (n) {
						return !(!n.offset.pending.x && !n.offset.pending.y);
					}(e)
				) {
					return !1;
				}
				var t = e.offset.pending;
				return (
					sn(e.coords.cur, t), sn(e.coords.delta, t), R.addEdges(
						e.edges,
						e.rect,
						t,
					), t.x = 0, t.y = 0, !0
				);
			}
			function Io(e) {
				var t = e.x, n = e.y;
				this.offset.pending.x += t, this.offset.pending.y += n, this.offset.total.x +=
					t, this.offset.total.y += n;
			}
			function sn(e, t) {
				var n = e.page, r = e.client, o = t.x, i = t.y;
				n.x += o, n.y += i, r.x += o, r.y += i;
			}
			Object.defineProperty(ke, "__esModule", { value: !0 }), ke.addTotal = rr, ke.applyPending =
				an, ke.default = void 0, J._ProxyMethods.offsetBy = "";
			var Do = {
				id: "offset",
				before: ["modifiers", "pointer-events", "actions", "inertia"],
				install: function (e) {
					e.Interaction.prototype.offsetBy = Io;
				},
				listeners: {
					"interactions:new": function (e) {
						e.interaction.offset =
							{ total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
					},
					"interactions:update-pointer": function (e) {
						return rr(e.interaction);
					},
					"interactions:before-action-start": or,
					"interactions:before-action-move": or,
					"interactions:before-action-end": function (e) {
						var t = e.interaction;
						if (an(t)) {
							return (t.move({ offset: !0 }), t.end(), !1);
						}
					},
					"interactions:stop": function (e) {
						var t = e.interaction;
						t.offset.total.x = 0, t.offset.total.y = 0, t.offset.pending.x = 0, t.offset.pending.y =
							0;
					},
				},
			};
			ke.default = Do;
			var Be = {};
			function Ao(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function W(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(Be, "__esModule", { value: !0 }), Be.default =
				Be.InertiaState = void 0;
			var ir = function () {
				function e(r) {
					(
						function (o, i) {
							if (!(o instanceof i)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), W(this, "active", !1), W(this, "isModified", !1), W(
						this,
						"smoothEnd",
						!1,
					), W(this, "allowResume", !1), W(this, "modification", void 0), W(
						this,
						"modifierCount",
						0,
					), W(this, "modifierArg", void 0), W(this, "startCoords", void 0), W(
						this,
						"t0",
						0,
					), W(this, "v0", 0), W(this, "te", 0), W(this, "targetOffset", void 0), W(
						this,
						"modifiedOffset",
						void 0,
					), W(this, "currentOffset", void 0), W(this, "lambda_v0", 0), W(
						this,
						"one_ve_v0",
						0,
					), W(this, "timeout", void 0), W(this, "interaction", void 0), this.interaction =
						r;
				}
				var t, n;
				return (
					t = e, (
						n =
							[
								{
									key: "start",
									value: function (r) {
										var o = this.interaction, i = Tt(o);
										if (!i || !i.enabled) {
											return !1;
										}
										var s = o.coords.velocity.client,
											a = (0, be.default)(s.x, s.y),
											l = this.modification || (
												this.modification = new Me.default(o)
											);
										if (
											l.copyFrom(o.modification), this.t0 = o._now(), this.allowResume =
												i.allowResume, this.v0 = a, this.currentOffset =
												{ x: 0, y: 0 }, this.startCoords = o.coords.cur.page, this.modifierArg =
												l.fillArg({
													pageCoords: this.startCoords,
													preEnd: !0,
													phase: "inertiastart",
												}), (this.t0 - o.coords.cur.timeStamp) < 50 &&
												a > i.minSpeed &&
												a > i.endSpeed
										) {
											this.startInertia();
										} else {
											if (
												l.result = l.setAll(this.modifierArg), !l.result.changed
											) {
												return !1;
											}
											this.startSmoothEnd();
										}
										return (
											o.modification.result.rect = null, o.offsetBy(
												this.targetOffset,
											), o._doPhase({
												interaction: o,
												event: r,
												phase: "inertiastart",
											}), o.offsetBy({
												x: -this.targetOffset.x,
												y: -this.targetOffset.y,
											}), o.modification.result.rect = null, this.active = !0, o.simulation =
												this, !0
										);
									},
								},
								{
									key: "startInertia",
									value: function () {
										var r = this,
											o = this.interaction.coords.velocity.client,
											i = Tt(this.interaction),
											s = i.resistance,
											a = -Math.log(i.endSpeed / this.v0) / s;
										this.targetOffset = { x: (o.x - a) / s, y: (o.y - a) / s }, this.te =
											a, this.lambda_v0 = s / this.v0, this.one_ve_v0 =
											1 - (i.endSpeed / this.v0);
										var l = this.modification, u = this.modifierArg;
										u.pageCoords =
											{
												x: this.startCoords.x + this.targetOffset.x,
												y: this.startCoords.y + this.targetOffset.y,
											}, l.result = l.setAll(u), l.result.changed && (
											this.isModified = !0, this.modifiedOffset =
												{
													x: this.targetOffset.x + l.result.delta.x,
													y: this.targetOffset.y + l.result.delta.y,
												}
										), this.onNextFrame(function () {
											return r.inertiaTick();
										});
									},
								},
								{
									key: "startSmoothEnd",
									value: function () {
										var r = this;
										this.smoothEnd = !0, this.isModified = !0, this.targetOffset =
											{
												x: this.modification.result.delta.x,
												y: this.modification.result.delta.y,
											}, this.onNextFrame(function () {
											return r.smoothEndTick();
										});
									},
								},
								{
									key: "onNextFrame",
									value: function (r) {
										var o = this;
										this.timeout =
											se.default.request(function () {
												o.active && r();
											});
									},
								},
								{
									key: "inertiaTick",
									value: function () {
										var r,
											o,
											i,
											s,
											a,
											l = this,
											u = this.interaction,
											c = Tt(u).resistance,
											f = (u._now() - this.t0) / 1e3;
										if (f < this.te) {
											var p,
												h = 1 - (
													(Math.exp(-c * f) - this.lambda_v0) / this.one_ve_v0
												);
											this.isModified ? (
												r = this.targetOffset.x, o = this.targetOffset.y, i =
													this.modifiedOffset.x, s = this.modifiedOffset.y, p =
													{ x: ar(a = h, 0, r, i), y: ar(a, 0, o, s) }
											) : p =
												{
													x: this.targetOffset.x * h,
													y: this.targetOffset.y * h,
												};
											var d = {
												x: p.x - this.currentOffset.x,
												y: p.y - this.currentOffset.y,
											};
											this.currentOffset.x += d.x, this.currentOffset.y += d.y, u.offsetBy(
												d,
											), u.move(), this.onNextFrame(function () {
												return l.inertiaTick();
											});
										} else {
											u.offsetBy({
												x: this.modifiedOffset.x - this.currentOffset.x,
												y: this.modifiedOffset.y - this.currentOffset.y,
											}), this.end();
										}
									},
								},
								{
									key: "smoothEndTick",
									value: function () {
										var r = this,
											o = this.interaction,
											i = o._now() - this.t0,
											s = Tt(o).smoothEndDuration;
										if (i < s) {
											var a = {
												x: sr(i, 0, this.targetOffset.x, s),
												y: sr(i, 0, this.targetOffset.y, s),
											},
												l = {
													x: a.x - this.currentOffset.x,
													y: a.y - this.currentOffset.y,
												};
											this.currentOffset.x += l.x, this.currentOffset.y += l.y, o.offsetBy(
												l,
											), o.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function () {
												return r.smoothEndTick();
											});
										} else {
											o.offsetBy({
												x: this.targetOffset.x - this.currentOffset.x,
												y: this.targetOffset.y - this.currentOffset.y,
											}), this.end();
										}
									},
								},
								{
									key: "resume",
									value: function (r) {
										var o = r.pointer,
											i = r.event,
											s = r.eventTarget,
											a = this.interaction;
										a.offsetBy({
											x: -this.currentOffset.x,
											y: -this.currentOffset.y,
										}), a.updatePointer(o, i, s, !0), a._doPhase({
											interaction: a,
											event: i,
											phase: "resume",
										}), (0, x.copyCoords)(a.coords.prev, a.coords.cur), this.stop();
									},
								},
								{
									key: "end",
									value: function () {
										this.interaction.move(), this.interaction.end(), this.stop();
									},
								},
								{
									key: "stop",
									value: function () {
										this.active = this.smoothEnd = !1, this.interaction.simulation =
											null, se.default.cancel(this.timeout);
									},
								},
							]
					) && Ao(t.prototype, n), e
				);
			}();
			function Tt(e) {
				var t = e.interactable, n = e.prepared;
				return t && t.options && n.name && t.options[n.name].inertia;
			}
			function ar(e, t, n, r) {
				var o = 1 - e;
				return (o * o * t) + (2 * o * e * n) + (e * e * r);
			}
			function sr(e, t, n, r) {
				return (-n * (e /= r) * (e - 2)) + t;
			}
			Be.InertiaState = ir;
			var Ro = {
				id: "inertia",
				before: ["modifiers", "actions"],
				install: function (e) {
					var t = e.defaults;
					e.usePlugin(ke.default), e.usePlugin(V.default), e.actions.phases.inertiastart =
						!0, e.actions.phases.resume = !0, t.perAction.inertia =
						{
							enabled: !1,
							resistance: 10,
							minSpeed: 100,
							endSpeed: 10,
							allowResume: !0,
							smoothEndDuration: 300,
						};
				},
				listeners: {
					"interactions:new": function (e) {
						var t = e.interaction;
						t.inertia = new ir(t);
					},
					"interactions:before-action-end": function (e) {
						var t = e.interaction, n = e.event;
						return (!t._interacting || t.simulation || !t.inertia.start(n)) && null;
					},
					"interactions:down": function (e) {
						var t = e.interaction, n = e.eventTarget, r = t.inertia;
						if (r.active) {
							for (var o = n; v.default.element(o); ) {
								if (o === t.element) {
									r.resume(e);
									break;
								}
								o = P.parentNode(o);
							}
						}
					},
					"interactions:stop": function (e) {
						var t = e.interaction.inertia;
						t.active && t.stop();
					},
					"interactions:before-action-resume": function (e) {
						var t = e.interaction.modification;
						t.stop(e), t.start(e, e.interaction.coords.cur.page), t.applyToInteraction(
							e,
						);
					},
					"interactions:before-action-inertiastart": function (e) {
						return e.interaction.modification.setAndApply(e);
					},
					"interactions:action-resume": V.addEventModifiers,
					"interactions:action-inertiastart": V.addEventModifiers,
					"interactions:after-action-inertiastart": function (e) {
						return e.interaction.modification.restoreInteractionCoords(e);
					},
					"interactions:after-action-resume": function (e) {
						return e.interaction.modification.restoreInteractionCoords(e);
					},
				},
			};
			Be.default = Ro;
			var nt = {};
			function Co(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function rt(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			function lr(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					if (e.immediatePropagationStopped) {
						break;
					}
					r(e);
				}
			}
			Object.defineProperty(nt, "__esModule", { value: !0 }), nt.Eventable =
				void 0;
			var zo = function () {
				function e(r) {
					(
						function (o, i) {
							if (!(o instanceof i)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), rt(this, "options", void 0), rt(this, "types", {}), rt(
						this,
						"propagationStopped",
						!1,
					), rt(this, "immediatePropagationStopped", !1), rt(
						this,
						"global",
						void 0,
					), this.options = (0, w.default)({}, r || {});
				}
				var t, n;
				return (
					t = e, (
						n =
							[
								{
									key: "fire",
									value: function (r) {
										var o, i = this.global;
										(o = this.types[r.type]) && lr(r, o), !r.propagationStopped &&
											i &&
											(o = i[r.type]) &&
											lr(r, o);
									},
								},
								{
									key: "on",
									value: function (r, o) {
										var i = (0, ze.default)(r, o);
										for (r in i) this.types[r] =
											D.merge(this.types[r] || [], i[r]);
									},
								},
								{
									key: "off",
									value: function (r, o) {
										var i = (0, ze.default)(r, o);
										for (r in i) {
											var s = this.types[r];
											if (s && s.length) {
												for (var a = 0; a < i[r].length; a++) {
													var l = i[r][a], u = s.indexOf(l);
													u !== -1 && s.splice(u, 1);
												}
											}
										}
									},
								},
								{
									key: "getRect",
									value: function (r) {
										return null;
									},
								},
							]
					) && Co(t.prototype, n), e
				);
			}();
			nt.Eventable = zo;
			var ot = {};
			Object.defineProperty(ot, "__esModule", { value: !0 }), ot.default =
				function (e, t) {
					if (t.phaselessTypes[e]) {
						return !0;
					}
					for (var n in t.map) if (
						e.indexOf(n) === 0 && (e.substr(n.length) in t.phases)
					) {
						return !0;
					}
					return !1;
				};
			var ln = {};
			Object.defineProperty(ln, "__esModule", { value: !0 }), ln.createInteractStatic =
				function (e) {
					var t = function n(r, o) {
						var i = e.interactables.get(r, o);
						return (
							i || (
								(i = e.interactables.new(r, o)).events.global = n.globalEvents
							), i
						);
					};
					return (
						t.getPointerAverage = x.pointerAverage, t.getTouchBBox = x.touchBBox, t.getTouchDistance =
							x.touchDistance, t.getTouchAngle = x.touchAngle, t.getElementRect =
							P.getElementRect, t.getElementClientRect = P.getElementClientRect, t.matchesSelector =
							P.matchesSelector, t.closest = P.closest, t.globalEvents = {}, t.version =
							"1.10.11", t.scope = e, t.use =
							function (n, r) {
								return (this.scope.usePlugin(n, r), this);
							}, t.isSet =
							function (n, r) {
								return !!this.scope.interactables.get(n, r && r.context);
							}, t.on =
							(0, ee.warnOnce)(
								function (n, r, o) {
									if (
										v.default.string(n) &&
											n.search(" ") !== -1 &&
											(n = n.trim().split(/ +/)), v.default.array(n)
									) {
										for (var i = 0; i < n.length; i++) {
											var s = n[i];
											this.on(s, r, o);
										}
										return this;
									}
									if (v.default.object(n)) {
										for (var a in n) this.on(a, n[a], r);
										return this;
									}
									return (
										(0, ot.default)(n, this.scope.actions)
											? this.globalEvents[n]
												? this.globalEvents[n].push(r)
												: this.globalEvents[n] = [r]
											: this.scope.events.add(
												this.scope.document,
												n,
												r,
												{ options: o },
											), this
									);
								},
								"The interact.on() method is being deprecated",
							), t.off =
							(0, ee.warnOnce)(
								function (n, r, o) {
									if (
										v.default.string(n) &&
											n.search(" ") !== -1 &&
											(n = n.trim().split(/ +/)), v.default.array(n)
									) {
										for (var i = 0; i < n.length; i++) {
											var s = n[i];
											this.off(s, r, o);
										}
										return this;
									}
									if (v.default.object(n)) {
										for (var a in n) this.off(a, n[a], r);
										return this;
									}
									var l;
									return (
										(0, ot.default)(n, this.scope.actions) ? (
											n in this.globalEvents
										) &&
											(l = this.globalEvents[n].indexOf(r)) !== -1 &&
											this.globalEvents[n].splice(l, 1) : this.scope.events.remove(
											this.scope.document,
											n,
											r,
											o,
										), this
									);
								},
								"The interact.off() method is being deprecated",
							), t.debug =
							function () {
								return this.scope;
							}, t.supportsTouch =
							function () {
								return Z.default.supportsTouch;
							}, t.supportsPointerEvent =
							function () {
								return Z.default.supportsPointerEvent;
							}, t.stop =
							function () {
								for (var n = 0; n < this.scope.interactions.list.length; n++) this.scope.interactions.list[n].stop();
								return this;
							}, t.pointerMoveTolerance =
							function (n) {
								return v.default.number(n) ? (
									this.scope.interactions.pointerMoveTolerance = n, this
								) : this.scope.interactions.pointerMoveTolerance;
							}, t.addDocument =
							function (n, r) {
								this.scope.addDocument(n, r);
							}, t.removeDocument =
							function (n) {
								this.scope.removeDocument(n);
							}, t
					);
				};
			var Mt = {};
			function Fo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function ve(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.Interactable =
				void 0;
			var Xo = function () {
				function e(r, o, i, s) {
					(
						function (a, l) {
							if (!(a instanceof l)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), ve(this, "options", void 0), ve(this, "_actions", void 0), ve(
						this,
						"target",
						void 0,
					), ve(this, "events", new nt.Eventable()), ve(
						this,
						"_context",
						void 0,
					), ve(this, "_win", void 0), ve(this, "_doc", void 0), ve(
						this,
						"_scopeEvents",
						void 0,
					), ve(this, "_rectChecker", void 0), this._actions = o.actions, this.target =
						r, this._context = o.context || i, this._win =
						(0, _.getWindow)((0, P.trySelector)(r) ? this._context : r), this._doc =
						this._win.document, this._scopeEvents = s, this.set(o);
				}
				var t, n;
				return (
					t = e, (
						n =
							[
								{
									key: "_defaults",
									get: function () {
										return { base: {}, perAction: {}, actions: {} };
									},
								},
								{
									key: "setOnEvents",
									value: function (r, o) {
										return (
											v.default.func(o.onstart) && this.on(
												"".concat(r, "start"),
												o.onstart,
											), v.default.func(o.onmove) && this.on(
												"".concat(r, "move"),
												o.onmove,
											), v.default.func(o.onend) && this.on(
												"".concat(r, "end"),
												o.onend,
											), v.default.func(o.oninertiastart) && this.on(
												"".concat(r, "inertiastart"),
												o.oninertiastart,
											), this
										);
									},
								},
								{
									key: "updatePerActionListeners",
									value: function (r, o, i) {
										(v.default.array(o) || v.default.object(o)) && this.off(
											r,
											o,
										), (v.default.array(i) || v.default.object(i)) && this.on(
											r,
											i,
										);
									},
								},
								{
									key: "setPerAction",
									value: function (r, o) {
										var i = this._defaults;
										for (var s in o) {
											var a = s, l = this.options[r], u = o[a];
											a === "listeners" && this.updatePerActionListeners(
												r,
												l.listeners,
												u,
											), v.default.array(u)
												? l[a] = D.from(u)
												: v.default.plainObject(u)
													? (
														l[a] =
															(0, w.default)(l[a] || {}, (0, Te.default)(u)), v.default.object(
															i.perAction[a],
														) &&
															("enabled" in i.perAction[a]) &&
															(l[a].enabled = u.enabled !== !1)
													)
													: v.default.bool(u) && v.default.object(
														i.perAction[a],
													)
														? l[a].enabled = u
														: l[a] = u;
										}
									},
								},
								{
									key: "getRect",
									value: function (r) {
										return (
											r =
												r || (
													v.default.element(this.target) ? this.target : null
												), v.default.string(this.target) && (
												r = r || this._context.querySelector(this.target)
											), (0, P.getElementRect)(r)
										);
									},
								},
								{
									key: "rectChecker",
									value: function (r) {
										var o = this;
										return v.default.func(r)
											? (
												this._rectChecker = r, this.getRect =
													function (i) {
														var s = (0, w.default)({}, o._rectChecker(i));
														return (
															("width" in s) || (
																s.width = s.right - s.left, s.height =
																	s.bottom - s.top
															), s
														);
													}, this
											)
											: r === null
												? (delete this.getRect, delete this._rectChecker, this)
												: this.getRect;
									},
								},
								{
									key: "_backCompatOption",
									value: function (r, o) {
										if ((0, P.trySelector)(o) || v.default.object(o)) {
											for (var i in this.options[r] = o, this._actions.map) this.options[i][r] =
												o;
											return this;
										}
										return this.options[r];
									},
								},
								{
									key: "origin",
									value: function (r) {
										return this._backCompatOption("origin", r);
									},
								},
								{
									key: "deltaSource",
									value: function (r) {
										return r === "page" || r === "client" ? (
											this.options.deltaSource = r, this
										) : this.options.deltaSource;
									},
								},
								{
									key: "context",
									value: function () {
										return this._context;
									},
								},
								{
									key: "inContext",
									value: function (r) {
										return this._context === r.ownerDocument || (
											0, P.nodeContains
										)(this._context, r);
									},
								},
								{
									key: "testIgnoreAllow",
									value: function (r, o, i) {
										return !this.testIgnore(r.ignoreFrom, o, i) && this.testAllow(
											r.allowFrom,
											o,
											i,
										);
									},
								},
								{
									key: "testAllow",
									value: function (r, o, i) {
										return !r || (
											!!v.default.element(i) && (
												v.default.string(r) ? (0, P.matchesUpTo)(i, r, o) : !!v.default.element(
													r,
												) && (0, P.nodeContains)(r, i)
											)
										);
									},
								},
								{
									key: "testIgnore",
									value: function (r, o, i) {
										return !(!r || !v.default.element(i)) && (
											v.default.string(r) ? (0, P.matchesUpTo)(i, r, o) : !!v.default.element(
												r,
											) && (0, P.nodeContains)(r, i)
										);
									},
								},
								{
									key: "fire",
									value: function (r) {
										return (this.events.fire(r), this);
									},
								},
								{
									key: "_onOff",
									value: function (r, o, i, s) {
										v.default.object(o) &&
											!v.default.array(o) &&
											(s = i, i = null);
										var a = r === "on" ? "add" : "remove",
											l = (0, ze.default)(o, i);
										for (var u in l) {
											u === "wheel" && (u = Z.default.wheelEvent);
											for (var c = 0; c < l[u].length; c++) {
												var f = l[u][c];
												(0, ot.default)(u, this._actions)
													? this.events[r](u, f)
													: v.default.string(this.target)
														? this._scopeEvents["".concat(a, "Delegate")](
															this.target,
															this._context,
															u,
															f,
															s,
														)
														: this._scopeEvents[a](this.target, u, f, s);
											}
										}
										return this;
									},
								},
								{
									key: "on",
									value: function (r, o, i) {
										return this._onOff("on", r, o, i);
									},
								},
								{
									key: "off",
									value: function (r, o, i) {
										return this._onOff("off", r, o, i);
									},
								},
								{
									key: "set",
									value: function (r) {
										var o = this._defaults;
										for (
											var i
											in
											v.default.object(r) || (r = {}), this.options =
												(0, Te.default)(o.base), this._actions.methodDict
										) {
											var s = i, a = this._actions.methodDict[s];
											this.options[s] = {}, this.setPerAction(
												s,
												(0, w.default)(
													(0, w.default)({}, o.perAction),
													o.actions[s],
												),
											), this[a](r[s]);
										}
										for (var l in r) v.default.func(this[l]) && this[l](r[l]);
										return this;
									},
								},
								{
									key: "unset",
									value: function () {
										if (v.default.string(this.target)) {
											for (var r in this._scopeEvents.delegatedEvents) for (
												var o = this._scopeEvents.delegatedEvents[r],
													i = o.length - 1;
												i >= 0;
												i--
											) {
												var s = o[i],
													a = s.selector,
													l = s.context,
													u = s.listeners;
												a === this.target &&
													l === this._context &&
													o.splice(i, 1);
												for (var c = u.length - 1; c >= 0; c--) this._scopeEvents.removeDelegate(
													this.target,
													this._context,
													r,
													u[c][0],
													u[c][1],
												);
											}
										} else {
											this._scopeEvents.remove(this.target, "all");
										}
									},
								},
							]
					) && Fo(t.prototype, n), e
				);
			}();
			Mt.Interactable = Xo;
			var jt = {};
			function Yo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function un(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(jt, "__esModule", { value: !0 }), jt.InteractableSet =
				void 0;
			var Bo = function () {
				function e(r) {
					var o = this;
					(
						function (i, s) {
							if (!(i instanceof s)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), un(this, "list", []), un(this, "selectorMap", {}), un(
						this,
						"scope",
						void 0,
					), this.scope = r, r.addListeners({
						"interactable:unset": function (i) {
							var s = i.interactable,
								a = s.target,
								l = s._context,
								u = v.default.string(a) ? o.selectorMap[a] : a[o.scope.id],
								c = D.findIndex(
									u,
									function (f) {
										return f.context === l;
									},
								);
							u[c] && (u[c].context = null, u[c].interactable = null), u.splice(
								c,
								1,
							);
						},
					});
				}
				var t, n;
				return (
					t = e, (
						n =
							[
								{
									key: "new",
									value: function (r, o) {
										o = (0, w.default)(o || {}, { actions: this.scope.actions });
										var i = new this.scope.Interactable(
											r,
											o,
											this.scope.document,
											this.scope.events,
										),
											s = { context: i._context, interactable: i };
										return (
											this.scope.addDocument(i._doc), this.list.push(i), v.default.string(
												r,
											) ? (
												this.selectorMap[r] || (this.selectorMap[r] = []), this.selectorMap[r].push(
													s,
												)
											) : (
												i.target[this.scope.id] || Object.defineProperty(
													r,
													this.scope.id,
													{ value: [], configurable: !0 },
												), r[this.scope.id].push(s)
											), this.scope.fire(
												"interactable:new",
												{
													target: r,
													options: o,
													interactable: i,
													win: this.scope._win,
												},
											), i
										);
									},
								},
								{
									key: "get",
									value: function (r, o) {
										var i = (o && o.context) || this.scope.document,
											s = v.default.string(r),
											a = s ? this.selectorMap[r] : r[this.scope.id];
										if (!a) {
											return null;
										}
										var l = D.find(
											a,
											function (u) {
												return u.context === i && (
													s || u.interactable.inContext(r)
												);
											},
										);
										return l && l.interactable;
									},
								},
								{
									key: "forEachMatch",
									value: function (r, o) {
										for (var i = 0; i < this.list.length; i++) {
											var s = this.list[i], a = void 0;
											if (
												(
													v.default.string(s.target) ? v.default.element(r) && P.matchesSelector(
														r,
														s.target,
													) : r === s.target
												) && s.inContext(r) && (a = o(s)), a !== void 0
											) {
												return a;
											}
										}
									},
								},
							]
					) && Yo(t.prototype, n), e
				);
			}();
			jt.InteractableSet = Bo;
			var kt = {};
			function Wo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function cn(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			function fn(e, t) {
				return function (n) {
					if (Array.isArray(n)) {
						return n;
					}
				}(e) ||
				function (n, r) {
					if (typeof Symbol < "u" && (Symbol.iterator in Object(n))) {
						var o = [], i = !0, s = !1, a = void 0;
						try {
							for (
								var l, u = n[Symbol.iterator]();
								!(i = (l = u.next()).done) && (
									o.push(l.value), !r || o.length !== r
								);
								i = !0
							);
						} catch (c) {
							s = !0, a = c;
						} finally {
							try {
								i || u.return == null || u.return();
							} finally {
								if (s) {
									throw a;
								}
							}
						}
						return o;
					}
				}(e, t) ||
				function (n, r) {
					if (n) {
						if (typeof n == "string") {
							return ur(n, r);
						}
						var o = Object.prototype.toString.call(n).slice(8, -1);
						return (
							o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set"
								? Array.from(n)
								: o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
									o,
								)
									? ur(n, r)
									: void 0
						);
					}
				}(e, t) ||
				function () {
					throw new TypeError(
						`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`,
					);
				}();
			}
			function ur(e, t) {
				(t == null || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			Object.defineProperty(kt, "__esModule", { value: !0 }), kt.default =
				void 0;
			var Lo = function () {
				function e(r) {
					(
						function (o, i) {
							if (!(o instanceof i)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), cn(this, "currentTarget", void 0), cn(
						this,
						"originalEvent",
						void 0,
					), cn(this, "type", void 0), this.originalEvent = r, (0, Ge.default)(
						this,
						r,
					);
				}
				var t, n;
				return (
					t = e, (
						n =
							[
								{
									key: "preventOriginalDefault",
									value: function () {
										this.originalEvent.preventDefault();
									},
								},
								{
									key: "stopPropagation",
									value: function () {
										this.originalEvent.stopPropagation();
									},
								},
								{
									key: "stopImmediatePropagation",
									value: function () {
										this.originalEvent.stopImmediatePropagation();
									},
								},
							]
					) && Wo(t.prototype, n), e
				);
			}();
			function it(e) {
				if (!v.default.object(e)) {
					return { capture: !!e, passive: !1 };
				}
				var t = (0, w.default)({}, e);
				return (t.capture = !!e.capture, t.passive = !!e.passive, t);
			}
			var Uo = {
				id: "events",
				install: function (e) {
					var t,
						n = [],
						r = {},
						o = [],
						i = {
							add: s,
							remove: a,
							addDelegate: function (c, f, p, h, d) {
								var g = it(d);
								if (!r[p]) {
									r[p] = [];
									for (var m = 0; m < o.length; m++) {
										var y = o[m];
										s(y, p, l), s(y, p, u, !0);
									}
								}
								var b = r[p],
									O = D.find(
										b,
										function (S) {
											return S.selector === c && S.context === f;
										},
									);
								O || (O = { selector: c, context: f, listeners: [] }, b.push(O)), O.listeners.push([
									h,
									g,
								]);
							},
							removeDelegate: function (c, f, p, h, d) {
								var g, m = it(d), y = r[p], b = !1;
								if (y) {
									for (g = y.length - 1; g >= 0; g--) {
										var O = y[g];
										if (O.selector === c && O.context === f) {
											for (var S = O.listeners, M = S.length - 1; M >= 0; M--) {
												var C = fn(S[M], 2),
													T = C[0],
													I = C[1],
													re = I.capture,
													ge = I.passive;
												if (T === h && re === m.capture && ge === m.passive) {
													S.splice(M, 1), S.length || (
														y.splice(g, 1), a(f, p, l), a(f, p, u, !0)
													), b = !0;
													break;
												}
											}
											if (b) {
												break;
											}
										}
									}
								}
							},
							delegateListener: l,
							delegateUseCapture: u,
							delegatedEvents: r,
							documents: o,
							targets: n,
							supportsOptions: !1,
							supportsPassive: !1,
						};
					function s(c, f, p, h) {
						var d = it(h),
							g = D.find(
								n,
								function (m) {
									return m.eventTarget === c;
								},
							);
						g || (g = { eventTarget: c, events: {} }, n.push(g)), g.events[f] || (
							g.events[f] = []
						), c.addEventListener &&
							!D.contains(g.events[f], p) &&
							(
								c.addEventListener(f, p, i.supportsOptions ? d : d.capture), g.events[f].push(
									p,
								)
							);
					}
					function a(c, f, p, h) {
						var d = it(h),
							g = D.findIndex(
								n,
								function (M) {
									return M.eventTarget === c;
								},
							),
							m = n[g];
						if (m && m.events) {
							if (f !== "all") {
								var y = !1, b = m.events[f];
								if (b) {
									if (p === "all") {
										for (var O = b.length - 1; O >= 0; O--) a(c, f, b[O], d);
										return;
									}
									for (var S = 0; S < b.length; S++) if (b[S] === p) {
										c.removeEventListener(
											f,
											p,
											i.supportsOptions ? d : d.capture,
										), b.splice(S, 1), b.length === 0 && (
											delete m.events[f], y = !0
										);
										break;
									}
								}
								y && !Object.keys(m.events).length && n.splice(g, 1);
							} else {
								for (f in m.events) m.events.hasOwnProperty(f) && a(c, f, "all");
							}
						}
					}
					function l(c, f) {
						for (
							var p = it(f),
								h = new Lo(c),
								d = r[c.type],
								g = fn(x.getEventTargets(c), 1)[0],
								m = g;
							v.default.element(m);
						) {
							for (var y = 0; y < d.length; y++) {
								var b = d[y], O = b.selector, S = b.context;
								if (
									P.matchesSelector(m, O) &&
									P.nodeContains(S, g) &&
									P.nodeContains(S, m)
								) {
									var M = b.listeners;
									h.currentTarget = m;
									for (var C = 0; C < M.length; C++) {
										var T = fn(M[C], 2),
											I = T[0],
											re = T[1],
											ge = re.capture,
											On = re.passive;
										ge === p.capture && On === p.passive && I(h);
									}
								}
							}
							m = P.parentNode(m);
						}
					}
					function u(c) {
						return l(c, !0);
					}
					return (
						(t = e.document) == null || t
							.createElement("div")
							.addEventListener(
								"test",
								null,
								{
									get capture() {
										return i.supportsOptions = !0;
									},
									get passive() {
										return i.supportsPassive = !0;
									},
								},
							), e.events = i, i
					);
				},
			};
			kt.default = Uo;
			var It = {};
			Object.defineProperty(It, "__esModule", { value: !0 }), It.default =
				void 0;
			var Dt = {
				methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
				search: function (e) {
					for (var t = 0; t < Dt.methodOrder.length; t++) {
						var n;
						n = Dt.methodOrder[t];
						var r = Dt[n](e);
						if (r) {
							return r;
						}
					}
					return null;
				},
				simulationResume: function (e) {
					var t = e.pointerType, n = e.eventType, r = e.eventTarget, o = e.scope;
					if (!/down|start/i.test(n)) {
						return null;
					}
					for (var i = 0; i < o.interactions.list.length; i++) {
						var s = o.interactions.list[i], a = r;
						if (s.simulation && s.simulation.allowResume && s.pointerType === t) {
							for (; a; ) {
								if (a === s.element) {
									return s;
								}
								a = P.parentNode(a);
							}
						}
					}
					return null;
				},
				mouseOrPen: function (e) {
					var t,
						n = e.pointerId,
						r = e.pointerType,
						o = e.eventType,
						i = e.scope;
					if (r !== "mouse" && r !== "pen") {
						return null;
					}
					for (var s = 0; s < i.interactions.list.length; s++) {
						var a = i.interactions.list[s];
						if (a.pointerType === r) {
							if (a.simulation && !cr(a, n)) {
								continue;
							}
							if (a.interacting()) {
								return a;
							}
							t || (t = a);
						}
					}
					if (t) {
						return t;
					}
					for (var l = 0; l < i.interactions.list.length; l++) {
						var u = i.interactions.list[l];
						if (!(u.pointerType !== r || (/down/i.test(o) && u.simulation))) {
							return u;
						}
					}
					return null;
				},
				hasPointer: function (e) {
					for (
						var t = e.pointerId, n = e.scope, r = 0;
						r < n.interactions.list.length;
						r++
					) {
						var o = n.interactions.list[r];
						if (cr(o, t)) {
							return o;
						}
					}
					return null;
				},
				idle: function (e) {
					for (
						var t = e.pointerType, n = e.scope, r = 0;
						r < n.interactions.list.length;
						r++
					) {
						var o = n.interactions.list[r];
						if (o.pointers.length === 1) {
							var i = o.interactable;
							if (i && (!i.options.gesture || !i.options.gesture.enabled)) {
								continue;
							}
						} else if (o.pointers.length >= 2) {
							continue;
						}
						if (!o.interacting() && t === o.pointerType) {
							return o;
						}
					}
					return null;
				},
			};
			function cr(e, t) {
				return e.pointers.some(function (n) {
					return n.id === t;
				});
			}
			var Vo = Dt;
			It.default = Vo;
			var At = {};
			function fr(e) {
				return (
					fr =
						typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (
							t,
						) {
							return typeof t;
						} : function (t) {
							return t &&
								typeof Symbol == "function" &&
								t.constructor === Symbol &&
								t !== Symbol.prototype ? "symbol" : typeof t;
						}
				)(e);
			}
			function dr(e, t) {
				return function (n) {
					if (Array.isArray(n)) {
						return n;
					}
				}(e) ||
				function (n, r) {
					if (typeof Symbol < "u" && (Symbol.iterator in Object(n))) {
						var o = [], i = !0, s = !1, a = void 0;
						try {
							for (
								var l, u = n[Symbol.iterator]();
								!(i = (l = u.next()).done) && (
									o.push(l.value), !r || o.length !== r
								);
								i = !0
							);
						} catch (c) {
							s = !0, a = c;
						} finally {
							try {
								i || u.return == null || u.return();
							} finally {
								if (s) {
									throw a;
								}
							}
						}
						return o;
					}
				}(e, t) ||
				function (n, r) {
					if (n) {
						if (typeof n == "string") {
							return pr(n, r);
						}
						var o = Object.prototype.toString.call(n).slice(8, -1);
						return (
							o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set"
								? Array.from(n)
								: o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
									o,
								)
									? pr(n, r)
									: void 0
						);
					}
				}(e, t) ||
				function () {
					throw new TypeError(
						`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`,
					);
				}();
			}
			function pr(e, t) {
				(t == null || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function No(e, t) {
				if (!(e instanceof t)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			function qo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function vr(e, t) {
				return (
					vr =
						Object.setPrototypeOf || function (n, r) {
							return (n.__proto__ = r, n);
						}
				)(e, t);
			}
			function $o(e, t) {
				return !t || (fr(t) !== "object" && typeof t != "function") ? function (
					n,
				) {
					if (n === void 0) {
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called",
						);
					}
					return n;
				}(e) : t;
			}
			function dn(e) {
				return (
					dn =
						Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
						}
				)(e);
			}
			Object.defineProperty(At, "__esModule", { value: !0 }), At.default =
				void 0;
			var pn = [
				"pointerDown",
				"pointerMove",
				"pointerUp",
				"updatePointer",
				"removePointer",
				"windowBlur",
			];
			function hr(e, t) {
				return function (n) {
					var r = t.interactions.list,
						o = x.getPointerType(n),
						i = dr(x.getEventTargets(n), 2),
						s = i[0],
						a = i[1],
						l = [];
					if (/^touch/.test(n.type)) {
						t.prevTouchTime = t.now();
						for (var u = 0; u < n.changedTouches.length; u++) {
							var c = n.changedTouches[u],
								f = {
									pointer: c,
									pointerId: x.getPointerId(c),
									pointerType: o,
									eventType: n.type,
									eventTarget: s,
									curEventTarget: a,
									scope: t,
								},
								p = gr(f);
							l.push([f.pointer, f.eventTarget, f.curEventTarget, p]);
						}
					} else {
						var h = !1;
						if (!Z.default.supportsPointerEvent && /mouse/.test(n.type)) {
							for (var d = 0; d < r.length && !h; d++) h =
								r[d].pointerType !== "mouse" && r[d].pointerIsDown;
							h = h || (t.now() - t.prevTouchTime) < 500 || n.timeStamp === 0;
						}
						if (!h) {
							var g = {
								pointer: n,
								pointerId: x.getPointerId(n),
								pointerType: o,
								eventType: n.type,
								curEventTarget: a,
								eventTarget: s,
								scope: t,
							},
								m = gr(g);
							l.push([g.pointer, g.eventTarget, g.curEventTarget, m]);
						}
					}
					for (var y = 0; y < l.length; y++) {
						var b = dr(l[y], 4), O = b[0], S = b[1], M = b[2];
						b[3][e](O, n, S, M);
					}
				};
			}
			function gr(e) {
				var t = e.pointerType,
					n = e.scope,
					r = { interaction: It.default.search(e), searchDetails: e };
				return (
					n.fire("interactions:find", r), r.interaction || n.interactions.new({
						pointerType: t,
					})
				);
			}
			function vn(e, t) {
				var n = e.doc,
					r = e.scope,
					o = e.options,
					i = r.interactions.docEvents,
					s = r.events,
					a = s[t];
				for (
					var l
					in
					r.browser.isIOS && !o.events && (o.events = { passive: !1 }), s.delegatedEvents
				) a(n, l, s.delegateListener), a(n, l, s.delegateUseCapture, !0);
				for (var u = o && o.events, c = 0; c < i.length; c++) {
					var f = i[c];
					a(n, f.type, f.listener, u);
				}
			}
			var Go = {
				id: "core/interactions",
				install: function (e) {
					for (var t = {}, n = 0; n < pn.length; n++) {
						var r = pn[n];
						t[r] = hr(r, e);
					}
					var o, i = Z.default.pEventTypes;
					function s() {
						for (var a = 0; a < e.interactions.list.length; a++) {
							var l = e.interactions.list[a];
							if (
								l.pointerIsDown &&
								l.pointerType === "touch" &&
								!l._interacting
							) {
								for (
									var u = function () {
										var f = l.pointers[c];
										e.documents.some(function (p) {
											var h = p.doc;
											return (0, P.nodeContains)(h, f.downTarget);
										}) || l.removePointer(f.pointer, f.event);
									},
										c = 0;
									c < l.pointers.length;
									c++
								) u();
							}
						}
					}
					(
						o =
							F.default.PointerEvent ? [
								{ type: i.down, listener: s },
								{ type: i.down, listener: t.pointerDown },
								{ type: i.move, listener: t.pointerMove },
								{ type: i.up, listener: t.pointerUp },
								{ type: i.cancel, listener: t.pointerUp },
							] : [
								{ type: "mousedown", listener: t.pointerDown },
								{ type: "mousemove", listener: t.pointerMove },
								{ type: "mouseup", listener: t.pointerUp },
								{ type: "touchstart", listener: s },
								{ type: "touchstart", listener: t.pointerDown },
								{ type: "touchmove", listener: t.pointerMove },
								{ type: "touchend", listener: t.pointerUp },
								{ type: "touchcancel", listener: t.pointerUp },
							]
					).push({
						type: "blur",
						listener: function (a) {
							for (var l = 0; l < e.interactions.list.length; l++) e.interactions.list[l].documentBlur(
								a,
							);
						},
					}), e.prevTouchTime = 0, e.Interaction =
						function (a) {
							(
								function (d, g) {
									if (typeof g != "function" && g !== null) {
										throw new TypeError(
											"Super expression must either be null or a function",
										);
									}
									d.prototype =
										Object.create(
											g && g.prototype,
											{
												constructor: {
													value: d,
													writable: !0,
													configurable: !0,
												},
											},
										), g && vr(d, g);
								}
							)(h, a);
							var l,
								u,
								c,
								f,
								p = (
									c = h, f =
										function () {
											if (
												typeof Reflect > "u" ||
												!Reflect.construct ||
												Reflect.construct.sham
											) {
												return !1;
											}
											if (typeof Proxy == "function") {
												return !0;
											}
											try {
												return (
													Boolean.prototype.valueOf.call(
														Reflect.construct(Boolean, [], function () {}),
													), !0
												);
											} catch {
												return !1;
											}
										}(), function () {
										var d, g = dn(c);
										if (f) {
											var m = dn(this).constructor;
											d = Reflect.construct(g, arguments, m);
										} else {
											d = g.apply(this, arguments);
										}
										return $o(this, d);
									}
								);
							function h() {
								return (No(this, h), p.apply(this, arguments));
							}
							return (
								l = h, (
									u =
										[
											{
												key: "pointerMoveTolerance",
												get: function () {
													return e.interactions.pointerMoveTolerance;
												},
												set: function (d) {
													e.interactions.pointerMoveTolerance = d;
												},
											},
											{
												key: "_now",
												value: function () {
													return e.now();
												},
											},
										]
								) && qo(l.prototype, u), h
							);
						}(J.default), e.interactions =
						{
							list: [],
							new: function (a) {
								a.scopeFire =
									function (u, c) {
										return e.fire(u, c);
									};
								var l = new e.Interaction(a);
								return (e.interactions.list.push(l), l);
							},
							listeners: t,
							docEvents: o,
							pointerMoveTolerance: 1,
						}, e.usePlugin(Ye.default);
				},
				listeners: {
					"scope:add-document": function (e) {
						return vn(e, "add");
					},
					"scope:remove-document": function (e) {
						return vn(e, "remove");
					},
					"interactable:unset": function (e, t) {
						for (
							var n = e.interactable, r = t.interactions.list.length - 1;
							r >= 0;
							r--
						) {
							var o = t.interactions.list[r];
							o.interactable === n && (
								o.stop(), t.fire("interactions:destroy", { interaction: o }), o.destroy(), t.interactions.list.length > 2 && t.interactions.list.splice(
									r,
									1,
								)
							);
						}
					},
				},
				onDocSignal: vn,
				doOnInteractions: hr,
				methodNames: pn,
			};
			At.default = Go;
			var at = {};
			function yr(e) {
				return (
					yr =
						typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (
							t,
						) {
							return typeof t;
						} : function (t) {
							return t &&
								typeof Symbol == "function" &&
								t.constructor === Symbol &&
								t !== Symbol.prototype ? "symbol" : typeof t;
						}
				)(e);
			}
			function hn(e, t, n) {
				return (
					hn =
						typeof Reflect < "u" && Reflect.get ? Reflect.get : function (
							r,
							o,
							i,
						) {
							var s = function (l, u) {
								for (
									;
									!Object.prototype.hasOwnProperty.call(l, u) && (l = We(l)) !== null;
								);
								return l;
							}(r, o);
							if (s) {
								var a = Object.getOwnPropertyDescriptor(s, o);
								return a.get ? a.get.call(i) : a.value;
							}
						}
				)(e, t, n || e);
			}
			function mr(e, t) {
				return (
					mr =
						Object.setPrototypeOf || function (n, r) {
							return (n.__proto__ = r, n);
						}
				)(e, t);
			}
			function Ho(e, t) {
				return !t || (yr(t) !== "object" && typeof t != "function") ? function (
					n,
				) {
					if (n === void 0) {
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called",
						);
					}
					return n;
				}(e) : t;
			}
			function We(e) {
				return (
					We =
						Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
						}
				)(e);
			}
			function br(e, t) {
				if (!(e instanceof t)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			function xr(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function wr(e, t, n) {
				return (t && xr(e.prototype, t), n && xr(e, n), e);
			}
			function N(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(at, "__esModule", { value: !0 }), at.initScope = _r, at.Scope =
				void 0;
			var Ko = function () {
				function e() {
					var t = this;
					br(this, e), N(
						this,
						"id",
						"__interact_scope_".concat(Math.floor(100 * Math.random())),
					), N(this, "isInitialized", !1), N(this, "listenerMaps", []), N(
						this,
						"browser",
						Z.default,
					), N(this, "defaults", (0, Te.default)(Je.defaults)), N(
						this,
						"Eventable",
						nt.Eventable,
					), N(
						this,
						"actions",
						{
							map: {},
							phases: { start: !0, move: !0, end: !0 },
							methodDict: {},
							phaselessTypes: {},
						},
					), N(this, "interactStatic", (0, ln.createInteractStatic)(this)), N(
						this,
						"InteractEvent",
						Qe.InteractEvent,
					), N(this, "Interactable", void 0), N(
						this,
						"interactables",
						new jt.InteractableSet(this),
					), N(this, "_win", void 0), N(this, "document", void 0), N(
						this,
						"window",
						void 0,
					), N(this, "documents", []), N(
						this,
						"_plugins",
						{ list: [], map: {} },
					), N(
						this,
						"onWindowUnload",
						function (r) {
							return t.removeDocument(r.target);
						},
					);
					var n = this;
					this.Interactable =
						function (r) {
							(
								function (l, u) {
									if (typeof u != "function" && u !== null) {
										throw new TypeError(
											"Super expression must either be null or a function",
										);
									}
									l.prototype =
										Object.create(
											u && u.prototype,
											{
												constructor: {
													value: l,
													writable: !0,
													configurable: !0,
												},
											},
										), u && mr(l, u);
								}
							)(a, r);
							var o,
								i,
								s = (
									o = a, i =
										function () {
											if (
												typeof Reflect > "u" ||
												!Reflect.construct ||
												Reflect.construct.sham
											) {
												return !1;
											}
											if (typeof Proxy == "function") {
												return !0;
											}
											try {
												return (
													Boolean.prototype.valueOf.call(
														Reflect.construct(Boolean, [], function () {}),
													), !0
												);
											} catch {
												return !1;
											}
										}(), function () {
										var l, u = We(o);
										if (i) {
											var c = We(this).constructor;
											l = Reflect.construct(u, arguments, c);
										} else {
											l = u.apply(this, arguments);
										}
										return Ho(this, l);
									}
								);
							function a() {
								return (br(this, a), s.apply(this, arguments));
							}
							return (
								wr(
									a,
									[
										{
											key: "_defaults",
											get: function () {
												return n.defaults;
											},
										},
										{
											key: "set",
											value: function (l) {
												return (
													hn(We(a.prototype), "set", this).call(this, l), n.fire(
														"interactable:set",
														{ options: l, interactable: this },
													), this
												);
											},
										},
										{
											key: "unset",
											value: function () {
												hn(We(a.prototype), "unset", this).call(this), n.interactables.list.splice(
													n.interactables.list.indexOf(this),
													1,
												), n.fire("interactable:unset", { interactable: this });
											},
										},
									],
								), a
							);
						}(Mt.Interactable);
				}
				return (
					wr(
						e,
						[
							{
								key: "addListeners",
								value: function (t, n) {
									this.listenerMaps.push({ id: n, map: t });
								},
							},
							{
								key: "fire",
								value: function (t, n) {
									for (var r = 0; r < this.listenerMaps.length; r++) {
										var o = this.listenerMaps[r].map[t];
										if (o && o(n, this, t) === !1) {
											return !1;
										}
									}
								},
							},
							{
								key: "init",
								value: function (t) {
									return this.isInitialized ? this : _r(this, t);
								},
							},
							{
								key: "pluginIsInstalled",
								value: function (t) {
									return this._plugins.map[t.id] || this._plugins.list.indexOf(
										t,
									) !== -1;
								},
							},
							{
								key: "usePlugin",
								value: function (t, n) {
									if (!this.isInitialized) {
										return this;
									}
									if (this.pluginIsInstalled(t)) {
										return this;
									}
									if (
										t.id && (this._plugins.map[t.id] = t), this._plugins.list.push(
											t,
										), t.install && t.install(this, n), t.listeners && t.before
									) {
										for (
											var r = 0,
												o = this.listenerMaps.length,
												i = t.before.reduce(
													function (a, l) {
														return (a[l] = !0, a[Pr(l)] = !0, a);
													},
													{},
												);
											r < o;
											r++
										) {
											var s = this.listenerMaps[r].id;
											if (i[s] || i[Pr(s)]) {
												break;
											}
										}
										this.listenerMaps.splice(
											r,
											0,
											{ id: t.id, map: t.listeners },
										);
									} else {
										t.listeners && this.listenerMaps.push({
											id: t.id,
											map: t.listeners,
										});
									}
									return this;
								},
							},
							{
								key: "addDocument",
								value: function (t, n) {
									if (this.getDocIndex(t) !== -1) {
										return !1;
									}
									var r = _.getWindow(t);
									n = n ? (0, w.default)({}, n) : {}, this.documents.push({
										doc: t,
										options: n,
									}), this.events.documents.push(t), t !== this.document && this.events.add(
										r,
										"unload",
										this.onWindowUnload,
									), this.fire(
										"scope:add-document",
										{ doc: t, window: r, scope: this, options: n },
									);
								},
							},
							{
								key: "removeDocument",
								value: function (t) {
									var n = this.getDocIndex(t),
										r = _.getWindow(t),
										o = this.documents[n].options;
									this.events.remove(r, "unload", this.onWindowUnload), this.documents.splice(
										n,
										1,
									), this.events.documents.splice(n, 1), this.fire(
										"scope:remove-document",
										{ doc: t, window: r, scope: this, options: o },
									);
								},
							},
							{
								key: "getDocIndex",
								value: function (t) {
									for (var n = 0; n < this.documents.length; n++) if (
										this.documents[n].doc === t
									) {
										return n;
									}
									return -1;
								},
							},
							{
								key: "getDocOptions",
								value: function (t) {
									var n = this.getDocIndex(t);
									return n === -1 ? null : this.documents[n].options;
								},
							},
							{
								key: "now",
								value: function () {
									return (this.window.Date || Date).now();
								},
							},
						],
					), e
				);
			}();
			function _r(e, t) {
				return (
					e.isInitialized = !0, v.default.window(t) && _.init(t), F.default.init(
						t,
					), Z.default.init(t), se.default.init(t), e.window = t, e.document =
						t.document, e.usePlugin(At.default), e.usePlugin(kt.default), e
				);
			}
			function Pr(e) {
				return e && e.replace(/\/.*$/, "");
			}
			at.Scope = Ko;
			var G = {};
			Object.defineProperty(G, "__esModule", { value: !0 }), G.default = void 0;
			var Or = new at.Scope(), Zo = Or.interactStatic;
			G.default = Zo;
			var Jo = typeof globalThis < "u"
				? globalThis
				: typeof window < "u"
					? window
					: void 0;
			Or.init(Jo);
			var Rt = {};
			Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.default =
				void 0, Rt.default = function () {};
			var Ct = {};
			Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.default =
				void 0, Ct.default = function () {};
			var zt = {};
			function Er(e, t) {
				return function (n) {
					if (Array.isArray(n)) {
						return n;
					}
				}(e) ||
				function (n, r) {
					if (typeof Symbol < "u" && (Symbol.iterator in Object(n))) {
						var o = [], i = !0, s = !1, a = void 0;
						try {
							for (
								var l, u = n[Symbol.iterator]();
								!(i = (l = u.next()).done) && (
									o.push(l.value), !r || o.length !== r
								);
								i = !0
							);
						} catch (c) {
							s = !0, a = c;
						} finally {
							try {
								i || u.return == null || u.return();
							} finally {
								if (s) {
									throw a;
								}
							}
						}
						return o;
					}
				}(e, t) ||
				function (n, r) {
					if (n) {
						if (typeof n == "string") {
							return Sr(n, r);
						}
						var o = Object.prototype.toString.call(n).slice(8, -1);
						return (
							o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set"
								? Array.from(n)
								: o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
									o,
								)
									? Sr(n, r)
									: void 0
						);
					}
				}(e, t) ||
				function () {
					throw new TypeError(
						`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`,
					);
				}();
			}
			function Sr(e, t) {
				(t == null || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			Object.defineProperty(zt, "__esModule", { value: !0 }), zt.default =
				void 0, zt.default =
				function (e) {
					var t = [
						["x", "y"],
						["left", "top"],
						["right", "bottom"],
						["width", "height"],
					].filter(function (r) {
						var o = Er(r, 2), i = o[0], s = o[1];
						return (i in e) || (s in e);
					}),
						n = function (r, o) {
							for (
								var i = e.range,
									s = e.limits,
									a = s === void 0 ? {
										left: -1 / 0,
										right: 1 / 0,
										top: -1 / 0,
										bottom: 1 / 0,
									} : s,
									l = e.offset,
									u = l === void 0 ? { x: 0, y: 0 } : l,
									c = { range: i, grid: e, x: null, y: null },
									f = 0;
								f < t.length;
								f++
							) {
								var p = Er(t[f], 2),
									h = p[0],
									d = p[1],
									g = Math.round((r - u.x) / e[h]),
									m = Math.round((o - u.y) / e[d]);
								c[h] = Math.max(a.left, Math.min(a.right, (g * e[h]) + u.x)), c[d] =
									Math.max(a.top, Math.min(a.bottom, (m * e[d]) + u.y));
							}
							return c;
						};
					return (n.grid = e, n.coordFields = t, n);
				};
			var st = {};
			Object.defineProperty(st, "__esModule", { value: !0 }), Object.defineProperty(
				st,
				"edgeTarget",
				{
					enumerable: !0,
					get: function () {
						return Rt.default;
					},
				},
			), Object.defineProperty(
				st,
				"elements",
				{
					enumerable: !0,
					get: function () {
						return Ct.default;
					},
				},
			), Object.defineProperty(
				st,
				"grid",
				{
					enumerable: !0,
					get: function () {
						return zt.default;
					},
				},
			);
			var Ft = {};
			Object.defineProperty(Ft, "__esModule", { value: !0 }), Ft.default =
				void 0;
			var Qo = {
				id: "snappers",
				install: function (e) {
					var t = e.interactStatic;
					t.snappers = (0, w.default)(t.snappers || {}, st), t.createSnapGrid =
						t.snappers.grid;
				},
			};
			Ft.default = Qo;
			var Le = {};
			function Tr(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (
						r =
							r.filter(function (o) {
								return Object.getOwnPropertyDescriptor(e, o).enumerable;
							})
					), n.push.apply(n, r);
				}
				return n;
			}
			function gn(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t] != null ? arguments[t] : {};
					t % 2
						? Tr(Object(n), !0)
							.forEach(function (r) {
								ei(e, r, n[r]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: Tr(Object(n))
								.forEach(function (r) {
									Object.defineProperty(
										e,
										r,
										Object.getOwnPropertyDescriptor(n, r),
									);
								});
				}
				return e;
			}
			function ei(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(Le, "__esModule", { value: !0 }), Le.aspectRatio =
				Le.default = void 0;
			var Mr = {
				start: function (e) {
					var t = e.state,
						n = e.rect,
						r = e.edges,
						o = e.pageCoords,
						i = t.options.ratio,
						s = t.options,
						a = s.equalDelta,
						l = s.modifiers;
					i === "preserve" && (i = n.width / n.height), t.startCoords =
						(0, w.default)({}, o), t.startRect = (0, w.default)({}, n), t.ratio =
						i, t.equalDelta = a;
					var u = t.linkedEdges =
						{
							top: r.top || (r.left && !r.bottom),
							left: r.left || (r.top && !r.right),
							bottom: r.bottom || (r.right && !r.top),
							right: r.right || (r.bottom && !r.left),
						};
					if (t.xIsPrimaryAxis = !(!r.left && !r.right), t.equalDelta) {
						t.edgeSign = (u.left ? 1 : -1) * (u.top ? 1 : -1);
					} else {
						var c = t.xIsPrimaryAxis ? u.top : u.left;
						t.edgeSign = c ? -1 : 1;
					}
					if ((0, w.default)(e.edges, u), l && l.length) {
						var f = new Me.default(e.interaction);
						f.copyFrom(e.interaction.modification), f.prepareStates(l), t.subModification =
							f, f.startAll(gn({}, e));
					}
				},
				set: function (e) {
					var t = e.state,
						n = e.rect,
						r = e.coords,
						o = (0, w.default)({}, r),
						i = t.equalDelta ? ti : ni;
					if (i(t, t.xIsPrimaryAxis, r, n), !t.subModification) {
						return null;
					}
					var s = (0, w.default)({}, n);
					(0, R.addEdges)(t.linkedEdges, s, { x: r.x - o.x, y: r.y - o.y });
					var a = t.subModification.setAll(
						gn(
							gn({}, e),
							{},
							{
								rect: s,
								edges: t.linkedEdges,
								pageCoords: r,
								prevCoords: r,
								prevRect: s,
							},
						),
					),
						l = a.delta;
					return (
						a.changed && (
							i(t, Math.abs(l.x) > Math.abs(l.y), a.coords, a.rect), (
								0, w.default
							)(r, a.coords)
						), a.eventProps
					);
				},
				defaults: {
					ratio: "preserve",
					equalDelta: !1,
					modifiers: [],
					enabled: !1,
				},
			};
			function ti(e, t, n) {
				var r = e.startCoords, o = e.edgeSign;
				t ? n.y = r.y + ((n.x - r.x) * o) : n.x = r.x + ((n.y - r.y) * o);
			}
			function ni(e, t, n, r) {
				var o = e.startRect, i = e.startCoords, s = e.ratio, a = e.edgeSign;
				if (t) {
					var l = r.width / s;
					n.y = i.y + ((l - o.height) * a);
				} else {
					var u = r.height * s;
					n.x = i.x + ((u - o.width) * a);
				}
			}
			Le.aspectRatio = Mr;
			var ri = (0, V.makeModifier)(Mr, "aspectRatio");
			Le.default = ri;
			var Ie = {};
			Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.default =
				void 0;
			var jr = function () {};
			jr._defaults = {};
			var oi = jr;
			Ie.default = oi;
			var yn = {};
			Object.defineProperty(yn, "__esModule", { value: !0 }), Object.defineProperty(
				yn,
				"default",
				{
					enumerable: !0,
					get: function () {
						return Ie.default;
					},
				},
			);
			var H = {};
			function mn(e, t, n) {
				return v.default.func(e) ? R.resolveRectLike(
					e,
					t.interactable,
					t.element,
					[n.x, n.y, t],
				) : R.resolveRectLike(e, t.interactable, t.element);
			}
			Object.defineProperty(H, "__esModule", { value: !0 }), H.getRestrictionRect =
				mn, H.restrict = H.default = void 0;
			var kr = {
				start: function (e) {
					var t = e.rect,
						n = e.startOffset,
						r = e.state,
						o = e.interaction,
						i = e.pageCoords,
						s = r.options,
						a = s.elementRect,
						l = (0, w.default)(
							{ left: 0, top: 0, right: 0, bottom: 0 },
							s.offset || {},
						);
					if (t && a) {
						var u = mn(s.restriction, o, i);
						if (u) {
							var c =
								u.right - u.left - t.width,
								f =
									u.bottom - u.top - t.height;
							c < 0 && (l.left += c, l.right += c), f < 0 && (
								l.top += f, l.bottom += f
							);
						}
						l.left += n.left - (t.width * a.left), l.top +=
							n.top - (t.height * a.top), l.right +=
							n.right - (t.width * (1 - a.right)), l.bottom +=
							n.bottom - (t.height * (1 - a.bottom));
					}
					r.offset = l;
				},
				set: function (e) {
					var t = e.coords,
						n = e.interaction,
						r = e.state,
						o = r.options,
						i = r.offset,
						s = mn(o.restriction, n, t);
					if (s) {
						var a = R.xywhToTlbr(s);
						t.x = Math.max(Math.min(a.right - i.right, t.x), a.left + i.left), t.y =
							Math.max(Math.min(a.bottom - i.bottom, t.y), a.top + i.top);
					}
				},
				defaults: {
					restriction: null,
					elementRect: null,
					offset: null,
					endOnly: !1,
					enabled: !1,
				},
			};
			H.restrict = kr;
			var ii = (0, V.makeModifier)(kr, "restrict");
			H.default = ii;
			var ue = {};
			Object.defineProperty(ue, "__esModule", { value: !0 }), ue.restrictEdges =
				ue.default = void 0;
			var Ir = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 },
				Dr = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
			function Ar(e, t) {
				for (
					var n = ["top", "left", "bottom", "right"], r = 0;
					r < n.length;
					r++
				) {
					var o = n[r];
					(o in e) || (e[o] = t[o]);
				}
				return e;
			}
			var Rr = {
				noInner: Ir,
				noOuter: Dr,
				start: function (e) {
					var t,
						n = e.interaction,
						r = e.startOffset,
						o = e.state,
						i = o.options;
					if (i) {
						var s = (0, H.getRestrictionRect)(i.offset, n, n.coords.start.page);
						t = R.rectToXY(s);
					}
					t = t || { x: 0, y: 0 }, o.offset =
						{
							top: t.y + r.top,
							left: t.x + r.left,
							bottom: t.y - r.bottom,
							right: t.x - r.right,
						};
				},
				set: function (e) {
					var t = e.coords,
						n = e.edges,
						r = e.interaction,
						o = e.state,
						i = o.offset,
						s = o.options;
					if (n) {
						var a = (0, w.default)({}, t),
							l = (0, H.getRestrictionRect)(s.inner, r, a) || {},
							u = (0, H.getRestrictionRect)(s.outer, r, a) || {};
						Ar(l, Ir), Ar(u, Dr), n.top ? t.y =
							Math.min(Math.max(u.top + i.top, a.y), l.top + i.top) : n.bottom && (
							t.y =
								Math.max(
									Math.min(u.bottom + i.bottom, a.y),
									l.bottom + i.bottom,
								)
						), n.left ? t.x =
							Math.min(Math.max(u.left + i.left, a.x), l.left + i.left) : n.right && (
							t.x =
								Math.max(Math.min(u.right + i.right, a.x), l.right + i.right)
						);
					}
				},
				defaults: {
					inner: null,
					outer: null,
					offset: null,
					endOnly: !1,
					enabled: !1,
				},
			};
			ue.restrictEdges = Rr;
			var ai = (0, V.makeModifier)(Rr, "restrictEdges");
			ue.default = ai;
			var Ue = {};
			Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.restrictRect =
				Ue.default = void 0;
			var si = (0, w.default)(
				{
					get elementRect() {
						return { top: 0, left: 0, bottom: 1, right: 1 };
					},
					set elementRect(e) {},
				},
				H.restrict.defaults,
			),
				Cr = { start: H.restrict.start, set: H.restrict.set, defaults: si };
			Ue.restrictRect = Cr;
			var li = (0, V.makeModifier)(Cr, "restrictRect");
			Ue.default = li;
			var Ve = {};
			Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.restrictSize =
				Ve.default = void 0;
			var ui = { width: -1 / 0, height: -1 / 0 },
				ci = { width: 1 / 0, height: 1 / 0 },
				zr = {
					start: function (e) {
						return ue.restrictEdges.start(e);
					},
					set: function (e) {
						var t = e.interaction,
							n = e.state,
							r = e.rect,
							o = e.edges,
							i = n.options;
						if (o) {
							var s = R.tlbrToXywh(
								(0, H.getRestrictionRect)(i.min, t, e.coords),
							) || ui,
								a = R.tlbrToXywh((0, H.getRestrictionRect)(i.max, t, e.coords)) || ci;
							n.options =
								{
									endOnly: i.endOnly,
									inner: (0, w.default)({}, ue.restrictEdges.noInner),
									outer: (0, w.default)({}, ue.restrictEdges.noOuter),
								}, o.top ? (
								n.options.inner.top = r.bottom - s.height, n.options.outer.top =
									r.bottom - a.height
							) : o.bottom && (
								n.options.inner.bottom = r.top + s.height, n.options.outer.bottom =
									r.top + a.height
							), o.left ? (
								n.options.inner.left = r.right - s.width, n.options.outer.left =
									r.right - a.width
							) : o.right && (
								n.options.inner.right = r.left + s.width, n.options.outer.right =
									r.left + a.width
							), ue.restrictEdges.set(e), n.options = i;
						}
					},
					defaults: { min: null, max: null, endOnly: !1, enabled: !1 },
				};
			Ve.restrictSize = zr;
			var fi = (0, V.makeModifier)(zr, "restrictSize");
			Ve.default = fi;
			var bn = {};
			Object.defineProperty(bn, "__esModule", { value: !0 }), Object.defineProperty(
				bn,
				"default",
				{
					enumerable: !0,
					get: function () {
						return Ie.default;
					},
				},
			);
			var Pe = {};
			Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.snap =
				Pe.default = void 0;
			var Fr = {
				start: function (e) {
					var t,
						n = e.interaction,
						r = e.interactable,
						o = e.element,
						i = e.rect,
						s = e.state,
						a = e.startOffset,
						l = s.options,
						u = l.offsetWithOrigin ? function (p) {
							var h = p.interaction.element;
							return (0, R.rectToXY)(
								(0, R.resolveRectLike)(p.state.options.origin, null, null, [h]),
							) || (0, Ee.default)(
								p.interactable,
								h,
								p.interaction.prepared.name,
							);
						}(e) : { x: 0, y: 0 };
					if (l.offset === "startCoords") {
						t = { x: n.coords.start.page.x, y: n.coords.start.page.y };
					} else {
						var c = (0, R.resolveRectLike)(l.offset, r, o, [n]);
						(t = (0, R.rectToXY)(c) || { x: 0, y: 0 }).x += u.x, t.y += u.y;
					}
					var f = l.relativePoints;
					s.offsets =
						i && f && f.length ? f.map(
							function (p, h) {
								return {
									index: h,
									relativePoint: p,
									x: a.left - (i.width * p.x) + t.x,
									y: a.top - (i.height * p.y) + t.y,
								};
							},
						) : [{ index: 0, relativePoint: null, x: t.x, y: t.y }];
				},
				set: function (e) {
					var t = e.interaction,
						n = e.coords,
						r = e.state,
						o = r.options,
						i = r.offsets,
						s = (0, Ee.default)(t.interactable, t.element, t.prepared.name),
						a = (0, w.default)({}, n),
						l = [];
					o.offsetWithOrigin || (a.x -= s.x, a.y -= s.y);
					for (var u = 0; u < i.length; u++) for (
						var c = i[u],
							f = a.x - c.x,
							p = a.y - c.y,
							h = 0,
							d = o.targets.length;
						h < d;
						h++
					) {
						var g, m = o.targets[h];
						(g = v.default.func(m) ? m(f, p, t._proxy, c, h) : m) && l.push({
							x: (v.default.number(g.x) ? g.x : f) + c.x,
							y: (v.default.number(g.y) ? g.y : p) + c.y,
							range: v.default.number(g.range) ? g.range : o.range,
							source: m,
							index: h,
							offset: c,
						});
					}
					for (
						var y = {
							target: null,
							inRange: !1,
							distance: 0,
							range: 0,
							delta: { x: 0, y: 0 },
						},
							b = 0;
						b < l.length;
						b++
					) {
						var O = l[b],
							S = O.range,
							M = O.x - a.x,
							C = O.y - a.y,
							T = (0, be.default)(M, C),
							I = T <= S;
						S === (1 / 0) && y.inRange && y.range !== (1 / 0) && (I = !1), (
							y.target && !(
								I
									? y.inRange && S !== (1 / 0)
										? (T / S) < (y.distance / y.range)
										: (S === (1 / 0) && y.range !== (1 / 0)) || T < y.distance
									: !y.inRange && T < y.distance
							)
						) || (
							y.target = O, y.distance = T, y.range = S, y.inRange = I, y.delta.x =
								M, y.delta.y = C
						);
					}
					return (
						y.inRange && (n.x = y.target.x, n.y = y.target.y), r.closest = y, y
					);
				},
				defaults: {
					range: 1 / 0,
					targets: null,
					offset: null,
					offsetWithOrigin: !0,
					origin: null,
					relativePoints: null,
					endOnly: !1,
					enabled: !1,
				},
			};
			Pe.snap = Fr;
			var di = (0, V.makeModifier)(Fr, "snap");
			Pe.default = di;
			var he = {};
			function Xr(e, t) {
				(t == null || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			Object.defineProperty(he, "__esModule", { value: !0 }), he.snapSize =
				he.default = void 0;
			var Yr = {
				start: function (e) {
					var t = e.state, n = e.edges, r = t.options;
					if (!n) {
						return null;
					}
					e.state =
						{
							options: {
								targets: null,
								relativePoints: [{ x: n.left ? 0 : 1, y: n.top ? 0 : 1 }],
								offset: r.offset || "self",
								origin: { x: 0, y: 0 },
								range: r.range,
							},
						}, t.targetFields =
						t.targetFields || [["width", "height"], ["x", "y"]], Pe.snap.start(
						e,
					), t.offsets = e.state.offsets, e.state = t;
				},
				set: function (e) {
					var t,
						n,
						r = e.interaction,
						o = e.state,
						i = e.coords,
						s = o.options,
						a = o.offsets,
						l = { x: i.x - a[0].x, y: i.y - a[0].y };
					o.options = (0, w.default)({}, s), o.options.targets = [];
					for (var u = 0; u < (s.targets || []).length; u++) {
						var c = (s.targets || [])[u], f = void 0;
						if (f = v.default.func(c) ? c(l.x, l.y, r) : c) {
							for (var p = 0; p < o.targetFields.length; p++) {
								var h = (
									t = o.targetFields[p], n = 2, function (y) {
										if (Array.isArray(y)) {
											return y;
										}
									}(t) ||
										function (y, b) {
											if (typeof Symbol < "u" && (Symbol.iterator in Object(y))) {
												var O = [], S = !0, M = !1, C = void 0;
												try {
													for (
														var T, I = y[Symbol.iterator]();
														!(S = (T = I.next()).done) && (
															O.push(T.value), !b || O.length !== b
														);
														S = !0
													);
												} catch (re) {
													M = !0, C = re;
												} finally {
													try {
														S || I.return == null || I.return();
													} finally {
														if (M) {
															throw C;
														}
													}
												}
												return O;
											}
										}(t, n) ||
										function (y, b) {
											if (y) {
												if (typeof y == "string") {
													return Xr(y, b);
												}
												var O = Object.prototype.toString.call(y).slice(8, -1);
												return (
													O === "Object" &&
														y.constructor &&
														(O = y.constructor.name), O === "Map" || O === "Set"
														? Array.from(y)
														: O === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
															O,
														)
															? Xr(y, b)
															: void 0
												);
											}
										}(t, n) ||
										function () {
											throw new TypeError(
												`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`,
											);
										}()
								),
									d = h[0],
									g = h[1];
								if ((d in f) || (g in f)) {
									f.x = f[d], f.y = f[g];
									break;
								}
							}
							o.options.targets.push(f);
						}
					}
					var m = Pe.snap.set(e);
					return (o.options = s, m);
				},
				defaults: {
					range: 1 / 0,
					targets: null,
					offset: null,
					endOnly: !1,
					enabled: !1,
				},
			};
			he.snapSize = Yr;
			var pi = (0, V.makeModifier)(Yr, "snapSize");
			he.default = pi;
			var Ne = {};
			Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.snapEdges =
				Ne.default = void 0;
			var Br = {
				start: function (e) {
					var t = e.edges;
					return t ? (
						e.state.targetFields =
							e.state.targetFields || [
								[t.left ? "left" : "right", t.top ? "top" : "bottom"],
							], he.snapSize.start(e)
					) : null;
				},
				set: he.snapSize.set,
				defaults: (0, w.default)(
					(0, Te.default)(he.snapSize.defaults),
					{ targets: null, range: null, offset: { x: 0, y: 0 } },
				),
			};
			Ne.snapEdges = Br;
			var vi = (0, V.makeModifier)(Br, "snapEdges");
			Ne.default = vi;
			var xn = {};
			Object.defineProperty(xn, "__esModule", { value: !0 }), Object.defineProperty(
				xn,
				"default",
				{
					enumerable: !0,
					get: function () {
						return Ie.default;
					},
				},
			);
			var wn = {};
			Object.defineProperty(wn, "__esModule", { value: !0 }), Object.defineProperty(
				wn,
				"default",
				{
					enumerable: !0,
					get: function () {
						return Ie.default;
					},
				},
			);
			var qe = {};
			Object.defineProperty(qe, "__esModule", { value: !0 }), qe.default =
				void 0;
			var hi = {
				aspectRatio: Le.default,
				restrictEdges: ue.default,
				restrict: H.default,
				restrictRect: Ue.default,
				restrictSize: Ve.default,
				snapEdges: Ne.default,
				snap: Pe.default,
				snapSize: he.default,
				spring: xn.default,
				avoid: yn.default,
				transform: wn.default,
				rubberband: bn.default,
			};
			qe.default = hi;
			var Xt = {};
			Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.default =
				void 0;
			var gi = {
				id: "modifiers",
				install: function (e) {
					var t = e.interactStatic;
					for (
						var n
						in
						e.usePlugin(V.default), e.usePlugin(Ft.default), t.modifiers =
							qe.default, qe.default
					) {
						var r = qe.default[n], o = r._defaults, i = r._methods;
						o._methods = i, e.defaults.perAction[n] = o;
					}
				},
			};
			Xt.default = gi;
			var De = {};
			function Wr(e) {
				return (
					Wr =
						typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (
							t,
						) {
							return typeof t;
						} : function (t) {
							return t &&
								typeof Symbol == "function" &&
								t.constructor === Symbol &&
								t !== Symbol.prototype ? "symbol" : typeof t;
						}
				)(e);
			}
			function yi(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function Lr(e, t) {
				return (
					Lr =
						Object.setPrototypeOf || function (n, r) {
							return (n.__proto__ = r, n);
						}
				)(e, t);
			}
			function mi(e, t) {
				return !t || (Wr(t) !== "object" && typeof t != "function") ? Q(e) : t;
			}
			function Q(e) {
				if (e === void 0) {
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called",
					);
				}
				return e;
			}
			function _n(e) {
				return (
					_n =
						Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
						}
				)(e);
			}
			function le(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(De, "__esModule", { value: !0 }), De.PointerEvent =
				De.default = void 0;
			var bi = function (e) {
				(
					function (a, l) {
						if (typeof l != "function" && l !== null) {
							throw new TypeError(
								"Super expression must either be null or a function",
							);
						}
						a.prototype =
							Object.create(
								l && l.prototype,
								{ constructor: { value: a, writable: !0, configurable: !0 } },
							), l && Lr(a, l);
					}
				)(s, e);
				var t,
					n,
					r,
					o,
					i = (
						r = s, o =
							function () {
								if (
									typeof Reflect > "u" ||
									!Reflect.construct ||
									Reflect.construct.sham
								) {
									return !1;
								}
								if (typeof Proxy == "function") {
									return !0;
								}
								try {
									return (
										Boolean.prototype.valueOf.call(
											Reflect.construct(Boolean, [], function () {}),
										), !0
									);
								} catch {
									return !1;
								}
							}(), function () {
							var a, l = _n(r);
							if (o) {
								var u = _n(this).constructor;
								a = Reflect.construct(l, arguments, u);
							} else {
								a = l.apply(this, arguments);
							}
							return mi(this, a);
						}
					);
				function s(a, l, u, c, f, p) {
					var h;
					if (
						function (m, y) {
							if (!(m instanceof y)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}(this, s), le(Q(h = i.call(this, f)), "type", void 0), le(
							Q(h),
							"originalEvent",
							void 0,
						), le(Q(h), "pointerId", void 0), le(Q(h), "pointerType", void 0), le(
							Q(h),
							"double",
							void 0,
						), le(Q(h), "pageX", void 0), le(Q(h), "pageY", void 0), le(
							Q(h),
							"clientX",
							void 0,
						), le(Q(h), "clientY", void 0), le(Q(h), "dt", void 0), le(
							Q(h),
							"eventable",
							void 0,
						), x.pointerExtend(Q(h), u), u !== l && x.pointerExtend(Q(h), l), h.timeStamp =
							p, h.originalEvent = u, h.type = a, h.pointerId =
							x.getPointerId(l), h.pointerType = x.getPointerType(l), h.target =
							c, h.currentTarget = null, a === "tap"
					) {
						var d = f.getPointerIndex(l);
						h.dt = h.timeStamp - f.pointers[d].downTime;
						var g = h.timeStamp - f.tapTime;
						h.double =
							!!(
								f.prevTap &&
									f.prevTap.type !== "doubletap" &&
									f.prevTap.target === h.target &&
									g < 500
							);
					} else {
						a === "doubletap" && (h.dt = l.timeStamp - f.tapTime);
					}
					return h;
				}
				return (
					t = s, (
						n =
							[
								{
									key: "_subtractOrigin",
									value: function (a) {
										var l = a.x, u = a.y;
										return (
											this.pageX -= l, this.pageY -= u, this.clientX -= l, this.clientY -=
												u, this
										);
									},
								},
								{
									key: "_addOrigin",
									value: function (a) {
										var l = a.x, u = a.y;
										return (
											this.pageX += l, this.pageY += u, this.clientX += l, this.clientY +=
												u, this
										);
									},
								},
								{
									key: "preventDefault",
									value: function () {
										this.originalEvent.preventDefault();
									},
								},
							]
					) && yi(t.prototype, n), s
				);
			}(Fe.BaseEvent);
			De.PointerEvent = De.default = bi;
			var lt = {};
			Object.defineProperty(lt, "__esModule", { value: !0 }), lt.default =
				void 0;
			var Yt = {
				id: "pointer-events/base",
				before: ["inertia", "modifiers", "auto-start", "actions"],
				install: function (e) {
					e.pointerEvents = Yt, e.defaults.actions.pointerEvents = Yt.defaults, (
						0, w.default
					)(e.actions.phaselessTypes, Yt.types);
				},
				listeners: {
					"interactions:new": function (e) {
						var t = e.interaction;
						t.prevTap = null, t.tapTime = 0;
					},
					"interactions:update-pointer": function (e) {
						var t = e.down, n = e.pointerInfo;
						(!t && n.hold) || (n.hold = { duration: 1 / 0, timeout: null });
					},
					"interactions:move": function (e, t) {
						var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget;
						e.duplicate ||
							(n.pointerIsDown && !n.pointerWasMoved) ||
							(
								n.pointerIsDown && Pn(e), Oe(
									{
										interaction: n,
										pointer: r,
										event: o,
										eventTarget: i,
										type: "move",
									},
									t,
								)
							);
					},
					"interactions:down": function (e, t) {
						(
							function (n, r) {
								for (
									var o = n.interaction,
										i = n.pointer,
										s = n.event,
										a = n.eventTarget,
										l = n.pointerIndex,
										u = o.pointers[l].hold,
										c = P.getPath(a),
										f = {
											interaction: o,
											pointer: i,
											event: s,
											eventTarget: a,
											type: "hold",
											targets: [],
											path: c,
											node: null,
										},
										p = 0;
									p < c.length;
									p++
								) {
									var h = c[p];
									f.node = h, r.fire("pointerEvents:collect-targets", f);
								}
								if (f.targets.length) {
									for (var d = 1 / 0, g = 0; g < f.targets.length; g++) {
										var m = f.targets[g].eventable.options.holdDuration;
										m < d && (d = m);
									}
									u.duration = d, u.timeout =
										setTimeout(
											function () {
												Oe(
													{
														interaction: o,
														eventTarget: a,
														pointer: i,
														event: s,
														type: "hold",
													},
													r,
												);
											},
											d,
										);
								}
							}
						)(e, t), Oe(e, t);
					},
					"interactions:up": function (e, t) {
						Pn(e), Oe(e, t), function (n, r) {
							var o = n.interaction,
								i = n.pointer,
								s = n.event,
								a = n.eventTarget;
							o.pointerWasMoved || Oe(
								{
									interaction: o,
									eventTarget: a,
									pointer: i,
									event: s,
									type: "tap",
								},
								r,
							);
						}(e, t);
					},
					"interactions:cancel": function (e, t) {
						Pn(e), Oe(e, t);
					},
				},
				PointerEvent: De.PointerEvent,
				fire: Oe,
				collectEventTargets: Ur,
				defaults: {
					holdDuration: 600,
					ignoreFrom: null,
					allowFrom: null,
					origin: { x: 0, y: 0 },
				},
				types: {
					down: !0,
					move: !0,
					up: !0,
					cancel: !0,
					tap: !0,
					doubletap: !0,
					hold: !0,
				},
			};
			function Oe(e, t) {
				var n = e.interaction,
					r = e.pointer,
					o = e.event,
					i = e.eventTarget,
					s = e.type,
					a = e.targets,
					l = a === void 0 ? Ur(e, t) : a,
					u = new De.PointerEvent(s, r, o, i, n, t.now());
				t.fire("pointerEvents:new", { pointerEvent: u });
				for (
					var c = {
						interaction: n,
						pointer: r,
						event: o,
						eventTarget: i,
						targets: l,
						type: s,
						pointerEvent: u,
					},
						f = 0;
					f < l.length;
					f++
				) {
					var p = l[f];
					for (var h in p.props || {}) u[h] = p.props[h];
					var d = (0, Ee.default)(p.eventable, p.node);
					if (
						u._subtractOrigin(d), u.eventable = p.eventable, u.currentTarget =
							p.node, p.eventable.fire(u), u._addOrigin(d), u.immediatePropagationStopped || (
							u.propagationStopped &&
								(f + 1) < l.length &&
								l[f + 1].node !== u.currentTarget
						)
					) {
						break;
					}
				}
				if (t.fire("pointerEvents:fired", c), s === "tap") {
					var g = u.double ? Oe(
						{
							interaction: n,
							pointer: r,
							event: o,
							eventTarget: i,
							type: "doubletap",
						},
						t,
					) : u;
					n.prevTap = g, n.tapTime = g.timeStamp;
				}
				return u;
			}
			function Ur(e, t) {
				var n = e.interaction,
					r = e.pointer,
					o = e.event,
					i = e.eventTarget,
					s = e.type,
					a = n.getPointerIndex(r),
					l = n.pointers[a];
				if (s === "tap" && (n.pointerWasMoved || !l || l.downTarget !== i)) {
					return [];
				}
				for (
					var u = P.getPath(i),
						c = {
							interaction: n,
							pointer: r,
							event: o,
							eventTarget: i,
							type: s,
							path: u,
							targets: [],
							node: null,
						},
						f = 0;
					f < u.length;
					f++
				) {
					var p = u[f];
					c.node = p, t.fire("pointerEvents:collect-targets", c);
				}
				return (
					s === "hold" && (
						c.targets =
							c.targets.filter(function (h) {
								var d;
								return h.eventable.options.holdDuration === (
									(d = n.pointers[a]) == null ? void 0 : d.hold.duration
								);
							})
					), c.targets
				);
			}
			function Pn(e) {
				var t = e.interaction, n = e.pointerIndex, r = t.pointers[n].hold;
				r && r.timeout && (clearTimeout(r.timeout), r.timeout = null);
			}
			var xi = Yt;
			lt.default = xi;
			var Bt = {};
			function wi(e) {
				var t = e.interaction;
				t.holdIntervalHandle && (
					clearInterval(t.holdIntervalHandle), t.holdIntervalHandle = null
				);
			}
			Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.default =
				void 0;
			var _i = {
				id: "pointer-events/holdRepeat",
				install: function (e) {
					e.usePlugin(lt.default);
					var t = e.pointerEvents;
					t.defaults.holdRepeatInterval = 0, t.types.holdrepeat =
						e.actions.phaselessTypes.holdrepeat = !0;
				},
				listeners: ["move", "up", "cancel", "endall"].reduce(
					function (e, t) {
						return (e["pointerEvents:".concat(t)] = wi, e);
					},
					{
						"pointerEvents:new": function (e) {
							var t = e.pointerEvent;
							t.type === "hold" && (t.count = (t.count || 0) + 1);
						},
						"pointerEvents:fired": function (e, t) {
							var n = e.interaction,
								r = e.pointerEvent,
								o = e.eventTarget,
								i = e.targets;
							if (r.type === "hold" && i.length) {
								var s = i[0].eventable.options.holdRepeatInterval;
								s <= 0 || (
									n.holdIntervalHandle =
										setTimeout(
											function () {
												t.pointerEvents.fire(
													{
														interaction: n,
														eventTarget: o,
														type: "hold",
														pointer: r,
														event: r,
													},
													t,
												);
											},
											s,
										)
								);
							}
						},
					},
				),
			};
			Bt.default = _i;
			var Wt = {};
			function Pi(e) {
				return ((0, w.default)(this.events.options, e), this);
			}
			Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.default =
				void 0;
			var Oi = {
				id: "pointer-events/interactableTargets",
				install: function (e) {
					var t = e.Interactable;
					t.prototype.pointerEvents = Pi;
					var n = t.prototype._backCompatOption;
					t.prototype._backCompatOption =
						function (r, o) {
							var i = n.call(this, r, o);
							return (i === this && (this.events.options[r] = o), i);
						};
				},
				listeners: {
					"pointerEvents:collect-targets": function (e, t) {
						var n = e.targets, r = e.node, o = e.type, i = e.eventTarget;
						t.interactables.forEachMatch(
							r,
							function (s) {
								var a = s.events, l = a.options;
								a.types[o] &&
									a.types[o].length &&
									s.testIgnoreAllow(l, r, i) &&
									n.push({ node: r, eventable: a, props: { interactable: s } });
							},
						);
					},
					"interactable:new": function (e) {
						var t = e.interactable;
						t.events.getRect =
							function (n) {
								return t.getRect(n);
							};
					},
					"interactable:set": function (e, t) {
						var n = e.interactable, r = e.options;
						(0, w.default)(n.events.options, t.pointerEvents.defaults), (
							0, w.default
						)(n.events.options, r.pointerEvents || {});
					},
				},
			};
			Wt.default = Oi;
			var Lt = {};
			Object.defineProperty(Lt, "__esModule", { value: !0 }), Lt.default =
				void 0;
			var Ei = {
				id: "pointer-events",
				install: function (e) {
					e.usePlugin(lt), e.usePlugin(Bt.default), e.usePlugin(Wt.default);
				},
			};
			Lt.default = Ei;
			var ut = {};
			function Vr(e) {
				var t = e.Interactable;
				e.actions.phases.reflow = !0, t.prototype.reflow =
					function (n) {
						return function (r, o, i) {
							for (
								var s = v.default.string(r.target) ? D.from(
									r._context.querySelectorAll(r.target),
								) : [r.target],
									a = i.window.Promise,
									l = a ? [] : null,
									u = function () {
										var f = s[c], p = r.getRect(f);
										if (!p) {
											return "break";
										}
										var h = D.find(
											i.interactions.list,
											function (b) {
												return b.interacting() &&
												b.interactable === r &&
												b.element === f &&
												b.prepared.name === o.name;
											},
										),
											d = void 0;
										if (h) {
											h.move(), l && (
												d =
													h._reflowPromise || new a(function (b) {
														h._reflowResolve = b;
													})
											);
										} else {
											var g = (0, R.tlbrToXywh)(p),
												m = {
													page: { x: g.x, y: g.y },
													client: { x: g.x, y: g.y },
													timeStamp: i.now(),
												},
												y = x.coordsToEvent(m);
											d =
												function (b, O, S, M, C) {
													var T = b.interactions.new({ pointerType: "reflow" }),
														I = {
															interaction: T,
															event: C,
															pointer: C,
															eventTarget: S,
															phase: "reflow",
														};
													T.interactable = O, T.element = S, T.prevEvent = C, T.updatePointer(
														C,
														C,
														S,
														!0,
													), x.setZeroCoords(T.coords.delta), (0, ee.copyAction)(
														T.prepared,
														M,
													), T._doPhase(I);
													var re = b.window.Promise,
														ge = re ? new re(function (On) {
															T._reflowResolve = On;
														}) : void 0;
													return (
														T._reflowPromise = ge, T.start(M, O, S), T._interacting ? (
															T.move(I), T.end(C)
														) : (T.stop(), T._reflowResolve()), T.removePointer(
															C,
															C,
														), ge
													);
												}(i, r, f, o, y);
										}
										l && l.push(d);
									},
									c = 0;
								c < s.length && u() !== "break";
								c++
							);
							return l && a
								.all(l)
								.then(function () {
									return r;
								});
						}(this, n, e);
					};
			}
			Object.defineProperty(ut, "__esModule", { value: !0 }), ut.install = Vr, ut.default =
				void 0;
			var Si = {
				id: "reflow",
				install: Vr,
				listeners: {
					"interactions:stop": function (e, t) {
						var n = e.interaction;
						n.pointerType === "reflow" && (
							n._reflowResolve && n._reflowResolve(), D.remove(
								t.interactions.list,
								n,
							)
						);
					},
				},
			};
			ut.default = Si;
			var ne = { exports: {} };
			function Nr(e) {
				return (
					Nr =
						typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (
							t,
						) {
							return typeof t;
						} : function (t) {
							return t &&
								typeof Symbol == "function" &&
								t.constructor === Symbol &&
								t !== Symbol.prototype ? "symbol" : typeof t;
						}
				)(e);
			}
			Object.defineProperty(ne.exports, "__esModule", { value: !0 }), ne.exports.default =
				void 0, G.default.use(Ye.default), G.default.use(ke.default), G.default.use(
				Lt.default,
			), G.default.use(Be.default), G.default.use(Xt.default), G.default.use(
				_t.default,
			), G.default.use(gt.default), G.default.use(_e.default), G.default.use(
				ut.default,
			);
			var Ti = G.default;
			if (ne.exports.default = Ti, Nr(ne) === "object" && ne) {
				try {
					ne.exports = G.default;
				} catch {}
			}
			G.default.default = G.default, ne = ne.exports;
			var Ae = { exports: {} };
			function qr(e) {
				return (
					qr =
						typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (
							t,
						) {
							return typeof t;
						} : function (t) {
							return t &&
								typeof Symbol == "function" &&
								t.constructor === Symbol &&
								t !== Symbol.prototype ? "symbol" : typeof t;
						}
				)(e);
			}
			Object.defineProperty(Ae.exports, "__esModule", { value: !0 }), Ae.exports.default =
				void 0;
			var Mi = ne.default;
			if (Ae.exports.default = Mi, qr(Ae) === "object" && Ae) {
				try {
					Ae.exports = ne.default;
				} catch {}
			}
			return (ne.default.default = ne.default, Ae.exports);
		});
	}
)(Gr);
var Xi = Ii(Gr.exports), Hr, Ut;
({ recbar: Ut } = ji);
Hr =
	{
		txt: (z) => ({
			mousedown: (L) => {
				var A, _, Y, B, q, v, K, $, oe, ye, me;
				K = document, A = K.createElement.bind(K), v = A("b"), me =
					(ie, Re) => {
						v.style.left = ie + "px", v.style.top = Re + "px";
					}, me(L.clientX, L.clientY), B = "x", q = "y", ye = Math.round, $ =
					Math.floor, Xi(v)
					.draggable({
						listeners: {
							move: ({ target: ie, dx: Re, dy: Ce }) => {
								var $e, F, U, ae;
								if ($e = ye(Re), F = ye(Ce), $e || F) {
									return (
										U = $(ie.getAttribute(B)) || 0, ae =
											$(ie.getAttribute(q)) || 0, U += $e, ae += F, ie.style.transform =
											"translate(" + U + "px," + ae + "px)", ie.setAttribute(
											B,
											U,
										), ie.setAttribute(q, ae)
									);
								}
							},
						},
						inertia: !0,
					}), oe = A("div"), oe.spellcheck = !1, oe.contentEditable =
					"plaintext-only", v.appendChild(oe), Y = A("a"), Y.onclick =
					() => v.remove(), Y.innerText = "×", v.appendChild(Y), { canvas: _ } =
					z, _.after(v), setTimeout(
					() => {
						oe.focus();
					},
					300,
				), Ut.top();
			},
		}),
		rect: (z) => {
			var L, A, _, Y, B, q;
			return (
				Y = L = B = q = 0, z.lineWidth = 2, z.strokeStyle = "#f00", _ = !1, A =
					void 0, {
					mousedown: (v) => {
						_ = !0, B = v.clientX, q = v.clientY;
					},
					mousemove: (v) => {
						var K, $;
						_ && (
							{ clientX: K, clientY: $ } = v, Y = K - B, L = $ - q, A ? z.putImageData(
								A,
								0,
								0,
							) : A = z.getImageData(0, 0, innerWidth, innerHeight), z.strokeRect(
								B,
								q,
								Y,
								L,
							)
						);
					},
					mouseup: (v) => {
						Y = 0, _ = !1, A = void 0;
					},
				}
			);
		},
		pen: (z) => {
			var L, A;
			return (
				z.lineWidth = 3, z.lineCap = "round", z.strokeStyle = "#f00", A = !1, L =
					(_) => {
						var Y, B;
						return (
							{ clientX: Y, clientY: B } = _, z.lineTo(Y, B), z.stroke(), z.beginPath(), z.moveTo(
								Y,
								B,
							)
						);
					}, {
					mousedown: (_) => {
						A = !0, L(_);
					},
					mouseup: (_) => {
						A = !1, z.beginPath();
					},
					mousemove: (_) => {
						A && L(_);
					},
				}
			);
		},
	};
var Yi = {
	setup: () => {
		var z, L;
		return (
			z = $r(), L = $r(), Di(() => {
				var A, _, Y;
				_ = z.value, _.height = innerHeight, _.width = innerWidth, A =
					_.getContext("2d"), Y = void 0, _.addEventListener(
					"mouseup",
					() => {
						Ut.top();
					},
				), Ai(() => {
					var B, q, v, K, $, oe, ye;
					if (B = ki.shape, B !== L.value) {
						if (Y) {
							v = Object.entries(Y);
							for (ye of v) [q, $] = ye, _.removeEventListener(q, $);
						}
						L.value = B, Y = Hr[B](A), K = Object.entries(Y);
						for (oe of K) [q, $] = oe, _.addEventListener(q, $);
						return Ut.draw_top();
					}
				});
			}), { shape: L, c: z }
		);
	},
};
function Bi(z, L) {
	return (zi(), Ri("canvas", { class: Ci([z.shape]), ref: "c" }, null, 2));
}
var Gi = Fi(Yi, [["render", Bi], ["__scopeId", "data-v-a9cec5c6"]]);
export { Gi as default };
