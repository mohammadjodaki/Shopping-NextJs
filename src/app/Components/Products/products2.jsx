'use client'
import Image from "next/image";
import { useCart } from '../Products/CartContext';
import React, { useState } from 'react'; 
import Pic1 from "../../Images/pic2-1black.webp";
import Pic1back from "../../Images/picback2-1black.webp";
import Pic2 from "../../Images/pic2-1green.webp";
import Pic2back from "../../Images/picback2-1green.webp";
import Pic3 from "../../Images/pic2-1red.webp";
import Pic3back from "../../Images/picback2-1red.webp";
import Pic4 from "../../Images/pic2-1cream.webp";
import Pic4back from "../../Images/picback2-1cream.webp";
import Pic5 from "../../Images/pic2-2black.webp";
import Pic5back from "../../Images/picback2-2black.webp";
import Pic6 from "../../Images/pic2-3silver.webp";
import Pic6back from "../../Images/picback2-3silver.webp";
import Pic7 from "../../Images/pic2-3black.webp";
import Pic7back from "../../Images/picback2-3black.webp";
import Pic8 from "../../Images/pic2-4red.webp";
import Pic8back from "../../Images/picback2-4red.webp";
import Pic9 from "../../Images/pic2-4green.webp";
import Pic9back from "../../Images/picback2-4green.webp";
import Pic10 from "../../Images/pic2-4cream.webp";
import Pic10back from "../../Images/picback2-4cream.webp";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ColorBlack from "../../Images/swatch-black-out.png";
import ColorMidnight from "../../Images/swatch-midnight-teal.png";
import ColorBlue from "../../Images/swatch-blue-hour.png";
import ColorFogbow from "../../Images/swatch-fogbow-beige.png";
import ColorRed from "../../Images/swatch-sprite-lightning-red.png";
import ColorSilver from "../../Images/swatch-silver.png";

