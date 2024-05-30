import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  console.log('params: ', params);
  return <div>ProductDetails</div>;
}

export default ProductDetails;
