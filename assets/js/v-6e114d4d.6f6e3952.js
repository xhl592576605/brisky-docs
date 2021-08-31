"use strict";(self.webpackChunk_brisky_docs=self.webpackChunk_brisky_docs||[]).push([[528],{101:(t,d,e)=>{e.r(d),e.d(d,{data:()=>r});const r={key:"v-6e114d4d",path:"/Core/life-cycle.html",title:"生命周期",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"生命周期说明",slug:"生命周期说明",children:[]}],filePathRelative:"Core/life-cycle.md",git:{updatedTime:1630206499e3,contributors:[{name:"xhl592576605",email:"592576605@qq.com",commits:1}]}}},5750:(t,d,e)=>{e.r(d),e.d(d,{default:()=>s});var r=e(6252);const o=(0,r.uE)('<h1 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h1><blockquote><p>正常来说 ，一个vue的生命周期是本身在vue里面的，brisky框架封装了而外的生命周期来统一管理，而外扩展业务等，</p></blockquote><p><img src="/brisky-docs/images/life-cycle.png" alt="CoreBase"></p><h2 id="生命周期说明" tabindex="-1"><a class="header-anchor" href="#生命周期说明" aria-hidden="true">#</a> 生命周期说明</h2><p>生命周期是以表格内的业务流转的。当然你也可以自己替换，但是生命周期的调用的不变，就是这几个，brisky的周期调用是以插件的形式<code>插件是传入到option，后续会说到</code>存在的，插件里面注册生命周期的回调，到了哪个步骤的生命周期就会调用回调，部分生命周期支持异步（await开头）。当然若不以插件使用，在初始化<code>core.init(option)</code>,也可以将生命周期注册到option，或者更在<code>window.$frame</code>进行注册</p><p>当然，不止这些自定义的生命周期，你也可以注册vue生命周期，vue-router路由守卫，同样是能生效的，当然，还是在<code>option</code>或者<code>window.$frame</code></p>',6),a=(0,r.Uk)("具体查看"),i=(0,r.Uk)("Option"),c=(0,r.Uk)(","),u=(0,r.Uk)("$frame"),n=(0,r.uE)("<table><thead><tr><th>生命周期</th><th>说明</th><th>内容</th></tr></thead><tbody><tr><td>beforeGetSystem</td><td>初始化系统配置之前</td><td>自行扩展</td></tr><tr><td>awaitGetSystem</td><td>初始化系统配置</td><td>1. 初始化配置 <br></td></tr><tr><td>afterGetSystem</td><td>初始化系统配置之后</td><td>自行扩展</td></tr><tr><td>beforeCoreReady</td><td>初始化核心之前</td><td>自行扩展</td></tr><tr><td>awaitCoreReady</td><td>初始化核心</td><td>1. 设置授权信息，并将token保存到core里面</td></tr><tr><td>afterCoreReady</td><td>初始化核心之后</td><td>自行扩展</td></tr><tr><td>beforeCreateApp</td><td>创建app之前</td><td>1. 注入动态属性到core对<br> 2. 设置登录，404，合并静态路由，创建$router对象 <br> 3. 初始化user <br> 4 初始化menu，meta permission值 <br> 5 设置路由守卫，用于鉴权路由</td></tr><tr><td>createApp</td><td>创建app</td><td>自行扩展</td></tr><tr><td>afterCreateApp</td><td>创建app之后</td><td>1. 重新路由addRoute方法</td></tr><tr><td>afterAuthSuccess</td><td>路由鉴权成功</td><td>1. 判断token请求用户信息，赋值给core.user <br> 2.定期检查token <br> 3. 判断user 请求菜单，组成动态路由，添加动态路由，赋值menu，meta permission</td></tr><tr><td>afterAuthFailure</td><td>路由鉴权失败</td><td>自行扩展</td></tr><tr><td>beforeLogin</td><td>登录之前</td><td>自行扩展</td></tr><tr><td>afterLogin</td><td>登录之后</td><td>1. 获取token,写入cookie</td></tr><tr><td>beforeLogout</td><td>登出之前</td><td>自行扩展</td></tr><tr><td>afterLogout</td><td>登出之后</td><td>1. 移除动态路由 <br> 2. 移除user <br> 3. 移除menu <br> 4. 移除token</td></tr><tr><td>vue.mounted</td><td>vue的生命周期，其余的类似<code>vue.**</code></td><td></td></tr><tr><td>router.beforeEach</td><td>router的路由守卫，其余的类似<code>router.**</code></td><td></td></tr></tbody></table>",1),s={render:function(t,d){const e=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[o,(0,r._)("p",null,[a,(0,r.Wm)(e,{to:"/Core/option.html"},{default:(0,r.w5)((()=>[i])),_:1}),c,(0,r.Wm)(e,{to:"/Core/frame.html"},{default:(0,r.w5)((()=>[u])),_:1})]),n],64)}}}}]);