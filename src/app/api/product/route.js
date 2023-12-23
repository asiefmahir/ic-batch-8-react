import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import Product from "@/models/product";
import queryString from "query-string";

export async function GET(req) {
	await connectDb();
	const searchParams = queryString.parseUrl(req.url).query;
	const { page } = searchParams || {};
	const pageSize = 10;
	try {
		const currentPage = Number(page) || 1;
		const skip = (currentPage - 1) * pageSize;
		const totalProducts = await Product.countDocuments({});

		const products = await Product.find({})
			.skip(skip)
			.limit(pageSize)
			.sort({ createdAt: -1 });
		// .populate("category", "title");

		return NextResponse.json({
			products,
			currentPage,
			totalPages: Math.ceil(totalProducts / pageSize),
		});
	} catch (err) {
		return NextResponse.json(
			{
				err: err.message,
			},
			{ status: 500 },
		);
	}
}
