!function(){var e=document.querySelector(".form");e.addEventListener("submit",(function(e){e.preventDefault(),n={Delay:Number(t.value),Step:Number(a.value),Amount:Number(i.value)};for(var o=1;o<=n.Amount;o+=1){var c=n.Delay+n.Step*o;u(o,c).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}}));var n="",o=e.elements,t=o.delay,a=o.step,i=o.amount;function u(e,n){return new Promise((function(o,t){var a=Math.random()>.3;setTimeout((function(){a?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}}();
//# sourceMappingURL=03-promises.541f1ecc.js.map
