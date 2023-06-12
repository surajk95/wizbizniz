import React from "react";
import Donut from "./donut";
import styles from './dashboard.module.scss'

export default function WidgetWrapper(props) {
    return (
        <div className={styles.widgetWrapper} style={{ width: '250px', height: '250px'}}>
            <div className={styles.widgetTitle}>Videos by duration</div>
            {
                props.type==='donut' && <Donut />
            }
        </div>
    )
}