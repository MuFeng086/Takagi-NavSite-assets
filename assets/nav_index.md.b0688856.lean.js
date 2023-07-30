import{d as m,a as d,o as e,c as i,b as n,u as a,w as y,e as l,t as k,_,f as h,F as p,r as b,g as f,h as A}from"./app.ab968603.js";const T=/[\u0000-\u001f]/g,B=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,C=/[\u0300-\u036F]/g,v=t=>t.normalize("NFKD").replace(C,"").replace(T,"").replace(B,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),x=["href"],N={class:"box"},D={class:"box-header"},L=["innerHTML"],P={key:1,class:"icon"},I=["src","alt"],$=["id"],S={key:0,class:"desc"},V=m({__name:"MNavLink",props:{icon:null,title:null,desc:null,link:null},setup(t){const s=t,o=d(()=>s.title?v(s.title):""),c=d(()=>typeof s.icon=="object"?s.icon.svg:"");return(r,g)=>t.link?(e(),i("a",{key:0,class:"m-nav-link",href:t.link,target:"_blank",rel:"noreferrer"},[n("article",N,[n("div",D,[a(c)?(e(),i("div",{key:0,class:"icon",innerHTML:a(c)},null,8,L)):t.icon&&typeof t.icon=="string"?(e(),i("div",P,[n("img",{src:a(y)(t.icon),alt:t.title,onerror:"this.parentElement.style.display='none'"},null,8,I)])):l("",!0),t.title?(e(),i("h5",{key:2,id:a(o),class:"title"},k(t.title),9,$)):l("",!0)]),t.desc?(e(),i("p",S,k(t.desc),1)):l("",!0)])],8,x)):l("",!0)}});const F=_(V,[["__scopeId","data-v-94d36b8f"]]),j=["id"],G=["href"],M={class:"m-nav-links"},z=m({__name:"MNavLinks",props:{title:null,items:null},setup(t){const s=t,o=d(()=>v(s.title));return(c,r)=>(e(),i(p,null,[t.title?(e(),i("h2",{key:0,id:a(o),tabindex:"-1"},[h(k(t.title)+" ",1),n("a",{class:"header-anchor",href:`#${a(o)}`,"aria-hidden":"true"},null,8,G)],8,j)):l("",!0),n("div",M,[(e(!0),i(p,null,b(t.items,({icon:g,title:w,desc:E,link:u})=>(e(),f(F,{key:u,icon:g,title:w,desc:E,link:u},null,8,["icon","title","desc","link"]))),128))])],64))}});const R=_(z,[["__scopeId","data-v-2bcff0a9"]]),O=[{title:"官方相关",items:[{icon:"icons/yamamoto.webp",title:"山本崇一朗-推特",desc:"《高木同学》原作者",link:"https://twitter.com/udon0531"},{icon:"icons/dp6h9JiL.webp",title:"稲葉光史-推特",desc:"《（原）高木同学》作者",link:"https://twitter.com/Y6W9v"},{icon:"icons/takagi3_anime.webp",title:"动画官方推特",desc:"《高木同学》动画官方SNS账号",link:"https://twitter.com/takagi3_anime"},{icon:"icons/takagi3_anime.webp",title:"动画官网",desc:"《高木同学》动画官网（默认为剧场版页面）",link:"https://takagi3.me/"},{icon:"icons/geekan-sunday.ico",title:"《月刊少年》杂志官网",desc:"原作漫画连载杂志的官网",link:"https://gekkansunday.net/"},{icon:"icons/kyun-game.webp",title:"心动记录手游-官网",desc:"含剧情的L2D音乐向手游（已停服）",link:"https://takagi3game.jp/"},{icon:"icons/takagi-vr.ico",title:"高木同学VR游戏-官网",desc:"以西片视角与高木互动的VR游戏",link:"https://vr-takagi3.com/"},{icon:"icons/tonosho-gov.ico",title:"土庄町政府-官网",desc:"作品舞台-土庄町/小豆岛政府站",link:"https://www.town.tonosho.kagawa.jp/"},{icon:"",title:"小豆岛观光协会-官网",desc:"濑户内海-小豆岛旅游信息站",link:"https://shodoshima.or.jp/"}]},{title:"民间自建站点",items:[{icon:"/icons/takagi-wiki.webp",title:"高木同学资料站",desc:"类wiki资料信息站 (by @一只鬆）",link:"https://wiki.takagi3.cn/"},{icon:"/icons/takagi-fanclub.webp",title:"高木同学Fan社区",desc:"属于高木厨的独立社区论坛 (by @轻虹空雨）",link:"https://club.takagi3.cn/"},{icon:"/icons/takagi-imgshare.webp",title:"高木同学共享云图仓",desc:"实用&共享的高木美图云仓 (by @轻虹空雨）",link:"https://shareimg.takagi3.cn/"},{icon:"/icons/takagi-filecloud.webp",title:"高木同学文件资料站",desc:"大家一般需要的资源，都在这了。（合作建设）",link:"https://share.takagi3.top"},{icon:"https://takagi3.me/favicon.ico",title:"からかい上手の高木さん资源站",desc:"一触即达的资源站（by @松柏陈门）",link:"https://fujianprovince.github.io/takagi"}]},{title:"公共社群",items:[{icon:"/icons/tieba.webp",title:"百度贴吧",link:"https://tieba.baidu.com/f?kw=%E6%93%85%E9%95%BF%E6%8D%89%E5%BC%84%E7%9A%84%E9%AB%98%E6%9C%A8%E5%90%8C%E5%AD%A6&fr=index"},{icon:"/icons/weibo.webp",title:"微博超话",link:"https://weibo.com/p/100808bb6103ebd10533630befafe870f424f2"},{icon:"/icons/qq.webp",title:"QQ频道",link:"https://pd.qq.com/s/cp4k08j75"}]},{title:"百科资料",items:[{icon:"/icons/wikipedia.ico",title:"维基百科",link:"https://zh.m.wikipedia.org/wiki/%E6%93%85%E9%95%B7%E6%8D%89%E5%BC%84%E4%BA%BA%E7%9A%84%E9%AB%98%E6%9C%A8%E5%90%8C%E5%AD%B8"},{icon:"/icons/moegirl.ico",title:"萌娘百科",link:"https://zh.moegirl.org.cn/%E6%93%85%E9%95%BF%E6%8D%89%E5%BC%84%E7%9A%84%E9%AB%98%E6%9C%A8%E5%90%8C%E5%AD%A6"},{icon:"/icons/fandom.ico",title:"Fandom Wiki",link:"https://karakai-jouzu-no-takagi-san.fandom.com/zh/wiki/%E9%A6%96%E9%A1%B5"}]},{title:"圈内名人",items:[{icon:"/icons/touzi.webp",title:"擅长捉弄の高木同学",desc:"高木圈知名B站UP主，外号“头子”",link:"https://space.bilibili.com/2709173/"},{icon:"/icons/takagi-camerata.webp",title:"高木同学同好会",desc:"民间粉丝团体“高木同学同好会”B站公号",link:"https://space.bilibili.com/1415908672/"}]},{title:"其他",items:[{icon:"/icons/chatgpt-next-web.svg",title:"ChatGPT-Next-Web",desc:"国内可用的二改GPT站点 (访问密钥请联系站长)",link:"https://chatgpt.takagi3.top"},{icon:"/icons/bing.ico",title:"Bing-AI Chat",desc:"国内可用的Bing AI站点",link:"https://bingchat.takagi3.top"},{icon:"/icons/tkgcrop.webp",title:"“高木同学振兴会”官网",desc:"民间粉丝团体“高木同学振兴会”官网",link:"https://takagisan.cn"},{icon:"/icons/Gesun-203-Jan-cover-modified.webp",title:"《高木同学》内容仓库集群",desc:"关于《高木同学》项目的Github组织页面",link:"https://github.com/TakagisanReposOrg"},{icon:"/icons/github.svg",title:"高木资料站Github仓库",link:"https://github.com/TakagisanReposOrg/VuePress-TakagiWiki"},{icon:"/icons/github.svg",title:"高木站点导航Github仓库",link:"https://github.com/TakagisanReposOrg/Takagi-NavSite"},{icon:"/icons/github.svg",title:"AI高木程序Github仓库",link:"https://github.com/mrtank2333/AITakagi-san_Powered_By_ChatGPT_Client"}]}];const q=A("",3),W=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[h("本站前端模板由 "),n("a",{href:"https://github.com/maomao1996",target:"_blank",rel:"noreferrer"},"maomao"),h(" 开发，源项目地址："),n("a",{href:"https://github.com/maomao1996/vitepress-fe-nav",target:"_blank",rel:"noreferrer"},"https://github.com/maomao1996/vitepress-fe-nav")])],-1),Q=JSON.parse('{"title":"站点列表","description":"","frontmatter":{"layoutClass":"m-nav-layout","outline":[2,3,4]},"headers":[],"relativePath":"nav/index.md","lastUpdated":1690717330000}'),J={name:"nav/index.md"},U=Object.assign(J,{setup(t){return(s,o)=>(e(),i("div",null,[q,(e(!0),i(p,null,b(a(O),({title:c,items:r})=>(e(),f(R,{title:c,items:r},null,8,["title","items"]))),256)),W]))}});export{Q as __pageData,U as default};
