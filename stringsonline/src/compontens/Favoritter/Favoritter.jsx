import { useEffect, useState } from "react"
import { doFetch } from "../../helpers/helpers";
import Style from './favoritter.module.scss';

export const Favoritter = () => {
    const [apiData, setApiData] = useState([]);

    const getFavoritter = async () => {
        const url = "https://api.mediehuset.net/stringsonline/products/1";
        const result = await doFetch(url);
        setApiData(result.item);
    };
    useEffect(() => {
        getFavoritter();
    }, []);
    console.log(apiData);

    return(
        <section className={Style.container_news}>
            <h3>Sidste nyt</h3>
            <p>{apiData.brand}</p>
            <p>{apiData.description_short}</p>
            <img className={Style.news_img} src={apiData.image} alt="" />
        </section>
    );
}