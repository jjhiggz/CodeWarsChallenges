

//  Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
 
//  To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.
 
//  For example:
 
//    { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
//  { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm
 
//  JavaScript
//  Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.
 
//  For example, given:
 
//    [
//    { startTime: 0,  endTime: 1 },
//    { startTime: 3,  endTime: 5 },
//    { startTime: 4,  endTime: 8 },
//    { startTime: 10, endTime: 12 },
//    { startTime: 9,  endTime: 10 },
//  ]
 
//  JavaScript
//  your function would return:
 
//    [
//    { startTime: 0, endTime: 1 },
//    { startTime: 3, endTime: 8 },
//    { startTime: 9, endTime: 12 },
//  ]
 
//  JavaScript
//  Do not assume the meetings are in order. The meeting times are coming from multiple teams.
 
//  Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.
 
//  Breakdown
//  What if we only had two ranges? Let's take:
 
//    [{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]
 
//  JavaScript
//  These meetings clearly overlap, so we should merge them to give:
 
//    [{ startTime: 1, endTime: 4 }]
 
//  JavaScript
//  But how did we know that these meetings overlap?
 
//  We could tell the meetings overlapped because the end time of the first one was after the start time of the second one! But our ideas of "first" and "second" are important here—this only works after we ensure that we treat the meeting that starts earlier as the "first" one.
 
//  How would we formalize this as an algorithm? Be sure to consider these edge cases:
 
//  The end time of the first meeting and the start time of the second meeting are equal. For example: [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]
//  The second meeting ends before the first meeting ends. For example: [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]
//  Here's a formal algorithm:
 
//  We treat the meeting with earlier start time as "first," and the other as "second."
//  If the end time of the first meeting is equal to or greater than the start time of the second meeting, we merge the two meetings into one time range. The resulting time range's start time is the first meeting's start, and its end time is the later of the two meetings' end times.
//  Else, we leave them separate.
//  So, we could compare every meeting to every other meeting in this way, merging them or leaving them separate.
 
//  Comparing all pairs of meetings would take O(n^2)O(n 
//  2
//   ) time. We can do better!
 
//  If we're going to beat O(n^2)O(n 
//  2
//   ) time, maybe we're going to get O(n)O(n) time? Is there a way to do this in one pass?
 
//  It'd be great if, for each meeting, we could just try to merge it with the next meeting. But that's definitely not sufficient, because the ordering of our meetings is random. There might be a non-next meeting that the current meeting could be merged with.
 
//  What if we sorted our array of meetings by start time?
 
//  Then any meetings that could be merged would always be adjacent!
 
//  So we could sort our meetings, then walk through the sorted array and see if each meeting can be merged with the one after it.
 
//  Sorting takes O(n\lg{n})O(nlgn) time in the worst case. If we can then do the merging in one pass, that's another O(n)O(n) time, for O(n\lg{n})O(nlgn) overall. That's not as good as O(n)O(n), but it's better than O(n^2)O(n 
//  2
//   ).


// PLEASE SEE MY SOLUTION BELOW

function mergeRanges(meetings) {
  let timeMap = {}
  let returnArray = [] // this will be the return value
  let [startTime, endTime ]= [false,false] // this will be used to store start and end times in the for loop
  
  // here we are going to make a mapping of all the meeting times, they key inside of timeMap
  // to do this we include blocks between start time and end time
  // }
  // will be  time block, and the value will be a boolean to clarify whether or not that time
  // if true, then time block must be interpreted as an end time
  // if false, then time block may be interpretes as end time, start time, or between
  
  //for example 1 -4 will result in a time Map of {
    // 1:false,
    // 2:false,
    // 3:false,
    // 4:true
  //}
  meetings.forEach(meeting => {
    for(let i = meeting.startTime; i <= meeting.endTime ; i++){
      // only force time block to be an end time, if the endtime isn't overlapped by an existing block
      timeMap[i] = i === meeting.endTime && !( i in timeMap ) ? true : false
    }
  })
  
  // here we are performing a sort, but this sort is not related to the size of the input
  // as a result this can still be O(n) given that the number of possible times in a
  // given can be simplified to finite
  const numSort =  Object.keys(timeMap).sort(function(a, b){return a-b});

  for(let i = 0 ; i < numSort.length ; i++){
    if( i === 0 ){
      //if first term must be start time
      startTime = +numSort[i] 
    }
    else if(
      // if last term, must be an end time
      i  === numSort.length - 1
    ){
      endTime = +numSort[i]
      returnArray.push({ startTime: startTime, endTime: endTime })
    }
    else if (
      // checks if the time was an end only time
      timeMap[numSort[i]] === true
    ){
      endTime = +numSort[i]
      returnArray.push({ startTime: startTime, endTime: endTime })
      startTime = +numSort[i+1]
    }
    else if(
      // checks if gap between numSort[i] and numSort[i-1] is greater than one
      // it also has to check that the previous term wasn't an end term
        i > 0 
        && numSort[i] - numSort[i-1] > 1 
        && timeMap[numSort[i-1]] === false
      ){
      endTime = +numSort[i -1]
      returnArray.push({ startTime: startTime, endTime: endTime })
      startTime = +numSort[i]
    }
  }
  return returnArray
}






