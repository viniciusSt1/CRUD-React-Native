import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import UsersContext from "../context/UsersContext";

export default ( { navigation, route } ) => {
    const { dispatch } = useContext(UsersContext)
    const [user, setUser] = useState(route.params ? route.params : {})

    return (
        <View style={style.form}>
            <Text style={style.texto}>Nome: </Text>
            <TextInput 
                onChangeText={nome => setUser( {...user, nome} )}
                value={user.nome}
                style={style.input}
                placeholder="Digite seu nome"
                placeholderTextColor="#999"/>
            <Text style={style.texto}>Email: </Text>
            <TextInput 
                onChangeText={email => setUser( {...user, email} )}
                value={user.email}
                style={style.input}
                placeholder="Digite seu email"
                placeholderTextColor="#999"/>
            <Text style={style.texto}>Avatar: </Text>
            <TextInput 
                onChangeText={avatarUrl => setUser( {...user, avatarUrl} )}
                value={user.avatarUrl}
                style={style.input}
                placeholder="Digite a url de seu avatar"
                placeholderTextColor="#999"/>
            <Button title="Salvar" onPress={ () => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    }) 
                    navigation.goBack()
                }
            }/>
        </View>

    )
}

const style = StyleSheet.create({
    form:{
        gap:15,
        margin:15
    },
    input:{
        borderStyle:'solid',
        borderWidth:1,
        height:40,
        padding:10,
        color:'#777'
    },
    texto:{
        color:'#000',
        fontWeight:'bold'
    }
})