/*!
 * surveyjs - Survey JavaScript library v1.9.88
 * Copyright (c) 2015-2023 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t(require("survey-core"), require("knockout")))
        : "function" == typeof define && define.amd
        ? define("survey-knockout-ui", ["survey-core", "knockout"], t)
        : "object" == typeof exports
        ? (exports["survey-knockout-ui"] = t(
              require("survey-core"),
              require("knockout")
          ))
        : (e.SurveyKnockout = t(e.Survey, e.ko));
})(this, function (e, t) {
    return (function (e) {
        var t = {};
        function n(o) {
            if (t[o]) return t[o].exports;
            var i = (t[o] = { i: o, l: !1, exports: {} });
            return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, o) {
                n.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: o });
            }),
            (n.r = function (e) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var o = Object.create(null);
                if (
                    (n.r(o),
                    Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: e,
                    }),
                    2 & t && "string" != typeof e)
                )
                    for (var i in e)
                        n.d(
                            o,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return o;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 90))
        );
    })([
        function (t, n) {
            t.exports = e;
        },
        function (e, n) {
            e.exports = t;
        },
        function (e, t, n) {
            e.exports =
                n(3) +
                "\n" +
                n(4) +
                "\n" +
                n(5) +
                "\n" +
                n(6) +
                "\n" +
                n(7) +
                "\n" +
                n(8) +
                "\n" +
                n(9) +
                "\n" +
                n(10) +
                "\n" +
                n(11) +
                "\n" +
                n(12) +
                "\n" +
                n(13) +
                "\n" +
                n(14) +
                "\n" +
                n(15) +
                "\n" +
                n(16) +
                "\n" +
                n(17) +
                "\n" +
                n(18) +
                "\n" +
                n(19) +
                "\n" +
                n(20) +
                "\n" +
                n(21) +
                "\n" +
                n(22) +
                "\n" +
                n(23) +
                "\n" +
                n(24) +
                "\n" +
                n(25) +
                "\n" +
                n(26) +
                "\n" +
                n(27) +
                "\n" +
                n(28) +
                "\n" +
                n(29) +
                "\n" +
                n(30) +
                "\n" +
                n(31) +
                "\n" +
                n(32) +
                "\n" +
                n(33) +
                "\n" +
                n(34) +
                "\n" +
                n(35) +
                "\n" +
                n(36) +
                "\n" +
                n(37) +
                "\n" +
                n(38) +
                "\n" +
                n(39) +
                "\n" +
                n(40) +
                "\n" +
                n(41) +
                "\n" +
                n(42);
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-comment">\n  \x3c!--ko if: !question.isReadOnlyRenderDiv() --\x3e\n<textarea data-bind="attr: { id: question.commentId, maxLength: question.getOthersMaxLength(), \'aria-required\': question.ariaRequired, \'aria-label\': question.ariaLabel, placeholder: question.commentPlaceholder }, \n        event: { input: function(s, e) { $data.question.onCommentInput(s, e); } }, \n        value: $data.question.comment, \n        visible: $data.visible,\n        disable: $data.question.isInputReadOnly,\n        style: { resize: question.resizeStyle },\n        css: $data.question.koCss().other"></textarea>\n\x3c!--/ko--\x3e\n\n\x3c!--ko if: question.isReadOnlyRenderDiv() --\x3e\n<div data-bind="text: question.comment"></div>\n\x3c!--/ko--\x3e\n</script>\n<script type="text/html" id="survey-other">\n  \x3c!--ko if: !question.isReadOnlyRenderDiv() --\x3e\n<textarea data-bind="attr: { id: question.otherId, maxLength: question.getOthersMaxLength(), \'aria-required\': question.ariaRequired, \'aria-label\': question.ariaLabel, placeholder: question.otherPlaceholder }, \n        event: { input: function(s, e) { $data.question.onOtherValueInput(s, e); } }, \n        value: $data.question.otherValue, \n        visible: $data.visible,\n        disable: $data.question.isInputReadOnly,\n        style: { resize: question.resizeStyle },\n        css: $data.question.koCss().other"></textarea>\n\x3c!--/ko--\x3e\n\n\x3c!--ko if: question.isReadOnlyRenderDiv() --\x3e\n<div data-bind="text: question.otherValue"></div>\n\x3c!--/ko--\x3e\n</script>';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-flowpanel">\n  <div data-bind="style: { flexBasis: renderWidth, flexGrow: 1, flexShrink: 1, width: renderWidth, minWidth: $data.minWidth, maxWidth: $data.maxWidth }, attr: { id: id }, css: cssClasses.panel.container">\n      <h4 data-bind="visible: (processedTitle.length > 0), css: question.cssTitle">\n          \x3c!-- ko template: { name: \'survey-string\', data: locTitle } --\x3e\n          \x3c!-- /ko --\x3e\n      </h4>\n      <div data-bind="css: cssClasses.panel.description">\n          \x3c!-- ko template: { name: \'survey-string\', data: locDescription } --\x3e\n          \x3c!-- /ko --\x3e\n      </div>\n      <div data-bind="style: { paddingLeft: innerPaddingLeft }"></div>\n      <f-panel params="question: question" data-bind="attr: { contenteditable : question.isDesignMode, placeHolder: question.placeHolder }"></f-panel>\n  </div>\n</script>\n<script type="text/html" id="survey-flowpanel-question">\n  \x3c!-- ko with: $parent.question.getQuestionByName($data) --\x3e\n    \x3c!-- ko template: { name: koElementType(), data: $data, as: \'question\', afterRender: parent.koElementAfterRender } --\x3e\x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n</script>\n';
        },
        function (e, t) {
            e.exports =
                "<script type=\"text/html\" id=\"survey-header\">\n  \x3c!-- ko if: renderedHasHeader --\x3e\n<div data-bind=\"css: css.header\">\n  \x3c!-- ko if: isLogoBefore --\x3e\n  \x3c!-- ko component: { name: getElementWrapperComponentName($data, 'logo-image'), params: getElementWrapperComponentData($data, 'logo-image') } --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n\n  \x3c!-- ko if: renderedHasTitle --\x3e\n  <div data-bind=\"css: css.headerText, style: { maxWidth: titleMaxWidth }\">\n    \x3c!-- ko component: { name: 'survey-element-title', params: {element: $data } } --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: renderedHasDescription --\x3e\n    <h5 data-bind=\"css: css.description\">\n      \x3c!-- ko template: { name: 'survey-string', data: locDescription } --\x3e\n      \x3c!-- /ko --\x3e\n    </h5>\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- /ko --\x3e\n\n  \x3c!-- ko if: isLogoAfter --\x3e\n  \x3c!-- ko component: { name: getElementWrapperComponentName($data, 'logo-image'), params: getElementWrapperComponentData($data, 'logo-image') } --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  <div data-bind=\"css: css.headerClose\"></div>\n</div>\n\x3c!-- /ko --\x3e\n</script>";
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-content">\n    \x3c!-- ko template: { name: "survey-content-template", afterRender: $data.implementor.koEventAfterRender } --\x3e\n    \x3c!-- /ko --\x3e\n</script>\n\n<script type="text/html" id="survey-content-template">\n  <div data-bind="css: rootCss, style: { backgroundImage: renderBackgroundImage, backgroundSize: backgroundImageFit }">\n      <form onsubmit="return false;" data-bind="style: { backgroundColor: renderBackgroundOpacity }">\n          <div class="sv_custom_header" data-bind="visible: !hasLogo"></div>\n          <div data-bind="css: containerCss">\n              \x3c!-- ko template: { name: koTitleTemplate, afterRender: koAfterRenderHeader } --\x3e\n              \x3c!-- /ko --\x3e\n              \x3c!-- ko if: isShowingPage --\x3e\n              \x3c!-- ko component: { name: "sv-components-container", params: { survey: $data, container: "header", needRenderWrapper: false } } --\x3e\x3c!-- /ko --\x3e\n              <div data-bind="css: $data.bodyContainerCss">\n                  \x3c!-- ko component: { name: "sv-components-container", params: { survey: $data, container: "left" } } --\x3e\x3c!-- /ko --\x3e\n                  <div data-bind="css: bodyCss, style:{maxWidth: renderedWidth}, attr: { id: activePage ? activePage.id : \'\' }">\n                        \x3c!-- ko component: { name: "sv-components-container", params: { survey: $data, container: "contentTop" } } --\x3e\x3c!-- /ko --\x3e\n                        \x3c!-- ko if: activePage --\x3e\n                        \x3c!-- ko template: { name: \'survey-page\', data: activePage, afterRender: koAfterRenderPage } --\x3e\n                        \x3c!-- /ko --\x3e\n                        \x3c!-- ko if: activePage.rows.length == 0 && $data.emptyPageTemplate --\x3e\n                        \x3c!-- ko template: { name: emptyPageTemplate, data: $data.emptyPageTemplateData || $data } --\x3e\n                        \x3c!-- /ko --\x3e\n                        \x3c!-- /ko --\x3e\n                        \x3c!-- /ko --\x3e\n                        \x3c!-- ko component: { name: "sv-components-container", params: { survey: $data, container: "contentBottom" } } --\x3e\x3c!-- /ko --\x3e\n                  </div>\n                  \x3c!-- ko component: { name: "sv-components-container", params: { survey: $data, container: "right" } } --\x3e\x3c!-- /ko --\x3e\n              </div>\n              \x3c!-- ko component: { name: "sv-components-container", params: { survey: $data, container: "footer", needRenderWrapper: false } } --\x3e\x3c!-- /ko --\x3e\n              \x3c!-- /ko --\x3e\n              \x3c!-- ko if: state == "completed" && showCompletedPage --\x3e\n              <div data-bind="html: processedCompletedHtml, css: completedCss"></div>\n              \x3c!-- /ko --\x3e\n              \x3c!-- ko if: state == "completedbefore" --\x3e\n              <div data-bind="html: processedCompletedBeforeHtml, css: css.body"></div>\n              \x3c!-- /ko --\x3e\n              \x3c!-- ko if: state == "loading" --\x3e\n              <div data-bind="html: processedLoadingHtml, css: css.body"></div>\n              \x3c!-- /ko --\x3e\n              \x3c!-- ko if: state == "empty" --\x3e\n              <div data-bind="text:emptySurveyText, css: css.bodyEmpty"></div>\n              \x3c!-- /ko --\x3e\n          </div>\n      </form>\n      \x3c!-- ko if: showBrandInfo --\x3e\n      <sv-brand-info></sv-brand-info>\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko component: { name: \'sv-notifier\', params: { notifier: notifier } } --\x3e\n      \x3c!-- /ko --\x3e\n  </div>\n</script>';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-page">\n  <div data-bind="css: cssRoot">\n    \x3c!-- ko component: { name: \'survey-element-title\', params: {element: $data } } --\x3e\x3c!-- /ko --\x3e\n    \x3c!-- ko if: _showDescription--\x3e\n    <div\n      data-bind="visible: data.showPageTitles, css: cssClasses.page.description"\n    >\n      \x3c!-- ko template: { name: \'survey-string\', data: locDescription } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko template: { name: \'survey-rows\', data: $data} --\x3e\n    \x3c!-- /ko --\x3e\n  </div>\n</script>\n';
        },
        function (e, t) {
            e.exports =
                "<script type=\"text/html\" id=\"survey-panel\">\n  \x3c!-- ko if: $data.isVisible --\x3e\n  <div\n    data-bind=\"attr: { id: id }, css: $data.getContainerCss(), event: {focusin: focusIn}\"\n  >\n    \x3c!-- ko if: showErrorsAbovePanel--\x3e\n      \x3c!-- ko template: { name: 'survey-question-errors', data: $data } --\x3e\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: hasDescription || hasTitle  --\x3e\n        \x3c!--ko template: { name: 'survey-question-title', data: $data  } --\x3e\x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko ifnot: showErrorsAbovePanel--\x3e\n      \x3c!-- ko template: { name: 'survey-question-errors', data: $data } --\x3e\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: state != \"collapsed\" --\x3e\n    <div\n      data-bind=\"style: { paddingLeft: innerPaddingLeft }, css: cssClasses.panel.content, attr: {id:contentId}\"\n    >\n      \x3c!-- ko template: { name: 'survey-rows', data: $data} --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko component: { name: 'sv-action-bar', params: { model: getFooterToolbar() } } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- /ko --\x3e\n</script>\n";
        },
        function (e, t) {
            e.exports =
                "<script type=\"text/html\" id=\"survey-rows\">\n  \x3c!-- ko foreach: { data: rows, as: 'row'} --\x3e\n    \x3c!-- ko if: row.visible --\x3e\n      \x3c!-- ko component: { name: $parent.survey.getRowWrapperComponentName(row), params: { componentData:  $parent.survey.getRowWrapperComponentData(row), templateData: { name: 'survey-row', data: row } } } --\x3e\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n</script>";
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-row">\n  <div data-bind="css: row.getRowCss()">\n    \x3c!-- ko template: { name: "survey-row-content", afterRender: row.rowAfterRender } --\x3e\n    \x3c!-- /ko --\x3e\n  </div>\n</script>\n<script type="text/html" id="survey-row-content">\n\x3c!-- ko foreach: { data: row.visibleElements, as: \'question\', afterRender: row.koAfterRender } --\x3e\n  <div data-bind="css: question.koCss().questionWrapper, style: $data.rootStyle, event: {focusin: question.focusIn }">\n  \x3c!-- ko if: row.isNeedRender --\x3e\n    \x3c!-- ko component: { name: row.panel.survey.getElementWrapperComponentName(question), params: { componentData:  row.panel.survey.getElementWrapperComponentData(question), templateData: { name: question.koElementType, data: question, afterRender: $parent.koElementAfterRender } } } --\x3e\n    \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: !row.isNeedRender && question.skeletonComponentName --\x3e\n    \x3c!-- ko component: { name: question.skeletonComponentName, params: { element: question } } --\x3e\n    \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  </div>\n\x3c!-- /ko --\x3e\n</script>';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-string">\n    \x3c!-- ko component: { name: renderAs, params: { locString: renderAsData } } --\x3e\n    \x3c!-- /ko --\x3e\n</script>\n';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-timerpanel">\n    \x3c!-- ko if: isRunning && showTimerAsClock --\x3e\n    <div data-bind="css: rootCss">\n        \x3c!-- ko if: showProgress --\x3e\n        <svg data-bind="css: getProgressCss(), style: { strokeDasharray: 440, strokeDashoffset: -440 * progress }">\n            <use data-bind="attr:{\'xlink:href\': \'#icon-timercircle\'}" xlink:href=\'\'></use>\n        </svg>\n        \x3c!-- /ko --\x3e\n        <div data-bind="css: textContainerCss">\n            <span data-bind="css: majorTextCss, text: clockMajorText"></span>\n            \x3c!-- ko if: !!minorTextCss --\x3e\n            <span data-bind="css: minorTextCss, text: clockMinorText"></span>\n            \x3c!-- /ko --\x3e\n        </div>\n    </div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: isRunning && !showTimerAsClock --\x3e\n    <div data-bind="css: survey.getCss().timerRoot, text: text"></div>\n    \x3c!--/ko --\x3e\n</script>\n';
        },
        function (e, t) {
            e.exports =
                "<script type=\"text/html\" id=\"survey-question\">\n<div data-bind=\"css: question.koRootCss(), style: question.getRootStyle(), attr: { id: question.id, 'data-name': question.name, role: question.ariaRole, 'aria-required': question.ariaRequired, 'aria-invalid': question.ariaInvalid, 'aria-labelledby': question.ariaLabelledBy}\">\n  \x3c!-- ko if: question.showErrorsAboveQuestion --\x3e\n    \x3c!-- ko template: { name: 'survey-question-errors', data: question } --\x3e\n    \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: question.hasTitleOnLeftTop --\x3e\n    \x3c!--ko template: { name: 'survey-question-title', data: question  } --\x3e\n    \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko component: { name: question.survey.getQuestionContentWrapperComponentName(question), params: { componentData:  question.survey.getElementWrapperComponentData(question), templateData: { name: 'survey-question-content', data: question } } } --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: question.showErrorsBelowQuestion --\x3e\n    \x3c!-- ko template: { name: 'survey-question-errors', data: question } --\x3e\n    \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  </script>\n";
        },
        function (e, t) {
            e.exports =
                "<script type=\"text/html\" id=\"survey-question-content\">\n<div data-bind=\"visible: !question.isCollapsed, css: question.cssContent\" role=\"presentation\">\n    \x3c!-- ko if: question.showErrorOnTop --\x3e\n      \x3c!-- ko template: { name: 'survey-question-errors', data: question } --\x3e\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: question.isDefaultRendering() --\x3e\n      \x3c!-- ko template: { name: question.koTemplateName(), data: question, afterRender: question.koQuestionAfterRender } --\x3e\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko ifnot: question.isDefaultRendering() --\x3e\n      \x3c!-- ko component: { name: getComponentName(), params: { question: question } } --\x3e\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: question.hasComment --\x3e\n    <div data-bind=\"css: question.getCommentAreaCss()\">\n      <div>\n        \x3c!-- ko template: { name: 'survey-string', data: question.locCommentText } --\x3e\n        \x3c!-- /ko --\x3e\n      </div>\n      \x3c!-- ko template: { name: 'survey-comment',  data: {'question': question, 'visible': true } } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: question.showErrorOnBottom --\x3e\n      \x3c!-- ko template: { name: 'survey-question-errors', data: question } --\x3e\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: question.isErrorsModeTooltip --\x3e\n      \x3c!-- ko component: { name: 'sv-tooltip-error', params: {question: question} } --\x3e\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: question.hasDescriptionUnderInput --\x3e\n    <div data-bind=\"css: koCss().descriptionUnderInput\">\n      \x3c!-- ko template: { name: 'survey-string', data: locDescription } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: question.hasTitleOnBottom --\x3e\n      \x3c!--ko template: { name: 'survey-question-title', data: question  } --\x3e\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n  </div>\n</script>";
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-title">\n  <div data-bind="css: question.cssHeader, click: question.clickTitleFunction">\n    \x3c!-- ko component: { name: \'survey-element-title\', params: { element: $data } } --\x3e\x3c!-- /ko --\x3e\n    \x3c!-- ko if: $data.hasDescriptionUnderTitle --\x3e\n    <div data-bind="css: $data.cssDescription, visible: $data.isDescriptionVisible">\n      \x3c!-- ko template: { name: \'survey-string\', data: $data.locDescription } --\x3e\x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: !!$data.additionalTitleToolbar --\x3e\n    \x3c!-- ko component: { name: \'sv-action-bar\', params: { model: $data.additionalTitleToolbar } } --\x3e\x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n  </div>\n</script>';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-boolean">\n  <div data-bind="css: question.koCss().root, event: { keydown: question.onKeyDown}">\n    <label data-bind="css: question.getItemCss()">\n      <input\n        type="checkbox"\n        data-bind="value: question.booleanValue, css: question.koCss().control, attr: {name: question.name, id: question.inputId, \'aria-required\': question.ariaRequired, \'aria-label\': question.ariaLabel, \'aria-invalid\': question.ariaInvalid, \'aria-describedby\': question.ariaDescribedBy}, checked: question.booleanValue, surveyProp: {indeterminate: question.isIndeterminate}, enable: !question.isInputReadOnly"\n      />\n      <div data-bind="css: question.koCss().sliderGhost, click: onFalseLabelClick">\n        <span data-bind="css: question.getLabelCss(false)">\n          \x3c!-- ko template: { name: \'survey-string\', data: locLabelFalse } --\x3e\x3c!-- /ko --\x3e\n        </span>\n      </div>\n      <div data-bind="css: question.koCss().switch, click: onSwitchClick">\n        <span data-bind="css: question.koCss().slider">\n            \x3c!-- ko if: question.koCss().sliderText && question.isDeterminated --\x3e\n            <span data-bind="css: question.koCss().sliderText">\n              \x3c!-- ko template: { name: \'survey-string\', data: question.getCheckedLabel() } --\x3e\x3c!-- /ko --\x3e\n            </span>\n            \x3c!-- /ko --\x3e\n        </span>\n      </div>\n      <div data-bind="css: question.koCss().sliderGhost, click: onTrueLabelClick">\n        <span data-bind="css: question.getLabelCss(true)">\n          \x3c!-- ko template: { name: \'survey-string\', data: locLabelTrue } --\x3e\x3c!-- /ko --\x3e\n        </span>\n      </div>\n    </label>\n  </div>\n</script>';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-checkbox">\n  <fieldset data-bind="css: question.getSelectBaseRootCss()" role="presentation">\n      <legend role="presentation" class="sv-hidden"></legend>\n      \x3c!-- ko if: question.hasHeadItems  --\x3e\n        \x3c!-- ko foreach: { data: question.headItems, as: \'item\', afterRender: question.koAfterRender }  --\x3e\n          \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } --\x3e\n          \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko ifnot: question.hasColumns  --\x3e\n        \x3c!-- ko if: question.blockedRow --\x3e\n        <div data-bind="css: question.koCss().rootRow">\n          \x3c!-- ko foreach: { data: question.dataChoices, as: \'item\', afterRender: question.koAfterRender }  --\x3e\n          \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } --\x3e\n          \x3c!-- /ko --\x3e\n          \x3c!-- /ko --\x3e\n        </div>\n        \x3c!-- /ko --\x3e\n        \x3c!-- ko ifnot: question.blockedRow --\x3e\n        \x3c!-- ko foreach: { data: question.bodyItems, as: \'item\', afterRender: question.koAfterRender }  --\x3e\n          \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } --\x3e\n          \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: question.hasColumns  --\x3e\n        <div data-bind="css: question.koCss().rootMultiColumn">\n        \x3c!-- ko foreach: question.columns --\x3e\n            <div data-bind="css: question.getColumnClass()" role="presentation">\n            \x3c!-- ko foreach: { data: $data, as: \'item\', afterRender: question.koAfterRender }  --\x3e\n              \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } --\x3e\n              \x3c!-- /ko --\x3e\n            \x3c!-- /ko --\x3e\n            </div>\n        \x3c!-- /ko --\x3e\n        </div>\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: question.hasFootItems  --\x3e\n        \x3c!-- ko foreach: { data: question.footItems, as: \'item\', afterRender: question.koAfterRender }  --\x3e\n          \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } --\x3e\n          \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: question.hasOther && question.isOtherSelected --\x3e\n      <div data-bind="css: question.getCommentAreaCss(true), template: { name: \'survey-other\', data: {\'question\': question, \'visible\': question.isOtherSelected } }"></div>\n      \x3c!-- /ko --\x3e\n    </fieldset>\n</script>\n<script type="text/html" id="survey-checkbox-item">\n  <div role="presentation" data-bind="css: question.getItemClass(item)">\n      <label data-bind="css: question.getLabelClass(item), attr: { \'aria-label\': question.getAriaItemLabel(item) }">\n          \x3c!-- ko if: item == question.selectAllItem --\x3e\n          <input role="option" type="checkbox" value="" data-bind="attr: {name: question.name, id: question.getItemId(item), \'aria-describedby\': question.ariaDescribedBy }, checked: question.koAllSelected, enable: question.getItemEnabled(item), css: question.koCss().itemControl"/>\n          \x3c!-- /ko --\x3e\n          \x3c!-- ko if: item != question.selectAllItem --\x3e\n          <input role="option" type="checkbox" data-bind="attr: {name: question.name, id: question.getItemId(item), \'aria-describedby\': question.ariaDescribedBy }, checkedValue: item.value, checked: question.koValue, enable: question.getItemEnabled(item), css: question.koCss().itemControl"/>\n          \x3c!-- /ko --\x3e\n              \x3c!-- ko if: question.koCss().materialDecorator --\x3e\n              <span data-bind="css: question.koCss().materialDecorator">\n                \x3c!-- ko if: question.itemSvgIcon --\x3e\n                <svg data-bind="css:question.koCss().itemDecorator">\n                  <use data-bind="attr:{\'xlink:href\':question.itemSvgIcon}" xlink:href=\'\'></use>\n                </svg>\n                \x3c!-- /ko --\x3e\n              </span>\n              \x3c!-- /ko --\x3e\n          \x3c!-- ko if: !item.hideCaption --\x3e\n          <span data-bind="css: question.koCss().controlLabel">\n          \x3c!-- ko template: { name: \'survey-string\', data: item.locText } --\x3e\n          \x3c!-- /ko --\x3e\n          </span>\n          \x3c!-- /ko --\x3e\n      </label>\n  </div>\n</script>\n';
        },
        function (e, t) {
            e.exports =
                "<script type=\"text/html\" id=\"survey-question-tagbox\">\n  <div data-bind=\"css: question.renderCssRoot\">\n    \x3c!-- ko component: { name: 'sv-tagbox', params: { question: question } } --\x3e\n    \x3c!-- /ko --\x3e\n  \x3c!-- ko if: question.isOtherSelected --\x3e\n  <div\n    data-bind=\"css: question.getCommentAreaCss(true), template: { name: 'survey-other', data: {'question': question, 'visible': question.isOtherSelected } }, style: {display: question.isFlowLayout ? 'inline': ''}\">\n  </div>\n  \x3c!-- /ko --\x3e\n  </div>\n</script>";
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-ranking">\n  <div data-bind="css: question.rootClass">\n    \x3c!-- ko foreach: { data: question.rankingChoices, as: \'item\', afterRender: question.koAfterRender } --\x3e\n      \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: \'survey-ranking-item\', data: item } } } --\x3e\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n  </div>\n</script>\n\n<script type="text/html" id="survey-ranking-item">\n  <div\n    data-bind="event: { keydown: question.koHandleKeydown, pointerdown: question.koHandlePointerDown}, css: question.getItemClass($data), attr: {tabindex: question.getItemTabIndex($data), \'data-sv-drop-target-ranking-item\': $index() }"\n  >\n    <div tabindex="-1" style="outline: none;">\n      <div data-bind="css: question.cssClasses.itemGhostNode"></div>\n      <div data-bind="css: question.cssClasses.itemContent">\n        <div data-bind="css: question.cssClasses.itemIconContainer">\n          <svg\n            width="10"\n            height="16"\n            viewBox="0 0 10 16"\n            data-bind="css: question.getIconHoverCss()"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M6 2C6 0.9 6.9 0 8 0C9.1 0 10 0.9 10 2C10 3.1 9.1 4 8 4C6.9 4 6 3.1 6 2ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"\n            />\n          </svg>\n          <svg\n            width="10"\n            height="24"\n            viewBox="0 0 10 24"\n            data-bind="css: question.getIconFocusCss()"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path d="M10 5L5 0L0 5H4V9H6V5H10Z" />\n            <path d="M6 19V15H4V19H0L5 24L10 19H6Z" />\n          </svg>\n        </div>\n        <div\n          data-bind="css: question.getItemIndexClasses(), text: question.getNumberByIndex($index())"\n        ></div>\n        <div data-bind="css: question.cssClasses.controlLabel">\n          \x3c!-- ko template: { name: \'survey-string\', data: $data.locText } --\x3e\n          \x3c!-- /ko --\x3e\n        </div>\n      </div>\n    </div>\n  </div>\n</script>\n';
        },
        function (e, t) {
            e.exports =
                "<script type=\"text/html\" id=\"survey-question-comment\">\n\x3c!--ko if: !question.isReadOnlyRenderDiv() --\x3e\n<textarea data-bind=\"attr: {'readonly': question.renderedInputReadOnly, 'disabled': question.renderedInputDisabled, maxLength: question.getMaxLength(), cols: question.cols, rows: question.rows, id: question.inputId, placeholder: question.renderedPlaceholder, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy}, \n  event: { input: function(s, e) { question.onInput(e); }, keydown: function(s, e) { question.onKeyDown(e); return true; } }, \n  value: question.value, \n  style: { resize: question.resizeStyle },\n  css: question.className\"></textarea>\n  \x3c!--ko if: question.getMaxLength() --\x3e\n  \x3c!-- ko component: { name: 'sv-character-counter', params: { counter: question.characterCounter, remainingCharacterCounter: question.cssClasses.remainingCharacterCounter } } --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!--/ko--\x3e\n\x3c!--/ko--\x3e\n\n\x3c!--ko if: question.isReadOnlyRenderDiv() --\x3e\n<div data-bind=\"text: question.value\"></div>\n\x3c!--/ko--\x3e\n</script>";
        },
        function (e, t) {
            e.exports =
                "<script type=\"text/html\" id=\"survey-question-composite\">\n  \x3c!-- ko template: { name: 'survey-panel', data: question.contentPanel, as: 'question', afterRender: question.contentPanel.koPanelAfterRender } --\x3e\n  \x3c!-- /ko --\x3e\n</script>\n";
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-custom">\n  \x3c!-- ko template: { name: question.contentQuestion.koTemplateName(), data: question.contentQuestion, as: \'question\', afterRender: question.contentQuestion.koQuestionAfterRender } --\x3e\n  \x3c!-- /ko --\x3e\n</script>\n';
        },
        function (e, t) {
            e.exports =
                "<script type=\"text/html\" id=\"survey-question-dropdown\">\n  <div data-bind=\"css: question.renderCssRoot\">\n    \x3c!-- ko component: { name: 'sv-dropdown', params: { question: question } } --\x3e\n    \x3c!-- /ko --\x3e\n  \x3c!-- ko if: question.isOtherSelected --\x3e\n  <div data-bind=\"css: question.getCommentAreaCss(true), template: { name: 'survey-other', data: {'question': question, 'visible': question.isOtherSelected } }, style: {display: question.isFlowLayout ? 'inline': ''}\">\n  </div>\n  \x3c!-- /ko --\x3e\n  </div>\n</script>\n";
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-empty">\n    <div></div>\n</script>\n';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-errors">\n        \x3c!-- ko if: hasVisibleErrors --\x3e\n            <div role="alert" aria-live="polite" data-bind="visible: hasVisibleErrors, foreach: { data: errors, as: \'error\' }, css: koErrorClass(), attr: { id: question.id + \'_errors\' }">\n            \x3c!-- ko if: error.visible --\x3e\n            <div>   \n                <span aria-hidden="true" data-bind="css: question.koCss().error.icon"></span>\n                <span data-bind="css: question.koCss().error.item">\n                    \x3c!-- ko template: { name: \'survey-string\', data: error.locText } --\x3e\x3c!-- /ko --\x3e\n                </span>\n            </div>\n            \x3c!-- /ko --\x3e\n        </div>\n        \x3c!-- /ko --\x3e\n</script>';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-expression">\n  <div data-bind="text:question.formatedValue, css: question.koCss().root"></div>\n</script>\n';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-file">\n  <div data-bind="css: question.fileRootCss">\n      \x3c!-- ko ifnot: question.isInputReadOnly --\x3e\n      <input type="file" tabindex="-1" data-bind="css: question.cssClasses.fileInput, attr: { id: question.inputId, \'aria-required\': question.ariaRequired, \'aria-label\': question.ariaLabel, \'aria-invalid\': question.ariaInvalid, \'aria-describedby\': question.ariaDescribedBy, multiple: question.allowMultiple ? \'multiple\' : undefined, title: koInputTitle, accept: question.acceptedTypes }, event: { change: question.dochange }">\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: question.isReadOnly --\x3e\n      <input type="file" disabled data-bind="css: question.getReadOnlyFileCss(), attr: { id: question.inputId, placeholder: question.title, multiple: question.allowMultiple ? \'multiple\' : undefined }" style="color: transparent;"/>\n      \x3c!-- /ko --\x3e\n      <div data-bind="css: question.cssClasses.dragArea, event: { dragenter: question.ondragenter, dragover: question.ondragover, drop: question.ondrop, dragleave: question.ondragleave }">     \n        <div data-bind="css: question.getFileDecoratorCss()">\n          <span data-bind="css: question.koCss().dragAreaPlaceholder, text: question.dragAreaPlaceholder"></span>\n          <div data-bind="css: question.koCss().wrapper">\n            <label tabindex="0" role="button" data-bind="css: question.koChooseFileCss, key2click, attr: { for: question.inputId, \'aria-label\': question.chooseButtonCaption }">\n              <span data-bind="text: question.chooseButtonCaption"></span>\n              \x3c!-- ko if: question.cssClasses.chooseFileIconId --\x3e\n                  \x3c!-- ko component: { name: \'sv-svg-icon\', params: { title: question.chooseButtonCaption, iconName: question.cssClasses.chooseFileIconId, size: \'auto\' } } --\x3e\x3c!-- /ko --\x3e\n              \x3c!-- /ko --\x3e\n            </label>\n            \x3c!-- ko if: !question.koHasValue() --\x3e\n            <span data-bind="css: question.koCss().noFileChosen, text: question.noFileChosenCaption"></span>\n            \x3c!-- /ko --\x3e\n          </div>\n        </div>\n        \x3c!-- ko template: { name: \'survey-question-file-clean-button\', data: {question: question, showRemoveButton: question.showRemoveButton} } --\x3e\x3c!-- /ko --\x3e\n        \x3c!-- ko if: question.showPreview --\x3e\n        \x3c!-- ko if: question.koHasValue --\x3e\n        <div data-bind="css: question.cssClasses.fileList, foreach: question.koData, visible: question.koHasValue">\n            <span data-bind="visible: question.isPreviewVisible($index()), css: question.cssClasses.preview">\n              \x3c!-- ko template: { name: \'survey-question-file-sign\', data: {question: question, item: $data, fileSignCss: question.cssClasses.fileSign} } --\x3e\x3c!-- /ko --\x3e\n              <div data-bind="css: question.cssClasses.imageWrapper">\n                \x3c!-- ko if: question.canPreviewImage($data) --\x3e\n                <img data-bind="attr: { src: $data.content }, style : { height: question.imageHeight, width: question.imageWidth }" alt="File preview">\n                \x3c!-- /ko --\x3e\n                \x3c!-- ko if: question.defaultImage($data) --\x3e\n                \x3c!-- ko component: { name: \'sv-svg-icon\', params: { css: question.cssClasses.defaultImage, iconName: question.cssClasses.defaultImageIconId, size: \'auto\' } } --\x3e\x3c!-- /ko --\x3e\n                \x3c!-- /ko --\x3e\n                \x3c!-- ko if: $data.name --\x3e\n                \x3c!-- ko ifnot: question.isReadOnly --\x3e\n                <div data-bind="click: question.doremovefile, css: question.cssClasses.removeFileButton">\n                    <span data-bind="css: question.cssClasses.removeFile, text: question.removeFileCaption"></span>\n                    \x3c!-- ko if: question.cssClasses.removeFileSvgIconId --\x3e\n                      \x3c!-- ko component: { name: \'sv-svg-icon\', params: { css: question.cssClasses.removeFileSvg, title: question.removeFileCaption, iconName: question.cssClasses.removeFileSvgIconId, size: \'auto\' } } --\x3e\x3c!-- /ko --\x3e\n                    \x3c!-- /ko --\x3e\n                </div>\n                \x3c!-- /ko --\x3e\n                \x3c!-- /ko --\x3e\n              </div>\n              \x3c!-- ko template: { name: \'survey-question-file-sign\', data: {question: question, item: $data, fileSignCss: question.cssClasses.fileSignBottom} } --\x3e\x3c!-- /ko --\x3e\n            </span>\n        </div>\n        \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n        \x3c!-- ko template: { name: \'survey-question-file-clean-button\', data: {question: question, showRemoveButton: question.showRemoveButtonBottom} } --\x3e\x3c!-- /ko --\x3e\n        \x3c!-- ko if: question.mobileFileNavigatorVisible --\x3e\n        \x3c!-- ko component: { name: \'sv-action-bar\', params: { model: question.mobileFileNavigator } } --\x3e\n        \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n      </div>\n  </div>\n</script>\n<script type="text/html" id="survey-question-file-clean-button">\n  \x3c!-- ko if: question.koHasValue() && !question.isReadOnly && $data.showRemoveButton--\x3e\n  <button type="button" data-bind="css: showRemoveButton, enabled: !question.isInputReadOnly, click: question.doclean">\n      <span data-bind="text: question.clearButtonCaption"></span>\n      \x3c!-- ko if: question.cssClasses.removeButtonIconId --\x3e\n        \x3c!-- ko component: { name: \'sv-svg-icon\', params: { iconName: question.cssClasses.removeButtonIconId, size: \'auto\', title: question.clearButtonCaption } } --\x3e\x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n  </button>\n  \x3c!-- /ko --\x3e\n</script>\n<script type="text/html" id="survey-question-file-sign">\n  \x3c!-- ko if: item.name && fileSignCss --\x3e\n  <div data-bind="css: fileSignCss">\n    <a data-bind="style: { width: question.imageWidth }, click: question.dodownload, text: item.name, attr: { href: item.content, title: item.name, download: item.name }"></a>\n  </div>\n  \x3c!-- /ko --\x3e\n</script>\n';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-html">\n  <div data-bind="html: question.locHtml.koRenderedHtml, css: question.koCss().root"></div>\n</script>\n';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-image">\n  <div data-bind="css: question.koCss().root">\n    \x3c!-- ko if: question.renderedMode === "image" --\x3e\n    <img data-bind="event: { load: question.onLoadHandler, error: question.onErrorHandler }, css: question.getImageCss(), attr: { src: $data.locImageLink.koRenderedHtml() || null, width: question.renderedWidth, height: question.renderedHeight, alt: question.altText || question.title }, style: { objectFit: question.imageFit }"/>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: question.renderedMode === "video" --\x3e\n    <video controls data-bind="event: { load: question.onLoadHandler, error: question.onErrorHandler }, css: question.getImageCss(), attr: { src: $data.locImageLink.koRenderedHtml(), width: question.renderedWidth, height: question.renderedHeight }, style: { objectFit: question.imageFit }"></video>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: question.renderedMode === "youtube" --\x3e\n    <iframe data-bind=" css: question.getImageCss(), attr: { src: $data.locImageLink.koRenderedHtml(), width: question.renderedWidth, height: question.renderedHeight }, style: { objectFit: question.imageFit }"></iframe>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: !$data.locImageLink.koRenderedHtml() || question.contentNotLoaded  --\x3e\n    <div data-bind="css: question.koCss().noImage">\n      \x3c!-- ko component: { name: \'sv-svg-icon\', params: { iconName: question.koCss().noImageSvgIconId, size: 48 } } --\x3e\x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n</script>\n';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-imagepicker">\n    <fieldset data-bind="css: question.getSelectBaseRootCss()">\n        <legend data-bind="attr: { \'aria-label\': question.locTitle.renderedHtml }" role="radio"></legend>\n        \x3c!-- ko ifnot: question.hasColumns --\x3e\n        \x3c!-- ko foreach: { data: question.visibleChoices, as: \'item\', afterRender: question.koAfterRender}  --\x3e\n        \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: \'survey-imagepicker-item\', data: item } } } --\x3e\n        \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n        \x3c!-- ko if: question.hasColumns --\x3e\n        \x3c!-- ko foreach: question.columns --\x3e\n        <div data-bind="css: question.getColumnClass()" role="presentation">\n            \x3c!-- ko foreach: { data: $data, as: \'item\', afterRender: question.koAfterRender }  --\x3e\n            \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: \'survey-imagepicker-item\', data: item } } } --\x3e\n            \x3c!-- /ko --\x3e\n            \x3c!-- /ko --\x3e\n        </div>\n        \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n    </fieldset>\n</script>\n<script type="text/html" id="survey-imagepicker-item">\n    <div data-bind="css: question.getItemClass(item)">\n        <label data-bind="css: question.koCss().label">\n            <input data-bind="attr: {type: question.inputType, name: question.questionName, value: item.value, id: question.getItemId(item), \'aria-required\': question.ariaRequired, \'aria-label\': question.ariaLabel, \'aria-invalid\': question.ariaInvalid, \'aria-describedby\': question.ariaDescribedBy}, checked: question.koValue, enable: question.getItemEnabled(item), css: question.koCss().itemControl"\n            />\n            <div data-bind="css: question.koCss().itemDecorator">\n                <div data-bind="css: question.koCss().imageContainer">\n                  \x3c!-- ko if: question.cssClasses.checkedItemDecorator --\x3e\n                  <span data-bind="css: question.cssClasses.checkedItemDecorator">\n                    \x3c!-- ko if: question.cssClasses.checkedItemSvgIconId --\x3e\n                    \x3c!-- ko component: { name: \'sv-svg-icon\', params: { css: question.cssClasses.checkedItemSvgIcon, iconName: question.cssClasses.checkedItemSvgIconId, size: \'auto\' } } --\x3e\n                    \x3c!-- /ko --\x3e\n                    \x3c!-- /ko --\x3e\n                   </span>\n                  \x3c!-- /ko --\x3e\n                  \x3c!-- ko if: ($data.locImageLink.koRenderedHtml() && !$data.contentNotLoaded && question.contentMode === "image") --\x3e\n                  <img data-bind="css: question.koCss().image, attr: { src: $data.locImageLink.koRenderedHtml, width: question.renderedImageWidth, height: question.renderedImageHeight, alt: item.locText.koRenderedHtml }, style: { objectFit: question.imageFit }, event: { load: question.onContentLoaded, error: $data.onErrorHandler }"/>\n                  \x3c!-- /ko --\x3e\n                  \x3c!-- ko if: ($data.locImageLink.koRenderedHtml() && !$data.contentNotLoaded && question.contentMode === "video") --\x3e\n                  <video controls data-bind="css: question.koCss().image, attr: { src: $data.locImageLink.koRenderedHtml, width: question.renderedImageWidth, height: question.renderedImageHeight }, style: { objectFit: question.imageFit }, event: { loadedmetadata: question.onContentLoaded, error: $data.onErrorHandler }"></video>\n                  \x3c!-- /ko --\x3e\n                  \x3c!-- ko if: !$data.imageLink || $data.contentNotLoaded --\x3e\n                  <div data-bind="css: question.koCss().itemNoImage, style: { width: question.renderedImageWidth, height: question.renderedImageHeight, objectFit: question.imageFit}">\n                    \x3c!-- ko component: { name: \'sv-svg-icon\', params: { css: question.koCss().itemNoImageSvgIcon, iconName: question.koCss().itemNoImageSvgIconId, size: 48 } } --\x3e\x3c!-- /ko --\x3e\n                  </div>\n                  \x3c!-- /ko --\x3e\n                  \n                </div>\n                \x3c!-- ko if: question.showLabel --\x3e\n                <span data-bind="css: question.koCss().itemText">\n                  \x3c!-- ko template: { name: \'survey-string\', data: item.locText } --\x3e\n                  \x3c!-- /ko --\x3e\n                </span>\n                \x3c!-- /ko --\x3e\n            </div>\n        </label>\n    </div>\n</script>';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-matrix">\n  <div data-bind="css: question.koCss().tableWrapper">\n    <fieldset>\n      <legend\n        data-bind="attr: { \'aria-label\': question.locTitle.renderedHtml }"\n      ></legend>\n      <table data-bind="css: question.getTableCss()">\n        \x3c!-- ko if: question.showHeader --\x3e\n        <thead>\n          <tr>\n            \x3c!-- ko if: question.hasRows --\x3e\n            <td data-bind="visible: question.hasRows"></td>\n            \x3c!-- /ko --\x3e\n            \x3c!-- ko foreach: question.koVisibleColumns --\x3e\n            <th data-bind="css: question.koCss().headerCell, style: { minWidth: question.columnMinWidth, width: question.columnMinWidth }">\n              \x3c!-- ko component: { name: question.getColumnHeaderWrapperComponentName($data), params: { componentData:  question.getColumnHeaderWrapperComponentData($data), templateData: { data: $data } } } --\x3e\n                \x3c!-- ko template: { name: \'survey-string\', data: $data.locText } --\x3e\x3c!-- /ko --\x3e\n              \x3c!-- /ko --\x3e\n            </th>\n            \x3c!-- /ko --\x3e\n          </tr>\n        </thead>\n        \x3c!-- /ko --\x3e\n        <tbody>\n          \x3c!-- ko foreach: { data: question.koVisibleRows, as: \'row\' } --\x3e\n          <tr data-bind="css: row.rowClasses">\n            <td\n              data-bind="visible: question.hasRows, css: question.koCss().rowTextCell, style: {  minWidth: question.rowTitleWidth, width: question.rowTitleWidth }"\n            >\n              \x3c!-- ko component: { name: question.getRowHeaderWrapperComponentName($data), params: { componentData:  question.getRowHeaderWrapperComponentData($data), templateData: { data: $data } } } --\x3e\n                \x3c!-- ko template: { name: \'survey-string\', data: row.locText } --\x3e\n                \x3c!-- /ko --\x3e\n              \x3c!-- /ko --\x3e\n            </td>\n            \x3c!-- ko foreach: question.koVisibleColumns --\x3e\n            \x3c!-- ko if: question.hasCellText --\x3e\n            <td\n              data-bind="css: question.getItemClass(row, $data), click: function() { if (!question.isInputReadOnly) { row.cellClick($data); } }"\n            >\n              \x3c!-- ko template: { name: \'survey-string\', data: question.getCellDisplayLocText(row.name, $data) } --\x3e\n              \x3c!-- /ko --\x3e\n            </td>\n            \x3c!-- /ko --\x3e\n            \x3c!-- ko if: !question.hasCellText --\x3e\n            <td\n              data-bind="attr: { \'data-responsive-title\': $data.locText.renderedHtml }, css: question.koCss().cell"\n            >\n              <label data-bind="css: question.getItemClass(row, $data)">\n                <input\n                  type="radio"\n                  data-bind="css: question.koCss().itemValue, attr: { name: row.fullName, \'aria-required\': question.ariaRequired, \'aria-label\': $data.locText.renderedHtml, \'aria-invalid\': question.ariaInvalid, \'aria-describedby\': question.ariaDescribedBy, id: question.inputId + \'_\' + row.name + \'_\' + $index() }, checkedValue: $data.value, checked: row.value, enable: !question.isInputReadOnly"\n                />\n                <span data-bind="css: question.koCss().materialDecorator">\n                    \x3c!-- ko if: question.itemSvgIcon --\x3e\n                      <svg data-bind="css:question.koCss().itemDecorator">\n                        <use data-bind="attr:{\'xlink:href\':question.itemSvgIcon}" xlink:href=\'\'></use>\n                      </svg>  \n                    \x3c!-- /ko --\x3e\n                </span>\n                <span data-bind="visible: question.isMobile, css: question.koCss().cellResponsiveTitle">\n                  \x3c!-- ko template: { name: \'survey-string\', data: $data.locText } --\x3e\x3c!-- /ko --\x3e\n                </span>\n              </label>\n            </td>\n            \x3c!-- /ko --\x3e\n            \x3c!-- /ko --\x3e\n          </tr>\n          \x3c!-- /ko --\x3e\n        </tbody>\n      </table>\n    </fieldset>\n  </div>\n</script>\n<script type="text/html" id="survey-text">\n  <span data-bind="text:$data.renderedHtml"></span>\n</script>';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-matrixdynamic">\n    <div>\n      \x3c!-- ko if: question.koTable().showAddRowOnTop --\x3e\n      <div\n        data-bind="css: question.koCss().footer"\n      >\n        <button\n          type="button"\n          data-bind="click: question.isDesignMode ? undefined : question.koAddRowClick, css: question.getAddRowButtonCss(), disable: question.isInputReadOnly"\n        >\n          \x3c!-- ko template: { name: \'survey-string\', data: question.locAddRowText } --\x3e\x3c!-- /ko --\x3e\n          <span data-bind="css: question.koCss().iconAdd"></span>\n        </button>\n      </div>\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko template: { name: \'survey-matrixtable\' } --\x3e\n      \x3c!--/ko--\x3e\n      \x3c!-- ko ifnot: question.koTable().showTable --\x3e\n      <div data-bind="css: question.koCss().emptyRowsSection">\n        <div data-bind="css: question.koCss().emptyRowsText">\n          \x3c!-- ko template: { name: \'survey-string\', data: question.locEmptyRowsText } --\x3e\x3c!-- /ko --\x3e\n        </div>\n        <button\n          type="button"\n          data-bind="click:question.koAddRowClick, css: question.getAddRowButtonCss(true), disable: question.isInputReadOnly"\n        >\n          \x3c!-- ko template: { name: \'survey-string\', data: question.locAddRowText } --\x3e\x3c!-- /ko --\x3e\n          <span data-bind="css: question.koCss().iconAdd"></span>\n        </button>\n      </div>\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: question.koTable().showAddRowOnBottom --\x3e\n      <div\n        data-bind="css: question.koCss().footer"\n      >\n        <button\n          type="button"\n          data-bind="click: question.koAddRowClick, css: question.getAddRowButtonCss(), disable: question.isInputReadOnly"\n        >\n          \x3c!-- ko template: { name: \'survey-string\', data: question.locAddRowText } --\x3e\x3c!-- /ko --\x3e\n          <span data-bind="css: question.koCss().iconAdd"></span>\n        </button>\n      </div>\n      \x3c!-- /ko --\x3e\n  </div>\n</script>\n<script type="text/html" id="survey-matrixcell">\n  <td\n    data-bind="css: $data.className, style: { minWidth: $data.minWidth, width: $data.width }, attr: { \'data-responsive-title\': headers, title: $data.getTitle(), colspan: $data.colSpans }"\n  >\n    <div data-bind="visible: question.isVisible, css: $parentContext.question.cssClasses.cellQuestionWrapper">\n      \x3c!-- ko if: $data.showErrorOnTop--\x3e\n      \x3c!-- ko template: { name: \'survey-question-errors\', data: question, as: \'question\' } --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: $data.isOtherChoice --\x3e\n        <div data-bind="css: question.getCommentAreaCss(true), template: { name: \'survey-other\', data: {\'question\': question, \'visible\': true } }"></div>\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: $data.isCheckbox --\x3e\n        \x3c!-- ko let: { question: $data.matrix.getCellTemplateData($data) } --\x3e\n          \x3c!-- ko component: { name: $data.matrix.getCellWrapperComponentName($data), params: { componentData:  $data.matrix.getCellWrapperComponentData($data), templateData: { name:  \'survey-checkbox-item\', data: { item: item, hideCaption: true } } } } --\x3e\n          \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: $data.isRadio --\x3e\n        \x3c!-- ko let: { question: $data.matrix.getCellTemplateData($data) } --\x3e\n          \x3c!-- ko component: { name: $data.matrix.getCellWrapperComponentName($data), params: { componentData:  $data.matrix.getCellWrapperComponentData($data), templateData: { name:  \'survey-radiogroup-item\', data: { item: item, hideCaption: true } } } } --\x3e\n          \x3c!-- /ko --\x3e  \n        \x3c!-- /ko --\x3e   \n      \x3c!-- /ko --\x3e\n      \x3c!-- ko ifnot: $data.isChoice --\x3e\n      \x3c!-- ko if: question.isDefaultRendering() --\x3e\n        \x3c!-- ko let: { question: $data.matrix.getCellTemplateData($data) } --\x3e\n        \x3c!-- ko component: { name: $data.matrix.getCellWrapperComponentName($data), params: { componentData:  $data.matrix.getCellWrapperComponentData($data), templateData: { name: question.koTemplateName(), data: question, afterRender: function(el) { $data.matrix.koCellQuestionAfterRender(el, $data); } } } } --\x3e\n        \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko ifnot: question.isDefaultRendering() --\x3e\n        \x3c!-- ko component: { name: question.getComponentName(), params: { question: question } } --\x3e\n        \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: $data.showErrorOnBottom--\x3e\n      \x3c!-- ko template: { name: \'survey-question-errors\', data: question, as: \'question\' } --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: $data.hasQuestion && $data.question.isErrorsModeTooltip--\x3e\n        \x3c!-- ko component: { name: \'sv-tooltip-error\', params: { question: question } } --\x3e\n        \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n  </td>\n</script>\n<script type="text/html" id="survey-matrixtable">\n<div\n  data-bind="visible: question.koTable().showTable, css: question.koCss().tableWrapper, style: { overflowX: question.showHorizontalScroll ? \'scroll\': \'\' }"\n>\n  <table data-bind="css: question.getTableCss()">\n    \x3c!-- ko if: question.koTable().showHeader --\x3e\n    <thead>\n      <tr>\n        \x3c!-- ko foreach: question.koTable().headerRow.cells --\x3e\n          \x3c!-- ko if: $data.hasTitle --\x3e\n            <th\n              data-bind="style: { minWidth: $data.minWidth, width: $data.width }, css: $data.className"\n            >\n              \x3c!-- ko component: { name: question.getColumnHeaderWrapperComponentName($data), params: { componentData:  question.getColumnHeaderWrapperComponentData($data), templateData: { data: $data } } } --\x3e\n                \x3c!-- ko template: { name: \'survey-string\', data: $data.locTitle } --\x3e\x3c!-- /ko --\x3e\n                \x3c!-- ko if: $data.column && $data.column.isRenderedRequired --\x3e\n                <span data-bind="css: question.koCss().cellRequiredText, text: $data.column.requiredText"></span>\n                \x3c!-- /ko --\x3e\n              \x3c!-- /ko --\x3e\n            </th>\n          \x3c!-- /ko --\x3e\n          \x3c!-- ko ifnot: $data.hasTitle --\x3e\n            <td data-bind="style: { minWidth: $data.minWidth, width: $data.width }, css: $data.className"></td>\n          \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n      </tr>\n    </thead>\n    \x3c!-- /ko --\x3e\n    <tbody>\n      \x3c!-- ko foreach: question.koTable().rows --\x3e\n      \x3c!-- ko ifnot: $parent.detailPanelMode === "popup" && $data.isDetailRow --\x3e\n      <tr data-bind="css: $data.className, attr: attributes, event: { pointerdown: function (model, event) { question.onPointerDown(event, row); return true;} }">\n        \x3c!-- ko foreach: $data.cells --\x3e\n        \x3c!-- ko if: $data.isDragHandlerCell --\x3e\n        <td data-bind="css:$data.className, attr: {colspan: $data.colSpans}">\n          \x3c!-- ko component: { name: \'sv-matrix-drag-drop-icon\', params: { item: { data: { row: row, question: question } } }} --\x3e\n          \x3c!-- /ko --\x3e\n        </td>\n        \x3c!-- /ko --\x3e\n        \x3c!-- ko if: $data.isActionsCell --\x3e\n        <td data-bind="css: $data.className, attr: { colspan: $data.colSpans, \'data-responsive-title\': headers, title: $data.getTitle() }">\n          \x3c!-- ko component: { name: \'sv-action-bar\', params: { model: $data.item.getData(), handleClick: false } } --\x3e\n          \x3c!-- /ko --\x3e\n        </td>\n        \x3c!-- /ko --\x3e\n        \x3c!-- ko if: $data.isEmpty --\x3e\n        <td data-bind="attr: { colspan: $data.colSpans }"></td>\n        \x3c!-- /ko --\x3e\n        \x3c!-- ko if: $data.hasPanel --\x3e\n        <td data-bind="css: $data.className, attr: { colspan: $data.colSpans }">\n          \x3c!-- ko component: { name: $data.panel.survey.getElementWrapperComponentName($data.panel), \n            params: { componentData:  $data.panel.survey.getElementWrapperComponentData($data.panel), \n            templateData: { name: $data.panel.koElementType, data: $data.panel, afterRender: question.koElementAfterRender } } } \n          --\x3e\n          \x3c!-- /ko --\x3e\n        </td>\n        \x3c!-- /ko --\x3e\n        \x3c!-- ko if: $data.hasQuestion --\x3e\n        \x3c!-- ko template: { name: \'survey-matrixcell\', afterRender: function(els) { $data.matrix.koCellAfterRender(els, $data); } } --\x3e\x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n        \x3c!-- ko if: $data.hasTitle --\x3e\n        <td\n          data-bind="css: $data.className, style: { minWidth: $data.minWidth, width: $data.width }, attr: { colspan: $data.colSpans, \'data-responsive-title\': headers, title: $data.getTitle() }"\n        >\n          \x3c!-- ko component: { name: question.getRowHeaderWrapperComponentName($data), params: { componentData:  question.getRowHeaderWrapperComponentData($data), templateData: { data: $data } } } --\x3e\n          \x3c!-- ko template: { name: \'survey-string\', data: $data.locTitle } --\x3e\x3c!-- /ko --\x3e\n          \x3c!-- ko if: $data.requiredText --\x3e\n          <span data-bind="css: question.koCss().cellRequiredText, text: $data.requiredText"></span>\n          \x3c!-- /ko --\x3e\n          \x3c!-- /ko --\x3e\n        </td>\n        \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n      </tr>\n\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n    </tbody>\n    \x3c!-- ko if:question.koTable().hasFooter --\x3e\n    <tfoot>\n      <tr>\n        \x3c!-- ko foreach: question.koTable().footerRow.cells --\x3e\n          \x3c!-- ko if: $data.hasQuestion --\x3e\n            \x3c!-- ko template: { name: \'survey-matrixcell\', afterRender: function(els) { $data.matrix.koCellAfterRender(els, $data); } } --\x3e\x3c!-- /ko --\x3e\n          \x3c!-- /ko --\x3e\n          \x3c!-- ko if: $data.hasTitle --\x3e\n          <td>\n            \x3c!-- ko template: { name: \'survey-string\', data: $data.locTitle } --\x3e\x3c!-- /ko --\x3e\n          </td>\n          \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n      </tr>\n    </tfoot>\n    \x3c!-- /ko --\x3e\n  </table>\n</div>\n</script>';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-matrixdropdown">\n  \x3c!-- ko template: { name: \'survey-matrixtable\' } --\x3e\x3c!--/ko--\x3e\n</script>';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-multipletext">\n  <table data-bind="css: question.koCss().root">\n    <tbody data-bind="foreach: { data:  question.koRows, as: \'row\' }">\n      <tr data-bind="foreach: { data: row, as: \'item\' }, css: question.koCss().row">\n        <td data-bind="css: question.cssClasses.cell">  \n          <label data-bind="css: question.getItemLabelCss(item)">\n              <span data-bind="css: question.koItemTitleCss">\n                \x3c!-- ko component: { name: \'survey-element-title-content\', params: {element: item.editor} } --\x3e\x3c!-- /ko --\x3e\n              </span>\n              <div data-bind="css: question.koItemCss">\n                \x3c!-- ko if: item.editor.showErrorOnTop --\x3e\n                  \x3c!-- ko template: { name: \'survey-question-errors\', data: item.editor } --\x3e\n                  \x3c!-- /ko --\x3e\n                \x3c!-- /ko --\x3e\n                \x3c!-- ko template: { name: item.editor.koTemplateName(), data: item.editor, as: \'question\', afterRender: item.editor.koQuestionAfterRender } --\x3e\n                \x3c!-- /ko --\x3e\n                \x3c!-- ko if: item.editor.showErrorOnBottom --\x3e\n                  \x3c!-- ko template: { name: \'survey-question-errors\', data: item.editor } --\x3e\n                  \x3c!-- /ko --\x3e\n                \x3c!-- /ko --\x3e\n              </div>\n                \x3c!-- ko if: item.editor.isErrorsModeTooltip --\x3e\n                  \x3c!-- ko component: { name: "sv-tooltip-error", params: { question: item.editor } } --\x3e\n                  \x3c!-- /ko --\x3e\n                \x3c!-- /ko --\x3e\n            </label>\n          </td>\n        </tr>\n    </tbody>\n  </table>\n</script>\n';
        },
        function (e, t) {
            e.exports =
                "<script type=\"text/html\" id=\"survey-question-paneldynamic\">\n  <div data-bind=\"css: question.koCss().root\">\n    \x3c!-- ko if: question.getShowNoEntriesPlaceholder() --\x3e\n      <div data-bind=\"css: question.koCss().noEntriesPlaceholder\">\n        <span>\n          \x3c!-- ko template: { name: 'survey-string', data: locNoEntriesText } --\x3e\x3c!-- /ko --\x3e\n        </span>\n          \x3c!-- ko component: { name: 'sv-paneldynamic-add-btn', params: { question: question }} --\x3e\n          \x3c!-- /ko --\x3e\n        </div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: question.koIsList() --\x3e\n      \x3c!-- ko foreach: { data: question.panels } --\x3e\n        <div data-bind=\"css: question.getPanelWrapperCss()\">\n          \x3c!-- ko let: { question: $data } --\x3e\n            \x3c!-- ko component: { name: survey.getElementWrapperComponentName(question), params: { componentData:  survey.getElementWrapperComponentData(question), templateData: { name: question.koElementType, data: question, afterRender: $parent.koPanelAfterRender } } } --\x3e\n            \x3c!-- /ko --\x3e\n          \x3c!-- /ko --\x3e\n          \x3c!-- ko if: question.panelRemoveButtonLocation === 'right' && question.koCanRemovePanel() && $data.state != 'collapsed'--\x3e\n            \x3c!-- ko component: { name: 'sv-paneldynamic-remove-btn', params: { question: question, panel: $data } } --\x3e\n            \x3c!-- /ko --\x3e\n          \x3c!-- /ko --\x3e\n          \n        </div>\n        \x3c!-- ko if: $index() < question.panelCount - 1 --\x3e\n        <hr data-bind=\"css: question.koCss().separator\"/>\n        \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: question.showLegacyNavigation --\x3e\n        \x3c!-- ko component: { name: 'sv-paneldynamic-add-btn', params: { question: question }} --\x3e\x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko ifnot: question.koIsList()  --\x3e\n      \x3c!-- ko if: question.koIsProgressTop--\x3e\n        \x3c!-- ko if: !question.showLegacyNavigation && question.koIsRange --\x3e\n          \x3c!-- ko template: { name: 'survey-question-paneldynamic-progress', data: question, as: 'question'} --\x3e\n          \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n        \x3c!-- ko if: question.showLegacyNavigation --\x3e\n        <div data-bind=\"css: question.koCss().progressTop\">\n          \x3c!-- ko template: { name: 'survey-question-paneldynamic-navigator', data: question, as: 'question'} --\x3e\n          \x3c!-- /ko --\x3e\n        </div>\n        \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: question.koPanel() --\x3e\n      <div data-bind=\"css: question.getPanelWrapperCss()\">\n        \x3c!-- ko let: { question: question.koPanel() } --\x3e\n          \x3c!-- ko component: { name: question.survey.getElementWrapperComponentName(question), params: { componentData:  question.survey.getElementWrapperComponentData(question), templateData: { name: question.koElementType, data: question, afterRender: $parent.koPanelAfterRender } } } --\x3e\n          \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n        \x3c!-- ko if: question.panelRemoveButtonLocation === 'right'--\x3e\n          \x3c!-- ko template: { name: 'survey-question-paneldynamic-remove-btn', data: { question: question, panel: question.koPanel() }, as: 'question'} --\x3e\n          \x3c!-- /ko --\x3e\n        \x3c!-- /ko--\x3e\n      </div>\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: question.showLegacyNavigation && question.koIsProgressBottom--\x3e \n      <div data-bind=\"css: question.koCss().progressBottom\">\n        \x3c!-- ko template: { name: 'survey-question-paneldynamic-navigator', data: question, as: 'question'} --\x3e\n        \x3c!-- /ko --\x3e\n      </div>\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: !question.showLegacyNavigation && !!question.panelCount != 0 --\x3e\n    <div data-bind=\"css: question.koCss().footer\">\n      <hr data-bind=\"css: question.koCss().separator\"/>\n      \x3c!-- ko if: question.koIsRange() && question.koIsProgressBottom --\x3e\n         \x3c!-- ko template: { name: 'survey-question-paneldynamic-progress', data: question, as: 'question'} --\x3e\n         \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: question.footerToolbar.visibleActions.length --\x3e\n      <div data-bind=\"css: question.koCss().footerButtonsContainer\">\n        \x3c!-- ko component: { name: \"sv-action-bar\", params: { model: question.footerToolbar } } --\x3e\n        \x3c!-- /ko --\x3e\n      </div>\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n</script>";
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-paneldynamic-navigator">\n  <div style="clear: both;">\n        <div data-bind="css: question.koCss().progressContainer">\n          \x3c!-- ko component: { name: \'sv-paneldynamic-prev-btn\', params: { question: question }} --\x3e\x3c!-- /ko --\x3e\n          \x3c!-- ko if: question.koIsRange --\x3e\n            \x3c!-- ko template: { name: \'survey-question-paneldynamic-progress\', data: question, as: \'question\'} --\x3e\x3c!-- /ko --\x3e\n          \x3c!-- /ko --\x3e\n          \x3c!-- ko component: { name: \'sv-paneldynamic-next-btn\', params: { question: question }} --\x3e\x3c!-- /ko --\x3e\n        </div>\n          \x3c!-- ko component: { name: \'sv-paneldynamic-add-btn\', params: { question: question }} --\x3e\x3c!-- /ko --\x3e\n        <div data-bind="text: question.koProgressText, css: question.koCss().progressText"></div>\n      </div>\n</script>\n<script type="text/html" id="survey-question-paneldynamic-progress">\n  <div data-bind="css: question.koCss().progress">\n    <div\n      data-bind="css: question.koCss().progressBar, style: { width: question.koProgress }"\n      role="progressbar"\n    ></div>\n  </div>\n</script>';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-radiogroup">\n\n  <fieldset data-bind="css: question.getSelectBaseRootCss()" role="presentation">\n    \x3c!-- ko ifnot: question.hasColumns --\x3e\n      \x3c!-- ko if: question.blockedRow --\x3e\n      <div data-bind="css: question.koCss().rootRow">\n        \x3c!-- ko foreach: { data: question.dataChoices, as: \'item\', afterRender: question.koAfterRender }  --\x3e\n        \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } --\x3e\n        \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n      </div>\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko ifnot: question.blockedRow --\x3e\n      \x3c!-- ko foreach: { data: question.bodyItems, as: \'item\', afterRender: question.koAfterRender }  --\x3e\n        \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } --\x3e\n        \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: question.hasColumns --\x3e\n      <div data-bind="css: question.koCss().rootMultiColumn">\n\n        \x3c!-- ko foreach: question.columns --\x3e\n        <div data-bind="css: question.getColumnClass()" role="presentation">\n          \x3c!-- ko foreach: { data: $data, as: \'item\', afterRender: question.koAfterRender } --\x3e\n            \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } --\x3e\n            \x3c!-- /ko --\x3e\n          \x3c!-- /ko --\x3e\n        </div>\n        \x3c!-- /ko --\x3e\n      </div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: question.hasFootItems  --\x3e\n      \x3c!-- ko foreach: { data: question.footItems, as: \'item\', afterRender: question.koAfterRender }  --\x3e\n        \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: question.itemComponent, data: item } } } --\x3e\n        \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: question.hasOther && question.isOtherSelected --\x3e\n      <div data-bind="css: question.getCommentAreaCss(true), template: { name: \'survey-other\', data: {\'question\': question, \'visible\': question.isOtherSelected } }"></div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: question.showClearButtonInContent --\x3e\n    <div>\n      <input\n        type="button"\n        data-bind="click:question.clearValue, css: question.koCss().clearButton, value: question.clearButtonCaption"\n      />\n    </div>\n    \x3c!-- /ko --\x3e\n  </fieldset>\n</script>\n<script type="text/html" id="survey-radiogroup-item">\n  <div role="presentation" data-bind="css: question.getItemClass(item)">\n    <label data-bind="css: question.getLabelClass(item), attr: { \'aria-label\': question.getAriaItemLabel(item) }">\n      <input\n        type="radio"\n        data-bind="attr: { name: question.questionName, id: question.getItemId(item), \'aria-describedby\': question.ariaDescribedBy }, checkedValue: item.value, checked: question.renderedValue, enable: question.getItemEnabled(item), css: question.koCss().itemControl"\n      />\n      \x3c!-- ko if: question.koCss().materialDecorator --\x3e\n      <span data-bind="css: question.koCss().materialDecorator">\n        \x3c!-- ko if: question.itemSvgIcon --\x3e\n        <svg data-bind="css:question.koCss().itemDecorator">\n          <use data-bind="attr:{\'xlink:href\':question.itemSvgIcon}" xlink:href=\'\'></use>\n        </svg>\n        \x3c!-- /ko --\x3e\n      </span>\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: !item.hideCaption --\x3e\n      <span data-bind="css: question.getControlLabelClass(item)">\n        \x3c!-- ko template: { name: \'survey-string\', data: item.locText } --\x3e\n        \x3c!-- /ko --\x3e\n      </span>\n      \x3c!-- /ko --\x3e\n    </label>\n  </div>\n</script>\n';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-rating">\n    <div data-bind="css: question.ratingRootCss">\n        <fieldset role="radiogroup">\n            <legend role="presentation" class="sv-hidden"></legend>\n            \x3c!-- ko if: question.hasMinLabel--\x3e\n            <span data-bind="css: question.koCss().minText">\n              \x3c!-- ko template: { name: \'survey-string\', data: question.locMinRateDescription } --\x3e\n              \x3c!-- /ko --\x3e\n              </span>\n            \x3c!-- /ko --\x3e\n            \x3c!-- ko foreach: question.renderedRateItems --\x3e\n              \x3c!-- ko component: { name: question.itemComponentName, params: { question: question, item: $data, index: $index() } } --\x3e\n              \x3c!-- /ko --\x3e\n              \n            \x3c!-- /ko --\x3e\n            \x3c!-- ko if: question.hasMaxLabel--\x3e\n            <span data-bind="css: question.koCss().maxText">\n              \x3c!-- ko template: { name: \'survey-string\', data: question.locMaxRateDescription } --\x3e\n              \x3c!-- /ko --\x3e\n              </span>\n            \x3c!-- /ko --\x3e\n\n        </fieldset>\n    </div>\n  </fieldset>\n</script>\n';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-signaturepad">\n    <div data-bind="css: question.koCss().root, style: { height: signatureHeight, width: signatureWidth }">\n        <div \n            data-bind="text: placeHolderText, css: question.koCss().placeholder, visible: $data.needShowPlaceholder()">\n        </div>\n        <div>\n            <canvas tabindex=\'0\'></canvas>\n        </div>\n        \x3c!-- ko if: question.canShowClearButton --\x3e\n        <div data-bind="css: question.koCss().controls">\n            <button type=\'button\'\n                data-bind="click: question.clearValue, css: question.koCss().clearButton, attr: { title: question.clearButtonCaption }">\n                    \x3c!-- ko ifnot: question.koCss().clearButtonIconId --\x3e\n                        <span>✖</span>\n                    \x3c!-- /ko --\x3e\n                    \x3c!-- ko if: question.koCss().clearButtonIconId --\x3e\n                        <sv-svg-icon params="iconName: question.koCss().clearButtonIconId, size: \'auto\'"></sv-svg-icon>\n                    \x3c!-- /ko --\x3e\n            </button>\n        </div>\n        \x3c!-- /ko --\x3e\n    </div>\n</script>';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-text">\n  \x3c!--ko if: !question.dataListId && !question.isReadOnlyRenderDiv()--\x3e\n    \x3c!-- ko template: { name: \'survey-question-text-input\' } --\x3e\x3c!-- /ko --\x3e\n  \x3c!--/ko--\x3e\n  \x3c!--ko if: question.dataListId && !question.isReadOnlyRenderDiv()--\x3e\n  <div>\n    \x3c!-- ko template: { name: \'survey-question-text-input\' } --\x3e\x3c!-- /ko --\x3e\n    <datalist data-bind="attr: {id: question.dataListId}">\n    \x3c!-- ko foreach: question.dataList --\x3e\n      <option data-bind="value:$data"></option>\n    \x3c!--/ko--\x3e\n    </datalist>\n  </div>\n  \x3c!--/ko--\x3e\n  \x3c!--ko if: question.isReadOnlyRenderDiv() --\x3e\n  <div data-bind="text: question.value"></div>\n  \x3c!--/ko--\x3e\n</script>\n<script type="text/html" id="survey-question-text-input">\n  <input\n  data-bind="disable: question.isInputReadOnly, \n    style: question.inputStyle, \n    attr: { type: question.inputType, size: question.renderedInputSize, id: question.inputId, placeholder: question.renderedPlaceholder, maxLength: question.getMaxLength(), min: question.renderedMin, max: question.renderedMax, step: question.renderedStep, \'aria-required\': question.ariaRequired, \'aria-label\': question.ariaLabel, \'aria-invalid\': question.ariaInvalid, \'aria-describedby\': question.ariaDescribedBy, autocomplete: question.autocomplete, list:question.dataListId }, \n    event: { keydown: koOnKeyDown, keyup: koOnKeyUp, change: koOnChange, compositionupdate: koOnCompositeUpdate, blur: koOnBlur, focus: koOnFocus },\n    value: question.koReadOnlyValue,\n    css: question.getControlClass()"/>\n  \x3c!--ko if: question.getMaxLength() --\x3e\n  \x3c!-- ko component: { name: \'sv-character-counter\', params: { counter: question.characterCounter, remainingCharacterCounter: question.cssClasses.remainingCharacterCounter } } --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!--/ko--\x3e\n</script>';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="survey-question-buttongroup">\n  <div role="group" data-bind="css: question.koCss().root">\n      \x3c!-- ko foreach: question.visibleChoices --\x3e\n        \x3c!-- ko component: { name: \'sv-button-group-item\', params: { question: question, item: $data, index: $index } } --\x3e\n        \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n</script>\n';
        },
        function (e, t) {
            e.exports =
                '<script type="text/html" id="popup-pointer">\n  <span class="sv-popup__pointer" data-bind="style: { left: pointerTarget.left, top: pointerTarget.top }"></span>\n</script>';
        },
        function (e, t) {
            e.exports =
                '<div style="position: fixed; bottom: 3px; right: 10px;" data-bind="css: cssRoot, style:{width: renderedWidth, maxWidth: renderedWidth}">\n    <div data-bind="css: cssHeaderRoot">\n        <span data-bind="click:doExpand" style="width: 100%; cursor: pointer;">\n            <span style="padding-right:10px" data-bind="css: cssHeaderTitle, text: locTitle.koRenderedHtml"></span>\n            <span aria-hidden="true" data-bind="css: cssButton"></span>\n        </span>\n        <span data-bind="visible:isExpanded, click:doExpand" style="float: right; cursor: pointer;">\n            <span style="padding-right:10px" data-bind="css: cssHeaderTitle">X</span>\n        </span>\n    </div>\n    <div data-bind="visible:isExpanded, css: cssBody">\n        <survey params="survey: survey"></survey>\n    </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                "\x3c!-- ko if: model.hasActions --\x3e\n<div\n  data-bind=\"css: model.getRootCss(), click: handleClick ? function() { return true; } : undefined, clickBubble: handleClick ? false : undefined\"\n>\n  \x3c!-- ko foreach: model.renderedActions --\x3e\n  \x3c!-- ko component: { name: 'sv-action', params: { item: $data } } --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!--/ko--\x3e\n</div>\n\x3c!--/ko--\x3e\n";
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko with: $data.item --\x3e\r\n<div data-bind="class: $data.getActionRootCss(), attr: { id: $data.id }">\r\n    \x3c!-- ko ifnot: $data.isEmpty --\x3e\r\n    <div class="sv-action__content">\r\n        \x3c!-- ko if: $data.needSeparator --\x3e\r\n        <sv-action-bar-separator></sv-action-bar-separator>\r\n        \x3c!-- /ko --\x3e\r\n        \x3c!-- ko ifnot: $data.template--\x3e\r\n        \x3c!-- ko component: { name: $data.component || \'sv-action-bar-item\', params: { item: $data } } --\x3e\r\n        \x3c!-- /ko --\x3e\r\n        \x3c!-- /ko --\x3e\r\n        \x3c!-- ko if: $data.template  --\x3e\r\n        \x3c!-- ko template: { name: $data.template, data: $data.data || $data } --\x3e\r\n        \x3c!-- /ko --\x3e\r\n        \x3c!-- /ko --\x3e\r\n    </div>\r\n    \x3c!-- /ko --\x3e\r\n</div>\r\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                "\x3c!-- ko with: $data.item --\x3e\n<button\n  type=\"button\"\n  data-bind=\"click: function(s, args) { $data.action($data, getIsTrusted(args)); }, key2click: { processEsc: false }, disable: $data.disabled, css: getActionBarItemCss(), attr: { title: $data.tooltip || $data.title, 'aria-checked': $data.ariaChecked, 'role': $data.ariaRole, 'aria-expanded': typeof $data.ariaExpanded === 'undefined' ? null : ($data.ariaExpanded ? 'true': 'false') }\"\n>\n  \x3c!-- ko if: $data.iconName --\x3e\n  \x3c!-- ko component: { name: 'sv-svg-icon', params: { css: $data.cssClasses.itemIcon, iconName: iconName, size: iconSize, title: $data.tooltip || $data.title } } --\x3e\x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: $data.hasTitle --\x3e\n  <span\n    data-bind=\"text: title, css: getActionBarItemTitleCss()\"\n  ></span>\n  \x3c!-- /ko --\x3e\n</button>\n\x3c!-- /ko --\x3e";
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko with: $data.item --\x3e\n<button type="button"\n  data-bind="click: function(s, args) { $data.action($data, getIsTrusted(args)); }, key2click: { processEsc: false }, css: getActionBarItemCss(), attr: { disabled: $data.enabled !== undefined && !ko.unwrap($data.enabled), title: $data.tooltip || $data.title, \'role\': $data.ariaRole }">\n  \x3c!-- ko if: $data.iconName --\x3e\n  \x3c!-- ko component: { name: \'sv-svg-icon\', params: { iconName: iconName, size: iconSize, title: $data.tooltip || $data.title, css: $data.cssClasses.itemIcon } } --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: $data.hasTitle --\x3e\n  <span data-bind="text: title, css: getActionBarItemTitleCss()"></span>\n  \x3c!-- /ko --\x3e\n  <sv-popup params="model: popupModel"></sv-popup>\n</button>\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                '<div class="sv-action-bar-separator" data-bind="css: $data.css"></div>';
        },
        function (e, t) {
            e.exports =
                '<div data-bind="css: question.koCss().rootCheckbox">\n  <div data-bind="css: question.getCheckboxItemCss()">\n    <label data-bind="css: question.koCss().checkboxLabel">\n      <input\n        type="checkbox"\n        data-bind="value: question.booleanValue, css: question.koCss().controlCheckbox, attr: {name: question.name, id: question.inputId, \'aria-required\': question.ariaRequired, \'aria-label\': question.ariaLabel, \'aria-invalid\': question.ariaInvalid, \'aria-describedby\': question.ariaDescribedBy}, checked: question.booleanValue, surveyProp: {indeterminate: question.isIndeterminate}, enable: !question.isInputReadOnly"\n      />\n      <span data-bind="css: question.koCss().checkboxMaterialDecorator">\n        \x3c!-- ko if: question.svgIcon --\x3e\n        <svg data-bind="css:question.koCss().checkboxItemDecorator">\n          <use data-bind="attr:{\'xlink:href\':question.svgIcon}" xlink:href=\'\'></use>\n        </svg>\n        \x3c!-- /ko --\x3e\n        <span class="check"></span>\n      </span>\n      <span\n        data-bind="if: question.isLabelRendered, css: question.koCss().checkboxControlLabel, attr: {id: question.labelRenderedAriaID}"\n      >\n        \x3c!-- ko component: { name: \'sv-title-actions\', params: {element: question } } --\x3e\x3c!-- /ko --\x3e\n      </span>\n    </label>\n    \x3c!-- ko if: question.canRenderLabelDescription --\x3e\n    <div data-bind="css: question.cssDescription">\n      \x3c!-- ko template: { name: \'survey-string\', data: question.locDescription } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n</div>\n';
        },
        function (e, t) {
            e.exports =
                '  <div role="presentation" data-bind="class: question.getRadioItemClass(question.koCss(), $data.value)">\n    <label data-bind="css: question.koCss().radioLabel">\n      <input\n        type="radio"\n        data-bind="event: { change: handleChange }, attr: { name: question.name, \'aria-describedby\': question.ariaDescribedBy, value: \'\'+$data.value, checked: $data.value === question.booleanValue }, enable: !question.isInputReadOnly, css: question.koCss().itemRadioControl"\n      />\n      \x3c!-- ko if: question.koCss().materialRadioDecorator --\x3e\n      <span data-bind="css: question.koCss().materialRadioDecorator">\n        \x3c!-- ko if: question.itemSvgIcon --\x3e\n        <svg data-bind="css:question.koCss().itemRadioDecorator">\n          <use data-bind="attr:{\'xlink:href\':question.itemSvgIcon}" xlink:href=\'\'></use>\n        </svg>\n        \x3c!-- /ko --\x3e\n      </span>\n      \x3c!-- /ko --\x3e\n      <span data-bind="css: question.koCss().radioControlLabel">\n        \x3c!-- ko template: { name: \'survey-string\', data: $data.locText } --\x3e\n        \x3c!-- /ko --\x3e\n      </span>\n    </label>\n  </div>\n\n';
        },
        function (e, t) {
            e.exports =
                '<div data-bind="css: question.koCss().rootRadio">\n  <fieldset role="presentation" data-bind="css: question.koCss().radioFieldset">\n    \x3c!-- ko component: { name: \'sv-boolean-radio-item\', params: { value: false, locText: question.locLabelFalse, question: question } } --\x3e\x3c!-- /ko --\x3e\n    \x3c!-- ko component: { name: \'sv-boolean-radio-item\', params: { value: true, locText: question.locLabelTrue, question: question } } --\x3e\x3c!-- /ko --\x3e  \n  </fieldset>\n</div>\n';
        },
        function (e, t) {
            e.exports =
                "\x3c!-- ko template: { name: 'survey-panel', data: question, as: 'question', afterRender: question.koPanelAfterRender } --\x3e\x3c!-- /ko --\x3e";
        },
        function (e, t) {
            e.exports =
                '<div class="sv-popup" tabindex="-1"\n  data-bind="visible: isVisible, click: clickOutside, class: styleClass, event: { keydown: function(data, event) { onKeyDown(event); return true; } }">\n  <div class="sv-popup__container"\n    data-bind="style: { left: left, top: top, height: height, minWidth: minWidth, width: width }, click: function() { return true; }, clickBubble: false">\n    <div class="sv-popup__shadow">\n      \x3c!-- ko if: $data.showHeader --\x3e\n      \x3c!-- ko template: { name: $data.popupHeaderTemplate, data: $data } --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      <div class="sv-popup__body-content">\n        \x3c!-- ko if: !!title  --\x3e\n        <div class="sv-popup__body-header" data-bind="text: title"></div>\n        \x3c!-- /ko --\x3e\n        <div class="sv-popup__scrolling-content">\n          <div class="sv-popup__content"\n            data-bind="component: { name: contentComponentName, params: contentComponentData }"></div>\n        </div>\n        \x3c!-- ko if: showFooter  --\x3e\n        <div class="sv-popup__body-footer">\n          \x3c!-- ko component: { name: "sv-action-bar", params: { model: $data.footerToolbar } } --\x3e\n          \x3c!-- /ko --\x3e\n        </div>\n        \x3c!-- /ko --\x3e\n      </div>\n    </div>\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div data-bind="css: survey.css.progressButtonsContainerCenter">\n    <div data-bind="css: survey.css.progressButtonsContainer">\n        <div data-bind="css: getScrollButtonCss(true), click: clickScrollButton.bind($data, $element.nextElementSibling, true)" role="button"></div>\n        <div data-bind="css: survey.css.progressButtonsListContainer">\n            <ul data-bind="foreach: survey.visiblePages, css: survey.css.progressButtonsList">\n                <li data-bind="css: $parent.getListElementCss($index), click: $parent.isListElementClickable($index) ? $parent.clickListElement.bind($parent, $index) : null">\n                    <div data-bind="css: css.progressButtonsPageTitle, text: locNavigationTitle.koRenderedHtml() || name, attr: { title: locNavigationTitle.koRenderedHtml() || name }"></div>\n                    <div data-bind="css: css.progressButtonsPageDescription, text: locNavigationDescription.koRenderedHtml(), attr: { title: locNavigationDescription.koRenderedHtml() }"></div>\n                </li>\n            </ul>\n        </div>\n        <div data-bind="css: getScrollButtonCss(false), click: clickScrollButton.bind($data, $element.previousElementSibling, false)" role="button"></div>\n    </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div data-bind="css: model.getProgressCssClasses()">\n    <div data-bind="css: model.css.progressBar, style: { width: model.progressValue + \'%\' }"\n        role="progressbar" aria-valuemin="0" aria-valuemax="100">\n        <span data-bind="text: model.progressText, css: getProgressTextInBarCss(model.css)"></span>\n    </div>\n    <span data-bind="text: model.progressText, css: getProgressTextUnderBarCss(model.css)"></span>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div data-bind="css: containerCss">\n    <sv-list params="model: listModel"></sv-list>\n</div>';
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko if: components.length > 0 --\x3e\n\x3c!-- ko if: $data.needRenderWrapper --\x3e\n<div data-bind="css: css">\n  \x3c!-- ko foreach: components --\x3e\n  \x3c!-- ko if: $data.component && !$data.template --\x3e\n  \x3c!-- ko component: { name: component, params: { survey: $parent.survey, model: $data.data } } --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: $data.template --\x3e\n  \x3c!-- ko template: { name: template, data: $data.data } --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n</div>\n\x3c!-- /ko --\x3e\n\x3c!-- ko ifnot: $data.needRenderWrapper --\x3e\n  \x3c!-- ko foreach: components --\x3e\n  \x3c!-- ko if: $data.component && !$data.template --\x3e\n  \x3c!-- ko component: { name: component, params: { survey: $parent.survey, model: $data.data } } --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: $data.template --\x3e\n  \x3c!-- ko template: { name: template, data: $data.data } --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                "\x3c!-- ko if: templateData.name --\x3e\n  \x3c!-- ko template: { name: templateData.name, data: templateData.data, afterRender: templateData.afterRender } --\x3e\n  \x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e\n\x3c!-- ko ifnot: templateData.name --\x3e\n  \x3c!-- ko template: { nodes: templateData.nodes || $componentTemplateNodes, data: templateData.data, afterRender: templateData.afterRender } --\x3e\n  \x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e\n";
        },
        function (e, t) {
            e.exports =
                "\x3c!-- ko if: element.isTitleRenderedAsString --\x3e\n  \x3c!-- ko template: { name: 'survey-string', data: element.locTitle } --\x3e\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e\n\x3c!-- ko ifnot: element.isTitleRenderedAsString --\x3e\n  \x3c!-- ko if: element.isRequireTextOnStart --\x3e\n  <span\n    data-bind=\"css: element.koCss().requiredText || (element.koCss().panel && element.koCss().panel.requiredText), text: element.requiredText, attr: { 'aria-hidden': true }\"\n  ></span>\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: element.no --\x3e\n  <span\n    style=\"position: static;\"\n    data-bind=\"css: element.koCss().number || (element.koCss().panel && element.koCss().panel.number), text: element.no, attr: { 'aria-hidden': true }\"\n  ></span>\n  <span>&nbsp</span>\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: element.isRequireTextBeforeTitle --\x3e\n  <span\n    data-bind=\"css: element.koCss().requiredText || (element.koCss().panel && element.koCss().panel.requiredText), text: element.requiredText, attr: { 'aria-hidden': true }\"\n  ></span>\n  <span>&nbsp</span>\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko template: { name: 'survey-string', data: element.locTitle } --\x3e\x3c!-- /ko --\x3e\n  \x3c!-- ko if: element.isRequireTextAfterTitle --\x3e\n  <span>&nbsp</span>\n  <span\n    data-bind=\"css: element.koCss().requiredText || (element.koCss().panel && element.koCss().panel.requiredText), text: element.requiredText, attr: { 'aria-hidden': true }\"\n  ></span>\n  \x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e";
        },
        function (e, t) {
            e.exports =
                "\x3c!-- ko ifnot: element.hasTitleActions --\x3e\n  \x3c!-- ko component: { name: 'survey-element-title-content', params: {element: element } } --\x3e\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e\n\x3c!-- ko if: element.hasTitleActions --\x3e\n<div class=\"sv-title-actions\">\n  <span class=\"sv-title-actions__title\">\n    \x3c!-- ko component: { name: 'survey-element-title-content', params: {element: element } } --\x3e\x3c!-- /ko --\x3e\n  </span>\n  \x3c!-- ko component: { name: 'sv-action-bar', params: { model: toolbar } } --\x3e\n  \x3c!-- /ko --\x3e\n</div>\n\x3c!-- /ko --\x3e";
        },
        function (e, t) {
            e.exports =
                '\x3c!-- <input class="sv-string-editor" data-bind="value: editValue" /> --\x3e\n\n\x3c!-- ko ifnot: koHasHtml --\x3e\n<span class="sv-string-editor" data-bind="text: editValue, event: { blur: onInput, click: onClick, clickBubble: false }" contenteditable="true"></span>\n\x3c!-- /ko --\x3e\n\x3c!-- ko if: koHasHtml --\x3e\n<span class="sv-string-editor" data-bind="html: editValue, event: { blur: onInput, click: onClick, clickBubble: false }" contenteditable="true"></span>\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko ifnot: locString.koHasHtml --\x3e\n<span class="sv-string-viewer" data-bind="text: locString.koRenderedHtml"></span>\n\x3c!-- /ko --\x3e\n\x3c!-- ko if: locString.koHasHtml --\x3e\n<span class="sv-string-viewer" data-bind="html: locString.koRenderedHtml"></span>\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko with: survey --\x3e\n<div data-bind="css: logoClassNames">\n  <img data-bind="css: css.logoImage, attr: { src: locLogo.koRenderedHtml, width: logoWidth ? logoWidth : undefined, height: logoHeight ? logoHeight : undefined, alt: locTitle.renderedHtml }, style: { objectFit: logoFit }">\n</div>\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                '<div class="sv-skeleton-element" data-bind="attr: { id: element.id }">\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div data-bind="text: counter.remainingCharacterCounter, css: remainingCharacterCounter"></div>';
        },
        function (e, t) {
            e.exports =
                "<div data-bind=\"css: question.cssClasses.rootDropdown\">\n  \x3c!-- ko component: { name: 'sv-dropdown', params: { question: question } } --\x3e\n  \x3c!-- /ko --\x3e\n</div>\n";
        },
        function (e, t) {
            e.exports =
                "<label data-bind=\"css: question.getItemClassByText(item.itemValue, item.text)\">\n  <input\n  type=\"radio\"\n  class=\"sv-visuallyhidden\"\n  data-bind=\"attr: { name: question.name, id: question.getInputId(index), value: item.value, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy }, checkedValue: item.value, enable: !question.isInputReadOnly, event: { click: function(data, event) { question.setValueFromClick(event.target.value); return true; } }\"\n  />\n  <span data-bind=\"css: question.koCss().itemText\">\n  \x3c!-- ko template: { name: 'survey-string', data: item.locText } --\x3e\n  \x3c!-- /ko --\x3e\n  </span>\n</label>\n";
        },
        function (e, t) {
            e.exports =
                "<label data-bind=\"css: question.getItemClass(item.itemValue, item.highlight), event: { mouseover: function () { question.onItemMouseIn(item); }, mouseleave: function () { question.onItemMouseOut(item);} }\">\n  <input\n  type=\"radio\"\n  class=\"sv-visuallyhidden\"\n  data-bind=\"attr: { name: question.name, id: question.getInputId(index), value: item.value, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy }, checkedValue: item.value, enable: !question.isInputReadOnly, event: { click: function(data, event) { question.setValueFromClick(event.target.value); return true; } }\"\n  />\n  \x3c!-- ko component: { name: 'sv-svg-icon', params: { css: 'sv-star', iconName: question.itemStarIcon, size: 'auto', title: item.text } } --\x3e\x3c!-- /ko --\x3e\n  \x3c!-- ko component: { name: 'sv-svg-icon', params: { css: 'sv-star-2', iconName: question.itemStarIconAlt, size: 'auto', title: item.text } } --\x3e\x3c!-- /ko --\x3e\n</label>";
        },
        function (e, t) {
            e.exports =
                "<label data-bind=\"style: question.getItemStyle(item.itemValue, item.highlight), css: question.getItemClass(item.itemValue, item.highlight), event: { mouseover: function () { question.onItemMouseIn(item); }, mouseleave: function () { question.onItemMouseOut(item);} }\">\n  <input\n  type=\"radio\"\n  class=\"sv-visuallyhidden\"\n  data-bind=\"attr: { name: question.name, id: question.getInputId(index), value: item.value, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy }, checkedValue: item.value, enable: !question.isInputReadOnly, event: { click: function(data, event) { question.setValueFromClick(event.target.value); return true; } }\"\n  />\n  \x3c!-- ko component: { name: 'sv-svg-icon', params: { iconName: question.getItemSmileyIconName(item.itemValue), size: 'auto', title: item.text } } --\x3e\x3c!-- /ko --\x3e\n</label>";
        },
        function (e, t) {
            e.exports =
                "<div data-bind=\"css: question.koCss().selectWrapper\">\n  \x3c!-- ko ifnot: question.isReadOnly --\x3e\n  <div data-bind=\"css: question.getControlClass(),\n    click: click, \n    event: { keydown: keyhandler, blur: blur },\n    attr: { \n      id: question.inputId, \n      required: question.isRequired, \n      tabindex: model.inputReadOnly ? undefined : 0,\n      disabled: question.isInputReadOnly,\n      role: question.ariaRole,\n      'aria-required': question.ariaRequired, \n      'aria-label': question.ariaLabel, \n      'aria-invalid': question.ariaInvalid, \n      'aria-describedby': question.ariaDescribedBy,\n      'aria-expanded': question.ariaExpanded ? 'true' : 'false',\n      'aria-controls': model.listElementId,\n      'aria-activedescendant': model.ariaActivedescendant,\n    },\">\n    \x3c!-- ko if: model.showHintPrefix --\x3e\n    <div data-bind=\"css: question.koCss().hintPrefix\">\n      <span data-bind=\"text: model.hintStringPrefix\"></span>\n    </div>\n    \x3c!-- /ko --\x3e\n    <div data-bind=\"css: question.koCss().controlValue\">\n      \x3c!-- ko if: model.showHintString --\x3e\n      <div data-bind=\"css: question.koCss().hintSuffix\">\n      <span style=\"visibility: hidden\" data-bind=\"text: model.inputStringRendered\"></span>\n      <span data-bind=\"text: model.hintStringSuffix\"></span>\n      </div>\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: question.showInputFieldComponent --\x3e\n      \x3c!-- ko component: { name: question.inputFieldComponentName, params: { item: model.getSelectedAction(), question: question } } --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: question.showSelectedItemLocText --\x3e\n      \x3c!-- ko template: { name: 'survey-string', data: question.selectedItemLocText } --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      <input type=\"text\" autocomplete=\"off\" data-bind=\"\n      textInput: model.inputStringRendered, \n      css: question.cssClasses.filterStringInput, \n      attr: { \n        'aria-label': question.placeholder,\n        'aria-expanded': question.ariaExpanded ? 'true' : 'false',\n        'aria-controls': model.listElementId,\n        'aria-activedescendant': model.ariaActivedescendant,\n        placeholder: model.placeholderRendered, \n        readonly: !model.searchEnabled, \n        role: model.filterStringEnabled ? question.ariaRole : undefined,\n        tabindex: model.inputReadOnly ? undefined : -1,\n        disabled: question.isInputReadOnly,\n        id: question.getInputId(), \n        inputmode: model.inputMode\n      },\n      event: { blur: blur, focus: focus }\"></input>\n    </div>\n    \x3c!-- ko if: (question.allowClear && question.cssClasses.cleanButtonIconId) --\x3e\n    <div data-bind=\"css: question.koCss().cleanButton, click: clear, visible: !question.isEmpty() \">\n      \x3c!-- ko component: { name: 'sv-svg-icon', params: { css: question.cssClasses.cleanButtonSvg, iconName: question.cssClasses.cleanButtonIconId, size: 'auto', title: question.clearCaption } } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- ko component: { name: \"sv-popup\", params: { model: model.popupModel }} --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: question.isReadOnly --\x3e\n  <div disabled data-bind=\"css: question.getControlClass(), attr: { id: question.inputId }, \">\n    \x3c!-- ko if: question.selectedItemLocText --\x3e\n    \x3c!-- ko template: { name: 'survey-string', data: question.selectedItemLocText } --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    <div data-bind=\"text: question.readOnlyText\"></div>\n  </div>\n  \x3c!-- /ko --\x3e\n</div>";
        },
        function (e, t) {
            e.exports =
                "<div data-bind=\"css: question.renderCssRoot\">\n  <div data-bind=\"css: question.koCss().selectWrapper\">\n    \x3c!-- ko ifnot: question.isReadOnly --\x3e\n    <select data-bind=\"options: question.visibleChoices, \n    optionsValue: 'value', \n    optionsText: 'koText', \n    optionsCaption: question.allowClear ? question.locPlaceholder.koRenderedHtml : undefined, \n    optionsAfterRender: question.koDisableOption, \n    attr: {id: question.inputId, autocomplete: question.autocomplete, required: question.isRequired, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy},\n    click: click,\n    event: { keyup: keyup },\n    disable: question.isInputReadOnly, \n    value: question.renderedValue, \n    valueAllowUnset: true, \n    css: question.getControlClass()\">\n    </select>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: question.isReadOnly --\x3e\n    <div disabled\n      data-bind=\"attr: {id: question.inputId}, text: question.readOnlyText, css: question.getControlClass()\">\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- ko if: question.isOtherSelected --\x3e\n  <div data-bind=\"css: question.getCommentAreaCss(true), template: { name: 'survey-other', data: {'question': question, 'visible': question.isOtherSelected } }, style: {display: question.isFlowLayout ? 'inline': ''}\">\n  </div>\n  \x3c!-- /ko --\x3e\n</div>";
        },
        function (e, t) {
            e.exports =
                '<div class="sv-tagbox__item">\n  <div class="sv-tagbox__item-text">\n    \x3c!-- ko template: { name: \'survey-string\', data: item.locText } --\x3e\n    \x3c!-- /ko --\x3e\n  </div>\n  <div data-bind="css: question.cssClasses.cleanItemButton, click: removeItem">\n    <sv-svg-icon params="iconName: question.cssClasses.cleanItemButtonIconId, css: question.cssClasses.cleanItemButtonSvg, size:\'auto\' "></sv-svg-icon>\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                "<div data-bind=\"css: question.koCss().selectWrapper\">\n  \x3c!-- ko ifnot: question.isReadOnly --\x3e\n  <div data-bind=\"css: question.getControlClass(),\n    click: click, \n    event: { keydown: keyhandler, blur: blur },\n    attr: { \n      id: question.inputId, \n      required: question.isRequired, \n      tabindex: model.inputReadOnly ? undefined : 0,\n      disabled: question.isInputReadOnly,\n      role: question.ariaRole,\n      'aria-required': question.ariaRequired, \n      'aria-label': question.ariaLabel, \n      'aria-invalid': question.ariaInvalid, \n      'aria-describedby': question.ariaDescribedBy,\n      'aria-expanded': question.ariaExpanded ? 'true' : 'false',\n      'aria-controls': model.listElementId,\n      'aria-activedescendant': model.ariaActivedescendant, \n    },\">\n    <div data-bind=\"css: question.cssClasses.controlValue\">\n      \x3c!-- ko foreach: question.selectedChoices --\x3e\n      \x3c!-- ko component: { name: 'sv-tagbox-item', params: { item: $data, question: question } } --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      <div data-bind=\"css: question.koCss().hint\">\n        \x3c!-- ko if: model.showHintPrefix --\x3e\n        <div data-bind=\"css: question.koCss().hintPrefix\">\n          <span data-bind=\"text: model.hintStringPrefix\"></span>\n        </div>\n        \x3c!-- /ko --\x3e\n        <div data-bind=\"css: question.koCss().hintSuffixWrapper\">\n          \x3c!-- ko if: model.showHintString --\x3e\n          <div data-bind=\"css: question.koCss().hintSuffix\">\n            <span style=\"visibility: hidden\" data-bind=\"text: model.inputStringRendered\"></span>\n            <span data-bind=\"text: model.hintStringSuffix\"></span>\n            </div>\n          \x3c!-- /ko --\x3e\n          <input type=\"text\" autocomplete=\"off\" data-bind=\"textInput: model.inputStringRendered, \n          css: question.cssClasses.filterStringInput, \n          attr: { \n            inputmode: model.inputMode,\n            size: !model.inputStringRendered ? 1 : null, \n            id: question.getInputId(), \n            role: model.filterStringEnabled ? question.ariaRole : undefined,\n            'aria-label': question.placeholder,\n            'aria-expanded': question.ariaExpanded ? 'true' : 'false',\n            'aria-controls': model.listElementId,\n            'aria-activedescendant': model.ariaActivedescendant,\n            placeholder: model.filterStringPlaceholder, \n            disabled: question.isInputReadOnly,\n            readonly: !model.searchEnabled \n          },\n          event: { keydown: inputKeyHandler, blur: blur, focus: focus }\"></input>\n        </div>\n      </div>\n    </div>\n    \x3c!-- ko if: (question.allowClear && question.cssClasses.cleanButtonIconId) --\x3e\n    <div data-bind=\"css: question.koCss().cleanButton, click: clear, visible: !question.isEmpty() \">\n      \x3c!-- ko component: { name: 'sv-svg-icon', params: { css: question.cssClasses.cleanButtonSvg, iconName: question.cssClasses.cleanButtonIconId, size: 'auto', title: question.clearCaption } } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- ko component: { name: \"sv-popup\", params: { model: model.popupModel }} --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: question.isReadOnly --\x3e\n  <div disabled data-bind=\"css: question.getControlClass(), attr: { id: question.inputId }, \">\n    <div data-bind=\"text: question.readOnlyText\"></div>\n  </div>\n  \x3c!-- /ko --\x3e\n</div>";
        },
        function (e, t) {
            e.exports =
                '<div data-bind="css: model.cssClasses.root">\n  \x3c!-- ko if: $data.model.showFilter --\x3e\n  <div data-bind="css: model.cssClasses.filter">\n    <div data-bind="css: model.cssClasses.filterIcon">\n      \x3c!-- ko component: { name: \'sv-svg-icon\', params: { iconName: \'icon-search\', size: \'auto\' }  } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    <input type="text" \n      data-bind="css: model.cssClasses.filterInput, textInput: model.filterString, attr: { placeholder: model.filterStringPlaceholder, \'aria-label\': model.filterStringPlaceholder }, event: { keyup: function (model, event) { $data.model.goToItems(event); } }"></input>\n    \x3c!-- ko if: $data.model.showSearchClearButton && !!$data.model.filterString --\x3e\n    <button data-bind="event: { click: (_, event) => { model.onClickSearchClearButton(event); } }, css: model.cssClasses.searchClearButtonIcon">\n      \x3c!-- ko component: { name: \'sv-svg-icon\', params: { iconName: \'icon-searchclear\', size: \'auto\' }  } --\x3e\n      \x3c!-- /ko --\x3e\n    </button>\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- /ko --\x3e\n  <div data-bind="css: model.cssClasses.emptyContainer, visible: $data.model.isEmpty">\n    <div data-bind="css: model.cssClasses.emptyText, text: model.emptyMessage, attr: { \'aria-label\': model.emptyMessage }"></div>\n  </div>\n  \x3c!-- ko if: $data.model.renderElements --\x3e\n  <ul role="listbox"\n    data-bind="css: model.cssClasses.itemsContainer, visible: !$data.model.isEmpty, attr: { id: model.elementId },\n    event: { mousedown: function (data, e) { e.preventDefault(); }, keydown: function(data, e) { $data.model.onKeyDown(event); return true; }, mousemove: function(data, e) { $data.model.onMouseMove(event); return true; } }">\n    \x3c!-- ko template: { foreach: model.renderedActions, afterRender: $data.afterItemRender } --\x3e\n    \x3c!-- ko component: { name: \'sv-list-item\', params: { item: $data, model: $parent.model } } --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n  </ul>\n  \x3c!-- /ko --\x3e\n</div>';
        },
        function (e, t) {
            e.exports =
                '\r\n<li role="option"\r\ndata-bind="css: $data.model.getItemClass($data.item), attr: { id: $data.item.elementId, \'aria-selected\': $data.model.isItemSelected($data.item) ? \'true\' : \'false\' }, click: itemClick, key2click, visible: $data.model.isItemVisible($data.item), event: { pointerdown: function (model, event) { $data.model.onPointerDown(event, $data.item); } }">  \x3c!-- ko if: $data.item.needSeparator --\x3e\r\n  <div data-bind="css: $data.model.cssClasses.itemSeparator"></div>\r\n  \x3c!-- /ko --\x3e\r\n  <div data-bind="style: { paddingInlineStart: $data.model.getItemIndent($data.item) }, css: $data.model.cssClasses.itemBody">\r\n  \x3c!-- ko ifnot: $data.item.component --\x3e\r\n  \x3c!-- ko if: $data.item.iconName --\x3e\r\n  <sv-svg-icon data-bind="css: $data.model.cssClasses.itemIcon" params="iconName: $data.item.iconName, size: 24"></sv-svg-icon>\r\n  \x3c!-- /ko --\x3e\r\n  \x3c!-- ko template: { name: \'survey-string\', data: $data.item.locTitle } --\x3e\x3c!-- /ko --\x3e\r\n  \x3c!-- /ko --\x3e\r\n  \x3c!-- ko if: $data.item.component --\x3e\r\n  \x3c!-- ko component: { name: $data.item.component, params: { item: $data.item } } --\x3e\r\n  \x3c!-- /ko --\x3e\r\n  \x3c!-- /ko --\x3e\r\n  </div>\r\n</li>';
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko if: hasIcon --\x3e\n<svg class="sv-svg-icon" data-bind="css: css, attr: { \'aria-label\': title }" role="img"><use></use></svg>\n\x3c!-- /ko --\x3e\n';
        },
        function (e, t) {
            e.exports =
                '<button\n  type="button"\n  data-bind="click: question.koRemoveRowClick, disable: question.isInputReadOnly, css: question.getRemoveRowButtonCss()"\n>\n  \x3c!-- ko template: { name: \'survey-string\', data: question.locRemoveRowText } --\x3e\x3c!-- /ko --\x3e\n  <span data-bind="css: question.koCss().iconRemove"></span>\n</button>\n';
        },
        function (e, t) {
            e.exports =
                "<button\ntype=\"button\"\ndata-bind=\"css:question.getDetailPanelButtonCss(row), click:row.showHideDetailPanelClick, attr:{ 'aria-expanded': question.getIsDetailPanelShowing($data.row) ? 'true': 'false', 'aria-controls': question.getIsDetailPanelShowing($data.row) ? row.detailPanelId: false}\"\n>\n<span\n  data-bind=\"css: question.getDetailPanelIconCss(row), component: { name: 'sv-svg-icon', params: {iconName: question.getDetailPanelIconId(row)} }\"\n>\n</span>\n</button>\n\x3c!-- ko if: question.detailPanelMode === \"popup\" && question.getKoPopupIsVisible(row) --\x3e\n<sv-popup\nparams=\"contentComponentName: 'sv-panel', contentComponentData: { question: row.detailPanel, onItemSelect: function(){} }, isVisible: question.getKoPopupIsVisible(row), isModal: true, onHide: function() { row.hideDetailPanel() }, verticalPosition: 'top', horizontalPosition: 'right'\"\n></sv-popup>\n\x3c!-- /ko --\x3e";
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko if: question.iconDragElement --\x3e\n<svg data-bind="css: question.koCss().dragElementDecorator">\n  <use data-bind="attr: { \'xlink:href\': question.iconDragElement }" xlink:href=\'\'></use>\n</svg>\n\x3c!-- /ko --\x3e\n\x3c!-- ko ifnot: question.iconDragElement --\x3e\n<span data-bind="css: question.koCss().iconDrag"></span>\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                '<label role="radio" data-bind="css: model.css.label, attr: { title: model.caption.koRenderedHtml }">\r\n  <input type="radio"\r\n    data-bind="attr: { name: model.name, id: model.id, \'aria-required\': model.isRequired, \'aria-label\': model.caption.koRenderedHtml, role: \'radio\', \'aria-invalid\': model.hasErrors, \'aria-describedby\': model.describeBy}, checkedValue: model.value, checked: model.question.renderedValue, disable: model.readOnly, css: model.css.control" />\r\n  <div data-bind="css: model.css.decorator">\r\n    \x3c!-- ko if: !!model.iconName--\x3e\r\n    <sv-svg-icon data-bind="css: model.css.icon" params="iconName: model.iconName, size: model.iconSize"></sv-svg-icon>\r\n    \x3c!-- /ko --\x3e\r\n    \x3c!-- ko if: model.showCaption --\x3e\r\n    <span data-bind="css: model.css.caption, attr: { title: model.caption.koRenderedHtml }">\r\n      \x3c!-- ko template: { name: \'survey-string\', data: model.caption } --\x3e\r\n      \x3c!-- /ko --\x3e\r\n    </span>\r\n    \x3c!-- /ko --\x3e\r\n  </div>\r\n</label>';
        },
        function (e, t) {
            e.exports =
                "\x3c!-- ko if: question.hasVisibleErrors --\x3e\n  \x3c!-- ko template: { name: 'survey-question-errors', data: question, afterRender: afterRender } --\x3e\n  \x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e";
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko with: $data.item  --\x3e\n  <input type="button" data-bind="event: { mousedown: $data.data && $data.data.mouseDown }, value: $data.title, click: $data.action, visible: $data.visible, css: $data.innerCss, disable: $data.disabled, attr: { title: $data.getTooltip() }"/>\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko if: question.koCanAddPanel --\x3e\n<button type="button" data-bind="click: question.koAddPanelClick, css: question.koAddButtonCss, visible: question.koCanAddPanel">\n  <span data-bind="css: question.koCss().buttonAddText, text: question.panelAddText"></span>\n</button>\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                "<div data-bind=\"attr: { title: question.panelNextText }, click: question.koNextPanelClick, css: question.koNextButtonCss\">\n    \x3c!-- ko component: { name: 'sv-svg-icon', params: { iconName: question.koCss().progressBtnIcon, size: 'auto' } } --\x3e\x3c!-- /ko --\x3e\n</div>";
        },
        function (e, t) {
            e.exports =
                "<div data-bind=\"attr: { title: question.panelPrevText }, click: question.koPrevPanelClick, css: question.koPrevButtonCss\">\n    \x3c!-- ko component: { name: 'sv-svg-icon', params: { iconName: question.koCss().progressBtnIcon, size: 'auto' } } --\x3e\x3c!-- /ko --\x3e\n</div>";
        },
        function (e, t) {
            e.exports =
                '<div data-bind="text: question.koProgressText, css: question.koCss().progressText"></div>';
        },
        function (e, t) {
            e.exports =
                '<button type="button" data-bind="click: function() { question.koRemovePanelClick(panel); }, css: question.getPanelRemoveButtonCss()">\n  <span data-bind="css: question.koCss().buttonRemoveText, text: question.panelRemoveText"></span>\n  <span data-bind="css: question.koCss().iconRemove"></span>\n</button>';
        },
        function (e, t) {
            e.exports =
                '<div class="sv-brand-info">\n  <a class="sv-brand-info__logo" href="https://surveyjs.io/?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=landing_page"><img src="https://surveyjs.io/Content/Images/poweredby.svg"/></a>\n  <div class="sv-brand-info__text">Try and see how easy it is to <a href="https://surveyjs.io/create-survey?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=create_survey">create a survey</a></div>\n  <div class="sv-brand-info__terms"><a href="https://surveyjs.io/TermsOfUse">Terms of Use & Privacy Statement</a></div>\n</div>\n';
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko if: notifier.isDisplayed --\x3e\n<div data-bind="css: notifier.css, style: { visibility: notifier.active ? \'visible\' : \'hidden\' }" role="alert" aria-live="polite">\n  <span data-bind="text: notifier.message"></span>\n  \x3c!-- ko component: { name: "sv-action-bar", params: { model: notifier.actionBar } } --\x3e\n  \x3c!-- /ko --\x3e\n</div>\n\x3c!-- /ko --\x3e';
        },
        function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "Survey", function () {
                    return u;
                }),
                n.d(t, "Model", function () {
                    return u;
                }),
                n.d(t, "PopupSurvey", function () {
                    return v;
                }),
                n.d(t, "SurveyWindow", function () {
                    return f;
                }),
                n.d(t, "ImplementorBase", function () {
                    return c;
                }),
                n.d(t, "QuestionRow", function () {
                    return h;
                }),
                n.d(t, "Page", function () {
                    return q;
                }),
                n.d(t, "Panel", function () {
                    return b;
                }),
                n.d(t, "FlowPanel", function () {
                    return C;
                }),
                n.d(t, "QuestionImplementor", function () {
                    return R;
                }),
                n.d(t, "QuestionSelectBaseImplementor", function () {
                    return _;
                }),
                n.d(t, "QuestionCheckboxBaseImplementor", function () {
                    return O;
                }),
                n.d(t, "QuestionCheckbox", function () {
                    return S;
                }),
                n.d(t, "QuestionTagbox", function () {
                    return D;
                }),
                n.d(t, "QuestionRanking", function () {
                    return B;
                }),
                n.d(t, "QuestionComment", function () {
                    return E;
                }),
                n.d(t, "QuestionDropdown", function () {
                    return j;
                }),
                n.d(t, "QuestionFile", function () {
                    return F;
                }),
                n.d(t, "QuestionHtml", function () {
                    return W;
                }),
                n.d(t, "QuestionMatrix", function () {
                    return K;
                }),
                n.d(t, "QuestionMatrixDropdown", function () {
                    return Z;
                }),
                n.d(t, "QuestionMatrixDynamicImplementor", function () {
                    return Y;
                }),
                n.d(t, "QuestionMatrixDynamic", function () {
                    return ee;
                }),
                n.d(t, "QuestionPanelDynamic", function () {
                    return oe;
                }),
                n.d(t, "MultipleTextItem", function () {
                    return ce;
                }),
                n.d(t, "QuestionMultipleText", function () {
                    return de;
                }),
                n.d(t, "QuestionRadiogroup", function () {
                    return pe;
                }),
                n.d(t, "QuestionRating", function () {
                    return ve;
                }),
                n.d(t, "QuestionRatingImplementor", function () {
                    return xe;
                }),
                n.d(t, "QuestionText", function () {
                    return ae;
                }),
                n.d(t, "QuestionBoolean", function () {
                    return ke;
                }),
                n.d(t, "QuestionEmpty", function () {
                    return ye;
                }),
                n.d(t, "QuestionExpression", function () {
                    return qe;
                }),
                n.d(t, "QuestionImagePicker", function () {
                    return we;
                }),
                n.d(t, "PopupSurveyImplementor", function () {
                    return x;
                }),
                n.d(t, "SurveyTemplateText", function () {
                    return r;
                }),
                n.d(t, "QuestionImage", function () {
                    return Ie;
                }),
                n.d(t, "QuestionSignaturePad", function () {
                    return Oe;
                }),
                n.d(t, "QuestionCustom", function () {
                    return Me;
                }),
                n.d(t, "QuestionButtonGroup", function () {
                    return De;
                }),
                n.d(t, "ActionBarItemViewModel", function () {}),
                n.d(t, "ActionBarItemDropdownViewModel", function () {}),
                n.d(t, "ActionBarSeparatorViewModel", function () {}),
                n.d(t, "ActionContainerImplementor", function () {
                    return je;
                }),
                n.d(t, "CheckboxViewModel", function () {}),
                n.d(t, "BooleanRadioItemViewModel", function () {}),
                n.d(t, "BooleanRadioViewModel", function () {}),
                n.d(t, "PanelViewModel", function () {
                    return We;
                }),
                n.d(t, "PopupViewModel", function () {
                    return Ke;
                }),
                n.d(t, "showModal", function () {
                    return Ue;
                }),
                n.d(t, "showDialog", function () {
                    return Ge;
                }),
                n.d(t, "ProgressButtonsViewModel", function () {
                    return Je;
                }),
                n.d(t, "ProgressViewModel", function () {
                    return Ye;
                }),
                n.d(t, "ComponentsContainer", function () {
                    return ot;
                }),
                n.d(t, "TitleElementViewModel", function () {}),
                n.d(t, "TitleContentViewModel", function () {}),
                n.d(t, "TitleActionViewModel", function () {}),
                n.d(t, "StringEditorViewModel", function () {
                    return ct;
                }),
                n.d(t, "StringViewerViewModel", function () {}),
                n.d(t, "LogoImageViewModel", function () {}),
                n.d(t, "Skeleton", function () {}),
                n.d(t, "CharacterCounterComponent", function () {}),
                n.d(t, "RatingDropdownViewModel", function () {}),
                n.d(t, "RatingItemViewModel", function () {}),
                n.d(t, "RatingItemStarViewModel", function () {}),
                n.d(t, "RatingItemSmileyViewModel", function () {}),
                n.d(t, "DropdownViewModel", function () {}),
                n.d(t, "DropdownSelectViewModel", function () {}),
                n.d(t, "TagboxViewComponent", function () {}),
                n.d(t, "TagboxViewModel", function () {}),
                n.d(t, "ListItemViewComponent", function () {}),
                n.d(t, "ListViewComponent", function () {}),
                n.d(t, "SvgIconViewModel", function () {}),
                n.d(
                    t,
                    "SurveyQuestionMatrixDynamicRemoveButton",
                    function () {}
                ),
                n.d(t, "SurveyQuestionMatrixDetailButton", function () {}),
                n.d(
                    t,
                    "SurveyQuestionMatrixDynamicDragDropIcon",
                    function () {}
                ),
                n.d(t, "ButtonGroupItemViewModel", function () {
                    return Tt;
                }),
                n.d(t, "TooltipErrorViewModel", function () {
                    return St;
                }),
                n.d(t, "SurveyNavigationButton", function () {}),
                n.d(t, "SurveyQuestionPaneldynamicActioons", function () {}),
                n.d(t, "BrandInfoComponent", function () {}),
                n.d(t, "NotifierViewModel", function () {}),
                n.d(t, "SurveyModel", function () {
                    return s.SurveyModel;
                }),
                n.d(t, "SurveyWindowModel", function () {
                    return s.SurveyWindowModel;
                }),
                n.d(t, "settings", function () {
                    return s.settings;
                }),
                n.d(t, "surveyLocalization", function () {
                    return s.surveyLocalization;
                }),
                n.d(t, "surveyStrings", function () {
                    return s.surveyStrings;
                });
            var o,
                i = n(1),
                s = n(0),
                a = n(2),
                r = (function () {
                    function e() {}
                    return (
                        (e.prototype.addText = function (e, t, n) {
                            (t = this.getId(t, n)),
                                (this.text =
                                    this.text +
                                    '<script type="text/html" ' +
                                    t +
                                    ">" +
                                    e +
                                    "</script>");
                        }),
                        (e.prototype.replaceText = function (e, t, n) {
                            void 0 === n && (n = null);
                            var o = this.getId(t, n),
                                i = this.text.indexOf(o);
                            if (i < 0) this.addText(e, t, n);
                            else if (!((i = this.text.indexOf(">", i)) < 0)) {
                                var s = i + 1;
                                (i = this.text.indexOf("</script>", s)) < 0 ||
                                    (this.text =
                                        this.text.substring(0, s) +
                                        e +
                                        this.text.substring(i));
                            }
                        }),
                        (e.prototype.getId = function (e, t) {
                            var n = 'id="survey-' + e;
                            return t && (n += "-" + t), n + '"';
                        }),
                        Object.defineProperty(e.prototype, "text", {
                            get: function () {
                                return a;
                            },
                            set: function (e) {
                                a = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        e
                    );
                })(),
                c = (function () {
                    function e(t) {
                        (this.element = t),
                            (this.implementedMark = "__surveyImplementedKo"),
                            t[this.implementedMark] ||
                                (t.iteratePropertiesHash(function (n, o) {
                                    e.doIterateProperties(t, n, o);
                                }),
                                (t.createArrayCoreHandler = function (e, n) {
                                    var o = i.observableArray();
                                    return (
                                        (o().onArrayChanged = function () {
                                            t.isLoadingFromJson ||
                                                t.isDisposed ||
                                                o.notifySubscribers();
                                        }),
                                        (e[n] = o),
                                        o()
                                    );
                                }),
                                (t.getPropertyValueCoreHandler = function (
                                    e,
                                    t
                                ) {
                                    return (
                                        void 0 === e[t] &&
                                            (e[t] = i.observable()),
                                        "function" == typeof e[t]
                                            ? e[t]()
                                            : e[t]
                                    );
                                }),
                                (t.setPropertyValueCoreHandler = function (
                                    e,
                                    t,
                                    n
                                ) {
                                    void 0 !== e[t]
                                        ? e[t](n)
                                        : (e[t] = i.observable(n));
                                }),
                                (t[this.implementedMark] = !0));
                    }
                    return (
                        (e.doIterateProperties = function (e, t, n) {
                            var o = t[n];
                            "function" !== o &&
                                (Array.isArray(o)
                                    ? ((t[n] = i.observableArray(o)),
                                      (o.onArrayChanged = function () {
                                          e.isLoadingFromJson ||
                                              e.isDisposed ||
                                              t[n].notifySubscribers();
                                      }))
                                    : (t[n] = i.observable(o)));
                        }),
                        (e.prototype.dispose = function () {
                            this.element.iteratePropertiesHash(function (e, t) {
                                (e[t] = i.unwrap(e[t])),
                                    Array.isArray(e[t]) &&
                                        (e[t].onArrayChanged = void 0);
                            }),
                                (this.element.createArrayCoreHandler = void 0),
                                (this.element.getPropertyValueCoreHandler =
                                    void 0),
                                (this.element.setPropertyValueCoreHandler =
                                    void 0),
                                delete this.element[this.implementedMark];
                        }),
                        e
                    );
                })(),
                l =
                    ((o = function (e, t) {
                        return (o =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(e, t);
                    }),
                    function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Class extends value " +
                                    String(t) +
                                    " is not a constructor or null"
                            );
                        function n() {
                            this.constructor = e;
                        }
                        o(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((n.prototype = t.prototype), new n()));
                    });
            s.CustomWidgetCollection.Instance.onCustomWidgetAdded.add(function (
                e
            ) {
                e.widgetJson.isDefaultRender ||
                    (e.htmlTemplate ||
                        (e.htmlTemplate =
                            "<div>'htmlTemplate' attribute is missed.</div>"),
                    new r().replaceText(e.htmlTemplate, "widget", e.name));
            });
            var d = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.survey = t),
                            (n.survey.valueHashGetDataCallback = function (
                                e,
                                t
                            ) {
                                return (
                                    void 0 === e[t] && (e[t] = i.observable()),
                                    i.unwrap(e[t])
                                );
                            }),
                            (n.survey.valueHashSetDataCallback = function (
                                e,
                                t,
                                n
                            ) {
                                i.isWriteableObservable(e[t])
                                    ? e[t](n)
                                    : (e[t] = i.observable(n));
                            }),
                            (n.survey.valueHashDeleteDataCallback = function (
                                e,
                                t
                            ) {
                                i.isWriteableObservable(e[t])
                                    ? e[t](void 0)
                                    : delete e[t];
                            }),
                            (n.survey.koTitleTemplate =
                                i.observable("survey-header")),
                            (n.survey.koAfterRenderPage = function (e, t) {
                                var o =
                                    s.SurveyElement.GetFirstNonTextElement(e);
                                o &&
                                    setTimeout(function () {
                                        i.tasks && i.tasks.runEarly(),
                                            n.survey.afterRenderPage(o);
                                    }, 0);
                            }),
                            (n.survey.koAfterRenderHeader = function (e, t) {
                                var o =
                                    s.SurveyElement.GetFirstNonTextElement(e);
                                o && n.survey.afterRenderHeader(o);
                            }),
                            (n.survey.disposeCallback = function () {
                                n.dispose();
                            }),
                            new c(n.survey.timerModel),
                            n
                        );
                    }
                    return (
                        l(t, e),
                        (t.prototype.render = function (e) {
                            if ((void 0 === e && (e = null), void 0 === i))
                                throw new Error(
                                    "knockoutjs library is not loaded."
                                );
                            var t = this.survey.activePage;
                            t && t.updateCustomWidgets(),
                                this.survey.updateElementCss(!1),
                                e &&
                                    "string" == typeof e &&
                                    (e = Object(s.getElement)(e)),
                                e && (this.renderedElement = e),
                                this.survey.startTimerFromUI(),
                                this.applyBinding();
                        }),
                        (t.prototype.applyBinding = function () {
                            this.renderedElement &&
                                (i.cleanNode(this.renderedElement),
                                i.renderTemplate(
                                    "survey-content",
                                    this.survey,
                                    {},
                                    this.renderedElement
                                ));
                        }),
                        (t.prototype.koEventAfterRender = function (e, t) {
                            t.needRenderIcons && s.SvgRegistry.renderIcons(),
                                t.afterRenderSurvey(e);
                        }),
                        (t.prototype.dispose = function () {
                            e.prototype.dispose.call(this),
                                this.renderedElement &&
                                    (i.cleanNode(this.renderedElement),
                                    (this.renderedElement.innerHTML = "")),
                                (this.survey.koAfterRenderPage = void 0),
                                (this.survey.koAfterRenderHeader = void 0),
                                this.survey.iteratePropertiesHash(function (
                                    e,
                                    t
                                ) {
                                    delete e[t];
                                });
                        }),
                        t
                    );
                })(c),
                u = (function (e) {
                    function t(t, n) {
                        void 0 === t && (t = null), void 0 === n && (n = null);
                        var o = e.call(this, t, n) || this;
                        return (o.implementor = new d(o)), o;
                    }
                    return (
                        l(t, e),
                        (t.prototype.render = function (e) {
                            void 0 === e && (e = null),
                                this.implementor.render(e);
                        }),
                        (t.prototype.getHtmlTemplate = function () {
                            return a;
                        }),
                        (t.prototype.makeReactive = function (e) {
                            new c(e);
                        }),
                        t
                    );
                })(s.SurveyModel);
            (s.LocalizableString.prototype.onCreating = function () {
                var e = this;
                (this.koHasHtml = i.observable(this.hasHtml)),
                    (this.koRenderedHtml = i.observable(this.renderedHtml)),
                    this.onStringChanged.add(function () {
                        var t = e.hasHtml;
                        e.koHasHtml(t),
                            e.koRenderedHtml(
                                t ? e.getHtmlValue() : e.calculatedText
                            );
                    });
            }),
                (s.ItemValue.prototype.onCreating = function () {
                    var e = this;
                    this.koText = i.pureComputed(function () {
                        return e.locText.koRenderedHtml();
                    });
                }),
                i.components.register("survey", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            var n = i.unwrap(e.survey);
                            return (
                                (function (e) {
                                    e.implementor ||
                                        ((e.implementor = new d(e)),
                                        (e.render = function (t) {
                                            void 0 === t && (t = null),
                                                e.implementor.render(t);
                                        }),
                                        (e.getHtmlTemplate = function () {
                                            return a;
                                        }),
                                        (e.makeReactive = function (e) {
                                            new c(e);
                                        }));
                                })(n),
                                setTimeout(function () {
                                    var e = document.createElement("div");
                                    t.element.appendChild(e), n.render(e);
                                }, 1),
                                e.survey
                            );
                        },
                    },
                    template: a,
                }),
                (i.bindingHandlers.surveyProp = {
                    update: function (e, t, n) {
                        var o = i.utils.unwrapObservable(t()) || {};
                        for (var s in o)
                            if ("string" == typeof s) {
                                var a = i.utils.unwrapObservable(o[s]);
                                e[s] = a;
                            }
                    },
                }),
                (s.SurveyModel.platform = "knockout");
            i.bindingHandlers.key2click = {
                init: function (e, t, n, o) {
                    var i = t() || { processEsc: !0, disableTabStop: !1 };
                    (o && o.disableTabStop) || (i && i.disableTabStop)
                        ? (e.tabIndex = -1)
                        : ((e.tabIndex = 0),
                          (e.onkeyup = function (e) {
                              return (
                                  e.preventDefault(),
                                  e.stopPropagation(),
                                  Object(s.doKey2ClickUp)(e, i),
                                  !1
                              );
                          }),
                          (e.onkeydown = function (e) {
                              return Object(s.doKey2ClickDown)(e, i);
                          }),
                          (e.onblur = function (e) {
                              return Object(s.doKey2ClickBlur)(e);
                          }));
                },
            };
            var p = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                m = n(43),
                x = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.window = t),
                            (n.window.showingChangedCallback = function () {
                                n.doShowingChanged();
                            }),
                            (n.window.doExpand = function () {
                                n.window.changeExpandCollapse();
                            }),
                            n
                        );
                    }
                    return (
                        p(t, e),
                        (t.prototype.doShowingChanged = function () {
                            var e = this.window.windowElement,
                                t = s.settings.environment.rootElement;
                            this.window.isShowing
                                ? ((e.innerHTML = this.template),
                                  i.cleanNode(e),
                                  i.applyBindings(this.window, e),
                                  t.appendChild(e))
                                : (t.removeChild(e), (e.innerHTML = ""));
                        }),
                        Object.defineProperty(t.prototype, "template", {
                            get: function () {
                                return this.window.templateValue
                                    ? this.window.templateValue
                                    : m;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        t
                    );
                })(c);
            s.PopupSurveyModel.prototype.onCreating = function () {
                this.implementor = new x(this);
            };
            var v = (function (e) {
                    function t(t, n) {
                        return (
                            void 0 === n && (n = null),
                            e.call(this, t, n) || this
                        );
                    }
                    return p(t, e), t;
                })(s.PopupSurveyModel),
                f = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return p(t, e), t;
                })(v),
                k = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                h = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        (n.panel = t), new c(n);
                        var o = n;
                        return (
                            (n.koElementAfterRender = function (e, t) {
                                return o.elementAfterRender(e, t);
                            }),
                            n
                        );
                    }
                    return (
                        k(t, e),
                        (t.prototype.getElementType = function (e) {
                            return e.isPanel
                                ? "survey-panel"
                                : "survey-question";
                        }),
                        (t.prototype.koAfterRender = function (e, t) {
                            for (var n = 0; n < e.length; n++) {
                                var o = e[n];
                                "#text" == o.nodeName && (o.data = "");
                            }
                        }),
                        (t.prototype.elementAfterRender = function (e, t) {
                            var n = this;
                            this.panel &&
                                this.panel.survey &&
                                setTimeout(function () {
                                    i.tasks && i.tasks.runEarly();
                                    var o =
                                        s.SurveyElement.GetFirstNonTextElement(
                                            e
                                        );
                                    if (o) {
                                        var a = t;
                                        a.isDisposed ||
                                            (a.isPanel && n.panel.survey
                                                ? n.panel.survey.afterRenderPanel(
                                                      t,
                                                      o
                                                  )
                                                : a.afterRender(o));
                                    }
                                }, 0);
                        }),
                        (t.prototype.rowAfterRender = function (e, t) {
                            if (!t.isNeedRender) {
                                var n = e[0].parentElement,
                                    o = setTimeout(function () {
                                        return t.startLazyRendering(n);
                                    }, 1);
                                i.utils.domNodeDisposal.addDisposeCallback(
                                    n,
                                    function () {
                                        clearTimeout(o),
                                            t.stopLazyRendering(),
                                            (t.isNeedRender =
                                                !t.isLazyRendering());
                                    }
                                );
                            }
                        }),
                        (t.prototype.dispose = function () {
                            e.prototype.dispose.call(this),
                                (this.koElementAfterRender = void 0);
                        }),
                        t
                    );
                })(s.QuestionRowModel),
                y = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.panel = t), n;
                    }
                    return k(t, e), t;
                })(c),
                b = (function (e) {
                    function t(t) {
                        void 0 === t && (t = "");
                        var n = e.call(this, t) || this;
                        n.onCreating();
                        var o = n;
                        return (
                            (n.koElementType = i.observable("survey-panel")),
                            (n.koCss = i.pureComputed(function () {
                                return o.cssClasses;
                            })),
                            (n.koErrorClass = i.pureComputed(function () {
                                return o.cssError;
                            })),
                            n
                        );
                    }
                    return (
                        k(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new y(this));
                        }),
                        (t.prototype.createRow = function () {
                            return new h(this);
                        }),
                        (t.prototype.onCreating = function () {}),
                        (t.prototype.onNumChanged = function (e) {
                            this.locTitle.strChanged();
                        }),
                        (t.prototype.dispose = function () {
                            this.koCss.dispose(),
                                this.koErrorClass.dispose(),
                                this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.PanelModel),
                q = (function (e) {
                    function t(t) {
                        void 0 === t && (t = "");
                        var n = e.call(this, t) || this;
                        return n.onCreating(), n;
                    }
                    return (
                        k(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new c(this));
                        }),
                        (t.prototype.createRow = function () {
                            return new h(this);
                        }),
                        (t.prototype.onCreating = function () {}),
                        (t.prototype.onNumChanged = function (e) {
                            this.locTitle.strChanged();
                        }),
                        (t.prototype.dispose = function () {
                            e.prototype.dispose.call(this),
                                this._implementor.dispose(),
                                (this._implementor = void 0);
                        }),
                        t
                    );
                })(s.PageModel);
            s.Serializer.overrideClassCreator("panel", function () {
                return new b();
            }),
                s.Serializer.overrideClassCreator("page", function () {
                    return new q();
                }),
                s.ElementFactory.Instance.registerElement(
                    "panel",
                    function (e) {
                        return new b(e);
                    }
                );
            var g = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                C = (function (e) {
                    function t(t) {
                        void 0 === t && (t = "");
                        var n = e.call(this, t) || this;
                        (n.koElementType = i.observable("survey-flowpanel")),
                            new c(n),
                            n.onCreating();
                        var o = n;
                        return (
                            (n.koElementAfterRender = function (e, t) {
                                return o.elementAfterRender(e, t);
                            }),
                            n
                        );
                    }
                    return (
                        g(t, e),
                        (t.prototype.onCreating = function () {}),
                        (t.prototype.getHtmlForQuestion = function (e) {
                            return (
                                '<span question="true" contenteditable="false" id="flowpanel_' +
                                e.name +
                                '">\x3c!-- ko template: { name: "survey-flowpanel-question", data: "' +
                                e.name +
                                '"} --\x3e\x3c!-- /ko --\x3e</span>'
                            );
                        }),
                        (t.prototype.elementAfterRender = function (e, t) {
                            if (this.survey) {
                                var n =
                                    s.SurveyElement.GetFirstNonTextElement(e);
                                n && this.survey.afterRenderQuestion(t, n);
                            }
                        }),
                        t
                    );
                })(s.FlowPanelModel);
            s.Serializer.overrideClassCreator("flowpanel", function () {
                return new C();
            }),
                i.components.register("f-panel", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            var n = this,
                                o = i.unwrap(e.question);
                            (n.element = t.element),
                                (n.element.innerHTML = o.html),
                                (n.isOnFocus = !1),
                                (n.wasChanged = !1),
                                (n.isContentUpdating = !1),
                                (o.contentChangedCallback = function () {
                                    n.isContentUpdating ||
                                        (i.cleanNode(n.element),
                                        (n.element.innerHTML = o.html),
                                        i.applyBindings(
                                            { question: o },
                                            n.element
                                        ),
                                        i.tasks && i.tasks.runEarly());
                                }),
                                (n.element.onfocus = function () {
                                    n.isOnFocus = !0;
                                }),
                                (n.element.onblur = function () {
                                    n.wasChanged && n.updateContent(),
                                        (n.isOnFocus = !1),
                                        (n.wasChanged = !1);
                                }),
                                (n.element.ondragend = function (e) {
                                    var t = n.element.innerHTML,
                                        i = /{(.*?(element:)[^$].*?)}/g.exec(t);
                                    if (null !== i) {
                                        var s = o.getQuestionFromText(i[0]);
                                        s && (o.content = n.getContent(s.name));
                                    }
                                }),
                                (n.updateContent = function () {
                                    (n.isContentUpdating = !0),
                                        (o.content = n.getContent()),
                                        (n.isContentUpdating = !1);
                                }),
                                (o.getContent = n.getContent =
                                    function (e) {
                                        var t = document.createElement("DIV");
                                        t.innerHTML = n.element.innerHTML;
                                        for (
                                            var i = t.querySelectorAll(
                                                    'span[question="true"]'
                                                ),
                                                s = 0;
                                            s < i.length;
                                            s++
                                        ) {
                                            var a = i[s].id.replace(
                                                    "flowpanel_",
                                                    ""
                                                ),
                                                r = "";
                                            if (a !== e) {
                                                var c = o.getQuestionByName(a);
                                                r = c
                                                    ? o.getElementContentText(c)
                                                    : "";
                                            }
                                            i[s].outerHTML = r;
                                        }
                                        return t.innerHTML;
                                    });
                            return (
                                new MutationObserver(function (e, t) {
                                    n.isOnFocus && (n.wasChanged = !0);
                                }).observe(n.element, {
                                    characterData: !0,
                                    attributes: !0,
                                    childList: !0,
                                    subtree: !0,
                                }),
                                { question: o }
                            );
                        },
                    },
                    template: "<div></div>",
                });
            var w = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                R = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        (n.question = t),
                            (n._koValue = i.observableArray()),
                            (n.disposedObjects = []),
                            (n.callBackFunctions = []);
                        var o = !1;
                        return (
                            n._koValue.subscribe(function (e) {
                                o || n.setKoValue(e);
                            }),
                            Object.defineProperty(n.question, "koValue", {
                                get: function () {
                                    if (
                                        !s.Helpers.isTwoValueEquals(
                                            n._koValue(),
                                            n.getKoValue(),
                                            !1,
                                            !0,
                                            !1
                                        )
                                    )
                                        try {
                                            (o = !0),
                                                n._koValue(n.getKoValue());
                                        } finally {
                                            o = !1;
                                        }
                                    return n._koValue;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            (t.surveyLoadCallback = function () {
                                n.onSurveyLoad();
                            }),
                            n.setObservaleObj(
                                "koTemplateName",
                                i.pureComputed(function () {
                                    return n.getTemplateName();
                                })
                            ),
                            n.setObservaleObj(
                                "koElementType",
                                i.observable("survey-question")
                            ),
                            n.setObservaleObj(
                                "koCss",
                                i.pureComputed(function () {
                                    return n.question.cssClasses;
                                })
                            ),
                            n.setObservaleObj(
                                "koRootCss",
                                i.pureComputed(function () {
                                    return n.question.getRootCss();
                                })
                            ),
                            n.setObservaleObj(
                                "koErrorClass",
                                i.pureComputed(function () {
                                    return n.question.cssError;
                                })
                            ),
                            (n.koDummy = i.observable(0)),
                            n.setCallbackFunc(
                                "koQuestionAfterRender",
                                function (e, t) {
                                    n.koQuestionAfterRender(e, t);
                                }
                            ),
                            n
                        );
                    }
                    return (
                        w(t, e),
                        (t.prototype.setObservaleObj = function (e, t, n) {
                            return (
                                void 0 === n && (n = !0),
                                this.disposedObjects.push(e),
                                n && (this.question[e] = t),
                                t
                            );
                        }),
                        (t.prototype.setCallbackFunc = function (e, t) {
                            this.callBackFunctions.push(e),
                                (this.question[e] = t);
                        }),
                        (t.prototype.getKoValue = function () {
                            return this.question.value;
                        }),
                        (t.prototype.setKoValue = function (e) {
                            this.question.value = e;
                        }),
                        (t.prototype.onSurveyLoad = function () {}),
                        (t.prototype.getQuestionTemplate = function () {
                            return this.question.getTemplate();
                        }),
                        (t.prototype.getTemplateName = function () {
                            return this.question &&
                                this.question.customWidget &&
                                !this.question.customWidget.widgetJson
                                    .isDefaultRender
                                ? "survey-widget-" +
                                      this.question.customWidget.name
                                : "survey-question-" +
                                      this.getQuestionTemplate();
                        }),
                        (t.prototype.getNo = function () {
                            return this.question.visibleIndex > -1
                                ? this.question.visibleIndex + 1 + ". "
                                : "";
                        }),
                        (t.prototype.updateKoDummy = function () {
                            this.question.isDisposed ||
                                (this.koDummy(this.koDummy() + 1),
                                this.question.locTitle.strChanged());
                        }),
                        (t.prototype.koQuestionAfterRender = function (e, t) {
                            var n = this;
                            setTimeout(function () {
                                i.tasks && i.tasks.runEarly();
                                var t = s.SurveyElement.GetFirstNonTextElement(
                                    e,
                                    !0
                                );
                                t &&
                                    (n.question.afterRenderQuestionElement(t),
                                    n.question &&
                                        n.question.customWidget &&
                                        n.question.customWidget.afterRender(
                                            n.question,
                                            t
                                        ),
                                    i.utils.domNodeDisposal.addDisposeCallback(
                                        t,
                                        function () {
                                            if (
                                                (n.question.beforeDestroyQuestionElement(
                                                    t
                                                ),
                                                n.question &&
                                                    n.question.customWidget)
                                            )
                                                try {
                                                    n.question.customWidget.willUnmount(
                                                        n.question,
                                                        t
                                                    );
                                                } catch (e) {
                                                    console.warn(
                                                        "Custom widget will unmount failed"
                                                    );
                                                }
                                        }
                                    ));
                            }, 0);
                        }),
                        (t.prototype.dispose = function () {
                            e.prototype.dispose.call(this);
                            for (
                                var t = 0;
                                t < this.disposedObjects.length;
                                t++
                            ) {
                                var n = this.disposedObjects[t],
                                    o = this[n] || this.question[n];
                                o &&
                                    (this[n] && (this[n] = void 0),
                                    this.question[n] &&
                                        (this.question[n] = void 0),
                                    o.dispose && o.dispose());
                            }
                            this.disposedObjects = [];
                            for (
                                var i = 0;
                                i < this.callBackFunctions.length;
                                i++
                            )
                                this.question[this.callBackFunctions[i]] =
                                    void 0;
                            (this.callBackFunctions = []),
                                this.question.unregisterPropertyChangedHandlers(
                                    ["visibleIndex"]
                                );
                        }),
                        t
                    );
                })(c),
                I = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                _ = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onCreated(), n;
                    }
                    return (
                        I(t, e),
                        (t.prototype.onCreated = function () {}),
                        Object.defineProperty(t.prototype, "isOtherSelected", {
                            get: function () {
                                return this.question.isOtherSelected;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        t
                    );
                })(R),
                O = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            n.setCallbackFunc("koAfterRender", n.koAfterRender),
                            n
                        );
                    }
                    return (
                        I(t, e),
                        (t.prototype.koAfterRender = function (e, t) {
                            var n = e[0];
                            "#text" == n.nodeName && (n.data = ""),
                                "#text" == (n = e[e.length - 1]).nodeName &&
                                    (n.data = "");
                        }),
                        t
                    );
                })(_),
                T = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                M = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        T(t, e),
                        (t.prototype.getKoValue = function () {
                            return this.question.renderedValue;
                        }),
                        (t.prototype.setKoValue = function (e) {
                            this.question.renderedValue = e;
                        }),
                        t
                    );
                })(O),
                S = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.isAllSelectedUpdating = !1),
                            (n._selectAllItemImpl = void 0),
                            (n._otherItemImpl = void 0),
                            (n.koAllSelected = i.observable(n.isAllSelected)),
                            n.koAllSelected.subscribe(function (e) {
                                n.isAllSelectedUpdating ||
                                    (e ? n.selectAll() : n.clearValue());
                            }),
                            (n._selectAllItemImpl = new c(n.selectAllItem)),
                            (n._otherItemImpl = new c(n.otherItem)),
                            n
                        );
                    }
                    return (
                        T(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new M(this));
                        }),
                        (t.prototype.onSurveyValueChanged = function (t) {
                            e.prototype.onSurveyValueChanged.call(this, t),
                                this.updateAllSelected();
                        }),
                        (t.prototype.onVisibleChoicesChanged = function () {
                            e.prototype.onVisibleChoicesChanged.call(this),
                                this.updateAllSelected();
                        }),
                        (t.prototype.updateAllSelected = function () {
                            (this.isAllSelectedUpdating = !0),
                                this.koAllSelected(this.isAllSelected),
                                (this.isAllSelectedUpdating = !1);
                        }),
                        (t.prototype.dispose = function () {
                            this._selectAllItemImpl &&
                                (this._selectAllItemImpl.dispose(),
                                (this._selectAllItemImpl = void 0)),
                                this._otherItemImpl &&
                                    (this._otherItemImpl.dispose(),
                                    (this._otherItemImpl = void 0)),
                                this._implementor.dispose(),
                                (this._implementor = void 0),
                                (this.koAllSelected = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionCheckboxModel);
            s.Serializer.overrideClassCreator("checkbox", function () {
                return new S("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "checkbox",
                    function (e) {
                        var t = new S(e);
                        return (
                            (t.choices = s.QuestionFactory.DefaultChoices), t
                        );
                    }
                );
            var $ = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                D = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.isAllSelectedUpdating = !1),
                            (n.koAllSelected = i.observable(n.isAllSelected)),
                            n.koAllSelected.subscribe(function (e) {
                                n.isAllSelectedUpdating ||
                                    (e ? n.selectAll() : n.clearValue());
                            }),
                            n
                        );
                    }
                    return (
                        $(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new O(this));
                        }),
                        (t.prototype.onSurveyValueChanged = function (t) {
                            e.prototype.onSurveyValueChanged.call(this, t),
                                this.updateAllSelected();
                        }),
                        (t.prototype.onVisibleChoicesChanged = function () {
                            e.prototype.onVisibleChoicesChanged.call(this),
                                this.updateAllSelected();
                        }),
                        (t.prototype.updateAllSelected = function () {
                            (this.isAllSelectedUpdating = !0),
                                this.koAllSelected(this.isAllSelected),
                                (this.isAllSelectedUpdating = !1);
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                (this.koAllSelected = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionTagboxModel);
            s.Serializer.overrideClassCreator("tagbox", function () {
                return new D("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "tagbox",
                    function (e) {
                        var t = new D(e);
                        return (
                            (t.choices = s.QuestionFactory.DefaultChoices), t
                        );
                    }
                );
            var P = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                B = (function (e) {
                    function t() {
                        var t =
                            (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t.koHandleKeydown = function (e, n) {
                                return t.handleKeydown(n, e), !0;
                            }),
                            (t.koHandlePointerDown = function (e, n) {
                                return (
                                    t.survey.isDesignMode || n.preventDefault(),
                                    t.handlePointerDown(n, e, n.currentTarget),
                                    !0
                                );
                            }),
                            t
                        );
                    }
                    return (
                        P(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new R(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionRankingModel);
            s.Serializer.overrideClassCreator("ranking", function () {
                return new B("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "ranking",
                    function (e) {
                        var t = new B(e);
                        return (
                            (t.choices = s.QuestionFactory.DefaultChoices), t
                        );
                    }
                );
            var V = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                E = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        V(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new R(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionCommentModel);
            s.Serializer.overrideClassCreator("comment", function () {
                return new E("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "comment",
                    function (e) {
                        return new E(e);
                    }
                );
            var A = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                L = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return A(t, e), t;
                })(_),
                j = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.koDisableOption = function (e, t) {
                                t &&
                                    i.applyBindingsToNode(
                                        e,
                                        {
                                            disable: i.computed(function () {
                                                return !t.isEnabled;
                                            }),
                                        },
                                        t
                                    );
                            }),
                            n
                        );
                    }
                    return (
                        A(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new L(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionDropdownModel);
            s.Serializer.overrideClassCreator("dropdown", function () {
                return new j("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "dropdown",
                    function (e) {
                        var t = new j(e);
                        return (
                            (t.choices = s.QuestionFactory.DefaultChoices), t
                        );
                    }
                );
            var H = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                N = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            n.setObservaleObj("koState", i.observable("empty")),
                            n.setObservaleObj(
                                "koHasValue",
                                i.computed(function () {
                                    return "loaded" === n.question.koState();
                                })
                            ),
                            n.setObservaleObj(
                                "koData",
                                i.computed(function () {
                                    return n.question.koHasValue()
                                        ? n.question.previewValue
                                        : [];
                                })
                            ),
                            n.setObservaleObj("koInputTitle", i.observable()),
                            n.setObservaleObj(
                                "koChooseFileCss",
                                i.pureComputed(function () {
                                    return n.question.getChooseFileCss();
                                })
                            ),
                            n.setCallbackFunc("ondrop", function (e, t) {
                                n.question.onDrop(
                                    Object(s.getOriginalEvent)(t)
                                );
                            }),
                            n.setCallbackFunc("ondragover", function (e, t) {
                                n.question.onDragOver(
                                    Object(s.getOriginalEvent)(t)
                                );
                            }),
                            n.setCallbackFunc("ondragenter", function (e, t) {
                                n.question.onDragEnter(
                                    Object(s.getOriginalEvent)(t)
                                );
                            }),
                            n.setCallbackFunc("ondragleave", function (e, t) {
                                n.question.onDragLeave(
                                    Object(s.getOriginalEvent)(t)
                                );
                            }),
                            n.setCallbackFunc("dochange", function (e, t) {
                                n.question.doChange(
                                    Object(s.getOriginalEvent)(t)
                                );
                            }),
                            n.setCallbackFunc("doclean", function (e, t) {
                                n.question.doClean(
                                    Object(s.getOriginalEvent)(t)
                                );
                            }),
                            n.setCallbackFunc("doremovefile", function (e, t) {
                                n.question.doRemoveFile(e);
                            }),
                            n.setCallbackFunc("dodownload", function (e, t) {
                                return (
                                    n.question.doDownloadFile(
                                        Object(s.getOriginalEvent)(t),
                                        e
                                    ),
                                    !0
                                );
                            }),
                            n
                        );
                    }
                    return H(t, e), t;
                })(R),
                F = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.updateState = function (e, t) {
                                n.koState(t.state),
                                    n.koInputTitle(n.inputTitle);
                            }),
                            n.onUploadStateChanged.add(n.updateState),
                            n.updateState(n, { state: n.currentState }),
                            n
                        );
                    }
                    return (
                        H(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new N(this));
                        }),
                        (t.prototype.dispose = function () {
                            this.onUploadStateChanged.remove(this.updateState),
                                this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionFileModel);
            s.Serializer.overrideClassCreator("file", function () {
                return new F("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "file",
                    function (e) {
                        return new F(e);
                    }
                );
            var Q = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                W = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        Q(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new R(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionHtmlModel);
            s.Serializer.overrideClassCreator("html", function () {
                return new W("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "html",
                    function (e) {
                        return new W(e);
                    }
                );
            var z = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                K = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.koVisibleRows = i.observableArray()),
                            (n.koVisibleColumns = i.observableArray()),
                            n.koVisibleRows(n.visibleRows),
                            n.koVisibleColumns(n.visibleColumns),
                            n
                        );
                    }
                    return (
                        z(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new R(this));
                        }),
                        (t.prototype.onColumnsChanged = function () {
                            e.prototype.onColumnsChanged.call(this),
                                this.koVisibleColumns(this.visibleColumns);
                        }),
                        (t.prototype.onRowsChanged = function () {
                            e.prototype.onRowsChanged.call(this),
                                this.koVisibleRows(this.visibleRows);
                        }),
                        (t.prototype.onSurveyLoad = function () {
                            e.prototype.onSurveyLoad.call(this),
                                this.onRowsChanged();
                        }),
                        (t.prototype.onMatrixRowCreated = function (e) {
                            new c(e);
                        }),
                        (t.prototype.getVisibleRows = function () {
                            var t = e.prototype.getVisibleRows.call(this);
                            return this.koVisibleRows(t), t;
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                (this.koVisibleRows = void 0),
                                (this.koVisibleColumns = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionMatrixModel);
            s.Serializer.overrideClassCreator("matrix", function () {
                return new K("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "matrix",
                    function (e) {
                        var t = new K(e);
                        return (
                            (t.rows = s.QuestionFactory.DefaultRows),
                            (t.columns = s.QuestionFactory.DefaultColums),
                            t
                        );
                    }
                );
            var U = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                G = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.koRecalc = i.observable(0)),
                            (n.matrix.onRenderedTableCreatedCallback =
                                function (e) {
                                    n._tableImplementor &&
                                        n._tableImplementor.dispose(),
                                        (n._tableImplementor = new c(e));
                                }),
                            (n.matrix.onRenderedTableResetCallback =
                                function () {
                                    n.question.isDisposed ||
                                        n.koRecalc(n.koRecalc() + 1);
                                }),
                            (n.matrix.onAddColumn = function (e) {
                                new c(e);
                            }),
                            n.setObservaleObj(
                                "koTable",
                                i.pureComputed(function () {
                                    return n.koRecalc(), n.matrix.renderedTable;
                                })
                            ),
                            n.setCallbackFunc(
                                "koCellAfterRender",
                                function (e, t) {
                                    return n.cellAfterRender(e, t);
                                }
                            ),
                            n.setCallbackFunc(
                                "koCellQuestionAfterRender",
                                function (e, t) {
                                    return n.cellQuestionAfterRender(e, t);
                                }
                            ),
                            n.setCallbackFunc("koAddRowClick", function () {
                                n.addRow();
                            }),
                            n.setCallbackFunc("koRemoveRowClick", function (e) {
                                n.removeRow(e.row);
                            }),
                            n.setCallbackFunc(
                                "koPanelAfterRender",
                                function (e, t) {
                                    n.panelAfterRender(e, t);
                                }
                            ),
                            n
                        );
                    }
                    return (
                        U(t, e),
                        Object.defineProperty(t.prototype, "matrix", {
                            get: function () {
                                return this.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.cellAfterRender = function (e, t) {
                            var n = this;
                            this.question.survey &&
                                setTimeout(function () {
                                    i.tasks && i.tasks.runEarly();
                                    var o =
                                        s.SurveyElement.GetFirstNonTextElement(
                                            e
                                        );
                                    if (o) {
                                        var a = t;
                                        if (
                                            a &&
                                            n.question &&
                                            n.question.survey &&
                                            !n.question.isDisposed
                                        ) {
                                            var r = {
                                                cell: a.cell,
                                                cellQuestion: a.question,
                                                htmlElement: o,
                                                row: a.row,
                                                column: a.cell
                                                    ? a.cell.column
                                                    : null,
                                            };
                                            n.question.survey.matrixAfterCellRender(
                                                n.question,
                                                r
                                            );
                                        }
                                    }
                                }, 0);
                        }),
                        (t.prototype.cellQuestionAfterRender = function (e, t) {
                            this.question &&
                                this.question.survey &&
                                setTimeout(function () {
                                    i.tasks && i.tasks.runEarly();
                                    var n =
                                        s.SurveyElement.GetFirstNonTextElement(
                                            e
                                        );
                                    if (n) {
                                        var o = t;
                                        if (o) {
                                            var a = o.question;
                                            a &&
                                                a.survey &&
                                                !a.isDisposed &&
                                                (a.customWidget &&
                                                    (a.customWidget.afterRender(
                                                        o.question,
                                                        n
                                                    ),
                                                    i.utils.domNodeDisposal.addDisposeCallback(
                                                        n,
                                                        function () {
                                                            a.customWidget.willUnmount(
                                                                o.question,
                                                                n
                                                            );
                                                        }
                                                    )),
                                                i.utils.domNodeDisposal.addDisposeCallback(
                                                    n,
                                                    function () {
                                                        a.beforeDestroyQuestionElement(
                                                            n
                                                        );
                                                    }
                                                ),
                                                a.afterRenderQuestionElement(
                                                    n
                                                ));
                                        }
                                    }
                                }, 0);
                        }),
                        (t.prototype.isAddRowTop = function () {
                            return !1;
                        }),
                        (t.prototype.isAddRowBottom = function () {
                            return !1;
                        }),
                        (t.prototype.addRow = function () {}),
                        (t.prototype.removeRow = function (e) {}),
                        (t.prototype.panelAfterRender = function (e, t) {
                            if (this.question && this.question.survey) {
                                var n =
                                    s.SurveyElement.GetFirstNonTextElement(e);
                                this.question.survey.afterRenderPanel(t, n);
                            }
                        }),
                        (t.prototype.dispose = function () {
                            this._tableImplementor &&
                                this._tableImplementor.dispose(),
                                (this.matrix.onRenderedTableCreatedCallback =
                                    void 0),
                                (this.matrix.onRenderedTableResetCallback =
                                    void 0),
                                (this.matrix.onAddColumn = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(R),
                Z = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        U(t, e),
                        (t.prototype.createRenderedTable = function () {
                            return new J(this);
                        }),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new G(this));
                        }),
                        (t.prototype.dispose = function () {
                            e.prototype.dispose.call(this),
                                this._implementor.dispose(),
                                (this._implementor = void 0);
                        }),
                        t
                    );
                })(s.QuestionMatrixDropdownModel),
                J = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        U(t, e),
                        (t.prototype.createRenderedRow = function (e, t) {
                            void 0 === t && (t = !1);
                            var n = new s.QuestionMatrixDropdownRenderedRow(
                                e,
                                t
                            );
                            return new c(n), n;
                        }),
                        t
                    );
                })(s.QuestionMatrixDropdownRenderedTable);
            s.Serializer.overrideClassCreator("matrixdropdown", function () {
                return new Z("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "matrixdropdown",
                    function (e) {
                        var t = new Z(e);
                        return (
                            (t.choices = [1, 2, 3, 4, 5]),
                            (t.rows = s.QuestionFactory.DefaultRows),
                            s.QuestionMatrixDropdownModelBase.addDefaultColumns(
                                t
                            ),
                            t
                        );
                    }
                );
            var X = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                Y = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.question.getKoPopupIsVisible =
                                n.getKoPopupIsVisible),
                            n
                        );
                    }
                    return (
                        X(t, e),
                        (t.prototype.addRow = function () {
                            this.question.addRowUI();
                        }),
                        (t.prototype.removeRow = function (e) {
                            this.question.removeRowUI(e);
                        }),
                        (t.prototype.getKoPopupIsVisible = function (e) {
                            return i.observable(e.isDetailPanelShowing);
                        }),
                        (t.prototype.dispose = function () {
                            e.prototype.dispose.call(this),
                                (this.question.getKoPopupIsVisible = void 0);
                        }),
                        t
                    );
                })(G),
                ee = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        X(t, e),
                        (t.prototype.createRenderedTable = function () {
                            return new J(this);
                        }),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new Y(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionMatrixDynamicModel);
            s.Serializer.overrideClassCreator("matrixdynamic", function () {
                return new ee("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "matrixdynamic",
                    function (e) {
                        var t = new ee(e);
                        return (
                            (t.choices = [1, 2, 3, 4, 5]),
                            (t.rowCount = 2),
                            s.QuestionMatrixDropdownModelBase.addDefaultColumns(
                                t
                            ),
                            t
                        );
                    }
                );
            var te = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                ne = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        (n.koRecalc = i.observable(0)),
                            n.setCallbackFunc("koAddPanelClick", function () {
                                n.addPanel();
                            }),
                            n.setCallbackFunc(
                                "koRemovePanelClick",
                                function (e) {
                                    n.removePanel(e);
                                }
                            ),
                            n.setCallbackFunc("koPrevPanelClick", function () {
                                n.question.goToPrevPanel();
                            }),
                            n.setCallbackFunc("koNextPanelClick", function () {
                                n.question.goToNextPanel();
                            }),
                            n.setObservaleObj(
                                "koCanAddPanel",
                                i.pureComputed(function () {
                                    return n.koRecalc(), n.question.canAddPanel;
                                })
                            ),
                            n.setObservaleObj(
                                "koCanRemovePanel",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(), n.question.canRemovePanel
                                    );
                                })
                            ),
                            n.setObservaleObj(
                                "koIsPrevButton",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(),
                                        n.question.isPrevButtonVisible
                                    );
                                })
                            ),
                            n.setObservaleObj(
                                "koIsNextButton",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(),
                                        n.question.isNextButtonVisible
                                    );
                                })
                            ),
                            n.setObservaleObj(
                                "koIsRange",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(), n.question.isRangeShowing
                                    );
                                })
                            ),
                            n.setObservaleObj(
                                "koPanel",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(), n.question.currentPanel
                                    );
                                })
                            ),
                            n.setObservaleObj(
                                "koIsList",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(),
                                        n.question.isRenderModeList
                                    );
                                })
                            ),
                            n.setObservaleObj(
                                "koIsProgressTop",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(),
                                        n.question.isProgressTopShowing
                                    );
                                })
                            ),
                            n.setObservaleObj(
                                "koIsProgressBottom",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(),
                                        n.question.isProgressBottomShowing
                                    );
                                })
                            );
                        var o = i.observable(n.question.currentIndex);
                        return (
                            o.subscribe(function (e) {
                                n.question.currentIndex = e;
                            }),
                            n.setObservaleObj("koRangeValue", o),
                            n.setObservaleObj(
                                "koRangeMax",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(),
                                        n.question.visiblePanelCount - 1
                                    );
                                })
                            ),
                            n.setObservaleObj(
                                "koAddButtonCss",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(),
                                        n.question.getAddButtonCss()
                                    );
                                })
                            ),
                            n.setObservaleObj(
                                "koPrevButtonCss",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(),
                                        n.question.getPrevButtonCss()
                                    );
                                })
                            ),
                            n.setObservaleObj(
                                "koNextButtonCss",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(),
                                        n.question.getNextButtonCss()
                                    );
                                })
                            ),
                            n.setObservaleObj(
                                "koProgressText",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(), n.question.progressText
                                    );
                                })
                            ),
                            n.setObservaleObj(
                                "koProgress",
                                i.pureComputed(function () {
                                    return n.koRecalc(), n.question.progress;
                                })
                            ),
                            n.setCallbackFunc(
                                "koPanelAfterRender",
                                function (e, t) {
                                    n.panelAfterRender(e, t);
                                }
                            ),
                            (n.question.panelCountChangedCallback =
                                function () {
                                    n.onPanelCountChanged();
                                }),
                            (n.question.renderModeChangedCallback =
                                function () {
                                    n.onRenderModeChanged();
                                }),
                            (n.question.currentIndexChangedCallback =
                                function () {
                                    n.onCurrentIndexChanged();
                                }),
                            n
                        );
                    }
                    return (
                        te(t, e),
                        (t.prototype.onPanelCountChanged = function () {
                            this.onCurrentIndexChanged();
                        }),
                        (t.prototype.onRenderModeChanged = function () {
                            this.onCurrentIndexChanged();
                        }),
                        (t.prototype.onCurrentIndexChanged = function () {
                            this.question.isDisposed ||
                                (this.koRecalc(this.koRecalc() + 1),
                                this.question.koRangeValue(
                                    this.question.currentIndex
                                ));
                        }),
                        (t.prototype.addPanel = function () {
                            this.question.addPanelUI();
                        }),
                        (t.prototype.removePanel = function (e) {
                            this.question.isRenderModeList ||
                                (e = this.question.currentPanel),
                                this.question.removePanelUI(e);
                        }),
                        (t.prototype.panelAfterRender = function (e, t) {
                            if (this.question && this.question.survey) {
                                var n =
                                    s.SurveyElement.GetFirstNonTextElement(e);
                                this.question.survey.afterRenderPanel(t, n);
                            }
                        }),
                        (t.prototype.dispose = function () {
                            (this.question.panelCountChangedCallback = void 0),
                                (this.question.renderModeChangedCallback =
                                    void 0),
                                (this.question.currentIndexChangedCallback =
                                    void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(R),
                oe = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        te(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new ne(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionPanelDynamicModel);
            s.Serializer.overrideClassCreator("paneldynamic", function () {
                return new oe("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "paneldynamic",
                    function (e) {
                        return new oe(e);
                    }
                );
            var ie = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                se = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            n.setCallbackFunc("koOnFocus", function (e, t) {
                                return n.question.onFocus(t), !0;
                            }),
                            n.setCallbackFunc("koOnBlur", function (e, t) {
                                return n.question.onBlur(t), !0;
                            }),
                            n.setCallbackFunc("koOnKeyDown", function (e, t) {
                                return n.question.onKeyDown(t), !0;
                            }),
                            n.setCallbackFunc("koOnKeyUp", function (e, t) {
                                return n.question.onKeyUp(t), !0;
                            }),
                            n.setCallbackFunc("koOnChange", function (e, t) {
                                return n.question.onChange(t), !0;
                            }),
                            n.setCallbackFunc(
                                "koOnCompositeUpdate",
                                function (e, t) {
                                    return (
                                        n.question.onCompositionUpdate(t), !0
                                    );
                                }
                            ),
                            n.setObservaleObj(
                                "koReadOnlyValue",
                                i.computed(function () {
                                    return n.question.value;
                                })
                            ),
                            n
                        );
                    }
                    return ie(t, e), t;
                })(R),
                ae = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        ie(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new se(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionTextModel);
            s.Serializer.overrideClassCreator("text", function () {
                return new ae("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "text",
                    function (e) {
                        return new ae(e);
                    }
                );
            var re = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                ce = (function (e) {
                    function t(t, n) {
                        return (
                            void 0 === t && (t = null),
                            void 0 === n && (n = null),
                            e.call(this, t, n) || this
                        );
                    }
                    return (
                        re(t, e),
                        (t.prototype.createEditor = function (e) {
                            return new ae(e);
                        }),
                        t
                    );
                })(s.MultipleTextItemModel),
                le = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.koRecalc = i.observable(0)),
                            n.setObservaleObj(
                                "koItemCss",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(), n.question.getItemCss()
                                    );
                                })
                            ),
                            n.setObservaleObj(
                                "koItemTitleCss",
                                i.pureComputed(function () {
                                    return (
                                        n.koRecalc(),
                                        n.question.getItemTitleCss()
                                    );
                                })
                            ),
                            n
                        );
                    }
                    return re(t, e), t;
                })(R),
                de = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.koRows = i.observableArray(n.getRows())),
                            (n.colCountChangedCallback = function () {
                                n.onColCountChanged();
                            }),
                            n.onColCountChanged(),
                            n
                        );
                    }
                    return (
                        re(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new le(this));
                        }),
                        (t.prototype.onColCountChanged = function () {
                            this.koRows(this.getRows());
                        }),
                        (t.prototype.createTextItem = function (e, t) {
                            return new ce(e, t);
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                (this.koRows = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionMultipleTextModel);
            s.Serializer.overrideClassCreator("multipletextitem", function () {
                return new ce("");
            }),
                s.Serializer.overrideClassCreator("multipletext", function () {
                    return new de("");
                }),
                s.QuestionFactory.Instance.registerQuestion(
                    "multipletext",
                    function (e) {
                        var t = new de(e);
                        return (
                            s.QuestionMultipleTextModel.addDefaultItems(t), t
                        );
                    }
                );
            var ue = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                pe = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        ue(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new O(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionRadiogroupModel);
            s.Serializer.overrideClassCreator("radiogroup", function () {
                return new pe("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "radiogroup",
                    function (e) {
                        var t = new pe(e);
                        return (
                            (t.choices = s.QuestionFactory.DefaultChoices), t
                        );
                    }
                );
            var me = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                xe = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onCreated(), n;
                    }
                    return (
                        me(t, e), (t.prototype.onCreated = function () {}), t
                    );
                })(R),
                ve = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        me(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new xe(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionRatingModel);
            s.Serializer.overrideClassCreator("rating", function () {
                return new ve("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "rating",
                    function (e) {
                        return new ve(e);
                    }
                );
            var fe = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                ke = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        fe(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new R(this));
                        }),
                        (t.prototype.onSwitchClick = function (t, n) {
                            return e.prototype.onSwitchClickModel.call(
                                this,
                                Object(s.getOriginalEvent)(n)
                            );
                        }),
                        (t.prototype.onTrueLabelClick = function (e, t) {
                            return this.onLabelClick(t, !0);
                        }),
                        (t.prototype.onFalseLabelClick = function (e, t) {
                            return this.onLabelClick(t, !1);
                        }),
                        (t.prototype.onKeyDown = function (e, t) {
                            return this.onKeyDownCore(t);
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionBooleanModel);
            s.Serializer.overrideClassCreator("boolean", function () {
                return new ke("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "boolean",
                    function (e) {
                        return new ke(e);
                    }
                );
            var he = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                ye = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        he(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new R(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionEmptyModel);
            s.Serializer.overrideClassCreator("empty", function () {
                return new ye("");
            });
            var be = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                qe = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        be(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new R(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionExpressionModel);
            s.Serializer.overrideClassCreator("expression", function () {
                return new qe("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "expression",
                    function (e) {
                        return new qe(e);
                    }
                );
            var ge = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                Ce = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        ge(t, e),
                        (t.prototype.getKoValue = function () {
                            return this.question.renderedValue;
                        }),
                        t
                    );
                })(O),
                we = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        ge(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new Ce(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionImagePickerModel);
            s.Serializer.overrideClassCreator("imagepicker", function () {
                return new we("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "imagepicker",
                    function (e) {
                        return new we(e);
                    }
                );
            var Re = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                Ie = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        Re(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new R(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionImageModel);
            s.Serializer.overrideClassCreator("image", function () {
                return new Ie("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "image",
                    function (e) {
                        return new Ie(e);
                    }
                );
            var _e = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                Oe = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        _e(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new R(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionSignaturePadModel);
            s.Serializer.overrideClassCreator("signaturepad", function () {
                return new Oe("");
            }),
                s.QuestionFactory.Instance.registerQuestion(
                    "signaturepad",
                    function (e) {
                        return new Oe(e);
                    }
                );
            var Te = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                Me = (function (e) {
                    function t(t, n) {
                        return e.call(this, t, n) || this;
                    }
                    return (
                        Te(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new R(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionCustomModel),
                Se = (function (e) {
                    function t(t, n) {
                        return e.call(this, t, n) || this;
                    }
                    return (
                        Te(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new R(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionCompositeModel);
            (s.ComponentCollection.Instance.onCreateCustom = function (e, t) {
                return new Me(e, t);
            }),
                (s.ComponentCollection.Instance.onCreateComposite = function (
                    e,
                    t
                ) {
                    return new Se(e, t);
                });
            var $e = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                De = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        $e(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new O(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(s.QuestionButtonGroupModel),
                Pe = n(45);
            i.components.register("sv-action", {
                viewModel: {
                    createViewModel: function (e) {
                        var t = e.item;
                        return new c(t), e;
                    },
                },
                template: Pe,
            });
            var Be = n(46);
            i.components.register("sv-action-bar-item", {
                viewModel: {
                    createViewModel: function (e) {
                        return e;
                    },
                },
                template: Be,
            });
            var Ve = n(47);
            i.components.register("sv-action-bar-item-dropdown", {
                viewModel: {
                    createViewModel: function (e) {
                        return new s.ActionDropdownViewModel(e.item);
                    },
                },
                template: Ve,
            });
            var Ee = n(48);
            i.components.register("sv-action-bar-separator", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.item;
                        return n ? { css: n.innerCss } : {};
                    },
                },
                template: Ee,
            });
            var Ae = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        n
                                    ) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n)
                            throw new TypeError(
                                "Class extends value " +
                                    String(n) +
                                    " is not a constructor or null"
                            );
                        function o() {
                            this.constructor = t;
                        }
                        e(t, n),
                            (t.prototype =
                                null === n
                                    ? Object.create(n)
                                    : ((o.prototype = n.prototype), new o()));
                    };
                })(),
                Le = n(44),
                je = (function (e) {
                    function t(t, n) {
                        void 0 === n && (n = !0);
                        var o = e.call(this, t) || this;
                        return (
                            (o.model = t),
                            (o.handleClick = n),
                            (o.itemsSubscription = i.computed(function () {
                                (
                                    t.renderedActions ||
                                    t.items ||
                                    t.actions
                                ).forEach(function (e) {
                                    e.stateItem ? new c(e.stateItem) : new c(e);
                                });
                            })),
                            o
                        );
                    }
                    return (
                        Ae(t, e),
                        (t.prototype.dispose = function () {
                            e.prototype.dispose.call(this),
                                this.itemsSubscription.dispose(),
                                this.model.resetResponsivityManager();
                        }),
                        t
                    );
                })(c);
            i.components.register("sv-action-bar", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = void 0 === e.handleClick || e.handleClick,
                            o = e.model,
                            i = t.element.nextElementSibling;
                        return e.model.initResponsivityManager(i), new je(o, n);
                    },
                },
                template: Le,
            });
            var He = n(49);
            i.components.register("sv-boolean-checkbox", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return { question: e.question };
                    },
                },
                template: He,
            }),
                s.RendererFactory.Instance.registerRenderer(
                    "boolean",
                    "checkbox",
                    "sv-boolean-checkbox"
                );
            var Ne = n(50);
            i.components.register("sv-boolean-radio-item", {
                viewModel: {
                    createViewModel: function (e) {
                        return (
                            (e.handleChange = function () {
                                e.question.booleanValue = e.value;
                            }),
                            e
                        );
                    },
                },
                template: Ne,
            });
            var Fe = n(51);
            i.components.register("sv-boolean-radio", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return { question: e.question };
                    },
                },
                template: Fe,
            }),
                s.RendererFactory.Instance.registerRenderer(
                    "boolean",
                    "radio",
                    "sv-boolean-radio"
                );
            var Qe = n(52),
                We = function (e, t) {
                    (this.question = e), (this.targetElement = t);
                };
            i.components.register("sv-panel", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return new We(e.question, t.element.parentElement);
                    },
                },
                template: Qe,
            });
            var ze = n(53),
                Ke = (function () {
                    function e(e) {
                        var t = this;
                        (this.popupViewModel = e),
                            (this.visibilityChangedHandler = function (e, n) {
                                n.isVisible &&
                                    (i.tasks.runEarly(),
                                    t.popupViewModel.updateOnShowing());
                            }),
                            e.initializePopupContainer(),
                            new c(e.model),
                            new c(e),
                            (e.container.innerHTML = ze),
                            e.model.onVisibilityChanged.add(
                                this.visibilityChangedHandler
                            ),
                            i.applyBindings(e, e.container);
                    }
                    return (
                        (e.prototype.dispose = function () {
                            i.cleanNode(this.popupViewModel.container),
                                this.popupViewModel.model.onVisibilityChanged.remove(
                                    this.visibilityChangedHandler
                                ),
                                this.popupViewModel.unmountPopupContainer(),
                                (this.popupViewModel.container = void 0);
                        }),
                        e
                    );
                })();
            function Ue(e, t, n, o, i, a, r) {
                return (
                    void 0 === r && (r = "popup"),
                    Ge(
                        Object(s.createDialogOptions)(
                            e,
                            t,
                            n,
                            o,
                            void 0,
                            void 0,
                            i,
                            a,
                            r
                        )
                    )
                );
            }
            function Ge(e) {
                e.onHide = function () {
                    n.dispose();
                };
                var t = Object(s.createPopupModalViewModel)(e),
                    n = new Ke(t);
                return (t.model.isVisible = !0), t;
            }
            (s.settings.showModal = Ue),
                i.components.register("sv-popup", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            var n = Object(s.createPopupViewModel)(
                                i.unwrap(e.model),
                                t.element.parentElement
                            );
                            return new Ke(n);
                        },
                    },
                    template: "<div></div>",
                });
            var Ze = n(54),
                Je = (function () {
                    function e(e, t) {
                        var n = this;
                        (this.survey = e),
                            (this.scrollButtonCssKo = void 0),
                            (this.hasScroller = i.observable(!1)),
                            (this.updateScroller = void 0),
                            (this.progressButtonsModel =
                                new s.SurveyProgressButtonsModel(e)),
                            (this.updateScroller = setInterval(function () {
                                var o = t.querySelector(
                                    "." + e.css.progressButtonsListContainer
                                );
                                o &&
                                    n.hasScroller(
                                        o.scrollWidth > o.offsetWidth
                                    );
                            }, 100));
                    }
                    return (
                        (e.prototype.isListElementClickable = function (e) {
                            return this.progressButtonsModel.isListElementClickable(
                                e()
                            );
                        }),
                        (e.prototype.getListElementCss = function (e) {
                            return this.progressButtonsModel.getListElementCss(
                                e()
                            );
                        }),
                        (e.prototype.clickListElement = function (e) {
                            this.progressButtonsModel.clickListElement(e());
                        }),
                        (e.prototype.getScrollButtonCss = function (e) {
                            var t = this;
                            return (
                                (this.scrollButtonCssKo = i.computed(
                                    function () {
                                        return t.progressButtonsModel.getScrollButtonCss(
                                            t.hasScroller(),
                                            e
                                        );
                                    },
                                    this
                                )),
                                this.scrollButtonCssKo
                            );
                        }),
                        (e.prototype.clickScrollButton = function (e, t) {
                            e.scrollLeft += 70 * (t ? -1 : 1);
                        }),
                        (e.prototype.dispose = function () {
                            void 0 !== this.updateScroller &&
                                (clearInterval(this.updateScroller),
                                (this.updateScroller = void 0)),
                                void 0 !== this.scrollButtonCssKo &&
                                    (this.scrollButtonCssKo.dispose(),
                                    (this.scrollButtonCssKo = void 0));
                        }),
                        e
                    );
                })();
            i.components.register("sv-progress-buttons", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return new Je(e.model, t.element.nextElementSibling);
                    },
                },
                template: Ze,
            });
            var Xe = n(55),
                Ye = (function () {
                    function e(e) {
                        this.model = e;
                    }
                    return (
                        (e.prototype.getProgressTextInBarCss = function (e) {
                            return s.SurveyProgressModel.getProgressTextInBarCss(
                                e
                            );
                        }),
                        (e.prototype.getProgressTextUnderBarCss = function (e) {
                            return s.SurveyProgressModel.getProgressTextUnderBarCss(
                                e
                            );
                        }),
                        e
                    );
                })();
            i.components.register("sv-progress-progress", {
                viewModel: {
                    createViewModel: function (e) {
                        return new Ye(e.model);
                    },
                },
                template: Xe,
            });
            var et =
                "\x3c!-- ko component: { name: 'sv-progress-progress', params: $data } --\x3e\x3c!-- /ko --\x3e";
            i.components.register("sv-progress-pages", {
                viewModel: {
                    createViewModel: function (e) {
                        return new Ye(e.model);
                    },
                },
                template: et,
            }),
                i.components.register("sv-progress-questions", {
                    viewModel: {
                        createViewModel: function (e) {
                            return new Ye(e.model);
                        },
                    },
                    template: et,
                }),
                i.components.register("sv-progress-correctquestions", {
                    viewModel: {
                        createViewModel: function (e) {
                            return new Ye(e.model);
                        },
                    },
                    template: et,
                }),
                i.components.register("sv-progress-requiredquestions", {
                    viewModel: {
                        createViewModel: function (e) {
                            return new Ye(e.model);
                        },
                    },
                    template: et,
                });
            var tt = n(56);
            i.components.register("sv-progress-toc", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return {
                            containerCss: Object(s.getTocRootCss)(e.model),
                            survey: e.model,
                            listModel: Object(s.createTOCListModel)(e.model),
                        };
                    },
                },
                template: tt,
            });
            var nt = n(57),
                ot = (function () {
                    function e(e, t, n) {
                        void 0 === n && (n = !0),
                            (this.survey = e),
                            (this.container = t),
                            (this.needRenderWrapper = n),
                            (this.css = "sv-components-column");
                    }
                    return (
                        Object.defineProperty(e.prototype, "components", {
                            get: function () {
                                return this.survey.getContainerContent(
                                    this.container
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            i.components.register("sv-components-container", {
                viewModel: {
                    createViewModel: function (e) {
                        var t = e.survey;
                        return new ot(t, e.container, e.needRenderWrapper);
                    },
                },
                template: nt,
            });
            var it = n(58);
            i.components.register(s.SurveyModel.TemplateRendererComponentName, {
                viewModel: {
                    createViewModel: function (e) {
                        return e;
                    },
                },
                template: it,
            }),
                i.components.register("survey-element-title", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            var n = e.element,
                                o = t.element,
                                i = document.createElement(n.titleTagName),
                                s =
                                    "css: element.cssTitle, attr: { " +
                                    (n.titleAriaLabel
                                        ? "'aria-label': element.titleAriaLabel,"
                                        : "") +
                                    " id: element.ariaTitleId, tabindex: element.titleTabIndex, 'aria-expanded': element.titleAriaExpanded, role: element.titleAriaRole }";
                            n.hasTitleEvents && (s += ", key2click"),
                                i.setAttribute("data-bind", s),
                                (i.innerHTML =
                                    "\x3c!-- ko component: { name: 'sv-title-actions', params: {element: element } } --\x3e\x3c!-- /ko --\x3e");
                            var a = o.nextSibling;
                            return (
                                o.parentNode.insertBefore(
                                    document.createComment(
                                        " ko if: element.hasTitle "
                                    ),
                                    a
                                ),
                                o.parentNode.insertBefore(i, a),
                                o.parentNode.insertBefore(
                                    document.createComment(" /ko "),
                                    a
                                ),
                                o.parentNode.removeChild(a),
                                { element: n }
                            );
                        },
                    },
                    template: "<span></span>",
                });
            var st = n(59);
            i.components.register("survey-element-title-content", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return { element: e.element };
                    },
                },
                template: st,
            });
            var at = n(60);
            i.components.register("sv-title-actions", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.element;
                        return { element: n, toolbar: n.getTitleToolbar() };
                    },
                },
                template: at,
            }),
                s.RendererFactory.Instance.registerRenderer(
                    "element",
                    "title-actions",
                    "sv-title-actions"
                );
            var rt = n(61),
                ct = (function () {
                    function e(e) {
                        this.locString = e;
                    }
                    return (
                        Object.defineProperty(e.prototype, "koHasHtml", {
                            get: function () {
                                return this.locString.koHasHtml();
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "editValue", {
                            get: function () {
                                return this.locString.koRenderedHtml();
                            },
                            set: function (e) {
                                (this.locString.searchElement = void 0),
                                    (this.locString.text = e);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onInput = function (e, t) {
                            e.editValue = t.target.innerText;
                        }),
                        (e.prototype.onClick = function (e, t) {
                            t.stopPropagation();
                        }),
                        (e.prototype.dispose = function () {
                            this.locString.onSearchChanged = void 0;
                        }),
                        e
                    );
                })();
            function lt(e, t) {
                for (; e.childNodes.length > 1; )
                    e.removeChild(e.childNodes[1]);
                e.childNodes[0].textContent = t.renderedHtml;
            }
            i.components.register(s.LocalizableString.editableRenderer, {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.locString;
                        return (
                            (function (e, t) {
                                t.onSearchChanged = function () {
                                    if (
                                        (null == t.searchElement &&
                                            (t.searchElement = (function (e) {
                                                for (
                                                    ;
                                                    e && "SPAN" !== e.nodeName;

                                                ) {
                                                    var t =
                                                        e.parentElement.getElementsByClassName(
                                                            "sv-string-editor"
                                                        );
                                                    e =
                                                        t.length > 0
                                                            ? t[0]
                                                            : void 0;
                                                }
                                                return e &&
                                                    e.childNodes.length > 0
                                                    ? e
                                                    : null;
                                            })(e)),
                                        null != t.searchElement)
                                    ) {
                                        var n = t.searchElement;
                                        if (
                                            (t.highlightDiv ||
                                                ((t.highlightDiv =
                                                    document.createElement(
                                                        "span"
                                                    )),
                                                (t.highlightDiv.style.backgroundColor =
                                                    "lightgray")),
                                            null != t.searchIndex)
                                        ) {
                                            lt(n, t);
                                            var o = document.createRange();
                                            o.setStart(
                                                n.childNodes[0],
                                                t.searchIndex
                                            ),
                                                o.setEnd(
                                                    n.childNodes[0],
                                                    t.searchIndex +
                                                        t.searchText.length
                                                ),
                                                o.surroundContents(
                                                    t.highlightDiv
                                                );
                                        } else
                                            lt(n, t),
                                                (t.searchElement = void 0);
                                    }
                                };
                            })(t.element, n),
                            new ct(n)
                        );
                    },
                },
                template: rt,
            });
            var dt = n(62);
            i.components.register("sv-string-viewer", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return { locString: e.locString };
                    },
                },
                template: dt,
            });
            var ut = n(63);
            i.components.register("sv-logo-image", {
                viewModel: {
                    createViewModel: function (e) {
                        return { survey: e };
                    },
                },
                template: ut,
            });
            var pt = n(64);
            i.components.register("sv-skeleton", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return { element: e.element };
                    },
                },
                template: pt,
            });
            var mt = n(65);
            i.components.register("sv-character-counter", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.counter,
                            o = e.remainingCharacterCounter;
                        return (
                            new c(n),
                            { counter: n, remainingCharacterCounter: o }
                        );
                    },
                },
                template: mt,
            });
            var xt = n(66);
            i.components.register("sv-rating-dropdown", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return { question: e.question };
                    },
                },
                template: xt,
            }),
                s.RendererFactory.Instance.registerRenderer(
                    "rating",
                    "dropdown",
                    "sv-rating-dropdown"
                );
            var vt = n(67);
            i.components.register("sv-rating-item", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return (
                            new c(e.item),
                            {
                                question: e.question,
                                item: e.item,
                                index: e.index,
                            }
                        );
                    },
                },
                template: vt,
            });
            var ft = n(68);
            i.components.register("sv-rating-item-star", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return (
                            new c(e.item),
                            {
                                question: e.question,
                                item: e.item,
                                index: e.index,
                            }
                        );
                    },
                },
                template: ft,
            });
            var kt = n(69);
            i.components.register("sv-rating-item-smiley", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return (
                            new c(e.item),
                            {
                                question: e.question,
                                item: e.item,
                                index: e.index,
                            }
                        );
                    },
                },
                template: kt,
            });
            var ht = n(70);
            i.components.register("sv-dropdown", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.question;
                        return (
                            n.dropdownListModel ||
                                (n.dropdownListModel = new s.DropdownListModel(
                                    e.question
                                )),
                            new c(n.dropdownListModel),
                            {
                                question: n,
                                model: n.dropdownListModel,
                                click: function (e, t) {
                                    var o;
                                    null === (o = n.dropdownListModel) ||
                                        void 0 === o ||
                                        o.onClick(t);
                                },
                                clear: function (e, t) {
                                    var o;
                                    null === (o = n.dropdownListModel) ||
                                        void 0 === o ||
                                        o.onClear(t);
                                },
                                keyhandler: function (e, t) {
                                    var o;
                                    return (
                                        null === (o = n.dropdownListModel) ||
                                            void 0 === o ||
                                            o.keyHandler(t),
                                        !0
                                    );
                                },
                                blur: function (e, t) {
                                    var o;
                                    null === (o = n.dropdownListModel) ||
                                        void 0 === o ||
                                        o.onBlur(t);
                                },
                                focus: function (e, t) {
                                    var o;
                                    null === (o = n.dropdownListModel) ||
                                        void 0 === o ||
                                        o.onFocus(t);
                                },
                            }
                        );
                    },
                },
                template: ht,
            });
            var yt = n(71);
            i.components.register("sv-dropdown-select", {
                viewModel: {
                    createViewModel: function (e, t) {
                        e.question.choices.forEach(function (e) {
                            new c(e);
                        });
                        return {
                            question: e.question,
                            click: function (t, n) {
                                e.question.onClick(n);
                            },
                            keyup: function (t, n) {
                                e.question.onKeyUp(n);
                            },
                        };
                    },
                },
                template: yt,
            }),
                s.RendererFactory.Instance.registerRenderer(
                    "dropdown",
                    "select",
                    "sv-dropdown-select"
                );
            var bt = n(72);
            i.components.register("sv-tagbox-item", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.item;
                        return (
                            new c(n),
                            {
                                item: n,
                                question: e.question,
                                removeItem: function (e, t) {
                                    e.question.dropdownListModel.deselectItem(
                                        e.item.value
                                    ),
                                        t.stopPropagation();
                                },
                            }
                        );
                    },
                },
                template: bt,
            });
            var qt = n(73);
            i.components.register("sv-tagbox", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.question;
                        return (
                            n.dropdownListModel ||
                                (n.dropdownListModel =
                                    new s.DropdownMultiSelectListModel(n)),
                            new c(n.dropdownListModel),
                            {
                                question: n,
                                model: n.dropdownListModel,
                                click: function (e, t) {
                                    var o;
                                    null === (o = n.dropdownListModel) ||
                                        void 0 === o ||
                                        o.onClick(t);
                                },
                                clear: function (e, t) {
                                    var o;
                                    null === (o = n.dropdownListModel) ||
                                        void 0 === o ||
                                        o.onClear(t);
                                },
                                keyhandler: function (e, t) {
                                    var o;
                                    return (
                                        null === (o = n.dropdownListModel) ||
                                            void 0 === o ||
                                            o.keyHandler(t),
                                        !0
                                    );
                                },
                                blur: function (e, t) {
                                    var o;
                                    null === (o = n.dropdownListModel) ||
                                        void 0 === o ||
                                        o.onBlur(t);
                                },
                                focus: function (e, t) {
                                    var o;
                                    null === (o = n.dropdownListModel) ||
                                        void 0 === o ||
                                        o.onFocus(t);
                                },
                                inputKeyHandler: function (e, t) {
                                    var o;
                                    return (
                                        null === (o = n.dropdownListModel) ||
                                            void 0 === o ||
                                            o.inputKeyHandler(t),
                                        !0
                                    );
                                },
                            }
                        );
                    },
                },
                template: qt,
            });
            var gt = n(75);
            i.components.register("sv-list-item", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return (
                            new c(e.item),
                            {
                                item: e.item,
                                model: e.model,
                                itemClick: function (e, t) {
                                    e.model.onItemClick(e.item),
                                        t.stopPropagation();
                                },
                            }
                        );
                    },
                },
                template: gt,
            });
            var Ct = n(74);
            i.components.register("sv-list", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.model,
                            o = new je(n);
                        return (
                            n.initListContainerHtmlElement(t.element),
                            {
                                model: n,
                                dispose: function () {
                                    o.dispose();
                                },
                                afterItemRender: function (e, t) {
                                    i.tasks && i.tasks.runEarly(),
                                        n.onLastItemRended(t);
                                },
                            }
                        );
                    },
                },
                template: Ct,
            });
            var wt = n(76);
            i.components.register("sv-svg-icon", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return (
                            i.computed(function () {
                                var n = i.unwrap(e.iconName),
                                    o =
                                        (t.element.querySelector &&
                                            t.element.querySelector("svg")) ||
                                        t.element.nextElementSibling;
                                n &&
                                    Object(s.createSvg)(
                                        i.unwrap(e.size),
                                        i.unwrap(e.width),
                                        i.unwrap(e.height),
                                        n,
                                        o,
                                        i.unwrap(e.title)
                                    );
                            }),
                            { hasIcon: e.iconName, css: e.css, title: e.title }
                        );
                    },
                },
                template: wt,
            });
            var Rt = n(77);
            i.components.register("sv-matrix-remove-button", {
                viewModel: {
                    createViewModel: function (e) {
                        return e.item.data;
                    },
                },
                template: Rt,
            });
            var It = n(78);
            i.components.register("sv-matrix-detail-button", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return e.item.data;
                    },
                },
                template: It,
            });
            var _t = n(79);
            i.components.register("sv-matrix-drag-drop-icon", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return e.item.data;
                    },
                },
                template: _t,
            });
            var Ot = n(80),
                Tt = function (e) {
                    this.model = e;
                };
            i.components.register("sv-button-group-item", {
                viewModel: {
                    createViewModel: function (e) {
                        var t = new s.ButtonGroupItemModel(
                            e.question,
                            e.item,
                            e.index()
                        );
                        return new Tt(t);
                    },
                },
                template: Ot,
            });
            var Mt = n(81),
                St = function (e) {
                    var t = this;
                    (this.question = e),
                        (this.afterRender = function (e) {
                            var n = e.filter(function (e) {
                                return e instanceof HTMLElement;
                            })[0];
                            (t.tooltipManager = new s.TooltipManager(n)),
                                i.utils.domNodeDisposal.addDisposeCallback(
                                    e[1],
                                    function () {
                                        t.tooltipManager.dispose();
                                    }
                                );
                        });
                };
            i.components.register("sv-tooltip-error", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return new St(e.question);
                    },
                },
                template: Mt,
            });
            var $t = n(82);
            i.components.register("sv-nav-btn", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return e;
                    },
                },
                template: $t,
            });
            var Dt = n(83),
                Pt = n(84),
                Bt = n(85),
                Vt = n(86),
                Et = n(87);
            i.components.register("sv-paneldynamic-add-btn", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return (!!e.item && e.item.data) || e;
                    },
                },
                template: Dt,
            }),
                i.components.register("sv-paneldynamic-next-btn", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            return (!!e.item && e.item.data) || e;
                        },
                    },
                    template: Pt,
                }),
                i.components.register("sv-paneldynamic-prev-btn", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            return (!!e.item && e.item.data) || e;
                        },
                    },
                    template: Bt,
                }),
                i.components.register("sv-paneldynamic-progress-text", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            return (!!e.item && e.item.data) || e;
                        },
                    },
                    template: Vt,
                }),
                i.components.register("sv-paneldynamic-remove-btn", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            return (!!e.item && e.item.data) || e;
                        },
                    },
                    template: Et,
                });
            var At = n(88);
            i.components.register("sv-brand-info", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return {};
                    },
                },
                template: At,
            });
            var Lt = n(89);
            i.components.register("sv-notifier", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return new c(e.notifier), e;
                    },
                },
                template: Lt,
            }),
                (function (e, t) {
                    (e.surveyTemplateEngine = function () {}),
                        (e.surveyTemplateEngine.prototype =
                            new e.nativeTemplateEngine()),
                        (e.surveyTemplateEngine.prototype.makeTemplateSource =
                            function (n, o) {
                                if ("string" == typeof n) {
                                    var i,
                                        r = (o = o || document).getElementById(
                                            "survey-content-" + t
                                        );
                                    if (!r) {
                                        var c =
                                            s.settings.environment.rootElement;
                                        ((r =
                                            document.createElement("div")).id =
                                            "survey-content-" +
                                            s.SurveyModel.platform),
                                            (r.style.display = "none"),
                                            (r.innerHTML = a),
                                            c.appendChild(r);
                                    }
                                    for (var l = 0; l < r.children.length; l++)
                                        if (r.children[l].id === n) {
                                            i = r.children[l];
                                            break;
                                        }
                                    return (
                                        i || (i = o.getElementById(n)),
                                        i
                                            ? new e.templateSources.domElement(
                                                  i
                                              )
                                            : new e.nativeTemplateEngine().makeTemplateSource(
                                                  n,
                                                  o
                                              )
                                    );
                                }
                                if (1 === n.nodeType || 8 === n.nodeType)
                                    return new e.templateSources.anonymousTemplate(
                                        n
                                    );
                                throw new Error("Unknown template type: " + n);
                            });
                    var n = new e.surveyTemplateEngine();
                    e.setTemplateEngine(n);
                })(i, s.SurveyModel.platform),
                Object(s.checkLibraryVersion)("1.9.88", "survey-knockout-ui");
        },
    ]);
});
