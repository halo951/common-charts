/** common-charts
 *
 * @author halo951(https://github.com/halo951)
 * @license MIT
 */
import{defineComponent as e,ref as t,watch as n,onMounted as r,onBeforeUnmount as i,h as o}from"vue-demi";import{init as a}from"echarts";const s=new class{pool=[];push(e){this.pool.push(e),this.execute()}lock=!1;execute(){if(!this.lock){for(;this.pool.length>0;)try{const e=this.pool.pop();requestAnimationFrame(e)}catch(e){console.error(e)}this.lock=!1}}},l={firstRenderSleep:0,clear:!1,renderer:(()=>{const e=navigator.userAgent.toLowerCase();return/mobile/.test(e)?"svg":"canvas"})()},p=e({name:"Chart",props:{options:{type:Object,default:()=>({})},firstRenderSleep:{type:Number,default:()=>l.firstRenderSleep},clear:{type:Boolean,default:()=>l.clear},renderer:{type:String,default:()=>l.renderer}},setup(e,{}){const o=t(null),l=t(0),p=t(),c=async()=>{var t;o.value&&(l.value>Date.now()&&await(t=l.value-Date.now(),new Promise((e=>setTimeout((()=>e()),t)))),s.push((()=>o.value?.setOption(e.options??{}))))},f=e=>{e.position||(e.confine=!0,e.position=function(e,t,n){if(n instanceof HTMLElement){if(n.getBoundingClientRect().left<0)return"right";if(n.getBoundingClientRect().right>window.innerWidth-n.clientWidth)return"left"}return"inside"})},u=()=>{o.value?.resize()};return n(t(e.options),(()=>(()=>{if(!o.value)return;e.clear&&o.value.clear();const{tooltip:t}=e.options;if(t)if(t instanceof Array)for(const e of t)f(e);else f(t);c()})())),r((()=>{l.value=e.firstRenderSleep+Date.now(),o.value=a(p.value,"default",{renderer:e.renderer}),e.options&&c(),window.addEventListener("resize",u)})),i((()=>{o.value&&!o.value.isDisposed()&&(o.value.dispose(),window.removeEventListener("resize",u))})),{el:p}},render:()=>o("div",{ref:"el",class:"chart"})}),c=e=>{const{r:t,y:n}=e;return{type:"pie",radius:[t-10,t],center:["50%",n+t],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},emptyCircleStyle:{color:"#D1EBFF"}}},f=e=>({"完好率":"%","工单数":"个","分项得分":"分","分项问题数":"个","已完成培训商户数":"户","未完成培训商户数":"户"}[e]??""),u=e=>{const t={};var n;return t.position="right",t.formatter=e=>{e=e instanceof Array?e[0]:e,n&&(e.percent=n(e));const t=f(e.seriesName);return[`<span style='margin-left:8px; margin-right: 12px; font-size: 12px; color:#fff;'>${e.data[0]}</span>`,` <span style='font-size: 14px; color:#fff; margin-top: 4px;'>${e.data[1]}${t}&nbsp;&nbsp;&nbsp;${e.percent}%</span>`].join("<br />")},t},d=(e,t)=>{const{r:n,x:r,y:i}=t;return{icon:"circle",itemWidth:8,itemHeight:8,itemGap:12,width:2*(n+r)-20,height:24*Math.ceil(e.length/2),left:"center",top:2*n+i+17,orient:"vertical",textStyle:{fontFamily:"PingFang SC",fontStyle:"normal",fontWeight:400,fontSize:12,padding:[0,0,0,4]},formatter:t=>{let n=""+e.find((e=>e[0]===t))?.[1];return n=t+" "+n,n.length<8&&(n+=new Array(10-n.length).fill(" ").join("")),n}}},h=["#0091FF","#00D6B9","#F58300","#AD82F7","#B3D600","#F76B64","#FFC60A","#00AB4A"],m=e=>{const t={};var n;return(e=>{e.animationDuration=1e3,e.animationDurationUpdate=700,e.animationEasingUpdate="cubicInOut"})(t),(e=>{e.color=h})(t),t.title=[(n=e.title,{text:n,left:-4,textStyle:{fontFamily:"PingFang SC",fontStyle:"normal",fontWeight:400,fontSize:12}})],t.legend=[d(e.source,e.position)],t.tooltip=u(e.unit),t.series=[c(e.position)],t.dataset={source:e.source},t},g=e=>{l.firstRenderSleep=e},v=e=>{l.clear=e},y=e=>{l.renderer=e};export{p as Chart,m as createPieChart,v as setClear,g as setFirstRenderSleep,y as setRenderer};
