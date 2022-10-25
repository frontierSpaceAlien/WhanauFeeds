import React from 'react';
import LoginScreen from '../../navigation/screens/LoginScreen.js'
import { render } from '@testing-library/react-native';

describe('Test components render for LoginScreen', () => {
    

    test("Login button renders", () =>{
        expect(getByText("Login")).toBeCalled
    });

    test("Submit button renders", () =>{
        expect(getByText("Submit")).toBeCalled
    });

    test("Email text field button renders", () =>{
        expect(getByTestID("testID")).toBeCalled
    });
})