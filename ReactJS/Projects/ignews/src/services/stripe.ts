import * as Stripe from "stripe";
import {version} from "../../package.json";

// @ts-ignore
export const stripe = new Stripe(
    process.env.STRIPE_API_KEY,
    {
        apiVersion: '2020-08-27',
        appInfo: {
            name: 'Ignews',
            version
        }
    }
)