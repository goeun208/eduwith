import React from "react";
import styles from "./Notice.module.css";
import {MdDelete ,MdArrowBackIos, MdArrowForwardIos} from "react-icons/md";

let ndata = [["2022/02/24", "확률과 통계 멘토링 - 방금 새로운 멘티가 지원했어요."],["2022/02/24", "확률과 통계 멘토링 - 방금 새로운 멘티가 지원했어요."], ["2022/02/24", "확률과 통계 멘토링 - 방금 새로운 멘티가 지원했어요."], ["2022/02/24", "확률과 통계 멘토링 - 방금 새로운 멘티가 지원했어요."],["2022/02/24", "확률과 통계 멘토링 - 방금 새로운 멘티가 지원했어요."]];

function Notice() {
    return(
        <div className={styles.wrap}>
            <div className={styles.nblock}>
                <div className={styles.ncon}>
                    <h3>알림 <hr/> </h3>
                    <div className={styles.nday}>
                        {ndata.map((note) =>
                        (
                            <div classname={styles.notes} key={note}>
                                <h3>{note[0]}</h3>
                                <div className={styles.nbox}>
                                    <div className={styles.ntext}>{note[1]}</div>
                                    <div className={styles.nicon}><MdDelete color="#4673EA" size={50}/></div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.nbottom}><MdArrowBackIos size={25}/> 1 2 3 <MdArrowForwardIos size={25}/></div>
            </div>
        </div>
    );
}

export default Notice;