export function repeat<T>(action: ()=>T, times: number) : T[] {
    return Array(times).fill(null).map(_ => action());
}