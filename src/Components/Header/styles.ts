import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../Utility/theme";

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "800",
    fontSize: fontSizes.large,
    lineHeight: 26,
  },
  headerImage: {
    width: 15,
    height: 15,
  },
});

export default styles;
