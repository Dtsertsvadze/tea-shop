import { createContext, useState, useMemo } from "react";

export interface CartItem {
  id: number;
  img: string;
  price: number;
  servingSize: number;
  species: string;
  amount?: number;
}

interface ContextInterface {
  bagList: CartItem[];
  addToCarthandler: (item: CartItem) => void;
  openedCart: boolean;
  cartOpenHandler: () => void;
  removeFromCartHandler: (id: number) => void;
  decrementItemAmount: (id: number) => void;
  totalAmount: number;
}

export const MyContext = createContext<ContextInterface | undefined>(undefined);

export const MyContextProvider = ({ children }: any) => {
  const [bagList, setBagList] = useState<CartItem[]>([]);
  const [openedCart, setOpenedCart] = useState(false);

  const incrementItemAmount = (itemId: number) => {
    const updatedBagList = bagList.map((item) => {
      if (item.id === itemId) {
        return { ...item, amount: (item.amount || 0) + 1 };
      }
      return item;
    });

    setBagList(updatedBagList);
  };

  const decrementItemAmount = (itemId: number) => {
    const updatedBagList = bagList.map((item) => {
      if (item.id === itemId) {
        const updatedAmount = (item.amount || 0) - 1;
        const newAmount = updatedAmount >= 1 ? updatedAmount : 1;
        return { ...item, amount: newAmount };
      }
      return item;
    });

    setBagList(updatedBagList);
  };

  const addToCarthandler = (item: CartItem) => {
    const existingItem = bagList.find((cartItem) => cartItem.id == item.id);

    if (existingItem) {
      incrementItemAmount(item.id);
    } else {
      setBagList([...bagList, { ...item, amount: 1 }]);
    }
  };

  const removeFromCartHandler = (id: number) => {
    const filteredBagList = bagList.filter((i) => i.id !== id);
    setBagList(filteredBagList);
  };

  //this method toggles whether cart is shown or not
  const cartOpenHandler = () => {
    setOpenedCart(!openedCart);
  };

  const totalAmount = useMemo(() => {
    return bagList
      .map((item) => (item.amount ? item.amount * item.price : 0))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }, [bagList]);

  return (
    <MyContext.Provider
      value={{
        totalAmount,
        decrementItemAmount,
        removeFromCartHandler,
        openedCart,
        cartOpenHandler,
        bagList,
        addToCarthandler,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
