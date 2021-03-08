const fs = require('fs/promises')

fs.readFile('input.csv').then((buffer) => {
    const lines = buffer.toString().split('\n').map(line => line.split(','))
    const head = lines.shift()
    const people = lines.map(line => {
        const object = {}
        for (let i = 0; i < head.length; i++) object[head[i]] = line[i]
        return object
    })

    fs.writeFile('output.json', JSON.stringify(people))
})