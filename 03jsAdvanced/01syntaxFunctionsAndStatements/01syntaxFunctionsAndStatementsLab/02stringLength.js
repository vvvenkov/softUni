function stringLength(str1, str2, str3) {
    let totalLength = str1.length + str2.length + str3.length;
    let averageLength = (str1.length + str2.length + str3.length) / 3;

    console.log(totalLength);
    console.log(Math.trunc(averageLength));
}
stringLength('chocolate', 'ice cream', 'cake')