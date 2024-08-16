import DobleForm from "./DobleForm/DobleForm";
import SimpleForm from "./SimpleForm/SimpleForm";
import { useParams } from "react-router-dom";

const Forms = ({ product }) => {

    const { type } = useParams();

    if (type === 'simple') {
        return <SimpleForm product={product} />
    }

    return <DobleForm product={product} />
};

export default Forms