import React, { useState } from "react";
import { Container, Text, VStack, HStack, Button, Input, FormControl, FormLabel, useToast, IconButton, Box, Image, CalendarIcon } from "@chakra-ui/react";
import { FaWhatsapp, FaCalendarAlt, FaCreditCard } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const toast = useToast();

  const handleBooking = () => {
    if (!name || !email || !date) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsBooking(true);

    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      toast({
        title: "Booking Confirmed",
        description: `Your booking for ${date} has been confirmed.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }, 2000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Guest House Booking
        </Text>
        <Image src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxndWVzdCUyMGhvdXNlfGVufDB8fHx8MTcxNjIzMTg5NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Guest House" borderRadius="md" boxSize="300px" objectFit="cover" />
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="date">
          <FormLabel>Date</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <HStack spacing={4}>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" onClick={handleBooking} isLoading={isBooking}>
            Book Now
          </Button>
          <IconButton aria-label="Pay" icon={<FaCreditCard />} colorScheme="blue" />
          <IconButton aria-label="WhatsApp" icon={<FaWhatsapp />} colorScheme="green" onClick={() => window.open("https://wa.me/1234567890", "_blank")} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
