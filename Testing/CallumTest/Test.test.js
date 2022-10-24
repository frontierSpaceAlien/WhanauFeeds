import React from 'react';
import LoginScreen from '../../navigation/screens/LoginScreen.js'
import { render, fireEvent } from '@testing-library/react-native';

describe('Logging in with valid test data', () => {
    test("Should log in correctly", () =>{
        const { getByTestId, getByText, debug } = render(<LoginScreen />)
        fireEvent.changeText(getByTestId("email"), "callum@clow.net.nz");
        fireEvent.changeText(getByTestId("password"), "testpassword123");
        fireEvent.press(getByTestId("login"))
        expect(getByText("* Last name is required.")).toBeCalled
        debug()
    })

    test("should display to user \"* First name is required\" ", () =>{
        const { getByTestId , getByText, debug } = render(<AddFriendScreen />)
        fireEvent.changeText(getByTestId("lastInput"), "test")
        fireEvent.press(getByTestId("submitButton"))
        expect(getByText("* First name is required.")).toBeCalled
    })

    test("should display to user \"* First name is required\" and \"* Last name is required\" ", () =>{
        const { getByTestId , getByText, debug } = render(<AddFriendScreen />)
        fireEvent.press(getByTestId("submitButton"))
        expect(getByText("* Last name is required.")).toBeCalled
        expect(getByText("* First name is required.")).toBeCalled
    })
})