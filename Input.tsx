import React from 'react';
import { View, Text, TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData, StyleSheet } from 'react-native';

interface Props {
    label: string, 
    placeholder: string, 
    value?: string, 
    onChangeText?: React.Dispatch<React.SetStateAction<string>>,
    secureTextEntry?: boolean,
    onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void,
}

const Input = ({label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing }: Props) => {

    return (
        <View style={styles.view}>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                onSubmitEditing={onSubmitEditing}
                style={styles.textInput}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        padding: 16,
    },
    label: {
        padding: 8,
        fontSize: 18,
    },
    textInput: {
        padding: 8,
        fontSize: 16,
    }
})

export default Input;