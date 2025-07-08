# Authentication System

This project includes a complete frontend authentication system with mock backend functionality for development purposes.

## Features

- **User Authentication**: Sign in with email and password
- **Token Management**: JWT tokens stored in localStorage
- **Session Persistence**: Users remain logged in across page refreshes
- **UI State Management**: Header changes based on authentication status
- **Error Handling**: Displays error messages for failed login attempts
- **Loading States**: Shows loading indicators during authentication

## How to Test

### Test Credentials
- **Email**: `test@example.com`
- **Password**: `password123`

### Testing Steps

1. **Open the application** in your browser
2. **Click "Sign In"** in the header
3. **Enter the test credentials**:
   - Email: `test@example.com`
   - Password: `password123`
4. **Click "Sign in"** button
5. **Verify the changes**:
   - Header should show "Test User" instead of "Sign In"
   - "Saved articles" button should appear
   - Logout functionality should work

### Testing Error Cases

1. **Invalid credentials**: Try any other email/password combination
2. **Empty fields**: Try submitting with empty email or password
3. **Invalid email format**: Try an email without @ symbol

## Implementation Details

### Files Modified/Created

1. **`src/utils/API.js`** - Added mock authentication functions
2. **`src/utils/auth.js`** - Updated to use mock functions
3. **`src/contexts/UserContext.jsx`** - Created user state management
4. **`src/components/App/App.jsx`** - Added UserProvider and AuthModalManager
5. **`src/components/AuthModalManager.jsx`** - Updated with real authentication logic
6. **`src/components/LoginModal/LoginModal.jsx`** - Added loading and error states
7. **`src/components/Header/Header.jsx`** - Added conditional rendering based on auth status
8. **`src/components/ModalWithForm/ModalWithForm.css`** - Added error message styles

### Key Components

- **UserContext**: Manages authentication state across the app
- **AuthModalManager**: Handles login/register modal switching
- **LoginModal**: Form for user authentication
- **Header**: Shows different content based on auth status

### State Management

The authentication state is managed through React Context and includes:
- `currentUser`: User data object
- `isLoggedIn`: Boolean indicating authentication status
- `isLoading`: Loading state for async operations
- `handleLogin`: Function to authenticate users
- `handleLogout`: Function to sign out users

## Next Steps

When you're ready to add a real backend:

1. Replace mock functions in `API.js` with real API calls
2. Update the `baseUrl` in `API.js` to point to your backend
3. Implement proper error handling for different HTTP status codes
4. Add registration functionality
5. Implement password reset functionality

## Security Notes

- This is a frontend-only implementation for development
- In production, always use HTTPS
- Implement proper CSRF protection
- Add rate limiting for login attempts
- Use secure password hashing on the backend 