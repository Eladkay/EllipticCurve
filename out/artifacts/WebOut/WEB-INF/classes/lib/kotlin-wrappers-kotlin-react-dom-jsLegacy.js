(function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$react, $module$kotlinx_html_js, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$react_dom) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var set_key = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.set_key_38rnt0$;
  var set_ref = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.set_ref_jjyqia$;
  var ref = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.ref_dpkau5$;
  var createElement = $module$react.createElement;
  var RBuilder = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RBuilder;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var Unsafe = $module$kotlinx_html_js.kotlinx.html.Unsafe;
  var Unit = Kotlin.kotlin.Unit;
  var TagConsumer = $module$kotlinx_html_js.kotlinx.html.TagConsumer;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var buildElements = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.buildElements_zepujl$;
  var render = $module$react_dom.render;
  var hydrate = $module$react_dom.hydrate;
  var createPortal = $module$react_dom.createPortal;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var wrapFunction = Kotlin.wrapFunction;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  RDOMBuilder.prototype = Object.create(RBuilder.prototype);
  RDOMBuilder.prototype.constructor = RDOMBuilder;
  function InnerHTML(__html) {
    this.__html = __html;
  }
  InnerHTML.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InnerHTML',
    interfaces: []
  };
  function RDOMBuilder(factory) {
    RBuilder.call(this);
    this.consumer = new RDOMBuilder$consumer$ObjectLiteral(this);
    this.attrs = factory(this.consumer);
    this.props = {};
    var tmp$;
    tmp$ = this.attrs.attributesEntries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.setProp_4w9ihe$(element.key, element.value);
    }
  }
  RDOMBuilder.prototype.setProp_4w9ihe$ = function (attribute, value) {
    var key = fixAttributeName(attribute);
    this.props[key] = value;
  };
  RDOMBuilder.prototype.get_g0n3bx$ = function ($receiver, name) {
    return this.props[name];
  };
  RDOMBuilder.prototype.set_hpg2xa$ = function ($receiver, name, value) {
    this.props[name] = value;
  };
  RDOMBuilder.prototype.get_defaultChecked_a2ovwx$ = function ($receiver) {
    var tmp$;
    return (tmp$ = this.get_g0n3bx$($receiver, 'defaultChecked')) != null ? tmp$ : false;
  };
  RDOMBuilder.prototype.set_defaultChecked_47da7g$ = function ($receiver, value) {
    this.set_hpg2xa$($receiver, 'defaultChecked', value);
  };
  RDOMBuilder.prototype.get_values_sktobr$ = function ($receiver) {
    var tmp$;
    var valuesArr = (tmp$ = this.get_g0n3bx$($receiver, 'value')) != null ? tmp$ : [];
    return toSet(valuesArr);
  };
  RDOMBuilder.prototype.set_values_d8zj82$ = function ($receiver, value) {
    this.set_hpg2xa$($receiver, 'value', copyToArray(value));
  };
  RDOMBuilder.prototype.get_value_sktobr$ = function ($receiver) {
    return '';
  };
  RDOMBuilder.prototype.set_value_g9clh3$ = function ($receiver, value) {
    this.set_values_d8zj82$($receiver, setOf(value));
  };
  RDOMBuilder.prototype.attrs_1wdtl9$ = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.RDOMBuilder.attrs_1wdtl9$', function (handler) {
    handler(this.attrs);
  });
  Object.defineProperty(RDOMBuilder.prototype, 'key', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init(''.toString());
    },
    set: function (value) {
      set_key(this.props, value);
    }
  });
  Object.defineProperty(RDOMBuilder.prototype, 'ref', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init(''.toString());
    },
    set: function (value) {
      set_ref(this.props, value);
    }
  });
  RDOMBuilder.prototype.ref_5ij4lk$ = function (handler) {
    ref(this.props, handler);
  };
  RDOMBuilder.prototype.create = function () {
    return createElement.apply(null, [this.attrs.tagName, this.props].concat(copyToArray(this.childList)));
  };
  function RDOMBuilder$consumer$ObjectLiteral(this$RDOMBuilder) {
    this.this$RDOMBuilder = this$RDOMBuilder;
  }
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    this.this$RDOMBuilder.setProp_4w9ihe$(attribute, value);
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagComment_6bul2c$ = function (content) {
    throw IllegalStateException_init('Comments are not supported');
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagContent_6bul2c$ = function (content) {
    this.this$RDOMBuilder.childList.add_11rb$(content);
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    this.this$RDOMBuilder.childList.add_11rb$(entity.text);
  };
  function RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral(closure$sb) {
    this.closure$sb = closure$sb;
  }
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.closure$sb.append_pdl1vj$($receiver);
  };
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Unsafe]
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    var sb = StringBuilder_init();
    block(new RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral(sb));
    this.this$RDOMBuilder.props.dangerouslySetInnerHTML = new InnerHTML(sb.toString());
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagStart_tkgjla$ = function (tag) {
    throw IllegalStateException_init("Don't nest tags inside props block");
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagEnd_tkgjla$ = function (tag) {
    throw IllegalStateException_init("Don't nest tags inside props block");
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagEvent_azi6uv$ = function (tag, event, value) {
    this.this$RDOMBuilder.setProp_4w9ihe$(event, value);
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.finalize = function () {
    return Unit;
  };
  RDOMBuilder$consumer$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [TagConsumer]
  };
  RDOMBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RDOMBuilder',
    interfaces: [RBuilder]
  };
  function render$lambda() {
    return Unit;
  }
  function render_0(container, callback, handler) {
    if (callback === void 0)
      callback = render$lambda;
    render(buildElements(handler), container, callback);
  }
  function hydrate$lambda() {
    return Unit;
  }
  function hydrate_0(container, callback, handler) {
    if (callback === void 0)
      callback = hydrate$lambda;
    hydrate(buildElements(handler), container, callback);
  }
  function createPortal_0(container, handler) {
    return createPortal(buildElements(handler), container);
  }
  var events;
  var attrsMap;
  function fixAttributeName(event) {
    var tmp$;
    return (tmp$ = attrsMap.get_11rb$(event)) != null ? tmp$ : event;
  }
  function StringAttr() {
    StringAttr_instance = this;
  }
  StringAttr.prototype.getValue_pt3q5s$ = function (thisRef, property) {
    var tmp$;
    return (tmp$ = thisRef.attributes.get_11rb$(property.callableName)) != null ? tmp$ : '';
  };
  StringAttr.prototype.setValue_wi26v6$ = function (thisRef, property, value) {
    var $receiver = thisRef.attributes;
    var key = property.callableName;
    $receiver.put_xwzc9p$(key, value);
  };
  StringAttr.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StringAttr',
    interfaces: []
  };
  var StringAttr_instance = null;
  function StringAttr_getInstance() {
    if (StringAttr_instance === null) {
      new StringAttr();
    }return StringAttr_instance;
  }
  var key;
  var key_metadata = new PropertyMetadata('key');
  function get_key($receiver) {
    return key.getValue_pt3q5s$($receiver, key_metadata);
  }
  function set_key_0($receiver, key_0) {
    key.setValue_wi26v6$($receiver, key_metadata, key_0);
  }
  var defaultValue;
  var defaultValue_metadata = new PropertyMetadata('defaultValue');
  function get_defaultValue($receiver) {
    return defaultValue.getValue_pt3q5s$($receiver, defaultValue_metadata);
  }
  function set_defaultValue($receiver, defaultValue_0) {
    defaultValue.setValue_wi26v6$($receiver, defaultValue_metadata, defaultValue_0);
  }
  var defaultValue_0;
  var defaultValue_metadata_0 = new PropertyMetadata('defaultValue');
  function get_defaultValue_0($receiver) {
    return defaultValue_0.getValue_pt3q5s$($receiver, defaultValue_metadata_0);
  }
  function set_defaultValue_0($receiver, defaultValue) {
    defaultValue_0.setValue_wi26v6$($receiver, defaultValue_metadata_0, defaultValue);
  }
  var value;
  var value_metadata = new PropertyMetadata('value');
  function get_value($receiver) {
    return value.getValue_pt3q5s$($receiver, value_metadata);
  }
  function set_value($receiver, value_0) {
    value.setValue_wi26v6$($receiver, value_metadata, value_0);
  }
  function get_jsStyle($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver.attributes.get_11rb$('style')) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver_0 = {};
      tmp$_0 = $receiver_0;
    }
    var value = tmp$_0;
    set_jsStyle($receiver, value);
    return value;
  }
  function set_jsStyle($receiver, value) {
    $receiver.attributes.put_xwzc9p$('style', value);
  }
  var jsStyle = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.jsStyle_ymsho7$', wrapFunction(function () {
    var get_jsStyle = _.react.dom.get_jsStyle_6s7ubj$;
    return function ($receiver, handler) {
      handler(get_jsStyle($receiver));
    };
  }));
  var tag = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.tag_usjfi1$', wrapFunction(function () {
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, block, factory) {
      var $receiver_0 = new RDOMBuilder_init(factory);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var a = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.a_nbz07b$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var A_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function a$lambda(closure$href, closure$target, closure$classes) {
      return function (it) {
        return new A_init(attributesMapOf(['href', closure$href, 'target', closure$target, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, href, target, classes, block) {
      if (href === void 0)
        href = null;
      if (target === void 0)
        target = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(a$lambda(href, target, classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var abbr = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.abbr_2pbh6j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ABBR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ABBR;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function abbr$lambda(closure$classes) {
      return function (it) {
        return new ABBR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(abbr$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var address = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.address_z0z9h0$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ADDRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ADDRESS;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function address$lambda(closure$classes) {
      return function (it) {
        return new ADDRESS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(address$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var area = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.area_88drbb$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AREA;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function area$lambda(closure$shape, closure$alt, closure$classes) {
      return function (it) {
        return new AREA_init(attributesMapOf(['Shape', closure$shape != null ? enumEncode(closure$shape) : null, 'alt', closure$alt, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, shape, alt, classes, block) {
      if (shape === void 0)
        shape = null;
      if (alt === void 0)
        alt = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(area$lambda(shape, alt, classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var article = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.article_oyo50y$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ARTICLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ARTICLE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function article$lambda(closure$classes) {
      return function (it) {
        return new ARTICLE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(article$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var aside = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.aside_d4tg9c$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ASIDE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ASIDE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function aside$lambda(closure$classes) {
      return function (it) {
        return new ASIDE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(aside$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var audio = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.audio_26aei6$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var AUDIO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AUDIO;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function audio$lambda(closure$classes) {
      return function (it) {
        return new AUDIO_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(audio$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var b = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.b_7nhtl2$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var B_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.B;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function b$lambda(closure$classes) {
      return function (it) {
        return new B_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(b$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var base = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.base_1qtasl$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BASE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BASE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function base$lambda(closure$classes) {
      return function (it) {
        return new BASE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(base$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var bdi = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.bdi_e0blcx$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BDI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDI;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function bdi$lambda(closure$classes) {
      return function (it) {
        return new BDI_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(bdi$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var bdo = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.bdo_ydoj6j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BDO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDO;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function bdo$lambda(closure$classes) {
      return function (it) {
        return new BDO_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(bdo$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var blockQuote = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.blockQuote_244j8j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BLOCKQUOTE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BLOCKQUOTE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function blockQuote$lambda(closure$classes) {
      return function (it) {
        return new BLOCKQUOTE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(blockQuote$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var body = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.body_qvl2vq$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BODY;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function body$lambda(closure$classes) {
      return function (it) {
        return new BODY_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(body$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var br = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.br_dl5xac$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BR;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function br$lambda(closure$classes) {
      return function (it) {
        return new BR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(br$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var button = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.button_ueq2um$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
      return function (it) {
        return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, formEncType, formMethod, type, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(button$lambda(formEncType, formMethod, type, classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var canvas = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.canvas_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function canvas$lambda(closure$classes) {
      return function (it) {
        return new CANVAS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(canvas$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var canvas_0 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.canvas_jixbo$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function canvas$lambda(closure$classes) {
      return function (it) {
        return new CANVAS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(canvas$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var caption = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.caption_ix3blu$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CAPTION;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function caption$lambda(closure$classes) {
      return function (it) {
        return new CAPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(caption$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var cite = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.cite_gtb7bp$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CITE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CITE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function cite$lambda(closure$classes) {
      return function (it) {
        return new CITE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(cite$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var code = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.code_e1ernl$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CODE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CODE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function code$lambda(closure$classes) {
      return function (it) {
        return new CODE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(code$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var col = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.col_5agiaw$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var COL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COL;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function col$lambda(closure$classes) {
      return function (it) {
        return new COL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(col$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var colGroup = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.colGroup_efezmb$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var COLGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COLGROUP;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function colGroup$lambda(closure$classes) {
      return function (it) {
        return new COLGROUP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(colGroup$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var command = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.command_mjdgdz$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var COMMAND_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COMMAND;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function command$lambda(closure$type, closure$classes) {
      return function (it) {
        return new COMMAND_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, type, classes, block) {
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(command$lambda(type, classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var dataList = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.dataList_bhll8k$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DATALIST_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DATALIST;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function dataList$lambda(closure$classes) {
      return function (it) {
        return new DATALIST_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(dataList$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var dd = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.dd_7bhhcc$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DD;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function dd$lambda(closure$classes) {
      return function (it) {
        return new DD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(dd$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var del = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.del_lx3a6b$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DEL;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function del$lambda(closure$classes) {
      return function (it) {
        return new DEL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(del$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var details = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.details_dx18be$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DETAILS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DETAILS;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function details$lambda(closure$classes) {
      return function (it) {
        return new DETAILS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(details$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var dfn = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.dfn_gfa744$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DFN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DFN;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function dfn$lambda(closure$classes) {
      return function (it) {
        return new DFN_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(dfn$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var dialog = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.dialog_r2vd0$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DIALOG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIALOG;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function dialog$lambda(closure$classes) {
      return function (it) {
        return new DIALOG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(dialog$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var div = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.div_gtrzbd$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DIV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function div$lambda(closure$classes) {
      return function (it) {
        return new DIV_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(div$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var dl = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.dl_asxds4$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DL;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function dl$lambda(closure$classes) {
      return function (it) {
        return new DL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(dl$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var dt = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.dt_eada7w$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DT;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function dt$lambda(closure$classes) {
      return function (it) {
        return new DT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(dt$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var em = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.em_oqozj8$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var EM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EM;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function em$lambda(closure$classes) {
      return function (it) {
        return new EM_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(em$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var embed = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.embed_n808k1$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var EMBED_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EMBED;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function embed$lambda(closure$classes) {
      return function (it) {
        return new EMBED_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(embed$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var fieldSet = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.fieldSet_hp7o$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FIELDSET_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIELDSET;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function fieldSet$lambda(closure$classes) {
      return function (it) {
        return new FIELDSET_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(fieldSet$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var figcaption = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.figcaption_m3xu5m$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FIGCAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGCAPTION;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function figcaption$lambda(closure$classes) {
      return function (it) {
        return new FIGCAPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(figcaption$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var figure = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.figure_1mq3ag$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FIGURE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGURE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function figure$lambda(closure$classes) {
      return function (it) {
        return new FIGURE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(figure$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var footer = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.footer_xcq26p$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FOOTER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FOOTER;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function footer$lambda(closure$classes) {
      return function (it) {
        return new FOOTER_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(footer$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var form = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.form_7ftnwq$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FORM;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function form$lambda(closure$action, closure$encType, closure$method, closure$classes) {
      return function (it) {
        return new FORM_init(attributesMapOf(['action', closure$action, 'enctype', closure$encType != null ? enumEncode(closure$encType) : null, 'method', closure$method != null ? enumEncode(closure$method) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, action, encType, method, classes, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (method === void 0)
        method = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(form$lambda(action, encType, method, classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var h1 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.h1_quudml$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H1_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function h1$lambda(closure$classes) {
      return function (it) {
        return new H1_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(h1$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var h2 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.h2_zaswbi$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H2_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function h2$lambda(closure$classes) {
      return function (it) {
        return new H2_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(h2$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var h3 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.h3_racmyp$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H3_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function h3$lambda(closure$classes) {
      return function (it) {
        return new H3_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(h3$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var h4 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.h4_iue49s$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H4_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H4;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function h4$lambda(closure$classes) {
      return function (it) {
        return new H4_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(h4$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var h5 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.h5_aeflkv$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H5_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H5;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function h5$lambda(closure$classes) {
      return function (it) {
        return new H5_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(h5$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var h6 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.h6_1yh2vy$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H6_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H6;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function h6$lambda(closure$classes) {
      return function (it) {
        return new H6_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(h6$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var head = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.head_elsczb$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEAD;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function head$lambda(it) {
      return new HEAD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new RDOMBuilder_init(head$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var header = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.header_xi6ch$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var HEADER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEADER;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function header$lambda(closure$classes) {
      return function (it) {
        return new HEADER_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(header$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var hGroup = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.hGroup_cr6jrp$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var HGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HGROUP;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function hGroup$lambda(closure$classes) {
      return function (it) {
        return new HGROUP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(hGroup$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var hr = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.hr_ld1ake$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var HR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HR;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function hr$lambda(closure$classes) {
      return function (it) {
        return new HR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(hr$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var html = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.html_a3w7j2$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HTML_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HTML;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function html$lambda(it) {
      return new HTML_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new RDOMBuilder_init(html$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var i = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.i_jkw8pr$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var I_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.I;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function i$lambda(closure$classes) {
      return function (it) {
        return new I_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(i$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var iframe = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.iframe_ft8ple$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function iframe$lambda(closure$sandbox, closure$classes) {
      return function (it) {
        return new IFRAME_init(attributesMapOf(['sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, sandbox, classes, content) {
      if (sandbox === void 0)
        sandbox = null;
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(iframe$lambda(sandbox, classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var iframe_0 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.iframe_i8zf9o$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function iframe$lambda(closure$sandbox, closure$classes) {
      return function (it) {
        return new IFRAME_init(attributesMapOf(['sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, sandbox, classes, block) {
      if (sandbox === void 0)
        sandbox = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(iframe$lambda(sandbox, classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var img = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.img_vso3mj$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IMG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function img$lambda(closure$alt, closure$src, closure$classes) {
      return function (it) {
        return new IMG_init(attributesMapOf(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, alt, src, classes, block) {
      if (alt === void 0)
        alt = null;
      if (src === void 0)
        src = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(img$lambda(alt, src, classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var input = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.input_etd37n$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
      return function (it) {
        return new INPUT_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, type, formEncType, formMethod, name, classes, block) {
      if (type === void 0)
        type = null;
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(input$lambda(type, formEncType, formMethod, name, classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var ins = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.ins_x2jgqu$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var INS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INS;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function ins$lambda(closure$classes) {
      return function (it) {
        return new INS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(ins$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var kbd = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.kbd_547kbf$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var KBD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.KBD;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function kbd$lambda(closure$classes) {
      return function (it) {
        return new KBD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(kbd$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var keyGen = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.keyGen_kloirg$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var KEYGEN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.KEYGEN;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function keyGen$lambda(closure$keyType, closure$classes) {
      return function (it) {
        return new KEYGEN_init(attributesMapOf(['keytype', closure$keyType != null ? enumEncode(closure$keyType) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, keyType, classes, block) {
      if (keyType === void 0)
        keyType = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(keyGen$lambda(keyType, classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var label = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.label_thtid0$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var LABEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LABEL;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function label$lambda(closure$classes) {
      return function (it) {
        return new LABEL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(label$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var legend = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.legend_jb5h3z$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var LEGEND_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LEGEND;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function legend$lambda(closure$classes) {
      return function (it) {
        return new LEGEND_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(legend$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var li = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.li_239rhr$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var LI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function li$lambda(closure$classes) {
      return function (it) {
        return new LI_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(li$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var link = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.link_28p9e6$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var LINK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LINK;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function link$lambda(closure$href, closure$rel, closure$type) {
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
      var $receiver_0 = new RDOMBuilder_init(link$lambda(href, rel, type));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var main = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.main_szkgy5$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MAIN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MAIN;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function main$lambda(closure$classes) {
      return function (it) {
        return new MAIN_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(main$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var map = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.map_5olbsf$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var MAP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MAP;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function map$lambda(closure$name, closure$classes) {
      return function (it) {
        return new MAP_init(attributesMapOf(['name', closure$name, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, name, classes, block) {
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(map$lambda(name, classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var mark = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.mark_fbhysh$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MARK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MARK;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function mark$lambda(closure$classes) {
      return function (it) {
        return new MARK_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(mark$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var math = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.math_g9a7ss$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MATH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MATH;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function math$lambda(closure$classes) {
      return function (it) {
        return new MATH_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(math$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var mathml = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.mathml_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MATHML_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MATHML;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function mathml$lambda(closure$classes) {
      return function (it) {
        return new MATHML_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(mathml$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var mathml_0 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.mathml_d0nt39$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MATHML_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MATHML;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function mathml$lambda(closure$classes) {
      return function (it) {
        return new MATHML_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(mathml$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var meta = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.meta_lff4tg$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var META_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.META;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function meta$lambda(closure$name, closure$content) {
      return function (it) {
        return new META_init(attributesMapOf(['name', closure$name, 'content', closure$content]), it);
      };
    }
    return function ($receiver, name, content, block) {
      if (name === void 0)
        name = null;
      if (content === void 0)
        content = null;
      var $receiver_0 = new RDOMBuilder_init(meta$lambda(name, content));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var meter = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.meter_pg8oht$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var METER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.METER;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function meter$lambda(closure$classes) {
      return function (it) {
        return new METER_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(meter$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var nav = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.nav_5mbwij$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var NAV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NAV;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function nav$lambda(closure$classes) {
      return function (it) {
        return new NAV_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(nav$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var noScript = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.noScript_3p4atc$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var NOSCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NOSCRIPT;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function noScript$lambda(closure$classes) {
      return function (it) {
        return new NOSCRIPT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(noScript$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var object_ = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.object__hy8adv$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OBJECT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OBJECT;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function object_$lambda(closure$classes) {
      return function (it) {
        return new OBJECT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(object_$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var ol = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.ol_r4jh81$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OL;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function ol$lambda(closure$classes) {
      return function (it) {
        return new OL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(ol$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var optGroup = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.optGroup_q968rn$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var OPTGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTGROUP;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function optGroup$lambda(closure$label, closure$classes) {
      return function (it) {
        return new OPTGROUP_init(attributesMapOf(['label', closure$label, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, label, classes, block) {
      if (label === void 0)
        label = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(optGroup$lambda(label, classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var option = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.option_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function option$lambda(closure$classes) {
      return function (it) {
        return new OPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(option$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var option_0 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.option_10ahkn$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function option$lambda(closure$classes) {
      return function (it) {
        return new OPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(option$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var output = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.output_6fkigb$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OUTPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OUTPUT;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function output$lambda(closure$classes) {
      return function (it) {
        return new OUTPUT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(output$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var p = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.p_vianug$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var P_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function p$lambda(closure$classes) {
      return function (it) {
        return new P_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(p$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var param = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.param_r0oori$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var PARAM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PARAM;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function param$lambda(closure$name, closure$value) {
      return function (it) {
        return new PARAM_init(attributesMapOf(['name', closure$name, 'value', closure$value]), it);
      };
    }
    return function ($receiver, name, value, block) {
      if (name === void 0)
        name = null;
      if (value === void 0)
        value = null;
      var $receiver_0 = new RDOMBuilder_init(param$lambda(name, value));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var pre = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.pre_bsqswr$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var PRE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PRE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function pre$lambda(closure$classes) {
      return function (it) {
        return new PRE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(pre$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var progress = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.progress_qram69$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var PROGRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PROGRESS;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function progress$lambda(closure$classes) {
      return function (it) {
        return new PROGRESS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(progress$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var q = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.q_n2c55j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var Q_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.Q;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function q$lambda(closure$classes) {
      return function (it) {
        return new Q_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(q$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var rp = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.rp_68stce$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var RP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RP;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function rp$lambda(closure$classes) {
      return function (it) {
        return new RP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(rp$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var rt = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.rt_rj19fa$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var RT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RT;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function rt$lambda(closure$classes) {
      return function (it) {
        return new RT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(rt$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var ruby = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.ruby_w5f9pu$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var RUBY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RUBY;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function ruby$lambda(closure$classes) {
      return function (it) {
        return new RUBY_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(ruby$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var samp = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.samp_uvv9ff$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SAMP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SAMP;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function samp$lambda(closure$classes) {
      return function (it) {
        return new SAMP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(samp$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var script = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.script_4uv0f2$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var SCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SCRIPT;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function script$lambda(closure$type, closure$src) {
      return function (it) {
        return new SCRIPT_init(attributesMapOf(['type', closure$type, 'src', closure$src]), it);
      };
    }
    return function ($receiver, type, src, block) {
      if (type === void 0)
        type = null;
      if (src === void 0)
        src = null;
      var $receiver_0 = new RDOMBuilder_init(script$lambda(type, src));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var section = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.section_7ougmb$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SECTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SECTION;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function section$lambda(closure$classes) {
      return function (it) {
        return new SECTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(section$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var select = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.select_iug7io$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SELECT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SELECT;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function select$lambda(closure$classes) {
      return function (it) {
        return new SELECT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(select$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var small = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.small_c9m43j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SMALL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SMALL;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function small$lambda(closure$classes) {
      return function (it) {
        return new SMALL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(small$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var source = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.source_ly1yj5$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SOURCE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SOURCE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function source$lambda(closure$classes) {
      return function (it) {
        return new SOURCE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(source$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var span = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.span_t2ee0y$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SPAN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function span$lambda(closure$classes) {
      return function (it) {
        return new SPAN_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(span$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var strong = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.strong_oovi1h$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STRONG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STRONG;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function strong$lambda(closure$classes) {
      return function (it) {
        return new STRONG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(strong$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var style = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.style_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function style$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    return function ($receiver, type, content) {
      if (type === void 0)
        type = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(style$lambda(type));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var style_0 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.style_kht6w9$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function style$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    return function ($receiver, type, block) {
      if (type === void 0)
        type = null;
      var $receiver_0 = new RDOMBuilder_init(style$lambda(type));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var sub = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.sub_v7eync$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SUB_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUB;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function sub$lambda(closure$classes) {
      return function (it) {
        return new SUB_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(sub$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var sup = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.sup_fyw92e$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUP;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function sup$lambda(closure$classes) {
      return function (it) {
        return new SUP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(sup$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var svg = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.svg_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function svg$lambda(closure$classes) {
      return function (it) {
        return new SVG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(svg$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var svg_0 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.svg_bdchms$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function svg$lambda(closure$classes) {
      return function (it) {
        return new SVG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(svg$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var table = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.table_lwybxi$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TABLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function table$lambda(closure$classes) {
      return function (it) {
        return new TABLE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(table$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var tbody = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.tbody_tx0lke$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TBODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TBODY;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function tbody$lambda(closure$classes) {
      return function (it) {
        return new TBODY_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(tbody$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var td = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.td_a9j6l8$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function td$lambda(closure$classes) {
      return function (it) {
        return new TD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(td$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var textArea = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.textArea_ctzq07$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function textArea$lambda(closure$rows, closure$cols, closure$wrap, closure$classes) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, rows, cols, wrap, classes, content) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(textArea$lambda(rows, cols, wrap, classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var textArea_0 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.textArea_4u31cv$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function textArea$lambda(closure$rows, closure$cols, closure$wrap, closure$classes) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, rows, cols, wrap, classes, block) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(textArea$lambda(rows, cols, wrap, classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var tfoot = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.tfoot_agonsq$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TFOOT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TFOOT;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function tfoot$lambda(closure$classes) {
      return function (it) {
        return new TFOOT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(tfoot$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var th = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.th_bo9ux3$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TH;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function th$lambda(closure$scope, closure$classes) {
      return function (it) {
        return new TH_init(attributesMapOf(['scope', closure$scope != null ? enumEncode(closure$scope) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, scope, classes, block) {
      if (scope === void 0)
        scope = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(th$lambda(scope, classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var thead = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.thead_jad978$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var THEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.THEAD;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function thead$lambda(closure$classes) {
      return function (it) {
        return new THEAD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(thead$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var time = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.time_m4er8h$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TIME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TIME;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function time$lambda(closure$classes) {
      return function (it) {
        return new TIME_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(time$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var title = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.title_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function title$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(title$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var title_0 = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.title_cp8zsd$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function title$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = new RDOMBuilder_init(title$lambda);
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var tr = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.tr_y4c0um$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function tr$lambda(closure$classes) {
      return function (it) {
        return new TR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(tr$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var ul = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.ul_yweui3$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var UL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function ul$lambda(closure$classes) {
      return function (it) {
        return new UL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(ul$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var var_ = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.var__wqfjdr$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var VAR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VAR;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function var_$lambda(closure$classes) {
      return function (it) {
        return new VAR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(var_$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var video = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.video_4xrr2l$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var VIDEO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VIDEO;
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    function video$lambda(closure$classes) {
      return function (it) {
        return new VIDEO_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(video$lambda(classes));
      block($receiver_0);
      return $receiver.child_52psg1$($receiver_0.create());
    };
  }));
  var package$react = _.react || (_.react = {});
  var package$dom = package$react.dom || (package$react.dom = {});
  package$dom.InnerHTML = InnerHTML;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = _;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  package$dom.RDOMBuilder = RDOMBuilder;
  package$dom.render_2955dm$ = render_0;
  package$dom.hydrate_2955dm$ = hydrate_0;
  package$dom.createPortal_4s0l5f$ = createPortal_0;
  package$dom.fixAttributeName_61zpoe$ = fixAttributeName;
  Object.defineProperty(package$dom, 'StringAttr', {
    get: StringAttr_getInstance
  });
  package$dom.get_key_6s7ubj$ = get_key;
  package$dom.set_key_g0n3bx$ = set_key_0;
  package$dom.get_defaultValue_a2ovwx$ = get_defaultValue;
  package$dom.set_defaultValue_q3v29f$ = set_defaultValue;
  package$dom.get_defaultValue_dtfm6v$ = get_defaultValue_0;
  package$dom.set_defaultValue_5ng1o5$ = set_defaultValue_0;
  package$dom.get_value_dtfm6v$ = get_value;
  package$dom.set_value_5ng1o5$ = set_value;
  package$dom.get_jsStyle_6s7ubj$ = get_jsStyle;
  package$dom.set_jsStyle_uekstc$ = set_jsStyle;
  package$dom.jsStyle_ymsho7$ = jsStyle;
  package$dom.tag_usjfi1$ = tag;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$dom.a_nbz07b$ = a;
  package$dom.abbr_2pbh6j$ = abbr;
  package$dom.address_z0z9h0$ = address;
  package$dom.area_88drbb$ = area;
  package$dom.article_oyo50y$ = article;
  package$dom.aside_d4tg9c$ = aside;
  package$dom.audio_26aei6$ = audio;
  package$dom.b_7nhtl2$ = b;
  package$dom.base_1qtasl$ = base;
  package$dom.bdi_e0blcx$ = bdi;
  package$dom.bdo_ydoj6j$ = bdo;
  package$dom.blockQuote_244j8j$ = blockQuote;
  package$dom.body_qvl2vq$ = body;
  package$dom.br_dl5xac$ = br;
  package$dom.button_ueq2um$ = button;
  package$dom.canvas_xoe246$ = canvas;
  package$dom.canvas_jixbo$ = canvas_0;
  package$dom.caption_ix3blu$ = caption;
  package$dom.cite_gtb7bp$ = cite;
  package$dom.code_e1ernl$ = code;
  package$dom.col_5agiaw$ = col;
  package$dom.colGroup_efezmb$ = colGroup;
  package$dom.command_mjdgdz$ = command;
  package$dom.dataList_bhll8k$ = dataList;
  package$dom.dd_7bhhcc$ = dd;
  package$dom.del_lx3a6b$ = del;
  package$dom.details_dx18be$ = details;
  package$dom.dfn_gfa744$ = dfn;
  package$dom.dialog_r2vd0$ = dialog;
  package$dom.div_gtrzbd$ = div;
  package$dom.dl_asxds4$ = dl;
  package$dom.dt_eada7w$ = dt;
  package$dom.em_oqozj8$ = em;
  package$dom.embed_n808k1$ = embed;
  package$dom.fieldSet_hp7o$ = fieldSet;
  package$dom.figcaption_m3xu5m$ = figcaption;
  package$dom.figure_1mq3ag$ = figure;
  package$dom.footer_xcq26p$ = footer;
  package$dom.form_7ftnwq$ = form;
  package$dom.h1_quudml$ = h1;
  package$dom.h2_zaswbi$ = h2;
  package$dom.h3_racmyp$ = h3;
  package$dom.h4_iue49s$ = h4;
  package$dom.h5_aeflkv$ = h5;
  package$dom.h6_1yh2vy$ = h6;
  package$dom.head_elsczb$ = head;
  package$dom.header_xi6ch$ = header;
  package$dom.hGroup_cr6jrp$ = hGroup;
  package$dom.hr_ld1ake$ = hr;
  package$dom.html_a3w7j2$ = html;
  package$dom.i_jkw8pr$ = i;
  package$dom.iframe_ft8ple$ = iframe;
  package$dom.iframe_i8zf9o$ = iframe_0;
  package$dom.img_vso3mj$ = img;
  package$dom.input_etd37n$ = input;
  package$dom.ins_x2jgqu$ = ins;
  package$dom.kbd_547kbf$ = kbd;
  package$dom.keyGen_kloirg$ = keyGen;
  package$dom.label_thtid0$ = label;
  package$dom.legend_jb5h3z$ = legend;
  package$dom.li_239rhr$ = li;
  package$dom.link_28p9e6$ = link;
  package$dom.main_szkgy5$ = main;
  package$dom.map_5olbsf$ = map;
  package$dom.mark_fbhysh$ = mark;
  package$dom.math_g9a7ss$ = math;
  package$dom.mathml_xoe246$ = mathml;
  package$dom.mathml_d0nt39$ = mathml_0;
  package$dom.meta_lff4tg$ = meta;
  package$dom.meter_pg8oht$ = meter;
  package$dom.nav_5mbwij$ = nav;
  package$dom.noScript_3p4atc$ = noScript;
  package$dom.object__hy8adv$ = object_;
  package$dom.ol_r4jh81$ = ol;
  package$dom.optGroup_q968rn$ = optGroup;
  package$dom.option_xoe246$ = option;
  package$dom.option_10ahkn$ = option_0;
  package$dom.output_6fkigb$ = output;
  package$dom.p_vianug$ = p;
  package$dom.param_r0oori$ = param;
  package$dom.pre_bsqswr$ = pre;
  package$dom.progress_qram69$ = progress;
  package$dom.q_n2c55j$ = q;
  package$dom.rp_68stce$ = rp;
  package$dom.rt_rj19fa$ = rt;
  package$dom.ruby_w5f9pu$ = ruby;
  package$dom.samp_uvv9ff$ = samp;
  package$dom.script_4uv0f2$ = script;
  package$dom.section_7ougmb$ = section;
  package$dom.select_iug7io$ = select;
  package$dom.small_c9m43j$ = small;
  package$dom.source_ly1yj5$ = source;
  package$dom.span_t2ee0y$ = span;
  package$dom.strong_oovi1h$ = strong;
  package$dom.style_xoe246$ = style;
  package$dom.style_kht6w9$ = style_0;
  package$dom.sub_v7eync$ = sub;
  package$dom.sup_fyw92e$ = sup;
  package$dom.svg_xoe246$ = svg;
  package$dom.svg_bdchms$ = svg_0;
  package$dom.table_lwybxi$ = table;
  package$dom.tbody_tx0lke$ = tbody;
  package$dom.td_a9j6l8$ = td;
  package$dom.textArea_ctzq07$ = textArea;
  package$dom.textArea_4u31cv$ = textArea_0;
  package$dom.tfoot_agonsq$ = tfoot;
  package$dom.th_bo9ux3$ = th;
  package$dom.thead_jad978$ = thead;
  package$dom.time_m4er8h$ = time;
  package$dom.title_hw0qe1$ = title;
  package$dom.title_cp8zsd$ = title_0;
  package$dom.tr_y4c0um$ = tr;
  package$dom.ul_yweui3$ = ul;
  package$dom.var__wqfjdr$ = var_;
  package$dom.video_4xrr2l$ = video;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_3p81yu$ = Unsafe.prototype.raw_3p81yu$;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_61zpoe$ = Unsafe.prototype.raw_61zpoe$;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_ws8or7$ = Unsafe.prototype.raw_ws8or7$;
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  events = listOf(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap']);
  var $receiver = events;
  var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var item = tmp$.next();
    destination.add_11rb$(to(item.toLowerCase(), item));
  }
  var $receiver_0 = toMutableMap(toMap(destination));
  $receiver_0.put_xwzc9p$('class', 'className');
  $receiver_0.put_xwzc9p$('ondblclick', 'onDoubleClick');
  attrsMap = $receiver_0;
  key = StringAttr_getInstance();
  defaultValue = StringAttr_getInstance();
  defaultValue_0 = StringAttr_getInstance();
  value = StringAttr_getInstance();
  Kotlin.defineModule('kotlin-wrappers-kotlin-react-dom-jsLegacy', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('react'), require('kotlinx-html-js'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('react-dom')));
