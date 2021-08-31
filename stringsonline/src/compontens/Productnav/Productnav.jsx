import { useEffect, useState } from "react"
import { doFetch } from "../../helpers/fetch";

export const ProductNav = () => {
    const [apiData, setApiData] = useState('');
    
    const getProductNav = async () => {
        const url = 'https://api.mediehuset.net/stringsonline/';
        const result = await doFetch(url)
        setApiData(result);
    }

    useEffect(() => {
        getProductNav();
    }, [])

    return(
        <section>
            <ul>{apiData.Data && apiData.items.map((item) => {
                return(
                    <li key={item.id}>{item.title}
                    
                    </li>
                )
            })}
            </ul>
        </section>
    )
}