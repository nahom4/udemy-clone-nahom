(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11],{310:function(e,t,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(104).default)("1fc2f88e",content,!0,{sourceMap:!1})},315:function(e,t,n){"use strict";n(310)},316:function(e,t,n){var r=n(103)((function(i){return i[1]}));r.push([e.i,"\n.header-style[data-v-d36278ae] {\r\n  background-color: #F7F9FA !important;\r\n  padding: 0px 16px;\n}\n.header-content[data-v-d36278ae] {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\n}\n.header-title[data-v-d36278ae] {\r\n  font-weight: bold;\r\n  font-size: 16px;\n}\n.header-preview[data-v-d36278ae] {\r\n  font-size: 14px;\r\n  color: #007bff;\r\n  margin-right: 16px;\r\n  cursor: pointer;\n}\n.header-time[data-v-d36278ae] {\r\n  font-size: 14px;\r\n  color: #6c757d;\r\n  margin-right: 16px;\n}\r\n",""]),r.locals={},e.exports=r},325:function(e,t,n){"use strict";n.r(t);var r=n(411),o=n(417),l=n(407),d=n(418),c=n(408),m=n(415),x=n(359),v=n(410),f=n(409),h=(n(30),n(67),n(21)),_=Object(h.a)({name:"CourseDescription",props:{title:{type:String,required:!0},time:{type:String,required:!0},expanded:{type:Boolean,default:!1}},data:function(){return{isExpanded:this.expanded}},watch:{expanded:function(e){this.isExpanded=e}}},"data",(function(){return{items:[{icon:"mdi-television",description:"Certificate of Completion",time:"03:51"},{icon:"mdi-television",description:"Frequently Asked Questions",time:"04:35"},{icon:"mdi-television",description:"Explore the Entire Course",time:"07:05"},{icon:"mdi-television",description:"All About the PMP Exam Details",time:"07:10"},{icon:"mdi-television",description:"All About the PMP Exam",time:"03:59"},{icon:"mdi-television",description:"PMP Exam Application Audit",time:"06:14"},{icon:"mdi-television",description:"PMP Coach: Getting Started",time:"03:24"},{icon:"mdi-television",description:"PMP Exam - January 2, 2021",time:"06:13"},{icon:"mdi-television",description:"90-Question Pre-Assessment Exam",time:"90 questions"},{icon:"mdi-television",description:"Section Summary: Preparing to Pass the PMP Exam",time:"02:56"}]}})),C=(n(315),n(65)),component=Object(C.a)(_,(function(){var e=this,t=e._self._c;return t(o.a,{staticStyle:{padding:"0px !important"}},[t(m.a,{model:{value:e.isExpanded,callback:function(t){e.isExpanded=t},expression:"isExpanded"}},[t(l.a,[t(c.a,{staticClass:"header-style",attrs:{value:e.isExpanded},scopedSlots:e._u([{key:"actions",fn:function(){return[t(x.a,[e._v("mdi-chevron-down")])]},proxy:!0}])},[t("div",{staticClass:"header-content"},[t("p",{staticClass:"header-title"},[e._v(e._s(e.title))]),e._v(" "),t(f.a),e._v(" "),t("p",{staticClass:"header-time"},[e._v(e._s(e.time))])],1)]),e._v(" "),t(d.a,e._l(e.items,(function(n,o){return t(v.a,{key:o,staticClass:"d-flex align-center"},[t(r.a,{attrs:{cols:"1"}},[t(x.a,{staticClass:"mr-2"},[e._v(e._s(n.icon))])],1),e._v(" "),t(r.a,{attrs:{cols:"8"}},[t("span",[e._v(e._s(n.description))])]),e._v(" "),t(r.a,{staticClass:"text-end",attrs:{cols:"3"}},[t("span",[e._v(e._s(n.time))])])],1)})),1)],1)],1)],1)}),[],!1,null,"d36278ae",null);t.default=component.exports},346:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{expandAll:!1}},methods:{toggleExpandAll:function(){this.expandAll=!this.expandAll}}},o=n(65),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col gap-6"},[t("p",{staticClass:"text-[#2D2F31] text-[24px] font-bold"},[e._v("Course content")]),e._v(" "),t("div",{staticClass:"flex justify-between pt-4"},[t("p",[e._v("32 sections • 380 lectures • 29h 53m total length")]),e._v(" "),t("p",{staticClass:"text-[#5022C3] font-bold text-[14px] cursor-pointer",on:{click:e.toggleExpandAll}},[e._v("\n      "+e._s(e.expandAll?"Collapse all sections":"Expand all sections")+"\n    ")])]),e._v(" "),t("div",[t("CourseDescription",{attrs:{title:"Get the Most from this course",time:"10 lectures • 49min",expanded:e.expandAll}}),e._v(" "),t("CourseDescription",{attrs:{title:"PMBOK Guide, Sixth Edition",time:"12 lectures • 1hr 15min",expanded:e.expandAll}}),e._v(" "),t("CourseDescription",{attrs:{title:"Define Project Management Foundations",time:"8 lectures • 40min",expanded:e.expandAll}}),e._v(" "),t("CourseDescription",{attrs:{title:"Related Areas of Project Management",time:"15 lectures • 1hr 30min",expanded:e.expandAll}}),e._v(" "),t("CourseDescription",{attrs:{title:"Project Management Components",time:"7 lectures • 35min",expanded:e.expandAll}}),e._v(" "),t("CourseDescription",{attrs:{title:"Project Environments",time:"9 lectures • 50min",expanded:e.expandAll}}),e._v(" "),t("CourseDescription",{attrs:{title:"Role of the Project Manager",time:"10 lectures • 55min",expanded:e.expandAll}}),e._v(" "),t("CourseDescription",{attrs:{title:"Implementing Project Integration Management",time:"11 lectures • 1hr 5min",expanded:e.expandAll}}),e._v(" "),t("CourseDescription",{attrs:{title:"Managing the Project Scope",time:"13 lectures • 1hr 10min",expanded:e.expandAll}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CourseDescription:n(325).default})}}]);