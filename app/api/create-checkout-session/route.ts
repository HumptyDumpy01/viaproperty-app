import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PropertyForType } from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia'
});

export type ContactDetailsType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export type PropertyCheckoutDetails = {
  propertyId: string;
  propertyTitle: string;
  extraFeaturesSelected: { title: string; price: number; label: string; }[];
  rentalPeriod?: { from: string; to: string };
  overallPricing: { title: string; description: string; }
  contactDetails: ContactDetailsType
  totalPrice: number;
  propertyFor: PropertyForType;
}

export async function POST(request: NextRequest) {
  try {
    const {
      propertyId,
      extraFeaturesSelected,
      rentalPeriod,
      overallPricing,
      contactDetails,
      totalPrice,
      propertyFor,
      propertyTitle
    } = await request.json() as PropertyCheckoutDetails;

    const session = await stripe.checkout.sessions.create({
      // @ts-ignore
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Let's make a request for ${propertyFor === 'rent' ? 'renting' : 'buying'} this property!`,
              description: `let's buy "${propertyTitle}" property! The total sum is ${totalPrice} dollars. 
              After making a request to buy this property, the landlord needs to approve it or reject.
              Your deposit will be refunded if the landlord rejects your request.`
            },
            unit_amount: totalPrice * 100
          },
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/thanks-for-purchase?session_id={CHECKOUT_SESSION_ID}
      &propertyId=${propertyId}&propertyFor=${propertyFor}&propertyTitle=${propertyTitle}
      &totalPrice=${totalPrice}&contactDetails=${JSON.stringify(contactDetails)}
      &overallPricing=${JSON.stringify(overallPricing)}&rentalPeriod=${JSON.stringify(rentalPeriod)}
      &extraFeaturesSelected=${JSON.stringify(extraFeaturesSelected)}`,
      cancel_url: `${request.headers.get('origin')}/checkout`,
      metadata: {
        propertyId,
        extraFeaturesSelected: JSON.stringify(extraFeaturesSelected),
        rentalPeriod: JSON.stringify(rentalPeriod),
        overallPricing: JSON.stringify(overallPricing),
        contactDetails: JSON.stringify(contactDetails),
        totalPrice: totalPrice.toString(),
        propertyFor,
        propertyTitle
      }
    });

    return NextResponse.json({ id: session.id });
  } catch (e) {
    return NextResponse.json({ error: `Failed to create Stripe Checkout session: ${e}` }, { status: 500 });
  }
}