var friendsArray = [
    {
        name: "Baby Yoda",
        photo: "https://assets1.ignimgs.com/2019/12/01/twitter-in-stream-wide-baby-yoda-soup-mandalorian-1575172376899.jpg",
        scores: [
            5,
            1,
            4,
            1,
            4,
            3,
            2,
            2,
            4,
            2
        ]
    },
    {
        "name": "Elizabeth",
        "photo": "https://i.ibb.co/3Sc3M2d/6-BA6-B5-BD-9-B27-4-D96-A3-F1-47-C0-B6086-F50.jpg",
        "scores": [
            "3",
            "2",
            "4",
            "3",
            "3",
            "1",
            "4",
            "3",
            "5",
            "2"
        ]
    },
    {
        "name": "Lucas Aho",
        "photo": "https://avatars1.githubusercontent.com/u/15681188?s=460&v=4",
        "scores": [
            "5",
            "4",
            "2",
            "1",
            "2",
            "4",
            "4",
            "2",
            "1",
            "3"
        ]
    }

];

friendFinder = (user) => {

    let diffs1 = [];
    let diffs2 = [];

    friendsArray.forEach(el => {
        let userScores = user.scores;
        let apiScores = el.scores;
        let friendDiffs = 0;        
        for (var i = 0; i < userScores.length; i++ ) {
            friendDiffs += Math.abs(userScores[i] - apiScores[i]);       
        }
        if (friendDiffs !== 0) {
            diffs1.push(friendDiffs);
            diffs2.push(friendDiffs);
        }
    });
    diffs1.sort((a,b) => {return a-b});
    var bestFriend = {
        name: friendsArray[(diffs2.indexOf(diffs1[0]))].name,
        photo: friendsArray[(diffs2.indexOf(diffs1[0]))].photo
    }
    return bestFriend;
}

module.exports = {
    friendsArray: friendsArray,
    friendFinder: friendFinder
};

