
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Alert

} from 'react-native';
import { Button } from '../components/Button'
import colors from '../styles/colors';
import fonts from '../styles/fonts';


import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage'


export function UserIdentification() {


    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const navigation = useNavigation();


    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }




    async function handleSubmit() {

        if (!name)
            return Alert.alert(' Me diz como chamar você ');

        await AsyncStorage.setItem('@plantmanager:user', name);
        navigation.navigate('Confirmation', {
            tile: ' Prontinho ',
            subtitle: 'Agora vamos cuidar das suas plantinhas com muito cuidado,',
            buttonTitle: 'Começar',
            icon: 'smile',
            nextScreen: 'PlantSelect'
        });
    }


    return (
        <SafeAreaView style={style.container} >
            <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={style.content}>
                    <View style={style.form}>
                        <View style={style.header}>
                            <Text style={style.emoji}>
                                {isFilled ? '😄' : '😃'}
                            </Text>

                            <Text style={style.title}>
                                Como podemos {'\n'}
                                chamar você?
                            </Text>
                        </View>

                        <TextInput
                            style={[style.input, (isFocused || isFilled) && { borderColor: colors.green }]}
                            placeholder="Digite seu nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />

                        <View style={style.footer}>
                            <Button title="Confirmar" onPress={handleSubmit} />
                        </View>

                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    content: {
        flex: 1,
        width: '100%'
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },

    emoji: {
        fontSize: 44,
    },

    header: {
        alignItems: 'center'
    },

    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',

    },

    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    },

    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
});