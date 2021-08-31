import Footer_logo from "../../assets/footer.png";
import Style from './footer.module.scss';
export function Footer() {
    return(
        <section className={Style.Footer}>
        <img src={Footer_logo} alt="logo" />
        </section>
    )
}