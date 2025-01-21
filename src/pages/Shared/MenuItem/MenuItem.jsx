const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2 border-1 bg-teal-900 border rounded-3xl cyan-500">
      <div className="text-left">
        <img style={{ borderRadius: "20px  20px 0 0" }} className="w-full" src={image} alt="" />
        <div className="pl-4">
          <h3 className="text-xl text-yellow-200 uppercase">{name}</h3>
          <p >{recipe}</p>
          
        
        <p className="text-blue-400">Events:{price}</p>
        <p className="text-blue-400">Research History:{price}</p>
        <p className="text-blue-400">Sports:{price}</p>
        <p className="text-red-300">Admission Deadline:{price}</p>
        <button className="bg-yellow-700 btn">Details</button>
        </div>
        
        
        
        
        
        
      </div>
    </div>
  );
};

export default MenuItem;
