const colors = {
  Woodsmoke: "#18181B",
  White: "#FFFFFF",
  Waterloo: "#7E839A",
  Whisper: "#F5F5FA",
  Mystic: "#E4E6F0",
  PattensBlue: "#D6E4FF",
  ScienceBlue: "#0044CC",
};

export const theme = {
  alternateBox: colors.Mystic,
  background: colors.Whisper,
  box: colors.White,
  errorButton: colors.ScienceBlue,
  textPrimary: colors.Woodsmoke,
  textSecondary: colors.Waterloo,
  pagination: {
    active: colors.PattensBlue,
    arrowActive: colors.ScienceBlue,
    arrowDisabled: colors.Waterloo,
    disabled: colors.Mystic,
  },
  navigation: {
    background: colors.Woodsmoke,
    logo: colors.White,
    text: colors.Waterloo,
  },
  borderRadius: "5px",
  shadow: "0px 4px 12px 0px rgba(186, 199, 213, 0.50)",
} as const;
