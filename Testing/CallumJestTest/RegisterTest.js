import App from "./../../App";

test('Given that I open the app, the login/register screen should render', () => {
    render(<App />);
    const app = screen;
    expect(app).toBeInTheDocument();
  })

test('Given that a user enters the correct data and presses register, a information should be sent through', () => {
    
})