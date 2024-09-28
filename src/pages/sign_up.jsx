import { signIn, signOut, useSession } from 'next-auth/react'; // Import signIn and signOut for authentication
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify'; // Import toast

const SignUp = () => {
  const { data: session } = useSession(); // Get session data
  const router = useRouter(); // Get router instance
  const toastShown = useRef(false); // Ref to track if toast has been shown

  // Redirect to home page if session is available
  useEffect(() => {
    if (session) {
      if (!toastShown.current) { // Check if the toast has already been shown
        toast.success(`Welcome, ${session.user.name}!`, { position: 'top-center' }); // Show toast message
        toastShown.current = true; // Set ref to true to indicate the toast has been shown
      }
      router.push('/'); // Redirect to the home page if signed in
    } else {
      toastShown.current = false; // Reset ref if user is not signed in
    }
  }, [session, router]);

  return (
    <div className="w-full md:my-20 py-8 flex">
      <div className="main flex flex-col justify-between md:flex-row w-full">
        {/* Left Image Section */}
        <div className="left w-full h-full md:px-0 px-6 mb-6 md:mb-0">
          <Image 
            src="/login/sign-in.png" 
            alt="Sign In Illustration" 
            width={600} 
            height={300} 
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="right w-full md:mr-20 lg:max-w-xl flex flex-col justify-center px-6">
          {session ? ( // Check if the user is signed in
            <>
              <h1 className="text-3xl font-semibold mb-4">Welcome, {session.user.name}!</h1>
              <button 
                className="bg-red-600 text-white py-3 rounded-lg transition-all mb-4"
                onClick={() => signOut()} // Trigger sign-out
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-semibold mb-4">Sign in with GitHub</h1>
              <p className="text-gray-600 mb-6">Use your GitHub account to sign in</p>

              {/* GitHub Sign-In Button */}
              <button 
                className="border border-gray-300 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
                onClick={() => signIn('github', { callbackUrl: '/' })} // Redirect to home after sign-in
              >
                <img src="/login/github-icon.png" alt="GitHub Icon" className="w-5 h-5" />
                Sign in with GitHub
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
