import { Heading, VStack,Text,Box } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {

  const searchQuery = useSearchParams()[0]
  
  const referenceNum = searchQuery.get("reference")
  return (
    <Box>
        <VStack>
            <Heading textTransform={"uppercase"}>Order Successfull</Heading>
            <Text>Reference No.{referenceNum}</Text>
        </VStack>
    </Box>
  )
}

export default PaymentSuccess