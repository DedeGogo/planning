(this.webpackJsonpplanning=this.webpackJsonpplanning||[]).push([[10],{172:function(e,a,t){"use strict";t.r(a);var n=t(38),r=t(105),c=t(163),o=t(50),l=t(0),i=t.n(l),u=t(32),b=t(187),s=t(5),m=t(85),d=t(45),f=t(173),j=t(174),O=t(91),p=t(66),y=t(60),E=t(192),g=t(61),w=t(182),h=t(90),M=t(92),v=t(37),x=t(184),C=t(186),k=t(175),D=t(188),A=t(176),G=t(177),S=t(178),L=t(179),H=t(180),R=t(181),W=t(183),$=t(164),q=t(185),z={locale:q.a},I=function(e,a){var t=Object(x.a)(a.date,"yyyy-MM-dd",new Date),n=Object(C.a)(t,"yy-ww",z);e.has(n)||e.set(n,{label:Object(C.a)(t,"ww",z),days:[]});var r=e.get(n);return e.set(n,Object(o.a)({},r,{days:[].concat(Object(c.a)(r.days),[a])})),e},J=function(e){var a=e.nom,t=e.piaffeur,n=Object(r.a)(e,["nom","piaffeur"]),c=Boolean(t.nom),l=function(e){var a={borderWidth:2};return"Grand Hibou"===e?Object(o.a)({},a,{borderColor:"yellow.100"}):e.startsWith("Grand Hibou")?Object(o.a)({},a,{borderColor:"yellow.100",borderStyle:"dotted"}):e.startsWith("Caisse")?Object(o.a)({},a,{borderColor:"teal.100",borderRadius:0}):Object(o.a)({},a,{borderColor:"transparent"})}(a);return i.a.createElement(b.a,{hasArrow:!0,label:c?"".concat(a,"\xa0:\xa0").concat(t.nomAffichage):a,placement:"top"},i.a.createElement(s.a,Object.assign({w:4,h:4,bg:c?"cyan.600":"cyan.200",borderRadius:"lg"},l,n)))},V=function(e){var a=Object(l.useState)(!1),t=Object(n.a)(a,2),r=t[0],c=t[1],o={nom:"toto"},u={nom:null};return i.a.createElement(s.a,e,i.a.createElement(m.a,{onClick:function(){return c((function(e){return!e}))},size:"xs"},i.a.createElement(d.a,{name:"question-outline",mr:2}),"L\xe9gende"),i.a.createElement(f.a,{isOpen:r,mt:2,bg:"primary",p:2,color:"white"},i.a.createElement(j.b,null,["Grand Hibou","Grand Hibou en formation","Caisse","Chouettos"].map((function(e,a){return i.a.createElement(j.a,{key:a},i.a.createElement(O.a,{isInline:!0,spacing:1},i.a.createElement(J,{nom:e,piaffeur:o}),i.a.createElement(J,{nom:e,piaffeur:u}),i.a.createElement(p.a,{ml:2},e)))})))))},B=function(e){var a=e.creneaux,t=Object(r.a)(e,["creneaux"]);return a.filter((function(e){var a=e.postes;return Array.isArray(a)&&a.length>0})).map((function(e){return i.a.createElement(y.a,Object.assign({wrap:"wrap"},t),e.postes.map((function(e){return i.a.createElement(J,e)})))}))},P=function(e){var a=e.jour,t=a.date,n=a.labOuvert,c=a.creneaux,l=e.currentMois,u=Object(r.a)(e,["jour","currentMois"]),b=Object(x.a)(t,"yyyy-MM-dd",new Date),m=Object(o.a)({opacity:Object(k.a)(b,l)?1:.5},Object(D.a)(b)?{bg:"black"}:{},{},u),d=i.a.createElement(s.a,null,i.a.createElement(p.a,{fontSize:"xl"},Object(C.a)(b,"dd",new Date)));return n?i.a.createElement(s.a,Object.assign({bg:"primary",color:"white"},m,{flexGrow:3,as:v.b,to:"/planning/".concat(t)}),d,i.a.createElement(B,{creneaux:c,mt:4})):i.a.createElement(s.a,Object.assign({bg:"gray.100",color:"gray.400"},m,{flexGrow:1}),d)},F=function(e){var a=e.label,t=e.days,n=e.currentMois,c=Object(r.a)(e,["label","days","currentMois"]),o=t.map((function(e){return Object(x.a)(e.date,"yyyy-MM-dd",new Date)})),l=Object(C.a)(Object(A.a)(o),"dd/MM"),u=Object(C.a)(Object(G.a)(o),"dd/MM   ");return i.a.createElement(s.a,c,i.a.createElement(E.a,{fontWeight:"bold"},"S",a," \u2014 Semaine du ",l," au ",u),i.a.createElement(O.a,{isInline:!0,spacing:0,align:"stretch"},t.map((function(e){return i.a.createElement(P,{key:e.date,currentMois:n,jour:e,flex:1,p:2})}))))};a.default=function(){var e=Object(l.useState)(Object(S.a)(new Date)),a=Object(n.a)(e,2),t=a[0],r=a[1],o=Object(u.d)({query:"\n  query Planning($debut: Date!, $fin: Date!) {\n    planning(debut: $debut, fin: $fin) {\n    date\n     labOuvert\n     ... on JourOuverture {\n       creneaux {\n         nom\n         postes {\n           nom\n           horaires {\n             debut\n             fin\n           }\n           piaffeur {\n             nom\n             prenom\n             nomAffichage\n             telephone\n             email\n           }\n           notes\n         }\n       }\n     }\n   }\n  }\n",variables:{debut:Object(C.a)(Object(L.a)(Object(S.a)(t),z),"yyyy-MM-dd"),fin:Object(C.a)(Object(H.a)(Object(R.a)(t),z),"yyyy-MM-dd")}}),b=Object(n.a)(o,1)[0];if(b.fetching)return i.a.createElement(s.a,{textAlign:"center"},i.a.createElement(g.a,null),i.a.createElement(s.a,null,"R\xe9cup\xe9ration des informations du planning\u2026"));if(b.error)return i.a.createElement("span",null,b.error.message);var m=Object(c.a)(b.data.planning.reduce(I,new Map).values()),f=function(e){return function(){return r((function(a){return e(a,1)}))}};return i.a.createElement(s.a,null,i.a.createElement(y.a,{justifyContent:"space-between",alignItems:"center"},i.a.createElement(w.a,{icon:"arrow-left","aria-label":"Voir le mois pr\xe9c\xe9dent",onClick:f(W.a)}),i.a.createElement(h.a,{size:"2xl"},Object(C.a)(t,"LLLL",new Date,z)),i.a.createElement(w.a,{icon:"arrow-right","aria-label":"Voir le mois suivant",onClick:f($.a)})),i.a.createElement(M.a,{as:v.b,to:"/"},i.a.createElement(d.a,{name:"arrow-back",mr:2}),"Retourner \xe0 l'accueil"),i.a.createElement(V,{mt:4}),i.a.createElement(O.a,{spacing:2,align:"stretch"},m.map((function(e){return i.a.createElement(F,Object.assign({key:e.label,mt:4,currentMois:t},e))}))))}}}]);
//# sourceMappingURL=10.f8e6dfdf.chunk.js.map