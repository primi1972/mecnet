import {useState} from 'react'

function Card() {
const [susbribe, setSuscribe] = useState(false);

    return(
        <button type="" onClick = {() => setSuscribe (!susbribe)}>
        
            {
                susbribe ? "Verdadero" : "Falso"
            }
        </button>
    )
}

export default Card