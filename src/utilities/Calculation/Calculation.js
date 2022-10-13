 const addToDB = id => {
    let shoppinCart ;

    const storageCart = localStorage.getItem('Shopping');
    if(storageCart){
         shoppinCart = JSON.parse(storageCart);
    }else{
        shoppinCart = {}
    }


    //add to shoppingCart value
    const value = shoppinCart[id];
    if(value){
        const newVlue = parseInt(value) + 1;
        shoppinCart[id] = newVlue;
    }else{
        shoppinCart[id] = 1;
    }
    localStorage.setItem('Shopping', JSON.stringify(shoppinCart));
 };

 const removeFromDb = id => {
    const storageCart = localStorage.getItem('Shopping');
    if(storageCart){
        const shoppingCart = JSON.parse(storageCart);
        if(id){
            delete shoppingCart[id];
            localStorage.setItem('Shopping', JSON.stringify(shoppingCart));
        }
    }
 }

 const getTotalPrice = products => {
    const totalReduce = (previous, current) => previous + current.price;
    const total = products.reduce(totalReduce,0);
    return total;
 }

 export {
    addToDB
    , removeFromDb,
    getTotalPrice as getTotal
};