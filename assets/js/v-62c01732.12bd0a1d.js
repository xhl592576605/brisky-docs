"use strict";(self.webpackChunk_brisky_docs=self.webpackChunk_brisky_docs||[]).push([[533],{596:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-62c01732",path:"/ApiService/quick-start.html",title:"基础",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"快速开始",slug:"快速开始",children:[{level:3,title:"安装",slug:"安装",children:[]},{level:3,title:"实例化",slug:"实例化",children:[]},{level:3,title:"调用",slug:"调用",children:[]}]},{level:2,title:"依赖",slug:"依赖",children:[]}],filePathRelative:"ApiService/quick-start.md",git:{updatedTime:1630206499e3,contributors:[{name:"xhl592576605",email:"592576605@qq.com",commits:1}]}}},3800:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1><blockquote><p>以axios为核心，统一管理的接口配置，可定制的拦截机制，规范的调用函数，即开即用的请求类库</p></blockquote><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 最新稳定版</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> @brisky/api\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化" aria-hidden="true">#</a> 实例化</h3><p>直接实例化对象，将接口信息配置传入，即可完成实例化</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>ApiService<span class="token punctuation">}</span> from ‘@brisky<span class="token operator">/</span>api’\n<span class="token keyword">const</span> apiService<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ApiService</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    api<span class="token operator">:</span><span class="token punctuation">{</span>\n      system<span class="token operator">:</span><span class="token punctuation">{</span>\n        login<span class="token operator">:</span><span class="token punctuation">{</span>\n          url<span class="token operator">:</span><span class="token string">&#39;api/login&#39;</span><span class="token punctuation">,</span>\n          author<span class="token operator">:</span><span class="token string">&#39;brisky&#39;</span><span class="token punctuation">,</span>\n          method<span class="token operator">:</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>\n          params<span class="token operator">:</span><span class="token punctuation">{</span>\n            sign<span class="token operator">:</span><span class="token string">&#39;brisky&#39;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          data<span class="token operator">:</span><span class="token punctuation">{</span>\n            account<span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>\n\t          password<span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="调用" tabindex="-1"><a class="header-anchor" href="#调用" aria-hidden="true">#</a> 调用</h3><p>调用<code>$fetchData</code>方法,并请求接口</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>apiService<span class="token punctuation">.</span><span class="token function">$fetchData</span><span class="token punctuation">(</span><span class="token string">&#39;system.login&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i lodash\n<span class="token function">npm</span> i axios\n<span class="token function">npm</span> i js-cookie\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',13),p={render:function(n,s){return e}}}}]);