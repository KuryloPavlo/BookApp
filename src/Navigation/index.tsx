import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Discover, Reader } from "../Screens";
import { fontSizes } from "../Utility/theme";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Discover">
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={{
            headerTitleAlign: "left",
            title: "Discover",
            headerStyle: {},
            headerTitleStyle: {
              fontSize: fontSizes.gigantic,
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Reader"
          component={Reader}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type RootStackParamList = {
  Reader: BookI;
};
