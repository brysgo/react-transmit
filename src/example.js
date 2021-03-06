import React from "react";
import Transmit from "lib/react-transmit";
import Main from "example/Main";

/**
 * For isomorphic rendering using Transmit.render() will automatically render with pre-queried data.
 */
Transmit.render(Main, {}, document.getElementById("react-root"));
