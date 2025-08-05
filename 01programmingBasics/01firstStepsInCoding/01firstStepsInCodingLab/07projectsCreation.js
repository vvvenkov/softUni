function architectsProjects(input) {
    let name = (input[0]);
    let projects = Number(input[1])
    let hours = (input[1]) * "3"
    let res = `The architect ${name} will need ${hours} hours to complete ${projects} project/s.`
    console.log(res)
}