import { User } from "../types/user"

export const findUserByEmailAndPassword = async (email:string, senha: string) => {
    if(email === "admin@hotmail.com" && senha === "1234"){
        const user: User = {
            id: "2",
            name: "fulano"
        }
        
        return user;      
    }

    return null;

}

export const createUserToken = (user: User) => {
    return "1234";
}
