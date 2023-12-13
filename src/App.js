import './App.css';
import DataFetching from './components/dataFetching/DataFetching';
import IntervalClassCounter from './components/useEffectExample/IntervalClassCounter';
import IntervalHookCounter from './components/useEffectExample/IntervalHookCounter';
// import ClassCounterOne from './components/ClassCounterOne';
// import ClassMouse from './components/useEffectExample/ClassMouse';
// import HookMouse from './components/useEffectExample/HookMouse';
import MouseContainer from './components/useEffectExample/MouseContainer';
// import HookCounterOne from './components/useEffectExample/HookCounterOne';
// import HookCounterFour from './components/HookCounterFour';
// import HoocCounterTwo from './components/HoocCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HoocCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse />  */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
