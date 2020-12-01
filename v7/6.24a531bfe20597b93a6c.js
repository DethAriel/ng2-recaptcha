(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{gq7q:function(s,n,a){"use strict";a.r(n);var o=a("CcnG"),l=a("FID4"),e=function(){function s(){}return s.prototype.resolved=function(s){console.log("Resolved captcha with response: "+s)},s.prototype.onError=function(s){console.log("reCAPTCHA error encountered; details:",s)},s}(),p={page:{feature:"basic",title:"Basic Example",content:{component:'<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;recaptcha-demo&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;./basic-demo.component.html&#x27;</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BasicDemoComponent {\n  <span class="hljs-keyword">public</span> resolved(captchaResponse: <span class="hljs-built_in">string</span>) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Resolved captcha with response: <span class="hljs-subst">${captchaResponse}</span>`</span>);\n  }\n\n  <span class="hljs-keyword">public</span> onError(errorDetails: <span class="hljs-built_in">any</span>[]) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`reCAPTCHA error encountered; details:`</span>, errorDetails);\n  }\n}\n',html:'<span class="hljs-tag">&lt;<span class="hljs-name">re-captcha</span>\n  (<span class="hljs-attr">resolved</span>)=<span class="hljs-string">&quot;resolved($event)&quot;</span>\n  (<span class="hljs-attr">error</span>)=<span class="hljs-string">&quot;onError($event)&quot;</span>\n  <span class="hljs-attr">errorMode</span>=<span class="hljs-string">&quot;handled&quot;</span>\n  <span class="hljs-attr">siteKey</span>=<span class="hljs-string">&quot;6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">re-captcha</span>&gt;</span>\n',module:{"":'<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;\n<span class="hljs-keyword">import</span> { Routes, RouterModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { RecaptchaModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ng-recaptcha&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { BasicDemoComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./basic-demo.component&#x27;</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./basic-demo.data&#x27;</span>;\n\n<span class="hljs-keyword">const</span> routes: Routes = [\n  {\n    path: <span class="hljs-string">&#x27;&#x27;</span>,\n    component: BasicDemoComponent,\n    data: { page: settings },\n  },\n];\n\n<span class="hljs-meta">@NgModule</span>({\n  declarations: [BasicDemoComponent],\n  imports: [\n    RouterModule.forChild(routes),\n    RecaptchaModule,\n    CommonModule,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule { }\n',fr:'<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;\n<span class="hljs-keyword">import</span> { Routes, RouterModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { RECAPTCHA_LANGUAGE, RecaptchaModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ng-recaptcha&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { BasicDemoComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./basic-demo.component&#x27;</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./basic-demo.data&#x27;</span>;\n\n<span class="hljs-keyword">const</span> routes: Routes = [\n  {\n    path: <span class="hljs-string">&#x27;&#x27;</span>,\n    component: BasicDemoComponent,\n    data: { page: settings },\n  },\n];\n\n<span class="hljs-meta">@NgModule</span>({\n  declarations: [BasicDemoComponent],\n  imports: [\n    RouterModule.forChild(routes),\n    RecaptchaModule,\n    CommonModule,\n  ],\n  providers: [\n    { provide: RECAPTCHA_LANGUAGE, useValue: <span class="hljs-string">&#x27;fr&#x27;</span> },\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule { }\n',de:'<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;\n<span class="hljs-keyword">import</span> { Routes, RouterModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { RECAPTCHA_LANGUAGE, RecaptchaModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ng-recaptcha&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { BasicDemoComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./basic-demo.component&#x27;</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./basic-demo.data&#x27;</span>;\n\n<span class="hljs-keyword">const</span> routes: Routes = [\n  {\n    path: <span class="hljs-string">&#x27;&#x27;</span>,\n    component: BasicDemoComponent,\n    data: { page: settings },\n  },\n];\n\n<span class="hljs-meta">@NgModule</span>({\n  declarations: [BasicDemoComponent],\n  imports: [\n    RouterModule.forChild(routes),\n    RecaptchaModule,\n    CommonModule,\n  ],\n  providers: [\n    { provide: RECAPTCHA_LANGUAGE, useValue: <span class="hljs-string">&#x27;de&#x27;</span> },\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule { }\n'}}}},r=Object(l.a)(),t=function(){},c=a("pMnS"),d=a("WZG6"),i=a("z0F3"),h=o.Db({encapsulation:2,styles:[],data:{}});function u(s){return o.Vb(0,[(s()(),o.Fb(0,0,null,null,1,"re-captcha",[["errorMode","handled"],["siteKey","6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU"]],[[1,"id",0]],[[null,"resolved"],[null,"error"]],(function(s,n,a){var o=!0,l=s.component;"resolved"===n&&(o=!1!==l.resolved(a)&&o);"error"===n&&(o=!1!==l.onError(a)&&o);return o}),d.b,d.a)),o.Eb(1,4374528,null,0,i.g,[o.q,i.i,o.J,[2,i.d]],{siteKey:[0,"siteKey"],errorMode:[1,"errorMode"]},{resolved:"resolved",error:"error"})],(function(s,n){s(n,1,0,"6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU","handled")}),(function(s,n){s(n,0,0,o.Ob(n,1).id)}))}var m=o.Bb("recaptcha-demo",e,(function(s){return o.Vb(0,[(s()(),o.Fb(0,0,null,null,1,"recaptcha-demo",[],null,null,null,u,h)),o.Eb(1,49152,null,0,e,[],null,null)],null,null)}),{},{},[]),j=a("Ip0R"),g=a("ZYCi");a.d(n,"DemoModuleNgFactory",(function(){return y}));var y=o.Cb(t,[],(function(s){return o.Lb([o.Mb(512,o.m,o.rb,[[8,[c.a,m]],[3,o.m],o.H]),o.Mb(4608,i.i,i.i,[o.M,[2,i.b],[2,i.a],[2,i.c],[2,i.e]]),o.Mb(4608,j.l,j.k,[o.D,[2,j.s]]),o.Mb(1073742336,g.n,g.n,[[2,g.t],[2,g.l]]),o.Mb(1073742336,i.m,i.m,[]),o.Mb(1073742336,i.j,i.j,[]),o.Mb(1073742336,j.b,j.b,[]),o.Mb(1073742336,t,t,[]),o.Mb(256,i.b,r,[]),o.Mb(256,i.e,"6LeGCZAUAAAAADuhzcuvSB-lYDsxJBl9HUWtZkUM",[]),o.Mb(1024,g.i,(function(){return[[{path:"",component:e,data:p}]]}),[])])}))}}]);