import React from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import { ButtonTypes } from "./components/UI/types";

function App() {
  return (
    <Button variant={ButtonTypes.PRIMARY} withIcon={true}>
      test children
    </Button>
  );
}

export default App;
