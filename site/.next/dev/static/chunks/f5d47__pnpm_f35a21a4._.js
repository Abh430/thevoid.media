(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/site/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/site/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/cjs/react.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
            get: function() {
                console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
            }
        });
    }
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = !0);
    }
    function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function noop() {}
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(oldElement.type, newKey, oldElement.props, oldElement._owner, oldElement._debugStack, oldElement._debugTask);
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
        });
    }
    function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function resolveThenable(thenable) {
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                switch("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                    "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                }, function(error) {
                    "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                })), thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
        }
        throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = !1;
        if (null === children) invokeCallback = !0;
        else switch(type){
            case "bigint":
            case "string":
            case "number":
                invokeCallback = !0;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = !0;
                        break;
                    case REACT_LAZY_TYPE:
                        return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                }
        }
        if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if (i = getIteratorFn(children), "function" === typeof i) for(i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if ("object" === type) {
            if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
            array = String(children);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
        }
        return invokeCallback;
    }
    function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    function lazyInitializer(payload) {
        if (-1 === payload._status) {
            var ioInfo = payload._ioInfo;
            null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
            ioInfo = payload._result;
            var thenable = ioInfo();
            thenable.then(function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) {
                    payload._status = 1;
                    payload._result = moduleObject;
                    var _ioInfo = payload._ioInfo;
                    null != _ioInfo && (_ioInfo.end = performance.now());
                    void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
                }
            }, function(error) {
                if (0 === payload._status || -1 === payload._status) {
                    payload._status = 2;
                    payload._result = error;
                    var _ioInfo2 = payload._ioInfo;
                    null != _ioInfo2 && (_ioInfo2.end = performance.now());
                    void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
            });
            ioInfo = payload._ioInfo;
            if (null != ioInfo) {
                ioInfo.value = thenable;
                var displayName = thenable.displayName;
                "string" === typeof displayName && (ioInfo.name = displayName);
            }
            -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status) return ioInfo = payload._result, void 0 === ioInfo && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ioInfo), "default" in ioInfo || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ioInfo), ioInfo.default;
        throw payload._result;
    }
    function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
    }
    function enqueueTask(task) {
        if (null === enqueueTaskImpl) try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
            enqueueTaskImpl = function(callback) {
                !1 === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = !0, "undefined" === typeof MessageChannel && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
            };
        }
        return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue) if (0 !== queue.length) try {
            flushActQueue(queue);
            enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
        } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
        }
        else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
        if (!isFlushing) {
            isFlushing = !0;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do {
                        ReactSharedInternals.didUsePromise = !1;
                        var continuation = callback(!1);
                        if (null !== continuation) {
                            if (ReactSharedInternals.didUsePromise) {
                                queue[i] = callback;
                                queue.splice(0, i);
                                return;
                            }
                            callback = continuation;
                        } else break;
                    }while (1)
                }
                queue.length = 0;
            } catch (error) {
                queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally{
                isFlushing = !1;
            }
        }
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
        }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    };
    for(fnName in deprecatedAPIs)deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = !0;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
    }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
                error: error
            });
            if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] && "function" === typeof __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].emit) {
            __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].emit("uncaughtException", error);
            return;
        }
        console.error(error);
    }, didWarnAboutMessageChannel = !1, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = !1, isFlushing = !1, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
            return queueMicrotask(callback);
        });
    } : enqueueTask;
    deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
            return resolveDispatcher().useMemoCache(size);
        }
    });
    var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments);
            }, forEachContext);
        },
        count: function(children) {
            var n = 0;
            mapChildren(children, function() {
                n++;
            });
            return n;
        },
        toArray: function(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        },
        only: function(children) {
            if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
            return children;
        }
    };
    exports.Activity = REACT_ACTIVITY_TYPE;
    exports.Children = fnName;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = !1;
        try {
            var result = callback();
        } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
                didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            });
            return {
                then: function(resolve, reject) {
                    didAwaitActCall = !0;
                    thenable.then(function(returnValue) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        if (0 === prevActScopeDepth) {
                            try {
                                flushActQueue(queue), enqueueTask(function() {
                                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                });
                            } catch (error$0) {
                                ReactSharedInternals.thrownErrors.push(error$0);
                            }
                            if (0 < ReactSharedInternals.thrownErrors.length) {
                                var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                                ReactSharedInternals.thrownErrors.length = 0;
                                reject(_thrownError);
                            }
                        } else resolve(returnValue);
                    }, function(error) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                    });
                }
            };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
            then: function(resolve, reject) {
                didAwaitActCall = !0;
                0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
                })) : resolve(returnValue$jscomp$0);
            }
        };
    };
    exports.cache = function(fn) {
        return function() {
            return fn.apply(null, arguments);
        };
    };
    exports.cacheSignal = function() {
        return null;
    };
    exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
            var JSCompiler_inline_result;
            a: {
                if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
                    JSCompiler_inline_result = !1;
                    break a;
                }
                JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for(propName in config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for(var i = 0; i < propName; i++)JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
        }
        props = ReactElement(element.type, key, props, owner, element._debugStack, element._debugTask);
        for(key = 2; key < arguments.length; key++)validateChildKeys(arguments[key]);
        return props;
    };
    exports.createContext = function(defaultValue) {
        defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
    };
    exports.createElement = function(type, config, children) {
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i]);
        i = {};
        var key = null;
        if (null != config) for(propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
            for(var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
        }
        if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(type, key, i, getOwner(), propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    };
    exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        }, ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                render.name || render.displayName || (Object.defineProperty(render, "name", {
                    value: name
                }), render.displayName = name);
            }
        });
        return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
        ctor = {
            _status: -1,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: ctor,
            _init: lazyInitializer
        }, ioInfo = {
            name: "lazy",
            start: -1,
            end: -1,
            value: null,
            owner: null,
            debugStack: Error("react-stack-top-frame"),
            debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [
            {
                awaited: ioInfo
            }
        ];
        return lazyType;
    };
    exports.memo = function(type, compare) {
        null == type && console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
        compare = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                type.name || type.displayName || (Object.defineProperty(type, "name", {
                    value: name
                }), type.displayName = name);
            }
        });
        return compare;
    };
    exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition._updatedFibers = new Set();
        ReactSharedInternals.T = currentTransition;
        try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error) {
            reportGlobalError(error);
        } finally{
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
    };
    exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
        return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
        return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, deps) {
        null == create && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useEffect(create, deps);
    };
    exports.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
    };
    exports.useId = function() {
        return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
        null == create && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
        null == create && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
        return resolveDispatcher().useTransition();
    };
    exports.version = "19.2.3";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/cjs/react.development.js [client] (ecmascript)");
}
}),
"[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/cjs/react-jsx-runtime.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/index.js [client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, !1, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.jsxs = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, !0, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/jsx-runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/cjs/react-jsx-runtime.development.js [client] (ecmascript)");
}
}),
"[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/cjs/react-jsx-dev-runtime.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/index.js [client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/cjs/react-jsx-dev-runtime.development.js [client] (ecmascript)");
}
}),
"[project]/site/node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function performWorkUntilDeadline() {
        needsPaint = !1;
        if (isMessageLoopRunning) {
            var currentTime = exports.unstable_now();
            startTime = currentTime;
            var hasMoreWork = !0;
            try {
                a: {
                    isHostCallbackScheduled = !1;
                    isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
                    isPerformingWork = !0;
                    var previousPriorityLevel = currentPriorityLevel;
                    try {
                        b: {
                            advanceTimers(currentTime);
                            for(currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());){
                                var callback = currentTask.callback;
                                if ("function" === typeof callback) {
                                    currentTask.callback = null;
                                    currentPriorityLevel = currentTask.priorityLevel;
                                    var continuationCallback = callback(currentTask.expirationTime <= currentTime);
                                    currentTime = exports.unstable_now();
                                    if ("function" === typeof continuationCallback) {
                                        currentTask.callback = continuationCallback;
                                        advanceTimers(currentTime);
                                        hasMoreWork = !0;
                                        break b;
                                    }
                                    currentTask === peek(taskQueue) && pop(taskQueue);
                                    advanceTimers(currentTime);
                                } else pop(taskQueue);
                                currentTask = peek(taskQueue);
                            }
                            if (null !== currentTask) hasMoreWork = !0;
                            else {
                                var firstTimer = peek(timerQueue);
                                null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                                hasMoreWork = !1;
                            }
                        }
                        break a;
                    } finally{
                        currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
                    }
                    hasMoreWork = void 0;
                }
            } finally{
                hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
            }
        }
    }
    function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        a: for(; 0 < index;){
            var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
            if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
            else break a;
        }
    }
    function peek(heap) {
        return 0 === heap.length ? null : heap[0];
    }
    function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
            heap[0] = last;
            a: for(var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;){
                var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
                if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
                else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
                else break a;
            }
        }
        return first;
    }
    function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
    }
    function advanceTimers(currentTime) {
        for(var timer = peek(timerQueue); null !== timer;){
            if (null === timer.callback) pop(timerQueue);
            else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
            else break;
            timer = peek(timerQueue);
        }
    }
    function handleTimeout(currentTime) {
        isHostTimeoutScheduled = !1;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
        else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
    }
    function shouldYieldToHost() {
        return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
    }
    function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
            callback(exports.unstable_now());
        }, ms);
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    exports.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
            return localDate.now() - initialTime;
        };
    }
    var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = !1, isHostCallbackScheduled = !1, isHostTimeoutScheduled = !1, needsPaint = !1, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null, isMessageLoopRunning = !1, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
    if ("function" === typeof localSetImmediate) var schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
    };
    else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
            port.postMessage(null);
        };
    } else schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
    };
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(task) {
        task.callback = null;
    };
    exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
    };
    exports.unstable_next = function(eventHandler) {
        switch(currentPriorityLevel){
            case 1:
            case 2:
            case 3:
                var priorityLevel = 3;
                break;
            default:
                priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_requestPaint = function() {
        needsPaint = !0;
    };
    exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch(priorityLevel){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch(priorityLevel){
            case 1:
                var timeout = -1;
                break;
            case 2:
                timeout = 250;
                break;
            case 5:
                timeout = 1073741823;
                break;
            case 4:
                timeout = 1e4;
                break;
            default:
                timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
            id: taskIdCounter++,
            callback: callback,
            priorityLevel: priorityLevel,
            startTime: options,
            expirationTime: timeout,
            sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
        return priorityLevel;
    };
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
                return callback.apply(this, arguments);
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        };
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/site/node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/site/node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)");
}
}),
"[project]/site/node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyleSheet",
    ()=>StyleSheet
]);
var isDevelopment = true;
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/ function sheetForTag(tag) {
    if (tag.sheet) {
        return tag.sheet;
    } // this weirdness brought to you by firefox
    /* istanbul ignore next */ for(var i = 0; i < document.styleSheets.length; i++){
        if (document.styleSheets[i].ownerNode === tag) {
            return document.styleSheets[i];
        }
    } // this function should always return with a value
    // TS can't understand it though so we make it stop complaining here
    return undefined;
}
function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);
    if (options.nonce !== undefined) {
        tag.setAttribute('nonce', options.nonce);
    }
    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
}
var StyleSheet = /*#__PURE__*/ function() {
    // Using Node instead of HTMLElement since container may be a ShadowRoot
    function StyleSheet(options) {
        var _this = this;
        this._insertTag = function(tag) {
            var before;
            if (_this.tags.length === 0) {
                if (_this.insertionPoint) {
                    before = _this.insertionPoint.nextSibling;
                } else if (_this.prepend) {
                    before = _this.container.firstChild;
                } else {
                    before = _this.before;
                }
            } else {
                before = _this.tags[_this.tags.length - 1].nextSibling;
            }
            _this.container.insertBefore(tag, before);
            _this.tags.push(tag);
        };
        this.isSpeedy = options.speedy === undefined ? !isDevelopment : options.speedy;
        this.tags = [];
        this.ctr = 0;
        this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets
        this.key = options.key;
        this.container = options.container;
        this.prepend = options.prepend;
        this.insertionPoint = options.insertionPoint;
        this.before = null;
    }
    var _proto = StyleSheet.prototype;
    _proto.hydrate = function hydrate(nodes) {
        nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
        // the max length is how many rules we have per style tag, it's 65000 in speedy mode
        // it's 1 in dev because we insert source maps that map a single rule to a location
        // and you can only have one source map per style tag
        if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
            this._insertTag(createStyleElement(this));
        }
        var tag = this.tags[this.tags.length - 1];
        {
            var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
            if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
                // this would only cause problem in speedy mode
                // but we don't want enabling speedy to affect the observable behavior
                // so we report this error at all times
                console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
            }
            this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
        }
        if (this.isSpeedy) {
            var sheet = sheetForTag(tag);
            try {
                // this is the ultrafast version, works across browsers
                // the big drawback is that the css won't be editable in devtools
                sheet.insertRule(rule, sheet.cssRules.length);
            } catch (e) {
                if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
                    console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
                }
            }
        } else {
            tag.appendChild(document.createTextNode(rule));
        }
        this.ctr++;
    };
    _proto.flush = function flush() {
        this.tags.forEach(function(tag) {
            var _tag$parentNode;
            return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;
        {
            this._alreadyInsertedOrderInsensitiveRule = false;
        }
    };
    return StyleSheet;
}();
;
}),
"[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {number}
 * @return {number}
 */ __turbopack_context__.s([
    "abs",
    ()=>abs,
    "append",
    ()=>append,
    "assign",
    ()=>assign,
    "charat",
    ()=>charat,
    "combine",
    ()=>combine,
    "from",
    ()=>from,
    "hash",
    ()=>hash,
    "indexof",
    ()=>indexof,
    "match",
    ()=>match,
    "replace",
    ()=>replace,
    "sizeof",
    ()=>sizeof,
    "strlen",
    ()=>strlen,
    "substr",
    ()=>substr,
    "trim",
    ()=>trim
]);
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length) {
    return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
    return value.trim();
}
function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
}
function indexof(value, search) {
    return value.indexOf(search);
}
function charat(value, index) {
    return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
    return value.slice(begin, end);
}
function strlen(value) {
    return value.length;
}
function sizeof(value) {
    return value.length;
}
function append(value, array) {
    return array.push(value), value;
}
function combine(array, callback) {
    return array.map(callback).join('');
}
}),
"[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "caret",
    ()=>caret,
    "char",
    ()=>char,
    "character",
    ()=>character,
    "characters",
    ()=>characters,
    "column",
    ()=>column,
    "commenter",
    ()=>commenter,
    "copy",
    ()=>copy,
    "dealloc",
    ()=>dealloc,
    "delimit",
    ()=>delimit,
    "delimiter",
    ()=>delimiter,
    "escaping",
    ()=>escaping,
    "identifier",
    ()=>identifier,
    "length",
    ()=>length,
    "line",
    ()=>line,
    "next",
    ()=>next,
    "node",
    ()=>node,
    "peek",
    ()=>peek,
    "position",
    ()=>position,
    "prev",
    ()=>prev,
    "slice",
    ()=>slice,
    "token",
    ()=>token,
    "tokenize",
    ()=>tokenize,
    "tokenizer",
    ()=>tokenizer,
    "whitespace",
    ()=>whitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js [client] (ecmascript)");
;
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';
function node(value, root, parent, type, props, children, length) {
    return {
        value: value,
        root: root,
        parent: parent,
        type: type,
        props: props,
        children: children,
        line: line,
        column: column,
        length: length,
        return: ''
    };
}
function copy(root, props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["assign"])(node('', null, null, '', null, null, 0), root, {
        length: -root.length
    }, props);
}
function char() {
    return character;
}
function prev() {
    character = position > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, --position) : 0;
    if (column--, character === 10) column = 1, line--;
    return character;
}
function next() {
    character = position < length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, position++) : 0;
    if (column++, character === 10) column = 1, line++;
    return character;
}
function peek() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, position);
}
function caret() {
    return position;
}
function slice(begin, end) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(characters, begin, end);
}
function token(type) {
    switch(type){
        // \0 \t \n \r \s whitespace token
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        // ! + , / > @ ~ isolate token
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        // ; { } breakpoint token
        case 59:
        case 123:
        case 125:
            return 4;
        // : accompanied token
        case 58:
            return 3;
        // " ' ( [ opening delimit token
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        // ) ] closing delimit token
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function alloc(value) {
    return line = column = 1, length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters = value), position = 0, [];
}
function dealloc(value) {
    return characters = '', value;
}
function delimit(type) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["trim"])(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function tokenize(value) {
    return dealloc(tokenizer(alloc(value)));
}
function whitespace(type) {
    while(character = peek())if (character < 33) next();
    else break;
    return token(type) > 2 || token(character) > 3 ? '' : ' ';
}
function tokenizer(children) {
    while(next())switch(token(character)){
        case 0:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(identifier(position - 1), children);
            break;
        case 2:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(delimit(character), children);
            break;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])(character), children);
    }
    return children;
}
function escaping(index, count) {
    while(--count && next())// not 0-9 A-F a-f
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
    while(next())switch(character){
        // ] ) " '
        case type:
            return position;
        // " '
        case 34:
        case 39:
            if (type !== 34 && type !== 39) delimiter(character);
            break;
        // (
        case 40:
            if (type === 41) delimiter(type);
            break;
        // \
        case 92:
            next();
            break;
    }
    return position;
}
function commenter(type, index) {
    while(next())// //
    if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
    return '/*' + slice(index, position - 1) + '*' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])(type === 47 ? type : next());
}
function identifier(index) {
    while(!token(peek()))next();
    return slice(index, position);
}
}),
"[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHARSET",
    ()=>CHARSET,
    "COMMENT",
    ()=>COMMENT,
    "COUNTER_STYLE",
    ()=>COUNTER_STYLE,
    "DECLARATION",
    ()=>DECLARATION,
    "DOCUMENT",
    ()=>DOCUMENT,
    "FONT_FACE",
    ()=>FONT_FACE,
    "FONT_FEATURE_VALUES",
    ()=>FONT_FEATURE_VALUES,
    "IMPORT",
    ()=>IMPORT,
    "KEYFRAMES",
    ()=>KEYFRAMES,
    "LAYER",
    ()=>LAYER,
    "MEDIA",
    ()=>MEDIA,
    "MOZ",
    ()=>MOZ,
    "MS",
    ()=>MS,
    "NAMESPACE",
    ()=>NAMESPACE,
    "PAGE",
    ()=>PAGE,
    "RULESET",
    ()=>RULESET,
    "SUPPORTS",
    ()=>SUPPORTS,
    "VIEWPORT",
    ()=>VIEWPORT,
    "WEBKIT",
    ()=>WEBKIT
]);
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
}),
"[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>serialize,
    "stringify",
    ()=>stringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js [client] (ecmascript)");
;
;
function serialize(children, callback) {
    var output = '';
    var length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sizeof"])(children);
    for(var i = 0; i < length; i++)output += callback(children[i], i, children, callback) || '';
    return output;
}
function stringify(element, index, children, callback) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LAYER"]:
            if (element.children.length) break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["IMPORT"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DECLARATION"]:
            return element.return = element.return || element.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["COMMENT"]:
            return '';
        case __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
            return element.return = element.value + '{' + serialize(element.children, callback) + '}';
        case __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RULESET"]:
            element.value = element.props.join(',');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
}),
"[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Prefixer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prefix",
    ()=>prefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js [client] (ecmascript)");
