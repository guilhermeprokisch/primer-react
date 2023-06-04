import React__default from 'react';
import { ConfirmationDialog } from '../Dialog/ConfirmationDialog.js';

function ErrorDialog({
  title = 'Error',
  children,
  onRetry,
  onDismiss
}) {
  return /*#__PURE__*/React__default.createElement(ConfirmationDialog, {
    title: title,
    onClose: gesture => {
      if (gesture === 'confirm') {
        onRetry === null || onRetry === void 0 ? void 0 : onRetry();
      } else {
        onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
      }
    },
    confirmButtonContent: "Retry",
    cancelButtonContent: "Dismiss"
  }, children);
}
ErrorDialog.displayName = "ErrorDialog";

export { ErrorDialog };
