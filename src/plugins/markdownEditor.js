// vuepress主体 MD编辑器
// import Vue from 'vue';
// import VueMarkdownEditor from '@kangc/v-md-editor';
// import '@kangc/v-md-editor/lib/style/preview.css';
// import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
// import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// import Prism from 'prismjs';

// VueMarkdownEditor.use(vuepressTheme, {
//   Prism,
// });

// Vue.use(VueMarkdownEditor);


// github主题 MD编辑器
import Vue from 'vue';
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

Vue.use(VMdEditor);