import type { ReactElement, ReactNode } from 'react';

type Variant = 'info' | 'error' | 'success'

interface AlertProps {
	variant: Variant;
	title: ReactNode;
	list?: ReactNode[];
	isVisible: boolean;
}

const AlertConfig = {
	info: 'border-blue-500 text-blue-500',
	error: 'border-red-500 text-red-500',
	success: 'border-green-500 text-green-500',
};

const Alert = ({ list, title, variant, isVisible = true }: AlertProps): ReactElement | null => {
	if (!isVisible) return null;
	return (
		<div className={`${AlertConfig[variant]} flex border-2 rounded-md p-2`}>
			<div className="">{title}</div>
			{
				list && <ul className="mt-1.5 list-disc list-inside">
					{list.map((val, ind) => <li key={`${ind}${val}`}>{val}</li>)}
				</ul>
			}
		</div>
	);
};

export default Alert;