;
;
function prefix(value, length, children) {
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["hash"])(value, length)){
        // color-adjust
        case 5103:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'print-' + value + value;
        // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // tab-size
        case 4789:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + value + value;
        // appearance, user-select, transform, hyphens, text-size-adjust
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // writing-mode
        case 5936:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 11)){
                // vertical-l(r)
                case 114:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
                // vertical-r(l)
                case 108:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
                // horizontal(-)tb
                case 45:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
            }
        // flex, flex-direction, scroll-snap-type, writing-mode
        case 6828:
        case 4268:
        case 2903:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // order
        case 6165:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-' + value + value;
        // align-items
        case 5187:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(\w+).+(:[^]+)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-$1$2' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-$1$2') + value;
        // align-self
        case 5443:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-item-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') + (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/) ? __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') : '') + value;
        // align-content
        case 4675:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-line-pack' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /align-content|flex-|-self/g, '') + value;
        // flex-shrink
        case 5548:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'shrink', 'negative') + value;
        // flex-basis
        case 5292:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'basis', 'preferred-size') + value;
        // flex-grow
        case 6060:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, '-grow', '') + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'grow', 'positive') + value;
        // transition
        case 4554:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /([^-])(transform)/g, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2') + value;
        // cursor
        case 6187:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(zoom-|grab)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), /(image-set)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), value, '') + value;
        // background, background-image
        case 5495:
        case 3959:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(image-set\([^]*)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1' + '$`$1');
        // justify-content
        case 4968:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(flex-)?(.*)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-pack:$3' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // justify-self
        case 4200:
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/)) return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'grid-column-align' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, length) + value;
            break;
        // grid-template-(columns|rows)
        case 2592:
        case 3360:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'template-', '') + value;
        // grid-(row|column)-start
        case 4384:
        case 3616:
            if (children && children.some(function(element, index) {
                return length = index, (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-end/);
            })) {
                return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["indexof"])(value + (children = children[length].value), 'span') ? value : __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-span:' + (~(0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["indexof"])(children, 'span') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) : +(0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(value, /\d+/)) + ';';
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value;
        // grid-(row|column)-end
        case 4896:
        case 4128:
            return children && children.some(function(element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-start/);
            }) ? value : __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, '-end', '-span'), 'span ', '') + value;
        // (margin|padding)-inline-(start|end)
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+)-inline(.+)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1$2') + value;
        // (min|max)?(width|height|inline-size|block-size)
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            // stretch, max-content, min-content, fill-available
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(value) - 1 - length > 6) switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 1)){
                // (m)ax-content, (m)in-content
                case 109:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 4) !== 45) break;
                // (f)ill-available, (f)it-content
                case 102:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(.+)-([^]+)/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2-$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
                // (s)tretch
                case 115:
                    return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["indexof"])(value, 'stretch') ? prefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'stretch', 'fill-available'), length, children) + value : value;
            }
            break;
        // grid-(column|row)
        case 5152:
        case 5920:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + a + ':' + b + f + (c ? __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + a + '-span:' + (d ? e : +e - +b) + f : '') + value;
            });
        // position: sticky
        case 4949:
            // stick(y)?
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 6) === 121) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"]) + value;
            break;
        // display: (flex|inline-flex|grid|inline-grid)
        case 6444:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 18 : 11)){
                // (inline-)?fle(x)
                case 120:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + '$2box$3') + value;
                // (inline-)?gri(d)
                case 100:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"]) + value;
            }
            break;
        // scroll-margin, scroll-margin-(top|right|bottom|left)
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'scroll-', 'scroll-snap-') + value;
    }
    return value;
}
}),
"[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "middleware",
    ()=>middleware,
    "namespace",
    ()=>namespace,
    "prefixer",
    ()=>prefixer,
    "rulesheet",
    ()=>rulesheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Prefixer.js [client] (ecmascript)");
;
;
;
;
;
function middleware(collection) {
    var length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sizeof"])(collection);
    return function(element, index, children, callback) {
        var output = '';
        for(var i = 0; i < length; i++)output += collection[i](element, index, children, callback) || '';
        return output;
    };
}
function rulesheet(callback) {
    return function(element) {
        if (!element.root) {
            if (element = element.return) callback(element);
        }
    };
}
function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element.return) switch(element.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DECLARATION"]:
                element.return = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["prefix"])(element.value, element.length, children);
                return;
            case __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(element.value, '@', '@' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"])
                    })
                ], callback);
            case __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RULESET"]:
                if (element.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["combine"])(element.props, function(value) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(value, /(::plac\w+|:read-\w+)/)){
                        // :read-(only|write)
                        case ':read-only':
                        case ':read-write':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(read-\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                })
                            ], callback);
                        // :placeholder
                        case '::placeholder':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'input-$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'input-$1')
                                    ]
                                })
                            ], callback);
                    }
                    return '';
                });
        }
    }
}
function namespace(element) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RULESET"]:
            element.props = element.props.map(function(value) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["combine"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tokenize"])(value), function(value, index, children) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, 0)){
                        // \f
                        case 12:
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, 1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(value));
                        // \0 ( + > ~
                        case 0:
                        case 40:
                        case 43:
                        case 62:
                        case 126:
                            return value;
                        // :
                        case 58:
                            if (children[++index] === 'global') children[index] = '', children[++index] = '\f' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(children[index], index = 1, -1);
                        // \s
                        case 32:
                            return index === 1 ? '' : value;
                        default:
                            switch(index){
                                case 0:
                                    element = value;
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sizeof"])(children) > 1 ? '' : value;
                                case index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sizeof"])(children) - 1:
                                case 2:
                                    return index === 2 ? value + element + element : value + element;
                                default:
                                    return value;
                            }
                    }
                });
            });
    }
}
}),
"[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comment",
    ()=>comment,
    "compile",
    ()=>compile,
    "declaration",
    ()=>declaration,
    "parse",
    ()=>parse,
    "ruleset",
    ()=>ruleset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js [client] (ecmascript)");
;
;
;
function compile(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["dealloc"])(parse('', null, null, null, [
        ''
    ], value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["alloc"])(value), 0, [
        0
    ], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character = 0;
    var type = '';
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters = type;
    while(scanning)switch(previous = character, character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["next"])()){
        // (
        case 40:
            if (previous != 108 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, length - 1) == 58) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["indexof"])(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["delimit"])(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
                break;
            }
        // " ' [
        case 34:
        case 39:
        case 91:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["delimit"])(character);
            break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["whitespace"])(previous);
            break;
        // \
        case 92:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["escaping"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["caret"])() - 1, 7);
            continue;
        // /
        case 47:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])()){
                case 42:
                case 47:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(comment((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["commenter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["next"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["caret"])()), root, parent), declarations);
                    break;
                default:
                    characters += '/';
            }
            break;
        // {
        case 123 * variable:
            points[index++] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
            switch(character){
                // \0 }
                case 0:
                case 125:
                    scanning = 0;
                // ;
                case 59 + offset:
                    if (ampersand == -1) characters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(characters, /\f/g, '');
                    if (property > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters) - length) (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
                    break;
                // @ ;
                case 59:
                    characters += ';';
                // { rule/at-rule
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
                    if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
                    else switch(atrule === 99 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, 3) === 110 ? 100 : atrule){
                        // d l m s
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            parse(value, reference, reference, rule && (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
                            break;
                        default:
                            parse(characters, reference, reference, reference, [
                                ''
                            ], children, 0, points, children);
                    }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
            break;
        // :
        case 58:
            length = 1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters), property = previous;
        default:
            if (variable < 1) {
                if (character == 123) --variable;
                else if (character == 125 && variable++ == 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["prev"])() == 125) continue;
            }
            switch(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])(character), character * variable){
                // &
                case 38:
                    ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                    break;
                // ,
                case 44:
                    points[index++] = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters) - 1) * ampersand, ampersand = 1;
                    break;
                // @
                case 64:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])() === 45) characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["delimit"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["next"])());
                    atrule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])(), offset = length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(type = characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["identifier"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["caret"])())), character++;
                    break;
                // -
                case 45:
                    if (previous === 45 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters) == 2) variable = 0;
            }
    }
    return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [
        ''
    ];
    var size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sizeof"])(rule);
    for(var i = 0, j = 0, k = 0; i < index; ++i)for(var x = 0, y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, post + 1, post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["abs"])(j = points[i])), z = value; x < size; ++x)if (z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["trim"])(j > 0 ? rule[x] + ' ' + y : (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(y, /&\f/g, rule[x]))) props[k++] = z;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, offset === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RULESET"] : type, props, children, length);
}
function comment(value, root, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["COMMENT"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["char"])()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, 2, -2), 0);
}
function declaration(value, root, parent, length) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DECLARATION"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, 0, length), (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, length + 1, -1), length);
}
}),
"[project]/site/node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>weakMemoize
]);
var weakMemoize = function weakMemoize(func) {
    var cache = new WeakMap();
    return function(arg) {
        if (cache.has(arg)) {
            // Use non-null assertion because we just checked that the cache `has` it
            // This allows us to remove `undefined` from the return value
            return cache.get(arg);
        }
        var ret = func(arg);
        cache.set(arg, ret);
        return ret;
    };
};
;
}),
"[project]/site/node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>memoize
]);
function memoize(fn) {
    var cache = Object.create(null);
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
;
}),
"[project]/site/node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$sheet$40$1$2e$4$2e$0$2f$node_modules$2f40$emotion$2f$sheet$2f$dist$2f$emotion$2d$sheet$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$weak$2d$memoize$40$0$2e$4$2e$0$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$memoize$40$0$2e$9$2e$0$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [client] (ecmascript)");
;
;
;
;
var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;
    while(true){
        previous = character;
        character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])(); // &\f
        if (previous === 38 && character === 12) {
            points[index] = 1;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["token"])(character)) {
            break;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["next"])();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["slice"])(begin, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["position"]);
};
var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;
    do {
        switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["token"])(character)){
            case 0:
                // &\f
                if (character === 38 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])() === 12) {
                    // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
                    // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
                    // and when it should just concatenate the outer and inner selectors
                    // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
                    points[index] = 1;
                }
                parsed[index] += identifierWithPointTracking(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["position"] - 1, points, index);
                break;
            case 2:
                parsed[index] += (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["delimit"])(character);
                break;
            case 4:
                // comma
                if (character === 44) {
                    // colon
                    parsed[++index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])() === 58 ? '&\f' : '';
                    points[index] = parsed[index].length;
                    break;
                }
            // fallthrough
            default:
                parsed[index] += (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])(character);
        }
    }while (character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["next"])())
    return parsed;
};
var getRules = function getRules(value, points) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["dealloc"])(toRules((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["alloc"])(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11
var fixedElements = /* #__PURE__ */ new WeakMap();
var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
        return;
    }
    var value = element.value;
    var parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while(parent.type !== 'rule'){
        parent = parent.parent;
        if (!parent) return;
    } // short-circuit for the simplest case
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
        return;
    } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"
    if (isImplicitRule) {
        return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for(var i = 0, k = 0; i < rules.length; i++){
        for(var j = 0; j < parentRules.length; j++, k++){
            element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
        }
    }
};
var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
        var value = element.value;
        if (value.charCodeAt(0) === 108 && // charcode for b
        value.charCodeAt(2) === 98) {
            // this ignores label
            element["return"] = '';
            element.value = '';
        }
    }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
var isIgnoringComment = function isIgnoringComment(element) {
    return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
    return function(element, index, children) {
        if (element.type !== 'rule' || cache.compat) return;
        var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
        if (unsafePseudoClasses) {
            var isNested = !!element.parent; // in nested rules comments become children of the "auto-inserted" rule and that's always the `element.parent`
            //
            // considering this input:
            // .a {
            //   .b /* comm */ {}
            //   color: hotpink;
            // }
            // we get output corresponding to this:
            // .a {
            //   & {
            //     /* comm */
            //     color: hotpink;
            //   }
            //   .b {}
            // }
            var commentContainer = isNested ? element.parent.children : children;
            for(var i = commentContainer.length - 1; i >= 0; i--){
                var node = commentContainer[i];
                if (node.line < element.line) {
                    break;
                } // it is quite weird but comments are *usually* put at `column: element.column - 1`
                // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
                // this will also match inputs like this:
                // .a {
                //   /* comm */
                //   .b {}
                // }
                //
                // but that is fine
                //
                // it would be the easiest to change the placement of the comment to be the first child of the rule:
                // .a {
                //   .b { /* comm */ }
                // }
                // with such inputs we wouldn't have to search for the comment at all
                // TODO: consider changing this comment placement in the next major version
                if (node.column < element.column) {
                    if (isIgnoringComment(node)) {
                        return;
                    }
                    break;
                }
            }
            unsafePseudoClasses.forEach(function(unsafePseudoClass) {
                console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
            });
        }
    };
};
var isImportRule = function isImportRule(element) {
    return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
    for(var i = index - 1; i >= 0; i--){
        if (!isImportRule(children[i])) {
            return true;
        }
    }
    return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user
var nullifyElement = function nullifyElement(element) {
    element.type = '';
    element.value = '';
    element["return"] = '';
    element.children = '';
    element.props = '';
};
var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
    if (!isImportRule(element)) {
        return;
    }
    if (element.parent) {
        console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
        nullifyElement(element);
    } else if (isPrependedWithRegularRules(index, children)) {
        console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
        nullifyElement(element);
    }
};
/* eslint-disable no-fallthrough */ function prefix(value, length) {
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["hash"])(value, length)){
        // color-adjust
        case 5103:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'print-' + value + value;
        // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // appearance, user-select, transform, hyphens, text-size-adjust
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // flex, flex-direction
        case 6828:
        case 4268:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // order
        case 6165:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-' + value + value;
        // align-items
        case 5187:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(\w+).+(:[^]+)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-$1$2' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-$1$2') + value;
        // align-self
        case 5443:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-item-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/, '') + value;
        // align-content
        case 4675:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-line-pack' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /align-content|flex-|-self/, '') + value;
        // flex-shrink
        case 5548:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'shrink', 'negative') + value;
        // flex-basis
        case 5292:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'basis', 'preferred-size') + value;
        // flex-grow
        case 6060:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, '-grow', '') + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'grow', 'positive') + value;
        // transition
        case 4554:
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /([^-])(transform)/g, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2') + value;
        // cursor
        case 6187:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(zoom-|grab)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), /(image-set)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), value, '') + value;
        // background, background-image
        case 5495:
        case 3959:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(image-set\([^]*)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1' + '$`$1');
        // justify-content
        case 4968:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(flex-)?(.*)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-pack:$3' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // (margin|padding)-inline-(start|end)
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+)-inline(.+)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1$2') + value;
        // (min|max)?(width|height|inline-size|block-size)
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            // stretch, max-content, min-content, fill-available
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(value) - 1 - length > 6) switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 1)){
                // (m)ax-content, (m)in-content
                case 109:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 4) !== 45) break;
                // (f)ill-available, (f)it-content
                case 102:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(.+)-([^]+)/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2-$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
                // (s)tretch
                case 115:
                    return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["indexof"])(value, 'stretch') ? prefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, 'stretch', 'fill-available'), length) + value : value;
            }
            break;
        // position: sticky
        case 4949:
            // (s)ticky?
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 1) !== 115) break;
        // display: (flex|inline-flex)
        case 6444:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(value) - 3 - (~(0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["indexof"])(value, '!important') && 10))){
                // stic(k)y
                case 107:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"]) + value;
                // (inline-)?fl(e)x
                case 101:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + '$2box$3') + value;
            }
            break;
        // writing-mode
        case 5936:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 11)){
                // vertical-l(r)
                case 114:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
                // vertical-r(l)
                case 108:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
                // horizontal(-)tb
                case 45:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
    }
    return value;
}
var prefixer = function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element["return"]) switch(element.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DECLARATION"]:
                element["return"] = prefix(element.value, element.length);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(element.value, '@', '@' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"])
                    })
                ], callback);
            case __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RULESET"]:
                if (element.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["combine"])(element.props, function(value) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["match"])(value, /(::plac\w+|:read-\w+)/)){
                        // :read-(only|write)
                        case ':read-only':
                        case ':read-write':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(read-\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                })
                            ], callback);
                        // :placeholder
                        case '::placeholder':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'input-$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MS"] + 'input-$1')
                                    ]
                                })
                            ], callback);
                    }
                    return '';
                });
        }
    }
};
var defaultStylisPlugins = [
    prefixer
];
var getSourceMap;
{
    var sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
    getSourceMap = function getSourceMap(styles) {
        var matches = styles.match(sourceMapPattern);
        if (!matches) return;
        return matches[matches.length - 1];
    };
}var createCache = function createCache(options) {
    var key = options.key;
    if (!key) {
        throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
    }
    if (key === 'css') {
        var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
        // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
        // note this very very intentionally targets all style elements regardless of the key to ensure
        // that creating a cache works inside of render of a React component
        Array.prototype.forEach.call(ssrStyles, function(node) {
            // we want to only move elements which have a space in the data-emotion attribute value
            // because that indicates that it is an Emotion 11 server-side rendered style elements
            // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
            // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
            // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
            // will not result in the Emotion 10 styles being destroyed
            var dataEmotionAttribute = node.getAttribute('data-emotion');
            if (dataEmotionAttribute.indexOf(' ') === -1) {
                return;
            }
            document.head.appendChild(node);
            node.setAttribute('data-s', '');
        });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    {
        if (/[^a-z-]/.test(key)) {
            throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
        }
    }
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    {
        container = options.container || document.head;
        Array.prototype.forEach.call(// means that the style elements we're looking at are only Emotion 11 server-rendered style elements
        document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function(node) {
            var attrib = node.getAttribute("data-emotion").split(' ');
            for(var i = 1; i < attrib.length; i++){
                inserted[attrib[i]] = true;
            }
            nodesToHydrate.push(node);
        });
    }
    var _insert;
    var omnipresentPlugins = [
        compat,
        removeLabel
    ];
    {
        omnipresentPlugins.push(createUnsafeSelectorsAlarm({
            get compat () {
                return cache.compat;
            }
        }), incorrectImportAlarm);
    }
    {
        var currentSheet;
        var finalizingPlugins = [
            __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["stringify"],
            function(element) {
                if (!element.root) {
                    if (element["return"]) {
                        currentSheet.insert(element["return"]);
                    } else if (element.value && element.type !== __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["COMMENT"]) {
                        // insert empty rule in non-production environments
                        // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
                        currentSheet.insert(element.value + "{}");
                    }
                }
            }
        ];
        var serializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$client$5d$__$28$ecmascript$29$__["middleware"])(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
        var stylis = function stylis(styles) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serialize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$2$2e$0$2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$client$5d$__$28$ecmascript$29$__["compile"])(styles), serializer);
        };
        _insert = function insert(selector, serialized, sheet, shouldCache) {
            currentSheet = sheet;
            if (getSourceMap) {
                var sourceMap = getSourceMap(serialized.styles);
                if (sourceMap) {
                    currentSheet = {
                        insert: function insert(rule) {
                            sheet.insert(rule + sourceMap);
                        }
                    };
                }
            }
            stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
            if (shouldCache) {
                cache.inserted[serialized.name] = true;
            }
        };
    }
    var cache = {
        key: key,
        sheet: new __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$sheet$40$1$2e$4$2e$0$2f$node_modules$2f40$emotion$2f$sheet$2f$dist$2f$emotion$2d$sheet$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["StyleSheet"]({
            key: key,
            container: container,
            nonce: options.nonce,
            speedy: options.speedy,
            prepend: options.prepend,
            insertionPoint: options.insertionPoint
        }),
        nonce: options.nonce,
        inserted: inserted,
        registered: {},
        insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
};
;
}),
"[project]/site/node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/site/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/site/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/site/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)");
}
}),
"[project]/site/node_modules/.pnpm/react-is@18.3.1/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types.
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        // -----------------------------------------------------------------------------
        var enableScopeAPI = false; // Experimental Create Event Handle API.
        var enableCacheElement = false;
        var enableTransitionTracing = false; // No known bugs, but needs performance testing
        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
        // stuff. Intended to enable React core members to more easily debug scheduling
        // issues in DEV builds.
        var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
        var REACT_MODULE_REFERENCE;
        {
            REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
        }
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                return true;
            }
            if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                // types supported by any Flight configuration anywhere since
                // we don't know which Flight build this will end up being used
                // with.
                type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
                    return true;
                }
            }
            return false;
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                            case REACT_SUSPENSE_LIST_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_SERVER_CONTEXT_TYPE:
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
                }
            }
            return false;
        }
        function isConcurrentMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
                    hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
                }
            }
            return false;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
            return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/site/node_modules/.pnpm/react-is@18.3.1/node_modules/react-is/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/site/node_modules/.pnpm/react-is@18.3.1/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)");
}
}),
"[project]/site/node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reactIs = __turbopack_context__.r("[project]/site/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js [client] (ecmascript)");
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */ var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
    } // React v16.12 and above
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for(var i = 0; i < keys.length; ++i){
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
module.exports = hoistNonReactStatics;
}),
"[project]/site/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3/node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>hoistNonReactStatics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$hoist$2d$non$2d$react$2d$statics$40$3$2e$3$2e$2$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [client] (ecmascript)");
;
// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks
var hoistNonReactStatics = function(targetComponent, sourceComponent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$hoist$2d$non$2d$react$2d$statics$40$3$2e$3$2e$2$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(targetComponent, sourceComponent);
};
;
}),
"[project]/site/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3/node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>CacheProvider,
    "E",
    ()=>Emotion$1,
    "T",
    ()=>ThemeContext,
    "_",
    ()=>__unsafe_useEmotionCache,
    "a",
    ()=>ThemeProvider,
    "b",
    ()=>withTheme,
    "c",
    ()=>createEmotionProps,
    "h",
    ()=>hasOwn,
    "u",
    ()=>useTheme,
    "w",
    ()=>withEmotionCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$cache$40$11$2e$14$2e$0$2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$6$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$weak$2d$memoize$40$0$2e$4$2e$0$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$_isolated$2d$hnrs$2f$dist$2f$emotion$2d$react$2d$_isolated$2d$hnrs$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3/node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$utils$40$1$2e$4$2e$2$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+utils@1.4.2/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$serialize$40$1$2e$3$2e$3$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$40$1$2e$2$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.2.3/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var EmotionCacheContext = /* #__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$cache$40$11$2e$14$2e$0$2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
    key: 'css'
}) : null);
{
    EmotionCacheContext.displayName = 'EmotionCacheContext';
}var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(EmotionCacheContext);
};
var withEmotionCache = function withEmotionCache(func) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
        // the cache will never be null in the browser
        var cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(EmotionCacheContext);
        return func(props, cache, ref);
    });
};
var ThemeContext = /* #__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({});
{
    ThemeContext.displayName = 'EmotionThemeContext';
}var useTheme = function useTheme() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](ThemeContext);
};
var getTheme = function getTheme(outerTheme, theme) {
    if (typeof theme === 'function') {
        var mergedTheme = theme(outerTheme);
        if (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme)) {
            throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
        }
        return mergedTheme;
    }
    if (theme == null || typeof theme !== 'object' || Array.isArray(theme)) {
        throw new Error('[ThemeProvider] Please make your theme prop a plain object');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$6$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, outerTheme, theme);
};
var createCacheWithTheme = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$weak$2d$memoize$40$0$2e$4$2e$0$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(function(outerTheme) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$weak$2d$memoize$40$0$2e$4$2e$0$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(function(theme) {
        return getTheme(outerTheme, theme);
    });
});
var ThemeProvider = function ThemeProvider(props) {
    var theme = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](ThemeContext);
    if (props.theme !== theme) {
        theme = createCacheWithTheme(theme)(props.theme);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](ThemeContext.Provider, {
        value: theme
    }, props.children);
};
function withTheme(Component) {
    var componentName = Component.displayName || Component.name || 'Component';
    var WithTheme = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](function render(props, ref) {
        var theme = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](ThemeContext);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Component, (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$6$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
            theme: theme,
            ref: ref
        }, props));
    });
    WithTheme.displayName = "WithTheme(" + componentName + ")";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$_isolated$2d$hnrs$2f$dist$2f$emotion$2d$react$2d$_isolated$2d$hnrs$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(WithTheme, Component);
}
var hasOwn = {}.hasOwnProperty;
var getLastPart = function getLastPart(functionName) {
    // The match may be something like 'Object.createEmotionProps' or
    // 'Loader.prototype.render'
    var parts = functionName.split('.');
    return parts[parts.length - 1];
};
var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
    // V8
    var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
    if (match) return getLastPart(match[1]); // Safari / Firefox
    match = /^([A-Za-z0-9$.]+)@/.exec(line);
    if (match) return getLastPart(match[1]);
    return undefined;
};
var internalReactFunctionNames = /* #__PURE__ */ new Set([
    'renderWithHooks',
    'processChild',
    'finishClassComponent',
    'renderToString'
]); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.
var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
    return identifier.replace(/\$/g, '-');
};
var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
    if (!stackTrace) return undefined;
    var lines = stackTrace.split('\n');
    for(var i = 0; i < lines.length; i++){
        var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"
        if (!functionName) continue; // If we reach one of these, we have gone too far and should quit
        if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
        // uppercase letter
        if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
    }
    return undefined;
};
var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
    if (typeof props.css === 'string' && // check if there is a css declaration
    props.css.indexOf(':') !== -1) {
        throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
    }
    var newProps = {};
    for(var _key in props){
        if (hasOwn.call(props, _key)) {
            newProps[_key] = props[_key];
        }
    }
    newProps[typePropName] = type; // Runtime labeling is an opt-in feature because:
    // - It causes hydration warnings when using Safari and SSR
    // - It can degrade performance if there are a huge number of elements
    //
    // Even if the flag is set, we still don't compute the label if it has already
    // been determined by the Babel plugin.
    if (typeof globalThis !== 'undefined' && !!globalThis.EMOTION_RUNTIME_AUTO_LABEL && !!props.css && (typeof props.css !== 'object' || !('name' in props.css) || typeof props.css.name !== 'string' || props.css.name.indexOf('-') === -1)) {
        var label = getLabelFromStackTrace(new Error().stack);
        if (label) newProps[labelPropName] = label;
    }
    return newProps;
};
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$utils$40$1$2e$4$2e$2$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["registerStyles"])(cache, serialized, isStringTag);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$40$1$2e$2$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useInsertionEffectAlwaysWithSyncFallback"])({
        "Insertion.useInsertionEffectAlwaysWithSyncFallback": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$utils$40$1$2e$4$2e$2$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["insertStyles"])(cache, serialized, isStringTag);
        }
    }["Insertion.useInsertionEffectAlwaysWithSyncFallback"]);
    return null;
};
var Emotion = /* #__PURE__ */ withEmotionCache(function(props, cache, ref) {
    var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
    // not passing the registered cache to serializeStyles because it would
    // make certain babel optimisations not possible
    if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
        cssProp = cache.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [
        cssProp
    ];
    var className = '';
    if (typeof props.className === 'string') {
        className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$utils$40$1$2e$4$2e$2$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
        className = props.className + " ";
    }
    var serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$serialize$40$1$2e$3$2e$3$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serializeStyles"])(registeredStyles, undefined, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](ThemeContext));
    if (serialized.name.indexOf('-') === -1) {
        var labelFromStack = props[labelPropName];
        if (labelFromStack) {
            serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$serialize$40$1$2e$3$2e$3$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serializeStyles"])([
                serialized,
                'label:' + labelFromStack + ';'
            ]);
        }
    }
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for(var _key2 in props){
        if (hasOwn.call(props, _key2) && _key2 !== 'css' && _key2 !== typePropName && _key2 !== labelPropName) {
            newProps[_key2] = props[_key2];
        }
    }
    newProps.className = className;
    if (ref) {
        newProps.ref = ref;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof WrappedComponent === 'string'
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](WrappedComponent, newProps));
});
{
    Emotion.displayName = 'EmotionCssPropInternal';
}var Emotion$1 = Emotion;
;
}),
"[project]/site/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fragment",
    ()=>Fragment,
    "jsx",
    ()=>jsx,
    "jsxs",
    ()=>jsxs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/jsx-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3/node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$cache$40$11$2e$14$2e$0$2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$6$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$weak$2d$memoize$40$0$2e$4$2e$0$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$hoist$2d$non$2d$react$2d$statics$40$3$2e$3$2e$2$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$utils$40$1$2e$4$2e$2$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+utils@1.4.2/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$serialize$40$1$2e$3$2e$3$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$40$1$2e$2$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.2.3/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
