

test('Given that a left arrow press, subtractMonth() should return the previous month', () => {
    const { getByPlaceholder, getByText, getAllByText } = render(
      <GroceryShoppingList />
    );
  
    fireEvent.changeText(
      getByPlaceholder('Enter grocery item'),
      'banana'
    );
    fireEvent.press(getByText('Add the item to list'));
  
    const bananaElements = getAllByText('banana');
    expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
  });