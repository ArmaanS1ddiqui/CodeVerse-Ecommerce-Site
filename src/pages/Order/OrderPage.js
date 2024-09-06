import React from "react";
import { useTitle } from "../../hooks/useTitle";
import { OrderSuccess } from "./Components/OrderSuccess";
import { OrderFail } from "./Components/OrderFail";
import { useLocation } from "react-router-dom";

export const OrderPage = () => {
  useTitle("OrderPage");
  const { state } = useLocation();
  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  );
};
