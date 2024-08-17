import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); //object

    //Check if token has expired; test route
    const fetchRecords = async () => {
      if (!user || !user.token) {
        logoutUser();
        return;
      }

      try {
        const response = await fetch("/api/typeRecords", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (response.status === 401){
            const data = await response.json();

            if (data.error === 'Expired Token'){    
                logoutUser();
            }else {
                console.error('Unauthorized request:', data.error);
            }
        }
      } catch (err) {
        console.log("Error during auth check:", err);
      }
    };

    const logoutUser = () => {
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
    };

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
      fetchRecords();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
