import React__default from 'react';
import { useId } from '../hooks/useId.js';
import { ListContext } from './List.js';
import Box from '../Box/Box.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const GroupContext = /*#__PURE__*/React__default.createContext({});

/**
 * @deprecated ActionList.Group is deprecated. Use ActionList with ActionList.Heading instead.
 */
const Group = ({
  title,
  variant = 'subtle',
  auxiliaryText,
  selectionVariant,
  role,
  sx = {},
  ...props
}) => {
  const labelId = useId();
  const {
    role: listRole
  } = React__default.useContext(ListContext);
  return /*#__PURE__*/React__default.createElement(Box, _extends({
    as: "li",
    role: listRole ? 'none' : undefined,
    sx: {
      '&:not(:first-child)': {
        marginTop: 2
      },
      listStyle: 'none',
      // hide the ::marker inserted by browser's stylesheet
      ...sx
    }
  }, props), /*#__PURE__*/React__default.createElement(GroupContext.Provider, {
    value: {
      selectionVariant
    }
  }, /*#__PURE__*/React__default.createElement(Box, {
    as: "ul",
    sx: {
      paddingInlineStart: 0
    },
    "aria-labelledby": title ? labelId : undefined,
    role: role || listRole && 'group'
  }, title && /*#__PURE__*/React__default.createElement(Header, {
    title: title,
    variant: variant,
    auxiliaryText: auxiliaryText,
    labelId: labelId
  }), props.children)));
};
Group.displayName = "Group";
/**
 * Displays the name and description of a `Group`.
 *
 * For visual presentation only. It's hidden from screen readers.
 */
const Header = ({
  variant,
  title,
  auxiliaryText,
  labelId,
  ...props
}) => {
  const {
    variant: listVariant
  } = React__default.useContext(ListContext);
  const styles = {
    paddingY: '6px',
    paddingX: listVariant === 'full' ? 2 : 3,
    fontSize: 0,
    fontWeight: 'bold',
    color: 'fg.muted',
    listStyle: 'none',
    ...(variant === 'filled' && {
      backgroundColor: 'canvas.subtle',
      marginX: 0,
      marginBottom: 2,
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderColor: 'neutral.muted'
    })
  };
  return /*#__PURE__*/React__default.createElement(Box, _extends({
    as: "li",
    sx: styles,
    role: "presentation",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/React__default.createElement("span", {
    id: labelId
  }, title), auxiliaryText && /*#__PURE__*/React__default.createElement("span", null, auxiliaryText));
};
Header.displayName = "Header";

export { Group, GroupContext };
