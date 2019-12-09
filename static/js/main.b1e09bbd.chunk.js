(this.webpackJsonpdrake_equation=this.webpackJsonpdrake_equation||[]).push([[0],{154:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(7),r=a.n(l),s=(a(85),a(12)),o=a(13),c=a(16),u=a(14),h=a(17),d=a(73),m=a(30),p=a(79),f=a(74),b=a.n(f),v=a(41),g=a(58),E=(a(154),a(155),g.a.Handle),y=function(e){var t=e.value,a=e.dragging,n=e.index,l=Object(p.a)(e,["value","dragging","index"]);return i.a.createElement(v.a,{prefixCls:"rc-slider-tooltip",overlay:t,visible:a,placement:"bottom",key:n},i.a.createElement(E,Object.assign({value:t},l)))},j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSliderChange=a.handleSliderChange.bind(Object(m.a)(a)),a.state={sliderValue:a.props.default},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleSliderChange",value:function(e){this.setState({sliderValue:e}),this.props.handleValueChange(e,this.props.index)}},{key:"render",value:function(){var e,t;return this.props.result?(e=i.a.createElement("div",{style:{"padding-bottom":"24px"}}),t=i.a.createElement("div",{className:"outer",id:"result"},this.props.product.toFixed(0))):(e=i.a.createElement(g.a,{min:this.props.min,max:this.props.max,defaultValue:this.props.default,handle:y,onChange:this.handleSliderChange,className:"slider",step:this.props.step}),t=this.props.max>=1e4?i.a.createElement("div",{className:"large_num"},this.state.sliderValue):i.a.createElement("div",{className:"num"},this.state.sliderValue)),i.a.createElement("td",null,i.a.createElement("div",{className:"outer"},i.a.createElement("p",{className:"variable","data-tip":!0,"data-for":this.props.variable},"$$ ",this.props.variable," $$"),i.a.createElement(b.a,{id:this.props.variable},i.a.createElement("p",null," ",this.props.variable_info," ")),t,e))}}]),t}(n.Component),O=(a(156),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("td",null,i.a.createElement("p",{className:"operator outer"},"$$ * $$"),i.a.createElement("p",{className:"operator outer"},"$$ * $$"))}}]),t}(n.Component)),k=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("td",null,i.a.createElement("p",{className:"operator outer"},"$$ = $$"),i.a.createElement("p",{className:"operator outer"},"$$ = $$"))}}]),t}(n.Component),w=function e(t,a,n,i,l,r){Object(s.a)(this,e),this.label=t,this.info=a,this.min=n,this.max=i,this.defaultValue=l,this.step=r},x=(a(157),function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleValueChange=a.handleValueChange.bind(Object(m.a)(a)),a.product_variable="N",a.product_info="The number of civilizations in our galaxy with which communication is possible.",a.variables=[new w("R_\u2605","The average rate of star formation per year in our galaxy.",0,10,2.3,.1),new w("f_p","The fraction of those stars with planets.",0,1,.9,.1),new w("n_e","The average number of those planets that may develop an ecosystem.",0,5,3,1),new w("f_L","The fraction of those planets that succeed in developing life.",0,1,1,.1),new w("f_i","The fraction of those planets with life that develop intelligent life.",0,1,.5,.1),new w("f_c","The fraction of those planets with intelligent life that develop interstellar communication.",0,1,.1,.1),new w("L","The average length of time such civilizations survive and continue to send communications.",0,1e5,1e4,100)];for(var n=[],i=0;i<a.variables.length;i++)n.push(a.variables[i].defaultValue);return a.state={sliderValues:n},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleValueChange",value:function(e,t){var a=this.state.sliderValues;a[t]=e,this.setState({sliderValues:a}),console.log(this.state.sliderValues)}},{key:"render",value:function(){for(var e=1,t=0;t<this.state.sliderValues.length;t++)e*=this.state.sliderValues[t];var a=[i.a.createElement(j,{variable:this.product_variable,variable_info:this.product_info,result:!0,product:e}),i.a.createElement(k,null)];for(t=0;t<this.variables.length;t++)a.push(i.a.createElement(j,{variable:this.variables[t].label,variable_info:this.variables[t].info,min:this.variables[t].min,max:this.variables[t].max,default:this.variables[t].defaultValue,handleValueChange:this.handleValueChange,slider:!0,result:!1,index:t,step:this.variables[t].step})),a.push(i.a.createElement(O,null));return a=a.slice(0,a.length-1),i.a.createElement("div",{className:"content"},i.a.createElement("div",{id:"backgroundDiv"},i.a.createElement("h1",{id:"header"},"The Drake Equation"),i.a.createElement("div",{className:"equation"},i.a.createElement("table",{align:"center"},i.a.createElement("tbody",null,i.a.createElement("tr",null,a))))))}}]),t}(n.Component)),V=a(78),$=a.n(V),C=(a(158),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"main_block"},i.a.createElement("table",{align:"center"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("div",{class:"summary sub_block"},i.a.createElement("p",null,"The Drake Equation is a probabilistic equation used to estimate the number of extraterrestrial civilizations capable of communication in the Milky Way galaxy. The equation was formulated by Dr. Frank Drake in 1961."),i.a.createElement("p",null,"Astronomers have used the equation for decades to examine the factors that influence the frequency of intelligent life in the galaxy. Our website is meant to provide a fun way to estimate the number of these intelligent civilizations using a range of reasonable values."),i.a.createElement("p",null,"While the equation has been criticized for its inclusion of a few unknown variables (the last four in particular), it is nonetheless very important to our Search for Life in the Universe. In fact, the inclusion of unknown variables effectively guides our research because it sparks discussions and projects that seek to better understand these variables. Once we are capable of making precise estimates for all the variables, the usefulness of the equation will be fully realized.")),i.a.createElement("td",{className:"image_container"},i.a.createElement("img",{id:"drake",src:"https://www.seti.org/sites/default/files/styles/medium/public/2018-09/frank-drake-400px.png?itok=DaB0i1TN"})))))))}}]),t}(n.Component)),_=(a(159),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{background:"url(".concat($.a,")"),backgroundSize:"cover",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement(d.a,{numParticles:400,depth:300,style:{position:"absolute",zIndex:1,top:0,left:0,right:0,bottom:0}}),i.a.createElement("div",{className:"block"},i.a.createElement(x,null),i.a.createElement(C,null)))}}]),t}(n.Component));r.a.render(i.a.createElement(_,null),document.getElementById("root"))},78:function(e,t,a){e.exports=a.p+"static/media/westerlund2.ae4dfb2b.jpg"},80:function(e,t,a){e.exports=a(160)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.b1e09bbd.chunk.js.map