import styles from './home.module.css';
import { useState } from 'react';

import {colors} from './Constant.js'

const Home = () => {
  const [bgColor, setBgColor] = useState("#fff");
  
   const handleChangeBgColor =(index)=>{
    setBgColor(colors[index].color);
   }
  return (
    <>
      <nav className={styles['nav-bar']}>
        <button className={styles["change-bg"]} >Change background</button>
      </nav>
      <div className={styles['container']} style={{background : bgColor}}>

      </div>
      <div className={styles['choose-bg']}>

      <div className={styles["select-text"]}>Choose Color</div>
            <div className={styles["choose-color"]}>
              {colors.map((color, index) => (
                <div
                  key={index}
                  onClick={()=>handleChangeBgColor(index)}
                  className={styles.color1}
                  style={{ backgroundColor: color.color }}
                ></div>
              ))}
            </div>

      </div>
    
    </>
    
  );
};

export default Home;
