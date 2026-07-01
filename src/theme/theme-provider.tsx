import { ReactNode } from "react";
import { useFonts } from "expo-font";
import { AppFonts } from "./fonts";

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const [loaded] = useFonts(AppFonts);

  if (!loaded) return null;

  return <>{children}</>;
}