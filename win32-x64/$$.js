var Ce=Object.defineProperty;var ae=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;var ne=(e,t,o)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,le=(e,t)=>{for(var o in t||(t={}))ke.call(t,o)&&ne(e,o,t[o]);if(ae)for(var o of ae(t))Ve.call(t,o)&&ne(e,o,t[o]);return e};import{c as n}from"./$4.js";import{i as T}from"./7.js";import{J as re,o as j,d as c,a as p,F as $,y as x,m as R,e as r,t as m,p as N,i as z,_ as A,U as Le,j as u,V as v,W as _,h as C,c as M,R as U,x as q,L as de,X as xe,N as V,O as ce,f as w,w as K,g as pe,M as Ae,k as X,A as Pe,b as O,Y as J,s as D}from"./i.js";import{a as _e,u as Be}from"./s.js";import{z as De}from"./.js";import"./g.js";import{b as Te}from"./$..js";import{H as me}from"./r.js";import{s as Fe}from"./9.js";import"./$3.js";import"./u.js";import"./4.js";import"./2.js";import"./v.js";var S=function(e,t){_paq.push(["trackEvent",e,t,"",""])},Me=function(e,t,o){_paq.push(["trackEvent",e,t,"","",o])},I,Y,y,ye,be,L;({camera:y,main:ye}=T);I="PreOfRec";L=async(e=!1)=>{var t,o,s;if(gc(),t=await y.visible(),document.hidden){if(e&&t&&n.video)return;localStorage.recing||y.x();return}switch(delete localStorage.recing,{src:o}=n,y.x(),o){case"screen":n.video="";break;default:if(!n.video){if({video:s}=localStorage,!s){n.src="screen";return}n.video=s}o==="all"?(y.circle(localStorage.face_area_size-0),y.top_once()):(y.rect(),y.top_once()),setTimeout(()=>{document.hidden||ye(!1)},1e3)}};be=()=>{var e;switch({src:e}=n,e){case"all":S(I,"RecMode.Scr&Cam.Click");break;case"screen":S(I,"RecMode.Scr.Click");break;default:S(I,"RecMode.Cam.Click")}};document.addEventListener("visibilitychange",()=>{if(L(!0),!navigator.onLine)return Y()});Y=()=>{gc(),localStorage.recing||y.x()};window.addEventListener("online",()=>{L()});window.addEventListener("offline",()=>{Y()});var Ee={setup:()=>{var e,t,o,s,a,i;for(s=["all 屏幕+摄像头录制","screen 屏幕录制","camera 摄像头录制"],i=t=0,o=s.length;t<o;i=++t)e=s[i],a=e.indexOf(" "),s[i]=[e.slice(0,a),e.slice(1+a)];return re(()=>n.src,L),j(L),re(()=>n.video,d=>{var l;document.hidden&&localStorage.recing||({src:l}=n,d?l==="screen"&&(n.src=localStorage.src||"all"):l!=="screen"&&(localStorage.src=n.src,n.src="screen"),L())}),{li:s,config:n,go:d=>{n.src=d,be()}}}};const Ie=e=>(N("data-v-6f51925c"),e=e(),z(),e),Re={class:"method"},je=["onClick"],Ne=Ie(()=>r("b",{class:"ico"},null,-1));function ze(e,t){return c(),p("div",Re,[(c(!0),p($,null,x(e.li,([o,s])=>(c(),p("a",{class:R([o,e.config.src==o?"now":"",e.config.no_video_src==!0?"forbidden":""]),onClick:a=>e.go(o)},[Ne,r("i",null,m(s),1)],10,je))),256))])}var Ke=A(Ee,[["render",ze],["__scopeId","data-v-6f51925c"]]),Ue="/n.svg",ue="/a.svg",qe=Object.defineProperty,Je=Object.defineProperties,He=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable,fe=(e,t,o)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,k=(e,t)=>{for(var o in t||(t={}))Xe.call(t,o)&&fe(e,o,t[o]);if(he)for(var o of he(t))Ye.call(t,o)&&fe(e,o,t[o]);return e},ve=(e,t)=>Je(e,He(t));const Qe={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const t=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(t){const o=this.getDropdownViewport(),{top:s,bottom:a,height:i}=t.getBoundingClientRect();if(s<o.top)return this.$refs.dropdownMenu.scrollTop=t.offsetTop;if(a>o.bottom)return this.$refs.dropdownMenu.scrollTop=t.offsetTop-(o.height-i)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},We={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},Ge={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},Q=(e,t)=>{const o=e.__vccOpts||e;for(const[s,a]of t)o[s]=a;return o},Ze={},et={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},tt=r("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),ot=[tt];function st(e,t){return c(),p("svg",et,ot)}const it=Q(Ze,[["render",st]]),at={},nt={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},lt=r("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),rt=[lt];function dt(e,t){return c(),p("svg",nt,rt)}const ct=Q(at,[["render",dt]]),ge={Deselect:it,OpenIndicator:ct},pt={mounted(e,{instance:t}){if(t.appendToBody){const{height:o,top:s,left:a,width:i}=t.$refs.toggle.getBoundingClientRect();let d=window.scrollX||window.pageXOffset,l=window.scrollY||window.pageYOffset;e.unbindPosition=t.calculatePosition(e,t,{width:i+"px",left:d+a+"px",top:l+s+o+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:t}){t.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function ut(e){const t={};return Object.keys(e).sort().forEach(o=>{t[o]=e[o]}),JSON.stringify(t)}let ht=0;function ft(){return++ht}const vt={components:k({},ge),directives:{appendToBody:pt},mixins:[Qe,We,Ge],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:ut(e)}catch(t){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,t)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,t,o){return(t||"").toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,t){return e.filter(o=>{let s=this.getOptionLabel(o);return typeof s=="number"&&(s=s.toString()),this.filterBy(o,s,t)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:t}){return e&&!t}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,t)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,t,{width:o,top:s,left:a}){e.style.top=s,e.style.left=a,e.style.width=o}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:t,mutableLoading:o}){return e?!1:t&&!o}},uid:{type:[String,Number],default:()=>ft()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:k({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:t=>this.search=t.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:ve(k({},e),{deselect:this.deselect}),footer:ve(k({},e),{deselect:this.deselect})}},childComponents(){return k(k({},ge),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const t=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const o=this.createOption(this.search);this.optionExists(o)||t.unshift(o)}return t},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,t){const o=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,t,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&o()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(t=>this.findOptionFromReducedValue(t)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(t=>!this.optionComparator(t,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(t=>this.reduce(t)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const t=e.target!==this.searchEl;t&&e.preventDefault();const o=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||o.filter(Boolean).some(s=>s.contains(e.target)||s===e.target)){e.preventDefault();return}this.open&&t?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(t=>this.optionComparator(t,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,t){return this.getOptionKey(e)===this.getOptionKey(t)},findOptionFromReducedValue(e){const t=s=>JSON.stringify(this.reduce(s))===JSON.stringify(e),o=[...this.options,...this.pushedTags].filter(t);return o.length===1?o[0]:o.find(s=>this.optionComparator(s,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(t=>this.optionComparator(t,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:t}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:t})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const t=a=>(a.preventDefault(),!this.isComposing&&this.typeAheadSelect()),o={8:a=>this.maybeDeleteValue(),9:a=>this.onTab(),27:a=>this.onEscape(),38:a=>(a.preventDefault(),this.typeAheadUp()),40:a=>(a.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(a=>o[a]=t);const s=this.mapKeydown(o,this);if(typeof s[e.keyCode]=="function")return s[e.keyCode](e)}}},gt=["dir"],_t=["id","aria-expanded","aria-owns"],mt={ref:"selectedOptions",class:"vs__selected-options"},yt=["disabled","title","aria-label","onClick"],bt={ref:"actions",class:"vs__actions"},wt=["disabled"],Ot={class:"vs__spinner"},St=["id"],$t=["id","aria-selected","onMouseover","onClick"],Ct={key:0,class:"vs__no-options"},kt=C(" Sorry, no matching options. "),Vt=["id"];function Lt(e,t,o,s,a,i){const d=Le("append-to-body");return c(),p("div",{dir:o.dir,class:R(["v-select",i.stateClasses])},[u(e.$slots,"header",v(_(i.scope.header))),r("div",{id:`vs${o.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":i.dropdownOpen.toString(),"aria-owns":`vs${o.uid}__listbox`,"aria-label":"Search for option",onMousedown:t[1]||(t[1]=l=>i.toggleDropdown(l))},[r("div",mt,[(c(!0),p($,null,x(i.selectedValue,(l,g)=>u(e.$slots,"selected-option-container",{option:i.normalizeOptionForSlot(l),deselect:i.deselect,multiple:o.multiple,disabled:o.disabled},()=>[(c(),p("span",{key:o.getOptionKey(l),class:"vs__selected"},[u(e.$slots,"selected-option",v(_(i.normalizeOptionForSlot(l))),()=>[C(m(o.getOptionLabel(l)),1)]),o.multiple?(c(),p("button",{key:0,ref_for:!0,ref:h=>a.deselectButtons[g]=h,disabled:o.disabled,type:"button",class:"vs__deselect",title:`Deselect ${o.getOptionLabel(l)}`,"aria-label":`Deselect ${o.getOptionLabel(l)}`,onClick:h=>i.deselect(l)},[(c(),M(U(i.childComponents.Deselect)))],8,yt)):q("",!0)]))])),256)),u(e.$slots,"search",v(_(i.scope.search)),()=>[r("input",de({class:"vs__search"},i.scope.search.attributes,xe(i.scope.search.events)),null,16)])],512),r("div",bt,[V(r("button",{ref:"clearButton",disabled:o.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:t[0]||(t[0]=(...l)=>i.clearSelection&&i.clearSelection(...l))},[(c(),M(U(i.childComponents.Deselect)))],8,wt),[[ce,i.showClearButton]]),u(e.$slots,"open-indicator",v(_(i.scope.openIndicator)),()=>[o.noDrop?q("",!0):(c(),M(U(i.childComponents.OpenIndicator),v(de({key:0},i.scope.openIndicator.attributes)),null,16))]),u(e.$slots,"spinner",v(_(i.scope.spinner)),()=>[V(r("div",Ot,"Loading...",512),[[ce,e.mutableLoading]])])],512)],40,_t),w(Ae,{name:o.transition},{default:K(()=>[i.dropdownOpen?V((c(),p("ul",{id:`vs${o.uid}__listbox`,ref:"dropdownMenu",key:`vs${o.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:t[2]||(t[2]=pe((...l)=>i.onMousedown&&i.onMousedown(...l),["prevent"])),onMouseup:t[3]||(t[3]=(...l)=>i.onMouseUp&&i.onMouseUp(...l))},[u(e.$slots,"list-header",v(_(i.scope.listHeader))),(c(!0),p($,null,x(i.filteredOptions,(l,g)=>(c(),p("li",{id:`vs${o.uid}__option-${g}`,key:o.getOptionKey(l),role:"option",class:R(["vs__dropdown-option",{"vs__dropdown-option--deselect":i.isOptionDeselectable(l)&&g===e.typeAheadPointer,"vs__dropdown-option--selected":i.isOptionSelected(l),"vs__dropdown-option--highlight":g===e.typeAheadPointer,"vs__dropdown-option--disabled":!o.selectable(l)}]),"aria-selected":g===e.typeAheadPointer?!0:null,onMouseover:h=>o.selectable(l)?e.typeAheadPointer=g:null,onClick:pe(h=>o.selectable(l)?i.select(l):null,["prevent","stop"])},[u(e.$slots,"option",v(_(i.normalizeOptionForSlot(l))),()=>[C(m(o.getOptionLabel(l)),1)])],42,$t))),128)),i.filteredOptions.length===0?(c(),p("li",Ct,[u(e.$slots,"no-options",v(_(i.scope.noOptions)),()=>[kt])])):q("",!0),u(e.$slots,"list-footer",v(_(i.scope.listFooter)))],40,St)),[[d]]):(c(),p("ul",{key:1,id:`vs${o.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,Vt))]),_:3},8,["name"]),u(e.$slots,"footer",v(_(i.scope.footer)))],10,gt)}const xt=Q(vt,[["render",Lt]]);var we;({auto_start:we}=T);var At={components:{"v-select":xt},setup:()=>{var e,t;return t={0:0,1:1,2:3},e=[{id:0,title:"720P",vip_mark:""},{id:1,title:"1080P",vip_mark:Ue},{id:2,title:"2K",vip_mark:ue},{id:3,title:"4K",vip_mark:ue}],n.resolution===void 0&&(n.resolution=e.length-1),n.sys_audio===void 0&&(n.sys_audio=!0),n.auto_start===void 0&&(n.auto_start=!0),j(()=>{we.auto_start(n.auto_start)}),X(()=>{var o;o=n.vipLevel,o!==void 0&&(n.resolution=Math.min(n.resolution,t[o]))}),{config:n,options:e,vipLevelMaxResolution:t,disabled:Pe(()=>n.src==="camera"),disable_resolution:function(o){return o>t[n.vipLevel]},li:"整个桌面 应用窗口 指定区域".split(" ")}}};const Oe=e=>(N("data-v-e2969c36"),e=e(),z(),e),Pt={class:"bk",style:{"flex-direction":"row","justify-content":"space-between",width:"100%"}},Bt={class:"box"},Dt=Oe(()=>r("h2",null,"录制区域",-1)),Tt={class:"select"},Ft=["disabled"],Mt=["value"],Et={class:"box"},It=Oe(()=>r("h2",null,"录制分辨率",-1)),Rt={class:"select"},jt=["src"];function Nt(e,t){const o=O("v-select");return c(),p("div",Pt,[r("div",Bt,[Dt,r("div",Tt,[V(r("select",{disabled:e.disabled,"onUpdate:modelValue":t[0]||(t[0]=s=>e.config.area=s)},[(c(!0),p($,null,x(e.li,(s,a)=>(c(),p("option",{value:a},m(s),9,Mt))),256))],8,Ft),[[J,e.config.area]])])]),r("div",Et,[It,r("div",Rt,[w(o,{searchable:!1,selectable:s=>s.id<=e.vipLevelMaxResolution[e.config.vipLevel],style:{width:"100%"},modelValue:e.config.resolution,"onUpdate:modelValue":t[1]||(t[1]=s=>e.config.resolution=s),reduce:s=>s.id,options:e.options,label:"title"},{option:K(({title:s,vip_mark:a})=>[r("img",{class:"vip",src:a},null,8,jt),C(" "+m(s),1)]),_:1},8,["selectable","modelValue","reduce","options"])])])])}var zt=A(At,[["render",Nt],["__scopeId","data-v-e2969c36"]]),B;B="PreOfRec";var Kt={components:{zAudio:De},setup:()=>{var e,t,o,s;return s={audio:D([]),video:D([])},{mediaDevices:e}=navigator,o=a=>{a==="audio"?n[a]?S(B,"MikeSwitch.Click"):S(B,"MikeClose.Click"):n[a]?S(B,"CamSwitch.Click"):S(B,"CamClose.Click")},t=async()=>{var a,i,d,l,g,h,F,G,Z,ee,te,f,b,P,oe,se,ie;F={},b={audio:{exist:!1,default_id:""},video:{exist:!1,default_id:""}},Z=await e.enumerateDevices();for(oe of Z)({kind:l,label:h,deviceId:a}=oe),a==="default"&&(h=h.replace("Default - ",""),h="默认 "+h),l.endsWith("input")&&(l=l.slice(0,-5),(F[l]=F[l]||[]).push([a,h]),localStorage[l]===a&&(b[l].exist=!0),(b[l].default_id===""||a==="default")&&(b[l].default_id=a));for(d in s)s[d].value=F[d]||[];for(d in s){if({value:P}=s[d],P.length){if(f=n[d],f){for(se of P)if([i]=se,f===i)return}if(f!==""){for(ie of P){if([i,g]=ie,f)break;if(i==="default"){f=i;break}G=g.toLowerCase(),ee=["default","built-in","内建","默认"];for(te of ee)if(G.includes(te)){f=i;break}}f||(f=P[0][0])}}else f="";n[d]=f}for(d in b)b[d].exist||(localStorage.removeItem(d),n[d]?localStorage[d]=n[d]:b[d].default_id!==""&&(localStorage[d]=b[d].default_id));n.no_video_src=!localStorage.video},X(()=>{var a,i,d;i=["audio","video"];for(a of i)d=n[a],d&&(localStorage[a]=d)}),(async()=>await t())(),le({refresh:t,report:o,config:n,x:a=>{var i;i=n[a],i?i="":i=localStorage[a]||"",n[a]=i,o(a)}},s)}};const W=e=>(N("data-v-7800c734"),e=e(),z(),e),Ut={class:"bk"},qt=W(()=>r("h2",null,"设备设置",-1)),Jt={class:"video"},Ht={class:"select"},Xt={label:"输入源"},Yt=["value"],Qt=W(()=>r("optgroup",{label:"───"},[r("option",{value:""},"禁用")],-1)),Wt={class:"audio"},Gt={class:"select"},Zt={label:"输入源"},eo=["value"],to=W(()=>r("optgroup",{label:"───"},[r("option",{value:""},"禁用")],-1));function oo(e,t){const o=O("z-audio");return c(),p("div",Ut,[qt,r("li",Jt,[r("label",{class:R({x:!e.config.video}),onClick:t[0]||(t[0]=s=>e.x("video")),for:"driveVideo"},null,2),r("div",Ht,[V(r("select",{id:"driveVideo",onFocus:t[1]||(t[1]=(...s)=>e.refresh&&e.refresh(...s)),"onUpdate:modelValue":t[2]||(t[2]=s=>e.config.video=s),onChange:t[3]||(t[3]=s=>e.report("video"))},[r("optgroup",Xt,[(c(!0),p($,null,x(e.video,([s,a])=>(c(),p("option",{value:s},m(a),9,Yt))),256))]),Qt],544),[[J,e.config.video]])])]),r("li",Wt,[r("label",{onClick:t[4]||(t[4]=s=>e.x("audio")),for:"driveAudio"},[w(o,{from:"main"})]),r("div",Gt,[V(r("select",{id:"driveAudio",onFocus:t[5]||(t[5]=(...s)=>e.refresh&&e.refresh(...s)),"onUpdate:modelValue":t[6]||(t[6]=s=>e.config.audio=s),onChange:t[7]||(t[7]=s=>e.report("audio"))},[r("optgroup",Zt,[(c(!0),p($,null,x(e.audio,([s,a])=>(c(),p("option",{value:s},m(a),9,eo))),256))]),to],544),[[J,e.config.audio]])])])])}var so=A(Kt,[["render",oo],["__scopeId","data-v-7800c734"]]),io={components:{btn:Te}};const ao=e=>(N("data-v-b0e482fa"),e=e(),z(),e),no=ao(()=>r("b",null,null,-1));function lo(e,t){const o=O("btn");return c(),M(o,null,{default:K(()=>[no,u(e.$slots,"default",{},void 0,!0)]),_:3})}var ro=A(io,[["render",lo],["__scopeId","data-v-b0e482fa"]]),co={setup:()=>{var e,t;return e=D("单次最长录制10分钟"),t=D(!1),j(async()=>{await _e()}),X(()=>{n.duration_txt&&(e.value=n.duration_txt),n.vipLevel===2?t.value=!0:t.value=!1}),{txt:e,vip_max:t,pay:()=>T.open(me+"vip_details.html?pay=true&user_token="+localStorage.uid+"&vip="+(n.vipLevel+1))}}};const po={key:0},uo={key:1},ho=C("可获更长时间");function fo(e,t){return e.vip_max?(c(),p("span",po,"单次最长录制"+m(e.txt),1)):(c(),p("span",uo,[C("单次最长录制"+m(e.txt)+", ",1),r("span",{onClick:t[0]||(t[0]=(...o)=>e.pay&&e.pay(...o)),class:"pay"},'"升级会员"'),ho]))}var vo=A(co,[["render",fo],["__scopeId","data-v-6b109ad2"]]),H,Se,$e;({auto_update:Se,guide:$e}=T);H="PreOfRec";var go={components:{src:Ke,rArea:zt,drive:so,btn:ro,durationLimit:vo},setup:()=>{var e,t,o;return o="开始录制",t=D(o),j(async()=>{localStorage.first_mark===void 0&&(await $e.show(),localStorage.first_mark=!1),S(H,"RecPop.View")}),e=async()=>{var s,a,i;({avatarUrl:s,space:{used:i,max:a}}=await Be.json("user/get")),await _e(),localStorage.ico=s,i>=a?(t.value="请升级会员后点此录制",T.open(me+"vip_details.html?pay=true&user_token="+localStorage.uid+"&vip="+(n.vipLevel+1))):(t.value=o,Me(H,"RecStart.Click",JSON.stringify({src:n.src,area:n.area,audio:!!n.audio,video:!!n.video})),localStorage.recing=1,Fe())},E.on("quick_start",(s,a)=>{n.src="screen",n.video="",e()}),{txt:t,start:()=>{e()}}}};(async()=>await Se.update_promise())();function _o(e,t){const o=O("src"),s=O("r-area"),a=O("drive"),i=O("btn"),d=O("durationLimit");return c(),p($,null,[w(o),r("main",null,[w(s),w(a),w(i,{onClick:e.start},{default:K(()=>[C(m(e.txt),1)]),_:1},8,["onClick"]),w(d)])],64)}var Do=A(go,[["render",_o],["__scopeId","data-v-51ad9f74"]]);export{Do as default};
