import { baseUrl, checkResponse, mockSignIn, mockCheckToken } from "./API";

function signUp({ name, avatar, email, password }) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(checkResponse);
}

function signIn({ email, password }) {
  // Use mock sign in for frontend-only development
  return mockSignIn({ email, password })
    .then((data) => {
      if (data.jwt) {
        setToken(data.jwt);
      }
      return data;
    });
}

function setToken(token) {
  localStorage.setItem("jwt", token);
}

function getToken() {
  const token = localStorage.getItem("jwt");

  if (!token) {
    return null;
  }
  return token;
}

export const removeToken = () => {
  localStorage.removeItem("jwt");
};

function checkToken() {
  const token = getToken();

  if (!token) {
    return Promise.reject("No token");
  }

  // Use mock token check for frontend-only development
  return mockCheckToken(token);
}

export { signUp, signIn, setToken, getToken, checkToken };