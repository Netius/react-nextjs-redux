"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/layout.module.css";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";


export const Nav = () => {
  const pathname = usePathname();
  const { cartProductIds } = useSelector((state:any) => state.cart);

  return (
    <>
      <nav className="navbar bg-dark border-bottom navbar-expand-lg border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className={"navbar-brand"} href={"/"}>
          <Image
                src="/logo.svg"
                className={styles.logo}
                alt="logo"
                width={50}
                height={50}
              />
            React NextJs Redux  
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className='nav-link'
                  href="/"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className='nav-link'
                  href="/counter"
                >
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className='nav-link'
                  href="/quotes"
                >
                  Quotes
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className='nav-link'
                  href="/products"
                >
                  Products
                </Link>
              </li> */}
            </ul>
            <Link href={"/cart"} className="btn btn-light position-relative me-4">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                {cartProductIds.length}
                <span className="visually-hidden">items in cart</span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
