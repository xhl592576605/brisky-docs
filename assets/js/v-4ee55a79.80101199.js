"use strict";(self.webpackChunk_brisky_docs=self.webpackChunk_brisky_docs||[]).push([[709],{3165:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e={key:"v-4ee55a79",path:"/ApiService/functions.html",title:"属性与方法",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"公共属性",slug:"公共属性",children:[{level:3,title:"serviceConfigs",slug:"serviceconfigs",children:[]}]},{level:2,title:"公共方法",slug:"公共方法",children:[{level:3,title:"$fetchData",slug:"fetchdata",children:[]},{level:3,title:"$fetchDataByUrl",slug:"fetchdatabyurl",children:[]},{level:3,title:"$cancelFetchApi",slug:"cancelfetchapi",children:[]},{level:3,title:"disposeAxios",slug:"disposeaxios",children:[]}]}],filePathRelative:"ApiService/functions.md",git:{updatedTime:1630206499e3,contributors:[{name:"xhl592576605",email:"592576605@qq.com",commits:1}]}}},2497:(a,n,s)=>{s.r(n),s.d(n,{default:()=>p});const e=(0,s(6252).uE)('<h1 id="属性与方法" tabindex="-1"><a class="header-anchor" href="#属性与方法" aria-hidden="true">#</a> 属性与方法</h1><h2 id="公共属性" tabindex="-1"><a class="header-anchor" href="#公共属性" aria-hidden="true">#</a> 公共属性</h2><h3 id="serviceconfigs" tabindex="-1"><a class="header-anchor" href="#serviceconfigs" aria-hidden="true">#</a> serviceConfigs</h3><p>api配置信息，转成对象存在这个值里面</p><h2 id="公共方法" tabindex="-1"><a class="header-anchor" href="#公共方法" aria-hidden="true">#</a> 公共方法</h2><h3 id="fetchdata" tabindex="-1"><a class="header-anchor" href="#fetchdata" aria-hidden="true">#</a> $fetchData</h3><p>根据api配置信息，使用key请求接口</p><h4 id="入参" tabindex="-1"><a class="header-anchor" href="#入参" aria-hidden="true">#</a> 入参:</h4><ul><li>apiChainKey<br> 请求key值，对于api配置信息</li><li>apiOpt<br> 请求的数据,与axios一致</li></ul><h4 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值:</h4><ul><li>请求结果 promise</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token comment">// `params` 是即将与请求一起发送的 URL 参数</span>\n  <span class="token comment">// 必须是一个无格式对象(plain object)或 URLSearchParams 对象</span>\n  params<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// `data` 是作为请求主体被发送的数据</span>\n  <span class="token comment">// 只适用于这些请求方法 &#39;PUT&#39;, &#39;POST&#39;, 和 &#39;PATCH&#39;</span>\n  <span class="token comment">// 在没有设置 `transformRequest` 时，必须是以下类型之一：</span>\n  <span class="token comment">// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams</span>\n  <span class="token comment">// - 浏览器专属：FormData, File, Blob</span>\n  <span class="token comment">// - Node 专属： Stream</span>\n  data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    firstName<span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>例子：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>apiService<span class="token punctuation">.</span><span class="token function">$fetchData</span><span class="token punctuation">(</span><span class="token string">&#39;system.login&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n  parms<span class="token operator">:</span><span class="token punctuation">{</span>userId<span class="token operator">:</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  data<span class="token operator">:</span><span class="token punctuation">{</span>userId<span class="token operator">:</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>pass<span class="token operator">:</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="fetchdatabyurl" tabindex="-1"><a class="header-anchor" href="#fetchdatabyurl" aria-hidden="true">#</a> $fetchDataByUrl</h3><p>直接使用url请求数据</p><h4 id="入参-1" tabindex="-1"><a class="header-anchor" href="#入参-1" aria-hidden="true">#</a> 入参:</h4><ul><li>url<br> 即就是url</li><li>apiOpt<br> 请求的数据,与axios一致</li></ul><h4 id="返回值-1" tabindex="-1"><a class="header-anchor" href="#返回值-1" aria-hidden="true">#</a> 返回值:</h4><ul><li>请求结果 promise</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token comment">// `params` 是即将与请求一起发送的 URL 参数</span>\n  <span class="token comment">// 必须是一个无格式对象(plain object)或 URLSearchParams 对象</span>\n  params<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// `data` 是作为请求主体被发送的数据</span>\n  <span class="token comment">// 只适用于这些请求方法 &#39;PUT&#39;, &#39;POST&#39;, 和 &#39;PATCH&#39;</span>\n  <span class="token comment">// 在没有设置 `transformRequest` 时，必须是以下类型之一：</span>\n  <span class="token comment">// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams</span>\n  <span class="token comment">// - 浏览器专属：FormData, File, Blob</span>\n  <span class="token comment">// - Node 专属： Stream</span>\n  data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    firstName<span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>例子：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>apiService<span class="token punctuation">.</span><span class="token function">$fetchDataByUrl</span><span class="token punctuation">(</span><span class="token string">&#39;http://xx.xx.com/api/login&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n  method<span class="token operator">:</span><span class="token string">&#39;post&#39;</span>\n  parms<span class="token operator">:</span><span class="token punctuation">{</span>userId<span class="token operator">:</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  data<span class="token operator">:</span><span class="token punctuation">{</span>userId<span class="token operator">:</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>pass<span class="token operator">:</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="cancelfetchapi" tabindex="-1"><a class="header-anchor" href="#cancelfetchapi" aria-hidden="true">#</a> $cancelFetchApi</h3><p>取消请求</p><h4 id="入参-2" tabindex="-1"><a class="header-anchor" href="#入参-2" aria-hidden="true">#</a> 入参:</h4><ul><li>apiKey<br> apiChainKey或者url</li></ul><p>例子：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>apiService<span class="token punctuation">.</span><span class="token function">$cancelFetchApi</span><span class="token punctuation">(</span><span class="token string">&#39;system.login&#39;</span><span class="token punctuation">)</span>\napiService<span class="token punctuation">.</span><span class="token function">$cancelFetchApi</span><span class="token punctuation">(</span><span class="token string">&#39;http://xx.xx.com/api/login&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="disposeaxios" tabindex="-1"><a class="header-anchor" href="#disposeaxios" aria-hidden="true">#</a> disposeAxios</h3><p>注销axios实例，每个ApiService中都有一个axios实例</p>',31),p={render:function(a,n){return e}}}}]);