(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{203:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(28),r=a.n(o),s=(a(86),a(15)),c=a(16),l=a(18),d=a(17),u=a(19),m=a(204),p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={lastname:"",firstname:"",company:"",email:"",ticketType:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.history.location.state.code.replace(/"/g,"").split(",");this.setState({lastname:e[0]}),this.setState({firstname:e[1]}),this.setState({company:e[2]}),this.setState({email:e[3]}),this.setState({ticketType:e[4]})}},{key:"render",value:function(){return i.a.createElement("div",null,"Bonjour ",this.state.lastname," ",this.state.firstname,i.a.createElement("br",null),"de ",this.state.company,i.a.createElement("br",null),"tu receveras par mail ",this.state.email,i.a.createElement("br",null),this.state.ticketType,i.a.createElement("br",null),"C'est par ",i.a.createElement(m.a,{to:"associations"},"ici")," pour continuer")}}]),t}(n.Component),h=a(207),v=a(206),f=a(205),g=a(29),b=a.n(g),y=a(74),C=a.n(y),O=a(72),w=a.n(O),E=a(75),j=a.n(E),k=a(76),F=a.n(k),S=a(45),x=a.n(S),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={associations:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(w.a,{className:e.card},i.a.createElement(C.a,{className:e.cardImage,image:this.props.image,title:this.props.nom}),i.a.createElement(j.a,{className:e.cardContent},i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.nom),i.a.createElement(b.a,{component:"p",dangerouslySetInnerHTML:{__html:this.props.description.replace(/\n/g,"<br />")}})),i.a.createElement(F.a,null,i.a.createElement(x.a,{size:"large",color:"primary",component:m.a,to:"/scanner"},"Soutenir")))}}]),t}(n.Component),L=Object(f.withStyles)(function(){return{card:{display:"flex",marginBottom:15,minHeight:200},cardImage:{height:180,width:450,backgroundSize:"contain",alignSelf:"center"},cardContent:{flexGrow:1}}})(A),R=(a(77),{getAssociations:function(){return Promise.resolve([{id:1,nom:"Bretagne Vivante",image:"logo_bretagnevivante.png",description:"Consciente de ne pouvoir agir seule, Bretagne Vivante initie et contribue \xe0 de nombreux projets et d\xe9marches interassociatives, pour peser ensemble dans le d\xe9bat public.\nPour faire avancer la prise en compte de la nature, nous d\xe9veloppons aussi de nombreux partenariats avec l\u2019Etat, les collectivit\xe9s, les entreprises, les \xe9coles, les agriculteurs, etc."},{id:2,nom:"APF France Handicap",image:"apf.png",description:"APF France handicap propose, sur l\u2019ensemble du territoire national, tous les types d\u2019\xe9tablissements et services pour accompagner l\u2019inclusion de la personne en situation de handicap.\nNous avons \xe0 c\u0153ur d\u2019offrir aux personnes des r\xe9ponses diversifi\xe9es, au plus pr\xe8s de leurs attentes.\nNous privil\xe9gions un parcours inclusif pour tous, dans le respect des choix de vie de chacun."},{id:3,nom:"Action contre la Faim",image:"action_contre_faim.png",description:"Action contre la Faim lutte contre la faim dans le monde. Sa mission est de sauver des vies en \xe9liminant la faim par la pr\xe9vention,\nla d\xe9tection et le traitement de la sous-nutrition, en particulier pendant et apr\xe8s les situations d\u2019urgence li\xe9es aux conflits et aux catastrophes naturelles."}])}}),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={associations:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;R.getAssociations().then(function(t){e.setState({associations:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.associations},i.a.createElement(b.a,{gutterBottom:!0,variant:"h2",component:"h1"},"Associations"),this.state.associations.map(function(e){return i.a.createElement(L,{key:e.id,nom:e.nom,image:e.image,description:e.description})}))}}]),t}(n.Component),H=Object(f.withStyles)(function(){return{associations:{padding:15,backgroundColor:"#eeeeee"},card:{display:"flex",marginBottom:15,minHeight:200},cardImage:{height:180,width:450,backgroundSize:"contain",alignSelf:"center"},cardContent:{flexGrow:1}}})(D),B=a(78),W=a.n(B),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).videoRef=i.a.createRef(),a.canvasRef=i.a.createRef(),a.state={loading:!0,code:null,videoDevices:[]},a.tick=function(){a.analyzeVideoFrame(),requestAnimationFrame(a.tick)},a.analyzeVideoFrame=function(){var e=a.videoRef.current;if(a.state.loading&&e.readyState===e.HAVE_ENOUGH_DATA)a.setState({loading:!1,canvasWidth:e.videoWidth,canvasHeight:e.videoHeight});else if(!a.state.loading){var t=a.videoRef.current,n=a.canvasRef.current;if(null!==n){var i=n.getContext("2d");n.height=t.videoHeight,n.width=t.videoWidth,i.drawImage(t,0,0,n.width,n.height);var o=i.getImageData(0,0,n.width,n.height),r=W()(o.data,o.width,o.height,{inversionAttempts:"dontInvert"});a.setState({code:r}),r&&r.data&&a.props.history.push({pathname:"/identite",state:{code:r.data}})}}},a.drawLineAroundQRCode=function(e){var t="#FF3B58",n=e.location.topLeftCorner.x<a.state.canvasWidth/2&&e.location.topRightCorner.x<a.state.canvasWidth/2,i=e.location.topLeftCorner.x>a.state.canvasWidth/2&&e.location.topRightCorner.x>a.state.canvasWidth/2,o=e.location.topLeftCorner.y<a.state.canvasHeight/2&&e.location.bottomLeftCorner.y<a.state.canvasHeight/2,r=e.location.topLeftCorner.y>a.state.canvasHeight/2&&e.location.bottomLeftCorner.y>a.state.canvasHeight/2;o&&n?t="#00FF00":o&&i?t="#0000FF":r&&n?t="#00FFFF":r&&i&&(t="#FFFF00"),a.drawLineOnCanvas(e.location.topLeftCorner,e.location.topRightCorner,t),a.drawLineOnCanvas(e.location.topRightCorner,e.location.bottomRightCorner,t),a.drawLineOnCanvas(e.location.bottomRightCorner,e.location.bottomLeftCorner,t),a.drawLineOnCanvas(e.location.bottomLeftCorner,e.location.topLeftCorner,t)},a.drawLineOnCanvas=function(e,t,n){var i=a.canvasRef.current.getContext("2d");i.beginPath(),i.moveTo(e.x,e.y),i.lineTo(t.x,t.y),i.lineWidth=4,i.strokeStyle=n,i.stroke()},a.onEnumerateDevices=function(e){var t=e.filter(function(e){return"videoinput"===e.kind});a.setState({videoDevices:t})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.mediaDevices.enumerateDevices().then(this.onEnumerateDevices),navigator.mediaDevices.getUserMedia({video:{deviceId:"23ccb9f41f9998e0fa16662561502eecfd3a8f0b50c3d5385ac2b66489f76d72"}}).then(function(t){var a=e.videoRef.current;a.srcObject=t,a.setAttribute("playsinline",!0),a.play(),requestAnimationFrame(e.tick)})}},{key:"componentDidUpdate",value:function(){this.state.loading||this.state.code&&this.drawLineAroundQRCode(this.state.code)}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.loading&&i.a.createElement("p",null,"Loading..."),i.a.createElement("p",null,this.state.code?this.state.code.data:"Scan to give 1\u20ac"),i.a.createElement("video",{ref:this.videoRef,hidden:!0}),i.a.createElement("canvas",{ref:this.canvasRef,hidden:this.state.loading}))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement("div",null,i.a.createElement(v.a,{exact:!0,path:"/",component:H}),i.a.createElement(v.a,{path:"/scanner",component:I}),i.a.createElement(v.a,{path:"/identite",component:p})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a(203)},86:function(e,t,a){}},[[81,2,1]]]);
//# sourceMappingURL=main.6819ac2e.chunk.js.map