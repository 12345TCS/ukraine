import React, { useState, useEffect } from 'react'
import {
  HStack,
  Spacer,
  Button,
  Text,
  Image,
  Box,
  Stack,
  VStack,
  useToast,
} from '@chakra-ui/react'
import Head from 'next/head'
import { BsCurrencyDollar, BsPaypal } from 'react-icons/bs'
import { FaStripeS, FaUsers } from 'react-icons/fa'
import { MdFamilyRestroom } from 'react-icons/md'
import Typed from 'react-typed'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue'
import '@splidejs/react-splide/css/core'
import Link from 'next/link'

const Index = () => {
  const Toast = useToast()
  const [navbarBg, setNavbarBg] = useState("linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6), rgba(0,0,0,0))")
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarBg("#0057b7")
    } else {
      setNavbarBg("linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6), rgba(0,0,0,0))")
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
  })

  function showToast(){
    Toast({
      status: "success",
      title: "New Donation",
      description: "Someone just donated $8.",
      position: "bottom-left",
    })
  }

  return (
    <>
      <Head><title>Support Ukraine</title></Head>
      <HStack
        p={4} bg={navbarBg} pos={'fixed'}
        justifyContent={'space-between'}
        top={0} left={0} w={'full'}
        transition={'all .3s ease'}
        zIndex={99}
      >
        <Text
          color={'white'}
          fontWeight={'semibold'}
          fontSize={'lg'}
        >
          Support Ukraine
        </Text>
        <Button
        onClick={()=>showToast()}
          colorScheme={'yellow'}
          bg={'#ffd700'}
          rounded={'full'}
          fontWeight={'medium'}
          leftIcon={<BsPaypal />}
        >
          Donate
        </Button>
      </HStack>
      <Box
        w={'full'} h={['80vh', '100vh']}
        bgImg={'/war.jpg'} bgPos={'center'}
      >
        <VStack
          alignItems={'center'}
          justifyContent={'center'}
          h={'full'} w={'full'}
          bg={'rgba(0,0,0,0.45)'}
        >
          <Typed
            strings={['"We need your help"']}
            className={'hero-title'}
            typeSpeed={90}
          />
          <Text color={'white'}
            maxW={['80%', '60%']}
            fontSize={'lg'}
            textAlign={'center'}
          >
            People of Ukraine are devastated by the ongoing war with Russia.
            <br />
            Help them get their meals, medicines and safe shelter by donating for them.
          </Text>
          <Stack
            direction={['column', 'row']}
            p={4} spacing={8}
          >
            <Button
            onClick={()=>showToast()}
              rounded={'full'} px={6}
              colorScheme={'facebook'}
              bg={'#0057b7'} py={6}
              fontWeight={'semibold'}
              leftIcon={<BsPaypal />}
            >
              Donate With Paypal
            </Button>
            <Button
            onClick={()=>showToast()}
              rounded={'full'} px={6}
              colorScheme={'yellow'}
              bg={'#ffd700'} py={6}
              fontWeight={'semibold'}
              leftIcon={<FaStripeS />}
            >
              Donate With Stripe
            </Button>
          </Stack>
        </VStack>
      </Box>


      <Stack
        direction={['column', 'row']}
        p={[8, 16]} alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box w={['full', 'lg']}>
          <Text
            fontSize={'sm'} color={'#666'}
            textTransform={'uppercase'}
            fontWeight={'medium'}
          >
            what we do?
          </Text>
          <Text
            fontSize={'4xl'} color={'#333'}
            textTransform={'capitalize'}
            fontWeight={'semibold'}
            maxW={['full', '70%']}
          >
            we bring smiles on their faces
          </Text>
          <Text py={6}>
            We are dedicated to collecting donations for the victims of the ongoing war in Ukraine.
            We understand the devastating impact that this conflict has had on individuals and communities,
            and we are committed to providing support to those who have been affected. Through our efforts,
            we aim to raise awareness about the plight of these victims and mobilize resources to provide them
            with the assistance they need. Our ultimate goal is to alleviate their suffering and contribute to
            a peaceful resolution of the conflict.
          </Text>
          <Button
          onClick={()=>showToast()}
            rounded={'full'} px={6}
            colorScheme={'facebook'}
            bg={'#0057b7'} py={6}
            fontWeight={'semibold'}
            leftIcon={<BsPaypal />}
          >
            Gift Them A Smile
          </Button>
        </Box>
        <Image src='/child.png' w={['full', 'sm']} roundedBottom={16} />
      </Stack>
      <VStack
        p={[8, 16]}
        bgImg={'/msgbg.svg'}
        bgPos={'right'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
      >
        <Text fontWeight={'semibold'} fontSize={'2xl'} color={'#222'}>Our Mission</Text>
        <Text py={6} color={'#111'} textAlign={'center'}>
          We know how it feels when you lose your loved ones. 
          Wars are the worst thing humans can do against each other. 
          Those who want wars to happen never go in the battlefield and 
          those who fight in the battlefield NEVER want wars to happen. 
          We can't stop this war, and we don't even know how long it would last for. 
          But we can make sure to save every single life we can. We can provide them 
          food, shelter, water, safety and everything else in our capacity to safeguard them.
          <br />
          And this is our only mission!
        </Text>
        <Text fontSize={'lg'}>
          - John Doe, Founder
        </Text>
      </VStack>
      <VStack p={[8, 16]}>
        <Text
          fontSize={'sm'} color={'#666'}
          textTransform={'uppercase'}
          fontWeight={'medium'}
        >
          your donations are helping them
        </Text>
        <Text
          fontSize={['2xl', '4xl']} color={'#333'}
          textTransform={'capitalize'}
          fontWeight={'semibold'}
          maxW={['full', '70%']} textAlign={'center'}
        >
          we are proud for what we are doing
        </Text>
        <Box w={'full'} h={16}></Box>
        <Box boxShadow={'xl'} rounded={16} overflow={'hidden'}>
          <Splide
            options={{
              gap: '1rem',
              width: '80vw',
            }}
          >
            <SplideSlide>
              <VStack
                w={['full','80vw']} h={['40vh', 'lg']}
                bgImg={'/war.jpg'} bgSize={'cover'}
                justifyContent={'flex-end'}
              >
                <Box w={'full'} bg={'blackAlpha.700'} p={4} color={'white'}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, facere?
                </Box>
              </VStack>
            </SplideSlide>
            <SplideSlide>
              <VStack
                w={['full','80vw']} h={['40vh', 'lg']}
                bgImg={'/war.jpg'} bgSize={'cover'}
                justifyContent={'flex-end'}
              >
                <Box w={'full'} bg={'blackAlpha.700'} p={4} color={'white'}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, facere?
                </Box>
              </VStack>
            </SplideSlide>
            <SplideSlide>
              <VStack
                w={['full','80vw']} h={['40vh', 'lg']}
                bgImg={'/war.jpg'} bgSize={'cover'}
                justifyContent={'flex-end'}
              >
                <Box w={'full'} bg={'blackAlpha.700'} p={4} color={'white'}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, facere?
                </Box>
              </VStack>
            </SplideSlide>
            <SplideSlide>
              <VStack
                w={['full','80vw']} h={['40vh', 'lg']}
                bgImg={'/war.jpg'} bgSize={'cover'}
                justifyContent={'flex-end'}
              >
                <Box w={'full'} bg={'blackAlpha.700'} p={4} color={'white'}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, facere?
                </Box>
              </VStack>
            </SplideSlide>

          </Splide>
        </Box>
      </VStack>

      <VStack
        p={[8, 16]}
        bgImg={'/bg.svg'}
        color={'white'}
        bgPos={'center'}
        bgSize={'cover'}
      >
        <Text
          fontSize={'sm'}
          textTransform={'uppercase'}
          fontWeight={'medium'}
        >
          it was not easy but
        </Text>
        <Text
          fontSize={['2xl', '4xl']}
          textTransform={'capitalize'}
          fontWeight={'semibold'}
          maxW={['full', '70%']} textAlign={'center'}
        >
          we made the impact
        </Text>
        <Stack
          direction={['column', 'row']} py={16}
          gap={10} justifyContent={'space-evenly'}
        >

          <HStack
            w={['full', 'xs']}
            p={4} bg={'white'}
            boxShadow={'lg'}
            rounded={16}
            gap={4}
            alignItems={'flex-start'}
          >
            <Box
              boxSize={24}
              bg={'#0057b7'}
              color={'white'}
              display={'grid'}
              placeContent={'center'}
              rounded={16}
            >
              <BsCurrencyDollar fontSize={'36'} />
            </Box>
            <Box>
              <Text
                color={'#0057b7'}
                fontSize={'3xl'}
                fontWeight={'semibold'}
              >
                45000+
              </Text>
              <Text fontSize={'sm'} color={'#333'}>
                USD worth of support provided
              </Text>
            </Box>
          </HStack>
          <HStack
            w={['full', 'xs']}
            p={4} bg={'white'}
            boxShadow={'lg'}
            rounded={16}
            gap={4}
            alignItems={'flex-start'}
          >
            <Box
              boxSize={24}
              bg={'#0057b7'}
              color={'white'}
              display={'grid'}
              placeContent={'center'}
              rounded={16}
            >
              <MdFamilyRestroom fontSize={'36'} />
            </Box>
            <Box>
              <Text
                color={'#0057b7'}
                fontSize={'3xl'}
                fontWeight={'semibold'}
              >
                120+
              </Text>
              <Text fontSize={'sm'} color={'#333'}>
                Families relocated to safe shelters
              </Text>
            </Box>
          </HStack>
          <HStack
            w={['full', 'xs']}
            p={4} bg={'white'}
            boxShadow={'lg'}
            rounded={16}
            gap={4}
            alignItems={'flex-start'}
          >
            <Box
              boxSize={24}
              bg={'#0057b7'}
              color={'white'}
              display={'grid'}
              placeContent={'center'}
              rounded={16}
            >
              <FaUsers fontSize={'36'} />
            </Box>
            <Box>
              <Text
                color={'#0057b7'}
                fontSize={'3xl'}
                fontWeight={'semibold'}
              >
                1800+
              </Text>
              <Text fontSize={'sm'} color={'#333'}>
                Volunteers currently helping people on-site
              </Text>
            </Box>
          </HStack>

        </Stack>

        <Text fontSize={'2xl'} textAlign={'center'}>Come, be a part of this intiative.</Text>
        <Stack
          direction={['column', 'row']}
          p={4} spacing={8}
        >
          <Button
          onClick={()=>showToast()}
            rounded={'full'} px={6}
            colorScheme={'yellow'}
            bg={'#ffd700'} py={6}
            fontWeight={'semibold'}
            leftIcon={<BsPaypal />}
          >
            Donate With Paypal
          </Button>
          <Button
          onClick={()=>showToast()}
            rounded={'full'} px={6}
            colorScheme={'yellow'}
            bg={'#ffd700'} py={6}
            fontWeight={'semibold'}
            leftIcon={<FaStripeS />}
          >
            Donate With Stripe
          </Button>
        </Stack>
      </VStack>
      <VStack p={4} bg={'blue.900'} color={'white'}>
           <Link href={'https://dezynation.com/'} target={'_blank'}>
           <Text color={'white'} textAlign={'center'}>Designed, developed and being mantained by Dezynation</Text>
           </Link>
      </VStack>
    </>
  )
}

export default Index