

test('Given that a left arrow press, subtractMonth() should return the previous month', () => {
    const { getByText } = render(
      <GroceryShoppingList />
    );
  
    fireEvent.press(getByText('Add the item to list'));
  
    
  });