# Course Registration App

## Features

1. **Course Selection**

   - Users can select courses from a list.
   - Credit limits are enforced to prevent users from exceeding 20 credits.

2. **Credit Management**

   - The app tracks total credits and displays remaining credits.
   - Alerts are shown when users reach the credit limit.

3. **Cart Summary**

   - Selected courses, total credits, and price are displayed.
   - Users can review and manage their selections.

4. **Course Descriptions**

   - Detailed information about each course is available.
   - Users can view course descriptions before selecting.

5. **Error Handling**
   - React Toastify is used for user-friendly error messages.
   - Alerts are displayed when courses are duplicated or the credit limit is reached.

## State Management

- State is managed using React's `useState` and `useEffect` hooks.
- The `Home` component fetches course data from a JSON file and stores it in `catagoryData`.
- The `Card` component manages the cart state (`seletedData`) and credit/price totals.
- React Toastify is used for error messages.
- Course availability and disabled states are managed in components using state variables.

## Usage

1. Browse the list of courses.
2. Click the "Select" button to add a course to your cart.
3. Review your selected courses and check your credit/price summary.
4. Ensure you don't exceed 20 credits to proceed.

## Technologies Used

- React
- React Toastify
