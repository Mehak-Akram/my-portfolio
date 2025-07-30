import { Caveat } from 'next/font/google';
import { Inter } from 'next/font/google';

export const caveat = Caveat({
    subsets: ['latin'],
    variable: '--font-caveat',
    display: 'swap',
});


export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});