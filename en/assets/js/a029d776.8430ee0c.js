"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),p=i,h=c["".concat(s,".").concat(p)]||c[p]||d[p]||l;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),i=n(7294),l=n(6010),r=n(2389),o=n(7392),s=n(7094),u=n(2466);const m="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n;const{lazy:r,block:c,defaultValue:p,values:h,groupId:g,className:b}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===p?p:null!=(t=null!=p?p:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:N}=(0,s.U)(),[E,x]=(0,i.useState)(v),A=[],{blockElementScrollPositionUntilNextRender:U}=(0,u.o5)();if(null!=g){const e=T[g];null!=e&&e!==E&&k.some((t=>t.value===e))&&x(e)}const I=e=>{const t=e.currentTarget,n=A.indexOf(t),a=k[n].value;a!==E&&(U(t),x(a),null!=g&&N(g,String(a)))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=A.indexOf(e.currentTarget)+1;n=null!=(a=A[t])?a:A[0];break}case"ArrowLeft":{var i;const t=A.indexOf(e.currentTarget)-1;n=null!=(i=A[t])?i:A[A.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>A.push(e),onKeyDown:w,onFocus:I,onClick:I},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(y.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function p(e){const t=(0,r.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},7654:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),i=n(9604);const l=e=>{let{defaultValue:t,editorHeight:n="40vh",outputHeight:l="30vh"}=e;const[r,o]=a.useState(t),s=a.useRef(null);return a.useEffect((()=>{null!=s&&(s.current.src="data:text/html;charset=utf-8,"+encodeURIComponent(r))}),[r]),a.createElement("div",{style:{marginBottom:"1rem"}},a.createElement("div",{style:{borderRadius:"0.5rem",overflow:"hidden"}},a.createElement(i.ZP,{height:n,defaultLanguage:"html",defaultValue:t,theme:"vs-dark",onChange:e=>o(e),loading:"Loading Code Editor...",options:{minimap:{enabled:!1}}})),a.createElement("h4",{style:{marginTop:"1rem"}},"Output:"),a.createElement("iframe",{style:{width:"100%",minHeight:l,backgroundColor:"white",borderRadius:"0.5rem"},ref:s}))}},8346:(e,t,n)=>{n.d(t,{MX:()=>u,N1:()=>a,Qq:()=>l,SA:()=>m,YO:()=>s,Z1:()=>r,eP:()=>c,gU:()=>o,wP:()=>d,yq:()=>i});const a="\x3c!-- Anda bisa menggunakan ini sebagai dasar untuk bereksperimen/tugas --\x3e\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>Document</title>\n    </head>\n    <body>\n        <p>Hello, World!</p>\n    </body>\n</html>",i="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h2>Berikut ini adalah contoh paragraf</h2>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra finibus porta. Fusce imperdiet\n            turpis felis, ut elementum felis lobortis auctor. Curabitur finibus, nunc sed sagittis placerat, lacus\n            massa venenatis lorem, malesuada rutrum ligula justo id lacus.\n        </p>\n        <p>\n            Donec posuere ipsum faucibus lectus lacinia, vitae efficitur dolor vestibulum. Nulla fringilla gravida mollis.\n            Aenean vel libero eleifend, luctus lacus ut, cursus mauris.\n        </p>\n    </body>\n</html>\n",l="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h1>Saya adalah h1</h1>\n        <h2>Saya adalah h2</h2>\n        <h3>Saya adalah h3</h3>\n        <h4>Saya adalah h4</h4>\n        <h5>Saya adalah h5</h5>\n        <h6>Saya adalah h6</h6>\n    </body>\n</html>\n",r='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>\n            <a href="#">Halo, saya adalah link</a>\n        </p>\n        <p>\n            \x3c!-- Target _parent digunakan karena kode output di render dalam sebuah iframe --\x3e\n            <a href="https://google.com/" target="_parent">Link ini akan membuka Google di page yang sama</a>\n        </p>\n        <p>\n            \x3c!-- Target _blank akan membuka link pada page baru --\x3e\n            <a href="https://scele.cs.ui.ac.id/" target="_blank">Link ini akan membuka SCELE di tab baru</a>\n        </p>\n        <p>\n            Link dapat juga diselipkan diantara teks <a href="#">seperti ini</a>\n        </p>\n    </body>\n</html>\n',o='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>Clickable Button</p>\n        <a href="https://google.com" target="_blank">\n            <button>Button juga dapat diubah menjadi link</button>\n        </a>\n        <p>Clickable Image</p>\n        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">\n            <img src="https://cs.ui.ac.id/wp-content/uploads/2021/06/logo-fasilkom-white-2.png" />\n        </a>\n    </body>\n</html>\n',s='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Ini adalah gambar</h4>\n        <img src="https://via.placeholder.com/300x150" />\n\n        <h4>Gambar ini tidak bisa di load</h4>\n        <img src="lasflkasjf" alt="Unloadable Image" />\n\n        <h4>Gambar ini memiliki custom width 250px (Original Size: 300x150)</h4>\n        <img src="https://via.placeholder.com/300x150" width="250px" />\n    </body>\n</html>\n',u='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Button dengan sendirinya tidak melakukan apapun</h4>\n        <button>Does Nothing</button>\n\n        <h4>Button ini adalah link</h4>\n        <a href="https://google.com/" target="_blank">\n            <button>Open Google</button>\n        </a>\n\n        <h4>Button ini akan menampilkan sebuah popup menggunakan JavaScript</h4>\n        <button id="click-me">Click Me</button>\n        <script>\n            // Line ini akan assign sebuah arrow function ke event onclick pada button.\n            // () => alert("Clicked!") memiliki arti "buatlah fungsi\n            // tak bernama yang membuat popup dengan tulisan \'Clicked!\'\n            document.getElementById("click-me").onclick = () => alert("Clicked!")\n        <\/script>\n    </body>\n</html>\n',m='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        \x3c!-- Dengan div kita dapat mengaplikasikan sebuah CSS style ke sekelompok elemen --\x3e\n        <div style="background-color: lightgrey;">\n            <h3>Artikel 1</h3>\n            <p>Lorem ipsum yadda yadda this is the first article</p>\n        </div>\n        \x3c!-- Kita juga dapat mengaplikasikan style positioning ke kelompok elemen ini untuk memisahkannya dari container sebelumnya --\x3e\n        <div style="background-color: grey; margin-top: 2rem">\n            <h3>Artikel 2</h3>\n            <p>Lorem ipsum yadda yadda this is the second article</p>\n        </div>\n    </body>\n</html>\n',d='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        <h4>Kelompok ini akan tersusun secara vertikal</h4>\n        <div>\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-top: 2rem">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n\n        \x3c!-- Berbagai macam recipe untuk layouting page akan dibahas di bagian Common Recipes --\x3e\n        <h4>Kelompok ini akan tersusun secara horizontal</h4>\n        <div style="display: flex; align-items: center;">\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-left: 1rem;">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n    </body>\n</html>\n',c='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<!DOCTYPE html>\n<html>\n  <head>\n    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"><\/script>\n    <script>\n    $(document).ready(function(){\n      $("button").click(function(){\n        $.get("https://api.thecatapi.com/v1/images/search", function(data) {\n            $(".cat-photo").attr("src", data[0].url)\n        });\n      });\n    });\n    <\/script>\n  </head>\n    <body>\n      <div>\n      <img\n          alt="cat"\n          src="https://cdn2.thecatapi.com/images/0Vz3XgaPM.jpg"\n          width="400"\n          height="400"\n          objectFit="cover"\n          class="cat-photo"\n      />\n      </div>\n\n      <button>Get a new cat!</button>\n\n    </body>\n</html>\n'},9247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),l=n(5488),r=n(5162),o=n(7654),s=n(8346);const u={sidebar_position:4,sidebar_label:"<img> Image",title:"<img> Image"},m="&lt;img&gt; - Image",d={unversionedId:"html/html-elements/html-img-element",id:"html/html-elements/html-img-element",title:"<img> Image",description:"The image element is an element for displaying an image in a web page. It can",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/html/html-elements/html-img-element.mdx",sourceDirName:"html/html-elements",slug:"/html/html-elements/html-img-element",permalink:"/ganjil-2023/en/docs/html/html-elements/html-img-element",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"<img> Image",title:"<img> Image"},sidebar:"defaultSidebar",previous:{title:"<a> Anchor",permalink:"/ganjil-2023/en/docs/html/html-elements/html-a-element"},next:{title:"<button> Button",permalink:"/ganjil-2023/en/docs/html/html-elements/html-button-element"}},c={},p=[{value:"Possible Attributes",id:"possible-attributes",level:2},{value:"Usage Example",id:"usage-example",level:2}],h={toc:p};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"img---image"},"<","img",">"," - Image"),(0,i.kt)("p",null,"The image element is an element for displaying an image in a web page. It can\nbe defined by using a single ",(0,i.kt)("inlineCode",{parentName:"p"},"<img />")," tag."),(0,i.kt)("p",null,"To display an image in the page, you need to provide a value to ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," attribute\nin the tag. There are also other attributes you can define in the tag to\ncustomise how the image is displayed. The attributes are explained in ",(0,i.kt)("a",{parentName:"p",href:"#possible-attributes"},"Possible Attributes"),"."),(0,i.kt)("h2",{id:"possible-attributes"},"Possible Attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src"),": The address (i.e. URL) pointing to the location where the image is\nstored."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alt"),": Textual description of the image that will be read by screen reader\ncommonly used by visual-impaired people. It is also used as stand-in value\nthat will be displayed by the browser if the image cannot be loaded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"height"),": Set the height of the image."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width"),": Set the width of the image.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: As you progress in learning about Web design, you will notice that\nyou can set the dimension of an image using HTML attribute and CSS.\nThe recommended approach in defining the dimension, and the style of an\nimage in general, is to use CSS. The main purpose of HTML is to define a\n",(0,i.kt)("strong",{parentName:"p"},"structure")," to a web page, while CSS' is to tell browser how to display\nthe elements in the page.")),(0,i.kt)("h2",{id:"usage-example"},"Usage Example"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"example1",label:"Display Images",default:!0,mdxType:"TabItem"},(0,i.kt)(o.Z,{defaultValue:s.YO,mdxType:"CodeEditor"}))))}g.isMDXComponent=!0}}]);