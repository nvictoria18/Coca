import { TypesOfScreen } from "@/types/Screen";

export const isMobileScreen = <T, U>(
  type: TypesOfScreen,
  desktop: T,
  mobile: U
) => type === 'mobile' ? mobile : desktop;
