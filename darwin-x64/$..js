var $e=Object.defineProperty;var ae=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var ne=(e,t,o)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,le=(e,t)=>{for(var o in t||(t={}))Ce.call(t,o)&&ne(e,o,t[o]);if(ae)for(var o of ae(t))ke.call(t,o)&&ne(e,o,t[o]);return e};import{c as l}from"./i.js";import{i as w}from"./6.js";import{I as re,o as W,d as c,a as p,F as k,x as D,m as N,e as r,t as _,p as U,i as q,_ as T,U as Ve,j as f,V as m,W as g,h as V,c as z,Q as J,v as Q,K as de,X as Le,M as A,N as ce,f as O,w as H,g as pe,L as xe,k as G,z as Pe,b as S,Y as X,s as R}from"./e.js";import{a as ge,u as Ae}from"./r.js";import{z as Be}from"./s.js";import{m as De}from"./d.js";import{b as Te}from"./5.js";import{H as _e}from"./n.js";import{s as Fe}from"./$!.js";import{v as Me}from"./9.js";import"./j.js";import"./4.js";import"./3.js";import"./u.js";var $=function(e,t){_paq.push(["trackEvent",e,t,"",""])},Ie=function(e,t,o){_paq.push(["trackEvent",e,t,"","",o])},K,Z,b,ye,be,B;({camera:b,main:ye}=w);K="PreOfRec";B=()=>{var e,t;if(gc(),document.hidden){localStorage.recing||b.x();return}switch(delete localStorage.recing,{src:e}=l,b.x(),e){case"screen":l.video="";break;default:if(!l.video){if({video:t}=localStorage,!t){l.src="screen";return}l.video=t}e==="all"?(b.circle(localStorage.face_area_size-0),b.top_once()):(b.rect(),b.top_once()),setTimeout(()=>{document.hidden||ye(!1)},1e3)}};be=()=>{var e;switch({src:e}=l,e){case"all":$(K,"RecMode.Scr&Cam.Click");break;case"screen":$(K,"RecMode.Scr.Click");break;default:$(K,"RecMode.Cam.Click")}};document.addEventListener("visibilitychange",()=>{if(B(),!navigator.onLine)return Z()});Z=()=>{gc(),localStorage.recing||b.x()};window.addEventListener("online",()=>{B()});window.addEventListener("offline",()=>{Z()});var Ee={setup:()=>{var e,t,o,i,a,s;for(i=["all 屏幕+摄像头录制","screen 屏幕录制","camera 摄像头录制"],s=t=0,o=i.length;t<o;s=++t)e=i[s],a=e.indexOf(" "),i[s]=[e.slice(0,a),e.slice(1+a)];return re(()=>l.src,B),W(B),re(()=>l.video,d=>{var n;document.hidden||({src:n}=l,d?n==="screen"&&(l.src=localStorage.src||"all"):n!=="screen"&&(localStorage.src=l.src,l.src="screen"),B())}),{li:i,config:l,go:d=>{l.src=d,be()}}}};const je=e=>(U("data-v-064c212e"),e=e(),q(),e),Re={class:"method"},ze=["onClick"],Ke=je(()=>r("b",{class:"ico"},null,-1));function Ne(e,t){return c(),p("div",Re,[(c(!0),p(k,null,D(e.li,([o,i])=>(c(),p("a",{class:N([o,e.config.src==o?"now":"",e.config.no_video_src==!0?"forbidden":""]),onClick:a=>e.go(o)},[Ke,r("i",null,_(i),1)],10,ze))),256))])}var Ue=T(Ee,[["render",Ne],["__scopeId","data-v-064c212e"]]),qe="/n.svg",ue="/a.svg",He=Object.defineProperty,Je=Object.defineProperties,Qe=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable,fe=(e,t,o)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,P=(e,t)=>{for(var o in t||(t={}))Xe.call(t,o)&&fe(e,o,t[o]);if(he)for(var o of he(t))Ye.call(t,o)&&fe(e,o,t[o]);return e},ve=(e,t)=>Je(e,Qe(t));const We={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const t=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(t){const o=this.getDropdownViewport(),{top:i,bottom:a,height:s}=t.getBoundingClientRect();if(i<o.top)return this.$refs.dropdownMenu.scrollTop=t.offsetTop;if(a>o.bottom)return this.$refs.dropdownMenu.scrollTop=t.offsetTop-(o.height-s)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},Ge={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},Ze={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},ee=(e,t)=>{const o=e.__vccOpts||e;for(const[i,a]of t)o[i]=a;return o},et={},tt={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},ot=r("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),it=[ot];function st(e,t){return c(),p("svg",tt,it)}const at=ee(et,[["render",st]]),nt={},lt={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},rt=r("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),dt=[rt];function ct(e,t){return c(),p("svg",lt,dt)}const pt=ee(nt,[["render",ct]]),me={Deselect:at,OpenIndicator:pt},ut={mounted(e,{instance:t}){if(t.appendToBody){const{height:o,top:i,left:a,width:s}=t.$refs.toggle.getBoundingClientRect();let d=window.scrollX||window.pageXOffset,n=window.scrollY||window.pageYOffset;e.unbindPosition=t.calculatePosition(e,t,{width:s+"px",left:d+a+"px",top:n+i+o+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:t}){t.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function ht(e){const t={};return Object.keys(e).sort().forEach(o=>{t[o]=e[o]}),JSON.stringify(t)}let ft=0;function vt(){return++ft}const mt={components:P({},me),directives:{appendToBody:ut},mixins:[We,Ge,Ze],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:ht(e)}catch(t){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,t)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,t,o){return(t||"").toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,t){return e.filter(o=>{let i=this.getOptionLabel(o);return typeof i=="number"&&(i=i.toString()),this.filterBy(o,i,t)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:t}){return e&&!t}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,t)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,t,{width:o,top:i,left:a}){e.style.top=i,e.style.left=a,e.style.width=o}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:t,mutableLoading:o}){return e?!1:t&&!o}},uid:{type:[String,Number],default:()=>vt()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:P({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:t=>this.search=t.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:ve(P({},e),{deselect:this.deselect}),footer:ve(P({},e),{deselect:this.deselect})}},childComponents(){return P(P({},me),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const t=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const o=this.createOption(this.search);this.optionExists(o)||t.unshift(o)}return t},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,t){const o=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,t,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&o()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(t=>this.findOptionFromReducedValue(t)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(t=>!this.optionComparator(t,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(t=>this.reduce(t)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const t=e.target!==this.searchEl;t&&e.preventDefault();const o=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||o.filter(Boolean).some(i=>i.contains(e.target)||i===e.target)){e.preventDefault();return}this.open&&t?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(t=>this.optionComparator(t,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,t){return this.getOptionKey(e)===this.getOptionKey(t)},findOptionFromReducedValue(e){const t=i=>JSON.stringify(this.reduce(i))===JSON.stringify(e),o=[...this.options,...this.pushedTags].filter(t);return o.length===1?o[0]:o.find(i=>this.optionComparator(i,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(t=>this.optionComparator(t,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:t}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:t})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const t=a=>(a.preventDefault(),!this.isComposing&&this.typeAheadSelect()),o={8:a=>this.maybeDeleteValue(),9:a=>this.onTab(),27:a=>this.onEscape(),38:a=>(a.preventDefault(),this.typeAheadUp()),40:a=>(a.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(a=>o[a]=t);const i=this.mapKeydown(o,this);if(typeof i[e.keyCode]=="function")return i[e.keyCode](e)}}},gt=["dir"],_t=["id","aria-expanded","aria-owns"],yt={ref:"selectedOptions",class:"vs__selected-options"},bt=["disabled","title","aria-label","onClick"],wt={ref:"actions",class:"vs__actions"},Ot=["disabled"],St={class:"vs__spinner"},$t=["id"],Ct=["id","aria-selected","onMouseover","onClick"],kt={key:0,class:"vs__no-options"},Vt=V(" Sorry, no matching options. "),Lt=["id"];function xt(e,t,o,i,a,s){const d=Ve("append-to-body");return c(),p("div",{dir:o.dir,class:N(["v-select",s.stateClasses])},[f(e.$slots,"header",m(g(s.scope.header))),r("div",{id:`vs${o.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":s.dropdownOpen.toString(),"aria-owns":`vs${o.uid}__listbox`,"aria-label":"Search for option",onMousedown:t[1]||(t[1]=n=>s.toggleDropdown(n))},[r("div",yt,[(c(!0),p(k,null,D(s.selectedValue,(n,u)=>f(e.$slots,"selected-option-container",{option:s.normalizeOptionForSlot(n),deselect:s.deselect,multiple:o.multiple,disabled:o.disabled},()=>[(c(),p("span",{key:o.getOptionKey(n),class:"vs__selected"},[f(e.$slots,"selected-option",m(g(s.normalizeOptionForSlot(n))),()=>[V(_(o.getOptionLabel(n)),1)]),o.multiple?(c(),p("button",{key:0,ref_for:!0,ref:h=>a.deselectButtons[u]=h,disabled:o.disabled,type:"button",class:"vs__deselect",title:`Deselect ${o.getOptionLabel(n)}`,"aria-label":`Deselect ${o.getOptionLabel(n)}`,onClick:h=>s.deselect(n)},[(c(),z(J(s.childComponents.Deselect)))],8,bt)):Q("",!0)]))])),256)),f(e.$slots,"search",m(g(s.scope.search)),()=>[r("input",de({class:"vs__search"},s.scope.search.attributes,Le(s.scope.search.events)),null,16)])],512),r("div",wt,[A(r("button",{ref:"clearButton",disabled:o.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:t[0]||(t[0]=(...n)=>s.clearSelection&&s.clearSelection(...n))},[(c(),z(J(s.childComponents.Deselect)))],8,Ot),[[ce,s.showClearButton]]),f(e.$slots,"open-indicator",m(g(s.scope.openIndicator)),()=>[o.noDrop?Q("",!0):(c(),z(J(s.childComponents.OpenIndicator),m(de({key:0},s.scope.openIndicator.attributes)),null,16))]),f(e.$slots,"spinner",m(g(s.scope.spinner)),()=>[A(r("div",St,"Loading...",512),[[ce,e.mutableLoading]])])],512)],40,_t),O(xe,{name:o.transition},{default:H(()=>[s.dropdownOpen?A((c(),p("ul",{id:`vs${o.uid}__listbox`,ref:"dropdownMenu",key:`vs${o.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:t[2]||(t[2]=pe((...n)=>s.onMousedown&&s.onMousedown(...n),["prevent"])),onMouseup:t[3]||(t[3]=(...n)=>s.onMouseUp&&s.onMouseUp(...n))},[f(e.$slots,"list-header",m(g(s.scope.listHeader))),(c(!0),p(k,null,D(s.filteredOptions,(n,u)=>(c(),p("li",{id:`vs${o.uid}__option-${u}`,key:o.getOptionKey(n),role:"option",class:N(["vs__dropdown-option",{"vs__dropdown-option--deselect":s.isOptionDeselectable(n)&&u===e.typeAheadPointer,"vs__dropdown-option--selected":s.isOptionSelected(n),"vs__dropdown-option--highlight":u===e.typeAheadPointer,"vs__dropdown-option--disabled":!o.selectable(n)}]),"aria-selected":u===e.typeAheadPointer?!0:null,onMouseover:h=>o.selectable(n)?e.typeAheadPointer=u:null,onClick:pe(h=>o.selectable(n)?s.select(n):null,["prevent","stop"])},[f(e.$slots,"option",m(g(s.normalizeOptionForSlot(n))),()=>[V(_(o.getOptionLabel(n)),1)])],42,Ct))),128)),s.filteredOptions.length===0?(c(),p("li",kt,[f(e.$slots,"no-options",m(g(s.scope.noOptions)),()=>[Vt])])):Q("",!0),f(e.$slots,"list-footer",m(g(s.scope.listFooter)))],40,$t)),[[d]]):(c(),p("ul",{key:1,id:`vs${o.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,Lt))]),_:3},8,["name"]),f(e.$slots,"footer",m(g(s.scope.footer)))],10,gt)}const Pt=ee(mt,[["render",xt]]);var At={components:{"v-select":Pt},setup:()=>{var e,t;return t={0:0,1:1,2:3},e=[{id:0,title:"720P",vip_mark:""},{id:1,title:"1080P",vip_mark:qe},{id:2,title:"2K",vip_mark:ue},{id:3,title:"4K",vip_mark:ue}],l.resolution===void 0&&(l.resolution=e.length-1),G(()=>{var o;o=l.vipLevel,o!==void 0&&(l.resolution=Math.min(l.resolution,t[o]))}),{config:l,options:e,vipLevelMaxResolution:t,disabled:Pe(()=>l.src==="camera"),disable_resolution:function(o){return o>t[l.vipLevel]},li:"整个桌面 应用窗口 指定区域".split(" ")}}};const we=e=>(U("data-v-6894897c"),e=e(),q(),e),Bt={class:"bk",style:{"flex-direction":"row","justify-content":"space-between",width:"100%"}},Dt={class:"box"},Tt=we(()=>r("h2",null,"录制区域",-1)),Ft={class:"select"},Mt=["disabled"],It=["value"],Et={class:"box"},jt=we(()=>r("h2",null,"录制分辨率",-1)),Rt={class:"select"},zt=["src"];function Kt(e,t){const o=S("v-select");return c(),p("div",Bt,[r("div",Dt,[Tt,r("div",Ft,[A(r("select",{disabled:e.disabled,"onUpdate:modelValue":t[0]||(t[0]=i=>e.config.area=i)},[(c(!0),p(k,null,D(e.li,(i,a)=>(c(),p("option",{value:a},_(i),9,It))),256))],8,Mt),[[X,e.config.area]])])]),r("div",Et,[jt,r("div",Rt,[O(o,{searchable:!1,selectable:i=>i.id<=e.vipLevelMaxResolution[e.config.vipLevel],style:{width:"100%"},modelValue:e.config.resolution,"onUpdate:modelValue":t[1]||(t[1]=i=>e.config.resolution=i),reduce:i=>i.id,options:e.options,label:"title"},{option:H(({title:i,vip_mark:a})=>[r("img",{class:"vip",src:a},null,8,zt),V(" "+_(i),1)]),_:1},8,["selectable","modelValue","reduce","options"])])])])}var Nt=T(At,[["render",Kt],["__scopeId","data-v-6894897c"]]),j;j="PreOfRec";var Ut={components:{zAudio:Be},setup:()=>{var e,t,o,i;return i={audio:R([]),video:R([])},{mediaDevices:e}=navigator,o=a=>{a==="audio"?l[a]?$(j,"MikeSwitch.Click"):$(j,"MikeClose.Click"):l[a]?$(j,"CamSwitch.Click"):$(j,"CamClose.Click")},t=async()=>{var a,s,d,n,u,h,C,F,M,L,x,v,y,I,oe,ie,se;C={},y={audio:{exist:!1,default_id:""},video:{exist:!1,default_id:""}},M=await e.enumerateDevices();for(oe of M)({kind:n,label:h,deviceId:a}=oe),a==="default"&&(h=h.replace("Default - ",""),h="默认 "+h),n.endsWith("input")&&(n=n.slice(0,-5),(C[n]=C[n]||[]).push([a,h]),localStorage[n]===a&&(y[n].exist=!0),(y[n].default_id===""||a==="default")&&(y[n].default_id=a));for(d in i)i[d].value=C[d]||[];for(d in i){if({value:I}=i[d],I.length){if(v=l[d],v){for(ie of I)if([s]=ie,v===s)return}if(v!==""){for(se of I){if([s,u]=se,v)break;if(s==="default"){v=s;break}F=u.toLowerCase(),L=["default","built-in","内建","默认"];for(x of L)if(F.includes(x)){v=s;break}}v||(v=I[0][0])}}else v="";l[d]=v}for(d in y)y[d].exist||(localStorage.removeItem(d),l[d]?localStorage[d]=l[d]:y[d].default_id!==""&&(localStorage[d]=y[d].default_id));l.no_video_src=!localStorage.video},G(()=>{var a,s,d;s=["audio","video"];for(a of s)d=l[a],d&&(localStorage[a]=d)}),(async()=>await t())(),le({refresh:t,report:o,config:l,x:a=>{var s;s=l[a],s?s="":s=localStorage[a]||"",l[a]=s,o(a)}},i)}};const te=e=>(U("data-v-7800c734"),e=e(),q(),e),qt={class:"bk"},Ht=te(()=>r("h2",null,"设备设置",-1)),Jt={class:"video"},Qt={class:"select"},Xt={label:"输入源"},Yt=["value"],Wt=te(()=>r("optgroup",{label:"───"},[r("option",{value:""},"禁用")],-1)),Gt={class:"audio"},Zt={class:"select"},eo={label:"输入源"},to=["value"],oo=te(()=>r("optgroup",{label:"───"},[r("option",{value:""},"禁用")],-1));function io(e,t){const o=S("z-audio");return c(),p("div",qt,[Ht,r("li",Jt,[r("label",{class:N({x:!e.config.video}),onClick:t[0]||(t[0]=i=>e.x("video")),for:"driveVideo"},null,2),r("div",Qt,[A(r("select",{id:"driveVideo",onFocus:t[1]||(t[1]=(...i)=>e.refresh&&e.refresh(...i)),"onUpdate:modelValue":t[2]||(t[2]=i=>e.config.video=i),onChange:t[3]||(t[3]=i=>e.report("video"))},[r("optgroup",Xt,[(c(!0),p(k,null,D(e.video,([i,a])=>(c(),p("option",{value:i},_(a),9,Yt))),256))]),Wt],544),[[X,e.config.video]])])]),r("li",Gt,[r("label",{onClick:t[4]||(t[4]=i=>e.x("audio")),for:"driveAudio"},[O(o,{from:"main"})]),r("div",Zt,[A(r("select",{id:"driveAudio",onFocus:t[5]||(t[5]=(...i)=>e.refresh&&e.refresh(...i)),"onUpdate:modelValue":t[6]||(t[6]=i=>e.config.audio=i),onChange:t[7]||(t[7]=i=>e.report("audio"))},[r("optgroup",eo,[(c(!0),p(k,null,D(e.audio,([i,a])=>(c(),p("option",{value:i},_(a),9,to))),256))]),oo],544),[[X,e.config.audio]])])])])}var so=T(Ut,[["render",io],["__scopeId","data-v-7800c734"]]),ao={components:{btn:Te}};const no=e=>(U("data-v-b0e482fa"),e=e(),q(),e),lo=no(()=>r("b",null,null,-1));function ro(e,t){const o=S("btn");return c(),z(o,null,{default:H(()=>[lo,f(e.$slots,"default",{},void 0,!0)]),_:3})}var co=T(ao,[["render",ro],["__scopeId","data-v-b0e482fa"]]),po={setup:()=>{var e,t;return e=R("单次最长录制10分钟"),t=R(!1),W(async()=>{await ge()}),G(()=>{l.duration_txt&&(e.value=l.duration_txt),l.vipLevel===2?t.value=!0:t.value=!1}),{txt:e,vip_max:t,pay:()=>w.open(_e+"vip_details.html?pay=true&user_token="+localStorage.uid+"&vip="+(l.vipLevel+1))}}};const uo={key:0},ho={key:1},fo=V("可获更长时间");function vo(e,t){return e.vip_max?(c(),p("span",uo,"单次最长录制"+_(e.txt),1)):(c(),p("span",ho,[V("单次最长录制"+_(e.txt)+", ",1),r("span",{onClick:t[0]||(t[0]=(...o)=>e.pay&&e.pay(...o)),class:"pay"},'"升级会员"'),fo]))}var mo=T(po,[["render",vo],["__scopeId","data-v-6b109ad2"]]),Y,Oe,Se;({auto_update:Oe,guide:Se}=w);Y="PreOfRec";var go={components:{src:Ue,rArea:Nt,drive:so,btn:co,durationLimit:mo},setup:()=>{var e,t,o,i;return o="开始录制",t=R(o),i=a=>{t.value=`请授权${a}后点此录制`},W(async()=>{localStorage.first_mark===void 0&&(await Se.show(),localStorage.first_mark=!1),$(Y,"RecPop.View")}),e=async()=>{var a,s,d,n,u,h,C,F,M,L;{C=[["audio","麦克风","microphone"],["video","摄像头","camera"]];for(M of C)if([d,s,L]=M,u=l[d],u){try{await De[d](u)}catch(x){if(n=x,await w.permission(L)){i(s);return}alert(n);return}if(await w.permission(L)){i(s);return}}if(l.src!=="camera")try{await Me()}catch(x){if(n=x,await w.permission("screen")){i("屏幕录制");return}alert(n);return}if(l.area-1===0&&await w.permission("accessibility")){i("辅助功能");return}}localStorage.recing=1,{avatarUrl:a,space:{used:F,max:h}}=await Ae.json("user/get"),await ge(),localStorage.ico=a,F>=h?(t.value="请升级会员后点此录制",w.open(_e+"vip_details.html?pay=true&user_token="+localStorage.uid+"&vip="+(l.vipLevel+1))):(t.value=o,Ie(Y,"RecStart.Click",JSON.stringify({src:l.src,area:l.area,audio:!!l.audio,video:!!l.video})),Fe())},E.on("quick_start",(a,s)=>{e()}),{txt:t,start:()=>{e()}}}};(async()=>await Oe.update_promise())();function _o(e,t){const o=S("src"),i=S("r-area"),a=S("drive"),s=S("btn"),d=S("durationLimit");return c(),p(k,null,[O(o),r("main",null,[O(i),O(a),O(s,{onClick:e.start},{default:H(()=>[V(_(e.txt),1)]),_:1},8,["onClick"]),O(d)])],64)}var To=T(go,[["render",_o],["__scopeId","data-v-71c59e10"]]);export{To as default};
