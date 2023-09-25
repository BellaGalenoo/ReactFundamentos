import Product from "../../../components/titulo";

//JSX
export default function ProductList() {
  return (
    <div className="flex flex-col gap-4">
      <Product name="Caderno" price={1.99} />
      <Product name="Lapis" price={1.99} />
    </div>
  )
}
