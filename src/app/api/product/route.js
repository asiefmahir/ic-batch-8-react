import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import Product from "@/models/product";

export async function GET(req) {
  await connectDb();

  try {
    // const currentPage = Number(page) || 1;
    // const skip = (currentPage - 1) * pageSize;
    // const totalProducts = await Product.countDocuments({});

    const products = await Product.find({})

    return NextResponse.json({
      products
    });
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}