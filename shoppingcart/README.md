# SHOPPING CART

This is a project to create a shopping cart. The following features where required;

• Display a list of products with their names, prices, and an "Add to Cart" button.2
Products
• Allow users to add products to the cart.
• Display the total price of items in the cart.
• Allow users to remove items from the cart.

# Project Concept:

The project aims to develop a simple shopping cart application using React.js. The application will allow users to browse a list of products, add items to their cart, view their cart contents, update quantities, and remove items from the cart. This project serves as an introduction to building interactive user interfaces with React and managing state within a React application.

# Approach:

1. Project Setup:
- Set up a new React project using Create React App or another React boilerplate.
- Ensure necessary dependencies such as react, react-dom, and react-scripts are installed.
- Organize project structure with directories for components, styles, and data management.

2. Component Design:
- Identify main components needed for the shopping cart application, such as ProductList, ProductItem, Cart, CartItem, etc.
- Design component hierarchy and relationships based on the application's requirements.
- Create reusable components where applicable to maintain code efficiency and modularity.

3. State Management:
- Determine how to manage application state, such as cart items, product data, and user interactions.
- Utilize React state hooks (useState) to manage local component state.
- Consider using a state management library like Redux for more complex state management scenarios.

# Conclusion
By following this approach, we can develop a fully functional shopping cart application using React.js. This project will provide hands-on experience with React fundamentals, state management, component composition, and UI design, laying a solid foundation for building more complex React applications in the future.

# Solution
1. It receives a list of products as props.
2. It manages the state of the cart items using the useState hook.
3. The addToCart function adds a product to the cart by updating the cartItems state.
4. The removeFromCart function removes an item from the cart by updating the cartItems state.
5. It calculates the total price of items in the cart using the reduce method.
6. It renders the list of products with an "Add to Cart" button next to each product.
7. It renders the items in the shopping cart along with a "Remove" button for each item.
8. It displays the total price of items in the cart.

