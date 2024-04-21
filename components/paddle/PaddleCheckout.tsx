'use client';

import { usePaddleContext } from '@/components/paddle/ContextConsumer';

const PaddleCheckout = () => {
  const { paddle } = usePaddleContext();

  const openCheckout = () => {
    paddle?.Checkout.open({
      items: [{ priceId: 'pro_01hvcx3fcwmw146qzvfy438yzx', quantity: 1 }],
    });
  };

  return (
    <button onClick={openCheckout}>Open Paddle Checkout</button>
  );
};

export default PaddleCheckout;
