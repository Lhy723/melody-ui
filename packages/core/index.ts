import { makeInstaller } from "@melody-ui/utils";
import components from "./components";
import "@melody-ui/theme/index.css";

const installer = makeInstaller(components);

export * from "@melody-ui/components";
export default installer;
