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
  background: colors.Whisper,
  box: colors.White,
  alternateBox: colors.Mystic,
  textPrimary: colors.Woodsmoke,
  textSecondary: colors.Waterloo,
  errorButton: colors.ScienceBlue,
  pagination: {
    disabled: colors.Mystic,
    active: colors.PattensBlue,
    arrowActive: colors.ScienceBlue,
    arrowDisabled: colors.Waterloo,
  },
  navigation: {
    background: colors.Woodsmoke,
    text: colors.Waterloo,
    logo: colors.White,
  },
  borderRadius: "5px",
  shadow: "0px 4px 12px 0px rgba(186, 199, 213, 0.50)",
};
