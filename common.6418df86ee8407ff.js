"use strict";(self.webpackChunktemp=self.webpackChunktemp||[]).push([[592],{5546:(E,h,o)=>{o.d(h,{p:()=>f});var s=o(433),t=o(4650),u=o(7092),g=o(362),r=o(2013),_=o(2542),e=o(6895);function d(i,l){1&i&&(t.TgZ(0,"div",14),t._uU(1,"This is required"),t.qZA())}const m=function(i,l){return{"is-invalid":i,"is-valid":l}};let f=(()=>{class i{constructor(n,a,c,p,v){this.activeModal=n,this.fb=a,this.adminService=c,this.notificationService=p,this.authService=v,this.user=void 0}ngOnInit(){this.userData=JSON.parse(this.authService.getAuthFromLocalStorage()),console.log("this.user",this.user),this.initForm()}get f(){return this.form.controls}initForm(){this.form=this.fb.group({password:[null,[s.kI.required]]})}submit(){this.form.markAllAsTouched(),this.form.valid&&this.adminService.changePassword({Employee_ID:this.user.Employee_ID?this?.user?.Employee_ID:this.userData.id,Password:this.f.password.value}).subscribe({next:c=>{this.notificationService.showSuccess(c.message),this.activeModal.close(!0)}})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(u.Kz),t.Y36(s.qu),t.Y36(g.l),t.Y36(r.g),t.Y36(_.e))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-change-password"]],inputs:{user:"user"},decls:18,vars:6,consts:[["novalidate","novalidate",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["aria-hidden","true","aria-label","Close",1,"close","cursor-pointer",3,"click"],[1,"material-icons","text-lg","position-relative"],[1,"modal-body"],[1,"row"],[1,"col-12"],[1,"input-outline","my-1"],[1,"form-label"],["type","password","placeholder","Password","formControlName","password",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"modal-footer","justify-content-start"],["type","submit",1,"btn","btn-gradient-dark","p-1","px-4"],[1,"invalid-feedback"]],template:function(n,a){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return a.submit()}),t.TgZ(1,"div",1)(2,"h4",2),t._uU(3,"Change Password"),t.qZA(),t.TgZ(4,"span",3),t.NdJ("click",function(){return a.activeModal.close(!1)}),t.TgZ(5,"i",4),t._uU(6,"close"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"label",9),t._uU(12,"Password"),t.qZA(),t._UZ(13,"input",10),t.YNc(14,d,2,0,"div",11),t.qZA()()()(),t.TgZ(15,"div",12)(16,"button",13),t._uU(17,"Submit"),t.qZA()()()),2&n&&(t.Q6J("formGroup",a.form),t.xp6(13),t.Q6J("ngClass",t.WLB(3,m,a.form.controls.password.invalid,a.form.controls.password.valid)),t.xp6(1),t.Q6J("ngIf",a.form.controls.password.hasError("required")&&(a.form.controls.password.dirty||a.form.controls.password.touched)))},dependencies:[e.mk,e.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]}),i})()},3391:(E,h,o)=>{o.d(h,{x:()=>l});var s=o(433),t=o(7206),g=o(2340),r=o(4650),_=o(7092),e=o(362),d=o(2013),m=o(6895);function f(n,a){1&n&&(r.TgZ(0,"div",14),r._uU(1,"This is required"),r.qZA())}const i=function(n,a){return{"is-invalid":n,"is-valid":a}};let l=(()=>{class n{constructor(c,p,v,C){this.activeModal=c,this.fb=p,this.adminService=v,this.notificationService=C}ngOnInit(){this.initForm()}get f(){return this.form.controls}initForm(){this.form=this.fb.group({password:[null,[s.kI.required]]})}submit(){if(this.form.markAllAsTouched(),this.form.valid){var c=t.AES.encrypt(JSON.stringify(this.f.password.value),g.N.encryptionKey).toString();this.adminService.changeSelfPassword({password:c}).subscribe({next:v=>{this.notificationService.showSuccess(v.message),this.activeModal.close(!0)}})}}}return n.\u0275fac=function(c){return new(c||n)(r.Y36(_.Kz),r.Y36(s.qu),r.Y36(e.l),r.Y36(d.g))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-change-self-password"]],decls:18,vars:6,consts:[["novalidate","novalidate",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["aria-hidden","true","aria-label","Close",1,"close","cursor-pointer",3,"click"],[1,"material-icons","text-lg","position-relative"],[1,"modal-body"],[1,"row"],[1,"col-12"],[1,"input-outline","my-1"],[1,"form-label"],["type","password","placeholder","Password","formControlName","password",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"modal-footer","justify-content-start"],["type","submit",1,"btn","bg-gradient-primary"],[1,"invalid-feedback"]],template:function(c,p){1&c&&(r.TgZ(0,"form",0),r.NdJ("ngSubmit",function(){return p.submit()}),r.TgZ(1,"div",1)(2,"h4",2),r._uU(3,"Change Password"),r.qZA(),r.TgZ(4,"span",3),r.NdJ("click",function(){return p.activeModal.close(!1)}),r.TgZ(5,"i",4),r._uU(6,"close"),r.qZA()()(),r.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"label",9),r._uU(12,"New Password"),r.qZA(),r._UZ(13,"input",10),r.YNc(14,f,2,0,"div",11),r.qZA()()()(),r.TgZ(15,"div",12)(16,"button",13),r._uU(17,"Submit"),r.qZA()()()),2&c&&(r.Q6J("formGroup",p.form),r.xp6(13),r.Q6J("ngClass",r.WLB(3,i,p.form.controls.password.invalid,p.form.controls.password.valid)),r.xp6(1),r.Q6J("ngIf",p.form.controls.password.hasError("required")&&(p.form.controls.password.dirty||p.form.controls.password.touched)))},dependencies:[m.mk,m.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]}),n})()},2669:(E,h,o)=>{o.d(h,{K:()=>d});var s=o(574),t=o(4650),u=o(7092),g=o(2013),r=o(3071),_=o(6895);function e(m,f){if(1&m){const i=t.EpF();t.TgZ(0,"div",10)(1,"button",11),t.NdJ("click",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.submit())}),t._uU(2,"Submit"),t.qZA()()}}let d=(()=>{class m{constructor(i,l,n){this.activeModal=i,this.notificationService=l,this._userService=n,this.data=[],this.wopts={bookType:"xlsx",type:"array"},this.fileName="SheetJS.xlsx",this.getAllRole()}onFileChange(i){const l=i.target;if(1!==l.files.length)return void this.notificationService.showError("Select only single file.");const n=new FileReader;n.onload=a=>{const p=s.ij(a.target.result,{type:"binary"}),C=p.Sheets[p.SheetNames[0]];if(this.validateExcelColumns(C)){let y=s.P6.sheet_to_json(C,{header:1});this.validateExcelRows(y)}},n.readAsBinaryString(l.files[0])}validateExcelColumns(i){for(let n in i)if(1==new RegExp("^(\\w)(1){1}$").test(n)){var l=Object.keys(i).indexOf(n);if(!(1==l&&"Sr.No"==i[n].v||2==l&&"EmployeeCode"==i[n].v||3==l&&"Name"==i[n].v||4==l&&"Role"==i[n].v||5==l&&"Email"==i[n].v||6==l&&"Phone No"==i[n].v))return this.notificationService.showError("Excel should have only 6 columns (Sr.No,EmployeeCode,Name,Role,Email,Phone No)"),!1}return!0}validateExcelRows(i){this.data=i.slice(1),this.finalData=[];for(let n=0;n<i.length;n++)console.log("data[i][2]=",i[n][3]),"Role"!=i[n][3]&&(i[n][3]=this.roleList.find(a=>a.Name==i[n][3]).ID);return!0}getAllRole(){this._userService.getAllRole({}).subscribe(i=>{this.roleList=i.data})}submit(){this._userService.importUsers({data:this.data}).subscribe({next:l=>{this.notificationService.showSuccess(l.message),this.activeModal.dismiss()}})}downloadSampleFile(){window.open("/assets/User Excel.xlsx","_blank")}}return m.\u0275fac=function(i){return new(i||m)(t.Y36(u.Kz),t.Y36(g.g),t.Y36(r.K))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-import-user-excel"]],decls:16,vars:1,consts:[[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["aria-hidden","true","aria-label","Close",1,"close","cursor-pointer",3,"click"],[1,"material-icons","text-lg","position-relative"],[1,"modal-body"],[1,"row"],[1,"col-12","col-lg-6"],["type","file","multiple","false",3,"change"],["href","javascript:;",3,"click"],["class","modal-footer justify-content-start",4,"ngIf"],[1,"modal-footer","justify-content-start"],["type","button",1,"btn","btn-gradient-dark","p-1","px-4",3,"click"]],template:function(i,l){1&i&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Import Excel"),t.qZA(),t.TgZ(3,"span",2),t.NdJ("click",function(){return l.activeModal.close({flag:!1,data:[]})}),t.TgZ(4,"i",3),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"input",7),t.NdJ("change",function(a){return l.onFileChange(a)}),t.qZA(),t._UZ(10,"br"),t._uU(11,"["),t.TgZ(12,"a",8),t.NdJ("click",function(){return l.downloadSampleFile()}),t._uU(13,"Download sample file"),t.qZA(),t._uU(14,"] "),t.qZA()()(),t.YNc(15,e,3,0,"div",9)),2&i&&(t.xp6(15),t.Q6J("ngIf",l.data.length>0))},dependencies:[_.O5]}),m})()},362:(E,h,o)=>{o.d(h,{l:()=>r});var s=o(2340),t=o(4650),u=o(529),g=o(6571);let r=(()=>{class _{constructor(d,m){this.http=d,this.loggingService=m}addUser(d){return this.http.post(`${s.N.URL}/employee/add`,d)}updateUser(d){return this.http.post(`${s.N.URL}/employee/update`,d)}changePassword(d){return this.http.post(`${s.N.URL}/employee/update-password`,d)}changeSelfPassword(d){return this.http.post(`${s.N.URL}/auth/change-password`,d)}getAllUsers(d){return this.http.post(`${s.N.URL}/employee/get-all`,d)}}return _.\u0275fac=function(d){return new(d||_)(t.LFG(u.eN),t.LFG(g.e))},_.\u0275prov=t.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},3741:(E,h,o)=>{o.d(h,{u:()=>i});var s=o(2340),t=o(4650),u=o(7092),g=o(8784),r=o(8423),_=o(6895),e=o(433);function d(l,n){1&l&&(t.TgZ(0,"tr")(1,"td",15),t._uU(2,"No User available"),t.qZA()()),2&l&&(t.xp6(1),t.uIk("colspan",4))}function m(l,n){if(1&l&&(t.TgZ(0,"tr")(1,"td",16)(2,"span",17),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"a",18),t._uU(6),t.qZA()(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&l){const a=n.$implicit,c=n.index,p=t.oxw(2);t.xp6(3),t.Oqu(c+1),t.xp6(2),t.Q6J("href",p.assetURL+a.Path,t.LSH),t.xp6(1),t.Oqu(a.Name),t.xp6(2),t.Oqu(t.xi3(9,4,a.Created_At,p.dateFormat))}}function f(l,n){if(1&l&&(t.TgZ(0,"tbody"),t.YNc(1,d,3,1,"tr",11),t.YNc(2,m,10,7,"tr",14),t.qZA()),2&l){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.historyFiles&&0==(null==a.historyFiles?null:a.historyFiles.length)),t.xp6(1),t.Q6J("ngForOf",a.historyFiles)}}let i=(()=>{class l{constructor(a,c,p){this.activeModal=a,this._contestService=c,this._spinnerService=p,this.statusList=[],this.isRequest=!1,this.dateFormat=s.N.dateFormat,this.assetURL=s.N.UPLOADS_URL,this.files=[]}ngOnInit(){console.log("Historical==========",this.historyFiles),this.getContestDocumentHistory(),this.historyFiles&&this.historyFiles.sort((a,c)=>{const p=new Date(a.Created_At),v=new Date(c.Created_At);return isNaN(p)||isNaN(v)?0:v-p})}get f(){return this.form.controls}getContestDocumentHistory(){this._spinnerService.show(),this._contestService.getContestDocumentHistory({Contest_ID:this.item.Contest_ID}).subscribe({next:c=>{this._spinnerService.hide(),this.historyFiles=c.data},error:c=>{this._spinnerService.hide()}})}}return l.\u0275fac=function(a){return new(a||l)(t.Y36(u.Kz),t.Y36(g.c),t.Y36(r.t2))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-view-contest-history"]],inputs:{item:"item"},decls:23,vars:1,consts:[["novalidate","novalidate",1,"form","w-100"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["aria-hidden","true","aria-label","Close",1,"close","cursor-pointer",3,"click"],[1,"material-icons","text-lg","position-relative"],[1,"modal-body"],[1,"row"],[1,"table-responsive"],[1,"table","table-bordered","align-items-center","mb-0"],[1,"text-uppercase","text-secondary","text-xs","font-weight-bolder","ps-3","pe-2",2,"width","75px"],[1,"text-uppercase","text-secondary","text-xs","font-weight-bolder","ps-2"],[4,"ngIf"],[1,"modal-footer"],["type","submit",1,"btn","btn-gradient-light","py-2",3,"click"],[4,"ngFor","ngForOf"],[1,"text-center"],[1,"ps-3"],[1,"text-sm","text-dark","font-weight-bolder","opacity-7"],[3,"href"]],template:function(a,c){1&a&&(t.TgZ(0,"form",0)(1,"div",1)(2,"h5",2),t._uU(3,"History"),t.qZA(),t.TgZ(4,"span",3),t.NdJ("click",function(){return c.activeModal.close(!1)}),t.TgZ(5,"i",4),t._uU(6,"close"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"table",8)(11,"thead")(12,"tr")(13,"th",9),t._uU(14," Sr.\xa0No. "),t.qZA(),t.TgZ(15,"th",10),t._uU(16," File Name "),t.qZA(),t.TgZ(17,"th",10),t._uU(18," Date "),t.qZA()()(),t.YNc(19,f,3,2,"tbody",11),t.qZA()()()(),t.TgZ(20,"div",12)(21,"button",13),t.NdJ("click",function(){return c.activeModal.close(!1)}),t._uU(22," Cancel "),t.qZA()()()),2&a&&(t.xp6(19),t.Q6J("ngIf",c.historyFiles))},dependencies:[_.sg,_.O5,e._Y,e.JL,e.F,_.uU],styles:[".label-data1[_ngcontent-%COMP%]{font-size:14px;color:#080707;font-weight:500}.label-view1[_ngcontent-%COMP%]{font-size:13px;color:gray}.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #d6dee7;padding:2px;font-size:13px}"]}),l})()},6196:(E,h,o)=>{o.d(h,{J:()=>g});var s=o(2340),t=o(4650),u=o(529);let g=(()=>{class r{constructor(e){this.http=e}getAllCompanyDropdownData(e){return this.http.post(`${s.N.URL}/master/Dropdown/get-all-company`,e)}getAllActiveCompanyDropdownData(e){return this.http.post(`${s.N.URL}/master/Dropdown/get-all-active-company`,e)}getAllCompanyData(e){return this.http.post(`${s.N.URL}/master/Company/get-all`,e)}addCompanyData(e){return this.http.post(`${s.N.URL}/master/Company/add`,e)}updateCompanyData(e){return this.http.post(`${s.N.URL}/master/Company/update`,e)}deleteCompanyData(e){return this.http.post(`${s.N.URL}/master/Company/delete`,e)}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(u.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},2410:(E,h,o)=>{o.d(h,{$:()=>r});var s=o(2340),t=o(7206),g=o(4650);let r=(()=>{class _{constructor(){}encrypt(d){try{return t.AES.encrypt(JSON.stringify(d),s.N.encryptionKey).toString()}catch(m){throw console.error("Encryption error:",m),m}}decrypt(d){try{const m=t.AES.decrypt(d,s.N.encryptionKey);return JSON.parse(m.toString(t.enc.Utf8))}catch(m){return console.error("Decryption error:",m),null}}}return _.\u0275fac=function(d){return new(d||_)},_.\u0275prov=g.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},3216:(E,h,o)=>{o.d(h,{B:()=>t});var s=o(4650);let t=(()=>{class u{constructor(){}}return u.\u0275fac=function(r){return new(r||u)},u.\u0275prov=s.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},3071:(E,h,o)=>{o.d(h,{K:()=>g});var s=o(2340),t=o(4650),u=o(529);let g=(()=>{class r{constructor(e){this.http=e}getUserRolesById(e){return this.http.post(`${s.N.URL}/master/Dropdown/get-all-roles`,e)}getAllUserDropdownDataForSuperAdmin(e){return this.http.post(`${s.N.URL}/master/Dropdown/get-all-employee-superadmin`,e)}getAllUserDropdownDataForAdmin(e){return this.http.post(`${s.N.URL}/master/Dropdown/get-all-employee-admin`,e)}getAllProcessOwnerDropdownData(e){return this.http.post(`${s.N.URL}/master/Dropdown/get-all-processowner`,e)}getAllLineManagerDropdownData(e){return this.http.post(`${s.N.URL}/master/Dropdown/get-all-linemanager`,e)}getAllUser(e){return this.http.post(`${s.N.URL}/employee/get-all`,e)}getAllUserDataForSuperAdmin(e){return this.http.post(`${s.N.URL}/master/employee/get-all`,e)}getAllUserDataForAdmin(e){return this.http.post(`${s.N.URL}/master/User/get-all-Admin`,e)}addUserData(e){return this.http.post(`${s.N.URL}/employee/add`,e)}updateUserData(e){return this.http.post(`${s.N.URL}/employee/update`,e)}getAllRole(e){return this.http.post(`${s.N.URL}/employee/get-all-roles`,e)}deleteUserData(e){return this.http.post(`${s.N.URL}/employee/delete`,e)}importUsers(e){return this.http.post(`${s.N.URL}/employee/import-users`,e)}getEmpDetaislID(e){return this.http.post(`${s.N.URL}/employee/get-by-id`,e)}getEmpDetaisAttachment(e){return this.http.post(`${s.N.URL}/employee/upload-profile-pic`,e)}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(u.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);