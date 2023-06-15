import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPassword() {
  return (
    <div className={styles.fpHeader}>
      <div className={styles.fpAll}>
        <div className={styles.fpLeft}>
          <h2 className={styles.h2Edit}>Şifrəni unutdunuz?</h2>
          <p>Zəhmət olmasa, mobil nömrənizi qeyd edin</p>
          <input type="number" placeholder="Mobil Nomre" />
          <Link href="/verification">
            <button className={styles.buttonEdit}>Göndər</button>
          </Link>
          <Link href="/">
            <button className={styles.buttonEdit2}>Girişə qayıt</button>
          </Link>
        </div>
        <div className={styles.fpRight}>
          <Image
            height={650}
            width={650}
            unoptimized
            src="/image/forgotpassword.png"
            alt="login"
          />
        </div>
      </div>
    </div>
  );
}
