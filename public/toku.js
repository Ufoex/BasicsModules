"use strict";
var TokuStep, TokuOperationType, TokuEventResult, __extends = this && this.__extends || function () {
  var n = function (t, e) {
    return (n = Object.setPrototypeOf || ({__proto__: []} instanceof Array ? function (t, e) {
      t.__proto__ = e
    } : function (t, e) {
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
    }))(t, e)
  };
  return function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function r() {
      this.constructor = t
    }

    n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
  }
}(), __assign = this && this.__assign || function () {
  return (__assign = Object.assign || function (t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t
  }).apply(this, arguments)
}, __awaiter = this && this.__awaiter || function (t, a, s, c) {
  return new (s = s || Promise)(function (r, e) {
    function n(t) {
      try {
        i(c.next(t))
      } catch (t) {
        e(t)
      }
    }

    function o(t) {
      try {
        i(c.throw(t))
      } catch (t) {
        e(t)
      }
    }

    function i(t) {
      var e;
      t.done ? r(t.value) : ((e = t.value) instanceof s ? e : new s(function (t) {
        t(e)
      })).then(n, o)
    }

    i((c = c.apply(t, a || [])).next())
  })
}, __generator = this && this.__generator || function (n, o) {
  var i, a, s, c = {
    label: 0, sent: function () {
      if (1 & s[0]) throw s[1];
      return s[1]
    }, trys: [], ops: []
  }, t = {next: e(0), throw: e(1), return: e(2)};
  return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
    return this
  }), t;

  function e(r) {
    return function (t) {
      var e = [r, t];
      if (i) throw new TypeError("Generator is already executing.");
      for (; c;) try {
        if (i = 1, a && (s = 2 & e[0] ? a.return : e[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, e[1])).done) return s;
        switch (a = 0, (e = s ? [2 & e[0], s.value] : e)[0]) {
          case 0:
          case 1:
            s = e;
            break;
          case 4:
            return c.label++, {value: e[1], done: !1};
          case 5:
            c.label++, a = e[1], e = [0];
            continue;
          case 7:
            e = c.ops.pop(), c.trys.pop();
            continue;
          default:
            if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
              c = 0;
              continue
            }
            if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) c.label = e[1]; else if (6 === e[0] && c.label < s[1]) c.label = s[1], s = e; else {
              if (!(s && c.label < s[2])) {
                s[2] && c.ops.pop(), c.trys.pop();
                continue
              }
              c.label = s[2], c.ops.push(e)
            }
        }
        e = o.call(n, c)
      } catch (t) {
        e = [6, t], a = 0
      } finally {
        i = s = 0
      }
      if (5 & e[0]) throw e[1];
      return {value: e[0] ? e[1] : void 0, done: !0}
    }
  }
}, TokuUnauthorizedError = (!function (t) {
  t.landing = "landing", t.dashboard = "dashboard", t.recurringCheckout = "recurringCheckout", t.oneTimeCheckout = "oneTimeCheckout", t.onDemandRecurringCheckout = "onDemandRecurringCheckout"
}(TokuStep = TokuStep || {}), function (e) {
  function r(t) {
    t = e.call(this, t) || this;
    return Object.setPrototypeOf(t, r.prototype), t.name = "UnauthorizedError", t
  }

  return __extends(r, e), r
}(Error)), Toku = (!function (t) {
  t.INSCRIPTION = "INSCRIPTION", t.PAYMENT = "PAYMENT", t.TRANSFER_ACTIVATION = "TRANSFER_ACTIVATION"
}(TokuOperationType = TokuOperationType || {}), !function (t) {
  t.SUCCESS = "SUCCESS", t.FAILURE = "FAILURE", t.ABORTED = "ABORTED"
}(TokuEventResult = TokuEventResult || {}), function () {
  function t(t, e) {
    this.defaultSettings = {
      containerId: "toku-container", iframeId: "toku-frame", portalId: 0, onSuccess: function () {
      }, onError: function () {
      }, isTesting: !1, additionalOrigins: []
    }, this.portalHost = "", this.path = "", this.queryParams = {}, this.validTokuProducts = ["pac_inscription", "direct_debit_cl", "transfer_cl", "transfer_mx", "klap_oneclick", "cash", "toku_gateways", "payment_orchestration", "multigateway_onetime", "toku_card_on_file", "toku_onetime", "domiciliation", "codi"], this.apiKey = t, this.settings = __assign(__assign({}, this.defaultSettings), e), window.onmessage = this.handleEvent.bind(this), this.queryParams.portal = this.settings.portalId.toString(), this.queryParams.accessSource = "iframe"
  }

  return t.prototype.handleEvent = function (t) {
    t.data.result === TokuEventResult.SUCCESS ? this.settings.onSuccess(t.data) : t.data.result === TokuEventResult.FAILURE ? this.settings.onError(t.data) : console.error("Internal server error when communicating with the iframe")
  }, t.prototype.isValidId = function (t, e) {
    t = t.split("_");
    return !(t.length < 2 || "" !== e && t[0] !== e) && 32 === t.slice(1).join("_").length
  }, t.prototype.getPortalHost = function (n) {
    var o;
    return __awaiter(this, void 0, void 0, function () {
      var e, r;
      return __generator(this, function (t) {
        switch (t.label) {
          case 0:
            if (this.settings.isTesting) return [2, "http://localhost:8100/"];
            t.label = 1;
          case 1:
            return t.trys.push([1, 5, , 6]), [4, fetch("https://pabssandbox.trytoku.com/portal_url", {
              method: "GET",
              mode: "cors",
              cache: "no-cache",
              headers: __assign({"x-public-key": n}, 0 < (null == (o = this.settings.additionalOrigins) ? void 0 : o.length) ? {"additional-origins": this.settings.additionalOrigins.join(";")} : {})
            })];
          case 2:
            return 200 !== (e = t.sent()).status ? [3, 4] : [4, e.json()];
          case 3:
            if ((r = t.sent()).portal_url) return [2, r.portal_url];
            throw new Error("Invalid api key");
          case 4:
            if ([401, 403, 404].includes(e.status)) throw new TokuUnauthorizedError("Invalid api key");
            return [3, 6];
          case 5:
            if ((r = t.sent()) instanceof TokuUnauthorizedError) throw r;
            throw console.log(r), new Error("Internal server error");
          case 6:
            return [2, ""]
        }
      })
    })
  }, t.prototype.formatQueryParams = function () {
    var t = Object.entries(this.queryParams).map(function (t) {
      var e = t[0], t = t[1];
      return "".concat(e, "=").concat(t)
    }).join("&");
    return t ? "?".concat(t) : ""
  }, t.prototype.createIframe = function () {
    var t = document.createElement("iframe");
    return t.id = this.settings.iframeId, t.setAttribute("allowFullscreen", ""), t.src = "".concat(this.portalHost).concat(this.path).concat(this.formatQueryParams()), t
  }, t.prototype.mountIframe = function () {
    var t = document.getElementById(this.settings.containerId);
    if (!t) throw new Error("Could not find container element with id: ".concat(this.settings.containerId));
    this.containerElement = t, this.containerElement.appendChild(this.iframeElement)
  }, t.prototype.handleGatewayParam = function (t) {
    t && (this.validTokuProducts.includes(t) || console.warn('Invalid gateway "'.concat(t, '", must be one of ').concat(this.validTokuProducts)), this.queryParams.gateway = t)
  }, t.prototype.handleCheckoutParams = function (t, e) {
    if (!t) throw new Error("customerId is required");
    if (!this.isValidId(t, "cus")) throw new Error("Invalid customerId");
    if (!e) throw new Error("accountId is required");
    if (!this.isValidId(e, "acc")) throw new Error("Invalid accountId")
  }, t.prototype.fetchCustomerId = function (r, n) {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      return __generator(this, function (t) {
        switch (t.label) {
          case 0:
            if (this.settings.isTesting) return [2, "cus_bPMJqiDPCywqJ4SUAOY8wdWBV75wcGHt"];
            t.label = 1;
          case 1:
            return t.trys.push([1, 4, , 5]), [4, fetch("https://api.trytoku.com/customer-id/".concat(r), {
              method: "GET",
              mode: "cors",
              cache: "no-cache",
              headers: {"x-public-key": n}
            })];
          case 2:
            return [4, t.sent().json()];
          case 3:
            if ((e = t.sent()).customer) return [2, e.customer];
            throw new Error("Customer could not be found given external ID");
          case 4:
            throw e = t.sent(), console.log(e), new Error("Internal server error");
          case 5:
            return [2]
        }
      })
    })
  }, t.prototype.init = function (f, p) {
    return void 0 === f && (f = TokuStep.landing), void 0 === p && (p = {}), __awaiter(this, void 0, void 0, function () {
      var e, r, n, o, i, a, s, c, u, h, l, d;
      return __generator(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, (e = this).getPortalHost(this.apiKey)];
          case 1:
            switch (e.portalHost = t.sent(), f) {
              case TokuStep.landing:
                return [3, 2];
              case TokuStep.dashboard:
                return [3, 3];
              case TokuStep.recurringCheckout:
                return [3, 7];
              case TokuStep.oneTimeCheckout:
                return [3, 8];
              case TokuStep.onDemandRecurringCheckout:
                return [3, 9]
            }
            return [3, 10];
          case 2:
            return [3, 11];
          case 3:
            return (r = p, this.path = "dashboard", "externalId" in r) ? [4, this.fetchCustomerId(r.externalId, this.apiKey)] : [3, 5];
          case 4:
            return n = t.sent(), this.queryParams.user = n, [3, 6];
          case 5:
            if (!("customerId" in r)) throw new Error("customerId is required");
            this.queryParams.user = r.customerId, t.label = 6;
          case 6:
            return [3, 11];
          case 7:
            if (o = (n = p).customerId, i = n.accountId, c = n.subscriptionId, s = n.gateway, this.handleCheckoutParams(o, i), this.path = "checkout/recurring", this.queryParams.user = o, this.queryParams.account = i, c) {
              if (!this.isValidId(c, "sub")) throw new Error("Invalid subscriptionId");
              this.queryParams.subscriptions = '["'.concat(c, '"]')
            }
            return this.handleGatewayParam(s), [3, 11];
          case 8:
            if (o = (d = p).customerId, i = d.accountId, a = d.invoiceIds, s = d.gateway, c = d.subscriptionId, this.handleCheckoutParams(o, i), !a || 0 === a.length) throw new Error("invoiceIds are required");
            for (u = 0, h = a; u < h.length; u++) if (l = h[u], !this.isValidId(l, "in")) throw new Error("Invalid invoidId ".concat(l));
            if (this.path = "checkout/one_time", this.queryParams.user = o, this.queryParams.account = i, this.queryParams.invoices = JSON.stringify(a), c) {
              if (!this.isValidId(c, "sub")) throw new Error("Invalid subscriptionId");
              this.queryParams.subscriptions = '["'.concat(c, '"]')
            }
            return this.handleGatewayParam(s), [3, 11];
          case 9:
            return d = p.checkoutSessionId, this.path = "on-demand", this.queryParams.checkoutSession = d, [3, 11];
          case 10:
            throw new Error("Invalid step, must be one of: ".concat(Object.values(TokuStep)));
          case 11:
            return this.iframeElement = this.createIframe(), this.mountIframe(), [2]
        }
      })
    })
  }, t.prototype.close = function () {
    var e;
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (t) {
        return this.iframeElement && null != (e = this.containerElement) && e.removeChild(this.iframeElement), this.iframeElement = void 0, this.containerElement = void 0, this.portalHost = "", [2]
      })
    })
  }, t
}());
