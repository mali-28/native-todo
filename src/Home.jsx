import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Input, IconButton, FormControl, } from "native-base"
import { Ionicons } from '@expo/vector-icons';
import { getAsyncStorage, setAsyncStorage, validation } from './utils/utils';
import List from "./component/List";
const Home = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState(getStoreData);
    const [cond, setCond] = useState(true);
    const [editId, setEditId] = useState("");
    const [strikeIds, setStrikeIds] = useState([]);

    useEffect(() => {
        setAsyncStorage("items", list)
    }, [list])


    const getStoreData = async () => {
        const dataList = await getAsyncStorage("items")

        // console.log({ dataList })
        if (dataList) {
            setList(dataList);
        }
    }

    useEffect(() => {
        getStoreData();
    }, [])

    const AddItem = () => {
        if (cond) {

            const id = new Date().getTime();
            setList((pre) => {
                return [...pre, { input, id }]
            })
        } else {
            setList(list.map((val) => {
                if (val.id === editId) {
                    return { ...val, input }
                }
                return val
            }))
            setCond(true)

        }
        setInput("")
        setEditId("")

    }
console.log({strikeIds})
    const strikeItem = (key) => {
        let idsArr = [];
        const index = strikeIds.findIndex(val=> val === key);
        
        if(index === -1){
            console.log({indexminus: index})
            setStrikeIds((pre) => {
                return [...pre,key]
            })
            }else if(index > -1){
            console.log({index: index})

                setStrikeIds(strikeIds.filter((elem) => {
                    return key !== elem;
                })
                )

            }
    }
    
    

    const removeItem = (key) => {
        setList(list.filter((elem) => {
            return key !== elem.id;
        })
        )
        setCond(true)

    }
    const editItem = (key) => {
        if (key) {
            const editObj = list.find((val) => {
                return val.id === key
            })
            setInput(editObj.input)
            setEditId(key)
            setCond(false)
        }


    }

    return <>

        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={{ marginTop: 20, color: "#f00", textAlign: "center", padding: 20 }}>Todo List</Text>
                    <FormControl  isInvalid={!input}>
                        <Input
                            value={input}
                            w={{
                                base: "90%",
                                md: "25%",
                            }}
                            mb="8"
                            mx="auto"
                            backgroundColor="#fff"
                            borderColor="#00f"
                            placeholder="Value Controlled Input"
                            onChangeText={v =>setInput(v)}
                            helperText="dkjsjsjs"
                            InputRightElement={
                                <IconButton
                                    size="md"
                                    variant={input ? "solid" : ""}
                                    colorScheme="indigo"
                                    disabled={!input}
                                    _icon={{
                                        as: Ionicons,
                                        name: "add",
                                    }}
                                    onPress={AddItem}
                                />
                            }
                        />
                       
                    </FormControl>

                    

                    <ScrollView>
                        {list?.map((val, id) => {

                            return <List key={val.id} value={val} strike={strikeItem} remove={removeItem} edit={editItem} strikeIds={strikeIds} />
                        })

                        }
                    </ScrollView>


                </View>
            </TouchableWithoutFeedback>
        </View>
    </>
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: 350,
        flex: 0.95,
        backgroundColor: '#fff',

    },
    shadow: {
        // borderColor:'yourchoice', // if you need 
        // borderWidth:1,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 1,
    }

});
export default Home;