var Fragment = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"];
var jsx = function jsx(type, props, key) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["h"].call(props, 'css')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"](type, props, key);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"](__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["E"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["c"])(type, props), key);
};
var jsxs = function jsxs(type, props, key) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["h"].call(props, 'css')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"](type, props, key);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"](__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["E"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["c"])(type, props), key);
};
;
}),
"[project]/site/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3/node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClassNames",
    ()=>ClassNames,
    "Global",
    ()=>Global,
    "createElement",
    ()=>jsx,
    "css",
    ()=>css,
    "jsx",
    ()=>jsx,
    "keyframes",
    ()=>keyframes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3/node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$utils$40$1$2e$4$2e$2$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+utils@1.4.2/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$40$1$2e$2$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.2.3/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$serialize$40$1$2e$3$2e$3$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$cache$40$11$2e$14$2e$0$2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$6$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$weak$2d$memoize$40$0$2e$4$2e$0$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$hoist$2d$non$2d$react$2d$statics$40$3$2e$3$2e$2$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
var isDevelopment = true;
var pkg = {
    name: "@emotion/react",
    version: "11.14.0",
    main: "dist/emotion-react.cjs.js",
    module: "dist/emotion-react.esm.js",
    types: "dist/emotion-react.cjs.d.ts",
    exports: {
        ".": {
            types: {
                "import": "./dist/emotion-react.cjs.mjs",
                "default": "./dist/emotion-react.cjs.js"
            },
            development: {
                "edge-light": {
                    module: "./dist/emotion-react.development.edge-light.esm.js",
                    "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
                    "default": "./dist/emotion-react.development.edge-light.cjs.js"
                },
                worker: {
                    module: "./dist/emotion-react.development.edge-light.esm.js",
                    "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
                    "default": "./dist/emotion-react.development.edge-light.cjs.js"
                },
                workerd: {
                    module: "./dist/emotion-react.development.edge-light.esm.js",
                    "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
                    "default": "./dist/emotion-react.development.edge-light.cjs.js"
                },
                browser: {
                    module: "./dist/emotion-react.browser.development.esm.js",
                    "import": "./dist/emotion-react.browser.development.cjs.mjs",
                    "default": "./dist/emotion-react.browser.development.cjs.js"
                },
                module: "./dist/emotion-react.development.esm.js",
                "import": "./dist/emotion-react.development.cjs.mjs",
                "default": "./dist/emotion-react.development.cjs.js"
            },
            "edge-light": {
                module: "./dist/emotion-react.edge-light.esm.js",
                "import": "./dist/emotion-react.edge-light.cjs.mjs",
                "default": "./dist/emotion-react.edge-light.cjs.js"
            },
            worker: {
                module: "./dist/emotion-react.edge-light.esm.js",
                "import": "./dist/emotion-react.edge-light.cjs.mjs",
                "default": "./dist/emotion-react.edge-light.cjs.js"
            },
            workerd: {
                module: "./dist/emotion-react.edge-light.esm.js",
                "import": "./dist/emotion-react.edge-light.cjs.mjs",
                "default": "./dist/emotion-react.edge-light.cjs.js"
            },
            browser: {
                module: "./dist/emotion-react.browser.esm.js",
                "import": "./dist/emotion-react.browser.cjs.mjs",
                "default": "./dist/emotion-react.browser.cjs.js"
            },
            module: "./dist/emotion-react.esm.js",
            "import": "./dist/emotion-react.cjs.mjs",
            "default": "./dist/emotion-react.cjs.js"
        },
        "./jsx-runtime": {
            types: {
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
            },
            development: {
                "edge-light": {
                    module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
                    "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
                },
                worker: {
                    module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
                    "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
                },
                workerd: {
                    module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
                    "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
                },
                browser: {
                    module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js",
                    "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.mjs",
                    "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.js"
                },
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.js"
            },
            "edge-light": {
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
            },
            worker: {
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
            },
            workerd: {
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
            },
            browser: {
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.js"
            },
            module: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
            "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
            "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
        },
        "./_isolated-hnrs": {
            types: {
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
            },
            development: {
                "edge-light": {
                    module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
                    "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
                    "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
                },
                worker: {
                    module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
                    "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
                    "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
                },
                workerd: {
                    module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
                    "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
                    "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
                },
                browser: {
                    module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js",
                    "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.mjs",
                    "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.js"
                },
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.js"
            },
            "edge-light": {
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
            },
            worker: {
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
            },
            workerd: {
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
            },
            browser: {
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.js"
            },
            module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
            "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
            "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
        },
        "./jsx-dev-runtime": {
            types: {
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
            },
            development: {
                "edge-light": {
                    module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
                    "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
                },
                worker: {
                    module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
                    "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
                },
                workerd: {
                    module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
                    "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
                },
                browser: {
                    module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.esm.js",
                    "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.mjs",
                    "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.js"
                },
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.js"
            },
            "edge-light": {
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
            },
            worker: {
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
            },
            workerd: {
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
            },
            browser: {
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.js"
            },
            module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
            "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
            "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
        },
        "./package.json": "./package.json",
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
            types: {
                "import": "./macro.d.mts",
                "default": "./macro.d.ts"
            },
            "default": "./macro.js"
        }
    },
    imports: {
        "#is-development": {
            development: "./src/conditions/true.ts",
            "default": "./src/conditions/false.ts"
        },
        "#is-browser": {
            "edge-light": "./src/conditions/false.ts",
            workerd: "./src/conditions/false.ts",
            worker: "./src/conditions/false.ts",
            browser: "./src/conditions/true.ts",
            "default": "./src/conditions/is-browser.ts"
        }
    },
    files: [
        "src",
        "dist",
        "jsx-runtime",
        "jsx-dev-runtime",
        "_isolated-hnrs",
        "types/css-prop.d.ts",
        "macro.*"
    ],
    sideEffects: false,
    author: "Emotion Contributors",
    license: "MIT",
    scripts: {
        "test:typescript": "dtslint types"
    },
    dependencies: {
        "@babel/runtime": "^7.18.3",
        "@emotion/babel-plugin": "^11.13.5",
        "@emotion/cache": "^11.14.0",
        "@emotion/serialize": "^1.3.3",
        "@emotion/use-insertion-effect-with-fallbacks": "^1.2.0",
        "@emotion/utils": "^1.4.2",
        "@emotion/weak-memoize": "^0.4.0",
        "hoist-non-react-statics": "^3.3.1"
    },
    peerDependencies: {
        react: ">=16.8.0"
    },
    peerDependenciesMeta: {
        "@types/react": {
            optional: true
        }
    },
    devDependencies: {
        "@definitelytyped/dtslint": "0.0.112",
        "@emotion/css": "11.13.5",
        "@emotion/css-prettifier": "1.2.0",
        "@emotion/server": "11.11.0",
        "@emotion/styled": "11.14.0",
        "@types/hoist-non-react-statics": "^3.3.5",
        "html-tag-names": "^1.1.2",
        react: "16.14.0",
        "svg-tag-names": "^1.1.1",
        typescript: "^5.4.5"
    },
    repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
    publishConfig: {
        access: "public"
    },
    "umd:main": "dist/emotion-react.umd.min.js",
    preconstruct: {
        entrypoints: [
            "./index.ts",
            "./jsx-runtime.ts",
            "./jsx-dev-runtime.ts",
            "./_isolated-hnrs.ts"
        ],
        umdName: "emotionReact",
        exports: {
            extra: {
                "./types/css-prop": "./types/css-prop.d.ts",
                "./macro": {
                    types: {
                        "import": "./macro.d.mts",
                        "default": "./macro.d.ts"
                    },
                    "default": "./macro.js"
                }
            }
        }
    }
};
var jsx = function jsx(type, props) {
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    if (props == null || !__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["h"].call(props, 'css')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"].apply(undefined, args);
    }
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["E"];
    createElementArgArray[1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["c"])(type, props);
    for(var i = 2; i < argsLength; i++){
        createElementArgArray[i] = args[i];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"].apply(null, createElementArgArray);
};
(function(_jsx) {
    var JSX;
    (function(_JSX) {})(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
})(jsx || (jsx = {}));
var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var Global = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["w"])(function(props, cache) {
    if (!warnedAboutCssPropForGlobal && (// probably using the custom createElement which
    // means it will be turned into a className prop
    // I don't really want to add it to the type since it shouldn't be used
    'className' in props && props.className || 'css' in props && props.css)) {
        console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
        warnedAboutCssPropForGlobal = true;
    }
    var styles = props.styles;
    var serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$serialize$40$1$2e$3$2e$3$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serializeStyles"])([
        styles
    ], undefined, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["T"]));
    // but it is based on a constant that will never change at runtime
    // it's effectively like having two implementations and switching them out
    // so it's not actually breaking anything
    var sheetRef = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$40$1$2e$2$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useInsertionEffectWithLayoutFallback"])({
        "Global.useInsertionEffectWithLayoutFallback": function() {
            var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675
            var sheet = new cache.sheet.constructor({
                key: key,
                nonce: cache.sheet.nonce,
                container: cache.sheet.container,
                speedy: cache.sheet.isSpeedy
            });
            var rehydrating = false;
            var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");
            if (cache.sheet.tags.length) {
                sheet.before = cache.sheet.tags[0];
            }
            if (node !== null) {
                rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s
                node.setAttribute('data-emotion', key);
                sheet.hydrate([
                    node
                ]);
            }
            sheetRef.current = [
                sheet,
                rehydrating
            ];
            return ({
                "Global.useInsertionEffectWithLayoutFallback": function() {
                    sheet.flush();
                }
            })["Global.useInsertionEffectWithLayoutFallback"];
        }
    }["Global.useInsertionEffectWithLayoutFallback"], [
        cache
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$40$1$2e$2$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useInsertionEffectWithLayoutFallback"])({
        "Global.useInsertionEffectWithLayoutFallback": function() {
            var sheetRefCurrent = sheetRef.current;
            var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
            if (rehydrating) {
                sheetRefCurrent[1] = false;
                return;
            }
            if (serialized.next !== undefined) {
                // insert keyframes
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$utils$40$1$2e$4$2e$2$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["insertStyles"])(cache, serialized.next, true);
            }
            if (sheet.tags.length) {
                // if this doesn't exist then it will be null so the style element will be appended
                var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
                sheet.before = element;
                sheet.flush();
            }
            cache.insert("", serialized, sheet, false);
        }
    }["Global.useInsertionEffectWithLayoutFallback"], [
        cache,
        serialized.name
    ]);
    return null;
});
{
    Global.displayName = 'EmotionGlobal';
}function css() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$serialize$40$1$2e$3$2e$3$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serializeStyles"])(args);
}
function keyframes() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name;
    return {
        name: name,
        styles: "@keyframes " + name + "{" + insertable.styles + "}",
        anim: 1,
        toString: function toString() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        }
    };
}
var classnames = function classnames(args) {
    var len = args.length;
    var i = 0;
    var cls = '';
    for(; i < len; i++){
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;
        switch(typeof arg){
            case 'boolean':
                break;
            case 'object':
                {
                    if (Array.isArray(arg)) {
                        toAdd = classnames(arg);
                    } else {
                        if (arg.styles !== undefined && arg.name !== undefined) {
                            console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
                        }
                        toAdd = '';
                        for(var k in arg){
                            if (arg[k] && k) {
                                toAdd && (toAdd += ' ');
                                toAdd += k;
                            }
                        }
                    }
                    break;
                }
            default:
                {
                    toAdd = arg;
                }
        }
        if (toAdd) {
            cls && (cls += ' ');
            cls += toAdd;
        }
    }
    return cls;
};
function merge(registered, css, className) {
    var registeredStyles = [];
    var rawClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$utils$40$1$2e$4$2e$2$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getRegisteredStyles"])(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
        return className;
    }
    return rawClassName + css(registeredStyles);
}
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serializedArr = _ref.serializedArr;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$40$1$2e$2$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useInsertionEffectAlwaysWithSyncFallback"])({
        "Insertion.useInsertionEffectAlwaysWithSyncFallback": function() {
            for(var i = 0; i < serializedArr.length; i++){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$utils$40$1$2e$4$2e$2$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["insertStyles"])(cache, serializedArr[i], false);
            }
        }
    }["Insertion.useInsertionEffectAlwaysWithSyncFallback"]);
    return null;
};
var ClassNames = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["w"])(function(props, cache) {
    var hasRendered = false;
    var serializedArr = [];
    var css = function css() {
        if (hasRendered && isDevelopment) {
            throw new Error('css can only be used during render');
        }
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$serialize$40$1$2e$3$2e$3$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serializeStyles"])(args, cache.registered);
        serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$utils$40$1$2e$4$2e$2$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["registerStyles"])(cache, serialized, false);
        return cache.key + "-" + serialized.name;
    };
    var cx = function cx() {
        if (hasRendered && isDevelopment) {
            throw new Error('cx can only be used during render');
        }
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
            args[_key2] = arguments[_key2];
        }
        return merge(cache.registered, css, classnames(args));
    };
    var content = {
        css: css,
        cx: cx,
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$489459f2$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["T"])
    };
    var ele = props.children(content);
    hasRendered = true;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Insertion, {
        cache: cache,
        serializedArr: serializedArr
    }), ele);
});
{
    ClassNames.displayName = 'EmotionClassNames';
}{
    var isBrowser = typeof document !== 'undefined'; // #1727, #2905 for some reason Jest and Vitest evaluate modules twice if some consuming module gets mocked
    var isTestEnv = typeof jest !== 'undefined' || typeof vi !== 'undefined';
    if (isBrowser && !isTestEnv) {
        // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
        var globalContext = typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
         : isBrowser ? window : /*TURBOPACK member replacement*/ __turbopack_context__.g;
        var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";
        if (globalContext[globalKey]) {
            console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
        }
        globalContext[globalKey] = true;
    }
};
}),
"[project]/site/node_modules/.pnpm/@emotion+utils@1.4.2/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRegisteredStyles",
    ()=>getRegisteredStyles,
    "insertStyles",
    ()=>insertStyles,
    "registerStyles",
    ()=>registerStyles
]);
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function(className) {
        if (registered[className] !== undefined) {
            registeredStyles.push(registered[className] + ";");
        } else if (className) {
            rawClassName += className + " ";
        }
    });
    return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (// class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache.registered[className] === undefined) {
        cache.registered[className] = serialized.styles;
    }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === undefined) {
        var current = serialized;
        do {
            cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
            current = current.next;
        }while (current !== undefined)
    }
};
;
}),
"[project]/site/node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>murmur2
]);
/* eslint-disable */ // Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash
    var k, i = 0, len = str.length;
    for(; len >= 4; ++i, len -= 4){
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
        k = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
        k ^= /* k >>> r: */ k >>> 24;
        h = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array
    switch(len){
        case 3:
            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 0xff;
            h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
}
;
}),
"[project]/site/node_modules/.pnpm/@emotion+unitless@0.10.0/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>unitlessKeys
]);
var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
;
}),
"[project]/site/node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeStyles",
    ()=>serializeStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$hash$40$0$2e$9$2e$2$2f$node_modules$2f40$emotion$2f$hash$2f$dist$2f$emotion$2d$hash$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$unitless$40$0$2e$10$2e$0$2f$node_modules$2f40$emotion$2f$unitless$2f$dist$2f$emotion$2d$unitless$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+unitless@0.10.0/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$memoize$40$0$2e$9$2e$0$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [client] (ecmascript)");
