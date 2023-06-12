'use client'

import React, { useState } from "react"
import styles from './dashboard.module.scss'
import WidgetWrapper from "./widget-wrapper"

export default function Dashboard() {
    const [active, useActive] = useState('buggs')
    
    return (
        <div className={styles.dashboard}>
            <div className="text-3xl font-bold underline">Wiz bizniz</div>
            <div className={styles.widgetsContainer}>
                <WidgetWrapper type="donut"/>
            </div>
        </div>
    )
}