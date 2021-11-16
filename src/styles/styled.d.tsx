import {} from "styled-components";
import { themeType } from "./Apptheme";

declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}
