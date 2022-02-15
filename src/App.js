import { useReducer, useRef } from "react";

// Init State:
const initState = {
  job: "",
  jobs: []
};
// Action:
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload
  };
};
// reducer:
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: [...state.jobs].filter((job, index) => index !== action.payload)
      };
    default:
      throw new Error("Invalid action");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const h1Ref = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    h1Ref.current.focus();
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Todo</h3>
      <input
        ref={h1Ref}
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;