import { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';
import {myCostumFetch} from '../../helpers/fetch';
import Style from './Product.module.scss';

export const ProductDetails = () => {
    const [apiData, setApiData] = useState([]);
    let { productId } = useParams();

    const getProduct = async () => {
        const url = `https://api.mediehuset.net/stringsonline/products/${productId}`;
        const data = await myCostumFetch(url);
        setApiData(data)
        console.log(data)
    }

    useEffect(() => {
        getProduct();
    }, [productId])

     return(
        <>
            <h1 className={Style.kategori}>Kategori Navn</h1>
            <section className={Style.details_container}>
            {apiData.item ? (
                <>
                    <h2 className={Style.details_name}>{apiData.item.name}</h2>
                    {apiData.item.image.fullpath ? (
                        <img src={apiData.item.image.fullpath} alt="guitar_billede"></img>
                    ) : ('')}
                    <p className={Style.details_description}>{apiData.item.description_long}</p>
                    {apiData.item.gallery.map((image, key) => {
                        return (
                            <p key={key}>
                                <img src={image.fullpath} alt="guitar_billede"></img>
                            </p>
                        )
                    })}
                </>
            ) : (
                <p>No product found</p>
            )}
            </section>
        </>
    )
}