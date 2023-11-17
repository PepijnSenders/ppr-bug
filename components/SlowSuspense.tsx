export default async function FastSuspense(): Promise<JSX.Element> {
    const result = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('slow' + Math.random())
        }, 4000)
    })

    return <h1>{result}</h1>
}