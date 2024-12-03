import { loadStripe } from "@stripe/stripe-js"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const Payment = () => {
  return (
    <div>
        <SectionTitle heading="payment" subHeading="Please pay to get"></SectionTitle>
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>

            </Elements>
        </div>
    </div>
  )
}

export default Payment