'use client';


import { Provider } from "react-redux";
import {FC} from "react";
import { store } from "@/Redux/store/store";


const ReduxProvider: FC<React.PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;