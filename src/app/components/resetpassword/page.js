"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import styles from "./styles.module.css";

export default function ResetPassword() {
  const [password2, setPassword2] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisiblity] = useState(false);
  const [visible2, setVisiblity2] = useState(false);
  return (
    <div className={styles.rpHeader}>
      <div className={styles.rpAll}>
        <div className={styles.rpLeft}>
          <h2 className={styles.h2Edit}>Şifrə yaradın</h2>
          <p>Aşağıdakı hər iki şifrənin eyniliyindən əmin olun</p>
          <input
            value={password2}
            type={visible2 ? "text" : "password"}
            placeholder="Sifre"
            onChange={(e) => setPassword2(e.target.value)}
          ></input>
          <div
            className={styles.iconsUp}
            onClick={() => setVisiblity2(!visible2)}
          >
            {visible2 ? <FaEye /> : <FaEyeSlash />}
          </div>
          <input
            value={password}
            type={visible ? "text" : "password"}
            placeholder="Yenidən şifrə"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className={styles.icons} onClick={() => setVisiblity(!visible)}>
            {visible ? <FaEye /> : <FaEyeSlash />}
          </div>
          <button>Yadda saxla</button>
        </div>
        <div className={styles.rpRight}>
          <Image
            height={650}
            width={650}
            unoptimized
            src="/image/resetpassword.png"
            alt="login"
          />
        </div>
      </div>
    </div>
  );
}
