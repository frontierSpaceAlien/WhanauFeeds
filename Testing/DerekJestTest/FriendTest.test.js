import React from 'react';
import AddFriendScreen from '../../navigation/screens/AddFriendScreen.js'
import { render, fireEvent } from '@testing-library/react-native';

describe('Friend List Adding', () => {
    test("should display to user \"* Last name is required\" ", () =>{
        const { getByTestId ,  getByText, debug } = render(<AddFriendScreen />)
        fireEvent.changeText(getByTestId("firstInput"), "test")
        fireEvent.press(getByTestId("submitButton"))
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