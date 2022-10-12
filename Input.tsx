import React from 'react';
import { View, Text, TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData, StyleSheet } from 'react-native';

interface Props {
    label: string, 
    placeholder: string, 
    value?: string, 
    onChangeText?: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    },
    secureTextEntry?: boolean,
    onSubmitEditing?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void,
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