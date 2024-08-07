"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/layout.module.css";
import { useDispatch, useSelector } from "react-redux";


export const Nav = () => {
  const pathname = usePathname();
	const { cartProductIds } = useSelector((state) => state.cart);

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/verify" ? styles.active : ""
        }`}
        href="/verify"
      >
        Verify
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/quotes" ? styles.active : ""
        }`}
        href="/quotes"
      >
        Quotes
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/products" ? styles.active : ""
        }`}
        href="/products"
      >
        Products
      </Link>
      <Link
        className={`ms-5 ${styles.link} ${
          pathname === "/cart" ? styles.active : ""
        }`}
        href="/cart"
      >
        Cart
        <sup className="cart-number">{cartProductIds.length}</sup>
      </Link>
    </nav>
  );
};
