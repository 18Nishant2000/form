(this.webpackJsonpsharda=this.webpackJsonpsharda||[]).push([[0],{42:function(e,t,a){e.exports=a(67)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),m=a(36),r=a.n(m),c=(a(47),a(48),a(28)),u=a(17),o=a(22),d=a(23),E=a(25),_=a(24),C=a(26),i=a(19),O=(a(49),a(1)),y=a(9),g=a(3),I=a(10),v=a(29),s=a.n(v);s.a.initializeApp({});var p=s.a,B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),m=0;m<n;m++)l[m]=arguments[m];return(a=Object(E.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(l)))).avg=function(){var e=(parseInt(document.getElementById("CO1_1").value)+parseInt(document.getElementById("CO2_1").value)+parseInt(document.getElementById("CO3_1").value)+parseInt(document.getElementById("CO4_1").value)+parseInt(document.getElementById("CO5_1").value)+parseInt(document.getElementById("CO6_1").value))/6;document.getElementById("id_avg_co1").innerHTML=e;var t=(parseInt(document.getElementById("CO1_2").value)+parseInt(document.getElementById("CO2_2").value)+parseInt(document.getElementById("CO3_2").value)+parseInt(document.getElementById("CO4_2").value)+parseInt(document.getElementById("CO5_2").value)+parseInt(document.getElementById("CO6_2").value))/6;document.getElementById("id_avg_co2").innerHTML=t;var a=(parseInt(document.getElementById("CO1_3").value)+parseInt(document.getElementById("CO2_3").value)+parseInt(document.getElementById("CO3_3").value)+parseInt(document.getElementById("CO4_3").value)+parseInt(document.getElementById("CO5_3").value)+parseInt(document.getElementById("CO6_3").value))/6;document.getElementById("id_avg_co3").innerHTML=a;var n=(parseInt(document.getElementById("CO1_4").value)+parseInt(document.getElementById("CO2_4").value)+parseInt(document.getElementById("CO3_4").value)+parseInt(document.getElementById("CO4_4").value)+parseInt(document.getElementById("CO5_4").value)+parseInt(document.getElementById("CO6_4").value))/6;document.getElementById("id_avg_co4").innerHTML=n;var l=(parseInt(document.getElementById("CO1_5").value)+parseInt(document.getElementById("CO2_5").value)+parseInt(document.getElementById("CO3_5").value)+parseInt(document.getElementById("CO4_5").value)+parseInt(document.getElementById("CO5_5").value)+parseInt(document.getElementById("CO6_5").value))/6;document.getElementById("id_avg_co5").innerHTML=l;var m=(parseInt(document.getElementById("CO1_6").value)+parseInt(document.getElementById("CO2_6").value)+parseInt(document.getElementById("CO3_6").value)+parseInt(document.getElementById("CO4_6").value)+parseInt(document.getElementById("CO5_6").value)+parseInt(document.getElementById("CO6_6").value))/6;document.getElementById("id_avg_co6").innerHTML=m;var r=(parseInt(document.getElementById("CO1_7").value)+parseInt(document.getElementById("CO2_7").value)+parseInt(document.getElementById("CO3_7").value)+parseInt(document.getElementById("CO4_7").value)+parseInt(document.getElementById("CO5_7").value)+parseInt(document.getElementById("CO6_7").value))/6;document.getElementById("id_avg_co7").innerHTML=r;var c=(parseInt(document.getElementById("CO1_8").value)+parseInt(document.getElementById("CO2_8").value)+parseInt(document.getElementById("CO3_8").value)+parseInt(document.getElementById("CO4_8").value)+parseInt(document.getElementById("CO5_8").value)+parseInt(document.getElementById("CO6_8").value))/6;document.getElementById("id_avg_co8").innerHTML=c;var u=(parseInt(document.getElementById("CO1_9").value)+parseInt(document.getElementById("CO2_9").value)+parseInt(document.getElementById("CO3_9").value)+parseInt(document.getElementById("CO4_9").value)+parseInt(document.getElementById("CO5_9").value)+parseInt(document.getElementById("CO6_9").value))/6;document.getElementById("id_avg_co9").innerHTML=u;var o=(parseInt(document.getElementById("CO1_10").value)+parseInt(document.getElementById("CO2_10").value)+parseInt(document.getElementById("CO3_10").value)+parseInt(document.getElementById("CO4_10").value)+parseInt(document.getElementById("CO5_10").value)+parseInt(document.getElementById("CO6_10").value))/6;document.getElementById("id_avg_co10").innerHTML=o;var d=(parseInt(document.getElementById("CO1_11").value)+parseInt(document.getElementById("CO2_11").value)+parseInt(document.getElementById("CO3_11").value)+parseInt(document.getElementById("CO4_11").value)+parseInt(document.getElementById("CO5_11").value)+parseInt(document.getElementById("CO6_11").value))/6;document.getElementById("id_avg_co11").innerHTML=d;var E=(parseInt(document.getElementById("CO1_12").value)+parseInt(document.getElementById("CO2_12").value)+parseInt(document.getElementById("CO3_12").value)+parseInt(document.getElementById("CO4_12").value)+parseInt(document.getElementById("CO5_12").value)+parseInt(document.getElementById("CO6_12").value))/6;document.getElementById("id_avg_co12").innerHTML=E;var _=(parseInt(document.getElementById("CO1_13").value)+parseInt(document.getElementById("CO2_13").value)+parseInt(document.getElementById("CO3_13").value)+parseInt(document.getElementById("CO4_13").value)+parseInt(document.getElementById("CO5_13").value)+parseInt(document.getElementById("CO6_13").value))/6;document.getElementById("id_avg_co13").innerHTML=_;var C=(parseInt(document.getElementById("CO1_14").value)+parseInt(document.getElementById("CO2_14").value)+parseInt(document.getElementById("CO3_14").value)+parseInt(document.getElementById("CO4_14").value)+parseInt(document.getElementById("CO5_14").value)+parseInt(document.getElementById("CO6_14").value))/6;document.getElementById("id_avg_co14").innerHTML=C;var i=(parseInt(document.getElementById("CO1_15").value)+parseInt(document.getElementById("CO2_15").value)+parseInt(document.getElementById("CO3_15").value)+parseInt(document.getElementById("CO4_15").value)+parseInt(document.getElementById("CO5_15").value)+parseInt(document.getElementById("CO6_15").value))/6;document.getElementById("id_avg_co15").innerHTML=i;var O=(parseInt(document.getElementById("CO1_16").value)+parseInt(document.getElementById("CO2_16").value)+parseInt(document.getElementById("CO3_16").value)+parseInt(document.getElementById("CO4_16").value)+parseInt(document.getElementById("CO5_16").value)+parseInt(document.getElementById("CO6_16").value))/6;document.getElementById("id_avg_co16").innerHTML=O},a.retrieve=function(e){e.preventDefault(),p.firestore().settings({timestampsInSnapshots:!0})},a.addUser=function(e){e.preventDefault();var t=p.firestore();t.settings({timestampsInSnapshots:!0}),t.collection("users").add({school:document.getElementById("school").value,program:document.getElementById("program").value,branch:document.getElementById("branch").value,course_code:document.getElementById("course_code").value,course_title:document.getElementById("course_title").value,credits:document.getElementById("credits").value,L:document.getElementById("L").value,T:document.getElementById("T").value,P:document.getElementById("P").value,course_status:document.getElementById("course_status").value,objectives:document.getElementById("objectives").value,C01:document.getElementById("C01").value,C02:document.getElementById("C02").value,C03:document.getElementById("C03").value,C04:document.getElementById("C04").value,desc_course:document.getElementById("desc_course").value,Unit1:document.getElementById("Unit1").value,Unit2:document.getElementById("Unit2").value,Unit3:document.getElementById("Unit3").value,Unit4:document.getElementById("Unit4").value,CO1_TEMP_1:document.getElementById("CO1_1").value,CO1_TEMP_2:document.getElementById("CO1_2").value,CO1_TEMP_3:document.getElementById("CO1_3").value,CO1_TEMP_4:document.getElementById("CO1_4").value,CO1_TEMP_5:document.getElementById("CO1_5").value,CO1_TEMP_6:document.getElementById("CO1_6").value,CO1_TEMP_7:document.getElementById("CO1_7").value,CO1_TEMP_8:document.getElementById("CO1_8").value,CO1_TEMP_9:document.getElementById("CO1_9").value,CO1_TEMP_10:document.getElementById("CO1_10").value,CO1_TEMP_11:document.getElementById("CO1_11").value,CO1_TEMP_12:document.getElementById("CO1_12").value,CO1_TEMP_13:document.getElementById("CO1_13").value,CO1_TEMP_14:document.getElementById("CO1_14").value,CO1_TEMP_15:document.getElementById("CO1_15").value,CO1_TEMP_16:document.getElementById("CO1_16").value,CO2_TEMP_1:document.getElementById("CO2_1").value,CO2_TEMP_2:document.getElementById("CO2_2").value,CO2_TEMP_3:document.getElementById("CO2_3").value,CO2_TEMP_4:document.getElementById("CO2_4").value,CO2_TEMP_5:document.getElementById("CO2_5").value,CO2_TEMP_6:document.getElementById("CO2_6").value,CO2_TEMP_7:document.getElementById("CO2_7").value,CO2_TEMP_8:document.getElementById("CO2_8").value,CO2_TEMP_9:document.getElementById("CO2_9").value,CO2_TEMP_10:document.getElementById("CO2_10").value,CO2_TEMP_11:document.getElementById("CO2_11").value,CO2_TEMP_12:document.getElementById("CO2_12").value,CO2_TEMP_13:document.getElementById("CO2_13").value,CO2_TEMP_14:document.getElementById("CO2_14").value,CO2_TEMP_15:document.getElementById("CO2_15").value,CO2_TEMP_16:document.getElementById("CO2_16").value,CO3_TEMP_1:document.getElementById("CO3_1").value,CO3_TEMP_2:document.getElementById("CO3_2").value,CO3_TEMP_3:document.getElementById("CO3_3").value,CO3_TEMP_4:document.getElementById("CO3_4").value,CO3_TEMP_5:document.getElementById("CO3_5").value,CO3_TEMP_6:document.getElementById("CO3_6").value,CO3_TEMP_7:document.getElementById("CO3_7").value,CO3_TEMP_8:document.getElementById("CO3_8").value,CO3_TEMP_9:document.getElementById("CO3_9").value,CO3_TEMP_10:document.getElementById("CO3_10").value,CO3_TEMP_11:document.getElementById("CO3_11").value,CO3_TEMP_12:document.getElementById("CO3_12").value,CO3_TEMP_13:document.getElementById("CO3_13").value,CO3_TEMP_14:document.getElementById("CO3_14").value,CO3_TEMP_15:document.getElementById("CO3_15").value,CO3_TEMP_16:document.getElementById("CO3_16").value,CO4_TEMP_1:document.getElementById("CO4_1").value,CO4_TEMP_2:document.getElementById("CO4_2").value,CO4_TEMP_3:document.getElementById("CO4_3").value,CO4_TEMP_4:document.getElementById("CO4_4").value,CO4_TEMP_5:document.getElementById("CO4_5").value,CO4_TEMP_6:document.getElementById("CO4_6").value,CO4_TEMP_7:document.getElementById("CO4_7").value,CO4_TEMP_8:document.getElementById("CO4_8").value,CO4_TEMP_9:document.getElementById("CO4_9").value,CO4_TEMP_10:document.getElementById("CO4_10").value,CO4_TEMP_11:document.getElementById("CO4_11").value,CO4_TEMP_12:document.getElementById("CO4_12").value,CO4_TEMP_13:document.getElementById("CO4_13").value,CO4_TEMP_14:document.getElementById("CO4_14").value,CO4_TEMP_15:document.getElementById("CO4_15").value,CO4_TEMP_16:document.getElementById("CO4_16").value,CO5_TEMP_1:document.getElementById("CO5_1").value,CO5_TEMP_2:document.getElementById("CO5_2").value,CO5_TEMP_3:document.getElementById("CO5_3").value,CO5_TEMP_4:document.getElementById("CO5_4").value,CO5_TEMP_5:document.getElementById("CO5_5").value,CO5_TEMP_6:document.getElementById("CO5_6").value,CO5_TEMP_7:document.getElementById("CO5_7").value,CO5_TEMP_8:document.getElementById("CO5_8").value,CO5_TEMP_9:document.getElementById("CO5_9").value,CO5_TEMP_10:document.getElementById("CO5_10").value,CO5_TEMP_11:document.getElementById("CO5_11").value,CO5_TEMP_12:document.getElementById("CO5_12").value,CO5_TEMP_13:document.getElementById("CO5_13").value,CO5_TEMP_14:document.getElementById("CO5_14").value,CO5_TEMP_15:document.getElementById("CO5_15").value,CO5_TEMP_16:document.getElementById("CO5_16").value,CO6_TEMP_1:document.getElementById("CO6_1").value,CO6_TEMP_2:document.getElementById("CO6_2").value,CO6_TEMP_3:document.getElementById("CO6_3").value,CO6_TEMP_4:document.getElementById("CO6_4").value,CO6_TEMP_5:document.getElementById("CO6_5").value,CO6_TEMP_6:document.getElementById("CO6_6").value,CO6_TEMP_7:document.getElementById("CO6_7").value,CO6_TEMP_8:document.getElementById("CO6_8").value,CO6_TEMP_9:document.getElementById("CO6_9").value,CO6_TEMP_10:document.getElementById("CO6_10").value,CO6_TEMP_11:document.getElementById("CO6_11").value,CO6_TEMP_12:document.getElementById("CO6_12").value,CO6_TEMP_13:document.getElementById("CO6_13").value,CO6_TEMP_14:document.getElementById("CO6_14").value,CO6_TEMP_15:document.getElementById("CO6_15").value,CO6_TEMP_16:document.getElementById("CO6_16").value,avg_co1:document.getElementById("id_avg_co1").innerHTML,avg_co2:document.getElementById("id_avg_co2").innerHTML,avg_co3:document.getElementById("id_avg_co3").innerHTML,avg_co4:document.getElementById("id_avg_co4").innerHTML,avg_co5:document.getElementById("id_avg_co5").innerHTML,avg_co6:document.getElementById("id_avg_co6").innerHTML,avg_co7:document.getElementById("id_avg_co7").innerHTML,avg_co8:document.getElementById("id_avg_co8").innerHTML,avg_co9:document.getElementById("id_avg_co9").innerHTML,avg_co10:document.getElementById("id_avg_co10").innerHTML,avg_co11:document.getElementById("id_avg_co11").innerHTML,avg_co12:document.getElementById("id_avg_co12").innerHTML,avg_co13:document.getElementById("id_avg_co13").innerHTML,avg_co14:document.getElementById("id_avg_co14").innerHTML,avg_co15:document.getElementById("id_avg_co15").innerHTML,avg_co16:document.getElementById("id_avg_co16").innerHTML})},a}return Object(C.a)(t,e),Object(d.a)(t,[{key:"fun",value:function(){p.firestore().collection("users").doc("auth").get().then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"mt-4 mb-4 mr-2 ml-2"},l.a.createElement(O.a,{onSubmit:this.addUser},l.a.createElement("h2",{className:"text-white"},l.a.createElement("b",null,"Syllabus for Theory Courses"))," ",l.a.createElement("hr",null),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{className:"text-white"},"School"),l.a.createElement(O.a.Control,{id:"school"})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{className:"text-white"},"Program"),l.a.createElement(O.a.Control,{id:"program"})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{className:"text-white"},"Branch"),l.a.createElement(O.a.Control,{id:"branch"})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{className:"text-white"},"Course Code"),l.a.createElement(O.a.Control,{id:"course_code"})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{className:"text-white"},"Course Title"),l.a.createElement(O.a.Control,{id:"course_title"})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{className:"text-white"},"Credits"),l.a.createElement(O.a.Control,{type:"autofill",id:"credits"})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{className:"text-white"},"Contact Hours (L-T-P)"),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"L",placeholder:"L"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"T",placeholder:"T"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"P",placeholder:"P"})))),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{className:"text-white",id:"courseStatus"},"Course Status"),l.a.createElement(O.a.Control,{as:"select",id:"course_status"},' title="Course Status">',l.a.createElement("option",null,"Core"),l.a.createElement("option",null,"Elective"),l.a.createElement("option",null,"Open Elective"))),l.a.createElement(I.a,null,l.a.createElement(O.a.Label,{className:"text-white"},"Course Objective"),l.a.createElement(O.a.Control,{as:"textarea","aria-label":"With textarea",id:"objectives"})),l.a.createElement(O.a.Group,{controlId:"Program"},l.a.createElement(O.a.Label,{className:"text-white"},"Course Outcomes"),l.a.createElement(O.a.Control,{as:"textarea",type:"autofill",placeholder:"C01",id:"C01"})," ",l.a.createElement("br",null),l.a.createElement(O.a.Control,{as:"textarea",type:"autofill",placeholder:"C02",id:"C02"})," ",l.a.createElement("br",null),l.a.createElement(O.a.Control,{as:"textarea",type:"autofill",placeholder:"C03",id:"C03"})," ",l.a.createElement("br",null),l.a.createElement(O.a.Control,{as:"textarea",type:"autofill",placeholder:"C04",id:"C04"})),l.a.createElement(I.a,null,l.a.createElement(O.a.Label,{className:"text-white"},"Course Description"),l.a.createElement(O.a.Control,{as:"textarea","aria-label":"With textarea",id:"desc_course"})),l.a.createElement(I.a,null,l.a.createElement(O.a.Label,{className:"text-white"},l.a.createElement("h3",null,l.a.createElement("b",null,"Outline Syllabus")," ")," "),l.a.createElement(O.a.Control,{as:"textarea",placeholder:"Unit 1","aria-label":"With textarea",id:"Unit1"}),l.a.createElement("br",null),l.a.createElement(O.a.Control,{as:"textarea",placeholder:"Unit 2","aria-label":"With textarea",id:"Unit2"}),l.a.createElement("br",null),l.a.createElement(O.a.Control,{as:"textarea",placeholder:"Unit 3","aria-label":"With textarea",id:"Unit3"}),l.a.createElement("br",null),l.a.createElement(O.a.Control,{as:"textarea",placeholder:"Unit 4","aria-label":"With textarea",id:"Unit4"})),l.a.createElement(O.a.Group,{controlId:"formBasicCheckbox"},l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Check,{type:"checkbox",label:"Jury",className:"text-white",id:"practical"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Check,{type:"checkbox",label:"Practical",className:"text-white",id:"jury"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Check,{type:"checkbox",label:"Viva",className:"text-white",id:"viva"})))),l.a.createElement(I.a,{className:"text-white"},l.a.createElement(O.a.Label,null,"Weightage Distribution "),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{align:"center",className:"text-white",plaintext:!0,defaultValue:"60% - CA"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{align:"center",className:"text-white",plaintext:!0,defaultValue:"0% -  MTE"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{align:"center",className:"text-white",plaintext:!0,defaultValue:"40% - ETE"})))),l.a.createElement(I.a,null,l.a.createElement(O.a.Label,{className:"text-white"},"Textbooks(Reference Books) "),l.a.createElement(O.a.Control,{as:"textarea","aria-label":"With textarea"})),l.a.createElement(I.a,null,l.a.createElement(O.a.Label,{className:"text-white"},l.a.createElement("h3",null,l.a.createElement("b",null,"PO and PSO mapping with level of strength for Course Name xxxx (Course Code yyyy)")))),l.a.createElement(I.a,null,l.a.createElement(O.a.Label,{className:"text-white"},"CO1"),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_1"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_2"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_3"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_4"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_5"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_6"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_7"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_8"}))),l.a.createElement("br",null),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_9"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_10"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_11"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_12"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_13"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_14"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_15"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO1_16"})))),l.a.createElement(I.a,null,l.a.createElement(O.a.Label,{className:"text-white"},"CO2"),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_1"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_2"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_3"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_4"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_5"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_6"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_7"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_8"}))),l.a.createElement("br",null),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_9"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_10"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_11"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_12"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_13"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_14"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_15"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO2_16"})))),l.a.createElement(I.a,null,l.a.createElement(O.a.Label,{className:"text-white"},"CO3"),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_1"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_2"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_3"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_4"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_5"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_6"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_7"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_8"}))),l.a.createElement("br",null),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_9"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_10"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_11"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_12"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_13"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_14"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_15"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO3_16"})))),l.a.createElement(I.a,null,l.a.createElement(O.a.Label,{className:"text-white"},"CO4"),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_1"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_2"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_3"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_4"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_5"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_6"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_7"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_8"}))),l.a.createElement("br",null),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_9"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_10"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_11"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_12"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_13"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_14"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_15"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO4_16"})))),l.a.createElement(I.a,null,l.a.createElement(O.a.Label,{className:"text-white"},"CO5"),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_1"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_2"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_3"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_4"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_5"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_6"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_7"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_8"}))),l.a.createElement("br",null),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_9"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_10"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_11"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_12"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_13"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_14"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_15"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO5_16"})))),l.a.createElement(I.a,null,l.a.createElement(O.a.Label,{className:"text-white"},"CO6"),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_1"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_2"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_3"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_4"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_5"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_6"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_7"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_8"}))),l.a.createElement("br",null),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_9"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_10"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_11"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_12"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_13"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_14"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_15"})),l.a.createElement(g.a,null,l.a.createElement(O.a.Control,{type:"number",id:"CO6_16"}))),l.a.createElement("br",null),l.a.createElement("div",{align:"center"},l.a.createElement(i.a,{variant:"primary",onClick:this.avg},"Calculate Average"))),l.a.createElement(I.a,null,l.a.createElement(O.a.Label,{className:"text-white"},l.a.createElement("h3",null,l.a.createElement("b",null,"Average of non-zeros entry in following table. "))," "),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co1"},"0")),l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co2"},"0")),l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co3"},"0")),l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co4"},"0")),l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co5"},"0")),l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co6"},"0"))),l.a.createElement("br",null),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co7"},"0")),l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co8"},"0")),l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co9"},"0")),l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co10"},"0")),l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co11"},"0")),l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co12"},"0"))),l.a.createElement("br",null),l.a.createElement(y.a,null,l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co13"},"0")),l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co14"},"0")),l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co15"},"0")),l.a.createElement(g.a,null,l.a.createElement("p",{align:"center",className:"text-white",plaintext:!0,id:"id_avg_co16"},"0")))),l.a.createElement("br",null),l.a.createElement("div",{align:"center"},l.a.createElement(i.a,{variant:"primary",type:"submit"},"Submit")))))}}]),t}(l.a.Component);l.a.Component;function b(){return l.a.createElement("div",null,l.a.createElement("h3",null," 404 PAGE "))}var T=function(){return l.a.createElement("div",null,l.a.createElement(c.a,null,l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:"/",component:B}),l.a.createElement(u.b,{exact:!0,path:"/404",component:b}),l.a.createElement(u.a,{to:"/404",component:b}))))};a(66),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.347034fe.chunk.js.map