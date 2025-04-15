import {
  _ as x,
  c as d,
  a as n,
  b as o,
  d as f,
  w as l,
  r as g,
  e as s,
  t as p,
  o as u,
} from "./index-DgzcpkT8.js";
import { D as c } from "./Dialog-BcXWFjV6.js";
const w = {
    name: "Home",
    data() {
      return { showDialog: !1 };
    },
    resources: { ping: { url: "ping" } },
    components: { Dialog: c },
  },
  y = { class: "max-w-3xl py-12 mx-auto space-y-8" },
  b = { key: 0, class: "p-4 bg-gray-100 rounded-lg shadow-inner" },
  D = { class: "mt-2 text-sm text-gray-800" },
  h = { class: "p-4 bg-gray-800 text-white rounded-lg overflow-x-auto" };
function v(t, e, $, k, r, C) {
  const a = g("Button"),
    m = g("Dialog");
  return (
    u(),
    d("div", y, [
      n(
        a,
        {
          "icon-left": "code",
          onClick: t.$resources.ping.fetch,
          loading: t.$resources.ping.loading,
          class:
            "flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300",
        },
        {
          default: l(
            () => e[2] || (e[2] = [s(" Click to send 'ping' request ")]),
          ),
          _: 1,
        },
        8,
        ["onClick", "loading"],
      ),
      e[6] ||
        (e[6] = o(
          "h1",
          { class: "text-4xl font-extrabold text-gray-800" },
          "Home",
          -1,
        )),
      e[7] ||
        (e[7] = o(
          "h2",
          { class: "text-3xl font-bold text-blue-500 underline" },
          " Hello world! ",
          -1,
        )),
      e[8] ||
        (e[8] = o(
          "p",
          { class: "mt-4 text-gray-600 leading-relaxed" },
          [
            s(" This page uses the "),
            o(
              "code",
              { class: "bg-gray-200 px-2 py-1 rounded" },
              " $resources ",
            ),
            s(" property to fetch data from the server. "),
          ],
          -1,
        )),
      t.$resources.ping.data
        ? (u(),
          d("div", b, [
            e[3] ||
              (e[3] = o(
                "p",
                { class: "text-gray-700 font-medium" },
                "Response Data:",
                -1,
              )),
            o("pre", D, p(t.$resources.ping.data), 1),
          ]))
        : f("", !0),
      o("pre", h, p(t.$resources.ping), 1),
      n(
        a,
        {
          onClick: e[0] || (e[0] = (i) => (r.showDialog = !0)),
          class:
            "px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-300",
        },
        { default: l(() => e[4] || (e[4] = [s(" Open Dialog ")])), _: 1 },
      ),
      n(
        m,
        {
          title: "Welcome",
          modelValue: r.showDialog,
          "onUpdate:modelValue": e[1] || (e[1] = (i) => (r.showDialog = i)),
          class: "rounded-lg shadow-lg",
        },
        {
          default: l(
            () =>
              e[5] ||
              (e[5] = [
                o(
                  "p",
                  { class: "text-gray-700" },
                  "This is a sample dialog content.",
                  -1,
                ),
              ]),
          ),
          _: 1,
        },
        8,
        ["modelValue"],
      ),
    ])
  );
}
const H = x(w, [["render", v]]);
export { H as default };
