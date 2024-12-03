import FoodCard from "../../../components/FoodCard/FoodCard"

const OrderTab = ({items}) => {
    // console.log('order tab')
    // console.log('order tab',items)

  return (
    <div className="gap-5 grid sm:grid-cols-2 lg:grid-cols-3 ml-10">
            {
                items.map(item => <FoodCard
                key={item._id}
                item={item}
                ></FoodCard>)
            }
            </div>
  )
}

export default OrderTab