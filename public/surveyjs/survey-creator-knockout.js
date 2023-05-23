/*!
 * SurveyJS Creator v1.9.88
 * (c) 2015-2023 Devsoft Baltic OÜ - http://surveyjs.io/
 * Github: https://github.com/surveyjs/survey-creator
 * License: https://surveyjs.io/Licenses#SurveyCreator
 */
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t(
              require("knockout"),
              require("survey-knockout-ui"),
              require("survey-creator-core"),
              require("survey-core")
          ))
        : "function" == typeof define && define.amd
        ? define(
              "SurveyCreator",
              [
                  "knockout",
                  "survey-knockout-ui",
                  "survey-creator-core",
                  "survey-core",
              ],
              t
          )
        : "object" == typeof exports
        ? (exports.SurveyCreator = t(
              require("knockout"),
              require("survey-knockout-ui"),
              require("survey-creator-core"),
              require("survey-core")
          ))
        : (e.SurveyCreator = t(
              e.ko,
              e.SurveyKnockout,
              e.SurveyCreatorCore,
              e.Survey
          ));
})(this, function (e, t, n, o) {
    return (function (e) {
        var t = {};
        function n(o) {
            if (t[o]) return t[o].exports;
            var a = (t[o] = { i: o, l: !1, exports: {} });
            return e[o].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
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
                    for (var a in e)
                        n.d(
                            o,
                            a,
                            function (t) {
                                return e[t];
                            }.bind(null, a)
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
            n((n.s = 52))
        );
    })([
        function (t, n) {
            t.exports = e;
        },
        function (e, n) {
            e.exports = t;
        },
        function (e, t) {
            e.exports = n;
        },
        function (e, t) {
            e.exports = o;
        },
        function (e, t) {
            e.exports =
                '<div class="svc-question__adorner"\n  data-bind="css: rootCss(), attr: { \'data-sv-drop-target-survey-element\': element.name || null }, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }">\n  <div data-bind="click: koSelect, key2click, clickBubble: false, css: css()">\n    \x3c!-- ko if: allowDragging --\x3e\n    <div class="svc-question__drag-area" data-bind="event: {pointerdown: (model, event)=>{onPointerDown(event)}}">\n      \x3c!-- ko component: { name: \'sv-svg-icon\', params: { css: \'svc-question__drag-element\', iconName: \'icon-drag-area-indicator_24x16\', size: 24 } } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko component: { name: \'sv-template-renderer\', params: { componentData: null, templateData: templateData } } --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: koIsEmptyElement() && !$data.placeholderComponentData --\x3e\n    <div class="svc-panel__placeholder_frame">\n      <div class="svc-panel__placeholder" data-bind="text: placeholderText"></div>\n    </div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: koIsEmptyElement() && !!$data.placeholderComponentData --\x3e\n    \x3c!-- ko let: { question: placeholderComponentData.data }  --\x3e\n    \x3c!-- ko component: { name: \'sv-template-renderer\', params: { componentData: null, templateData: placeholderComponentData } } --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: adornerComponent --\x3e\n    \x3c!-- ko component: { name: adornerComponent, params: { model: $data } } --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n\n    <div class="svc-question__content-actions">\n      \x3c!-- ko component: { name: \'sv-action-bar\', params: { model: actionContainer, handleClick: false } } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko ifnot: creator.isCreatorDisposed --\x3e\n<div class="svc-creator" data-bind="css: {\'svc-creator--mobile\' : creator.isMobileView }">\n  <div>\n    \x3c!-- ko component: { name: \'svc-svg-bundle\'} --\x3e\n    \x3c!-- /ko --\x3e\n  </div>\n  <div class="svc-full-container svc-creator__area svc-flex-column"\n    data-bind="css: { \'svc-creator__area--with-banner\': !creator.haveCommercialLicense }">\n    <div class="svc-flex-row svc-full-container"\n      data-bind="css : { \'svc-creator__side-bar--left\': creator.sidebarLocation == \'left\' }">\n      <div class="svc-flex-column svc-flex-row__element svc-flex-row__element--growing">\n        <div class="svc-top-bar">\n          <div class="svc-tabbed-menu-wrapper" data-bind="visible: creator.showTabs">\n            \x3c!-- ko component: { name: \'svc-tabbed-menu\', params: { model: creator.tabbedMenu } } --\x3e\n            \x3c!-- /ko --\x3e\n          </div>\n          \x3c!-- ko if: creator.showToolbar --\x3e\n          <div class="svc-toolbar-wrapper" data-bind="visible: creator.showToolbar">\n            \x3c!-- ko component: { name: \'sv-action-bar\', params: { model: creator.toolbar } } --\x3e\n            \x3c!-- /ko --\x3e\n          </div>\n          \x3c!-- /ko --\x3e\n        </div>\n        <div class="svc-creator__content-wrapper svc-flex-row"\n          data-bind="css: {\'svc-creator__content-wrapper--footer-toolbar\' : creator.isMobileView }">\n          <div class="svc-creator__content-holder svc-flex-column">\n            \x3c!-- ko foreach: creator.tabs --\x3e\n            \x3c!-- ko if: $parent.creator.viewType == id && ($data.visible === undefined || $data.visible) --\x3e\n            <div class="svc-creator-tab"\n              data-bind="attr: { id: \'scrollableDiv-\' + id }, css: { \'svc-creator__toolbox--right\': $parent.creator.toolboxLocation == \'right\' }">\n              \x3c!-- ko component: { name: componentContent, params: { creator: $parent.creator, data: data } } --\x3e\n              \x3c!-- /ko --\x3e\n            </div>\n            \x3c!-- /ko --\x3e\n            \x3c!-- /ko --\x3e\n          </div>\n        </div>\n        \x3c!-- ko if: creator.isMobileView --\x3e\n        <div class="svc-footer-bar">\n          <div class="svc-toolbar-wrapper" data-bind="visible: creator.isMobileView">\n            \x3c!-- ko component: { name: \'sv-action-bar\', params: { model: creator.footerToolbar } } --\x3e\n            \x3c!-- /ko --\x3e\n          </div>\n        </div>\n        \x3c!-- /ko --\x3e\n      </div>\n      <div data-bind="if: creator.sidebar, css: { \'sv-mobile-side-bar\': creator.isMobileView }">\n        <svc-side-bar params="model: creator.sidebar"> </svc-side-bar>\n      </div>\n    </div>\n    \x3c!-- ko ifnot: creator.haveCommercialLicense --\x3e\n    <div class="svc-creator__banner">\n</div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko component: { name: \'sv-notifier\', params: { notifier: creator.notifier } } --\x3e\n    \x3c!-- /ko --\x3e\n  </div>\n</div>\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko if: isToolboxVisible --\x3e\n<svc-adaptive-toolbox params="model: creator"></svc-adaptive-toolbox>\n\x3c!-- /ko --\x3e\n<div class="svc-tab-designer" data-bind="css: getRootCss(), click: clickDesigner">\n  <div class="svc-tab-designer_content">\n    \x3c!-- ko if: showPlaceholder --\x3e\n    \x3c!-- ko if: (creator.showHeaderInEmptySurvey && creator.allowEditSurveyTitle) --\x3e\n    <div class="svc-designer-header">\n      \x3c!-- ko template: { name: \'survey-header\', data: survey } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n    <div class="svc-designer__placeholder-container"\n      data-bind="attr: { \'data-sv-drop-target-survey-element\': \'newGhostPage\' }">\n      <span class="svc-designer-placeholder-text svc-text svc-text--normal" data-bind="text: placeholderText"> </span>\n      <svc-page class="svc-designer-placeholder-page" params="survey: survey, creator: creator, page: newPage">\n      </svc-page>\n    </div>\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: !showPlaceholder --\x3e\n\n    <div data-bind="css: designerCss, style:{maxWidth: survey.renderedWidth}">\n      \x3c!-- ko if: creator.allowEditSurveyTitle --\x3e\n      <div class="svc-designer-header">\n        \x3c!-- ko template: { name: \'survey-header\', data: survey } --\x3e\n        \x3c!-- /ko --\x3e\n      </div>\n      \x3c!-- /ko --\x3e\n\n      \x3c!-- ko if: survey.isShowProgressBarOnTop --\x3e\n      \x3c!-- ko component: { name: \'sv-progress-\' + survey.progressBarType, params: { model: survey } } --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n\n      \x3c!-- ko ifnot: creator.pageEditMode === \'bypage\' --\x3e\n      \x3c!-- ko foreach: survey.pages --\x3e\n      <svc-page class="svc-page"\n        data-bind="attr: { \'data-sv-drop-target-survey-element\': $data.name, \'data-sv-drop-target-page\': $data.name }"\n        params="survey: $parent.survey, page: $data, creator: $parent.creator"></svc-page>\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko if: showNewPage --\x3e\n      <svc-page class="svc-page" data-bind="attr: { \'data-sv-drop-target-survey-element\': \'newGhostPage\' }"\n        params="survey: survey, creator: creator, page: newPage"></svc-page>\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n\n      \x3c!-- ko if: pagesController.page2Display && creator.pageEditMode === \'bypage\' --\x3e\n      <svc-page class="svc-page"\n        data-bind="attr: { \'data-sv-drop-target-survey-element\': \'newGhostPage\', \'data-sv-drop-target-page\': pagesController.page2Display.name }"\n        params="survey: survey, page: pagesController.page2Display, creator: creator"></svc-page>\n      \x3c!-- /ko --\x3e\n\n      \x3c!-- ko if: survey.isShowProgressBarOnBottom --\x3e\n      \x3c!-- ko component: { name: \'sv-progress-\' + survey.progressBarType, params: { model: survey } } --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n\n    \x3c!-- ko if: creator.showPageNavigator --\x3e\n    <div class="svc-tab-designer__page-navigator">\n      <svc-page-navigator params="controller: pagesController, pageEditMode: creator.pageEditMode">\n      </svc-page-navigator>\n    </div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-creator-tab__content svc-embed-tab__content">\n  <survey-widget params="model: survey"></survey-widget>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-creator-tab__content">\n    <div class="svc-json-editor-tab__content">\n        <div class="svc-json-editor-tab__ace-editor"></div>\n    </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-creator-tab__content">\n  <div class="svc-json-editor-tab__content">\n    <textarea class="svc-json-editor-tab__content-area"\n      data-bind="textInput: text, disable: readOnly, attr: { \'aria-label\': ariaLabel }, event: { keydown: checkKey}">\n    </textarea>\n    \x3c!-- ko if: userFriendlyErrors.length !== 0 --\x3e\n    <button type="button" class="svc-json-editor-tab__errros_button"\n      data-bind="text: errorButtonText, click: toggleErrors"></button>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: canShowErrors --\x3e\n    <div class="svc-json-editor-tab__content-errors" data-bind="foreach: userFriendlyErrors">\n      <span><b>Error:</b></span>\n      <span data-bind="text: $data"></span>\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-creator-tab__content">\n  <div class="svc-plugin-tab__content svc-logic-tab__content" data-bind="css: { \'svc-logic-tab__empty\': !hasItems }">\n    \x3c!-- ko template: { name: \'survey-content\', data: itemsSurvey  } --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: !hasItems --\x3e\n    <div class="svc-logic-tab__content-empty">\n      <span class="svc-text" data-bind="text: $data.emptyTabPlaceholder"></span>\n    </div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: !readOnly --\x3e\n    <div role="button" class="svc-logic-tab__content-action svc-btn"\n      data-bind="click: addNewButton.action, key2click, clickBubble: false, css: {\'svc-logic-tab__content-action--disabled\': (addNewButton.enabled !== undefined && !addNewButton.enabled) }">\n      <span class="svc-text svc-text--normal svc-text--bold" data-bind="text: addNewButton.title">\n      </span>\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                "<div data-bind=\"css: question.koCss().selectWrapper\">\n  \x3c!-- ko ifnot: question.isReadOnly --\x3e\n  <div data-bind=\"css: question.getControlClass(),\n  click: click, \n  event: { keyup: keyup },\n  attr: { \n    id: question.inputId, \n    required: question.isRequired, \n    tabindex: question.isInputReadOnly ? undefined : 0,\n    disabled: question.isInputReadOnly,\n    role: question.ariaRole,\n    'aria-required': question.ariaRequired, \n    'aria-label': question.ariaLabel, \n    'aria-invalid': question.ariaInvalid, \n    'aria-describedby': question.ariaDescribedBy \n  },\">\n    <div data-bind=\"css: question.koCss().controlValue\">\n      \x3c!-- ko if: question.selectedItemLocText --\x3e\n      \x3c!-- ko template: { name: 'survey-string', data: question.selectedItemLocText } --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      <div data-bind=\"text: question.readOnlyText\"></div>\n    </div>\n    \x3c!-- ko if: (question.allowClear && question.cssClasses.cleanButtonIconId) --\x3e\n    <div data-bind=\"css: question.koCss().cleanButton, click: clear, visible: !question.isEmpty() \">\n      \x3c!-- ko component: { name: 'sv-svg-icon', params: { css: question.cssClasses.cleanButtonSvg, iconName: question.cssClasses.cleanButtonIconId, size: 'auto', title: question.clearCaption } } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- ko component: { name: \"sv-popup\", params: { model: model.popupModel }} --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: question.isReadOnly --\x3e\n  <div disabled data-bind=\"css: question.getControlClass(), attr: { id: question.inputId }, \">\n    \x3c!-- ko if: question.selectedItemLocText --\x3e\n    \x3c!-- ko template: { name: 'survey-string', data: question.selectedItemLocText } --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n    <div data-bind=\"text: question.readOnlyText\"></div>\n  </div>\n  \x3c!-- /ko --\x3e\n</div>";
        },
        function (e, t) {
            e.exports =
                '<div class="svc-creator-tab__content svc-translation-tab">\n  <div class="st-content">\n    \x3c!-- ko if: $data.isEmpty --\x3e\n    <div class="st-no-strings">\n      <span data-bind="text: $data.noStringsText"></span>\n    </div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko ifnot: $data.isEmpty --\x3e\n    <div class="svc-flex-column st-strings-wrapper">\n      <div class="svc-flex-row st-strings-header">\n        \x3c!-- ko template: { name: \'survey-content\', data: $data.stringsHeaderSurvey  } --\x3e\x3c!-- /ko --\x3e\n      </div>\n      <div class="svc-flex-row svc-plugin-tab__content st-strings">\n        \x3c!-- ko template: { name: \'survey-content\', data: $data.stringsSurvey  } --\x3e\x3c!-- /ko --\x3e\n      </div>\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n</div>\n';
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko if: page --\x3e\n<div class="svc-page__content"\n  data-bind="click: select, key2click, clickBubble: false, css: css, attr: { id: page.id }, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }">\n  <div class="svc-page__content-actions">\n    \x3c!-- ko component: { name: \'sv-action-bar\', params: { model: actionContainer } } --\x3e\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- ko template: { name: \'survey-page\', data: page } --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: showAddQuestionButton --\x3e\n  <div class="svc-page__add-new-question svc-btn"\n    data-bind="click: addNewQuestion, key2click, clickBubble: false, event: { mouseover: function(m, e) { hoverStopper(e, $element); }}">\n    <span class="svc-text svc-text--normal svc-text--bold" data-bind="text: $data.addNewQuestionText">\n    </span>\n    \x3c!-- ko with: questionTypeSelectorModel --\x3e\n    <button type="button"\n      data-bind="click: action, key2click, clickBubble: false, attr: { title: title, \'aria-label\': title }"\n      class="svc-page__question-type-selector">\n      <sv-svg-icon class="svc-page__question-type-selector-icon" params="iconName: iconName, size: 24, title: title">\n      </sv-svg-icon>\n      <sv-popup params="model: popupModel"></sv-popup>\n    </button>\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- /ko --\x3e\n</div>\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                "<div data-bind=\"css: cssClasses\">\n  \x3c!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: templateData } } --\x3e\n  \x3c!-- /ko --\x3e\n</div>\n";
        },
        function (e, t) {
            e.exports =
                '<span data-bind="class: className">\n    <span class="svc-string-editor__content">\n        <div class="svc-string-editor__border">\n            <sv-svg-icon class="svc-string-editor__button svc-string-editor__button--edit" data-bind="click: edit"\n                params="iconName: \'icon-edit\', size: 16"></sv-svg-icon>\n        </div>\n        <span class="svc-string-editor__input">\n            \x3c!-- ko ifnot: koHasHtml --\x3e\n            \x3c!-- ko template: {afterRender: afterRender} --\x3e\n            <span role="textbox" class="sv-string-editor" spellcheck="false"\n                data-bind="text: editValue, event: { focus: onFocus, blur: onBlur, input: onInput, keydown: onKeyDown, keyup: onKeyUp, mouseup: onMouseUp, compositionstart: onCompositionStart, compositionend: onCompositionEnd }, click: edit, attr: { \'aria-placeholder\': placeholder, \'aria-label\': this.placeholder || \'content editable\', contenteditable: contentEditable }"></span>\n            \x3c!-- /ko --\x3e\n            \x3c!-- /ko --\x3e\n            \x3c!-- ko if: koHasHtml --\x3e\n            <span role="textbox" class="sv-string-editor sv-string-editor--html" spellcheck="false"\n                data-bind="html: editValue, event: { focus: onFocus, blur: onBlur, keydown: onKeyDown, keyup: onKeyUp, mouseup: onMouseUp, compositionstart: onCompositionStart, compositionend: onCompositionEnd }, click: edit, attr: { \'aria-placeholder\': placeholder, \'aria-label\': this.placeholder || \'content editable\', contenteditable: contentEditable }"></span>\n            \x3c!-- /ko --\x3e\n            \x3c!-- ko if: showCharacterCounter --\x3e\n            \x3c!-- ko component: { name: \'sv-character-counter\', params: { counter: characterCounter, remainingCharacterCounter: getCharacterCounterClass } } --\x3e\n            \x3c!-- /ko --\x3e\n            \x3c!-- /ko --\x3e\n        </span>\n    </span>\n    \x3c!-- ko if: errorText --\x3e\n    <span class="svc-string-editor__error" data-bind="text: errorText"></span>\n    \x3c!-- /ko --\x3e\n</span>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-question__adorner"\n  data-bind="css: rootCss(), attr: { \'data-sv-drop-target-survey-element\': element.name || null }, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }">\n  <div data-bind="click: $data.element.isInteractiveDesignElement ? koSelect : null, key2click, clickBubble: false, css: css(), \n  attr: { tabindex: $data.element.isInteractiveDesignElement ? undefined : -1 }">\n    \x3c!-- ko if: allowDragging && $data.element.isInteractiveDesignElement --\x3e\n    <div class="svc-question__drag-area" data-bind="event: {pointerdown: (model, event)=>{onPointerDown(event)}}">\n      \x3c!-- ko component: { name: \'sv-svg-icon\', params: { css: \'svc-question__drag-element\', iconName: \'icon-drag-area-indicator_24x16\', size: 24 } } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko component: { name: \'sv-template-renderer\', params: { componentData: null, templateData: templateData } } --\x3e\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: koIsEmptyElement() --\x3e\n    <div class="svc-panel__placeholder_frame">\n      <div class="svc-panel__placeholder" data-bind="text: placeholderText"></div>\n      \x3c!-- ko if: showAddQuestionButton --\x3e\n      <div class="svc-panel__add-new-question svc-action-button"\n        data-bind="click: addNewQuestion, key2click, clickBubble: false">\n        <span class="svc-text svc-text--normal svc-text--bold" data-bind="text: $data.addNewQuestionText">\n        </span>\n      </div>\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: adornerComponent && $data.element.isInteractiveDesignElement --\x3e\n    \x3c!-- ko component: { name: adornerComponent, params: { model: $data } } --\x3e\n    \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: !koIsEmptyElement() && showAddQuestionButton --\x3e\n    <div class="svc-panel__add-new-question-container">\n      <div class="svc-panel__add-new-question svc-action-button"\n        data-bind="click: addNewQuestion, key2click, clickBubble: false">\n        <span class="svc-text svc-text--normal svc-text--bold" data-bind="text: $data.addNewQuestionText">\n        </span>\n      </div>\n      \x3c!-- ko with: questionTypeSelectorModel --\x3e\n      <button type="button"\n        data-bind="click: action, key2click, clickBubble: false, attr: { title: $data.addNewQuestionText }"\n        class="svc-panel__question-type-selector">\n        <sv-svg-icon class="svc-panel__question-type-selector-icon" params="iconName: iconName, size: 24"></sv-svg-icon>\n        <sv-popup params="model: popupModel"></sv-popup>\n      </button>\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: $data.element.isInteractiveDesignElement --\x3e\n    <div class="svc-question__content-actions">\n      \x3c!-- ko component: { name: \'sv-action-bar\', params: { model: actionContainer, handleClick: false } } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-question__dropdown-choices--wrapper">\n  <div class="svc-question__dropdown-choices">\n    \x3c!-- ko foreach: { data: getRenderedItems(), as: \'item\' }  --\x3e\n    <div data-bind="css: $parent.getChoiceCss()">\n      \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: $parent.itemComponent, data: item } } } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- ko if: needToCollapse --\x3e\n  <svc-action-button params="text: getButtonText(), click: switchCollapse, allowBubble: true">\n  </svc-action-button>\n  \x3c!-- /ko --\x3e\n</div>';
        },
        function (e, t) {
            e.exports =
                '<svc-action-button\n  params="text: linkValueText, click: koClickLink, selected: isSelected, disabled: !isClickable, classes: linkSetButtonCssClasses, title: tooltip">\n</svc-action-button>\n\x3c!-- ko if: !isReadOnly && showClear --\x3e\n<svc-action-button\n  params="text: clearCaption, click: koClearLink, selected: isSelected, disabled: false, classes: linkClearButtonCssClasses">\n</svc-action-button>\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                "\x3c!-- ko if: (!!embeddedSurvey && !!embeddedSurvey.currentPage) --\x3e\n<div\n  data-bind=\"attr: { id: currentPageId }, template: { name: 'survey-page', data: embeddedSurvey.currentPage }\">\n</div>\n\x3c!-- /ko --\x3e";
        },
        function (e, t) {
            e.exports =
                '<div class="svc-image-question-controls">\n  \x3c!-- ko if: (allowEdit && !isUploading && !$data.koIsEmptyImageLink()) --\x3e\n  <input type="file" aria-hidden="true" tabindex="-1" accept="image/*" class="svc-choose-file-input" />\n  <sv-svg-icon class="svc-image-question-controls__button" data-bind="click: chooseFile, key2click"\n    params="iconName: \'icon-file\', size: 24"></sv-svg-icon>\n  \x3c!-- /ko --\x3e\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-rating-question-content">\n  <div class="svc-rating-question-controls svc-item-value-controls">\n    \x3c!-- ko if: allowRemove --\x3e\n    <sv-svg-icon data-bind="class: removeClassNames, click: removeItem, key2click, attr: { \'aria-label\': removeTooltip }"\n      params="iconName: \'icon-remove_16x16\', size: 16, title: removeTooltip">\n    </sv-svg-icon>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: allowAdd --\x3e\n    <sv-svg-icon data-bind="class: addClassNames, click: addItem, key2click, attr: { \'aria-label\': addTooltip }"\n      params="iconName: \'icon-add_16x16\', size: 16, title: addTooltip">\n    </sv-svg-icon>\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- ko component: { name: \'sv-template-renderer\', params: { componentData: null, templateData: templateData } } --\x3e\n  \x3c!-- /ko --\x3e\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-question__adorner"\n  data-bind="css: rootCss(), attr: { \'data-sv-drop-target-survey-element\': element.name }, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }">\n  \x3c!-- ko if: question.isInteractiveDesignElement --\x3e\n  <div class="svc-question__content" data-bind="click: koSelect, key2click, clickBubble: false, css: css()">\n    \x3c!-- ko if: allowDragging --\x3e\n      <div class="svc-question__drag-area"\n        data-bind="visible:allowDragging, event: {pointerdown: (model, event)=>{onPointerDown(event)}}">\n        <div class="svc-question__drag-element"></div>\n      </div>\n    \x3c!-- /ko --\x3e\n    <div class="svc-widget__content">\n      \x3c!-- ko component: { name: \'sv-template-renderer\', params: { componentData: null, templateData: templateData } } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- ko if: isEmptyElement --\x3e\n    <div class="svc-panel__placeholder_frame">\n      <div class="svc-panel__placeholder" data-bind="text: placeholderText"></div>\n    </div>\n    \x3c!-- /ko --\x3e\n\n    <div class="svc-question__content-actions">\n      \x3c!-- ko component: { name: \'sv-action-bar\', params: { model: actionContainer } } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n  </div>\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko ifnot: question.isInteractiveDesignElement --\x3e\n  \x3c!-- ko component: { name: \'sv-template-renderer\', params: { componentData: null, templateData: templateData } } --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: isEmptyElement --\x3e\n  <div class="svc-panel__placeholder_frame">\n    <div class="svc-panel__placeholder" data-bind="text: placeholderText"></div>\n  </div>\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-item-value-wrapper"\n  data-bind="event: { pointerdown: function (model, event) { onPointerDown(event); return true; } },attr: attributes, css: { \'svc-item-value--new\': isNew, \'svc-item-value--dragging\': isDragging, \'svc-item-value--ghost\': isDragDropGhost, \'svc-item-value--movedown\':isDragDropMoveDown, \'svc-item-value--moveup\':isDragDropMoveUp }">\n  <div class="svc-item-value__ghost"></div>\n  <div class="svc-item-value-controls">\n    \x3c!-- ko if: isDraggable --\x3e\n    <span class="svc-item-value-controls__button svc-item-value-controls__drag">\n      <sv-svg-icon class="svc-item-value-controls__drag-icon"\n        params="iconName: \'icon-drag-area-indicator\', size: 24, title: dragTooltip"></sv-svg-icon>\n    </span>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: allowAdd --\x3e\n    <sv-svg-icon class="svc-item-value-controls__button svc-item-value-controls__add"\n      data-bind="click: add, key2click, attr: { \'aria-label\': tooltip }"\n      params="iconName: \'icon-add_16x16\', size: 16, title: tooltip">\n    </sv-svg-icon>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko if: allowRemove --\x3e\n    <sv-svg-icon class="svc-item-value-controls__button svc-item-value-controls__remove"\n      data-bind="click: remove, key2click, attr: { \'aria-label\': tooltip }, event: { blur: koOnFocusOut }"\n      params="iconName: \'icon-remove_16x16\', size: 16, title: tooltip">\n    </sv-svg-icon>\n    \x3c!-- /ko --\x3e\n  </div>\n\n  <div class="svc-item-value__item" data-bind="click: select">\n    \x3c!-- ko component: { name: \'sv-template-renderer\', params: { componentData: null, templateData: templateData } } --\x3e\n    \x3c!-- /ko --\x3e\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div\n  data-bind="event: { pointerdown: function(model, event) { return onPointerDown(event); } }, attr: attributes, css: getRootCss()">\n  <div class="svc-image-item-value-wrapper__ghost" data-bind="style: getNewItemStyle()"></div>\n\n  <div class="svc-image-item-value-wrapper__content">\n    <input type="file" aria-hidden="true" tabindex="-1" accept="image/*" class="svc-choose-file-input" />\n\n    \x3c!-- ko ifnot: isNew --\x3e\n    <div class="svc-image-item-value__item">\n      \x3c!-- ko component: { name: \'sv-template-renderer\', params: { componentData: null, templateData: templateData } } --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n\n    <sv-svg-icon class="svc-image-item-value-controls__button svc-image-item-value-controls__drag-area-indicator"\n      data-bind="event: { pointerdown: function(model, event) { onPointerDown(event); } }"\n      params="iconName: \'icon-drag-area-indicator\', size: 24">\n    </sv-svg-icon>\n\n    <div class="svc-image-item-value-controls" data-bind="event: { pointerdown: blockEvent }">\n      \x3c!-- ko if: allowRemove && !isUploading --\x3e\n      <sv-svg-icon class="svc-image-item-value-controls__button svc-image-item-value-controls__choose-file"\n        data-bind="click: chooseFile, key2click" params="iconName: \'icon-file\', size: 24"></sv-svg-icon>\n      <sv-svg-icon class="svc-image-item-value-controls__button svc-image-item-value-controls__remove"\n        data-bind="click: remove, key2click" params="iconName: \'icon-delete\', size: 24"></sv-svg-icon>\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: isNew --\x3e\n    <div class="svc-image-item-value__item" data-bind="event: { dragover: dragover, drop: drop, dragleave: dragleave }">\n      <div class="sd-imagepicker__item sd-imagepicker__item--inline">\n        <label class="sd-imagepicker__label">\n          <div data-bind="style: getNewItemStyle()" class="sd-imagepicker__image"></div>\n        </label>\n      </div>\n    </div>\n\n    <div class="svc-image-item-value-controls" data-bind="event: { pointerdown: blockEvent }">\n      \x3c!-- ko if: allowAdd && !isUploading --\x3e\n      <sv-svg-icon class="svc-image-item-value-controls__button svc-image-item-value-controls__add"\n        data-bind="click: chooseNewFile, key2click, clickBubble: false" params="iconName: \'icon-add-lg\', size: 24">\n      </sv-svg-icon>\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-matrix-cell" tabindex="-1"\n  data-bind="click: selectContext, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }">\n  <div class="svc-matrix-cell--selected" data-bind="css: { \'svc-visible\': isSelected }"></div>\n\n  \x3c!-- ko component: { name: \'sv-template-renderer\', params: { componentData: null, templateData: templateData } } --\x3e\n  \x3c!-- /ko --\x3e\n\n  \x3c!-- ko if: $data.isSupportCellEditor --\x3e\n  <div class="svc-matrix-cell__question-controls">\n    <sv-svg-icon class="svc-matrix-cell__question-controls-button" data-bind="click: editQuestion, key2click"\n      params="iconName: \'icon-edit\', size: 24"></sv-svg-icon>\n  </div>\n  \x3c!-- /ko --\x3e\n\n</div>';
        },
        function (e, t) {
            e.exports =
                "\x3c!-- ko let: { question: survey.getAllQuestions()[0] } --\x3e\n  \x3c!-- ko component: { name: survey.getElementWrapperComponentName(question), params: { componentData:  survey.getElementWrapperComponentData(question), templateData: { name: question.koElementType, data: question } } } --\x3e\n  \x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e";
        },
        function (e, t) {
            e.exports =
                '<div class="svc-question__adorner">\n  <div class="svc-question__content svc-question__content--selected-no-border">\n\n    \x3c!-- ko component: { name: \'sv-template-renderer\', params: { componentData: null, templateData: templateData } } --\x3e\n    \x3c!-- /ko --\x3e\n\n  </div>\n</div>\n';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-question__adorner">\n  <div class="svc-question__content svc-question__content--selected-no-border">\n\n    \x3c!-- ko component: { name: \'sv-template-renderer\', params: { componentData: null, templateData: templateData } } --\x3e\n    \x3c!-- /ko --\x3e\n\n    <div class="svc-question__dropdown-choices">\n      \x3c!-- ko foreach: { data: question.visibleChoices, as: \'item\' }  --\x3e\n        <div class="svc-question__dropdown-choice">\n            \x3c!-- ko component: { name: question.getItemValueWrapperComponentName(item), params: { componentData:  question.getItemValueWrapperComponentData(item), templateData: { name: \'survey-radiogroup-item\', data: item } } } --\x3e\n            \x3c!-- /ko --\x3e\n        </div>\n      \x3c!-- /ko --\x3e\n  </div>\n\n  </div>\n</div>\n';
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko if: data.disabled --\x3e\n<span class="svc-action-button svc-action-button--disabled"\n  data-bind="text:data.text, class: data.classes, attr: { title: data.title}"></span>\n\x3c!-- /ko --\x3e\n\x3c!-- ko ifnot: data.disabled --\x3e\n<span role="button" class="svc-action-button"\n  data-bind="text:data.text, click: onClick, key2click, attr: { title: data.title, \'aria-label\': data.text }, class: data.classes, css:{\'svc-action-button--selected\':data.selected}"></span>\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                '<div data-bind="css: question.cssClasses.root">\n  <span data-bind="css: question.cssClasses.swatch, style: question.getSwatchStyle()"></span>\n  <input autocomplete="off" data-bind="disable: question.isInputReadOnly, attr: { id: question.inputId, placeholder: question.renderedPlaceholder, \'aria-required\': question.ariaRequired, \'aria-label\': question.ariaLabel, \'aria-invalid\': question.ariaInvalid, \'aria-describedby\': question.ariaDescribedBy }, \n    event: { change: question.koOnChange, blur: question.koOnBlur, beforeinput: question.koOnBeforeInput },\n    value: question.renderedValue,\n    css: question.cssClasses.control"></input>\n  <label data-bind="css: question.cssClasses.colorDropdown">\n    \x3c!-- ko component: { name: \'sv-svg-icon\', params: { iconName: question.cssClasses.colorDrodownIcon, size: \'auto\' } } --\x3e\x3c!-- /ko --\x3e\n    <input type="color"\n      data-bind="css: question.cssClasses.colorInput, value: question.renderedValue, event: { change: question.koOnColorInputChange }">\n  </label>\n</div>';
        },
        function (e, t) {
            e.exports =
                "<div data-bind=\"css: question.cssClasses.root, event: { keydown: question.koOnKeyDown }\">\n  <input autocomplete=\"off\" data-bind=\"disable: question.isInputReadOnly, attr: { id: question.inputId, placeholder: question.renderedPlaceholder, 'aria-required': question.ariaRequired, 'aria-label': question.ariaLabel, 'aria-invalid': question.ariaInvalid, 'aria-describedby': question.ariaDescribedBy }, \n    event: { change: question.koOnChange, keydown: question.koOnInputKeyDown, blur: question.koOnBlur, focus: question.koOnFocus, beforeinput: question.koOnBeforeInput },\n    value: question.renderedValue,\n    css: question.cssClasses.control\"></input>\n  <span data-bind=\"css: question.cssClasses.buttonsContainer\">\n    <button\n      data-bind=\"css: question.cssClasses.arrowButton, event: { mousedown: question.koOnDownButtonMouseDown, mouseup: question.koOnButtonMouseUp, blur: question.koOnBlur, focus: question.koOnFocus }\">\n      \x3c!-- ko component: { name: 'sv-svg-icon', params: { iconName: question.cssClasses.decreaseButtonIcon, size: 'auto' } } --\x3e\x3c!-- /ko --\x3e\n    </button>\n    <button\n      data-bind=\"css: question.cssClasses.arrowButton, event: { mousedown:  question.koOnUpButtonMouseDown, mouseup: question.koOnButtonMouseUp, blur: question.koOnBlur, focus: question.koOnFocus }\">\n      \x3c!-- ko component: { name: 'sv-svg-icon', params: { iconName: question.cssClasses.increaseButtonIcon, size: 'auto' } } --\x3e\x3c!-- /ko --\x3e\n    </button>\n  </span>\n</div>";
        },
        function (e, t) {
            e.exports =
                '<div\n  data-bind="css: question.cssClasses.root, event: { dragenter: question.ondragenter, dragover: question.ondragover, drop: question.ondrop, dragleave: question.ondragleave }">\n  <input type="text"\n    data-bind="css: question.cssClasses.control, value: question.koReadOnlyValue, event: { change: question.koOnInputChange, blur: question.koOnInputBlur }">\n  <div data-bind="css: question.cssClasses.buttonsContainer">\n    <button type="button"\n      data-bind="css: question.cssClasses.clearButton, disable: question.getIsClearButtonDisabled(), click: question.doclean">\n      \x3c!-- ko component: { name: \'sv-svg-icon\', params: { iconName: question.cssClasses.clearButtonIcon, size: \'auto\', title: question.clearButtonCaption } } --\x3e\x3c!-- /ko --\x3e\n    </button>\n    <label tabindex="0" role="button"\n      data-bind="css: question.cssClasses.chooseButton, attr: { for: question.inputId, \'aria-label\': question.chooseButtonCaption }">\n      \x3c!-- ko component: { name: \'sv-svg-icon\', params: { title: question.chooseButtonCaption, iconName: question.cssClasses.chooseButtonIcon, size: \'auto\' } } --\x3e\x3c!-- /ko --\x3e\n      <input type="file" tabindex="-1"\n        data-bind="css: question.cssClasses.fileInput, attr: { id: question.inputId, \'aria-required\': question.ariaRequired, \'aria-label\': question.ariaLabel, \'aria-invalid\': question.ariaInvalid, \'aria-describedby\': question.ariaDescribedBy, multiple: question.allowMultiple ? \'multiple\' : undefined, title: question.koInputTitle, accept: question.acceptedTypes }, event: { change: question.dochange }">\n    </label>\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko if: visible --\x3e\n<div class="svc-page-navigator__selector"\n    data-bind="click: togglePageSelector, key2click, attr: { title: pageSelectorCaption }, css: { \'svc-page-navigator__selector--opened\': isPopupOpened }">\n    <sv-svg-icon class="svc-page-navigator__navigator-icon" params="iconName: icon, size: 24"></sv-svg-icon>\n    <sv-popup params="model: popupModel, cssClass: \'svc-page-navigator__popup\'"></sv-popup>\n</div>\n<div>\n    \x3c!-- ko foreach: visibleItems --\x3e\n    <svc-page-navigator-item params="item: $data"></svc-page-navigator-item>\n    \x3c!-- /ko --\x3e\n</div>\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-page-navigator-item-content"\n  data-bind="click: action, key2click, css: { \'svc-page-navigator-item--selected\': active, \'svc-page-navigator-item--disabled\': disabled }">\n  <div class="svc-page-navigator-item__dot" data-bind="attr: { title: text }"></div>\n\n  <div class="svc-page-navigator-item__banner svc-item__banner">\n    <span class="svc-text svc-text--small svc-text--bold" data-bind="text: text"></span>\n    <span class="svc-page-navigator-item__dot"></span>\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko with: model --\x3e\n\x3c!-- ko if: isVisible --\x3e\n<div class="svc-object-selector__content" data-bind="component: { name: \'sv-list\', params: { model: list } }"></div>\n\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                "\x3c!-- ko  --\x3e\n    \x3c!-- ko template: { name: 'survey-content', data: model.survey  } --\x3e\n    \x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e";
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko using: model --\x3e\n<div class="svc-side-bar" data-bind="css: { \'svc-flyout-side-bar\' : flyoutPanelMode }, visible: hasVisibleTabs">\n  <div class="svc-side-bar__shadow" data-bind="click: collapseSidebar"></div>\n  <div class="svc-flex-column svc-side-bar__wrapper">\n    <div class="svc-side-bar__container" data-bind="visible: visible">\n      <div class="svc-side-bar__container-header">\n        <div class="svc-side-bar__container-actions">\n          \x3c!-- ko component: { name: \'sv-action-bar\', params: { model: toolbar } } --\x3e\n          \x3c!-- /ko --\x3e\n        </div>\n        \x3c!-- ko if: !!headerText --\x3e\n        <div class="svc-side-bar__container-title" data-bind="text: headerText">\n        </div>\n        \x3c!-- /ko --\x3e\n      </div>\n      <div class="svc-side-bar__container-content">\n        \x3c!-- ko foreach: tabs --\x3e\n        \x3c!-- ko component: { name: \'svc-side-bar-tab\', params: { item: $data } } --\x3e\n        \x3c!-- /ko --\x3e\n        \x3c!--/ko--\x3e\n      </div>\n      <div class="svc-side-bar__container-close">\n        <div class="sd-btn sd-btn--action svc-side-bar__container-close-button"\n          data-bind="text: closeText, click: collapseSidebar"> </div>\n      </div>\n    </div>\n  </div>\n</div>\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                "\x3c!-- ko if: item.visible --\x3e\n\x3c!-- ko component: { name: item.componentName, params: { model: item.model } } --\x3e\n\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e";
        },
        function (e, t) {
            e.exports =
                '<div class="svd-test-results">\n    <div class="svd-test-results__header">\n        <div class="svd-test-results__header-text" data-bind="text: surveyResultsText"></div>\n        <div class="svd-test-results__header-types">\n            <svc-action-button\n                params="text: surveyResultsTableText, click: selectTableClick, disabled: false, selected: isTableSelected">\n            </svc-action-button>\n            <svc-action-button\n                params="text: surveyResultsJsonText, click: selectJsonClick, disabled: false, selected: isJsonSelected">\n            </svc-action-button>\n        </div>\n    </div>\n    <div class="svd-test-results__text svd-light-bg-color" data-bind="visible: resultViewType === \'text\'">\n        <div data-bind="text: resultText"></div>\n    </div>\n    <div class="svd-test-results__table svd-light-bg-color" data-bind="visible: resultViewType === \'table\'">\n        <table>\n            <thead>\n                <tr class="svd-light-background-color">\n                    <th class="svd-dark-border-color" data-bind="text: resultsTitle"></th>\n                    <th class="svd-dark-border-color" data-bind="text: resultsDisplayValue"></th>\n                </tr>\n            </thead>\n            <tbody>\n                \x3c!-- ko foreach: resultData --\x3e\n                \x3c!-- ko component: { name: \'survey-results-table-row\', params: { model: $data } } --\x3e\n                \x3c!-- /ko --\x3e\n                \x3c!-- /ko --\x3e\n            </tbody>\n        </table>\n    </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '\x3c!-- ko with: model --\x3e\n<tr data-bind="click: toggle, key2click">\n    <td class="svd-dark-border-color"\n        data-bind="style: { paddingLeft: textMargin }">\n        \x3c!-- ko if: isNode --\x3e\n        <span class="svd-test-results__marker"\n              data-bind="css: { \'svd-test-results__marker--expanded\': !collapsed },\n                         style: { left: markerMargin }">\n            <sv-svg-icon params="iconName: \'icon-expand_16x16\', size: 16"></sv-svg-icon>\n        </span>\n        \x3c!-- /ko --\x3e\n        <span data-bind="text: title"></span></td>\n    <td data-bind="css: (isNode ? \'svd-test-results__node-value\' : \'svd-dark-border-color\'), text: getString(displayValue)"></td>\n</tr>\n\x3c!-- ko if: isNode && !collapsed --\x3e\n\x3c!-- ko foreach: data --\x3e\n\x3c!-- ko component: { name: \'survey-results-table-row\', params: { model: $data } } --\x3e\n\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e';
        },
        function (e, t) {
            e.exports =
                '<div data-bind="class: getRootCss(), event: { keydown: tryToZoom, mouseover: (device === \'desktop\' ? null : activateZoom), mouseout: (device === \'desktop\' ? null : deactivateZoom) }">\n  \x3c!-- ko if: hasFrame --\x3e\n  <div\n    class="svd-simulator-wrapper"\n    id="svd-simulator-wrapper"\n    data-bind="style: { width: simulatorFrame.frameWidth + \'px\', height: simulatorFrame.frameHeight + \'px\' }"\n  >\n    <div\n      class="svd-simulator-frame"\n      data-bind="style: { width: simulatorFrame.landscapedFrameWidth + \'px\', height: simulatorFrame.landscapedFrameHeight + \'px\' }, css: simulatorFrame.cssClass"\n    ></div>\n    <div\n      class="svd-simulator"\n      data-bind="style: { width: simulatorFrame.deviceWidth + \'px\', height: simulatorFrame.deviceHeight + \'px\', transform: \'scale(\' + simulatorFrame.scale + \') translate(-50%, -50%)\' }"\n    >\n      <survey-widget\n        class="svd-simulator-content"\n        params="model: survey"\n      ></survey-widget>\n    </div>\n  </div>\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko ifnot: hasFrame --\x3e\n  <survey-widget\n    class="svd-simulator-content"\n    params="model: survey"\n  ></survey-widget>\n  \x3c!-- /ko --\x3e\n</div>\n';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-survey-dropdown">\n  <select\n    data-bind="if: true, attr: {id: question.inputId, \'aria-label\': question.locTitle.renderedHtml, \'aria-invalid\': question.errors.length > 0, \'aria-describedby\': question.errors.length > 0 ? question.id + \'_errors\' : null}, value: question.renderedValue, valueAllowUnset: true, css: \'svc-survey-dropdown__control\'"\n  >\n    \x3c!-- ko if: question.showOptionsCaption --\x3e\n    <option data-bind="text:question.optionsCaption, value: null"></option>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko foreach: question.visibleChoices --\x3e\n    <option\n      data-bind="value: $data.value, text: $data.text, attr: { disabled: !$data.isEnabled }"\n    ></option>\n    \x3c!-- /ko --\x3e\n  </select>\n  <div class="svc-survey-dropdown__container">\n    <div\n      class="svc-survey-dropdown__form"\n      tabindex="0"\n      data-bind="css: { \'svc-survey-dropdown__form--disabled\': question.readOnly }, hasFocus: isFocused, event: { blur: onBlur }"\n    >\n      <span\n        data-bind="css: { \'svc-survey-dropdown__placeholder\': !question.renderedValue} , text: question.renderedValue || (question.showOptionsCaption ? question.optionsCaption : \'\') "\n      ></span>\n      <span\n        class="svc-survey-dropdown__button"\n        data-bind="click: toggle, key2click, disable: question.readOnly, css: { \'svc-survey-dropdown__button--active\': isExpanded }"\n      >\n        <sv-svg-icon\n          class="svc-survey-dropdown__button-icon"\n          params="iconName: \'icon-dropdownarrow\', size: 24"\n        ></sv-svg-icon>\n      </span>\n    </div>\n\n    <ul\n      class="svc-survey-dropdown__list"\n      data-bind="visible: isExpanded, event: { mousedown: function (data, e) { e.preventDefault(); }}"\n    >\n      \x3c!-- ko if: question.showOptionsCaption --\x3e\n      <li\n        class="svc-survey-dropdown__list-item"\n        data-bind="css: { \'svc-survey-dropdown__list-item--disabled\': !isEnabled, \'svc-survey-dropdown__list-item--selected\': question.koValue() == $data.value }, text:question.optionsCaption"\n      ></li>\n      \x3c!-- /ko --\x3e\n      \x3c!--ko foreach: question.visibleChoices--\x3e\n      <li\n        class="svc-survey-dropdown__list-item"\n        data-bind="css: { \'svc-survey-dropdown__list-item--disabled\': !isEnabled, \'svc-survey-dropdown__list-item--selected\': question.koValue() == $data.value }, text: $data.text, click: $parent.selectItem, key2click"\n      ></li>\n      \x3c!-- /ko --\x3e\n    </ul>\n  </div>\n  \x3c!-- ko if: question.hasOther --\x3e\n  <div\n    class="form-group"\n    data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.isOtherSelected } }, style: {display: question.isFlowLayout ? \'inline\': \'\'}"\n  ></div>\n  \x3c!-- /ko --\x3e\n</div>\n';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-creator-tab__content svc-test-tab__content"\n  data-bind="css: { \'svc-creator-tab__content--with-toolbar\' : isPageToolbarVisible }">\n  <div class="svc-plugin-tab__content">\n    <survey-simulator params="model: simulator"></survey-simulator>\n    \x3c!-- ko ifnot: isRunning --\x3e\n    <div role="button" class="svc-preview__test-again svc-btn"\n      data-bind="click: testAgainAction.action, key2click, clickBubble: false">\n      <span class="svc-text svc-text--normal svc-text--bold" data-bind="text: testAgainAction.title">\n      </span>\n    </div>\n    <survey-results params="survey: survey"></survey-results>\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- ko if: isPageToolbarVisible --\x3e\n  <div class="svc-plugin-tab__content-actions svc-test-tab__content-actions">\n    \x3c!-- ko component: { name: \'sv-action-bar\', params: { model: pages } } --\x3e\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- /ko --\x3e\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-tabbed-menu">\n  \x3c!-- ko foreach: renderedActions --\x3e\n  <span\n    class="svc-tabbed-menu-item-container"\n    data-bind="css: { \'sv-action--hidden\': !isVisible }, class: $data.css"\n  >\n    <div class="sv-action__content">\n    \x3c!-- ko component: { name: $data.component || \'svc-tabbed-menu-item\', params: { item: $data } } --\x3e\n    \x3c!-- /ko --\x3e\n    </div>\n  </span>\n  \x3c!-- /ko --\x3e\n</div>\n';
        },
        function (e, t) {
            e.exports =
                '<div\n  class="svc-tabbed-menu-item"\n  data-bind="click: action, key2click, css: { \'svc-tabbed-menu-item--selected\': active, \'svc-tabbed-menu-item--disabled\': disabled }"\n>\n  <span\n    class="svc-text svc-text--normal svc-tabbed-menu-item__text"\n    data-bind="text: title, css: { \'svc-text--bold\': active }"\n  ></span>\n</div>\n';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-toolbox">\n  <div class="svc-toolbox__container">\n    \x3c!-- ko ifnot: categories().length == 1 || !$data.toolbox.showCategoryTitles --\x3e\n    \x3c!-- ko foreach: categories --\x3e\n    <div class="svc-toolbox__category">\n      <div class="svc-toolbox__category-header"\n        data-bind="click: toggleState, key2click, css: { \'svc-toolbox__category-header--collapsed\': $data.toolbox.canCollapseCategories }">\n        <span class="svc-toolbox__category-title" data-bind="text: name"></span>\n        \x3c!-- ko if: $data.toolbox.canCollapseCategories --\x3e\n        <div class="svc-toolbox__category-header__controls">\n          <sv-svg-icon class="svc-toolbox__category-header__button svc-string-editor__button--expand"\n            data-bind="visible: collapsed" params="iconName: \'icon-arrow-down\', size: 24"></sv-svg-icon>\n          <sv-svg-icon class="svc-toolbox__category-header__button svc-string-editor__button--collapse"\n            data-bind="visible: !collapsed" params="iconName: \'icon-arrow-up\', size: 24"></sv-svg-icon>\n        </div>\n        \x3c!-- /ko --\x3e\n      </div>\n      \x3c!-- ko ifnot: collapsed --\x3e\n      \x3c!-- ko foreach: items --\x3e\n      \x3c!-- ko component: { name: $data.component || \'svc-toolbox-tool\', params: { item: $data, creator: $parents[1].creator, isCompact: false } } --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: categories().length == 1 || !$data.toolbox.showCategoryTitles --\x3e\n    <div class="svc-toolbox__category">\n      \x3c!-- ko foreach: $data.toolbox.visibleActions --\x3e\n      \x3c!-- ko component: { name: \'svc-toolbox-tool\', params: { item: $data, creator: $parent.creator, isCompact: false } } --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-toolbox" data-bind="css: { \'svc-toolbox--compact\': $data.toolbox.isCompact }">\n  <div class="svc-toolbox__container">\n    \x3c!-- ko ifnot: $data.toolbox.isCompact || categories().length == 1 || !$data.toolbox.showCategoryTitles --\x3e\n    \x3c!-- ko foreach: categories --\x3e\n    <div class="svc-toolbox__category" data-bind="css: { \'svc-toolbox__category--collapsed\': $data.collapsed }">\n      \x3c!-- ko if: $parent.categories().length > 1 --\x3e\n      <div class="svc-toolbox__category-header"\n        data-bind="click: toggleState, key2click, css: { \'svc-toolbox__category-header--collapsed\': $data.toolbox.canCollapseCategories }">\n        <span class="svc-toolbox__category-title" data-bind="text: name"></span>\n        \x3c!-- ko if: $data.toolbox.canCollapseCategories --\x3e\n        <div class="svc-toolbox__category-header__controls">\n          <sv-svg-icon class="svc-toolbox__category-header__button svc-string-editor__button--expand"\n            data-bind="visible: collapsed" params="iconName: \'icon-arrow-down\', size: 24"></sv-svg-icon>\n          <sv-svg-icon class="svc-toolbox__category-header__button svc-string-editor__button--collapse"\n            data-bind="visible: !collapsed" params="iconName: \'icon-arrow-up\', size: 24"></sv-svg-icon>\n        </div>\n        \x3c!-- /ko --\x3e\n      </div>\n      \x3c!-- /ko --\x3e\n      \x3c!-- ko foreach: items --\x3e\n      \x3c!-- ko component: { name: $data.component || \'svc-toolbox-tool\', params: { item: $data, creator: $parents[1].creator, isCompact: false } } --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: $data.toolbox.isCompact || categories().length == 1 || !$data.toolbox.showCategoryTitles --\x3e\n    <div class="svc-toolbox__category">\n      \x3c!-- ko foreach: $data.toolbox.renderedActions --\x3e\n      \x3c!-- ko component: { name: \'svc-toolbox-tool\', params: { item: $data, creator: $parent.creator, isCompact: $parent.toolbox.isCompact } } --\x3e\n      \x3c!-- /ko --\x3e\n      \x3c!-- /ko --\x3e\n    </div>\n    \x3c!-- /ko --\x3e\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-toolbox__item"\n  data-bind="attr: { role: \'button\', \'aria-label\': ariaLabel }, css: \'svc-toolbox__item--\' + item.iconName, click: (model, event)=>{ $parent.click(event); return true;}, key2click">\n  <span class="svc-toolbox__item-container">\n    <sv-svg-icon params="iconName: iconName, size: 24, title: ariaLabel"></sv-svg-icon>\n  </span>\n  \x3c!-- ko if: isCompact --\x3e\n  <span class="svc-toolbox__item-banner svc-item__banner">\n    <sv-svg-icon params="iconName: iconName, size: 24, title: ariaLabel" class="svc-toolbox__item-icon"></sv-svg-icon>\n    <span class="svc-toolbox__item-title" data-bind="text: title"></span>\n  </span>\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko ifnot: isCompact --\x3e\n  <span class="svc-toolbox__item-title" data-bind="text: title"></span>\n  \x3c!-- /ko --\x3e\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-toolbox__tool"\n    data-bind="css: { \'sv-action--hidden\': !$data.item.isVisible }, class: $data.item.css, event: { pointerdown: (model, event)=>{onPointerDown(event); return true;} }">\n    <div class="sv-action__content">\n        \x3c!-- ko if: $data.item.needSeparator && !$data.creator.toolbox.showCategoryTitles--\x3e\n        <div class="svc-toolbox__category-separator"></div>\n        \x3c!-- /ko --\x3e\n        \x3c!-- ko component: { name: $data.item.component || \'svc-toolbox-item\', params: { item: $data.item, creator: $data.creator, isCompact: $data.isCompact } } --\x3e\n        \x3c!-- /ko --\x3e\n    </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div class="svc-logo-image" data-bind="click: function(m, e) { return true; }, clickBubble: false">\n  <input type="file" aria-hidden="true" tabindex="-1" accept="image/*" class="svc-choose-file-input" />\n  \x3c!-- ko ifnot: survey.locLogo.koRenderedHtml --\x3e\n  \x3c!-- ko if: allowEdit && !isUploading --\x3e\n  <div class="svc-logo-image-placeholder" data-bind="click: chooseFile, key2click">\n    <svg>\n      <use xlink:href="#icon-logo"></use>\n    </svg>\n  </div>\n  \x3c!-- /ko --\x3e\n  \x3c!-- /ko --\x3e\n  \x3c!-- ko if: survey.locLogo.koRenderedHtml --\x3e\n  <div data-bind="css: containerCss, click: chooseFile, key2click">\n    \x3c!-- ko component: { name: \'sv-logo-image\', params: survey } --\x3e\n    \x3c!-- /ko --\x3e\n  </div>\n  \x3c!-- /ko --\x3e\n</div>';
        },
        function (e, t) {
            e.exports = '<div class="sd-translation-line-skeleton">\n</div>\n';
        },
        function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "Version", function () {
                    return Se;
                }),
                n.d(t, "CreatorViewModel", function () {
                    return s;
                }),
                n.d(t, "LogicOperatorViewModel", function () {}),
                n.d(t, "CreatorSurveyPageComponent", function () {
                    return f;
                }),
                n.d(t, "StringEditorViewModel", function () {
                    return w;
                }),
                n.d(t, "createQuestionViewModel", function () {
                    return M;
                }),
                n.d(t, "createPanelViewModel", function () {
                    return I;
                }),
                n.d(t, "QuestionLinkValue", function () {
                    return V;
                }),
                n.d(t, "QuestionEmbeddedSurvey", function () {
                    return N;
                }),
                n.d(t, "ActionButtonViewModel", function () {
                    return G;
                }),
                n.d(t, "QuestionColorImplementor", function () {
                    return Y;
                }),
                n.d(t, "QuestionColor", function () {
                    return J;
                }),
                n.d(t, "QuestionSpinEditorImplementor", function () {
                    return ee;
                }),
                n.d(t, "QuestionSpinEditor", function () {
                    return te;
                }),
                n.d(t, "QuestionFileEditor", function () {
                    return ie;
                }),
                n.d(t, "PageNavigatorView", function () {
                    return re;
                }),
                n.d(t, "PageNavigatorItemViewModel", function () {
                    return le;
                }),
                n.d(t, "DropdownEditorViewModel", function () {
                    return fe;
                }),
                n.d(t, "TabbedMenuViewModel", function () {}),
                n.d(t, "ToolboxViewModel", function () {
                    return _e;
                }),
                n.d(t, "KnockoutToolboxItemViewModel", function () {
                    return Me;
                }),
                n.d(t, "KnockoutToolboxToolViewModel", function () {
                    return Ie;
                }),
                n.d(t, "Skeleton", function () {}),
                n.d(t, "SurveyWidgetBinding", function () {}),
                n.d(t, "SurveyCreator", function () {
                    return Ve;
                }),
                n.d(t, "editorLocalization", function () {
                    return p.editorLocalization;
                }),
                n.d(t, "localization", function () {
                    return p.localization;
                }),
                n.d(t, "settings", function () {
                    return p.settings;
                }),
                n.d(t, "svgBundle", function () {
                    return p.svgBundle;
                }),
                n.d(t, "SurveyLogic", function () {
                    return p.SurveyLogic;
                }),
                n.d(t, "SurveyLogicUI", function () {
                    return p.SurveyLogicUI;
                }),
                n.d(t, "SurveyQuestionEditorDefinition", function () {
                    return p.SurveyQuestionEditorDefinition;
                }),
                n.d(t, "ToolboxToolViewModel", function () {
                    return p.ToolboxToolViewModel;
                }),
                n.d(t, "PropertyGridEditorCollection", function () {
                    return p.PropertyGridEditorCollection;
                }),
                n.d(t, "StylesManager", function () {
                    return p.StylesManager;
                });
            var o = n(0),
                a = n(1),
                i = n(5),
                s = (function () {
                    function e(e, t) {
                        (this.creator = e),
                            (this.rootNode = t),
                            this.creator.initKeyboardShortcuts(this.rootNode),
                            this.creator.initResponsivityManager(this.rootNode),
                            new a.ImplementorBase(this.creator.notifier),
                            new a.ImplementorBase(this.creator.toolbox),
                            new a.ImplementorBase(
                                this.creator.dragDropSurveyElements
                            ),
                            new a.ImplementorBase(this.creator.dragDropChoices),
                            new a.ImplementorBase(this.creator);
                    }
                    return (
                        (e.prototype.dispose = function () {
                            this.creator.removeKeyboardShortcuts(this.rootNode),
                                this.creator.resetResponsivityManager();
                        }),
                        e
                    );
                })();
            o.components.register("survey-creator", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = t.element,
                            a = new s(e.creator, n);
                        return (
                            o.utils.domNodeDisposal.addDisposeCallback(
                                n,
                                function () {
                                    a.dispose();
                                }
                            ),
                            a
                        );
                    },
                },
                template: i,
            });
            var r = n(6);
            o.components.register("svc-tab-designer", {
                viewModel: {
                    createViewModel: function (e) {
                        var t = e.data.model;
                        return (
                            new a.ImplementorBase(t),
                            new a.ImplementorBase(t.pagesController),
                            t
                        );
                    },
                },
                template: r,
            });
            var c = n(7);
            o.components.register("svc-tab-embed", {
                viewModel: {
                    createViewModel: function (e) {
                        var t = e.data;
                        return new a.ImplementorBase(t.model), t.model;
                    },
                },
                template: c,
            });
            var l = n(8);
            o.components.register("svc-tab-json-editor-ace", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = ace.edit(
                                t.element.nextElementSibling.querySelector(
                                    ".svc-json-editor-tab__ace-editor"
                                )
                            ),
                            o = e.data;
                        return (
                            new a.ImplementorBase(o.model),
                            o.model.init(n),
                            o.model
                        );
                    },
                },
                template: l,
            });
            var d = n(9);
            o.components.register("svc-tab-json-editor-textarea", {
                viewModel: {
                    createViewModel: function (e) {
                        var t = e.data;
                        new a.ImplementorBase(t.model);
                        var n = t.model;
                        return (n.canShowErrors = !1), n;
                    },
                },
                template: d,
            });
            var u = n(10);
            o.components.register("svc-tab-logic", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.data;
                        return (
                            new a.ImplementorBase(n.model),
                            new a.ImplementorBase(n.model.addNewButton),
                            n.model
                        );
                    },
                },
                template: u,
            });
            var v = n(3),
                p = n(2),
                m = n(11);
            o.components.register("sv-logic-operator", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.question;
                        return (
                            n.dropdownListModel ||
                                (n.dropdownListModel = new v.DropdownListModel(
                                    e.question
                                )),
                            Object(p.initLogicOperator)(n),
                            new a.ImplementorBase(n.dropdownListModel),
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
                                keyup: function (e, t) {
                                    var o;
                                    null === (o = n.dropdownListModel) ||
                                        void 0 === o ||
                                        o.keyHandler(t);
                                },
                            }
                        );
                    },
                },
                template: m,
            }),
                v.RendererFactory.Instance.registerRenderer(
                    "dropdown",
                    "logicoperator",
                    "sv-logic-operator"
                );
            var x = n(12);
            o.components.register("svc-tab-translation", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.data;
                        return (
                            new a.ImplementorBase(n.model),
                            n.model.makeObservable(function (e) {
                                new a.ImplementorBase(e);
                            }),
                            n.model
                        );
                    },
                },
                template: x,
            });
            Object.assign;
            function b(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                function o() {
                    this.constructor = e;
                }
                e.prototype =
                    null === t
                        ? Object.create(t)
                        : ((o.prototype = t.prototype), new o());
            }
            var g = n(13),
                f = (function (e) {
                    function t(t, n) {
                        var i = e.call(this, t, o.unwrap(n)) || this;
                        return (
                            (i.pageUpdater = o.computed(function () {
                                i.detachElement(i.page),
                                    (i._page = n),
                                    i.attachElement(i.page);
                            })),
                            new a.ImplementorBase(i),
                            i
                        );
                    }
                    return (
                        b(t, e),
                        (t.prototype.getPage = function () {
                            return o.unwrap(this._page);
                        }),
                        (t.prototype.dispose = function () {
                            this.pageUpdater.dispose(),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(p.PageAdorner);
            o.components.register("svc-page", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.creator,
                            o = new f(n, e.page);
                        return (
                            (o.onPageSelectedCallback = function () {
                                p.SurveyHelper.scrollIntoViewIfNeeded(
                                    t.element
                                );
                            }),
                            o
                        );
                    },
                },
                template: g,
            });
            var k = n(14),
                h = (function (e) {
                    function t(t, n, o) {
                        var a = e.call(this, t, n, o) || this;
                        return (
                            (a.creator = t),
                            (a.row = n),
                            (a.templateData = o),
                            a
                        );
                    }
                    return b(t, e), t;
                })(p.RowViewModel);
            o.components.register("svc-row", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.componentData.creator,
                            o = e.componentData.row,
                            i = new h(n, o, e.templateData);
                        return new a.ImplementorBase(i), i;
                    },
                },
                template: k,
            });
            var y = n(15),
                w = (function () {
                    function e(e, t, n) {
                        var i = this;
                        (this.locString = e),
                            (this.creator = t),
                            (this.implementor = void 0),
                            (this.getEditorElement = function (e) {
                                return e.nextSibling.getElementsByClassName(
                                    "sv-string-editor"
                                )[0];
                            }),
                            (this.afterRender = function () {
                                i.baseModel.afterRender();
                            }),
                            (this.errorText = o.observable(null)),
                            (this.baseModel = new p.StringEditorViewModelBase(
                                e,
                                t
                            )),
                            (this.baseModel.getEditorElement = function () {
                                return i.getEditorElement(n);
                            }),
                            (this.implementor = new a.ImplementorBase(
                                this.baseModel
                            )),
                            (this.focusEditor = function () {
                                i.getEditorElement(n).focus();
                            }),
                            (this.baseModel.blurEditor = function () {
                                var e = i.getEditorElement(n);
                                e.blur(), (e.spellcheck = !1);
                            }),
                            e.strChanged();
                    }
                    return (
                        (e.prototype.setLocString = function (e) {
                            return this.baseModel.setLocString(e), e;
                        }),
                        Object.defineProperty(e.prototype, "koHasHtml", {
                            get: function () {
                                return this.locString.koHasHtml();
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "editValue", {
                            get: function () {
                                return (
                                    (this.baseModel.focused &&
                                        this.baseModel.editAsText &&
                                        this.locString.text) ||
                                    this.locString.koRenderedHtml()
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "className", {
                            get: function () {
                                return this.baseModel.className(
                                    this.locString.koRenderedHtml()
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "placeholder", {
                            get: function () {
                                return this.baseModel.placeholder;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "contentEditable", {
                            get: function () {
                                return this.baseModel.contentEditable
                                    ? "true"
                                    : "false";
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "characterCounter", {
                            get: function () {
                                return this.baseModel.characterCounter;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            e.prototype,
                            "showCharacterCounter",
                            {
                                get: function () {
                                    return this.baseModel.showCharacterCounter;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "getCharacterCounterClass",
                            {
                                get: function () {
                                    return this.baseModel
                                        .getCharacterCounterClass;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }
                        ),
                        (e.prototype.onClick = function (e, t) {
                            this.baseModel.onClick(t);
                        }),
                        (e.prototype.onCompositionStart = function (e, t) {
                            this.baseModel.onCompositionStart(t);
                        }),
                        (e.prototype.onCompositionEnd = function (e, t) {
                            this.baseModel.onCompositionStart(t);
                        }),
                        (e.prototype.onInput = function (e, t) {
                            this.baseModel.onInput(t);
                        }),
                        (e.prototype.onBlur = function (e, t) {
                            (t.currentTarget.spellcheck = !1),
                                this.baseModel.onBlur(t),
                                this.errorText(this.baseModel.errorText),
                                (this.locString.searchElement = void 0);
                        }),
                        (e.prototype.onFocus = function (e, t) {
                            this.baseModel.onFocus(t);
                        }),
                        (e.prototype.onKeyUp = function (e, t) {
                            return this.baseModel.onKeyUp(t);
                        }),
                        (e.prototype.onKeyDown = function (e, t) {
                            var n = this.baseModel.onKeyDown(t);
                            return this.errorText(this.baseModel.errorText), n;
                        }),
                        (e.prototype.onMouseUp = function (e, t) {
                            return this.baseModel.onMouseUp(t);
                        }),
                        (e.prototype.edit = function (e, t) {
                            setTimeout(function () {
                                e.focusEditor && e.focusEditor();
                            }, 100),
                                this.baseModel.onClick(t);
                        }),
                        (e.prototype.done = function (e, t) {
                            this.baseModel.done(t);
                        }),
                        (e.prototype.dispose = function () {
                            (this.locString.onSearchChanged = void 0),
                                (this.focusEditor = void 0),
                                (this.baseModel.blurEditor = void 0),
                                this.implementor.dispose(),
                                (this.implementor = void 0);
                        }),
                        e
                    );
                })();
            function _(e, t) {
                for (; e.childNodes.length > 1; )
                    e.removeChild(e.childNodes[1]);
                e.childNodes[0].textContent = t.renderedHtml;
            }
            o.components.register(p.editableStringRendererName, {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = o.unwrap(e.locString),
                            a = new w(n.locStr, n.creator, t.element),
                            i = o.computed(function () {
                                var n = o.unwrap(e.locString).locStr;
                                !(function (e, t) {
                                    t.onSearchChanged = function () {
                                        if (
                                            (null == t.searchElement &&
                                                (t.searchElement = (function (
                                                    e
                                                ) {
                                                    for (
                                                        ;
                                                        e &&
                                                        "SPAN" !== e.nodeName;

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
                                                _(n, t);
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
                                                _(n, t),
                                                    (t.searchElement = void 0);
                                        }
                                    };
                                })(t.element, n),
                                    a.setLocString(n);
                            });
                        return (
                            o.utils.domNodeDisposal.addDisposeCallback(
                                t.element,
                                function () {
                                    i.dispose();
                                }
                            ),
                            a
                        );
                    },
                },
                template: y,
            });
            var C = (function () {
                    function e(e) {
                        this.event = e;
                    }
                    return (
                        (e.prototype.stopPropagation = function () {
                            this.event.stopPropagation();
                        }),
                        (e.prototype.preventDefault = function () {
                            this.event.preventDefault();
                        }),
                        Object.defineProperty(e.prototype, "cancelBubble", {
                            get: function () {
                                return this.event.cancelBubble;
                            },
                            set: function (e) {
                                this.event.cancelBubble = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "target", {
                            get: function () {
                                return this.event.target;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "currentTarget", {
                            get: function () {
                                return this.event.currentTarget;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "clientX", {
                            get: function () {
                                return this.event.clientX;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "clientY", {
                            get: function () {
                                return this.event.clientY;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "offsetX", {
                            get: function () {
                                return this.event.offsetX;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "offsetY", {
                            get: function () {
                                return this.event.offsetY;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        e
                    );
                })(),
                q =
                    ((function (e) {
                        function t(t) {
                            var n = e.call(this, t) || this;
                            return (n.event = t), n;
                        }
                        b(t, e),
                            Object.defineProperty(t.prototype, "dataTransfer", {
                                get: function () {
                                    return this.event.dataTransfer;
                                },
                                enumerable: !1,
                                configurable: !0,
                            });
                    })(C),
                    n(4));
            function M(e, t, n) {
                return (
                    n ||
                        (n = new p.QuestionAdornerViewModel(
                            e.componentData,
                            e.templateData.data,
                            e.templateData
                        )),
                    (n.koSelect = function (e, t) {
                        return e.select(e, new C(t));
                    }),
                    (n.koIsEmptyElement = o.computed(function () {
                        return n.element instanceof v.QuestionHtmlModel
                            ? !n.element.locHtml.koRenderedHtml()
                            : n.isEmptyElement;
                    })),
                    (n.adornerComponent = void 0),
                    new a.ImplementorBase(n),
                    o.utils.domNodeDisposal.addDisposeCallback(
                        t.element,
                        function () {
                            n.dispose();
                        }
                    ),
                    n
                );
            }
            o.components.register("svc-question", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return M(e, t);
                    },
                },
                template: q,
            });
            var D = n(16);
            function I(e, t, n) {
                return (
                    n ||
                        (n = new p.QuestionAdornerViewModel(
                            e.componentData,
                            e.templateData.data,
                            e.templateData
                        )),
                    (n.koSelect = function (e, t) {
                        return e.select(e, new C(t));
                    }),
                    (n.koIsEmptyElement = o.computed(function () {
                        return n.element instanceof v.QuestionHtmlModel
                            ? !n.element.locHtml.koRenderedHtml()
                            : n.isEmptyElement;
                    })),
                    (n.adornerComponent = void 0),
                    new a.ImplementorBase(n),
                    o.utils.domNodeDisposal.addDisposeCallback(
                        t.element,
                        function () {
                            n.dispose();
                        }
                    ),
                    n
                );
            }
            o.components.register("svc-panel", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return I(e, t);
                    },
                },
                template: D,
            });
            var B = n(17),
                E = n(4);
            o.components.register("svc-dropdown-question", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = new p.QuestionDropdownAdornerViewModel(
                            e.componentData,
                            e.templateData.data,
                            e.templateData
                        );
                        return (
                            M(e, t, n),
                            (n.adornerComponent =
                                "svc-dropdown-question-adorner"),
                            n
                        );
                    },
                },
                template: E,
            }),
                o.components.register("svc-dropdown-question-adorner", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            return e.model;
                        },
                    },
                    template: B,
                });
            var S = n(18),
                V = (function (e) {
                    function t(t, n) {
                        void 0 === n && (n = null);
                        var o = e.call(this, t, n) || this;
                        return (
                            (o.clearCaption =
                                p.editorLocalization.getString("pe.clear")),
                            o
                        );
                    }
                    return (
                        b(t, e),
                        (t.prototype.onBaseCreating = function () {
                            var t = this;
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new a.QuestionImplementor(
                                    this
                                )),
                                (this.koClickLink = function (e, n) {
                                    n.stopPropagation(), t.doLinkClick();
                                }),
                                (this.koClearLink = function (e, n) {
                                    n.stopPropagation(), t.doClearClick();
                                });
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(p.QuestionLinkValueModel);
            new a.SurveyTemplateText().addText(S, "question", "linkvalue"),
                v.Serializer.overrideClassCreator("linkvalue", function (e) {
                    return new V("", e);
                }),
                v.QuestionFactory.Instance.registerQuestion(
                    "linkvalue",
                    function (e) {
                        return new V(e);
                    }
                );
            var O = n(19),
                N = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        b(t, e),
                        Object.defineProperty(t.prototype, "currentPageId", {
                            get: function () {
                                return this.embeddedSurvey.currentPage
                                    ? this.embeddedSurvey.currentPage.id
                                    : "";
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new a.QuestionImplementor(
                                    this
                                ));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(p.QuestionEmbeddedSurveyModel);
            new a.SurveyTemplateText().addText(O, "question", "embeddedsurvey"),
                v.Serializer.overrideClassCreator(
                    "embeddedsurvey",
                    function () {
                        return new N("");
                    }
                ),
                v.QuestionFactory.Instance.registerQuestion(
                    "embeddedsurvey",
                    function (e) {
                        return new N(e);
                    }
                );
            var T = n(4),
                $ = n(20);
            o.components.register("svc-image-question", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = new p.QuestionImageAdornerViewModel(
                            e.componentData,
                            e.templateData.data,
                            e.templateData,
                            t.element.parentElement
                        );
                        return (
                            M(e, t, n),
                            (n.adornerComponent = "svc-image-question-adorner"),
                            (n.koIsEmptyImageLink = o.computed(function () {
                                return n.isEmptyImageLink;
                            })),
                            (n.koIsEmptyElement = o.computed(function () {
                                return n.isEmptyImageLink;
                            })),
                            (n.placeholderComponentData = {
                                name: "survey-question-file",
                                data: n.filePresentationModel,
                                afterRender: function () {},
                            }),
                            n
                        );
                    },
                },
                template: T,
            }),
                o.components.register("svc-image-question-adorner", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            return e.model;
                        },
                    },
                    template: $,
                });
            var P = n(21),
                F = n(4);
            o.components.register("svc-rating-question", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = new p.QuestionRatingAdornerViewModel(
                            e.componentData,
                            e.templateData.data,
                            e.templateData
                        );
                        return (
                            new a.ImplementorBase(n),
                            o.utils.domNodeDisposal.addDisposeCallback(
                                t.element,
                                function () {
                                    n.dispose();
                                }
                            ),
                            n
                        );
                    },
                },
                template: F,
            }),
                o.components.register("svc-rating-question-content", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            return new p.QuestionRatingAdornerViewModel(
                                e.componentData,
                                e.templateData.data,
                                e.templateData
                            );
                        },
                    },
                    template: P,
                });
            var R = n(22);
            o.components.register("svc-widget-question", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = new p.QuestionAdornerViewModel(
                            e.componentData,
                            e.templateData.data,
                            e.templateData
                        );
                        return M(e, t, n), n;
                    },
                },
                template: R,
            });
            var L = n(23),
                j = (function (e) {
                    function t(t, n, o, a) {
                        var i = e.call(this, t, n, o) || this;
                        return (
                            (i.question = n),
                            (i.item = o),
                            (i.templateData = a),
                            i
                        );
                    }
                    return (
                        b(t, e),
                        (t.prototype.koOnFocusOut = function (e, t) {
                            this.onFocusOut(t);
                        }),
                        Object.defineProperty(t.prototype, "attributes", {
                            get: function () {
                                return this.isDraggable
                                    ? {
                                          "data-sv-drop-target-item-value":
                                              this.item.value,
                                      }
                                    : null;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        t
                    );
                })(p.ItemValueWrapperViewModel);
            o.components.register("svc-item-value", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.componentData.creator,
                            o = e.componentData.question,
                            i = e.templateData.data,
                            s = new j(n, o, i, e.templateData);
                        return new a.ImplementorBase(s), s;
                    },
                },
                template: L,
            });
            var Q = n(24),
                z = (function (e) {
                    function t(t, n, o, a, i) {
                        var s = e.call(this, t, n, o, a, i) || this;
                        return (
                            (s.question = n),
                            (s.item = o),
                            (s.templateData = a),
                            (s.dragleave = function (e, t) {
                                s.onDragLeave(t);
                            }),
                            (s.drop = function (e, t) {
                                s.onDrop(t);
                            }),
                            (s.dragover = function (e, t) {
                                s.onDragOver(t);
                            }),
                            s
                        );
                    }
                    return (
                        b(t, e),
                        Object.defineProperty(
                            t.prototype,
                            "showDragDropGhostOnTop",
                            {
                                get: function () {
                                    return "top" === this.ghostPosition;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(
                            t.prototype,
                            "showDragDropGhostOnBottom",
                            {
                                get: function () {
                                    return "bottom" === this.ghostPosition;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(t.prototype, "attributes", {
                            get: function () {
                                return this.isDraggable
                                    ? {
                                          "data-sv-drop-target-item-value":
                                              this.item.value,
                                      }
                                    : null;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.blockEvent = function (e, t) {
                            t.stopPropagation();
                        }),
                        (t.prototype.getNewItemStyle = function () {
                            var e = !this.getIsNewItemSingle();
                            return {
                                width: e
                                    ? this.question.renderedImageWidth
                                    : void 0,
                                height: e
                                    ? this.question.renderedImageHeight
                                    : void 0,
                            };
                        }),
                        t
                    );
                })(p.ImageItemValueWrapperViewModel);
            o.components.register("svc-image-item-value", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.componentData.creator,
                            o = e.componentData.question,
                            i = e.templateData.data,
                            s = new z(
                                n,
                                o,
                                i,
                                e.templateData,
                                t.element.nextSibling
                            );
                        return new a.ImplementorBase(s), s;
                    },
                },
                template: Q,
            });
            var A = n(25);
            o.components.register("svc-matrix-cell", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.componentData.creator,
                            o = e.componentData.question,
                            i = e.componentData.row,
                            s = e.componentData.column;
                        e.templateData.nodes = t.templateNodes;
                        var r = new p.MatrixCellWrapperViewModel(
                            n,
                            e.templateData,
                            o,
                            i,
                            s
                        );
                        return new a.ImplementorBase(r), r;
                    },
                },
                template: A,
            });
            var H = n(26);
            o.components.register("svc-question-editor-content", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return e;
                    },
                },
                template: H,
            });
            var U = n(27);
            o.components.register("svc-cell-question", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return M(e, t);
                    },
                },
                template: U,
            });
            var K = n(28);
            o.components.register("svc-cell-dropdown-question", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return M(e, t);
                    },
                },
                template: K,
            });
            var W = n(29),
                G = function (e) {
                    var t = this;
                    (this.data = e),
                        (this.onClick = function (e, n) {
                            return (
                                t.data.click(t.data, n), !!t.data.allowBubble
                            );
                        });
                };
            o.components.register("svc-action-button", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return new G(e);
                    },
                },
                template: W,
            });
            var X = n(30),
                Y = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            n.setCallbackFunc("koOnBlur", function (e, t) {
                                return n.question.onBlur(t), !0;
                            }),
                            n.setCallbackFunc("koOnChange", function (e, t) {
                                return n.question.onChange(t), !0;
                            }),
                            n.setCallbackFunc(
                                "koOnBeforeInput",
                                function (e, t) {
                                    return n.question.onBeforeInput(t), !0;
                                }
                            ),
                            n.setCallbackFunc(
                                "koOnColorInputChange",
                                function (e, t) {
                                    return n.question.onColorInputChange(t), !0;
                                }
                            ),
                            n.setObservaleObj(
                                "koReadOnlyValue",
                                o.computed(function () {
                                    return n.question.renderedValue;
                                })
                            ),
                            n
                        );
                    }
                    return b(t, e), t;
                })(a.QuestionImplementor),
                J = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.renderAs = "color"), n;
                    }
                    return (
                        b(t, e),
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
                })(p.QuestionColorModel);
            v.Serializer.overrideClassCreator("color", function () {
                return new J("");
            }),
                v.QuestionFactory.Instance.registerQuestion(
                    "color",
                    function (e) {
                        return new J(e);
                    }
                ),
                v.RendererFactory.Instance.registerRenderer(
                    "color",
                    "color",
                    "svc-color-question"
                ),
                o.components.register("svc-color-question", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            return e;
                        },
                    },
                    template: X,
                });
            var Z = n(31),
                ee = (function (e) {
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
                            n.setCallbackFunc(
                                "koOnInputKeyDown",
                                function (e, t) {
                                    return n.question.onInputKeyDown(t), !0;
                                }
                            ),
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
                            n.setCallbackFunc("koIncrease", function (e, t) {
                                return n.question.increase(), !0;
                            }),
                            n.setCallbackFunc("koDecrease", function (e, t) {
                                return n.question.decrease(), !0;
                            }),
                            n.setCallbackFunc(
                                "koOnBeforeInput",
                                function (e, t) {
                                    return n.question.onBeforeInput(t), !0;
                                }
                            ),
                            n.setCallbackFunc(
                                "koOnDownButtonMouseDown",
                                function (e, t) {
                                    return (
                                        n.question.onDownButtonMouseDown(t), !0
                                    );
                                }
                            ),
                            n.setCallbackFunc(
                                "koOnUpButtonMouseDown",
                                function (e, t) {
                                    return (
                                        n.question.onUpButtonMouseDown(t), !0
                                    );
                                }
                            ),
                            n.setCallbackFunc(
                                "koOnDownButtonMouseDown",
                                function (e, t) {
                                    return (
                                        n.question.onDownButtonMouseDown(t), !0
                                    );
                                }
                            ),
                            n.setCallbackFunc(
                                "koOnButtonMouseUp",
                                function (e, t) {
                                    return n.question.onButtonMouseUp(t), !0;
                                }
                            ),
                            n.setObservaleObj(
                                "koReadOnlyValue",
                                o.computed(function () {
                                    return n.question.renderedValue;
                                })
                            ),
                            n
                        );
                    }
                    return b(t, e), t;
                })(a.QuestionImplementor),
                te = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.renderAs = "spinedit"), n;
                    }
                    return (
                        b(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new ee(this));
                        }),
                        (t.prototype.dispose = function () {
                            this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(p.QuestionSpinEditorModel);
            v.Serializer.overrideClassCreator("spinedit", function () {
                return new te("");
            }),
                v.QuestionFactory.Instance.registerQuestion(
                    "spinedit",
                    function (e) {
                        return new te(e);
                    }
                ),
                v.RendererFactory.Instance.registerRenderer(
                    "spinedit",
                    "spinedit",
                    "svc-spin-editor"
                ),
                o.components.register("svc-spin-editor", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            return e;
                        },
                    },
                    template: Z,
                });
            var ne = n(32);
            function oe(e) {
                return e.originalEvent || e;
            }
            var ae = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            n.setObservaleObj("koInputTitle", o.observable()),
                            n.setCallbackFunc("ondrop", function (e, t) {
                                n.question.onDrop(oe(t));
                            }),
                            n.setCallbackFunc("ondragover", function (e, t) {
                                n.question.onDragOver(oe(t));
                            }),
                            n.setCallbackFunc("ondragenter", function (e, t) {
                                n.question.onDragEnter(oe(t));
                            }),
                            n.setCallbackFunc("ondragleave", function (e, t) {
                                n.question.onDragLeave(oe(t));
                            }),
                            n.setCallbackFunc("dochange", function (e, t) {
                                n.question.doChange(oe(t));
                            }),
                            n.setCallbackFunc("doclean", function (e, t) {
                                n.question.doClean(oe(t));
                            }),
                            n.setCallbackFunc(
                                "koOnBeforeInput",
                                function (e, t) {
                                    return n.question.onInputBlur(t), !0;
                                }
                            ),
                            n.setCallbackFunc(
                                "koOnInputChange",
                                function (e, t) {
                                    return n.question.onInputChange(t), !0;
                                }
                            ),
                            n.setObservaleObj(
                                "koReadOnlyValue",
                                o.computed(function () {
                                    return n.question.value;
                                })
                            ),
                            n
                        );
                    }
                    return b(t, e), t;
                })(a.QuestionImplementor),
                ie = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.renderAs = "fileedit"), n;
                    }
                    return (
                        b(t, e),
                        (t.prototype.onBaseCreating = function () {
                            e.prototype.onBaseCreating.call(this),
                                (this._implementor = new ae(this));
                        }),
                        (t.prototype.dispose = function () {
                            this.onUploadStateChanged.remove(this.updateState),
                                this._implementor.dispose(),
                                (this._implementor = void 0),
                                e.prototype.dispose.call(this);
                        }),
                        t
                    );
                })(p.QuestionFileEditorModel);
            v.Serializer.overrideClassCreator("fileedit", function () {
                return new ie("");
            }),
                v.QuestionFactory.Instance.registerQuestion(
                    "fileedit",
                    function (e) {
                        return new ie(e);
                    }
                ),
                v.RendererFactory.Instance.registerRenderer(
                    "fileedit",
                    "fileedit",
                    "svc-file-edit-question"
                ),
                o.components.register("svc-file-edit-question", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            return e;
                        },
                    },
                    template: ne,
                });
            var se = n(33),
                re = (function (e) {
                    function t(t, n) {
                        return e.call(this, t, n) || this;
                    }
                    return (
                        b(t, e),
                        (t.prototype.createActionBarCore = function (t) {
                            var n = e.prototype.createActionBarCore.call(
                                this,
                                t
                            );
                            return new a.ImplementorBase(n), n;
                        }),
                        t
                    );
                })(p.PageNavigatorViewModel);
            o.components.register("svc-page-navigator", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = new re(e.controller, e.pageEditMode);
                        n.setItemsContainer(t.element.parentElement),
                            new a.ImplementorBase(n);
                        var i =
                            t.element.parentElement.parentElement.parentElement;
                        return (
                            n.setScrollableContainer(i),
                            "bypage" !== e.pageEditMode &&
                                (i.onscroll = function (e) {
                                    return n.onContainerScroll(e.currentTarget);
                                }),
                            o.utils.domNodeDisposal.addDisposeCallback(
                                t.element,
                                function () {
                                    (i.onscroll = void 0), n.dispose();
                                }
                            ),
                            n
                        );
                    },
                },
                template: se,
            });
            var ce = n(34),
                le = (function () {
                    function e(e) {
                        var t = this;
                        (this.item = e),
                            (this.action = function (e, n) {
                                t.disabled ||
                                    (t.item.action(),
                                    n.stopPropagation(),
                                    n.preventDefault());
                            });
                    }
                    return (
                        Object.defineProperty(e.prototype, "text", {
                            get: function () {
                                return this.item.title;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.unwrap = function (e) {
                            return "function" != typeof e ? e : e();
                        }),
                        Object.defineProperty(e.prototype, "active", {
                            get: function () {
                                return !!this.unwrap(this.item.active);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "disabled", {
                            get: function () {
                                var e = this.item.enabled;
                                return void 0 !== e && !o.unwrap(e);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            o.components.register("svc-page-navigator-item", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return new le(e.item);
                    },
                },
                template: ce,
            });
            var de = n(35);
            o.components.register("svc-object-selector", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.model;
                        return new a.ImplementorBase(n), { model: n };
                    },
                },
                template: de,
            });
            var ue = n(36);
            o.components.register("svc-property-grid", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = o.computed(function () {
                            var t = o.unwrap(e.model);
                            new a.ImplementorBase(t);
                        });
                        return (
                            o.utils.domNodeDisposal.addDisposeCallback(
                                t.element,
                                function () {
                                    n.dispose();
                                }
                            ),
                            e
                        );
                    },
                },
                template: ue,
            }),
                v.Serializer.overrideClassCreator("buttongroup", function () {
                    return new a.QuestionButtonGroup("");
                }),
                v.QuestionFactory.Instance.registerQuestion(
                    "buttongroup",
                    function (e) {
                        var t = new a.QuestionButtonGroup(e);
                        return (
                            (t.choices = v.QuestionFactory.DefaultChoices), t
                        );
                    }
                );
            var ve = n(37);
            o.components.register("svc-side-bar", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = o.unwrap(e.model);
                        n.initResizeManager(
                            t.element.getElementsByClassName(
                                "svc-side-bar__container"
                            )[0]
                        );
                        var i = o.computed(function () {
                            var t = o.unwrap(e.model);
                            new a.ImplementorBase(t);
                        });
                        return (
                            o.utils.domNodeDisposal.addDisposeCallback(
                                t.element,
                                function () {
                                    i.dispose(), n.resetResizeManager();
                                }
                            ),
                            e
                        );
                    },
                },
                template: ve,
            });
            var pe = n(38);
            o.components.register("svc-side-bar-tab", {
                viewModel: {
                    createViewModel: function (e) {
                        var t = e.item;
                        return new a.ImplementorBase(t), e;
                    },
                },
                template: pe,
            });
            var me = n(39),
                xe = n(40);
            o.components.register("survey-results", {
                viewModel: {
                    createViewModel: function (e) {
                        var t = new p.SurveyResultsModel(o.unwrap(e.survey));
                        return new a.ImplementorBase(t), t;
                    },
                },
                template: me,
            }),
                o.components.register("survey-results-table-row", {
                    viewModel: {
                        createViewModel: function (e) {
                            var t = e.model;
                            return new a.ImplementorBase(t), { model: t };
                        },
                    },
                    template: xe,
                });
            var be = n(41);
            o.components.register("survey-simulator", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return new a.ImplementorBase(e.model), e.model;
                    },
                },
                template: be,
            }),
                o.components.register("svc-svg-bundle", {
                    viewModel: {
                        createViewModel: function (e, t) {
                            return (
                                ((
                                    (t.element.querySelector &&
                                        t.element.querySelector("svg")) ||
                                    t.element.nextElementSibling
                                ).innerHTML =
                                    v.SvgRegistry.iconsRenderedHtml()),
                                e
                            );
                        },
                    },
                    template:
                        "<svg id='sv-icon-holder-global-container' style=\"display:none\"></svg>",
                });
            var ge = n(42),
                fe = (function () {
                    function e(e) {
                        var t = this;
                        (this.question = e),
                            (this.isExpanded = o.observable(!1)),
                            (this.isFocused = o.observable(!1)),
                            (this.selectItem = function (e) {
                                (t.question.value = e.value),
                                    t.isExpanded(!1),
                                    t.isFocused(!0);
                            });
                    }
                    return (
                        (e.prototype.toggle = function () {
                            this.isExpanded(!this.isExpanded());
                        }),
                        (e.prototype.onBlur = function () {
                            this.isExpanded(!1);
                        }),
                        e
                    );
                })();
            o.components.register("sjs-dropdown", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return new fe(e.question);
                    },
                },
                template: ge,
            }),
                v.RendererFactory.Instance.registerRenderer(
                    "dropdown",
                    "dropdown",
                    "sjs-dropdown"
                );
            var ke = n(43);
            o.components.register("svc-tab-test", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.data;
                        return (
                            new a.ImplementorBase(n.model.simulator),
                            new a.ImplementorBase(n.model.testAgainAction),
                            new a.ImplementorBase(n.model),
                            n.model
                        );
                    },
                },
                template: ke,
            });
            var he = n(44);
            o.components.register("svc-tabbed-menu", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = e.model,
                            i = t.element.nextElementSibling;
                        new a.ActionContainerImplementor(n);
                        var s = new v.ResponsivityManager(
                            i,
                            n,
                            ".svc-tabbed-menu-item-container:not(.sv-dots)>.sv-action__content"
                        );
                        return (
                            o.utils.domNodeDisposal.addDisposeCallback(
                                i,
                                function () {
                                    return s.dispose();
                                }
                            ),
                            n
                        );
                    },
                },
                template: he,
            });
            var ye = n(45);
            o.components.register("svc-tabbed-menu-item", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return e.item;
                    },
                },
                template: ye,
            });
            var we = n(46),
                _e = (function (e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return (
                            (n.categories = o.observableArray()),
                            (n.creator = t),
                            new a.ImplementorBase(n.toolbox),
                            (n._categoriesSubscription = o.computed(
                                function () {
                                    var e = o.unwrap(n.toolbox.categories);
                                    e.forEach(function (e, t) {
                                        new a.ImplementorBase(e);
                                    }),
                                        n.categories(e);
                                }
                            )),
                            n
                        );
                    }
                    return (
                        b(t, e),
                        Object.defineProperty(t.prototype, "toolbox", {
                            get: function () {
                                return this.creator.toolbox;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.dispose = function () {
                            this._categoriesSubscription.dispose();
                        }),
                        t
                    );
                })(v.Base);
            o.components.register("svc-toolbox", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return new _e(e.model);
                    },
                },
                template: we,
            });
            var Ce = n(47);
            o.components.register("svc-adaptive-toolbox", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = new _e(e.model),
                            a = t.element.querySelector(".svc-toolbox"),
                            i = new v.VerticalResponsivityManager(
                                a,
                                e.model.toolbox,
                                ".svc-toolbox__tool:not(.sv-dots)"
                            );
                        return (
                            o.utils.domNodeDisposal.addDisposeCallback(
                                t.element,
                                function () {
                                    i.dispose(), n.dispose();
                                }
                            ),
                            n
                        );
                    },
                },
                template: Ce,
            });
            var qe = n(48),
                Me = (function () {
                    function e(e, t, n) {
                        void 0 === n && (n = !0),
                            (this.item = e),
                            (this.creator = t),
                            (this.isCompact = n),
                            (this.title = o.observable("")),
                            (this.iconName = o.observable(""));
                        var a = e.iconName;
                        -1 === e.iconName.indexOf("icon-") && (a = "icon-" + a),
                            this.iconName(a),
                            this.title(e.title);
                    }
                    return (
                        Object.defineProperty(e.prototype, "ariaLabel", {
                            get: function () {
                                return (
                                    this.item.tooltip +
                                    " " +
                                    p.editorLocalization.getString("toolbox") +
                                    " item"
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            o.components.register("svc-toolbox-item", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return new Me(e.item, e.creator, e.isCompact);
                    },
                },
                template: qe,
            });
            var De = n(49),
                Ie = (function (e) {
                    function t(t, n, a) {
                        void 0 === a && (a = !0);
                        var i = e.call(this, t, n) || this;
                        return (
                            (i.item = t),
                            (i.creator = n),
                            (i.isCompact = a),
                            (i.title = o.observable("")),
                            (i.iconName = o.observable("")),
                            i
                        );
                    }
                    return b(t, e), t;
                })(p.ToolboxToolViewModel);
            o.components.register("svc-toolbox-tool", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return (
                            new a.ImplementorBase(e.item),
                            new Ie(e.item, e.creator, e.isCompact)
                        );
                    },
                },
                template: De,
            });
            var Be = n(50);
            o.components.register("svc-logo-image", {
                viewModel: {
                    createViewModel: function (e, t) {
                        var n = new p.LogoImageViewModel(
                            e,
                            t.element.nextElementSibling
                        );
                        return new a.ImplementorBase(n), n;
                    },
                },
                template: Be,
            });
            var Ee = n(51);
            o.components.register("sd-translation-line-skeleton", {
                viewModel: {
                    createViewModel: function (e, t) {
                        return { question: e.question };
                    },
                },
                template: Ee,
            }),
                o.components.register("survey-widget", {
                    viewModel: function (e) {
                        this.survey = e.model;
                    },
                    template:
                        "\x3c!-- ko if: $data.survey --\x3e\x3c!-- ko template: { name: 'survey-content', data: survey, afterRender: $parent.koEventAfterRender } --\x3e\x3c!-- /ko --\x3e\x3c!-- /ko --\x3e",
                }),
                (o.bindingHandlers.trueclick = {
                    init: function (e, t, n) {
                        e.onclick = function () {
                            return !0;
                        };
                    },
                }),
                (o.bindingHandlers.clickNoFocus = {
                    init: function (e, t, n, o) {
                        e.onclick = function (e) {
                            t().call(o, o, e);
                        };
                    },
                }),
                (o.bindingHandlers.afterRenderParent = {
                    init: function (e, t, n, o) {
                        (e.style.display = "none"),
                            t() && t()([e.parentElement]);
                    },
                }),
                o.options && (o.options.useOnlyNativeEvents = !0);
            var Se,
                Ve = (function (e) {
                    function t(t, n) {
                        return (
                            void 0 === t && (t = {}), e.call(this, t, n) || this
                        );
                    }
                    return (
                        b(t, e),
                        (t.prototype.createSurveyCore = function (e, t) {
                            return void 0 === e && (e = {}), new a.Survey(e);
                        }),
                        (t.prototype.onViewTypeChanged = function (e) {
                            var t = this.plugins[e];
                            t && t.activate();
                        }),
                        (t.prototype.render = function (e) {
                            var t = e;
                            "string" == typeof e &&
                                (t = document.getElementById(e)),
                                (t.innerHTML =
                                    '<survey-creator params="creator: creator"></survey-creator>'),
                                o.cleanNode(t),
                                o.applyBindings({ creator: this }, t);
                        }),
                        t
                    );
                })(p.CreatorBase);
            (Se = "".concat("1.9.88")),
                Object(v.checkLibraryVersion)(
                    "".concat("1.9.88"),
                    "survey-creator-knockout"
                );
        },
    ]);
});
