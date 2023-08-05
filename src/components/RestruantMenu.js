import { useParams } from "react-router-dom";

const RestruantMenu = () => {
    const params = useParams();
    const {id} = params;
    // console.log(params);
    return (
        <div>
            <h1>Restraunt id: {id}</h1>
            <h2>Namaste</h2>
        </div>
    );
}

export default RestruantMenu;