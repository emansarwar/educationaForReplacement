// import { Form } from "react-router-dom"

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosCqre from "../../../hooks/useAxiosCqre";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosCqre = useAxiosCqre();
    const {user} = useAuth();
    const navigate = useNavigate();
    const [tranId, setTranId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect( ()=>{
        if(totalPrice > 0){
            axiosCqre.post('/create-payment-intent', {price: totalPrice})
        .then(res =>{
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
        }
        
    },[axiosCqre, totalPrice])

    const handleSubmit = async(event) =>{
        event.preventDefault();
        if (!stripe || !elements) {
            return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    if(error){
        // console.log('pament error', error)
        setError(error.message);
    }else{
        // console.log('payment method', paymentMethod)
        setError('');
    }
    // confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user.email || 'anonymous',
                name: user.displayName || 'anonymous'
            }
        }
    })
    if(confirmError){
        console.log('confirm error')
    }
    else{
        // console.log('payment intent',paymentIntent)
        if(paymentIntent.status == 'succeeded'){
            
            setTranId(paymentIntent.id);
            // now save the payment in the database
            const payment = {
                email: user.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date: new Date(), //convert to utc. use moment js to
                cartIds: cart.map(item => item._id),
                menuItemIds: cart.map(item => item.menuId),
                status: 'pending'
            }
            const res =await axiosCqre.post('/payments', payment)
            // console.log('payment saved',res.data);
            refetch();
            if(res.data?.paymentResult?.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank you",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/dashboard/paymentHistory')
            }
        }
    }
}
    return (
    <form className="text-center" onSubmit={handleSubmit}>
        <CardElement
        options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#b3e3b6',
                '::placeholder': {
                  color: '#4ec6cc',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        ></CardElement>
        <button className="my-4 px-10 w-2/4 btn btn-primary" type="submit" disabled={!stripe || !clientSecret}>Pay</button>
        <p className="text-red-600">{error}</p>
        {tranId && <p className="text-green-">Your transaction id:{tranId}</p>}
    </form>
  )
}

export default CheckoutForm;