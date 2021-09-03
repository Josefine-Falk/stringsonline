import { useEffect, useState } from "react"
import { myCostumFetch } from "../../helpers/fetch";
import Style from './productnav.module.scss';

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
            <ul>{apiData && apiData.items.map((item, key) => {
                return(
                    <div className={Style.productnav}>
                    <li key={key}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    </li>
                    </div>
                )
            })}
            </ul>
        </section>
    )
}