import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NavigationConfig from "../config/navigation-config"
import Home from "../modules/home"
import { screens } from "../constant"
import AddRecording from "../modules/add-recording"

const Stack = createNativeStackNavigator()

const InitialNavigation = () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={NavigationConfig}>
            <Stack.Screen name={screens.home} component={Home} />
            <Stack.Screen name={screens.addRecording} component={AddRecording} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default InitialNavigation