const outer = (): void => {
    const hello = 'Hello';
    const world = 'outer world!';
    const inner = (): void => {
        const world = 'inner world!';
        console.log(`${hello} ${world}`);
    }
    inner();

    console.log(`${hello} ${world}`);
outer();
}
