import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import Category from "@/models/category";

export async function GET(req) {
	try {
		await connectDb();
		const categories = await Category.find({}).sort({ createdAt: -1 });
		return NextResponse.json(categories);
	} catch (error) {
		return NextResponse.json(
			{
				err: error.message,
			},
			{ status: 500 },
		);
	}
}

export async function POST(req) {
	await connectDb();
	const body = await req.json();
	const { title } = body;
	try {
		const category = await new Category({ title: title }).save();
		return NextResponse.json(category);
	} catch (error) {
		return NextResponse.json(
			{
				err: error.message,
			},
			{ status: 500 },
		);
	}
}
