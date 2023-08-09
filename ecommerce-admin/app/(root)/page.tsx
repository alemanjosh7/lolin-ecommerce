import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignOutButton
} from "@clerk/nextjs";

const SetupPage = ( )=> {
  return (
    <div className="p-4 flex justify-end"> 
      <div className="mr-4">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="mt-1">
        <SignOutButton/>
      </div>
    </div>
  )
}

export default SetupPage;