;
;
;
var isDevelopment = true;
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
};
var processStyleName = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$memoize$40$0$2e$9$2e$0$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
    switch(key){
        case 'animation':
        case 'animationName':
            {
                if (typeof value === 'string') {
                    return value.replace(animationRegex, function(match, p1, p2) {
                        cursor = {
                            name: p1,
                            styles: p2,
                            next: cursor
                        };
                        return p1;
                    });
                }
            }
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$unitless$40$0$2e$10$2e$0$2f$node_modules$2f40$emotion$2f$unitless$2f$dist$2f$emotion$2d$unitless$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
        return value + 'px';
    }
    return value;
};
{
    var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    var contentValues = [
        'normal',
        'none',
        'initial',
        'inherit',
        'unset'
    ];
    var oldProcessStyleValue = processStyleValue;
    var msPattern = /^-ms-/;
    var hyphenPattern = /-(.)/g;
    var hyphenatedCache = {};
    processStyleValue = function processStyleValue(key, value) {
        if (key === 'content') {
            if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
                throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
            }
        }
        var processed = oldProcessStyleValue(key, value);
        if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
            hyphenatedCache[key] = true;
            console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function(str, _char) {
                return _char.toUpperCase();
            }) + "?");
        }
        return processed;
    };
}var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
        return '';
    }
    var componentSelector = interpolation;
    if (componentSelector.__emotion_styles !== undefined) {
        if (String(componentSelector) === 'NO_COMPONENT_SELECTOR') {
            throw new Error(noComponentSelectorMessage);
        }
        return componentSelector;
    }
    switch(typeof interpolation){
        case 'boolean':
            {
                return '';
            }
        case 'object':
            {
                var keyframes = interpolation;
                if (keyframes.anim === 1) {
                    cursor = {
                        name: keyframes.name,
                        styles: keyframes.styles,
                        next: cursor
                    };
                    return keyframes.name;
                }
                var serializedStyles = interpolation;
                if (serializedStyles.styles !== undefined) {
                    var next = serializedStyles.next;
                    if (next !== undefined) {
                        // not the most efficient thing ever but this is a pretty rare case
                        // and there will be very few iterations of this generally
                        while(next !== undefined){
                            cursor = {
                                name: next.name,
                                styles: next.styles,
                                next: cursor
                            };
                            next = next.next;
                        }
                    }
                    var styles = serializedStyles.styles + ";";
                    return styles;
                }
                return createStringFromObject(mergedProps, registered, interpolation);
            }
        case 'function':
            {
                if (mergedProps !== undefined) {
                    var previousCursor = cursor;
                    var result = interpolation(mergedProps);
                    cursor = previousCursor;
                    return handleInterpolation(mergedProps, registered, result);
                } else {
                    console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
                }
                break;
            }
        case 'string':
            {
                var matched = [];
                var replaced = interpolation.replace(animationRegex, function(_match, _p1, p2) {
                    var fakeVarName = "animation" + matched.length;
                    matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
                    return "${" + fakeVarName + "}";
                });
                if (matched.length) {
                    console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, [
                        "`" + replaced + "`"
                    ]).join('\n') + "\n\nYou should wrap it with `css` like this:\n\ncss`" + replaced + "`");
                }
            }
            break;
    } // finalize string values (regular strings and functions interpolated into css calls)
    var asString = interpolation;
    if (registered == null) {
        return asString;
    }
    var cached = registered[asString];
    return cached !== undefined ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
    var string = '';
    if (Array.isArray(obj)) {
        for(var i = 0; i < obj.length; i++){
            string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
        }
    } else {
        for(var key in obj){
            var value = obj[key];
            if (typeof value !== 'object') {
                var asString = value;
                if (registered != null && registered[asString] !== undefined) {
                    string += key + "{" + registered[asString] + "}";
                } else if (isProcessableValue(asString)) {
                    string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
                }
            } else {
                if (key === 'NO_COMPONENT_SELECTOR' && isDevelopment) {
                    throw new Error(noComponentSelectorMessage);
                }
                if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
                    for(var _i = 0; _i < value.length; _i++){
                        if (isProcessableValue(value[_i])) {
                            string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
                        }
                    }
                } else {
                    var interpolated = handleInterpolation(mergedProps, registered, value);
                    switch(key){
                        case 'animation':
                        case 'animationName':
                            {
                                string += processStyleName(key) + ":" + interpolated + ";";
                                break;
                            }
                        default:
                            {
                                if (key === 'undefined') {
                                    console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                                }
                                string += key + "{" + interpolated + "}";
                            }
                    }
                }
            }
        }
    }
    return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list
var cursor;
function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
        return args[0];
    }
    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];
    if (strings == null || strings.raw === undefined) {
        stringMode = false;
        styles += handleInterpolation(mergedProps, registered, strings);
    } else {
        var asTemplateStringsArr = strings;
        if (asTemplateStringsArr[0] === undefined) {
            console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles += asTemplateStringsArr[0];
    } // we start at 1 since we've already handled the first arg
    for(var i = 1; i < args.length; i++){
        styles += handleInterpolation(mergedProps, registered, args[i]);
        if (stringMode) {
            var templateStringsArr = strings;
            if (templateStringsArr[i] === undefined) {
                console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
            }
            styles += templateStringsArr[i];
        }
    } // using a global regex with .exec is stateful so lastIndex has to be reset each time
    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5
    while((match = labelPattern.exec(styles)) !== null){
        identifierName += '-' + match[1];
    }
    var name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$hash$40$0$2e$9$2e$2$2f$node_modules$2f40$emotion$2f$hash$2f$dist$2f$emotion$2d$hash$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(styles) + identifierName;
    {
        var devStyles = {
            name: name,
            styles: styles,
            next: cursor,
            toString: function toString() {
                return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
            }
        };
        return devStyles;
    }
}
;
}),
"[project]/site/node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.2.3/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInsertionEffectAlwaysWithSyncFallback",
    ()=>useInsertionEffectAlwaysWithSyncFallback,
    "useInsertionEffectWithLayoutFallback",
    ()=>useInsertionEffectWithLayoutFallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/index.js [client] (ecmascript)");
