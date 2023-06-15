import React from "react";
import styles from "./styles.module.css";
import { FaCheckCircle } from "react-icons/fa";

export default function Card({ details }) {
  return (
    <div className={styles.CardHeader}>
      {details.map((value, index) => (
        <div className={styles.Card} key={index}>
          <div className={styles.CardAll}>
            <h3>{value.title}</h3>
            <span className={styles.spanPriceEdit}>${value.price}</span>
            <span className={styles.spanMonthEdit}>/ {value.month}</span>
            <p>{value.description}</p>
            <div className={styles.checkIconsEdit}>
              <FaCheckCircle className={styles.Icons} />
              <span className={styles.SpanItemsEdit}>{value.items}</span>
            </div>
            <div className={styles.checkIconsEdit}>
              <FaCheckCircle className={styles.Icons} />
              <span className={styles.SpanItemsEdit}>{value.items2}</span>
            </div>
            <div className={styles.checkIconsEdit}>
              <FaCheckCircle className={styles.Icons} />
              <span className={styles.SpanItemsEdit}>{value.items3}</span>
            </div>
            <div className={styles.checkIconsEdit}>
              <FaCheckCircle className={styles.Icons} />
              <span className={styles.SpanItemsEdit}>{value.items4}</span>
            </div>
            <div className={styles.checkIconsEdit}>
              <FaCheckCircle className={styles.Icons} />
              <span className={styles.SpanItemsEdit}>{value.items5}</span>
            </div>
            <button>Planı seç</button>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
