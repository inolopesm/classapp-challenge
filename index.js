const fs = require('fs/promises')
// const phoneUtil = require('google-libphonenumber')

fs.readFile('input.csv').then((buffer) => {
    const lines = buffer.toString().split('\n').map(line => line.split(','))
    const head = lines.shift()
    const people = lines.map((line) => {
        const object = {}
        for (let i = 0; i < head.length; i++) {
            object[head[i]] = line[i]
        }
        return object
    })

    // const people = []
    // for (const line of lines) {
    //     const personIndex = people.findIndex(person => person.eid === line.eid))
    //     if (personIndex !== -1) {
    //         people[personIndex].groups.push(line.group)
    //         people[personIndex].addresses.push({
    //             type: '',
    //             tags: [],
    //             address: ''
    //         })
    //         people.push({
    //             eid: -1,
    //             fullname: "",
    //             groups: [],
    //             addresses: [],
    //             invisible: false,
    //             see_all: false
    //         })
    //     }
    // }
    //     return object
    // })

    fs.writeFile('output.json', JSON.stringify(people))
})