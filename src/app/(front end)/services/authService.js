// services/authService.js
export const registerUser = async (userData) => {
  try {
    const response = await fetch('https://your-api-endpoint.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    return response;
  } catch (error) {
    console.error("Error in registerUser:", error);
    throw error; // Propagate error to the caller
  }
};
