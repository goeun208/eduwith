import React, { useState } from 'react';
import styled from "styled-components";
import styles from "./Main.module.css";
import mic from "./image/mic.png"
import text from "./image/text.png"
import youtube from "./image/youtube.png"
import { MdChat, MdHeadphones, MdPeopleAlt } from 'react-icons/md';
import {ImBook} from 'react-icons/im';

let vex = [[mic, "책 녹음하기"], [text, "자료 번역"], [youtube, "강의자막"]];
let icons = [[<ImBook size={120} color="#4673EA"/>, "학습자료"], [<MdHeadphones size={120} color="#4673EA"/>, "오디오북"], [<MdPeopleAlt size={120} color="#4673EA"/>, "독서모임"],  [<MdChat size={120} color="#4673EA"/>, "자유게시판"]];

function Main({ children }) {
    const [loginToggle, setLoginToggle] = useState(false);

    const onLoginToggle = () => {
        setLoginToggle(prev => !prev)
    };
    return(
        <div className={styles.wrap}>
        
                <div className={styles.vblock}>
                    <div className={styles.vtitle}>함께하는 자원봉사</div>
                    <button className={styles.vbtn}> view detail ></button>
                    <div className={styles.vexbox}> 
                        {vex.map((item) =>
                        (
                            <div className={styles.vex} key={item}>
                                <img src={item[0]} />
                                <h3>{item[1]}</h3>
                                <p>dddddddddddddddddddd<br/>ddddddddddd</p>
                                <button >신청하러 가기 ></button>
                            </div>
                        ))}
                    </div>
                    {/* props이용하기 > css 따로 적용 */}
                </div>
            
            
            <div className={styles.lblock}>
                <div className={styles.lcont}>
                    <div className={styles.ltitle}>Online-Library</div>
                    <button className={styles.lbtn}>view detail ></button>
                    <div className={styles.lbox}>
                        {icons.map((icon) =>
                        (
                            <div className={styles.icons} key={icon}>
                                {icon[0]}
                                <h3>{icon[1]}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                
               
            </div>
        </div>
    );
  }
  
  export default Main;

{/* <div className={styles.vex1}>
                        <img src={mic}></img>
                        <h3>책 녹음하기</h3>
                        <p>ddddddddddd</p>
                        <button >신청하러 가기 ></button>
                    </div>
                    <div className={styles.vex2}>
                        <img src={text}></img>
                        <h3>자료 번역</h3>
                        <p>ddddddddddd</p>
                        <button>신청하러 가기 ></button>
                    </div>
                    <div className={styles.vex3}>
                        <img src={youtube}></img>
                        <h3>강의자막</h3>
                        <p>ddddddddddd</p>
                        <button>신청하러 가기 ></button>
                    </div> */}
