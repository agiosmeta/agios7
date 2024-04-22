import { GetServerSideProps } from 'next';
import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { PaddleProvider } from '@/components/paddle/PaddleProvider';
import { usePaddleContext } from '@/components/paddle/ContextConsumer'

interface User {
  id: string;
  // other properties of the user
}

export default function ProtectedPage({ user }: { user: User }) {
  if (!user) {
    return <div>Redirecting...</div>;
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center">
      <div className="w-full">
        <div className="py-6 font-bold bg-purple-950 text-center">
          Authenticated User
        </div>
        
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <DeployButton />
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header />

        <main className="flex-1 flex flex-col gap-6">
          <PaddleProvider>
            <div className="flex justify-center items-center">
              <button onClick={() => {
                if (typeof window !== 'undefined' && window.Paddle) {
                  window.Paddle.Checkout.open({
                    product: 'pri_01hvkkwfk47qzczez93g2rzxns', // replace with your product id
                  });
                }
              }}>
                Open Paddle Checkout
              </button>
            </div>
          </PaddleProvider>
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { user },
  }
}