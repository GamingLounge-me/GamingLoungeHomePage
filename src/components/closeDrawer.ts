import { createContext, useContext } from "react";

const DrawerCloseContext = createContext<(() => void) | undefined>(undefined);
export const useDrawerClose = () => useContext(DrawerCloseContext);

export const DrawerCloseProvider = DrawerCloseContext.Provider;

