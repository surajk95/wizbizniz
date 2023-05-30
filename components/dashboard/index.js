import React from "react"
import styles from './dashboard.module.scss'
import WidgetWrapper from "./widget-wrapper"

export default function Dashboard() {

    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>Wiz bizniz</div>
            <div className={styles.widgetsContainer}>
                <WidgetWrapper type="donut"/>
            </div>
        </div>
    )
}