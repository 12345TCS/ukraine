import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

export default function App({ Component, pageProps }) {
  
  const clientId = "AZtYp6sQ8dPtLtnnEnD2WeuxZxrpm2PL-vXZSZC_ga77859UX7ubwZLYT-8gBsEdr0rP4CoSB6L8uqJL"
  return (
    <ChakraProvider>
      <PayPalScriptProvider deferLoading={false} options={{ "client-id": clientId, "currency": "USD" }}>
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </ChakraProvider>
  )
}
