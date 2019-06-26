// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
//网址类型
var nav = ['设计网站', '前端开发', '其他']; //存放网址名称

var design = ["Dribbble", "Behance", "UI中国", "站酷", "优设网", "花瓣网"];
var web = ["阮一峰", "MDN", "张鑫旭", "Codrops", "CSS-TRICKS", "JavaScript标准参考", "掘金", "github.com"];
var other = ["bilibili", "腾讯视频", "爱奇艺", "喜马拉雅", "懒人听书", "荔枝FM"]; //存放网址
//设计网址

var designWebsite = {
  'Dribbble': 'dribbble.com',
  'Behance': 'www.behance.net',
  'UI中国': 'www.ui.cn',
  '站酷': 'www.zcool.com.cn',
  '优设网': 'www.uisdc.com',
  '花瓣网': 'huaban.com' //前端开发

};
var webWebsite = {
  '阮一峰': 'www.ruanyifeng.com/',
  'MDN': 'developer.mozilla.org/',
  '张鑫旭': 'zhangxinxu.com.cn',
  'Codrops': 'tympanus.net/',
  'CSS-TRICKS': 'css-tricks.com',
  'JavaScript标准参考': 'javascript.ruanyifeng.com/',
  '掘金': 'juejin.im/',
  'github.com': 'github.com' //其他

};
var otherWebsite = {
  'bilibili': 'bilibili.com',
  '腾讯视频': 'v.qq.com',
  '爱奇艺': 'www.aiqiyi.com',
  '喜马拉雅': 'ximalaya.com',
  '懒人听书': 'lrts.me',
  '荔枝FM': 'lizhi.fm' //介绍
  //设计网站

};
var designIntroduce = {
  'Dribbble': '设计师作品分享平台，个人作品交流与分享',
  'Behance': 'Adobe旗下的设计师交流平台，来自世界各地的设计师在这里分享自己的作品',
  'UI中国': '图形交互与界面设计交流、作品展示、学习平台',
  '站酷': '设计师交流平台，分享与学习的好去处',
  '优设网': '国内优秀的设计师学习平台',
  '花瓣网': '设计师寻找灵感的天堂' //前端开发

};
var webIntroduce = {
  '阮一峰': '阮一峰的个人博客',
  'MDN': '网站提供开放网络(Open Web)技术有关的信息,包括用于网站和渐进式网络应用的 HTML、CSS 和 API',
  '张鑫旭': '张鑫旭的个人博客',
  'Codrops': '炫酷的CSS特效',
  'CSS-TRICKS': '炫酷的CSS特效',
  'JavaScript标准参考': 'JavaScript标准参考',
  '掘金': '掘金是一个帮助开发者成长的社区',
  'github': '开源及私有软件项目的托管平台' //其他

};
var otherIntroduce = {
  'bilibili': '国内知名的在线视频弹幕网站',
  '腾讯视频': '中国领先的在线视频媒体平台',
  '爱奇艺': '有海量、优质、高清的网络视频的大型视频网站,专业的网络视频播放平台',
  '喜马拉雅': '专业的音频分享平台',
  '懒人听书': '3.2亿用户选择的综合性有声阅读交流平台',
  '荔枝FM': '业的音频分享平台' //logo

};
var logo = {
  'Dribbble': '/images/Dribbble.png',
  'Behance': '/images/Behance.svg',
  'UI中国': '/images/UI中国.png',
  '站酷': '/images/站酷.jpeg',
  '优设网': '/images/优设.png',
  '花瓣网': '/images/花瓣.jpg' //快捷键

};
var keyboard1 = ['D', 'B', 'U', 'Z', 'S', 'H'];
var keyboard2 = ['R', 'M', 'X', 'C', 'T', 'J', 'CJ', 'G'];
var keyboard3 = ['CB', 'CT', 'A', 'CX', 'CL', 'AL'];
var designkbdWebsite = {
  'd': 'dribbble.com',
  'b': 'www.behance.net',
  'u': 'www.ui.cn',
  'z': 'www.zcool.com.cn',
  's': 'www.uisdc.com',
  'h': 'huaban.com'
};
var webkbdWebsite = {
  'r': 'www.ruanyifeng.com/',
  'm': 'developer.mozilla.org/',
  'x': 'zhangxinxu.com.cn',
  'c': 'tympanus.net/',
  't': 'css-tricks.com',
  'j': 'javascript.ruanyifeng.com/',
  'cj': 'juejin.im/',
  'g': 'github.com'
};
var otherkbdWebsite = {
  'cb': 'bilibili.com',
  'ct': 'v.qq.com',
  'a': 'www.aiqiyi.com',
  'cx': 'ximalaya.com',
  'cl': 'www.lrts.me',
  'al': 'lizhi.fm'
};
var userKbd = {
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
};
},{}],"../../../.npm/_npx/5439/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59759" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.npm/_npx/5439/lib/node_modules/parcel/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map