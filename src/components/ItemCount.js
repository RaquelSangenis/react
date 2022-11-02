
const ItemCount = (props) =>{
    const handleChange = (e) => {
        props.handleChange(parseInt(e.target.value))
    }

    return <input className="counter-input" type="number" value={props.num} onChange={(e)=>handleChange(e)}/> 
           
}

export default ItemCount