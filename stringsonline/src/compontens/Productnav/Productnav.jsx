import { useEffect, useState } from "react"
import { myCostumFetch } from "../../helpers/fetch";

export const ProductNav = () => {
    const [apiData, setApiData] = useState('');
    
    const getProductNav = async () => {
        const url = 'https://api.mediehuset.net/stringsonline/productgroups';
        const result = await myCostumFetch(url)
        setApiData(result);
    }

    useEffect(() => {
        getProductNav();
    }, [])

    return(
        <section>
            <h1>Produkter</h1>
            <ul>{apiData && apiData.items.map((item, key) => {
                return(
                    <li key={key}>
                    <p>{item.title}</p>
                    </li>
                )
            })}
            </ul>
        </section>
    )
}