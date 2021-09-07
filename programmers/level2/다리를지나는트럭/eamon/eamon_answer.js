
const bridge_length = 10;
const weight = 10;
const truck_weights = [10, 8, 8, 2, 4];

function solution(bridge_length, weight, truck_weights) {
  let answer = 0,
    truckOnTheBridge = [],
    curWeight = 0;

  while (truck_weights.length || curWeight) {
    answer++;
    if (truckOnTheBridge.length) {
      if (truckOnTheBridge[0].time + bridge_length === answer) {
        curWeight -= truckOnTheBridge.shift().val;
      }
    }
    if (truck_weights.length) {
      if (weight >= curWeight + truck_weights[truck_weights.length - 1]) {
        let weight = truck_weights.pop();
        truckOnTheBridge.push({
          time: answer,
          val: weight,
        });
        curWeight += weight;
      }
    }
  }
  return answer;
}

console.log(sol(bridge_length, weight, truck_weights));
