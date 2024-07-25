"use client"
import { PDFViewer } from '@react-pdf/renderer';
import { Document as D, Page as P } from '@react-pdf/renderer'
import styles from './style.module.scss'
export default function PDFViewerComponent() {
    const width = window.innerWidth
    console.log(width);
    return (
        <div className={styles.container}>
            {
                width > 1023 ? <object width="100%" height="800" type="application/pdf" data="/test.pdf?#zoom=100&scrollbar=0&toolbar=0&navpanes=0">
                    <p>Insert your error message here, if the PDF cannot be displayed.</p>
                </object> :
                    <a href='/test.pdf' target='true'>click here </a>
            }
        </div>
    )
}



