import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    SafeAreaView
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Welcome() {

    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification')
    }



    return (
        <SafeAreaView style={style.container}>
            <View style={style.wrapper}>
                <Text style={style.title}>
                    Gerencie {'\n'}
                    suas Plantas de{'\n'}
                    forma fácil
                </Text>

                <Image
                    source={wateringImg}
                    style={style.image}
                    resizeMode="contain"
                />

                <Text style={style.subTitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>


                <TouchableOpacity style={style.button} activeOpacity={0.7} onPress={handleStart}>
                    <Text style={style.buttonIcon}>
                        <Feather name="chevron-right" style={style.buttonIcon} />
                    </Text>
                </TouchableOpacity>



            </View>
        </SafeAreaView>
    )

};

const style = StyleSheet.create({
    container: {
        flex: 1,

    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },

    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34

    },

    subTitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 28,
        color: colors.heading,
        fontFamily: fonts.text
    },

    image: {
        height: Dimensions.get('window').width * 0.7

    },

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },



    buttonIcon: {
        color: colors.white,
        fontSize: 32,

    }



});



