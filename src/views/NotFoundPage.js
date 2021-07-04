import React from "react";
import { Box, VStack } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <VStack align="start" spacing={2}>
      <Box margin="auto">404 - Sorry, this page does not exist.</Box>
    </VStack>
  );
};

export default NotFoundPage;
