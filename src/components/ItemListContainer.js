import  data from "../data/index.json"
import ItemList from "./ItemList"
import Loader from "./Loader"
import { useEffect, useState } from "react"



const ItemListContainer=()=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
            const mainPageProducts = data.map((category)=>{
                return category.products
            }).flat().filter((prod)=> prod.mainPage == true)

            setProducts(mainPageProducts)
        },1000)
    },[])

    return <>
        {
            !products.length ? 
                <Loader/>
            :
               <div>
                    <h5>EDICIÓN ESPECIAL</h5>
                    {
                        products.map((prod)=>{
                            return <ItemList product={prod} />
                        })
                    }
                </div>
        }
    </>
}

export default ItemListContainer