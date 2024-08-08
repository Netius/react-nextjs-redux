"use client";
import { cartSlice } from "../data/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../data/productSlice";
import { useState } from "react";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

export default function products() {

	const [productsList, setProductsList] = useState() // Passing a number to useState will sett a limit in fetch products
  // Using a query hook automatically fetches data and returns query values

	const { data, isError, isLoading, isSuccess } = useGetProductsQuery(productsList);
	
	const cart = useSelector((state) => state.cart);
	const { addToCart, removeFromCart } = cartSlice.actions;
	const dispatch = useDispatch();
	

	return (
		<div className="cart container-xxl">
			<div className="my-5">
				<h1 className="header">Products overview <LoadingSpinner isLoading={isLoading}/> </h1>
				<p className="h4">
					Example how to use Redux Slice, RTK Query for fetch Api and State Management to updates a shopping cart
				</p>
			</div>

			<div className="row">
				{data?.map((product, index) => (
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
								{!cart.cartProductIds.includes(product.id) && (
									<button className="btn btn-primary me-2" onClick={() => dispatch(addToCart(product.id))}>
										<i className="bi bi-trash-fill" />
										Add Item
									</button>
								)}

								{cart.cartProductIds.includes(product.id) && (
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
