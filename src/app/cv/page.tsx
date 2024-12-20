import { readdirSync } from 'fs'
import Link from 'next/link'

export default function () {

    const files = readdirSync(`${process.cwd()}/src/Data`)
    const cos = require('@/Data/cv_eng.md')
    console.log(cos)
    console.log('witam')


    return (
        <div>
            <h1> all CVs</h1>
            <ul>
                {files.map((cv, index) => <li><Link key={index} href={`cv/${cv}`}>{cv}</Link></li>)}
            </ul>

        </div>
    )
}