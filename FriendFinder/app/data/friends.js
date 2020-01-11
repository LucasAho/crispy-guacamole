var friendsArray = [

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

