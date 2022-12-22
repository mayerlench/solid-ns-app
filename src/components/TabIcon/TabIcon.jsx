
import { CoreTypes, EventData, Image, Observable } from "@nativescript/core";
import { createSignal } from "solid-js";

// TS type TabIconProps = {
//   image: string;
//   activeImage: string;
//   active: boolean;
//   className: string;
// }

const _scaleInactive = { x: 0.8, y: 0.8 };
const _scaleActive = { x: 1, y: 1 };

const TabIcon = (props) => {
  // TS const TabIcon = (props: TabIconProps) => {
  // TS let activeImageRef: Image
  // TS let inActiveImageRef: Image
  let activeImageRef
  let inActiveImageRef

  createSignal(() => {
    update()
  })

  const update = () => {
    if (!(activeImageRef.current && inActiveImageRef.current)) {
      return;
    }

    inActiveImageRef.current?.nativeView
      ?.animate({
        opacity: props.active ? 1 : 0,
        scale: props.active ? _scaleActive : _scaleInactive,
        duration: 120,
        curve: CoreTypes.AnimationCurve.easeInOut,
      })
      .catch(() => { });

    activeImageRef.current?.nativeView
      ?.animate({
        opacity: props.active ? 0 : 1,
        scale: props.active ? _scaleActive : _scaleInactive,
        duration: 120,
        curve: CoreTypes.AnimationCurve.easeInOut,
      })
      .catch(() => { });
  }
  return (
    <>
      <image
        src={props.image}
        className={props.className}
        horizontalAlignment="center"
        onLoaded={(args) => {
          // const image = args.object as Image
          const image = args.object
          image.opacity = 0

          update()
        }}
        ref={activeImageRef}
      />
      <image
        src={props.activeImage}
        className={props.className}
        horizontalAlignment="center"
        onLoaded={(args) => {
          // const image = args.object as Image
          const image = args.object
          image.opacity = 0

          update()

        }}
        ref={inActiveImageRef}
      />
    </>
  )
}


export default TabIcon