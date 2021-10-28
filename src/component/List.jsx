import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box } from "native-base";
const List = ({value, ...props}) => {
    // console.log({props})
    return <>

        <HStack rounded="md" bg='#6200ee' px="1" py="3" my="1" justifyContent='space-between' alignItems='center'>
            <HStack space="4" alignItems='center'>
                <IconButton icon={<Icon size="sm" as={<MaterialIcons name='home' />} color="white" />} />
                <Text color="white" fontSize="20" strikeThrough={props.strikeIds?.some(id =>  id === value.id )} fontWeight='bold'>{value.input}</Text>
            </HStack>
            <HStack >
                <IconButton
                 onPress={()=>{props.strike(value.id)}} 
                 icon={<Icon as={<MaterialIcons name='format-strikethrough' />} size='sm' color="white" />} />

                <IconButton
                 onPress={()=>{props.remove(value.id)}} 
                 icon={<Icon as={<MaterialIcons name='remove' />}
                    color="white" size='sm' />} />

                <IconButton 
                onPress={()=>{props.edit(value.id)}} 
                icon={<Icon as={<MaterialIcons name='edit' />} size='sm' color="white" />} />
            </HStack>
        </HStack>



    </>
}

export default List;