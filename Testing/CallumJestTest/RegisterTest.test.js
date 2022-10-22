import LoginScreen from "../../navigation/screens/LoginScreen";
import { render, fireEvent } from "@testing-library/react-native";

test('Given that I open the app, the login/register screen should render', () => {
   const { getByPlaceholder, getByText, getAllByText } = render(<LoginScreen />);

   

    fireEvent.press(getByText(/Login/));

    expect(handleLogin).toBeCalled();
  })

test('Given that a user enters the correct data and presses register, information should be sent through', () => {
    
})