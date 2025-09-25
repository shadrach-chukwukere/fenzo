import{c as t,g as s}from"./index-wInRrqmW.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],f=t("circle-check-big",d);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],m=t("circle-x",l);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],g=t("clock",p);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],w=t("package",k),i="http://localhost:5000/api",$=async(r={})=>{try{const e=s("token"),o=new URLSearchParams;Object.entries(r).forEach(([h,n])=>{n!=null&&n!==""&&o.append(h,n)});const c=`${i}/orders${o.toString()?`?${o.toString()}`:""}`,a=await fetch(c,{method:"GET",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"}});if(!a.ok)throw new Error(`Error fetching orders: ${a.status}`);return await a.json()}catch(e){return console.error("Fetch orders failed:",e),[]}},u=async r=>{try{const e=s("token"),o=await fetch(`${i}/order/${r}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}});if(!o.ok){const c=await o.json();throw new Error(c.message||"Failed to fetch order")}return await o.json()}catch(e){throw console.error("Fetch order details error:",e),e}};export{g as C,w as P,m as a,f as b,u as c,$ as f};
