import { QuestionIcon, IssueOpenedIcon, GitPullRequestIcon, IssueClosedIcon, SkipIcon, GitMergeIcon, IssueDraftIcon, GitMergeQueueIcon } from '@primer/octicons-react';
import React__default from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { get } from '../constants.js';
import sx from '../sx.js';
import Octicon from '../Octicon/Octicon.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const octiconMap = {
  issueOpened: IssueOpenedIcon,
  pullOpened: GitPullRequestIcon,
  issueClosed: IssueClosedIcon,
  issueClosedNotPlanned: SkipIcon,
  pullClosed: GitPullRequestIcon,
  pullMerged: GitMergeIcon,
  draft: GitPullRequestIcon,
  issueDraft: IssueDraftIcon,
  pullQueued: GitMergeQueueIcon
};
const colorVariants = variant({
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
const sizeVariants = variant({
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
const StateLabelBase = styled.span.withConfig({
  displayName: "StateLabel__StateLabelBase",
  componentId: "sc-qthdln-0"
})(["display:inline-flex;align-items:center;font-weight:", ";line-height:16px;color:", ";text-align:center;border-radius:", ";", ";", ";", ";"], get('fontWeights.bold'), get('colors.canvas.default'), get('radii.3'), colorVariants, sizeVariants, sx);
function StateLabel({
  children,
  status,
  variant: variantProp = 'normal',
  ...rest
}) {
  const octiconProps = variantProp === 'small' ? {
    width: '1em'
  } : {};
  return /*#__PURE__*/React__default.createElement(StateLabelBase, _extends({}, rest, {
    variant: variantProp,
    status: status
  }), status && /*#__PURE__*/React__default.createElement(Octicon, _extends({}, octiconProps, {
    icon: octiconMap[status] || QuestionIcon,
    sx: {
      mr: 1
    }
  })), children);
}
StateLabel.displayName = "StateLabel";

export { StateLabel as default };
