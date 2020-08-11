// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    /**
     * @param xxs 320px
     * @param xs 480px
     * @param sm 640px
     * @param md 768px
     * @param lg 1024px
     * @param xl 1200px
     * @param xxl 1600px
     */
    breakpoints: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
