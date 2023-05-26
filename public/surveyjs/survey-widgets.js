/*! For license information please see surveyjs-widgets.min.js.LICENSE.txt */
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t(
              require("inputmask"),
              require("nouislider"),
              require("sortablejs"),
              require("bootstrap-slider")
          ))
        : "function" == typeof define && define.amd
        ? define(
              "surveyjs-widgets",
              ["inputmask", "nouislider", "sortablejs", "bootstrap-slider"],
              t
          )
        : "object" == typeof exports
        ? (exports["surveyjs-widgets"] = t(
              require("inputmask"),
              require("nouislider"),
              require("sortablejs"),
              require("bootstrap-slider")
          ))
        : (e["surveyjs-widgets"] = t(
              e.Inputmask,
              e.noUiSlider,
              e.Sortable,
              e.Slider
          ));
})(self, (e, t, i, n) =>
    (() => {
        var a = {
                212: (e, t, i) => {
                    "use strict";
                    var n, a;
                    function o(e, t) {
                        if (!e) throw "First parameter is required.";
                        t = new r(e, (t = t || { type: "video" }));
                        var i = this;
                        function n(i) {
                            i &&
                                (t.initCallback = function () {
                                    i(), (i = t.initCallback = null);
                                });
                            var n = new s(e, t);
                            (f = new n(e, t)).record(),
                                u("recording"),
                                t.disableLogs ||
                                    console.log(
                                        "Initialized recorderType:",
                                        f.constructor.name,
                                        "for output-type:",
                                        t.type
                                    );
                        }
                        function a(e) {
                            if (((e = e || function () {}), f)) {
                                if ("paused" === i.state)
                                    return (
                                        i.resumeRecording(),
                                        void setTimeout(function () {
                                            a(e);
                                        }, 1)
                                    );
                                "recording" === i.state ||
                                    t.disableLogs ||
                                    console.warn(
                                        'Recording state should be: "recording", however current state is: ',
                                        i.state
                                    ),
                                    t.disableLogs ||
                                        console.log(
                                            "Stopped recording " +
                                                t.type +
                                                " stream."
                                        ),
                                    "gif" !== t.type
                                        ? f.stop(n)
                                        : (f.stop(), n()),
                                    u("stopped");
                            } else m();
                            function n(n) {
                                if (f) {
                                    Object.keys(f).forEach(function (e) {
                                        "function" != typeof f[e] &&
                                            (i[e] = f[e]);
                                    });
                                    var a = f.blob;
                                    if (!a) {
                                        if (!n) throw "Recording failed.";
                                        f.blob = a = n;
                                    }
                                    if (
                                        (a &&
                                            !t.disableLogs &&
                                            console.log(
                                                a.type,
                                                "->",
                                                w(a.size)
                                            ),
                                        e)
                                    ) {
                                        var o;
                                        try {
                                            o = g.createObjectURL(a);
                                        } catch (e) {}
                                        "function" == typeof e.call
                                            ? e.call(i, o)
                                            : e(o);
                                    }
                                    t.autoWriteToDisk &&
                                        c(function (e) {
                                            var i = {};
                                            (i[t.type + "Blob"] = e),
                                                I.Store(i);
                                        });
                                } else
                                    "function" == typeof e.call
                                        ? e.call(i, "")
                                        : e("");
                            }
                        }
                        function d(e) {
                            postMessage(new FileReaderSync().readAsDataURL(e));
                        }
                        function c(e, i) {
                            if (!e)
                                throw "Pass a callback function over getDataURL.";
                            var n = i ? i.blob : (f || {}).blob;
                            if (!n)
                                return (
                                    t.disableLogs ||
                                        console.warn(
                                            "Blob encoder did not finish its job yet."
                                        ),
                                    void setTimeout(function () {
                                        c(e, i);
                                    }, 1e3)
                                );
                            if (
                                "undefined" == typeof Worker ||
                                navigator.mozGetUserMedia
                            ) {
                                var a = new FileReader();
                                a.readAsDataURL(n),
                                    (a.onload = function (t) {
                                        e(t.target.result);
                                    });
                            } else {
                                var o = (function (e) {
                                    try {
                                        var t = g.createObjectURL(
                                                new Blob(
                                                    [
                                                        e.toString(),
                                                        "this.onmessage =  function (eee) {" +
                                                            e.name +
                                                            "(eee.data);}",
                                                    ],
                                                    {
                                                        type: "application/javascript",
                                                    }
                                                )
                                            ),
                                            i = new Worker(t);
                                        return g.revokeObjectURL(t), i;
                                    } catch (e) {}
                                })(d);
                                (o.onmessage = function (t) {
                                    e(t.data);
                                }),
                                    o.postMessage(n);
                            }
                        }
                        function l(e) {
                            (e = e || 0),
                                "paused" !== i.state
                                    ? "stopped" !== i.state &&
                                      (e >= i.recordingDuration
                                          ? a(i.onRecordingStopped)
                                          : ((e += 1e3),
                                            setTimeout(function () {
                                                l(e);
                                            }, 1e3)))
                                    : setTimeout(function () {
                                          l(e);
                                      }, 1e3);
                        }
                        function u(e) {
                            i &&
                                ((i.state = e),
                                "function" == typeof i.onStateChanged.call
                                    ? i.onStateChanged.call(i, e)
                                    : i.onStateChanged(e));
                        }
                        var f,
                            p =
                                'It seems that recorder is destroyed or "startRecording" is not invoked for ' +
                                t.type +
                                " recorder.";
                        function m() {
                            !0 !== t.disableLogs && console.warn(p);
                        }
                        var h = {
                            startRecording: function (a) {
                                return (
                                    t.disableLogs ||
                                        console.log(
                                            "RecordRTC version: ",
                                            i.version
                                        ),
                                    a && (t = new r(e, a)),
                                    t.disableLogs ||
                                        console.log(
                                            "started recording " +
                                                t.type +
                                                " stream."
                                        ),
                                    f
                                        ? (f.clearRecordedData(),
                                          f.record(),
                                          u("recording"),
                                          i.recordingDuration && l(),
                                          i)
                                        : (n(function () {
                                              i.recordingDuration && l();
                                          }),
                                          i)
                                );
                            },
                            stopRecording: a,
                            pauseRecording: function () {
                                f
                                    ? "recording" === i.state
                                        ? (u("paused"),
                                          f.pause(),
                                          t.disableLogs ||
                                              console.log("Paused recording."))
                                        : t.disableLogs ||
                                          console.warn(
                                              "Unable to pause the recording. Recording state: ",
                                              i.state
                                          )
                                    : m();
                            },
                            resumeRecording: function () {
                                f
                                    ? "paused" === i.state
                                        ? (u("recording"),
                                          f.resume(),
                                          t.disableLogs ||
                                              console.log("Resumed recording."))
                                        : t.disableLogs ||
                                          console.warn(
                                              "Unable to resume the recording. Recording state: ",
                                              i.state
                                          )
                                    : m();
                            },
                            initRecorder: n,
                            setRecordingDuration: function (e, t) {
                                if (void 0 === e)
                                    throw "recordingDuration is required.";
                                if ("number" != typeof e)
                                    throw "recordingDuration must be a number.";
                                return (
                                    (i.recordingDuration = e),
                                    (i.onRecordingStopped =
                                        t || function () {}),
                                    {
                                        onRecordingStopped: function (e) {
                                            i.onRecordingStopped = e;
                                        },
                                    }
                                );
                            },
                            clearRecordedData: function () {
                                f
                                    ? (f.clearRecordedData(),
                                      t.disableLogs ||
                                          console.log(
                                              "Cleared old recorded data."
                                          ))
                                    : m();
                            },
                            getBlob: function () {
                                if (f) return f.blob;
                                m();
                            },
                            getDataURL: c,
                            toURL: function () {
                                if (f) return g.createObjectURL(f.blob);
                                m();
                            },
                            getInternalRecorder: function () {
                                return f;
                            },
                            save: function (e) {
                                f ? C(f.blob, e) : m();
                            },
                            getFromDisk: function (e) {
                                f ? o.getFromDisk(t.type, e) : m();
                            },
                            setAdvertisementArray: function (e) {
                                t.advertisement = [];
                                for (var i = e.length, n = 0; n < i; n++)
                                    t.advertisement.push({
                                        duration: n,
                                        image: e[n],
                                    });
                            },
                            blob: null,
                            bufferSize: 0,
                            sampleRate: 0,
                            buffer: null,
                            reset: function () {
                                "recording" !== i.state ||
                                    t.disableLogs ||
                                    console.warn("Stop an active recorder."),
                                    f &&
                                        "function" ==
                                            typeof f.clearRecordedData &&
                                        f.clearRecordedData(),
                                    (f = null),
                                    u("inactive"),
                                    (i.blob = null);
                            },
                            onStateChanged: function (e) {
                                t.disableLogs ||
                                    console.log("Recorder state changed:", e);
                            },
                            state: "inactive",
                            getState: function () {
                                return i.state;
                            },
                            destroy: function () {
                                var e = t.disableLogs;
                                (t = { disableLogs: !0 }),
                                    i.reset(),
                                    u("destroyed"),
                                    (h = i = null),
                                    x.AudioContextConstructor &&
                                        (x.AudioContextConstructor.close(),
                                        (x.AudioContextConstructor = null)),
                                    (t.disableLogs = e),
                                    t.disableLogs ||
                                        console.log("RecordRTC is destroyed.");
                            },
                            version: "5.6.2",
                        };
                        if (!this) return (i = h), h;
                        for (var v in h) this[v] = h[v];
                        return (i = this), h;
                    }
                    function r(e, t) {
                        return (
                            t.recorderType ||
                                t.type ||
                                (t.audio && t.video
                                    ? (t.type = "video")
                                    : t.audio &&
                                      !t.video &&
                                      (t.type = "audio")),
                            t.recorderType &&
                                !t.type &&
                                (t.recorderType === O ||
                                t.recorderType === D ||
                                t.recorderType === F
                                    ? (t.type = "video")
                                    : t.recorderType === B
                                    ? (t.type = "gif")
                                    : t.recorderType === A
                                    ? (t.type = "audio")
                                    : t.recorderType === M &&
                                      ((R(e, "audio").length &&
                                          R(e, "video").length) ||
                                      (!R(e, "audio").length &&
                                          R(e, "video").length)
                                          ? (t.type = "video")
                                          : R(e, "audio").length &&
                                            !R(e, "video").length &&
                                            (t.type = "audio"))),
                            "undefined" != typeof MediaRecorder &&
                                "requestData" in MediaRecorder.prototype &&
                                (t.mimeType || (t.mimeType = "video/webm"),
                                t.type || (t.type = t.mimeType.split("/")[0]),
                                t.bitsPerSecond),
                            t.type ||
                                (t.mimeType &&
                                    (t.type = t.mimeType.split("/")[0]),
                                t.type || (t.type = "audio")),
                            t
                        );
                    }
                    function s(e, t) {
                        var i;
                        return (
                            (v || p || m) && (i = A),
                            "undefined" != typeof MediaRecorder &&
                                "requestData" in MediaRecorder.prototype &&
                                !v &&
                                (i = M),
                            "video" === t.type &&
                                (v || m) &&
                                ((i = O),
                                "undefined" != typeof ReadableStream &&
                                    (i = F)),
                            "gif" === t.type && (i = B),
                            "canvas" === t.type && (i = D),
                            T() &&
                                i !== D &&
                                i !== B &&
                                "undefined" != typeof MediaRecorder &&
                                "requestData" in MediaRecorder.prototype &&
                                (R(e, "video").length ||
                                    R(e, "audio").length) &&
                                ("audio" === t.type
                                    ? "function" ==
                                          typeof MediaRecorder.isTypeSupported &&
                                      MediaRecorder.isTypeSupported(
                                          "audio/webm"
                                      ) &&
                                      (i = M)
                                    : "function" ==
                                          typeof MediaRecorder.isTypeSupported &&
                                      MediaRecorder.isTypeSupported(
                                          "video/webm"
                                      ) &&
                                      (i = M)),
                            e instanceof Array && e.length && (i = E),
                            t.recorderType && (i = t.recorderType),
                            !t.disableLogs &&
                                i &&
                                i.name &&
                                console.log(
                                    "Using recorderType:",
                                    i.name || i.constructor.name
                                ),
                            !i && y && (i = M),
                            i
                        );
                    }
                    function d(e) {
                        (this.addStream = function (t) {
                            t && (e = t);
                        }),
                            (this.mediaType = { audio: !0, video: !0 }),
                            (this.startRecording = function () {
                                var t,
                                    i = this.mediaType,
                                    n = this.mimeType || {
                                        audio: null,
                                        video: null,
                                        gif: null,
                                    };
                                if (
                                    ("function" != typeof i.audio &&
                                        T() &&
                                        !R(e, "audio").length &&
                                        (i.audio = !1),
                                    "function" != typeof i.video &&
                                        T() &&
                                        !R(e, "video").length &&
                                        (i.video = !1),
                                    "function" != typeof i.gif &&
                                        T() &&
                                        !R(e, "video").length &&
                                        (i.gif = !1),
                                    !i.audio && !i.video && !i.gif)
                                )
                                    throw "MediaStream must have either audio or video tracks.";
                                if (
                                    (i.audio &&
                                        ((t = null),
                                        "function" == typeof i.audio &&
                                            (t = i.audio),
                                        (this.audioRecorder = new o(e, {
                                            type: "audio",
                                            bufferSize: this.bufferSize,
                                            sampleRate: this.sampleRate,
                                            numberOfAudioChannels:
                                                this.numberOfAudioChannels || 2,
                                            disableLogs: this.disableLogs,
                                            recorderType: t,
                                            mimeType: n.audio,
                                            timeSlice: this.timeSlice,
                                            onTimeStamp: this.onTimeStamp,
                                        })),
                                        i.video ||
                                            this.audioRecorder.startRecording()),
                                    i.video)
                                ) {
                                    (t = null),
                                        "function" == typeof i.video &&
                                            (t = i.video);
                                    var a = e;
                                    if (
                                        T() &&
                                        i.audio &&
                                        "function" == typeof i.audio
                                    ) {
                                        var r = R(e, "video")[0];
                                        h
                                            ? ((a = new b()).addTrack(r),
                                              t && t === O && (t = M))
                                            : (a = new b()).addTrack(r);
                                    }
                                    (this.videoRecorder = new o(a, {
                                        type: "video",
                                        video: this.video,
                                        canvas: this.canvas,
                                        frameInterval: this.frameInterval || 10,
                                        disableLogs: this.disableLogs,
                                        recorderType: t,
                                        mimeType: n.video,
                                        timeSlice: this.timeSlice,
                                        onTimeStamp: this.onTimeStamp,
                                        workerPath: this.workerPath,
                                        webAssemblyPath: this.webAssemblyPath,
                                        frameRate: this.frameRate,
                                        bitrate: this.bitrate,
                                    })),
                                        i.audio ||
                                            this.videoRecorder.startRecording();
                                }
                                if (i.audio && i.video) {
                                    var s = this,
                                        d = !0 === T();
                                    ((i.audio instanceof A && i.video) ||
                                        (!0 !== i.audio &&
                                            !0 !== i.video &&
                                            i.audio !== i.video)) &&
                                        (d = !1),
                                        !0 === d
                                            ? ((s.audioRecorder = null),
                                              s.videoRecorder.startRecording())
                                            : s.videoRecorder.initRecorder(
                                                  function () {
                                                      s.audioRecorder.initRecorder(
                                                          function () {
                                                              s.videoRecorder.startRecording(),
                                                                  s.audioRecorder.startRecording();
                                                          }
                                                      );
                                                  }
                                              );
                                }
                                i.gif &&
                                    ((t = null),
                                    "function" == typeof i.gif && (t = i.gif),
                                    (this.gifRecorder = new o(e, {
                                        type: "gif",
                                        frameRate: this.frameRate || 200,
                                        quality: this.quality || 10,
                                        disableLogs: this.disableLogs,
                                        recorderType: t,
                                        mimeType: n.gif,
                                    })),
                                    this.gifRecorder.startRecording());
                            }),
                            (this.stopRecording = function (e) {
                                (e = e || function () {}),
                                    this.audioRecorder &&
                                        this.audioRecorder.stopRecording(
                                            function (t) {
                                                e(t, "audio");
                                            }
                                        ),
                                    this.videoRecorder &&
                                        this.videoRecorder.stopRecording(
                                            function (t) {
                                                e(t, "video");
                                            }
                                        ),
                                    this.gifRecorder &&
                                        this.gifRecorder.stopRecording(
                                            function (t) {
                                                e(t, "gif");
                                            }
                                        );
                            }),
                            (this.pauseRecording = function () {
                                this.audioRecorder &&
                                    this.audioRecorder.pauseRecording(),
                                    this.videoRecorder &&
                                        this.videoRecorder.pauseRecording(),
                                    this.gifRecorder &&
                                        this.gifRecorder.pauseRecording();
                            }),
                            (this.resumeRecording = function () {
                                this.audioRecorder &&
                                    this.audioRecorder.resumeRecording(),
                                    this.videoRecorder &&
                                        this.videoRecorder.resumeRecording(),
                                    this.gifRecorder &&
                                        this.gifRecorder.resumeRecording();
                            }),
                            (this.getBlob = function (e) {
                                var t = {};
                                return (
                                    this.audioRecorder &&
                                        (t.audio =
                                            this.audioRecorder.getBlob()),
                                    this.videoRecorder &&
                                        (t.video =
                                            this.videoRecorder.getBlob()),
                                    this.gifRecorder &&
                                        (t.gif = this.gifRecorder.getBlob()),
                                    e && e(t),
                                    t
                                );
                            }),
                            (this.destroy = function () {
                                this.audioRecorder &&
                                    (this.audioRecorder.destroy(),
                                    (this.audioRecorder = null)),
                                    this.videoRecorder &&
                                        (this.videoRecorder.destroy(),
                                        (this.videoRecorder = null)),
                                    this.gifRecorder &&
                                        (this.gifRecorder.destroy(),
                                        (this.gifRecorder = null));
                            }),
                            (this.getDataURL = function (e) {
                                function t(e, t) {
                                    if ("undefined" != typeof Worker) {
                                        var i = (function (e) {
                                            var t,
                                                i = g.createObjectURL(
                                                    new Blob(
                                                        [
                                                            e.toString(),
                                                            "this.onmessage =  function (eee) {" +
                                                                e.name +
                                                                "(eee.data);}",
                                                        ],
                                                        {
                                                            type: "application/javascript",
                                                        }
                                                    )
                                                ),
                                                n = new Worker(i);
                                            if (void 0 !== g) t = g;
                                            else {
                                                if (
                                                    "undefined" ==
                                                    typeof webkitURL
                                                )
                                                    throw "Neither URL nor webkitURL detected.";
                                                t = webkitURL;
                                            }
                                            return t.revokeObjectURL(i), n;
                                        })(function (e) {
                                            postMessage(
                                                new FileReaderSync().readAsDataURL(
                                                    e
                                                )
                                            );
                                        });
                                        (i.onmessage = function (e) {
                                            t(e.data);
                                        }),
                                            i.postMessage(e);
                                    } else {
                                        var n = new FileReader();
                                        n.readAsDataURL(e),
                                            (n.onload = function (e) {
                                                t(e.target.result);
                                            });
                                    }
                                }
                                this.getBlob(function (i) {
                                    i.audio && i.video
                                        ? t(i.audio, function (n) {
                                              t(i.video, function (t) {
                                                  e({ audio: n, video: t });
                                              });
                                          })
                                        : i.audio
                                        ? t(i.audio, function (t) {
                                              e({ audio: t });
                                          })
                                        : i.video &&
                                          t(i.video, function (t) {
                                              e({ video: t });
                                          });
                                });
                            }),
                            (this.writeToDisk = function () {
                                o.writeToDisk({
                                    audio: this.audioRecorder,
                                    video: this.videoRecorder,
                                    gif: this.gifRecorder,
                                });
                            }),
                            (this.save = function (e) {
                                (e = e || { audio: !0, video: !0, gif: !0 })
                                    .audio &&
                                    this.audioRecorder &&
                                    this.audioRecorder.save(
                                        "string" == typeof e.audio
                                            ? e.audio
                                            : ""
                                    ),
                                    e.video &&
                                        this.videoRecorder &&
                                        this.videoRecorder.save(
                                            "string" == typeof e.video
                                                ? e.video
                                                : ""
                                        ),
                                    e.gif &&
                                        this.gifRecorder &&
                                        this.gifRecorder.save(
                                            "string" == typeof e.gif
                                                ? e.gif
                                                : ""
                                        );
                            });
                    }
                    (o.version = "5.6.2"),
                        (e.exports = o),
                        void 0 ===
                            (n = function () {
                                return o;
                            }.apply(t, [])) || (e.exports = n),
                        (o.getFromDisk = function (e, t) {
                            if (!t) throw "callback is mandatory.";
                            console.log(
                                "Getting recorded " +
                                    ("all" === e ? "blobs" : e + " blob ") +
                                    " from disk!"
                            ),
                                I.Fetch(function (i, n) {
                                    "all" !== e &&
                                        n === e + "Blob" &&
                                        t &&
                                        t(i),
                                        "all" === e &&
                                            t &&
                                            t(i, n.replace("Blob", ""));
                                });
                        }),
                        (o.writeToDisk = function (e) {
                            console.log("Writing recorded blob(s) to disk!"),
                                (e = e || {}).audio && e.video && e.gif
                                    ? e.audio.getDataURL(function (t) {
                                          e.video.getDataURL(function (i) {
                                              e.gif.getDataURL(function (e) {
                                                  I.Store({
                                                      audioBlob: t,
                                                      videoBlob: i,
                                                      gifBlob: e,
                                                  });
                                              });
                                          });
                                      })
                                    : e.audio && e.video
                                    ? e.audio.getDataURL(function (t) {
                                          e.video.getDataURL(function (e) {
                                              I.Store({
                                                  audioBlob: t,
                                                  videoBlob: e,
                                              });
                                          });
                                      })
                                    : e.audio && e.gif
                                    ? e.audio.getDataURL(function (t) {
                                          e.gif.getDataURL(function (e) {
                                              I.Store({
                                                  audioBlob: t,
                                                  gifBlob: e,
                                              });
                                          });
                                      })
                                    : e.video && e.gif
                                    ? e.video.getDataURL(function (t) {
                                          e.gif.getDataURL(function (e) {
                                              I.Store({
                                                  videoBlob: t,
                                                  gifBlob: e,
                                              });
                                          });
                                      })
                                    : e.audio
                                    ? e.audio.getDataURL(function (e) {
                                          I.Store({ audioBlob: e });
                                      })
                                    : e.video
                                    ? e.video.getDataURL(function (e) {
                                          I.Store({ videoBlob: e });
                                      })
                                    : e.gif &&
                                      e.gif.getDataURL(function (e) {
                                          I.Store({ gifBlob: e });
                                      });
                        }),
                        (d.getFromDisk = o.getFromDisk),
                        (d.writeToDisk = o.writeToDisk),
                        (o.MRecordRTC = d),
                        (a = void 0 !== i.g ? i.g : null) &&
                            "undefined" == typeof window &&
                            void 0 !== i.g &&
                            ((i.g.navigator = {
                                userAgent:
                                    "Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45",
                                getUserMedia: function () {},
                            }),
                            i.g.console || (i.g.console = {}),
                            (void 0 !== i.g.console.log &&
                                void 0 !== i.g.console.error) ||
                                (i.g.console.error = i.g.console.log =
                                    i.g.console.log ||
                                    function () {
                                        console.log(arguments);
                                    }),
                            "undefined" == typeof document &&
                                ((a.document = {
                                    documentElement: {
                                        appendChild: function () {
                                            return "";
                                        },
                                    },
                                }),
                                (document.createElement =
                                    document.captureStream =
                                    document.mozCaptureStream =
                                        function () {
                                            var e = {
                                                getContext: function () {
                                                    return e;
                                                },
                                                play: function () {},
                                                pause: function () {},
                                                drawImage: function () {},
                                                toDataURL: function () {
                                                    return "";
                                                },
                                                style: {},
                                            };
                                            return e;
                                        }),
                                (a.HTMLVideoElement = function () {})),
                            "undefined" == typeof location &&
                                (a.location = {
                                    protocol: "file:",
                                    href: "",
                                    hash: "",
                                }),
                            "undefined" == typeof screen &&
                                (a.screen = { width: 0, height: 0 }),
                            void 0 === g &&
                                (a.URL = {
                                    createObjectURL: function () {
                                        return "";
                                    },
                                    revokeObjectURL: function () {
                                        return "";
                                    },
                                }),
                            (a.window = i.g));
                    var c = window.requestAnimationFrame;
                    if (void 0 === c)
                        if ("undefined" != typeof webkitRequestAnimationFrame)
                            c = webkitRequestAnimationFrame;
                        else if ("undefined" != typeof mozRequestAnimationFrame)
                            c = mozRequestAnimationFrame;
                        else if ("undefined" != typeof msRequestAnimationFrame)
                            c = msRequestAnimationFrame;
                        else if (void 0 === c) {
                            var l = 0;
                            c = function (e, t) {
                                var i = new Date().getTime(),
                                    n = Math.max(0, 16 - (i - l)),
                                    a = setTimeout(function () {
                                        e(i + n);
                                    }, n);
                                return (l = i + n), a;
                            };
                        }
                    var u = window.cancelAnimationFrame;
                    void 0 === u &&
                        ("undefined" != typeof webkitCancelAnimationFrame
                            ? (u = webkitCancelAnimationFrame)
                            : "undefined" != typeof mozCancelAnimationFrame
                            ? (u = mozCancelAnimationFrame)
                            : "undefined" != typeof msCancelAnimationFrame
                            ? (u = msCancelAnimationFrame)
                            : void 0 === u &&
                              (u = function (e) {
                                  clearTimeout(e);
                              }));
                    var f = window.AudioContext;
                    void 0 === f &&
                        ("undefined" != typeof webkitAudioContext &&
                            (f = webkitAudioContext),
                        "undefined" != typeof mozAudioContext &&
                            (f = mozAudioContext));
                    var g = window.URL;
                    void 0 === g &&
                        "undefined" != typeof webkitURL &&
                        (g = webkitURL),
                        "undefined" != typeof navigator &&
                            void 0 === navigator.getUserMedia &&
                            (void 0 !== navigator.webkitGetUserMedia &&
                                (navigator.getUserMedia =
                                    navigator.webkitGetUserMedia),
                            void 0 !== navigator.mozGetUserMedia &&
                                (navigator.getUserMedia =
                                    navigator.mozGetUserMedia));
                    var p = !(
                            -1 === navigator.userAgent.indexOf("Edge") ||
                            (!navigator.msSaveBlob &&
                                !navigator.msSaveOrOpenBlob)
                        ),
                        m =
                            !!window.opera ||
                            -1 !== navigator.userAgent.indexOf("OPR/"),
                        h =
                            navigator.userAgent
                                .toLowerCase()
                                .indexOf("firefox") > -1 &&
                            "netscape" in window &&
                            / rv:/.test(navigator.userAgent),
                        v =
                            (!m && !p && !!navigator.webkitGetUserMedia) ||
                            S() ||
                            -1 !==
                                navigator.userAgent
                                    .toLowerCase()
                                    .indexOf("chrome/"),
                        y = /^((?!chrome|android).)*safari/i.test(
                            navigator.userAgent
                        );
                    y &&
                        !v &&
                        -1 !== navigator.userAgent.indexOf("CriOS") &&
                        ((y = !1), (v = !0));
                    var b = window.MediaStream;
                    function w(e) {
                        if (0 === e) return "0 Bytes";
                        var t = parseInt(
                            Math.floor(Math.log(e) / Math.log(1e3)),
                            10
                        );
                        return (
                            (e / Math.pow(1e3, t)).toPrecision(3) +
                            " " +
                            ["Bytes", "KB", "MB", "GB", "TB"][t]
                        );
                    }
                    function C(e, t) {
                        if (!e) throw "Blob object is required.";
                        if (!e.type)
                            try {
                                e.type = "video/webm";
                            } catch (e) {}
                        var i = (e.type || "video/webm").split("/")[1];
                        if (
                            (-1 !== i.indexOf(";") && (i = i.split(";")[0]),
                            t && -1 !== t.indexOf("."))
                        ) {
                            var n = t.split(".");
                            (t = n[0]), (i = n[1]);
                        }
                        var a =
                            (t ||
                                Math.round(9999999999 * Math.random()) +
                                    888888888) +
                            "." +
                            i;
                        if (void 0 !== navigator.msSaveOrOpenBlob)
                            return navigator.msSaveOrOpenBlob(e, a);
                        if (void 0 !== navigator.msSaveBlob)
                            return navigator.msSaveBlob(e, a);
                        var o = document.createElement("a");
                        (o.href = g.createObjectURL(e)),
                            (o.download = a),
                            (o.style =
                                "display:none;opacity:0;color:transparent;"),
                            (
                                document.body || document.documentElement
                            ).appendChild(o),
                            "function" == typeof o.click
                                ? o.click()
                                : ((o.target = "_blank"),
                                  o.dispatchEvent(
                                      new MouseEvent("click", {
                                          view: window,
                                          bubbles: !0,
                                          cancelable: !0,
                                      })
                                  )),
                            g.revokeObjectURL(o.href);
                    }
                    function S() {
                        return (
                            ("undefined" != typeof window &&
                                "object" == typeof window.process &&
                                "renderer" === window.process.type) ||
                            !(
                                "undefined" == typeof process ||
                                "object" != typeof process.versions ||
                                !process.versions.electron
                            ) ||
                            ("object" == typeof navigator &&
                                "string" == typeof navigator.userAgent &&
                                navigator.userAgent.indexOf("Electron") >= 0)
                        );
                    }
                    function R(e, t) {
                        return e && e.getTracks
                            ? e.getTracks().filter(function (e) {
                                  return e.kind === (t || "audio");
                              })
                            : [];
                    }
                    function k(e, t) {
                        "srcObject" in t
                            ? (t.srcObject = e)
                            : "mozSrcObject" in t
                            ? (t.mozSrcObject = e)
                            : (t.srcObject = e);
                    }
                    void 0 === b &&
                        "undefined" != typeof webkitMediaStream &&
                        (b = webkitMediaStream),
                        void 0 !== b &&
                            void 0 === b.prototype.stop &&
                            (b.prototype.stop = function () {
                                this.getTracks().forEach(function (e) {
                                    e.stop();
                                });
                            }),
                        (o.invokeSaveAsDialog = C),
                        (o.getTracks = R),
                        (o.getSeekableBlob = function (e, t) {
                            if ("undefined" == typeof EBML)
                                throw new Error(
                                    "Please link: https://www.webrtc-experiment.com/EBML.js"
                                );
                            var i = new EBML.Reader(),
                                n = new EBML.Decoder(),
                                a = EBML.tools,
                                o = new FileReader();
                            (o.onload = function (e) {
                                n.decode(this.result).forEach(function (e) {
                                    i.read(e);
                                }),
                                    i.stop();
                                var o = a.makeMetadataSeekable(
                                        i.metadatas,
                                        i.duration,
                                        i.cues
                                    ),
                                    r = this.result.slice(i.metadataSize),
                                    s = new Blob([o, r], {
                                        type: "video/webm",
                                    });
                                t(s);
                            }),
                                o.readAsArrayBuffer(e);
                        }),
                        (o.bytesToSize = w),
                        (o.isElectron = S);
                    var x = {};
                    function T() {
                        if (h || y || p) return !0;
                        navigator.appVersion;
                        var e,
                            t,
                            i = navigator.userAgent,
                            n = "" + parseFloat(navigator.appVersion),
                            a = parseInt(navigator.appVersion, 10);
                        return (
                            (v || m) &&
                                ((e = i.indexOf("Chrome")),
                                (n = i.substring(e + 7))),
                            -1 !== (t = n.indexOf(";")) &&
                                (n = n.substring(0, t)),
                            -1 !== (t = n.indexOf(" ")) &&
                                (n = n.substring(0, t)),
                            (a = parseInt("" + n, 10)),
                            isNaN(a) &&
                                ((n = "" + parseFloat(navigator.appVersion)),
                                (a = parseInt(navigator.appVersion, 10))),
                            a >= 49
                        );
                    }
                    function M(e, t) {
                        var i,
                            n = this;
                        if (void 0 === e)
                            throw 'First argument "MediaStream" is required.';
                        if ("undefined" == typeof MediaRecorder)
                            throw "Your browser does not support the Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.";
                        "audio" ===
                            (t = t || { mimeType: "video/webm" }).type &&
                            (R(e, "video").length &&
                                R(e, "audio").length &&
                                (navigator.mozGetUserMedia
                                    ? (i = new b()).addTrack(R(e, "audio")[0])
                                    : (i = new b(R(e, "audio"))),
                                (e = i)),
                            (t.mimeType &&
                                -1 !==
                                    t.mimeType
                                        .toString()
                                        .toLowerCase()
                                        .indexOf("audio")) ||
                                (t.mimeType = v ? "audio/webm" : "audio/ogg"),
                            t.mimeType &&
                                "audio/ogg" !==
                                    t.mimeType.toString().toLowerCase() &&
                                navigator.mozGetUserMedia &&
                                (t.mimeType = "audio/ogg"));
                        var a,
                            o = [];
                        function r() {
                            n.timestamps.push(new Date().getTime()),
                                "function" == typeof t.onTimeStamp &&
                                    t.onTimeStamp(
                                        n.timestamps[n.timestamps.length - 1],
                                        n.timestamps
                                    );
                        }
                        function s(e) {
                            return a && a.mimeType
                                ? a.mimeType
                                : e.mimeType || "video/webm";
                        }
                        function d() {
                            (o = []), (a = null), (n.timestamps = []);
                        }
                        (this.getArrayOfBlobs = function () {
                            return o;
                        }),
                            (this.record = function () {
                                (n.blob = null),
                                    n.clearRecordedData(),
                                    (n.timestamps = []),
                                    (c = []),
                                    (o = []);
                                var i = t;
                                t.disableLogs ||
                                    console.log(
                                        "Passing following config over MediaRecorder API.",
                                        i
                                    ),
                                    a && (a = null),
                                    v && !T() && (i = "video/vp8"),
                                    "function" ==
                                        typeof MediaRecorder.isTypeSupported &&
                                        i.mimeType &&
                                        (MediaRecorder.isTypeSupported(
                                            i.mimeType
                                        ) ||
                                            (t.disableLogs ||
                                                console.warn(
                                                    "MediaRecorder API seems unable to record mimeType:",
                                                    i.mimeType
                                                ),
                                            (i.mimeType =
                                                "audio" === t.type
                                                    ? "audio/webm"
                                                    : "video/webm")));
                                try {
                                    (a = new MediaRecorder(e, i)),
                                        (t.mimeType = i.mimeType);
                                } catch (t) {
                                    a = new MediaRecorder(e);
                                }
                                i.mimeType &&
                                    !MediaRecorder.isTypeSupported &&
                                    "canRecordMimeType" in a &&
                                    !1 === a.canRecordMimeType(i.mimeType) &&
                                    (t.disableLogs ||
                                        console.warn(
                                            "MediaRecorder API seems unable to record mimeType:",
                                            i.mimeType
                                        )),
                                    (a.ondataavailable = function (e) {
                                        if (
                                            (e.data &&
                                                c.push(
                                                    "ondataavailable: " +
                                                        w(e.data.size)
                                                ),
                                            "number" != typeof t.timeSlice)
                                        )
                                            !e.data ||
                                            !e.data.size ||
                                            e.data.size < 100 ||
                                            n.blob
                                                ? n.recordingCallback &&
                                                  (n.recordingCallback(
                                                      new Blob([], {
                                                          type: s(i),
                                                      })
                                                  ),
                                                  (n.recordingCallback = null))
                                                : ((n.blob = t.getNativeBlob
                                                      ? e.data
                                                      : new Blob([e.data], {
                                                            type: s(i),
                                                        })),
                                                  n.recordingCallback &&
                                                      (n.recordingCallback(
                                                          n.blob
                                                      ),
                                                      (n.recordingCallback =
                                                          null)));
                                        else if (
                                            e.data &&
                                            e.data.size &&
                                            (o.push(e.data),
                                            r(),
                                            "function" ==
                                                typeof t.ondataavailable)
                                        ) {
                                            var a = t.getNativeBlob
                                                ? e.data
                                                : new Blob([e.data], {
                                                      type: s(i),
                                                  });
                                            t.ondataavailable(a);
                                        }
                                    }),
                                    (a.onstart = function () {
                                        c.push("started");
                                    }),
                                    (a.onpause = function () {
                                        c.push("paused");
                                    }),
                                    (a.onresume = function () {
                                        c.push("resumed");
                                    }),
                                    (a.onstop = function () {
                                        c.push("stopped");
                                    }),
                                    (a.onerror = function (e) {
                                        e &&
                                            (e.name ||
                                                (e.name = "UnknownError"),
                                            c.push("error: " + e),
                                            t.disableLogs ||
                                                (-1 !==
                                                e.name
                                                    .toString()
                                                    .toLowerCase()
                                                    .indexOf("invalidstate")
                                                    ? console.error(
                                                          "The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.",
                                                          e
                                                      )
                                                    : -1 !==
                                                      e.name
                                                          .toString()
                                                          .toLowerCase()
                                                          .indexOf(
                                                              "notsupported"
                                                          )
                                                    ? console.error(
                                                          "MIME type (",
                                                          i.mimeType,
                                                          ") is not supported.",
                                                          e
                                                      )
                                                    : -1 !==
                                                      e.name
                                                          .toString()
                                                          .toLowerCase()
                                                          .indexOf("security")
                                                    ? console.error(
                                                          "MediaRecorder security error",
                                                          e
                                                      )
                                                    : "OutOfMemory" === e.name
                                                    ? console.error(
                                                          "The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.",
                                                          e
                                                      )
                                                    : "IllegalStreamModification" ===
                                                      e.name
                                                    ? console.error(
                                                          "A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.",
                                                          e
                                                      )
                                                    : "OtherRecordingError" ===
                                                      e.name
                                                    ? console.error(
                                                          "Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.",
                                                          e
                                                      )
                                                    : "GenericError" === e.name
                                                    ? console.error(
                                                          "The UA cannot provide the codec or recording option that has been requested.",
                                                          e
                                                      )
                                                    : console.error(
                                                          "MediaRecorder Error",
                                                          e
                                                      )),
                                            (function (e) {
                                                if (
                                                    !n.manuallyStopped &&
                                                    a &&
                                                    "inactive" === a.state
                                                )
                                                    return (
                                                        delete t.timeslice,
                                                        void a.start(6e5)
                                                    );
                                                setTimeout(void 0, 1e3);
                                            })(),
                                            "inactive" !== a.state &&
                                                "stopped" !== a.state &&
                                                a.stop());
                                    }),
                                    "number" == typeof t.timeSlice
                                        ? (r(), a.start(t.timeSlice))
                                        : a.start(36e5),
                                    t.initCallback && t.initCallback();
                            }),
                            (this.timestamps = []),
                            (this.stop = function (e) {
                                (e = e || function () {}),
                                    (n.manuallyStopped = !0),
                                    a &&
                                        ((this.recordingCallback = e),
                                        "recording" === a.state && a.stop(),
                                        "number" == typeof t.timeSlice &&
                                            setTimeout(function () {
                                                (n.blob = new Blob(o, {
                                                    type: s(t),
                                                })),
                                                    n.recordingCallback(n.blob);
                                            }, 100));
                            }),
                            (this.pause = function () {
                                a && "recording" === a.state && a.pause();
                            }),
                            (this.resume = function () {
                                a && "paused" === a.state && a.resume();
                            }),
                            (this.clearRecordedData = function () {
                                a && "recording" === a.state && n.stop(d), d();
                            }),
                            (this.getInternalRecorder = function () {
                                return a;
                            }),
                            (this.blob = null),
                            (this.getState = function () {
                                return (a && a.state) || "inactive";
                            });
                        var c = [];
                        (this.getAllStates = function () {
                            return c;
                        }),
                            void 0 === t.checkForInactiveTracks &&
                                (t.checkForInactiveTracks = !1),
                            (n = this),
                            (function i() {
                                if (a && !1 !== t.checkForInactiveTracks)
                                    return !1 ===
                                        (function () {
                                            if ("active" in e) {
                                                if (!e.active) return !1;
                                            } else if ("ended" in e && e.ended)
                                                return !1;
                                            return !0;
                                        })()
                                        ? (t.disableLogs ||
                                              console.log(
                                                  "MediaStream seems stopped."
                                              ),
                                          void n.stop())
                                        : void setTimeout(i, 1e3);
                            })(),
                            (this.name = "MediaStreamRecorder"),
                            (this.toString = function () {
                                return this.name;
                            });
                    }
                    function A(e, t) {
                        if (!R(e, "audio").length)
                            throw "Your stream has no audio tracks.";
                        var i,
                            n = this,
                            a = [],
                            r = [],
                            s = !1,
                            d = 0,
                            c = 2,
                            l = (t = t || {}).desiredSampRate;
                        function u() {
                            if (!1 === t.checkForInactiveTracks) return !0;
                            if ("active" in e) {
                                if (!e.active) return !1;
                            } else if ("ended" in e && e.ended) return !1;
                            return !0;
                        }
                        function f(e, t) {
                            function i(e, t) {
                                var i,
                                    n = e.numberOfAudioChannels,
                                    a = e.leftBuffers.slice(0),
                                    o = e.rightBuffers.slice(0),
                                    r = e.sampleRate,
                                    s = e.internalInterleavedLength,
                                    d = e.desiredSampRate;
                                function c(e, t, i) {
                                    var n = Math.round(e.length * (t / i)),
                                        a = [],
                                        o = Number((e.length - 1) / (n - 1));
                                    a[0] = e[0];
                                    for (var r = 1; r < n - 1; r++) {
                                        var s = r * o,
                                            d = Number(Math.floor(s)).toFixed(),
                                            c = Number(Math.ceil(s)).toFixed(),
                                            u = s - d;
                                        a[r] = l(e[d], e[c], u);
                                    }
                                    return (a[n - 1] = e[e.length - 1]), a;
                                }
                                function l(e, t, i) {
                                    return e + (t - e) * i;
                                }
                                function u(e, t) {
                                    for (
                                        var i = new Float64Array(t),
                                            n = 0,
                                            a = e.length,
                                            o = 0;
                                        o < a;
                                        o++
                                    ) {
                                        var r = e[o];
                                        i.set(r, n), (n += r.length);
                                    }
                                    return i;
                                }
                                function f(e, t, i) {
                                    for (var n = i.length, a = 0; a < n; a++)
                                        e.setUint8(t + a, i.charCodeAt(a));
                                }
                                2 === n &&
                                    ((a = u(a, s)),
                                    (o = u(o, s)),
                                    d && ((a = c(a, d, r)), (o = c(o, d, r)))),
                                    1 === n &&
                                        ((a = u(a, s)), d && (a = c(a, d, r))),
                                    d && (r = d),
                                    2 === n &&
                                        (i = (function (e, t) {
                                            for (
                                                var i = e.length + t.length,
                                                    n = new Float64Array(i),
                                                    a = 0,
                                                    o = 0;
                                                o < i;

                                            )
                                                (n[o++] = e[a]),
                                                    (n[o++] = t[a]),
                                                    a++;
                                            return n;
                                        })(a, o)),
                                    1 === n && (i = a);
                                var g = i.length,
                                    p = new ArrayBuffer(44 + 2 * g),
                                    m = new DataView(p);
                                f(m, 0, "RIFF"),
                                    m.setUint32(4, 36 + 2 * g, !0),
                                    f(m, 8, "WAVE"),
                                    f(m, 12, "fmt "),
                                    m.setUint32(16, 16, !0),
                                    m.setUint16(20, 1, !0),
                                    m.setUint16(22, n, !0),
                                    m.setUint32(24, r, !0),
                                    m.setUint32(28, r * n * 2, !0),
                                    m.setUint16(32, 2 * n, !0),
                                    m.setUint16(34, 16, !0),
                                    f(m, 36, "data"),
                                    m.setUint32(40, 2 * g, !0);
                                for (var h = g, v = 44, y = 0; y < h; y++)
                                    m.setInt16(v, 32767 * i[y], !0), (v += 2);
                                if (t) return t({ buffer: p, view: m });
                                postMessage({ buffer: p, view: m });
                            }
                            if (e.noWorker)
                                i(e, function (e) {
                                    t(e.buffer, e.view);
                                });
                            else {
                                var n,
                                    a,
                                    o,
                                    r =
                                        ((n = i),
                                        (a = g.createObjectURL(
                                            new Blob(
                                                [
                                                    n.toString(),
                                                    ";this.onmessage =  function (eee) {" +
                                                        n.name +
                                                        "(eee.data);}",
                                                ],
                                                {
                                                    type: "application/javascript",
                                                }
                                            )
                                        )),
                                        ((o = new Worker(a)).workerURL = a),
                                        o);
                                (r.onmessage = function (e) {
                                    t(e.data.buffer, e.data.view),
                                        g.revokeObjectURL(r.workerURL),
                                        r.terminate();
                                }),
                                    r.postMessage(e);
                            }
                        }
                        !0 === t.leftChannel && (c = 1),
                            1 === t.numberOfAudioChannels && (c = 1),
                            (!c || c < 1) && (c = 2),
                            t.disableLogs ||
                                console.log(
                                    "StereoAudioRecorder is set to record number of channels: " +
                                        c
                                ),
                            void 0 === t.checkForInactiveTracks &&
                                (t.checkForInactiveTracks = !0),
                            (this.record = function () {
                                if (!1 === u())
                                    throw "Please make sure MediaStream is active.";
                                w(),
                                    (S = b = !1),
                                    (s = !0),
                                    void 0 !== t.timeSlice && x();
                            }),
                            (this.stop = function (e) {
                                (e = e || function () {}),
                                    (s = !1),
                                    f(
                                        {
                                            desiredSampRate: l,
                                            sampleRate: y,
                                            numberOfAudioChannels: c,
                                            internalInterleavedLength: d,
                                            leftBuffers: a,
                                            rightBuffers: 1 === c ? [] : r,
                                            noWorker: t.noWorker,
                                        },
                                        function (t, i) {
                                            (n.blob = new Blob([i], {
                                                type: "audio/wav",
                                            })),
                                                (n.buffer = new ArrayBuffer(
                                                    i.buffer.byteLength
                                                )),
                                                (n.view = i),
                                                (n.sampleRate = l || y),
                                                (n.bufferSize = v),
                                                (n.length = d),
                                                (S = !1),
                                                e && e(n.blob);
                                        }
                                    );
                            }),
                            void 0 === o.Storage &&
                                (o.Storage = {
                                    AudioContextConstructor: null,
                                    AudioContext:
                                        window.AudioContext ||
                                        window.webkitAudioContext,
                                }),
                            (o.Storage.AudioContextConstructor &&
                                "closed" !==
                                    o.Storage.AudioContextConstructor.state) ||
                                (o.Storage.AudioContextConstructor =
                                    new o.Storage.AudioContext());
                        var p = o.Storage.AudioContextConstructor,
                            m = p.createMediaStreamSource(e),
                            h = [0, 256, 512, 1024, 2048, 4096, 8192, 16384],
                            v = void 0 === t.bufferSize ? 4096 : t.bufferSize;
                        if (
                            (-1 === h.indexOf(v) &&
                                (t.disableLogs ||
                                    console.log(
                                        "Legal values for buffer-size are " +
                                            JSON.stringify(h, null, "\t")
                                    )),
                            p.createJavaScriptNode)
                        )
                            i = p.createJavaScriptNode(v, c, c);
                        else {
                            if (!p.createScriptProcessor)
                                throw "WebAudio API has no support on this browser.";
                            i = p.createScriptProcessor(v, c, c);
                        }
                        m.connect(i), t.bufferSize || (v = i.bufferSize);
                        var y =
                            void 0 !== t.sampleRate
                                ? t.sampleRate
                                : p.sampleRate || 44100;
                        (y < 22050 || y > 96e3) &&
                            (t.disableLogs ||
                                console.log(
                                    "sample-rate must be under range 22050 and 96000."
                                )),
                            t.disableLogs ||
                                (t.desiredSampRate &&
                                    console.log(
                                        "Desired sample-rate: " +
                                            t.desiredSampRate
                                    ));
                        var b = !1;
                        function w() {
                            (a = []),
                                (r = []),
                                (d = 0),
                                (S = !1),
                                (s = !1),
                                (b = !1),
                                (p = null),
                                (n.leftchannel = a),
                                (n.rightchannel = r),
                                (n.numberOfAudioChannels = c),
                                (n.desiredSampRate = l),
                                (n.sampleRate = y),
                                (n.recordingLength = d),
                                (k = {
                                    left: [],
                                    right: [],
                                    recordingLength: 0,
                                });
                        }
                        function C() {
                            i &&
                                ((i.onaudioprocess = null),
                                i.disconnect(),
                                (i = null)),
                                m && (m.disconnect(), (m = null)),
                                w();
                        }
                        (this.pause = function () {
                            b = !0;
                        }),
                            (this.resume = function () {
                                if (!1 === u())
                                    throw "Please make sure MediaStream is active.";
                                if (!s)
                                    return (
                                        t.disableLogs ||
                                            console.log(
                                                "Seems recording has been restarted."
                                            ),
                                        void this.record()
                                    );
                                b = !1;
                            }),
                            (this.clearRecordedData = function () {
                                (t.checkForInactiveTracks = !1),
                                    s && this.stop(C),
                                    C();
                            }),
                            (this.name = "StereoAudioRecorder"),
                            (this.toString = function () {
                                return this.name;
                            });
                        var S = !1;
                        (i.onaudioprocess = function (e) {
                            if (!b)
                                if (
                                    (!1 === u() &&
                                        (t.disableLogs ||
                                            console.log(
                                                "MediaStream seems stopped."
                                            ),
                                        i.disconnect(),
                                        (s = !1)),
                                    s)
                                ) {
                                    S ||
                                        ((S = !0),
                                        t.onAudioProcessStarted &&
                                            t.onAudioProcessStarted(),
                                        t.initCallback && t.initCallback());
                                    var o = e.inputBuffer.getChannelData(0),
                                        l = new Float32Array(o);
                                    if ((a.push(l), 2 === c)) {
                                        var f = e.inputBuffer.getChannelData(1),
                                            g = new Float32Array(f);
                                        r.push(g);
                                    }
                                    (d += v),
                                        (n.recordingLength = d),
                                        void 0 !== t.timeSlice &&
                                            ((k.recordingLength += v),
                                            k.left.push(l),
                                            2 === c && k.right.push(g));
                                } else m && (m.disconnect(), (m = null));
                        }),
                            p.createMediaStreamDestination
                                ? i.connect(p.createMediaStreamDestination())
                                : i.connect(p.destination),
                            (this.leftchannel = a),
                            (this.rightchannel = r),
                            (this.numberOfAudioChannels = c),
                            (this.desiredSampRate = l),
                            (this.sampleRate = y),
                            (n.recordingLength = d);
                        var k = { left: [], right: [], recordingLength: 0 };
                        function x() {
                            s &&
                                "function" == typeof t.ondataavailable &&
                                void 0 !== t.timeSlice &&
                                (k.left.length
                                    ? (f(
                                          {
                                              desiredSampRate: l,
                                              sampleRate: y,
                                              numberOfAudioChannels: c,
                                              internalInterleavedLength:
                                                  k.recordingLength,
                                              leftBuffers: k.left,
                                              rightBuffers:
                                                  1 === c ? [] : k.right,
                                          },
                                          function (e, i) {
                                              var n = new Blob([i], {
                                                  type: "audio/wav",
                                              });
                                              t.ondataavailable(n),
                                                  setTimeout(x, t.timeSlice);
                                          }
                                      ),
                                      (k = {
                                          left: [],
                                          right: [],
                                          recordingLength: 0,
                                      }))
                                    : setTimeout(x, t.timeSlice));
                        }
                    }
                    function D(e, t) {
                        if ("undefined" == typeof html2canvas)
                            throw "Please link: https://www.webrtc-experiment.com/screenshot.js";
                        (t = t || {}).frameInterval || (t.frameInterval = 10);
                        var i = !1;
                        [
                            "captureStream",
                            "mozCaptureStream",
                            "webkitCaptureStream",
                        ].forEach(function (e) {
                            e in document.createElement("canvas") && (i = !0);
                        });
                        var n,
                            a,
                            o,
                            r = !(
                                (!window.webkitRTCPeerConnection &&
                                    !window.webkitGetUserMedia) ||
                                !window.chrome
                            ),
                            s = 50,
                            d = navigator.userAgent.match(
                                /Chrom(e|ium)\/([0-9]+)\./
                            );
                        if (
                            (r && d && d[2] && (s = parseInt(d[2], 10)),
                            r && s < 52 && (i = !1),
                            t.useWhammyRecorder && (i = !1),
                            i)
                        )
                            if (
                                (t.disableLogs ||
                                    console.log(
                                        "Your browser supports both MediRecorder API and canvas.captureStream!"
                                    ),
                                e instanceof HTMLCanvasElement)
                            )
                                n = e;
                            else {
                                if (!(e instanceof CanvasRenderingContext2D))
                                    throw "Please pass either HTMLCanvasElement or CanvasRenderingContext2D.";
                                n = e.canvas;
                            }
                        else
                            navigator.mozGetUserMedia &&
                                (t.disableLogs ||
                                    console.error(
                                        "Canvas recording is NOT supported in Firefox."
                                    ));
                        (this.record = function () {
                            if (((o = !0), i && !t.useWhammyRecorder)) {
                                var e;
                                "captureStream" in n
                                    ? (e = n.captureStream(25))
                                    : "mozCaptureStream" in n
                                    ? (e = n.mozCaptureStream(25))
                                    : "webkitCaptureStream" in n &&
                                      (e = n.webkitCaptureStream(25));
                                try {
                                    var r = new b();
                                    r.addTrack(R(e, "video")[0]), (e = r);
                                } catch (e) {}
                                if (!e)
                                    throw "captureStream API are NOT available.";
                                (a = new M(e, {
                                    mimeType: t.mimeType || "video/webm",
                                })).record();
                            } else
                                (g.frames = []),
                                    (f = new Date().getTime()),
                                    u();
                            t.initCallback && t.initCallback();
                        }),
                            (this.getWebPImages = function (i) {
                                if ("canvas" === e.nodeName.toLowerCase()) {
                                    var n = g.frames.length;
                                    g.frames.forEach(function (e, i) {
                                        var a = n - i;
                                        t.disableLogs ||
                                            console.log(
                                                a +
                                                    "/" +
                                                    n +
                                                    " frames remaining"
                                            ),
                                            t.onEncodingCallback &&
                                                t.onEncodingCallback(a, n);
                                        var o = e.image.toDataURL(
                                            "image/webp",
                                            1
                                        );
                                        g.frames[i].image = o;
                                    }),
                                        t.disableLogs ||
                                            console.log("Generating WebM"),
                                        i();
                                } else i();
                            }),
                            (this.stop = function (e) {
                                o = !1;
                                var n = this;
                                i && a
                                    ? a.stop(e)
                                    : this.getWebPImages(function () {
                                          g.compile(function (i) {
                                              t.disableLogs ||
                                                  console.log(
                                                      "Recording finished!"
                                                  ),
                                                  (n.blob = i),
                                                  n.blob.forEach &&
                                                      (n.blob = new Blob([], {
                                                          type: "video/webm",
                                                      })),
                                                  e && e(n.blob),
                                                  (g.frames = []);
                                          });
                                      });
                            });
                        var c = !1;
                        function l() {
                            (g.frames = []), (o = !1), (c = !1);
                        }
                        function u() {
                            if (c)
                                return (
                                    (f = new Date().getTime()),
                                    setTimeout(u, 500)
                                );
                            if ("canvas" === e.nodeName.toLowerCase()) {
                                var i = new Date().getTime() - f;
                                return (
                                    (f = new Date().getTime()),
                                    g.frames.push({
                                        image:
                                            ((n =
                                                document.createElement(
                                                    "canvas"
                                                )),
                                            (a = n.getContext("2d")),
                                            (n.width = e.width),
                                            (n.height = e.height),
                                            a.drawImage(e, 0, 0),
                                            n),
                                        duration: i,
                                    }),
                                    void (o && setTimeout(u, t.frameInterval))
                                );
                            }
                            var n, a;
                            html2canvas(e, {
                                grabMouse:
                                    void 0 === t.showMousePointer ||
                                    t.showMousePointer,
                                onrendered: function (e) {
                                    var i = new Date().getTime() - f;
                                    if (!i)
                                        return setTimeout(u, t.frameInterval);
                                    (f = new Date().getTime()),
                                        g.frames.push({
                                            image: e.toDataURL("image/webp", 1),
                                            duration: i,
                                        }),
                                        o && setTimeout(u, t.frameInterval);
                                },
                            });
                        }
                        (this.pause = function () {
                            (c = !0), a instanceof M && a.pause();
                        }),
                            (this.resume = function () {
                                (c = !1),
                                    a instanceof M
                                        ? a.resume()
                                        : o || this.record();
                            }),
                            (this.clearRecordedData = function () {
                                o && this.stop(l), l();
                            }),
                            (this.name = "CanvasRecorder"),
                            (this.toString = function () {
                                return this.name;
                            });
                        var f = new Date().getTime(),
                            g = new L.Video(100);
                    }
                    function O(e, t) {
                        function i(e) {
                            e = void 0 !== e ? e : 10;
                            var t = new Date().getTime() - s;
                            return t
                                ? a
                                    ? ((s = new Date().getTime()),
                                      setTimeout(i, 100))
                                    : ((s = new Date().getTime()),
                                      r.paused && r.play(),
                                      l.drawImage(r, 0, 0, c.width, c.height),
                                      d.frames.push({
                                          duration: t,
                                          image: c.toDataURL("image/webp"),
                                      }),
                                      void (n || setTimeout(i, e, e)))
                                : setTimeout(i, e, e);
                        }
                        (t = t || {}).frameInterval || (t.frameInterval = 10),
                            t.disableLogs ||
                                console.log(
                                    "Using frames-interval:",
                                    t.frameInterval
                                ),
                            (this.record = function () {
                                t.width || (t.width = 320),
                                    t.height || (t.height = 240),
                                    t.video ||
                                        (t.video = {
                                            width: t.width,
                                            height: t.height,
                                        }),
                                    t.canvas ||
                                        (t.canvas = {
                                            width: t.width,
                                            height: t.height,
                                        }),
                                    (c.width = t.canvas.width || 320),
                                    (c.height = t.canvas.height || 240),
                                    (l = c.getContext("2d")),
                                    t.video &&
                                    t.video instanceof HTMLVideoElement
                                        ? ((r = t.video.cloneNode()),
                                          t.initCallback && t.initCallback())
                                        : ((r =
                                              document.createElement("video")),
                                          k(e, r),
                                          (r.onloadedmetadata = function () {
                                              t.initCallback &&
                                                  t.initCallback();
                                          }),
                                          (r.width = t.video.width),
                                          (r.height = t.video.height)),
                                    (r.muted = !0),
                                    r.play(),
                                    (s = new Date().getTime()),
                                    (d = new L.Video()),
                                    t.disableLogs ||
                                        (console.log(
                                            "canvas resolutions",
                                            c.width,
                                            "*",
                                            c.height
                                        ),
                                        console.log(
                                            "video width/height",
                                            r.width || c.width,
                                            "*",
                                            r.height || c.height
                                        )),
                                    i(t.frameInterval);
                            });
                        var n = !1;
                        this.stop = function (e) {
                            (e = e || function () {}), (n = !0);
                            var i = this;
                            setTimeout(function () {
                                !(function (e, t, i, n, a) {
                                    var o = document.createElement("canvas");
                                    (o.width = c.width), (o.height = c.height);
                                    var r,
                                        s,
                                        d,
                                        l = o.getContext("2d"),
                                        u = [],
                                        f = -1 === t,
                                        g =
                                            t && t > 0 && t <= e.length
                                                ? t
                                                : e.length,
                                        p = Math.sqrt(
                                            Math.pow(255, 2) +
                                                Math.pow(255, 2) +
                                                Math.pow(255, 2)
                                        ),
                                        m = i && i >= 0 && i <= 1 ? i : 0,
                                        h = n && n >= 0 && n <= 1 ? n : 0,
                                        v = !1;
                                    (s = -1),
                                        (d = (r = {
                                            length: g,
                                            functionToLoop: function (t, i) {
                                                var n,
                                                    a,
                                                    o,
                                                    r = function () {
                                                        (!v &&
                                                            o - n <= o * h) ||
                                                            (f && (v = !0),
                                                            u.push(e[i])),
                                                            t();
                                                    };
                                                if (v) r();
                                                else {
                                                    var s = new Image();
                                                    (s.onload = function () {
                                                        l.drawImage(
                                                            s,
                                                            0,
                                                            0,
                                                            c.width,
                                                            c.height
                                                        );
                                                        var e = l.getImageData(
                                                            0,
                                                            0,
                                                            c.width,
                                                            c.height
                                                        );
                                                        (n = 0),
                                                            (a = e.data.length),
                                                            (o =
                                                                e.data.length /
                                                                4);
                                                        for (
                                                            var t = 0;
                                                            t < a;
                                                            t += 4
                                                        ) {
                                                            var i = {
                                                                r: e.data[t],
                                                                g: e.data[
                                                                    t + 1
                                                                ],
                                                                b: e.data[
                                                                    t + 2
                                                                ],
                                                            };
                                                            Math.sqrt(
                                                                Math.pow(
                                                                    i.r - 0,
                                                                    2
                                                                ) +
                                                                    Math.pow(
                                                                        i.g - 0,
                                                                        2
                                                                    ) +
                                                                    Math.pow(
                                                                        i.b - 0,
                                                                        2
                                                                    )
                                                            ) <=
                                                                p * m && n++;
                                                        }
                                                        r();
                                                    }),
                                                        (s.src = e[i].image);
                                                }
                                            },
                                            callback: function () {
                                                (u = u.concat(e.slice(g)))
                                                    .length <= 0 &&
                                                    u.push(e[e.length - 1]),
                                                    a(u);
                                            },
                                        }).length),
                                        (function e() {
                                            ++s !== d
                                                ? setTimeout(function () {
                                                      r.functionToLoop(e, s);
                                                  }, 1)
                                                : r.callback();
                                        })();
                                })(d.frames, -1, null, null, function (n) {
                                    (d.frames = n),
                                        t.advertisement &&
                                            t.advertisement.length &&
                                            (d.frames = t.advertisement.concat(
                                                d.frames
                                            )),
                                        d.compile(function (t) {
                                            (i.blob = t),
                                                i.blob.forEach &&
                                                    (i.blob = new Blob([], {
                                                        type: "video/webm",
                                                    })),
                                                e && e(i.blob);
                                        });
                                });
                            }, 10);
                        };
                        var a = !1;
                        function o() {
                            (d.frames = []), (n = !0), (a = !1);
                        }
                        (this.pause = function () {
                            a = !0;
                        }),
                            (this.resume = function () {
                                (a = !1), n && this.record();
                            }),
                            (this.clearRecordedData = function () {
                                n || this.stop(o), o();
                            }),
                            (this.name = "WhammyRecorder"),
                            (this.toString = function () {
                                return this.name;
                            });
                        var r,
                            s,
                            d,
                            c = document.createElement("canvas"),
                            l = c.getContext("2d");
                    }
                    void 0 !== f
                        ? (x.AudioContext = f)
                        : "undefined" != typeof webkitAudioContext &&
                          (x.AudioContext = webkitAudioContext),
                        (o.Storage = x),
                        (o.MediaStreamRecorder = M),
                        (o.StereoAudioRecorder = A),
                        (o.CanvasRecorder = D),
                        (o.WhammyRecorder = O);
                    var L = (function () {
                        function e(e) {
                            (this.frames = []),
                                (this.duration = e || 1),
                                (this.quality = 0.8);
                        }
                        function t(e) {
                            function t(e, t, i) {
                                return [{ data: e, id: 231 }].concat(
                                    i.map(function (e) {
                                        var i = (function (e) {
                                            var t = 0;
                                            if (
                                                (e.keyframe && (t |= 128),
                                                e.invisible && (t |= 8),
                                                e.lacing &&
                                                    (t |= e.lacing << 1),
                                                e.discardable && (t |= 1),
                                                e.trackNum > 127)
                                            )
                                                throw "TrackNumber > 127 not supported";
                                            return (
                                                [
                                                    128 | e.trackNum,
                                                    e.timecode >> 8,
                                                    255 & e.timecode,
                                                    t,
                                                ]
                                                    .map(function (e) {
                                                        return String.fromCharCode(
                                                            e
                                                        );
                                                    })
                                                    .join("") + e.frame
                                            );
                                        })({
                                            discardable: 0,
                                            frame: e.data.slice(4),
                                            invisible: 0,
                                            keyframe: 1,
                                            lacing: 0,
                                            trackNum: 1,
                                            timecode: Math.round(t),
                                        });
                                        return (
                                            (t += e.duration),
                                            { data: i, id: 163 }
                                        );
                                    })
                                );
                            }
                            function i(e) {
                                for (var t = []; e > 0; )
                                    t.push(255 & e), (e >>= 8);
                                return new Uint8Array(t.reverse());
                            }
                            function n(e) {
                                var t = [];
                                e =
                                    (e.length % 8
                                        ? new Array(9 - (e.length % 8)).join(
                                              "0"
                                          )
                                        : "") + e;
                                for (var i = 0; i < e.length; i += 8)
                                    t.push(parseInt(e.substr(i, 8), 2));
                                return new Uint8Array(t);
                            }
                            function a(e) {
                                for (var t = [], o = 0; o < e.length; o++) {
                                    var r = e[o].data;
                                    "object" == typeof r && (r = a(r)),
                                        "number" == typeof r &&
                                            (r = n(r.toString(2))),
                                        "string" == typeof r &&
                                            (r = new Uint8Array(
                                                r.split("").map(function (e) {
                                                    return e.charCodeAt(0);
                                                })
                                            ));
                                    var s = r.size || r.byteLength || r.length,
                                        d = Math.ceil(
                                            Math.ceil(
                                                Math.log(s) / Math.log(2)
                                            ) / 8
                                        ),
                                        c = s.toString(2),
                                        l =
                                            new Array(
                                                7 * d + 7 + 1 - c.length
                                            ).join("0") + c,
                                        u = new Array(d).join("0") + "1" + l;
                                    t.push(i(e[o].id)), t.push(n(u)), t.push(r);
                                }
                                return new Blob(t, { type: "video/webm" });
                            }
                            function o(e, t) {
                                return parseInt(
                                    e
                                        .substr(t + 4, 4)
                                        .split("")
                                        .map(function (e) {
                                            var t = e.charCodeAt(0).toString(2);
                                            return (
                                                new Array(
                                                    8 - t.length + 1
                                                ).join("0") + t
                                            );
                                        })
                                        .join(""),
                                    2
                                );
                            }
                            function r(e) {
                                for (var t = 0, i = {}; t < e.length; ) {
                                    var n = e.substr(t, 4),
                                        a = o(e, t),
                                        s = e.substr(t + 4 + 4, a);
                                    (t += 8 + a),
                                        (i[n] = i[n] || []),
                                        "RIFF" === n || "LIST" === n
                                            ? i[n].push(r(s))
                                            : i[n].push(s);
                                }
                                return i;
                            }
                            var s = new (function (e) {
                                var i = (function (e) {
                                    if (e[0]) {
                                        for (
                                            var t = e[0].width,
                                                i = e[0].height,
                                                n = e[0].duration,
                                                a = 1;
                                            a < e.length;
                                            a++
                                        )
                                            n += e[a].duration;
                                        return {
                                            duration: n,
                                            width: t,
                                            height: i,
                                        };
                                    }
                                    postMessage({
                                        error: "Something went wrong. Maybe WebP format is not supported in the current browser.",
                                    });
                                })(e);
                                if (!i) return [];
                                for (
                                    var n,
                                        o = [
                                            {
                                                id: 440786851,
                                                data: [
                                                    { data: 1, id: 17030 },
                                                    { data: 1, id: 17143 },
                                                    { data: 4, id: 17138 },
                                                    { data: 8, id: 17139 },
                                                    { data: "webm", id: 17026 },
                                                    { data: 2, id: 17031 },
                                                    { data: 2, id: 17029 },
                                                ],
                                            },
                                            {
                                                id: 408125543,
                                                data: [
                                                    {
                                                        id: 357149030,
                                                        data: [
                                                            {
                                                                data: 1e6,
                                                                id: 2807729,
                                                            },
                                                            {
                                                                data: "whammy",
                                                                id: 19840,
                                                            },
                                                            {
                                                                data: "whammy",
                                                                id: 22337,
                                                            },
                                                            {
                                                                data:
                                                                    ((n =
                                                                        i.duration),
                                                                    [].slice
                                                                        .call(
                                                                            new Uint8Array(
                                                                                new Float64Array(
                                                                                    [
                                                                                        n,
                                                                                    ]
                                                                                ).buffer
                                                                            ),
                                                                            0
                                                                        )
                                                                        .map(
                                                                            function (
                                                                                e
                                                                            ) {
                                                                                return String.fromCharCode(
                                                                                    e
                                                                                );
                                                                            }
                                                                        )
                                                                        .reverse()
                                                                        .join(
                                                                            ""
                                                                        )),
                                                                id: 17545,
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        id: 374648427,
                                                        data: [
                                                            {
                                                                id: 174,
                                                                data: [
                                                                    {
                                                                        data: 1,
                                                                        id: 215,
                                                                    },
                                                                    {
                                                                        data: 1,
                                                                        id: 29637,
                                                                    },
                                                                    {
                                                                        data: 0,
                                                                        id: 156,
                                                                    },
                                                                    {
                                                                        data: "und",
                                                                        id: 2274716,
                                                                    },
                                                                    {
                                                                        data: "V_VP8",
                                                                        id: 134,
                                                                    },
                                                                    {
                                                                        data: "VP8",
                                                                        id: 2459272,
                                                                    },
                                                                    {
                                                                        data: 1,
                                                                        id: 131,
                                                                    },
                                                                    {
                                                                        id: 224,
                                                                        data: [
                                                                            {
                                                                                data: i.width,
                                                                                id: 176,
                                                                            },
                                                                            {
                                                                                data: i.height,
                                                                                id: 186,
                                                                            },
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                        r = 0,
                                        s = 0;
                                    r < e.length;

                                ) {
                                    var d = [],
                                        c = 0;
                                    do {
                                        d.push(e[r]), (c += e[r].duration), r++;
                                    } while (r < e.length && c < 3e4);
                                    var l = { id: 524531317, data: t(s, 0, d) };
                                    o[1].data.push(l), (s += c);
                                }
                                return a(o);
                            })(
                                e.map(function (e) {
                                    var t = (function (e) {
                                        for (
                                            var t = e.RIFF[0].WEBP[0],
                                                i = t.indexOf("*"),
                                                n = 0,
                                                a = [];
                                            n < 4;
                                            n++
                                        )
                                            a[n] = t.charCodeAt(i + 3 + n);
                                        return {
                                            width: 16383 & ((a[1] << 8) | a[0]),
                                            height:
                                                16383 & ((a[3] << 8) | a[2]),
                                            data: t,
                                            riff: e,
                                        };
                                    })(r(atob(e.image.slice(23))));
                                    return (t.duration = e.duration), t;
                                })
                            );
                            postMessage(s);
                        }
                        return (
                            (e.prototype.add = function (e, t) {
                                if (
                                    ("canvas" in e && (e = e.canvas),
                                    "toDataURL" in e &&
                                        (e = e.toDataURL(
                                            "image/webp",
                                            this.quality
                                        )),
                                    !/^data:image\/webp;base64,/gi.test(e))
                                )
                                    throw "Input must be formatted properly as a base64 encoded DataURI of type image/webp";
                                this.frames.push({
                                    image: e,
                                    duration: t || this.duration,
                                });
                            }),
                            (e.prototype.compile = function (e) {
                                var i,
                                    n,
                                    a,
                                    o =
                                        ((i = t),
                                        (n = g.createObjectURL(
                                            new Blob(
                                                [
                                                    i.toString(),
                                                    "this.onmessage =  function (eee) {" +
                                                        i.name +
                                                        "(eee.data);}",
                                                ],
                                                {
                                                    type: "application/javascript",
                                                }
                                            )
                                        )),
                                        (a = new Worker(n)),
                                        g.revokeObjectURL(n),
                                        a);
                                (o.onmessage = function (t) {
                                    t.data.error
                                        ? console.error(t.data.error)
                                        : e(t.data);
                                }),
                                    o.postMessage(this.frames);
                            }),
                            { Video: e }
                        );
                    })();
                    o.Whammy = L;
                    var I = {
                        init: function () {
                            var e = this;
                            if (
                                "undefined" != typeof indexedDB &&
                                void 0 !== indexedDB.open
                            ) {
                                var t,
                                    i =
                                        this.dbName ||
                                        location.href.replace(
                                            /\/|:|#|%|\.|\[|\]/g,
                                            ""
                                        ),
                                    n = indexedDB.open(i, 1);
                                (n.onerror = e.onError),
                                    (n.onsuccess = function () {
                                        ((t = n.result).onerror = e.onError),
                                            t.setVersion && 1 !== t.version
                                                ? (t.setVersion(1).onsuccess =
                                                      function () {
                                                          a(t), o();
                                                      })
                                                : o();
                                    }),
                                    (n.onupgradeneeded = function (e) {
                                        a(e.target.result);
                                    });
                            } else
                                console.error(
                                    "IndexedDB API are not available in this browser."
                                );
                            function a(t) {
                                t.createObjectStore(e.dataStoreName);
                            }
                            function o() {
                                var i = t.transaction(
                                    [e.dataStoreName],
                                    "readwrite"
                                );
                                function n(t) {
                                    i
                                        .objectStore(e.dataStoreName)
                                        .get(t).onsuccess = function (i) {
                                        e.callback &&
                                            e.callback(i.target.result, t);
                                    };
                                }
                                e.videoBlob &&
                                    i
                                        .objectStore(e.dataStoreName)
                                        .put(e.videoBlob, "videoBlob"),
                                    e.gifBlob &&
                                        i
                                            .objectStore(e.dataStoreName)
                                            .put(e.gifBlob, "gifBlob"),
                                    e.audioBlob &&
                                        i
                                            .objectStore(e.dataStoreName)
                                            .put(e.audioBlob, "audioBlob"),
                                    n("audioBlob"),
                                    n("videoBlob"),
                                    n("gifBlob");
                            }
                        },
                        Fetch: function (e) {
                            return (this.callback = e), this.init(), this;
                        },
                        Store: function (e) {
                            return (
                                (this.audioBlob = e.audioBlob),
                                (this.videoBlob = e.videoBlob),
                                (this.gifBlob = e.gifBlob),
                                this.init(),
                                this
                            );
                        },
                        onError: function (e) {
                            console.error(JSON.stringify(e, null, "\t"));
                        },
                        dataStoreName: "recordRTC",
                        dbName: null,
                    };
                    function B(e, t) {
                        if ("undefined" == typeof GIFEncoder) {
                            var i = document.createElement("script");
                            (i.src =
                                "https://www.webrtc-experiment.com/gif-recorder.js"),
                                (
                                    document.body || document.documentElement
                                ).appendChild(i);
                        }
                        t = t || {};
                        var n =
                            e instanceof CanvasRenderingContext2D ||
                            e instanceof HTMLCanvasElement;
                        (this.record = function () {
                            "undefined" != typeof GIFEncoder && s
                                ? (n ||
                                      (t.width ||
                                          (t.width = d.offsetWidth || 320),
                                      t.height ||
                                          (t.height = d.offsetHeight || 240),
                                      t.video ||
                                          (t.video = {
                                              width: t.width,
                                              height: t.height,
                                          }),
                                      t.canvas ||
                                          (t.canvas = {
                                              width: t.width,
                                              height: t.height,
                                          }),
                                      (o.width = t.canvas.width || 320),
                                      (o.height = t.canvas.height || 240),
                                      (d.width = t.video.width || 320),
                                      (d.height = t.video.height || 240)),
                                  (f = new GIFEncoder()).setRepeat(0),
                                  f.setDelay(t.frameRate || 200),
                                  f.setQuality(t.quality || 10),
                                  f.start(),
                                  "function" ==
                                      typeof t.onGifRecordingStarted &&
                                      t.onGifRecordingStarted(),
                                  Date.now(),
                                  (g = c(function e(i) {
                                      if (!0 !== p.clearedRecordedData) {
                                          if (a)
                                              return setTimeout(function () {
                                                  e(i);
                                              }, 100);
                                          (g = c(e)),
                                              void 0 === typeof l && (l = i),
                                              i - l < 90 ||
                                                  (!n && d.paused && d.play(),
                                                  n ||
                                                      r.drawImage(
                                                          d,
                                                          0,
                                                          0,
                                                          o.width,
                                                          o.height
                                                      ),
                                                  t.onGifPreview &&
                                                      t.onGifPreview(
                                                          o.toDataURL(
                                                              "image/png"
                                                          )
                                                      ),
                                                  f.addFrame(r),
                                                  (l = i));
                                      }
                                  })),
                                  t.initCallback && t.initCallback())
                                : setTimeout(p.record, 1e3);
                        }),
                            (this.stop = function (e) {
                                (e = e || function () {}),
                                    g && u(g),
                                    Date.now(),
                                    (this.blob = new Blob(
                                        [new Uint8Array(f.stream().bin)],
                                        { type: "image/gif" }
                                    )),
                                    e(this.blob),
                                    (f.stream().bin = []);
                            });
                        var a = !1;
                        (this.pause = function () {
                            a = !0;
                        }),
                            (this.resume = function () {
                                a = !1;
                            }),
                            (this.clearRecordedData = function () {
                                (p.clearedRecordedData = !0),
                                    f && (f.stream().bin = []);
                            }),
                            (this.name = "GifRecorder"),
                            (this.toString = function () {
                                return this.name;
                            });
                        var o = document.createElement("canvas"),
                            r = o.getContext("2d");
                        n &&
                            (e instanceof CanvasRenderingContext2D
                                ? (o = (r = e).canvas)
                                : e instanceof HTMLCanvasElement &&
                                  ((r = e.getContext("2d")), (o = e)));
                        var s = !0;
                        if (!n) {
                            var d = document.createElement("video");
                            (d.muted = !0),
                                (d.autoplay = !0),
                                (d.playsInline = !0),
                                (s = !1),
                                (d.onloadedmetadata = function () {
                                    s = !0;
                                }),
                                k(e, d),
                                d.play();
                        }
                        var l,
                            f,
                            g = null,
                            p = this;
                    }
                    function U(e, t) {
                        void 0 !== i.g && i.g, (t = t || "multi-streams-mixer");
                        var n = [],
                            a = !1,
                            o = document.createElement("canvas"),
                            r = o.getContext("2d");
                        (o.style.opacity = 0),
                            (o.style.position = "absolute"),
                            (o.style.zIndex = -1),
                            (o.style.top = "-1000em"),
                            (o.style.left = "-1000em"),
                            (o.className = t),
                            (
                                document.body || document.documentElement
                            ).appendChild(o),
                            (this.disableLogs = !1),
                            (this.frameInterval = 10),
                            (this.width = 360),
                            (this.height = 240),
                            (this.useGainNode = !0);
                        var s = this,
                            d = window.AudioContext;
                        void 0 === d &&
                            ("undefined" != typeof webkitAudioContext &&
                                (d = webkitAudioContext),
                            "undefined" != typeof mozAudioContext &&
                                (d = mozAudioContext));
                        var c = window.URL;
                        void 0 === c &&
                            "undefined" != typeof webkitURL &&
                            (c = webkitURL),
                            "undefined" != typeof navigator &&
                                void 0 === navigator.getUserMedia &&
                                (void 0 !== navigator.webkitGetUserMedia &&
                                    (navigator.getUserMedia =
                                        navigator.webkitGetUserMedia),
                                void 0 !== navigator.mozGetUserMedia &&
                                    (navigator.getUserMedia =
                                        navigator.mozGetUserMedia));
                        var l = window.MediaStream;
                        void 0 === l &&
                            "undefined" != typeof webkitMediaStream &&
                            (l = webkitMediaStream),
                            void 0 !== l &&
                                void 0 === l.prototype.stop &&
                                (l.prototype.stop = function () {
                                    this.getTracks().forEach(function (e) {
                                        e.stop();
                                    });
                                });
                        var u = {};
                        function f() {
                            if (!a) {
                                var e = n.length,
                                    t = !1,
                                    i = [];
                                if (
                                    (n.forEach(function (e) {
                                        e.stream || (e.stream = {}),
                                            e.stream.fullcanvas
                                                ? (t = e)
                                                : i.push(e);
                                    }),
                                    t)
                                )
                                    (o.width = t.stream.width),
                                        (o.height = t.stream.height);
                                else if (i.length) {
                                    o.width =
                                        e > 1 ? 2 * i[0].width : i[0].width;
                                    var r = 1;
                                    (3 !== e && 4 !== e) || (r = 2),
                                        (5 !== e && 6 !== e) || (r = 3),
                                        (7 !== e && 8 !== e) || (r = 4),
                                        (9 !== e && 10 !== e) || (r = 5),
                                        (o.height = i[0].height * r);
                                } else
                                    (o.width = s.width || 360),
                                        (o.height = s.height || 240);
                                t && t instanceof HTMLVideoElement && g(t),
                                    i.forEach(function (e, t) {
                                        g(e, t);
                                    }),
                                    setTimeout(f, s.frameInterval);
                            }
                        }
                        function g(e, t) {
                            if (!a) {
                                var i = 0,
                                    n = 0,
                                    o = e.width,
                                    s = e.height;
                                1 === t && (i = e.width),
                                    2 === t && (n = e.height),
                                    3 === t && ((i = e.width), (n = e.height)),
                                    4 === t && (n = 2 * e.height),
                                    5 === t &&
                                        ((i = e.width), (n = 2 * e.height)),
                                    6 === t && (n = 3 * e.height),
                                    7 === t &&
                                        ((i = e.width), (n = 3 * e.height)),
                                    void 0 !== e.stream.left &&
                                        (i = e.stream.left),
                                    void 0 !== e.stream.top &&
                                        (n = e.stream.top),
                                    void 0 !== e.stream.width &&
                                        (o = e.stream.width),
                                    void 0 !== e.stream.height &&
                                        (s = e.stream.height),
                                    r.drawImage(e, i, n, o, s),
                                    "function" == typeof e.stream.onRender &&
                                        e.stream.onRender(r, i, n, o, s, t);
                            }
                        }
                        function p(e) {
                            var i = document.createElement("video");
                            return (
                                (function (e, t) {
                                    "srcObject" in t
                                        ? (t.srcObject = e)
                                        : "mozSrcObject" in t
                                        ? (t.mozSrcObject = e)
                                        : (t.srcObject = e);
                                })(e, i),
                                (i.className = t),
                                (i.muted = !0),
                                (i.volume = 0),
                                (i.width = e.width || s.width || 360),
                                (i.height = e.height || s.height || 240),
                                i.play(),
                                i
                            );
                        }
                        function m(t) {
                            (n = []),
                                (t = t || e).forEach(function (e) {
                                    if (
                                        e.getTracks().filter(function (e) {
                                            return "video" === e.kind;
                                        }).length
                                    ) {
                                        var t = p(e);
                                        (t.stream = e), n.push(t);
                                    }
                                });
                        }
                        void 0 !== d
                            ? (u.AudioContext = d)
                            : "undefined" != typeof webkitAudioContext &&
                              (u.AudioContext = webkitAudioContext),
                            (this.startDrawingFrames = function () {
                                f();
                            }),
                            (this.appendStreams = function (t) {
                                if (!t) throw "First parameter is required.";
                                t instanceof Array || (t = [t]),
                                    t.forEach(function (t) {
                                        var i = new l();
                                        if (
                                            t.getTracks().filter(function (e) {
                                                return "video" === e.kind;
                                            }).length
                                        ) {
                                            var a = p(t);
                                            (a.stream = t),
                                                n.push(a),
                                                i.addTrack(
                                                    t
                                                        .getTracks()
                                                        .filter(function (e) {
                                                            return (
                                                                "video" ===
                                                                e.kind
                                                            );
                                                        })[0]
                                                );
                                        }
                                        if (
                                            t.getTracks().filter(function (e) {
                                                return "audio" === e.kind;
                                            }).length
                                        ) {
                                            var o =
                                                s.audioContext.createMediaStreamSource(
                                                    t
                                                );
                                            (s.audioDestination =
                                                s.audioContext.createMediaStreamDestination()),
                                                o.connect(s.audioDestination),
                                                i.addTrack(
                                                    s.audioDestination.stream
                                                        .getTracks()
                                                        .filter(function (e) {
                                                            return (
                                                                "audio" ===
                                                                e.kind
                                                            );
                                                        })[0]
                                                );
                                        }
                                        e.push(i);
                                    });
                            }),
                            (this.releaseStreams = function () {
                                (n = []),
                                    (a = !0),
                                    s.gainNode &&
                                        (s.gainNode.disconnect(),
                                        (s.gainNode = null)),
                                    s.audioSources.length &&
                                        (s.audioSources.forEach(function (e) {
                                            e.disconnect();
                                        }),
                                        (s.audioSources = [])),
                                    s.audioDestination &&
                                        (s.audioDestination.disconnect(),
                                        (s.audioDestination = null)),
                                    s.audioContext && s.audioContext.close(),
                                    (s.audioContext = null),
                                    r.clearRect(0, 0, o.width, o.height),
                                    o.stream &&
                                        (o.stream.stop(), (o.stream = null));
                            }),
                            (this.resetVideoStreams = function (e) {
                                !e || e instanceof Array || (e = [e]), m(e);
                            }),
                            (this.name = "MultiStreamsMixer"),
                            (this.toString = function () {
                                return this.name;
                            }),
                            (this.getMixedStream = function () {
                                a = !1;
                                var t = (function () {
                                        var e;
                                        m(),
                                            "captureStream" in o
                                                ? (e = o.captureStream())
                                                : "mozCaptureStream" in o
                                                ? (e = o.mozCaptureStream())
                                                : s.disableLogs ||
                                                  console.error(
                                                      "Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features"
                                                  );
                                        var t = new l();
                                        return (
                                            e
                                                .getTracks()
                                                .filter(function (e) {
                                                    return "video" === e.kind;
                                                })
                                                .forEach(function (e) {
                                                    t.addTrack(e);
                                                }),
                                            (o.stream = t),
                                            t
                                        );
                                    })(),
                                    i = (function () {
                                        u.AudioContextConstructor ||
                                            (u.AudioContextConstructor =
                                                new u.AudioContext()),
                                            (s.audioContext =
                                                u.AudioContextConstructor),
                                            (s.audioSources = []),
                                            !0 === s.useGainNode &&
                                                ((s.gainNode =
                                                    s.audioContext.createGain()),
                                                s.gainNode.connect(
                                                    s.audioContext.destination
                                                ),
                                                (s.gainNode.gain.value = 0));
                                        var t = 0;
                                        if (
                                            (e.forEach(function (e) {
                                                if (
                                                    e
                                                        .getTracks()
                                                        .filter(function (e) {
                                                            return (
                                                                "audio" ===
                                                                e.kind
                                                            );
                                                        }).length
                                                ) {
                                                    t++;
                                                    var i =
                                                        s.audioContext.createMediaStreamSource(
                                                            e
                                                        );
                                                    !0 === s.useGainNode &&
                                                        i.connect(s.gainNode),
                                                        s.audioSources.push(i);
                                                }
                                            }),
                                            t)
                                        )
                                            return (
                                                (s.audioDestination =
                                                    s.audioContext.createMediaStreamDestination()),
                                                s.audioSources.forEach(
                                                    function (e) {
                                                        e.connect(
                                                            s.audioDestination
                                                        );
                                                    }
                                                ),
                                                s.audioDestination.stream
                                            );
                                    })();
                                return (
                                    i &&
                                        i
                                            .getTracks()
                                            .filter(function (e) {
                                                return "audio" === e.kind;
                                            })
                                            .forEach(function (e) {
                                                t.addTrack(e);
                                            }),
                                    e.forEach(function (e) {
                                        e.fullcanvas;
                                    }),
                                    t
                                );
                            });
                    }
                    function E(e, t) {
                        e = e || [];
                        var i,
                            n,
                            a = this;
                        (t = t || {
                            elementClass: "multi-streams-mixer",
                            mimeType: "video/webm",
                            video: { width: 360, height: 240 },
                        }).frameInterval || (t.frameInterval = 10),
                            t.video || (t.video = {}),
                            t.video.width || (t.video.width = 360),
                            t.video.height || (t.video.height = 240),
                            (this.record = function () {
                                var a;
                                (i = new U(
                                    e,
                                    t.elementClass || "multi-streams-mixer"
                                )),
                                    ((a = []),
                                    e.forEach(function (e) {
                                        R(e, "video").forEach(function (e) {
                                            a.push(e);
                                        });
                                    }),
                                    a).length &&
                                        ((i.frameInterval =
                                            t.frameInterval || 10),
                                        (i.width = t.video.width || 360),
                                        (i.height = t.video.height || 240),
                                        i.startDrawingFrames()),
                                    t.previewStream &&
                                        "function" == typeof t.previewStream &&
                                        t.previewStream(i.getMixedStream()),
                                    (n = new M(i.getMixedStream(), t)).record();
                            }),
                            (this.stop = function (e) {
                                n &&
                                    n.stop(function (t) {
                                        (a.blob = t),
                                            e(t),
                                            a.clearRecordedData();
                                    });
                            }),
                            (this.pause = function () {
                                n && n.pause();
                            }),
                            (this.resume = function () {
                                n && n.resume();
                            }),
                            (this.clearRecordedData = function () {
                                n && (n.clearRecordedData(), (n = null)),
                                    i && (i.releaseStreams(), (i = null));
                            }),
                            (this.addStreams = function (a) {
                                if (!a) throw "First parameter is required.";
                                a instanceof Array || (a = [a]),
                                    e.concat(a),
                                    n &&
                                        i &&
                                        (i.appendStreams(a),
                                        t.previewStream &&
                                            "function" ==
                                                typeof t.previewStream &&
                                            t.previewStream(
                                                i.getMixedStream()
                                            ));
                            }),
                            (this.resetVideoStreams = function (e) {
                                i &&
                                    (!e || e instanceof Array || (e = [e]),
                                    i.resetVideoStreams(e));
                            }),
                            (this.getMixer = function () {
                                return i;
                            }),
                            (this.name = "MultiStreamRecorder"),
                            (this.toString = function () {
                                return this.name;
                            });
                    }
                    function F(e, t) {
                        var i, n, a;
                        function o() {
                            return new ReadableStream({
                                start: function (n) {
                                    var a = document.createElement("canvas"),
                                        o = document.createElement("video"),
                                        r = !0;
                                    (o.srcObject = e),
                                        (o.muted = !0),
                                        (o.height = t.height),
                                        (o.width = t.width),
                                        (o.volume = 0),
                                        (o.onplaying = function () {
                                            (a.width = t.width),
                                                (a.height = t.height);
                                            var e = a.getContext("2d"),
                                                s = 1e3 / t.frameRate,
                                                d = setInterval(function () {
                                                    if (
                                                        (i &&
                                                            (clearInterval(d),
                                                            n.close()),
                                                        r &&
                                                            ((r = !1),
                                                            t.onVideoProcessStarted &&
                                                                t.onVideoProcessStarted()),
                                                        e.drawImage(o, 0, 0),
                                                        "closed" !==
                                                            n
                                                                ._controlledReadableStream
                                                                .state)
                                                    )
                                                        try {
                                                            n.enqueue(
                                                                e.getImageData(
                                                                    0,
                                                                    0,
                                                                    t.width,
                                                                    t.height
                                                                )
                                                            );
                                                        } catch (e) {}
                                                }, s);
                                        }),
                                        o.play();
                                },
                            });
                        }
                        function r(e, d) {
                            if (!t.workerPath && !d)
                                return (
                                    (i = !1),
                                    void fetch(
                                        "https://unpkg.com/webm-wasm@latest/dist/webm-worker.js"
                                    ).then(function (t) {
                                        t.arrayBuffer().then(function (t) {
                                            r(e, t);
                                        });
                                    })
                                );
                            if (!t.workerPath && d instanceof ArrayBuffer) {
                                var c = new Blob([d], {
                                    type: "text/javascript",
                                });
                                t.workerPath = g.createObjectURL(c);
                            }
                            t.workerPath ||
                                console.error(
                                    "workerPath parameter is missing."
                                ),
                                (n = new Worker(t.workerPath)).postMessage(
                                    t.webAssemblyPath ||
                                        "https://unpkg.com/webm-wasm@latest/dist/webm-wasm.wasm"
                                ),
                                n.addEventListener("message", function (e) {
                                    "READY" === e.data
                                        ? (n.postMessage({
                                              width: t.width,
                                              height: t.height,
                                              bitrate: t.bitrate || 1200,
                                              timebaseDen: t.frameRate || 30,
                                              realtime: t.realtime,
                                          }),
                                          o().pipeTo(
                                              new WritableStream({
                                                  write: function (e) {
                                                      i
                                                          ? console.error(
                                                                "Got image, but recorder is finished!"
                                                            )
                                                          : n.postMessage(
                                                                e.data.buffer,
                                                                [e.data.buffer]
                                                            );
                                                  },
                                              })
                                          ))
                                        : e.data && (a || s.push(e.data));
                                });
                        }
                        ("undefined" != typeof ReadableStream &&
                            "undefined" != typeof WritableStream) ||
                            console.error(
                                "Following polyfill is strongly recommended: https://unpkg.com/@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js"
                            ),
                            ((t = t || {}).width = t.width || 640),
                            (t.height = t.height || 480),
                            (t.frameRate = t.frameRate || 30),
                            (t.bitrate = t.bitrate || 1200),
                            (t.realtime = t.realtime || !0),
                            (this.record = function () {
                                (s = []),
                                    (a = !1),
                                    (this.blob = null),
                                    r(e),
                                    "function" == typeof t.initCallback &&
                                        t.initCallback();
                            }),
                            (this.pause = function () {
                                a = !0;
                            }),
                            (this.resume = function () {
                                a = !1;
                            });
                        var s = [];
                        (this.stop = function (e) {
                            i = !0;
                            var t = this;
                            !(function (e) {
                                n
                                    ? (n.addEventListener(
                                          "message",
                                          function (t) {
                                              null === t.data &&
                                                  (n.terminate(),
                                                  (n = null),
                                                  e && e());
                                          }
                                      ),
                                      n.postMessage(null))
                                    : e && e();
                            })(function () {
                                (t.blob = new Blob(s, { type: "video/webm" })),
                                    e(t.blob);
                            });
                        }),
                            (this.name = "WebAssemblyRecorder"),
                            (this.toString = function () {
                                return this.name;
                            }),
                            (this.clearRecordedData = function () {
                                (s = []), (a = !1), (this.blob = null);
                            }),
                            (this.blob = null);
                    }
                    (o.DiskStorage = I),
                        (o.GifRecorder = B),
                        (o.MultiStreamRecorder = E),
                        (o.RecordRTCPromisesHandler = function (e, t) {
                            if (!this)
                                throw 'Use "new RecordRTCPromisesHandler()"';
                            if (void 0 === e)
                                throw 'First argument "MediaStream" is required.';
                            var i = this;
                            (i.recordRTC = new o(e, t)),
                                (this.startRecording = function () {
                                    return new Promise(function (e, t) {
                                        try {
                                            i.recordRTC.startRecording(), e();
                                        } catch (e) {
                                            t(e);
                                        }
                                    });
                                }),
                                (this.stopRecording = function () {
                                    return new Promise(function (e, t) {
                                        try {
                                            i.recordRTC.stopRecording(function (
                                                n
                                            ) {
                                                (i.blob =
                                                    i.recordRTC.getBlob()),
                                                    i.blob && i.blob.size
                                                        ? e(n)
                                                        : t(
                                                              "Empty blob.",
                                                              i.blob
                                                          );
                                            });
                                        } catch (e) {
                                            t(e);
                                        }
                                    });
                                }),
                                (this.pauseRecording = function () {
                                    return new Promise(function (e, t) {
                                        try {
                                            i.recordRTC.pauseRecording(), e();
                                        } catch (e) {
                                            t(e);
                                        }
                                    });
                                }),
                                (this.resumeRecording = function () {
                                    return new Promise(function (e, t) {
                                        try {
                                            i.recordRTC.resumeRecording(), e();
                                        } catch (e) {
                                            t(e);
                                        }
                                    });
                                }),
                                (this.getDataURL = function (e) {
                                    return new Promise(function (e, t) {
                                        try {
                                            i.recordRTC.getDataURL(function (
                                                t
                                            ) {
                                                e(t);
                                            });
                                        } catch (e) {
                                            t(e);
                                        }
                                    });
                                }),
                                (this.getBlob = function () {
                                    return new Promise(function (e, t) {
                                        try {
                                            e(i.recordRTC.getBlob());
                                        } catch (e) {
                                            t(e);
                                        }
                                    });
                                }),
                                (this.getInternalRecorder = function () {
                                    return new Promise(function (e, t) {
                                        try {
                                            e(
                                                i.recordRTC.getInternalRecorder()
                                            );
                                        } catch (e) {
                                            t(e);
                                        }
                                    });
                                }),
                                (this.reset = function () {
                                    return new Promise(function (e, t) {
                                        try {
                                            e(i.recordRTC.reset());
                                        } catch (e) {
                                            t(e);
                                        }
                                    });
                                }),
                                (this.destroy = function () {
                                    return new Promise(function (e, t) {
                                        try {
                                            e(i.recordRTC.destroy());
                                        } catch (e) {
                                            t(e);
                                        }
                                    });
                                }),
                                (this.getState = function () {
                                    return new Promise(function (e, t) {
                                        try {
                                            e(i.recordRTC.getState());
                                        } catch (e) {
                                            t(e);
                                        }
                                    });
                                }),
                                (this.blob = null),
                                (this.version = "5.6.2");
                        }),
                        (o.WebAssemblyRecorder = F);
                },
                245: (e) => {
                    e.exports =
                        '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><polygon points="1,3 3,3 3,8 2,8 2,9 3,9 5,9 6,9 6,8 5,8 5,3 7,3 7,4 8,4 8,1 7,1 0,1 0,2 0,3 0,4 1,4 "></polygon><rect x="10" y="5" width="6" height="1"></rect><rect x="10" y="8" width="6" height="1"></rect><rect y="11" width="16" height="1"></rect><rect y="14" width="16" height="1"></rect></g></svg>';
                },
                775: (e) => {
                    e.exports =
                        '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><path d="M12.1,15l-4.6-2.4L2.9,15l0.9-5.1L0,6.3l5.2-0.7L7.5,1l2.3,4.6L15,6.3l-3.8,3.6L12.1,15z"></path></g></svg>';
                },
                599: (e) => {
                    e.exports =
                        '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><rect x="3" y="7" width="2" height="2"></rect><rect x="7" y="11" width="2" height="2"></rect><rect x="3" y="11" width="2" height="2"></rect><rect x="11" y="11" width="2" height="2"></rect><rect x="11" y="7" width="2" height="2"></rect><path d="M10,6H6v4h4V6z M9,9H7V7h2V9z"></path><rect x="4" width="1" height="3"></rect><rect x="11" width="1" height="3"></rect><path d="M13,2v2h-3V2H6v2H3V2H0v14h16V2H13z M15,15H1V5h14V15z"></path></g></svg>';
                },
                153: (e) => {
                    e.exports =
                        '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><path d="M11,3.4C11,2.1,9.9,1,8.6,1H8.4C7.1,1,6,2.1,6,3.4V5h5V3.4z"></path><path d="M8.4,10h0.3C9.9,10,11,8.9,11,7.6V6H6v1.6C6,8.9,7.1,10,8.4,10z"></path><path d="M12,6v0.9c0,2.2-1.6,4.1-3.5,4.1S5,9.1,5,6.9V6H4v1c0,2.5,1.8,4.6,4,4.9V14H6v1h5v-1H9v-2.1 c2.2-0.3,4-2.4,4-4.9V6H12z"></path></g></svg>';
                },
                773: (e) => {
                    e.exports =
                        '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><rect y="10" width="16" height="2"></rect><polygon points="2,4 2,7 4,9 6,7 6,4 "></polygon><polygon points="10,4 10,7 12,9 14,7 14,4 "></polygon></svg>';
                },
                95: (e) => {
                    e.exports =
                        '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7 1h9v2H7zM9 6h7v2H9zM11 11h5v2h-5zM5 10l1 1c-2.2 0-4-1.8-4-4 0-1.9 1.3-3.4 3-3.9v-2C2.2 1.5 0 4 0 7c0 3.3 2.7 6 5.9 6H6l-1 1 1 1 3-3-3-3-1 1z"></path></svg>';
                },
                14: (e) => {
                    e.exports =
                        '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><path d="M15,11H0V5h15V11z M1,10h13V6H1V10z"></path></g><rect x="2" y="7" width="4" height="2"></rect><rect x="7" y="7" width="4" height="2"></rect></svg>';
                },
                327: (e, t, i) => {
                    "use strict";
                    i.d(t, { default: () => r });
                    var n = i(851);
                    const a = "bootstrapslider";
                    function o(e) {
                        var t = {
                            name: a,
                            title: "Bootstrap Slider",
                            iconName: "icon-bootstrap-slider",
                            widgetIsLoaded: function () {
                                return void 0 !== n;
                            },
                            isFit: function (e) {
                                return e.getType() === a;
                            },
                            htmlTemplate: "<div></div>",
                            activatedByChanged: function (t) {
                                e.Serializer.addClass(a, [], null, "empty");
                                let i =
                                    e.ElementFactory.Instance
                                        .registerCustomQuestion;
                                i && i(a),
                                    e.Serializer.addProperties(a, [
                                        {
                                            name: "step:number",
                                            default: 1,
                                            category: "general",
                                        },
                                        {
                                            name: "rangeMin:number",
                                            default: 0,
                                            category: "general",
                                        },
                                        {
                                            name: "rangeMax:number",
                                            default: 100,
                                            category: "general",
                                        },
                                        {
                                            name: "orientation",
                                            default: "horizontal",
                                            choices: ["horizontal", "vertical"],
                                            category: "general",
                                        },
                                    ]),
                                    e.Serializer.addProperty(a, {
                                        name: "config",
                                        default: null,
                                        category: "general",
                                    });
                            },
                            afterRender: function (e, t) {
                                (t.style.paddingTop = "20px"),
                                    (t.style.paddingBottom = "17px"),
                                    (t.style.paddingLeft = "10px");
                                var i = document.createElement("input");
                                (i.id = e.id),
                                    (i.type = "text"),
                                    i.setAttribute(
                                        "data-slider-id",
                                        e.name + "_" + e.id
                                    ),
                                    i.setAttribute(
                                        "data-slider-min",
                                        e.rangeMin
                                    ),
                                    i.setAttribute(
                                        "data-slider-max",
                                        e.rangeMax
                                    ),
                                    i.setAttribute("data-slider-step", e.step),
                                    "vertical" == e.orientation &&
                                        i.setAttribute(
                                            "data-slider-orientation",
                                            "vertical"
                                        ),
                                    i.setAttribute("data-slider-step", e.step),
                                    i.setAttribute(
                                        "data-slider-value",
                                        e.value || e.rangeMin
                                    ),
                                    t.appendChild(i);
                                var a = e.config || {};
                                void 0 === a.id && (a.id = e.name + "_" + e.id),
                                    void 0 === a.min && (a.min = e.rangeMin),
                                    void 0 === a.max && (a.max = e.rangeMax),
                                    void 0 === a.step && (a.step = e.step),
                                    void 0 === a.enabled &&
                                        (a.enabled = !e.isReadOnly),
                                    void 0 === a.value &&
                                        (a.value = e.value || e.rangeMin);
                                var o = new n(i, a);
                                o.on("change", function (t) {
                                    e.value = o.getValue();
                                }),
                                    (e.readOnlyChangedCallback = function () {
                                        e.isReadOnly ? o.disable() : o.enable();
                                    }),
                                    (e.bootstrapSlider = o),
                                    (e.valueChangedCallback = function () {
                                        o.setValue(e.value || e.rangeMin);
                                    });
                            },
                            willUnmount: function (e, t) {
                                e.bootstrapSlider &&
                                    e.bootstrapSlider.destroy(),
                                    (e.bootstrapSlider = null),
                                    (e.readOnlyChangedCallback = null);
                            },
                            pdfRender: function (e, t) {
                                if (t.question.getType() === a) {
                                    var i = t.module.SurveyHelper.createPoint(
                                        t.module.SurveyHelper.mergeRects.apply(
                                            null,
                                            t.bricks
                                        )
                                    );
                                    (i.xLeft += t.controller.unitWidth),
                                        (i.yTop +=
                                            t.controller.unitHeight *
                                            t.module.FlatQuestion
                                                .CONTENT_GAP_VERT_SCALE);
                                    var n =
                                            t.module.SurveyHelper.createTextFieldRect(
                                                i,
                                                t.controller
                                            ),
                                        o = new t.module.TextFieldBrick(
                                            t.question,
                                            t.controller,
                                            n,
                                            !0,
                                            t.question.id,
                                            (
                                                t.question.value ||
                                                t.question.defaultValue ||
                                                ""
                                            ).toString(),
                                            "",
                                            t.question.isReadOnly,
                                            !1,
                                            "text"
                                        );
                                    t.bricks.push(o);
                                }
                            },
                        };
                        e.CustomWidgetCollection.Instance.addCustomWidget(
                            t,
                            "customtype"
                        );
                    }
                    "undefined" != typeof Survey && o(Survey);
                    const r = o;
                },
                814: (e, t, i) => {
                    "use strict";
                    function n(e) {
                        const t = "icon-editor",
                            n = "editor";
                        e.SvgRegistry &&
                            e.SvgRegistry.registerIconFromSvg(t, i(245), "");
                        var a = {
                            name: n,
                            title: "Editor",
                            iconName: t,
                            widgetIsLoaded: function () {
                                return "undefined" != typeof CKEDITOR;
                            },
                            isFit: function (e) {
                                return e.getType() === n;
                            },
                            htmlTemplate:
                                "<textarea rows='10' cols='80' style: {width:'100%'}></textarea>",
                            activatedByChanged: function (t) {
                                e.Serializer.addClass(n, [], null, "empty");
                                let i =
                                    e.ElementFactory.Instance
                                        .registerCustomQuestion;
                                i && i(n),
                                    e.Serializer.addProperty(n, {
                                        name: "height",
                                        default: 300,
                                        category: "general",
                                    });
                            },
                            afterRender: function (e, t) {
                                var i = e.inputId;
                                (CKEDITOR.editorConfig = function (t) {
                                    (t.language = "es"),
                                        (t.height = e.height),
                                        (t.toolbarCanCollapse = !0);
                                }),
                                    (t.name = i),
                                    CKEDITOR.instances[i] &&
                                        (CKEDITOR.instances[
                                            i
                                        ].removeAllListeners(),
                                        CKEDITOR.remove(CKEDITOR.instances[i]));
                                var n = CKEDITOR.replace(t);
                                CKEDITOR.instances[i].config.readOnly =
                                    e.isReadOnly;
                                var a = !1,
                                    o = function () {
                                        a ||
                                            void 0 === e.value ||
                                            n.setData(e.value);
                                    };
                                n.on("change", function () {
                                    (a = !0), (e.value = n.getData()), (a = !1);
                                }),
                                    (e.valueChangedCallback = o),
                                    (e.readOnlyChangedCallback = function () {
                                        e.isReadOnly
                                            ? n.setReadOnly(!0)
                                            : n.setReadOnly(!1);
                                    }),
                                    o();
                            },
                            willUnmount: function (e, t) {
                                (e.readOnlyChangedCallback = null),
                                    CKEDITOR.instances[e.inputId].destroy(!1);
                            },
                            pdfRender: function (t, i) {
                                if (i.question.getType() === n) {
                                    const n = new e.LocalizableString(t, !0);
                                    (n.text =
                                        i.question.value ||
                                        i.question.defaultValue),
                                        (i.question.locHtml = n),
                                        "standard" === i.question.renderAs ||
                                        "image" === i.question.renderAs
                                            ? (i.question.renderAs =
                                                  i.question.renderAs)
                                            : (i.question.renderAs = "auto");
                                    const a = i.repository.create(
                                        t,
                                        i.question,
                                        i.controller,
                                        "html"
                                    );
                                    return new Promise(function (e) {
                                        a.generateFlats(i.point).then(function (
                                            t
                                        ) {
                                            (i.bricks = t), e();
                                        });
                                    });
                                }
                            },
                        };
                        e.CustomWidgetCollection.Instance.addCustomWidget(
                            a,
                            "customtype"
                        );
                    }
                    i.d(t, { default: () => a }),
                        "undefined" != typeof Survey && n(Survey);
                    const a = n;
                },
                591: (e, t, i) => {
                    "use strict";
                    function n(e, t) {
                        t = t || window.$;
                        var i = {
                            name: "autocomplete",
                            widgetIsLoaded: function () {
                                return (
                                    "function" == typeof t &&
                                    !!t.fn.easyAutocomplete
                                );
                            },
                            isFit: function (e) {
                                return "text" === e.getType();
                            },
                            isDefaultRender: !0,
                            activatedByChanged: function (t) {
                                e.Serializer.findProperty("text", "choices") ||
                                    e.Serializer.findProperty(
                                        "text",
                                        "choicesByUrl"
                                    ) ||
                                    (e.Serializer.addProperty("text", {
                                        name: "choices:itemvalues",
                                        category: "choices",
                                        categoryIndex: 1,
                                    }),
                                    e.Serializer.addProperty("text", {
                                        name: "choicesByUrl:restfull",
                                        className: "ChoicesRestfull",
                                        category: "choicesByUrl",
                                        visible: !1,
                                        categoryIndex: 2,
                                    }),
                                    e.Serializer.addProperty("text", {
                                        name: "config",
                                        category: "general",
                                        visible: !1,
                                    }));
                            },
                            afterRender: function (e, i) {
                                var n,
                                    a = t(i).is("input")
                                        ? t(i)
                                        : t(i).find("input"),
                                    o = (n = e.cssRoot)
                                        ? n.replace(/(^\s*)|(\s+)/g, ".")
                                        : "",
                                    r = a.parents(o)[0];
                                o && r && (r.style.overflow = "visible");
                                var s = e.config,
                                    d =
                                        s && "string" == typeof s
                                            ? JSON.parse(s)
                                            : s;
                                d || (d = {}),
                                    (d.data = (e.choices || []).map(function (
                                        e
                                    ) {
                                        return e.text;
                                    })),
                                    void 0 === d.adjustWidth &&
                                        (d.adjustWidth = !1),
                                    d.list ||
                                        (d.list = {
                                            sort: {
                                                enabled: !0,
                                                method: (e, t) => {
                                                    const i = a
                                                        .val()
                                                        .toLowerCase();
                                                    return (
                                                        e
                                                            .toLowerCase()
                                                            .indexOf(i) -
                                                        t
                                                            .toLowerCase()
                                                            .indexOf(i)
                                                    );
                                                },
                                            },
                                            match: { enabled: !0 },
                                            onChooseEvent: function () {
                                                var t = a.getSelectedItemData();
                                                t &&
                                                    "object" == typeof t &&
                                                    e.choicesByUrl &&
                                                    e.choicesByUrl.valueName &&
                                                    (t =
                                                        t[
                                                            e.choicesByUrl
                                                                .valueName
                                                        ]),
                                                    (e.value = t);
                                            },
                                        }),
                                    d.placeholder ||
                                        (d.placeholder = e.placeholder),
                                    e.choicesByUrl &&
                                        ((d.url = function (t) {
                                            return e.choicesByUrl.url;
                                        }),
                                        (d.getValue =
                                            e.choicesByUrl.valueName)),
                                    a.easyAutocomplete(d),
                                    (a[0].oninput = function () {
                                        e.customWidgetData.isNeedRender = !0;
                                    });
                                var c = function () {
                                    a[0].value =
                                        void 0 === e.value ? "" : e.value;
                                };
                                (e.valueChangedCallback = c), c();
                            },
                            willUnmount: function (e, t) {},
                        };
                        e.CustomWidgetCollection.Instance.addCustomWidget(i);
                    }
                    i.d(t, { default: () => a }),
                        "undefined" != typeof Survey &&
                            n(Survey, window.jQuery);
                    const a = n;
                },
                606: (e, t, i) => {
                    "use strict";
                    function n(e, t) {
                        t = t || window.$;
                        const i = "emotionsratings";
                        var n = {
                            name: i,
                            title: "Emotions Ratings",
                            iconName: "icon-emotionsratings",
                            widgetIsLoaded: function () {
                                return (
                                    "function" == typeof t &&
                                    !!t.fn.emotionsRating
                                );
                            },
                            defaultJSON: { choices: [1, 2, 3, 4, 5] },
                            isFit: function (e) {
                                return e.getType() === i;
                            },
                            isDefaultRender: !1,
                            htmlTemplate: "<div style='height: 33px'></div>",
                            activatedByChanged: function (t) {
                                e.Serializer.addClass(
                                    i,
                                    [
                                        { name: "hasOther", visible: !1 },
                                        { name: "otherText", visible: !1 },
                                        { name: "optionsCaption", visible: !1 },
                                        { name: "otherErrorText", visible: !1 },
                                        {
                                            name: "storeOthersAsComment",
                                            visible: !1,
                                        },
                                        { name: "renderAs", visible: !1 },
                                    ],
                                    null,
                                    "dropdown"
                                );
                                let n =
                                    e.ElementFactory.Instance
                                        .registerCustomQuestion;
                                n && n(i),
                                    e.Serializer.addProperties(i, [
                                        {
                                            name: "emotions:itemvalues",
                                            category: "emotions",
                                            categoryIndex: 1,
                                            default: [
                                                "angry",
                                                "disappointed",
                                                "meh",
                                                "happy",
                                                "inLove",
                                            ],
                                        },
                                        {
                                            name: "emotionSize:number",
                                            category: "emotions",
                                            default: 30,
                                        },
                                        {
                                            name: "emotionsCount:number",
                                            category: "emotions",
                                            default: 5,
                                        },
                                        {
                                            name: "bgEmotion",
                                            category: "emotions",
                                            default: "happy",
                                        },
                                        {
                                            name: "emotionColor",
                                            category: "emotions",
                                            default: "#FF0066",
                                        },
                                    ]);
                            },
                            afterRender: function (e, i) {
                                var n = (e.emotions || []).map(function (e) {
                                    return e.value;
                                });
                                0 === n.length &&
                                    (n = [
                                        "angry",
                                        "disappointed",
                                        "meh",
                                        "happy",
                                        "inLove",
                                    ]);
                                var a = {
                                    emotionSize: e.emotionSize,
                                    bgEmotion: e.bgEmotion,
                                    emotions: n,
                                    initialRating: e.value,
                                    color: e.emotionColor,
                                    count: e.emotionsCount,
                                    onUpdate: function (t) {
                                        e.value = t;
                                    },
                                };
                                function o() {
                                    (i.innerHTML = "<div></div>"),
                                        t(i).off(),
                                        (a.initialRating = e.value || 0),
                                        (a.disabled = e.isReadOnly),
                                        t(i).find("div").emotionsRating(a);
                                }
                                o(),
                                    (e.valueChangedCallback = o),
                                    (e.readOnlyChangedCallback = o);
                            },
                            willUnmount: function (e, i) {
                                (i.innerHTML = null),
                                    t(i).off(),
                                    (e.readOnlyChangedCallback = null),
                                    (e.valueChangedCallback = null);
                            },
                            pdfQuestionType: "dropdown",
                        };
                        e.CustomWidgetCollection.Instance.addCustomWidget(
                            n,
                            "customtype"
                        );
                    }
                    i.d(t, { default: () => a }),
                        "undefined" != typeof Survey &&
                            n(Survey, window.jQuery);
                    const a = n;
                },
                332: (e, t, i) => {
                    "use strict";
                    function n(e) {
                        return "string" == typeof e
                            ? (e || "").replace(/(['])/g, "\\$1")
                            : e;
                    }
                    function a(e, t) {
                        t = t || window.$;
                        var i = {
                            className: "iradio_square-blue",
                            checkboxClass: "iradio_square-blue",
                            radioClass: "iradio_square-blue",
                            name: "icheck",
                            widgetIsLoaded: function () {
                                return "function" == typeof t && !!t.fn.iCheck;
                            },
                            isFit: function (e) {
                                var t = e.getType();
                                return (
                                    "radiogroup" === t ||
                                    "checkbox" === t ||
                                    "matrix" === t
                                );
                            },
                            isDefaultRender: !0,
                            afterRender: function (e, i) {
                                var a = this,
                                    o = t(i);
                                function r(e, t) {
                                    if (!Array.isArray(e)) return -1;
                                    for (var i = 0; i < e.length; i++) {
                                        if (e[i] == t) return i;
                                        if (
                                            e[i] &&
                                            e[i].toString().toLowerCase() == t
                                        )
                                            return i;
                                    }
                                    return -1;
                                }
                                o.find(".sv-item__decorator").hide(),
                                    o.find("input").data({ iCheck: void 0 });
                                var s = !1,
                                    d = function () {
                                        var t = o.find("input");
                                        t.iCheck({
                                            checkboxClass:
                                                e.checkboxClass ||
                                                a.checkboxClass ||
                                                a.className,
                                            radioClass:
                                                e.radioClass ||
                                                a.radioClass ||
                                                a.className,
                                        }),
                                            t.on("ifChecked", function (t) {
                                                if (!s)
                                                    if (
                                                        "matrix" === e.getType()
                                                    )
                                                        e.generatedVisibleRows.forEach(
                                                            function (e, i, n) {
                                                                e.fullName ===
                                                                    t.target
                                                                        .name &&
                                                                    (e.value =
                                                                        t.target.value);
                                                            }
                                                        );
                                                    else if (
                                                        "checkbox" ===
                                                        e.getType()
                                                    ) {
                                                        var i = e.value || [];
                                                        -1 ===
                                                            r(
                                                                i,
                                                                t.target.value
                                                            ) &&
                                                            (e.value = i.concat(
                                                                [t.target.value]
                                                            ));
                                                    } else
                                                        e.value =
                                                            t.target.value;
                                            }),
                                            t.on("ifUnchecked", function (t) {
                                                if (
                                                    !s &&
                                                    "checkbox" === e.getType()
                                                ) {
                                                    var i = (
                                                            e.value || []
                                                        ).slice(),
                                                        n = r(
                                                            i,
                                                            t.target.value
                                                        );
                                                    n >= 0 &&
                                                        (i.splice(n, 1),
                                                        (e.value = i));
                                                }
                                            });
                                    };
                                function c(e) {
                                    e.iCheck("uncheck"),
                                        e[0].parentElement.classList.remove(
                                            "checked"
                                        );
                                }
                                var l = function () {
                                    if (((s = !0), "matrix" !== e.getType())) {
                                        var a = e.value;
                                        if (
                                            (Array.isArray(a) || (a = [a]),
                                            "checkbox" == e.getType())
                                        ) {
                                            var d = e.value;
                                            e.visibleChoices.forEach(function (
                                                e
                                            ) {
                                                var t = o.find(
                                                    "input[value='" +
                                                        n(e.value) +
                                                        "']"
                                                );
                                                t &&
                                                    (r(d, e.value) > -1
                                                        ? t.iCheck("check")
                                                        : t[0].checked &&
                                                          (t.removeAttr(
                                                              "checked"
                                                          ),
                                                          t
                                                              .parent()
                                                              .hasClass(
                                                                  "checked"
                                                              )
                                                              ? c(t)
                                                              : setTimeout(
                                                                    function () {
                                                                        c(t);
                                                                    }
                                                                )));
                                            });
                                        } else
                                            a.forEach(function (e) {
                                                o.find(
                                                    "input[value='" +
                                                        n(e) +
                                                        "']"
                                                ).iCheck("check");
                                            });
                                    } else
                                        e.generatedVisibleRows.forEach(
                                            function (e, a, o) {
                                                e.value &&
                                                    t(i)
                                                        .find(
                                                            "input[name='" +
                                                                e.fullName +
                                                                "'][value='" +
                                                                n(e.value) +
                                                                "']"
                                                        )
                                                        .iCheck("check");
                                            }
                                        );
                                    s = !1;
                                };
                                d(),
                                    (e.visibleChoicesChangedCallback =
                                        function () {
                                            d(),
                                                o
                                                    .find(".sv-item__decorator")
                                                    .hide();
                                        }),
                                    (e.valueChangedCallback = l),
                                    l();
                            },
                            willUnmount: function (e, i) {
                                t(i).find("input").iCheck("destroy"),
                                    (e.visibleChoicesChangedCallback = null);
                            },
                        };
                        e.Serializer.addProperty("radiogroup", {
                            name: "radioClass",
                            category: "general",
                        }),
                            e.Serializer.addProperty("checkbox", {
                                name: "checkboxClass",
                                category: "general",
                            }),
                            e.CustomWidgetCollection.Instance.addCustomWidget(
                                i,
                                "type"
                            );
                    }
                    i.d(t, { default: () => o }),
                        "undefined" != typeof Survey &&
                            a(Survey, window.jQuery);
                    const o = a;
                },
                809: (e, t, i) => {
                    "use strict";
                    i.d(t, { default: () => r });
                    var n = i(801),
                        a = i.n(n);
                    function o(e) {
                        var t = {
                            name: "maskedit",
                            numericGroupSeparator: ",",
                            numericRadixPoint: void 0,
                            numericAutoGroup: !0,
                            numericDigits: 2,
                            numericDigitsOptional: !1,
                            numericPlaceholder: "0",
                            autoUnmask: !0,
                            clearIncomplete: !0,
                            showMaskOnHover: !0,
                            widgetIsLoaded: function () {
                                return void 0 !== a();
                            },
                            isFit: function (e) {
                                return (
                                    "multipletext" == e.getType() ||
                                    ("text" == e.getType() &&
                                        ("none" != e.inputMask ||
                                            e.inputFormat))
                                );
                            },
                            isDefaultRender: !0,
                            activatedByChanged: function (t) {
                                if (
                                    !e.Serializer.findProperty(
                                        "text",
                                        "inputMask"
                                    )
                                ) {
                                    var i = [
                                        {
                                            name: "autoUnmask:boolean",
                                            category: "general",
                                            default: !0,
                                        },
                                        {
                                            name: "clearIncomplete:boolean",
                                            category: "general",
                                            default: !0,
                                        },
                                        {
                                            name: "showMaskOnHover:boolean",
                                            category: "general",
                                            default: !0,
                                        },
                                        {
                                            name: "inputFormat",
                                            category: "general",
                                        },
                                        {
                                            name: "inputMask",
                                            category: "general",
                                            default: "none",
                                            choices: [
                                                "none",
                                                "datetime",
                                                "currency",
                                                "decimal",
                                                "email",
                                                "phone",
                                                "ip",
                                            ],
                                        },
                                        {
                                            name: "numericDigits",
                                            category: "general",
                                            visible: !1,
                                        },
                                        {
                                            name: "options",
                                            category: "general",
                                            visible: !1,
                                        },
                                        {
                                            name: "prefix",
                                            category: "general",
                                            visible: !1,
                                        },
                                        {
                                            name: "suffix",
                                            category: "general",
                                            visible: !1,
                                        },
                                    ];
                                    e.Serializer.addProperties("text", i),
                                        e.Serializer.addProperties(
                                            "matrixdropdowncolumn",
                                            i
                                        ),
                                        e.Serializer.addProperties(
                                            "multipletextitem",
                                            i
                                        );
                                }
                            },
                            applyInputMask: function (e, t) {
                                var i = this,
                                    n =
                                        "none" !== e.inputMask
                                            ? e.inputMask
                                            : e.inputFormat,
                                    o = {};
                                if ("object" == typeof e.options)
                                    for (var r in e.options)
                                        o[r] = e.options[r];
                                (o.autoUnmask =
                                    void 0 !== e.autoUnmask
                                        ? e.autoUnmask
                                        : i.autoUnmask),
                                    (o.clearIncomplete =
                                        void 0 !== e.clearIncomplete
                                            ? e.clearIncomplete
                                            : i.clearIncomplete),
                                    (o.showMaskOnHover =
                                        void 0 !== e.showMaskOnHover
                                            ? e.showMaskOnHover
                                            : i.showMaskOnHover),
                                    "none" !== e.inputMask &&
                                        (o.inputFormat = e.inputFormat),
                                    ("currency" !== e.inputMask &&
                                        "decimal" !== e.inputMask) ||
                                        ((o.groupSeparator =
                                            i.numericGroupSeparator),
                                        (o.radixPoint = i.numericRadixPoint),
                                        (o.autoGroup = i.numericAutoGroup),
                                        (o.placeholder = i.numericPlaceholder)),
                                    "currency" === e.inputMask &&
                                        ((o.digits =
                                            e.numericDigits || i.numericDigits),
                                        (o.digitsOptional =
                                            i.numericDigitsOptional),
                                        (o.prefix = e.prefix || ""),
                                        (o.suffix = e.suffix || ""),
                                        (o.placeholder = i.numericPlaceholder)),
                                    "phone" === e.inputMask &&
                                        e.inputFormat &&
                                        (n = e.inputFormat),
                                    a()(n, o).mask(t),
                                    (t.onblur = function () {
                                        t.inputmask &&
                                            e.value ===
                                                t.inputmask.getemptymask() &&
                                            (e.value = "");
                                    });
                                var s =
                                    "multipletextitem" === e.getType()
                                        ? e.editorValue.customWidgetData
                                        : e.customWidgetData;
                                (t.oninput = function () {
                                    s.isNeedRender = !0;
                                }),
                                    (t.onfocusout = t.onchange =
                                        function () {
                                            t.inputmask &&
                                                (t.inputmask.isComplete()
                                                    ? (e.value = o.autoUnmask
                                                          ? t.inputmask.unmaskedvalue()
                                                          : t.value)
                                                    : (e.value = null));
                                        });
                                var d = function () {
                                    t.value =
                                        void 0 === e.value || null === e.value
                                            ? ""
                                            : e.value;
                                };
                                (e.valueChangedCallback = d), d();
                            },
                            afterRender: function (e, t) {
                                if ("multipletext" != e.getType()) {
                                    var i = t.querySelector("input") || t;
                                    this.applyInputMask(e, i);
                                } else
                                    for (var n = 0; n < e.items.length; n++) {
                                        var a = e.items[n];
                                        ("none" != a.inputMask ||
                                            a.inputFormat) &&
                                            (i = t.querySelector(
                                                "#" + a.editor.inputId
                                            )) &&
                                            this.applyInputMask(a, i);
                                    }
                            },
                            willUnmount: function (e, t) {
                                var i = t.querySelector("input") || t;
                                i && i.inputmask && i.inputmask.remove();
                            },
                        };
                        e.CustomWidgetCollection.Instance.addCustomWidget(t);
                    }
                    "undefined" != typeof Survey && o(Survey);
                    const r = o;
                },
                927: (e, t, i) => {
                    "use strict";
                    function n(e, t) {
                        const n = "icon-barrating",
                            a = "barrating";
                        e.SvgRegistry &&
                            e.SvgRegistry.registerIconFromSvg(n, i(775), ""),
                            (t = t || window.$);
                        var o = {
                            name: a,
                            title: "Bar rating",
                            iconName: n,
                            widgetIsLoaded: function () {
                                return (
                                    "function" == typeof t && !!t.fn.barrating
                                );
                            },
                            defaultJSON: { choices: [1, 2, 3, 4, 5] },
                            isFit: function (e) {
                                return e.getType() === a;
                            },
                            isDefaultRender: !0,
                            activatedByChanged: function (t) {
                                e.Serializer.addClass(
                                    a,
                                    [
                                        { name: "hasOther", visible: !1 },
                                        { name: "otherText", visible: !1 },
                                        { name: "optionsCaption", visible: !1 },
                                        { name: "otherErrorText", visible: !1 },
                                        {
                                            name: "storeOthersAsComment",
                                            visible: !1,
                                        },
                                        { name: "renderAs", visible: !1 },
                                        { name: "select2Config", visible: !1 },
                                    ],
                                    null,
                                    "dropdown"
                                );
                                let i =
                                    e.ElementFactory.Instance
                                        .registerCustomQuestion;
                                i && i(a),
                                    e.Serializer.addProperty(a, {
                                        name: "showValues:boolean",
                                        default: !1,
                                        category: "general",
                                    }),
                                    e.Serializer.addProperty(a, {
                                        name: "ratingTheme",
                                        category: "general",
                                        default: "css-stars",
                                        choices: [
                                            "fontawesome-stars",
                                            "css-stars",
                                            "bars-pill",
                                            "bars-1to10",
                                            "bars-movie",
                                            "bars-reversed",
                                            "bars-horizontal",
                                            "fontawesome-stars-o",
                                        ],
                                    });
                            },
                            afterRender: function (e, i) {
                                var n,
                                    a,
                                    o = t(i).is("select")
                                        ? t(i).parent().parent()[0]
                                        : t(i).parent()[0],
                                    r = function () {
                                        (n = t(
                                            "<select class='sv-widget-select'></select>"
                                        )),
                                            e.visibleChoices.forEach(function (
                                                e
                                            ) {
                                                n.append(
                                                    '<option value="{0}">{1}</option>'.format(
                                                        e.value,
                                                        e.text
                                                    )
                                                );
                                            }),
                                            (a = t(o).find(
                                                '[id="{0}"]'.format(e.inputId)
                                            )).css("display", "none"),
                                            a.after(n),
                                            (n[0].selectedIndex = -1);
                                    },
                                    s = function () {
                                        n.barrating("show", {
                                            theme: e.ratingTheme,
                                            initialRating: e.value,
                                            showValues: e.showValues,
                                            showSelectedRating: !1,
                                            readonly: e.isReadOnly,
                                            onSelect: function (t, i) {
                                                (d = !0),
                                                    (e.value = t),
                                                    (d = !1);
                                            },
                                        });
                                    };
                                r(),
                                    s(),
                                    n.parents()[0] &&
                                        (n.parents()[0].style.marginBottom =
                                            "3px");
                                var d = !1;
                                (e.valueChangedCallback = function () {
                                    d ||
                                        t(o).find("select.sv-widget-select")[0]
                                            .value === e.value ||
                                        t(o)
                                            .find("select.sv-widget-select")
                                            .barrating("set", e.value);
                                }),
                                    (e.__barratingOnPropertyChangedCallback =
                                        function (e, t) {
                                            ("ratingTheme" !== t.name &&
                                                "showValues" !== t.name) ||
                                                (n.barrating("destroy"), s());
                                        }),
                                    e.onPropertyChanged.add(
                                        e.__barratingOnPropertyChangedCallback
                                    ),
                                    (e.readOnlyChangedCallback = function () {
                                        a.css("display", ""),
                                            n.barrating("destroy"),
                                            n.remove(),
                                            r(),
                                            s();
                                    }),
                                    (e.visibleChoicesChangedCallback =
                                        function () {
                                            s();
                                        });
                            },
                            willUnmount: function (e, i) {
                                var n = (
                                    t(i).is("select")
                                        ? t(i).parent().parent()
                                        : t(i).parent()
                                ).find("select.sv-widget-select");
                                n.barrating("destroy"),
                                    n.remove(),
                                    (e.valueChangedCallback = void 0),
                                    e.onPropertyChanged.remove(
                                        e.__barratingOnPropertyChangedCallback
                                    ),
                                    (e.__barratingOnPropertyChangedCallback =
                                        void 0);
                            },
                            pdfQuestionType: "dropdown",
                        };
                        e.CustomWidgetCollection.Instance.addCustomWidget(
                            o,
                            "customtype"
                        );
                    }
                    i.d(t, { default: () => a }),
                        "undefined" != typeof Survey && n(Survey, window.$);
                    const a = n;
                },
                284: (e, t, i) => {
                    "use strict";
                    function n(e, t) {
                        const n = "icon-datepicker",
                            a = "datepicker";
                        e.SvgRegistry &&
                            e.SvgRegistry.registerIconFromSvg(n, i(599), ""),
                            (t = t || window.$) &&
                                !t.fn.bootstrapDP &&
                                t.fn.datepicker &&
                                t.fn.datepicker.noConflict &&
                                ((t.fn.bootstrapDP =
                                    t.fn.datepicker.noConflict()),
                                t.fn.datepicker ||
                                    (t.fn.datepicker = t.fn.bootstrapDP));
                        var o = {
                            name: a,
                            title: "Date picker",
                            iconName: n,
                            widgetIsLoaded: function () {
                                return (
                                    !!t &&
                                    !!t.fn.datepicker &&
                                    !t.fn.datepicker.noConflict
                                );
                            },
                            isFit: function (e) {
                                return e.getType() === a;
                            },
                            htmlTemplate:
                                "<input class='form-control widget-datepicker' type='text'>",
                            activatedByChanged: function (t) {
                                e.Serializer.addClass(
                                    a,
                                    [
                                        { name: "inputType", visible: !1 },
                                        { name: "inputFormat", visible: !1 },
                                        { name: "inputMask", visible: !1 },
                                    ],
                                    null,
                                    "text"
                                );
                                let i =
                                    e.ElementFactory.Instance
                                        .registerCustomQuestion;
                                i && i(a),
                                    e.Serializer.addProperty(a, {
                                        name: "dateFormat",
                                        category: "general",
                                    }),
                                    e.Serializer.addProperty(a, {
                                        name: "config",
                                        category: "general",
                                        visible: !1,
                                        default: null,
                                    }),
                                    e.Serializer.addProperty(a, {
                                        name: "maxDate",
                                        category: "general",
                                    }),
                                    e.Serializer.addProperty(a, {
                                        name: "minDate",
                                        category: "general",
                                    }),
                                    e.Serializer.addProperty(a, {
                                        name: "disableInput:boolean",
                                        category: "general",
                                    });
                            },
                            afterRender: function (e, i) {
                                var n = t(i).is(".widget-datepicker")
                                    ? t(i)
                                    : t(i).find(".widget-datepicker");
                                n.addClass(e.css.text.root);
                                var a = !1,
                                    o = t.extend(!0, {}, e.config || {});
                                function r() {
                                    var t = n.datepicker("getDate"),
                                        i = new Date();
                                    t.setHours(i.getHours()),
                                        t.setMinutes(i.getMinutes()),
                                        t.setSeconds(i.getSeconds()),
                                        (e.value = t);
                                }
                                e.placeHolder &&
                                    n.attr("placeholder", e.placeHolder),
                                    void 0 === o.dateFormat &&
                                        (o.dateFormat = e.dateFormat
                                            ? e.dateFormat
                                            : void 0),
                                    void 0 === o.option &&
                                        (o.option = {
                                            minDate: null,
                                            maxDate: null,
                                        }),
                                    e.minDate && (o.minDate = e.minDate),
                                    e.maxDate && (o.maxDate = e.maxDate),
                                    e.renderedMin &&
                                        (o.minDate = new Date(e.renderedMin)),
                                    e.renderedMax &&
                                        (o.maxDate = new Date(e.renderedMax)),
                                    (o.disabled = e.isReadOnly),
                                    void 0 === o.onSelect &&
                                        (o.onSelect = function (e) {
                                            (a = !0),
                                                r(),
                                                (a = !1),
                                                (this.fixFocusIE = !0);
                                        }),
                                    (o.fixFocusIE = !1),
                                    (o.onClose = function (e, t) {
                                        this.fixFocusIE = !0;
                                    }),
                                    (o.beforeShow = function (e, t) {
                                        var i =
                                            !navigator.userAgent.match(
                                                /Trident\/7\./
                                            ) || !this.fixFocusIE;
                                        return (this.fixFocusIE = !1), i;
                                    });
                                var s = n
                                    .datepicker(o)
                                    .on("change", function (e) {
                                        r();
                                    });
                                function d() {
                                    if (e.isEmpty())
                                        s.datepicker("setDate", null);
                                    else {
                                        var t = e.value;
                                        "string" == typeof t &&
                                            (t = new Date(t)),
                                            s.datepicker("setDate", t);
                                    }
                                }
                                n.keyup(function (e) {
                                    (8 != e.keyCode && 46 != e.keyCode) ||
                                        t.datepicker._clearDate(this);
                                }),
                                    e.disableInput &&
                                        n.attr("readOnly", "true"),
                                    (e.readOnlyChangedCallback = function () {
                                        n.datepicker(
                                            "option",
                                            "disabled",
                                            e.isReadOnly
                                        );
                                    }),
                                    e.registerFunctionOnPropertyValueChanged(
                                        "dateFormat",
                                        function () {
                                            e.dateFormat &&
                                                s.datepicker(
                                                    "option",
                                                    "dateFormat",
                                                    e.dateFormat
                                                ),
                                                d();
                                        }
                                    ),
                                    (e.valueChangedCallback = function () {
                                        a || (d(), n.blur());
                                    }),
                                    e.valueChangedCallback();
                            },
                            willUnmount: function (e, i) {
                                (t(i).is(".widget-datepicker")
                                    ? t(i)
                                    : t(i).find(".widget-datepicker")
                                ).datepicker("destroy");
                            },
                            pdfQuestionType: "text",
                        };
                        e.CustomWidgetCollection.Instance.addCustomWidget(
                            o,
                            "customtype"
                        );
                    }
                    i.d(t, { default: () => a }),
                        "undefined" != typeof Survey &&
                            n(Survey, window.jQuery);
                    const a = n;
                },
                529: (e, t, i) => {
                    "use strict";
                    i.d(t, { default: () => r });
                    var n = i(212),
                        a = i.n(n);
                    function o(e) {
                        const t = "icon-microphone",
                            n = "microphone";
                        e.SvgRegistry &&
                            e.SvgRegistry.registerIconFromSvg(t, i(153), "");
                        var o = {
                            name: n,
                            title: "Microphone",
                            iconName: t,
                            widgetIsLoaded: function () {
                                return void 0 !== a();
                            },
                            isFit: function (e) {
                                return e.getType() === n;
                            },
                            htmlTemplate:
                                "<div style='height: 39px'><button type='button'  title='Record' style='vertical-align: top; margin-top: 3px' ><i class='fa fa-microphone' aria-hidden='true'></i></button>&nbsp;<button type='button' title='Save' style='vertical-align: top; margin-top: 3px'><i class='fa fa-cloud' aria-hidden='true' ></i></button>&nbsp;<audio style='vertical-align: top;margin-left: 10px;height:35px;-moz-box-shadow: 2px 2px 4px 0px #006773;-webkit-box-shadow:  2px 2px 4px 0px #006773;box-shadow: 2px 2px 4px 0px #006773;' controls='true' ></audio></div>",
                            activatedByChanged: function (t) {
                                e.Serializer.addClass(n, [], null, "empty");
                                let i =
                                    e.ElementFactory.Instance
                                        .registerCustomQuestion;
                                i && i(n);
                            },
                            afterRender: function (e, t) {
                                var i = t.getElementsByTagName("button")[0],
                                    n = t.getElementsByTagName("button")[1],
                                    o = t.getElementsByTagName("audio")[0],
                                    r = function (t) {
                                        (e.survey.mystream = t),
                                            (e.survey.recordRTC = a()(
                                                e.survey.mystream,
                                                {
                                                    type: "audio",
                                                    mimeType: "audio/webm",
                                                    audioBitsPerSecond: 44100,
                                                    sampleRate: 44100,
                                                    bufferSize: 16384,
                                                    numberOfAudioChannels: 1,
                                                }
                                            )),
                                            void 0 !== e.survey.recordRTC &&
                                                ((e.recordingStartedAt =
                                                    new Date()),
                                                e.survey.recordRTC.startRecording());
                                    },
                                    s = function () {
                                        alert("No microphone"),
                                            (e.survey.recordRTC = void 0),
                                            (e.survey.mystream = void 0);
                                    },
                                    d = function (t) {
                                        var i = e.survey.recordRTC.getBlob(),
                                            n = new FileReader();
                                        (n.onload = function (t) {
                                            var i = t.target.result;
                                            (e.value = i),
                                                (o.src = i),
                                                (e.survey.recordRTC = void 0),
                                                (e.survey.mystream = void 0);
                                        }),
                                            n.readAsDataURL(i);
                                    };
                                e.isReadOnly
                                    ? i.parentNode.removeChild(i)
                                    : (i.onclick = function () {
                                          (e.recordingStartedAt = void 0),
                                              (e.recordingEndedAt = void 0),
                                              (e.recordingDuration = void 0),
                                              (e.value = void 0),
                                              void 0 !== e.survey.recordRTC &&
                                                  (e.survey.recordRTC.stopRecording(
                                                      c
                                                  ),
                                                  void 0 !==
                                                      e.survey.mystream &&
                                                      e.survey.mystream
                                                          .getAudioTracks()
                                                          .forEach(function (
                                                              e
                                                          ) {
                                                              e.stop();
                                                          })),
                                              navigator.mediaDevices
                                                  .getUserMedia({
                                                      video: !1,
                                                      audio: !0,
                                                  })
                                                  .then(
                                                      r.bind(this),
                                                      s.bind(this)
                                                  );
                                      }),
                                    e.isReadOnly
                                        ? n.parentNode.removeChild(n)
                                        : (n.onclick = function () {
                                              var t = new Date();
                                              (e.recordingEndedAt = t),
                                                  (e.recordingDuration =
                                                      t - e.recordingStartedAt),
                                                  void 0 !==
                                                      e.survey.recordRTC &&
                                                      (e.survey.recordRTC.stopRecording(
                                                          d.bind(this)
                                                      ),
                                                      void 0 !==
                                                          e.survey.mystream &&
                                                          e.survey.mystream
                                                              .getAudioTracks()
                                                              .forEach(
                                                                  function (e) {
                                                                      e.stop();
                                                                  }
                                                              ));
                                          }),
                                    (o.src = e.value);
                                var c = function () {};
                                e.valueChangedCallback = function () {};
                            },
                            willUnmount: function (e, t) {
                                void 0 !== e.survey.recordRTC &&
                                    (e.survey.recordRTC.stopRecording(
                                        doNothingHandler
                                    ),
                                    void 0 !== e.survey.mystream &&
                                        e.survey.mystream
                                            .getAudioTracks()
                                            .forEach(function (e) {
                                                e.stop();
                                            }),
                                    (e.value = void 0),
                                    (e.survey.recordRTC = void 0),
                                    (e.survey.mystream = void 0));
                            },
                        };
                        e.CustomWidgetCollection.Instance.addCustomWidget(
                            o,
                            "customtype"
                        );
                    }
                    "undefined" != typeof Survey && o(Survey);
                    const r = o;
                },
                821: (e, t, i) => {
                    "use strict";
                    i.d(t, { default: () => r });
                    var n = i(658),
                        a = i.n(n);
                    function o(e) {
                        const t = "icon-nouislider",
                            n = "nouislider";
                        e.SvgRegistry &&
                            e.SvgRegistry.registerIconFromSvg(t, i(773), "");
                        var o = {
                            name: n,
                            title: "noUiSlider",
                            iconName: t,
                            widgetIsLoaded: function () {
                                return void 0 !== a();
                            },
                            isFit: function (e) {
                                return e.getType() === n;
                            },
                            htmlTemplate: "<div><div></div></div>",
                            activatedByChanged: function (t) {
                                e.Serializer.addClass(n, [], null, "empty");
                                let i =
                                    e.ElementFactory.Instance
                                        .registerCustomQuestion;
                                i && i(n),
                                    e.Serializer.addProperties(n, [
                                        {
                                            name: "step:number",
                                            category: "slider",
                                            categoryIndex: 1,
                                            default: 1,
                                        },
                                        {
                                            name: "rangeMin:number",
                                            category: "slider",
                                            default: 0,
                                        },
                                        {
                                            name: "rangeMax:number",
                                            category: "slider",
                                            default: 100,
                                        },
                                        {
                                            name: "pipsMode",
                                            category: "slider",
                                            default: "positions",
                                        },
                                        {
                                            name: "pipsValues:itemvalues",
                                            category: "slider",
                                            default: [0, 25, 50, 75, 100],
                                        },
                                        {
                                            name: "pipsText:itemvalues",
                                            category: "slider",
                                            default: [0, 25, 50, 75, 100],
                                        },
                                        {
                                            name: "pipsDensity:number",
                                            category: "slider",
                                            default: 5,
                                        },
                                        {
                                            name: "orientation",
                                            category: "slider",
                                            default: "horizontal",
                                            choices: ["horizontal", "vertical"],
                                        },
                                        {
                                            name: "direction:string",
                                            category: "slider",
                                            default: "ltr",
                                        },
                                        {
                                            name: "tooltips:boolean",
                                            category: "slider",
                                            default: !0,
                                        },
                                    ]);
                            },
                            afterRender: function (e, t) {
                                (t.style.paddingBottom = "19px"),
                                    (t.style.paddingLeft = "20px"),
                                    (t.style.paddingRight = "20px"),
                                    (t.style.paddingTop = "44px"),
                                    ((t = t.children[0]).style.marginBottom =
                                        "60px"),
                                    "vertical" === e.orientation &&
                                        ((t.style.height = "250px"),
                                        (t.style.marginLeft = "60px"));
                                var i = a().create(t, {
                                    start:
                                        e.rangeMin <= e.value &&
                                        e.value <= e.rangeMax
                                            ? e.value
                                            : (e.rangeMin + e.rangeMax) / 2,
                                    connect: [!0, !1],
                                    step: e.step,
                                    tooltips: e.tooltips,
                                    pips: {
                                        mode: e.pipsMode || "positions",
                                        values: e.pipsValues.map(function (e) {
                                            var t = e;
                                            return (
                                                void 0 !== e.value &&
                                                    (t = e.value),
                                                parseInt(t)
                                            );
                                        }),
                                        density: e.pipsDensity || 5,
                                        format: {
                                            to: function (t) {
                                                var i = t;
                                                return (
                                                    e.pipsText.map(function (
                                                        e
                                                    ) {
                                                        void 0 !== e.text &&
                                                            t === e.value &&
                                                            (i = e.text);
                                                    }),
                                                    i
                                                );
                                            },
                                        },
                                    },
                                    range: { min: e.rangeMin, max: e.rangeMax },
                                    orientation: e.orientation,
                                    direction: e.direction,
                                });
                                i.on("change", function () {
                                    e.value = Number(i.get());
                                }),
                                    (e.updateSliderProperties = function () {
                                        const t =
                                            document.getElementsByClassName(
                                                "noUi-pips"
                                            );
                                        t.length > 0 &&
                                            (t[t.length - 1].style.display =
                                                "none"),
                                            t.length > 1 &&
                                                (t[t.length - 2].style.display =
                                                    "none");
                                        var n = function (t) {
                                            return (
                                                e.rangeMin +
                                                Math.round(
                                                    (t - e.rangeMin) / e.step
                                                ) *
                                                    e.step
                                            );
                                        };
                                        i.updateOptions(
                                            {
                                                step: e.step,
                                                start:
                                                    e.rangeMin <= e.value &&
                                                    e.value <= e.rangeMax
                                                        ? n(e.value)
                                                        : n(
                                                              (e.rangeMin +
                                                                  e.rangeMax) /
                                                                  2
                                                          ),
                                                range: {
                                                    min: e.rangeMin,
                                                    max: e.rangeMax,
                                                },
                                            },
                                            !0
                                        ),
                                            i.pips({
                                                mode: e.pipsMode || "positions",
                                                values: e.pipsValues.map(
                                                    function (e) {
                                                        var t = e;
                                                        return (
                                                            void 0 !==
                                                                e.value &&
                                                                (t = e.value),
                                                            parseInt(t)
                                                        );
                                                    }
                                                ),
                                                density: e.pipsDensity || 5,
                                                format: {
                                                    to: function (t) {
                                                        var i = t;
                                                        return (
                                                            e.pipsText.map(
                                                                function (e) {
                                                                    void 0 !==
                                                                        e.text &&
                                                                        t ===
                                                                            e.value &&
                                                                        (i =
                                                                            e.text);
                                                                }
                                                            ),
                                                            i
                                                        );
                                                    },
                                                },
                                            });
                                    });
                                var n = function () {
                                    i.set(e.value);
                                };
                                e.isReadOnly && t.setAttribute("disabled", !0),
                                    n(),
                                    (e.noUiSlider = i),
                                    e.registerFunctionOnPropertiesValueChanged(
                                        [
                                            "pipsValues",
                                            "step",
                                            "rangeMin",
                                            "rangeMax",
                                            "pipsMode",
                                            "pipsDensity",
                                        ],
                                        e.updateSliderProperties
                                    ),
                                    (e.valueChangedCallback = n),
                                    (e.readOnlyChangedCallback = function () {
                                        e.isReadOnly
                                            ? t.setAttribute("disabled", !0)
                                            : t.removeAttribute("disabled");
                                    });
                            },
                            willUnmount: function (e, t) {
                                e.noUiSlider &&
                                    (e.noUiSlider.destroy(),
                                    (e.noUiSlider = null)),
                                    (e.readOnlyChangedCallback = null),
                                    (e.valueChangedCallback = null),
                                    e.updateSliderProperties &&
                                        (e.unRegisterFunctionOnPropertiesValueChanged(
                                            [
                                                "pipsValues",
                                                "step",
                                                "rangeMin",
                                                "rangeMax",
                                                "pipsMode",
                                                "pipsDensity",
                                            ],
                                            e.updateSliderProperties
                                        ),
                                        (e.updateSliderProperties = void 0));
                            },
                            pdfRender: function (e, t) {
                                if (t.question.getType() === n) {
                                    var i = t.module.SurveyHelper.createPoint(
                                        t.module.SurveyHelper.mergeRects.apply(
                                            null,
                                            t.bricks
                                        )
                                    );
                                    (i.xLeft += t.controller.unitWidth),
                                        (i.yTop +=
                                            t.controller.unitHeight *
                                            t.module.FlatQuestion
                                                .CONTENT_GAP_VERT_SCALE);
                                    var a =
                                            t.module.SurveyHelper.createTextFieldRect(
                                                i,
                                                t.controller
                                            ),
                                        o = new t.module.TextFieldBrick(
                                            t.question,
                                            t.controller,
                                            a,
                                            !0,
                                            t.question.id,
                                            t.question.value ||
                                                t.question.defaultValue ||
                                                "",
                                            "",
                                            t.question.isReadOnly,
                                            !1,
                                            "text"
                                        );
                                    t.bricks.push(o);
                                }
                            },
                        };
                        e.CustomWidgetCollection.Instance.addCustomWidget(
                            o,
                            "customtype"
                        );
                    }
                    "undefined" != typeof Survey && o(Survey);
                    const r = o;
                },
                496: (e, t, i) => {
                    "use strict";
                    function n(e) {
                        var t = {
                            settings: {
                                supportedTypes: [
                                    "radiogroup",
                                    "checkbox",
                                    "boolean",
                                ],
                                radiogroup: {
                                    rootClass: "pretty p-default p-round",
                                    inputType: "radio",
                                    states: [
                                        {
                                            stateClass: "state p-success",
                                            addOn: "",
                                        },
                                    ],
                                },
                                checkbox: {
                                    rootClass: "pretty p-default",
                                    inputType: "checkbox",
                                    states: [
                                        {
                                            stateClass: "state p-success",
                                            addOn: "",
                                        },
                                    ],
                                },
                                boolean: {
                                    rootClass:
                                        "pretty p-icon p-default p-has-indeterminate",
                                    inputType: "checkbox",
                                    states: [
                                        {
                                            stateClass: "state p-success",
                                            addOn: "",
                                        },
                                        {
                                            stateClass:
                                                "state p-success p-is-indeterminate",
                                            iconClass: "icon mdi mdi-minus",
                                            addOn: "",
                                        },
                                    ],
                                },
                            },
                            name: "pretty-checkbox",
                            activatedBy: "property",
                            widgetIsLoaded: function () {
                                return !0;
                            },
                            htmlTemplate: "<fieldset></fieldset>",
                            isFit: function (e) {
                                var i =
                                    -1 !==
                                    t.settings.supportedTypes.indexOf(
                                        e.getType()
                                    );
                                return "property" === t.activatedBy
                                    ? "prettycheckbox" === e.renderAs && i
                                    : "type" === t.activatedBy && i;
                            },
                            activatedByChanged: function (e) {
                                this.widgetIsLoaded() && (t.activatedBy = e);
                            },
                            isDefaultRender: !1,
                            afterRender: function (e, t) {
                                var i = {},
                                    n = e.getType(),
                                    a = this.settings[n],
                                    o = "checkbox" === n,
                                    r = "radiogroup" === n,
                                    s = "boolean" === n,
                                    d = !1,
                                    c = function (t) {
                                        d = !0;
                                        try {
                                            var i = arguments[0].target,
                                                n = i.value,
                                                a = i.checked;
                                            if (o) {
                                                var s =
                                                        e.createValueCopy() ||
                                                        [],
                                                    c = s.indexOf(n);
                                                a
                                                    ? -1 === c && s.push(n)
                                                    : -1 !== c &&
                                                      s.splice(c, 1),
                                                    (e.value = s);
                                            } else e.value = r ? n : a;
                                        } finally {
                                            d = !1;
                                        }
                                    },
                                    l =
                                        e.colCount > 0
                                            ? 100 / e.colCount + "%"
                                            : "";
                                (s
                                    ? [
                                          {
                                              locText: e.locTitle,
                                              value: !!e.value,
                                          },
                                      ]
                                    : e.visibleChoices
                                ).forEach(function (r, d) {
                                    var u = document.createElement("input");
                                    (u.type = a.inputType),
                                        (u.name = e.name + (o ? "" + d : "")),
                                        (u.onchange = c),
                                        (u.value = r.value),
                                        s &&
                                            null === e.value &&
                                            (u.indeterminate =
                                                "indeterminate" ===
                                                e.defaultValue);
                                    var f = document.createElement("div");
                                    (f.className = a.rootClass),
                                        f.appendChild(u),
                                        a.states.forEach(function (e) {
                                            var t =
                                                document.createElement("div");
                                            if (
                                                ((t.className = e.stateClass),
                                                e.iconClass)
                                            ) {
                                                var i =
                                                    document.createElement("i");
                                                (i.className = e.iconClass),
                                                    t.appendChild(i);
                                            }
                                            var n =
                                                document.createElement("label");
                                            r.locText.hasHtml
                                                ? (n.innerHTML = r.locText.html)
                                                : (n.textContent =
                                                      r.locText.renderedText),
                                                t.appendChild(n),
                                                f.appendChild(t),
                                                e.addOn &&
                                                    t.insertAdjacentHTML(
                                                        "afterbegin",
                                                        e.addOn
                                                    );
                                        });
                                    var g = document.createElement("div");
                                    (g.className =
                                        "sv_cw_pretty_checkbox_" + n),
                                        (g.style.display = "inline-block"),
                                        (g.style.width = l),
                                        g.appendChild(f),
                                        t.appendChild(g),
                                        (i[r.value] = u);
                                });
                                var u = function (e) {
                                        if (!d) {
                                            var t = e || [];
                                            (r || s) &&
                                                (t = [e && e.toString()]),
                                                Object.values(i).forEach(
                                                    function (e) {
                                                        -1 !==
                                                        t.indexOf(e.value)
                                                            ? e.setAttribute(
                                                                  "checked",
                                                                  void 0
                                                              )
                                                            : e.removeAttribute(
                                                                  "checked"
                                                              );
                                                    }
                                                );
                                        }
                                    },
                                    f = function () {
                                        Object.values(i).forEach(function (t) {
                                            e.isReadOnly
                                                ? t.setAttribute("disabled", !0)
                                                : t.removeAttribute("disabled");
                                        });
                                    };
                                (e.valueChangedCallback = u),
                                    (e.readOnlyChangedCallback = f),
                                    u(e.value),
                                    f();
                            },
                            willUnmount: function (e, t) {
                                (e.valueChangedCallback = void 0),
                                    (e.readOnlyChangedCallback = void 0);
                            },
                        };
                        e.CustomWidgetCollection.Instance.addCustomWidget(
                            t,
                            "property"
                        );
                    }
                    i.d(t, { default: () => a }),
                        "undefined" != typeof Survey && n(Survey);
                    const a = n;
                },
                234: (e, t, i) => {
                    "use strict";
                    function n(e, t) {
                        const n = "icon-tagbox",
                            a = "tagbox";
                        e.SvgRegistry &&
                            e.SvgRegistry.registerIconFromSvg(n, i(14), ""),
                            (t = t || window.$);
                        var o = {
                            name: a,
                            title: "Tag box",
                            iconName: n,
                            widgetIsLoaded: function () {
                                return "function" == typeof t && !!t.fn.select2;
                            },
                            defaultJSON: {
                                choices: ["Item 1", "Item 2", "Item 3"],
                            },
                            htmlTemplate:
                                "<div><select multiple='multiple' style='width: 100%;'></select><textarea></textarea></div>",
                            isFit: function (e) {
                                return e.getType() === a;
                            },
                            activatedByChanged: function (t) {
                                if (e.Serializer.findClass(a)) return;
                                e.Serializer.addClass(
                                    a,
                                    [
                                        {
                                            name: "hasOther:boolean",
                                            visible: !1,
                                        },
                                        {
                                            name: "hasSelectAll:boolean",
                                            visible: !1,
                                        },
                                        {
                                            name: "hasNone:boolean",
                                            visible: !1,
                                        },
                                        { name: "otherText", visible: !1 },
                                        { name: "selectAllText", visible: !1 },
                                        { name: "noneText", visible: !1 },
                                    ],
                                    null,
                                    "checkbox"
                                );
                                let i =
                                    e.ElementFactory.Instance
                                        .registerCustomQuestion;
                                i && i(a),
                                    e.Serializer.addProperty(a, {
                                        name: "select2Config",
                                        category: "general",
                                        default: null,
                                    }),
                                    e.Serializer.addProperty(a, {
                                        name: "placeholder",
                                        category: "general",
                                        default: "",
                                    }),
                                    e.Serializer.addProperty(a, {
                                        name: "allowAddNewTag:boolean",
                                        category: "general",
                                        default: !1,
                                    });
                            },
                            fixStyles: function (e) {
                                e.parentElement.querySelector(
                                    ".select2-search__field"
                                ).style.border = "none";
                            },
                            afterRender: function (e, i) {
                                var n = this,
                                    a = e.select2Config,
                                    o =
                                        a && "string" == typeof a
                                            ? JSON.parse(a)
                                            : a,
                                    r = t(i).is("select")
                                        ? t(i)
                                        : t(i).find("select");
                                n.willUnmount(e, i),
                                    o || (o = {}),
                                    (o.placeholder = e.placeholder),
                                    (o.tags = e.allowAddNewTag),
                                    e.allowAddNewTag &&
                                        (e.keepIncorrectValues = !0),
                                    (o.disabled = e.isReadOnly),
                                    (o.theme = "classic"),
                                    e.maxSelectedChoices &&
                                        (o.maximumSelectionLength =
                                            e.maxSelectedChoices),
                                    r.select2(o);
                                var s = t(i).find("textarea");
                                e.survey &&
                                    e.survey.css &&
                                    e.survey.css.checkbox &&
                                    s.addClass(e.survey.css.checkbox.other),
                                    (s.placeholder = e.otherPlaceHolder),
                                    s.bind("input propertychange", function () {
                                        e.comment = s.val();
                                    });
                                var d = function () {
                                    s.val(e.comment),
                                        e.isOtherSelected ? s.show() : s.hide();
                                };
                                n.fixStyles(i);
                                var c = function () {
                                        e.hasSelectAll && e.isAllSelected
                                            ? r
                                                  .val(
                                                      [
                                                          e.selectAllItemValue
                                                              .value,
                                                      ].concat(e.value)
                                                  )
                                                  .trigger("change")
                                            : r.val(e.value).trigger("change"),
                                            n.fixStyles(i),
                                            d();
                                    },
                                    l = function () {
                                        r.select2().empty(),
                                            o.ajax ||
                                                (o.data = e.visibleChoices.map(
                                                    function (e) {
                                                        return {
                                                            id: e.value,
                                                            text: e.text,
                                                        };
                                                    }
                                                )),
                                            r.select2(o),
                                            c();
                                    },
                                    u = function (t) {
                                        return (
                                            e.hasSelectAll &&
                                            t === e.selectAllItemValue.value
                                        );
                                    };
                                (e._propertyValueChangedFnSelect2 =
                                    function () {
                                        l();
                                    }),
                                    s.prop("disabled", e.isReadOnly),
                                    (e.readOnlyChangedCallback = function () {
                                        r.prop("disabled", e.isReadOnly),
                                            s.prop("disabled", e.isReadOnly);
                                    }),
                                    e.registerFunctionOnPropertyValueChanged(
                                        "visibleChoices",
                                        e._propertyValueChangedFnSelect2
                                    ),
                                    (e.valueChangedCallback = c),
                                    r.on("select2:select", function (t) {
                                        u(t.params.data.id)
                                            ? e.selectAll()
                                            : (e.value = (e.value || []).concat(
                                                  t.params.data.id
                                              )),
                                            d();
                                    }),
                                    r.on("select2:unselect", function (t) {
                                        const i = t.params.data.id;
                                        if (u(i)) e.clearValue();
                                        else {
                                            const t = [].concat(
                                                e.renderedValue
                                            );
                                            if (Array.isArray(t))
                                                for (
                                                    var n = 0;
                                                    n < t.length;
                                                    n++
                                                )
                                                    if (
                                                        t[n] == i ||
                                                        (t[n] &&
                                                            t[n].toString() ==
                                                                i)
                                                    ) {
                                                        t.splice(n, 1),
                                                            (e.renderedValue =
                                                                t);
                                                        break;
                                                    }
                                        }
                                        d();
                                    }),
                                    l();
                            },
                            willUnmount: function (e, i) {
                                if (e._propertyValueChangedFnSelect2) {
                                    var n = t(i).find("select");
                                    n.data("select2") &&
                                        n
                                            .off("select2:select")
                                            .select2("destroy"),
                                        (e.readOnlyChangedCallback = null),
                                        (e.valueChangedCallback = null),
                                        e.unRegisterFunctionOnPropertyValueChanged(
                                            "visibleChoices",
                                            e._propertyValueChangedFnSelect2
                                        ),
                                        (e._propertyValueChangedFnSelect2 =
                                            void 0);
                                }
                            },
                            pdfQuestionType: "checkbox",
                        };
                        e.CustomWidgetCollection.Instance.addCustomWidget(
                            o,
                            "customtype"
                        );
                    }
                    i.d(t, { default: () => a }),
                        "undefined" != typeof Survey &&
                            n(Survey, window.jQuery);
                    const a = n;
                },
                899: (e, t, i) => {
                    "use strict";
                    function n(e, t) {
                        t = t || window.$;
                        const i = "select2";
                        var n = {
                            activatedBy: "property",
                            name: i,
                            widgetIsLoaded: function () {
                                return "function" == typeof t && !!t.fn.select2;
                            },
                            isFit: function (e) {
                                return "property" == n.activatedBy
                                    ? e.renderAs === i &&
                                          "dropdown" === e.getType()
                                    : "type" == n.activatedBy
                                    ? "dropdown" === e.getType()
                                    : "customtype" == n.activatedBy &&
                                      e.getType() === i;
                            },
                            activatedByChanged: function (t) {
                                if (
                                    this.widgetIsLoaded() &&
                                    ((n.activatedBy = t),
                                    e.Serializer.removeProperty(
                                        "dropdown",
                                        "renderAs"
                                    ),
                                    "property" == t &&
                                        (e.Serializer.addProperty("dropdown", {
                                            name: "renderAs",
                                            category: "general",
                                            default: "default",
                                            choices: [i, "default"],
                                        }),
                                        e.Serializer.addProperty("dropdown", {
                                            dependsOn: "renderAs",
                                            category: "general",
                                            name: "select2Config",
                                            visibleIf: function (e) {
                                                return e.renderAs == i;
                                            },
                                        })),
                                    "customtype" == t)
                                ) {
                                    if (e.Serializer.findClass(i)) return;
                                    e.Serializer.addClass(
                                        i,
                                        [],
                                        null,
                                        "dropdown"
                                    );
                                    let t =
                                        e.ElementFactory.Instance
                                            .registerCustomQuestion;
                                    t && t(i),
                                        e.Serializer.addProperty(i, {
                                            name: "select2Config",
                                            category: "general",
                                            default: null,
                                        });
                                }
                            },
                            htmlTemplate:
                                "<div><select style='width: 100%;'></select><textarea></textarea></div>",
                            afterRender: function (e, i) {
                                var n = e.select2Config,
                                    a =
                                        n && "string" == typeof n
                                            ? JSON.parse(n)
                                            : n;
                                a || (a = {});
                                var o = t(i).is("select")
                                        ? t(i)
                                        : t(i).find("select"),
                                    r = t(i).find("textarea");
                                r.addClass(e.cssClasses.other),
                                    r.bind("input propertychange", function () {
                                        d || (e.comment = r.val());
                                    });
                                var s = function () {
                                        r.val(e.comment),
                                            e.isOtherSelected
                                                ? r.show()
                                                : r.hide();
                                    },
                                    d = !1,
                                    c = function () {
                                        if (!d) {
                                            if (
                                                ((d = !0),
                                                o.find(
                                                    'option[value="' +
                                                        (e.value || "") +
                                                        '"]'
                                                ).length)
                                            )
                                                o.val(e.value).trigger(
                                                    "change"
                                                );
                                            else if (
                                                null !== e.value &&
                                                void 0 !== e.value &&
                                                !e.isOtherSelected
                                            ) {
                                                var t = new Option(
                                                    e.value,
                                                    e.value,
                                                    !0,
                                                    !0
                                                );
                                                o.append(t).trigger("change");
                                            }
                                            s(), (d = !1);
                                        }
                                    },
                                    l = function () {
                                        if (
                                            (o.select2().empty(),
                                            !a.placeholder &&
                                                e.showOptionsCaption &&
                                                ((a.placeholder =
                                                    e.optionsCaption),
                                                (a.allowClear = !0)),
                                            a.theme || (a.theme = "classic"),
                                            (a.disabled = e.isReadOnly),
                                            a.ajax)
                                        )
                                            o.select2(a),
                                                (e.keepIncorrectValues = !0);
                                        else {
                                            var t = [];
                                            (a.placeholder ||
                                                e.showOptionsCaption) &&
                                                t.push({ id: "", text: "" }),
                                                (a.data = t.concat(
                                                    e.visibleChoices.map(
                                                        function (e) {
                                                            return {
                                                                id: e.value,
                                                                text: e.text,
                                                            };
                                                        }
                                                    )
                                                )),
                                                e.clearIncorrectValues(),
                                                o.select2(a);
                                        }
                                        i.querySelector(".select2") &&
                                            (i.querySelector(
                                                ".select2"
                                            ).style.width = "100%"),
                                            i.nextElementSibling &&
                                                (i.nextElementSibling.style.marginBottom =
                                                    "1px"),
                                            c();
                                    };
                                r.prop("disabled", e.isReadOnly),
                                    (e.readOnlyChangedCallback = function () {
                                        o.prop("disabled", e.isReadOnly),
                                            r.prop("disabled", e.isReadOnly);
                                    }),
                                    e.registerFunctionOnPropertyValueChanged(
                                        "visibleChoices",
                                        function () {
                                            l();
                                        }
                                    ),
                                    l(),
                                    o.on("change", function (t) {
                                        setTimeout(function () {
                                            (e.renderedValue = t.target.value),
                                                s();
                                        }, 1);
                                    }),
                                    o.on("select2:select", function (t) {
                                        setTimeout(function () {
                                            (e.renderedValue = t.target.value),
                                                s();
                                        }, 1);
                                    }),
                                    o.on("select2:opening", function (e) {
                                        t(this).data("unselecting") &&
                                            (t(this).removeData("unselecting"),
                                            e.preventDefault());
                                    }),
                                    o.on("select2:unselecting", function (i) {
                                        t(this).data("unselecting", !0),
                                            setTimeout(function () {
                                                (e.renderedValue = null), s();
                                            }, 1);
                                    }),
                                    (e.valueChangedCallback = c),
                                    c();
                            },
                            willUnmount: function (e, n) {
                                (e.readOnlyChangedCallback = null),
                                    (e.valueChangedCallback = null);
                                var a = t(n).find("select");
                                a.data(i) &&
                                    a
                                        .off("select2:select")
                                        .off("select2:unselecting")
                                        .off("select2:opening")
                                        .select2("destroy");
                            },
                        };
                        e.CustomWidgetCollection.Instance.addCustomWidget(n);
                    }
                    i.d(t, { default: () => a }),
                        "undefined" != typeof Survey &&
                            n(Survey, window.jQuery);
                    const a = n;
                },
                556: (e, t, i) => {
                    "use strict";
                    i.d(t, { default: () => r });
                    var n = i(976),
                        a = i.n(n);
                    function o(e) {
                        const t = "icon-sortablejs",
                            n = "sortablelist";
                        e.SvgRegistry &&
                            e.SvgRegistry.registerIconFromSvg(t, i(95), "");
                        var o = {
                            name: n,
                            title: "Sortable list",
                            iconName: t,
                            widgetIsLoaded: function () {
                                return void 0 !== a();
                            },
                            defaultJSON: {
                                choices: ["Item 1", "Item 2", "Item 3"],
                            },
                            rootStyle: "width:100%:",
                            areaStyle:
                                "border: 1px solid #1ab394; width:100%; min-height:50px; margin-top:10px;",
                            itemStyle:
                                "background-color:#1ab394;color:#fff;margin:5px;padding:10px;",
                            isFit: function (e) {
                                return e.getType() === n;
                            },
                            htmlTemplate: "<div></div>",
                            activatedByChanged: function (t) {
                                e.Serializer.addClass(
                                    n,
                                    [
                                        { name: "hasOther", visible: !1 },
                                        {
                                            name: "storeOthersAsComment",
                                            visible: !1,
                                        },
                                        { name: "hasNone", visible: !1 },
                                        { name: "renderAs", visible: !1 },
                                        { name: "checkboxClass", visible: !1 },
                                        { name: "hasSelectAll", visible: !1 },
                                        { name: "noneText", visible: !1 },
                                        { name: "selectAllText", visible: !1 },
                                    ],
                                    null,
                                    "checkbox"
                                );
                                let i =
                                    e.ElementFactory.Instance
                                        .registerCustomQuestion;
                                i && i(n),
                                    e.Serializer.addProperty(n, {
                                        name: "emptyText",
                                        default: "Move items here.",
                                        category: "general",
                                    }),
                                    e.Serializer.addProperty(n, {
                                        name: "useDefaultTheme:switch",
                                        default: !0,
                                        category: "general",
                                    }),
                                    e.Serializer.addProperty(n, {
                                        name: "maxAnswersCount:number",
                                        default: -1,
                                        category: "general",
                                    });
                            },
                            afterRender: function (t, i) {
                                var n,
                                    o,
                                    r = this;
                                t.useDefaultTheme ||
                                    ((r.rootStyle = ""),
                                    (r.itemStyle = ""),
                                    (r.areaStyle = "")),
                                    (i.style.cssText = r.rootStyle),
                                    (i.className = "sjs-sortablejs-root");
                                var s = document.createElement("div"),
                                    d = document.createElement("span"),
                                    c = document.createElement("div");
                                (s.style.cssText = r.areaStyle),
                                    (s.style.boxSizing = "border-box"),
                                    (s.className = "sjs-sortablejs-result"),
                                    (d.innerHTML = t.emptyText),
                                    s.appendChild(d),
                                    (c.style.cssText = r.areaStyle),
                                    (c.style.boxSizing = "border-box"),
                                    (c.className = "sjs-sortablejs-source"),
                                    i.appendChild(s),
                                    i.appendChild(c);
                                var l = function (e, t) {
                                        var i = t ? s : c,
                                            n = document.createElement("div");
                                        (n.className = "sjs-sortablejs-item"),
                                            (n.style.cssText = r.itemStyle),
                                            (n.innerText = e.text),
                                            (n.dataset.value = e.value),
                                            i.appendChild(n),
                                            e.onPropertyChanged.add(function (
                                                e,
                                                t
                                            ) {
                                                n.innerText = e.text;
                                            });
                                    },
                                    u = !1,
                                    f = function () {
                                        if (!u) {
                                            (s.innerHTML = ""),
                                                s.appendChild(d),
                                                (c.innerHTML = "");
                                            var i =
                                                    ((a = []),
                                                    t.visibleChoices.forEach(
                                                        function (e) {
                                                            (function (e) {
                                                                var i = t.value;
                                                                if (
                                                                    !Array.isArray(
                                                                        i
                                                                    )
                                                                )
                                                                    return !1;
                                                                for (
                                                                    var n = 0;
                                                                    n <
                                                                    i.length;
                                                                    n++
                                                                )
                                                                    if (
                                                                        i[n] ==
                                                                        e
                                                                    )
                                                                        return !0;
                                                                return !1;
                                                            })(e.value) ||
                                                                a.push(e);
                                                        }
                                                    ),
                                                    a),
                                                n = (function () {
                                                    var i = [],
                                                        n = t.value;
                                                    if (!Array.isArray(n))
                                                        return i;
                                                    for (
                                                        var a = 0;
                                                        a < n.length;
                                                        a++
                                                    ) {
                                                        var o =
                                                            e.ItemValue.getItemByValue(
                                                                t.visibleChoices,
                                                                n[a]
                                                            );
                                                        o && i.push(o);
                                                    }
                                                    return i;
                                                })();
                                            (d.style.display =
                                                n.length > 0 ? "none" : ""),
                                                n.forEach(function (e) {
                                                    l(e, !0);
                                                }),
                                                i.forEach(function (e) {
                                                    l(e, !1);
                                                });
                                        }
                                        var a;
                                    };
                                (o = t.resultEl =
                                    a().create(s, {
                                        animation: 150,
                                        disabled: t.isReadOnly,
                                        group: {
                                            name: t.name,
                                            put: function (e, i) {
                                                return (
                                                    e.options.group &&
                                                    i.options.group &&
                                                    e.options.group.name ===
                                                        i.options.group.name &&
                                                    (t.maxAnswersCount < 0 ||
                                                        e.el.children.length <=
                                                            t.maxAnswersCount)
                                                );
                                            },
                                        },
                                        onSort: function (e) {
                                            var i = [];
                                            if (1 === s.children.length)
                                                d.style.display = "";
                                            else {
                                                d.style.display = "none";
                                                for (
                                                    var n = 0;
                                                    n < s.children.length;
                                                    n++
                                                )
                                                    void 0 !==
                                                        s.children[n].dataset
                                                            .value &&
                                                        i.push(
                                                            s.children[n]
                                                                .dataset.value
                                                        );
                                            }
                                            (u = !0), (t.value = i), (u = !1);
                                        },
                                    })),
                                    (n = t.sourceEl =
                                        a().create(c, {
                                            animation: 150,
                                            disabled: t.isReadOnly,
                                            group: t.name,
                                        })),
                                    (t.valueChangedCallback = f),
                                    t.onPropertyChanged.add(function (e, i) {
                                        "emptyText" == i.name &&
                                            (d.innerHTML = t.emptyText);
                                    }),
                                    (t.readOnlyChangedCallback = function () {
                                        t.isReadOnly
                                            ? ((o.options.disabled = !0),
                                              (n.options.disabled = !0))
                                            : ((o.options.disabled = !1),
                                              (n.options.disabled = !1));
                                    }),
                                    t.registerFunctionOnPropertyValueChanged(
                                        "visibleChoices",
                                        f
                                    ),
                                    f();
                            },
                            willUnmount: function (e, t) {
                                e.resultEl.destroy(),
                                    e.sourceEl.destroy(),
                                    (e.readOnlyChangedCallback = null);
                            },
                            pdfQuestionType: "checkbox",
                        };
                        e.CustomWidgetCollection.Instance.addCustomWidget(
                            o,
                            "customtype"
                        );
                    }
                    "undefined" != typeof Survey && o(Survey);
                    const r = o;
                },
                801: (t) => {
                    "use strict";
                    t.exports = e;
                },
                851: (e) => {
                    "use strict";
                    e.exports = n;
                },
                976: (e) => {
                    "use strict";
                    e.exports = i;
                },
                658: (e) => {
                    "use strict";
                    e.exports = t;
                },
            },
            o = {};
        function r(e) {
            var t = o[e];
            if (void 0 !== t) return t.exports;
            var i = (o[e] = { exports: {} });
            return a[e](i, i.exports, r), i.exports;
        }
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, { a: t }), t;
        }),
            (r.d = (e, t) => {
                for (var i in t)
                    r.o(t, i) &&
                        !r.o(e, i) &&
                        Object.defineProperty(e, i, {
                            enumerable: !0,
                            get: t[i],
                        });
            }),
            (r.g = (function () {
                if ("object" == typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")();
                } catch (e) {
                    if ("object" == typeof window) return window;
                }
            })()),
            (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
            (r.r = (e) => {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
            });
        var s = {};
        return (
            (() => {
                "use strict";
                r.r(s),
                    r.d(s, {
                        autocomplete: () => u.default,
                        bootstrapdatepicker: () => v,
                        bootstrapslider: () => g.default,
                        ckeditor: () => l.default,
                        emotionsratings: () => m.default,
                        icheck: () => e.default,
                        inputmask: () => i.default,
                        jquerybarrating: () => n.default,
                        jqueryuidatepicker: () => a.default,
                        microphone: () => p.default,
                        nouislider: () => o.default,
                        prettycheckbox: () => f.default,
                        select2: () => t.default,
                        select2tagbox: () => d.default,
                        sortablejs: () => c.default,
                    });
                var e = r(332),
                    t = r(899),
                    i = r(809),
                    n = r(927),
                    a = r(284),
                    o = r(821),
                    d = r(234),
                    c = r(556),
                    l = r(814),
                    u = r(591),
                    f = r(496),
                    g = r(327),
                    p = r(529),
                    m = r(606);
                function h(e, t) {
                    const i = "icon-datepicker",
                        n = "bootstrapdatepicker";
                    e.SvgRegistry &&
                        e.SvgRegistry.registerIconFromSvg(i, r(599), ""),
                        (t = t || window.$) &&
                            !t.fn.bootstrapDP &&
                            t.fn.datepicker &&
                            t.fn.datepicker.noConflict &&
                            ((t.fn.bootstrapDP = t.fn.datepicker.noConflict()),
                            t.fn.datepicker ||
                                (t.fn.datepicker = t.fn.bootstrapDP));
                    var a = {
                        name: n,
                        title: "Date picker",
                        iconName: i,
                        widgetIsLoaded: function () {
                            return !!t && !!t.fn.bootstrapDP;
                        },
                        isFit: function (e) {
                            return e.getType() === n;
                        },
                        htmlTemplate:
                            "<input class='form-control widget-datepicker' type='text' style='width: 100%;'>",
                        activatedByChanged: function (t) {
                            e.Serializer.addClass(
                                n,
                                [
                                    { name: "inputType", visible: !1 },
                                    { name: "inputFormat", visible: !1 },
                                    { name: "inputMask", visible: !1 },
                                ],
                                null,
                                "text"
                            );
                            let i =
                                e.ElementFactory.Instance
                                    .registerCustomQuestion;
                            i && i(n),
                                e.Serializer.addProperties(n, [
                                    {
                                        name: "dateFormat",
                                        category: "general",
                                        default: "mm/dd/yyyy",
                                    },
                                    {
                                        name: "startDate",
                                        category: "general",
                                        default: "",
                                    },
                                    {
                                        name: "endDate",
                                        category: "general",
                                        default: "",
                                    },
                                    {
                                        name: "todayHighlight:boolean",
                                        category: "general",
                                        default: !0,
                                    },
                                    {
                                        name: "weekStart:number",
                                        category: "general",
                                        default: 0,
                                    },
                                    {
                                        name: "clearBtn:boolean",
                                        category: "general",
                                        default: !1,
                                    },
                                    {
                                        name: "autoClose:boolean",
                                        category: "general",
                                        default: !0,
                                    },
                                    {
                                        name: "daysOfWeekDisabled:string",
                                        category: "general",
                                        default: "",
                                    },
                                    {
                                        name: "daysOfWeekHighlighted:string",
                                        category: "general",
                                        default: "",
                                    },
                                    {
                                        name: "disableTouchKeyboard:boolean",
                                        category: "general",
                                        default: !0,
                                    },
                                ]);
                        },
                        afterRender: function (e, i) {
                            var n = t(i).is(".widget-datepicker")
                                ? t(i)
                                : t(i).find(".widget-datepicker");
                            const a = {
                                enableOnReadonly: !1,
                                format: e.dateFormat,
                                todayHighlight: e.todayHighlight,
                                weekStart: e.weekStart,
                                clearBtn: e.clearBtn,
                                autoclose: e.autoClose,
                                zIndexOffset: 20,
                                daysOfWeekDisabled: e.daysOfWeekDisabled,
                                daysOfWeekHighlighted: e.daysOfWeekHighlighted,
                                disableTouchKeyboard: e.disableTouchKeyboard,
                            };
                            (e.startDate || e.renderedMin) &&
                                (a.startDate = e.startDate
                                    ? e.startDate
                                    : e.renderedMin);
                            var o = e.renderedMax;
                            o &&
                                new Date(o).getFullYear() >= 2999 &&
                                (o = void 0),
                                (e.endDate || o) &&
                                    (a.endDate = e.endDate ? e.endDate : o);
                            const r = n
                                .bootstrapDP(a)
                                .on("change", function (t) {
                                    var i = r.bootstrapDP("getUTCDate"),
                                        n = i && i.toUTCString();
                                    e.value != n && (e.value = n);
                                });
                            (e.valueChangedCallback = function () {
                                r.bootstrapDP(
                                    "setUTCDate",
                                    e.value ? new Date(e.value) : ""
                                );
                            }),
                                e.valueChangedCallback(),
                                (e.readOnlyChangedCallback = function () {
                                    e.isReadOnly
                                        ? n.prop("readonly", !0)
                                        : n.removeAttr("readonly");
                                }),
                                e.readOnlyChangedCallback();
                        },
                        willUnmount: function (e, i) {
                            (t(i).is(".widget-datepicker")
                                ? t(i)
                                : t(i).find(".widget-datepicker")
                            ).bootstrapDP("destroy"),
                                (e.readOnlyChangedCallback = void 0),
                                (e.valueChangedCallback = void 0);
                        },
                        pdfQuestionType: "text",
                    };
                    e.CustomWidgetCollection.Instance.addCustomWidget(
                        a,
                        "customtype"
                    );
                }
                "undefined" != typeof Survey && h(Survey, window.$);
                const v = h;
            })(),
            s
        );
    })()
);
//# sourceMappingURL=surveyjs-widgets.min.js.map
