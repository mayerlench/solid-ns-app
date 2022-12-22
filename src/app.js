import { Application } from "@nativescript/core";
import { render } from "@nativescript-community/solid-js";
import { registerElement, makeListView } from "dominative";
import { LottieView } from "@nativescript-community/ui-lottie";
// import "./router";

import App from "./components/LaunchSreen";

registerElement('lottieview', LottieView)

document.body.actionBarHidden = false;
render(App, document.body);

const create = () => document;

Application.run({ create });
