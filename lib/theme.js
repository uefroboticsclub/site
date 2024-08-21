import base from "@hackclub/theme";
import { merge } from "lodash";
import tailwindConfig from "../tailwind.config";

const theme = base;

theme.useColorSchemeMediaQuery = false;

// Merge Tailwind CSS colors into the theme
theme.colors = merge(theme.colors, tailwindConfig.theme.extend.colors);

// Define dark mode colors
theme.colors.modes = {
    dark: {
      text: '##17171d',
      background: '#fff',
      primary: '#0cf',
    },
  };

// Merge Tailwind CSS font families into the theme
theme.fonts = merge(theme.fonts, tailwindConfig.theme.fontFamily);

theme.buttons.primary = merge(theme.buttons.primary, {
  textTransform: "uppercase",
});

theme.layout.copy.maxWidth = [null, null, "copyPlus"];

theme.text.title.fontSize = [5, 6];

export default theme;
