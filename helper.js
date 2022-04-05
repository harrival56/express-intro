
function err(err){
    return err
}


function verifyNum(num) {
    let myNums =[]
    for (x of num){
        let trueNum = Number(x)
        if (trueNum){
            myNums.push(trueNum)
        } else {
            return err(`${x} is not a Number`)
        }
    }
    return myNums
}

function mean(numArr) {
    let total = 0
    for (x of numArr){
    total = total + x
    }
    return total/numArr.length
}

function median(numArr){
    const mid = Math.floor(numArr.length / 2);
    nums = [...numArr].sort((a, b) => a - b);
    const result = nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    return result    
}

function mode(numArr) {
    let result = Object.values(
        numArr.reduce((count, e) => {
          if (!(e in count)) {
            count[e] = [0, e];
          }
          count[e][0]++;
          return count;
        }, {})
    ).reduce((nums, v) => v[0] < nums[0] ? nums : v, [0, null])[1];
    return result
}

module.exports = {mode, median, mean, verifyNum, err}