import ceil from './Math/ceil'

function greeter (greetings: string) {
    const div = document.createElement('div')
    div.innerHTML = greetings
    document.body.appendChild(div)
}

greeter('Hello word!')

console.log(ceil(6140, -2))
