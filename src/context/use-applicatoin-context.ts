import { useContext } from "react";
import { ApplicationContext } from "./application-context";

export function useCartContext() {
  const context = useContext(ApplicationContext);
  if (!context)
    throw new Error(
      "useApplicationContext must be used within a ApplicationProvider",
    );
  return context;
}
