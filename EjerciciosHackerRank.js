function lonelyinteger(a) {
    //Write your code here
    let ans = 0;
    for (let i = 0; i < a.length; i++) {
        ans ^= a[i]
    }
    return ans;
}


/****************************************************/


function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length; i++){
        if((grades[i] >= 38) && ((((grades[i] % 5) == 3) || ((grades[i] % 5) == 4)))){
            grades[i] = grades[i] + (5 - (grades[i] % 5));
        }
    }
    return grades;
}


/****************************************************/


function flippingBits(n) {
    // Write your code here
    return (2**32)-1-n;
}


/****************************************************/


function diagonalDifference(arr) {
    // Write your code here
    var n = arr[0].length;
    var leftSum = 0;
    var rightSum = 0;
    
    for(var i = 0, j = n - 1; i < n; i++, j--){
        leftSum += arr[i][i];
        rightSum += arr[i][j];
    }
    var difference = leftSum - rightSum;
    
    return Math.abs(difference);
}


/****************************************************/


function countingSort(arr) {
    // Write your code here
    let result = new Array(100).fill(0);
    for(let val of arr){
        result[val]++;
    }
    return result;
}


/****************************************************/


function countingValleys(steps, path) {
    // Write your code here
    let valleys = 0;
    let elevation = 0;
    for(let i = 0; i < steps; i++){
        if(path[i] == 'D'){
            elevation--;
        }else{//'U'
            if(elevation == -1){
                valleys++;
            }
            elevation++;
        }
    }
    return valleys;
}


/****************************************************/


function pangrams(s) {
    // Write your code here
    const sent = s.toLowerCase();
    const setString = new Set(sent);
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const setAlpha = new Set(alpha);
    if(setString.size < 26){
        return 'not pangram';
    }else if(difference(setAlpha, setString).size==0){
        return 'pangram';
    }else{
        return 'not pangram';
    }
}

function difference(setA, setB){
    let _diff = new Set(setA);
    for(let elem of setB){
        _diff.delete(elem);
    }
    return _diff;
}


/****************************************************/


function marsExploration(s) {
    // Write your code here
    let cnt = 0;
    for(let i = 0; i < s.length; i += 3){
        if(s[i] !== 'S'){
            cnt++;
        } if(s[i+1] !== 'O'){
            cnt++;
        } if(s[i+2] !== 'S'){
            cnt++
        }
    }
    return cnt;
}