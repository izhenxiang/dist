var n = typeof globalThis < "u"
	? globalThis
	: typeof window < "u"
		? window
		: typeof global < "u"
			? global
			: typeof self < "u"
				? self
				: {};
function a(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function u(e) {
	if (e.__esModule) {
		return e;
	}
	var o = Object.defineProperty({}, "__esModule", { value: !0 });
	return (
		Object
			.keys(e)
			.forEach(function (t) {
				var r = Object.getOwnPropertyDescriptor(e, t);
				Object.defineProperty(
					o,
					t,
					r.get ? r : {
						enumerable: !0,
						get: function () {
							return e[t];
						},
					},
				);
			}), o
	);
}
export { u as a, n as c, a as g };
