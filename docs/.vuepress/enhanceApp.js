import Vue from 'vue';
import Element from 'element-ui'; // 引入elementUi
import 'element-ui/lib/theme-chalk/index.css';

import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css'; //样式文件

import TUI from 'atie-ui'; // 要编写对应的文档的包
import 'atie-ui/dist/atie-ui.css';

Vue.directive('highlight', function(el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});
export default ({ Vue, options, router, siteData }) => {
  Vue.use(Element);
  Vue.use(TUI);
};
