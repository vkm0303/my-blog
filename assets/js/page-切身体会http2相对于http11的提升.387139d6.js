(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{591:function(t,s,a){t.exports=a.p+"assets/img/request.048f7746.png"},814:function(t,s,a){"use strict";a.r(s);var e=a(1),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"遇到的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[t._v("#")]),t._v(" 遇到的问题")]),t._v(" "),e("p",[t._v("之前一直在苦恼自己博客首次加载速度巨慢的问题，三十多秒才把博客文章列表加载出来，又不想动源码，所以就在nginx寻找可优化的点。")]),t._v(" "),e("h2",{attrs:{id:"解决过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决过程"}},[t._v("#")]),t._v(" 解决过程")]),t._v(" "),e("p",[t._v("一开始尝试了gzip，略有提升，但是效果不大，通过浏览器的devTool发现，个别文件要加载很久，也就是三十多秒，因为http/1.1是单线程串行请求，所以这些请求就阻塞了后面的请求，导致了后面请求一直在等待(?线头阻塞)。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(591),alt:"request"}})]),t._v(" "),e("p",[t._v("然后今早起床，看了一下http/11和http/2的区别，然后就发现了http/2的新特性--多路复用。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("http/2多路复用")]),t._v(" "),e("p",[t._v("多个请求可以同时在一个连接上并行进行，请求不会出现阻塞的情况，也就是说，某个请求耗时严重，但是并不会影响到其它请求。")])]),t._v(" "),e("p",[t._v("看到这个，完全符合我的需求，兴致勃勃地去nginx配置http2，只需修改一行即可，在 "),e("code",[t._v("listen 443 ssl")]),t._v(" 后面添加 "),e("code",[t._v("http2 default_server")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("listen 443 ssl http2 default_server;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("配置完成只会，重载配置 =============> 从发起请求到博客文章列表显示约7s。")]),t._v(" "),e("p",[t._v("相对于之前来说已经有很大的提升了，至于怎么继续提高加载速度只能从其它方面寻找方法了。")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("最后对http/2的新特性做一个简单的总结，总的来说，http/2主要在低延迟方面进行优化。")]),t._v(" "),e("div",{staticClass:"custom-block info"},[e("p",{staticClass:"custom-block-title"},[t._v("头部压缩")]),t._v(" "),e("p",[t._v("http/2使用encoder来减小header的大小，另外双方各自缓存一份header fields表，避免header重复发送。")])]),t._v(" "),e("div",{staticClass:"custom-block info"},[e("p",{staticClass:"custom-block-title"},[t._v("二进制分帧")]),t._v(" "),e("p",[t._v("将所有的传输信息分割成更小的消息和帧并采用二进制编码。")])]),t._v(" "),e("div",{staticClass:"custom-block info"},[e("p",{staticClass:"custom-block-title"},[t._v("多路复用")]),t._v(" "),e("p",[t._v("同一个tcp连接上允许多个http请求同时进行，避免了http/1.1中出现的线头阻塞问题。")])]),t._v(" "),e("div",{staticClass:"custom-block info"},[e("p",{staticClass:"custom-block-title"},[t._v("服务端推送")]),t._v(" "),e("p",[t._v("这块还不是特别了解，只知道服务端可以主动向客户端推送资源，并且具有缓存机制，通过html文档的头部判断客户端将要使用的资源，然后由服务端主动推送，从而减少了客户端请求的这一步骤。")])])])}),[],!1,null,null,null);s.default=v.exports}}]);