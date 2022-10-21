import LoginScreen from "../../navigation/screens/LoginScreen";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react-native";

test('Given that I open the app, the login/register screen should render', () => {
   render(<LoginScreen />);
   const textInput = screen.getByPlaceholderText(/Email/);
   expect(textInput).toBeInTheDocument();
  })

test('Given that a user enters the correct data and presses register, information should be sent through', () => {
    
})