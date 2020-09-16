import * as React from "react";
import 'antd/dist/antd.css';

import { Header } from './molecules';
import { ButtonSwapCurrency } from './atoms';

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="font-h1">Hello CodeSandbox</h1>
      <ButtonSwapCurrency />
      <h2 className="font-h2">Start editing to see some magic happen!</h2>
    </div>
  );
}
