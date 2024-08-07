"use client";

import productList from "../data/productList.json";
import { cartSlice } from "../data/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
	const { cartProductIds } = useSelector((state) => state.cart);
	const cartProductData = productList.products.filter((product) =>
		cartProductIds.includes(product.id)
	);

	const { clearAllItems, removeFromCart } = cartSlice.actions;
	const dispatch = useDispatch();

	return (
		<div className="cart container-xxl">
			{cartProductData.length > 0 ? (
				<div className="cart-product">
					<h3 className="header">Items in cart</h3>
					<div className="row">
						{cartProductData.map((product, index) => (
							<div className="col col-3 mb-4" key={product.id + index}>
								<div className="card h-100">
									<img className="card-img-top" src={product.imageUrl} alt="product" />

									<div className="card-body">
										<h4>{product.name}</h4>
										<p className="card-text text-truncate">{product.detail}</p>
										<button
											className="btn btn-outline-danger"
											onClick={() => dispatch(removeFromCart(product.id))}
										>
											<i className="bi bi-trash-fill" />
											Remove Item
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
					<footer className="text-center">
					<button className="btn btn-dark btn-lg" onClick={() => dispatch(clearAllItems())}>Clear cart</button>
				</footer>
				</div>
			) : (
				<div className="text-center empty-cart">
					<i className="bi bi-cart3" />
					<h2>Your cart is empty.</h2>
					<p>You have not added any item to your cart.</p>
				</div>
			)}
		</div>
	);
}
