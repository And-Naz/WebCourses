import React from "react";
import { initialState } from "./store"; 

export const AppContext = React.createContext(initialState);
export const PrintContext = React.createContext(console.log);