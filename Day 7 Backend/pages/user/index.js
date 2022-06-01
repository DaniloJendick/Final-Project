import Link from "next/link"
export default function User() {
    return (
        <div>
            {/* If there isn't a login token active */}
            <h1>THIS IS A USER PROFILE</h1>
            <Link href="/login/signin"><button>Sign In</button></Link>
            <Link href="/login/signup" ><button>Sign Up</button></Link>
            {/*TODO:
             IF SOMEONE IS LOGGED IN */}
            <Link href="/user/profile" ><button>Already Signed In</button></Link>
        </div>
    )
}