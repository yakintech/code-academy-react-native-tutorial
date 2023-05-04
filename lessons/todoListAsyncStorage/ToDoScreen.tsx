import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, List, TextInput } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDoScreen = () => {
    const [todos, settodos] = useState<ToDo[]>([]);
    const [name, setname] = useState('');



    useEffect(() => {

        AsyncStorage.getItem('todos')
            .then(data => {
                let todos = JSON.parse(data ?? '[]');
                settodos(todos)
            })


    }, [])


    const addNewTodo = () => {

        let newTodo: ToDo = {
            id: Math.floor(Math.random() * 9999),
            name: name
        }

        settodos([...todos, newTodo]);
        AsyncStorage.setItem('todos', JSON.stringify([...todos, newTodo]));


    }

    const removeToDo = (id: number) => {

        let filteredTodos = todos.filter(q => q.id != id);
        settodos([...filteredTodos]);
        AsyncStorage.setItem('todos', JSON.stringify([...filteredTodos]));

    }

    const renderItem = ({ item }: any) => {
        return <>
            <Pressable onPress={() => removeToDo(item.id)}>
                <List.Item
                    title={item.name}
                    description={item.id}
                    left={props => <List.Icon {...props} icon="star" />}
                />
            </Pressable>
        </>
    }
    return (
        <>
            <View>
                <TextInput onChangeText={setname} placeholder='Name' />
                <Button onPress={addNewTodo}>Add</Button>
            </View>
            <View>
                <FlatList
                    data={todos}
                    renderItem={renderItem}
                />
            </View>
        </>
    )
}

interface ToDo {
    id?: number
    name?: string
}

export default ToDoScreen