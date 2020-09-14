(function (_, Kotlin, $module$react, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var createElement = $module$react.createElement;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var clone = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.clone_issdgt$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var Children = $module$react.Children;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var throwCCE = Kotlin.throwCCE;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var rawForwardRef = $module$react.forwardRef;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var asJsObject = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.asJsObject_s8jyvk$;
  var cloneElement = $module$react.cloneElement;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var Throwable = Error;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var lazy = $module$react.lazy;
  var Component = $module$react.Component;
  var PureComponent = $module$react.PureComponent;
  var rawUseState = $module$react.useState;
  var Any = Object;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var rawUseReducer = $module$react.useReducer;
  var rawUseEffect = $module$react.useEffect;
  var rawUseLayoutEffect = $module$react.useLayoutEffect;
  RBuilderMultiple.prototype = Object.create(RBuilder.prototype);
  RBuilderMultiple.prototype.constructor = RBuilderMultiple;
  RBuilderSingle.prototype = Object.create(RBuilder.prototype);
  RBuilderSingle.prototype.constructor = RBuilderSingle;
  RElementBuilder.prototype = Object.create(RBuilder.prototype);
  RElementBuilder.prototype.constructor = RElementBuilder;
  RComponent.prototype = Object.create(Component.prototype);
  RComponent.prototype.constructor = RComponent;
  RPureComponent.prototype = Object.create(PureComponent.prototype);
  RPureComponent.prototype.constructor = RPureComponent;
  function invoke($receiver, component) {
    return $receiver.call(null, component);
  }
  function invoke$lambda$lambda(closure$component, closure$props) {
    return function ($receiver) {
      closure$component($receiver, closure$props);
      return Unit;
    };
  }
  function invoke$lambda(closure$component) {
    return function (props) {
      return buildElements(invoke$lambda$lambda(closure$component, props));
    };
  }
  function invoke_0($receiver, component) {
    return $receiver.call(null, invoke$lambda(component));
  }
  function invoke$lambda$lambda_0(closure$component, closure$props) {
    return function ($receiver) {
      closure$component($receiver, closure$props);
      return Unit;
    };
  }
  function invoke$lambda_0(closure$component) {
    return function (props) {
      return buildElements(invoke$lambda$lambda_0(closure$component, props));
    };
  }
  function invoke_1($receiver, config, component) {
    return $receiver.call(null, invoke$lambda_0(component), config);
  }
  function allOf$lambda(closure$hocs) {
    return function (it) {
      var $receiver = closure$hocs;
      var tmp$;
      var accumulator = it;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        accumulator = invoke(element, accumulator);
      }
      return accumulator;
    };
  }
  function allOf(hocs) {
    return allOf$lambda(hocs);
  }
  function ReactDsl() {
  }
  ReactDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactDsl',
    interfaces: [Annotation]
  };
  function RBuilder() {
    this.childList = ArrayList_init();
  }
  RBuilder.prototype.child_52psg1$ = function (element) {
    this.childList.add_11rb$(element);
    return element;
  };
  RBuilder.prototype.unaryPlus_84gpoi$ = function ($receiver) {
    this.childList.add_11rb$($receiver);
  };
  RBuilder.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.childList.add_11rb$($receiver);
  };
  RBuilder.prototype.child_k3oess$ = function (type, props, children) {
    return this.child_52psg1$(createElement.apply(null, [type, props].concat(copyToArray(children))));
  };
  RBuilder.prototype.child_4dvv5y$ = function (type, props, handler) {
    var $receiver = new RElementBuilder(props);
    handler($receiver);
    var children = $receiver.childList;
    return this.child_k3oess$(type, props, children);
  };
  RBuilder.prototype.invoke_eb8iu4$ = function ($receiver, handler) {
    return this.child_4dvv5y$($receiver, {}, handler);
  };
  RBuilder.prototype.invoke_csqs6z$ = function ($receiver, value, handler) {
    var $receiver_0 = {};
    $receiver_0.value = value;
    return this.child_4dvv5y$($receiver, $receiver_0, handler);
  };
  function RBuilder$invoke$lambda$lambda$lambda(closure$handler, closure$value) {
    return function ($receiver) {
      closure$handler($receiver, closure$value);
      return Unit;
    };
  }
  function RBuilder$invoke$lambda$lambda(closure$handler) {
    return function (value) {
      return buildElements(RBuilder$invoke$lambda$lambda$lambda(closure$handler, value));
    };
  }
  function RBuilder$invoke$lambda($receiver) {
    return Unit;
  }
  RBuilder.prototype.invoke_ory6b3$ = function ($receiver, handler) {
    var $receiver_0 = {};
    $receiver_0.children = RBuilder$invoke$lambda$lambda(handler);
    return this.child_4dvv5y$($receiver, $receiver_0, RBuilder$invoke$lambda);
  };
  RBuilder.prototype.node_rwypko$ = function ($receiver, props, children) {
    if (children === void 0)
      children = emptyList();
    return this.child_k3oess$($receiver, clone(props), children);
  };
  RBuilder.prototype.child_ssazr1$ = function (klazz, handler) {
    return this.invoke_eb8iu4$(get_rClass(klazz), handler);
  };
  RBuilder.prototype.child_t7en6a$ = defineInlineFunction('kotlin-wrappers-kotlin-react-jsLegacy.react.RBuilder.child_t7en6a$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (C_0, isC, handler) {
      return this.child_ssazr1$(getKClass(C_0), handler);
    };
  }));
  function RBuilder$childFunction$lambda(closure$children) {
    return function (value) {
      var $receiver = new RBuilder();
      closure$children($receiver, value);
      return first($receiver.childList);
    };
  }
  RBuilder.prototype.childFunction_2656uf$ = function (klazz, handler, children) {
    var tmp$ = get_rClass(klazz);
    var $receiver = new RElementBuilder({});
    handler($receiver);
    return this.child_k3oess$(tmp$, $receiver.attrs, listOf(RBuilder$childFunction$lambda(children)));
  };
  RBuilder.prototype.childFunction_khdow9$ = defineInlineFunction('kotlin-wrappers-kotlin-react-jsLegacy.react.RBuilder.childFunction_khdow9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (C_0, isC, handler, children) {
      return this.childFunction_2656uf$(getKClass(C_0), handler, children);
    };
  }));
  RBuilder.prototype.node_3ecl1l$ = function (klazz, props, children) {
    if (children === void 0)
      children = emptyList();
    return this.node_rwypko$(get_rClass(klazz), props, children);
  };
  RBuilder.prototype.node_e2hqbc$ = defineInlineFunction('kotlin-wrappers-kotlin-react-jsLegacy.react.RBuilder.node_e2hqbc$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getKClass = Kotlin.getKClass;
    return function (C_0, isC, props, children) {
      if (children === void 0)
        children = emptyList();
      return this.node_3ecl1l$(getKClass(C_0), props, children);
    };
  }));
  RBuilder.prototype.children_yllgzm$ = function ($receiver) {
    addAll(this.childList, Children.toArray(get_children($receiver)));
  };
  RBuilder.prototype.children_48djri$ = function ($receiver, value) {
    var tmp$;
    this.childList.add_11rb$((typeof (tmp$ = get_children($receiver)) === 'function' ? tmp$ : throwCCE())(value));
  };
  RBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RBuilder',
    interfaces: []
  };
  function RBuilderMultiple() {
    RBuilder.call(this);
  }
  RBuilderMultiple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RBuilderMultiple',
    interfaces: [RBuilder]
  };
  function buildElements(handler) {
    var tmp$;
    var $receiver = new RBuilder();
    handler($receiver);
    var nodes = $receiver.childList;
    switch (nodes.size) {
      case 0:
        tmp$ = null;
        break;
      case 1:
        tmp$ = first(nodes);
        break;
      default:var tmp$_0 = $module$react.Fragment;
        var $receiver_0 = {};
        tmp$ = createElement.apply(null, [tmp$_0, $receiver_0].concat(copyToArray(nodes)));
        break;
    }
    return tmp$;
  }
  function RBuilderSingle() {
    RBuilder.call(this);
  }
  RBuilderSingle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RBuilderSingle',
    interfaces: [RBuilder]
  };
  var buildElement = defineInlineFunction('kotlin-wrappers-kotlin-react-jsLegacy.react.buildElement_zepujl$', wrapFunction(function () {
    var RBuilder_init = _.react.RBuilder;
    var first = Kotlin.kotlin.collections.first_2p1efm$;
    return function (handler) {
      var $receiver = new RBuilder_init();
      handler($receiver);
      return first($receiver.childList);
    };
  }));
  function RElementBuilder(attrs) {
    RBuilder.call(this);
    this.attrs_iyt8sk$_0 = attrs;
  }
  Object.defineProperty(RElementBuilder.prototype, 'attrs', {
    get: function () {
      return this.attrs_iyt8sk$_0;
    }
  });
  RElementBuilder.prototype.attrs_slhiwc$ = function (handler) {
    handler(this.attrs);
  };
  Object.defineProperty(RElementBuilder.prototype, 'key', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init(''.toString());
    },
    set: function (value) {
      set_key(this.attrs, value);
    }
  });
  Object.defineProperty(RElementBuilder.prototype, 'ref', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init(''.toString());
    },
    set: function (value) {
      set_ref(this.attrs, value);
    }
  });
  RElementBuilder.prototype.ref_5ij4lk$ = function (handler) {
    ref(this.attrs, handler);
  };
  RElementBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RElementBuilder',
    interfaces: [RBuilder]
  };
  function forwardRef$lambda$lambda(closure$handler, closure$props, closure$ref) {
    return function ($receiver) {
      closure$handler($receiver, closure$props, closure$ref);
      return Unit;
    };
  }
  function forwardRef$lambda(closure$handler) {
    return function (props, ref) {
      return buildElements(forwardRef$lambda$lambda(closure$handler, props, ref));
    };
  }
  function forwardRef(handler) {
    return rawForwardRef(forwardRef$lambda(handler));
  }
  function functionalComponent$lambda$lambda(closure$func, closure$props) {
    return function ($receiver) {
      closure$func($receiver, closure$props);
      return Unit;
    };
  }
  function functionalComponent$lambda(closure$func) {
    return function (props) {
      return buildElements(functionalComponent$lambda$lambda(closure$func, props));
    };
  }
  function functionalComponent(func) {
    return functionalComponent$lambda(func);
  }
  function child$lambda($receiver) {
    return Unit;
  }
  function child($receiver, component, props, handler) {
    if (props === void 0) {
      props = {};
    }if (handler === void 0)
      handler = child$lambda;
    return $receiver.child_4dvv5y$(component, props, handler);
  }
  function childFunction$lambda($receiver) {
    return Unit;
  }
  function childFunction($receiver, component, handler, children) {
    if (handler === void 0)
      handler = childFunction$lambda;
    return childFunction_0($receiver, component, {}, handler, children);
  }
  function childFunction$lambda_0($receiver) {
    return Unit;
  }
  function childFunction$lambda_1(closure$children) {
    return function (value) {
      var $receiver = new RBuilder();
      closure$children($receiver, value);
      return first($receiver.childList);
    };
  }
  function childFunction_0($receiver, component, props, handler, children) {
    if (handler === void 0)
      handler = childFunction$lambda_0;
    var $receiver_0 = new RElementBuilder(props);
    handler($receiver_0);
    return $receiver.child_k3oess$(component, $receiver_0.attrs, listOf(childFunction$lambda_1(children)));
  }
  function isString($receiver) {
    return typeof $receiver === 'string';
  }
  function asStringOrNull($receiver) {
    if (isString($receiver))
      return $receiver;
    else
      return null;
  }
  function asElementOrNull($receiver) {
    if (asJsObject($receiver).hasOwnProperty('$$typeof'))
      return $receiver;
    else
      return null;
  }
  function forEachElement$lambda(closure$handler) {
    return function (it) {
      var element = asElementOrNull(it);
      if (element != null) {
        closure$handler(element);
      }return Unit;
    };
  }
  function forEachElement($receiver, children, handler) {
    $receiver.forEach(children, forEachElement$lambda(handler));
  }
  var cloneElement_0 = defineInlineFunction('kotlin-wrappers-kotlin-react-jsLegacy.react.cloneElement_yivzvl$', wrapFunction(function () {
    var cloneElement = _.$$importsForInline$$.react.cloneElement;
    return function (element, child, props) {
      var $receiver = {};
      props($receiver);
      return cloneElement.apply(null, [element, $receiver].concat(child));
    };
  }));
  function clone_0(element, props, child) {
    if (child === void 0)
      child = null;
    return cloneElement.apply(null, [element, props].concat(Children.toArray(child)));
  }
  function get_rClass($receiver) {
    return get_js($receiver);
  }
  function Coroutine$rLazy$lambda$lambda$lambda(closure$resolve_0, closure$loadComponent_0, closure$reject_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 5;
    this.local$closure$resolve = closure$resolve_0;
    this.local$closure$loadComponent = closure$loadComponent_0;
    this.local$closure$reject = closure$reject_0;
  }
  Coroutine$rLazy$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$rLazy$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$rLazy$lambda$lambda$lambda.prototype.constructor = Coroutine$rLazy$lambda$lambda$lambda;
  Coroutine$rLazy$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$closure$loadComponent(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.local$closure$resolve(this.result_0);
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              return this.local$closure$reject(e);
            } else {
              throw e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function rLazy$lambda$lambda$lambda(closure$resolve_0, closure$loadComponent_0, closure$reject_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$rLazy$lambda$lambda$lambda(closure$resolve_0, closure$loadComponent_0, closure$reject_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function rLazy$lambda$lambda(closure$loadComponent) {
    return function (resolve, reject) {
      launch(coroutines.GlobalScope, void 0, void 0, rLazy$lambda$lambda$lambda(resolve, closure$loadComponent, reject));
      return Unit;
    };
  }
  function rLazy$lambda(closure$loadComponent) {
    return function () {
      return new Promise(rLazy$lambda$lambda(closure$loadComponent));
    };
  }
  function rLazy(loadComponent) {
    return lazy(rLazy$lambda(loadComponent));
  }
  function fallback($receiver, handler) {
    $receiver.fallback = buildElements(handler);
  }
  function RStatics(klazz) {
    this.$delegate_j4nvxa$_0 = get_js(klazz);
  }
  Object.defineProperty(RStatics.prototype, 'contextType', {
    get: function () {
      return this.$delegate_j4nvxa$_0.contextType;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.contextType = tmp$;
    }
  });
  Object.defineProperty(RStatics.prototype, 'defaultProps', {
    get: function () {
      return this.$delegate_j4nvxa$_0.defaultProps;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.defaultProps = tmp$;
    }
  });
  Object.defineProperty(RStatics.prototype, 'displayName', {
    get: function () {
      return this.$delegate_j4nvxa$_0.displayName;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.displayName = tmp$;
    }
  });
  Object.defineProperty(RStatics.prototype, 'getDerivedStateFromError', {
    get: function () {
      return this.$delegate_j4nvxa$_0.getDerivedStateFromError;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.getDerivedStateFromError = tmp$;
    }
  });
  Object.defineProperty(RStatics.prototype, 'getDerivedStateFromProps', {
    get: function () {
      return this.$delegate_j4nvxa$_0.getDerivedStateFromProps;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.getDerivedStateFromProps = tmp$;
    }
  });
  RStatics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RStatics',
    interfaces: []
  };
  function get_children($receiver) {
    return $receiver.children;
  }
  function get_key($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_key($receiver, value) {
    $receiver.key = value;
  }
  function get_ref($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_ref($receiver, value) {
    $receiver.ref = value;
  }
  function ref($receiver, ref) {
    $receiver.ref = ref;
  }
  function BoxedState(state) {
    this.state = state;
  }
  BoxedState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxedState',
    interfaces: []
  };
  function get_componentStack($receiver) {
    return $receiver.componentStack;
  }
  function setState$lambda(closure$buildState) {
    return function (it) {
      var builder = closure$buildState;
      var $receiver = clone(it);
      builder($receiver);
      return $receiver;
    };
  }
  function setState($receiver, buildState) {
    $receiver.setState(setState$lambda(buildState));
  }
  var rFunction = defineInlineFunction('kotlin-wrappers-kotlin-react-jsLegacy.react.rFunction_9cac72$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var buildElements = _.react.buildElements_zepujl$;
    function rFunction$lambda$lambda(closure$render, closure$props) {
      return function ($receiver) {
        closure$render($receiver, closure$props);
        return Unit;
      };
    }
    function rFunction$lambda(closure$render) {
      return function (props) {
        return buildElements(rFunction$lambda$lambda(closure$render, props));
      };
    }
    return function (displayName, render) {
      var fn = rFunction$lambda(render);
      fn.displayName = displayName;
      return fn;
    };
  }));
  function RComponent() {
  }
  RComponent.prototype.init_bc6fkx$ = function ($receiver) {
  };
  RComponent.prototype.init_65a95q$ = function ($receiver, props) {
  };
  RComponent.prototype.children_ss14n$ = function ($receiver) {
    $receiver.children_yllgzm$(this.props);
  };
  RComponent.prototype.children_tgvp6h$ = function ($receiver, value) {
    $receiver.children_48djri$(this.props, value);
  };
  function RComponent$render$lambda(this$RComponent) {
    return function ($receiver) {
      this$RComponent.render_ss14n$($receiver);
      return Unit;
    };
  }
  RComponent.prototype.render = function () {
    return buildElements(RComponent$render$lambda(this));
  };
  RComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RComponent',
    interfaces: []
  };
  function RComponent_init($this) {
    $this = $this || Object.create(RComponent.prototype);
    Component.call($this);
    RComponent.call($this);
    var $receiver = {};
    $this.init_bc6fkx$($receiver);
    $this.state = $receiver;
    return $this;
  }
  function RComponent_init_0(props, $this) {
    $this = $this || Object.create(RComponent.prototype);
    Component.call($this, props);
    RComponent.call($this);
    var $receiver = {};
    $this.init_65a95q$($receiver, props);
    $this.state = $receiver;
    return $this;
  }
  function RPureComponent() {
  }
  RPureComponent.prototype.init_bc6fkx$ = function ($receiver) {
  };
  RPureComponent.prototype.init_65a95q$ = function ($receiver, props) {
  };
  RPureComponent.prototype.children_ss14n$ = function ($receiver) {
    $receiver.children_yllgzm$(this.props);
  };
  RPureComponent.prototype.children_tgvp6h$ = function ($receiver, value) {
    $receiver.children_48djri$(this.props, value);
  };
  function RPureComponent$render$lambda(this$RPureComponent) {
    return function ($receiver) {
      this$RPureComponent.render_ss14n$($receiver);
      return Unit;
    };
  }
  RPureComponent.prototype.render = function () {
    return buildElements(RPureComponent$render$lambda(this));
  };
  RPureComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RPureComponent',
    interfaces: []
  };
  function RPureComponent_init($this) {
    $this = $this || Object.create(RPureComponent.prototype);
    PureComponent.call($this);
    RPureComponent.call($this);
    var $receiver = {};
    $this.init_bc6fkx$($receiver);
    $this.state = $receiver;
    return $this;
  }
  function RPureComponent_init_0(props, $this) {
    $this = $this || Object.create(RPureComponent.prototype);
    PureComponent.call($this, props);
    RPureComponent.call($this);
    var $receiver = {};
    $this.init_65a95q$($receiver, props);
    $this.state = $receiver;
    return $this;
  }
  function useState(initValue) {
    var tmp$, tmp$_0;
    var jsTuple = rawUseState(initValue);
    var currentValue = (tmp$ = jsTuple[0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    var setState = typeof (tmp$_0 = jsTuple[1]) === 'function' ? tmp$_0 : throwCCE();
    return to(currentValue, setState);
  }
  function useState_0(valueInitializer) {
    var tmp$, tmp$_0;
    var jsTuple = rawUseState(valueInitializer);
    var currentValue = (tmp$ = jsTuple[0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    var setState = typeof (tmp$_0 = jsTuple[1]) === 'function' ? tmp$_0 : throwCCE();
    return to(currentValue, setState);
  }
  function getValue($receiver, thisRef, property) {
    return $receiver.first;
  }
  function setValue($receiver, thisRef, property, value) {
    $receiver.second(value);
  }
  function ReactStateDelegate(useState) {
    this.state_0 = useState.first;
    this.setState_0 = useState.second;
  }
  ReactStateDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.state_0;
  };
  ReactStateDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    this.setState_0(value);
  };
  ReactStateDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactStateDelegate',
    interfaces: [ReadWriteProperty]
  };
  function state(initValue) {
    return new ReactStateDelegate(useState(initValue));
  }
  function state_0(valueInitializer) {
    return new ReactStateDelegate(useState_0(valueInitializer));
  }
  function useReducer(reducer, initState, initialAction) {
    if (initialAction === void 0)
      initialAction = null;
    var tmp$, tmp$_0, tmp$_1;
    if (initialAction != null) {
      tmp$ = rawUseReducer(reducer, initState, initialAction);
    } else {
      tmp$ = rawUseReducer(reducer, initState);
    }
    var jsTuple = tmp$;
    var currentState = (tmp$_0 = jsTuple[0]) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    var dispatch = typeof (tmp$_1 = jsTuple[1]) === 'function' ? tmp$_1 : throwCCE();
    return to(currentState, dispatch);
  }
  function useReducer_0(reducer) {
    return useReducer(reducer, null);
  }
  function useEffectWithCleanup(dependencies, effect) {
    if (dependencies === void 0)
      dependencies = null;
    if (dependencies != null) {
      rawUseEffect(effect, copyToArray(dependencies));
    } else {
      rawUseEffect(effect);
    }
  }
  function useEffect$lambda(closure$effect) {
    return function () {
      closure$effect();
      return undefined;
    };
  }
  function useEffect(dependencies, effect) {
    if (dependencies === void 0)
      dependencies = null;
    var rawEffect = useEffect$lambda(effect);
    if (dependencies != null) {
      rawUseEffect(rawEffect, copyToArray(dependencies));
    } else {
      rawUseEffect(rawEffect);
    }
  }
  function useLayoutEffectWithCleanup(dependencies, effect) {
    if (dependencies === void 0)
      dependencies = null;
    if (dependencies != null) {
      rawUseLayoutEffect(effect, copyToArray(dependencies));
    } else {
      rawUseLayoutEffect(effect);
    }
  }
  function useLayoutEffect$lambda(closure$effect) {
    return function () {
      closure$effect();
      return undefined;
    };
  }
  function useLayoutEffect(dependencies, effect) {
    if (dependencies === void 0)
      dependencies = null;
    var rawEffect = useLayoutEffect$lambda(effect);
    if (dependencies != null) {
      rawUseLayoutEffect(rawEffect, copyToArray(dependencies));
    } else {
      rawUseLayoutEffect(rawEffect);
    }
  }
  var package$react = _.react || (_.react = {});
  package$react.invoke_adv8my$ = invoke;
  package$react.invoke_c9lj87$ = invoke_0;
  package$react.invoke_airnx2$ = invoke_1;
  package$react.allOf_jblbpx$ = allOf;
  package$react.ReactDsl = ReactDsl;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-jsLegacy'] = _;
  package$react.RBuilder = RBuilder;
  package$react.RBuilderMultiple = RBuilderMultiple;
  package$react.buildElements_zepujl$ = buildElements;
  package$react.RBuilderSingle = RBuilderSingle;
  package$react.buildElement_zepujl$ = buildElement;
  package$react.RElementBuilder = RElementBuilder;
  package$react.forwardRef_qtknwg$ = forwardRef;
  package$react.functionalComponent_1klik0$ = functionalComponent;
  package$react.child_9r8yuv$ = child;
  package$react.childFunction_s7qziv$ = childFunction;
  package$react.childFunction_vp99ke$ = childFunction_0;
  package$react.isString_84gpoi$ = isString;
  package$react.asStringOrNull_84gpoi$ = asStringOrNull;
  package$react.asElementOrNull_84gpoi$ = asElementOrNull;
  package$react.forEachElement_t3nwxq$ = forEachElement;
  $$importsForInline$$.react = $module$react;
  package$react.cloneElement_yivzvl$ = cloneElement_0;
  package$react.clone_139a74$ = clone_0;
  package$react.get_rClass_inwa2g$ = get_rClass;
  package$react.rLazy_6abds3$ = rLazy;
  package$react.fallback_i4zzdj$ = fallback;
  package$react.RStatics = RStatics;
  package$react.get_children_yllgzm$ = get_children;
  package$react.get_key_yllgzm$ = get_key;
  package$react.set_key_38rnt0$ = set_key;
  package$react.get_ref_yllgzm$ = get_ref;
  package$react.set_ref_jjyqia$ = set_ref;
  package$react.ref_dpkau5$ = ref;
  package$react.BoxedState = BoxedState;
  package$react.get_componentStack_latnvg$ = get_componentStack;
  package$react.setState_kpl3tw$ = setState;
  package$react.rFunction_9cac72$ = rFunction;
  package$react.RComponent_init_lqgejo$ = RComponent_init;
  package$react.RComponent_init_8bz2yq$ = RComponent_init_0;
  package$react.RComponent = RComponent;
  package$react.RPureComponent_init_lqgejo$ = RPureComponent_init;
  package$react.RPureComponent_init_8bz2yq$ = RPureComponent_init_0;
  package$react.RPureComponent = RPureComponent;
  package$react.useState_mh5how$ = useState;
  package$react.useState_klfg04$ = useState_0;
  package$react.getValue_wvxqkr$ = getValue;
  package$react.setValue_xof0q7$ = setValue;
  package$react.state_mh5how$ = state;
  package$react.state_klfg04$ = state_0;
  package$react.useReducer_kwhucx$ = useReducer;
  package$react.useReducer_15v062$ = useReducer_0;
  package$react.useEffectWithCleanup_y10uuc$ = useEffectWithCleanup;
  package$react.useEffect_wrbdb4$ = useEffect;
  package$react.useLayoutEffectWithCleanup_y10uuc$ = useLayoutEffectWithCleanup;
  package$react.useLayoutEffect_wrbdb4$ = useLayoutEffect;
  Kotlin.defineModule('kotlin-wrappers-kotlin-react-jsLegacy', _);
  return _;
}(module.exports, require('kotlin'), require('react'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('kotlinx-coroutines-core')));
