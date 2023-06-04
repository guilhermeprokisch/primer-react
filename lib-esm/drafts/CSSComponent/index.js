import React__default from 'react';
import classnames from 'classnames';
import classNames from './component.module.css.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Component = ({
  className,
  ...props
}) => {
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classnames(classNames.component, className)
  }, props));
};
Component.displayName = "Component";

export { Component };
