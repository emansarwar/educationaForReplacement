import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth"
import useAxiosCqre from "../../../hooks/useAxiosCqre";


const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosCqre = useAxiosCqre();

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() =>{
            const res = await axiosCqre.get(`/payments/${user.email}`)
            return res.data;
        }
    })
  return (
    <div>
        <h2 className="mb-5 text-3xl text-center">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="w-full table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>${payment.price}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.status}</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default PaymentHistory