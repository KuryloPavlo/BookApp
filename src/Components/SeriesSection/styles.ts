import { StyleSheet } from "react-native";
import { fontSizes } from "../../Utility/theme";

const styles = StyleSheet.create({
  seriesSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: fontSizes.medium,
    fontWeight: "bold",
    marginBottom: 8,
  },
  seriesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  seriesRank: {
    fontSize: fontSizes.extraLarge,
    fontWeight: "bold",
    marginHorizontal: 24,
  },
  seriesImage: {
    width: 60,
    height: 90,
    borderRadius: 8,
  },
  seriesTitle: {
    fontSize: fontSizes.small,
    fontWeight: "bold",
  },
});

export default styles;