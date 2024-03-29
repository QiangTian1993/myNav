 //网址类型
 let nav = ['设计网站', '前端开发', '其他']

 //存放网址名称
 let design = ["Dribbble", "Behance", "UI中国", "站酷", "优设网", "花瓣网"]
 let web = ["阮一峰", "MDN", "张鑫旭", "Codrops", "CSS-TRICKS", "JavaScript标准参考", "掘金", "github"]
 let other = ["bilibili", "腾讯视频", "爱奇艺", "喜马拉雅", "懒人听书", "荔枝FM"]

 //存放网址

 //设计网址
 let designWebsite = {
     'Dribbble': 'dribbble.com',
     'Behance': 'www.behance.net',
     'UI中国': 'www.ui.cn',
     '站酷': 'www.zcool.com.cn',
     '优设网': 'www.uisdc.com',
     '花瓣网': 'huaban.com'
 }

 //前端开发
 let webWebsite = {
     '阮一峰': 'www.ruanyifeng.com/',
     'MDN': 'developer.mozilla.org/',
     '张鑫旭': 'zhangxinxu.com.cn',
     'Codrops': 'tympanus.net/',
     'CSS-TRICKS': 'css-tricks.com',
     'JavaScript标准参考': 'javascript.ruanyifeng.com/',
     '掘金': 'juejin.im/',
     'github': 'github.com'
 }

 //其他
 let otherWebsite = {
     'bilibili': 'bilibili.com',
     '腾讯视频': 'v.qq.com',
     '爱奇艺': 'www.aiqiyi.com',
     '喜马拉雅': 'ximalaya.com',
     '懒人听书': 'lrts.me',
     '荔枝FM': 'lizhi.fm'
 }

 //介绍

 //设计网站
 let designIntroduce = {
     'Dribbble': '设计师作品分享平台，个人作品交流与分享',
     'Behance': 'Adobe旗下的设计师交流平台，来自世界各地的设计师在这里分享自己的作品',
     'UI中国': '图形交互与界面设计交流、作品展示、学习平台',
     '站酷': '设计师交流平台，分享与学习的好去处',
     '优设网': '国内优秀的设计师学习平台',
     '花瓣网': '设计师寻找灵感的天堂'
 }

 //前端开发
 let webIntroduce = {
     '阮一峰': '阮一峰的个人博客',
     'MDN': '网站提供开放网络(Open Web)技术有关的信息,包括用于网站和渐进式网络应用的 HTML、CSS 和 API',
     '张鑫旭': '张鑫旭的个人博客',
     'Codrops': '炫酷的CSS特效',
     'CSS-TRICKS': '炫酷的CSS特效',
     'JavaScript标准参考': 'JavaScript标准参考',
     '掘金': '掘金是一个帮助开发者成长的社区',
     'github': '开源及私有软件项目的托管平台'
 }

 //其他
 let otherIntroduce = {
     'bilibili': '国内知名的在线视频弹幕网站',
     '腾讯视频': '中国领先的在线视频媒体平台',
     '爱奇艺': '有海量、优质、高清的网络视频的大型视频网站,专业的网络视频播放平台',
     '喜马拉雅': '专业的音频分享平台',
     '懒人听书': '3.2亿用户选择的综合性有声阅读交流平台',
     '荔枝FM': '业的音频分享平台'
 }

 //logo
 let logo = {
     'Dribbble': '/images/Dribbble.png',
     'Behance': '/images/Behance.svg',
     'UI中国': '/images/UI中国.png',
     '站酷': '/images/站酷.jpeg',
     '优设网': '/images/优设.png',
     '花瓣网': '/images/花瓣.jpg',
 }

 //快捷键
 let keyboard1 = ['D', 'B', 'U', 'Z', 'S', 'H']
 let keyboard2 = ['R', 'M', 'X', 'C', 'T', 'J', 'CJ', 'G']
 let keyboard3 = ['CB', 'CT', 'A', 'CX', 'CL', 'AL']

 let designkbdWebsite = {
     'd': 'dribbble.com',
     'b': 'www.behance.net',
     'u': 'www.ui.cn',
     'z': 'www.zcool.com.cn',
     's': 'www.uisdc.com',
     'h': 'huaban.com',
 }

 let webkbdWebsite = {
     'r': 'www.ruanyifeng.com/',
     'm': 'developer.mozilla.org/',
     'x': 'zhangxinxu.com.cn',
     'c': 'tympanus.net/',
     't': 'css-tricks.com',
     'j': 'javascript.ruanyifeng.com/',
     'cj': 'juejin.im/',
     'g': 'github.com'
 }

 let otherkbdWebsite = {
     'cb': 'bilibili.com',
     'ct': 'v.qq.com',
     'a': 'www.aiqiyi.com',
     'cx': 'ximalaya.com',
     'cl': 'www.lrts.me',
     'al': 'lizhi.fm'
 }

 let userKbd = {
     'd': 'dribbble.com',
     'b': 'www.behance.net',
     'u': 'www.ui.cn',
     'z': 'www.zcool.com.cn',
     's': 'www.uisdc.com',
     'h': 'huaban.com',
     'r': 'www.ruanyifeng.com/',
     'm': 'developer.mozilla.org/',
     'x': 'zhangxinxu.com.cn',
     'c': 'tympanus.net/',
     't': 'css-tricks.com',
     'j': 'javascript.ruanyifeng.com/',
     'cj': 'juejin.im/',
     'g': 'github.com',
     'cb': 'bilibili.com',
     'ct': 'v.qq.com',
     'a': 'aiqiyi.com',
     'cx': 'ximalaya.com',
     'cl': 'www.lrts.me',
     '¬': 'lizhi.fm'
 }


 //创建标签函数
 function createTag(tagName) {
     return document.createElement(tagName)
 }

 function imagesLink(dimain) {
     let img = createTag('img')
     img.src = 'http://' + dimain + '/favicon.ico'
     img.onerror = function(sb) {
         sb.target.src = './images/Dribbble.png'
     }
     return img
 }

 //遍历网站类型
 for (index2 = 0; index2 < nav.length; index2 = index2 + 1) {

     let div = createTag('div')
     let titleBox = createTag('div')
     let innerBox = createTag("div")
     let titleInner = createTag('h1')

     innerBox.className = 'inner clearfix'

     mainInner.appendChild(div)

     div.appendChild(titleBox)
     div.appendChild(innerBox)
     div.id = nav[index2]

     titleBox.className = "title"
     titleBox.appendChild(titleInner)
     titleInner.textContent = nav[index2]

     if (index2 == 0) {
         for (index = 0; index < design.length; index = index + 1) {
             let a = createTag('a')
             innerBox.appendChild(a)
             let h2inner = design[index]
                 //动态赋值
             a.href = 'http://' + designWebsite[h2inner]
             a.target = '_blank'

             let innerMain = createTag('div')
             innerMain.className = 'nav'
             a.appendChild(innerMain)

             let kbd = createTag('kbd')
             innerMain.appendChild(kbd)
             kbd.textContent = keyboard1[index]

             let img = imagesLink(designWebsite[h2inner])
             innerMain.appendChild(img)


             let text = createTag('div')
             text.className = "text"
             innerMain.appendChild(text)

             let h1 = createTag('h1')
             let h2 = createTag('h2')
             text.appendChild(h1)
             text.appendChild(h2)

             h1.textContent = design[index]
             h2.textContent = designIntroduce[h2inner]

             // 获取网站logo
             // img.src = 'http://' + website[h2inner] + ':8080' + '/favicon.ico'
             // img.src = 'https://www.google.com/s2/favicons?domain=' + 'http://' + website[h2inner]
             // img.src = 'https://favicon.link/v3/?url=' + website[h2inner]
             // img.src = 'http://' + designWebsite[h2inner] + '/favicon.ico'
         }

     } else if (index2 == 1) {
         for (index = 0; index < web.length; index = index + 1) {
             let a = createTag('a')
             innerBox.appendChild(a)
             let h2inner = web[index]
                 //动态赋值
             a.href = 'http://' + webWebsite[h2inner]
             a.target = '_blank'

             let innerMain = createTag('div')
             innerMain.className = 'nav'
             a.appendChild(innerMain)

             let kbd = createTag('kbd')
             innerMain.appendChild(kbd)
             kbd.textContent = keyboard2[index]


             let img = imagesLink(webWebsite[h2inner])
             innerMain.appendChild(img)

             let text = createTag('div')
             text.className = "text"
             innerMain.appendChild(text)

             let h1 = createTag('h1')
             let h2 = createTag('h2')
             text.appendChild(h1)
             text.appendChild(h2)

             h1.textContent = web[index]
             h2.textContent = webIntroduce[h2inner]

             //获取网站logo
             // img.src = 'http://' + website[h2inner] + ':8080' + '/favicon.ico'
             // img.src = 'https://www.google.com/s2/favicons?domain=' + 'http://' + webWebsite[h2inner]
             // img.src = 'https://favicon.link/v3/?url=' + webWebsite[h2inner]
         }
     } else if (index2 == 2) {
         for (index = 0; index < other.length; index = index + 1) {
             let a = createTag('a')
             innerBox.appendChild(a)
             let h2inner = other[index]
                 //动态赋值
             a.href = 'http://' + otherWebsite[h2inner]
             a.target = '_blank'

             let innerMain = createTag('div')
             innerMain.className = 'nav'
             a.appendChild(innerMain)

             let kbd = createTag('kbd')
             innerMain.appendChild(kbd)
             kbd.textContent = keyboard3[index]

             let img = imagesLink(otherWebsite[h2inner])
             innerMain.appendChild(img)

             let text = createTag('div')
             text.className = "text"
             innerMain.appendChild(text)

             let h1 = createTag('h1')
             let h2 = createTag('h2')
             text.appendChild(h1)
             text.appendChild(h2)

             h1.textContent = other[index]
             h2.textContent = otherIntroduce[h2inner]

             //获取网站logo
             // img.src = 'http://' + website[h2inner] + ':8080' + '/favicon.ico'
             // img.src = 'https://www.google.com/s2/favicons?domain=' + 'http://' + webWebsite[h2inner]
             // img.src = 'https://favicon.link/v3/?url=' + webWebsite[h2inner]
         }
     }
 }

 //监听用户键盘事件

 //键盘监听事件开关，默认开启
 let keySwitch = true

 input.onfocus = function() {
     //当搜索框获焦时关闭键盘监听事件
     keySwitch = !keySwitch
     document.onkeypress = function useKey(onkeypress) {}
 }
 if (keySwitch) { //当开关的值为true时打开键盘监听事件
     input.onblur = function() {
         document.onkeypress = function useKey(onkeypress) {
             let key = onkeypress['key']
             let ctrlKey = onkeypress['ctrlKey']
             if (ctrlKey == true) {
                 var key1 = 'c' + key
                 window.open('http://' + userKbd[key1])
             } else if (key == 'Enter') {
                 let userText = document.getElementById('input').value
                 let url = 'http://www.baidu.com/s?wd=' + userText
                 window.open(url)
             } else {
                 window.open('http://' + userKbd[key])
             }
         }
     }
 }


 //获取input内文案并提交到百度搜索
 let btn = document.getElementById('btn')
 btn.onclick = function() {
     let userText = document.getElementById('input').value
     let url = 'http://www.baidu.com/s?wd=' + userText
     window.open(url)
 }