;
var syncFallback = function syncFallback(create) {
    return create();
};
var useInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__['useInsertion' + 'Effect'] ? __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.useLayoutEffect;
;
}),
"[project]/site/node_modules/.pnpm/react-intersection-observer@9.16.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/react-intersection-observer/dist/index.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InView",
    ()=>InView,
    "defaultFallbackInView",
    ()=>defaultFallbackInView,
    "observe",
    ()=>observe,
    "useInView",
    ()=>useInView
]);
// src/InView.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/index.js [client] (ecmascript)");
"use client";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
// src/observe.ts
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function defaultFallbackInView(inView) {
    unsupportedValue = inView;
}
function getRootId(root) {
    if (!root) return "0";
    if (RootIds.has(root)) return RootIds.get(root);
    rootId += 1;
    RootIds.set(root, rootId.toString());
    return RootIds.get(root);
}
function optionsToId(options) {
    return Object.keys(options).sort().filter((key)=>options[key] !== void 0).map((key)=>{
        return `${key}_${key === "root" ? getRootId(options.root) : options[key]}`;
    }).toString();
}
function createObserver(options) {
    const id = optionsToId(options);
    let instance = observerMap.get(id);
    if (!instance) {
        const elements = /* @__PURE__ */ new Map();
        let thresholds;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                var _a;
                const inView = entry.isIntersecting && thresholds.some((threshold)=>entry.intersectionRatio >= threshold);
                if (options.trackVisibility && typeof entry.isVisible === "undefined") {
                    entry.isVisible = inView;
                }
                (_a = elements.get(entry.target)) == null ? void 0 : _a.forEach((callback)=>{
                    callback(inView, entry);
                });
            });
        }, options);
        thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [
            options.threshold || 0
        ]);
        instance = {
            id,
            observer,
            elements
        };
        observerMap.set(id, instance);
    }
    return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
    if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
        const bounds = element.getBoundingClientRect();
        callback(fallbackInView, {
            isIntersecting: fallbackInView,
            target: element,
            intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
            time: 0,
            boundingClientRect: bounds,
            intersectionRect: bounds,
            rootBounds: bounds
        });
        return ()=>{};
    }
    const { id, observer, elements } = createObserver(options);
    const callbacks = elements.get(element) || [];
    if (!elements.has(element)) {
        elements.set(element, callbacks);
    }
    callbacks.push(callback);
    observer.observe(element);
    return function unobserve() {
        callbacks.splice(callbacks.indexOf(callback), 1);
        if (callbacks.length === 0) {
            elements.delete(element);
            observer.unobserve(element);
        }
        if (elements.size === 0) {
            observer.disconnect();
            observerMap.delete(id);
        }
    };
}
// src/InView.tsx
function isPlainChildren(props) {
    return typeof props.children !== "function";
}
var InView = class extends __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        __publicField(this, "node", null);
        __publicField(this, "_unobserveCb", null);
        __publicField(this, "handleNode", (node)=>{
            if (this.node) {
                this.unobserve();
                if (!node && !this.props.triggerOnce && !this.props.skip) {
                    this.setState({
                        inView: !!this.props.initialInView,
                        entry: void 0
                    });
                }
            }
            this.node = node ? node : null;
            this.observeNode();
        });
        __publicField(this, "handleChange", (inView, entry)=>{
            if (inView && this.props.triggerOnce) {
                this.unobserve();
            }
            if (!isPlainChildren(this.props)) {
                this.setState({
                    inView,
                    entry
                });
            }
            if (this.props.onChange) {
                this.props.onChange(inView, entry);
            }
        });
        this.state = {
            inView: !!props.initialInView,
            entry: void 0
        };
    }
    componentDidMount() {
        this.unobserve();
        this.observeNode();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {
            this.unobserve();
            this.observeNode();
        }
    }
    componentWillUnmount() {
        this.unobserve();
    }
    observeNode() {
        if (!this.node || this.props.skip) return;
        const { threshold, root, rootMargin, trackVisibility, delay, fallbackInView } = this.props;
        this._unobserveCb = observe(this.node, this.handleChange, {
            threshold,
            root,
            rootMargin,
            // @ts-ignore
            trackVisibility,
            // @ts-ignore
            delay
        }, fallbackInView);
    }
    unobserve() {
        if (this._unobserveCb) {
            this._unobserveCb();
            this._unobserveCb = null;
        }
    }
    render() {
        const { children } = this.props;
        if (typeof children === "function") {
            const { inView, entry } = this.state;
            return children({
                inView,
                entry,
                ref: this.handleNode
            });
        }
        const { as, triggerOnce, threshold, root, rootMargin, onChange, skip, trackVisibility, delay, initialInView, fallbackInView, ...props } = this.props;
        return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](as || "div", {
            ref: this.handleNode,
            ...props
        }, children);
    }
};
;
function useInView({ threshold, delay, trackVisibility, rootMargin, root, triggerOnce, skip, initialInView, fallbackInView, onChange } = {}) {
    var _a;
    const [ref, setRef] = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](null);
    const callback = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](onChange);
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]({
        inView: !!initialInView,
        entry: void 0
    });
    callback.current = onChange;
    __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useInView.useEffect": ()=>{
            if (skip || !ref) return;
            let unobserve;
            unobserve = observe(ref, {
                "useInView.useEffect": (inView, entry)=>{
                    setState({
                        inView,
                        entry
                    });
                    if (callback.current) callback.current(inView, entry);
                    if (entry.isIntersecting && triggerOnce && unobserve) {
                        unobserve();
                        unobserve = void 0;
                    }
                }
            }["useInView.useEffect"], {
                root,
                rootMargin,
                threshold,
                // @ts-ignore
                trackVisibility,
                // @ts-ignore
                delay
            }, fallbackInView);
            return ({
                "useInView.useEffect": ()=>{
                    if (unobserve) {
                        unobserve();
                    }
                }
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        // If the threshold is an array, convert it to a string, so it won't change between renders.
        Array.isArray(threshold) ? threshold.toString() : threshold,
        ref,
        root,
        rootMargin,
        triggerOnce,
        skip,
        trackVisibility,
        fallbackInView,
        delay
    ]);
    const entryTarget = (_a = state.entry) == null ? void 0 : _a.target;
    const previousEntryTarget = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {
        previousEntryTarget.current = entryTarget;
        setState({
            inView: !!initialInView,
            entry: void 0
        });
    }
    const result = [
        setRef,
        state.inView,
        state.entry
    ];
    result.ref = result[0];
    result.inView = result[1];
    result.entry = result[2];
    return result;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/site/node_modules/.pnpm/react-awesome-reveal@4.3.1_@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3__rea_dff20e0b8ae7ca98d80dde93f2a8489a/node_modules/react-awesome-reveal/dist/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttentionSeeker",
    ()=>AttentionSeeker,
    "Bounce",
    ()=>Bounce,
    "Fade",
    ()=>Fade,
    "Flip",
    ()=>Flip,
    "Hinge",
    ()=>Hinge,
    "JackInTheBox",
    ()=>JackInTheBox,
    "Reveal",
    ()=>Reveal,
    "Roll",
    ()=>Roll,
    "Rotate",
    ()=>Rotate,
    "Slide",
    ()=>Slide,
    "Zoom",
    ()=>Zoom,
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.9_react@19.2.3/node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$intersection$2d$observer$40$9$2e$16$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/react-intersection-observer@9.16.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/react-intersection-observer/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/react-is@18.3.1/node_modules/react-is/index.js [client] (ecmascript)");
'use client';
;
;
;
;
;
const bounce = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;
const flash = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;
const headShake = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;
const heartBeat = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;
const jello = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;
const pulse = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;
const rubberBand = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;
const shake = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;
const shakeX = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;
const shakeY = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;
const swing = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;
const tada = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;
const wobble = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
const fadeIn = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const fadeInBottomLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const fadeInBottomRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const fadeInDown = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const fadeInDownBig = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const fadeInLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const fadeInLeftBig = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const fadeInRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const fadeInRightBig = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const fadeInTopLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const fadeInTopRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const fadeInUp = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const fadeInUpBig = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
function getAnimationCss({ duration = 1e3, delay = 0, timingFunction = "ease", keyframes = fadeInLeft, iterationCount = 1 }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"]`
    animation-duration: ${duration}ms;
    animation-timing-function: ${timingFunction};
    animation-delay: ${delay}ms;
    animation-name: ${keyframes};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${iterationCount};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `;
}
function isNullable(a) {
    return a == void 0;
}
function isStringLike(value) {
    return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}
function matchIf(onTrue, onFalse) {
    return (condition)=>condition ? onTrue() : onFalse();
}
function matchIfOrNull(onTrue) {
    return matchIf(onTrue, ()=>null);
}
function hideWhen(condition) {
    return matchIfOrNull(()=>({
            opacity: 0
        }))(condition);
}
const Reveal = (props)=>{
    const { cascade = false, damping = 0.5, delay = 0, duration = 1e3, fraction = 0, keyframes = fadeInLeft, triggerOnce = false, className, style, childClassName, childStyle, children, onVisibilityChange } = props;
    const animationStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Reveal.useMemo[animationStyles]": ()=>getAnimationCss({
                keyframes,
                duration
            })
    }["Reveal.useMemo[animationStyles]"], [
        duration,
        keyframes
    ]);
    if (isNullable(children)) return null;
    if (isStringLike(children)) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(TextReveal, {
        ...props,
        animationStyles,
        children: String(children)
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isFragment"])(children)) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(FragmentReveal, {
        ...props,
        animationStyles
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Children"].map(children, (node, index)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"])(node)) return null;
            const nodeDelay = delay + (cascade ? index * duration * damping : 0);
            switch(node.type){
                case "ol":
                case "ul":
                    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ClassNames"], {
                        children: ({ cx })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(node.type, {
                                ...node.props,
                                className: cx(className, node.props.className),
                                style: Object.assign({}, style, node.props.style),
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Reveal, {
                                    ...props,
                                    children: node.props.children
                                })
                            })
                    });
                case "li":
                    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$intersection$2d$observer$40$9$2e$16$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["InView"], {
                        threshold: fraction,
                        triggerOnce,
                        onChange: onVisibilityChange,
                        children: ({ inView, ref })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ClassNames"], {
                                children: ({ cx })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(node.type, {
                                        ...node.props,
                                        ref,
                                        className: cx(childClassName, node.props.className),
                                        css: matchIfOrNull(()=>animationStyles)(inView),
                                        style: Object.assign({}, childStyle, node.props.style, hideWhen(!inView), {
                                            animationDelay: nodeDelay + "ms"
                                        })
                                    })
                            })
                    });
                default:
                    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$intersection$2d$observer$40$9$2e$16$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["InView"], {
                        threshold: fraction,
                        triggerOnce,
                        onChange: onVisibilityChange,
                        children: ({ inView, ref })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                ref,
                                className,
                                css: matchIfOrNull(()=>animationStyles)(inView),
                                style: Object.assign({}, style, hideWhen(!inView), {
                                    animationDelay: nodeDelay + "ms"
                                }),
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ClassNames"], {
                                    children: ({ cx })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(node.type, {
                                            ...node.props,
                                            className: cx(childClassName, node.props.className),
                                            style: Object.assign({}, childStyle, node.props.style)
                                        })
                                })
                            })
                    });
            }
        })
    });
};
const textBaseStyles = {
    display: "inline-block",
    whiteSpace: "pre"
};
const TextReveal = (props)=>{
    const { animationStyles, cascade = false, damping = 0.5, delay = 0, duration = 1e3, fraction = 0, triggerOnce = false, className, style, children, onVisibilityChange } = props;
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$intersection$2d$observer$40$9$2e$16$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce,
        threshold: fraction,
        onChange: onVisibilityChange
    });
    return matchIf(()=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref,
            className,
            style: Object.assign({}, style, textBaseStyles),
            children: children.split("").map((char, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    css: matchIfOrNull(()=>animationStyles)(inView),
                    style: {
                        animationDelay: delay + index * duration * damping + "ms"
                    },
                    children: char
                }, index))
        }), ()=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(FragmentReveal, {
            ...props,
            children
        }))(cascade);
};
const FragmentReveal = (props)=>{
    const { animationStyles, fraction = 0, triggerOnce = false, className, style, children, onVisibilityChange } = props;
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$2d$intersection$2d$observer$40$9$2e$16$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce,
        threshold: fraction,
        onChange: onVisibilityChange
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref,
        className,
        css: matchIfOrNull(()=>animationStyles)(inView),
        style: Object.assign({}, style, hideWhen(!inView)),
        children
    });
};
function getStyles$7(effect) {
    switch(effect){
        case "bounce":
            return [
                bounce,
                {
                    transformOrigin: "center bottom"
                }
            ];
        case "flash":
            return [
                flash
            ];
        case "headShake":
            return [
                headShake,
                {
                    animationTimingFunction: "ease-in-out"
                }
            ];
        case "heartBeat":
            return [
                heartBeat,
                {
                    animationTimingFunction: "ease-in-out"
                }
            ];
        case "jello":
            return [
                jello,
                {
                    transformOrigin: "center"
                }
            ];
        case "pulse":
            return [
                pulse,
                {
                    animationTimingFunction: "ease-in-out"
                }
            ];
        case "rubberBand":
            return [
                rubberBand
            ];
        case "shake":
            return [
                shake
            ];
        case "shakeX":
            return [
                shakeX
            ];
        case "shakeY":
            return [
                shakeY
            ];
        case "swing":
            return [
                swing,
                {
                    transformOrigin: "top center"
                }
            ];
        case "tada":
            return [
                tada
            ];
        case "wobble":
            return [
                wobble
            ];
    }
}
const AttentionSeeker = (props)=>{
    const { effect = "bounce", style, ...rest } = props;
    const [keyframes, animationCss] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AttentionSeeker.useMemo": ()=>getStyles$7(effect)
    }["AttentionSeeker.useMemo"], [
        effect
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Reveal, {
        keyframes,
        style: Object.assign({}, style, animationCss),
        ...rest
    });
};
const bounceIn = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;
const bounceInDown = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
const bounceInLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
const bounceInRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
const bounceInUp = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
const bounceOut = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;
const bounceOutDown = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;
const bounceOutLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;
const bounceOutRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;
const bounceOutUp = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;
function getStyles$6(reverse, direction) {
    switch(direction){
        case "down":
            return reverse ? bounceOutDown : bounceInDown;
        case "left":
            return reverse ? bounceOutLeft : bounceInLeft;
        case "right":
            return reverse ? bounceOutRight : bounceInRight;
        case "up":
            return reverse ? bounceOutUp : bounceInUp;
        default:
            return reverse ? bounceOut : bounceIn;
    }
}
const Bounce = (props)=>{
    const { direction, reverse = false, ...rest } = props;
    const keyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Bounce.useMemo[keyframes]": ()=>getStyles$6(reverse, direction)
    }["Bounce.useMemo[keyframes]"], [
        direction,
        reverse
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Reveal, {
        keyframes,
        ...rest
    });
};
const fadeOut = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;
const fadeOutBottomLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;
const fadeOutBottomRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;
const fadeOutDown = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;
const fadeOutDownBig = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;
const fadeOutLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;
const fadeOutLeftBig = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;
const fadeOutRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;
const fadeOutRightBig = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;
const fadeOutTopLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;
const fadeOutTopRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;
const fadeOutUp = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;
const fadeOutUpBig = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;
function getStyles$5(big, reverse, direction) {
    switch(direction){
        case "bottom-left":
            return reverse ? fadeOutBottomLeft : fadeInBottomLeft;
        case "bottom-right":
            return reverse ? fadeOutBottomRight : fadeInBottomRight;
        case "down":
            return big ? reverse ? fadeOutDownBig : fadeInDownBig : reverse ? fadeOutDown : fadeInDown;
        case "left":
            return big ? reverse ? fadeOutLeftBig : fadeInLeftBig : reverse ? fadeOutLeft : fadeInLeft;
        case "right":
            return big ? reverse ? fadeOutRightBig : fadeInRightBig : reverse ? fadeOutRight : fadeInRight;
        case "top-left":
            return reverse ? fadeOutTopLeft : fadeInTopLeft;
        case "top-right":
            return reverse ? fadeOutTopRight : fadeInTopRight;
        case "up":
            return big ? reverse ? fadeOutUpBig : fadeInUpBig : reverse ? fadeOutUp : fadeInUp;
        default:
            return reverse ? fadeOut : fadeIn;
    }
}
const Fade = (props)=>{
    const { big = false, direction, reverse = false, ...rest } = props;
    const keyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Fade.useMemo[keyframes]": ()=>getStyles$5(big, reverse, direction)
    }["Fade.useMemo[keyframes]"], [
        big,
        direction,
        reverse
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Reveal, {
        keyframes,
        ...rest
    });
};
const flip = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;
const flipInX = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;
const flipInY = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;
const flipOutX = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;
const flipOutY = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;
function getStyles$4(reverse, direction) {
    switch(direction){
        case "horizontal":
            return reverse ? flipOutX : flipInX;
        case "vertical":
            return reverse ? flipOutY : flipInY;
        default:
            return flip;
    }
}
const animationCss$1 = {
    backfaceVisibility: "visible"
};
const Flip = (props)=>{
    const { direction, reverse = false, style, ...rest } = props;
    const keyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Flip.useMemo[keyframes]": ()=>getStyles$4(reverse, direction)
    }["Flip.useMemo[keyframes]"], [
        direction,
        reverse
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Reveal, {
        keyframes,
        style: Object.assign({}, style, animationCss$1),
        ...rest
    });
};
const hinge = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;
const jackInTheBox = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const rollIn = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const rollOut = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;
const animationCss = {
    transformOrigin: "top left"
};
const Hinge = (props)=>{
    const { style, ...rest } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Reveal, {
        keyframes: hinge,
        style: Object.assign({}, style, animationCss),
        ...rest
    });
};
const JackInTheBox = (props)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Reveal, {
        keyframes: jackInTheBox,
        ...props
    });
};
function getStyles$3(reverse) {
    return reverse ? rollOut : rollIn;
}
const Roll = (props)=>{
    const { reverse = false, ...rest } = props;
    const keyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Roll.useMemo[keyframes]": ()=>getStyles$3(reverse)
    }["Roll.useMemo[keyframes]"], [
        reverse
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Reveal, {
        keyframes,
        ...rest
    });
};
const rotateIn = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
const rotateInDownLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
const rotateInDownRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
const rotateInUpLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
const rotateInUpRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
const rotateOut = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;
const rotateOutDownLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;
const rotateOutDownRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;
const rotateOutUpLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;
const rotateOutUpRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;
function getStyles$2(reverse, direction) {
    switch(direction){
        case "bottom-left":
            return reverse ? [
                rotateOutDownLeft,
                {
                    transformOrigin: "left bottom"
                }
            ] : [
                rotateInDownLeft,
                {
                    transformOrigin: "left bottom"
                }
            ];
        case "bottom-right":
            return reverse ? [
                rotateOutDownRight,
                {
                    transformOrigin: "right bottom"
                }
            ] : [
                rotateInDownRight,
                {
                    transformOrigin: "right bottom"
                }
            ];
        case "top-left":
            return reverse ? [
                rotateOutUpLeft,
                {
                    transformOrigin: "left bottom"
                }
            ] : [
                rotateInUpLeft,
                {
                    transformOrigin: "left bottom"
                }
            ];
        case "top-right":
            return reverse ? [
                rotateOutUpRight,
                {
                    transformOrigin: "right bottom"
                }
            ] : [
                rotateInUpRight,
                {
                    transformOrigin: "right bottom"
                }
            ];
        default:
            return reverse ? [
                rotateOut,
                {
                    transformOrigin: "center"
                }
            ] : [
                rotateIn,
                {
                    transformOrigin: "center"
                }
            ];
    }
}
const Rotate = (props)=>{
    const { direction, reverse = false, style, ...rest } = props;
    const [keyframes, animationCss] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Rotate.useMemo": ()=>getStyles$2(reverse, direction)
    }["Rotate.useMemo"], [
        direction,
        reverse
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Reveal, {
        keyframes,
        style: Object.assign({}, style, animationCss),
        ...rest
    });
};
const slideInDown = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
const slideInLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
const slideInRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
const slideInUp = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
const slideOutDown = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;
const slideOutLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;
const slideOutRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;
const slideOutUp = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;
function getStyles$1(reverse, direction) {
    switch(direction){
        case "down":
            return reverse ? slideOutDown : slideInDown;
        case "right":
            return reverse ? slideOutRight : slideInRight;
        case "up":
            return reverse ? slideOutUp : slideInUp;
        case "left":
        default:
            return reverse ? slideOutLeft : slideInLeft;
    }
}
const Slide = (props)=>{
    const { direction, reverse = false, ...rest } = props;
    const keyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Slide.useMemo[keyframes]": ()=>getStyles$1(reverse, direction)
    }["Slide.useMemo[keyframes]"], [
        direction,
        reverse
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Reveal, {
        keyframes,
        ...rest
    });
};
const zoomIn = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;
const zoomInDown = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
const zoomInLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
const zoomInRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
const zoomInUp = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
const zoomOut = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;
const zoomOutDown = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
const zoomOutLeft = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;
const zoomOutRight = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;
const zoomOutUp = __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
function getStyles(reverse, direction) {
    switch(direction){
        case "down":
            return reverse ? zoomOutDown : zoomInDown;
        case "left":
            return reverse ? zoomOutLeft : zoomInLeft;
        case "right":
            return reverse ? zoomOutRight : zoomInRight;
        case "up":
            return reverse ? zoomOutUp : zoomInUp;
        default:
            return reverse ? zoomOut : zoomIn;
    }
}
const Zoom = (props)=>{
    const { direction, reverse = false, ...rest } = props;
    const keyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Zoom.useMemo[keyframes]": ()=>getStyles(reverse, direction)
    }["Zoom.useMemo[keyframes]"], [
        direction,
        reverse
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Reveal, {
        keyframes,
        ...rest
    });
};
;
}),
"[project]/site/node_modules/.pnpm/@fortawesome+fontawesome-svg-core@6.7.2/node_modules/@fortawesome/fontawesome-svg-core/index.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "config",
    ()=>config$1,
    "counter",
    ()=>counter,
    "dom",
    ()=>dom$1,
    "findIconDefinition",
    ()=>findIconDefinition$1,
    "icon",
    ()=>icon,
    "layer",
    ()=>layer,
    "library",
    ()=>library$1,
    "noAuto",
    ()=>noAuto$1,
    "parse",
    ()=>parse$1,
    "text",
    ()=>text,
    "toHtml",
    ()=>toHtml$1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _wrapRegExp() {
    _wrapRegExp = function(e, r) {
        return new BabelRegExp(e, void 0, r);
    };
    var e = RegExp.prototype, r = new WeakMap();
    function BabelRegExp(e, t, p) {
        var o = RegExp(e, t);
        return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
    }
    function buildGroups(e, t) {
        var p = r.get(t);
        return Object.keys(p).reduce(function(r, t) {
            var o = p[t];
            if ("number" == typeof o) r[t] = e[o];
            else {
                for(var i = 0; void 0 === e[o[i]] && i + 1 < o.length;)i++;
                r[t] = e[o[i]];
            }
            return r;
        }, Object.create(null));
    }
    return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(r) {
        var t = e.exec.call(this, r);
        if (t) {
            t.groups = buildGroups(t, this);
            var p = t.indices;
            p && (p.groups = buildGroups(p, this));
        }
        return t;
    }, BabelRegExp.prototype[Symbol.replace] = function(t, p) {
        if ("string" == typeof p) {
            var o = r.get(this);
            return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function(e, r) {
                var t = o[r];
                return "$" + (Array.isArray(t) ? t.join("$") : t);
            }));
        }
        if ("function" == typeof p) {
            var i = this;
            return e[Symbol.replace].call(this, t, function() {
                var e = arguments;
                return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
            });
        }
        return e[Symbol.replace].call(this, t, p);
    }, _wrapRegExp.apply(this, arguments);
}
const noop = ()=>{};
let _WINDOW = {};
let _DOCUMENT = {};
let _MUTATION_OBSERVER = null;
let _PERFORMANCE = {
    mark: noop,
    measure: noop
};
try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}
const { userAgent = '' } = _WINDOW.navigator || {};
const WINDOW = _WINDOW;
const DOCUMENT = _DOCUMENT;
const MUTATION_OBSERVER = _MUTATION_OBSERVER;
const PERFORMANCE = _PERFORMANCE;
const IS_BROWSER = !!WINDOW.document;
const IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
const IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
var p = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, g = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
var S = {
    classic: {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fab: "brands",
        "fa-brands": "brands"
    },
    duotone: {
        fa: "solid",
        fad: "solid",
        "fa-solid": "solid",
        "fa-duotone": "solid",
        fadr: "regular",
        "fa-regular": "regular",
        fadl: "light",
        "fa-light": "light",
        fadt: "thin",
        "fa-thin": "thin"
    },
    sharp: {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin"
    },
    "sharp-duotone": {
        fa: "solid",
        fasds: "solid",
        "fa-solid": "solid",
        fasdr: "regular",
        "fa-regular": "regular",
        fasdl: "light",
        "fa-light": "light",
        fasdt: "thin",
        "fa-thin": "thin"
    }
}, A = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
}, P = [
    "fa-classic",
    "fa-duotone",
    "fa-sharp",
    "fa-sharp-duotone"
];
var s = "classic", t = "duotone", r = "sharp", o = "sharp-duotone", L = [
    s,
    t,
    r,
    o
];
var G = {
    classic: {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
    },
    duotone: {
        900: "fad",
        400: "fadr",
        300: "fadl",
        100: "fadt"
    },
    sharp: {
        900: "fass",
        400: "fasr",
        300: "fasl",
        100: "fast"
    },
    "sharp-duotone": {
        900: "fasds",
        400: "fasdr",
        300: "fasdl",
        100: "fasdt"
    }
};
var lt = {
    "Font Awesome 6 Free": {
        900: "fas",
        400: "far"
    },
    "Font Awesome 6 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
    },
    "Font Awesome 6 Brands": {
        400: "fab",
        normal: "fab"
    },
    "Font Awesome 6 Duotone": {
        900: "fad",
        400: "fadr",
        normal: "fadr",
        300: "fadl",
        100: "fadt"
    },
    "Font Awesome 6 Sharp": {
        900: "fass",
        400: "fasr",
        normal: "fasr",
        300: "fasl",
        100: "fast"
    },
    "Font Awesome 6 Sharp Duotone": {
        900: "fasds",
        400: "fasdr",
        normal: "fasdr",
        300: "fasdl",
        100: "fasdt"
    }
};
var pt = new Map([
    [
        "classic",
        {
            defaultShortPrefixId: "fas",
            defaultStyleId: "solid",
            styleIds: [
                "solid",
                "regular",
                "light",
                "thin",
                "brands"
            ],
            futureStyleIds: [],
            defaultFontWeight: 900
        }
    ],
    [
        "sharp",
        {
            defaultShortPrefixId: "fass",
            defaultStyleId: "solid",
            styleIds: [
                "solid",
                "regular",
                "light",
                "thin"
            ],
            futureStyleIds: [],
            defaultFontWeight: 900
        }
    ],
    [
        "duotone",
        {
            defaultShortPrefixId: "fad",
            defaultStyleId: "solid",
            styleIds: [
                "solid",
                "regular",
                "light",
                "thin"
            ],
            futureStyleIds: [],
            defaultFontWeight: 900
        }
    ],
    [
        "sharp-duotone",
        {
            defaultShortPrefixId: "fasds",
            defaultStyleId: "solid",
            styleIds: [
                "solid",
                "regular",
                "light",
                "thin"
            ],
            futureStyleIds: [],
            defaultFontWeight: 900
        }
    ]
]), xt = {
    classic: {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        brands: "fab"
    },
    duotone: {
        solid: "fad",
        regular: "fadr",
        light: "fadl",
        thin: "fadt"
    },
    sharp: {
        solid: "fass",
        regular: "fasr",
        light: "fasl",
        thin: "fast"
    },
    "sharp-duotone": {
        solid: "fasds",
        regular: "fasdr",
        light: "fasdl",
        thin: "fasdt"
    }
};
var Ft = [
    "fak",
    "fa-kit",
    "fakd",
    "fa-kit-duotone"
], St = {
    kit: {
        fak: "kit",
        "fa-kit": "kit"
    },
    "kit-duotone": {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
    }
}, At = [
    "kit"
];
var Ct = {
    kit: {
        "fa-kit": "fak"
    },
    "kit-duotone": {
        "fa-kit-duotone": "fakd"
    }
};
var Lt = [
    "fak",
    "fakd"
], Wt = {
    kit: {
        fak: "fa-kit"
    },
    "kit-duotone": {
        fakd: "fa-kit-duotone"
    }
};
var Et = {
    kit: {
        kit: "fak"
    },
    "kit-duotone": {
        "kit-duotone": "fakd"
    }
};
var t$1 = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
}, r$1 = [
    "fa-classic",
    "fa-duotone",
    "fa-sharp",
    "fa-sharp-duotone"
];
var bt$1 = [
    "fak",
    "fa-kit",
    "fakd",
    "fa-kit-duotone"
];
var Yt = {
    "Font Awesome Kit": {
        400: "fak",
        normal: "fak"
    },
    "Font Awesome Kit Duotone": {
        400: "fakd",
        normal: "fakd"
    }
};
var ua = {
    classic: {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
    },
    duotone: {
        "fa-regular": "fadr",
        "fa-light": "fadl",
        "fa-thin": "fadt"
    },
    sharp: {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast"
    },
    "sharp-duotone": {
        "fa-solid": "fasds",
        "fa-regular": "fasdr",
        "fa-light": "fasdl",
        "fa-thin": "fasdt"
    }
}, I$1 = {
    classic: [
        "fas",
        "far",
        "fal",
        "fat",
        "fad"
    ],
    duotone: [
        "fadr",
        "fadl",
        "fadt"
    ],
    sharp: [
        "fass",
        "fasr",
        "fasl",
        "fast"
    ],
    "sharp-duotone": [
        "fasds",
        "fasdr",
        "fasdl",
        "fasdt"
    ]
}, ga = {
    classic: {
        fab: "fa-brands",
        fad: "fa-duotone",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin"
    },
    duotone: {
        fadr: "fa-regular",
        fadl: "fa-light",
        fadt: "fa-thin"
    },
    sharp: {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin"
    },
    "sharp-duotone": {
        fasds: "fa-solid",
        fasdr: "fa-regular",
        fasdl: "fa-light",
        fasdt: "fa-thin"
    }
}, x = [
    "fa-solid",
    "fa-regular",
    "fa-light",
    "fa-thin",
    "fa-duotone",
    "fa-brands"
], Ia = [
    "fa",
    "fas",
    "far",
    "fal",
    "fat",
    "fad",
    "fadr",
    "fadl",
    "fadt",
    "fab",
    "fass",
    "fasr",
    "fasl",
    "fast",
    "fasds",
    "fasdr",
    "fasdl",
    "fasdt",
    ...r$1,
    ...x
], m$1 = [
    "solid",
    "regular",
    "light",
    "thin",
    "duotone",
    "brands"
], c$1 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
], F$1 = c$1.concat([
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
]), ma = [
    ...Object.keys(I$1),
    ...m$1,
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "beat",
    "border",
    "fade",
    "beat-fade",
    "bounce",
    "flip-both",
    "flip-horizontal",
    "flip-vertical",
    "flip",
    "fw",
    "inverse",
    "layers-counter",
    "layers-text",
    "layers",
    "li",
    "pull-left",
    "pull-right",
    "pulse",
    "rotate-180",
    "rotate-270",
    "rotate-90",
    "rotate-by",
    "shake",
    "spin-pulse",
    "spin-reverse",
    "spin",
    "stack-1x",
    "stack-2x",
    "stack",
    "ul",
    t$1.GROUP,
    t$1.SWAP_OPACITY,
    t$1.PRIMARY,
    t$1.SECONDARY
].concat(c$1.map((a)=>"".concat(a, "x"))).concat(F$1.map((a)=>"w-".concat(a)));
var wa = {
    "Font Awesome 5 Free": {
        900: "fas",
        400: "far"
    },
    "Font Awesome 5 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal"
    },
    "Font Awesome 5 Brands": {
        400: "fab",
        normal: "fab"
    },
    "Font Awesome 5 Duotone": {
        900: "fad"
    }
};
const NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
const UNITS_IN_GRID = 16;
const DEFAULT_CSS_PREFIX = 'fa';
const DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
const DATA_FA_I2SVG = 'data-fa-i2svg';
const DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
const DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
const DATA_PREFIX = 'data-prefix';
const DATA_ICON = 'data-icon';
const HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
const MUTATION_APPROACH_ASYNC = 'async';
const TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = [
    'HTML',
    'HEAD',
    'STYLE',
    'SCRIPT'
];
const PRODUCTION = (()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === 'production';
    } catch (e$$1) {
        return false;
    }
})();
function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
        get (target, prop) {
            return prop in target ? target[prop] : target[s];
        }
    });
}
const _PREFIX_TO_STYLE = _objectSpread2({}, S);
// We changed FACSSClassesToStyleId in the icons repo to be canonical and as such, "classic" family does not have any
// duotone styles.  But we do still need duotone in _PREFIX_TO_STYLE below, so we are manually adding
// {'fa-duotone': 'duotone'}
_PREFIX_TO_STYLE[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    'fa-duotone': 'duotone'
}), S[s]), St['kit']), St['kit-duotone']);
const PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
const _STYLE_TO_PREFIX = _objectSpread2({}, xt);
// We changed FAStyleIdToShortPrefixId in the icons repo to be canonical and as such, "classic" family does not have any
// duotone styles.  But we do still need duotone in _STYLE_TO_PREFIX below, so we are manually adding {duotone: 'fad'}
_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    duotone: 'fad'
}), _STYLE_TO_PREFIX[s]), Et['kit']), Et['kit-duotone']);
const STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
const _PREFIX_TO_LONG_STYLE = _objectSpread2({}, ga);
_PREFIX_TO_LONG_STYLE[s] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[s]), Wt['kit']);
const PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
const _LONG_STYLE_TO_PREFIX = _objectSpread2({}, ua);
_LONG_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[s]), Ct['kit']);
const LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
const ICON_SELECTION_SYNTAX_PATTERN = p; // eslint-disable-line no-useless-escape
const LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
const FONT_FAMILY_PATTERN = g;
const _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, G);
const FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
const ATTRIBUTES_WATCHED_FOR_MUTATION = [
    'class',
    'data-prefix',
    'data-icon',
    'data-fa-transform',
    'data-fa-mask'
];
const DUOTONE_CLASSES = A;
const RESERVED_CLASSES = [
    ...At,
    ...ma
];
const initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');
    if (element) {
        return element.getAttribute(attr);
    }
}
function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    const attrs = [
        [
            'data-family-prefix',
            'familyPrefix'
        ],
        [
            'data-css-prefix',
            'cssPrefix'
        ],
        [
            'data-family-default',
            'familyDefault'
        ],
        [
            'data-style-default',
            'styleDefault'
        ],
        [
            'data-replacement-class',
            'replacementClass'
        ],
        [
            'data-auto-replace-svg',
            'autoReplaceSvg'
        ],
        [
            'data-auto-add-css',
            'autoAddCss'
        ],
        [
            'data-auto-a11y',
            'autoA11y'
        ],
        [
            'data-search-pseudo-elements',
            'searchPseudoElements'
        ],
        [
            'data-observe-mutations',
            'observeMutations'
        ],
        [
            'data-mutate-approach',
            'mutateApproach'
        ],
        [
            'data-keep-original-source',
            'keepOriginalSource'
        ],
        [
            'data-measure-performance',
            'measurePerformance'
        ],
        [
            'data-show-missing-icons',
            'showMissingIcons'
        ]
    ];
    attrs.forEach((_ref)=>{
        let [attr, key] = _ref;
        const val = coerce(getAttrConfig(attr));
        if (val !== undefined && val !== null) {
            initial[key] = val;
        }
    });
}
const _default = {
    styleDefault: 'solid',
    familyDefault: s,
    cssPrefix: DEFAULT_CSS_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
};
// familyPrefix is deprecated but we must still support it if present
if (initial.familyPrefix) {
    initial.cssPrefix = initial.familyPrefix;
}
const _config = _objectSpread2(_objectSpread2({}, _default), initial);
if (!_config.autoReplaceSvg) _config.observeMutations = false;
const config = {};
Object.keys(_default).forEach((key)=>{
    Object.defineProperty(config, key, {
        enumerable: true,
        set: function(val) {
            _config[key] = val;
            _onChangeCb.forEach((cb)=>cb(config));
        },
        get: function() {
            return _config[key];
        }
    });
});
// familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0
Object.defineProperty(config, 'familyPrefix', {
    enumerable: true,
    set: function(val) {
        _config.cssPrefix = val;
        _onChangeCb.forEach((cb)=>cb(config));
    },
    get: function() {
        return _config.cssPrefix;
    }
});
WINDOW.FontAwesomeConfig = config;
const _onChangeCb = [];
function onChange(cb) {
    _onChangeCb.push(cb);
    return ()=>{
        _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
    };
}
const d$2 = UNITS_IN_GRID;
const meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
};
function insertCss(css) {
    if (!css || !IS_DOM) {
        return;
    }
    const style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    const headChildren = DOCUMENT.head.childNodes;
    let beforeChild = null;
    for(let i = headChildren.length - 1; i > -1; i--){
        const child = headChildren[i];
        const tagName = (child.tagName || '').toUpperCase();
        if ([
            'STYLE',
            'LINK'
        ].indexOf(tagName) > -1) {
            beforeChild = child;
        }
    }
    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
}
const idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
    let size = 12;
    let id = '';
    while(size-- > 0){
        id += idPool[Math.random() * 62 | 0];
    }
    return id;
}
function toArray(obj) {
    const array = [];
    for(let i = (obj || []).length >>> 0; i--;){
        array[i] = obj[i];
    }
    return array;
}
function classArray(node) {
    if (node.classList) {
        return toArray(node.classList);
    } else {
        return (node.getAttribute('class') || '').split(' ').filter((i)=>i);
    }
}
function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce((acc, attributeName)=>{
        return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
}
function joinStyles(styles) {
    return Object.keys(styles || {}).reduce((acc, styleName)=>{
        return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
    }, '');
}
function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
    let { transform, containerWidth, iconWidth } = _ref;
    const outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    const inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    const path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
        outer,
        inner,
        path
    };
}
function transformForCss(_ref2) {
    let { transform, width = UNITS_IN_GRID, height = UNITS_IN_GRID, startCentered = false } = _ref2;
    let val = '';
    if (startCentered && IS_IE) {
        val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
    } else if (startCentered) {
        val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
    } else {
        val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
    }
    val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
}
var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-light: normal 300 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-thin: normal 100 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Sharp Duotone\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}";
function css() {
    const dcp = DEFAULT_CSS_PREFIX;
    const drc = DEFAULT_REPLACEMENT_CLASS;
    const fp = config.cssPrefix;
    const rc = config.replacementClass;
    let s = baseStyles;
    if (fp !== dcp || rc !== drc) {
        const dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
        const customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
        const rPatt = new RegExp("\\.".concat(drc), 'g');
        s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }
    return s;
}
let _cssInserted = false;
function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
        insertCss(css());
        _cssInserted = true;
    }
}
var InjectCSS = {
    mixout () {
        return {
            dom: {
                css,
                insertCss: ensureCss
            }
        };
    },
    hooks () {
        return {
            beforeDOMElementCreation () {
                ensureCss();
            },
            beforeI2svg () {
                ensureCss();
            }
        };
    }
};
const w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
const functions = [];
const listener = function() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map((fn)=>fn());
};
let loaded = false;
if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}
function domready(fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
}
function toHtml(abstractNodes) {
    const { tag, attributes = {}, children = [] } = abstractNodes;
    if (typeof abstractNodes === 'string') {
        return htmlEscape(abstractNodes);
    } else {
        return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
}
function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
        return {
            prefix,
            iconName,
            icon: mapping[prefix][iconName]
        };
    }
}
/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */ var bindInternal4 = function bindInternal4(func, thisContext) {
    return function(a, b, c, d) {
        return func.call(thisContext, a, b, c, d);
    };
};
/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */ var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn, i, key, result;
    if (initialValue === undefined) {
        i = 1;
        result = subject[keys[0]];
    } else {
        i = 0;
        result = initialValue;
    }
    for(; i < length; i++){
        key = keys[i];
        result = iterator(result, subject[key], key, subject);
    }
    return result;
};
/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ function ucs2decode(string) {
    const output = [];
    let counter = 0;
    const length = string.length;
    while(counter < length){
        const value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            const extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) {
                // eslint-disable-line eqeqeq
                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
                output.push(value);
                counter--;
            }
        } else {
            output.push(value);
        }
    }
    return output;
}
function toHex(unicode) {
    const decoded = ucs2decode(unicode);
    return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
    const size = string.length;
    let first = string.charCodeAt(index);
    let second;
    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
        second = string.charCodeAt(index + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) {
            return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
    }
    return first;
}
function normalizeIcons(icons) {
    return Object.keys(icons).reduce((acc, iconName)=>{
        const icon = icons[iconName];
        const expanded = !!icon.icon;
        if (expanded) {
            acc[icon.iconName] = icon.icon;
        } else {
            acc[iconName] = icon;
        }
        return acc;
    }, {});
}
function defineIcons(prefix, icons) {
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const { skipHooks = false } = params;
    const normalized = normalizeIcons(icons);
    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
        namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
        namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */ if (prefix === 'fas') {
        defineIcons('fa', icons);
    }
}
const duotonePathRe = [
    /*#__PURE__*/ _wrapRegExp(/path d="([^"]+)".*path d="([^"]+)"/, {
        d1: 1,
        d2: 2
    }),
    /*#__PURE__*/ _wrapRegExp(/path class="([^"]+)".*d="([^"]+)".*path class="([^"]+)".*d="([^"]+)"/, {
        cls1: 1,
        d1: 2,
        cls2: 3,
        d2: 4
    }),
    /*#__PURE__*/ _wrapRegExp(/path class="([^"]+)".*d="([^"]+)"/, {
        cls1: 1,
        d1: 2
    })
];
const { styles, shims } = namespace;
const FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
const PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce((acc, familyId)=>{
    acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
    return acc;
}, {});
let _defaultUsablePrefix = null;
let _byUnicode = {};
let _byLigature = {};
let _byOldName = {};
let _byOldUnicode = {};
let _byAlias = {};
function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
    const parts = cls.split('-');
    const prefix = parts[0];
    const iconName = parts.slice(1).join('-');
    if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
        return iconName;
    } else {
        return null;
    }
}
const build = ()=>{
    const lookup = (reducer)=>{
        return reduce(styles, (o$$1, style, prefix)=>{
            o$$1[prefix] = reduce(style, reducer, {});
            return o$$1;
        }, {});
    };
    _byUnicode = lookup((acc, icon, iconName)=>{
        if (icon[3]) {
            acc[icon[3]] = iconName;
        }
        if (icon[2]) {
            const aliases = icon[2].filter((a$$1)=>{
                return typeof a$$1 === 'number';
            });
            aliases.forEach((alias)=>{
                acc[alias.toString(16)] = iconName;
            });
        }
        return acc;
    });
    _byLigature = lookup((acc, icon, iconName)=>{
        acc[iconName] = iconName;
        if (icon[2]) {
            const aliases = icon[2].filter((a$$1)=>{
                return typeof a$$1 === 'string';
            });
            aliases.forEach((alias)=>{
                acc[alias] = iconName;
            });
        }
        return acc;
    });
    _byAlias = lookup((acc, icon, iconName)=>{
        const aliases = icon[2];
        acc[iconName] = iconName;
        aliases.forEach((alias)=>{
            acc[alias] = iconName;
        });
        return acc;
    });
    // If we have a Kit, we can't determine if regular is available since we
    // could be auto-fetching it. We'll have to assume that it is available.
    const hasRegular = 'far' in styles || config.autoFetchSvg;
    const shimLookups = reduce(shims, (acc, shim)=>{
        const maybeNameMaybeUnicode = shim[0];
        let prefix = shim[1];
        const iconName = shim[2];
        if (prefix === 'far' && !hasRegular) {
            prefix = 'fas';
        }
        if (typeof maybeNameMaybeUnicode === 'string') {
            acc.names[maybeNameMaybeUnicode] = {
                prefix,
                iconName
            };
        }
        if (typeof maybeNameMaybeUnicode === 'number') {
            acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
                prefix,
                iconName
            };
        }
        return acc;
    }, {
        names: {},
        unicodes: {}
    });
    _byOldName = shimLookups.names;
    _byOldUnicode = shimLookups.unicodes;
    _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
        family: config.familyDefault
    });
};
onChange((c$$1)=>{
    _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
        family: config.familyDefault
    });
});
build();
function byUnicode(prefix, unicode) {
    return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
    return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
    return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
    return _byOldName[name] || {
        prefix: null,
        iconName: null
    };
}
function byOldUnicode(unicode) {
    const oldUnicode = _byOldUnicode[unicode];
    const newUnicode = byUnicode('fas', unicode);
    return oldUnicode || (newUnicode ? {
        prefix: 'fas',
        iconName: newUnicode
    } : null) || {
        prefix: null,
        iconName: null
    };
}
function getDefaultUsablePrefix() {
    return _defaultUsablePrefix;
}
const emptyCanonicalIcon = ()=>{
    return {
        prefix: null,
        iconName: null,
        rest: []
    };
};
function getFamilyId(values) {
    let family = s;
    const famProps = FAMILY_NAMES.reduce((acc, familyId)=>{
        acc[familyId] = "".concat(config.cssPrefix, "-").concat(familyId);
        return acc;
    }, {});
    L.forEach((familyId)=>{
        if (values.includes(famProps[familyId]) || values.some((v$$1)=>PREFIXES_FOR_FAMILY[familyId].includes(v$$1))) {
            family = familyId;
        }
    });
    return family;
}
function getCanonicalPrefix(styleOrPrefix) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const { family = s } = params;
    const style = PREFIX_TO_STYLE[family][styleOrPrefix];
    // handles the exception of passing in only a family of 'duotone' with no style
    if (family === t && !styleOrPrefix) {
        return 'fad';
    }
    const prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
    const defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
    const result = prefix || defined || null;
    return result;
}
function moveNonFaClassesToRest(classNames) {
    let rest = [];
    let iconName = null;
    classNames.forEach((cls)=>{
        const result = getIconName(config.cssPrefix, cls);
        if (result) {
            iconName = result;
        } else if (cls) {
            rest.push(cls);
        }
    });
    return {
        iconName,
        rest
    };
}
function sortedUniqueValues(arr) {
    return arr.sort().filter((value, index, arr)=>{
        return arr.indexOf(value) === index;
    });
}
function getCanonicalIcon(values) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const { skipLookups = false } = params;
    let givenPrefix = null;
    const faCombinedClasses = Ia.concat(bt$1);
    const faStyleOrFamilyClasses = sortedUniqueValues(values.filter((cls)=>faCombinedClasses.includes(cls)));
    const nonStyleOrFamilyClasses = sortedUniqueValues(values.filter((cls)=>!Ia.includes(cls)));
    const faStyles = faStyleOrFamilyClasses.filter((cls)=>{
        givenPrefix = cls;
        return !P.includes(cls);
    });
    const [styleFromValues = null] = faStyles;
    const family = getFamilyId(faStyleOrFamilyClasses);
    const canonical = _objectSpread2(_objectSpread2({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)), {}, {
        prefix: getCanonicalPrefix(styleFromValues, {
            family
        })
    });
    return _objectSpread2(_objectSpread2(_objectSpread2({}, canonical), getDefaultCanonicalPrefix({
        values,
        family,
        styles,
        config,
        canonical,
        givenPrefix
    })), applyShimAndAlias(skipLookups, givenPrefix, canonical));
}
function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
    let { prefix, iconName } = canonical;
    if (skipLookups || !prefix || !iconName) {
        return {
            prefix,
            iconName
        };
    }
    const shim = givenPrefix === 'fa' ? byOldName(iconName) : {};
    const aliasIconName = byAlias(prefix, iconName);
    iconName = shim.iconName || aliasIconName || iconName;
    prefix = shim.prefix || prefix;
    if (prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
        // Allow a fallback from the regular style to solid if regular is not available
        // but only if we aren't auto-fetching SVGs
        prefix = 'fas';
    }
    return {
        prefix,
        iconName
    };
}
const newCanonicalFamilies = L.filter((familyId)=>{
    return familyId !== s || familyId !== t;
});
const newCanonicalStyles = Object.keys(ga).filter((key)=>key !== s).map((key)=>Object.keys(ga[key])).flat();
function getDefaultCanonicalPrefix(prefixOptions) {
    const { values, family, canonical, givenPrefix = '', styles = {}, config: config$$1 = {} } = prefixOptions;
    const isDuotoneFamily = family === t;
    const valuesHasDuotone = values.includes('fa-duotone') || values.includes('fad');
    const defaultFamilyIsDuotone = config$$1.familyDefault === 'duotone';
    const canonicalPrefixIsDuotone = canonical.prefix === 'fad' || canonical.prefix === 'fa-duotone';
    if (!isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)) {
        canonical.prefix = 'fad';
    }
    if (values.includes('fa-brands') || values.includes('fab')) {
        canonical.prefix = 'fab';
    }
    if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
        const validPrefix = Object.keys(styles).find((key)=>newCanonicalStyles.includes(key));
        if (validPrefix || config$$1.autoFetchSvg) {
            const defaultPrefix = pt.get(family).defaultShortPrefixId;
            canonical.prefix = defaultPrefix;
            canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
        }
    }
    if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
        // The fa prefix is not canonical. So if it has made it through until this point
        // we will shift it to the correct prefix.
        canonical.prefix = getDefaultUsablePrefix() || 'fas';
    }
    return canonical;
}
class Library {
    constructor(){
        this.definitions = {};
    }
    add() {
        for(var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++){
            definitions[_key] = arguments[_key];
        }
        const additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach((key)=>{
            this.definitions[key] = _objectSpread2(_objectSpread2({}, this.definitions[key] || {}), additions[key]);
            defineIcons(key, additions[key]);
            // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change
            const longPrefix = PREFIX_TO_LONG_STYLE[s][key];
            if (longPrefix) defineIcons(longPrefix, additions[key]);
            build();
        });
    }
    reset() {
        this.definitions = {};
    }
    _pullDefinitions(additions, definition) {
        const normalized = definition.prefix && definition.iconName && definition.icon ? {
            0: definition
        } : definition;
        Object.keys(normalized).map((key)=>{
            const { prefix, iconName, icon } = normalized[key];
            const aliases = icon[2];
            if (!additions[prefix]) additions[prefix] = {};
            if (aliases.length > 0) {
                aliases.forEach((alias)=>{
                    if (typeof alias === 'string') {
                        additions[prefix][alias] = icon;
                    }
                });
            }
            additions[prefix][iconName] = icon;
        });
        return additions;
    }
}
let _plugins = [];
let _hooks = {};
const providers = {};
const defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
    let { mixoutsTo: obj } = _ref;
    _plugins = nextPlugins;
    _hooks = {};
    Object.keys(providers).forEach((k)=>{
        if (defaultProviderKeys.indexOf(k) === -1) {
            delete providers[k];
        }
    });
    _plugins.forEach((plugin)=>{
        const mixout = plugin.mixout ? plugin.mixout() : {};
        Object.keys(mixout).forEach((tk)=>{
            if (typeof mixout[tk] === 'function') {
                obj[tk] = mixout[tk];
            }
            if (typeof mixout[tk] === 'object') {
                Object.keys(mixout[tk]).forEach((sk)=>{
                    if (!obj[tk]) {
                        obj[tk] = {};
                    }
                    obj[tk][sk] = mixout[tk][sk];
                });
            }
        });
        if (plugin.hooks) {
            const hooks = plugin.hooks();
            Object.keys(hooks).forEach((hook)=>{
                if (!_hooks[hook]) {
                    _hooks[hook] = [];
                }
                _hooks[hook].push(hooks[hook]);
            });
        }
        if (plugin.provides) {
            plugin.provides(providers);
        }
    });
    return obj;
}
function chainHooks(hook, accumulator) {
    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        args[_key - 2] = arguments[_key];
    }
    const hookFns = _hooks[hook] || [];
    hookFns.forEach((hookFn)=>{
        accumulator = hookFn.apply(null, [
            accumulator,
            ...args
        ]); // eslint-disable-line no-useless-call
    });
    return accumulator;
}
function callHooks(hook) {
    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
        args[_key2 - 1] = arguments[_key2];
    }
    const hookFns = _hooks[hook] || [];
    hookFns.forEach((hookFn)=>{
        hookFn.apply(null, args);
    });
    return undefined;
}
function callProvided() {
    const hook = arguments[0];
    const args = Array.prototype.slice.call(arguments, 1);
    return providers[hook] ? providers[hook].apply(null, args) : undefined;
}
function findIconDefinition(iconLookup) {
    if (iconLookup.prefix === 'fa') {
        iconLookup.prefix = 'fas';
    }
    let { iconName } = iconLookup;
    const prefix = iconLookup.prefix || getDefaultUsablePrefix();
    if (!iconName) return;
    iconName = byAlias(prefix, iconName) || iconName;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
const library = new Library();
const noAuto = ()=>{
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    callHooks('noAuto');
};
const dom = {
    i2svg: function() {
        let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (IS_DOM) {
            callHooks('beforeI2svg', params);
            callProvided('pseudoElements2svg', params);
            return callProvided('i2svg', params);
        } else {
            return Promise.reject(new Error('Operation requires a DOM of some kind.'));
        }
    },
    watch: function() {
        let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        const { autoReplaceSvgRoot } = params;
        if (config.autoReplaceSvg === false) {
            config.autoReplaceSvg = true;
        }
        config.observeMutations = true;
        domready(()=>{
            autoReplace({
                autoReplaceSvgRoot
            });
            callHooks('watch', params);
        });
    }
};
const parse = {
    icon: (icon)=>{
        if (icon === null) {
            return null;
        }
        if (typeof icon === 'object' && icon.prefix && icon.iconName) {
            return {
                prefix: icon.prefix,
                iconName: byAlias(icon.prefix, icon.iconName) || icon.iconName
            };
        }
        if (Array.isArray(icon) && icon.length === 2) {
            const iconName = icon[1].indexOf('fa-') === 0 ? icon[1].slice(3) : icon[1];
            const prefix = getCanonicalPrefix(icon[0]);
            return {
                prefix,
                iconName: byAlias(prefix, iconName) || iconName
            };
        }
        if (typeof icon === 'string' && (icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
            const canonicalIcon = getCanonicalIcon(icon.split(' '), {
                skipLookups: true
            });
            return {
                prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
                iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
            };
        }
        if (typeof icon === 'string') {
            const prefix = getDefaultUsablePrefix();
            return {
                prefix,
                iconName: byAlias(prefix, icon) || icon
            };
        }
    }
};
const api = {
    noAuto,
    config,
    dom,
    parse,
    library,
    findIconDefinition,
    toHtml
};
const autoReplace = function() {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const { autoReplaceSvgRoot = DOCUMENT } = params;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
        node: autoReplaceSvgRoot
    });
};
function domVariants(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
        get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
        get: function() {
            return val.abstract.map((a)=>toHtml(a));
        }
    });
    Object.defineProperty(val, 'node', {
        get: function() {
            if (!IS_DOM) return;
            const container = DOCUMENT.createElement('div');
            container.innerHTML = val.html;
            return container.children;
        }
    });
    return val;
}
function asIcon(_ref) {
    let { children, main, mask, attributes, styles, transform } = _ref;
    if (transformIsMeaningful(transform) && main.found && !mask.found) {
        const { width, height } = main;
        const offset = {
            x: width / height / 2,
            y: 0.5
        };
        attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
            'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
        }));
    }
    return [
        {
            tag: 'svg',
            attributes,
            children
        }
    ];
}
function asSymbol(_ref) {
    let { prefix, iconName, children, attributes, symbol } = _ref;
    const id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
    return [
        {
            tag: 'svg',
            attributes: {
                style: 'display: none;'
            },
            children: [
                {
                    tag: 'symbol',
                    attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
                        id
                    }),
                    children
                }
            ]
        }
    ];
}
function makeInlineSvgAbstract(params) {
    const { icons: { main, mask }, prefix, iconName, transform, symbol, title, maskId, titleId, extra, watchable = false } = params;
    const { width, height } = mask.found ? mask : main;
    const isUploadedIcon = Lt.includes(prefix);
    const attrClass = [
        config.replacementClass,
        iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''
    ].filter((c$$1)=>extra.classes.indexOf(c$$1) === -1).filter((c$$1)=>c$$1 !== '' || !!c$$1).concat(extra.classes).join(' ');
    let content = {
        children: [],
        attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
            'data-prefix': prefix,
            'data-icon': iconName,
            'class': attrClass,
            'role': extra.attributes.role || 'img',
            'xmlns': 'http://www.w3.org/2000/svg',
            'viewBox': "0 0 ".concat(width, " ").concat(height)
        })
    };
    const uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
        width: "".concat(width / height * 16 * 0.0625, "em")
    } : {};
    if (watchable) {
        content.attributes[DATA_FA_I2SVG] = '';
    }
    if (title) {
        content.children.push({
            tag: 'title',
            attributes: {
                id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
            },
            children: [
                title
            ]
        });
        delete content.attributes.title;
    }
    const args = _objectSpread2(_objectSpread2({}, content), {}, {
        prefix,
        iconName,
        main,
        mask,
        maskId,
        transform,
        symbol,
        styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
    });
    const { children, attributes } = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
        children: [],
        attributes: {}
    } : callProvided('generateAbstractIcon', args) || {
        children: [],
        attributes: {}
    };
    args.children = children;
    args.attributes = attributes;
    if (symbol) {
        return asSymbol(args);
    } else {
        return asIcon(args);
    }
}
function makeLayersTextAbstract(params) {
    const { content, width, height, transform, title, extra, watchable = false } = params;
    const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
        'title': title
    } : {}), {}, {
        'class': extra.classes.join(' ')
    });
    if (watchable) {
        attributes[DATA_FA_I2SVG] = '';
    }
    const styles = _objectSpread2({}, extra.styles);
    if (transformIsMeaningful(transform)) {
        styles['transform'] = transformForCss({
            transform,
            startCentered: true,
            width,
            height
        });
        styles['-webkit-transform'] = styles['transform'];
    }
    const styleString = joinStyles(styles);
    if (styleString.length > 0) {
        attributes['style'] = styleString;
    }
    const val = [];
    val.push({
        tag: 'span',
        attributes,
        children: [
            content
        ]
    });
    if (title) {
        val.push({
            tag: 'span',
            attributes: {
                class: 'sr-only'
            },
            children: [
                title
            ]
        });
    }
    return val;
}
function makeLayersCounterAbstract(params) {
    const { content, title, extra } = params;
    const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
        'title': title
    } : {}), {}, {
        'class': extra.classes.join(' ')
    });
    const styleString = joinStyles(extra.styles);
    if (styleString.length > 0) {
        attributes['style'] = styleString;
    }
    const val = [];
    val.push({
        tag: 'span',
        attributes,
        children: [
            content
        ]
    });
    if (title) {
        val.push({
            tag: 'span',
            attributes: {
                class: 'sr-only'
            },
            children: [
                title
            ]
        });
    }
    return val;
}
const { styles: styles$1 } = namespace;
function asFoundIcon(icon) {
    const width = icon[0];
    const height = icon[1];
    const [vectorData] = icon.slice(4);
    let element = null;
    if (Array.isArray(vectorData)) {
        element = {
            tag: 'g',
            attributes: {
                class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
            },
            children: [
                {
                    tag: 'path',
                    attributes: {
                        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
                        fill: 'currentColor',
                        d: vectorData[0]
                    }
                },
                {
                    tag: 'path',
                    attributes: {
                        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
                        fill: 'currentColor',
                        d: vectorData[1]
                    }
                }
            ]
        };
    } else {
        element = {
            tag: 'path',
            attributes: {
                fill: 'currentColor',
                d: vectorData
            }
        };
    }
    return {
        found: true,
        width,
        height,
        icon: element
    };
}
const missingIconResolutionMixin = {
    found: false,
    width: 512,
    height: 512
};
function maybeNotifyMissing(iconName, prefix) {
    if (!PRODUCTION && !config.showMissingIcons && iconName) {
        console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
    }
}
function findIcon(iconName, prefix) {
    let givenPrefix = prefix;
    if (prefix === 'fa' && config.styleDefault !== null) {
        prefix = getDefaultUsablePrefix();
    }
    return new Promise((resolve, reject)=>{
        if (givenPrefix === 'fa') {
            const shim = byOldName(iconName) || {};
            iconName = shim.iconName || iconName;
            prefix = shim.prefix || prefix;
        }
        if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
            const icon = styles$1[prefix][iconName];
            return resolve(asFoundIcon(icon));
        }
        maybeNotifyMissing(iconName, prefix);
        resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
            icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
        }));
    });
}
const noop$1 = ()=>{};
const p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
};
const preamble = "FA \"6.7.2\"";
const begin = (name)=>{
    p$2.mark("".concat(preamble, " ").concat(name, " begins"));
    return ()=>end(name);
};
const end = (name)=>{
    p$2.mark("".concat(preamble, " ").concat(name, " ends"));
    p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
    begin,
    end
};
const noop$2 = ()=>{};
function isWatched(node) {
    const i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === 'string';
}
function hasPrefixAndIcon(node) {
    const prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
    const icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
    return prefix && icon;
}
function hasBeenReplaced(node) {
    return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
    if (config.autoReplaceSvg === true) {
        return mutators.replace;
    }
    const mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
}
function createElementNS(tag) {
    return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
}
function createElement(tag) {
    return DOCUMENT.createElement(tag);
}
function convertSVG(abstractObj) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const { ceFn = abstractObj.tag === 'svg' ? createElementNS : createElement } = params;
    if (typeof abstractObj === 'string') {
        return DOCUMENT.createTextNode(abstractObj);
    }
    const tag = ceFn(abstractObj.tag);
    Object.keys(abstractObj.attributes || []).forEach(function(key) {
        tag.setAttribute(key, abstractObj.attributes[key]);
    });
    const children = abstractObj.children || [];
    children.forEach(function(child) {
        tag.appendChild(convertSVG(child, {
            ceFn
        }));
    });
    return tag;
}
function nodeAsComment(node) {
    let comment = " ".concat(node.outerHTML, " ");
    /* BEGIN.ATTRIBUTION */ comment = "".concat(comment, "Font Awesome fontawesome.com ");
    /* END.ATTRIBUTION */ return comment;
}
const mutators = {
    replace: function(mutation) {
        const node = mutation[0];
        if (node.parentNode) {
            mutation[1].forEach((abstract)=>{
                node.parentNode.insertBefore(convertSVG(abstract), node);
            });
            if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
                let comment = DOCUMENT.createComment(nodeAsComment(node));
                node.parentNode.replaceChild(comment, node);
            } else {
                node.remove();
            }
        }
    },
    nest: function(mutation) {
        const node = mutation[0];
        const abstract = mutation[1];
        // If we already have a replaced node we do not want to continue nesting within it.
        // Short-circuit to the standard replacement
        if (~classArray(node).indexOf(config.replacementClass)) {
            return mutators.replace(mutation);
        }
        const forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
        delete abstract[0].attributes.id;
        if (abstract[0].attributes.class) {
            const splitClasses = abstract[0].attributes.class.split(' ').reduce((acc, cls)=>{
                if (cls === config.replacementClass || cls.match(forSvg)) {
                    acc.toSvg.push(cls);
                } else {
                    acc.toNode.push(cls);
                }
                return acc;
            }, {
                toNode: [],
                toSvg: []
            });
            abstract[0].attributes.class = splitClasses.toSvg.join(' ');
            if (splitClasses.toNode.length === 0) {
                node.removeAttribute('class');
            } else {
                node.setAttribute('class', splitClasses.toNode.join(' '));
            }
        }
        const newInnerHTML = abstract.map((a)=>toHtml(a)).join('\n');
        node.setAttribute(DATA_FA_I2SVG, '');
        node.innerHTML = newInnerHTML;
    }
};
function performOperationSync(op) {
    op();
}
function perform(mutations, callback) {
    const callbackFunction = typeof callback === 'function' ? callback : noop$2;
    if (mutations.length === 0) {
        callbackFunction();
    } else {
        let frame = performOperationSync;
        if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
            frame = WINDOW.requestAnimationFrame || performOperationSync;
        }
        frame(()=>{
            const mutator = getMutator();
            const mark = perf.begin('mutate');
            mutations.map(mutator);
            mark();
            callbackFunction();
        });
    }
}
let disabled = false;
function disableObservation() {
    disabled = true;
}
function enableObservation() {
    disabled = false;
}
let mo = null;
function observe(options) {
    if (!MUTATION_OBSERVER) {
        return;
    }
    if (!config.observeMutations) {
        return;
    }
    const { treeCallback = noop$2, nodeCallback = noop$2, pseudoElementsCallback = noop$2, observeMutationsRoot = DOCUMENT } = options;
    mo = new MUTATION_OBSERVER((objects)=>{
        if (disabled) return;
        const defaultPrefix = getDefaultUsablePrefix();
        toArray(objects).forEach((mutationRecord)=>{
            if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
                if (config.searchPseudoElements) {
                    pseudoElementsCallback(mutationRecord.target);
                }
                treeCallback(mutationRecord.target);
            }
            if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
                pseudoElementsCallback(mutationRecord.target.parentNode);
            }
            if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
                if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
                    const { prefix, iconName } = getCanonicalIcon(classArray(mutationRecord.target));
                    mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
                    if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
                } else if (hasBeenReplaced(mutationRecord.target)) {
                    nodeCallback(mutationRecord.target);
                }
            }
        });
    });
    if (!IS_DOM) return;
    mo.observe(observeMutationsRoot, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
    });
}
function disconnect() {
    if (!mo) return;
    mo.disconnect();
}
function styleParser(node) {
    const style = node.getAttribute('style');
    let val = [];
    if (style) {
        val = style.split(';').reduce((acc, style)=>{
            const styles = style.split(':');
            const prop = styles[0];
            const value = styles.slice(1);
            if (prop && value.length > 0) {
                acc[prop] = value.join(':').trim();
            }
            return acc;
        }, {});
    }
    return val;
}
function classParser(node) {
    const existingPrefix = node.getAttribute('data-prefix');
    const existingIconName = node.getAttribute('data-icon');
    const innerText = node.innerText !== undefined ? node.innerText.trim() : '';
    let val = getCanonicalIcon(classArray(node));
    if (!val.prefix) {
        val.prefix = getDefaultUsablePrefix();
    }
    if (existingPrefix && existingIconName) {
        val.prefix = existingPrefix;
        val.iconName = existingIconName;
    }
    if (val.iconName && val.prefix) {
        return val;
    }
    if (val.prefix && innerText.length > 0) {
        val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
    }
    if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
        val.iconName = node.firstChild.data;
    }
    return val;
}
function attributesParser(node) {
    const extraAttributes = toArray(node.attributes).reduce((acc, attr)=>{
        if (acc.name !== 'class' && acc.name !== 'style') {
            acc[attr.name] = attr.value;
        }
        return acc;
    }, {});
    const title = node.getAttribute('title');
    const titleId = node.getAttribute('data-fa-title-id');
    if (config.autoA11y) {
        if (title) {
            extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
            extraAttributes['aria-hidden'] = 'true';
            extraAttributes['focusable'] = 'false';
        }
    }
    return extraAttributes;
}
function blankMeta() {
    return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: meaninglessTransform,
        symbol: false,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        extra: {
            classes: [],
            styles: {},
            attributes: {}
        }
    };
}
function parseMeta(node) {
    let parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        styleParser: true
    };
    const { iconName, prefix, rest: extraClasses } = classParser(node);
    const extraAttributes = attributesParser(node);
    const pluginMeta = chainHooks('parseNodeAttributes', {}, node);
    let extraStyles = parser.styleParser ? styleParser(node) : [];
    return _objectSpread2({
        iconName,
        title: node.getAttribute('title'),
        titleId: node.getAttribute('data-fa-title-id'),
        prefix,
        transform: meaninglessTransform,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        symbol: false,
        extra: {
            classes: extraClasses,
            styles: extraStyles,
            attributes: extraAttributes
        }
    }, pluginMeta);
}
const { styles: styles$2 } = namespace;
function generateMutation(node) {
    const nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
        styleParser: false
    }) : parseMeta(node);
    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
        return callProvided('generateLayersText', node, nodeMeta);
    } else {
        return callProvided('generateSvgReplacementMutation', node, nodeMeta);
    }
}
function getKnownPrefixes() {
    return [
        ...Ft,
        ...Ia
    ];
}
function onTree(root) {
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!IS_DOM) return Promise.resolve();
    const htmlClassList = DOCUMENT.documentElement.classList;
    const hclAdd = (suffix)=>htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    const hclRemove = (suffix)=>htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    const prefixes = config.autoFetchSvg ? getKnownPrefixes() : P.concat(Object.keys(styles$2));
    if (!prefixes.includes('fa')) {
        prefixes.push('fa');
    }
    const prefixesDomQuery = [
        ".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")
    ].concat(prefixes.map((p$$1)=>".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])"))).join(', ');
    if (prefixesDomQuery.length === 0) {
        return Promise.resolve();
    }
    let candidates = [];
    try {
        candidates = toArray(root.querySelectorAll(prefixesDomQuery));
    } catch (e$$1) {
    // noop
    }
    if (candidates.length > 0) {
        hclAdd('pending');
        hclRemove('complete');
    } else {
        return Promise.resolve();
    }
    const mark = perf.begin('onTree');
    const mutations = candidates.reduce((acc, node)=>{
        try {
            const mutation = generateMutation(node);
            if (mutation) {
                acc.push(mutation);
            }
        } catch (e$$1) {
            if (!PRODUCTION) {
                if (e$$1.name === 'MissingIcon') {
                    console.error(e$$1);
                }
            }
        }
        return acc;
    }, []);
    return new Promise((resolve, reject)=>{
        Promise.all(mutations).then((resolvedMutations)=>{
            perform(resolvedMutations, ()=>{
                hclAdd('active');
                hclAdd('complete');
                hclRemove('pending');
                if (typeof callback === 'function') callback();
                mark();
                resolve();
            });
        }).catch((e$$1)=>{
            mark();
            reject(e$$1);
        });
    });
}
function onNode(node) {
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    generateMutation(node).then((mutation)=>{
        if (mutation) {
            perform([
                mutation
            ], callback);
        }
    });
}
function resolveIcons(next) {
    return function(maybeIconDefinition) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
        let { mask } = params;
        if (mask) {
            mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
        }
        return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
            mask
        }));
    };
}
const render = function(iconDefinition) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const { transform = meaninglessTransform, symbol = false, mask = null, maskId = null, title = null, titleId = null, classes = [], attributes = {}, styles = {} } = params;
    if (!iconDefinition) return;
    const { prefix, iconName, icon } = iconDefinition;
    return domVariants(_objectSpread2({
        type: 'icon'
    }, iconDefinition), ()=>{
        callHooks('beforeDOMElementCreation', {
            iconDefinition,
            params
        });
        if (config.autoA11y) {
            if (title) {
                attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
            } else {
                attributes['aria-hidden'] = 'true';
                attributes['focusable'] = 'false';
            }
        }
        return makeInlineSvgAbstract({
            icons: {
                main: asFoundIcon(icon),
                mask: mask ? asFoundIcon(mask.icon) : {
                    found: false,
                    width: null,
                    height: null,
                    icon: {}
                }
            },
            prefix,
            iconName,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            symbol,
            title,
            maskId,
            titleId,
            extra: {
                attributes,
                styles,
                classes
            }
        });
    });
};
var ReplaceElements = {
    mixout () {
        return {
            icon: resolveIcons(render)
        };
    },
    hooks () {
        return {
            mutationObserverCallbacks (accumulator) {
                accumulator.treeCallback = onTree;
                accumulator.nodeCallback = onNode;
                return accumulator;
            }
        };
    },
    provides (providers$$1) {
        providers$$1.i2svg = function(params) {
            const { node = DOCUMENT, callback = ()=>{} } = params;
            return onTree(node, callback);
        };
        providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
            const { iconName, title, titleId, prefix, transform, symbol, mask, maskId, extra } = nodeMeta;
            return new Promise((resolve, reject)=>{
                Promise.all([
                    findIcon(iconName, prefix),
                    mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
                        found: false,
                        width: 512,
                        height: 512,
                        icon: {}
                    })
                ]).then((_ref)=>{
                    let [main, mask] = _ref;
                    resolve([
                        node,
                        makeInlineSvgAbstract({
                            icons: {
                                main,
                                mask
                            },
                            prefix,
                            iconName,
                            transform,
                            symbol,
                            maskId,
                            title,
                            titleId,
                            extra,
                            watchable: true
                        })
                    ]);
                }).catch(reject);
            });
        };
        providers$$1.generateAbstractIcon = function(_ref2) {
            let { children, attributes, main, transform, styles } = _ref2;
            const styleString = joinStyles(styles);
            if (styleString.length > 0) {
                attributes['style'] = styleString;
            }
            let nextChild;
            if (transformIsMeaningful(transform)) {
                nextChild = callProvided('generateAbstractTransformGrouping', {
                    main,
                    transform,
                    containerWidth: main.width,
                    iconWidth: main.width
                });
            }
            children.push(nextChild || main.icon);
            return {
                children,
                attributes
            };
        };
    }
};
var Layers = {
    mixout () {
        return {
            layer (assembler) {
                let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                const { classes = [] } = params;
                return domVariants({
                    type: 'layer'
                }, ()=>{
                    callHooks('beforeDOMElementCreation', {
                        assembler,
                        params
                    });
                    let children = [];
                    assembler((args)=>{
                        Array.isArray(args) ? args.map((a)=>{
                            children = children.concat(a.abstract);
                        }) : children = children.concat(args.abstract);
                    });
                    return [
                        {
                            tag: 'span',
                            attributes: {
                                class: [
                                    "".concat(config.cssPrefix, "-layers"),
                                    ...classes
                                ].join(' ')
                            },
                            children
                        }
                    ];
                });
            }
        };
    }
};
var LayersCounter = {
    mixout () {
        return {
            counter (content) {
                let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                const { title = null, classes = [], attributes = {}, styles = {} } = params;
                return domVariants({
                    type: 'counter',
                    content
                }, ()=>{
                    callHooks('beforeDOMElementCreation', {
                        content,
                        params
                    });
                    return makeLayersCounterAbstract({
                        content: content.toString(),
                        title,
                        extra: {
                            attributes,
                            styles,
                            classes: [
                                "".concat(config.cssPrefix, "-layers-counter"),
                                ...classes
                            ]
                        }
                    });
                });
            }
        };
    }
};
var LayersText = {
    mixout () {
        return {
            text (content) {
                let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                const { transform = meaninglessTransform, title = null, classes = [], attributes = {}, styles = {} } = params;
                return domVariants({
                    type: 'text',
                    content
                }, ()=>{
                    callHooks('beforeDOMElementCreation', {
                        content,
                        params
                    });
                    return makeLayersTextAbstract({
                        content,
                        transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
                        title,
                        extra: {
                            attributes,
                            styles,
                            classes: [
                                "".concat(config.cssPrefix, "-layers-text"),
                                ...classes
                            ]
                        }
                    });
                });
            }
        };
    },
    provides (providers$$1) {
        providers$$1.generateLayersText = function(node, nodeMeta) {
            const { title, transform, extra } = nodeMeta;
            let width = null;
            let height = null;
            if (IS_IE) {
                const computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
                const boundingClientRect = node.getBoundingClientRect();
                width = boundingClientRect.width / computedFontSize;
                height = boundingClientRect.height / computedFontSize;
            }
            if (config.autoA11y && !title) {
                extra.attributes['aria-hidden'] = 'true';
            }
            return Promise.resolve([
                node,
                makeLayersTextAbstract({
                    content: node.innerHTML,
                    width,
                    height,
                    transform,
                    title,
                    extra,
                    watchable: true
                })
            ]);
        };
    }
};
const CLEAN_CONTENT_PATTERN = new RegExp('\u{22}', 'ug');
const SECONDARY_UNICODE_RANGE = [
    1105920,
    1112319
];
const _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    FontAwesome: {
        normal: 'fas',
        400: 'fas'
    }
}), lt), wa), Yt);
const FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, key)=>{
    acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
    return acc;
}, {});
const FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, fontFamily)=>{
    const weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
    acc[fontFamily] = weights[900] || [
        ...Object.entries(weights)
    ][0][1];
    return acc;
}, {});
function hexValueFromContent(content) {
    const cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
    const codePoint = codePointAt(cleaned, 0);
    const isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
    const isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
    return {
        value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
        isSecondary: isPrependTen || isDoubled
    };
}
function getPrefix(fontFamily, fontWeight) {
    const fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, '').toLowerCase();
    const fontWeightInteger = parseInt(fontWeight);
    const fontWeightSanitized = isNaN(fontWeightInteger) ? 'normal' : fontWeightInteger;
    return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
}
function replaceForPosition(node, position) {
    const pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
    return new Promise((resolve, reject)=>{
        if (node.getAttribute(pendingAttribute) !== null) {
            // This node is already being processed
            return resolve();
        }
        const children = toArray(node.children);
        const alreadyProcessedPseudoElement = children.filter((c$$1)=>c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position)[0];
        const styles = WINDOW.getComputedStyle(node, position);
        const fontFamily = styles.getPropertyValue('font-family');
        const fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
        const fontWeight = styles.getPropertyValue('font-weight');
        const content = styles.getPropertyValue('content');
        if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
            // If we've already processed it but the current computed style does not result in a font-family,
            // that probably means that a class name that was previously present to make the icon has been
            // removed. So we now should delete the icon.
            node.removeChild(alreadyProcessedPseudoElement);
            return resolve();
        } else if (fontFamilyMatch && content !== 'none' && content !== '') {
            const content = styles.getPropertyValue('content');
            let prefix = getPrefix(fontFamily, fontWeight);
            const { value: hexValue, isSecondary } = hexValueFromContent(content);
            const isV4 = fontFamilyMatch[0].startsWith('FontAwesome');
            let iconName = byUnicode(prefix, hexValue);
            let iconIdentifier = iconName;
            if (isV4) {
                const iconName4 = byOldUnicode(hexValue);
                if (iconName4.iconName && iconName4.prefix) {
                    iconName = iconName4.iconName;
                    prefix = iconName4.prefix;
                }
            }
            // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
            // already done so with the same prefix and iconName
            if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
                node.setAttribute(pendingAttribute, iconIdentifier);
                if (alreadyProcessedPseudoElement) {
                    // Delete the old one, since we're replacing it with a new one
                    node.removeChild(alreadyProcessedPseudoElement);
                }
                const meta = blankMeta();
                const { extra } = meta;
                extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
                findIcon(iconName, prefix).then((main)=>{
                    const abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
                        icons: {
                            main,
                            mask: emptyCanonicalIcon()
                        },
                        prefix,
                        iconName: iconIdentifier,
                        extra,
                        watchable: true
                    }));
                    const element = DOCUMENT.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    if (position === '::before') {
                        node.insertBefore(element, node.firstChild);
                    } else {
                        node.appendChild(element);
                    }
                    element.outerHTML = abstract.map((a$$1)=>toHtml(a$$1)).join('\n');
                    node.removeAttribute(pendingAttribute);
                    resolve();
                }).catch(reject);
            } else {
                resolve();
            }
        } else {
            resolve();
        }
    });
}
function replace(node) {
    return Promise.all([
        replaceForPosition(node, '::before'),
        replaceForPosition(node, '::after')
    ]);
}
function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}
function searchPseudoElements(root) {
    if (!IS_DOM) return;
    return new Promise((resolve, reject)=>{
        const operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
        const end = perf.begin('searchPseudoElements');
        disableObservation();
        Promise.all(operations).then(()=>{
            end();
            enableObservation();
            resolve();
        }).catch(()=>{
            end();
            enableObservation();
            reject();
        });
    });
}
var PseudoElements = {
    hooks () {
        return {
            mutationObserverCallbacks (accumulator) {
                accumulator.pseudoElementsCallback = searchPseudoElements;
                return accumulator;
            }
        };
    },
    provides (providers) {
        providers.pseudoElements2svg = function(params) {
            const { node = DOCUMENT } = params;
            if (config.searchPseudoElements) {
                searchPseudoElements(node);
            }
        };
    }
};
let _unwatched = false;
var MutationObserver$1 = {
    mixout () {
        return {
            dom: {
                unwatch () {
                    disableObservation();
                    _unwatched = true;
                }
            }
        };
    },
    hooks () {
        return {
            bootstrap () {
                observe(chainHooks('mutationObserverCallbacks', {}));
            },
            noAuto () {
                disconnect();
            },
            watch (params) {
                const { observeMutationsRoot } = params;
                if (_unwatched) {
                    enableObservation();
                } else {
                    observe(chainHooks('mutationObserverCallbacks', {
                        observeMutationsRoot
                    }));
                }
            }
        };
    }
};
const parseTransformString = (transformString)=>{
    let transform = {
        size: 16,
        x: 0,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 0
    };
    return transformString.toLowerCase().split(' ').reduce((acc, n)=>{
        const parts = n.toLowerCase().split('-');
        const first = parts[0];
        let rest = parts.slice(1).join('-');
        if (first && rest === 'h') {
            acc.flipX = true;
            return acc;
        }
        if (first && rest === 'v') {
            acc.flipY = true;
            return acc;
        }
        rest = parseFloat(rest);
        if (isNaN(rest)) {
            return acc;
        }
        switch(first){
            case 'grow':
                acc.size = acc.size + rest;
                break;
            case 'shrink':
                acc.size = acc.size - rest;
                break;
            case 'left':
                acc.x = acc.x - rest;
                break;
            case 'right':
                acc.x = acc.x + rest;
                break;
            case 'up':
                acc.y = acc.y - rest;
                break;
            case 'down':
                acc.y = acc.y + rest;
                break;
            case 'rotate':
                acc.rotate = acc.rotate + rest;
                break;
        }
        return acc;
    }, transform);
};
var PowerTransforms = {
    mixout () {
        return {
            parse: {
                transform: (transformString)=>{
                    return parseTransformString(transformString);
                }
            }
        };
    },
    hooks () {
        return {
            parseNodeAttributes (accumulator, node) {
                const transformString = node.getAttribute('data-fa-transform');
                if (transformString) {
                    accumulator.transform = parseTransformString(transformString);
                }
                return accumulator;
            }
        };
    },
    provides (providers) {
        providers.generateAbstractTransformGrouping = function(_ref) {
            let { main, transform, containerWidth, iconWidth } = _ref;
            const outer = {
                transform: "translate(".concat(containerWidth / 2, " 256)")
            };
            const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
            const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
            const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
            const inner = {
                transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
            };
            const path = {
                transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
            };
            const operations = {
                outer,
                inner,
                path
            };
            return {
                tag: 'g',
                attributes: _objectSpread2({}, operations.outer),
                children: [
                    {
                        tag: 'g',
                        attributes: _objectSpread2({}, operations.inner),
                        children: [
                            {
                                tag: main.icon.tag,
                                children: main.icon.children,
                                attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
                            }
                        ]
                    }
                ]
            };
        };
    }
};
const ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
};
function fillBlack(abstract) {
    let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (abstract.attributes && (abstract.attributes.fill || force)) {
        abstract.attributes.fill = 'black';
    }
    return abstract;
}
function deGroup(abstract) {
    if (abstract.tag === 'g') {
        return abstract.children;
    } else {
        return [
            abstract
        ];
    }
}
var Masks = {
    hooks () {
        return {
            parseNodeAttributes (accumulator, node) {
                const maskData = node.getAttribute('data-fa-mask');
                const mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map((i)=>i.trim()));
                if (!mask.prefix) {
                    mask.prefix = getDefaultUsablePrefix();
                }
                accumulator.mask = mask;
                accumulator.maskId = node.getAttribute('data-fa-mask-id');
                return accumulator;
            }
        };
    },
    provides (providers) {
        providers.generateAbstractMask = function(_ref) {
            let { children, attributes, main, mask, maskId: explicitMaskId, transform } = _ref;
            const { width: mainWidth, icon: mainPath } = main;
            const { width: maskWidth, icon: maskPath } = mask;
            const trans = transformForSvg({
                transform,
                containerWidth: maskWidth,
                iconWidth: mainWidth
            });
            const maskRect = {
                tag: 'rect',
                attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
                    fill: 'white'
                })
            };
            const maskInnerGroupChildrenMixin = mainPath.children ? {
                children: mainPath.children.map(fillBlack)
            } : {};
            const maskInnerGroup = {
                tag: 'g',
                attributes: _objectSpread2({}, trans.inner),
                children: [
                    fillBlack(_objectSpread2({
                        tag: mainPath.tag,
                        attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
                    }, maskInnerGroupChildrenMixin))
                ]
            };
            const maskOuterGroup = {
                tag: 'g',
                attributes: _objectSpread2({}, trans.outer),
                children: [
                    maskInnerGroup
                ]
            };
            const maskId = "mask-".concat(explicitMaskId || nextUniqueId());
            const clipId = "clip-".concat(explicitMaskId || nextUniqueId());
            const maskTag = {
                tag: 'mask',
                attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
                    id: maskId,
                    maskUnits: 'userSpaceOnUse',
                    maskContentUnits: 'userSpaceOnUse'
                }),
                children: [
                    maskRect,
                    maskOuterGroup
                ]
            };
            const defs = {
                tag: 'defs',
                children: [
                    {
                        tag: 'clipPath',
                        attributes: {
                            id: clipId
                        },
                        children: deGroup(maskPath)
                    },
                    maskTag
                ]
            };
            children.push(defs, {
                tag: 'rect',
                attributes: _objectSpread2({
                    fill: 'currentColor',
                    'clip-path': "url(#".concat(clipId, ")"),
                    mask: "url(#".concat(maskId, ")")
                }, ALL_SPACE)
            });
            return {
                children,
                attributes
            };
        };
    }
};
var MissingIconIndicator = {
    provides (providers) {
        let reduceMotion = false;
        if (WINDOW.matchMedia) {
            reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
        }
        providers.missingIconAbstract = function() {
            const gChildren = [];
            const FILL = {
                fill: 'currentColor'
            };
            const ANIMATION_BASE = {
                attributeType: 'XML',
                repeatCount: 'indefinite',
                dur: '2s'
            };
            // Ring
            gChildren.push({
                tag: 'path',
                attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
                    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
                })
            });
            const OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
                attributeName: 'opacity'
            });
            const dot = {
                tag: 'circle',
                attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
                    cx: '256',
                    cy: '364',
                    r: '28'
                }),
                children: []
            };
            if (!reduceMotion) {
                dot.children.push({
                    tag: 'animate',
                    attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
                        attributeName: 'r',
                        values: '28;14;28;28;14;28;'
                    })
                }, {
                    tag: 'animate',
                    attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                        values: '1;0;1;1;0;1;'
                    })
                });
            }
            gChildren.push(dot);
            gChildren.push({
                tag: 'path',
                attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
                    opacity: '1',
                    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
                }),
                children: reduceMotion ? [] : [
                    {
                        tag: 'animate',
                        attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                            values: '1;0;0;0;0;1;'
                        })
                    }
                ]
            });
            if (!reduceMotion) {
                // Exclamation
                gChildren.push({
                    tag: 'path',
                    attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
                        opacity: '0',
                        d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
                    }),
                    children: [
                        {
                            tag: 'animate',
                            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                                values: '0;0;1;1;0;0;'
                            })
                        }
                    ]
                });
            }
            return {
                tag: 'g',
                attributes: {
                    'class': 'missing'
                },
                children: gChildren
            };
        };
    }
};
var SvgSymbols = {
    hooks () {
        return {
            parseNodeAttributes (accumulator, node) {
                const symbolData = node.getAttribute('data-fa-symbol');
                const symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
                accumulator['symbol'] = symbol;
                return accumulator;
            }
        };
    }
};
var plugins = [
    InjectCSS,
    ReplaceElements,
    Layers,
    LayersCounter,
    LayersText,
    PseudoElements,
    MutationObserver$1,
    PowerTransforms,
    Masks,
    MissingIconIndicator,
    SvgSymbols
];
registerPlugins(plugins, {
    mixoutsTo: api
});
const noAuto$1 = api.noAuto;
const config$1 = api.config;
const library$1 = api.library;
const dom$1 = api.dom;
const parse$1 = api.parse;
const findIconDefinition$1 = api.findIconDefinition;
const toHtml$1 = api.toHtml;
const icon = api.icon;
const layer = api.layer;
const text = api.text;
const counter = api.counter;
;
}),
"[project]/site/node_modules/.pnpm/@fortawesome+fontawesome-svg-core@6.7.2/node_modules/@fortawesome/fontawesome-svg-core/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"6.7.2"},"version":"6.7.2","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]});}),
"[project]/site/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/site/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/site/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/site/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js [client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/site/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js [client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/site/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactIs = __turbopack_context__.r("[project]/site/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js [client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/object-assign.js [client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/site/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js [client] (ecmascript)");
var has = __turbopack_context__.r("[project]/site/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js [client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/site/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js [client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/site/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/site/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js [client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/site/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js [client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/site/node_modules/.pnpm/@fortawesome+react-fontawesome@0.2.6_@fortawesome+fontawesome-svg-core@6.7.2_react@19.2.3/node_modules/@fortawesome/react-fontawesome/index.es.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FontAwesomeIcon",
    ()=>FontAwesomeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/site/node_modules/.pnpm/next@16.1.4_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/@fortawesome+fontawesome-svg-core@6.7.2/node_modules/@fortawesome/fontawesome-svg-core/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site/node_modules/.pnpm/react@19.2.3/node_modules/react/index.js [client] (ecmascript)");
;
;
;
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
var ICON_PACKS_STARTING_VERSION = '7.0.0';
// Try to get version from installed package first, fallback to env var, then default
var SVG_CORE_VERSION;
try {
    var svgCorePackageJson = __turbopack_context__.r("[project]/site/node_modules/.pnpm/@fortawesome+fontawesome-svg-core@6.7.2/node_modules/@fortawesome/fontawesome-svg-core/package.json (json)");
    SVG_CORE_VERSION = svgCorePackageJson.version;
} catch (e) {
    // If package.json can't be loaded, try environment variable
    SVG_CORE_VERSION = typeof __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.FA_VERSION || '7.0.0';
}
// Get CSS class list from a props object
function classList(props) {
    var beat = props.beat, fade = props.fade, beatFade = props.beatFade, bounce = props.bounce, shake = props.shake, flash = props.flash, spin = props.spin, spinPulse = props.spinPulse, spinReverse = props.spinReverse, pulse = props.pulse, fixedWidth = props.fixedWidth, inverse = props.inverse, border = props.border, listItem = props.listItem, flip = props.flip, size = props.size, rotation = props.rotation, pull = props.pull, swapOpacity = props.swapOpacity, rotateBy = props.rotateBy, widthAuto = props.widthAuto;
    // Check if we're using version 7 or later
    var isVersion7OrLater = versionCheckGte(SVG_CORE_VERSION, ICON_PACKS_STARTING_VERSION);
    // map of CSS class names to properties
    var classes = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        'fa-beat': beat,
        'fa-fade': fade,
        'fa-beat-fade': beatFade,
        'fa-bounce': bounce,
        'fa-shake': shake,
        'fa-flash': flash,
        'fa-spin': spin,
        'fa-spin-reverse': spinReverse,
        'fa-spin-pulse': spinPulse,
        'fa-pulse': pulse,
        'fa-fw': fixedWidth,
        'fa-inverse': inverse,
        'fa-border': border,
        'fa-li': listItem,
        'fa-flip': flip === true,
        'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
        'fa-flip-vertical': flip === 'vertical' || flip === 'both'
    }, "fa-".concat(size), typeof size !== 'undefined' && size !== null), "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), 'fa-swap-opacity', swapOpacity), 'fa-rotate-by', isVersion7OrLater && rotateBy), 'fa-width-auto', isVersion7OrLater && widthAuto);
    // map over all the keys in the classes object
    // return an array of the keys where the value for the key is not null
    return Object.keys(classes).map(function(key) {
        return classes[key] ? key : null;
    }).filter(function(key) {
        return key;
    });
}
// check if verion1 is greater than or equal to version2
function versionCheckGte(version1, version2) {
    var _version1$split = version1.split('-'), _version1$split2 = _slicedToArray(_version1$split, 2), v1Base = _version1$split2[0], v1PreRelease = _version1$split2[1];
    var _version2$split = version2.split('-'), _version2$split2 = _slicedToArray(_version2$split, 2), v2Base = _version2$split2[0], v2PreRelease = _version2$split2[1];
    var v1Parts = v1Base.split('.');
    var v2Parts = v2Base.split('.');
    // Compare version numbers first
    for(var i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++){
        var v1Part = v1Parts[i] || '0';
        var v2Part = v2Parts[i] || '0';
        // Compare numeric values
        var v1Num = parseInt(v1Part, 10);
        var v2Num = parseInt(v2Part, 10);
        if (v1Num !== v2Num) {
            return v1Num > v2Num;
        }
    }
    // If numeric values are equal, look for any remaining parts
    // that would make one version greater than the other
    for(var _i = 0; _i < Math.max(v1Parts.length, v2Parts.length); _i++){
        var _v1Part = v1Parts[_i] || '0';
        var _v2Part = v2Parts[_i] || '0';
        if (_v1Part !== _v2Part) {
            // When numeric values are equal but strings differ,
            // the one without leading zeros is greater
            if (_v1Part.length !== _v2Part.length) {
                return _v1Part.length < _v2Part.length;
            }
        }
    }
    // If version numbers are equal, compare pre-release identifiers
    // A version with a pre-release identifier is less than one without
    if (v1PreRelease && !v2PreRelease) return false;
    if (!v1PreRelease && v2PreRelease) return true;
    return true;
}
// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
    obj = obj - 0;
    // eslint-disable-next-line no-self-compare
    return obj === obj;
}
function camelize(string) {
    if (_isNumerical(string)) {
        return string;
    }
    // eslint-disable-next-line no-useless-escape
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.substr(0, 1).toLowerCase() + string.substr(1);
}
var _excluded = [
    "style"
];
function capitalize(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}
function styleToObject(style) {
    return style.split(';').map(function(s) {
        return s.trim();
    }).filter(function(s) {
        return s;
    }).reduce(function(acc, pair) {
        var i = pair.indexOf(':');
        var prop = camelize(pair.slice(0, i));
        var value = pair.slice(i + 1).trim();
        prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
        return acc;
    }, {});
}
function convert(createElement, element) {
    var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (typeof element === 'string') {
        return element;
    }
    var children = (element.children || []).map(function(child) {
        return convert(createElement, child);
    });
    /* eslint-disable dot-notation */ var mixins = Object.keys(element.attributes || {}).reduce(function(acc, key) {
        var val = element.attributes[key];
        switch(key){
            case 'class':
                acc.attrs['className'] = val;
                delete element.attributes['class'];
                break;
            case 'style':
                acc.attrs['style'] = styleToObject(val);
                break;
            default:
                if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
                    acc.attrs[key.toLowerCase()] = val;
                } else {
                    acc.attrs[camelize(key)] = val;
                }
        }
        return acc;
    }, {
        attrs: {}
    });
    var _extraProps$style = extraProps.style, existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style, remaining = _objectWithoutProperties(extraProps, _excluded);
    mixins.attrs['style'] = _objectSpread2(_objectSpread2({}, mixins.attrs['style']), existingStyle);
    /* eslint-enable */ return createElement.apply(void 0, [
        element.tag,
        _objectSpread2(_objectSpread2({}, mixins.attrs), remaining)
    ].concat(_toConsumableArray(children)));
}
var PRODUCTION = false;
try {
    PRODUCTION = ("TURBOPACK compile-time value", "development") === 'production';
} catch (e) {}
function log() {
    if (!PRODUCTION && console && typeof console.error === 'function') {
        var _console;
        (_console = console).error.apply(_console, arguments);
    }
}
// Normalize icon arguments
function normalizeIconArgs(icon) {
    // this has everything that it needs to be rendered which means it was probably imported
    // directly from an icon svg package
    if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
        return icon;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["parse"].icon) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["parse"].icon(icon);
    }
    // if the icon is null, there's nothing to do
    if (icon === null) {
        return null;
    }
    // if the icon is an object and has a prefix and an icon name, return it
    if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
        return icon;
    }
    // if it's an array with length of two
    if (Array.isArray(icon) && icon.length === 2) {
        // use the first item as prefix, second as icon name
        return {
            prefix: icon[0],
            iconName: icon[1]
        };
    }
    // if it's a string, use it as the icon name
    if (typeof icon === 'string') {
        return {
            prefix: 'fas',
            iconName: icon
        };
    }
}
// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
    // if the value is a non-empty array
    // or it's not an array but it is truthy
    // then create the object with the key and the value
    // if not, return an empty array
    return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}
var defaultProps = {
    border: false,
    className: '',
    mask: null,
    maskId: null,
    // the fixedWidth property has been deprecated as of version 7
    fixedWidth: false,
    inverse: false,
    flip: false,
    icon: null,
    listItem: false,
    pull: null,
    pulse: false,
    rotation: null,
    rotateBy: false,
    size: null,
    spin: false,
    spinPulse: false,
    spinReverse: false,
    beat: false,
    fade: false,
    beatFade: false,
    bounce: false,
    shake: false,
    symbol: false,
    title: '',
    titleId: null,
    transform: null,
    swapOpacity: false,
    widthAuto: false
};
var FontAwesomeIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function(props, ref) {
    var allProps = _objectSpread2(_objectSpread2({}, defaultProps), props);
    var iconArgs = allProps.icon, maskArgs = allProps.mask, symbol = allProps.symbol, className = allProps.className, title = allProps.title, titleId = allProps.titleId, maskId = allProps.maskId;
    var iconLookup = normalizeIconArgs(iconArgs);
    var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(allProps)), _toConsumableArray((className || '').split(' '))));
    var transform = objectWithKey('transform', typeof allProps.transform === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["parse"].transform(allProps.transform) : allProps.transform);
    var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
    var renderedIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$6$2e$7$2e$2$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["icon"])(iconLookup, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes), transform), mask), {}, {
        symbol: symbol,
        title: title,
        titleId: titleId,
        maskId: maskId
    }));
    if (!renderedIcon) {
        log('Could not find icon', iconLookup);
        return null;
    }
    var abstract = renderedIcon.abstract;
    var extraProps = {
        ref: ref
    };
    Object.keys(allProps).forEach(function(key) {
        // eslint-disable-next-line no-prototype-builtins
        if (!defaultProps.hasOwnProperty(key)) {
            extraProps[key] = allProps[key];
        }
    });
    return convertCurry(abstract[0], extraProps);
});
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
    beat: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    border: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    beatFade: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    bounce: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    fade: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    flash: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    mask: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].array,
        __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    maskId: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    // the fixedWidth property has been deprecated as of version 7
    fixedWidth: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    inverse: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    flip: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        true,
        false,
        'horizontal',
        'vertical',
        'both'
    ]),
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].array,
        __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    listItem: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    pull: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'right',
        'left'
    ]),
    pulse: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    rotation: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        0,
        90,
        180,
        270
    ]),
    rotateBy: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    shake: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        '2xs',
        'xs',
        'sm',
        'lg',
        'xl',
        '2xl',
        '1x',
        '2x',
        '3x',
        '4x',
        '5x',
        '6x',
        '7x',
        '8x',
        '9x',
        '10x'
    ]),
    spin: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    spinPulse: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    spinReverse: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    symbol: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
        __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    titleId: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    swapOpacity: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    widthAuto: __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool
};
var convertCurry = convert.bind(null, __TURBOPACK__imported__module__$5b$project$5d2f$site$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement);
;
}),
]);

//# sourceMappingURL=f5d47__pnpm_f35a21a4._.js.map