import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Anderson Ângelo</Text>
          <Text color="gray.300" fontSize="small">
            anderson_angelo1@hotmail.com
          </Text>
        </Box>
  
      )}
      <Avatar
        size="md"
        name="Anderson ângelo"
        src="https://github.com/AndersonAngelo.png"
      />
    </Flex>
  );
}
