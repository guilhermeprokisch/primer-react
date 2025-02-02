'use strict';

var octiconsReact = require('@primer/octicons-react');
var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var constants = require('../constants.js');
var sx = require('../sx.js');
var Octicon = require('../Octicon/Octicon.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const octiconMap = {
  issueOpened: octiconsReact.IssueOpenedIcon,
  pullOpened: octiconsReact.GitPullRequestIcon,
  issueClosed: octiconsReact.IssueClosedIcon,
  issueClosedNotPlanned: octiconsReact.SkipIcon,
  pullClosed: octiconsReact.GitPullRequestIcon,
  pullMerged: octiconsReact.GitMergeIcon,
  draft: octiconsReact.GitPullRequestIcon,
  issueDraft: octiconsReact.IssueDraftIcon,
  pullQueued: octiconsReact.GitMergeQueueIcon
};
const colorVariants = styledSystem.variant({
  prop: 'status',
  variants: {
    issueClosed: {
      backgroundColor: 'done.emphasis',
      color: 'fg.onEmphasis'
    },
    issueClosedNotPlanned: {
      backgroundColor: 'neutral.emphasis',
      color: 'fg.onEmphasis'
    },
    pullClosed: {
      backgroundColor: 'closed.emphasis',
      color: 'fg.onEmphasis'
    },
    pullMerged: {
      backgroundColor: 'done.emphasis',
      color: 'fg.onEmphasis'
    },
    pullQueued: {
      backgroundColor: 'attention.emphasis',
      color: 'fg.onEmphasis'
    },
    issueOpened: {
      backgroundColor: 'open.emphasis',
      color: 'fg.onEmphasis'
    },
    pullOpened: {
      backgroundColor: 'open.emphasis',
      color: 'fg.onEmphasis'
    },
    draft: {
      backgroundColor: 'neutral.emphasis',
      color: 'fg.onEmphasis'
    },
    issueDraft: {
      backgroundColor: 'neutral.emphasis',
      color: 'fg.onEmphasis'
    }
  }
});
const sizeVariants = styledSystem.variant({
  prop: 'variant',
  variants: {
    small: {
      paddingX: 2,
      paddingY: 1,
      fontSize: 0
    },
    normal: {
      paddingX: '12px',
      paddingY: 2,
      fontSize: 1
    }
  }
});
const StateLabelBase = styled__default.default.span.withConfig({
  displayName: "StateLabel__StateLabelBase",
  componentId: "sc-qthdln-0"
})(["display:inline-flex;align-items:center;font-weight:", ";line-height:16px;color:", ";text-align:center;border-radius:", ";", ";", ";", ";"], constants.get('fontWeights.bold'), constants.get('colors.canvas.default'), constants.get('radii.3'), colorVariants, sizeVariants, sx.default);
function StateLabel({
  children,
  status,
  variant: variantProp = 'normal',
  ...rest
}) {
  const octiconProps = variantProp === 'small' ? {
    width: '1em'
  } : {};
  return /*#__PURE__*/React__default.default.createElement(StateLabelBase, _extends({}, rest, {
    variant: variantProp,
    status: status
  }), status && /*#__PURE__*/React__default.default.createElement(Octicon, _extends({}, octiconProps, {
    icon: octiconMap[status] || octiconsReact.QuestionIcon,
    sx: {
      mr: 1
    }
  })), children);
}
StateLabel.displayName = "StateLabel";

module.exports = StateLabel;
