import classes from "../modules/Hero.module.scss";
import iphone from "../assets/hero-iphone.svg";

const Hero = () => {
    return (
        <>
            <div className={classes["main-div"]}>
                <div className={classes["hero-container"]}>
                    <h2>Pro.Beyond.</h2>
                    <h1>IPhone 14 <span>Pro</span></h1>
                    <p>Created to change everything for the better. For everyone</p>
                    <button>
                        <span>Shop Now</span>
                    </button>
                    <img src={iphone} alt={"iphone-image"}/>
                </div>
            </div>
        </>
    )
}

export default Hero