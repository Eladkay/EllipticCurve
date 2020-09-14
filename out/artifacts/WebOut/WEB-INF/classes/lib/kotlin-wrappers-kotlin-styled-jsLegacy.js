(function (_, Kotlin, $module$kotlin_css, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$inline_style_prefixer, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$styled_components, $module$react, $module$react_dom, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var get_s = $module$kotlin_css.kotlinx.css.properties.get_s_rcaex3$;
  var Timing = $module$kotlin_css.kotlinx.css.properties.Timing;
  var get_times = $module$kotlin_css.kotlinx.css.properties.get_times_s8ev3n$;
  var AnimationDirection = $module$kotlin_css.kotlinx.css.properties.AnimationDirection;
  var FillMode = $module$kotlin_css.kotlinx.css.properties.FillMode;
  var PlayState = $module$kotlin_css.kotlinx.css.properties.PlayState;
  var animation = $module$kotlin_css.kotlinx.css.properties.animation_hb31zf$;
  var KeyframesBuilder = $module$kotlin_css.kotlinx.css.properties.KeyframesBuilder;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var invoke = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.invoke_dgimx$;
  var invoke_0 = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.invoke_9p99ed$;
  var StyledElement = $module$kotlin_css.kotlinx.css.StyledElement;
  var prefix = $module$inline_style_prefixer.prefix;
  var throwCCE = Kotlin.throwCCE;
  var getOwnPropertyNames = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.getOwnPropertyNames_s8jyvk$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var lastIndexOf = Kotlin.kotlin.text.lastIndexOf_8eortd$;
  var CSSBuilder = $module$kotlin_css.kotlinx.css.CSSBuilder;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RElementBuilder = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RElementBuilder;
  var RDOMBuilder = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var ensureNotNull = Kotlin.ensureNotNull;
  var createElement = $module$react.createElement;
  var render = $module$react_dom.render;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  StyledElementBuilder.prototype = Object.create(RElementBuilder.prototype);
  StyledElementBuilder.prototype.constructor = StyledElementBuilder;
  StyledDOMBuilder.prototype = Object.create(RDOMBuilder.prototype);
  StyledDOMBuilder.prototype.constructor = StyledDOMBuilder;
  function animation_0($receiver, duration, timing, delay, iterationCount, direction, fillMode, playState, handler) {
    if (duration === void 0)
      duration = get_s(0);
    if (timing === void 0)
      timing = Timing.Companion.ease;
    if (delay === void 0)
      delay = get_s(0);
    if (iterationCount === void 0)
      iterationCount = get_times(1);
    if (direction === void 0)
      direction = AnimationDirection.normal;
    if (fillMode === void 0)
      fillMode = FillMode.none;
    if (playState === void 0)
      playState = PlayState.running;
    var builder = new KeyframesBuilder($receiver.indent);
    handler(builder);
    var string = builder.toString();
    var keyframe = invoke($module$styled_components.keyframes, string, []);
    injectGlobal(invoke_0($module$styled_components.css, [keyframe]));
    animation($receiver, keyframe.getName(), duration, timing, delay, iterationCount, direction, fillMode, playState);
  }
  var keyframes = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.keyframes_sizrkg$', wrapFunction(function () {
    var KeyframesBuilder_init = _.$$importsForInline$$['kotlin-css'].kotlinx.css.properties.KeyframesBuilder;
    var invoke = _.$$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'].kotlinext.js.invoke_dgimx$;
    var invoke_0 = _.$$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'].kotlinext.js.invoke_9p99ed$;
    var injectGlobal = _.styled.injectGlobal_61zpoe$;
    return function (indent, handler) {
      if (indent === void 0)
        indent = '';
      var builder = new KeyframesBuilder_init(indent);
      handler(builder);
      var string = builder.toString();
      var keyframe = invoke($module$styled_components.keyframes, string, []);
      injectGlobal(invoke_0($module$styled_components.css, [keyframe]));
      return keyframe.getName();
    };
  }));
  function inlineStyles($receiver, prefix, builder) {
    if (prefix === void 0)
      prefix = true;
    var styles = new StyledElement();
    builder(styles);
    $receiver.setProp_4w9ihe$('style', toStyle(styles, prefix));
  }
  function toStyle($receiver, prefix_0) {
    if (prefix_0 === void 0)
      prefix_0 = true;
    var tmp$;
    var $receiver_0 = {};
    var res = $receiver_0;
    var tmp$_0;
    tmp$_0 = $receiver.declarations.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var key = element_0.key;
      var value = element_0.value;
      var tmp$_1;
      if (typeof value === 'string' || Kotlin.isNumber(value))
        tmp$_1 = value;
      else
        tmp$_1 = value.toString();
      res[key] = tmp$_1;
    }
    if (!prefix_0) {
      return res;
    }var prefixed = Kotlin.isType(tmp$ = prefix(res), Object) ? tmp$ : throwCCE();
    var $receiver_1 = Object.keys(prefixed);
    var tmp$_2;
    for (tmp$_2 = 0; tmp$_2 !== $receiver_1.length; ++tmp$_2) {
      var element_1 = $receiver_1[tmp$_2];
      if (prefixed.hasOwnProperty(element_1)) {
        var value_0 = prefixed[element_1];
        if (value_0 instanceof Array) {
          var displayValue = value_0.find(function (element) {
            return !element.startsWith('-');
          });
          prefixed[element_1] = displayValue;
        }}}
    return prefixed;
  }
  function StyleSheet(name, isStatic) {
    if (isStatic === void 0)
      isStatic = false;
    this.name = name;
    this.isStatic = isStatic;
    this.isLoaded_1mk3xi$_0 = false;
  }
  StyleSheet.prototype.dependsOn_tsq8y7$ = function (handler) {
    handler().inject();
  };
  StyleSheet.prototype.css_wopuc9$ = function (parents, builder) {
    return new CssHolder(this, parents.concat([builder]));
  };
  function StyleSheet$inject$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$it.second.ruleSets_8be2vx$;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var r = tmp$[tmp$_0];
        r($receiver);
      }
      return Unit;
    };
  }
  StyleSheet.prototype.inject = function () {
    if (!this.isLoaded_1mk3xi$_0 && this.isStatic) {
      this.isLoaded_1mk3xi$_0 = true;
      var $receiver = getOwnPropertyNames(this);
      var destination = ArrayList_init();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (endsWith(element, '$_0'))
          destination.add_11rb$(element);
      }
      var destination_0 = ArrayList_init();
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (Kotlin.isType(this[element_0], CssHolder))
          destination_0.add_11rb$(element_0);
      }
      var destination_1 = ArrayList_init_0(collectionSizeOrDefault(destination_0, 10));
      var tmp$_1;
      tmp$_1 = destination_0.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        var tmp$_2;
        destination_1.add_11rb$(to(item, Kotlin.isType(tmp$_2 = this[item], CssHolder) ? tmp$_2 : throwCCE()));
      }
      var destination_2 = ArrayList_init_0(collectionSizeOrDefault(destination_1, 10));
      var tmp$_3;
      tmp$_3 = destination_1.iterator();
      while (tmp$_3.hasNext()) {
        var item_0 = tmp$_3.next();
        destination_2.add_11rb$(to(removeSuffix(item_0.first, '$_0'), item_0.second));
      }
      var destination_3 = ArrayList_init_0(collectionSizeOrDefault(destination_2, 10));
      var tmp$_4;
      tmp$_4 = destination_2.iterator();
      while (tmp$_4.hasNext()) {
        var item_1 = tmp$_4.next();
        var tmp$_5 = destination_3.add_11rb$;
        var $receiver_0 = item_1.first;
        var endIndex = lastIndexOf(item_1.first, 95);
        tmp$_5.call(destination_3, to($receiver_0.substring(0, endIndex), item_1.second));
      }
      var keys = destination_3;
      var $receiver_1 = new CSSBuilder(void 0, false);
      var tmp$_6;
      tmp$_6 = keys.iterator();
      while (tmp$_6.hasNext()) {
        var element_1 = tmp$_6.next();
        $receiver_1.invoke_32jdrg$('.' + this.name + '-' + element_1.first, StyleSheet$inject$lambda$lambda$lambda(element_1));
      }
      var builder = $receiver_1;
      injectGlobal(builder.toString());
    }};
  StyleSheet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyleSheet',
    interfaces: []
  };
  function StyleSheet_init(name, parent, isStatic, $this) {
    if (isStatic === void 0)
      isStatic = false;
    $this = $this || Object.create(StyleSheet.prototype);
    StyleSheet.call($this, parent.name + '-' + name, isStatic);
    return $this;
  }
  function CssHolder(sheet, ruleSets) {
    this.sheet_0 = sheet;
    this.ruleSets_8be2vx$ = ruleSets;
  }
  function CssHolder$getValue$lambda(this$CssHolder, closure$property) {
    return function ($receiver) {
      if (this$CssHolder.sheet_0.isStatic) {
        $receiver.unaryPlus_pdl1vz$(getClassName_0(this$CssHolder.sheet_0, closure$property));
        this$CssHolder.sheet_0.inject();
      }if (!this$CssHolder.sheet_0.isStatic || !$receiver.allowClasses) {
        $receiver.styleName.add_11rb$(getClassName_0(this$CssHolder.sheet_0, closure$property));
        var $receiver_0 = this$CssHolder.ruleSets_8be2vx$;
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
          var element = $receiver_0[tmp$];
          element($receiver);
        }
      }return Unit;
    };
  }
  CssHolder.prototype.getValue_n5byny$ = function (thisRef, property) {
    return CssHolder$getValue$lambda(this, property);
  };
  CssHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssHolder',
    interfaces: []
  };
  function getClassName($receiver, getClass) {
    return getClassName_0($receiver, getClass($receiver));
  }
  function getClassName_0($receiver, property) {
    return $receiver.name + '-' + property.callableName;
  }
  function getClassSelector($receiver, getClass) {
    return '.' + getClassName($receiver, getClass);
  }
  function cssMarker$lambda($receiver) {
    return Unit;
  }
  function cssMarker($receiver) {
    return new CssHolder($receiver, [cssMarker$lambda]);
  }
  var forwardCss = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.forwardCss_ln282g$', function ($receiver, builder) {
    var tmp$;
    if ((tmp$ = $receiver.css) != null) {
      var tmp$_0;
      tmp$_0 = tmp$.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        element(builder);
      }
    }});
  var forwardCss_0 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.forwardCss_hrqukv$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var ensureNotNull = Kotlin.ensureNotNull;
    return function ($receiver, props) {
      var tmp$;
      if ((tmp$ = $receiver.css) != null) {
        var tmp$_0;
        tmp$_0 = tmp$.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (props.css == null) {
            props.css = ArrayList_init();
          }ensureNotNull(props.css).add_11rb$(element);
        }
      }};
  }));
  function StyledBuilder() {
  }
  StyledBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StyledBuilder',
    interfaces: []
  };
  var css = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.css_wyp85r$', function ($receiver, handler) {
    handler($receiver.css);
  });
  function StyledElementBuilder(type, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }RElementBuilder.call(this, attrs);
    this.type_3g7xlt$_0 = type;
    this.css_i7l61k$_0 = new CSSBuilder();
  }
  Object.defineProperty(StyledElementBuilder.prototype, 'type', {
    get: function () {
      return this.type_3g7xlt$_0;
    }
  });
  Object.defineProperty(StyledElementBuilder.prototype, 'css', {
    configurable: true,
    get: function () {
      return this.css_i7l61k$_0;
    }
  });
  StyledElementBuilder.prototype.create = function () {
    return Styled_getInstance().createElement_lnfw8r$(this.type, this.css, this.attrs, this.childList);
  };
  StyledElementBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyledElementBuilder',
    interfaces: [StyledBuilder, RElementBuilder]
  };
  function StyledDOMBuilder(factory) {
    RDOMBuilder.call(this, factory);
    this.type_redftz$_0 = this.attrs.tagName;
    this.css_en1qsi$_0 = new CSSBuilder();
  }
  Object.defineProperty(StyledDOMBuilder.prototype, 'type', {
    configurable: true,
    get: function () {
      return this.type_redftz$_0;
    }
  });
  Object.defineProperty(StyledDOMBuilder.prototype, 'css', {
    configurable: true,
    get: function () {
      return this.css_en1qsi$_0;
    }
  });
  StyledDOMBuilder.prototype.create = function () {
    return Styled_getInstance().createElement_lnfw8r$(this.type, this.css, this.props, this.childList);
  };
  StyledDOMBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyledDOMBuilder',
    interfaces: [StyledBuilder, RDOMBuilder]
  };
  function styled$lambda(closure$type) {
    return function ($receiver, handler) {
      var $receiver_0 = new StyledElementBuilder(closure$type);
      handler($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }
  function styled(type) {
    return styled$lambda(type);
  }
  var css_0 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.css_u3ux1b$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var ensureNotNull = Kotlin.ensureNotNull;
    return function ($receiver, handler) {
      if ($receiver.css == null) {
        $receiver.css = ArrayList_init();
      }ensureNotNull($receiver.css).add_11rb$(handler);
    };
  }));
  var css_1 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.css_x53paa$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var ensureNotNull = Kotlin.ensureNotNull;
    return function ($receiver, handler) {
      var $receiver_0 = $receiver.attrs;
      if ($receiver_0.css == null) {
        $receiver_0.css = ArrayList_init();
      }ensureNotNull($receiver_0.css).add_11rb$(handler);
    };
  }));
  var keyframesName = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.keyframesName_61zpoe$', wrapFunction(function () {
    var invoke = _.$$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'].kotlinext.js.invoke_dgimx$;
    var invoke_0 = _.$$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'].kotlinext.js.invoke_9p99ed$;
    var injectGlobal = _.styled.injectGlobal_61zpoe$;
    return function (string) {
      var keyframe = invoke($module$styled_components.keyframes, string, []);
      injectGlobal(invoke_0($module$styled_components.css, [keyframe]));
      return keyframe.getName();
    };
  }));
  var globalStylesCounter;
  function injectGlobal$lambda(closure$reactElement, closure$element) {
    return function (it) {
      render(closure$reactElement, closure$element);
      return Unit;
    };
  }
  function injectGlobal(string) {
    var tmp$, tmp$_0;
    var globalStyleComponent = invoke($module$styled_components.createGlobalStyle, string, []);
    var element = Kotlin.isType(tmp$ = ensureNotNull(window.document.body).appendChild(window.document.createElement('div')), Element) ? tmp$ : throwCCE();
    element.setAttribute('id', 'sc-global-style-' + (tmp$_0 = globalStylesCounter, globalStylesCounter = tmp$_0 + 1 | 0, tmp$_0));
    var $receiver = {};
    var reactElement = createElement(globalStyleComponent, $receiver);
    Promise.resolve(Unit).then(injectGlobal$lambda(reactElement, element));
  }
  function injectGlobal_0(handler) {
    var $receiver = new CSSBuilder();
    handler($receiver);
    injectGlobal($receiver.toString());
  }
  function Styled() {
    Styled_instance = this;
    this.cache_0 = LinkedHashMap_init();
  }
  function Styled$wrap$lambda$lambda(it) {
    return it._css;
  }
  Styled.prototype.wrap_0 = function (type) {
    var $receiver = this.cache_0;
    var tmp$;
    var value = $receiver.get_11rb$(type);
    if (value == null) {
      var answer = invoke_0(rawStyled(type), [Styled$wrap$lambda$lambda]);
      $receiver.put_xwzc9p$(type, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  Styled.prototype.createElement_lnfw8r$ = function (type, css, props, children) {
    var tmp$ = !css.rules.isEmpty();
    if (!tmp$) {
      tmp$ = !css.multiRules.isEmpty();
    }var tmp$_0 = tmp$;
    if (!tmp$_0) {
      tmp$_0 = !css.declarations.isEmpty();
    }if (tmp$_0) {
      var wrappedType = this.wrap_0(type);
      var styledProps = props;
      styledProps._css = css.toString();
      if (!css.classes.isEmpty()) {
        styledProps.className = joinToString(css.classes, ' ');
      }if (!css.styleName.isEmpty()) {
        styledProps['data-style'] = joinToString(css.styleName, ' ');
      }return createElement.apply(null, [wrappedType, styledProps].concat(copyToArray(children)));
    } else {
      if (!css.classes.isEmpty()) {
        props.className = joinToString(css.classes, ' ');
      }return createElement.apply(null, [type, props].concat(copyToArray(children)));
    }
  };
  Styled.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Styled',
    interfaces: []
  };
  var Styled_instance = null;
  function Styled_getInstance() {
    if (Styled_instance === null) {
      new Styled();
    }return Styled_instance;
  }
  var styledTag = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledTag_8tb0c0$', wrapFunction(function () {
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    return function ($receiver, block, factory) {
      var $receiver_0 = new StyledDOMBuilder_init(factory);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledA = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledA_8k1tal$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var A_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledA$lambda(closure$href, closure$target) {
      return function (it) {
        return new A_init(attributesMapOf(['href', closure$href, 'target', closure$target]), it);
      };
    }
    return function ($receiver, href, target, block) {
      if (href === void 0)
        href = null;
      if (target === void 0)
        target = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledA$lambda(href, target));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledAbbr = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledAbbr_6au89b$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var ABBR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ABBR;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledAbbr$lambda(it) {
      return new ABBR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledAbbr$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledAddress = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledAddress_vixkf4$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var ADDRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ADDRESS;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledAddress$lambda(it) {
      return new ADDRESS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledAddress$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledArea = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledArea_oyrah7$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AREA;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledArea$lambda(closure$shape, closure$alt) {
      return function (it) {
        return new AREA_init(attributesMapOf(['Shape', closure$shape != null ? enumEncode(closure$shape) : null, 'alt', closure$alt]), it);
      };
    }
    return function ($receiver, shape, alt, block) {
      if (shape === void 0)
        shape = null;
      if (alt === void 0)
        alt = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledArea$lambda(shape, alt));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledArticle = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledArticle_lgmfz2$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var ARTICLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ARTICLE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledArticle$lambda(it) {
      return new ARTICLE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledArticle$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledAside = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledAside_rd7t5o$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var ASIDE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ASIDE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledAside$lambda(it) {
      return new ASIDE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledAside$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledAudio = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledAudio_wpd72a$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var AUDIO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AUDIO;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledAudio$lambda(it) {
      return new AUDIO_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledAudio$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledB = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledB_shm19u$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var B_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.B;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledB$lambda(it) {
      return new B_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledB$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledBase = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledBase_1upga7$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BASE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BASE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledBase$lambda(it) {
      return new BASE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledBase$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledBdi = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledBdi_791cr1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BDI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDI;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledBdi$lambda(it) {
      return new BDI_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledBdi$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledBdo = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledBdo_rmeakn$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BDO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDO;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledBdo$lambda(it) {
      return new BDO_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledBdo$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledBlockQuote = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledBlockQuote_ysxgdt$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BLOCKQUOTE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BLOCKQUOTE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledBlockQuote$lambda(it) {
      return new BLOCKQUOTE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledBlockQuote$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledBody = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledBody_na2bsy$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BODY;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledBody$lambda(it) {
      return new BODY_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledBody$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledBr = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledBr_6xjsq8$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BR;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledBr$lambda(it) {
      return new BR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledBr$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledButton = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledButton_v3mt7e$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledButton$lambda(closure$formEncType, closure$formMethod, closure$type) {
      return function (it) {
        return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
      };
    }
    return function ($receiver, formEncType, formMethod, type, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (type === void 0)
        type = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledButton$lambda(formEncType, formMethod, type));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledCanvas = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledCanvas_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledCanvas$lambda(it) {
      return new CANVAS_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = new StyledDOMBuilder_init(styledCanvas$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledCanvas_0 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledCanvas_mheybc$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledCanvas$lambda(it) {
      return new CANVAS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledCanvas$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledCaption = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledCaption_ff1mjy$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CAPTION;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledCaption$lambda(it) {
      return new CAPTION_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledCaption$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledCite = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledCite_ketyeh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CITE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CITE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledCite$lambda(it) {
      return new CITE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledCite$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledCode = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledCode_afw0kt$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CODE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CODE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledCode$lambda(it) {
      return new CODE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledCode$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledCol = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledCol_1gtqb0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var COL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COL;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledCol$lambda(it) {
      return new COL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledCol$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledColGroup = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledColGroup_j3cjpd$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var COLGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COLGROUP;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledColGroup$lambda(it) {
      return new COLGROUP_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledColGroup$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledCommand = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledCommand_fs3edt$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var COMMAND_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COMMAND;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledCommand$lambda(closure$type) {
      return function (it) {
        return new COMMAND_init(attributesMapOf('type', closure$type != null ? enumEncode(closure$type) : null), it);
      };
    }
    return function ($receiver, type, block) {
      if (type === void 0)
        type = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledCommand$lambda(type));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledDataList = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledDataList_q0qxew$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DATALIST_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DATALIST;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledDataList$lambda(it) {
      return new DATALIST_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledDataList$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledDd = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledDd_dz3lwg$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DD;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledDd$lambda(it) {
      return new DD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledDd$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledDel = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledDel_sodis7$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DEL;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledDel$lambda(it) {
      return new DEL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledDel$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledDetails = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledDetails_hf2xda$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DETAILS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DETAILS;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledDetails$lambda(it) {
      return new DETAILS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledDetails$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledDfn = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledDfn_n6kfq0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DFN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DFN;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledDfn$lambda(it) {
      return new DFN_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledDfn$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledDialog = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledDialog_m9v0a0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DIALOG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIALOG;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledDialog$lambda(it) {
      return new DIALOG_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledDialog$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledDiv = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledDiv_nl27x9$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DIV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledDiv$lambda(it) {
      return new DIV_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledDl = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledDl_hgjic8$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DL;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledDl$lambda(it) {
      return new DL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledDl$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledDt = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledDt_kxzes0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DT;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledDt$lambda(it) {
      return new DT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledDt$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledEm = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledEm_veb43c$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var EM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EM;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledEm$lambda(it) {
      return new EM_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledEm$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledEmbed = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledEmbed_ha10uz$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var EMBED_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EMBED;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledEmbed$lambda(it) {
      return new EMBED_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledEmbed$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledFieldSet = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledFieldSet_xj98jc$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var FIELDSET_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIELDSET;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledFieldSet$lambda(it) {
      return new FIELDSET_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledFieldSet$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledFigcaption = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledFigcaption_c04876$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var FIGCAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGCAPTION;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledFigcaption$lambda(it) {
      return new FIGCAPTION_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledFigcaption$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledFigure = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledFigure_le7sck$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var FIGURE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGURE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledFigure$lambda(it) {
      return new FIGURE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledFigure$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledFooter = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledFooter_abs6jp$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var FOOTER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FOOTER;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledFooter$lambda(it) {
      return new FOOTER_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledFooter$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledForm = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledForm_k88gii$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FORM;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledForm$lambda(closure$action, closure$encType, closure$method) {
      return function (it) {
        return new FORM_init(attributesMapOf(['action', closure$action, 'enctype', closure$encType != null ? enumEncode(closure$encType) : null, 'method', closure$method != null ? enumEncode(closure$method) : null]), it);
      };
    }
    return function ($receiver, action, encType, method, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (method === void 0)
        method = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledForm$lambda(action, encType, method));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledH1 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledH1_k7892h$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H1_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledH1$lambda(it) {
      return new H1_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledH1$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledH2 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledH2_sn6rre$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H2_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledH2$lambda(it) {
      return new H2_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledH2$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledH3 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledH3_xxyrit$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H3_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledH3$lambda(it) {
      return new H3_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledH3$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledH4 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledH4_pi08tw$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H4_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H4;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledH4$lambda(it) {
      return new H4_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledH4$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledH5 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledH5_h21q4z$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H5_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H5;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledH5$lambda(it) {
      return new H5_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledH5$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledH6 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledH6_8m37g2$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H6_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H6;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledH6$lambda(it) {
      return new H6_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledH6$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledHead = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledHead_pxbiyo$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEAD;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledHead$lambda(it) {
      return new HEAD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledHead$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledHeader = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledHeader_nyg1zh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HEADER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEADER;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledHeader$lambda(it) {
      return new HEADER_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledHeader$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledHGroup = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledHGroup_a9rbvb$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HGROUP;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledHGroup$lambda(it) {
      return new HGROUP_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledHGroup$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledHr = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledHr_epf60a$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HR;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledHr$lambda(it) {
      return new HR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledHr$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledHtml = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledHtml_ke3yi3$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HTML_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HTML;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledHtml$lambda(it) {
      return new HTML_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledHtml$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledI = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledI_um3lkl$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var I_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.I;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledI$lambda(it) {
      return new I_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledI$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledIframe = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledIframe_kqjv7h$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledIframe$lambda(closure$sandbox) {
      return function (it) {
        return new IFRAME_init(attributesMapOf('sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null), it);
      };
    }
    return function ($receiver, sandbox, content) {
      if (sandbox === void 0)
        sandbox = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new StyledDOMBuilder_init(styledIframe$lambda(sandbox));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledIframe_0 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledIframe_mfopg8$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledIframe$lambda(closure$sandbox) {
      return function (it) {
        return new IFRAME_init(attributesMapOf('sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null), it);
      };
    }
    return function ($receiver, sandbox, block) {
      if (sandbox === void 0)
        sandbox = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledIframe$lambda(sandbox));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledImg = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledImg_7q4769$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IMG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledImg$lambda(closure$alt, closure$src) {
      return function (it) {
        return new IMG_init(attributesMapOf(['alt', closure$alt, 'src', closure$src]), it);
      };
    }
    return function ($receiver, alt, src, block) {
      if (alt === void 0)
        alt = null;
      if (src === void 0)
        src = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledImg$lambda(alt, src));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledInput = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledInput_gxkg23$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledInput$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name) {
      return function (it) {
        return new INPUT_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name]), it);
      };
    }
    return function ($receiver, type, formEncType, formMethod, name, block) {
      if (type === void 0)
        type = null;
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledInput$lambda(type, formEncType, formMethod, name));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledIns = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledIns_v7acme$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var INS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INS;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledIns$lambda(it) {
      return new INS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledIns$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledKbd = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledKbd_1n2oah$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var KBD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.KBD;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledKbd$lambda(it) {
      return new KBD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledKbd$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledKeyGen = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledKeyGen_2e01ui$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var KEYGEN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.KEYGEN;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledKeyGen$lambda(closure$keyType) {
      return function (it) {
        return new KEYGEN_init(attributesMapOf('keytype', closure$keyType != null ? enumEncode(closure$keyType) : null), it);
      };
    }
    return function ($receiver, keyType, block) {
      if (keyType === void 0)
        keyType = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledKeyGen$lambda(keyType));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledLabel = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledLabel_119a74$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var LABEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LABEL;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledLabel$lambda(it) {
      return new LABEL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledLabel$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledLegend = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledLegend_3psej1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var LEGEND_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LEGEND;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledLegend$lambda(it) {
      return new LEGEND_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledLegend$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledLi = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledLi_8qvw1v$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var LI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledLi$lambda(it) {
      return new LI_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledLi$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledLink = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledLink_w1nb4n$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var LINK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LINK;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledLink$lambda(closure$href, closure$rel, closure$type) {
      return function (it) {
        return new LINK_init(attributesMapOf(['href', closure$href, 'rel', closure$rel, 'type', closure$type]), it);
      };
    }
    return function ($receiver, href, rel, type, block) {
      if (href === void 0)
        href = null;
      if (rel === void 0)
        rel = null;
      if (type === void 0)
        type = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledLink$lambda(href, rel, type));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledMap = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledMap_7ty1qj$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MAP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MAP;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledMap$lambda(closure$name) {
      return function (it) {
        return new MAP_init(attributesMapOf('name', closure$name), it);
      };
    }
    return function ($receiver, name, block) {
      if (name === void 0)
        name = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledMap$lambda(name));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledMark = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledMark_bpz7pp$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var MARK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MARK;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledMark$lambda(it) {
      return new MARK_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledMark$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledMath = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledMath_cnrgq0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var MATH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MATH;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledMath$lambda(it) {
      return new MATH_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledMath$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledMathml = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledMathml_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var MATHML_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MATHML;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledMathml$lambda(it) {
      return new MATHML_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = new StyledDOMBuilder_init(styledMathml$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledMathml_0 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledMathml_a0a2jr$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var MATHML_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MATHML;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledMathml$lambda(it) {
      return new MATHML_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledMathml$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledMeta = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledMeta_1zzqmz$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var META_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.META;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledMeta$lambda(closure$name, closure$content) {
      return function (it) {
        return new META_init(attributesMapOf(['name', closure$name, 'content', closure$content]), it);
      };
    }
    return function ($receiver, name, content, block) {
      if (name === void 0)
        name = null;
      if (content === void 0)
        content = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledMeta$lambda(name, content));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledMeter = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledMeter_f1skx7$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var METER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.METER;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledMeter$lambda(it) {
      return new METER_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledMeter$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledNav = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledNav_cdm54f$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var NAV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NAV;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledNav$lambda(it) {
      return new NAV_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledNav$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledNoScript = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledNoScript_xt87u4$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var NOSCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NOSCRIPT;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledNoScript$lambda(it) {
      return new NOSCRIPT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledNoScript$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledObject = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledObject_u1xvy9$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OBJECT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OBJECT;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledObject$lambda(it) {
      return new OBJECT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledObject$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledOl = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledOl_kgxcnx$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OL;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledOl$lambda(it) {
      return new OL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledOl$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledOptGroup = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledOptGroup_vqdpuf$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OPTGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTGROUP;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledOptGroup$lambda(closure$label) {
      return function (it) {
        return new OPTGROUP_init(attributesMapOf('label', closure$label), it);
      };
    }
    return function ($receiver, label, block) {
      if (label === void 0)
        label = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledOptGroup$lambda(label));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledOption = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledOption_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledOption$lambda(it) {
      return new OPTION_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = new StyledDOMBuilder_init(styledOption$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledOption_0 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledOption_m0ne2d$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledOption$lambda(it) {
      return new OPTION_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledOption$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledOutput = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledOutput_gldd6p$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OUTPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OUTPUT;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledOutput$lambda(it) {
      return new OUTPUT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledOutput$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledP = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledP_iop6fw$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var P_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledP$lambda(it) {
      return new P_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledP$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledParam = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledParam_70o309$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var PARAM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PARAM;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledParam$lambda(closure$name, closure$value) {
      return function (it) {
        return new PARAM_init(attributesMapOf(['name', closure$name, 'value', closure$value]), it);
      };
    }
    return function ($receiver, name, value, block) {
      if (name === void 0)
        name = null;
      if (value === void 0)
        value = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledParam$lambda(name, value));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledPre = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledPre_ik11in$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var PRE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PRE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledPre$lambda(it) {
      return new PRE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledPre$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledProgress = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledProgress_6rgx5f$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var PROGRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PROGRESS;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledProgress$lambda(it) {
      return new PROGRESS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledProgress$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledQ = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledQ_r4np4t$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var Q_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.Q;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledQ$lambda(it) {
      return new Q_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledQ$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledRp = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledRp_cwexwi$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var RP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RP;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledRp$lambda(it) {
      return new RP_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledRp$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledRt = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledRt_kvf4v6$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var RT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RT;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledRt$lambda(it) {
      return new RT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledRt$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledRuby = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledRuby_za616i$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var RUBY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RUBY;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledRuby$lambda(it) {
      return new RUBY_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledRuby$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledSamp = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledSamp_yhe0i7$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SAMP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SAMP;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledSamp$lambda(it) {
      return new SAMP_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledSamp$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledScript = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledScript_f5jx5h$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var SCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SCRIPT;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledScript$lambda(closure$type, closure$src) {
      return function (it) {
        return new SCRIPT_init(attributesMapOf(['type', closure$type, 'src', closure$src]), it);
      };
    }
    return function ($receiver, type, src, block) {
      if (type === void 0)
        type = null;
      if (src === void 0)
        src = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledScript$lambda(type, src));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledSection = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledSection_46srkf$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SECTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SECTION;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledSection$lambda(it) {
      return new SECTION_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledSection$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledSelect = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledSelect_46ho4c$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SELECT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SELECT;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledSelect$lambda(it) {
      return new SELECT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledSelect$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledSmall = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledSmall_s8f5bh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SMALL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SMALL;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledSmall$lambda(it) {
      return new SMALL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledSmall$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledSource = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledSource_12vx3v$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SOURCE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SOURCE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledSource$lambda(it) {
      return new SOURCE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledSource$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledSpan = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledSpan_wnx53q$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SPAN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledSpan$lambda(it) {
      return new SPAN_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledSpan$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledStrong = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledStrong_1nxmeh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var STRONG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STRONG;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledStrong$lambda(it) {
      return new STRONG_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledStrong$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledStyle = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledStyle_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledStyle$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    return function ($receiver, type, content) {
      if (type === void 0)
        type = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new StyledDOMBuilder_init(styledStyle$lambda(type));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledStyle_0 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledStyle_ligb9c$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledStyle$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    return function ($receiver, type, block) {
      if (type === void 0)
        type = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledStyle$lambda(type));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledSub = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledSub_og4q1g$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SUB_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUB;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledSub$lambda(it) {
      return new SUB_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledSub$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledSup = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledSup_mq6hoa$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUP;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledSup$lambda(it) {
      return new SUP_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledSup$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledSvg = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledSvg_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledSvg$lambda(it) {
      return new SVG_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = new StyledDOMBuilder_init(styledSvg$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledSvg_0 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledSvg_4m290w$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledSvg$lambda(it) {
      return new SVG_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledSvg$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledTable = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledTable_il2xhi$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TABLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledTable$lambda(it) {
      return new TABLE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledTable$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledTbody = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledTbody_al0num$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TBODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TBODY;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledTbody$lambda(it) {
      return new TBODY_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledTbody$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledTd = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledTd_gx5b5c$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledTd$lambda(it) {
      return new TD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledTd$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledTextArea = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledTextArea_fmll6w$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledTextArea$lambda(closure$rows, closure$cols, closure$wrap) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null]), it);
      };
    }
    return function ($receiver, rows, cols, wrap, content) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new StyledDOMBuilder_init(styledTextArea$lambda(rows, cols, wrap));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledTextArea_0 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledTextArea_zcvaif$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledTextArea$lambda(closure$rows, closure$cols, closure$wrap) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null]), it);
      };
    }
    return function ($receiver, rows, cols, wrap, block) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledTextArea$lambda(rows, cols, wrap));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledTfoot = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledTfoot_u1clma$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TFOOT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TFOOT;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledTfoot$lambda(it) {
      return new TFOOT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledTfoot$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledTh = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledTh_953rpx$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TH;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledTh$lambda(closure$scope) {
      return function (it) {
        return new TH_init(attributesMapOf('scope', closure$scope != null ? enumEncode(closure$scope) : null), it);
      };
    }
    return function ($receiver, scope, block) {
      if (scope === void 0)
        scope = null;
      var $receiver_0 = new StyledDOMBuilder_init(styledTh$lambda(scope));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledThead = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledThead_b8pjcw$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var THEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.THEAD;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledThead$lambda(it) {
      return new THEAD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledThead$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledTime = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledTime_iiw05p$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TIME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TIME;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledTime$lambda(it) {
      return new TIME_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledTime$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledTitle = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledTitle_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledTitle$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = new StyledDOMBuilder_init(styledTitle$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledTitle_0 = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledTitle_ysxh38$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledTitle$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledTitle$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledTr = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledTr_u95wke$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledTr$lambda(it) {
      return new TR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledTr$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledUl = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledUl_s8spxz$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var UL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledUl$lambda(it) {
      return new UL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledUl$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledVar = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledVar_vje9zh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var VAR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VAR;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledVar$lambda(it) {
      return new VAR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledVar$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var styledVideo = defineInlineFunction('kotlin-wrappers-kotlin-styled-jsLegacy.styled.styledVideo_plb1hj$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var VIDEO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VIDEO;
    var StyledDOMBuilder_init = _.styled.StyledDOMBuilder;
    function styledVideo$lambda(it) {
      return new VIDEO_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new StyledDOMBuilder_init(styledVideo$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  function rawStyled(target) {
    return $module$styled_components.default(target);
  }
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = _;
  var package$styled = _.styled || (_.styled = {});
  package$styled.animation_bodyvu$ = animation_0;
  $$importsForInline$$['kotlin-css'] = $module$kotlin_css;
  package$styled.keyframesName_61zpoe$ = keyframesName;
  package$styled.keyframes_sizrkg$ = keyframes;
  package$styled.inlineStyles_b07t6c$ = inlineStyles;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  package$styled.toStyle_y3tcm5$ = toStyle;
  package$styled.StyleSheet_init_tl0644$ = StyleSheet_init;
  package$styled.StyleSheet = StyleSheet;
  package$styled.CssHolder = CssHolder;
  package$styled.getClassName_1q9qg0$ = getClassName;
  package$styled.getClassSelector_1q9qg0$ = getClassSelector;
  package$styled.cssMarker_pgm7eu$ = cssMarker;
  package$styled.forwardCss_ln282g$ = forwardCss;
  package$styled.forwardCss_hrqukv$ = forwardCss_0;
  package$styled.StyledBuilder = StyledBuilder;
  package$styled.css_wyp85r$ = css;
  package$styled.StyledElementBuilder = StyledElementBuilder;
  package$styled.StyledDOMBuilder = StyledDOMBuilder;
  package$styled.styled_kcd210$ = styled;
  package$styled.css_u3ux1b$ = css_0;
  package$styled.css_x53paa$ = css_1;
  package$styled.injectGlobal_61zpoe$ = injectGlobal;
  package$styled.injectGlobal_sa4rfh$ = injectGlobal_0;
  Object.defineProperty(package$styled, 'Styled', {
    get: Styled_getInstance
  });
  package$styled.styledTag_8tb0c0$ = styledTag;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$styled.styledA_8k1tal$ = styledA;
  package$styled.styledAbbr_6au89b$ = styledAbbr;
  package$styled.styledAddress_vixkf4$ = styledAddress;
  package$styled.styledArea_oyrah7$ = styledArea;
  package$styled.styledArticle_lgmfz2$ = styledArticle;
  package$styled.styledAside_rd7t5o$ = styledAside;
  package$styled.styledAudio_wpd72a$ = styledAudio;
  package$styled.styledB_shm19u$ = styledB;
  package$styled.styledBase_1upga7$ = styledBase;
  package$styled.styledBdi_791cr1$ = styledBdi;
  package$styled.styledBdo_rmeakn$ = styledBdo;
  package$styled.styledBlockQuote_ysxgdt$ = styledBlockQuote;
  package$styled.styledBody_na2bsy$ = styledBody;
  package$styled.styledBr_6xjsq8$ = styledBr;
  package$styled.styledButton_v3mt7e$ = styledButton;
  package$styled.styledCanvas_hw0qe1$ = styledCanvas;
  package$styled.styledCanvas_mheybc$ = styledCanvas_0;
  package$styled.styledCaption_ff1mjy$ = styledCaption;
  package$styled.styledCite_ketyeh$ = styledCite;
  package$styled.styledCode_afw0kt$ = styledCode;
  package$styled.styledCol_1gtqb0$ = styledCol;
  package$styled.styledColGroup_j3cjpd$ = styledColGroup;
  package$styled.styledCommand_fs3edt$ = styledCommand;
  package$styled.styledDataList_q0qxew$ = styledDataList;
  package$styled.styledDd_dz3lwg$ = styledDd;
  package$styled.styledDel_sodis7$ = styledDel;
  package$styled.styledDetails_hf2xda$ = styledDetails;
  package$styled.styledDfn_n6kfq0$ = styledDfn;
  package$styled.styledDialog_m9v0a0$ = styledDialog;
  package$styled.styledDiv_nl27x9$ = styledDiv;
  package$styled.styledDl_hgjic8$ = styledDl;
  package$styled.styledDt_kxzes0$ = styledDt;
  package$styled.styledEm_veb43c$ = styledEm;
  package$styled.styledEmbed_ha10uz$ = styledEmbed;
  package$styled.styledFieldSet_xj98jc$ = styledFieldSet;
  package$styled.styledFigcaption_c04876$ = styledFigcaption;
  package$styled.styledFigure_le7sck$ = styledFigure;
  package$styled.styledFooter_abs6jp$ = styledFooter;
  package$styled.styledForm_k88gii$ = styledForm;
  package$styled.styledH1_k7892h$ = styledH1;
  package$styled.styledH2_sn6rre$ = styledH2;
  package$styled.styledH3_xxyrit$ = styledH3;
  package$styled.styledH4_pi08tw$ = styledH4;
  package$styled.styledH5_h21q4z$ = styledH5;
  package$styled.styledH6_8m37g2$ = styledH6;
  package$styled.styledHead_pxbiyo$ = styledHead;
  package$styled.styledHeader_nyg1zh$ = styledHeader;
  package$styled.styledHGroup_a9rbvb$ = styledHGroup;
  package$styled.styledHr_epf60a$ = styledHr;
  package$styled.styledHtml_ke3yi3$ = styledHtml;
  package$styled.styledI_um3lkl$ = styledI;
  package$styled.styledIframe_kqjv7h$ = styledIframe;
  package$styled.styledIframe_mfopg8$ = styledIframe_0;
  package$styled.styledImg_7q4769$ = styledImg;
  package$styled.styledInput_gxkg23$ = styledInput;
  package$styled.styledIns_v7acme$ = styledIns;
  package$styled.styledKbd_1n2oah$ = styledKbd;
  package$styled.styledKeyGen_2e01ui$ = styledKeyGen;
  package$styled.styledLabel_119a74$ = styledLabel;
  package$styled.styledLegend_3psej1$ = styledLegend;
  package$styled.styledLi_8qvw1v$ = styledLi;
  package$styled.styledLink_w1nb4n$ = styledLink;
  package$styled.styledMap_7ty1qj$ = styledMap;
  package$styled.styledMark_bpz7pp$ = styledMark;
  package$styled.styledMath_cnrgq0$ = styledMath;
  package$styled.styledMathml_hw0qe1$ = styledMathml;
  package$styled.styledMathml_a0a2jr$ = styledMathml_0;
  package$styled.styledMeta_1zzqmz$ = styledMeta;
  package$styled.styledMeter_f1skx7$ = styledMeter;
  package$styled.styledNav_cdm54f$ = styledNav;
  package$styled.styledNoScript_xt87u4$ = styledNoScript;
  package$styled.styledObject_u1xvy9$ = styledObject;
  package$styled.styledOl_kgxcnx$ = styledOl;
  package$styled.styledOptGroup_vqdpuf$ = styledOptGroup;
  package$styled.styledOption_hw0qe1$ = styledOption;
  package$styled.styledOption_m0ne2d$ = styledOption_0;
  package$styled.styledOutput_gldd6p$ = styledOutput;
  package$styled.styledP_iop6fw$ = styledP;
  package$styled.styledParam_70o309$ = styledParam;
  package$styled.styledPre_ik11in$ = styledPre;
  package$styled.styledProgress_6rgx5f$ = styledProgress;
  package$styled.styledQ_r4np4t$ = styledQ;
  package$styled.styledRp_cwexwi$ = styledRp;
  package$styled.styledRt_kvf4v6$ = styledRt;
  package$styled.styledRuby_za616i$ = styledRuby;
  package$styled.styledSamp_yhe0i7$ = styledSamp;
  package$styled.styledScript_f5jx5h$ = styledScript;
  package$styled.styledSection_46srkf$ = styledSection;
  package$styled.styledSelect_46ho4c$ = styledSelect;
  package$styled.styledSmall_s8f5bh$ = styledSmall;
  package$styled.styledSource_12vx3v$ = styledSource;
  package$styled.styledSpan_wnx53q$ = styledSpan;
  package$styled.styledStrong_1nxmeh$ = styledStrong;
  package$styled.styledStyle_xoe246$ = styledStyle;
  package$styled.styledStyle_ligb9c$ = styledStyle_0;
  package$styled.styledSub_og4q1g$ = styledSub;
  package$styled.styledSup_mq6hoa$ = styledSup;
  package$styled.styledSvg_hw0qe1$ = styledSvg;
  package$styled.styledSvg_4m290w$ = styledSvg_0;
  package$styled.styledTable_il2xhi$ = styledTable;
  package$styled.styledTbody_al0num$ = styledTbody;
  package$styled.styledTd_gx5b5c$ = styledTd;
  package$styled.styledTextArea_fmll6w$ = styledTextArea;
  package$styled.styledTextArea_zcvaif$ = styledTextArea_0;
  package$styled.styledTfoot_u1clma$ = styledTfoot;
  package$styled.styledTh_953rpx$ = styledTh;
  package$styled.styledThead_b8pjcw$ = styledThead;
  package$styled.styledTime_iiw05p$ = styledTime;
  package$styled.styledTitle_hw0qe1$ = styledTitle;
  package$styled.styledTitle_ysxh38$ = styledTitle_0;
  package$styled.styledTr_u95wke$ = styledTr;
  package$styled.styledUl_s8spxz$ = styledUl;
  package$styled.styledVar_vje9zh$ = styledVar;
  package$styled.styledVideo_plb1hj$ = styledVideo;
  package$styled.rawStyled_za3rmp$ = rawStyled;
  globalStylesCounter = 0;
  Kotlin.defineModule('kotlin-wrappers-kotlin-styled-jsLegacy', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('inline-style-prefixer'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('styled-components'), require('react'), require('react-dom'), require('kotlinx-html-js')));
