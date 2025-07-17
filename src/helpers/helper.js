const sumProduct=(products)=>{
    const itemCounter=products.reduce((counter,product)=> counter+product.quantity,0);
    const total=products.reduce((total,product)=> total+product.price*product.quantity,0).toFixed(2)
    return{itemCounter,total}
    }

    const productquantity = (state, id) => {
        const items = state?.selecteditem || [];
        const index = items.findIndex(item => item.id === id);
        return index === -1 ? 0 : items[index].quantity;
      };
      
      
    export{sumProduct,productquantity}
    