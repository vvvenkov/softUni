function constructionCrew(obj) {

    for (let el in obj) {
        if (obj[el] === true) {
            obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
            obj.dizziness = false;
        } else {
            return obj;
        }
    }
    return obj;
}
constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})