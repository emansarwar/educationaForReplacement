// import React from 'react'
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { Helmet } from "react-helmet-async"
import Cover from "../../Shared/Cover/Cover"
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu"
import MenuCategory from "../MenuCategory/MenuCategory"

// import PopularMenu from "../../Home/PopularMenu/PopularMenu"
const Menu = () => {
  const menuPara = "Explore a world of flavors with our carefully curated menu. From mouthwatering appetizers to decadent desserts, every dish is crafted with fresh ingredients and a passion for perfection. Whether you’re craving a hearty meal, a light bite, or something sweet, we have something to satisfy every taste. Dive into our menu and treat your senses to a dining experience like no other!"
  const offeredPara = "Explore our seasonal specials and signature dishes, carefully curated to bring you the best of local and global cuisine. From farm-to-table fresh ingredients to exotic flavors, we offer meals that satisfy every craving. Indulge in gourmet dining or enjoy a casual meal with friends, all while experiencing exceptional service and inviting ambiance."
  const dessertPara = "Indulge your sweet tooth with our delectable selection of desserts, crafted to perfection for every occasion. From rich, velvety chocolate cakes and decadent cheesecakes to refreshing fruit tarts and creamy puddings, our desserts are made using the finest ingredients. Each bite promises to satisfy your cravings and leave you wanting more. Whether you're celebrating a special occasion or simply treating yourself, our desserts are the perfect way to end your meal on a sweet note."

  const saladPara = "Fresh, vibrant, and full of flavor—our salads are the perfect balance of health and taste. Made with crisp, locally sourced greens, colorful vegetables, and topped with flavorful dressings, each salad is a celebration of nature’s best. Whether you're craving a light, refreshing bite or a hearty meal packed with protein, our variety of salads caters to every preference. From zesty citrus-infused salads to savory classics like Caesar, we promise a healthy, satisfying experience in every bite."


  const soupPara = "Warm, comforting, and full of flavor—our soups are the perfect dish for any season. Made with a blend of the freshest ingredients, our soups range from hearty classics like creamy tomato and rich butternut squash to lighter, refreshing options like vegetable broth. Each bowl is crafted to deliver warmth and satisfaction with every spoonful. Whether you’re seeking a cozy meal on a chilly day or a light starter before your main course, our soups offer a nourishing, flavorful experience."


  const drinksPara = "Quench your thirst with our refreshing selection of beverages, designed to complement every meal and occasion. From freshly squeezed fruit juices and iced teas to rich, aromatic coffees and creamy milkshakes, our drink menu offers something for everyone. Whether you're looking for a cool, revitalizing drink on a warm day or a cozy hot beverage to sip by the fireplace, we have a wide variety of options to suit your mood. Enjoy the perfect pairing for your meal or simply indulge in a drink all on its own!"
  const pizzaPara = "Experience the perfect slice with our mouthwatering pizza selection, crafted using only the freshest ingredients. From classic Margherita to bold, gourmet toppings, our pizzas are baked to perfection with a golden, crispy crust and a blend of rich, flavorful cheeses. Whether you prefer a traditional pizza or something with a unique twist, we offer a variety of options to satisfy every craving. Enjoy a delicious meal that brings the authentic taste of Italy to your table, one slice at a time."
  


    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    const offered = menu.filter(item => item.category === 'offered')
  return (
    <div className="bg-cyan-900">
        <Helmet>
            <title>Food Station | Menu</title>
        </Helmet>
        <Cover 
        img={menuImg} 
        title="our menu"
        detailPara={menuPara}
        ></Cover>
        <SectionTitle
        heading="Today's Offer"
        subHeading="Don't Miss"
        ></SectionTitle>
        {/* offered menu items */}
        <MenuCategory
        items={salad}
        title="salad"
        coverImg={saladImg}
        detailPara={saladPara}
        ></MenuCategory>

       
        
        <MenuCategory
        items={dessert}
        title="dessert"
        coverImg={dessertImg}
        detailPara={dessertPara}
        ></MenuCategory>
        <MenuCategory
        items={drinks}
        title="drinks"
        coverImg={dessertImg}
        detailPara={drinksPara}
        ></MenuCategory>
        <MenuCategory
        items={pizza}
        title="pizza"
        coverImg={pizzaImg}
        detailPara={pizzaPara}
        ></MenuCategory>
        
        <MenuCategory
        items={soup}
        title="soup"
        coverImg={soupImg}
        detailPara={soupPara}
        ></MenuCategory>
        
         <MenuCategory 
        items={offered} 
        title="offered" 
        coverImg={saladImg}
        detailPara={offeredPara}
        ></MenuCategory>
    </div>
  )
}

export default Menu