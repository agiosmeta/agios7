import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { PaddleProvider } from '@/components/paddle/PaddleProvider';
import { usePaddleContext } from '@/components/paddle/ContextConsumer'


export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }



 
  function jQuery(arg0: ($: any) => void): import("react").ReactNode {
    throw new Error("Function not implemented.");
  }
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <div className="py-6 font-bold bg-purple-950 text-center">
          This is a protected page that you can only see as an authenticated
          user
        </div>
        
            (<PaddleProvider>
              const paddle = usePaddleContext()

if (paddle) {
  //Load Paddle actions


/**
 * Padde Button
 *
 * Paddle Button with Paddle.js.
 *
 * @since 	1.0.0
 * @package EM
 */

jQuery( function( $ ) {
	$( document ).ready(function() {
		// Log.
		console.log( "DOM Ready!" );
		
		$('.swalo').on('click', function(){
			console.log( "CLICKED!" );
			swal("Oops!", "Something went wrong on the page!", "error");
		});

 

// Function to display a sweet alert.
function swal(title: string, message: string, type: string) {
  swal(title, message, type);
}
Paddle.Setup({
  vendor: 18989,
  // debug: true,
  eventCallback: function( data: any ) {
    console.log( data );
    console.log( 'EVENT:' + data.event)
    if ( 'Checkout.PaymentComplete' == data.event ) {
      console.log( '———CONVERSION!!! 🎉 ———' );
      console.log( 'PAYMENT CHARGED:' + data.eventData.checkout.completed );
      console.log( 'CHECKOUT ID:' + data.eventData.checkout.id );
      console.log( 'CHECKOUT EMAIL:' + data.checkoutData.guest_email );
      const checkout_id = data.eventData.checkout.id;
    }
  } // End eventCallback.
});
		
		// Paddle.Order.details( checkout_id, function(order) {
		// 				// The 'data' variable will contain order information in the format described in section one.
		// 				console.log( order );
		// 			});

		// On click of button.
		$( '.em_paddle_button' ).on( 'click', function() {
			// Closed without buying.
      function checkoutClosed(data: any): void {
        console.log(data);
        alert('Your purchase has been cancelled, we hope to see you again soon!');
      }

			// Bought.
function checkoutComplete(data: any) {
  console.log(data);
  alert('Thanks for your purchase.');
}

// Start Checkout.
Paddle.Checkout.open({
  product: 'pro_01hvcx3fcwmw146qzvfy438yzx',
  email: "test@sale.com",
  successCallback: "checkoutComplete",
  closeCallback: "checkoutClosed"
}); // End checkout.
		}); // End on click.
	}); // End DOM Ready.
} ) // EOF.






















//End Paddle actions
}
            </PaddleProvider>)
        
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
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
  
                            </main>
      </div>


      <script src="https://cdn.paddle.com/paddle/paddle.js"></script>

<div className="wrap">
  <a href="#!" className="em_paddle_button">BUY NOW</a>
  <a href="#!" className="swalo">SWAL NOW</a>
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
  ;
}
function swal(arg0: string, arg1: string, arg2: string) {
  throw new Error("Function not implemented.");
}

