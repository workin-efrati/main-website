import React from 'react'
import styles from './style.module.scss'
import { read } from '@/server/controller/vort.controller'
import { connect } from '@/server/connect'

export default async function Vorts() {
    await connect()
    const vorts = await read()
    console.log({ vorts });
    return (
        <div className={styles.layout}>
            <div>connect</div>
            {/* {
                Object.entries(obj).map(([book, content]) => {
                    return (
                        <div className={styles.oneBook} key={book}>
                            <div className={styles.par}>
                                {book}
                                {console.log(book)}
                            </div>
                            {
                                Object.entries(content).map(([subParasha, details]) => {
                                    return (
                                        // console.log(subParasha);
                                        <div className={styles.parashas}>
                                            {subParasha}
                                        </div>
                                        // console.log(`    סדר: ${details.order}`);

                                        // console.log('    וורטים:');
                                        // Object.entries(details.vorts).forEach(([vortId, vortContent]) => {
                                        //     console.log(`      ${vortId}: ${vortContent}`);
                                        // });
                                        // console.log('---');
                                    )
                                })}

                        </div>
                    )
                })
            } */}
        </div>
    )
}
