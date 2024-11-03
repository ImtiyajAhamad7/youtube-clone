import { Fetch } from "../utils/Fetch";

export const isLoggedIn = () => {
  const token = sessionStorage.getItem("accessToken");
  return token !== null; // If token exists, return true
};

export async function getUser() {
  try {
    // Await the Fetch call to ensure we get the response
    const res = await Fetch("getUser", "GET");

    if (res) {
      const data = await res.json();
      return data;
    } else {
      // console.log("Login failed", res.status, res.statusText);
      console.log("no res");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}
export function logout() {
  // Clear the access token from sessionStorage

  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("userId");

  // Optionally, if using refresh tokens, clear that too
  // sessionStorage.removeItem("refreshToken");

  // Redirect to the login page or home page
}
