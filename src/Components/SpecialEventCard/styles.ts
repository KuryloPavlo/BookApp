import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../Utility/theme";

const styles = StyleSheet.create({
  specialEventContainer: {
    padding: 16,
    // flex: 1,
  },
  eventImage: {
    width: 320,
    height: 210,
    borderRadius: 8,
  },
  specialEventTitle: {
    fontWeight: "600",
    lineHeight: 24,
    fontSize: fontSizes.large,
  },
  specialEventSubtitle: {
    fontWeight: "700",
    lineHeight: 14,
    fontSize: fontSizes.small,
    color: colors.purple,
  },
});

export default styles;
