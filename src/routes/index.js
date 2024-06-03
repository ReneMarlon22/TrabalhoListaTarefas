import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

import Welcome, {} from '../pages/Welcome'
import SignIn, {} from '../pages/SignIn'
import Lista, {} from '../pages/Lista'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Lista"
            component={Lista}
            options={{ headerShown: false }}
            />
            
        </Stack.Navigator>

    
    )
}