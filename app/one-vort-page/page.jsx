import PDFViewerComponent from '@/components/PDFViewerComponent'
import React from 'react'
import styles from './style.module.scss'
export default function OneVortPage() {

    return (
        <div className={styles.container}>

            <PDFViewerComponent />
        </div>

        // <div>
        //     {/* <iframe src="/test.pdf" width='100%' height='1000px' frameBorder="0" /> */}
        //     {/* </iframe> */}
        // </div>
    )
}
