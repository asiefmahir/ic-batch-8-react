import '@/styles/globals.css'
import RootLayout from "@/components/RootLayout";
import {Provider} from 'react-redux';
import { store } from '@/store';

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <RootLayout>
    <Component {...pageProps} />
  </RootLayout>
  </Provider>
}
