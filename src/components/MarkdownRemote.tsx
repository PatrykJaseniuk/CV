import { useState, useEffect } from "react";
import { Markdown } from "./Markdown";

export const MarkdownViewer = ({ url }: { url: string }) => {

    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        // Tutaj wczytaj zawartość pliku Markdown, na przykład za pomocą fetch lub z pliku
        // Przykład wczytania zawartości z pliku "sample.md":
        fetch(url)  // Zmień ścieżkę do swojego pliku
            .then((response) => response.text())
            .then((data) => setMarkdownContent(data))
            .catch((error) => console.error(error));
    }, [url]);

    return (
        <Markdown src={markdownContent} />
    );
}