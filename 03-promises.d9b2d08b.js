const e=document.querySelector(".form");e.addEventListener("submit",(function(e){e.preventDefault(),t={Delay:Number(o.value),Step:Number(n.value),Amount:Number(l.value)};for(let e=1;e<=t.Amount;e+=1){let o=t.Delay+t.Step*e;i(e,o).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));let t="";const{delay:o,step:n,amount:l}=e.elements;function i(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}
//# sourceMappingURL=03-promises.d9b2d08b.js.map
