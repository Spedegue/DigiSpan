import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      background: string;
      onBackground: string;
      onPrimary: string;
      onSurface: string;
      primary50: string;
      surface: string;
      onBackgroundAlt: string;
      disabled: string;
      primary: string;
      secondary: string;
      greyAlt: string;
      primaryAlt: string;
      secondaryAlt: string;
      midGrey: string;
      lightGrey: string;
      subtleOnPrimary: string;
      surfaceAlt: string;
      subtleOnSurfaceAlt: string;
      midGreyAlt: string;
    };
  }
}
