function songs(arr) {
    let numberOfSongs = arr.shift();
    let type = arr.pop();

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let listSongs = [];

    for (let info of arr) {
        let [typeList, name, time] = info.split("_");
        new Song(typeList, name, time);

        if (typeList === type) {
            console.log(name);
        } else if (typeList === "all") {
            console.log(name);
        }
    }


}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])