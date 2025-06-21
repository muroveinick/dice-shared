export enum Colors {
    RED = "#D2001F",
    BLUE = "#87CEEB",
    GREEN = "#228B22",
    YELLOW = "#FFEB3B",
    PURPLE = "#663399",
    ORANGE = "#FF8C00",
    PINK = "#FF69B4",
  }
  
  // Convenience array for cases where an ordered list is needed
  export type ColorKey = keyof typeof Colors;
  // Ordered list of color keys (enum member names)
  export const COLOR_KEYS: ColorKey[] = Object.keys(Colors) as ColorKey[];
  
  export const COLOR_VALUES: string[] = Object.values(Colors);
  