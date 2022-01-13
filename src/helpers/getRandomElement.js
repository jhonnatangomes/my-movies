export default function getRandomElement(arr) {
    const max = arr.length;

    const randomIndex = Math.floor(Math.random() * max);
    return arr[randomIndex];
}
