import React, { useEffect, useRef } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";

interface AlertHandlerContextType {
  visible: any;
  errorText: any;
  closeAlert: () => void;
} /*any型*/

const AlertManager = () => {
  const timeoutHandlerRef = useRef<number | null>(null);
  const AlertHandlerContext =
    useAlertHandlerContext() as AlertHandlerContextType;

  useEffect(() => {
    if (timeoutHandlerRef.current !== null) {
      window.clearTimeout(timeoutHandlerRef.current);
    }
    const newTimeoutHandler = window.setTimeout(() => {
      AlertHandlerContext.closeAlert();
      timeoutHandlerRef.current = null;
    }, 5000);
    timeoutHandlerRef.current = newTimeoutHandler;
  }, [AlertHandlerContext]);

  return (
    <Alert
      visible={AlertHandlerContext.visible}
      errorText={AlertHandlerContext.errorText}
    />
  );
};
export default AlertManager;
