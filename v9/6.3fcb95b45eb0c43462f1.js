(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{UcJ5:function(s,n,a){"use strict";a.r(n),a.d(n,"DemoModule",(function(){return c}));var o=a("Valr"),p=a("DUip"),e=a("+a4R"),l=a("FID4"),r=a("TYT/"),t=[{path:"",component:function(){function s(){}return s.prototype.resolved=function(s){console.log("Resolved captcha with response: "+s)},s.prototype.onError=function(s){console.log("reCAPTCHA error encountered; details:",s)},s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=r.Hb({type:s,selectors:[["recaptcha-demo"]],decls:1,vars:0,consts:[["errorMode","handled","siteKey","6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU",3,"resolved","error"]],template:function(s,n){1&s&&(r.Sb(0,"re-captcha",0),r.ac("resolved",(function(s){return n.resolved(s)}))("error",(function(s){return n.onError(s)})),r.Rb())},directives:[e.e],encapsulation:2}),s}(),data:{page:{feature:"basic",title:"Basic Example",content:{component:'<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;recaptcha-demo&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;./basic-demo.component.html&#x27;</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BasicDemoComponent {\n  <span class="hljs-keyword">public</span> resolved(captchaResponse: <span class="hljs-built_in">string</span>) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Resolved captcha with response: <span class="hljs-subst">${captchaResponse}</span>`</span>);\n  }\n\n  <span class="hljs-keyword">public</span> onError(errorDetails: <span class="hljs-built_in">any</span>[]) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`reCAPTCHA error encountered; details:`</span>, errorDetails);\n  }\n}\n',html:'<span class="hljs-tag">&lt;<span class="hljs-name">re-captcha</span>\n  (<span class="hljs-attr">resolved</span>)=<span class="hljs-string">&quot;resolved($event)&quot;</span>\n  (<span class="hljs-attr">error</span>)=<span class="hljs-string">&quot;onError($event)&quot;</span>\n  <span class="hljs-attr">errorMode</span>=<span class="hljs-string">&quot;handled&quot;</span>\n  <span class="hljs-attr">siteKey</span>=<span class="hljs-string">&quot;6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">re-captcha</span>&gt;</span>\n',module:{"":'<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;\n<span class="hljs-keyword">import</span> { Routes, RouterModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { RecaptchaModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ng-recaptcha&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { BasicDemoComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./basic-demo.component&#x27;</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./basic-demo.data&#x27;</span>;\n\n<span class="hljs-keyword">const</span> routes: Routes = [\n  {\n    path: <span class="hljs-string">&#x27;&#x27;</span>,\n    component: BasicDemoComponent,\n    data: { page: settings },\n  },\n];\n\n<span class="hljs-meta">@NgModule</span>({\n  declarations: [BasicDemoComponent],\n  imports: [\n    RouterModule.forChild(routes),\n    RecaptchaModule,\n    CommonModule,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule { }\n',fr:'<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;\n<span class="hljs-keyword">import</span> { Routes, RouterModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { RECAPTCHA_LANGUAGE, RecaptchaModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ng-recaptcha&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { BasicDemoComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./basic-demo.component&#x27;</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./basic-demo.data&#x27;</span>;\n\n<span class="hljs-keyword">const</span> routes: Routes = [\n  {\n    path: <span class="hljs-string">&#x27;&#x27;</span>,\n    component: BasicDemoComponent,\n    data: { page: settings },\n  },\n];\n\n<span class="hljs-meta">@NgModule</span>({\n  declarations: [BasicDemoComponent],\n  imports: [\n    RouterModule.forChild(routes),\n    RecaptchaModule,\n    CommonModule,\n  ],\n  providers: [\n    { provide: RECAPTCHA_LANGUAGE, useValue: <span class="hljs-string">&#x27;fr&#x27;</span> },\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule { }\n',de:'<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;\n<span class="hljs-keyword">import</span> { Routes, RouterModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { RECAPTCHA_LANGUAGE, RecaptchaModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ng-recaptcha&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { BasicDemoComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./basic-demo.component&#x27;</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./basic-demo.data&#x27;</span>;\n\n<span class="hljs-keyword">const</span> routes: Routes = [\n  {\n    path: <span class="hljs-string">&#x27;&#x27;</span>,\n    component: BasicDemoComponent,\n    data: { page: settings },\n  },\n];\n\n<span class="hljs-meta">@NgModule</span>({\n  declarations: [BasicDemoComponent],\n  imports: [\n    RouterModule.forChild(routes),\n    RecaptchaModule,\n    CommonModule,\n  ],\n  providers: [\n    { provide: RECAPTCHA_LANGUAGE, useValue: <span class="hljs-string">&#x27;de&#x27;</span> },\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule { }\n'}}}}}],c=function(){function s(){}return s.\u0275mod=r.Lb({type:s}),s.\u0275inj=r.Kb({factory:function(n){return new(n||s)},providers:[{provide:e.c,useValue:"6LeGCZAUAAAAADuhzcuvSB-lYDsxJBl9HUWtZkUM"},{provide:e.a,useValue:Object(l.a)()}],imports:[[p.d.forChild(t),e.h,o.b]]}),s}()}}]);