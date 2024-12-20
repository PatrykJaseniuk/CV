
import { Markdown } from '@/components/Markdown';
import { readFileSync, readdirSync } from 'fs';

export const generateStaticParams = () => {

    // get all file names form the directory
    const files = readdirSync(`${process.cwd()}/src/Data`)



    return (files as string[]).map((file) => ({ nazwa: file }))
}

export default ({ params }: { params: { nazwa: string } }) => {
    const { nazwa } = params;

    const tekst = readFileSync(`${process.cwd()}/src/Data/${nazwa}`, 'utf8')

    return (
        <Markdown src={tekst} />
    )
}