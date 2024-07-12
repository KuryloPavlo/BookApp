import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../Utility/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontWeight: "400",
    fontSize: fontSizes.medium,
    lineHeight: 24,
  },
  textContainer: {
    paddingHorizontal: 16,
    flex: 1,
  },
});

export default styles;
