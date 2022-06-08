import { colors } from "../../theme/colors";
import { typoGraphy } from "../../theme/typography";

const BASE = {
  fontFamily: typoGraphy.primary,
  fontSize: 16,
  color: colors.white,
};

const BASE_BOLD = {
  fontFamily: typoGraphy.primaryBold,
  fontSize: 16,
  color: colors.white,
};

const BOLD = {
  fontFamily: typoGraphy.secondary,
  color: colors.white,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 14,
  },
  small: {
    ...BASE,
    fontSize: 12,
  },
};
