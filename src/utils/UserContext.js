import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Defalt User"
})

export default UserContext;

