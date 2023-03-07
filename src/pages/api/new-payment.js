import Stripe from "stripe"

export default async function handler(req, res) {
  const { amount } = req.body
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  if (req.method == "POST") {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card']
    })
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
      message: 'Success'
    })
  }

  // Reject if not POST
  else {
    res.status(405).json({
      message: `${req.method} Not Allowed`
    })
  }
}
