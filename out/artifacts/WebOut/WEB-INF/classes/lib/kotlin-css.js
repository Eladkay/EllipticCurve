(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-css'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-css'.");
    }root['kotlin-css'] = factory(typeof this['kotlin-css'] === 'undefined' ? {} : this['kotlin-css'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var equals = Kotlin.equals;
  var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_nig4hr$;
  var coerceIn_0 = Kotlin.kotlin.ranges.coerceIn_e4yvb3$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var RegexOption = Kotlin.kotlin.text.RegexOption;
  var Regex_init_0 = Kotlin.kotlin.text.Regex_init_sb3q2$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var substringBefore = Kotlin.kotlin.text.substringBefore_j4ogox$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var math = Kotlin.kotlin.math;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var substringBefore_0 = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var numberToInt = Kotlin.numberToInt;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_sgbm27$;
  var toInt_0 = Kotlin.kotlin.text.toInt_6ic1pp$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var Math_0 = Math;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var toString = Kotlin.toString;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  CSSBuilder.prototype = Object.create(StyledElement.prototype);
  CSSBuilder.prototype.constructor = CSSBuilder;
  LinearDimension.prototype = Object.create(CssValue.prototype);
  LinearDimension.prototype.constructor = LinearDimension;
  Align.prototype = Object.create(Enum.prototype);
  Align.prototype.constructor = Align;
  JustifyContent.prototype = Object.create(Enum.prototype);
  JustifyContent.prototype.constructor = JustifyContent;
  BackgroundRepeat.prototype = Object.create(Enum.prototype);
  BackgroundRepeat.prototype.constructor = BackgroundRepeat;
  BackgroundAttachment.prototype = Object.create(Enum.prototype);
  BackgroundAttachment.prototype.constructor = BackgroundAttachment;
  BackgroundClip.prototype = Object.create(Enum.prototype);
  BackgroundClip.prototype.constructor = BackgroundClip;
  BackgroundOrigin.prototype = Object.create(Enum.prototype);
  BackgroundOrigin.prototype.constructor = BackgroundOrigin;
  BorderCollapse.prototype = Object.create(Enum.prototype);
  BorderCollapse.prototype.constructor = BorderCollapse;
  BorderStyle.prototype = Object.create(Enum.prototype);
  BorderStyle.prototype.constructor = BorderStyle;
  BoxSizing.prototype = Object.create(Enum.prototype);
  BoxSizing.prototype.constructor = BoxSizing;
  Clear.prototype = Object.create(Enum.prototype);
  Clear.prototype.constructor = Clear;
  Color.prototype = Object.create(CssValue.prototype);
  Color.prototype.constructor = Color;
  ColumnGap.prototype = Object.create(CssValue.prototype);
  ColumnGap.prototype.constructor = ColumnGap;
  Contain.prototype = Object.create(Enum.prototype);
  Contain.prototype.constructor = Contain;
  Cursor.prototype = Object.create(Enum.prototype);
  Cursor.prototype.constructor = Cursor;
  QuotedString.prototype = Object.create(CssValue.prototype);
  QuotedString.prototype.constructor = QuotedString;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  Display.prototype = Object.create(Enum.prototype);
  Display.prototype.constructor = Display;
  FlexBasis.prototype = Object.create(CssValue.prototype);
  FlexBasis.prototype.constructor = FlexBasis;
  FlexWrap.prototype = Object.create(Enum.prototype);
  FlexWrap.prototype.constructor = FlexWrap;
  Float.prototype = Object.create(Enum.prototype);
  Float.prototype.constructor = Float;
  FontWeight.prototype = Object.create(CssValue.prototype);
  FontWeight.prototype.constructor = FontWeight;
  FontStyle.prototype = Object.create(CssValue.prototype);
  FontStyle.prototype.constructor = FontStyle;
  FlexDirection.prototype = Object.create(Enum.prototype);
  FlexDirection.prototype.constructor = FlexDirection;
  Gap.prototype = Object.create(CssValue.prototype);
  Gap.prototype.constructor = Gap;
  GridAutoColumns.prototype = Object.create(CssValue.prototype);
  GridAutoColumns.prototype.constructor = GridAutoColumns;
  GridAutoFlow.prototype = Object.create(CssValue.prototype);
  GridAutoFlow.prototype.constructor = GridAutoFlow;
  GridAutoRows.prototype = Object.create(CssValue.prototype);
  GridAutoRows.prototype.constructor = GridAutoRows;
  GridColumn.prototype = Object.create(CssValue.prototype);
  GridColumn.prototype.constructor = GridColumn;
  GridColumnEnd.prototype = Object.create(CssValue.prototype);
  GridColumnEnd.prototype.constructor = GridColumnEnd;
  GridColumnGap.prototype = Object.create(CssValue.prototype);
  GridColumnGap.prototype.constructor = GridColumnGap;
  GridColumnStart.prototype = Object.create(CssValue.prototype);
  GridColumnStart.prototype.constructor = GridColumnStart;
  GridGap.prototype = Object.create(CssValue.prototype);
  GridGap.prototype.constructor = GridGap;
  GridRow.prototype = Object.create(CssValue.prototype);
  GridRow.prototype.constructor = GridRow;
  GridRowEnd.prototype = Object.create(CssValue.prototype);
  GridRowEnd.prototype.constructor = GridRowEnd;
  GridRowGap.prototype = Object.create(CssValue.prototype);
  GridRowGap.prototype.constructor = GridRowGap;
  GridRowStart.prototype = Object.create(CssValue.prototype);
  GridRowStart.prototype.constructor = GridRowStart;
  GridTemplate.prototype = Object.create(CssValue.prototype);
  GridTemplate.prototype.constructor = GridTemplate;
  GridTemplateAreas.prototype = Object.create(CssValue.prototype);
  GridTemplateAreas.prototype.constructor = GridTemplateAreas;
  GridTemplateColumns.prototype = Object.create(CssValue.prototype);
  GridTemplateColumns.prototype.constructor = GridTemplateColumns;
  GridTemplateRows.prototype = Object.create(CssValue.prototype);
  GridTemplateRows.prototype.constructor = GridTemplateRows;
  Grow.prototype = Object.create(Enum.prototype);
  Grow.prototype.constructor = Grow;
  Hyphens.prototype = Object.create(Enum.prototype);
  Hyphens.prototype.constructor = Hyphens;
  ListStyleType.prototype = Object.create(Enum.prototype);
  ListStyleType.prototype.constructor = ListStyleType;
  ObjectFit.prototype = Object.create(Enum.prototype);
  ObjectFit.prototype.constructor = ObjectFit;
  Outline.prototype = Object.create(Enum.prototype);
  Outline.prototype.constructor = Outline;
  Overflow.prototype = Object.create(Enum.prototype);
  Overflow.prototype.constructor = Overflow;
  OverflowWrap.prototype = Object.create(Enum.prototype);
  OverflowWrap.prototype.constructor = OverflowWrap;
  OverscrollBehavior.prototype = Object.create(Enum.prototype);
  OverscrollBehavior.prototype.constructor = OverscrollBehavior;
  PointerEvents.prototype = Object.create(Enum.prototype);
  PointerEvents.prototype.constructor = PointerEvents;
  Position.prototype = Object.create(Enum.prototype);
  Position.prototype.constructor = Position;
  RowGap.prototype = Object.create(CssValue.prototype);
  RowGap.prototype.constructor = RowGap;
  ScrollBehavior.prototype = Object.create(Enum.prototype);
  ScrollBehavior.prototype.constructor = ScrollBehavior;
  TextAlign.prototype = Object.create(Enum.prototype);
  TextAlign.prototype.constructor = TextAlign;
  TableLayout.prototype = Object.create(Enum.prototype);
  TableLayout.prototype.constructor = TableLayout;
  TextOverflow.prototype = Object.create(Enum.prototype);
  TextOverflow.prototype.constructor = TextOverflow;
  TextTransform.prototype = Object.create(Enum.prototype);
  TextTransform.prototype.constructor = TextTransform;
  UserSelect.prototype = Object.create(Enum.prototype);
  UserSelect.prototype.constructor = UserSelect;
  VerticalAlign.prototype = Object.create(CssValue.prototype);
  VerticalAlign.prototype.constructor = VerticalAlign;
  Visibility.prototype = Object.create(Enum.prototype);
  Visibility.prototype.constructor = Visibility;
  WhiteSpace.prototype = Object.create(Enum.prototype);
  WhiteSpace.prototype.constructor = WhiteSpace;
  WordBreak.prototype = Object.create(Enum.prototype);
  WordBreak.prototype.constructor = WordBreak;
  WordWrap.prototype = Object.create(Enum.prototype);
  WordWrap.prototype.constructor = WordWrap;
  Resize.prototype = Object.create(Enum.prototype);
  Resize.prototype.constructor = Resize;
  Image.prototype = Object.create(CssValue.prototype);
  Image.prototype.constructor = Image;
  IterationCount.prototype = Object.create(CssValue.prototype);
  IterationCount.prototype.constructor = IterationCount;
  AnimationDirection.prototype = Object.create(Enum.prototype);
  AnimationDirection.prototype.constructor = AnimationDirection;
  FillMode.prototype = Object.create(Enum.prototype);
  FillMode.prototype.constructor = FillMode;
  PlayState.prototype = Object.create(Enum.prototype);
  PlayState.prototype.constructor = PlayState;
  Animations.prototype = Object.create(StyleList.prototype);
  Animations.prototype.constructor = Animations;
  BoxShadows.prototype = Object.create(StyleList.prototype);
  BoxShadows.prototype.constructor = BoxShadows;
  LineHeight.prototype = Object.create(CssValue.prototype);
  LineHeight.prototype.constructor = LineHeight;
  TextDecorationLine.prototype = Object.create(Enum.prototype);
  TextDecorationLine.prototype.constructor = TextDecorationLine;
  TextDecorationStyle.prototype = Object.create(Enum.prototype);
  TextDecorationStyle.prototype.constructor = TextDecorationStyle;
  Time.prototype = Object.create(CssValue.prototype);
  Time.prototype.constructor = Time;
  Timing.prototype = Object.create(CssValue.prototype);
  Timing.prototype.constructor = Timing;
  TransitionDirection.prototype = Object.create(Enum.prototype);
  TransitionDirection.prototype.constructor = TransitionDirection;
  Angle.prototype = Object.create(CssValue.prototype);
  Angle.prototype.constructor = Angle;
  Transforms.prototype = Object.create(StyleList.prototype);
  Transforms.prototype.constructor = Transforms;
  Transitions.prototype = Object.create(StyleList.prototype);
  Transitions.prototype.constructor = Transitions;
  function ruleSet(set) {
    return set;
  }
  function Rule(selector, passStaticClassesToParent, block) {
    if (passStaticClassesToParent === void 0)
      passStaticClassesToParent = false;
    this.selector = selector;
    this.passStaticClassesToParent = passStaticClassesToParent;
    this.block = block;
  }
  Rule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rule',
    interfaces: []
  };
  Rule.prototype.component1 = function () {
    return this.selector;
  };
  Rule.prototype.component2 = function () {
    return this.passStaticClassesToParent;
  };
  Rule.prototype.component3 = function () {
    return this.block;
  };
  Rule.prototype.copy_odffru$ = function (selector, passStaticClassesToParent, block) {
    return new Rule(selector === void 0 ? this.selector : selector, passStaticClassesToParent === void 0 ? this.passStaticClassesToParent : passStaticClassesToParent, block === void 0 ? this.block : block);
  };
  Rule.prototype.toString = function () {
    return 'Rule(selector=' + Kotlin.toString(this.selector) + (', passStaticClassesToParent=' + Kotlin.toString(this.passStaticClassesToParent)) + (', block=' + Kotlin.toString(this.block)) + ')';
  };
  Rule.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.selector) | 0;
    result = result * 31 + Kotlin.hashCode(this.passStaticClassesToParent) | 0;
    result = result * 31 + Kotlin.hashCode(this.block) | 0;
    return result;
  };
  Rule.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.selector, other.selector) && Kotlin.equals(this.passStaticClassesToParent, other.passStaticClassesToParent) && Kotlin.equals(this.block, other.block)))));
  };
  function RuleContainer() {
  }
  RuleContainer.prototype.buildRules_s47sd7$ = function ($receiver, indent) {
    var resolvedRules = LinkedHashMap_init();
    var tmp$;
    tmp$ = this.rules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var selector = element.component1()
      , passStaticClassesToParent = element.component2()
      , block = element.component3();
      if (!resolvedRules.containsKey_11rb$(selector)) {
        var value = new CSSBuilder(indent + '  ', false, passStaticClassesToParent ? this : null);
        resolvedRules.put_xwzc9p$(selector, value);
      }var rule = ensureNotNull(resolvedRules.get_11rb$(selector));
      block(rule);
    }
    var tmp$_0;
    tmp$_0 = resolvedRules.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      $receiver.append_pdl1vj$(element_0.key + ' {' + '\n');
      $receiver.append_s8jyv4$(element_0.value);
      $receiver.append_pdl1vj$('}\n');
    }
    var tmp$_1;
    tmp$_1 = this.multiRules.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      var selector_0 = element_1.component1()
      , passStaticClassesToParent_0 = element_1.component2()
      , block_0 = element_1.component3();
      var $receiver_0 = new CSSBuilder(indent + '  ', false, passStaticClassesToParent_0 ? this : null);
      block_0($receiver_0);
      var blockBuilder = $receiver_0;
      $receiver.append_pdl1vj$(selector_0 + ' {' + '\n');
      $receiver.append_s8jyv4$(blockBuilder);
      $receiver.append_pdl1vj$('}\n');
    }
  };
  RuleContainer.prototype.rule_xk38i9$ = function (selector, block) {
    return this.rule_4mtxvz$(selector, false, void 0, block);
  };
  RuleContainer.prototype.rule_4mtxvz$$default = function (selector, passStaticClassesToParent, repeatable, block) {
    var $receiver = new Rule(selector, passStaticClassesToParent, block);
    (repeatable ? this.multiRules : this.rules).add_11rb$($receiver);
    return $receiver;
  };
  RuleContainer.prototype.rule_4mtxvz$ = function (selector, passStaticClassesToParent, repeatable, block, callback$default) {
    if (repeatable === void 0)
      repeatable = false;
    return callback$default ? callback$default(selector, passStaticClassesToParent, repeatable, block) : this.rule_4mtxvz$$default(selector, passStaticClassesToParent, repeatable, block);
  };
  RuleContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RuleContainer',
    interfaces: []
  };
  function CSSBuilder(indent, allowClasses, parent) {
    if (indent === void 0)
      indent = '';
    if (allowClasses === void 0)
      allowClasses = true;
    if (parent === void 0)
      parent = null;
    StyledElement.call(this);
    this.indent = indent;
    this.allowClasses = allowClasses;
    this.parent = parent;
    this.classes = ArrayList_init();
    this.styleName = ArrayList_init();
    this.rules_tsqyll$_0 = ArrayList_init();
    this.multiRules_jdwv7c$_0 = ArrayList_init();
  }
  CSSBuilder.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    var tmp$;
    tmp$ = this.declarations.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.append_pdl1vj$(hyphenize(element.key) + ': ' + element.value.toString() + ';' + '\n');
    }
    this.buildRules_s47sd7$($receiver, this.indent);
    return $receiver.toString();
  };
  Object.defineProperty(CSSBuilder.prototype, 'rules', {
    configurable: true,
    get: function () {
      return this.rules_tsqyll$_0;
    }
  });
  Object.defineProperty(CSSBuilder.prototype, 'multiRules', {
    configurable: true,
    get: function () {
      return this.multiRules_jdwv7c$_0;
    }
  });
  CSSBuilder.prototype.invoke_32jdrg$ = function ($receiver, block) {
    return this.rule_4mtxvz$($receiver, false, void 0, block);
  };
  CSSBuilder.prototype.invoke_30ubnp$ = function ($receiver, block) {
    return this.invoke_32jdrg$($receiver.tagName, block);
  };
  CSSBuilder.prototype.active_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:active', block);
  };
  CSSBuilder.prototype.checked_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:checked', block);
  };
  CSSBuilder.prototype.default_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:default', block);
  };
  CSSBuilder.prototype.disabled_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:disabled', block);
  };
  CSSBuilder.prototype.empty_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:empty', block);
  };
  CSSBuilder.prototype.enabled_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:enabled', block);
  };
  CSSBuilder.prototype.firstChild_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:first-child', block);
  };
  CSSBuilder.prototype.firstOfType_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:first-of-type', block);
  };
  CSSBuilder.prototype.focus_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:focus', block);
  };
  CSSBuilder.prototype.focusWithin_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:focus-within', block);
  };
  CSSBuilder.prototype.hover_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:hover', block);
  };
  CSSBuilder.prototype.indeterminate_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:indeterminate', block);
  };
  CSSBuilder.prototype.inRange_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:in-range', block);
  };
  CSSBuilder.prototype.invalid_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:invalid', block);
  };
  CSSBuilder.prototype.lastChild_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:last-child', block);
  };
  CSSBuilder.prototype.lastOfType_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:last-of-type', block);
  };
  CSSBuilder.prototype.link_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:link', block);
  };
  CSSBuilder.prototype.not_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:not(' + selector + ')', block);
  };
  CSSBuilder.prototype.nthChild_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:nth-child(' + selector + ')', block);
  };
  CSSBuilder.prototype.nthLastChild_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:nth-last-child(' + selector + ')', block);
  };
  CSSBuilder.prototype.nthLastOfType_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:nth-last-of-type(' + selector + ')', block);
  };
  CSSBuilder.prototype.nthOfType_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:nth-of-type(' + selector + ')', block);
  };
  CSSBuilder.prototype.onlyChild_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:only-child', block);
  };
  CSSBuilder.prototype.onlyOfType_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:only-of-type', block);
  };
  CSSBuilder.prototype.optional_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:optional', block);
  };
  CSSBuilder.prototype.outOfRange_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:out-of-range', block);
  };
  CSSBuilder.prototype.readOnly_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:read-only', block);
  };
  CSSBuilder.prototype.readWrite_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:read-write', block);
  };
  CSSBuilder.prototype.required_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:required', block);
  };
  CSSBuilder.prototype.valid_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:valid', block);
  };
  CSSBuilder.prototype.visited_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:visited', block);
  };
  CSSBuilder.prototype.children_fcku8i$ = function (selector, block) {
    if (selector === void 0)
      selector = null;
    return this.invoke_32jdrg$('& > ' + (selector != null ? selector : '*'), block);
  };
  CSSBuilder.prototype.descendants_fcku8i$ = function (selector, block) {
    if (selector === void 0)
      selector = null;
    return this.invoke_32jdrg$('& ' + (selector != null ? selector : '*'), block);
  };
  CSSBuilder.prototype.ancestorHover_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$(selector + ':hover &', block);
  };
  function CSSBuilder$after$lambda(closure$block) {
    return function ($receiver) {
      set_content($receiver, get_quoted(''));
      closure$block($receiver);
      return Unit;
    };
  }
  CSSBuilder.prototype.after_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&::after', CSSBuilder$after$lambda(block));
  };
  function CSSBuilder$before$lambda(closure$block) {
    return function ($receiver) {
      set_content($receiver, get_quoted(''));
      closure$block($receiver);
      return Unit;
    };
  }
  CSSBuilder.prototype.before_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&::before', CSSBuilder$before$lambda(block));
  };
  CSSBuilder.prototype.placeholder_sa4rfh$ = function (block) {
    this.invoke_32jdrg$('&::placeholder', block);
    this.invoke_32jdrg$('&::-webkit-input-placeholder', block);
    this.invoke_32jdrg$('&::-moz-placeholder', block);
    this.invoke_32jdrg$('&::-ms-input-placeholder', block);
    this.invoke_32jdrg$('&:-moz-placeholder', block);
  };
  CSSBuilder.prototype.child_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('> ' + selector, block);
  };
  CSSBuilder.prototype.sibling_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('~ ' + selector, block);
  };
  CSSBuilder.prototype.adjacentSibling_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('+ ' + selector, block);
  };
  CSSBuilder.prototype.universal_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('*', block);
  };
  CSSBuilder.prototype.compareTo_er05um$ = function (rule) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    this.child_xk38i9$(rule.selector, rule.block);
    return 0;
  };
  CSSBuilder.prototype.not_v2gpjl$ = function ($receiver) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    var $receiver_0 = $receiver.selector;
    var regex = Regex_init('^(&?)(.*)$');
    var replacement = '$1:not($2)';
    this.invoke_32jdrg$(regex.replace_x2uqeu$($receiver_0, replacement), $receiver.block);
  };
  CSSBuilder.prototype.unaryPlus_v2gpjl$ = function ($receiver) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    this.invoke_32jdrg$('&.' + $receiver.selector, $receiver.block);
  };
  CSSBuilder.prototype.specific_api79v$ = function (specificity, block) {
    if (specificity === void 0)
      specificity = 2;
    return this.rule_4mtxvz$(repeat('&', specificity), true, void 0, block);
  };
  CSSBuilder.prototype.prefix_xk38i9$ = function (selector, block) {
    this.invoke_32jdrg$(selector + ' &', block);
  };
  CSSBuilder.prototype.media_xk38i9$ = function (query, block) {
    return this.invoke_32jdrg$('@media ' + query, block);
  };
  CSSBuilder.prototype.supports_xk38i9$ = function (query, block) {
    return this.invoke_32jdrg$('@supports ' + query, block);
  };
  CSSBuilder.prototype.fontFace_sa4rfh$ = function (block) {
    return this.rule_4mtxvz$('@font-face', false, true, block);
  };
  function CSSBuilder$retina$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  CSSBuilder.prototype.retina_sa4rfh$ = function (block) {
    this.media_xk38i9$('(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)', CSSBuilder$retina$lambda(block));
  };
  function CSSBuilder$root$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  CSSBuilder.prototype.root_sa4rfh$ = function (block) {
    this.invoke_32jdrg$(':root', CSSBuilder$root$lambda(block));
  };
  CSSBuilder.prototype.setCustomProperty_lwowle$ = function (name, value) {
    this.put_puj7f4$('--' + name, value.value);
  };
  CSSBuilder.prototype.min_5utlym$ = function (v1, v2) {
    return new LinearDimension('min(' + v1 + ', ' + v2 + '})');
  };
  CSSBuilder.prototype.max_5utlym$ = function (v1, v2) {
    return new LinearDimension('max(' + v1 + ', ' + v2 + ')');
  };
  CSSBuilder.prototype.clamp_me7l17$ = function (min, max, preferred) {
    return new LinearDimension('clamp(' + min + ', ' + max + ', ' + preferred + ')');
  };
  CSSBuilder.prototype.unaryPlus_ocqyl0$ = function ($receiver) {
    $receiver(this);
  };
  CSSBuilder.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.addClass_0($receiver);
  };
  CSSBuilder.prototype.unaryPlus_a3w2bl$ = function ($receiver) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      this.addClass_0(element);
    }
  };
  CSSBuilder.prototype.unaryPlus_sdeqdk$ = function ($receiver) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.addClass_0(element);
    }
  };
  CSSBuilder.prototype.addClass_0 = function (className) {
    var tmp$, tmp$_0;
    if (this.allowClasses) {
      this.classes.add_11rb$(className);
    } else {
      (tmp$_0 = Kotlin.isType(tmp$ = this.parent, CSSBuilder) ? tmp$ : null) != null ? (tmp$_0.addClass_0(className), Unit) : null;
    }
  };
  CSSBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CSSBuilder',
    interfaces: [RuleContainer, StyledElement]
  };
  function toCustomProperty($receiver) {
    return 'var(--' + $receiver + ')';
  }
  var CAPITAL_LETTER;
  function hyphenize($receiver) {
    var regex = CAPITAL_LETTER;
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = regex.find_905azu$($receiver);
      if (match == null) {
        replace_20wsma$result = $receiver.toString();
        break replace_20wsma$break;
      }var lastStart = 0;
      var length = $receiver.length;
      var sb = StringBuilder_init_0(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$($receiver, lastStart, foundMatch.range.start);
        sb.append_gw00v9$('-' + foundMatch.value.toLowerCase());
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$($receiver, lastStart, length);
      }replace_20wsma$result = sb.toString();
    }
     while (false);
    return replace_20wsma$result;
  }
  function times($receiver, n) {
    return repeat($receiver, n);
  }
  var ZERO;
  function LinearDimension(value) {
    LinearDimension$Companion_getInstance();
    CssValue.call(this, value);
    this.value_nj4rtk$_0 = value;
  }
  Object.defineProperty(LinearDimension.prototype, 'value', {
    get: function () {
      return this.value_nj4rtk$_0;
    }
  });
  function LinearDimension$Companion() {
    LinearDimension$Companion_instance = this;
    this.none = new LinearDimension('none');
    this.auto = new LinearDimension('auto');
    this.initial = new LinearDimension('initial');
    this.inherit = new LinearDimension('inherit');
    this.available = new LinearDimension('available');
    this.fillAvailable = new LinearDimension('fill-available');
    this.borderBox = new LinearDimension('border-box');
    this.contentBox = new LinearDimension('content-box');
    this.maxContent = new LinearDimension('max-content');
    this.minContent = new LinearDimension('min-content');
    this.fitContent = new LinearDimension('fit-content');
  }
  LinearDimension$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LinearDimension$Companion_instance = null;
  function LinearDimension$Companion_getInstance() {
    if (LinearDimension$Companion_instance === null) {
      new LinearDimension$Companion();
    }return LinearDimension$Companion_instance;
  }
  Object.defineProperty(LinearDimension.prototype, 'valueCalcSafe_0', {
    configurable: true,
    get: function () {
      return equals(this.value, ZERO) ? '0px' : this.value;
    }
  });
  LinearDimension.prototype.unaryMinus = function () {
    var tmp$;
    if (startsWith(this.value, 45)) {
      tmp$ = this.value.substring(1);
    } else if (startsWith_0(this.value, 'calc'))
      tmp$ = 'calc(0px - ' + this.value + ')';
    else if (equals(this.value, ZERO))
      tmp$ = this.value;
    else
      tmp$ = '-' + this.value;
    return new LinearDimension(tmp$);
  };
  LinearDimension.prototype.plus_tco10h$ = function (other) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' + ' + other.valueCalcSafe_0 + ')');
  };
  LinearDimension.prototype.minus_tco10h$ = function (other) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' - ' + other.valueCalcSafe_0 + ')');
  };
  LinearDimension.prototype.times_3p81yu$ = function (times) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' * ' + times.toString() + ')');
  };
  LinearDimension.prototype.div_3p81yu$ = function (times) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' / ' + times.toString() + ')');
  };
  LinearDimension.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearDimension',
    interfaces: [CssValue]
  };
  function value(number, unit) {
    return equals(number, 0) ? ZERO : number.toString() + unit;
  }
  function get_cm($receiver) {
    return new LinearDimension(value($receiver, 'cm'));
  }
  function get_em($receiver) {
    return new LinearDimension(value($receiver, 'em'));
  }
  function get_ex($receiver) {
    return new LinearDimension(value($receiver, 'ex'));
  }
  function get_fr($receiver) {
    return new LinearDimension(value($receiver, 'fr'));
  }
  function get_mm($receiver) {
    return new LinearDimension(value($receiver, 'mm'));
  }
  function get_pc($receiver) {
    return new LinearDimension(value($receiver, 'pc'));
  }
  function get_pct($receiver) {
    return new LinearDimension(value($receiver, '%'));
  }
  function get_pt($receiver) {
    return new LinearDimension(value($receiver, 'pt'));
  }
  function get_px($receiver) {
    return new LinearDimension(value($receiver, 'px'));
  }
  function get_rem($receiver) {
    return new LinearDimension(value($receiver, 'rem'));
  }
  function get_vmin($receiver) {
    return new LinearDimension(value($receiver, 'vmin'));
  }
  function get_vmax($receiver) {
    return new LinearDimension(value($receiver, 'vmax'));
  }
  function get_vh($receiver) {
    return new LinearDimension(value($receiver, 'vh'));
  }
  function get_vw($receiver) {
    return new LinearDimension(value($receiver, 'vw'));
  }
  function get_in($receiver) {
    return new LinearDimension(value($receiver, 'in'));
  }
  function CssValue(value) {
    this.value_tqttmh$_0 = value;
  }
  Object.defineProperty(CssValue.prototype, 'value', {
    get: function () {
      return this.value_tqttmh$_0;
    }
  });
  CssValue.prototype.toString = function () {
    return this.value;
  };
  CssValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssValue',
    interfaces: []
  };
  function Align(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Align_initFields() {
    Align_initFields = function () {
    };
    Align$initial_instance = new Align('initial', 0);
    Align$inherit_instance = new Align('inherit', 1);
    Align$unset_instance = new Align('unset', 2);
    Align$auto_instance = new Align('auto', 3);
    Align$stretch_instance = new Align('stretch', 4);
    Align$center_instance = new Align('center', 5);
    Align$flexStart_instance = new Align('flexStart', 6);
    Align$flexEnd_instance = new Align('flexEnd', 7);
    Align$baseline_instance = new Align('baseline', 8);
  }
  var Align$initial_instance;
  function Align$initial_getInstance() {
    Align_initFields();
    return Align$initial_instance;
  }
  var Align$inherit_instance;
  function Align$inherit_getInstance() {
    Align_initFields();
    return Align$inherit_instance;
  }
  var Align$unset_instance;
  function Align$unset_getInstance() {
    Align_initFields();
    return Align$unset_instance;
  }
  var Align$auto_instance;
  function Align$auto_getInstance() {
    Align_initFields();
    return Align$auto_instance;
  }
  var Align$stretch_instance;
  function Align$stretch_getInstance() {
    Align_initFields();
    return Align$stretch_instance;
  }
  var Align$center_instance;
  function Align$center_getInstance() {
    Align_initFields();
    return Align$center_instance;
  }
  var Align$flexStart_instance;
  function Align$flexStart_getInstance() {
    Align_initFields();
    return Align$flexStart_instance;
  }
  var Align$flexEnd_instance;
  function Align$flexEnd_getInstance() {
    Align_initFields();
    return Align$flexEnd_instance;
  }
  var Align$baseline_instance;
  function Align$baseline_getInstance() {
    Align_initFields();
    return Align$baseline_instance;
  }
  Align.prototype.toString = function () {
    return hyphenize(this.name);
  };
  Align.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Align',
    interfaces: [Enum]
  };
  function Align$values() {
    return [Align$initial_getInstance(), Align$inherit_getInstance(), Align$unset_getInstance(), Align$auto_getInstance(), Align$stretch_getInstance(), Align$center_getInstance(), Align$flexStart_getInstance(), Align$flexEnd_getInstance(), Align$baseline_getInstance()];
  }
  Align.values = Align$values;
  function Align$valueOf(name) {
    switch (name) {
      case 'initial':
        return Align$initial_getInstance();
      case 'inherit':
        return Align$inherit_getInstance();
      case 'unset':
        return Align$unset_getInstance();
      case 'auto':
        return Align$auto_getInstance();
      case 'stretch':
        return Align$stretch_getInstance();
      case 'center':
        return Align$center_getInstance();
      case 'flexStart':
        return Align$flexStart_getInstance();
      case 'flexEnd':
        return Align$flexEnd_getInstance();
      case 'baseline':
        return Align$baseline_getInstance();
      default:throwISE('No enum constant kotlinx.css.Align.' + name);
    }
  }
  Align.valueOf_61zpoe$ = Align$valueOf;
  function JustifyContent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function JustifyContent_initFields() {
    JustifyContent_initFields = function () {
    };
    JustifyContent$initial_instance = new JustifyContent('initial', 0);
    JustifyContent$inherit_instance = new JustifyContent('inherit', 1);
    JustifyContent$unset_instance = new JustifyContent('unset', 2);
    JustifyContent$center_instance = new JustifyContent('center', 3);
    JustifyContent$start_instance = new JustifyContent('start', 4);
    JustifyContent$end_instance = new JustifyContent('end', 5);
    JustifyContent$flexStart_instance = new JustifyContent('flexStart', 6);
    JustifyContent$flexEnd_instance = new JustifyContent('flexEnd', 7);
    JustifyContent$left_instance = new JustifyContent('left', 8);
    JustifyContent$right_instance = new JustifyContent('right', 9);
    JustifyContent$baseline_instance = new JustifyContent('baseline', 10);
    JustifyContent$firstBaseline_instance = new JustifyContent('firstBaseline', 11);
    JustifyContent$lastBaseline_instance = new JustifyContent('lastBaseline', 12);
    JustifyContent$spaceBetween_instance = new JustifyContent('spaceBetween', 13);
    JustifyContent$spaceAround_instance = new JustifyContent('spaceAround', 14);
    JustifyContent$spaceEvenly_instance = new JustifyContent('spaceEvenly', 15);
    JustifyContent$stretch_instance = new JustifyContent('stretch', 16);
    JustifyContent$safeCenter_instance = new JustifyContent('safeCenter', 17);
    JustifyContent$unsafeCenter_instance = new JustifyContent('unsafeCenter', 18);
  }
  var JustifyContent$initial_instance;
  function JustifyContent$initial_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$initial_instance;
  }
  var JustifyContent$inherit_instance;
  function JustifyContent$inherit_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$inherit_instance;
  }
  var JustifyContent$unset_instance;
  function JustifyContent$unset_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$unset_instance;
  }
  var JustifyContent$center_instance;
  function JustifyContent$center_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$center_instance;
  }
  var JustifyContent$start_instance;
  function JustifyContent$start_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$start_instance;
  }
  var JustifyContent$end_instance;
  function JustifyContent$end_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$end_instance;
  }
  var JustifyContent$flexStart_instance;
  function JustifyContent$flexStart_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$flexStart_instance;
  }
  var JustifyContent$flexEnd_instance;
  function JustifyContent$flexEnd_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$flexEnd_instance;
  }
  var JustifyContent$left_instance;
  function JustifyContent$left_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$left_instance;
  }
  var JustifyContent$right_instance;
  function JustifyContent$right_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$right_instance;
  }
  var JustifyContent$baseline_instance;
  function JustifyContent$baseline_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$baseline_instance;
  }
  var JustifyContent$firstBaseline_instance;
  function JustifyContent$firstBaseline_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$firstBaseline_instance;
  }
  var JustifyContent$lastBaseline_instance;
  function JustifyContent$lastBaseline_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$lastBaseline_instance;
  }
  var JustifyContent$spaceBetween_instance;
  function JustifyContent$spaceBetween_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$spaceBetween_instance;
  }
  var JustifyContent$spaceAround_instance;
  function JustifyContent$spaceAround_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$spaceAround_instance;
  }
  var JustifyContent$spaceEvenly_instance;
  function JustifyContent$spaceEvenly_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$spaceEvenly_instance;
  }
  var JustifyContent$stretch_instance;
  function JustifyContent$stretch_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$stretch_instance;
  }
  var JustifyContent$safeCenter_instance;
  function JustifyContent$safeCenter_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$safeCenter_instance;
  }
  var JustifyContent$unsafeCenter_instance;
  function JustifyContent$unsafeCenter_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$unsafeCenter_instance;
  }
  JustifyContent.prototype.toString = function () {
    return hyphenize(this.name);
  };
  JustifyContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JustifyContent',
    interfaces: [Enum]
  };
  function JustifyContent$values() {
    return [JustifyContent$initial_getInstance(), JustifyContent$inherit_getInstance(), JustifyContent$unset_getInstance(), JustifyContent$center_getInstance(), JustifyContent$start_getInstance(), JustifyContent$end_getInstance(), JustifyContent$flexStart_getInstance(), JustifyContent$flexEnd_getInstance(), JustifyContent$left_getInstance(), JustifyContent$right_getInstance(), JustifyContent$baseline_getInstance(), JustifyContent$firstBaseline_getInstance(), JustifyContent$lastBaseline_getInstance(), JustifyContent$spaceBetween_getInstance(), JustifyContent$spaceAround_getInstance(), JustifyContent$spaceEvenly_getInstance(), JustifyContent$stretch_getInstance(), JustifyContent$safeCenter_getInstance(), JustifyContent$unsafeCenter_getInstance()];
  }
  JustifyContent.values = JustifyContent$values;
  function JustifyContent$valueOf(name) {
    switch (name) {
      case 'initial':
        return JustifyContent$initial_getInstance();
      case 'inherit':
        return JustifyContent$inherit_getInstance();
      case 'unset':
        return JustifyContent$unset_getInstance();
      case 'center':
        return JustifyContent$center_getInstance();
      case 'start':
        return JustifyContent$start_getInstance();
      case 'end':
        return JustifyContent$end_getInstance();
      case 'flexStart':
        return JustifyContent$flexStart_getInstance();
      case 'flexEnd':
        return JustifyContent$flexEnd_getInstance();
      case 'left':
        return JustifyContent$left_getInstance();
      case 'right':
        return JustifyContent$right_getInstance();
      case 'baseline':
        return JustifyContent$baseline_getInstance();
      case 'firstBaseline':
        return JustifyContent$firstBaseline_getInstance();
      case 'lastBaseline':
        return JustifyContent$lastBaseline_getInstance();
      case 'spaceBetween':
        return JustifyContent$spaceBetween_getInstance();
      case 'spaceAround':
        return JustifyContent$spaceAround_getInstance();
      case 'spaceEvenly':
        return JustifyContent$spaceEvenly_getInstance();
      case 'stretch':
        return JustifyContent$stretch_getInstance();
      case 'safeCenter':
        return JustifyContent$safeCenter_getInstance();
      case 'unsafeCenter':
        return JustifyContent$unsafeCenter_getInstance();
      default:throwISE('No enum constant kotlinx.css.JustifyContent.' + name);
    }
  }
  JustifyContent.valueOf_61zpoe$ = JustifyContent$valueOf;
  function BackgroundRepeat(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BackgroundRepeat_initFields() {
    BackgroundRepeat_initFields = function () {
    };
    BackgroundRepeat$initial_instance = new BackgroundRepeat('initial', 0);
    BackgroundRepeat$inherit_instance = new BackgroundRepeat('inherit', 1);
    BackgroundRepeat$unset_instance = new BackgroundRepeat('unset', 2);
    BackgroundRepeat$repeatX_instance = new BackgroundRepeat('repeatX', 3);
    BackgroundRepeat$repeatY_instance = new BackgroundRepeat('repeatY', 4);
    BackgroundRepeat$repeat_instance = new BackgroundRepeat('repeat', 5);
    BackgroundRepeat$noRepeat_instance = new BackgroundRepeat('noRepeat', 6);
  }
  var BackgroundRepeat$initial_instance;
  function BackgroundRepeat$initial_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$initial_instance;
  }
  var BackgroundRepeat$inherit_instance;
  function BackgroundRepeat$inherit_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$inherit_instance;
  }
  var BackgroundRepeat$unset_instance;
  function BackgroundRepeat$unset_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$unset_instance;
  }
  var BackgroundRepeat$repeatX_instance;
  function BackgroundRepeat$repeatX_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$repeatX_instance;
  }
  var BackgroundRepeat$repeatY_instance;
  function BackgroundRepeat$repeatY_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$repeatY_instance;
  }
  var BackgroundRepeat$repeat_instance;
  function BackgroundRepeat$repeat_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$repeat_instance;
  }
  var BackgroundRepeat$noRepeat_instance;
  function BackgroundRepeat$noRepeat_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$noRepeat_instance;
  }
  BackgroundRepeat.prototype.toString = function () {
    return hyphenize(this.name);
  };
  BackgroundRepeat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackgroundRepeat',
    interfaces: [Enum]
  };
  function BackgroundRepeat$values() {
    return [BackgroundRepeat$initial_getInstance(), BackgroundRepeat$inherit_getInstance(), BackgroundRepeat$unset_getInstance(), BackgroundRepeat$repeatX_getInstance(), BackgroundRepeat$repeatY_getInstance(), BackgroundRepeat$repeat_getInstance(), BackgroundRepeat$noRepeat_getInstance()];
  }
  BackgroundRepeat.values = BackgroundRepeat$values;
  function BackgroundRepeat$valueOf(name) {
    switch (name) {
      case 'initial':
        return BackgroundRepeat$initial_getInstance();
      case 'inherit':
        return BackgroundRepeat$inherit_getInstance();
      case 'unset':
        return BackgroundRepeat$unset_getInstance();
      case 'repeatX':
        return BackgroundRepeat$repeatX_getInstance();
      case 'repeatY':
        return BackgroundRepeat$repeatY_getInstance();
      case 'repeat':
        return BackgroundRepeat$repeat_getInstance();
      case 'noRepeat':
        return BackgroundRepeat$noRepeat_getInstance();
      default:throwISE('No enum constant kotlinx.css.BackgroundRepeat.' + name);
    }
  }
  BackgroundRepeat.valueOf_61zpoe$ = BackgroundRepeat$valueOf;
  function BackgroundAttachment(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BackgroundAttachment_initFields() {
    BackgroundAttachment_initFields = function () {
    };
    BackgroundAttachment$initial_instance = new BackgroundAttachment('initial', 0);
    BackgroundAttachment$inherit_instance = new BackgroundAttachment('inherit', 1);
    BackgroundAttachment$unset_instance = new BackgroundAttachment('unset', 2);
    BackgroundAttachment$scroll_instance = new BackgroundAttachment('scroll', 3);
    BackgroundAttachment$fixed_instance = new BackgroundAttachment('fixed', 4);
    BackgroundAttachment$local_instance = new BackgroundAttachment('local', 5);
  }
  var BackgroundAttachment$initial_instance;
  function BackgroundAttachment$initial_getInstance() {
    BackgroundAttachment_initFields();
    return BackgroundAttachment$initial_instance;
  }
  var BackgroundAttachment$inherit_instance;
  function BackgroundAttachment$inherit_getInstance() {
    BackgroundAttachment_initFields();
    return BackgroundAttachment$inherit_instance;
  }
  var BackgroundAttachment$unset_instance;
  function BackgroundAttachment$unset_getInstance() {
    BackgroundAttachment_initFields();
    return BackgroundAttachment$unset_instance;
  }
  var BackgroundAttachment$scroll_instance;
  function BackgroundAttachment$scroll_getInstance() {
    BackgroundAttachment_initFields();
    return BackgroundAttachment$scroll_instance;
  }
  var BackgroundAttachment$fixed_instance;
  function BackgroundAttachment$fixed_getInstance() {
    BackgroundAttachment_initFields();
    return BackgroundAttachment$fixed_instance;
  }
  var BackgroundAttachment$local_instance;
  function BackgroundAttachment$local_getInstance() {
    BackgroundAttachment_initFields();
    return BackgroundAttachment$local_instance;
  }
  BackgroundAttachment.prototype.toString = function () {
    return this.name;
  };
  BackgroundAttachment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackgroundAttachment',
    interfaces: [Enum]
  };
  function BackgroundAttachment$values() {
    return [BackgroundAttachment$initial_getInstance(), BackgroundAttachment$inherit_getInstance(), BackgroundAttachment$unset_getInstance(), BackgroundAttachment$scroll_getInstance(), BackgroundAttachment$fixed_getInstance(), BackgroundAttachment$local_getInstance()];
  }
  BackgroundAttachment.values = BackgroundAttachment$values;
  function BackgroundAttachment$valueOf(name) {
    switch (name) {
      case 'initial':
        return BackgroundAttachment$initial_getInstance();
      case 'inherit':
        return BackgroundAttachment$inherit_getInstance();
      case 'unset':
        return BackgroundAttachment$unset_getInstance();
      case 'scroll':
        return BackgroundAttachment$scroll_getInstance();
      case 'fixed':
        return BackgroundAttachment$fixed_getInstance();
      case 'local':
        return BackgroundAttachment$local_getInstance();
      default:throwISE('No enum constant kotlinx.css.BackgroundAttachment.' + name);
    }
  }
  BackgroundAttachment.valueOf_61zpoe$ = BackgroundAttachment$valueOf;
  function BackgroundClip(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BackgroundClip_initFields() {
    BackgroundClip_initFields = function () {
    };
    BackgroundClip$initial_instance = new BackgroundClip('initial', 0);
    BackgroundClip$inherit_instance = new BackgroundClip('inherit', 1);
    BackgroundClip$unset_instance = new BackgroundClip('unset', 2);
    BackgroundClip$borderBox_instance = new BackgroundClip('borderBox', 3);
    BackgroundClip$paddingBox_instance = new BackgroundClip('paddingBox', 4);
    BackgroundClip$contentBox_instance = new BackgroundClip('contentBox', 5);
    BackgroundClip$text_instance = new BackgroundClip('text', 6);
  }
  var BackgroundClip$initial_instance;
  function BackgroundClip$initial_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$initial_instance;
  }
  var BackgroundClip$inherit_instance;
  function BackgroundClip$inherit_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$inherit_instance;
  }
  var BackgroundClip$unset_instance;
  function BackgroundClip$unset_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$unset_instance;
  }
  var BackgroundClip$borderBox_instance;
  function BackgroundClip$borderBox_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$borderBox_instance;
  }
  var BackgroundClip$paddingBox_instance;
  function BackgroundClip$paddingBox_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$paddingBox_instance;
  }
  var BackgroundClip$contentBox_instance;
  function BackgroundClip$contentBox_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$contentBox_instance;
  }
  var BackgroundClip$text_instance;
  function BackgroundClip$text_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$text_instance;
  }
  BackgroundClip.prototype.toString = function () {
    return hyphenize(this.name);
  };
  BackgroundClip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackgroundClip',
    interfaces: [Enum]
  };
  function BackgroundClip$values() {
    return [BackgroundClip$initial_getInstance(), BackgroundClip$inherit_getInstance(), BackgroundClip$unset_getInstance(), BackgroundClip$borderBox_getInstance(), BackgroundClip$paddingBox_getInstance(), BackgroundClip$contentBox_getInstance(), BackgroundClip$text_getInstance()];
  }
  BackgroundClip.values = BackgroundClip$values;
  function BackgroundClip$valueOf(name) {
    switch (name) {
      case 'initial':
        return BackgroundClip$initial_getInstance();
      case 'inherit':
        return BackgroundClip$inherit_getInstance();
      case 'unset':
        return BackgroundClip$unset_getInstance();
      case 'borderBox':
        return BackgroundClip$borderBox_getInstance();
      case 'paddingBox':
        return BackgroundClip$paddingBox_getInstance();
      case 'contentBox':
        return BackgroundClip$contentBox_getInstance();
      case 'text':
        return BackgroundClip$text_getInstance();
      default:throwISE('No enum constant kotlinx.css.BackgroundClip.' + name);
    }
  }
  BackgroundClip.valueOf_61zpoe$ = BackgroundClip$valueOf;
  function BackgroundOrigin(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BackgroundOrigin_initFields() {
    BackgroundOrigin_initFields = function () {
    };
    BackgroundOrigin$initial_instance = new BackgroundOrigin('initial', 0);
    BackgroundOrigin$inherit_instance = new BackgroundOrigin('inherit', 1);
    BackgroundOrigin$unset_instance = new BackgroundOrigin('unset', 2);
    BackgroundOrigin$borderBox_instance = new BackgroundOrigin('borderBox', 3);
    BackgroundOrigin$paddingBox_instance = new BackgroundOrigin('paddingBox', 4);
    BackgroundOrigin$contentBox_instance = new BackgroundOrigin('contentBox', 5);
  }
  var BackgroundOrigin$initial_instance;
  function BackgroundOrigin$initial_getInstance() {
    BackgroundOrigin_initFields();
    return BackgroundOrigin$initial_instance;
  }
  var BackgroundOrigin$inherit_instance;
  function BackgroundOrigin$inherit_getInstance() {
    BackgroundOrigin_initFields();
    return BackgroundOrigin$inherit_instance;
  }
  var BackgroundOrigin$unset_instance;
  function BackgroundOrigin$unset_getInstance() {
    BackgroundOrigin_initFields();
    return BackgroundOrigin$unset_instance;
  }
  var BackgroundOrigin$borderBox_instance;
  function BackgroundOrigin$borderBox_getInstance() {
    BackgroundOrigin_initFields();
    return BackgroundOrigin$borderBox_instance;
  }
  var BackgroundOrigin$paddingBox_instance;
  function BackgroundOrigin$paddingBox_getInstance() {
    BackgroundOrigin_initFields();
    return BackgroundOrigin$paddingBox_instance;
  }
  var BackgroundOrigin$contentBox_instance;
  function BackgroundOrigin$contentBox_getInstance() {
    BackgroundOrigin_initFields();
    return BackgroundOrigin$contentBox_instance;
  }
  BackgroundOrigin.prototype.toString = function () {
    return hyphenize(this.name);
  };
  BackgroundOrigin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackgroundOrigin',
    interfaces: [Enum]
  };
  function BackgroundOrigin$values() {
    return [BackgroundOrigin$initial_getInstance(), BackgroundOrigin$inherit_getInstance(), BackgroundOrigin$unset_getInstance(), BackgroundOrigin$borderBox_getInstance(), BackgroundOrigin$paddingBox_getInstance(), BackgroundOrigin$contentBox_getInstance()];
  }
  BackgroundOrigin.values = BackgroundOrigin$values;
  function BackgroundOrigin$valueOf(name) {
    switch (name) {
      case 'initial':
        return BackgroundOrigin$initial_getInstance();
      case 'inherit':
        return BackgroundOrigin$inherit_getInstance();
      case 'unset':
        return BackgroundOrigin$unset_getInstance();
      case 'borderBox':
        return BackgroundOrigin$borderBox_getInstance();
      case 'paddingBox':
        return BackgroundOrigin$paddingBox_getInstance();
      case 'contentBox':
        return BackgroundOrigin$contentBox_getInstance();
      default:throwISE('No enum constant kotlinx.css.BackgroundOrigin.' + name);
    }
  }
  BackgroundOrigin.valueOf_61zpoe$ = BackgroundOrigin$valueOf;
  function BorderCollapse(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BorderCollapse_initFields() {
    BorderCollapse_initFields = function () {
    };
    BorderCollapse$initial_instance = new BorderCollapse('initial', 0);
    BorderCollapse$inherit_instance = new BorderCollapse('inherit', 1);
    BorderCollapse$unset_instance = new BorderCollapse('unset', 2);
    BorderCollapse$separate_instance = new BorderCollapse('separate', 3);
    BorderCollapse$collapse_instance = new BorderCollapse('collapse', 4);
  }
  var BorderCollapse$initial_instance;
  function BorderCollapse$initial_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$initial_instance;
  }
  var BorderCollapse$inherit_instance;
  function BorderCollapse$inherit_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$inherit_instance;
  }
  var BorderCollapse$unset_instance;
  function BorderCollapse$unset_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$unset_instance;
  }
  var BorderCollapse$separate_instance;
  function BorderCollapse$separate_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$separate_instance;
  }
  var BorderCollapse$collapse_instance;
  function BorderCollapse$collapse_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$collapse_instance;
  }
  BorderCollapse.prototype.toString = function () {
    return this.name;
  };
  BorderCollapse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BorderCollapse',
    interfaces: [Enum]
  };
  function BorderCollapse$values() {
    return [BorderCollapse$initial_getInstance(), BorderCollapse$inherit_getInstance(), BorderCollapse$unset_getInstance(), BorderCollapse$separate_getInstance(), BorderCollapse$collapse_getInstance()];
  }
  BorderCollapse.values = BorderCollapse$values;
  function BorderCollapse$valueOf(name) {
    switch (name) {
      case 'initial':
        return BorderCollapse$initial_getInstance();
      case 'inherit':
        return BorderCollapse$inherit_getInstance();
      case 'unset':
        return BorderCollapse$unset_getInstance();
      case 'separate':
        return BorderCollapse$separate_getInstance();
      case 'collapse':
        return BorderCollapse$collapse_getInstance();
      default:throwISE('No enum constant kotlinx.css.BorderCollapse.' + name);
    }
  }
  BorderCollapse.valueOf_61zpoe$ = BorderCollapse$valueOf;
  function BorderStyle(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BorderStyle_initFields() {
    BorderStyle_initFields = function () {
    };
    BorderStyle$initial_instance = new BorderStyle('initial', 0);
    BorderStyle$inherit_instance = new BorderStyle('inherit', 1);
    BorderStyle$unset_instance = new BorderStyle('unset', 2);
    BorderStyle$none_instance = new BorderStyle('none', 3);
    BorderStyle$dotted_instance = new BorderStyle('dotted', 4);
    BorderStyle$dashed_instance = new BorderStyle('dashed', 5);
    BorderStyle$solid_instance = new BorderStyle('solid', 6);
  }
  var BorderStyle$initial_instance;
  function BorderStyle$initial_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$initial_instance;
  }
  var BorderStyle$inherit_instance;
  function BorderStyle$inherit_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$inherit_instance;
  }
  var BorderStyle$unset_instance;
  function BorderStyle$unset_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$unset_instance;
  }
  var BorderStyle$none_instance;
  function BorderStyle$none_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$none_instance;
  }
  var BorderStyle$dotted_instance;
  function BorderStyle$dotted_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$dotted_instance;
  }
  var BorderStyle$dashed_instance;
  function BorderStyle$dashed_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$dashed_instance;
  }
  var BorderStyle$solid_instance;
  function BorderStyle$solid_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$solid_instance;
  }
  BorderStyle.prototype.toString = function () {
    return this.name;
  };
  BorderStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BorderStyle',
    interfaces: [Enum]
  };
  function BorderStyle$values() {
    return [BorderStyle$initial_getInstance(), BorderStyle$inherit_getInstance(), BorderStyle$unset_getInstance(), BorderStyle$none_getInstance(), BorderStyle$dotted_getInstance(), BorderStyle$dashed_getInstance(), BorderStyle$solid_getInstance()];
  }
  BorderStyle.values = BorderStyle$values;
  function BorderStyle$valueOf(name) {
    switch (name) {
      case 'initial':
        return BorderStyle$initial_getInstance();
      case 'inherit':
        return BorderStyle$inherit_getInstance();
      case 'unset':
        return BorderStyle$unset_getInstance();
      case 'none':
        return BorderStyle$none_getInstance();
      case 'dotted':
        return BorderStyle$dotted_getInstance();
      case 'dashed':
        return BorderStyle$dashed_getInstance();
      case 'solid':
        return BorderStyle$solid_getInstance();
      default:throwISE('No enum constant kotlinx.css.BorderStyle.' + name);
    }
  }
  BorderStyle.valueOf_61zpoe$ = BorderStyle$valueOf;
  function BoxSizing(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BoxSizing_initFields() {
    BoxSizing_initFields = function () {
    };
    BoxSizing$initial_instance = new BoxSizing('initial', 0);
    BoxSizing$inherit_instance = new BoxSizing('inherit', 1);
    BoxSizing$unset_instance = new BoxSizing('unset', 2);
    BoxSizing$contentBox_instance = new BoxSizing('contentBox', 3);
    BoxSizing$borderBox_instance = new BoxSizing('borderBox', 4);
  }
  var BoxSizing$initial_instance;
  function BoxSizing$initial_getInstance() {
    BoxSizing_initFields();
    return BoxSizing$initial_instance;
  }
  var BoxSizing$inherit_instance;
  function BoxSizing$inherit_getInstance() {
    BoxSizing_initFields();
    return BoxSizing$inherit_instance;
  }
  var BoxSizing$unset_instance;
  function BoxSizing$unset_getInstance() {
    BoxSizing_initFields();
    return BoxSizing$unset_instance;
  }
  var BoxSizing$contentBox_instance;
  function BoxSizing$contentBox_getInstance() {
    BoxSizing_initFields();
    return BoxSizing$contentBox_instance;
  }
  var BoxSizing$borderBox_instance;
  function BoxSizing$borderBox_getInstance() {
    BoxSizing_initFields();
    return BoxSizing$borderBox_instance;
  }
  BoxSizing.prototype.toString = function () {
    return hyphenize(this.name);
  };
  BoxSizing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxSizing',
    interfaces: [Enum]
  };
  function BoxSizing$values() {
    return [BoxSizing$initial_getInstance(), BoxSizing$inherit_getInstance(), BoxSizing$unset_getInstance(), BoxSizing$contentBox_getInstance(), BoxSizing$borderBox_getInstance()];
  }
  BoxSizing.values = BoxSizing$values;
  function BoxSizing$valueOf(name) {
    switch (name) {
      case 'initial':
        return BoxSizing$initial_getInstance();
      case 'inherit':
        return BoxSizing$inherit_getInstance();
      case 'unset':
        return BoxSizing$unset_getInstance();
      case 'contentBox':
        return BoxSizing$contentBox_getInstance();
      case 'borderBox':
        return BoxSizing$borderBox_getInstance();
      default:throwISE('No enum constant kotlinx.css.BoxSizing.' + name);
    }
  }
  BoxSizing.valueOf_61zpoe$ = BoxSizing$valueOf;
  function Clear(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Clear_initFields() {
    Clear_initFields = function () {
    };
    Clear$initial_instance = new Clear('initial', 0);
    Clear$inherit_instance = new Clear('inherit', 1);
    Clear$unset_instance = new Clear('unset', 2);
    Clear$none_instance = new Clear('none', 3);
    Clear$left_instance = new Clear('left', 4);
    Clear$right_instance = new Clear('right', 5);
    Clear$both_instance = new Clear('both', 6);
  }
  var Clear$initial_instance;
  function Clear$initial_getInstance() {
    Clear_initFields();
    return Clear$initial_instance;
  }
  var Clear$inherit_instance;
  function Clear$inherit_getInstance() {
    Clear_initFields();
    return Clear$inherit_instance;
  }
  var Clear$unset_instance;
  function Clear$unset_getInstance() {
    Clear_initFields();
    return Clear$unset_instance;
  }
  var Clear$none_instance;
  function Clear$none_getInstance() {
    Clear_initFields();
    return Clear$none_instance;
  }
  var Clear$left_instance;
  function Clear$left_getInstance() {
    Clear_initFields();
    return Clear$left_instance;
  }
  var Clear$right_instance;
  function Clear$right_getInstance() {
    Clear_initFields();
    return Clear$right_instance;
  }
  var Clear$both_instance;
  function Clear$both_getInstance() {
    Clear_initFields();
    return Clear$both_instance;
  }
  Clear.prototype.toString = function () {
    return this.name;
  };
  Clear.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Clear',
    interfaces: [Enum]
  };
  function Clear$values() {
    return [Clear$initial_getInstance(), Clear$inherit_getInstance(), Clear$unset_getInstance(), Clear$none_getInstance(), Clear$left_getInstance(), Clear$right_getInstance(), Clear$both_getInstance()];
  }
  Clear.values = Clear$values;
  function Clear$valueOf(name) {
    switch (name) {
      case 'initial':
        return Clear$initial_getInstance();
      case 'inherit':
        return Clear$inherit_getInstance();
      case 'unset':
        return Clear$unset_getInstance();
      case 'none':
        return Clear$none_getInstance();
      case 'left':
        return Clear$left_getInstance();
      case 'right':
        return Clear$right_getInstance();
      case 'both':
        return Clear$both_getInstance();
      default:throwISE('No enum constant kotlinx.css.Clear.' + name);
    }
  }
  Clear.valueOf_61zpoe$ = Clear$valueOf;
  function Color(value) {
    Color$Companion_getInstance();
    CssValue.call(this, value);
    this.value_dt80hi$_0 = value;
    this.rgb_0 = null;
  }
  Object.defineProperty(Color.prototype, 'value', {
    get: function () {
      return this.value_dt80hi$_0;
    }
  });
  function Color$Companion() {
    Color$Companion_instance = this;
    this.initial = new Color('initial');
    this.inherit = new Color('inherit');
    this.unset = new Color('unset');
    this.transparent = new Color('transparent');
    this.currentColor = new Color('currentColor');
    this.aliceBlue = Color_init('aliceblue', '#f0f8ff');
    this.antiqueWhite = Color_init('antiquewhite', '#faebd7');
    this.aqua = Color_init('aqua', '#00ffff');
    this.aquamarine = Color_init('aquamarine', '#7fffd4');
    this.azure = Color_init('azure', '#f0ffff');
    this.beige = Color_init('beige', '#f5f5dc');
    this.bisque = Color_init('bisque', '#ffe4c4');
    this.black = Color_init('black', '#000000');
    this.blanchedAlmond = Color_init('blanchedalmond', '#ffebcd');
    this.blue = Color_init('blue', '#0000ff');
    this.blueViolet = Color_init('blueviolet', '#8a2be2');
    this.brown = Color_init('brown', '#a52a2a');
    this.burlyWood = Color_init('burlywood', '#deb887');
    this.cadetBlue = Color_init('cadetblue', '#5f9ea0');
    this.chartreuse = Color_init('chartreuse', '#7fff00');
    this.chocolate = Color_init('chocolate', '#d2691e');
    this.coral = Color_init('coral', '#ff7f50');
    this.cornflowerBlue = Color_init('cornflowerblue', '#6495ed');
    this.cornsilk = Color_init('cornsilk', '#fff8dc');
    this.crimson = Color_init('crimson', '#dc143c');
    this.cyan = Color_init('cyan', '#00ffff');
    this.darkBlue = Color_init('darkblue', '#00008b');
    this.darkCyan = Color_init('darkcyan', '#008b8b');
    this.darkGoldenrod = Color_init('darkgoldenrod', '#b8860b');
    this.darkGray = Color_init('darkgray', '#a9a9a9');
    this.darkGreen = Color_init('darkgreen', '#006400');
    this.darkGrey = Color_init('darkgrey', '#a9a9a9');
    this.darkKhaki = Color_init('darkkhaki', '#bdb76b');
    this.darkMagenta = Color_init('darkmagenta', '#8b008b');
    this.darkOliveGreen = Color_init('darkolivegreen', '#556b2f');
    this.darkOrange = Color_init('darkorange', '#ff8c00');
    this.darkOrchid = Color_init('darkorchid', '#9932cc');
    this.darkRed = Color_init('darkred', '#8b0000');
    this.darkSalmon = Color_init('darksalmon', '#e9967a');
    this.darkSeaGreen = Color_init('darkseagreen', '#8fbc8f');
    this.darkSlateBlue = Color_init('darkslateblue', '#483d8b');
    this.darkSlateGray = Color_init('darkslategray', '#2f4f4f');
    this.darkSlateGrey = Color_init('darkslategrey', '#2f4f4f');
    this.darkTurquoise = Color_init('darkturquoise', '#00ced1');
    this.darkViolet = Color_init('darkviolet', '#9400d3');
    this.deepPink = Color_init('deeppink', '#ff1493');
    this.deepSkyBlue = Color_init('deepskyblue', '#00bfff');
    this.dimGray = Color_init('dimgray', '#696969');
    this.dimGrey = Color_init('dimgrey', '#696969');
    this.dodgerBlue = Color_init('dodgerblue', '#1e90ff');
    this.firebrick = Color_init('firebrick', '#b22222');
    this.floralWhite = Color_init('floralwhite', '#fffaf0');
    this.forestGreen = Color_init('forestgreen', '#228b22');
    this.fuchsia = Color_init('fuchsia', '#ff00ff');
    this.gainsboro = Color_init('gainsboro', '#dcdcdc');
    this.ghostWhite = Color_init('ghostwhite', '#f8f8ff');
    this.gold = Color_init('gold', '#ffd700');
    this.goldenrod = Color_init('goldenrod', '#daa520');
    this.gray = Color_init('gray', '#808080');
    this.green = Color_init('green', '#008000');
    this.greenYellow = Color_init('greenyellow', '#adff2f');
    this.grey = Color_init('grey', '#808080');
    this.honeydew = Color_init('honeydew', '#f0fff0');
    this.hotPink = Color_init('hotpink', '#ff69b4');
    this.indianRed = Color_init('indianred', '#cd5c5c');
    this.indigo = Color_init('indigo', '#4b0082');
    this.ivory = Color_init('ivory', '#fffff0');
    this.khaki = Color_init('khaki', '#f0e68c');
    this.lavender = Color_init('lavender', '#e6e6fa');
    this.lavenderBlush = Color_init('lavenderblush', '#fff0f5');
    this.lawnGreen = Color_init('lawngreen', '#7cfc00');
    this.lemonChiffon = Color_init('lemonchiffon', '#fffacd');
    this.lightBlue = Color_init('lightblue', '#add8e6');
    this.lightCoral = Color_init('lightcoral', '#f08080');
    this.lightCyan = Color_init('lightcyan', '#e0ffff');
    this.lightGoldenrodYellow = Color_init('lightgoldenrodyellow', '#fafad2');
    this.lightGray = Color_init('lightgray', '#d3d3d3');
    this.lightGreen = Color_init('lightgreen', '#90ee90');
    this.lightGrey = Color_init('lightgrey', '#d3d3d3');
    this.lightPink = Color_init('lightpink', '#ffb6c1');
    this.lightSalmon = Color_init('lightsalmon', '#ffa07a');
    this.lightSeaGreen = Color_init('lightseagreen', '#20b2aa');
    this.lightSkyBlue = Color_init('lightskyblue', '#87cefa');
    this.lightSlateGray = Color_init('lightslategray', '#778899');
    this.lightSlateGrey = Color_init('lightslategrey', '#778899');
    this.lightSteelBlue = Color_init('lightsteelblue', '#b0c4de');
    this.lightYellow = Color_init('lightyellow', '#ffffe0');
    this.lime = Color_init('lime', '#00ff00');
    this.limeGreen = Color_init('limegreen', '#32cd32');
    this.linen = Color_init('linen', '#faf0e6');
    this.magenta = Color_init('magenta', '#ff00ff');
    this.maroon = Color_init('maroon', '#800000');
    this.mediumAquamarine = Color_init('mediumaquamarine', '#66cdaa');
    this.mediumBlue = Color_init('mediumblue', '#0000cd');
    this.mediumOrchid = Color_init('mediumorchid', '#ba55d3');
    this.mediumPurple = Color_init('mediumpurple', '#9370d8');
    this.mediumSeaGreen = Color_init('mediumseagreen', '#3cb371');
    this.mediumSlateBlue = Color_init('mediumslateblue', '#7b68ee');
    this.mediumSpringGreen = Color_init('mediumspringgreen', '#00fa9a');
    this.mediumTurquoise = Color_init('mediumturquoise', '#48d1cc');
    this.mediumVioletRed = Color_init('mediumvioletred', '#c71585');
    this.midnightBlue = Color_init('midnightblue', '#191970');
    this.mintCream = Color_init('mintcream', '#f5fffa');
    this.mistyRose = Color_init('mistyrose', '#ffe4e1');
    this.moccasin = Color_init('moccasin', '#ffe4b5');
    this.navajoWhite = Color_init('navajowhite', '#ffdead');
    this.navy = Color_init('navy', '#000080');
    this.oldLace = Color_init('oldlace', '#fdf5e6');
    this.olive = Color_init('olive', '#808000');
    this.oliveDrab = Color_init('olivedrab', '#6b8e23');
    this.orange = Color_init('orange', '#ffa500');
    this.orangeRed = Color_init('orangered', '#ff4500');
    this.orchid = Color_init('orchid', '#da70d6');
    this.paleGoldenrod = Color_init('palegoldenrod', '#eee8aa');
    this.paleGreen = Color_init('palegreen', '#98fb98');
    this.paleTurquoise = Color_init('paleturquoise', '#afeeee');
    this.paleVioletRed = Color_init('palevioletred', '#db7093');
    this.papayaWhip = Color_init('papayawhip', '#ffefd5');
    this.peachPuff = Color_init('peachpuff', '#ffdab9');
    this.peru = Color_init('peru', '#cd853f');
    this.pink = Color_init('pink', '#ffc0cb');
    this.plum = Color_init('plum', '#dda0dd');
    this.powderBlue = Color_init('powderblue', '#b0e0e6');
    this.purple = Color_init('purple', '#800080');
    this.red = Color_init('red', '#ff0000');
    this.rosyBrown = Color_init('rosybrown', '#bc8f8f');
    this.royalBlue = Color_init('royalblue', '#4169e1');
    this.saddleBrown = Color_init('saddlebrown', '#8b4513');
    this.salmon = Color_init('salmon', '#fa8072');
    this.sandyBrown = Color_init('sandybrown', '#f4a460');
    this.seaGreen = Color_init('seagreen', '#2e8b57');
    this.seaShell = Color_init('seashell', '#fff5ee');
    this.sienna = Color_init('sienna', '#a0522d');
    this.silver = Color_init('silver', '#c0c0c0');
    this.skyBlue = Color_init('skyblue', '#87ceeb');
    this.slateBlue = Color_init('slateblue', '#6a5acd');
    this.slateGray = Color_init('slategray', '#708090');
    this.slateGrey = Color_init('slategrey', '#708090');
    this.snow = Color_init('snow', '#fffafa');
    this.springGreen = Color_init('springgreen', '#00ff7f');
    this.steelBlue = Color_init('steelblue', '#4682b4');
    this.tan = Color_init('tan', '#d2b48c');
    this.teal = Color_init('teal', '#008080');
    this.thistle = Color_init('thistle', '#d8bfd8');
    this.tomato = Color_init('tomato', '#ff6347');
    this.turquoise = Color_init('turquoise', '#40e0d0');
    this.violet = Color_init('violet', '#ee82ee');
    this.wheat = Color_init('wheat', '#f5deb3');
    this.white = Color_init('white', '#ffffff');
    this.whiteSmoke = Color_init('whitesmoke', '#f5f5f5');
    this.yellow = Color_init('yellow', '#ffff00');
    this.yellowGreen = Color_init('yellowgreen', '#9acd3');
  }
  Color$Companion.prototype.normalizeFractionalPercent_14dthe$ = function (value) {
    return coerceIn(value, 0.0, 1.0);
  };
  Color$Companion.prototype.normalizePercent_za3lpa$ = function (value) {
    return coerceIn_0(value, 0, 100);
  };
  Color$Companion.prototype.normalizeRGB_za3lpa$ = function (value) {
    return coerceIn_0(value, 0, 255);
  };
  Color$Companion.prototype.normalizeHue_14dthe$ = function (value) {
    return roundToInt((value % 360 + 360) % 360);
  };
  Color$Companion.prototype.normalizeAlpha_14dthe$ = function (value) {
    return this.normalizeFractionalPercent_14dthe$(value);
  };
  Color$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }return Color$Companion_instance;
  }
  Color.prototype.withAlpha_14dthe$ = function (alpha) {
    if (startsWith_0(this.value, 'hsl', true)) {
      var $receiver = this.fromHSLANotation_8be2vx$();
      return hsla($receiver.hue, $receiver.saturation, $receiver.lightness, Color$Companion_getInstance().normalizeAlpha_14dthe$(alpha) * $receiver.alpha);
    } else {
      var $receiver_0 = this.toRGBA_8be2vx$();
      return rgba($receiver_0.red, $receiver_0.green, $receiver_0.blue, Color$Companion_getInstance().normalizeAlpha_14dthe$(alpha) * $receiver_0.alpha);
    }
  };
  Color.prototype.blend_uu3z0h$ = function (backgroundColor) {
    var source = this.toRGBA_8be2vx$();
    var background = backgroundColor.toRGBA_8be2vx$();
    var targetR = (1 - source.alpha) * background.red + source.alpha * source.red;
    var targetG = (1 - source.alpha) * background.green + source.alpha * source.green;
    var targetB = (1 - source.alpha) * background.blue + source.alpha * source.blue;
    return rgb(roundToInt(targetR), roundToInt(targetG), roundToInt(targetB));
  };
  Color.prototype.lighten_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var lightness = hsla_0.lightness + roundToInt(hsla_0.lightness * (Color$Companion_getInstance().normalizePercent_za3lpa$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, void 0, Color$Companion_getInstance().normalizePercent_za3lpa$(lightness));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    } else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  Color.prototype.darken_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var darkness = hsla_0.lightness - roundToInt(hsla_0.lightness * (Color$Companion_getInstance().normalizePercent_za3lpa$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, void 0, Color$Companion_getInstance().normalizePercent_za3lpa$(darkness));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    } else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  Color.prototype.saturate_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var saturation = hsla_0.saturation + roundToInt(hsla_0.saturation * (Color$Companion_getInstance().normalizePercent_za3lpa$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, Color$Companion_getInstance().normalizePercent_za3lpa$(saturation));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    } else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  Color.prototype.desaturate_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var desaturation = hsla_0.saturation - roundToInt(hsla_0.saturation * (Color$Companion_getInstance().normalizePercent_za3lpa$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, Color$Companion_getInstance().normalizePercent_za3lpa$(desaturation));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    } else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  function Color$RGBA(red, green, blue, alpha) {
    if (alpha === void 0)
      alpha = 1.0;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
  Color$RGBA.prototype.asHSLA = function () {
    var tmp$;
    var r = this.red / 255.0;
    var g = this.green / 255.0;
    var b = this.blue / 255.0;
    var cMax = Math_0.max(r, g, b);
    var cMin = Math_0.min(r, g, b);
    var chroma = cMax - cMin;
    var lg = Color$Companion_getInstance().normalizeFractionalPercent_14dthe$((cMax + cMin) / 2);
    var tmp$_0;
    if (chroma !== 0.0) {
      var tmp$_1 = Color$Companion_getInstance();
      var x = 2.0 * lg - 1.0;
      tmp$_0 = tmp$_1.normalizeFractionalPercent_14dthe$(chroma / (1.0 - Math_0.abs(x)));
    } else
      tmp$_0 = 0.0;
    var s = tmp$_0;
    if (cMax === cMin)
      tmp$ = 0.0;
    else if (cMax === r)
      tmp$ = 60 * ((g - b) / chroma % 6.0);
    else if (cMax === g)
      tmp$ = 60 * ((b - r) / chroma + 2);
    else if (cMax === b)
      tmp$ = 60 * ((r - g) / chroma + 4);
    else {
      throw IllegalStateException_init('Unexpected value for max'.toString());
    }
    var h = tmp$;
    return new Color$HSLA(Color$Companion_getInstance().normalizeHue_14dthe$(h), roundToInt(s * 100), roundToInt(lg * 100), this.alpha);
  };
  Color$RGBA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBA',
    interfaces: []
  };
  Color$RGBA.prototype.component1 = function () {
    return this.red;
  };
  Color$RGBA.prototype.component2 = function () {
    return this.green;
  };
  Color$RGBA.prototype.component3 = function () {
    return this.blue;
  };
  Color$RGBA.prototype.component4 = function () {
    return this.alpha;
  };
  Color$RGBA.prototype.copy_gb4hak$ = function (red, green, blue, alpha) {
    return new Color$RGBA(red === void 0 ? this.red : red, green === void 0 ? this.green : green, blue === void 0 ? this.blue : blue, alpha === void 0 ? this.alpha : alpha);
  };
  Color$RGBA.prototype.toString = function () {
    return 'RGBA(red=' + Kotlin.toString(this.red) + (', green=' + Kotlin.toString(this.green)) + (', blue=' + Kotlin.toString(this.blue)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
  };
  Color$RGBA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.red) | 0;
    result = result * 31 + Kotlin.hashCode(this.green) | 0;
    result = result * 31 + Kotlin.hashCode(this.blue) | 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    return result;
  };
  Color$RGBA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.red, other.red) && Kotlin.equals(this.green, other.green) && Kotlin.equals(this.blue, other.blue) && Kotlin.equals(this.alpha, other.alpha)))));
  };
  function Color$HSLA(hue, saturation, lightness, alpha) {
    if (alpha === void 0)
      alpha = 1.0;
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
    this.alpha = alpha;
  }
  function Color$HSLA$asRGBA$hueToRGB(m1, m2, h) {
    var tmp$;
    var hu = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    if (hu < 1.0 / 6)
      tmp$ = m1 + (m2 - m1) * 6 * hu;
    else if (hu < 1.0 / 2)
      tmp$ = m2;
    else if (hu < 2.0 / 3)
      tmp$ = m1 + (m2 - m1) * 6 * (2.0 / 3 - hu);
    else
      tmp$ = m1;
    return tmp$;
  }
  Color$HSLA.prototype.asRGBA = function () {
    var hueToRGB = Color$HSLA$asRGBA$hueToRGB;
    if (this.saturation === 0)
      return new Color$RGBA(this.lightness, this.lightness, this.lightness);
    var h = this.hue % 360.0 / 360.0;
    var s = this.saturation / 100.0;
    var lg = this.lightness / 100.0;
    var m2 = lg < 0.5 ? lg * (1 + s) : lg + s - lg * s;
    var m1 = 2 * lg - m2;
    var r = Color$Companion_getInstance().normalizeFractionalPercent_14dthe$(hueToRGB(m1, m2, h + 1.0 / 3));
    var g = Color$Companion_getInstance().normalizeFractionalPercent_14dthe$(hueToRGB(m1, m2, h));
    var b = Color$Companion_getInstance().normalizeFractionalPercent_14dthe$(hueToRGB(m1, m2, h - 1.0 / 3));
    return new Color$RGBA(roundToInt(r * 255), roundToInt(g * 255), roundToInt(b * 255), this.alpha);
  };
  Color$HSLA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HSLA',
    interfaces: []
  };
  Color$HSLA.prototype.component1 = function () {
    return this.hue;
  };
  Color$HSLA.prototype.component2 = function () {
    return this.saturation;
  };
  Color$HSLA.prototype.component3 = function () {
    return this.lightness;
  };
  Color$HSLA.prototype.component4 = function () {
    return this.alpha;
  };
  Color$HSLA.prototype.copy_gb4hak$ = function (hue, saturation, lightness, alpha) {
    return new Color$HSLA(hue === void 0 ? this.hue : hue, saturation === void 0 ? this.saturation : saturation, lightness === void 0 ? this.lightness : lightness, alpha === void 0 ? this.alpha : alpha);
  };
  Color$HSLA.prototype.toString = function () {
    return 'HSLA(hue=' + Kotlin.toString(this.hue) + (', saturation=' + Kotlin.toString(this.saturation)) + (', lightness=' + Kotlin.toString(this.lightness)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
  };
  Color$HSLA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.hue) | 0;
    result = result * 31 + Kotlin.hashCode(this.saturation) | 0;
    result = result * 31 + Kotlin.hashCode(this.lightness) | 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    return result;
  };
  Color$HSLA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.hue, other.hue) && Kotlin.equals(this.saturation, other.saturation) && Kotlin.equals(this.lightness, other.lightness) && Kotlin.equals(this.alpha, other.alpha)))));
  };
  function Color$fromHSLANotation$getHSLParameter(closure$match, this$Color) {
    return function (index) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = (tmp$_0 = (tmp$ = closure$match != null ? closure$match.groups : null) != null ? tmp$.get_za3lpa$(index) : null) != null ? tmp$_0.value : null;
      if (tmp$_1 == null) {
        throw IllegalArgumentException_init('Expected hsl or hsla notation, got ' + this$Color.value);
      }return tmp$_1;
    };
  }
  Color.prototype.fromHSLANotation_8be2vx$ = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var pattern = '^hsla?\\((-?[0-9]+\\.?[0-9]*(?:deg|grad|rad|turn)?)\\s*[, ]?\\s*(\\d{1,3})%\\s*[, ]\\s*(\\d{1,3})%\\s*[, ]?\\s*(\\d|(?:\\d?\\.\\d+))?\\)$';
    var match = Regex_init_0(pattern, RegexOption.IGNORE_CASE).find_905azu$(this.value);
    var getHSLParameter = Color$fromHSLANotation$getHSLParameter(match, this);
    var hueShape = getHSLParameter(1);
    if (endsWith(hueShape, 'grad', true))
      tmp$ = toDouble(substringBefore(hueShape, 'grad')) * (9.0 / 10);
    else if (endsWith(hueShape, 'rad', true))
      tmp$ = toDouble(substringBefore(hueShape, 'rad')) * 180 / math.PI;
    else if (endsWith(hueShape, 'turn', true))
      tmp$ = toDouble(substringBefore(hueShape, 'turn')) * 360.0;
    else if (endsWith(hueShape, 'deg', true))
      tmp$ = toDouble(substringBefore(hueShape, 'deg'));
    else
      tmp$ = toDouble(hueShape);
    var hue = Color$Companion_getInstance().normalizeHue_14dthe$(tmp$);
    var saturation = Color$Companion_getInstance().normalizePercent_za3lpa$(toInt(getHSLParameter(2)));
    var lightness = Color$Companion_getInstance().normalizePercent_za3lpa$(toInt(getHSLParameter(3)));
    tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = match != null ? match.groups : null) != null ? tmp$_0.get_za3lpa$(4) : null) != null ? tmp$_1.value : null) != null ? toDouble(tmp$_2) : null) != null ? tmp$_3 : 1.0;
    var alpha = Color$Companion_getInstance().normalizeAlpha_14dthe$(tmp$_4);
    return new Color$HSLA(hue, saturation, lightness, alpha);
  };
  function Color$fromRGBANotation$getRGBParameter(closure$match, this$Color) {
    return function (index) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = (tmp$_0 = (tmp$ = closure$match != null ? closure$match.groups : null) != null ? tmp$.get_za3lpa$(index) : null) != null ? tmp$_0.value : null;
      if (tmp$_1 == null) {
        throw IllegalArgumentException_init('Expected rgb or rgba notation, got ' + this$Color.value);
      }var group = tmp$_1;
      if (endsWith_0(group, 37))
        tmp$_2 = numberToInt(Color$Companion_getInstance().normalizeFractionalPercent_14dthe$(toDouble(substringBefore_0(group, 37)) / 100.0) * 255.0);
      else
        tmp$_2 = Color$Companion_getInstance().normalizeRGB_za3lpa$(toInt(group));
      return tmp$_2;
    };
  }
  Color.prototype.fromRGBANotation_8be2vx$ = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var pattern = '^rgba?\\((\\d{1,3}%?)\\s*[, ]\\s*(\\d{1,3}%?)\\s*[, ]\\s*(\\d{1,3}%?)[, ]?\\s*(\\d|(?:\\d?\\.\\d+))?\\)$';
    var match = Regex_init_0(pattern, RegexOption.IGNORE_CASE).find_905azu$(this.value);
    var getRGBParameter = Color$fromRGBANotation$getRGBParameter(match, this);
    var red = getRGBParameter(1);
    var green = getRGBParameter(2);
    var blue = getRGBParameter(3);
    tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = match != null ? match.groups : null) != null ? tmp$.get_za3lpa$(4) : null) != null ? tmp$_0.value : null) != null ? toDouble(tmp$_1) : null) != null ? tmp$_2 : 1.0;
    var alpha = Color$Companion_getInstance().normalizeAlpha_14dthe$(tmp$_3);
    return new Color$RGBA(red, green, blue, alpha);
  };
  Color.prototype.toRGBA_8be2vx$ = function () {
    var tmp$, tmp$_0;
    var v = (tmp$ = this.rgb_0) != null ? tmp$ : this.value;
    if (startsWith_0(v, 'rgb'))
      tmp$_0 = this.fromRGBANotation_8be2vx$();
    else if (startsWith_0(v, '#') && v.length === 4)
      tmp$_0 = new Color$RGBA(toInt_0(times(String.fromCharCode(v.charCodeAt(1)), 2), 16), toInt_0(times(String.fromCharCode(v.charCodeAt(2)), 2), 16), toInt_0(times(String.fromCharCode(v.charCodeAt(3)), 2), 16));
    else if (startsWith_0(v, '#') && (v.length === 7 || v.length === 9))
      tmp$_0 = new Color$RGBA(toInt_0(substring(v, new IntRange(1, 2)), 16), toInt_0(substring(v, new IntRange(3, 4)), 16), toInt_0(substring(v, new IntRange(5, 6)), 16));
    else
      throw IllegalArgumentException_init('Only hexadecimal, rgb, and rgba notations are accepted, got ' + v);
    return tmp$_0;
  };
  Color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: [CssValue]
  };
  function Color_init(value, rgb, $this) {
    $this = $this || Object.create(Color.prototype);
    Color.call($this, value);
    $this.rgb_0 = rgb;
    return $this;
  }
  function rgb(red, green, blue) {
    return new Color('rgb(' + red + ', ' + green + ', ' + blue + ')');
  }
  function rgba(red, green, blue, alpha) {
    return new Color('rgba(' + red + ', ' + green + ', ' + blue + ', ' + formatAlpha(alpha) + ')');
  }
  function hsl(hue, saturation, lightness) {
    return new Color('hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)');
  }
  function hsla(hue, saturation, lightness, alpha) {
    return new Color('hsla(' + hue + ', ' + saturation + '%, ' + lightness + '%, ' + formatAlpha(alpha) + ')');
  }
  function blackAlpha(alpha) {
    return Color$Companion_getInstance().black.withAlpha_14dthe$(alpha);
  }
  function whiteAlpha(alpha) {
    return Color$Companion_getInstance().white.withAlpha_14dthe$(alpha);
  }
  function formatAlpha(alpha) {
    var it = alpha.toString();
    return contains(it, '.') ? it : it + '.0';
  }
  function ColumnGap(value) {
    ColumnGap$Companion_getInstance();
    CssValue.call(this, value);
    this.value_n6uu7b$_0 = value;
  }
  Object.defineProperty(ColumnGap.prototype, 'value', {
    get: function () {
      return this.value_n6uu7b$_0;
    }
  });
  function ColumnGap$Companion() {
    ColumnGap$Companion_instance = this;
    this.initial = new ColumnGap('initial');
    this.inherit = new ColumnGap('inherit');
    this.normal = new ColumnGap('normal');
    this.unset = new ColumnGap('unset');
  }
  ColumnGap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ColumnGap$Companion_instance = null;
  function ColumnGap$Companion_getInstance() {
    if (ColumnGap$Companion_instance === null) {
      new ColumnGap$Companion();
    }return ColumnGap$Companion_instance;
  }
  ColumnGap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColumnGap',
    interfaces: [CssValue]
  };
  function Contain(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Contain_initFields() {
    Contain_initFields = function () {
    };
    Contain$initial_instance = new Contain('initial', 0);
    Contain$inherit_instance = new Contain('inherit', 1);
    Contain$unset_instance = new Contain('unset', 2);
    Contain$none_instance = new Contain('none', 3);
    Contain$strict_instance = new Contain('strict', 4);
    Contain$content_instance = new Contain('content', 5);
    Contain$size_instance = new Contain('size', 6);
    Contain$layout_instance = new Contain('layout', 7);
    Contain$style_instance = new Contain('style', 8);
    Contain$paint_instance = new Contain('paint', 9);
  }
  var Contain$initial_instance;
  function Contain$initial_getInstance() {
    Contain_initFields();
    return Contain$initial_instance;
  }
  var Contain$inherit_instance;
  function Contain$inherit_getInstance() {
    Contain_initFields();
    return Contain$inherit_instance;
  }
  var Contain$unset_instance;
  function Contain$unset_getInstance() {
    Contain_initFields();
    return Contain$unset_instance;
  }
  var Contain$none_instance;
  function Contain$none_getInstance() {
    Contain_initFields();
    return Contain$none_instance;
  }
  var Contain$strict_instance;
  function Contain$strict_getInstance() {
    Contain_initFields();
    return Contain$strict_instance;
  }
  var Contain$content_instance;
  function Contain$content_getInstance() {
    Contain_initFields();
    return Contain$content_instance;
  }
  var Contain$size_instance;
  function Contain$size_getInstance() {
    Contain_initFields();
    return Contain$size_instance;
  }
  var Contain$layout_instance;
  function Contain$layout_getInstance() {
    Contain_initFields();
    return Contain$layout_instance;
  }
  var Contain$style_instance;
  function Contain$style_getInstance() {
    Contain_initFields();
    return Contain$style_instance;
  }
  var Contain$paint_instance;
  function Contain$paint_getInstance() {
    Contain_initFields();
    return Contain$paint_instance;
  }
  Contain.prototype.toString = function () {
    return this.name;
  };
  Contain.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contain',
    interfaces: [Enum]
  };
  function Contain$values() {
    return [Contain$initial_getInstance(), Contain$inherit_getInstance(), Contain$unset_getInstance(), Contain$none_getInstance(), Contain$strict_getInstance(), Contain$content_getInstance(), Contain$size_getInstance(), Contain$layout_getInstance(), Contain$style_getInstance(), Contain$paint_getInstance()];
  }
  Contain.values = Contain$values;
  function Contain$valueOf(name) {
    switch (name) {
      case 'initial':
        return Contain$initial_getInstance();
      case 'inherit':
        return Contain$inherit_getInstance();
      case 'unset':
        return Contain$unset_getInstance();
      case 'none':
        return Contain$none_getInstance();
      case 'strict':
        return Contain$strict_getInstance();
      case 'content':
        return Contain$content_getInstance();
      case 'size':
        return Contain$size_getInstance();
      case 'layout':
        return Contain$layout_getInstance();
      case 'style':
        return Contain$style_getInstance();
      case 'paint':
        return Contain$paint_getInstance();
      default:throwISE('No enum constant kotlinx.css.Contain.' + name);
    }
  }
  Contain.valueOf_61zpoe$ = Contain$valueOf;
  function Cursor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Cursor_initFields() {
    Cursor_initFields = function () {
    };
    Cursor$initial_instance = new Cursor('initial', 0);
    Cursor$inherit_instance = new Cursor('inherit', 1);
    Cursor$unset_instance = new Cursor('unset', 2);
    Cursor$auto_instance = new Cursor('auto', 3);
    Cursor$default_instance = new Cursor('default', 4);
    Cursor$none_instance = new Cursor('none', 5);
    Cursor$contextMenu_instance = new Cursor('contextMenu', 6);
    Cursor$help_instance = new Cursor('help', 7);
    Cursor$pointer_instance = new Cursor('pointer', 8);
    Cursor$progress_instance = new Cursor('progress', 9);
    Cursor$wait_instance = new Cursor('wait', 10);
    Cursor$cell_instance = new Cursor('cell', 11);
    Cursor$crosshair_instance = new Cursor('crosshair', 12);
    Cursor$text_instance = new Cursor('text', 13);
    Cursor$verticalText_instance = new Cursor('verticalText', 14);
    Cursor$alias_instance = new Cursor('alias', 15);
    Cursor$copy_instance = new Cursor('copy', 16);
    Cursor$move_instance = new Cursor('move', 17);
    Cursor$noDrop_instance = new Cursor('noDrop', 18);
    Cursor$notAllowed_instance = new Cursor('notAllowed', 19);
    Cursor$grab_instance = new Cursor('grab', 20);
    Cursor$grabbing_instance = new Cursor('grabbing', 21);
    Cursor$colResize_instance = new Cursor('colResize', 22);
    Cursor$rowResize_instance = new Cursor('rowResize', 23);
    Cursor$allScroll_instance = new Cursor('allScroll', 24);
    Cursor$eResize_instance = new Cursor('eResize', 25);
    Cursor$nResize_instance = new Cursor('nResize', 26);
    Cursor$neResize_instance = new Cursor('neResize', 27);
    Cursor$nwResize_instance = new Cursor('nwResize', 28);
    Cursor$sResize_instance = new Cursor('sResize', 29);
    Cursor$seResize_instance = new Cursor('seResize', 30);
    Cursor$swResize_instance = new Cursor('swResize', 31);
    Cursor$wResize_instance = new Cursor('wResize', 32);
    Cursor$ewResize_instance = new Cursor('ewResize', 33);
    Cursor$nsResize_instance = new Cursor('nsResize', 34);
    Cursor$neswResize_instance = new Cursor('neswResize', 35);
    Cursor$nwseResize_instance = new Cursor('nwseResize', 36);
    Cursor$zoomIn_instance = new Cursor('zoomIn', 37);
    Cursor$zoomOut_instance = new Cursor('zoomOut', 38);
  }
  var Cursor$initial_instance;
  function Cursor$initial_getInstance() {
    Cursor_initFields();
    return Cursor$initial_instance;
  }
  var Cursor$inherit_instance;
  function Cursor$inherit_getInstance() {
    Cursor_initFields();
    return Cursor$inherit_instance;
  }
  var Cursor$unset_instance;
  function Cursor$unset_getInstance() {
    Cursor_initFields();
    return Cursor$unset_instance;
  }
  var Cursor$auto_instance;
  function Cursor$auto_getInstance() {
    Cursor_initFields();
    return Cursor$auto_instance;
  }
  var Cursor$default_instance;
  function Cursor$default_getInstance() {
    Cursor_initFields();
    return Cursor$default_instance;
  }
  var Cursor$none_instance;
  function Cursor$none_getInstance() {
    Cursor_initFields();
    return Cursor$none_instance;
  }
  var Cursor$contextMenu_instance;
  function Cursor$contextMenu_getInstance() {
    Cursor_initFields();
    return Cursor$contextMenu_instance;
  }
  var Cursor$help_instance;
  function Cursor$help_getInstance() {
    Cursor_initFields();
    return Cursor$help_instance;
  }
  var Cursor$pointer_instance;
  function Cursor$pointer_getInstance() {
    Cursor_initFields();
    return Cursor$pointer_instance;
  }
  var Cursor$progress_instance;
  function Cursor$progress_getInstance() {
    Cursor_initFields();
    return Cursor$progress_instance;
  }
  var Cursor$wait_instance;
  function Cursor$wait_getInstance() {
    Cursor_initFields();
    return Cursor$wait_instance;
  }
  var Cursor$cell_instance;
  function Cursor$cell_getInstance() {
    Cursor_initFields();
    return Cursor$cell_instance;
  }
  var Cursor$crosshair_instance;
  function Cursor$crosshair_getInstance() {
    Cursor_initFields();
    return Cursor$crosshair_instance;
  }
  var Cursor$text_instance;
  function Cursor$text_getInstance() {
    Cursor_initFields();
    return Cursor$text_instance;
  }
  var Cursor$verticalText_instance;
  function Cursor$verticalText_getInstance() {
    Cursor_initFields();
    return Cursor$verticalText_instance;
  }
  var Cursor$alias_instance;
  function Cursor$alias_getInstance() {
    Cursor_initFields();
    return Cursor$alias_instance;
  }
  var Cursor$copy_instance;
  function Cursor$copy_getInstance() {
    Cursor_initFields();
    return Cursor$copy_instance;
  }
  var Cursor$move_instance;
  function Cursor$move_getInstance() {
    Cursor_initFields();
    return Cursor$move_instance;
  }
  var Cursor$noDrop_instance;
  function Cursor$noDrop_getInstance() {
    Cursor_initFields();
    return Cursor$noDrop_instance;
  }
  var Cursor$notAllowed_instance;
  function Cursor$notAllowed_getInstance() {
    Cursor_initFields();
    return Cursor$notAllowed_instance;
  }
  var Cursor$grab_instance;
  function Cursor$grab_getInstance() {
    Cursor_initFields();
    return Cursor$grab_instance;
  }
  var Cursor$grabbing_instance;
  function Cursor$grabbing_getInstance() {
    Cursor_initFields();
    return Cursor$grabbing_instance;
  }
  var Cursor$colResize_instance;
  function Cursor$colResize_getInstance() {
    Cursor_initFields();
    return Cursor$colResize_instance;
  }
  var Cursor$rowResize_instance;
  function Cursor$rowResize_getInstance() {
    Cursor_initFields();
    return Cursor$rowResize_instance;
  }
  var Cursor$allScroll_instance;
  function Cursor$allScroll_getInstance() {
    Cursor_initFields();
    return Cursor$allScroll_instance;
  }
  var Cursor$eResize_instance;
  function Cursor$eResize_getInstance() {
    Cursor_initFields();
    return Cursor$eResize_instance;
  }
  var Cursor$nResize_instance;
  function Cursor$nResize_getInstance() {
    Cursor_initFields();
    return Cursor$nResize_instance;
  }
  var Cursor$neResize_instance;
  function Cursor$neResize_getInstance() {
    Cursor_initFields();
    return Cursor$neResize_instance;
  }
  var Cursor$nwResize_instance;
  function Cursor$nwResize_getInstance() {
    Cursor_initFields();
    return Cursor$nwResize_instance;
  }
  var Cursor$sResize_instance;
  function Cursor$sResize_getInstance() {
    Cursor_initFields();
    return Cursor$sResize_instance;
  }
  var Cursor$seResize_instance;
  function Cursor$seResize_getInstance() {
    Cursor_initFields();
    return Cursor$seResize_instance;
  }
  var Cursor$swResize_instance;
  function Cursor$swResize_getInstance() {
    Cursor_initFields();
    return Cursor$swResize_instance;
  }
  var Cursor$wResize_instance;
  function Cursor$wResize_getInstance() {
    Cursor_initFields();
    return Cursor$wResize_instance;
  }
  var Cursor$ewResize_instance;
  function Cursor$ewResize_getInstance() {
    Cursor_initFields();
    return Cursor$ewResize_instance;
  }
  var Cursor$nsResize_instance;
  function Cursor$nsResize_getInstance() {
    Cursor_initFields();
    return Cursor$nsResize_instance;
  }
  var Cursor$neswResize_instance;
  function Cursor$neswResize_getInstance() {
    Cursor_initFields();
    return Cursor$neswResize_instance;
  }
  var Cursor$nwseResize_instance;
  function Cursor$nwseResize_getInstance() {
    Cursor_initFields();
    return Cursor$nwseResize_instance;
  }
  var Cursor$zoomIn_instance;
  function Cursor$zoomIn_getInstance() {
    Cursor_initFields();
    return Cursor$zoomIn_instance;
  }
  var Cursor$zoomOut_instance;
  function Cursor$zoomOut_getInstance() {
    Cursor_initFields();
    return Cursor$zoomOut_instance;
  }
  Cursor.prototype.toString = function () {
    return hyphenize(this.name);
  };
  Cursor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cursor',
    interfaces: [Enum]
  };
  function Cursor$values() {
    return [Cursor$initial_getInstance(), Cursor$inherit_getInstance(), Cursor$unset_getInstance(), Cursor$auto_getInstance(), Cursor$default_getInstance(), Cursor$none_getInstance(), Cursor$contextMenu_getInstance(), Cursor$help_getInstance(), Cursor$pointer_getInstance(), Cursor$progress_getInstance(), Cursor$wait_getInstance(), Cursor$cell_getInstance(), Cursor$crosshair_getInstance(), Cursor$text_getInstance(), Cursor$verticalText_getInstance(), Cursor$alias_getInstance(), Cursor$copy_getInstance(), Cursor$move_getInstance(), Cursor$noDrop_getInstance(), Cursor$notAllowed_getInstance(), Cursor$grab_getInstance(), Cursor$grabbing_getInstance(), Cursor$colResize_getInstance(), Cursor$rowResize_getInstance(), Cursor$allScroll_getInstance(), Cursor$eResize_getInstance(), Cursor$nResize_getInstance(), Cursor$neResize_getInstance(), Cursor$nwResize_getInstance(), Cursor$sResize_getInstance(), Cursor$seResize_getInstance(), Cursor$swResize_getInstance(), Cursor$wResize_getInstance(), Cursor$ewResize_getInstance(), Cursor$nsResize_getInstance(), Cursor$neswResize_getInstance(), Cursor$nwseResize_getInstance(), Cursor$zoomIn_getInstance(), Cursor$zoomOut_getInstance()];
  }
  Cursor.values = Cursor$values;
  function Cursor$valueOf(name) {
    switch (name) {
      case 'initial':
        return Cursor$initial_getInstance();
      case 'inherit':
        return Cursor$inherit_getInstance();
      case 'unset':
        return Cursor$unset_getInstance();
      case 'auto':
        return Cursor$auto_getInstance();
      case 'default':
        return Cursor$default_getInstance();
      case 'none':
        return Cursor$none_getInstance();
      case 'contextMenu':
        return Cursor$contextMenu_getInstance();
      case 'help':
        return Cursor$help_getInstance();
      case 'pointer':
        return Cursor$pointer_getInstance();
      case 'progress':
        return Cursor$progress_getInstance();
      case 'wait':
        return Cursor$wait_getInstance();
      case 'cell':
        return Cursor$cell_getInstance();
      case 'crosshair':
        return Cursor$crosshair_getInstance();
      case 'text':
        return Cursor$text_getInstance();
      case 'verticalText':
        return Cursor$verticalText_getInstance();
      case 'alias':
        return Cursor$alias_getInstance();
      case 'copy':
        return Cursor$copy_getInstance();
      case 'move':
        return Cursor$move_getInstance();
      case 'noDrop':
        return Cursor$noDrop_getInstance();
      case 'notAllowed':
        return Cursor$notAllowed_getInstance();
      case 'grab':
        return Cursor$grab_getInstance();
      case 'grabbing':
        return Cursor$grabbing_getInstance();
      case 'colResize':
        return Cursor$colResize_getInstance();
      case 'rowResize':
        return Cursor$rowResize_getInstance();
      case 'allScroll':
        return Cursor$allScroll_getInstance();
      case 'eResize':
        return Cursor$eResize_getInstance();
      case 'nResize':
        return Cursor$nResize_getInstance();
      case 'neResize':
        return Cursor$neResize_getInstance();
      case 'nwResize':
        return Cursor$nwResize_getInstance();
      case 'sResize':
        return Cursor$sResize_getInstance();
      case 'seResize':
        return Cursor$seResize_getInstance();
      case 'swResize':
        return Cursor$swResize_getInstance();
      case 'wResize':
        return Cursor$wResize_getInstance();
      case 'ewResize':
        return Cursor$ewResize_getInstance();
      case 'nsResize':
        return Cursor$nsResize_getInstance();
      case 'neswResize':
        return Cursor$neswResize_getInstance();
      case 'nwseResize':
        return Cursor$nwseResize_getInstance();
      case 'zoomIn':
        return Cursor$zoomIn_getInstance();
      case 'zoomOut':
        return Cursor$zoomOut_getInstance();
      default:throwISE('No enum constant kotlinx.css.Cursor.' + name);
    }
  }
  Cursor.valueOf_61zpoe$ = Cursor$valueOf;
  function QuotedString(value) {
    CssValue.call(this, value);
    this.value_eybwfw$_0 = value;
  }
  Object.defineProperty(QuotedString.prototype, 'value', {
    get: function () {
      return this.value_eybwfw$_0;
    }
  });
  QuotedString.prototype.toString = function () {
    return "'" + this.value + "'";
  };
  QuotedString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QuotedString',
    interfaces: [CssValue]
  };
  function get_quoted($receiver) {
    return new QuotedString($receiver);
  }
  function Direction(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$initial_instance = new Direction('initial', 0);
    Direction$inherit_instance = new Direction('inherit', 1);
    Direction$unset_instance = new Direction('unset', 2);
    Direction$ltr_instance = new Direction('ltr', 3);
    Direction$rtl_instance = new Direction('rtl', 4);
  }
  var Direction$initial_instance;
  function Direction$initial_getInstance() {
    Direction_initFields();
    return Direction$initial_instance;
  }
  var Direction$inherit_instance;
  function Direction$inherit_getInstance() {
    Direction_initFields();
    return Direction$inherit_instance;
  }
  var Direction$unset_instance;
  function Direction$unset_getInstance() {
    Direction_initFields();
    return Direction$unset_instance;
  }
  var Direction$ltr_instance;
  function Direction$ltr_getInstance() {
    Direction_initFields();
    return Direction$ltr_instance;
  }
  var Direction$rtl_instance;
  function Direction$rtl_getInstance() {
    Direction_initFields();
    return Direction$rtl_instance;
  }
  Direction.prototype.toString = function () {
    return this.name;
  };
  Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Direction$values() {
    return [Direction$initial_getInstance(), Direction$inherit_getInstance(), Direction$unset_getInstance(), Direction$ltr_getInstance(), Direction$rtl_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'initial':
        return Direction$initial_getInstance();
      case 'inherit':
        return Direction$inherit_getInstance();
      case 'unset':
        return Direction$unset_getInstance();
      case 'ltr':
        return Direction$ltr_getInstance();
      case 'rtl':
        return Direction$rtl_getInstance();
      default:throwISE('No enum constant kotlinx.css.Direction.' + name);
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function Display(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Display_initFields() {
    Display_initFields = function () {
    };
    Display$initial_instance = new Display('initial', 0);
    Display$inherit_instance = new Display('inherit', 1);
    Display$unset_instance = new Display('unset', 2);
    Display$block_instance = new Display('block', 3);
    Display$inline_instance = new Display('inline', 4);
    Display$runIn_instance = new Display('runIn', 5);
    Display$flow_instance = new Display('flow', 6);
    Display$flowRoot_instance = new Display('flowRoot', 7);
    Display$table_instance = new Display('table', 8);
    Display$flex_instance = new Display('flex', 9);
    Display$grid_instance = new Display('grid', 10);
    Display$subgrid_instance = new Display('subgrid', 11);
    Display$listItem_instance = new Display('listItem', 12);
    Display$tableRowGroup_instance = new Display('tableRowGroup', 13);
    Display$tableHeaderGroup_instance = new Display('tableHeaderGroup', 14);
    Display$tableFooterGroup_instance = new Display('tableFooterGroup', 15);
    Display$tableRow_instance = new Display('tableRow', 16);
    Display$tableCell_instance = new Display('tableCell', 17);
    Display$tableColumnGroup_instance = new Display('tableColumnGroup', 18);
    Display$tableColumn_instance = new Display('tableColumn', 19);
    Display$tableCaption_instance = new Display('tableCaption', 20);
    Display$contents_instance = new Display('contents', 21);
    Display$none_instance = new Display('none', 22);
    Display$inlineBlock_instance = new Display('inlineBlock', 23);
    Display$inlineListItem_instance = new Display('inlineListItem', 24);
    Display$inlineTable_instance = new Display('inlineTable', 25);
    Display$inlineFlex_instance = new Display('inlineFlex', 26);
    Display$inlineGrid_instance = new Display('inlineGrid', 27);
  }
  var Display$initial_instance;
  function Display$initial_getInstance() {
    Display_initFields();
    return Display$initial_instance;
  }
  var Display$inherit_instance;
  function Display$inherit_getInstance() {
    Display_initFields();
    return Display$inherit_instance;
  }
  var Display$unset_instance;
  function Display$unset_getInstance() {
    Display_initFields();
    return Display$unset_instance;
  }
  var Display$block_instance;
  function Display$block_getInstance() {
    Display_initFields();
    return Display$block_instance;
  }
  var Display$inline_instance;
  function Display$inline_getInstance() {
    Display_initFields();
    return Display$inline_instance;
  }
  var Display$runIn_instance;
  function Display$runIn_getInstance() {
    Display_initFields();
    return Display$runIn_instance;
  }
  var Display$flow_instance;
  function Display$flow_getInstance() {
    Display_initFields();
    return Display$flow_instance;
  }
  var Display$flowRoot_instance;
  function Display$flowRoot_getInstance() {
    Display_initFields();
    return Display$flowRoot_instance;
  }
  var Display$table_instance;
  function Display$table_getInstance() {
    Display_initFields();
    return Display$table_instance;
  }
  var Display$flex_instance;
  function Display$flex_getInstance() {
    Display_initFields();
    return Display$flex_instance;
  }
  var Display$grid_instance;
  function Display$grid_getInstance() {
    Display_initFields();
    return Display$grid_instance;
  }
  var Display$subgrid_instance;
  function Display$subgrid_getInstance() {
    Display_initFields();
    return Display$subgrid_instance;
  }
  var Display$listItem_instance;
  function Display$listItem_getInstance() {
    Display_initFields();
    return Display$listItem_instance;
  }
  var Display$tableRowGroup_instance;
  function Display$tableRowGroup_getInstance() {
    Display_initFields();
    return Display$tableRowGroup_instance;
  }
  var Display$tableHeaderGroup_instance;
  function Display$tableHeaderGroup_getInstance() {
    Display_initFields();
    return Display$tableHeaderGroup_instance;
  }
  var Display$tableFooterGroup_instance;
  function Display$tableFooterGroup_getInstance() {
    Display_initFields();
    return Display$tableFooterGroup_instance;
  }
  var Display$tableRow_instance;
  function Display$tableRow_getInstance() {
    Display_initFields();
    return Display$tableRow_instance;
  }
  var Display$tableCell_instance;
  function Display$tableCell_getInstance() {
    Display_initFields();
    return Display$tableCell_instance;
  }
  var Display$tableColumnGroup_instance;
  function Display$tableColumnGroup_getInstance() {
    Display_initFields();
    return Display$tableColumnGroup_instance;
  }
  var Display$tableColumn_instance;
  function Display$tableColumn_getInstance() {
    Display_initFields();
    return Display$tableColumn_instance;
  }
  var Display$tableCaption_instance;
  function Display$tableCaption_getInstance() {
    Display_initFields();
    return Display$tableCaption_instance;
  }
  var Display$contents_instance;
  function Display$contents_getInstance() {
    Display_initFields();
    return Display$contents_instance;
  }
  var Display$none_instance;
  function Display$none_getInstance() {
    Display_initFields();
    return Display$none_instance;
  }
  var Display$inlineBlock_instance;
  function Display$inlineBlock_getInstance() {
    Display_initFields();
    return Display$inlineBlock_instance;
  }
  var Display$inlineListItem_instance;
  function Display$inlineListItem_getInstance() {
    Display_initFields();
    return Display$inlineListItem_instance;
  }
  var Display$inlineTable_instance;
  function Display$inlineTable_getInstance() {
    Display_initFields();
    return Display$inlineTable_instance;
  }
  var Display$inlineFlex_instance;
  function Display$inlineFlex_getInstance() {
    Display_initFields();
    return Display$inlineFlex_instance;
  }
  var Display$inlineGrid_instance;
  function Display$inlineGrid_getInstance() {
    Display_initFields();
    return Display$inlineGrid_instance;
  }
  Display.prototype.toString = function () {
    return hyphenize(this.name);
  };
  Display.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Display',
    interfaces: [Enum]
  };
  function Display$values() {
    return [Display$initial_getInstance(), Display$inherit_getInstance(), Display$unset_getInstance(), Display$block_getInstance(), Display$inline_getInstance(), Display$runIn_getInstance(), Display$flow_getInstance(), Display$flowRoot_getInstance(), Display$table_getInstance(), Display$flex_getInstance(), Display$grid_getInstance(), Display$subgrid_getInstance(), Display$listItem_getInstance(), Display$tableRowGroup_getInstance(), Display$tableHeaderGroup_getInstance(), Display$tableFooterGroup_getInstance(), Display$tableRow_getInstance(), Display$tableCell_getInstance(), Display$tableColumnGroup_getInstance(), Display$tableColumn_getInstance(), Display$tableCaption_getInstance(), Display$contents_getInstance(), Display$none_getInstance(), Display$inlineBlock_getInstance(), Display$inlineListItem_getInstance(), Display$inlineTable_getInstance(), Display$inlineFlex_getInstance(), Display$inlineGrid_getInstance()];
  }
  Display.values = Display$values;
  function Display$valueOf(name) {
    switch (name) {
      case 'initial':
        return Display$initial_getInstance();
      case 'inherit':
        return Display$inherit_getInstance();
      case 'unset':
        return Display$unset_getInstance();
      case 'block':
        return Display$block_getInstance();
      case 'inline':
        return Display$inline_getInstance();
      case 'runIn':
        return Display$runIn_getInstance();
      case 'flow':
        return Display$flow_getInstance();
      case 'flowRoot':
        return Display$flowRoot_getInstance();
      case 'table':
        return Display$table_getInstance();
      case 'flex':
        return Display$flex_getInstance();
      case 'grid':
        return Display$grid_getInstance();
      case 'subgrid':
        return Display$subgrid_getInstance();
      case 'listItem':
        return Display$listItem_getInstance();
      case 'tableRowGroup':
        return Display$tableRowGroup_getInstance();
      case 'tableHeaderGroup':
        return Display$tableHeaderGroup_getInstance();
      case 'tableFooterGroup':
        return Display$tableFooterGroup_getInstance();
      case 'tableRow':
        return Display$tableRow_getInstance();
      case 'tableCell':
        return Display$tableCell_getInstance();
      case 'tableColumnGroup':
        return Display$tableColumnGroup_getInstance();
      case 'tableColumn':
        return Display$tableColumn_getInstance();
      case 'tableCaption':
        return Display$tableCaption_getInstance();
      case 'contents':
        return Display$contents_getInstance();
      case 'none':
        return Display$none_getInstance();
      case 'inlineBlock':
        return Display$inlineBlock_getInstance();
      case 'inlineListItem':
        return Display$inlineListItem_getInstance();
      case 'inlineTable':
        return Display$inlineTable_getInstance();
      case 'inlineFlex':
        return Display$inlineFlex_getInstance();
      case 'inlineGrid':
        return Display$inlineGrid_getInstance();
      default:throwISE('No enum constant kotlinx.css.Display.' + name);
    }
  }
  Display.valueOf_61zpoe$ = Display$valueOf;
  function FlexBasis(value) {
    FlexBasis$Companion_getInstance();
    CssValue.call(this, value);
    this.value_9fukh8$_0 = value;
  }
  Object.defineProperty(FlexBasis.prototype, 'value', {
    get: function () {
      return this.value_9fukh8$_0;
    }
  });
  function FlexBasis$Companion() {
    FlexBasis$Companion_instance = this;
    this.initial = new FlexBasis('initial');
    this.inherit = new FlexBasis('inherit');
    this.unset = new FlexBasis('unset');
    this.auto = new FlexBasis('auto');
    this.content = new FlexBasis('content');
    this.minContent = new FlexBasis('min-content');
    this.maxContent = new FlexBasis('max-content');
    this.fitContent = new FlexBasis('fit-content');
    this.fill = new FlexBasis('fill');
    this.zero = new FlexBasis('0');
  }
  FlexBasis$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FlexBasis$Companion_instance = null;
  function FlexBasis$Companion_getInstance() {
    if (FlexBasis$Companion_instance === null) {
      new FlexBasis$Companion();
    }return FlexBasis$Companion_instance;
  }
  FlexBasis.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlexBasis',
    interfaces: [CssValue]
  };
  function get_basis($receiver) {
    return new FlexBasis($receiver.toString());
  }
  function FlexWrap(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FlexWrap_initFields() {
    FlexWrap_initFields = function () {
    };
    FlexWrap$initial_instance = new FlexWrap('initial', 0);
    FlexWrap$inherit_instance = new FlexWrap('inherit', 1);
    FlexWrap$unset_instance = new FlexWrap('unset', 2);
    FlexWrap$nowrap_instance = new FlexWrap('nowrap', 3);
    FlexWrap$wrap_instance = new FlexWrap('wrap', 4);
    FlexWrap$wrapReverse_instance = new FlexWrap('wrapReverse', 5);
  }
  var FlexWrap$initial_instance;
  function FlexWrap$initial_getInstance() {
    FlexWrap_initFields();
    return FlexWrap$initial_instance;
  }
  var FlexWrap$inherit_instance;
  function FlexWrap$inherit_getInstance() {
    FlexWrap_initFields();
    return FlexWrap$inherit_instance;
  }
  var FlexWrap$unset_instance;
  function FlexWrap$unset_getInstance() {
    FlexWrap_initFields();
    return FlexWrap$unset_instance;
  }
  var FlexWrap$nowrap_instance;
  function FlexWrap$nowrap_getInstance() {
    FlexWrap_initFields();
    return FlexWrap$nowrap_instance;
  }
  var FlexWrap$wrap_instance;
  function FlexWrap$wrap_getInstance() {
    FlexWrap_initFields();
    return FlexWrap$wrap_instance;
  }
  var FlexWrap$wrapReverse_instance;
  function FlexWrap$wrapReverse_getInstance() {
    FlexWrap_initFields();
    return FlexWrap$wrapReverse_instance;
  }
  FlexWrap.prototype.toString = function () {
    return hyphenize(this.name);
  };
  FlexWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlexWrap',
    interfaces: [Enum]
  };
  function FlexWrap$values() {
    return [FlexWrap$initial_getInstance(), FlexWrap$inherit_getInstance(), FlexWrap$unset_getInstance(), FlexWrap$nowrap_getInstance(), FlexWrap$wrap_getInstance(), FlexWrap$wrapReverse_getInstance()];
  }
  FlexWrap.values = FlexWrap$values;
  function FlexWrap$valueOf(name) {
    switch (name) {
      case 'initial':
        return FlexWrap$initial_getInstance();
      case 'inherit':
        return FlexWrap$inherit_getInstance();
      case 'unset':
        return FlexWrap$unset_getInstance();
      case 'nowrap':
        return FlexWrap$nowrap_getInstance();
      case 'wrap':
        return FlexWrap$wrap_getInstance();
      case 'wrapReverse':
        return FlexWrap$wrapReverse_getInstance();
      default:throwISE('No enum constant kotlinx.css.FlexWrap.' + name);
    }
  }
  FlexWrap.valueOf_61zpoe$ = FlexWrap$valueOf;
  function Float(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Float_initFields() {
    Float_initFields = function () {
    };
    Float$initial_instance = new Float('initial', 0);
    Float$inherit_instance = new Float('inherit', 1);
    Float$unset_instance = new Float('unset', 2);
    Float$left_instance = new Float('left', 3);
    Float$right_instance = new Float('right', 4);
    Float$none_instance = new Float('none', 5);
  }
  var Float$initial_instance;
  function Float$initial_getInstance() {
    Float_initFields();
    return Float$initial_instance;
  }
  var Float$inherit_instance;
  function Float$inherit_getInstance() {
    Float_initFields();
    return Float$inherit_instance;
  }
  var Float$unset_instance;
  function Float$unset_getInstance() {
    Float_initFields();
    return Float$unset_instance;
  }
  var Float$left_instance;
  function Float$left_getInstance() {
    Float_initFields();
    return Float$left_instance;
  }
  var Float$right_instance;
  function Float$right_getInstance() {
    Float_initFields();
    return Float$right_instance;
  }
  var Float$none_instance;
  function Float$none_getInstance() {
    Float_initFields();
    return Float$none_instance;
  }
  Float.prototype.toString = function () {
    return hyphenize(this.name);
  };
  Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Float',
    interfaces: [Enum]
  };
  function Float$values() {
    return [Float$initial_getInstance(), Float$inherit_getInstance(), Float$unset_getInstance(), Float$left_getInstance(), Float$right_getInstance(), Float$none_getInstance()];
  }
  Float.values = Float$values;
  function Float$valueOf(name) {
    switch (name) {
      case 'initial':
        return Float$initial_getInstance();
      case 'inherit':
        return Float$inherit_getInstance();
      case 'unset':
        return Float$unset_getInstance();
      case 'left':
        return Float$left_getInstance();
      case 'right':
        return Float$right_getInstance();
      case 'none':
        return Float$none_getInstance();
      default:throwISE('No enum constant kotlinx.css.Float.' + name);
    }
  }
  Float.valueOf_61zpoe$ = Float$valueOf;
  function FontWeight(value) {
    FontWeight$Companion_getInstance();
    CssValue.call(this, value);
    this.value_sy9x9q$_0 = value;
  }
  Object.defineProperty(FontWeight.prototype, 'value', {
    get: function () {
      return this.value_sy9x9q$_0;
    }
  });
  function FontWeight$Companion() {
    FontWeight$Companion_instance = this;
    this.initial = new FontWeight('initial');
    this.inherit = new FontWeight('inherit');
    this.unset = new FontWeight('unset');
    this.normal = new FontWeight('normal');
    this.bold = new FontWeight('bold');
    this.bolder = new FontWeight('bolder');
    this.lighter = new FontWeight('lighter');
    this.w900 = new FontWeight('900');
    this.w800 = new FontWeight('800');
    this.w700 = new FontWeight('700');
    this.w600 = new FontWeight('600');
    this.w500 = new FontWeight('500');
    this.w400 = new FontWeight('400');
    this.w300 = new FontWeight('300');
    this.w200 = new FontWeight('200');
    this.w100 = new FontWeight('100');
  }
  FontWeight$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FontWeight$Companion_instance = null;
  function FontWeight$Companion_getInstance() {
    if (FontWeight$Companion_instance === null) {
      new FontWeight$Companion();
    }return FontWeight$Companion_instance;
  }
  FontWeight.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FontWeight',
    interfaces: [CssValue]
  };
  function FontStyle(value) {
    FontStyle$Companion_getInstance();
    CssValue.call(this, value);
    this.value_xxe7vb$_0 = value;
  }
  Object.defineProperty(FontStyle.prototype, 'value', {
    get: function () {
      return this.value_xxe7vb$_0;
    }
  });
  function FontStyle$Companion() {
    FontStyle$Companion_instance = this;
    this.initial = new FontStyle('initial');
    this.inherit = new FontStyle('inherit');
    this.unset = new FontStyle('unset');
    this.normal = new FontStyle('normal');
    this.italic = new FontStyle('italic');
  }
  FontStyle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FontStyle$Companion_instance = null;
  function FontStyle$Companion_getInstance() {
    if (FontStyle$Companion_instance === null) {
      new FontStyle$Companion();
    }return FontStyle$Companion_instance;
  }
  FontStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FontStyle',
    interfaces: [CssValue]
  };
  function FlexDirection(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FlexDirection_initFields() {
    FlexDirection_initFields = function () {
    };
    FlexDirection$initial_instance = new FlexDirection('initial', 0);
    FlexDirection$inherit_instance = new FlexDirection('inherit', 1);
    FlexDirection$unset_instance = new FlexDirection('unset', 2);
    FlexDirection$column_instance = new FlexDirection('column', 3);
    FlexDirection$columnReverse_instance = new FlexDirection('columnReverse', 4);
    FlexDirection$row_instance = new FlexDirection('row', 5);
    FlexDirection$rowReverse_instance = new FlexDirection('rowReverse', 6);
  }
  var FlexDirection$initial_instance;
  function FlexDirection$initial_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$initial_instance;
  }
  var FlexDirection$inherit_instance;
  function FlexDirection$inherit_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$inherit_instance;
  }
  var FlexDirection$unset_instance;
  function FlexDirection$unset_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$unset_instance;
  }
  var FlexDirection$column_instance;
  function FlexDirection$column_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$column_instance;
  }
  var FlexDirection$columnReverse_instance;
  function FlexDirection$columnReverse_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$columnReverse_instance;
  }
  var FlexDirection$row_instance;
  function FlexDirection$row_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$row_instance;
  }
  var FlexDirection$rowReverse_instance;
  function FlexDirection$rowReverse_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$rowReverse_instance;
  }
  FlexDirection.prototype.toString = function () {
    return hyphenize(this.name);
  };
  FlexDirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlexDirection',
    interfaces: [Enum]
  };
  function FlexDirection$values() {
    return [FlexDirection$initial_getInstance(), FlexDirection$inherit_getInstance(), FlexDirection$unset_getInstance(), FlexDirection$column_getInstance(), FlexDirection$columnReverse_getInstance(), FlexDirection$row_getInstance(), FlexDirection$rowReverse_getInstance()];
  }
  FlexDirection.values = FlexDirection$values;
  function FlexDirection$valueOf(name) {
    switch (name) {
      case 'initial':
        return FlexDirection$initial_getInstance();
      case 'inherit':
        return FlexDirection$inherit_getInstance();
      case 'unset':
        return FlexDirection$unset_getInstance();
      case 'column':
        return FlexDirection$column_getInstance();
      case 'columnReverse':
        return FlexDirection$columnReverse_getInstance();
      case 'row':
        return FlexDirection$row_getInstance();
      case 'rowReverse':
        return FlexDirection$rowReverse_getInstance();
      default:throwISE('No enum constant kotlinx.css.FlexDirection.' + name);
    }
  }
  FlexDirection.valueOf_61zpoe$ = FlexDirection$valueOf;
  function Gap(value) {
    Gap$Companion_getInstance();
    CssValue.call(this, value);
    this.value_21bt25$_0 = value;
  }
  Object.defineProperty(Gap.prototype, 'value', {
    get: function () {
      return this.value_21bt25$_0;
    }
  });
  function Gap$Companion() {
    Gap$Companion_instance = this;
    this.initial = new Gap('initial');
    this.inherit = new Gap('inherit');
    this.normal = new Gap('normal');
    this.unset = new Gap('unset');
  }
  Gap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Gap$Companion_instance = null;
  function Gap$Companion_getInstance() {
    if (Gap$Companion_instance === null) {
      new Gap$Companion();
    }return Gap$Companion_instance;
  }
  Gap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gap',
    interfaces: [CssValue]
  };
  function GridAutoColumns(value) {
    GridAutoColumns$Companion_getInstance();
    CssValue.call(this, value);
    this.value_fxe4dt$_0 = value;
  }
  Object.defineProperty(GridAutoColumns.prototype, 'value', {
    get: function () {
      return this.value_fxe4dt$_0;
    }
  });
  function GridAutoColumns$Companion() {
    GridAutoColumns$Companion_instance = this;
    this.auto = new GridAutoColumns('auto');
    this.maxContent = new GridAutoColumns('max-content');
    this.minContent = new GridAutoColumns('min-content');
  }
  GridAutoColumns$Companion.prototype.fitContent_31gyca$ = function (argument) {
    return new GridAutoColumns('min-max(auto, max(auto, ' + argument + '))');
  };
  GridAutoColumns$Companion.prototype.minMax_5utlym$ = function (min, max) {
    return new GridAutoColumns('min-max(' + min + ', ' + max + ')');
  };
  GridAutoColumns$Companion.prototype.minMax_9k2y74$ = function (min, max) {
    return new GridAutoColumns('min-max(' + min + ', ' + max + ')');
  };
  GridAutoColumns$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridAutoColumns$Companion_instance = null;
  function GridAutoColumns$Companion_getInstance() {
    if (GridAutoColumns$Companion_instance === null) {
      new GridAutoColumns$Companion();
    }return GridAutoColumns$Companion_instance;
  }
  GridAutoColumns.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridAutoColumns',
    interfaces: [CssValue]
  };
  function GridAutoColumns_init(dims, $this) {
    $this = $this || Object.create(GridAutoColumns.prototype);
    GridAutoColumns.call($this, joinToString(dims, ' '));
    return $this;
  }
  function GridAutoColumns_init_0(values, $this) {
    $this = $this || Object.create(GridAutoColumns.prototype);
    GridAutoColumns.call($this, joinToString(values, ' '));
    return $this;
  }
  function GridAutoFlow(value) {
    GridAutoFlow$Companion_getInstance();
    CssValue.call(this, value);
    this.value_d7n3w2$_0 = value;
  }
  Object.defineProperty(GridAutoFlow.prototype, 'value', {
    get: function () {
      return this.value_d7n3w2$_0;
    }
  });
  function GridAutoFlow$Companion() {
    GridAutoFlow$Companion_instance = this;
    this.initial = new GridAutoFlow('initial');
    this.inherit = new GridAutoFlow('inherit');
    this.unset = new GridAutoFlow('unset');
    this.column = new GridAutoFlow('column');
    this.columnDense = new GridAutoFlow('column dense');
    this.dense = new GridAutoFlow('dense');
    this.row = new GridAutoFlow('row');
    this.rowDense = new GridAutoFlow('row dense');
  }
  GridAutoFlow$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridAutoFlow$Companion_instance = null;
  function GridAutoFlow$Companion_getInstance() {
    if (GridAutoFlow$Companion_instance === null) {
      new GridAutoFlow$Companion();
    }return GridAutoFlow$Companion_instance;
  }
  GridAutoFlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridAutoFlow',
    interfaces: [CssValue]
  };
  function GridAutoRows(value) {
    GridAutoRows$Companion_getInstance();
    CssValue.call(this, value);
    this.value_2q2u7b$_0 = value;
  }
  Object.defineProperty(GridAutoRows.prototype, 'value', {
    get: function () {
      return this.value_2q2u7b$_0;
    }
  });
  function GridAutoRows$Companion() {
    GridAutoRows$Companion_instance = this;
    this.auto = new GridAutoRows('auto');
    this.maxContent = new GridAutoRows('max-content');
    this.minContent = new GridAutoRows('min-content');
  }
  GridAutoRows$Companion.prototype.fitContent_s5vmxc$ = function (argument) {
    return new GridAutoRows('min-max(auto, max(auto, ' + argument + '))');
  };
  GridAutoRows$Companion.prototype.minMax_5utlym$ = function (min, max) {
    return new GridAutoRows('min-max(' + min + ', ' + max + ')');
  };
  GridAutoRows$Companion.prototype.minMax_l0cmr0$ = function (min, max) {
    return new GridAutoRows('min-max(' + min + ', ' + max + ')');
  };
  GridAutoRows$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridAutoRows$Companion_instance = null;
  function GridAutoRows$Companion_getInstance() {
    if (GridAutoRows$Companion_instance === null) {
      new GridAutoRows$Companion();
    }return GridAutoRows$Companion_instance;
  }
  GridAutoRows.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridAutoRows',
    interfaces: [CssValue]
  };
  function GridAutoRows_init(dims, $this) {
    $this = $this || Object.create(GridAutoRows.prototype);
    GridAutoRows.call($this, joinToString(dims, ' '));
    return $this;
  }
  function GridAutoRows_init_0(values, $this) {
    $this = $this || Object.create(GridAutoRows.prototype);
    GridAutoRows.call($this, joinToString(values, ' '));
    return $this;
  }
  function GridColumn(value) {
    GridColumn$Companion_getInstance();
    CssValue.call(this, value);
    this.value_jex093$_0 = value;
  }
  Object.defineProperty(GridColumn.prototype, 'value', {
    get: function () {
      return this.value_jex093$_0;
    }
  });
  function GridColumn$Companion() {
    GridColumn$Companion_instance = this;
    this.auto = new GridColumn('auto');
  }
  GridColumn$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridColumn$Companion_instance = null;
  function GridColumn$Companion_getInstance() {
    if (GridColumn$Companion_instance === null) {
      new GridColumn$Companion();
    }return GridColumn$Companion_instance;
  }
  GridColumn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridColumn',
    interfaces: [CssValue]
  };
  function GridColumnEnd(value) {
    GridColumnEnd$Companion_getInstance();
    CssValue.call(this, value);
    this.value_c3z42i$_0 = value;
  }
  Object.defineProperty(GridColumnEnd.prototype, 'value', {
    get: function () {
      return this.value_c3z42i$_0;
    }
  });
  function GridColumnEnd$Companion() {
    GridColumnEnd$Companion_instance = this;
    this.auto = new GridColumnEnd('auto');
  }
  GridColumnEnd$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridColumnEnd$Companion_instance = null;
  function GridColumnEnd$Companion_getInstance() {
    if (GridColumnEnd$Companion_instance === null) {
      new GridColumnEnd$Companion();
    }return GridColumnEnd$Companion_instance;
  }
  GridColumnEnd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridColumnEnd',
    interfaces: [CssValue]
  };
  function GridColumnGap(value) {
    GridColumnGap$Companion_getInstance();
    CssValue.call(this, value);
    this.value_trslq7$_0 = value;
  }
  Object.defineProperty(GridColumnGap.prototype, 'value', {
    get: function () {
      return this.value_trslq7$_0;
    }
  });
  function GridColumnGap$Companion() {
    GridColumnGap$Companion_instance = this;
    this.initial = new GridColumnGap('initial');
    this.inherit = new GridColumnGap('inherit');
    this.normal = new GridColumnGap('normal');
    this.unset = new GridColumnGap('unset');
  }
  GridColumnGap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridColumnGap$Companion_instance = null;
  function GridColumnGap$Companion_getInstance() {
    if (GridColumnGap$Companion_instance === null) {
      new GridColumnGap$Companion();
    }return GridColumnGap$Companion_instance;
  }
  GridColumnGap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridColumnGap',
    interfaces: [CssValue]
  };
  function GridColumnStart(value) {
    GridColumnStart$Companion_getInstance();
    CssValue.call(this, value);
    this.value_r3r0t$_0 = value;
  }
  Object.defineProperty(GridColumnStart.prototype, 'value', {
    get: function () {
      return this.value_r3r0t$_0;
    }
  });
  function GridColumnStart$Companion() {
    GridColumnStart$Companion_instance = this;
    this.auto = new GridColumnStart('auto');
  }
  GridColumnStart$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridColumnStart$Companion_instance = null;
  function GridColumnStart$Companion_getInstance() {
    if (GridColumnStart$Companion_instance === null) {
      new GridColumnStart$Companion();
    }return GridColumnStart$Companion_instance;
  }
  GridColumnStart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridColumnStart',
    interfaces: [CssValue]
  };
  function GridGap(value) {
    GridGap$Companion_getInstance();
    CssValue.call(this, value);
    this.value_kvuxvt$_0 = value;
  }
  Object.defineProperty(GridGap.prototype, 'value', {
    get: function () {
      return this.value_kvuxvt$_0;
    }
  });
  function GridGap$Companion() {
    GridGap$Companion_instance = this;
    this.initial = new GridGap('initial');
    this.inherit = new GridGap('inherit');
    this.unset = new GridGap('unset');
  }
  GridGap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridGap$Companion_instance = null;
  function GridGap$Companion_getInstance() {
    if (GridGap$Companion_instance === null) {
      new GridGap$Companion();
    }return GridGap$Companion_instance;
  }
  GridGap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridGap',
    interfaces: [CssValue]
  };
  function GridRow(value) {
    GridRow$Companion_getInstance();
    CssValue.call(this, value);
    this.value_ihziij$_0 = value;
  }
  Object.defineProperty(GridRow.prototype, 'value', {
    get: function () {
      return this.value_ihziij$_0;
    }
  });
  function GridRow$Companion() {
    GridRow$Companion_instance = this;
    this.auto = new GridRow('auto');
  }
  GridRow$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridRow$Companion_instance = null;
  function GridRow$Companion_getInstance() {
    if (GridRow$Companion_instance === null) {
      new GridRow$Companion();
    }return GridRow$Companion_instance;
  }
  GridRow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridRow',
    interfaces: [CssValue]
  };
  function GridRowEnd(value) {
    GridRowEnd$Companion_getInstance();
    CssValue.call(this, value);
    this.value_cz4jzm$_0 = value;
  }
  Object.defineProperty(GridRowEnd.prototype, 'value', {
    get: function () {
      return this.value_cz4jzm$_0;
    }
  });
  function GridRowEnd$Companion() {
    GridRowEnd$Companion_instance = this;
    this.auto = new GridRowEnd('auto');
  }
  GridRowEnd$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridRowEnd$Companion_instance = null;
  function GridRowEnd$Companion_getInstance() {
    if (GridRowEnd$Companion_instance === null) {
      new GridRowEnd$Companion();
    }return GridRowEnd$Companion_instance;
  }
  GridRowEnd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridRowEnd',
    interfaces: [CssValue]
  };
  function GridRowGap(value) {
    GridRowGap$Companion_getInstance();
    CssValue.call(this, value);
    this.value_4ooxo3$_0 = value;
  }
  Object.defineProperty(GridRowGap.prototype, 'value', {
    get: function () {
      return this.value_4ooxo3$_0;
    }
  });
  function GridRowGap$Companion() {
    GridRowGap$Companion_instance = this;
    this.initial = new GridRowGap('initial');
    this.inherit = new GridRowGap('inherit');
    this.normal = new GridRowGap('normal');
    this.unset = new GridRowGap('unset');
  }
  GridRowGap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridRowGap$Companion_instance = null;
  function GridRowGap$Companion_getInstance() {
    if (GridRowGap$Companion_instance === null) {
      new GridRowGap$Companion();
    }return GridRowGap$Companion_instance;
  }
  GridRowGap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridRowGap',
    interfaces: [CssValue]
  };
  function GridRowStart(value) {
    GridRowStart$Companion_getInstance();
    CssValue.call(this, value);
    this.value_t2udqx$_0 = value;
  }
  Object.defineProperty(GridRowStart.prototype, 'value', {
    get: function () {
      return this.value_t2udqx$_0;
    }
  });
  function GridRowStart$Companion() {
    GridRowStart$Companion_instance = this;
    this.auto = new GridRowStart('auto');
  }
  GridRowStart$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridRowStart$Companion_instance = null;
  function GridRowStart$Companion_getInstance() {
    if (GridRowStart$Companion_instance === null) {
      new GridRowStart$Companion();
    }return GridRowStart$Companion_instance;
  }
  GridRowStart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridRowStart',
    interfaces: [CssValue]
  };
  function GridTemplate(value) {
    GridTemplate$Companion_getInstance();
    CssValue.call(this, value);
    this.value_vh74d1$_0 = value;
  }
  Object.defineProperty(GridTemplate.prototype, 'value', {
    get: function () {
      return this.value_vh74d1$_0;
    }
  });
  function GridTemplate$Companion() {
    GridTemplate$Companion_instance = this;
    this.none = new GridTemplate('none');
  }
  GridTemplate$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridTemplate$Companion_instance = null;
  function GridTemplate$Companion_getInstance() {
    if (GridTemplate$Companion_instance === null) {
      new GridTemplate$Companion();
    }return GridTemplate$Companion_instance;
  }
  GridTemplate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridTemplate',
    interfaces: [CssValue]
  };
  function GridTemplateAreas(value) {
    GridTemplateAreas$Companion_getInstance();
    CssValue.call(this, value);
    this.value_r207bh$_0 = value;
  }
  Object.defineProperty(GridTemplateAreas.prototype, 'value', {
    get: function () {
      return this.value_r207bh$_0;
    }
  });
  function GridTemplateAreas$Companion() {
    GridTemplateAreas$Companion_instance = this;
    this.none = new GridTemplateAreas('none');
  }
  GridTemplateAreas$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridTemplateAreas$Companion_instance = null;
  function GridTemplateAreas$Companion_getInstance() {
    if (GridTemplateAreas$Companion_instance === null) {
      new GridTemplateAreas$Companion();
    }return GridTemplateAreas$Companion_instance;
  }
  GridTemplateAreas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridTemplateAreas',
    interfaces: [CssValue]
  };
  function GridTemplateColumns(value) {
    GridTemplateColumns$Companion_getInstance();
    CssValue.call(this, value);
    this.value_tgat6k$_0 = value;
  }
  Object.defineProperty(GridTemplateColumns.prototype, 'value', {
    get: function () {
      return this.value_tgat6k$_0;
    }
  });
  function GridTemplateColumns$Companion() {
    GridTemplateColumns$Companion_instance = this;
    this.auto = new GridTemplateColumns('auto');
    this.maxContent = new GridTemplateColumns('max-content');
    this.minContent = new GridTemplateColumns('min-content');
    this.none = new GridTemplateColumns('none');
  }
  GridTemplateColumns$Companion.prototype.fitContent_tco10h$ = function (dim) {
    return new GridTemplateColumns('min(max-content, max(auto, ' + dim + '))');
  };
  GridTemplateColumns$Companion.prototype.minMax_5utlym$ = function (min, max) {
    return new GridTemplateColumns('min-max(' + min + ', ' + max + ')');
  };
  GridTemplateColumns$Companion.prototype.minMax_8wir3q$ = function (min, max) {
    return new GridTemplateColumns('min-max(' + min + ', ' + max + ')');
  };
  GridTemplateColumns$Companion.prototype.repeat_61zpoe$ = function (argument) {
    return new GridTemplateColumns('repeat(' + argument + ')');
  };
  GridTemplateColumns$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridTemplateColumns$Companion_instance = null;
  function GridTemplateColumns$Companion_getInstance() {
    if (GridTemplateColumns$Companion_instance === null) {
      new GridTemplateColumns$Companion();
    }return GridTemplateColumns$Companion_instance;
  }
  GridTemplateColumns.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridTemplateColumns',
    interfaces: [CssValue]
  };
  function GridTemplateColumns_init(dims, $this) {
    $this = $this || Object.create(GridTemplateColumns.prototype);
    GridTemplateColumns.call($this, joinToString(dims, ' '));
    return $this;
  }
  function GridTemplateColumns_init_0(values, $this) {
    $this = $this || Object.create(GridTemplateColumns.prototype);
    GridTemplateColumns.call($this, joinToString(values, ' '));
    return $this;
  }
  function GridTemplateRows(value) {
    GridTemplateRows$Companion_getInstance();
    CssValue.call(this, value);
    this.value_vgeojg$_0 = value;
  }
  Object.defineProperty(GridTemplateRows.prototype, 'value', {
    get: function () {
      return this.value_vgeojg$_0;
    }
  });
  function GridTemplateRows$Companion() {
    GridTemplateRows$Companion_instance = this;
    this.auto = new GridTemplateRows('auto');
    this.maxContent = new GridTemplateRows('max-content');
    this.minContent = new GridTemplateRows('min-content');
    this.none = new GridTemplateRows('none');
  }
  GridTemplateRows$Companion.prototype.fitContent_tco10h$ = function (dim) {
    return new GridTemplateRows('min(max-content, max(auto, ' + dim + '))');
  };
  GridTemplateRows$Companion.prototype.minMax_5utlym$ = function (min, max) {
    return new GridTemplateRows('min-max(' + min + ', ' + max + ')');
  };
  GridTemplateRows$Companion.prototype.minMax_18libw$ = function (min, max) {
    return new GridTemplateRows('min-max(' + min + ', ' + max + ')');
  };
  GridTemplateRows$Companion.prototype.repeat_61zpoe$ = function (argument) {
    return new GridTemplateRows('repeat(' + argument + ')');
  };
  GridTemplateRows$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridTemplateRows$Companion_instance = null;
  function GridTemplateRows$Companion_getInstance() {
    if (GridTemplateRows$Companion_instance === null) {
      new GridTemplateRows$Companion();
    }return GridTemplateRows$Companion_instance;
  }
  GridTemplateRows.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridTemplateRows',
    interfaces: [CssValue]
  };
  function GridTemplateRows_init(dims, $this) {
    $this = $this || Object.create(GridTemplateRows.prototype);
    GridTemplateRows.call($this, joinToString(dims, ' '));
    return $this;
  }
  function GridTemplateRows_init_0(values, $this) {
    $this = $this || Object.create(GridTemplateRows.prototype);
    GridTemplateRows.call($this, joinToString(values, ' '));
    return $this;
  }
  function Grow(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Grow_initFields() {
    Grow_initFields = function () {
    };
    Grow$NONE_instance = new Grow('NONE', 0);
    Grow$GROW_instance = new Grow('GROW', 1);
    Grow$SHRINK_instance = new Grow('SHRINK', 2);
    Grow$GROW_SHRINK_instance = new Grow('GROW_SHRINK', 3);
  }
  var Grow$NONE_instance;
  function Grow$NONE_getInstance() {
    Grow_initFields();
    return Grow$NONE_instance;
  }
  var Grow$GROW_instance;
  function Grow$GROW_getInstance() {
    Grow_initFields();
    return Grow$GROW_instance;
  }
  var Grow$SHRINK_instance;
  function Grow$SHRINK_getInstance() {
    Grow_initFields();
    return Grow$SHRINK_instance;
  }
  var Grow$GROW_SHRINK_instance;
  function Grow$GROW_SHRINK_getInstance() {
    Grow_initFields();
    return Grow$GROW_SHRINK_instance;
  }
  Grow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Grow',
    interfaces: [Enum]
  };
  function Grow$values() {
    return [Grow$NONE_getInstance(), Grow$GROW_getInstance(), Grow$SHRINK_getInstance(), Grow$GROW_SHRINK_getInstance()];
  }
  Grow.values = Grow$values;
  function Grow$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Grow$NONE_getInstance();
      case 'GROW':
        return Grow$GROW_getInstance();
      case 'SHRINK':
        return Grow$SHRINK_getInstance();
      case 'GROW_SHRINK':
        return Grow$GROW_SHRINK_getInstance();
      default:throwISE('No enum constant kotlinx.css.Grow.' + name);
    }
  }
  Grow.valueOf_61zpoe$ = Grow$valueOf;
  function Hyphens(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Hyphens_initFields() {
    Hyphens_initFields = function () {
    };
    Hyphens$initial_instance = new Hyphens('initial', 0);
    Hyphens$inherit_instance = new Hyphens('inherit', 1);
    Hyphens$unset_instance = new Hyphens('unset', 2);
    Hyphens$none_instance = new Hyphens('none', 3);
    Hyphens$manual_instance = new Hyphens('manual', 4);
    Hyphens$auto_instance = new Hyphens('auto', 5);
  }
  var Hyphens$initial_instance;
  function Hyphens$initial_getInstance() {
    Hyphens_initFields();
    return Hyphens$initial_instance;
  }
  var Hyphens$inherit_instance;
  function Hyphens$inherit_getInstance() {
    Hyphens_initFields();
    return Hyphens$inherit_instance;
  }
  var Hyphens$unset_instance;
  function Hyphens$unset_getInstance() {
    Hyphens_initFields();
    return Hyphens$unset_instance;
  }
  var Hyphens$none_instance;
  function Hyphens$none_getInstance() {
    Hyphens_initFields();
    return Hyphens$none_instance;
  }
  var Hyphens$manual_instance;
  function Hyphens$manual_getInstance() {
    Hyphens_initFields();
    return Hyphens$manual_instance;
  }
  var Hyphens$auto_instance;
  function Hyphens$auto_getInstance() {
    Hyphens_initFields();
    return Hyphens$auto_instance;
  }
  Hyphens.prototype.toString = function () {
    return this.name;
  };
  Hyphens.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hyphens',
    interfaces: [Enum]
  };
  function Hyphens$values() {
    return [Hyphens$initial_getInstance(), Hyphens$inherit_getInstance(), Hyphens$unset_getInstance(), Hyphens$none_getInstance(), Hyphens$manual_getInstance(), Hyphens$auto_getInstance()];
  }
  Hyphens.values = Hyphens$values;
  function Hyphens$valueOf(name) {
    switch (name) {
      case 'initial':
        return Hyphens$initial_getInstance();
      case 'inherit':
        return Hyphens$inherit_getInstance();
      case 'unset':
        return Hyphens$unset_getInstance();
      case 'none':
        return Hyphens$none_getInstance();
      case 'manual':
        return Hyphens$manual_getInstance();
      case 'auto':
        return Hyphens$auto_getInstance();
      default:throwISE('No enum constant kotlinx.css.Hyphens.' + name);
    }
  }
  Hyphens.valueOf_61zpoe$ = Hyphens$valueOf;
  function ListStyleType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ListStyleType_initFields() {
    ListStyleType_initFields = function () {
    };
    ListStyleType$initial_instance = new ListStyleType('initial', 0);
    ListStyleType$inherit_instance = new ListStyleType('inherit', 1);
    ListStyleType$unset_instance = new ListStyleType('unset', 2);
    ListStyleType$none_instance = new ListStyleType('none', 3);
    ListStyleType$disc_instance = new ListStyleType('disc', 4);
    ListStyleType$circle_instance = new ListStyleType('circle', 5);
    ListStyleType$square_instance = new ListStyleType('square', 6);
    ListStyleType$decimal_instance = new ListStyleType('decimal', 7);
  }
  var ListStyleType$initial_instance;
  function ListStyleType$initial_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$initial_instance;
  }
  var ListStyleType$inherit_instance;
  function ListStyleType$inherit_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$inherit_instance;
  }
  var ListStyleType$unset_instance;
  function ListStyleType$unset_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$unset_instance;
  }
  var ListStyleType$none_instance;
  function ListStyleType$none_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$none_instance;
  }
  var ListStyleType$disc_instance;
  function ListStyleType$disc_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$disc_instance;
  }
  var ListStyleType$circle_instance;
  function ListStyleType$circle_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$circle_instance;
  }
  var ListStyleType$square_instance;
  function ListStyleType$square_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$square_instance;
  }
  var ListStyleType$decimal_instance;
  function ListStyleType$decimal_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$decimal_instance;
  }
  ListStyleType.prototype.toString = function () {
    return hyphenize(this.name);
  };
  ListStyleType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListStyleType',
    interfaces: [Enum]
  };
  function ListStyleType$values() {
    return [ListStyleType$initial_getInstance(), ListStyleType$inherit_getInstance(), ListStyleType$unset_getInstance(), ListStyleType$none_getInstance(), ListStyleType$disc_getInstance(), ListStyleType$circle_getInstance(), ListStyleType$square_getInstance(), ListStyleType$decimal_getInstance()];
  }
  ListStyleType.values = ListStyleType$values;
  function ListStyleType$valueOf(name) {
    switch (name) {
      case 'initial':
        return ListStyleType$initial_getInstance();
      case 'inherit':
        return ListStyleType$inherit_getInstance();
      case 'unset':
        return ListStyleType$unset_getInstance();
      case 'none':
        return ListStyleType$none_getInstance();
      case 'disc':
        return ListStyleType$disc_getInstance();
      case 'circle':
        return ListStyleType$circle_getInstance();
      case 'square':
        return ListStyleType$square_getInstance();
      case 'decimal':
        return ListStyleType$decimal_getInstance();
      default:throwISE('No enum constant kotlinx.css.ListStyleType.' + name);
    }
  }
  ListStyleType.valueOf_61zpoe$ = ListStyleType$valueOf;
  function ObjectFit(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ObjectFit_initFields() {
    ObjectFit_initFields = function () {
    };
    ObjectFit$initial_instance = new ObjectFit('initial', 0);
    ObjectFit$inherit_instance = new ObjectFit('inherit', 1);
    ObjectFit$unset_instance = new ObjectFit('unset', 2);
    ObjectFit$contain_instance = new ObjectFit('contain', 3);
    ObjectFit$cover_instance = new ObjectFit('cover', 4);
    ObjectFit$fill_instance = new ObjectFit('fill', 5);
    ObjectFit$none_instance = new ObjectFit('none', 6);
    ObjectFit$scaleDown_instance = new ObjectFit('scaleDown', 7);
  }
  var ObjectFit$initial_instance;
  function ObjectFit$initial_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$initial_instance;
  }
  var ObjectFit$inherit_instance;
  function ObjectFit$inherit_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$inherit_instance;
  }
  var ObjectFit$unset_instance;
  function ObjectFit$unset_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$unset_instance;
  }
  var ObjectFit$contain_instance;
  function ObjectFit$contain_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$contain_instance;
  }
  var ObjectFit$cover_instance;
  function ObjectFit$cover_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$cover_instance;
  }
  var ObjectFit$fill_instance;
  function ObjectFit$fill_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$fill_instance;
  }
  var ObjectFit$none_instance;
  function ObjectFit$none_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$none_instance;
  }
  var ObjectFit$scaleDown_instance;
  function ObjectFit$scaleDown_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$scaleDown_instance;
  }
  ObjectFit.prototype.toString = function () {
    return hyphenize(this.name);
  };
  ObjectFit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectFit',
    interfaces: [Enum]
  };
  function ObjectFit$values() {
    return [ObjectFit$initial_getInstance(), ObjectFit$inherit_getInstance(), ObjectFit$unset_getInstance(), ObjectFit$contain_getInstance(), ObjectFit$cover_getInstance(), ObjectFit$fill_getInstance(), ObjectFit$none_getInstance(), ObjectFit$scaleDown_getInstance()];
  }
  ObjectFit.values = ObjectFit$values;
  function ObjectFit$valueOf(name) {
    switch (name) {
      case 'initial':
        return ObjectFit$initial_getInstance();
      case 'inherit':
        return ObjectFit$inherit_getInstance();
      case 'unset':
        return ObjectFit$unset_getInstance();
      case 'contain':
        return ObjectFit$contain_getInstance();
      case 'cover':
        return ObjectFit$cover_getInstance();
      case 'fill':
        return ObjectFit$fill_getInstance();
      case 'none':
        return ObjectFit$none_getInstance();
      case 'scaleDown':
        return ObjectFit$scaleDown_getInstance();
      default:throwISE('No enum constant kotlinx.css.ObjectFit.' + name);
    }
  }
  ObjectFit.valueOf_61zpoe$ = ObjectFit$valueOf;
  function Outline(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Outline_initFields() {
    Outline_initFields = function () {
    };
    Outline$initial_instance = new Outline('initial', 0);
    Outline$inherit_instance = new Outline('inherit', 1);
    Outline$unset_instance = new Outline('unset', 2);
    Outline$none_instance = new Outline('none', 3);
  }
  var Outline$initial_instance;
  function Outline$initial_getInstance() {
    Outline_initFields();
    return Outline$initial_instance;
  }
  var Outline$inherit_instance;
  function Outline$inherit_getInstance() {
    Outline_initFields();
    return Outline$inherit_instance;
  }
  var Outline$unset_instance;
  function Outline$unset_getInstance() {
    Outline_initFields();
    return Outline$unset_instance;
  }
  var Outline$none_instance;
  function Outline$none_getInstance() {
    Outline_initFields();
    return Outline$none_instance;
  }
  Outline.prototype.toString = function () {
    return this.name;
  };
  Outline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Outline',
    interfaces: [Enum]
  };
  function Outline$values() {
    return [Outline$initial_getInstance(), Outline$inherit_getInstance(), Outline$unset_getInstance(), Outline$none_getInstance()];
  }
  Outline.values = Outline$values;
  function Outline$valueOf(name) {
    switch (name) {
      case 'initial':
        return Outline$initial_getInstance();
      case 'inherit':
        return Outline$inherit_getInstance();
      case 'unset':
        return Outline$unset_getInstance();
      case 'none':
        return Outline$none_getInstance();
      default:throwISE('No enum constant kotlinx.css.Outline.' + name);
    }
  }
  Outline.valueOf_61zpoe$ = Outline$valueOf;
  function Overflow(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Overflow_initFields() {
    Overflow_initFields = function () {
    };
    Overflow$initial_instance = new Overflow('initial', 0);
    Overflow$inherit_instance = new Overflow('inherit', 1);
    Overflow$unset_instance = new Overflow('unset', 2);
    Overflow$visible_instance = new Overflow('visible', 3);
    Overflow$hidden_instance = new Overflow('hidden', 4);
    Overflow$scroll_instance = new Overflow('scroll', 5);
    Overflow$auto_instance = new Overflow('auto', 6);
  }
  var Overflow$initial_instance;
  function Overflow$initial_getInstance() {
    Overflow_initFields();
    return Overflow$initial_instance;
  }
  var Overflow$inherit_instance;
  function Overflow$inherit_getInstance() {
    Overflow_initFields();
    return Overflow$inherit_instance;
  }
  var Overflow$unset_instance;
  function Overflow$unset_getInstance() {
    Overflow_initFields();
    return Overflow$unset_instance;
  }
  var Overflow$visible_instance;
  function Overflow$visible_getInstance() {
    Overflow_initFields();
    return Overflow$visible_instance;
  }
  var Overflow$hidden_instance;
  function Overflow$hidden_getInstance() {
    Overflow_initFields();
    return Overflow$hidden_instance;
  }
  var Overflow$scroll_instance;
  function Overflow$scroll_getInstance() {
    Overflow_initFields();
    return Overflow$scroll_instance;
  }
  var Overflow$auto_instance;
  function Overflow$auto_getInstance() {
    Overflow_initFields();
    return Overflow$auto_instance;
  }
  Overflow.prototype.toString = function () {
    return this.name;
  };
  Overflow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Overflow',
    interfaces: [Enum]
  };
  function Overflow$values() {
    return [Overflow$initial_getInstance(), Overflow$inherit_getInstance(), Overflow$unset_getInstance(), Overflow$visible_getInstance(), Overflow$hidden_getInstance(), Overflow$scroll_getInstance(), Overflow$auto_getInstance()];
  }
  Overflow.values = Overflow$values;
  function Overflow$valueOf(name) {
    switch (name) {
      case 'initial':
        return Overflow$initial_getInstance();
      case 'inherit':
        return Overflow$inherit_getInstance();
      case 'unset':
        return Overflow$unset_getInstance();
      case 'visible':
        return Overflow$visible_getInstance();
      case 'hidden':
        return Overflow$hidden_getInstance();
      case 'scroll':
        return Overflow$scroll_getInstance();
      case 'auto':
        return Overflow$auto_getInstance();
      default:throwISE('No enum constant kotlinx.css.Overflow.' + name);
    }
  }
  Overflow.valueOf_61zpoe$ = Overflow$valueOf;
  function OverflowWrap(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function OverflowWrap_initFields() {
    OverflowWrap_initFields = function () {
    };
    OverflowWrap$initial_instance = new OverflowWrap('initial', 0);
    OverflowWrap$inherit_instance = new OverflowWrap('inherit', 1);
    OverflowWrap$unset_instance = new OverflowWrap('unset', 2);
    OverflowWrap$normal_instance = new OverflowWrap('normal', 3);
    OverflowWrap$breakWord_instance = new OverflowWrap('breakWord', 4);
  }
  var OverflowWrap$initial_instance;
  function OverflowWrap$initial_getInstance() {
    OverflowWrap_initFields();
    return OverflowWrap$initial_instance;
  }
  var OverflowWrap$inherit_instance;
  function OverflowWrap$inherit_getInstance() {
    OverflowWrap_initFields();
    return OverflowWrap$inherit_instance;
  }
  var OverflowWrap$unset_instance;
  function OverflowWrap$unset_getInstance() {
    OverflowWrap_initFields();
    return OverflowWrap$unset_instance;
  }
  var OverflowWrap$normal_instance;
  function OverflowWrap$normal_getInstance() {
    OverflowWrap_initFields();
    return OverflowWrap$normal_instance;
  }
  var OverflowWrap$breakWord_instance;
  function OverflowWrap$breakWord_getInstance() {
    OverflowWrap_initFields();
    return OverflowWrap$breakWord_instance;
  }
  OverflowWrap.prototype.toString = function () {
    return hyphenize(this.name);
  };
  OverflowWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OverflowWrap',
    interfaces: [Enum]
  };
  function OverflowWrap$values() {
    return [OverflowWrap$initial_getInstance(), OverflowWrap$inherit_getInstance(), OverflowWrap$unset_getInstance(), OverflowWrap$normal_getInstance(), OverflowWrap$breakWord_getInstance()];
  }
  OverflowWrap.values = OverflowWrap$values;
  function OverflowWrap$valueOf(name) {
    switch (name) {
      case 'initial':
        return OverflowWrap$initial_getInstance();
      case 'inherit':
        return OverflowWrap$inherit_getInstance();
      case 'unset':
        return OverflowWrap$unset_getInstance();
      case 'normal':
        return OverflowWrap$normal_getInstance();
      case 'breakWord':
        return OverflowWrap$breakWord_getInstance();
      default:throwISE('No enum constant kotlinx.css.OverflowWrap.' + name);
    }
  }
  OverflowWrap.valueOf_61zpoe$ = OverflowWrap$valueOf;
  function OverscrollBehavior(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function OverscrollBehavior_initFields() {
    OverscrollBehavior_initFields = function () {
    };
    OverscrollBehavior$initial_instance = new OverscrollBehavior('initial', 0);
    OverscrollBehavior$inherit_instance = new OverscrollBehavior('inherit', 1);
    OverscrollBehavior$unset_instance = new OverscrollBehavior('unset', 2);
    OverscrollBehavior$auto_instance = new OverscrollBehavior('auto', 3);
    OverscrollBehavior$contain_instance = new OverscrollBehavior('contain', 4);
    OverscrollBehavior$none_instance = new OverscrollBehavior('none', 5);
  }
  var OverscrollBehavior$initial_instance;
  function OverscrollBehavior$initial_getInstance() {
    OverscrollBehavior_initFields();
    return OverscrollBehavior$initial_instance;
  }
  var OverscrollBehavior$inherit_instance;
  function OverscrollBehavior$inherit_getInstance() {
    OverscrollBehavior_initFields();
    return OverscrollBehavior$inherit_instance;
  }
  var OverscrollBehavior$unset_instance;
  function OverscrollBehavior$unset_getInstance() {
    OverscrollBehavior_initFields();
    return OverscrollBehavior$unset_instance;
  }
  var OverscrollBehavior$auto_instance;
  function OverscrollBehavior$auto_getInstance() {
    OverscrollBehavior_initFields();
    return OverscrollBehavior$auto_instance;
  }
  var OverscrollBehavior$contain_instance;
  function OverscrollBehavior$contain_getInstance() {
    OverscrollBehavior_initFields();
    return OverscrollBehavior$contain_instance;
  }
  var OverscrollBehavior$none_instance;
  function OverscrollBehavior$none_getInstance() {
    OverscrollBehavior_initFields();
    return OverscrollBehavior$none_instance;
  }
  OverscrollBehavior.prototype.toString = function () {
    return this.name;
  };
  OverscrollBehavior.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OverscrollBehavior',
    interfaces: [Enum]
  };
  function OverscrollBehavior$values() {
    return [OverscrollBehavior$initial_getInstance(), OverscrollBehavior$inherit_getInstance(), OverscrollBehavior$unset_getInstance(), OverscrollBehavior$auto_getInstance(), OverscrollBehavior$contain_getInstance(), OverscrollBehavior$none_getInstance()];
  }
  OverscrollBehavior.values = OverscrollBehavior$values;
  function OverscrollBehavior$valueOf(name) {
    switch (name) {
      case 'initial':
        return OverscrollBehavior$initial_getInstance();
      case 'inherit':
        return OverscrollBehavior$inherit_getInstance();
      case 'unset':
        return OverscrollBehavior$unset_getInstance();
      case 'auto':
        return OverscrollBehavior$auto_getInstance();
      case 'contain':
        return OverscrollBehavior$contain_getInstance();
      case 'none':
        return OverscrollBehavior$none_getInstance();
      default:throwISE('No enum constant kotlinx.css.OverscrollBehavior.' + name);
    }
  }
  OverscrollBehavior.valueOf_61zpoe$ = OverscrollBehavior$valueOf;
  function PointerEvents(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PointerEvents_initFields() {
    PointerEvents_initFields = function () {
    };
    PointerEvents$initial_instance = new PointerEvents('initial', 0);
    PointerEvents$inherit_instance = new PointerEvents('inherit', 1);
    PointerEvents$unset_instance = new PointerEvents('unset', 2);
    PointerEvents$auto_instance = new PointerEvents('auto', 3);
    PointerEvents$none_instance = new PointerEvents('none', 4);
  }
  var PointerEvents$initial_instance;
  function PointerEvents$initial_getInstance() {
    PointerEvents_initFields();
    return PointerEvents$initial_instance;
  }
  var PointerEvents$inherit_instance;
  function PointerEvents$inherit_getInstance() {
    PointerEvents_initFields();
    return PointerEvents$inherit_instance;
  }
  var PointerEvents$unset_instance;
  function PointerEvents$unset_getInstance() {
    PointerEvents_initFields();
    return PointerEvents$unset_instance;
  }
  var PointerEvents$auto_instance;
  function PointerEvents$auto_getInstance() {
    PointerEvents_initFields();
    return PointerEvents$auto_instance;
  }
  var PointerEvents$none_instance;
  function PointerEvents$none_getInstance() {
    PointerEvents_initFields();
    return PointerEvents$none_instance;
  }
  PointerEvents.prototype.toString = function () {
    return this.name;
  };
  PointerEvents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PointerEvents',
    interfaces: [Enum]
  };
  function PointerEvents$values() {
    return [PointerEvents$initial_getInstance(), PointerEvents$inherit_getInstance(), PointerEvents$unset_getInstance(), PointerEvents$auto_getInstance(), PointerEvents$none_getInstance()];
  }
  PointerEvents.values = PointerEvents$values;
  function PointerEvents$valueOf(name) {
    switch (name) {
      case 'initial':
        return PointerEvents$initial_getInstance();
      case 'inherit':
        return PointerEvents$inherit_getInstance();
      case 'unset':
        return PointerEvents$unset_getInstance();
      case 'auto':
        return PointerEvents$auto_getInstance();
      case 'none':
        return PointerEvents$none_getInstance();
      default:throwISE('No enum constant kotlinx.css.PointerEvents.' + name);
    }
  }
  PointerEvents.valueOf_61zpoe$ = PointerEvents$valueOf;
  function Position(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Position_initFields() {
    Position_initFields = function () {
    };
    Position$initial_instance = new Position('initial', 0);
    Position$inherit_instance = new Position('inherit', 1);
    Position$unset_instance = new Position('unset', 2);
    Position$static_instance = new Position('static', 3);
    Position$relative_instance = new Position('relative', 4);
    Position$absolute_instance = new Position('absolute', 5);
    Position$fixed_instance = new Position('fixed', 6);
    Position$sticky_instance = new Position('sticky', 7);
  }
  var Position$initial_instance;
  function Position$initial_getInstance() {
    Position_initFields();
    return Position$initial_instance;
  }
  var Position$inherit_instance;
  function Position$inherit_getInstance() {
    Position_initFields();
    return Position$inherit_instance;
  }
  var Position$unset_instance;
  function Position$unset_getInstance() {
    Position_initFields();
    return Position$unset_instance;
  }
  var Position$static_instance;
  function Position$static_getInstance() {
    Position_initFields();
    return Position$static_instance;
  }
  var Position$relative_instance;
  function Position$relative_getInstance() {
    Position_initFields();
    return Position$relative_instance;
  }
  var Position$absolute_instance;
  function Position$absolute_getInstance() {
    Position_initFields();
    return Position$absolute_instance;
  }
  var Position$fixed_instance;
  function Position$fixed_getInstance() {
    Position_initFields();
    return Position$fixed_instance;
  }
  var Position$sticky_instance;
  function Position$sticky_getInstance() {
    Position_initFields();
    return Position$sticky_instance;
  }
  Position.prototype.toString = function () {
    return this.name;
  };
  Position.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Position',
    interfaces: [Enum]
  };
  function Position$values() {
    return [Position$initial_getInstance(), Position$inherit_getInstance(), Position$unset_getInstance(), Position$static_getInstance(), Position$relative_getInstance(), Position$absolute_getInstance(), Position$fixed_getInstance(), Position$sticky_getInstance()];
  }
  Position.values = Position$values;
  function Position$valueOf(name) {
    switch (name) {
      case 'initial':
        return Position$initial_getInstance();
      case 'inherit':
        return Position$inherit_getInstance();
      case 'unset':
        return Position$unset_getInstance();
      case 'static':
        return Position$static_getInstance();
      case 'relative':
        return Position$relative_getInstance();
      case 'absolute':
        return Position$absolute_getInstance();
      case 'fixed':
        return Position$fixed_getInstance();
      case 'sticky':
        return Position$sticky_getInstance();
      default:throwISE('No enum constant kotlinx.css.Position.' + name);
    }
  }
  Position.valueOf_61zpoe$ = Position$valueOf;
  function RowGap(value) {
    RowGap$Companion_getInstance();
    CssValue.call(this, value);
    this.value_ua2gbd$_0 = value;
  }
  Object.defineProperty(RowGap.prototype, 'value', {
    get: function () {
      return this.value_ua2gbd$_0;
    }
  });
  function RowGap$Companion() {
    RowGap$Companion_instance = this;
    this.initial = new RowGap('initial');
    this.inherit = new RowGap('inherit');
    this.normal = new RowGap('normal');
    this.unset = new RowGap('unset');
  }
  RowGap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RowGap$Companion_instance = null;
  function RowGap$Companion_getInstance() {
    if (RowGap$Companion_instance === null) {
      new RowGap$Companion();
    }return RowGap$Companion_instance;
  }
  RowGap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RowGap',
    interfaces: [CssValue]
  };
  function ScrollBehavior(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ScrollBehavior_initFields() {
    ScrollBehavior_initFields = function () {
    };
    ScrollBehavior$initial_instance = new ScrollBehavior('initial', 0);
    ScrollBehavior$inherit_instance = new ScrollBehavior('inherit', 1);
    ScrollBehavior$unset_instance = new ScrollBehavior('unset', 2);
    ScrollBehavior$auto_instance = new ScrollBehavior('auto', 3);
    ScrollBehavior$smooth_instance = new ScrollBehavior('smooth', 4);
  }
  var ScrollBehavior$initial_instance;
  function ScrollBehavior$initial_getInstance() {
    ScrollBehavior_initFields();
    return ScrollBehavior$initial_instance;
  }
  var ScrollBehavior$inherit_instance;
  function ScrollBehavior$inherit_getInstance() {
    ScrollBehavior_initFields();
    return ScrollBehavior$inherit_instance;
  }
  var ScrollBehavior$unset_instance;
  function ScrollBehavior$unset_getInstance() {
    ScrollBehavior_initFields();
    return ScrollBehavior$unset_instance;
  }
  var ScrollBehavior$auto_instance;
  function ScrollBehavior$auto_getInstance() {
    ScrollBehavior_initFields();
    return ScrollBehavior$auto_instance;
  }
  var ScrollBehavior$smooth_instance;
  function ScrollBehavior$smooth_getInstance() {
    ScrollBehavior_initFields();
    return ScrollBehavior$smooth_instance;
  }
  ScrollBehavior.prototype.toString = function () {
    return this.name;
  };
  ScrollBehavior.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScrollBehavior',
    interfaces: [Enum]
  };
  function ScrollBehavior$values() {
    return [ScrollBehavior$initial_getInstance(), ScrollBehavior$inherit_getInstance(), ScrollBehavior$unset_getInstance(), ScrollBehavior$auto_getInstance(), ScrollBehavior$smooth_getInstance()];
  }
  ScrollBehavior.values = ScrollBehavior$values;
  function ScrollBehavior$valueOf(name) {
    switch (name) {
      case 'initial':
        return ScrollBehavior$initial_getInstance();
      case 'inherit':
        return ScrollBehavior$inherit_getInstance();
      case 'unset':
        return ScrollBehavior$unset_getInstance();
      case 'auto':
        return ScrollBehavior$auto_getInstance();
      case 'smooth':
        return ScrollBehavior$smooth_getInstance();
      default:throwISE('No enum constant kotlinx.css.ScrollBehavior.' + name);
    }
  }
  ScrollBehavior.valueOf_61zpoe$ = ScrollBehavior$valueOf;
  function TextAlign(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextAlign_initFields() {
    TextAlign_initFields = function () {
    };
    TextAlign$initial_instance = new TextAlign('initial', 0);
    TextAlign$inherit_instance = new TextAlign('inherit', 1);
    TextAlign$unset_instance = new TextAlign('unset', 2);
    TextAlign$left_instance = new TextAlign('left', 3);
    TextAlign$right_instance = new TextAlign('right', 4);
    TextAlign$center_instance = new TextAlign('center', 5);
    TextAlign$justify_instance = new TextAlign('justify', 6);
    TextAlign$justifyAll_instance = new TextAlign('justifyAll', 7);
    TextAlign$start_instance = new TextAlign('start', 8);
    TextAlign$end_instance = new TextAlign('end', 9);
    TextAlign$matchParent_instance = new TextAlign('matchParent', 10);
  }
  var TextAlign$initial_instance;
  function TextAlign$initial_getInstance() {
    TextAlign_initFields();
    return TextAlign$initial_instance;
  }
  var TextAlign$inherit_instance;
  function TextAlign$inherit_getInstance() {
    TextAlign_initFields();
    return TextAlign$inherit_instance;
  }
  var TextAlign$unset_instance;
  function TextAlign$unset_getInstance() {
    TextAlign_initFields();
    return TextAlign$unset_instance;
  }
  var TextAlign$left_instance;
  function TextAlign$left_getInstance() {
    TextAlign_initFields();
    return TextAlign$left_instance;
  }
  var TextAlign$right_instance;
  function TextAlign$right_getInstance() {
    TextAlign_initFields();
    return TextAlign$right_instance;
  }
  var TextAlign$center_instance;
  function TextAlign$center_getInstance() {
    TextAlign_initFields();
    return TextAlign$center_instance;
  }
  var TextAlign$justify_instance;
  function TextAlign$justify_getInstance() {
    TextAlign_initFields();
    return TextAlign$justify_instance;
  }
  var TextAlign$justifyAll_instance;
  function TextAlign$justifyAll_getInstance() {
    TextAlign_initFields();
    return TextAlign$justifyAll_instance;
  }
  var TextAlign$start_instance;
  function TextAlign$start_getInstance() {
    TextAlign_initFields();
    return TextAlign$start_instance;
  }
  var TextAlign$end_instance;
  function TextAlign$end_getInstance() {
    TextAlign_initFields();
    return TextAlign$end_instance;
  }
  var TextAlign$matchParent_instance;
  function TextAlign$matchParent_getInstance() {
    TextAlign_initFields();
    return TextAlign$matchParent_instance;
  }
  TextAlign.prototype.toString = function () {
    return hyphenize(this.name);
  };
  TextAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextAlign',
    interfaces: [Enum]
  };
  function TextAlign$values() {
    return [TextAlign$initial_getInstance(), TextAlign$inherit_getInstance(), TextAlign$unset_getInstance(), TextAlign$left_getInstance(), TextAlign$right_getInstance(), TextAlign$center_getInstance(), TextAlign$justify_getInstance(), TextAlign$justifyAll_getInstance(), TextAlign$start_getInstance(), TextAlign$end_getInstance(), TextAlign$matchParent_getInstance()];
  }
  TextAlign.values = TextAlign$values;
  function TextAlign$valueOf(name) {
    switch (name) {
      case 'initial':
        return TextAlign$initial_getInstance();
      case 'inherit':
        return TextAlign$inherit_getInstance();
      case 'unset':
        return TextAlign$unset_getInstance();
      case 'left':
        return TextAlign$left_getInstance();
      case 'right':
        return TextAlign$right_getInstance();
      case 'center':
        return TextAlign$center_getInstance();
      case 'justify':
        return TextAlign$justify_getInstance();
      case 'justifyAll':
        return TextAlign$justifyAll_getInstance();
      case 'start':
        return TextAlign$start_getInstance();
      case 'end':
        return TextAlign$end_getInstance();
      case 'matchParent':
        return TextAlign$matchParent_getInstance();
      default:throwISE('No enum constant kotlinx.css.TextAlign.' + name);
    }
  }
  TextAlign.valueOf_61zpoe$ = TextAlign$valueOf;
  function TableLayout(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TableLayout_initFields() {
    TableLayout_initFields = function () {
    };
    TableLayout$initial_instance = new TableLayout('initial', 0);
    TableLayout$inherit_instance = new TableLayout('inherit', 1);
    TableLayout$unset_instance = new TableLayout('unset', 2);
    TableLayout$auto_instance = new TableLayout('auto', 3);
    TableLayout$fixed_instance = new TableLayout('fixed', 4);
  }
  var TableLayout$initial_instance;
  function TableLayout$initial_getInstance() {
    TableLayout_initFields();
    return TableLayout$initial_instance;
  }
  var TableLayout$inherit_instance;
  function TableLayout$inherit_getInstance() {
    TableLayout_initFields();
    return TableLayout$inherit_instance;
  }
  var TableLayout$unset_instance;
  function TableLayout$unset_getInstance() {
    TableLayout_initFields();
    return TableLayout$unset_instance;
  }
  var TableLayout$auto_instance;
  function TableLayout$auto_getInstance() {
    TableLayout_initFields();
    return TableLayout$auto_instance;
  }
  var TableLayout$fixed_instance;
  function TableLayout$fixed_getInstance() {
    TableLayout_initFields();
    return TableLayout$fixed_instance;
  }
  TableLayout.prototype.toString = function () {
    return this.name;
  };
  TableLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableLayout',
    interfaces: [Enum]
  };
  function TableLayout$values() {
    return [TableLayout$initial_getInstance(), TableLayout$inherit_getInstance(), TableLayout$unset_getInstance(), TableLayout$auto_getInstance(), TableLayout$fixed_getInstance()];
  }
  TableLayout.values = TableLayout$values;
  function TableLayout$valueOf(name) {
    switch (name) {
      case 'initial':
        return TableLayout$initial_getInstance();
      case 'inherit':
        return TableLayout$inherit_getInstance();
      case 'unset':
        return TableLayout$unset_getInstance();
      case 'auto':
        return TableLayout$auto_getInstance();
      case 'fixed':
        return TableLayout$fixed_getInstance();
      default:throwISE('No enum constant kotlinx.css.TableLayout.' + name);
    }
  }
  TableLayout.valueOf_61zpoe$ = TableLayout$valueOf;
  function TextOverflow(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextOverflow_initFields() {
    TextOverflow_initFields = function () {
    };
    TextOverflow$initial_instance = new TextOverflow('initial', 0);
    TextOverflow$inherit_instance = new TextOverflow('inherit', 1);
    TextOverflow$unset_instance = new TextOverflow('unset', 2);
    TextOverflow$clip_instance = new TextOverflow('clip', 3);
    TextOverflow$ellipsis_instance = new TextOverflow('ellipsis', 4);
  }
  var TextOverflow$initial_instance;
  function TextOverflow$initial_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$initial_instance;
  }
  var TextOverflow$inherit_instance;
  function TextOverflow$inherit_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$inherit_instance;
  }
  var TextOverflow$unset_instance;
  function TextOverflow$unset_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$unset_instance;
  }
  var TextOverflow$clip_instance;
  function TextOverflow$clip_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$clip_instance;
  }
  var TextOverflow$ellipsis_instance;
  function TextOverflow$ellipsis_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$ellipsis_instance;
  }
  TextOverflow.prototype.toString = function () {
    return this.name;
  };
  TextOverflow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextOverflow',
    interfaces: [Enum]
  };
  function TextOverflow$values() {
    return [TextOverflow$initial_getInstance(), TextOverflow$inherit_getInstance(), TextOverflow$unset_getInstance(), TextOverflow$clip_getInstance(), TextOverflow$ellipsis_getInstance()];
  }
  TextOverflow.values = TextOverflow$values;
  function TextOverflow$valueOf(name) {
    switch (name) {
      case 'initial':
        return TextOverflow$initial_getInstance();
      case 'inherit':
        return TextOverflow$inherit_getInstance();
      case 'unset':
        return TextOverflow$unset_getInstance();
      case 'clip':
        return TextOverflow$clip_getInstance();
      case 'ellipsis':
        return TextOverflow$ellipsis_getInstance();
      default:throwISE('No enum constant kotlinx.css.TextOverflow.' + name);
    }
  }
  TextOverflow.valueOf_61zpoe$ = TextOverflow$valueOf;
  function TextTransform(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextTransform_initFields() {
    TextTransform_initFields = function () {
    };
    TextTransform$initial_instance = new TextTransform('initial', 0);
    TextTransform$inherit_instance = new TextTransform('inherit', 1);
    TextTransform$unset_instance = new TextTransform('unset', 2);
    TextTransform$capitalize_instance = new TextTransform('capitalize', 3);
    TextTransform$uppercase_instance = new TextTransform('uppercase', 4);
    TextTransform$lowercase_instance = new TextTransform('lowercase', 5);
    TextTransform$none_instance = new TextTransform('none', 6);
    TextTransform$fullWidth_instance = new TextTransform('fullWidth', 7);
  }
  var TextTransform$initial_instance;
  function TextTransform$initial_getInstance() {
    TextTransform_initFields();
    return TextTransform$initial_instance;
  }
  var TextTransform$inherit_instance;
  function TextTransform$inherit_getInstance() {
    TextTransform_initFields();
    return TextTransform$inherit_instance;
  }
  var TextTransform$unset_instance;
  function TextTransform$unset_getInstance() {
    TextTransform_initFields();
    return TextTransform$unset_instance;
  }
  var TextTransform$capitalize_instance;
  function TextTransform$capitalize_getInstance() {
    TextTransform_initFields();
    return TextTransform$capitalize_instance;
  }
  var TextTransform$uppercase_instance;
  function TextTransform$uppercase_getInstance() {
    TextTransform_initFields();
    return TextTransform$uppercase_instance;
  }
  var TextTransform$lowercase_instance;
  function TextTransform$lowercase_getInstance() {
    TextTransform_initFields();
    return TextTransform$lowercase_instance;
  }
  var TextTransform$none_instance;
  function TextTransform$none_getInstance() {
    TextTransform_initFields();
    return TextTransform$none_instance;
  }
  var TextTransform$fullWidth_instance;
  function TextTransform$fullWidth_getInstance() {
    TextTransform_initFields();
    return TextTransform$fullWidth_instance;
  }
  TextTransform.prototype.toString = function () {
    return hyphenize(this.name);
  };
  TextTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextTransform',
    interfaces: [Enum]
  };
  function TextTransform$values() {
    return [TextTransform$initial_getInstance(), TextTransform$inherit_getInstance(), TextTransform$unset_getInstance(), TextTransform$capitalize_getInstance(), TextTransform$uppercase_getInstance(), TextTransform$lowercase_getInstance(), TextTransform$none_getInstance(), TextTransform$fullWidth_getInstance()];
  }
  TextTransform.values = TextTransform$values;
  function TextTransform$valueOf(name) {
    switch (name) {
      case 'initial':
        return TextTransform$initial_getInstance();
      case 'inherit':
        return TextTransform$inherit_getInstance();
      case 'unset':
        return TextTransform$unset_getInstance();
      case 'capitalize':
        return TextTransform$capitalize_getInstance();
      case 'uppercase':
        return TextTransform$uppercase_getInstance();
      case 'lowercase':
        return TextTransform$lowercase_getInstance();
      case 'none':
        return TextTransform$none_getInstance();
      case 'fullWidth':
        return TextTransform$fullWidth_getInstance();
      default:throwISE('No enum constant kotlinx.css.TextTransform.' + name);
    }
  }
  TextTransform.valueOf_61zpoe$ = TextTransform$valueOf;
  function UserSelect(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UserSelect_initFields() {
    UserSelect_initFields = function () {
    };
    UserSelect$initial_instance = new UserSelect('initial', 0);
    UserSelect$inherit_instance = new UserSelect('inherit', 1);
    UserSelect$unset_instance = new UserSelect('unset', 2);
    UserSelect$none_instance = new UserSelect('none', 3);
    UserSelect$auto_instance = new UserSelect('auto', 4);
    UserSelect$text_instance = new UserSelect('text', 5);
    UserSelect$contain_instance = new UserSelect('contain', 6);
    UserSelect$all_instance = new UserSelect('all', 7);
  }
  var UserSelect$initial_instance;
  function UserSelect$initial_getInstance() {
    UserSelect_initFields();
    return UserSelect$initial_instance;
  }
  var UserSelect$inherit_instance;
  function UserSelect$inherit_getInstance() {
    UserSelect_initFields();
    return UserSelect$inherit_instance;
  }
  var UserSelect$unset_instance;
  function UserSelect$unset_getInstance() {
    UserSelect_initFields();
    return UserSelect$unset_instance;
  }
  var UserSelect$none_instance;
  function UserSelect$none_getInstance() {
    UserSelect_initFields();
    return UserSelect$none_instance;
  }
  var UserSelect$auto_instance;
  function UserSelect$auto_getInstance() {
    UserSelect_initFields();
    return UserSelect$auto_instance;
  }
  var UserSelect$text_instance;
  function UserSelect$text_getInstance() {
    UserSelect_initFields();
    return UserSelect$text_instance;
  }
  var UserSelect$contain_instance;
  function UserSelect$contain_getInstance() {
    UserSelect_initFields();
    return UserSelect$contain_instance;
  }
  var UserSelect$all_instance;
  function UserSelect$all_getInstance() {
    UserSelect_initFields();
    return UserSelect$all_instance;
  }
  UserSelect.prototype.toString = function () {
    return this.name;
  };
  UserSelect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserSelect',
    interfaces: [Enum]
  };
  function UserSelect$values() {
    return [UserSelect$initial_getInstance(), UserSelect$inherit_getInstance(), UserSelect$unset_getInstance(), UserSelect$none_getInstance(), UserSelect$auto_getInstance(), UserSelect$text_getInstance(), UserSelect$contain_getInstance(), UserSelect$all_getInstance()];
  }
  UserSelect.values = UserSelect$values;
  function UserSelect$valueOf(name) {
    switch (name) {
      case 'initial':
        return UserSelect$initial_getInstance();
      case 'inherit':
        return UserSelect$inherit_getInstance();
      case 'unset':
        return UserSelect$unset_getInstance();
      case 'none':
        return UserSelect$none_getInstance();
      case 'auto':
        return UserSelect$auto_getInstance();
      case 'text':
        return UserSelect$text_getInstance();
      case 'contain':
        return UserSelect$contain_getInstance();
      case 'all':
        return UserSelect$all_getInstance();
      default:throwISE('No enum constant kotlinx.css.UserSelect.' + name);
    }
  }
  UserSelect.valueOf_61zpoe$ = UserSelect$valueOf;
  function VerticalAlign(value) {
    VerticalAlign$Companion_getInstance();
    CssValue.call(this, value);
    this.value_lgzlm2$_0 = value;
  }
  Object.defineProperty(VerticalAlign.prototype, 'value', {
    get: function () {
      return this.value_lgzlm2$_0;
    }
  });
  function VerticalAlign$Companion() {
    VerticalAlign$Companion_instance = this;
    this.initial = new VerticalAlign('initial');
    this.inherit = new VerticalAlign('inherit');
    this.unset = new VerticalAlign('unset');
    this.baseline = new VerticalAlign('baseline');
    this.sub = new VerticalAlign('sub');
    this.super = new VerticalAlign('super');
    this.textTop = new VerticalAlign('text-top');
    this.textBottom = new VerticalAlign('text-bottom');
    this.middle = new VerticalAlign('middle');
    this.top = new VerticalAlign('top');
    this.bottom = new VerticalAlign('bottom');
  }
  VerticalAlign$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VerticalAlign$Companion_instance = null;
  function VerticalAlign$Companion_getInstance() {
    if (VerticalAlign$Companion_instance === null) {
      new VerticalAlign$Companion();
    }return VerticalAlign$Companion_instance;
  }
  VerticalAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerticalAlign',
    interfaces: [CssValue]
  };
  function get_up($receiver) {
    return new VerticalAlign($receiver.toString());
  }
  function get_down($receiver) {
    return new VerticalAlign($receiver.unaryMinus().toString());
  }
  function Visibility(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Visibility_initFields() {
    Visibility_initFields = function () {
    };
    Visibility$initial_instance = new Visibility('initial', 0);
    Visibility$inherit_instance = new Visibility('inherit', 1);
    Visibility$unset_instance = new Visibility('unset', 2);
    Visibility$visible_instance = new Visibility('visible', 3);
    Visibility$hidden_instance = new Visibility('hidden', 4);
    Visibility$collapse_instance = new Visibility('collapse', 5);
  }
  var Visibility$initial_instance;
  function Visibility$initial_getInstance() {
    Visibility_initFields();
    return Visibility$initial_instance;
  }
  var Visibility$inherit_instance;
  function Visibility$inherit_getInstance() {
    Visibility_initFields();
    return Visibility$inherit_instance;
  }
  var Visibility$unset_instance;
  function Visibility$unset_getInstance() {
    Visibility_initFields();
    return Visibility$unset_instance;
  }
  var Visibility$visible_instance;
  function Visibility$visible_getInstance() {
    Visibility_initFields();
    return Visibility$visible_instance;
  }
  var Visibility$hidden_instance;
  function Visibility$hidden_getInstance() {
    Visibility_initFields();
    return Visibility$hidden_instance;
  }
  var Visibility$collapse_instance;
  function Visibility$collapse_getInstance() {
    Visibility_initFields();
    return Visibility$collapse_instance;
  }
  Visibility.prototype.toString = function () {
    return this.name;
  };
  Visibility.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Visibility',
    interfaces: [Enum]
  };
  function Visibility$values() {
    return [Visibility$initial_getInstance(), Visibility$inherit_getInstance(), Visibility$unset_getInstance(), Visibility$visible_getInstance(), Visibility$hidden_getInstance(), Visibility$collapse_getInstance()];
  }
  Visibility.values = Visibility$values;
  function Visibility$valueOf(name) {
    switch (name) {
      case 'initial':
        return Visibility$initial_getInstance();
      case 'inherit':
        return Visibility$inherit_getInstance();
      case 'unset':
        return Visibility$unset_getInstance();
      case 'visible':
        return Visibility$visible_getInstance();
      case 'hidden':
        return Visibility$hidden_getInstance();
      case 'collapse':
        return Visibility$collapse_getInstance();
      default:throwISE('No enum constant kotlinx.css.Visibility.' + name);
    }
  }
  Visibility.valueOf_61zpoe$ = Visibility$valueOf;
  function WhiteSpace(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WhiteSpace_initFields() {
    WhiteSpace_initFields = function () {
    };
    WhiteSpace$initial_instance = new WhiteSpace('initial', 0);
    WhiteSpace$inherit_instance = new WhiteSpace('inherit', 1);
    WhiteSpace$unset_instance = new WhiteSpace('unset', 2);
    WhiteSpace$normal_instance = new WhiteSpace('normal', 3);
    WhiteSpace$nowrap_instance = new WhiteSpace('nowrap', 4);
    WhiteSpace$pre_instance = new WhiteSpace('pre', 5);
    WhiteSpace$preWrap_instance = new WhiteSpace('preWrap', 6);
    WhiteSpace$preLine_instance = new WhiteSpace('preLine', 7);
  }
  var WhiteSpace$initial_instance;
  function WhiteSpace$initial_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$initial_instance;
  }
  var WhiteSpace$inherit_instance;
  function WhiteSpace$inherit_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$inherit_instance;
  }
  var WhiteSpace$unset_instance;
  function WhiteSpace$unset_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$unset_instance;
  }
  var WhiteSpace$normal_instance;
  function WhiteSpace$normal_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$normal_instance;
  }
  var WhiteSpace$nowrap_instance;
  function WhiteSpace$nowrap_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$nowrap_instance;
  }
  var WhiteSpace$pre_instance;
  function WhiteSpace$pre_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$pre_instance;
  }
  var WhiteSpace$preWrap_instance;
  function WhiteSpace$preWrap_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$preWrap_instance;
  }
  var WhiteSpace$preLine_instance;
  function WhiteSpace$preLine_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$preLine_instance;
  }
  WhiteSpace.prototype.toString = function () {
    return hyphenize(this.name);
  };
  WhiteSpace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WhiteSpace',
    interfaces: [Enum]
  };
  function WhiteSpace$values() {
    return [WhiteSpace$initial_getInstance(), WhiteSpace$inherit_getInstance(), WhiteSpace$unset_getInstance(), WhiteSpace$normal_getInstance(), WhiteSpace$nowrap_getInstance(), WhiteSpace$pre_getInstance(), WhiteSpace$preWrap_getInstance(), WhiteSpace$preLine_getInstance()];
  }
  WhiteSpace.values = WhiteSpace$values;
  function WhiteSpace$valueOf(name) {
    switch (name) {
      case 'initial':
        return WhiteSpace$initial_getInstance();
      case 'inherit':
        return WhiteSpace$inherit_getInstance();
      case 'unset':
        return WhiteSpace$unset_getInstance();
      case 'normal':
        return WhiteSpace$normal_getInstance();
      case 'nowrap':
        return WhiteSpace$nowrap_getInstance();
      case 'pre':
        return WhiteSpace$pre_getInstance();
      case 'preWrap':
        return WhiteSpace$preWrap_getInstance();
      case 'preLine':
        return WhiteSpace$preLine_getInstance();
      default:throwISE('No enum constant kotlinx.css.WhiteSpace.' + name);
    }
  }
  WhiteSpace.valueOf_61zpoe$ = WhiteSpace$valueOf;
  function WordBreak(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WordBreak_initFields() {
    WordBreak_initFields = function () {
    };
    WordBreak$initial_instance = new WordBreak('initial', 0);
    WordBreak$inherit_instance = new WordBreak('inherit', 1);
    WordBreak$unset_instance = new WordBreak('unset', 2);
    WordBreak$normal_instance = new WordBreak('normal', 3);
    WordBreak$breakAll_instance = new WordBreak('breakAll', 4);
    WordBreak$breakWord_instance = new WordBreak('breakWord', 5);
    WordBreak$keepAll_instance = new WordBreak('keepAll', 6);
  }
  var WordBreak$initial_instance;
  function WordBreak$initial_getInstance() {
    WordBreak_initFields();
    return WordBreak$initial_instance;
  }
  var WordBreak$inherit_instance;
  function WordBreak$inherit_getInstance() {
    WordBreak_initFields();
    return WordBreak$inherit_instance;
  }
  var WordBreak$unset_instance;
  function WordBreak$unset_getInstance() {
    WordBreak_initFields();
    return WordBreak$unset_instance;
  }
  var WordBreak$normal_instance;
  function WordBreak$normal_getInstance() {
    WordBreak_initFields();
    return WordBreak$normal_instance;
  }
  var WordBreak$breakAll_instance;
  function WordBreak$breakAll_getInstance() {
    WordBreak_initFields();
    return WordBreak$breakAll_instance;
  }
  var WordBreak$breakWord_instance;
  function WordBreak$breakWord_getInstance() {
    WordBreak_initFields();
    return WordBreak$breakWord_instance;
  }
  var WordBreak$keepAll_instance;
  function WordBreak$keepAll_getInstance() {
    WordBreak_initFields();
    return WordBreak$keepAll_instance;
  }
  WordBreak.prototype.toString = function () {
    return hyphenize(this.name);
  };
  WordBreak.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WordBreak',
    interfaces: [Enum]
  };
  function WordBreak$values() {
    return [WordBreak$initial_getInstance(), WordBreak$inherit_getInstance(), WordBreak$unset_getInstance(), WordBreak$normal_getInstance(), WordBreak$breakAll_getInstance(), WordBreak$breakWord_getInstance(), WordBreak$keepAll_getInstance()];
  }
  WordBreak.values = WordBreak$values;
  function WordBreak$valueOf(name) {
    switch (name) {
      case 'initial':
        return WordBreak$initial_getInstance();
      case 'inherit':
        return WordBreak$inherit_getInstance();
      case 'unset':
        return WordBreak$unset_getInstance();
      case 'normal':
        return WordBreak$normal_getInstance();
      case 'breakAll':
        return WordBreak$breakAll_getInstance();
      case 'breakWord':
        return WordBreak$breakWord_getInstance();
      case 'keepAll':
        return WordBreak$keepAll_getInstance();
      default:throwISE('No enum constant kotlinx.css.WordBreak.' + name);
    }
  }
  WordBreak.valueOf_61zpoe$ = WordBreak$valueOf;
  function WordWrap(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WordWrap_initFields() {
    WordWrap_initFields = function () {
    };
    WordWrap$initial_instance = new WordWrap('initial', 0);
    WordWrap$inherit_instance = new WordWrap('inherit', 1);
    WordWrap$unset_instance = new WordWrap('unset', 2);
    WordWrap$normal_instance = new WordWrap('normal', 3);
    WordWrap$breakWord_instance = new WordWrap('breakWord', 4);
  }
  var WordWrap$initial_instance;
  function WordWrap$initial_getInstance() {
    WordWrap_initFields();
    return WordWrap$initial_instance;
  }
  var WordWrap$inherit_instance;
  function WordWrap$inherit_getInstance() {
    WordWrap_initFields();
    return WordWrap$inherit_instance;
  }
  var WordWrap$unset_instance;
  function WordWrap$unset_getInstance() {
    WordWrap_initFields();
    return WordWrap$unset_instance;
  }
  var WordWrap$normal_instance;
  function WordWrap$normal_getInstance() {
    WordWrap_initFields();
    return WordWrap$normal_instance;
  }
  var WordWrap$breakWord_instance;
  function WordWrap$breakWord_getInstance() {
    WordWrap_initFields();
    return WordWrap$breakWord_instance;
  }
  WordWrap.prototype.toString = function () {
    return hyphenize(this.name);
  };
  WordWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WordWrap',
    interfaces: [Enum]
  };
  function WordWrap$values() {
    return [WordWrap$initial_getInstance(), WordWrap$inherit_getInstance(), WordWrap$unset_getInstance(), WordWrap$normal_getInstance(), WordWrap$breakWord_getInstance()];
  }
  WordWrap.values = WordWrap$values;
  function WordWrap$valueOf(name) {
    switch (name) {
      case 'initial':
        return WordWrap$initial_getInstance();
      case 'inherit':
        return WordWrap$inherit_getInstance();
      case 'unset':
        return WordWrap$unset_getInstance();
      case 'normal':
        return WordWrap$normal_getInstance();
      case 'breakWord':
        return WordWrap$breakWord_getInstance();
      default:throwISE('No enum constant kotlinx.css.WordWrap.' + name);
    }
  }
  WordWrap.valueOf_61zpoe$ = WordWrap$valueOf;
  function Resize(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Resize_initFields() {
    Resize_initFields = function () {
    };
    Resize$none_instance = new Resize('none', 0);
    Resize$both_instance = new Resize('both', 1);
    Resize$horizontal_instance = new Resize('horizontal', 2);
    Resize$vertical_instance = new Resize('vertical', 3);
    Resize$block_instance = new Resize('block', 4);
    Resize$inline_instance = new Resize('inline', 5);
    Resize$inherit_instance = new Resize('inherit', 6);
    Resize$initial_instance = new Resize('initial', 7);
    Resize$unset_instance = new Resize('unset', 8);
  }
  var Resize$none_instance;
  function Resize$none_getInstance() {
    Resize_initFields();
    return Resize$none_instance;
  }
  var Resize$both_instance;
  function Resize$both_getInstance() {
    Resize_initFields();
    return Resize$both_instance;
  }
  var Resize$horizontal_instance;
  function Resize$horizontal_getInstance() {
    Resize_initFields();
    return Resize$horizontal_instance;
  }
  var Resize$vertical_instance;
  function Resize$vertical_getInstance() {
    Resize_initFields();
    return Resize$vertical_instance;
  }
  var Resize$block_instance;
  function Resize$block_getInstance() {
    Resize_initFields();
    return Resize$block_instance;
  }
  var Resize$inline_instance;
  function Resize$inline_getInstance() {
    Resize_initFields();
    return Resize$inline_instance;
  }
  var Resize$inherit_instance;
  function Resize$inherit_getInstance() {
    Resize_initFields();
    return Resize$inherit_instance;
  }
  var Resize$initial_instance;
  function Resize$initial_getInstance() {
    Resize_initFields();
    return Resize$initial_instance;
  }
  var Resize$unset_instance;
  function Resize$unset_getInstance() {
    Resize_initFields();
    return Resize$unset_instance;
  }
  Resize.prototype.toString = function () {
    return this.name;
  };
  Resize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Resize',
    interfaces: [Enum]
  };
  function Resize$values() {
    return [Resize$none_getInstance(), Resize$both_getInstance(), Resize$horizontal_getInstance(), Resize$vertical_getInstance(), Resize$block_getInstance(), Resize$inline_getInstance(), Resize$inherit_getInstance(), Resize$initial_getInstance(), Resize$unset_getInstance()];
  }
  Resize.values = Resize$values;
  function Resize$valueOf(name) {
    switch (name) {
      case 'none':
        return Resize$none_getInstance();
      case 'both':
        return Resize$both_getInstance();
      case 'horizontal':
        return Resize$horizontal_getInstance();
      case 'vertical':
        return Resize$vertical_getInstance();
      case 'block':
        return Resize$block_getInstance();
      case 'inline':
        return Resize$inline_getInstance();
      case 'inherit':
        return Resize$inherit_getInstance();
      case 'initial':
        return Resize$initial_getInstance();
      case 'unset':
        return Resize$unset_getInstance();
      default:throwISE('No enum constant kotlinx.css.Resize.' + name);
    }
  }
  Resize.valueOf_61zpoe$ = Resize$valueOf;
  function Image(value) {
    Image$Companion_getInstance();
    CssValue.call(this, value);
    this.value_dr6e0y$_0 = value;
  }
  Object.defineProperty(Image.prototype, 'value', {
    get: function () {
      return this.value_dr6e0y$_0;
    }
  });
  function Image$Companion() {
    Image$Companion_instance = this;
    this.none = new Image('none');
  }
  Image$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Image$Companion_instance = null;
  function Image$Companion_getInstance() {
    if (Image$Companion_instance === null) {
      new Image$Companion();
    }return Image$Companion_instance;
  }
  Image.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Image',
    interfaces: [CssValue]
  };
  function StyleList(delimiter) {
    this.delimiter_o62vis$_0 = delimiter;
    this.list_behuth$_0 = ArrayList_init();
  }
  StyleList.prototype.toString = function () {
    if (this.list_behuth$_0.isEmpty())
      return 'none';
    else
      return joinToString_0(this.list_behuth$_0, this.delimiter_o62vis$_0);
  };
  StyleList.prototype.clear = function () {
    this.list_behuth$_0.clear();
  };
  StyleList.prototype.plusAssign_11rb$ = function (item) {
    this.list_behuth$_0.add_11rb$(item);
  };
  StyleList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyleList',
    interfaces: []
  };
  function StyledElement() {
    this.declarations = LinkedHashMap_init();
  }
  StyledElement.prototype.put_puj7f4$ = function (key, value) {
    this.declarations.put_xwzc9p$(key, value);
  };
  StyledElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyledElement',
    interfaces: []
  };
  function CSSProperty(default_0) {
    if (default_0 === void 0)
      default_0 = null;
    this.default_0 = default_0;
  }
  CSSProperty.prototype.getValue_jto6o9$ = function (thisRef, property) {
    var tmp$, tmp$_0;
    if ((tmp$ = this.default_0) != null) {
      var tmp$_1;
      if (!thisRef.declarations.containsKey_11rb$(property.callableName)) {
        var $receiver = thisRef.declarations;
        var key = property.callableName;
        var value = Kotlin.isType(tmp$_1 = tmp$(), Any) ? tmp$_1 : throwCCE();
        $receiver.put_xwzc9p$(key, value);
      }}return (tmp$_0 = thisRef.declarations.get_11rb$(property.callableName)) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  CSSProperty.prototype.setValue_6qj5c4$ = function (thisRef, property, value) {
    var tmp$;
    var $receiver = thisRef.declarations;
    var key = property.callableName;
    var value_0 = Kotlin.isType(tmp$ = value, Any) ? tmp$ : throwCCE();
    $receiver.put_xwzc9p$(key, value_0);
  };
  CSSProperty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CSSProperty',
    interfaces: []
  };
  var alignContent;
  var alignContent_metadata = new PropertyMetadata('alignContent');
  function get_alignContent($receiver) {
    return alignContent.getValue_jto6o9$($receiver, alignContent_metadata);
  }
  function set_alignContent($receiver, alignContent_0) {
    alignContent.setValue_6qj5c4$($receiver, alignContent_metadata, alignContent_0);
  }
  var alignItems;
  var alignItems_metadata = new PropertyMetadata('alignItems');
  function get_alignItems($receiver) {
    return alignItems.getValue_jto6o9$($receiver, alignItems_metadata);
  }
  function set_alignItems($receiver, alignItems_0) {
    alignItems.setValue_6qj5c4$($receiver, alignItems_metadata, alignItems_0);
  }
  var alignSelf;
  var alignSelf_metadata = new PropertyMetadata('alignSelf');
  function get_alignSelf($receiver) {
    return alignSelf.getValue_jto6o9$($receiver, alignSelf_metadata);
  }
  function set_alignSelf($receiver, alignSelf_0) {
    alignSelf.setValue_6qj5c4$($receiver, alignSelf_metadata, alignSelf_0);
  }
  function animation$lambda() {
    return new Animations();
  }
  var animation;
  var animation_metadata = new PropertyMetadata('animation');
  function get_animation($receiver) {
    return animation.getValue_jto6o9$($receiver, animation_metadata);
  }
  function set_animation($receiver, animation_0) {
    animation.setValue_6qj5c4$($receiver, animation_metadata, animation_0);
  }
  var background;
  var background_metadata = new PropertyMetadata('background');
  function get_background($receiver) {
    return background.getValue_jto6o9$($receiver, background_metadata);
  }
  function set_background($receiver, background_0) {
    background.setValue_6qj5c4$($receiver, background_metadata, background_0);
  }
  var backgroundAttachment;
  var backgroundAttachment_metadata = new PropertyMetadata('backgroundAttachment');
  function get_backgroundAttachment($receiver) {
    return backgroundAttachment.getValue_jto6o9$($receiver, backgroundAttachment_metadata);
  }
  function set_backgroundAttachment($receiver, backgroundAttachment_0) {
    backgroundAttachment.setValue_6qj5c4$($receiver, backgroundAttachment_metadata, backgroundAttachment_0);
  }
  var backgroundClip;
  var backgroundClip_metadata = new PropertyMetadata('backgroundClip');
  function get_backgroundClip($receiver) {
    return backgroundClip.getValue_jto6o9$($receiver, backgroundClip_metadata);
  }
  function set_backgroundClip($receiver, backgroundClip_0) {
    backgroundClip.setValue_6qj5c4$($receiver, backgroundClip_metadata, backgroundClip_0);
  }
  var backgroundColor;
  var backgroundColor_metadata = new PropertyMetadata('backgroundColor');
  function get_backgroundColor($receiver) {
    return backgroundColor.getValue_jto6o9$($receiver, backgroundColor_metadata);
  }
  function set_backgroundColor($receiver, backgroundColor_0) {
    backgroundColor.setValue_6qj5c4$($receiver, backgroundColor_metadata, backgroundColor_0);
  }
  var backgroundImage;
  var backgroundImage_metadata = new PropertyMetadata('backgroundImage');
  function get_backgroundImage($receiver) {
    return backgroundImage.getValue_jto6o9$($receiver, backgroundImage_metadata);
  }
  function set_backgroundImage($receiver, backgroundImage_0) {
    backgroundImage.setValue_6qj5c4$($receiver, backgroundImage_metadata, backgroundImage_0);
  }
  var backgroundOrigin;
  var backgroundOrigin_metadata = new PropertyMetadata('backgroundOrigin');
  function get_backgroundOrigin($receiver) {
    return backgroundOrigin.getValue_jto6o9$($receiver, backgroundOrigin_metadata);
  }
  function set_backgroundOrigin($receiver, backgroundOrigin_0) {
    backgroundOrigin.setValue_6qj5c4$($receiver, backgroundOrigin_metadata, backgroundOrigin_0);
  }
  var backgroundPosition;
  var backgroundPosition_metadata = new PropertyMetadata('backgroundPosition');
  function get_backgroundPosition($receiver) {
    return backgroundPosition.getValue_jto6o9$($receiver, backgroundPosition_metadata);
  }
  function set_backgroundPosition($receiver, backgroundPosition_0) {
    backgroundPosition.setValue_6qj5c4$($receiver, backgroundPosition_metadata, backgroundPosition_0);
  }
  var backgroundRepeat;
  var backgroundRepeat_metadata = new PropertyMetadata('backgroundRepeat');
  function get_backgroundRepeat($receiver) {
    return backgroundRepeat.getValue_jto6o9$($receiver, backgroundRepeat_metadata);
  }
  function set_backgroundRepeat($receiver, backgroundRepeat_0) {
    backgroundRepeat.setValue_6qj5c4$($receiver, backgroundRepeat_metadata, backgroundRepeat_0);
  }
  var backgroundSize;
  var backgroundSize_metadata = new PropertyMetadata('backgroundSize');
  function get_backgroundSize($receiver) {
    return backgroundSize.getValue_jto6o9$($receiver, backgroundSize_metadata);
  }
  function set_backgroundSize($receiver, backgroundSize_0) {
    backgroundSize.setValue_6qj5c4$($receiver, backgroundSize_metadata, backgroundSize_0);
  }
  var border;
  var border_metadata = new PropertyMetadata('border');
  function get_border($receiver) {
    return border.getValue_jto6o9$($receiver, border_metadata);
  }
  function set_border($receiver, border_0) {
    border.setValue_6qj5c4$($receiver, border_metadata, border_0);
  }
  var borderTop;
  var borderTop_metadata = new PropertyMetadata('borderTop');
  function get_borderTop($receiver) {
    return borderTop.getValue_jto6o9$($receiver, borderTop_metadata);
  }
  function set_borderTop($receiver, borderTop_0) {
    borderTop.setValue_6qj5c4$($receiver, borderTop_metadata, borderTop_0);
  }
  var borderRight;
  var borderRight_metadata = new PropertyMetadata('borderRight');
  function get_borderRight($receiver) {
    return borderRight.getValue_jto6o9$($receiver, borderRight_metadata);
  }
  function set_borderRight($receiver, borderRight_0) {
    borderRight.setValue_6qj5c4$($receiver, borderRight_metadata, borderRight_0);
  }
  var borderBottom;
  var borderBottom_metadata = new PropertyMetadata('borderBottom');
  function get_borderBottom($receiver) {
    return borderBottom.getValue_jto6o9$($receiver, borderBottom_metadata);
  }
  function set_borderBottom($receiver, borderBottom_0) {
    borderBottom.setValue_6qj5c4$($receiver, borderBottom_metadata, borderBottom_0);
  }
  var borderLeft;
  var borderLeft_metadata = new PropertyMetadata('borderLeft');
  function get_borderLeft($receiver) {
    return borderLeft.getValue_jto6o9$($receiver, borderLeft_metadata);
  }
  function set_borderLeft($receiver, borderLeft_0) {
    borderLeft.setValue_6qj5c4$($receiver, borderLeft_metadata, borderLeft_0);
  }
  var borderSpacing;
  var borderSpacing_metadata = new PropertyMetadata('borderSpacing');
  function get_borderSpacing($receiver) {
    return borderSpacing.getValue_jto6o9$($receiver, borderSpacing_metadata);
  }
  function set_borderSpacing($receiver, borderSpacing_0) {
    borderSpacing.setValue_6qj5c4$($receiver, borderSpacing_metadata, borderSpacing_0);
  }
  var borderRadius;
  var borderRadius_metadata = new PropertyMetadata('borderRadius');
  function get_borderRadius($receiver) {
    return borderRadius.getValue_jto6o9$($receiver, borderRadius_metadata);
  }
  function set_borderRadius($receiver, borderRadius_0) {
    borderRadius.setValue_6qj5c4$($receiver, borderRadius_metadata, borderRadius_0);
  }
  var borderTopLeftRadius;
  var borderTopLeftRadius_metadata = new PropertyMetadata('borderTopLeftRadius');
  function get_borderTopLeftRadius($receiver) {
    return borderTopLeftRadius.getValue_jto6o9$($receiver, borderTopLeftRadius_metadata);
  }
  function set_borderTopLeftRadius($receiver, borderTopLeftRadius_0) {
    borderTopLeftRadius.setValue_6qj5c4$($receiver, borderTopLeftRadius_metadata, borderTopLeftRadius_0);
  }
  var borderTopRightRadius;
  var borderTopRightRadius_metadata = new PropertyMetadata('borderTopRightRadius');
  function get_borderTopRightRadius($receiver) {
    return borderTopRightRadius.getValue_jto6o9$($receiver, borderTopRightRadius_metadata);
  }
  function set_borderTopRightRadius($receiver, borderTopRightRadius_0) {
    borderTopRightRadius.setValue_6qj5c4$($receiver, borderTopRightRadius_metadata, borderTopRightRadius_0);
  }
  var borderBottomLeftRadius;
  var borderBottomLeftRadius_metadata = new PropertyMetadata('borderBottomLeftRadius');
  function get_borderBottomLeftRadius($receiver) {
    return borderBottomLeftRadius.getValue_jto6o9$($receiver, borderBottomLeftRadius_metadata);
  }
  function set_borderBottomLeftRadius($receiver, borderBottomLeftRadius_0) {
    borderBottomLeftRadius.setValue_6qj5c4$($receiver, borderBottomLeftRadius_metadata, borderBottomLeftRadius_0);
  }
  var borderBottomRightRadius;
  var borderBottomRightRadius_metadata = new PropertyMetadata('borderBottomRightRadius');
  function get_borderBottomRightRadius($receiver) {
    return borderBottomRightRadius.getValue_jto6o9$($receiver, borderBottomRightRadius_metadata);
  }
  function set_borderBottomRightRadius($receiver, borderBottomRightRadius_0) {
    borderBottomRightRadius.setValue_6qj5c4$($receiver, borderBottomRightRadius_metadata, borderBottomRightRadius_0);
  }
  var borderStyle;
  var borderStyle_metadata = new PropertyMetadata('borderStyle');
  function get_borderStyle($receiver) {
    return borderStyle.getValue_jto6o9$($receiver, borderStyle_metadata);
  }
  function set_borderStyle($receiver, borderStyle_0) {
    borderStyle.setValue_6qj5c4$($receiver, borderStyle_metadata, borderStyle_0);
  }
  var borderTopStyle;
  var borderTopStyle_metadata = new PropertyMetadata('borderTopStyle');
  function get_borderTopStyle($receiver) {
    return borderTopStyle.getValue_jto6o9$($receiver, borderTopStyle_metadata);
  }
  function set_borderTopStyle($receiver, borderTopStyle_0) {
    borderTopStyle.setValue_6qj5c4$($receiver, borderTopStyle_metadata, borderTopStyle_0);
  }
  var borderRightStyle;
  var borderRightStyle_metadata = new PropertyMetadata('borderRightStyle');
  function get_borderRightStyle($receiver) {
    return borderRightStyle.getValue_jto6o9$($receiver, borderRightStyle_metadata);
  }
  function set_borderRightStyle($receiver, borderRightStyle_0) {
    borderRightStyle.setValue_6qj5c4$($receiver, borderRightStyle_metadata, borderRightStyle_0);
  }
  var borderBottomStyle;
  var borderBottomStyle_metadata = new PropertyMetadata('borderBottomStyle');
  function get_borderBottomStyle($receiver) {
    return borderBottomStyle.getValue_jto6o9$($receiver, borderBottomStyle_metadata);
  }
  function set_borderBottomStyle($receiver, borderBottomStyle_0) {
    borderBottomStyle.setValue_6qj5c4$($receiver, borderBottomStyle_metadata, borderBottomStyle_0);
  }
  var borderLeftStyle;
  var borderLeftStyle_metadata = new PropertyMetadata('borderLeftStyle');
  function get_borderLeftStyle($receiver) {
    return borderLeftStyle.getValue_jto6o9$($receiver, borderLeftStyle_metadata);
  }
  function set_borderLeftStyle($receiver, borderLeftStyle_0) {
    borderLeftStyle.setValue_6qj5c4$($receiver, borderLeftStyle_metadata, borderLeftStyle_0);
  }
  var borderWidth;
  var borderWidth_metadata = new PropertyMetadata('borderWidth');
  function get_borderWidth($receiver) {
    return borderWidth.getValue_jto6o9$($receiver, borderWidth_metadata);
  }
  function set_borderWidth($receiver, borderWidth_0) {
    borderWidth.setValue_6qj5c4$($receiver, borderWidth_metadata, borderWidth_0);
  }
  var borderTopWidth;
  var borderTopWidth_metadata = new PropertyMetadata('borderTopWidth');
  function get_borderTopWidth($receiver) {
    return borderTopWidth.getValue_jto6o9$($receiver, borderTopWidth_metadata);
  }
  function set_borderTopWidth($receiver, borderTopWidth_0) {
    borderTopWidth.setValue_6qj5c4$($receiver, borderTopWidth_metadata, borderTopWidth_0);
  }
  var borderRightWidth;
  var borderRightWidth_metadata = new PropertyMetadata('borderRightWidth');
  function get_borderRightWidth($receiver) {
    return borderRightWidth.getValue_jto6o9$($receiver, borderRightWidth_metadata);
  }
  function set_borderRightWidth($receiver, borderRightWidth_0) {
    borderRightWidth.setValue_6qj5c4$($receiver, borderRightWidth_metadata, borderRightWidth_0);
  }
  var borderBottomWidth;
  var borderBottomWidth_metadata = new PropertyMetadata('borderBottomWidth');
  function get_borderBottomWidth($receiver) {
    return borderBottomWidth.getValue_jto6o9$($receiver, borderBottomWidth_metadata);
  }
  function set_borderBottomWidth($receiver, borderBottomWidth_0) {
    borderBottomWidth.setValue_6qj5c4$($receiver, borderBottomWidth_metadata, borderBottomWidth_0);
  }
  var borderLeftWidth;
  var borderLeftWidth_metadata = new PropertyMetadata('borderLeftWidth');
  function get_borderLeftWidth($receiver) {
    return borderLeftWidth.getValue_jto6o9$($receiver, borderLeftWidth_metadata);
  }
  function set_borderLeftWidth($receiver, borderLeftWidth_0) {
    borderLeftWidth.setValue_6qj5c4$($receiver, borderLeftWidth_metadata, borderLeftWidth_0);
  }
  var borderColor;
  var borderColor_metadata = new PropertyMetadata('borderColor');
  function get_borderColor($receiver) {
    return borderColor.getValue_jto6o9$($receiver, borderColor_metadata);
  }
  function set_borderColor($receiver, borderColor_0) {
    borderColor.setValue_6qj5c4$($receiver, borderColor_metadata, borderColor_0);
  }
  var borderTopColor;
  var borderTopColor_metadata = new PropertyMetadata('borderTopColor');
  function get_borderTopColor($receiver) {
    return borderTopColor.getValue_jto6o9$($receiver, borderTopColor_metadata);
  }
  function set_borderTopColor($receiver, borderTopColor_0) {
    borderTopColor.setValue_6qj5c4$($receiver, borderTopColor_metadata, borderTopColor_0);
  }
  var borderRightColor;
  var borderRightColor_metadata = new PropertyMetadata('borderRightColor');
  function get_borderRightColor($receiver) {
    return borderRightColor.getValue_jto6o9$($receiver, borderRightColor_metadata);
  }
  function set_borderRightColor($receiver, borderRightColor_0) {
    borderRightColor.setValue_6qj5c4$($receiver, borderRightColor_metadata, borderRightColor_0);
  }
  var borderBottomColor;
  var borderBottomColor_metadata = new PropertyMetadata('borderBottomColor');
  function get_borderBottomColor($receiver) {
    return borderBottomColor.getValue_jto6o9$($receiver, borderBottomColor_metadata);
  }
  function set_borderBottomColor($receiver, borderBottomColor_0) {
    borderBottomColor.setValue_6qj5c4$($receiver, borderBottomColor_metadata, borderBottomColor_0);
  }
  var borderLeftColor;
  var borderLeftColor_metadata = new PropertyMetadata('borderLeftColor');
  function get_borderLeftColor($receiver) {
    return borderLeftColor.getValue_jto6o9$($receiver, borderLeftColor_metadata);
  }
  function set_borderLeftColor($receiver, borderLeftColor_0) {
    borderLeftColor.setValue_6qj5c4$($receiver, borderLeftColor_metadata, borderLeftColor_0);
  }
  var bottom;
  var bottom_metadata = new PropertyMetadata('bottom');
  function get_bottom($receiver) {
    return bottom.getValue_jto6o9$($receiver, bottom_metadata);
  }
  function set_bottom($receiver, bottom_0) {
    bottom.setValue_6qj5c4$($receiver, bottom_metadata, bottom_0);
  }
  var boxSizing;
  var boxSizing_metadata = new PropertyMetadata('boxSizing');
  function get_boxSizing($receiver) {
    return boxSizing.getValue_jto6o9$($receiver, boxSizing_metadata);
  }
  function set_boxSizing($receiver, boxSizing_0) {
    boxSizing.setValue_6qj5c4$($receiver, boxSizing_metadata, boxSizing_0);
  }
  function boxShadow$lambda() {
    return new BoxShadows();
  }
  var boxShadow;
  var boxShadow_metadata = new PropertyMetadata('boxShadow');
  function get_boxShadow($receiver) {
    return boxShadow.getValue_jto6o9$($receiver, boxShadow_metadata);
  }
  function set_boxShadow($receiver, boxShadow_0) {
    boxShadow.setValue_6qj5c4$($receiver, boxShadow_metadata, boxShadow_0);
  }
  var clear;
  var clear_metadata = new PropertyMetadata('clear');
  function get_clear($receiver) {
    return clear.getValue_jto6o9$($receiver, clear_metadata);
  }
  function set_clear($receiver, clear_0) {
    clear.setValue_6qj5c4$($receiver, clear_metadata, clear_0);
  }
  var color;
  var color_metadata = new PropertyMetadata('color');
  function get_color($receiver) {
    return color.getValue_jto6o9$($receiver, color_metadata);
  }
  function set_color($receiver, color_0) {
    color.setValue_6qj5c4$($receiver, color_metadata, color_0);
  }
  var columnGap;
  var columnGap_metadata = new PropertyMetadata('columnGap');
  function get_columnGap($receiver) {
    return columnGap.getValue_jto6o9$($receiver, columnGap_metadata);
  }
  function set_columnGap($receiver, columnGap_0) {
    columnGap.setValue_6qj5c4$($receiver, columnGap_metadata, columnGap_0);
  }
  var contain;
  var contain_metadata = new PropertyMetadata('contain');
  function get_contain($receiver) {
    return contain.getValue_jto6o9$($receiver, contain_metadata);
  }
  function set_contain($receiver, contain_0) {
    contain.setValue_6qj5c4$($receiver, contain_metadata, contain_0);
  }
  var content;
  var content_metadata = new PropertyMetadata('content');
  function get_content($receiver) {
    return content.getValue_jto6o9$($receiver, content_metadata);
  }
  function set_content($receiver, content_0) {
    content.setValue_6qj5c4$($receiver, content_metadata, content_0);
  }
  var cursor;
  var cursor_metadata = new PropertyMetadata('cursor');
  function get_cursor($receiver) {
    return cursor.getValue_jto6o9$($receiver, cursor_metadata);
  }
  function set_cursor($receiver, cursor_0) {
    cursor.setValue_6qj5c4$($receiver, cursor_metadata, cursor_0);
  }
  var direction;
  var direction_metadata = new PropertyMetadata('direction');
  function get_direction($receiver) {
    return direction.getValue_jto6o9$($receiver, direction_metadata);
  }
  function set_direction($receiver, direction_0) {
    direction.setValue_6qj5c4$($receiver, direction_metadata, direction_0);
  }
  var display;
  var display_metadata = new PropertyMetadata('display');
  function get_display($receiver) {
    return display.getValue_jto6o9$($receiver, display_metadata);
  }
  function set_display($receiver, display_0) {
    display.setValue_6qj5c4$($receiver, display_metadata, display_0);
  }
  var filter;
  var filter_metadata = new PropertyMetadata('filter');
  function get_filter($receiver) {
    return filter.getValue_jto6o9$($receiver, filter_metadata);
  }
  function set_filter($receiver, filter_0) {
    filter.setValue_6qj5c4$($receiver, filter_metadata, filter_0);
  }
  var flexDirection;
  var flexDirection_metadata = new PropertyMetadata('flexDirection');
  function get_flexDirection($receiver) {
    return flexDirection.getValue_jto6o9$($receiver, flexDirection_metadata);
  }
  function set_flexDirection($receiver, flexDirection_0) {
    flexDirection.setValue_6qj5c4$($receiver, flexDirection_metadata, flexDirection_0);
  }
  var flexGrow;
  var flexGrow_metadata = new PropertyMetadata('flexGrow');
  function get_flexGrow($receiver) {
    return flexGrow.getValue_jto6o9$($receiver, flexGrow_metadata);
  }
  function set_flexGrow($receiver, flexGrow_0) {
    flexGrow.setValue_6qj5c4$($receiver, flexGrow_metadata, flexGrow_0);
  }
  var flexShrink;
  var flexShrink_metadata = new PropertyMetadata('flexShrink');
  function get_flexShrink($receiver) {
    return flexShrink.getValue_jto6o9$($receiver, flexShrink_metadata);
  }
  function set_flexShrink($receiver, flexShrink_0) {
    flexShrink.setValue_6qj5c4$($receiver, flexShrink_metadata, flexShrink_0);
  }
  var flexBasis;
  var flexBasis_metadata = new PropertyMetadata('flexBasis');
  function get_flexBasis($receiver) {
    return flexBasis.getValue_jto6o9$($receiver, flexBasis_metadata);
  }
  function set_flexBasis($receiver, flexBasis_0) {
    flexBasis.setValue_6qj5c4$($receiver, flexBasis_metadata, flexBasis_0);
  }
  var flexWrap;
  var flexWrap_metadata = new PropertyMetadata('flexWrap');
  function get_flexWrap($receiver) {
    return flexWrap.getValue_jto6o9$($receiver, flexWrap_metadata);
  }
  function set_flexWrap($receiver, flexWrap_0) {
    flexWrap.setValue_6qj5c4$($receiver, flexWrap_metadata, flexWrap_0);
  }
  var float;
  var float_metadata = new PropertyMetadata('float');
  function get_float($receiver) {
    return float.getValue_jto6o9$($receiver, float_metadata);
  }
  function set_float($receiver, float_0) {
    float.setValue_6qj5c4$($receiver, float_metadata, float_0);
  }
  var fontFamily;
  var fontFamily_metadata = new PropertyMetadata('fontFamily');
  function get_fontFamily($receiver) {
    return fontFamily.getValue_jto6o9$($receiver, fontFamily_metadata);
  }
  function set_fontFamily($receiver, fontFamily_0) {
    fontFamily.setValue_6qj5c4$($receiver, fontFamily_metadata, fontFamily_0);
  }
  var fontSize;
  var fontSize_metadata = new PropertyMetadata('fontSize');
  function get_fontSize($receiver) {
    return fontSize.getValue_jto6o9$($receiver, fontSize_metadata);
  }
  function set_fontSize($receiver, fontSize_0) {
    fontSize.setValue_6qj5c4$($receiver, fontSize_metadata, fontSize_0);
  }
  var fontWeight;
  var fontWeight_metadata = new PropertyMetadata('fontWeight');
  function get_fontWeight($receiver) {
    return fontWeight.getValue_jto6o9$($receiver, fontWeight_metadata);
  }
  function set_fontWeight($receiver, fontWeight_0) {
    fontWeight.setValue_6qj5c4$($receiver, fontWeight_metadata, fontWeight_0);
  }
  var fontStyle;
  var fontStyle_metadata = new PropertyMetadata('fontStyle');
  function get_fontStyle($receiver) {
    return fontStyle.getValue_jto6o9$($receiver, fontStyle_metadata);
  }
  function set_fontStyle($receiver, fontStyle_0) {
    fontStyle.setValue_6qj5c4$($receiver, fontStyle_metadata, fontStyle_0);
  }
  var gap;
  var gap_metadata = new PropertyMetadata('gap');
  function get_gap($receiver) {
    return gap.getValue_jto6o9$($receiver, gap_metadata);
  }
  function set_gap($receiver, gap_0) {
    gap.setValue_6qj5c4$($receiver, gap_metadata, gap_0);
  }
  var gridAutoColumns;
  var gridAutoColumns_metadata = new PropertyMetadata('gridAutoColumns');
  function get_gridAutoColumns($receiver) {
    return gridAutoColumns.getValue_jto6o9$($receiver, gridAutoColumns_metadata);
  }
  function set_gridAutoColumns($receiver, gridAutoColumns_0) {
    gridAutoColumns.setValue_6qj5c4$($receiver, gridAutoColumns_metadata, gridAutoColumns_0);
  }
  var gridAutoFlow;
  var gridAutoFlow_metadata = new PropertyMetadata('gridAutoFlow');
  function get_gridAutoFlow($receiver) {
    return gridAutoFlow.getValue_jto6o9$($receiver, gridAutoFlow_metadata);
  }
  function set_gridAutoFlow($receiver, gridAutoFlow_0) {
    gridAutoFlow.setValue_6qj5c4$($receiver, gridAutoFlow_metadata, gridAutoFlow_0);
  }
  var gridAutoRows;
  var gridAutoRows_metadata = new PropertyMetadata('gridAutoRows');
  function get_gridAutoRows($receiver) {
    return gridAutoRows.getValue_jto6o9$($receiver, gridAutoRows_metadata);
  }
  function set_gridAutoRows($receiver, gridAutoRows_0) {
    gridAutoRows.setValue_6qj5c4$($receiver, gridAutoRows_metadata, gridAutoRows_0);
  }
  var gridColumn;
  var gridColumn_metadata = new PropertyMetadata('gridColumn');
  function get_gridColumn($receiver) {
    return gridColumn.getValue_jto6o9$($receiver, gridColumn_metadata);
  }
  function set_gridColumn($receiver, gridColumn_0) {
    gridColumn.setValue_6qj5c4$($receiver, gridColumn_metadata, gridColumn_0);
  }
  var gridColumnEnd;
  var gridColumnEnd_metadata = new PropertyMetadata('gridColumnEnd');
  function get_gridColumnEnd($receiver) {
    return gridColumnEnd.getValue_jto6o9$($receiver, gridColumnEnd_metadata);
  }
  function set_gridColumnEnd($receiver, gridColumnEnd_0) {
    gridColumnEnd.setValue_6qj5c4$($receiver, gridColumnEnd_metadata, gridColumnEnd_0);
  }
  var gridColumnGap;
  var gridColumnGap_metadata = new PropertyMetadata('gridColumnGap');
  function get_gridColumnGap($receiver) {
    return gridColumnGap.getValue_jto6o9$($receiver, gridColumnGap_metadata);
  }
  function set_gridColumnGap($receiver, gridColumnGap_0) {
    gridColumnGap.setValue_6qj5c4$($receiver, gridColumnGap_metadata, gridColumnGap_0);
  }
  var gridColumnStart;
  var gridColumnStart_metadata = new PropertyMetadata('gridColumnStart');
  function get_gridColumnStart($receiver) {
    return gridColumnStart.getValue_jto6o9$($receiver, gridColumnStart_metadata);
  }
  function set_gridColumnStart($receiver, gridColumnStart_0) {
    gridColumnStart.setValue_6qj5c4$($receiver, gridColumnStart_metadata, gridColumnStart_0);
  }
  var gridGap;
  var gridGap_metadata = new PropertyMetadata('gridGap');
  function get_gridGap($receiver) {
    return gridGap.getValue_jto6o9$($receiver, gridGap_metadata);
  }
  function set_gridGap($receiver, gridGap_0) {
    gridGap.setValue_6qj5c4$($receiver, gridGap_metadata, gridGap_0);
  }
  var gridRow;
  var gridRow_metadata = new PropertyMetadata('gridRow');
  function get_gridRow($receiver) {
    return gridRow.getValue_jto6o9$($receiver, gridRow_metadata);
  }
  function set_gridRow($receiver, gridRow_0) {
    gridRow.setValue_6qj5c4$($receiver, gridRow_metadata, gridRow_0);
  }
  var gridRowEnd;
  var gridRowEnd_metadata = new PropertyMetadata('gridRowEnd');
  function get_gridRowEnd($receiver) {
    return gridRowEnd.getValue_jto6o9$($receiver, gridRowEnd_metadata);
  }
  function set_gridRowEnd($receiver, gridRowEnd_0) {
    gridRowEnd.setValue_6qj5c4$($receiver, gridRowEnd_metadata, gridRowEnd_0);
  }
  var gridRowGap;
  var gridRowGap_metadata = new PropertyMetadata('gridRowGap');
  function get_gridRowGap($receiver) {
    return gridRowGap.getValue_jto6o9$($receiver, gridRowGap_metadata);
  }
  function set_gridRowGap($receiver, gridRowGap_0) {
    gridRowGap.setValue_6qj5c4$($receiver, gridRowGap_metadata, gridRowGap_0);
  }
  var gridRowStart;
  var gridRowStart_metadata = new PropertyMetadata('gridRowStart');
  function get_gridRowStart($receiver) {
    return gridRowStart.getValue_jto6o9$($receiver, gridRowStart_metadata);
  }
  function set_gridRowStart($receiver, gridRowStart_0) {
    gridRowStart.setValue_6qj5c4$($receiver, gridRowStart_metadata, gridRowStart_0);
  }
  var gridTemplate;
  var gridTemplate_metadata = new PropertyMetadata('gridTemplate');
  function get_gridTemplate($receiver) {
    return gridTemplate.getValue_jto6o9$($receiver, gridTemplate_metadata);
  }
  function set_gridTemplate($receiver, gridTemplate_0) {
    gridTemplate.setValue_6qj5c4$($receiver, gridTemplate_metadata, gridTemplate_0);
  }
  var gridTemplateAreas;
  var gridTemplateAreas_metadata = new PropertyMetadata('gridTemplateAreas');
  function get_gridTemplateAreas($receiver) {
    return gridTemplateAreas.getValue_jto6o9$($receiver, gridTemplateAreas_metadata);
  }
  function set_gridTemplateAreas($receiver, gridTemplateAreas_0) {
    gridTemplateAreas.setValue_6qj5c4$($receiver, gridTemplateAreas_metadata, gridTemplateAreas_0);
  }
  var gridTemplateColumns;
  var gridTemplateColumns_metadata = new PropertyMetadata('gridTemplateColumns');
  function get_gridTemplateColumns($receiver) {
    return gridTemplateColumns.getValue_jto6o9$($receiver, gridTemplateColumns_metadata);
  }
  function set_gridTemplateColumns($receiver, gridTemplateColumns_0) {
    gridTemplateColumns.setValue_6qj5c4$($receiver, gridTemplateColumns_metadata, gridTemplateColumns_0);
  }
  var gridTemplateRows;
  var gridTemplateRows_metadata = new PropertyMetadata('gridTemplateRows');
  function get_gridTemplateRows($receiver) {
    return gridTemplateRows.getValue_jto6o9$($receiver, gridTemplateRows_metadata);
  }
  function set_gridTemplateRows($receiver, gridTemplateRows_0) {
    gridTemplateRows.setValue_6qj5c4$($receiver, gridTemplateRows_metadata, gridTemplateRows_0);
  }
  var height;
  var height_metadata = new PropertyMetadata('height');
  function get_height($receiver) {
    return height.getValue_jto6o9$($receiver, height_metadata);
  }
  function set_height($receiver, height_0) {
    height.setValue_6qj5c4$($receiver, height_metadata, height_0);
  }
  var hyphens;
  var hyphens_metadata = new PropertyMetadata('hyphens');
  function get_hyphens($receiver) {
    return hyphens.getValue_jto6o9$($receiver, hyphens_metadata);
  }
  function set_hyphens($receiver, hyphens_0) {
    hyphens.setValue_6qj5c4$($receiver, hyphens_metadata, hyphens_0);
  }
  var justifyContent;
  var justifyContent_metadata = new PropertyMetadata('justifyContent');
  function get_justifyContent($receiver) {
    return justifyContent.getValue_jto6o9$($receiver, justifyContent_metadata);
  }
  function set_justifyContent($receiver, justifyContent_0) {
    justifyContent.setValue_6qj5c4$($receiver, justifyContent_metadata, justifyContent_0);
  }
  var left;
  var left_metadata = new PropertyMetadata('left');
  function get_left($receiver) {
    return left.getValue_jto6o9$($receiver, left_metadata);
  }
  function set_left($receiver, left_0) {
    left.setValue_6qj5c4$($receiver, left_metadata, left_0);
  }
  var letterSpacing;
  var letterSpacing_metadata = new PropertyMetadata('letterSpacing');
  function get_letterSpacing($receiver) {
    return letterSpacing.getValue_jto6o9$($receiver, letterSpacing_metadata);
  }
  function set_letterSpacing($receiver, letterSpacing_0) {
    letterSpacing.setValue_6qj5c4$($receiver, letterSpacing_metadata, letterSpacing_0);
  }
  var lineHeight;
  var lineHeight_metadata = new PropertyMetadata('lineHeight');
  function get_lineHeight($receiver) {
    return lineHeight.getValue_jto6o9$($receiver, lineHeight_metadata);
  }
  function set_lineHeight($receiver, lineHeight_0) {
    lineHeight.setValue_6qj5c4$($receiver, lineHeight_metadata, lineHeight_0);
  }
  var listStyleType;
  var listStyleType_metadata = new PropertyMetadata('listStyleType');
  function get_listStyleType($receiver) {
    return listStyleType.getValue_jto6o9$($receiver, listStyleType_metadata);
  }
  function set_listStyleType($receiver, listStyleType_0) {
    listStyleType.setValue_6qj5c4$($receiver, listStyleType_metadata, listStyleType_0);
  }
  var margin;
  var margin_metadata = new PropertyMetadata('margin');
  function get_margin($receiver) {
    return margin.getValue_jto6o9$($receiver, margin_metadata);
  }
  function set_margin($receiver, margin_0) {
    margin.setValue_6qj5c4$($receiver, margin_metadata, margin_0);
  }
  var marginTop;
  var marginTop_metadata = new PropertyMetadata('marginTop');
  function get_marginTop($receiver) {
    return marginTop.getValue_jto6o9$($receiver, marginTop_metadata);
  }
  function set_marginTop($receiver, marginTop_0) {
    marginTop.setValue_6qj5c4$($receiver, marginTop_metadata, marginTop_0);
  }
  var marginRight;
  var marginRight_metadata = new PropertyMetadata('marginRight');
  function get_marginRight($receiver) {
    return marginRight.getValue_jto6o9$($receiver, marginRight_metadata);
  }
  function set_marginRight($receiver, marginRight_0) {
    marginRight.setValue_6qj5c4$($receiver, marginRight_metadata, marginRight_0);
  }
  var marginBottom;
  var marginBottom_metadata = new PropertyMetadata('marginBottom');
  function get_marginBottom($receiver) {
    return marginBottom.getValue_jto6o9$($receiver, marginBottom_metadata);
  }
  function set_marginBottom($receiver, marginBottom_0) {
    marginBottom.setValue_6qj5c4$($receiver, marginBottom_metadata, marginBottom_0);
  }
  var marginLeft;
  var marginLeft_metadata = new PropertyMetadata('marginLeft');
  function get_marginLeft($receiver) {
    return marginLeft.getValue_jto6o9$($receiver, marginLeft_metadata);
  }
  function set_marginLeft($receiver, marginLeft_0) {
    marginLeft.setValue_6qj5c4$($receiver, marginLeft_metadata, marginLeft_0);
  }
  var minWidth;
  var minWidth_metadata = new PropertyMetadata('minWidth');
  function get_minWidth($receiver) {
    return minWidth.getValue_jto6o9$($receiver, minWidth_metadata);
  }
  function set_minWidth($receiver, minWidth_0) {
    minWidth.setValue_6qj5c4$($receiver, minWidth_metadata, minWidth_0);
  }
  var maxWidth;
  var maxWidth_metadata = new PropertyMetadata('maxWidth');
  function get_maxWidth($receiver) {
    return maxWidth.getValue_jto6o9$($receiver, maxWidth_metadata);
  }
  function set_maxWidth($receiver, maxWidth_0) {
    maxWidth.setValue_6qj5c4$($receiver, maxWidth_metadata, maxWidth_0);
  }
  var minHeight;
  var minHeight_metadata = new PropertyMetadata('minHeight');
  function get_minHeight($receiver) {
    return minHeight.getValue_jto6o9$($receiver, minHeight_metadata);
  }
  function set_minHeight($receiver, minHeight_0) {
    minHeight.setValue_6qj5c4$($receiver, minHeight_metadata, minHeight_0);
  }
  var maxHeight;
  var maxHeight_metadata = new PropertyMetadata('maxHeight');
  function get_maxHeight($receiver) {
    return maxHeight.getValue_jto6o9$($receiver, maxHeight_metadata);
  }
  function set_maxHeight($receiver, maxHeight_0) {
    maxHeight.setValue_6qj5c4$($receiver, maxHeight_metadata, maxHeight_0);
  }
  var objectFit;
  var objectFit_metadata = new PropertyMetadata('objectFit');
  function get_objectFit($receiver) {
    return objectFit.getValue_jto6o9$($receiver, objectFit_metadata);
  }
  function set_objectFit($receiver, objectFit_0) {
    objectFit.setValue_6qj5c4$($receiver, objectFit_metadata, objectFit_0);
  }
  var objectPosition;
  var objectPosition_metadata = new PropertyMetadata('objectPosition');
  function get_objectPosition($receiver) {
    return objectPosition.getValue_jto6o9$($receiver, objectPosition_metadata);
  }
  function set_objectPosition($receiver, objectPosition_0) {
    objectPosition.setValue_6qj5c4$($receiver, objectPosition_metadata, objectPosition_0);
  }
  var opacity;
  var opacity_metadata = new PropertyMetadata('opacity');
  function get_opacity($receiver) {
    return opacity.getValue_jto6o9$($receiver, opacity_metadata);
  }
  function set_opacity($receiver, opacity_0) {
    opacity.setValue_6qj5c4$($receiver, opacity_metadata, opacity_0);
  }
  var outline;
  var outline_metadata = new PropertyMetadata('outline');
  function get_outline($receiver) {
    return outline.getValue_jto6o9$($receiver, outline_metadata);
  }
  function set_outline($receiver, outline_0) {
    outline.setValue_6qj5c4$($receiver, outline_metadata, outline_0);
  }
  var overflow;
  var overflow_metadata = new PropertyMetadata('overflow');
  function get_overflow($receiver) {
    return overflow.getValue_jto6o9$($receiver, overflow_metadata);
  }
  function set_overflow($receiver, overflow_0) {
    overflow.setValue_6qj5c4$($receiver, overflow_metadata, overflow_0);
  }
  var overflowX;
  var overflowX_metadata = new PropertyMetadata('overflowX');
  function get_overflowX($receiver) {
    return overflowX.getValue_jto6o9$($receiver, overflowX_metadata);
  }
  function set_overflowX($receiver, overflowX_0) {
    overflowX.setValue_6qj5c4$($receiver, overflowX_metadata, overflowX_0);
  }
  var overflowY;
  var overflowY_metadata = new PropertyMetadata('overflowY');
  function get_overflowY($receiver) {
    return overflowY.getValue_jto6o9$($receiver, overflowY_metadata);
  }
  function set_overflowY($receiver, overflowY_0) {
    overflowY.setValue_6qj5c4$($receiver, overflowY_metadata, overflowY_0);
  }
  var overflowWrap;
  var overflowWrap_metadata = new PropertyMetadata('overflowWrap');
  function get_overflowWrap($receiver) {
    return overflowWrap.getValue_jto6o9$($receiver, overflowWrap_metadata);
  }
  function set_overflowWrap($receiver, overflowWrap_0) {
    overflowWrap.setValue_6qj5c4$($receiver, overflowWrap_metadata, overflowWrap_0);
  }
  var overscrollBehavior;
  var overscrollBehavior_metadata = new PropertyMetadata('overscrollBehavior');
  function get_overscrollBehavior($receiver) {
    return overscrollBehavior.getValue_jto6o9$($receiver, overscrollBehavior_metadata);
  }
  function set_overscrollBehavior($receiver, overscrollBehavior_0) {
    overscrollBehavior.setValue_6qj5c4$($receiver, overscrollBehavior_metadata, overscrollBehavior_0);
  }
  var padding;
  var padding_metadata = new PropertyMetadata('padding');
  function get_padding($receiver) {
    return padding.getValue_jto6o9$($receiver, padding_metadata);
  }
  function set_padding($receiver, padding_0) {
    padding.setValue_6qj5c4$($receiver, padding_metadata, padding_0);
  }
  var paddingTop;
  var paddingTop_metadata = new PropertyMetadata('paddingTop');
  function get_paddingTop($receiver) {
    return paddingTop.getValue_jto6o9$($receiver, paddingTop_metadata);
  }
  function set_paddingTop($receiver, paddingTop_0) {
    paddingTop.setValue_6qj5c4$($receiver, paddingTop_metadata, paddingTop_0);
  }
  var paddingRight;
  var paddingRight_metadata = new PropertyMetadata('paddingRight');
  function get_paddingRight($receiver) {
    return paddingRight.getValue_jto6o9$($receiver, paddingRight_metadata);
  }
  function set_paddingRight($receiver, paddingRight_0) {
    paddingRight.setValue_6qj5c4$($receiver, paddingRight_metadata, paddingRight_0);
  }
  var paddingBottom;
  var paddingBottom_metadata = new PropertyMetadata('paddingBottom');
  function get_paddingBottom($receiver) {
    return paddingBottom.getValue_jto6o9$($receiver, paddingBottom_metadata);
  }
  function set_paddingBottom($receiver, paddingBottom_0) {
    paddingBottom.setValue_6qj5c4$($receiver, paddingBottom_metadata, paddingBottom_0);
  }
  var paddingLeft;
  var paddingLeft_metadata = new PropertyMetadata('paddingLeft');
  function get_paddingLeft($receiver) {
    return paddingLeft.getValue_jto6o9$($receiver, paddingLeft_metadata);
  }
  function set_paddingLeft($receiver, paddingLeft_0) {
    paddingLeft.setValue_6qj5c4$($receiver, paddingLeft_metadata, paddingLeft_0);
  }
  var pointerEvents;
  var pointerEvents_metadata = new PropertyMetadata('pointerEvents');
  function get_pointerEvents($receiver) {
    return pointerEvents.getValue_jto6o9$($receiver, pointerEvents_metadata);
  }
  function set_pointerEvents($receiver, pointerEvents_0) {
    pointerEvents.setValue_6qj5c4$($receiver, pointerEvents_metadata, pointerEvents_0);
  }
  var position;
  var position_metadata = new PropertyMetadata('position');
  function get_position($receiver) {
    return position.getValue_jto6o9$($receiver, position_metadata);
  }
  function set_position($receiver, position_0) {
    position.setValue_6qj5c4$($receiver, position_metadata, position_0);
  }
  var right;
  var right_metadata = new PropertyMetadata('right');
  function get_right($receiver) {
    return right.getValue_jto6o9$($receiver, right_metadata);
  }
  function set_right($receiver, right_0) {
    right.setValue_6qj5c4$($receiver, right_metadata, right_0);
  }
  var rowGap;
  var rowGap_metadata = new PropertyMetadata('rowGap');
  function get_rowGap($receiver) {
    return rowGap.getValue_jto6o9$($receiver, rowGap_metadata);
  }
  function set_rowGap($receiver, rowGap_0) {
    rowGap.setValue_6qj5c4$($receiver, rowGap_metadata, rowGap_0);
  }
  var scrollBehavior;
  var scrollBehavior_metadata = new PropertyMetadata('scrollBehavior');
  function get_scrollBehavior($receiver) {
    return scrollBehavior.getValue_jto6o9$($receiver, scrollBehavior_metadata);
  }
  function set_scrollBehavior($receiver, scrollBehavior_0) {
    scrollBehavior.setValue_6qj5c4$($receiver, scrollBehavior_metadata, scrollBehavior_0);
  }
  var textAlign;
  var textAlign_metadata = new PropertyMetadata('textAlign');
  function get_textAlign($receiver) {
    return textAlign.getValue_jto6o9$($receiver, textAlign_metadata);
  }
  function set_textAlign($receiver, textAlign_0) {
    textAlign.setValue_6qj5c4$($receiver, textAlign_metadata, textAlign_0);
  }
  var textDecoration;
  var textDecoration_metadata = new PropertyMetadata('textDecoration');
  function get_textDecoration($receiver) {
    return textDecoration.getValue_jto6o9$($receiver, textDecoration_metadata);
  }
  function set_textDecoration($receiver, textDecoration_0) {
    textDecoration.setValue_6qj5c4$($receiver, textDecoration_metadata, textDecoration_0);
  }
  var textOverflow;
  var textOverflow_metadata = new PropertyMetadata('textOverflow');
  function get_textOverflow($receiver) {
    return textOverflow.getValue_jto6o9$($receiver, textOverflow_metadata);
  }
  function set_textOverflow($receiver, textOverflow_0) {
    textOverflow.setValue_6qj5c4$($receiver, textOverflow_metadata, textOverflow_0);
  }
  var textTransform;
  var textTransform_metadata = new PropertyMetadata('textTransform');
  function get_textTransform($receiver) {
    return textTransform.getValue_jto6o9$($receiver, textTransform_metadata);
  }
  function set_textTransform($receiver, textTransform_0) {
    textTransform.setValue_6qj5c4$($receiver, textTransform_metadata, textTransform_0);
  }
  var top;
  var top_metadata = new PropertyMetadata('top');
  function get_top($receiver) {
    return top.getValue_jto6o9$($receiver, top_metadata);
  }
  function set_top($receiver, top_0) {
    top.setValue_6qj5c4$($receiver, top_metadata, top_0);
  }
  function transform$lambda() {
    return new Transforms();
  }
  var transform;
  var transform_metadata = new PropertyMetadata('transform');
  function get_transform($receiver) {
    return transform.getValue_jto6o9$($receiver, transform_metadata);
  }
  function set_transform($receiver, transform_0) {
    transform.setValue_6qj5c4$($receiver, transform_metadata, transform_0);
  }
  function transition$lambda() {
    return new Transitions();
  }
  var transition;
  var transition_metadata = new PropertyMetadata('transition');
  function get_transition($receiver) {
    return transition.getValue_jto6o9$($receiver, transition_metadata);
  }
  function set_transition($receiver, transition_0) {
    transition.setValue_6qj5c4$($receiver, transition_metadata, transition_0);
  }
  var verticalAlign;
  var verticalAlign_metadata = new PropertyMetadata('verticalAlign');
  function get_verticalAlign($receiver) {
    return verticalAlign.getValue_jto6o9$($receiver, verticalAlign_metadata);
  }
  function set_verticalAlign($receiver, verticalAlign_0) {
    verticalAlign.setValue_6qj5c4$($receiver, verticalAlign_metadata, verticalAlign_0);
  }
  var visibility;
  var visibility_metadata = new PropertyMetadata('visibility');
  function get_visibility($receiver) {
    return visibility.getValue_jto6o9$($receiver, visibility_metadata);
  }
  function set_visibility($receiver, visibility_0) {
    visibility.setValue_6qj5c4$($receiver, visibility_metadata, visibility_0);
  }
  var whiteSpace;
  var whiteSpace_metadata = new PropertyMetadata('whiteSpace');
  function get_whiteSpace($receiver) {
    return whiteSpace.getValue_jto6o9$($receiver, whiteSpace_metadata);
  }
  function set_whiteSpace($receiver, whiteSpace_0) {
    whiteSpace.setValue_6qj5c4$($receiver, whiteSpace_metadata, whiteSpace_0);
  }
  var width;
  var width_metadata = new PropertyMetadata('width');
  function get_width($receiver) {
    return width.getValue_jto6o9$($receiver, width_metadata);
  }
  function set_width($receiver, width_0) {
    width.setValue_6qj5c4$($receiver, width_metadata, width_0);
  }
  var wordBreak;
  var wordBreak_metadata = new PropertyMetadata('wordBreak');
  function get_wordBreak($receiver) {
    return wordBreak.getValue_jto6o9$($receiver, wordBreak_metadata);
  }
  function set_wordBreak($receiver, wordBreak_0) {
    wordBreak.setValue_6qj5c4$($receiver, wordBreak_metadata, wordBreak_0);
  }
  var wordWrap;
  var wordWrap_metadata = new PropertyMetadata('wordWrap');
  function get_wordWrap($receiver) {
    return wordWrap.getValue_jto6o9$($receiver, wordWrap_metadata);
  }
  function set_wordWrap($receiver, wordWrap_0) {
    wordWrap.setValue_6qj5c4$($receiver, wordWrap_metadata, wordWrap_0);
  }
  var userSelect;
  var userSelect_metadata = new PropertyMetadata('userSelect');
  function get_userSelect($receiver) {
    return userSelect.getValue_jto6o9$($receiver, userSelect_metadata);
  }
  function set_userSelect($receiver, userSelect_0) {
    userSelect.setValue_6qj5c4$($receiver, userSelect_metadata, userSelect_0);
  }
  var tableLayout;
  var tableLayout_metadata = new PropertyMetadata('tableLayout');
  function get_tableLayout($receiver) {
    return tableLayout.getValue_jto6o9$($receiver, tableLayout_metadata);
  }
  function set_tableLayout($receiver, tableLayout_0) {
    tableLayout.setValue_6qj5c4$($receiver, tableLayout_metadata, tableLayout_0);
  }
  var borderCollapse;
  var borderCollapse_metadata = new PropertyMetadata('borderCollapse');
  function get_borderCollapse($receiver) {
    return borderCollapse.getValue_jto6o9$($receiver, borderCollapse_metadata);
  }
  function set_borderCollapse($receiver, borderCollapse_0) {
    borderCollapse.setValue_6qj5c4$($receiver, borderCollapse_metadata, borderCollapse_0);
  }
  var zIndex;
  var zIndex_metadata = new PropertyMetadata('zIndex');
  function get_zIndex($receiver) {
    return zIndex.getValue_jto6o9$($receiver, zIndex_metadata);
  }
  function set_zIndex($receiver, zIndex_0) {
    zIndex.setValue_6qj5c4$($receiver, zIndex_metadata, zIndex_0);
  }
  var resize;
  var resize_metadata = new PropertyMetadata('resize');
  function get_resize($receiver) {
    return resize.getValue_jto6o9$($receiver, resize_metadata);
  }
  function set_resize($receiver, resize_0) {
    resize.setValue_6qj5c4$($receiver, resize_metadata, resize_0);
  }
  function flex($receiver, flexGrow, flexShrink, flexBasis) {
    if (flexGrow === void 0)
      flexGrow = 0.0;
    if (flexShrink === void 0)
      flexShrink = 1.0;
    if (flexBasis === void 0)
      flexBasis = FlexBasis$Companion_getInstance().auto;
    $receiver.put_puj7f4$('flex', flexGrow.toString() + ' ' + flexShrink + ' ' + flexBasis);
  }
  function flex_0($receiver, flexGrow, flexShrink, flexBasis) {
    if (flexGrow === void 0)
      flexGrow = 0.0;
    if (flexShrink === void 0)
      flexShrink = 1.0;
    flex($receiver, flexGrow, flexShrink, get_basis(flexBasis));
  }
  function grow$put(this$grow) {
    return function (key, value) {
      this$grow.declarations.put_xwzc9p$(key, value);
    };
  }
  function grow($receiver, grow) {
    switch (grow.name) {
      case 'GROW':
        flex($receiver, 1.0, 0.0);
        break;
      case 'SHRINK':
        flex($receiver, 0.0, 1.0);
        break;
      case 'NONE':
        flex($receiver, 0.0, 0.0);
        break;
      case 'GROW_SHRINK':
        flex($receiver, 1.0, 1.0);
        break;
    }
    var put = grow$put($receiver);
  }
  function getShorthandValue(top, right, bottom, left) {
    var tmp$;
    if (equals(top, bottom) && equals(right, left)) {
      if (equals(top, right)) {
        tmp$ = toString(top);
      } else {
        tmp$ = toString(top) + ' ' + toString(right);
      }
    } else {
      if (equals(right, left)) {
        tmp$ = toString(top) + ' ' + toString(right) + ' ' + toString(bottom);
      } else {
        tmp$ = toString(top) + ' ' + toString(right) + ' ' + toString(bottom) + ' ' + toString(left);
      }
    }
    return tmp$;
  }
  function margin_0($receiver, top, right, bottom, left) {
    if (top === void 0)
      top = null;
    if (right === void 0)
      right = null;
    if (bottom === void 0)
      bottom = null;
    if (left === void 0)
      left = null;
    if (top != null && right != null && bottom != null && left != null) {
      set_margin($receiver, getShorthandValue(top, right, bottom, left));
    } else {
      if (top != null) {
        set_marginTop($receiver, top);
      }if (right != null) {
        set_marginRight($receiver, right);
      }if (bottom != null) {
        set_marginBottom($receiver, bottom);
      }if (left != null) {
        set_marginLeft($receiver, left);
      }}
  }
  function margin_1($receiver, all) {
    margin_0($receiver, all, all, all, all);
  }
  function margin_2($receiver, vertical, horizontal) {
    if (vertical === void 0)
      vertical = null;
    if (horizontal === void 0)
      horizontal = null;
    margin_0($receiver, vertical, horizontal, vertical, horizontal);
  }
  function margin_3($receiver, top, horizontal, bottom) {
    margin_0($receiver, top, horizontal, bottom, horizontal);
  }
  function padding_0($receiver, top, right, bottom, left) {
    if (top === void 0)
      top = null;
    if (right === void 0)
      right = null;
    if (bottom === void 0)
      bottom = null;
    if (left === void 0)
      left = null;
    if (top != null && right != null && bottom != null && left != null) {
      set_padding($receiver, getShorthandValue(top, right, bottom, left));
    } else {
      if (top != null) {
        set_paddingTop($receiver, top);
      }if (right != null) {
        set_paddingRight($receiver, right);
      }if (bottom != null) {
        set_paddingBottom($receiver, bottom);
      }if (left != null) {
        set_paddingLeft($receiver, left);
      }}
  }
  function padding_1($receiver, all) {
    padding_0($receiver, all, all, all, all);
  }
  function padding_2($receiver, vertical, horizontal) {
    if (vertical === void 0)
      vertical = null;
    if (horizontal === void 0)
      horizontal = null;
    padding_0($receiver, vertical, horizontal, vertical, horizontal);
  }
  function padding_3($receiver, top, horizontal, bottom) {
    padding_0($receiver, top, horizontal, bottom, horizontal);
  }
  function TagSelector(tagName) {
    this.tagName = tagName;
  }
  TagSelector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagSelector',
    interfaces: []
  };
  function TagSelectorFactory() {
    TagSelectorFactory_instance = this;
  }
  TagSelectorFactory.prototype.getValue_d6mtq7$ = function (thisRef, property) {
    return new TagSelector(property.callableName);
  };
  TagSelectorFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TagSelectorFactory',
    interfaces: []
  };
  var TagSelectorFactory_instance = null;
  function TagSelectorFactory_getInstance() {
    if (TagSelectorFactory_instance === null) {
      new TagSelectorFactory();
    }return TagSelectorFactory_instance;
  }
  var a;
  var a_metadata = new PropertyMetadata('a');
  function get_a() {
    return a.getValue_d6mtq7$(this, a_metadata);
  }
  var abbr;
  var abbr_metadata = new PropertyMetadata('abbr');
  function get_abbr() {
    return abbr.getValue_d6mtq7$(this, abbr_metadata);
  }
  var area;
  var area_metadata = new PropertyMetadata('area');
  function get_area() {
    return area.getValue_d6mtq7$(this, area_metadata);
  }
  var address;
  var address_metadata = new PropertyMetadata('address');
  function get_address() {
    return address.getValue_d6mtq7$(this, address_metadata);
  }
  var article;
  var article_metadata = new PropertyMetadata('article');
  function get_article() {
    return article.getValue_d6mtq7$(this, article_metadata);
  }
  var aside;
  var aside_metadata = new PropertyMetadata('aside');
  function get_aside() {
    return aside.getValue_d6mtq7$(this, aside_metadata);
  }
  var audio;
  var audio_metadata = new PropertyMetadata('audio');
  function get_audio() {
    return audio.getValue_d6mtq7$(this, audio_metadata);
  }
  var b;
  var b_metadata = new PropertyMetadata('b');
  function get_b() {
    return b.getValue_d6mtq7$(this, b_metadata);
  }
  var bdi;
  var bdi_metadata = new PropertyMetadata('bdi');
  function get_bdi() {
    return bdi.getValue_d6mtq7$(this, bdi_metadata);
  }
  var blockquote;
  var blockquote_metadata = new PropertyMetadata('blockquote');
  function get_blockquote() {
    return blockquote.getValue_d6mtq7$(this, blockquote_metadata);
  }
  var bdo;
  var bdo_metadata = new PropertyMetadata('bdo');
  function get_bdo() {
    return bdo.getValue_d6mtq7$(this, bdo_metadata);
  }
  var body;
  var body_metadata = new PropertyMetadata('body');
  function get_body() {
    return body.getValue_d6mtq7$(this, body_metadata);
  }
  var br;
  var br_metadata = new PropertyMetadata('br');
  function get_br() {
    return br.getValue_d6mtq7$(this, br_metadata);
  }
  var button;
  var button_metadata = new PropertyMetadata('button');
  function get_button() {
    return button.getValue_d6mtq7$(this, button_metadata);
  }
  var canvas;
  var canvas_metadata = new PropertyMetadata('canvas');
  function get_canvas() {
    return canvas.getValue_d6mtq7$(this, canvas_metadata);
  }
  var caption;
  var caption_metadata = new PropertyMetadata('caption');
  function get_caption() {
    return caption.getValue_d6mtq7$(this, caption_metadata);
  }
  var cite;
  var cite_metadata = new PropertyMetadata('cite');
  function get_cite() {
    return cite.getValue_d6mtq7$(this, cite_metadata);
  }
  var code;
  var code_metadata = new PropertyMetadata('code');
  function get_code() {
    return code.getValue_d6mtq7$(this, code_metadata);
  }
  var col;
  var col_metadata = new PropertyMetadata('col');
  function get_col() {
    return col.getValue_d6mtq7$(this, col_metadata);
  }
  var colgroup;
  var colgroup_metadata = new PropertyMetadata('colgroup');
  function get_colgroup() {
    return colgroup.getValue_d6mtq7$(this, colgroup_metadata);
  }
  var command;
  var command_metadata = new PropertyMetadata('command');
  function get_command() {
    return command.getValue_d6mtq7$(this, command_metadata);
  }
  var datalist;
  var datalist_metadata = new PropertyMetadata('datalist');
  function get_datalist() {
    return datalist.getValue_d6mtq7$(this, datalist_metadata);
  }
  var del;
  var del_metadata = new PropertyMetadata('del');
  function get_del() {
    return del.getValue_d6mtq7$(this, del_metadata);
  }
  var details;
  var details_metadata = new PropertyMetadata('details');
  function get_details() {
    return details.getValue_d6mtq7$(this, details_metadata);
  }
  var dfn;
  var dfn_metadata = new PropertyMetadata('dfn');
  function get_dfn() {
    return dfn.getValue_d6mtq7$(this, dfn_metadata);
  }
  var dialog;
  var dialog_metadata = new PropertyMetadata('dialog');
  function get_dialog() {
    return dialog.getValue_d6mtq7$(this, dialog_metadata);
  }
  var div;
  var div_metadata = new PropertyMetadata('div');
  function get_div() {
    return div.getValue_d6mtq7$(this, div_metadata);
  }
  var dl;
  var dl_metadata = new PropertyMetadata('dl');
  function get_dl() {
    return dl.getValue_d6mtq7$(this, dl_metadata);
  }
  var em;
  var em_metadata = new PropertyMetadata('em');
  function get_em_0() {
    return em.getValue_d6mtq7$(this, em_metadata);
  }
  var embed;
  var embed_metadata = new PropertyMetadata('embed');
  function get_embed() {
    return embed.getValue_d6mtq7$(this, embed_metadata);
  }
  var fieldset;
  var fieldset_metadata = new PropertyMetadata('fieldset');
  function get_fieldset() {
    return fieldset.getValue_d6mtq7$(this, fieldset_metadata);
  }
  var figure;
  var figure_metadata = new PropertyMetadata('figure');
  function get_figure() {
    return figure.getValue_d6mtq7$(this, figure_metadata);
  }
  var figcaption;
  var figcaption_metadata = new PropertyMetadata('figcaption');
  function get_figcaption() {
    return figcaption.getValue_d6mtq7$(this, figcaption_metadata);
  }
  var footer;
  var footer_metadata = new PropertyMetadata('footer');
  function get_footer() {
    return footer.getValue_d6mtq7$(this, footer_metadata);
  }
  var form;
  var form_metadata = new PropertyMetadata('form');
  function get_form() {
    return form.getValue_d6mtq7$(this, form_metadata);
  }
  var h1;
  var h1_metadata = new PropertyMetadata('h1');
  function get_h1() {
    return h1.getValue_d6mtq7$(this, h1_metadata);
  }
  var h2;
  var h2_metadata = new PropertyMetadata('h2');
  function get_h2() {
    return h2.getValue_d6mtq7$(this, h2_metadata);
  }
  var h3;
  var h3_metadata = new PropertyMetadata('h3');
  function get_h3() {
    return h3.getValue_d6mtq7$(this, h3_metadata);
  }
  var h4;
  var h4_metadata = new PropertyMetadata('h4');
  function get_h4() {
    return h4.getValue_d6mtq7$(this, h4_metadata);
  }
  var h5;
  var h5_metadata = new PropertyMetadata('h5');
  function get_h5() {
    return h5.getValue_d6mtq7$(this, h5_metadata);
  }
  var h6;
  var h6_metadata = new PropertyMetadata('h6');
  function get_h6() {
    return h6.getValue_d6mtq7$(this, h6_metadata);
  }
  var header;
  var header_metadata = new PropertyMetadata('header');
  function get_header() {
    return header.getValue_d6mtq7$(this, header_metadata);
  }
  var hgroup;
  var hgroup_metadata = new PropertyMetadata('hgroup');
  function get_hgroup() {
    return hgroup.getValue_d6mtq7$(this, hgroup_metadata);
  }
  var hr;
  var hr_metadata = new PropertyMetadata('hr');
  function get_hr() {
    return hr.getValue_d6mtq7$(this, hr_metadata);
  }
  var html;
  var html_metadata = new PropertyMetadata('html');
  function get_html() {
    return html.getValue_d6mtq7$(this, html_metadata);
  }
  var i;
  var i_metadata = new PropertyMetadata('i');
  function get_i() {
    return i.getValue_d6mtq7$(this, i_metadata);
  }
  var iframe;
  var iframe_metadata = new PropertyMetadata('iframe');
  function get_iframe() {
    return iframe.getValue_d6mtq7$(this, iframe_metadata);
  }
  var img;
  var img_metadata = new PropertyMetadata('img');
  function get_img() {
    return img.getValue_d6mtq7$(this, img_metadata);
  }
  var input;
  var input_metadata = new PropertyMetadata('input');
  function get_input() {
    return input.getValue_d6mtq7$(this, input_metadata);
  }
  var ins;
  var ins_metadata = new PropertyMetadata('ins');
  function get_ins() {
    return ins.getValue_d6mtq7$(this, ins_metadata);
  }
  var kbd;
  var kbd_metadata = new PropertyMetadata('kbd');
  function get_kbd() {
    return kbd.getValue_d6mtq7$(this, kbd_metadata);
  }
  var keygen;
  var keygen_metadata = new PropertyMetadata('keygen');
  function get_keygen() {
    return keygen.getValue_d6mtq7$(this, keygen_metadata);
  }
  var label;
  var label_metadata = new PropertyMetadata('label');
  function get_label() {
    return label.getValue_d6mtq7$(this, label_metadata);
  }
  var link;
  var link_metadata = new PropertyMetadata('link');
  function get_link() {
    return link.getValue_d6mtq7$(this, link_metadata);
  }
  var map;
  var map_metadata = new PropertyMetadata('map');
  function get_map() {
    return map.getValue_d6mtq7$(this, map_metadata);
  }
  var mark;
  var mark_metadata = new PropertyMetadata('mark');
  function get_mark() {
    return mark.getValue_d6mtq7$(this, mark_metadata);
  }
  var math_0;
  var math_metadata = new PropertyMetadata('math');
  function get_math() {
    return math_0.getValue_d6mtq7$(this, math_metadata);
  }
  var menu;
  var menu_metadata = new PropertyMetadata('menu');
  function get_menu() {
    return menu.getValue_d6mtq7$(this, menu_metadata);
  }
  var meta;
  var meta_metadata = new PropertyMetadata('meta');
  function get_meta() {
    return meta.getValue_d6mtq7$(this, meta_metadata);
  }
  var meter;
  var meter_metadata = new PropertyMetadata('meter');
  function get_meter() {
    return meter.getValue_d6mtq7$(this, meter_metadata);
  }
  var nav;
  var nav_metadata = new PropertyMetadata('nav');
  function get_nav() {
    return nav.getValue_d6mtq7$(this, nav_metadata);
  }
  var noscript;
  var noscript_metadata = new PropertyMetadata('noscript');
  function get_noscript() {
    return noscript.getValue_d6mtq7$(this, noscript_metadata);
  }
  var ol;
  var ol_metadata = new PropertyMetadata('ol');
  function get_ol() {
    return ol.getValue_d6mtq7$(this, ol_metadata);
  }
  var objectTag;
  var objectTag_metadata = new PropertyMetadata('objectTag');
  function get_objectTag() {
    return objectTag.getValue_d6mtq7$(this, objectTag_metadata);
  }
  var output;
  var output_metadata = new PropertyMetadata('output');
  function get_output() {
    return output.getValue_d6mtq7$(this, output_metadata);
  }
  var p;
  var p_metadata = new PropertyMetadata('p');
  function get_p() {
    return p.getValue_d6mtq7$(this, p_metadata);
  }
  var pre;
  var pre_metadata = new PropertyMetadata('pre');
  function get_pre() {
    return pre.getValue_d6mtq7$(this, pre_metadata);
  }
  var progress;
  var progress_metadata = new PropertyMetadata('progress');
  function get_progress() {
    return progress.getValue_d6mtq7$(this, progress_metadata);
  }
  var q;
  var q_metadata = new PropertyMetadata('q');
  function get_q() {
    return q.getValue_d6mtq7$(this, q_metadata);
  }
  var ruby;
  var ruby_metadata = new PropertyMetadata('ruby');
  function get_ruby() {
    return ruby.getValue_d6mtq7$(this, ruby_metadata);
  }
  var samp;
  var samp_metadata = new PropertyMetadata('samp');
  function get_samp() {
    return samp.getValue_d6mtq7$(this, samp_metadata);
  }
  var script;
  var script_metadata = new PropertyMetadata('script');
  function get_script() {
    return script.getValue_d6mtq7$(this, script_metadata);
  }
  var section;
  var section_metadata = new PropertyMetadata('section');
  function get_section() {
    return section.getValue_d6mtq7$(this, section_metadata);
  }
  var select;
  var select_metadata = new PropertyMetadata('select');
  function get_select() {
    return select.getValue_d6mtq7$(this, select_metadata);
  }
  var small;
  var small_metadata = new PropertyMetadata('small');
  function get_small() {
    return small.getValue_d6mtq7$(this, small_metadata);
  }
  var span;
  var span_metadata = new PropertyMetadata('span');
  function get_span() {
    return span.getValue_d6mtq7$(this, span_metadata);
  }
  var strong;
  var strong_metadata = new PropertyMetadata('strong');
  function get_strong() {
    return strong.getValue_d6mtq7$(this, strong_metadata);
  }
  var style;
  var style_metadata = new PropertyMetadata('style');
  function get_style() {
    return style.getValue_d6mtq7$(this, style_metadata);
  }
  var sub;
  var sub_metadata = new PropertyMetadata('sub');
  function get_sub() {
    return sub.getValue_d6mtq7$(this, sub_metadata);
  }
  var sup;
  var sup_metadata = new PropertyMetadata('sup');
  function get_sup() {
    return sup.getValue_d6mtq7$(this, sup_metadata);
  }
  var svg;
  var svg_metadata = new PropertyMetadata('svg');
  function get_svg() {
    return svg.getValue_d6mtq7$(this, svg_metadata);
  }
  var table;
  var table_metadata = new PropertyMetadata('table');
  function get_table() {
    return table.getValue_d6mtq7$(this, table_metadata);
  }
  var tbody;
  var tbody_metadata = new PropertyMetadata('tbody');
  function get_tbody() {
    return tbody.getValue_d6mtq7$(this, tbody_metadata);
  }
  var td;
  var td_metadata = new PropertyMetadata('td');
  function get_td() {
    return td.getValue_d6mtq7$(this, td_metadata);
  }
  var textarea;
  var textarea_metadata = new PropertyMetadata('textarea');
  function get_textarea() {
    return textarea.getValue_d6mtq7$(this, textarea_metadata);
  }
  var tfoot;
  var tfoot_metadata = new PropertyMetadata('tfoot');
  function get_tfoot() {
    return tfoot.getValue_d6mtq7$(this, tfoot_metadata);
  }
  var th;
  var th_metadata = new PropertyMetadata('th');
  function get_th() {
    return th.getValue_d6mtq7$(this, th_metadata);
  }
  var thead;
  var thead_metadata = new PropertyMetadata('thead');
  function get_thead() {
    return thead.getValue_d6mtq7$(this, thead_metadata);
  }
  var time;
  var time_metadata = new PropertyMetadata('time');
  function get_time() {
    return time.getValue_d6mtq7$(this, time_metadata);
  }
  var tr;
  var tr_metadata = new PropertyMetadata('tr');
  function get_tr() {
    return tr.getValue_d6mtq7$(this, tr_metadata);
  }
  var ul;
  var ul_metadata = new PropertyMetadata('ul');
  function get_ul() {
    return ul.getValue_d6mtq7$(this, ul_metadata);
  }
  function get_varTag() {
    return new TagSelector('var');
  }
  var video;
  var video_metadata = new PropertyMetadata('video');
  function get_video() {
    return video.getValue_d6mtq7$(this, video_metadata);
  }
  function IterationCount(value) {
    IterationCount$Companion_getInstance();
    CssValue.call(this, value);
    this.value_s4rj7w$_0 = value;
  }
  Object.defineProperty(IterationCount.prototype, 'value', {
    get: function () {
      return this.value_s4rj7w$_0;
    }
  });
  function IterationCount$Companion() {
    IterationCount$Companion_instance = this;
    this.infinite = new IterationCount('infinite');
  }
  IterationCount$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IterationCount$Companion_instance = null;
  function IterationCount$Companion_getInstance() {
    if (IterationCount$Companion_instance === null) {
      new IterationCount$Companion();
    }return IterationCount$Companion_instance;
  }
  IterationCount.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IterationCount',
    interfaces: [CssValue]
  };
  function get_times($receiver) {
    return new IterationCount($receiver.toString());
  }
  function AnimationDirection(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AnimationDirection_initFields() {
    AnimationDirection_initFields = function () {
    };
    AnimationDirection$initial_instance = new AnimationDirection('initial', 0);
    AnimationDirection$inherit_instance = new AnimationDirection('inherit', 1);
    AnimationDirection$unset_instance = new AnimationDirection('unset', 2);
    AnimationDirection$normal_instance = new AnimationDirection('normal', 3);
    AnimationDirection$reverse_instance = new AnimationDirection('reverse', 4);
    AnimationDirection$alternate_instance = new AnimationDirection('alternate', 5);
    AnimationDirection$alternateReverse_instance = new AnimationDirection('alternateReverse', 6);
  }
  var AnimationDirection$initial_instance;
  function AnimationDirection$initial_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$initial_instance;
  }
  var AnimationDirection$inherit_instance;
  function AnimationDirection$inherit_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$inherit_instance;
  }
  var AnimationDirection$unset_instance;
  function AnimationDirection$unset_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$unset_instance;
  }
  var AnimationDirection$normal_instance;
  function AnimationDirection$normal_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$normal_instance;
  }
  var AnimationDirection$reverse_instance;
  function AnimationDirection$reverse_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$reverse_instance;
  }
  var AnimationDirection$alternate_instance;
  function AnimationDirection$alternate_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$alternate_instance;
  }
  var AnimationDirection$alternateReverse_instance;
  function AnimationDirection$alternateReverse_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$alternateReverse_instance;
  }
  AnimationDirection.prototype.toString = function () {
    return hyphenize(this.name);
  };
  AnimationDirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationDirection',
    interfaces: [Enum]
  };
  function AnimationDirection$values() {
    return [AnimationDirection$initial_getInstance(), AnimationDirection$inherit_getInstance(), AnimationDirection$unset_getInstance(), AnimationDirection$normal_getInstance(), AnimationDirection$reverse_getInstance(), AnimationDirection$alternate_getInstance(), AnimationDirection$alternateReverse_getInstance()];
  }
  AnimationDirection.values = AnimationDirection$values;
  function AnimationDirection$valueOf(name) {
    switch (name) {
      case 'initial':
        return AnimationDirection$initial_getInstance();
      case 'inherit':
        return AnimationDirection$inherit_getInstance();
      case 'unset':
        return AnimationDirection$unset_getInstance();
      case 'normal':
        return AnimationDirection$normal_getInstance();
      case 'reverse':
        return AnimationDirection$reverse_getInstance();
      case 'alternate':
        return AnimationDirection$alternate_getInstance();
      case 'alternateReverse':
        return AnimationDirection$alternateReverse_getInstance();
      default:throwISE('No enum constant kotlinx.css.properties.AnimationDirection.' + name);
    }
  }
  AnimationDirection.valueOf_61zpoe$ = AnimationDirection$valueOf;
  function FillMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FillMode_initFields() {
    FillMode_initFields = function () {
    };
    FillMode$initial_instance = new FillMode('initial', 0);
    FillMode$inherit_instance = new FillMode('inherit', 1);
    FillMode$unset_instance = new FillMode('unset', 2);
    FillMode$none_instance = new FillMode('none', 3);
    FillMode$forwards_instance = new FillMode('forwards', 4);
    FillMode$backwards_instance = new FillMode('backwards', 5);
    FillMode$both_instance = new FillMode('both', 6);
  }
  var FillMode$initial_instance;
  function FillMode$initial_getInstance() {
    FillMode_initFields();
    return FillMode$initial_instance;
  }
  var FillMode$inherit_instance;
  function FillMode$inherit_getInstance() {
    FillMode_initFields();
    return FillMode$inherit_instance;
  }
  var FillMode$unset_instance;
  function FillMode$unset_getInstance() {
    FillMode_initFields();
    return FillMode$unset_instance;
  }
  var FillMode$none_instance;
  function FillMode$none_getInstance() {
    FillMode_initFields();
    return FillMode$none_instance;
  }
  var FillMode$forwards_instance;
  function FillMode$forwards_getInstance() {
    FillMode_initFields();
    return FillMode$forwards_instance;
  }
  var FillMode$backwards_instance;
  function FillMode$backwards_getInstance() {
    FillMode_initFields();
    return FillMode$backwards_instance;
  }
  var FillMode$both_instance;
  function FillMode$both_getInstance() {
    FillMode_initFields();
    return FillMode$both_instance;
  }
  FillMode.prototype.toString = function () {
    return this.name;
  };
  FillMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FillMode',
    interfaces: [Enum]
  };
  function FillMode$values() {
    return [FillMode$initial_getInstance(), FillMode$inherit_getInstance(), FillMode$unset_getInstance(), FillMode$none_getInstance(), FillMode$forwards_getInstance(), FillMode$backwards_getInstance(), FillMode$both_getInstance()];
  }
  FillMode.values = FillMode$values;
  function FillMode$valueOf(name) {
    switch (name) {
      case 'initial':
        return FillMode$initial_getInstance();
      case 'inherit':
        return FillMode$inherit_getInstance();
      case 'unset':
        return FillMode$unset_getInstance();
      case 'none':
        return FillMode$none_getInstance();
      case 'forwards':
        return FillMode$forwards_getInstance();
      case 'backwards':
        return FillMode$backwards_getInstance();
      case 'both':
        return FillMode$both_getInstance();
      default:throwISE('No enum constant kotlinx.css.properties.FillMode.' + name);
    }
  }
  FillMode.valueOf_61zpoe$ = FillMode$valueOf;
  function PlayState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PlayState_initFields() {
    PlayState_initFields = function () {
    };
    PlayState$initial_instance = new PlayState('initial', 0);
    PlayState$inherit_instance = new PlayState('inherit', 1);
    PlayState$unset_instance = new PlayState('unset', 2);
    PlayState$running_instance = new PlayState('running', 3);
    PlayState$paused_instance = new PlayState('paused', 4);
  }
  var PlayState$initial_instance;
  function PlayState$initial_getInstance() {
    PlayState_initFields();
    return PlayState$initial_instance;
  }
  var PlayState$inherit_instance;
  function PlayState$inherit_getInstance() {
    PlayState_initFields();
    return PlayState$inherit_instance;
  }
  var PlayState$unset_instance;
  function PlayState$unset_getInstance() {
    PlayState_initFields();
    return PlayState$unset_instance;
  }
  var PlayState$running_instance;
  function PlayState$running_getInstance() {
    PlayState_initFields();
    return PlayState$running_instance;
  }
  var PlayState$paused_instance;
  function PlayState$paused_getInstance() {
    PlayState_initFields();
    return PlayState$paused_instance;
  }
  PlayState.prototype.toString = function () {
    return this.name;
  };
  PlayState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayState',
    interfaces: [Enum]
  };
  function PlayState$values() {
    return [PlayState$initial_getInstance(), PlayState$inherit_getInstance(), PlayState$unset_getInstance(), PlayState$running_getInstance(), PlayState$paused_getInstance()];
  }
  PlayState.values = PlayState$values;
  function PlayState$valueOf(name) {
    switch (name) {
      case 'initial':
        return PlayState$initial_getInstance();
      case 'inherit':
        return PlayState$inherit_getInstance();
      case 'unset':
        return PlayState$unset_getInstance();
      case 'running':
        return PlayState$running_getInstance();
      case 'paused':
        return PlayState$paused_getInstance();
      default:throwISE('No enum constant kotlinx.css.properties.PlayState.' + name);
    }
  }
  PlayState.valueOf_61zpoe$ = PlayState$valueOf;
  function Animation(duration, timing, delay, iterationCount, direction, fillMode, playState, name) {
    this.duration = duration;
    this.timing_0 = timing;
    this.delay_0 = delay;
    this.iterationCount_0 = iterationCount;
    this.direction_0 = direction;
    this.fillMode_0 = fillMode;
    this.playState_0 = playState;
    this.name = name;
  }
  Animation.prototype.toString = function () {
    return this.duration.toString() + ' ' + this.timing_0 + ' ' + this.delay_0 + ' ' + this.iterationCount_0 + ' ' + this.direction_0 + ' ' + this.fillMode_0 + ' ' + this.playState_0 + ' ' + this.name;
  };
  Animation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Animation',
    interfaces: []
  };
  function Animations() {
    Animations$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function Animations$Companion() {
    Animations$Companion_instance = this;
    this.none = new Animations();
  }
  Animations$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Animations$Companion_instance = null;
  function Animations$Companion_getInstance() {
    if (Animations$Companion_instance === null) {
      new Animations$Companion();
    }return Animations$Companion_instance;
  }
  Animations.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Animations',
    interfaces: [StyleList]
  };
  function animation_0($receiver, name, duration, timing, delay, iterationCount, direction, fillMode, playState) {
    if (duration === void 0)
      duration = get_s(0);
    if (timing === void 0)
      timing = Timing$Companion_getInstance().ease;
    if (delay === void 0)
      delay = get_s(0);
    if (iterationCount === void 0)
      iterationCount = get_times(1);
    if (direction === void 0)
      direction = AnimationDirection$normal_getInstance();
    if (fillMode === void 0)
      fillMode = FillMode$none_getInstance();
    if (playState === void 0)
      playState = PlayState$running_getInstance();
    get_animation($receiver).plusAssign_11rb$(new Animation(duration, timing, delay, iterationCount, direction, fillMode, playState, name));
  }
  function border_0($receiver, width, style, color, borderRadius) {
    if (borderRadius === void 0)
      borderRadius = null;
    set_border($receiver, width.toString() + ' ' + style + ' ' + color);
    if (borderRadius != null) {
      set_borderRadius($receiver, borderRadius);
    }}
  function borderTop_0($receiver, width, style, color) {
    set_borderTop($receiver, width.toString() + ' ' + style + ' ' + color);
  }
  function borderRight_0($receiver, width, style, color) {
    set_borderRight($receiver, width.toString() + ' ' + style + ' ' + color);
  }
  function borderBottom_0($receiver, width, style, color) {
    set_borderBottom($receiver, width.toString() + ' ' + style + ' ' + color);
  }
  function borderLeft_0($receiver, width, style, color) {
    set_borderLeft($receiver, width.toString() + ' ' + style + ' ' + color);
  }
  function BoxShadow(inset, offsetX, offsetY, blurRadius, spreadRadius, color) {
    this.inset_0 = inset;
    this.offsetX_0 = offsetX;
    this.offsetY_0 = offsetY;
    this.blurRadius_0 = blurRadius;
    this.spreadRadius_0 = spreadRadius;
    this.color = color;
  }
  BoxShadow.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    if (this.inset_0)
      $receiver.append_pdl1vj$('inset ');
    $receiver.append_pdl1vj$(this.offsetX_0.toString() + ' ' + this.offsetY_0 + ' ' + this.blurRadius_0 + ' ' + this.spreadRadius_0 + ' ' + this.color);
    return $receiver.toString();
  };
  BoxShadow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxShadow',
    interfaces: []
  };
  function BoxShadows() {
    BoxShadows$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function BoxShadows$Companion() {
    BoxShadows$Companion_instance = this;
    this.none = new BoxShadows();
  }
  BoxShadows$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BoxShadows$Companion_instance = null;
  function BoxShadows$Companion_getInstance() {
    if (BoxShadows$Companion_instance === null) {
      new BoxShadows$Companion();
    }return BoxShadows$Companion_instance;
  }
  BoxShadows.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxShadows',
    interfaces: [StyleList]
  };
  function boxShadow_0($receiver, color, offsetX, offsetY, blurRadius, spreadRadius) {
    if (offsetX === void 0)
      offsetX = get_px(0);
    if (offsetY === void 0)
      offsetY = get_px(0);
    if (blurRadius === void 0)
      blurRadius = get_px(0);
    if (spreadRadius === void 0)
      spreadRadius = get_px(0);
    get_boxShadow($receiver).plusAssign_11rb$(new BoxShadow(false, offsetX, offsetY, blurRadius, spreadRadius, color));
  }
  function boxShadowInset($receiver, color, offsetX, offsetY, blurRadius, spreadRadius) {
    if (offsetX === void 0)
      offsetX = get_px(0);
    if (offsetY === void 0)
      offsetY = get_px(0);
    if (blurRadius === void 0)
      blurRadius = get_px(0);
    if (spreadRadius === void 0)
      spreadRadius = get_px(0);
    get_boxShadow($receiver).plusAssign_11rb$(new BoxShadow(true, offsetX, offsetY, blurRadius, spreadRadius, color));
  }
  function KeyframesBuilder(indent) {
    if (indent === void 0)
      indent = '';
    this.indent_0 = indent;
    this.rules_pc3mle$_0 = ArrayList_init();
    this.multiRules_8s8fz7$_0 = ArrayList_init();
  }
  KeyframesBuilder.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    this.buildRules_s47sd7$($receiver, this.indent_0);
    return $receiver.toString();
  };
  Object.defineProperty(KeyframesBuilder.prototype, 'rules', {
    configurable: true,
    get: function () {
      return this.rules_pc3mle$_0;
    }
  });
  Object.defineProperty(KeyframesBuilder.prototype, 'multiRules', {
    configurable: true,
    get: function () {
      return this.multiRules_8s8fz7$_0;
    }
  });
  KeyframesBuilder.prototype.from_sa4rfh$ = function (block) {
    return this.rule_xk38i9$('from', block);
  };
  KeyframesBuilder.prototype.to_sa4rfh$ = function (block) {
    return this.rule_xk38i9$('to', block);
  };
  KeyframesBuilder.prototype.invoke_noz8fk$ = function ($receiver, block) {
    return this.rule_xk38i9$($receiver.toString() + '%', block);
  };
  KeyframesBuilder.prototype.invoke_3biwx8$ = function ($receiver, block) {
    return this.rule_xk38i9$($receiver.toString() + '%', block);
  };
  KeyframesBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyframesBuilder',
    interfaces: [RuleContainer]
  };
  function LineHeight(value) {
    LineHeight$Companion_getInstance();
    CssValue.call(this, value);
    this.value_p94ztv$_0 = value;
  }
  Object.defineProperty(LineHeight.prototype, 'value', {
    get: function () {
      return this.value_p94ztv$_0;
    }
  });
  function LineHeight$Companion() {
    LineHeight$Companion_instance = this;
    this.normal = new LineHeight('normal');
    this.initial = new LineHeight('initial');
    this.inherit = new LineHeight('inherit');
  }
  LineHeight$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LineHeight$Companion_instance = null;
  function LineHeight$Companion_getInstance() {
    if (LineHeight$Companion_instance === null) {
      new LineHeight$Companion();
    }return LineHeight$Companion_instance;
  }
  LineHeight.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineHeight',
    interfaces: [CssValue]
  };
  function get_lh($receiver) {
    return new LineHeight($receiver.value);
  }
  function TextDecorationLine(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextDecorationLine_initFields() {
    TextDecorationLine_initFields = function () {
    };
    TextDecorationLine$initial_instance = new TextDecorationLine('initial', 0);
    TextDecorationLine$inherit_instance = new TextDecorationLine('inherit', 1);
    TextDecorationLine$unset_instance = new TextDecorationLine('unset', 2);
    TextDecorationLine$underline_instance = new TextDecorationLine('underline', 3);
    TextDecorationLine$overline_instance = new TextDecorationLine('overline', 4);
    TextDecorationLine$lineThrough_instance = new TextDecorationLine('lineThrough', 5);
  }
  var TextDecorationLine$initial_instance;
  function TextDecorationLine$initial_getInstance() {
    TextDecorationLine_initFields();
    return TextDecorationLine$initial_instance;
  }
  var TextDecorationLine$inherit_instance;
  function TextDecorationLine$inherit_getInstance() {
    TextDecorationLine_initFields();
    return TextDecorationLine$inherit_instance;
  }
  var TextDecorationLine$unset_instance;
  function TextDecorationLine$unset_getInstance() {
    TextDecorationLine_initFields();
    return TextDecorationLine$unset_instance;
  }
  var TextDecorationLine$underline_instance;
  function TextDecorationLine$underline_getInstance() {
    TextDecorationLine_initFields();
    return TextDecorationLine$underline_instance;
  }
  var TextDecorationLine$overline_instance;
  function TextDecorationLine$overline_getInstance() {
    TextDecorationLine_initFields();
    return TextDecorationLine$overline_instance;
  }
  var TextDecorationLine$lineThrough_instance;
  function TextDecorationLine$lineThrough_getInstance() {
    TextDecorationLine_initFields();
    return TextDecorationLine$lineThrough_instance;
  }
  TextDecorationLine.prototype.toString = function () {
    return hyphenize(this.name);
  };
  TextDecorationLine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextDecorationLine',
    interfaces: [Enum]
  };
  function TextDecorationLine$values() {
    return [TextDecorationLine$initial_getInstance(), TextDecorationLine$inherit_getInstance(), TextDecorationLine$unset_getInstance(), TextDecorationLine$underline_getInstance(), TextDecorationLine$overline_getInstance(), TextDecorationLine$lineThrough_getInstance()];
  }
  TextDecorationLine.values = TextDecorationLine$values;
  function TextDecorationLine$valueOf(name) {
    switch (name) {
      case 'initial':
        return TextDecorationLine$initial_getInstance();
      case 'inherit':
        return TextDecorationLine$inherit_getInstance();
      case 'unset':
        return TextDecorationLine$unset_getInstance();
      case 'underline':
        return TextDecorationLine$underline_getInstance();
      case 'overline':
        return TextDecorationLine$overline_getInstance();
      case 'lineThrough':
        return TextDecorationLine$lineThrough_getInstance();
      default:throwISE('No enum constant kotlinx.css.properties.TextDecorationLine.' + name);
    }
  }
  TextDecorationLine.valueOf_61zpoe$ = TextDecorationLine$valueOf;
  function TextDecoration(lines, style, color) {
    TextDecoration$Companion_getInstance();
    if (style === void 0)
      style = null;
    if (color === void 0)
      color = null;
    this.lines_0 = lines;
    this.style = style;
    this.color = color;
  }
  function TextDecoration$Companion() {
    TextDecoration$Companion_instance = this;
    this.none = new TextDecoration(emptySet());
  }
  TextDecoration$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TextDecoration$Companion_instance = null;
  function TextDecoration$Companion_getInstance() {
    if (TextDecoration$Companion_instance === null) {
      new TextDecoration$Companion();
    }return TextDecoration$Companion_instance;
  }
  TextDecoration.prototype.toString = function () {
    if (this.lines_0.isEmpty())
      return 'none';
    else {
      var $receiver = StringBuilder_init();
      var tmp$, tmp$_0;
      $receiver.append_pdl1vj$(joinToString_0(this.lines_0, ' '));
      if ((tmp$ = this.style) != null) {
        $receiver.append_pdl1vj$(' ' + tmp$);
      }if ((tmp$_0 = this.color) != null) {
        $receiver.append_pdl1vj$(' ' + tmp$_0);
      }return $receiver.toString();
    }
  };
  TextDecoration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextDecoration',
    interfaces: []
  };
  function TextDecorationStyle(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextDecorationStyle_initFields() {
    TextDecorationStyle_initFields = function () {
    };
    TextDecorationStyle$initial_instance = new TextDecorationStyle('initial', 0);
    TextDecorationStyle$inherit_instance = new TextDecorationStyle('inherit', 1);
    TextDecorationStyle$unset_instance = new TextDecorationStyle('unset', 2);
    TextDecorationStyle$solid_instance = new TextDecorationStyle('solid', 3);
    TextDecorationStyle$double_instance = new TextDecorationStyle('double', 4);
    TextDecorationStyle$dotted_instance = new TextDecorationStyle('dotted', 5);
    TextDecorationStyle$dashed_instance = new TextDecorationStyle('dashed', 6);
    TextDecorationStyle$wavy_instance = new TextDecorationStyle('wavy', 7);
  }
  var TextDecorationStyle$initial_instance;
  function TextDecorationStyle$initial_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$initial_instance;
  }
  var TextDecorationStyle$inherit_instance;
  function TextDecorationStyle$inherit_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$inherit_instance;
  }
  var TextDecorationStyle$unset_instance;
  function TextDecorationStyle$unset_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$unset_instance;
  }
  var TextDecorationStyle$solid_instance;
  function TextDecorationStyle$solid_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$solid_instance;
  }
  var TextDecorationStyle$double_instance;
  function TextDecorationStyle$double_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$double_instance;
  }
  var TextDecorationStyle$dotted_instance;
  function TextDecorationStyle$dotted_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$dotted_instance;
  }
  var TextDecorationStyle$dashed_instance;
  function TextDecorationStyle$dashed_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$dashed_instance;
  }
  var TextDecorationStyle$wavy_instance;
  function TextDecorationStyle$wavy_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$wavy_instance;
  }
  TextDecorationStyle.prototype.toString = function () {
    return this.name;
  };
  TextDecorationStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextDecorationStyle',
    interfaces: [Enum]
  };
  function TextDecorationStyle$values() {
    return [TextDecorationStyle$initial_getInstance(), TextDecorationStyle$inherit_getInstance(), TextDecorationStyle$unset_getInstance(), TextDecorationStyle$solid_getInstance(), TextDecorationStyle$double_getInstance(), TextDecorationStyle$dotted_getInstance(), TextDecorationStyle$dashed_getInstance(), TextDecorationStyle$wavy_getInstance()];
  }
  TextDecorationStyle.values = TextDecorationStyle$values;
  function TextDecorationStyle$valueOf(name) {
    switch (name) {
      case 'initial':
        return TextDecorationStyle$initial_getInstance();
      case 'inherit':
        return TextDecorationStyle$inherit_getInstance();
      case 'unset':
        return TextDecorationStyle$unset_getInstance();
      case 'solid':
        return TextDecorationStyle$solid_getInstance();
      case 'double':
        return TextDecorationStyle$double_getInstance();
      case 'dotted':
        return TextDecorationStyle$dotted_getInstance();
      case 'dashed':
        return TextDecorationStyle$dashed_getInstance();
      case 'wavy':
        return TextDecorationStyle$wavy_getInstance();
      default:throwISE('No enum constant kotlinx.css.properties.TextDecorationStyle.' + name);
    }
  }
  TextDecorationStyle.valueOf_61zpoe$ = TextDecorationStyle$valueOf;
  function textDecoration_0($receiver, lines, style, color) {
    if (style === void 0)
      style = null;
    if (color === void 0)
      color = null;
    set_textDecoration($receiver, new TextDecoration(toSet(lines), style, color));
  }
  function Time(value) {
    CssValue.call(this, value);
    this.value_1ggx5d$_0 = value;
  }
  Object.defineProperty(Time.prototype, 'value', {
    get: function () {
      return this.value_1ggx5d$_0;
    }
  });
  Time.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Time',
    interfaces: [CssValue]
  };
  function get_s($receiver) {
    return new Time($receiver.toString() + 's');
  }
  function get_ms($receiver) {
    return new Time($receiver.toString() + 'ms');
  }
  function Timing(value) {
    Timing$Companion_getInstance();
    CssValue.call(this, value);
    this.value_2u9fqs$_0 = value;
  }
  Object.defineProperty(Timing.prototype, 'value', {
    get: function () {
      return this.value_2u9fqs$_0;
    }
  });
  function Timing$Companion() {
    Timing$Companion_instance = this;
    this.ease = new Timing('ease');
    this.linear = new Timing('linear');
    this.easeIn = new Timing('ease-in');
    this.easeOut = new Timing('ease-out');
    this.easeInOut = new Timing('ease-in-out');
    this.stepStart = new Timing('step-start');
    this.stepEnd = new Timing('step-end');
    this.materialStandard = cubicBezier(0.4, 0.0, 0.2, 1.0);
    this.materialDeceleration = cubicBezier(0.0, 0.0, 0.2, 1.0);
    this.materialAcceleration = cubicBezier(0.4, 0.0, 1.0, 1.0);
    this.materialSharp = cubicBezier(0.4, 0.0, 0.6, 1.0);
  }
  Timing$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Timing$Companion_instance = null;
  function Timing$Companion_getInstance() {
    if (Timing$Companion_instance === null) {
      new Timing$Companion();
    }return Timing$Companion_instance;
  }
  Timing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Timing',
    interfaces: [CssValue]
  };
  function cubicBezier(x1, y1, x2, y2) {
    return new Timing('cubic-bezier(' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ')');
  }
  function TransitionDirection(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TransitionDirection_initFields() {
    TransitionDirection_initFields = function () {
    };
    TransitionDirection$initial_instance = new TransitionDirection('initial', 0);
    TransitionDirection$inherit_instance = new TransitionDirection('inherit', 1);
    TransitionDirection$unset_instance = new TransitionDirection('unset', 2);
    TransitionDirection$start_instance = new TransitionDirection('start', 3);
    TransitionDirection$end_instance = new TransitionDirection('end', 4);
  }
  var TransitionDirection$initial_instance;
  function TransitionDirection$initial_getInstance() {
    TransitionDirection_initFields();
    return TransitionDirection$initial_instance;
  }
  var TransitionDirection$inherit_instance;
  function TransitionDirection$inherit_getInstance() {
    TransitionDirection_initFields();
    return TransitionDirection$inherit_instance;
  }
  var TransitionDirection$unset_instance;
  function TransitionDirection$unset_getInstance() {
    TransitionDirection_initFields();
    return TransitionDirection$unset_instance;
  }
  var TransitionDirection$start_instance;
  function TransitionDirection$start_getInstance() {
    TransitionDirection_initFields();
    return TransitionDirection$start_instance;
  }
  var TransitionDirection$end_instance;
  function TransitionDirection$end_getInstance() {
    TransitionDirection_initFields();
    return TransitionDirection$end_instance;
  }
  TransitionDirection.prototype.toString = function () {
    return this.name;
  };
  TransitionDirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransitionDirection',
    interfaces: [Enum]
  };
  function TransitionDirection$values() {
    return [TransitionDirection$initial_getInstance(), TransitionDirection$inherit_getInstance(), TransitionDirection$unset_getInstance(), TransitionDirection$start_getInstance(), TransitionDirection$end_getInstance()];
  }
  TransitionDirection.values = TransitionDirection$values;
  function TransitionDirection$valueOf(name) {
    switch (name) {
      case 'initial':
        return TransitionDirection$initial_getInstance();
      case 'inherit':
        return TransitionDirection$inherit_getInstance();
      case 'unset':
        return TransitionDirection$unset_getInstance();
      case 'start':
        return TransitionDirection$start_getInstance();
      case 'end':
        return TransitionDirection$end_getInstance();
      default:throwISE('No enum constant kotlinx.css.properties.TransitionDirection.' + name);
    }
  }
  TransitionDirection.valueOf_61zpoe$ = TransitionDirection$valueOf;
  function steps(count, direction) {
    if (direction === void 0)
      direction = TransitionDirection$end_getInstance();
    return new Timing('steps(' + count + ', ' + direction + ')');
  }
  function Angle(value) {
    CssValue.call(this, value);
    this.value_8kj23n$_0 = value;
  }
  Object.defineProperty(Angle.prototype, 'value', {
    get: function () {
      return this.value_8kj23n$_0;
    }
  });
  Angle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Angle',
    interfaces: [CssValue]
  };
  function get_deg($receiver) {
    return new Angle($receiver.toString() + 'deg');
  }
  function get_grad($receiver) {
    return new Angle($receiver.toString() + 'grad');
  }
  function get_rad($receiver) {
    return new Angle($receiver.toString() + 'rad');
  }
  function get_turn($receiver) {
    return new Angle($receiver.toString() + 'turn');
  }
  function Transform(name, args) {
    this.name = name;
    this.args_0 = args;
  }
  Transform.prototype.toString = function () {
    return this.name + '(' + joinToString(this.args_0, ', ') + ')';
  };
  Transform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transform',
    interfaces: []
  };
  function Transforms() {
    Transforms$Companion_getInstance();
    StyleList.call(this, ' ');
  }
  function Transforms$Companion() {
    Transforms$Companion_instance = this;
    this.none = new Transforms();
  }
  Transforms$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Transforms$Companion_instance = null;
  function Transforms$Companion_getInstance() {
    if (Transforms$Companion_instance === null) {
      new Transforms$Companion();
    }return Transforms$Companion_instance;
  }
  Transforms.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transforms',
    interfaces: [StyleList]
  };
  function transform_0($receiver, builder) {
    builder(get_transform($receiver));
  }
  function add($receiver, name, args) {
    $receiver.plusAssign_11rb$(new Transform(name, args));
  }
  function matrix($receiver, a, b, c, d, tx, ty) {
    add($receiver, 'matrix', [a, b, c, d, tx, ty]);
  }
  function matrix3d($receiver, a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {
    add($receiver, 'matrix3d', [a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4]);
  }
  function translate($receiver, tx, ty) {
    if (ty === void 0)
      ty = get_px(0);
    add($receiver, 'translate', [tx, ty]);
  }
  function translateX($receiver, t) {
    add($receiver, 'translateX', [t]);
  }
  function translateY($receiver, t) {
    add($receiver, 'translateY', [t]);
  }
  function translate3d($receiver, tx, ty, tz) {
    add($receiver, 'translate3d', [tx, ty, tz]);
  }
  function translateZ($receiver, t) {
    add($receiver, 'translateZ', [t]);
  }
  function scale($receiver, sx, sy) {
    add($receiver, 'scale', [sx, sy]);
  }
  function scale_0($receiver, s) {
    add($receiver, 'scale', [s]);
  }
  function scaleX($receiver, s) {
    add($receiver, 'scaleX', [s]);
  }
  function scaleY($receiver, s) {
    add($receiver, 'scaleY', [s]);
  }
  function scale3d($receiver, sx, sy, sz) {
    add($receiver, 'scale3d', [sx, sy, sz]);
  }
  function scaleZ($receiver, s) {
    add($receiver, 'scaleZ', [s]);
  }
  function rotate($receiver, a) {
    add($receiver, 'rotate', [a]);
  }
  function rotate3d($receiver, x, y, z, a) {
    add($receiver, 'rotate3d', [x, y, z, a]);
  }
  function rotateX($receiver, a) {
    add($receiver, 'rotateX', [a]);
  }
  function rotateY($receiver, a) {
    add($receiver, 'rotateY', [a]);
  }
  function rotateZ($receiver, a) {
    add($receiver, 'rotateZ', [a]);
  }
  function skew($receiver, ax, ay) {
    if (ay === void 0)
      ay = get_deg(0);
    add($receiver, 'skew', [ax, ay]);
  }
  function skewX($receiver, a) {
    add($receiver, 'skewX', [a]);
  }
  function skewY($receiver, a) {
    add($receiver, 'skewY', [a]);
  }
  function perspective($receiver, l) {
    add($receiver, 'perspective', [l]);
  }
  function Transition(property, duration, timing, delay) {
    this.property = property;
    this.duration = duration;
    this.timing_0 = timing;
    this.delay_0 = delay;
  }
  Transition.prototype.toString = function () {
    return this.property + ' ' + this.duration + ' ' + this.timing_0 + ' ' + this.delay_0;
  };
  Transition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transition',
    interfaces: []
  };
  function Transitions() {
    Transitions$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function Transitions$Companion() {
    Transitions$Companion_instance = this;
    this.none = new Transitions();
  }
  Transitions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Transitions$Companion_instance = null;
  function Transitions$Companion_getInstance() {
    if (Transitions$Companion_instance === null) {
      new Transitions$Companion();
    }return Transitions$Companion_instance;
  }
  Transitions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transitions',
    interfaces: [StyleList]
  };
  function transition_0($receiver, property, duration, timing, delay) {
    if (property === void 0)
      property = 'all';
    if (duration === void 0)
      duration = get_s(0);
    if (timing === void 0)
      timing = Timing$Companion_getInstance().ease;
    if (delay === void 0)
      delay = get_s(0);
    get_transition($receiver).plusAssign_11rb$(new Transition(property, duration, timing, delay));
  }
  function transition_1($receiver, property, duration, timing, delay) {
    if (duration === void 0)
      duration = get_s(0);
    if (timing === void 0)
      timing = Timing$Companion_getInstance().ease;
    if (delay === void 0)
      delay = get_s(0);
    transition_0($receiver, hyphenize(property.callableName), duration, timing, delay);
  }
  function delayUnhover$lambda(closure$properties, closure$duration, closure$timing, closure$delay) {
    return function ($receiver) {
      if (!(closure$properties.length === 0)) {
        var $receiver_0 = closure$properties;
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
          var element = $receiver_0[tmp$];
          transition_1($receiver, element, closure$duration, closure$timing, closure$delay);
        }
      } else
        transition_0($receiver, 'all', closure$duration, closure$timing, closure$delay);
      return Unit;
    };
  }
  function delayUnhover($receiver, properties, duration, timing, delay) {
    if (duration === void 0)
      duration = get_ms(300);
    if (timing === void 0)
      timing = Timing$Companion_getInstance().materialDeceleration;
    if (delay === void 0)
      delay = get_s(0);
    $receiver.not_v2gpjl$($receiver.hover_sa4rfh$(delayUnhover$lambda(properties, duration, timing, delay)));
  }
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$css = package$kotlinx.css || (package$kotlinx.css = {});
  package$css.ruleSet_sa4rfh$ = ruleSet;
  package$css.Rule = Rule;
  package$css.RuleContainer = RuleContainer;
  package$css.CSSBuilder = CSSBuilder;
  package$css.toCustomProperty_pdl1vz$ = toCustomProperty;
  package$css.hyphenize_pdl1vz$ = hyphenize;
  package$css.times_6ic1pp$ = times;
  Object.defineProperty(LinearDimension, 'Companion', {
    get: LinearDimension$Companion_getInstance
  });
  package$css.LinearDimension = LinearDimension;
  package$css.get_cm_rcaex3$ = get_cm;
  package$css.get_em_rcaex3$ = get_em;
  package$css.get_ex_rcaex3$ = get_ex;
  package$css.get_fr_rcaex3$ = get_fr;
  package$css.get_mm_rcaex3$ = get_mm;
  package$css.get_pc_rcaex3$ = get_pc;
  package$css.get_pct_rcaex3$ = get_pct;
  package$css.get_pt_rcaex3$ = get_pt;
  package$css.get_px_rcaex3$ = get_px;
  package$css.get_rem_rcaex3$ = get_rem;
  package$css.get_vmin_rcaex3$ = get_vmin;
  package$css.get_vmax_rcaex3$ = get_vmax;
  package$css.get_vh_rcaex3$ = get_vh;
  package$css.get_vw_rcaex3$ = get_vw;
  package$css.get_in_rcaex3$ = get_in;
  package$css.CssValue = CssValue;
  Object.defineProperty(Align, 'initial', {
    get: Align$initial_getInstance
  });
  Object.defineProperty(Align, 'inherit', {
    get: Align$inherit_getInstance
  });
  Object.defineProperty(Align, 'unset', {
    get: Align$unset_getInstance
  });
  Object.defineProperty(Align, 'auto', {
    get: Align$auto_getInstance
  });
  Object.defineProperty(Align, 'stretch', {
    get: Align$stretch_getInstance
  });
  Object.defineProperty(Align, 'center', {
    get: Align$center_getInstance
  });
  Object.defineProperty(Align, 'flexStart', {
    get: Align$flexStart_getInstance
  });
  Object.defineProperty(Align, 'flexEnd', {
    get: Align$flexEnd_getInstance
  });
  Object.defineProperty(Align, 'baseline', {
    get: Align$baseline_getInstance
  });
  package$css.Align = Align;
  Object.defineProperty(JustifyContent, 'initial', {
    get: JustifyContent$initial_getInstance
  });
  Object.defineProperty(JustifyContent, 'inherit', {
    get: JustifyContent$inherit_getInstance
  });
  Object.defineProperty(JustifyContent, 'unset', {
    get: JustifyContent$unset_getInstance
  });
  Object.defineProperty(JustifyContent, 'center', {
    get: JustifyContent$center_getInstance
  });
  Object.defineProperty(JustifyContent, 'start', {
    get: JustifyContent$start_getInstance
  });
  Object.defineProperty(JustifyContent, 'end', {
    get: JustifyContent$end_getInstance
  });
  Object.defineProperty(JustifyContent, 'flexStart', {
    get: JustifyContent$flexStart_getInstance
  });
  Object.defineProperty(JustifyContent, 'flexEnd', {
    get: JustifyContent$flexEnd_getInstance
  });
  Object.defineProperty(JustifyContent, 'left', {
    get: JustifyContent$left_getInstance
  });
  Object.defineProperty(JustifyContent, 'right', {
    get: JustifyContent$right_getInstance
  });
  Object.defineProperty(JustifyContent, 'baseline', {
    get: JustifyContent$baseline_getInstance
  });
  Object.defineProperty(JustifyContent, 'firstBaseline', {
    get: JustifyContent$firstBaseline_getInstance
  });
  Object.defineProperty(JustifyContent, 'lastBaseline', {
    get: JustifyContent$lastBaseline_getInstance
  });
  Object.defineProperty(JustifyContent, 'spaceBetween', {
    get: JustifyContent$spaceBetween_getInstance
  });
  Object.defineProperty(JustifyContent, 'spaceAround', {
    get: JustifyContent$spaceAround_getInstance
  });
  Object.defineProperty(JustifyContent, 'spaceEvenly', {
    get: JustifyContent$spaceEvenly_getInstance
  });
  Object.defineProperty(JustifyContent, 'stretch', {
    get: JustifyContent$stretch_getInstance
  });
  Object.defineProperty(JustifyContent, 'safeCenter', {
    get: JustifyContent$safeCenter_getInstance
  });
  Object.defineProperty(JustifyContent, 'unsafeCenter', {
    get: JustifyContent$unsafeCenter_getInstance
  });
  package$css.JustifyContent = JustifyContent;
  Object.defineProperty(BackgroundRepeat, 'initial', {
    get: BackgroundRepeat$initial_getInstance
  });
  Object.defineProperty(BackgroundRepeat, 'inherit', {
    get: BackgroundRepeat$inherit_getInstance
  });
  Object.defineProperty(BackgroundRepeat, 'unset', {
    get: BackgroundRepeat$unset_getInstance
  });
  Object.defineProperty(BackgroundRepeat, 'repeatX', {
    get: BackgroundRepeat$repeatX_getInstance
  });
  Object.defineProperty(BackgroundRepeat, 'repeatY', {
    get: BackgroundRepeat$repeatY_getInstance
  });
  Object.defineProperty(BackgroundRepeat, 'repeat', {
    get: BackgroundRepeat$repeat_getInstance
  });
  Object.defineProperty(BackgroundRepeat, 'noRepeat', {
    get: BackgroundRepeat$noRepeat_getInstance
  });
  package$css.BackgroundRepeat = BackgroundRepeat;
  Object.defineProperty(BackgroundAttachment, 'initial', {
    get: BackgroundAttachment$initial_getInstance
  });
  Object.defineProperty(BackgroundAttachment, 'inherit', {
    get: BackgroundAttachment$inherit_getInstance
  });
  Object.defineProperty(BackgroundAttachment, 'unset', {
    get: BackgroundAttachment$unset_getInstance
  });
  Object.defineProperty(BackgroundAttachment, 'scroll', {
    get: BackgroundAttachment$scroll_getInstance
  });
  Object.defineProperty(BackgroundAttachment, 'fixed', {
    get: BackgroundAttachment$fixed_getInstance
  });
  Object.defineProperty(BackgroundAttachment, 'local', {
    get: BackgroundAttachment$local_getInstance
  });
  package$css.BackgroundAttachment = BackgroundAttachment;
  Object.defineProperty(BackgroundClip, 'initial', {
    get: BackgroundClip$initial_getInstance
  });
  Object.defineProperty(BackgroundClip, 'inherit', {
    get: BackgroundClip$inherit_getInstance
  });
  Object.defineProperty(BackgroundClip, 'unset', {
    get: BackgroundClip$unset_getInstance
  });
  Object.defineProperty(BackgroundClip, 'borderBox', {
    get: BackgroundClip$borderBox_getInstance
  });
  Object.defineProperty(BackgroundClip, 'paddingBox', {
    get: BackgroundClip$paddingBox_getInstance
  });
  Object.defineProperty(BackgroundClip, 'contentBox', {
    get: BackgroundClip$contentBox_getInstance
  });
  Object.defineProperty(BackgroundClip, 'text', {
    get: BackgroundClip$text_getInstance
  });
  package$css.BackgroundClip = BackgroundClip;
  Object.defineProperty(BackgroundOrigin, 'initial', {
    get: BackgroundOrigin$initial_getInstance
  });
  Object.defineProperty(BackgroundOrigin, 'inherit', {
    get: BackgroundOrigin$inherit_getInstance
  });
  Object.defineProperty(BackgroundOrigin, 'unset', {
    get: BackgroundOrigin$unset_getInstance
  });
  Object.defineProperty(BackgroundOrigin, 'borderBox', {
    get: BackgroundOrigin$borderBox_getInstance
  });
  Object.defineProperty(BackgroundOrigin, 'paddingBox', {
    get: BackgroundOrigin$paddingBox_getInstance
  });
  Object.defineProperty(BackgroundOrigin, 'contentBox', {
    get: BackgroundOrigin$contentBox_getInstance
  });
  package$css.BackgroundOrigin = BackgroundOrigin;
  Object.defineProperty(BorderCollapse, 'initial', {
    get: BorderCollapse$initial_getInstance
  });
  Object.defineProperty(BorderCollapse, 'inherit', {
    get: BorderCollapse$inherit_getInstance
  });
  Object.defineProperty(BorderCollapse, 'unset', {
    get: BorderCollapse$unset_getInstance
  });
  Object.defineProperty(BorderCollapse, 'separate', {
    get: BorderCollapse$separate_getInstance
  });
  Object.defineProperty(BorderCollapse, 'collapse', {
    get: BorderCollapse$collapse_getInstance
  });
  package$css.BorderCollapse = BorderCollapse;
  Object.defineProperty(BorderStyle, 'initial', {
    get: BorderStyle$initial_getInstance
  });
  Object.defineProperty(BorderStyle, 'inherit', {
    get: BorderStyle$inherit_getInstance
  });
  Object.defineProperty(BorderStyle, 'unset', {
    get: BorderStyle$unset_getInstance
  });
  Object.defineProperty(BorderStyle, 'none', {
    get: BorderStyle$none_getInstance
  });
  Object.defineProperty(BorderStyle, 'dotted', {
    get: BorderStyle$dotted_getInstance
  });
  Object.defineProperty(BorderStyle, 'dashed', {
    get: BorderStyle$dashed_getInstance
  });
  Object.defineProperty(BorderStyle, 'solid', {
    get: BorderStyle$solid_getInstance
  });
  package$css.BorderStyle = BorderStyle;
  Object.defineProperty(BoxSizing, 'initial', {
    get: BoxSizing$initial_getInstance
  });
  Object.defineProperty(BoxSizing, 'inherit', {
    get: BoxSizing$inherit_getInstance
  });
  Object.defineProperty(BoxSizing, 'unset', {
    get: BoxSizing$unset_getInstance
  });
  Object.defineProperty(BoxSizing, 'contentBox', {
    get: BoxSizing$contentBox_getInstance
  });
  Object.defineProperty(BoxSizing, 'borderBox', {
    get: BoxSizing$borderBox_getInstance
  });
  package$css.BoxSizing = BoxSizing;
  Object.defineProperty(Clear, 'initial', {
    get: Clear$initial_getInstance
  });
  Object.defineProperty(Clear, 'inherit', {
    get: Clear$inherit_getInstance
  });
  Object.defineProperty(Clear, 'unset', {
    get: Clear$unset_getInstance
  });
  Object.defineProperty(Clear, 'none', {
    get: Clear$none_getInstance
  });
  Object.defineProperty(Clear, 'left', {
    get: Clear$left_getInstance
  });
  Object.defineProperty(Clear, 'right', {
    get: Clear$right_getInstance
  });
  Object.defineProperty(Clear, 'both', {
    get: Clear$both_getInstance
  });
  package$css.Clear = Clear;
  Object.defineProperty(Color, 'Companion', {
    get: Color$Companion_getInstance
  });
  Color.RGBA = Color$RGBA;
  Color.HSLA = Color$HSLA;
  package$css.Color = Color;
  package$css.rgb_qt1dr2$ = rgb;
  package$css.rgba_gb4hak$ = rgba;
  package$css.hsl_qt1dr2$ = hsl;
  package$css.hsla_gb4hak$ = hsla;
  package$css.blackAlpha_14dthe$ = blackAlpha;
  package$css.whiteAlpha_14dthe$ = whiteAlpha;
  Object.defineProperty(ColumnGap, 'Companion', {
    get: ColumnGap$Companion_getInstance
  });
  package$css.ColumnGap = ColumnGap;
  Object.defineProperty(Contain, 'initial', {
    get: Contain$initial_getInstance
  });
  Object.defineProperty(Contain, 'inherit', {
    get: Contain$inherit_getInstance
  });
  Object.defineProperty(Contain, 'unset', {
    get: Contain$unset_getInstance
  });
  Object.defineProperty(Contain, 'none', {
    get: Contain$none_getInstance
  });
  Object.defineProperty(Contain, 'strict', {
    get: Contain$strict_getInstance
  });
  Object.defineProperty(Contain, 'content', {
    get: Contain$content_getInstance
  });
  Object.defineProperty(Contain, 'size', {
    get: Contain$size_getInstance
  });
  Object.defineProperty(Contain, 'layout', {
    get: Contain$layout_getInstance
  });
  Object.defineProperty(Contain, 'style', {
    get: Contain$style_getInstance
  });
  Object.defineProperty(Contain, 'paint', {
    get: Contain$paint_getInstance
  });
  package$css.Contain = Contain;
  Object.defineProperty(Cursor, 'initial', {
    get: Cursor$initial_getInstance
  });
  Object.defineProperty(Cursor, 'inherit', {
    get: Cursor$inherit_getInstance
  });
  Object.defineProperty(Cursor, 'unset', {
    get: Cursor$unset_getInstance
  });
  Object.defineProperty(Cursor, 'auto', {
    get: Cursor$auto_getInstance
  });
  Object.defineProperty(Cursor, 'default', {
    get: Cursor$default_getInstance
  });
  Object.defineProperty(Cursor, 'none', {
    get: Cursor$none_getInstance
  });
  Object.defineProperty(Cursor, 'contextMenu', {
    get: Cursor$contextMenu_getInstance
  });
  Object.defineProperty(Cursor, 'help', {
    get: Cursor$help_getInstance
  });
  Object.defineProperty(Cursor, 'pointer', {
    get: Cursor$pointer_getInstance
  });
  Object.defineProperty(Cursor, 'progress', {
    get: Cursor$progress_getInstance
  });
  Object.defineProperty(Cursor, 'wait', {
    get: Cursor$wait_getInstance
  });
  Object.defineProperty(Cursor, 'cell', {
    get: Cursor$cell_getInstance
  });
  Object.defineProperty(Cursor, 'crosshair', {
    get: Cursor$crosshair_getInstance
  });
  Object.defineProperty(Cursor, 'text', {
    get: Cursor$text_getInstance
  });
  Object.defineProperty(Cursor, 'verticalText', {
    get: Cursor$verticalText_getInstance
  });
  Object.defineProperty(Cursor, 'alias', {
    get: Cursor$alias_getInstance
  });
  Object.defineProperty(Cursor, 'copy', {
    get: Cursor$copy_getInstance
  });
  Object.defineProperty(Cursor, 'move', {
    get: Cursor$move_getInstance
  });
  Object.defineProperty(Cursor, 'noDrop', {
    get: Cursor$noDrop_getInstance
  });
  Object.defineProperty(Cursor, 'notAllowed', {
    get: Cursor$notAllowed_getInstance
  });
  Object.defineProperty(Cursor, 'grab', {
    get: Cursor$grab_getInstance
  });
  Object.defineProperty(Cursor, 'grabbing', {
    get: Cursor$grabbing_getInstance
  });
  Object.defineProperty(Cursor, 'colResize', {
    get: Cursor$colResize_getInstance
  });
  Object.defineProperty(Cursor, 'rowResize', {
    get: Cursor$rowResize_getInstance
  });
  Object.defineProperty(Cursor, 'allScroll', {
    get: Cursor$allScroll_getInstance
  });
  Object.defineProperty(Cursor, 'eResize', {
    get: Cursor$eResize_getInstance
  });
  Object.defineProperty(Cursor, 'nResize', {
    get: Cursor$nResize_getInstance
  });
  Object.defineProperty(Cursor, 'neResize', {
    get: Cursor$neResize_getInstance
  });
  Object.defineProperty(Cursor, 'nwResize', {
    get: Cursor$nwResize_getInstance
  });
  Object.defineProperty(Cursor, 'sResize', {
    get: Cursor$sResize_getInstance
  });
  Object.defineProperty(Cursor, 'seResize', {
    get: Cursor$seResize_getInstance
  });
  Object.defineProperty(Cursor, 'swResize', {
    get: Cursor$swResize_getInstance
  });
  Object.defineProperty(Cursor, 'wResize', {
    get: Cursor$wResize_getInstance
  });
  Object.defineProperty(Cursor, 'ewResize', {
    get: Cursor$ewResize_getInstance
  });
  Object.defineProperty(Cursor, 'nsResize', {
    get: Cursor$nsResize_getInstance
  });
  Object.defineProperty(Cursor, 'neswResize', {
    get: Cursor$neswResize_getInstance
  });
  Object.defineProperty(Cursor, 'nwseResize', {
    get: Cursor$nwseResize_getInstance
  });
  Object.defineProperty(Cursor, 'zoomIn', {
    get: Cursor$zoomIn_getInstance
  });
  Object.defineProperty(Cursor, 'zoomOut', {
    get: Cursor$zoomOut_getInstance
  });
  package$css.Cursor = Cursor;
  package$css.QuotedString = QuotedString;
  package$css.get_quoted_pdl1vz$ = get_quoted;
  Object.defineProperty(Direction, 'initial', {
    get: Direction$initial_getInstance
  });
  Object.defineProperty(Direction, 'inherit', {
    get: Direction$inherit_getInstance
  });
  Object.defineProperty(Direction, 'unset', {
    get: Direction$unset_getInstance
  });
  Object.defineProperty(Direction, 'ltr', {
    get: Direction$ltr_getInstance
  });
  Object.defineProperty(Direction, 'rtl', {
    get: Direction$rtl_getInstance
  });
  package$css.Direction = Direction;
  Object.defineProperty(Display, 'initial', {
    get: Display$initial_getInstance
  });
  Object.defineProperty(Display, 'inherit', {
    get: Display$inherit_getInstance
  });
  Object.defineProperty(Display, 'unset', {
    get: Display$unset_getInstance
  });
  Object.defineProperty(Display, 'block', {
    get: Display$block_getInstance
  });
  Object.defineProperty(Display, 'inline', {
    get: Display$inline_getInstance
  });
  Object.defineProperty(Display, 'runIn', {
    get: Display$runIn_getInstance
  });
  Object.defineProperty(Display, 'flow', {
    get: Display$flow_getInstance
  });
  Object.defineProperty(Display, 'flowRoot', {
    get: Display$flowRoot_getInstance
  });
  Object.defineProperty(Display, 'table', {
    get: Display$table_getInstance
  });
  Object.defineProperty(Display, 'flex', {
    get: Display$flex_getInstance
  });
  Object.defineProperty(Display, 'grid', {
    get: Display$grid_getInstance
  });
  Object.defineProperty(Display, 'subgrid', {
    get: Display$subgrid_getInstance
  });
  Object.defineProperty(Display, 'listItem', {
    get: Display$listItem_getInstance
  });
  Object.defineProperty(Display, 'tableRowGroup', {
    get: Display$tableRowGroup_getInstance
  });
  Object.defineProperty(Display, 'tableHeaderGroup', {
    get: Display$tableHeaderGroup_getInstance
  });
  Object.defineProperty(Display, 'tableFooterGroup', {
    get: Display$tableFooterGroup_getInstance
  });
  Object.defineProperty(Display, 'tableRow', {
    get: Display$tableRow_getInstance
  });
  Object.defineProperty(Display, 'tableCell', {
    get: Display$tableCell_getInstance
  });
  Object.defineProperty(Display, 'tableColumnGroup', {
    get: Display$tableColumnGroup_getInstance
  });
  Object.defineProperty(Display, 'tableColumn', {
    get: Display$tableColumn_getInstance
  });
  Object.defineProperty(Display, 'tableCaption', {
    get: Display$tableCaption_getInstance
  });
  Object.defineProperty(Display, 'contents', {
    get: Display$contents_getInstance
  });
  Object.defineProperty(Display, 'none', {
    get: Display$none_getInstance
  });
  Object.defineProperty(Display, 'inlineBlock', {
    get: Display$inlineBlock_getInstance
  });
  Object.defineProperty(Display, 'inlineListItem', {
    get: Display$inlineListItem_getInstance
  });
  Object.defineProperty(Display, 'inlineTable', {
    get: Display$inlineTable_getInstance
  });
  Object.defineProperty(Display, 'inlineFlex', {
    get: Display$inlineFlex_getInstance
  });
  Object.defineProperty(Display, 'inlineGrid', {
    get: Display$inlineGrid_getInstance
  });
  package$css.Display = Display;
  Object.defineProperty(FlexBasis, 'Companion', {
    get: FlexBasis$Companion_getInstance
  });
  package$css.FlexBasis = FlexBasis;
  package$css.get_basis_dhrub4$ = get_basis;
  Object.defineProperty(FlexWrap, 'initial', {
    get: FlexWrap$initial_getInstance
  });
  Object.defineProperty(FlexWrap, 'inherit', {
    get: FlexWrap$inherit_getInstance
  });
  Object.defineProperty(FlexWrap, 'unset', {
    get: FlexWrap$unset_getInstance
  });
  Object.defineProperty(FlexWrap, 'nowrap', {
    get: FlexWrap$nowrap_getInstance
  });
  Object.defineProperty(FlexWrap, 'wrap', {
    get: FlexWrap$wrap_getInstance
  });
  Object.defineProperty(FlexWrap, 'wrapReverse', {
    get: FlexWrap$wrapReverse_getInstance
  });
  package$css.FlexWrap = FlexWrap;
  Object.defineProperty(Float, 'initial', {
    get: Float$initial_getInstance
  });
  Object.defineProperty(Float, 'inherit', {
    get: Float$inherit_getInstance
  });
  Object.defineProperty(Float, 'unset', {
    get: Float$unset_getInstance
  });
  Object.defineProperty(Float, 'left', {
    get: Float$left_getInstance
  });
  Object.defineProperty(Float, 'right', {
    get: Float$right_getInstance
  });
  Object.defineProperty(Float, 'none', {
    get: Float$none_getInstance
  });
  package$css.Float = Float;
  Object.defineProperty(FontWeight, 'Companion', {
    get: FontWeight$Companion_getInstance
  });
  package$css.FontWeight = FontWeight;
  Object.defineProperty(FontStyle, 'Companion', {
    get: FontStyle$Companion_getInstance
  });
  package$css.FontStyle = FontStyle;
  Object.defineProperty(FlexDirection, 'initial', {
    get: FlexDirection$initial_getInstance
  });
  Object.defineProperty(FlexDirection, 'inherit', {
    get: FlexDirection$inherit_getInstance
  });
  Object.defineProperty(FlexDirection, 'unset', {
    get: FlexDirection$unset_getInstance
  });
  Object.defineProperty(FlexDirection, 'column', {
    get: FlexDirection$column_getInstance
  });
  Object.defineProperty(FlexDirection, 'columnReverse', {
    get: FlexDirection$columnReverse_getInstance
  });
  Object.defineProperty(FlexDirection, 'row', {
    get: FlexDirection$row_getInstance
  });
  Object.defineProperty(FlexDirection, 'rowReverse', {
    get: FlexDirection$rowReverse_getInstance
  });
  package$css.FlexDirection = FlexDirection;
  Object.defineProperty(Gap, 'Companion', {
    get: Gap$Companion_getInstance
  });
  package$css.Gap = Gap;
  Object.defineProperty(GridAutoColumns, 'Companion', {
    get: GridAutoColumns$Companion_getInstance
  });
  package$css.GridAutoColumns_init_onxlus$ = GridAutoColumns_init;
  package$css.GridAutoColumns_init_c2br0j$ = GridAutoColumns_init_0;
  package$css.GridAutoColumns = GridAutoColumns;
  Object.defineProperty(GridAutoFlow, 'Companion', {
    get: GridAutoFlow$Companion_getInstance
  });
  package$css.GridAutoFlow = GridAutoFlow;
  Object.defineProperty(GridAutoRows, 'Companion', {
    get: GridAutoRows$Companion_getInstance
  });
  package$css.GridAutoRows_init_onxlus$ = GridAutoRows_init;
  package$css.GridAutoRows_init_q37hx3$ = GridAutoRows_init_0;
  package$css.GridAutoRows = GridAutoRows;
  Object.defineProperty(GridColumn, 'Companion', {
    get: GridColumn$Companion_getInstance
  });
  package$css.GridColumn = GridColumn;
  Object.defineProperty(GridColumnEnd, 'Companion', {
    get: GridColumnEnd$Companion_getInstance
  });
  package$css.GridColumnEnd = GridColumnEnd;
  Object.defineProperty(GridColumnGap, 'Companion', {
    get: GridColumnGap$Companion_getInstance
  });
  package$css.GridColumnGap = GridColumnGap;
  Object.defineProperty(GridColumnStart, 'Companion', {
    get: GridColumnStart$Companion_getInstance
  });
  package$css.GridColumnStart = GridColumnStart;
  Object.defineProperty(GridGap, 'Companion', {
    get: GridGap$Companion_getInstance
  });
  package$css.GridGap = GridGap;
  Object.defineProperty(GridRow, 'Companion', {
    get: GridRow$Companion_getInstance
  });
  package$css.GridRow = GridRow;
  Object.defineProperty(GridRowEnd, 'Companion', {
    get: GridRowEnd$Companion_getInstance
  });
  package$css.GridRowEnd = GridRowEnd;
  Object.defineProperty(GridRowGap, 'Companion', {
    get: GridRowGap$Companion_getInstance
  });
  package$css.GridRowGap = GridRowGap;
  Object.defineProperty(GridRowStart, 'Companion', {
    get: GridRowStart$Companion_getInstance
  });
  package$css.GridRowStart = GridRowStart;
  Object.defineProperty(GridTemplate, 'Companion', {
    get: GridTemplate$Companion_getInstance
  });
  package$css.GridTemplate = GridTemplate;
  Object.defineProperty(GridTemplateAreas, 'Companion', {
    get: GridTemplateAreas$Companion_getInstance
  });
  package$css.GridTemplateAreas = GridTemplateAreas;
  Object.defineProperty(GridTemplateColumns, 'Companion', {
    get: GridTemplateColumns$Companion_getInstance
  });
  package$css.GridTemplateColumns_init_onxlus$ = GridTemplateColumns_init;
  package$css.GridTemplateColumns_init_q37hx3$ = GridTemplateColumns_init_0;
  package$css.GridTemplateColumns = GridTemplateColumns;
  Object.defineProperty(GridTemplateRows, 'Companion', {
    get: GridTemplateRows$Companion_getInstance
  });
  package$css.GridTemplateRows_init_onxlus$ = GridTemplateRows_init;
  package$css.GridTemplateRows_init_q37hx3$ = GridTemplateRows_init_0;
  package$css.GridTemplateRows = GridTemplateRows;
  Object.defineProperty(Grow, 'NONE', {
    get: Grow$NONE_getInstance
  });
  Object.defineProperty(Grow, 'GROW', {
    get: Grow$GROW_getInstance
  });
  Object.defineProperty(Grow, 'SHRINK', {
    get: Grow$SHRINK_getInstance
  });
  Object.defineProperty(Grow, 'GROW_SHRINK', {
    get: Grow$GROW_SHRINK_getInstance
  });
  package$css.Grow = Grow;
  Object.defineProperty(Hyphens, 'initial', {
    get: Hyphens$initial_getInstance
  });
  Object.defineProperty(Hyphens, 'inherit', {
    get: Hyphens$inherit_getInstance
  });
  Object.defineProperty(Hyphens, 'unset', {
    get: Hyphens$unset_getInstance
  });
  Object.defineProperty(Hyphens, 'none', {
    get: Hyphens$none_getInstance
  });
  Object.defineProperty(Hyphens, 'manual', {
    get: Hyphens$manual_getInstance
  });
  Object.defineProperty(Hyphens, 'auto', {
    get: Hyphens$auto_getInstance
  });
  package$css.Hyphens = Hyphens;
  Object.defineProperty(ListStyleType, 'initial', {
    get: ListStyleType$initial_getInstance
  });
  Object.defineProperty(ListStyleType, 'inherit', {
    get: ListStyleType$inherit_getInstance
  });
  Object.defineProperty(ListStyleType, 'unset', {
    get: ListStyleType$unset_getInstance
  });
  Object.defineProperty(ListStyleType, 'none', {
    get: ListStyleType$none_getInstance
  });
  Object.defineProperty(ListStyleType, 'disc', {
    get: ListStyleType$disc_getInstance
  });
  Object.defineProperty(ListStyleType, 'circle', {
    get: ListStyleType$circle_getInstance
  });
  Object.defineProperty(ListStyleType, 'square', {
    get: ListStyleType$square_getInstance
  });
  Object.defineProperty(ListStyleType, 'decimal', {
    get: ListStyleType$decimal_getInstance
  });
  package$css.ListStyleType = ListStyleType;
  Object.defineProperty(ObjectFit, 'initial', {
    get: ObjectFit$initial_getInstance
  });
  Object.defineProperty(ObjectFit, 'inherit', {
    get: ObjectFit$inherit_getInstance
  });
  Object.defineProperty(ObjectFit, 'unset', {
    get: ObjectFit$unset_getInstance
  });
  Object.defineProperty(ObjectFit, 'contain', {
    get: ObjectFit$contain_getInstance
  });
  Object.defineProperty(ObjectFit, 'cover', {
    get: ObjectFit$cover_getInstance
  });
  Object.defineProperty(ObjectFit, 'fill', {
    get: ObjectFit$fill_getInstance
  });
  Object.defineProperty(ObjectFit, 'none', {
    get: ObjectFit$none_getInstance
  });
  Object.defineProperty(ObjectFit, 'scaleDown', {
    get: ObjectFit$scaleDown_getInstance
  });
  package$css.ObjectFit = ObjectFit;
  Object.defineProperty(Outline, 'initial', {
    get: Outline$initial_getInstance
  });
  Object.defineProperty(Outline, 'inherit', {
    get: Outline$inherit_getInstance
  });
  Object.defineProperty(Outline, 'unset', {
    get: Outline$unset_getInstance
  });
  Object.defineProperty(Outline, 'none', {
    get: Outline$none_getInstance
  });
  package$css.Outline = Outline;
  Object.defineProperty(Overflow, 'initial', {
    get: Overflow$initial_getInstance
  });
  Object.defineProperty(Overflow, 'inherit', {
    get: Overflow$inherit_getInstance
  });
  Object.defineProperty(Overflow, 'unset', {
    get: Overflow$unset_getInstance
  });
  Object.defineProperty(Overflow, 'visible', {
    get: Overflow$visible_getInstance
  });
  Object.defineProperty(Overflow, 'hidden', {
    get: Overflow$hidden_getInstance
  });
  Object.defineProperty(Overflow, 'scroll', {
    get: Overflow$scroll_getInstance
  });
  Object.defineProperty(Overflow, 'auto', {
    get: Overflow$auto_getInstance
  });
  package$css.Overflow = Overflow;
  Object.defineProperty(OverflowWrap, 'initial', {
    get: OverflowWrap$initial_getInstance
  });
  Object.defineProperty(OverflowWrap, 'inherit', {
    get: OverflowWrap$inherit_getInstance
  });
  Object.defineProperty(OverflowWrap, 'unset', {
    get: OverflowWrap$unset_getInstance
  });
  Object.defineProperty(OverflowWrap, 'normal', {
    get: OverflowWrap$normal_getInstance
  });
  Object.defineProperty(OverflowWrap, 'breakWord', {
    get: OverflowWrap$breakWord_getInstance
  });
  package$css.OverflowWrap = OverflowWrap;
  Object.defineProperty(OverscrollBehavior, 'initial', {
    get: OverscrollBehavior$initial_getInstance
  });
  Object.defineProperty(OverscrollBehavior, 'inherit', {
    get: OverscrollBehavior$inherit_getInstance
  });
  Object.defineProperty(OverscrollBehavior, 'unset', {
    get: OverscrollBehavior$unset_getInstance
  });
  Object.defineProperty(OverscrollBehavior, 'auto', {
    get: OverscrollBehavior$auto_getInstance
  });
  Object.defineProperty(OverscrollBehavior, 'contain', {
    get: OverscrollBehavior$contain_getInstance
  });
  Object.defineProperty(OverscrollBehavior, 'none', {
    get: OverscrollBehavior$none_getInstance
  });
  package$css.OverscrollBehavior = OverscrollBehavior;
  Object.defineProperty(PointerEvents, 'initial', {
    get: PointerEvents$initial_getInstance
  });
  Object.defineProperty(PointerEvents, 'inherit', {
    get: PointerEvents$inherit_getInstance
  });
  Object.defineProperty(PointerEvents, 'unset', {
    get: PointerEvents$unset_getInstance
  });
  Object.defineProperty(PointerEvents, 'auto', {
    get: PointerEvents$auto_getInstance
  });
  Object.defineProperty(PointerEvents, 'none', {
    get: PointerEvents$none_getInstance
  });
  package$css.PointerEvents = PointerEvents;
  Object.defineProperty(Position, 'initial', {
    get: Position$initial_getInstance
  });
  Object.defineProperty(Position, 'inherit', {
    get: Position$inherit_getInstance
  });
  Object.defineProperty(Position, 'unset', {
    get: Position$unset_getInstance
  });
  Object.defineProperty(Position, 'static', {
    get: Position$static_getInstance
  });
  Object.defineProperty(Position, 'relative', {
    get: Position$relative_getInstance
  });
  Object.defineProperty(Position, 'absolute', {
    get: Position$absolute_getInstance
  });
  Object.defineProperty(Position, 'fixed', {
    get: Position$fixed_getInstance
  });
  Object.defineProperty(Position, 'sticky', {
    get: Position$sticky_getInstance
  });
  package$css.Position = Position;
  Object.defineProperty(RowGap, 'Companion', {
    get: RowGap$Companion_getInstance
  });
  package$css.RowGap = RowGap;
  Object.defineProperty(ScrollBehavior, 'initial', {
    get: ScrollBehavior$initial_getInstance
  });
  Object.defineProperty(ScrollBehavior, 'inherit', {
    get: ScrollBehavior$inherit_getInstance
  });
  Object.defineProperty(ScrollBehavior, 'unset', {
    get: ScrollBehavior$unset_getInstance
  });
  Object.defineProperty(ScrollBehavior, 'auto', {
    get: ScrollBehavior$auto_getInstance
  });
  Object.defineProperty(ScrollBehavior, 'smooth', {
    get: ScrollBehavior$smooth_getInstance
  });
  package$css.ScrollBehavior = ScrollBehavior;
  Object.defineProperty(TextAlign, 'initial', {
    get: TextAlign$initial_getInstance
  });
  Object.defineProperty(TextAlign, 'inherit', {
    get: TextAlign$inherit_getInstance
  });
  Object.defineProperty(TextAlign, 'unset', {
    get: TextAlign$unset_getInstance
  });
  Object.defineProperty(TextAlign, 'left', {
    get: TextAlign$left_getInstance
  });
  Object.defineProperty(TextAlign, 'right', {
    get: TextAlign$right_getInstance
  });
  Object.defineProperty(TextAlign, 'center', {
    get: TextAlign$center_getInstance
  });
  Object.defineProperty(TextAlign, 'justify', {
    get: TextAlign$justify_getInstance
  });
  Object.defineProperty(TextAlign, 'justifyAll', {
    get: TextAlign$justifyAll_getInstance
  });
  Object.defineProperty(TextAlign, 'start', {
    get: TextAlign$start_getInstance
  });
  Object.defineProperty(TextAlign, 'end', {
    get: TextAlign$end_getInstance
  });
  Object.defineProperty(TextAlign, 'matchParent', {
    get: TextAlign$matchParent_getInstance
  });
  package$css.TextAlign = TextAlign;
  Object.defineProperty(TableLayout, 'initial', {
    get: TableLayout$initial_getInstance
  });
  Object.defineProperty(TableLayout, 'inherit', {
    get: TableLayout$inherit_getInstance
  });
  Object.defineProperty(TableLayout, 'unset', {
    get: TableLayout$unset_getInstance
  });
  Object.defineProperty(TableLayout, 'auto', {
    get: TableLayout$auto_getInstance
  });
  Object.defineProperty(TableLayout, 'fixed', {
    get: TableLayout$fixed_getInstance
  });
  package$css.TableLayout = TableLayout;
  Object.defineProperty(TextOverflow, 'initial', {
    get: TextOverflow$initial_getInstance
  });
  Object.defineProperty(TextOverflow, 'inherit', {
    get: TextOverflow$inherit_getInstance
  });
  Object.defineProperty(TextOverflow, 'unset', {
    get: TextOverflow$unset_getInstance
  });
  Object.defineProperty(TextOverflow, 'clip', {
    get: TextOverflow$clip_getInstance
  });
  Object.defineProperty(TextOverflow, 'ellipsis', {
    get: TextOverflow$ellipsis_getInstance
  });
  package$css.TextOverflow = TextOverflow;
  Object.defineProperty(TextTransform, 'initial', {
    get: TextTransform$initial_getInstance
  });
  Object.defineProperty(TextTransform, 'inherit', {
    get: TextTransform$inherit_getInstance
  });
  Object.defineProperty(TextTransform, 'unset', {
    get: TextTransform$unset_getInstance
  });
  Object.defineProperty(TextTransform, 'capitalize', {
    get: TextTransform$capitalize_getInstance
  });
  Object.defineProperty(TextTransform, 'uppercase', {
    get: TextTransform$uppercase_getInstance
  });
  Object.defineProperty(TextTransform, 'lowercase', {
    get: TextTransform$lowercase_getInstance
  });
  Object.defineProperty(TextTransform, 'none', {
    get: TextTransform$none_getInstance
  });
  Object.defineProperty(TextTransform, 'fullWidth', {
    get: TextTransform$fullWidth_getInstance
  });
  package$css.TextTransform = TextTransform;
  Object.defineProperty(UserSelect, 'initial', {
    get: UserSelect$initial_getInstance
  });
  Object.defineProperty(UserSelect, 'inherit', {
    get: UserSelect$inherit_getInstance
  });
  Object.defineProperty(UserSelect, 'unset', {
    get: UserSelect$unset_getInstance
  });
  Object.defineProperty(UserSelect, 'none', {
    get: UserSelect$none_getInstance
  });
  Object.defineProperty(UserSelect, 'auto', {
    get: UserSelect$auto_getInstance
  });
  Object.defineProperty(UserSelect, 'text', {
    get: UserSelect$text_getInstance
  });
  Object.defineProperty(UserSelect, 'contain', {
    get: UserSelect$contain_getInstance
  });
  Object.defineProperty(UserSelect, 'all', {
    get: UserSelect$all_getInstance
  });
  package$css.UserSelect = UserSelect;
  Object.defineProperty(VerticalAlign, 'Companion', {
    get: VerticalAlign$Companion_getInstance
  });
  package$css.VerticalAlign = VerticalAlign;
  package$css.get_up_dhrub4$ = get_up;
  package$css.get_down_dhrub4$ = get_down;
  Object.defineProperty(Visibility, 'initial', {
    get: Visibility$initial_getInstance
  });
  Object.defineProperty(Visibility, 'inherit', {
    get: Visibility$inherit_getInstance
  });
  Object.defineProperty(Visibility, 'unset', {
    get: Visibility$unset_getInstance
  });
  Object.defineProperty(Visibility, 'visible', {
    get: Visibility$visible_getInstance
  });
  Object.defineProperty(Visibility, 'hidden', {
    get: Visibility$hidden_getInstance
  });
  Object.defineProperty(Visibility, 'collapse', {
    get: Visibility$collapse_getInstance
  });
  package$css.Visibility = Visibility;
  Object.defineProperty(WhiteSpace, 'initial', {
    get: WhiteSpace$initial_getInstance
  });
  Object.defineProperty(WhiteSpace, 'inherit', {
    get: WhiteSpace$inherit_getInstance
  });
  Object.defineProperty(WhiteSpace, 'unset', {
    get: WhiteSpace$unset_getInstance
  });
  Object.defineProperty(WhiteSpace, 'normal', {
    get: WhiteSpace$normal_getInstance
  });
  Object.defineProperty(WhiteSpace, 'nowrap', {
    get: WhiteSpace$nowrap_getInstance
  });
  Object.defineProperty(WhiteSpace, 'pre', {
    get: WhiteSpace$pre_getInstance
  });
  Object.defineProperty(WhiteSpace, 'preWrap', {
    get: WhiteSpace$preWrap_getInstance
  });
  Object.defineProperty(WhiteSpace, 'preLine', {
    get: WhiteSpace$preLine_getInstance
  });
  package$css.WhiteSpace = WhiteSpace;
  Object.defineProperty(WordBreak, 'initial', {
    get: WordBreak$initial_getInstance
  });
  Object.defineProperty(WordBreak, 'inherit', {
    get: WordBreak$inherit_getInstance
  });
  Object.defineProperty(WordBreak, 'unset', {
    get: WordBreak$unset_getInstance
  });
  Object.defineProperty(WordBreak, 'normal', {
    get: WordBreak$normal_getInstance
  });
  Object.defineProperty(WordBreak, 'breakAll', {
    get: WordBreak$breakAll_getInstance
  });
  Object.defineProperty(WordBreak, 'breakWord', {
    get: WordBreak$breakWord_getInstance
  });
  Object.defineProperty(WordBreak, 'keepAll', {
    get: WordBreak$keepAll_getInstance
  });
  package$css.WordBreak = WordBreak;
  Object.defineProperty(WordWrap, 'initial', {
    get: WordWrap$initial_getInstance
  });
  Object.defineProperty(WordWrap, 'inherit', {
    get: WordWrap$inherit_getInstance
  });
  Object.defineProperty(WordWrap, 'unset', {
    get: WordWrap$unset_getInstance
  });
  Object.defineProperty(WordWrap, 'normal', {
    get: WordWrap$normal_getInstance
  });
  Object.defineProperty(WordWrap, 'breakWord', {
    get: WordWrap$breakWord_getInstance
  });
  package$css.WordWrap = WordWrap;
  Object.defineProperty(Resize, 'none', {
    get: Resize$none_getInstance
  });
  Object.defineProperty(Resize, 'both', {
    get: Resize$both_getInstance
  });
  Object.defineProperty(Resize, 'horizontal', {
    get: Resize$horizontal_getInstance
  });
  Object.defineProperty(Resize, 'vertical', {
    get: Resize$vertical_getInstance
  });
  Object.defineProperty(Resize, 'block', {
    get: Resize$block_getInstance
  });
  Object.defineProperty(Resize, 'inline', {
    get: Resize$inline_getInstance
  });
  Object.defineProperty(Resize, 'inherit', {
    get: Resize$inherit_getInstance
  });
  Object.defineProperty(Resize, 'initial', {
    get: Resize$initial_getInstance
  });
  Object.defineProperty(Resize, 'unset', {
    get: Resize$unset_getInstance
  });
  package$css.Resize = Resize;
  Object.defineProperty(Image, 'Companion', {
    get: Image$Companion_getInstance
  });
  package$css.Image = Image;
  package$css.StyleList = StyleList;
  package$css.StyledElement = StyledElement;
  package$css.get_alignContent_z7t51k$ = get_alignContent;
  package$css.set_alignContent_olgsez$ = set_alignContent;
  package$css.get_alignItems_z7t51k$ = get_alignItems;
  package$css.set_alignItems_olgsez$ = set_alignItems;
  package$css.get_alignSelf_z7t51k$ = get_alignSelf;
  package$css.set_alignSelf_olgsez$ = set_alignSelf;
  package$css.get_animation_z7t51k$ = get_animation;
  package$css.set_animation_23wd0g$ = set_animation;
  package$css.get_background_z7t51k$ = get_background;
  package$css.set_background_krvuuu$ = set_background;
  package$css.get_backgroundAttachment_z7t51k$ = get_backgroundAttachment;
  package$css.set_backgroundAttachment_797yor$ = set_backgroundAttachment;
  package$css.get_backgroundClip_z7t51k$ = get_backgroundClip;
  package$css.set_backgroundClip_o2wz20$ = set_backgroundClip;
  package$css.get_backgroundColor_z7t51k$ = get_backgroundColor;
  package$css.set_backgroundColor_ommczd$ = set_backgroundColor;
  package$css.get_backgroundImage_z7t51k$ = get_backgroundImage;
  package$css.set_backgroundImage_opvm7l$ = set_backgroundImage;
  package$css.get_backgroundOrigin_z7t51k$ = get_backgroundOrigin;
  package$css.set_backgroundOrigin_k0c7ry$ = set_backgroundOrigin;
  package$css.get_backgroundPosition_z7t51k$ = get_backgroundPosition;
  package$css.set_backgroundPosition_krvuuu$ = set_backgroundPosition;
  package$css.get_backgroundRepeat_z7t51k$ = get_backgroundRepeat;
  package$css.set_backgroundRepeat_l8g6hf$ = set_backgroundRepeat;
  package$css.get_backgroundSize_z7t51k$ = get_backgroundSize;
  package$css.set_backgroundSize_krvuuu$ = set_backgroundSize;
  package$css.get_border_z7t51k$ = get_border;
  package$css.set_border_krvuuu$ = set_border;
  package$css.get_borderTop_z7t51k$ = get_borderTop;
  package$css.set_borderTop_krvuuu$ = set_borderTop;
  package$css.get_borderRight_z7t51k$ = get_borderRight;
  package$css.set_borderRight_krvuuu$ = set_borderRight;
  package$css.get_borderBottom_z7t51k$ = get_borderBottom;
  package$css.set_borderBottom_krvuuu$ = set_borderBottom;
  package$css.get_borderLeft_z7t51k$ = get_borderLeft;
  package$css.set_borderLeft_krvuuu$ = set_borderLeft;
  package$css.get_borderSpacing_z7t51k$ = get_borderSpacing;
  package$css.set_borderSpacing_n8chyh$ = set_borderSpacing;
  package$css.get_borderRadius_z7t51k$ = get_borderRadius;
  package$css.set_borderRadius_n8chyh$ = set_borderRadius;
  package$css.get_borderTopLeftRadius_z7t51k$ = get_borderTopLeftRadius;
  package$css.set_borderTopLeftRadius_n8chyh$ = set_borderTopLeftRadius;
  package$css.get_borderTopRightRadius_z7t51k$ = get_borderTopRightRadius;
  package$css.set_borderTopRightRadius_n8chyh$ = set_borderTopRightRadius;
  package$css.get_borderBottomLeftRadius_z7t51k$ = get_borderBottomLeftRadius;
  package$css.set_borderBottomLeftRadius_n8chyh$ = set_borderBottomLeftRadius;
  package$css.get_borderBottomRightRadius_z7t51k$ = get_borderBottomRightRadius;
  package$css.set_borderBottomRightRadius_n8chyh$ = set_borderBottomRightRadius;
  package$css.get_borderStyle_z7t51k$ = get_borderStyle;
  package$css.set_borderStyle_whe14r$ = set_borderStyle;
  package$css.get_borderTopStyle_z7t51k$ = get_borderTopStyle;
  package$css.set_borderTopStyle_whe14r$ = set_borderTopStyle;
  package$css.get_borderRightStyle_z7t51k$ = get_borderRightStyle;
  package$css.set_borderRightStyle_whe14r$ = set_borderRightStyle;
  package$css.get_borderBottomStyle_z7t51k$ = get_borderBottomStyle;
  package$css.set_borderBottomStyle_whe14r$ = set_borderBottomStyle;
  package$css.get_borderLeftStyle_z7t51k$ = get_borderLeftStyle;
  package$css.set_borderLeftStyle_whe14r$ = set_borderLeftStyle;
  package$css.get_borderWidth_z7t51k$ = get_borderWidth;
  package$css.set_borderWidth_n8chyh$ = set_borderWidth;
  package$css.get_borderTopWidth_z7t51k$ = get_borderTopWidth;
  package$css.set_borderTopWidth_n8chyh$ = set_borderTopWidth;
  package$css.get_borderRightWidth_z7t51k$ = get_borderRightWidth;
  package$css.set_borderRightWidth_n8chyh$ = set_borderRightWidth;
  package$css.get_borderBottomWidth_z7t51k$ = get_borderBottomWidth;
  package$css.set_borderBottomWidth_n8chyh$ = set_borderBottomWidth;
  package$css.get_borderLeftWidth_z7t51k$ = get_borderLeftWidth;
  package$css.set_borderLeftWidth_n8chyh$ = set_borderLeftWidth;
  package$css.get_borderColor_z7t51k$ = get_borderColor;
  package$css.set_borderColor_ommczd$ = set_borderColor;
  package$css.get_borderTopColor_z7t51k$ = get_borderTopColor;
  package$css.set_borderTopColor_ommczd$ = set_borderTopColor;
  package$css.get_borderRightColor_z7t51k$ = get_borderRightColor;
  package$css.set_borderRightColor_ommczd$ = set_borderRightColor;
  package$css.get_borderBottomColor_z7t51k$ = get_borderBottomColor;
  package$css.set_borderBottomColor_ommczd$ = set_borderBottomColor;
  package$css.get_borderLeftColor_z7t51k$ = get_borderLeftColor;
  package$css.set_borderLeftColor_ommczd$ = set_borderLeftColor;
  package$css.get_bottom_z7t51k$ = get_bottom;
  package$css.set_bottom_n8chyh$ = set_bottom;
  package$css.get_boxSizing_z7t51k$ = get_boxSizing;
  package$css.set_boxSizing_f0dk3l$ = set_boxSizing;
  package$css.get_boxShadow_z7t51k$ = get_boxShadow;
  package$css.set_boxShadow_ihtgah$ = set_boxShadow;
  package$css.get_clear_z7t51k$ = get_clear;
  package$css.set_clear_omkahv$ = set_clear;
  package$css.get_color_z7t51k$ = get_color;
  package$css.set_color_ommczd$ = set_color;
  package$css.get_columnGap_z7t51k$ = get_columnGap;
  package$css.set_columnGap_87l4s6$ = set_columnGap;
  package$css.get_contain_z7t51k$ = get_contain;
  package$css.set_contain_elksa2$ = set_contain;
  package$css.get_content_z7t51k$ = get_content;
  package$css.set_content_qf37ct$ = set_content;
  package$css.get_cursor_z7t51k$ = get_cursor;
  package$css.set_cursor_hrkqtc$ = set_cursor;
  package$css.get_direction_z7t51k$ = get_direction;
  package$css.set_direction_rs8q51$ = set_direction;
  package$css.get_display_z7t51k$ = get_display;
  package$css.set_display_qidz4o$ = set_display;
  package$css.get_filter_z7t51k$ = get_filter;
  package$css.set_filter_krvuuu$ = set_filter;
  package$css.get_flexDirection_z7t51k$ = get_flexDirection;
  package$css.set_flexDirection_c4dh0c$ = set_flexDirection;
  package$css.get_flexGrow_z7t51k$ = get_flexGrow;
  package$css.set_flexGrow_dlibp2$ = set_flexGrow;
  package$css.get_flexShrink_z7t51k$ = get_flexShrink;
  package$css.set_flexShrink_dlibp2$ = set_flexShrink;
  package$css.get_flexBasis_z7t51k$ = get_flexBasis;
  package$css.set_flexBasis_e7c78b$ = set_flexBasis;
  package$css.get_flexWrap_z7t51k$ = get_flexWrap;
  package$css.set_flexWrap_6el38z$ = set_flexWrap;
  package$css.get_float_z7t51k$ = get_float;
  package$css.set_float_oo7voy$ = set_float;
  package$css.get_fontFamily_z7t51k$ = get_fontFamily;
  package$css.set_fontFamily_krvuuu$ = set_fontFamily;
  package$css.get_fontSize_z7t51k$ = get_fontSize;
  package$css.set_fontSize_n8chyh$ = set_fontSize;
  package$css.get_fontWeight_z7t51k$ = get_fontWeight;
  package$css.set_fontWeight_6wqc8f$ = set_fontWeight;
  package$css.get_fontStyle_z7t51k$ = get_fontStyle;
  package$css.set_fontStyle_i1ya9k$ = set_fontStyle;
  package$css.get_gap_z7t51k$ = get_gap;
  package$css.set_gap_suo564$ = set_gap;
  package$css.get_gridAutoColumns_z7t51k$ = get_gridAutoColumns;
  package$css.set_gridAutoColumns_32ukpq$ = set_gridAutoColumns;
  package$css.get_gridAutoFlow_z7t51k$ = get_gridAutoFlow;
  package$css.set_gridAutoFlow_kboskz$ = set_gridAutoFlow;
  package$css.get_gridAutoRows_z7t51k$ = get_gridAutoRows;
  package$css.set_gridAutoRows_kbh2bs$ = set_gridAutoRows;
  package$css.get_gridColumn_z7t51k$ = get_gridColumn;
  package$css.set_gridColumn_93wt2e$ = set_gridColumn;
  package$css.get_gridColumnEnd_z7t51k$ = get_gridColumnEnd;
  package$css.set_gridColumnEnd_hnt42d$ = set_gridColumnEnd;
  package$css.get_gridColumnGap_z7t51k$ = get_gridColumnGap;
  package$css.set_gridColumnGap_hnt58w$ = set_gridColumnGap;
  package$css.get_gridColumnStart_z7t51k$ = get_gridColumnStart;
  package$css.set_gridColumnStart_3lym90$ = set_gridColumnStart;
  package$css.get_gridGap_z7t51k$ = get_gridGap;
  package$css.set_gridGap_3m505i$ = set_gridGap;
  package$css.get_gridRow_z7t51k$ = get_gridRow;
  package$css.set_gridRow_3m58ne$ = set_gridRow;
  package$css.get_gridRowEnd_z7t51k$ = get_gridRowEnd;
  package$css.set_gridRowEnd_g7r69d$ = set_gridRowEnd;
  package$css.get_gridRowGap_z7t51k$ = get_gridRowGap;
  package$css.set_gridRowGap_g7r7fw$ = set_gridRowGap;
  package$css.get_gridRowStart_z7t51k$ = get_gridRowStart;
  package$css.set_gridRowStart_rgj248$ = set_gridRowStart;
  package$css.get_gridTemplate_z7t51k$ = get_gridTemplate;
  package$css.set_gridTemplate_529xe2$ = set_gridTemplate;
  package$css.get_gridTemplateAreas_z7t51k$ = get_gridTemplateAreas;
  package$css.set_gridTemplateAreas_px71i4$ = set_gridTemplateAreas;
  package$css.get_gridTemplateColumns_z7t51k$ = get_gridTemplateColumns;
  package$css.set_gridTemplateColumns_7cauk3$ = set_gridTemplateColumns;
  package$css.get_gridTemplateRows_z7t51k$ = get_gridTemplateRows;
  package$css.set_gridTemplateRows_lgsgub$ = set_gridTemplateRows;
  package$css.get_height_z7t51k$ = get_height;
  package$css.set_height_n8chyh$ = set_height;
  package$css.get_hyphens_z7t51k$ = get_hyphens;
  package$css.set_hyphens_lpsdsn$ = set_hyphens;
  package$css.get_justifyContent_z7t51k$ = get_justifyContent;
  package$css.set_justifyContent_gwpzrh$ = set_justifyContent;
  package$css.get_left_z7t51k$ = get_left;
  package$css.set_left_n8chyh$ = set_left;
  package$css.get_letterSpacing_z7t51k$ = get_letterSpacing;
  package$css.set_letterSpacing_n8chyh$ = set_letterSpacing;
  package$css.get_lineHeight_z7t51k$ = get_lineHeight;
  package$css.set_lineHeight_ftzj10$ = set_lineHeight;
  package$css.get_listStyleType_z7t51k$ = get_listStyleType;
  package$css.set_listStyleType_pit7rx$ = set_listStyleType;
  package$css.get_margin_z7t51k$ = get_margin;
  package$css.set_margin_krvuuu$ = set_margin;
  package$css.get_marginTop_z7t51k$ = get_marginTop;
  package$css.set_marginTop_n8chyh$ = set_marginTop;
  package$css.get_marginRight_z7t51k$ = get_marginRight;
  package$css.set_marginRight_n8chyh$ = set_marginRight;
  package$css.get_marginBottom_z7t51k$ = get_marginBottom;
  package$css.set_marginBottom_n8chyh$ = set_marginBottom;
  package$css.get_marginLeft_z7t51k$ = get_marginLeft;
  package$css.set_marginLeft_n8chyh$ = set_marginLeft;
  package$css.get_minWidth_z7t51k$ = get_minWidth;
  package$css.set_minWidth_n8chyh$ = set_minWidth;
  package$css.get_maxWidth_z7t51k$ = get_maxWidth;
  package$css.set_maxWidth_n8chyh$ = set_maxWidth;
  package$css.get_minHeight_z7t51k$ = get_minHeight;
  package$css.set_minHeight_n8chyh$ = set_minHeight;
  package$css.get_maxHeight_z7t51k$ = get_maxHeight;
  package$css.set_maxHeight_n8chyh$ = set_maxHeight;
  package$css.get_objectFit_z7t51k$ = get_objectFit;
  package$css.set_objectFit_j2gnxk$ = set_objectFit;
  package$css.get_objectPosition_z7t51k$ = get_objectPosition;
  package$css.set_objectPosition_krvuuu$ = set_objectPosition;
  package$css.get_opacity_z7t51k$ = get_opacity;
  package$css.set_opacity_if475a$ = set_opacity;
  package$css.get_outline_z7t51k$ = get_outline;
  package$css.set_outline_jfkew8$ = set_outline;
  package$css.get_overflow_z7t51k$ = get_overflow;
  package$css.set_overflow_qhpm6s$ = set_overflow;
  package$css.get_overflowX_z7t51k$ = get_overflowX;
  package$css.set_overflowX_qhpm6s$ = set_overflowX;
  package$css.get_overflowY_z7t51k$ = get_overflowY;
  package$css.set_overflowY_qhpm6s$ = set_overflowY;
  package$css.get_overflowWrap_z7t51k$ = get_overflowWrap;
  package$css.set_overflowWrap_lojgoa$ = set_overflowWrap;
  package$css.get_overscrollBehavior_z7t51k$ = get_overscrollBehavior;
  package$css.set_overscrollBehavior_zhc0sj$ = set_overscrollBehavior;
  package$css.get_padding_z7t51k$ = get_padding;
  package$css.set_padding_krvuuu$ = set_padding;
  package$css.get_paddingTop_z7t51k$ = get_paddingTop;
  package$css.set_paddingTop_n8chyh$ = set_paddingTop;
  package$css.get_paddingRight_z7t51k$ = get_paddingRight;
  package$css.set_paddingRight_n8chyh$ = set_paddingRight;
  package$css.get_paddingBottom_z7t51k$ = get_paddingBottom;
  package$css.set_paddingBottom_n8chyh$ = set_paddingBottom;
  package$css.get_paddingLeft_z7t51k$ = get_paddingLeft;
  package$css.set_paddingLeft_n8chyh$ = set_paddingLeft;
  package$css.get_pointerEvents_z7t51k$ = get_pointerEvents;
  package$css.set_pointerEvents_ne887g$ = set_pointerEvents;
  package$css.get_position_z7t51k$ = get_position;
  package$css.set_position_mvtmy5$ = set_position;
  package$css.get_right_z7t51k$ = get_right;
  package$css.set_right_n8chyh$ = set_right;
  package$css.get_rowGap_z7t51k$ = get_rowGap;
  package$css.set_rowGap_ar4whm$ = set_rowGap;
  package$css.get_scrollBehavior_z7t51k$ = get_scrollBehavior;
  package$css.set_scrollBehavior_p2bpz$ = set_scrollBehavior;
  package$css.get_textAlign_z7t51k$ = get_textAlign;
  package$css.set_textAlign_q2ys32$ = set_textAlign;
  package$css.get_textDecoration_z7t51k$ = get_textDecoration;
  package$css.set_textDecoration_pbf7yq$ = set_textDecoration;
  package$css.get_textOverflow_z7t51k$ = get_textOverflow;
  package$css.set_textOverflow_67zq6f$ = set_textOverflow;
  package$css.get_textTransform_z7t51k$ = get_textTransform;
  package$css.set_textTransform_ktraln$ = set_textTransform;
  package$css.get_top_z7t51k$ = get_top;
  package$css.set_top_n8chyh$ = set_top;
  package$css.get_transform_z7t51k$ = get_transform;
  package$css.set_transform_z5yzaw$ = set_transform;
  package$css.get_transition_z7t51k$ = get_transition;
  package$css.set_transition_q65pgt$ = set_transition;
  package$css.get_verticalAlign_z7t51k$ = get_verticalAlign;
  package$css.set_verticalAlign_9eaq6d$ = set_verticalAlign;
  package$css.get_visibility_z7t51k$ = get_visibility;
  package$css.set_visibility_xorjt0$ = set_visibility;
  package$css.get_whiteSpace_z7t51k$ = get_whiteSpace;
  package$css.set_whiteSpace_9bsrpj$ = set_whiteSpace;
  package$css.get_width_z7t51k$ = get_width;
  package$css.set_width_n8chyh$ = set_width;
  package$css.get_wordBreak_z7t51k$ = get_wordBreak;
  package$css.set_wordBreak_d1srv9$ = set_wordBreak;
  package$css.get_wordWrap_z7t51k$ = get_wordWrap;
  package$css.set_wordWrap_ys3f36$ = set_wordWrap;
  package$css.get_userSelect_z7t51k$ = get_userSelect;
  package$css.set_userSelect_vc30cx$ = set_userSelect;
  package$css.get_tableLayout_z7t51k$ = get_tableLayout;
  package$css.set_tableLayout_l1fqpa$ = set_tableLayout;
  package$css.get_borderCollapse_z7t51k$ = get_borderCollapse;
  package$css.set_borderCollapse_4z7co3$ = set_borderCollapse;
  package$css.get_zIndex_z7t51k$ = get_zIndex;
  package$css.set_zIndex_a6g65m$ = set_zIndex;
  package$css.get_resize_z7t51k$ = get_resize;
  package$css.set_resize_awooki$ = set_resize;
  package$css.flex_f3fbr5$ = flex;
  package$css.flex_hmdnwb$ = flex_0;
  package$css.grow_sznwqr$ = grow;
  package$css.margin_fjjo64$ = margin_0;
  package$css.margin_9vmwvs$ = margin_1;
  package$css.margin_cx3uck$ = margin_2;
  package$css.margin_njam0t$ = margin_3;
  package$css.padding_fjjo64$ = padding_0;
  package$css.padding_9vmwvs$ = padding_1;
  package$css.padding_cx3uck$ = padding_2;
  package$css.padding_njam0t$ = padding_3;
  package$css.TagSelector = TagSelector;
  Object.defineProperty(package$css, 'a', {
    get: get_a
  });
  Object.defineProperty(package$css, 'abbr', {
    get: get_abbr
  });
  Object.defineProperty(package$css, 'area', {
    get: get_area
  });
  Object.defineProperty(package$css, 'address', {
    get: get_address
  });
  Object.defineProperty(package$css, 'article', {
    get: get_article
  });
  Object.defineProperty(package$css, 'aside', {
    get: get_aside
  });
  Object.defineProperty(package$css, 'audio', {
    get: get_audio
  });
  Object.defineProperty(package$css, 'b', {
    get: get_b
  });
  Object.defineProperty(package$css, 'bdi', {
    get: get_bdi
  });
  Object.defineProperty(package$css, 'blockquote', {
    get: get_blockquote
  });
  Object.defineProperty(package$css, 'bdo', {
    get: get_bdo
  });
  Object.defineProperty(package$css, 'body', {
    get: get_body
  });
  Object.defineProperty(package$css, 'br', {
    get: get_br
  });
  Object.defineProperty(package$css, 'button', {
    get: get_button
  });
  Object.defineProperty(package$css, 'canvas', {
    get: get_canvas
  });
  Object.defineProperty(package$css, 'caption', {
    get: get_caption
  });
  Object.defineProperty(package$css, 'cite', {
    get: get_cite
  });
  Object.defineProperty(package$css, 'code', {
    get: get_code
  });
  Object.defineProperty(package$css, 'col', {
    get: get_col
  });
  Object.defineProperty(package$css, 'colgroup', {
    get: get_colgroup
  });
  Object.defineProperty(package$css, 'command', {
    get: get_command
  });
  Object.defineProperty(package$css, 'datalist', {
    get: get_datalist
  });
  Object.defineProperty(package$css, 'del', {
    get: get_del
  });
  Object.defineProperty(package$css, 'details', {
    get: get_details
  });
  Object.defineProperty(package$css, 'dfn', {
    get: get_dfn
  });
  Object.defineProperty(package$css, 'dialog', {
    get: get_dialog
  });
  Object.defineProperty(package$css, 'div', {
    get: get_div
  });
  Object.defineProperty(package$css, 'dl', {
    get: get_dl
  });
  Object.defineProperty(package$css, 'em', {
    get: get_em_0
  });
  Object.defineProperty(package$css, 'embed', {
    get: get_embed
  });
  Object.defineProperty(package$css, 'fieldset', {
    get: get_fieldset
  });
  Object.defineProperty(package$css, 'figure', {
    get: get_figure
  });
  Object.defineProperty(package$css, 'figcaption', {
    get: get_figcaption
  });
  Object.defineProperty(package$css, 'footer', {
    get: get_footer
  });
  Object.defineProperty(package$css, 'form', {
    get: get_form
  });
  Object.defineProperty(package$css, 'h1', {
    get: get_h1
  });
  Object.defineProperty(package$css, 'h2', {
    get: get_h2
  });
  Object.defineProperty(package$css, 'h3', {
    get: get_h3
  });
  Object.defineProperty(package$css, 'h4', {
    get: get_h4
  });
  Object.defineProperty(package$css, 'h5', {
    get: get_h5
  });
  Object.defineProperty(package$css, 'h6', {
    get: get_h6
  });
  Object.defineProperty(package$css, 'header', {
    get: get_header
  });
  Object.defineProperty(package$css, 'hgroup', {
    get: get_hgroup
  });
  Object.defineProperty(package$css, 'hr', {
    get: get_hr
  });
  Object.defineProperty(package$css, 'html', {
    get: get_html
  });
  Object.defineProperty(package$css, 'i', {
    get: get_i
  });
  Object.defineProperty(package$css, 'iframe', {
    get: get_iframe
  });
  Object.defineProperty(package$css, 'img', {
    get: get_img
  });
  Object.defineProperty(package$css, 'input', {
    get: get_input
  });
  Object.defineProperty(package$css, 'ins', {
    get: get_ins
  });
  Object.defineProperty(package$css, 'kbd', {
    get: get_kbd
  });
  Object.defineProperty(package$css, 'keygen', {
    get: get_keygen
  });
  Object.defineProperty(package$css, 'label', {
    get: get_label
  });
  Object.defineProperty(package$css, 'link', {
    get: get_link
  });
  Object.defineProperty(package$css, 'map', {
    get: get_map
  });
  Object.defineProperty(package$css, 'mark', {
    get: get_mark
  });
  Object.defineProperty(package$css, 'math', {
    get: get_math
  });
  Object.defineProperty(package$css, 'menu', {
    get: get_menu
  });
  Object.defineProperty(package$css, 'meta', {
    get: get_meta
  });
  Object.defineProperty(package$css, 'meter', {
    get: get_meter
  });
  Object.defineProperty(package$css, 'nav', {
    get: get_nav
  });
  Object.defineProperty(package$css, 'noscript', {
    get: get_noscript
  });
  Object.defineProperty(package$css, 'ol', {
    get: get_ol
  });
  Object.defineProperty(package$css, 'objectTag', {
    get: get_objectTag
  });
  Object.defineProperty(package$css, 'output', {
    get: get_output
  });
  Object.defineProperty(package$css, 'p', {
    get: get_p
  });
  Object.defineProperty(package$css, 'pre', {
    get: get_pre
  });
  Object.defineProperty(package$css, 'progress', {
    get: get_progress
  });
  Object.defineProperty(package$css, 'q', {
    get: get_q
  });
  Object.defineProperty(package$css, 'ruby', {
    get: get_ruby
  });
  Object.defineProperty(package$css, 'samp', {
    get: get_samp
  });
  Object.defineProperty(package$css, 'script', {
    get: get_script
  });
  Object.defineProperty(package$css, 'section', {
    get: get_section
  });
  Object.defineProperty(package$css, 'select', {
    get: get_select
  });
  Object.defineProperty(package$css, 'small', {
    get: get_small
  });
  Object.defineProperty(package$css, 'span', {
    get: get_span
  });
  Object.defineProperty(package$css, 'strong', {
    get: get_strong
  });
  Object.defineProperty(package$css, 'style', {
    get: get_style
  });
  Object.defineProperty(package$css, 'sub', {
    get: get_sub
  });
  Object.defineProperty(package$css, 'sup', {
    get: get_sup
  });
  Object.defineProperty(package$css, 'svg', {
    get: get_svg
  });
  Object.defineProperty(package$css, 'table', {
    get: get_table
  });
  Object.defineProperty(package$css, 'tbody', {
    get: get_tbody
  });
  Object.defineProperty(package$css, 'td', {
    get: get_td
  });
  Object.defineProperty(package$css, 'textarea', {
    get: get_textarea
  });
  Object.defineProperty(package$css, 'tfoot', {
    get: get_tfoot
  });
  Object.defineProperty(package$css, 'th', {
    get: get_th
  });
  Object.defineProperty(package$css, 'thead', {
    get: get_thead
  });
  Object.defineProperty(package$css, 'time', {
    get: get_time
  });
  Object.defineProperty(package$css, 'tr', {
    get: get_tr
  });
  Object.defineProperty(package$css, 'ul', {
    get: get_ul
  });
  Object.defineProperty(package$css, 'varTag', {
    get: get_varTag
  });
  Object.defineProperty(package$css, 'video', {
    get: get_video
  });
  Object.defineProperty(IterationCount, 'Companion', {
    get: IterationCount$Companion_getInstance
  });
  var package$properties = package$css.properties || (package$css.properties = {});
  package$properties.IterationCount = IterationCount;
  package$properties.get_times_s8ev3n$ = get_times;
  Object.defineProperty(AnimationDirection, 'initial', {
    get: AnimationDirection$initial_getInstance
  });
  Object.defineProperty(AnimationDirection, 'inherit', {
    get: AnimationDirection$inherit_getInstance
  });
  Object.defineProperty(AnimationDirection, 'unset', {
    get: AnimationDirection$unset_getInstance
  });
  Object.defineProperty(AnimationDirection, 'normal', {
    get: AnimationDirection$normal_getInstance
  });
  Object.defineProperty(AnimationDirection, 'reverse', {
    get: AnimationDirection$reverse_getInstance
  });
  Object.defineProperty(AnimationDirection, 'alternate', {
    get: AnimationDirection$alternate_getInstance
  });
  Object.defineProperty(AnimationDirection, 'alternateReverse', {
    get: AnimationDirection$alternateReverse_getInstance
  });
  package$properties.AnimationDirection = AnimationDirection;
  Object.defineProperty(FillMode, 'initial', {
    get: FillMode$initial_getInstance
  });
  Object.defineProperty(FillMode, 'inherit', {
    get: FillMode$inherit_getInstance
  });
  Object.defineProperty(FillMode, 'unset', {
    get: FillMode$unset_getInstance
  });
  Object.defineProperty(FillMode, 'none', {
    get: FillMode$none_getInstance
  });
  Object.defineProperty(FillMode, 'forwards', {
    get: FillMode$forwards_getInstance
  });
  Object.defineProperty(FillMode, 'backwards', {
    get: FillMode$backwards_getInstance
  });
  Object.defineProperty(FillMode, 'both', {
    get: FillMode$both_getInstance
  });
  package$properties.FillMode = FillMode;
  Object.defineProperty(PlayState, 'initial', {
    get: PlayState$initial_getInstance
  });
  Object.defineProperty(PlayState, 'inherit', {
    get: PlayState$inherit_getInstance
  });
  Object.defineProperty(PlayState, 'unset', {
    get: PlayState$unset_getInstance
  });
  Object.defineProperty(PlayState, 'running', {
    get: PlayState$running_getInstance
  });
  Object.defineProperty(PlayState, 'paused', {
    get: PlayState$paused_getInstance
  });
  package$properties.PlayState = PlayState;
  package$properties.Animation = Animation;
  Object.defineProperty(Animations, 'Companion', {
    get: Animations$Companion_getInstance
  });
  package$properties.Animations = Animations;
  package$properties.animation_hb31zf$ = animation_0;
  package$properties.border_2hqznt$ = border_0;
  package$properties.borderTop_pcr32b$ = borderTop_0;
  package$properties.borderRight_pcr32b$ = borderRight_0;
  package$properties.borderBottom_pcr32b$ = borderBottom_0;
  package$properties.borderLeft_pcr32b$ = borderLeft_0;
  package$properties.BoxShadow = BoxShadow;
  Object.defineProperty(BoxShadows, 'Companion', {
    get: BoxShadows$Companion_getInstance
  });
  package$properties.BoxShadows = BoxShadows;
  package$properties.boxShadow_x2br9$ = boxShadow_0;
  package$properties.boxShadowInset_x2br9$ = boxShadowInset;
  package$properties.KeyframesBuilder = KeyframesBuilder;
  Object.defineProperty(LineHeight, 'Companion', {
    get: LineHeight$Companion_getInstance
  });
  package$properties.LineHeight = LineHeight;
  package$properties.get_lh_dhrub4$ = get_lh;
  Object.defineProperty(TextDecorationLine, 'initial', {
    get: TextDecorationLine$initial_getInstance
  });
  Object.defineProperty(TextDecorationLine, 'inherit', {
    get: TextDecorationLine$inherit_getInstance
  });
  Object.defineProperty(TextDecorationLine, 'unset', {
    get: TextDecorationLine$unset_getInstance
  });
  Object.defineProperty(TextDecorationLine, 'underline', {
    get: TextDecorationLine$underline_getInstance
  });
  Object.defineProperty(TextDecorationLine, 'overline', {
    get: TextDecorationLine$overline_getInstance
  });
  Object.defineProperty(TextDecorationLine, 'lineThrough', {
    get: TextDecorationLine$lineThrough_getInstance
  });
  package$properties.TextDecorationLine = TextDecorationLine;
  Object.defineProperty(TextDecoration, 'Companion', {
    get: TextDecoration$Companion_getInstance
  });
  package$properties.TextDecoration = TextDecoration;
  Object.defineProperty(TextDecorationStyle, 'initial', {
    get: TextDecorationStyle$initial_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'inherit', {
    get: TextDecorationStyle$inherit_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'unset', {
    get: TextDecorationStyle$unset_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'solid', {
    get: TextDecorationStyle$solid_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'double', {
    get: TextDecorationStyle$double_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'dotted', {
    get: TextDecorationStyle$dotted_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'dashed', {
    get: TextDecorationStyle$dashed_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'wavy', {
    get: TextDecorationStyle$wavy_getInstance
  });
  package$properties.TextDecorationStyle = TextDecorationStyle;
  package$properties.textDecoration_1afs1r$ = textDecoration_0;
  package$properties.Time = Time;
  package$properties.get_s_rcaex3$ = get_s;
  package$properties.get_ms_rcaex3$ = get_ms;
  Object.defineProperty(Timing, 'Companion', {
    get: Timing$Companion_getInstance
  });
  package$properties.Timing = Timing;
  package$properties.cubicBezier_6y0v78$ = cubicBezier;
  Object.defineProperty(TransitionDirection, 'initial', {
    get: TransitionDirection$initial_getInstance
  });
  Object.defineProperty(TransitionDirection, 'inherit', {
    get: TransitionDirection$inherit_getInstance
  });
  Object.defineProperty(TransitionDirection, 'unset', {
    get: TransitionDirection$unset_getInstance
  });
  Object.defineProperty(TransitionDirection, 'start', {
    get: TransitionDirection$start_getInstance
  });
  Object.defineProperty(TransitionDirection, 'end', {
    get: TransitionDirection$end_getInstance
  });
  package$properties.TransitionDirection = TransitionDirection;
  package$properties.steps_mmzvtn$ = steps;
  package$properties.Angle = Angle;
  package$properties.get_deg_rcaex3$ = get_deg;
  package$properties.get_grad_rcaex3$ = get_grad;
  package$properties.get_rad_rcaex3$ = get_rad;
  package$properties.get_turn_rcaex3$ = get_turn;
  package$properties.Transform = Transform;
  Object.defineProperty(Transforms, 'Companion', {
    get: Transforms$Companion_getInstance
  });
  package$properties.Transforms = Transforms;
  package$properties.transform_nr0xo9$ = transform_0;
  package$properties.add_3pxtuf$ = add;
  package$properties.matrix_26r1yf$ = matrix;
  package$properties.matrix3d_r2sber$ = matrix3d;
  package$properties.translate_z52cu5$ = translate;
  package$properties.translateX_9xytsg$ = translateX;
  package$properties.translateY_9xytsg$ = translateY;
  package$properties.translate3d_enzlqi$ = translate3d;
  package$properties.translateZ_9xytsg$ = translateZ;
  package$properties.scale_3hwxf5$ = scale;
  package$properties.scale_v9xwwp$ = scale_0;
  package$properties.scaleX_v9xwwp$ = scaleX;
  package$properties.scaleY_v9xwwp$ = scaleY;
  package$properties.scale3d_w2wji3$ = scale3d;
  package$properties.scaleZ_v9xwwp$ = scaleZ;
  package$properties.rotate_ycsprd$ = rotate;
  package$properties.rotate3d_wdrabv$ = rotate3d;
  package$properties.rotateX_ycsprd$ = rotateX;
  package$properties.rotateY_ycsprd$ = rotateY;
  package$properties.rotateZ_ycsprd$ = rotateZ;
  package$properties.skew_6n0u8t$ = skew;
  package$properties.skewX_ycsprd$ = skewX;
  package$properties.skewY_ycsprd$ = skewY;
  package$properties.perspective_9xytsg$ = perspective;
  package$properties.Transition = Transition;
  Object.defineProperty(Transitions, 'Companion', {
    get: Transitions$Companion_getInstance
  });
  package$properties.Transitions = Transitions;
  package$properties.transition_nv0p8h$ = transition_0;
  package$properties.transition_7aapbl$ = transition_1;
  package$properties.delayUnhover_f0wpgr$ = delayUnhover;
  CSSBuilder.prototype.buildRules_s47sd7$ = RuleContainer.prototype.buildRules_s47sd7$;
  CSSBuilder.prototype.rule_xk38i9$ = RuleContainer.prototype.rule_xk38i9$;
  CSSBuilder.prototype.rule_4mtxvz$$default = RuleContainer.prototype.rule_4mtxvz$$default;
  CSSBuilder.prototype.rule_4mtxvz$ = RuleContainer.prototype.rule_4mtxvz$;
  KeyframesBuilder.prototype.buildRules_s47sd7$ = RuleContainer.prototype.buildRules_s47sd7$;
  KeyframesBuilder.prototype.rule_xk38i9$ = RuleContainer.prototype.rule_xk38i9$;
  KeyframesBuilder.prototype.rule_4mtxvz$$default = RuleContainer.prototype.rule_4mtxvz$$default;
  KeyframesBuilder.prototype.rule_4mtxvz$ = RuleContainer.prototype.rule_4mtxvz$;
  CAPITAL_LETTER = Regex_init('[A-Z]');
  ZERO = '0';
  alignContent = new CSSProperty();
  alignItems = new CSSProperty();
  alignSelf = new CSSProperty();
  animation = new CSSProperty(animation$lambda);
  background = new CSSProperty();
  backgroundAttachment = new CSSProperty();
  backgroundClip = new CSSProperty();
  backgroundColor = new CSSProperty();
  backgroundImage = new CSSProperty();
  backgroundOrigin = new CSSProperty();
  backgroundPosition = new CSSProperty();
  backgroundRepeat = new CSSProperty();
  backgroundSize = new CSSProperty();
  border = new CSSProperty();
  borderTop = new CSSProperty();
  borderRight = new CSSProperty();
  borderBottom = new CSSProperty();
  borderLeft = new CSSProperty();
  borderSpacing = new CSSProperty();
  borderRadius = new CSSProperty();
  borderTopLeftRadius = new CSSProperty();
  borderTopRightRadius = new CSSProperty();
  borderBottomLeftRadius = new CSSProperty();
  borderBottomRightRadius = new CSSProperty();
  borderStyle = new CSSProperty();
  borderTopStyle = new CSSProperty();
  borderRightStyle = new CSSProperty();
  borderBottomStyle = new CSSProperty();
  borderLeftStyle = new CSSProperty();
  borderWidth = new CSSProperty();
  borderTopWidth = new CSSProperty();
  borderRightWidth = new CSSProperty();
  borderBottomWidth = new CSSProperty();
  borderLeftWidth = new CSSProperty();
  borderColor = new CSSProperty();
  borderTopColor = new CSSProperty();
  borderRightColor = new CSSProperty();
  borderBottomColor = new CSSProperty();
  borderLeftColor = new CSSProperty();
  bottom = new CSSProperty();
  boxSizing = new CSSProperty();
  boxShadow = new CSSProperty(boxShadow$lambda);
  clear = new CSSProperty();
  color = new CSSProperty();
  columnGap = new CSSProperty();
  contain = new CSSProperty();
  content = new CSSProperty();
  cursor = new CSSProperty();
  direction = new CSSProperty();
  display = new CSSProperty();
  filter = new CSSProperty();
  flexDirection = new CSSProperty();
  flexGrow = new CSSProperty();
  flexShrink = new CSSProperty();
  flexBasis = new CSSProperty();
  flexWrap = new CSSProperty();
  float = new CSSProperty();
  fontFamily = new CSSProperty();
  fontSize = new CSSProperty();
  fontWeight = new CSSProperty();
  fontStyle = new CSSProperty();
  gap = new CSSProperty();
  gridAutoColumns = new CSSProperty();
  gridAutoFlow = new CSSProperty();
  gridAutoRows = new CSSProperty();
  gridColumn = new CSSProperty();
  gridColumnEnd = new CSSProperty();
  gridColumnGap = new CSSProperty();
  gridColumnStart = new CSSProperty();
  gridGap = new CSSProperty();
  gridRow = new CSSProperty();
  gridRowEnd = new CSSProperty();
  gridRowGap = new CSSProperty();
  gridRowStart = new CSSProperty();
  gridTemplate = new CSSProperty();
  gridTemplateAreas = new CSSProperty();
  gridTemplateColumns = new CSSProperty();
  gridTemplateRows = new CSSProperty();
  height = new CSSProperty();
  hyphens = new CSSProperty();
  justifyContent = new CSSProperty();
  left = new CSSProperty();
  letterSpacing = new CSSProperty();
  lineHeight = new CSSProperty();
  listStyleType = new CSSProperty();
  margin = new CSSProperty();
  marginTop = new CSSProperty();
  marginRight = new CSSProperty();
  marginBottom = new CSSProperty();
  marginLeft = new CSSProperty();
  minWidth = new CSSProperty();
  maxWidth = new CSSProperty();
  minHeight = new CSSProperty();
  maxHeight = new CSSProperty();
  objectFit = new CSSProperty();
  objectPosition = new CSSProperty();
  opacity = new CSSProperty();
  outline = new CSSProperty();
  overflow = new CSSProperty();
  overflowX = new CSSProperty();
  overflowY = new CSSProperty();
  overflowWrap = new CSSProperty();
  overscrollBehavior = new CSSProperty();
  padding = new CSSProperty();
  paddingTop = new CSSProperty();
  paddingRight = new CSSProperty();
  paddingBottom = new CSSProperty();
  paddingLeft = new CSSProperty();
  pointerEvents = new CSSProperty();
  position = new CSSProperty();
  right = new CSSProperty();
  rowGap = new CSSProperty();
  scrollBehavior = new CSSProperty();
  textAlign = new CSSProperty();
  textDecoration = new CSSProperty();
  textOverflow = new CSSProperty();
  textTransform = new CSSProperty();
  top = new CSSProperty();
  transform = new CSSProperty(transform$lambda);
  transition = new CSSProperty(transition$lambda);
  verticalAlign = new CSSProperty();
  visibility = new CSSProperty();
  whiteSpace = new CSSProperty();
  width = new CSSProperty();
  wordBreak = new CSSProperty();
  wordWrap = new CSSProperty();
  userSelect = new CSSProperty();
  tableLayout = new CSSProperty();
  borderCollapse = new CSSProperty();
  zIndex = new CSSProperty();
  resize = new CSSProperty();
  a = TagSelectorFactory_getInstance();
  abbr = TagSelectorFactory_getInstance();
  area = TagSelectorFactory_getInstance();
  address = TagSelectorFactory_getInstance();
  article = TagSelectorFactory_getInstance();
  aside = TagSelectorFactory_getInstance();
  audio = TagSelectorFactory_getInstance();
  b = TagSelectorFactory_getInstance();
  bdi = TagSelectorFactory_getInstance();
  blockquote = TagSelectorFactory_getInstance();
  bdo = TagSelectorFactory_getInstance();
  body = TagSelectorFactory_getInstance();
  br = TagSelectorFactory_getInstance();
  button = TagSelectorFactory_getInstance();
  canvas = TagSelectorFactory_getInstance();
  caption = TagSelectorFactory_getInstance();
  cite = TagSelectorFactory_getInstance();
  code = TagSelectorFactory_getInstance();
  col = TagSelectorFactory_getInstance();
  colgroup = TagSelectorFactory_getInstance();
  command = TagSelectorFactory_getInstance();
  datalist = TagSelectorFactory_getInstance();
  del = TagSelectorFactory_getInstance();
  details = TagSelectorFactory_getInstance();
  dfn = TagSelectorFactory_getInstance();
  dialog = TagSelectorFactory_getInstance();
  div = TagSelectorFactory_getInstance();
  dl = TagSelectorFactory_getInstance();
  em = TagSelectorFactory_getInstance();
  embed = TagSelectorFactory_getInstance();
  fieldset = TagSelectorFactory_getInstance();
  figure = TagSelectorFactory_getInstance();
  figcaption = TagSelectorFactory_getInstance();
  footer = TagSelectorFactory_getInstance();
  form = TagSelectorFactory_getInstance();
  h1 = TagSelectorFactory_getInstance();
  h2 = TagSelectorFactory_getInstance();
  h3 = TagSelectorFactory_getInstance();
  h4 = TagSelectorFactory_getInstance();
  h5 = TagSelectorFactory_getInstance();
  h6 = TagSelectorFactory_getInstance();
  header = TagSelectorFactory_getInstance();
  hgroup = TagSelectorFactory_getInstance();
  hr = TagSelectorFactory_getInstance();
  html = TagSelectorFactory_getInstance();
  i = TagSelectorFactory_getInstance();
  iframe = TagSelectorFactory_getInstance();
  img = TagSelectorFactory_getInstance();
  input = TagSelectorFactory_getInstance();
  ins = TagSelectorFactory_getInstance();
  kbd = TagSelectorFactory_getInstance();
  keygen = TagSelectorFactory_getInstance();
  label = TagSelectorFactory_getInstance();
  link = TagSelectorFactory_getInstance();
  map = TagSelectorFactory_getInstance();
  mark = TagSelectorFactory_getInstance();
  math_0 = TagSelectorFactory_getInstance();
  menu = TagSelectorFactory_getInstance();
  meta = TagSelectorFactory_getInstance();
  meter = TagSelectorFactory_getInstance();
  nav = TagSelectorFactory_getInstance();
  noscript = TagSelectorFactory_getInstance();
  ol = TagSelectorFactory_getInstance();
  objectTag = TagSelectorFactory_getInstance();
  output = TagSelectorFactory_getInstance();
  p = TagSelectorFactory_getInstance();
  pre = TagSelectorFactory_getInstance();
  progress = TagSelectorFactory_getInstance();
  q = TagSelectorFactory_getInstance();
  ruby = TagSelectorFactory_getInstance();
  samp = TagSelectorFactory_getInstance();
  script = TagSelectorFactory_getInstance();
  section = TagSelectorFactory_getInstance();
  select = TagSelectorFactory_getInstance();
  small = TagSelectorFactory_getInstance();
  span = TagSelectorFactory_getInstance();
  strong = TagSelectorFactory_getInstance();
  style = TagSelectorFactory_getInstance();
  sub = TagSelectorFactory_getInstance();
  sup = TagSelectorFactory_getInstance();
  svg = TagSelectorFactory_getInstance();
  table = TagSelectorFactory_getInstance();
  tbody = TagSelectorFactory_getInstance();
  td = TagSelectorFactory_getInstance();
  textarea = TagSelectorFactory_getInstance();
  tfoot = TagSelectorFactory_getInstance();
  th = TagSelectorFactory_getInstance();
  thead = TagSelectorFactory_getInstance();
  time = TagSelectorFactory_getInstance();
  tr = TagSelectorFactory_getInstance();
  ul = TagSelectorFactory_getInstance();
  video = TagSelectorFactory_getInstance();
  Kotlin.defineModule('kotlin-css', _);
  return _;
}));

//# sourceMappingURL=kotlin-css.js.map
