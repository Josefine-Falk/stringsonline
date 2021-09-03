import { useEffect, useState } from "react"
import { myCostumFetch } from "../../helpers/fetch";
import Style from './brands.module.scss'

export const Brands = () => {
    const [apiData, setApiData] = useState('');

    const getBrands = async () => {
        const url = 'https://api.mediehuset.net/stringsonline/brands';
        const result = await myCostumFetch(url)
        setApiData(result);
    }
    useEffect(() => {
        getBrands();
    }, [])
    console.log(apiData);

    return(
        <>
        <h1 className={Style.brands}>Brands</h1>
        <ul>{apiData && apiData.items.map((item, key) => {
            return(
                <section className={Style.container_brands}>
                <li key={key}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <img className={Style.brands_img} src={item.image_fullpath} alt="" />
                </li>
                </section>
            )
        })}
        </ul>
        </>
    )
}