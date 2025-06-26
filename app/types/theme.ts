export interface ThemeData {
  name: string;
  typeFaceClass: string;
  typeFaceName: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  foregroundColor: string;
}

// Font configuration with display names and CSS classes
export const AVAILABLE_FONTS = [
  { name: "Inter", className: "font-inter" },
  { name: "Roboto", className: "font-roboto" },
  { name: "Open Sans", className: "font-open-sans" },
  { name: "Lato", className: "font-lato" },
  { name: "Montserrat", className: "font-montserrat" },
  { name: "Source Sans Pro", className: "font-source-sans" },
  { name: "Raleway", className: "font-raleway" },
  { name: "Nunito", className: "font-nunito" },
  { name: "Poppins", className: "font-poppins" },
  { name: "Playfair Display", className: "font-playfair" },
  { name: "Lily Script One", className: "font-lily" },
] as const;

export interface ThemeStore {
  currentTheme: ThemeData;
  availableThemes: Record<string, ThemeData>;
  availableFonts: typeof AVAILABLE_FONTS;
  setTheme: (themeName: string) => void;
  updateTheme: (updates: Partial<ThemeData>) => void;
  setFont: (fontClassName: string) => void;
  cycleFont: () => void;
}

// Clean, simple default themes
export const DEFAULT_THEMES: Record<string, ThemeData> = {
  light: {
    name: "light",
    typeFaceClass: "font-lily",
    typeFaceName: "Lily Script One",
    primaryColor: "#CE8147", // Caramel
    secondaryColor: "#FCDEBE", // Cream
    accentColor: "#B8D8BA", // Light green
    backgroundColor: "#ffffff", // White
    foregroundColor: "#4B3C25", // Dark brown
  },
};
