export async function login(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  try {
    const response = await fetch(
      `${process.env.REACT_APP_HOST}/login`,
      requestOptions
    );

    const data = await response.json();

    // Log the response to inspect its structure
    console.log(data);

    if (!response.ok) {
      // If the response contains an error message from the backend, show it
      const errorMessage = data.message || "Login failed. Please try again.";
      // eslint-disable-next-line no-throw-literal
      throw { message: errorMessage, status: response.status };
    }

    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error; // Pass the error back to be caught in the UI
  }
}

export async function register(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  try {
    const response = await fetch(
      `${process.env.REACT_APP_HOST}/register`,
      requestOptions
    );

    const data = await response.json();

    // Log the response to inspect its structure
    console.log(data);

    if (!response.ok) {
      // If the response contains an error message from the backend, show it
      const errorMessage =
        data.message || "Registration failed. Please try again.";
      // eslint-disable-next-line no-throw-literal
      throw { message: errorMessage, status: response.status };
    }

    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
  } catch (error) {
    console.error("Error during registration:", error.message);
    throw error; // Pass the error back to be caught in the UI
  }
}

export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}
