const parseData = (input) => {

    let {data} = input;
    let result = [];

    for (let information of data) {
        result.push({name: information[0], age: information[1], gender: information[2], birthday: information[3]});
    }
    return result;
}

export {parseData};
