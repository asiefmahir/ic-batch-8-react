import {NextResponse} from 'next/server';
import connectDb from '@/utils/connectDb';
import User from '@/models/user';
import bcrypt from 'bcrypt';



export async function POST(req) {
    await connectDb();

    const body = await req.json()
    const {name, email, password} = body;
    try {
        await new User({
            name, 
            email, 
            password: await bcrypt.hash(password, 10)
        }).save();
        return NextResponse.json({message: "User Created Successfully"})
    } catch (error) {
        console.log(error);
        return NextResponse.json({err: error.message}, {status: 500})
    }
}