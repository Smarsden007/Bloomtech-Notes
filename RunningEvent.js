// The scope of `random` is too loose 


const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  // The scope of `days` is too tight 
  const getTrainingDays = event => {
  let days;
    if (event === 'Marathon') {
      days = 100;
    } else if (event === 'Triathlon') {
      days = 200;
    } else if (event === 'Pentathlon') {
    days = 300;
    }
  //changed 1st from 50 to 100, second from 100 to 200 and third from 200 to 300
    return days;
  };
  
  const name = 'Nala';
  const logEvent = (name, event) => {
    
    console.log(`${name}'s event is: ${event}`);
  };
  const logTime = (name, days) => {
    
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  
  logEvent(name,event);
  logTime(name,days);
  
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
   
  logEvent(name2, event2);
  logTime(name2, days2);

  Let RunningForever{
    return 
  }