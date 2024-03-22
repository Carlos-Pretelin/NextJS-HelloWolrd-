import { LoginCredentials, User } from "../types";

export const fetchData = async (url: string): Promise<any> => {
  try {
    const req = await fetch(url);
    const data = await req.json();
    return data;
  } catch {
    console.error("Error fetching the data");
  }
};

//Article Component
export const fetchArticleData = async (ARTICLE_API_URL: string): Promise<any> => {
  try {
    const response = await fetch(ARTICLE_API_URL);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || "Error fetching article");
    }
  } catch (error) {
    console.error("Error fetching article:", error);
  }
};

//LoginPage Component
export const handleLogIn = async (userLogCredentials: LoginCredentials) => {
  try {
    const response = await fetch(
      "https://itchy-famous-squares-carlosppretelin.replit.app/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogCredentials),
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    console.log("This is the Response Data: ", data);
    return data;
  } catch (error) {
    console.error("Unsuccesful Log in!", error);
  }
};

//RegisterForm Component:
export const registerUser = async (userData: User) => {
  try {
    const response = await fetch(
      "https://itchy-famous-squares-carlosppretelin.replit.app/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    console.log("Register succesful!", data);
    return data;
  } catch (error) {
    console.error("Register unsuccesful!", error);
  }
};

export const fetchUserData = async () => {
  try {
    const response = await fetch(
      "https://itchy-famous-squares-carlosppretelin.replit.app/users"
    );
    const data = await response.json();
    console.log("User List: ", data);
    return data;
  } catch (error) {
    console.error("Error Fetching user data!", error);
  }
};
