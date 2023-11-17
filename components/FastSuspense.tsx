export default async function FastSuspense(): Promise<JSX.Element> {
    const result = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('fast' + Math.random())
        }, 500)
    })

    return <h1>{result}</h1>
}