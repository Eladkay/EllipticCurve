(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-css'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-css'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'EllipticCurve'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'EllipticCurve'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'EllipticCurve'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'EllipticCurve'.");
    }root.EllipticCurve = factory(typeof EllipticCurve === 'undefined' ? {} : EllipticCurve, kotlin, this['kotlin-css']);
  }
}(this, function (_, Kotlin, $module$kotlin_css) {
  'use strict';
  var throwUPAE = Kotlin.throwUPAE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  var L1 = Kotlin.Long.ONE;
  var L_1 = Kotlin.Long.NEG_ONE;
  var Unit = Kotlin.kotlin.Unit;
  var L0 = Kotlin.Long.ZERO;
  var equals = Kotlin.equals;
  var toString = Kotlin.toString;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Math_0 = Math;
  var until = Kotlin.kotlin.ranges.until_ebnic$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var Pair = Kotlin.kotlin.Pair;
  var Random = Kotlin.kotlin.random.Random;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var numberToLong = Kotlin.numberToLong;
  var numberToInt = Kotlin.numberToInt;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var removeAll = Kotlin.kotlin.collections.removeAll_uhyeqt$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var hashCode = Kotlin.hashCode;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var numberToDouble = Kotlin.numberToDouble;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  FiniteEllipticCurve.prototype = Object.create(EllipticCurve.prototype);
  FiniteEllipticCurve.prototype.constructor = FiniteEllipticCurve;
  var panel;
  function get_panel() {
    if (panel == null)
      return throwUPAE('panel');
    return panel;
  }
  function set_panel(panel_0) {
    panel = panel_0;
  }
  var aSlider;
  function get_aSlider() {
    if (aSlider == null)
      return throwUPAE('aSlider');
    return aSlider;
  }
  function set_aSlider(aSlider_0) {
    aSlider = aSlider_0;
  }
  var bSlider;
  function get_bSlider() {
    if (bSlider == null)
      return throwUPAE('bSlider');
    return bSlider;
  }
  function set_bSlider(bSlider_0) {
    bSlider = bSlider_0;
  }
  function main$lambda$lambda(it) {
    redrawCurve(Kotlin.Long.fromNumber(get_aSlider().valueAsNumber), Kotlin.Long.fromNumber(get_bSlider().valueAsNumber));
    return Unit;
  }
  function main$lambda$lambda_0(it) {
    redrawCurve(Kotlin.Long.fromNumber(get_aSlider().valueAsNumber), Kotlin.Long.fromNumber(get_bSlider().valueAsNumber));
    return Unit;
  }
  function main$lambda(closure$body) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      var canvas = Kotlin.isType(tmp$ = document.createElement('CANVAS'), HTMLCanvasElement) ? tmp$ : throwCCE();
      canvas.setAttribute('id', 'curveframejs');
      canvas.height = (window.screen.height * 5 | 0) / 6 | 0;
      canvas.width = window.screen.width;
      closure$body.appendChild(canvas);
      var curve = new EllipticCurve(L1, L_1, EllipticCurve$Companion_getInstance().REALS);
      set_panel(new CurvePanelJs(curve, new Vec2i(closure$body.clientHeight, closure$body.clientWidth)));
      set_aSlider(Kotlin.isType(tmp$_0 = document.createElement('INPUT'), HTMLInputElement) ? tmp$_0 : throwCCE());
      get_aSlider().setAttribute('id', 'aslider');
      get_aSlider().setAttribute('type', 'range');
      get_aSlider().height = 40;
      get_aSlider().width = 200;
      get_aSlider().style.top = (window.screen.height / 6 | 0).toString() + 'px';
      get_aSlider().oninput = main$lambda$lambda;
      closure$body.appendChild(get_aSlider());
      set_bSlider(Kotlin.isType(tmp$_1 = document.createElement('INPUT'), HTMLInputElement) ? tmp$_1 : throwCCE());
      get_bSlider().setAttribute('id', 'bslider');
      get_bSlider().setAttribute('type', 'range');
      get_bSlider().height = 40;
      get_bSlider().width = 200;
      get_bSlider().style.top = (window.screen.height / 6 | 0).toString() + 'px';
      get_bSlider().style.left = ((window.screen.width * 5 | 0) / 6 | 0).toString() + 'px';
      get_bSlider().oninput = main$lambda$lambda_0;
      closure$body.appendChild(get_bSlider());
      println(document.getElementsByTagName('INPUT').length);
      return Unit;
    };
  }
  function main() {
    var tmp$;
    println(new Date());
    var body = Kotlin.isType(tmp$ = document.getElementsByTagName('BODY')[0], HTMLBodyElement) ? tmp$ : throwCCE();
    body.onload = main$lambda(body);
  }
  function redrawCurve(a, b) {
    var newCurve = new EllipticCurve(a, b, EllipticCurve$Companion_getInstance().REALS);
    get_panel().curve = newCurve;
    get_panel().redraw();
  }
  function EllipticCurve(aValue, bValue, field) {
    EllipticCurve$Companion_getInstance();
    this.aValue = aValue;
    this.bValue = bValue;
    this.field = field;
    if (this.determinant() === 0.0)
      throw IllegalArgumentException_init('Invalid curve!');
    this.helper_gf9we5$_0 = lazy(EllipticCurve$helper$lambda(this));
  }
  EllipticCurve.prototype.determinant = function () {
    var $receiver = this.aValue.toNumber();
    var tmp$ = 4 * Math_0.pow($receiver, 3.0);
    var $receiver_0 = this.bValue.toNumber();
    return -16 * (tmp$ + 27 * Math_0.pow($receiver_0, 2.0));
  };
  EllipticCurve.prototype.toString = function () {
    var tmp$;
    if (!equals(this.aValue, L0)) {
      tmp$ = !equals(this.bValue, L0) ? 'y\xB2=x\xB3 + ' + toString(this.aValue) + 'x + ' + toString(this.bValue) : 'y\xB2=x\xB3 + ' + toString(this.aValue) + 'x';
    } else {
      if (!equals(this.bValue, L0))
        tmp$ = 'y\xB2=x\xB3 + ' + toString(this.bValue);
      else
        throw IllegalStateException_init();
    }
    return tmp$;
  };
  EllipticCurve.prototype.isPointOnCurve_8lxup4$ = function (p) {
    return p.y * p.y === p.x * p.x * p.x + this.aValue.toNumber() * p.x + this.bValue.toNumber();
  };
  EllipticCurve.prototype.difference_lu1900$ = function (x, y) {
    return y * y - x * x * x - this.aValue.toNumber() * x - this.bValue.toNumber();
  };
  Object.defineProperty(EllipticCurve.prototype, 'helper', {
    configurable: true,
    get: function () {
      return this.helper_gf9we5$_0.value;
    }
  });
  EllipticCurve.prototype.contains_8lxup4$ = function (vec2d) {
    return this.isPointOnCurve_8lxup4$(vec2d);
  };
  function EllipticCurve$Companion() {
    EllipticCurve$Companion_instance = this;
    this.REALS = 'reals';
  }
  EllipticCurve$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EllipticCurve$Companion_instance = null;
  function EllipticCurve$Companion_getInstance() {
    if (EllipticCurve$Companion_instance === null) {
      new EllipticCurve$Companion();
    }return EllipticCurve$Companion_instance;
  }
  function EllipticCurve$helper$lambda(this$EllipticCurve) {
    return function () {
      return new EllipticCurveHelper(this$EllipticCurve);
    };
  }
  EllipticCurve.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EllipticCurve',
    interfaces: []
  };
  function EllipticCurveHelper(curve) {
    EllipticCurveHelper$Companion_getInstance();
    this.curve_0 = curve;
    this.inversionTable_x8hlk2$_0 = lazy(EllipticCurveHelper$inversionTable$lambda(this));
    this.additionTable_32wydz$_0 = lazy(EllipticCurveHelper$additionTable$lambda(this));
    this.rand = Random.Default;
    this.generator_z5l6ag$_0 = Vec2d$Companion_getInstance().PT_AT_INF;
    this.agreedUponPt_nn3hq5$_0 = Vec2d$Companion_getInstance().PT_AT_INF;
    this.asciiGeneratorTable_4pb033$_0 = emptyList();
  }
  EllipticCurveHelper.prototype.add_e6idp0$ = function (a, b) {
    var tmp$;
    if (a.isInfinite())
      return b;
    if (b.isInfinite())
      return a;
    if (Kotlin.isType(this.curve_0, FiniteEllipticCurve))
      return this.addFinite_0(a, b);
    var x1 = a.component1()
    , y1 = a.component2();
    var x2 = b.component1()
    , y2 = b.component2();
    if (a != null ? a.equals(b) : null)
      if (y1 === 0.0)
        return Vec2d$Companion_getInstance().PT_AT_INF;
      else
        tmp$ = (3 * x1 * x1 + this.curve_0.aValue.toNumber()) / (2 * y1);
    else if (x1 === x2)
      return Vec2d$Companion_getInstance().PT_AT_INF;
    else
      tmp$ = (y1 - y2) / (x1 - x2);
    var lambda = tmp$;
    var x3 = lambda * lambda - x1 - x2;
    var y3 = lambda * (x2 - x3) - y2;
    return new Vec2d(x3, y3);
  };
  EllipticCurveHelper.prototype.inv_0 = function (int) {
    var tmp$;
    if (!Kotlin.isType(this.curve_0, FiniteEllipticCurve))
      return 1.0 / int.toNumber();
    tmp$ = until(1, this.curve_0.modulus).iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (equals(int.multiply(i).modulo(this.curve_0.modulus), L1))
        return i.toNumber();
    }
    return -1.0;
  };
  EllipticCurveHelper.prototype.generateInversionTable_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (!Kotlin.isType(this.curve_0, FiniteEllipticCurve))
      throw UnsupportedOperationException_init('This function is only defined for finite elliptic curves!');
    var ret = mutableMapOf([to(Vec2d$Companion_getInstance().PT_AT_INF, Vec2d$Companion_getInstance().PT_AT_INF)]);
    tmp$ = this.curve_0.curvePoints.iterator();
    while (tmp$.hasNext()) {
      var p1 = tmp$.next();
      tmp$_0 = this.curve_0.curvePoints.iterator();
      while (tmp$_0.hasNext()) {
        var p2 = tmp$_0.next();
        if ((tmp$_1 = this.add_e6idp0$(p1, p2)) != null ? tmp$_1.equals(Vec2d$Companion_getInstance().PT_AT_INF) : null) {
          ret.put_xwzc9p$(p1, p2);
        }}
    }
    return ret;
  };
  Object.defineProperty(EllipticCurveHelper.prototype, 'inversionTable_0', {
    configurable: true,
    get: function () {
      return this.inversionTable_x8hlk2$_0.value;
    }
  });
  EllipticCurveHelper.prototype.invPoint_8lxup4$ = function (vec2d) {
    if (!Kotlin.isType(this.curve_0, FiniteEllipticCurve))
      return vec2d.invertY();
    return ensureNotNull(this.inversionTable_0.get_11rb$(vec2d));
  };
  EllipticCurveHelper.prototype.addFinite_0 = function (a, b) {
    var tmp$, tmp$_0;
    var x1 = a.component1()
    , y1 = a.component2();
    var x2 = b.component1()
    , y2 = b.component2();
    Kotlin.isType(tmp$ = this.curve_0, FiniteEllipticCurve) ? tmp$ : throwCCE();
    if (equals(this.curve_0.field, 'z2') || equals(this.curve_0.field, 'z3'))
      throw IllegalArgumentException_init("elliptic curves over Z2 or Z3 don't quite work the same");
    if (a.isInfinite())
      return b;
    if (b.isInfinite())
      return a;
    var card = this.curve_0.modulus;
    x1 %= card;
    y1 %= card;
    x2 %= card;
    y2 %= card;
    if (a.x === b.x) {
      if (a.y !== b.y || equals(this.mod_x348n9$(2 * a.y, card), L0))
        return Vec2d$Companion_getInstance().PT_AT_INF;
      else
        tmp$_0 = this.mod_x348n9$((3 * a.x * a.x + this.curve_0.aValue.toNumber()) * this.inv_0(this.mod_x348n9$(2 * a.y, card)), card);
    } else
      tmp$_0 = this.mod_x348n9$((a.y - b.y) * this.inv_0(this.mod_x348n9$(a.x - b.x, card)), card);
    var s = tmp$_0;
    var x3 = this.mod_x348n9$(s.multiply(s).toNumber() - a.x - b.x, card);
    var y3 = this.mod_x348n9$(s.toNumber() * a.x - s.multiply(x3).toNumber() - a.y, card);
    return Vec2d_init(x3, y3);
  };
  EllipticCurveHelper.prototype.subgroup_8lxup4$ = function (p) {
    if (!Kotlin.isType(this.curve_0, FiniteEllipticCurve))
      throw UnsupportedOperationException_init('This function is only defined for finite elliptic curves!');
    var ret = mutableListOf([p]);
    var pt = p;
    while (!(pt != null ? pt.equals(Vec2d$Companion_getInstance().PT_AT_INF) : null)) {
      pt = this.add_e6idp0$(pt, p);
      ret.add_11rb$(pt);
    }
    return ret;
  };
  Object.defineProperty(EllipticCurveHelper.prototype, 'additionTable_0', {
    configurable: true,
    get: function () {
      return this.additionTable_32wydz$_0.value;
    }
  });
  EllipticCurveHelper.prototype.generateAdditionTable_0 = function () {
    var tmp$, tmp$_0;
    if (!Kotlin.isType(this.curve_0, FiniteEllipticCurve))
      throw UnsupportedOperationException_init('This function is only defined for finite elliptic curves!');
    var ret = LinkedHashMap_init();
    var pts = this.curve_0.curvePoints;
    tmp$ = pts.iterator();
    while (tmp$.hasNext()) {
      var x = tmp$.next();
      tmp$_0 = pts.iterator();
      while (tmp$_0.hasNext()) {
        var y = tmp$_0.next();
        var key = to(x, y);
        var value = this.add_e6idp0$(x, y);
        ret.put_xwzc9p$(key, value);
        var key_0 = to(Vec2d$Companion_getInstance().PT_AT_INF, y);
        ret.put_xwzc9p$(key_0, y);
        var key_1 = to(x, Vec2d$Companion_getInstance().PT_AT_INF);
        ret.put_xwzc9p$(key_1, x);
      }
    }
    return ret;
  };
  function EllipticCurveHelper$generateAdditionTableFormatting$format(it) {
    return it.isInfinite() ? '\u221E' : it.toString();
  }
  EllipticCurveHelper.prototype.generateAdditionTableFormatting = function () {
    var tmp$;
    this.additionTable_0;
    var format = EllipticCurveHelper$generateAdditionTableFormatting$format;
    var $receiver = this.additionTable_0;
    var destination = LinkedHashMap_init_0(mapCapacity($receiver.size));
    var tmp$_0;
    tmp$_0 = $receiver.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      destination.put_xwzc9p$(element.key, format(element.value));
    }
    var destination_0 = LinkedHashMap_init_0(mapCapacity(destination.size));
    var tmp$_1;
    tmp$_1 = destination.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      destination_0.put_xwzc9p$(to(format(element_0.key.first), format(element_0.key.second)), element_0.value);
    }
    var strings = destination_0;
    var $receiver_0 = (Kotlin.isType(tmp$ = this.curve_0, FiniteEllipticCurve) ? tmp$ : throwCCE()).curvePoints;
    var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination_1.add_11rb$(item.toString());
    }
    var pts = destination_1;
    var $receiver_1 = StringBuilder_init();
    var tmp$_3, tmp$_4, tmp$_5;
    $receiver_1.append_pdl1vj$('+');
    tmp$_3 = pts.iterator();
    while (tmp$_3.hasNext()) {
      var pt = tmp$_3.next();
      $receiver_1.append_pdl1vj$('\t' + pt);
    }
    $receiver_1.append_pdl1vj$('\n');
    tmp$_4 = pts.iterator();
    while (tmp$_4.hasNext()) {
      var pt1 = tmp$_4.next();
      $receiver_1.append_pdl1vj$(pt1 + '\t');
      tmp$_5 = pts.iterator();
      while (tmp$_5.hasNext()) {
        var pt2 = tmp$_5.next();
        var str = equals(pt1, Vec2d$Companion_getInstance().PT_AT_INF.toString()) ? pt2 : equals(pt2, Vec2d$Companion_getInstance().PT_AT_INF.toString()) ? pt1 : strings.get_11rb$(to(pt1, pt2));
        $receiver_1.append_pdl1vj$(toString(equals(str, Vec2d$Companion_getInstance().PT_AT_INF.toString()) ? '\u221E' : str) + '\t');
      }
      $receiver_1.append_pdl1vj$('\n');
    }
    return $receiver_1.toString();
  };
  EllipticCurveHelper.prototype.order_8lxup4$ = function (vec2d) {
    if (vec2d != null ? vec2d.equals(Vec2d$Companion_getInstance().PT_AT_INF) : null)
      return 0;
    if (!Kotlin.isType(this.curve_0, FiniteEllipticCurve))
      throw UnsupportedOperationException_init('This function is only defined for finite elliptic curves!');
    var order = 1;
    var vector = vec2d;
    while (!(vector != null ? vector.equals(Vec2d$Companion_getInstance().PT_AT_INF) : null)) {
      vector = this.add_e6idp0$(vector, vec2d);
      order = order + 1 | 0;
      if (order > this.curve_0.order())
        return -1;
    }
    return order;
  };
  EllipticCurveHelper.prototype.mod_x348n9$ = function (x, r) {
    return Kotlin.Long.fromNumber((x % r.toNumber() + r.toNumber()) % r.toNumber());
  };
  EllipticCurveHelper.prototype.multiply_m7wvd6$ = function (p, d) {
    var tmp$;
    if (d < 0)
      tmp$ = this.multiply_m7wvd6$(p.invertY(), -d | 0);
    else if (d === 0)
      tmp$ = Vec2d$Companion_getInstance().PT_AT_INF;
    else if (d === 1)
      tmp$ = p;
    else if (d % 2 === 1)
      tmp$ = this.add_e6idp0$(p, this.multiply_m7wvd6$(p, d - 1 | 0));
    else
      tmp$ = this.multiply_m7wvd6$(this.add_e6idp0$(p, p), d / 2 | 0);
    return tmp$;
  };
  EllipticCurveHelper.prototype.rhs_14dthe$ = function (y) {
    return Kotlin.isType(this.curve_0, FiniteEllipticCurve) ? y * y % this.curve_0.modulus.toNumber() : y * y;
  };
  EllipticCurveHelper.prototype.lhs_14dthe$ = function (x) {
    var tmp$, tmp$_0, tmp$_1;
    return x * x * x + this.curve_0.aValue.toNumber() * x + this.curve_0.bValue.modulo((tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = this.curve_0, FiniteEllipticCurve) ? tmp$ : null) != null ? tmp$_0.modulus : null) != null ? tmp$_1 : L1).toNumber();
  };
  function EllipticCurveHelper$Companion() {
    EllipticCurveHelper$Companion_instance = this;
    this.asciiTable = listOf([toBoxedChar(0), toBoxedChar(1), toBoxedChar(2), toBoxedChar(3), toBoxedChar(4), toBoxedChar(5), toBoxedChar(6), toBoxedChar(7), toBoxedChar(8), toBoxedChar(9), toBoxedChar(10), toBoxedChar(11), toBoxedChar(12), toBoxedChar(13), toBoxedChar(14), toBoxedChar(15), toBoxedChar(16), toBoxedChar(17), toBoxedChar(18), toBoxedChar(19), toBoxedChar(20), toBoxedChar(21), toBoxedChar(22), toBoxedChar(23), toBoxedChar(24), toBoxedChar(25), toBoxedChar(26), toBoxedChar(27), toBoxedChar(28), toBoxedChar(29), toBoxedChar(30), toBoxedChar(31), toBoxedChar(32), toBoxedChar(33), toBoxedChar(34), toBoxedChar(35), toBoxedChar(36), toBoxedChar(37), toBoxedChar(38), toBoxedChar(39), toBoxedChar(40), toBoxedChar(41), toBoxedChar(42), toBoxedChar(43), toBoxedChar(44), toBoxedChar(45), toBoxedChar(46), toBoxedChar(47), toBoxedChar(48), toBoxedChar(49), toBoxedChar(50), toBoxedChar(51), toBoxedChar(52), toBoxedChar(53), toBoxedChar(54), toBoxedChar(55), toBoxedChar(56), toBoxedChar(57), toBoxedChar(58), toBoxedChar(59), toBoxedChar(60), toBoxedChar(61), toBoxedChar(62), toBoxedChar(63), toBoxedChar(64), toBoxedChar(65), toBoxedChar(66), toBoxedChar(67), toBoxedChar(68), toBoxedChar(69), toBoxedChar(70), toBoxedChar(71), toBoxedChar(72), toBoxedChar(73), toBoxedChar(74), toBoxedChar(75), toBoxedChar(76), toBoxedChar(77), toBoxedChar(78), toBoxedChar(79), toBoxedChar(80), toBoxedChar(81), toBoxedChar(82), toBoxedChar(83), toBoxedChar(84), toBoxedChar(85), toBoxedChar(86), toBoxedChar(87), toBoxedChar(88), toBoxedChar(89), toBoxedChar(90), toBoxedChar(91), toBoxedChar(92), toBoxedChar(93), toBoxedChar(94), toBoxedChar(95), toBoxedChar(96), toBoxedChar(97), toBoxedChar(98), toBoxedChar(99), toBoxedChar(100), toBoxedChar(101), toBoxedChar(102), toBoxedChar(103), toBoxedChar(104), toBoxedChar(105), toBoxedChar(106), toBoxedChar(107), toBoxedChar(108), toBoxedChar(109), toBoxedChar(110), toBoxedChar(111), toBoxedChar(112), toBoxedChar(113), toBoxedChar(114), toBoxedChar(115), toBoxedChar(116), toBoxedChar(117), toBoxedChar(118), toBoxedChar(119), toBoxedChar(120), toBoxedChar(121), toBoxedChar(122), toBoxedChar(123), toBoxedChar(124), toBoxedChar(125), toBoxedChar(126), toBoxedChar(127)]);
  }
  EllipticCurveHelper$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EllipticCurveHelper$Companion_instance = null;
  function EllipticCurveHelper$Companion_getInstance() {
    if (EllipticCurveHelper$Companion_instance === null) {
      new EllipticCurveHelper$Companion();
    }return EllipticCurveHelper$Companion_instance;
  }
  Object.defineProperty(EllipticCurveHelper.prototype, 'generator', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      if ((tmp$ = this.generator_z5l6ag$_0) != null ? tmp$.equals(Vec2d$Companion_getInstance().PT_AT_INF) : null) {
        if (Kotlin.isType(this.curve_0, FiniteEllipticCurve))
          tmp$_0 = toList(this.curve_0.curvePoints).get_za3lpa$(this.rand.nextInt_za3lpa$(this.curve_0.order()));
        else {
          var x = this.rand.nextInt_za3lpa$(35);
          var tmp$_1 = x + 1 | 0;
          var x_0 = this.lhs_14dthe$(x * 1.0);
          tmp$_0 = Vec2d_init(tmp$_1, Math_0.sqrt(x_0));
        }
        this.generator_z5l6ag$_0 = tmp$_0;
      }return this.generator_z5l6ag$_0;
    },
    set: function (generator) {
      this.generator_z5l6ag$_0 = generator;
    }
  });
  Object.defineProperty(EllipticCurveHelper.prototype, 'agreedUponPt', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      if ((tmp$ = this.agreedUponPt_nn3hq5$_0) != null ? tmp$.equals(Vec2d$Companion_getInstance().PT_AT_INF) : null) {
        if (Kotlin.isType(this.curve_0, FiniteEllipticCurve))
          tmp$_0 = toList(this.curve_0.curvePoints).get_za3lpa$(this.rand.nextInt_za3lpa$(this.curve_0.order()));
        else {
          var x = this.rand.nextInt_za3lpa$(35);
          var tmp$_1 = x + 1 | 0;
          var x_0 = this.lhs_14dthe$(x * 1.0);
          tmp$_0 = Vec2d_init(tmp$_1, Math_0.sqrt(x_0));
        }
        this.agreedUponPt_nn3hq5$_0 = tmp$_0;
      }return this.agreedUponPt_nn3hq5$_0;
    },
    set: function (agreedUponPt) {
      this.agreedUponPt_nn3hq5$_0 = agreedUponPt;
    }
  });
  Object.defineProperty(EllipticCurveHelper.prototype, 'asciiGeneratorTable', {
    configurable: true,
    get: function () {
      while (toSet(this.asciiGeneratorTable_4pb033$_0).size !== 128) {
        this.generator = Vec2d$Companion_getInstance().PT_AT_INF;
        var list = ArrayList_init_0();
        for (var i = 1; i <= 128; i++)
          list.add_11rb$(this.multiply_m7wvd6$(this.generator, i).truncate_za3lpa$(2));
        this.asciiGeneratorTable_4pb033$_0 = list;
      }
      return this.asciiGeneratorTable_4pb033$_0;
    },
    set: function (asciiGeneratorTable) {
      this.asciiGeneratorTable_4pb033$_0 = asciiGeneratorTable;
    }
  });
  EllipticCurveHelper.prototype.getPointOnCurveFromString_61zpoe$ = function (string) {
    var tmp$;
    var list = ArrayList_init_0();
    tmp$ = iterator(string);
    while (tmp$.hasNext()) {
      var ch = unboxChar(tmp$.next());
      if (!EllipticCurveHelper$Companion_getInstance().asciiTable.contains_11rb$(toBoxedChar(ch)))
        throw UnsupportedOperationException_init("That's not an ASCII string!");
      list.add_11rb$(this.asciiGeneratorTable.get_za3lpa$(EllipticCurveHelper$Companion_getInstance().asciiTable.indexOf_11rb$(toBoxedChar(ch))));
    }
    return list;
  };
  EllipticCurveHelper.prototype.getStringFromPointOnCurve_n96pbh$ = function (vec2d) {
    var $receiver = StringBuilder_init();
    var tmp$;
    var destination = ArrayList_init(collectionSizeOrDefault(vec2d, 10));
    var tmp$_0;
    tmp$_0 = vec2d.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.round_za3lpa$(2));
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var vec = tmp$.next();
      if (this.asciiGeneratorTable.contains_11rb$(vec))
        $receiver.append_s8itvh$(unboxChar(EllipticCurveHelper$Companion_getInstance().asciiTable.get_za3lpa$(this.asciiGeneratorTable.indexOf_11rb$(vec))));
    }
    return $receiver.toString();
  };
  EllipticCurveHelper.prototype.createPublicKey_ahsjxe$ = function (privateKey, agreedUponPt) {
    if (agreedUponPt === void 0)
      agreedUponPt = this.agreedUponPt;
    return this.multiply_m7wvd6$(agreedUponPt, privateKey);
  };
  EllipticCurveHelper.prototype.encrypt_g0fe3s$ = function (message, bobPublicKey, agreedUponPt) {
    if (agreedUponPt === void 0)
      agreedUponPt = this.agreedUponPt;
    var k = Kotlin.isType(this.curve_0, FiniteEllipticCurve) ? this.rand.nextInt_za3lpa$(this.curve_0.modulus.toInt()) : this.rand.nextInt_za3lpa$(100);
    return this.encrypt_2rt1o6$(message, bobPublicKey, agreedUponPt, k);
  };
  EllipticCurveHelper.prototype.encrypt_2rt1o6$ = function (message, bobPublicKey, agreedUponPt, k) {
    if (agreedUponPt === void 0)
      agreedUponPt = this.agreedUponPt;
    return new Pair(this.multiply_m7wvd6$(agreedUponPt, k), this.add_e6idp0$(message, this.multiply_m7wvd6$(bobPublicKey, k)));
  };
  EllipticCurveHelper.prototype.decrypt_dpgjjp$ = function (encryptedMessage, bobPrivateKey) {
    return this.add_e6idp0$(encryptedMessage.second, this.invPoint_8lxup4$(this.multiply_m7wvd6$(encryptedMessage.first, bobPrivateKey)));
  };
  function EllipticCurveHelper$inversionTable$lambda(this$EllipticCurveHelper) {
    return function () {
      return this$EllipticCurveHelper.generateInversionTable_0();
    };
  }
  function EllipticCurveHelper$additionTable$lambda(this$EllipticCurveHelper) {
    return function () {
      return this$EllipticCurveHelper.generateAdditionTable_0();
    };
  }
  EllipticCurveHelper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EllipticCurveHelper',
    interfaces: []
  };
  function FiniteEllipticCurve(aValue, bValue, modulus) {
    FiniteEllipticCurve$Companion_getInstance();
    EllipticCurve.call(this, aValue.modulo(modulus), bValue.modulo(modulus), FiniteEllipticCurve$Companion_getInstance().zp_s8cxhz$(modulus));
    this.modulus = modulus;
    this.curvePoints = LinkedHashSet_init();
    var tmp$, tmp$_0;
    tmp$ = until(0, this.modulus).iterator();
    while (tmp$.hasNext()) {
      var x = tmp$.next();
      tmp$_0 = until(0, this.modulus).iterator();
      while (tmp$_0.hasNext()) {
        var y = tmp$_0.next();
        if (equals(y.multiply(y).modulo(this.modulus), this.helper.mod_x348n9$(x.multiply(x).multiply(x).add(aValue.multiply(x)).toNumber() + bValue.toNumber(), this.modulus))) {
          this.curvePoints.add_11rb$(Vec2d_init(x, y));
        }}
    }
    removeAll(this.curvePoints, FiniteEllipticCurve_init$lambda(this));
    this.curvePoints.add_11rb$(Vec2d$Companion_getInstance().PT_AT_INF);
  }
  FiniteEllipticCurve.prototype.order = function () {
    return this.curvePoints.size;
  };
  FiniteEllipticCurve.prototype.order_8lxup4$ = function (vec2d) {
    return this.helper.order_8lxup4$(vec2d);
  };
  FiniteEllipticCurve.prototype.determinant = function () {
    return EllipticCurve.prototype.determinant.call(this) % this.modulus.toNumber();
  };
  FiniteEllipticCurve.prototype.difference_lu1900$ = function (x, y) {
    return (y - x * x * x - this.aValue.toNumber() * x - this.bValue.toNumber()) % this.modulus.toNumber();
  };
  FiniteEllipticCurve.prototype.isPointOnCurve_8lxup4$ = function (p) {
    return this.curvePoints.contains_11rb$(p);
  };
  FiniteEllipticCurve.prototype.equals = function (other) {
    return this === other && Kotlin.isType(other, FiniteEllipticCurve) && equals(other.modulus, this.modulus);
  };
  FiniteEllipticCurve.prototype.hashCode = function () {
    return this.modulus.toInt() + (31 * this.aValue.toInt() | 0) + (31 * this.bValue.toInt() | 0) | 0;
  };
  FiniteEllipticCurve.prototype.toString = function () {
    return EllipticCurve.prototype.toString.call(this) + (' over ' + this.field);
  };
  function FiniteEllipticCurve$Companion() {
    FiniteEllipticCurve$Companion_instance = this;
  }
  FiniteEllipticCurve$Companion.prototype.zp_s8cxhz$ = function (p) {
    return 'z' + p.toString();
  };
  FiniteEllipticCurve$Companion.prototype.isPrime_3p81yu$ = function (n) {
    return this.isPrime_s8cxhz$(numberToLong(n));
  };
  FiniteEllipticCurve$Companion.prototype.isPrime_s8cxhz$ = function (n) {
    var tmp$ = n.toNumber() >= 2;
    if (tmp$) {
      var x = n.toNumber();
      var $receiver = new IntRange(2, numberToInt(Math_0.sqrt(x)));
      var none$result;
      none$break: do {
        var tmp$_0;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          none$result = true;
          break none$break;
        }tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (equals(n.modulo(Kotlin.Long.fromInt(element)), L0)) {
            none$result = false;
            break none$break;
          }}
        none$result = true;
      }
       while (false);
      tmp$ = none$result;
    }return tmp$;
  };
  FiniteEllipticCurve$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FiniteEllipticCurve$Companion_instance = null;
  function FiniteEllipticCurve$Companion_getInstance() {
    if (FiniteEllipticCurve$Companion_instance === null) {
      new FiniteEllipticCurve$Companion();
    }return FiniteEllipticCurve$Companion_instance;
  }
  function FiniteEllipticCurve_init$lambda(this$FiniteEllipticCurve) {
    return function (it) {
      return it.x >= this$FiniteEllipticCurve.modulus.toNumber() || it.y >= this$FiniteEllipticCurve.modulus.toNumber();
    };
  }
  FiniteEllipticCurve.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FiniteEllipticCurve',
    interfaces: [EllipticCurve]
  };
  function Vec2d(x, y) {
    Vec2d$Companion_getInstance();
    this.x = x;
    this.y = y;
  }
  function Vec2d$Companion() {
    Vec2d$Companion_instance = this;
    this.PT_AT_INF = new Vec2d(kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY, kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY);
    this.MATCHING_REGEX_0 = Regex_init('\\(((?:-)*\\d+(?:.\\d+)*),(?:\\s)*((?:-)*\\d+(?:.\\d+)*)\\)');
  }
  Vec2d$Companion.prototype.of_61zpoe$ = function (string) {
    var tmp$;
    if (!this.isValid_61zpoe$(trim(Kotlin.isCharSequence(tmp$ = string) ? tmp$ : throwCCE()).toString()))
      return null;
    var tmp$_0;
    var groups = ensureNotNull(this.MATCHING_REGEX_0.matchEntire_6bul2c$(trim(Kotlin.isCharSequence(tmp$_0 = string) ? tmp$_0 : throwCCE()).toString())).groups;
    return new Vec2d(toDouble(ensureNotNull(groups.get_za3lpa$(1)).value), toDouble(ensureNotNull(groups.get_za3lpa$(2)).value));
  };
  Vec2d$Companion.prototype.isValid_61zpoe$ = function (text) {
    return this.MATCHING_REGEX_0.matches_6bul2c$(text);
  };
  Vec2d$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vec2d$Companion_instance = null;
  function Vec2d$Companion_getInstance() {
    if (Vec2d$Companion_instance === null) {
      new Vec2d$Companion();
    }return Vec2d$Companion_instance;
  }
  Vec2d.prototype.invertY = function () {
    return new Vec2d(this.x, -this.y);
  };
  Vec2d.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
  Vec2d.prototype.component1 = function () {
    return this.x;
  };
  Vec2d.prototype.component2 = function () {
    return this.y;
  };
  Vec2d.prototype.map_7fnk9s$ = function (map) {
    return new Vec2d(map(this.x), map(this.y));
  };
  Vec2d.prototype.hashCode = function () {
    var result = hashCode(this.x);
    result = (31 * result | 0) + hashCode(this.y) | 0;
    return result;
  };
  Vec2d.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    Kotlin.isType(tmp$ = other, Vec2d) ? tmp$ : throwCCE();
    if (this.x !== other.x)
      return false;
    if (this.y !== other.y)
      return false;
    return true;
  };
  Vec2d.prototype.vec2i = function () {
    return new Vec2i(numberToInt(this.x), numberToInt(this.y));
  };
  function Vec2d$truncate$lambda(closure$pow10) {
    return function (it) {
      return numberToInt(it * closure$pow10) / closure$pow10;
    };
  }
  Vec2d.prototype.truncate_za3lpa$ = function (num) {
    var pow10 = Math_0.pow(10.0, num);
    return this.map_7fnk9s$(Vec2d$truncate$lambda(pow10));
  };
  function Vec2d$round$lambda(closure$pow10) {
    return function (it) {
      return round(it * closure$pow10) / closure$pow10;
    };
  }
  Vec2d.prototype.round_za3lpa$ = function (num) {
    var pow10 = Math_0.pow(10.0, num);
    return this.map_7fnk9s$(Vec2d$round$lambda(pow10));
  };
  Vec2d.prototype.isInfinite = function () {
    return this != null ? this.equals(Vec2d$Companion_getInstance().PT_AT_INF) : null;
  };
  Vec2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec2d',
    interfaces: []
  };
  function Vec2d_init(x, y, $this) {
    $this = $this || Object.create(Vec2d.prototype);
    Vec2d.call($this, numberToDouble(x), numberToDouble(y));
    return $this;
  }
  function Vec2i(x, y) {
    this.x = x;
    this.y = y;
  }
  Vec2i.prototype.times_za3lpa$ = function (int) {
    return new Vec2i(Kotlin.imul(this.x, int), Kotlin.imul(this.y, int));
  };
  Vec2i.prototype.times_za8dp2$ = function ($receiver, size) {
    return size.times_za3lpa$($receiver);
  };
  Vec2i.prototype.div_za3lpa$ = function (int) {
    return new Vec2i(numberToInt(this.x / int), numberToInt(this.y / int));
  };
  Vec2i.prototype.times_14dthe$ = function (int) {
    return new Vec2d(this.x * int, this.y * int);
  };
  Vec2i.prototype.times_43e9yq$ = function ($receiver, size) {
    return size.times_14dthe$($receiver);
  };
  Vec2i.prototype.div_14dthe$ = function (int) {
    return new Vec2d(this.x / int, this.y / int);
  };
  Vec2i.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
  Vec2i.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec2i',
    interfaces: []
  };
  Vec2i.prototype.component1 = function () {
    return this.x;
  };
  Vec2i.prototype.component2 = function () {
    return this.y;
  };
  Vec2i.prototype.copy_vux9f0$ = function (x, y) {
    return new Vec2i(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Vec2i.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Vec2i.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function CurveFrame() {
    CurveFrame$Companion_getInstance();
  }
  CurveFrame.prototype.serializeCurveFrame = function () {
    var scale = EllipticSimulator_getInstance().scale;
    var generator = this.curve.helper.generator;
    var agreedUponPt = this.curve.helper.agreedUponPt;
    var field = equals(this.curve.field, EllipticCurve$Companion_getInstance().REALS) ? 'R' : this.curve.field.substring(1);
    return this.curve.aValue.toString() + ';' + this.curve.bValue.toString() + ';' + field + ';' + scale + ';' + generator + ';' + agreedUponPt;
  };
  function CurveFrame$Companion() {
    CurveFrame$Companion_instance = this;
  }
  CurveFrame$Companion.prototype.deserializeCurveFrame_61zpoe$ = function (string) {
    var split_0 = split(string, [';']);
    var field = split_0.get_za3lpa$(2);
    EllipticSimulator_getInstance().scale = toDouble(split_0.get_za3lpa$(3));
    var generator = Vec2d$Companion_getInstance().of_61zpoe$(split_0.get_za3lpa$(4));
    var agreedUpon = Vec2d$Companion_getInstance().of_61zpoe$(split_0.get_za3lpa$(5));
    var curve = equals(field, 'R') ? new EllipticCurve(toLong(split_0.get_za3lpa$(0)), toLong(split_0.get_za3lpa$(1)), EllipticCurve$Companion_getInstance().REALS) : new FiniteEllipticCurve(toLong(split_0.get_za3lpa$(0)), toLong(split_0.get_za3lpa$(1)), toLong(split_0.get_za3lpa$(2)));
    curve.helper.generator = ensureNotNull(generator);
    curve.helper.agreedUponPt = ensureNotNull(agreedUpon);
    return curve;
  };
  CurveFrame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CurveFrame$Companion_instance = null;
  function CurveFrame$Companion_getInstance() {
    if (CurveFrame$Companion_instance === null) {
      new CurveFrame$Companion();
    }return CurveFrame$Companion_instance;
  }
  CurveFrame.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CurveFrame',
    interfaces: []
  };
  function CurvePanelJs(curve, frameSize) {
    this.curve_xekmjw$_0 = curve;
    this.frameSize_0 = frameSize;
    this.size_0 = 3;
    this.color_0 = Color.Companion.black;
    this.lineOfSymmetry_0 = false;
    var tmp$;
    this.ctx_0 = Kotlin.isType(tmp$ = document.getElementById('curveframejs').getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    this.draw();
  }
  Object.defineProperty(CurvePanelJs.prototype, 'curve', {
    get: function () {
      return this.curve_xekmjw$_0;
    },
    set: function (curve) {
      this.curve_xekmjw$_0 = curve;
    }
  });
  CurvePanelJs.prototype.draw = function () {
    EllipticSimulator_getInstance().drawAxis_61icc3$(this);
    EllipticSimulator_getInstance().drawCurveApprox_hacucn$(this.curve, this, 0.035 + (EllipticSimulator_getInstance().scale - 1) / 32.0, false);
  };
  CurvePanelJs.prototype.drawPoint_8lxuoz$ = function (vec2i) {
    this.drawPoint_bjnf1r$(vec2i, this.size_0);
  };
  CurvePanelJs.prototype.drawPoint_bjnf1r$ = function (vec2i, size) {
    var oldStyle = this.ctx_0.fillStyle;
    this.ctx_0.fillStyle = '#' + this.color_0.value;
    this.ctx_0.fillRect(vec2i.x - size / 2.0, vec2i.y - size / 2.0, size, size);
    this.ctx_0.fillStyle = oldStyle;
    this.ctx_0.stroke();
  };
  CurvePanelJs.prototype.drawLine_zdstx0$ = function (a, b) {
    this.drawLine_3tl4q7$(a, b, this.size_0);
  };
  CurvePanelJs.prototype.drawLine_3tl4q7$ = function (a, b, size) {
    this.ctx_0.moveTo(a.x, a.y);
    this.ctx_0.lineTo(b.x, b.y);
    this.ctx_0.stroke();
  };
  CurvePanelJs.prototype.getFrameSize = function () {
    return this.frameSize_0;
  };
  CurvePanelJs.prototype.drawText_puwimp$ = function (vec2i, string) {
    var oldFont = this.ctx_0.font;
    this.ctx_0.font = this.size_0.toString() + 'px Arial';
    this.ctx_0.fillText(string, vec2i.x, vec2i.y);
    this.ctx_0.font = oldFont;
  };
  CurvePanelJs.prototype.changeColor_uu3z0h$ = function (color) {
    this.color_0 = color;
  };
  CurvePanelJs.prototype.changePointSize_za3lpa$ = function (int) {
    this.size_0 = int;
  };
  CurvePanelJs.prototype.redraw = function () {
    this.clear();
    this.draw();
  };
  CurvePanelJs.prototype.clear = function () {
    this.color_0 = Color.Companion.black;
    this.size_0 = 3;
    this.ctx_0.clearRect(0.0, 0.0, this.frameSize_0.x, this.frameSize_0.y);
  };
  CurvePanelJs.prototype.addPointLines_8lxuoz$ = function (vec2i) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  CurvePanelJs.prototype.drawPointLineText_puwimp$ = function (vec2i, string) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  CurvePanelJs.prototype.clearPointLines = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  CurvePanelJs.prototype.shouldShowLineOfSymmetry_6taknv$ = function (boolean) {
    this.lineOfSymmetry_0 = boolean;
  };
  CurvePanelJs.prototype.drawLineOfSymmetry_zdstx0$ = function (a, b) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  CurvePanelJs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CurvePanelJs',
    interfaces: [CurveFrame]
  };
  function EllipticSimulator() {
    EllipticSimulator_instance = this;
    this.X_OFFSET_0 = -500;
    this.scale = 1.0;
  }
  Object.defineProperty(EllipticSimulator.prototype, 'defaultYScale_0', {
    configurable: true,
    get: function () {
      return 15 / this.scale;
    }
  });
  Object.defineProperty(EllipticSimulator.prototype, 'defaultXScale_0', {
    configurable: true,
    get: function () {
      return 200 / this.scale;
    }
  });
  EllipticSimulator.prototype.drawFiniteCurve_fpf07q$ = function (ellipticCurve, frame, drawText) {
    var tmp$;
    frame.changePointSize_za3lpa$(10);
    tmp$ = ellipticCurve.curvePoints.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var x = tmp$_0.component1()
      , y = tmp$_0.component2();
      frame.drawPoint_8lxuoz$(new Vec2i(this.demodifyX_ab7lzj$(x, frame), this.demodifyY_ab7lzj$(y, frame)));
      if (drawText)
        frame.drawText_puwimp$(new Vec2i(this.demodifyX_ab7lzj$(x, frame), this.demodifyY_ab7lzj$(y, frame)), '(' + x + ', ' + y + ')');
    }
    frame.redraw();
    frame.changePointSize_za3lpa$(3);
  };
  EllipticSimulator.prototype.getMaxBoundsOfFrame_2mzq29$ = function (frame, xScale, yScale) {
    if (xScale === void 0)
      xScale = this.defaultXScale_0;
    if (yScale === void 0)
      yScale = this.defaultYScale_0;
    var tmp$;
    var tmp$_0 = frame.getFrameSize();
    var x = tmp$_0.component1()
    , y = tmp$_0.component2();
    return new Vec2d(this.modifyX_7hclrf$(x, frame, xScale), Kotlin.isType(frame.curve, FiniteEllipticCurve) ? (Kotlin.isType(tmp$ = frame.curve, FiniteEllipticCurve) ? tmp$ : throwCCE()).modulus.unaryMinus().toNumber() * 1.0 : this.modifyY_7hclrf$(y, frame, yScale));
  };
  EllipticSimulator.prototype.getMinBoundsOfFrame_2mzq29$ = function (frame, xScale, yScale) {
    if (xScale === void 0)
      xScale = this.defaultXScale_0;
    if (yScale === void 0)
      yScale = this.defaultYScale_0;
    var tmp$ = to(0, 0);
    var x = tmp$.component1()
    , y = tmp$.component2();
    return new Vec2d(this.modifyX_7hclrf$(x, frame, xScale), this.modifyY_7hclrf$(y, frame, yScale));
  };
  EllipticSimulator.prototype.drawCurveApprox_hacucn$ = function (ellipticCurve, frame, errorTerm, drawText, xScale, yScale) {
    if (xScale === void 0)
      xScale = this.defaultXScale_0;
    if (yScale === void 0)
      yScale = this.defaultYScale_0;
    var tmp$, tmp$_0;
    if (Kotlin.isType(ellipticCurve, FiniteEllipticCurve))
      throw IllegalArgumentException_init('discrete curve');
    frame.changePointSize_za3lpa$(5);
    tmp$ = frame.getFrameSize().x;
    for (var x = 0; x <= tmp$; x++) {
      tmp$_0 = frame.getFrameSize().y;
      for (var y = 0; y <= tmp$_0; y++) {
        var xModified = this.modifyX_7hclrf$(x, frame, xScale);
        var yModified = this.modifyY_7hclrf$(y, frame, yScale);
        if (yModified < 0)
          continue;
        var condition = ellipticCurve.isPointOnCurve_8lxup4$(new Vec2d(xModified, yModified));
        var $receiver = ellipticCurve.difference_lu1900$(xModified + errorTerm, yModified + errorTerm);
        var s1 = Math_0.sign($receiver);
        var $receiver_0 = ellipticCurve.difference_lu1900$(xModified + errorTerm, yModified - errorTerm);
        var s2 = Math_0.sign($receiver_0);
        var $receiver_1 = ellipticCurve.difference_lu1900$(xModified - errorTerm, yModified + errorTerm);
        var s3 = Math_0.sign($receiver_1);
        var $receiver_2 = ellipticCurve.difference_lu1900$(xModified - errorTerm, yModified - errorTerm);
        var s4 = Math_0.sign($receiver_2);
        var tmp$_1 = !condition;
        if (tmp$_1) {
          var x_0 = s1 + s2 + s3 + s4;
          tmp$_1 = Math_0.abs(x_0) !== 4.0;
        }if (tmp$_1)
          condition = true;
        if (condition) {
          frame.drawPoint_8lxuoz$(new Vec2i(x, y));
          frame.drawPoint_8lxuoz$(new Vec2i(x, this.demodifyY_ab7lzj$(-yModified, frame, yScale)));
          if (drawText)
            frame.drawText_puwimp$(new Vec2i(x, y), '(' + xModified + ', ' + yModified + ')');
          if (drawText)
            frame.drawText_puwimp$(new Vec2i(x, this.demodifyY_ab7lzj$(-yModified, frame, yScale)), '(' + xModified + ', ' + -yModified + ')');
        }}
    }
    frame.changePointSize_za3lpa$(3);
  };
  EllipticSimulator.prototype.demodifyY_ab7lzj$ = function (y, frame, yScale) {
    if (yScale === void 0)
      yScale = this.defaultYScale_0;
    var tmp$;
    if (!Kotlin.isType(frame.curve, FiniteEllipticCurve))
      return numberToInt(-yScale * y + (frame.getFrameSize().y / 2 | 0));
    var modulus = (Kotlin.isType(tmp$ = frame.curve, FiniteEllipticCurve) ? tmp$ : throwCCE()).modulus;
    return numberToInt(y * (100 - frame.getFrameSize().y | 0) / modulus.toNumber() - 100 + frame.getFrameSize().y);
  };
  EllipticSimulator.prototype.demodifyX_ab7lzj$ = function (x, frame, xScale) {
    if (xScale === void 0)
      xScale = this.defaultXScale_0;
    var tmp$;
    if (!Kotlin.isType(frame.curve, FiniteEllipticCurve))
      return numberToInt(x * xScale + -500 + (frame.getFrameSize().x / 2 | 0));
    var modulus = (Kotlin.isType(tmp$ = frame.curve, FiniteEllipticCurve) ? tmp$ : throwCCE()).modulus;
    return numberToInt(x * (frame.getFrameSize().x - 10 | 0) / modulus.toNumber() + 10);
  };
  EllipticSimulator.prototype.modifyY_7hclrf$ = function (y, frame, yScale) {
    if (yScale === void 0)
      yScale = this.defaultYScale_0;
    var tmp$, tmp$_0, tmp$_1;
    var yModified = ((-y | 0) + (frame.getFrameSize().y / 2 | 0) | 0) / yScale;
    if (Kotlin.isType(frame.curve, FiniteEllipticCurve)) {
      tmp$_1 = y + 100 - frame.getFrameSize().y | 0;
      tmp$_0 = (Kotlin.isType(tmp$ = frame.curve, FiniteEllipticCurve) ? tmp$ : throwCCE()).modulus;
      yModified = Kotlin.Long.fromInt(tmp$_1).multiply(tmp$_0).toNumber() / (100 - frame.getFrameSize().y | 0);
    }return yModified;
  };
  EllipticSimulator.prototype.modifyX_7hclrf$ = function (x, frame, xScale) {
    if (xScale === void 0)
      xScale = this.defaultXScale_0;
    var tmp$, tmp$_0;
    var xModified = (x - (frame.getFrameSize().x / 2 | 0) - -500 | 0) / xScale;
    if (Kotlin.isType(frame.curve, FiniteEllipticCurve)) {
      tmp$_0 = (Kotlin.isType(tmp$ = frame.curve, FiniteEllipticCurve) ? tmp$ : throwCCE()).modulus;
      xModified = Kotlin.Long.fromInt(x - 10 | 0).multiply(tmp$_0).toNumber() / (frame.getFrameSize().x - 10 | 0);
    }return xModified;
  };
  EllipticSimulator.prototype.drawAxis_61icc3$ = function (frame) {
    if (Kotlin.isType(frame.curve, FiniteEllipticCurve)) {
      frame.drawLine_zdstx0$(new Vec2i(10, 0), new Vec2i(10, frame.getFrameSize().y));
      frame.drawLine_zdstx0$(new Vec2i(0, frame.getFrameSize().y - 100 | 0), new Vec2i(frame.getFrameSize().x, frame.getFrameSize().y - 100 | 0));
    } else {
      frame.drawLine_zdstx0$(new Vec2i(0, frame.getFrameSize().y / 2 | 0), new Vec2i(frame.getFrameSize().x, frame.getFrameSize().y / 2 | 0));
      frame.drawLine_zdstx0$(new Vec2i((frame.getFrameSize().x / 2 | 0) + -500 | 0, 0), new Vec2i((frame.getFrameSize().x / 2 | 0) + -500 | 0, frame.getFrameSize().y));
    }
  };
  EllipticSimulator.prototype.drawTicks_2mzq29$ = function (frame, xScale, yScale) {
    if (xScale === void 0)
      xScale = this.defaultXScale_0;
    if (yScale === void 0)
      yScale = this.defaultYScale_0;
    var tmp$, tmp$_0;
    frame.changeColor_uu3z0h$(Color.Companion.darkGray);
    var yUnit = 5 * yScale;
    var xUnit = 1 * xScale;
    var currentYModified = -roundToInt(this.getMinBoundsOfFrame_2mzq29$(frame, xScale, yScale).y);
    if (!Kotlin.isType(frame.curve, FiniteEllipticCurve))
      currentYModified -= currentYModified % 5;
    var bounds = this.getMaxBoundsOfFrame_2mzq29$(frame, xScale, yScale);
    while (currentYModified < -bounds.y) {
      tmp$_0 = currentYModified;
      if (Kotlin.isType(frame.curve, FiniteEllipticCurve)) {
        frame.drawText_puwimp$(new Vec2i(numberToInt(10 + yUnit / 5), this.demodifyY_ab7lzj$(currentYModified, frame, yScale)), '(0, ' + currentYModified + ')');
        tmp$ = 1.0;
      } else {
        frame.drawText_puwimp$(new Vec2i(numberToInt(((frame.getFrameSize().x / 2 | 0) + -500 | 0) + yUnit / 5), this.demodifyY_ab7lzj$(currentYModified, frame, yScale)), '(0, ' + currentYModified + ')');
        tmp$ = this.scale < 5.0 ? 5.0 : this.scale < 10 ? 10.0 : 15.0;
      }
      currentYModified = tmp$_0 + tmp$;
    }
    var currentXModified = roundToInt(this.getMinBoundsOfFrame_2mzq29$(frame, xScale, yScale).x);
    while (currentXModified < bounds.x) {
      if (currentXModified === 0.0) {
        currentXModified += 1;
        continue;
      }if (Kotlin.isType(frame.curve, FiniteEllipticCurve)) {
        frame.drawText_puwimp$(new Vec2i(this.demodifyX_ab7lzj$(currentXModified, frame, xScale), numberToInt((frame.getFrameSize().y - 100 | 0) - xUnit / 20)), '(' + currentXModified + ', 0)');
      } else {
        frame.drawText_puwimp$(new Vec2i(this.demodifyX_ab7lzj$(currentXModified, frame, xScale), numberToInt((frame.getFrameSize().y / 2 | 0) - xUnit / 20)), '(' + currentXModified + ', 0)');
      }
      currentXModified += Kotlin.isType(frame.curve, FiniteEllipticCurve) || this.scale < 5.0 ? 1.0 : 3.0;
    }
    frame.changeColor_uu3z0h$(Color.Companion.black);
  };
  EllipticSimulator.prototype.drawGridlines_2mzq29$ = function (frame, xScale, yScale) {
    if (xScale === void 0)
      xScale = this.defaultXScale_0;
    if (yScale === void 0)
      yScale = this.defaultYScale_0;
    frame.changeColor_uu3z0h$(Color.Companion.darkGray);
    var bounds = this.getMaxBoundsOfFrame_2mzq29$(frame, xScale, yScale);
    var currentYModified = -roundToInt(this.getMinBoundsOfFrame_2mzq29$(frame, xScale, yScale).y);
    currentYModified -= currentYModified % 5;
    while (currentYModified < -bounds.y) {
      frame.drawLine_zdstx0$(new Vec2i(0, this.demodifyY_ab7lzj$(currentYModified, frame, yScale)), new Vec2i(frame.getFrameSize().x, this.demodifyY_ab7lzj$(currentYModified, frame, yScale)));
      currentYModified += Kotlin.isType(frame.curve, FiniteEllipticCurve) ? 1.0 : this.scale < 5.0 ? 5.0 : this.scale < 10 ? 10.0 : 15.0;
    }
    var currentXModified = roundToInt(this.getMinBoundsOfFrame_2mzq29$(frame, xScale, yScale).x);
    while (currentXModified < bounds.x) {
      frame.drawLine_zdstx0$(new Vec2i(this.demodifyX_ab7lzj$(currentXModified, frame, xScale), 0), new Vec2i(this.demodifyX_ab7lzj$(currentXModified, frame, xScale), frame.getFrameSize().y));
      currentXModified += Kotlin.isType(frame.curve, FiniteEllipticCurve) || this.scale < 5.0 ? 1.0 : 3.0;
    }
    frame.changeColor_uu3z0h$(Color.Companion.black);
  };
  EllipticSimulator.prototype.drawLineOfSymmetry_61icc3$ = function (frame) {
    var tmp$;
    frame.changeColor_uu3z0h$(Color.Companion.red);
    if (Kotlin.isType(frame.curve, FiniteEllipticCurve)) {
      var modulus = (Kotlin.isType(tmp$ = frame.curve, FiniteEllipticCurve) ? tmp$ : throwCCE()).modulus;
      var yNeeded = this.demodifyY_ab7lzj$(modulus.toNumber() / 2.0, frame);
      frame.drawLineOfSymmetry_zdstx0$(new Vec2i(0, yNeeded), new Vec2i(frame.getFrameSize().x, yNeeded));
    } else {
      var yValue = this.demodifyY_ab7lzj$(0.0, frame);
      frame.drawLineOfSymmetry_zdstx0$(new Vec2i(0, yValue), new Vec2i(frame.getFrameSize().x, yValue));
    }
    frame.redraw();
    frame.changeColor_uu3z0h$(Color.Companion.black);
  };
  EllipticSimulator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EllipticSimulator',
    interfaces: []
  };
  var EllipticSimulator_instance = null;
  function EllipticSimulator_getInstance() {
    if (EllipticSimulator_instance === null) {
      new EllipticSimulator();
    }return EllipticSimulator_instance;
  }
  Object.defineProperty(_, 'panel', {
    get: get_panel,
    set: set_panel
  });
  Object.defineProperty(_, 'aSlider', {
    get: get_aSlider,
    set: set_aSlider
  });
  Object.defineProperty(_, 'bSlider', {
    get: get_bSlider,
    set: set_bSlider
  });
  _.main = main;
  _.redrawCurve_3pjtqy$ = redrawCurve;
  Object.defineProperty(EllipticCurve, 'Companion', {
    get: EllipticCurve$Companion_getInstance
  });
  var package$eladkay = _.eladkay || (_.eladkay = {});
  var package$ellipticcurve = package$eladkay.ellipticcurve || (package$eladkay.ellipticcurve = {});
  var package$mathengine = package$ellipticcurve.mathengine || (package$ellipticcurve.mathengine = {});
  package$mathengine.EllipticCurve = EllipticCurve;
  Object.defineProperty(EllipticCurveHelper, 'Companion', {
    get: EllipticCurveHelper$Companion_getInstance
  });
  package$mathengine.EllipticCurveHelper = EllipticCurveHelper;
  Object.defineProperty(FiniteEllipticCurve, 'Companion', {
    get: FiniteEllipticCurve$Companion_getInstance
  });
  package$mathengine.FiniteEllipticCurve = FiniteEllipticCurve;
  Object.defineProperty(Vec2d, 'Companion', {
    get: Vec2d$Companion_getInstance
  });
  package$mathengine.Vec2d_init_z8e4lc$ = Vec2d_init;
  package$mathengine.Vec2d = Vec2d;
  package$mathengine.Vec2i = Vec2i;
  Object.defineProperty(CurveFrame, 'Companion', {
    get: CurveFrame$Companion_getInstance
  });
  var package$simulationengine = package$ellipticcurve.simulationengine || (package$ellipticcurve.simulationengine = {});
  package$simulationengine.CurveFrame = CurveFrame;
  package$simulationengine.CurvePanelJs = CurvePanelJs;
  Object.defineProperty(package$simulationengine, 'EllipticSimulator', {
    get: EllipticSimulator_getInstance
  });
  CurvePanelJs.prototype.serializeCurveFrame = CurveFrame.prototype.serializeCurveFrame;
  main();
  Kotlin.defineModule('EllipticCurve', _);
  return _;
}));

//# sourceMappingURL=EllipticCurve.js.map
