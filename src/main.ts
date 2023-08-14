import { App } from "vue";
import "./styles/styles.scss";
import * as components from "@/components";

export default {
  install(app: App) {
    // Auto import all components
    for (const componentKey in components) {
      app.component((components as any)[componentKey]);
    }
  },
};

export * from "./components";
