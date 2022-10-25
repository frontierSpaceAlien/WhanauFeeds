import { React } from 'react';
import LoginScreen from '../../navigation/screens/LoginScreen.js'
import { render } from '@testing-library/react-native';

describe('Test components render for LoginScreen', () => {
    const { getByTestId, getByText, debug } = render(<LoginScreen />)

    test("Email text field button renders", () =>{
        expect(getByTestId("email")).toBeCalled
    });

    test("Email text field button renders", () =>{
        expect(getByTestId("password")).toBeCalled
    });

    test("Login button renders", () =>{
        expect(getByText("Login")).toBeCalled
    });

    test("Register button renders", () =>{
        expect(getByText("Register")).toBeCalled
   });    
})