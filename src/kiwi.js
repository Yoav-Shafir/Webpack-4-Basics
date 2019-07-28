import _ from "lodash";
//import React from "react";
// import "bootstrap"; // js
// import "bootstrap/dist/css/bootstrap.min.css"

import KiwiImage from "./components/kiwi-image/kiwi-image";
import Heading from "./components/heading/heading";

const heading = new Heading();
heading.render(_.upperFirst("kiwi"));

const kiwiImage = new KiwiImage();
kiwiImage.render();
