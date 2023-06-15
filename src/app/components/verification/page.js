"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { useState } from "react";

export default function Verification() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className={styles.CheckHeader}>
      <div className={styles.checkAll}>
        <div className={styles.checkLeft}>
          <h2 className={styles.h2Edit}>Təsdiq kodu</h2>
          <p>Zəhmət olmasa, mobil nömrənizə gələn 4 rəqəmli kodu daxil edin</p>

          {otp.map((data, index) => {
            return (
              <input
                className={styles.inputEdit}
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
          <Link href="components/resetpassword">
            <button className={styles.buttonEdit}>Təsdiq et</button>
          </Link>
        </div>
        <div className={styles.checkRight}>
          <Image
            height={650}
            width={650}
            unoptimized
            src="/image/verification.png"
            alt="login"
          />
        </div>
      </div>
    </div>
  );
}
