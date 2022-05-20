const createFrames = (...args) =>{

    let frames = {};
    let frameKey = 1;
    const rollPlayed = args.length;

    //if((Object.prototype.toString.call(args) === '[object String]'))
       // return 'Invalid Input';
    
    if(rollPlayed<20){
        return 'Can Play more games!! Bye!';
    }

    for(let index = 0; index<rollPlayed; index++){

        let frameValue = [args[index]];
        
        if(args[index] === 10 || frameKey === 10 ) {  // Strike
            if(index+1 < rollPlayed)
                frameValue.push(args[index+1]);
            if(index+2 < rollPlayed)
                frameValue.push(args[index+2]);

            if(frameKey === 10 ) 
                index = rollPlayed; 
        }   
        else if( index+1 <rollPlayed && (args[index]+args[index+1] === 10 )){ //spare

            frameValue.push(args[index+1]);
            index++;

            if(index+1 < rollPlayed)
                frameValue.push(args[index+1]);
        }
        else{
            if(index+1 < rollPlayed)
                frameValue.push(args[index+1]);
            index++;
        }

        frames[frameKey] = frameValue;

        frameKey++;
        
    }
   
    totalScore(frames);
   // console.log(frames);
    return frames;
};

const totalScore = (obj) => {

    if(typeof(obj)==='string'){
        return "No Score";
    }
    let score = 0;
    for(let key = 1; key<=10; key++){
        obj[key].forEach(value => score += value);
    }

   console.log(score);
    return score;
};

createFrames(6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

module.exports = {
    totalScore,
    createFrames
};