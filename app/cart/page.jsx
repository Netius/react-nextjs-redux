"use client";

import { cartSlice } from "../data/cartSlice";
import { toastMessageSlice } from "../data/toastMessageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../data/productSlice";
import { useState } from "react";
import { ErrorMessage } from "../components/error/ErrorMessage";
import Image from 'next/image'
import ToastMessage from "../components/toast/ToastMessage";


export default function Cart() {

	const [productsList, setProductsList] = useState(12)
	const { data, isError, isLoading, isSuccess } = useGetProductsQuery(productsList);

	const { cartProductIds } = useSelector((state) => state.cart);
	const cartProductData = data?.filter((product) =>
		cartProductIds.includes(product.id)
	);

	const { clearAllItems, removeFromCart } = cartSlice.actions;

	const { toastMessage } = useSelector((state) => state.toast);
	const { removeToast, clearToast } = toastMessageSlice.actions;

	const dispatch = useDispatch();

	return (
		<div className="cart container-xxl ">
			{cartProductData?.length > 0 ? (
				<div>
					<div className="my-5">
						<h1 className="header">Items in cart</h1>
						<p className="h4">Showing elements in cart using Redux State Management and Slice - "Ducks"</p>
					</div>
					<div className="row">
						{cartProductData.map((product, index) => (
							<div className="col col-md-3 mb-4" key={product.id + index}>
								<div className="card h-100">
									{/* <img className="card-img-top" src={product.download_url} alt="product" style={{ height: "135px" }}/> */}
									<Image 
										className="card-img-top" 
										src={product.download_url} 
										width={200}
										height={200}
										loading="lazy"
										alt={"Image from " + product.author} />
									<div className="card-body">
										<h4>{product.name}</h4>
										<p className="card-text text-truncate">{product.author}</p>
										<button
											className="btn btn-outline-danger"
											onClick={() => [
												dispatch(removeFromCart(product.id)),
												dispatch(removeToast([`'${product.author}', ID: ${product.id} removed from cart`, "text-bg-danger"])),
												setTimeout(() => {
													dispatch(clearToast(""));
												}, 3000),
											]}
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
						<button className="btn btn-dark btn-lg" onClick={() => dispatch(clearAllItems())}>
							Clear cart
						</button>
					</footer>
				</div>
			) : (
				<div className="text-center empty-cart">
					<i className="bi bi-cart3" />
					<h2>Your cart is empty.</h2>
					<p>You have not added any item to your cart.</p>
				</div>
			)}
				<ToastMessage message={toastMessage} />
				<ErrorMessage  isError={isError} />
		</div>
	);
}
