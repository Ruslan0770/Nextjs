"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { type } from "os";

export default function MainPage() {
  const [password, setPassword] = useState("");

  const [visible, setVisiblity] = useState(false);

  const Numberonly = (input) =>{
    let num = /[^0-9]/gi;
    input.value=input.value.replace(num,"")
  }
 
  return (
    <div className={styles.LoginHeader}>
      <div className={styles.loginAll}>
        <div className={styles.loginLeft}>
          <h2 className={styles.h2Edit}>Giriş</h2>
          <p>Yenidən xoş gəlmisiniz! Sizin üçün darıxmışdıq!</p>
          <input type="number" placeholder="Mobil Nomre" />
          <input
            value={password}
            type={visible ? "text" : "password"}
            placeholder="Sifre"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className={styles.icons} onClick={() => setVisiblity(!visible)}>
            {visible ? <FaEye /> : <FaEyeSlash />}
          </div>
          <Link href="/forgotpassword">
            <h6>Şifrəni unutdunuz?</h6>
          </Link>
          <button>Giriş</button>
        </div>
        <div className={styles.loginRight}>
          <Image
            height={650}
            width={650}
            unoptimized
            src="/image/login.jpg"
            alt="login"
          />
        </div>
      </div>
    </div>
  );
}
