import Head from "next/head";

export default function About( { name }) {
    return(
        <div>
            <Head>
                <title>About Me</title>
            </Head>
            <p>My name is {name}.</p>
        </div>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            name: 'Kalpesh'
        }
    }
}