function letterTriples(n) {
    for (let i = 0; i < n; i++) {
        for (let y = 0; y < n; y++){
            for (let j = 0; j < n; j++){
                let char1 = String.fromCharCode("a".charCodeAt() + i);
                let char2 = String.fromCharCode("a".charCodeAt() + y);
                let char3 = String.fromCharCode("a".charCodeAt() + j);
                console.log(`${char1}${char2}${char3}`);
            }
        }
    }
}
letterTriples("3")