function s(s){return s.name?null===s.protein||""===s.protein||Number.isNaN(s.protein)?{valid:!1,message:"Protein is missing"}:null===s.protein||""===s.protein||Number.isNaN(s.protein)?{valid:!1,message:"Carbs is missing"}:null===s.carbs||""===s.carbs||Number.isNaN(s.carbs)?{valid:!1,message:"Carbs is missing"}:null===s.fat||""===s.fat||Number.isNaN(s.fat)?{valid:!1,message:"Fat is missing"}:{valid:!0,message:""}:{valid:!1,message:"Name is missing"}}const i=(s,i)=>{return i.findIndex(i=>i.name===s)},e=(s,i)=>{return i.filter(function(i,e,a){return i.name!==s})},a=(s,i)=>(i.push(s),i);function n(s){return s.name?s.food&&0!==s.food.length?{valid:!0,message:""}:{valid:!1,message:"Food is missing"}:{valid:!1,message:"Name is missing"}}export{n as a,a as b,e as d,i as f,s as v};