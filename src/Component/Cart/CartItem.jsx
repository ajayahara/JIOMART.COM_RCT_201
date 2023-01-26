
import "../Cart/CartItem.css";
import { AddSubstact } from "./AddSubstact";
export const CartItem = ({ qty, image, name, price, id }) => {
    return (
        <div className="CartItem">
            <div>
                <div>
                    <img src={image} alt="image1" />
                </div>
            </div>
            <div>
                <div>{name}</div>
                <div>
                    <div>
                        {name}
                    </div>
                    <div>
                        <span>{(price * 0.8).toFixed(2)}</span>
                        <span>{price}</span>
                        <span>You Save {(price * 0.2).toFixed(2)}</span>
                    </div>
                    <div>
                        <span>Sold By: </span>
                        <span>Reliance Retail</span>
                    </div>
                    <div>
                        <div>SAVE FOR LATER</div>
                        <AddSubstact quantity={qty} image={image} />
                    </div>
                </div>
            </div>
        </div>
    );
};
