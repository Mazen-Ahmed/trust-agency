import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-poppins', 
});

export { poppins };
