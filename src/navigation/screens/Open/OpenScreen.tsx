
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { isFirstLogin } from "../../../storage/OpeningHelper";
import { HomeStackNavigator } from "../../stack/HomeStack";
import TrashEmptyScreen from "../../../trashemptyscreen/TrashEmptyScreen";
import OnboardingScreen from "../start/OnBoardingScreen";
import { ActivityIndicator } from "react-native-paper";



const OpenScreen = ({navigation :any}) => {

    const [loading, setloading] = useState<boolean>(true);

    let [firstLogin, setFirstLogin ] = useState<boolean>(true);


    useEffect(() => {
        isFirstLogin().then((res) => {
            
            setloading(false)
        })
    }, [])




    if (loading) {
        return <><ActivityIndicator /></>
    }
    else {

        if (firstLogin) {
            return (<><OnboardingScreen /></>)
        }
        else {
            return (<>
                <HomeStackNavigator />
            </>)
        }

    }
}

export default OpenScreen