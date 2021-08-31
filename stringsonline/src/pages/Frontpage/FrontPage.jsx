import Hero_banner from '../../assets/hero-banner.png';
import { Brands } from '../../compontens/brands/brands';
import { ProductNav } from '../../compontens/Productnav/Productnav';
import Style from './frontpage.module.scss';
export function Frontpage() {
    return(
        <>
        <img className={Style.hero_banner} src={Hero_banner} alt="" />
        <ProductNav/>
        <Brands/>
        </>
    )
}