module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/site/src/components/contact/contactPage.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "EmailContact",
    ()=>EmailContact,
    "SocialMediaLinks",
    ()=>SocialMediaLinks,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__ = __turbopack_context__.i("[externals]/react-awesome-reveal [external] (react-awesome-reveal, esm_import, [project]/site/node_modules/.pnpm/react-awesome-reveal@4.3.1_@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3__rea_dff20e0b8ae7ca98d80dde93f2a8489a/node_modules/react-awesome-reveal)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$0$2e$2$2e$6_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$6$2e$7$2e$2_react$40$19$2e$2$2e$3$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, cjs, [project]/site/node_modules/.pnpm/@fortawesome+react-fontawesome@0.2.6_@fortawesome+fontawesome-svg-core@6.7.2_react@19.2.3/node_modules/@fortawesome/react-fontawesome)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import, [project]/site/node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.7.2/node_modules/@fortawesome/free-solid-svg-icons)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$brands$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-brands-svg-icons [external] (@fortawesome/free-brands-svg-icons, esm_import, [project]/node_modules/.pnpm/@fortawesome+free-brands-svg-icons@6.7.2/node_modules/@fortawesome/free-brands-svg-icons)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$brands$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$brands$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const emailAddress = "andrew@thevoid.media";
// Components
const ContactPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        id: "contact",
        className: "max-w-7xl mx-auto mt-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "mb-20 sm:mb-10 px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__["Fade"], {
                cascade: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-zinc-50 py-2 text-2xl font-semibold",
                        children: "CONTACT"
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/contact/contactPage.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full shrink-0 grow-0 basis-auto lg:w-ful",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "mb-12 shrink-0 basis-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(EmailContact, {}, void 0, false, {
                                        fileName: "[project]/site/src/components/contact/contactPage.tsx",
                                        lineNumber: 22,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/site/src/components/contact/contactPage.tsx",
                                    lineNumber: 21,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "my-3 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SocialMediaLinks, {}, void 0, false, {
                                        fileName: "[project]/site/src/components/contact/contactPage.tsx",
                                        lineNumber: 25,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/site/src/components/contact/contactPage.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/site/src/components/contact/contactPage.tsx",
                            lineNumber: 20,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/contact/contactPage.tsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/site/src/components/contact/contactPage.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/site/src/components/contact/contactPage.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/site/src/components/contact/contactPage.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const EmailContact = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex items-center ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "inline-block mr-2 rounded-md bg-teal-400-100 py-4 text-zinc-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$0$2e$2$2e$6_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$6$2e$7$2e$2_react$40$19$2e$2$2e$3$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$29$__["FontAwesomeIcon"], {
                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$29$__["faEnvelope"],
                    size: "2xl"
                }, void 0, false, {
                    fileName: "[project]/site/src/components/contact/contactPage.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/site/src/components/contact/contactPage.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    className: "text-indigo-300 duration-200 transition hover:text-indigo-200",
                    href: `mailto:${emailAddress}`,
                    children: emailAddress
                }, void 0, false, {
                    fileName: "[project]/site/src/components/contact/contactPage.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/site/src/components/contact/contactPage.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/site/src/components/contact/contactPage.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SocialMediaLinks = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
        className: "text-neutral-500 items-center flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                className: "ml-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    target: "_blank",
                    href: "https://www.instagram.com/thevoid.media/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$0$2e$2$2e$6_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$6$2e$7$2e$2_react$40$19$2e$2$2e$3$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$brands$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__["faInstagram"],
                        size: "2xl"
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/contact/contactPage.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/site/src/components/contact/contactPage.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/site/src/components/contact/contactPage.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                className: "ml-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    target: "_blank",
                    href: "https://www.facebook.com/TheVoidVisual",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$0$2e$2$2e$6_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$6$2e$7$2e$2_react$40$19$2e$2$2e$3$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$brands$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__["faFacebook"],
                        size: "2xl"
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/contact/contactPage.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/site/src/components/contact/contactPage.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/site/src/components/contact/contactPage.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                className: "ml-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    target: "_blank",
                    href: "https://github.com/Abh430",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$0$2e$2$2e$6_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$6$2e$7$2e$2_react$40$19$2e$2$2e$3$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$brands$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__["faGithub"],
                        size: "2xl"
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/contact/contactPage.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/site/src/components/contact/contactPage.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/site/src/components/contact/contactPage.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/site/src/components/contact/contactPage.tsx",
        lineNumber: 52,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ContactPage;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/site/src/components/footer.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$contact$2f$contactPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/contact/contactPage.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$contact$2f$contactPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$contact$2f$contactPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "m-4 border-t",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "footer pt-4 mt-4 rounded-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "self-center xxs:hidden lg:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "text-sm text-zinc-400 font-montserrat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "text-sm text-zinc-400 font-montserrat",
                                            href: "/about",
                                            children: "About"
                                        }, void 0, false, {
                                            fileName: "[project]/site/src/components/footer.tsx",
                                            lineNumber: 15,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/site/src/components/footer.tsx",
                                        lineNumber: 14,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "text-sm text-zinc-400 font-montserrat",
                                            href: "/work",
                                            children: "Work"
                                        }, void 0, false, {
                                            fileName: "[project]/site/src/components/footer.tsx",
                                            lineNumber: 18,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/site/src/components/footer.tsx",
                                        lineNumber: 17,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "text-sm text-zinc-400 font-montserrat",
                                            href: "/contact",
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/site/src/components/footer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/site/src/components/footer.tsx",
                                        lineNumber: 26,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/site/src/components/footer.tsx",
                                lineNumber: 13,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/footer.tsx",
                            lineNumber: 12,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "place-self-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$contact$2f$contactPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["SocialMediaLinks"], {}, void 0, false, {
                                        fileName: "[project]/site/src/components/footer.tsx",
                                        lineNumber: 33,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/site/src/components/footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-white text-lg font-bold",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-400 font-montserrat font-semibold mt-20",
                                        children: [
                                            "© ",
                                            new Date().getFullYear(),
                                            " Void Media, LLC. All Rights Reserved."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/site/src/components/footer.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/site/src/components/footer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/site/src/components/footer.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/site/src/components/footer.tsx",
                    lineNumber: 11,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/site/src/components/footer.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/site/src/components/footer.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/site/src/components/footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/site/src/components/navbar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [ssr] (ecmascript)");
;
;
;
;
const Navbar = ()=>{
    const [openMenu, setOpenMenu] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
        className: "bg-transparent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-3 py-5 rounded-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "w-full justify-between flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-white flex-shrink-0 font-montserrat font-semibold",
                                    href: "/",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "",
                                            src: "/images/void-combo-logo.png",
                                            alt: "The Void Logo",
                                            width: 200,
                                            height: 60,
                                            style: {
                                                width: '200px',
                                                height: 'auto'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/site/src/components/navbar.tsx",
                                            lineNumber: 16,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-gradient bg-gradient-to-r from-pink to-purple font-semibold",
                                            children: "THE VOID"
                                        }, void 0, false, {
                                            fileName: "[project]/site/src/components/navbar.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/site/src/components/navbar.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "ml-10 flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-zinc-300 hover:text-zinc-50 px-3 py-2 rounded-md text-sm font-medium font-montserrat",
                                                href: "/work",
                                                children: "Work"
                                            }, void 0, false, {
                                                fileName: "[project]/site/src/components/navbar.tsx",
                                                lineNumber: 31,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-zinc-300 hover:text-zinc-50 px-3 py-2 rounded-md text-sm font-medium font-montserrat",
                                                href: "/about",
                                                children: "About"
                                            }, void 0, false, {
                                                fileName: "[project]/site/src/components/navbar.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-zinc-300 hover:text-zinc-50 px-3 py-2 rounded-md text-sm font-medium font-montserrat",
                                                href: "/contact",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/site/src/components/navbar.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/site/src/components/navbar.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/site/src/components/navbar.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/site/src/components/navbar.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "-mr-2 flex md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                id: "al",
                                "aria-label": "Menu",
                                onClick: ()=>setOpenMenu(!openMenu),
                                className: "text-gray-800 dark:text-white hover:text-black-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    fill: "black",
                                    className: "h-8 w-8",
                                    viewBox: "0 0 1792 1792",
                                    "aria-hidden": "true",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                        d: "M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
                                    }, void 0, false, {
                                        fileName: "[project]/site/src/components/navbar.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/site/src/components/navbar.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/site/src/components/navbar.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/navbar.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/site/src/components/navbar.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/site/src/components/navbar.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            openMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "transition duration-1000 ease-in-out md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "md-px-2 pt-2 pb-3 space-y-1 sm:px-3 transition duration-1000 ease-in-out",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat",
                            href: "/",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/navbar.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat",
                            href: "/about",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/navbar.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat",
                            href: "/gallery",
                            children: "Gallery"
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/navbar.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat",
                            href: "/blog",
                            children: "Blog"
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/navbar.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-montserrat",
                            href: "/contact",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/navbar.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "items-center mt-20 py-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "tel:#",
                                className: "transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple  hover:bg-transparent md:text-lg md:px-10 ",
                                children: "Call Us Now"
                            }, void 0, false, {
                                fileName: "[project]/site/src/components/navbar.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/navbar.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/site/src/components/navbar.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/site/src/components/navbar.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/site/src/components/navbar.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/site/src/components/layout.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/footer.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/navbar.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const Layout = ({ children, hasFooter = true, hasNav = true })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "bg-zinc-900 box-border relative",
        children: [
            hasNav && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/site/src/components/layout.tsx",
                lineNumber: 21,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            hasFooter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/site/src/components/layout.tsx",
                lineNumber: 23,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/site/src/components/layout.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Layout;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/site/src/components/Home/header.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [ssr] (ecmascript)");
;
;
const HeaderColumn = ({ headerRef })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: "lg:sticky lg:top-0 mx-auto w-2/12 px-4 sm:px-6 lg:px-0 lg:pt-12 flex gap-10 flex-col align-middle max-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center lg:text-left flex justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "",
                            src: "/images/void-combo-logo-stacked.png",
                            alt: "The Void Logo",
                            width: 200,
                            height: 200,
                            style: {
                                width: '200px',
                                height: 'auto'
                            }
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/Home/header.tsx",
                            lineNumber: 16,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/Home/header.tsx",
                        lineNumber: 15,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "text-zinc-100 sr-only font-semibold",
                        children: "THE VOID"
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/Home/header.tsx",
                        lineNumber: 25,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/Home/header.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/site/src/components/Home/header.tsx",
                lineNumber: 14,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "lg:inset-y-0 lg:right-0 lg:w-1/2 my-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                    id: "navigation",
                    ref: headerRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            className: "relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                className: "navLink",
                                href: "#about",
                                "data-to-scrollspy-id": "about",
                                children: "ABOUT"
                            }, void 0, false, {
                                fileName: "[project]/site/src/components/Home/header.tsx",
                                lineNumber: 42,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/Home/header.tsx",
                            lineNumber: 41,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            className: "relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                className: "navLink",
                                href: "#work",
                                "data-to-scrollspy-id": "work",
                                children: "WORK"
                            }, void 0, false, {
                                fileName: "[project]/site/src/components/Home/header.tsx",
                                lineNumber: 45,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/Home/header.tsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            className: "relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                className: "navLink",
                                href: "#contact",
                                "data-to-scrollspy-id": "contact",
                                children: "CONTACT"
                            }, void 0, false, {
                                fileName: "[project]/site/src/components/Home/header.tsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/Home/header.tsx",
                            lineNumber: 47,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/site/src/components/Home/header.tsx",
                    lineNumber: 40,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/site/src/components/Home/header.tsx",
                lineNumber: 34,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/site/src/components/Home/header.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HeaderColumn;
}),
"[project]/site/src/components/about/aboutPage.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__ = __turbopack_context__.i("[externals]/react-awesome-reveal [external] (react-awesome-reveal, esm_import, [project]/site/node_modules/.pnpm/react-awesome-reveal@4.3.1_@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3__rea_dff20e0b8ae7ca98d80dde93f2a8489a/node_modules/react-awesome-reveal)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const AboutPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        id: "about",
        className: "max-w-7xl mx-auto mt-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "px-8 mb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__["Fade"], {
                    cascade: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-zinc-50 pt-2 pb-8 text-2xl font-semibold",
                        children: "ABOUT"
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/about/aboutPage.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/site/src/components/about/aboutPage.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__["Fade"], {
                    cascade: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "text-indigo-100 text-2xl font-light",
                        children: "Andrew Hunter aka The Void"
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/about/aboutPage.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/site/src/components/about/aboutPage.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__["Fade"], {
                    cascade: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-zinc-200 opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg",
                            children: "Andrew Hunter is a multidisciplinary digital artist and experience engineer, dedicated to exploring the essence of the human condition. His work spans multiple mediums, including event production, software and web development, projection mapping, and fine art. With a focus on creating meaningful connections, Andrew's work delves into themes such as emotion, nature, technology, and human relationships. By crafting internationally recognized art and engineering applications used worldwide, Andrew has established himself as a standout creator at the forefront of a new digital frontier."
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/about/aboutPage.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-zinc-200 opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg",
                            children: "Using art and technology as powerful tools to connect people and foster empathy, Andrew is committed to leveraging his creativity and expertise to inspire and improve the lives of others. When he isn’t performing for sold-out crowds at prestigious venues or building rich interactive experiences, he enjoys nurturing his plants, cycling, hiking, and spending time with his pets."
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/about/aboutPage.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/site/src/components/about/aboutPage.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/site/src/components/about/aboutPage.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/site/src/components/about/aboutPage.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AboutPage;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/site/src/components/BackgroundImage.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundImage",
    ()=>BackgroundImage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [ssr] (ecmascript)");
;
;
const BackgroundImage = ({ src, alt = '', className = '', style = {}, children })=>{
    // Extract background-specific styles
    const { backgroundSize, backgroundPosition, ...otherStyles } = style;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        style: otherStyles,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: src,
                alt: alt,
                fill: true,
                style: {
                    objectFit: 'cover',
                    zIndex: 0,
                    objectPosition: backgroundPosition || 'center'
                },
                sizes: backgroundSize || '100%',
                className: "absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/site/src/components/BackgroundImage.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: children
            }, void 0, false, {
                fileName: "[project]/site/src/components/BackgroundImage.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/site/src/components/BackgroundImage.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/site/src/components/work/workGrid.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__ = __turbopack_context__.i("[externals]/react-awesome-reveal [external] (react-awesome-reveal, esm_import, [project]/site/node_modules/.pnpm/react-awesome-reveal@4.3.1_@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3__rea_dff20e0b8ae7ca98d80dde93f2a8489a/node_modules/react-awesome-reveal)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$BackgroundImage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/BackgroundImage.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const WorkGrid = ({ workItems, openModal, hasModal })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "grid-cols-3 grid-flow-row gap-4",
            children: workItems.map((workItem, index)=>{
                // Resolve image path - handle both relative and absolute paths
                const imageSrc = workItem.featuredImage?.src || '';
                const resolvedImageSrc = imageSrc.startsWith('/') ? imageSrc : imageSrc.startsWith('../') ? imageSrc.replace('../', '/') : `/img/${imageSrc}`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__["Fade"], {
                    cascade: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(GridItem, {
                        workItem: workItem,
                        openModal: openModal,
                        hasModal: hasModal,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$BackgroundImage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["BackgroundImage"], {
                            src: resolvedImageSrc,
                            alt: workItem.featuredImage?.alt || workItem.title,
                            className: "",
                            style: {
                                backgroundSize: '95%',
                                backgroundPosition: 'right center'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "grid-item col-span-3 p-5 bg-center transition backdrop-blur-none hover:backdrop-blur-lg bg-no-repeat h-40 flex flex-col flex-nowrap justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "block text-zinc-50 font-semibold grid-item__title",
                                        children: workItem.title
                                    }, void 0, false, {
                                        fileName: "[project]/site/src/components/work/workGrid.tsx",
                                        lineNumber: 40,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "block text-zinc-200 text-xl",
                                        children: workItem.position?.[0]
                                    }, void 0, false, {
                                        fileName: "[project]/site/src/components/work/workGrid.tsx",
                                        lineNumber: 41,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "block grid-item__description",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: workItem.startDate
                                            }, void 0, false, {
                                                fileName: "[project]/site/src/components/work/workGrid.tsx",
                                                lineNumber: 43,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " - ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: workItem.endDate
                                            }, void 0, false, {
                                                fileName: "[project]/site/src/components/work/workGrid.tsx",
                                                lineNumber: 43,
                                                columnNumber: 61
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/site/src/components/work/workGrid.tsx",
                                        lineNumber: 42,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "block overflow-hidden grid-item__description",
                                        children: workItem.content
                                    }, void 0, false, {
                                        fileName: "[project]/site/src/components/work/workGrid.tsx",
                                        lineNumber: 46,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/site/src/components/work/workGrid.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/site/src/components/work/workGrid.tsx",
                            lineNumber: 30,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/work/workGrid.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/site/src/components/work/workGrid.tsx",
                    lineNumber: 28,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/site/src/components/work/workGrid.tsx",
            lineNumber: 16,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const GridItemModal = ({ workItem, children, openModal })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
        className: "mb-8 block relative overflow-hidden ease-in-out duration-800 bg-gradient-to-r from-0% from-indigo-950 cursor-pointer",
        "data-href": workItem.slug,
        onClick: ()=>openModal && openModal(workItem),
        children: children
    }, void 0, false, {
        fileName: "[project]/site/src/components/work/workGrid.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const GridItemLink = ({ workItem, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "mb-8 block relative overflow-hidden ease-in-out duration-800 bg-gradient-to-r from-0% from-indigo-950 cursor-pointer",
        href: workItem.path,
        children: children
    }, void 0, false, {
        fileName: "[project]/site/src/components/work/workGrid.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const GridItem = ({ workItem, children, openModal, hasModal })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: hasModal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(GridItemModal, {
            workItem: workItem,
            openModal: openModal,
            children: children
        }, void 0, false, {
            fileName: "[project]/site/src/components/work/workGrid.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(GridItemLink, {
            workItem: workItem,
            children: children
        }, void 0, false, {
            fileName: "[project]/site/src/components/work/workGrid.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = WorkGrid;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/site/src/components/work/workPage.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__ = __turbopack_context__.i("[externals]/react-awesome-reveal [external] (react-awesome-reveal, esm_import, [project]/site/node_modules/.pnpm/react-awesome-reveal@4.3.1_@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3__rea_dff20e0b8ae7ca98d80dde93f2a8489a/node_modules/react-awesome-reveal)");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workGrid$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/work/workGrid.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workGrid$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workGrid$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const WorkPage = ({ workItems, hasModal, openModal })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        id: "work",
        className: "max-w-7xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "lg:mb-20 sm:mb-10 px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$awesome$2d$reveal__$5b$external$5d$__$28$react$2d$awesome$2d$reveal$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$awesome$2d$reveal$40$4$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3_$5f$rea_dff20e0b8ae7ca98d80dde93f2a8489a$2f$node_modules$2f$react$2d$awesome$2d$reveal$29$__["Fade"], {
                    cascade: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-zinc-50 pt-2 pb-8 text-2xl font-semibold",
                        children: "WORK"
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/work/workPage.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/site/src/components/work/workPage.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workGrid$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    workItems: workItems,
                    openModal: openModal,
                    hasModal: hasModal
                }, void 0, false, {
                    fileName: "[project]/site/src/components/work/workPage.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/site/src/components/work/workPage.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/site/src/components/work/workPage.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WorkPage;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/site/src/components/Home/body.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$about$2f$aboutPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/about/aboutPage.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/work/workPage.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$contact$2f$contactPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/contact/contactPage.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$about$2f$aboutPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$contact$2f$contactPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$about$2f$aboutPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$contact$2f$contactPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const BodyBlock = (props)=>{
    const { openModal, headerRef, bodyRef } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "max-w-10/12 2-10/12 px-4 sm:px-6 lg:px-0 gap-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$about$2f$aboutPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/site/src/components/Home/body.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                workItems: props.workItems,
                hasModal: true,
                openModal: openModal
            }, void 0, false, {
                fileName: "[project]/site/src/components/Home/body.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$contact$2f$contactPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/site/src/components/Home/body.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/site/src/components/Home/body.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BodyBlock;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/site/src/lib/site-config.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteMetadata",
    ()=>siteMetadata
]);
const siteMetadata = {
    title: `The Void`,
    description: `Andrew Hunter aka The Void is a multidisciplinary digital artist and experience engineer, dedicated to exploring the essence of the human condition.`,
    siteUrl: "https://thevoid.media/",
    image: `/img/thevoid-cover-img.png`,
    icon: `/icon.png`,
    author: `Andrew Hunter <andrew@thevoid.media>`
};
}),
"[project]/site/src/components/hooks/use-site-metadata.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSiteMetadata",
    ()=>useSiteMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$lib$2f$site$2d$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/lib/site-config.ts [ssr] (ecmascript)");
;
const useSiteMetadata = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$lib$2f$site$2d$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["siteMetadata"];
};
}),
"[project]/site/src/components/seo.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SEO component for Next.js using next/head
 */ __turbopack_context__.s([
    "SEO",
    ()=>SEO,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$hooks$2f$use$2d$site$2d$metadata$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/hooks/use-site-metadata.tsx [ssr] (ecmascript)");
;
;
;
const schema = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "The Void Portfolio Site",
    url: "https://thevoid.media",
    contactPoint: {
        "@type": "ContactPoint",
        "email": "inquiries@thevoid.media",
        "contactType": "Inquiries"
    }
};
const SEO = ({ title, description, pathname, customImage, children })=>{
    const { title: defaultTitle, description: defaultDescription, image, siteUrl, author } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$hooks$2f$use$2d$site$2d$metadata$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useSiteMetadata"])();
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: customImage ? `${customImage}` : `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
        icon: `${siteUrl}/icon.png`,
        author
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                children: seo.title
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                name: "description",
                content: seo.description
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                name: "image",
                content: seo.image
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                name: "twitter:title",
                content: seo.title
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                name: "twitter:url",
                content: seo.url
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                name: "twitter:description",
                content: seo.description
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                name: "twitter:image",
                content: seo.image
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                name: "twitter:creator",
                content: seo.author
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                property: "og:url",
                content: seo.url
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                property: "og:description",
                content: seo.description
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                property: "og:title",
                content: seo.title
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                property: "og:image",
                content: seo.image
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                property: "og:locale",
                content: "en_US"
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                property: "og:type",
                content: "website"
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                rel: "icon",
                href: seo.icon
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(schema)
                }
            }, void 0, false, {
                fileName: "[project]/site/src/components/seo.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/site/src/components/seo.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SEO;
}),
"[project]/site/src/components/work/workSingleton.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$0$2e$2$2e$6_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$6$2e$7$2e$2_react$40$19$2e$2$2e$3$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, cjs, [project]/site/node_modules/.pnpm/@fortawesome+react-fontawesome@0.2.6_@fortawesome+fontawesome-svg-core@6.7.2_react@19.2.3/node_modules/@fortawesome/react-fontawesome)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import, [project]/site/node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.7.2/node_modules/@fortawesome/free-solid-svg-icons)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const WorkSingleton = ({ workItem, onClose, isModal = false })=>{
    if (!workItem) return null;
    // Helper to resolve image paths
    const resolveImagePath = (src)=>{
        if (!src) return '';
        if (src.startsWith('/')) return src;
        if (src.startsWith('../')) return src.replace('../', '/');
        return `/img/${src}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                className: "block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "text-zinc-50 py-2 text-4xl font-semibold",
                        children: [
                            workItem.title,
                            workItem.externalLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: workItem.externalLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "link out"
                                    }, void 0, false, {
                                        fileName: "[project]/site/src/components/work/workSingleton.tsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$0$2e$2$2e$6_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$6$2e$7$2e$2_react$40$19$2e$2$2e$3$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$29$__["FontAwesomeIcon"], {
                                        className: "text-indigo-400",
                                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$29$__["faArrowUpRightFromSquare"]
                                    }, void 0, false, {
                                        fileName: "[project]/site/src/components/work/workSingleton.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/site/src/components/work/workSingleton.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/site/src/components/work/workSingleton.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-zinc-200 text-xl",
                        children: workItem.position?.map((position, index)=>{
                            //add comma if we arent at the end of the array
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: [
                                    position,
                                    index !== workItem.position.length - 1 ? `, ` : ``
                                ]
                            }, index, true, {
                                fileName: "[project]/site/src/components/work/workSingleton.tsx",
                                lineNumber: 40,
                                columnNumber: 24
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/work/workSingleton.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "block text-zinc-400 text-md",
                        children: `${workItem.startDate} - ${workItem.endDate}`
                    }, void 0, false, {
                        fileName: "[project]/site/src/components/work/workSingleton.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/site/src/components/work/workSingleton.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: workItem.sections?.map((section, index)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "mt-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-zinc-100 py-2 text-xl font-semibold",
                                children: section.title
                            }, void 0, false, {
                                fileName: "[project]/site/src/components/work/workSingleton.tsx",
                                lineNumber: 56,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-zinc-300",
                                children: section.content
                            }, void 0, false, {
                                fileName: "[project]/site/src/components/work/workSingleton.tsx",
                                lineNumber: 57,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `grid xl:gap-4 ${section.columns ? `xl:grid-cols-${section.columns}` : 'xl:grid-cols-1'}`,
                                children: section.images && section.images.map((image, imgIndex)=>{
                                    if (!image.src) return null;
                                    const resolvedSrc = resolveImagePath(image.src);
                                    if (!resolvedSrc) return null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                maxWidth: 1200,
                                                position: 'relative',
                                                width: '100%',
                                                height: 'auto'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: resolvedSrc,
                                                alt: image.alt || '',
                                                width: 1200,
                                                height: 800,
                                                style: {
                                                    width: '100%',
                                                    height: 'auto',
                                                    maxWidth: 1200
                                                },
                                                loading: isModal ? "eager" : "lazy",
                                                className: ""
                                            }, void 0, false, {
                                                fileName: "[project]/site/src/components/work/workSingleton.tsx",
                                                lineNumber: 69,
                                                columnNumber: 31
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/site/src/components/work/workSingleton.tsx",
                                            lineNumber: 68,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, imgIndex, false, {
                                        fileName: "[project]/site/src/components/work/workSingleton.tsx",
                                        lineNumber: 67,
                                        columnNumber: 27
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/site/src/components/work/workSingleton.tsx",
                                lineNumber: 58,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/site/src/components/work/workSingleton.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/site/src/components/work/workSingleton.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/site/src/components/work/workSingleton.tsx",
        lineNumber: 25,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WorkSingleton;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/site/src/lib/data-loader.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getAllBlogPosts",
    ()=>getAllBlogPosts,
    "getAllWorkItems",
    ()=>getAllWorkItems,
    "getBlogPostBySlug",
    ()=>getBlogPostBySlug,
    "getWorkItemBySlug",
    ()=>getWorkItemBySlug,
    "loadJsonFile",
    ()=>loadJsonFile,
    "loadMarkdownFile",
    ()=>loadMarkdownFile
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$29$__ = __turbopack_context__.i("[externals]/gray-matter [external] (gray-matter, cjs, [project]/site/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$remark__$5b$external$5d$__$28$remark$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$40$15$2e$0$2e$1$2f$node_modules$2f$remark$29$__ = __turbopack_context__.i("[externals]/remark [external] (remark, esm_import, [project]/site/node_modules/.pnpm/remark@15.0.1/node_modules/remark)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$html__$5b$external$5d$__$28$remark$2d$html$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$2d$html$40$16$2e$0$2e$1$2f$node_modules$2f$remark$2d$html$29$__ = __turbopack_context__.i("[externals]/remark-html [external] (remark-html, esm_import, [project]/site/node_modules/.pnpm/remark-html@16.0.1/node_modules/remark-html)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$29$__ = __turbopack_context__.i("[externals]/remark-gfm [external] (remark-gfm, esm_import, [project]/site/node_modules/.pnpm/remark-gfm@4.0.1/node_modules/remark-gfm)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$remark__$5b$external$5d$__$28$remark$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$40$15$2e$0$2e$1$2f$node_modules$2f$remark$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$html__$5b$external$5d$__$28$remark$2d$html$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$2d$html$40$16$2e$0$2e$1$2f$node_modules$2f$remark$2d$html$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$remark__$5b$external$5d$__$28$remark$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$40$15$2e$0$2e$1$2f$node_modules$2f$remark$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$html__$5b$external$5d$__$28$remark$2d$html$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$2d$html$40$16$2e$0$2e$1$2f$node_modules$2f$remark$2d$html$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const contentDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src/content');
function loadJsonFile(filename) {
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(contentDirectory, filename);
    const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
}
// Helper to resolve image paths from JSON files
function resolveImagePath(src) {
    if (!src) return '';
    // Handle relative paths like "../../images/..."
    if (src.startsWith('../')) {
        // Convert "../../images/..." to "/images/..."
        // Replace all "../" at the start with "/"
        return src.replace(/^(\.\.\/)+/, '/');
    }
    // Already absolute
    if (src.startsWith('/')) {
        return src;
    }
    // Default to /img/ for other paths
    return `/img/${src}`;
}
// Helper to process images in work items
function processWorkItemImages(data) {
    // Process featured image
    if (data.featuredImage?.src) {
        data.featuredImage.src = resolveImagePath(data.featuredImage.src);
    }
    // Process section images
    if (data.sections) {
        data.sections = data.sections.map((section)=>{
            if (section.images) {
                section.images = section.images.map((img)=>({
                        ...img,
                        src: resolveImagePath(img.src)
                    }));
            }
            return section;
        });
    }
    return data;
}
function getAllWorkItems() {
    const workDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(contentDirectory, 'work');
    const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(workDir);
    const workItems = files.filter((file)=>file.endsWith('.json')).map((file)=>{
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(workDir, file);
        const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        // Process image paths
        const processedData = processWorkItemImages(data);
        // Construct path from title
        const slug = processedData.title.toLowerCase().replace(/\s+/g, '-');
        return {
            ...processedData,
            slug,
            path: `/work/${slug}`
        };
    }).sort((a, b)=>(a.order || 0) - (b.order || 0));
    return workItems;
}
function getWorkItemBySlug(slug) {
    const workItems = getAllWorkItems();
    return workItems.find((item)=>item.slug === slug || item.path === `/work/${slug}`) || null;
}
async function loadMarkdownFile(filePath) {
    const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(contentDirectory, filePath);
    const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(fullPath, 'utf8');
    const { data, content } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$29$__["default"])(fileContents);
    // Process markdown to HTML
    const processedContent = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$remark__$5b$external$5d$__$28$remark$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$40$15$2e$0$2e$1$2f$node_modules$2f$remark$29$__["remark"])().use(__TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$29$__["default"]).use(__TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$html__$5b$external$5d$__$28$remark$2d$html$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$2d$html$40$16$2e$0$2e$1$2f$node_modules$2f$remark$2d$html$29$__["default"]).process(content);
    const htmlContent = processedContent.toString();
    return {
        frontmatter: data,
        html: htmlContent,
        content
    };
}
async function getAllBlogPosts() {
    const blogDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(contentDirectory, 'blog');
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(blogDir)) {
        return [];
    }
    const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(blogDir);
    const posts = await Promise.all(files.filter((file)=>file.endsWith('.md')).map(async (file)=>{
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(blogDir, file);
        const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf8');
        const { data, content } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$29$__["default"])(fileContents);
        // Process markdown to HTML
        const processedContent = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$remark__$5b$external$5d$__$28$remark$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$40$15$2e$0$2e$1$2f$node_modules$2f$remark$29$__["remark"])().use(__TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$29$__["default"]).use(__TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$html__$5b$external$5d$__$28$remark$2d$html$2c$__esm_import$2c$__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$remark$2d$html$40$16$2e$0$2e$1$2f$node_modules$2f$remark$2d$html$29$__["default"]).process(content);
        const html = processedContent.toString();
        // Generate slug from filename
        const slug = file.replace(/\.md$/, '');
        return {
            slug: `/${slug}`,
            frontmatter: data,
            html,
            content
        };
    }));
    // Sort by date descending
    return posts.sort((a, b)=>{
        const dateA = new Date(a.frontmatter.date || 0).getTime();
        const dateB = new Date(b.frontmatter.date || 0).getTime();
        return dateB - dateA;
    });
}
async function getBlogPostBySlug(slug) {
    const posts = await getAllBlogPosts();
    return posts.find((post)=>post.slug === slug || post.slug === `/${slug}`);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/site/src/components/work/workData.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getWorkPageData",
    ()=>getWorkPageData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$lib$2f$data$2d$loader$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/lib/data-loader.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$lib$2f$data$2d$loader$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$lib$2f$data$2d$loader$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
function getWorkPageData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$lib$2f$data$2d$loader$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAllWorkItems"])();
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/site/src/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "SEARCH_PAGE_PARAM",
    ()=>SEARCH_PAGE_PARAM,
    "WORK_PAGE_PARAM",
    ()=>WORK_PAGE_PARAM,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$layout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/layout.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$Home$2f$header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/Home/header.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$Home$2f$body$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/Home/body.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$seo$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/seo.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-dom [external] (react-dom, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workSingleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/work/workSingleton.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/src/components/work/workData.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$layout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$Home$2f$body$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workSingleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$layout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$Home$2f$body$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workSingleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
const SEARCH_PAGE_PARAM = "page";
const WORK_PAGE_PARAM = "item";
const IndexPage = ({ workItems: initialWorkItems })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const workItems = initialWorkItems;
    const [modalIsVisible, setModalIsVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [activeModalItem, setActiveModalItem] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(workItems[0] || null);
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    function openModal(workItem) {
        setActiveModalItem(workItem);
        setModalIsVisible(true);
    }
    function closeModal() {
        setModalIsVisible(false);
        const searchParams = new URLSearchParams(window.location.search);
        const path = activeModalItem?.path.split("/").filter(Boolean) || [];
        searchParams.delete(WORK_PAGE_PARAM);
        if (path[0]) {
            searchParams.set(SEARCH_PAGE_PARAM, path[0]);
        }
        router.push(`/?${searchParams.toString()}`, undefined, {
            shallow: true
        });
    }
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!document) return;
        document.body.style.overflowY = modalIsVisible ? "hidden" : "auto";
        document.getElementById("modal-root").style.pointerEvents = modalIsVisible ? "auto" : "none";
        document.getElementById("modal-root").style.overflowY = modalIsVisible ? "scroll" : "hidden";
        document.getElementById("modal-root").scrollTop = 0;
        //update the browser history to include the path of the active modal item
        if (modalIsVisible && activeModalItem) {
            const searchParams = new URLSearchParams(window.location.search);
            const path = activeModalItem.path.split("/").filter(Boolean);
            searchParams.set(WORK_PAGE_PARAM, path[1]);
            searchParams.set(SEARCH_PAGE_PARAM, path[0]);
            router.push(`/?${searchParams.toString()}`, undefined, {
                shallow: true
            });
        }
    }, [
        modalIsVisible,
        activeModalItem,
        router
    ]);
    function clickOutsideModal(e) {
        const target = e.target;
        if (!target.classList.contains("modal-inner") && !target.closest(".modal-inner")) {
            closeModal();
        }
    }
    const handleEscape = (e)=>{
        if (e.key === "Escape") {
            closeModal();
        }
    };
    //on mount/unmount. 
    //Listen for back/forward buttons to manage modal state
    //Open the modal on page load if the url contains a work page
    //Navigate to elementId if the url contains a page param
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const searchParams = undefined;
        const pageParam = undefined;
        const workPageParam = undefined;
        const isWorkPage = undefined;
        //handler for back/forward buttons - use Next.js router events
        const handleRouteChange = undefined;
        const modalRoot = undefined;
    }, [
        router,
        workItems
    ]);
    const Modal = ({ onClose, isVisible, workItem })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "modal bg-zinc-800/80 p-12 " + (isVisible ? "visible active" : "invisible"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto modal-inner relative bg-zinc-950/90",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "modal-close float-right text-zinc-50 sticky ml-auto cursor-pointer px-3 py-1 rounded-full border-solid border top-6 right-8 mr-4 mt-4",
                            onClick: ()=>onClose(),
                            children: "X"
                        }, void 0, false, {
                            fileName: "[project]/site/src/pages/index.tsx",
                            lineNumber: 149,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "py-16 px-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workSingleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                workItem: workItem,
                                onClose: onClose
                            }, void 0, false, {
                                fileName: "[project]/site/src/pages/index.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/site/src/pages/index.tsx",
                            lineNumber: 150,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/site/src/pages/index.tsx",
                    lineNumber: 148,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/site/src/pages/index.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
    };
    if (workItems.length === 0 || !activeModalItem) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$seo$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: "The Void - Visual Media and Experience Designer"
                }, void 0, false, {
                    fileName: "[project]/site/src/pages/index.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/site/src/pages/index.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$seo$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "The Void - Visual Media and Experience Designer"
            }, void 0, false, {
                fileName: "[project]/site/src/pages/index.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "min-h-screen w-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$layout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    hasFooter: false,
                    hasNav: false,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto lg:px-6 md:px-3 relative box-border flex flex-row gap-7 justify-between",
                        ref: bodyRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$Home$2f$header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                headerRef: headerRef
                            }, void 0, false, {
                                fileName: "[project]/site/src/pages/index.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$Home$2f$body$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                headerRef: headerRef,
                                bodyRef: bodyRef,
                                workItems: workItems,
                                openModal: openModal
                            }, void 0, false, {
                                fileName: "[project]/site/src/pages/index.tsx",
                                lineNumber: 176,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/site/src/pages/index.tsx",
                        lineNumber: 174,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/site/src/pages/index.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/site/src/pages/index.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            typeof document !== 'undefined' && document.getElementById("modal-root") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Modal, {
                onClose: ()=>closeModal(),
                isVisible: modalIsVisible,
                workItem: activeModalItem
            }, void 0, false, {
                fileName: "[project]/site/src/pages/index.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)), document.getElementById("modal-root"))
        ]
    }, void 0, true);
};
const getStaticProps = async ()=>{
    const workItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$src$2f$components$2f$work$2f$workData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getWorkPageData"])();
    return {
        props: {
            workItems
        }
    };
};
const __TURBOPACK__default__export__ = IndexPage;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__301da10b._.js.map