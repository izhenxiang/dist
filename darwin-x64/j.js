import {
	s
	as
	c,
	r
	as
	L,
	o
	as
	P,
	N
	as
	A,
	l
	as
	j,
	a
	as
	f,
	F
	as
	D,
	Q
	as
	O,
	f
	as
	M,
	e
	as
	n,
	h
	as
	R,
	t
	as
	V,
	m
	as
	p,
	p
	as
	Q,
	i
	as
	W,
	b
	as
	q,
	d
	as
	m,
	_
	as
	G,
} from "./c.js";
import { i as b } from "./3.js";
import { b as w } from "./$.js";
import { O as H } from "./0.js";
import { d as J } from "./a.js"; /* empty css        */
import { c as i } from "./h.js";
import { D as K } from "./$-.js";
import { z as U } from "./6.js";
import "./_.js";
import "./o.js";
var $;
$ = (e) => (e + "").padStart(2, "0");
var X = () => {
	var e, a, t, r;
	return (
		e = c("00"), a = c("00"), [r, t] =
			(() => {
				var s, o;
				return (
					o = 0, s = void 0, [
						() => {
							s =
								setInterval(
									() => {
										++o, e.value = $(parseInt(o / 60)), a.value = $(o % 60);
									},
									1e3,
								);
						},
						() => {
							clearInterval(s);
						},
					]
				);
			})(), [e, a, r, t]
	);
},
	g,
	B,
	I,
	k,
	E,
	u,
	_,
	F,
	h,
	y,
	S,
	d;
({ recbar: _ } = b);
[E, F, S, y] = X();
h =
	(e) => {
		var a, t, r;
		t =
			e.split(
				`
`,
			), r = [];
		for (a of t) r.push(a.split(" "));
		return r;
	};
u = c(!1);
g = !1;
I = c();
B =
	(e) => {
		[S, y][e - 0]();
	};
d =
	() => {
		var e;
		({ value: e } = u), e = !e, w.pause(u.value = e), g && B(e);
	};
k =
	{
		pause: d,
		reset: () => {
			g && (
				u.value || d(), A(
					async () => await b.confirm.show("reset") ? w.reset() : d(),
				)
			);
		},
		cancel: async () => {
			if (!g) {
				await _.cancel();
				return;
			}
			u.value || d(), A(
				async () => await b.confirm.show("cancel") ? w.cancel() : d(),
			);
		},
		stop: () => {
			w.stop(), y();
		},
	};
H.start =
	() => {
		S(), g = !0, I.value.className = "";
	};
i.src !== "camera" && j(
	() => import("./.js"),
	[
		".js", "..js", "0.js", "v.js", "3.js", "h.js", "_.js", "$.js", "o.js",
		"c.js", "8.css", "k.js", "5.js", "2.js",
	],
);
var Y = {
	components: { zAudio: U },
	setup: () => {
		var e, a, t, r, s, o, v, z, T;
		for (
			r = h("video 摄像头"), z =
				L(
					h(
						`pause 暂停
stop 结束录制
reset 重新录制
cancel 取消录制`,
					),
				), T =
				(l) => () => {
					i[l] = i[l] ? "" : localStorage[l], !u.value &&
						!i.video &&
						!i.audio &&
						i.src === "camera" &&
						k.pause();
				}, v = ["audio", "video"], t = 0, s = v.length;
			t < s;
			t++
		) a = v[t], k[a] = T(a);
		return (
			e = c(), o = c(), P(() => {
				J(o.value);
			}), {
				go: async (l) => {
					var C;
					if (["pen", "rect", "txt"].indexOf(l) + 1) {
						if ({ value: C } = e, C !== l) {
							if (K.shape = e.value = l, C) {
								return;
							}
						} else {
							e.value = "", await _.draw_x();
							return;
						}
						await _.draw();
						return;
					}
					(k[l] || _[l])();
				},
				left: r,
				nav: o,
				right: z,
				code: I,
				minute: E,
				second: F,
				pause: u,
				config: i,
				draw: e,
			}
		);
	},
};
const N = (e) => (Q("data-v-495ffc22"), e = e(), W(), e),
	Z = ["title", "onClick"],
	x = N(() => n("b", null, null, -1)),
	ee = { class: "pause", ref: "code" },
	ae = N(() => n("span", null, ":", -1)),
	re = ["title", "onClick"],
	te = { class: "draw" },
	se = N(() => n("b", null, null, -1));
function oe(e, a) {
	const t = q("z-audio");
	return (
		m(), f(
			"nav",
			{ class: p({ pause: e.pause }), ref: "nav" },
			[
				(
					m(!0), f(
						D,
						null,
						O(
							e.left,
							([r, s], o) => (
								m(), f(
									"a",
									{
										class: p([r, e.config[r] ? "" : "x"]),
										title: s,
										onClick: (v) => e.go(r),
									},
									null,
									10,
									Z,
								)
							),
						),
						256,
					)
				),
				M(t, { onClick: a[0] || (a[0] = (r) => e.go("audio")) }),
				x,
				n("code", ee, [R(V(e.minute), 1), ae, R(V(e.second), 1)], 512),
				(
					m(!0), f(
						D,
						null,
						O(
							e.right,
							([r, s], o) => (
								m(), f(
									"a",
									{ class: p([r]), title: s, onClick: (v) => e.go(r) },
									null,
									10,
									re,
								)
							),
						),
						256,
					)
				),
				n(
					"div",
					te,
					[
						se,
						n(
							"a",
							{
								class: p(["pen", { now: e.draw == "pen" }]),
								onClick: a[1] || (a[1] = (r) => e.go("pen")),
								title: "画笔",
							},
							null,
							2,
						),
						n(
							"a",
							{
								class: p(["rect", { now: e.draw == "rect" }]),
								onClick: a[2] || (a[2] = (r) => e.go("rect")),
								title: "画框",
							},
							null,
							2,
						),
						n(
							"a",
							{
								class: p(["txt", { now: e.draw == "txt" }]),
								onClick: a[3] || (a[3] = (r) => e.go("txt")),
								title: "文字",
							},
							null,
							2,
						),
					],
				),
				n(
					"a",
					{
						class: "left",
						onClick: a[4] || (a[4] = (r) => e.go("left")),
						title: "收起",
					},
				),
				n(
					"a",
					{ class: "expand", onClick: a[5] || (a[5] = (r) => e.go("expand")) },
				),
			],
			2,
		)
	);
}
var ge = G(Y, [["render", oe], ["__scopeId", "data-v-495ffc22"]]);
export { ge as default };
