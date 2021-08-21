// https://www.codewars.com/kata/5aa736a455f906981800360d
// Longer Version
function feast(beast, dish) {
    beast_first = beast.charAt(0)
    beast_last = beast.charAt(beast.length-1)
    beast_combined = beast_first + beast_last

    dish_first = dish.charAt(0)
    dish_last = dish.charAt(dish.length-1)
    dish_combined = dish_first+dish_last

    if(beast_combined == dish_combined){
        return true
    }
    else{
        return false
    }
}

// Shorter Version
function feast(beast, dish) {
    beast_combined = beast.charAt(0) + beast.charAt(beast.length-1) 
    dish_combined = dish.charAt(0) + dish.charAt(dish.length-1)
    return beast_combined == dish_combined ? true : false;
    }
