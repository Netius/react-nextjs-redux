"use client";
import productList from "../data/productList.json";
import { cartSlice } from "../data/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function products() {
	const { cartProductIds } = useSelector((state) => state.cart);
	const { addToCart, removeFromCart } = cartSlice.actions;
	const dispatch = useDispatch();

	return (
		<div className="cart container-xxl">
			<div className="my-5">
				<h1 className="header">Products overview</h1>
				<p className="h4">
					Example how to use Redux Slice and State Management to updates a shopping cart
				</p>
			</div>

			<div className="row">
				{productList.products.map((product, index) => (
					<div className="col col-md-3 mb-4" key={index}>
						<div key={product.id} className="card h-100">
							<img
								className="card-img-top"
								style={{ height: "135px" }}
								src={product.imageUrl}
								alt="product"
							/>

							<div className="card-body">
								<h4>{product.name}</h4>
								<p className="card-text text-truncate">{product.detail}</p>
								{!cartProductIds.includes(product.id) && (
									<button className="btn btn-primary me-2" onClick={() => dispatch(addToCart(product.id))}>
										<i className="bi bi-trash-fill" />
										Add Item
									</button>
								)}

								{cartProductIds.includes(product.id) && (
									<button
										className="btn btn-outline-danger"
										onClick={() => dispatch(removeFromCart(product.id))}
									>
										<i className="bi bi-trash-fill" />
										Remove Item
									</button>
								)}
							</div>
						</div>
					</div>
				))}
				{/* <footer className="text-center">
					<button className="btn btn-primary btn-lg">CHECKOUT</button>
				</footer> */}
			</div>
		</div>
	);
}
