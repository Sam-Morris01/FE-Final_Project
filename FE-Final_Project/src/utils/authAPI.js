// Mock authentication functions for frontend-only development
export const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      // Mock validation - you can customize these credentials
      if (email === "test@example.com" && password === "password123") {
        resolve({ 
          token: "mock-jwt-token-" + Date.now(),
          user: {
            _id: "mock-user-id",
            name: "Sam Morris",
            email: email
          }
        });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      // Mock token validation
      if (token && token.startsWith("mock-jwt-token-")) {
        resolve({
          data: { 
            name: "Sam Morris", 
            email: "test@example.com", 
            _id: "mock-user-id",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          },
        });
      } else {
        reject(new Error("Invalid token"));
      }
    }, 500);
  });
};

// Legacy mock functions (keeping for backward compatibility)
export const mockSignIn = async ({ email, password }) => {
  return authorize(email, password);
};

export const mockCheckToken = async (token) => {
  const response = await checkToken(token);
  return response.data;
}; 