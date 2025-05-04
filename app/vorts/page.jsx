import React from 'react'
import styles from './style.module.scss'
import { read } from '@/server/controller/vort.controller'
import { connect } from '@/server/connect'
import Link from 'next/link'
import Image from 'next/image'

export default async function Vorts() {
    await connect()
    const vorts = await read()
    // console.log({ vorts });
    let subjects = vorts.map(v => v.subject).filter((item, index) => vorts.map(v => v.subject).indexOf(item) === index);

    return (
        <div className={styles.vorts}>
            <div className={styles.header}>
                <Image src={'/images/image.png'} fill alt='rabbay' />
                <h5>{`זמנים וחגים > שבת`}</h5>
                <h1>שיעורים ומאמרים</h1>
                <ul>
                    {subjects.map(v =>
                        <li>
                            <Link href={'/vorts/vortId'}>{v}</Link>
                        </li>)}
                </ul>
            </div>
            <div className={styles.subjects}>
                {subjects.map(s =>
                <Link href={'/vorts/vortId'} className={styles.subject}>
                    <Image src={'/images/vorts/9.jpg'} width={400} height={200} alt='subject' />
                    <h2>{s}</h2>
                    {vorts.filter(v => v.subject === s)
                        .sort((a, b) => a.order > b.order ? 1 : -1)
                        .map(v => <p>{v.title}</p>)}
                </Link>
                )}
            </div>
        </div>
    )
}

/* <div>connect</div>
            {
                Object.entries(vorts).map(([book, content]) => {
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
            } */
