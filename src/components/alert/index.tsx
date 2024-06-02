import type { PropsWithChildren, ReactElement, ReactNode } from 'react';

type Variant = 'info' | 'error' | 'success'

interface AlertProps extends PropsWithChildren {
	variant?: Variant;
	title: ReactNode;
	isVisible: boolean;
}

const AlertConfig = {
	info: 'border-blue-500 text-blue-500',
	error: 'border-red-500 text-red-500',
	success: 'border-green-500 text-green-500',
};

const Alert = ({ children, title, variant = 'info', isVisible = true }: AlertProps): ReactElement | null => {
	console.log(children);

	if (!isVisible) return null;
	return (
		<div className={`${AlertConfig[variant]} flex flex-col border-2 rounded-md p-2 divide-y divide-blue-500 bg-white`}>
			<div className="text-2xl font-semibold">{title}</div>
			{
				children && <div className="mt-4">{children}</div>
			}
		</div>
	);
};

export default Alert;
