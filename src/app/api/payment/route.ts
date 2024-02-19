import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
    
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        typescript: true,
        apiVersion: "2023-10-16",
    });
    const { data } = await req.json();
    const { amount, service } = data;
    try {
        const redirectURL =
            process.env.NODE_ENV === 'development'
                ? 'http://localhost:3000'
                : 'https://stripe-checkout-next-js-demo.vercel.app';

        const transformedItem = {
            product_data: {
                images: ["item.image"],
                name: "item.name",
              },
            price_data: {
                currency: 'USD',
                unit_amount: amount * 100,
            },
            description: "item.description",
            quantity: 5,

        };
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                  price_data: {
                    currency: "usd",
                    product_data: {
                      name: "INV-" +service,
                    },
                    unit_amount: amount * 100 || 100,
                  },
                  quantity: 1,
                },
              ],
            mode: 'payment',
            success_url: redirectURL + '?status=success',
            cancel_url: redirectURL + '?status=cancel',
            metadata: {
                images: "item.image",
            },
        });

        const response = {
            id: session.id,
        };
        return new NextResponse(JSON.stringify(response), { status: 200 });
    } catch (error: any) {
        return new NextResponse(error, {
            status: 400,
        });
    }
}