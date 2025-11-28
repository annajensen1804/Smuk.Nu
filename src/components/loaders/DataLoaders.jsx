const apiUrl = "https://smuknu-vomg9.ondigitalocean.app";

// Get products
export const productsLoader = async () => {
  const res = await fetch(`${apiUrl}/products`);
  if (!res.ok) throw new Response("Fejl ved hentning", { status: res.status });
  const data = await res.json();
  return data.data;
};

// Get reviews
export const reviewsLoader = async () => {
  const res = await fetch(`${apiUrl}/reviews`);
  if (!res.ok) throw new Response("Fejl ved hentning", { status: res.status });
  const data = await res.json();
  return data.data;
};

// funktion kalder to loadere og returnerer ét objekt, som kan bruges i Routes.jsx:
export async function homeLoader() {
  const [products, reviews] = await Promise.all([
    productsLoader(),
    reviewsLoader()
  ]);

  return { products, reviews };
}

// Get qas
export const qasLoader = async () => {
  const res = await fetch(`${apiUrl}/qas`);
  if (!res.ok) throw new Response("Fejl ved hentning", { status: res.status });
  const data = await res.json();
  return data.data;
};

// Get members
export const membersLoader = async () => {
  const res = await fetch(`${apiUrl}/members`);
  if (!res.ok) throw new Response("Fejl ved hentning", { status: res.status });
  const data = await res.json();
  return data.data;
};