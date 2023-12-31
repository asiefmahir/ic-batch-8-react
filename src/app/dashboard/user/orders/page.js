"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UserOrders() {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);

	const router = useRouter();

	useEffect(() => {
		fetchOrders();
	}, []);

	const fetchOrders = async () => {
		try {
			const response = await fetch(`${process.env.API}/user/orders`, {
				method: "GET",
			});
			const data = await response.json();
			setOrders(data);
			setLoading(false);
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};

	const handleCancelOrder = async (orderId) => {
		try {
			const response = await fetch(
				`${process.env.API}/user/orders/refund?orderId=${orderId}`,
				{
					method: "POST",
				},
			);
			const data = await response.json();
			console.log(data, "order cancel data");
			if (!response.ok) {
				toast.error("Something went wrong. Please try again.");
			} else {
				toast.success("Order cancelled");
				fetchOrders();
			}
			setOrders(data);
		} catch (err) {
			console.log(err);
			toast.error("Order cancellation failed. Try again.");
			setLoading(false);
		}
	};

	if (loading) {
		return (
			<div className="d-flex justify-content-center align-items-center text-danger vh-100 h1">
				LOADING...
			</div>
		);
	}

	return (
		<div className="container mb-5">
			{/* <pre>{JSON.stringify(orders, null, 4)}</pre> */}
			<div className="row">
				<div className="col">
					<h4 className="text-center">Recent Orders</h4>

					{orders?.length > 0 &&
						orders?.map((order) => (
							<div
								key={order._id}
								className="mb-4 p-4 alert alert-secondary"
							>
								<table className="table table-striped">
									<tbody>
										<tr>
											<th scope="row">Charge ID:</th>
											<td>{order?.chargeId}</td>
										</tr>

										<tr>
											<th scope="row">Created:</th>
											<td>
												{new Date(
													order?.createdAt,
												).toLocaleDateString()}
											</td>
										</tr>

										<tr>
											<th scope="row">Payment Intent:</th>
											<td>{order?.payment_intent}</td>
										</tr>

										<tr>
											<th scope="row">Refunded:</th>
											<td>
												{order?.refunded ? "Yes" : "No"}
											</td>
										</tr>

										<tr>
											<th scope="row">Status:</th>
											<td>{order?.status}</td>
										</tr>

										<tr>
											<th scope="row">Total Charged:</th>
											<td>
												$
												{(
													order?.amount_received / 100
												)?.toFixed(2)}{" "}
												{order?.currency}
											</td>
										</tr>

										<tr>
											<th scope="row">
												Shopping Address:
											</th>
											<td>
												{
													order?.shipping?.address
														?.line1
												}
												<br />
												{order?.shipping?.address
													?.line2 &&
													order?.shipping?.address
														?.line}
												{order?.shipping?.address?.city}
												,
												{
													order?.shipping?.address
														?.state
												}
												,
												{
													order?.shipping?.address
														?.postal_code
												}
												,
												<br />
												{
													order?.shipping?.address
														?.country
												}
											</td>
										</tr>

										<tr>
											<th scope="row" className="w-25">
												Ordered Products:
											</th>
											<td className="w--75">
												{order?.cartItems?.map(
													(product) => (
														<div
															className="pointer text-primary"
															key={product?._id}
															onClick={() => {}}
														>
															{product?.quantity}{" "}
															x {product?.title} $
															{product?.price?.toFixed(
																2,
															)}{" "}
															{order?.currency}
														</div>
													),
												)}
											</td>
										</tr>

										<tr>
											<th scope="row">Delivery Status</th>
											<td>
												{order?.delivery_status}
												{order?.delivery_status ===
													"Not Processed" &&
													!order.refunded &&
													order.status !==
														"Refunded" && (
														<>
															<br />
															<span
																className="text-danger pointer"
																onClick={() =>
																	handleCancelOrder(
																		order?._id,
																	)
																}
															>
																Cancel the order
															</span>
														</>
													)}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
