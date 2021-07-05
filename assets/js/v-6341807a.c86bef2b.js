(self.webpackChunk_brisky_docs=self.webpackChunk_brisky_docs||[]).push([[848],{5038:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-6341807a",path:"/Core/frame.html",title:"框架配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"Core/frame.md",git:{updatedTime:1625408622e3,contributors:[{name:"xhl592576605",email:"592576605@qq.com",commits:1}]}}},8766:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="框架配置" tabindex="-1"><a class="header-anchor" href="#框架配置" aria-hidden="true">#</a> 框架配置</h1><p>框架配置，即是window.$frame对象，下面直接说明这个对象</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>windw<span class="token punctuation">.</span>$frame<span class="token operator">=</span><span class="token punctuation">{</span>\n  <span class="token comment">// 打开开发调试日志</span>\n  debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  sysId<span class="token operator">:</span> <span class="token string">&#39;brisky_123456&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// 系统标题</span>\n  title<span class="token operator">:</span> <span class="token string">&#39;brisky&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// 主题变量</span>\n  theme<span class="token operator">:</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// 登录后默认跳转的地址，支持函数</span>\n  root<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// 组件别名</span>\n  alias<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// &#39;exception-404&#39;: &#39;../examples/component/exception-404/index.js&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 静态路由</span>\n  routes<span class="token operator">:</span><span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token comment">//路径</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;/first&#39;</span><span class="token punctuation">,</span>\n      <span class="token comment">// 路由指向的组件，可以是一个json，一个组件对象，一个函数字符串</span>\n      component<span class="token operator">:</span> <span class="token string">&#39;../examples/component/hello-word/index.js&#39;</span><span class="token punctuation">,</span>\n      <span class="token comment">// 路由meta信息</span>\n      meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n         <span class="token comment">// 传递给路由组件的值</span>\n         moduleConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n             msg<span class="token operator">:</span> <span class="token string">&#39;first&#39;</span>\n          <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">]</span>，\n  <span class="token comment">// 登录配置</span>\n  login<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">//路径</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>\n      <span class="token comment">// 路由指向的组件，可以是一个json，一个组件对象，一个函数字符串</span>\n      component<span class="token operator">:</span> <span class="token string">&#39;../examples/component/hello-word/index.js&#39;</span><span class="token punctuation">,</span>\n      <span class="token comment">// 传递给路由组件的值</span>\n       moduleConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n           msg<span class="token operator">:</span> <span class="token string">&#39;first&#39;</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 自定义渲染函数，可以替换内部的渲染函数，通常要根据业务觉得</span>\n  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> <span class="token punctuation">{</span>\n          $core\n        <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>\n        <span class="token keyword">const</span> <span class="token punctuation">{</span>\n          meta <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n        <span class="token punctuation">}</span> <span class="token operator">=</span> $core<span class="token punctuation">.</span>$router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>value\n        <span class="token keyword">const</span> <span class="token punctuation">{</span>\n          module\n        <span class="token punctuation">}</span> <span class="token operator">=</span> meta\n        <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  待续<span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>',3),e={render:function(n,s){return p}}}}]);