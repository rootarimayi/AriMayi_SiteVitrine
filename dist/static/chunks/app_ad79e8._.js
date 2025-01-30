(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_ad79e8._.js", {

"[project]/app/opportunite/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Opportunite)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
function Opportunite() {
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cards = [
        {
            id: 1,
            title: "Développement d’une plateforme RH",
            description: "Nos apprenants ont à la conception et au développement d’une plateforme innovante destinée à accompagner les professionnels en transition de carrière. L’objectif est de simplifier leur intégration dans de nouveaux postes ou secteurs, avec des parcours personnalisés, des ressources adaptées, et des outils interactifs pour favoriser une montée en compétences efficace.",
            link: "#"
        },
        {
            id: 2,
            title: "Site d’annonces immobilières",
            description: "Ce projet vise à créer un outil dédié aux Français souhaitant trouver un logement en Espagne. Vous contribuerez à développer une interface intuitive, intégrant des filtres avancés (localisation, budget, type de logement) et des informations pratiques, tout en facilitant les échanges entre locataires et propriétaires.",
            link: "#"
        },
        {
            id: 3,
            title: "Plateforme de soutien scolaire",
            description: "Vous travaillerez sur la création d’un espace numérique dédié à l’accompagnement des élèves dans leur réussite éducative. Cette plateforme offrira des cours en ligne, des exercices interactifs, et des séances de tutorat personnalisées. Vous serez amenés à concevoir des fonctionnalités comme le suivi des progrès, la mise en relation avec des enseignants qualifiés, et des outils ludiques pour rendre l’apprentissage engageant et efficace",
            link: "#"
        }
    ];
    const handlePageChange = (direction)=>{
        if (direction === "next" && currentPage < cards.length) {
            setCurrentPage(currentPage + 1);
        } else if (direction === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    // Hook pour détecter la taille de l'écran et ajuster la vue
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Opportunite.useEffect": ()=>{
            const handleResize = {
                "Opportunite.useEffect.handleResize": ()=>{
                    setIsMobile(window.innerWidth >= 768); // 768px comme limite pour mobile (taille de l'écran)
                }
            }["Opportunite.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            handleResize(); // Vérifie la taille dès le chargement de la page
            return ({
                "Opportunite.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["Opportunite.useEffect"];
        }
    }["Opportunite.useEffect"], []);
    const cardColors = [
        "bg-white",
        "bg-[#F68A67]",
        "bg-[#353535]",
        "bg-white"
    ];
    const getTextColor = (index)=>{
        return cardColors[index] === "bg-[#353535]" ? "text-white" : "text-gray-800";
    };
    // Gestion du défilement horizontal avec la translation (inversée)
    const getTranslateX = ()=>{
        if (isMobile) {
            // Pour mobile, appliquer le comportement desktop (plus de décalage)
            return currentPage === 1 ? "translate-x-[28%]" : currentPage === 2 ? "translate-x-[-21%]" : currentPage === 3 ? "translate-x-[-68%]" : "translate-x-0";
        } else {
            // Pour desktop, appliquer le comportement mobile (moins de décalage)
            return currentPage === 1 ? "translate-x-[33%]" : currentPage === 2 ? "translate-x-[-4%]" : "translate-x-[-43%]";
        }
    };
    // La largeur des cartes (inversée)
    const getWidth = ()=>{
        return isMobile ? `${cards.length * 100}%` : `${cards.length * 80}%`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-50 py-8 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-center mb-4 text-indigo-700",
                children: "Des projets inspirants pour votre apprentissage"
            }, void 0, false, {
                fileName: "[project]/app/opportunite/page.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mb-6 text-gray-600 text-lg text-sm",
                children: "Nos projets vous permettront de développer des compétences variées tout en contribuant à des solutions concrètes pour des besoins réels. Prêts à relever le défi ? 🚀"
            }, void 0, false, {
                fileName: "[project]/app/opportunite/page.jsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto flex flex-wrap justify-center gap-6",
                children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex-shrink-0 w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 shadow-md p-6 rounded-2xl ${cardColors[index]} ${getTextColor(index)} flex flex-col justify-between`,
                        style: {
                            minHeight: "230px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-grow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-2",
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/opportunite/page.jsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mb-3",
                                        children: card.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/opportunite/page.jsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/opportunite/page.jsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: card.link,
                                className: "text-indigo-600 font-medium hover:underline text-sm",
                                children: "EN SAVOIR PLUS →"
                            }, void 0, false, {
                                fileName: "[project]/app/opportunite/page.jsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, card.id, true, {
                        fileName: "[project]/app/opportunite/page.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/opportunite/page.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/opportunite/page.jsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(Opportunite, "rP/NqMFGp3Jn/T1K/IfvQmJRoaM=");
_c = Opportunite;
var _c;
__turbopack_refresh__.register(_c, "Opportunite");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/apprenants/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_ad79e8._.js.map