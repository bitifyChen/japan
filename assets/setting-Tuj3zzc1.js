import{L as h,r as p,A as b,C as y,F as e,M as _,E as o,c as i,D as d,N as R,O as Y,G as w,P as m,Q as V}from"./index-znGQ3c5l.js";import{C as k,B,A as C}from"./index-CtCo2FIM.js";import"./on-popup-reopen-D8XWLTXo.js";const g={class:"p-[10px] h-full flex flex-col"},N={class:"flex justify-between"},A=e("div",null,"即時匯率",-1),D={class:"flex justify-between"},E=e("div",null,"庫存匯率",-1),F=e("div",{class:"text-center text-[#8fd4de]"},"以上匯率請手動修改",-1),M={class:"p-[10px]"},S={__name:"setting",setup(U){const s=h(),a=p(!1),l=p({}),u=()=>{a.value=!0,l.value={timelyYenRate:s.timelyYenRate,holdYenRate:s.holdYenRate}},r=()=>{a.value=!1,s.editRate(l.value),l.value={}};return(j,t)=>{const c=V,f=k,v=B,x=C;return b(),y(w,null,[e("div",g,[e("div",{class:"mb-[10px] bg-[#255359] p-[10px] text-white text-[20px] font-bold",onClick:u},[e("div",N,[A,e("div",null,_(o(s).timelyYenRate),1)])]),e("div",{class:"mb-[10px] bg-[#255359] p-[10px] text-white text-[20px] font-bold",onClick:u},[e("div",D,[E,e("div",null,_(o(s).holdYenRate),1)])]),F]),i(x,{show:o(a),"onUpdate:show":t[3]||(t[3]=n=>Y(a)?a.value=n:null),title:"匯率修改"},{default:d(()=>[e("div",M,[i(f,{inset:""},{default:d(()=>[i(c,{modelValue:o(l).timelyYenRate,"onUpdate:modelValue":t[0]||(t[0]=n=>o(l).timelyYenRate=n),type:"number",label:"即時匯率"},null,8,["modelValue"]),i(c,{modelValue:o(l).holdYenRate,"onUpdate:modelValue":t[1]||(t[1]=n=>o(l).holdYenRate=n),type:"number",label:"庫存匯率"},null,8,["modelValue"])]),_:1}),i(v,{round:"",type:"success",block:"",onClick:t[2]||(t[2]=n=>r())},{default:d(()=>[R("確認")]),_:1})])]),_:1},8,["show"])],64)}}};typeof m=="function"&&m(S);export{S as default};
