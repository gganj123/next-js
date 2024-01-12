import Head from 'next/head';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';




function Highlight({code}){
    hljs.registerLanguage('javascript', javascript);
    hljs.initHighlighting();

return (
    <>
        <Head>
            <link rel="stylesheet" href="/highlight.css" />
        </Head>
        <pre>
            <code className = 'js'>{code}</code>
        </pre>
    </>
)
}
