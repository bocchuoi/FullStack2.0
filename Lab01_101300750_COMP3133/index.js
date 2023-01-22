const fs = require("fs")
const csv = require('csv-parser')

const canCSV = "canada.csv"
const usCSV = "usa.csv"


if (fs.existsSync(canCSV)) {
    fs.unlinkSync(canCSV)
}

if (fs.existsSync(usCSV)) {
    fs.unlinkSync(usCSV)
}

let csvHeader = "country,year,population\n"
let canStream = fs.createWriteStream(canCSV)
let usStream = fs.createWriteStream(usCSV)
canStream.write(csvHeader)
usStream.write(csvHeader)

fs.createReadStream('input_countries.csv').pipe(csv())
.on('data', (data) => {
    if (data.country == "Canada") {
        canStream.write(`${data.country},${data.year},${data.population}\n`)
    }
    else if (data.country == "United States") {
        usStream.write(`${data.country},${data.year},${data.population}\n`)
    }
})

