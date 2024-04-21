import { useEffect, useState, createContext } from 'react';
import Script from 'next/script';
import axios from 'axios';

interface PaddleContext {
  paddle: any;
  products: any[];
}

const PaddleContext = createContext<PaddleContext | null>(null);

const PaddleProvider = ({ children }: { children: React.ReactNode }) => {
  const [paddle, setPaddle] = useState<any | null>(null);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://vendors.paddle.com/api/2.0/product/get_products', {
        params: {
          vendor_auth_code: process.env.PADDLE_VENDOR_AUTH_CODE, // Replace with your actual vendor auth code
        },
      });

      setProducts(response.data.response.products);
    };

    fetchProducts();
  }, []);

  return (
    <PaddleContext.Provider value={{ paddle, products }}>
      <>
        <Script
          src="https://cdn.paddle.com/paddle/paddle.js"
          onLoad={() => {
            if (process.env.NEXT_PUBLIC_PADDLE_SANDBOX) {
              Paddle.Environment.set('sandbox');
            }
            Paddle.Setup({
              vendor: process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID,
              eventCallback: (eventData: any) => {
                if (eventData.eventType === 'Checkout.Loaded') {
                  setPaddle(Paddle);
                }
              },
            });
          }}
          strategy="beforeInteractive"
        />
        {children}
      </>
    </PaddleContext.Provider>
  );
};

export { PaddleProvider, PaddleContext };