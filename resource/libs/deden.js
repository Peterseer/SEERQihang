
var deden; !
function(t) {
    var e = function() {
        function t(t, e, a, i) {
            function s(t) {
                return (1 << t) - 1
            }
            var r = t && t.constructor == Array ? t.slice() : [],
            e = 0 | e,
            a = 0 | a,
            i = Math.max(0 | (i || 8), 1),
            n = s(i),
            o = 4294967295;
            this.read = function() {
                var t;
                return e >= a ? 0 : (t = i > 32 - e % 32 ? ((r[e >> 5] & s(32 - e % 32)) << (e + i) % 32 | r[(e >> 5) + 1] >>> 32 - (e + i) % 32) & n: r[e >> 5] >>> 32 - (e + i) % 32 & n, e += i, t)
            },
            this.eof = function() {
                return e >= a
            },
            this.reset = function() {
                e = 0,
                n = s(i)
            },
            this.resetAll = function() {
                r = [],
                e = 0,
                a = 0,
                i = 8,
                n = s(i),
                o = 4294967295
            },
            this.setBitLength = function(t) {
                i = Math.max(0 | t, 1),
                n = s(i)
            }
        }
        var e = (__define, t);
        e.prototype;
        return t
    } ();
    t.Binary = e,
    egret.registerClass(e, "deden.Binary")
} (deden || (deden = {}));
var BC; !
function(t) {
    function e() {
        return t.addEvent = i.addEvent,
        t.addOnceEvent = i.addOnceEvent,
        t.removeEvent = i.removeEvent,
        t.delegate = i.delegate,
        t.delegate2 = i.delegate2,
        !0
    }
    var a = function() {
        function t() {
            this._count = 0,
            this._maps = {},
            this._hashMaps = {},
            this._objKeys = [],
            this._objDatum = []
        }
        var e = __define,
        a = t,
        i = a.prototype;
        return i.add = function(t, e) {
            if ("object" != typeof t) null == this._maps[t] && this._count++,
            this._maps[t] = e;
            else if (t instanceof egret.HashObject) null == this._hashMaps[t.hashCode] && this._count++,
            this._hashMaps[t.hashCode] = [t, e];
            else {
                var a = this._objKeys.lastIndexOf(t); - 1 == a ? (this._objKeys.push(t), this._objDatum.push(e), this._count++) : this._objDatum[a] = e
            }
        },
        i.del = function(t) {
            var e, a;
            return "object" != typeof t ? null != this._maps[t] && (e = this._maps[t], delete this._maps[t], this._count--) : t instanceof egret.HashObject ? null != this._hashMaps[t.hashCode] && (e = this._hashMaps[t.hashCode], delete this._hashMaps[t.hashCode], this._count--) : (a = this._objKeys.lastIndexOf(t), -1 != a && (e = this._objDatum[a], this._objKeys.splice(a, 1), this._objDatum.splice(a, 1), this._count--)),
            e
        },
        i.get = function(t, e) {
            if ("object" != typeof t) return null == this._maps[t] ? (void 0 !== e && (this._maps[t] = e, this._count++), e) : this._maps[t];
            if (t instanceof egret.HashObject) return null == this._hashMaps[t.hashCode] ? (void 0 !== e && (this._hashMaps[t.hashCode] = e, this._count++), e) : this._hashMaps[t.hashCode][1];
            var a = this._objKeys.lastIndexOf(t);
            return - 1 != a ? this._objDatum[a] : (void 0 !== e && (this._objKeys.push(t), this._objDatum.push(e), this._count++), e)
        },
        i.has = function(t) {
            if ("object" != typeof t) return this._maps[t] ? !0 : !1;
            if (t instanceof egret.HashObject) return this._hashMaps[t.hashCode] ? !0 : !1;
            var e = this._objKeys.lastIndexOf(t);
            return - 1 != e ? !0 : !1
        },
        e(i, "count",
        function() {
            return this._count
        }),
        i.forEach = function(t, e) {
            void 0 === e && (e = null);
            var a, i;
            for (a in this._maps) t.call(e, a, this._maps[a]);
            for (a in this._hashMaps) i = this._hashMaps[a],
            t.call(e, i[0], i[1]);
            for (var s = 0; s < this._objKeys.length; s++) {
                var r = this._objKeys[s];
                t.call(e, this._objKeys[s], this._objDatum[s]),
                r != this._objKeys[s] && s--
            }
        },
        e(i, "elements",
        function() {
            var t, e, a = [];
            for (t in this._maps) a.push({
                key: t,
                data: this._maps[t]
            });
            for (t in this._hashMaps) e = this._hashMaps[t],
            a.push({
                key: e[0],
                data: e[1]
            });
            for (var i = this._objKeys.length,
            s = 0; i > s; s++) a.push({
                key: this._objKeys[s],
                data: this._objDatum[s]
            });
            return a
        }),
        e(i, "keys",
        function() {
            var t, e = [];
            for (t in this._maps) e.push(t);
            for (t in this._hashMaps) e.push(this._hashMaps[t][0]);
            return e = e.concat(this._objKeys)
        }),
        e(i, "datum",
        function() {
            var t, e = [];
            for (t in this._maps) e.push(this._maps[t]);
            for (t in this._hashMaps) e.push(this._hashMaps[t][1]);
            return e = e.concat(this._objDatum)
        }),
        i.destroy = function() {
            this._maps = {},
            this._hashMaps = {},
            this._objKeys.length = 0,
            this._objDatum.length = 0
        },
        i.dump = function() {
            var t, e;
            for (t in this._maps) console.log("key:", t, "---> data:", this._maps[t]);
            for (t in this._hashMaps) e = this._hashMaps[t],
            console.log("key:", e[0], "---> data:", e[1]);
            for (var a = this._objKeys.length,
            i = 0; a > i; i++) console.log("key:", typeof this._objKeys[i], " ---> data:", this._objDatum[i])
        },
        t
    } ();
    t.Dictionary = a,
    egret.registerClass(a, "BC.Dictionary");
    var i = function() {
        function t() {}
        var e = (__define, t);
        e.prototype;
        return t.addEvent = function(e, a, i, s, r, n, o) {
            void 0 === r && (r = !1),
            void 0 === n && (n = 0),
            void 0 === o && (o = !1),
            a && e && i && s || console.error("添加事件监听参数缺少:", t.addEvent.arguments),
            a.addEventListener(i, s, e, r, n, o),
            t.instances.push([e, a, i, s, r, n, o])
        },
        t.addOnceEvent = function(e, a, i, s, r, n, o) {
            void 0 === r && (r = !1),
            void 0 === n && (n = 0),
            void 0 === o && (o = !1),
            t.addEvent(e, a, i, s, r, n, o);
            var h = function(n) {
                t.removeEvent(e, a, i, h, r),
                t.removeEvent(e, a, i, s, r)
            };
            t.addEvent(e, a, i, h, r, n, o)
        },
        t.removeEvent = function(e, a, i, s, r) {
            if (void 0 === a && (a = null), void 0 === i && (i = null), void 0 === s && (s = null), void 0 === r && (r = !1), !e) return void console.error("监听者参数不能为空！", t.removeEvent.arguments);
            var n, o, h, c, l = t.instanceslib,
            u = 0,
            d = !0;
            a ? u |= 4 : 0,
            i ? u |= 2 : 0,
            s ? u |= 1 : 0;
            var p, _, m = function() {
                switch (d = !0, u) {
                case 0:
                    n[1].removeEventListener(n[2], n[3], e, n[4]);
                    break;
                case 1:
                    n[3] == s ? n[1].removeEventListener(n[2], n[3], e, n[4]) : d = !1;
                    break;
                case 2:
                    n[2] == i ? n[1].removeEventListener(n[2], n[3], e, n[4]) : d = !1;
                    break;
                case 3:
                    n[2] == i && n[3] == s ? n[1].removeEventListener(n[2], n[3], e, n[4]) : d = !1;
                    break;
                case 4:
                    n[1] == a ? n[1].removeEventListener(n[2], n[3], e, n[4]) : d = !1;
                    break;
                case 5:
                    n[1] == a && n[3] == s ? n[1].removeEventListener(n[2], n[3], e, n[4]) : d = !1;
                    break;
                case 6:
                    n[1] == a && n[2] == i ? n[1].removeEventListener(n[2], n[3], e, n[4]) : d = !1;
                    break;
                case 7:
                    n[1] == a && n[2] == i && n[3] == s ? n[1].removeEventListener(i, s, e, r) : d = !1
                }
            };
            if (o = l.get(e)) {
                for (p = o.length, _ = p - 1; _ >= 0; _--) n = o[_],
                m(),
                d && o.splice(_, 1);
                o.length || l.del(e)
            }
            for (o = t.instances, p = o.length, o = o.reverse(), _ = p - 1; _ >= 0; _--) n = o[_],
            n[0] == e ? m() : d = !1,
            d ? o.pop() : h == n[0] ? c.push(o.pop()) : (h = o[o.length - 1][0], c = l.get(h), c ? c.push(o.pop()) : (c = [o.pop()], l.add(n[0], c)))
        },
        t.delegate = function(t, e) {
            for (var a = [], i = 2; i < arguments.length; i++) a[i - 2] = arguments[i];
            if (!e) throw "没有可代理的函数.";
            var s = function() {
                for (var i = [], s = 0; s < arguments.length; s++) i[s - 0] = arguments[s];
                e.apply(t, i.concat(a))
            };
            return s
        },
        t.delegate2 = function(t, e) {
            for (var a = [], i = 2; i < arguments.length; i++) a[i - 2] = arguments[i];
            if (!e) throw "没有可代理的函数.";
            var s = function() {
                for (var i = [], s = 0; s < arguments.length; s++) i[s - 0] = arguments[s];
                e.apply(t, a)
            };
            return s
        },
        t.instanceslib = new a,
        t.instances = [],
        t
    } ();
    egret.registerClass(i, "____class"),
    t.hasInitialized = e()
} (BC || (BC = {}));
var deden; !
function(t) {
    function e() {
        RES.registerAnalyzer("deden", t.DedenSheetAnalyzer),
        t.setCanvasSize = i.setCanvasSize,
        egret.ExternalInterface.addCallback("checkHasDedenNative",
        function(t) {
            a.hasDedenNative = !0
        }),
        egret.ExternalInterface.call("checkHasDedenNative", ""),
        egret.ExternalInterface.addCallback("upzip",
        function(t) {
            for (var e = a.nativeUnZipCallbackDic.get(t), i = t.replace(/\.zip\S*/, "/"), s = 0; s < e.length; s++) e[s](i);
            a.nativeUnZipCallbackDic.del(t)
        });
        return console.log("deden已初始化!"),
        !0
    }
    t.registerClass = function(t, e, a) {
        var i, s, r = e.split("."),
        n = r.pop();
        if (r.length) {
            do s = r.shift(),
            i ? i[s] ? i = i[s] : (i[s] = {},
            i = i[s]) : __global[s] ? i = __global[s] : __global[s] = i = {};
            while (r.length);
            i[n] || (i[n] = t)
        } else __global[n] || (__global[n] = t);
        egret.registerClass.apply(this, [t, e, a])
    };
    var a = function(e) {
        function a() {
            e.call(this),
            this._dataFormat = egret.HttpResponseType.ARRAY_BUFFER
        }
        __extends(a, e);
        var i = (__define, a),
        s = i.prototype;
        return s.onLoadFinish = function(e) {
            var i, s, r, n, o, h, c = this,
            l = e,
            u = l.target;
            if (i = this.resItemDic[u.hashCode], s = i.item, r = i.func, s.loaded = l.type == egret.Event.COMPLETE, o = s.name, h = u.response || u.data, s.loaded) {
                if ( - 1 != s.url.indexOf("blob:")) {
                    var d;
                    JSZip.support.blob && (d = window.URL || window.webkitURL, d.revokeObjectURL(s.url))
                }
                if ("ArrayBuffer" == egret.getQualifiedClassName(h).trim()) {
                    s.data || (s.data = {
                        loaded: !0,
                        name: s.name,
                        type: s.type,
                        url: s.url
                    }),
                    s.data.loaderHashCode || (s.data.loaderHashCode = u.hashCode);
                    var p = function(t) {
                        s.data.reloadPath = t;
                        var e = t + "config.deden";
                        c.changeloadResource(n, e, egret.HttpResponseType.ARRAY_BUFFER)
                    };
                    if (n = s.data.dedenFile || {
                        warpgate: new t.StateUtil
                    },
                    this.parseDedenStreamHeaderType(n, h, s, p), a.hasDedenNative && !n) {
                        n = {
                            resourceLoader: i.thisObject,
                            _resItem: s,
                            responseData: i,
                            _compFunc: r,
                            groupName: s.name,
                            warpgate: new t.StateUtil
                        },
                        s.data.dedenFile = n,
                        s.loaded = !1;
                        var _ = s.url;
                        return void egret.ExternalInterface.call("upzip", _)
                    }
                    s.data.dedenFile ? (n.loaderHashCode = s.data.loaderHashCode, n.resourceLoader = s.data.dedenFile.resourceLoader, n._resItem = s.data.dedenFile._resItem, n._compFunc = s.data.dedenFile._compFunc, n._loader = s.data.dedenFile._loader) : (n.loaderHashCode = u.hashCode, n.resourceLoader = i.thisObject, n._resItem = s, n._compFunc = r, n._loader = u),
                    n.reloadPath = s.data.reloadPath,
                    n.responseData = i,
                    n.groupName = s.name,
                    s.data.dedenFile = n,
                    n.warpgate.addCallback(this.loadNextResource, this, n)
                } else h.constructor == egret.Texture ? (n = s.data.dedenFile, s.name = n.groupName + "." + n.currentImageName, this._analyzeBitmap(n, s, h), s.name = o, h = null, this.loadNextResource(n)) : h.constructor == egret.Sound ? (n = s.data.dedenFile, s.name = n.groupName + "." + n.currentImageName, this.analyzeSound(n, s, h), s.name = o, h = null, this.loadNextResource(n)) : (n = s.data.dedenFile, "soundConfig.json" == n.currentImageName ? (s.name = n.groupName + "." + n.currentImageName, n.currentPackageInfo.soundConfig = JSON.parse(h), this.analyzeSoundConfig(n), s.name = o, h = null, this.loadNextResource(n)) : console.error("不支持的格式！" + s.url))
            } else this.clear(s.data ? s.data.dedenFile: null, i, u)
        },
        s.parseDedenStreamHeaderType = function(t, e, i, s) {
            var r, n = this,
            o = i.name,
            h = i.data;
            "string" == typeof e ? (r = new egret.ByteArray, r.writeUTFBytes(e), r.position = 0) : r = new egret.ByteArray(e.slice(0, 15));
            for (var c = "",
            l = ""; r.bytesAvailable && r.position < 10 && "," != l;) l = r.readUTFBytes(1),
            c += l;
            if (c = c.split(",")[0], "deden" == c) this.parseDedenStreamAndUnzipConfig(r, o, t, h);
            else if (a.hasDedenNative) {
                var u = i.url,
                d = a.nativeUnZipCallbackDic.get(u) || [];
                d.push(s),
                a.nativeUnZipCallbackDic.add(u, d)
            } else {
                var p = new JSZip;
                t._zip = p,
                p.loadAsync(e).then(function() {
                    p.file("config.deden").async("arraybuffer").then(function(e) {
                        r.buffer = e,
                        r.position = 0,
                        n.parseDedenStreamAndUnzipConfig(r, o, t, h)
                    })
                })
            }
        },
        s.parseDedenStreamAndUnzipConfig = function(t, e, a, i) {
            for (var s, r = this,
            n = "",
            o = ""; t.bytesAvailable && t.position < 15 && "." != n;) n = t.readUTFBytes(1),
            o += n;
            o = o.slice(0, -1),
            s = o.split(",");
            var h;
            if ("1" == s[0]) {
                a.version = t.readUnsignedByte(),
                a.imageType = t.readUnsignedByte();
                for (var c = t.buffer.byteLength,
                l = t.position,
                u = l,
                d = c - 1,
                p = u + 100; p > u && u != d;) {
                    t.position = u % c;
                    var _ = t.readByte();
                    t.position = d % c;
                    var m = t.readByte();
                    _ ^= m,
                    m = _ ^ m,
                    _ ^= m,
                    t.position = u % c,
                    t.writeByte(_),
                    t.position = d % c,
                    t.writeByte(m),
                    d--,
                    u++
                }
                t.buffer = t.buffer.slice(l);
                var f = new JSZip;
                return f.loadAsync(t.buffer).then(function() {
                    f.file("config.deden").async("string").then(function(t) {
                        h = t,
                        r.parseDedenConfig(a, h, i, e)
                    })
                }),
                void t.clear()
            }
            a.imageType = 0,
            a.version = 0,
            h = t.readUTFBytes(t.bytesAvailable),
            t.clear(),
            this.parseDedenConfig(a, h, i, e)
        },
        s.parseDedenConfig = function(e, a, i, s) {
            var r = JSON.parse(a);
            if (!e.imagesList) {
                e.imagesList = [];
                for (var n = 0; n < r.imageList.length; n++) e.imagesList.push([r.imageList[n], ""])
            }
            e.needloadSoundConfig = !0,
            e.packageName = r.packageName,
            e.currentPackageInfo = new t.SimplePackageData((i ? i.nameSpace: 0) || e.packageName, s),
            e.currentPackageInfo.imagesInfo = r.imagesInfo,
            e.currentPackageInfo.symbolsInfo = r.symbolsInfo,
            e.currentPackageInfo.symbolsInfo.sounds = r.soundsInfo,
            e.currentPackageInfo.frameRate = r.symbolsInfo.frameRate,
            this.joinToDomain(e, i),
            e.warpgate.isBreak = !1
        },
        s.joinToDomain = function(e, a) {
            a.applicationDomain;
            var i = e.currentPackageInfo,
            s = i.packageName,
            r = "",
            n = i.symbolsInfo.containers;
            for (var o in n) r += this.createClasses(o, s, t.SymbolType.getSymbolClassName(n[o].type));
            var h = "\n(function (__r) {" + r + "}(deden.registerClass))\n";
            try {
                var c = document.createElement("script");
                c.text = h,
                document.head.appendChild(c).parentNode.removeChild(c)
            } catch(l) {
                try {
                    __global ? eval.call(__global, h) : eval.call(window, h)
                } catch(l) {
                    try {
                        window.eval && window.eval(h)
                    } catch(l) {
                        console.error("无法解析资源类.", l)
                    }
                }
            }
        },
        s.createClasses = function(t, e, a) {
            var i = "\n            var " + t + " = (function (_super) {\n                __extends(" + t + ", _super);\n                function " + t + "() {\n                    _super.apply(this, arguments);\n                }\n                return " + t + ";\n            }(" + a + "));\n            __r(" + t + ",'" + e + "." + t + "');\n            ";
            return i
        },
        s.clear = function(t, e, a) {
            if (t) {
                this.recycler.push(t._loader);
                var e = this.resItemDic[t.loaderHashCode];
                e = e.item,
                delete e.data.dedenFile,
                delete this.resItemDic[t.loaderHashCode],
                t._resItem.url = t._resItem.data.url,
                t._compFunc.call(t.resourceLoader, t._resItem),
                t.currentSoundConfig = null,
                t.resourceLoader = null,
                t._resItem = null,
                t._compFunc = null,
                t._loader = null,
                t._zip = null,
                t.responseData = null
            } else this.recycler.push(a),
            delete this.resItemDic[a.hashCode],
            e.func.call(e.thisObject, e.item)
        },
        s.getZipOrNativeData = function(t, e, i) {
            if (a.hasDedenNative || !t._zip) return "";
            var s, r, n, o = t._zip;
            if (1 == e) {
                if (r = o.file(i)) {
                    if (t.warpgate.isBreak = !0, n = {},
                    0 == t.imageType) return JSZip.support.blob ? r.async("blob").then(function(e) {
                        n.data = e,
                        t.warpgate.isBreak = !1
                    }) : r.async("base64").then(function(e) {
                        s = "data:image/jpeg;base64," + e,
                        n.data = s,
                        t.warpgate.isBreak = !1
                    }),
                    n;
                    if (1 == t.imageType) return r.async("string").then(function(e) {
                        n.data = s,
                        t.warpgate.isBreak = !1
                    }),
                    n
                } else s = "";
                return s
            }
            if (2 == e) return (r = o.file(i)) ? (n = {},
            t.warpgate.isBreak = !0, JSZip.support.blob ? r.async("blob").then(function(e) {
                n.data = e,
                t.warpgate.isBreak = !1
            }) : r.async("base64").then(function(e) {
                s = "data:audio/mp3;base64," + e,
                n.data = s,
                t.warpgate.isBreak = !1
            }), n) : s = "";
            if (3 == e) {
                r = o.file(i);
                var h;
                return r ? (n = {},
                t.warpgate.isBreak = !0, r.async("string").then(function(e) {
                    h = JSON.parse(e),
                    t.currentPackageInfo.soundConfig = h,
                    n.data = h,
                    t.warpgate.isBreak = !1
                }), n) : h || ""
            }
            return ""
        },
        s.loadNextResource = function(t) {
            var e = this;
            if (t.imagesList.length) {
                var a = this,
                i = t.imagesList.pop();
                if (t.currentImageName = i[0], t._resItem.loaded = !1, i[1] = this.getZipOrNativeData(t, 1, i[0]), "" == i[1]) i[1] = this.getSelfRelativePath(t, t._resItem.url, i[0]),
                this.changeloadResource(t, i[1], RES.ResourceItem.TYPE_IMAGE);
                else {
                    var s;
                    JSZip.support.blob && (s = window.URL || window.webkitURL);
                    var r = new Image;
                    r.hashCode = (new egret.HashObject).hashCode,
                    r.$hashCode = r.hashCode,
                    r.avaliable = !0,
                    r.onload = function() {
                        "string" == typeof i[1] || s.revokeObjectURL(r.src);
                        var e = new egret.Texture;
                        e._setBitmapData(egret.BitmapData ? new egret.BitmapData(r) : r);
                        var n = t._resItem.name;
                        t._resItem.name = t.groupName + "." + t.currentImageName,
                        a._analyzeBitmap(t, t._resItem, e),
                        t._resItem.name = n,
                        t._resItem.loaded = !0,
                        a.loadNextResource(t)
                    },
                    "string" == typeof i[1] ? r.src = i[1] : t.warpgate.addCallback(function() {
                        r.src = s.createObjectURL(i[1].data)
                    })
                }
            } else if (t.needloadSoundConfig) {
                t.currentImageName = "soundConfig.json";
                var n = this.getZipOrNativeData(t, 3, t.currentImageName);
                if (n) return void t.warpgate.addCallback(function() {
                    e.analyzeSoundConfig(t),
                    e.loadNextResource(t)
                });
                t._resItem.loaded = !1,
                this.changeloadResource(t, this.getSelfRelativePath(t, t._resItem.url, t.currentImageName), egret.HttpResponseType.TEXT)
            } else if (t.soundList.length) {
                var o = t.soundList.pop();
                if (o[1] = this.getZipOrNativeData(t, 2, o[2]), !o[1] && !o[3]) return this.loadNextResource(t);
                if (t.currentSoundName = o[0], t.currentSoundConfig = o[4], t._resItem.loaded = !1, "" != o[1]) return void("string" == typeof i[1] ? (t.currentSoundConfig.cloneUrl = o[1], this.changeloadResource(t, o[1], RES.ResourceItem.TYPE_SOUND)) : t.warpgate.addCallback(function() {
                    t.currentSoundConfig.cloneUrl = s.createObjectURL(i[1].data),
                    e.changeloadResource(t, o[1], RES.ResourceItem.TYPE_SOUND)
                }));
                o[1] = this.getSelfRelativePath(t, t._resItem.url, o[2]),
                t.currentSoundConfig.cloneUrl = o[1],
                this.changeloadResource(t, o[1], RES.ResourceItem.TYPE_SOUND)
            } else this.clear(t)
        },
        s.getSelfRelativePath = function(t, e, a) {
            return e = t.reloadPath ? t.reloadPath + a: this.getRelativePath(e, a)
        },
        s.analyzeSoundConfig = function(t) {
            var e = t.currentPackageInfo.soundConfig;
            t.soundList || (t.soundList = []);
            for (var a = 0; a < e.length; a++) t.soundList.push([e[a].id, "", e[a].url, e[a].preload ? "1": "", e[a]]);
            t.needloadSoundConfig = !1
        },
        s.changeloadResource = function(t, e, a) {
            if (a == egret.HttpResponseType.ARRAY_BUFFER || a == egret.HttpResponseType.TEXT) {
                var i = t._resItem.url;
                t._resItem.url = e,
                this._dataFormat = a;
                var s = this.fileDic[t._resItem.name];
                this.fileDic[t._resItem.name] = null,
                this.loadFile(t._resItem, t._compFunc, t.resourceLoader),
                this._dataFormat = egret.HttpResponseType.ARRAY_BUFFER,
                t._resItem.url = i,
                this.fileDic[t._resItem.name] = s
            } else switch (a) {
            case RES.ResourceItem.TYPE_IMAGE:
                this.$loadImage(e, t.responseData);
                break;
            case RES.ResourceItem.TYPE_SOUND:
                this.$loadSound(e, t.responseData)
            }
        },
        s.$loadSound = function(t, e) {
            var a = this.getSoundLoader();
            this.resItemDic[a.hashCode] = e,
            a.type = egret.Sound.EFFECT
        },
        s.getSoundLoader = function() {
            var t = this,
            e = new egret.Sound;
            return BC.addEvent(e, e, egret.Event.COMPLETE,
            function(a) {
                t.onLoadFinish(a),
                BC.removeEvent(e)
            }),
            BC.addEvent(e, e, egret.IOErrorEvent.IO_ERROR,
            function(e) {
                t.onLoadFinish(e)
            }),
            e
        },
        s.$loadImage = function(t, e) {
            var a = this.$getImageLoader();
            this.resItemDic[a.hashCode] = e,
            a.load(t)
        },
        s.$getImageLoader = function() {
            var t = this,
            e = new egret.ImageLoader;
            return BC.addEvent(e, e, egret.Event.COMPLETE,
            function(e) {
                var a = e.target,
                i = new egret.Texture;
                i._setBitmapData(a.data || a.response),
                a.response = i,
                a.data = null,
                t.onLoadFinish(e),
                BC.removeEvent(a)
            }),
            BC.addEvent(e, e, egret.IOErrorEvent.IO_ERROR,
            function(e) {
                t.onLoadFinish(e)
            }),
            e
        },
        s.analyzeSound = function(t, e, a) {
            t.currentPackageInfo.soundFileLinkDic[t.currentSoundName] = a,
            a._setSoundConfig(t.currentSoundConfig)
        },
        s.analyzeBitmap = function(t, e) {},
        s._analyzeBitmap = function(t, e, a) {
            var i = e.name,
            s = i.slice(0, -4),
            r = this.fileDic[t.packageName];
            if (r || (r = this.fileDic[t.packageName] = {}), !r[s] && a) {
                var n = e.data && e.data.subkeys ? "": i,
                o = this.parseSpriteSheet(a, t, n);
                r[s] = o,
                t.currentPackageInfo.aliasPackageName && (this.fileDic[t.currentPackageInfo.aliasPackageName] = r)
            }
        },
        s.parseSpriteSheet = function(t, e, i) {
            var s = e,
            r = s.currentImageName.slice(0, -4),
            n = s.currentPackageInfo.imagesInfo[r],
            o = n.res;
            if (o) {
                var h = new egret.SpriteSheet(t);
                for (var c in o) {
                    s.currentPackageInfo.imageFileLinkDic[c] = h;
                    var t, l = o[c],
                    u = c;
                    t = l[2] <= 1 && l[3] <= 1 ? a._emptyTexture || a.getEmptyTexture() : h.createTexture(c, l[0], l[1], l[2], l[3], 0, 0),
                    this.addSubkey(s.packageName, u),
                    s.currentPackageInfo.textures[c] = t
                }
                return h
            }
        },
        s.getRes = function(e) {
            var a, i, s, r;
            if (!a) {
                if (r = t.SimplePackageData.getInstanceNoWarnning(e)) return r;
                if (s = RES.AnalyzerBase.getStringPrefix(e), a = this.fileDic[s]) {
                    r = t.SimplePackageData.getInstanceNoWarnning(s),
                    i = RES.AnalyzerBase.getStringTail(e);
                    var n = r.getRes(i);
                    if (n) return this.getContent(r, n)
                }
            }
            if (a = this.fileDic[e]) {
                var o = a;
                for (var h in o) {
                    var c = o[h];
                    if (i = RES.AnalyzerBase.getStringTail(e), a = c.getTexture(i)) return a
                }
            }
            return a
        },
        s.getContent = function(e, a) {
            if (!a) return null;
            var i, s;
            switch (a.type) {
            case t.SymbolType.TYPE_IMG:
                return s = a.keyFrame[0].i,
                i = e.imageFileLinkDic[s],
                i.getTexture(s);
            case t.SymbolType.TYPE_SCALE_9_GRID_IMG:
                s = a.keyFrame[0].i,
                i = e.imageFileLinkDic[s];
                var r = i.getTexture(s);
                return r.scale9Grid = new egret.Rectangle(a.s9.x, a.s9.y, a.s9.w, a.s9.h),
                r;
            case t.SymbolType.TYPE_IMGS:
                for (var n = [], o = a.keyFrame.length, h = 0; o > h; h++) s = a.keyFrame[h].i,
                i = e.imageFileLinkDic[s],
                n.push(i.getTexture(s));
                return n
            }
        },
        s.array2base64 = function(t) {
            for (var e = "",
            a = new Uint8Array(t), i = a.byteLength, s = 0; i > s; s++) e += String.fromCharCode(a[s]);
            return window.btoa(e)
        },
        s.destroyRes = function(e) {
            var a, i, s = this.fileDic[e];
            if (s) {
                delete this.fileDic[e];
                for (var r in s) {
                    a = s[r];
                    for (var n in a._textureMap) i = a._textureMap[n],
                    this.onResourceDestroy(i);
                    delete s[r],
                    this.onResourceDestroy(a)
                }
                var o;
                return o = t.SimplePackageData.getInstanceNoWarnning(e),
                o && o.destroy(),
                !0
            }
            return ! 1
        },
        a.hasDedenNative = !1,
        a.nativeUnZipCallbackDic = new BC.Dictionary,
        a.getEmptyTexture = function() {
            if (a._emptyTexture) return a._emptyTexture;
            var t = new egret.Shape;
            return t.graphics.beginFill(0, 0),
            t.graphics.drawRect(0, 0, 1, 1),
            t.graphics.endFill(),
            a._emptyTexture = new egret.RenderTexture,
            a._emptyTexture.drawToTexture(t, t.getBounds()),
            a._emptyTexture
        },
        a
    } (RES.SheetAnalyzer);
    t.DedenSheetAnalyzer = a,
    egret.registerClass(a, "deden.DedenSheetAnalyzer");
    var i = function() {
        function t() {}
        var e = (__define, t);
        e.prototype;
        return t.setCanvasSize = function(t, e) {},
        t
    } ();
    egret.registerClass(i, "CanvasSize"),
    t.hasInitialized = e()
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function() {
        function t() {}
        var e = (__define, t);
        e.prototype;
        return t.lzw_decompress = function(t) {
            var e;
            t.reset();
            var a = [],
            i = -1,
            s = {},
            r = [],
            n = 8;
            for (e = 0; (1 << n) + 2 > e; e++) s[e] = String.fromCharCode(++i);
            for (t.setBitLength(n), r[0] = t.read(); ! t.eof();) r[1] = t.read(),
            128 == r[1] && (t.setBitLength(++n), r[1] = t.read()),
            void 0 == s[r[1]] ? s[++i] = s[r[0]] + s[r[0]].charAt(0) : s[++i] = s[r[0]] + s[r[1]].charAt(0),
            a.push(s[r[0]]),
            r[0] = r[1];
            return a.push(s[r[0]]),
            a.join("").replace(/\&\#u[0-9a-fA-F]{4};/g,
            function(t) {
                return String.fromCharCode(parseInt(t.substring(3, 7), 16))
            })
        },
        t
    } ();
    t.LZW = e,
    egret.registerClass(e, "deden.LZW")
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function() {
        function e() {}
        var a = (__define, e),
        i = a.prototype;
        return i.getAnyDisplayObject = function(e) {
            var a = t.Sprite.__getDisplayByName(this._info || (this._info = t.SimplePackageData.getInstance(this.packageName)), e);
            return a ? a: (console.error("找不到原件名：" + e), null)
        },
        i.getResList = function() {
            return this._info || (this._info = t.SimplePackageData.getInstance(this.packageName)),
            this._info._getResList()
        },
        e
    } ();
    t.SimplePackageConfig = e,
    egret.registerClass(e, "deden.SimplePackageConfig")
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function() {
        function t() {}
        var e = (__define, t);
        e.prototype;
        return t.getSymbolClassName = function(e) {
            switch (e) {
            case t.TYPE_IMG:
                return "deden.Bitmap";
            case t.TYPE_SCALE_9_GRID_IMG:
                return "deden.Bitmap";
            case t.TYPE_IMGS:
                return "deden.BitmapAnimation";
            case t.TYPE_SHAPE:
                return "deden.Shape";
            case t.TYPE_TXT:
                return "deden.TextField";
            case t.TYPE_TXT_TLF:
                return "deden.TextField";
            case t.TYPE_SPR:
                return "deden.Sprite";
            case t.TYPE_MC:
                return "deden.MovieClip";
            case t.TYPE_BTN:
                return "deden.Button";
            case t.TYPE_SCENE:
                return "deden.Scene"
            }
        },
        t.TYPE_IMG = 1,
        t.TYPE_SCALE_9_GRID_IMG = 2,
        t.TYPE_IMGS = 3,
        t.TYPE_SHAPE = 11,
        t.TYPE_TXT = 15,
        t.TYPE_TXT_TLF = 16,
        t.TYPE_SPR = 21,
        t.TYPE_MC = 22,
        t.TYPE_BTN = 23,
        t.TYPE_SPAPE = 24,
        t.TYPE_SCENE = 25,
        t
    } ();
    t.SymbolType = e,
    egret.registerClass(e, "deden.SymbolType")
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function() {
        function t(e, a) {
            this.soundFileLinkDic = {},
            this.imageFileLinkDic = {},
            this.frameRate = 0,
            this.textures = {},
            t.instances[e.toLocaleLowerCase()] = this,
            this.packageName = e,
            a && (this.aliasPackageName = a, t.instances[a.toLocaleLowerCase()] = this)
        }
        var e = (__define, t),
        a = e.prototype;
        return t.getInstance = function(e) {
            var a = t.instances[e.toLocaleLowerCase()];
            return a || console.error('"' + e + '"资源包不存在！'),
            a
        },
        t.getInstanceNoWarnning = function(e) {
            var a = t.instances[e.toLocaleLowerCase()];
            return a
        },
        t.getResList = function(e) {
            var a = t.getInstance(e);
            return a._getResList()
        },
        a._getResList = function() {
            if (this.reslist) return this.reslist.slice();
            this.reslist = [];
            var t, e;
            for (e in this.symbolsInfo.elements) t = this.symbolsInfo.elements[e].type,
            this.reslist.push(e);
            for (e in this.symbolsInfo.containers) t = this.symbolsInfo.containers[e].type,
            this.reslist.push(e);
            for (e in this.symbolsInfo.shapes) t = this.symbolsInfo.shapes[e].type,
            11 == t && this.reslist.push(e);
            return this.reslist.slice()
        },
        a.getRes = function(e) {
            var a = t.instances[e];
            if (!a) {
                var a = this.symbolsInfo.elements[e] || this.symbolsInfo.containers[e] || this.symbolsInfo.shapes[e];
                if (!a) {
                    var i = e.split(".").pop();
                    a = this.textures[i],
                    a || (a = this)
                }
            }
            return a
        },
        a.destroyRes = function(t) {
            return ! 1
        },
        a.destroy = function() {
            return delete t.instances[this.packageName.toLocaleLowerCase()],
            delete t.instances[this.aliasPackageName.toLocaleLowerCase()],
            RES.destroyRes(this.aliasPackageName, !0),
            !0
        },
        t.instances = {},
        t
    } ();
    t.SimplePackageData = e,
    egret.registerClass(e, "deden.SimplePackageData"),
    t.getResList = e.getResList
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function(e) {
        function a() {
            if (e.call(this), this.$s9Width = 0, this.$s9Height = 0, this.$_scaleX = 1, this.$_scaleY = 1, this.$_x = 0, this.$_y = 0, !this.$_className && a.caller.prototype.__class__) {
                var i = a.caller.prototype.__class__,
                s = i.lastIndexOf(".");
                if (s > -1) {
                    var r = i.slice(0, s),
                    n = t.SimplePackageData.getInstanceNoWarnning(r);
                    n && a.$constructorBitmap(n, i.slice(s + 1), this)
                }
            }
        }
        __extends(a, e);
        var i = __define,
        s = a,
        r = s.prototype;
        return a.drawTexture = function(t, e, a) {
            var i = new egret.RenderTexture;
            e || (e = t.getBounds());
            var s = e.x,
            r = e.y;
            return i.drawToTexture(t, e),
            a && (i._offsetX = s, i._offsetY = r),
            i
        },
        a.getInstance = function(e, i, s) {
            return a.$constructorBitmap(s || t.SimplePackageData.getInstance(e), i)
        },
        a.$constructorBitmap = function(e, i, s) {
            var r = e.getRes(i);
            if (!r || r instanceof t.SimplePackageData) return console.error(e.packageName + " 素材包中的‘" + i + "’原件不存在！"),
            null;
            if (!s) {
                var n = egret.getDefinitionByName(e.packageName + "." + i);
                if (s = n ? new n: new a, n) return s
            }
            return s.$_className = i,
            s.$_packageData = e,
            s.$_type = r.type,
            r.s9 && (r.keyFrame[0].s9 = r.s9),
            s.$data = r.keyFrame[0],
            s.childrenCreated(),
            s
        },
        r.childrenCreated = function() {},
        i(r, "$data", void 0,
        function(e) {
            if (null != e) {
                this.$_data = e,
                this.anchorOffsetX = e.x,
                this.anchorOffsetY = e.y,
                this.$_type == t.SymbolType.TYPE_SCALE_9_GRID_IMG && (this.scale9Grid = new egret.Rectangle(e.s9.x, e.s9.y, e.s9.w, e.s9.h), this.fillMode = egret.BitmapFillMode.SCALE);
                var a = this.$_packageData.textures[e.i];
                this.$setBitmapData(a)
            }
        }),
        r.getEgretBitmap = function() {
            if (null == this.$_data) return null;
            var t = new egret.Bitmap,
            e = this.$_packageData.imageFileLinkDic[this.$_data.i];
            return t.texture = e.getTexture(this.$_data.i + ""),
            this.$_data.s9 && (t.scale9Grid = new egret.Rectangle(this.$_data.s9.x, this.$_data.s9.y, this.$_data.s9.w, this.$_data.s9.h)),
            t
        },
        r.getEgretTexture = function() {
            if (null == this.$_data) return null;
            var t = this.$_packageData.imageFileLinkDic[this.$_data.i],
            e = t.getTexture(this.$_data.i + "");
            return this.$_data.s9 && (e.scale9Grid = new egret.Rectangle(this.$_data.s9.x, this.$_data.s9.y, this.$_data.s9.w, this.$_data.s9.h)),
            e
        },
        i(r, "s9X",
        function() {
            return this.$_data.s9 ? this.$_x - egret.superGetter(a, this, "anchorOffsetX") + this.$_data.s9.x: 0
        },
        function(t) {
            this.$_data.s9 && (this.x = t - this.$_data.s9.x + egret.superGetter(a, this, "anchorOffsetX"))
        }),
        i(r, "s9Y",
        function() {
            return this.$_data.s9 ? this.$_y - egret.superGetter(a, this, "anchorOffsetY") + this.$_data.s9.y: 0
        },
        function(t) {
            this.$_data.s9 && (this.y = t - this.$_data.s9.y + egret.superGetter(a, this, "anchorOffsetY"))
        }),
        i(r, "s9Width",
        function() {
            if (!this.$_data.s9) return 0;
            var t = this.$_packageData.textures[this.$_data.i];
            return this.width - (t.textureWidth - this.$_data.s9.w)
        },
        function(t) {
            if (this.$_data.s9) {
                t = +t || 0;
                var e = this.$_packageData.textures[this.$_data.i];
                this.$s9Width = t,
                this.width = t + (e.textureWidth - this.$_data.s9.w)
            }
        }),
        i(r, "width",
        function() {
            return egret.superGetter(a, this, "width")
        },
        function(t) {
            t = +t || 0;
            var e = this.$_packageData.textures[this.$_data.i];
            this.$_scaleX = t / e.textureWidth,
            egret.superSetter(a, this, "width", t),
            this.$_data.s9 && (this.$anchorOffsetX = 0)
        }),
        i(r, "height",
        function() {
            return egret.superGetter(a, this, "height")
        },
        function(t) {
            t = +t || 0;
            var e = this.$_packageData.textures[this.$_data.i];
            this.$_scaleY = t / e.textureHeight,
            egret.superSetter(a, this, "height", t),
            this.$_data.s9 && (this.$anchorOffsetY = 0)
        }),
        i(r, "s9Height",
        function() {
            if (!this.$_data.s9) return 0;
            var t = this.$_packageData.textures[this.$_data.i];
            return this.height - (t.textureHeight - this.$_data.s9.h)
        },
        function(t) {
            if (this.$_data.s9) {
                t = +t || 0;
                var e = this.$_packageData.textures[this.$_data.i];
                this.$s9Height = t,
                this.height = t + (e.textureHeight - this.$_data.s9.h)
            }
        }),
        i(r, "$anchorOffsetX", void 0,
        function(t) {
            t = +t || 0,
            t = this.$_data.x + t,
            this.$_data.s9 && (t *= this.$_scaleX),
            this.anchorOffsetX = t
        }),
        i(r, "$anchorOffsetY", void 0,
        function(t) {
            t = +t || 0,
            t = this.$_data.y + t,
            this.$_data.s9 && (t *= this.$_scaleY),
            this.anchorOffsetY = t
        }),
        i(r, "x",
        function() {
            return this.$_x
        },
        function(t) {
            t = +t || 0,
            this.$_x = t,
            egret.superSetter(a, this, "x", t)
        }),
        i(r, "y",
        function() {
            return this.$_y
        },
        function(t) {
            t = +t || 0,
            this.$_y = t,
            egret.superSetter(a, this, "y", t)
        }),
        i(r, "scaleX",
        function() {
            return this.$_data.s9 ? this.$_scaleX: egret.superGetter(a, this, "scaleX")
        },
        function(t) {
            if (egret.NumberUtils.isNumber(t)) if (this.$_data.s9 && this.$_scaleX != t) {
                this.$_scaleX = t;
                var e = this.$_packageData.textures[this.$_data.i];
                egret.superSetter(a, this, "scaleX", 1),
                this.width = e.textureWidth * t
            } else egret.superGetter(a, this, "scaleX") != t && egret.superSetter(a, this, "scaleX", t)
        }),
        i(r, "scaleY",
        function() {
            return this.$_data.s9 ? this.$_scaleY: egret.superGetter(a, this, "scaleY")
        },
        function(t) {
            if (egret.NumberUtils.isNumber(t)) if (this.$_data.s9 && this.$_scaleY != t) {
                this.$_scaleY = t;
                var e = this.$_packageData.textures[this.$_data.i];
                egret.superSetter(a, this, "scaleY", 1),
                this.height = e.textureHeight * t - this.$_data.y * t
            } else egret.superGetter(a, this, "scaleY") != t && egret.superSetter(a, this, "scaleY", t)
        }),
        a
    } (egret.Bitmap);
    t.Bitmap = e,
    egret.registerClass(e, "deden.Bitmap"),
    t.getBitmap = e.getInstance,
    t.getTexture = function(t, e) {
        return null
    },
    t.getBitmapText = function(t, e) {
        return null
    }
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function(e) {
        function a() {
            if (e.call(this), this.$_currentRepeatCount = 0, this.$_isAddedToStage = !1, this.$_passedTime = 0, this.$_currentFrame = 1, this.$_isStopped = !0, this.$_lastTime = 0, this.$_repeatCount = -1, this.$_totalFrames = 0, this.$_frameRate = 24, this.$_x = 0, this.$_y = 0, this.$_offsetX = 0, this.$_offsetY = 0, this.$_frameIntervalTime = 0, this.$_currentGroupRepeatCount = 0, this.$_groupRepeatCount = -1, this.$_nextSoundPosition = 0, this.$_soundSpaceTime = 0, this.$_isLoadingStreamSound = !1, this.$_smoothing = t.Bitmap.defaultSmoothing, this.hasOwnProperty("$renderNode") ? this.$renderNode = new egret.sys.BitmapNode: this.$renderRegion = new egret.sys.Region, !this.$_className && a.caller.prototype.__class__) {
                var i = a.caller.prototype.__class__,
                s = i.lastIndexOf(".");
                if (s > -1) {
                    var r = i.slice(0, s),
                    n = t.SimplePackageData.getInstanceNoWarnning(r);
                    n && a.$constructorBitmapAnimation(n, i.slice(s + 1), this)
                }
            }
        }
        __extends(a, e);
        var i = __define,
        s = a,
        r = s.prototype;
        return r.$addGroupRepeat = function(e, a) {
            a && (this.$_groupRepeatCount = a, this.$_currentGroupRepeatCount = 0);
            var i = 0,
            s = this.labels;
            if (s.length) {
                var r = this.currentLabel;
                r ? (i = s.indexOf(r), i = i < s.length - 1 ? this.$_data.frameLabel.frames[i + 1] - 1 : this.totalFrames) : i = this.totalFrames
            } else i = this.totalFrames;
            if (i == e) return this.clearGroupRepeat(),
            void(this.$_isPlaying && (this.$_isPlaying = !1, this.$setIsPlaying(!1)));
            this.$groupRepeatEventFrame = i;
            var n = this;
            this.$groupRepeat = function() {
                if ( - 1 == n.$_groupRepeatCount) n.hasEventListener(t.Event.LOOP_COMPLETE_GROUP) && this.dispatchEventWith(t.Event.LOOP_COMPLETE_GROUP);
                else if (n.$_currentGroupRepeatCount < n.$_groupRepeatCount) {
                    if (n.$_currentGroupRepeatCount++, n.$_currentGroupRepeatCount == n.$_groupRepeatCount) return n.stop(),
                    n.hasEventListener(t.Event.COMPLETE_GROUP) && this.dispatchEventWith(t.Event.COMPLETE_GROUP),
                    void n.clearGroupRepeat();
                    n.hasEventListener(t.Event.LOOP_COMPLETE_GROUP) && this.dispatchEventWith(t.Event.LOOP_COMPLETE_GROUP)
                }
                n.gotoAndPlay(e)
            },
            this.addEventListener(t.Event.ENTER_KEY_FRAME_ + i, this.$groupRepeat, this)
        },
        r.clearGroupRepeat = function() {
            this.$groupRepeat && (this.removeEventListener(t.Event.ENTER_KEY_FRAME_ + this.$groupRepeatEventFrame, this.$groupRepeat, this), this.$groupRepeat = null, this.$groupRepeatEventFrame = 0, this.$_groupRepeatCount = 0, this.$_currentGroupRepeatCount = 0)
        },
        i(r, "smoothing",
        function() {
            return this.$_smoothing
        },
        function(t) {
            t = !!t,
            t != this.$_smoothing && (this.$_smoothing = t, this.$invalidate())
        }),
        i(r, "groupRepeatCount",
        function() {
            return this.$_groupRepeatCount
        },
        function(t) {
            this.$_groupRepeatCount = t,
            this.$_currentGroupRepeatCount = 0
        }),
        a.getInstance = function(e, i, s) {
            return a.$constructorBitmapAnimation(s || t.SimplePackageData.getInstance(e), i)
        },
        a.$constructorBitmapAnimation = function(e, i, s) {
            var r = e.getRes(i);
            if (!r || r instanceof t.SimplePackageData) return console.error(e.packageName + " 素材包中的‘" + i + "’原件不存在！"),
            null;
            if (!s) {
                var n = egret.getDefinitionByName(e.packageName + "." + i);
                if (s = n ? new n: new a, n) return s
            }
            return s.$_packageData = e,
            s.$_className = i,
            s.$_imagesDic = e.textures,
            e.frameRate && (s.$_frameRate = e.frameRate),
            s.$data = r,
            s.childrenCreated(),
            s
        },
        r.childrenCreated = function() {},
        i(r, "$data", void 0,
        function(t) {
            null != t && (this.$_data = t, this.$_frameEventDic = {},
            this.$_frameIntervalTime = 1e3 / this.$_frameRate, this.$_bdpList = t.keyFrame, this.$_totalFrames = this.$_bdpList.length, this.$_currentFrame > this.$_totalFrames && (this.$_currentFrame = 1), this.$_currentRepeatCount = 0, this.$_isPlaying = !1, this.$textureUpdate())
        }),
        r.$onAddToStage = function(t, a) {
            e.prototype.$onAddToStage.call(this, t, a),
            this.$_isAddedToStage = !0,
            this.$_isPlaying && this.$_totalFrames > 1 && this.$setIsPlaying(!0)
        },
        r.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this),
            this.$_isAddedToStage = !1,
            this.$setIsPlaying(!1)
        },
        r.addEventListener = function(a, i, s, r, n) {
            e.prototype.addEventListener.call(this, a, i, s, r, n),
            0 == a.indexOf(t.Event.ENTER_KEY_FRAME_) && (this.$_frameEventDic[parseInt(a.slice(t.Event.ENTER_KEY_FRAME_.length))] = !0)
        },
        r.removeEventListener = function(a, i, s, r) {
            e.prototype.removeEventListener.call(this, a, i, s, r),
            this.hasEventListener(a) || 0 == a.indexOf(t.Event.ENTER_KEY_FRAME_) && delete this.$_frameEventDic[parseInt(a.slice(t.Event.ENTER_KEY_FRAME_.length))]
        },
        i(r, "x",
        function() {
            return this.$_x
        },
        function(t) {
            t = +t || 0,
            egret.superSetter(a, this, "x", t),
            this.$_x = t
        }),
        i(r, "y",
        function() {
            return this.$_y
        },
        function(t) {
            t = +t || 0,
            egret.superSetter(a, this, "y", t),
            this.$_y = t
        }),
        i(r, "currentFrameLabel",
        function() {
            return a.$_getFrameLabelByFrame(this.$_data, this.$_currentFrame, !0)
        }),
        i(r, "currentLabel",
        function() {
            return a.$_getFrameLabelByFrame(this.$_data, this.$_currentFrame, !1)
        }),
        r.getFrameByLabel = function(t) {
            var e = this.$_data.frameLabel,
            a = e.labels.indexOf(t);
            return - 1 != a ? e.frames[a] : -1
        },
        i(r, "labels",
        function() {
            return this.$_data.frameLabel ? this.$_data.frameLabel.labels.slice(0) : []
        }),
        i(r, "labelFrames",
        function() {
            return this.$_data.frameLabel ? this.$_data.frameLabel.frames.slice(0) : []
        }),
        r.$setIsPlaying = function(t) {
            this.$_isStopped == t && (t ? this.$_totalFrames > 1 && this.$_isAddedToStage && (this.$_lastTime = egret.getTimer(), (egret.ticker || egret.sys.$ticker).$startTick(this.$_advanceTime, this), this.$_isStopped = !t) : ((egret.ticker || egret.sys.$ticker).$stopTick(this.$_advanceTime, this), this.$_isStopped = !t))
        },
        r.$_advanceTime = function(e) {
            if (!this.$_isAddedToStage) return this.$setIsPlaying(!1),
            !1;
            var a, i = this,
            s = e - i.$_lastTime;
            i.$_lastTime = e;
            var r = i.$_frameIntervalTime,
            n = i.$_passedTime + s;
            i.$_passedTime = n % r;
            var o = n / r;
            if (1 > o) return ! 1;
            for (i.$_nextFrameNum = i.$_currentFrame; o >= 1;) {
                if (o--, i.$_nextFrameNum++, i.$_nextFrameNum > i.$_totalFrames) if (i.$_currentRepeatCount++, -1 == i.$_repeatCount) i.$_nextFrameNum = 1,
                i.hasEventListener(t.Event.LOOP_COMPLETE) && this.dispatchEventWith(t.Event.LOOP_COMPLETE);
                else {
                    if (! (i.$_currentRepeatCount < i.repeatCount)) {
                        i.$_nextFrameNum = i.$_totalFrames,
                        i.hasEventListener(t.Event.COMPLETE) && this.dispatchEventWith(t.Event.COMPLETE),
                        i.stop();
                        break
                    }
                    i.$_nextFrameNum = 1,
                    i.hasEventListener(t.Event.LOOP_COMPLETE) && this.dispatchEventWith(t.Event.LOOP_COMPLETE)
                }
                a = i.$_currentFrame,
                i.$_nextFrameNum > 0 && (i.$_currentFrame = i.$_nextFrameNum),
                i.$_frameEventDic[a] && this.dispatchEventWith(t.Event.ENTER_KEY_FRAME_ + a)
            }
            return i.$textureUpdate(),
            !1
        },
        r.updateRender = function() {
            this.$textureUpdate()
        },
        r.$render = function() {
            var t;
            arguments.length && (t = arguments[0]);
            var e = this.$_textureToRender;
            if (e) {
                if (!e.bitmapData) return void console.warn(this.$_packageData.packageName + "." + this.$_className + "中使用的资源已经被释放");
                t && (t.imageSmoothingEnabled = this.$_smoothing);
                var i = e._bitmapWidth || e.textureWidth,
                s = e._bitmapHeight || e.textureHeight,
                r = Math.round(e.$getScaleBitmapWidth()),
                n = Math.round(e.$getScaleBitmapHeight()),
                o = Math.round( - this.$_offsetX),
                h = Math.round( - this.$_offsetY);
                if (t) t.drawImage(e._bitmapData, e._bitmapX, e._bitmapY, i, s, o, -h, r, n);
                else {
                    var c = e.$getTextureWidth(),
                    l = e.$getTextureHeight(),
                    u = e._sourceWidth,
                    d = e._sourceHeight;
                    a.$drawImage(this.$renderNode, e._bitmapData, e._bitmapX, e._bitmapY, i, s, o, h, c, l, r, n, u, d, null, egret.BitmapFillMode.SCALE, this.$smoothing)
                }
            }
        },
        r.$textureUpdate = function() {
            if (this.$_totalFrames) {
                var t = this.$_currentFrame - 1;
                this.$_offsetX != this.$_bdpList[t].x && (this.$_offsetX = this.$_bdpList[t].x),
                this.$_offsetY != this.$_bdpList[t].y && (this.$_offsetY = this.$_bdpList[t].y),
                this.$_textureToRender != this.$_imagesDic[this.$_bdpList[t].i] && (this.$_textureToRender = this.$_imagesDic[this.$_bdpList[t].i], this.$_textureToRender._bitmapData || console.warn(111), this.$invalidateContentBounds());
                var e = this.$_data.keyFrame[t];
                if (e.sound) for (var a = e.sound,
                i = 0; i < a.length; i++) this.$playSound(a[i]);
                this.$_data.soundFrameCount && this.$updatePlaySound(e.f, t)
            }
        },
        i(r, "streamSound",
        function() {
            return this.$_streamSound
        }),
        r.$measureContentBounds = function(t) {
            var e = this.$_textureToRender;
            if (e) {
                var a = -this.$_offsetX,
                i = -this.$_offsetY,
                s = e.$getTextureWidth(),
                r = e.$getTextureHeight();
                t.setTo(a, i, s, r)
            } else t.setEmpty()
        },
        i(r, "frameRate",
        function() {
            return this.$_frameRate
        },
        function(t) {
            t != this.$_frameRate && (this.$_frameRate = t, this.$_frameIntervalTime = 1e3 / this.$_frameRate)
        }),
        i(r, "currentCount",
        function() {
            return this.$_currentRepeatCount
        }),
        r.reset = function() {
            this.$_currentRepeatCount = 0,
            this.$_currentFrame = 1
        },
        i(r, "currentFrame",
        function() {
            return this.$_currentFrame
        }),
        r.gotoAndPlay = function(e, a, i) {
            if (! (this.$_totalFrames <= 1)) {
                if ("string" == typeof e) {
                    var s = this.getFrameByLabel(e);
                    if ( - 1 == s) return void console.warn('帧标签"' + e + '"不存在!已忽略该跳转指令.\n正确的帧标签:' + this.labels);
                    e = s
                }
                a && (this.$_repeatCount = a, this.$_currentRepeatCount = 0),
                e > this.$_totalFrames && (e = this.$_totalFrames),
                1 > e && (e = 1),
                this.$_nextFrameNum = -1,
                this.$_currentFrame = e,
                this.$_isPlaying || (this.$_isPlaying = !0, this.$setIsPlaying(!0)),
                i && (this.clearGroupRepeat(), this.$addGroupRepeat(e, a)),
                this.$textureUpdate(),
                this.$_frameEventDic[this.$_currentFrame] && this.dispatchEventWith(t.Event.ENTER_KEY_FRAME_ + this.$_currentFrame)
            }
        },
        r.gotoAndStop = function(e) {
            if (! (this.$_totalFrames <= 1)) {
                if ("string" == typeof e) {
                    var a = this.getFrameByLabel(e);
                    if ( - 1 == a) return void console.warn('帧标签"' + e + '"不存在!已忽略该跳转指令.\n正确的帧标签:' + this.labels);
                    e = a
                }
                e > this.$_totalFrames && (e = this.$_totalFrames),
                this.$_isPlaying && (this.$_isPlaying = !1, this.$setIsPlaying(!1)),
                1 > e && (e = 1),
                this.$_currentFrame = e,
                this.$_nextFrameNum = -1,
                this.$textureUpdate(),
                this.$_frameEventDic[this.$_currentFrame] && this.dispatchEventWith(t.Event.ENTER_KEY_FRAME_ + this.$_currentFrame)
            }
        },
        r.stop = function() {
            this.$_isPlaying = !1,
            this.$setIsPlaying(!1),
            this.$_nextFrameNum = -1
        },
        r.play = function(t, e) {
            this.$_totalFrames <= 1 || (this.$_isPlaying = !0, this.$setIsPlaying(!0), t && (this.$_repeatCount = t, this.$_currentRepeatCount = 0), e && (this.clearGroupRepeat(), this.labels.length ? this.$addGroupRepeat(this.getFrameByLabel(this.currentLabel), t) : this.$addGroupRepeat(1, t)))
        },
        i(r, "isPlaying",
        function() {
            return this.$_isPlaying
        }),
        r.nextFrame = function() {
            this.$_currentFrame < this.$_totalFrames && (this.$_currentFrame++, this.$_nextFrameNum = -1, this.$_isPlaying = !1, this.$setIsPlaying(!1), this.$textureUpdate(), this.$_frameEventDic[this.$_currentFrame] && this.dispatchEventWith(t.Event.ENTER_KEY_FRAME_ + this.$_currentFrame))
        },
        r.prevFrame = function() {
            this.$_currentFrame > 1 && (this.$_currentFrame--, this.$_nextFrameNum = -1, this.$_isPlaying = !1, this.$setIsPlaying(!1), this.$textureUpdate(), this.$_frameEventDic[this.$_currentFrame] && this.dispatchEventWith(t.Event.ENTER_KEY_FRAME_ + this.$_currentFrame))
        },
        i(r, "repeatCount",
        function() {
            return this.$_repeatCount
        },
        function(t) {
            this.$_repeatCount = t,
            this.$_currentRepeatCount = 0
        }),
        i(r, "totalFrames",
        function() {
            return this.$_totalFrames
        }),
        r.$clear = function() {
            this.stop(),
            this.$_textureToRender = null,
            this.$_isStopped = !0,
            this.$_totalFrames = 0,
            this.$_currentFrame = 1,
            this.$_passedTime = 0,
            this.$_bdpList = null,
            this.$_currentRepeatCount = 0,
            this.$_className = "",
            this.$_frameEventDic = {},
            this.$_imagesDic = {},
            this.$_data = null
        },
        a.$_getFrameLabelByFrame = function(t, e, a) {
            var i = t.frameLabel;
            if (i) {
                var s;
                if (!a) {
                    var r;
                    for (s = 0; s < i.frames.length && e >= i.frames[s]; s++) r = s;
                    return i.labels[r]
                }
                for (s = 0; s < i.frames.length; s++) if (i.frames[s] === e) return i.labels[s]
            }
            return null
        },
        a.$drawImage = egret.sys && egret.sys.BitmapNode && egret.sys.BitmapNode.$updateTextureData ? egret.sys.BitmapNode.$updateTextureData: egret.Bitmap.$drawImage,
        a
    } (egret.DisplayObject);
    t.BitmapAnimation = e,
    egret.registerClass(e, "deden.BitmapAnimation"),
    t.getBitmapAnimation = e.getInstance
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function(e) {
        function a() {
            if (e.call(this), this._playAll = a.playAll, this._stopAll = a.stopAll, this._lastDrawFrame = -1, this._x = 0, this._y = 0, this.$_cacheAsShareBitmap = !1, this._nextSoundPosition = 0, this._soundSpaceTime = 0, this._isLoadingStreamSound = !1, !this._className && a.caller.prototype.__class__) {
                var i = a.caller.prototype.__class__,
                s = i.lastIndexOf(".");
                if (s > -1) {
                    var r = i.slice(0, s),
                    n = t.SimplePackageData.getInstanceNoWarnning(r);
                    n && a._constructorSprite(n, i.slice(s + 1), this)
                }
            }
        }
        __extends(a, e);
        var i = __define,
        s = a,
        r = s.prototype;
        return a.getInstance = function(e, i, s) {
            return a._constructorSprite(s || t.SimplePackageData.getInstance(e), i)
        },
        a._constructorSprite = function(e, i, s) {
            var r = e.getRes(i);
            if (!r || r instanceof t.SimplePackageData) return console.error(e.packageName + " 素材包中的‘" + i + "’原件不存在！"),
            null;
            if (!s) {
                var n = egret.getDefinitionByName(e.packageName + "." + i);
                if (s = n ? new n: new a, n) return s
            }
            return s._className = i,
            s._packageData = e,
            s.$data = r,
            s.childrenCreated(),
            s
        },
        r.childrenCreated = function() {},
        r.$onAddToStage = function(t, a) {
            var i = this;
            if (e.prototype.$onAddToStage.call(this, t, a), this.$_cacheAsShareBitmap && !this.$displayList) {
                this.$_cacheAsShareBitmap = !1,
                this.cacheAsShareBitmap(this.$_shareBitmapGroupName, this.$_shareBitmapFrames, this.$_updateCurrentFrame);
                var s = this.$displayList;
                s.$parentDisplayList = this.$parentDisplayList,
                egret.callLater(function() {
                    i.$cacheAsBitmapChanged(),
                    s.$parentDisplayList || (s.$stage = i.$stage, s.$parent = i.$parent, s.$parentDisplayList = i.$parentDisplayList, i.$markProxyDirty())
                },
                this)
            }
            this.onAddToStage()
        },
        r.onAddToStage = function() {},
        r.$onRemoveFromStage = function() {
            if (this.$_cacheAsShareBitmap && this.$displayList instanceof t.ShareCacheBitmap) {
                var a = this.$_cacheAsShareBitmap,
                i = this.$_shareBitmapGroupName,
                s = this.$_shareBitmapFrames;
                this.clearCacheAsShareBitmap(),
                this.$_cacheAsShareBitmap = a,
                this.$_shareBitmapGroupName = i,
                this.$_shareBitmapFrames = s,
                e.prototype.$onRemoveFromStage.call(this)
            } else e.prototype.$onRemoveFromStage.call(this)
        },
        r.onRemoveFromStage = function() {},
        i(r, "$data", void 0,
        function(t) {
            null != t && (this._instanceList = [], this._oldInstanceList = [], this.$_data = t, this.draw(0))
        }),
        r.cacheAsShareBitmap = function(e, a, i) {
            if (e || (e = this._packageData ? this._packageData.packageName + "." + this._className: this.hashCode + ""), 1 == this.$_cacheAsShareBitmap && this.$_shareBitmapGroupName == e) return ! 1;
            if (a || (a = [1]), this.$_cacheAsShareBitmap = !0, this.$_shareBitmapFrames = a, this.$_shareBitmapGroupName = e, this.$_updateCurrentFrame = i, this.stage) {
                var s = this._lastDrawFrame;
                this._lastDrawFrame = -1,
                this.draw(s);
                var r = this.$displayList || new t.ShareCacheBitmap;
                return r.$parentDisplayList = this.$parentDisplayList,
                r.root = this,
                r.$stage = this.$stage,
                r.$parent = this.$parent,
                r.$_shareBitmapGroupName = e,
                this.$displayList = r,
                this.$cacheAsBitmapChanged(),
                r.$DisplayObject = this.$DisplayObject,
                t.ShareCacheBitmap.addGroup(e, this, a),
                r.$data = a,
                this.$markProxyDirty(),
                this.$removeFlags(512),
                this.$removeFlags(16),
                !0
            }
        },
        r.clearCacheAsShareBitmap = function() {
            this.$_cacheAsShareBitmap && (this.$_cacheAsShareBitmap = !1, t.ShareCacheBitmap.delGroup(this.$_shareBitmapGroupName, this), this.$_shareBitmapGroupName = null, this.$displayFlags = 2032, this.$removeFlags(512), this.$removeFlags(16), this.$displayList.destroy(), this.$displayList = null, this.$cacheAsBitmapChanged(), this.$invalidateTransform())
        },
        r.$markProxyDirty = function() {
            this.$_cacheAsShareBitmap && this.$parentDisplayList && (this.$displayList.$parentDisplayList = this.$parentDisplayList)
        },
        r.$invalidate = function(t) {
            e.prototype.$invalidate.call(this, t),
            this.$_cacheAsShareBitmap && this.$displayList && (this.$displayList.$invalidate(), this.$markProxyDirty())
        },
        r.$invalidateTransform = function() {
            e.prototype.$invalidateTransform.call(this),
            this.$_cacheAsShareBitmap && this.$displayList && (this.$displayList.needdraw = !0, this.$displayList.$invalidateTransform())
        },
        i(r, "alpha",
        function() {
            return this.$alpha
        },
        function(t) {
            t != this.$alpha && this.$_cacheAsShareBitmap && this.$displayList && (this.$displayList.needdraw = !0, this.$displayList.alpha = t),
            this.$setAlpha(t)
        }),
        r.$propagateFlagsDown = function(t) {
            e.prototype.$propagateFlagsDown.call(this, t),
            this.$_cacheAsShareBitmap && this.$displayList && this.$displayList.$propagateFlagsDown(t)
        },
        r.updateRender = function() {
            this.draw(this._currentFrame ? this._currentFrame - 1 : 0)
        },
        i(r, "streamSound",
        function() {
            return this._streamSound
        }),
        r.stopChildren = function() {
            a.stopAll(this)
        },
        r.playChildren = function() {
            a.playAll(this)
        },
        a.stopAll = function(e) {
            if (e) for (var i = e.numChildren,
            s = 0; i > s; s++) {
                var r = e.getChildAt(s);
                r instanceof egret.DisplayObjectContainer ? r instanceof t.MovieClip ? r.stop(!0) : r instanceof a ? r.stopChildren() : r instanceof t.BitmapAnimation ? r.stop() : (r.hasOwnProperty("stop") && r.stop(), a.stopAll(r)) : r instanceof t.BitmapAnimation ? r.stop() : r.hasOwnProperty("stop") && r.stop()
            }
        },
        a.playAll = function(e) {
            if (e) for (var i = e.numChildren,
            s = 0; i > s; s++) {
                var r = e.getChildAt(s);
                r instanceof egret.DisplayObjectContainer ? r instanceof t.MovieClip ? r.isPlaying || r.play(0, !0) : r instanceof a ? r.playChildren() : r instanceof t.BitmapAnimation ? r.isPlaying || r.play() : (r.hasOwnProperty("stop") && r.stop(), a.playAll(r)) : r instanceof t.BitmapAnimation ? r.isPlaying || r.play() : r.hasOwnProperty("play") && r.play()
            }
        },
        i(r, "className",
        function() {
            return this._className
        }),
        i(r, "x",
        function() {
            return this._x
        },
        function(t) {
            t = +t || 0,
            egret.superSetter(a, this, "x", t),
            this._x = t
        }),
        i(r, "y",
        function() {
            return this._y
        },
        function(t) {
            t = +t || 0,
            egret.superSetter(a, this, "y", t),
            this._y = t
        }),
        r.draw = function(e) {
            if (this._lastDrawFrame != e) {
                var i = this.$_data.keyFrame[e];
                if (!i) return void console.warn('动画数据异常，当前帧："' + e + '",可反馈给作者，QQ: 442924754.');
                this._lastDrawFrame = e;
                var s = i.list;
                if (this._oldInstanceList != s) {
                    var r, n, o, h;
                    this._instanceList.length = 0;
                    var c = s.length;
                    for (r = 0; c > r; r++) n = s[r],
                    this._instanceList[n.att[0]] = n;
                    for (c = this._oldInstanceList.length, r = c - 1; r >= 0; r--) n = this._oldInstanceList[r],
                    o = this._instanceList[n.att[0]],
                    o ? n.att[1] == o.att[1] ? this._instanceList[n.att[0]] = a.updateDispayObject(this, n, o) : (this._instanceList[n.att[0]] = null, this[this.$_data.instances[n.att[0]]] = null, h = this.getChildByName(this.$_data.instances[n.att[0]]), h && this.removeChild(h)) : (h = this.getChildByName(this.$_data.instances[n.att[0]]), h && this.removeChild(h), this[this.$_data.instances[n.att[0]]] = null);
                    for (c = s.length, r = 0; c > r; r++) n = s[r],
                    this._instanceList[n.att[0]] ? (this._instanceList[n.att[0]] instanceof egret.DisplayObject ? (h = this._instanceList[n.att[0]], this.setChildIndex(h, r)) : (h = a.createDispayObject(this, this.$_data.usedClasses[n.att[1]], this._instanceList[n.att[0]]), this.addChildAt(h, r)), this._instanceList[n.att[0]] = null, delete this._instanceList[n.att[0]]) : (h = a.createDispayObject(this, this.$_data.usedClasses[n.att[1]], n), this.addChildAt(h, r));
                    if (this._oldInstanceList = s, this.$invalidateContentBounds(), i.sound) {
                        var l = i.sound;
                        for (r = 0; r < l.length; r++) this.playSound(l[r])
                    }
                    this.$_data.soundFrameCount && this.updatePlaySound(i.f, e);
                    var u = this.$parentDisplayList;
                    u instanceof t.ShareCacheBitmap ? (u.$invalidate(), this.$parentDisplayList.markDirty(this)) : this.$_cacheAsShareBitmap && this.$displayList && u && u.markDirty(this.$displayList)
                }
            }
        },
        r.updatePlaySound = function(t, e) {},
        r.playSound = function(t) {},
        a.updateDispayObject = function(t, e, a) {
            var i = t.getChildByName(t.$_data.instances[e.att[0]]);
            if (e.att[2] != a.att[2] && (i.x = a.att[2]), e.att[3] != a.att[3] && (i.y = a.att[3]), e.att[4] != a.att[4] && (i.scaleX = a.att[4]), e.att[5] != a.att[5] && (i.scaleY = a.att[5]), e.att[6] != a.att[6] && (i.alpha = a.att[6]), e.att[8] != a.att[8] && (i.skewX = a.att[8]), e.att[9] != a.att[9] && (i.skewY = a.att[9]), e.att[10] != a.att[10] && (i.cacheAsBitmap = a.att[10] ? !0 : !1), e.att[11] != a.att[11] && (1 == a.att[11] ? i.blendMode = egret.BlendMode.ADD: 2 == a.att[11] ? i.blendMode = "erase": i.blendMode = egret.BlendMode.NORMAL), e.att[12] != a.att[12]) if (a.att[12]) {
                var s = t.getChildByName(t.$_data.instances[a.att[12] - 1]);
                i.mask != s && (i.mask = s, s.visible = !1)
            } else i.mask && !i.mask.stage && (i.mask = null);
            return i
        },
        a.createDispayObject = function(t, e, i) {
            var s = a.__getDisplayByName(t._packageData, e),
            r = t.$_data.instances[i.att[0]];
            return t[r] = s,
            s.name = r,
            a.__initDispayObject(s, i, t),
            s
        },
        a.__initDispayObject = function(e, a, i) {
            if (a.att[2] && (e.x = a.att[2]), a.att[3] && (e.y = a.att[3]), 1 != a.att[4] && (e.scaleX = a.att[4]), 1 != a.att[5] && (e.scaleY = a.att[5]), 1 != a.att[6] && (e.alpha = a.att[6]), a.att[8] && (e.skewX = a.att[8]), a.att[9] && (e.skewY = a.att[9]), a.att[10] && (e.cacheAsBitmap = a.att[10] ? !0 : !1), a.att[11] && 1 == a.att[11] && (e.blendMode = egret.BlendMode.ADD), a.att[12]) {
                var s = i.getChildByName(i.$_data.instances[a.att[12] - 1]);
                e.mask = s,
                s.visible = !1
            }
            if (a.att[13]) {
                var r = [];
                try {
                    for (var n = a.att[13], o = n.length, h = 0; o > h; h++) {
                        var c = n[h];
                        switch (c[0]) {
                        case 1:
                            r.push(new egret.GlowFilter(c[1], c[2], c[3], c[4], c[5], c[6], !!c[7], !!c[8]));
                            break;
                        case 2:
                            r.push(new egret.BlurFilter(c[1], c[2], c[3]));
                            break;
                        case 3:
                            r.push(new egret.ColorMatrixFilter(c.slice(1)));
                            break;
                        case 4:
                            r.push(new egret.DropShadowFilter(c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], !!c[9], !!c[10], !!c[11]))
                        }
                    }
                } catch(l) {}
                e.filters = r
            }
            e instanceof t.MovieClip ? e.play() : e instanceof t.BitmapAnimation && e.play()
        },
        a.__getDisplayByName = function(e, i) {
            var s = e.getRes(i);
            if (!s) return null;
            var r = "";
            switch (s.type) {
            case t.SymbolType.TYPE_IMG:
                var n = t.Bitmap.getInstance(r, i, e);
                return n;
            case t.SymbolType.TYPE_SCALE_9_GRID_IMG:
                var o = t.Bitmap.getInstance(r, i, e);
                return o;
            case t.SymbolType.TYPE_IMGS:
                var h = t.BitmapAnimation.getInstance(r, i, e);
                return h;
            case t.SymbolType.TYPE_SHAPE:
                var c = t.Shape.getInstance(r, i, e);
                return c;
            case t.SymbolType.TYPE_TXT:
                var l = t.TextField.getInstance(r, i, e);
                return l;
            case t.SymbolType.TYPE_TXT_TLF:
                var u = t.TextField.getInstance(r, i, e);
                return u;
            case t.SymbolType.TYPE_SPR:
                var d = a.getInstance(r, i, e);
                return d;
            case t.SymbolType.TYPE_MC:
                var p = t.MovieClip.getInstance(r, i, e);
                return p;
            case t.SymbolType.TYPE_BTN:
                var _ = t.Button.getInstance(r, i, e);
                return _;
            case t.SymbolType.TYPE_SCENE:
                var m = t.Scene.getInstance(r, i, e);
                return m
            }
            return null
        },
        a.__getAnyByName = function(e, i) {
            var s = t.SimplePackageData.getInstance(e);
            return s ? a.__getDisplayByName(s, i) : null
        },
        r.clear = function() {
            this._packageData = null,
            this.$_data = null,
            this._className = "",
            this._instanceList = null,
            this._oldInstanceList = null
        },
        a
    } (egret.DisplayObjectContainer);
    t.Sprite = e,
    egret.registerClass(e, "deden.Sprite"),
    t.getSprite = e.getInstance,
    t.getAnyDisplayObject = e.__getAnyByName,
    function() {
        var t = egret.DisplayObjectContainer.prototype.invalidateMatrix;
        t && (e.prototype.invalidateMatrix = function() {
            t.call(this),
            this.$_cacheAsShareBitmap && this.$displayList && this.$displayList.invalidateMatrix()
        });
        var a = egret.DisplayObjectContainer.prototype.invalidatePosition;
        a && (e.prototype.invalidatePosition = function() {
            a.call(this),
            this.$_cacheAsShareBitmap && this.$displayList && this.$displayList.invalidatePosition()
        });
        var i = egret.DisplayObjectContainer.prototype.markChildDirty;
        i && (egret.DisplayObjectContainer.prototype.markChildDirty = function(t, e) {
            if (t.$_cacheAsShareBitmap) {
                var a = t.$displayList; (a || t.$renderNode) && e && (a.needdraw = !0, e.markDirty(a || t)),
                i.call(this, t, e)
            } else i.call(this, t, e)
        });
        var s = egret.DisplayObjectContainer.prototype.$invalidateAllChildren;
        s && (e.prototype.$invalidateAllChildren = function() {
            if (this.$_cacheAsShareBitmap) {
                var t = this.$displayList;
                t && (t.needdraw = !0, this.$markProxyDirty()),
                s.call(this)
            } else s.call(this)
        })
    } ()
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function(e) {
        function a() {
            if (e.call(this), !this._className && a.caller.prototype.__class__) {
                var i = a.caller.prototype.__class__,
                s = i.lastIndexOf(".");
                if (s > -1) {
                    var r = i.slice(0, s),
                    n = t.SimplePackageData.getInstanceNoWarnning(r);
                    n && a._constructorButton(n, i.slice(s + 1), this)
                }
            }
        }
        __extends(a, e);
        var i = __define,
        s = a,
        r = s.prototype;
        return a.getInstance = function(e, i, s) {
            return a._constructorButton(s || t.SimplePackageData.getInstance(e), i)
        },
        i(a, "upStateAfter",
        function() {
            return a._upStateAfter
        },
        function(t) {
            a._upStateAfter = t
        }),
        i(a, "downStateAfter",
        function() {
            return a._downStateAfter
        },
        function(t) {
            a._downStateAfter = t
        }),
        a._constructorButton = function(e, i, s) {
            var r = e.getRes(i);
            if (!r || r instanceof t.SimplePackageData) return console.error(e.packageName + " 素材包中的‘" + i + "’原件不存在！"),
            null;
            if (!s) {
                var n = egret.getDefinitionByName(e.packageName + "." + i);
                if (s = n ? new n: new a, n) return s
            }
            return s._className = i,
            s._packageData = e,
            s.$data = r,
            s.childrenCreated(),
            s
        },
        r.childrenCreated = function() {},
        i(r, "$data", void 0,
        function(t) {
            return null == t ? void console.error(this._className + "数据为空！") : (this._instanceList = [], this._oldInstanceList = [], this.$_data = t, void this.initButton())
        }),
        i(r, "upState",
        function() {
            return this._upState
        },
        function(t) {
            return t ? void(this._upState.parent ? (this._upState.parent.removeChild(this._upState), this._upState = t, this.addChild(this._upState)) : this._upState = t) : void console.error("显示对想不能设置为空！")
        }),
        i(r, "downState",
        function() {
            return this._downState
        },
        function(t) {
            return t ? void(this._downState.parent ? (this._downState.parent.removeChild(this._downState), this._downState = t, this.addChild(this._downState)) : this._downState = t) : void console.error("显示对想不能设置为空！")
        }),
        r.initButton = function() {
            this.touchEnabled = !0,
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this, !0),
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this, !0),
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this, !0);
            var e = this.$_data.keyFrame[0].list;
            e.length && (this._upState = t.Sprite.__getDisplayByName(this._packageData, this.$_data.usedClasses[e[0].att[1]]), t.Sprite.__initDispayObject(this._upState, e[0], this), this.addChild(this._upState)),
            e = this.$_data.keyFrame[1].list,
            e.length && (this._downState = t.Sprite.__getDisplayByName(this._packageData, this.$_data.usedClasses[e[0].att[1]]), t.Sprite.__initDispayObject(this._downState, e[0], this)),
            this.touchChildren = !1
        },
        r.onTouchBegin = function(t) {
            this.addChild(this._downState),
            this._upState.parent == this && this.removeChild(this._upState),
            a._downStateAfter && a._downStateAfter(this)
        },
        r.onTouchEnd = function(t) {
            this.addChild(this._upState),
            this._downState.parent == this && this.removeChild(this._downState),
            a._upStateAfter && a._upStateAfter(this)
        },
        a
    } (t.Sprite);
    t.Button = e,
    egret.registerClass(e, "deden.Button"),
    t.getButton = e.getInstance
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function(e) {
        function a() {
            if (e.call(this), this._hasGroupLoop = !1, this._currentRepeatCount = 0, this._currentFrame = 1, this._isAddedToStage = !1, this._hasAddedEvents = !1, this._isStopped = !0, this._hasTempTurnToFrame = !1, this._repeatCount = -1, this._totalFrames = 0, this._groupEndFrame = 0, this._groupStartFrame = 0, this._frameRate = 24, this._frameIntervalTime = 0, this.lastTime = 0, this._passedTime = 0, this._currentGroupRepeatCount = 0, this._groupRepeatCount = -1, !this._className && a.caller.prototype.__class__) {
                var i = a.caller.prototype.__class__,
                s = i.lastIndexOf(".");
                if (s > -1) {
                    var r = i.slice(0, s),
                    n = t.SimplePackageData.getInstanceNoWarnning(r);
                    n && a.constructorMovieClip(n, i.slice(s + 1), this)
                }
            }
        }
        __extends(a, e);
        var i = __define,
        s = a,
        r = s.prototype;
        return a.getInstance = function(e, i, s) {
            return a.constructorMovieClip(s || t.SimplePackageData.getInstance(e), i)
        },
        a.constructorMovieClip = function(e, i, s) {
            var r = e.getRes(i);
            if (!r || r instanceof t.SimplePackageData) return console.error(e.packageName + " 素材包中的‘" + i + "’原件不存在！"),
            null;
            if (!s) {
                var n = egret.getDefinitionByName(e.packageName + "." + i);
                if (s = n ? new n: new a, n) return s
            }
            return s._className = i,
            s._packageData = e,
            e.frameRate && (s._frameRate = e.frameRate),
            s.$data = r,
            s.childrenCreated(),
            s
        },
        i(r, "$data", void 0,
        function(t) {
            null != t && (this.$_data = t, this._instanceList = [], this._oldInstanceList = [], this._instanceList = [], this._frameEventDic = {},
            this._packageData.frameRate && (this._frameRate = this._packageData.frameRate), this._frameIntervalTime = 1e3 / this._frameRate, this._currentFrame = 1, this._groupStartFrame = 1, this._totalFrames = t.keyFrame.length, this._groupEndFrame = this._totalFrames, this._currentRepeatCount = 0, this._isPlaying = !1, this.draw(0))
        }),
        r.addGroupRepeat = function(t, e) {
            this._hasGroupLoop = !0,
            e && (this._groupRepeatCount = e, this._currentGroupRepeatCount = 0),
            0 >= t && (t = 1);
            var a = 0,
            i = this.labels;
            if (i.length) {
                var s = this.currentLabel;
                s ? (a = i.indexOf(s), a < i.length - 1 ? (this._groupStartFrame = this.$_data.frameLabel.frames[a], a = this.$_data.frameLabel.frames[a + 1] - 1) : (a = this.totalFrames, this._groupStartFrame = this.$_data.frameLabel.frames.length ? this.$_data.frameLabel.frames[this.$_data.frameLabel.frames.length - 1] : 1)) : a = this.totalFrames
            } else a = this.totalFrames;
            this._groupEndFrame = a
        },
        r.clearGroupRepeat = function() {
            this._hasGroupLoop && (this._hasGroupLoop = !1, this._groupRepeatCount = -1, this._currentGroupRepeatCount = 0),
            this._groupStartFrame = 1,
            this._groupEndFrame = this._totalFrames
        },
        i(r, "groupRepeatCount",
        function() {
            return this._groupRepeatCount
        },
        function(t) {
            this._groupRepeatCount = t,
            this._currentGroupRepeatCount = 0
        }),
        r.$onAddToStage = function(t, a) {
            e.prototype.$onAddToStage.call(this, t, a),
            this._isAddedToStage = !0,
            this._isPlaying && this._totalFrames > 1 && this.setIsPlaying(!0)
        },
        r.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this),
            this._isAddedToStage = !1,
            this.setIsPlaying(!1)
        },
        r.addEventListener = function(a, i, s, r, n) {
            e.prototype.addEventListener.call(this, a, i, s, r, n),
            0 == a.indexOf(t.Event.ENTER_KEY_FRAME_) && (this._frameEventDic[parseInt(a.slice(t.Event.ENTER_KEY_FRAME_.length))] = !0)
        },
        r.removeEventListener = function(a, i, s, r) {
            e.prototype.removeEventListener.call(this, a, i, s, r),
            this.hasEventListener(a) || 0 == a.indexOf(t.Event.ENTER_KEY_FRAME_) && delete this._frameEventDic[parseInt(a.slice(t.Event.ENTER_KEY_FRAME_.length))]
        },
        i(r, "currentFrameLabel",
        function() {
            return a._getFrameLabelByFrame(this.$_data, this._currentFrame, !0)
        }),
        i(r, "currentLabel",
        function() {
            return a._getFrameLabelByFrame(this.$_data, this._currentFrame, !1)
        }),
        r.getFrameByLabel = function(t) {
            var e = this.$_data.frameLabel,
            a = e.labels.indexOf(t);
            return - 1 != a ? e.frames[a] : 0
        },
        i(r, "labels",
        function() {
            return this.$_data.frameLabel ? this.$_data.frameLabel.labels.slice() : []
        }),
        i(r, "labelFrames",
        function() {
            return this.$_data.frameLabel ? this.$_data.frameLabel.frames.slice() : []
        }),
        r.setIsTempTurnToFrameState = function(t) {
            this._hasTempTurnToFrame != t && (this._isStopped ? t ? (this._hasTempTurnToFrame = !0, this.lastTime = egret.getTimer(), (egret.ticker || egret.sys.$ticker).$startTick(this._advanceTime, this)) : (this._hasTempTurnToFrame = !1, (egret.ticker || egret.sys.$ticker).$stopTick(this._advanceTime, this)) : this._hasTempTurnToFrame = !1)
        },
        r.setIsPlaying = function(t) {
            this._isStopped == t && (t ? this._totalFrames > 1 && (this._isAddedToStage || this._hasAddedEvents) && (this.lastTime = egret.getTimer(), this._hasTempTurnToFrame || (egret.ticker || egret.sys.$ticker).$startTick(this._advanceTime, this), this._isStopped = !t, this._hasTempTurnToFrame = !1) : (this._hasTempTurnToFrame || (egret.ticker || egret.sys.$ticker).$stopTick(this._advanceTime, this), this._isStopped = !t))
        },
        r._advanceTime = function(e) {
            var a;
            if (this._isStopped && this._hasTempTurnToFrame) return this.setIsTempTurnToFrameState(!1),
            this._exitFrameState.isBreak = !1,
            a = !!this._exitFrameState.result(),
            this._exitFrameState.isBreak = !0,
            a;
            if (!this._isAddedToStage && !this._hasAddedEvents) return this.setIsPlaying(!1),
            !1;
            var i = this,
            s = e - i.lastTime;
            i.lastTime = e;
            var r = i._frameIntervalTime,
            n = i._passedTime + s;
            i._passedTime = n % r;
            var o = n / r;
            if (1 > o) return ! 1;
            for (var h; o >= 1 && !this._isStopped;) o--,
            i._currentFrame++,
            i._currentFrame > i._groupEndFrame ? (this._hasGroupLoop ? (i._currentGroupRepeatCount++, h = -1 == i._groupRepeatCount || i._currentGroupRepeatCount < i._groupRepeatCount) : (i._currentRepeatCount++, h = -1 == i._repeatCount || i._currentRepeatCount < i._repeatCount), h ? (this._hasGroupLoop ? i.hasEventListener(t.Event.LOOP_COMPLETE_GROUP) && i.dispatchEventWith(t.Event.LOOP_COMPLETE_GROUP) : i.hasEventListener(t.Event.LOOP_COMPLETE) && i.dispatchEventWith(t.Event.LOOP_COMPLETE), i._currentFrame = i._groupStartFrame, i._frameEventDic[i._currentFrame] && this.dispatchEventWith(t.Event.ENTER_KEY_FRAME_ + i._currentFrame)) : (i.stop(), this._hasGroupLoop ? i.hasEventListener(t.Event.COMPLETE_GROUP) && i.dispatchEventWith(t.Event.COMPLETE_GROUP) : i.hasEventListener(t.Event.COMPLETE) && i.dispatchEventWith(t.Event.COMPLETE), this._isStopped ? (i._currentFrame = i._groupEndFrame, i.clearGroupRepeat()) : (i._currentFrame = i._groupStartFrame, i._frameEventDic[i._currentFrame] && this.dispatchEventWith(t.Event.ENTER_KEY_FRAME_ + i._currentFrame)))) : i._frameEventDic[i._currentFrame] && this.dispatchEventWith(t.Event.ENTER_KEY_FRAME_ + i._currentFrame),
            this._exitFrameState && (this._exitFrameState.isBreak = !1, this._exitFrameState.isBreak = !0);
            return this.draw(i._currentFrame - 1),
            !1
        },
        i(r, "frameRate",
        function() {
            return this._frameRate
        },
        function(t) {
            t != this._frameRate && (this._frameRate = t, this._frameIntervalTime = 1e3 / this._frameRate)
        }),
        i(r, "currentCount",
        function() {
            return this._currentRepeatCount
        }),
        r.reset = function() {
            this._currentRepeatCount = 0,
            this._currentFrame = 1
        },
        i(r, "currentFrame",
        function() {
            return this._currentFrame
        }),
        r.gotoAndPlay = function(e, a, i, s, r) {
            if (! (this._totalFrames < 1)) {
                if (this._exitFrameState || (this._exitFrameState = new t.StateUtil(!0)), this._exitFrameState["in"](this)) return void this.setIsTempTurnToFrameState(!0);
                var n;
                if ("function" == typeof arguments[arguments.length - 1] && (n = arguments[arguments.length - 1], r == n || (s == n ? s = !1 : i == n ? i = !1 : a == n && (a = 0))), "string" == typeof e) {
                    var o = this.getFrameByLabel(e);
                    if (!o) return void console.warn('帧标签"' + e + '"不存在!已忽略该跳转指令.\n正确的帧标签:' + this.labels);
                    e = o
                }
                a && (this._repeatCount = a, this._currentRepeatCount = 0),
                e > this._totalFrames && (e = this._totalFrames),
                1 > e && (e = 1),
                this._isPlaying || (this._isPlaying = !0, this.setIsPlaying(!0)),
                this._currentFrame = e,
                i && (this.clearGroupRepeat(), this.labels.length ? this.addGroupRepeat(this.getFrameByLabel(this.currentLabel), a) : this.addGroupRepeat(1, a)),
                this.draw(this._currentFrame - 1),
                s && this._playAll(this);
                var h = n ? n() : !1;
                return this._frameEventDic[this._currentFrame] && this.dispatchEventWith(t.Event.ENTER_KEY_FRAME_ + this._currentFrame),
                h ? h: void 0
            }
        },
        r.gotoAndStop = function(e, a, i) {
            if (void 0 === a && (a = !1), !(this._totalFrames < 1)) {
                if (this._exitFrameState || (this._exitFrameState = new t.StateUtil(!0)), this._exitFrameState["in"](this)) return void this.setIsTempTurnToFrameState(!0);
                var s;
                if ("function" == typeof arguments[arguments.length - 1] && (s = arguments[arguments.length - 1], i == s || a == s && (a = !1)), "string" == typeof e) {
                    var r = this.getFrameByLabel(e);
                    if (!r) return void console.warn('帧标签"' + e + '"不存在!已忽略该跳转指令.\n正确的帧标签:' + this.labels);
                    e = r
                }
                e > this._totalFrames && (e = this._totalFrames),
                this._isPlaying && (this._isPlaying = !1, this.setIsPlaying(!1)),
                1 > e && (e = 1),
                this._currentFrame = e,
                this.draw(this._currentFrame - 1),
                a && this._stopAll(this);
                var n = s ? s() : !1;
                return this._frameEventDic[this._currentFrame] && this.dispatchEventWith(t.Event.ENTER_KEY_FRAME_ + this._currentFrame),
                n ? n: void 0
            }
        },
        r.stop = function(t) {
            this._isPlaying = !1,
            this.setIsPlaying(!1),
            t && this._stopAll(this)
        },
        r.play = function(t, e, a) {
            this._totalFrames <= 1 || (this._isPlaying = !0, this.setIsPlaying(!0), t && (this._repeatCount = t, this._currentRepeatCount = 0), a && this._playAll(this), e && (this.clearGroupRepeat(), this.labels.length ? this.addGroupRepeat(this.getFrameByLabel(this.currentLabel), t) : this.addGroupRepeat(1, t)))
        },
        i(r, "isPlaying",
        function() {
            return this._isPlaying
        }),
        r.nextFrame = function(e) {
            if (this._exitFrameState || (this._exitFrameState = new t.StateUtil(!0)), this._exitFrameState["in"](this)) return void this.setIsTempTurnToFrameState(!0);
            var a = e,
            i = a ? a() : !1;
            return this._currentFrame < this._totalFrames && (this._currentFrame++, this._isPlaying = !1, this.setIsPlaying(!1), this.draw(this._currentFrame - 1), this._frameEventDic[this._currentFrame] && this.dispatchEventWith(t.Event.ENTER_KEY_FRAME_ + this._currentFrame)),
            i ? i: void 0
        },
        r.prevFrame = function(e) {
            if (this._exitFrameState || (this._exitFrameState = new t.StateUtil(!0)), this._exitFrameState["in"](this)) return void this.setIsTempTurnToFrameState(!0);
            var a = e,
            i = a ? a() : !1;
            return this._currentFrame > 1 && (this._currentFrame--, this._isPlaying = !1, this.setIsPlaying(!1), this.draw(this._currentFrame - 1), this._frameEventDic[this._currentFrame] && this.dispatchEventWith(t.Event.ENTER_KEY_FRAME_ + this._currentFrame)),
            i ? i: void 0
        },
        i(r, "repeatCount",
        function() {
            return this._repeatCount
        },
        function(t) {
            this._repeatCount = t,
            this._currentRepeatCount = 0
        }),
        i(r, "totalFrames",
        function() {
            return this._totalFrames
        }),
        r.clear = function() {
            e.prototype.clear.call(this),
            this._hasAddedEvents = !1,
            this._exitFrameState && this._exitFrameState.clear(),
            this._groupEndFrame = 0,
            this._groupStartFrame = 0,
            this._totalFrames = 0,
            this._currentFrame = 1,
            this._passedTime = 0,
            this._currentRepeatCount = 0,
            this._isStopped = !0,
            this._className = "",
            this._frameEventDic = null;
            for (var t = this.numChildren,
            a = t - 1; a >= 0; a--) this.removeChildAt(a)
        },
        a._getFrameLabelByFrame = function(t, e, a) {
            var i = t.frameLabel;
            if (i) {
                var s;
                if (!a) {
                    var r;
                    for (s = 0; s < i.frames.length && e >= i.frames[s]; s++) r = s;
                    return i.labels[r]
                }
                for (s = 0; s < i.frames.length; s++) if (i.frames[s] === e) return i.labels[s]
            }
            return null
        },
        a
    } (t.Sprite);
    t.MovieClip = e,
    egret.registerClass(e, "deden.MovieClip"),
    t.getMovieClip = e.getInstance
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function(e) {
        function a() {
            if (e.call(this), !this._className && a.caller.prototype.__class__) {
                var i = a.caller.prototype.__class__,
                s = i.lastIndexOf(".");
                if (s > -1) {
                    var r = i.slice(0, s),
                    n = t.SimplePackageData.getInstanceNoWarnning(r);
                    n && a.constructorScene(n, i.slice(s + 1), this)
                }
            }
        }
        __extends(a, e);
        var i = (__define, a),
        s = i.prototype;
        return a.getInstance = function(e, i, s) {
            return a.constructorScene(s || t.SimplePackageData.getInstance(e), i)
        },
        a.constructorScene = function(e, a, i) {
            var s = e.getRes(a);
            if (!s || s instanceof t.SimplePackageData) return console.error(e.packageName + " 素材包中的‘" + a + "’原件不存在！"),
            null;
            if (!i) {
                var r = egret.getDefinitionByName(e.packageName + "." + a);
                if (i = r ? new r: new t.MovieClip, r) return i
            }
            return i._className = a,
            i._packageData = e,
            i._currentScene = {
                name: a.slice(6),
                index: e.symbolsInfo.scenes[a]
            },
            i.$data = s,
            i.childrenCreated(),
            i
        },
        s.gotoSceneByIndex = function(t) {
            var e = this._packageData.symbolsInfo.scenes;
            if (1 != e.scenes.length) {
                var a = e.scenes[0 > t ? 0 : t >= e.scenes.length ? e.scenes.length - 1 : t].name,
                i = this._packageData.symbolsInfo.containers[a],
                s = this._packageData;
                this.stop(),
                this.clear(),
                this._className = a,
                this._currentScene.name = a.slice(6),
                this._currentScene.index = t,
                this._packageData = s,
                this.$data = i
            }
        },
        s.gotoSceneByName = function(t) {
            var e = this._packageData.symbolsInfo.scenes;
            if (1 != e.scenes.length) {
                var a = e[t];
                this.gotoSceneByIndex(a)
            }
        },
        s.nextScene = function() {
            var t = this._packageData.symbolsInfo.scenes;
            if (1 != t.scenes.length) {
                var e = t[this._className];
                this.gotoSceneByIndex(++e)
            }
        },
        s.prevScene = function() {
            var t = this._packageData.symbolsInfo.scenes;
            if (1 != t.scenes.length) {
                var e = t[this._className];
                this.gotoSceneByIndex(--e)
            }
        },
        a
    } (t.MovieClip);
    t.Scene = e,
    egret.registerClass(e, "deden.Scene"),
    t.getScene = e.getInstance
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function(e) {
        function a() {
            if (e.call(this), !this._className && a.caller.prototype.__class__) {
                var i = a.caller.prototype.__class__,
                s = i.lastIndexOf(".");
                if (s > -1) {
                    var r = i.slice(0, s),
                    n = t.SimplePackageData.getInstanceNoWarnning(r);
                    n && a._constructorShape(n, i.slice(s + 1), this)
                }
            }
        }
        __extends(a, e);
        var i = __define,
        s = a,
        r = s.prototype;
        return a.transformPoint = function(t, e, a) {
            for (var i, s, r = 0; a > r; r += 2) i = e[r],
            s = e[r + 1],
            e[r] = t.a * i + t.c * s + t.tx,
            e[r + 1] = t.b * i + t.d * s + t.ty
        },
        a.getInstance = function(e, i, s) {
            return a._constructorShape(s || t.SimplePackageData.getInstance(e), i)
        },
        a._constructorShape = function(e, i, s) {
            var r = e.getRes(i);
            if (!r || r instanceof t.SimplePackageData) return console.error(e.packageName + " 素材包中的‘" + i + "’原件不存在！"),
            null;
            if (!s) {
                var n = egret.getDefinitionByName(e.packageName + "." + i);
                if (s = n ? new n: new a, n) return s
            }
            return s._className = i,
            s._packageData = e,
            s.data = r,
            s.childrenCreated(),
            s
        },
        a.getShapeData = function(e, a, i) {
            var s = i ? i: t.SimplePackageData.getInstance(e),
            r = s.getRes(a);
            return r ? r: (console.error(e + " 素材包中的‘" + a + "’数据不存在！"), null)
        },
        r.childrenCreated = function() {},
        i(r, "data", void 0,
        function(t) {
            null != t && (this._data = t, this.draw())
        }),
        r.draw = function() {
            var t = this._data.keyFrame[0].list,
            e = t.length,
            i = this.graphics;
            i.clear();
            var s;
            e && (s = {});
            for (var r = 0; e > r; r++) {
                var n = t[r];
                if (!s[n.id]) if (n.matrix) if (s[n.fid]) {
                    var o = a._m;
                    o.a = n.matrix[0],
                    o.b = n.matrix[1],
                    o.c = n.matrix[2],
                    o.d = n.matrix[3],
                    o.tx = n.matrix[4],
                    o.ty = n.matrix[5],
                    o.prepend.apply(o, s[n.fid]),
                    s[n.id] = [o.a, o.b, o.c, o.d, o.tx, o.ty]
                } else s[n.id] = n.matrix.slice(0);
                else s[n.fid] && (s[n.id] = s[n.fid]);
                if (n.type) {
                    var h = a.getShapeData(this._className, "Cls_" + n.id, this._packageData);
                    i["~~drawCustomShape"](h, s[n.id])
                }
            }
        },
        r.clear = function() {
            this._data = null,
            this._className = ""
        },
        a.isNATIVE = egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE,
        a._m = new egret.Matrix,
        a._m2 = new egret.Matrix,
        a.injectorFunction = function() {
            function t(t, e) {
                var i, s = t.length;
                if (e) {
                    var r = a._m;
                    for (r.a = e[0], r.b = e[1], r.c = e[2], r.d = e[3], r.tx = e[4], r.ty = e[5], i = 0; s > i; i++) {
                        var n = t[i].slice(0),
                        o = n.pop();
                        if (o) switch (o) {
                        case 8:
                            a.transformPoint(r, n, 4),
                            this.curveTo.apply(this, n);
                            break;
                        case 7:
                            a.transformPoint(r, n, 2),
                            this.lineTo.apply(this, n);
                            break;
                        case 6:
                            a.transformPoint(r, n, 2),
                            this.moveTo.apply(this, n);
                            break;
                        case 1:
                            n.length || n.push(1, 0, 0),
                            this.lineStyle.apply(this, n);
                            break;
                        case 2:
                            this.beginFill.apply(this, n);
                            break;
                        case 3:
                            if (n.length > 4) {
                                var h = a._m2;
                                h.a = n[4][0],
                                h.b = n[4][1],
                                h.c = n[4][2],
                                h.d = n[4][3],
                                h.tx = n[4][4],
                                h.ty = n[4][5],
                                h.prepend.apply(h, e),
                                n[4] = h
                            }
                            this.beginGradientFill.apply(this, n);
                            break;
                        case 4:
                            break;
                        case 5:
                        } else this.endFill()
                    }
                } else for (i = 0; s > i; i++) {
                    var n = t[i].slice(0),
                    o = n.pop();
                    if (o) switch (o) {
                    case 8:
                        this.curveTo.apply(this, n);
                        break;
                    case 7:
                        this.lineTo.apply(this, n);
                        break;
                    case 6:
                        this.moveTo.apply(this, n);
                        break;
                    case 1:
                        n.length || n.push(1, 0, 0),
                        this.lineStyle.apply(this, n);
                        break;
                    case 2:
                        this.beginFill.apply(this, n);
                        break;
                    case 3:
                        if (a.isNATIVE) break;
                        if (n.length > 4) {
                            var c = n[4];
                            a._m.a = c[0],
                            a._m.b = c[1],
                            a._m.c = c[2],
                            a._m.d = c[3],
                            a._m.tx = c[4],
                            a._m.ty = c[5],
                            n[4] = a._m
                        }
                        this.beginGradientFill.apply(this, n);
                        break;
                    case 4:
                        break;
                    case 5:
                    } else this.endFill()
                }
            }
            return egret.Graphics.prototype["~~drawCustomShape"] = function(e, a) {
                t.call(this, e, a)
            },
            !0
        },
        a.hasInjectored = a.injectorFunction(),
        a
    } (egret.Shape);
    t.Shape = e,
    egret.registerClass(e, "deden.Shape"),
    t.getShape = e.getInstance;
    var a = function() {
        function t(t, e, a) {
            this.method = t,
            this.thisObject = e,
            this.args = a
        }
        var e = (__define, t);
        e.prototype;
        return t
    } ();
    egret.registerClass(a, "Command")
} (deden || (deden = {}));
var deden; !
function(t) { !
    function() {
        var a = Object.getOwnPropertyDescriptor(egret.Bitmap.prototype, "$renderNode");
        a || (a = {}),
        a.get = function() {
            if (arguments.callee.caller == egret.sys.systemRenderer.drawDisplayObject) {
                if (this.$DisplayObject = this.$_source.$DisplayObject, this.$displayFlags = this.$_source.$displayFlags, !this.bitmapData) {
                    var e = t.Bitmap.drawTexture(this.$_source, null, !0);
                    this.$_data = e
                }
                return console.log("渲染!"),
                this.$getRenderNode()
            }
            return this.$_renderNode
        },
        a.set = function(t) {
            this.$_renderNode = t
        },
        Object.defineProperty(egret.Bitmap.prototype, "$renderNode", a);
        var i = egret.sys.DisplayList.prototype.markDirty;
        egret.sys.DisplayList.prototype.markDirty = function(t) {
            var a = t;
            if (t instanceof e) {
                if (a.$_textureToRender && a.$_textureToRender == e.getShareCacheBitmap(a.$_shareBitmapGroupName, a.root.currentFrame || a.root.$_updateCurrentFrame && a.root.$_updateCurrentFrame() || 1)) {
                    if (!a.needdraw) return;
                    a.needdraw = !1,
                    a.root.$removeFlags(512)
                }
                egret.callLater(function() {
                    a.$textureUpdate()
                },
                this)
            }
            i.call(this, t)
        }
    } ();
    var e = function(e) {
        function a() {
            e.call(this),
            this.needdraw = !1,
            this.$_isAddedToStage = !1,
            this.$_offsetX = 0,
            this.$_offsetY = 0,
            this.$_currentFrame = 1,
            this.hasOwnProperty("$renderNode") ? this.$renderNode = new egret.sys.BitmapNode: this.$renderRegion = new egret.sys.Region
        }
        __extends(a, e);
        var i = __define,
        s = a,
        r = s.prototype;
        return a.addGroup = function(t, e, i) {
            var s = a.groups.get(t, []);
            s.length || s.push(new BC.Dictionary, i && i.length ? i: [1], {}),
            s[0].add(e, e)
        },
        a.delGroup = function(t, e) {
            var i = a.groups.get(t);
            if (i && i.length) {
                var s = i[0];
                if (s.del(e), s.count <= 0) {
                    a.groups.del(t)
                }
            }
        },
        a.getShareCacheBitmap = function(t, e) {
            var i = a.groups.get(t);
            if (i && i.length) {
                var s = i[1],
                r = i[2],
                n = a.getTextureFrame(s, e, 1);
                return r[n]
            }
            return null
        },
        a.setShareCacheBitmap = function(t, e, i) {
            var s = a.groups.get(t);
            if (s && s.length) {
                var r = s[1],
                n = s[2],
                o = a.getTextureFrame(r, e, 1);
                return n[o] = i,
                !0
            }
            return ! 1
        },
        a.getTextureFrame = function(t, e, a) {
            void 0 === a && (a = 0);
            for (var i = t.length,
            s = 1,
            r = 0; i > r; r++) {
                var n = t[r],
                o = Array.isArray(n) ? n[0] : n;
                if (o > e) return Array.isArray(s) ? s[1] : s;
                s = n
            }
            return Array.isArray(s) ? s[1] : s
        },
        i(r, "$data", void 0,
        function(t) {
            null != t && (this.$_data = t)
        }),
        r.$onAddToStage = function(t, a) {
            e.prototype.$onAddToStage.call(this, t, a),
            this.$_isAddedToStage = !0
        },
        r.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this),
            this.$_isAddedToStage = !1
        },
        r.updateRender = function() {
            this.$textureUpdate()
        },
        r.markDirty = function(t) {
            this.$parentDisplayList && this.$parentDisplayList.markDirty(this)
        },
        r.$render = function() {
            var e;
            arguments.length && (e = arguments[0]);
            var a = this.$textureUpdate();
            if (a) {
                if (!a.bitmapData) return;
                e && (e.imageSmoothingEnabled = this.root.smoothing);
                var i = a._bitmapWidth || a.textureWidth,
                s = a._bitmapHeight || a.textureHeight,
                r = Math.round(a.$getScaleBitmapWidth()),
                n = Math.round(a.$getScaleBitmapHeight()),
                o = Math.round( - this.$_offsetX),
                h = Math.round( - this.$_offsetY);
                if (e) e.drawImage(a._bitmapData, a._bitmapX, a._bitmapY, i, s, o, -h, r, n);
                else {
                    var c = a.$getTextureWidth(),
                    l = a.$getTextureHeight(),
                    u = a._sourceWidth,
                    d = a._sourceHeight;
                    t.Bitmap.$drawImage(this.$renderNode, a._bitmapData, a._bitmapX, a._bitmapY, i, s, o, h, c, l, r, n, u, d, null, egret.BitmapFillMode.SCALE, this.$smoothing)
                }
            }
        },
        r.$textureUpdate = function() {
            if (!this.$_data) return this.$_textureToRender;
            var e = this.root.currentFrame || this.root.$_updateCurrentFrame && this.root.$_updateCurrentFrame() || 1,
            i = a.getShareCacheBitmap(this.$_shareBitmapGroupName, e);
            return i || (i = t.Bitmap.drawTexture(this.root, null, !0), a.setShareCacheBitmap(this.$_shareBitmapGroupName, e, i)),
            this.$_textureToRender != i && (this.$_textureToRender = i, this.$_offsetX = -i._offsetX, this.$_offsetY = -i._offsetY, this.$_textureToRender._bitmapData || console.warn(111), this.$invalidateContentBounds()),
            i
        },
        r.$measureContentBounds = function(t) {
            var e = this.$_textureToRender;
            if (e) {
                var a = -this.$_offsetX,
                i = -this.$_offsetY,
                s = e.$getTextureWidth(),
                r = e.$getTextureHeight();
                t.setTo(a, i, s, r)
            } else t.setEmpty()
        },
        r.$clear = function() {
            this.$_textureToRender = null,
            this.$_currentFrame = 1,
            this.$_data = null,
            this.$stage = null,
            this.$parent = null,
            this.$parentDisplayList.markDirty(this)
        },
        r.destroy = function() {
            this.$clear()
        },
        a.groups = new BC.Dictionary,
        a
    } (egret.DisplayObject);
    t.ShareCacheBitmap = e,
    egret.registerClass(e, "deden.ShareCacheBitmap")
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function(e) {
        function a() {
            e.apply(this, arguments)
        }
        __extends(a, e);
        var i = __define,
        s = a,
        r = s.prototype;
        return a.getInstance = function(e, i, s) {
            var r = s ? s: t.SimplePackageData.getInstance(e),
            n = r.getRes(i);
            if (!n || n instanceof t.SimplePackageData) return console.error(e + " 素材包中的‘" + i + "’原件不存在！"),
            null;
            var o = new a;
            return o._className = i,
            o.data = n,
            o.childrenCreated(),
            o
        },
        r.childrenCreated = function() {},
        i(r, "data", void 0,
        function(e) {
            if (null != e) {
                this._data = e;
                var a = e.textFormat,
                i = a.htmlText;
                if (!e.textFormatHasInit) {
                    e.textFormatHasInit = !0;
                    var s = a.fontFamily || "",
                    r = s.split(",");
                    switch (s = "", t.TextField.replace_fontFamily_dic.has("*") ? s = t.TextField.replace_fontFamily_dic.get("*") : (r.map(function(e) {
                        return t.TextField.replace_fontFamily_dic.has(e) ? t.TextField.replace_fontFamily_dic.get(e) : e
                    }), s = r.join(",")), s = s + "," + t.TextField.default_fontFamily + "," + egret.TextField.default_fontFamily, s = s.replace(/,\s*,/, ","), a.fontFamily = s, a.textAlign) {
                    case egret.HorizontalAlign.LEFT:
                        break;
                    case egret.HorizontalAlign.RIGHT:
                        break;
                    case egret.HorizontalAlign.CENTER:
                        break;
                    case egret.HorizontalAlign.CONTENT_JUSTIFY:
                        break;
                    case egret.HorizontalAlign.JUSTIFY:
                        break;
                    default:
                        a.textAlign = egret.HorizontalAlign.CENTER
                    }
                    delete a.text,
                    a.displayAsPassword && (a.inputType = egret.TextFieldInputType.PASSWORD)
                }
                delete a.htmlText;
                for (var n in a) this[n] = a[n];
                1 == a.input && (this.type = egret.TextFieldType.INPUT),
                a.textColor || (this.textColor = 0),
                i && (this.textFlow = (new egret.HtmlTextParser).parser(i)),
                a.htmlText = i
            }
        }),
        a.replace_fontFamily_dic = new BC.Dictionary,
        a
    } (egret.TextField);
    t.TextField = e,
    egret.registerClass(e, "deden.TextField"),
    t.getTextField = e.getInstance
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function(t) {
        function e(e, a, i) {
            t.call(this, e, a, i)
        }
        __extends(e, t);
        var a = (__define, e);
        a.prototype;
        return e.ENTER_KEY_FRAME_ = "enter_key_frame_",
        e.COMPLETE = egret.Event.COMPLETE,
        e.LOOP_COMPLETE = egret.Event.LOOP_COMPLETE,
        e.COMPLETE_GROUP = egret.Event.COMPLETE + "Group",
        e.LOOP_COMPLETE_GROUP = egret.Event.LOOP_COMPLETE + "Group",
        e._eventDispatcher = new egret.DisplayObject,
        e.addEventListener = e._eventDispatcher.addEventListener,
        e.removeEventListener = e._eventDispatcher.removeEventListener,
        e.hasEventListener = e._eventDispatcher.hasEventListener,
        e.dispatchDedenEvent = e._eventDispatcher.dispatchEvent,
        e
    } (egret.Event);
    t.Event = e,
    egret.registerClass(e, "deden.Event")
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function(e) {
        function a() {
            e.apply(this, arguments)
        }
        __extends(a, e);
        var i = __define,
        s = a,
        r = s.prototype;
        return a.getInstance = function(e, i, s) {
            var r = s ? s: t.SimplePackageData.getInstance(e),
            n = r.getRes(i);
            if (!n || n instanceof t.SimplePackageData) return console.error(e + " 素材包中的‘" + i + "’原件不存在！"),
            null;
            var o = new a;
            return o._className = i,
            o.data = n,
            o
        },
        i(r, "data", void 0,
        function(t) {
            null != t && (this._data = t)
        }),
        a
    } (egret.HashObject);
    t.Sound = e,
    egret.registerClass(e, "deden.Sound"),
    t.getSound = e.getInstance
} (deden || (deden = {}));
var deden; !
function(t) {
    var e = function() {
        function t(t) {
            void 0 === t && (t = !1),
            this._isBreak = !0,
            this._result = 0,
            this._cache = [],
            this._cacheGroup = [],
            this._invite = t
        }
        var e = __define,
        a = t,
        i = a.prototype;
        return e(i, "isBreak",
        function() {
            return this._isBreak
        },
        function(t) {
            this._isBreak && !t ? (this._cacheGroup.unshift(this._cache.slice()), this._cache.length = 0, this._invite ? (this.out(), this._isBreak = t) : (this._isBreak = t, this.out())) : this._isBreak = t
        }),
        i["in"] = function(t) {
            return this._isBreak ? arguments.callee.caller.caller == this.out ? !1 : (this._cache.unshift([t, arguments.callee.caller.arguments]), !0) : !1
        },
        i.out = function() {
            for (; this._cacheGroup.length;) {
                var t = this._cacheGroup.pop(),
                e = t.length;
                for (this._result = 0; e--;) {
                    var a = t.pop();
                    try {
                        a[1].callee.apply(a[0], a[1]) && this._result++
                    } catch(i) {
                        console.error(i.message, i.stack)
                    }
                }
            }
        },
        i.addCallback = function(t, e) {
            for (var a = [], i = 2; i < arguments.length; i++) a[i - 2] = arguments[i];
            arguments.callee.caller != this.out && (a.callee = t, this._cache.unshift([e, a]), this._isBreak || egret.callLater(function() {
                this._cacheGroup.unshift(this._cache.slice()),
                this._cache.length = 0,
                this.out()
            },
            this))
        },
        i.delCallback = function(t, e) {
            for (var a = this._cache.length,
            i = a - 1; i >= 0; i--) this._cache[i][0] == e && this._cache[i][1] == t && this._cache.splice(i, 1)
        },
        e(i, "length",
        function() {
            return this._cache.length
        },
        function(t) {
            this._cache.length = t
        }),
        i.result = function() {
            return this._result
        },
        i.clear = function() {
            this._isBreak = !1,
            this._result = 0,
            this._cacheGroup.length && (this._cacheGroup.length = 0),
            this._cache.length && (this._cache.length = 0)
        },
        t
    } ();
    t.StateUtil = e,
    egret.registerClass(e, "deden.StateUtil")
} (deden || (deden = {}));
