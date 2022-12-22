import { EventData, View } from "@nativescript/core";

export function uxLabelFadeIn(args) {
  const label = args.object;
  label.opacity = 0;
  label
    .animate({
      opacity: 1,
      duration: 600,
      delay: 300,
    })
    .then(() => {})
    .catch(() => {});
}
{
  /* export function uxLabelFadeIn(args: EventData) {
    const label = <View>args.object;
    label.opacity = 0;
    label
      .animate({
        opacity: 1,
        duration: 600,
        delay: 300,
      })
      .then(() => {})
      .catch(() => {});
} */
}
