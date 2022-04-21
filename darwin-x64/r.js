import { s as Ti, o as Mi, d as ji, a as ki, j as Ii, n as Di } from "./c.js";
function Ai(L) {
	return L && L.__esModule && Object.prototype.hasOwnProperty.call(L, "default") ? L.default : L;
}
var qr = { exports: {} };
(
	function (L, Ue) {
		(function (H) {
			L.exports = H();
		})(function () {
			var H = {};
			Object.defineProperty(H, "__esModule", { value: !0 }), H.default = void 0, H.default =
				function (e) {
					return !(!e || !e.Window) && (e instanceof e.Window);
				};
			var T = {};
			Object.defineProperty(T, "__esModule", { value: !0 }), T.init = Ie, T.getWindow =
				function (e) {
					return (0, H.default)(e) ? e : (e.ownerDocument || e).defaultView || we.window;
				}, T.window = T.realWindow = void 0;
			var pe = void 0;
			T.realWindow = pe;
			var we = void 0;
			function Ie(e) {
				T.realWindow = pe = e;
				var t = e.document.createTextNode("");
				t.ownerDocument !== e.document &&
					typeof e.wrap == "function" &&
					e.wrap(t) === t &&
					(e = e.wrap(e)), T.window = we = e;
			}
			T.window = we, typeof window < "u" && window && Ie(window);
			var h = {};
			function N(e) {
				return (
					N =
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
			Object.defineProperty(h, "__esModule", { value: !0 }), h.default = void 0;
			var Y = function (e) {
				return !!e && N(e) === "object";
			},
				Z = function (e) {
					return typeof e == "function";
				},
				ne = {
					window: function (e) {
						return e === T.window || (0, H.default)(e);
					},
					docFrag: function (e) {
						return Y(e) && e.nodeType === 11;
					},
					object: Y,
					func: Z,
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
						if (!e || N(e) !== "object") {
							return !1;
						}
						var t = T.getWindow(e) || T.window;
						return /object|function/.test(N(t.Element)) ? e instanceof t.Element : e.nodeType === 1 && typeof e.nodeName == "string";
					},
					plainObject: function (e) {
						return Y(e) &&
						!!e.constructor &&
						/function Object\b/.test(e.constructor.toString());
					},
					array: function (e) {
						return Y(e) && e.length !== void 0 && Z(e.splice);
					},
				};
			h.default = ne;
			var V = {};
			function ve(e) {
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
			function Pn(e) {
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
			Object.defineProperty(V, "__esModule", { value: !0 }), V.default = void 0;
			var st = {
				id: "actions/drag",
				install: function (e) {
					var t = e.actions, n = e.Interactable, r = e.defaults;
					n.prototype.draggable = st.draggable, t.map.drag = st, t.methodDict.drag =
						"draggable", r.actions.drag = st.defaults;
				},
				listeners: {
					"interactions:before-action-move": ve,
					"interactions:action-resume": ve,
					"interactions:action-move": Pn,
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
					return h.default.object(e)
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
						: h.default.bool(e)
							? (this.options.drag.enabled = e, this)
							: this.options.drag;
				},
				beforeMove: ve,
				move: Pn,
				defaults: { startAxis: "xy", lockAxis: "xy" },
				getCursor: function () {
					return "move";
				},
			},
				$r = st;
			V.default = $r;
			var C = {};
			Object.defineProperty(C, "__esModule", { value: !0 }), C.default = void 0;
			var J = {
				init: function (e) {
					var t = e;
					J.document = t.document, J.DocumentFragment = t.DocumentFragment || De, J.SVGElement =
						t.SVGElement || De, J.SVGSVGElement = t.SVGSVGElement || De, J.SVGElementInstance =
						t.SVGElementInstance || De, J.Element = t.Element || De, J.HTMLElement =
						t.HTMLElement || J.Element, J.Event = t.Event, J.Touch =
						t.Touch || De, J.PointerEvent = t.PointerEvent || t.MSPointerEvent;
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
			function De() {}
			var Gr = J;
			C.default = Gr;
			var q = {};
			Object.defineProperty(q, "__esModule", { value: !0 }), q.default = void 0;
			var Q = {
				init: function (e) {
					var t = C.default.Element, n = e.navigator || {};
					Q.supportsTouch =
						("ontouchstart" in e) || (
							h.default.func(e.DocumentTouch) && (
								C.default.document instanceof e.DocumentTouch
							)
						), Q.supportsPointerEvent =
						n.pointerEnabled !== !1 && !!C.default.PointerEvent, Q.isIOS =
						/iP(hone|od|ad)/.test(n.platform), Q.isIOS7 =
						/iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), Q.isIe9 =
						/MSIE 9/.test(n.userAgent), Q.isOperaMobile =
						n.appName === "Opera" &&
							Q.supportsTouch &&
							/Presto/.test(n.userAgent), Q.prefixedMatchesSelector =
						"matches" in t.prototype
							? "matches"
							: "webkitMatchesSelector" in t.prototype
								? "webkitMatchesSelector"
								: "mozMatchesSelector" in t.prototype
									? "mozMatchesSelector"
									: "oMatchesSelector" in t.prototype
										? "oMatchesSelector"
										: "msMatchesSelector", Q.pEventTypes =
						Q.supportsPointerEvent
							? C.default.PointerEvent === e.MSPointerEvent
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
							: null, Q.wheelEvent =
						C.default.document && ("onmousewheel" in C.default.document) ? "mousewheel" : "wheel";
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
				Hr = Q;
			q.default = Hr;
			var _ = {};
			function ut(e) {
				var t = e.parentNode;
				if (h.default.docFrag(t)) {
					for (; (t = t.host) && h.default.docFrag(t); );
					return t;
				}
				return t;
			}
			function lt(e, t) {
				return (
					T.window !== T.realWindow && (t = t.replace(/\/deep\//g, " ")), e[q.default.prefixedMatchesSelector](
						t,
					)
				);
			}
			Object.defineProperty(_, "__esModule", { value: !0 }), _.nodeContains =
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
				}, _.closest =
				function (e, t) {
					for (; h.default.element(e); ) {
						if (lt(e, t)) {
							return e;
						}
						e = ut(e);
					}
					return null;
				}, _.parentNode = ut, _.matchesSelector = lt, _.indexOfDeepestElement =
				function (e) {
					for (var t, n = [], r = 0; r < e.length; r++) {
						var o = e[r], i = e[t];
						if (o && r !== t) {
							if (i) {
								var s = Lt(o), a = Lt(i);
								if (s !== o.ownerDocument) {
									if (a !== o.ownerDocument) {
										if (s !== a) {
											n = n.length ? n : On(i);
											var u = void 0;
											if (
												(i instanceof C.default.HTMLElement) &&
												(o instanceof C.default.SVGElement) &&
												!(o instanceof C.default.SVGSVGElement)
											) {
												if (o === a) {
													continue;
												}
												u = o.ownerSVGElement;
											} else {
												u = o;
											}
											for (
												var l = On(u, i.ownerDocument), c = 0;
												l[c] && l[c] === n[c];
											) c++;
											var f = [l[c - 1], l[c], n[c]];
											if (f[0]) {
												for (var p = f[0].lastChild; p; ) {
													if (p === f[1]) {
														t = r, n = l;
														break;
													}
													if (p === f[2]) {
														break;
													}
													p = p.previousSibling;
												}
											}
										} else {
											v = o, d = i, (
												parseInt(T.getWindow(v).getComputedStyle(v).zIndex, 10) || 0
											) >= (
												parseInt(T.getWindow(d).getComputedStyle(d).zIndex, 10) || 0
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
					var v, d;
					return t;
				}, _.matchesUpTo =
				function (e, t, n) {
					for (; h.default.element(e); ) {
						if (lt(e, t)) {
							return !0;
						}
						if ((e = ut(e)) === n) {
							return lt(e, t);
						}
					}
					return !1;
				}, _.getActualElement =
				function (e) {
					return e.correspondingUseElement || e;
				}, _.getScrollXY = En, _.getElementClientRect = Sn, _.getElementRect =
				function (e) {
					var t = Sn(e);
					if (!q.default.isIOS7 && t) {
						var n = En(T.getWindow(e));
						t.left += n.x, t.right += n.x, t.top += n.y, t.bottom += n.y;
					}
					return t;
				}, _.getPath =
				function (e) {
					for (var t = []; e; ) t.push(e), e = ut(e);
					return t;
				}, _.trySelector =
				function (e) {
					return !!h.default.string(e) && (
						C.default.document.querySelector(e), !0
					);
				};
			var Lt = function (e) {
				return e.parentNode || e.host;
			};
			function On(e, t) {
				for (
					var n, r = [], o = e;
					(n = Lt(o)) && o !== t && n !== o.ownerDocument;
				) r.unshift(o), o = n;
				return r;
			}
			function En(e) {
				return {
					x: (e = e || T.window).scrollX || e.document.documentElement.scrollLeft,
					y: e.scrollY || e.document.documentElement.scrollTop,
				};
			}
			function Sn(e) {
				var t = e instanceof C.default.SVGElement ? e.getBoundingClientRect() : e.getClientRects()[0];
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
			var A = {};
			function Nt(e, t) {
				(t == null || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function Tn(e, t, n) {
				return e === "parent"
					? (0, _.parentNode)(n)
					: e === "self"
						? t.getRect(n)
						: (0, _.closest)(n, e);
			}
			Object.defineProperty(A, "__esModule", { value: !0 }), A.getStringOptionResult =
				Tn, A.resolveRectLike =
				function (e, t, n, r) {
					var o, i = e;
					return (
						h.default.string(i) ? i = Tn(i, t, n) : h.default.func(i) && (
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
												var u = Object.prototype.toString.call(s).slice(8, -1);
												return (
													u === "Object" &&
														s.constructor &&
														(u = s.constructor.name), u === "Map" || u === "Set"
														? Array.from(s)
														: u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
															u,
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
						), h.default.element(i) && (i = (0, _.getElementRect)(i)), i
					);
				}, A.rectToXY =
				function (e) {
					return e && { x: "x" in e ? e.x : e.left, y: "y" in e ? e.y : e.top };
				}, A.xywhToTlbr =
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
				}, A.tlbrToXywh =
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
				}, A.addEdges =
				function (e, t, n) {
					e.left && (t.left += n.x), e.right && (t.right += n.x), e.top && (
						t.top += n.y
					), e.bottom && (t.bottom += n.y), t.width = t.right - t.left, t.height =
						t.bottom - t.top;
				};
			var _e = {};
			Object.defineProperty(_e, "__esModule", { value: !0 }), _e.default =
				function (e, t, n) {
					var r = e.options[n],
						o = (r && r.origin) || e.options.origin,
						i = (0, A.resolveRectLike)(o, e, t, [e && t]);
					return (0, A.rectToXY)(i) || { x: 0, y: 0 };
				};
			var Ae = {};
			function Mn(e) {
				return e.trim().split(/ +/);
			}
			Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.default =
				function e(t, n, r) {
					if (
						r = r || {}, h.default.string(t) &&
							t.search(" ") !== -1 &&
							(t = Mn(t)), h.default.array(t)
					) {
						return t.reduce(
							function (u, l) {
								return (0, w.default)(u, e(l, n, r));
							},
							r,
						);
					}
					if (h.default.object(t) && (n = t, t = ""), h.default.func(n)) {
						r[t] = r[t] || [], r[t].push(n);
					} else if (h.default.array(n)) {
						for (var o = 0; o < n.length; o++) {
							var i;
							i = n[o], e(t, i, r);
						}
					} else if (h.default.object(n)) {
						for (var s in n) {
							var a = Mn(s)
								.map(function (u) {
									return "".concat(t).concat(u);
								});
							e(a, n[s], r);
						}
					}
					return r;
				};
			var he = {};
			Object.defineProperty(he, "__esModule", { value: !0 }), he.default =
				void 0, he.default =
				function (e, t) {
					return Math.sqrt((e * e) + (t * t));
				};
			var Ve = {};
			function Ut(e, t) {
				for (var n in t) {
					var r = Ut.prefixedPropREs, o = !1;
					for (var i in r) if (n.indexOf(i) === 0 && r[i].test(n)) {
						o = !0;
						break;
					}
					o || typeof t[n] == "function" || (e[n] = t[n]);
				}
				return e;
			}
			Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.default =
				void 0, Ut.prefixedPropREs =
				{
					webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,
					moz: /(Pressure)$/,
				};
			var Kr = Ut;
			Ve.default = Kr;
			var x = {};
			function Vt(e) {
				return (e instanceof C.default.Event) || (e instanceof C.default.Touch);
			}
			function qe(e, t, n) {
				return (
					e = e || "page", (n = n || {}).x = t[e + "X"], n.y = t[e + "Y"], n
				);
			}
			function jn(e, t) {
				return (
					t = t || { x: 0, y: 0 }, q.default.isOperaMobile && Vt(e) ? (
						qe("screen", e, t), t.x += window.scrollX, t.y += window.scrollY
					) : qe("page", e, t), t
				);
			}
			function kn(e, t) {
				return (
					t = t || {}, q.default.isOperaMobile && Vt(e) ? qe("screen", e, t) : qe(
						"client",
						e,
						t,
					), t
				);
			}
			function ct(e) {
				var t = [];
				return (
					h.default.array(e)
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
			function In(e) {
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
				}, x.isNativePointer = Vt, x.getXY = qe, x.getPageXY = jn, x.getClientXY =
				kn, x.getPointerId =
				function (e) {
					return h.default.number(e.pointerId) ? e.pointerId : e.identifier;
				}, x.setCoords =
				function (e, t, n) {
					var r = t.length > 1 ? In(t) : t[0];
					jn(r, e.page), kn(r, e.client), e.timeStamp = n;
				}, x.getTouchPair = ct, x.pointerAverage = In, x.touchBBox =
				function (e) {
					if (!e.length) {
						return null;
					}
					var t = ct(e),
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
						o = ct(e),
						i = o[0][n] - o[1][n],
						s = o[0][r] - o[1][r];
					return (0, he.default)(i, s);
				}, x.touchAngle =
				function (e, t) {
					var n = t + "X",
						r = t + "Y",
						o = ct(e),
						i = o[1][n] - o[0][n],
						s = o[1][r] - o[0][r];
					return 180 * Math.atan2(s, i) / Math.PI;
				}, x.getPointerType =
				function (e) {
					return h.default.string(e.pointerType)
						? e.pointerType
						: h.default.number(e.pointerType)
							? [void 0, void 0, "touch", "pen", "mouse"][e.pointerType]
							: /touch/.test(e.type || "") || (e instanceof C.default.Touch)
								? "touch"
								: "mouse";
				}, x.getEventTargets =
				function (e) {
					var t = h.default.func(e.composedPath) ? e.composedPath() : e.path;
					return [
						_.getActualElement(t ? t[0] : e.target),
						_.getActualElement(e.currentTarget),
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
						return Ve.default;
					},
				},
			);
			var Re = {};
			function Zr(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function ge(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(Re, "__esModule", { value: !0 }), Re.BaseEvent =
				void 0;
			var Dn = function () {
				function e(r) {
					(
						function (o, i) {
							if (!(o instanceof i)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), ge(this, "type", void 0), ge(this, "target", void 0), ge(
						this,
						"currentTarget",
						void 0,
					), ge(this, "interactable", void 0), ge(this, "_interaction", void 0), ge(
						this,
						"timeStamp",
						void 0,
					), ge(this, "immediatePropagationStopped", !1), ge(
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
					) && Zr(t.prototype, n), e
				);
			}();
			Re.BaseEvent = Dn, Object.defineProperty(
				Dn.prototype,
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
			var An = function (e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					e.push(r);
				}
				return e;
			};
			D.merge = An, D.from =
				function (e) {
					return An([], e);
				};
			var Rn = function (e, t) {
				for (var n = 0; n < e.length; n++) if (t(e[n], n, e)) {
					return n;
				}
				return -1;
			};
			D.findIndex = Rn, D.find =
				function (e, t) {
					return e[Rn(e, t)];
				};
			var ae = {};
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
			function Jr(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function Cn(e, t) {
				return (
					Cn =
						Object.setPrototypeOf || function (n, r) {
							return (n.__proto__ = r, n);
						}
				)(e, t);
			}
			function Qr(e, t) {
				return !t || (zn(t) !== "object" && typeof t != "function") ? se(e) : t;
			}
			function se(e) {
				if (e === void 0) {
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called",
					);
				}
				return e;
			}
			function qt(e) {
				return (
					qt =
						Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
						}
				)(e);
			}
			function ye(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(ae, "__esModule", { value: !0 }), ae.DropEvent =
				void 0;
			var eo = function (e) {
				(
					function (a, u) {
						if (typeof u != "function" && u !== null) {
							throw new TypeError(
								"Super expression must either be null or a function",
							);
						}
						a.prototype =
							Object.create(
								u && u.prototype,
								{ constructor: { value: a, writable: !0, configurable: !0 } },
							), u && Cn(a, u);
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
							var a, u = qt(r);
							if (o) {
								var l = qt(this).constructor;
								a = Reflect.construct(u, arguments, l);
							} else {
								a = u.apply(this, arguments);
							}
							return Qr(this, a);
						}
					);
				function s(a, u, l) {
					var c;
					(
						function (d, g) {
							if (!(d instanceof g)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, s), ye(se(c = i.call(this, u._interaction)), "target", void 0), ye(
						se(c),
						"dropzone",
						void 0,
					), ye(se(c), "dragEvent", void 0), ye(se(c), "relatedTarget", void 0), ye(
						se(c),
						"draggable",
						void 0,
					), ye(se(c), "timeStamp", void 0), ye(se(c), "propagationStopped", !1), ye(
						se(c),
						"immediatePropagationStopped",
						!1,
					);
					var f = l === "dragleave" ? a.prev : a.cur,
						p = f.element,
						v = f.dropzone;
					return (
						c.type = l, c.target = p, c.currentTarget = p, c.dropzone = v, c.dragEvent =
							u, c.relatedTarget = u.target, c.draggable = u.interactable, c.timeStamp =
							u.timeStamp, c
					);
				}
				return (
					t = s, (
						n =
							[
								{
									key: "reject",
									value: function () {
										var a = this, u = this._interaction.dropState;
										if (
											this.type === "dropactivate" || (
												this.dropzone &&
													u.cur.dropzone === this.dropzone &&
													u.cur.element === this.target
											)
										) {
											if (
												u.prev.dropzone = this.dropzone, u.prev.element =
													this.target, u.rejected = !0, u.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate"
											) {
												var l = u.activeDrops,
													c = D.findIndex(
														l,
														function (p) {
															var v = p.dropzone, d = p.element;
															return v === a.dropzone && d === a.target;
														},
													);
												u.activeDrops.splice(c, 1);
												var f = new s(u, this.dragEvent, "dropdeactivate");
												f.dropzone = this.dropzone, f.target = this.target, this.dropzone.fire(
													f,
												);
											} else {
												this.dropzone.fire(
													new s(u, this.dragEvent, "dragleave"),
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
					) && Jr(t.prototype, n), s
				);
			}(Re.BaseEvent);
			ae.DropEvent = eo;
			var ft = {};
			function Fn(e, t) {
				for (var n = 0; n < e.slice().length; n++) {
					var r = e.slice()[n], o = r.dropzone, i = r.element;
					t.dropzone = o, t.target = i, o.fire(t), t.propagationStopped =
						t.immediatePropagationStopped = !1;
				}
			}
			function $t(e, t) {
				for (
					var n = function (i, s) {
						for (var a = i.interactables, u = [], l = 0; l < a.list.length; l++) {
							var c = a.list[l];
							if (c.options.drop.enabled) {
								var f = c.options.drop.accept;
								if (
									!(
										(h.default.element(f) && f !== s) ||
											(h.default.string(f) && !_.matchesSelector(s, f)) ||
											(
												h.default.func(f) && !f({
													dropzone: c,
													draggableElement: s,
												})
											)
									)
								) {
									for (
										var p = h.default.string(c.target)
											? c._context.querySelectorAll(c.target)
											: h.default.array(c.target)
												? c.target
												: [c.target],
											v = 0;
										v < p.length;
										v++
									) {
										var d = p[v];
										d !== s && u.push({
											dropzone: c,
											element: d,
											rect: c.getRect(d),
										});
									}
								}
							}
						}
						return u;
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
			function Xn(e, t, n) {
				for (
					var r = e.dropState, o = e.interactable, i = e.element, s = [], a = 0;
					a < r.activeDrops.length;
					a++
				) {
					var u = r.activeDrops[a], l = u.dropzone, c = u.element, f = u.rect;
					s.push(l.dropCheck(t, n, o, i, c, f) ? c : null);
				}
				var p = _.indexOfDeepestElement(s);
				return r.activeDrops[p] || null;
			}
			function Gt(e, t, n) {
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
						o.activate = new ae.DropEvent(r, n, "dropactivate"), o.activate.target =
							null, o.activate.dropzone = null
					), n.type === "dragend" && (
						o.deactivate = new ae.DropEvent(r, n, "dropdeactivate"), o.deactivate.target =
							null, o.deactivate.dropzone = null
					), r.rejected || (
						r.cur.element !== r.prev.element && (
							r.prev.dropzone && (
								o.leave = new ae.DropEvent(r, n, "dragleave"), n.dragLeave =
									o.leave.target = r.prev.element, n.prevDropzone =
									o.leave.dropzone = r.prev.dropzone
							), r.cur.dropzone && (
								o.enter = new ae.DropEvent(r, n, "dragenter"), n.dragEnter =
									r.cur.element, n.dropzone = r.cur.dropzone
							)
						), n.type === "dragend" &&
							r.cur.dropzone &&
							(
								o.drop = new ae.DropEvent(r, n, "drop"), n.dropzone =
									r.cur.dropzone, n.relatedTarget = r.cur.element
							), n.type === "dragmove" &&
							r.cur.dropzone &&
							(
								o.move = new ae.DropEvent(r, n, "dropmove"), o.move.dragmove = n, n.dropzone =
									r.cur.dropzone
							)
					), o
				);
			}
			function Ht(e, t) {
				var n = e.dropState, r = n.activeDrops, o = n.cur, i = n.prev;
				t.leave && i.dropzone.fire(t.leave), t.enter && o.dropzone.fire(t.enter), t.move && o.dropzone.fire(
					t.move,
				), t.drop && o.dropzone.fire(t.drop), t.deactivate && Fn(
					r,
					t.deactivate,
				), n.prev.dropzone = o.dropzone, n.prev.element = o.element;
			}
			function Bn(e, t) {
				var n = e.interaction, r = e.iEvent, o = e.event;
				if (r.type === "dragmove" || r.type === "dragend") {
					var i = n.dropState;
					t.dynamicDrop && (i.activeDrops = $t(t, n.element));
					var s = r, a = Xn(n, s, o);
					i.rejected =
						i.rejected &&
							!!a &&
							a.dropzone === i.cur.dropzone &&
							a.element === i.cur.element, i.cur.dropzone = a && a.dropzone, i.cur.element =
						a && a.element, i.events = Gt(n, 0, s);
				}
			}
			Object.defineProperty(ft, "__esModule", { value: !0 }), ft.default =
				void 0;
			var Yn = {
				id: "actions/drop",
				install: function (e) {
					var t = e.actions,
						n = e.interactStatic,
						r = e.Interactable,
						o = e.defaults;
					e.usePlugin(V.default), r.prototype.dropzone =
						function (i) {
							return function (s, a) {
								if (h.default.object(a)) {
									if (s.options.drop.enabled = a.enabled !== !1, a.listeners) {
										var u = (0, Ae.default)(a.listeners),
											l = Object
												.keys(u)
												.reduce(
													function (c, f) {
														return (
															c[/^(enter|leave)/.test(f)
																? "drag".concat(f)
																: /^(activate|deactivate|move)/.test(f)
																	? "drop".concat(f)
																	: f] = u[f], c
														);
													},
													{},
												);
										s.off(s.options.drop.listeners), s.on(l), s.options.drop.listeners =
											l;
									}
									return (
										h.default.func(a.ondrop) && s.on("drop", a.ondrop), h.default.func(
											a.ondropactivate,
										) && s.on("dropactivate", a.ondropactivate), h.default.func(
											a.ondropdeactivate,
										) && s.on("dropdeactivate", a.ondropdeactivate), h.default.func(
											a.ondragenter,
										) && s.on("dragenter", a.ondragenter), h.default.func(
											a.ondragleave,
										) && s.on("dragleave", a.ondragleave), h.default.func(
											a.ondropmove,
										) && s.on("dropmove", a.ondropmove), /^(pointer|center)$/.test(
											a.overlap,
										) ? s.options.drop.overlap = a.overlap : h.default.number(
											a.overlap,
										) && (
											s.options.drop.overlap =
												Math.max(Math.min(1, a.overlap), 0)
										), ("accept" in a) && (s.options.drop.accept = a.accept), (
											"checker" in a
										) && (s.options.drop.checker = a.checker), s
									);
								}
								return h.default.bool(a) ? (s.options.drop.enabled = a, s) : s.options.drop;
							}(this, i);
						}, r.prototype.dropCheck =
						function (i, s, a, u, l, c) {
							return function (f, p, v, d, g, m, y) {
								var b = !1;
								if (!(y = y || f.getRect(m))) {
									return !!f.options.drop.checker && f.options.drop.checker(
										p,
										v,
										b,
										f,
										m,
										d,
										g,
									);
								}
								var P = f.options.drop.overlap;
								if (P === "pointer") {
									var E = (0, _e.default)(d, g, "drag"), M = x.getPageXY(p);
									M.x += E.x, M.y += E.y;
									var R = M.x > y.left && M.x < y.right,
										S = M.y > y.top && M.y < y.bottom;
									b = R && S;
								}
								var I = d.getRect(g);
								if (I && P === "center") {
									var te = I.left + (I.width / 2), de = I.top + (I.height / 2);
									b =
										te >= y.left &&
											te <= y.right &&
											de >= y.top &&
											de <= y.bottom;
								}
								return (
									I &&
										h.default.number(P) &&
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
												) >= P
										), f.options.drop.checker && (
										b = f.options.drop.checker(p, v, b, f, m, d, g)
									), b
								);
							}(this, i, s, a, u, l, c);
						}, n.dynamicDrop =
						function (i) {
							return h.default.bool(i) ? (e.dynamicDrop = i, n) : e.dynamicDrop;
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
						Yn.defaults;
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
								$t(t, n.element), o.events = Gt(n, 0, r), o.events.activate && (
								Fn(o.activeDrops, o.events.activate), t.fire(
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
							Ht(n, n.dropState.events), t.fire(
								"actions/drop:move",
								{ interaction: n, dragEvent: r },
							), n.dropState.events = {}
						);
					},
					"interactions:action-end": function (e, t) {
						if (e.interaction.prepared.name === "drag") {
							var n = e.interaction, r = e.iEvent;
							Bn(e, t), Ht(n, n.dropState.events), t.fire(
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
				getActiveDrops: $t,
				getDrop: Xn,
				getDropEvents: Gt,
				fireDropEvents: Ht,
				defaults: { enabled: !1, accept: null, overlap: "pointer" },
			},
				to = Yn;
			ft.default = to;
			var dt = {};
			function Kt(e) {
				var t = e.interaction, n = e.iEvent, r = e.phase;
				if (t.prepared.name === "gesture") {
					var o = t.pointers.map(function (l) {
						return l.pointer;
					}),
						i = r === "start",
						s = r === "end",
						a = t.interactable.options.deltaSource;
					if (n.touches = [o[0], o[1]], i) {
						n.distance = x.touchDistance(o, a), n.box = x.touchBBox(o), n.scale =
							1, n.ds = 0, n.angle = x.touchAngle(o, a), n.da = 0, t.gesture.startDistance =
							n.distance, t.gesture.startAngle = n.angle;
					} else if (s) {
						var u = t.prevEvent;
						n.distance = u.distance, n.box = u.box, n.scale = u.scale, n.ds = 0, n.angle =
							u.angle, n.da = 0;
					} else {
						n.distance = x.touchDistance(o, a), n.box = x.touchBBox(o), n.scale =
							n.distance / t.gesture.startDistance, n.angle = x.touchAngle(o, a), n.ds =
							n.scale - t.gesture.scale, n.da = n.angle - t.gesture.angle;
					}
					t.gesture.distance = n.distance, t.gesture.angle = n.angle, h.default.number(
						n.scale,
					) &&
						n.scale !== (1 / 0) &&
						!isNaN(n.scale) &&
						(t.gesture.scale = n.scale);
				}
			}
			Object.defineProperty(dt, "__esModule", { value: !0 }), dt.default =
				void 0;
			var Zt = {
				id: "actions/gesture",
				before: ["actions/drag", "actions/resize"],
				install: function (e) {
					var t = e.actions, n = e.Interactable, r = e.defaults;
					n.prototype.gesturable =
						function (o) {
							return h.default.object(o)
								? (
									this.options.gesture.enabled = o.enabled !== !1, this.setPerAction(
										"gesture",
										o,
									), this.setOnEvents("gesture", o), this
								)
								: h.default.bool(o)
									? (this.options.gesture.enabled = o, this)
									: this.options.gesture;
						}, t.map.gesture = Zt, t.methodDict.gesture = "gesturable", r.actions.gesture =
						Zt.defaults;
				},
				listeners: {
					"interactions:action-start": Kt,
					"interactions:action-move": Kt,
					"interactions:action-end": Kt,
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
				no = Zt;
			dt.default = no;
			var pt = {};
			function ro(e, t, n, r, o, i, s) {
				if (!t) {
					return !1;
				}
				if (t === !0) {
					var a = h.default.number(i.width) ? i.width : i.right - i.left,
						u = h.default.number(i.height) ? i.height : i.bottom - i.top;
					if (
						s =
							Math.min(s, Math.abs((e === "left" || e === "right" ? a : u) / 2)), a < 0 && (
							e === "left" ? e = "right" : e === "right" && (e = "left")
						), u < 0 && (
							e === "top" ? e = "bottom" : e === "bottom" && (e = "top")
						), e === "left"
					) {
						return n.x < ((a >= 0 ? i.left : i.right) + s);
					}
					if (e === "top") {
						return n.y < ((u >= 0 ? i.top : i.bottom) + s);
					}
					if (e === "right") {
						return n.x > ((a >= 0 ? i.right : i.left) - s);
					}
					if (e === "bottom") {
						return n.y > ((u >= 0 ? i.bottom : i.top) - s);
					}
				}
				return !!h.default.element(r) && (
					h.default.element(t) ? t === r : _.matchesUpTo(r, t, o)
				);
			}
			function Wn(e) {
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
			Object.defineProperty(pt, "__esModule", { value: !0 }), pt.default =
				void 0;
			var ue = {
				id: "actions/resize",
				before: ["actions/drag"],
				install: function (e) {
					var t = e.actions, n = e.browser, r = e.Interactable, o = e.defaults;
					ue.cursors =
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
						}(n), ue.defaultMargin =
						n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable =
						function (i) {
							return function (s, a, u) {
								return h.default.object(a)
									? (
										s.options.resize.enabled = a.enabled !== !1, s.setPerAction(
											"resize",
											a,
										), s.setOnEvents("resize", a), h.default.string(a.axis) && /^x$|^y$|^xy$/.test(
											a.axis,
										) ? s.options.resize.axis = a.axis : a.axis === null && (
											s.options.resize.axis = u.defaults.actions.resize.axis
										), h.default.bool(a.preserveAspectRatio) ? s.options.resize.preserveAspectRatio =
											a.preserveAspectRatio : h.default.bool(a.square) && (
											s.options.resize.square = a.square
										), s
									)
									: h.default.bool(a)
										? (s.options.resize.enabled = a, s)
										: s.options.resize;
							}(this, i, e);
						}, t.map.resize = ue, t.methodDict.resize = "resizable", o.actions.resize =
						ue.defaults;
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
						})(e), Wn(e);
					},
					"interactions:action-move": function (e) {
						(function (t) {
							var n = t.iEvent, r = t.interaction;
							if (r.prepared.name === "resize" && r.prepared.edges) {
								var o = n,
									i = r.interactable.options.resize.invert,
									s = i === "reposition" || i === "negate",
									a = r.rect,
									u = r._rects,
									l = u.start,
									c = u.corrected,
									f = u.delta,
									p = u.previous;
								if ((0, w.default)(p, c), s) {
									if ((0, w.default)(c, a), i === "reposition") {
										if (c.top > c.bottom) {
											var v = c.top;
											c.top = c.bottom, c.bottom = v;
										}
										if (c.left > c.right) {
											var d = c.left;
											c.left = c.right, c.right = d;
										}
									}
								} else {
									c.top = Math.min(a.top, l.bottom), c.bottom =
										Math.max(a.bottom, l.top), c.left =
										Math.min(a.left, l.right), c.right =
										Math.max(a.right, l.left);
								}
								for (
									var g
									in
									c.width = c.right - c.left, c.height = c.bottom - c.top, c
								) f[g] = c[g] - p[g];
								o.edges = r.prepared.edges, o.rect = c, o.deltaRect = f;
							}
						})(e), Wn(e);
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
								if (h.default.object(a.edges)) {
									var u = { left: !1, right: !1, top: !1, bottom: !1 };
									for (var l in u) u[l] =
										ro(
											l,
											a.edges[l],
											s,
											t._latestPointer.eventTarget,
											r,
											o,
											a.margin || ue.defaultMargin,
										);
									u.left = u.left && !u.right, u.top = u.top && !u.bottom, (
										u.left || u.right || u.top || u.bottom
									) && (e.action = { name: "resize", edges: u });
								} else {
									var c = a.axis !== "y" && s.x > (o.right - ue.defaultMargin),
										f = a.axis !== "x" && s.y > (o.bottom - ue.defaultMargin);
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
					var t = e.edges, n = e.axis, r = e.name, o = ue.cursors, i = null;
					if (n) {
						i = o[r + n];
					} else if (t) {
						for (
							var s = "", a = ["top", "bottom", "left", "right"], u = 0;
							u < a.length;
							u++
						) {
							var l = a[u];
							t[l] && (s += l);
						}
						i = o[s];
					}
					return i;
				},
				defaultMargin: null,
			},
				oo = ue;
			pt.default = oo;
			var vt = {};
			Object.defineProperty(vt, "__esModule", { value: !0 }), vt.default =
				void 0;
			var io = {
				id: "actions",
				install: function (e) {
					e.usePlugin(dt.default), e.usePlugin(pt.default), e.usePlugin(
						V.default,
					), e.usePlugin(ft.default);
				},
			};
			vt.default = io;
			var re = {};
			Object.defineProperty(re, "__esModule", { value: !0 }), re.default =
				void 0;
			var le,
				Pe,
				Ln = 0,
				ao = {
					request: function (e) {
						return le(e);
					},
					cancel: function (e) {
						return Pe(e);
					},
					init: function (e) {
						if (le = e.requestAnimationFrame, Pe = e.cancelAnimationFrame, !le) {
							for (
								var t = ["ms", "moz", "webkit", "o"], n = 0;
								n < t.length;
								n++
							) {
								var r = t[n];
								le = e["".concat(r, "RequestAnimationFrame")], Pe =
									e["".concat(r, "CancelAnimationFrame")] || e["".concat(
										r,
										"CancelRequestAnimationFrame",
									)];
							}
						}
						le = le && le.bind(e), Pe = Pe && Pe.bind(e), le || (
							le =
								function (o) {
									var i = Date.now(),
										s = Math.max(0, 16 - (i - Ln)),
										a = e.setTimeout(
											function () {
												o(i + s);
											},
											s,
										);
									return (Ln = i + s, a);
								}, Pe =
								function (o) {
									return clearTimeout(o);
								}
						);
					},
				};
			re.default = ao;
			var me = {};
			Object.defineProperty(me, "__esModule", { value: !0 }), me.getContainer =
				ht, me.getScroll = $e, me.getScrollSize =
				function (e) {
					return (
						h.default.window(e) && (e = window.document.body), {
							x: e.scrollWidth,
							y: e.scrollHeight,
						}
					);
				}, me.getScrollSizeDelta =
				function (e, t) {
					var n = e.interaction,
						r = e.element,
						o = n && n.interactable.options[n.prepared.name].autoScroll;
					if (!o || !o.enabled) {
						return (t(), { x: 0, y: 0 });
					}
					var i = ht(o.container, n.interactable, r), s = $e(i);
					t();
					var a = $e(i);
					return { x: a.x - s.x, y: a.y - s.y };
				}, me.default = void 0;
			var O = {
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
					O.isScrolling = !0, re.default.cancel(O.i), e.autoScroll = O, O.interaction =
						e, O.prevTime = O.now(), O.i = re.default.request(O.scroll);
				},
				stop: function () {
					O.isScrolling = !1, O.interaction && (O.interaction.autoScroll = null), re.default.cancel(
						O.i,
					);
				},
				scroll: function () {
					var e = O.interaction,
						t = e.interactable,
						n = e.element,
						r = e.prepared.name,
						o = t.options[r].autoScroll,
						i = ht(o.container, t, n),
						s = O.now(),
						a = (s - O.prevTime) / 1e3,
						u = o.speed * a;
					if (u >= 1) {
						var l = { x: O.x * u, y: O.y * u };
						if (l.x || l.y) {
							var c = $e(i);
							h.default.window(i) ? i.scrollBy(l.x, l.y) : i && (
								i.scrollLeft += l.x, i.scrollTop += l.y
							);
							var f = $e(i), p = { x: f.x - c.x, y: f.y - c.y };
							(p.x || p.y) && t.fire({
								type: "autoscroll",
								target: n,
								interactable: t,
								delta: p,
								interaction: e,
								container: i,
							});
						}
						O.prevTime = s;
					}
					O.isScrolling && (
						re.default.cancel(O.i), O.i = re.default.request(O.scroll)
					);
				},
				check: function (e, t) {
					var n;
					return (n = e.options[t].autoScroll) == null ? void 0 : n.enabled;
				},
				onInteractionMove: function (e) {
					var t = e.interaction, n = e.pointer;
					if (t.interacting() && O.check(t.interactable, t.prepared.name)) {
						if (t.simulation) {
							O.x = O.y = 0;
						} else {
							var r,
								o,
								i,
								s,
								a = t.interactable,
								u = t.element,
								l = t.prepared.name,
								c = a.options[l].autoScroll,
								f = ht(c.container, a, u);
							if (h.default.window(f)) {
								s = n.clientX < O.margin, r = n.clientY < O.margin, o =
									n.clientX > (f.innerWidth - O.margin), i =
									n.clientY > (f.innerHeight - O.margin);
							} else {
								var p = _.getElementClientRect(f);
								s = n.clientX < (p.left + O.margin), r =
									n.clientY < (p.top + O.margin), o =
									n.clientX > (p.right - O.margin), i =
									n.clientY > (p.bottom - O.margin);
							}
							O.x =
								o
									? 1
									: s
										? -1
										: 0, O.y =
								i
									? 1
									: r
										? -1
										: 0, O.isScrolling || (
								O.margin = c.margin, O.speed = c.speed, O.start(t)
							);
						}
					}
				},
			};
			function ht(e, t, n) {
				return (h.default.string(e) ? (0, A.getStringOptionResult)(e, t, n) : e) || (
					0, T.getWindow
				)(n);
			}
			function $e(e) {
				return (
					h.default.window(e) && (e = window.document.body), {
						x: e.scrollLeft,
						y: e.scrollTop,
					}
				);
			}
			var so = {
				id: "auto-scroll",
				install: function (e) {
					var t = e.defaults, n = e.actions;
					e.autoScroll = O, O.now =
						function () {
							return e.now();
						}, n.phaselessTypes.autoscroll = !0, t.perAction.autoScroll =
						O.defaults;
				},
				listeners: {
					"interactions:new": function (e) {
						e.interaction.autoScroll = null;
					},
					"interactions:destroy": function (e) {
						e.interaction.autoScroll = null, O.stop(), O.interaction && (
							O.interaction = null
						);
					},
					"interactions:stop": O.stop,
					"interactions:action-move": function (e) {
						return O.onInteractionMove(e);
					},
				},
			};
			me.default = so;
			var K = {};
			Object.defineProperty(K, "__esModule", { value: !0 }), K.warnOnce =
				function (e, t) {
					var n = !1;
					return function () {
						return (
							n || (T.window.console.warn(t), n = !0), e.apply(this, arguments)
						);
					};
				}, K.copyAction =
				function (e, t) {
					return (e.name = t.name, e.axis = t.axis, e.edges = t.edges, e);
				}, K.sign = void 0, K.sign =
				function (e) {
					return e >= 0 ? 1 : -1;
				};
			var gt = {};
			function uo(e) {
				return h.default.bool(e)
					? (this.options.styleCursor = e, this)
					: e === null
						? (delete this.options.styleCursor, this)
						: this.options.styleCursor;
			}
			function lo(e) {
				return h.default.func(e)
					? (this.options.actionChecker = e, this)
					: e === null
						? (delete this.options.actionChecker, this)
						: this.options.actionChecker;
			}
			Object.defineProperty(gt, "__esModule", { value: !0 }), gt.default =
				void 0;
			var co = {
				id: "auto-start/interactableMethods",
				install: function (e) {
					var t = e.Interactable;
					t.prototype.getAction =
						function (n, r, o, i) {
							var s = function (a, u, l, c, f) {
								var p = a.getRect(c),
									v = {
										action: null,
										interactable: a,
										interaction: l,
										element: c,
										rect: p,
										buttons: u.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[u.button],
									};
								return (f.fire("auto-start:check", v), v.action);
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
						(0, K.warnOnce)(
							function (n) {
								return this._backCompatOption("ignoreFrom", n);
							},
							"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue}).",
						), t.prototype.allowFrom =
						(0, K.warnOnce)(
							function (n) {
								return this._backCompatOption("allowFrom", n);
							},
							"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue}).",
						), t.prototype.actionChecker = lo, t.prototype.styleCursor = uo;
				},
			};
			gt.default = co;
			var ze = {};
			function Nn(e, t, n, r, o) {
				return t.testIgnoreAllow(t.options[e.name], n, r) &&
					t.options[e.name].enabled &&
					yt(t, n, e, o) ? e : null;
			}
			function fo(e, t, n, r, o, i, s) {
				for (var a = 0, u = r.length; a < u; a++) {
					var l = r[a], c = o[a], f = l.getAction(t, n, e, c);
					if (f) {
						var p = Nn(f, l, c, i, s);
						if (p) {
							return { action: p, interactable: l, element: c };
						}
					}
				}
				return { action: null, interactable: null, element: null };
			}
			function Un(e, t, n, r, o) {
				var i = [], s = [], a = r;
				function u(c) {
					i.push(c), s.push(a);
				}
				for (; h.default.element(a); ) {
					i = [], s = [], o.interactables.forEachMatch(a, u);
					var l = fo(e, t, n, i, s, r, o);
					if (l.action && !l.interactable.options[l.action.name].manualStart) {
						return l;
					}
					a = _.parentNode(a);
				}
				return { action: null, interactable: null, element: null };
			}
			function Vn(e, t, n) {
				var r = t.action, o = t.interactable, i = t.element;
				r = r || { name: null }, e.interactable = o, e.element = i, (
					0, K.copyAction
				)(e.prepared, r), e.rect = o && r.name ? o.getRect(i) : null, $n(e, n), n.fire(
					"autoStart:prepared",
					{ interaction: e },
				);
			}
			function yt(e, t, n, r) {
				var o = e.options,
					i = o[n.name].max,
					s = o[n.name].maxPerElement,
					a = r.autoStart.maxInteractions,
					u = 0,
					l = 0,
					c = 0;
				if (!(i && s && a)) {
					return !1;
				}
				for (var f = 0; f < r.interactions.list.length; f++) {
					var p = r.interactions.list[f], v = p.prepared.name;
					if (
						p.interacting() && (
							++u >= a || (
								p.interactable === e && (
									(l += v === n.name ? 1 : 0) >= i || (
										p.element === t && (c++, v === n.name && c >= s)
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
			function qn(e, t) {
				return h.default.number(e) ? (t.autoStart.maxInteractions = e, this) : t.autoStart.maxInteractions;
			}
			function Jt(e, t, n) {
				var r = n.autoStart.cursorElement;
				r && r !== e && (r.style.cursor = ""), e.ownerDocument.documentElement.style.cursor =
					t, e.style.cursor = t, n.autoStart.cursorElement = t ? e : null;
			}
			function $n(e, t) {
				var n = e.interactable, r = e.element, o = e.prepared;
				if (e.pointerType === "mouse" && n && n.options.styleCursor) {
					var i = "";
					if (o.name) {
						var s = n.options[o.name].cursorChecker;
						i =
							h.default.func(s) ? s(o, n, r, e._interacting) : t.actions.map[o.name].getCursor(
								o,
							);
					}
					Jt(e.element, i || "", t);
				} else {
					t.autoStart.cursorElement && Jt(t.autoStart.cursorElement, "", t);
				}
			}
			Object.defineProperty(ze, "__esModule", { value: !0 }), ze.default =
				void 0;
			var po = {
				id: "auto-start/base",
				before: ["actions"],
				install: function (e) {
					var t = e.interactStatic, n = e.defaults;
					e.usePlugin(gt.default), n.base.actionChecker = null, n.base.styleCursor =
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
							return qn(r, e);
						}, e.autoStart =
						{
							maxInteractions: 1 / 0,
							withinInteractionLimit: yt,
							cursorElement: null,
						};
				},
				listeners: {
					"interactions:down": function (e, t) {
						var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget;
						n.interacting() || Vn(n, Un(n, r, o, i, t), t);
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
									Vn(o, Un(o, i, s, a, r), r);
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
										i.options[s].manualStart || !yt(i, o.element, o.prepared, r) ? o.stop() : (
											o.start(o.prepared, i, o.element), $n(o, r)
										)
									);
							}
						}(e, t);
					},
					"interactions:stop": function (e, t) {
						var n = e.interaction, r = n.interactable;
						r && r.options.styleCursor && Jt(n.element, "", t);
					},
				},
				maxInteractions: qn,
				withinInteractionLimit: yt,
				validateAction: Nn,
			};
			ze.default = po;
			var mt = {};
			Object.defineProperty(mt, "__esModule", { value: !0 }), mt.default =
				void 0;
			var vo = {
				id: "auto-start/dragAxis",
				listeners: {
					"autoStart:before-start": function (e, t) {
						var n = e.interaction, r = e.eventTarget, o = e.dx, i = e.dy;
						if (n.prepared.name === "drag") {
							var s = Math.abs(o),
								a = Math.abs(i),
								u = n.interactable.options.drag,
								l = u.startAxis,
								c = s > a
									? "x"
									: s < a
										? "y"
										: "xy";
							if (
								n.prepared.axis = u.lockAxis === "start" ? c[0] : u.lockAxis, c !== "xy" &&
									l !== "xy" &&
									l !== c
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
															var P = b.options.drag.startAxis;
															return y === "xy" || P === "xy" || P === y;
														}(c, d) &&
														ze.default.validateAction(m, d, f, r, t)
													) {
														return d;
													}
												}
											}
										};
									h.default.element(f);
								) {
									var v = t.interactables.forEachMatch(f, p);
									if (v) {
										n.prepared.name = "drag", n.interactable = v, n.element = f;
										break;
									}
									f = (0, _.parentNode)(f);
								}
							}
						}
					},
				},
			};
			mt.default = vo;
			var bt = {};
			function Qt(e) {
				var t = e.prepared && e.prepared.name;
				if (!t) {
					return null;
				}
				var n = e.interactable.options;
				return n[t].hold || n[t].delay;
			}
			Object.defineProperty(bt, "__esModule", { value: !0 }), bt.default =
				void 0;
			var ho = {
				id: "auto-start/hold",
				install: function (e) {
					var t = e.defaults;
					e.usePlugin(ze.default), t.perAction.hold = 0, t.perAction.delay = 0;
				},
				listeners: {
					"interactions:new": function (e) {
						e.interaction.autoStartHoldTimer = null;
					},
					"autoStart:prepared": function (e) {
						var t = e.interaction, n = Qt(t);
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
						Qt(t) > 0 && (t.prepared.name = null);
					},
				},
				getHoldDuration: Qt,
			};
			bt.default = ho;
			var xt = {};
			Object.defineProperty(xt, "__esModule", { value: !0 }), xt.default =
				void 0;
			var go = {
				id: "auto-start",
				install: function (e) {
					e.usePlugin(ze.default), e.usePlugin(bt.default), e.usePlugin(
						mt.default,
					);
				},
			};
			xt.default = go;
			var Ce = {};
			function yo(e) {
				return /^(always|never|auto)$/.test(e)
					? (this.options.preventDefault = e, this)
					: h.default.bool(e)
						? (this.options.preventDefault = e ? "always" : "never", this)
						: this.options.preventDefault;
			}
			function mo(e) {
				var t = e.interaction, n = e.event;
				t.interactable && t.interactable.checkAndPreventDefault(n);
			}
			function Gn(e) {
				var t = e.Interactable;
				t.prototype.preventDefault = yo, t.prototype.checkAndPreventDefault =
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
										var a = (0, T.getWindow)(i.target).document,
											u = o.getDocOptions(a);
										if (!u || !u.events || u.events.passive !== !1) {
											return;
										}
									}
									/^(mouse|pointer|touch)*(down|start)/i.test(i.type) ||
										(
											h.default.element(i.target) && (0, _.matchesSelector)(
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
									o.element === n.target || (0, _.nodeContains)(
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
			Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.install = Gn, Ce.default =
				void 0;
			var bo = {
				id: "core/interactablePreventDefault",
				install: Gn,
				listeners: ["down", "move", "up", "cancel"].reduce(
					function (e, t) {
						return (e["interactions:".concat(t)] = mo, e);
					},
					{},
				),
			};
			Ce.default = bo;
			var en = {};
			Object.defineProperty(en, "__esModule", { value: !0 }), en.default =
				void 0, en.default = {};
			var Ge, tn = {};
			Object.defineProperty(tn, "__esModule", { value: !0 }), tn.default =
				void 0, function (e) {
				e.touchAction = "touchAction", e.boxSizing = "boxSizing", e.noListeners =
					"noListeners";
			}(Ge || (Ge = {})), Ge.touchAction, Ge.boxSizing, Ge.noListeners;
			var xo = { id: "dev-tools", install: function () {} };
			tn.default = xo;
			var Oe = {};
			Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.default =
				function e(t) {
					var n = {};
					for (var r in t) {
						var o = t[r];
						h.default.plainObject(o)
							? n[r] = e(o)
							: h.default.array(o)
								? n[r] = D.from(o)
								: n[r] = o;
					}
					return n;
				};
			var Ee = {};
			function Hn(e, t) {
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
								var u, l = n[Symbol.iterator]();
								!(i = (u = l.next()).done) && (
									o.push(u.value), !r || o.length !== r
								);
								i = !0
							);
						} catch (c) {
							s = !0, a = c;
						} finally {
							try {
								i || l.return == null || l.return();
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
							return Kn(n, r);
						}
						var o = Object.prototype.toString.call(n).slice(8, -1);
						return (
							o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set"
								? Array.from(n)
								: o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
									o,
								)
									? Kn(n, r)
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
			function Kn(e, t) {
				(t == null || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function wo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function Se(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.getRectOffset =
				Zn, Ee.default = void 0;
			var _o = function () {
				function e(r) {
					(
						function (o, i) {
							if (!(o instanceof i)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), Se(this, "states", []), Se(
						this,
						"startOffset",
						{ left: 0, right: 0, top: 0, bottom: 0 },
					), Se(this, "startDelta", void 0), Se(this, "result", void 0), Se(
						this,
						"endResult",
						void 0,
					), Se(this, "edges", void 0), Se(this, "interaction", void 0), this.interaction =
						r, this.result = wt();
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
											a = function (l) {
												var c = l.interactable.options[l.prepared.name],
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
														var v = c[p];
														return v &&
														v.enabled &&
														{ options: v, methods: v._methods };
													})
													.filter(function (p) {
														return !!p;
													});
											}(s);
										this.prepareStates(a), this.edges =
											(0, w.default)({}, s.edges), this.startOffset =
											Zn(s.rect, o), this.startDelta = { x: 0, y: 0 };
										var u = this.fillArg({ phase: i, pageCoords: o, preEnd: !1 });
										return (
											this.result = wt(), this.startAll(u), this.result =
												this.setAll(u)
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
											var u = s ? this.states.slice(s) : this.states,
												l = wt(r.coords, r.rect),
												c = 0;
											c < u.length;
											c++
										) {
											var f,
												p = u[c],
												v = p.options,
												d = (0, w.default)({}, r.coords),
												g = null;
											(f = p.methods) != null &&
												f.set &&
												this.shouldDo(v, i, o) &&
												(
													r.state = p, g = p.methods.set(r), A.addEdges(
														this.interaction.edges,
														r.rect,
														{ x: r.coords.x - d.x, y: r.coords.y - d.y },
													)
												), l.eventProps.push(g);
										}
										l.delta.x = r.coords.x - r.pageCoords.x, l.delta.y =
											r.coords.y - r.pageCoords.y, l.rectDelta.left =
											r.rect.left - a.left, l.rectDelta.right =
											r.rect.right - a.right, l.rectDelta.top =
											r.rect.top - a.top, l.rectDelta.bottom =
											r.rect.bottom - a.bottom;
										var m = this.result.coords, y = this.result.rect;
										if (m && y) {
											var b =
												l.rect.left !== y.left ||
												l.rect.right !== y.right ||
												l.rect.top !== y.top ||
												l.rect.bottom !== y.bottom;
											l.changed = b || m.x !== l.coords.x || m.y !== l.coords.y;
										}
										return l;
									},
								},
								{
									key: "applyToInteraction",
									value: function (r) {
										var o = this.interaction,
											i = r.phase,
											s = o.coords.cur,
											a = o.coords.start,
											u = this.result,
											l = this.startDelta,
											c = u.delta;
										i === "start" && (0, w.default)(this.startDelta, u.delta);
										for (var f = 0; f < [[a, l], [s, c]].length; f++) {
											var p = Hn([[a, l], [s, c]][f], 2), v = p[0], d = p[1];
											v.page.x += d.x, v.page.y += d.y, v.client.x += d.x, v.client.y +=
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
											u = this.setAll(
												this.fillArg({
													preEnd: s,
													phase: i,
													pageCoords: r.modifiedCoords || o.coords.cur.page,
												}),
											);
										if (
											this.result = u, !u.changed &&
												(!a || a < this.states.length) &&
												o.interacting()
										) {
											return !1;
										}
										if (r.modifiedCoords) {
											var l = o.coords.cur.page,
												c = {
													x: r.modifiedCoords.x - l.x,
													y: r.modifiedCoords.y - l.y,
												};
											u.coords.x += c.x, u.coords.y += c.y, u.delta.x += c.x, u.delta.y +=
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
											for (var a = !1, u = 0; u < s.length; u++) {
												var l = s[u];
												r.state = l;
												var c = l.options,
													f = l.methods,
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
											var i = r[o], s = i.options, a = i.methods, u = i.name;
											this.states.push({
												options: s,
												methods: a,
												index: o,
												name: u,
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
												var u = a.startDelta,
													l = a.result,
													c = l.delta,
													f = l.rectDelta,
													p = [[i.start, u], [i.cur, c]],
													v = 0;
												v < p.length;
												v++
											) {
												var d = Hn(p[v], 2), g = d[0], m = d[1];
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
												return (0, Oe.default)(o);
											}), this.result =
											wt(
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
					) && wo(t.prototype, n), e
				);
			}();
			function wt(e, t) {
				return {
					rect: t,
					coords: e,
					delta: { x: 0, y: 0 },
					rectDelta: { left: 0, right: 0, top: 0, bottom: 0 },
					eventProps: [],
					changed: !0,
				};
			}
			function Zn(e, t) {
				return e ? {
					left: t.x - e.left,
					top: t.y - e.top,
					right: e.right - t.x,
					bottom: e.bottom - t.y,
				} : { left: 0, top: 0, right: 0, bottom: 0 };
			}
			Ee.default = _o;
			var X = {};
			function _t(e) {
				var t = e.iEvent, n = e.interaction.modification.result;
				n && (t.modifiers = n.eventProps);
			}
			Object.defineProperty(X, "__esModule", { value: !0 }), X.makeModifier =
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
							var u = {
								options: s,
								methods: r,
								name: t,
								enable: function () {
									return (s.enabled = !0, u);
								},
								disable: function () {
									return (s.enabled = !1, u);
								},
							};
							return u;
						};
					return (
						t && typeof t == "string" && (o._defaults = n, o._methods = r), o
					);
				}, X.addEventModifiers = _t, X.default = void 0;
			var Po = {
				id: "modifiers/base",
				before: ["actions"],
				install: function (e) {
					e.defaults.perAction.modifiers = [];
				},
				listeners: {
					"interactions:new": function (e) {
						var t = e.interaction;
						t.modification = new Ee.default(t);
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
					"interactions:action-start": _t,
					"interactions:action-move": _t,
					"interactions:action-end": _t,
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
			X.default = Po;
			var He = {};
			Object.defineProperty(He, "__esModule", { value: !0 }), He.defaults =
				void 0, He.defaults =
				{
					base: { preventDefault: "auto", deltaSource: "page" },
					perAction: { enabled: !1, origin: { x: 0, y: 0 } },
					actions: {},
				};
			var Ke = {};
			function Jn(e) {
				return (
					Jn =
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
			function Oo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function Qn(e, t) {
				return (
					Qn =
						Object.setPrototypeOf || function (n, r) {
							return (n.__proto__ = r, n);
						}
				)(e, t);
			}
			function Eo(e, t) {
				return !t || (Jn(t) !== "object" && typeof t != "function") ? j(e) : t;
			}
			function j(e) {
				if (e === void 0) {
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called",
					);
				}
				return e;
			}
			function nn(e) {
				return (
					nn =
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
			Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.InteractEvent =
				void 0;
			var er = function (e) {
				(
					function (a, u) {
						if (typeof u != "function" && u !== null) {
							throw new TypeError(
								"Super expression must either be null or a function",
							);
						}
						a.prototype =
							Object.create(
								u && u.prototype,
								{ constructor: { value: a, writable: !0, configurable: !0 } },
							), u && Qn(a, u);
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
							var a, u = nn(r);
							if (o) {
								var l = nn(this).constructor;
								a = Reflect.construct(u, arguments, l);
							} else {
								a = u.apply(this, arguments);
							}
							return Eo(this, a);
						}
					);
				function s(a, u, l, c, f, p, v) {
					var d;
					(
						function (R, S) {
							if (!(R instanceof S)) {
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
						m = ((g && g.options) || He.defaults).deltaSource,
						y = (0, _e.default)(g, f, l),
						b = c === "start",
						P = c === "end",
						E = b ? j(d) : a.prevEvent,
						M = b
							? a.coords.start
							: P
								? {
									page: E.page,
									client: E.client,
									timeStamp: a.coords.cur.timeStamp,
								}
								: a.coords.cur;
					return (
						d.page = (0, w.default)({}, M.page), d.client =
							(0, w.default)({}, M.client), d.rect = (0, w.default)({}, a.rect), d.timeStamp =
							M.timeStamp, P || (
							d.page.x -= y.x, d.page.y -= y.y, d.client.x -= y.x, d.client.y -=
								y.y
						), d.ctrlKey = u.ctrlKey, d.altKey = u.altKey, d.shiftKey =
							u.shiftKey, d.metaKey = u.metaKey, d.button = u.button, d.buttons =
							u.buttons, d.target = f, d.currentTarget = f, d.preEnd = p, d.type =
							v || l + (c || ""), d.interactable = g, d.t0 =
							b ? a.pointers[a.pointers.length - 1].downTime : E.t0, d.x0 =
							a.coords.start.page.x - y.x, d.y0 = a.coords.start.page.y - y.y, d.clientX0 =
							a.coords.start.client.x - y.x, d.clientY0 =
							a.coords.start.client.y - y.y, d.delta =
							b || P ? { x: 0, y: 0 } : {
								x: d[m].x - E[m].x,
								y: d[m].y - E[m].y,
							}, d.dt = a.coords.delta.timeStamp, d.duration =
							d.timeStamp - d.t0, d.velocity =
							(0, w.default)({}, a.coords.velocity[m]), d.speed =
							(0, he.default)(d.velocity.x, d.velocity.y), d.swipe =
							P || c === "inertiastart" ? d.getSwipe() : null, d
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
										var u = 180 * Math.atan2(
											a.prevEvent.velocityY,
											a.prevEvent.velocityX,
										) / Math.PI;
										u < 0 && (u += 360);
										var l = 112.5 <= u && u < 247.5, c = 202.5 <= u && u < 337.5;
										return {
											up: c,
											down: !c && 22.5 <= u && u < 157.5,
											left: l,
											right: !l && (292.5 <= u || u < 67.5),
											angle: u,
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
					) && Oo(t.prototype, n), s
				);
			}(Re.BaseEvent);
			Ke.InteractEvent = er, Object.defineProperties(
				er.prototype,
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
			var Ze = {};
			function Je(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.PointerInfo =
				void 0, Ze.PointerInfo =
				function e(t, n, r, o, i) {
					(
						function (s, a) {
							if (!(s instanceof a)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), Je(this, "id", void 0), Je(this, "pointer", void 0), Je(
						this,
						"event",
						void 0,
					), Je(this, "downTime", void 0), Je(this, "downTarget", void 0), this.id =
						t, this.pointer = n, this.event = r, this.downTime = o, this.downTarget =
						i;
				};
			var Pt, Ot, $ = {};
			function So(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function z(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty($, "__esModule", { value: !0 }), Object.defineProperty(
				$,
				"PointerInfo",
				{
					enumerable: !0,
					get: function () {
						return Ze.PointerInfo;
					},
				},
			), $.default = $.Interaction = $._ProxyMethods = $._ProxyValues = void 0, $._ProxyValues =
				Pt, function (e) {
				e.interactable = "", e.element = "", e.prepared = "", e.pointerIsDown =
					"", e.pointerWasMoved = "", e._proxy = "";
			}(Pt || ($._ProxyValues = Pt = {})), $._ProxyMethods = Ot, function (e) {
				e.start = "", e.move = "", e.end = "", e.stop = "", e.interacting = "";
			}(Ot || ($._ProxyMethods = Ot = {}));
			var To = 0,
				tr = function () {
					function e(r) {
						var o = this, i = r.pointerType, s = r.scopeFire;
						(
							function (p, v) {
								if (!(p instanceof v)) {
									throw new TypeError("Cannot call a class as a function");
								}
							}
						)(this, e), z(this, "interactable", null), z(this, "element", null), z(
							this,
							"rect",
							void 0,
						), z(this, "_rects", void 0), z(this, "edges", void 0), z(
							this,
							"_scopeFire",
							void 0,
						), z(this, "prepared", { name: null, axis: null, edges: null }), z(
							this,
							"pointerType",
							void 0,
						), z(this, "pointers", []), z(this, "downEvent", null), z(
							this,
							"downPointer",
							{},
						), z(
							this,
							"_latestPointer",
							{ pointer: null, event: null, eventTarget: null },
						), z(this, "prevEvent", null), z(this, "pointerIsDown", !1), z(
							this,
							"pointerWasMoved",
							!1,
						), z(this, "_interacting", !1), z(this, "_ending", !1), z(
							this,
							"_stopped",
							!0,
						), z(this, "_proxy", null), z(this, "simulation", null), z(
							this,
							"doMove",
							(0, K.warnOnce)(
								function (p) {
									this.move(p);
								},
								"The interaction.doMove() method has been renamed to interaction.move()",
							),
						), z(
							this,
							"coords",
							{
								start: x.newCoords(),
								prev: x.newCoords(),
								cur: x.newCoords(),
								delta: x.newCoords(),
								velocity: x.newCoords(),
							},
						), z(this, "_id", To++), this._scopeFire = s, this.pointerType = i;
						var a = this;
						this._proxy = {};
						var u = function (p) {
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
						for (var l in Pt) u(l);
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
						for (var f in Ot) c(f);
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
												(0, K.copyAction)(this.prepared, r), this.interactable =
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
												u =
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
														(0, he.default)(s, a) > this.pointerMoveTolerance
												);
											var l = this.getPointerIndex(r),
												c = {
													pointer: r,
													pointerIndex: l,
													pointerInfo: this.pointers[l],
													event: o,
													type: "move",
													eventTarget: i,
													dx: s,
													dy: a,
													duplicate: u,
													interaction: this,
												};
											u || x.setCoordVelocity(
												this.coords.velocity,
												this.coords.delta,
											), this._scopeFire("interactions:move", c), u ||
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
											var u = /cancel$/i.test(o.type) ? "cancel" : "up";
											this._scopeFire(
												"interactions:".concat(u),
												{
													pointer: r,
													pointerIndex: a,
													pointerInfo: this.pointers[a],
													event: o,
													eventTarget: i,
													type: u,
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
												u = this.getPointerIndex(r),
												l = this.pointers[u];
											return (
												s = s !== !1 && (s || /(down|start)$/i.test(o.type)), l ? l.pointer =
													r : (
													l = new Ze.PointerInfo(a, r, o, null, null), u =
														this.pointers.length, this.pointers.push(l)
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
													this.pointerIsDown = !0, l.downTime =
														this.coords.cur.timeStamp, l.downTarget = i, x.pointerExtend(
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
														pointerInfo: l,
														pointerIndex: u,
														interaction: this,
													},
												), u
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
											return new Ke.InteractEvent(
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
												u = this.rect;
											if (
												u &&
													i === "move" &&
													(
														A.addEdges(
															this.edges,
															u,
															this.coords.delta[this.interactable.options.deltaSource],
														), u.width = u.right - u.left, u.height =
															u.bottom - u.top
													), this._scopeFire(
													"interactions:before-action-".concat(i),
													r,
												) === !1
											) {
												return !1;
											}
											var l = r.iEvent = this._createPreparedEvent(o, i, s, a);
											return (
												this._scopeFire("interactions:action-".concat(i), r), i === "start" && (
													this.prevEvent = l
												), this._fireEvent(l), this._scopeFire(
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
						) && So(t.prototype, n), e
					);
				}();
			$.Interaction = tr;
			var Mo = tr;
			$.default = Mo;
			var Te = {};
			function nr(e) {
				e.pointerIsDown && (
					on(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y =
						0
				);
			}
			function rr(e) {
				rn(e.interaction);
			}
			function rn(e) {
				if (
					!function (n) {
						return !(!n.offset.pending.x && !n.offset.pending.y);
					}(e)
				) {
					return !1;
				}
				var t = e.offset.pending;
				return (
					on(e.coords.cur, t), on(e.coords.delta, t), A.addEdges(
						e.edges,
						e.rect,
						t,
					), t.x = 0, t.y = 0, !0
				);
			}
			function jo(e) {
				var t = e.x, n = e.y;
				this.offset.pending.x += t, this.offset.pending.y += n, this.offset.total.x +=
					t, this.offset.total.y += n;
			}
			function on(e, t) {
				var n = e.page, r = e.client, o = t.x, i = t.y;
				n.x += o, n.y += i, r.x += o, r.y += i;
			}
			Object.defineProperty(Te, "__esModule", { value: !0 }), Te.addTotal = nr, Te.applyPending =
				rn, Te.default = void 0, $._ProxyMethods.offsetBy = "";
			var ko = {
				id: "offset",
				before: ["modifiers", "pointer-events", "actions", "inertia"],
				install: function (e) {
					e.Interaction.prototype.offsetBy = jo;
				},
				listeners: {
					"interactions:new": function (e) {
						e.interaction.offset =
							{ total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
					},
					"interactions:update-pointer": function (e) {
						return nr(e.interaction);
					},
					"interactions:before-action-start": rr,
					"interactions:before-action-move": rr,
					"interactions:before-action-end": function (e) {
						var t = e.interaction;
						if (rn(t)) {
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
			Te.default = ko;
			var Fe = {};
			function Io(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function F(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.default =
				Fe.InertiaState = void 0;
			var or = function () {
				function e(r) {
					(
						function (o, i) {
							if (!(o instanceof i)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), F(this, "active", !1), F(this, "isModified", !1), F(
						this,
						"smoothEnd",
						!1,
					), F(this, "allowResume", !1), F(this, "modification", void 0), F(
						this,
						"modifierCount",
						0,
					), F(this, "modifierArg", void 0), F(this, "startCoords", void 0), F(
						this,
						"t0",
						0,
					), F(this, "v0", 0), F(this, "te", 0), F(this, "targetOffset", void 0), F(
						this,
						"modifiedOffset",
						void 0,
					), F(this, "currentOffset", void 0), F(this, "lambda_v0", 0), F(
						this,
						"one_ve_v0",
						0,
					), F(this, "timeout", void 0), F(this, "interaction", void 0), this.interaction =
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
										var o = this.interaction, i = Et(o);
										if (!i || !i.enabled) {
											return !1;
										}
										var s = o.coords.velocity.client,
											a = (0, he.default)(s.x, s.y),
											u = this.modification || (
												this.modification = new Ee.default(o)
											);
										if (
											u.copyFrom(o.modification), this.t0 = o._now(), this.allowResume =
												i.allowResume, this.v0 = a, this.currentOffset =
												{ x: 0, y: 0 }, this.startCoords = o.coords.cur.page, this.modifierArg =
												u.fillArg({
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
												u.result = u.setAll(this.modifierArg), !u.result.changed
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
											i = Et(this.interaction),
											s = i.resistance,
											a = -Math.log(i.endSpeed / this.v0) / s;
										this.targetOffset = { x: (o.x - a) / s, y: (o.y - a) / s }, this.te =
											a, this.lambda_v0 = s / this.v0, this.one_ve_v0 =
											1 - (i.endSpeed / this.v0);
										var u = this.modification, l = this.modifierArg;
										l.pageCoords =
											{
												x: this.startCoords.x + this.targetOffset.x,
												y: this.startCoords.y + this.targetOffset.y,
											}, u.result = u.setAll(l), u.result.changed && (
											this.isModified = !0, this.modifiedOffset =
												{
													x: this.targetOffset.x + u.result.delta.x,
													y: this.targetOffset.y + u.result.delta.y,
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
											re.default.request(function () {
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
											u = this,
											l = this.interaction,
											c = Et(l).resistance,
											f = (l._now() - this.t0) / 1e3;
										if (f < this.te) {
											var p,
												v = 1 - (
													(Math.exp(-c * f) - this.lambda_v0) / this.one_ve_v0
												);
											this.isModified ? (
												r = this.targetOffset.x, o = this.targetOffset.y, i =
													this.modifiedOffset.x, s = this.modifiedOffset.y, p =
													{ x: ir(a = v, 0, r, i), y: ir(a, 0, o, s) }
											) : p =
												{
													x: this.targetOffset.x * v,
													y: this.targetOffset.y * v,
												};
											var d = {
												x: p.x - this.currentOffset.x,
												y: p.y - this.currentOffset.y,
											};
											this.currentOffset.x += d.x, this.currentOffset.y += d.y, l.offsetBy(
												d,
											), l.move(), this.onNextFrame(function () {
												return u.inertiaTick();
											});
										} else {
											l.offsetBy({
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
											s = Et(o).smoothEndDuration;
										if (i < s) {
											var a = {
												x: ar(i, 0, this.targetOffset.x, s),
												y: ar(i, 0, this.targetOffset.y, s),
											},
												u = {
													x: a.x - this.currentOffset.x,
													y: a.y - this.currentOffset.y,
												};
											this.currentOffset.x += u.x, this.currentOffset.y += u.y, o.offsetBy(
												u,
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
											null, re.default.cancel(this.timeout);
									},
								},
							]
					) && Io(t.prototype, n), e
				);
			}();
			function Et(e) {
				var t = e.interactable, n = e.prepared;
				return t && t.options && n.name && t.options[n.name].inertia;
			}
			function ir(e, t, n, r) {
				var o = 1 - e;
				return (o * o * t) + (2 * o * e * n) + (e * e * r);
			}
			function ar(e, t, n, r) {
				return (-n * (e /= r) * (e - 2)) + t;
			}
			Fe.InertiaState = or;
			var Do = {
				id: "inertia",
				before: ["modifiers", "actions"],
				install: function (e) {
					var t = e.defaults;
					e.usePlugin(Te.default), e.usePlugin(X.default), e.actions.phases.inertiastart =
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
						t.inertia = new or(t);
					},
					"interactions:before-action-end": function (e) {
						var t = e.interaction, n = e.event;
						return (!t._interacting || t.simulation || !t.inertia.start(n)) && null;
					},
					"interactions:down": function (e) {
						var t = e.interaction, n = e.eventTarget, r = t.inertia;
						if (r.active) {
							for (var o = n; h.default.element(o); ) {
								if (o === t.element) {
									r.resume(e);
									break;
								}
								o = _.parentNode(o);
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
					"interactions:action-resume": X.addEventModifiers,
					"interactions:action-inertiastart": X.addEventModifiers,
					"interactions:after-action-inertiastart": function (e) {
						return e.interaction.modification.restoreInteractionCoords(e);
					},
					"interactions:after-action-resume": function (e) {
						return e.interaction.modification.restoreInteractionCoords(e);
					},
				},
			};
			Fe.default = Do;
			var Qe = {};
			function Ao(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function et(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			function sr(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					if (e.immediatePropagationStopped) {
						break;
					}
					r(e);
				}
			}
			Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.Eventable =
				void 0;
			var Ro = function () {
				function e(r) {
					(
						function (o, i) {
							if (!(o instanceof i)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), et(this, "options", void 0), et(this, "types", {}), et(
						this,
						"propagationStopped",
						!1,
					), et(this, "immediatePropagationStopped", !1), et(
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
										(o = this.types[r.type]) && sr(r, o), !r.propagationStopped &&
											i &&
											(o = i[r.type]) &&
											sr(r, o);
									},
								},
								{
									key: "on",
									value: function (r, o) {
										var i = (0, Ae.default)(r, o);
										for (r in i) this.types[r] =
											D.merge(this.types[r] || [], i[r]);
									},
								},
								{
									key: "off",
									value: function (r, o) {
										var i = (0, Ae.default)(r, o);
										for (r in i) {
											var s = this.types[r];
											if (s && s.length) {
												for (var a = 0; a < i[r].length; a++) {
													var u = i[r][a], l = s.indexOf(u);
													l !== -1 && s.splice(l, 1);
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
					) && Ao(t.prototype, n), e
				);
			}();
			Qe.Eventable = Ro;
			var tt = {};
			Object.defineProperty(tt, "__esModule", { value: !0 }), tt.default =
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
			var an = {};
			Object.defineProperty(an, "__esModule", { value: !0 }), an.createInteractStatic =
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
							_.getElementRect, t.getElementClientRect = _.getElementClientRect, t.matchesSelector =
							_.matchesSelector, t.closest = _.closest, t.globalEvents = {}, t.version =
							"1.10.11", t.scope = e, t.use =
							function (n, r) {
								return (this.scope.usePlugin(n, r), this);
							}, t.isSet =
							function (n, r) {
								return !!this.scope.interactables.get(n, r && r.context);
							}, t.on =
							(0, K.warnOnce)(
								function (n, r, o) {
									if (
										h.default.string(n) &&
											n.search(" ") !== -1 &&
											(n = n.trim().split(/ +/)), h.default.array(n)
									) {
										for (var i = 0; i < n.length; i++) {
											var s = n[i];
											this.on(s, r, o);
										}
										return this;
									}
									if (h.default.object(n)) {
										for (var a in n) this.on(a, n[a], r);
										return this;
									}
									return (
										(0, tt.default)(n, this.scope.actions)
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
							(0, K.warnOnce)(
								function (n, r, o) {
									if (
										h.default.string(n) &&
											n.search(" ") !== -1 &&
											(n = n.trim().split(/ +/)), h.default.array(n)
									) {
										for (var i = 0; i < n.length; i++) {
											var s = n[i];
											this.off(s, r, o);
										}
										return this;
									}
									if (h.default.object(n)) {
										for (var a in n) this.off(a, n[a], r);
										return this;
									}
									var u;
									return (
										(0, tt.default)(n, this.scope.actions) ? (
											n in this.globalEvents
										) &&
											(u = this.globalEvents[n].indexOf(r)) !== -1 &&
											this.globalEvents[n].splice(u, 1) : this.scope.events.remove(
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
								return q.default.supportsTouch;
							}, t.supportsPointerEvent =
							function () {
								return q.default.supportsPointerEvent;
							}, t.stop =
							function () {
								for (var n = 0; n < this.scope.interactions.list.length; n++) this.scope.interactions.list[n].stop();
								return this;
							}, t.pointerMoveTolerance =
							function (n) {
								return h.default.number(n) ? (
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
			var St = {};
			function zo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function ce(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(St, "__esModule", { value: !0 }), St.Interactable =
				void 0;
			var Co = function () {
				function e(r, o, i, s) {
					(
						function (a, u) {
							if (!(a instanceof u)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), ce(this, "options", void 0), ce(this, "_actions", void 0), ce(
						this,
						"target",
						void 0,
					), ce(this, "events", new Qe.Eventable()), ce(
						this,
						"_context",
						void 0,
					), ce(this, "_win", void 0), ce(this, "_doc", void 0), ce(
						this,
						"_scopeEvents",
						void 0,
					), ce(this, "_rectChecker", void 0), this._actions = o.actions, this.target =
						r, this._context = o.context || i, this._win =
						(0, T.getWindow)((0, _.trySelector)(r) ? this._context : r), this._doc =
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
											h.default.func(o.onstart) && this.on(
												"".concat(r, "start"),
												o.onstart,
											), h.default.func(o.onmove) && this.on(
												"".concat(r, "move"),
												o.onmove,
											), h.default.func(o.onend) && this.on(
												"".concat(r, "end"),
												o.onend,
											), h.default.func(o.oninertiastart) && this.on(
												"".concat(r, "inertiastart"),
												o.oninertiastart,
											), this
										);
									},
								},
								{
									key: "updatePerActionListeners",
									value: function (r, o, i) {
										(h.default.array(o) || h.default.object(o)) && this.off(
											r,
											o,
										), (h.default.array(i) || h.default.object(i)) && this.on(
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
											var a = s, u = this.options[r], l = o[a];
											a === "listeners" && this.updatePerActionListeners(
												r,
												u.listeners,
												l,
											), h.default.array(l)
												? u[a] = D.from(l)
												: h.default.plainObject(l)
													? (
														u[a] =
															(0, w.default)(u[a] || {}, (0, Oe.default)(l)), h.default.object(
															i.perAction[a],
														) &&
															("enabled" in i.perAction[a]) &&
															(u[a].enabled = l.enabled !== !1)
													)
													: h.default.bool(l) && h.default.object(
														i.perAction[a],
													)
														? u[a].enabled = l
														: u[a] = l;
										}
									},
								},
								{
									key: "getRect",
									value: function (r) {
										return (
											r =
												r || (
													h.default.element(this.target) ? this.target : null
												), h.default.string(this.target) && (
												r = r || this._context.querySelector(this.target)
											), (0, _.getElementRect)(r)
										);
									},
								},
								{
									key: "rectChecker",
									value: function (r) {
										var o = this;
										return h.default.func(r)
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
										if ((0, _.trySelector)(o) || h.default.object(o)) {
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
											0, _.nodeContains
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
											!!h.default.element(i) && (
												h.default.string(r) ? (0, _.matchesUpTo)(i, r, o) : !!h.default.element(
													r,
												) && (0, _.nodeContains)(r, i)
											)
										);
									},
								},
								{
									key: "testIgnore",
									value: function (r, o, i) {
										return !(!r || !h.default.element(i)) && (
											h.default.string(r) ? (0, _.matchesUpTo)(i, r, o) : !!h.default.element(
												r,
											) && (0, _.nodeContains)(r, i)
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
										h.default.object(o) &&
											!h.default.array(o) &&
											(s = i, i = null);
										var a = r === "on" ? "add" : "remove",
											u = (0, Ae.default)(o, i);
										for (var l in u) {
											l === "wheel" && (l = q.default.wheelEvent);
											for (var c = 0; c < u[l].length; c++) {
												var f = u[l][c];
												(0, tt.default)(l, this._actions)
													? this.events[r](l, f)
													: h.default.string(this.target)
														? this._scopeEvents["".concat(a, "Delegate")](
															this.target,
															this._context,
															l,
															f,
															s,
														)
														: this._scopeEvents[a](this.target, l, f, s);
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
											h.default.object(r) || (r = {}), this.options =
												(0, Oe.default)(o.base), this._actions.methodDict
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
										for (var u in r) h.default.func(this[u]) && this[u](r[u]);
										return this;
									},
								},
								{
									key: "unset",
									value: function () {
										if (h.default.string(this.target)) {
											for (var r in this._scopeEvents.delegatedEvents) for (
												var o = this._scopeEvents.delegatedEvents[r],
													i = o.length - 1;
												i >= 0;
												i--
											) {
												var s = o[i],
													a = s.selector,
													u = s.context,
													l = s.listeners;
												a === this.target &&
													u === this._context &&
													o.splice(i, 1);
												for (var c = l.length - 1; c >= 0; c--) this._scopeEvents.removeDelegate(
													this.target,
													this._context,
													r,
													l[c][0],
													l[c][1],
												);
											}
										} else {
											this._scopeEvents.remove(this.target, "all");
										}
									},
								},
							]
					) && zo(t.prototype, n), e
				);
			}();
			St.Interactable = Co;
			var Tt = {};
			function Fo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function sn(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.InteractableSet =
				void 0;
			var Xo = function () {
				function e(r) {
					var o = this;
					(
						function (i, s) {
							if (!(i instanceof s)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), sn(this, "list", []), sn(this, "selectorMap", {}), sn(
						this,
						"scope",
						void 0,
					), this.scope = r, r.addListeners({
						"interactable:unset": function (i) {
							var s = i.interactable,
								a = s.target,
								u = s._context,
								l = h.default.string(a) ? o.selectorMap[a] : a[o.scope.id],
								c = D.findIndex(
									l,
									function (f) {
										return f.context === u;
									},
								);
							l[c] && (l[c].context = null, l[c].interactable = null), l.splice(
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
											this.scope.addDocument(i._doc), this.list.push(i), h.default.string(
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
											s = h.default.string(r),
											a = s ? this.selectorMap[r] : r[this.scope.id];
										if (!a) {
											return null;
										}
										var u = D.find(
											a,
											function (l) {
												return l.context === i && (
													s || l.interactable.inContext(r)
												);
											},
										);
										return u && u.interactable;
									},
								},
								{
									key: "forEachMatch",
									value: function (r, o) {
										for (var i = 0; i < this.list.length; i++) {
											var s = this.list[i], a = void 0;
											if (
												(
													h.default.string(s.target) ? h.default.element(r) && _.matchesSelector(
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
					) && Fo(t.prototype, n), e
				);
			}();
			Tt.InteractableSet = Xo;
			var Mt = {};
			function Bo(e, t) {
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
			function ln(e, t) {
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
								var u, l = n[Symbol.iterator]();
								!(i = (u = l.next()).done) && (
									o.push(u.value), !r || o.length !== r
								);
								i = !0
							);
						} catch (c) {
							s = !0, a = c;
						} finally {
							try {
								i || l.return == null || l.return();
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
			Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.default =
				void 0;
			var Yo = function () {
				function e(r) {
					(
						function (o, i) {
							if (!(o instanceof i)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
					)(this, e), un(this, "currentTarget", void 0), un(
						this,
						"originalEvent",
						void 0,
					), un(this, "type", void 0), this.originalEvent = r, (0, Ve.default)(
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
					) && Bo(t.prototype, n), e
				);
			}();
			function nt(e) {
				if (!h.default.object(e)) {
					return { capture: !!e, passive: !1 };
				}
				var t = (0, w.default)({}, e);
				return (t.capture = !!e.capture, t.passive = !!e.passive, t);
			}
			var Wo = {
				id: "events",
				install: function (e) {
					var t,
						n = [],
						r = {},
						o = [],
						i = {
							add: s,
							remove: a,
							addDelegate: function (c, f, p, v, d) {
								var g = nt(d);
								if (!r[p]) {
									r[p] = [];
									for (var m = 0; m < o.length; m++) {
										var y = o[m];
										s(y, p, u), s(y, p, l, !0);
									}
								}
								var b = r[p],
									P = D.find(
										b,
										function (E) {
											return E.selector === c && E.context === f;
										},
									);
								P || (P = { selector: c, context: f, listeners: [] }, b.push(P)), P.listeners.push([
									v,
									g,
								]);
							},
							removeDelegate: function (c, f, p, v, d) {
								var g, m = nt(d), y = r[p], b = !1;
								if (y) {
									for (g = y.length - 1; g >= 0; g--) {
										var P = y[g];
										if (P.selector === c && P.context === f) {
											for (var E = P.listeners, M = E.length - 1; M >= 0; M--) {
												var R = ln(E[M], 2),
													S = R[0],
													I = R[1],
													te = I.capture,
													de = I.passive;
												if (S === v && te === m.capture && de === m.passive) {
													E.splice(M, 1), E.length || (
														y.splice(g, 1), a(f, p, u), a(f, p, l, !0)
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
							delegateListener: u,
							delegateUseCapture: l,
							delegatedEvents: r,
							documents: o,
							targets: n,
							supportsOptions: !1,
							supportsPassive: !1,
						};
					function s(c, f, p, v) {
						var d = nt(v),
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
					function a(c, f, p, v) {
						var d = nt(v),
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
										for (var P = b.length - 1; P >= 0; P--) a(c, f, b[P], d);
										return;
									}
									for (var E = 0; E < b.length; E++) if (b[E] === p) {
										c.removeEventListener(
											f,
											p,
											i.supportsOptions ? d : d.capture,
										), b.splice(E, 1), b.length === 0 && (
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
					function u(c, f) {
						for (
							var p = nt(f),
								v = new Yo(c),
								d = r[c.type],
								g = ln(x.getEventTargets(c), 1)[0],
								m = g;
							h.default.element(m);
						) {
							for (var y = 0; y < d.length; y++) {
								var b = d[y], P = b.selector, E = b.context;
								if (
									_.matchesSelector(m, P) &&
									_.nodeContains(E, g) &&
									_.nodeContains(E, m)
								) {
									var M = b.listeners;
									v.currentTarget = m;
									for (var R = 0; R < M.length; R++) {
										var S = ln(M[R], 2),
											I = S[0],
											te = S[1],
											de = te.capture,
											_n = te.passive;
										de === p.capture && _n === p.passive && I(v);
									}
								}
							}
							m = _.parentNode(m);
						}
					}
					function l(c) {
						return u(c, !0);
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
			Mt.default = Wo;
			var jt = {};
			Object.defineProperty(jt, "__esModule", { value: !0 }), jt.default =
				void 0;
			var kt = {
				methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
				search: function (e) {
					for (var t = 0; t < kt.methodOrder.length; t++) {
						var n;
						n = kt.methodOrder[t];
						var r = kt[n](e);
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
								a = _.parentNode(a);
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
							if (a.simulation && !lr(a, n)) {
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
					for (var u = 0; u < i.interactions.list.length; u++) {
						var l = i.interactions.list[u];
						if (!(l.pointerType !== r || (/down/i.test(o) && l.simulation))) {
							return l;
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
						if (lr(o, t)) {
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
			function lr(e, t) {
				return e.pointers.some(function (n) {
					return n.id === t;
				});
			}
			var Lo = kt;
			jt.default = Lo;
			var It = {};
			function cr(e) {
				return (
					cr =
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
			function fr(e, t) {
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
								var u, l = n[Symbol.iterator]();
								!(i = (u = l.next()).done) && (
									o.push(u.value), !r || o.length !== r
								);
								i = !0
							);
						} catch (c) {
							s = !0, a = c;
						} finally {
							try {
								i || l.return == null || l.return();
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
							return dr(n, r);
						}
						var o = Object.prototype.toString.call(n).slice(8, -1);
						return (
							o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set"
								? Array.from(n)
								: o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
									o,
								)
									? dr(n, r)
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
			function dr(e, t) {
				(t == null || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function No(e, t) {
				if (!(e instanceof t)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			function Uo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function pr(e, t) {
				return (
					pr =
						Object.setPrototypeOf || function (n, r) {
							return (n.__proto__ = r, n);
						}
				)(e, t);
			}
			function Vo(e, t) {
				return !t || (cr(t) !== "object" && typeof t != "function") ? function (
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
			function cn(e) {
				return (
					cn =
						Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
						}
				)(e);
			}
			Object.defineProperty(It, "__esModule", { value: !0 }), It.default =
				void 0;
			var fn = [
				"pointerDown",
				"pointerMove",
				"pointerUp",
				"updatePointer",
				"removePointer",
				"windowBlur",
			];
			function vr(e, t) {
				return function (n) {
					var r = t.interactions.list,
						o = x.getPointerType(n),
						i = fr(x.getEventTargets(n), 2),
						s = i[0],
						a = i[1],
						u = [];
					if (/^touch/.test(n.type)) {
						t.prevTouchTime = t.now();
						for (var l = 0; l < n.changedTouches.length; l++) {
							var c = n.changedTouches[l],
								f = {
									pointer: c,
									pointerId: x.getPointerId(c),
									pointerType: o,
									eventType: n.type,
									eventTarget: s,
									curEventTarget: a,
									scope: t,
								},
								p = hr(f);
							u.push([f.pointer, f.eventTarget, f.curEventTarget, p]);
						}
					} else {
						var v = !1;
						if (!q.default.supportsPointerEvent && /mouse/.test(n.type)) {
							for (var d = 0; d < r.length && !v; d++) v =
								r[d].pointerType !== "mouse" && r[d].pointerIsDown;
							v = v || (t.now() - t.prevTouchTime) < 500 || n.timeStamp === 0;
						}
						if (!v) {
							var g = {
								pointer: n,
								pointerId: x.getPointerId(n),
								pointerType: o,
								eventType: n.type,
								curEventTarget: a,
								eventTarget: s,
								scope: t,
							},
								m = hr(g);
							u.push([g.pointer, g.eventTarget, g.curEventTarget, m]);
						}
					}
					for (var y = 0; y < u.length; y++) {
						var b = fr(u[y], 4), P = b[0], E = b[1], M = b[2];
						b[3][e](P, n, E, M);
					}
				};
			}
			function hr(e) {
				var t = e.pointerType,
					n = e.scope,
					r = { interaction: jt.default.search(e), searchDetails: e };
				return (
					n.fire("interactions:find", r), r.interaction || n.interactions.new({
						pointerType: t,
					})
				);
			}
			function dn(e, t) {
				var n = e.doc,
					r = e.scope,
					o = e.options,
					i = r.interactions.docEvents,
					s = r.events,
					a = s[t];
				for (
					var u
					in
					r.browser.isIOS && !o.events && (o.events = { passive: !1 }), s.delegatedEvents
				) a(n, u, s.delegateListener), a(n, u, s.delegateUseCapture, !0);
				for (var l = o && o.events, c = 0; c < i.length; c++) {
					var f = i[c];
					a(n, f.type, f.listener, l);
				}
			}
			var qo = {
				id: "core/interactions",
				install: function (e) {
					for (var t = {}, n = 0; n < fn.length; n++) {
						var r = fn[n];
						t[r] = vr(r, e);
					}
					var o, i = q.default.pEventTypes;
					function s() {
						for (var a = 0; a < e.interactions.list.length; a++) {
							var u = e.interactions.list[a];
							if (
								u.pointerIsDown &&
								u.pointerType === "touch" &&
								!u._interacting
							) {
								for (
									var l = function () {
										var f = u.pointers[c];
										e.documents.some(function (p) {
											var v = p.doc;
											return (0, _.nodeContains)(v, f.downTarget);
										}) || u.removePointer(f.pointer, f.event);
									},
										c = 0;
									c < u.pointers.length;
									c++
								) l();
							}
						}
					}
					(
						o =
							C.default.PointerEvent ? [
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
							for (var u = 0; u < e.interactions.list.length; u++) e.interactions.list[u].documentBlur(
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
										), g && pr(d, g);
								}
							)(v, a);
							var u,
								l,
								c,
								f,
								p = (
									c = v, f =
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
										var d, g = cn(c);
										if (f) {
											var m = cn(this).constructor;
											d = Reflect.construct(g, arguments, m);
										} else {
											d = g.apply(this, arguments);
										}
										return Vo(this, d);
									}
								);
							function v() {
								return (No(this, v), p.apply(this, arguments));
							}
							return (
								u = v, (
									l =
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
								) && Uo(u.prototype, l), v
							);
						}($.default), e.interactions =
						{
							list: [],
							new: function (a) {
								a.scopeFire =
									function (l, c) {
										return e.fire(l, c);
									};
								var u = new e.Interaction(a);
								return (e.interactions.list.push(u), u);
							},
							listeners: t,
							docEvents: o,
							pointerMoveTolerance: 1,
						}, e.usePlugin(Ce.default);
				},
				listeners: {
					"scope:add-document": function (e) {
						return dn(e, "add");
					},
					"scope:remove-document": function (e) {
						return dn(e, "remove");
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
				onDocSignal: dn,
				doOnInteractions: vr,
				methodNames: fn,
			};
			It.default = qo;
			var rt = {};
			function gr(e) {
				return (
					gr =
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
			function pn(e, t, n) {
				return (
					pn =
						typeof Reflect < "u" && Reflect.get ? Reflect.get : function (
							r,
							o,
							i,
						) {
							var s = function (u, l) {
								for (
									;
									!Object.prototype.hasOwnProperty.call(u, l) && (u = Xe(u)) !== null;
								);
								return u;
							}(r, o);
							if (s) {
								var a = Object.getOwnPropertyDescriptor(s, o);
								return a.get ? a.get.call(i) : a.value;
							}
						}
				)(e, t, n || e);
			}
			function yr(e, t) {
				return (
					yr =
						Object.setPrototypeOf || function (n, r) {
							return (n.__proto__ = r, n);
						}
				)(e, t);
			}
			function $o(e, t) {
				return !t || (gr(t) !== "object" && typeof t != "function") ? function (
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
			function Xe(e) {
				return (
					Xe =
						Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
						}
				)(e);
			}
			function mr(e, t) {
				if (!(e instanceof t)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			function br(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function xr(e, t, n) {
				return (t && br(e.prototype, t), n && br(e, n), e);
			}
			function B(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(rt, "__esModule", { value: !0 }), rt.initScope = wr, rt.Scope =
				void 0;
			var Go = function () {
				function e() {
					var t = this;
					mr(this, e), B(
						this,
						"id",
						"__interact_scope_".concat(Math.floor(100 * Math.random())),
					), B(this, "isInitialized", !1), B(this, "listenerMaps", []), B(
						this,
						"browser",
						q.default,
					), B(this, "defaults", (0, Oe.default)(He.defaults)), B(
						this,
						"Eventable",
						Qe.Eventable,
					), B(
						this,
						"actions",
						{
							map: {},
							phases: { start: !0, move: !0, end: !0 },
							methodDict: {},
							phaselessTypes: {},
						},
					), B(this, "interactStatic", (0, an.createInteractStatic)(this)), B(
						this,
						"InteractEvent",
						Ke.InteractEvent,
					), B(this, "Interactable", void 0), B(
						this,
						"interactables",
						new Tt.InteractableSet(this),
					), B(this, "_win", void 0), B(this, "document", void 0), B(
						this,
						"window",
						void 0,
					), B(this, "documents", []), B(
						this,
						"_plugins",
						{ list: [], map: {} },
					), B(
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
								function (u, l) {
									if (typeof l != "function" && l !== null) {
										throw new TypeError(
											"Super expression must either be null or a function",
										);
									}
									u.prototype =
										Object.create(
											l && l.prototype,
											{
												constructor: {
													value: u,
													writable: !0,
													configurable: !0,
												},
											},
										), l && yr(u, l);
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
										var u, l = Xe(o);
										if (i) {
											var c = Xe(this).constructor;
											u = Reflect.construct(l, arguments, c);
										} else {
											u = l.apply(this, arguments);
										}
										return $o(this, u);
									}
								);
							function a() {
								return (mr(this, a), s.apply(this, arguments));
							}
							return (
								xr(
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
											value: function (u) {
												return (
													pn(Xe(a.prototype), "set", this).call(this, u), n.fire(
														"interactable:set",
														{ options: u, interactable: this },
													), this
												);
											},
										},
										{
											key: "unset",
											value: function () {
												pn(Xe(a.prototype), "unset", this).call(this), n.interactables.list.splice(
													n.interactables.list.indexOf(this),
													1,
												), n.fire("interactable:unset", { interactable: this });
											},
										},
									],
								), a
							);
						}(St.Interactable);
				}
				return (
					xr(
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
									return this.isInitialized ? this : wr(this, t);
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
													function (a, u) {
														return (a[u] = !0, a[_r(u)] = !0, a);
													},
													{},
												);
											r < o;
											r++
										) {
											var s = this.listenerMaps[r].id;
											if (i[s] || i[_r(s)]) {
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
									var r = T.getWindow(t);
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
										r = T.getWindow(t),
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
			function wr(e, t) {
				return (
					e.isInitialized = !0, h.default.window(t) && T.init(t), C.default.init(
						t,
					), q.default.init(t), re.default.init(t), e.window = t, e.document =
						t.document, e.usePlugin(It.default), e.usePlugin(Mt.default), e
				);
			}
			function _r(e) {
				return e && e.replace(/\/.*$/, "");
			}
			rt.Scope = Go;
			var W = {};
			Object.defineProperty(W, "__esModule", { value: !0 }), W.default = void 0;
			var Pr = new rt.Scope(), Ho = Pr.interactStatic;
			W.default = Ho;
			var Ko = typeof globalThis < "u"
				? globalThis
				: typeof window < "u"
					? window
					: void 0;
			Pr.init(Ko);
			var Dt = {};
			Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.default =
				void 0, Dt.default = function () {};
			var At = {};
			Object.defineProperty(At, "__esModule", { value: !0 }), At.default =
				void 0, At.default = function () {};
			var Rt = {};
			function Or(e, t) {
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
								var u, l = n[Symbol.iterator]();
								!(i = (u = l.next()).done) && (
									o.push(u.value), !r || o.length !== r
								);
								i = !0
							);
						} catch (c) {
							s = !0, a = c;
						} finally {
							try {
								i || l.return == null || l.return();
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
							return Er(n, r);
						}
						var o = Object.prototype.toString.call(n).slice(8, -1);
						return (
							o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set"
								? Array.from(n)
								: o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
									o,
								)
									? Er(n, r)
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
			function Er(e, t) {
				(t == null || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.default =
				void 0, Rt.default =
				function (e) {
					var t = [
						["x", "y"],
						["left", "top"],
						["right", "bottom"],
						["width", "height"],
					].filter(function (r) {
						var o = Or(r, 2), i = o[0], s = o[1];
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
									u = e.offset,
									l = u === void 0 ? { x: 0, y: 0 } : u,
									c = { range: i, grid: e, x: null, y: null },
									f = 0;
								f < t.length;
								f++
							) {
								var p = Or(t[f], 2),
									v = p[0],
									d = p[1],
									g = Math.round((r - l.x) / e[v]),
									m = Math.round((o - l.y) / e[d]);
								c[v] = Math.max(a.left, Math.min(a.right, (g * e[v]) + l.x)), c[d] =
									Math.max(a.top, Math.min(a.bottom, (m * e[d]) + l.y));
							}
							return c;
						};
					return (n.grid = e, n.coordFields = t, n);
				};
			var ot = {};
			Object.defineProperty(ot, "__esModule", { value: !0 }), Object.defineProperty(
				ot,
				"edgeTarget",
				{
					enumerable: !0,
					get: function () {
						return Dt.default;
					},
				},
			), Object.defineProperty(
				ot,
				"elements",
				{
					enumerable: !0,
					get: function () {
						return At.default;
					},
				},
			), Object.defineProperty(
				ot,
				"grid",
				{
					enumerable: !0,
					get: function () {
						return Rt.default;
					},
				},
			);
			var zt = {};
			Object.defineProperty(zt, "__esModule", { value: !0 }), zt.default =
				void 0;
			var Zo = {
				id: "snappers",
				install: function (e) {
					var t = e.interactStatic;
					t.snappers = (0, w.default)(t.snappers || {}, ot), t.createSnapGrid =
						t.snappers.grid;
				},
			};
			zt.default = Zo;
			var Be = {};
			function Sr(e, t) {
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
			function vn(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t] != null ? arguments[t] : {};
					t % 2
						? Sr(Object(n), !0)
							.forEach(function (r) {
								Jo(e, r, n[r]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: Sr(Object(n))
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
			function Jo(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(Be, "__esModule", { value: !0 }), Be.aspectRatio =
				Be.default = void 0;
			var Tr = {
				start: function (e) {
					var t = e.state,
						n = e.rect,
						r = e.edges,
						o = e.pageCoords,
						i = t.options.ratio,
						s = t.options,
						a = s.equalDelta,
						u = s.modifiers;
					i === "preserve" && (i = n.width / n.height), t.startCoords =
						(0, w.default)({}, o), t.startRect = (0, w.default)({}, n), t.ratio =
						i, t.equalDelta = a;
					var l = t.linkedEdges =
						{
							top: r.top || (r.left && !r.bottom),
							left: r.left || (r.top && !r.right),
							bottom: r.bottom || (r.right && !r.top),
							right: r.right || (r.bottom && !r.left),
						};
					if (t.xIsPrimaryAxis = !(!r.left && !r.right), t.equalDelta) {
						t.edgeSign = (l.left ? 1 : -1) * (l.top ? 1 : -1);
					} else {
						var c = t.xIsPrimaryAxis ? l.top : l.left;
						t.edgeSign = c ? -1 : 1;
					}
					if ((0, w.default)(e.edges, l), u && u.length) {
						var f = new Ee.default(e.interaction);
						f.copyFrom(e.interaction.modification), f.prepareStates(u), t.subModification =
							f, f.startAll(vn({}, e));
					}
				},
				set: function (e) {
					var t = e.state,
						n = e.rect,
						r = e.coords,
						o = (0, w.default)({}, r),
						i = t.equalDelta ? Qo : ei;
					if (i(t, t.xIsPrimaryAxis, r, n), !t.subModification) {
						return null;
					}
					var s = (0, w.default)({}, n);
					(0, A.addEdges)(t.linkedEdges, s, { x: r.x - o.x, y: r.y - o.y });
					var a = t.subModification.setAll(
						vn(
							vn({}, e),
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
						u = a.delta;
					return (
						a.changed && (
							i(t, Math.abs(u.x) > Math.abs(u.y), a.coords, a.rect), (
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
			function Qo(e, t, n) {
				var r = e.startCoords, o = e.edgeSign;
				t ? n.y = r.y + ((n.x - r.x) * o) : n.x = r.x + ((n.y - r.y) * o);
			}
			function ei(e, t, n, r) {
				var o = e.startRect, i = e.startCoords, s = e.ratio, a = e.edgeSign;
				if (t) {
					var u = r.width / s;
					n.y = i.y + ((u - o.height) * a);
				} else {
					var l = r.height * s;
					n.x = i.x + ((l - o.width) * a);
				}
			}
			Be.aspectRatio = Tr;
			var ti = (0, X.makeModifier)(Tr, "aspectRatio");
			Be.default = ti;
			var Me = {};
			Object.defineProperty(Me, "__esModule", { value: !0 }), Me.default =
				void 0;
			var Mr = function () {};
			Mr._defaults = {};
			var ni = Mr;
			Me.default = ni;
			var hn = {};
			Object.defineProperty(hn, "__esModule", { value: !0 }), Object.defineProperty(
				hn,
				"default",
				{
					enumerable: !0,
					get: function () {
						return Me.default;
					},
				},
			);
			var U = {};
			function gn(e, t, n) {
				return h.default.func(e) ? A.resolveRectLike(
					e,
					t.interactable,
					t.element,
					[n.x, n.y, t],
				) : A.resolveRectLike(e, t.interactable, t.element);
			}
			Object.defineProperty(U, "__esModule", { value: !0 }), U.getRestrictionRect =
				gn, U.restrict = U.default = void 0;
			var jr = {
				start: function (e) {
					var t = e.rect,
						n = e.startOffset,
						r = e.state,
						o = e.interaction,
						i = e.pageCoords,
						s = r.options,
						a = s.elementRect,
						u = (0, w.default)(
							{ left: 0, top: 0, right: 0, bottom: 0 },
							s.offset || {},
						);
					if (t && a) {
						var l = gn(s.restriction, o, i);
						if (l) {
							var c =
								l.right - l.left - t.width,
								f =
									l.bottom - l.top - t.height;
							c < 0 && (u.left += c, u.right += c), f < 0 && (
								u.top += f, u.bottom += f
							);
						}
						u.left += n.left - (t.width * a.left), u.top +=
							n.top - (t.height * a.top), u.right +=
							n.right - (t.width * (1 - a.right)), u.bottom +=
							n.bottom - (t.height * (1 - a.bottom));
					}
					r.offset = u;
				},
				set: function (e) {
					var t = e.coords,
						n = e.interaction,
						r = e.state,
						o = r.options,
						i = r.offset,
						s = gn(o.restriction, n, t);
					if (s) {
						var a = A.xywhToTlbr(s);
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
			U.restrict = jr;
			var ri = (0, X.makeModifier)(jr, "restrict");
			U.default = ri;
			var ie = {};
			Object.defineProperty(ie, "__esModule", { value: !0 }), ie.restrictEdges =
				ie.default = void 0;
			var kr = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 },
				Ir = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
			function Dr(e, t) {
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
			var Ar = {
				noInner: kr,
				noOuter: Ir,
				start: function (e) {
					var t,
						n = e.interaction,
						r = e.startOffset,
						o = e.state,
						i = o.options;
					if (i) {
						var s = (0, U.getRestrictionRect)(i.offset, n, n.coords.start.page);
						t = A.rectToXY(s);
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
							u = (0, U.getRestrictionRect)(s.inner, r, a) || {},
							l = (0, U.getRestrictionRect)(s.outer, r, a) || {};
						Dr(u, kr), Dr(l, Ir), n.top ? t.y =
							Math.min(Math.max(l.top + i.top, a.y), u.top + i.top) : n.bottom && (
							t.y =
								Math.max(
									Math.min(l.bottom + i.bottom, a.y),
									u.bottom + i.bottom,
								)
						), n.left ? t.x =
							Math.min(Math.max(l.left + i.left, a.x), u.left + i.left) : n.right && (
							t.x =
								Math.max(Math.min(l.right + i.right, a.x), u.right + i.right)
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
			ie.restrictEdges = Ar;
			var oi = (0, X.makeModifier)(Ar, "restrictEdges");
			ie.default = oi;
			var Ye = {};
			Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.restrictRect =
				Ye.default = void 0;
			var ii = (0, w.default)(
				{
					get elementRect() {
						return { top: 0, left: 0, bottom: 1, right: 1 };
					},
					set elementRect(e) {},
				},
				U.restrict.defaults,
			),
				Rr = { start: U.restrict.start, set: U.restrict.set, defaults: ii };
			Ye.restrictRect = Rr;
			var ai = (0, X.makeModifier)(Rr, "restrictRect");
			Ye.default = ai;
			var We = {};
			Object.defineProperty(We, "__esModule", { value: !0 }), We.restrictSize =
				We.default = void 0;
			var si = { width: -1 / 0, height: -1 / 0 },
				ui = { width: 1 / 0, height: 1 / 0 },
				zr = {
					start: function (e) {
						return ie.restrictEdges.start(e);
					},
					set: function (e) {
						var t = e.interaction,
							n = e.state,
							r = e.rect,
							o = e.edges,
							i = n.options;
						if (o) {
							var s = A.tlbrToXywh(
								(0, U.getRestrictionRect)(i.min, t, e.coords),
							) || si,
								a = A.tlbrToXywh((0, U.getRestrictionRect)(i.max, t, e.coords)) || ui;
							n.options =
								{
									endOnly: i.endOnly,
									inner: (0, w.default)({}, ie.restrictEdges.noInner),
									outer: (0, w.default)({}, ie.restrictEdges.noOuter),
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
							), ie.restrictEdges.set(e), n.options = i;
						}
					},
					defaults: { min: null, max: null, endOnly: !1, enabled: !1 },
				};
			We.restrictSize = zr;
			var li = (0, X.makeModifier)(zr, "restrictSize");
			We.default = li;
			var yn = {};
			Object.defineProperty(yn, "__esModule", { value: !0 }), Object.defineProperty(
				yn,
				"default",
				{
					enumerable: !0,
					get: function () {
						return Me.default;
					},
				},
			);
			var be = {};
			Object.defineProperty(be, "__esModule", { value: !0 }), be.snap =
				be.default = void 0;
			var Cr = {
				start: function (e) {
					var t,
						n = e.interaction,
						r = e.interactable,
						o = e.element,
						i = e.rect,
						s = e.state,
						a = e.startOffset,
						u = s.options,
						l = u.offsetWithOrigin ? function (p) {
							var v = p.interaction.element;
							return (0, A.rectToXY)(
								(0, A.resolveRectLike)(p.state.options.origin, null, null, [v]),
							) || (0, _e.default)(
								p.interactable,
								v,
								p.interaction.prepared.name,
							);
						}(e) : { x: 0, y: 0 };
					if (u.offset === "startCoords") {
						t = { x: n.coords.start.page.x, y: n.coords.start.page.y };
					} else {
						var c = (0, A.resolveRectLike)(u.offset, r, o, [n]);
						(t = (0, A.rectToXY)(c) || { x: 0, y: 0 }).x += l.x, t.y += l.y;
					}
					var f = u.relativePoints;
					s.offsets =
						i && f && f.length ? f.map(
							function (p, v) {
								return {
									index: v,
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
						s = (0, _e.default)(t.interactable, t.element, t.prepared.name),
						a = (0, w.default)({}, n),
						u = [];
					o.offsetWithOrigin || (a.x -= s.x, a.y -= s.y);
					for (var l = 0; l < i.length; l++) for (
						var c = i[l],
							f = a.x - c.x,
							p = a.y - c.y,
							v = 0,
							d = o.targets.length;
						v < d;
						v++
					) {
						var g, m = o.targets[v];
						(g = h.default.func(m) ? m(f, p, t._proxy, c, v) : m) && u.push({
							x: (h.default.number(g.x) ? g.x : f) + c.x,
							y: (h.default.number(g.y) ? g.y : p) + c.y,
							range: h.default.number(g.range) ? g.range : o.range,
							source: m,
							index: v,
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
						b < u.length;
						b++
					) {
						var P = u[b],
							E = P.range,
							M = P.x - a.x,
							R = P.y - a.y,
							S = (0, he.default)(M, R),
							I = S <= E;
						E === (1 / 0) && y.inRange && y.range !== (1 / 0) && (I = !1), (
							y.target && !(
								I
									? y.inRange && E !== (1 / 0)
										? (S / E) < (y.distance / y.range)
										: (E === (1 / 0) && y.range !== (1 / 0)) || S < y.distance
									: !y.inRange && S < y.distance
							)
						) || (
							y.target = P, y.distance = S, y.range = E, y.inRange = I, y.delta.x =
								M, y.delta.y = R
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
			be.snap = Cr;
			var ci = (0, X.makeModifier)(Cr, "snap");
			be.default = ci;
			var fe = {};
			function Fr(e, t) {
				(t == null || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			Object.defineProperty(fe, "__esModule", { value: !0 }), fe.snapSize =
				fe.default = void 0;
			var Xr = {
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
						t.targetFields || [["width", "height"], ["x", "y"]], be.snap.start(
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
						u = { x: i.x - a[0].x, y: i.y - a[0].y };
					o.options = (0, w.default)({}, s), o.options.targets = [];
					for (var l = 0; l < (s.targets || []).length; l++) {
						var c = (s.targets || [])[l], f = void 0;
						if (f = h.default.func(c) ? c(u.x, u.y, r) : c) {
							for (var p = 0; p < o.targetFields.length; p++) {
								var v = (
									t = o.targetFields[p], n = 2, function (y) {
										if (Array.isArray(y)) {
											return y;
										}
									}(t) ||
										function (y, b) {
											if (typeof Symbol < "u" && (Symbol.iterator in Object(y))) {
												var P = [], E = !0, M = !1, R = void 0;
												try {
													for (
														var S, I = y[Symbol.iterator]();
														!(E = (S = I.next()).done) && (
															P.push(S.value), !b || P.length !== b
														);
														E = !0
													);
												} catch (te) {
													M = !0, R = te;
												} finally {
													try {
														E || I.return == null || I.return();
													} finally {
														if (M) {
															throw R;
														}
													}
												}
												return P;
											}
										}(t, n) ||
										function (y, b) {
											if (y) {
												if (typeof y == "string") {
													return Fr(y, b);
												}
												var P = Object.prototype.toString.call(y).slice(8, -1);
												return (
													P === "Object" &&
														y.constructor &&
														(P = y.constructor.name), P === "Map" || P === "Set"
														? Array.from(y)
														: P === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
															P,
														)
															? Fr(y, b)
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
									d = v[0],
									g = v[1];
								if ((d in f) || (g in f)) {
									f.x = f[d], f.y = f[g];
									break;
								}
							}
							o.options.targets.push(f);
						}
					}
					var m = be.snap.set(e);
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
			fe.snapSize = Xr;
			var fi = (0, X.makeModifier)(Xr, "snapSize");
			fe.default = fi;
			var Le = {};
			Object.defineProperty(Le, "__esModule", { value: !0 }), Le.snapEdges =
				Le.default = void 0;
			var Br = {
				start: function (e) {
					var t = e.edges;
					return t ? (
						e.state.targetFields =
							e.state.targetFields || [
								[t.left ? "left" : "right", t.top ? "top" : "bottom"],
							], fe.snapSize.start(e)
					) : null;
				},
				set: fe.snapSize.set,
				defaults: (0, w.default)(
					(0, Oe.default)(fe.snapSize.defaults),
					{ targets: null, range: null, offset: { x: 0, y: 0 } },
				),
			};
			Le.snapEdges = Br;
			var di = (0, X.makeModifier)(Br, "snapEdges");
			Le.default = di;
			var mn = {};
			Object.defineProperty(mn, "__esModule", { value: !0 }), Object.defineProperty(
				mn,
				"default",
				{
					enumerable: !0,
					get: function () {
						return Me.default;
					},
				},
			);
			var bn = {};
			Object.defineProperty(bn, "__esModule", { value: !0 }), Object.defineProperty(
				bn,
				"default",
				{
					enumerable: !0,
					get: function () {
						return Me.default;
					},
				},
			);
			var Ne = {};
			Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.default =
				void 0;
			var pi = {
				aspectRatio: Be.default,
				restrictEdges: ie.default,
				restrict: U.default,
				restrictRect: Ye.default,
				restrictSize: We.default,
				snapEdges: Le.default,
				snap: be.default,
				snapSize: fe.default,
				spring: mn.default,
				avoid: hn.default,
				transform: bn.default,
				rubberband: yn.default,
			};
			Ne.default = pi;
			var Ct = {};
			Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.default =
				void 0;
			var vi = {
				id: "modifiers",
				install: function (e) {
					var t = e.interactStatic;
					for (
						var n
						in
						e.usePlugin(X.default), e.usePlugin(zt.default), t.modifiers =
							Ne.default, Ne.default
					) {
						var r = Ne.default[n], o = r._defaults, i = r._methods;
						o._methods = i, e.defaults.perAction[n] = o;
					}
				},
			};
			Ct.default = vi;
			var je = {};
			function Yr(e) {
				return (
					Yr =
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
			function hi(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (
						r.writable = !0
					), Object.defineProperty(e, r.key, r);
				}
			}
			function Wr(e, t) {
				return (
					Wr =
						Object.setPrototypeOf || function (n, r) {
							return (n.__proto__ = r, n);
						}
				)(e, t);
			}
			function gi(e, t) {
				return !t || (Yr(t) !== "object" && typeof t != "function") ? G(e) : t;
			}
			function G(e) {
				if (e === void 0) {
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called",
					);
				}
				return e;
			}
			function xn(e) {
				return (
					xn =
						Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
						}
				)(e);
			}
			function oe(e, t, n) {
				return (
					t in e ? Object.defineProperty(
						e,
						t,
						{ value: n, enumerable: !0, configurable: !0, writable: !0 },
					) : e[t] = n, e
				);
			}
			Object.defineProperty(je, "__esModule", { value: !0 }), je.PointerEvent =
				je.default = void 0;
			var yi = function (e) {
				(
					function (a, u) {
						if (typeof u != "function" && u !== null) {
							throw new TypeError(
								"Super expression must either be null or a function",
							);
						}
						a.prototype =
							Object.create(
								u && u.prototype,
								{ constructor: { value: a, writable: !0, configurable: !0 } },
							), u && Wr(a, u);
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
							var a, u = xn(r);
							if (o) {
								var l = xn(this).constructor;
								a = Reflect.construct(u, arguments, l);
							} else {
								a = u.apply(this, arguments);
							}
							return gi(this, a);
						}
					);
				function s(a, u, l, c, f, p) {
					var v;
					if (
						function (m, y) {
							if (!(m instanceof y)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}(this, s), oe(G(v = i.call(this, f)), "type", void 0), oe(
							G(v),
							"originalEvent",
							void 0,
						), oe(G(v), "pointerId", void 0), oe(G(v), "pointerType", void 0), oe(
							G(v),
							"double",
							void 0,
						), oe(G(v), "pageX", void 0), oe(G(v), "pageY", void 0), oe(
							G(v),
							"clientX",
							void 0,
						), oe(G(v), "clientY", void 0), oe(G(v), "dt", void 0), oe(
							G(v),
							"eventable",
							void 0,
						), x.pointerExtend(G(v), l), l !== u && x.pointerExtend(G(v), u), v.timeStamp =
							p, v.originalEvent = l, v.type = a, v.pointerId =
							x.getPointerId(u), v.pointerType = x.getPointerType(u), v.target =
							c, v.currentTarget = null, a === "tap"
					) {
						var d = f.getPointerIndex(u);
						v.dt = v.timeStamp - f.pointers[d].downTime;
						var g = v.timeStamp - f.tapTime;
						v.double =
							!!(
								f.prevTap &&
									f.prevTap.type !== "doubletap" &&
									f.prevTap.target === v.target &&
									g < 500
							);
					} else {
						a === "doubletap" && (v.dt = u.timeStamp - f.tapTime);
					}
					return v;
				}
				return (
					t = s, (
						n =
							[
								{
									key: "_subtractOrigin",
									value: function (a) {
										var u = a.x, l = a.y;
										return (
											this.pageX -= u, this.pageY -= l, this.clientX -= u, this.clientY -=
												l, this
										);
									},
								},
								{
									key: "_addOrigin",
									value: function (a) {
										var u = a.x, l = a.y;
										return (
											this.pageX += u, this.pageY += l, this.clientX += u, this.clientY +=
												l, this
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
					) && hi(t.prototype, n), s
				);
			}(Re.BaseEvent);
			je.PointerEvent = je.default = yi;
			var it = {};
			Object.defineProperty(it, "__esModule", { value: !0 }), it.default =
				void 0;
			var Ft = {
				id: "pointer-events/base",
				before: ["inertia", "modifiers", "auto-start", "actions"],
				install: function (e) {
					e.pointerEvents = Ft, e.defaults.actions.pointerEvents = Ft.defaults, (
						0, w.default
					)(e.actions.phaselessTypes, Ft.types);
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
								n.pointerIsDown && wn(e), xe(
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
										u = n.pointerIndex,
										l = o.pointers[u].hold,
										c = _.getPath(a),
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
									var v = c[p];
									f.node = v, r.fire("pointerEvents:collect-targets", f);
								}
								if (f.targets.length) {
									for (var d = 1 / 0, g = 0; g < f.targets.length; g++) {
										var m = f.targets[g].eventable.options.holdDuration;
										m < d && (d = m);
									}
									l.duration = d, l.timeout =
										setTimeout(
											function () {
												xe(
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
						)(e, t), xe(e, t);
					},
					"interactions:up": function (e, t) {
						wn(e), xe(e, t), function (n, r) {
							var o = n.interaction,
								i = n.pointer,
								s = n.event,
								a = n.eventTarget;
							o.pointerWasMoved || xe(
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
						wn(e), xe(e, t);
					},
				},
				PointerEvent: je.PointerEvent,
				fire: xe,
				collectEventTargets: Lr,
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
			function xe(e, t) {
				var n = e.interaction,
					r = e.pointer,
					o = e.event,
					i = e.eventTarget,
					s = e.type,
					a = e.targets,
					u = a === void 0 ? Lr(e, t) : a,
					l = new je.PointerEvent(s, r, o, i, n, t.now());
				t.fire("pointerEvents:new", { pointerEvent: l });
				for (
					var c = {
						interaction: n,
						pointer: r,
						event: o,
						eventTarget: i,
						targets: u,
						type: s,
						pointerEvent: l,
					},
						f = 0;
					f < u.length;
					f++
				) {
					var p = u[f];
					for (var v in p.props || {}) l[v] = p.props[v];
					var d = (0, _e.default)(p.eventable, p.node);
					if (
						l._subtractOrigin(d), l.eventable = p.eventable, l.currentTarget =
							p.node, p.eventable.fire(l), l._addOrigin(d), l.immediatePropagationStopped || (
							l.propagationStopped &&
								(f + 1) < u.length &&
								u[f + 1].node !== l.currentTarget
						)
					) {
						break;
					}
				}
				if (t.fire("pointerEvents:fired", c), s === "tap") {
					var g = l.double ? xe(
						{
							interaction: n,
							pointer: r,
							event: o,
							eventTarget: i,
							type: "doubletap",
						},
						t,
					) : l;
					n.prevTap = g, n.tapTime = g.timeStamp;
				}
				return l;
			}
			function Lr(e, t) {
				var n = e.interaction,
					r = e.pointer,
					o = e.event,
					i = e.eventTarget,
					s = e.type,
					a = n.getPointerIndex(r),
					u = n.pointers[a];
				if (s === "tap" && (n.pointerWasMoved || !u || u.downTarget !== i)) {
					return [];
				}
				for (
					var l = _.getPath(i),
						c = {
							interaction: n,
							pointer: r,
							event: o,
							eventTarget: i,
							type: s,
							path: l,
							targets: [],
							node: null,
						},
						f = 0;
					f < l.length;
					f++
				) {
					var p = l[f];
					c.node = p, t.fire("pointerEvents:collect-targets", c);
				}
				return (
					s === "hold" && (
						c.targets =
							c.targets.filter(function (v) {
								var d;
								return v.eventable.options.holdDuration === (
									(d = n.pointers[a]) == null ? void 0 : d.hold.duration
								);
							})
					), c.targets
				);
			}
			function wn(e) {
				var t = e.interaction, n = e.pointerIndex, r = t.pointers[n].hold;
				r && r.timeout && (clearTimeout(r.timeout), r.timeout = null);
			}
			var mi = Ft;
			it.default = mi;
			var Xt = {};
			function bi(e) {
				var t = e.interaction;
				t.holdIntervalHandle && (
					clearInterval(t.holdIntervalHandle), t.holdIntervalHandle = null
				);
			}
			Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.default =
				void 0;
			var xi = {
				id: "pointer-events/holdRepeat",
				install: function (e) {
					e.usePlugin(it.default);
					var t = e.pointerEvents;
					t.defaults.holdRepeatInterval = 0, t.types.holdrepeat =
						e.actions.phaselessTypes.holdrepeat = !0;
				},
				listeners: ["move", "up", "cancel", "endall"].reduce(
					function (e, t) {
						return (e["pointerEvents:".concat(t)] = bi, e);
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
			Xt.default = xi;
			var Bt = {};
			function wi(e) {
				return ((0, w.default)(this.events.options, e), this);
			}
			Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.default =
				void 0;
			var _i = {
				id: "pointer-events/interactableTargets",
				install: function (e) {
					var t = e.Interactable;
					t.prototype.pointerEvents = wi;
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
								var a = s.events, u = a.options;
								a.types[o] &&
									a.types[o].length &&
									s.testIgnoreAllow(u, r, i) &&
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
			Bt.default = _i;
			var Yt = {};
			Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.default =
				void 0;
			var Pi = {
				id: "pointer-events",
				install: function (e) {
					e.usePlugin(it), e.usePlugin(Xt.default), e.usePlugin(Bt.default);
				},
			};
			Yt.default = Pi;
			var at = {};
			function Nr(e) {
				var t = e.Interactable;
				e.actions.phases.reflow = !0, t.prototype.reflow =
					function (n) {
						return function (r, o, i) {
							for (
								var s = h.default.string(r.target) ? D.from(
									r._context.querySelectorAll(r.target),
								) : [r.target],
									a = i.window.Promise,
									u = a ? [] : null,
									l = function () {
										var f = s[c], p = r.getRect(f);
										if (!p) {
											return "break";
										}
										var v = D.find(
											i.interactions.list,
											function (b) {
												return b.interacting() &&
												b.interactable === r &&
												b.element === f &&
												b.prepared.name === o.name;
											},
										),
											d = void 0;
										if (v) {
											v.move(), u && (
												d =
													v._reflowPromise || new a(function (b) {
														v._reflowResolve = b;
													})
											);
										} else {
											var g = (0, A.tlbrToXywh)(p),
												m = {
													page: { x: g.x, y: g.y },
													client: { x: g.x, y: g.y },
													timeStamp: i.now(),
												},
												y = x.coordsToEvent(m);
											d =
												function (b, P, E, M, R) {
													var S = b.interactions.new({ pointerType: "reflow" }),
														I = {
															interaction: S,
															event: R,
															pointer: R,
															eventTarget: E,
															phase: "reflow",
														};
													S.interactable = P, S.element = E, S.prevEvent = R, S.updatePointer(
														R,
														R,
														E,
														!0,
													), x.setZeroCoords(S.coords.delta), (0, K.copyAction)(
														S.prepared,
														M,
													), S._doPhase(I);
													var te = b.window.Promise,
														de = te ? new te(function (_n) {
															S._reflowResolve = _n;
														}) : void 0;
													return (
														S._reflowPromise = de, S.start(M, P, E), S._interacting ? (
															S.move(I), S.end(R)
														) : (S.stop(), S._reflowResolve()), S.removePointer(
															R,
															R,
														), de
													);
												}(i, r, f, o, y);
										}
										u && u.push(d);
									},
									c = 0;
								c < s.length && l() !== "break";
								c++
							);
							return u && a
								.all(u)
								.then(function () {
									return r;
								});
						}(this, n, e);
					};
			}
			Object.defineProperty(at, "__esModule", { value: !0 }), at.install = Nr, at.default =
				void 0;
			var Oi = {
				id: "reflow",
				install: Nr,
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
			at.default = Oi;
			var ee = { exports: {} };
			function Ur(e) {
				return (
					Ur =
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
			Object.defineProperty(ee.exports, "__esModule", { value: !0 }), ee.exports.default =
				void 0, W.default.use(Ce.default), W.default.use(Te.default), W.default.use(
				Yt.default,
			), W.default.use(Fe.default), W.default.use(Ct.default), W.default.use(
				xt.default,
			), W.default.use(vt.default), W.default.use(me.default), W.default.use(
				at.default,
			);
			var Ei = W.default;
			if (ee.exports.default = Ei, Ur(ee) === "object" && ee) {
				try {
					ee.exports = W.default;
				} catch {}
			}
			W.default.default = W.default, ee = ee.exports;
			var ke = { exports: {} };
			function Vr(e) {
				return (
					Vr =
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
			Object.defineProperty(ke.exports, "__esModule", { value: !0 }), ke.exports.default =
				void 0;
			var Si = ee.default;
			if (ke.exports.default = Si, Vr(ke) === "object" && ke) {
				try {
					ke.exports = ee.default;
				} catch {}
			}
			return (ee.default.default = ee.default, ke.exports);
		});
	}
)(qr);
var Wt = Ai(qr.exports),
	Ri = {
		props: {
			minH: Number,
			minW: Number,
			move: Function,
			style: { type: Object, default: () => ({}) },
		},
		setup: ({ minH: L, minW: Ue, move: H }) => {
			var T;
			return (
				T = Ti(), Mi(() => {
					var pe, we, Ie, h;
					we = "x", Ie = "y", h = Math.round, pe =
						(N, Y, Z) => {
							var ne, V;
							Y = h(Y), Z = h(Z), (Y || Z) && (
								ne = parseInt(N.getAttribute(we)) || 0, V =
									parseInt(N.getAttribute(Ie)) || 0, ne += Y, V += Z, N.style.transform =
									"translate(" + ne + "px," + V + "px)", N.setAttribute(we, ne), N.setAttribute(
									Ie,
									V,
								), typeof H == "function" && H(N, ne, V)
							);
						}, Wt(T.value)
						.resizable({
							edges: { left: !0, right: !0, bottom: !0, top: !0 },
							listeners: {
								move: (N) => {
									var Y, Z, ne, V, ve;
									(
										{
											target: ne,
											rect: { width: ve, height: Y },
											deltaRect: { left: Z, top: V },
										} = N
									), ve = h(ve), Y = h(Y), Object.assign(
										ne.style,
										{ width: ve + "px", height: Y + "px" },
									), pe(ne, Z, V);
								},
							},
							modifiers: [
								Wt.modifiers.restrictEdges({ outer: "parent" }),
								Wt.modifiers.restrictSize({ min: { width: Ue, height: L } }),
							],
							inertia: !0,
						})
						.draggable({
							listeners: {
								move: ({ target: N, dx: Y, dy: Z }) => {
									pe(N, Y, Z);
								},
							},
							inertia: !0,
							modifiers: [
								Wt.modifiers.restrictRect({ restriction: "parent", endOnly: !0 }),
							],
						});
				}), { i: T }
			);
		},
	};
function zi(L, Ue) {
	return (
		ji(), ki(
			"i",
			{ style: Di(L.style), ref: "i" },
			[Ii(L.$slots, "default", {}, void 0, !0)],
			4,
		)
	);
}
var Ci = (L, Ue) => {
	const H = L.__vccOpts || L;
	for (const [T, pe] of Ue) H[T] = pe;
	return H;
},
	Xi = Ci(Ri, [["render", zi], ["__scopeId", "data-v-f89160e0"]]);
export { Xi as d };
