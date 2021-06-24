import Head from 'next/head';
import Cover from '../components/sections/cover';
import Features from '../components/sections/features';
import LaundryApp from '../components/sections/laundry_app';
import Services from '../components/sections/services';
import Dicas from '../components/sections/dicas';


export default function Home() {
  
  return (
    <>
      <Cover/>
      <Features/>
      <LaundryApp/>
      <Services/>
      <Dicas/>
    </>
  )
}
