import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from "../../../assets/shop/orderCoverImg.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";

import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    // console.log(category);
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    // console.log(menu);

    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')

    // console.log('order page', dessert)
    
  return (
    <div className="bg-emerald-950">
        <Helmet>
            <title>Food Station | Order Food</title>
        </Helmet>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index) }>
        <TabList className="mb-5">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel className="bg-emerald-950">
            <OrderTab items={salad} ></OrderTab>
           
        </TabPanel>
        <TabPanel className="bg-emerald-950">
            <OrderTab items={pizza} ></OrderTab>
           
        </TabPanel>
        <TabPanel className="bg-emerald-950">
            <OrderTab items={soup} ></OrderTab>
           
        </TabPanel>
        <TabPanel className="bg-emerald-950">
            <OrderTab items={dessert} ></OrderTab>
           
        </TabPanel>
        <TabPanel className="bg-emerald-950">
            <OrderTab items={drinks} ></OrderTab>
           
        </TabPanel>
       
     
      </Tabs>
    </div>
  );
};

export default Order;