function products2() {

  const { addToCart } = useCart()

  const box1 = [  
    { id: 'Hugger Backpack 25L Midnight-midnight', src: ColorMidnight, idColor: 'midnight', imgFront: Pic2, imgBack: Pic2back, name: 'Hugger Backpack 25L Midnight', price: 1200 },  
    { id: 'Hugger Backpack 25L Black-black', src: ColorBlack, idColor: 'black', imgFront: Pic1, imgBack: Pic1back, name: 'Hugger Backpack 25L Black', price: 1200 },  
    { id: 'Hugger Backpack 25L Red-red', src: ColorRed, idColor: 'red', imgFront: Pic3, imgBack: Pic3back, name: 'Hugger Backpack 25L Blue', price: 1200 },  
    { id: 'Hugger Backpack 25L Fogbow-fogbow', src: ColorFogbow, idColor: 'fogbow', imgFront: Pic4, imgBack: Pic4back, name: 'Hugger Backpack 25L Fogbow', price: 1200 },  
  ];  
  const box2 = [  
    { id: 'Hugger Backpack 35L Black-black', src: ColorBlack, idColor: 'black', imgFront: Pic5, imgBack: Pic5back, name: 'Hugger Backpack 35L Black', price: 500 },  
    { id: 'Hugger Backpack 35L Silver-silver', src: ColorSilver, idColor: 'silver', imgFront: Pic6, imgBack: Pic6back, name: 'Hugger Backpack 35L Midnight', price: 500 },  
  ]; 
  const box3 = [  
    { id: 'Ramwerk Backpack 25L Red-red', src: ColorRed, idColor: 'red', imgFront: Pic8, imgBack: Pic8back, name: 'Ramwerk Backpack 25L Black', price: 400 },  
  ]; 
  const box4 = [  
    { id: 'Roamer Backpack 25L Midnight-midnight', src: ColorMidnight, idColor: 'midnight', imgFront: Pic9, imgBack: Pic9back, name: 'Roamer Backpack 25L Midnight', price: 350 },  
    { id: 'Roamer Backpack 25L Fogbow-fogbow', src: ColorFogbow, idColor: 'fogbow', imgFront: Pic10, imgBack: Pic10back, name: 'Roamer Backpack 25L Fogbow', price: 350 },  
  ];  

  const [selectedColor, setSelectedColor] = useState(box1[0].id); 
  const [selectedColor2, setSelectedColor2] = useState(box2[0].id); 
  const [selectedColor3, setSelectedColor3] = useState(box3[0].id); 
  const [selectedColor4, setSelectedColor4] = useState(box4[0].id); 

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const selectedImg = box1.find(color => color.id === selectedColor);   
  const selectedImg2 = box2.find(color => color.id === selectedColor2);   
  const selectedImg3 = box3.find(color => color.id === selectedColor3);   
  const selectedImg4 = box4.find(color => color.id === selectedColor4);   

  const handleAddToCart = (item) => { 

    addToCart({ ...item, color: selectedColor4 }) 
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);  
    if (existingItem) {   
      setCartItems(cartItems.map(cartItem =>  
        cartItem.name === item.name  
          ? { ...cartItem, quantity: cartItem.quantity + 1 }  
          : cartItem  
      ));  
    } else {  
      setCartItems([...cartItems, { ...item, quantity: 1 }]);  
    }  
    setIsCartOpen(true);  
  }; 


  const handleIncreaseQuantity = (name) => {  
    setCartItems(cartItems.map(cartItem =>  
      cartItem.name === name  
        ? { ...cartItem, quantity: cartItem.quantity + 1 }  
        : cartItem  
    ));  
  };  

  const handleDecreaseQuantity = (name) => {  
    setCartItems(cartItems.map(cartItem =>  
      cartItem.name === name && cartItem.quantity > 1  
        ? { ...cartItem, quantity: cartItem.quantity - 1 }  
        : cartItem  
    ));  
  };  

  const handleRemoveItem = (name) => {  
    setCartItems(cartItems.filter(cartItem => cartItem.name !== name));  
  };  

  return (
    <div className="w-full h-[1200px] lg:h-[600px] flex flex-wrap">
      <div className="w-1/2 lg:w-1/4 h-1/2 lg:h-full border border-gray-200 group">
        <div className="w-full h-3/4 bg-neutral-100 relative cursor-pointer">
          <Image className="w-full absolute h-full opacity-100 group-hover:opacity-0 duration-700 bg-cover" src={selectedImg.imgFront} />
          <Image className="w-full absolute h-full opacity-0 group-hover:opacity-100 duration-700 bg-cover" src={selectedImg.imgBack} />
          <p className="absolute top-2 left-2 px-2 bg-white text-sm">
            BEST SELLER
          </p>
          <div className="absolute bottom-3 text-center w-full h-10">
          <button className="w-11/12 h-full mx-auto hover:bg-black hidden hover:text-white duration-700 bg-white font-bold group-hover:flex justify-center items-center"onClick={() => handleAddToCart(selectedImg)}>Add to Cart</button>
          </div>
        </div>
        <div className="w-full flex flex-col h-1/4 px-5 py-2">
          <a className="text-base font-bold" href="#">rgldl Backpack 25L</a>
          <span className="text-gray-600">4.199kr</span>
          <div className="flex items-center *:text-base mt-2">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <a className="ml-1 text-xs text-gray-500" href="#">
              245 reviews
            </a>
          </div>
          <div className="flex gap-1 items-center mt-4">
          {box1.map(color => (  
            <Image  
              key={color.id}  
              className={`w-5 h-5 cursor-pointer ${selectedColor === color.id ? 'border border-black p-1 rounded-full' : ''}`}  
              src={color.src}  
              onClick={() => setSelectedColor(color.id)}  
            />  
          ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 lg:w-1/4 h-1/2 lg:h-full border border-gray-200 group">
        <div className="w-full h-3/4 bg-neutral-100 relative cursor-pointer">
          <Image className="w-full absolute h-full opacity-100 group-hover:opacity-0 duration-700 bg-cover" src={selectedImg2.imgFront} />
          <Image className="w-full absolute h-full opacity-0 group-hover:opacity-100 duration-700 bg-cover" src={selectedImg2.imgBack} />
          <p className="absolute top-2 left-2 px-2 bg-white text-sm">
            BEST SELLER
          </p>
          <div className="absolute bottom-3 text-center w-full h-10">
          <button className="w-11/12 h-full mx-auto hover:bg-black hidden hover:text-white duration-700 bg-white font-bold group-hover:flex justify-center items-center"onClick={() => handleAddToCart(selectedImg2)}>Add to Cart</button>
          </div>
        </div>
        <div className="w-full flex flex-col h-1/4 px-5 py-2">
          <a className="text-base font-bold" href="#">dhnr Backpack 25L</a>
          <span className="text-gray-600">4875kr</span>
          <div className="flex items-center *:text-base mt-2">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <a className="ml-1 text-xs text-gray-500" href="#">
              1204 reviews
            </a>
          </div>
          <div className="flex gap-1 items-center mt-4">
          {box2.map(color => (  
            <Image  
              key={color.id}  
              className={`w-5 h-5 cursor-pointer ${selectedColor2 === color.id ? 'border border-black p-1 rounded-full' : ''}`}  
              src={color.src}  
              onClick={() => setSelectedColor2(color.id)}  
            />  
          ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 lg:w-1/4 h-1/2 lg:h-full border border-gray-200 group">
        <div className="w-full h-3/4 bg-neutral-100 relative cursor-pointer">
          <Image className="w-full absolute h-full opacity-100 group-hover:opacity-0 duration-700 bg-cover" src={selectedImg3.imgFront} />
          <Image className="w-full absolute h-full opacity-0 group-hover:opacity-100 duration-700 bg-cover" src={selectedImg3.imgBack} />
          <p className="absolute top-2 left-2 px-2 bg-white text-sm">
            BEST SELLER
          </p>
          <div className="absolute bottom-3 text-center w-full h-10">
          <button className="w-11/12 h-full mx-auto hover:bg-black hidden hover:text-white duration-700 bg-white font-bold group-hover:flex justify-center items-center"onClick={() => handleAddToCart(selectedImg3)}>Add to Cart</button>
          </div>
        </div>
        <div className="w-full flex flex-col h-1/4 px-5 py-2">
          <a className="text-base font-bold" href="#">ffwgn Backpack 40L</a>
          <span className="text-gray-600">2979kr</span>
          <div className="flex items-center *:text-base mt-2">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <a className="ml-1 text-xs text-gray-500" href="#">
              4578 reviews
            </a>
          </div>
          <div className="flex gap-1 items-center mt-4">
          {box3.map(color => (  
            <Image  
              key={color.id}  
              className={`w-5 h-5 cursor-pointer ${selectedColor3 === color.id ? 'border border-black p-1 rounded-full' : ''}`}  
              src={color.src}  
              onClick={() => setSelectedColor3(color.id)}  
            />  
          ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 lg:w-1/4 h-1/2 lg:h-full border border-gray-200 group">
        <div className="w-full h-3/4 bg-neutral-100 relative cursor-pointer">
          <Image className="w-full absolute h-full opacity-100 group-hover:opacity-0 duration-700 bg-cover" src={selectedImg4.imgFront} />
          <Image className="w-full absolute h-full opacity-0 group-hover:opacity-100 duration-700 bg-cover" src={selectedImg4.imgBack} />
          <p className="absolute top-2 left-2 px-2 bg-white text-sm">
            BEST SELLER
          </p>
          <div className="absolute bottom-3 text-center w-full h-10">
          <button className="w-11/12 h-full mx-auto hover:bg-black hidden hover:text-white duration-700 bg-white font-bold group-hover:flex justify-center items-center"onClick={() => handleAddToCart(selectedImg4)}>Add to Cart</button>
          </div>
        </div>
        <div className="w-full flex flex-col h-1/4 px-5 py-2">
          <a className="text-base font-bold" href="#">ewfg Backpack 32L</a>
          <span className="text-gray-600">5299kr</span>
          <div className="flex items-center *:text-base mt-2">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <a className="ml-1 text-xs text-gray-500" href="#">
              854 reviews
            </a>
          </div>
          <div className="flex gap-1 items-center mt-4">
          {box4.map(color => (  
            <Image  
              key={color.id}  
              className={`w-5 h-5 cursor-pointer ${selectedColor4 === color.id ? 'border border-black p-1 rounded-full' : ''}`}  
              src={color.src}  
              onClick={() => setSelectedColor4(color.id)}  
            />  
          ))}
          </div>
        </div>
      </div>
      <div className={`w-full lg:w-1/2 p-5 transform transition-transform duration-500 ease-in-out shadow-xl fixed right-0 top-0 z-50 bg-white ${  
        isCartOpen ? "translate-x-0 top-24" : "translate-x-full"  
      }`}>  
        <div className="flex justify-between items-center py-4">  
          <h2 className="text-lg font-bold">Shopping Cart</h2>  
          <button  
            className="text-gray-600 hover:text-gray-900 transition duration-300"  
            onClick={() => setIsCartOpen(false)}  
          >  
            Close  
          </button>  
        </div>  
        <ul className="divide-y divide-gray-200">  
          {cartItems.length > 0 ? (  
            cartItems.map(cartItem => (  
              <li key={cartItem.id} className="py-4 flex justify-between">  
                <div className="flex items-center">  
                  <Image  
                    src={cartItem.imgFront}  
                    alt={cartItem.name}  
                    width={50}  
                    height={50}  
                  />  
                  <span className="ml-4">{cartItem.name}</span>  
                </div>  
                <div className="flex items-center">  
                  <button onClick={() => handleDecreaseQuantity(cartItem.name)} className="bg-gray-200 px-2">-</button>  
                  <span className="mx-2">{cartItem.quantity}</span>  
                  <button onClick={() => handleIncreaseQuantity(cartItem.name)} className="bg-gray-200 px-2">+</button>  
                  <button onClick={() => handleRemoveItem(cartItem.name)} className="text-red-500 ml-4">Remove</button>  
                </div>  
                <span className="text-gray-600">{cartItem.price * cartItem.quantity} kr</span>  
              </li>  
            ))  
          ) : (  
            <li className="py-4 text-center text-gray-600">No items in cart</li>  
          )}  
        </ul>  
        <div className="flex justify-between items-center py-4">  
          <span className="text-lg font-bold">Total:</span>  
          <span className="text-lg font-bold">{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} kr</span>  
        </div>  
        <button  
          className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"  
          onClick={() => console.log("Checkout button clicked")}  
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default products2;
