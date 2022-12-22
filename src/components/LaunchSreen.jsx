// import { LottieView } from "@nativescript-community/ui-lottie"
// import { ContentView, CoreTypes, EventData, Animation } from "@nativescript/core"

// const LaunchScreen = () => {
//     // TS let lottieRef: LottieView
//     let lottieRef

//     const goToHome = () => {
//         // __unstable__forwardNavOpts.push({ transition: { name: 'fade', duration: 2000 }, clearHistory: true })
//         // navigation.navigate('Home')
//     }

//     // TS const loadedLottie = (args: EventData) => {
//     const loadedLottie = (args) => {
//         // TS const lottieView = (args.object as LottieView)
//         const lottieView = args.object
//         lottieRef = lottieView

//         if (lottieView)
//             lottieView.completionBlock = (finished) => {
//                 if (finished) {
//                     const animate = new Animation([{
//                         target: lottieView,
//                         opacity: 0,
//                         scale: { x: 0.7, y: 0.7 },
//                         // translate: {x: 0, y: 10},
//                         duration: 300,
//                         curve: CoreTypes.AnimationCurve.linear,
//                     }])

//                     animate
//                         .play()

//                     lottieView.opacity = 0;
//                     lottieView.scaleX = lottieView.scaleY = 1;
//                     goToHome();
//                 }
//             };
//         playLottie();
//     }

//     const loadedColor = (args) => {
//         // TS const colorView = args.object as ContentView
//         const colorView = args.object
//         colorView.opacity = 0;
//         colorView
//             .animate({
//                 scale: { x: 4, y: 4 },
//                 opacity: 1,
//                 duration: 700,
//                 delay: 3300,
//                 curve: CoreTypes.AnimationCurve.easeInOut,
//             })
//             .then(() => {
//                 colorView
//                     .animate({
//                         scale: { x: 8, y: 8 },
//                         opacity: 0,
//                         duration: 500,
//                         curve: CoreTypes.AnimationCurve.easeInOut,
//                     })
//                     .then(() => { })
//                     .catch(() => { });
//             })
//             .catch(() => { });
//     }

//     const playLottie = () => {
//         lottieRef.animate({
//             opacity: 1,
//             duration: 200,
//         })
//             .then(() => { })
//             .catch(() => { });

//         lottieRef.playAnimation();
//     }

//     return (
//         <gridlayout className="w-full bg-[#c1e7fd]">
//             <label text="hello" className=" text-3xl" row={0}></label>
//         </gridlayout>
//     )
// }

// export default LaunchScreen

import { createSignal } from 'solid-js';

const App = () => {
  const [count, setCount] = createSignal(0);
  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <>
      <actionbar title="Hello, SolidJS!"></actionbar>
      <stacklayout>
        <label>
          You have tapped {count()} time{count() === 1 ? '' : 's'}
        </label>
        {
          // use 'on:___' instead of 'on___' for event handlers
          // See https://github.com/SudoMaker/dominative-solid#event-handling for detail
        }
        <button class="-primary text-8xl bg-black" on:tap={increment}>
          Tap me!
        </button>
      </stacklayout>
    </>
  );
};

export default App ;
