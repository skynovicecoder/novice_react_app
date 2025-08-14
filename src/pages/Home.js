import React from "react";
import AccessibleTabs from "../components/TabTypeComponent";
import logo from './../logo.svg';

export default function Home() {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
      <h1>Home Page</h1>
      <AccessibleTabs />
    </div>
  );
}