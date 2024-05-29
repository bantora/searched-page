import type { ReactNode, ReactElement, PropsWithChildren } from 'react';

type Color = 'primary' | 'secondary'

interface ButtonProps extends PropsWithChildren {
	color: Color;
}

const buttonConfig = {
	// Colors 
	primary: 'border-2 p-2 border-blue-500 text-blue-500 rounded hover:bg-blue-100',
	secondary: 'p-2 bg-orange-500 rounded hover:bg-orange-700',
};
const Button = ({ children, color, ...rest }: ButtonProps): ReactElement => {
	return <button {...rest} className={`${buttonConfig[color]} `}>{children}</button>
}


export default Button;