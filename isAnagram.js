//build a function that takes two strings and returns true if they are anagrams of each other. I.E. both strings contain the same letters.

//use a map


const isAnagram = (a, b) => {
    let anaMap = new Map()
    for (let i = 0; i < a.length; i++){

        if (anaMap.get(a[i]) == 0) {
            anaMap.set(a[i], 1)
        } else {
            
        }
       
        anaMap.set(a[i], letterCount)
    }
}


