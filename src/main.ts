import wasm from "lib.rs";

export async function increment(a: number) {
    const { instance } = await wasm;
    return instance.exports.add(1, a);
}
