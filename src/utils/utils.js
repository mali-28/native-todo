import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorage = async (key, value) => {

    try {
        if (key && value) {
            // console.log({ key, value })
            await AsyncStorage.setItem(key, JSON.stringify(value))
        }
    } catch (e) {
        console.error({ setE: e });
    }

}


export const getAsyncStorage = async (key) => {
    try {
        if (key) {
            const data = await AsyncStorage.getItem(key);
            console.log({ data })
            if (data) {
                const modify = JSON.parse(data);
                // console.log({ modify })
                return modify;
            }
        }
    } catch (e) {
        console.error({ e });
    }
};




