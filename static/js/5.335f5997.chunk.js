(this.webpackJsonpplanning=this.webpackJsonpplanning||[]).push([[5],{179:function(e,t,a){"use strict";a.r(t);var n=a(43),r=a(65),i=a(0),l=a.n(i),u=a(37),c=a(50),o=a(182),m=a(5),f=a(130),s=a(131),d=a(52),p=a(132),b=a(42),g=a(78),h=a(77),E=a(138),y=a(39),v=a(178),D=a(141),w=a(145),j=36e5,N=6e4,O=2,x={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},M=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,T=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,z=/^([+-])(\d{2})(?::?(\d{2}))?$/;function A(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var a=t||{},n=null==a.additionalDigits?O:Object(D.a)(a.additionalDigits);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var r,i=function(e){var t,a={},n=e.split(x.dateTimeDelimiter);/:/.test(n[0])?(a.date=null,t=n[0]):(a.date=n[0],t=n[1],x.timeZoneDelimiter.test(a.date)&&(a.date=e.split(x.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length)));if(t){var r=x.timezone.exec(t);r?(a.time=t.replace(r[1],""),a.timezone=r[1]):a.time=t}return a}(e);if(i.date){var l=function(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(a);if(!n)return{year:null};var r=n[1]&&parseInt(n[1]),i=n[2]&&parseInt(n[2]);return{year:null==i?r:100*i,restDateString:e.slice((n[1]||n[2]).length)}}(i.date,n);r=function(e,t){if(null===t)return null;var a=e.match(M);if(!a)return null;var n=!!a[4],r=I(a[1]),i=I(a[2])-1,l=I(a[3]),u=I(a[4]),c=I(a[5])-1;if(n)return function(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}(0,u,c)?function(e,t,a){var n=new Date(0);n.setUTCFullYear(e,0,4);var r=n.getUTCDay()||7,i=7*(t-1)+a+1-r;return n.setUTCDate(n.getUTCDate()+i),n}(t,u,c):new Date(NaN);var o=new Date(0);return function(e,t,a){return t>=0&&t<=11&&a>=1&&a<=($[t]||(C(e)?29:28))}(t,i,l)&&function(e,t){return t>=1&&t<=(C(e)?366:365)}(t,r)?(o.setUTCFullYear(t,i,Math.max(r,l)),o):new Date(NaN)}(l.restDateString,l.year)}if(isNaN(r)||!r)return new Date(NaN);var u,c=r.getTime(),o=0;if(i.time&&(o=function(e){var t=e.match(T);if(!t)return null;var a=S(t[1]),n=S(t[2]),r=S(t[3]);if(!function(e,t,a){if(24===e)return 0===t&&0===a;return a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}(a,n,r))return NaN;return a*j+n*N+1e3*r}(i.time),isNaN(o)||null===o))return new Date(NaN);if(i.timezone){if(u=function(e){if("Z"===e)return 0;var t=e.match(z);if(!t)return 0;var a="+"===t[1]?-1:1,n=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;if(!function(e,t){return t>=0&&t<=59}(0,r))return NaN;return a*(n*j+r*N)}(i.timezone),isNaN(u))return new Date(NaN)}else{var m=c+o,f=new Date(m);u=Object(w.a)(f);var s=new Date(m);u>0?s.setDate(f.getDate()+1):s.setDate(f.getDate()-1);var d=Object(w.a)(s)-u;d>0&&(u+=d)}return new Date(c+o+u)}function I(e){return e?parseInt(e):1}function S(e){return e&&parseFloat(e.replace(",","."))||0}var $=[31,null,31,30,31,30,31,31,30,31,30,31];function C(e){return e%400===0||e%4===0&&e%100}var J=a(176),Z=a(140);function k(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var a=Object(Z.a)(e),n=Object(D.a)(t);return a.setDate(a.getDate()+n),a}function q(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return k(e,-Object(D.a)(t))}var U=a(177),F=a(68),R={locale:U.a},L=function(e){var t=e.horaires,a=t.debut,n=t.fin,i=Object(r.a)(e,["horaires"]),u=function(e){return Object(v.a)(A(e,R),"HH'h'mm",R)};return l.a.createElement(o.a,Object.assign({variant:"solid"},i),u(a),"-",u(n))},V=function(e){var t,a=e.poste;return l.a.createElement(m.a,{py:2},l.a.createElement(f.a,{fontSize:"l"},l.a.createElement(L,{horaires:a.horaires,mr:2}),a.nom),a.piaffeur.nomAffichage&&l.a.createElement(s.a,{isInline:!0,justify:"space-between"},l.a.createElement(d.a,{flex:"1"},a.piaffeur.nomAffichage),a.piaffeur.telephone?l.a.createElement(p.a,{flex:"1",href:(t=a.piaffeur.telephone,t&&"tel:+33".concat(t.replace(/[^\d]/g,"").substr(1)))},l.a.createElement(b.a,{name:"phone",mr:2}),a.piaffeur.telephone):l.a.createElement(d.a,{flex:"1"},l.a.createElement(b.a,{name:"phone",mr:2})," N/A"),a.piaffeur.email?l.a.createElement(p.a,{href:"mailto:".concat(a.piaffeur.email),title:a.piaffeur.email},l.a.createElement(b.a,{name:"email"})):l.a.createElement(d.a,null,"N/A")),a.notes&&l.a.createElement(d.a,null,"Note\xa0: ",a.notes),!a.piaffeur.nomAffichage&&l.a.createElement(F.a,{mt:2,mb:4},"Se positionner sur cette PIAF"))},H=function(e){var t=e.creneaux;return l.a.createElement(s.a,{spacing:8},t.map((function(e,t){return l.a.createElement(m.a,{key:t,p:5,shadow:"md",borderWidth:"1px"},l.a.createElement(f.a,{fontSize:"xl"},e.nom),l.a.createElement(s.a,{mt:4,spacing:4},e.postes.map((function(e,t){return l.a.createElement(V,{poste:e,key:t})}))))})))};t.default=function(){var e=Object(u.f)().date,t="aujourdhui"===e?Object(v.a)(new Date,"yyyy-MM-dd",R):e,a=Object(y.d)({query:"\n  query PlanningJour($date: Date!) {\n    planningDuJour(date: $date) {\n     date\n     labOuvert\n     ... on JourOuverture {\n       creneaux {\n         nom\n         postes {\n           nom\n           horaires {\n             debut\n             fin\n           }\n           piaffeur {\n             nom\n             prenom\n             nomAffichage\n             telephone\n             email\n           }\n           notes\n         }\n       }\n     }\n   }\n  }\n",variables:{date:t}}),r=Object(n.a)(a,1)[0];if(r.fetching)return l.a.createElement(m.a,{textAlign:"center"},l.a.createElement(g.a,null),l.a.createElement(m.a,null,"R\xe9cup\xe9ration des informations de la journ\xe9e\u2026"));if(r.error)return l.a.createElement("span",null,r.error.message);var i=r.data.planningDuJour,o=Object(J.a)(t,"yyyy-MM-dd",new Date,R);return l.a.createElement(m.a,null,l.a.createElement(m.a,{mb:4},l.a.createElement(h.a,{justifyContent:"space-between",alignItems:"center"},l.a.createElement(p.a,{as:c.b,to:Object(v.a)(q(o,1),"yyyy-MM-dd"),title:"Voir le jour pr\xe9c\xe9dent",p:4},l.a.createElement(b.a,{name:"arrow-left"})),l.a.createElement(f.a,{size:"2xl"},Object(v.a)(Object(J.a)(i.date,"yyyy-MM-dd",new Date,R),"dd/MM/yyyy",R)),l.a.createElement(p.a,{as:c.b,to:Object(v.a)(k(o,1),"yyyy-MM-dd"),title:"Voir le jour suivant",p:4},l.a.createElement(b.a,{name:"arrow-right"}))),l.a.createElement(p.a,{as:c.b,to:"/"},l.a.createElement(b.a,{name:"arrow-back",mr:2}),"Retourner \xe0 l'accueil")),i.labOuvert&&l.a.createElement(H,{creneaux:i.creneaux}),!i.labOuvert&&l.a.createElement(E.a,{status:"error",variant:"left-accent"},l.a.createElement(E.c,null),l.a.createElement(E.d,{mr:2},"Lab ferm\xe9 !"),l.a.createElement(E.b,null,"Le Lab est ferm\xe9 \xe0 cette date. Veuillez v\xe9rifiez la date saisie.")))}}}]);
//# sourceMappingURL=5.335f5997.chunk.js.map