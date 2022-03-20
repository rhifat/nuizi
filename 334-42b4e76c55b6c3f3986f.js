"use strict";(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news||[]).push([[334],{1720:function(e,t,n){var o=n(7914);t.__esModule=!0,t.default=void 0;var i=o(n(2398)),r=o(n(5600)),d=o(n(4700)),a=o(n(7378)),s=o(n(3615)),u=n(168),l=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="undefined"!=typeof GATSBY_DISQUS_SHORTNAME&&""!==GATSBY_DISQUS_SHORTNAME?GATSBY_DISQUS_SHORTNAME:"",n}(0,d.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.className,o=e.placeholder,d=(0,r.default)(e,["config","className","placeholder"]),s="disqus-comment-count"+(n?" "+n:"");return a.default.createElement("span",(0,i.default)({className:s,"data-disqus-identifier":t.identifier,"data-disqus-url":t.url},d),o)},t}(a.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string}),placeholder:s.default.string,className:s.default.string}},9036:function(e,t,n){var o=n(7914);t.__esModule=!0,t.default=void 0;var i=o(n(2398)),r=o(n(5600)),d=o(n(4700)),a=o(n(7378)),s=o(n(3615)),u=function(e){function t(){return e.apply(this,arguments)||this}(0,d.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){var e=this.props,t=(e.commentId,e.showMedia,e.showParentComment,(0,r.default)(e,["commentId","showMedia","showParentComment"]));return a.default.createElement("iframe",(0,i.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},t))},t}(a.default.Component);t.default=u,u.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},u.propTypes={commentId:s.default.oneOfType([s.default.number,s.default.string]).isRequired,width:s.default.number,height:s.default.number,showMedia:s.default.bool,showParentComment:s.default.bool}},9451:function(e,t,n){var o=n(7914);t.__esModule=!0,t.default=void 0;var i=o(n(2398)),r=o(n(5600)),d=o(n(4700)),a=o(n(7378)),s=o(n(3615)),u=n(168),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="undefined"!=typeof GATSBY_DISQUS_SHORTNAME&&""!==GATSBY_DISQUS_SHORTNAME?GATSBY_DISQUS_SHORTNAME:"",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,d.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,u.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,u.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(o){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);var t=window.document.querySelector('[id^="dsq-app"]');if(t){var n=window.document.getElementById(t.id);n.parentNode.removeChild(n)}},n.render=function(){var e=this.props,t=(e.config,(0,r.default)(e,["config"]));return a.default.createElement("div",(0,i.default)({id:"disqus_thread"},t))},t}(a.default.Component);t.default=l,l.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string,language:s.default.string,remoteAuthS3:s.default.string,apiKey:s.default.string})}},2431:function(e,t,n){var o=n(7914);var i=o(n(9451));t.h$=i.default;var r=o(n(1720));t.dS=r.default,o(n(9036)).default,i.default},168:function(e,t,n){var o=n(7914);t.__esModule=!0,t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o;return function(){for(var i=arguments.length,r=new Array(i),d=0;d<i;d++)r[d]=arguments[d];var a=this,s=function(){o=null,n||e.apply(a,r)},u=n&&!o;window.clearTimeout(o),o=setTimeout(s,t),u&&e.apply(a,r)}},t.isReactElement=d,t.shallowComparison=function e(t,n){var o,r=new Set(Object.keys(t).concat(Object.keys(n))),a=(o=[]).concat.apply(o,(0,i.default)(r)).filter((function(o){if("object"==typeof t[o]){if(e(t[o],n[o]))return!0}else if(t[o]!==n[o]&&!d(t[o]))return!0;return!1}));return 0!==a.length};var i=o(n(6292)),r=o(n(7378));function d(e){return!!r.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return r.default.isValidElement(e)}))}},4334:function(e,t,n){n.r(t);n(7378);var o=n(8945),i=n(2431),r=n(6495);t.default=function(e){var t=e.title,n={identifier:e.id,title:t};return(0,r.tZ)(o.xu,null,(0,r.tZ)(o.iz,null),(0,r.tZ)(i.dS,{config:n,placeholder:""}),(0,r.tZ)(i.h$,{config:n}))}}}]);
//# sourceMappingURL=334-42b4e76c55b6c3f3986f.js.map