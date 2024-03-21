export default function PrductList(){

   let productList = [
    {"id" : 1, "name" : "Iphone 11", "price": 5000, "image" : "phone1.jpg", "description": "IPhone 11 "},
    {"id" : 2, "name" : "Iphone 12", "price": 6999, "image" : "phone2.jpg", "description": "IPhone 12 "},

   ]
    return (
        <div>
            <h1>Please Select Our Products</h1>
            <div>
                {
                    productList.map((product)=>{
                        return (
                            <div key={product.id}>
                           <h1> {product.name}<br/></h1>
                            <h2>${product.price}<br/></h2>
                            <img src={process.env.PUBLIC_URL+'/image/'+product.image}/><br/>
                            {product.description}<br/>
                            </div>
                        )
                    })
                    
                    
                    
                    
                }
            </div>
        </div>
    )
}