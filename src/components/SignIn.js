import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';
import { colors } from '../theme'


const SignIn = () => {
    const initialValues = {
        username: '',
        password: '',
    };

    const onSubmit = values => {
        console.log(values);

    };

    const styles = {
        form: {
            flexDirection: 'column',
            backgroundColor: colors.gray,
        },
        text: {
            marginTop: 10,
            fontSize: 24,
            paddingBottom: 20,
        },
        button: {
            marginTop: 10,
            alignItems: "center",
            backgroundColor: colors.darkgreen,
        },
        buttonText: {
            fontSize: 24,
            padding: 20,
            color: colors.white,
        },
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {( {handleSubmit} ) => (
                <View style={styles.form}>
                    <FormikTextInput 
                        style = {styles.text}
                        name="username" placeholder="username" />
                    <FormikTextInput 
                        style = {styles.text}
                        name="password" placeholder="password" />
                    <TouchableWithoutFeedback onPress={handleSubmit}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )}
        </Formik>
    )
};

export default SignIn;
