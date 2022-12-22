// app.ts

import { BottomNavigation, TabContentItem } from "@nativescript-community/ui-material-bottom-navigation"
import { BottomNavigationAttributes } from "@nativescript-community/ui-material-bottom-navigation/react"
import { NativeScriptProps } from "@nativescript-community/solid-js"

export interface TabContentItemAttributes {
	canBeLoaded?: boolean;
	index: number;
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			/**
			 * If determining the GradientAttributes is too much work,
			 * you could substitute it for `any` type!
			 */
			tabcontentitem: NativeScriptProps<any, any>
			bottomnavigation: NativeScriptProps<BottomNavigationAttributes, BottomNavigation>
			tabstrip: NativeScriptProps<any, any>
			tabstripitem: NativeScriptProps<any, any>
			lottieview: NativeScriptProps<any, any>
		}
	}
}