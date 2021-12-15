import { useAuth } from "../../contexts/AuthContext";

export default function Profile() {
    const {user} = useAuth();

    return (
        <div>
            <div>
                <img alt="profileImg" src={user.photoURL}></img>
            </div>
            <h1>{user.displayName}</h1>
            <p>Email: {user.email}</p>
            <p>User id: {user.uid}</p>
        </div>
    )
}