(this["webpackJsonpmovie_shooter.client"]=this["webpackJsonpmovie_shooter.client"]||[]).push([[0],{149:function(e,t,a){e.exports=a(258)},154:function(e,t,a){},155:function(e,t,a){},172:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},258:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),i=(a(154),a(155),a(29)),l=a(30),m=a(31),s=a(33),u=a(263),p=a(262),h=a(260),v=a(86),d=a.n(v),f="6cd609d58954319ced89f4732dc98381",y="https://api.themoviedb.org",g=a(265),E=a(267),b=a(266),j=a(269),k=a(270),O=(a(172),g.a.Title),w=g.a.Paragraph,C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{width:"100%",alt:"Norway",height:"auto",style:{cursor:"pointer"},src:"".concat("https://image.tmdb.org/t/p/original","/").concat(this.props.item.backdrop_path)}),r.a.createElement("div",{className:"background-item-block"}),r.a.createElement("div",{className:"item-content"},r.a.createElement(O,{style:{color:"white",marginTop:"33vh",cursor:"pointer"}},this.props.item.title),r.a.createElement(w,{ellipsis:{rows:2,expandable:!0,symbol:r.a.createElement("strong",{style:{color:"white"}},"more"),onExpand:function(){}},style:{color:"white",textAlign:"left",fontSize:"1rem",lineHeight:2}},this.props.item.overview),r.a.createElement(E.a,{disabled:!0,allowHalf:!0,value:this.props.item.vote_average/2}),r.a.createElement(O,{style:{color:"white"},level:3},this.props.item.vote_average),r.a.createElement("div",{style:{marginTop:"5vh"}},r.a.createElement(b.a,{icon:r.a.createElement(j.a,null),className:"item-button",type:"primary",size:"large"},"Detail"),r.a.createElement(b.a,{icon:r.a.createElement(k.a,null),className:"item-button",type:"default",size:"large"},"Add to list"))))}}]),a}(n.Component),_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={popularMovie:[]},e.getPopularMovies=function(){d.a.get("".concat(y,"/").concat("3","/movie/popular?api_key=").concat(f,"&language=uk-UA")).then((function(t){var a=t.data.results;e.setState({popularMovie:a})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getPopularMovies()}},{key:"render",value:function(){return r.a.createElement(h.a,Object.assign({style:{overflow:"hidden"},afterChange:this.onChange,autoplay:!0},{autoplaySpeed:5e3}),this.state.popularMovie.map((function(e){return r.a.createElement(C,{key:e.id,item:e})})))}}]),a}(n.Component),M=a(264),S=a(271),I=a(272),x=g.a.Title,N=g.a.Text,z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=new Date(this.props.item.release_date);return r.a.createElement("div",{style:{width:"13vw",height:"35vh",backgroundColor:"white"}},r.a.createElement("img",{width:"100%",height:"100%",style:{cursor:"pointer"},src:"".concat("https://image.tmdb.org/t/p/original","/").concat(this.props.item.poster_path)}),r.a.createElement("div",{style:{marginTop:"1.2vh"}},r.a.createElement(x,{style:{color:"white",cursor:"pointer"},level:4,ellipsis:{rows:1,expandable:!1}},this.props.item.title),r.a.createElement("div",{style:{display:"flex",justifyContent:"right",alignItems:"center"}},r.a.createElement(N,{style:{color:"#8c8c8c",marginRight:"auto"}},e.getFullYear().toString()),r.a.createElement(S.a,{style:{color:"#d2000f",justifySelf:"right",marginRight:"1vw",cursor:"pointer"}}),r.a.createElement(N,{style:{color:"white",marginRight:"0.3vw"}},this.props.item.vote_average),r.a.createElement(I.a,{style:{color:"#faad14"}}))))}}]),a}(n.Component),T=g.a.Title,A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movieList:[]},e.getMovieList=function(){d.a.get("".concat(y,"/").concat("3","/movie/").concat(e.props.type,"?api_key=").concat(f,"&language=uk-UA")).then((function(t){var a=t.data.results;e.setState({movieList:a})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMovieList()}},{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:"4vh",marginBottom:"12vh"}},r.a.createElement(T,{level:2,style:{color:"white"}},this.props.icon,r.a.createElement("span",{style:{marginLeft:"0.7rem"}},this.props.title)),r.a.createElement(M.b,{style:{paddingTop:"0.5rem"},grid:{gutter:16,column:6},dataSource:this.state.movieList.slice(0,6),renderItem:function(e){return r.a.createElement(M.b.Item,null,r.a.createElement(z,{item:e}))}}))}}]),a}(n.Component),P=a(273),L=a(274),D=a(275),B=(a(251),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{backdrop_path:"",budget:0,genres:[],homepage:"",id:0,imdb_id:0,overview:"",popularity:0,poster_path:"",release_date:"",revenue:0,runtime:0,status:"",tagline:"",title:"",vote_average:0,vote_count:0}},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{color:"white"}},r.a.createElement(_,null),r.a.createElement("div",{style:{padding:"4vh"}},r.a.createElement(A,{icon:r.a.createElement(P.a,{style:{fontSize:"2rem"}}),title:"Popular",type:"popular"}),r.a.createElement(A,{icon:r.a.createElement(j.a,{style:{fontSize:"2rem"}}),title:"Now playing",type:"now_playing"}),r.a.createElement(A,{icon:r.a.createElement(L.a,{style:{fontSize:"2rem"}}),title:"Top rated",type:"top_rated"}),r.a.createElement(A,{icon:r.a.createElement(D.a,{style:{fontSize:"2rem"}}),title:"Upcoming",type:"upcoming"})))}}]),a}(n.Component)),H=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Movie Page")}}]),a}(n.Component),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Search Page")}}]),a}(n.Component),U=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Profile Page")}}]),a}(n.Component),W=a(276),J=a(277),F=a(278),K=a(268),Y=a(261),$=function(){return r.a.createElement("svg",{height:"1rem",width:"1rem",viewBox:"0 -87 472 472"},r.a.createElement("g",{stroke:"currentColor",fill:"none"},r.a.createElement("path",{strokeWidth:"30",d:"m467.101562 26.527344c-3.039062-1.800782-6.796874-1.871094-9.898437-.179688l-108.296875 59.132813v-35.480469c-.03125-27.601562-22.398438-49.96875-50-50h-248.90625c-27.601562.03125-49.96875 22.398438-50 50v197.421875c.03125 27.601563 22.398438 49.96875 50 50h248.90625c27.601562-.03125 49.96875-22.398437 50-50v-34.835937l108.300781 59.132812c3.097657 1.691406 6.859375 1.625 9.894531-.175781 3.039063-1.804688 4.898438-5.074219 4.898438-8.601563v-227.816406c0-3.53125-1.863281-6.796875-4.898438-8.597656zm-138.203124 220.898437c-.015626 16.5625-13.4375 29.980469-30 30h-248.898438c-16.5625-.019531-29.980469-13.4375-30-30v-197.425781c.019531-16.558594 13.4375-29.980469 30-30h248.90625c16.558594.019531 29.980469 13.441406 30 30zm123.101562-1.335937-103.09375-56.289063v-81.535156l103.09375-56.285156zm0 0"})))},q=function(e){return r.a.createElement(Y.a,Object.assign({component:$},e))},G=a(49),Q=Object(G.a)(),V=(a(252),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClickMenuItem=function(e){Q.push(e)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{width:256,position:"fixed"}},r.a.createElement(K.a,{defaultSelectedKeys:["home"],mode:"inline",theme:"dark",style:{height:"95vh",display:"flex",flexDirection:"column",justifyContent:"center"}},r.a.createElement(K.a.Item,{className:"menu-item",key:"home",icon:r.a.createElement(W.a,null),onClick:function(t){return e.handleClickMenuItem("/")}},"Home"),r.a.createElement(K.a.Item,{className:"menu-item",key:"movie",icon:r.a.createElement(q,null),onClick:function(t){return e.handleClickMenuItem("/movie")}},"Movie"),r.a.createElement(K.a.Item,{className:"menu-item",key:"search",icon:r.a.createElement(J.a,null),onClick:function(t){return e.handleClickMenuItem("/search")}},"Search"),r.a.createElement(K.a.Item,{className:"menu-item",key:"profile",icon:r.a.createElement(F.a,null),onClick:function(t){return e.handleClickMenuItem("/profile")}},"Profile")))}}]),a}(n.Component)),X=p.a.Sider,Z=p.a.Content,ee=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(u.b,{history:Q},r.a.createElement(p.a,null,r.a.createElement(X,{collapsible:!0,defaultCollapsed:!0,width:"256"},r.a.createElement(V,null)),r.a.createElement(p.a,null,r.a.createElement(Z,{style:{backgroundColor:"#111d2c",overflow:"hidden"}},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:B}),r.a.createElement(u.a,{path:"/movie",component:H}),r.a.createElement(u.a,{path:"/search",component:R}),r.a.createElement(u.a,{path:"/profile",component:U}))))))}}]),a}(n.Component);var te=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[149,1,2]]]);
//# sourceMappingURL=main.ac7babde.chunk.js.map