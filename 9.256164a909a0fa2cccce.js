(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{k1nq:function(s,a,n){"use strict";n.r(a),n.d(a,"PreloadedRecaptchaAPIService",function(){return h}),n.d(a,"service",function(){return i}),n.d(a,"DemoModule",function(){return d});var p=n("ofXK"),l=n("tyNb"),e=n("2Vo4"),t=n("jCJ1"),c=n("FID4"),r=n("fXoL"),o=function(){function s(){}return s.prototype.resolved=function(s){console.log("Resolved captcha with response: "+s)},s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=r.Eb({type:s,selectors:[["recaptcha-demo"]],decls:1,vars:0,consts:[["siteKey","6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU",3,"resolved"]],template:function(s,a){1&s&&(r.Pb(0,"re-captcha",0),r.Wb("resolved",function(s){return a.resolved(s)}),r.Ob())},directives:[t.e],encapsulation:2}),s}(),h=function(){function s(s){var a=new e.a(null);if(this.ready=a.asObservable(),"undefined"==typeof grecaptcha){var n=document.createElement("script");n.src="https://www.google.com/recaptcha/api.js?render="+s,document.head.appendChild(n)}var p=setInterval(function(){"undefined"!=typeof grecaptcha&&grecaptcha.render instanceof Function&&(clearInterval(p),a.next(grecaptcha))},50)}return s.\u0275fac=function(a){return new(a||s)(r.Tb(t.c,8))},s.\u0275prov=r.Gb({token:s,factory:s.\u0275fac}),s}(),i=new h,j=[{path:"",component:o,data:{page:{feature:"preload-api",title:"Preloaded reCAPTCHA API Example",content:{component:'<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@angular/core&quot;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&quot;recaptcha-demo&quot;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&quot;./preload-api-demo.component.html&quot;</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">PreloadApiDemoComponent</span> </span>{\n  <span class="hljs-keyword">public</span> resolved(captchaResponse: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Resolved captcha with response: <span class="hljs-subst">${captchaResponse}</span>`</span>);\n  }\n}\n',html:'<span class="hljs-tag">&lt;<span class="hljs-name">re-captcha</span>\n  (<span class="hljs-attr">resolved</span>)=<span class="hljs-string">&quot;resolved($event)&quot;</span>\n  <span class="hljs-attr">siteKey</span>=<span class="hljs-string">&quot;6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">re-captcha</span>&gt;</span>\n',module:{"":'<span class="hljs-keyword">import</span> { Injectable, NgModule, Optional, Inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;\n<span class="hljs-keyword">import</span> { Routes, RouterModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { BehaviorSubject, Observable } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { RecaptchaLoaderService, RecaptchaModule, RECAPTCHA_V3_SITE_KEY } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ng-recaptcha&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { PreloadApiDemoComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./preload-api-demo.component&#x27;</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./preload-api-demo.data&#x27;</span>;\n\n<span class="hljs-meta">@Injectable</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">PreloadedRecaptchaAPIService</span> </span>{\n  <span class="hljs-keyword">public</span> ready: Observable&lt;ReCaptchaV2.ReCaptcha&gt;;\n\n  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">\n    <span class="hljs-meta">@Optional</span>() <span class="hljs-meta">@Inject</span>(RECAPTCHA_V3_SITE_KEY) v3SiteKey?: <span class="hljs-built_in">string</span>,\n  </span>)</span> {\n    <span class="hljs-keyword">const</span> readySubject = <span class="hljs-keyword">new</span> BehaviorSubject&lt;ReCaptchaV2.ReCaptcha&gt;(<span class="hljs-literal">null</span>);\n    <span class="hljs-built_in">this</span>.ready = readySubject.asObservable();\n\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> grecaptcha === <span class="hljs-string">&#x27;undefined&#x27;</span>) {\n      <span class="hljs-keyword">const</span> recaptchaScript = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">&#x27;script&#x27;</span>);\n      <span class="hljs-keyword">const</span> renderMode = v3SiteKey || <span class="hljs-string">&#x27;explicit&#x27;</span>;\n      recaptchaScript.src = <span class="hljs-string">`https://www.google.com/recaptcha/api.js?render=<span class="hljs-subst">${v3SiteKey}</span>`</span>;\n      <span class="hljs-built_in">document</span>.head.appendChild(recaptchaScript);\n    }\n\n    <span class="hljs-keyword">const</span> interval = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> grecaptcha === <span class="hljs-string">&#x27;undefined&#x27;</span> || !(grecaptcha.render <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">Function</span>)) {\n        <span class="hljs-keyword">return</span>;\n      }\n\n      <span class="hljs-built_in">clearInterval</span>(interval);\n      readySubject.next(grecaptcha);\n    }, <span class="hljs-number">50</span>);\n  }\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> service = <span class="hljs-keyword">new</span> PreloadedRecaptchaAPIService();\n\n<span class="hljs-keyword">const</span> routes: Routes = [\n  {\n    <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n    <span class="hljs-attr">component</span>: PreloadApiDemoComponent,\n    <span class="hljs-attr">data</span>: { <span class="hljs-attr">page</span>: settings },\n  },\n];\n\n<span class="hljs-meta">@NgModule</span>({\n  <span class="hljs-attr">declarations</span>: [PreloadApiDemoComponent],\n  <span class="hljs-attr">imports</span>: [\n    RouterModule.forChild(routes),\n    RecaptchaModule,\n    CommonModule,\n  ],\n  <span class="hljs-attr">providers</span>: [\n    {\n      <span class="hljs-attr">provide</span>: RecaptchaLoaderService,\n      <span class="hljs-attr">useValue</span>: service,\n    },\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">DemoModule</span> </span>{ }\n',fr:'<span class="hljs-keyword">import</span> { Injectable, NgModule, Optional, Inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;\n<span class="hljs-keyword">import</span> { Routes, RouterModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { BehaviorSubject, Observable } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { RecaptchaLoaderService, RecaptchaModule, RECAPTCHA_LANGUAGE, RECAPTCHA_V3_SITE_KEY } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ng-recaptcha&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { PreloadApiDemoComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./preload-api-demo.component&#x27;</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./preload-api-demo.data&#x27;</span>;\n\n<span class="hljs-meta">@Injectable</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">PreloadedRecaptchaAPIService</span> </span>{\n  <span class="hljs-keyword">public</span> ready: Observable&lt;ReCaptchaV2.ReCaptcha&gt;;\n\n  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">\n    <span class="hljs-meta">@Optional</span>() <span class="hljs-meta">@Inject</span>(RECAPTCHA_V3_SITE_KEY) v3SiteKey?: <span class="hljs-built_in">string</span>,\n  </span>)</span> {\n    <span class="hljs-keyword">const</span> readySubject = <span class="hljs-keyword">new</span> BehaviorSubject&lt;ReCaptchaV2.ReCaptcha&gt;(<span class="hljs-literal">null</span>);\n    <span class="hljs-built_in">this</span>.ready = readySubject.asObservable();\n\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> grecaptcha === <span class="hljs-string">&#x27;undefined&#x27;</span>) {\n      <span class="hljs-keyword">const</span> recaptchaScript = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">&#x27;script&#x27;</span>);\n      <span class="hljs-keyword">const</span> renderMode = v3SiteKey || <span class="hljs-string">&#x27;explicit&#x27;</span>;\n      recaptchaScript.src = <span class="hljs-string">`https://www.google.com/recaptcha/api.js?render=<span class="hljs-subst">${v3SiteKey}</span>`</span>;\n      <span class="hljs-built_in">document</span>.head.appendChild(recaptchaScript);\n    }\n\n    <span class="hljs-keyword">const</span> interval = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> grecaptcha === <span class="hljs-string">&#x27;undefined&#x27;</span> || !(grecaptcha.render <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">Function</span>)) {\n        <span class="hljs-keyword">return</span>;\n      }\n\n      <span class="hljs-built_in">clearInterval</span>(interval);\n      readySubject.next(grecaptcha);\n    }, <span class="hljs-number">50</span>);\n  }\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> service = <span class="hljs-keyword">new</span> PreloadedRecaptchaAPIService();\n\n<span class="hljs-keyword">const</span> routes: Routes = [\n  {\n    <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n    <span class="hljs-attr">component</span>: PreloadApiDemoComponent,\n    <span class="hljs-attr">data</span>: { <span class="hljs-attr">page</span>: settings },\n  },\n];\n\n<span class="hljs-meta">@NgModule</span>({\n  <span class="hljs-attr">declarations</span>: [PreloadApiDemoComponent],\n  <span class="hljs-attr">imports</span>: [\n    RouterModule.forChild(routes),\n    RecaptchaModule,\n    CommonModule,\n  ],\n  <span class="hljs-attr">providers</span>: [\n    {\n      <span class="hljs-attr">provide</span>: RecaptchaLoaderService,\n      <span class="hljs-attr">useValue</span>: service,\n    },\n    { <span class="hljs-attr">provide</span>: RECAPTCHA_LANGUAGE, <span class="hljs-attr">useValue</span>: <span class="hljs-string">&#x27;fr&#x27;</span> },\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">DemoModule</span> </span>{ }\n',de:'<span class="hljs-keyword">import</span> { Injectable, NgModule, Optional, Inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;\n<span class="hljs-keyword">import</span> { Routes, RouterModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { BehaviorSubject, Observable } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { RecaptchaLoaderService, RecaptchaModule, RECAPTCHA_LANGUAGE, RECAPTCHA_V3_SITE_KEY } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ng-recaptcha&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { PreloadApiDemoComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./preload-api-demo.component&#x27;</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./preload-api-demo.data&#x27;</span>;\n\n<span class="hljs-meta">@Injectable</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">PreloadedRecaptchaAPIService</span> </span>{\n  <span class="hljs-keyword">public</span> ready: Observable&lt;ReCaptchaV2.ReCaptcha&gt;;\n\n  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">\n    <span class="hljs-meta">@Optional</span>() <span class="hljs-meta">@Inject</span>(RECAPTCHA_V3_SITE_KEY) v3SiteKey?: <span class="hljs-built_in">string</span>,\n  </span>)</span> {\n    <span class="hljs-keyword">const</span> readySubject = <span class="hljs-keyword">new</span> BehaviorSubject&lt;ReCaptchaV2.ReCaptcha&gt;(<span class="hljs-literal">null</span>);\n    <span class="hljs-built_in">this</span>.ready = readySubject.asObservable();\n\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> grecaptcha === <span class="hljs-string">&#x27;undefined&#x27;</span>) {\n      <span class="hljs-keyword">const</span> recaptchaScript = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">&#x27;script&#x27;</span>);\n      <span class="hljs-keyword">const</span> renderMode = v3SiteKey || <span class="hljs-string">&#x27;explicit&#x27;</span>;\n      recaptchaScript.src = <span class="hljs-string">`https://www.google.com/recaptcha/api.js?render=<span class="hljs-subst">${v3SiteKey}</span>`</span>;\n      <span class="hljs-built_in">document</span>.head.appendChild(recaptchaScript);\n    }\n\n    <span class="hljs-keyword">const</span> interval = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> grecaptcha === <span class="hljs-string">&#x27;undefined&#x27;</span> || !(grecaptcha.render <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">Function</span>)) {\n        <span class="hljs-keyword">return</span>;\n      }\n\n      <span class="hljs-built_in">clearInterval</span>(interval);\n      readySubject.next(grecaptcha);\n    }, <span class="hljs-number">50</span>);\n  }\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> service = <span class="hljs-keyword">new</span> PreloadedRecaptchaAPIService();\n\n<span class="hljs-keyword">const</span> routes: Routes = [\n  {\n    <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n    <span class="hljs-attr">component</span>: PreloadApiDemoComponent,\n    <span class="hljs-attr">data</span>: { <span class="hljs-attr">page</span>: settings },\n  },\n];\n\n<span class="hljs-meta">@NgModule</span>({\n  <span class="hljs-attr">declarations</span>: [PreloadApiDemoComponent],\n  <span class="hljs-attr">imports</span>: [\n    RouterModule.forChild(routes),\n    RecaptchaModule,\n    CommonModule,\n  ],\n  <span class="hljs-attr">providers</span>: [\n    {\n      <span class="hljs-attr">provide</span>: RecaptchaLoaderService,\n      <span class="hljs-attr">useValue</span>: service,\n    },\n    { <span class="hljs-attr">provide</span>: RECAPTCHA_LANGUAGE, <span class="hljs-attr">useValue</span>: <span class="hljs-string">&#x27;de&#x27;</span> },\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">DemoModule</span> </span>{ }\n'}}}}}],d=function(){function s(){}return s.\u0275mod=r.Ib({type:s}),s.\u0275inj=r.Hb({factory:function(a){return new(a||s)},providers:[{provide:t.g,useValue:i},{provide:t.a,useValue:Object(c.a)()},{provide:t.c,useValue:"6LeGCZAUAAAAADuhzcuvSB-lYDsxJBl9HUWtZkUM"}],imports:[[l.d.forChild(j),t.h,p.b]]}),s}()}}]);