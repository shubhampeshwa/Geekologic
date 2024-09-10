import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NavigationConfig from "../config/navigation-config"
import Home from "../modules/home"
import { screens } from "../constant"

const Stack = createNativeStackNavigator()

const InitialNavigation = () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={NavigationConfig}>
            <Stack.Screen name={screens.home} component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default InitialNavigation