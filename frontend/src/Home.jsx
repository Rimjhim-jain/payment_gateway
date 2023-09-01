import React from 'react'
import {Box,Stack} from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";

const Home = () => {

  const checkoutHandler = async(amount) => {
    const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")
    const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
       amount
    })
    var options = {
        "key": key, // Enter the Key ID generated from the Dashboard
        "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Rimjhim Jain", //your business name
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "http://localhost:4000/api/paymentverification",
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": "Gaurav Kumar", //your customer's name
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#121212"
        }
    };
    const rzp1 = new window.Razorpay(options);
        rzp1.open();
  }

  return ( 
    <Box>
      <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column","row"]}>
        <Card amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png?v=1620371415"} checkoutHandler={checkoutHandler}/>
        <Card amount={3000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png?v=1620371415"} checkoutHandler={checkoutHandler}/>
      </Stack>
    </Box>
  )
}

export default Home