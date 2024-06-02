import { PropsWithChildren, ReactElement } from 'react';

interface CardProps extends PropsWithChildren {
	title?: string;
}

const Card = ({ title, children }: CardProps): ReactElement => {
	return (
		<div className='p-4 rounded-md border shadow-xl'>
			<div className='text-xl font-bold text-blue-500'>{title}</div>
			<div className='text-gray-500'>{children}</div>
		</div>
	);
};

export default Card;
