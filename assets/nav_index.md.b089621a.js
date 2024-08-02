import{d as g,a as k,o as i,c as e,b as n,u as o,w as y,e as l,t as d,_ as b,f as p,F as h,r as _,g as f,h as A}from"./app.867ba953.js";const B=/[\u0000-\u001f]/g,T=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,C=/[\u0300-\u036F]/g,v=t=>t.normalize("NFKD").replace(C,"").replace(B,"").replace(T,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),x=["href"],N={class:"box"},D={class:"box-header"},L=["innerHTML"],F={key:1,class:"icon"},$=["src","alt"],j=["id"],S={key:0,class:"desc"},V=g({__name:"MNavLink",props:{icon:null,title:null,desc:null,link:null},setup(t){const s=t,a=k(()=>s.title?v(s.title):""),c=k(()=>typeof s.icon=="object"?s.icon.svg:"");return(r,u)=>t.link?(i(),e("a",{key:0,class:"m-nav-link",href:t.link,target:"_blank",rel:"noreferrer"},[n("article",N,[n("div",D,[o(c)?(i(),e("div",{key:0,class:"icon",innerHTML:o(c)},null,8,L)):t.icon&&typeof t.icon=="string"?(i(),e("div",F,[n("img",{src:o(y)(t.icon),alt:t.title,onerror:"this.parentElement.style.display='none'"},null,8,$)])):l("",!0),t.title?(i(),e("h5",{key:2,id:o(a),class:"title"},d(t.title),9,j)):l("",!0)]),t.desc?(i(),e("p",S,d(t.desc),1)):l("",!0)])],8,x)):l("",!0)}});const G=b(V,[["__scopeId","data-v-94d36b8f"]]),M=["id"],P=["href"],I={class:"m-nav-links"},z=g({__name:"MNavLinks",props:{title:null,items:null},setup(t){const s=t,a=k(()=>v(s.title));return(c,r)=>(i(),e(h,null,[t.title?(i(),e("h2",{key:0,id:o(a),tabindex:"-1"},[p(d(t.title)+" ",1),n("a",{class:"header-anchor",href:`#${o(a)}`,"aria-hidden":"true"},null,8,P)],8,M)):l("",!0),n("div",I,[(i(!0),e(h,null,_(t.items,({icon:u,title:w,desc:E,link:m})=>(i(),f(G,{key:m,icon:u,title:w,desc:E,link:m},null,8,["icon","title","desc","link"]))),128))])],64))}});const R=b(z,[["__scopeId","data-v-2bcff0a9"]]),O=[{title:"官方相关 ✅",items:[{icon:"icons/yamamoto.webp",title:"山本崇一朗-推特",desc:"《高木同学》原作者",link:"https://twitter.com/udon0531"},{icon:"icons/dp6h9JiL.webp",title:"稲葉光史-推特",desc:"《（原）高木同学》作者",link:"https://twitter.com/Y6W9v"},{icon:"icons/takagi3_anime.webp",title:"动画官方推特",desc:"《高木同学》动画官方SNS账号",link:"https://twitter.com/takagi3_anime"},{icon:"icons/takagi3_anime.webp",title:"动画官网",desc:"《高木同学》动画官网（默认为剧场版页面）",link:"https://takagi3.me/"},{icon:"icons/geekan-sunday.ico",title:"《月刊少年》杂志官网",desc:"原作漫画连载杂志的官网",link:"https://gekkansunday.net/"},{icon:"icons/kyun-game.webp",title:"心动记录手游-官网",desc:"含剧情的L2D音乐向手游（已停服）",link:"https://takagi3game.jp/"},{icon:"icons/takagi-vr.ico",title:"高木同学VR游戏-官网",desc:"以西片视角与高木互动的VR游戏",link:"https://vr-takagi3.com/"},{icon:"icons/tonosho-gov.ico",title:"土庄町政府-官网",desc:"作品舞台-土庄町/小豆岛政府站",link:"https://www.town.tonosho.kagawa.jp/"},{icon:"",title:"小豆岛观光协会-官网",desc:"濑户内海-小豆岛旅游信息站",link:"https://shodoshima.or.jp/"},{icon:"",title:"真人电影官网",desc:"真人改编版电影的官网",link:"https://takagi3-movie.jp/"}]},{title:"民间自建站点 🤔",items:[{icon:"/icons/takagi-wiki.webp",title:"✅ 高木轻wiki站",desc:"类Wiki资料信息站 (by @一只鬆）",link:"https://wiki.takagi3.cn/"},{icon:"/icons/takagi-fanclub.webp",title:"❌ 高木同学Fan社区",desc:"属于高木厨的独立社区论坛 (by @轻虹空雨）",link:"https://club.takagi3.cn/"},{icon:"/icons/takagi-imgshare.webp",title:"❌ 高木同学共享云图仓",desc:"实用&共享的高木美图云仓 (by @轻虹空雨）",link:"https://shareimg.takagi3.cn/"},{icon:"/icons/takagi-filecloud.webp",title:"✅ 高木同学文件资料（镜像）",desc:"大家一般需要的资源，都在这了（合作建设）",link:"https://al.tkgso.fun"},{icon:"https://takagi3.me/favicon.ico",title:"✅ からかい上手の高木さん资源站 ",desc:"一触即达的资源站（by @松柏陈门）",link:"https://fujianprovince.github.io/takagi"},{icon:"https://pic.mufeng086.com/i/2023/09/16/nc44ft.webp",title:"❌ 高木同学同人周边Go",desc:"高木同学同人周边展示区",link:"https://sell.takagi3.top"}]},{title:"公共社群 ✅",items:[{icon:"/icons/tieba.webp",title:"百度贴吧",link:"https://tieba.baidu.com/f?kw=%E6%93%85%E9%95%BF%E6%8D%89%E5%BC%84%E7%9A%84%E9%AB%98%E6%9C%A8%E5%90%8C%E5%AD%A6&fr=index"},{icon:"/icons/weibo.webp",title:"微博超话",link:"https://weibo.com/p/100808bb6103ebd10533630befafe870f424f2"},{icon:"/icons/qq.webp",title:"QQ频道",link:"https://pd.qq.com/s/cp4k08j75"},{icon:"/icons/fanbook.webp",title:"Fanbook社区",link:"https://in.fanbook.cn/gKGQ6FZj"}]},{title:"百科资料 ✅",items:[{icon:"/icons/wikipedia.ico",title:"维基百科",link:"https://zh.m.wikipedia.org/wiki/%E6%93%85%E9%95%B7%E6%8D%89%E5%BC%84%E4%BA%BA%E7%9A%84%E9%AB%98%E6%9C%A8%E5%90%8C%E5%AD%B8"},{icon:"/icons/moegirl.ico",title:"萌娘百科",link:"https://zh.moegirl.org.cn/%E6%93%85%E9%95%BF%E6%8D%89%E5%BC%84%E7%9A%84%E9%AB%98%E6%9C%A8%E5%90%8C%E5%AD%A6"},{icon:"/icons/fandom.ico",title:"Fandom Wiki",link:"https://karakai-jouzu-no-takagi-san.fandom.com/zh/wiki/%E9%A6%96%E9%A1%B5"}]},{title:"圈内名人/团体 🤔",items:[{icon:"/icons/touzi.webp",title:"擅长捉弄の高木同学 ✅",desc:"高木圈知名B站UP主，外号“头子”",link:"https://space.bilibili.com/2709173/"},{icon:"/icons/takagi-camerata.webp",title:"高木同学同好会 ✅",desc:"民间粉丝团体“高木同学同好会”B站公号",link:"https://space.bilibili.com/1415908672/"},{icon:"/icons/tkgcrop.webp",title:"“高木同学振兴会”官网 ❌",desc:"民间社群粉丝团体“高木同学振兴会”",link:"https://takagisan.cn"},{icon:"/icons/fan-anime-team.webp",title:"木绘社 ✅",desc:"高木同人动画制作团队-木绘社",link:"https://muhuishe.com"},{icon:"/icons/Gesun-203-Jan-cover-modified.webp",title:"木创社 ✅",desc:"高木民间站点维护团队-木创社",link:"https://takagi3.top"}]},{title:"其他 ✅",items:[{icon:"/icons/Gesun-203-Jan-cover-modified.webp",title:"✅ 《高木同学》内容仓库集群",desc:"关于《高木同学》项目的Github组织页面",link:"https://github.com/TakagisanReposOrg"},{icon:"/icons/github.svg",title:"✅ 高木资料站Github仓库",link:"https://github.com/TakagisanReposOrg/VuePress-TakagiWiki"},{icon:"/icons/github.svg",title:"✅ 高木站点导航Github仓库",link:"https://github.com/TakagisanReposOrg/Takagi-NavSite"},{icon:"/icons/github.svg",title:"✅ AI高木程序Github仓库",link:"https://github.com/mrtank2333/AITakagi-san_Powered_By_ChatGPT_Client"}]}];const q=A('<h1 id="站点列表" tabindex="-1">站点列表 <a class="header-anchor" href="#站点列表" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>欢迎访问 高木同学站点导航</strong> | <strong>站长：</strong>@<a href="https://aurorainic.top" target="_blank" rel="noreferrer">辰灿汐</a> | <strong>收录申请：</strong><a href="mailto:feedback@takagi3.cn" target="_blank" rel="noreferrer">Feedback@takagi3.cn</a><br><strong>更新时间：2024.8.2 18:06</strong> | <strong>目前已收录 34 条链接</strong></p></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>部分站点（尤其是“民间自建站点”）由于停止维护/项目终止等原因无法访问。</p></div><div class="info custom-block"><p class="custom-block-title">站点状态标识</p><p>✅：可用 🤔：短期维护/改造中 ❌：长期停运/尚未重启</p></div>',4),J=n("div",{class:"info custom-block"},[n("p",{class:"custom-block-title"},"站点框架声明"),n("p",null,[p("本站前端模板由 "),n("a",{href:"https://github.com/maomao1996",target:"_blank",rel:"noreferrer"},"maomao"),p(" 开发，源项目地址："),n("a",{href:"https://github.com/maomao1996/vitepress-fe-nav",target:"_blank",rel:"noreferrer"},"https://github.com/maomao1996/vitepress-fe-nav")])],-1),H=JSON.parse('{"title":"站点列表","description":"","frontmatter":{"layoutClass":"m-nav-layout","outline":[2,3,4]},"headers":[],"relativePath":"nav/index.md","lastUpdated":1722593255000}'),W={name:"nav/index.md"},K=Object.assign(W,{setup(t){return(s,a)=>(i(),e("div",null,[q,(i(!0),e(h,null,_(o(O),({title:c,items:r})=>(i(),f(R,{title:c,items:r},null,8,["title","items"]))),256)),J]))}});export{H as __pageData,K as default};
