import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button, Icon } from "@rneui/base";
import { UsersProvider } from './context/UsersContext'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="UserList" screenOptions={{ headerStyle: { backgroundColor: "#000" }, headerTintColor: { color: "white" } }} >
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => {
                            return (
                                {
                                    headerTitle: "Lista de Usuarios",
                                    headerTintColor: "white",
                                    headerStyle: {
                                        backgroundColor: "#00A"
                                    },
                                    headerRight: () => <Button onPress={() => navigation.navigate("UserForm")} type="clear"> <Icon name="add" size={25} color="white" /> </Button>
                                }
                            )
                        }} />

                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            headerTitle: "Formulario de usuario",
                            headerTintColor: "white"
                        }} />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>

    )
}