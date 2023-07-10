import AsyncStorage from "@react-native-async-storage/async-storage"

export const isFirstLogin =async () => {
    
    let isFirstLogin  = await AsyncStorage.getItem("IsFirstLogin")

    if (isFirstLogin) { return false}
    return true
}