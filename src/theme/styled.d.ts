// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      xxs: "320px";
      xs: "480px";
      sm: "640px";
      md: "768px";
      lg: "1024px";
      xl: "1200px";
      xxl: "1600px";
      xl3: "1920px";
      wqhd: "2560px";
      uhd: "3840px";
    };
  }
}
