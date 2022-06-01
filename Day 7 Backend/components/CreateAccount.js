import { useState } from "react"

export default function AccountCreation() {
    const [createUser, setCreateUser] = useState({
        Username: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        CaptchaComplete: true
    })
    return (
        <div>
            <h1>Create Account</h1>
            <form onSubmit={(e) => {
                console.log(createUser),
                    e.preventDefault(),
                    validateCreation(createUser)

            }}>
                <label>
                    Username
                    <input value={createUser.Username} onChange={(e) => setCreateUser({ ...createUser, Username: e.target.value })} type="text" placeholder="Your Username"></input>
                </label>
                <label>
                    Email
                    <input value={createUser.Email} onChange={(e) => setCreateUser({ ...createUser, Email: e.target.value })} type="email" placeholder="Your Email"></input>
                </label>
                <label>
                    Password
                    <input value={createUser.Password} onChange={(e) => setCreateUser({ ...createUser, Password: e.target.value })} type="password" placeholder="Password"></input>
                </label>
                <label>
                    Confirm Password
                    <input value={createUser.ConfirmPassword} onChange={(e) => setCreateUser({ ...createUser, ConfirmPassword: e.target.value })} type="password" placeholder="Confirm Password"></input>
                </label>
                <h2>Captcha Here</h2>
                <input value="Register" type="submit"></input>
            </form>
            <h3>Already have an account? <a href="#">Sign In</a></h3>
        </div>
    )
}
function validateCreation(user) {
    return console.log(user.Password === user.ConfirmPassword)

}