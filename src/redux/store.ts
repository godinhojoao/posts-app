import { createStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

export const store = createStore(reducers);