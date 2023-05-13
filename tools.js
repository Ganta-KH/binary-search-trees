export function randomArray(size, range) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * range));
}

export function addRandomToTree(tree, numbers, range) {
    if (numbers === 0) return
    tree.insert(Math.floor(Math.random() * range))
    addRandomToTree(tree, numbers - 1, range)
}