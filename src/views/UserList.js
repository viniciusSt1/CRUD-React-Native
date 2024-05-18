import React, { useContext } from "react";
import { Alert, FlatList } from "react-native";
import { ListItem, Avatar, Button, Icon } from "@rneui/base";
import UsersContext from '../context/UsersContext'

export default props => {
    const { state, dispatch } = useContext(UsersContext)

    function confirmUserSelection(user){
        Alert.alert('Excluir Usuario', 'Deseja excluir o usuario?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type:'deleteUser',
                        payload: user
                    })
                }  
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem( {item: user} ){
        return (
            <ListItem bottomDivider>
                
                <Avatar rounded source={ {uri: user.avatarUrl} }/>

                <ListItem.Content>
                    <ListItem.Title>{user.nome}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>

                <Button 
                    type="clean" 
                    icon={<Icon name="edit" size={22} 
                    color="orange"
                    onPress={() => props.navigation.navigate("UserForm", user)}/>}/>
                
                <Button 
                    type="clean" 
                    icon={<Icon name="delete" size={22} color="red" />}
                    onPress={() => confirmUserSelection(user)}/>
            </ListItem>
        )
    }

    return (
        <FlatList 
            keyExtractor={user => user.id}
            data={state.users} 
            renderItem={getUserItem} />
    )
}