const datestring = (d) => (
    d.getFullYear()
    + "-" + (d.getMonth() + 1)
    + "-" + d.getData()
)

console.log(datestring(new Date()));

