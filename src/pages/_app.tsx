import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import React from 'react';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export default function App({
    Component, 
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
            <main className={`${inter.variable} font-sans`}>
                <SessionProvider session={session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </main>
    )
}

import { SessionProvider } from "next-auth/react"
