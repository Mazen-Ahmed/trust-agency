import React from "react";

const Page = () => {
  return <div>Page</div>;
};

export default Page;

export async function getStaticPaths() {
  // Define an array of possible locale values (e.g., ["en", "es"])
  const locales = ["en", "ar"];

  return {
    paths: locales.map((locale) => ({ params: { locale } })),
    fallback: "blocking",  // Optional: handle missing paths (explained later)
  };
}