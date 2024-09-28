import { getSession } from 'next-auth/react';

const ProtectedPage = ({ session }) => {
  if (!session) {
    return <p>Access Denied</p>;
  }

  return <div>Welcome, {session.user.name}!</div>;
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/sign_in', // Redirect to sign-in page if not logged in
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default ProtectedPage;
