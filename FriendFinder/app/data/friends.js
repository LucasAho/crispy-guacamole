var friendsArray = [
        {
        "name": "Jacob",
        "photo": "https://assets1.ignimgs.com/2019/12/01/twitter-in-stream-wide-baby-yoda-soup-mandalorian-1575172376899.jpg",
        "scores": [
            1,
            3,
            5,
            2,
            5,
            3,
            1,
            4,
            2,
            5
        ]
    },
    {
        "name": "Nathan",
        "photo": "https://assets1.ignimgs.com/2019/12/01/twitter-in-stream-wide-baby-yoda-soup-mandalorian-1575172376899.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Tarkin",
        "photo": "https://assets1.ignimgs.com/2019/12/01/twitter-in-stream-wide-baby-yoda-soup-mandalorian-1575172376899.jpg",
        "scores": [
            5,
            4,
            3,
            2,
            1,
            5,
            4,
            3,
            2,
            1
        ]
    },
    {
        "name": "Snarf",
        "photo": "https://assets1.ignimgs.com/2019/12/01/twitter-in-stream-wide-baby-yoda-soup-mandalorian-1575172376899.jpg",
        "scores": [
            1,
            2,
            3,
            4,
            5,
            1,
            2,
            3,
            4,
            5
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

