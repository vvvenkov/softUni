function trainingLab(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);

    let widthCm = width * 100;
    let widthCmAfterWalkway = widthCm - 100;
    let workSpaceswidth = 70;
    let workSpacesSumW = Math.floor(widthCmAfterWalkway / workSpaceswidth);

    let lengthCm = length * 100;
    let workSpaceLength = 120;
    let workSpacesSumL = Math.floor(lengthCm / workSpaceLength)

    let totalWorkspaces = workSpacesSumL * workSpacesSumW;
    console.log(totalWorkspaces - 3);
}