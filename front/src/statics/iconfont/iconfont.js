import { createGlobalStyle } from "styled-components";
const IconStyle = createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 3384539 */
  src: url('./iconfont.eot?t=1652508574258'); /* IE9 */
  src: url('./iconfont.eot?t=1652508574258#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
       url('./iconfont.woff?t=1652508574258') format('woff'),
       url('./iconfont.ttf?t=1652508574258') format('truetype'),
       url('./iconfont.svg?t=1652508574258#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.bigiconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.bigbigiconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-welcome:before {
  content: "\e712";
}

.icon-Welcome:before {
  content: "\e62d";
}

.icon-pinglun:before {
  content: "\e6ad";
}

.icon-shoucang:before {
  content: "\e604";
}

.icon-good:before {
  content: "\e62a";
}

.icon-dengchu:before {
  content: "\eb45";
}

.icon-shouye:before {
  content: "\e601";
}

.icon-wenhao:before {
  content: "\e72d";
}

.icon-denglu:before {
  content: "\e67c";
}

.icon-spin:before {
  content: "\e851";
}

.icon-yongyan:before {
  content: "\e600";
}

.icon-fangdajing:before {
  content: "\e617";
}

.icon-Aa:before {
  content: "\e636";
}

.icon-shujia:before {
  content: "\e620";
}
`
export default IconStyle;