import React from "react";
import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const MyFlixApplication = () => (
  <Container>
    <MainView />
  </Container>
);

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyFlixApplication />);
