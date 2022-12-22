import { GestureStateTypes, PanGestureEventData, ScrollView, View, Animation, AnimationDefinition, EventData, getCurrentPage } from "@nativescript/core";
import { CubicBezierAnimationCurve } from "@nativescript/core/ui/animation";


export function useHideOnScroll(props) {
    const { scrollViewId, elementId } = props

    const minStretch = props.minStretch || 0;
    const maxStretch = props.maxStretch || 40;
    const animDuration = props.animDuration || 250;

    let animation = { animation:  null, animationDelta: null }

    return {
        onWrapperLoaded: (args) => {
            const page = (args.object).page;
            const scrollView = page.getViewById(scrollViewId) 
            const bar = page.getViewById(elementId) 

            if (!bar || !scrollView)
                return console.error('useHideOnScroll: You must pass in a valid scrollview and element ID')

            bar.eachChildView((v) => {
                v.opacity = 0;
                return true;
            });

            bar.translateY = bar.translateY - maxStretch;
            bar.height = 0;

            scrollView.marginTop = 1 * -maxStretch + -10;
            // @ts-ignore
            scrollView.on('pan', (args) => {

                if (args.state === GestureStateTypes.changed) {
                    if (args.deltaY > 0) {
                        if (animation.animation?.isPlaying && animation.animationDelta > 0) return
                        animation.animationDelta = args.deltaY

                        const def1 = {
                            target: bar,
                            duration: animDuration,
                            translate: { x: 0, y: minStretch },
                            curve: new CubicBezierAnimationCurve(.18, .52, 0, 1)
                        };
                        const def2= {
                            target: scrollView,
                            duration: animDuration,
                            translate: { x: 0, y: maxStretch },
                            curve: new CubicBezierAnimationCurve(.18, .52, 0, 1)
                        };
                        const childDefs = [];
                        bar.eachChildView((v) => {
                            const def3 = {
                                target: v,
                                duration: animDuration * 2,
                                opacity: 1
                            };
                            childDefs.push(def3);
                            return true;
                        });

                        animation.animation = new Animation([def1, def2, ...childDefs]);
                        bar.height = 'auto'
                        animation.animation.play();
                    }
                    else {
                        if (animation.animation?.isPlaying && animation.animationDelta < 0) return

                        animation.animationDelta = args.deltaY
                        const def1= {
                            target: scrollView,
                            duration: animDuration,
                            translate: { x: 0, y: -minStretch },
                            curve: new CubicBezierAnimationCurve(.18, .52, 0, 1)
                        };

                        const def2= {
                            target: bar,
                            duration: animDuration,
                            translate: { x: 0, y: -maxStretch },
                            curve: new CubicBezierAnimationCurve(.18, .52, 0, 1)
                        };

                        const childDefs = [];
                        bar.eachChildView((v) => {
                            const def3= {
                                target: v,
                                duration: animDuration,
                                opacity: 0
                            };
                            childDefs.push(def3);
                            return true;
                        });
                        animation.animation = new Animation([def1, def2, ...childDefs]);
                        animation.animation.play()
                    }
                }
            });
        }
    }
}
// import { GestureStateTypes, PanGestureEventData, ScrollView, View, Animation, AnimationDefinition, EventData, getCurrentPage } from "@nativescript/core";
// import { CubicBezierAnimationCurve } from "@nativescript/core/ui/animation";

// type UseHideOnScrollProps = {
//     animDuration?: number
//     maxStretch?: number
//     minStretch?: number
//     scrollViewId: string
//     elementId: string
// }

// export function useHideOnScroll(props: UseHideOnScrollProps) {
//     const { scrollViewId, elementId } = props

//     const minStretch = props.minStretch || 0;
//     const maxStretch = props.maxStretch || 40;
//     const animDuration = props.animDuration || 250;

//     let animation = { animation:  null, animationDelta: null }

//     return {
//         onWrapperLoaded: (args: EventData) => {
//             const page = (args.object as View).page;
//             const scrollView = page.getViewById(scrollViewId) as ScrollView;
//             const bar = page.getViewById(elementId) as View;

//             if (!bar || !scrollView)
//                 return console.error('useHideOnScroll: You must pass in a valid scrollview and element ID')

//             bar.eachChildView((v: View) => {
//                 v.opacity = 0;
//                 return true;
//             });

//             bar.translateY = bar.translateY - maxStretch;
//             bar.height = 0;

//             scrollView.marginTop = 1 * -maxStretch + -10;
//             // @ts-ignore
//             scrollView.on('pan', (args: PanGestureEventData) => {

//                 if (args.state === GestureStateTypes.changed) {
//                     if (args.deltaY > 0) {
//                         if (animation.animation?.isPlaying && animation.animationDelta > 0) return
//                         animation.animationDelta = args.deltaY

//                         const def1= {
//                             target: bar,
//                             duration: animDuration,
//                             translate: { x: 0, y: minStretch },
//                             curve: new CubicBezierAnimationCurve(.18, .52, 0, 1)
//                         };
//                         const def2= {
//                             target: scrollView,
//                             duration: animDuration,
//                             translate: { x: 0, y: maxStretch },
//                             curve: new CubicBezierAnimationCurve(.18, .52, 0, 1)
//                         };
//                         const childDefs = [];
//                         bar.eachChildView((v: View) => {
//                             const def3= {
//                                 target: v,
//                                 duration: animDuration * 2,
//                                 opacity: 1
//                             };
//                             childDefs.push(def3);
//                             return true;
//                         });

//                         animation.animation = new Animation([def1, def2, ...childDefs]);
//                         bar.height = 'auto'
//                         animation.animation.play();
//                     }
//                     else {
//                         if (animation.animation?.isPlaying && animation.animationDelta < 0) return

//                         animation.animationDelta = args.deltaY
//                         const def1= {
//                             target: scrollView,
//                             duration: animDuration,
//                             translate: { x: 0, y: -minStretch },
//                             curve: new CubicBezierAnimationCurve(.18, .52, 0, 1)
//                         };

//                         const def2= {
//                             target: bar,
//                             duration: animDuration,
//                             translate: { x: 0, y: -maxStretch },
//                             curve: new CubicBezierAnimationCurve(.18, .52, 0, 1)
//                         };

//                         const childDefs = [];
//                         bar.eachChildView((v: View) => {
//                             const def3= {
//                                 target: v,
//                                 duration: animDuration,
//                                 opacity: 0
//                             };
//                             childDefs.push(def3);
//                             return true;
//                         });
//                         animation.animation = new Animation([def1, def2, ...childDefs]);
//                         animation.animation.play()
//                     }
//                 }
//             });
//         }
//     }
// }