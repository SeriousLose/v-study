import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/**
 * @author Kuitos
 * @since 2019-04-11
 */
import { SandBoxType } from 'qiankun/es/interfaces';
import patchDynamicAppend from 'qiankun/es/sandbox/patchers/dynamicAppend';
import patchHistoryListener from 'qiankun/es/sandbox/patchers/historyListener';
import patchInterval from 'qiankun/es/sandbox/patchers/interval';
import patchWindowListener from 'qiankun/es/sandbox/patchers/windowListener';
import patchUIEvent from 'qiankun/es/sandbox/patchers/UIEvent';

console.log('patchers.js');

export function patchAtMounting(appName, elementGetter, sandbox, singular) {
  var _patchersInSandbox;

  var _a;

  var basePatchers = [function () {
    return patchInterval();
  }, function () {
    return patchWindowListener();
  }, function () {
    return patchHistoryListener();
  }, function () {
    return patchDynamicAppend(appName, elementGetter, sandbox.proxy, true, singular);
  }];
  var patchersInSandbox = (_patchersInSandbox = {}, _defineProperty(_patchersInSandbox, SandBoxType.LegacyProxy, [].concat(basePatchers, [function () {
    return patchUIEvent(sandbox.proxy);
  }])), _defineProperty(_patchersInSandbox, SandBoxType.Proxy, [].concat(basePatchers, [function () {
    return patchUIEvent(sandbox.proxy);
  }])), _defineProperty(_patchersInSandbox, SandBoxType.Snapshot, basePatchers), _patchersInSandbox);
  return (_a = patchersInSandbox[sandbox.type]) === null || _a === void 0 ? void 0 : _a.map(function (patch) {
    return patch();
  });
}
export function patchAtBootstrapping(appName, elementGetter, sandbox, singular) {
  var _patchersInSandbox2;

  var _a;

  var basePatchers = [function () {
    return patchDynamicAppend(appName, elementGetter, sandbox.proxy, false, singular);
  }];
  var patchersInSandbox = (_patchersInSandbox2 = {}, _defineProperty(_patchersInSandbox2, SandBoxType.LegacyProxy, basePatchers), _defineProperty(_patchersInSandbox2, SandBoxType.Proxy, basePatchers), _defineProperty(_patchersInSandbox2, SandBoxType.Snapshot, basePatchers), _patchersInSandbox2);
  return (_a = patchersInSandbox[sandbox.type]) === null || _a === void 0 ? void 0 : _a.map(function (patch) {
    return patch();
  });
}