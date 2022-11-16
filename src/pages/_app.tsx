import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerProvider';
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../services/queryClient';
import { makeServer } from '../services/mirage';
import { AuthProvider } from '../contexts/AuthContext';

import { theme } from '../styles/theme';

if(process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </ChakraProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default MyApp
