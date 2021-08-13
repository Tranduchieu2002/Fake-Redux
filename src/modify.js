export default function (reducer) {
  return (prevStates, action, args) => {
    console.group("actions", action);
    console.log("prevStates: ", prevStates);
    const nextStates = reducer(prevStates, action, args);
    console.log("arguments: ", args);
    console.log("nextStates: ", nextStates);
    console.groupEnd();
    return nextStates;
  };
}
