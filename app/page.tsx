import type { Metadata } from "next";
import Products from "./products/page";


export default function IndexPage() {
  return <Products />;
}

export const metadata: Metadata = {
  title: "React NextJs Redux Toolkit",
};
