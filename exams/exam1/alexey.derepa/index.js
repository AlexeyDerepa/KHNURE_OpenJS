function getFriendlyNumbers(start, end) {
    
    if( start < 0 
    || end < 0 
    || start > end
    || !Number.isInteger(start)
    || !Number.isInteger(end)
    ) 
        return false;

    function Sum(number)
    {
        let sum = 1, i, begin = 2, step = 1;
        if (number & 1)
        {
            step = 2;
            begin = 3;
        }
        for(i = begin; i*i < number; i += step)
            if (number % i == 0)
                sum += (i + number/i);
        if (i*i == number)
        sum += i;
        return sum;
    }


    let a = [];
    let result = [];



    for(let i = start; i <= end ; i++)
    {   
        a[i] = Sum(i);
    }

    for(let i = start; i <= end ; i++) {
        if(a[a[i]] == i && i  < a[i]) {        
            result.push([ i, a[i] ]);
        }
    }
    if(result.length > 0) {
        return result;
    }
    return [];
}

module.exports = {
    firstName: 'Alexey',
    secondName: 'Derepa',
    task: getFriendlyNumbers
}