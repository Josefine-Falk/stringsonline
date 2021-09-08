import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { myCostumFetch } from "../../helpers/fetch";
import Style from './Product.module.scss';

export const ProductList = () => {
    const [apiData, setApiData] = useState([]);

    const getProducts = async () => {
        const url = 'https://api.mediehuset.net/stringsonline/products/group/3';
        const data = await myCostumFetch(url);
        setApiData(data)
        console.log(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return(
        <>
        <section>
            {apiData.group ? (
                <>
                <h1 className={Style.list_title}>{apiData.group.title}</h1>
                <p className={Style.list_description}>{apiData.group.description}</p>
                </>
            ) : (
                <p>No products</p>
            )}
        </section>

        <section>
            <ul>
                {apiData.products && apiData.products.map((product, key) => {
                    return(
                        <li key={key}>
                            <Link to={`/products/${product.id}`}>
                                {product.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section>
        </>
    )
}