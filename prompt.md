You are helping me build a beginner-friendly online buy-and-sell website
(marketplace) as a simple web application.

## Goal

Create a small marketplace website where visitors can browse products, search
and filter them, add them to a shopping cart, and complete a simple checkout.
The website is for learning purposes, so there is no real payment and no real
backend.

## Requirements

* Display a list of at least 8 sample products as cards. Each product must show
  its image (use a placeholder or emoji), name, price in Rupiah (format:
  Rp 150.000), category, and seller name.

* Include a search box that filters products by name as the user types.

* Include a category filter (for example: All, Electronics, Fashion, Books,
  Hobbies).

* Include a sort option: lowest price, highest price, and newest.

* Allow users to add a product to the shopping cart from the product card.

* Include a cart panel or page that shows the items, quantity of each item
  (with + and - buttons), a remove button, and the total price.

* Include a simple checkout form (name, address, phone number) with basic
  validation. After a successful checkout, show a confirmation message and
  empty the cart.

* Include a "Sell Item" form where a user can add a new product (name, price,
  category, description). The new product must appear in the product list
  immediately.

* Save the cart and the user-added products in localStorage so the data is not
  lost when the page is refreshed.

* All text in the interface must be in Bahasa Indonesia.

* Make the interface clean, modern, readable, and responsive (it must look good
  on both mobile and desktop screens).

## Constraints

* Use only HTML, CSS, and vanilla JavaScript.

* Keep the implementation simple enough for a first-year student to understand.

* Avoid unnecessary libraries, frameworks, and external dependencies (no
  Bootstrap, no jQuery, no React).

* Keep the code organized in separate files and use clear variable and function
  names.

* Add short comments in the code that explain what each important part does.

* Do not use a real payment system or a real database. Use a JavaScript array
  for the sample product data.

## Suggested File Structure

* `index.html` : the page structure (header, product list, cart, forms).
* `style.css` : all styling, including the responsive layout.
* `script.js` : all logic (rendering products, search, filter, sort, cart,
  checkout, sell form, localStorage).

## Output

* Provide the complete code for each file.

* Briefly explain the purpose of each file.

* Explain how to run the website (for example, by opening `index.html` in a
  browser).

* Describe how to test the main interactions: searching, filtering, sorting,
  adding to cart, changing quantity, removing items, checkout validation,
  selling a new item, and refreshing the page to confirm localStorage works.