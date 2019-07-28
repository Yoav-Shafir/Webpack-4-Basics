// library: allows us to specifiy wich icons we want to use.
// dom: to replace any <i> elements with svg.
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import _ from "lodash";
//import React from "react";
import "bootstrap"; // js
import "bootstrap/dist/css/bootstrap.min.css"

import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";

library.add(faCheck);
// automatic replacement of the Font Awesome icons in the rendered page!
dom.watch();

const heading = new Heading();
heading.render(_.upperFirst("hello wrorld"));

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("development mode");
}
