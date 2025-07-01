// src/types/css-modules.d.ts
declare module '*.module.css' {
	const classes: { [key: string]: string }
	export = classes
}

declare module '*.module.scss' {
	const classes: { [key: string]: string }
	export default classes
}

declare module '*.module.sass' {
	const classes: { [key: string]: string }
	export default classes
}

declare module '*.jpg' {
	const src: string
	export default src
}

declare module '*.png' {
	const src: string
	export default src
}

declare module '*.svg' {
	import * as React from 'react'

	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
	const src: string
	export default src
}
