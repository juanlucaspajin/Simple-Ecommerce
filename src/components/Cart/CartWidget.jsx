import { Badge } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";

function CartWidget() {
    return (
        <div>
            <AiOutlineShoppingCart color="white" />
            <Badge bg="danger">9</Badge>
        </div>
    );
}

export default CartWidget;