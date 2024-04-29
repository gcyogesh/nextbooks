import BannerPage from "@/components/Banner/Banner";
import ProductList from "@/components/ProductList/ProductList";

export default async function Home() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c1df62365cmsh09b7af630acdb28p14fe98jsncb981c4b4690',
      'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch('https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=19', options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <BannerPage/>
      <ProductList/>
    </>
  );
}
