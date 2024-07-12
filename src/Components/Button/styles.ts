import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../Utility/theme";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    paddingVertical: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    backgroundColor: colors.purple,
  },
  text: {
    fontWeight: "800",
    fontSize: fontSizes.medium,
    lineHeight: 20,
    color: colors.white,
  },
});

export default styles;
