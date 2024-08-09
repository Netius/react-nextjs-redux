"use client";
import { cartSlice } from "../data/cartSlice";
import { toastMessageSlice } from "../data/toastMessageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../data/productSlice";
import { useState } from "react";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import { ErrorMessage } from "../components/error/ErrorMessage";
import Image from "next/image";
import ToastMessage from "../components/toast/ToastMessage";

export default function Products() {
	const [productsList, setProductsList] = useState(12); // Passing a number to useState will sett a limit in fetch products
	// Using a query hook automatically fetches data and returns query values

	const { data, isError, isLoading, isSuccess } = useGetProductsQuery(productsList);

	const cart = useSelector((state) => state.cart);
	const { addToCart, removeFromCart } = cartSlice.actions;

	const { toastMessage } = useSelector((state) => state.toast);
	const { successToast, removeToast, clearToast } = toastMessageSlice.actions;

	const dispatch = useDispatch();

	return (
		<div className="cart container-xxl">
			<div className="my-5">
				<h1 className="header">Products overview</h1>
				<p className="h4">
					Example how to use Redux Slice, RTK Query for fetch Api and State Management to updates a
					shopping cart
				</p>
			</div>
			<ToastMessage message={toastMessage} />
			<LoadingSpinner isLoading={isLoading} />
			<ErrorMessage isError={isError} />

			<div className="row">
				{data?.map((product, index) => (
					<div className="col col-md-3 mb-4" key={index}>
						<div key={product.id} className="card h-100">
							<Image
								className="card-img-top"
								src={product.download_url}
								width={200}
								height={200}
								loading="lazy"
								alt={"Image from " + product.author}
							/>
							<div className="card-body">
								<h4>{product.author}</h4>
								<p className="card-text text-truncate">{product.detail}</p>
								{!cart.cartProductIds.includes(product.id) && (
									<button
										className="btn btn-primary me-2"
										onClick={() => [
											dispatch(addToCart(product.id)),
											dispatch(successToast([`'${product.author}', ID: ${product.id} added to cart`, "text-bg-success"])),
											setTimeout(() => {
												dispatch(clearToast(""));
											}, 3000),
										]}
									>
										<i className="bi bi-trash-fill" />
										Add Item
									</button>
								)}

								{cart.cartProductIds.includes(product.id) && (
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
