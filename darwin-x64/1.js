"use strict";
var o = require("path"), s = require("fs");
function v(e) {
	if (e && e.__esModule) {
		return e;
	}
	var r = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
	return (
		e && Object
			.keys(e)
			.forEach(function (t) {
				if (t !== "default") {
					var n = Object.getOwnPropertyDescriptor(e, t);
					Object.defineProperty(
						r,
						t,
						n.get ? n : {
							enumerable: !0,
							get: function () {
								return e[t];
							},
						},
					);
				}
			}), r.default = e, Object.freeze(r)
	);
}
var f = "package.json",
	u = () => JSON.parse(s.readFileSync(o.join(__dirname, f), "utf8")),
	l = (e) => {
		var r, t, n;
		e = e.split("."), r = Buffer.allocUnsafe(2 * e.length), n = 0;
		for (t of e) r.writeUIntBE(t - 0, n, 2), n += 2;
		return r.readUintBE(0, 6);
	};
const a = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
	c = a.split(""),
	d = new Array(123);
for (let e = 0; e < a.length; e++) d[a.charCodeAt(e)] = e;
const j = (e) => {
	if (e < 0) {
		return `-${ntob(-e)}`;
	}
	let r = e >>> 0, t = e / 4294967296 >>> 0, n = "";
	for (; t > 0; ) n = c[63 & r] + n, r >>>= 6, r |= (63 & t) << 26, t >>>= 6;
	let i = "";
	do i = c[63 & r] + i, r >>>= 6; while (r > 0);
	return i + n;
},
	h = (e) => {
		let r = 0;
		const t = e.charAt(0) === "-" ? 1 : 0;
		for (let n = t; n < e.length; n++) r = (r * 64) + d[e.charCodeAt(n)];
		return t ? -r : r;
	};
(async () => {
	var e, r, t, n, i;
	if (
		{ dir: r } = process, !r && (
			r = __dirname, process.dir = r, { v: i } =
				(
					await Promise
						.resolve()
						.then(function () {
							return require("./y.js");
						})
				).default, i &&
				h(i) > l(u().version) &&
				(
					{ ROOT: e } =
						await Promise
							.resolve()
							.then(function () {
								return require("./$!.js");
							}), n = o.join(e, "v", i), t = o.join(n, "m.js"), s.existsSync(t)
				)
		)
	) {
		process.chdir(n), await function (p) {
			return Promise
				.resolve()
				.then(function () {
					return v(require(p));
				});
		}(t);
		return;
	}
	await Promise
		.resolve()
		.then(function () {
			return require("./8.js");
		});
})();
exports.PACKAGE_JSON = u;
exports.decode = h;
exports.encode = j;
exports.package_json = f;
exports.ver_int = l;
