import React, { createContext, useContext, ReactNode, useState } from "react";

interface AlertState {
  visible: any;
  errorText: any;
} /*any型*/

interface AlertHandlerContextType extends AlertState {
  setAlert: (errorText: any) => void /*any型*/;
  closeAlert: () => void;
}

const AlertHandlerContext = createContext<AlertHandlerContextType | undefined>(
  undefined
);

interface AlertHandlerProviderProps {
  children: ReactNode;
}

export const AlertHandlerProvider = ({
  children,
}: AlertHandlerProviderProps) => {
  const [alertState, setAlertState] = useState<AlertState>({
    visible: false,
    errorText: "",
  });

  const setAlert = (errorText: any /*any型*/) => {
    setAlertState({
      visible: true,
      errorText: errorText,
    });
  };

  const closeAlert = () => {
    setAlertState({
      ...alertState,
      visible: false,
    });
  };

  const contextValue = {
    ...alertState,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
