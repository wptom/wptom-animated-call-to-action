/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/IconDropdown.js":
/*!****************************************!*\
  !*** ./src/components/IconDropdown.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

// src/components/IconDropdown.js



const IconDropdown = ({
  label,
  value,
  options,
  onChange
}) => {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleSelect = icon => {
    onChange(icon);
    setIsOpen(false);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-dropdown"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    onClick: () => setIsOpen(!isOpen),
    className: "icon-dropdown-button"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: value,
    style: {
      fontSize: '16px',
      marginRight: '8px'
    }
  }), " ", value), isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-dropdown-menu"
  }, options.map(icon => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: icon,
    type: "button",
    onClick: () => handleSelect(icon),
    className: "icon-dropdown-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: icon,
    style: {
      fontSize: '16px',
      marginRight: '8px'
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (IconDropdown);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_IconDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/IconDropdown */ "./src/components/IconDropdown.js");
/* harmony import */ var _components_IconDropdown_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/IconDropdown.css */ "./src/components/IconDropdown.css");

// src/edit.js





const PREDEFINED_GRADIENTS = [{
  name: 'Red to Yellow',
  gradient: 'linear-gradient(45deg, #f00, #ff0)'
}, {
  name: 'Green to Blue',
  gradient: 'linear-gradient(45deg, #0f0, #00f)'
}, {
  name: 'Black to White',
  gradient: 'linear-gradient(45deg, #000, #fff)'
}];
const DASHICONS = ['admin-site', 'admin-media', 'admin-page', 'admin-comments', 'admin-appearance', 'admin-plugins', 'admin-users', 'admin-tools', 'admin-settings', 'admin-network', 'admin-generic', 'admin-home', 'admin-collapse', 'admin-links', 'format-links', 'admin-post', 'format-standard', 'format-image', 'format-gallery', 'format-audio', 'format-video', 'format-chat', 'format-status', 'format-aside', 'format-quote', 'welcome-view-site', 'welcome-widgets-menus', 'welcome-comments', 'welcome-learn-more', 'image-crop', 'image-rotate-left', 'image-rotate-right', 'image-flip-vertical', 'image-flip-horizontal', 'undo', 'redo', 'editor-bold', 'editor-italic', 'editor-ul', 'editor-ol', 'editor-quote', 'editor-alignleft', 'editor-aligncenter', 'editor-alignright', 'editor-insertmore', 'editor-spellcheck', 'editor-distractionfree', 'editor-expand', 'editor-contract', 'editor-kitchensink', 'editor-underline', 'editor-justify', 'editor-textcolor', 'editor-paste-word', 'editor-paste-text', 'editor-removeformatting', 'editor-video', 'editor-customchar', 'editor-outdent', 'editor-indent', 'editor-help', 'editor-strikethrough', 'editor-unlink', 'editor-rtl', 'editor-ltr', 'editor-break', 'editor-code', 'editor-paragraph', 'align-left', 'align-right', 'align-center', 'align-none', 'lock', 'unlock', 'calendar', 'calendar-alt', 'visibility', 'hidden', 'post-status', 'post-trash', 'edit', 'trash', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up-alt', 'arrow-down-alt', 'arrow-left-alt', 'arrow-right-alt', 'arrow-up-alt2', 'arrow-down-alt2', 'arrow-left-alt2', 'arrow-right-alt2', 'sort', 'leftright', 'randomize', 'list-view', 'exerpt-view', 'grid-view', 'move', 'hammer', 'art', 'migrate', 'performance', 'universal-access', 'universal-access-alt', 'tickets', 'nametag', 'clipboard', 'heart', 'megaphone', 'schedule', 'wordpress', 'wordpress-alt', 'pressthis', 'update', 'screenoptions', 'info', 'cart', 'feedback', 'cloud', 'translation', 'tag', 'category', 'archive', 'tagcloud', 'text', 'media-archive', 'media-audio', 'media-code', 'media-default', 'media-document', 'media-interactive', 'media-spreadsheet', 'media-text', 'media-video', 'playlist-audio', 'playlist-video', 'controls-play', 'controls-pause', 'controls-forward', 'controls-skipforward', 'controls-back', 'controls-skipback', 'controls-repeat', 'controls-volumeon', 'controls-volumeoff', 'yes', 'no', 'no-alt', 'plus', 'plus-alt', 'minus', 'dismiss', 'marker', 'star-filled', 'star-half', 'star-empty', 'flag', 'location', 'location-alt', 'vault', 'shield', 'shield-alt', 'sos', 'search', 'slides', 'analytics', 'chart-pie', 'chart-bar', 'chart-line', 'chart-area', 'groups', 'businessman', 'businesswoman', 'businessperson', 'id', 'id-alt', 'products', 'awards', 'forms', 'testimonial', 'portfolio', 'book', 'book-alt', 'download', 'upload', 'backup', 'clock', 'lightbulb', 'microphone', 'desktop', 'tablet', 'smartphone', 'phone', 'index-card', 'carrot', 'building', 'store', 'album', 'camera', 'images-alt', 'images-alt2', 'video-alt', 'video-alt2', 'video-alt3'];

// src/edit.js
function Edit({
  attributes,
  setAttributes
}) {
  const {
    message = 'Default text for message',
    message2 = 'Default text for message2',
    backgroundGradient,
    customGradientStart,
    customGradientEnd,
    fontSize,
    fontFamily,
    fontSize2 = 16,
    fontFamily2,
    textAlign = 'left',
    textAlign2 = 'left',
    icon1,
    icon2,
    icon1GradientStart,
    icon1GradientEnd,
    icon2GradientStart,
    icon2GradientEnd,
    icon1Size,
    icon2Size
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    style: {
      background: backgroundGradient,
      fontSize: fontSize ? `${fontSize}px` : undefined,
      fontFamily: fontFamily
    }
  });
  const handleCustomGradientChange = () => {
    const gradient = `linear-gradient(45deg, ${customGradientStart}, ${customGradientEnd})`;
    setAttributes({
      backgroundGradient: gradient
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "my-tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: 'colors',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Colors', 'text-domain'),
      className: 'colors-tab'
    }, {
      name: 'typography',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Typography', 'text-domain'),
      className: 'typography-tab'
    }, {
      name: 'icons',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icons', 'text-domain'),
      className: 'icons-tab'
    }]
  }, tab => {
    if (tab.name === 'colors') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Gradient', 'text-domain')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, PREDEFINED_GRADIENTS.map(gradient => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: gradient.name,
        style: {
          background: gradient.gradient,
          padding: '10px',
          margin: '5px 0',
          cursor: 'pointer'
        },
        onClick: () => setAttributes({
          backgroundGradient: gradient.gradient
        })
      }, gradient.name))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom Gradient Start Color', 'text-domain')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        color: customGradientStart,
        onChangeComplete: color => {
          setAttributes({
            customGradientStart: color.hex
          });
          handleCustomGradientChange();
        }
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom Gradient End Color', 'text-domain')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        color: customGradientEnd,
        onChangeComplete: color => {
          setAttributes({
            customGradientEnd: color.hex
          });
          handleCustomGradientChange();
        }
      })));
    } else if (tab.name === 'typography') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Typography Settings', 'text-domain')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Family', 'text-domain'),
        value: fontFamily,
        options: [{
          label: 'Arial',
          value: 'Arial'
        }, {
          label: 'Helvetica',
          value: 'Helvetica'
        }, {
          label: 'Times New Roman',
          value: 'Times New Roman'
        }],
        onChange: value => setAttributes({
          fontFamily: value
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Size', 'text-domain'),
        value: fontSize,
        onChange: value => setAttributes({
          fontSize: value
        }),
        min: 10,
        max: 100
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Family for Text 2', 'text-domain'),
        value: fontFamily2,
        options: [{
          label: 'Arial',
          value: 'Arial'
        }, {
          label: 'Helvetica',
          value: 'Helvetica'
        }, {
          label: 'Times New Roman',
          value: 'Times New Roman'
        }],
        onChange: value => setAttributes({
          fontFamily2: value
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Size for Text 2', 'text-domain'),
        value: fontSize2,
        onChange: value => setAttributes({
          fontSize2: value
        }),
        min: 10,
        max: 100
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Align', 'text-domain'),
        value: textAlign,
        options: [{
          label: 'Left',
          value: 'left'
        }, {
          label: 'Center',
          value: 'center'
        }, {
          label: 'Right',
          value: 'right'
        }],
        onChange: value => setAttributes({
          textAlign: value
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Align for Text 2', 'text-domain'),
        value: textAlign2,
        options: [{
          label: 'Left',
          value: 'left'
        }, {
          label: 'Center',
          value: 'center'
        }, {
          label: 'Right',
          value: 'right'
        }],
        onChange: value => setAttributes({
          textAlign2: value
        })
      }));
    } else if (tab.name === 'icons') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select Icons', 'text-domain')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_IconDropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon 1', 'text-domain'),
        value: icon1,
        options: DASHICONS,
        onChange: value => setAttributes({
          icon1: value
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon 1 Gradient Start Color', 'text-domain')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        color: icon1GradientStart,
        onChangeComplete: color => setAttributes({
          icon1GradientStart: color.hex
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon 1 Gradient End Color', 'text-domain')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        color: icon1GradientEnd,
        onChangeComplete: color => setAttributes({
          icon1GradientEnd: color.hex
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon 1 Size', 'text-domain'),
        value: icon1Size,
        onChange: value => setAttributes({
          icon1Size: value
        }),
        min: 10,
        max: 100
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_IconDropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon 2', 'text-domain'),
        value: icon2,
        options: DASHICONS,
        onChange: value => setAttributes({
          icon2: value
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon 2 Gradient Start Color', 'text-domain')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        color: icon2GradientStart,
        onChangeComplete: color => setAttributes({
          icon2GradientStart: color.hex
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon 2 Gradient End Color', 'text-domain')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        color: icon2GradientEnd,
        onChangeComplete: color => setAttributes({
          icon2GradientEnd: color.hex
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon 2 Size', 'text-domain'),
        value: icon2Size,
        onChange: value => setAttributes({
          icon2Size: value
        }),
        min: 10,
        max: 100
      }));
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: {
      fontSize: fontSize ? `${fontSize}px` : undefined,
      fontFamily: fontFamily,
      textAlign: textAlign
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    value: message,
    onChange: val => setAttributes({
      message: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: {
      fontSize: fontSize2 ? `${fontSize2}px` : undefined,
      fontFamily: fontFamily2,
      textAlign: textAlign2
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    value: message2,
    onChange: val => setAttributes({
      message2: val
    })
  }))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  title: 'Animated Call to Action',
  icon: 'smiley',
  category: 'widgets',
  attributes: {
    message: {
      type: 'string',
      default: 'Default text for message'
    },
    message2: {
      type: 'string',
      default: 'Default text for message2'
    },
    fontSize: {
      type: 'number',
      default: 16
    },
    fontFamily: {
      type: 'string',
      default: ''
    },
    fontSize2: {
      type: 'number',
      default: 16
    },
    fontFamily2: {
      type: 'string',
      default: ''
    },
    textAlign: {
      type: 'string',
      default: 'left'
    },
    textAlign2: {
      type: 'string',
      default: 'left'
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

// src/save.js


function save({
  attributes
}) {
  const {
    message = 'Default text for message',
    message2 = 'Default text for message2',
    backgroundGradient,
    fontSize,
    fontFamily,
    fontSize2 = 16,
    fontFamily2,
    textAlign = 'left',
    textAlign2 = 'left',
    icon1,
    icon2,
    icon1GradientStart,
    icon1GradientEnd,
    icon2GradientStart,
    icon2GradientEnd,
    icon1Size,
    icon2Size
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    style: {
      background: backgroundGradient,
      fontSize: fontSize ? `${fontSize}px` : undefined,
      fontFamily: fontFamily
    }
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: {
      fontSize: fontSize ? `${fontSize}px` : undefined,
      fontFamily: fontFamily,
      textAlign: textAlign
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: message
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: {
      fontSize: fontSize2 ? `${fontSize2}px` : undefined,
      fontFamily: fontFamily2,
      textAlign: textAlign2
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: message2
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: icon1,
    style: {
      background: `linear-gradient(45deg, ${icon1GradientStart}, ${icon1GradientEnd})`,
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      fontSize: `${icon1Size}px`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: icon2,
    style: {
      background: `linear-gradient(45deg, ${icon2GradientStart}, ${icon2GradientEnd})`,
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      fontSize: `${icon2Size}px`
    }
  })));
}

/***/ }),

/***/ "./src/components/IconDropdown.css":
/*!*****************************************!*\
  !*** ./src/components/IconDropdown.css ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/wptom-animated-call-to-action","version":"0.1.0","title":"WPTom\'s Animated Call To Action","category":"widgets","icon":"smiley","description":"Animated CTA banner.","attributes":{"message":{"type":"string","source":"html","selector":"div","default":"This is the first message."},"message2":{"type":"string","source":"html","selector":"div","default":"This is the second message2."},"backgroundGradient":{"type":"string","default":""},"customGradientStart":{"type":"string","default":"#ffffff"},"customGradientEnd":{"type":"string","default":"#000000"},"fontSize":{"type":"number","default":16},"fontFamily":{"type":"string","default":""},"fontSize2":{"type":"number","default":16},"fontFamily2":{"type":"string","default":""},"icon1":{"type":"string","default":"admin-site"},"icon2":{"type":"string","default":"admin-media"},"icon1GradientStart":{"type":"string","default":"#ffffff"},"icon1GradientEnd":{"type":"string","default":"#000000"},"icon2GradientStart":{"type":"string","default":"#ffffff"},"icon2GradientEnd":{"type":"string","default":"#000000"},"icon1Size":{"type":"number","default":24},"icon2Size":{"type":"number","default":24},"textAlign":{"type":"string","default":"left"},"textAlign2":{"type":"string","default":"left"}},"example":{},"supports":{"html":false},"textdomain":"wptom-animated-call-to-action","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwptom_animated_call_to_action"] = self["webpackChunkwptom_animated_call_to_action"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map