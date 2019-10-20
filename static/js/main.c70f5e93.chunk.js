(this["webpackJsonpproyecto-peliculas"]=this["webpackJsonpproyecto-peliculas"]||[]).push([[0],{35:function(e,t,a){e.exports=a(73)},40:function(e,t,a){},41:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),i=(a(40),a(41),a(7)),s=a(8),l=a(5),m=a.n(l),u=a(10),v=a(12),p=a(13),g=a(16),d=a(14),h=a(17),b=a(15),f=a.n(b);a(48);var y=function(e){var t=e.movie;return r.a.createElement("div",{className:"CardMovie"},r.a.createElement("div",{className:"card",style:{width:"12rem"}},r.a.createElement("img",{className:"card-img-top",style:{height:"18rem"},src:"https://image.tmdb.org/t/p/w300/".concat(t.poster_path),alt:"Cover Page "}),r.a.createElement("div",{className:"body-card",style:{height:"6rem"}},r.a.createElement("div",{className:"text-card"},t.original_title),r.a.createElement(f.a,{className:"star-rate",rating:t.vote_average/2,starRatedColor:"#4DFF00",numberOfStars:5,name:"rating",starDimension:"1.3rem",starSpacing:"0.1rem"}))))};a(49);var E=function(e){var t=e.movies;return r.a.createElement("div",{className:"MovieList"},t.map((function(e){return r.a.createElement(i.b,{to:"/movie/"+e.id,key:e.id},r.a.createElement(y,{movie:e,key:e.id}))})))},N=a(21),k=a.n(N),w=new(function(){function e(){Object(v.a)(this,e),this.APIKEY="59736b18d8c85c42d5e6972d751046c6"}return Object(p.a)(e,[{key:"getMoviesByCategory",value:function(){var e=Object(u.a)(m.a.mark((function e(t){var a,n,r,c=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,k.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(this.APIKEY,"&language=es-ES&page=").concat(a));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var e=Object(u.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(this.APIKEY,"&language=es-ES"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),O=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(g.a)(this,Object(d.a)(t).call(this,e))).state={movies:[],currentCategory:"",updatingFilms:!1},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getDataMoviesFromAPI()}},{key:"componentDidUpdate",value:function(){this.state.currentCategory!==this.props.match.params.categoryName&&this.getDataMoviesFromAPI()}},{key:"getDataMoviesFromAPI",value:function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.categoryName,e.next=3,w.getMoviesByCategory(t);case 3:a=e.sent,this.setState({movies:a.results,currentCategory:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"MoviesCategory"},r.a.createElement(E,{movies:this.state.movies}))}}]),t}(n.Component),C=(a(70),function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(g.a)(this,Object(d.a)(t).call(this,e))).state={movie:[]},a.getMovieFromAPI(),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"getMovieFromAPI",value:function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,w.getMoviesByCategory(t);case 3:a=e.sent,this.setState({movie:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isFiveStarsUndefined",value:function(){return void 0===this.state.movie.vote_average?0:this.state.movie.vote_average/2}},{key:"render",value:function(){var e=this.state.movie;return r.a.createElement("div",{className:"MovieDetail"},r.a.createElement("div",{className:"header-photo",style:{backgroundImage:"url('https://image.tmdb.org/t/p/original/".concat(e.backdrop_path,"')")}},r.a.createElement("h1",{className:"film-title"},e.title),r.a.createElement("h6",{className:"origin-title-date"},e.original_title," (",e.release_date,")"),r.a.createElement("a",{className:"link-movie",href:e.homepage,target:"_blank",rel:"noopener noreferrer"},e.homepage),r.a.createElement("div",{className:"rate-stars-movie"},r.a.createElement(f.a,{rating:this.isFiveStarsUndefined(),starRatedColor:"#4DFF00",numberOfStars:5,name:"rating",starDimension:"2rem",starSpacing:"0.2rem"}))),r.a.createElement("div",{className:"below-description"},r.a.createElement("h4",{className:"one-sentence-description"},e.tagline),r.a.createElement("h4",{className:"text-description"},e.overview)))}}]),t}(n.Component));var j=function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("h1",null,"404"))};a(71);var M=Object(s.g)((function(e){return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("form",{className:"navigationBar"},r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-dark",type:"button",onClick:function(){return e.history.goBack()}},"Atras")),r.a.createElement("div",null,r.a.createElement(i.c,{className:"navigation-link",to:"/category/popular",activeClassName:"no-active"},r.a.createElement("button",{className:"btn btn-dark",type:"button"},"Popular")),r.a.createElement(i.c,{className:"navigation-link",to:"/category/top_rated",activeClassName:"no-active"},r.a.createElement("button",{className:"btn btn-dark",type:"button"},"Mejor Valoradas")),r.a.createElement(i.c,{className:"navigation-link",to:"/category/upcoming",activeClassName:"no-active"},r.a.createElement("button",{className:"btn btn-dark",type:"button"},"Proximamente")),r.a.createElement(i.c,{className:"navigation-link",to:"/category/now_playing",activeClassName:"no-active"},r.a.createElement("button",{className:"btn btn-dark",type:"button"},"Cartelera")))))}));var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{basename:"/"},r.a.createElement(M,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/category/:categoryName",exact:!0,component:O}),r.a.createElement(s.b,{path:"/movie/:id",exact:!0,component:C}),r.a.createElement(s.a,{path:"/",to:"category/popular"}),r.a.createElement(s.b,{component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(72);o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.c70f5e93.chunk.js.map