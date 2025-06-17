import Image from "next/image";
import styles from "./style/Navbar.module.css";
import React from "react";
import { useRouter } from "next/navigation";

interface NavBarProps {
  path: string;
}

const NavBar: React.FC<NavBarProps> = ({ path }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${path.toLowerCase()}`);
  };

  const goHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.navbar}>
      <Image
        className={styles.logo}
        src="/assets/logo-w-text-black.png"
        alt="Blog AI logo"
        width={428}
        height={87}
        priority
        onClick={goHome}
      />

      <button onClick={handleClick} className={styles.button}>
        {path}
      </button>
    </div>
  );
};

export default NavBar;
