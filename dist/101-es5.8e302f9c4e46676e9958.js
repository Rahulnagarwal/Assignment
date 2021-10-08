!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(self.webpackChunkdoctors_portal=self.webpackChunkdoctors_portal||[]).push([[101],{101:function(e,i,r){"use strict";r.r(i),r.d(i,{PatientsModule:function(){return N}});var a=r(9635),o=r(9393),c=r(7368),s=r(9960),g=r(6003),d=r(1462),l=function(){var e=function(){function e(){t(this,e),this.model={filter:null},this.changed=new c.vpe}return n(e,[{key:"filterChanged",value:function(t){t.preventDefault(),this.changed.emit(this.model.filter),console.log("filterchanged emit",this.model.filter)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["cm-filter-textbox"]],outputs:{changed:"changed"},decls:3,vars:1,consts:[["type","text","name","filter",3,"ngModel","ngModelChange","keyup"]],template:function(t,e){1&t&&(c.TgZ(0,"form"),c._uU(1," Filter: "),c.TgZ(2,"input",0),c.NdJ("ngModelChange",function(t){return e.model.filter=t})("keyup",function(t){return e.filterChanged(t)}),c.qZA(),c.qZA()),2&t&&(c.xp6(2),c.Q6J("ngModel",e.model.filter))},directives:[d._Y,d.JL,d.F,d.Fj,d.JJ,d.On],styles:["cm-filter-textbox[_ngcontent-%COMP%]{margin-top:15px}"]}),e}(),u=r(3241),p=r(1116),f=r(8927),h=function(t){return["/patients",t,"details"]},Z=function(t){return["/patients",t,"edit"]};function v(t,e){if(1&t&&(c.TgZ(0,"div",4),c.TgZ(1,"div",5),c.TgZ(2,"div",6),c.TgZ(3,"a",7),c._uU(4),c.ALo(5,"capitalize"),c.ALo(6,"capitalize"),c.qZA(),c.TgZ(7,"a",8),c._UZ(8,"i",9),c.qZA(),c.qZA(),c.TgZ(9,"div",10),c.TgZ(10,"div",11),c.TgZ(11,"div",12),c.TgZ(12,"a",13),c._UZ(13,"img",14),c.ALo(14,"lowercase"),c.qZA(),c.qZA(),c.TgZ(15,"div",15),c.TgZ(16,"div",16),c._uU(17),c._UZ(18,"br"),c._uU(19),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t){var n=e.$implicit;c.xp6(3),c.Q6J("routerLink",c.VKq(13,h,n.patientID)),c.xp6(1),c.AsE(" ",c.lcZ(5,7,n.firstName)," ",c.lcZ(6,9,n.lastName)," "),c.xp6(3),c.Q6J("routerLink",c.VKq(15,Z,n.patientID)),c.xp6(6),c.MGl("src","assets/images/",c.lcZ(14,11,n.gender),".png",c.LSH),c.xp6(4),c.hij(" Age: ",n.age,""),c.xp6(2),c.hij(" Add: ",n.address," ")}}function m(t,e){1&t&&(c.TgZ(0,"div"),c._uU(1," No Records Found "),c.qZA())}var y=function(){var e=function(){function e(n){t(this,e),this.trackbyService=n,this.patients=[]}return n(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Y36(u.v))},e.\u0275cmp=c.Xpm({type:e,selectors:[["cm-patients-card"]],inputs:{patients:"patients"},decls:4,vars:3,consts:[[1,"container"],[1,"row","card-container"],["class","col-sm-6 col-md-4 col-lg-3",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"col-sm-6","col-md-4","col-lg-3"],[1,"card"],[1,"card-header"],[1,"white",3,"routerLink"],[3,"routerLink"],["title","Edit",1,"pull-right","glyphicon","glyphicon-edit","edit-icon","white"],[1,"card-body"],[1,"clearfix",2,"margin-top","10px"],[1,"pull-left","card-body-left"],["href","#",1,"white"],[1,"card-image",3,"src"],[1,"pull-left","card-body-right"],[1,"card-body-content",2,"width","120px","overflow","hidden"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.YNc(2,v,20,17,"div",2),c.YNc(3,m,2,0,"div",3),c.qZA(),c.qZA()),2&t&&(c.xp6(2),c.Q6J("ngForOf",e.patients)("ngForTrackBy",e.trackbyService.patient),c.xp6(1),c.Q6J("ngIf",!e.patients.length))},directives:[p.sg,p.O5,o.yS],pipes:[f.e,p.i8],styles:[".card-container[_ngcontent-%COMP%]{width:85%}.card[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #d4d4d4;height:120px;margin-bottom:20px;position:relative}.card-header[_ngcontent-%COMP%]{background-color:#f402e8;font-size:14pt;color:#fff;padding:5px;width:100%}.card-close[_ngcontent-%COMP%]{color:#fff;font-weight:700;margin-right:5px}.card-body[_ngcontent-%COMP%]{padding-left:5px}.card-body-left[_ngcontent-%COMP%]{margin-top:-5px}.card-body-right[_ngcontent-%COMP%]{margin-left:20px;margin-top:2px}.card-body-content[_ngcontent-%COMP%]{width:150px;height:60px}.card-image[_ngcontent-%COMP%]{height:50px;width:50px;margin-top:10px}.white[_ngcontent-%COMP%], .white[_ngcontent-%COMP%]:hover{color:#fff}"],changeDetection:0}),e}(),A=r(2084),P=function(){var e=function(){function e(){t(this,e),this.sorted=new c.vpe}return n(e,[{key:"sortBy",set:function(t){this.sortProperty=t}},{key:"onClick",value:function(){event.preventDefault(),this.sorted.next(this.sortProperty)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=c.lG2({type:e,selectors:[["","cmSortBy",""]],hostBindings:function(t,e){1&t&&c.NdJ("click",function(){return e.onClick()})},inputs:{sortBy:["cmSortBy","sortBy"]},outputs:{sorted:"sorted"}}),e}(),_=function(){var e=function(){function e(){t(this,e)}return n(e,[{key:"transform",value:function(t){return t?t.trim():""}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=c.Yjl({name:"trim",type:e,pure:!0}),e}(),T=function(t){return["/patients",t,"details"]};function q(t,e){if(1&t&&(c.TgZ(0,"tr"),c.TgZ(1,"td"),c._UZ(2,"img",12),c.ALo(3,"lowercase"),c.qZA(),c.TgZ(4,"td"),c.TgZ(5,"a",13),c._uU(6),c.ALo(7,"capitalize"),c.qZA(),c.qZA(),c.TgZ(8,"td"),c._uU(9),c.ALo(10,"capitalize"),c.qZA(),c.TgZ(11,"td"),c._uU(12),c.qZA(),c.TgZ(13,"td"),c._uU(14),c.ALo(15,"trim"),c.qZA(),c.TgZ(16,"td"),c._uU(17),c.ALo(18,"trim"),c.qZA(),c.qZA()),2&t){var n=e.$implicit;c.xp6(2),c.MGl("src","assets/images/",c.lcZ(3,7,n.gender),".png",c.LSH),c.xp6(3),c.Q6J("routerLink",c.VKq(17,T,n.patientID)),c.xp6(1),c.Oqu(c.lcZ(7,9,n.firstName)),c.xp6(3),c.Oqu(c.lcZ(10,11,n.lastName)),c.xp6(3),c.Oqu(n.age),c.xp6(2),c.Oqu(c.lcZ(15,13,n.gender)),c.xp6(3),c.Oqu(c.lcZ(18,15,n.address))}}function C(t,e){1&t&&(c.TgZ(0,"tr"),c.TgZ(1,"td"),c._uU(2,"\xa0"),c.qZA(),c.TgZ(3,"td",14),c._uU(4,"No Records Found"),c.qZA(),c.qZA())}var x=function(){var e=function(){function e(n,i){t(this,e),this.sorterService=n,this.trackbyService=i,this.patients=[]}return n(e,[{key:"ngOnInit",value:function(){}},{key:"sort",value:function(t){this.patients=this.sorterService.sort(this.patients,t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Y36(A.X),c.Y36(u.v))},e.\u0275cmp=c.Xpm({type:e,selectors:[["cm-patients-grid"]],inputs:{patients:"patients"},decls:24,vars:3,consts:[[1,"container"],[1,"row","grid-container"],[1,"col-md-10"],[1,"table"],[1,"table","table-striped","table-hover"],["cmSortBy","firstName",3,"sorted"],["cmSortBy","lastName",3,"sorted"],["cmSortBy","age",3,"sorted"],["cmSortBy","gender",3,"sorted"],["cmSortBy","address",3,"sorted"],[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],["alt","Patient Image",1,"grid-image",3,"src"],[3,"routerLink"],["colspan","7"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"table",4),c.TgZ(5,"thead"),c.TgZ(6,"tr"),c.TgZ(7,"th"),c._uU(8,"\xa0"),c.qZA(),c.TgZ(9,"th",5),c.NdJ("sorted",function(t){return e.sort(t)}),c._uU(10,"First Name"),c.qZA(),c.TgZ(11,"th",6),c.NdJ("sorted",function(t){return e.sort(t)}),c._uU(12,"Last Name"),c.qZA(),c.TgZ(13,"th",7),c.NdJ("sorted",function(t){return e.sort(t)}),c._uU(14,"Age"),c.qZA(),c.TgZ(15,"th",8),c.NdJ("sorted",function(t){return e.sort(t)}),c._uU(16,"Gender"),c.qZA(),c.TgZ(17,"th",9),c.NdJ("sorted",function(t){return e.sort(t)}),c._uU(18,"Address"),c.qZA(),c.TgZ(19,"th"),c._uU(20,"\xa0"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(21,"tbody"),c.YNc(22,q,19,19,"tr",10),c.YNc(23,C,5,0,"tr",11),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(22),c.Q6J("ngForOf",e.patients)("ngForTrackBy",e.trackbyService.patient),c.xp6(1),c.Q6J("ngIf",!e.patients.length))},directives:[P,p.sg,p.O5,o.yS],pipes:[p.i8,f.e,_],styles:[".grid-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:0}.grid-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle}.grid-image[_ngcontent-%COMP%]{height:50px;width:50px;margin-top:5px}"],changeDetection:0}),e}();function M(t,e){if(1&t){var n=c.EpF();c.TgZ(0,"li",2),c.NdJ("click",function(){var t=c.CHM(n).$implicit;return c.oxw().changePage(t)}),c.TgZ(1,"a"),c._uU(2),c.qZA(),c.qZA()}if(2&t){var i=e.$implicit,r=c.oxw();c.ekj("active",r.currentPage===i),c.xp6(2),c.hij(" ",i," ")}}var k,b=function(){var e=function(){function e(){t(this,e),this.pages=[],this.currentPage=1,this.isVisible=!1,this.previousEnabled=!1,this.nextEnabled=!0,this.pageChanged=new c.vpe}return n(e,[{key:"pageSize",get:function(){return this.pagerPageSize},set:function(t){this.pagerPageSize=t,this.update()}},{key:"totalItems",get:function(){return this.pagerTotalItems},set:function(t){this.pagerTotalItems=t,this.update()}},{key:"ngOnInit",value:function(){}},{key:"update",value:function(){if(this.pagerTotalItems&&this.pagerPageSize){if(this.totalPages=Math.ceil(this.pagerTotalItems/this.pageSize),this.isVisible=!0,this.totalItems>=this.pageSize)for(var t=1;t<this.totalPages+1;t++)this.pages.push(t)}else this.isVisible=!1}},{key:"previousNext",value:function(t){var e=this.currentPage;-1===t?e>1&&e--:e<this.totalPages&&e++,this.changePage(e)}},{key:"changePage",value:function(t){event&&event.preventDefault(),this.currentPage!==t&&(this.currentPage=t,this.previousEnabled=this.currentPage>1,this.nextEnabled=this.currentPage<this.totalPages,this.pageChanged.emit(t))}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["cm-pagination"]],inputs:{pageSize:"pageSize",totalItems:"totalItems"},outputs:{pageChanged:"pageChanged"},decls:11,vars:6,consts:[[3,"hidden"],[1,"pagination"],[3,"click"],["aria-label","Previous"],["aria-hidden","true"],[3,"active","click",4,"ngFor","ngForOf"],["aria-label","Next"]],template:function(t,e){1&t&&(c.TgZ(0,"nav",0),c.TgZ(1,"ul",1),c.TgZ(2,"li",2),c.NdJ("click",function(){return e.previousNext(-1)}),c.TgZ(3,"a",3),c.TgZ(4,"span",4),c._uU(5,"\xab"),c.qZA(),c.qZA(),c.qZA(),c.YNc(6,M,3,3,"li",5),c.TgZ(7,"li",2),c.NdJ("click",function(){return e.previousNext(1)}),c.TgZ(8,"a",6),c.TgZ(9,"span",4),c._uU(10,"\xbb"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.Q6J("hidden",!e.isVisible),c.xp6(2),c.ekj("disabled",!e.previousEnabled),c.xp6(4),c.Q6J("ngForOf",e.pages),c.xp6(1),c.ekj("disabled",!e.nextEnabled))},directives:[p.sg],styles:[".pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:focus, .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:hover{background-color:#e755e0;border-color:#e755e0}.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}"]}),e}(),O=function(){var e=function(){function e(n,i,r){t(this,e),this.componentFactoryResolver=n,this.dataService=i,this.filterService=r,this.patients=[],this.displayModeEnum=w,this.totalRecords=0,this.pageSize=3,this._filteredPatients=[],this.getPatientsPage(1)}return n(e,[{key:"filteredPatients",get:function(){return this._filteredPatients},set:function(t){this._filteredPatients=t}},{key:"ngOnInit",value:function(){this.title="Patients",this.filterText="Filter Patients:",this.displayMode=w.Card}},{key:"changeDisplayMode",value:function(t){this.displayMode=t}},{key:"pageChanged",value:function(t){this.getPatientsPage(t)}},{key:"getPatientsPage",value:function(t){var e=this;this.dataService.getPatientsPage((t-1)*this.pageSize,this.pageSize).subscribe(function(t){e.patients=e.filteredPatients=t.results,e.totalRecords=t.totalRecords,console.log("Component: Patients:",e.patients),console.log("Component: Count:",e.totalRecords)},function(t){return console.log(t)},function(){return console.log("getPatientsPage() retrieved patients for page: "+t)})}},{key:"filterChanged",value:function(t){t&&this.patients?(t=t.toUpperCase(),this.filteredPatients=this.filterService.filter(this.patients,t,["firstName","lastName","mobile","email","address"])):this.filteredPatients=this.patients}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Y36(c._Vd),c.Y36(s.D),c.Y36(g.i))},e.\u0275cmp=c.Xpm({type:e,selectors:[["cm-patients"]],decls:27,vars:11,consts:[[1,"patients","view","indent"],[1,"container"],[1,"glyphicon","glyphicon-user"],[1,"row"],[1,"col-md-10"],[1,"navbar"],[1,"nav","navbar-nav"],[1,"toolbar-item"],[3,"click"],[1,"glyphicon","glyphicon-th-large"],[1,"glyphicon","glyphicon-align-justify"],["routerLink","/patients/0/edit"],[1,"glyphicon","glyphicon-plus"],[1,"navbar-right",3,"changed"],[3,"patients","hidden"],[3,"totalItems","pageSize","pageChanged"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"header"),c.TgZ(3,"h3"),c._UZ(4,"span",2),c._uU(5),c.qZA(),c.qZA(),c._UZ(6,"br"),c.TgZ(7,"div",3),c.TgZ(8,"div",4),c.TgZ(9,"div",5),c.TgZ(10,"ul",6),c.TgZ(11,"li",7),c.TgZ(12,"a",8),c.NdJ("click",function(){return e.changeDisplayMode(e.displayModeEnum.Card)}),c._UZ(13,"span",9),c._uU(14," Card View "),c.qZA(),c.qZA(),c.TgZ(15,"li",7),c.TgZ(16,"a",8),c.NdJ("click",function(){return e.changeDisplayMode(e.displayModeEnum.Grid)}),c._UZ(17,"span",10),c._uU(18," List View "),c.qZA(),c.qZA(),c.TgZ(19,"li",7),c.TgZ(20,"a",11),c._UZ(21,"span",12),c._uU(22," New Patient "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(23,"cm-filter-textbox",13),c.NdJ("changed",function(t){return e.filterChanged(t)}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(24,"cm-patients-card",14),c._UZ(25,"cm-patients-grid",14),c.TgZ(26,"cm-pagination",15),c.NdJ("pageChanged",function(t){return e.pageChanged(t)}),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(5),c.hij(" ",e.title," "),c.xp6(7),c.ekj("active",e.displayMode===e.displayModeEnum.Card),c.xp6(4),c.ekj("active",e.displayMode===e.displayModeEnum.Grid),c.xp6(8),c.Q6J("patients",e.filteredPatients)("hidden",e.displayMode!==e.displayModeEnum.Card),c.xp6(1),c.Q6J("patients",e.filteredPatients)("hidden",e.displayMode!==e.displayModeEnum.Grid),c.xp6(1),c.Q6J("totalItems",e.totalRecords)("pageSize",e.pageSize))},directives:[o.yS,l,y,x,b],encapsulation:2}),e}(),w=function(t){return t[t.Card=0]="Card",t[t.Grid=1]="Grid",t}({}),S=[{path:"",component:O}],U=function(){var e=function e(){t(this,e)};return e.components=[O,y,x],e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.Bz.forChild(S)],o.Bz]}),e}(),N=((k=function e(){t(this,e)}).\u0275fac=function(t){return new(t||k)},k.\u0275mod=c.oAB({type:k}),k.\u0275inj=c.cJS({imports:[[U,a.m]]}),k)}}])}();