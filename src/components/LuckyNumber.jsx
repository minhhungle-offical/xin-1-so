import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./LuckyNumber.module.css";
import thanTai from "../assets/than-tai-1.png";

export default function LuckyNumber() {
  const [soDe, setSoDe] = useState(null);

  const getNumber = () => {
    const so = Math.floor(Math.random() * 100);
    setSoDe(so < 10 ? `0${so}` : `${so}`);
  };

  return (
    <div className={styles.container}>
      <motion.img
        src={thanTai}
        alt="Thần Tài"
        className={styles.image}
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      />

      <div className={styles.incenseHolderContainer}>
        <div className={styles.incenseHolder}>
          <div className={styles.incense}></div>
          <div className={styles.incense}></div>
          <div className={styles.incense}></div>
        </div>
      </div>

      <Typography className={styles.description}>
        “Thắp nén hương thơm, thành tâm khấn nguyện
      </Typography>

      <motion.div
        key={soDe}
        initial={{ scale: 0.2, rotate: -20, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 10 }}
      >
        <Typography
          gutterBottom
          style={{
            fontWeight: "bold",
            color: "#ffdd33",
            textShadow: "0 0 8px gold",
            textAlign: "center",
            minHeight: 84,
          }}
        >
          {soDe ? (
            <>
              💰 <strong>Số may mắn hôm nay:</strong>{" "}
              <span style={{ fontSize: "2.5rem" }}>{soDe}</span> 💰
              <br />
              <em>Hãy đánh con số này bằng cả niềm tin nhé!</em>
            </>
          ) : (
            "Hãy thành tâm nhấn nút để xin lộc số nhé 🙏"
          )}
        </Typography>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="contained"
          color="warning"
          onClick={getNumber}
          size="large"
          sx={{
            px: 5,
            mt: 1,
            borderRadius: "12px",
            boxShadow: "0 0 15px gold",
            fontWeight: "bold",
          }}
        >
          ✨ Xin Số Ngay 🙏
        </Button>
      </motion.div>

      <div className={styles.smoke}></div>
    </div>
  );
}
