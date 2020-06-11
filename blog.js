var data = {
    title: "Evies log",
    entries: [
        {   
            icon: "poopy",
            time: "0700",
            date: "06-06-2020",
            comment: "So Many Poop!"
        },
        {
            icon: "bottle",
            volume: 50,
            time: "0730",
            date: "06-06-2020"
        },
        {   
            icon: "wet",
            time: "1230",
            date: "06-06-2020"
        }   
    ]
};
var jsonData = JSON.stringify(data);
//var jsonData = JSON.parse(jsonData);

alert(jsonData.entries[0].icon);