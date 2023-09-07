import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'PDF Processor',
	description: 'This is an app that helps you to process your pdf files',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
