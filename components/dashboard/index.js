import React from "react"
import styles from './dashboard.module.scss'
import WidgetWrapper from "./widget-wrapper"

export default function Dashboard() {

    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>Viz wizbizniz</div>
            <div className={styles.widgetsContainer}>
                <WidgetWrapper type="donut"/>
            </div>
        </div>
    )
}