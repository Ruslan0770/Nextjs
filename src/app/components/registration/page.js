"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import styles from "./styles.module.css";

export default function Registration() {
  const [password2, setPassword2] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisiblity] = useState(false);
  const [visible2, setVisiblity2] = useState(false);

  const[email,setEmail]=useState("")
  const[message,setMessage]=useState("")

   const emailValidation = () =>{
    const regEx =/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if(regEx.test(email)){
        setMessage(alert("Qeydiyyatdan kecdiniz"))
    }
    else if(!regEx.test(email)&&email!==""){
        setMessage(alert("Email duzgun Yazilmayib"))
    }
    else{
        setMessage("")
    }
   }
   const handleOnChange = (e) =>{
    setEmail(e.target.value)
   }


  return (
    <div className={styles.registerHeader}>
      <div className={styles.registerAll}>
        <div className={styles.registerLeft}>
          <h2 className={styles.h2Edit}>Qeydiyyat</h2>
          <p>Bizə qoşulduğunuz üçün şadıq!</p>
          <input value={email} onChange={handleOnChange} type="email" placeholder="Email" />
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
          <input className={styles.checkbox} type="checkbox" />
          <p className={styles.pEdit}>Giriş qaydaları ilə razılaşıram</p>
          
          <button onClick={emailValidation}>Qeydiyyat</button>
         
            <div className={styles.reEntry}>
            <h5>Hesabınız var?</h5>
          <Link href="/"><span>Giriş</span></Link>
            </div>
        </div>
        <div className={styles.registerRight}>
          <Image
            height={650}
            width={650}
            unoptimized
            src="/image/register.png"
            alt="login"
          />
        </div>
      </div>
    </div>
  );
}