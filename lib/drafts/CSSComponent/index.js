'use strict';

var React = require('react');
var classnames = require('classnames');
var component_module = require('./component.module.css.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var classnames__default = /*#__PURE__*/_interopDefault(classnames);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Component = ({
  className,
  ...props
}) => {
  return /*#__PURE__*/React__default.default.createElement("div", _extends({
    className: classnames__default.default(component_module.component, className)
  }, props));
};
Component.displayName = "Component";

exports.Component = Component;
