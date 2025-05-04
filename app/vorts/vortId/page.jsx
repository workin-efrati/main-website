"use client"
import React from 'react'
import styles from './style.module.scss'
export default function VortId() {
    const width = window.innerWidth
    const params = {
        vortId: "וורט 1"
    }
    const obj = {
        "בראשית": {
            "נוח": {
                vorts: {
                    111: 'first vort',
                    222: 'secund vort'
                },
                order: 1
            },
            "ויקרא": {
                vorts: {
                    111: 'first vort',
                    222: 'secund vort'
                },
                order: 2
            },
        },
        "שמות": {
            "בוא": {
                vorts: {
                    111: 'first vort',
                    222: 'secund vort'
                },
                order: 1
            },
            "בשלח": {
                vorts: {
                    111: 'first vort',
                    222: 'secund vort'
                },
                order: 2
            },
        }
    }
    Object.entries(obj).forEach(([parasha, content]) => {
        console.log(`פרשה: ${parasha}`);

        Object.entries(content).forEach(([subParasha, details]) => {
            console.log(`  תת-פרשה: ${subParasha}`);
            console.log(`    סדר: ${details.order}`);

            console.log('    וורטים:');
            Object.entries(details.vorts).forEach(([vortId, vortContent]) => {
                console.log(`      ${vortId}: ${vortContent}`);
            });
        });

        console.log('---');
    });
    return (
        <div className={styles.container}>
            {
                width > 1023 ? <object width="100%" height="800" type="application/pdf" data={`/${params.vortId}.pdf?#zoom=100&scrollbar=0&toolbar=0&navpanes=0`}>
                    <p>Insert your error message here, if the PDF cannot be displayed.</p>
                </object> :
                    <a href='/test.pdf' target='true'>click here </a>

            }
        </div >
    )
}
