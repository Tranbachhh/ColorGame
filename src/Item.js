import { useEffect,useState } from "react";
import { motion } from "framer-motion";

function Item({color , index , pkey}){
    
    const [rotate,setRotate] = useState(false) ;

    useEffect(()=>{
        setRotate(r=>!r)
    },[color])

    if(pkey===index){
        const values = color.slice(color.indexOf('(') + 1, color.indexOf(')')).split(',');
        const greenValue = parseInt(values[1]) + Math.round(Math.random()*20)+5;
        const redValue = parseInt(values[0]) + Math.round(Math.random()*20)+5;
        const blueValue = parseInt(values[2]) + Math.round(Math.random()*20)+5;

        color = `rgb(${redValue}, ${greenValue}, ${blueValue})`
    }

    return(
        <motion.div
        animate={{rotate: rotate ? 180:0}}
        transition={{ type: "spring" }}
        style={{backgroundColor:color,paddingBottom: '100%' }} className="col-12 item rounded text-center">
            {index}
        </motion.div>
    )
}

export default Item